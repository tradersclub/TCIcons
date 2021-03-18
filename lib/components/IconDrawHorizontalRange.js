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
const IconDrawHorizontalRange = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.width) !== null && _b !== void 0 ? _b : props.height}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 17C6 15.8954 6.89543 15 8 15C9.10457 15 10 15.8954 10 17C10 18.1046 9.10457 19 8 19C6.89543 19 6 18.1046 6 17ZM8 13C5.79086 13 4 14.7909 4 17C4 19.2091 5.79086 21 8 21C9.86384 21 11.4299 19.7252 11.874 18H27C27.5523 18 28 17.5523 28 17C28 16.4477 27.5523 16 27 16H11.874C11.4299 14.2748 9.86384 13 8 13Z" />
</svg>

                ` } });
};
exports.default = IconDrawHorizontalRange;
//# sourceMappingURL=IconDrawHorizontalRange.js.map