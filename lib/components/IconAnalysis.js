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
<path d="M9 24L13.3539 19.1249C13.7673 18.6624 14.2947 18.448 14.8208 18.5286L18.1185 19.0409C18.3691 19.0804 18.6228 19.0528 18.866 18.9597L24 17" stroke="#74788C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 17L13.5247 13.0504C13.8356 12.7792 14.1914 12.6361 14.554 12.6364H18.0667C18.3523 12.6362 18.6346 12.5473 18.8947 12.3755L24 9" stroke="#74788C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.9932 27H5V5" stroke="#74788C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                ` } });
};
exports.default = IconAnalysis;
//# sourceMappingURL=IconAnalysis.js.map