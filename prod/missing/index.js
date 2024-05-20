import fs from "fs/promises";
import { datasets } from "../admindatasets.js";
import { master } from "./newMasterList.js"

async function fetchData() {
  let notmissing = [];
  let missing = [];

  for (const dataset of master) {
    let found = false;
    for (const filteredDataset of datasets) {
      if (filteredDataset.description && filteredDataset.description.includes(dataset.id) && filteredDataset.description.includes("Adapted from:")) {
        found = true;
        notmissing.push(filteredDataset)
        break;
      }
    }
    if (!found) {
      missing.push(dataset.id);
    }
  }

  try {
    await fs.writeFile("missing.js", JSON.stringify(missing, null, 2));
    await fs.writeFile(
      "notmissing.js",
      JSON.stringify(notmissing, null, 2)
    );

    console.log("files created successfully");
  } catch (error) {
    console.error("Error writing output to file:", error);
  }
}

fetchData();
