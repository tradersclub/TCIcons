import * as React from 'react';
const DrawText = (props) => {
    return React.createElement('div', { dangerouslySetInnerHTML: { __html: `
            <svg width="${props.width}" height="${props.height}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 6C6 5.44772 6.44772 5 7 5H16H25C25.5523 5 26 5.44772 26 6V8C26 8.55228 25.5523 9 25 9C24.4477 9 24 8.55228 24 8V7H17V25H18C18.5523 25 19 25.4477 19 26C19 26.5523 18.5523 27 18 27H16H14C13.4477 27 13 26.5523 13 26C13 25.4477 13.4477 25 14 25H15V7H8V8C8 8.55228 7.55228 9 7 9C6.44772 9 6 8.55228 6 8V6Z" />
</svg>

        ` } });
};
export default DrawText;
//# sourceMappingURL=DrawText.js.map