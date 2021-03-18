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
const IconEdit = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.height) !== null && _b !== void 0 ? _b : props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <path  fill-rule="evenodd" d="M21.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-14 14-3 3A1 1 0 0110 28H5a1 1 0 01-1-1v-5a1 1 0 01.293-.707l3-3 14-14zM9.414 19L13 22.586 25.586 10 22 6.414 9.414 19zm2.172 5L8 20.414l-2 2V26h3.586l2-2z" clip-rule="evenodd"/>
</svg>

                ` } });
};
exports.default = IconEdit;
//# sourceMappingURL=IconEdit.js.map