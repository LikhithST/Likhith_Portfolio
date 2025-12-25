const e = Math.abs, t = Math.atan2, n = Math.cos, r = Math.max, i = Math.min, a = Math.sin, o = Math.sqrt, s = 1e-12, c = Math.PI, l = c / 2, u = 2 * c;
function d(e2) {
  return e2 > 1 ? 0 : e2 < -1 ? c : Math.acos(e2);
}
function f(e2) {
  return e2 >= 1 ? l : e2 <= -1 ? -l : Math.asin(e2);
}
export {
  n as a,
  r as c,
  a as d,
  o as f,
  t as i,
  i as l,
  d as n,
  s as o,
  u as p,
  f as r,
  l as s,
  e as t,
  c as u
};
