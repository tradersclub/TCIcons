import * as React from 'react';

function SvgPlus() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 32 32">
            <g className="plus_svg__plus">
                <path
                    d="M17 5a1 1 0 10-2 0v10H5a1 1 0 100 2h10v10a1 1 0 102 0V17h10a1 1 0 100-2H17V5z"
                    className="plus_svg__Union"
                    clipRule="evenodd"
                />
            </g>
        </svg>
    );
}

export default SvgPlus;
