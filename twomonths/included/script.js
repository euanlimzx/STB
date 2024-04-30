import fs from "fs/promises";
import { twomonths } from "./twomonths.js";
import { master } from "./masterList.js";
// import { excluded } from "./excluded.js";
// import { included } from "./included.js";
// console.log(excluded.length)
// console.log(included.length)

async function fetchData() {
  let includedIntwomonths = [];  
  let excludedIntwomonths = []

  const masterMap = new Map()
  for (const masterObj of master){
    masterMap.set(masterObj.title.toLowerCase(), masterObj.id)
  }
  console.log("masterMap created")

  for (let twomonthsObj of twomonths){
    let masterValue = masterMap.get(twomonthsObj.name.toLowerCase())
    console.log(twomonthsObj.name)
    if (masterValue) {
      includedIntwomonths.push({
        ...twomonthsObj,
        SingstatId: masterValue
      })
      console.log("Pushing to included")
    } else {
      excludedIntwomonths.push(twomonthsObj)
      console.log("Pushing to excluded")
    }
  }


  try {
    await fs.writeFile("included.txt", JSON.stringify(includedIntwomonths, null, 2));
    await fs.writeFile("excluded.txt", JSON.stringify(excludedIntwomonths, null, 2));

    console.log("files created successfully")
  } catch (error) {
    console.error("Error writing output to file:", error);
  }
}


fetchData();
