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
const IconUsers = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.height) !== null && _b !== void 0 ? _b : props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="users">
    <path  fill-rule="evenodd" d="M22 11a3 3 0 10-6 0 3 3 0 006 0zm-3-5a5 5 0 110 10 5 5 0 010-10zm4 12a5 5 0 015 5v2a1 1 0 11-2 0v-2a3 3 0 00-3-3h-8a3 3 0 00-3 3v2a1 1 0 11-2 0v-2a5 5 0 015-5h8zm-14.032.88a1 1 0 00-1.218-.718A5 5 0 004 22.999V25a1 1 0 102 0v-2a3 3 0 012.25-2.902 1 1 0 00.718-1.218zm2.784-12.719a1 1 0 11.496 1.938 3 3 0 000 5.812 1 1 0 11-.496 1.938 5 5 0 010-9.688z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconUsers;
//# sourceMappingURL=IconUsers.js.map