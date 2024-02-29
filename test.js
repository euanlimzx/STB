function convertToNumericMonth(dateString) {
    // Regular expression pattern to match "YYYY Mon" format
    const pattern = /^\d{4}\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/;

    // Check if the input string matches the pattern
    if (pattern.test(dateString)) {
        // Split the input string into year and month
        const [year, monthName] = dateString.split(" ");

        // Map month names to their numerical representations
        const monthMap = {
            Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
            Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12"
        };

        // Convert month name to numerical representation
        const numericMonth = monthMap[monthName];

        // Return the result in "YYYY MM" format
        return `${year} ${numericMonth}`;
    } else {
        // If the input string doesn't match the pattern, return null or throw an error as desired
        return dateString; // or throw new Error("Invalid date format");
    }
}

function normalizeHumanName(name) {
    return name.replace(/\s/g, "-"); // Replace spaces with "-" and all non-alphanumeric characters with ""
  }

console.log(convertToNumericMonth("1923 Jan"))
console.log(normalizeHumanName(convertToNumericMonth("1923 Jan")))