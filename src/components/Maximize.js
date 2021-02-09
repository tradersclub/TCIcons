
    import * as React from 'react';

    const Maximize = (props) => {
        return React.createElement('div', {dangerouslySetInnerHTML:{__html:`
            <svg xmlns="http://www.w3.org/2000/svg" width="${props.width}" height="${props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="maximize">
    <path  fill-rule="evenodd" d="M16.292 14.293a1 1 0 101.416 1.414L26 7.402V12a1 1 0 102 0V5a1 1 0 00-1-1h-7a1 1 0 100 2h4.574l-8.282 8.293zM4 5a1 1 0 011-1h10a1 1 0 110 2H6v20h20v-9a1 1 0 112 0v10a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" class="Mask" clip-rule="evenodd"/>
  </g>
</svg>

        `}}
        
        );
    }
    export default Maximize
    