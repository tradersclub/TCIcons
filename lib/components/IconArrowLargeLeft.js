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
const IconArrowLargeLeft = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.height) !== null && _b !== void 0 ? _b : props.size}" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M22.7371 4.32428C23.1103 4.7314 23.0828 5.36397 22.6757 5.73716L11.4799 16L22.6757 26.2629C23.0828 26.636 23.1103 27.2686 22.7371 27.6757C22.364 28.0829 21.7314 28.1104 21.3243 27.7372L9.32427 16.7372C9.11764 16.5477 8.99999 16.2803 8.99999 16C8.99999 15.7197 9.11764 15.4523 9.32427 15.2628L21.3243 4.26285C21.7314 3.88966 22.364 3.91716 22.7371 4.32428Z"/></g></svg>
                ` } });
};
exports.default = IconArrowLargeLeft;
//# sourceMappingURL=IconArrowLargeLeft.js.map