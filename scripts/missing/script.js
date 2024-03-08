import fs from "fs/promises";
import { included } from "./included.js";
import { master } from "./masterList.js";
// import {missing} from "./missing.js"
// console.log(master.length)

async function fetchData() {
  let missing = []  

  const includedMap = new Map()
  for (const includedObj of included){
    includedMap.set(includedObj.SingstatId, includedObj.name)
  }
  console.log("includedMap created")

  for (let masterObj of master){
    let masterValue = includedMap.get(masterObj.id)
    if (!masterValue) {
        missing.push(masterObj)
    }
  }


  try {
    await fs.writeFile("missing.js", JSON.stringify(missing, null, 2));
   
    console.log("files created successfully")
  } catch (error) {
    console.error("Error writing output to file:", error);
  }
}


fetchData();
