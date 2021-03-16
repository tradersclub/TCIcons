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
const IconTimeEvent = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="time-event">
    <path  fill-rule="evenodd" d="M21 5a1 1 0 10-2 0v1h-6V5a1 1 0 10-2 0v1H7a3 3 0 00-3 3v11a3 3 0 003 3h2.29a7.002 7.002 0 0013.416 0H25a3 3 0 003-3V9a3 3 0 00-3-3h-4V5zm1.997 16H25a1 1 0 001-1v-7.2H6V20a1 1 0 001 1h2v-.002a6.998 6.998 0 1113.997 0V21zM11 9V8H7a1 1 0 00-1 1v2.2h20V9a1 1 0 00-1-1h-4v1a1 1 0 11-2 0V8h-6v1a1 1 0 11-2 0zm4.998 7a4.998 4.998 0 100 9.997 4.998 4.998 0 000-9.997zm-.088.91a1 1 0 011 1v2.382l1.448.724a1 1 0 01-.895 1.789l-2-1a1 1 0 01-.553-.895v-3a1 1 0 011-1z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconTimeEvent;
//# sourceMappingURL=IconTimeEvent.js.map