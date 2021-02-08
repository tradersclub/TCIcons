import * as React from 'react';

function SvgMaximize() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 32 32">
            <g className="maximize_svg__maximize">
                <path
                    d="M16.292 14.293a1 1 0 101.416 1.414L26 7.402V12a1 1 0 102 0V5a1 1 0 00-1-1h-7a1 1 0 100 2h4.574l-8.282 8.293zM4 5a1 1 0 011-1h10a1 1 0 110 2H6v20h20v-9a1 1 0 112 0v10a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"
                    className="maximize_svg__Mask"
                    clipRule="evenodd"
                />
            </g>
        </svg>
    );
}

export default SvgMaximize;
