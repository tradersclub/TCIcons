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
const IconEdit2 = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.width) !== null && _b !== void 0 ? _b : props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="edit-2">
    <path  fill-rule="evenodd" d="M23.117 7.323a1.103 1.103 0 111.56 1.56l-9.223 9.223-2.08.52.52-2.08 9.223-9.223zM23.897 5c-.823 0-1.612.327-2.194.909l-9.419 9.418a.999.999 0 00-.263.465l-.991 3.966a1 1 0 001.213 1.212l3.965-.991a.999.999 0 00.465-.263l9.418-9.419A3.103 3.103 0 0023.897 5zM8 7a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3v-7a1 1 0 10-2 0v7a1 1 0 01-1 1H8a1 1 0 01-1-1V10a1 1 0 011-1h7a1 1 0 100-2H8z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconEdit2;
//# sourceMappingURL=IconEdit2.js.map