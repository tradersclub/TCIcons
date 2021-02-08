import * as React from 'react';
export default function ImageFill (props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} fill={props.color} viewBox="0 0 32 32">
  <g class="image-fill">
    <path  fill-rule="evenodd" d="M6 9.125C6 7.399 7.4 6 9.125 6h13.75C24.601 6 26 7.4 26 9.125v11.024l-3.963-3.963-.014-.013C21.27 15.447 20.341 15 19.33 15c-1.011 0-1.939.447-2.693 1.173l-.014.013-3.293 3.293-.626-.626-.014-.014c-.754-.726-1.682-1.172-2.693-1.172-1.012 0-1.94.446-2.694 1.172l-.013.014L6 20.143V9.124zM9.125 4A5.125 5.125 0 004 9.125v13.75A5.125 5.125 0 009.125 28h13.75A5.125 5.125 0 0028 22.875V9.125A5.125 5.125 0 0022.875 4H9.125zM9 10.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

  )
};
