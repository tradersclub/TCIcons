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
const IconVideo = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.width) !== null && _b !== void 0 ? _b : props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="video">
    <path  fill-rule="evenodd" d="M4 8a3 3 0 013-3h18a3 3 0 013 3v12a3 3 0 01-3 3H7a3 3 0 01-3-3V8zm3-1a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V8a1 1 0 00-1-1H7zm3 19a1 1 0 011-1h9a1 1 0 110 2h-9a1 1 0 01-1-1zm4.514-15.857A1 1 0 0013 11v6a1 1 0 001.514.858l5-3a1 1 0 000-1.716l-5-3zM17.056 14L15 15.234v-2.468L17.056 14z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconVideo;
//# sourceMappingURL=IconVideo.js.map