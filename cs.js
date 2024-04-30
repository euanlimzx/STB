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

function isCensusColumnEmpty(majorCol) {
  if (!majorCol) {
    return true;
  }
  const value = majorCol.value;
  const columns = majorCol.columns;
  if (value) {
    return false;
  }
  if (
    !columns ||
    (columns && Array.isArray(columns) && columns.every((value) => !value))
  ) {
    return true;
  }
  return false;
}

async function crossSectionalCSVBuilder(resourceId) {
  let uoM;
  let offset = 0;
  const rows = [];
  const nameCache = new Map(); // Human readable -> object
  const typeCache = new Map(); // Human readable -> type

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

    // Check that each value in every row and column exists. If all values are empty, we have reached the end of the data
    if (
      // For every row
      res.data.Data.row.every(({ columns }) =>
        // For every major column
        columns.every(isCensusColumnEmpty)
      )
    )
      break;

    // For every row
    res.data.Data.row.forEach((row, idx) => {
      uoM ??= row.uoM;
      nameCache.set(uoM, normalizeHumanName(uoM)); // we set (0, 0) cell to the UoM to "match" the STB csv generated
      typeCache.set(uoM, "TEXT");

      // For every major column
      row.columns.forEach((majorCol) => {
        if (!majorCol.columns) {
          // If there are no columns in the major column
          if (!nameCache.has(majorCol.key)) {
            nameCache.set(majorCol.key, normalizeHumanName(majorCol.key));
            typeCache.set(majorCol.key, "NUMBER");
          }

          // If the row does not exist, create the row
          rows[idx] ??= {
            [nameCache.get(uoM)]: row.rowText,
          };

          uoM ??= row.uoM;

          rows[idx][nameCache.get(majorCol.key)] ??= majorCol.value; // If the value does not exist, set the value for the column
          if (
            majorCol.value &&
            typeCache.get(majorCol.key) !== "TEXT" &&
            !isNumeric(majorCol.value)
          ) {
            typeCache.set(majorCol.key, "TEXT");
          }
        } else { 
          // For every column
          majorCol.columns.forEach((col) => {
            if (!col.columns) { // 2 level column 
                const colName = `(${majorCol.key})_${col.key}`; // Create a column that looks like `(Major Col) Col`

                // Check cache if we already have the machine name for this column, if not generate and set the machine name
                if (!nameCache.has(colName)) {
                  nameCache.set(colName, normalizeHumanName(colName));
                  typeCache.set(colName, "NUMBER");
                }
    
                // If the row does not exist, create the row
                rows[idx] ??= {
                  [nameCache.get(uoM)]: row.rowText,
                };
                uoM ??= row.uoM;
                // console.log(`col value = ${JSON.stringify(col)}`)
                rows[idx][nameCache.get(colName)] ??= col.value; // If the value does not exist, set the value for the column
    
                if (
                  col.value &&
                  (typeCache.get(colName) !== "TEXT" && !isNumeric(col.value))
                ) {
                  typeCache.set(colName, "TEXT");
                }
            } else { // 3 level column
                col.columns.forEach((lastCol)=>{
                const colName = `${majorCol.key}_${col.key}_${lastCol.key}`; // Create a column that looks like `(Major Col) Col`
                // Check cache if we already have the machine name for this column, if not generate and set the machine name
                if (!nameCache.has(colName)) {
                  nameCache.set(colName, normalizeHumanName(colName));
                  typeCache.set(colName, "NUMBER");
                }
    
                // If the row does not exist, create the row
                rows[idx] ??= {
                  [nameCache.get(uoM)]: row.rowText,
                };
                uoM ??= row.uoM;
                // console.log(`col value = ${JSON.stringify(col)}`)
                rows[idx][nameCache.get(colName)] ??= lastCol.value; // If the value does not exist, set the value for the column
                if (
                  lastCol.value &&
                  (typeCache.get(colName) !== "TEXT" && !isNumeric(lastCol.value))
                ) {
                  typeCache.set(colName, "TEXT");
                }
                })
            }
          });
        }
      });
    });
    offset++;
  }

  for (const idx in rows) {
    if (rows[idx] && Object.keys(rows[idx]).length < nameCache.size) {
      // If we have not set all columns for this row, set the remaining columns to `na`
      for (const column of nameCache.values()) {
        if (!rows[idx][nameCache.get(column)]) {
          typeCache.set(column, "TEXT");
        }
      }
    }
  }

  const columnOrderSOT = Array.from(nameCache.values())
  const parser = new AsyncParser({
    fields: columnOrderSOT,
    defaultValue: "na",
  });

  return {
    uoM,
    raw: rows,
    machineToHumanNames: new Map(Array.from(nameCache, (e) => [e[1], e[0]])),
    humanNameToType: typeCache,
    rendered: await parser.parse(rows).promise(),
    columnOrderSOT
  };
}

//const csv = await crossSectionalCSVBuilder("16622"); //non problematic
const csv = await crossSectionalCSVBuilder("16524"); //problematic
createCSVFile(csv.rendered, "output.csv");
