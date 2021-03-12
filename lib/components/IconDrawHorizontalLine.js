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
const IconDrawHorizontalLine = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${props.size}" height="${props.size}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14ZM12.1241 15.0076C12.5654 13.2785 14.1334 12 16 12C17.8666 12 19.4346 13.2785 19.8759 15.0076C19.9166 15.0026 19.958 15 20 15H28C28.5523 15 29 15.4477 29 16C29 16.5523 28.5523 17 28 17H20C19.958 17 19.9166 16.9974 19.8759 16.9924C19.4346 18.7215 17.8666 20 16 20C14.1334 20 12.5654 18.7215 12.1241 16.9924C12.0834 16.9974 12.042 17 12 17H4C3.44772 17 3 16.5523 3 16C3 15.4477 3.44772 15 4 15H12C12.042 15 12.0834 15.0026 12.1241 15.0076Z" />
</svg>

                ` } });
};
exports.default = IconDrawHorizontalLine;
//# sourceMappingURL=IconDrawHorizontalLine.js.map