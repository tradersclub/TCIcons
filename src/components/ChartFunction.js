
    import * as React from 'react';

    const ChartFunction = (props) => {
        return React.createElement('div', {dangerouslySetInnerHTML:{__html:`
            <svg width="${props.width}" height="${props.height}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 3.99999C12.7909 3.99999 11 5.79085 11 7.99999V12.8002H8C7.44772 12.8002 7 13.2479 7 13.8002C7 14.3525 7.44772 14.8002 8 14.8002H11V24.0005C11 25.105 10.1046 26.0005 9 26.0005C7.89543 26.0005 7 25.105 7 24.0005V22.6004C7 22.0481 6.55228 21.6004 6 21.6004C5.44772 21.6004 5 22.0481 5 22.6004V24.0005C5 26.2096 6.79086 28.0005 9 28.0005C11.2091 28.0005 13 26.2096 13 24.0005V14.8002H16C16.5523 14.8002 17 14.3525 17 13.8002C17 13.2479 16.5523 12.8002 16 12.8002H13V7.99999C13 6.89542 13.8954 5.99999 15 5.99999C16.1046 5.99999 17 6.89542 17 7.99999V9.40009C17 9.95237 17.4477 10.4001 18 10.4001C18.5523 10.4001 19 9.95237 19 9.40009V7.99999C19 5.79085 17.2091 3.99999 15 3.99999ZM22.5 22.0858L19.7071 19.2929C19.3166 18.9024 18.6834 18.9024 18.2929 19.2929C17.9024 19.6834 17.9024 20.3166 18.2929 20.7071L21.0858 23.5L18.2929 26.2929C17.9024 26.6834 17.9024 27.3166 18.2929 27.7071C18.6834 28.0976 19.3166 28.0976 19.7071 27.7071L22.5 24.9142L25.2929 27.7071C25.6834 28.0976 26.3166 28.0976 26.7071 27.7071C27.0976 27.3166 27.0976 26.6834 26.7071 26.2929L23.9142 23.5L26.7071 20.7071C27.0976 20.3166 27.0976 19.6834 26.7071 19.2929C26.3166 18.9024 25.6834 18.9024 25.2929 19.2929L22.5 22.0858Z" />
</svg>

        `}}
        
        );
    }
    export default ChartFunction
    