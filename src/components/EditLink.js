
        import * as React from 'react';

        const EditLink = (props) => {
            return React.createElement('div', {dangerouslySetInnerHTML:{__html:`
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.width}" height="${props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="link">
    <path  fill-rule="evenodd" d="M21.974 4a6.027 6.027 0 00-4.261 1.765l-.664.664a1.333 1.333 0 101.886 1.886l.663-.664a3.36 3.36 0 014.752 4.752l-5.31 5.31-.01.01a3.31 3.31 0 01-4.732 0 1.333 1.333 0 00-1.905 1.866 5.979 5.979 0 008.537.005l5.306-5.306A6.027 6.027 0 0021.974 4zm-6.637 6.618a5.98 5.98 0 00-4.266 1.79l-5.306 5.305a6.027 6.027 0 008.523 8.523l.664-.664a1.333 1.333 0 10-1.886-1.885l-.663.663a3.36 3.36 0 01-4.752-4.752l5.31-5.31.01-.01a3.313 3.313 0 014.732 0 1.333 1.333 0 001.905-1.866 5.98 5.98 0 00-4.271-1.794z" class="Mask" clip-rule="evenodd"/>
  </g>
</svg>

            `}}
            
            );
        }
        export default EditLink;
        