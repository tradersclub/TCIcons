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
const IconInfoCircleFill = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.width) !== null && _b !== void 0 ? _b : props.height}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M26 16C26 21.5228 21.5228 26 16 26C10.4772 26 6 21.5228 6 16C6 10.4772 10.4772 6 16 6C21.5228 6 26 10.4772 26 16ZM14.6667 11.6667C14.6667 10.9303 15.2636 10.3333 16 10.3333H16.0133C16.7497 10.3333 17.3467 10.9303 17.3467 11.6667C17.3467 12.403 16.7497 13 16.0133 13H16C15.2636 13 14.6667 12.403 14.6667 11.6667ZM17.472 14.0343L17.2891 15.1315L16.4732 20.0268L16.8685 19.9609C17.3043 19.8882 17.7165 20.1827 17.7891 20.6185C17.8618 21.0543 17.5673 21.4665 17.1315 21.5391L15.6315 21.7891C15.3767 21.8316 15.117 21.7484 14.9343 21.5657C14.7516 21.383 14.6684 21.1233 14.7109 20.8685L15.528 15.9657L15.1264 16.03C14.6901 16.0998 14.2799 15.8027 14.21 15.3664C14.1402 14.9301 14.4373 14.5199 14.8736 14.45L16.3736 14.21L17.472 14.0343Z"/>
</svg>

                ` } });
};
exports.default = IconInfoCircleFill;
//# sourceMappingURL=IconInfoCircleFill.js.map