import axios from "axios";
import fs from "fs/promises";
import { getUnixTime } from "date-fns";
("date-fns");
import moment from "moment";

// I created a separate file for our date utils functions because I don't see them being used elsewhere
export function parseEndDate(input) {
  // Check if input is in the format YYYY
  if (/^\d{4}$/.test(input)) {
    const year = parseInt(input);
    return new Date(year, 11, 31); // December 31st of the input year
  } else if (/^\d{4}\s+\w{3}$/.test(input)) {
    return new Date(input);
  }
  // Check if input is in the format YYYY NQ or YYYY NH
  if (/^\d{4}\s*[1-4]Q$|^\d{4}\s*[1-2]H$/.test(input)) {
    let year = parseInt(input.slice(0, 4));
    let month;
    if (input.includes("Q")) {
      let quarter = parseInt(input.slice(-2, -1));
      month = quarter * 3;
    } else {
      let half = parseInt(input.slice(-2, -1));
      month = half * 6;
    }
    return new Date(year, month, 0);
  } else {
    throw new Error("Unable to parse date");
  }
}

export function parseStartDate(input) {
  // Check if input is in the format YYYY or YYYY Mon
  if (/^\d{4}\s*(?:\w{3})?$/.test(input)) {
    return new Date(input);
  }

  // Check if input is in the format YYYY NQ or YYYY NH
  if (/^\d{4}\s*[1-4]Q$|^\d{4}\s*[1-2]H$/.test(input)) {
    let year = parseInt(input.slice(0, 4));
    let month;
    if (input.includes("Q")) {
      let quarter = parseInt(input.slice(-2, -1));
      month = (quarter - 1) * 3;
    } else {
      let half = parseInt(input.slice(-2, -1));
      month = (half - 1) * 6;
    }
    return new Date(year, month, 1);
  } else {
    throw new Error("Unable to parse date");
  }
}

export function parseSurveyDates(survey) {
  // Check if the survey contains a specific year range
  const yearRangeMatch = survey.match(/\d{4}\/\d{2}/);
  if (yearRangeMatch) {
    let [startYear, endYear] = yearRangeMatch[0].split("/");
    endYear = startYear.slice(0, 2) + endYear;
    const startDate = new Date(parseInt(startYear), 0); // January of start year
    const endDate = new Date(parseInt(endYear), 11, 31); // December 31 of end year
    return [startDate, endDate];
  }

  // Check if the survey contains a single year
  const singleYearMatch = survey.match(/\d{4}/);
  if (singleYearMatch) {
    const year = parseInt(singleYearMatch[0]);
    const startDate = new Date(year, 0); // January of the year
    const endDate = new Date(year, 11, 31); // December 31 of the year
    return [startDate, endDate];
  } else {
    throw new Error("Unable to parse date");
  }
}

// async function fetchData(id) {
//   const baseURL = "https://tablebuilder.singstat.gov.sg/api/table/metadata";
//   try {
//     const url = `${baseURL}/${id}`;
//     console.log(url);
//     const response = await axios.get(url);
//     console.log(response.data.Data.records.endPeriod)
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchData("M550002");

export const renderMonthYearShorten = (datetime) => {
  return moment(Number.parseInt(datetime)).format("MMM YYYY");
};
console.log(
  renderMonthYearShorten(getUnixTime(parseStartDate("2024 Mar")) * 1000)
);

console.log(renderMonthYearShorten("1735574400000"))