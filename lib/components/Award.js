import * as React from 'react';
const Award = (props) => {
    return React.createElement('div', { dangerouslySetInnerHTML: { __html: `
            <svg xmlns="http://www.w3.org/2000/svg" width="${props.width}" height="${props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="award">
    <path  fill-rule="evenodd" d="M10 12a6 6 0 1112 0 6 6 0 01-12 0zm6-8a8 8 0 00-4.879 14.34l-1.113 8.53a1 1 0 001.507.988L16 25.166l4.485 2.692a1 1 0 001.507-.987l-1.113-8.53A8 8 0 0016 4zm3.003 15.418A7.978 7.978 0 0116 20a7.978 7.978 0 01-3.002-.582l-.739 5.66 3.226-1.936a1 1 0 011.03 0l3.226 1.936-.738-5.66z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

        ` } });
};
export default Award;
//# sourceMappingURL=Award.js.map