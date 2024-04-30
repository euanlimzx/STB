//this script is to fetch all the collections on staging
import fs from "fs/promises"
import axios from "axios"
const outputFile = "collections.js"

async function fetchData() {
    const results = [];
    const errors = []
    for (let page = 200; page < 201; page++) {
        console.log(page)
        try {
            const response = await axios.get(`https://api-production.data.gov.sg/v2/public/api/collections?page=${page}`);
            console.log(response)
            results.push(...response.data.data.collections)
        } catch (error) {
            console.error('Error occurred while fetching data:', error);
            error.push(page)
        }
    }
    try {
        //await fs.writeFile(outputFile, JSON.stringify(results,null,2));
        console.log(await results)
        console.log(`Output written to ${outputFile}`);
        console.log(`Errors ${errors}`)
    } catch (error) {
        console.error('Error writing output to file:', error);
    }
}

fetchData()