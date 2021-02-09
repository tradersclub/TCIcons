
    import * as React from 'react';

    const GripVerticalLine = (props) => {
        return React.createElement('div', {dangerouslySetInnerHTML:{__html:`
            <svg xmlns="http://www.w3.org/2000/svg" width="${props.width}" height="${props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="grip-vertical/line">
    <path  fill-rule="evenodd" d="M4 11a1 1 0 011-1h22a1 1 0 110 2H5a1 1 0 01-1-1zm0 5a1 1 0 011-1h22a1 1 0 110 2H5a1 1 0 01-1-1zm1 4a1 1 0 100 2h22a1 1 0 100-2H5z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

        `}}
        
        );
    }
    export default GripVerticalLine
    