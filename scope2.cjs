const fs = require('fs');
const { execSync } = require('child_process');

function resetScope() {
    execSync('git checkout HEAD -- src/index.css');
    fs.writeFileSync('src/new_index.css', execSync('git show blog-51-chapters:src/index.css'));

    function applyVariables(file, cls) {
        let css = fs.readFileSync(file, 'utf8');
        css = css.replace(/:root/g, `.${cls}`);
        css = css.replace(/^body\s*\{/gm, `.${cls}-body {`);
        fs.writeFileSync(file, css);
    }

    applyVariables('src/index.css', 'theme-old');
    applyVariables('src/new_index.css', 'theme-new');
}

resetScope();
