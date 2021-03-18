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
const IconMoneySign = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.width) !== null && _b !== void 0 ? _b : props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="money / sign">
    <path  fill-rule="evenodd" d="M17 5a1 1 0 10-2 0v2h-1.4c-1.256 0-2.436.555-3.289 1.503C9.461 9.446 9 10.706 9 12s.462 2.554 1.311 3.497C11.164 16.445 12.344 17 13.6 17H15v6h-1.374a2.383 2.383 0 01-1.378-.554 2.999 2.999 0 01-.935-1.415 1 1 0 00-1.906.605c.294.926.835 1.75 1.57 2.354A4.38 4.38 0 0013.6 25H15v2a1 1 0 102 0v-2h1.4c1.256 0 2.436-.555 3.289-1.503C22.539 22.554 23 21.294 23 20s-.462-2.554-1.311-3.497C20.836 15.555 19.656 15 18.4 15H17V9h1.374c.486.028.966.215 1.378.554.42.346.75.835.935 1.415a1 1 0 001.906-.605 4.998 4.998 0 00-1.57-2.354A4.38 4.38 0 0018.4 7H17V5zm-2 4h-1.4c-.653 0-1.305.288-1.802.84-.501.557-.798 1.332-.798 2.16 0 .828.297 1.603.798 2.16.497.553 1.149.84 1.802.84H15V9zm2 8v6h1.4c.654 0 1.305-.288 1.802-.84.501-.557.798-1.332.798-2.16 0-.828-.297-1.603-.798-2.16-.497-.552-1.149-.84-1.802-.84H17z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconMoneySign;
//# sourceMappingURL=IconMoneySign.js.map