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
const IconSupport = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.height) !== null && _b !== void 0 ? _b : props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="support">
    <path  fill-rule="evenodd" d="M16 6c-1.512 0-2.934.5-3.957 1.35-1.018.846-1.543 1.95-1.543 3.05V14a1 1 0 011 1v5a3 3 0 01-3 3h-1a3 3 0 01-3-3v-3a3 3 0 013-3h1v-3.6c0-1.764.845-3.408 2.265-4.588C12.18 4.637 14.065 4 16 4c1.935 0 3.82.637 5.235 1.812 1.42 1.18 2.265 2.824 2.265 4.588V14h1a3 3 0 013 3v3a3 3 0 01-3 3h-.65c-.375 1.206-1.398 2.031-2.395 2.54-1.042.533-2.254.835-3.286.928a2.3 2.3 0 11-.219-1.988c.8-.067 1.783-.305 2.595-.72.717-.367 1.155-.786 1.344-1.229A3 3 0 0120.5 20v-5a1 1 0 011-1v-3.6c0-1.1-.525-2.204-1.543-3.05C18.934 6.5 17.512 6 16 6zM9.5 16v4a1 1 0 01-1 1h-1a1 1 0 01-1-1v-3a1 1 0 011-1h2zm13 4v-4h2a1 1 0 011 1v3a1 1 0 01-1 1h-1a1 1 0 01-1-1zM16 25a.7.7 0 100 1.4.7.7 0 000-1.4z" class="Mask" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconSupport;
//# sourceMappingURL=IconSupport.js.map