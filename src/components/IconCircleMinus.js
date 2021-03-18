
            import * as React from 'react';
    
            const IconCircleMinus = (props) => {
                return React.createElement('object', {style: props.style, dangerouslySetInnerHTML:{__html:`
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.width ?? props.size}" height="${props.width ?? props.height}" fill="${props.color}" viewBox="0 0 32 29">
  <path  fill-rule="evenodd" d="M6 16c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10S6 21.523 6 16zM16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4zm-4.5 11a1 1 0 100 2h9a1 1 0 100-2h-9z" clip-rule="evenodd"/>
</svg>

                `}}
                
                );
            }
            export default IconCircleMinus;
            