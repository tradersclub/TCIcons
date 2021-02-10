
        import * as React from 'react';

        const IconPin = (props) => {
            return React.createElement('object', {style: props.style, dangerouslySetInnerHTML:{__html:`
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="pin">
    <path  fill-rule="evenodd" d="M19.51 5.626a1 1 0 00-1.492 1.326l-4.133 4.133L9.1 12.879a.999.999 0 00-.356.23l-1.87 1.87a1 1 0 000 1.414l3.657 3.658-4.905 4.904A1 1 0 107.04 26.37l4.905-4.904 3.657 3.657a1 1 0 001.415 0l1.87-1.87c.101-.101.18-.223.23-.356l1.794-4.786 4.133-4.132a1 1 0 001.325-1.493l-6.858-6.859zm4.114 6.942l-4.197-4.197-4.28 4.281a1 1 0 01-.357.23l-4.785 1.794-1.01 1.01 3.654 3.655.003.002.003.003 3.655 3.655 1.01-1.01 1.794-4.786a.999.999 0 01.23-.355l4.28-4.282z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

            `}}
            
            );
        }
        export default IconPin;
        