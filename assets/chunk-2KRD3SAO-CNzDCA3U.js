var _a;
import { _ as e, g as t, h as n, i as r, m as i, s as a, t as o, u as s, v as c } from "./chunk-K5T4RW27-OuehT3M0.js";
var l = (_a = class extends o {
  constructor() {
    super([`radar-beta`]);
  }
}, i(_a, `RadarTokenBuilder`), _a), u = { parser: { TokenBuilder: i(() => new l(), `TokenBuilder`), ValueConverter: i(() => new r(), `ValueConverter`) } };
function d(r2 = n) {
  let i2 = t(c(r2), a), o2 = t(e({ shared: i2 }), s, u);
  return i2.ServiceRegistry.register(o2), { shared: i2, Radar: o2 };
}
i(d, `createRadarServices`);
export {
  d as n,
  u as t
};
