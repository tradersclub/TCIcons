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
const IconBookmark = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.height) !== null && _b !== void 0 ? _b : props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="bookmark">
    <path  fill-rule="evenodd" d="M10.286 6c-.319 0-.639.135-.886.399-.25.266-.4.641-.4 1.045v17.534l6.393-4.884a1 1 0 011.214 0L23 24.978V7.444c0-.404-.15-.779-.4-1.045A1.214 1.214 0 0021.714 6H10.286zm-2.347-.967A3.213 3.213 0 0110.286 4h11.428c.894 0 1.737.38 2.347 1.033.608.65.939 1.519.939 2.411V27a1 1 0 01-1.607.795L16 22.147l-7.393 5.648A1 1 0 017 27V7.444c0-.892.331-1.76.939-2.411z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconBookmark;
//# sourceMappingURL=IconBookmark.js.map