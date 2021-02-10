import * as React from 'react';

function SvgPaymentMastercard() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 32 32">
            <g className="payment-mastercard_svg__payment-mastercard">
                <g className="payment-mastercard_svg__Group payment-mastercard_svg__83">
                    <rect
                        width={24}
                        height={16}
                        x={5}
                        y={8}
                        className="payment-mastercard_svg__Rectangle payment-mastercard_svg__64"
                        rx={2}
                    />
                    <circle
                        cx={14}
                        cy={16}
                        r={5}
                        className="payment-mastercard_svg__Ellipse payment-mastercard_svg__39"
                    />
                    <circle
                        cx={20}
                        cy={16}
                        r={5}
                        className="payment-mastercard_svg__Ellipse payment-mastercard_svg__40"
                    />
                    <path
                        d="M17 20a4.993 4.993 0 002-4 4.993 4.993 0 00-2-4 4.993 4.993 0 00-2 4c0 1.636.786 3.088 2 4z"
                        className="payment-mastercard_svg__Intersect"
                    />
                </g>
            </g>
        </svg>
    );
}

export default SvgPaymentMastercard;
