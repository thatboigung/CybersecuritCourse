const fs = require('fs');
const path = require('path');

const dataText = fs.readFileSync('src/data.ts', 'utf8');

const sIdx = dataText.indexOf('// GROUP 5:');
const ePart = dataText.substring(sIdx);

// Let's find matches of:
// id: '...' or "..."
// title: '...' or "..."
// questions: ...
// inside this part.

const lines = ePart.split('\n');
console.log("Analyzing file content from GROUP 5 to the end...");

let currentGroup = "";
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('// GROUP 5:')) currentGroup = "GROUP 5";
  if (line.includes('// GROUP 6:')) currentGroup = "GROUP 6";
  if (line.includes('// GROUP 7:')) currentGroup = "GROUP 7";
  
  if (line.includes('id:') || line.includes('title:') || line.includes('questions:')) {
    console.log(`${currentGroup} [line ${i}]: ${line.trim()}`);
  }
}
