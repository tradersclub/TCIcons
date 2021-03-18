
            import * as React from 'react';
    
            const IconPlayCircle = (props) => {
                return React.createElement('object', {style: props.style, dangerouslySetInnerHTML:{__html:`
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.width ?? props.size}" height="${props.width ?? props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="play">
    <path  fill-rule="evenodd" d="M6 16c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10S6 21.523 6 16zM16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4zm-1.445 7.168A1 1 0 0013 12v8a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4zM18.197 16L15 18.131v-4.263L18.197 16z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                `}}
                
                );
            }
            export default IconPlayCircle;
            