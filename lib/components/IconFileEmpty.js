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
const IconFileEmpty = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.height) !== null && _b !== void 0 ? _b : props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <path  fill-rule="evenodd" d="M16 6H9.25c-.339 0-.66.132-.892.36-.232.226-.358.53-.358.84v17.6c0 .31.126.614.358.84.233.228.553.36.892.36h13.5c.339 0 .66-.132.892-.36.232-.226.358-.53.358-.84V14h-7a1 1 0 01-1-1V6zm10 7.008V24.8c0 .856-.348 1.672-.96 2.27a3.276 3.276 0 01-2.29.93H9.25a3.276 3.276 0 01-2.29-.93A3.176 3.176 0 016 24.8V7.2c0-.856.348-1.672.96-2.27A3.276 3.276 0 019.25 4h7.875a1 1 0 01.7.285l7.874 7.7A1 1 0 0126 12.7v.308zM18 12V7.414L22.586 12H18z" clip-rule="evenodd"/>
</svg>

                ` } });
};
exports.default = IconFileEmpty;
//# sourceMappingURL=IconFileEmpty.js.map