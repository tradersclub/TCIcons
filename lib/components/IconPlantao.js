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
const IconPlantao = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <path  fill-rule="evenodd" d="M19.202 6.293c.03-.148.062-.345.08-.551.015-.19.025-.474-.04-.75-.055-.234-.285-.894-1.041-.984a1.333 1.333 0 00-.735.134c-.177.085-.335.2-.474.318l-.005.004-.006.005c-2.294 2.008-4.687 5.367-3.882 8.997.103.468.286.918.464 1.315.09.2.17.369.245.53.096.202.185.392.283.618.324.754.43 1.268.305 1.702-.103.351-.5.693-1.136.757-.617.062-1.173-.174-1.454-.635-.426-.698-.71-1.55-.886-2.26a11.569 11.569 0 01-.226-1.165l-.002-.012v-.001-.001a1 1 0 00-1.74-.55c-.983 1.105-1.727 2.548-1.879 3.687-.157 1.178-.05 2.387.216 3.468.786 3.203 3.22 5.935 6.58 6.795 2.58.66 5.322.163 7.487-1.323a8.856 8.856 0 002.415-2.508 7.256 7.256 0 001.097-2.75c.258-1.482.16-3.117-.5-4.573l-.001-.001c-.672-1.476-1.863-2.536-2.861-3.425l-.252-.225c-.833-.769-1.521-1.622-1.884-2.569-.451-1.203-.426-2.633-.168-4.047zM9.27 16.971a3.233 3.233 0 00-.214.745c-.119.891-.04 1.846.176 2.726.627 2.556 2.555 4.674 5.133 5.334m-5.095-8.805c.2.593.47 1.233.83 1.824.77 1.263 2.165 1.704 3.362 1.583 1.175-.119 2.454-.82 2.854-2.185l.001-.002c.336-1.153-.038-2.239-.388-3.053a27.87 27.87 0 00-.34-.743c-.075-.16-.145-.31-.2-.432-.164-.366-.278-.665-.335-.926v-.003c-.445-2.004.516-4.101 2.007-5.82-.108 1.25-.03 2.584.44 3.832h-.001l.002.005c.516 1.351 1.448 2.454 2.402 3.333l.01.008.2.179c1.062.952 1.944 1.741 2.434 2.816.46 1.016.555 2.229.35 3.402v.002a5.257 5.257 0 01-.804 2.004 6.855 6.855 0 01-1.869 1.947 7.227 7.227 0 01-5.86 1.034" clip-rule="evenodd"/>
</svg>

                ` } });
};
exports.default = IconPlantao;
//# sourceMappingURL=IconPlantao.js.map