
            import * as React from 'react';
    
            const IconIndicator = (props) => {
                return React.createElement('object', {style: props.style, dangerouslySetInnerHTML:{__html:`
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.width ?? props.size}" height="${props.height ?? props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="indicator">
    <path  fill-rule="evenodd" d="M6 6a1 1 0 00-2 0v20a1 1 0 001 1h22a1 1 0 100-2H6V6zm11 4a1 1 0 10-2 0v12a1 1 0 102 0V10zm-5 4a1 1 0 10-2 0v8a1 1 0 102 0v-8zm9 3a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                `}}
                
                );
            }
            export default IconIndicator;
            