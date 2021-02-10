import * as React from 'react';
const Equity = (props) => {
    return React.createElement('div', { dangerouslySetInnerHTML: { __html: `
            <svg xmlns="http://www.w3.org/2000/svg" width="${props.width}" height="${props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <path  fill-rule="evenodd" d="M15 6.05C9.947 6.55 6 10.814 6 16c0 5.523 4.477 10 10 10 5.185 0 9.449-3.947 9.95-9H16a1 1 0 01-1-1V6.05zM25.95 15a9.953 9.953 0 00-2.207-5.329L18.414 15h7.537zM22.33 8.257A9.954 9.954 0 0017 6.049v7.537l5.329-5.329zM16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4z" clip-rule="evenodd"/>
</svg>

        ` } });
};
export default Equity;
//# sourceMappingURL=Equity.js.map