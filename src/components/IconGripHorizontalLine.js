
            import * as React from 'react';
    
            const IconGripHorizontalLine = (props) => {
                return React.createElement('object', {style: props.style, dangerouslySetInnerHTML:{__html:`
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.width ?? props.size}" height="${props.height ?? props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="grip-horizontal/line">
    <path  fill-rule="evenodd" d="M11 28a1 1 0 01-1-1V5a1 1 0 112 0v22a1 1 0 01-1 1zm5 0a1 1 0 01-1-1V5a1 1 0 112 0v22a1 1 0 01-1 1zm4-1a1 1 0 102 0V5a1 1 0 10-2 0v22z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                `}}
                
                );
            }
            export default IconGripHorizontalLine;
            