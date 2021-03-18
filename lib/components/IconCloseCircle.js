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
const IconCloseCircle = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.width) !== null && _b !== void 0 ? _b : props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="close-circle">
    <path  fill-rule="evenodd" d="M16 6C10.477 6 6 10.477 6 16c0 5.524 4.477 10.001 10 10.001 5.524 0 10.001-4.477 10.001-10 0-5.524-4.477-10.001-10-10.001zM4 16C4 9.373 9.373 4 16 4c6.628 0 12.001 5.373 12.001 12 0 6.628-5.373 12.001-12 12.001-6.628 0-12.001-5.373-12.001-12zm16.007-4.007a1 1 0 010 1.414L17.414 16l2.593 2.593a1 1 0 01-1.414 1.414L16 17.414l-2.593 2.593a1 1 0 01-1.414-1.414L14.586 16l-2.593-2.593a1 1 0 011.414-1.414L16 14.586l2.593-2.593a1 1 0 011.414 0z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconCloseCircle;
//# sourceMappingURL=IconCloseCircle.js.map