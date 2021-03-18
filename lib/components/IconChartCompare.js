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
const IconChartCompare = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.height) !== null && _b !== void 0 ? _b : props.size}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37259 9.37258 4.00001 16 4.00001C22.6274 4.00001 28 9.37259 28 16ZM25.9999 16C25.9999 21.5229 21.5228 26 15.9999 26C10.4771 26 5.99994 21.5229 5.99994 16C5.99994 10.4772 10.4771 6 15.9999 6C21.5228 6 25.9999 10.4772 25.9999 16ZM17 17V21C17 21.0345 16.9982 21.0686 16.9948 21.1022C16.9436 21.6065 16.5178 22 16 22C15.4477 22 15 21.5523 15 21V17H11C10.4477 17 9.99999 16.5523 9.99999 16C9.99999 15.4477 10.4477 15 11 15H15V11C15 10.4477 15.4477 10 16 10C16.5523 10 17 10.4477 17 11V15H21C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17H17Z" />
</svg>

                ` } });
};
exports.default = IconChartCompare;
//# sourceMappingURL=IconChartCompare.js.map