import * as React from 'react';
const IconMover = (props) => {
    return React.createElement('object', { dangerouslySetInnerHTML: { __html: `
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.width}" height="${props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="mover">
    <path  fill-rule="evenodd" d="M6.333 4A2.333 2.333 0 004 6.333V23a5 5 0 005 5h15a4.96 4.96 0 001.5-.253c.48-.158 1.022-.417 1.426-.82A3.667 3.667 0 0028 24.332v-4A2.333 2.333 0 0025.667 18H22V6.333A2.333 2.333 0 0019.667 4H6.333zM9 26h11.4a3.666 3.666 0 01-.4-1.667v-18A.333.333 0 0019.667 6H6.333A.333.333 0 006 6.333V23a3 3 0 003 3zm13-1.667V20h3.667a.333.333 0 01.333.333v4c0 .442-.176.866-.488 1.179-.096.096-.31.228-.637.335A2.973 2.973 0 0124 26c-.236 0-.56-.05-.875-.153-.326-.107-.54-.239-.637-.335A1.666 1.666 0 0122 24.333zM9 10a1 1 0 100 2h8a1 1 0 100-2H9zm-1 6a1 1 0 011-1h8a1 1 0 110 2H9a1 1 0 01-1-1zm1 4a1 1 0 100 2h4a1 1 0 100-2H9z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

            ` } });
};
export default IconMover;
//# sourceMappingURL=IconMover.js.map