import * as React from 'react';

function SvgDashboard() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 32 32">
            <g className="dashboard_svg__dashboard">
                <path
                    d="M22 5a1 1 0 00-1 1v19h-2V14a1 1 0 00-1-1h-4a1 1 0 00-1 1v11h-2v-5a1 1 0 00-1-1H6a1 1 0 00-1 1v5a1 1 0 100 2h22a1 1 0 100-2V6a1 1 0 00-1-1h-4zm3 20V7h-2v18h2zM15 15h2v10h-2V15zM9 25v-4H7v4h2z"
                    className="dashboard_svg__Union"
                    clipRule="evenodd"
                />
            </g>
        </svg>
    );
}

export default SvgDashboard;
