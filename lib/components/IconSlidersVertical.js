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
const IconSlidersVertical = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.height) !== null && _b !== void 0 ? _b : props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <path  fill-rule="evenodd" d="M25 11a1 1 0 10-2 0 1 1 0 002 0zm-2-6v3.17a3.001 3.001 0 00.014 5.664c-.01.054-.014.11-.014.166v13a1 1 0 102 0V14c0-.056-.005-.112-.014-.166A3.001 3.001 0 0025 8.171V5a1 1 0 10-2 0zM7 13.83V27a1 1 0 102 0V13.83a3.001 3.001 0 000-5.66V5a1 1 0 10-2 0v3.17a3.001 3.001 0 000 5.66zM8 12a1 1 0 100-2 1 1 0 000 2zm7.014 11.834A3.001 3.001 0 0115 18.171V5a1 1 0 112 0v13.17a3.001 3.001 0 01-.014 5.664c.01.054.014.11.014.166v3a1 1 0 11-2 0v-3c0-.056.005-.112.014-.166zM16 20a1 1 0 110 2 1 1 0 010-2z" clip-rule="evenodd"/>
</svg>

                ` } });
};
exports.default = IconSlidersVertical;
//# sourceMappingURL=IconSlidersVertical.js.map