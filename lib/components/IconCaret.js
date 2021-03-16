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
const IconCaret = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="caret">
    <path  d="M14.962 19.635l-6.618-5.862c-.78-.69-.146-1.773 1.04-1.773h13.235c.265 0 .525.059.748.17.223.111.4.27.51.457.11.188.147.395.108.599a.984.984 0 01-.327.548l-6.618 5.86a1.41 1.41 0 01-.468.27c-.18.063-.374.096-.571.096-.197 0-.391-.033-.57-.096a1.41 1.41 0 01-.469-.27v.001z" class="Vector"/>
  </g>
</svg>

                ` } });
};
exports.default = IconCaret;
//# sourceMappingURL=IconCaret.js.map