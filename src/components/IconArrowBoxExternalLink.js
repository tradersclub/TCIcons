
            import * as React from 'react';
    
            const IconArrowBoxExternalLink = (props) => {
                return React.createElement('object', {style: props.style, dangerouslySetInnerHTML:{__html:`
                    <svg width="${props.width ?? props.size}" height="${props.width ?? props.height}" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M18.25 7C17.6977 7 17.25 7.44772 17.25 8C17.25 8.55228 17.6977 9 18.25 9H21.5858L13.2929 17.2929C12.9024 17.6834 12.9024 18.3166 13.2929 18.7071C13.6834 19.0976 14.3166 19.0976 14.7071 18.7071L23 10.4142V13.75C23 14.3023 23.4477 14.75 24 14.75C24.5523 14.75 25 14.3023 25 13.75V8C25 7.44772 24.5523 7 24 7H18.25ZM9 12C9 11.4477 9.44772 11 10 11H14C14.5523 11 15 10.5523 15 10C15 9.44772 14.5523 9 14 9H10C8.34315 9 7 10.3431 7 12V22C7 23.6569 8.34315 25 10 25H20C21.6569 25 23 23.6569 23 22V18C23 17.4477 22.5523 17 22 17C21.4477 17 21 17.4477 21 18V22C21 22.5523 20.5523 23 20 23H10C9.44772 23 9 22.5523 9 22V12Z"/></g></svg>
                `}}
                
                );
            }
            export default IconArrowBoxExternalLink;
            