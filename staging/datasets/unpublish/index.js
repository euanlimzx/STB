import axios from "axios"
import fs from "fs/promises"
import { unpublishes } from "./random.js"

axios.defaults.timeout = 1000
// Function to send requests for each ID in the list
async function updateStatusForIds() {
  const errors = []
  const results = []
  const requestData = {
    status: 'unpublish',
    visibility: 'private'
  };

  const headers = {
    'Content-Type': 'application/json',
    'x-dgs-admin-api-key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzOTciLCJlbWFpbCI6ImFkbWluK3N0YkBkYXRhLmdvdi5zZyIsInVzZXJBZ2VuY3lOYW1lIjoiUGVvcGxlJ3MgQXNzb2NpYXRpb24iLCJpYXQiOjE3MTA0ODY0NjQsImV4cCI6MTcxMDU3Mjg2NH0.6E6UEcPMkWL3ZGEkB-Vs58bNOrnimfdHWK5RzMH3pLY'
  };

  // Iterate over each ID in the list
  for (const unpublish of unpublishes) {
    const id = unpublish.id;
    try {
      const response = await axios.put(
        `https://api-staging.data.gov.sg/v2/admin/api/datasets/${
          id
        }/status`,
        requestData,
        { headers }
      );
      console.log({...response.data, id})
      results.push({...response.data, id});
    } catch (error) {
      errors.push(`${id}: ${error}`);
    }
  }

  try {
    await fs.writeFile("response.js", JSON.stringify(results, null, 2));
    await fs.writeFile("errors.js", JSON.stringify(errors, null, 2));
  } catch (error) {
    console.error("Error writing output to file:", error);
  }
}

// Call the function to update status for each ID
updateStatusForIds();
