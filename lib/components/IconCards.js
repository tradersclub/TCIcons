import * as React from 'react';
const IconCards = (props) => {
    return React.createElement('object', { dangerouslySetInnerHTML: { __html: `
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="cards">
    <path  fill-rule="evenodd" d="M5.571 3.571a2 2 0 00-2 2v7.143a2 2 0 002 2h7.143a2 2 0 002-2V5.571a2 2 0 00-2-2H5.571zm0 2h7.143v7.143H5.571V5.571zm0 11.715a2 2 0 00-2 2v7.143a2 2 0 002 2h7.143a2 2 0 002-2v-7.143a2 2 0 00-2-2H5.571zm0 2h7.143v7.143H5.571v-7.143zm11.715 0a2 2 0 012-2h7.143a2 2 0 012 2v7.143a2 2 0 01-2 2h-7.143a2 2 0 01-2-2v-7.143zm9.143 0h-7.143v7.143h7.143v-7.143zM19.286 3.57a2 2 0 00-2 2v7.143a2 2 0 002 2h7.143a2 2 0 002-2V5.571a2 2 0 00-2-2h-7.143zm0 2h7.143v7.143h-7.143V5.571z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

            ` } });
};
export default IconCards;
//# sourceMappingURL=IconCards.js.map