import * as React from 'react';

function SvgCaret() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 32 32">
            <g className="caret_svg__caret">
                <path
                    d="M14.962 19.635l-6.618-5.862c-.78-.69-.146-1.773 1.04-1.773h13.235c.265 0 .525.059.748.17.223.111.4.27.51.457.11.188.147.395.108.599a.984.984 0 01-.327.548l-6.618 5.86a1.41 1.41 0 01-.468.27 1.733 1.733 0 01-1.141 0 1.41 1.41 0 01-.469-.27v.001z"
                    className="caret_svg__Vector"
                />
            </g>
        </svg>
    );
}

export default SvgCaret;
