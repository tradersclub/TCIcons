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
const IconBag = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.width) !== null && _b !== void 0 ? _b : props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="bag-default">
    <path  fill-rule="evenodd" d="M9.5 4a1 1 0 00-.707.293l-3.5 3.5A1 1 0 005 8.5V25a3 3 0 003 3h16a3 3 0 003-3V8.5a1 1 0 00-.293-.707l-3.5-3.5A1 1 0 0022.5 4h-13zM8.414 7.5l1.5-1.5h12.172l1.5 1.5H8.414zM7 9.5h18V25a1 1 0 01-1 1H8a1 1 0 01-1-1V9.5zm5.5 3.5a1 1 0 10-2 0 5.5 5.5 0 0011.001 0 1 1 0 10-2 0 3.5 3.5 0 11-7.001 0z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconBag;
//# sourceMappingURL=IconBag.js.map