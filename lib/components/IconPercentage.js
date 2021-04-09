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
const IconPercentage = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="29" fill="${props.color}" viewBox="0 0 32 29">
  <path  fill-rule="evenodd" d="M9 7a2 2 0 100 4 2 2 0 000-4zM5 9a4 4 0 118 0 4 4 0 01-8 0zm20.707-1.293l-18 18a1 1 0 01-1.414-1.414l18-18a1 1 0 111.414 1.414zM21 23a2 2 0 114 0 2 2 0 01-4 0zm2-4a4 4 0 100 8 4 4 0 000-8z" clip-rule="evenodd"/>
</svg>

                ` } });
};
exports.default = IconPercentage;
//# sourceMappingURL=IconPercentage.js.map