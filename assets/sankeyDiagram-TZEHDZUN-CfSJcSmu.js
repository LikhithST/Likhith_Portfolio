var _a, _b, _c;
import { B as e, C as t, G as n, U as r, _ as i, a, b as o, s, u as c, v as l, z as u } from "./chunk-ABZYJK2D-ODb6qSou.js";
import { h as d, p as f } from "./src-D8UWkQNo.js";
import { t as p } from "./ordinal-Bps6pt-l.js";
import "./init-BBmXJqXp.js";
function m(e2) {
  for (var t2 = e2.length / 6 | 0, n2 = Array(t2), r2 = 0; r2 < t2; ) n2[r2] = `#` + e2.slice(r2 * 6, ++r2 * 6);
  return n2;
}
var h = m(`4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab`);
function g(e2, t2) {
  let n2;
  if (t2 === void 0) for (let t3 of e2) t3 != null && (n2 < t3 || n2 === void 0 && t3 >= t3) && (n2 = t3);
  else {
    let r2 = -1;
    for (let i2 of e2) (i2 = t2(i2, ++r2, e2)) != null && (n2 < i2 || n2 === void 0 && i2 >= i2) && (n2 = i2);
  }
  return n2;
}
function _(e2, t2) {
  let n2;
  if (t2 === void 0) for (let t3 of e2) t3 != null && (n2 > t3 || n2 === void 0 && t3 >= t3) && (n2 = t3);
  else {
    let r2 = -1;
    for (let i2 of e2) (i2 = t2(i2, ++r2, e2)) != null && (n2 > i2 || n2 === void 0 && i2 >= i2) && (n2 = i2);
  }
  return n2;
}
function v(e2, t2) {
  let n2 = 0;
  if (t2 === void 0) for (let t3 of e2) (t3 = +t3) && (n2 += t3);
  else {
    let r2 = -1;
    for (let i2 of e2) (i2 = +t2(i2, ++r2, e2)) && (n2 += i2);
  }
  return n2;
}
function y(e2) {
  return e2.target.depth;
}
function b(e2) {
  return e2.depth;
}
function x(e2, t2) {
  return t2 - 1 - e2.height;
}
function S(e2, t2) {
  return e2.sourceLinks.length ? e2.depth : t2 - 1;
}
function C(e2) {
  return e2.targetLinks.length ? e2.depth : e2.sourceLinks.length ? _(e2.sourceLinks, y) - 1 : 0;
}
function w(e2) {
  return function() {
    return e2;
  };
}
function T(e2, t2) {
  return D(e2.source, t2.source) || e2.index - t2.index;
}
function E(e2, t2) {
  return D(e2.target, t2.target) || e2.index - t2.index;
}
function D(e2, t2) {
  return e2.y0 - t2.y0;
}
function O(e2) {
  return e2.value;
}
function k(e2) {
  return e2.index;
}
function A(e2) {
  return e2.nodes;
}
function j(e2) {
  return e2.links;
}
function M(e2, t2) {
  let n2 = e2.get(t2);
  if (!n2) throw Error(`missing: ` + t2);
  return n2;
}
function N({ nodes: e2 }) {
  for (let t2 of e2) {
    let e3 = t2.y0, n2 = e3;
    for (let n3 of t2.sourceLinks) n3.y0 = e3 + n3.width / 2, e3 += n3.width;
    for (let e4 of t2.targetLinks) e4.y1 = n2 + e4.width / 2, n2 += e4.width;
  }
}
function P() {
  let e2 = 0, t2 = 0, n2 = 1, r2 = 1, i2 = 24, a2 = 8, o2, s2 = k, c2 = S, l2, u2, d2 = A, f2 = j, p2 = 6;
  function m2() {
    let e3 = { nodes: d2.apply(null, arguments), links: f2.apply(null, arguments) };
    return h2(e3), y2(e3), b2(e3), x2(e3), F2(e3), N(e3), e3;
  }
  m2.update = function(e3) {
    return N(e3), e3;
  }, m2.nodeId = function(e3) {
    return arguments.length ? (s2 = typeof e3 == `function` ? e3 : w(e3), m2) : s2;
  }, m2.nodeAlign = function(e3) {
    return arguments.length ? (c2 = typeof e3 == `function` ? e3 : w(e3), m2) : c2;
  }, m2.nodeSort = function(e3) {
    return arguments.length ? (l2 = e3, m2) : l2;
  }, m2.nodeWidth = function(e3) {
    return arguments.length ? (i2 = +e3, m2) : i2;
  }, m2.nodePadding = function(e3) {
    return arguments.length ? (a2 = o2 = +e3, m2) : a2;
  }, m2.nodes = function(e3) {
    return arguments.length ? (d2 = typeof e3 == `function` ? e3 : w(e3), m2) : d2;
  }, m2.links = function(e3) {
    return arguments.length ? (f2 = typeof e3 == `function` ? e3 : w(e3), m2) : f2;
  }, m2.linkSort = function(e3) {
    return arguments.length ? (u2 = e3, m2) : u2;
  }, m2.size = function(i3) {
    return arguments.length ? (e2 = t2 = 0, n2 = +i3[0], r2 = +i3[1], m2) : [n2 - e2, r2 - t2];
  }, m2.extent = function(i3) {
    return arguments.length ? (e2 = +i3[0][0], n2 = +i3[1][0], t2 = +i3[0][1], r2 = +i3[1][1], m2) : [[e2, t2], [n2, r2]];
  }, m2.iterations = function(e3) {
    return arguments.length ? (p2 = +e3, m2) : p2;
  };
  function h2({ nodes: e3, links: t3 }) {
    for (let [t4, n4] of e3.entries()) n4.index = t4, n4.sourceLinks = [], n4.targetLinks = [];
    let n3 = new Map(e3.map((t4, n4) => [s2(t4, n4, e3), t4]));
    for (let [e4, r3] of t3.entries()) {
      r3.index = e4;
      let { source: t4, target: i3 } = r3;
      typeof t4 != `object` && (t4 = r3.source = M(n3, t4)), typeof i3 != `object` && (i3 = r3.target = M(n3, i3)), t4.sourceLinks.push(r3), i3.targetLinks.push(r3);
    }
    if (u2 != null) for (let { sourceLinks: t4, targetLinks: n4 } of e3) t4.sort(u2), n4.sort(u2);
  }
  function y2({ nodes: e3 }) {
    for (let t3 of e3) t3.value = t3.fixedValue === void 0 ? Math.max(v(t3.sourceLinks, O), v(t3.targetLinks, O)) : t3.fixedValue;
  }
  function b2({ nodes: e3 }) {
    let t3 = e3.length, n3 = new Set(e3), r3 = /* @__PURE__ */ new Set(), i3 = 0;
    for (; n3.size; ) {
      for (let e4 of n3) {
        e4.depth = i3;
        for (let { target: t4 } of e4.sourceLinks) r3.add(t4);
      }
      if (++i3 > t3) throw Error(`circular link`);
      n3 = r3, r3 = /* @__PURE__ */ new Set();
    }
  }
  function x2({ nodes: e3 }) {
    let t3 = e3.length, n3 = new Set(e3), r3 = /* @__PURE__ */ new Set(), i3 = 0;
    for (; n3.size; ) {
      for (let e4 of n3) {
        e4.height = i3;
        for (let { source: t4 } of e4.targetLinks) r3.add(t4);
      }
      if (++i3 > t3) throw Error(`circular link`);
      n3 = r3, r3 = /* @__PURE__ */ new Set();
    }
  }
  function C2({ nodes: t3 }) {
    let r3 = g(t3, (e3) => e3.depth) + 1, a3 = (n2 - e2 - i2) / (r3 - 1), o3 = Array(r3);
    for (let n3 of t3) {
      let t4 = Math.max(0, Math.min(r3 - 1, Math.floor(c2.call(null, n3, r3))));
      n3.layer = t4, n3.x0 = e2 + t4 * a3, n3.x1 = n3.x0 + i2, o3[t4] ? o3[t4].push(n3) : o3[t4] = [n3];
    }
    if (l2) for (let e3 of o3) e3.sort(l2);
    return o3;
  }
  function P2(e3) {
    let n3 = _(e3, (e4) => (r2 - t2 - (e4.length - 1) * o2) / v(e4, O));
    for (let i3 of e3) {
      let e4 = t2;
      for (let t3 of i3) {
        t3.y0 = e4, t3.y1 = e4 + t3.value * n3, e4 = t3.y1 + o2;
        for (let e5 of t3.sourceLinks) e5.width = e5.value * n3;
      }
      e4 = (r2 - e4 + o2) / (i3.length + 1);
      for (let t3 = 0; t3 < i3.length; ++t3) {
        let n4 = i3[t3];
        n4.y0 += e4 * (t3 + 1), n4.y1 += e4 * (t3 + 1);
      }
      H2(i3);
    }
  }
  function F2(e3) {
    let n3 = C2(e3);
    o2 = Math.min(a2, (r2 - t2) / (g(n3, (e4) => e4.length) - 1)), P2(n3);
    for (let e4 = 0; e4 < p2; ++e4) {
      let t3 = 0.99 ** e4, r3 = Math.max(1 - t3, (e4 + 1) / p2);
      L2(n3, t3, r3), I2(n3, t3, r3);
    }
  }
  function I2(e3, t3, n3) {
    for (let r3 = 1, i3 = e3.length; r3 < i3; ++r3) {
      let i4 = e3[r3];
      for (let e4 of i4) {
        let n4 = 0, r4 = 0;
        for (let { source: t4, value: i6 } of e4.targetLinks) {
          let a3 = i6 * (e4.layer - t4.layer);
          n4 += U2(t4, e4) * a3, r4 += a3;
        }
        if (!(r4 > 0)) continue;
        let i5 = (n4 / r4 - e4.y0) * t3;
        e4.y0 += i5, e4.y1 += i5, V2(e4);
      }
      l2 === void 0 && i4.sort(D), R2(i4, n3);
    }
  }
  function L2(e3, t3, n3) {
    for (let r3 = e3.length - 2; r3 >= 0; --r3) {
      let i3 = e3[r3];
      for (let e4 of i3) {
        let n4 = 0, r4 = 0;
        for (let { target: t4, value: i5 } of e4.sourceLinks) {
          let a3 = i5 * (t4.layer - e4.layer);
          n4 += W2(e4, t4) * a3, r4 += a3;
        }
        if (!(r4 > 0)) continue;
        let i4 = (n4 / r4 - e4.y0) * t3;
        e4.y0 += i4, e4.y1 += i4, V2(e4);
      }
      l2 === void 0 && i3.sort(D), R2(i3, n3);
    }
  }
  function R2(e3, n3) {
    let i3 = e3.length >> 1, a3 = e3[i3];
    B2(e3, a3.y0 - o2, i3 - 1, n3), z2(e3, a3.y1 + o2, i3 + 1, n3), B2(e3, r2, e3.length - 1, n3), z2(e3, t2, 0, n3);
  }
  function z2(e3, t3, n3, r3) {
    for (; n3 < e3.length; ++n3) {
      let i3 = e3[n3], a3 = (t3 - i3.y0) * r3;
      a3 > 1e-6 && (i3.y0 += a3, i3.y1 += a3), t3 = i3.y1 + o2;
    }
  }
  function B2(e3, t3, n3, r3) {
    for (; n3 >= 0; --n3) {
      let i3 = e3[n3], a3 = (i3.y1 - t3) * r3;
      a3 > 1e-6 && (i3.y0 -= a3, i3.y1 -= a3), t3 = i3.y0 - o2;
    }
  }
  function V2({ sourceLinks: e3, targetLinks: t3 }) {
    if (u2 === void 0) {
      for (let { source: { sourceLinks: e4 } } of t3) e4.sort(E);
      for (let { target: { targetLinks: t4 } } of e3) t4.sort(T);
    }
  }
  function H2(e3) {
    if (u2 === void 0) for (let { sourceLinks: t3, targetLinks: n3 } of e3) t3.sort(E), n3.sort(T);
  }
  function U2(e3, t3) {
    let n3 = e3.y0 - (e3.sourceLinks.length - 1) * o2 / 2;
    for (let { target: r3, width: i3 } of e3.sourceLinks) {
      if (r3 === t3) break;
      n3 += i3 + o2;
    }
    for (let { source: r3, width: i3 } of t3.targetLinks) {
      if (r3 === e3) break;
      n3 -= i3;
    }
    return n3;
  }
  function W2(e3, t3) {
    let n3 = t3.y0 - (t3.targetLinks.length - 1) * o2 / 2;
    for (let { source: r3, width: i3 } of t3.targetLinks) {
      if (r3 === e3) break;
      n3 += i3 + o2;
    }
    for (let { target: r3, width: i3 } of e3.sourceLinks) {
      if (r3 === t3) break;
      n3 -= i3;
    }
    return n3;
  }
  return m2;
}
var F = Math.PI, I = 2 * F, L = 1e-6, R = I - L;
function z() {
  this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ``;
}
function B() {
  return new z();
}
z.prototype = B.prototype = { constructor: z, moveTo: function(e2, t2) {
  this._ += `M` + (this._x0 = this._x1 = +e2) + `,` + (this._y0 = this._y1 = +t2);
}, closePath: function() {
  this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += `Z`);
}, lineTo: function(e2, t2) {
  this._ += `L` + (this._x1 = +e2) + `,` + (this._y1 = +t2);
}, quadraticCurveTo: function(e2, t2, n2, r2) {
  this._ += `Q` + +e2 + `,` + +t2 + `,` + (this._x1 = +n2) + `,` + (this._y1 = +r2);
}, bezierCurveTo: function(e2, t2, n2, r2, i2, a2) {
  this._ += `C` + +e2 + `,` + +t2 + `,` + +n2 + `,` + +r2 + `,` + (this._x1 = +i2) + `,` + (this._y1 = +a2);
}, arcTo: function(e2, t2, n2, r2, i2) {
  e2 = +e2, t2 = +t2, n2 = +n2, r2 = +r2, i2 = +i2;
  var a2 = this._x1, o2 = this._y1, s2 = n2 - e2, c2 = r2 - t2, l2 = a2 - e2, u2 = o2 - t2, d2 = l2 * l2 + u2 * u2;
  if (i2 < 0) throw Error(`negative radius: ` + i2);
  if (this._x1 === null) this._ += `M` + (this._x1 = e2) + `,` + (this._y1 = t2);
  else if (d2 > L) if (!(Math.abs(u2 * s2 - c2 * l2) > L) || !i2) this._ += `L` + (this._x1 = e2) + `,` + (this._y1 = t2);
  else {
    var f2 = n2 - a2, p2 = r2 - o2, m2 = s2 * s2 + c2 * c2, h2 = f2 * f2 + p2 * p2, g2 = Math.sqrt(m2), _2 = Math.sqrt(d2), v2 = i2 * Math.tan((F - Math.acos((m2 + d2 - h2) / (2 * g2 * _2))) / 2), y2 = v2 / _2, b2 = v2 / g2;
    Math.abs(y2 - 1) > L && (this._ += `L` + (e2 + y2 * l2) + `,` + (t2 + y2 * u2)), this._ += `A` + i2 + `,` + i2 + `,0,0,` + +(u2 * f2 > l2 * p2) + `,` + (this._x1 = e2 + b2 * s2) + `,` + (this._y1 = t2 + b2 * c2);
  }
}, arc: function(e2, t2, n2, r2, i2, a2) {
  e2 = +e2, t2 = +t2, n2 = +n2, a2 = !!a2;
  var o2 = n2 * Math.cos(r2), s2 = n2 * Math.sin(r2), c2 = e2 + o2, l2 = t2 + s2, u2 = 1 ^ a2, d2 = a2 ? r2 - i2 : i2 - r2;
  if (n2 < 0) throw Error(`negative radius: ` + n2);
  this._x1 === null ? this._ += `M` + c2 + `,` + l2 : (Math.abs(this._x1 - c2) > L || Math.abs(this._y1 - l2) > L) && (this._ += `L` + c2 + `,` + l2), n2 && (d2 < 0 && (d2 = d2 % I + I), d2 > R ? this._ += `A` + n2 + `,` + n2 + `,0,1,` + u2 + `,` + (e2 - o2) + `,` + (t2 - s2) + `A` + n2 + `,` + n2 + `,0,1,` + u2 + `,` + (this._x1 = c2) + `,` + (this._y1 = l2) : d2 > L && (this._ += `A` + n2 + `,` + n2 + `,0,` + +(d2 >= F) + `,` + u2 + `,` + (this._x1 = e2 + n2 * Math.cos(i2)) + `,` + (this._y1 = t2 + n2 * Math.sin(i2))));
}, rect: function(e2, t2, n2, r2) {
  this._ += `M` + (this._x0 = this._x1 = +e2) + `,` + (this._y0 = this._y1 = +t2) + `h` + +n2 + `v` + +r2 + `h` + -n2 + `Z`;
}, toString: function() {
  return this._;
} };
var V = B;
function H(e2) {
  return function() {
    return e2;
  };
}
function U(e2) {
  return e2[0];
}
function W(e2) {
  return e2[1];
}
var ee = Array.prototype.slice;
function te(e2) {
  return e2.source;
}
function ne(e2) {
  return e2.target;
}
function re(e2) {
  var t2 = te, n2 = ne, r2 = U, i2 = W, a2 = null;
  function o2() {
    var o3, s2 = ee.call(arguments), c2 = t2.apply(this, s2), l2 = n2.apply(this, s2);
    if (a2 || (a2 = o3 = V()), e2(a2, +r2.apply(this, (s2[0] = c2, s2)), +i2.apply(this, s2), +r2.apply(this, (s2[0] = l2, s2)), +i2.apply(this, s2)), o3) return a2 = null, o3 + `` || null;
  }
  return o2.source = function(e3) {
    return arguments.length ? (t2 = e3, o2) : t2;
  }, o2.target = function(e3) {
    return arguments.length ? (n2 = e3, o2) : n2;
  }, o2.x = function(e3) {
    return arguments.length ? (r2 = typeof e3 == `function` ? e3 : H(+e3), o2) : r2;
  }, o2.y = function(e3) {
    return arguments.length ? (i2 = typeof e3 == `function` ? e3 : H(+e3), o2) : i2;
  }, o2.context = function(e3) {
    return arguments.length ? (a2 = e3 ?? null, o2) : a2;
  }, o2;
}
function ie(e2, t2, n2, r2, i2) {
  e2.moveTo(t2, n2), e2.bezierCurveTo(t2 = (t2 + r2) / 2, n2, t2, i2, r2, i2);
}
function ae() {
  return re(ie);
}
function oe(e2) {
  return [e2.source.x1, e2.y0];
}
function G(e2) {
  return [e2.target.x0, e2.y1];
}
function K() {
  return ae().source(oe).target(G);
}
var q = (function() {
  var e2 = d(function(e3, t3, n3, r3) {
    for (n3 || (n3 = {}), r3 = e3.length; r3--; n3[e3[r3]] = t3) ;
    return n3;
  }, `o`), t2 = [1, 9], n2 = [1, 10], r2 = [1, 5, 10, 12], i2 = { trace: d(function() {
  }, `trace`), yy: {}, symbols_: { error: 2, start: 3, SANKEY: 4, NEWLINE: 5, csv: 6, opt_eof: 7, record: 8, csv_tail: 9, EOF: 10, "field[source]": 11, COMMA: 12, "field[target]": 13, "field[value]": 14, field: 15, escaped: 16, non_escaped: 17, DQUOTE: 18, ESCAPED_TEXT: 19, NON_ESCAPED_TEXT: 20, $accept: 0, $end: 1 }, terminals_: { 2: `error`, 4: `SANKEY`, 5: `NEWLINE`, 10: `EOF`, 11: `field[source]`, 12: `COMMA`, 13: `field[target]`, 14: `field[value]`, 18: `DQUOTE`, 19: `ESCAPED_TEXT`, 20: `NON_ESCAPED_TEXT` }, productions_: [0, [3, 4], [6, 2], [9, 2], [9, 0], [7, 1], [7, 0], [8, 5], [15, 1], [15, 1], [16, 3], [17, 1]], performAction: d(function(e3, t3, n3, r3, i3, a3, o2) {
    var s2 = a3.length - 1;
    switch (i3) {
      case 7:
        let e4 = r3.findOrCreateNode(a3[s2 - 4].trim().replaceAll(`""`, `"`)), t4 = r3.findOrCreateNode(a3[s2 - 2].trim().replaceAll(`""`, `"`)), n4 = parseFloat(a3[s2].trim());
        r3.addLink(e4, t4, n4);
        break;
      case 8:
      case 9:
      case 11:
        this.$ = a3[s2];
        break;
      case 10:
        this.$ = a3[s2 - 1];
        break;
    }
  }, `anonymous`), table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, { 5: [1, 3] }, { 6: 4, 8: 5, 15: 6, 16: 7, 17: 8, 18: t2, 20: n2 }, { 1: [2, 6], 7: 11, 10: [1, 12] }, e2(n2, [2, 4], { 9: 13, 5: [1, 14] }), { 12: [1, 15] }, e2(r2, [2, 8]), e2(r2, [2, 9]), { 19: [1, 16] }, e2(r2, [2, 11]), { 1: [2, 1] }, { 1: [2, 5] }, e2(n2, [2, 2]), { 6: 17, 8: 5, 15: 6, 16: 7, 17: 8, 18: t2, 20: n2 }, { 15: 18, 16: 7, 17: 8, 18: t2, 20: n2 }, { 18: [1, 19] }, e2(n2, [2, 3]), { 12: [1, 20] }, e2(r2, [2, 10]), { 15: 21, 16: 7, 17: 8, 18: t2, 20: n2 }, e2([1, 5, 10], [2, 7])], defaultActions: { 11: [2, 1], 12: [2, 5] }, parseError: d(function(e3, t3) {
    if (t3.recoverable) this.trace(e3);
    else {
      var n3 = Error(e3);
      throw n3.hash = t3, n3;
    }
  }, `parseError`), parse: d(function(e3) {
    var t3 = this, n3 = [0], r3 = [], i3 = [null], a3 = [], o2 = this.table, s2 = ``, c2 = 0, l2 = 0, u2 = 0, f2 = 2, p2 = 1, m2 = a3.slice.call(arguments, 1), h2 = Object.create(this.lexer), g2 = { yy: {} };
    for (var _2 in this.yy) Object.prototype.hasOwnProperty.call(this.yy, _2) && (g2.yy[_2] = this.yy[_2]);
    h2.setInput(e3, g2.yy), g2.yy.lexer = h2, g2.yy.parser = this, h2.yylloc === void 0 && (h2.yylloc = {});
    var v2 = h2.yylloc;
    a3.push(v2);
    var y2 = h2.options && h2.options.ranges;
    typeof g2.yy.parseError == `function` ? this.parseError = g2.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
    function b2(e4) {
      n3.length -= 2 * e4, i3.length -= e4, a3.length -= e4;
    }
    d(b2, `popStack`);
    function x2() {
      var e4 = r3.pop() || h2.lex() || p2;
      return typeof e4 != `number` && (e4 instanceof Array && (r3 = e4, e4 = r3.pop()), e4 = t3.symbols_[e4] || e4), e4;
    }
    d(x2, `lex`);
    for (var S2, C2, w2, T2, E2, D2 = {}, O2, k2, A2, j2; ; ) {
      if (w2 = n3[n3.length - 1], this.defaultActions[w2] ? T2 = this.defaultActions[w2] : (S2 ?? (S2 = x2()), T2 = o2[w2] && o2[w2][S2]), T2 === void 0 || !T2.length || !T2[0]) {
        var M2 = ``;
        for (O2 in j2 = [], o2[w2]) this.terminals_[O2] && O2 > f2 && j2.push(`'` + this.terminals_[O2] + `'`);
        M2 = h2.showPosition ? `Parse error on line ` + (c2 + 1) + `:
` + h2.showPosition() + `
Expecting ` + j2.join(`, `) + `, got '` + (this.terminals_[S2] || S2) + `'` : `Parse error on line ` + (c2 + 1) + `: Unexpected ` + (S2 == p2 ? `end of input` : `'` + (this.terminals_[S2] || S2) + `'`), this.parseError(M2, { text: h2.match, token: this.terminals_[S2] || S2, line: h2.yylineno, loc: v2, expected: j2 });
      }
      if (T2[0] instanceof Array && T2.length > 1) throw Error(`Parse Error: multiple actions possible at state: ` + w2 + `, token: ` + S2);
      switch (T2[0]) {
        case 1:
          n3.push(S2), i3.push(h2.yytext), a3.push(h2.yylloc), n3.push(T2[1]), S2 = null, C2 ? (S2 = C2, C2 = null) : (l2 = h2.yyleng, s2 = h2.yytext, c2 = h2.yylineno, v2 = h2.yylloc, u2 > 0 && u2--);
          break;
        case 2:
          if (k2 = this.productions_[T2[1]][1], D2.$ = i3[i3.length - k2], D2._$ = { first_line: a3[a3.length - (k2 || 1)].first_line, last_line: a3[a3.length - 1].last_line, first_column: a3[a3.length - (k2 || 1)].first_column, last_column: a3[a3.length - 1].last_column }, y2 && (D2._$.range = [a3[a3.length - (k2 || 1)].range[0], a3[a3.length - 1].range[1]]), E2 = this.performAction.apply(D2, [s2, l2, c2, g2.yy, T2[1], i3, a3].concat(m2)), E2 !== void 0) return E2;
          k2 && (n3 = n3.slice(0, -1 * k2 * 2), i3 = i3.slice(0, -1 * k2), a3 = a3.slice(0, -1 * k2)), n3.push(this.productions_[T2[1]][0]), i3.push(D2.$), a3.push(D2._$), A2 = o2[n3[n3.length - 2]][n3[n3.length - 1]], n3.push(A2);
          break;
        case 3:
          return true;
      }
    }
    return true;
  }, `parse`) };
  i2.lexer = (function() {
    return { EOF: 1, parseError: d(function(e3, t3) {
      if (this.yy.parser) this.yy.parser.parseError(e3, t3);
      else throw Error(e3);
    }, `parseError`), setInput: d(function(e3, t3) {
      return this.yy = t3 || this.yy || {}, this._input = e3, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = ``, this.conditionStack = [`INITIAL`], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
    }, `setInput`), input: d(function() {
      var e3 = this._input[0];
      return this.yytext += e3, this.yyleng++, this.offset++, this.match += e3, this.matched += e3, e3.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e3;
    }, `input`), unput: d(function(e3) {
      var t3 = e3.length, n3 = e3.split(/(?:\r\n?|\n)/g);
      this._input = e3 + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t3), this.offset -= t3;
      var r3 = this.match.split(/(?:\r\n?|\n)/g);
      this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n3.length - 1 && (this.yylineno -= n3.length - 1);
      var i3 = this.yylloc.range;
      return this.yylloc = { first_line: this.yylloc.first_line, last_line: this.yylineno + 1, first_column: this.yylloc.first_column, last_column: n3 ? (n3.length === r3.length ? this.yylloc.first_column : 0) + r3[r3.length - n3.length].length - n3[0].length : this.yylloc.first_column - t3 }, this.options.ranges && (this.yylloc.range = [i3[0], i3[0] + this.yyleng - t3]), this.yyleng = this.yytext.length, this;
    }, `unput`), more: d(function() {
      return this._more = true, this;
    }, `more`), reject: d(function() {
      if (this.options.backtrack_lexer) this._backtrack = true;
      else return this.parseError(`Lexical error on line ` + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), { text: ``, token: null, line: this.yylineno });
      return this;
    }, `reject`), less: d(function(e3) {
      this.unput(this.match.slice(e3));
    }, `less`), pastInput: d(function() {
      var e3 = this.matched.substr(0, this.matched.length - this.match.length);
      return (e3.length > 20 ? `...` : ``) + e3.substr(-20).replace(/\n/g, ``);
    }, `pastInput`), upcomingInput: d(function() {
      var e3 = this.match;
      return e3.length < 20 && (e3 += this._input.substr(0, 20 - e3.length)), (e3.substr(0, 20) + (e3.length > 20 ? `...` : ``)).replace(/\n/g, ``);
    }, `upcomingInput`), showPosition: d(function() {
      var e3 = this.pastInput(), t3 = Array(e3.length + 1).join(`-`);
      return e3 + this.upcomingInput() + `
` + t3 + `^`;
    }, `showPosition`), test_match: d(function(e3, t3) {
      var n3, r3, i3;
      if (this.options.backtrack_lexer && (i3 = { yylineno: this.yylineno, yylloc: { first_line: this.yylloc.first_line, last_line: this.last_line, first_column: this.yylloc.first_column, last_column: this.yylloc.last_column }, yytext: this.yytext, match: this.match, matches: this.matches, matched: this.matched, yyleng: this.yyleng, offset: this.offset, _more: this._more, _input: this._input, yy: this.yy, conditionStack: this.conditionStack.slice(0), done: this.done }, this.options.ranges && (i3.yylloc.range = this.yylloc.range.slice(0))), r3 = e3[0].match(/(?:\r\n?|\n).*/g), r3 && (this.yylineno += r3.length), this.yylloc = { first_line: this.yylloc.last_line, last_line: this.yylineno + 1, first_column: this.yylloc.last_column, last_column: r3 ? r3[r3.length - 1].length - r3[r3.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e3[0].length }, this.yytext += e3[0], this.match += e3[0], this.matches = e3, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(e3[0].length), this.matched += e3[0], n3 = this.performAction.call(this, this.yy, this, t3, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), n3) return n3;
      if (this._backtrack) {
        for (var a3 in i3) this[a3] = i3[a3];
        return false;
      }
      return false;
    }, `test_match`), next: d(function() {
      if (this.done) return this.EOF;
      this._input || (this.done = true);
      var e3, t3, n3, r3;
      this._more || (this.yytext = ``, this.match = ``);
      for (var i3 = this._currentRules(), a3 = 0; a3 < i3.length; a3++) if (n3 = this._input.match(this.rules[i3[a3]]), n3 && (!t3 || n3[0].length > t3[0].length)) {
        if (t3 = n3, r3 = a3, this.options.backtrack_lexer) {
          if (e3 = this.test_match(n3, i3[a3]), e3 !== false) return e3;
          if (this._backtrack) {
            t3 = false;
            continue;
          } else return false;
        } else if (!this.options.flex) break;
      }
      return t3 ? (e3 = this.test_match(t3, i3[r3]), e3 === false ? false : e3) : this._input === `` ? this.EOF : this.parseError(`Lexical error on line ` + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: ``, token: null, line: this.yylineno });
    }, `next`), lex: d(function() {
      return this.next() || this.lex();
    }, `lex`), begin: d(function(e3) {
      this.conditionStack.push(e3);
    }, `begin`), popState: d(function() {
      return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
    }, `popState`), _currentRules: d(function() {
      return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
    }, `_currentRules`), topState: d(function(e3) {
      return e3 = this.conditionStack.length - 1 - Math.abs(e3 || 0), e3 >= 0 ? this.conditionStack[e3] : `INITIAL`;
    }, `topState`), pushState: d(function(e3) {
      this.begin(e3);
    }, `pushState`), stateStackSize: d(function() {
      return this.conditionStack.length;
    }, `stateStackSize`), options: { "case-insensitive": true }, performAction: d(function(e3, t3, n3, r3) {
      switch (n3) {
        case 0:
          return this.pushState(`csv`), 4;
        case 1:
          return this.pushState(`csv`), 4;
        case 2:
          return 10;
        case 3:
          return 5;
        case 4:
          return 12;
        case 5:
          return this.pushState(`escaped_text`), 18;
        case 6:
          return 20;
        case 7:
          return this.popState(`escaped_text`), 18;
        case 8:
          return 19;
      }
    }, `anonymous`), rules: [/^(?:sankey-beta\b)/i, /^(?:sankey\b)/i, /^(?:$)/i, /^(?:((\u000D\u000A)|(\u000A)))/i, /^(?:(\u002C))/i, /^(?:(\u0022))/i, /^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i, /^(?:(\u0022)(?!(\u0022)))/i, /^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i], conditions: { csv: { rules: [2, 3, 4, 5, 6, 7, 8], inclusive: false }, escaped_text: { rules: [7, 8], inclusive: false }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8], inclusive: true } } };
  })();
  function a2() {
    this.yy = {};
  }
  return d(a2, `Parser`), a2.prototype = i2, i2.Parser = a2, new a2();
})();
q.parser = q;
var J = q, Y = [], X = [], Z = /* @__PURE__ */ new Map(), se = d(() => {
  Y = [], X = [], Z = /* @__PURE__ */ new Map(), a();
}, `clear`), ce = (_a = class {
  constructor(e2, t2, n2 = 0) {
    this.source = e2, this.target = t2, this.value = n2;
  }
}, d(_a, `SankeyLink`), _a), le = d((e2, t2, n2) => {
  Y.push(new ce(e2, t2, n2));
}, `addLink`), ue = (_b = class {
  constructor(e2) {
    this.ID = e2;
  }
}, d(_b, `SankeyNode`), _b), Q = { nodesMap: Z, getConfig: d(() => o().sankey, `getConfig`), getNodes: d(() => X, `getNodes`), getLinks: d(() => Y, `getLinks`), getGraph: d(() => ({ nodes: X.map((e2) => ({ id: e2.ID })), links: Y.map((e2) => ({ source: e2.source.ID, target: e2.target.ID, value: e2.value })) }), `getGraph`), addLink: le, findOrCreateNode: d((e2) => {
  e2 = s.sanitizeText(e2, o());
  let t2 = Z.get(e2);
  return t2 === void 0 && (t2 = new ue(e2), Z.set(e2, t2), X.push(t2)), t2;
}, `findOrCreateNode`), getAccTitle: l, setAccTitle: e, getAccDescription: i, setAccDescription: u, getDiagramTitle: t, setDiagramTitle: r, clear: se }, $ = (_c = class {
  static next(t2) {
    return new _c(t2 + ++_c.count);
  }
  constructor(e2) {
    this.id = e2, this.href = `#${e2}`;
  }
  toString() {
    return `url(` + this.href + `)`;
  }
}, d(_c, `Uid`), _c.count = 0, _c), de = { left: b, right: x, center: C, justify: S }, fe = { draw: d(function(e2, t2, r2, i2) {
  let { securityLevel: a2, sankey: s2 } = o(), l2 = c.sankey, u2;
  a2 === `sandbox` && (u2 = f(`#i` + t2));
  let m2 = f(a2 === `sandbox` ? u2.nodes()[0].contentDocument.body : `body`), g2 = a2 === `sandbox` ? m2.select(`[id="${t2}"]`) : f(`[id="${t2}"]`), _2 = (s2 == null ? void 0 : s2.width) ?? l2.width, v2 = (s2 == null ? void 0 : s2.height) ?? l2.width, y2 = (s2 == null ? void 0 : s2.useMaxWidth) ?? l2.useMaxWidth, b2 = (s2 == null ? void 0 : s2.nodeAlignment) ?? l2.nodeAlignment, x2 = (s2 == null ? void 0 : s2.prefix) ?? l2.prefix, S2 = (s2 == null ? void 0 : s2.suffix) ?? l2.suffix, C2 = (s2 == null ? void 0 : s2.showValues) ?? l2.showValues, w2 = i2.db.getGraph(), T2 = de[b2];
  P().nodeId((e3) => e3.id).nodeWidth(10).nodePadding(10 + (C2 ? 15 : 0)).nodeAlign(T2).extent([[0, 0], [_2, v2]])(w2);
  let E2 = p(h);
  g2.append(`g`).attr(`class`, `nodes`).selectAll(`.node`).data(w2.nodes).join(`g`).attr(`class`, `node`).attr(`id`, (e3) => (e3.uid = $.next(`node-`)).id).attr(`transform`, function(e3) {
    return `translate(` + e3.x0 + `,` + e3.y0 + `)`;
  }).attr(`x`, (e3) => e3.x0).attr(`y`, (e3) => e3.y0).append(`rect`).attr(`height`, (e3) => e3.y1 - e3.y0).attr(`width`, (e3) => e3.x1 - e3.x0).attr(`fill`, (e3) => E2(e3.id));
  let D2 = d(({ id: e3, value: t3 }) => C2 ? `${e3}
${x2}${Math.round(t3 * 100) / 100}${S2}` : e3, `getText`);
  g2.append(`g`).attr(`class`, `node-labels`).attr(`font-size`, 14).selectAll(`text`).data(w2.nodes).join(`text`).attr(`x`, (e3) => e3.x0 < _2 / 2 ? e3.x1 + 6 : e3.x0 - 6).attr(`y`, (e3) => (e3.y1 + e3.y0) / 2).attr(`dy`, `${C2 ? `0` : `0.35`}em`).attr(`text-anchor`, (e3) => e3.x0 < _2 / 2 ? `start` : `end`).text(D2);
  let O2 = g2.append(`g`).attr(`class`, `links`).attr(`fill`, `none`).attr(`stroke-opacity`, 0.5).selectAll(`.link`).data(w2.links).join(`g`).attr(`class`, `link`).style(`mix-blend-mode`, `multiply`), k2 = (s2 == null ? void 0 : s2.linkColor) ?? `gradient`;
  if (k2 === `gradient`) {
    let e3 = O2.append(`linearGradient`).attr(`id`, (e4) => (e4.uid = $.next(`linearGradient-`)).id).attr(`gradientUnits`, `userSpaceOnUse`).attr(`x1`, (e4) => e4.source.x1).attr(`x2`, (e4) => e4.target.x0);
    e3.append(`stop`).attr(`offset`, `0%`).attr(`stop-color`, (e4) => E2(e4.source.id)), e3.append(`stop`).attr(`offset`, `100%`).attr(`stop-color`, (e4) => E2(e4.target.id));
  }
  let A2;
  switch (k2) {
    case `gradient`:
      A2 = d((e3) => e3.uid, `coloring`);
      break;
    case `source`:
      A2 = d((e3) => E2(e3.source.id), `coloring`);
      break;
    case `target`:
      A2 = d((e3) => E2(e3.target.id), `coloring`);
      break;
    default:
      A2 = k2;
  }
  O2.append(`path`).attr(`d`, K()).attr(`stroke`, A2).attr(`stroke-width`, (e3) => Math.max(1, e3.width)), n(void 0, g2, 0, y2);
}, `draw`) }, pe = d((e2) => e2.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g, ``).replaceAll(/([\n\r])+/g, `
`).trim(), `prepareTextForParsing`), me = d((e2) => `.label {
      font-family: ${e2.fontFamily};
    }`, `getStyles`), he = J.parse.bind(J);
J.parse = (e2) => he(pe(e2));
var ge = { styles: me, parser: J, db: Q, renderer: fe };
export {
  ge as diagram
};
