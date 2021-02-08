import * as React from 'react';

function SvgIndicator() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 32 32">
            <g className="indicator_svg__indicator">
                <path
                    d="M6 6a1 1 0 00-2 0v20a1 1 0 001 1h22a1 1 0 100-2H6V6zm11 4a1 1 0 10-2 0v12a1 1 0 102 0V10zm-5 4a1 1 0 10-2 0v8a1 1 0 102 0v-8zm9 3a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1z"
                    className="indicator_svg__Union"
                    clipRule="evenodd"
                />
            </g>
        </svg>
    );
}

export default SvgIndicator;
