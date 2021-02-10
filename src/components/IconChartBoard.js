
        import * as React from 'react';

        const IconChartBoard = (props) => {
            return React.createElement('div', {dangerouslySetInnerHTML:{__html:`
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.width}" height="${props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="chart-board">
    <path  fill-rule="evenodd" d="M17 4a1 1 0 10-2 0v3H6a1 1 0 00-1 1v14a1 1 0 001 1h5.523l-1.397 2.514a1 1 0 001.748.972L13.811 23h4.378l1.937 3.486a1 1 0 001.748-.972L20.477 23H26a1 1 0 001-1V8a1 1 0 00-1-1h-9V4zm-3.796 17H25V9H7v12h6.204zM18 12a1 1 0 001 1h.586L17 15.586l-2.293-2.293a1 1 0 00-1.414 0l-4 4a1 1 0 101.414 1.414L14 15.414l2.293 2.293a1 1 0 001.414 0L21 14.414V15a1 1 0 102 0v-3a1 1 0 00-1-1h-3a1 1 0 00-1 1z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

            `}}
            
            );
        }
        export default IconChartBoard;
        