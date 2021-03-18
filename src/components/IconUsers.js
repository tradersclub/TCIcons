
            import * as React from 'react';
    
            const IconUsers = (props) => {
                return React.createElement('object', {style: props.style, dangerouslySetInnerHTML:{__html:`
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.width ?? props.size}" height="${props.width ?? props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="users">
    <path  fill-rule="evenodd" d="M22 11a3 3 0 10-6 0 3 3 0 006 0zm-3-5a5 5 0 110 10 5 5 0 010-10zm4 12a5 5 0 015 5v2a1 1 0 11-2 0v-2a3 3 0 00-3-3h-8a3 3 0 00-3 3v2a1 1 0 11-2 0v-2a5 5 0 015-5h8zm-14.032.88a1 1 0 00-1.218-.718A5 5 0 004 22.999V25a1 1 0 102 0v-2a3 3 0 012.25-2.902 1 1 0 00.718-1.218zm2.784-12.719a1 1 0 11.496 1.938 3 3 0 000 5.812 1 1 0 11-.496 1.938 5 5 0 010-9.688z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                `}}
                
                );
            }
            export default IconUsers;
            