
        import * as React from 'react';

        const IconShieldCheck = (props) => {
            return React.createElement('div', {dangerouslySetInnerHTML:{__html:`
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.width}" height="${props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="shield-check">
    <path  d="M16 28c9.875-3.101 10.912-11.078 10.994-19.818a1.956 1.956 0 00-1.38-1.89C23.114 5.522 17.932 4 16 4c-1.932 0-7.114 1.521-9.614 2.292a1.956 1.956 0 00-1.38 1.89C5.088 16.922 6.124 24.899 16 28z" class="Vector"/>
    <g class="check">
      <path  fill-rule="evenodd" d="M21.52 11.012a1 1 0 010 1.414l-6.563 6.562a1 1 0 01-1.414 0l-3.063-3.062a1 1 0 011.415-1.414l2.355 2.355 5.855-5.855a1 1 0 011.415 0z" class="Union" clip-rule="evenodd"/>
    </g>
  </g>
</svg>

            `}}
            
            );
        }
        export default IconShieldCheck;
        