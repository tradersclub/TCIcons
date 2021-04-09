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
const IconUserAdd = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${props.size}" height="${props.size}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 11C9.5 9.34315 10.8431 8 12.5 8C14.1569 8 15.5 9.34315 15.5 11C15.5 12.6569 14.1569 14 12.5 14C10.8431 14 9.5 12.6569 9.5 11ZM12.5 6C9.73858 6 7.5 8.23858 7.5 11C7.5 13.7614 9.73858 16 12.5 16C15.2614 16 17.5 13.7614 17.5 11C17.5 8.23858 15.2614 6 12.5 6ZM9 18C7.67392 18 6.40215 18.5268 5.46447 19.4645C4.52678 20.4021 4 21.6739 4 23V25C4 25.5523 4.44772 26 5 26C5.55228 26 6 25.5523 6 25V23C6 22.2044 6.31607 21.4413 6.87868 20.8787C7.44129 20.3161 8.20435 20 9 20H16C16.7956 20 17.5587 20.3161 18.1213 20.8787C18.6839 21.4413 19 22.2043 19 23V25C19 25.5523 19.4477 26 20 26C20.5523 26 21 25.5523 21 25V23C21 21.6739 20.4732 20.4021 19.5355 19.4645C18.5979 18.5268 17.3261 18 16 18H9ZM24 11C24.5523 11 25 11.4477 25 12V14H27C27.5523 14 28 14.4477 28 15C28 15.5523 27.5523 16 27 16H25V18C25 18.5523 24.5523 19 24 19C23.4477 19 23 18.5523 23 18V16H21C20.4477 16 20 15.5523 20 15C20 14.4477 20.4477 14 21 14H23V12C23 11.4477 23.4477 11 24 11Z" />
</svg>
                ` } });
};
exports.default = IconUserAdd;
//# sourceMappingURL=IconUserAdd.js.map