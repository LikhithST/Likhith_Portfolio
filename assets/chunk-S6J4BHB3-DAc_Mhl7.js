var _a;
import { a as e, f as t, g as n, h as r, i, m as a, p as o, s, t as c } from "./chunk-FPAJGGOC-C3gFAQ_Y.js";
var l = (_a = class extends c {
  constructor() {
    super([`gitGraph`]);
  }
}, t(_a, `GitGraphTokenBuilder`), _a), u = { parser: { TokenBuilder: t(() => new l(), `TokenBuilder`), ValueConverter: t(() => new i(), `ValueConverter`) } };
function d(t2 = o) {
  let i2 = a(n(t2), s), c2 = a(r({ shared: i2 }), e, u);
  return i2.ServiceRegistry.register(c2), { shared: i2, GitGraph: c2 };
}
t(d, `createGitGraphServices`);
export {
  d as n,
  u as t
};
