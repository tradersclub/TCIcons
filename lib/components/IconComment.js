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
const IconComment = (props) => {
    var _a, _b;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.width) !== null && _b !== void 0 ? _b : props.height}" fill="${props.color}" viewBox="0 0 32 32">
  <path  fill-rule="evenodd" d="M4 15.475C4 9.697 8.706 5 14.487 5h3.026C23.295 5 28 9.697 28 15.475c0 2.907-1.193 5.303-3.133 6.958-1.925 1.643-4.537 2.518-7.354 2.518H9.368c-1.307.023-1.949.26-2.354.515-.33.206-.53.422-.824.737-.134.144-.288.31-.483.504A1 1 0 014 26V15.475zM14.487 7C9.807 7 6 10.804 6 15.475v8.266c.801-.488 1.826-.764 3.342-.79h8.171c2.414 0 4.545-.75 6.056-2.04C25.065 19.636 26 17.795 26 15.476 26 10.805 22.193 7 17.513 7h-3.026z" clip-rule="evenodd"/>
</svg>

                ` } });
};
exports.default = IconComment;
//# sourceMappingURL=IconComment.js.map