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
const IconEditAttach = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="attach">
    <path  fill-rule="evenodd" d="M12.77 6.506A8.235 8.235 0 0118.67 4c2.218 0 4.34.905 5.9 2.506A8.627 8.627 0 0127 12.525a8.627 8.627 0 01-2.43 6.018l-7.487 7.686A5.823 5.823 0 0112.91 28c-1.57 0-3.07-.64-4.172-1.771a6.085 6.085 0 01-1.715-4.245c0-1.588.614-3.115 1.715-4.245l7.487-7.686a3.412 3.412 0 012.444-1.037c.922 0 1.8.377 2.444 1.037.643.66 1 1.55 1 2.472 0 .922-.357 1.811-1 2.47l-7.487 7.686a1 1 0 11-1.432-1.395L19.68 13.6c.274-.28.432-.667.432-1.075 0-.409-.158-.795-.432-1.076a1.412 1.412 0 00-1.011-.433c-.374 0-.739.153-1.012.433l-7.486 7.685a4.085 4.085 0 00-1.148 2.85c0 1.073.416 2.098 1.148 2.849A3.824 3.824 0 0012.91 26a3.823 3.823 0 002.739-1.167l7.487-7.685A6.627 6.627 0 0025 12.524a6.627 6.627 0 00-1.863-4.623A6.235 6.235 0 0018.67 6c-1.67 0-3.278.68-4.467 1.902l-7.487 7.685a1 1 0 01-1.432-1.395l7.487-7.686z" class="Union" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconEditAttach;
//# sourceMappingURL=IconEditAttach.js.map