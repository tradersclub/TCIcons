
            import * as React from 'react';
    
            const IconProposalDetails = (props) => {
                return React.createElement('object', {style: props.style, dangerouslySetInnerHTML:{__html:`
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="proposal-details">
    <path  fill-rule="evenodd" d="M5 5a1 1 0 00-1 1v20a1 1 0 001 1h22a1 1 0 001-1V6a1 1 0 00-1-1H5zm1 20V7h14v18H6zm16 0V7h4v18h-4zM9 9a1 1 0 000 2h8a1 1 0 100-2H9zm0 4a1 1 0 100 2h2a1 1 0 100-2H9zm0 4a1 1 0 100 2h6a1 1 0 100-2H9zm0 4a1 1 0 100 2h4a1 1 0 100-2H9z" class="Mask" clip-rule="evenodd"/>
  </g>
</svg>

                `}}
                
                );
            }
            export default IconProposalDetails;
            