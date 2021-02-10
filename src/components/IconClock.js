
        import * as React from 'react';

        const IconClock = (props) => {
            return React.createElement('object', {style: props.style, dangerouslySetInnerHTML:{__html:`
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="clock">
    <path  fill-rule="evenodd" d="M6 16c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10S6 21.523 6 16zM16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4zm1 6a1 1 0 10-2 0v6a1 1 0 00.553.894l4 2a1 1 0 10.894-1.788L17 15.382V10z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

            `}}
            
            );
        }
        export default IconClock;
        