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
const IconChartBars = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${props.size}" height="${props.size}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C10 4.44772 9.55228 4 9 4C8.44772 4 8 4.44772 8 5V11V22H5C4.44772 22 4 22.4477 4 23C4 23.5523 4.44772 24 5 24H8V27C8 27.5523 8.44772 28 9 28C9.55228 28 10 27.5523 10 27V23V12H13C13.5523 12 14 11.5523 14 11C14 10.4477 13.5523 10 13 10H10V5ZM21.9999 5C21.9999 4.44772 22.4476 4 22.9999 4C23.5522 4 23.9999 4.44772 23.9999 5V9V20H26.9999C27.5522 20 27.9999 20.4477 27.9999 21C27.9999 21.5523 27.5522 22 26.9999 22H23.9999V27C23.9999 27.5523 23.5522 28 22.9999 28C22.4476 28 21.9999 27.5523 21.9999 27V21V10H18.9999C18.4476 10 17.9999 9.55228 17.9999 9C17.9999 8.44772 18.4476 8 18.9999 8H21.9999V5Z" />
</svg>

                ` } });
};
exports.default = IconChartBars;
//# sourceMappingURL=IconChartBars.js.map