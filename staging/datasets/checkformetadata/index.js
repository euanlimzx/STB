//this script is to fetch all the collections on staging
import fs from "fs/promises"
import axios from "axios"
import { missing } from "../missing/missing.js";
import { notmissing } from "../missing/notmissing.js";
import { stagingnotmissing } from "../missing/stagingnotmissing.js";

const ids = stagingnotmissing
const outputFile = "errors.js"

async function fetchData() {
    const errors = []
    for (const id of ids) {
        console.log(id)
        try {
            const response = await axios.get(`https://api-staging.data.gov.sg/v2/public/api/datasets/${id}/metadata`);
            if (!response.data.data.description){
                errors.push(id)
            }
        } catch (error) {
            console.error('Error occurred while fetching data:', error);
        }
    }
    console.log(errors)
    try {
        await fs.writeFile(outputFile, JSON.stringify(errors,null,2));
        console.log(`Output written to ${outputFile}`);
    } catch (error) {
        console.error('Error writing output to file:', error);
    }
}

fetchData()