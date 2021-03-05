import * as React from 'react';
const IconBuy = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="29" fill="${props.color}" viewBox="0 0 32 29">
  <path  fill-rule="evenodd" d="M6 16c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10S6 21.523 6 16zM16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4zm-5 12a5 5 0 019.062-2.916 1 1 0 101.624-1.168 7 7 0 100 8.168 1 1 0 10-1.624-1.168A5 5 0 0111 16z" clip-rule="evenodd"/>
</svg>

                ` } });
};
export default IconBuy;
//# sourceMappingURL=IconBuy.js.map