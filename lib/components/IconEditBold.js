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
const IconEditBold = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.width) !== null && _b !== void 0 ? _b : props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="bold">
    <path  fill-rule="evenodd" d="M7 4a2 2 0 00-2 2v20a2 2 0 002 2h12.462c1.994 0 3.91-.787 5.325-2.192A7.48 7.48 0 0027 20.5a7.48 7.48 0 00-2.213-5.308 7.533 7.533 0 00-1.8-1.321A6.156 6.156 0 0024 10.5c0-1.796-.795-3.47-2.127-4.669C20.549 4.64 18.794 4 17 4H7zm10 9c.86 0 1.647-.31 2.198-.805.543-.489.802-1.104.802-1.695s-.259-1.206-.802-1.695C18.648 8.309 17.86 8 17 8H9v5h8zm-8 4v7h10.462c.942 0 1.844-.372 2.506-1.03A3.48 3.48 0 0023 20.5a3.48 3.48 0 00-1.032-2.47A3.558 3.558 0 0019.462 17H9z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconEditBold;
//# sourceMappingURL=IconEditBold.js.map