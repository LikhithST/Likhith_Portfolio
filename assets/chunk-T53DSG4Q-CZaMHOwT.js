var _a, _b;
import { f as e, g as t, h as n, l as r, m as i, n as a, p as o, s, t as c } from "./chunk-FPAJGGOC-C3gFAQ_Y.js";
var l = (_a = class extends c {
  constructor() {
    super([`pie`, `showData`]);
  }
}, e(_a, `PieTokenBuilder`), _a), u = (_b = class extends a {
  runCustomConverter(e2, t2, n2) {
    if (e2.name === `PIE_SECTION_LABEL`) return t2.replace(/"/g, ``).trim();
  }
}, e(_b, `PieValueConverter`), _b), d = { parser: { TokenBuilder: e(() => new l(), `TokenBuilder`), ValueConverter: e(() => new u(), `ValueConverter`) } };
function f(e2 = o) {
  let a2 = i(t(e2), s), c2 = i(n({ shared: a2 }), r, d);
  return a2.ServiceRegistry.register(c2), { shared: a2, Pie: c2 };
}
e(f, `createPieServices`);
export {
  f as n,
  d as t
};
