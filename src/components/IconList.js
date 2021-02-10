
        import * as React from 'react';

        const IconList = (props) => {
            return React.createElement('object', {dangerouslySetInnerHTML:{__html:`
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.width}" height="${props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="list">
    <path  fill-rule="evenodd" d="M6 7a1 1 0 000 2h2a1 1 0 000-2H6zm6 0a1 1 0 100 2h14a1 1 0 100-2H12zm-1 9a1 1 0 011-1h14a1 1 0 110 2H12a1 1 0 01-1-1zm-5-1a1 1 0 100 2h2a1 1 0 100-2H6zm5 9a1 1 0 011-1h14a1 1 0 110 2H12a1 1 0 01-1-1zm-5-1a1 1 0 100 2h2a1 1 0 100-2H6z" class="Mask" clip-rule="evenodd"/>
  </g>
</svg>

            `}}
            
            );
        }
        export default IconList;
        