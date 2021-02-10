import * as React from 'react';
const Pen = (props) => {
    return React.createElement('div', { dangerouslySetInnerHTML: { __html: `
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.width}" height="${props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <path  fill-rule="evenodd" d="M17.207 5.707a1 1 0 00-1.414-1.414l-8 8-3 3A1 1 0 004.5 16v5a1 1 0 001 1h5a1 1 0 00.707-.293l3-3 13-13a1 1 0 00-1.414-1.414L13.5 16.586 9.914 13l7.293-7.293zM8.5 14.414L12.086 18l-2 2H6.5v-3.586l2-2zM5 26a1 1 0 100 2h22a1 1 0 100-2H5z" clip-rule="evenodd"/>
</svg>

            ` } });
};
export default Pen;
//# sourceMappingURL=Pen.js.map