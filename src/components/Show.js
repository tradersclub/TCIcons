
        import * as React from 'react';

        const Show = (props) => {
            return React.createElement('div', {dangerouslySetInnerHTML:{__html:`
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.width}" height="${props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <path  fill-rule="evenodd" d="M6.539 16.5c-.14-.189-.257-.357-.354-.5a16.724 16.724 0 012.372-2.769C10.332 11.575 12.85 10 16 10c3.15 0 5.668 1.575 7.443 3.231A16.734 16.734 0 0125.815 16a16.734 16.734 0 01-2.372 2.769C21.668 20.426 19.15 22 16 22c-3.15 0-5.668-1.575-7.443-3.231a16.724 16.724 0 01-2.018-2.27zm21.329-.997L27 16l.868.497-.002.003-.004.006-.011.02a7.247 7.247 0 01-.195.316c-.134.207-.33.498-.586.846a18.726 18.726 0 01-2.263 2.543C22.832 22.074 19.85 24 16 24c-3.85 0-6.832-1.925-8.807-3.769a18.73 18.73 0 01-2.263-2.543 16.066 16.066 0 01-.74-1.092 5.983 5.983 0 01-.04-.07l-.012-.02-.004-.006-.001-.002v-.001L5 16a108.09 108.09 0 01-.868-.497l.002-.003.004-.006.011-.02.042-.07a16.066 16.066 0 01.739-1.091 18.73 18.73 0 012.263-2.544C9.168 9.926 12.15 8 16 8c3.85 0 6.832 1.926 8.807 3.769.993.926 1.752 1.85 2.263 2.543a16.038 16.038 0 01.74 1.092l.04.07.012.02.004.006.001.002v.001zM27 16l.868-.496a1 1 0 010 .992L27 16zm-22.868-.496L5 16l-.868.496a1 1 0 010-.992zM19 16a3 3 0 11-6 0 3 3 0 016 0z" clip-rule="evenodd"/>
</svg>

            `}}
            
            );
        }
        export default Show;
        