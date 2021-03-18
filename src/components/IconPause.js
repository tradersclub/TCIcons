
            import * as React from 'react';
    
            const IconPause = (props) => {
                return React.createElement('object', {style: props.style, dangerouslySetInnerHTML:{__html:`
                    <svg width="${props.width ?? props.size}" height="${props.height ?? props.size}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 29.6C7 30.9254 8.06337 32 9.375 32C10.6866 32 11.75 30.9254 11.75 29.6V2.4C11.75 1.07451 10.6866 0 9.375 0C8.06337 0 7 1.07451 7 2.4V29.6ZM21.25 29.6C21.25 30.9254 22.3134 32 23.625 32C24.9366 32 26 30.9254 26 29.6V2.4C26 1.07451 24.9366 0 23.625 0C22.3134 0 21.25 1.07451 21.25 2.4V29.6Z"/>
</svg>

                `}}
                
                );
            }
            export default IconPause;
            