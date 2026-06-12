const fs = require('fs');
const dataText = fs.readFileSync('src/data.ts', 'utf8');

const scanIds = ['les-capstone-p1', 'les-capstone-p2'];
scanIds.forEach(id => {
  const lessonIdStr = `id: '${id}',`;
  const idx = dataText.indexOf(lessonIdStr);
  if (idx === -1) return;
  const contentStartStr = 'content: `';
  const cStartIdx = dataText.indexOf(contentStartStr, idx);
  const textStartIdx = cStartIdx + contentStartStr.length;
  
  let foundEnd = -1;
  for (let i = textStartIdx; i < dataText.length - 15; i++) {
    if (dataText[i] === '`') {
      if (dataText[i - 1] === '\\') {
        continue;
      }
      const slice = dataText.substring(i + 1, i + 50);
      if (/^\s*,\s*(?:duration:\s*\d+\s*,\s*)?quiz\s*:/i.test(slice)) {
        foundEnd = i;
        break;
      }
    }
  }
  
  if (foundEnd !== -1) {
    console.log(`=== Lesson ${id} ===`);
    console.log(dataText.substring(textStartIdx, foundEnd));
  }
});
