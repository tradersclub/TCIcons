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
const IconRevert = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="revert">
    <path  fill-rule="evenodd" d="M16.724 4.287a1 1 0 01.011 1.414l-2.056 2.09a9.86 9.86 0 014.427.414 10.03 10.03 0 015.507 4.49 10.277 10.277 0 011.211 7.05 10.173 10.173 0 01-3.678 6.112 9.9 9.9 0 01-6.754 2.124 9.935 9.935 0 01-6.448-2.938 10.216 10.216 0 01-2.922-6.517 10.298 10.298 0 01.024-1.645 1 1 0 111.99.189 8.3 8.3 0 00-.018 1.325 8.216 8.216 0 002.348 5.241 7.935 7.935 0 005.15 2.35 7.9 7.9 0 005.39-1.698 8.173 8.173 0 002.952-4.91 8.277 8.277 0 00-.974-5.678 8.03 8.03 0 00-4.407-3.597 7.86 7.86 0 00-4.194-.21l2.452 2.492a1 1 0 11-1.425 1.403l-3.564-3.623a1.011 1.011 0 01-.033-.033l-.381-.388a1 1 0 010-1.402l3.977-4.043a1 1 0 011.415-.012z" class="Mask" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconRevert;
//# sourceMappingURL=IconRevert.js.map