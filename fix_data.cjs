const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Regex to find quiz objects and their questions
// This is a bit simplified but should work if the formatting is consistent
const questionsRegex = /questions:\s*\[([\s\S]*?)\]\s*\}/g;

const fixedContent = content.replace(questionsRegex, (match, questionsBlock) => {
  // Now we have the block of questions: [ { ... }, { ... } ]
  // We want to find each question object
  const questionRegex = /\{([\s\S]*?)\}/g;
  
  const fixedQuestionsBlock = questionsBlock.replace(questionRegex, (qMatch, qContent) => {
    // Extract options and correctAnswer
    const optionsMatch = qContent.match(/options:\s*\[([\s\S]*?)\]/);
    const correctAnswerMatch = qContent.match(/correctAnswer:\s*'([\s\S]*?)'/);
    
    if (optionsMatch && correctAnswerMatch) {
      const optionsStr = optionsMatch[1];
      const correctAnswerVal = correctAnswerMatch[1];
      
      // Parse options to array
      // Options are like 'Option 1', 'Option 2'
      const options = optionsStr.split(',').map(s => {
        const m = s.match(/'(.*?)'/);
        return m ? m[1] : s.trim().replace(/^'|'$/g, '');
      }).map(s => s.trim());
      
      const index = options.indexOf(correctAnswerVal);
      if (index !== -1) {
        return qMatch.replace(/correctAnswer:\s*'.*?'/, `correctAnswer: ${index}`);
      }
    }
    return qMatch;
  });
  
  return `questions: [${fixedQuestionsBlock}] }`;
});

fs.writeFileSync(filePath, fixedContent);
console.log('Finished fixing data.ts');
