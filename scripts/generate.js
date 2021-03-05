const { readdirSync, readFileSync, writeFileSync } = require('fs');

function camelize(property, exceptFirst) {
    const s = property.split('-');
    const capital = s.map((item, key) => {
        if (exceptFirst && key == 0) {
            return item
        }
        return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    });
    return capital.join('');
}

function applyReplace(content) {
    return content
        .replace('fill="none"', 'fill="${props.color}"')
        .replace('width="32"', 'width="${props.size}"')
        .replace('height="32"', 'height="${props.size}"')
        .replace('width="1em"', 'width="${props.size}"')
        .replace('height="1em"', 'height="${props.size}"');
}

function generateIconComponents(files, SVG_DIR) {
    const alreadyInGenerated = [];
    let indexFile = '\n';
    for (file of files) {
    
        if (file.split('.').pop() == "svg" && !alreadyInGenerated.includes(file.toLowerCase())) {
            alreadyInGenerated.push(file);
    
            let content = readFileSync(`${SVG_DIR}/${file}`, 'utf-8');
            const name = "Icon"+camelize(file.replace('.svg', ''));
            content = applyReplace(content);
    
            const component = `
            import * as React from 'react';
    
            const ${name} = (props) => {
                return React.createElement('object', {style: props.style, dangerouslySetInnerHTML:{__html:\`
                    ${content}
                \`}}
                
                );
            }
            export default ${name};
            `;
            
            indexFile += `
                import ${name} from './${name}.js';
                export {${name}};
            `;
    
            writeFileSync(`${process.cwd()}/src/components/${name}.js`, component);
        }
    
    }
    
    writeFileSync(`${process.cwd()}/src/components/index.js`, indexFile);
}

function generateExportTsSVG(files, SVG_DIR) {
    const alreadyInGenerated = [];
    let indexFile = '';

    for (file of files) {
    
        if (file.split('.').pop() == "svg" && !alreadyInGenerated.includes(file.toLowerCase())) {
            alreadyInGenerated.push(file);
    
            const newNameImport = '_'+ camelize(file.replace('.svg', ''), true);        
            const newName = camelize(file.replace('.svg', ''), true);        
            
            indexFile += `import ${newNameImport} from './${file}';\nexport const ${newName} = ${newNameImport};\n`;
    
        }
    
    }
    
    writeFileSync(`${process.cwd()}/src/svg/index.ts`, indexFile);
}

// run
const SVG_DIR = `${process.cwd()}/src/svg`;
const files = readdirSync(SVG_DIR);
generateIconComponents(files, SVG_DIR);
generateExportTsSVG(files, SVG_DIR);