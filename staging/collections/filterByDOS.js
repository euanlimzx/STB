//this script is to fetch all the collections on staging
import fs from "fs/promises"
import axios from "axios"
import { collections } from "./collections.js";
const outputFile = "DOScollections.js"

async function fetchData() {
    const results = [];
    for (const collection of collections) {
        if (collection.managedByAgencyName == "Singapore Department of Statistics"){
            results.push(collection.collectionId)
        }
    }
    try {
        await fs.writeFile(outputFile, JSON.stringify(results,null,2));
        console.log(results.length)
        console.log(`Output written to ${outputFile}`);
    } catch (error) {
        console.error('Error writing output to file:', error);
    }
}

fetchData()