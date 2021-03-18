const { readdirSync, readFileSync, writeFileSync } = require('fs');

function camelize(property, exceptFirst) {
    const s = property.split('-');
    const capital = s.map((item, key) => {
        if (exceptFirst && key == 0) {
            return item;
        }
        return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    });
    return capital.join('');
}

function applyReplace(content) {
    return content
        .replace('fill="none"', 'fill="${props.color}"')
        .replace(/width="(\S*)/g, 'width="${props.width ?? props.size}"')
        .replace(/height="(\S*)/g, 'height="${props.width ?? props.height}"');
}

function generateIconComponents(files, SVG_DIR) {
    const alreadyInGenerated = [];
    let indexFile = '\n';
    for (file of files) {
        if (file.split('.').pop() == 'svg' && !alreadyInGenerated.includes(file.toLowerCase())) {
            alreadyInGenerated.push(file);

            let content = readFileSync(`${SVG_DIR}/${file}`, 'utf-8');
            const name = 'Icon' + camelize(file.replace('.svg', ''));
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

function generateExportTsSVG(files) {
    const alreadyInGenerated = [];
    let indexFile = '';

    for (file of files) {
        if (file.split('.').pop() === 'svg' && !alreadyInGenerated.includes(file.toLowerCase())) {
            alreadyInGenerated.push(file);

            const newNameImport = '_' + camelize(file.replace('.svg', ''), true);
            const newName = camelize(file.replace('.svg', ''), true);

            indexFile += `export const ${newName} = \`${readFileSync(`${process.cwd()}/src/svg/${file}`)}\`;\n`;
        }
    }

    writeFileSync(`${process.cwd()}/src/svg/index.ts`, indexFile);
}

function generateIconHTMLViewer(files, SVG_DIR) {
    const alreadyInGenerated = [];
    let indexFile = `<html>
    <head></head>
    <style>
        .wrapper {
            display: flex;
            flex-flow: row wrap;
        }
        .icon {
            border: 1px solid #ddd;
            flex: 1;
            padding: 10px 20px;
            margin: 10px;
            border-radius: 10px;
            background: #fff;
            box-shadow: 3px 2px 5px rgb(0 0 0 / 7%);
            text-align: center;
        }
        .icon object {
            display: block;
            text-align: center;
        }
        .icon b {
            color:rgb(67, 100, 232);
        }
        h1 {
            text-align: center;
            margin-top: 50px;
            margin-bottom: 30px;
            color: rgb(67, 100, 232);
        }
        body {
            background: #fbfbfb;
        }
    </style>
    <body>
        <h1>TCIcons</h1>
        <div class="wrapper">`;

    for (file of files) {
        if (file.split('.').pop() == 'svg' && !alreadyInGenerated.includes(file.toLowerCase())) {
            alreadyInGenerated.push(file);

            const nameSVG = camelize(file.replace('.svg', ''), true);
            const nameComponent = 'Icon' + camelize(file.replace('.svg', ''));

            let content = readFileSync(`${SVG_DIR}/${file}`, 'utf-8');
            content = content
                .replace('fill="none"', 'fill="rgb(67, 100, 232)"')
                .replace('width="1em"', 'width="32"')
                .replace('height="1em"', 'height="32"');

            indexFile += `
                <div class="icon">
                    <object>${content}</object>
                    <p><b>SVG:</b><br/> ${nameSVG}</p>
                    <p><b>Component:</b><br/> ${nameComponent}</p>
                </div>`;
        }
    }

    indexFile += '</div></body></html>';
    writeFileSync(`${process.cwd()}/src/index.html`, indexFile);
}

// run
const SVG_DIR = `${process.cwd()}/src/svg`;
const files = readdirSync(SVG_DIR);
generateIconComponents(files, SVG_DIR);
generateExportTsSVG(files);
generateIconHTMLViewer(files, SVG_DIR);
