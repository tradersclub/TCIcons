
            import * as React from 'react';
    
            const IconChartArea = (props) => {
                return React.createElement('object', {style: props.style, dangerouslySetInnerHTML:{__html:`
                    <svg width="${props.width ?? props.size}" height="${props.width ?? props.height}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.32" d="M11 16L4 24H28V12L25.3 15.6C25.1111 15.8518 24.8148 16 24.5 16H21L16.669 19.8979C16.2887 20.2402 15.7113 20.2402 15.331 19.8979L11 16Z"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.6 8.19997C28.0418 8.53134 28.1314 9.15814 27.8 9.59997L24.8 13.6C24.6112 13.8518 24.3148 14 24 14L20.4142 14L16.7071 17.7071C16.3166 18.0976 15.6834 18.0976 15.2929 17.7071L11.0565 13.4707L5.75927 19.6508C5.39985 20.0701 4.76855 20.1186 4.34923 19.7592C3.9299 19.3998 3.88134 18.7685 4.24076 18.3492L10.2408 11.3492C10.422 11.1377 10.6833 11.0114 10.9616 11.0007C11.24 10.99 11.5102 11.0959 11.7071 11.2929L16 15.5858L19.2929 12.2929C19.4804 12.1053 19.7348 12 20 12L23.5 12L26.2 8.39997C26.5314 7.95814 27.1582 7.8686 27.6 8.19997Z" />
</svg>

                `}}
                
                );
            }
            export default IconChartArea;
            