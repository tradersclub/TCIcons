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
const IconSliders = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <path  fill-rule="evenodd" d="M11 7a1 1 0 100 2 1 1 0 000-2zM5 9h3.17a3.001 3.001 0 005.664-.014c.054.01.11.014.166.014h13a1 1 0 100-2H14c-.056 0-.112.005-.166.014A3.001 3.001 0 008.171 7H5a1 1 0 000 2zm8.83 16H27a1 1 0 100-2H13.83a3.001 3.001 0 00-5.66 0H5a1 1 0 100 2h3.17a3.001 3.001 0 005.66 0zM12 24a1 1 0 10-2 0 1 1 0 002 0zm11.834-7.014a3.001 3.001 0 01-5.663.014H5a1 1 0 110-2h13.17a3.001 3.001 0 015.664.014c.054-.01.11-.014.166-.014h3a1 1 0 110 2h-3c-.056 0-.112-.005-.166-.014zM20 16a1 1 0 112 0 1 1 0 01-2 0z" clip-rule="evenodd"/>
</svg>

                ` } });
};
exports.default = IconSliders;
//# sourceMappingURL=IconSliders.js.map