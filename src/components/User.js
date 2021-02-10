
        import * as React from 'react';

        const User = (props) => {
            return React.createElement('div', {dangerouslySetInnerHTML:{__html:`
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.width}" height="${props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="user">
    <path  fill-rule="evenodd" d="M12 10a4 4 0 118 0 4 4 0 01-8 0zm4-6a6 6 0 100 12 6 6 0 000-12zm-2 14c-3.071 0-5.57 1.4-7.283 3.182C5.03 22.936 4 25.172 4 27a1 1 0 102 0c0-1.171.72-2.936 2.158-4.432C9.57 21.101 11.571 20 14 20h4c2.429 0 4.43 1.1 5.842 2.568C25.28 24.064 26 25.828 26 27a1 1 0 102 0c0-1.829-1.03-4.064-2.717-5.818C23.57 19.399 21.071 18 18 18h-4z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

            `}}
            
            );
        }
        export default User;
        