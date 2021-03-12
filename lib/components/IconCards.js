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
const IconCards = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="cards">
    <path  fill-rule="evenodd" d="M5.571 3.571a2 2 0 00-2 2v7.143a2 2 0 002 2h7.143a2 2 0 002-2V5.571a2 2 0 00-2-2H5.571zm0 2h7.143v7.143H5.571V5.571zm0 11.715a2 2 0 00-2 2v7.143a2 2 0 002 2h7.143a2 2 0 002-2v-7.143a2 2 0 00-2-2H5.571zm0 2h7.143v7.143H5.571v-7.143zm11.715 0a2 2 0 012-2h7.143a2 2 0 012 2v7.143a2 2 0 01-2 2h-7.143a2 2 0 01-2-2v-7.143zm9.143 0h-7.143v7.143h7.143v-7.143zM19.286 3.57a2 2 0 00-2 2v7.143a2 2 0 002 2h7.143a2 2 0 002-2V5.571a2 2 0 00-2-2h-7.143zm0 2h7.143v7.143h-7.143V5.571z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconCards;
//# sourceMappingURL=IconCards.js.map