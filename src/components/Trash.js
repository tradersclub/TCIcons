import * as React from 'react';

function SvgTrash() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 32 32">
            <g className="trash_svg__trash">
                <path
                    d="M13.293 6.293A1 1 0 0114 6h4a1 1 0 011 1v1h-6V7a1 1 0 01.293-.707zM11 8V7a3 3 0 013-3h4a3 3 0 013 3v1h5a1 1 0 110 2h-2v15a3 3 0 01-3 3H11a3 3 0 01-3-3V10H6a1 1 0 010-2h5zm-1 2v15a1 1 0 001 1h10a1 1 0 001-1V10H10zm4 3a1 1 0 011 1v8a1 1 0 11-2 0v-8a1 1 0 011-1zm5 9v-8a1 1 0 10-2 0v8a1 1 0 102 0z"
                    className="trash_svg__Union"
                    clipRule="evenodd"
                />
            </g>
        </svg>
    );
}

export default SvgTrash;
