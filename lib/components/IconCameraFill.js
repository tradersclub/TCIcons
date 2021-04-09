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
const IconCameraFill = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="camera-fill">
    <path  fill-rule="evenodd" d="M12.168 6.445A1 1 0 0113 6h6a1 1 0 01.832.445L21.535 9H25a3 3 0 013 3v11a3 3 0 01-3 3H7a3 3 0 01-3-3V12a3 3 0 013-3h3.465l1.703-2.555zM12 17a4 4 0 118 0 4 4 0 01-8 0zm4-6a6 6 0 100 12 6 6 0 000-12z" class="Subtract" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconCameraFill;
//# sourceMappingURL=IconCameraFill.js.map