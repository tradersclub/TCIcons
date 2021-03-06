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
const IconCloudUpload = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="cloud-upload">
    <path  fill-rule="evenodd" d="M17.157 9.086a6.397 6.397 0 00-2.06-.005c-.68.11-1.321.328-1.885.636-1.143.624-1.874 1.56-2.118 2.556a1 1 0 01-.971.761c-1.134 0-2.198.396-2.964 1.066C6.397 14.767 6 15.64 6 16.517c0 .878.397 1.75 1.159 2.418.766.67 1.83 1.065 2.964 1.065a1 1 0 110 2c-1.584 0-3.126-.55-4.281-1.56C4.682 19.425 4 18.018 4 16.517c0-1.5.682-2.907 1.842-3.922.974-.853 2.224-1.377 3.542-1.52.524-1.302 1.548-2.391 2.868-3.113a7.89 7.89 0 012.526-.856 8.397 8.397 0 012.707.007c.894.149 1.75.442 2.52.868.77.427 1.444.981 1.975 1.64.532.659.91 1.41 1.1 2.212.094.394.14.794.141 1.194 1.237.008 2.438.46 3.338 1.283.91.833 1.441 1.983 1.441 3.203 0 1.22-.53 2.37-1.441 3.204-.908.83-2.121 1.283-3.37 1.283H22.1a1 1 0 110-2h1.089a3 3 0 002.02-.759c.518-.475.791-1.098.791-1.728 0-.629-.273-1.253-.791-1.727a3 3 0 00-2.02-.76H22.1a1 1 0 01-.971-1.237c.121-.494.123-1 .005-1.494a3.59 3.59 0 00-.71-1.42 4.692 4.692 0 00-1.387-1.144 5.878 5.878 0 00-1.88-.645zM16 12a1 1 0 01.753.341l3.5 4a1 1 0 11-1.506 1.317L17 15.662V24a1 1 0 11-2 0v-8.338l-1.748 1.996a1 1 0 11-1.505-1.317l3.5-4A1 1 0 0116 12z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconCloudUpload;
//# sourceMappingURL=IconCloudUpload.js.map