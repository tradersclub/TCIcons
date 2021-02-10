import * as React from 'react';
const IconMinimize = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="minimize">
    <path  fill-rule="evenodd" d="M7 16a1 1 0 011-1h16a1 1 0 110 2H8a1 1 0 01-1-1z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

            ` } });
};
export default IconMinimize;
//# sourceMappingURL=IconMinimize.js.map