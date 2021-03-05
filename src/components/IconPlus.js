
            import * as React from 'react';
    
            const IconPlus = (props) => {
                return React.createElement('object', {style: props.style, dangerouslySetInnerHTML:{__html:`
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="plus">
    <path  fill-rule="evenodd" d="M17 5a1 1 0 10-2 0v10H5a1 1 0 100 2h10v10a1 1 0 102 0V17h10a1 1 0 100-2H17V5z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                `}}
                
                );
            }
            export default IconPlus;
            