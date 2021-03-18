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
const IconRotate = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.height) !== null && _b !== void 0 ? _b : props.size}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.8366 7.24826C19.9392 6.19934 17.7523 5.79548 15.6054 6.09754C13.4651 6.39867 11.4801 7.3851 9.94772 8.90879L7 11.6298V7.99072C7 7.43844 6.55228 6.99072 6 6.99072C5.44772 6.99072 5 7.43844 5 7.99072V13.9907C5 14.543 5.44772 14.9907 6 14.9907H12C12.5523 14.9907 13 14.543 13 13.9907C13 13.4384 12.5523 12.9907 12 12.9907H8.47426L11.3183 10.3655C11.3279 10.3566 11.3373 10.3476 11.3465 10.3384C12.574 9.11297 14.1665 8.31968 15.884 8.07804C17.6015 7.83639 19.3511 8.15947 20.869 8.99861C22.387 9.83775 23.5911 11.1475 24.2999 12.7305C25.0088 14.3134 25.184 16.0839 24.7991 17.7751C24.4143 19.4664 23.4902 20.9867 22.1662 22.107C20.8421 23.2274 19.1898 23.8871 17.4583 23.9868C15.7267 24.0865 14.0096 23.6207 12.5658 22.6596C11.212 21.7585 10.1672 20.4678 9.56706 18.9619C9.3626 18.4488 8.78094 18.1987 8.2679 18.4032C7.75486 18.6076 7.50471 19.1893 7.70917 19.7023C8.45939 21.5848 9.76537 23.1981 11.4576 24.3245C13.2624 25.5258 15.4087 26.1081 17.5732 25.9835C19.7377 25.8589 21.803 25.0343 23.4581 23.6338C25.1131 22.2333 26.2682 20.3329 26.7493 18.2189C27.2304 16.1049 27.0114 13.8918 26.1253 11.9131C25.2392 9.93435 23.7341 8.29718 21.8366 7.24826Z"/>
</svg>

                ` } });
};
exports.default = IconRotate;
//# sourceMappingURL=IconRotate.js.map