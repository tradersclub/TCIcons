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
const IconBrain = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path d="M5 20L9.35391 15.1249C9.76726 14.6624 10.2947 14.448 10.8208 14.5286L14.1185 15.0409C14.3691 15.0804 14.6228 15.0528 14.866 14.9597L20 13" stroke="#74788C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 13L9.52467 9.05042C9.83563 8.77924 10.1914 8.63612 10.554 8.63636H14.0667C14.3523 8.63621 14.6346 8.54727 14.8947 8.37552L20 5" stroke="#74788C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.9932 23H1V1" stroke="#74788C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                ` } });
};
exports.default = IconBrain;
//# sourceMappingURL=IconBrain.js.map