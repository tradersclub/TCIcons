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
const IconCompany = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.height) !== null && _b !== void 0 ? _b : props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="company">
    <path  fill-rule="evenodd" d="M8 4H7v21a3 3 0 003 3h12a3 3 0 003-3V7a3 3 0 00-3-3H8zm1 10v11a1 1 0 001 1h12a1 1 0 001-1V7a1 1 0 00-1-1H9v6h5v6h-2v-4H9zm3.455-4.545h-1.091V7.273h2.181v1.09h1.091v2.183h-2.181V9.455zm4.363-1.091H19v2.181h-2.182V8.364z" class="Mask" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconCompany;
//# sourceMappingURL=IconCompany.js.map