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
const IconArrowLargeRight = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.height) !== null && _b !== void 0 ? _b : props.size}" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M9.26285 4.32428C8.88966 4.7314 8.91716 5.36397 9.32428 5.73716L20.5201 16L9.32428 26.2629C8.91716 26.636 8.88966 27.2686 9.26285 27.6757C9.63605 28.0829 10.2686 28.1104 10.6757 27.7372L22.6757 16.7372C22.8824 16.5477 23 16.2803 23 16C23 15.7197 22.8824 15.4523 22.6757 15.2628L10.6757 4.26285C10.2686 3.88966 9.63604 3.91716 9.26285 4.32428Z"/></g></svg>
                ` } });
};
exports.default = IconArrowLargeRight;
//# sourceMappingURL=IconArrowLargeRight.js.map