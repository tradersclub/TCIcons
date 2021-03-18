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
const IconChartUndo = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.width) !== null && _b !== void 0 ? _b : props.height}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 7.29289C12.0976 7.68342 12.0976 8.31658 11.7071 8.70711L7.41421 13L19 13C23.9706 13 28 17.0294 28 22V24C28 24.5523 27.5523 25 27 25C26.4477 25 26 24.5523 26 24V22C26 18.134 22.866 15 19 15L7.41421 15L11.7071 19.2929C12.0976 19.6834 12.0976 20.3166 11.7071 20.7071C11.3166 21.0976 10.6834 21.0976 10.2929 20.7071L4.29289 14.7071C4.10536 14.5196 4 14.2652 4 14C4 13.7348 4.10536 13.4804 4.29289 13.2929L10.2929 7.29289C10.6834 6.90237 11.3166 6.90237 11.7071 7.29289Z" />
</svg>

                ` } });
};
exports.default = IconChartUndo;
//# sourceMappingURL=IconChartUndo.js.map