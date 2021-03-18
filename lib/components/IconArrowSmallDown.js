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
const IconArrowSmallDown = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.height) !== null && _b !== void 0 ? _b : props.size}" viewBox="0 0 32 29" xmlns="http://www.w3.org/2000/svg"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M9.29289 12.2929C9.68342 11.9024 10.3166 11.9024 10.7071 12.2929L16 17.5858L21.2929 12.2929C21.6834 11.9024 22.3166 11.9024 22.7071 12.2929C23.0976 12.6834 23.0976 13.3166 22.7071 13.7071L16.7071 19.7071C16.5196 19.8946 16.2652 20 16 20C15.7348 20 15.4804 19.8946 15.2929 19.7071L9.29289 13.7071C8.90237 13.3166 8.90237 12.6834 9.29289 12.2929Z"/></g></svg>
                ` } });
};
exports.default = IconArrowSmallDown;
//# sourceMappingURL=IconArrowSmallDown.js.map