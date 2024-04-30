import fs from "fs/promises";
import { DOS } from "./DOS.js";
import { twomonths } from "./twomonths.js";
console.log(twomonths.length)

async function fetchData() {
    const currentDate = new Date();

    // Calculate the date two months ago
    const twoMonthsAgo = new Date(currentDate);
    twoMonthsAgo.setMonth(currentDate.getMonth() - 2);

    // Filter the dataset based on the lastUpdatedAt property
    const filteredDataset = DOS.filter(obj => {
        // Convert lastUpdatedAt property to a Date object if it's not already
        const lastUpdatedAt = new Date(obj.lastUpdatedAt);
        
        // Check if lastUpdatedAt falls within the last two months
        return lastUpdatedAt > twoMonthsAgo && obj.description
    });


  try {
    await fs.writeFile("updatedinthelasttwomonths.txt", JSON.stringify(filteredDataset, null, 2));
    console.log("files created successfully")
  } catch (error) {
    console.error("Error writing output to file:", error);
  }
}


//fetchData();
