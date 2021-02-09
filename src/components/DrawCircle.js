
    import * as React from 'react';

    const DrawCircle = (props) => {
        return React.createElement('div', {dangerouslySetInnerHTML:{__html:`
            <svg width="${props.width}" height="${props.height}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C14.8954 8 14 8.89543 14 10C14 11.1046 14.8954 12 16 12C17.1046 12 18 11.1046 18 10C18 8.89543 17.1046 8 16 8ZM9.8052 13.1485C10.4272 12.481 11.2698 11.9024 12.2833 11.4813C12.872 12.9571 14.3142 14 16 14C17.6952 14 19.144 12.9455 19.7265 11.4567C20.7486 11.8723 21.6002 12.4475 22.2312 13.1132C21.4724 13.8412 21 14.8654 21 16C21 17.1346 21.4724 18.1589 22.2312 18.8869C21.6001 19.5526 20.7483 20.1277 19.7264 20.5432C19.144 19.0545 17.6951 18 16 18C14.3142 18 12.8719 19.0429 12.2832 20.5187C11.2693 20.0976 10.4271 19.5189 9.80529 18.8514C10.5427 18.1258 11 17.1163 11 16C11 14.8837 10.5427 13.8741 9.8052 13.1485ZM8.03416 12.135C9.01313 10.9416 10.4172 10.0114 12.0398 9.43357C12.3149 7.49268 13.9831 6 16 6C18.0079 6 19.6703 7.47945 19.9565 9.40773C21.6034 9.98109 23.0301 10.916 24.0233 12.1201C24.3359 12.0417 24.6631 12 25 12C27.2091 12 29 13.7909 29 16C29 18.2091 27.2091 20 25 20C24.663 20 24.3358 19.9583 24.0232 19.8799C23.0301 21.0839 21.6038 22.0188 19.9564 22.5923C19.6702 24.5206 18.0079 26 16 26C13.9831 26 12.3149 24.5073 12.0398 22.5664C10.4179 21.9887 9.01316 21.0585 8.03399 19.8651C7.70416 19.9531 7.35756 20 7 20C4.79086 20 3 18.2091 3 16C3 13.7909 4.79086 12 7 12C7.35762 12 7.70428 12.0469 8.03416 12.135ZM14 22C14 20.8954 14.8954 20 16 20C17.1046 20 18 20.8954 18 22C18 23.1046 17.1046 24 16 24C14.8954 24 14 23.1046 14 22ZM25 14C23.8954 14 23 14.8954 23 16C23 17.1046 23.8954 18 25 18C26.1046 18 27 17.1046 27 16C27 14.8954 26.1046 14 25 14ZM5 16C5 14.8954 5.89543 14 7 14C8.10457 14 9 14.8954 9 16C9 17.1046 8.10457 18 7 18C5.89543 18 5 17.1046 5 16Z" />
</svg>

        `}}
        
        );
    }
    export default DrawCircle
    