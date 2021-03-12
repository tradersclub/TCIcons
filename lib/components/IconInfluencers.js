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
const IconInfluencers = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="influencers">
    <path  fill-rule="evenodd" d="M10 4a3 3 0 00-3 3v18a3 3 0 003 3h12a3 3 0 003-3V7a3 3 0 00-3-3H10zM9 7a1 1 0 011-1h12a1 1 0 011 1v16.838C21.643 22.698 20.088 22 18.367 22h-4.734c-1.72 0-3.276.699-4.633 1.838V7zm4 1a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm7.5 8a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconInfluencers;
//# sourceMappingURL=IconInfluencers.js.map