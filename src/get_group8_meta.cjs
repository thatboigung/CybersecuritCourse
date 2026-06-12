const fs = require('fs');
const dataText = fs.readFileSync('src/data.ts', 'utf8');

const modId = 'mod-group8';
const startIdx = dataText.indexOf(`id: '${modId}',`);

const modSegment = dataText.substring(startIdx);

const lessonRegex = /id:\s*'(les-capstone-p\d+)',[\s\S]*?title:\s*'([^']+)',[\s\S]*?youtubeVideoId:\s*'([^']*)'/g;

let match;
while ((match = lessonRegex.exec(modSegment)) !== null) {
  console.log(`ID: ${match[1]}\n  Title: ${match[2]}\n  YouTube ID: ${match[3]}`);
}
