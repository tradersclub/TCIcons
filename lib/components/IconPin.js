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
const IconPin = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.height) !== null && _b !== void 0 ? _b : props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="pin">
    <path  fill-rule="evenodd" d="M19.51 5.626a1 1 0 00-1.492 1.326l-4.133 4.133L9.1 12.879a.999.999 0 00-.356.23l-1.87 1.87a1 1 0 000 1.414l3.657 3.658-4.905 4.904A1 1 0 107.04 26.37l4.905-4.904 3.657 3.657a1 1 0 001.415 0l1.87-1.87c.101-.101.18-.223.23-.356l1.794-4.786 4.133-4.132a1 1 0 001.325-1.493l-6.858-6.859zm4.114 6.942l-4.197-4.197-4.28 4.281a1 1 0 01-.357.23l-4.785 1.794-1.01 1.01 3.654 3.655.003.002.003.003 3.655 3.655 1.01-1.01 1.794-4.786a.999.999 0 01.23-.355l4.28-4.282z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconPin;
//# sourceMappingURL=IconPin.js.map