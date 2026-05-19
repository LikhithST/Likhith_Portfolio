var _a, _b;
import { _ as e, g as t, h as n, m as r, n as i, r as a, s as o, t as s, v as c } from "./chunk-K5T4RW27-OuehT3M0.js";
var l = (_a = class extends s {
  constructor() {
    super([`architecture`]);
  }
}, r(_a, `ArchitectureTokenBuilder`), _a), u = (_b = class extends i {
  runCustomConverter(e2, t2, n2) {
    if (e2.name === `ARCH_ICON`) return t2.replace(/[()]/g, ``).trim();
    if (e2.name === `ARCH_TEXT_ICON`) return t2.replace(/["()]/g, ``);
    if (e2.name === `ARCH_TITLE`) {
      let e3 = t2.replace(/^\[|]$/g, ``).trim();
      return (e3.startsWith(`"`) && e3.endsWith(`"`) || e3.startsWith(`'`) && e3.endsWith(`'`)) && (e3 = e3.slice(1, -1), e3 = e3.replace(/\\"/g, `"`).replace(/\\'/g, `'`)), e3.trim();
    }
  }
}, r(_b, `ArchitectureValueConverter`), _b), d = { parser: { TokenBuilder: r(() => new l(), `TokenBuilder`), ValueConverter: r(() => new u(), `ValueConverter`) } };
function f(r2 = n) {
  let i2 = t(c(r2), o), s2 = t(e({ shared: i2 }), a, d);
  return i2.ServiceRegistry.register(s2), { shared: i2, Architecture: s2 };
}
r(f, `createArchitectureServices`);
export {
  f as n,
  d as t
};
