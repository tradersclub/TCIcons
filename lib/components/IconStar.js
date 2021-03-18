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
const IconStar = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.height) !== null && _b !== void 0 ? _b : props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="star">
    <path  fill-rule="evenodd" d="M16 5a1 1 0 01.905.575l2.864 6.1 6.383.981a1 1 0 01.563 1.687l-4.647 4.76 1.099 6.736a1 1 0 01-1.47 1.036L16 23.725l-5.696 3.15a1 1 0 01-1.47-1.036l1.098-6.736-4.647-4.76a1 1 0 01.563-1.687l6.383-.98 2.864-6.1A1 1 0 0116 5zm0 3.353l-2.185 4.655a1 1 0 01-.753.563l-4.988.767 3.642 3.729a1 1 0 01.271.86l-.848 5.201 4.377-2.42a1 1 0 01.968 0l4.377 2.42-.848-5.201a1 1 0 01.271-.86l3.642-3.73-4.988-.766a1 1 0 01-.753-.563L16 8.352z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconStar;
//# sourceMappingURL=IconStar.js.map