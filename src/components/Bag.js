import * as React from 'react';

function SvgBag() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 32 32">
            <g className="bag_svg__bag-default">
                <path
                    d="M9.5 4a1 1 0 00-.707.293l-3.5 3.5A1 1 0 005 8.5V25a3 3 0 003 3h16a3 3 0 003-3V8.5a1 1 0 00-.293-.707l-3.5-3.5A1 1 0 0022.5 4h-13zM8.414 7.5l1.5-1.5h12.172l1.5 1.5H8.414zM7 9.5h18V25a1 1 0 01-1 1H8a1 1 0 01-1-1V9.5zm5.5 3.5a1 1 0 10-2 0 5.5 5.5 0 0011.001 0 1 1 0 10-2 0 3.5 3.5 0 11-7.001 0z"
                    className="bag_svg__Union"
                    clipRule="evenodd"
                />
            </g>
        </svg>
    );
}

export default SvgBag;
