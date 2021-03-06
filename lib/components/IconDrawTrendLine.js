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
const IconDrawTrendLine = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${props.size}" height="${props.size}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 5.99998C22.8954 5.99998 22 6.89542 22 7.99998C22 9.10455 22.8954 9.99998 24 9.99998C25.1046 9.99998 26 9.10455 26 7.99998C26 6.89542 25.1046 5.99998 24 5.99998ZM20 7.99998C20 5.79085 21.7909 3.99998 24 3.99998C26.2091 3.99998 28 5.79085 28 7.99998C28 10.2091 26.2091 12 24 12C23.2582 12 22.5635 11.7981 21.968 11.4462L11.4462 21.968C11.7981 22.5635 12 23.2582 12 24C12 26.2091 10.2091 28 8 28C5.79086 28 4 26.2091 4 24C4 21.7908 5.79086 20 8 20C8.74181 20 9.43645 20.2019 10.032 20.5538L20.5538 10.032C20.2019 9.43644 20 8.74179 20 7.99998ZM8 22C6.89543 22 6 22.8954 6 24C6 25.1046 6.89543 26 8 26C9.10457 26 10 25.1046 10 24C10 22.8954 9.10457 22 8 22Z" />
</svg>

                ` } });
};
exports.default = IconDrawTrendLine;
//# sourceMappingURL=IconDrawTrendLine.js.map