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
const IconDiretorio = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="diretÃ³rio">
    <path  fill-rule="evenodd" d="M16 6a.5.5 0 100-1 .5.5 0 000 1zm1.5-.5c0 .208-.042.406-.119.586C22.804 6.766 27 11.393 27 17c0 6.075-4.925 11-11 11S5 23.075 5 17c0-5.607 4.196-10.235 9.619-10.914A1.5 1.5 0 1117.5 5.5zM16 8a9 9 0 100 18 9 9 0 000-18zm4.24 5.805a.8.8 0 00-1.045-1.045l-8.5 3.5a.8.8 0 00.111 1.516l3.534.884.884 3.534a.8.8 0 001.516.11l3.5-8.5zm-5.046 3.419l-1.64-.41 4.475-1.843-1.843 4.476-.41-1.641a.8.8 0 00-.582-.582z" class="Mask" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconDiretorio;
//# sourceMappingURL=IconDiretorio.js.map