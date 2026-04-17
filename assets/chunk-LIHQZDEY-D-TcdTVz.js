var _a, _b, _c;
import { _ as e, f as t, g as n, h as r, m as i, n as a, s as o, t as s, v as c } from "./chunk-K5T4RW27-CzljlcrI.js";
var l = (_a = class extends s {
  constructor() {
    super([`treemap`]);
  }
}, i(_a, `TreemapTokenBuilder`), _a), u = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/, d = (_b = class extends a {
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
}, i(_b, `TreemapValueConverter`), _b);
function f(e2) {
  let t2 = e2.validation.TreemapValidator, n2 = e2.validation.ValidationRegistry;
  if (n2) {
    let e3 = { Treemap: t2.checkSingleRoot.bind(t2) };
    n2.register(e3, t2);
  }
}
i(f, `registerValidationChecks`);
var p = (_c = class {
  checkSingleRoot(e2, t2) {
    let n2;
    for (let r2 of e2.TreemapRows) r2.item && (n2 === void 0 && r2.indent === void 0 ? n2 = 0 : (r2.indent === void 0 || n2 !== void 0 && n2 >= parseInt(r2.indent, 10)) && t2(`error`, `Multiple root nodes are not allowed in a treemap.`, { node: r2, property: `item` }));
  }
}, i(_c, `TreemapValidator`), _c), m = { parser: { TokenBuilder: i(() => new l(), `TokenBuilder`), ValueConverter: i(() => new d(), `ValueConverter`) }, validation: { TreemapValidator: i(() => new p(), `TreemapValidator`) } };
function h(i2 = r) {
  let a2 = n(c(i2), o), s2 = n(e({ shared: a2 }), t, m);
  return a2.ServiceRegistry.register(s2), f(s2), { shared: a2, Treemap: s2 };
}
i(h, `createTreemapServices`);
export {
  h as n,
  m as t
};
