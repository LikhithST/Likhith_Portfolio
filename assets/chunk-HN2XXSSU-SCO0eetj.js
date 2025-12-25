import { h as e } from "./src-D8UWkQNo.js";
var t = { aggregation: 17.25, extension: 17.25, composition: 17.25, dependency: 6, lollipop: 13.5, arrow_point: 4 }, n = { arrow_point: 9, arrow_cross: 12.5, arrow_circle: 12.5 };
function r(e2, t2) {
  if (e2 === void 0 || t2 === void 0) return { angle: 0, deltaX: 0, deltaY: 0 };
  e2 = i(e2), t2 = i(t2);
  let [n2, r2] = [e2.x, e2.y], [a2, o] = [t2.x, t2.y], s = a2 - n2, c = o - r2;
  return { angle: Math.atan(c / s), deltaX: s, deltaY: c };
}
e(r, `calculateDeltaAndAngle`);
var i = e((e2) => Array.isArray(e2) ? { x: e2[0], y: e2[1] } : e2, `pointTransformer`), a = e((n2) => ({ x: e(function(e2, a2, o) {
  let s = 0, c = i(o[0]).x < i(o[o.length - 1]).x ? `left` : `right`;
  if (a2 === 0 && Object.hasOwn(t, n2.arrowTypeStart)) {
    let { angle: e3, deltaX: i2 } = r(o[0], o[1]);
    s = t[n2.arrowTypeStart] * Math.cos(e3) * (i2 >= 0 ? 1 : -1);
  } else if (a2 === o.length - 1 && Object.hasOwn(t, n2.arrowTypeEnd)) {
    let { angle: e3, deltaX: i2 } = r(o[o.length - 1], o[o.length - 2]);
    s = t[n2.arrowTypeEnd] * Math.cos(e3) * (i2 >= 0 ? 1 : -1);
  }
  let l = Math.abs(i(e2).x - i(o[o.length - 1]).x), u = Math.abs(i(e2).y - i(o[o.length - 1]).y), d = Math.abs(i(e2).x - i(o[0]).x), f = Math.abs(i(e2).y - i(o[0]).y), p = t[n2.arrowTypeStart], m = t[n2.arrowTypeEnd];
  if (l < m && l > 0 && u < m) {
    let e3 = m + 1 - l;
    e3 *= c === `right` ? -1 : 1, s -= e3;
  }
  if (d < p && d > 0 && f < p) {
    let e3 = p + 1 - d;
    e3 *= c === `right` ? -1 : 1, s += e3;
  }
  return i(e2).x + s;
}, `x`), y: e(function(e2, a2, o) {
  let s = 0, c = i(o[0]).y < i(o[o.length - 1]).y ? `down` : `up`;
  if (a2 === 0 && Object.hasOwn(t, n2.arrowTypeStart)) {
    let { angle: e3, deltaY: i2 } = r(o[0], o[1]);
    s = t[n2.arrowTypeStart] * Math.abs(Math.sin(e3)) * (i2 >= 0 ? 1 : -1);
  } else if (a2 === o.length - 1 && Object.hasOwn(t, n2.arrowTypeEnd)) {
    let { angle: e3, deltaY: i2 } = r(o[o.length - 1], o[o.length - 2]);
    s = t[n2.arrowTypeEnd] * Math.abs(Math.sin(e3)) * (i2 >= 0 ? 1 : -1);
  }
  let l = Math.abs(i(e2).y - i(o[o.length - 1]).y), u = Math.abs(i(e2).x - i(o[o.length - 1]).x), d = Math.abs(i(e2).y - i(o[0]).y), f = Math.abs(i(e2).x - i(o[0]).x), p = t[n2.arrowTypeStart], m = t[n2.arrowTypeEnd];
  if (l < m && l > 0 && u < m) {
    let e3 = m + 1 - l;
    e3 *= c === `up` ? -1 : 1, s -= e3;
  }
  if (d < p && d > 0 && f < p) {
    let e3 = p + 1 - d;
    e3 *= c === `up` ? -1 : 1, s += e3;
  }
  return i(e2).y + s;
}, `y`) }), `getLineFunctionsWithOffset`);
export {
  t as n,
  n as r,
  a as t
};
