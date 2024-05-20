import { toremove } from "../datasetstoremove/toremove.js";

import axios from "axios";

const admin =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDQ3IiwiZW1haWwiOiJhZG1pbitzdGJAZGF0YS5nb3Yuc2ciLCJ1c2VyQWdlbmN5TmFtZSI6IkNvdW5jaWwgRm9yIEVzdGF0ZSBBZ2VuY2llcyIsImlhdCI6MTcxNjE4MTM1NiwiZXhwIjoxNzE2MjY3NzU2fQ.OIBFY5T3kvXPLgBb1K8Z1ihCe2fLUZc7GosjhKnGndA";

axios.defaults.timeout = 2000;
// Function to send requests for each ID in the list

async function updateStatusForIds() {
  const results = [];
  const requestData = {
    status: "unpublish",
    visibility: "private",
  };

  const headers = {
    "Content-Type": "application/json",
    "x-dgs-admin-api-key": admin,
  };

  // Iterate over each ID in the list
  for (const {datasetId} of toremove) {
    try {
      const response = await axios.delete(
        `https://api-production.data.gov.sg/v2/admin/api/datasets/${datasetId}`,
        { headers }
      );
      console.log(`Status updated for ID ${datasetId}:`, response.data.code);
      if (response.data.code != 0){
        console.log("ERROR")
        results.push(datasetId)
      }
    } catch (error) {
      console.error(`Error updating status for ID ${datasetId}:`, error);
      results.push(datasetId);
    }
  }
  console.log(JSON.stringify(results));
}

// Call the function to update status for each ID
updateStatusForIds();
