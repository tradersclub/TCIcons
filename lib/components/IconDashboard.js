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
const IconDashboard = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.height) !== null && _b !== void 0 ? _b : props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="dashboard">
    <path  fill-rule="evenodd" d="M22 5a1 1 0 00-1 1v19h-2V14a1 1 0 00-1-1h-4a1 1 0 00-1 1v11h-2v-5a1 1 0 00-1-1H6a1 1 0 00-1 1v5a1 1 0 100 2h22a1 1 0 100-2V6a1 1 0 00-1-1h-4zm3 20V7h-2v18h2zM15 15h2v10h-2V15zM9 25v-4H7v4h2z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconDashboard;
//# sourceMappingURL=IconDashboard.js.map