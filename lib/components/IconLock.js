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
const IconLock = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.width) !== null && _b !== void 0 ? _b : props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <path  fill-rule="evenodd" d="M19.172 7.172A4 4 0 0126 10v2a1 1 0 102 0v-2a6 6 0 10-12 0v3H7c-1.807 0-3 1.67-3 3.364v8.272C4 26.331 5.193 28 7 28h12c1.807 0 3-1.67 3-3.364v-8.272C22 14.669 20.807 13 19 13h-1v-3a4 4 0 011.172-2.828zM17 15H7c-.402 0-1 .447-1 1.364v8.272C6 25.553 6.598 26 7 26h12c.402 0 1-.447 1-1.364v-8.272c0-.917-.598-1.364-1-1.364h-2z" clip-rule="evenodd"/>
</svg>

                ` } });
};
exports.default = IconLock;
//# sourceMappingURL=IconLock.js.map