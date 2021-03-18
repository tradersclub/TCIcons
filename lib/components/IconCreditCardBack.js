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
const IconCreditCardBack = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.height) !== null && _b !== void 0 ? _b : props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="credit-card-back">
    <path  fill-rule="evenodd" d="M4 10a3 3 0 013-3h18a3 3 0 013 3v12a3 3 0 01-3 3H7a3 3 0 01-3-3V10zm3-1a1 1 0 00-1 1v8h20v-8a1 1 0 00-1-1H7zM6 22v-2h20v2a1 1 0 01-1 1H7a1 1 0 01-1-1zm13-11.5a1.5 1.5 0 000 3h3a1.5 1.5 0 000-3h-3z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconCreditCardBack;
//# sourceMappingURL=IconCreditCardBack.js.map