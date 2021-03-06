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
const IconEditNumberList = (props) => {
    return React.createElement('object', { style: props.style, dangerouslySetInnerHTML: { __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 32 32">
  <g class="number-list">
    <path  fill-rule="evenodd" d="M4.6 7.07l1.003-.884V10H6.62V5h-.989L4 6.377l.6.692zm1.333 8.11l-1.91 1.716V18h3.43v-.917h-2.18L6.766 15.8c.093-.084.178-.17.257-.257a1.445 1.445 0 00.34-.636c.033-.127.049-.27.049-.427a1.6 1.6 0 00-.122-.646 1.263 1.263 0 00-.336-.462 1.454 1.454 0 00-.507-.277 2.295 2.295 0 00-1.295 0 1.548 1.548 0 00-.539.281 1.393 1.393 0 00-.368.469 1.694 1.694 0 00-.16.663l1.042.076a.728.728 0 01.184-.444c.11-.12.26-.18.455-.18.162 0 .303.047.424.142.12.095.18.225.18.392a.572.572 0 01-.146.389c-.097.111-.194.21-.291.299zm-.676 8.808h.335c.095 0 .189-.007.28-.02a.798.798 0 00.249-.08.465.465 0 00.18-.163.503.503 0 00.07-.277.45.45 0 00-.175-.362.65.65 0 00-.427-.143.595.595 0 00-.601.45l-1.127-.232c.055-.21.137-.388.246-.536.11-.148.239-.267.39-.359.15-.09.317-.158.501-.201a2.548 2.548 0 011.202.014c.199.052.373.134.523.245.15.112.27.252.359.42.088.169.133.37.133.602 0 .268-.07.498-.212.69-.141.19-.346.314-.615.368v.02a.957.957 0 01.386.13 1.044 1.044 0 01.461.595c.041.127.062.262.062.403 0 .241-.047.453-.14.635a1.329 1.329 0 01-.376.454c-.157.121-.341.211-.553.27-.212.06-.436.089-.673.089-.433 0-.805-.1-1.117-.3-.312-.2-.518-.517-.618-.95l1.08-.253c.036.173.11.31.221.41.112.1.277.15.495.15.224 0 .389-.058.496-.174a.634.634 0 00.16-.447.517.517 0 00-.085-.318.51.51 0 00-.222-.167.985.985 0 00-.308-.065 5.726 5.726 0 00-.341-.01h-.24v-.888zM11 6.5a1 1 0 100 2h16a1 1 0 100-2H11zm-1 9a1 1 0 011-1h16a1 1 0 110 2H11a1 1 0 01-1-1zm1 8a1 1 0 100 2h16a1 1 0 100-2H11z" class="Mask" clip-rule="evenodd"/>
  </g>
</svg>

                ` } });
};
exports.default = IconEditNumberList;
//# sourceMappingURL=IconEditNumberList.js.map