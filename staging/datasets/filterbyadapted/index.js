//this script is to fetch all the collections on staging
import fs from "fs/promises"
import { datasets } from "../datasets.js";
const outputFile = "filteredbyadapted.js"

async function fetchData() {
    const results = [];
    for (const dataset of datasets){
        if (dataset.description && dataset.description.includes("Adapted from")){
            results.push(dataset)
        }
    }
    try {
        await fs.writeFile(outputFile, JSON.stringify(results,null,2));
        console.log(`Output written to ${outputFile}`);
    } catch (error) {
        console.error('Error writing output to file:', error);
    }
}

fetchData()