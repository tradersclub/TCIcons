import * as React from 'react';

function SvgChartArea() {
    return (
        <svg width="1em" height="1em" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path opacity={0.32} d="M11 16l-7 8h24V12l-2.7 3.6a1 1 0 01-.8.4H21l-4.331 3.898a1 1 0 01-1.338 0L11 16z" />
            <path
                clipRule="evenodd"
                d="M27.6 8.2a1 1 0 01.2 1.4l-3 4a1 1 0 01-.8.4h-3.586l-3.707 3.707a1 1 0 01-1.414 0l-4.236-4.236-5.298 6.18a1 1 0 01-1.518-1.302l6-7a1 1 0 011.466-.056L16 15.586l3.293-3.293A1 1 0 0120 12h3.5l2.7-3.6a1 1 0 011.4-.2z"
            />
        </svg>
    );
}

export default SvgChartArea;
