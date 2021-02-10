
        import * as React from 'react';

        const IconMenu = (props) => {
            return React.createElement('object', {style: props.style, dangerouslySetInnerHTML:{__html:`
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="menu">
    <path  fill-rule="evenodd" d="M5 8a1 1 0 011-1h20a1 1 0 110 2H6a1 1 0 01-1-1zm0 8a1 1 0 011-1h20a1 1 0 110 2H6a1 1 0 01-1-1zm1 7a1 1 0 100 2h20a1 1 0 100-2H6z" class="Mask" clip-rule="evenodd"/>
  </g>
</svg>

            `}}
            
            );
        }
        export default IconMenu;
        