import { C as e, E as t, P as n, S as r, b as i, v as a, w as o, x as s, y as c } from "./chunk-S3R3BYOJ-D8yhV3IZ.js";
import { E as l, O as u, T as d, c as f, f as p, g as m, o as ee, r as te, t as ne, u as h, x as re } from "./identity-IHMFXfGJ.js";
import { i as ie, n as ae } from "./isEmpty-Suvitui-.js";
import { E as g, _ as oe, c as _, d as v, f as se, g as ce, h as le, m as ue, n as y, o as de, p as fe, r as pe, s as me, t as b, u as he, v as ge, x as _e, y as x } from "./reduce-S4_EnTW-.js";
import { a as S, i as ve, n as C, o as ye, r as be, t as w } from "./flatten-DG1tNxhW.js";
import { i as xe, n as T, r as E, t as D } from "./graphlib-Ct7gWg8T.js";
var Se = /\s/;
function Ce(e2) {
  for (var t2 = e2.length; t2-- && Se.test(e2.charAt(t2)); ) ;
  return t2;
}
var we = Ce, Te = /^\s+/;
function Ee(e2) {
  return e2 && e2.slice(0, we(e2) + 1).replace(Te, ``);
}
var De = Ee, Oe = NaN, ke = /^[-+]0x[0-9a-f]+$/i, Ae = /^0b[01]+$/i, je = /^0o[0-7]+$/i, Me = parseInt;
function Ne(e2) {
  if (typeof e2 == `number`) return e2;
  if (x(e2)) return Oe;
  if (d(e2)) {
    var t2 = typeof e2.valueOf == `function` ? e2.valueOf() : e2;
    e2 = d(t2) ? t2 + `` : t2;
  }
  if (typeof e2 != `string`) return e2 === 0 ? e2 : +e2;
  e2 = De(e2);
  var n2 = Ae.test(e2);
  return n2 || je.test(e2) ? Me(e2.slice(2), n2 ? 2 : 8) : ke.test(e2) ? Oe : +e2;
}
var Pe = Ne, Fe = 1 / 0, Ie = 17976931348623157e292;
function Le(e2) {
  return e2 ? (e2 = Pe(e2), e2 === Fe || e2 === -Fe ? (e2 < 0 ? -1 : 1) * Ie : e2 === e2 ? e2 : 0) : e2 === 0 ? e2 : 0;
}
var O = Le;
function Re(e2) {
  var t2 = O(e2), n2 = t2 % 1;
  return t2 === t2 ? n2 ? t2 - n2 : t2 : 0;
}
var ze = Re;
function Be(t2) {
  return s(e(t2, void 0, w), t2 + ``);
}
var Ve = Be, He = RegExp(`[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]`);
function Ue(e2) {
  return He.test(e2);
}
var We = Ue, Ge = 1, Ke = 4;
function qe(e2) {
  return xe(e2, Ge | Ke);
}
var Je = qe, Ye = function() {
  return u.Date.now();
}, Xe = Object.prototype, Ze = Xe.hasOwnProperty, Qe = i(function(e2, t2) {
  e2 = Object(e2);
  var n2 = -1, r2 = t2.length, i2 = r2 > 2 ? t2[2] : void 0;
  for (i2 && c(t2[0], t2[1], i2) && (r2 = 1); ++n2 < r2; ) for (var a2 = t2[n2], s2 = o(a2), l2 = -1, u2 = s2.length; ++l2 < u2; ) {
    var d2 = s2[l2], f2 = e2[d2];
    (f2 === void 0 || re(f2, Xe[d2]) && !Ze.call(e2, d2)) && (e2[d2] = a2[d2]);
  }
  return e2;
});
function $e(e2) {
  var t2 = e2 == null ? 0 : e2.length;
  return t2 ? e2[t2 - 1] : void 0;
}
var k = $e;
function et(e2) {
  return function(t2, n2, r2) {
    var i2 = Object(t2);
    if (!f(t2)) {
      var a2 = v(n2, 3);
      t2 = _e(t2), n2 = function(e3) {
        return a2(i2[e3], e3, i2);
      };
    }
    var o2 = e2(t2, n2, r2);
    return o2 > -1 ? i2[a2 ? t2[o2] : o2] : void 0;
  };
}
var tt = et, nt = Math.max;
function rt(e2, t2, n2) {
  var r2 = e2 == null ? 0 : e2.length;
  if (!r2) return -1;
  var i2 = n2 == null ? 0 : ze(n2);
  return i2 < 0 && (i2 = nt(r2 + i2, 0)), de(e2, v(t2, 3), i2);
}
var A = tt(rt);
function it(e2, t2) {
  return e2 == null ? e2 : m(e2, pe(t2), o);
}
var at = it;
function ot(e2, t2) {
  return e2 && he(e2, pe(t2));
}
var st = ot;
function ct(e2, t2) {
  return e2 > t2;
}
var lt = ct, ut = Object.prototype.hasOwnProperty;
function dt(e2, t2) {
  return e2 != null && ut.call(e2, t2);
}
var ft = dt;
function pt(e2, t2) {
  return e2 != null && ue(e2, t2, ft);
}
var mt = pt, ht = `[object String]`;
function gt(e2) {
  return typeof e2 == `string` || !h(e2) && p(e2) && l(e2) == ht;
}
var _t = gt;
function vt(e2, t2) {
  var r2 = {};
  return t2 = v(t2, 3), he(e2, function(e3, i2, a2) {
    n(r2, i2, t2(e3, i2, a2));
  }), r2;
}
var j = vt;
function yt(e2) {
  return e2 && e2.length ? ve(e2, ne, lt) : void 0;
}
var M = yt;
function bt(e2, t2) {
  return e2 && e2.length ? ve(e2, v(t2, 2), be) : void 0;
}
var N = bt;
function xt(e2, n2, r2, i2) {
  if (!d(e2)) return e2;
  n2 = oe(n2, e2);
  for (var a2 = -1, o2 = n2.length, s2 = o2 - 1, c2 = e2; c2 != null && ++a2 < o2; ) {
    var l2 = ce(n2[a2]), u2 = r2;
    if (l2 === `__proto__` || l2 === `constructor` || l2 === `prototype`) return e2;
    if (a2 != s2) {
      var f2 = c2[l2];
      u2 = i2 ? i2(f2, l2, c2) : void 0, u2 === void 0 && (u2 = d(f2) ? f2 : te(n2[a2 + 1]) ? [] : {});
    }
    t(c2, l2, u2), c2 = c2[l2];
  }
  return e2;
}
var St = xt;
function Ct(e2, t2, n2) {
  for (var r2 = -1, i2 = t2.length, a2 = {}; ++r2 < i2; ) {
    var o2 = t2[r2], s2 = le(e2, o2);
    n2(s2, o2) && St(a2, oe(o2, e2), s2);
  }
  return a2;
}
var wt = Ct;
function Tt(e2, t2) {
  var n2 = e2.length;
  for (e2.sort(t2); n2--; ) e2[n2] = e2[n2].value;
  return e2;
}
var Et = Tt;
function Dt(e2, t2) {
  if (e2 !== t2) {
    var n2 = e2 !== void 0, r2 = e2 === null, i2 = e2 === e2, a2 = x(e2), o2 = t2 !== void 0, s2 = t2 === null, c2 = t2 === t2, l2 = x(t2);
    if (!s2 && !l2 && !a2 && e2 > t2 || a2 && o2 && c2 && !s2 && !l2 || r2 && o2 && c2 || !n2 && c2 || !i2) return 1;
    if (!r2 && !a2 && !l2 && e2 < t2 || l2 && n2 && i2 && !r2 && !a2 || s2 && n2 && i2 || !o2 && i2 || !c2) return -1;
  }
  return 0;
}
var Ot = Dt;
function kt(e2, t2, n2) {
  for (var r2 = -1, i2 = e2.criteria, a2 = t2.criteria, o2 = i2.length, s2 = n2.length; ++r2 < o2; ) {
    var c2 = Ot(i2[r2], a2[r2]);
    if (c2) return r2 >= s2 ? c2 : c2 * (n2[r2] == `desc` ? -1 : 1);
  }
  return e2.index - t2.index;
}
var At = kt;
function jt(e2, t2, n2) {
  t2 = t2.length ? g(t2, function(e3) {
    return h(e3) ? function(t3) {
      return le(t3, e3.length === 1 ? e3[0] : e3);
    } : e3;
  }) : [ne];
  var r2 = -1;
  return t2 = g(t2, ee(v)), Et(ye(e2, function(e3, n3, i2) {
    return { criteria: g(t2, function(t3) {
      return t3(e3);
    }), index: ++r2, value: e3 };
  }), function(e3, t3) {
    return At(e3, t3, n2);
  });
}
var Mt = jt, Nt = se(`length`), Pt = `\\ud800-\\udfff`, Ft = `\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff`, It = `\\ufe0e\\ufe0f`, Lt = `[` + Pt + `]`, P = `[` + Ft + `]`, F = `\\ud83c[\\udffb-\\udfff]`, Rt = `(?:` + P + `|` + F + `)`, zt = `[^` + Pt + `]`, Bt = `(?:\\ud83c[\\udde6-\\uddff]){2}`, Vt = `[\\ud800-\\udbff][\\udc00-\\udfff]`, Ht = `\\u200d`, Ut = Rt + `?`, Wt = `[` + It + `]?`, Gt = `(?:` + Ht + `(?:` + [zt, Bt, Vt].join(`|`) + `)` + Wt + Ut + `)*`, Kt = Wt + Ut + Gt, qt = `(?:` + [zt + P + `?`, P, Bt, Vt, Lt].join(`|`) + `)`, Jt = RegExp(F + `(?=` + F + `)|` + qt + Kt, `g`);
function Yt(e2) {
  for (var t2 = Jt.lastIndex = 0; Jt.test(e2); ) ++t2;
  return t2;
}
var Xt = Yt;
function Zt(e2) {
  return We(e2) ? Xt(e2) : Nt(e2);
}
var Qt = Zt;
function $t(e2, t2) {
  return wt(e2, t2, function(t3, n2) {
    return fe(e2, n2);
  });
}
var en = $t, I = Ve(function(e2, t2) {
  return e2 == null ? {} : en(e2, t2);
}), tn = Math.ceil, nn = Math.max;
function rn(e2, t2, n2, r2) {
  for (var i2 = -1, a2 = nn(tn((t2 - e2) / (n2 || 1)), 0), o2 = Array(a2); a2--; ) o2[r2 ? a2 : ++i2] = e2, e2 += n2;
  return o2;
}
var an = rn;
function on(e2) {
  return function(t2, n2, r2) {
    return r2 && typeof r2 != `number` && c(t2, n2, r2) && (n2 = r2 = void 0), t2 = O(t2), n2 === void 0 ? (n2 = t2, t2 = 0) : n2 = O(n2), r2 = r2 === void 0 ? t2 < n2 ? 1 : -1 : O(r2), an(t2, n2, r2, e2);
  };
}
var L = on(), sn = `[object Map]`, cn = `[object Set]`;
function ln(e2) {
  if (e2 == null) return 0;
  if (f(e2)) return _t(e2) ? Qt(e2) : e2.length;
  var t2 = ae(e2);
  return t2 == sn || t2 == cn ? e2.size : ie(e2).length;
}
var un = ln, R = i(function(e2, t2) {
  if (e2 == null) return [];
  var n2 = t2.length;
  return n2 > 1 && c(e2, t2[0], t2[1]) ? t2 = [] : n2 > 2 && c(t2[0], t2[1], t2[2]) && (t2 = [t2[0]]), Mt(e2, me(t2, 1), []);
}), dn = 0;
function fn(e2) {
  var t2 = ++dn;
  return ge(e2) + t2;
}
var z = fn;
function pn(e2, t2, n2) {
  for (var r2 = -1, i2 = e2.length, a2 = t2.length, o2 = {}; ++r2 < i2; ) {
    var s2 = r2 < a2 ? t2[r2] : void 0;
    n2(o2, e2[r2], s2);
  }
  return o2;
}
var mn = pn;
function hn(e2, n2) {
  return mn(e2 || [], n2 || [], t);
}
var gn = hn, _n = class {
  constructor() {
    var e2 = {};
    e2._next = e2._prev = e2, this._sentinel = e2;
  }
  dequeue() {
    var e2 = this._sentinel, t2 = e2._prev;
    if (t2 !== e2) return vn(t2), t2;
  }
  enqueue(e2) {
    var t2 = this._sentinel;
    e2._prev && e2._next && vn(e2), e2._next = t2._next, t2._next._prev = e2, t2._next = e2, e2._prev = t2;
  }
  toString() {
    for (var e2 = [], t2 = this._sentinel, n2 = t2._prev; n2 !== t2; ) e2.push(JSON.stringify(n2, yn)), n2 = n2._prev;
    return `[` + e2.join(`, `) + `]`;
  }
};
function vn(e2) {
  e2._prev._next = e2._next, e2._next._prev = e2._prev, delete e2._next, delete e2._prev;
}
function yn(e2, t2) {
  if (e2 !== `_next` && e2 !== `_prev`) return t2;
}
var bn = r(1);
function xn(e2, t2) {
  if (e2.nodeCount() <= 1) return [];
  var n2 = Cn(e2, t2 || bn);
  return w(S(Sn(n2.graph, n2.buckets, n2.zeroIdx), function(t3) {
    return e2.outEdges(t3.v, t3.w);
  }));
}
function Sn(e2, t2, n2) {
  for (var r2 = [], i2 = t2[t2.length - 1], a2 = t2[0], o2; e2.nodeCount(); ) {
    for (; o2 = a2.dequeue(); ) B(e2, t2, n2, o2);
    for (; o2 = i2.dequeue(); ) B(e2, t2, n2, o2);
    if (e2.nodeCount()) {
      for (var s2 = t2.length - 2; s2 > 0; --s2) if (o2 = t2[s2].dequeue(), o2) {
        r2 = r2.concat(B(e2, t2, n2, o2, true));
        break;
      }
    }
  }
  return r2;
}
function B(e2, t2, n2, r2, i2) {
  var a2 = i2 ? [] : void 0;
  return y(e2.inEdges(r2.v), function(r3) {
    var o2 = e2.edge(r3), s2 = e2.node(r3.v);
    i2 && a2.push({ v: r3.v, w: r3.w }), s2.out -= o2, V(t2, n2, s2);
  }), y(e2.outEdges(r2.v), function(r3) {
    var i3 = e2.edge(r3), a3 = r3.w, o2 = e2.node(a3);
    o2.in -= i3, V(t2, n2, o2);
  }), e2.removeNode(r2.v), a2;
}
function Cn(e2, t2) {
  var n2 = new D(), r2 = 0, i2 = 0;
  y(e2.nodes(), function(e3) {
    n2.setNode(e3, { v: e3, in: 0, out: 0 });
  }), y(e2.edges(), function(e3) {
    var a3 = n2.edge(e3.v, e3.w) || 0, o3 = t2(e3), s2 = a3 + o3;
    n2.setEdge(e3.v, e3.w, s2), i2 = Math.max(i2, n2.node(e3.v).out += o3), r2 = Math.max(r2, n2.node(e3.w).in += o3);
  });
  var a2 = L(i2 + r2 + 3).map(function() {
    return new _n();
  }), o2 = r2 + 1;
  return y(n2.nodes(), function(e3) {
    V(a2, o2, n2.node(e3));
  }), { graph: n2, buckets: a2, zeroIdx: o2 };
}
function V(e2, t2, n2) {
  n2.out ? n2.in ? e2[n2.out - n2.in + t2].enqueue(n2) : e2[e2.length - 1].enqueue(n2) : e2[0].enqueue(n2);
}
function wn(e2) {
  y(e2.graph().acyclicer === `greedy` ? xn(e2, t2(e2)) : Tn(e2), function(t3) {
    var n2 = e2.edge(t3);
    e2.removeEdge(t3), n2.forwardName = t3.name, n2.reversed = true, e2.setEdge(t3.w, t3.v, n2, z(`rev`));
  });
  function t2(e3) {
    return function(t3) {
      return e3.edge(t3).weight;
    };
  }
}
function Tn(e2) {
  var t2 = [], n2 = {}, r2 = {};
  function i2(a2) {
    Object.prototype.hasOwnProperty.call(r2, a2) || (r2[a2] = true, n2[a2] = true, y(e2.outEdges(a2), function(e3) {
      Object.prototype.hasOwnProperty.call(n2, e3.w) ? t2.push(e3) : i2(e3.w);
    }), delete n2[a2]);
  }
  return y(e2.nodes(), i2), t2;
}
function En(e2) {
  y(e2.edges(), function(t2) {
    var n2 = e2.edge(t2);
    if (n2.reversed) {
      e2.removeEdge(t2);
      var r2 = n2.forwardName;
      delete n2.reversed, delete n2.forwardName, e2.setEdge(t2.w, t2.v, n2, r2);
    }
  });
}
function H(e2, t2, n2, r2) {
  var i2;
  do
    i2 = z(r2);
  while (e2.hasNode(i2));
  return n2.dummy = t2, e2.setNode(i2, n2), i2;
}
function Dn(e2) {
  var t2 = new D().setGraph(e2.graph());
  return y(e2.nodes(), function(n2) {
    t2.setNode(n2, e2.node(n2));
  }), y(e2.edges(), function(n2) {
    var r2 = t2.edge(n2.v, n2.w) || { weight: 0, minlen: 1 }, i2 = e2.edge(n2);
    t2.setEdge(n2.v, n2.w, { weight: r2.weight + i2.weight, minlen: Math.max(r2.minlen, i2.minlen) });
  }), t2;
}
function On(e2) {
  var t2 = new D({ multigraph: e2.isMultigraph() }).setGraph(e2.graph());
  return y(e2.nodes(), function(n2) {
    e2.children(n2).length || t2.setNode(n2, e2.node(n2));
  }), y(e2.edges(), function(n2) {
    t2.setEdge(n2, e2.edge(n2));
  }), t2;
}
function kn(e2, t2) {
  var n2 = e2.x, r2 = e2.y, i2 = t2.x - n2, a2 = t2.y - r2, o2 = e2.width / 2, s2 = e2.height / 2;
  if (!i2 && !a2) throw Error(`Not possible to find intersection inside of the rectangle`);
  var c2, l2;
  return Math.abs(a2) * o2 > Math.abs(i2) * s2 ? (a2 < 0 && (s2 = -s2), c2 = s2 * i2 / a2, l2 = s2) : (i2 < 0 && (o2 = -o2), c2 = o2, l2 = o2 * a2 / i2), { x: n2 + c2, y: r2 + l2 };
}
function U(e2) {
  var t2 = S(L(Nn(e2) + 1), function() {
    return [];
  });
  return y(e2.nodes(), function(n2) {
    var r2 = e2.node(n2), i2 = r2.rank;
    T(i2) || (t2[i2][r2.order] = n2);
  }), t2;
}
function An(e2) {
  var t2 = C(S(e2.nodes(), function(t3) {
    return e2.node(t3).rank;
  }));
  y(e2.nodes(), function(n2) {
    var r2 = e2.node(n2);
    mt(r2, `rank`) && (r2.rank -= t2);
  });
}
function jn(e2) {
  var t2 = C(S(e2.nodes(), function(t3) {
    return e2.node(t3).rank;
  })), n2 = [];
  y(e2.nodes(), function(r3) {
    var i3 = e2.node(r3).rank - t2;
    n2[i3] || (n2[i3] = []), n2[i3].push(r3);
  });
  var r2 = 0, i2 = e2.graph().nodeRankFactor;
  y(n2, function(t3, n3) {
    T(t3) && n3 % i2 !== 0 ? --r2 : r2 && y(t3, function(t4) {
      e2.node(t4).rank += r2;
    });
  });
}
function Mn(e2, t2, n2, r2) {
  var i2 = { width: 0, height: 0 };
  return arguments.length >= 4 && (i2.rank = n2, i2.order = r2), H(e2, `border`, i2, t2);
}
function Nn(e2) {
  return M(S(e2.nodes(), function(t2) {
    var n2 = e2.node(t2).rank;
    if (!T(n2)) return n2;
  }));
}
function Pn(e2, t2) {
  var n2 = { lhs: [], rhs: [] };
  return y(e2, function(e3) {
    t2(e3) ? n2.lhs.push(e3) : n2.rhs.push(e3);
  }), n2;
}
function Fn(e2, t2) {
  var n2 = Ye();
  try {
    return t2();
  } finally {
    console.log(e2 + ` time: ` + (Ye() - n2) + `ms`);
  }
}
function In(e2, t2) {
  return t2();
}
function Ln(e2) {
  function t2(n2) {
    var r2 = e2.children(n2), i2 = e2.node(n2);
    if (r2.length && y(r2, t2), Object.prototype.hasOwnProperty.call(i2, `minRank`)) {
      i2.borderLeft = [], i2.borderRight = [];
      for (var a2 = i2.minRank, o2 = i2.maxRank + 1; a2 < o2; ++a2) Rn(e2, `borderLeft`, `_bl`, n2, i2, a2), Rn(e2, `borderRight`, `_br`, n2, i2, a2);
    }
  }
  y(e2.children(), t2);
}
function Rn(e2, t2, n2, r2, i2, a2) {
  var o2 = { width: 0, height: 0, rank: a2, borderType: t2 }, s2 = i2[t2][a2 - 1], c2 = H(e2, `border`, o2, n2);
  i2[t2][a2] = c2, e2.setParent(c2, r2), s2 && e2.setEdge(s2, c2, { weight: 1 });
}
function zn(e2) {
  var t2 = e2.graph().rankdir.toLowerCase();
  (t2 === `lr` || t2 === `rl`) && Vn(e2);
}
function Bn(e2) {
  var t2 = e2.graph().rankdir.toLowerCase();
  (t2 === `bt` || t2 === `rl`) && Un(e2), (t2 === `lr` || t2 === `rl`) && (Wn(e2), Vn(e2));
}
function Vn(e2) {
  y(e2.nodes(), function(t2) {
    Hn(e2.node(t2));
  }), y(e2.edges(), function(t2) {
    Hn(e2.edge(t2));
  });
}
function Hn(e2) {
  var t2 = e2.width;
  e2.width = e2.height, e2.height = t2;
}
function Un(e2) {
  y(e2.nodes(), function(t2) {
    W(e2.node(t2));
  }), y(e2.edges(), function(t2) {
    var n2 = e2.edge(t2);
    y(n2.points, W), Object.prototype.hasOwnProperty.call(n2, `y`) && W(n2);
  });
}
function W(e2) {
  e2.y = -e2.y;
}
function Wn(e2) {
  y(e2.nodes(), function(t2) {
    G(e2.node(t2));
  }), y(e2.edges(), function(t2) {
    var n2 = e2.edge(t2);
    y(n2.points, G), Object.prototype.hasOwnProperty.call(n2, `x`) && G(n2);
  });
}
function G(e2) {
  var t2 = e2.x;
  e2.x = e2.y, e2.y = t2;
}
function Gn(e2) {
  e2.graph().dummyChains = [], y(e2.edges(), function(t2) {
    Kn(e2, t2);
  });
}
function Kn(e2, t2) {
  var n2 = t2.v, r2 = e2.node(n2).rank, i2 = t2.w, a2 = e2.node(i2).rank, o2 = t2.name, s2 = e2.edge(t2), c2 = s2.labelRank;
  if (a2 !== r2 + 1) {
    e2.removeEdge(t2);
    var l2 = void 0, u2, d2;
    for (d2 = 0, ++r2; r2 < a2; ++d2, ++r2) s2.points = [], l2 = { width: 0, height: 0, edgeLabel: s2, edgeObj: t2, rank: r2 }, u2 = H(e2, `edge`, l2, `_d`), r2 === c2 && (l2.width = s2.width, l2.height = s2.height, l2.dummy = `edge-label`, l2.labelpos = s2.labelpos), e2.setEdge(n2, u2, { weight: s2.weight }, o2), d2 === 0 && e2.graph().dummyChains.push(u2), n2 = u2;
    e2.setEdge(n2, i2, { weight: s2.weight }, o2);
  }
}
function qn(e2) {
  y(e2.graph().dummyChains, function(t2) {
    var n2 = e2.node(t2), r2 = n2.edgeLabel, i2;
    for (e2.setEdge(n2.edgeObj, r2); n2.dummy; ) i2 = e2.successors(t2)[0], e2.removeNode(t2), r2.points.push({ x: n2.x, y: n2.y }), n2.dummy === `edge-label` && (r2.x = n2.x, r2.y = n2.y, r2.width = n2.width, r2.height = n2.height), t2 = i2, n2 = e2.node(t2);
  });
}
function K(e2) {
  var t2 = {};
  function n2(r2) {
    var i2 = e2.node(r2);
    if (Object.prototype.hasOwnProperty.call(t2, r2)) return i2.rank;
    t2[r2] = true;
    var a2 = C(S(e2.outEdges(r2), function(t3) {
      return n2(t3.w) - e2.edge(t3).minlen;
    }));
    return (a2 === 1 / 0 || a2 == null) && (a2 = 0), i2.rank = a2;
  }
  y(e2.sources(), n2);
}
function q(e2, t2) {
  return e2.node(t2.w).rank - e2.node(t2.v).rank - e2.edge(t2).minlen;
}
function Jn(e2) {
  var t2 = new D({ directed: false }), n2 = e2.nodes()[0], r2 = e2.nodeCount();
  t2.setNode(n2, {});
  for (var i2, a2; Yn(t2, e2) < r2; ) i2 = Xn(t2, e2), a2 = t2.hasNode(i2.v) ? q(e2, i2) : -q(e2, i2), Zn(t2, e2, a2);
  return t2;
}
function Yn(e2, t2) {
  function n2(r2) {
    y(t2.nodeEdges(r2), function(i2) {
      var a2 = i2.v, o2 = r2 === a2 ? i2.w : a2;
      !e2.hasNode(o2) && !q(t2, i2) && (e2.setNode(o2, {}), e2.setEdge(r2, o2, {}), n2(o2));
    });
  }
  return y(e2.nodes(), n2), e2.nodeCount();
}
function Xn(e2, t2) {
  return N(t2.edges(), function(n2) {
    if (e2.hasNode(n2.v) !== e2.hasNode(n2.w)) return q(t2, n2);
  });
}
function Zn(e2, t2, n2) {
  y(e2.nodes(), function(e3) {
    t2.node(e3).rank += n2;
  });
}
r(1), r(1), Qn.CycleException = J;
function Qn(e2) {
  var t2 = {}, n2 = {}, r2 = [];
  function i2(a2) {
    if (Object.prototype.hasOwnProperty.call(n2, a2)) throw new J();
    Object.prototype.hasOwnProperty.call(t2, a2) || (n2[a2] = true, t2[a2] = true, y(e2.predecessors(a2), i2), delete n2[a2], r2.push(a2));
  }
  if (y(e2.sinks(), i2), un(t2) !== e2.nodeCount()) throw new J();
  return r2;
}
function J() {
}
J.prototype = Error();
function $n(e2, t2, n2) {
  h(t2) || (t2 = [t2]);
  var r2 = (e2.isDirected() ? e2.successors : e2.neighbors).bind(e2), i2 = [], a2 = {};
  return y(t2, function(t3) {
    if (!e2.hasNode(t3)) throw Error(`Graph does not have node: ` + t3);
    er(e2, t3, n2 === `post`, a2, r2, i2);
  }), i2;
}
function er(e2, t2, n2, r2, i2, a2) {
  Object.prototype.hasOwnProperty.call(r2, t2) || (r2[t2] = true, n2 || a2.push(t2), y(i2(t2), function(t3) {
    er(e2, t3, n2, r2, i2, a2);
  }), n2 && a2.push(t2));
}
function tr(e2, t2) {
  return $n(e2, t2, `post`);
}
function nr(e2, t2) {
  return $n(e2, t2, `pre`);
}
Y.initLowLimValues = Z, Y.initCutValues = X, Y.calcCutValue = ir, Y.leaveEdge = or, Y.enterEdge = sr, Y.exchangeEdges = cr;
function Y(e2) {
  e2 = Dn(e2), K(e2);
  var t2 = Jn(e2);
  Z(t2), X(t2, e2);
  for (var n2, r2; n2 = or(t2); ) r2 = sr(t2, e2, n2), cr(t2, e2, n2, r2);
}
function X(e2, t2) {
  var n2 = tr(e2, e2.nodes());
  n2 = n2.slice(0, n2.length - 1), y(n2, function(n3) {
    rr(e2, t2, n3);
  });
}
function rr(e2, t2, n2) {
  var r2 = e2.node(n2).parent;
  e2.edge(n2, r2).cutvalue = ir(e2, t2, n2);
}
function ir(e2, t2, n2) {
  var r2 = e2.node(n2).parent, i2 = true, a2 = t2.edge(n2, r2), o2 = 0;
  return a2 || (a2 = (i2 = false, t2.edge(r2, n2))), o2 = a2.weight, y(t2.nodeEdges(n2), function(a3) {
    var s2 = a3.v === n2, c2 = s2 ? a3.w : a3.v;
    if (c2 !== r2) {
      var l2 = s2 === i2, u2 = t2.edge(a3).weight;
      if (o2 += l2 ? u2 : -u2, ur(e2, n2, c2)) {
        var d2 = e2.edge(n2, c2).cutvalue;
        o2 += l2 ? -d2 : d2;
      }
    }
  }), o2;
}
function Z(e2, t2) {
  arguments.length < 2 && (t2 = e2.nodes()[0]), ar(e2, {}, 1, t2);
}
function ar(e2, t2, n2, r2, i2) {
  var a2 = n2, o2 = e2.node(r2);
  return t2[r2] = true, y(e2.neighbors(r2), function(i3) {
    Object.prototype.hasOwnProperty.call(t2, i3) || (n2 = ar(e2, t2, n2, i3, r2));
  }), o2.low = a2, o2.lim = n2++, i2 ? o2.parent = i2 : delete o2.parent, n2;
}
function or(e2) {
  return A(e2.edges(), function(t2) {
    return e2.edge(t2).cutvalue < 0;
  });
}
function sr(e2, t2, n2) {
  var r2 = n2.v, i2 = n2.w;
  t2.hasEdge(r2, i2) || (r2 = n2.w, i2 = n2.v);
  var a2 = e2.node(r2), o2 = e2.node(i2), s2 = a2, c2 = false;
  return a2.lim > o2.lim && (s2 = o2, c2 = true), N(_(t2.edges(), function(t3) {
    return c2 === dr(e2, e2.node(t3.v), s2) && c2 !== dr(e2, e2.node(t3.w), s2);
  }), function(e3) {
    return q(t2, e3);
  });
}
function cr(e2, t2, n2, r2) {
  var i2 = n2.v, a2 = n2.w;
  e2.removeEdge(i2, a2), e2.setEdge(r2.v, r2.w, {}), Z(e2), X(e2, t2), lr(e2, t2);
}
function lr(e2, t2) {
  var n2 = nr(e2, A(e2.nodes(), function(e3) {
    return !t2.node(e3).parent;
  }));
  n2 = n2.slice(1), y(n2, function(n3) {
    var r2 = e2.node(n3).parent, i2 = t2.edge(n3, r2), a2 = false;
    i2 || (i2 = t2.edge(r2, n3), a2 = true), t2.node(n3).rank = t2.node(r2).rank + (a2 ? i2.minlen : -i2.minlen);
  });
}
function ur(e2, t2, n2) {
  return e2.hasEdge(t2, n2);
}
function dr(e2, t2, n2) {
  return n2.low <= t2.lim && t2.lim <= n2.lim;
}
function fr(e2) {
  switch (e2.graph().ranker) {
    case `network-simplex`:
      hr(e2);
      break;
    case `tight-tree`:
      mr(e2);
      break;
    case `longest-path`:
      pr(e2);
      break;
    default:
      hr(e2);
  }
}
var pr = K;
function mr(e2) {
  K(e2), Jn(e2);
}
function hr(e2) {
  Y(e2);
}
function gr(e2) {
  var t2 = H(e2, `root`, {}, `_root`), n2 = vr(e2), r2 = M(E(n2)) - 1, i2 = 2 * r2 + 1;
  e2.graph().nestingRoot = t2, y(e2.edges(), function(t3) {
    e2.edge(t3).minlen *= i2;
  });
  var a2 = yr(e2) + 1;
  y(e2.children(), function(o2) {
    _r(e2, t2, i2, a2, r2, n2, o2);
  }), e2.graph().nodeRankFactor = i2;
}
function _r(e2, t2, n2, r2, i2, a2, o2) {
  var s2 = e2.children(o2);
  if (!s2.length) {
    o2 !== t2 && e2.setEdge(t2, o2, { weight: 0, minlen: n2 });
    return;
  }
  var c2 = Mn(e2, `_bt`), l2 = Mn(e2, `_bb`), u2 = e2.node(o2);
  e2.setParent(c2, o2), u2.borderTop = c2, e2.setParent(l2, o2), u2.borderBottom = l2, y(s2, function(s3) {
    _r(e2, t2, n2, r2, i2, a2, s3);
    var u3 = e2.node(s3), d2 = u3.borderTop ? u3.borderTop : s3, f2 = u3.borderBottom ? u3.borderBottom : s3, p2 = u3.borderTop ? r2 : 2 * r2, m2 = d2 === f2 ? i2 - a2[o2] + 1 : 1;
    e2.setEdge(c2, d2, { weight: p2, minlen: m2, nestingEdge: true }), e2.setEdge(f2, l2, { weight: p2, minlen: m2, nestingEdge: true });
  }), e2.parent(o2) || e2.setEdge(t2, c2, { weight: 0, minlen: i2 + a2[o2] });
}
function vr(e2) {
  var t2 = {};
  function n2(r2, i2) {
    var a2 = e2.children(r2);
    a2 && a2.length && y(a2, function(e3) {
      n2(e3, i2 + 1);
    }), t2[r2] = i2;
  }
  return y(e2.children(), function(e3) {
    n2(e3, 1);
  }), t2;
}
function yr(e2) {
  return b(e2.edges(), function(t2, n2) {
    return t2 + e2.edge(n2).weight;
  }, 0);
}
function br(e2) {
  var t2 = e2.graph();
  e2.removeNode(t2.nestingRoot), delete t2.nestingRoot, y(e2.edges(), function(t3) {
    e2.edge(t3).nestingEdge && e2.removeEdge(t3);
  });
}
function xr(e2, t2, n2) {
  var r2 = {}, i2;
  y(n2, function(n3) {
    for (var a2 = e2.parent(n3), o2, s2; a2; ) {
      if (o2 = e2.parent(a2), o2 ? (s2 = r2[o2], r2[o2] = a2) : (s2 = i2, i2 = a2), s2 && s2 !== a2) {
        t2.setEdge(s2, a2);
        return;
      }
      a2 = o2;
    }
  });
}
function Sr(e2, t2, n2) {
  var r2 = Cr(e2), i2 = new D({ compound: true }).setGraph({ root: r2 }).setDefaultNodeLabel(function(t3) {
    return e2.node(t3);
  });
  return y(e2.nodes(), function(a2) {
    var o2 = e2.node(a2), s2 = e2.parent(a2);
    (o2.rank === t2 || o2.minRank <= t2 && t2 <= o2.maxRank) && (i2.setNode(a2), i2.setParent(a2, s2 || r2), y(e2[n2](a2), function(t3) {
      var n3 = t3.v === a2 ? t3.w : t3.v, r3 = i2.edge(n3, a2), o3 = T(r3) ? 0 : r3.weight;
      i2.setEdge(n3, a2, { weight: e2.edge(t3).weight + o3 });
    }), Object.prototype.hasOwnProperty.call(o2, `minRank`) && i2.setNode(a2, { borderLeft: o2.borderLeft[t2], borderRight: o2.borderRight[t2] }));
  }), i2;
}
function Cr(e2) {
  for (var t2; e2.hasNode(t2 = z(`_root`)); ) ;
  return t2;
}
function wr(e2, t2) {
  for (var n2 = 0, r2 = 1; r2 < t2.length; ++r2) n2 += Tr(e2, t2[r2 - 1], t2[r2]);
  return n2;
}
function Tr(e2, t2, n2) {
  for (var r2 = gn(n2, S(n2, function(e3, t3) {
    return t3;
  })), i2 = w(S(t2, function(t3) {
    return R(S(e2.outEdges(t3), function(t4) {
      return { pos: r2[t4.w], weight: e2.edge(t4).weight };
    }), `pos`);
  })), a2 = 1; a2 < n2.length; ) a2 <<= 1;
  var o2 = 2 * a2 - 1;
  --a2;
  var s2 = S(Array(o2), function() {
    return 0;
  }), c2 = 0;
  return y(i2.forEach(function(e3) {
    var t3 = e3.pos + a2;
    s2[t3] += e3.weight;
    for (var n3 = 0; t3 > 0; ) t3 % 2 && (n3 += s2[t3 + 1]), t3 = t3 - 1 >> 1, s2[t3] += e3.weight;
    c2 += e3.weight * n3;
  })), c2;
}
function Er(e2) {
  var t2 = {}, n2 = _(e2.nodes(), function(t3) {
    return !e2.children(t3).length;
  }), r2 = S(L(M(S(n2, function(t3) {
    return e2.node(t3).rank;
  })) + 1), function() {
    return [];
  });
  function i2(n3) {
    mt(t2, n3) || (t2[n3] = true, r2[e2.node(n3).rank].push(n3), y(e2.successors(n3), i2));
  }
  return y(R(n2, function(t3) {
    return e2.node(t3).rank;
  }), i2), r2;
}
function Dr(e2, t2) {
  return S(t2, function(t3) {
    var n2 = e2.inEdges(t3);
    if (n2.length) {
      var r2 = b(n2, function(t4, n3) {
        var r3 = e2.edge(n3), i2 = e2.node(n3.v);
        return { sum: t4.sum + r3.weight * i2.order, weight: t4.weight + r3.weight };
      }, { sum: 0, weight: 0 });
      return { v: t3, barycenter: r2.sum / r2.weight, weight: r2.weight };
    } else return { v: t3 };
  });
}
function Or(e2, t2) {
  var n2 = {};
  return y(e2, function(e3, t3) {
    var r2 = n2[e3.v] = { indegree: 0, in: [], out: [], vs: [e3.v], i: t3 };
    T(e3.barycenter) || (r2.barycenter = e3.barycenter, r2.weight = e3.weight);
  }), y(t2.edges(), function(e3) {
    var t3 = n2[e3.v], r2 = n2[e3.w];
    !T(t3) && !T(r2) && (r2.indegree++, t3.out.push(n2[e3.w]));
  }), kr(_(n2, function(e3) {
    return !e3.indegree;
  }));
}
function kr(e2) {
  var t2 = [];
  function n2(e3) {
    return function(t3) {
      t3.merged || (T(t3.barycenter) || T(e3.barycenter) || t3.barycenter >= e3.barycenter) && Ar(e3, t3);
    };
  }
  function r2(t3) {
    return function(n3) {
      n3.in.push(t3), --n3.indegree === 0 && e2.push(n3);
    };
  }
  for (; e2.length; ) {
    var i2 = e2.pop();
    t2.push(i2), y(i2.in.reverse(), n2(i2)), y(i2.out, r2(i2));
  }
  return S(_(t2, function(e3) {
    return !e3.merged;
  }), function(e3) {
    return I(e3, [`vs`, `i`, `barycenter`, `weight`]);
  });
}
function Ar(e2, t2) {
  var n2 = 0, r2 = 0;
  e2.weight && (n2 += e2.barycenter * e2.weight, r2 += e2.weight), t2.weight && (n2 += t2.barycenter * t2.weight, r2 += t2.weight), e2.vs = t2.vs.concat(e2.vs), e2.barycenter = n2 / r2, e2.weight = r2, e2.i = Math.min(t2.i, e2.i), t2.merged = true;
}
function jr(e2, t2) {
  var n2 = Pn(e2, function(e3) {
    return Object.prototype.hasOwnProperty.call(e3, `barycenter`);
  }), r2 = n2.lhs, i2 = R(n2.rhs, function(e3) {
    return -e3.i;
  }), a2 = [], o2 = 0, s2 = 0, c2 = 0;
  r2.sort(Nr(!!t2)), c2 = Mr(a2, i2, c2), y(r2, function(e3) {
    c2 += e3.vs.length, a2.push(e3.vs), o2 += e3.barycenter * e3.weight, s2 += e3.weight, c2 = Mr(a2, i2, c2);
  });
  var l2 = { vs: w(a2) };
  return s2 && (l2.barycenter = o2 / s2, l2.weight = s2), l2;
}
function Mr(e2, t2, n2) {
  for (var r2; t2.length && (r2 = k(t2)).i <= n2; ) t2.pop(), e2.push(r2.vs), n2++;
  return n2;
}
function Nr(e2) {
  return function(t2, n2) {
    return t2.barycenter < n2.barycenter ? -1 : t2.barycenter > n2.barycenter ? 1 : e2 ? n2.i - t2.i : t2.i - n2.i;
  };
}
function Pr(e2, t2, n2, r2) {
  var i2 = e2.children(t2), a2 = e2.node(t2), o2 = a2 ? a2.borderLeft : void 0, s2 = a2 ? a2.borderRight : void 0, c2 = {};
  o2 && (i2 = _(i2, function(e3) {
    return e3 !== o2 && e3 !== s2;
  }));
  var l2 = Dr(e2, i2);
  y(l2, function(t3) {
    if (e2.children(t3.v).length) {
      var i3 = Pr(e2, t3.v, n2, r2);
      c2[t3.v] = i3, Object.prototype.hasOwnProperty.call(i3, `barycenter`) && Ir(t3, i3);
    }
  });
  var u2 = Or(l2, n2);
  Fr(u2, c2);
  var d2 = jr(u2, r2);
  if (o2 && (d2.vs = w([o2, d2.vs, s2]), e2.predecessors(o2).length)) {
    var f2 = e2.node(e2.predecessors(o2)[0]), p2 = e2.node(e2.predecessors(s2)[0]);
    Object.prototype.hasOwnProperty.call(d2, `barycenter`) || (d2.barycenter = 0, d2.weight = 0), d2.barycenter = (d2.barycenter * d2.weight + f2.order + p2.order) / (d2.weight + 2), d2.weight += 2;
  }
  return d2;
}
function Fr(e2, t2) {
  y(e2, function(e3) {
    e3.vs = w(e3.vs.map(function(e4) {
      return t2[e4] ? t2[e4].vs : e4;
    }));
  });
}
function Ir(e2, t2) {
  T(e2.barycenter) ? (e2.barycenter = t2.barycenter, e2.weight = t2.weight) : (e2.barycenter = (e2.barycenter * e2.weight + t2.barycenter * t2.weight) / (e2.weight + t2.weight), e2.weight += t2.weight);
}
function Lr(e2) {
  var t2 = Nn(e2), n2 = Rr(e2, L(1, t2 + 1), `inEdges`), r2 = Rr(e2, L(t2 - 1, -1, -1), `outEdges`), i2 = Er(e2);
  Br(e2, i2);
  for (var a2 = 1 / 0, o2, s2 = 0, c2 = 0; c2 < 4; ++s2, ++c2) {
    zr(s2 % 2 ? n2 : r2, s2 % 4 >= 2), i2 = U(e2);
    var l2 = wr(e2, i2);
    l2 < a2 && (c2 = 0, o2 = Je(i2), a2 = l2);
  }
  Br(e2, o2);
}
function Rr(e2, t2, n2) {
  return S(t2, function(t3) {
    return Sr(e2, t3, n2);
  });
}
function zr(e2, t2) {
  var n2 = new D();
  y(e2, function(e3) {
    var r2 = e3.graph().root, i2 = Pr(e3, r2, n2, t2);
    y(i2.vs, function(t3, n3) {
      e3.node(t3).order = n3;
    }), xr(e3, n2, i2.vs);
  });
}
function Br(e2, t2) {
  y(t2, function(t3) {
    y(t3, function(t4, n2) {
      e2.node(t4).order = n2;
    });
  });
}
function Vr(e2) {
  var t2 = Ur(e2);
  y(e2.graph().dummyChains, function(n2) {
    for (var r2 = e2.node(n2), i2 = r2.edgeObj, a2 = Hr(e2, t2, i2.v, i2.w), o2 = a2.path, s2 = a2.lca, c2 = 0, l2 = o2[c2], u2 = true; n2 !== i2.w; ) {
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
function Hr(e2, t2, n2, r2) {
  var i2 = [], a2 = [], o2 = Math.min(t2[n2].low, t2[r2].low), s2 = Math.max(t2[n2].lim, t2[r2].lim), c2 = n2, l2;
  do
    c2 = e2.parent(c2), i2.push(c2);
  while (c2 && (t2[c2].low > o2 || s2 > t2[c2].lim));
  for (l2 = c2, c2 = r2; (c2 = e2.parent(c2)) !== l2; ) a2.push(c2);
  return { path: i2.concat(a2.reverse()), lca: l2 };
}
function Ur(e2) {
  var t2 = {}, n2 = 0;
  function r2(i2) {
    var a2 = n2;
    y(e2.children(i2), r2), t2[i2] = { low: a2, lim: n2++ };
  }
  return y(e2.children(), r2), t2;
}
function Wr(e2, t2) {
  var n2 = {};
  function r2(t3, r3) {
    var i2 = 0, a2 = 0, o2 = t3.length, s2 = k(r3);
    return y(r3, function(t4, c2) {
      var l2 = Kr(e2, t4), u2 = l2 ? e2.node(l2).order : o2;
      (l2 || t4 === s2) && (y(r3.slice(a2, c2 + 1), function(t5) {
        y(e2.predecessors(t5), function(r4) {
          var a3 = e2.node(r4), o3 = a3.order;
          (o3 < i2 || u2 < o3) && !(a3.dummy && e2.node(t5).dummy) && qr(n2, r4, t5);
        });
      }), a2 = c2 + 1, i2 = u2);
    }), r3;
  }
  return b(t2, r2), n2;
}
function Gr(e2, t2) {
  var n2 = {};
  function r2(t3, r3, i3, a2, o2) {
    var s2;
    y(L(r3, i3), function(r4) {
      s2 = t3[r4], e2.node(s2).dummy && y(e2.predecessors(s2), function(t4) {
        var r5 = e2.node(t4);
        r5.dummy && (r5.order < a2 || r5.order > o2) && qr(n2, t4, s2);
      });
    });
  }
  function i2(t3, n3) {
    var i3 = -1, a2, o2 = 0;
    return y(n3, function(s2, c2) {
      if (e2.node(s2).dummy === `border`) {
        var l2 = e2.predecessors(s2);
        l2.length && (a2 = e2.node(l2[0]).order, r2(n3, o2, c2, i3, a2), o2 = c2, i3 = a2);
      }
      r2(n3, o2, n3.length, a2, t3.length);
    }), n3;
  }
  return b(t2, i2), n2;
}
function Kr(e2, t2) {
  if (e2.node(t2).dummy) return A(e2.predecessors(t2), function(t3) {
    return e2.node(t3).dummy;
  });
}
function qr(e2, t2, n2) {
  if (t2 > n2) {
    var r2 = t2;
    t2 = n2, n2 = r2;
  }
  Object.prototype.hasOwnProperty.call(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, configurable: true, value: {}, writable: true });
  var i2 = e2[t2];
  Object.defineProperty(i2, n2, { enumerable: true, configurable: true, value: true, writable: true });
}
function Jr(e2, t2, n2) {
  if (t2 > n2) {
    var r2 = t2;
    t2 = n2, n2 = r2;
  }
  return !!e2[t2] && Object.prototype.hasOwnProperty.call(e2[t2], n2);
}
function Yr(e2, t2, n2, r2) {
  var i2 = {}, a2 = {}, o2 = {};
  return y(t2, function(e3) {
    y(e3, function(e4, t3) {
      i2[e4] = e4, a2[e4] = e4, o2[e4] = t3;
    });
  }), y(t2, function(e3) {
    var t3 = -1;
    y(e3, function(e4) {
      var s2 = r2(e4);
      if (s2.length) {
        s2 = R(s2, function(e5) {
          return o2[e5];
        });
        for (var c2 = (s2.length - 1) / 2, l2 = Math.floor(c2), u2 = Math.ceil(c2); l2 <= u2; ++l2) {
          var d2 = s2[l2];
          a2[e4] === e4 && t3 < o2[d2] && !Jr(n2, e4, d2) && (a2[d2] = e4, a2[e4] = i2[e4] = i2[d2], t3 = o2[d2]);
        }
      }
    });
  }), { root: i2, align: a2 };
}
function Xr(e2, t2, n2, r2, i2) {
  var a2 = {}, o2 = Zr(e2, t2, n2, i2), s2 = i2 ? `borderLeft` : `borderRight`;
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
  return c2(l2, o2.predecessors.bind(o2)), c2(u2, o2.successors.bind(o2)), y(r2, function(e3) {
    a2[e3] = a2[n2[e3]];
  }), a2;
}
function Zr(e2, t2, n2, r2) {
  var i2 = new D(), a2 = e2.graph(), o2 = ni(a2.nodesep, a2.edgesep, r2);
  return y(t2, function(t3) {
    var r3;
    y(t3, function(t4) {
      var a3 = n2[t4];
      if (i2.setNode(a3), r3) {
        var s2 = n2[r3], c2 = i2.edge(s2, a3);
        i2.setEdge(s2, a3, Math.max(o2(e2, t4, r3), c2 || 0));
      }
      r3 = t4;
    });
  }), i2;
}
function Qr(e2, t2) {
  return N(E(t2), function(t3) {
    var n2 = -1 / 0, r2 = 1 / 0;
    return at(t3, function(t4, i2) {
      var a2 = ri(e2, i2) / 2;
      n2 = Math.max(t4 + a2, n2), r2 = Math.min(t4 - a2, r2);
    }), n2 - r2;
  });
}
function $r(e2, t2) {
  var n2 = E(t2), r2 = C(n2), i2 = M(n2);
  y([`u`, `d`], function(n3) {
    y([`l`, `r`], function(a2) {
      var o2 = n3 + a2, s2 = e2[o2], c2;
      if (s2 !== t2) {
        var l2 = E(s2);
        c2 = a2 === `l` ? r2 - C(l2) : i2 - M(l2), c2 && (e2[o2] = j(s2, function(e3) {
          return e3 + c2;
        }));
      }
    });
  });
}
function ei(e2, t2) {
  return j(e2.ul, function(n2, r2) {
    if (t2) return e2[t2.toLowerCase()][r2];
    var i2 = R(S(e2, r2));
    return (i2[1] + i2[2]) / 2;
  });
}
function ti(e2) {
  var t2 = U(e2), n2 = a(Wr(e2, t2), Gr(e2, t2)), r2 = {}, i2;
  return y([`u`, `d`], function(a2) {
    i2 = a2 === `u` ? t2 : E(t2).reverse(), y([`l`, `r`], function(t3) {
      t3 === `r` && (i2 = S(i2, function(e3) {
        return E(e3).reverse();
      }));
      var o2 = (a2 === `u` ? e2.predecessors : e2.successors).bind(e2), s2 = Yr(e2, i2, n2, o2), c2 = Xr(e2, i2, s2.root, s2.align, t3 === `r`);
      t3 === `r` && (c2 = j(c2, function(e3) {
        return -e3;
      })), r2[a2 + t3] = c2;
    });
  }), $r(r2, Qr(e2, r2)), ei(r2, e2.graph().align);
}
function ni(e2, t2, n2) {
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
function ri(e2, t2) {
  return e2.node(t2).width;
}
function ii(e2) {
  e2 = On(e2), ai(e2), st(ti(e2), function(t2, n2) {
    e2.node(n2).x = t2;
  });
}
function ai(e2) {
  var t2 = U(e2), n2 = e2.graph().ranksep, r2 = 0;
  y(t2, function(t3) {
    var i2 = M(S(t3, function(t4) {
      return e2.node(t4).height;
    }));
    y(t3, function(t4) {
      e2.node(t4).y = r2 + i2 / 2;
    }), r2 += i2 + n2;
  });
}
function oi(e2, t2) {
  var n2 = t2 && t2.debugTiming ? Fn : In;
  n2(`layout`, () => {
    var t3 = n2(`  buildLayoutGraph`, () => _i(e2));
    n2(`  runLayout`, () => si(t3, n2)), n2(`  updateInputGraph`, () => ci(e2, t3));
  });
}
function si(e2, t2) {
  t2(`    makeSpaceForEdgeLabels`, () => vi(e2)), t2(`    removeSelfEdges`, () => Di(e2)), t2(`    acyclic`, () => wn(e2)), t2(`    nestingGraph.run`, () => gr(e2)), t2(`    rank`, () => fr(On(e2))), t2(`    injectEdgeLabelProxies`, () => yi(e2)), t2(`    removeEmptyRanks`, () => jn(e2)), t2(`    nestingGraph.cleanup`, () => br(e2)), t2(`    normalizeRanks`, () => An(e2)), t2(`    assignRankMinMax`, () => bi(e2)), t2(`    removeEdgeLabelProxies`, () => xi(e2)), t2(`    normalize.run`, () => Gn(e2)), t2(`    parentDummyChains`, () => Vr(e2)), t2(`    addBorderSegments`, () => Ln(e2)), t2(`    order`, () => Lr(e2)), t2(`    insertSelfEdges`, () => Oi(e2)), t2(`    adjustCoordinateSystem`, () => zn(e2)), t2(`    position`, () => ii(e2)), t2(`    positionSelfEdges`, () => ki(e2)), t2(`    removeBorderNodes`, () => Ei(e2)), t2(`    normalize.undo`, () => qn(e2)), t2(`    fixupEdgeLabelCoords`, () => wi(e2)), t2(`    undoCoordinateSystem`, () => Bn(e2)), t2(`    translateGraph`, () => Si(e2)), t2(`    assignNodeIntersects`, () => Ci(e2)), t2(`    reversePoints`, () => Ti(e2)), t2(`    acyclic.undo`, () => En(e2));
}
function ci(e2, t2) {
  y(e2.nodes(), function(n2) {
    var r2 = e2.node(n2), i2 = t2.node(n2);
    r2 && (r2.x = i2.x, r2.y = i2.y, t2.children(n2).length && (r2.width = i2.width, r2.height = i2.height));
  }), y(e2.edges(), function(n2) {
    var r2 = e2.edge(n2), i2 = t2.edge(n2);
    r2.points = i2.points, Object.prototype.hasOwnProperty.call(i2, `x`) && (r2.x = i2.x, r2.y = i2.y);
  }), e2.graph().width = t2.graph().width, e2.graph().height = t2.graph().height;
}
var li = [`nodesep`, `edgesep`, `ranksep`, `marginx`, `marginy`], ui = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: `tb` }, di = [`acyclicer`, `ranker`, `rankdir`, `align`], fi = [`width`, `height`], pi = { width: 0, height: 0 }, mi = [`minlen`, `weight`, `width`, `height`, `labeloffset`], hi = { minlen: 1, weight: 1, width: 0, height: 0, labeloffset: 10, labelpos: `r` }, gi = [`labelpos`];
function _i(e2) {
  var t2 = new D({ multigraph: true, compound: true }), n2 = $(e2.graph());
  return t2.setGraph(a({}, ui, Q(n2, li), I(n2, di))), y(e2.nodes(), function(n3) {
    var r2 = $(e2.node(n3));
    t2.setNode(n3, Qe(Q(r2, fi), pi)), t2.setParent(n3, e2.parent(n3));
  }), y(e2.edges(), function(n3) {
    var r2 = $(e2.edge(n3));
    t2.setEdge(n3, a({}, hi, Q(r2, mi), I(r2, gi)));
  }), t2;
}
function vi(e2) {
  var t2 = e2.graph();
  t2.ranksep /= 2, y(e2.edges(), function(n2) {
    var r2 = e2.edge(n2);
    r2.minlen *= 2, r2.labelpos.toLowerCase() !== `c` && (t2.rankdir === `TB` || t2.rankdir === `BT` ? r2.width += r2.labeloffset : r2.height += r2.labeloffset);
  });
}
function yi(e2) {
  y(e2.edges(), function(t2) {
    var n2 = e2.edge(t2);
    if (n2.width && n2.height) {
      var r2 = e2.node(t2.v);
      H(e2, `edge-proxy`, { rank: (e2.node(t2.w).rank - r2.rank) / 2 + r2.rank, e: t2 }, `_ep`);
    }
  });
}
function bi(e2) {
  var t2 = 0;
  y(e2.nodes(), function(n2) {
    var r2 = e2.node(n2);
    r2.borderTop && (r2.minRank = e2.node(r2.borderTop).rank, r2.maxRank = e2.node(r2.borderBottom).rank, t2 = M(t2, r2.maxRank));
  }), e2.graph().maxRank = t2;
}
function xi(e2) {
  y(e2.nodes(), function(t2) {
    var n2 = e2.node(t2);
    n2.dummy === `edge-proxy` && (e2.edge(n2.e).labelRank = n2.rank, e2.removeNode(t2));
  });
}
function Si(e2) {
  var t2 = 1 / 0, n2 = 0, r2 = 1 / 0, i2 = 0, a2 = e2.graph(), o2 = a2.marginx || 0, s2 = a2.marginy || 0;
  function c2(e3) {
    var a3 = e3.x, o3 = e3.y, s3 = e3.width, c3 = e3.height;
    t2 = Math.min(t2, a3 - s3 / 2), n2 = Math.max(n2, a3 + s3 / 2), r2 = Math.min(r2, o3 - c3 / 2), i2 = Math.max(i2, o3 + c3 / 2);
  }
  y(e2.nodes(), function(t3) {
    c2(e2.node(t3));
  }), y(e2.edges(), function(t3) {
    var n3 = e2.edge(t3);
    Object.prototype.hasOwnProperty.call(n3, `x`) && c2(n3);
  }), t2 -= o2, r2 -= s2, y(e2.nodes(), function(n3) {
    var i3 = e2.node(n3);
    i3.x -= t2, i3.y -= r2;
  }), y(e2.edges(), function(n3) {
    var i3 = e2.edge(n3);
    y(i3.points, function(e3) {
      e3.x -= t2, e3.y -= r2;
    }), Object.prototype.hasOwnProperty.call(i3, `x`) && (i3.x -= t2), Object.prototype.hasOwnProperty.call(i3, `y`) && (i3.y -= r2);
  }), a2.width = n2 - t2 + o2, a2.height = i2 - r2 + s2;
}
function Ci(e2) {
  y(e2.edges(), function(t2) {
    var n2 = e2.edge(t2), r2 = e2.node(t2.v), i2 = e2.node(t2.w), a2, o2;
    n2.points ? (a2 = n2.points[0], o2 = n2.points[n2.points.length - 1]) : (n2.points = [], a2 = i2, o2 = r2), n2.points.unshift(kn(r2, a2)), n2.points.push(kn(i2, o2));
  });
}
function wi(e2) {
  y(e2.edges(), function(t2) {
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
function Ti(e2) {
  y(e2.edges(), function(t2) {
    var n2 = e2.edge(t2);
    n2.reversed && n2.points.reverse();
  });
}
function Ei(e2) {
  y(e2.nodes(), function(t2) {
    if (e2.children(t2).length) {
      var n2 = e2.node(t2), r2 = e2.node(n2.borderTop), i2 = e2.node(n2.borderBottom), a2 = e2.node(k(n2.borderLeft)), o2 = e2.node(k(n2.borderRight));
      n2.width = Math.abs(o2.x - a2.x), n2.height = Math.abs(i2.y - r2.y), n2.x = a2.x + n2.width / 2, n2.y = r2.y + n2.height / 2;
    }
  }), y(e2.nodes(), function(t2) {
    e2.node(t2).dummy === `border` && e2.removeNode(t2);
  });
}
function Di(e2) {
  y(e2.edges(), function(t2) {
    if (t2.v === t2.w) {
      var n2 = e2.node(t2.v);
      n2.selfEdges || (n2.selfEdges = []), n2.selfEdges.push({ e: t2, label: e2.edge(t2) }), e2.removeEdge(t2);
    }
  });
}
function Oi(e2) {
  y(U(e2), function(t2) {
    var n2 = 0;
    y(t2, function(t3, r2) {
      var i2 = e2.node(t3);
      i2.order = r2 + n2, y(i2.selfEdges, function(t4) {
        H(e2, `selfedge`, { width: t4.label.width, height: t4.label.height, rank: i2.rank, order: r2 + ++n2, e: t4.e, label: t4.label }, `_se`);
      }), delete i2.selfEdges;
    });
  });
}
function ki(e2) {
  y(e2.nodes(), function(t2) {
    var n2 = e2.node(t2);
    if (n2.dummy === `selfedge`) {
      var r2 = e2.node(n2.e.v), i2 = r2.x + r2.width / 2, a2 = r2.y, o2 = n2.x - i2, s2 = r2.height / 2;
      e2.setEdge(n2.e, n2.label), e2.removeNode(t2), n2.label.points = [{ x: i2 + 2 * o2 / 3, y: a2 - s2 }, { x: i2 + 5 * o2 / 6, y: a2 - s2 }, { x: i2 + o2, y: a2 }, { x: i2 + 5 * o2 / 6, y: a2 + s2 }, { x: i2 + 2 * o2 / 3, y: a2 + s2 }], n2.label.x = n2.x, n2.label.y = n2.y;
    }
  });
}
function Q(e2, t2) {
  return j(I(e2, t2), Number);
}
function $(e2) {
  var t2 = {};
  return y(e2, function(e3, n2) {
    t2[n2.toLowerCase()] = e3;
  }), t2;
}
export {
  oi as t
};
