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
const IconGavelFill = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5701 7.36087L17.1746 7.96565C17.6085 8.39956 17.6084 9.10187 17.1746 9.53572L13.8487 12.8619C13.4158 13.2948 12.7115 13.2948 12.2786 12.8619L11.6738 12.2571C11.303 11.8863 11.2499 11.3162 11.5145 10.8882L10.7952 10.169L9.0725 11.8917L9.15859 11.9778C9.65465 12.4739 9.65465 13.2811 9.15859 13.7771L5.80838 17.1279C5.31224 17.624 4.50508 17.624 4.00905 17.1279L2.87204 15.9909C2.37599 15.4948 2.37599 14.6877 2.87204 14.1916L6.22284 10.8414C6.71893 10.3453 7.52608 10.3453 8.02217 10.8414L8.10826 10.9275L9.83101 9.20475L9.11181 8.48555C8.68387 8.75022 8.11378 8.69701 7.74291 8.3262L7.13813 7.7214C6.7053 7.28851 6.7053 6.58421 7.13813 6.15135L10.4643 2.82543C10.8982 2.39145 11.6005 2.3916 12.0344 2.82543L12.6391 3.42997C13.0174 3.80822 13.0591 4.37965 12.7987 4.79904L15.201 7.20126C15.6204 6.94084 16.1918 6.98259 16.5701 7.36087Z" />
</svg>

                ` } });
};
exports.default = IconGavelFill;
//# sourceMappingURL=IconGavelFill.js.map