import { slices } from "../../../datetriggers/slices.js"


export const missing = [
  { datasetId: "d_db9775ba34e16e1d66400cba94f8a574", STBID: "16502" },
  { datasetId: "d_025bd01ee17b6dd354cf32849764c4ad", STBID: "8254" },
  { datasetId: "d_231162786b9c733c96492643b634b5db", STBID: "8262" },
  { datasetId: "d_b8814a24627fd1ee78a9deb4e85ce614", STBID: "8610" },
  { datasetId: "d_f9b84d4765f133571a21969a09236151", STBID: "17668" },
  { datasetId: "d_0137f75889afa5d7e6c745513187ba71", STBID: "17667" },
  { datasetId: "d_68a49f9ee432ec96ce432c7fc83a2dde", STBID: "16452" },
  { datasetId: "d_bc3c508226998e3aa6f0205349608b61", STBID: "16466" },
  { datasetId: "d_d9aecb2954fe4e5128985c7621091f59", STBID: "8310" },
  { datasetId: "d_5007972871f22b3f6774905e61f69e89", STBID: "16460" },
  { datasetId: "d_8a7980cdb2e6b1cc84f9911f2374f966", STBID: "8304" },
  { datasetId: "d_4aa606112d096e6e5a4134e67c765d30", STBID: "16465" },
  { datasetId: "d_d975cf0003b41a25a6e769db281825f2", STBID: "8245" },
  { datasetId: "d_dfa2f8300e7d4657178fda15869aa51a", STBID: "16457" },
];
function findMissingIndices() {
  const missingIndices = {}

  missing.forEach((missing) => {
    slices.forEach((slice, index) => {
      if (slice.includes(missing.STBID)) {
        if (!missingIndices[index]) {
            missingIndices[index] = []; // Initialize the list if it doesn't exist
        }
        missingIndices[index].push(missing.STBID);
      }
    });
  });

  return missingIndices;
}

console.log(findMissingIndices())