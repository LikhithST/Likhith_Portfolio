var _a;
import { f as e, g as t, h as n, i as r, m as i, o as a, p as o, s, t as c } from "./chunk-FPAJGGOC-C3gFAQ_Y.js";
var l = (_a = class extends c {
  constructor() {
    super([`info`, `showInfo`]);
  }
}, e(_a, `InfoTokenBuilder`), _a), u = { parser: { TokenBuilder: e(() => new l(), `TokenBuilder`), ValueConverter: e(() => new r(), `ValueConverter`) } };
function d(e2 = o) {
  let r2 = i(t(e2), s), c2 = i(n({ shared: r2 }), a, u);
  return r2.ServiceRegistry.register(c2), { shared: r2, Info: c2 };
}
e(d, `createInfoServices`);
export {
  d as n,
  u as t
};
