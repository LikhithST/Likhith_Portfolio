import { h as e } from "./src-BWB47EtT.js";
var t = e((e2, t2) => {
  if (t2) return `translate(` + -e2.width / 2 + `, ` + -e2.height / 2 + `)`;
  let n2 = e2.x ?? 0, r2 = e2.y ?? 0;
  return `translate(` + -(n2 + e2.width / 2) + `, ` + -(r2 + e2.height / 2) + `)`;
}, `computeLabelTransform`), n = { aggregation: 17.25, extension: 17.25, composition: 17.25, dependency: 6, lollipop: 13.5, arrow_point: 4, arrow_barb: 0, arrow_barb_neo: 5.5 }, r = { arrow_point: 4, arrow_cross: 12.5, arrow_circle: 12.5 };
function i(e2, t2) {
  if (e2 === void 0 || t2 === void 0) return { angle: 0, deltaX: 0, deltaY: 0 };
  e2 = a(e2), t2 = a(t2);
  let [n2, r2] = [e2.x, e2.y], [i2, o2] = [t2.x, t2.y], s = i2 - n2, c = o2 - r2;
  return { angle: Math.atan(c / s), deltaX: s, deltaY: c };
}
e(i, `calculateDeltaAndAngle`);
var a = e((e2) => Array.isArray(e2) ? { x: e2[0], y: e2[1] } : e2, `pointTransformer`), o = e((t2) => ({ x: e(function(e2, r2, o2) {
  let s = 0, c = a(o2[0]).x < a(o2[o2.length - 1]).x ? `left` : `right`;
  if (r2 === 0 && Object.hasOwn(n, t2.arrowTypeStart)) {
    let { angle: e3, deltaX: r3 } = i(o2[0], o2[1]);
    s = n[t2.arrowTypeStart] * Math.cos(e3) * (r3 >= 0 ? 1 : -1);
  } else if (r2 === o2.length - 1 && Object.hasOwn(n, t2.arrowTypeEnd)) {
    let { angle: e3, deltaX: r3 } = i(o2[o2.length - 1], o2[o2.length - 2]);
    s = n[t2.arrowTypeEnd] * Math.cos(e3) * (r3 >= 0 ? 1 : -1);
  }
  let l = Math.abs(a(e2).x - a(o2[o2.length - 1]).x), u = Math.abs(a(e2).y - a(o2[o2.length - 1]).y), d = Math.abs(a(e2).x - a(o2[0]).x), f = Math.abs(a(e2).y - a(o2[0]).y), p = n[t2.arrowTypeStart], m = n[t2.arrowTypeEnd];
  if (l < m && l > 0 && u < m) {
    let e3 = m + 1 - l;
    e3 *= c === `right` ? -1 : 1, s -= e3;
  }
  if (d < p && d > 0 && f < p) {
    let e3 = p + 1 - d;
    e3 *= c === `right` ? -1 : 1, s += e3;
  }
  return a(e2).x + s;
}, `x`), y: e(function(e2, r2, o2) {
  let s = 0, c = a(o2[0]).y < a(o2[o2.length - 1]).y ? `down` : `up`;
  if (r2 === 0 && Object.hasOwn(n, t2.arrowTypeStart)) {
    let { angle: e3, deltaY: r3 } = i(o2[0], o2[1]);
    s = n[t2.arrowTypeStart] * Math.abs(Math.sin(e3)) * (r3 >= 0 ? 1 : -1);
  } else if (r2 === o2.length - 1 && Object.hasOwn(n, t2.arrowTypeEnd)) {
    let { angle: e3, deltaY: r3 } = i(o2[o2.length - 1], o2[o2.length - 2]);
    s = n[t2.arrowTypeEnd] * Math.abs(Math.sin(e3)) * (r3 >= 0 ? 1 : -1);
  }
  let l = Math.abs(a(e2).y - a(o2[o2.length - 1]).y), u = Math.abs(a(e2).x - a(o2[o2.length - 1]).x), d = Math.abs(a(e2).y - a(o2[0]).y), f = Math.abs(a(e2).x - a(o2[0]).x), p = n[t2.arrowTypeStart], m = n[t2.arrowTypeEnd];
  if (l < m && l > 0 && u < m) {
    let e3 = m + 1 - l;
    e3 *= c === `up` ? -1 : 1, s -= e3;
  }
  if (d < p && d > 0 && f < p) {
    let e3 = p + 1 - d;
    e3 *= c === `up` ? -1 : 1, s += e3;
  }
  return a(e2).y + s;
}, `y`) }), `getLineFunctionsWithOffset`);
export {
  r as i,
  o as n,
  n as r,
  t
};
