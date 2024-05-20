import { tokeep } from "../datasetstoremove/tokeep.js";

import axios from "axios";

const admin =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDQ3IiwiZW1haWwiOiJhZG1pbitzdGJAZGF0YS5nb3Yuc2ciLCJ1c2VyQWdlbmN5TmFtZSI6IkNvdW5jaWwgRm9yIEVzdGF0ZSBBZ2VuY2llcyIsImlhdCI6MTcxNjE4MTM1NiwiZXhwIjoxNzE2MjY3NzU2fQ.OIBFY5T3kvXPLgBb1K8Z1ihCe2fLUZc7GosjhKnGndA";

axios.defaults.timeout = 2000;
// Function to send requests for each ID in the list

async function updateStatusForIds() {
  const results = [];
  const requestData = {
    status: "publish",
    visibility: "public",
  };

  const yes = [
    "d_db9775ba34e16e1d66400cba94f8a574",
    "d_a1338fc07d56c180d6c591a765966387",
    "d_025bd01ee17b6dd354cf32849764c4ad",
    "d_231162786b9c733c96492643b634b5db",
    "d_b8814a24627fd1ee78a9deb4e85ce614",
    "d_f9b84d4765f133571a21969a09236151",
    "d_0137f75889afa5d7e6c745513187ba71",
    "d_68a49f9ee432ec96ce432c7fc83a2dde",
    "d_bc3c508226998e3aa6f0205349608b61",
    "d_d9aecb2954fe4e5128985c7621091f59",
    "d_5007972871f22b3f6774905e61f69e89",
    "d_8603c0a9b267068df9cbaceaf6f4c36e",
    "d_8a7980cdb2e6b1cc84f9911f2374f966",
    "d_4aa606112d096e6e5a4134e67c765d30",
    "d_d975cf0003b41a25a6e769db281825f2",
    "d_dfa2f8300e7d4657178fda15869aa51a",
  ];
  const headers = {
    "Content-Type": "application/json",
    "x-dgs-admin-api-key": admin,
  };

  // Iterate over each ID in the list
  for (const datasetId of yes) {
    try {
    //   if (visibility != "public" || status != "active") {
        const response = await axios.put(
          `https://api-production.data.gov.sg/v2/admin/api/datasets/${datasetId}/status`,
          requestData,
          { headers }
        );
        console.log(`Status updated for ID ${datasetId}:`, response.data.code);
        if (response.data.code != 0) {
          console.log("ERROR", response);
          results.push(datasetId);
        }
    //   }
    } catch (error) {
      console.error(`Error updating status for ID ${datasetId}:`, error);
      results.push(datasetId);
    }
  }
  console.log(JSON.stringify(results));
}

// Call the function to update status for each ID
updateStatusForIds();
