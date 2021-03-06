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
const IconAlertFull = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${props.size}" height="${props.size}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.66671 23.986L13.932 9.03959C14.678 7.69048 16.6056 7.65712 17.3979 8.97962L26.2142 23.6961C27.0066 25.0188 26.0673 26.703 24.5254 26.7237L7.44384 26.9537C5.90882 26.9743 4.9238 25.3294 5.66671 23.986ZM15.8 13C16.2418 13 16.6 13.3582 16.6 13.8V18.8C16.6 19.2418 16.2418 19.6 15.8 19.6C15.3581 19.6 15 19.2418 15 18.8V13.8C15 13.3582 15.3581 13 15.8 13ZM15.8 21.9C16.2418 21.9 16.6 22.2582 16.6 22.7V22.8C16.6 23.2418 16.2418 23.6 15.8 23.6C15.3581 23.6 15 23.2418 15 22.8V22.7C15 22.2582 15.3581 21.9 15.8 21.9Z" />
</svg>

                ` } });
};
exports.default = IconAlertFull;
//# sourceMappingURL=IconAlertFull.js.map