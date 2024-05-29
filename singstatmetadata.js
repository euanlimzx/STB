import axios from "axios";
import fs from "fs/promises";
// import { DATASET_IDS } from "./master.js";
const DATASET_IDS = ["M810011", "M550002", "16491"];
async function fetchData() {
  const baseURL = "https://tablebuilder.singstat.gov.sg/api/table/metadata";
  const outputFile = "list.txt";
  let output = [];

  // for (const id of DATASET_IDS) {
    try {
      const url = `${baseURL}/8191`;
      console.log(url);
      const response = await axios.get(url, { timeout: 500 });
      console.log(JSON.stringify(response.data));
      output.push({
        id: response.data.Data.records.id,
        title: response.data.Data.records.title,
      });
    } catch (error) {
      console.log(error);
    }
  // }

  // Write output to file
  try {
    await fs.writeFile(outputFile, JSON.stringify(output, null, 2));
    console.log(`Output written to ${outputFile}`);
  } catch (error) {
    console.error("Error writing output to file:", error);
  }
}

fetchData();

"1H"
"1Q"
"2027"