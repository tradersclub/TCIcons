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
const IconPaymentMastercard = (props) => {
    var _a, _b, _c, _d;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.width) !== null && _b !== void 0 ? _b : props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="payment-mastercard">
    <g class="Group 83">
      <rect width="${(_c = props.width) !== null && _c !== void 0 ? _c : props.size}" height="${(_d = props.width) !== null && _d !== void 0 ? _d : props.height}" x="5" y="8"  class="Rectangle 64" rx="2"/>
      <circle cx="14" cy="16" r="5"  class="Ellipse 39"/>
      <circle cx="20" cy="16" r="5"  class="Ellipse 40"/>
      <path  d="M17 20a4.993 4.993 0 002-4 4.993 4.993 0 00-2-4 4.993 4.993 0 00-2 4c0 1.636.786 3.088 2 4z" class="Intersect"/>
    </g>
  </g>
</svg>

                ` } });
};
exports.default = IconPaymentMastercard;
//# sourceMappingURL=IconPaymentMastercard.js.map