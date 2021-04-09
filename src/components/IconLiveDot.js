
            import * as React from 'react';
    
            const IconLiveDot = (props) => {
                return React.createElement('object', {style: props.style, dangerouslySetInnerHTML:{__html:`
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" />
</svg>

                `}}
                
                );
            }
            export default IconLiveDot;
            