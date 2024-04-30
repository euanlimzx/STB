import fs from "fs/promises";
import { included } from "./included.js";


async function fetchData() {
  let notRepeat = new Map()
  let isRepeat = {}

  for (const includeObj of included){
    const mapVal = notRepeat.get(includeObj.name.toLowerCase())
    if (mapVal) { //exists already as a repeat
      const loggedRepeat = isRepeat[includeObj.name.toLowerCase()]
      if (loggedRepeat) {
        loggedRepeat.push(includeObj)
      } else {
        isRepeat[includeObj.name] = [includeObj, mapVal]
      }
    } else {
      notRepeat.set(includeObj.name.toLowerCase(), includeObj)
    }
  }



  try {
    await fs.writeFile("repeat.txt", JSON.stringify(isRepeat, null, 2));
    await fs.writeFile("notRepeat.txt", JSON.stringify(Array.from(notRepeat), null, 2));

    console.log("files created successfully")
  } catch (error) {
    console.error("Error writing output to file:", error);
  }
}

fetchData();
