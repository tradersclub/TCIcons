import * as React from 'react';

function SvgList() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 32 32">
            <g className="list_svg__list">
                <path
                    d="M6 7a1 1 0 000 2h2a1 1 0 000-2H6zm6 0a1 1 0 100 2h14a1 1 0 100-2H12zm-1 9a1 1 0 011-1h14a1 1 0 110 2H12a1 1 0 01-1-1zm-5-1a1 1 0 100 2h2a1 1 0 100-2H6zm5 9a1 1 0 011-1h14a1 1 0 110 2H12a1 1 0 01-1-1zm-5-1a1 1 0 100 2h2a1 1 0 100-2H6z"
                    className="list_svg__Mask"
                    clipRule="evenodd"
                />
            </g>
        </svg>
    );
}

export default SvgList;
