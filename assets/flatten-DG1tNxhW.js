import { c as e, t, u as n } from "./identity-IHMFXfGJ.js";
import { E as r, d as i, l as a, s as o, y as s } from "./reduce-S4_EnTW-.js";
function c(t2, n2) {
  var r2 = -1, i2 = e(t2) ? Array(t2.length) : [];
  return a(t2, function(e2, t3, a2) {
    i2[++r2] = n2(e2, t3, a2);
  }), i2;
}
var l = c;
function u(e2, t2) {
  return (n(e2) ? r : l)(e2, i(t2, 3));
}
var d = u;
function f(e2, t2, n2) {
  for (var r2 = -1, i2 = e2.length; ++r2 < i2; ) {
    var a2 = e2[r2], o2 = t2(a2);
    if (o2 != null && (c2 === void 0 ? o2 === o2 && !s(o2) : n2(o2, c2))) var c2 = o2, l2 = a2;
  }
  return l2;
}
var p = f;
function m(e2, t2) {
  return e2 < t2;
}
var h = m;
function g(e2) {
  return e2 && e2.length ? p(e2, t, h) : void 0;
}
var _ = g;
function v(e2) {
  return e2 != null && e2.length ? o(e2, 1) : [];
}
var y = v;
export {
  d as a,
  p as i,
  _ as n,
  l as o,
  h as r,
  y as t
};
