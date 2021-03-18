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
const IconDashBtg = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.width) !== null && _b !== void 0 ? _b : props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="dash btg">
    <path  fill-rule="evenodd" d="M9.8 5.6a2.2 2.2 0 00-2.2 2.2v16.4a2.2 2.2 0 002.2 2.2h12.4a2.2 2.2 0 002.2-2.2V7.8a2.2 2.2 0 00-2.2-2.2h-1.4v1A2.8 2.8 0 0118 9.4h-4a2.8 2.8 0 01-2.8-2.8v-1H9.8zM6 7.8A3.8 3.8 0 019.8 4h12.4A3.8 3.8 0 0126 7.8v16.4a3.8 3.8 0 01-3.8 3.8H9.8A3.8 3.8 0 016 24.2V7.8zm6.8-2v.8A1.2 1.2 0 0014 7.8h4a1.2 1.2 0 001.2-1.2v-.8h-6.4zM19 23a1 1 0 102 0v-8a1 1 0 10-2 0v8zm-3 1a1 1 0 01-1-1v-5a1 1 0 112 0v5a1 1 0 01-1 1zm-5-1a1 1 0 102 0v-2a1 1 0 10-2 0v2z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconDashBtg;
//# sourceMappingURL=IconDashBtg.js.map