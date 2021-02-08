import * as React from 'react';

function SvgCompany() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 32 32">
            <g className="company_svg__company">
                <path
                    d="M8 4H7v21a3 3 0 003 3h12a3 3 0 003-3V7a3 3 0 00-3-3H8zm1 10v11a1 1 0 001 1h12a1 1 0 001-1V7a1 1 0 00-1-1H9v6h5v6h-2v-4H9zm3.455-4.545h-1.091V7.273h2.181v1.09h1.091v2.183h-2.181V9.455zm4.363-1.091H19v2.181h-2.182V8.364z"
                    className="company_svg__Mask"
                    clipRule="evenodd"
                />
            </g>
        </svg>
    );
}

export default SvgCompany;
