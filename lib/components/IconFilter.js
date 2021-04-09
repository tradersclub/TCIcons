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
const IconFilter = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="filter / default">
    <path  fill-rule="evenodd" d="M4.093 5.58A1 1 0 015 5h22a1 1 0 01.764 1.646L19.2 16.772V26a1 1 0 01-1.447.894l-4.4-2.2a1 1 0 01-.553-.894v-7.028L4.236 6.646a1 1 0 01-.143-1.067zM7.155 7l7.409 8.76a1 1 0 01.236.646v6.776l2.4 1.2v-7.976a1 1 0 01.236-.646L24.845 7H7.155z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconFilter;
//# sourceMappingURL=IconFilter.js.map