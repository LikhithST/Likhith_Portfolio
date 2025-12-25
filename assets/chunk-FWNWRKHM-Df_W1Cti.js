var _a, _b, _c;
import { d as e, f as t, g as n, h as r, m as i, n as a, p as o, s, t as c } from "./chunk-FPAJGGOC-C3gFAQ_Y.js";
var l = (_a = class extends c {
  constructor() {
    super([`treemap`]);
  }
}, t(_a, `TreemapTokenBuilder`), _a), u = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/, d = (_b = class extends a {
  runCustomConverter(e2, t2, n2) {
    if (e2.name === `NUMBER2`) return parseFloat(t2.replace(/,/g, ``));
    if (e2.name === `SEPARATOR` || e2.name === `STRING2`) return t2.substring(1, t2.length - 1);
    if (e2.name === `INDENTATION`) return t2.length;
    if (e2.name === `ClassDef`) {
      if (typeof t2 != `string`) return t2;
      let e3 = u.exec(t2);
      if (e3) return { $type: `ClassDefStatement`, className: e3[1], styleText: e3[2] || void 0 };
    }
  }
}, t(_b, `TreemapValueConverter`), _b);
function f(e2) {
  let t2 = e2.validation.TreemapValidator, n2 = e2.validation.ValidationRegistry;
  if (n2) {
    let e3 = { Treemap: t2.checkSingleRoot.bind(t2) };
    n2.register(e3, t2);
  }
}
t(f, `registerValidationChecks`);
var p = (_c = class {
  checkSingleRoot(e2, t2) {
    let n2;
    for (let r2 of e2.TreemapRows) r2.item && (n2 === void 0 && r2.indent === void 0 ? n2 = 0 : (r2.indent === void 0 || n2 !== void 0 && n2 >= parseInt(r2.indent, 10)) && t2(`error`, `Multiple root nodes are not allowed in a treemap.`, { node: r2, property: `item` }));
  }
}, t(_c, `TreemapValidator`), _c), m = { parser: { TokenBuilder: t(() => new l(), `TokenBuilder`), ValueConverter: t(() => new d(), `ValueConverter`) }, validation: { TreemapValidator: t(() => new p(), `TreemapValidator`) } };
function h(t2 = o) {
  let a2 = i(n(t2), s), c2 = i(r({ shared: a2 }), e, m);
  return a2.ServiceRegistry.register(c2), f(c2), { shared: a2, Treemap: c2 };
}
t(h, `createTreemapServices`);
export {
  h as n,
  m as t
};
