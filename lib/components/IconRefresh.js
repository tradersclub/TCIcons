import * as React from 'react';
const IconRefresh = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="refresh">
    <path  fill-rule="evenodd" d="M14.229 8.2a8 8 0 017.446 2.169l2.8 2.631H21a1 1 0 100 2h6a.996.996 0 00.92-.607A.999.999 0 0028 14V8a1 1 0 10-2 0v3.688l-2.944-2.766a10 10 0 00-16.489 3.744 1 1 0 101.886.668A8 8 0 0114.229 8.2zm-9.586 8.866a.995.995 0 00-.642.896M4 18v6a1 1 0 102 0v-3.688l2.944 2.766a10 10 0 0016.489-3.744 1 1 0 10-1.886-.668 8 8 0 01-13.222 2.965L7.525 19H11a1 1 0 100-2H5.01a.993.993 0 00-.367.066" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

            ` } });
};
export default IconRefresh;
//# sourceMappingURL=IconRefresh.js.map