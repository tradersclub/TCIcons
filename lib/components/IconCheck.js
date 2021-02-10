import * as React from 'react';
const IconCheck = (props) => {
    return React.createElement('div', { dangerouslySetInnerHTML: { __html: `
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.width}" height="${props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="check">
    <path  fill-rule="evenodd" d="M27.707 7.793a1 1 0 010 1.414l-15 15a1 1 0 01-1.414 0l-7-7a1 1 0 111.414-1.414L12 22.086 26.293 7.793a1 1 0 011.414 0z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

            ` } });
};
export default IconCheck;
//# sourceMappingURL=IconCheck.js.map