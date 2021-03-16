"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const IconCalendarNoEvents = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="calendar / no-events">
    <path  fill-rule="evenodd" d="M21.756 7H21V6a1 1 0 10-2 0v1h-6V6a1 1 0 10-2 0v1H9a3 3 0 00-3 3v12.756l2-2V15h5.756l2-2H8v-3a1 1 0 011-1h2v1a1 1 0 102 0V9h6v.756L21.756 7zm.828 2l1.708-1.708h.001l2-2a1 1 0 111.414 1.415l-2 2h.001L24 10.417v-.002L21.414 13h.002l-2 2h-.002l-10 10h.002l-1.708 1.708h-.001l-2 2a1 1 0 01-1.414-1.415l2-2h-.001L8 23.583v.002L16.586 15h-.002l2-2h.002l4-4h-.002zm-12.34 18H23a3 3 0 003-3V11.244L22.244 15H24v9a1 1 0 01-1 1H12.244l-2 2z" class="Mask" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconCalendarNoEvents;
//# sourceMappingURL=IconCalendarNoEvents.js.map