import * as React from 'react';

function SvgSelector() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 32 32">
            <g className="selector_svg__selector">
                <path
                    d="M16.32 4.427a.4.4 0 00-.64 0l-5.2 6.933a.4.4 0 00.32.64h10.4a.4.4 0 00.32-.64l-5.2-6.933zm-.64 19.146a.4.4 0 00.64 0l5.2-6.933a.4.4 0 00-.32-.64H10.8a.4.4 0 00-.32.64l5.2 6.933z"
                    className="selector_svg__Union"
                    clipRule="evenodd"
                />
            </g>
        </svg>
    );
}

export default SvgSelector;
