import * as React from 'react';

function SvgClock() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 32 32">
            <g className="clock_svg__clock">
                <path
                    d="M6 16c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10S6 21.523 6 16zM16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4zm1 6a1 1 0 10-2 0v6a1 1 0 00.553.894l4 2a1 1 0 10.894-1.788L17 15.382V10z"
                    className="clock_svg__Union"
                    clipRule="evenodd"
                />
            </g>
        </svg>
    );
}

export default SvgClock;
