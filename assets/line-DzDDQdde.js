import { n as e, t } from "./path-B-GLhb_8.js";
import { t as n } from "./array-CopOK-GI.js";
import { K as r } from "./chunk-S3R3BYOJ-D8yhV3IZ.js";
function i(e2) {
  return e2[0];
}
function a(e2) {
  return e2[1];
}
function o(o2, s) {
  var c = e(true), l = null, u = r, d = null, f = t(p);
  o2 = typeof o2 == `function` ? o2 : o2 === void 0 ? i : e(o2), s = typeof s == `function` ? s : s === void 0 ? a : e(s);
  function p(e2) {
    var t2, r2 = (e2 = n(e2)).length, i2, a2 = false, p2;
    for (l ?? (d = u(p2 = f())), t2 = 0; t2 <= r2; ++t2) !(t2 < r2 && c(i2 = e2[t2], t2, e2)) === a2 && ((a2 = !a2) ? d.lineStart() : d.lineEnd()), a2 && d.point(+o2(i2, t2, e2), +s(i2, t2, e2));
    if (p2) return d = null, p2 + `` || null;
  }
  return p.x = function(t2) {
    return arguments.length ? (o2 = typeof t2 == `function` ? t2 : e(+t2), p) : o2;
  }, p.y = function(t2) {
    return arguments.length ? (s = typeof t2 == `function` ? t2 : e(+t2), p) : s;
  }, p.defined = function(t2) {
    return arguments.length ? (c = typeof t2 == `function` ? t2 : e(!!t2), p) : c;
  }, p.curve = function(e2) {
    return arguments.length ? (u = e2, l != null && (d = u(l)), p) : u;
  }, p.context = function(e2) {
    return arguments.length ? (e2 == null ? l = d = null : d = u(l = e2), p) : l;
  }, p;
}
export {
  o as t
};
