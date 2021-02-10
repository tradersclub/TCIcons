
        import * as React from 'react';

        const IconCalculator = (props) => {
            return React.createElement('object', {style: props.style, dangerouslySetInnerHTML:{__html:`
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="calculator">
    <path  fill-rule="evenodd" d="M7 4a1 1 0 00-1 1v22a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1H7zm1 6V6h16v4H8zm0 2h16v14H8V12zm2.3 4v2.4h2.4V16h-2.4zm4.4 0v2.4h2.4V16h-2.4zm4.6 0v6.8h2.4V16h-2.4zm-4.6 6.8v-2.4h2.4v2.4h-2.4zm-4.4 0v-2.4h2.4v2.4h-2.4z" class="Mask" clip-rule="evenodd"/>
  </g>
</svg>

            `}}
            
            );
        }
        export default IconCalculator;
        