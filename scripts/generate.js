const { readdirSync, readFileSync, writeFileSync } = require('fs');

function camelize(property) {
    const s = property.split('-');
    const capital = s.map((item) => {
        return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    });
    return capital.join('');
}

function applyReplace(content) {
    return content
        .replace('fill="none"', 'fill="${props.color}"')
        .replace('width="32"', 'width="${props.width}"')
        .replace('height="32"', 'height="${props.height}"')
        .replace('width="1em"', 'width="${props.width}"')
        .replace('height="1em"', 'height="${props.height}"');
}

const SVG_DIR = `${process.cwd()}/src/svg`;
const files = readdirSync(SVG_DIR);
const alreadyInGenerated = [];

let indexFile = '\n';
for (file of files) {
    if (file.split('.').pop() != "svg") {
        return;
    }
    // não duplicar imports
    if (alreadyInGenerated.includes(file.toLowerCase())) {
        return;
    }

    alreadyInGenerated.push(file);

    let content = readFileSync(`${SVG_DIR}/${file}`, 'utf-8');
    const name = camelize(file.replace('.svg', ''));
    content = applyReplace(content);

    const component = `
    import * as React from 'react';

    const ${name} = (props) => {
        return React.createElement('div', {dangerouslySetInnerHTML:{__html:\`
            ${content}
        \`}}
        
        );
    }
    export default ${name}
    `;
    
    indexFile += `
        export * as ${name} from './${name}.js';
    `;

    writeFileSync(`${process.cwd()}/src/components/${name}.js`, component);
}

writeFileSync(`${process.cwd()}/src/components/index.js`, indexFile);
