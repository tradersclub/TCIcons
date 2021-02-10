import * as React from 'react';
const IconCaret = (props) => {
    return React.createElement('object', { dangerouslySetInnerHTML: { __html: `
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.width}" height="${props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="caret">
    <path  d="M14.962 19.635l-6.618-5.862c-.78-.69-.146-1.773 1.04-1.773h13.235c.265 0 .525.059.748.17.223.111.4.27.51.457.11.188.147.395.108.599a.984.984 0 01-.327.548l-6.618 5.86a1.41 1.41 0 01-.468.27c-.18.063-.374.096-.571.096-.197 0-.391-.033-.57-.096a1.41 1.41 0 01-.469-.27v.001z" class="Vector"/>
  </g>
</svg>

            ` } });
};
export default IconCaret;
//# sourceMappingURL=IconCaret.js.map