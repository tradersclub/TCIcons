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
const IconHourGlass = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <path  fill-rule="evenodd" d="M8 4a1 1 0 000 2h1v5l.36.768L14.438 16 9.36 20.232 9 21v5H8a1 1 0 100 2h16a1 1 0 100-2h-1v-5l-.36-.768L17.562 16l5.078-4.232L23 11V6h1a1 1 0 100-2H8zm13 2H11v4.532l5 4.166 5-4.166V6zm-5 11.302l-5 4.166V26h10v-4.532l-5-4.166z" clip-rule="evenodd"/>
</svg>

                ` } });
};
exports.default = IconHourGlass;
//# sourceMappingURL=IconHourGlass.js.map