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
const IconLogOut = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <path  fill-rule="evenodd" d="M7 6c-.193 0-.43.092-.64.35-.215.262-.36.654-.36 1.094v17.112c0 .44.145.832.36 1.095.21.257.447.349.64.349h12a1 1 0 110 2H7c-.868 0-1.648-.423-2.188-1.083C4.276 26.263 4 25.411 4 24.556V7.444c0-.855.276-1.707.812-2.361C5.352 4.423 6.132 4 7 4h12a1 1 0 110 2H7zm15.707 4.293a1 1 0 10-1.414 1.414L24.586 15H15a1 1 0 100 2h9.586l-3.293 3.293a1 1 0 001.414 1.414l5-5A.997.997 0 0028 16m0-.01a.997.997 0 00-.293-.697l-5-5" clip-rule="evenodd"/>
</svg>

                ` } });
};
exports.default = IconLogOut;
//# sourceMappingURL=IconLogOut.js.map