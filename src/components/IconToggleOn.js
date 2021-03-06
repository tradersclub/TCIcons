
            import * as React from 'react';
    
            const IconToggleOn = (props) => {
                return React.createElement('object', {style: props.style, dangerouslySetInnerHTML:{__html:`
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="toggle / on">
    <path  fill-rule="evenodd" d="M11 10a6 6 0 000 12h10a6 6 0 000-12H11zm10 11a5 5 0 100-10 5 5 0 000 10z" class="Subtract" clip-rule="evenodd"/>
  </g>
</svg>

                `}}
                
                );
            }
            export default IconToggleOn;
            