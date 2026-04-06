var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e2, t2) => () => (e2 && (t2 = e2(e2 = 0)), t2), s = (e2, t2) => () => (t2 || e2((t2 = { exports: {} }).exports, t2), t2.exports), c = (e2) => {
  let n2 = {};
  for (var r2 in e2) t(n2, r2, { get: e2[r2], enumerable: true });
  return n2;
}, l = (e2, i2, o2, s2) => {
  if (i2 && typeof i2 == `object` || typeof i2 == `function`) for (var c2 = r(i2), l2 = 0, u2 = c2.length, d2; l2 < u2; l2++) d2 = c2[l2], !a.call(e2, d2) && d2 !== o2 && t(e2, d2, { get: ((e3) => i2[e3]).bind(null, d2), enumerable: !(s2 = n(i2, d2)) || s2.enumerable });
  return e2;
}, u = (e2, t2, n2) => (l(e2, t2, `default`), n2 && l(n2, t2, `default`)), d = (n2, r2, a2) => (a2 = n2 == null ? {} : e(i(n2)), l(r2 || !n2 || !n2.__esModule ? t(a2, `default`, { value: n2, enumerable: true }) : a2, n2)), f = (e2) => l(t({}, `__esModule`, { value: true }), e2);
export {
  f as a,
  u as i,
  o as n,
  d as o,
  c as r,
  s as t
};
