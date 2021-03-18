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
const IconChartCamera = (props) => {
    var _a, _b, _c, _d;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.height) !== null && _b !== void 0 ? _b : props.size}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path d="M20 17C20 18.0609 19.5786 19.0783 18.8284 19.8284C18.0783 20.5786 17.0609 21 16 21C14.9391 21 13.9217 20.5786 13.1716 19.8284C12.4214 19.0783 12 18.0609 12 17C12 15.9391 12.4214 14.9217 13.1716 14.1716C13.9217 13.4214 14.9391 13 16 13C17.0609 13 18.0783 13.4214 18.8284 14.1716C19.5786 14.9217 20 15.9391 20 17V17Z" stroke="#4364E8" stroke-width="${(_c = props.width) !== null && _c !== void 0 ? _c : props.size}"
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 9.93333C7.02065 9.93333 6.32118 10.2424 5.80546 10.7925C5.28973 11.3426 5 12.0887 5 12.8667V22C5 22.778 5.28973 23.5241 5.80546 24.0742C6.32118 24.6243 7.02065 25 7.75 25H24.25C24.9793 25 25.6788 24.6243 26.1945 24.0742C26.7103 23.5241 27 22.778 27 22V12.8667C27 12.0887 26.7103 11.3426 26.1945 10.7925C25.6788 10.2424 24.9793 9.93333 24.25 9.93333H22.6385C21.2678 9.93301 20.4418 8.80463 19.5558 7.85946C19.0401 7.30931 18.3408 7.00016 17.6115 6.99999H14.3885C13.6592 7.00016 12.9599 7.30931 12.4443 7.85946C11.5582 8.80463 10.7322 9.93301 9.3615 9.93333H7.75Z" stroke="#4364E8" stroke-width="${(_d = props.width) !== null && _d !== void 0 ? _d : props.size}"
</svg>

                ` } });
};
exports.default = IconChartCamera;
//# sourceMappingURL=IconChartCamera.js.map