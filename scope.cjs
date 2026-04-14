const fs = require('fs');
const { execSync } = require('child_process');

// Restore original index.css
execSync('git checkout HEAD -- src/index.css');

// Get new_index.css properly without encoding issues
const newCSSBuffer = execSync('git show blog-51-chapters:src/index.css');
fs.writeFileSync('src/new_index.css', newCSSBuffer);

function scopeFile(file, cls) {
    let css = fs.readFileSync(file, 'utf8');
    
    // Extract imports
    let imports = [];
    css = css.replace(/@import[^;]+;/g, match => {
        imports.push(match);
        return '';
    });
    
    // Scope :root and body
    css = css.replace(/:root/g, `.${cls}`);
    css = css.replace(/^body\s*\{/gm, `.${cls} {`);

    // Clean up
    fs.writeFileSync(file, `${imports.join('\n')}\n.${cls} {\n${css}\n}\n`);
}

scopeFile('src/index.css', 'theme-old');
scopeFile('src/new_index.css', 'theme-new');
