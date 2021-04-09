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
const IconAnalysis = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${props.size}" height="${props.size}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.79995 5.00001C5.79995 4.55818 5.44178 4.20001 4.99995 4.20001C4.55812 4.20001 4.19995 4.55818 4.19995 5.00001V27C4.19995 27.4418 4.55812 27.8 4.99995 27.8H26.9931C27.4349 27.8 27.7931 27.4418 27.7931 27C27.7931 26.5582 27.4349 26.2 26.9931 26.2H5.79995V5.00001ZM19.458 14.6313L24.5633 9.56803C24.877 9.25691 24.8791 8.75038 24.568 8.43667C24.2568 8.12296 23.7503 8.12087 23.4366 8.43199L18.3316 13.4949L24.568 8.43667L18.3313 13.4953C18.1776 13.6474 18.0868 13.6545 18.0662 13.6546H18.066H14.5548H14.5542H14.554C13.8505 13.6542 13.2853 14.0715 12.8891 14.5898L12.8888 14.5901L8.36417 20.5144C8.09599 20.8656 8.16325 21.3676 8.51438 21.6358C8.86551 21.904 9.36756 21.8367 9.63573 21.4856L14.1602 15.5615C14.3857 15.2665 14.5318 15.2545 14.5531 15.2546L14.554 15.2546H18.0666L18.0673 15.2546C18.6184 15.2541 19.092 14.9938 19.4576 14.6316L19.458 14.6313Z" />
</svg>
                ` } });
};
exports.default = IconAnalysis;
//# sourceMappingURL=IconAnalysis.js.map