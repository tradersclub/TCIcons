
            import * as React from 'react';
    
            const IconEditRightAlign = (props) => {
                return React.createElement('object', {style: props.style, dangerouslySetInnerHTML:{__html:`
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.width ?? props.size}" height="${props.width ?? props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="right-align">
    <path  fill-rule="evenodd" d="M26 6a1 1 0 110 2H6a1 1 0 110-2h20zm0 6a1 1 0 110 2H10a1 1 0 110-2h16zm1 7a1 1 0 00-1-1H6a1 1 0 100 2h20a1 1 0 001-1zm-1 5a1 1 0 110 2H10a1 1 0 110-2h16z" class="Mask" clip-rule="evenodd"/>
  </g>
</svg>

                `}}
                
                );
            }
            export default IconEditRightAlign;
            