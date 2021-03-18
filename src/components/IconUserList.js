
            import * as React from 'react';
    
            const IconUserList = (props) => {
                return React.createElement('object', {style: props.style, dangerouslySetInnerHTML:{__html:`
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.width ?? props.size}" height="${props.width ?? props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="user-list">
    <path  fill-rule="evenodd" d="M6 11a2 2 0 100-4 2 2 0 000 4zm0 7a2 2 0 100-4 2 2 0 000 4zm2 5a2 2 0 11-4 0 2 2 0 014 0zm4-15a1 1 0 100 2h15a1 1 0 100-2H12zm0 7a1 1 0 100 2h15a1 1 0 100-2H12zm0 7a1 1 0 100 2h15a1 1 0 100-2H12z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                `}}
                
                );
            }
            export default IconUserList;
            