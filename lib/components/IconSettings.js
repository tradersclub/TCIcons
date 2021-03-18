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
const IconSettings = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.height) !== null && _b !== void 0 ? _b : props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="settings">
    <path  fill-rule="evenodd" d="M15.293 6.293A1 1 0 0117 7v.094a2.65 2.65 0 001.601 2.423 2.65 2.65 0 002.918-.532l.008-.008.06-.06a1 1 0 011.416 0 .999.999 0 010 1.415l-.06.06-.008.009a2.651 2.651 0 00-.607 2.729c.012.09.037.18.073.264A2.65 2.65 0 0024.826 15H25a1 1 0 010 2h-.094a2.65 2.65 0 00-2.423 1.601 2.65 2.65 0 00.532 2.918l.008.008.06.06a1 1 0 010 1.416 1 1 0 01-1.415 0l-.06-.06-.009-.008a2.651 2.651 0 00-2.918-.532 2.65 2.65 0 00-1.601 2.423V25a1 1 0 01-2 0V24.887a2.65 2.65 0 00-1.705-2.415 2.651 2.651 0 00-2.894.543l-.008.008-.06.06a1 1 0 01-1.415 0h-.001a1 1 0 010-1.415l.06-.06.008-.009a2.65 2.65 0 00.532-2.918 2.65 2.65 0 00-2.423-1.601H7a1 1 0 010-2H7.113a2.65 2.65 0 002.414-1.705 2.65 2.65 0 00-.542-2.894l-.008-.008-.06-.06a1 1 0 010-1.415v-.001a1 1 0 011.415 0l.06.06.009.008a2.65 2.65 0 002.729.607 1 1 0 00.264-.073A2.65 2.65 0 0015 7.174V7a1 1 0 01.293-.707zm9.022 13.11L23.4 19l.92.394a.65.65 0 01.593-.394H25a3 3 0 000-6h-.168a.65.65 0 01-.533-.285 1.007 1.007 0 00-.064-.199.65.65 0 01.127-.714l.055-.054a2.999 2.999 0 00-.973-4.896 3 3 0 00-3.271.651l-.055.055a.65.65 0 01-.714.127l-.01-.004A.65.65 0 0119 7.088V7a3 3 0 00-6 0v.168a.65.65 0 01-.285.533 1 1 0 00-.199.064.65.65 0 01-.714-.127l-.054-.055a3 3 0 00-4.896 3.27 3 3 0 00.651.975l.055.054a.65.65 0 01.127.714l-.024.059a.65.65 0 01-.585.425H7a3 3 0 000 6h.168a.65.65 0 01.593.394l.004.01a.65.65 0 01-.127.714l-.055.055a3 3 0 003.27 4.895c.365-.151.696-.372.974-.65v-.001l.055-.055a.65.65 0 01.714-.127l.059.023a.65.65 0 01.425.586V25a3 3 0 006 0v-.168a.65.65 0 01.394-.593l.01-.004a.65.65 0 01.714.127l.055.055a2.999 2.999 0 004.244 0l-.707-.707.707.707a2.999 2.999 0 000-4.244l-.055-.055a.65.65 0 01-.127-.714zM14 16a2 2 0 114 0 2 2 0 01-4 0zm2-4a4 4 0 100 8 4 4 0 000-8z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconSettings;
//# sourceMappingURL=IconSettings.js.map