import axios from "axios";
import { AsyncParser } from "json2csv";
import fs from "fs";

function normalizeHumanName(name) {
  return name.replace(/\s/g, "-").replace(/\W/g, ""); // Replace spaces with "-" and all non-alphanumeric characters with ""
}

function isNumeric(str) {
  if (typeof str !== "string") return false; // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(Number.parseFloat(str))
  ); // ...and ensure strings of whitespace fail
}

async function createCSVFile(data, filename) {
  try {
    // Write the CSV data to a file
    fs.writeFileSync(filename, data, { encoding: "utf-8" });
    console.log(`CSV file "${filename}" created successfully.`);
  } catch (error) {
    console.error("Error creating CSV file:", error);
  }
}

/**
 * # Foreword
 *
 * STB does pagination by cells, for example, in a 2x2 table, there are 4 cells (excluding headers on both x+y axis)
 * The maximum number of cells that can be returned in a single call is 2000, therefore we should set the limit to 2000 and offset by 2000 to make the most of a single API call
 * We want to prevent any issue in our logic from accidentally DOS-ing (pun intended) STB, so we hard limit at 50 pages (100,000 cells)
 */

const MAX_PAGES = 50;
const MAX_CELLS_PER_PAGE = 2000;
const DATA_SERIES_MACHINE_NAME = normalizeHumanName("Data Series");

async function timeSeriesCSVBuilder(resourceId) {
  let offset = 0;
  let uoM;
  const rowCache = new Map();
  const nameCache = new Map([["Data Series", DATA_SERIES_MACHINE_NAME]]); // Human readable to machine readable
  const typeCache = new Map([["Data Series", "TEXT"]]); // Human readable to type

  while (true) {
    if (offset > MAX_PAGES) break; // We should never exceed this

    const res = await axios.get(
      `https://tablebuilder.singstat.gov.sg/api/table/tabledata/${resourceId}?offset=${
        offset * MAX_CELLS_PER_PAGE
      }&limit=${MAX_CELLS_PER_PAGE}`
    );

    if (res.status !== 200) {
      console.log("failed to get stb dataset", { res });
      throw new Error("failed to get stb dataset");
    }
    if (res.data.Data.row.every((r) => r.columns.length === 0)) break; // If no data on every row

    // We assume there is no case where 1 column has all `na` values, which is impossible to represent in the format STB provides
    let allColumns = [];

    for (const { columns } of res.data.Data.row) {
      if (columns.length > allColumns.length) {
        allColumns = columns.map(({ key }) => key);
      }
    }
    res.data.Data.row.forEach(
      ({ columns, rowText, seriesNo, uoM: uomValue }) => {
        const prefix = (seriesNo.match(/\./g) || []).reduce(
          (a) => `${a}    `,
          ""
        );

        uoM ??= uomValue;

        for (const { key, value } of columns) {
          // If row does not exist, create row with initial column
          if (!rowCache.has(seriesNo)) {
            rowCache.set(seriesNo, {
              [DATA_SERIES_MACHINE_NAME]: prefix + rowText, // Title for column header
            });
          }

          // If we do not have the machine name for this column, generate and set the machine name
          if (!nameCache.has(key)) {
            nameCache.set(key, normalizeHumanName(key));
            typeCache.set(key, "NUMERIC");
          }

          rowCache.get(seriesNo)[nameCache.get(key)] = value; // Set the value for the column

          if (typeCache.get(key) !== "TEXT" && !isNumeric(value)) {
            typeCache.set(key, "TEXT");
          }
        }

        if (
          rowCache.get(seriesNo) &&
          Object.keys(rowCache.get(seriesNo)).length < allColumns.length
        ) {
          // If we have not set all columns for this row, set the remaining columns to `na`
          for (const column of allColumns) {
            if (!rowCache.get(seriesNo)[nameCache.get(column)]) {
              typeCache.set(column, "TEXT");
            }
          }
        }
      }
    );

    offset++;
  }

  const columnOrderSOT = [
    DATA_SERIES_MACHINE_NAME,
    ...Array.from(nameCache.values()).slice(1).reverse(),
  ];

  const parser = new AsyncParser({
    // Singstat likes to show latest first
    fields: columnOrderSOT,
    defaultValue: "na", // Match STB CSV generator
  });

  const rows = Array.from(rowCache.values());
  console.log({
    uoM,
    machineToHumanNames: new Map(Array.from(nameCache, (e) => [e[1], e[0]])),
    humanNameToType: typeCache,
    rendered: await parser.parse(rows).promise(),
    columnOrderSOT,
  });
  return {
    uoM,
    raw: rows,
    machineToHumanNames: new Map(Array.from(nameCache, (e) => [e[1], e[0]])),
    humanNameToType: typeCache,
    rendered: await parser.parse(rows).promise(),
    columnOrderSOT,
  };
}

const csv = await timeSeriesCSVBuilder("M550002");
createCSVFile(csv.rendered, "output.csv");
