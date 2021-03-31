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
const IconScreener = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${props.size}" height="${props.size}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path d="M27.0001 13.8V25.5334C27.0001 25.9223 26.8456 26.2954 26.5705 26.5705C26.2954 26.8455 25.9224 27 25.5334 27H6.46667C6.07769 27 5.70463 26.8455 5.42958 26.5705C5.15452 26.2954 5 25.9223 5 25.5334V11.6C5 11.211 5.15452 10.8379 5.42958 10.5629C5.70463 10.2878 6.07769 10.1333 6.46667 10.1333H15.2667" stroke="#74788C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.0665 16V23.3334C24.0665 23.5278 23.9892 23.7144 23.8517 23.8519C23.7142 23.9894 23.5277 24.0667 23.3332 24.0667H8.66644C8.47195 24.0667 8.28542 23.9894 8.14789 23.8519C8.01037 23.7144 7.93311 23.5278 7.93311 23.3334V13.8C7.93311 13.6055 8.01037 13.419 8.14789 13.2814C8.28542 13.1439 8.47195 13.0667 8.66644 13.0667H12.5706" stroke="#74788C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.2374 8.32339L19.8721 16.6942L16.3403 17.9242L16.5633 14.192L22.9286 5.82027C23.2596 5.38297 23.7508 5.09499 24.294 5.01963C24.8373 4.94427 25.3882 5.08771 25.8258 5.4184L25.8356 5.42623C26.2729 5.75725 26.5609 6.24836 26.6362 6.79162C26.7116 7.33489 26.5681 7.88584 26.2374 8.32339V8.32339Z" stroke="#74788C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.6001 24.0667V13.0667" stroke="#74788C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                ` } });
};
exports.default = IconScreener;
//# sourceMappingURL=IconScreener.js.map