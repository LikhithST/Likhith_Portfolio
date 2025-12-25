import { c as e } from "./chunk-ABZYJK2D-ODb6qSou.js";
import { g as t, h as n } from "./src-D8UWkQNo.js";
var r = n((n2, r2, o, s) => {
  n2.attr(`class`, o);
  let { width: c, height: l, x: u, y: d } = i(n2, r2);
  e(n2, l, c, s);
  let f = a(u, d, c, l, r2);
  n2.attr(`viewBox`, f), t.debug(`viewBox configured: ${f} with padding: ${r2}`);
}, `setupViewPortForSVG`), i = n((e2, t2) => {
  var _a;
  let n2 = ((_a = e2.node()) == null ? void 0 : _a.getBBox()) || { width: 0, height: 0, x: 0, y: 0 };
  return { width: n2.width + t2 * 2, height: n2.height + t2 * 2, x: n2.x, y: n2.y };
}, `calculateDimensionsWithPadding`), a = n((e2, t2, n2, r2, i2) => `${e2 - i2} ${t2 - i2} ${n2} ${r2}`, `createViewBox`);
export {
  r as t
};
