var _a;
import { _ as e, g as t, h as n, i as r, m as i, o as a, s as o, t as s, v as c } from "./chunk-K5T4RW27-OuehT3M0.js";
var l = (_a = class extends s {
  constructor() {
    super([`info`, `showInfo`]);
  }
}, i(_a, `InfoTokenBuilder`), _a), u = { parser: { TokenBuilder: i(() => new l(), `TokenBuilder`), ValueConverter: i(() => new r(), `ValueConverter`) } };
function d(r2 = n) {
  let i2 = t(c(r2), o), s2 = t(e({ shared: i2 }), a, u);
  return i2.ServiceRegistry.register(s2), { shared: i2, Info: s2 };
}
i(d, `createInfoServices`);
export {
  d as n,
  u as t
};
