import * as React from 'react';

function SvgMove() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 32 32">
            <g className="move_svg__move">
                <path
                    d="M15.293 4.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L17 7.414V15h7.586l-1.293-1.293a1 1 0 011.414-1.414l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L24.586 17H17v7.586l1.293-1.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L15 24.586V17H7.414l1.293 1.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 1.414L7.414 15H15V7.414l-1.293 1.293a1 1 0 11-1.414-1.414l3-3z"
                    className="move_svg__Union"
                    clipRule="evenodd"
                />
            </g>
        </svg>
    );
}

export default SvgMove;
