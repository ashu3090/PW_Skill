function extractDateParts(inputString, regexPattern) {
    // Create a regular expression with capturing groups
    const regex = new RegExp(regexPattern);
  
    // Use the regex to find matches in the input string
    const match = inputString.match(regex);
  
    if (match) {
      // Extract specific parts using captured groups
      const day = match[1] || 'N/A';
      const month = match[2] || 'N/A';
      const year = match[3] || 'N/A';
  
      return { day, month, year };
    } else {
      return null; // Return null if there is no match
    }
  }
  
  // Test the function with different date patterns
  const testString1 = "Date: 28-01-2024";
  const datePattern1 = /(\d{2})-(\d{2})-(\d{4})/;
  const extractedDateParts1 = extractDateParts(testString1, datePattern1);
  
  
  // Display the results
  console.log("Original String 1:", testString1);
  if (extractedDateParts1) {
    console.log("Day:", extractedDateParts1.day);
    console.log("Month:", extractedDateParts1.month);
    console.log("Year:", extractedDateParts1.year);
  } else {
    console.log("No match found.");
  }
  
  