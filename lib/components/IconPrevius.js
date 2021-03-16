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
const IconPrevius = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${props.size}" height="${props.size}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 21C21 21.5523 21.4477 22 22 22C22.5523 22 23 21.5523 23 21V11C23 10.4477 22.5523 10 22 10C21.4477 10 21 10.4477 21 11V21ZM10.53 10.152C10.2217 9.95933 9.83319 9.94913 9.51523 10.1254C9.19728 10.3016 9 10.6365 9 11V21C9 21.3635 9.19728 21.6984 9.51523 21.8746C9.83319 22.0509 10.2217 22.0407 10.53 21.848L18.53 16.848C18.8224 16.6653 19 16.3448 19 16C19 15.6552 18.8224 15.3347 18.53 15.152L10.53 10.152ZM11 19.1958V12.8042L16.1132 16L11 19.1958Z"/>
</svg>

                ` } });
};
exports.default = IconPrevius;
//# sourceMappingURL=IconPrevius.js.map