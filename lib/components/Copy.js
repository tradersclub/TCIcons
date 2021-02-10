import * as React from 'react';
const Copy = (props) => {
    return React.createElement('div', { dangerouslySetInnerHTML: { __html: `
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.width}" height="${props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="copy">
    <path  fill-rule="evenodd" d="M7.667 4A3.667 3.667 0 004 7.667v10.666A3.667 3.667 0 007.667 22H10v2.333A3.667 3.667 0 0013.667 28h10.666A3.667 3.667 0 0028 24.333V13.667A3.667 3.667 0 0024.333 10H22V7.667A3.667 3.667 0 0018.333 4H7.667zM20 10V7.667A1.667 1.667 0 0018.333 6H7.667A1.667 1.667 0 006 7.667v10.666A1.666 1.666 0 007.667 20H10v-6.333A3.667 3.667 0 0113.667 10H20zm-8 3.667c0-.92.746-1.667 1.667-1.667h10.666c.92 0 1.667.746 1.667 1.667v10.666c0 .92-.746 1.667-1.667 1.667H13.667c-.92 0-1.667-.746-1.667-1.667V13.667z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

            ` } });
};
export default Copy;
//# sourceMappingURL=Copy.js.map