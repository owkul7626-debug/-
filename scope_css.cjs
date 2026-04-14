const fs = require('fs');

function scopeCSS(filePath, scopeClass) {
    let css = fs.readFileSync(filePath, 'utf8');
    
    // Replace :root with the scope class to scope CSS variables
    css = css.replace(/:root\s*\{/g, `.${scopeClass} {`);
    
    // Replace body with the scope class + wrapper
    css = css.replace(/body\s*\{/g, `.${scopeClass} {`);

    // We can use native CSS nesting to scope all other rules by wrapping them
    // But since it might cause issues with imports, we leave @import at the top.
    const imports = [];
    css = css.replace(/@import[^;]+;/g, match => {
        imports.push(match);
        return '';
    });

    // Wrap the rest in the scope class via native nesting (supported in modern browsers)
    // Wait, some rules like animations might not be nested nicely. Let's just wrap.
    // Or we use regex to prepend the class to every rule.
    // Actually, native nesting works perfectly: .theme-old { @layer { ... } } or just raw rules.
    const newCss = `${imports.join('\n')}\n.${scopeClass} {\n  & {\n${css}\n  }\n}\n`;

    fs.writeFileSync(filePath, newCss);
}

scopeCSS('./src/index.css', 'theme-old');
scopeCSS('./src/new_index.css', 'theme-new');
console.log('CSS scoping complete.');
