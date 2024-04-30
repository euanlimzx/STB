import axios from "axios"
import { DOSCollections } from "./DOScollections.js";
const idList = DOSCollections
axios.defaults.timeout = 1000
// Function to send requests for each ID in the list
async function updateStatusForIds(ids) {
  const results = []
  const requestData = {
    status: 'unpublish',
    visibility: 'private'
  };

  const headers = {
    'Content-Type': 'application/json',
    'x-dgs-admin-api-key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDQ3IiwiZW1haWwiOiJhZG1pbitzdGJAZGF0YS5nb3Yuc2ciLCJ1c2VyQWdlbmN5TmFtZSI6IkNvdW5jaWwgRm9yIEVzdGF0ZSBBZ2VuY2llcyIsImlhdCI6MTcxMDI5OTE1NiwiZXhwIjoxNzEwMzg1NTU2fQ.L2-oUT3m8pPyOzPfvif1zagA7F7v3Nh1rhznoLfoEw8'
  };

  // Iterate over each ID in the list
  for (const id of ids) {
    try {
      const response = await axios.put(`https://api-production.data.gov.sg/v2/admin/api/collections/${parseInt(id)}/status`, requestData, { headers });
      console.log(`Status updated for ID ${id}:`, response.data);
    } catch (error) {
      console.error(`Error updating status for ID ${id}:`, error);
      results.push(id)
    }
  }
  console.log(results)
}

// Call the function to update status for each ID
updateStatusForIds(idList);
