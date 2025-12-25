import { A as e, I as t, L as n, N as r, O as i, b as a, d as o, h as s, s as c, y as l } from "./chunk-ABZYJK2D-ODb6qSou.js";
import { g as u, h as d, p as f } from "./src-D8UWkQNo.js";
import { a as p, p as m, r as h, u as g } from "./chunk-S3R3BYOJ-D8yhV3IZ.js";
import { t as _ } from "./chunk-CVBHYZKI-9IS-TY3G.js";
import { a as v, i as y, r as b, t as x } from "./chunk-ATLVNIR6-6j91LnhU.js";
import { n as S, r as C } from "./chunk-JA3XYJ7Z-By1gQAUK.js";
function w(e2, t2, n2) {
  if (e2 && e2.length) {
    let [r2, i2] = t2, a2 = Math.PI / 180 * n2, o2 = Math.cos(a2), s2 = Math.sin(a2);
    for (let t3 of e2) {
      let [e3, n3] = t3;
      t3[0] = (e3 - r2) * o2 - (n3 - i2) * s2 + r2, t3[1] = (e3 - r2) * s2 + (n3 - i2) * o2 + i2;
    }
  }
}
function T(e2, t2) {
  return e2[0] === t2[0] && e2[1] === t2[1];
}
function E(e2, t2, n2, r2 = 1) {
  let i2 = n2, a2 = Math.max(t2, 0.1), o2 = e2[0] && e2[0][0] && typeof e2[0][0] == `number` ? [e2] : e2, s2 = [0, 0];
  if (i2) for (let e3 of o2) w(e3, s2, i2);
  let c2 = (function(e3, t3, n3) {
    let r3 = [];
    for (let t4 of e3) {
      let e4 = [...t4];
      T(e4[0], e4[e4.length - 1]) || e4.push([e4[0][0], e4[0][1]]), e4.length > 2 && r3.push(e4);
    }
    let i3 = [];
    t3 = Math.max(t3, 0.1);
    let a3 = [];
    for (let e4 of r3) for (let t4 = 0; t4 < e4.length - 1; t4++) {
      let n4 = e4[t4], r4 = e4[t4 + 1];
      if (n4[1] !== r4[1]) {
        let e5 = Math.min(n4[1], r4[1]);
        a3.push({ ymin: e5, ymax: Math.max(n4[1], r4[1]), x: e5 === n4[1] ? n4[0] : r4[0], islope: (r4[0] - n4[0]) / (r4[1] - n4[1]) });
      }
    }
    if (a3.sort(((e4, t4) => e4.ymin < t4.ymin ? -1 : e4.ymin > t4.ymin ? 1 : e4.x < t4.x ? -1 : e4.x > t4.x ? 1 : e4.ymax === t4.ymax ? 0 : (e4.ymax - t4.ymax) / Math.abs(e4.ymax - t4.ymax))), !a3.length) return i3;
    let o3 = [], s3 = a3[0].ymin, c3 = 0;
    for (; o3.length || a3.length; ) {
      if (a3.length) {
        let e4 = -1;
        for (let t4 = 0; t4 < a3.length && !(a3[t4].ymin > s3); t4++) e4 = t4;
        a3.splice(0, e4 + 1).forEach(((e5) => {
          o3.push({ s: s3, edge: e5 });
        }));
      }
      if (o3 = o3.filter(((e4) => !(e4.edge.ymax <= s3))), o3.sort(((e4, t4) => e4.edge.x === t4.edge.x ? 0 : (e4.edge.x - t4.edge.x) / Math.abs(e4.edge.x - t4.edge.x))), (n3 !== 1 || c3 % t3 == 0) && o3.length > 1) for (let e4 = 0; e4 < o3.length; e4 += 2) {
        let t4 = e4 + 1;
        if (t4 >= o3.length) break;
        let n4 = o3[e4].edge, r4 = o3[t4].edge;
        i3.push([[Math.round(n4.x), s3], [Math.round(r4.x), s3]]);
      }
      s3 += n3, o3.forEach(((e4) => {
        e4.edge.x = e4.edge.x + n3 * e4.edge.islope;
      })), c3++;
    }
    return i3;
  })(o2, a2, r2);
  if (i2) {
    for (let e3 of o2) w(e3, s2, -i2);
    (function(e3, t3, n3) {
      let r3 = [];
      e3.forEach(((e4) => r3.push(...e4))), w(r3, t3, n3);
    })(c2, s2, -i2);
  }
  return c2;
}
function D(e2, t2) {
  var _a;
  let n2 = t2.hachureAngle + 90, r2 = t2.hachureGap;
  r2 < 0 && (r2 = 4 * t2.strokeWidth), r2 = Math.round(Math.max(r2, 0.1));
  let i2 = 1;
  return t2.roughness >= 1 && (((_a = t2.randomizer) == null ? void 0 : _a.next()) || Math.random()) > 0.7 && (i2 = r2), E(e2, r2, n2, i2 || 1);
}
var O = class {
  constructor(e2) {
    this.helper = e2;
  }
  fillPolygons(e2, t2) {
    return this._fillPolygons(e2, t2);
  }
  _fillPolygons(e2, t2) {
    let n2 = D(e2, t2);
    return { type: `fillSketch`, ops: this.renderLines(n2, t2) };
  }
  renderLines(e2, t2) {
    let n2 = [];
    for (let r2 of e2) n2.push(...this.helper.doubleLineOps(r2[0][0], r2[0][1], r2[1][0], r2[1][1], t2));
    return n2;
  }
};
function k(e2) {
  let t2 = e2[0], n2 = e2[1];
  return Math.sqrt((t2[0] - n2[0]) ** 2 + (t2[1] - n2[1]) ** 2);
}
var A = class extends O {
  fillPolygons(e2, t2) {
    let n2 = t2.hachureGap;
    n2 < 0 && (n2 = 4 * t2.strokeWidth), n2 = Math.max(n2, 0.1);
    let r2 = D(e2, Object.assign({}, t2, { hachureGap: n2 })), i2 = Math.PI / 180 * t2.hachureAngle, a2 = [], o2 = 0.5 * n2 * Math.cos(i2), s2 = 0.5 * n2 * Math.sin(i2);
    for (let [e3, t3] of r2) k([e3, t3]) && a2.push([[e3[0] - o2, e3[1] + s2], [...t3]], [[e3[0] + o2, e3[1] - s2], [...t3]]);
    return { type: `fillSketch`, ops: this.renderLines(a2, t2) };
  }
}, j = class extends O {
  fillPolygons(e2, t2) {
    let n2 = this._fillPolygons(e2, t2), r2 = Object.assign({}, t2, { hachureAngle: t2.hachureAngle + 90 }), i2 = this._fillPolygons(e2, r2);
    return n2.ops = n2.ops.concat(i2.ops), n2;
  }
}, M = class {
  constructor(e2) {
    this.helper = e2;
  }
  fillPolygons(e2, t2) {
    let n2 = D(e2, t2 = Object.assign({}, t2, { hachureAngle: 0 }));
    return this.dotsOnLines(n2, t2);
  }
  dotsOnLines(e2, t2) {
    let n2 = [], r2 = t2.hachureGap;
    r2 < 0 && (r2 = 4 * t2.strokeWidth), r2 = Math.max(r2, 0.1);
    let i2 = t2.fillWeight;
    i2 < 0 && (i2 = t2.strokeWidth / 2);
    let a2 = r2 / 4;
    for (let o2 of e2) {
      let e3 = k(o2), s2 = e3 / r2, c2 = Math.ceil(s2) - 1, l2 = e3 - c2 * r2, u2 = (o2[0][0] + o2[1][0]) / 2 - r2 / 4, d2 = Math.min(o2[0][1], o2[1][1]);
      for (let e4 = 0; e4 < c2; e4++) {
        let o3 = d2 + l2 + e4 * r2, s3 = u2 - a2 + 2 * Math.random() * a2, c3 = o3 - a2 + 2 * Math.random() * a2, f2 = this.helper.ellipse(s3, c3, i2, i2, t2);
        n2.push(...f2.ops);
      }
    }
    return { type: `fillSketch`, ops: n2 };
  }
}, N = class {
  constructor(e2) {
    this.helper = e2;
  }
  fillPolygons(e2, t2) {
    let n2 = D(e2, t2);
    return { type: `fillSketch`, ops: this.dashedLine(n2, t2) };
  }
  dashedLine(e2, t2) {
    let n2 = t2.dashOffset < 0 ? t2.hachureGap < 0 ? 4 * t2.strokeWidth : t2.hachureGap : t2.dashOffset, r2 = t2.dashGap < 0 ? t2.hachureGap < 0 ? 4 * t2.strokeWidth : t2.hachureGap : t2.dashGap, i2 = [];
    return e2.forEach(((e3) => {
      let a2 = k(e3), o2 = Math.floor(a2 / (n2 + r2)), s2 = (a2 + r2 - o2 * (n2 + r2)) / 2, c2 = e3[0], l2 = e3[1];
      c2[0] > l2[0] && (c2 = e3[1], l2 = e3[0]);
      let u2 = Math.atan((l2[1] - c2[1]) / (l2[0] - c2[0]));
      for (let e4 = 0; e4 < o2; e4++) {
        let a3 = e4 * (n2 + r2), o3 = a3 + n2, l3 = [c2[0] + a3 * Math.cos(u2) + s2 * Math.cos(u2), c2[1] + a3 * Math.sin(u2) + s2 * Math.sin(u2)], d2 = [c2[0] + o3 * Math.cos(u2) + s2 * Math.cos(u2), c2[1] + o3 * Math.sin(u2) + s2 * Math.sin(u2)];
        i2.push(...this.helper.doubleLineOps(l3[0], l3[1], d2[0], d2[1], t2));
      }
    })), i2;
  }
}, P = class {
  constructor(e2) {
    this.helper = e2;
  }
  fillPolygons(e2, t2) {
    let n2 = t2.hachureGap < 0 ? 4 * t2.strokeWidth : t2.hachureGap, r2 = t2.zigzagOffset < 0 ? n2 : t2.zigzagOffset, i2 = D(e2, t2 = Object.assign({}, t2, { hachureGap: n2 + r2 }));
    return { type: `fillSketch`, ops: this.zigzagLines(i2, r2, t2) };
  }
  zigzagLines(e2, t2, n2) {
    let r2 = [];
    return e2.forEach(((e3) => {
      let i2 = k(e3), a2 = Math.round(i2 / (2 * t2)), o2 = e3[0], s2 = e3[1];
      o2[0] > s2[0] && (o2 = e3[1], s2 = e3[0]);
      let c2 = Math.atan((s2[1] - o2[1]) / (s2[0] - o2[0]));
      for (let e4 = 0; e4 < a2; e4++) {
        let i3 = 2 * e4 * t2, a3 = 2 * (e4 + 1) * t2, s3 = Math.sqrt(2 * t2 ** 2), l2 = [o2[0] + i3 * Math.cos(c2), o2[1] + i3 * Math.sin(c2)], u2 = [o2[0] + a3 * Math.cos(c2), o2[1] + a3 * Math.sin(c2)], d2 = [l2[0] + s3 * Math.cos(c2 + Math.PI / 4), l2[1] + s3 * Math.sin(c2 + Math.PI / 4)];
        r2.push(...this.helper.doubleLineOps(l2[0], l2[1], d2[0], d2[1], n2), ...this.helper.doubleLineOps(d2[0], d2[1], u2[0], u2[1], n2));
      }
    })), r2;
  }
}, F = {}, I = class {
  constructor(e2) {
    this.seed = e2;
  }
  next() {
    return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
  }
}, ee = 0, te = 1, ne = 2, re = { A: 7, a: 7, C: 6, c: 6, H: 1, h: 1, L: 2, l: 2, M: 2, m: 2, Q: 4, q: 4, S: 4, s: 4, T: 2, t: 2, V: 1, v: 1, Z: 0, z: 0 };
function ie(e2, t2) {
  return e2.type === t2;
}
function ae(e2) {
  let t2 = [], n2 = (function(e3) {
    let t3 = [];
    for (; e3 !== ``; ) if (e3.match(/^([ \t\r\n,]+)/)) e3 = e3.substr(RegExp.$1.length);
    else if (e3.match(/^([aAcChHlLmMqQsStTvVzZ])/)) t3[t3.length] = { type: ee, text: RegExp.$1 }, e3 = e3.substr(RegExp.$1.length);
    else {
      if (!e3.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
      t3[t3.length] = { type: te, text: `${parseFloat(RegExp.$1)}` }, e3 = e3.substr(RegExp.$1.length);
    }
    return t3[t3.length] = { type: ne, text: `` }, t3;
  })(e2), r2 = `BOD`, i2 = 0, a2 = n2[i2];
  for (; !ie(a2, ne); ) {
    let o2 = 0, s2 = [];
    if (r2 === `BOD`) {
      if (a2.text !== `M` && a2.text !== `m`) return ae(`M0,0` + e2);
      i2++, o2 = re[a2.text], r2 = a2.text;
    } else ie(a2, te) ? o2 = re[r2] : (i2++, o2 = re[a2.text], r2 = a2.text);
    if (!(i2 + o2 < n2.length)) throw Error(`Path data ended short`);
    for (let e3 = i2; e3 < i2 + o2; e3++) {
      let t3 = n2[e3];
      if (!ie(t3, te)) throw Error(`Param not a number: ` + r2 + `,` + t3.text);
      s2[s2.length] = +t3.text;
    }
    if (typeof re[r2] != `number`) throw Error(`Bad segment: ` + r2);
    {
      let e3 = { key: r2, data: s2 };
      t2.push(e3), i2 += o2, a2 = n2[i2], r2 === `M` && (r2 = `L`), r2 === `m` && (r2 = `l`);
    }
  }
  return t2;
}
function L(e2) {
  let t2 = 0, n2 = 0, r2 = 0, i2 = 0, a2 = [];
  for (let { key: o2, data: s2 } of e2) switch (o2) {
    case `M`:
      a2.push({ key: `M`, data: [...s2] }), [t2, n2] = s2, [r2, i2] = s2;
      break;
    case `m`:
      t2 += s2[0], n2 += s2[1], a2.push({ key: `M`, data: [t2, n2] }), r2 = t2, i2 = n2;
      break;
    case `L`:
      a2.push({ key: `L`, data: [...s2] }), [t2, n2] = s2;
      break;
    case `l`:
      t2 += s2[0], n2 += s2[1], a2.push({ key: `L`, data: [t2, n2] });
      break;
    case `C`:
      a2.push({ key: `C`, data: [...s2] }), t2 = s2[4], n2 = s2[5];
      break;
    case `c`: {
      let e3 = s2.map(((e4, r3) => r3 % 2 ? e4 + n2 : e4 + t2));
      a2.push({ key: `C`, data: e3 }), t2 = e3[4], n2 = e3[5];
      break;
    }
    case `Q`:
      a2.push({ key: `Q`, data: [...s2] }), t2 = s2[2], n2 = s2[3];
      break;
    case `q`: {
      let e3 = s2.map(((e4, r3) => r3 % 2 ? e4 + n2 : e4 + t2));
      a2.push({ key: `Q`, data: e3 }), t2 = e3[2], n2 = e3[3];
      break;
    }
    case `A`:
      a2.push({ key: `A`, data: [...s2] }), t2 = s2[5], n2 = s2[6];
      break;
    case `a`:
      t2 += s2[5], n2 += s2[6], a2.push({ key: `A`, data: [s2[0], s2[1], s2[2], s2[3], s2[4], t2, n2] });
      break;
    case `H`:
      a2.push({ key: `H`, data: [...s2] }), t2 = s2[0];
      break;
    case `h`:
      t2 += s2[0], a2.push({ key: `H`, data: [t2] });
      break;
    case `V`:
      a2.push({ key: `V`, data: [...s2] }), n2 = s2[0];
      break;
    case `v`:
      n2 += s2[0], a2.push({ key: `V`, data: [n2] });
      break;
    case `S`:
      a2.push({ key: `S`, data: [...s2] }), t2 = s2[2], n2 = s2[3];
      break;
    case `s`: {
      let e3 = s2.map(((e4, r3) => r3 % 2 ? e4 + n2 : e4 + t2));
      a2.push({ key: `S`, data: e3 }), t2 = e3[2], n2 = e3[3];
      break;
    }
    case `T`:
      a2.push({ key: `T`, data: [...s2] }), t2 = s2[0], n2 = s2[1];
      break;
    case `t`:
      t2 += s2[0], n2 += s2[1], a2.push({ key: `T`, data: [t2, n2] });
      break;
    case `Z`:
    case `z`:
      a2.push({ key: `Z`, data: [] }), t2 = r2, n2 = i2;
  }
  return a2;
}
function oe(e2) {
  let t2 = [], n2 = ``, r2 = 0, i2 = 0, a2 = 0, o2 = 0, s2 = 0, c2 = 0;
  for (let { key: l2, data: u2 } of e2) {
    switch (l2) {
      case `M`:
        t2.push({ key: `M`, data: [...u2] }), [r2, i2] = u2, [a2, o2] = u2;
        break;
      case `C`:
        t2.push({ key: `C`, data: [...u2] }), r2 = u2[4], i2 = u2[5], s2 = u2[2], c2 = u2[3];
        break;
      case `L`:
        t2.push({ key: `L`, data: [...u2] }), [r2, i2] = u2;
        break;
      case `H`:
        r2 = u2[0], t2.push({ key: `L`, data: [r2, i2] });
        break;
      case `V`:
        i2 = u2[0], t2.push({ key: `L`, data: [r2, i2] });
        break;
      case `S`: {
        let e3 = 0, a3 = 0;
        n2 === `C` || n2 === `S` ? (e3 = r2 + (r2 - s2), a3 = i2 + (i2 - c2)) : (e3 = r2, a3 = i2), t2.push({ key: `C`, data: [e3, a3, ...u2] }), s2 = u2[0], c2 = u2[1], r2 = u2[2], i2 = u2[3];
        break;
      }
      case `T`: {
        let [e3, a3] = u2, o3 = 0, l3 = 0;
        n2 === `Q` || n2 === `T` ? (o3 = r2 + (r2 - s2), l3 = i2 + (i2 - c2)) : (o3 = r2, l3 = i2);
        let d2 = r2 + 2 * (o3 - r2) / 3, f2 = i2 + 2 * (l3 - i2) / 3, p2 = e3 + 2 * (o3 - e3) / 3, m2 = a3 + 2 * (l3 - a3) / 3;
        t2.push({ key: `C`, data: [d2, f2, p2, m2, e3, a3] }), s2 = o3, c2 = l3, r2 = e3, i2 = a3;
        break;
      }
      case `Q`: {
        let [e3, n3, a3, o3] = u2, l3 = r2 + 2 * (e3 - r2) / 3, d2 = i2 + 2 * (n3 - i2) / 3, f2 = a3 + 2 * (e3 - a3) / 3, p2 = o3 + 2 * (n3 - o3) / 3;
        t2.push({ key: `C`, data: [l3, d2, f2, p2, a3, o3] }), s2 = e3, c2 = n3, r2 = a3, i2 = o3;
        break;
      }
      case `A`: {
        let e3 = Math.abs(u2[0]), n3 = Math.abs(u2[1]), a3 = u2[2], o3 = u2[3], s3 = u2[4], c3 = u2[5], l3 = u2[6];
        e3 === 0 || n3 === 0 ? (t2.push({ key: `C`, data: [r2, i2, c3, l3, c3, l3] }), r2 = c3, i2 = l3) : (r2 !== c3 || i2 !== l3) && (ce(r2, i2, c3, l3, e3, n3, a3, o3, s3).forEach((function(e4) {
          t2.push({ key: `C`, data: e4 });
        })), r2 = c3, i2 = l3);
        break;
      }
      case `Z`:
        t2.push({ key: `Z`, data: [] }), r2 = a2, i2 = o2;
    }
    n2 = l2;
  }
  return t2;
}
function se(e2, t2, n2) {
  return [e2 * Math.cos(n2) - t2 * Math.sin(n2), e2 * Math.sin(n2) + t2 * Math.cos(n2)];
}
function ce(e2, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
  let u2 = (d2 = o2, Math.PI * d2 / 180);
  var d2;
  let f2 = [], p2 = 0, m2 = 0, h2 = 0, g2 = 0;
  if (l2) [p2, m2, h2, g2] = l2;
  else {
    [e2, t2] = se(e2, t2, -u2), [n2, r2] = se(n2, r2, -u2);
    let o3 = (e2 - n2) / 2, l3 = (t2 - r2) / 2, d3 = o3 * o3 / (i2 * i2) + l3 * l3 / (a2 * a2);
    d3 > 1 && (d3 = Math.sqrt(d3), i2 *= d3, a2 *= d3);
    let f3 = i2 * i2, _3 = a2 * a2, v3 = f3 * _3 - f3 * l3 * l3 - _3 * o3 * o3, y3 = f3 * l3 * l3 + _3 * o3 * o3, b3 = (s2 === c2 ? -1 : 1) * Math.sqrt(Math.abs(v3 / y3));
    h2 = b3 * i2 * l3 / a2 + (e2 + n2) / 2, g2 = b3 * -a2 * o3 / i2 + (t2 + r2) / 2, p2 = Math.asin(parseFloat(((t2 - g2) / a2).toFixed(9))), m2 = Math.asin(parseFloat(((r2 - g2) / a2).toFixed(9))), e2 < h2 && (p2 = Math.PI - p2), n2 < h2 && (m2 = Math.PI - m2), p2 < 0 && (p2 = 2 * Math.PI + p2), m2 < 0 && (m2 = 2 * Math.PI + m2), c2 && p2 > m2 && (p2 -= 2 * Math.PI), !c2 && m2 > p2 && (m2 -= 2 * Math.PI);
  }
  let _2 = m2 - p2;
  if (Math.abs(_2) > 120 * Math.PI / 180) {
    let e3 = m2, t3 = n2, s3 = r2;
    m2 = c2 && m2 > p2 ? p2 + 120 * Math.PI / 180 * 1 : p2 + 120 * Math.PI / 180 * -1, f2 = ce(n2 = h2 + i2 * Math.cos(m2), r2 = g2 + a2 * Math.sin(m2), t3, s3, i2, a2, o2, 0, c2, [m2, e3, h2, g2]);
  }
  _2 = m2 - p2;
  let v2 = Math.cos(p2), y2 = Math.sin(p2), b2 = Math.cos(m2), x2 = Math.sin(m2), S2 = Math.tan(_2 / 4), C2 = 4 / 3 * i2 * S2, w2 = 4 / 3 * a2 * S2, T2 = [e2, t2], E2 = [e2 + C2 * y2, t2 - w2 * v2], D2 = [n2 + C2 * x2, r2 - w2 * b2], O2 = [n2, r2];
  if (E2[0] = 2 * T2[0] - E2[0], E2[1] = 2 * T2[1] - E2[1], l2) return [E2, D2, O2].concat(f2);
  {
    f2 = [E2, D2, O2].concat(f2);
    let e3 = [];
    for (let t3 = 0; t3 < f2.length; t3 += 3) {
      let n3 = se(f2[t3][0], f2[t3][1], u2), r3 = se(f2[t3 + 1][0], f2[t3 + 1][1], u2), i3 = se(f2[t3 + 2][0], f2[t3 + 2][1], u2);
      e3.push([n3[0], n3[1], r3[0], r3[1], i3[0], i3[1]]);
    }
    return e3;
  }
}
var le = { randOffset: function(e2, t2) {
  return R(e2, t2);
}, randOffsetWithRange: function(e2, t2, n2) {
  return Se(e2, t2, n2);
}, ellipse: function(e2, t2, n2, r2, i2) {
  return he(e2, t2, i2, me(n2, r2, i2)).opset;
}, doubleLineOps: function(e2, t2, n2, r2, i2) {
  return z(e2, t2, n2, r2, i2, true);
} };
function ue(e2, t2, n2, r2, i2) {
  return { type: `path`, ops: z(e2, t2, n2, r2, i2) };
}
function de(e2, t2, n2) {
  let r2 = (e2 || []).length;
  if (r2 > 2) {
    let i2 = [];
    for (let t3 = 0; t3 < r2 - 1; t3++) i2.push(...z(e2[t3][0], e2[t3][1], e2[t3 + 1][0], e2[t3 + 1][1], n2));
    return t2 && i2.push(...z(e2[r2 - 1][0], e2[r2 - 1][1], e2[0][0], e2[0][1], n2)), { type: `path`, ops: i2 };
  }
  return r2 === 2 ? ue(e2[0][0], e2[0][1], e2[1][0], e2[1][1], n2) : { type: `path`, ops: [] };
}
function fe(e2, t2, n2, r2, i2) {
  return (function(e3, t3) {
    return de(e3, true, t3);
  })([[e2, t2], [e2 + n2, t2], [e2 + n2, t2 + r2], [e2, t2 + r2]], i2);
}
function pe(e2, t2) {
  if (e2.length) {
    let n2 = typeof e2[0][0] == `number` ? [e2] : e2, r2 = we(n2[0], 1 * (1 + 0.2 * t2.roughness), t2), i2 = t2.disableMultiStroke ? [] : we(n2[0], 1.5 * (1 + 0.22 * t2.roughness), be(t2));
    for (let e3 = 1; e3 < n2.length; e3++) {
      let a2 = n2[e3];
      if (a2.length) {
        let e4 = we(a2, 1 * (1 + 0.2 * t2.roughness), t2), n3 = t2.disableMultiStroke ? [] : we(a2, 1.5 * (1 + 0.22 * t2.roughness), be(t2));
        for (let t3 of e4) t3.op !== `move` && r2.push(t3);
        for (let e5 of n3) e5.op !== `move` && i2.push(e5);
      }
    }
    return { type: `path`, ops: r2.concat(i2) };
  }
  return { type: `path`, ops: [] };
}
function me(e2, t2, n2) {
  let r2 = Math.sqrt(2 * Math.PI * Math.sqrt(((e2 / 2) ** 2 + (t2 / 2) ** 2) / 2)), i2 = Math.ceil(Math.max(n2.curveStepCount, n2.curveStepCount / Math.sqrt(200) * r2)), a2 = 2 * Math.PI / i2, o2 = Math.abs(e2 / 2), s2 = Math.abs(t2 / 2), c2 = 1 - n2.curveFitting;
  return o2 += R(o2 * c2, n2), s2 += R(s2 * c2, n2), { increment: a2, rx: o2, ry: s2 };
}
function he(e2, t2, n2, r2) {
  let [i2, a2] = Ee(r2.increment, e2, t2, r2.rx, r2.ry, 1, r2.increment * Se(0.1, Se(0.4, 1, n2), n2), n2), o2 = Te(i2, null, n2);
  if (!n2.disableMultiStroke && n2.roughness !== 0) {
    let [i3] = Ee(r2.increment, e2, t2, r2.rx, r2.ry, 1.5, 0, n2), a3 = Te(i3, null, n2);
    o2 = o2.concat(a3);
  }
  return { estimatedPoints: a2, opset: { type: `path`, ops: o2 } };
}
function ge(e2, t2, n2, r2, i2, a2, o2, s2, c2) {
  let l2 = e2, u2 = t2, d2 = Math.abs(n2 / 2), f2 = Math.abs(r2 / 2);
  d2 += R(0.01 * d2, c2), f2 += R(0.01 * f2, c2);
  let p2 = i2, m2 = a2;
  for (; p2 < 0; ) p2 += 2 * Math.PI, m2 += 2 * Math.PI;
  m2 - p2 > 2 * Math.PI && (p2 = 0, m2 = 2 * Math.PI);
  let h2 = 2 * Math.PI / c2.curveStepCount, g2 = Math.min(h2 / 2, (m2 - p2) / 2), _2 = De(g2, l2, u2, d2, f2, p2, m2, 1, c2);
  if (!c2.disableMultiStroke) {
    let e3 = De(g2, l2, u2, d2, f2, p2, m2, 1.5, c2);
    _2.push(...e3);
  }
  return o2 && (s2 ? _2.push(...z(l2, u2, l2 + d2 * Math.cos(p2), u2 + f2 * Math.sin(p2), c2), ...z(l2, u2, l2 + d2 * Math.cos(m2), u2 + f2 * Math.sin(m2), c2)) : _2.push({ op: `lineTo`, data: [l2, u2] }, { op: `lineTo`, data: [l2 + d2 * Math.cos(p2), u2 + f2 * Math.sin(p2)] })), { type: `path`, ops: _2 };
}
function _e(e2, t2) {
  let n2 = oe(L(ae(e2))), r2 = [], i2 = [0, 0], a2 = [0, 0];
  for (let { key: e3, data: o2 } of n2) switch (e3) {
    case `M`:
      a2 = [o2[0], o2[1]], i2 = [o2[0], o2[1]];
      break;
    case `L`:
      r2.push(...z(a2[0], a2[1], o2[0], o2[1], t2)), a2 = [o2[0], o2[1]];
      break;
    case `C`: {
      let [e4, n3, i3, s2, c2, l2] = o2;
      r2.push(...Oe(e4, n3, i3, s2, c2, l2, a2, t2)), a2 = [c2, l2];
      break;
    }
    case `Z`:
      r2.push(...z(a2[0], a2[1], i2[0], i2[1], t2)), a2 = [i2[0], i2[1]];
  }
  return { type: `path`, ops: r2 };
}
function ve(e2, t2) {
  let n2 = [];
  for (let r2 of e2) if (r2.length) {
    let e3 = t2.maxRandomnessOffset || 0, i2 = r2.length;
    if (i2 > 2) {
      n2.push({ op: `move`, data: [r2[0][0] + R(e3, t2), r2[0][1] + R(e3, t2)] });
      for (let a2 = 1; a2 < i2; a2++) n2.push({ op: `lineTo`, data: [r2[a2][0] + R(e3, t2), r2[a2][1] + R(e3, t2)] });
    }
  }
  return { type: `fillPath`, ops: n2 };
}
function ye(e2, t2) {
  return (function(e3, t3) {
    let n2 = e3.fillStyle || `hachure`;
    if (!F[n2]) switch (n2) {
      case `zigzag`:
        F[n2] || (F[n2] = new A(t3));
        break;
      case `cross-hatch`:
        F[n2] || (F[n2] = new j(t3));
        break;
      case `dots`:
        F[n2] || (F[n2] = new M(t3));
        break;
      case `dashed`:
        F[n2] || (F[n2] = new N(t3));
        break;
      case `zigzag-line`:
        F[n2] || (F[n2] = new P(t3));
        break;
      default:
        n2 = `hachure`, F[n2] || (F[n2] = new O(t3));
    }
    return F[n2];
  })(t2, le).fillPolygons(e2, t2);
}
function be(e2) {
  let t2 = Object.assign({}, e2);
  return t2.randomizer = void 0, e2.seed && (t2.seed = e2.seed + 1), t2;
}
function xe(e2) {
  return e2.randomizer || (e2.randomizer = new I(e2.seed || 0)), e2.randomizer.next();
}
function Se(e2, t2, n2, r2 = 1) {
  return n2.roughness * r2 * (xe(n2) * (t2 - e2) + e2);
}
function R(e2, t2, n2 = 1) {
  return Se(-e2, e2, t2, n2);
}
function z(e2, t2, n2, r2, i2, a2 = false) {
  let o2 = a2 ? i2.disableMultiStrokeFill : i2.disableMultiStroke, s2 = Ce(e2, t2, n2, r2, i2, true, false);
  if (o2) return s2;
  let c2 = Ce(e2, t2, n2, r2, i2, true, true);
  return s2.concat(c2);
}
function Ce(e2, t2, n2, r2, i2, a2, o2) {
  let s2 = (e2 - n2) ** 2 + (t2 - r2) ** 2, c2 = Math.sqrt(s2), l2 = 1;
  l2 = c2 < 200 ? 1 : c2 > 500 ? 0.4 : -16668e-7 * c2 + 1.233334;
  let u2 = i2.maxRandomnessOffset || 0;
  u2 * u2 * 100 > s2 && (u2 = c2 / 10);
  let d2 = u2 / 2, f2 = 0.2 + 0.2 * xe(i2), p2 = i2.bowing * i2.maxRandomnessOffset * (r2 - t2) / 200, m2 = i2.bowing * i2.maxRandomnessOffset * (e2 - n2) / 200;
  p2 = R(p2, i2, l2), m2 = R(m2, i2, l2);
  let h2 = [], g2 = () => R(d2, i2, l2), _2 = () => R(u2, i2, l2), v2 = i2.preserveVertices;
  return a2 && (o2 ? h2.push({ op: `move`, data: [e2 + (v2 ? 0 : g2()), t2 + (v2 ? 0 : g2())] }) : h2.push({ op: `move`, data: [e2 + (v2 ? 0 : R(u2, i2, l2)), t2 + (v2 ? 0 : R(u2, i2, l2))] })), o2 ? h2.push({ op: `bcurveTo`, data: [p2 + e2 + (n2 - e2) * f2 + g2(), m2 + t2 + (r2 - t2) * f2 + g2(), p2 + e2 + 2 * (n2 - e2) * f2 + g2(), m2 + t2 + 2 * (r2 - t2) * f2 + g2(), n2 + (v2 ? 0 : g2()), r2 + (v2 ? 0 : g2())] }) : h2.push({ op: `bcurveTo`, data: [p2 + e2 + (n2 - e2) * f2 + _2(), m2 + t2 + (r2 - t2) * f2 + _2(), p2 + e2 + 2 * (n2 - e2) * f2 + _2(), m2 + t2 + 2 * (r2 - t2) * f2 + _2(), n2 + (v2 ? 0 : _2()), r2 + (v2 ? 0 : _2())] }), h2;
}
function we(e2, t2, n2) {
  if (!e2.length) return [];
  let r2 = [];
  r2.push([e2[0][0] + R(t2, n2), e2[0][1] + R(t2, n2)]), r2.push([e2[0][0] + R(t2, n2), e2[0][1] + R(t2, n2)]);
  for (let i2 = 1; i2 < e2.length; i2++) r2.push([e2[i2][0] + R(t2, n2), e2[i2][1] + R(t2, n2)]), i2 === e2.length - 1 && r2.push([e2[i2][0] + R(t2, n2), e2[i2][1] + R(t2, n2)]);
  return Te(r2, null, n2);
}
function Te(e2, t2, n2) {
  let r2 = e2.length, i2 = [];
  if (r2 > 3) {
    let a2 = [], o2 = 1 - n2.curveTightness;
    i2.push({ op: `move`, data: [e2[1][0], e2[1][1]] });
    for (let t3 = 1; t3 + 2 < r2; t3++) {
      let n3 = e2[t3];
      a2[0] = [n3[0], n3[1]], a2[1] = [n3[0] + (o2 * e2[t3 + 1][0] - o2 * e2[t3 - 1][0]) / 6, n3[1] + (o2 * e2[t3 + 1][1] - o2 * e2[t3 - 1][1]) / 6], a2[2] = [e2[t3 + 1][0] + (o2 * e2[t3][0] - o2 * e2[t3 + 2][0]) / 6, e2[t3 + 1][1] + (o2 * e2[t3][1] - o2 * e2[t3 + 2][1]) / 6], a2[3] = [e2[t3 + 1][0], e2[t3 + 1][1]], i2.push({ op: `bcurveTo`, data: [a2[1][0], a2[1][1], a2[2][0], a2[2][1], a2[3][0], a2[3][1]] });
    }
    if (t2 && t2.length === 2) {
      let e3 = n2.maxRandomnessOffset;
      i2.push({ op: `lineTo`, data: [t2[0] + R(e3, n2), t2[1] + R(e3, n2)] });
    }
  } else r2 === 3 ? (i2.push({ op: `move`, data: [e2[1][0], e2[1][1]] }), i2.push({ op: `bcurveTo`, data: [e2[1][0], e2[1][1], e2[2][0], e2[2][1], e2[2][0], e2[2][1]] })) : r2 === 2 && i2.push(...Ce(e2[0][0], e2[0][1], e2[1][0], e2[1][1], n2, true, true));
  return i2;
}
function Ee(e2, t2, n2, r2, i2, a2, o2, s2) {
  let c2 = [], l2 = [];
  if (s2.roughness === 0) {
    e2 /= 4, l2.push([t2 + r2 * Math.cos(-e2), n2 + i2 * Math.sin(-e2)]);
    for (let a3 = 0; a3 <= 2 * Math.PI; a3 += e2) {
      let e3 = [t2 + r2 * Math.cos(a3), n2 + i2 * Math.sin(a3)];
      c2.push(e3), l2.push(e3);
    }
    l2.push([t2 + r2 * Math.cos(0), n2 + i2 * Math.sin(0)]), l2.push([t2 + r2 * Math.cos(e2), n2 + i2 * Math.sin(e2)]);
  } else {
    let u2 = R(0.5, s2) - Math.PI / 2;
    l2.push([R(a2, s2) + t2 + 0.9 * r2 * Math.cos(u2 - e2), R(a2, s2) + n2 + 0.9 * i2 * Math.sin(u2 - e2)]);
    let d2 = 2 * Math.PI + u2 - 0.01;
    for (let o3 = u2; o3 < d2; o3 += e2) {
      let e3 = [R(a2, s2) + t2 + r2 * Math.cos(o3), R(a2, s2) + n2 + i2 * Math.sin(o3)];
      c2.push(e3), l2.push(e3);
    }
    l2.push([R(a2, s2) + t2 + r2 * Math.cos(u2 + 2 * Math.PI + 0.5 * o2), R(a2, s2) + n2 + i2 * Math.sin(u2 + 2 * Math.PI + 0.5 * o2)]), l2.push([R(a2, s2) + t2 + 0.98 * r2 * Math.cos(u2 + o2), R(a2, s2) + n2 + 0.98 * i2 * Math.sin(u2 + o2)]), l2.push([R(a2, s2) + t2 + 0.9 * r2 * Math.cos(u2 + 0.5 * o2), R(a2, s2) + n2 + 0.9 * i2 * Math.sin(u2 + 0.5 * o2)]);
  }
  return [l2, c2];
}
function De(e2, t2, n2, r2, i2, a2, o2, s2, c2) {
  let l2 = a2 + R(0.1, c2), u2 = [];
  u2.push([R(s2, c2) + t2 + 0.9 * r2 * Math.cos(l2 - e2), R(s2, c2) + n2 + 0.9 * i2 * Math.sin(l2 - e2)]);
  for (let a3 = l2; a3 <= o2; a3 += e2) u2.push([R(s2, c2) + t2 + r2 * Math.cos(a3), R(s2, c2) + n2 + i2 * Math.sin(a3)]);
  return u2.push([t2 + r2 * Math.cos(o2), n2 + i2 * Math.sin(o2)]), u2.push([t2 + r2 * Math.cos(o2), n2 + i2 * Math.sin(o2)]), Te(u2, null, c2);
}
function Oe(e2, t2, n2, r2, i2, a2, o2, s2) {
  let c2 = [], l2 = [s2.maxRandomnessOffset || 1, (s2.maxRandomnessOffset || 1) + 0.3], u2 = [0, 0], d2 = s2.disableMultiStroke ? 1 : 2, f2 = s2.preserveVertices;
  for (let p2 = 0; p2 < d2; p2++) p2 === 0 ? c2.push({ op: `move`, data: [o2[0], o2[1]] }) : c2.push({ op: `move`, data: [o2[0] + (f2 ? 0 : R(l2[0], s2)), o2[1] + (f2 ? 0 : R(l2[0], s2))] }), u2 = f2 ? [i2, a2] : [i2 + R(l2[p2], s2), a2 + R(l2[p2], s2)], c2.push({ op: `bcurveTo`, data: [e2 + R(l2[p2], s2), t2 + R(l2[p2], s2), n2 + R(l2[p2], s2), r2 + R(l2[p2], s2), u2[0], u2[1]] });
  return c2;
}
function ke(e2) {
  return [...e2];
}
function Ae(e2, t2 = 0) {
  let n2 = e2.length;
  if (n2 < 3) throw Error(`A curve must have at least three points.`);
  let r2 = [];
  if (n2 === 3) r2.push(ke(e2[0]), ke(e2[1]), ke(e2[2]), ke(e2[2]));
  else {
    let n3 = [];
    n3.push(e2[0], e2[0]);
    for (let t3 = 1; t3 < e2.length; t3++) n3.push(e2[t3]), t3 === e2.length - 1 && n3.push(e2[t3]);
    let i2 = [], a2 = 1 - t2;
    r2.push(ke(n3[0]));
    for (let e3 = 1; e3 + 2 < n3.length; e3++) {
      let t3 = n3[e3];
      i2[0] = [t3[0], t3[1]], i2[1] = [t3[0] + (a2 * n3[e3 + 1][0] - a2 * n3[e3 - 1][0]) / 6, t3[1] + (a2 * n3[e3 + 1][1] - a2 * n3[e3 - 1][1]) / 6], i2[2] = [n3[e3 + 1][0] + (a2 * n3[e3][0] - a2 * n3[e3 + 2][0]) / 6, n3[e3 + 1][1] + (a2 * n3[e3][1] - a2 * n3[e3 + 2][1]) / 6], i2[3] = [n3[e3 + 1][0], n3[e3 + 1][1]], r2.push(i2[1], i2[2], i2[3]);
    }
  }
  return r2;
}
function je(e2, t2) {
  return (e2[0] - t2[0]) ** 2 + (e2[1] - t2[1]) ** 2;
}
function Me(e2, t2, n2) {
  let r2 = je(t2, n2);
  if (r2 === 0) return je(e2, t2);
  let i2 = ((e2[0] - t2[0]) * (n2[0] - t2[0]) + (e2[1] - t2[1]) * (n2[1] - t2[1])) / r2;
  return i2 = Math.max(0, Math.min(1, i2)), je(e2, Ne(t2, n2, i2));
}
function Ne(e2, t2, n2) {
  return [e2[0] + (t2[0] - e2[0]) * n2, e2[1] + (t2[1] - e2[1]) * n2];
}
function Pe(e2, t2, n2, r2) {
  let i2 = r2 || [];
  if ((function(e3, t3) {
    let n3 = e3[t3 + 0], r3 = e3[t3 + 1], i3 = e3[t3 + 2], a3 = e3[t3 + 3], o3 = 3 * r3[0] - 2 * n3[0] - a3[0];
    o3 *= o3;
    let s2 = 3 * r3[1] - 2 * n3[1] - a3[1];
    s2 *= s2;
    let c2 = 3 * i3[0] - 2 * a3[0] - n3[0];
    c2 *= c2;
    let l2 = 3 * i3[1] - 2 * a3[1] - n3[1];
    return l2 *= l2, o3 < c2 && (o3 = c2), s2 < l2 && (s2 = l2), o3 + s2;
  })(e2, t2) < n2) {
    let n3 = e2[t2 + 0];
    i2.length ? (a2 = i2[i2.length - 1], o2 = n3, Math.sqrt(je(a2, o2))) > 1 && i2.push(n3) : i2.push(n3), i2.push(e2[t2 + 3]);
  } else {
    let r3 = 0.5, a3 = e2[t2 + 0], o3 = e2[t2 + 1], s2 = e2[t2 + 2], c2 = e2[t2 + 3], l2 = Ne(a3, o3, r3), u2 = Ne(o3, s2, r3), d2 = Ne(s2, c2, r3), f2 = Ne(l2, u2, r3), p2 = Ne(u2, d2, r3), m2 = Ne(f2, p2, r3);
    Pe([a3, l2, f2, m2], 0, n2, i2), Pe([m2, p2, d2, c2], 0, n2, i2);
  }
  var a2, o2;
  return i2;
}
function Fe(e2, t2) {
  return Ie(e2, 0, e2.length, t2);
}
function Ie(e2, t2, n2, r2, i2) {
  let a2 = i2 || [], o2 = e2[t2], s2 = e2[n2 - 1], c2 = 0, l2 = 1;
  for (let r3 = t2 + 1; r3 < n2 - 1; ++r3) {
    let t3 = Me(e2[r3], o2, s2);
    t3 > c2 && (c2 = t3, l2 = r3);
  }
  return Math.sqrt(c2) > r2 ? (Ie(e2, t2, l2 + 1, r2, a2), Ie(e2, l2, n2, r2, a2)) : (a2.length || a2.push(o2), a2.push(s2)), a2;
}
function Le(e2, t2 = 0.15, n2) {
  let r2 = [], i2 = (e2.length - 1) / 3;
  for (let n3 = 0; n3 < i2; n3++) Pe(e2, 3 * n3, t2, r2);
  return n2 && n2 > 0 ? Ie(r2, 0, r2.length, n2) : r2;
}
var B = `none`, Re = class {
  constructor(e2) {
    this.defaultOptions = { maxRandomnessOffset: 2, roughness: 1, bowing: 1, stroke: `#000`, strokeWidth: 1, curveTightness: 0, curveFitting: 0.95, curveStepCount: 9, fillStyle: `hachure`, fillWeight: -1, hachureAngle: -41, hachureGap: -1, dashOffset: -1, dashGap: -1, zigzagOffset: -1, seed: 0, disableMultiStroke: false, disableMultiStrokeFill: false, preserveVertices: false, fillShapeRoughnessGain: 0.8 }, this.config = e2 || {}, this.config.options && (this.defaultOptions = this._o(this.config.options));
  }
  static newSeed() {
    return Math.floor(Math.random() * 2 ** 31);
  }
  _o(e2) {
    return e2 ? Object.assign({}, this.defaultOptions, e2) : this.defaultOptions;
  }
  _d(e2, t2, n2) {
    return { shape: e2, sets: t2 || [], options: n2 || this.defaultOptions };
  }
  line(e2, t2, n2, r2, i2) {
    let a2 = this._o(i2);
    return this._d(`line`, [ue(e2, t2, n2, r2, a2)], a2);
  }
  rectangle(e2, t2, n2, r2, i2) {
    let a2 = this._o(i2), o2 = [], s2 = fe(e2, t2, n2, r2, a2);
    if (a2.fill) {
      let i3 = [[e2, t2], [e2 + n2, t2], [e2 + n2, t2 + r2], [e2, t2 + r2]];
      a2.fillStyle === `solid` ? o2.push(ve([i3], a2)) : o2.push(ye([i3], a2));
    }
    return a2.stroke !== B && o2.push(s2), this._d(`rectangle`, o2, a2);
  }
  ellipse(e2, t2, n2, r2, i2) {
    let a2 = this._o(i2), o2 = [], s2 = me(n2, r2, a2), c2 = he(e2, t2, a2, s2);
    if (a2.fill) if (a2.fillStyle === `solid`) {
      let n3 = he(e2, t2, a2, s2).opset;
      n3.type = `fillPath`, o2.push(n3);
    } else o2.push(ye([c2.estimatedPoints], a2));
    return a2.stroke !== B && o2.push(c2.opset), this._d(`ellipse`, o2, a2);
  }
  circle(e2, t2, n2, r2) {
    let i2 = this.ellipse(e2, t2, n2, n2, r2);
    return i2.shape = `circle`, i2;
  }
  linearPath(e2, t2) {
    let n2 = this._o(t2);
    return this._d(`linearPath`, [de(e2, false, n2)], n2);
  }
  arc(e2, t2, n2, r2, i2, a2, o2 = false, s2) {
    let c2 = this._o(s2), l2 = [], u2 = ge(e2, t2, n2, r2, i2, a2, o2, true, c2);
    if (o2 && c2.fill) if (c2.fillStyle === `solid`) {
      let o3 = Object.assign({}, c2);
      o3.disableMultiStroke = true;
      let s3 = ge(e2, t2, n2, r2, i2, a2, true, false, o3);
      s3.type = `fillPath`, l2.push(s3);
    } else l2.push((function(e3, t3, n3, r3, i3, a3, o3) {
      let s3 = e3, c3 = t3, l3 = Math.abs(n3 / 2), u3 = Math.abs(r3 / 2);
      l3 += R(0.01 * l3, o3), u3 += R(0.01 * u3, o3);
      let d2 = i3, f2 = a3;
      for (; d2 < 0; ) d2 += 2 * Math.PI, f2 += 2 * Math.PI;
      f2 - d2 > 2 * Math.PI && (d2 = 0, f2 = 2 * Math.PI);
      let p2 = (f2 - d2) / o3.curveStepCount, m2 = [];
      for (let e4 = d2; e4 <= f2; e4 += p2) m2.push([s3 + l3 * Math.cos(e4), c3 + u3 * Math.sin(e4)]);
      return m2.push([s3 + l3 * Math.cos(f2), c3 + u3 * Math.sin(f2)]), m2.push([s3, c3]), ye([m2], o3);
    })(e2, t2, n2, r2, i2, a2, c2));
    return c2.stroke !== B && l2.push(u2), this._d(`arc`, l2, c2);
  }
  curve(e2, t2) {
    let n2 = this._o(t2), r2 = [], i2 = pe(e2, n2);
    if (n2.fill && n2.fill !== B) if (n2.fillStyle === `solid`) {
      let t3 = pe(e2, Object.assign(Object.assign({}, n2), { disableMultiStroke: true, roughness: n2.roughness ? n2.roughness + n2.fillShapeRoughnessGain : 0 }));
      r2.push({ type: `fillPath`, ops: this._mergedShape(t3.ops) });
    } else {
      let t3 = [], i3 = e2;
      if (i3.length) {
        let e3 = typeof i3[0][0] == `number` ? [i3] : i3;
        for (let r3 of e3) r3.length < 3 ? t3.push(...r3) : r3.length === 3 ? t3.push(...Le(Ae([r3[0], r3[0], r3[1], r3[2]]), 10, (1 + n2.roughness) / 2)) : t3.push(...Le(Ae(r3), 10, (1 + n2.roughness) / 2));
      }
      t3.length && r2.push(ye([t3], n2));
    }
    return n2.stroke !== B && r2.push(i2), this._d(`curve`, r2, n2);
  }
  polygon(e2, t2) {
    let n2 = this._o(t2), r2 = [], i2 = de(e2, true, n2);
    return n2.fill && (n2.fillStyle === `solid` ? r2.push(ve([e2], n2)) : r2.push(ye([e2], n2))), n2.stroke !== B && r2.push(i2), this._d(`polygon`, r2, n2);
  }
  path(e2, t2) {
    let n2 = this._o(t2), r2 = [];
    if (!e2) return this._d(`path`, r2, n2);
    e2 = (e2 || ``).replace(/\n/g, ` `).replace(/(-\s)/g, `-`).replace(`/(ss)/g`, ` `);
    let i2 = n2.fill && n2.fill !== `transparent` && n2.fill !== B, a2 = n2.stroke !== B, o2 = !!(n2.simplification && n2.simplification < 1), s2 = (function(e3, t3, n3) {
      let r3 = oe(L(ae(e3))), i3 = [], a3 = [], o3 = [0, 0], s3 = [], c3 = () => {
        s3.length >= 4 && a3.push(...Le(s3, t3)), s3 = [];
      }, l2 = () => {
        c3(), a3.length && (i3.push(a3), a3 = []);
      };
      for (let { key: e4, data: t4 } of r3) switch (e4) {
        case `M`:
          l2(), o3 = [t4[0], t4[1]], a3.push(o3);
          break;
        case `L`:
          c3(), a3.push([t4[0], t4[1]]);
          break;
        case `C`:
          if (!s3.length) {
            let e5 = a3.length ? a3[a3.length - 1] : o3;
            s3.push([e5[0], e5[1]]);
          }
          s3.push([t4[0], t4[1]]), s3.push([t4[2], t4[3]]), s3.push([t4[4], t4[5]]);
          break;
        case `Z`:
          c3(), a3.push([o3[0], o3[1]]);
      }
      if (l2(), !n3) return i3;
      let u2 = [];
      for (let e4 of i3) {
        let t4 = Fe(e4, n3);
        t4.length && u2.push(t4);
      }
      return u2;
    })(e2, 1, o2 ? 4 - 4 * (n2.simplification || 1) : (1 + n2.roughness) / 2), c2 = _e(e2, n2);
    if (i2) if (n2.fillStyle === `solid`) if (s2.length === 1) {
      let t3 = _e(e2, Object.assign(Object.assign({}, n2), { disableMultiStroke: true, roughness: n2.roughness ? n2.roughness + n2.fillShapeRoughnessGain : 0 }));
      r2.push({ type: `fillPath`, ops: this._mergedShape(t3.ops) });
    } else r2.push(ve(s2, n2));
    else r2.push(ye(s2, n2));
    return a2 && (o2 ? s2.forEach(((e3) => {
      r2.push(de(e3, false, n2));
    })) : r2.push(c2)), this._d(`path`, r2, n2);
  }
  opsToPath(e2, t2) {
    let n2 = ``;
    for (let r2 of e2.ops) {
      let e3 = typeof t2 == `number` && t2 >= 0 ? r2.data.map(((e4) => +e4.toFixed(t2))) : r2.data;
      switch (r2.op) {
        case `move`:
          n2 += `M${e3[0]} ${e3[1]} `;
          break;
        case `bcurveTo`:
          n2 += `C${e3[0]} ${e3[1]}, ${e3[2]} ${e3[3]}, ${e3[4]} ${e3[5]} `;
          break;
        case `lineTo`:
          n2 += `L${e3[0]} ${e3[1]} `;
      }
    }
    return n2.trim();
  }
  toPaths(e2) {
    let t2 = e2.sets || [], n2 = e2.options || this.defaultOptions, r2 = [];
    for (let e3 of t2) {
      let t3 = null;
      switch (e3.type) {
        case `path`:
          t3 = { d: this.opsToPath(e3), stroke: n2.stroke, strokeWidth: n2.strokeWidth, fill: B };
          break;
        case `fillPath`:
          t3 = { d: this.opsToPath(e3), stroke: B, strokeWidth: 0, fill: n2.fill || B };
          break;
        case `fillSketch`:
          t3 = this.fillSketch(e3, n2);
      }
      t3 && r2.push(t3);
    }
    return r2;
  }
  fillSketch(e2, t2) {
    let n2 = t2.fillWeight;
    return n2 < 0 && (n2 = t2.strokeWidth / 2), { d: this.opsToPath(e2), stroke: t2.fill || B, strokeWidth: n2, fill: B };
  }
  _mergedShape(e2) {
    return e2.filter(((e3, t2) => t2 === 0 || e3.op !== `move`));
  }
}, ze = class {
  constructor(e2, t2) {
    this.canvas = e2, this.ctx = this.canvas.getContext(`2d`), this.gen = new Re(t2);
  }
  draw(e2) {
    let t2 = e2.sets || [], n2 = e2.options || this.getDefaultOptions(), r2 = this.ctx, i2 = e2.options.fixedDecimalPlaceDigits;
    for (let a2 of t2) switch (a2.type) {
      case `path`:
        r2.save(), r2.strokeStyle = n2.stroke === `none` ? `transparent` : n2.stroke, r2.lineWidth = n2.strokeWidth, n2.strokeLineDash && r2.setLineDash(n2.strokeLineDash), n2.strokeLineDashOffset && (r2.lineDashOffset = n2.strokeLineDashOffset), this._drawToContext(r2, a2, i2), r2.restore();
        break;
      case `fillPath`: {
        r2.save(), r2.fillStyle = n2.fill || ``;
        let t3 = e2.shape === `curve` || e2.shape === `polygon` || e2.shape === `path` ? `evenodd` : `nonzero`;
        this._drawToContext(r2, a2, i2, t3), r2.restore();
        break;
      }
      case `fillSketch`:
        this.fillSketch(r2, a2, n2);
    }
  }
  fillSketch(e2, t2, n2) {
    let r2 = n2.fillWeight;
    r2 < 0 && (r2 = n2.strokeWidth / 2), e2.save(), n2.fillLineDash && e2.setLineDash(n2.fillLineDash), n2.fillLineDashOffset && (e2.lineDashOffset = n2.fillLineDashOffset), e2.strokeStyle = n2.fill || ``, e2.lineWidth = r2, this._drawToContext(e2, t2, n2.fixedDecimalPlaceDigits), e2.restore();
  }
  _drawToContext(e2, t2, n2, r2 = `nonzero`) {
    e2.beginPath();
    for (let r3 of t2.ops) {
      let t3 = typeof n2 == `number` && n2 >= 0 ? r3.data.map(((e3) => +e3.toFixed(n2))) : r3.data;
      switch (r3.op) {
        case `move`:
          e2.moveTo(t3[0], t3[1]);
          break;
        case `bcurveTo`:
          e2.bezierCurveTo(t3[0], t3[1], t3[2], t3[3], t3[4], t3[5]);
          break;
        case `lineTo`:
          e2.lineTo(t3[0], t3[1]);
      }
    }
    t2.type === `fillPath` ? e2.fill(r2) : e2.stroke();
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  line(e2, t2, n2, r2, i2) {
    let a2 = this.gen.line(e2, t2, n2, r2, i2);
    return this.draw(a2), a2;
  }
  rectangle(e2, t2, n2, r2, i2) {
    let a2 = this.gen.rectangle(e2, t2, n2, r2, i2);
    return this.draw(a2), a2;
  }
  ellipse(e2, t2, n2, r2, i2) {
    let a2 = this.gen.ellipse(e2, t2, n2, r2, i2);
    return this.draw(a2), a2;
  }
  circle(e2, t2, n2, r2) {
    let i2 = this.gen.circle(e2, t2, n2, r2);
    return this.draw(i2), i2;
  }
  linearPath(e2, t2) {
    let n2 = this.gen.linearPath(e2, t2);
    return this.draw(n2), n2;
  }
  polygon(e2, t2) {
    let n2 = this.gen.polygon(e2, t2);
    return this.draw(n2), n2;
  }
  arc(e2, t2, n2, r2, i2, a2, o2 = false, s2) {
    let c2 = this.gen.arc(e2, t2, n2, r2, i2, a2, o2, s2);
    return this.draw(c2), c2;
  }
  curve(e2, t2) {
    let n2 = this.gen.curve(e2, t2);
    return this.draw(n2), n2;
  }
  path(e2, t2) {
    let n2 = this.gen.path(e2, t2);
    return this.draw(n2), n2;
  }
}, Be = `http://www.w3.org/2000/svg`, Ve = class {
  constructor(e2, t2) {
    this.svg = e2, this.gen = new Re(t2);
  }
  draw(e2) {
    let t2 = e2.sets || [], n2 = e2.options || this.getDefaultOptions(), r2 = this.svg.ownerDocument || window.document, i2 = r2.createElementNS(Be, `g`), a2 = e2.options.fixedDecimalPlaceDigits;
    for (let o2 of t2) {
      let t3 = null;
      switch (o2.type) {
        case `path`:
          t3 = r2.createElementNS(Be, `path`), t3.setAttribute(`d`, this.opsToPath(o2, a2)), t3.setAttribute(`stroke`, n2.stroke), t3.setAttribute(`stroke-width`, n2.strokeWidth + ``), t3.setAttribute(`fill`, `none`), n2.strokeLineDash && t3.setAttribute(`stroke-dasharray`, n2.strokeLineDash.join(` `).trim()), n2.strokeLineDashOffset && t3.setAttribute(`stroke-dashoffset`, `${n2.strokeLineDashOffset}`);
          break;
        case `fillPath`:
          t3 = r2.createElementNS(Be, `path`), t3.setAttribute(`d`, this.opsToPath(o2, a2)), t3.setAttribute(`stroke`, `none`), t3.setAttribute(`stroke-width`, `0`), t3.setAttribute(`fill`, n2.fill || ``), e2.shape !== `curve` && e2.shape !== `polygon` || t3.setAttribute(`fill-rule`, `evenodd`);
          break;
        case `fillSketch`:
          t3 = this.fillSketch(r2, o2, n2);
      }
      t3 && i2.appendChild(t3);
    }
    return i2;
  }
  fillSketch(e2, t2, n2) {
    let r2 = n2.fillWeight;
    r2 < 0 && (r2 = n2.strokeWidth / 2);
    let i2 = e2.createElementNS(Be, `path`);
    return i2.setAttribute(`d`, this.opsToPath(t2, n2.fixedDecimalPlaceDigits)), i2.setAttribute(`stroke`, n2.fill || ``), i2.setAttribute(`stroke-width`, r2 + ``), i2.setAttribute(`fill`, `none`), n2.fillLineDash && i2.setAttribute(`stroke-dasharray`, n2.fillLineDash.join(` `).trim()), n2.fillLineDashOffset && i2.setAttribute(`stroke-dashoffset`, `${n2.fillLineDashOffset}`), i2;
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  opsToPath(e2, t2) {
    return this.gen.opsToPath(e2, t2);
  }
  line(e2, t2, n2, r2, i2) {
    let a2 = this.gen.line(e2, t2, n2, r2, i2);
    return this.draw(a2);
  }
  rectangle(e2, t2, n2, r2, i2) {
    let a2 = this.gen.rectangle(e2, t2, n2, r2, i2);
    return this.draw(a2);
  }
  ellipse(e2, t2, n2, r2, i2) {
    let a2 = this.gen.ellipse(e2, t2, n2, r2, i2);
    return this.draw(a2);
  }
  circle(e2, t2, n2, r2) {
    let i2 = this.gen.circle(e2, t2, n2, r2);
    return this.draw(i2);
  }
  linearPath(e2, t2) {
    let n2 = this.gen.linearPath(e2, t2);
    return this.draw(n2);
  }
  polygon(e2, t2) {
    let n2 = this.gen.polygon(e2, t2);
    return this.draw(n2);
  }
  arc(e2, t2, n2, r2, i2, a2, o2 = false, s2) {
    let c2 = this.gen.arc(e2, t2, n2, r2, i2, a2, o2, s2);
    return this.draw(c2);
  }
  curve(e2, t2) {
    let n2 = this.gen.curve(e2, t2);
    return this.draw(n2);
  }
  path(e2, t2) {
    let n2 = this.gen.path(e2, t2);
    return this.draw(n2);
  }
}, V = { canvas: (e2, t2) => new ze(e2, t2), svg: (e2, t2) => new Ve(e2, t2), generator: (e2) => new Re(e2), newSeed: () => Re.newSeed() }, H = d(async (e2, n2, r2) => {
  var _a, _b;
  let i2, c2 = n2.useHtmlLabels || s((_a = a()) == null ? void 0 : _a.htmlLabels);
  i2 = r2 || `node default`;
  let l2 = e2.insert(`g`).attr(`class`, i2).attr(`id`, n2.domId || n2.id), u2 = l2.insert(`g`).attr(`class`, `label`).attr(`style`, g(n2.labelStyle)), h2;
  h2 = n2.label === void 0 ? `` : typeof n2.label == `string` ? n2.label : n2.label[0];
  let _2 = await S(u2, t(p(h2), a()), { useHtmlLabels: c2, width: n2.width || ((_b = a().flowchart) == null ? void 0 : _b.wrappingWidth), cssClasses: `markdown-node-label`, style: n2.labelStyle, addSvgBackground: !!n2.icon || !!n2.img }), v2 = _2.getBBox(), y2 = ((n2 == null ? void 0 : n2.padding) ?? 0) / 2;
  if (c2) {
    let e3 = _2.children[0], t2 = f(_2), n3 = e3.getElementsByTagName(`img`);
    if (n3) {
      let e4 = h2.replace(/<img[^>]*>/g, ``).trim() === ``;
      await Promise.all([...n3].map((t3) => new Promise((n4) => {
        function r3() {
          if (t3.style.display = `flex`, t3.style.flexDirection = `column`, e4) {
            let [e5 = o.fontSize] = m(a().fontSize ? a().fontSize : window.getComputedStyle(document.body).fontSize), n5 = e5 * 5 + `px`;
            t3.style.minWidth = n5, t3.style.maxWidth = n5;
          } else t3.style.width = `100%`;
          n4(t3);
        }
        d(r3, `setupImage`), setTimeout(() => {
          t3.complete && r3();
        }), t3.addEventListener(`error`, r3), t3.addEventListener(`load`, r3);
      })));
    }
    v2 = e3.getBoundingClientRect(), t2.attr(`width`, v2.width), t2.attr(`height`, v2.height);
  }
  return c2 ? u2.attr(`transform`, `translate(` + -v2.width / 2 + `, ` + -v2.height / 2 + `)`) : u2.attr(`transform`, `translate(0, ` + -v2.height / 2 + `)`), n2.centerLabel && u2.attr(`transform`, `translate(` + -v2.width / 2 + `, ` + -v2.height / 2 + `)`), u2.insert(`rect`, `:first-child`), { shapeSvg: l2, bbox: v2, halfPadding: y2, label: u2 };
}, `labelHelper`), He = d(async (e2, n2, r2) => {
  var _a, _b, _c, _d, _e2, _f;
  let i2 = r2.useHtmlLabels || s((_b = (_a = a()) == null ? void 0 : _a.flowchart) == null ? void 0 : _b.htmlLabels), o2 = e2.insert(`g`).attr(`class`, `label`).attr(`style`, r2.labelStyle || ``), c2 = await S(o2, t(p(n2), a()), { useHtmlLabels: i2, width: r2.width || ((_d = (_c = a()) == null ? void 0 : _c.flowchart) == null ? void 0 : _d.wrappingWidth), style: r2.labelStyle, addSvgBackground: !!r2.icon || !!r2.img }), l2 = c2.getBBox(), u2 = r2.padding / 2;
  if (s((_f = (_e2 = a()) == null ? void 0 : _e2.flowchart) == null ? void 0 : _f.htmlLabels)) {
    let e3 = c2.children[0], t2 = f(c2);
    l2 = e3.getBoundingClientRect(), t2.attr(`width`, l2.width), t2.attr(`height`, l2.height);
  }
  return i2 ? o2.attr(`transform`, `translate(` + -l2.width / 2 + `, ` + -l2.height / 2 + `)`) : o2.attr(`transform`, `translate(0, ` + -l2.height / 2 + `)`), r2.centerLabel && o2.attr(`transform`, `translate(` + -l2.width / 2 + `, ` + -l2.height / 2 + `)`), o2.insert(`rect`, `:first-child`), { shapeSvg: e2, bbox: l2, halfPadding: u2, label: o2 };
}, `insertLabel`), U = d((e2, t2) => {
  let n2 = t2.node().getBBox();
  e2.width = n2.width, e2.height = n2.height;
}, `updateNodeBounds`), W = d((e2, t2) => (e2.look === `handDrawn` ? `rough-node` : `node`) + ` ` + e2.cssClasses + ` ` + (t2 || ``), `getNodeClasses`);
function G(e2) {
  let t2 = e2.map((e3, t3) => `${t3 === 0 ? `M` : `L`}${e3.x},${e3.y}`);
  return t2.push(`Z`), t2.join(` `);
}
d(G, `createPathFromPoints`);
function K(e2, t2, n2, r2, i2, a2) {
  let o2 = [], s2 = n2 - e2, c2 = r2 - t2, l2 = s2 / a2, u2 = 2 * Math.PI / l2, d2 = t2 + c2 / 2;
  for (let t3 = 0; t3 <= 50; t3++) {
    let n3 = e2 + t3 / 50 * s2, r3 = d2 + i2 * Math.sin(u2 * (n3 - e2));
    o2.push({ x: n3, y: r3 });
  }
  return o2;
}
d(K, `generateFullSineWavePoints`);
function Ue(e2, t2, n2, r2, i2, a2) {
  let o2 = [], s2 = i2 * Math.PI / 180, c2 = (a2 * Math.PI / 180 - s2) / (r2 - 1);
  for (let i3 = 0; i3 < r2; i3++) {
    let r3 = s2 + i3 * c2, a3 = e2 + n2 * Math.cos(r3), l2 = t2 + n2 * Math.sin(r3);
    o2.push({ x: -a3, y: -l2 });
  }
  return o2;
}
d(Ue, `generateCirclePoints`);
var We = d((e2, t2) => {
  var n2 = e2.x, r2 = e2.y, i2 = t2.x - n2, a2 = t2.y - r2, o2 = e2.width / 2, s2 = e2.height / 2, c2, l2;
  return Math.abs(a2) * o2 > Math.abs(i2) * s2 ? (a2 < 0 && (s2 = -s2), c2 = a2 === 0 ? 0 : s2 * i2 / a2, l2 = s2) : (i2 < 0 && (o2 = -o2), c2 = o2, l2 = i2 === 0 ? 0 : o2 * a2 / i2), { x: n2 + c2, y: r2 + l2 };
}, `intersectRect`);
function Ge(e2, t2) {
  t2 && e2.attr(`style`, t2);
}
d(Ge, `applyStyle`);
async function Ke(e2) {
  let n2 = f(document.createElementNS(`http://www.w3.org/2000/svg`, `foreignObject`)), o2 = n2.append(`xhtml:div`), s2 = a(), l2 = e2.label;
  e2.label && i(e2.label) && (l2 = await r(e2.label.replace(c.lineBreakRegex, `
`), s2));
  let u2 = `<span class="` + (e2.isNode ? `nodeLabel` : `edgeLabel`) + `" ` + (e2.labelStyle ? `style="` + e2.labelStyle + `"` : ``) + `>` + l2 + `</span>`;
  return o2.html(t(u2, s2)), Ge(o2, e2.labelStyle), o2.style(`display`, `inline-block`), o2.style(`padding-right`, `1px`), o2.style(`white-space`, `nowrap`), o2.attr(`xmlns`, `http://www.w3.org/1999/xhtml`), n2.node();
}
d(Ke, `addHtmlLabel`);
var qe = d(async (e2, t2, n2, r2) => {
  let i2 = e2 || ``;
  if (typeof i2 == `object` && (i2 = i2[0]), s(a().flowchart.htmlLabels)) return i2 = i2.replace(/\\n|\n/g, `<br />`), u.info(`vertexText` + i2), await Ke({ isNode: r2, label: p(i2).replace(/fa[blrs]?:fa-[\w-]+/g, (e3) => `<i class='${e3.replace(`:`, ` `)}'></i>`), labelStyle: t2 && t2.replace(`fill:`, `color:`) });
  {
    let e3 = document.createElementNS(`http://www.w3.org/2000/svg`, `text`);
    e3.setAttribute(`style`, t2.replace(`color:`, `fill:`));
    let r3 = [];
    r3 = typeof i2 == `string` ? i2.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(i2) ? i2 : [];
    for (let t3 of r3) {
      let r4 = document.createElementNS(`http://www.w3.org/2000/svg`, `tspan`);
      r4.setAttributeNS(`http://www.w3.org/XML/1998/namespace`, `xml:space`, `preserve`), r4.setAttribute(`dy`, `1em`), r4.setAttribute(`x`, `0`), n2 ? r4.setAttribute(`class`, `title-row`) : r4.setAttribute(`class`, `row`), r4.textContent = t3.trim(), e3.appendChild(r4);
    }
    return e3;
  }
}, `createLabel`), q = d((e2, t2, n2, r2, i2) => [`M`, e2 + i2, t2, `H`, e2 + n2 - i2, `A`, i2, i2, 0, 0, 1, e2 + n2, t2 + i2, `V`, t2 + r2 - i2, `A`, i2, i2, 0, 0, 1, e2 + n2 - i2, t2 + r2, `H`, e2 + i2, `A`, i2, i2, 0, 0, 1, e2, t2 + r2 - i2, `V`, t2 + i2, `A`, i2, i2, 0, 0, 1, e2 + i2, t2, `Z`].join(` `), `createRoundedRectPathD`), Je = d(async (e2, t2) => {
  u.info(`Creating subgraph rect for `, t2.id, t2);
  let n2 = a(), { themeVariables: r2, handDrawnSeed: i2 } = n2, { clusterBkg: o2, clusterBorder: c2 } = r2, { labelStyles: l2, nodeStyles: d2, borderStyles: p2, backgroundStyles: m2 } = y(t2), h2 = e2.insert(`g`).attr(`class`, `cluster ` + t2.cssClasses).attr(`id`, t2.id).attr(`data-look`, t2.look), g2 = s(n2.flowchart.htmlLabels), b2 = h2.insert(`g`).attr(`class`, `cluster-label `), x2 = await S(b2, t2.label, { style: t2.labelStyle, useHtmlLabels: g2, isNode: true }), C2 = x2.getBBox();
  if (s(n2.flowchart.htmlLabels)) {
    let e3 = x2.children[0], t3 = f(x2);
    C2 = e3.getBoundingClientRect(), t3.attr(`width`, C2.width), t3.attr(`height`, C2.height);
  }
  let w2 = t2.width <= C2.width + t2.padding ? C2.width + t2.padding : t2.width;
  t2.width <= C2.width + t2.padding ? t2.diff = (w2 - t2.width) / 2 - t2.padding : t2.diff = -t2.padding;
  let T2 = t2.height, E2 = t2.x - w2 / 2, D2 = t2.y - T2 / 2;
  u.trace(`Data `, t2, JSON.stringify(t2));
  let O2;
  if (t2.look === `handDrawn`) {
    let e3 = V.svg(h2), n3 = v(t2, { roughness: 0.7, fill: o2, stroke: c2, fillWeight: 3, seed: i2 }), r3 = e3.path(q(E2, D2, w2, T2, 0), n3);
    O2 = h2.insert(() => (u.debug(`Rough node insert CXC`, r3), r3), `:first-child`), O2.select(`path:nth-child(2)`).attr(`style`, p2.join(`;`)), O2.select(`path`).attr(`style`, m2.join(`;`).replace(`fill`, `stroke`));
  } else O2 = h2.insert(`rect`, `:first-child`), O2.attr(`style`, d2).attr(`rx`, t2.rx).attr(`ry`, t2.ry).attr(`x`, E2).attr(`y`, D2).attr(`width`, w2).attr(`height`, T2);
  let { subGraphTitleTopMargin: k2 } = _(n2);
  if (b2.attr(`transform`, `translate(${t2.x - C2.width / 2}, ${t2.y - t2.height / 2 + k2})`), l2) {
    let e3 = b2.select(`span`);
    e3 && e3.attr(`style`, l2);
  }
  let A2 = O2.node().getBBox();
  return t2.offsetX = 0, t2.width = A2.width, t2.height = A2.height, t2.offsetY = C2.height - t2.padding / 2, t2.intersect = function(e3) {
    return We(t2, e3);
  }, { cluster: h2, labelBBox: C2 };
}, `rect`), Ye = { rect: Je, squareRect: Je, roundedWithTitle: d(async (e2, t2) => {
  let n2 = a(), { themeVariables: r2, handDrawnSeed: i2 } = n2, { altBackground: o2, compositeBackground: c2, compositeTitleBackground: l2, nodeBorder: u2 } = r2, d2 = e2.insert(`g`).attr(`class`, t2.cssClasses).attr(`id`, t2.id).attr(`data-id`, t2.id).attr(`data-look`, t2.look), p2 = d2.insert(`g`, `:first-child`), m2 = d2.insert(`g`).attr(`class`, `cluster-label`), h2 = d2.append(`rect`), g2 = m2.node().appendChild(await qe(t2.label, t2.labelStyle, void 0, true)), _2 = g2.getBBox();
  if (s(n2.flowchart.htmlLabels)) {
    let e3 = g2.children[0], t3 = f(g2);
    _2 = e3.getBoundingClientRect(), t3.attr(`width`, _2.width), t3.attr(`height`, _2.height);
  }
  let v2 = 0 * t2.padding, y2 = v2 / 2, b2 = (t2.width <= _2.width + t2.padding ? _2.width + t2.padding : t2.width) + v2;
  t2.width <= _2.width + t2.padding ? t2.diff = (b2 - t2.width) / 2 - t2.padding : t2.diff = -t2.padding;
  let x2 = t2.height + v2, S2 = t2.height + v2 - _2.height - 6, C2 = t2.x - b2 / 2, w2 = t2.y - x2 / 2;
  t2.width = b2;
  let T2 = t2.y - t2.height / 2 - y2 + _2.height + 2, E2;
  if (t2.look === `handDrawn`) {
    let e3 = t2.cssClasses.includes(`statediagram-cluster-alt`), n3 = V.svg(d2), r3 = t2.rx || t2.ry ? n3.path(q(C2, w2, b2, x2, 10), { roughness: 0.7, fill: l2, fillStyle: `solid`, stroke: u2, seed: i2 }) : n3.rectangle(C2, w2, b2, x2, { seed: i2 });
    E2 = d2.insert(() => r3, `:first-child`);
    let a2 = n3.rectangle(C2, T2, b2, S2, { fill: e3 ? o2 : c2, fillStyle: e3 ? `hachure` : `solid`, stroke: u2, seed: i2 });
    E2 = d2.insert(() => r3, `:first-child`), h2 = d2.insert(() => a2);
  } else E2 = p2.insert(`rect`, `:first-child`), E2.attr(`class`, `outer`).attr(`x`, C2).attr(`y`, w2).attr(`width`, b2).attr(`height`, x2).attr(`data-look`, t2.look), h2.attr(`class`, `inner`).attr(`x`, C2).attr(`y`, T2).attr(`width`, b2).attr(`height`, S2);
  return m2.attr(`transform`, `translate(${t2.x - _2.width / 2}, ${w2 + 1 - (s(n2.flowchart.htmlLabels) ? 0 : 3)})`), t2.height = E2.node().getBBox().height, t2.offsetX = 0, t2.offsetY = _2.height - t2.padding / 2, t2.labelBBox = _2, t2.intersect = function(e3) {
    return We(t2, e3);
  }, { cluster: d2, labelBBox: _2 };
}, `roundedWithTitle`), noteGroup: d((e2, t2) => {
  let n2 = e2.insert(`g`).attr(`class`, `note-cluster`).attr(`id`, t2.id), r2 = n2.insert(`rect`, `:first-child`), i2 = 0 * t2.padding, a2 = i2 / 2;
  r2.attr(`rx`, t2.rx).attr(`ry`, t2.ry).attr(`x`, t2.x - t2.width / 2 - a2).attr(`y`, t2.y - t2.height / 2 - a2).attr(`width`, t2.width + i2).attr(`height`, t2.height + i2).attr(`fill`, `none`);
  let o2 = r2.node().getBBox();
  return t2.width = o2.width, t2.height = o2.height, t2.intersect = function(e3) {
    return We(t2, e3);
  }, { cluster: n2, labelBBox: { width: 0, height: 0 } };
}, `noteGroup`), divider: d((e2, t2) => {
  let { themeVariables: n2, handDrawnSeed: r2 } = a(), { nodeBorder: i2 } = n2, o2 = e2.insert(`g`).attr(`class`, t2.cssClasses).attr(`id`, t2.id).attr(`data-look`, t2.look), s2 = o2.insert(`g`, `:first-child`), c2 = 0 * t2.padding, l2 = t2.width + c2;
  t2.diff = -t2.padding;
  let u2 = t2.height + c2, d2 = t2.x - l2 / 2, f2 = t2.y - u2 / 2;
  t2.width = l2;
  let p2;
  if (t2.look === `handDrawn`) {
    let e3 = V.svg(o2).rectangle(d2, f2, l2, u2, { fill: `lightgrey`, roughness: 0.5, strokeLineDash: [5], stroke: i2, seed: r2 });
    p2 = o2.insert(() => e3, `:first-child`);
  } else p2 = s2.insert(`rect`, `:first-child`), p2.attr(`class`, `divider`).attr(`x`, d2).attr(`y`, f2).attr(`width`, l2).attr(`height`, u2).attr(`data-look`, t2.look);
  return t2.height = p2.node().getBBox().height, t2.offsetX = 0, t2.offsetY = 0, t2.intersect = function(e3) {
    return We(t2, e3);
  }, { cluster: o2, labelBBox: {} };
}, `divider`), kanbanSection: d(async (e2, t2) => {
  u.info(`Creating subgraph rect for `, t2.id, t2);
  let n2 = a(), { themeVariables: r2, handDrawnSeed: i2 } = n2, { clusterBkg: o2, clusterBorder: c2 } = r2, { labelStyles: l2, nodeStyles: d2, borderStyles: p2, backgroundStyles: m2 } = y(t2), h2 = e2.insert(`g`).attr(`class`, `cluster ` + t2.cssClasses).attr(`id`, t2.id).attr(`data-look`, t2.look), g2 = s(n2.flowchart.htmlLabels), b2 = h2.insert(`g`).attr(`class`, `cluster-label `), x2 = await S(b2, t2.label, { style: t2.labelStyle, useHtmlLabels: g2, isNode: true, width: t2.width }), C2 = x2.getBBox();
  if (s(n2.flowchart.htmlLabels)) {
    let e3 = x2.children[0], t3 = f(x2);
    C2 = e3.getBoundingClientRect(), t3.attr(`width`, C2.width), t3.attr(`height`, C2.height);
  }
  let w2 = t2.width <= C2.width + t2.padding ? C2.width + t2.padding : t2.width;
  t2.width <= C2.width + t2.padding ? t2.diff = (w2 - t2.width) / 2 - t2.padding : t2.diff = -t2.padding;
  let T2 = t2.height, E2 = t2.x - w2 / 2, D2 = t2.y - T2 / 2;
  u.trace(`Data `, t2, JSON.stringify(t2));
  let O2;
  if (t2.look === `handDrawn`) {
    let e3 = V.svg(h2), n3 = v(t2, { roughness: 0.7, fill: o2, stroke: c2, fillWeight: 4, seed: i2 }), r3 = e3.path(q(E2, D2, w2, T2, t2.rx), n3);
    O2 = h2.insert(() => (u.debug(`Rough node insert CXC`, r3), r3), `:first-child`), O2.select(`path:nth-child(2)`).attr(`style`, p2.join(`;`)), O2.select(`path`).attr(`style`, m2.join(`;`).replace(`fill`, `stroke`));
  } else O2 = h2.insert(`rect`, `:first-child`), O2.attr(`style`, d2).attr(`rx`, t2.rx).attr(`ry`, t2.ry).attr(`x`, E2).attr(`y`, D2).attr(`width`, w2).attr(`height`, T2);
  let { subGraphTitleTopMargin: k2 } = _(n2);
  if (b2.attr(`transform`, `translate(${t2.x - C2.width / 2}, ${t2.y - t2.height / 2 + k2})`), l2) {
    let e3 = b2.select(`span`);
    e3 && e3.attr(`style`, l2);
  }
  let A2 = O2.node().getBBox();
  return t2.offsetX = 0, t2.width = A2.width, t2.height = A2.height, t2.offsetY = C2.height - t2.padding / 2, t2.intersect = function(e3) {
    return We(t2, e3);
  }, { cluster: h2, labelBBox: C2 };
}, `kanbanSection`) }, Xe = /* @__PURE__ */ new Map(), Ze = d(async (e2, t2) => {
  let n2 = await Ye[t2.shape || `rect`](e2, t2);
  return Xe.set(t2.id, n2), n2;
}, `insertCluster`), Qe = d(() => {
  Xe = /* @__PURE__ */ new Map();
}, `clear`);
function $e(e2, t2) {
  return e2.intersect(t2);
}
d($e, `intersectNode`);
var et = $e;
function tt(e2, t2, n2, r2) {
  var i2 = e2.x, a2 = e2.y, o2 = i2 - r2.x, s2 = a2 - r2.y, c2 = Math.sqrt(t2 * t2 * s2 * s2 + n2 * n2 * o2 * o2), l2 = Math.abs(t2 * n2 * o2 / c2);
  r2.x < i2 && (l2 = -l2);
  var u2 = Math.abs(t2 * n2 * s2 / c2);
  return r2.y < a2 && (u2 = -u2), { x: i2 + l2, y: a2 + u2 };
}
d(tt, `intersectEllipse`);
var nt = tt;
function rt(e2, t2, n2) {
  return nt(e2, t2, t2, n2);
}
d(rt, `intersectCircle`);
var it = rt;
function at(e2, t2, n2, r2) {
  {
    let i2 = t2.y - e2.y, a2 = e2.x - t2.x, o2 = t2.x * e2.y - e2.x * t2.y, s2 = i2 * n2.x + a2 * n2.y + o2, c2 = i2 * r2.x + a2 * r2.y + o2, l2 = 1e-6;
    if (s2 !== 0 && c2 !== 0 && ot(s2, c2)) return;
    let u2 = r2.y - n2.y, d2 = n2.x - r2.x, f2 = r2.x * n2.y - n2.x * r2.y, p2 = u2 * e2.x + d2 * e2.y + f2, m2 = u2 * t2.x + d2 * t2.y + f2;
    if (Math.abs(p2) < l2 && Math.abs(m2) < l2 && ot(p2, m2)) return;
    let h2 = i2 * d2 - u2 * a2;
    if (h2 === 0) return;
    let g2 = Math.abs(h2 / 2), _2 = a2 * f2 - d2 * o2, v2 = _2 < 0 ? (_2 - g2) / h2 : (_2 + g2) / h2;
    return _2 = u2 * o2 - i2 * f2, { x: v2, y: _2 < 0 ? (_2 - g2) / h2 : (_2 + g2) / h2 };
  }
}
d(at, `intersectLine`);
function ot(e2, t2) {
  return e2 * t2 > 0;
}
d(ot, `sameSign`);
var st = at;
function ct(e2, t2, n2) {
  let r2 = e2.x, i2 = e2.y, a2 = [], o2 = 1 / 0, s2 = 1 / 0;
  typeof t2.forEach == `function` ? t2.forEach(function(e3) {
    o2 = Math.min(o2, e3.x), s2 = Math.min(s2, e3.y);
  }) : (o2 = Math.min(o2, t2.x), s2 = Math.min(s2, t2.y));
  let c2 = r2 - e2.width / 2 - o2, l2 = i2 - e2.height / 2 - s2;
  for (let r3 = 0; r3 < t2.length; r3++) {
    let i3 = t2[r3], o3 = t2[r3 < t2.length - 1 ? r3 + 1 : 0], s3 = st(e2, n2, { x: c2 + i3.x, y: l2 + i3.y }, { x: c2 + o3.x, y: l2 + o3.y });
    s3 && a2.push(s3);
  }
  return a2.length ? (a2.length > 1 && a2.sort(function(e3, t3) {
    let r3 = e3.x - n2.x, i3 = e3.y - n2.y, a3 = Math.sqrt(r3 * r3 + i3 * i3), o3 = t3.x - n2.x, s3 = t3.y - n2.y, c3 = Math.sqrt(o3 * o3 + s3 * s3);
    return a3 < c3 ? -1 : a3 === c3 ? 0 : 1;
  }), a2[0]) : e2;
}
d(ct, `intersectPolygon`);
var J = { node: et, circle: it, ellipse: nt, polygon: ct, rect: We };
function lt(e2, t2) {
  let { labelStyles: n2 } = y(t2);
  t2.labelStyle = n2;
  let r2 = W(t2), i2 = r2;
  r2 || (i2 = `anchor`);
  let a2 = e2.insert(`g`).attr(`class`, i2).attr(`id`, t2.domId || t2.id), { cssStyles: o2 } = t2, s2 = V.svg(a2), c2 = v(t2, { fill: `black`, stroke: `none`, fillStyle: `solid` });
  t2.look !== `handDrawn` && (c2.roughness = 0);
  let l2 = s2.circle(0, 0, 2, c2), d2 = a2.insert(() => l2, `:first-child`);
  return d2.attr(`class`, `anchor`).attr(`style`, g(o2)), U(t2, d2), t2.intersect = function(e3) {
    return u.info(`Circle intersect`, t2, 1, e3), J.circle(t2, 1, e3);
  }, a2;
}
d(lt, `anchor`);
function ut(e2, t2, n2, r2, i2, a2, o2) {
  let s2 = (e2 + n2) / 2, c2 = (t2 + r2) / 2, l2 = Math.atan2(r2 - t2, n2 - e2), u2 = (n2 - e2) / 2, d2 = (r2 - t2) / 2, f2 = u2 / i2, p2 = d2 / a2, m2 = Math.sqrt(f2 ** 2 + p2 ** 2);
  if (m2 > 1) throw Error(`The given radii are too small to create an arc between the points.`);
  let h2 = Math.sqrt(1 - m2 ** 2), g2 = s2 + h2 * a2 * Math.sin(l2) * (o2 ? -1 : 1), _2 = c2 - h2 * i2 * Math.cos(l2) * (o2 ? -1 : 1), v2 = Math.atan2((t2 - _2) / a2, (e2 - g2) / i2), y2 = Math.atan2((r2 - _2) / a2, (n2 - g2) / i2) - v2;
  o2 && y2 < 0 && (y2 += 2 * Math.PI), !o2 && y2 > 0 && (y2 -= 2 * Math.PI);
  let b2 = [];
  for (let e3 = 0; e3 < 20; e3++) {
    let t3 = v2 + e3 / 19 * y2, n3 = g2 + i2 * Math.cos(t3), r3 = _2 + a2 * Math.sin(t3);
    b2.push({ x: n3, y: r3 });
  }
  return b2;
}
d(ut, `generateArcPoints`);
async function dt(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2 } = await H(e2, t2, W(t2)), o2 = a2.width + t2.padding + 20, s2 = a2.height + t2.padding, c2 = s2 / 2, l2 = c2 / (2.5 + s2 / 50), { cssStyles: u2 } = t2, d2 = [{ x: o2 / 2, y: -s2 / 2 }, { x: -o2 / 2, y: -s2 / 2 }, ...ut(-o2 / 2, -s2 / 2, -o2 / 2, s2 / 2, l2, c2, false), { x: o2 / 2, y: s2 / 2 }, ...ut(o2 / 2, s2 / 2, o2 / 2, -s2 / 2, l2, c2, true)], f2 = V.svg(i2), p2 = v(t2, {});
  t2.look !== `handDrawn` && (p2.roughness = 0, p2.fillStyle = `solid`);
  let m2 = G(d2), h2 = f2.path(m2, p2), g2 = i2.insert(() => h2, `:first-child`);
  return g2.attr(`class`, `basic label-container`), u2 && t2.look !== `handDrawn` && g2.selectAll(`path`).attr(`style`, u2), r2 && t2.look !== `handDrawn` && g2.selectAll(`path`).attr(`style`, r2), g2.attr(`transform`, `translate(${l2 / 2}, 0)`), U(t2, g2), t2.intersect = function(e3) {
    return J.polygon(t2, d2, e3);
  }, i2;
}
d(dt, `bowTieRect`);
function Y(e2, t2, n2, r2) {
  return e2.insert(`polygon`, `:first-child`).attr(`points`, r2.map(function(e3) {
    return e3.x + `,` + e3.y;
  }).join(` `)).attr(`class`, `label-container`).attr(`transform`, `translate(` + -t2 / 2 + `,` + n2 / 2 + `)`);
}
d(Y, `insertPolygonShape`);
async function ft(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2 } = await H(e2, t2, W(t2)), o2 = a2.height + t2.padding, s2 = a2.width + t2.padding + 12, c2 = s2, l2 = -o2, u2 = [{ x: 12, y: l2 }, { x: c2, y: l2 }, { x: c2, y: 0 }, { x: 0, y: 0 }, { x: 0, y: l2 + 12 }, { x: 12, y: l2 }], d2, { cssStyles: f2 } = t2;
  if (t2.look === `handDrawn`) {
    let e3 = V.svg(i2), n3 = v(t2, {}), r3 = G(u2), a3 = e3.path(r3, n3);
    d2 = i2.insert(() => a3, `:first-child`).attr(`transform`, `translate(${-s2 / 2}, ${o2 / 2})`), f2 && d2.attr(`style`, f2);
  } else d2 = Y(i2, s2, o2, u2);
  return r2 && d2.attr(`style`, r2), U(t2, d2), t2.intersect = function(e3) {
    return J.polygon(t2, u2, e3);
  }, i2;
}
d(ft, `card`);
function pt(e2, t2) {
  let { nodeStyles: n2 } = y(t2);
  t2.label = ``;
  let r2 = e2.insert(`g`).attr(`class`, W(t2)).attr(`id`, t2.domId ?? t2.id), { cssStyles: i2 } = t2, a2 = Math.max(28, t2.width ?? 0), o2 = [{ x: 0, y: a2 / 2 }, { x: a2 / 2, y: 0 }, { x: 0, y: -a2 / 2 }, { x: -a2 / 2, y: 0 }], s2 = V.svg(r2), c2 = v(t2, {});
  t2.look !== `handDrawn` && (c2.roughness = 0, c2.fillStyle = `solid`);
  let l2 = G(o2), u2 = s2.path(l2, c2), d2 = r2.insert(() => u2, `:first-child`);
  return i2 && t2.look !== `handDrawn` && d2.selectAll(`path`).attr(`style`, i2), n2 && t2.look !== `handDrawn` && d2.selectAll(`path`).attr(`style`, n2), t2.width = 28, t2.height = 28, t2.intersect = function(e3) {
    return J.polygon(t2, o2, e3);
  }, r2;
}
d(pt, `choice`);
async function mt(e2, t2, n2) {
  let { labelStyles: r2, nodeStyles: i2 } = y(t2);
  t2.labelStyle = r2;
  let { shapeSvg: a2, bbox: o2, halfPadding: s2 } = await H(e2, t2, W(t2)), c2 = (n2 == null ? void 0 : n2.padding) ?? s2, l2 = o2.width / 2 + c2, d2, { cssStyles: f2 } = t2;
  if (t2.look === `handDrawn`) {
    let e3 = V.svg(a2), n3 = v(t2, {}), r3 = e3.circle(0, 0, l2 * 2, n3);
    d2 = a2.insert(() => r3, `:first-child`), d2.attr(`class`, `basic label-container`).attr(`style`, g(f2));
  } else d2 = a2.insert(`circle`, `:first-child`).attr(`class`, `basic label-container`).attr(`style`, i2).attr(`r`, l2).attr(`cx`, 0).attr(`cy`, 0);
  return U(t2, d2), t2.calcIntersect = function(e3, t3) {
    let n3 = e3.width / 2;
    return J.circle(e3, n3, t3);
  }, t2.intersect = function(e3) {
    return u.info(`Circle intersect`, t2, l2, e3), J.circle(t2, l2, e3);
  }, a2;
}
d(mt, `circle`);
function ht(e2) {
  let t2 = Math.cos(Math.PI / 4), n2 = Math.sin(Math.PI / 4), r2 = e2 * 2, i2 = { x: r2 / 2 * t2, y: r2 / 2 * n2 }, a2 = { x: -(r2 / 2) * t2, y: r2 / 2 * n2 }, o2 = { x: -(r2 / 2) * t2, y: -(r2 / 2) * n2 }, s2 = { x: r2 / 2 * t2, y: -(r2 / 2) * n2 };
  return `M ${a2.x},${a2.y} L ${s2.x},${s2.y}
                   M ${i2.x},${i2.y} L ${o2.x},${o2.y}`;
}
d(ht, `createLine`);
function gt(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2, t2.label = ``;
  let i2 = e2.insert(`g`).attr(`class`, W(t2)).attr(`id`, t2.domId ?? t2.id), a2 = Math.max(30, (t2 == null ? void 0 : t2.width) ?? 0), { cssStyles: o2 } = t2, s2 = V.svg(i2), c2 = v(t2, {});
  t2.look !== `handDrawn` && (c2.roughness = 0, c2.fillStyle = `solid`);
  let l2 = s2.circle(0, 0, a2 * 2, c2), d2 = ht(a2), f2 = s2.path(d2, c2), p2 = i2.insert(() => l2, `:first-child`);
  return p2.insert(() => f2), o2 && t2.look !== `handDrawn` && p2.selectAll(`path`).attr(`style`, o2), r2 && t2.look !== `handDrawn` && p2.selectAll(`path`).attr(`style`, r2), U(t2, p2), t2.intersect = function(e3) {
    return u.info(`crossedCircle intersect`, t2, { radius: a2, point: e3 }), J.circle(t2, a2, e3);
  }, i2;
}
d(gt, `crossedCircle`);
function X(e2, t2, n2, r2 = 100, i2 = 0, a2 = 180) {
  let o2 = [], s2 = i2 * Math.PI / 180, c2 = (a2 * Math.PI / 180 - s2) / (r2 - 1);
  for (let i3 = 0; i3 < r2; i3++) {
    let r3 = s2 + i3 * c2, a3 = e2 + n2 * Math.cos(r3), l2 = t2 + n2 * Math.sin(r3);
    o2.push({ x: -a3, y: -l2 });
  }
  return o2;
}
d(X, `generateCirclePoints`);
async function _t(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, label: o2 } = await H(e2, t2, W(t2)), s2 = a2.width + (t2.padding ?? 0), c2 = a2.height + (t2.padding ?? 0), l2 = Math.max(5, c2 * 0.1), { cssStyles: u2 } = t2, d2 = [...X(s2 / 2, -c2 / 2, l2, 30, -90, 0), { x: -s2 / 2 - l2, y: l2 }, ...X(s2 / 2 + l2 * 2, -l2, l2, 20, -180, -270), ...X(s2 / 2 + l2 * 2, l2, l2, 20, -90, -180), { x: -s2 / 2 - l2, y: -c2 / 2 }, ...X(s2 / 2, c2 / 2, l2, 20, 0, 90)], f2 = [{ x: s2 / 2, y: -c2 / 2 - l2 }, { x: -s2 / 2, y: -c2 / 2 - l2 }, ...X(s2 / 2, -c2 / 2, l2, 20, -90, 0), { x: -s2 / 2 - l2, y: -l2 }, ...X(s2 / 2 + s2 * 0.1, -l2, l2, 20, -180, -270), ...X(s2 / 2 + s2 * 0.1, l2, l2, 20, -90, -180), { x: -s2 / 2 - l2, y: c2 / 2 }, ...X(s2 / 2, c2 / 2, l2, 20, 0, 90), { x: -s2 / 2, y: c2 / 2 + l2 }, { x: s2 / 2, y: c2 / 2 + l2 }], p2 = V.svg(i2), m2 = v(t2, { fill: `none` });
  t2.look !== `handDrawn` && (m2.roughness = 0, m2.fillStyle = `solid`);
  let h2 = G(d2).replace(`Z`, ``), g2 = p2.path(h2, m2), _2 = G(f2), b2 = p2.path(_2, { ...m2 }), x2 = i2.insert(`g`, `:first-child`);
  return x2.insert(() => b2, `:first-child`).attr(`stroke-opacity`, 0), x2.insert(() => g2, `:first-child`), x2.attr(`class`, `text`), u2 && t2.look !== `handDrawn` && x2.selectAll(`path`).attr(`style`, u2), r2 && t2.look !== `handDrawn` && x2.selectAll(`path`).attr(`style`, r2), x2.attr(`transform`, `translate(${l2}, 0)`), o2.attr(`transform`, `translate(${-s2 / 2 + l2 - (a2.x - (a2.left ?? 0))},${-c2 / 2 + (t2.padding ?? 0) / 2 - (a2.y - (a2.top ?? 0))})`), U(t2, x2), t2.intersect = function(e3) {
    return J.polygon(t2, f2, e3);
  }, i2;
}
d(_t, `curlyBraceLeft`);
function Z(e2, t2, n2, r2 = 100, i2 = 0, a2 = 180) {
  let o2 = [], s2 = i2 * Math.PI / 180, c2 = (a2 * Math.PI / 180 - s2) / (r2 - 1);
  for (let i3 = 0; i3 < r2; i3++) {
    let r3 = s2 + i3 * c2, a3 = e2 + n2 * Math.cos(r3), l2 = t2 + n2 * Math.sin(r3);
    o2.push({ x: a3, y: l2 });
  }
  return o2;
}
d(Z, `generateCirclePoints`);
async function vt(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, label: o2 } = await H(e2, t2, W(t2)), s2 = a2.width + (t2.padding ?? 0), c2 = a2.height + (t2.padding ?? 0), l2 = Math.max(5, c2 * 0.1), { cssStyles: u2 } = t2, d2 = [...Z(s2 / 2, -c2 / 2, l2, 20, -90, 0), { x: s2 / 2 + l2, y: -l2 }, ...Z(s2 / 2 + l2 * 2, -l2, l2, 20, -180, -270), ...Z(s2 / 2 + l2 * 2, l2, l2, 20, -90, -180), { x: s2 / 2 + l2, y: c2 / 2 }, ...Z(s2 / 2, c2 / 2, l2, 20, 0, 90)], f2 = [{ x: -s2 / 2, y: -c2 / 2 - l2 }, { x: s2 / 2, y: -c2 / 2 - l2 }, ...Z(s2 / 2, -c2 / 2, l2, 20, -90, 0), { x: s2 / 2 + l2, y: -l2 }, ...Z(s2 / 2 + l2 * 2, -l2, l2, 20, -180, -270), ...Z(s2 / 2 + l2 * 2, l2, l2, 20, -90, -180), { x: s2 / 2 + l2, y: c2 / 2 }, ...Z(s2 / 2, c2 / 2, l2, 20, 0, 90), { x: s2 / 2, y: c2 / 2 + l2 }, { x: -s2 / 2, y: c2 / 2 + l2 }], p2 = V.svg(i2), m2 = v(t2, { fill: `none` });
  t2.look !== `handDrawn` && (m2.roughness = 0, m2.fillStyle = `solid`);
  let h2 = G(d2).replace(`Z`, ``), g2 = p2.path(h2, m2), _2 = G(f2), b2 = p2.path(_2, { ...m2 }), x2 = i2.insert(`g`, `:first-child`);
  return x2.insert(() => b2, `:first-child`).attr(`stroke-opacity`, 0), x2.insert(() => g2, `:first-child`), x2.attr(`class`, `text`), u2 && t2.look !== `handDrawn` && x2.selectAll(`path`).attr(`style`, u2), r2 && t2.look !== `handDrawn` && x2.selectAll(`path`).attr(`style`, r2), x2.attr(`transform`, `translate(${-l2}, 0)`), o2.attr(`transform`, `translate(${-s2 / 2 + (t2.padding ?? 0) / 2 - (a2.x - (a2.left ?? 0))},${-c2 / 2 + (t2.padding ?? 0) / 2 - (a2.y - (a2.top ?? 0))})`), U(t2, x2), t2.intersect = function(e3) {
    return J.polygon(t2, f2, e3);
  }, i2;
}
d(vt, `curlyBraceRight`);
function Q(e2, t2, n2, r2 = 100, i2 = 0, a2 = 180) {
  let o2 = [], s2 = i2 * Math.PI / 180, c2 = (a2 * Math.PI / 180 - s2) / (r2 - 1);
  for (let i3 = 0; i3 < r2; i3++) {
    let r3 = s2 + i3 * c2, a3 = e2 + n2 * Math.cos(r3), l2 = t2 + n2 * Math.sin(r3);
    o2.push({ x: -a3, y: -l2 });
  }
  return o2;
}
d(Q, `generateCirclePoints`);
async function yt(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, label: o2 } = await H(e2, t2, W(t2)), s2 = a2.width + (t2.padding ?? 0), c2 = a2.height + (t2.padding ?? 0), l2 = Math.max(5, c2 * 0.1), { cssStyles: u2 } = t2, d2 = [...Q(s2 / 2, -c2 / 2, l2, 30, -90, 0), { x: -s2 / 2 - l2, y: l2 }, ...Q(s2 / 2 + l2 * 2, -l2, l2, 20, -180, -270), ...Q(s2 / 2 + l2 * 2, l2, l2, 20, -90, -180), { x: -s2 / 2 - l2, y: -c2 / 2 }, ...Q(s2 / 2, c2 / 2, l2, 20, 0, 90)], f2 = [...Q(-s2 / 2 + l2 + l2 / 2, -c2 / 2, l2, 20, -90, -180), { x: s2 / 2 - l2 / 2, y: l2 }, ...Q(-s2 / 2 - l2 / 2, -l2, l2, 20, 0, 90), ...Q(-s2 / 2 - l2 / 2, l2, l2, 20, -90, 0), { x: s2 / 2 - l2 / 2, y: -l2 }, ...Q(-s2 / 2 + l2 + l2 / 2, c2 / 2, l2, 30, -180, -270)], p2 = [{ x: s2 / 2, y: -c2 / 2 - l2 }, { x: -s2 / 2, y: -c2 / 2 - l2 }, ...Q(s2 / 2, -c2 / 2, l2, 20, -90, 0), { x: -s2 / 2 - l2, y: -l2 }, ...Q(s2 / 2 + l2 * 2, -l2, l2, 20, -180, -270), ...Q(s2 / 2 + l2 * 2, l2, l2, 20, -90, -180), { x: -s2 / 2 - l2, y: c2 / 2 }, ...Q(s2 / 2, c2 / 2, l2, 20, 0, 90), { x: -s2 / 2, y: c2 / 2 + l2 }, { x: s2 / 2 - l2 - l2 / 2, y: c2 / 2 + l2 }, ...Q(-s2 / 2 + l2 + l2 / 2, -c2 / 2, l2, 20, -90, -180), { x: s2 / 2 - l2 / 2, y: l2 }, ...Q(-s2 / 2 - l2 / 2, -l2, l2, 20, 0, 90), ...Q(-s2 / 2 - l2 / 2, l2, l2, 20, -90, 0), { x: s2 / 2 - l2 / 2, y: -l2 }, ...Q(-s2 / 2 + l2 + l2 / 2, c2 / 2, l2, 30, -180, -270)], m2 = V.svg(i2), h2 = v(t2, { fill: `none` });
  t2.look !== `handDrawn` && (h2.roughness = 0, h2.fillStyle = `solid`);
  let g2 = G(d2).replace(`Z`, ``), _2 = m2.path(g2, h2), b2 = G(f2).replace(`Z`, ``), x2 = m2.path(b2, h2), S2 = G(p2), C2 = m2.path(S2, { ...h2 }), w2 = i2.insert(`g`, `:first-child`);
  return w2.insert(() => C2, `:first-child`).attr(`stroke-opacity`, 0), w2.insert(() => _2, `:first-child`), w2.insert(() => x2, `:first-child`), w2.attr(`class`, `text`), u2 && t2.look !== `handDrawn` && w2.selectAll(`path`).attr(`style`, u2), r2 && t2.look !== `handDrawn` && w2.selectAll(`path`).attr(`style`, r2), w2.attr(`transform`, `translate(${l2 - l2 / 4}, 0)`), o2.attr(`transform`, `translate(${-s2 / 2 + (t2.padding ?? 0) / 2 - (a2.x - (a2.left ?? 0))},${-c2 / 2 + (t2.padding ?? 0) / 2 - (a2.y - (a2.top ?? 0))})`), U(t2, w2), t2.intersect = function(e3) {
    return J.polygon(t2, p2, e3);
  }, i2;
}
d(yt, `curlyBraces`);
async function bt(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2 } = await H(e2, t2, W(t2)), o2 = Math.max(80, (a2.width + (t2.padding ?? 0) * 2) * 1.25, (t2 == null ? void 0 : t2.width) ?? 0), s2 = Math.max(20, a2.height + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.height) ?? 0), c2 = s2 / 2, { cssStyles: l2 } = t2, u2 = V.svg(i2), d2 = v(t2, {});
  t2.look !== `handDrawn` && (d2.roughness = 0, d2.fillStyle = `solid`);
  let f2 = o2, p2 = s2, m2 = f2 - c2, h2 = p2 / 4, g2 = [{ x: m2, y: 0 }, { x: h2, y: 0 }, { x: 0, y: p2 / 2 }, { x: h2, y: p2 }, { x: m2, y: p2 }, ...Ue(-m2, -p2 / 2, c2, 50, 270, 90)], _2 = G(g2), b2 = u2.path(_2, d2), x2 = i2.insert(() => b2, `:first-child`);
  return x2.attr(`class`, `basic label-container`), l2 && t2.look !== `handDrawn` && x2.selectChildren(`path`).attr(`style`, l2), r2 && t2.look !== `handDrawn` && x2.selectChildren(`path`).attr(`style`, r2), x2.attr(`transform`, `translate(${-o2 / 2}, ${-s2 / 2})`), U(t2, x2), t2.intersect = function(e3) {
    return J.polygon(t2, g2, e3);
  }, i2;
}
d(bt, `curvedTrapezoid`);
var xt = d((e2, t2, n2, r2, i2, a2) => [`M${e2},${t2 + a2}`, `a${i2},${a2} 0,0,0 ${n2},0`, `a${i2},${a2} 0,0,0 ${-n2},0`, `l0,${r2}`, `a${i2},${a2} 0,0,0 ${n2},0`, `l0,${-r2}`].join(` `), `createCylinderPathD`), St = d((e2, t2, n2, r2, i2, a2) => [`M${e2},${t2 + a2}`, `M${e2 + n2},${t2 + a2}`, `a${i2},${a2} 0,0,0 ${-n2},0`, `l0,${r2}`, `a${i2},${a2} 0,0,0 ${n2},0`, `l0,${-r2}`].join(` `), `createOuterCylinderPathD`), Ct = d((e2, t2, n2, r2, i2, a2) => [`M${e2 - n2 / 2},${-r2 / 2}`, `a${i2},${a2} 0,0,0 ${n2},0`].join(` `), `createInnerCylinderPathD`);
async function wt(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, label: o2 } = await H(e2, t2, W(t2)), s2 = Math.max(a2.width + t2.padding, t2.width ?? 0), c2 = s2 / 2, l2 = c2 / (2.5 + s2 / 50), u2 = Math.max(a2.height + l2 + t2.padding, t2.height ?? 0), d2, { cssStyles: f2 } = t2;
  if (t2.look === `handDrawn`) {
    let e3 = V.svg(i2), n3 = St(0, 0, s2, u2, c2, l2), r3 = Ct(0, l2, s2, u2, c2, l2), a3 = e3.path(n3, v(t2, {})), o3 = e3.path(r3, v(t2, { fill: `none` }));
    d2 = i2.insert(() => o3, `:first-child`), d2 = i2.insert(() => a3, `:first-child`), d2.attr(`class`, `basic label-container`), f2 && d2.attr(`style`, f2);
  } else {
    let e3 = xt(0, 0, s2, u2, c2, l2);
    d2 = i2.insert(`path`, `:first-child`).attr(`d`, e3).attr(`class`, `basic label-container`).attr(`style`, g(f2)).attr(`style`, r2);
  }
  return d2.attr(`label-offset-y`, l2), d2.attr(`transform`, `translate(${-s2 / 2}, ${-(u2 / 2 + l2)})`), U(t2, d2), o2.attr(`transform`, `translate(${-(a2.width / 2) - (a2.x - (a2.left ?? 0))}, ${-(a2.height / 2) + (t2.padding ?? 0) / 1.5 - (a2.y - (a2.top ?? 0))})`), t2.intersect = function(e3) {
    let n3 = J.rect(t2, e3), r3 = n3.x - (t2.x ?? 0);
    if (c2 != 0 && (Math.abs(r3) < (t2.width ?? 0) / 2 || Math.abs(r3) == (t2.width ?? 0) / 2 && Math.abs(n3.y - (t2.y ?? 0)) > (t2.height ?? 0) / 2 - l2)) {
      let i3 = l2 * l2 * (1 - r3 * r3 / (c2 * c2));
      i3 > 0 && (i3 = Math.sqrt(i3)), i3 = l2 - i3, e3.y - (t2.y ?? 0) > 0 && (i3 = -i3), n3.y += i3;
    }
    return n3;
  }, i2;
}
d(wt, `cylinder`);
async function Tt(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, label: o2 } = await H(e2, t2, W(t2)), s2 = a2.width + t2.padding, c2 = a2.height + t2.padding, l2 = c2 * 0.2, u2 = -s2 / 2, d2 = -c2 / 2 - l2 / 2, { cssStyles: f2 } = t2, p2 = V.svg(i2), m2 = v(t2, {});
  t2.look !== `handDrawn` && (m2.roughness = 0, m2.fillStyle = `solid`);
  let h2 = [{ x: u2, y: d2 + l2 }, { x: -u2, y: d2 + l2 }, { x: -u2, y: -d2 }, { x: u2, y: -d2 }, { x: u2, y: d2 }, { x: -u2, y: d2 }, { x: -u2, y: d2 + l2 }], g2 = p2.polygon(h2.map((e3) => [e3.x, e3.y]), m2), _2 = i2.insert(() => g2, `:first-child`);
  return _2.attr(`class`, `basic label-container`), f2 && t2.look !== `handDrawn` && _2.selectAll(`path`).attr(`style`, f2), r2 && t2.look !== `handDrawn` && _2.selectAll(`path`).attr(`style`, r2), o2.attr(`transform`, `translate(${u2 + (t2.padding ?? 0) / 2 - (a2.x - (a2.left ?? 0))}, ${d2 + l2 + (t2.padding ?? 0) / 2 - (a2.y - (a2.top ?? 0))})`), U(t2, _2), t2.intersect = function(e3) {
    return J.rect(t2, e3);
  }, i2;
}
d(Tt, `dividedRectangle`);
async function Et(e2, t2) {
  var _a, _b;
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, halfPadding: o2 } = await H(e2, t2, W(t2)), s2 = a2.width / 2 + o2 + 5, c2 = a2.width / 2 + o2, l2, { cssStyles: d2 } = t2;
  if (t2.look === `handDrawn`) {
    let e3 = V.svg(i2), n3 = v(t2, { roughness: 0.2, strokeWidth: 2.5 }), r3 = v(t2, { roughness: 0.2, strokeWidth: 1.5 }), a3 = e3.circle(0, 0, s2 * 2, n3), o3 = e3.circle(0, 0, c2 * 2, r3);
    l2 = i2.insert(`g`, `:first-child`), l2.attr(`class`, g(t2.cssClasses)).attr(`style`, g(d2)), (_a = l2.node()) == null ? void 0 : _a.appendChild(a3), (_b = l2.node()) == null ? void 0 : _b.appendChild(o3);
  } else {
    l2 = i2.insert(`g`, `:first-child`);
    let e3 = l2.insert(`circle`, `:first-child`), t3 = l2.insert(`circle`);
    l2.attr(`class`, `basic label-container`).attr(`style`, r2), e3.attr(`class`, `outer-circle`).attr(`style`, r2).attr(`r`, s2).attr(`cx`, 0).attr(`cy`, 0), t3.attr(`class`, `inner-circle`).attr(`style`, r2).attr(`r`, c2).attr(`cx`, 0).attr(`cy`, 0);
  }
  return U(t2, l2), t2.intersect = function(e3) {
    return u.info(`DoubleCircle intersect`, t2, s2, e3), J.circle(t2, s2, e3);
  }, i2;
}
d(Et, `doublecircle`);
function Dt(e2, t2, { config: { themeVariables: n2 } }) {
  let { labelStyles: r2, nodeStyles: i2 } = y(t2);
  t2.label = ``, t2.labelStyle = r2;
  let a2 = e2.insert(`g`).attr(`class`, W(t2)).attr(`id`, t2.domId ?? t2.id), { cssStyles: o2 } = t2, s2 = V.svg(a2), { nodeBorder: c2 } = n2, l2 = v(t2, { fillStyle: `solid` });
  t2.look !== `handDrawn` && (l2.roughness = 0);
  let d2 = s2.circle(0, 0, 14, l2), f2 = a2.insert(() => d2, `:first-child`);
  return f2.selectAll(`path`).attr(`style`, `fill: ${c2} !important;`), o2 && o2.length > 0 && t2.look !== `handDrawn` && f2.selectAll(`path`).attr(`style`, o2), i2 && t2.look !== `handDrawn` && f2.selectAll(`path`).attr(`style`, i2), U(t2, f2), t2.intersect = function(e3) {
    return u.info(`filledCircle intersect`, t2, { radius: 7, point: e3 }), J.circle(t2, 7, e3);
  }, a2;
}
d(Dt, `filledCircle`);
async function Ot(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, label: o2 } = await H(e2, t2, W(t2)), s2 = a2.width + (t2.padding ?? 0), c2 = s2 + a2.height, l2 = s2 + a2.height, d2 = [{ x: 0, y: -c2 }, { x: l2, y: -c2 }, { x: l2 / 2, y: 0 }], { cssStyles: f2 } = t2, p2 = V.svg(i2), m2 = v(t2, {});
  t2.look !== `handDrawn` && (m2.roughness = 0, m2.fillStyle = `solid`);
  let h2 = G(d2), g2 = p2.path(h2, m2), _2 = i2.insert(() => g2, `:first-child`).attr(`transform`, `translate(${-c2 / 2}, ${c2 / 2})`);
  return f2 && t2.look !== `handDrawn` && _2.selectChildren(`path`).attr(`style`, f2), r2 && t2.look !== `handDrawn` && _2.selectChildren(`path`).attr(`style`, r2), t2.width = s2, t2.height = c2, U(t2, _2), o2.attr(`transform`, `translate(${-a2.width / 2 - (a2.x - (a2.left ?? 0))}, ${-c2 / 2 + (t2.padding ?? 0) / 2 + (a2.y - (a2.top ?? 0))})`), t2.intersect = function(e3) {
    return u.info(`Triangle intersect`, t2, d2, e3), J.polygon(t2, d2, e3);
  }, i2;
}
d(Ot, `flippedTriangle`);
function kt(e2, t2, { dir: n2, config: { state: r2, themeVariables: i2 } }) {
  let { nodeStyles: a2 } = y(t2);
  t2.label = ``;
  let o2 = e2.insert(`g`).attr(`class`, W(t2)).attr(`id`, t2.domId ?? t2.id), { cssStyles: s2 } = t2, c2 = Math.max(70, (t2 == null ? void 0 : t2.width) ?? 0), l2 = Math.max(10, (t2 == null ? void 0 : t2.height) ?? 0);
  n2 === `LR` && (c2 = Math.max(10, (t2 == null ? void 0 : t2.width) ?? 0), l2 = Math.max(70, (t2 == null ? void 0 : t2.height) ?? 0));
  let u2 = -1 * c2 / 2, d2 = -1 * l2 / 2, f2 = V.svg(o2), p2 = v(t2, { stroke: i2.lineColor, fill: i2.lineColor });
  t2.look !== `handDrawn` && (p2.roughness = 0, p2.fillStyle = `solid`);
  let m2 = f2.rectangle(u2, d2, c2, l2, p2), h2 = o2.insert(() => m2, `:first-child`);
  s2 && t2.look !== `handDrawn` && h2.selectAll(`path`).attr(`style`, s2), a2 && t2.look !== `handDrawn` && h2.selectAll(`path`).attr(`style`, a2), U(t2, h2);
  let g2 = (r2 == null ? void 0 : r2.padding) ?? 0;
  return t2.width && t2.height && (t2.width += g2 / 2 || 0, t2.height += g2 / 2 || 0), t2.intersect = function(e3) {
    return J.rect(t2, e3);
  }, o2;
}
d(kt, `forkJoin`);
async function At(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2 } = await H(e2, t2, W(t2)), o2 = Math.max(80, a2.width + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.width) ?? 0), s2 = Math.max(50, a2.height + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.height) ?? 0), c2 = s2 / 2, { cssStyles: l2 } = t2, d2 = V.svg(i2), f2 = v(t2, {});
  t2.look !== `handDrawn` && (f2.roughness = 0, f2.fillStyle = `solid`);
  let p2 = [{ x: -o2 / 2, y: -s2 / 2 }, { x: o2 / 2 - c2, y: -s2 / 2 }, ...Ue(-o2 / 2 + c2, 0, c2, 50, 90, 270), { x: o2 / 2 - c2, y: s2 / 2 }, { x: -o2 / 2, y: s2 / 2 }], m2 = G(p2), h2 = d2.path(m2, f2), g2 = i2.insert(() => h2, `:first-child`);
  return g2.attr(`class`, `basic label-container`), l2 && t2.look !== `handDrawn` && g2.selectChildren(`path`).attr(`style`, l2), r2 && t2.look !== `handDrawn` && g2.selectChildren(`path`).attr(`style`, r2), U(t2, g2), t2.intersect = function(e3) {
    return u.info(`Pill intersect`, t2, { radius: c2, point: e3 }), J.polygon(t2, p2, e3);
  }, i2;
}
d(At, `halfRoundedRectangle`);
async function jt(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2 } = await H(e2, t2, W(t2)), o2 = a2.height + (t2.padding ?? 0), s2 = a2.width + (t2.padding ?? 0) * 2.5, { cssStyles: c2 } = t2, l2 = V.svg(i2), u2 = v(t2, {});
  t2.look !== `handDrawn` && (u2.roughness = 0, u2.fillStyle = `solid`);
  let d2 = s2 / 2, f2 = d2 / 6;
  d2 += f2;
  let p2 = o2 / 2, m2 = p2 / 2, h2 = d2 - m2, g2 = [{ x: -h2, y: -p2 }, { x: 0, y: -p2 }, { x: h2, y: -p2 }, { x: d2, y: 0 }, { x: h2, y: p2 }, { x: 0, y: p2 }, { x: -h2, y: p2 }, { x: -d2, y: 0 }], _2 = G(g2), b2 = l2.path(_2, u2), x2 = i2.insert(() => b2, `:first-child`);
  return x2.attr(`class`, `basic label-container`), c2 && t2.look !== `handDrawn` && x2.selectChildren(`path`).attr(`style`, c2), r2 && t2.look !== `handDrawn` && x2.selectChildren(`path`).attr(`style`, r2), t2.width = s2, t2.height = o2, U(t2, x2), t2.intersect = function(e3) {
    return J.polygon(t2, g2, e3);
  }, i2;
}
d(jt, `hexagon`);
async function Mt(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.label = ``, t2.labelStyle = n2;
  let { shapeSvg: i2 } = await H(e2, t2, W(t2)), a2 = Math.max(30, (t2 == null ? void 0 : t2.width) ?? 0), o2 = Math.max(30, (t2 == null ? void 0 : t2.height) ?? 0), { cssStyles: s2 } = t2, c2 = V.svg(i2), l2 = v(t2, {});
  t2.look !== `handDrawn` && (l2.roughness = 0, l2.fillStyle = `solid`);
  let d2 = [{ x: 0, y: 0 }, { x: a2, y: 0 }, { x: 0, y: o2 }, { x: a2, y: o2 }], f2 = G(d2), p2 = c2.path(f2, l2), m2 = i2.insert(() => p2, `:first-child`);
  return m2.attr(`class`, `basic label-container`), s2 && t2.look !== `handDrawn` && m2.selectChildren(`path`).attr(`style`, s2), r2 && t2.look !== `handDrawn` && m2.selectChildren(`path`).attr(`style`, r2), m2.attr(`transform`, `translate(${-a2 / 2}, ${-o2 / 2})`), U(t2, m2), t2.intersect = function(e3) {
    return u.info(`Pill intersect`, t2, { points: d2 }), J.polygon(t2, d2, e3);
  }, i2;
}
d(Mt, `hourglass`);
async function Nt(e2, t2, { config: { themeVariables: n2, flowchart: r2 } }) {
  let { labelStyles: i2 } = y(t2);
  t2.labelStyle = i2;
  let a2 = t2.assetHeight ?? 48, o2 = t2.assetWidth ?? 48, s2 = Math.max(a2, o2), c2 = r2 == null ? void 0 : r2.wrappingWidth;
  t2.width = Math.max(s2, c2 ?? 0);
  let { shapeSvg: l2, bbox: d2, label: f2 } = await H(e2, t2, `icon-shape default`), p2 = t2.pos === `t`, m2 = s2, h2 = s2, { nodeBorder: g2 } = n2, { stylesMap: _2 } = x(t2), b2 = -h2 / 2, S2 = -m2 / 2, w2 = t2.label ? 8 : 0, T2 = V.svg(l2), E2 = v(t2, { stroke: `none`, fill: `none` });
  t2.look !== `handDrawn` && (E2.roughness = 0, E2.fillStyle = `solid`);
  let D2 = T2.rectangle(b2, S2, h2, m2, E2), O2 = Math.max(h2, d2.width), k2 = m2 + d2.height + w2, A2 = T2.rectangle(-O2 / 2, -k2 / 2, O2, k2, { ...E2, fill: `transparent`, stroke: `none` }), j2 = l2.insert(() => D2, `:first-child`), M2 = l2.insert(() => A2);
  if (t2.icon) {
    let e3 = l2.append(`g`);
    e3.html(`<g>${await C(t2.icon, { height: s2, width: s2, fallbackPrefix: `` })}</g>`);
    let n3 = e3.node().getBBox(), r3 = n3.width, i3 = n3.height, a3 = n3.x, o3 = n3.y;
    e3.attr(`transform`, `translate(${-r3 / 2 - a3},${p2 ? d2.height / 2 + w2 / 2 - i3 / 2 - o3 : -d2.height / 2 - w2 / 2 - i3 / 2 - o3})`), e3.attr(`style`, `color: ${_2.get(`stroke`) ?? g2};`);
  }
  return f2.attr(`transform`, `translate(${-d2.width / 2 - (d2.x - (d2.left ?? 0))},${p2 ? -k2 / 2 : k2 / 2 - d2.height})`), j2.attr(`transform`, `translate(0,${p2 ? d2.height / 2 + w2 / 2 : -d2.height / 2 - w2 / 2})`), U(t2, M2), t2.intersect = function(e3) {
    if (u.info(`iconSquare intersect`, t2, e3), !t2.label) return J.rect(t2, e3);
    let n3 = t2.x ?? 0, r3 = t2.y ?? 0, i3 = t2.height ?? 0, a3 = [];
    return a3 = p2 ? [{ x: n3 - d2.width / 2, y: r3 - i3 / 2 }, { x: n3 + d2.width / 2, y: r3 - i3 / 2 }, { x: n3 + d2.width / 2, y: r3 - i3 / 2 + d2.height + w2 }, { x: n3 + h2 / 2, y: r3 - i3 / 2 + d2.height + w2 }, { x: n3 + h2 / 2, y: r3 + i3 / 2 }, { x: n3 - h2 / 2, y: r3 + i3 / 2 }, { x: n3 - h2 / 2, y: r3 - i3 / 2 + d2.height + w2 }, { x: n3 - d2.width / 2, y: r3 - i3 / 2 + d2.height + w2 }] : [{ x: n3 - h2 / 2, y: r3 - i3 / 2 }, { x: n3 + h2 / 2, y: r3 - i3 / 2 }, { x: n3 + h2 / 2, y: r3 - i3 / 2 + m2 }, { x: n3 + d2.width / 2, y: r3 - i3 / 2 + m2 }, { x: n3 + d2.width / 2 / 2, y: r3 + i3 / 2 }, { x: n3 - d2.width / 2, y: r3 + i3 / 2 }, { x: n3 - d2.width / 2, y: r3 - i3 / 2 + m2 }, { x: n3 - h2 / 2, y: r3 - i3 / 2 + m2 }], J.polygon(t2, a3, e3);
  }, l2;
}
d(Nt, `icon`);
async function Pt(e2, t2, { config: { themeVariables: n2, flowchart: r2 } }) {
  let { labelStyles: i2 } = y(t2);
  t2.labelStyle = i2;
  let a2 = t2.assetHeight ?? 48, o2 = t2.assetWidth ?? 48, s2 = Math.max(a2, o2), c2 = r2 == null ? void 0 : r2.wrappingWidth;
  t2.width = Math.max(s2, c2 ?? 0);
  let { shapeSvg: l2, bbox: d2, label: f2 } = await H(e2, t2, `icon-shape default`), p2 = t2.label ? 8 : 0, m2 = t2.pos === `t`, { nodeBorder: h2, mainBkg: g2 } = n2, { stylesMap: _2 } = x(t2), b2 = V.svg(l2), S2 = v(t2, {});
  t2.look !== `handDrawn` && (S2.roughness = 0, S2.fillStyle = `solid`), S2.stroke = _2.get(`fill`) ?? g2;
  let w2 = l2.append(`g`);
  t2.icon && w2.html(`<g>${await C(t2.icon, { height: s2, width: s2, fallbackPrefix: `` })}</g>`);
  let T2 = w2.node().getBBox(), E2 = T2.width, D2 = T2.height, O2 = T2.x, k2 = T2.y, A2 = Math.max(E2, D2) * Math.SQRT2 + 40, j2 = b2.circle(0, 0, A2, S2), M2 = Math.max(A2, d2.width), N2 = A2 + d2.height + p2, P2 = b2.rectangle(-M2 / 2, -N2 / 2, M2, N2, { ...S2, fill: `transparent`, stroke: `none` }), F2 = l2.insert(() => j2, `:first-child`), I2 = l2.insert(() => P2);
  return w2.attr(`transform`, `translate(${-E2 / 2 - O2},${m2 ? d2.height / 2 + p2 / 2 - D2 / 2 - k2 : -d2.height / 2 - p2 / 2 - D2 / 2 - k2})`), w2.attr(`style`, `color: ${_2.get(`stroke`) ?? h2};`), f2.attr(`transform`, `translate(${-d2.width / 2 - (d2.x - (d2.left ?? 0))},${m2 ? -N2 / 2 : N2 / 2 - d2.height})`), F2.attr(`transform`, `translate(0,${m2 ? d2.height / 2 + p2 / 2 : -d2.height / 2 - p2 / 2})`), U(t2, I2), t2.intersect = function(e3) {
    return u.info(`iconSquare intersect`, t2, e3), J.rect(t2, e3);
  }, l2;
}
d(Pt, `iconCircle`);
async function Ft(e2, t2, { config: { themeVariables: n2, flowchart: r2 } }) {
  let { labelStyles: i2 } = y(t2);
  t2.labelStyle = i2;
  let a2 = t2.assetHeight ?? 48, o2 = t2.assetWidth ?? 48, s2 = Math.max(a2, o2), c2 = r2 == null ? void 0 : r2.wrappingWidth;
  t2.width = Math.max(s2, c2 ?? 0);
  let { shapeSvg: l2, bbox: d2, halfPadding: f2, label: p2 } = await H(e2, t2, `icon-shape default`), m2 = t2.pos === `t`, h2 = s2 + f2 * 2, g2 = s2 + f2 * 2, { nodeBorder: _2, mainBkg: b2 } = n2, { stylesMap: S2 } = x(t2), w2 = -g2 / 2, T2 = -h2 / 2, E2 = t2.label ? 8 : 0, D2 = V.svg(l2), O2 = v(t2, {});
  t2.look !== `handDrawn` && (O2.roughness = 0, O2.fillStyle = `solid`), O2.stroke = S2.get(`fill`) ?? b2;
  let k2 = D2.path(q(w2, T2, g2, h2, 5), O2), A2 = Math.max(g2, d2.width), j2 = h2 + d2.height + E2, M2 = D2.rectangle(-A2 / 2, -j2 / 2, A2, j2, { ...O2, fill: `transparent`, stroke: `none` }), N2 = l2.insert(() => k2, `:first-child`).attr(`class`, `icon-shape2`), P2 = l2.insert(() => M2);
  if (t2.icon) {
    let e3 = l2.append(`g`);
    e3.html(`<g>${await C(t2.icon, { height: s2, width: s2, fallbackPrefix: `` })}</g>`);
    let n3 = e3.node().getBBox(), r3 = n3.width, i3 = n3.height, a3 = n3.x, o3 = n3.y;
    e3.attr(`transform`, `translate(${-r3 / 2 - a3},${m2 ? d2.height / 2 + E2 / 2 - i3 / 2 - o3 : -d2.height / 2 - E2 / 2 - i3 / 2 - o3})`), e3.attr(`style`, `color: ${S2.get(`stroke`) ?? _2};`);
  }
  return p2.attr(`transform`, `translate(${-d2.width / 2 - (d2.x - (d2.left ?? 0))},${m2 ? -j2 / 2 : j2 / 2 - d2.height})`), N2.attr(`transform`, `translate(0,${m2 ? d2.height / 2 + E2 / 2 : -d2.height / 2 - E2 / 2})`), U(t2, P2), t2.intersect = function(e3) {
    if (u.info(`iconSquare intersect`, t2, e3), !t2.label) return J.rect(t2, e3);
    let n3 = t2.x ?? 0, r3 = t2.y ?? 0, i3 = t2.height ?? 0, a3 = [];
    return a3 = m2 ? [{ x: n3 - d2.width / 2, y: r3 - i3 / 2 }, { x: n3 + d2.width / 2, y: r3 - i3 / 2 }, { x: n3 + d2.width / 2, y: r3 - i3 / 2 + d2.height + E2 }, { x: n3 + g2 / 2, y: r3 - i3 / 2 + d2.height + E2 }, { x: n3 + g2 / 2, y: r3 + i3 / 2 }, { x: n3 - g2 / 2, y: r3 + i3 / 2 }, { x: n3 - g2 / 2, y: r3 - i3 / 2 + d2.height + E2 }, { x: n3 - d2.width / 2, y: r3 - i3 / 2 + d2.height + E2 }] : [{ x: n3 - g2 / 2, y: r3 - i3 / 2 }, { x: n3 + g2 / 2, y: r3 - i3 / 2 }, { x: n3 + g2 / 2, y: r3 - i3 / 2 + h2 }, { x: n3 + d2.width / 2, y: r3 - i3 / 2 + h2 }, { x: n3 + d2.width / 2 / 2, y: r3 + i3 / 2 }, { x: n3 - d2.width / 2, y: r3 + i3 / 2 }, { x: n3 - d2.width / 2, y: r3 - i3 / 2 + h2 }, { x: n3 - g2 / 2, y: r3 - i3 / 2 + h2 }], J.polygon(t2, a3, e3);
  }, l2;
}
d(Ft, `iconRounded`);
async function It(e2, t2, { config: { themeVariables: n2, flowchart: r2 } }) {
  let { labelStyles: i2 } = y(t2);
  t2.labelStyle = i2;
  let a2 = t2.assetHeight ?? 48, o2 = t2.assetWidth ?? 48, s2 = Math.max(a2, o2), c2 = r2 == null ? void 0 : r2.wrappingWidth;
  t2.width = Math.max(s2, c2 ?? 0);
  let { shapeSvg: l2, bbox: d2, halfPadding: f2, label: p2 } = await H(e2, t2, `icon-shape default`), m2 = t2.pos === `t`, h2 = s2 + f2 * 2, g2 = s2 + f2 * 2, { nodeBorder: _2, mainBkg: b2 } = n2, { stylesMap: S2 } = x(t2), w2 = -g2 / 2, T2 = -h2 / 2, E2 = t2.label ? 8 : 0, D2 = V.svg(l2), O2 = v(t2, {});
  t2.look !== `handDrawn` && (O2.roughness = 0, O2.fillStyle = `solid`), O2.stroke = S2.get(`fill`) ?? b2;
  let k2 = D2.path(q(w2, T2, g2, h2, 0.1), O2), A2 = Math.max(g2, d2.width), j2 = h2 + d2.height + E2, M2 = D2.rectangle(-A2 / 2, -j2 / 2, A2, j2, { ...O2, fill: `transparent`, stroke: `none` }), N2 = l2.insert(() => k2, `:first-child`), P2 = l2.insert(() => M2);
  if (t2.icon) {
    let e3 = l2.append(`g`);
    e3.html(`<g>${await C(t2.icon, { height: s2, width: s2, fallbackPrefix: `` })}</g>`);
    let n3 = e3.node().getBBox(), r3 = n3.width, i3 = n3.height, a3 = n3.x, o3 = n3.y;
    e3.attr(`transform`, `translate(${-r3 / 2 - a3},${m2 ? d2.height / 2 + E2 / 2 - i3 / 2 - o3 : -d2.height / 2 - E2 / 2 - i3 / 2 - o3})`), e3.attr(`style`, `color: ${S2.get(`stroke`) ?? _2};`);
  }
  return p2.attr(`transform`, `translate(${-d2.width / 2 - (d2.x - (d2.left ?? 0))},${m2 ? -j2 / 2 : j2 / 2 - d2.height})`), N2.attr(`transform`, `translate(0,${m2 ? d2.height / 2 + E2 / 2 : -d2.height / 2 - E2 / 2})`), U(t2, P2), t2.intersect = function(e3) {
    if (u.info(`iconSquare intersect`, t2, e3), !t2.label) return J.rect(t2, e3);
    let n3 = t2.x ?? 0, r3 = t2.y ?? 0, i3 = t2.height ?? 0, a3 = [];
    return a3 = m2 ? [{ x: n3 - d2.width / 2, y: r3 - i3 / 2 }, { x: n3 + d2.width / 2, y: r3 - i3 / 2 }, { x: n3 + d2.width / 2, y: r3 - i3 / 2 + d2.height + E2 }, { x: n3 + g2 / 2, y: r3 - i3 / 2 + d2.height + E2 }, { x: n3 + g2 / 2, y: r3 + i3 / 2 }, { x: n3 - g2 / 2, y: r3 + i3 / 2 }, { x: n3 - g2 / 2, y: r3 - i3 / 2 + d2.height + E2 }, { x: n3 - d2.width / 2, y: r3 - i3 / 2 + d2.height + E2 }] : [{ x: n3 - g2 / 2, y: r3 - i3 / 2 }, { x: n3 + g2 / 2, y: r3 - i3 / 2 }, { x: n3 + g2 / 2, y: r3 - i3 / 2 + h2 }, { x: n3 + d2.width / 2, y: r3 - i3 / 2 + h2 }, { x: n3 + d2.width / 2 / 2, y: r3 + i3 / 2 }, { x: n3 - d2.width / 2, y: r3 + i3 / 2 }, { x: n3 - d2.width / 2, y: r3 - i3 / 2 + h2 }, { x: n3 - g2 / 2, y: r3 - i3 / 2 + h2 }], J.polygon(t2, a3, e3);
  }, l2;
}
d(It, `iconSquare`);
async function Lt(e2, t2, { config: { flowchart: n2 } }) {
  let r2 = new Image();
  r2.src = (t2 == null ? void 0 : t2.img) ?? ``, await r2.decode();
  let i2 = Number(r2.naturalWidth.toString().replace(`px`, ``)), a2 = Number(r2.naturalHeight.toString().replace(`px`, ``));
  t2.imageAspectRatio = i2 / a2;
  let { labelStyles: o2 } = y(t2);
  t2.labelStyle = o2;
  let s2 = n2 == null ? void 0 : n2.wrappingWidth;
  t2.defaultWidth = n2 == null ? void 0 : n2.wrappingWidth;
  let c2 = Math.max(t2.label ? s2 ?? 0 : 0, (t2 == null ? void 0 : t2.assetWidth) ?? i2), l2 = t2.constraint === `on` && (t2 == null ? void 0 : t2.assetHeight) ? t2.assetHeight * t2.imageAspectRatio : c2, d2 = t2.constraint === `on` ? l2 / t2.imageAspectRatio : (t2 == null ? void 0 : t2.assetHeight) ?? a2;
  t2.width = Math.max(l2, s2 ?? 0);
  let { shapeSvg: f2, bbox: p2, label: m2 } = await H(e2, t2, `image-shape default`), h2 = t2.pos === `t`, g2 = -l2 / 2, _2 = -d2 / 2, b2 = t2.label ? 8 : 0, x2 = V.svg(f2), S2 = v(t2, {});
  t2.look !== `handDrawn` && (S2.roughness = 0, S2.fillStyle = `solid`);
  let C2 = x2.rectangle(g2, _2, l2, d2, S2), w2 = Math.max(l2, p2.width), T2 = d2 + p2.height + b2, E2 = x2.rectangle(-w2 / 2, -T2 / 2, w2, T2, { ...S2, fill: `none`, stroke: `none` }), D2 = f2.insert(() => C2, `:first-child`), O2 = f2.insert(() => E2);
  if (t2.img) {
    let e3 = f2.append(`image`);
    e3.attr(`href`, t2.img), e3.attr(`width`, l2), e3.attr(`height`, d2), e3.attr(`preserveAspectRatio`, `none`), e3.attr(`transform`, `translate(${-l2 / 2},${h2 ? T2 / 2 - d2 : -T2 / 2})`);
  }
  return m2.attr(`transform`, `translate(${-p2.width / 2 - (p2.x - (p2.left ?? 0))},${h2 ? -d2 / 2 - p2.height / 2 - b2 / 2 : d2 / 2 - p2.height / 2 + b2 / 2})`), D2.attr(`transform`, `translate(0,${h2 ? p2.height / 2 + b2 / 2 : -p2.height / 2 - b2 / 2})`), U(t2, O2), t2.intersect = function(e3) {
    if (u.info(`iconSquare intersect`, t2, e3), !t2.label) return J.rect(t2, e3);
    let n3 = t2.x ?? 0, r3 = t2.y ?? 0, i3 = t2.height ?? 0, a3 = [];
    return a3 = h2 ? [{ x: n3 - p2.width / 2, y: r3 - i3 / 2 }, { x: n3 + p2.width / 2, y: r3 - i3 / 2 }, { x: n3 + p2.width / 2, y: r3 - i3 / 2 + p2.height + b2 }, { x: n3 + l2 / 2, y: r3 - i3 / 2 + p2.height + b2 }, { x: n3 + l2 / 2, y: r3 + i3 / 2 }, { x: n3 - l2 / 2, y: r3 + i3 / 2 }, { x: n3 - l2 / 2, y: r3 - i3 / 2 + p2.height + b2 }, { x: n3 - p2.width / 2, y: r3 - i3 / 2 + p2.height + b2 }] : [{ x: n3 - l2 / 2, y: r3 - i3 / 2 }, { x: n3 + l2 / 2, y: r3 - i3 / 2 }, { x: n3 + l2 / 2, y: r3 - i3 / 2 + d2 }, { x: n3 + p2.width / 2, y: r3 - i3 / 2 + d2 }, { x: n3 + p2.width / 2 / 2, y: r3 + i3 / 2 }, { x: n3 - p2.width / 2, y: r3 + i3 / 2 }, { x: n3 - p2.width / 2, y: r3 - i3 / 2 + d2 }, { x: n3 - l2 / 2, y: r3 - i3 / 2 + d2 }], J.polygon(t2, a3, e3);
  }, f2;
}
d(Lt, `imageSquare`);
async function Rt(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2 } = await H(e2, t2, W(t2)), o2 = Math.max(a2.width + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.width) ?? 0), s2 = Math.max(a2.height + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.height) ?? 0), c2 = [{ x: 0, y: 0 }, { x: o2, y: 0 }, { x: o2 + 3 * s2 / 6, y: -s2 }, { x: -3 * s2 / 6, y: -s2 }], l2, { cssStyles: u2 } = t2;
  if (t2.look === `handDrawn`) {
    let e3 = V.svg(i2), n3 = v(t2, {}), r3 = G(c2), a3 = e3.path(r3, n3);
    l2 = i2.insert(() => a3, `:first-child`).attr(`transform`, `translate(${-o2 / 2}, ${s2 / 2})`), u2 && l2.attr(`style`, u2);
  } else l2 = Y(i2, o2, s2, c2);
  return r2 && l2.attr(`style`, r2), t2.width = o2, t2.height = s2, U(t2, l2), t2.intersect = function(e3) {
    return J.polygon(t2, c2, e3);
  }, i2;
}
d(Rt, `inv_trapezoid`);
async function zt(e2, t2, n2) {
  let { labelStyles: r2, nodeStyles: i2 } = y(t2);
  t2.labelStyle = r2;
  let { shapeSvg: a2, bbox: o2 } = await H(e2, t2, W(t2)), s2 = Math.max(o2.width + n2.labelPaddingX * 2, (t2 == null ? void 0 : t2.width) || 0), c2 = Math.max(o2.height + n2.labelPaddingY * 2, (t2 == null ? void 0 : t2.height) || 0), l2 = -s2 / 2, u2 = -c2 / 2, d2, { rx: f2, ry: p2 } = t2, { cssStyles: m2 } = t2;
  if ((n2 == null ? void 0 : n2.rx) && n2.ry && (f2 = n2.rx, p2 = n2.ry), t2.look === `handDrawn`) {
    let e3 = V.svg(a2), n3 = v(t2, {}), r3 = f2 || p2 ? e3.path(q(l2, u2, s2, c2, f2 || 0), n3) : e3.rectangle(l2, u2, s2, c2, n3);
    d2 = a2.insert(() => r3, `:first-child`), d2.attr(`class`, `basic label-container`).attr(`style`, g(m2));
  } else d2 = a2.insert(`rect`, `:first-child`), d2.attr(`class`, `basic label-container`).attr(`style`, i2).attr(`rx`, g(f2)).attr(`ry`, g(p2)).attr(`x`, l2).attr(`y`, u2).attr(`width`, s2).attr(`height`, c2);
  return U(t2, d2), t2.calcIntersect = function(e3, t3) {
    return J.rect(e3, t3);
  }, t2.intersect = function(e3) {
    return J.rect(t2, e3);
  }, a2;
}
d(zt, `drawRect`);
async function Bt(e2, t2) {
  let { shapeSvg: n2, bbox: r2, label: i2 } = await H(e2, t2, `label`), a2 = n2.insert(`rect`, `:first-child`);
  return a2.attr(`width`, 0.1).attr(`height`, 0.1), n2.attr(`class`, `label edgeLabel`), i2.attr(`transform`, `translate(${-(r2.width / 2) - (r2.x - (r2.left ?? 0))}, ${-(r2.height / 2) - (r2.y - (r2.top ?? 0))})`), U(t2, a2), t2.intersect = function(e3) {
    return J.rect(t2, e3);
  }, n2;
}
d(Bt, `labelRect`);
async function Vt(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2 } = await H(e2, t2, W(t2)), o2 = Math.max(a2.width + (t2.padding ?? 0), (t2 == null ? void 0 : t2.width) ?? 0), s2 = Math.max(a2.height + (t2.padding ?? 0), (t2 == null ? void 0 : t2.height) ?? 0), c2 = [{ x: 0, y: 0 }, { x: o2 + 3 * s2 / 6, y: 0 }, { x: o2, y: -s2 }, { x: -(3 * s2) / 6, y: -s2 }], l2, { cssStyles: u2 } = t2;
  if (t2.look === `handDrawn`) {
    let e3 = V.svg(i2), n3 = v(t2, {}), r3 = G(c2), a3 = e3.path(r3, n3);
    l2 = i2.insert(() => a3, `:first-child`).attr(`transform`, `translate(${-o2 / 2}, ${s2 / 2})`), u2 && l2.attr(`style`, u2);
  } else l2 = Y(i2, o2, s2, c2);
  return r2 && l2.attr(`style`, r2), t2.width = o2, t2.height = s2, U(t2, l2), t2.intersect = function(e3) {
    return J.polygon(t2, c2, e3);
  }, i2;
}
d(Vt, `lean_left`);
async function Ht(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2 } = await H(e2, t2, W(t2)), o2 = Math.max(a2.width + (t2.padding ?? 0), (t2 == null ? void 0 : t2.width) ?? 0), s2 = Math.max(a2.height + (t2.padding ?? 0), (t2 == null ? void 0 : t2.height) ?? 0), c2 = [{ x: -3 * s2 / 6, y: 0 }, { x: o2, y: 0 }, { x: o2 + 3 * s2 / 6, y: -s2 }, { x: 0, y: -s2 }], l2, { cssStyles: u2 } = t2;
  if (t2.look === `handDrawn`) {
    let e3 = V.svg(i2), n3 = v(t2, {}), r3 = G(c2), a3 = e3.path(r3, n3);
    l2 = i2.insert(() => a3, `:first-child`).attr(`transform`, `translate(${-o2 / 2}, ${s2 / 2})`), u2 && l2.attr(`style`, u2);
  } else l2 = Y(i2, o2, s2, c2);
  return r2 && l2.attr(`style`, r2), t2.width = o2, t2.height = s2, U(t2, l2), t2.intersect = function(e3) {
    return J.polygon(t2, c2, e3);
  }, i2;
}
d(Ht, `lean_right`);
function Ut(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.label = ``, t2.labelStyle = n2;
  let i2 = e2.insert(`g`).attr(`class`, W(t2)).attr(`id`, t2.domId ?? t2.id), { cssStyles: a2 } = t2, o2 = Math.max(35, (t2 == null ? void 0 : t2.width) ?? 0), s2 = Math.max(35, (t2 == null ? void 0 : t2.height) ?? 0), c2 = [{ x: o2, y: 0 }, { x: 0, y: s2 + 7 / 2 }, { x: o2 - 14, y: s2 + 7 / 2 }, { x: 0, y: 2 * s2 }, { x: o2, y: s2 - 7 / 2 }, { x: 14, y: s2 - 7 / 2 }], l2 = V.svg(i2), d2 = v(t2, {});
  t2.look !== `handDrawn` && (d2.roughness = 0, d2.fillStyle = `solid`);
  let f2 = G(c2), p2 = l2.path(f2, d2), m2 = i2.insert(() => p2, `:first-child`);
  return a2 && t2.look !== `handDrawn` && m2.selectAll(`path`).attr(`style`, a2), r2 && t2.look !== `handDrawn` && m2.selectAll(`path`).attr(`style`, r2), m2.attr(`transform`, `translate(-${o2 / 2},${-s2})`), U(t2, m2), t2.intersect = function(e3) {
    return u.info(`lightningBolt intersect`, t2, e3), J.polygon(t2, c2, e3);
  }, i2;
}
d(Ut, `lightningBolt`);
var Wt = d((e2, t2, n2, r2, i2, a2, o2) => [`M${e2},${t2 + a2}`, `a${i2},${a2} 0,0,0 ${n2},0`, `a${i2},${a2} 0,0,0 ${-n2},0`, `l0,${r2}`, `a${i2},${a2} 0,0,0 ${n2},0`, `l0,${-r2}`, `M${e2},${t2 + a2 + o2}`, `a${i2},${a2} 0,0,0 ${n2},0`].join(` `), `createCylinderPathD`), Gt = d((e2, t2, n2, r2, i2, a2, o2) => [`M${e2},${t2 + a2}`, `M${e2 + n2},${t2 + a2}`, `a${i2},${a2} 0,0,0 ${-n2},0`, `l0,${r2}`, `a${i2},${a2} 0,0,0 ${n2},0`, `l0,${-r2}`, `M${e2},${t2 + a2 + o2}`, `a${i2},${a2} 0,0,0 ${n2},0`].join(` `), `createOuterCylinderPathD`), Kt = d((e2, t2, n2, r2, i2, a2) => [`M${e2 - n2 / 2},${-r2 / 2}`, `a${i2},${a2} 0,0,0 ${n2},0`].join(` `), `createInnerCylinderPathD`);
async function qt(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, label: o2 } = await H(e2, t2, W(t2)), s2 = Math.max(a2.width + (t2.padding ?? 0), t2.width ?? 0), c2 = s2 / 2, l2 = c2 / (2.5 + s2 / 50), u2 = Math.max(a2.height + l2 + (t2.padding ?? 0), t2.height ?? 0), d2 = u2 * 0.1, f2, { cssStyles: p2 } = t2;
  if (t2.look === `handDrawn`) {
    let e3 = V.svg(i2), n3 = Gt(0, 0, s2, u2, c2, l2, d2), r3 = Kt(0, l2, s2, u2, c2, l2), a3 = v(t2, {}), o3 = e3.path(n3, a3), m2 = e3.path(r3, a3);
    i2.insert(() => m2, `:first-child`).attr(`class`, `line`), f2 = i2.insert(() => o3, `:first-child`), f2.attr(`class`, `basic label-container`), p2 && f2.attr(`style`, p2);
  } else {
    let e3 = Wt(0, 0, s2, u2, c2, l2, d2);
    f2 = i2.insert(`path`, `:first-child`).attr(`d`, e3).attr(`class`, `basic label-container`).attr(`style`, g(p2)).attr(`style`, r2);
  }
  return f2.attr(`label-offset-y`, l2), f2.attr(`transform`, `translate(${-s2 / 2}, ${-(u2 / 2 + l2)})`), U(t2, f2), o2.attr(`transform`, `translate(${-(a2.width / 2) - (a2.x - (a2.left ?? 0))}, ${-(a2.height / 2) + l2 - (a2.y - (a2.top ?? 0))})`), t2.intersect = function(e3) {
    let n3 = J.rect(t2, e3), r3 = n3.x - (t2.x ?? 0);
    if (c2 != 0 && (Math.abs(r3) < (t2.width ?? 0) / 2 || Math.abs(r3) == (t2.width ?? 0) / 2 && Math.abs(n3.y - (t2.y ?? 0)) > (t2.height ?? 0) / 2 - l2)) {
      let i3 = l2 * l2 * (1 - r3 * r3 / (c2 * c2));
      i3 > 0 && (i3 = Math.sqrt(i3)), i3 = l2 - i3, e3.y - (t2.y ?? 0) > 0 && (i3 = -i3), n3.y += i3;
    }
    return n3;
  }, i2;
}
d(qt, `linedCylinder`);
async function Jt(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, label: o2 } = await H(e2, t2, W(t2)), s2 = Math.max(a2.width + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.width) ?? 0), c2 = Math.max(a2.height + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.height) ?? 0), l2 = c2 / 4, u2 = c2 + l2, { cssStyles: d2 } = t2, f2 = V.svg(i2), p2 = v(t2, {});
  t2.look !== `handDrawn` && (p2.roughness = 0, p2.fillStyle = `solid`);
  let m2 = [{ x: -s2 / 2 - s2 / 2 * 0.1, y: -u2 / 2 }, { x: -s2 / 2 - s2 / 2 * 0.1, y: u2 / 2 }, ...K(-s2 / 2 - s2 / 2 * 0.1, u2 / 2, s2 / 2 + s2 / 2 * 0.1, u2 / 2, l2, 0.8), { x: s2 / 2 + s2 / 2 * 0.1, y: -u2 / 2 }, { x: -s2 / 2 - s2 / 2 * 0.1, y: -u2 / 2 }, { x: -s2 / 2, y: -u2 / 2 }, { x: -s2 / 2, y: u2 / 2 * 1.1 }, { x: -s2 / 2, y: -u2 / 2 }], h2 = f2.polygon(m2.map((e3) => [e3.x, e3.y]), p2), g2 = i2.insert(() => h2, `:first-child`);
  return g2.attr(`class`, `basic label-container`), d2 && t2.look !== `handDrawn` && g2.selectAll(`path`).attr(`style`, d2), r2 && t2.look !== `handDrawn` && g2.selectAll(`path`).attr(`style`, r2), g2.attr(`transform`, `translate(0,${-l2 / 2})`), o2.attr(`transform`, `translate(${-s2 / 2 + (t2.padding ?? 0) + s2 / 2 * 0.1 / 2 - (a2.x - (a2.left ?? 0))},${-c2 / 2 + (t2.padding ?? 0) - l2 / 2 - (a2.y - (a2.top ?? 0))})`), U(t2, g2), t2.intersect = function(e3) {
    return J.polygon(t2, m2, e3);
  }, i2;
}
d(Jt, `linedWaveEdgedRect`);
async function Yt(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, label: o2 } = await H(e2, t2, W(t2)), s2 = Math.max(a2.width + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.width) ?? 0), c2 = Math.max(a2.height + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.height) ?? 0), l2 = -s2 / 2, u2 = -c2 / 2, { cssStyles: d2 } = t2, f2 = V.svg(i2), p2 = v(t2, {}), m2 = [{ x: l2 - 5, y: u2 + 5 }, { x: l2 - 5, y: u2 + c2 + 5 }, { x: l2 + s2 - 5, y: u2 + c2 + 5 }, { x: l2 + s2 - 5, y: u2 + c2 }, { x: l2 + s2, y: u2 + c2 }, { x: l2 + s2, y: u2 + c2 - 5 }, { x: l2 + s2 + 5, y: u2 + c2 - 5 }, { x: l2 + s2 + 5, y: u2 - 5 }, { x: l2 + 5, y: u2 - 5 }, { x: l2 + 5, y: u2 }, { x: l2, y: u2 }, { x: l2, y: u2 + 5 }], h2 = [{ x: l2, y: u2 + 5 }, { x: l2 + s2 - 5, y: u2 + 5 }, { x: l2 + s2 - 5, y: u2 + c2 }, { x: l2 + s2, y: u2 + c2 }, { x: l2 + s2, y: u2 }, { x: l2, y: u2 }];
  t2.look !== `handDrawn` && (p2.roughness = 0, p2.fillStyle = `solid`);
  let g2 = G(m2), _2 = f2.path(g2, p2), b2 = G(h2), x2 = f2.path(b2, { ...p2, fill: `none` }), S2 = i2.insert(() => x2, `:first-child`);
  return S2.insert(() => _2, `:first-child`), S2.attr(`class`, `basic label-container`), d2 && t2.look !== `handDrawn` && S2.selectAll(`path`).attr(`style`, d2), r2 && t2.look !== `handDrawn` && S2.selectAll(`path`).attr(`style`, r2), o2.attr(`transform`, `translate(${-(a2.width / 2) - 5 - (a2.x - (a2.left ?? 0))}, ${-(a2.height / 2) + 5 - (a2.y - (a2.top ?? 0))})`), U(t2, S2), t2.intersect = function(e3) {
    return J.polygon(t2, m2, e3);
  }, i2;
}
d(Yt, `multiRect`);
async function Xt(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, label: o2 } = await H(e2, t2, W(t2)), s2 = Math.max(a2.width + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.width) ?? 0), c2 = Math.max(a2.height + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.height) ?? 0), l2 = c2 / 4, u2 = c2 + l2, d2 = -s2 / 2, f2 = -u2 / 2, { cssStyles: p2 } = t2, m2 = K(d2 - 5, f2 + u2 + 5, d2 + s2 - 5, f2 + u2 + 5, l2, 0.8), h2 = m2 == null ? void 0 : m2[m2.length - 1], g2 = [{ x: d2 - 5, y: f2 + 5 }, { x: d2 - 5, y: f2 + u2 + 5 }, ...m2, { x: d2 + s2 - 5, y: h2.y - 5 }, { x: d2 + s2, y: h2.y - 5 }, { x: d2 + s2, y: h2.y - 10 }, { x: d2 + s2 + 5, y: h2.y - 10 }, { x: d2 + s2 + 5, y: f2 - 5 }, { x: d2 + 5, y: f2 - 5 }, { x: d2 + 5, y: f2 }, { x: d2, y: f2 }, { x: d2, y: f2 + 5 }], _2 = [{ x: d2, y: f2 + 5 }, { x: d2 + s2 - 5, y: f2 + 5 }, { x: d2 + s2 - 5, y: h2.y - 5 }, { x: d2 + s2, y: h2.y - 5 }, { x: d2 + s2, y: f2 }, { x: d2, y: f2 }], b2 = V.svg(i2), x2 = v(t2, {});
  t2.look !== `handDrawn` && (x2.roughness = 0, x2.fillStyle = `solid`);
  let S2 = G(g2), C2 = b2.path(S2, x2), w2 = G(_2), T2 = b2.path(w2, x2), E2 = i2.insert(() => C2, `:first-child`);
  return E2.insert(() => T2), E2.attr(`class`, `basic label-container`), p2 && t2.look !== `handDrawn` && E2.selectAll(`path`).attr(`style`, p2), r2 && t2.look !== `handDrawn` && E2.selectAll(`path`).attr(`style`, r2), E2.attr(`transform`, `translate(0,${-l2 / 2})`), o2.attr(`transform`, `translate(${-(a2.width / 2) - 5 - (a2.x - (a2.left ?? 0))}, ${-(a2.height / 2) + 5 - l2 / 2 - (a2.y - (a2.top ?? 0))})`), U(t2, E2), t2.intersect = function(e3) {
    return J.polygon(t2, g2, e3);
  }, i2;
}
d(Xt, `multiWaveEdgedRectangle`);
async function Zt(e2, t2, { config: { themeVariables: n2 } }) {
  var _a;
  let { labelStyles: r2, nodeStyles: i2 } = y(t2);
  t2.labelStyle = r2, t2.useHtmlLabels || ((_a = l().flowchart) == null ? void 0 : _a.htmlLabels) !== false || (t2.centerLabel = true);
  let { shapeSvg: a2, bbox: o2, label: s2 } = await H(e2, t2, W(t2)), c2 = Math.max(o2.width + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.width) ?? 0), u2 = Math.max(o2.height + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.height) ?? 0), d2 = -c2 / 2, f2 = -u2 / 2, { cssStyles: p2 } = t2, m2 = V.svg(a2), h2 = v(t2, { fill: n2.noteBkgColor, stroke: n2.noteBorderColor });
  t2.look !== `handDrawn` && (h2.roughness = 0, h2.fillStyle = `solid`);
  let g2 = m2.rectangle(d2, f2, c2, u2, h2), _2 = a2.insert(() => g2, `:first-child`);
  return _2.attr(`class`, `basic label-container`), p2 && t2.look !== `handDrawn` && _2.selectAll(`path`).attr(`style`, p2), i2 && t2.look !== `handDrawn` && _2.selectAll(`path`).attr(`style`, i2), s2.attr(`transform`, `translate(${-o2.width / 2 - (o2.x - (o2.left ?? 0))}, ${-(o2.height / 2) - (o2.y - (o2.top ?? 0))})`), U(t2, _2), t2.intersect = function(e3) {
    return J.rect(t2, e3);
  }, a2;
}
d(Zt, `note`);
var Qt = d((e2, t2, n2) => [`M${e2 + n2 / 2},${t2}`, `L${e2 + n2},${t2 - n2 / 2}`, `L${e2 + n2 / 2},${t2 - n2}`, `L${e2},${t2 - n2 / 2}`, `Z`].join(` `), `createDecisionBoxPathD`);
async function $t(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2 } = await H(e2, t2, W(t2)), o2 = a2.width + t2.padding + (a2.height + t2.padding), s2 = 0.5, c2 = [{ x: o2 / 2, y: 0 }, { x: o2, y: -o2 / 2 }, { x: o2 / 2, y: -o2 }, { x: 0, y: -o2 / 2 }], l2, { cssStyles: u2 } = t2;
  if (t2.look === `handDrawn`) {
    let e3 = V.svg(i2), n3 = v(t2, {}), r3 = Qt(0, 0, o2), a3 = e3.path(r3, n3);
    l2 = i2.insert(() => a3, `:first-child`).attr(`transform`, `translate(${-o2 / 2 + s2}, ${o2 / 2})`), u2 && l2.attr(`style`, u2);
  } else l2 = Y(i2, o2, o2, c2), l2.attr(`transform`, `translate(${-o2 / 2 + s2}, ${o2 / 2})`);
  return r2 && l2.attr(`style`, r2), U(t2, l2), t2.calcIntersect = function(e3, t3) {
    let n3 = e3.width, r3 = [{ x: n3 / 2, y: 0 }, { x: n3, y: -n3 / 2 }, { x: n3 / 2, y: -n3 }, { x: 0, y: -n3 / 2 }], i3 = J.polygon(e3, r3, t3);
    return { x: i3.x - 0.5, y: i3.y - 0.5 };
  }, t2.intersect = function(e3) {
    return this.calcIntersect(t2, e3);
  }, i2;
}
d($t, `question`);
async function en(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, label: o2 } = await H(e2, t2, W(t2)), s2 = Math.max(a2.width + (t2.padding ?? 0), (t2 == null ? void 0 : t2.width) ?? 0), c2 = Math.max(a2.height + (t2.padding ?? 0), (t2 == null ? void 0 : t2.height) ?? 0), l2 = -s2 / 2, u2 = -c2 / 2, d2 = u2 / 2, f2 = [{ x: l2 + d2, y: u2 }, { x: l2, y: 0 }, { x: l2 + d2, y: -u2 }, { x: -l2, y: -u2 }, { x: -l2, y: u2 }], { cssStyles: p2 } = t2, m2 = V.svg(i2), h2 = v(t2, {});
  t2.look !== `handDrawn` && (h2.roughness = 0, h2.fillStyle = `solid`);
  let g2 = G(f2), _2 = m2.path(g2, h2), b2 = i2.insert(() => _2, `:first-child`);
  return b2.attr(`class`, `basic label-container`), p2 && t2.look !== `handDrawn` && b2.selectAll(`path`).attr(`style`, p2), r2 && t2.look !== `handDrawn` && b2.selectAll(`path`).attr(`style`, r2), b2.attr(`transform`, `translate(${-d2 / 2},0)`), o2.attr(`transform`, `translate(${-d2 / 2 - a2.width / 2 - (a2.x - (a2.left ?? 0))}, ${-(a2.height / 2) - (a2.y - (a2.top ?? 0))})`), U(t2, b2), t2.intersect = function(e3) {
    return J.polygon(t2, f2, e3);
  }, i2;
}
d(en, `rect_left_inv_arrow`);
async function tn(e2, t2) {
  var _a, _b;
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let i2;
  i2 = t2.cssClasses ? `node ` + t2.cssClasses : `node default`;
  let o2 = e2.insert(`g`).attr(`class`, i2).attr(`id`, t2.domId || t2.id), c2 = o2.insert(`g`), l2 = o2.insert(`g`).attr(`class`, `label`).attr(`style`, r2), d2 = t2.description, p2 = t2.label, m2 = l2.node().appendChild(await qe(p2, t2.labelStyle, true, true)), h2 = { width: 0, height: 0 };
  if (s((_b = (_a = a()) == null ? void 0 : _a.flowchart) == null ? void 0 : _b.htmlLabels)) {
    let e3 = m2.children[0], t3 = f(m2);
    h2 = e3.getBoundingClientRect(), t3.attr(`width`, h2.width), t3.attr(`height`, h2.height);
  }
  u.info(`Text 2`, d2);
  let g2 = d2 || [], _2 = m2.getBBox(), b2 = l2.node().appendChild(await qe(g2.join ? g2.join(`<br/>`) : g2, t2.labelStyle, true, true)), x2 = b2.children[0], S2 = f(b2);
  h2 = x2.getBoundingClientRect(), S2.attr(`width`, h2.width), S2.attr(`height`, h2.height);
  let C2 = (t2.padding || 0) / 2;
  f(b2).attr(`transform`, `translate( ` + (h2.width > _2.width ? 0 : (_2.width - h2.width) / 2) + `, ` + (_2.height + C2 + 5) + `)`), f(m2).attr(`transform`, `translate( ` + (h2.width < _2.width ? 0 : -(_2.width - h2.width) / 2) + `, 0)`), h2 = l2.node().getBBox(), l2.attr(`transform`, `translate(` + -h2.width / 2 + `, ` + (-h2.height / 2 - C2 + 3) + `)`);
  let w2 = h2.width + (t2.padding || 0), T2 = h2.height + (t2.padding || 0), E2 = -h2.width / 2 - C2, D2 = -h2.height / 2 - C2, O2, k2;
  if (t2.look === `handDrawn`) {
    let e3 = V.svg(o2), n3 = v(t2, {}), r3 = e3.path(q(E2, D2, w2, T2, t2.rx || 0), n3), i3 = e3.line(-h2.width / 2 - C2, -h2.height / 2 - C2 + _2.height + C2, h2.width / 2 + C2, -h2.height / 2 - C2 + _2.height + C2, n3);
    k2 = o2.insert(() => (u.debug(`Rough node insert CXC`, r3), i3), `:first-child`), O2 = o2.insert(() => (u.debug(`Rough node insert CXC`, r3), r3), `:first-child`);
  } else O2 = c2.insert(`rect`, `:first-child`), k2 = c2.insert(`line`), O2.attr(`class`, `outer title-state`).attr(`style`, r2).attr(`x`, -h2.width / 2 - C2).attr(`y`, -h2.height / 2 - C2).attr(`width`, h2.width + (t2.padding || 0)).attr(`height`, h2.height + (t2.padding || 0)), k2.attr(`class`, `divider`).attr(`x1`, -h2.width / 2 - C2).attr(`x2`, h2.width / 2 + C2).attr(`y1`, -h2.height / 2 - C2 + _2.height + C2).attr(`y2`, -h2.height / 2 - C2 + _2.height + C2);
  return U(t2, O2), t2.intersect = function(e3) {
    return J.rect(t2, e3);
  }, o2;
}
d(tn, `rectWithTitle`);
function nn(e2, t2, n2, r2, i2, a2, o2) {
  let s2 = (e2 + n2) / 2, c2 = (t2 + r2) / 2, l2 = Math.atan2(r2 - t2, n2 - e2), u2 = (n2 - e2) / 2, d2 = (r2 - t2) / 2, f2 = u2 / i2, p2 = d2 / a2, m2 = Math.sqrt(f2 ** 2 + p2 ** 2);
  if (m2 > 1) throw Error(`The given radii are too small to create an arc between the points.`);
  let h2 = Math.sqrt(1 - m2 ** 2), g2 = s2 + h2 * a2 * Math.sin(l2) * (o2 ? -1 : 1), _2 = c2 - h2 * i2 * Math.cos(l2) * (o2 ? -1 : 1), v2 = Math.atan2((t2 - _2) / a2, (e2 - g2) / i2), y2 = Math.atan2((r2 - _2) / a2, (n2 - g2) / i2) - v2;
  o2 && y2 < 0 && (y2 += 2 * Math.PI), !o2 && y2 > 0 && (y2 -= 2 * Math.PI);
  let b2 = [];
  for (let e3 = 0; e3 < 20; e3++) {
    let t3 = v2 + e3 / 19 * y2, n3 = g2 + i2 * Math.cos(t3), r3 = _2 + a2 * Math.sin(t3);
    b2.push({ x: n3, y: r3 });
  }
  return b2;
}
d(nn, `generateArcPoints`);
async function rn(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2 } = await H(e2, t2, W(t2)), o2 = (t2 == null ? void 0 : t2.padding) ?? 0, s2 = (t2 == null ? void 0 : t2.padding) ?? 0, c2 = ((t2 == null ? void 0 : t2.width) ? t2 == null ? void 0 : t2.width : a2.width) + o2 * 2, l2 = ((t2 == null ? void 0 : t2.height) ? t2 == null ? void 0 : t2.height : a2.height) + s2 * 2, u2 = t2.radius || 5, d2 = t2.taper || 5, { cssStyles: f2 } = t2, p2 = V.svg(i2), m2 = v(t2, {});
  t2.stroke && (m2.stroke = t2.stroke), t2.look !== `handDrawn` && (m2.roughness = 0, m2.fillStyle = `solid`);
  let h2 = [{ x: -c2 / 2 + d2, y: -l2 / 2 }, { x: c2 / 2 - d2, y: -l2 / 2 }, ...nn(c2 / 2 - d2, -l2 / 2, c2 / 2, -l2 / 2 + d2, u2, u2, true), { x: c2 / 2, y: -l2 / 2 + d2 }, { x: c2 / 2, y: l2 / 2 - d2 }, ...nn(c2 / 2, l2 / 2 - d2, c2 / 2 - d2, l2 / 2, u2, u2, true), { x: c2 / 2 - d2, y: l2 / 2 }, { x: -c2 / 2 + d2, y: l2 / 2 }, ...nn(-c2 / 2 + d2, l2 / 2, -c2 / 2, l2 / 2 - d2, u2, u2, true), { x: -c2 / 2, y: l2 / 2 - d2 }, { x: -c2 / 2, y: -l2 / 2 + d2 }, ...nn(-c2 / 2, -l2 / 2 + d2, -c2 / 2 + d2, -l2 / 2, u2, u2, true)], g2 = G(h2), _2 = p2.path(g2, m2), b2 = i2.insert(() => _2, `:first-child`);
  return b2.attr(`class`, `basic label-container outer-path`), f2 && t2.look !== `handDrawn` && b2.selectChildren(`path`).attr(`style`, f2), r2 && t2.look !== `handDrawn` && b2.selectChildren(`path`).attr(`style`, r2), U(t2, b2), t2.intersect = function(e3) {
    return J.polygon(t2, h2, e3);
  }, i2;
}
d(rn, `roundedRect`);
async function an(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, label: o2 } = await H(e2, t2, W(t2)), s2 = (t2 == null ? void 0 : t2.padding) ?? 0, c2 = Math.max(a2.width + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.width) ?? 0), l2 = Math.max(a2.height + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.height) ?? 0), u2 = -a2.width / 2 - s2, d2 = -a2.height / 2 - s2, { cssStyles: f2 } = t2, p2 = V.svg(i2), m2 = v(t2, {});
  t2.look !== `handDrawn` && (m2.roughness = 0, m2.fillStyle = `solid`);
  let h2 = [{ x: u2, y: d2 }, { x: u2 + c2 + 8, y: d2 }, { x: u2 + c2 + 8, y: d2 + l2 }, { x: u2 - 8, y: d2 + l2 }, { x: u2 - 8, y: d2 }, { x: u2, y: d2 }, { x: u2, y: d2 + l2 }], _2 = p2.polygon(h2.map((e3) => [e3.x, e3.y]), m2), b2 = i2.insert(() => _2, `:first-child`);
  return b2.attr(`class`, `basic label-container`).attr(`style`, g(f2)), r2 && t2.look !== `handDrawn` && b2.selectAll(`path`).attr(`style`, r2), f2 && t2.look !== `handDrawn` && b2.selectAll(`path`).attr(`style`, r2), o2.attr(`transform`, `translate(${-c2 / 2 + 4 + (t2.padding ?? 0) - (a2.x - (a2.left ?? 0))},${-l2 / 2 + (t2.padding ?? 0) - (a2.y - (a2.top ?? 0))})`), U(t2, b2), t2.intersect = function(e3) {
    return J.rect(t2, e3);
  }, i2;
}
d(an, `shadedProcess`);
async function on(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, label: o2 } = await H(e2, t2, W(t2)), s2 = Math.max(a2.width + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.width) ?? 0), c2 = Math.max(a2.height + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.height) ?? 0), l2 = -s2 / 2, u2 = -c2 / 2, { cssStyles: d2 } = t2, f2 = V.svg(i2), p2 = v(t2, {});
  t2.look !== `handDrawn` && (p2.roughness = 0, p2.fillStyle = `solid`);
  let m2 = [{ x: l2, y: u2 }, { x: l2, y: u2 + c2 }, { x: l2 + s2, y: u2 + c2 }, { x: l2 + s2, y: u2 - c2 / 2 }], h2 = G(m2), g2 = f2.path(h2, p2), _2 = i2.insert(() => g2, `:first-child`);
  return _2.attr(`class`, `basic label-container`), d2 && t2.look !== `handDrawn` && _2.selectChildren(`path`).attr(`style`, d2), r2 && t2.look !== `handDrawn` && _2.selectChildren(`path`).attr(`style`, r2), _2.attr(`transform`, `translate(0, ${c2 / 4})`), o2.attr(`transform`, `translate(${-s2 / 2 + (t2.padding ?? 0) - (a2.x - (a2.left ?? 0))}, ${-c2 / 4 + (t2.padding ?? 0) - (a2.y - (a2.top ?? 0))})`), U(t2, _2), t2.intersect = function(e3) {
    return J.polygon(t2, m2, e3);
  }, i2;
}
d(on, `slopedRect`);
async function sn(e2, t2) {
  return zt(e2, t2, { rx: 0, ry: 0, classes: ``, labelPaddingX: t2.labelPaddingX ?? ((t2 == null ? void 0 : t2.padding) || 0) * 2, labelPaddingY: ((t2 == null ? void 0 : t2.padding) || 0) * 1 });
}
d(sn, `squareRect`);
async function cn(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2 } = await H(e2, t2, W(t2)), o2 = a2.height + t2.padding, s2 = a2.width + o2 / 4 + t2.padding, c2 = o2 / 2, { cssStyles: l2 } = t2, u2 = V.svg(i2), d2 = v(t2, {});
  t2.look !== `handDrawn` && (d2.roughness = 0, d2.fillStyle = `solid`);
  let f2 = [{ x: -s2 / 2 + c2, y: -o2 / 2 }, { x: s2 / 2 - c2, y: -o2 / 2 }, ...Ue(-s2 / 2 + c2, 0, c2, 50, 90, 270), { x: s2 / 2 - c2, y: o2 / 2 }, ...Ue(s2 / 2 - c2, 0, c2, 50, 270, 450)], p2 = G(f2), m2 = u2.path(p2, d2), h2 = i2.insert(() => m2, `:first-child`);
  return h2.attr(`class`, `basic label-container outer-path`), l2 && t2.look !== `handDrawn` && h2.selectChildren(`path`).attr(`style`, l2), r2 && t2.look !== `handDrawn` && h2.selectChildren(`path`).attr(`style`, r2), U(t2, h2), t2.intersect = function(e3) {
    return J.polygon(t2, f2, e3);
  }, i2;
}
d(cn, `stadium`);
async function ln(e2, t2) {
  return zt(e2, t2, { rx: 5, ry: 5, classes: `flowchart-node` });
}
d(ln, `state`);
function un(e2, t2, { config: { themeVariables: n2 } }) {
  let { labelStyles: r2, nodeStyles: i2 } = y(t2);
  t2.labelStyle = r2;
  let { cssStyles: a2 } = t2, { lineColor: o2, stateBorder: s2, nodeBorder: c2 } = n2, l2 = e2.insert(`g`).attr(`class`, `node default`).attr(`id`, t2.domId || t2.id), u2 = V.svg(l2), d2 = v(t2, {});
  t2.look !== `handDrawn` && (d2.roughness = 0, d2.fillStyle = `solid`);
  let f2 = u2.circle(0, 0, 14, { ...d2, stroke: o2, strokeWidth: 2 }), p2 = s2 ?? c2, m2 = u2.circle(0, 0, 5, { ...d2, fill: p2, stroke: p2, strokeWidth: 2, fillStyle: `solid` }), h2 = l2.insert(() => f2, `:first-child`);
  return h2.insert(() => m2), a2 && h2.selectAll(`path`).attr(`style`, a2), i2 && h2.selectAll(`path`).attr(`style`, i2), U(t2, h2), t2.intersect = function(e3) {
    return J.circle(t2, 7, e3);
  }, l2;
}
d(un, `stateEnd`);
function dn(e2, t2, { config: { themeVariables: n2 } }) {
  let { lineColor: r2 } = n2, i2 = e2.insert(`g`).attr(`class`, `node default`).attr(`id`, t2.domId || t2.id), a2;
  if (t2.look === `handDrawn`) {
    let e3 = V.svg(i2).circle(0, 0, 14, b(r2));
    a2 = i2.insert(() => e3), a2.attr(`class`, `state-start`).attr(`r`, 7).attr(`width`, 14).attr(`height`, 14);
  } else a2 = i2.insert(`circle`, `:first-child`), a2.attr(`class`, `state-start`).attr(`r`, 7).attr(`width`, 14).attr(`height`, 14);
  return U(t2, a2), t2.intersect = function(e3) {
    return J.circle(t2, 7, e3);
  }, i2;
}
d(dn, `stateStart`);
async function fn(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2 } = await H(e2, t2, W(t2)), o2 = ((t2 == null ? void 0 : t2.padding) || 0) / 2, s2 = a2.width + t2.padding, c2 = a2.height + t2.padding, l2 = -a2.width / 2 - o2, u2 = -a2.height / 2 - o2, d2 = [{ x: 0, y: 0 }, { x: s2, y: 0 }, { x: s2, y: -c2 }, { x: 0, y: -c2 }, { x: 0, y: 0 }, { x: -8, y: 0 }, { x: s2 + 8, y: 0 }, { x: s2 + 8, y: -c2 }, { x: -8, y: -c2 }, { x: -8, y: 0 }];
  if (t2.look === `handDrawn`) {
    let e3 = V.svg(i2), n3 = v(t2, {}), r3 = e3.rectangle(l2 - 8, u2, s2 + 16, c2, n3), a3 = e3.line(l2, u2, l2, u2 + c2, n3), o3 = e3.line(l2 + s2, u2, l2 + s2, u2 + c2, n3);
    i2.insert(() => a3, `:first-child`), i2.insert(() => o3, `:first-child`);
    let d3 = i2.insert(() => r3, `:first-child`), { cssStyles: f2 } = t2;
    d3.attr(`class`, `basic label-container`).attr(`style`, g(f2)), U(t2, d3);
  } else {
    let e3 = Y(i2, s2, c2, d2);
    r2 && e3.attr(`style`, r2), U(t2, e3);
  }
  return t2.intersect = function(e3) {
    return J.polygon(t2, d2, e3);
  }, i2;
}
d(fn, `subroutine`);
async function pn(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2 } = await H(e2, t2, W(t2)), o2 = Math.max(a2.width + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.width) ?? 0), s2 = Math.max(a2.height + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.height) ?? 0), c2 = -o2 / 2, l2 = -s2 / 2, u2 = 0.2 * s2, d2 = 0.2 * s2, { cssStyles: f2 } = t2, p2 = V.svg(i2), m2 = v(t2, {}), h2 = [{ x: c2 - u2 / 2, y: l2 }, { x: c2 + o2 + u2 / 2, y: l2 }, { x: c2 + o2 + u2 / 2, y: l2 + s2 }, { x: c2 - u2 / 2, y: l2 + s2 }], g2 = [{ x: c2 + o2 - u2 / 2, y: l2 + s2 }, { x: c2 + o2 + u2 / 2, y: l2 + s2 }, { x: c2 + o2 + u2 / 2, y: l2 + s2 - d2 }];
  t2.look !== `handDrawn` && (m2.roughness = 0, m2.fillStyle = `solid`);
  let _2 = G(h2), b2 = p2.path(_2, m2), x2 = G(g2), S2 = p2.path(x2, { ...m2, fillStyle: `solid` }), C2 = i2.insert(() => S2, `:first-child`);
  return C2.insert(() => b2, `:first-child`), C2.attr(`class`, `basic label-container`), f2 && t2.look !== `handDrawn` && C2.selectAll(`path`).attr(`style`, f2), r2 && t2.look !== `handDrawn` && C2.selectAll(`path`).attr(`style`, r2), U(t2, C2), t2.intersect = function(e3) {
    return J.polygon(t2, h2, e3);
  }, i2;
}
d(pn, `taggedRect`);
async function mn(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, label: o2 } = await H(e2, t2, W(t2)), s2 = Math.max(a2.width + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.width) ?? 0), c2 = Math.max(a2.height + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.height) ?? 0), l2 = c2 / 4, u2 = 0.2 * s2, d2 = 0.2 * c2, f2 = c2 + l2, { cssStyles: p2 } = t2, m2 = V.svg(i2), h2 = v(t2, {});
  t2.look !== `handDrawn` && (h2.roughness = 0, h2.fillStyle = `solid`);
  let g2 = [{ x: -s2 / 2 - s2 / 2 * 0.1, y: f2 / 2 }, ...K(-s2 / 2 - s2 / 2 * 0.1, f2 / 2, s2 / 2 + s2 / 2 * 0.1, f2 / 2, l2, 0.8), { x: s2 / 2 + s2 / 2 * 0.1, y: -f2 / 2 }, { x: -s2 / 2 - s2 / 2 * 0.1, y: -f2 / 2 }], _2 = -s2 / 2 + s2 / 2 * 0.1, b2 = -f2 / 2 - d2 * 0.4, x2 = [{ x: _2 + s2 - u2, y: (b2 + c2) * 1.4 }, { x: _2 + s2, y: b2 + c2 - d2 }, { x: _2 + s2, y: (b2 + c2) * 0.9 }, ...K(_2 + s2, (b2 + c2) * 1.3, _2 + s2 - u2, (b2 + c2) * 1.5, -c2 * 0.03, 0.5)], S2 = G(g2), C2 = m2.path(S2, h2), w2 = G(x2), T2 = m2.path(w2, { ...h2, fillStyle: `solid` }), E2 = i2.insert(() => T2, `:first-child`);
  return E2.insert(() => C2, `:first-child`), E2.attr(`class`, `basic label-container`), p2 && t2.look !== `handDrawn` && E2.selectAll(`path`).attr(`style`, p2), r2 && t2.look !== `handDrawn` && E2.selectAll(`path`).attr(`style`, r2), E2.attr(`transform`, `translate(0,${-l2 / 2})`), o2.attr(`transform`, `translate(${-s2 / 2 + (t2.padding ?? 0) - (a2.x - (a2.left ?? 0))},${-c2 / 2 + (t2.padding ?? 0) - l2 / 2 - (a2.y - (a2.top ?? 0))})`), U(t2, E2), t2.intersect = function(e3) {
    return J.polygon(t2, g2, e3);
  }, i2;
}
d(mn, `taggedWaveEdgedRectangle`);
async function hn(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2 } = await H(e2, t2, W(t2)), o2 = Math.max(a2.width + t2.padding, (t2 == null ? void 0 : t2.width) || 0), s2 = Math.max(a2.height + t2.padding, (t2 == null ? void 0 : t2.height) || 0), c2 = -o2 / 2, l2 = -s2 / 2, u2 = i2.insert(`rect`, `:first-child`);
  return u2.attr(`class`, `text`).attr(`style`, r2).attr(`rx`, 0).attr(`ry`, 0).attr(`x`, c2).attr(`y`, l2).attr(`width`, o2).attr(`height`, s2), U(t2, u2), t2.intersect = function(e3) {
    return J.rect(t2, e3);
  }, i2;
}
d(hn, `text`);
var gn = d((e2, t2, n2, r2, i2, a2) => `M${e2},${t2}
    a${i2},${a2} 0,0,1 0,${-r2}
    l${n2},0
    a${i2},${a2} 0,0,1 0,${r2}
    M${n2},${-r2}
    a${i2},${a2} 0,0,0 0,${r2}
    l${-n2},0`, `createCylinderPathD`), _n = d((e2, t2, n2, r2, i2, a2) => [`M${e2},${t2}`, `M${e2 + n2},${t2}`, `a${i2},${a2} 0,0,0 0,${-r2}`, `l${-n2},0`, `a${i2},${a2} 0,0,0 0,${r2}`, `l${n2},0`].join(` `), `createOuterCylinderPathD`), vn = d((e2, t2, n2, r2, i2, a2) => [`M${e2 + n2 / 2},${-r2 / 2}`, `a${i2},${a2} 0,0,0 0,${r2}`].join(` `), `createInnerCylinderPathD`);
async function yn(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, label: o2, halfPadding: s2 } = await H(e2, t2, W(t2)), c2 = t2.look === `neo` ? s2 * 2 : s2, l2 = a2.height + c2, u2 = l2 / 2, d2 = u2 / (2.5 + l2 / 50), f2 = a2.width + d2 + c2, { cssStyles: p2 } = t2, m2;
  if (t2.look === `handDrawn`) {
    let e3 = V.svg(i2), n3 = _n(0, 0, f2, l2, d2, u2), r3 = vn(0, 0, f2, l2, d2, u2), a3 = e3.path(n3, v(t2, {})), o3 = e3.path(r3, v(t2, { fill: `none` }));
    m2 = i2.insert(() => o3, `:first-child`), m2 = i2.insert(() => a3, `:first-child`), m2.attr(`class`, `basic label-container`), p2 && m2.attr(`style`, p2);
  } else {
    let e3 = gn(0, 0, f2, l2, d2, u2);
    m2 = i2.insert(`path`, `:first-child`).attr(`d`, e3).attr(`class`, `basic label-container`).attr(`style`, g(p2)).attr(`style`, r2), m2.attr(`class`, `basic label-container`), p2 && m2.selectAll(`path`).attr(`style`, p2), r2 && m2.selectAll(`path`).attr(`style`, r2);
  }
  return m2.attr(`label-offset-x`, d2), m2.attr(`transform`, `translate(${-f2 / 2}, ${l2 / 2} )`), o2.attr(`transform`, `translate(${-(a2.width / 2) - d2 - (a2.x - (a2.left ?? 0))}, ${-(a2.height / 2) - (a2.y - (a2.top ?? 0))})`), U(t2, m2), t2.intersect = function(e3) {
    let n3 = J.rect(t2, e3), r3 = n3.y - (t2.y ?? 0);
    if (u2 != 0 && (Math.abs(r3) < (t2.height ?? 0) / 2 || Math.abs(r3) == (t2.height ?? 0) / 2 && Math.abs(n3.x - (t2.x ?? 0)) > (t2.width ?? 0) / 2 - d2)) {
      let i3 = d2 * d2 * (1 - r3 * r3 / (u2 * u2));
      i3 != 0 && (i3 = Math.sqrt(Math.abs(i3))), i3 = d2 - i3, e3.x - (t2.x ?? 0) > 0 && (i3 = -i3), n3.x += i3;
    }
    return n3;
  }, i2;
}
d(yn, `tiltedCylinder`);
async function bn(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2 } = await H(e2, t2, W(t2)), o2 = a2.width + t2.padding, s2 = a2.height + t2.padding, c2 = [{ x: -3 * s2 / 6, y: 0 }, { x: o2 + 3 * s2 / 6, y: 0 }, { x: o2, y: -s2 }, { x: 0, y: -s2 }], l2, { cssStyles: u2 } = t2;
  if (t2.look === `handDrawn`) {
    let e3 = V.svg(i2), n3 = v(t2, {}), r3 = G(c2), a3 = e3.path(r3, n3);
    l2 = i2.insert(() => a3, `:first-child`).attr(`transform`, `translate(${-o2 / 2}, ${s2 / 2})`), u2 && l2.attr(`style`, u2);
  } else l2 = Y(i2, o2, s2, c2);
  return r2 && l2.attr(`style`, r2), t2.width = o2, t2.height = s2, U(t2, l2), t2.intersect = function(e3) {
    return J.polygon(t2, c2, e3);
  }, i2;
}
d(bn, `trapezoid`);
async function xn(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2 } = await H(e2, t2, W(t2)), o2 = Math.max(60, a2.width + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.width) ?? 0), s2 = Math.max(20, a2.height + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.height) ?? 0), { cssStyles: c2 } = t2, l2 = V.svg(i2), u2 = v(t2, {});
  t2.look !== `handDrawn` && (u2.roughness = 0, u2.fillStyle = `solid`);
  let d2 = [{ x: -o2 / 2 * 0.8, y: -s2 / 2 }, { x: o2 / 2 * 0.8, y: -s2 / 2 }, { x: o2 / 2, y: -s2 / 2 * 0.6 }, { x: o2 / 2, y: s2 / 2 }, { x: -o2 / 2, y: s2 / 2 }, { x: -o2 / 2, y: -s2 / 2 * 0.6 }], f2 = G(d2), p2 = l2.path(f2, u2), m2 = i2.insert(() => p2, `:first-child`);
  return m2.attr(`class`, `basic label-container`), c2 && t2.look !== `handDrawn` && m2.selectChildren(`path`).attr(`style`, c2), r2 && t2.look !== `handDrawn` && m2.selectChildren(`path`).attr(`style`, r2), U(t2, m2), t2.intersect = function(e3) {
    return J.polygon(t2, d2, e3);
  }, i2;
}
d(xn, `trapezoidalPentagon`);
async function Sn(e2, t2) {
  var _a;
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: o2, label: c2 } = await H(e2, t2, W(t2)), l2 = s((_a = a().flowchart) == null ? void 0 : _a.htmlLabels), d2 = o2.width + (t2.padding ?? 0), f2 = d2 + o2.height, p2 = d2 + o2.height, m2 = [{ x: 0, y: 0 }, { x: p2, y: 0 }, { x: p2 / 2, y: -f2 }], { cssStyles: h2 } = t2, g2 = V.svg(i2), _2 = v(t2, {});
  t2.look !== `handDrawn` && (_2.roughness = 0, _2.fillStyle = `solid`);
  let b2 = G(m2), x2 = g2.path(b2, _2), S2 = i2.insert(() => x2, `:first-child`).attr(`transform`, `translate(${-f2 / 2}, ${f2 / 2})`);
  return h2 && t2.look !== `handDrawn` && S2.selectChildren(`path`).attr(`style`, h2), r2 && t2.look !== `handDrawn` && S2.selectChildren(`path`).attr(`style`, r2), t2.width = d2, t2.height = f2, U(t2, S2), c2.attr(`transform`, `translate(${-o2.width / 2 - (o2.x - (o2.left ?? 0))}, ${f2 / 2 - (o2.height + (t2.padding ?? 0) / (l2 ? 2 : 1) - (o2.y - (o2.top ?? 0)))})`), t2.intersect = function(e3) {
    return u.info(`Triangle intersect`, t2, m2, e3), J.polygon(t2, m2, e3);
  }, i2;
}
d(Sn, `triangle`);
async function Cn(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, label: o2 } = await H(e2, t2, W(t2)), s2 = Math.max(a2.width + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.width) ?? 0), c2 = Math.max(a2.height + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.height) ?? 0), l2 = c2 / 8, u2 = c2 + l2, { cssStyles: d2 } = t2, f2 = 70 - s2, p2 = f2 > 0 ? f2 / 2 : 0, m2 = V.svg(i2), h2 = v(t2, {});
  t2.look !== `handDrawn` && (h2.roughness = 0, h2.fillStyle = `solid`);
  let g2 = [{ x: -s2 / 2 - p2, y: u2 / 2 }, ...K(-s2 / 2 - p2, u2 / 2, s2 / 2 + p2, u2 / 2, l2, 0.8), { x: s2 / 2 + p2, y: -u2 / 2 }, { x: -s2 / 2 - p2, y: -u2 / 2 }], _2 = G(g2), b2 = m2.path(_2, h2), x2 = i2.insert(() => b2, `:first-child`);
  return x2.attr(`class`, `basic label-container`), d2 && t2.look !== `handDrawn` && x2.selectAll(`path`).attr(`style`, d2), r2 && t2.look !== `handDrawn` && x2.selectAll(`path`).attr(`style`, r2), x2.attr(`transform`, `translate(0,${-l2 / 2})`), o2.attr(`transform`, `translate(${-s2 / 2 + (t2.padding ?? 0) - (a2.x - (a2.left ?? 0))},${-c2 / 2 + (t2.padding ?? 0) - l2 - (a2.y - (a2.top ?? 0))})`), U(t2, x2), t2.intersect = function(e3) {
    return J.polygon(t2, g2, e3);
  }, i2;
}
d(Cn, `waveEdgedRectangle`);
async function wn(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2 } = await H(e2, t2, W(t2)), o2 = Math.max(a2.width + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.width) ?? 0), s2 = Math.max(a2.height + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.height) ?? 0), c2 = o2 / s2, l2 = o2, u2 = s2;
  l2 > u2 * c2 ? u2 = l2 / c2 : l2 = u2 * c2, l2 = Math.max(l2, 100), u2 = Math.max(u2, 50);
  let d2 = Math.min(u2 * 0.2, u2 / 4), f2 = u2 + d2 * 2, { cssStyles: p2 } = t2, m2 = V.svg(i2), h2 = v(t2, {});
  t2.look !== `handDrawn` && (h2.roughness = 0, h2.fillStyle = `solid`);
  let g2 = [{ x: -l2 / 2, y: f2 / 2 }, ...K(-l2 / 2, f2 / 2, l2 / 2, f2 / 2, d2, 1), { x: l2 / 2, y: -f2 / 2 }, ...K(l2 / 2, -f2 / 2, -l2 / 2, -f2 / 2, d2, -1)], _2 = G(g2), b2 = m2.path(_2, h2), x2 = i2.insert(() => b2, `:first-child`);
  return x2.attr(`class`, `basic label-container`), p2 && t2.look !== `handDrawn` && x2.selectAll(`path`).attr(`style`, p2), r2 && t2.look !== `handDrawn` && x2.selectAll(`path`).attr(`style`, r2), U(t2, x2), t2.intersect = function(e3) {
    return J.polygon(t2, g2, e3);
  }, i2;
}
d(wn, `waveRectangle`);
async function Tn(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, label: o2 } = await H(e2, t2, W(t2)), s2 = Math.max(a2.width + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.width) ?? 0), c2 = Math.max(a2.height + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.height) ?? 0), l2 = -s2 / 2, u2 = -c2 / 2, { cssStyles: d2 } = t2, f2 = V.svg(i2), p2 = v(t2, {}), m2 = [{ x: l2 - 5, y: u2 - 5 }, { x: l2 - 5, y: u2 + c2 }, { x: l2 + s2, y: u2 + c2 }, { x: l2 + s2, y: u2 - 5 }], h2 = `M${l2 - 5},${u2 - 5} L${l2 + s2},${u2 - 5} L${l2 + s2},${u2 + c2} L${l2 - 5},${u2 + c2} L${l2 - 5},${u2 - 5}
                M${l2 - 5},${u2} L${l2 + s2},${u2}
                M${l2},${u2 - 5} L${l2},${u2 + c2}`;
  t2.look !== `handDrawn` && (p2.roughness = 0, p2.fillStyle = `solid`);
  let g2 = f2.path(h2, p2), _2 = i2.insert(() => g2, `:first-child`);
  return _2.attr(`transform`, `translate(${5 / 2}, ${5 / 2})`), _2.attr(`class`, `basic label-container`), d2 && t2.look !== `handDrawn` && _2.selectAll(`path`).attr(`style`, d2), r2 && t2.look !== `handDrawn` && _2.selectAll(`path`).attr(`style`, r2), o2.attr(`transform`, `translate(${-(a2.width / 2) + 5 / 2 - (a2.x - (a2.left ?? 0))}, ${-(a2.height / 2) + 5 / 2 - (a2.y - (a2.top ?? 0))})`), U(t2, _2), t2.intersect = function(e3) {
    return J.polygon(t2, m2, e3);
  }, i2;
}
d(Tn, `windowPane`);
async function En(e2, t2) {
  var _a, _b, _c, _d, _e2;
  let n2 = t2;
  if (n2.alias && (t2.label = n2.alias), t2.look === `handDrawn`) {
    let { themeVariables: n3 } = l(), { background: r3 } = n3;
    await En(e2, { ...t2, id: t2.id + `-background`, look: `default`, cssStyles: [`stroke: none`, `fill: ${r3}`] });
  }
  let r2 = l();
  t2.useHtmlLabels = r2.htmlLabels;
  let i2 = ((_a = r2.er) == null ? void 0 : _a.diagramPadding) ?? 10, a2 = ((_b = r2.er) == null ? void 0 : _b.entityPadding) ?? 6, { cssStyles: o2 } = t2, { labelStyles: c2, nodeStyles: u2 } = y(t2);
  if (n2.attributes.length === 0 && t2.label) {
    let n3 = { rx: 0, ry: 0, labelPaddingX: i2, labelPaddingY: i2 * 1.5, classes: `` };
    h(t2.label, r2) + n3.labelPaddingX * 2 < r2.er.minEntityWidth && (t2.width = r2.er.minEntityWidth);
    let a3 = await zt(e2, t2, n3);
    if (!s(r2.htmlLabels)) {
      let e3 = a3.select(`text`), t3 = (_c = e3.node()) == null ? void 0 : _c.getBBox();
      e3.attr(`transform`, `translate(${-t3.width / 2}, 0)`);
    }
    return a3;
  }
  r2.htmlLabels || (i2 *= 1.25, a2 *= 1.25);
  let d2 = W(t2);
  d2 || (d2 = `node default`);
  let p2 = e2.insert(`g`).attr(`class`, d2).attr(`id`, t2.domId || t2.id), m2 = await Dn(p2, t2.label ?? ``, r2, 0, 0, [`name`], c2);
  m2.height += a2;
  let g2 = 0, _2 = [], b2 = [], x2 = 0, S2 = 0, C2 = 0, w2 = 0, T2 = true, E2 = true;
  for (let e3 of n2.attributes) {
    let t3 = await Dn(p2, e3.type, r2, 0, g2, [`attribute-type`], c2);
    x2 = Math.max(x2, t3.width + i2);
    let n3 = await Dn(p2, e3.name, r2, 0, g2, [`attribute-name`], c2);
    S2 = Math.max(S2, n3.width + i2);
    let o3 = await Dn(p2, e3.keys.join(), r2, 0, g2, [`attribute-keys`], c2);
    C2 = Math.max(C2, o3.width + i2);
    let s2 = await Dn(p2, e3.comment, r2, 0, g2, [`attribute-comment`], c2);
    w2 = Math.max(w2, s2.width + i2);
    let l2 = Math.max(t3.height, n3.height, o3.height, s2.height) + a2;
    b2.push({ yOffset: g2, rowHeight: l2 }), g2 += l2;
  }
  let D2 = 4;
  C2 <= i2 && (T2 = false, C2 = 0, D2--), w2 <= i2 && (E2 = false, w2 = 0, D2--);
  let O2 = p2.node().getBBox();
  if (m2.width + i2 * 2 - (x2 + S2 + C2 + w2) > 0) {
    let e3 = m2.width + i2 * 2 - (x2 + S2 + C2 + w2);
    x2 += e3 / D2, S2 += e3 / D2, C2 > 0 && (C2 += e3 / D2), w2 > 0 && (w2 += e3 / D2);
  }
  let k2 = x2 + S2 + C2 + w2, A2 = V.svg(p2), j2 = v(t2, {});
  t2.look !== `handDrawn` && (j2.roughness = 0, j2.fillStyle = `solid`);
  let M2 = 0;
  b2.length > 0 && (M2 = b2.reduce((e3, t3) => e3 + ((t3 == null ? void 0 : t3.rowHeight) ?? 0), 0));
  let N2 = Math.max(O2.width + i2 * 2, (t2 == null ? void 0 : t2.width) || 0, k2), P2 = Math.max((M2 ?? 0) + m2.height, (t2 == null ? void 0 : t2.height) || 0), F2 = -N2 / 2, I2 = -P2 / 2;
  p2.selectAll(`g:not(:first-child)`).each((e3, t3, n3) => {
    let r3 = f(n3[t3]), o3 = r3.attr(`transform`), s2 = 0, c3 = 0;
    if (o3) {
      let e4 = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(o3);
      e4 && (s2 = parseFloat(e4[1]), c3 = parseFloat(e4[2]), r3.attr(`class`).includes(`attribute-name`) ? s2 += x2 : r3.attr(`class`).includes(`attribute-keys`) ? s2 += x2 + S2 : r3.attr(`class`).includes(`attribute-comment`) && (s2 += x2 + S2 + C2));
    }
    r3.attr(`transform`, `translate(${F2 + i2 / 2 + s2}, ${c3 + I2 + m2.height + a2 / 2})`);
  }), p2.select(`.name`).attr(`transform`, `translate(` + -m2.width / 2 + `, ` + (I2 + a2 / 2) + `)`);
  let ee2 = A2.rectangle(F2, I2, N2, P2, j2), te2 = p2.insert(() => ee2, `:first-child`).attr(`style`, o2.join(``)), { themeVariables: ne2 } = l(), { rowEven: re2, rowOdd: ie2, nodeBorder: ae2 } = ne2;
  _2.push(0);
  for (let [e3, t3] of b2.entries()) {
    let n3 = (e3 + 1) % 2 == 0 && t3.yOffset !== 0, r3 = A2.rectangle(F2, m2.height + I2 + (t3 == null ? void 0 : t3.yOffset), N2, t3 == null ? void 0 : t3.rowHeight, { ...j2, fill: n3 ? re2 : ie2, stroke: ae2 });
    p2.insert(() => r3, `g.label`).attr(`style`, o2.join(``)).attr(`class`, `row-rect-${n3 ? `even` : `odd`}`);
  }
  let L2 = A2.line(F2, m2.height + I2, N2 + F2, m2.height + I2, j2);
  p2.insert(() => L2).attr(`class`, `divider`), L2 = A2.line(x2 + F2, m2.height + I2, x2 + F2, P2 + I2, j2), p2.insert(() => L2).attr(`class`, `divider`), T2 && (L2 = A2.line(x2 + S2 + F2, m2.height + I2, x2 + S2 + F2, P2 + I2, j2), p2.insert(() => L2).attr(`class`, `divider`)), E2 && (L2 = A2.line(x2 + S2 + C2 + F2, m2.height + I2, x2 + S2 + C2 + F2, P2 + I2, j2), p2.insert(() => L2).attr(`class`, `divider`));
  for (let e3 of _2) L2 = A2.line(F2, m2.height + I2 + e3, N2 + F2, m2.height + I2 + e3, j2), p2.insert(() => L2).attr(`class`, `divider`);
  if (U(t2, te2), u2 && t2.look !== `handDrawn`) {
    let e3 = (_e2 = (_d = u2.split(`;`)) == null ? void 0 : _d.filter((e4) => e4.includes(`stroke`))) == null ? void 0 : _e2.map((e4) => `${e4}`).join(`; `);
    p2.selectAll(`path`).attr(`style`, e3 ?? ``), p2.selectAll(`.row-rect-even path`).attr(`style`, u2);
  }
  return t2.intersect = function(e3) {
    return J.rect(t2, e3);
  }, p2;
}
d(En, `erBox`);
async function Dn(t2, n2, r2, i2 = 0, a2 = 0, o2 = [], c2 = ``) {
  let l2 = t2.insert(`g`).attr(`class`, `label ${o2.join(` `)}`).attr(`transform`, `translate(${i2}, ${a2})`).attr(`style`, c2);
  n2 !== e(n2) && (n2 = e(n2), n2 = n2.replaceAll(`<`, `&lt;`).replaceAll(`>`, `&gt;`));
  let u2 = l2.node().appendChild(await S(l2, n2, { width: h(n2, r2) + 100, style: c2, useHtmlLabels: r2.htmlLabels }, r2));
  if (n2.includes(`&lt;`) || n2.includes(`&gt;`)) {
    let e2 = u2.children[0];
    for (e2.textContent = e2.textContent.replaceAll(`&lt;`, `<`).replaceAll(`&gt;`, `>`); e2.childNodes[0]; ) e2 = e2.childNodes[0], e2.textContent = e2.textContent.replaceAll(`&lt;`, `<`).replaceAll(`&gt;`, `>`);
  }
  let d2 = u2.getBBox();
  if (s(r2.htmlLabels)) {
    let e2 = u2.children[0];
    e2.style.textAlign = `start`;
    let t3 = f(u2);
    d2 = e2.getBoundingClientRect(), t3.attr(`width`, d2.width), t3.attr(`height`, d2.height);
  }
  return d2;
}
d(Dn, `addText`);
async function On(e2, t2, n2, r2, i2 = n2.class.padding ?? 12) {
  let a2 = r2 ? 0 : 3, o2 = e2.insert(`g`).attr(`class`, W(t2)).attr(`id`, t2.domId || t2.id), s2 = null, c2 = null, l2 = null, u2 = null, d2 = 0, f2 = 0, p2 = 0;
  if (s2 = o2.insert(`g`).attr(`class`, `annotation-group text`), t2.annotations.length > 0) {
    let e3 = t2.annotations[0];
    await kn(s2, { text: `\xAB${e3}\xBB` }, 0), d2 = s2.node().getBBox().height;
  }
  c2 = o2.insert(`g`).attr(`class`, `label-group text`), await kn(c2, t2, 0, [`font-weight: bolder`]);
  let m2 = c2.node().getBBox();
  f2 = m2.height, l2 = o2.insert(`g`).attr(`class`, `members-group text`);
  let h2 = 0;
  for (let e3 of t2.members) {
    let t3 = await kn(l2, e3, h2, [e3.parseClassifier()]);
    h2 += t3 + a2;
  }
  p2 = l2.node().getBBox().height, p2 <= 0 && (p2 = i2 / 2), u2 = o2.insert(`g`).attr(`class`, `methods-group text`);
  let g2 = 0;
  for (let e3 of t2.methods) {
    let t3 = await kn(u2, e3, g2, [e3.parseClassifier()]);
    g2 += t3 + a2;
  }
  let _2 = o2.node().getBBox();
  if (s2 !== null) {
    let e3 = s2.node().getBBox();
    s2.attr(`transform`, `translate(${-e3.width / 2})`);
  }
  return c2.attr(`transform`, `translate(${-m2.width / 2}, ${d2})`), _2 = o2.node().getBBox(), l2.attr(`transform`, `translate(0, ${d2 + f2 + i2 * 2})`), _2 = o2.node().getBBox(), u2.attr(`transform`, `translate(0, ${d2 + f2 + (p2 ? p2 + i2 * 4 : i2 * 2)})`), _2 = o2.node().getBBox(), { shapeSvg: o2, bbox: _2 };
}
d(On, `textHelper`);
async function kn(e2, t2, r2, a2 = []) {
  let o2 = e2.insert(`g`).attr(`class`, `label`).attr(`style`, a2.join(`; `)), c2 = l(), u2 = `useHtmlLabels` in t2 ? t2.useHtmlLabels : s(c2.htmlLabels) ?? true, m2 = ``;
  m2 = `text` in t2 ? t2.text : t2.label, !u2 && m2.startsWith(`\\`) && (m2 = m2.substring(1)), i(m2) && (u2 = true);
  let g2 = await S(o2, n(p(m2)), { width: h(m2, c2) + 50, classes: `markdown-node-label`, useHtmlLabels: u2 }, c2), _2, v2 = 1;
  if (u2) {
    let e3 = g2.children[0], t3 = f(g2);
    v2 = e3.innerHTML.split(`<br>`).length, e3.innerHTML.includes(`</math>`) && (v2 += e3.innerHTML.split(`<mrow>`).length - 1);
    let n2 = e3.getElementsByTagName(`img`);
    if (n2) {
      let e4 = m2.replace(/<img[^>]*>/g, ``).trim() === ``;
      await Promise.all([...n2].map((t4) => new Promise((n3) => {
        function r3() {
          var _a;
          if (t4.style.display = `flex`, t4.style.flexDirection = `column`, e4) {
            let e5 = ((_a = c2.fontSize) == null ? void 0 : _a.toString()) ?? window.getComputedStyle(document.body).fontSize, n4 = parseInt(e5, 10) * 5 + `px`;
            t4.style.minWidth = n4, t4.style.maxWidth = n4;
          } else t4.style.width = `100%`;
          n3(t4);
        }
        d(r3, `setupImage`), setTimeout(() => {
          t4.complete && r3();
        }), t4.addEventListener(`error`, r3), t4.addEventListener(`load`, r3);
      })));
    }
    _2 = e3.getBoundingClientRect(), t3.attr(`width`, _2.width), t3.attr(`height`, _2.height);
  } else {
    a2.includes(`font-weight: bolder`) && f(g2).selectAll(`tspan`).attr(`font-weight`, ``), v2 = g2.children.length;
    let e3 = g2.children[0];
    (g2.textContent === `` || g2.textContent.includes(`&gt`)) && (e3.textContent = m2[0] + m2.substring(1).replaceAll(`&gt;`, `>`).replaceAll(`&lt;`, `<`).trim(), m2[1] === ` ` && (e3.textContent = e3.textContent[0] + ` ` + e3.textContent.substring(1))), e3.textContent === `undefined` && (e3.textContent = ``), _2 = g2.getBBox();
  }
  return o2.attr(`transform`, `translate(0,` + (-_2.height / (2 * v2) + r2) + `)`), _2.height;
}
d(kn, `addText`);
async function An(e2, t2) {
  var _a, _b;
  let n2 = a(), r2 = n2.class.padding ?? 12, i2 = r2, o2 = t2.useHtmlLabels ?? s(n2.htmlLabels) ?? true, c2 = t2;
  c2.annotations = c2.annotations ?? [], c2.members = c2.members ?? [], c2.methods = c2.methods ?? [];
  let { shapeSvg: l2, bbox: u2 } = await On(e2, t2, n2, o2, i2), { labelStyles: d2, nodeStyles: p2 } = y(t2);
  t2.labelStyle = d2, t2.cssStyles = c2.styles || ``;
  let m2 = ((_a = c2.styles) == null ? void 0 : _a.join(`;`)) || p2 || ``;
  t2.cssStyles || (t2.cssStyles = m2.replaceAll(`!important`, ``).split(`;`));
  let h2 = c2.members.length === 0 && c2.methods.length === 0 && !((_b = n2.class) == null ? void 0 : _b.hideEmptyMembersBox), g2 = V.svg(l2), _2 = v(t2, {});
  t2.look !== `handDrawn` && (_2.roughness = 0, _2.fillStyle = `solid`);
  let b2 = u2.width, x2 = u2.height;
  c2.members.length === 0 && c2.methods.length === 0 ? x2 += i2 : c2.members.length > 0 && c2.methods.length === 0 && (x2 += i2 * 2);
  let S2 = -b2 / 2, C2 = -x2 / 2, w2 = g2.rectangle(S2 - r2, C2 - r2 - (h2 ? r2 : c2.members.length === 0 && c2.methods.length === 0 ? -r2 / 2 : 0), b2 + 2 * r2, x2 + 2 * r2 + (h2 ? r2 * 2 : c2.members.length === 0 && c2.methods.length === 0 ? -r2 : 0), _2), T2 = l2.insert(() => w2, `:first-child`);
  T2.attr(`class`, `basic label-container`);
  let E2 = T2.node().getBBox();
  l2.selectAll(`.text`).each((e3, t3, n3) => {
    var _a2;
    let i3 = f(n3[t3]), a2 = i3.attr(`transform`), s2 = 0;
    if (a2) {
      let e4 = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(a2);
      e4 && (s2 = parseFloat(e4[2]));
    }
    let u3 = s2 + C2 + r2 - (h2 ? r2 : c2.members.length === 0 && c2.methods.length === 0 ? -r2 / 2 : 0);
    o2 || (u3 -= 4);
    let d3 = S2;
    (i3.attr(`class`).includes(`label-group`) || i3.attr(`class`).includes(`annotation-group`)) && (d3 = -((_a2 = i3.node()) == null ? void 0 : _a2.getBBox().width) / 2 || 0, l2.selectAll(`text`).each(function(e4, t4, n4) {
      window.getComputedStyle(n4[t4]).textAnchor === `middle` && (d3 = 0);
    })), i3.attr(`transform`, `translate(${d3}, ${u3})`);
  });
  let D2 = l2.select(`.annotation-group`).node().getBBox().height - (h2 ? r2 / 2 : 0) || 0, O2 = l2.select(`.label-group`).node().getBBox().height - (h2 ? r2 / 2 : 0) || 0, k2 = l2.select(`.members-group`).node().getBBox().height - (h2 ? r2 / 2 : 0) || 0;
  if (c2.members.length > 0 || c2.methods.length > 0 || h2) {
    let e3 = g2.line(E2.x, D2 + O2 + C2 + r2, E2.x + E2.width, D2 + O2 + C2 + r2, _2);
    l2.insert(() => e3).attr(`class`, `divider`).attr(`style`, m2);
  }
  if (h2 || c2.members.length > 0 || c2.methods.length > 0) {
    let e3 = g2.line(E2.x, D2 + O2 + k2 + C2 + i2 * 2 + r2, E2.x + E2.width, D2 + O2 + k2 + C2 + r2 + i2 * 2, _2);
    l2.insert(() => e3).attr(`class`, `divider`).attr(`style`, m2);
  }
  if (c2.look !== `handDrawn` && l2.selectAll(`path`).attr(`style`, m2), T2.select(`:nth-child(2)`).attr(`style`, m2), l2.selectAll(`.divider`).select(`path`).attr(`style`, m2), t2.labelStyle ? l2.selectAll(`span`).attr(`style`, t2.labelStyle) : l2.selectAll(`span`).attr(`style`, m2), !o2) {
    let e3 = RegExp(/color\s*:\s*([^;]*)/), t3 = e3.exec(m2);
    if (t3) {
      let e4 = t3[0].replace(`color`, `fill`);
      l2.selectAll(`tspan`).attr(`style`, e4);
    } else if (d2) {
      let t4 = e3.exec(d2);
      if (t4) {
        let e4 = t4[0].replace(`color`, `fill`);
        l2.selectAll(`tspan`).attr(`style`, e4);
      }
    }
  }
  return U(t2, T2), t2.intersect = function(e3) {
    return J.rect(t2, e3);
  }, l2;
}
d(An, `classBox`);
async function jn(e2, t2) {
  var _a, _b;
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let i2 = t2, a2 = t2, o2 = `verifyMethod` in t2, s2 = W(t2), c2 = e2.insert(`g`).attr(`class`, s2).attr(`id`, t2.domId ?? t2.id), l2;
  l2 = o2 ? await $(c2, `&lt;&lt;${i2.type}&gt;&gt;`, 0, t2.labelStyle) : await $(c2, `&lt;&lt;Element&gt;&gt;`, 0, t2.labelStyle);
  let u2 = l2, d2 = await $(c2, i2.name, u2, t2.labelStyle + `; font-weight: bold;`);
  if (u2 += d2 + 20, o2) {
    let e3 = await $(c2, `${i2.requirementId ? `ID: ${i2.requirementId}` : ``}`, u2, t2.labelStyle);
    u2 += e3;
    let n3 = await $(c2, `${i2.text ? `Text: ${i2.text}` : ``}`, u2, t2.labelStyle);
    u2 += n3;
    let r3 = await $(c2, `${i2.risk ? `Risk: ${i2.risk}` : ``}`, u2, t2.labelStyle);
    u2 += r3, await $(c2, `${i2.verifyMethod ? `Verification: ${i2.verifyMethod}` : ``}`, u2, t2.labelStyle);
  } else {
    let e3 = await $(c2, `${a2.type ? `Type: ${a2.type}` : ``}`, u2, t2.labelStyle);
    u2 += e3, await $(c2, `${a2.docRef ? `Doc Ref: ${a2.docRef}` : ``}`, u2, t2.labelStyle);
  }
  let p2 = (((_a = c2.node()) == null ? void 0 : _a.getBBox().width) ?? 200) + 20, m2 = (((_b = c2.node()) == null ? void 0 : _b.getBBox().height) ?? 200) + 20, h2 = -p2 / 2, g2 = -m2 / 2, _2 = V.svg(c2), b2 = v(t2, {});
  t2.look !== `handDrawn` && (b2.roughness = 0, b2.fillStyle = `solid`);
  let x2 = _2.rectangle(h2, g2, p2, m2, b2), S2 = c2.insert(() => x2, `:first-child`);
  if (S2.attr(`class`, `basic label-container`).attr(`style`, r2), c2.selectAll(`.label`).each((e3, t3, n3) => {
    let r3 = f(n3[t3]), i3 = r3.attr(`transform`), a3 = 0, o3 = 0;
    if (i3) {
      let e4 = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(i3);
      e4 && (a3 = parseFloat(e4[1]), o3 = parseFloat(e4[2]));
    }
    let s3 = o3 - m2 / 2, c3 = h2 + 20 / 2;
    (t3 === 0 || t3 === 1) && (c3 = a3), r3.attr(`transform`, `translate(${c3}, ${s3 + 20})`);
  }), u2 > l2 + d2 + 20) {
    let e3 = _2.line(h2, g2 + l2 + d2 + 20, h2 + p2, g2 + l2 + d2 + 20, b2);
    c2.insert(() => e3).attr(`style`, r2);
  }
  return U(t2, S2), t2.intersect = function(e3) {
    return J.rect(t2, e3);
  }, c2;
}
d(jn, `requirementBox`);
async function $(e2, t2, r2, i2 = ``) {
  if (t2 === ``) return 0;
  let o2 = e2.insert(`g`).attr(`class`, `label`).attr(`style`, i2), s2 = a(), c2 = s2.htmlLabels ?? true, l2 = await S(o2, n(p(t2)), { width: h(t2, s2) + 50, classes: `markdown-node-label`, useHtmlLabels: c2, style: i2 }, s2), u2;
  if (c2) {
    let e3 = l2.children[0], t3 = f(l2);
    u2 = e3.getBoundingClientRect(), t3.attr(`width`, u2.width), t3.attr(`height`, u2.height);
  } else {
    let e3 = l2.children[0];
    for (let t3 of e3.children) t3.textContent = t3.textContent.replaceAll(`&gt;`, `>`).replaceAll(`&lt;`, `<`), i2 && t3.setAttribute(`style`, i2);
    u2 = l2.getBBox(), u2.height += 6;
  }
  return o2.attr(`transform`, `translate(${-u2.width / 2},${-u2.height / 2 + r2})`), u2.height;
}
d($, `addText`);
var Mn = d((e2) => {
  switch (e2) {
    case `Very High`:
      return `red`;
    case `High`:
      return `orange`;
    case `Medium`:
      return null;
    case `Low`:
      return `blue`;
    case `Very Low`:
      return `lightblue`;
  }
}, `colorFromPriority`);
async function Nn(e2, t2, { config: n2 }) {
  var _a, _b;
  let { labelStyles: r2, nodeStyles: i2 } = y(t2);
  t2.labelStyle = r2 || ``;
  let a2 = t2.width;
  t2.width = (t2.width ?? 200) - 10;
  let { shapeSvg: o2, bbox: s2, label: c2 } = await H(e2, t2, W(t2)), l2 = t2.padding || 10, u2 = ``, d2;
  `ticket` in t2 && t2.ticket && ((_a = n2 == null ? void 0 : n2.kanban) == null ? void 0 : _a.ticketBaseUrl) && (u2 = (_b = n2 == null ? void 0 : n2.kanban) == null ? void 0 : _b.ticketBaseUrl.replace(`#TICKET#`, t2.ticket), d2 = o2.insert(`svg:a`, `:first-child`).attr(`class`, `kanban-ticket-link`).attr(`xlink:href`, u2).attr(`target`, `_blank`));
  let f2 = { useHtmlLabels: t2.useHtmlLabels, labelStyle: t2.labelStyle || ``, width: t2.width, img: t2.img, padding: t2.padding || 8, centerLabel: false }, p2, m2;
  d2 ? { label: p2, bbox: m2 } = await He(d2, `ticket` in t2 && t2.ticket || ``, f2) : { label: p2, bbox: m2 } = await He(o2, `ticket` in t2 && t2.ticket || ``, f2);
  let { label: h2, bbox: g2 } = await He(o2, `assigned` in t2 && t2.assigned || ``, f2);
  t2.width = a2;
  let _2 = (t2 == null ? void 0 : t2.width) || 0, b2 = Math.max(m2.height, g2.height) / 2, x2 = Math.max(s2.height + 20, (t2 == null ? void 0 : t2.height) || 0) + b2, S2 = -_2 / 2, C2 = -x2 / 2;
  c2.attr(`transform`, `translate(` + (l2 - _2 / 2) + `, ` + (-b2 - s2.height / 2) + `)`), p2.attr(`transform`, `translate(` + (l2 - _2 / 2) + `, ` + (-b2 + s2.height / 2) + `)`), h2.attr(`transform`, `translate(` + (l2 + _2 / 2 - g2.width - 20) + `, ` + (-b2 + s2.height / 2) + `)`);
  let w2, { rx: T2, ry: E2 } = t2, { cssStyles: D2 } = t2;
  if (t2.look === `handDrawn`) {
    let e3 = V.svg(o2), n3 = v(t2, {}), r3 = T2 || E2 ? e3.path(q(S2, C2, _2, x2, T2 || 0), n3) : e3.rectangle(S2, C2, _2, x2, n3);
    w2 = o2.insert(() => r3, `:first-child`), w2.attr(`class`, `basic label-container`).attr(`style`, D2 || null);
  } else {
    w2 = o2.insert(`rect`, `:first-child`), w2.attr(`class`, `basic label-container __APA__`).attr(`style`, i2).attr(`rx`, T2 ?? 5).attr(`ry`, E2 ?? 5).attr(`x`, S2).attr(`y`, C2).attr(`width`, _2).attr(`height`, x2);
    let e3 = `priority` in t2 && t2.priority;
    if (e3) {
      let t3 = o2.append(`line`), n3 = S2 + 2, r3 = C2 + Math.floor((T2 ?? 0) / 2), i3 = C2 + x2 - Math.floor((T2 ?? 0) / 2);
      t3.attr(`x1`, n3).attr(`y1`, r3).attr(`x2`, n3).attr(`y2`, i3).attr(`stroke-width`, `4`).attr(`stroke`, Mn(e3));
    }
  }
  return U(t2, w2), t2.height = x2, t2.intersect = function(e3) {
    return J.rect(t2, e3);
  }, o2;
}
d(Nn, `kanbanItem`);
async function Pn(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, halfPadding: o2, label: s2 } = await H(e2, t2, W(t2)), c2 = a2.width + 10 * o2, l2 = a2.height + 8 * o2, d2 = 0.15 * c2, { cssStyles: f2 } = t2, p2 = a2.width + 20, m2 = a2.height + 20, h2 = Math.max(c2, p2), _2 = Math.max(l2, m2);
  s2.attr(`transform`, `translate(${-a2.width / 2}, ${-a2.height / 2})`);
  let b2, x2 = `M0 0 
    a${d2},${d2} 1 0,0 ${h2 * 0.25},${-1 * _2 * 0.1}
    a${d2},${d2} 1 0,0 ${h2 * 0.25},0
    a${d2},${d2} 1 0,0 ${h2 * 0.25},0
    a${d2},${d2} 1 0,0 ${h2 * 0.25},${_2 * 0.1}

    a${d2},${d2} 1 0,0 ${h2 * 0.15},${_2 * 0.33}
    a${d2 * 0.8},${d2 * 0.8} 1 0,0 0,${_2 * 0.34}
    a${d2},${d2} 1 0,0 ${-1 * h2 * 0.15},${_2 * 0.33}

    a${d2},${d2} 1 0,0 ${-1 * h2 * 0.25},${_2 * 0.15}
    a${d2},${d2} 1 0,0 ${-1 * h2 * 0.25},0
    a${d2},${d2} 1 0,0 ${-1 * h2 * 0.25},0
    a${d2},${d2} 1 0,0 ${-1 * h2 * 0.25},${-1 * _2 * 0.15}

    a${d2},${d2} 1 0,0 ${-1 * h2 * 0.1},${-1 * _2 * 0.33}
    a${d2 * 0.8},${d2 * 0.8} 1 0,0 0,${-1 * _2 * 0.34}
    a${d2},${d2} 1 0,0 ${h2 * 0.1},${-1 * _2 * 0.33}
  H0 V0 Z`;
  if (t2.look === `handDrawn`) {
    let e3 = V.svg(i2), n3 = v(t2, {}), r3 = e3.path(x2, n3);
    b2 = i2.insert(() => r3, `:first-child`), b2.attr(`class`, `basic label-container`).attr(`style`, g(f2));
  } else b2 = i2.insert(`path`, `:first-child`).attr(`class`, `basic label-container`).attr(`style`, r2).attr(`d`, x2);
  return b2.attr(`transform`, `translate(${-h2 / 2}, ${-_2 / 2})`), U(t2, b2), t2.calcIntersect = function(e3, t3) {
    return J.rect(e3, t3);
  }, t2.intersect = function(e3) {
    return u.info(`Bang intersect`, t2, e3), J.rect(t2, e3);
  }, i2;
}
d(Pn, `bang`);
async function Fn(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, halfPadding: o2, label: s2 } = await H(e2, t2, W(t2)), c2 = a2.width + 2 * o2, l2 = a2.height + 2 * o2, d2 = 0.15 * c2, f2 = 0.25 * c2, p2 = 0.35 * c2, m2 = 0.2 * c2, { cssStyles: h2 } = t2, _2, b2 = `M0 0 
    a${d2},${d2} 0 0,1 ${c2 * 0.25},${-1 * c2 * 0.1}
    a${p2},${p2} 1 0,1 ${c2 * 0.4},${-1 * c2 * 0.1}
    a${f2},${f2} 1 0,1 ${c2 * 0.35},${c2 * 0.2}

    a${d2},${d2} 1 0,1 ${c2 * 0.15},${l2 * 0.35}
    a${m2},${m2} 1 0,1 ${-1 * c2 * 0.15},${l2 * 0.65}

    a${f2},${d2} 1 0,1 ${-1 * c2 * 0.25},${c2 * 0.15}
    a${p2},${p2} 1 0,1 ${-1 * c2 * 0.5},0
    a${d2},${d2} 1 0,1 ${-1 * c2 * 0.25},${-1 * c2 * 0.15}

    a${d2},${d2} 1 0,1 ${-1 * c2 * 0.1},${-1 * l2 * 0.35}
    a${m2},${m2} 1 0,1 ${c2 * 0.1},${-1 * l2 * 0.65}
  H0 V0 Z`;
  if (t2.look === `handDrawn`) {
    let e3 = V.svg(i2), n3 = v(t2, {}), r3 = e3.path(b2, n3);
    _2 = i2.insert(() => r3, `:first-child`), _2.attr(`class`, `basic label-container`).attr(`style`, g(h2));
  } else _2 = i2.insert(`path`, `:first-child`).attr(`class`, `basic label-container`).attr(`style`, r2).attr(`d`, b2);
  return s2.attr(`transform`, `translate(${-a2.width / 2}, ${-a2.height / 2})`), _2.attr(`transform`, `translate(${-c2 / 2}, ${-l2 / 2})`), U(t2, _2), t2.calcIntersect = function(e3, t3) {
    return J.rect(e3, t3);
  }, t2.intersect = function(e3) {
    return u.info(`Cloud intersect`, t2, e3), J.rect(t2, e3);
  }, i2;
}
d(Fn, `cloud`);
async function In(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = y(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, halfPadding: o2, label: s2 } = await H(e2, t2, W(t2)), c2 = a2.width + 8 * o2, l2 = a2.height + 2 * o2, u2 = `
    M${-c2 / 2} ${l2 / 2 - 5}
    v${-l2 + 10}
    q0,-5 5,-5
    h${c2 - 10}
    q5,0 5,5
    v${l2 - 10}
    q0,5 -5,5
    h${-c2 + 10}
    q-5,0 -5,-5
    Z
  `, d2 = i2.append(`path`).attr(`id`, `node-` + t2.id).attr(`class`, `node-bkg node-` + t2.type).attr(`style`, r2).attr(`d`, u2);
  return i2.append(`line`).attr(`class`, `node-line-`).attr(`x1`, -c2 / 2).attr(`y1`, l2 / 2).attr(`x2`, c2 / 2).attr(`y2`, l2 / 2), s2.attr(`transform`, `translate(${-a2.width / 2}, ${-a2.height / 2})`), i2.append(() => s2.node()), U(t2, d2), t2.calcIntersect = function(e3, t3) {
    return J.rect(e3, t3);
  }, t2.intersect = function(e3) {
    return J.rect(t2, e3);
  }, i2;
}
d(In, `defaultMindmapNode`);
async function Ln(e2, t2) {
  return mt(e2, t2, { padding: t2.padding ?? 0 });
}
d(Ln, `mindmapCircle`);
var Rn = [{ semanticName: `Process`, name: `Rectangle`, shortName: `rect`, description: `Standard process shape`, aliases: [`proc`, `process`, `rectangle`], internalAliases: [`squareRect`], handler: sn }, { semanticName: `Event`, name: `Rounded Rectangle`, shortName: `rounded`, description: `Represents an event`, aliases: [`event`], internalAliases: [`roundedRect`], handler: rn }, { semanticName: `Terminal Point`, name: `Stadium`, shortName: `stadium`, description: `Terminal point`, aliases: [`terminal`, `pill`], handler: cn }, { semanticName: `Subprocess`, name: `Framed Rectangle`, shortName: `fr-rect`, description: `Subprocess`, aliases: [`subprocess`, `subproc`, `framed-rectangle`, `subroutine`], handler: fn }, { semanticName: `Database`, name: `Cylinder`, shortName: `cyl`, description: `Database storage`, aliases: [`db`, `database`, `cylinder`], handler: wt }, { semanticName: `Start`, name: `Circle`, shortName: `circle`, description: `Starting point`, aliases: [`circ`], handler: mt }, { semanticName: `Bang`, name: `Bang`, shortName: `bang`, description: `Bang`, aliases: [`bang`], handler: Pn }, { semanticName: `Cloud`, name: `Cloud`, shortName: `cloud`, description: `cloud`, aliases: [`cloud`], handler: Fn }, { semanticName: `Decision`, name: `Diamond`, shortName: `diam`, description: `Decision-making step`, aliases: [`decision`, `diamond`, `question`], handler: $t }, { semanticName: `Prepare Conditional`, name: `Hexagon`, shortName: `hex`, description: `Preparation or condition step`, aliases: [`hexagon`, `prepare`], handler: jt }, { semanticName: `Data Input/Output`, name: `Lean Right`, shortName: `lean-r`, description: `Represents input or output`, aliases: [`lean-right`, `in-out`], internalAliases: [`lean_right`], handler: Ht }, { semanticName: `Data Input/Output`, name: `Lean Left`, shortName: `lean-l`, description: `Represents output or input`, aliases: [`lean-left`, `out-in`], internalAliases: [`lean_left`], handler: Vt }, { semanticName: `Priority Action`, name: `Trapezoid Base Bottom`, shortName: `trap-b`, description: `Priority action`, aliases: [`priority`, `trapezoid-bottom`, `trapezoid`], handler: bn }, { semanticName: `Manual Operation`, name: `Trapezoid Base Top`, shortName: `trap-t`, description: `Represents a manual task`, aliases: [`manual`, `trapezoid-top`, `inv-trapezoid`], internalAliases: [`inv_trapezoid`], handler: Rt }, { semanticName: `Stop`, name: `Double Circle`, shortName: `dbl-circ`, description: `Represents a stop point`, aliases: [`double-circle`], internalAliases: [`doublecircle`], handler: Et }, { semanticName: `Text Block`, name: `Text Block`, shortName: `text`, description: `Text block`, handler: hn }, { semanticName: `Card`, name: `Notched Rectangle`, shortName: `notch-rect`, description: `Represents a card`, aliases: [`card`, `notched-rectangle`], handler: ft }, { semanticName: `Lined/Shaded Process`, name: `Lined Rectangle`, shortName: `lin-rect`, description: `Lined process shape`, aliases: [`lined-rectangle`, `lined-process`, `lin-proc`, `shaded-process`], handler: an }, { semanticName: `Start`, name: `Small Circle`, shortName: `sm-circ`, description: `Small starting point`, aliases: [`start`, `small-circle`], internalAliases: [`stateStart`], handler: dn }, { semanticName: `Stop`, name: `Framed Circle`, shortName: `fr-circ`, description: `Stop point`, aliases: [`stop`, `framed-circle`], internalAliases: [`stateEnd`], handler: un }, { semanticName: `Fork/Join`, name: `Filled Rectangle`, shortName: `fork`, description: `Fork or join in process flow`, aliases: [`join`], internalAliases: [`forkJoin`], handler: kt }, { semanticName: `Collate`, name: `Hourglass`, shortName: `hourglass`, description: `Represents a collate operation`, aliases: [`hourglass`, `collate`], handler: Mt }, { semanticName: `Comment`, name: `Curly Brace`, shortName: `brace`, description: `Adds a comment`, aliases: [`comment`, `brace-l`], handler: _t }, { semanticName: `Comment Right`, name: `Curly Brace`, shortName: `brace-r`, description: `Adds a comment`, handler: vt }, { semanticName: `Comment with braces on both sides`, name: `Curly Braces`, shortName: `braces`, description: `Adds a comment`, handler: yt }, { semanticName: `Com Link`, name: `Lightning Bolt`, shortName: `bolt`, description: `Communication link`, aliases: [`com-link`, `lightning-bolt`], handler: Ut }, { semanticName: `Document`, name: `Document`, shortName: `doc`, description: `Represents a document`, aliases: [`doc`, `document`], handler: Cn }, { semanticName: `Delay`, name: `Half-Rounded Rectangle`, shortName: `delay`, description: `Represents a delay`, aliases: [`half-rounded-rectangle`], handler: At }, { semanticName: `Direct Access Storage`, name: `Horizontal Cylinder`, shortName: `h-cyl`, description: `Direct access storage`, aliases: [`das`, `horizontal-cylinder`], handler: yn }, { semanticName: `Disk Storage`, name: `Lined Cylinder`, shortName: `lin-cyl`, description: `Disk storage`, aliases: [`disk`, `lined-cylinder`], handler: qt }, { semanticName: `Display`, name: `Curved Trapezoid`, shortName: `curv-trap`, description: `Represents a display`, aliases: [`curved-trapezoid`, `display`], handler: bt }, { semanticName: `Divided Process`, name: `Divided Rectangle`, shortName: `div-rect`, description: `Divided process shape`, aliases: [`div-proc`, `divided-rectangle`, `divided-process`], handler: Tt }, { semanticName: `Extract`, name: `Triangle`, shortName: `tri`, description: `Extraction process`, aliases: [`extract`, `triangle`], handler: Sn }, { semanticName: `Internal Storage`, name: `Window Pane`, shortName: `win-pane`, description: `Internal storage`, aliases: [`internal-storage`, `window-pane`], handler: Tn }, { semanticName: `Junction`, name: `Filled Circle`, shortName: `f-circ`, description: `Junction point`, aliases: [`junction`, `filled-circle`], handler: Dt }, { semanticName: `Loop Limit`, name: `Trapezoidal Pentagon`, shortName: `notch-pent`, description: `Loop limit step`, aliases: [`loop-limit`, `notched-pentagon`], handler: xn }, { semanticName: `Manual File`, name: `Flipped Triangle`, shortName: `flip-tri`, description: `Manual file operation`, aliases: [`manual-file`, `flipped-triangle`], handler: Ot }, { semanticName: `Manual Input`, name: `Sloped Rectangle`, shortName: `sl-rect`, description: `Manual input step`, aliases: [`manual-input`, `sloped-rectangle`], handler: on }, { semanticName: `Multi-Document`, name: `Stacked Document`, shortName: `docs`, description: `Multiple documents`, aliases: [`documents`, `st-doc`, `stacked-document`], handler: Xt }, { semanticName: `Multi-Process`, name: `Stacked Rectangle`, shortName: `st-rect`, description: `Multiple processes`, aliases: [`procs`, `processes`, `stacked-rectangle`], handler: Yt }, { semanticName: `Stored Data`, name: `Bow Tie Rectangle`, shortName: `bow-rect`, description: `Stored data`, aliases: [`stored-data`, `bow-tie-rectangle`], handler: dt }, { semanticName: `Summary`, name: `Crossed Circle`, shortName: `cross-circ`, description: `Summary`, aliases: [`summary`, `crossed-circle`], handler: gt }, { semanticName: `Tagged Document`, name: `Tagged Document`, shortName: `tag-doc`, description: `Tagged document`, aliases: [`tag-doc`, `tagged-document`], handler: mn }, { semanticName: `Tagged Process`, name: `Tagged Rectangle`, shortName: `tag-rect`, description: `Tagged process`, aliases: [`tagged-rectangle`, `tag-proc`, `tagged-process`], handler: pn }, { semanticName: `Paper Tape`, name: `Flag`, shortName: `flag`, description: `Paper tape`, aliases: [`paper-tape`], handler: wn }, { semanticName: `Odd`, name: `Odd`, shortName: `odd`, description: `Odd shape`, internalAliases: [`rect_left_inv_arrow`], handler: en }, { semanticName: `Lined Document`, name: `Lined Document`, shortName: `lin-doc`, description: `Lined document`, aliases: [`lined-document`], handler: Jt }], zn = d(() => {
  let e2 = { state: ln, choice: pt, note: Zt, rectWithTitle: tn, labelRect: Bt, iconSquare: It, iconCircle: Pt, icon: Nt, iconRounded: Ft, imageSquare: Lt, anchor: lt, kanbanItem: Nn, mindmapCircle: Ln, defaultMindmapNode: In, classBox: An, erBox: En, requirementBox: jn }, t2 = [...Object.entries(e2), ...Rn.flatMap((e3) => [e3.shortName, ...`aliases` in e3 ? e3.aliases : [], ...`internalAliases` in e3 ? e3.internalAliases : []].map((t3) => [t3, e3.handler]))];
  return Object.fromEntries(t2);
}, `generateShapeMap`)();
function Bn(e2) {
  return e2 in zn;
}
d(Bn, `isValidShape`);
var Vn = /* @__PURE__ */ new Map();
async function Hn(e2, t2, n2) {
  let r2, i2;
  t2.shape === `rect` && (t2.rx && t2.ry ? t2.shape = `roundedRect` : t2.shape = `squareRect`);
  let a2 = t2.shape ? zn[t2.shape] : void 0;
  if (!a2) throw Error(`No such shape: ${t2.shape}. Please check your syntax.`);
  if (t2.link) {
    let o2;
    n2.config.securityLevel === `sandbox` ? o2 = `_top` : t2.linkTarget && (o2 = t2.linkTarget || `_blank`), r2 = e2.insert(`svg:a`).attr(`xlink:href`, t2.link).attr(`target`, o2 ?? null), i2 = await a2(r2, t2, n2);
  } else i2 = await a2(e2, t2, n2), r2 = i2;
  return t2.tooltip && i2.attr(`title`, t2.tooltip), Vn.set(t2.id, r2), t2.haveCallback && r2.attr(`class`, r2.attr(`class`) + ` clickable`), r2;
}
d(Hn, `insertNode`);
var Un = d((e2, t2) => {
  Vn.set(t2.id, e2);
}, `setNodeElem`), Wn = d(() => {
  Vn.clear();
}, `clear`), Gn = d((e2) => {
  let t2 = Vn.get(e2.id);
  u.trace(`Transforming node`, e2.diff, e2, `translate(` + (e2.x - e2.width / 2 - 5) + `, ` + e2.width / 2 + `)`);
  let n2 = e2.diff || 0;
  return e2.clusterNode ? t2.attr(`transform`, `translate(` + (e2.x + n2 - e2.width / 2) + `, ` + (e2.y - e2.height / 2 - 8) + `)`) : t2.attr(`transform`, `translate(` + e2.x + `, ` + e2.y + `)`), n2;
}, `positionNode`);
export {
  Hn as a,
  Gn as c,
  V as d,
  Ze as i,
  Un as l,
  Wn as n,
  Bn as o,
  qe as r,
  H as s,
  Qe as t,
  U as u
};
