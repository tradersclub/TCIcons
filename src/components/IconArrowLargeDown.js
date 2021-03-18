
            import * as React from 'react';
    
            const IconArrowLargeDown = (props) => {
                return React.createElement('object', {style: props.style, dangerouslySetInnerHTML:{__html:`
                    <svg width="${props.width ?? props.size}" height="${props.width ?? props.height}" viewBox="0 0 32 29" xmlns="http://www.w3.org/2000/svg"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M4.32428 9.26285C4.7314 8.88966 5.36397 8.91716 5.73716 9.32428L16 20.5201L26.2629 9.32428C26.636 8.91716 27.2686 8.88966 27.6757 9.26285C28.0829 9.63604 28.1104 10.2686 27.7372 10.6757L16.7372 22.6757C16.5477 22.8824 16.2803 23 16 23C15.7197 23 15.4523 22.8824 15.2628 22.6757L4.26285 10.6757C3.88966 10.2686 3.91716 9.63604 4.32428 9.26285Z"/></g></svg>
                `}}
                
                );
            }
            export default IconArrowLargeDown;
            