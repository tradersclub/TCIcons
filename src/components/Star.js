
        import * as React from 'react';

        const Star = (props) => {
            return React.createElement('div', {dangerouslySetInnerHTML:{__html:`
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.width}" height="${props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="star">
    <path  fill-rule="evenodd" d="M16 5a1 1 0 01.905.575l2.864 6.1 6.383.981a1 1 0 01.563 1.687l-4.647 4.76 1.099 6.736a1 1 0 01-1.47 1.036L16 23.725l-5.696 3.15a1 1 0 01-1.47-1.036l1.098-6.736-4.647-4.76a1 1 0 01.563-1.687l6.383-.98 2.864-6.1A1 1 0 0116 5zm0 3.353l-2.185 4.655a1 1 0 01-.753.563l-4.988.767 3.642 3.729a1 1 0 01.271.86l-.848 5.201 4.377-2.42a1 1 0 01.968 0l4.377 2.42-.848-5.201a1 1 0 01.271-.86l3.642-3.73-4.988-.766a1 1 0 01-.753-.563L16 8.352z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

            `}}
            
            );
        }
        export default Star;
        