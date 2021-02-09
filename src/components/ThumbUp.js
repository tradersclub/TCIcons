
    import * as React from 'react';

    const ThumbUp = (props) => {
        return React.createElement('div', {dangerouslySetInnerHTML:{__html:`
            <svg xmlns="http://www.w3.org/2000/svg" width="${props.width}" height="29" fill="${props.color}" viewBox="0 0 32 29">
  <path  fill-rule="evenodd" d="M14.148 4.588A1 1 0 0115.06 4c1.149 0 2.255.45 3.072 1.254.818.805 1.28 1.9 1.28 3.046v3.4h5.322c.465-.004.925.09 1.35.278.427.188.808.467 1.117.816a3.166 3.166 0 01.762 2.588v.002l-1.543 9.898a3.191 3.191 0 01-1.109 1.961 3.257 3.257 0 01-2.12.757H7.236a3.254 3.254 0 01-2.282-.932A3.182 3.182 0 014 24.8v-7.7c0-.854.345-1.67.953-2.268a3.254 3.254 0 012.282-.932h2.708l4.205-9.312zm-2.56 10.527L15.67 6.08c.398.104.765.31 1.06.6.439.433.683 1.016.683 1.621v4.4a1 1 0 001 1h6.337c.182-.002.361.035.526.107.164.073.31.18.426.311a1.187 1.187 0 01.284.96l-1.542 9.898v.002c-.044.281-.19.542-.416.731-.226.19-.518.294-.82.29H11.589V15.116zM9.589 26V15.9H7.236c-.332 0-.648.13-.879.357-.23.226-.356.53-.356.843v7.7c0 .313.126.616.356.843.23.227.547.357.88.357h2.353z" clip-rule="evenodd"/>
</svg>

        `}}
        
        );
    }
    export default ThumbUp
    