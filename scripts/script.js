import fs from "fs/promises";
import {datasets} from "./output.js"
import { DOS } from "./DOS.js";
import { master } from "./masterList.js";
console.log(DOS.length)

// async function fetchData() {
//   let includedInDOS = [];  
//   let excludedInDOS = []

//   const masterMap = new Map()
//   for (const masterObj of master){
//     masterMap.set(masterObj.title.toLowerCase(), masterObj.id)
//   }
//   console.log("masterMap created")

//   for (let DOSObj of DOS){
//     let masterValue = masterMap.get(DOSObj.name.toLowerCase())
//     console.log(DOSObj.name)
//     if (masterValue) {
//       includedInDOS.push({
//         ...DOSObj,
//         SingstatId: masterValue
//       })
//       console.log("Pushing to included")
//     } else {
//       excludedInDOS.push(DOSObj)
//       console.log("Pushing to excluded")
//     }
//   }


//   try {
//     await fs.writeFile("included.txt", JSON.stringify(includedInDOS, null, 2));
//     await fs.writeFile("excluded.txt", JSON.stringify(excludedInDOS, null, 2));

//     console.log("files created successfully")
//   } catch (error) {
//     console.error("Error writing output to file:", error);
//   }
// }


// fetchData();
