
            import * as React from 'react';
    
            const IconPatchCheck = (props) => {
                return React.createElement('object', {style: props.style, dangerouslySetInnerHTML:{__html:`
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.width ?? props.size}" height="${props.width ?? props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="PatchCheck">
    <path  fill-rule="evenodd" d="M13.958 6.877a2.815 2.815 0 014.084 0l.951 1.002a1 1 0 00.725.311h1.664a2.425 2.425 0 012.425 2.426v1.664a1 1 0 00.264.678l1.288 1.398a2.427 2.427 0 010 3.288l-1.288 1.398a1 1 0 00-.264.678v1.664a2.425 2.425 0 01-2.425 2.426h-1.664a1 1 0 00-.725.311l-.951 1.002a2.815 2.815 0 01-4.084 0l-.951-1.002a1 1 0 00-.725-.311h-1.664a2.425 2.425 0 01-2.425-2.426V19.72a1 1 0 00-.264-.678l-1.288-1.398a2.427 2.427 0 010-3.288l1.288-1.398a1 1 0 00.264-.678v-1.664a2.425 2.425 0 012.425-2.426h1.664a1 1 0 00.725-.311l.951-1.002zM19.492 5.5c-1.899-2-5.085-2-6.984 0l-.656.69h-1.234a4.425 4.425 0 00-4.425 4.426v1.274L5.17 13.002a4.427 4.427 0 000 5.996l1.023 1.112v1.274a4.425 4.425 0 004.425 4.426h1.234l.656.69c1.899 2 5.085 2 6.984 0l.656-.69h1.234a4.425 4.425 0 004.425-4.426V20.11l1.023-1.112a4.427 4.427 0 000-5.996l-1.023-1.112v-1.274a4.425 4.425 0 00-4.425-4.426h-1.234l-.656-.69zm.215 8.957a1 1 0 10-1.414-1.414l-3.79 3.792-1.56-1.55a1 1 0 00-1.41 1.419l2.267 2.252a1 1 0 001.412-.002l4.495-4.497z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                `}}
                
                );
            }
            export default IconPatchCheck;
            