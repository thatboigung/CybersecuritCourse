const fs = require('fs');
const dataText = fs.readFileSync('src/data.ts', 'utf8');

const modId = 'mod-group8';
const startIdx = dataText.indexOf(`id: '${modId}',`);
const modSegment = dataText.substring(startIdx);

const lessonRegex = /id:\s*'(les-capstone-p\d+)',[\s\S]*?content:\s*`([\s\S]*?)`,\s*(?:duration:\s*\d+\s*,\s*)?quiz/g;

const res = {};
let match;
while ((match = lessonRegex.exec(modSegment)) !== null) {
  res[match[1]] = match[2];
}

fs.writeFileSync('src/group8_raw.json', JSON.stringify(res, null, 2), 'utf8');
console.log("Successfully extracted raw contents of Group 8 to src/group8_raw.json");
