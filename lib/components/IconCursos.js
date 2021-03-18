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
const IconCursos = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.width) !== null && _b !== void 0 ? _b : props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="cursos">
    <path  fill-rule="evenodd" d="M15.586 7.09a1 1 0 01.828 0l11 5a1 1 0 010 1.82l-1.5.682A.999.999 0 0126 15v6a1 1 0 11-2 0v-5.198l-.503-.111-.5.227c.002.027.003.054.003.082v5.143c0 1.354-1.097 2.337-2.327 2.923C19.38 24.681 17.7 25 16 25c-1.7 0-3.381-.319-4.673-.934C10.097 23.48 9 22.497 9 21.143V16c0-.028.001-.055.003-.082L4.586 13.91a1 1 0 010-1.82l11-5zM11 16.826v4.317c0 .161.168.632 1.187 1.117.96.457 2.33.74 3.813.74 1.482 0 2.854-.283 3.813-.74 1.02-.485 1.187-.956 1.187-1.117v-4.317l-4.586 2.084a1 1 0 01-.828 0L11 16.826zM24.583 13l-1.304.593-7.062-1.57a1 1 0 10-.434 1.953l4.468.993L16 16.901 7.417 13 16 9.098 24.583 13z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconCursos;
//# sourceMappingURL=IconCursos.js.map