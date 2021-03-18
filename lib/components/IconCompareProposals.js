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
const IconCompareProposals = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.width) !== null && _b !== void 0 ? _b : props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="compare-proposals">
    <path  fill-rule="evenodd" d="M5 5a1 1 0 00-1 1v20a1 1 0 001 1h22a1 1 0 001-1V6a1 1 0 00-1-1H5zm1 20V7h9v18H6zm11 0V7h9v18h-9zM8 10a1 1 0 011-1h3a1 1 0 110 2H9a1 1 0 01-1-1zm0 4a1 1 0 011-1h1a1 1 0 110 2H9a1 1 0 01-1-1zm0 4a1 1 0 011-1h3a1 1 0 110 2H9a1 1 0 01-1-1zm0 4a1 1 0 011-1h1a1 1 0 110 2H9a1 1 0 01-1-1zm11-12a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1zm0 4a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm0 4a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1zm0 4a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z" class="Mask" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconCompareProposals;
//# sourceMappingURL=IconCompareProposals.js.map