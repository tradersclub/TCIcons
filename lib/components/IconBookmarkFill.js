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
const IconBookmarkFill = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${props.size}" height="${props.size}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path d="M24 24.9777C24 25.8058 23.051 26.2751 22.393 25.7724L16.607 21.3526C16.2486 21.0788 15.7514 21.0788 15.393 21.3526L9.60704 25.7724C8.94896 26.2751 8 25.8058 8 24.9777V7.44444C8 6.79614 8.24082 6.17438 8.66947 5.71596C9.09812 5.25754 9.67951 5 10.2857 5H21.7143C22.3205 5 22.9019 5.25754 23.3305 5.71596C23.7592 6.17438 24 6.79614 24 7.44444V24.9777Z" />
</svg>

                ` } });
};
exports.default = IconBookmarkFill;
//# sourceMappingURL=IconBookmarkFill.js.map