//this script is to fetch all the collections on staging
import fs from "fs/promises"
import { datasets } from "../datasets.js";
const outputFile = "filteredbysingstat.js"

async function fetchData() {
    const results = [];
    for (const dataset of datasets){
        if (dataset.managedByAgencyName == "Singapore Department of Statistics"){
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