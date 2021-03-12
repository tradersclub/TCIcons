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
const IconDrawText = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${props.size}" height="${props.size}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 6C6 5.44772 6.44772 5 7 5H16H25C25.5523 5 26 5.44772 26 6V8C26 8.55228 25.5523 9 25 9C24.4477 9 24 8.55228 24 8V7H17V25H18C18.5523 25 19 25.4477 19 26C19 26.5523 18.5523 27 18 27H16H14C13.4477 27 13 26.5523 13 26C13 25.4477 13.4477 25 14 25H15V7H8V8C8 8.55228 7.55228 9 7 9C6.44772 9 6 8.55228 6 8V6Z" />
</svg>

                ` } });
};
exports.default = IconDrawText;
//# sourceMappingURL=IconDrawText.js.map