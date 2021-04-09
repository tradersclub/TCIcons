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
const IconArrowLargeUp = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${props.size}" height="${props.size}" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M27.6757 22.7371C27.2686 23.1103 26.636 23.0828 26.2628 22.6757L16 11.4799L5.73715 22.6757C5.36395 23.0828 4.73139 23.1103 4.32427 22.7371C3.91715 22.364 3.88965 21.7314 4.26284 21.3243L15.2628 9.32427C15.4523 9.11764 15.7197 8.99999 16 8.99999C16.2803 8.99999 16.5477 9.11764 16.7372 9.32427L27.7371 21.3243C28.1103 21.7314 28.0828 22.364 27.6757 22.7371Z"/></g></svg>
                ` } });
};
exports.default = IconArrowLargeUp;
//# sourceMappingURL=IconArrowLargeUp.js.map