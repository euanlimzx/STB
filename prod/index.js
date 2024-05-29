//this script is to fetch all the collections on staging
import fs from "fs/promises";
import axios from "axios";
const outputFile = "admindatasets.js";
const admin =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDQ3IiwiZW1haWwiOiJhZG1pbitzdGJAZGF0YS5nb3Yuc2ciLCJ1c2VyQWdlbmN5TmFtZSI6IkhvdXNpbmcgYW5kIERldmVsb3BtZW50IEJvYXJkIiwiaWF0IjoxNzE2NzkwNDA2LCJleHAiOjE3MTY4NzY4MDZ9.bwoTgtXS8y5fk4I-mCncU4pBQ1kKodJCC0gI9lndTt0";

const headers = {
  "Content-Type": "application/json",
  "x-dgs-admin-api-key": admin,
};

axios.defaults.timeout = 2000;

async function fetchData() {
  const results = [];
  const errors = [];
  for (let page = 1; page < 90; page++) {
    console.log(page);
    try {
      const response = await axios.get(
        `https://api-production.data.gov.sg/v2/admin/api/datasets?page=${page}`
      ,{ headers });
      if (!response.data.data.datasets){
        console.log(response)
      }
      results.push(...response.data.data.datasets);
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
      errors.push(page);
    }
  }
  try {
    await fs.writeFile(outputFile, JSON.stringify(results, null, 2));
    console.log(`Output written to ${outputFile}`);
    console.log(`Errors ${errors}`);
  } catch (error) {
    console.error("Error writing output to file:", error);
  }
}

fetchData();
