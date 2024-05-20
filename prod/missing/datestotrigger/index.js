import { missing } from "../missing.js"
import { slices } from "../../../datetriggers/slices.js"


function findMissingIndices() {
  const missingIndices = {}

  missing.forEach((missingId) => {
    slices.forEach((slice, index) => {
      if (slice.includes(missingId)) {
        if (!missingIndices[index]) {
            missingIndices[index] = []; // Initialize the list if it doesn't exist
        }
        missingIndices[index].push(missingId);
      }
    });
  });

  return missingIndices;
}

console.log(findMissingIndices())