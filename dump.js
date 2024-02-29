import axios from "axios";


const res = await axios.get(
    `https://tablebuilder.singstat.gov.sg/api/table/metadata/16524`
)

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
// console.log(JSON.stringify(res.data))
const [coverageStart, coverageEnd] = parseSurveyDates(res.data.Data.records.tableType)
      
console.log(coverageStart,coverageEnd)