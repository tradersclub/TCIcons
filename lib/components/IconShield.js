import * as React from 'react';
const IconShield = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="shield">
    <path  fill-rule="evenodd" d="M16 4c-1.012 0-2.714.375-4.34.795-1.672.432-3.412.953-4.576 1.313a2.95 2.95 0 00-2.077 2.853c.041 3.988.3 7.974 1.76 11.338 1.49 3.437 4.197 6.155 8.931 7.654a.999.999 0 00.604 0c4.734-1.499 7.441-4.217 8.931-7.654 1.46-3.364 1.719-7.35 1.76-11.338a2.95 2.95 0 00-2.077-2.853 105.29 105.29 0 00-4.576-1.313C18.715 4.375 17.012 4 16 4zM7.676 8.019c1.15-.357 2.857-.867 4.485-1.288C13.836 6.298 15.287 6 16 6c.713 0 2.164.298 3.84.731 1.627.42 3.334.931 4.484 1.288a.95.95 0 01.67.921c-.042 3.978-.311 7.602-1.596 10.564-1.222 2.819-3.392 5.1-7.398 6.444-4.006-1.344-6.176-3.625-7.399-6.444-1.283-2.962-1.553-6.586-1.594-10.564a.95.95 0 01.669-.921zM24 9.356c-.014 6.857-.534 13.226-8 15.644V7l7.7 1.969a.4.4 0 01.3.387z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

            ` } });
};
export default IconShield;
//# sourceMappingURL=IconShield.js.map