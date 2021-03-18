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
const IconSuitabilityTestResult = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${(_a = props.width) !== null && _a !== void 0 ? _a : props.size}" height="${(_b = props.height) !== null && _b !== void 0 ? _b : props.size}" viewBox="0 0 85 81" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path d="M32.2501 18.125C32.2501 18.125 34.1251 11.25 33.5001 9.37502C32.8751 7.50002 24.1251 2.5 21.6251 1.25C19.7013 0.288148 10.3764 3.02693 6.17943 4.34072C4.891 4.74405 3.91793 5.78691 3.57435 7.09253L2.0581 12.8542C1.48046 15.0493 2.84296 17.2846 5.05868 17.777L9.63985 18.795C11.3723 19.18 13.0457 19.7938 14.6162 20.6204L24.1251 25.6251C24.1251 25.6251 27.8751 26.8751 29.1251 25.0001C30.3751 23.1251 30.3751 21.2501 28.5001 20C26.6251 18.75 18.5 12.5 18.5 12.5C18.5 12.5 19.75 11.25 21.0001 10.625C22.2501 10 22.8751 10 24.7501 11.25C25.2319 11.5712 25.6312 11.8512 25.9585 12.0898C26.8157 12.7149 27.2501 13.721 27.2501 14.7819V16.25" stroke="#FF6633" stroke-width="${(_c = props.width) !== null && _c !== void 0 ? _c : props.size}" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.5046 22.6118C18.0982 23.6414 17.875 24.7633 17.875 25.9373C17.875 30.9424 21.9324 34.9998 26.9375 34.9998V34.9998C31.9426 34.9998 36 30.9424 36 25.9373C36 20.9322 31.9426 16.8748 26.9375 16.8748C26.2201 16.8748 25.5221 16.9581 24.8527 17.1157" stroke="#FF6633" stroke-width="${(_d = props.width) !== null && _d !== void 0 ? _d : props.size}" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="37.873" y="50.6248" width="${(_e = props.width) !== null && _e !== void 0 ? _e : props.size}" height="${(_f = props.height) !== null && _f !== void 0 ? _f : props.size}" rx="7" stroke="#33BFFF" stroke-width="${(_g = props.width) !== null && _g !== void 0 ? _g : props.size}" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M37.873 59.3755H83.4982" stroke="#33BFFF" stroke-width="${(_h = props.width) !== null && _h !== void 0 ? _h : props.size}" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M44.125 72.5005H61" stroke="#33BFFF" stroke-width="${(_j = props.width) !== null && _j !== void 0 ? _j : props.size}" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M44.125 67.5005H61" stroke="#33BFFF" stroke-width="${(_k = props.width) !== null && _k !== void 0 ? _k : props.size}" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.6014 48.5253C20.1109 46.7522 17.8765 45.6252 15.3789 45.6252C10.8916 45.6252 7.25391 49.2629 7.25391 53.7503C7.25391 58.2376 10.8916 61.8753 15.3789 61.8753V61.8753C17.8649 61.8753 20.0901 60.7588 21.5805 59" stroke="#29CC39" stroke-width="${(_l = props.width) !== null && _l !== void 0 ? _l : props.size}" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.12695 56.25H16.002" stroke="#29CC39" stroke-width="${(_m = props.width) !== null && _m !== void 0 ? _m : props.size}" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.12695 52.5007H16.002" stroke="#29CC39" stroke-width="${(_o = props.width) !== null && _o !== void 0 ? _o : props.size}" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M61.9375 38.7506C68.6685 38.7506 74.1251 33.294 74.1251 26.563C74.1251 19.832 68.6685 14.3755 61.9375 14.3755C55.2065 14.3755 49.75 19.832 49.75 26.563C49.75 33.294 55.2065 38.7506 61.9375 38.7506Z" stroke="#8833FF" stroke-width="${(_p = props.width) !== null && _p !== void 0 ? _p : props.size}" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M58.498 29.3745C58.498 31.2495 60.0606 32.4995 61.6231 32.4995C63.1856 32.4995 65.3731 31.2495 64.7481 28.7495C64.1231 26.2495 59.123 26.8745 59.123 23.7495C59.123 22.5835 59.4711 21.8525 59.9075 21.3943C60.7849 20.4731 62.2715 20.8144 63.2988 21.5648C64.0405 22.1067 64.7481 22.8573 64.7481 23.7495" stroke="#8833FF" stroke-width="${(_q = props.width) !== null && _q !== void 0 ? _q : props.size}" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M61.625 34.3748V32.4998" stroke="#8833FF" stroke-width="${(_r = props.width) !== null && _r !== void 0 ? _r : props.size}" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M61.625 20.625V18.75" stroke="#8833FF" stroke-width="${(_s = props.width) !== null && _s !== void 0 ? _s : props.size}" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                ` } });
};
exports.default = IconSuitabilityTestResult;
//# sourceMappingURL=IconSuitabilityTestResult.js.map