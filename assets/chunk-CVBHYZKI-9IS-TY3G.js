import { h as e } from "./src-D8UWkQNo.js";
var t = e(({ flowchart: e2 }) => {
  var _a, _b;
  let t2 = ((_a = e2 == null ? void 0 : e2.subGraphTitleMargin) == null ? void 0 : _a.top) ?? 0, n = ((_b = e2 == null ? void 0 : e2.subGraphTitleMargin) == null ? void 0 : _b.bottom) ?? 0;
  return { subGraphTitleTopMargin: t2, subGraphTitleBottomMargin: n, subGraphTitleTotalMargin: t2 + n };
}, `getSubGraphTitleMargins`);
export {
  t
};
