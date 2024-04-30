//this script is to fetch all the collections on staging
import fs from "fs/promises"
import axios from "axios"
const outputFile = "datasets.js"

async function fetchData() {
    const results = [];
    const errors = []
    for (let page = 1; page < 395; page++) {
        console.log(page)
        try {
            const response = await axios.get(`https://api-staging.data.gov.sg/v2/public/api/datasets?page=${page}`);
            results.push(...response.data.data.datasets)
        } catch (error) {
            console.error('Error occurred while fetching data:', error);
            errors.push(page)
        }
    }
    try {
        console.log(results)
        //await fs.writeFile(outputFile, JSON.stringify(results,null,2));
        console.log(`Output written to ${outputFile}`);
    } catch (error) {
        console.error('Error writing output to file:', error);
    }
}

fetchData()