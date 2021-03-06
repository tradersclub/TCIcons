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
const IconChat = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="chat">
    <path  fill-rule="evenodd" d="M14.487 4C8.618 4 4 9.214 4 15.423V27a1 1 0 001.74.673c.192-.212.346-.393.48-.552.295-.348.5-.59.83-.817.4-.276 1.028-.532 2.318-.558h8.145c2.843 0 5.467-.973 7.39-2.777C26.832 21.157 28 18.557 28 15.423 28 9.214 23.383 4 17.513 4h-3.026zM6 15.423C6 10.138 9.895 6 14.487 6h3.026C22.105 6 26 10.138 26 15.423c0 2.613-.96 4.674-2.466 6.087-1.514 1.421-3.633 2.236-6.021 2.236H9.339c-1.507.029-2.537.328-3.339.854v-9.177zM16 11.6a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8zM13.4 13a2.6 2.6 0 113.581 2.409c1.083.072 1.961.606 2.571 1.26.642.688 1.048 1.578 1.048 2.331a.6.6 0 01-.6.6h-8a.6.6 0 01-.6-.6c0-.753.406-1.643 1.047-2.331.61-.654 1.49-1.188 2.572-1.26A2.6 2.6 0 0113.4 13zm5.864 5.4a3 3 0 00-.59-.913c-.479-.514-1.146-.887-1.947-.887h-1.454c-.8 0-1.468.373-1.948.887a3 3 0 00-.59.913h6.53z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconChat;
//# sourceMappingURL=IconChat.js.map