import * as React from 'react';
const EditUnderline = (props) => {
    return React.createElement('div', { dangerouslySetInnerHTML: { __html: `
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.width}" height="${props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="underline">
    <path  fill-rule="evenodd" d="M10 6a1 1 0 00-2 0v8.077c0 2.105.846 4.121 2.347 5.606A8.04 8.04 0 0016 22a8.04 8.04 0 005.653-2.317A7.885 7.885 0 0024 14.077V6a1 1 0 10-2 0v8.077c0 1.567-.63 3.073-1.753 4.184A6.04 6.04 0 0116 20a6.04 6.04 0 01-4.247-1.739A5.885 5.885 0 0110 14.077V6zM7 25a1 1 0 100 2h18a1 1 0 100-2H7z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

            ` } });
};
export default EditUnderline;
//# sourceMappingURL=EditUnderline.js.map