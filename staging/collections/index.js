import axios from "axios"
import { DOSCollections } from "./DOScollections.js";
import { ids } from "./holdingspot.js";
const idList = ids
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
    'x-dgs-admin-api-key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzOTciLCJlbWFpbCI6ImFkbWluK3N0YkBkYXRhLmdvdi5zZyIsInVzZXJBZ2VuY3lOYW1lIjoiUGVvcGxlJ3MgQXNzb2NpYXRpb24iLCJpYXQiOjE3MTAyMjA3NDksImV4cCI6MTcxMDMwNzE0OX0.Q46BNQ2B4a1uiqvaXcVNSVoKYr-QNBCgeCwd_tlYP0M'
  };

  // Iterate over each ID in the list
  for (const id of ids) {
    try {
      const response = await axios.put(`https://api-staging.data.gov.sg/v2/admin/api/collections/${parseInt(id)}/status`, requestData, { headers });
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
