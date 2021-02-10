import * as React from 'react';
const DrawVerticalRange = (props) => {
    return React.createElement('div', { dangerouslySetInnerHTML: { __html: `
            <svg width="${props.width}" height="${props.height}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 24C14 22.8954 14.8954 22 16 22C17.1046 22 18 22.8954 18 24C18 25.1046 17.1046 26 16 26C14.8954 26 14 25.1046 14 24ZM15 20.126C13.2748 20.5701 12 22.1362 12 24C12 26.2091 13.7909 28 16 28C18.2091 28 20 26.2091 20 24C20 22.1362 18.7252 20.5701 17 20.126V5C17 4.44771 16.5523 4 16 4C15.4477 4 15 4.44771 15 5L15 20.126Z" />
</svg>

        ` } });
};
export default DrawVerticalRange;
//# sourceMappingURL=DrawVerticalRange.js.map