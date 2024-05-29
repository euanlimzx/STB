import { admindatasets } from "../admindatasets.js";

function extractStringAfterLastSlash(inputString) {
  // Find the index of the last occurrence of "/"
  var lastIndex = inputString.lastIndexOf("/");

  // Extract the substring after the last "/"
  var extractedString = inputString.substring(lastIndex + 1);

  return extractedString;
}
const inactive = [];
for (const dataset of admindatasets) {
  if (dataset.visibility == "private" || dataset.status == "inactive") {
    inactive.push({
      datasetId: dataset.datasetId,
      STBID: extractStringAfterLastSlash(dataset.description),
    });
  }
}
console.log(inactive);
