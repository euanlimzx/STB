//this script is to fetch all the collections on staging
import fs from "fs/promises"
import { datasets } from "../filterbysingstat/filteredbysingstat.js";

async function fetchData() {
    const keep = [];
    const unpublish = []
    for (const dataset of datasets){
        if (dataset.description && dataset.description.includes("Adapted from")){
            keep.push(dataset)
        } else {
            unpublish.push(dataset)
        }
    }
    try {
        await fs.writeFile("keep.js", JSON.stringify(keep,null,2));
        await fs.writeFile("unpublish.js", JSON.stringify(unpublish,null,2));
        console.log(`Output written to files`);
    } catch (error) {
        console.error('Error writing output to file:', error);
    }
}

fetchData()