
        import * as React from 'react';

        const IconAlert = (props) => {
            return React.createElement('object', {dangerouslySetInnerHTML:{__html:`
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.width}" height="${props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <path  fill-rule="evenodd" d="M6 16c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10S6 21.523 6 16zM16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4zm0 6.5a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm0 8.9a1 1 0 011 1v.1a1 1 0 11-2 0v-.1a1 1 0 011-1z" clip-rule="evenodd"/>
</svg>

            `}}
            
            );
        }
        export default IconAlert;
        