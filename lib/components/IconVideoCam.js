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
const IconVideoCam = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${props.size}" height="${props.size}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 11C4 9.34315 5.34315 8 7 8H19C20.6569 8 22 9.34315 22 11V12.382L25.1056 10.8292C26.4354 10.1643 28 11.1313 28 12.618V19.382C28 20.8687 26.4354 21.8357 25.1056 21.1708L22 19.618V21C22 22.6569 20.6569 24 19 24H7C5.34315 24 4 22.6569 4 21V11ZM26 19.382L22 17.382V14.618L26 12.618V19.382ZM20 11V14.618V17.382V21C20 21.5523 19.5523 22 19 22H7C6.44772 22 6 21.5523 6 21V11C6 10.4477 6.44772 10 7 10H19C19.5523 10 20 10.4477 20 11ZM13 18.5C14.3807 18.5 15.5 17.3807 15.5 16C15.5 14.6193 14.3807 13.5 13 13.5C11.6193 13.5 10.5 14.6193 10.5 16C10.5 17.3807 11.6193 18.5 13 18.5Z" />
</svg>

                ` } });
};
exports.default = IconVideoCam;
//# sourceMappingURL=IconVideoCam.js.map