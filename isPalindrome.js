"a b cba";
"radar";
"level";
"deified";
"a man a plan a canal panama";

function isP(str) {
  // Remove spaces from the string
  const stringWithoutSpaces = str.replace(/\s/g, "");
  // Convert the string to lowercase for case-insensitive comparison
  const lowercaseString = stringWithoutSpaces.toLowerCase();
  // Reverse the string
  const reversedString = lowercaseString.split("").reverse().join("");
  // Check if the reversed string is equal to the original string
  return lowercaseString === reversedString;
}

// Example usage:

console.log(isP("a b cba"));
console.log(isP("radar"));
console.log(isP("level"));
console.log(isP("deified"));
console.log(isP("deiied"));
console.log(isP("a man a plan a canal panama"));


