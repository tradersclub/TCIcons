import * as React from 'react';
const IconMaster = (props) => {
    return React.createElement('object', { dangerouslySetInnerHTML: { __html: `
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.width}" height="${props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="master">
    <path  fill-rule="evenodd" d="M28 16c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12zm-15.22-4.625A1 1 0 0011 12v8a1 1 0 102 0v-5.15l2.22 2.775a1 1 0 001.56 0L19 14.85V20a1 1 0 102 0v-8a1 1 0 00-1.78-.625L16 15.4l-3.22-4.024z" class="Exclude" clip-rule="evenodd"/>
    <path  fill-rule="evenodd" d="M3 16C3 8.82 8.82 3 16 3s13 5.82 13 13-5.82 13-13 13S3 23.18 3 16zM16 5C9.925 5 5 9.925 5 16s4.925 11 11 11 11-4.925 11-11S22.075 5 16 5z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

            ` } });
};
export default IconMaster;
//# sourceMappingURL=IconMaster.js.map