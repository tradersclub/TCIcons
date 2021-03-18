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
const IconArrowLargeDown = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.width) !== null && _b !== void 0 ? _b : props.height}" viewBox="0 0 32 29" xmlns="http://www.w3.org/2000/svg"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M4.32428 9.26285C4.7314 8.88966 5.36397 8.91716 5.73716 9.32428L16 20.5201L26.2629 9.32428C26.636 8.91716 27.2686 8.88966 27.6757 9.26285C28.0829 9.63604 28.1104 10.2686 27.7372 10.6757L16.7372 22.6757C16.5477 22.8824 16.2803 23 16 23C15.7197 23 15.4523 22.8824 15.2628 22.6757L4.26285 10.6757C3.88966 10.2686 3.91716 9.63604 4.32428 9.26285Z"/></g></svg>
                ` } });
};
exports.default = IconArrowLargeDown;
//# sourceMappingURL=IconArrowLargeDown.js.map