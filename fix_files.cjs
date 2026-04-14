const fs = require('fs');
const { execSync } = require('child_process');

function fix(file, dest) {
    const content = execSync(`git show blog-51-chapters:${file}`);
    fs.writeFileSync(dest, content);
}

fix('src/pages/Home.jsx', 'src/pages/NewHome.jsx');
fix('src/pages/Post.jsx', 'src/pages/NewPost.jsx');
fix('src/components/Sidebar.jsx', 'src/components/NewSidebar.jsx');
fix('src/components/Header.jsx', 'src/components/NewHeader.jsx');
fix('src/components/Footer.jsx', 'src/components/NewFooter.jsx');

// Remember to update imports in these New components as we did earlier!
// Since we are overwriting them, we need to apply the replace operations again.
function replaceImport(file) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/import \{ chapters \} from '\.\.\/data\/chapters';/g, "import { chapters } from '../data/new_chapters';");
    fs.writeFileSync(file, content);
}

replaceImport('src/pages/NewHome.jsx');
replaceImport('src/pages/NewPost.jsx');
replaceImport('src/components/NewSidebar.jsx');

console.log('Fixed encodings and imports.');
