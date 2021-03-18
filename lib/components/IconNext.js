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
const IconNext = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.width) !== null && _b !== void 0 ? _b : props.height}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.47 10.152C21.7783 9.95933 22.1668 9.94913 22.4848 10.1254C22.8027 10.3016 23 10.6365 23 11V21C23 21.3635 22.8027 21.6984 22.4848 21.8746C22.1668 22.0509 21.7783 22.0407 21.47 21.848L13.47 16.848C13.1776 16.6653 13 16.3448 13 16C13 15.6552 13.1776 15.3347 13.47 15.152L21.47 10.152ZM15.8868 16L21 19.1958V12.8042L15.8868 16ZM9 21C9 21.5523 9.44772 22 10 22C10.5523 22 11 21.5523 11 21V11C11 10.4477 10.5523 10 10 10C9.44772 10 9 10.4477 9 11V21Z"/>
</svg>

                ` } });
};
exports.default = IconNext;
//# sourceMappingURL=IconNext.js.map