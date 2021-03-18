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
const IconDrawMarker = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.height) !== null && _b !== void 0 ? _b : props.size}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.2932 4.29289C12.4808 4.10536 12.7351 4 13.0004 4H19.0008C19.5531 4 20.0008 4.44772 20.0008 5V18.001H25.0012C25.4164 18.001 25.7884 18.2576 25.9359 18.6456C26.0835 19.0337 25.9759 19.4726 25.6656 19.7484L16.6649 27.749C16.286 28.0858 15.7151 28.0858 15.3362 27.749L6.33556 19.7485C6.02525 19.4726 5.91765 19.0337 6.0652 18.6457C6.21274 18.2576 6.58474 18.001 6.99992 18.001L12.0004 18.001L12.0004 5C12.0004 4.73478 12.1057 4.48043 12.2932 4.29289ZM14.0004 6V19.001C14.0004 19.5533 13.5526 20.001 13.0004 20.001L9.63011 20.001L16.0006 25.6636L22.371 20.001H19.0008C18.4485 20.001 18.0008 19.5533 18.0008 19.001V6H14.0004Z" />
</svg>
                ` } });
};
exports.default = IconDrawMarker;
//# sourceMappingURL=IconDrawMarker.js.map