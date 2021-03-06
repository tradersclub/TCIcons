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
const IconMinhaCarteira = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${props.size}" height="${props.size}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.1278 9.42126C21.0159 8.55855 20.1527 8.00562 19.3222 8.26483L10.9359 10.8825H21.3172L21.1278 9.42126ZM18.9647 7.11934C20.5069 6.63795 22.1101 7.66481 22.3178 9.267L22.5402 10.9825H24C25.1046 10.9825 26 11.878 26 12.9825V16.0455C26.8626 16.2676 27.5 17.0506 27.5 17.9825V18.9825C27.5 19.9144 26.8626 20.6975 26 20.9195V23.9825C26 25.0871 25.1046 25.9825 24 25.9825H7C5.89543 25.9825 5 25.0871 5 23.9825V12.9825C5 11.9341 5.80676 11.0741 6.83336 10.9894L6.82122 10.9098L18.9647 7.11934ZM24.5 20.9825H19C17.6193 20.9825 16.5 19.8632 16.5 18.4825C16.5 17.1018 17.6193 15.9825 19 15.9825H24.5V12.9825C24.5 12.7064 24.2761 12.4825 24 12.4825H7C6.72386 12.4825 6.5 12.7064 6.5 12.9825V23.9825C6.5 24.2587 6.72386 24.4825 7 24.4825H24C24.2761 24.4825 24.5 24.2587 24.5 23.9825V20.9825ZM24.5 17.4825L19 17.4825C18.4477 17.4825 18 17.9302 18 18.4825C18 19.0348 18.4477 19.4825 19 19.4825H25.5C25.7761 19.4825 26 19.2587 26 18.9825V17.9825C26 17.7073 25.7777 17.484 25.5028 17.4825H24.5Z" />
</svg>

                ` } });
};
exports.default = IconMinhaCarteira;
//# sourceMappingURL=IconMinhaCarteira.js.map