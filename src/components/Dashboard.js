
    import * as React from 'react';

    const Dashboard = (props) => {
        return React.createElement('div', {dangerouslySetInnerHTML:{__html:`
            <svg xmlns="http://www.w3.org/2000/svg" width="${props.width}" height="${props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="dashboard">
    <path  fill-rule="evenodd" d="M22 5a1 1 0 00-1 1v19h-2V14a1 1 0 00-1-1h-4a1 1 0 00-1 1v11h-2v-5a1 1 0 00-1-1H6a1 1 0 00-1 1v5a1 1 0 100 2h22a1 1 0 100-2V6a1 1 0 00-1-1h-4zm3 20V7h-2v18h2zM15 15h2v10h-2V15zM9 25v-4H7v4h2z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

        `}}
        
        );
    }
    export default Dashboard
    