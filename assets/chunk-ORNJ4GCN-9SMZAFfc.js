var _a, _b;
import { _ as e, d as t, g as n, h as r, m as i, n as a, s as o, t as s, v as c } from "./chunk-K5T4RW27-OuehT3M0.js";
var l = (_a = class extends a {
  runCustomConverter(e2, t2, n2) {
    if (e2.name === `INDENTATION`) return (t2 == null ? void 0 : t2.length) || 0;
    if (e2.name === `STRING2`) return t2.substring(1, t2.length - 1);
  }
}, i(_a, `TreeViewValueConverter`), _a), u = (_b = class extends s {
  constructor() {
    super([`treeView-beta`]);
  }
}, i(_b, `TreeViewTokenBuilder`), _b), d = { parser: { TokenBuilder: i(() => new u(), `TokenBuilder`), ValueConverter: i(() => new l(), `ValueConverter`) } };
function f(i2 = r) {
  let a2 = n(c(i2), o), s2 = n(e({ shared: a2 }), t, d);
  return a2.ServiceRegistry.register(s2), { shared: a2, TreeView: s2 };
}
i(f, `createTreeViewServices`);
export {
  f as n,
  d as t
};
