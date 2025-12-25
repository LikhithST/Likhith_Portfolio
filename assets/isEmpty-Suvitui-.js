import { C as e, E as t, O as n, S as r, b as i, c as a, d as o, i as s, m as c, p as l, s as u, u as d } from "./identity-IHMFXfGJ.js";
var f = c(Object.keys, Object), p = Object.prototype.hasOwnProperty;
function m(e2) {
  if (!l(e2)) return f(e2);
  var t2 = [];
  for (var n2 in Object(e2)) p.call(e2, n2) && n2 != `constructor` && t2.push(n2);
  return t2;
}
var h = m, g = r(n, `DataView`), _ = r(n, `Promise`), v = r(n, `Set`), y = r(n, `WeakMap`), b = `[object Map]`, x = `[object Object]`, S = `[object Promise]`, C = `[object Set]`, w = `[object WeakMap]`, T = `[object DataView]`, E = e(g), D = e(i), O = e(_), k = e(v), A = e(y), j = t;
(g && j(new g(new ArrayBuffer(1))) != T || i && j(new i()) != b || _ && j(_.resolve()) != S || v && j(new v()) != C || y && j(new y()) != w) && (j = function(n2) {
  var r2 = t(n2), i2 = r2 == x ? n2.constructor : void 0, a2 = i2 ? e(i2) : ``;
  if (a2) switch (a2) {
    case E:
      return T;
    case D:
      return b;
    case O:
      return S;
    case k:
      return C;
    case A:
      return w;
  }
  return r2;
});
var M = j, N = `[object Map]`, P = `[object Set]`, F = Object.prototype.hasOwnProperty;
function I(e2) {
  if (e2 == null) return true;
  if (a(e2) && (d(e2) || typeof e2 == `string` || typeof e2.splice == `function` || u(e2) || s(e2) || o(e2))) return !e2.length;
  var t2 = M(e2);
  if (t2 == N || t2 == P) return !e2.size;
  if (l(e2)) return !h(e2).length;
  for (var n2 in e2) if (F.call(e2, n2)) return false;
  return true;
}
var L = I;
export {
  h as i,
  M as n,
  v as r,
  L as t
};
