import * as React from 'react';

function SvgMinimize() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 32 32">
            <g className="minimize_svg__minimize">
                <path
                    d="M7 16a1 1 0 011-1h16a1 1 0 110 2H8a1 1 0 01-1-1z"
                    className="minimize_svg__Union"
                    clipRule="evenodd"
                />
            </g>
        </svg>
    );
}

export default SvgMinimize;
