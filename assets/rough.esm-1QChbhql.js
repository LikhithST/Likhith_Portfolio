function e(e2, t2, n2) {
  if (e2 && e2.length) {
    let [r2, i2] = t2, a2 = Math.PI / 180 * n2, o2 = Math.cos(a2), s2 = Math.sin(a2);
    for (let t3 of e2) {
      let [e3, n3] = t3;
      t3[0] = (e3 - r2) * o2 - (n3 - i2) * s2 + r2, t3[1] = (e3 - r2) * s2 + (n3 - i2) * o2 + i2;
    }
  }
}
function t(e2, t2) {
  return e2[0] === t2[0] && e2[1] === t2[1];
}
function n(n2, r2, i2, a2 = 1) {
  let o2 = i2, s2 = Math.max(r2, 0.1), c2 = n2[0] && n2[0][0] && typeof n2[0][0] == `number` ? [n2] : n2, l2 = [0, 0];
  if (o2) for (let t2 of c2) e(t2, l2, o2);
  let u2 = (function(e2, n3, r3) {
    let i3 = [];
    for (let n4 of e2) {
      let e3 = [...n4];
      t(e3[0], e3[e3.length - 1]) || e3.push([e3[0][0], e3[0][1]]), e3.length > 2 && i3.push(e3);
    }
    let a3 = [];
    n3 = Math.max(n3, 0.1);
    let o3 = [];
    for (let e3 of i3) for (let t2 = 0; t2 < e3.length - 1; t2++) {
      let n4 = e3[t2], r4 = e3[t2 + 1];
      if (n4[1] !== r4[1]) {
        let e4 = Math.min(n4[1], r4[1]);
        o3.push({ ymin: e4, ymax: Math.max(n4[1], r4[1]), x: e4 === n4[1] ? n4[0] : r4[0], islope: (r4[0] - n4[0]) / (r4[1] - n4[1]) });
      }
    }
    if (o3.sort(((e3, t2) => e3.ymin < t2.ymin ? -1 : e3.ymin > t2.ymin ? 1 : e3.x < t2.x ? -1 : e3.x > t2.x ? 1 : e3.ymax === t2.ymax ? 0 : (e3.ymax - t2.ymax) / Math.abs(e3.ymax - t2.ymax))), !o3.length) return a3;
    let s3 = [], c3 = o3[0].ymin, l3 = 0;
    for (; s3.length || o3.length; ) {
      if (o3.length) {
        let e3 = -1;
        for (let t2 = 0; t2 < o3.length && !(o3[t2].ymin > c3); t2++) e3 = t2;
        o3.splice(0, e3 + 1).forEach(((e4) => {
          s3.push({ s: c3, edge: e4 });
        }));
      }
      if (s3 = s3.filter(((e3) => !(e3.edge.ymax <= c3))), s3.sort(((e3, t2) => e3.edge.x === t2.edge.x ? 0 : (e3.edge.x - t2.edge.x) / Math.abs(e3.edge.x - t2.edge.x))), (r3 !== 1 || l3 % n3 == 0) && s3.length > 1) for (let e3 = 0; e3 < s3.length; e3 += 2) {
        let t2 = e3 + 1;
        if (t2 >= s3.length) break;
        let n4 = s3[e3].edge, r4 = s3[t2].edge;
        a3.push([[Math.round(n4.x), c3], [Math.round(r4.x), c3]]);
      }
      c3 += r3, s3.forEach(((e3) => {
        e3.edge.x = e3.edge.x + r3 * e3.edge.islope;
      })), l3++;
    }
    return a3;
  })(c2, s2, a2);
  if (o2) {
    for (let t2 of c2) e(t2, l2, -o2);
    (function(t2, n3, r3) {
      let i3 = [];
      t2.forEach(((e2) => i3.push(...e2))), e(i3, n3, r3);
    })(u2, l2, -o2);
  }
  return u2;
}
function r(e2, t2) {
  var _a;
  let r2 = t2.hachureAngle + 90, i2 = t2.hachureGap;
  i2 < 0 && (i2 = 4 * t2.strokeWidth), i2 = Math.round(Math.max(i2, 0.1));
  let a2 = 1;
  return t2.roughness >= 1 && (((_a = t2.randomizer) == null ? void 0 : _a.next()) || Math.random()) > 0.7 && (a2 = i2), n(e2, i2, r2, a2 || 1);
}
var i = class {
  constructor(e2) {
    this.helper = e2;
  }
  fillPolygons(e2, t2) {
    return this._fillPolygons(e2, t2);
  }
  _fillPolygons(e2, t2) {
    let n2 = r(e2, t2);
    return { type: `fillSketch`, ops: this.renderLines(n2, t2) };
  }
  renderLines(e2, t2) {
    let n2 = [];
    for (let r2 of e2) n2.push(...this.helper.doubleLineOps(r2[0][0], r2[0][1], r2[1][0], r2[1][1], t2));
    return n2;
  }
};
function a(e2) {
  let t2 = e2[0], n2 = e2[1];
  return Math.sqrt((t2[0] - n2[0]) ** 2 + (t2[1] - n2[1]) ** 2);
}
var o = class extends i {
  fillPolygons(e2, t2) {
    let n2 = t2.hachureGap;
    n2 < 0 && (n2 = 4 * t2.strokeWidth), n2 = Math.max(n2, 0.1);
    let i2 = r(e2, Object.assign({}, t2, { hachureGap: n2 })), o2 = Math.PI / 180 * t2.hachureAngle, s2 = [], c2 = 0.5 * n2 * Math.cos(o2), l2 = 0.5 * n2 * Math.sin(o2);
    for (let [e3, t3] of i2) a([e3, t3]) && s2.push([[e3[0] - c2, e3[1] + l2], [...t3]], [[e3[0] + c2, e3[1] - l2], [...t3]]);
    return { type: `fillSketch`, ops: this.renderLines(s2, t2) };
  }
}, s = class extends i {
  fillPolygons(e2, t2) {
    let n2 = this._fillPolygons(e2, t2), r2 = Object.assign({}, t2, { hachureAngle: t2.hachureAngle + 90 }), i2 = this._fillPolygons(e2, r2);
    return n2.ops = n2.ops.concat(i2.ops), n2;
  }
}, c = class {
  constructor(e2) {
    this.helper = e2;
  }
  fillPolygons(e2, t2) {
    let n2 = r(e2, t2 = Object.assign({}, t2, { hachureAngle: 0 }));
    return this.dotsOnLines(n2, t2);
  }
  dotsOnLines(e2, t2) {
    let n2 = [], r2 = t2.hachureGap;
    r2 < 0 && (r2 = 4 * t2.strokeWidth), r2 = Math.max(r2, 0.1);
    let i2 = t2.fillWeight;
    i2 < 0 && (i2 = t2.strokeWidth / 2);
    let o2 = r2 / 4;
    for (let s2 of e2) {
      let e3 = a(s2), c2 = e3 / r2, l2 = Math.ceil(c2) - 1, u2 = e3 - l2 * r2, d2 = (s2[0][0] + s2[1][0]) / 2 - r2 / 4, f2 = Math.min(s2[0][1], s2[1][1]);
      for (let e4 = 0; e4 < l2; e4++) {
        let a2 = f2 + u2 + e4 * r2, s3 = d2 - o2 + 2 * Math.random() * o2, c3 = a2 - o2 + 2 * Math.random() * o2, l3 = this.helper.ellipse(s3, c3, i2, i2, t2);
        n2.push(...l3.ops);
      }
    }
    return { type: `fillSketch`, ops: n2 };
  }
}, l = class {
  constructor(e2) {
    this.helper = e2;
  }
  fillPolygons(e2, t2) {
    let n2 = r(e2, t2);
    return { type: `fillSketch`, ops: this.dashedLine(n2, t2) };
  }
  dashedLine(e2, t2) {
    let n2 = t2.dashOffset < 0 ? t2.hachureGap < 0 ? 4 * t2.strokeWidth : t2.hachureGap : t2.dashOffset, r2 = t2.dashGap < 0 ? t2.hachureGap < 0 ? 4 * t2.strokeWidth : t2.hachureGap : t2.dashGap, i2 = [];
    return e2.forEach(((e3) => {
      let o2 = a(e3), s2 = Math.floor(o2 / (n2 + r2)), c2 = (o2 + r2 - s2 * (n2 + r2)) / 2, l2 = e3[0], u2 = e3[1];
      l2[0] > u2[0] && (l2 = e3[1], u2 = e3[0]);
      let d2 = Math.atan((u2[1] - l2[1]) / (u2[0] - l2[0]));
      for (let e4 = 0; e4 < s2; e4++) {
        let a2 = e4 * (n2 + r2), o3 = a2 + n2, s3 = [l2[0] + a2 * Math.cos(d2) + c2 * Math.cos(d2), l2[1] + a2 * Math.sin(d2) + c2 * Math.sin(d2)], u3 = [l2[0] + o3 * Math.cos(d2) + c2 * Math.cos(d2), l2[1] + o3 * Math.sin(d2) + c2 * Math.sin(d2)];
        i2.push(...this.helper.doubleLineOps(s3[0], s3[1], u3[0], u3[1], t2));
      }
    })), i2;
  }
}, u = class {
  constructor(e2) {
    this.helper = e2;
  }
  fillPolygons(e2, t2) {
    let n2 = t2.hachureGap < 0 ? 4 * t2.strokeWidth : t2.hachureGap, i2 = t2.zigzagOffset < 0 ? n2 : t2.zigzagOffset, a2 = r(e2, t2 = Object.assign({}, t2, { hachureGap: n2 + i2 }));
    return { type: `fillSketch`, ops: this.zigzagLines(a2, i2, t2) };
  }
  zigzagLines(e2, t2, n2) {
    let r2 = [];
    return e2.forEach(((e3) => {
      let i2 = a(e3), o2 = Math.round(i2 / (2 * t2)), s2 = e3[0], c2 = e3[1];
      s2[0] > c2[0] && (s2 = e3[1], c2 = e3[0]);
      let l2 = Math.atan((c2[1] - s2[1]) / (c2[0] - s2[0]));
      for (let e4 = 0; e4 < o2; e4++) {
        let i3 = 2 * e4 * t2, a2 = 2 * (e4 + 1) * t2, o3 = Math.sqrt(2 * t2 ** 2), c3 = [s2[0] + i3 * Math.cos(l2), s2[1] + i3 * Math.sin(l2)], u2 = [s2[0] + a2 * Math.cos(l2), s2[1] + a2 * Math.sin(l2)], d2 = [c3[0] + o3 * Math.cos(l2 + Math.PI / 4), c3[1] + o3 * Math.sin(l2 + Math.PI / 4)];
        r2.push(...this.helper.doubleLineOps(c3[0], c3[1], d2[0], d2[1], n2), ...this.helper.doubleLineOps(d2[0], d2[1], u2[0], u2[1], n2));
      }
    })), r2;
  }
}, d = {}, f = class {
  constructor(e2) {
    this.seed = e2;
  }
  next() {
    return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
  }
}, p = 0, m = 1, h = 2, g = { A: 7, a: 7, C: 6, c: 6, H: 1, h: 1, L: 2, l: 2, M: 2, m: 2, Q: 4, q: 4, S: 4, s: 4, T: 2, t: 2, V: 1, v: 1, Z: 0, z: 0 };
function _(e2, t2) {
  return e2.type === t2;
}
function v(e2) {
  let t2 = [], n2 = (function(e3) {
    let t3 = [];
    for (; e3 !== ``; ) if (e3.match(/^([ \t\r\n,]+)/)) e3 = e3.substr(RegExp.$1.length);
    else if (e3.match(/^([aAcChHlLmMqQsStTvVzZ])/)) t3[t3.length] = { type: p, text: RegExp.$1 }, e3 = e3.substr(RegExp.$1.length);
    else {
      if (!e3.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
      t3[t3.length] = { type: m, text: `${parseFloat(RegExp.$1)}` }, e3 = e3.substr(RegExp.$1.length);
    }
    return t3[t3.length] = { type: h, text: `` }, t3;
  })(e2), r2 = `BOD`, i2 = 0, a2 = n2[i2];
  for (; !_(a2, h); ) {
    let o2 = 0, s2 = [];
    if (r2 === `BOD`) {
      if (a2.text !== `M` && a2.text !== `m`) return v(`M0,0` + e2);
      i2++, o2 = g[a2.text], r2 = a2.text;
    } else _(a2, m) ? o2 = g[r2] : (i2++, o2 = g[a2.text], r2 = a2.text);
    if (!(i2 + o2 < n2.length)) throw Error(`Path data ended short`);
    for (let e3 = i2; e3 < i2 + o2; e3++) {
      let t3 = n2[e3];
      if (!_(t3, m)) throw Error(`Param not a number: ` + r2 + `,` + t3.text);
      s2[s2.length] = +t3.text;
    }
    if (typeof g[r2] != `number`) throw Error(`Bad segment: ` + r2);
    {
      let e3 = { key: r2, data: s2 };
      t2.push(e3), i2 += o2, a2 = n2[i2], r2 === `M` && (r2 = `L`), r2 === `m` && (r2 = `l`);
    }
  }
  return t2;
}
function y(e2) {
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
function b(e2) {
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
        e3 === 0 || n3 === 0 ? (t2.push({ key: `C`, data: [r2, i2, c3, l3, c3, l3] }), r2 = c3, i2 = l3) : (r2 !== c3 || i2 !== l3) && (S(r2, i2, c3, l3, e3, n3, a3, o3, s3).forEach((function(e4) {
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
function x(e2, t2, n2) {
  return [e2 * Math.cos(n2) - t2 * Math.sin(n2), e2 * Math.sin(n2) + t2 * Math.cos(n2)];
}
function S(e2, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
  let u2 = (d2 = o2, Math.PI * d2 / 180);
  var d2;
  let f2 = [], p2 = 0, m2 = 0, h2 = 0, g2 = 0;
  if (l2) [p2, m2, h2, g2] = l2;
  else {
    [e2, t2] = x(e2, t2, -u2), [n2, r2] = x(n2, r2, -u2);
    let o3 = (e2 - n2) / 2, l3 = (t2 - r2) / 2, d3 = o3 * o3 / (i2 * i2) + l3 * l3 / (a2 * a2);
    d3 > 1 && (d3 = Math.sqrt(d3), i2 *= d3, a2 *= d3);
    let f3 = i2 * i2, _3 = a2 * a2, v3 = f3 * _3 - f3 * l3 * l3 - _3 * o3 * o3, y3 = f3 * l3 * l3 + _3 * o3 * o3, b3 = (s2 === c2 ? -1 : 1) * Math.sqrt(Math.abs(v3 / y3));
    h2 = b3 * i2 * l3 / a2 + (e2 + n2) / 2, g2 = b3 * -a2 * o3 / i2 + (t2 + r2) / 2, p2 = Math.asin(parseFloat(((t2 - g2) / a2).toFixed(9))), m2 = Math.asin(parseFloat(((r2 - g2) / a2).toFixed(9))), e2 < h2 && (p2 = Math.PI - p2), n2 < h2 && (m2 = Math.PI - m2), p2 < 0 && (p2 = 2 * Math.PI + p2), m2 < 0 && (m2 = 2 * Math.PI + m2), c2 && p2 > m2 && (p2 -= 2 * Math.PI), !c2 && m2 > p2 && (m2 -= 2 * Math.PI);
  }
  let _2 = m2 - p2;
  if (Math.abs(_2) > 120 * Math.PI / 180) {
    let e3 = m2, t3 = n2, s3 = r2;
    m2 = c2 && m2 > p2 ? p2 + 120 * Math.PI / 180 * 1 : p2 + 120 * Math.PI / 180 * -1, f2 = S(n2 = h2 + i2 * Math.cos(m2), r2 = g2 + a2 * Math.sin(m2), t3, s3, i2, a2, o2, 0, c2, [m2, e3, h2, g2]);
  }
  _2 = m2 - p2;
  let v2 = Math.cos(p2), y2 = Math.sin(p2), b2 = Math.cos(m2), C2 = Math.sin(m2), w2 = Math.tan(_2 / 4), T2 = 4 / 3 * i2 * w2, E2 = 4 / 3 * a2 * w2, D2 = [e2, t2], O2 = [e2 + T2 * y2, t2 - E2 * v2], k2 = [n2 + T2 * C2, r2 - E2 * b2], A2 = [n2, r2];
  if (O2[0] = 2 * D2[0] - O2[0], O2[1] = 2 * D2[1] - O2[1], l2) return [O2, k2, A2].concat(f2);
  {
    f2 = [O2, k2, A2].concat(f2);
    let e3 = [];
    for (let t3 = 0; t3 < f2.length; t3 += 3) {
      let n3 = x(f2[t3][0], f2[t3][1], u2), r3 = x(f2[t3 + 1][0], f2[t3 + 1][1], u2), i3 = x(f2[t3 + 2][0], f2[t3 + 2][1], u2);
      e3.push([n3[0], n3[1], r3[0], r3[1], i3[0], i3[1]]);
    }
    return e3;
  }
}
var C = { randOffset: function(e2, t2) {
  return L(e2, t2);
}, randOffsetWithRange: function(e2, t2, n2) {
  return I(e2, t2, n2);
}, ellipse: function(e2, t2, n2, r2, i2) {
  return k(e2, t2, i2, O(n2, r2, i2)).opset;
}, doubleLineOps: function(e2, t2, n2, r2, i2) {
  return R(e2, t2, n2, r2, i2, true);
} };
function w(e2, t2, n2, r2, i2) {
  return { type: `path`, ops: R(e2, t2, n2, r2, i2) };
}
function T(e2, t2, n2) {
  let r2 = (e2 || []).length;
  if (r2 > 2) {
    let i2 = [];
    for (let t3 = 0; t3 < r2 - 1; t3++) i2.push(...R(e2[t3][0], e2[t3][1], e2[t3 + 1][0], e2[t3 + 1][1], n2));
    return t2 && i2.push(...R(e2[r2 - 1][0], e2[r2 - 1][1], e2[0][0], e2[0][1], n2)), { type: `path`, ops: i2 };
  }
  return r2 === 2 ? w(e2[0][0], e2[0][1], e2[1][0], e2[1][1], n2) : { type: `path`, ops: [] };
}
function E(e2, t2, n2, r2, i2) {
  return (function(e3, t3) {
    return T(e3, true, t3);
  })([[e2, t2], [e2 + n2, t2], [e2 + n2, t2 + r2], [e2, t2 + r2]], i2);
}
function D(e2, t2) {
  if (e2.length) {
    let n2 = typeof e2[0][0] == `number` ? [e2] : e2, r2 = B(n2[0], 1 * (1 + 0.2 * t2.roughness), t2), i2 = t2.disableMultiStroke ? [] : B(n2[0], 1.5 * (1 + 0.22 * t2.roughness), P(t2));
    for (let e3 = 1; e3 < n2.length; e3++) {
      let a2 = n2[e3];
      if (a2.length) {
        let e4 = B(a2, 1 * (1 + 0.2 * t2.roughness), t2), n3 = t2.disableMultiStroke ? [] : B(a2, 1.5 * (1 + 0.22 * t2.roughness), P(t2));
        for (let t3 of e4) t3.op !== `move` && r2.push(t3);
        for (let e5 of n3) e5.op !== `move` && i2.push(e5);
      }
    }
    return { type: `path`, ops: r2.concat(i2) };
  }
  return { type: `path`, ops: [] };
}
function O(e2, t2, n2) {
  let r2 = Math.sqrt(2 * Math.PI * Math.sqrt(((e2 / 2) ** 2 + (t2 / 2) ** 2) / 2)), i2 = Math.ceil(Math.max(n2.curveStepCount, n2.curveStepCount / Math.sqrt(200) * r2)), a2 = 2 * Math.PI / i2, o2 = Math.abs(e2 / 2), s2 = Math.abs(t2 / 2), c2 = 1 - n2.curveFitting;
  return o2 += L(o2 * c2, n2), s2 += L(s2 * c2, n2), { increment: a2, rx: o2, ry: s2 };
}
function k(e2, t2, n2, r2) {
  let [i2, a2] = H(r2.increment, e2, t2, r2.rx, r2.ry, 1, r2.increment * I(0.1, I(0.4, 1, n2), n2), n2), o2 = V(i2, null, n2);
  if (!n2.disableMultiStroke && n2.roughness !== 0) {
    let [i3] = H(r2.increment, e2, t2, r2.rx, r2.ry, 1.5, 0, n2), a3 = V(i3, null, n2);
    o2 = o2.concat(a3);
  }
  return { estimatedPoints: a2, opset: { type: `path`, ops: o2 } };
}
function A(e2, t2, n2, r2, i2, a2, o2, s2, c2) {
  let l2 = e2, u2 = t2, d2 = Math.abs(n2 / 2), f2 = Math.abs(r2 / 2);
  d2 += L(0.01 * d2, c2), f2 += L(0.01 * f2, c2);
  let p2 = i2, m2 = a2;
  for (; p2 < 0; ) p2 += 2 * Math.PI, m2 += 2 * Math.PI;
  m2 - p2 > 2 * Math.PI && (p2 = 0, m2 = 2 * Math.PI);
  let h2 = 2 * Math.PI / c2.curveStepCount, g2 = Math.min(h2 / 2, (m2 - p2) / 2), _2 = U(g2, l2, u2, d2, f2, p2, m2, 1, c2);
  if (!c2.disableMultiStroke) {
    let e3 = U(g2, l2, u2, d2, f2, p2, m2, 1.5, c2);
    _2.push(...e3);
  }
  return o2 && (s2 ? _2.push(...R(l2, u2, l2 + d2 * Math.cos(p2), u2 + f2 * Math.sin(p2), c2), ...R(l2, u2, l2 + d2 * Math.cos(m2), u2 + f2 * Math.sin(m2), c2)) : _2.push({ op: `lineTo`, data: [l2, u2] }, { op: `lineTo`, data: [l2 + d2 * Math.cos(p2), u2 + f2 * Math.sin(p2)] })), { type: `path`, ops: _2 };
}
function j(e2, t2) {
  let n2 = b(y(v(e2))), r2 = [], i2 = [0, 0], a2 = [0, 0];
  for (let { key: e3, data: o2 } of n2) switch (e3) {
    case `M`:
      a2 = [o2[0], o2[1]], i2 = [o2[0], o2[1]];
      break;
    case `L`:
      r2.push(...R(a2[0], a2[1], o2[0], o2[1], t2)), a2 = [o2[0], o2[1]];
      break;
    case `C`: {
      let [e4, n3, i3, s2, c2, l2] = o2;
      r2.push(...ee(e4, n3, i3, s2, c2, l2, a2, t2)), a2 = [c2, l2];
      break;
    }
    case `Z`:
      r2.push(...R(a2[0], a2[1], i2[0], i2[1], t2)), a2 = [i2[0], i2[1]];
  }
  return { type: `path`, ops: r2 };
}
function M(e2, t2) {
  let n2 = [];
  for (let r2 of e2) if (r2.length) {
    let e3 = t2.maxRandomnessOffset || 0, i2 = r2.length;
    if (i2 > 2) {
      n2.push({ op: `move`, data: [r2[0][0] + L(e3, t2), r2[0][1] + L(e3, t2)] });
      for (let a2 = 1; a2 < i2; a2++) n2.push({ op: `lineTo`, data: [r2[a2][0] + L(e3, t2), r2[a2][1] + L(e3, t2)] });
    }
  }
  return { type: `fillPath`, ops: n2 };
}
function N(e2, t2) {
  return (function(e3, t3) {
    let n2 = e3.fillStyle || `hachure`;
    if (!d[n2]) switch (n2) {
      case `zigzag`:
        d[n2] || (d[n2] = new o(t3));
        break;
      case `cross-hatch`:
        d[n2] || (d[n2] = new s(t3));
        break;
      case `dots`:
        d[n2] || (d[n2] = new c(t3));
        break;
      case `dashed`:
        d[n2] || (d[n2] = new l(t3));
        break;
      case `zigzag-line`:
        d[n2] || (d[n2] = new u(t3));
        break;
      default:
        n2 = `hachure`, d[n2] || (d[n2] = new i(t3));
    }
    return d[n2];
  })(t2, C).fillPolygons(e2, t2);
}
function P(e2) {
  let t2 = Object.assign({}, e2);
  return t2.randomizer = void 0, e2.seed && (t2.seed = e2.seed + 1), t2;
}
function F(e2) {
  return e2.randomizer || (e2.randomizer = new f(e2.seed || 0)), e2.randomizer.next();
}
function I(e2, t2, n2, r2 = 1) {
  return n2.roughness * r2 * (F(n2) * (t2 - e2) + e2);
}
function L(e2, t2, n2 = 1) {
  return I(-e2, e2, t2, n2);
}
function R(e2, t2, n2, r2, i2, a2 = false) {
  let o2 = a2 ? i2.disableMultiStrokeFill : i2.disableMultiStroke, s2 = z(e2, t2, n2, r2, i2, true, false);
  if (o2) return s2;
  let c2 = z(e2, t2, n2, r2, i2, true, true);
  return s2.concat(c2);
}
function z(e2, t2, n2, r2, i2, a2, o2) {
  let s2 = (e2 - n2) ** 2 + (t2 - r2) ** 2, c2 = Math.sqrt(s2), l2 = 1;
  l2 = c2 < 200 ? 1 : c2 > 500 ? 0.4 : -16668e-7 * c2 + 1.233334;
  let u2 = i2.maxRandomnessOffset || 0;
  u2 * u2 * 100 > s2 && (u2 = c2 / 10);
  let d2 = u2 / 2, f2 = 0.2 + 0.2 * F(i2), p2 = i2.bowing * i2.maxRandomnessOffset * (r2 - t2) / 200, m2 = i2.bowing * i2.maxRandomnessOffset * (e2 - n2) / 200;
  p2 = L(p2, i2, l2), m2 = L(m2, i2, l2);
  let h2 = [], g2 = () => L(d2, i2, l2), _2 = () => L(u2, i2, l2), v2 = i2.preserveVertices;
  return a2 && (o2 ? h2.push({ op: `move`, data: [e2 + (v2 ? 0 : g2()), t2 + (v2 ? 0 : g2())] }) : h2.push({ op: `move`, data: [e2 + (v2 ? 0 : L(u2, i2, l2)), t2 + (v2 ? 0 : L(u2, i2, l2))] })), o2 ? h2.push({ op: `bcurveTo`, data: [p2 + e2 + (n2 - e2) * f2 + g2(), m2 + t2 + (r2 - t2) * f2 + g2(), p2 + e2 + 2 * (n2 - e2) * f2 + g2(), m2 + t2 + 2 * (r2 - t2) * f2 + g2(), n2 + (v2 ? 0 : g2()), r2 + (v2 ? 0 : g2())] }) : h2.push({ op: `bcurveTo`, data: [p2 + e2 + (n2 - e2) * f2 + _2(), m2 + t2 + (r2 - t2) * f2 + _2(), p2 + e2 + 2 * (n2 - e2) * f2 + _2(), m2 + t2 + 2 * (r2 - t2) * f2 + _2(), n2 + (v2 ? 0 : _2()), r2 + (v2 ? 0 : _2())] }), h2;
}
function B(e2, t2, n2) {
  if (!e2.length) return [];
  let r2 = [];
  r2.push([e2[0][0] + L(t2, n2), e2[0][1] + L(t2, n2)]), r2.push([e2[0][0] + L(t2, n2), e2[0][1] + L(t2, n2)]);
  for (let i2 = 1; i2 < e2.length; i2++) r2.push([e2[i2][0] + L(t2, n2), e2[i2][1] + L(t2, n2)]), i2 === e2.length - 1 && r2.push([e2[i2][0] + L(t2, n2), e2[i2][1] + L(t2, n2)]);
  return V(r2, null, n2);
}
function V(e2, t2, n2) {
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
      i2.push({ op: `lineTo`, data: [t2[0] + L(e3, n2), t2[1] + L(e3, n2)] });
    }
  } else r2 === 3 ? (i2.push({ op: `move`, data: [e2[1][0], e2[1][1]] }), i2.push({ op: `bcurveTo`, data: [e2[1][0], e2[1][1], e2[2][0], e2[2][1], e2[2][0], e2[2][1]] })) : r2 === 2 && i2.push(...z(e2[0][0], e2[0][1], e2[1][0], e2[1][1], n2, true, true));
  return i2;
}
function H(e2, t2, n2, r2, i2, a2, o2, s2) {
  let c2 = [], l2 = [];
  if (s2.roughness === 0) {
    e2 /= 4, l2.push([t2 + r2 * Math.cos(-e2), n2 + i2 * Math.sin(-e2)]);
    for (let a3 = 0; a3 <= 2 * Math.PI; a3 += e2) {
      let e3 = [t2 + r2 * Math.cos(a3), n2 + i2 * Math.sin(a3)];
      c2.push(e3), l2.push(e3);
    }
    l2.push([t2 + r2 * Math.cos(0), n2 + i2 * Math.sin(0)]), l2.push([t2 + r2 * Math.cos(e2), n2 + i2 * Math.sin(e2)]);
  } else {
    let u2 = L(0.5, s2) - Math.PI / 2;
    l2.push([L(a2, s2) + t2 + 0.9 * r2 * Math.cos(u2 - e2), L(a2, s2) + n2 + 0.9 * i2 * Math.sin(u2 - e2)]);
    let d2 = 2 * Math.PI + u2 - 0.01;
    for (let o3 = u2; o3 < d2; o3 += e2) {
      let e3 = [L(a2, s2) + t2 + r2 * Math.cos(o3), L(a2, s2) + n2 + i2 * Math.sin(o3)];
      c2.push(e3), l2.push(e3);
    }
    l2.push([L(a2, s2) + t2 + r2 * Math.cos(u2 + 2 * Math.PI + 0.5 * o2), L(a2, s2) + n2 + i2 * Math.sin(u2 + 2 * Math.PI + 0.5 * o2)]), l2.push([L(a2, s2) + t2 + 0.98 * r2 * Math.cos(u2 + o2), L(a2, s2) + n2 + 0.98 * i2 * Math.sin(u2 + o2)]), l2.push([L(a2, s2) + t2 + 0.9 * r2 * Math.cos(u2 + 0.5 * o2), L(a2, s2) + n2 + 0.9 * i2 * Math.sin(u2 + 0.5 * o2)]);
  }
  return [l2, c2];
}
function U(e2, t2, n2, r2, i2, a2, o2, s2, c2) {
  let l2 = a2 + L(0.1, c2), u2 = [];
  u2.push([L(s2, c2) + t2 + 0.9 * r2 * Math.cos(l2 - e2), L(s2, c2) + n2 + 0.9 * i2 * Math.sin(l2 - e2)]);
  for (let a3 = l2; a3 <= o2; a3 += e2) u2.push([L(s2, c2) + t2 + r2 * Math.cos(a3), L(s2, c2) + n2 + i2 * Math.sin(a3)]);
  return u2.push([t2 + r2 * Math.cos(o2), n2 + i2 * Math.sin(o2)]), u2.push([t2 + r2 * Math.cos(o2), n2 + i2 * Math.sin(o2)]), V(u2, null, c2);
}
function ee(e2, t2, n2, r2, i2, a2, o2, s2) {
  let c2 = [], l2 = [s2.maxRandomnessOffset || 1, (s2.maxRandomnessOffset || 1) + 0.3], u2 = [0, 0], d2 = s2.disableMultiStroke ? 1 : 2, f2 = s2.preserveVertices;
  for (let p2 = 0; p2 < d2; p2++) p2 === 0 ? c2.push({ op: `move`, data: [o2[0], o2[1]] }) : c2.push({ op: `move`, data: [o2[0] + (f2 ? 0 : L(l2[0], s2)), o2[1] + (f2 ? 0 : L(l2[0], s2))] }), u2 = f2 ? [i2, a2] : [i2 + L(l2[p2], s2), a2 + L(l2[p2], s2)], c2.push({ op: `bcurveTo`, data: [e2 + L(l2[p2], s2), t2 + L(l2[p2], s2), n2 + L(l2[p2], s2), r2 + L(l2[p2], s2), u2[0], u2[1]] });
  return c2;
}
function W(e2) {
  return [...e2];
}
function G(e2, t2 = 0) {
  let n2 = e2.length;
  if (n2 < 3) throw Error(`A curve must have at least three points.`);
  let r2 = [];
  if (n2 === 3) r2.push(W(e2[0]), W(e2[1]), W(e2[2]), W(e2[2]));
  else {
    let n3 = [];
    n3.push(e2[0], e2[0]);
    for (let t3 = 1; t3 < e2.length; t3++) n3.push(e2[t3]), t3 === e2.length - 1 && n3.push(e2[t3]);
    let i2 = [], a2 = 1 - t2;
    r2.push(W(n3[0]));
    for (let e3 = 1; e3 + 2 < n3.length; e3++) {
      let t3 = n3[e3];
      i2[0] = [t3[0], t3[1]], i2[1] = [t3[0] + (a2 * n3[e3 + 1][0] - a2 * n3[e3 - 1][0]) / 6, t3[1] + (a2 * n3[e3 + 1][1] - a2 * n3[e3 - 1][1]) / 6], i2[2] = [n3[e3 + 1][0] + (a2 * n3[e3][0] - a2 * n3[e3 + 2][0]) / 6, n3[e3 + 1][1] + (a2 * n3[e3][1] - a2 * n3[e3 + 2][1]) / 6], i2[3] = [n3[e3 + 1][0], n3[e3 + 1][1]], r2.push(i2[1], i2[2], i2[3]);
    }
  }
  return r2;
}
function K(e2, t2) {
  return (e2[0] - t2[0]) ** 2 + (e2[1] - t2[1]) ** 2;
}
function te(e2, t2, n2) {
  let r2 = K(t2, n2);
  if (r2 === 0) return K(e2, t2);
  let i2 = ((e2[0] - t2[0]) * (n2[0] - t2[0]) + (e2[1] - t2[1]) * (n2[1] - t2[1])) / r2;
  return i2 = Math.max(0, Math.min(1, i2)), K(e2, q(t2, n2, i2));
}
function q(e2, t2, n2) {
  return [e2[0] + (t2[0] - e2[0]) * n2, e2[1] + (t2[1] - e2[1]) * n2];
}
function J(e2, t2, n2, r2) {
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
    i2.length ? (a2 = i2[i2.length - 1], o2 = n3, Math.sqrt(K(a2, o2))) > 1 && i2.push(n3) : i2.push(n3), i2.push(e2[t2 + 3]);
  } else {
    let r3 = 0.5, a3 = e2[t2 + 0], o3 = e2[t2 + 1], s2 = e2[t2 + 2], c2 = e2[t2 + 3], l2 = q(a3, o3, r3), u2 = q(o3, s2, r3), d2 = q(s2, c2, r3), f2 = q(l2, u2, r3), p2 = q(u2, d2, r3), m2 = q(f2, p2, r3);
    J([a3, l2, f2, m2], 0, n2, i2), J([m2, p2, d2, c2], 0, n2, i2);
  }
  var a2, o2;
  return i2;
}
function ne(e2, t2) {
  return Y(e2, 0, e2.length, t2);
}
function Y(e2, t2, n2, r2, i2) {
  let a2 = i2 || [], o2 = e2[t2], s2 = e2[n2 - 1], c2 = 0, l2 = 1;
  for (let r3 = t2 + 1; r3 < n2 - 1; ++r3) {
    let t3 = te(e2[r3], o2, s2);
    t3 > c2 && (c2 = t3, l2 = r3);
  }
  return Math.sqrt(c2) > r2 ? (Y(e2, t2, l2 + 1, r2, a2), Y(e2, l2, n2, r2, a2)) : (a2.length || a2.push(o2), a2.push(s2)), a2;
}
function X(e2, t2 = 0.15, n2) {
  let r2 = [], i2 = (e2.length - 1) / 3;
  for (let n3 = 0; n3 < i2; n3++) J(e2, 3 * n3, t2, r2);
  return n2 && n2 > 0 ? Y(r2, 0, r2.length, n2) : r2;
}
var Z = `none`, Q = class {
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
    return this._d(`line`, [w(e2, t2, n2, r2, a2)], a2);
  }
  rectangle(e2, t2, n2, r2, i2) {
    let a2 = this._o(i2), o2 = [], s2 = E(e2, t2, n2, r2, a2);
    if (a2.fill) {
      let i3 = [[e2, t2], [e2 + n2, t2], [e2 + n2, t2 + r2], [e2, t2 + r2]];
      a2.fillStyle === `solid` ? o2.push(M([i3], a2)) : o2.push(N([i3], a2));
    }
    return a2.stroke !== Z && o2.push(s2), this._d(`rectangle`, o2, a2);
  }
  ellipse(e2, t2, n2, r2, i2) {
    let a2 = this._o(i2), o2 = [], s2 = O(n2, r2, a2), c2 = k(e2, t2, a2, s2);
    if (a2.fill) if (a2.fillStyle === `solid`) {
      let n3 = k(e2, t2, a2, s2).opset;
      n3.type = `fillPath`, o2.push(n3);
    } else o2.push(N([c2.estimatedPoints], a2));
    return a2.stroke !== Z && o2.push(c2.opset), this._d(`ellipse`, o2, a2);
  }
  circle(e2, t2, n2, r2) {
    let i2 = this.ellipse(e2, t2, n2, n2, r2);
    return i2.shape = `circle`, i2;
  }
  linearPath(e2, t2) {
    let n2 = this._o(t2);
    return this._d(`linearPath`, [T(e2, false, n2)], n2);
  }
  arc(e2, t2, n2, r2, i2, a2, o2 = false, s2) {
    let c2 = this._o(s2), l2 = [], u2 = A(e2, t2, n2, r2, i2, a2, o2, true, c2);
    if (o2 && c2.fill) if (c2.fillStyle === `solid`) {
      let o3 = Object.assign({}, c2);
      o3.disableMultiStroke = true;
      let s3 = A(e2, t2, n2, r2, i2, a2, true, false, o3);
      s3.type = `fillPath`, l2.push(s3);
    } else l2.push((function(e3, t3, n3, r3, i3, a3, o3) {
      let s3 = e3, c3 = t3, l3 = Math.abs(n3 / 2), u3 = Math.abs(r3 / 2);
      l3 += L(0.01 * l3, o3), u3 += L(0.01 * u3, o3);
      let d2 = i3, f2 = a3;
      for (; d2 < 0; ) d2 += 2 * Math.PI, f2 += 2 * Math.PI;
      f2 - d2 > 2 * Math.PI && (d2 = 0, f2 = 2 * Math.PI);
      let p2 = (f2 - d2) / o3.curveStepCount, m2 = [];
      for (let e4 = d2; e4 <= f2; e4 += p2) m2.push([s3 + l3 * Math.cos(e4), c3 + u3 * Math.sin(e4)]);
      return m2.push([s3 + l3 * Math.cos(f2), c3 + u3 * Math.sin(f2)]), m2.push([s3, c3]), N([m2], o3);
    })(e2, t2, n2, r2, i2, a2, c2));
    return c2.stroke !== Z && l2.push(u2), this._d(`arc`, l2, c2);
  }
  curve(e2, t2) {
    let n2 = this._o(t2), r2 = [], i2 = D(e2, n2);
    if (n2.fill && n2.fill !== Z) if (n2.fillStyle === `solid`) {
      let t3 = D(e2, Object.assign(Object.assign({}, n2), { disableMultiStroke: true, roughness: n2.roughness ? n2.roughness + n2.fillShapeRoughnessGain : 0 }));
      r2.push({ type: `fillPath`, ops: this._mergedShape(t3.ops) });
    } else {
      let t3 = [], i3 = e2;
      if (i3.length) {
        let e3 = typeof i3[0][0] == `number` ? [i3] : i3;
        for (let r3 of e3) r3.length < 3 ? t3.push(...r3) : r3.length === 3 ? t3.push(...X(G([r3[0], r3[0], r3[1], r3[2]]), 10, (1 + n2.roughness) / 2)) : t3.push(...X(G(r3), 10, (1 + n2.roughness) / 2));
      }
      t3.length && r2.push(N([t3], n2));
    }
    return n2.stroke !== Z && r2.push(i2), this._d(`curve`, r2, n2);
  }
  polygon(e2, t2) {
    let n2 = this._o(t2), r2 = [], i2 = T(e2, true, n2);
    return n2.fill && (n2.fillStyle === `solid` ? r2.push(M([e2], n2)) : r2.push(N([e2], n2))), n2.stroke !== Z && r2.push(i2), this._d(`polygon`, r2, n2);
  }
  path(e2, t2) {
    let n2 = this._o(t2), r2 = [];
    if (!e2) return this._d(`path`, r2, n2);
    e2 = (e2 || ``).replace(/\n/g, ` `).replace(/(-\s)/g, `-`).replace(`/(ss)/g`, ` `);
    let i2 = n2.fill && n2.fill !== `transparent` && n2.fill !== Z, a2 = n2.stroke !== Z, o2 = !!(n2.simplification && n2.simplification < 1), s2 = (function(e3, t3, n3) {
      let r3 = b(y(v(e3))), i3 = [], a3 = [], o3 = [0, 0], s3 = [], c3 = () => {
        s3.length >= 4 && a3.push(...X(s3, t3)), s3 = [];
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
        let t4 = ne(e4, n3);
        t4.length && u2.push(t4);
      }
      return u2;
    })(e2, 1, o2 ? 4 - 4 * (n2.simplification || 1) : (1 + n2.roughness) / 2), c2 = j(e2, n2);
    if (i2) if (n2.fillStyle === `solid`) if (s2.length === 1) {
      let t3 = j(e2, Object.assign(Object.assign({}, n2), { disableMultiStroke: true, roughness: n2.roughness ? n2.roughness + n2.fillShapeRoughnessGain : 0 }));
      r2.push({ type: `fillPath`, ops: this._mergedShape(t3.ops) });
    } else r2.push(M(s2, n2));
    else r2.push(N(s2, n2));
    return a2 && (o2 ? s2.forEach(((e3) => {
      r2.push(T(e3, false, n2));
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
          t3 = { d: this.opsToPath(e3), stroke: n2.stroke, strokeWidth: n2.strokeWidth, fill: Z };
          break;
        case `fillPath`:
          t3 = { d: this.opsToPath(e3), stroke: Z, strokeWidth: 0, fill: n2.fill || Z };
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
    return n2 < 0 && (n2 = t2.strokeWidth / 2), { d: this.opsToPath(e2), stroke: t2.fill || Z, strokeWidth: n2, fill: Z };
  }
  _mergedShape(e2) {
    return e2.filter(((e3, t2) => t2 === 0 || e3.op !== `move`));
  }
}, re = class {
  constructor(e2, t2) {
    this.canvas = e2, this.ctx = this.canvas.getContext(`2d`), this.gen = new Q(t2);
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
}, $ = `http://www.w3.org/2000/svg`, ie = class {
  constructor(e2, t2) {
    this.svg = e2, this.gen = new Q(t2);
  }
  draw(e2) {
    let t2 = e2.sets || [], n2 = e2.options || this.getDefaultOptions(), r2 = this.svg.ownerDocument || window.document, i2 = r2.createElementNS($, `g`), a2 = e2.options.fixedDecimalPlaceDigits;
    for (let o2 of t2) {
      let t3 = null;
      switch (o2.type) {
        case `path`:
          t3 = r2.createElementNS($, `path`), t3.setAttribute(`d`, this.opsToPath(o2, a2)), t3.setAttribute(`stroke`, n2.stroke), t3.setAttribute(`stroke-width`, n2.strokeWidth + ``), t3.setAttribute(`fill`, `none`), n2.strokeLineDash && t3.setAttribute(`stroke-dasharray`, n2.strokeLineDash.join(` `).trim()), n2.strokeLineDashOffset && t3.setAttribute(`stroke-dashoffset`, `${n2.strokeLineDashOffset}`);
          break;
        case `fillPath`:
          t3 = r2.createElementNS($, `path`), t3.setAttribute(`d`, this.opsToPath(o2, a2)), t3.setAttribute(`stroke`, `none`), t3.setAttribute(`stroke-width`, `0`), t3.setAttribute(`fill`, n2.fill || ``), e2.shape !== `curve` && e2.shape !== `polygon` || t3.setAttribute(`fill-rule`, `evenodd`);
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
    let i2 = e2.createElementNS($, `path`);
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
}, ae = { canvas: (e2, t2) => new re(e2, t2), svg: (e2, t2) => new ie(e2, t2), generator: (e2) => new Q(e2), newSeed: () => Q.newSeed() };
export {
  ae as t
};
