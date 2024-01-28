function findMatches(inputString, characterClassPattern) {
    // Create a regular expression with the provided character class pattern
    const regex = new RegExp(`[${characterClassPattern}]`, 'g');
  
    // Use the regex to find matches in the input string
    const matches = inputString.match(regex);
  
    return matches || []; // Return matches or an empty array if no matches found
  }
  
  // Test the function with different character classes
  const testString = "Hello123! World";
  
  console.log(findMatches(testString, '0-9'));
  console.log(findMatches(testString, 'A-Z'));
  console.log(findMatches(testString, 'a-z'));
  console.log(findMatches(testString, '!@#$%^&*()_+'));
  