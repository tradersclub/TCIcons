import * as React from 'react';
const IconEdit = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <path  fill-rule="evenodd" d="M21.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-14 14-3 3A1 1 0 0110 28H5a1 1 0 01-1-1v-5a1 1 0 01.293-.707l3-3 14-14zM9.414 19L13 22.586 25.586 10 22 6.414 9.414 19zm2.172 5L8 20.414l-2 2V26h3.586l2-2z" clip-rule="evenodd"/>
</svg>

            ` } });
};
export default IconEdit;
//# sourceMappingURL=IconEdit.js.map