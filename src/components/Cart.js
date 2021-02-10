
        import * as React from 'react';

        const Cart = (props) => {
            return React.createElement('div', {dangerouslySetInnerHTML:{__html:`
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.width}" height="${props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="cart">
    <path  fill-rule="evenodd" d="M4 5a1 1 0 011-1h3a1 1 0 01.978.79L9.666 8H27a1 1 0 01.962 1.275l-2 7A1 1 0 0125 17H11.594l.214 1H24a1 1 0 110 2H11a1 1 0 01-.978-.79l-.643-3-1.5-7L7.192 6H5a1 1 0 01-1-1zm7.166 10h13.08l1.428-5h-15.58l1.072 5zM13 23a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0zm11 0a1 1 0 112 0 1 1 0 01-2 0zm1-3a3 3 0 100 6 3 3 0 000-6z" class="Mask" clip-rule="evenodd"/>
  </g>
</svg>

            `}}
            
            );
        }
        export default Cart;
        