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
const IconDrawTriangle = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${props.size}" height="${props.size}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 6C14.8954 6 14 6.89543 14 8C14 9.10457 14.8954 10 16 10C17.1046 10 18 9.10457 18 8C18 6.89543 17.1046 6 16 6ZM12 8C12 5.79086 13.7909 4 16 4C18.2091 4 20 5.79086 20 8C20 9.03488 19.607 9.97798 18.9621 10.6882L23.6266 20.0172C23.7495 20.0058 23.8741 20 24 20C26.2091 20 28 21.7909 28 24C28 26.2091 26.2091 28 24 28C22.1334 28 20.5655 26.7215 20.1241 24.9924C20.0834 24.9974 20.042 25 20 25H12C11.958 25 11.9166 24.9974 11.8759 24.9924C11.4345 26.7215 9.86658 28 8 28C5.79086 28 4 26.2091 4 24C4 21.7909 5.79086 20 8 20C8.28742 20 8.56776 20.0303 8.83799 20.0879L13.3735 11.0169C12.5319 10.2836 12 9.20393 12 8ZM20.1241 23.0076C20.3665 22.0579 20.9488 21.2442 21.7337 20.7035L17.2777 11.7916C16.8765 11.9267 16.4468 12 16 12C15.7126 12 15.4322 11.9697 15.162 11.9121L10.6265 20.983C11.2286 21.5077 11.6722 22.2097 11.8759 23.0076C11.9166 23.0026 11.958 23 12 23H20C20.042 23 20.0834 23.0026 20.1241 23.0076ZM6 24C6 22.8954 6.89543 22 8 22C9.10457 22 10 22.8954 10 24C10 25.1046 9.10457 26 8 26C6.89543 26 6 25.1046 6 24ZM22 24C22 22.8954 22.8954 22 24 22C25.1046 22 26 22.8954 26 24C26 25.1046 25.1046 26 24 26C22.8954 26 22 25.1046 22 24Z" />
</svg>

                ` } });
};
exports.default = IconDrawTriangle;
//# sourceMappingURL=IconDrawTriangle.js.map