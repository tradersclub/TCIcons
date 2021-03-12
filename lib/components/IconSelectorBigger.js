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
const IconSelectorBigger = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.48" d="M8.31994 12.5733C8.15994 12.7867 7.83994 12.7867 7.67994 12.5733L5.47994 9.64C5.28217 9.37631 5.47032 9 5.79994 9H10.1999C10.5296 9 10.7177 9.37631 10.5199 9.64L8.31994 12.5733Z"/>
<path d="M7.68006 3.42667C7.84006 3.21333 8.16006 3.21333 8.32006 3.42667L10.5201 6.36C10.7178 6.62369 10.5297 7 10.2001 7H5.80006C5.47044 7 5.28229 6.62369 5.48006 6.36L7.68006 3.42667Z"/>
</svg>

                ` } });
};
exports.default = IconSelectorBigger;
//# sourceMappingURL=IconSelectorBigger.js.map