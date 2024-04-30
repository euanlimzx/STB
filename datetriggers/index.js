import { DATASET_IDS } from "./datasets.js";
// export const modifiedTrigger = async () => {
//   //if i modify shit to be an hourly rule, we will run 24 times a day from 0 to 23

//   const tempdate = new Date();
//   tempdate.setUTCHours(23);
//   tempdate.setUTCMinutes(15);

//   const CHUNKS = 24;
//   const date = tempdate.getUTCHours();
//   console.log(date)
//   if (date > CHUNKS) {
//     return;
//   }

//   const data = DATASET_IDS;

//   const size = Math.ceil(data.length / CHUNKS);
//   const slices = Array.from({ length: CHUNKS }, (_, i) => {
//     return data.slice(i * size, i * size + size);
//   });

//   console.log("processing singstat datasets", {
//     date,
//     slice: slices[date],
//   });
// };

// modifiedTrigger();

export const originalTrigger = async () => {
  // We want split up the ~400 datasets across 28 days (accounting for Feb), so break up the DATASET_ID list into 28 chunks
  // This also means we don't run anything on days 29, 30, 31
  const results = {}
  const CHUNKS = 18;
  const date = 0;

  if (date > CHUNKS) {
    return;
  }

  const data = DATASET_IDS;

  const size = Math.ceil(data.length / CHUNKS);
  const slices = Array.from({ length: CHUNKS }, (_, i) => {
    return data.slice(i * size, i * size + size);
  });

  for (const slice in slices){
    console.log(slice, slices[slice])
  }


  // console.log("processing singstat datasets", {
  //   date,
  //   slice: slices[date - 1],
  // });
};

originalTrigger()
