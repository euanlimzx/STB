import fs from "fs/promises";
import { filtered } from "../filterbyadapted/filteredbyadapted.js";
import { master } from "../masterList.js";
// import {missing} from "./missing.js"
// console.log(master.length)

async function fetchData() {
  let notmissing = []
  let missing = []

  // for (const dataset of master){
  //   for (const filteredDataset of filtered){
  //       if (filteredDataset.description.includes(dataset.id)){
  //           notmissing.push(filteredDataset.datasetId)
  //           break
  //       }
  //   }
  // }

  for (const dataset of master){
    let found = false
    for (const filteredDataset of filtered){
        if (filteredDataset.description.includes(dataset.id)){
            found = true
            break
        }
    }
    if (!found){
        missing.push(dataset.id)
    } else {
        notmissing.push(dataset.id)
    }
  }


  try {
    await fs.writeFile("missing.js", JSON.stringify(missing, null, 2));
    await fs.writeFile("stagingnotmissing.js", JSON.stringify(notmissing, null, 2));
   
    console.log("files created successfully")
  } catch (error) {
    console.error("Error writing output to file:", error);
  }
}


fetchData();
