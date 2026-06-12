const fs = require('fs');
const dataText = fs.readFileSync('src/data.ts', 'utf8');

const modId = 'mod-group8';
const startIdx = dataText.indexOf(`id: '${modId}',`);
const modSegment = dataText.substring(startIdx);

const lessonRegex = /id:\s*'(les-capstone-p\d+)',[\s\S]*?content:\s*`([\s\S]*?)`,\s*(?:duration:\s*\d+\s*,\s*)?quiz/g;

let match;
while ((match = lessonRegex.exec(modSegment)) !== null) {
  console.log(`=== ID: ${match[1]} ===`);
  console.log(match[2].substring(0, 1000));
}
