import * as React from 'react';

function SvgCheck() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 32 32">
            <g className="check_svg__check">
                <path
                    d="M27.707 7.793a1 1 0 010 1.414l-15 15a1 1 0 01-1.414 0l-7-7a1 1 0 111.414-1.414L12 22.086 26.293 7.793a1 1 0 011.414 0z"
                    className="check_svg__Union"
                    clipRule="evenodd"
                />
            </g>
        </svg>
    );
}

export default SvgCheck;
