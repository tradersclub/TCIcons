import * as React from 'react';
const Home = (props) => {
    return React.createElement('div', { dangerouslySetInnerHTML: { __html: `
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.width}" height="${props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <path  fill-rule="evenodd" d="M16.61 4.208a1 1 0 00-1.22 0l-10 7.7A1 1 0 005 12.7v12.1c0 .852.342 1.667.947 2.266A3.234 3.234 0 008.222 28H23.778c.851 0 1.67-.335 2.275-.934A3.19 3.19 0 0027 24.8V12.7a1 1 0 00-.39-.792l-10-7.7zM20 26h3.778c.327 0 .64-.129.868-.355A1.19 1.19 0 0025 24.8V13.192l-9-6.93-9 6.93V24.8c0 .315.126.62.354.845.229.226.54.355.868.355H12v-9a1 1 0 011-1h6a1 1 0 011 1v9zm-6 0v-8h4v8h-4z" clip-rule="evenodd"/>
</svg>

            ` } });
};
export default Home;
//# sourceMappingURL=Home.js.map