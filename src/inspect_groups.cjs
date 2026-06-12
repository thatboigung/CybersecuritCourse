const fs = require('fs');
const path = require('path');

const dataText = fs.readFileSync('src/data.ts', 'utf8');

const g5Idx = dataText.indexOf('// GROUP 5:');
const g6Idx = dataText.indexOf('// GROUP 6:');
const g7Idx = dataText.indexOf('// GROUP 7:');
const endIdx = dataText.lastIndexOf('];'); // check where modules array ends or similar

console.log("Group 5 starts at:", g5Idx);
console.log("Group 6 starts at:", g6Idx);
console.log("Group 7 starts at:", g7Idx);
console.log("End index is:", endIdx);

// Let's print out some snippets around Group 5, 6, 7 to see the structure of modules, lessons, quizzes and exam mappings.
console.log("--- Group 5 start snippet ---");
console.log(dataText.substring(g5Idx, g5Idx + 2000));

console.log("--- Group 6 start snippet ---");
console.log(dataText.substring(g6Idx, g6Idx + 2000));

console.log("--- Group 7 start snippet ---");
console.log(dataText.substring(g7Idx, g7Idx + 2000));
