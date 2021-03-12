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
const IconDrawHorizontalRay = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${props.size}" height="${props.size}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 16C13 14.8954 13.8954 14 15 14C16.1046 14 17 14.8954 17 16C17 17.1046 16.1046 18 15 18C13.8954 18 13 17.1046 13 16ZM11.126 17C11.5701 18.7252 13.1362 20 15 20C16.8638 20 18.4299 18.7252 18.874 17H20.126C20.5701 18.7252 22.1362 20 24 20C26.2091 20 28 18.2091 28 16C28 13.7909 26.2091 12 24 12C22.1362 12 20.5701 13.2748 20.126 15H18.874C18.4299 13.2748 16.8638 12 15 12C13.1362 12 11.5701 13.2748 11.126 15H5C4.44772 15 4 15.4477 4 16C4 16.5523 4.44772 17 5 17H11.126ZM24 18C22.8954 18 22 17.1046 22 16C22 14.8954 22.8954 14 24 14C25.1046 14 26 14.8954 26 16C26 17.1046 25.1046 18 24 18Z" />
</svg>

                ` } });
};
exports.default = IconDrawHorizontalRay;
//# sourceMappingURL=IconDrawHorizontalRay.js.map