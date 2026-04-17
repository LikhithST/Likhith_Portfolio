var _a, _b;
import { _ as e, g as t, h as n, l as r, m as i, n as a, s as o, t as s, v as c } from "./chunk-K5T4RW27-CzljlcrI.js";
var l = (_a = class extends s {
  constructor() {
    super([`pie`, `showData`]);
  }
}, i(_a, `PieTokenBuilder`), _a), u = (_b = class extends a {
  runCustomConverter(e2, t2, n2) {
    if (e2.name === `PIE_SECTION_LABEL`) return t2.replace(/"/g, ``).trim();
  }
}, i(_b, `PieValueConverter`), _b), d = { parser: { TokenBuilder: i(() => new l(), `TokenBuilder`), ValueConverter: i(() => new u(), `ValueConverter`) } };
function f(i2 = n) {
  let a2 = t(c(i2), o), s2 = t(e({ shared: a2 }), r, d);
  return a2.ServiceRegistry.register(s2), { shared: a2, Pie: s2 };
}
i(f, `createPieServices`);
export {
  f as n,
  d as t
};
