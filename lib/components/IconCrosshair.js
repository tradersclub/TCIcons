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
const IconCrosshair = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.width) !== null && _b !== void 0 ? _b : props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="crosshair">
    <path  fill-rule="evenodd" d="M16 4h.028c6.615.015 11.973 5.382 11.973 12 0 6.628-5.373 12-12 12-6.619 0-11.986-5.357-12-11.972a.99.99 0 010-.057c.015-6.604 5.366-11.955 11.97-11.97L16 4zm-1 7V6.05A10.004 10.004 0 006.05 15H11a1 1 0 110 2H6.05A10.004 10.004 0 0015 25.95V21a1 1 0 012 0v4.951A10.003 10.003 0 0025.95 17H21a1 1 0 110-2h4.951A10.004 10.004 0 0017 6.05V11a1 1 0 01-2 0z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconCrosshair;
//# sourceMappingURL=IconCrosshair.js.map