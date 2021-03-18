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
const IconIndicator = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.width) !== null && _b !== void 0 ? _b : props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="indicator">
    <path  fill-rule="evenodd" d="M6 6a1 1 0 00-2 0v20a1 1 0 001 1h22a1 1 0 100-2H6V6zm11 4a1 1 0 10-2 0v12a1 1 0 102 0V10zm-5 4a1 1 0 10-2 0v8a1 1 0 102 0v-8zm9 3a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconIndicator;
//# sourceMappingURL=IconIndicator.js.map