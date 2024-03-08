import axios from "axios"
import fs from "fs/promises"
import { DATASET_IDS } from "./master.js";

async function fetchData() {
    const baseURL = 'https://tablebuilder.singstat.gov.sg/api/table/metadata';
    const outputFile = 'list.txt';
    let output = [];

    for (const id of DATASET_IDS) {
        try {
            const url = `${baseURL}/${id}`
            console.log(url)
            const response = await axios.get(url, {timeout:500});
            output.push({
                id: response.data.Data.records.id,
                title: response.data.Data.records.title
            })
        } catch (error) {
            console.log(error)
        }
    }

    // Write output to file
    try {
        await fs.writeFile(outputFile, JSON.stringify(output,null,2));
        console.log(`Output written to ${outputFile}`);
    } catch (error) {
        console.error('Error writing output to file:', error);
    }
    
}

fetchData();
