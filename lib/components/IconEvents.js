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
const IconEvents = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg width="${props.size}" height="${props.size}" viewBox="0 0 32 32" fill="${props.color}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.8 4.99995C20.8 4.55812 20.4418 4.19995 20 4.19995C19.5581 4.19995 19.2 4.55812 19.2 4.99995V6.19995H12.8V4.99995C12.8 4.55812 12.4418 4.19995 12 4.19995C11.5581 4.19995 11.2 4.55812 11.2 4.99995V6.19995H8.22217C6.55305 6.19995 5.19995 7.55305 5.19995 9.22217V14V24.7777C5.19995 26.4469 6.55305 27.8 8.22217 27.8H23.7777C25.4469 27.8 26.8 26.4469 26.8 24.7777V14V9.22217C26.8 7.55305 25.4469 6.19995 23.7777 6.19995H20.8V4.99995ZM25.2 13.2V9.22217C25.2 8.4367 24.5632 7.79995 23.7777 7.79995H20.8V8.99995C20.8 9.44178 20.4418 9.79995 20 9.79995C19.5581 9.79995 19.2 9.44178 19.2 8.99995V7.79995H12.8V8.99995C12.8 9.44178 12.4418 9.79995 12 9.79995C11.5581 9.79995 11.2 9.44178 11.2 8.99995V7.79995H8.22217C7.4367 7.79995 6.79995 8.4367 6.79995 9.22217V13.2H25.2ZM6.79995 14.8H25.2V24.7777C25.2 25.5632 24.5632 26.2 23.7777 26.2H8.22217C7.4367 26.2 6.79995 25.5632 6.79995 24.7777V14.8Z" fill="#74788C"/>
</svg>

                ` } });
};
exports.default = IconEvents;
//# sourceMappingURL=IconEvents.js.map