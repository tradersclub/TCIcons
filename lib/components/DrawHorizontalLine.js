import * as React from 'react';
const DrawHorizontalLine = (props) => {
    return React.createElement('div', { dangerouslySetInnerHTML: { __html: `
            <svg width="${props.width}" height="${props.height}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14ZM12.1241 15.0076C12.5654 13.2785 14.1334 12 16 12C17.8666 12 19.4346 13.2785 19.8759 15.0076C19.9166 15.0026 19.958 15 20 15H28C28.5523 15 29 15.4477 29 16C29 16.5523 28.5523 17 28 17H20C19.958 17 19.9166 16.9974 19.8759 16.9924C19.4346 18.7215 17.8666 20 16 20C14.1334 20 12.5654 18.7215 12.1241 16.9924C12.0834 16.9974 12.042 17 12 17H4C3.44772 17 3 16.5523 3 16C3 15.4477 3.44772 15 4 15H12C12.042 15 12.0834 15.0026 12.1241 15.0076Z" />
</svg>

        ` } });
};
export default DrawHorizontalLine;
//# sourceMappingURL=DrawHorizontalLine.js.map