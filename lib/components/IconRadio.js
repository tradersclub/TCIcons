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
const IconRadio = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.height) !== null && _b !== void 0 ? _b : props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="radio">
    <path  fill-rule="evenodd" d="M8.938 8.697a1 1 0 10-1.434-1.394C5.257 9.614 4 12.743 4 16c0 3.257 1.257 6.386 3.504 8.697a1 1 0 001.434-1.394C7.06 21.371 6 18.744 6 16c0-2.744 1.06-5.37 2.938-7.303zm15.558-1.394a1 1 0 00-1.434 1.394C24.94 10.629 26 13.256 26 16c0 2.744-1.06 5.37-2.938 7.303a1 1 0 001.434 1.394C26.743 22.386 28 19.257 28 16c0-3.257-1.257-6.386-3.504-8.697zm-12.444 4.586a1 1 0 00-1.434-1.396 7.807 7.807 0 00-1.643 2.528 7.957 7.957 0 000 5.947c.38.944.938 1.803 1.643 2.527a1 1 0 001.434-1.395 5.805 5.805 0 01-1.222-1.88 5.958 5.958 0 010-4.452c.284-.705.7-1.343 1.222-1.88zm9.33-1.384a1 1 0 00-1.434 1.395 5.805 5.805 0 011.222 1.88 5.958 5.958 0 010 4.452 5.805 5.805 0 01-1.222 1.88 1 1 0 001.434 1.395 7.807 7.807 0 001.643-2.528 7.957 7.957 0 000-5.947 7.807 7.807 0 00-1.643-2.527zM14.5 16a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm1.5-3.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconRadio;
//# sourceMappingURL=IconRadio.js.map