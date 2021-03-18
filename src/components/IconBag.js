
            import * as React from 'react';
    
            const IconBag = (props) => {
                return React.createElement('object', {style: props.style, dangerouslySetInnerHTML:{__html:`
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.width ?? props.size}" height="${props.height ?? props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="bag-default">
    <path  fill-rule="evenodd" d="M9.5 4a1 1 0 00-.707.293l-3.5 3.5A1 1 0 005 8.5V25a3 3 0 003 3h16a3 3 0 003-3V8.5a1 1 0 00-.293-.707l-3.5-3.5A1 1 0 0022.5 4h-13zM8.414 7.5l1.5-1.5h12.172l1.5 1.5H8.414zM7 9.5h18V25a1 1 0 01-1 1H8a1 1 0 01-1-1V9.5zm5.5 3.5a1 1 0 10-2 0 5.5 5.5 0 0011.001 0 1 1 0 10-2 0 3.5 3.5 0 11-7.001 0z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                `}}
                
                );
            }
            export default IconBag;
            