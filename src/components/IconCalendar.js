
        import * as React from 'react';

        const IconCalendar = (props) => {
            return React.createElement('object', {style: props.style, dangerouslySetInnerHTML:{__html:`
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <path  fill-rule="evenodd" d="M21 5a1 1 0 10-2 0v1h-6V5a1 1 0 10-2 0v1H8.222A3.222 3.222 0 005 9.222V24.778A3.222 3.222 0 008.222 28h15.556A3.222 3.222 0 0027 24.778V9.222A3.222 3.222 0 0023.778 6H21V5zm4 8V9.222C25 8.547 24.453 8 23.778 8H21v1a1 1 0 11-2 0V8h-6v1a1 1 0 11-2 0V8H8.222C7.547 8 7 8.547 7 9.222V13h18zM7 15h18v9.778c0 .675-.547 1.222-1.222 1.222H8.222A1.222 1.222 0 017 24.778V15z" clip-rule="evenodd"/>
</svg>

            `}}
            
            );
        }
        export default IconCalendar;
        