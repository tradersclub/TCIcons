
        import * as React from 'react';

        const Filter = (props) => {
            return React.createElement('div', {dangerouslySetInnerHTML:{__html:`
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.width}" height="${props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="filter / default">
    <path  fill-rule="evenodd" d="M4.093 5.58A1 1 0 015 5h22a1 1 0 01.764 1.646L19.2 16.772V26a1 1 0 01-1.447.894l-4.4-2.2a1 1 0 01-.553-.894v-7.028L4.236 6.646a1 1 0 01-.143-1.067zM7.155 7l7.409 8.76a1 1 0 01.236.646v6.776l2.4 1.2v-7.976a1 1 0 01.236-.646L24.845 7H7.155z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

            `}}
            
            );
        }
        export default Filter
        