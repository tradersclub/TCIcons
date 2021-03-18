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
const IconEmojiAdd = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.width) !== null && _b !== void 0 ? _b : props.height}" fill="${props.color}" viewBox="0 0 32 29">
  <path  fill-rule="evenodd" d="M15 7a9 9 0 108.956 9.901 1 1 0 111.99.198C25.394 22.659 20.704 27 15 27 8.925 27 4 22.075 4 16S8.925 5 15 5c.752 0 1.488.076 2.199.22a1 1 0 11-.398 1.96A9.046 9.046 0 0015 7zm8-2a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3h-3a1 1 0 110-2h3V6a1 1 0 011-1zM11.7 15.5a1 1 0 100-2 1 1 0 000 2zm-1.514 2.642a1 1 0 011.37.34l.005.009.036.055a5.293 5.293 0 00.853.95c.607.527 1.445 1.004 2.5 1.004s1.893-.477 2.5-1.005a5.305 5.305 0 00.853-.95l.036-.054.006-.01a1 1 0 011.713 1.034L19.2 19l.857.515v.001l-.001.002-.003.004-.007.01-.02.033-.068.104a7.296 7.296 0 01-1.195 1.336c-.831.722-2.118 1.495-3.813 1.495-1.695 0-2.982-.773-3.812-1.495a7.29 7.29 0 01-1.196-1.336 4.032 4.032 0 01-.068-.104l-.02-.032-.007-.011-.003-.004v-.002h-.001L10.7 19l-.858.515a1 1 0 01.343-1.373zM19.2 14.5a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"/>
</svg>

                ` } });
};
exports.default = IconEmojiAdd;
//# sourceMappingURL=IconEmojiAdd.js.map