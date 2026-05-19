import { Jn as e, Yn as t, gn as n } from "./index-4Ava25sD.js";
var r = e((e2, r2, o, s) => {
  e2.attr(`class`, o);
  let { width: c, height: l, x: u, y: d } = i(e2, r2);
  n(e2, l, c, s);
  let f = a(u, d, c, l, r2);
  e2.attr(`viewBox`, f), t.debug(`viewBox configured: ${f} with padding: ${r2}`);
}, `setupViewPortForSVG`), i = e((e2, t2) => {
  var _a;
  let n2 = ((_a = e2.node()) == null ? void 0 : _a.getBBox()) || { width: 0, height: 0, x: 0, y: 0 };
  return { width: n2.width + t2 * 2, height: n2.height + t2 * 2, x: n2.x, y: n2.y };
}, `calculateDimensionsWithPadding`), a = e((e2, t2, n2, r2, i2) => `${e2 - i2} ${t2 - i2} ${n2} ${r2}`, `createViewBox`);
export {
  r as t
};
