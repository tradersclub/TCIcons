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
const IconWealth = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.width) !== null && _b !== void 0 ? _b : props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <path  fill-rule="evenodd" d="M21.21 5c-.898 0-1.786.184-2.613.541a6.779 6.779 0 00-2.203 1.535l-.394.41-.394-.41A6.673 6.673 0 0010.79 5a6.673 6.673 0 00-4.816 2.075A7.167 7.167 0 004 12.036c0 1.852.706 3.637 1.974 4.959l1.116 1.163 8.188 8.534a1 1 0 001.443 0l8.189-8.534 1.115-1.163a7.057 7.057 0 001.463-2.28 7.256 7.256 0 000-5.359 7.057 7.057 0 00-1.462-2.28 6.778 6.778 0 00-2.204-1.535A6.586 6.586 0 0021.21 5zm3.372 3.46l.72-.69-.72.69c.447.466.804 1.021 1.048 1.635a5.257 5.257 0 010 3.88 5.057 5.057 0 01-1.048 1.635l-1.116 1.163L16 24.556l-7.467-7.783-1.115-1.163A5.167 5.167 0 016 12.035c0-1.348.514-2.633 1.418-3.575A4.674 4.674 0 0110.79 7c1.257 0 2.47.52 3.373 1.46l1.115 1.163a1 1 0 001.443 0l1.116-1.163a4.78 4.78 0 011.553-1.082 4.585 4.585 0 013.639 0c.578.25 1.106.616 1.553 1.082z" clip-rule="evenodd"/>
</svg>

                ` } });
};
exports.default = IconWealth;
//# sourceMappingURL=IconWealth.js.map