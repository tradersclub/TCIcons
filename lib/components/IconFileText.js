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
const IconFileText = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.width) !== null && _b !== void 0 ? _b : props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <path  fill-rule="evenodd" d="M9.25 6H17v6a1 1 0 001 1h6v11.8c0 .31-.126.614-.358.84-.233.228-.553.36-.892.36H9.25c-.339 0-.66-.132-.892-.36A1.175 1.175 0 018 24.8V7.2c0-.31.126-.614.358-.84.233-.228.553-.36.892-.36zM26 24.8V11.6a1 1 0 00-.3-.715l-6.75-6.6a1 1 0 00-.7-.285h-9c-.855 0-1.679.332-2.29.93A3.175 3.175 0 006 7.2v17.6c0 .856.348 1.672.96 2.27.611.598 1.435.93 2.29.93h13.5c.855 0 1.679-.332 2.29-.93.612-.598.96-1.414.96-2.27zM19 7.414V11h3.586L19 7.414zM12 17a1 1 0 100 2h8a1 1 0 100-2h-8zm-1 5a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1zm1-9a1 1 0 100 2h2a1 1 0 100-2h-2z" clip-rule="evenodd"/>
</svg>

                ` } });
};
exports.default = IconFileText;
//# sourceMappingURL=IconFileText.js.map