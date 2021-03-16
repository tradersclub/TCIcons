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
const IconChartBoard = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="chart-board">
    <path  fill-rule="evenodd" d="M17 4a1 1 0 10-2 0v3H6a1 1 0 00-1 1v14a1 1 0 001 1h5.523l-1.397 2.514a1 1 0 001.748.972L13.811 23h4.378l1.937 3.486a1 1 0 001.748-.972L20.477 23H26a1 1 0 001-1V8a1 1 0 00-1-1h-9V4zm-3.796 17H25V9H7v12h6.204zM18 12a1 1 0 001 1h.586L17 15.586l-2.293-2.293a1 1 0 00-1.414 0l-4 4a1 1 0 101.414 1.414L14 15.414l2.293 2.293a1 1 0 001.414 0L21 14.414V15a1 1 0 102 0v-3a1 1 0 00-1-1h-3a1 1 0 00-1 1z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconChartBoard;
//# sourceMappingURL=IconChartBoard.js.map