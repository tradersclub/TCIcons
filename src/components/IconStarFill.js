
            import * as React from 'react';
    
            const IconStarFill = (props) => {
                return React.createElement('object', {style: props.style, dangerouslySetInnerHTML:{__html:`
                    <svg width="${props.width ?? props.size}" height="${props.height ?? props.size}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.9052 5.57507C16.7405 5.2241 16.3877 5 16 5C15.6123 5 15.2596 5.2241 15.0948 5.57507L12.2313 11.6751L5.84811 12.6562C5.47775 12.7131 5.17029 12.9723 5.05155 13.3277C4.93282 13.6831 5.02274 14.0751 5.28452 14.3432L9.93179 19.1029L8.83307 25.839C8.77142 26.217 8.93105 26.597 9.24415 26.8175C9.55725 27.0381 9.9688 27.0604 10.3039 26.8751L16 23.7253L21.6961 26.8751C22.0312 27.0604 22.4428 27.0381 22.7559 26.8175C23.069 26.597 23.2286 26.217 23.167 25.839L22.0683 19.1029L26.7155 14.3432C26.9773 14.0751 27.0672 13.6831 26.9485 13.3277C26.8298 12.9723 26.5223 12.7131 26.1519 12.6562L19.7688 11.6751L16.9052 5.57507Z"/>
</svg>

                `}}
                
                );
            }
            export default IconStarFill;
            