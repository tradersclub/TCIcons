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
const IconSpeakerphone = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="speakerphone">
    <path  fill-rule="evenodd" d="M23.685 4.064a1 1 0 01.648.936v3.998a4.667 4.667 0 010 9.117v3.997a1 1 0 01-1.753.658c-1.172-1.342-3.608-2.512-6.803-3.035V24.851a3.151 3.151 0 01-6.118 1.06l-.002-.008-2.487-7.122a5.887 5.887 0 01-1.007-9.785 5.89 5.89 0 013.725-1.329h2.24c.873 0 1.723-.048 2.54-.138 3.737-.413 6.607-1.694 7.912-3.187a1 1 0 011.105-.278zM9.517 19.434l2.027 5.806a1.15 1.15 0 002.233-.39v-5.347a23.51 23.51 0 00-1.65-.058H9.89m5.887-1.734c2.552.381 4.85 1.163 6.556 2.263V7.139c-1.706 1.1-4.005 1.881-6.556 2.262v8.31zm-2-8.097v7.884a25.543 25.543 0 00-1.65-.053H9.888c-.52.001-1.038-.104-1.52-.309m5.41-7.522c-.54.035-1.09.053-1.65.053H9.89a3.89 3.89 0 00-1.521 7.47m15.965-1.108a2.665 2.665 0 00.886-4.359 2.665 2.665 0 00-.886-.586v4.945z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconSpeakerphone;
//# sourceMappingURL=IconSpeakerphone.js.map