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
const IconHeadphones = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.height) !== null && _b !== void 0 ? _b : props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="headphones">
    <path  fill-rule="evenodd" d="M8.922 8.877A10.104 10.104 0 0116 6c2.658 0 5.204 1.037 7.078 2.877A9.701 9.701 0 0126 15.8V17h-2.667c-.93 0-1.811.39-2.453 1.064a3.64 3.64 0 00-.991 2.507v3.858c0 .93.351 1.834.991 2.507A3.384 3.384 0 0023.333 28h1.223c.93 0 1.811-.39 2.453-1.064A3.64 3.64 0 0028 24.429V15.8c0-3.136-1.269-6.139-3.521-8.35A12.104 12.104 0 0016 4a12.104 12.104 0 00-8.479 3.45A11.701 11.701 0 004 15.8v8.629c0 .93.351 1.834.991 2.507A3.384 3.384 0 007.444 28h1.223c.93 0 1.811-.39 2.453-1.064a3.64 3.64 0 00.991-2.507V20.57a3.64 3.64 0 00-.991-2.507A3.384 3.384 0 008.667 17H6v-1.2a9.701 9.701 0 012.922-6.923zM6 19v5.429c0 .432.164.838.44 1.129.276.29.638.442 1.004.442h1.223c.366 0 .728-.153 1.003-.442.277-.291.441-.697.441-1.13v-3.857c0-.432-.164-.838-.44-1.129A1.385 1.385 0 008.666 19H6zm20 0h-2.667c-.366 0-.728.153-1.003.442-.277.291-.441.697-.441 1.13v3.857c0 .432.164.838.44 1.129.276.29.638.442 1.004.442h1.223c.366 0 .728-.153 1.003-.442.277-.291.441-.697.441-1.13V19z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconHeadphones;
//# sourceMappingURL=IconHeadphones.js.map