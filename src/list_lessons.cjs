const fs = require('fs');

const dataText = fs.readFileSync('src/data.ts', 'utf8');

// We want to list for mod-group5, mod-group6, mod-group7, mod-group8:
// - All lesson ids and titles
const modules = ['mod-group5', 'mod-group6', 'mod-group7', 'mod-group8'];

modules.forEach(modId => {
  console.log(`=== Module: ${modId} ===`);
  const startIdx = dataText.indexOf(`id: '${modId}',`);
  if (startIdx === -1) {
    console.log(`Could not find module ${modId}`);
    return;
  }
  
  // Find subsequent occurrences of id: 'les-...' inside this module before the next module
  const nextModIndex = modules[modules.indexOf(modId) + 1] ? dataText.indexOf(`id: '${modules[modules.indexOf(modId) + 1]}',`) : dataText.indexOf('export const selectModule');
  const modSegment = dataText.substring(startIdx, nextModIndex !== -1 ? nextModIndex : undefined);
  
  const lessonRegex = /id:\s*'([a-zA-Z0-9\-_]+)',\s*moduleId:\s*'[^']+',\s*title:\s*'([^']+)'/g;
  let match;
  while ((match = lessonRegex.exec(modSegment)) !== null) {
    console.log(`  Lesson ID: ${match[1]}\n    Title: ${match[2]}`);
  }
});
