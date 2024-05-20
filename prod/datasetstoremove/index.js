import { admindatasets } from "../admindatasets.js";
import fs from "fs/promises"

async function fetchData() {
    const results = [];
    const extras = []
    for (const dataset of admindatasets){
        if (dataset.description && dataset.description.includes("Adapted from")){
            results.push(dataset)
        } else {
            extras.push(dataset)
        }
    }
    try {
        await fs.writeFile("tokeep.js", JSON.stringify(results,null,2));
        await fs.writeFile("toremove.js", JSON.stringify(extras, null, 2));
        console.log(`Output written`);
    } catch (error) {
        console.error('Error writing output to file:', error);
    }
}

fetchData()