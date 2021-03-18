
            import * as React from 'react';
    
            const IconLoadingDefault = (props) => {
                return React.createElement('object', {style: props.style, dangerouslySetInnerHTML:{__html:`
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.width ?? props.size}" height="${props.width ?? props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="loading / default">
    <path  fill-rule="evenodd" d="M16 5C9.925 5 5 9.925 5 16s4.925 11 11 11 11-4.925 11-11a1 1 0 112 0c0 7.18-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3a1 1 0 110 2z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                `}}
                
                );
            }
            export default IconLoadingDefault;
            