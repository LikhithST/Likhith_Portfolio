var _a, _b;
import { f as e, g as t, h as n, m as r, n as i, p as a, r as o, s, t as c } from "./chunk-FPAJGGOC-C3gFAQ_Y.js";
var l = (_a = class extends c {
  constructor() {
    super([`architecture`]);
  }
}, e(_a, `ArchitectureTokenBuilder`), _a), u = (_b = class extends i {
  runCustomConverter(e2, t2, n2) {
    if (e2.name === `ARCH_ICON`) return t2.replace(/[()]/g, ``).trim();
    if (e2.name === `ARCH_TEXT_ICON`) return t2.replace(/["()]/g, ``);
    if (e2.name === `ARCH_TITLE`) return t2.replace(/[[\]]/g, ``).trim();
  }
}, e(_b, `ArchitectureValueConverter`), _b), d = { parser: { TokenBuilder: e(() => new l(), `TokenBuilder`), ValueConverter: e(() => new u(), `ValueConverter`) } };
function f(e2 = a) {
  let i2 = r(t(e2), s), c2 = r(n({ shared: i2 }), o, d);
  return i2.ServiceRegistry.register(c2), { shared: i2, Architecture: c2 };
}
e(f, `createArchitectureServices`);
export {
  f as n,
  d as t
};
