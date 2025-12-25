var _a;
import { f as e, g as t, h as n, i as r, m as i, p as a, s as o, t as s, u as c } from "./chunk-FPAJGGOC-C3gFAQ_Y.js";
var l = (_a = class extends s {
  constructor() {
    super([`radar-beta`]);
  }
}, e(_a, `RadarTokenBuilder`), _a), u = { parser: { TokenBuilder: e(() => new l(), `TokenBuilder`), ValueConverter: e(() => new r(), `ValueConverter`) } };
function d(e2 = a) {
  let r2 = i(t(e2), o), s2 = i(n({ shared: r2 }), c, u);
  return r2.ServiceRegistry.register(s2), { shared: r2, Radar: s2 };
}
e(d, `createRadarServices`);
export {
  d as n,
  u as t
};
