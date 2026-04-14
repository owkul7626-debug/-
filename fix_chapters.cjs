const fs = require('fs');
const { execSync } = require('child_process');
const content = execSync('git show blog-51-chapters:src/data/chapters.js');
fs.writeFileSync('src/data/new_chapters.js', content);
