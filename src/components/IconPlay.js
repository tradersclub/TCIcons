
            import * as React from 'react';
    
            const IconPlay = (props) => {
                return React.createElement('object', {style: props.style, dangerouslySetInnerHTML:{__html:`
                    <svg width="${props.width ?? props.size}" height="${props.width ?? props.height}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5L24 16L8 27V5Z" stroke="#4364E8" stroke-width="${props.width ?? props.size}" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                `}}
                
                );
            }
            export default IconPlay;
            