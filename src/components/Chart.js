import * as React from 'react';
export default function Chart (props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} fill={props.color} viewBox="0 0 32 32">
  <path  fill-rule="evenodd" d="M6 16a9 9 0 019-9c2.132 0 4.088.74 5.63 1.978l-6.336 6.314A1 1 0 0015 17h8.945A9.001 9.001 0 016 16zm19.95 1a.998.998 0 01-.004.099C25.394 22.659 20.704 27 15 27 8.925 27 4 22.075 4 16S8.925 5 15 5c2.683 0 5.145.962 7.054 2.559l.74-.738a1 1 0 011.414.003A12.962 12.962 0 0128 16a1 1 0 01-1 1h-1.05zm.005-2H17.42l6.045-6.024A10.946 10.946 0 0125.956 15z" clip-rule="evenodd"/>
</svg>

  );
}
