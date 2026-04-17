var _a;
import { _ as e, g as t, h as n, m as r, n as i, p as a, s as o, v as s } from "./chunk-K5T4RW27-CzljlcrI.js";
var c = (_a = class extends i {
  runCustomConverter(e2, t2, n2) {
    switch (e2.name.toUpperCase()) {
      case `LINK_LABEL`:
        return t2.substring(1).trim();
      default:
        return;
    }
  }
}, r(_a, `WardleyValueConverter`), _a), l = { parser: { ValueConverter: r(() => new c(), `ValueConverter`) } };
function u(r2 = n) {
  let i2 = t(s(r2), o), c2 = t(e({ shared: i2 }), a, l);
  return i2.ServiceRegistry.register(c2), { shared: i2, Wardley: c2 };
}
r(u, `createWardleyServices`);
export {
  u as n,
  l as t
};
