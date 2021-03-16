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
const IconSend = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="29" fill="${props.color}" viewBox="0 0 32 29">
  <path  fill-rule="evenodd" d="M27.707 4.293a.998.998 0 01.23 1.058l-7.693 21.98a1 1 0 01-1.858.075l-4.244-9.548-9.548-4.244a1 1 0 01.076-1.858l21.979-7.693a.999.999 0 011.058.23zM23.194 7.39l-15.483 5.42 6.967 3.096 8.516-8.515zm-7.101 9.93l8.515-8.515-5.419 15.483-3.096-6.968z" clip-rule="evenodd"/>
</svg>

                ` } });
};
exports.default = IconSend;
//# sourceMappingURL=IconSend.js.map