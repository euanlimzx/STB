import { master } from "./newMasterList.js"
import fs from "fs/promises";

console.log(master.length)

// function removeDuplicateIds(array) {
//   const uniqueIds = new Set();
//   return array.filter((obj) => {
//     if (uniqueIds.has(obj.id)) {
//       return false; // Remove duplicate object
//     } else {
//       uniqueIds.add(obj.id);
//       return true; // Keep unique object
//     }
//   });
// }

// const run = async () => {
//     const newArray = removeDuplicateIds(master)
//     await fs.writeFile("newMasterList.js", JSON.stringify(newArray, null, 2));
// }
// run()