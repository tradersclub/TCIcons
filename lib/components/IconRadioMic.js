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
const IconRadioMic = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.height) !== null && _b !== void 0 ? _b : props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="radio-mic">
    <path  fill-rule="evenodd" d="M16 4a4 4 0 00-4 4v8a4 4 0 108 0V8a4 4 0 00-4-4zm-1.414 2.586A2 2 0 0118 8v8a2 2 0 01-4 0V8a2 2 0 01.586-1.414zM10 14a1 1 0 10-2 0v2a8 8 0 007 7.937V26h-3a1 1 0 100 2h8a1 1 0 100-2h-3v-2.063A8 8 0 0024 16v-2a1 1 0 10-2 0v2a6 6 0 11-12 0v-2z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>
                ` } });
};
exports.default = IconRadioMic;
//# sourceMappingURL=IconRadioMic.js.map