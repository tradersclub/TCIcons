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
const IconLocked = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.width) !== null && _b !== void 0 ? _b : props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <path  fill-rule="evenodd" d="M13.172 7.172A4 4 0 0120 10v3h-8v-3a4 4 0 011.172-2.828zM10 13v-3a6 6 0 1112 0v3h1c1.807 0 3 1.67 3 3.364v8.272C26 26.331 24.807 28 23 28H9c-1.807 0-3-1.67-3-3.364v-8.272C6 14.669 7.193 13 9 13h1zm11 2H9c-.402 0-1 .447-1 1.364v8.272C8 25.553 8.598 26 9 26h14c.402 0 1-.447 1-1.364v-8.272c0-.917-.598-1.364-1-1.364h-2z" clip-rule="evenodd"/>
</svg>

                ` } });
};
exports.default = IconLocked;
//# sourceMappingURL=IconLocked.js.map