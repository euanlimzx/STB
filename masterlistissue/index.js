import { master } from "./masterList.js";

function findRepeatedIds(ids) {
    const idCounts = new Map();
    const repeatedIds = [];

    // Count occurrences of each ID
    for (const item of ids) {
        const id = item.id
        if (idCounts.has(id)) {
            idCounts.set(id, idCounts.get(id) + 1);
        } else {
            idCounts.set(id, 1);
        }
    }

    // Find repeated IDs
    idCounts.forEach((count, id) => {
        if (count > 1) {
            repeatedIds.push(id);
        }
    });

    return repeatedIds;
}

const ids = master
const repeatedIds = findRepeatedIds(ids);
console.log("Repeated IDs:", repeatedIds);
