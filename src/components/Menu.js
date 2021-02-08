import * as React from 'react';

function SvgMenu() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 32 32">
            <g className="menu_svg__menu">
                <path
                    d="M5 8a1 1 0 011-1h20a1 1 0 110 2H6a1 1 0 01-1-1zm0 8a1 1 0 011-1h20a1 1 0 110 2H6a1 1 0 01-1-1zm1 7a1 1 0 100 2h20a1 1 0 100-2H6z"
                    className="menu_svg__Mask"
                    clipRule="evenodd"
                />
            </g>
        </svg>
    );
}

export default SvgMenu;
