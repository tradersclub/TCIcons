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
const IconEditAtSign = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="at-sign">
    <path  fill-rule="evenodd" d="M19.475 4.514a12 12 0 101.192 22.541 1 1 0 00-.778-1.842 10 10 0 116.111-9.2v1.835a2.056 2.056 0 01-3.51 1.453c-.354-.355-.49-.709-.49-1.301v-2a6 6 0 10-1.505 3.974c.152.257.344.504.582.741A4.056 4.056 0 0028 17.848v-1.833h-1 1a12 12 0 00-8.525-11.5zM20 16a4 4 0 10-8 0 4 4 0 008 0z" class="Shape" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconEditAtSign;
//# sourceMappingURL=IconEditAtSign.js.map