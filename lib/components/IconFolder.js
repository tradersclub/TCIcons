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
const IconFolder = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${props.size}" height="${props.size}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 8C7.73478 8 7.48043 8.10536 7.29289 8.29289C7.10536 8.48043 7 8.73478 7 9V23C7 23.2652 7.10536 23.5196 7.29289 23.7071C7.48043 23.8946 7.73478 24 8 24H24C24.2652 24 24.5196 23.8946 24.7071 23.7071C24.8946 23.5196 25 23.2652 25 23V12C25 11.7348 24.8946 11.4804 24.7071 11.2929C24.5196 11.1054 24.2652 11 24 11H15C14.6656 11 14.3534 10.8329 14.1679 10.5547L12.4648 8H8ZM5.87868 6.87868C6.44129 6.31607 7.20435 6 8 6H13C13.3344 6 13.6466 6.1671 13.8321 6.4453L15.5352 9H24C24.7957 9 25.5587 9.31607 26.1213 9.87868C26.6839 10.4413 27 11.2043 27 12V23C27 23.7957 26.6839 24.5587 26.1213 25.1213C25.5587 25.6839 24.7957 26 24 26H8C7.20435 26 6.44129 25.6839 5.87868 25.1213C5.31607 24.5587 5 23.7957 5 23V9C5 8.20435 5.31607 7.44129 5.87868 6.87868Z"/>
</svg>

                ` } });
};
exports.default = IconFolder;
//# sourceMappingURL=IconFolder.js.map