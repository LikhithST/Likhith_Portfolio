import { $ as e, Dt as t, G as n, H as r, J as i, K as a, St as o, Tt as s, U as c, W as l, Y as u, Z as d, _t as f, at as p, i as m, lt as ee, n as te, nt as ne, q as re, st as h, vt as ie, wt as g } from "./index-4Ava25sD.js";
import { E as _, _ as ae, c as v, d as y, f as oe, g as se, h as ce, m as le, n as b, o as ue, p as de, r as fe, s as pe, t as x, u as me, v as he, x as ge, y as S } from "./reduce-BYgg84dj.js";
import { a as C, i as _e, n as w, o as ve, r as ye, t as T } from "./flatten-COzv_UkG.js";
import { i as be, n as E, r as D, t as O } from "./graphlib-ByIJZzv_.js";
var xe = /\s/;
function Se(e2) {
  for (var t2 = e2.length; t2-- && xe.test(e2.charAt(t2)); ) ;
  return t2;
}
var Ce = Se, we = /^\s+/;
function Te(e2) {
  return e2 && e2.slice(0, Ce(e2) + 1).replace(we, ``);
}
var Ee = Te, De = NaN, Oe = /^[-+]0x[0-9a-f]+$/i, ke = /^0b[01]+$/i, Ae = /^0o[0-7]+$/i, je = parseInt;
function Me(e2) {
  if (typeof e2 == `number`) return e2;
  if (S(e2)) return De;
  if (g(e2)) {
    var t2 = typeof e2.valueOf == `function` ? e2.valueOf() : e2;
    e2 = g(t2) ? t2 + `` : t2;
  }
  if (typeof e2 != `string`) return e2 === 0 ? e2 : +e2;
  e2 = Ee(e2);
  var n2 = ke.test(e2);
  return n2 || Ae.test(e2) ? je(e2.slice(2), n2 ? 2 : 8) : Oe.test(e2) ? De : +e2;
}
var Ne = Me, Pe = 1 / 0, Fe = 17976931348623157e292;
function Ie(e2) {
  return e2 ? (e2 = Ne(e2), e2 === Pe || e2 === -Pe ? (e2 < 0 ? -1 : 1) * Fe : e2 === e2 ? e2 : 0) : e2 === 0 ? e2 : 0;
}
var k = Ie;
function Le(e2) {
  var t2 = k(e2), n2 = t2 % 1;
  return t2 === t2 ? n2 ? t2 - n2 : t2 : 0;
}
var Re = Le;
function ze(e2) {
  return n(re(e2, void 0, T), e2 + ``);
}
var Be = ze, Ve = RegExp(`[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]`);
function He(e2) {
  return Ve.test(e2);
}
var Ue = He, We = 1, Ge = 4;
function Ke(e2) {
  return be(e2, We | Ge);
}
var qe = Ke, Je = function() {
  return t.Date.now();
}, Ye = Object.prototype, Xe = Ye.hasOwnProperty, Ze = l(function(e2, t2) {
  e2 = Object(e2);
  var n2 = -1, r2 = t2.length, i2 = r2 > 2 ? t2[2] : void 0;
  for (i2 && c(t2[0], t2[1], i2) && (r2 = 1); ++n2 < r2; ) for (var a2 = t2[n2], s2 = u(a2), l2 = -1, d2 = s2.length; ++l2 < d2; ) {
    var f2 = s2[l2], p2 = e2[f2];
    (p2 === void 0 || o(p2, Ye[f2]) && !Xe.call(e2, f2)) && (e2[f2] = a2[f2]);
  }
  return e2;
});
function Qe(e2) {
  var t2 = e2 == null ? 0 : e2.length;
  return t2 ? e2[t2 - 1] : void 0;
}
var A = Qe;
function $e(e2) {
  return function(t2, n2, r2) {
    var i2 = Object(t2);
    if (!p(t2)) {
      var a2 = y(n2, 3);
      t2 = ge(t2), n2 = function(e3) {
        return a2(i2[e3], e3, i2);
      };
    }
    var o2 = e2(t2, n2, r2);
    return o2 > -1 ? i2[a2 ? t2[o2] : o2] : void 0;
  };
}
var et = $e, tt = Math.max;
function nt(e2, t2, n2) {
  var r2 = e2 == null ? 0 : e2.length;
  if (!r2) return -1;
  var i2 = n2 == null ? 0 : Re(n2);
  return i2 < 0 && (i2 = tt(r2 + i2, 0)), ue(e2, y(t2, 3), i2);
}
var j = et(nt);
function rt(e2, t2) {
  return e2 == null ? e2 : f(e2, fe(t2), u);
}
var it = rt;
function at(e2, t2) {
  return e2 && me(e2, fe(t2));
}
var ot = at;
function st(e2, t2) {
  return e2 > t2;
}
var ct = st, lt = Object.prototype.hasOwnProperty;
function ut(e2, t2) {
  return e2 != null && lt.call(e2, t2);
}
var dt = ut;
function ft(e2, t2) {
  return e2 != null && le(e2, t2, dt);
}
var pt = ft, mt = `[object String]`;
function ht(e2) {
  return typeof e2 == `string` || !h(e2) && ee(e2) && s(e2) == mt;
}
var gt = ht;
function _t(e2, t2) {
  var n2 = {};
  return t2 = y(t2, 3), me(e2, function(e3, r2, i2) {
    ie(n2, r2, t2(e3, r2, i2));
  }), n2;
}
var M = _t;
function vt(e2) {
  return e2 && e2.length ? _e(e2, i, ct) : void 0;
}
var N = vt;
function yt(e2, t2) {
  return e2 && e2.length ? _e(e2, y(t2, 2), ye) : void 0;
}
var P = yt;
function bt(t2, n2, r2, i2) {
  if (!g(t2)) return t2;
  n2 = ae(n2, t2);
  for (var a2 = -1, o2 = n2.length, s2 = o2 - 1, c2 = t2; c2 != null && ++a2 < o2; ) {
    var l2 = se(n2[a2]), u2 = r2;
    if (l2 === `__proto__` || l2 === `constructor` || l2 === `prototype`) return t2;
    if (a2 != s2) {
      var f2 = c2[l2];
      u2 = i2 ? i2(f2, l2, c2) : void 0, u2 === void 0 && (u2 = g(f2) ? f2 : d(n2[a2 + 1]) ? [] : {});
    }
    e(c2, l2, u2), c2 = c2[l2];
  }
  return t2;
}
var xt = bt;
function St(e2, t2, n2) {
  for (var r2 = -1, i2 = t2.length, a2 = {}; ++r2 < i2; ) {
    var o2 = t2[r2], s2 = ce(e2, o2);
    n2(s2, o2) && xt(a2, ae(o2, e2), s2);
  }
  return a2;
}
var Ct = St;
function wt(e2, t2) {
  var n2 = e2.length;
  for (e2.sort(t2); n2--; ) e2[n2] = e2[n2].value;
  return e2;
}
var Tt = wt;
function Et(e2, t2) {
  if (e2 !== t2) {
    var n2 = e2 !== void 0, r2 = e2 === null, i2 = e2 === e2, a2 = S(e2), o2 = t2 !== void 0, s2 = t2 === null, c2 = t2 === t2, l2 = S(t2);
    if (!s2 && !l2 && !a2 && e2 > t2 || a2 && o2 && c2 && !s2 && !l2 || r2 && o2 && c2 || !n2 && c2 || !i2) return 1;
    if (!r2 && !a2 && !l2 && e2 < t2 || l2 && n2 && i2 && !r2 && !a2 || s2 && n2 && i2 || !o2 && i2 || !c2) return -1;
  }
  return 0;
}
var Dt = Et;
function Ot(e2, t2, n2) {
  for (var r2 = -1, i2 = e2.criteria, a2 = t2.criteria, o2 = i2.length, s2 = n2.length; ++r2 < o2; ) {
    var c2 = Dt(i2[r2], a2[r2]);
    if (c2) return r2 >= s2 ? c2 : c2 * (n2[r2] == `desc` ? -1 : 1);
  }
  return e2.index - t2.index;
}
var kt = Ot;
function At(e2, t2, n2) {
  t2 = t2.length ? _(t2, function(e3) {
    return h(e3) ? function(t3) {
      return ce(t3, e3.length === 1 ? e3[0] : e3);
    } : e3;
  }) : [i];
  var r2 = -1;
  return t2 = _(t2, ne(y)), Tt(ve(e2, function(e3, n3, i2) {
    return { criteria: _(t2, function(t3) {
      return t3(e3);
    }), index: ++r2, value: e3 };
  }), function(e3, t3) {
    return kt(e3, t3, n2);
  });
}
var jt = At, Mt = oe(`length`), Nt = `\\ud800-\\udfff`, Pt = `\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff`, Ft = `\\ufe0e\\ufe0f`, It = `[` + Nt + `]`, F = `[` + Pt + `]`, I = `\\ud83c[\\udffb-\\udfff]`, Lt = `(?:` + F + `|` + I + `)`, Rt = `[^` + Nt + `]`, zt = `(?:\\ud83c[\\udde6-\\uddff]){2}`, Bt = `[\\ud800-\\udbff][\\udc00-\\udfff]`, Vt = `\\u200d`, Ht = Lt + `?`, Ut = `[` + Ft + `]?`, Wt = `(?:` + Vt + `(?:` + [Rt, zt, Bt].join(`|`) + `)` + Ut + Ht + `)*`, Gt = Ut + Ht + Wt, Kt = `(?:` + [Rt + F + `?`, F, zt, Bt, It].join(`|`) + `)`, qt = RegExp(I + `(?=` + I + `)|` + Kt + Gt, `g`);
function Jt(e2) {
  for (var t2 = qt.lastIndex = 0; qt.test(e2); ) ++t2;
  return t2;
}
var Yt = Jt;
function Xt(e2) {
  return Ue(e2) ? Yt(e2) : Mt(e2);
}
var Zt = Xt;
function Qt(e2, t2) {
  return Ct(e2, t2, function(t3, n2) {
    return de(e2, n2);
  });
}
var $t = Qt, L = Be(function(e2, t2) {
  return e2 == null ? {} : $t(e2, t2);
}), en = Math.ceil, tn = Math.max;
function nn(e2, t2, n2, r2) {
  for (var i2 = -1, a2 = tn(en((t2 - e2) / (n2 || 1)), 0), o2 = Array(a2); a2--; ) o2[r2 ? a2 : ++i2] = e2, e2 += n2;
  return o2;
}
var rn = nn;
function an(e2) {
  return function(t2, n2, r2) {
    return r2 && typeof r2 != `number` && c(t2, n2, r2) && (n2 = r2 = void 0), t2 = k(t2), n2 === void 0 ? (n2 = t2, t2 = 0) : n2 = k(n2), r2 = r2 === void 0 ? t2 < n2 ? 1 : -1 : k(r2), rn(t2, n2, r2, e2);
  };
}
var R = an(), on = `[object Map]`, sn = `[object Set]`;
function cn(e2) {
  if (e2 == null) return 0;
  if (p(e2)) return gt(e2) ? Zt(e2) : e2.length;
  var t2 = te(e2);
  return t2 == on || t2 == sn ? e2.size : m(e2).length;
}
var ln = cn, z = l(function(e2, t2) {
  if (e2 == null) return [];
  var n2 = t2.length;
  return n2 > 1 && c(e2, t2[0], t2[1]) ? t2 = [] : n2 > 2 && c(t2[0], t2[1], t2[2]) && (t2 = [t2[0]]), jt(e2, pe(t2, 1), []);
}), un = 0;
function dn(e2) {
  var t2 = ++un;
  return he(e2) + t2;
}
var B = dn;
function fn(e2, t2, n2) {
  for (var r2 = -1, i2 = e2.length, a2 = t2.length, o2 = {}; ++r2 < i2; ) {
    var s2 = r2 < a2 ? t2[r2] : void 0;
    n2(o2, e2[r2], s2);
  }
  return o2;
}
var pn = fn;
function mn(t2, n2) {
  return pn(t2 || [], n2 || [], e);
}
var hn = mn, gn = class {
  constructor() {
    var e2 = {};
    e2._next = e2._prev = e2, this._sentinel = e2;
  }
  dequeue() {
    var e2 = this._sentinel, t2 = e2._prev;
    if (t2 !== e2) return _n(t2), t2;
  }
  enqueue(e2) {
    var t2 = this._sentinel;
    e2._prev && e2._next && _n(e2), e2._next = t2._next, t2._next._prev = e2, t2._next = e2, e2._prev = t2;
  }
  toString() {
    for (var e2 = [], t2 = this._sentinel, n2 = t2._prev; n2 !== t2; ) e2.push(JSON.stringify(n2, vn)), n2 = n2._prev;
    return `[` + e2.join(`, `) + `]`;
  }
};
function _n(e2) {
  e2._prev._next = e2._next, e2._next._prev = e2._prev, delete e2._next, delete e2._prev;
}
function vn(e2, t2) {
  if (e2 !== `_next` && e2 !== `_prev`) return t2;
}
var yn = a(1);
function bn(e2, t2) {
  if (e2.nodeCount() <= 1) return [];
  var n2 = Sn(e2, t2 || yn);
  return T(C(xn(n2.graph, n2.buckets, n2.zeroIdx), function(t3) {
    return e2.outEdges(t3.v, t3.w);
  }));
}
function xn(e2, t2, n2) {
  for (var r2 = [], i2 = t2[t2.length - 1], a2 = t2[0], o2; e2.nodeCount(); ) {
    for (; o2 = a2.dequeue(); ) V(e2, t2, n2, o2);
    for (; o2 = i2.dequeue(); ) V(e2, t2, n2, o2);
    if (e2.nodeCount()) {
      for (var s2 = t2.length - 2; s2 > 0; --s2) if (o2 = t2[s2].dequeue(), o2) {
        r2 = r2.concat(V(e2, t2, n2, o2, true));
        break;
      }
    }
  }
  return r2;
}
function V(e2, t2, n2, r2, i2) {
  var a2 = i2 ? [] : void 0;
  return b(e2.inEdges(r2.v), function(r3) {
    var o2 = e2.edge(r3), s2 = e2.node(r3.v);
    i2 && a2.push({ v: r3.v, w: r3.w }), s2.out -= o2, H(t2, n2, s2);
  }), b(e2.outEdges(r2.v), function(r3) {
    var i3 = e2.edge(r3), a3 = r3.w, o2 = e2.node(a3);
    o2.in -= i3, H(t2, n2, o2);
  }), e2.removeNode(r2.v), a2;
}
function Sn(e2, t2) {
  var n2 = new O(), r2 = 0, i2 = 0;
  b(e2.nodes(), function(e3) {
    n2.setNode(e3, { v: e3, in: 0, out: 0 });
  }), b(e2.edges(), function(e3) {
    var a3 = n2.edge(e3.v, e3.w) || 0, o3 = t2(e3), s2 = a3 + o3;
    n2.setEdge(e3.v, e3.w, s2), i2 = Math.max(i2, n2.node(e3.v).out += o3), r2 = Math.max(r2, n2.node(e3.w).in += o3);
  });
  var a2 = R(i2 + r2 + 3).map(function() {
    return new gn();
  }), o2 = r2 + 1;
  return b(n2.nodes(), function(e3) {
    H(a2, o2, n2.node(e3));
  }), { graph: n2, buckets: a2, zeroIdx: o2 };
}
function H(e2, t2, n2) {
  n2.out ? n2.in ? e2[n2.out - n2.in + t2].enqueue(n2) : e2[e2.length - 1].enqueue(n2) : e2[0].enqueue(n2);
}
function Cn(e2) {
  b(e2.graph().acyclicer === `greedy` ? bn(e2, t2(e2)) : wn(e2), function(t3) {
    var n2 = e2.edge(t3);
    e2.removeEdge(t3), n2.forwardName = t3.name, n2.reversed = true, e2.setEdge(t3.w, t3.v, n2, B(`rev`));
  });
  function t2(e3) {
    return function(t3) {
      return e3.edge(t3).weight;
    };
  }
}
function wn(e2) {
  var t2 = [], n2 = {}, r2 = {};
  function i2(a2) {
    Object.prototype.hasOwnProperty.call(r2, a2) || (r2[a2] = true, n2[a2] = true, b(e2.outEdges(a2), function(e3) {
      Object.prototype.hasOwnProperty.call(n2, e3.w) ? t2.push(e3) : i2(e3.w);
    }), delete n2[a2]);
  }
  return b(e2.nodes(), i2), t2;
}
function Tn(e2) {
  b(e2.edges(), function(t2) {
    var n2 = e2.edge(t2);
    if (n2.reversed) {
      e2.removeEdge(t2);
      var r2 = n2.forwardName;
      delete n2.reversed, delete n2.forwardName, e2.setEdge(t2.w, t2.v, n2, r2);
    }
  });
}
function U(e2, t2, n2, r2) {
  var i2;
  do
    i2 = B(r2);
  while (e2.hasNode(i2));
  return n2.dummy = t2, e2.setNode(i2, n2), i2;
}
function En(e2) {
  var t2 = new O().setGraph(e2.graph());
  return b(e2.nodes(), function(n2) {
    t2.setNode(n2, e2.node(n2));
  }), b(e2.edges(), function(n2) {
    var r2 = t2.edge(n2.v, n2.w) || { weight: 0, minlen: 1 }, i2 = e2.edge(n2);
    t2.setEdge(n2.v, n2.w, { weight: r2.weight + i2.weight, minlen: Math.max(r2.minlen, i2.minlen) });
  }), t2;
}
function Dn(e2) {
  var t2 = new O({ multigraph: e2.isMultigraph() }).setGraph(e2.graph());
  return b(e2.nodes(), function(n2) {
    e2.children(n2).length || t2.setNode(n2, e2.node(n2));
  }), b(e2.edges(), function(n2) {
    t2.setEdge(n2, e2.edge(n2));
  }), t2;
}
function On(e2, t2) {
  var n2 = e2.x, r2 = e2.y, i2 = t2.x - n2, a2 = t2.y - r2, o2 = e2.width / 2, s2 = e2.height / 2;
  if (!i2 && !a2) throw Error(`Not possible to find intersection inside of the rectangle`);
  var c2, l2;
  return Math.abs(a2) * o2 > Math.abs(i2) * s2 ? (a2 < 0 && (s2 = -s2), c2 = s2 * i2 / a2, l2 = s2) : (i2 < 0 && (o2 = -o2), c2 = o2, l2 = o2 * a2 / i2), { x: n2 + c2, y: r2 + l2 };
}
function W(e2) {
  var t2 = C(R(Mn(e2) + 1), function() {
    return [];
  });
  return b(e2.nodes(), function(n2) {
    var r2 = e2.node(n2), i2 = r2.rank;
    E(i2) || (t2[i2][r2.order] = n2);
  }), t2;
}
function kn(e2) {
  var t2 = w(C(e2.nodes(), function(t3) {
    return e2.node(t3).rank;
  }));
  b(e2.nodes(), function(n2) {
    var r2 = e2.node(n2);
    pt(r2, `rank`) && (r2.rank -= t2);
  });
}
function An(e2) {
  var t2 = w(C(e2.nodes(), function(t3) {
    return e2.node(t3).rank;
  })), n2 = [];
  b(e2.nodes(), function(r3) {
    var i3 = e2.node(r3).rank - t2;
    n2[i3] || (n2[i3] = []), n2[i3].push(r3);
  });
  var r2 = 0, i2 = e2.graph().nodeRankFactor;
  b(n2, function(t3, n3) {
    E(t3) && n3 % i2 !== 0 ? --r2 : r2 && b(t3, function(t4) {
      e2.node(t4).rank += r2;
    });
  });
}
function jn(e2, t2, n2, r2) {
  var i2 = { width: 0, height: 0 };
  return arguments.length >= 4 && (i2.rank = n2, i2.order = r2), U(e2, `border`, i2, t2);
}
function Mn(e2) {
  return N(C(e2.nodes(), function(t2) {
    var n2 = e2.node(t2).rank;
    if (!E(n2)) return n2;
  }));
}
function Nn(e2, t2) {
  var n2 = { lhs: [], rhs: [] };
  return b(e2, function(e3) {
    t2(e3) ? n2.lhs.push(e3) : n2.rhs.push(e3);
  }), n2;
}
function Pn(e2, t2) {
  var n2 = Je();
  try {
    return t2();
  } finally {
    console.log(e2 + ` time: ` + (Je() - n2) + `ms`);
  }
}
function Fn(e2, t2) {
  return t2();
}
function In(e2) {
  function t2(n2) {
    var r2 = e2.children(n2), i2 = e2.node(n2);
    if (r2.length && b(r2, t2), Object.prototype.hasOwnProperty.call(i2, `minRank`)) {
      i2.borderLeft = [], i2.borderRight = [];
      for (var a2 = i2.minRank, o2 = i2.maxRank + 1; a2 < o2; ++a2) Ln(e2, `borderLeft`, `_bl`, n2, i2, a2), Ln(e2, `borderRight`, `_br`, n2, i2, a2);
    }
  }
  b(e2.children(), t2);
}
function Ln(e2, t2, n2, r2, i2, a2) {
  var o2 = { width: 0, height: 0, rank: a2, borderType: t2 }, s2 = i2[t2][a2 - 1], c2 = U(e2, `border`, o2, n2);
  i2[t2][a2] = c2, e2.setParent(c2, r2), s2 && e2.setEdge(s2, c2, { weight: 1 });
}
function Rn(e2) {
  var t2 = e2.graph().rankdir.toLowerCase();
  (t2 === `lr` || t2 === `rl`) && Bn(e2);
}
function zn(e2) {
  var t2 = e2.graph().rankdir.toLowerCase();
  (t2 === `bt` || t2 === `rl`) && Hn(e2), (t2 === `lr` || t2 === `rl`) && (Un(e2), Bn(e2));
}
function Bn(e2) {
  b(e2.nodes(), function(t2) {
    Vn(e2.node(t2));
  }), b(e2.edges(), function(t2) {
    Vn(e2.edge(t2));
  });
}
function Vn(e2) {
  var t2 = e2.width;
  e2.width = e2.height, e2.height = t2;
}
function Hn(e2) {
  b(e2.nodes(), function(t2) {
    G(e2.node(t2));
  }), b(e2.edges(), function(t2) {
    var n2 = e2.edge(t2);
    b(n2.points, G), Object.prototype.hasOwnProperty.call(n2, `y`) && G(n2);
  });
}
function G(e2) {
  e2.y = -e2.y;
}
function Un(e2) {
  b(e2.nodes(), function(t2) {
    K(e2.node(t2));
  }), b(e2.edges(), function(t2) {
    var n2 = e2.edge(t2);
    b(n2.points, K), Object.prototype.hasOwnProperty.call(n2, `x`) && K(n2);
  });
}
function K(e2) {
  var t2 = e2.x;
  e2.x = e2.y, e2.y = t2;
}
function Wn(e2) {
  e2.graph().dummyChains = [], b(e2.edges(), function(t2) {
    Gn(e2, t2);
  });
}
function Gn(e2, t2) {
  var n2 = t2.v, r2 = e2.node(n2).rank, i2 = t2.w, a2 = e2.node(i2).rank, o2 = t2.name, s2 = e2.edge(t2), c2 = s2.labelRank;
  if (a2 !== r2 + 1) {
    e2.removeEdge(t2);
    var l2 = void 0, u2, d2;
    for (d2 = 0, ++r2; r2 < a2; ++d2, ++r2) s2.points = [], l2 = { width: 0, height: 0, edgeLabel: s2, edgeObj: t2, rank: r2 }, u2 = U(e2, `edge`, l2, `_d`), r2 === c2 && (l2.width = s2.width, l2.height = s2.height, l2.dummy = `edge-label`, l2.labelpos = s2.labelpos), e2.setEdge(n2, u2, { weight: s2.weight }, o2), d2 === 0 && e2.graph().dummyChains.push(u2), n2 = u2;
    e2.setEdge(n2, i2, { weight: s2.weight }, o2);
  }
}
function Kn(e2) {
  b(e2.graph().dummyChains, function(t2) {
    var n2 = e2.node(t2), r2 = n2.edgeLabel, i2;
    for (e2.setEdge(n2.edgeObj, r2); n2.dummy; ) i2 = e2.successors(t2)[0], e2.removeNode(t2), r2.points.push({ x: n2.x, y: n2.y }), n2.dummy === `edge-label` && (r2.x = n2.x, r2.y = n2.y, r2.width = n2.width, r2.height = n2.height), t2 = i2, n2 = e2.node(t2);
  });
}
function q(e2) {
  var t2 = {};
  function n2(r2) {
    var i2 = e2.node(r2);
    if (Object.prototype.hasOwnProperty.call(t2, r2)) return i2.rank;
    t2[r2] = true;
    var a2 = w(C(e2.outEdges(r2), function(t3) {
      return n2(t3.w) - e2.edge(t3).minlen;
    }));
    return (a2 === 1 / 0 || a2 == null) && (a2 = 0), i2.rank = a2;
  }
  b(e2.sources(), n2);
}
function J(e2, t2) {
  return e2.node(t2.w).rank - e2.node(t2.v).rank - e2.edge(t2).minlen;
}
function qn(e2) {
  var t2 = new O({ directed: false }), n2 = e2.nodes()[0], r2 = e2.nodeCount();
  t2.setNode(n2, {});
  for (var i2, a2; Jn(t2, e2) < r2; ) i2 = Yn(t2, e2), a2 = t2.hasNode(i2.v) ? J(e2, i2) : -J(e2, i2), Xn(t2, e2, a2);
  return t2;
}
function Jn(e2, t2) {
  function n2(r2) {
    b(t2.nodeEdges(r2), function(i2) {
      var a2 = i2.v, o2 = r2 === a2 ? i2.w : a2;
      !e2.hasNode(o2) && !J(t2, i2) && (e2.setNode(o2, {}), e2.setEdge(r2, o2, {}), n2(o2));
    });
  }
  return b(e2.nodes(), n2), e2.nodeCount();
}
function Yn(e2, t2) {
  return P(t2.edges(), function(n2) {
    if (e2.hasNode(n2.v) !== e2.hasNode(n2.w)) return J(t2, n2);
  });
}
function Xn(e2, t2, n2) {
  b(e2.nodes(), function(e3) {
    t2.node(e3).rank += n2;
  });
}
a(1), a(1), Zn.CycleException = Y;
function Zn(e2) {
  var t2 = {}, n2 = {}, r2 = [];
  function i2(a2) {
    if (Object.prototype.hasOwnProperty.call(n2, a2)) throw new Y();
    Object.prototype.hasOwnProperty.call(t2, a2) || (n2[a2] = true, t2[a2] = true, b(e2.predecessors(a2), i2), delete n2[a2], r2.push(a2));
  }
  if (b(e2.sinks(), i2), ln(t2) !== e2.nodeCount()) throw new Y();
  return r2;
}
function Y() {
}
Y.prototype = Error();
function Qn(e2, t2, n2) {
  h(t2) || (t2 = [t2]);
  var r2 = (e2.isDirected() ? e2.successors : e2.neighbors).bind(e2), i2 = [], a2 = {};
  return b(t2, function(t3) {
    if (!e2.hasNode(t3)) throw Error(`Graph does not have node: ` + t3);
    $n(e2, t3, n2 === `post`, a2, r2, i2);
  }), i2;
}
function $n(e2, t2, n2, r2, i2, a2) {
  Object.prototype.hasOwnProperty.call(r2, t2) || (r2[t2] = true, n2 || a2.push(t2), b(i2(t2), function(t3) {
    $n(e2, t3, n2, r2, i2, a2);
  }), n2 && a2.push(t2));
}
function er(e2, t2) {
  return Qn(e2, t2, `post`);
}
function tr(e2, t2) {
  return Qn(e2, t2, `pre`);
}
X.initLowLimValues = Q, X.initCutValues = Z, X.calcCutValue = rr, X.leaveEdge = ar, X.enterEdge = or, X.exchangeEdges = sr;
function X(e2) {
  e2 = En(e2), q(e2);
  var t2 = qn(e2);
  Q(t2), Z(t2, e2);
  for (var n2, r2; n2 = ar(t2); ) r2 = or(t2, e2, n2), sr(t2, e2, n2, r2);
}
function Z(e2, t2) {
  var n2 = er(e2, e2.nodes());
  n2 = n2.slice(0, n2.length - 1), b(n2, function(n3) {
    nr(e2, t2, n3);
  });
}
function nr(e2, t2, n2) {
  var r2 = e2.node(n2).parent;
  e2.edge(n2, r2).cutvalue = rr(e2, t2, n2);
}
function rr(e2, t2, n2) {
  var r2 = e2.node(n2).parent, i2 = true, a2 = t2.edge(n2, r2), o2 = 0;
  return a2 || (a2 = (i2 = false, t2.edge(r2, n2))), o2 = a2.weight, b(t2.nodeEdges(n2), function(a3) {
    var s2 = a3.v === n2, c2 = s2 ? a3.w : a3.v;
    if (c2 !== r2) {
      var l2 = s2 === i2, u2 = t2.edge(a3).weight;
      if (o2 += l2 ? u2 : -u2, lr(e2, n2, c2)) {
        var d2 = e2.edge(n2, c2).cutvalue;
        o2 += l2 ? -d2 : d2;
      }
    }
  }), o2;
}
function Q(e2, t2) {
  arguments.length < 2 && (t2 = e2.nodes()[0]), ir(e2, {}, 1, t2);
}
function ir(e2, t2, n2, r2, i2) {
  var a2 = n2, o2 = e2.node(r2);
  return t2[r2] = true, b(e2.neighbors(r2), function(i3) {
    Object.prototype.hasOwnProperty.call(t2, i3) || (n2 = ir(e2, t2, n2, i3, r2));
  }), o2.low = a2, o2.lim = n2++, i2 ? o2.parent = i2 : delete o2.parent, n2;
}
function ar(e2) {
  return j(e2.edges(), function(t2) {
    return e2.edge(t2).cutvalue < 0;
  });
}
function or(e2, t2, n2) {
  var r2 = n2.v, i2 = n2.w;
  t2.hasEdge(r2, i2) || (r2 = n2.w, i2 = n2.v);
  var a2 = e2.node(r2), o2 = e2.node(i2), s2 = a2, c2 = false;
  return a2.lim > o2.lim && (s2 = o2, c2 = true), P(v(t2.edges(), function(t3) {
    return c2 === ur(e2, e2.node(t3.v), s2) && c2 !== ur(e2, e2.node(t3.w), s2);
  }), function(e3) {
    return J(t2, e3);
  });
}
function sr(e2, t2, n2, r2) {
  var i2 = n2.v, a2 = n2.w;
  e2.removeEdge(i2, a2), e2.setEdge(r2.v, r2.w, {}), Q(e2), Z(e2, t2), cr(e2, t2);
}
function cr(e2, t2) {
  var n2 = tr(e2, j(e2.nodes(), function(e3) {
    return !t2.node(e3).parent;
  }));
  n2 = n2.slice(1), b(n2, function(n3) {
    var r2 = e2.node(n3).parent, i2 = t2.edge(n3, r2), a2 = false;
    i2 || (i2 = t2.edge(r2, n3), a2 = true), t2.node(n3).rank = t2.node(r2).rank + (a2 ? i2.minlen : -i2.minlen);
  });
}
function lr(e2, t2, n2) {
  return e2.hasEdge(t2, n2);
}
function ur(e2, t2, n2) {
  return n2.low <= t2.lim && t2.lim <= n2.lim;
}
function dr(e2) {
  switch (e2.graph().ranker) {
    case `network-simplex`:
      mr(e2);
      break;
    case `tight-tree`:
      pr(e2);
      break;
    case `longest-path`:
      fr(e2);
      break;
    default:
      mr(e2);
  }
}
var fr = q;
function pr(e2) {
  q(e2), qn(e2);
}
function mr(e2) {
  X(e2);
}
function hr(e2) {
  var t2 = U(e2, `root`, {}, `_root`), n2 = _r(e2), r2 = N(D(n2)) - 1, i2 = 2 * r2 + 1;
  e2.graph().nestingRoot = t2, b(e2.edges(), function(t3) {
    e2.edge(t3).minlen *= i2;
  });
  var a2 = vr(e2) + 1;
  b(e2.children(), function(o2) {
    gr(e2, t2, i2, a2, r2, n2, o2);
  }), e2.graph().nodeRankFactor = i2;
}
function gr(e2, t2, n2, r2, i2, a2, o2) {
  var s2 = e2.children(o2);
  if (!s2.length) {
    o2 !== t2 && e2.setEdge(t2, o2, { weight: 0, minlen: n2 });
    return;
  }
  var c2 = jn(e2, `_bt`), l2 = jn(e2, `_bb`), u2 = e2.node(o2);
  e2.setParent(c2, o2), u2.borderTop = c2, e2.setParent(l2, o2), u2.borderBottom = l2, b(s2, function(s3) {
    gr(e2, t2, n2, r2, i2, a2, s3);
    var u3 = e2.node(s3), d2 = u3.borderTop ? u3.borderTop : s3, f2 = u3.borderBottom ? u3.borderBottom : s3, p2 = u3.borderTop ? r2 : 2 * r2, m2 = d2 === f2 ? i2 - a2[o2] + 1 : 1;
    e2.setEdge(c2, d2, { weight: p2, minlen: m2, nestingEdge: true }), e2.setEdge(f2, l2, { weight: p2, minlen: m2, nestingEdge: true });
  }), e2.parent(o2) || e2.setEdge(t2, c2, { weight: 0, minlen: i2 + a2[o2] });
}
function _r(e2) {
  var t2 = {};
  function n2(r2, i2) {
    var a2 = e2.children(r2);
    a2 && a2.length && b(a2, function(e3) {
      n2(e3, i2 + 1);
    }), t2[r2] = i2;
  }
  return b(e2.children(), function(e3) {
    n2(e3, 1);
  }), t2;
}
function vr(e2) {
  return x(e2.edges(), function(t2, n2) {
    return t2 + e2.edge(n2).weight;
  }, 0);
}
function yr(e2) {
  var t2 = e2.graph();
  e2.removeNode(t2.nestingRoot), delete t2.nestingRoot, b(e2.edges(), function(t3) {
    e2.edge(t3).nestingEdge && e2.removeEdge(t3);
  });
}
function br(e2, t2, n2) {
  var r2 = {}, i2;
  b(n2, function(n3) {
    for (var a2 = e2.parent(n3), o2, s2; a2; ) {
      if (o2 = e2.parent(a2), o2 ? (s2 = r2[o2], r2[o2] = a2) : (s2 = i2, i2 = a2), s2 && s2 !== a2) {
        t2.setEdge(s2, a2);
        return;
      }
      a2 = o2;
    }
  });
}
function xr(e2, t2, n2) {
  var r2 = Sr(e2), i2 = new O({ compound: true }).setGraph({ root: r2 }).setDefaultNodeLabel(function(t3) {
    return e2.node(t3);
  });
  return b(e2.nodes(), function(a2) {
    var o2 = e2.node(a2), s2 = e2.parent(a2);
    (o2.rank === t2 || o2.minRank <= t2 && t2 <= o2.maxRank) && (i2.setNode(a2), i2.setParent(a2, s2 || r2), b(e2[n2](a2), function(t3) {
      var n3 = t3.v === a2 ? t3.w : t3.v, r3 = i2.edge(n3, a2), o3 = E(r3) ? 0 : r3.weight;
      i2.setEdge(n3, a2, { weight: e2.edge(t3).weight + o3 });
    }), Object.prototype.hasOwnProperty.call(o2, `minRank`) && i2.setNode(a2, { borderLeft: o2.borderLeft[t2], borderRight: o2.borderRight[t2] }));
  }), i2;
}
function Sr(e2) {
  for (var t2; e2.hasNode(t2 = B(`_root`)); ) ;
  return t2;
}
function Cr(e2, t2) {
  for (var n2 = 0, r2 = 1; r2 < t2.length; ++r2) n2 += wr(e2, t2[r2 - 1], t2[r2]);
  return n2;
}
function wr(e2, t2, n2) {
  for (var r2 = hn(n2, C(n2, function(e3, t3) {
    return t3;
  })), i2 = T(C(t2, function(t3) {
    return z(C(e2.outEdges(t3), function(t4) {
      return { pos: r2[t4.w], weight: e2.edge(t4).weight };
    }), `pos`);
  })), a2 = 1; a2 < n2.length; ) a2 <<= 1;
  var o2 = 2 * a2 - 1;
  --a2;
  var s2 = C(Array(o2), function() {
    return 0;
  }), c2 = 0;
  return b(i2.forEach(function(e3) {
    var t3 = e3.pos + a2;
    s2[t3] += e3.weight;
    for (var n3 = 0; t3 > 0; ) t3 % 2 && (n3 += s2[t3 + 1]), t3 = t3 - 1 >> 1, s2[t3] += e3.weight;
    c2 += e3.weight * n3;
  })), c2;
}
function Tr(e2) {
  var t2 = {}, n2 = v(e2.nodes(), function(t3) {
    return !e2.children(t3).length;
  }), r2 = C(R(N(C(n2, function(t3) {
    return e2.node(t3).rank;
  })) + 1), function() {
    return [];
  });
  function i2(n3) {
    pt(t2, n3) || (t2[n3] = true, r2[e2.node(n3).rank].push(n3), b(e2.successors(n3), i2));
  }
  return b(z(n2, function(t3) {
    return e2.node(t3).rank;
  }), i2), r2;
}
function Er(e2, t2) {
  return C(t2, function(t3) {
    var n2 = e2.inEdges(t3);
    if (n2.length) {
      var r2 = x(n2, function(t4, n3) {
        var r3 = e2.edge(n3), i2 = e2.node(n3.v);
        return { sum: t4.sum + r3.weight * i2.order, weight: t4.weight + r3.weight };
      }, { sum: 0, weight: 0 });
      return { v: t3, barycenter: r2.sum / r2.weight, weight: r2.weight };
    } else return { v: t3 };
  });
}
function Dr(e2, t2) {
  var n2 = {};
  return b(e2, function(e3, t3) {
    var r2 = n2[e3.v] = { indegree: 0, in: [], out: [], vs: [e3.v], i: t3 };
    E(e3.barycenter) || (r2.barycenter = e3.barycenter, r2.weight = e3.weight);
  }), b(t2.edges(), function(e3) {
    var t3 = n2[e3.v], r2 = n2[e3.w];
    !E(t3) && !E(r2) && (r2.indegree++, t3.out.push(n2[e3.w]));
  }), Or(v(n2, function(e3) {
    return !e3.indegree;
  }));
}
function Or(e2) {
  var t2 = [];
  function n2(e3) {
    return function(t3) {
      t3.merged || (E(t3.barycenter) || E(e3.barycenter) || t3.barycenter >= e3.barycenter) && kr(e3, t3);
    };
  }
  function r2(t3) {
    return function(n3) {
      n3.in.push(t3), --n3.indegree === 0 && e2.push(n3);
    };
  }
  for (; e2.length; ) {
    var i2 = e2.pop();
    t2.push(i2), b(i2.in.reverse(), n2(i2)), b(i2.out, r2(i2));
  }
  return C(v(t2, function(e3) {
    return !e3.merged;
  }), function(e3) {
    return L(e3, [`vs`, `i`, `barycenter`, `weight`]);
  });
}
function kr(e2, t2) {
  var n2 = 0, r2 = 0;
  e2.weight && (n2 += e2.barycenter * e2.weight, r2 += e2.weight), t2.weight && (n2 += t2.barycenter * t2.weight, r2 += t2.weight), e2.vs = t2.vs.concat(e2.vs), e2.barycenter = n2 / r2, e2.weight = r2, e2.i = Math.min(t2.i, e2.i), t2.merged = true;
}
function Ar(e2, t2) {
  var n2 = Nn(e2, function(e3) {
    return Object.prototype.hasOwnProperty.call(e3, `barycenter`);
  }), r2 = n2.lhs, i2 = z(n2.rhs, function(e3) {
    return -e3.i;
  }), a2 = [], o2 = 0, s2 = 0, c2 = 0;
  r2.sort(Mr(!!t2)), c2 = jr(a2, i2, c2), b(r2, function(e3) {
    c2 += e3.vs.length, a2.push(e3.vs), o2 += e3.barycenter * e3.weight, s2 += e3.weight, c2 = jr(a2, i2, c2);
  });
  var l2 = { vs: T(a2) };
  return s2 && (l2.barycenter = o2 / s2, l2.weight = s2), l2;
}
function jr(e2, t2, n2) {
  for (var r2; t2.length && (r2 = A(t2)).i <= n2; ) t2.pop(), e2.push(r2.vs), n2++;
  return n2;
}
function Mr(e2) {
  return function(t2, n2) {
    return t2.barycenter < n2.barycenter ? -1 : t2.barycenter > n2.barycenter ? 1 : e2 ? n2.i - t2.i : t2.i - n2.i;
  };
}
function Nr(e2, t2, n2, r2) {
  var i2 = e2.children(t2), a2 = e2.node(t2), o2 = a2 ? a2.borderLeft : void 0, s2 = a2 ? a2.borderRight : void 0, c2 = {};
  o2 && (i2 = v(i2, function(e3) {
    return e3 !== o2 && e3 !== s2;
  }));
  var l2 = Er(e2, i2);
  b(l2, function(t3) {
    if (e2.children(t3.v).length) {
      var i3 = Nr(e2, t3.v, n2, r2);
      c2[t3.v] = i3, Object.prototype.hasOwnProperty.call(i3, `barycenter`) && Fr(t3, i3);
    }
  });
  var u2 = Dr(l2, n2);
  Pr(u2, c2);
  var d2 = Ar(u2, r2);
  if (o2 && (d2.vs = T([o2, d2.vs, s2]), e2.predecessors(o2).length)) {
    var f2 = e2.node(e2.predecessors(o2)[0]), p2 = e2.node(e2.predecessors(s2)[0]);
    Object.prototype.hasOwnProperty.call(d2, `barycenter`) || (d2.barycenter = 0, d2.weight = 0), d2.barycenter = (d2.barycenter * d2.weight + f2.order + p2.order) / (d2.weight + 2), d2.weight += 2;
  }
  return d2;
}
function Pr(e2, t2) {
  b(e2, function(e3) {
    e3.vs = T(e3.vs.map(function(e4) {
      return t2[e4] ? t2[e4].vs : e4;
    }));
  });
}
function Fr(e2, t2) {
  E(e2.barycenter) ? (e2.barycenter = t2.barycenter, e2.weight = t2.weight) : (e2.barycenter = (e2.barycenter * e2.weight + t2.barycenter * t2.weight) / (e2.weight + t2.weight), e2.weight += t2.weight);
}
function Ir(e2) {
  var t2 = Mn(e2), n2 = Lr(e2, R(1, t2 + 1), `inEdges`), r2 = Lr(e2, R(t2 - 1, -1, -1), `outEdges`), i2 = Tr(e2);
  zr(e2, i2);
  for (var a2 = 1 / 0, o2, s2 = 0, c2 = 0; c2 < 4; ++s2, ++c2) {
    Rr(s2 % 2 ? n2 : r2, s2 % 4 >= 2), i2 = W(e2);
    var l2 = Cr(e2, i2);
    l2 < a2 && (c2 = 0, o2 = qe(i2), a2 = l2);
  }
  zr(e2, o2);
}
function Lr(e2, t2, n2) {
  return C(t2, function(t3) {
    return xr(e2, t3, n2);
  });
}
function Rr(e2, t2) {
  var n2 = new O();
  b(e2, function(e3) {
    var r2 = e3.graph().root, i2 = Nr(e3, r2, n2, t2);
    b(i2.vs, function(t3, n3) {
      e3.node(t3).order = n3;
    }), br(e3, n2, i2.vs);
  });
}
function zr(e2, t2) {
  b(t2, function(t3) {
    b(t3, function(t4, n2) {
      e2.node(t4).order = n2;
    });
  });
}
function Br(e2) {
  var t2 = Hr(e2);
  b(e2.graph().dummyChains, function(n2) {
    for (var r2 = e2.node(n2), i2 = r2.edgeObj, a2 = Vr(e2, t2, i2.v, i2.w), o2 = a2.path, s2 = a2.lca, c2 = 0, l2 = o2[c2], u2 = true; n2 !== i2.w; ) {
      if (r2 = e2.node(n2), u2) {
        for (; (l2 = o2[c2]) !== s2 && e2.node(l2).maxRank < r2.rank; ) c2++;
        l2 === s2 && (u2 = false);
      }
      if (!u2) {
        for (; c2 < o2.length - 1 && e2.node(l2 = o2[c2 + 1]).minRank <= r2.rank; ) c2++;
        l2 = o2[c2];
      }
      e2.setParent(n2, l2), n2 = e2.successors(n2)[0];
    }
  });
}
function Vr(e2, t2, n2, r2) {
  var i2 = [], a2 = [], o2 = Math.min(t2[n2].low, t2[r2].low), s2 = Math.max(t2[n2].lim, t2[r2].lim), c2 = n2, l2;
  do
    c2 = e2.parent(c2), i2.push(c2);
  while (c2 && (t2[c2].low > o2 || s2 > t2[c2].lim));
  for (l2 = c2, c2 = r2; (c2 = e2.parent(c2)) !== l2; ) a2.push(c2);
  return { path: i2.concat(a2.reverse()), lca: l2 };
}
function Hr(e2) {
  var t2 = {}, n2 = 0;
  function r2(i2) {
    var a2 = n2;
    b(e2.children(i2), r2), t2[i2] = { low: a2, lim: n2++ };
  }
  return b(e2.children(), r2), t2;
}
function Ur(e2, t2) {
  var n2 = {};
  function r2(t3, r3) {
    var i2 = 0, a2 = 0, o2 = t3.length, s2 = A(r3);
    return b(r3, function(t4, c2) {
      var l2 = Gr(e2, t4), u2 = l2 ? e2.node(l2).order : o2;
      (l2 || t4 === s2) && (b(r3.slice(a2, c2 + 1), function(t5) {
        b(e2.predecessors(t5), function(r4) {
          var a3 = e2.node(r4), o3 = a3.order;
          (o3 < i2 || u2 < o3) && !(a3.dummy && e2.node(t5).dummy) && Kr(n2, r4, t5);
        });
      }), a2 = c2 + 1, i2 = u2);
    }), r3;
  }
  return x(t2, r2), n2;
}
function Wr(e2, t2) {
  var n2 = {};
  function r2(t3, r3, i3, a2, o2) {
    var s2;
    b(R(r3, i3), function(r4) {
      s2 = t3[r4], e2.node(s2).dummy && b(e2.predecessors(s2), function(t4) {
        var r5 = e2.node(t4);
        r5.dummy && (r5.order < a2 || r5.order > o2) && Kr(n2, t4, s2);
      });
    });
  }
  function i2(t3, n3) {
    var i3 = -1, a2, o2 = 0;
    return b(n3, function(s2, c2) {
      if (e2.node(s2).dummy === `border`) {
        var l2 = e2.predecessors(s2);
        l2.length && (a2 = e2.node(l2[0]).order, r2(n3, o2, c2, i3, a2), o2 = c2, i3 = a2);
      }
      r2(n3, o2, n3.length, a2, t3.length);
    }), n3;
  }
  return x(t2, i2), n2;
}
function Gr(e2, t2) {
  if (e2.node(t2).dummy) return j(e2.predecessors(t2), function(t3) {
    return e2.node(t3).dummy;
  });
}
function Kr(e2, t2, n2) {
  if (t2 > n2) {
    var r2 = t2;
    t2 = n2, n2 = r2;
  }
  Object.prototype.hasOwnProperty.call(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, configurable: true, value: {}, writable: true });
  var i2 = e2[t2];
  Object.defineProperty(i2, n2, { enumerable: true, configurable: true, value: true, writable: true });
}
function qr(e2, t2, n2) {
  if (t2 > n2) {
    var r2 = t2;
    t2 = n2, n2 = r2;
  }
  return !!e2[t2] && Object.prototype.hasOwnProperty.call(e2[t2], n2);
}
function Jr(e2, t2, n2, r2) {
  var i2 = {}, a2 = {}, o2 = {};
  return b(t2, function(e3) {
    b(e3, function(e4, t3) {
      i2[e4] = e4, a2[e4] = e4, o2[e4] = t3;
    });
  }), b(t2, function(e3) {
    var t3 = -1;
    b(e3, function(e4) {
      var s2 = r2(e4);
      if (s2.length) {
        s2 = z(s2, function(e5) {
          return o2[e5];
        });
        for (var c2 = (s2.length - 1) / 2, l2 = Math.floor(c2), u2 = Math.ceil(c2); l2 <= u2; ++l2) {
          var d2 = s2[l2];
          a2[e4] === e4 && t3 < o2[d2] && !qr(n2, e4, d2) && (a2[d2] = e4, a2[e4] = i2[e4] = i2[d2], t3 = o2[d2]);
        }
      }
    });
  }), { root: i2, align: a2 };
}
function Yr(e2, t2, n2, r2, i2) {
  var a2 = {}, o2 = Xr(e2, t2, n2, i2), s2 = i2 ? `borderLeft` : `borderRight`;
  function c2(e3, t3) {
    for (var n3 = o2.nodes(), r3 = n3.pop(), i3 = {}; r3; ) i3[r3] ? e3(r3) : (i3[r3] = true, n3.push(r3), n3 = n3.concat(t3(r3))), r3 = n3.pop();
  }
  function l2(e3) {
    a2[e3] = o2.inEdges(e3).reduce(function(e4, t3) {
      return Math.max(e4, a2[t3.v] + o2.edge(t3));
    }, 0);
  }
  function u2(t3) {
    var n3 = o2.outEdges(t3).reduce(function(e3, t4) {
      return Math.min(e3, a2[t4.w] - o2.edge(t4));
    }, 1 / 0), r3 = e2.node(t3);
    n3 !== 1 / 0 && r3.borderType !== s2 && (a2[t3] = Math.max(a2[t3], n3));
  }
  return c2(l2, o2.predecessors.bind(o2)), c2(u2, o2.successors.bind(o2)), b(r2, function(e3) {
    a2[e3] = a2[n2[e3]];
  }), a2;
}
function Xr(e2, t2, n2, r2) {
  var i2 = new O(), a2 = e2.graph(), o2 = ti(a2.nodesep, a2.edgesep, r2);
  return b(t2, function(t3) {
    var r3;
    b(t3, function(t4) {
      var a3 = n2[t4];
      if (i2.setNode(a3), r3) {
        var s2 = n2[r3], c2 = i2.edge(s2, a3);
        i2.setEdge(s2, a3, Math.max(o2(e2, t4, r3), c2 || 0));
      }
      r3 = t4;
    });
  }), i2;
}
function Zr(e2, t2) {
  return P(D(t2), function(t3) {
    var n2 = -1 / 0, r2 = 1 / 0;
    return it(t3, function(t4, i2) {
      var a2 = ni(e2, i2) / 2;
      n2 = Math.max(t4 + a2, n2), r2 = Math.min(t4 - a2, r2);
    }), n2 - r2;
  });
}
function Qr(e2, t2) {
  var n2 = D(t2), r2 = w(n2), i2 = N(n2);
  b([`u`, `d`], function(n3) {
    b([`l`, `r`], function(a2) {
      var o2 = n3 + a2, s2 = e2[o2], c2;
      if (s2 !== t2) {
        var l2 = D(s2);
        c2 = a2 === `l` ? r2 - w(l2) : i2 - N(l2), c2 && (e2[o2] = M(s2, function(e3) {
          return e3 + c2;
        }));
      }
    });
  });
}
function $r(e2, t2) {
  return M(e2.ul, function(n2, r2) {
    if (t2) return e2[t2.toLowerCase()][r2];
    var i2 = z(C(e2, r2));
    return (i2[1] + i2[2]) / 2;
  });
}
function ei(e2) {
  var t2 = W(e2), n2 = r(Ur(e2, t2), Wr(e2, t2)), i2 = {}, a2;
  return b([`u`, `d`], function(r2) {
    a2 = r2 === `u` ? t2 : D(t2).reverse(), b([`l`, `r`], function(t3) {
      t3 === `r` && (a2 = C(a2, function(e3) {
        return D(e3).reverse();
      }));
      var o2 = (r2 === `u` ? e2.predecessors : e2.successors).bind(e2), s2 = Jr(e2, a2, n2, o2), c2 = Yr(e2, a2, s2.root, s2.align, t3 === `r`);
      t3 === `r` && (c2 = M(c2, function(e3) {
        return -e3;
      })), i2[r2 + t3] = c2;
    });
  }), Qr(i2, Zr(e2, i2)), $r(i2, e2.graph().align);
}
function ti(e2, t2, n2) {
  return function(r2, i2, a2) {
    var o2 = r2.node(i2), s2 = r2.node(a2), c2 = 0, l2;
    if (c2 += o2.width / 2, Object.prototype.hasOwnProperty.call(o2, `labelpos`)) switch (o2.labelpos.toLowerCase()) {
      case `l`:
        l2 = -o2.width / 2;
        break;
      case `r`:
        l2 = o2.width / 2;
        break;
    }
    if (l2 && (c2 += n2 ? l2 : -l2), l2 = 0, c2 += (o2.dummy ? t2 : e2) / 2, c2 += (s2.dummy ? t2 : e2) / 2, c2 += s2.width / 2, Object.prototype.hasOwnProperty.call(s2, `labelpos`)) switch (s2.labelpos.toLowerCase()) {
      case `l`:
        l2 = s2.width / 2;
        break;
      case `r`:
        l2 = -s2.width / 2;
        break;
    }
    return l2 && (c2 += n2 ? l2 : -l2), l2 = 0, c2;
  };
}
function ni(e2, t2) {
  return e2.node(t2).width;
}
function ri(e2) {
  e2 = Dn(e2), ii(e2), ot(ei(e2), function(t2, n2) {
    e2.node(n2).x = t2;
  });
}
function ii(e2) {
  var t2 = W(e2), n2 = e2.graph().ranksep, r2 = 0;
  b(t2, function(t3) {
    var i2 = N(C(t3, function(t4) {
      return e2.node(t4).height;
    }));
    b(t3, function(t4) {
      e2.node(t4).y = r2 + i2 / 2;
    }), r2 += i2 + n2;
  });
}
function ai(e2, t2) {
  var n2 = t2 && t2.debugTiming ? Pn : Fn;
  n2(`layout`, () => {
    var t3 = n2(`  buildLayoutGraph`, () => gi(e2));
    n2(`  runLayout`, () => oi(t3, n2)), n2(`  updateInputGraph`, () => si(e2, t3));
  });
}
function oi(e2, t2) {
  t2(`    makeSpaceForEdgeLabels`, () => _i(e2)), t2(`    removeSelfEdges`, () => Ei(e2)), t2(`    acyclic`, () => Cn(e2)), t2(`    nestingGraph.run`, () => hr(e2)), t2(`    rank`, () => dr(Dn(e2))), t2(`    injectEdgeLabelProxies`, () => vi(e2)), t2(`    removeEmptyRanks`, () => An(e2)), t2(`    nestingGraph.cleanup`, () => yr(e2)), t2(`    normalizeRanks`, () => kn(e2)), t2(`    assignRankMinMax`, () => yi(e2)), t2(`    removeEdgeLabelProxies`, () => bi(e2)), t2(`    normalize.run`, () => Wn(e2)), t2(`    parentDummyChains`, () => Br(e2)), t2(`    addBorderSegments`, () => In(e2)), t2(`    order`, () => Ir(e2)), t2(`    insertSelfEdges`, () => Di(e2)), t2(`    adjustCoordinateSystem`, () => Rn(e2)), t2(`    position`, () => ri(e2)), t2(`    positionSelfEdges`, () => Oi(e2)), t2(`    removeBorderNodes`, () => Ti(e2)), t2(`    normalize.undo`, () => Kn(e2)), t2(`    fixupEdgeLabelCoords`, () => Ci(e2)), t2(`    undoCoordinateSystem`, () => zn(e2)), t2(`    translateGraph`, () => xi(e2)), t2(`    assignNodeIntersects`, () => Si(e2)), t2(`    reversePoints`, () => wi(e2)), t2(`    acyclic.undo`, () => Tn(e2));
}
function si(e2, t2) {
  b(e2.nodes(), function(n2) {
    var r2 = e2.node(n2), i2 = t2.node(n2);
    r2 && (r2.x = i2.x, r2.y = i2.y, t2.children(n2).length && (r2.width = i2.width, r2.height = i2.height));
  }), b(e2.edges(), function(n2) {
    var r2 = e2.edge(n2), i2 = t2.edge(n2);
    r2.points = i2.points, Object.prototype.hasOwnProperty.call(i2, `x`) && (r2.x = i2.x, r2.y = i2.y);
  }), e2.graph().width = t2.graph().width, e2.graph().height = t2.graph().height;
}
var ci = [`nodesep`, `edgesep`, `ranksep`, `marginx`, `marginy`], li = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: `tb` }, ui = [`acyclicer`, `ranker`, `rankdir`, `align`], di = [`width`, `height`], fi = { width: 0, height: 0 }, pi = [`minlen`, `weight`, `width`, `height`, `labeloffset`], mi = { minlen: 1, weight: 1, width: 0, height: 0, labeloffset: 10, labelpos: `r` }, hi = [`labelpos`];
function gi(e2) {
  var t2 = new O({ multigraph: true, compound: true }), n2 = ki(e2.graph());
  return t2.setGraph(r({}, li, $(n2, ci), L(n2, ui))), b(e2.nodes(), function(n3) {
    var r2 = ki(e2.node(n3));
    t2.setNode(n3, Ze($(r2, di), fi)), t2.setParent(n3, e2.parent(n3));
  }), b(e2.edges(), function(n3) {
    var i2 = ki(e2.edge(n3));
    t2.setEdge(n3, r({}, mi, $(i2, pi), L(i2, hi)));
  }), t2;
}
function _i(e2) {
  var t2 = e2.graph();
  t2.ranksep /= 2, b(e2.edges(), function(n2) {
    var r2 = e2.edge(n2);
    r2.minlen *= 2, r2.labelpos.toLowerCase() !== `c` && (t2.rankdir === `TB` || t2.rankdir === `BT` ? r2.width += r2.labeloffset : r2.height += r2.labeloffset);
  });
}
function vi(e2) {
  b(e2.edges(), function(t2) {
    var n2 = e2.edge(t2);
    if (n2.width && n2.height) {
      var r2 = e2.node(t2.v);
      U(e2, `edge-proxy`, { rank: (e2.node(t2.w).rank - r2.rank) / 2 + r2.rank, e: t2 }, `_ep`);
    }
  });
}
function yi(e2) {
  var t2 = 0;
  b(e2.nodes(), function(n2) {
    var r2 = e2.node(n2);
    r2.borderTop && (r2.minRank = e2.node(r2.borderTop).rank, r2.maxRank = e2.node(r2.borderBottom).rank, t2 = N(t2, r2.maxRank));
  }), e2.graph().maxRank = t2;
}
function bi(e2) {
  b(e2.nodes(), function(t2) {
    var n2 = e2.node(t2);
    n2.dummy === `edge-proxy` && (e2.edge(n2.e).labelRank = n2.rank, e2.removeNode(t2));
  });
}
function xi(e2) {
  var t2 = 1 / 0, n2 = 0, r2 = 1 / 0, i2 = 0, a2 = e2.graph(), o2 = a2.marginx || 0, s2 = a2.marginy || 0;
  function c2(e3) {
    var a3 = e3.x, o3 = e3.y, s3 = e3.width, c3 = e3.height;
    t2 = Math.min(t2, a3 - s3 / 2), n2 = Math.max(n2, a3 + s3 / 2), r2 = Math.min(r2, o3 - c3 / 2), i2 = Math.max(i2, o3 + c3 / 2);
  }
  b(e2.nodes(), function(t3) {
    c2(e2.node(t3));
  }), b(e2.edges(), function(t3) {
    var n3 = e2.edge(t3);
    Object.prototype.hasOwnProperty.call(n3, `x`) && c2(n3);
  }), t2 -= o2, r2 -= s2, b(e2.nodes(), function(n3) {
    var i3 = e2.node(n3);
    i3.x -= t2, i3.y -= r2;
  }), b(e2.edges(), function(n3) {
    var i3 = e2.edge(n3);
    b(i3.points, function(e3) {
      e3.x -= t2, e3.y -= r2;
    }), Object.prototype.hasOwnProperty.call(i3, `x`) && (i3.x -= t2), Object.prototype.hasOwnProperty.call(i3, `y`) && (i3.y -= r2);
  }), a2.width = n2 - t2 + o2, a2.height = i2 - r2 + s2;
}
function Si(e2) {
  b(e2.edges(), function(t2) {
    var n2 = e2.edge(t2), r2 = e2.node(t2.v), i2 = e2.node(t2.w), a2, o2;
    n2.points ? (a2 = n2.points[0], o2 = n2.points[n2.points.length - 1]) : (n2.points = [], a2 = i2, o2 = r2), n2.points.unshift(On(r2, a2)), n2.points.push(On(i2, o2));
  });
}
function Ci(e2) {
  b(e2.edges(), function(t2) {
    var n2 = e2.edge(t2);
    if (Object.prototype.hasOwnProperty.call(n2, `x`)) switch ((n2.labelpos === `l` || n2.labelpos === `r`) && (n2.width -= n2.labeloffset), n2.labelpos) {
      case `l`:
        n2.x -= n2.width / 2 + n2.labeloffset;
        break;
      case `r`:
        n2.x += n2.width / 2 + n2.labeloffset;
        break;
    }
  });
}
function wi(e2) {
  b(e2.edges(), function(t2) {
    var n2 = e2.edge(t2);
    n2.reversed && n2.points.reverse();
  });
}
function Ti(e2) {
  b(e2.nodes(), function(t2) {
    if (e2.children(t2).length) {
      var n2 = e2.node(t2), r2 = e2.node(n2.borderTop), i2 = e2.node(n2.borderBottom), a2 = e2.node(A(n2.borderLeft)), o2 = e2.node(A(n2.borderRight));
      n2.width = Math.abs(o2.x - a2.x), n2.height = Math.abs(i2.y - r2.y), n2.x = a2.x + n2.width / 2, n2.y = r2.y + n2.height / 2;
    }
  }), b(e2.nodes(), function(t2) {
    e2.node(t2).dummy === `border` && e2.removeNode(t2);
  });
}
function Ei(e2) {
  b(e2.edges(), function(t2) {
    if (t2.v === t2.w) {
      var n2 = e2.node(t2.v);
      n2.selfEdges || (n2.selfEdges = []), n2.selfEdges.push({ e: t2, label: e2.edge(t2) }), e2.removeEdge(t2);
    }
  });
}
function Di(e2) {
  b(W(e2), function(t2) {
    var n2 = 0;
    b(t2, function(t3, r2) {
      var i2 = e2.node(t3);
      i2.order = r2 + n2, b(i2.selfEdges, function(t4) {
        U(e2, `selfedge`, { width: t4.label.width, height: t4.label.height, rank: i2.rank, order: r2 + ++n2, e: t4.e, label: t4.label }, `_se`);
      }), delete i2.selfEdges;
    });
  });
}
function Oi(e2) {
  b(e2.nodes(), function(t2) {
    var n2 = e2.node(t2);
    if (n2.dummy === `selfedge`) {
      var r2 = e2.node(n2.e.v), i2 = r2.x + r2.width / 2, a2 = r2.y, o2 = n2.x - i2, s2 = r2.height / 2;
      e2.setEdge(n2.e, n2.label), e2.removeNode(t2), n2.label.points = [{ x: i2 + 2 * o2 / 3, y: a2 - s2 }, { x: i2 + 5 * o2 / 6, y: a2 - s2 }, { x: i2 + o2, y: a2 }, { x: i2 + 5 * o2 / 6, y: a2 + s2 }, { x: i2 + 2 * o2 / 3, y: a2 + s2 }], n2.label.x = n2.x, n2.label.y = n2.y;
    }
  });
}
function $(e2, t2) {
  return M(L(e2, t2), Number);
}
function ki(e2) {
  var t2 = {};
  return b(e2, function(e3, n2) {
    t2[n2.toLowerCase()] = e3;
  }), t2;
}
export {
  ai as t
};
