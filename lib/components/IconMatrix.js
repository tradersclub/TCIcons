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
const IconMatrix = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="matrix">
    <path  fill-rule="evenodd" d="M16 4a3.108 3.108 0 00-3.105 3.105A3.108 3.108 0 0016 10.21a3.108 3.108 0 003.104-3.105A3.108 3.108 0 0016 4zm0 1.334c.976 0 1.77.795 1.77 1.77 0 .977-.794 1.772-1.77 1.772-.977 0-1.77-.795-1.77-1.771 0-.976.793-1.77 1.77-1.77zM7.105 9.34A2.237 2.237 0 014.87 7.105 2.237 2.237 0 017.105 4.87 2.237 2.237 0 019.34 7.105 2.237 2.237 0 017.105 9.34zm17.79 0a2.237 2.237 0 01-2.235-2.235 2.237 2.237 0 012.235-2.235 2.237 2.237 0 012.235 2.235 2.237 2.237 0 01-2.235 2.235zM13.765 16A2.237 2.237 0 0016 18.235 2.237 2.237 0 0018.235 16 2.237 2.237 0 0016 13.765 2.237 2.237 0 0013.765 16zM16 27.13a2.237 2.237 0 01-2.235-2.235A2.237 2.237 0 0116 22.66a2.237 2.237 0 012.235 2.235A2.237 2.237 0 0116 27.13zm6.66-2.235a2.237 2.237 0 002.235 2.235 2.237 2.237 0 002.235-2.235 2.237 2.237 0 00-2.235-2.235 2.237 2.237 0 00-2.235 2.235zm-15.555-6.66A2.237 2.237 0 014.87 16a2.237 2.237 0 012.235-2.235A2.237 2.237 0 019.34 16a2.237 2.237 0 01-2.235 2.235zM4 24.895a3.108 3.108 0 013.105-3.105 3.108 3.108 0 013.104 3.105A3.108 3.108 0 017.105 28 3.108 3.108 0 014 24.895zm4.875 0c0-.976-.794-1.77-1.77-1.77-.977 0-1.77.794-1.77 1.77s.793 1.77 1.77 1.77c.976 0 1.77-.794 1.77-1.77zM21.79 16a3.108 3.108 0 013.105-3.105A3.108 3.108 0 0127.999 16a3.108 3.108 0 01-3.104 3.105A3.108 3.108 0 0121.79 16zm4.875 0c0-.976-.794-1.77-1.77-1.77-.977 0-1.77.794-1.77 1.77 0 .977.793 1.77 1.77 1.77.976 0 1.77-.793 1.77-1.77z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconMatrix;
//# sourceMappingURL=IconMatrix.js.map