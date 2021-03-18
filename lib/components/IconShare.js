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
const IconShare = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.height) !== null && _b !== void 0 ? _b : props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <path  fill-rule="evenodd" d="M18.614 6.21A1 1 0 0017 7v2.56c-2.012.226-4.888 1.114-7.426 3.088C6.526 15.018 4 18.931 4 25a1 1 0 001.832.555c1.966-2.95 3.61-4.672 5.408-5.683 1.575-.886 3.357-1.276 5.76-1.356V21a1 1 0 001.614.79l9-7a1 1 0 000-1.58l-9-7zM18 11.5a1 1 0 001-1V9.045L25.371 14 19 18.955V17.5a1 1 0 00-1-1c-3.077 0-5.526.383-7.74 1.628-1.4.788-2.66 1.895-3.916 3.38.72-3.434 2.486-5.748 4.457-7.281C13.43 12.183 16.46 11.5 18 11.5z" clip-rule="evenodd"/>
</svg>

                ` } });
};
exports.default = IconShare;
//# sourceMappingURL=IconShare.js.map