import { admindatasets } from "./admindatasets.js";
import fs from "fs/promises";

function extractURLFromDescription(description) {
  // Split the description string by the "Adapted from: " substring
  const splitDescription = description.split("Adapted from: ");

  // Check if the split resulted in two parts
  if (splitDescription.length === 2) {
    // Get the second part, which should contain the URL
    const urlPart = splitDescription[1];

    // Trim any leading/trailing whitespace
    const trimmedUrlPart = urlPart.trim();

    // Return the trimmed URL
    return trimmedUrlPart;
  } else {
    // If "Adapted from: " is not found, return null or handle accordingly
    return null;
  }
}


async function fetchData() {
  const results = [];
  for (const dataset of admindatasets) {
    const url = extractURLFromDescription(dataset.description)
    results.push({
      DGS: `https://beta.data.gov.sg/datasets/${dataset.datasetId}/view`,
      STB: url
    });
    
  }
  try {
    await fs.writeFile("forstb.js", JSON.stringify(results, null, 2));
    console.log(`Output written`);
  } catch (error) {
    console.error("Error writing output to file:", error);
  }
}

fetchData();
