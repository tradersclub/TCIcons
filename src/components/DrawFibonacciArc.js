import * as React from 'react';

function SvgDrawFibonacciArc() {
    return (
        <svg
            id="draw-fibonacci-arc_svg__Camada_1"
            data-name="Camada 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
        >
            <defs>
                <style>{'.draw-fibonacci-arc_svg__cls-1{fill:none}'}</style>
            </defs>
            <circle className="draw-fibonacci-arc_svg__cls-1" cx={12} cy={17.5} r={1} />
            <circle className="draw-fibonacci-arc_svg__cls-1" cx={12} cy={6.5} r={1} />
            <path d="M22 7.5a1 1 0 00-1 1 8.18 8.18 0 01-6.33 7.64 3 3 0 00-5.34 0A8.18 8.18 0 013 8.5a1 1 0 00-2 0c0 4.67 3.48 8.5 8.07 9.64a3 3 0 005.86 0C19.52 17 23 13.17 23 8.5a1 1 0 00-1-1zm-10 11a1 1 0 111-1 1 1 0 01-1 1z" />
            <path d="M12 13.5a6 6 0 006-6 1 1 0 00-2 0 4 4 0 01-8 0 1 1 0 00-2 0 6 6 0 006 6z" />
            <path d="M12 9.5a3 3 0 10-3-3 3 3 0 003 3zm0-4a1 1 0 11-1 1 1 1 0 011-1z" />
        </svg>
    );
}

export default SvgDrawFibonacciArc;
