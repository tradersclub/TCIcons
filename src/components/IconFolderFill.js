
            import * as React from 'react';
    
            const IconFolderFill = (props) => {
                return React.createElement('object', {style: props.style, dangerouslySetInnerHTML:{__html:`
                    <svg width="${props.width ?? props.size}" height="${props.height ?? props.size}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path d="M26 23C26 23.5304 25.7893 24.0391 25.4142 24.4142C25.0391 24.7893 24.5304 25 24 25H8C7.46957 25 6.96086 24.7893 6.58579 24.4142C6.21071 24.0391 6 23.5304 6 23V9C6 8.46957 6.21071 7.96086 6.58579 7.58579C6.96086 7.21071 7.46957 7 8 7H13L15 10H24C24.5304 10 25.0391 10.2107 25.4142 10.5858C25.7893 10.9609 26 11.4696 26 12V23Z"/>
</svg>

                `}}
                
                );
            }
            export default IconFolderFill;
            