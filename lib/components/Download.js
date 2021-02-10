import * as React from 'react';
const Download = (props) => {
    return React.createElement('div', { dangerouslySetInnerHTML: { __html: `
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.width}" height="${props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="download">
    <path  fill-rule="evenodd" d="M17 6a1 1 0 10-2 0v9.586l-3.293-3.293a1 1 0 00-1.414 1.414l5 5 .007.007a.996.996 0 00.697.286h.006a.997.997 0 00.705-.294l5-4.999a1 1 0 00-1.415-1.414L17 15.586V6zM5 19a1 1 0 011 1v4c0 .193.092.43.35.64.262.215.654.36 1.094.36h17.112c.44 0 .832-.145 1.095-.36.257-.21.349-.447.349-.64v-4a1 1 0 112 0v4c0 .868-.423 1.648-1.083 2.188-.654.536-1.506.812-2.361.812H7.444c-.855 0-1.707-.276-2.361-.812C4.423 25.648 4 24.868 4 24v-4a1 1 0 011-1z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

            ` } });
};
export default Download;
//# sourceMappingURL=Download.js.map