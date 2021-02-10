
        import * as React from 'react';

        const CalendarNoEvents = (props) => {
            return React.createElement('div', {dangerouslySetInnerHTML:{__html:`
                <svg xmlns="http://www.w3.org/2000/svg" width="${props.width}" height="${props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="calendar / no-events">
    <path  fill-rule="evenodd" d="M21.756 7H21V6a1 1 0 10-2 0v1h-6V6a1 1 0 10-2 0v1H9a3 3 0 00-3 3v12.756l2-2V15h5.756l2-2H8v-3a1 1 0 011-1h2v1a1 1 0 102 0V9h6v.756L21.756 7zm.828 2l1.708-1.708h.001l2-2a1 1 0 111.414 1.415l-2 2h.001L24 10.417v-.002L21.414 13h.002l-2 2h-.002l-10 10h.002l-1.708 1.708h-.001l-2 2a1 1 0 01-1.414-1.415l2-2h-.001L8 23.583v.002L16.586 15h-.002l2-2h.002l4-4h-.002zm-12.34 18H23a3 3 0 003-3V11.244L22.244 15H24v9a1 1 0 01-1 1H12.244l-2 2z" class="Mask" clip-rule="evenodd"/>
  </g>
</svg>

            `}}
            
            );
        }
        export default CalendarNoEvents
        