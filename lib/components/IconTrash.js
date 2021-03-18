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
const IconTrash = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.width) !== null && _b !== void 0 ? _b : props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="trash">
    <path  fill-rule="evenodd" d="M13.293 6.293A1 1 0 0114 6h4a1 1 0 011 1v1h-6V7a1 1 0 01.293-.707zM11 8V7a3 3 0 013-3h4a3 3 0 013 3v1h5a1 1 0 110 2h-2v15a3 3 0 01-3 3H11a3 3 0 01-3-3V10H6a1 1 0 010-2h5zm-1 2v15a1 1 0 001 1h10a1 1 0 001-1V10H10zm4 3a1 1 0 011 1v8a1 1 0 11-2 0v-8a1 1 0 011-1zm5 9v-8a1 1 0 10-2 0v8a1 1 0 102 0z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconTrash;
//# sourceMappingURL=IconTrash.js.map