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
const IconTcMarkerDown = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 20" fill="${props.color}">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.04326 1.04289C5.2308 0.855357 5.48515 0.75 5.75037 0.75H10.2507C10.803 0.75 11.2507 1.19772 11.2507 1.75V11.2508H14.751C15.1662 11.2508 15.5382 11.5073 15.6857 11.8954C15.8333 12.2835 15.7257 12.7223 15.4154 12.9982L8.66488 18.9986C8.286 19.3354 7.71504 19.3354 7.33616 18.9986L0.58568 12.9982C0.275371 12.7224 0.167775 12.2835 0.31532 11.8954C0.462866 11.5073 0.834859 11.2508 1.25004 11.2508L4.75037 11.2508L4.75037 1.75C4.75037 1.48478 4.85573 1.23043 5.04326 1.04289ZM6.75037 2.75V12.2508C6.75037 12.803 6.30266 13.2508 5.75037 13.2508L3.88023 13.2508L8.00052 16.9132L12.1208 13.2508H10.2507C9.69841 13.2508 9.25069 12.803 9.25069 12.2508V2.75H6.75037Z"/>
</svg>
                ` } });
};
exports.default = IconTcMarkerDown;
//# sourceMappingURL=IconTcMarkerDown.js.map