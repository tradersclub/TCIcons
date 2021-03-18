
            import * as React from 'react';
    
            const IconChartLine = (props) => {
                return React.createElement('object', {style: props.style, dangerouslySetInnerHTML:{__html:`
                    <svg width="${props.width ?? props.size}" height="${props.width ?? props.height}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.6 10.2C28.0418 10.5314 28.1314 11.1582 27.8 11.6L24.8 15.6C24.6112 15.8518 24.3148 16 24 16L20.4142 16L16.7071 19.7071C16.3166 20.0976 15.6834 20.0976 15.2929 19.7071L11.0565 15.4707L5.75927 21.6508C5.39985 22.0701 4.76855 22.1187 4.34923 21.7593C3.9299 21.3998 3.88134 20.7685 4.24076 20.3492L10.2408 13.3492C10.422 13.1377 10.6833 13.0114 10.9616 13.0008C11.24 12.9901 11.5102 13.0959 11.7071 13.2929L16 17.5858L19.2929 14.2929C19.4804 14.1054 19.7348 14 20 14L23.5 14L26.2 10.4C26.5314 9.95819 27.1582 9.86864 27.6 10.2Z" />
</svg>

                `}}
                
                );
            }
            export default IconChartLine;
            