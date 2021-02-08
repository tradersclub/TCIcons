import * as React from 'react';
export default function Notification (props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} fill={props.color} viewBox="0 0 32 32">
  <g class="notification">
    <path  fill-rule="evenodd" d="M16 4a1 1 0 011 1v2.685a7 7 0 016 6.929c0 3.352.717 5.434 1.378 6.646.332.608.655 1.007.88 1.244a2.993 2.993 0 00.305.283l.003.002A1 1 0 0125 24.614h-5.047a4 4 0 01-7.906 0H7a1 1 0 01-.566-1.825l.003-.002.052-.041c.053-.045.141-.123.254-.242.224-.237.547-.636.88-1.244C8.282 20.048 9 17.966 9 14.614a7 7 0 016-6.929V5a1 1 0 011-1zm-1.904 20.614a2 2 0 003.808 0h-3.808zm8.755-2a9.427 9.427 0 01-.229-.397C21.782 20.68 21 18.261 21 14.614a5 5 0 00-10 0c0 3.647-.783 6.065-1.622 7.603-.076.14-.153.272-.229.397h13.702z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

  );
}
