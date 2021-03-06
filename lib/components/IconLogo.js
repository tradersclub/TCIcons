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
const IconLogo = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5945 16.98C13.9154 16.6596 13.4442 16.0798 13.2168 15.244C13.0067 14.471 12.9048 13.6491 12.9048 12.0293C12.9048 10.3986 13.0097 9.57415 13.2198 8.80615C13.4472 7.97583 13.9714 7.39267 14.6501 7.07225C15.2884 6.7712 16.2185 6.62467 17.5554 6.62467C17.664 6.62467 17.6606 6.62522 17.6556 6.62601C17.6419 6.62819 17.6164 6.63225 19.8442 6.63225L20.0463 6.63309C20.1402 6.63309 20.2164 6.70931 20.2164 6.8032C20.2164 7.72952 19.4657 8.48025 18.5394 8.48025H17.8829C16.6008 8.48025 16.1886 8.58594 15.9255 8.68741C15.6105 8.80825 15.4063 9.10973 15.3011 9.53709C15.1752 10.0491 15.0615 10.695 15.0615 12.0301C15.0615 13.3653 15.1752 13.9619 15.3011 14.4739C15.4063 14.9013 15.6105 15.22 15.9251 15.3409C16.1891 15.4419 16.6017 15.567 17.8829 15.567H20.051C20.147 15.567 20.2244 15.6445 20.2244 15.7405C20.2244 16.6689 19.472 17.4213 18.5436 17.4213H17.5444C16.2072 17.4213 15.2328 17.2811 14.5945 16.98ZM4.11297 6.6248H11.8153C12.0128 6.6248 12.1723 6.7869 12.1517 6.98311C12.0582 7.86648 11.3109 8.55448 10.4031 8.55448H8.94497C8.85318 8.55448 8.77907 8.62901 8.77907 8.72038V15.5924C8.77907 16.6307 7.93739 17.4724 6.89865 17.4724C6.71255 17.4724 6.56139 17.3216 6.56139 17.1351V8.55448H4.11255C3.92644 8.55448 3.77528 8.40375 3.77528 8.21722V6.96206C3.77528 6.77596 3.92644 6.6248 4.11297 6.6248ZM17.6 0H6.4C2.86526 0 0 2.86526 0 6.4V17.6C0 21.1347 2.86526 24 6.4 24H17.6C21.1347 24 24 21.1347 24 17.6V6.4C24 2.86526 21.1347 0 17.6 0Z" fill="white"/>
</svg>

                ` } });
};
exports.default = IconLogo;
//# sourceMappingURL=IconLogo.js.map