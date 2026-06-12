const fs = require('fs');

const dataText = fs.readFileSync('src/data.ts', 'utf8');

// find all module declarations
const regex = /id:\s*'([^']*)',\s*areaId:\s*'([^']*)'/g;
let match;
while ((match = regex.exec(dataText)) !== null) {
  console.log(`Module ID: ${match[1]}, Area ID: ${match[2]}`);
}
