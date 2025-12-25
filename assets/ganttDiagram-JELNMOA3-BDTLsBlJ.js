import { i as e, t } from "./chunk-CXUkj53v.js";
import { B as n, C as r, U as i, _ as a, a as o, b as s, c, s as l, v as u, z as d } from "./chunk-ABZYJK2D-ODb6qSou.js";
import { a as f, c as p, d as m, f as h, g, h as _, i as v, p as y, s as b, u as x, v as S } from "./src-D8UWkQNo.js";
import { a as C, i as w, n as T, r as E, t as D } from "./linear-D5Odbd3G.js";
import "./defaultLocale-Dzu6vUN4.js";
import { t as O } from "./init-BBmXJqXp.js";
import "./math-O_7OW4FW.js";
import { g as k } from "./chunk-S3R3BYOJ-D8yhV3IZ.js";
import { t as ee } from "./dist-DrVb-WkD.js";
import "./identity-IHMFXfGJ.js";
function te(e2, t2) {
  let n2;
  if (t2 === void 0) for (let t3 of e2) t3 != null && (n2 < t3 || n2 === void 0 && t3 >= t3) && (n2 = t3);
  else {
    let r2 = -1;
    for (let i2 of e2) (i2 = t2(i2, ++r2, e2)) != null && (n2 < i2 || n2 === void 0 && i2 >= i2) && (n2 = i2);
  }
  return n2;
}
function ne(e2, t2) {
  let n2;
  if (t2 === void 0) for (let t3 of e2) t3 != null && (n2 > t3 || n2 === void 0 && t3 >= t3) && (n2 = t3);
  else {
    let r2 = -1;
    for (let i2 of e2) (i2 = t2(i2, ++r2, e2)) != null && (n2 > i2 || n2 === void 0 && i2 >= i2) && (n2 = i2);
  }
  return n2;
}
function re(e2) {
  return e2;
}
var ie = 1, ae = 2, oe = 3, se = 4, ce = 1e-6;
function le(e2) {
  return `translate(` + e2 + `,0)`;
}
function ue(e2) {
  return `translate(0,` + e2 + `)`;
}
function de(e2) {
  return (t2) => +e2(t2);
}
function fe(e2, t2) {
  return t2 = Math.max(0, e2.bandwidth() - t2 * 2) / 2, e2.round() && (t2 = Math.round(t2)), (n2) => +e2(n2) + t2;
}
function pe() {
  return !this.__axis;
}
function me(e2, t2) {
  var n2 = [], r2 = null, i2 = null, a2 = 6, o2 = 6, s2 = 3, c2 = typeof window < `u` && window.devicePixelRatio > 1 ? 0 : 0.5, l2 = e2 === ie || e2 === se ? -1 : 1, u2 = e2 === se || e2 === ae ? `x` : `y`, d2 = e2 === ie || e2 === oe ? le : ue;
  function f2(f3) {
    var p2 = r2 ?? (t2.ticks ? t2.ticks.apply(t2, n2) : t2.domain()), m2 = i2 ?? (t2.tickFormat ? t2.tickFormat.apply(t2, n2) : re), h2 = Math.max(a2, 0) + s2, g2 = t2.range(), _2 = +g2[0] + c2, v2 = +g2[g2.length - 1] + c2, y2 = (t2.bandwidth ? fe : de)(t2.copy(), c2), b2 = f3.selection ? f3.selection() : f3, x2 = b2.selectAll(`.domain`).data([null]), S2 = b2.selectAll(`.tick`).data(p2, t2).order(), C2 = S2.exit(), w2 = S2.enter().append(`g`).attr(`class`, `tick`), T2 = S2.select(`line`), E2 = S2.select(`text`);
    x2 = x2.merge(x2.enter().insert(`path`, `.tick`).attr(`class`, `domain`).attr(`stroke`, `currentColor`)), S2 = S2.merge(w2), T2 = T2.merge(w2.append(`line`).attr(`stroke`, `currentColor`).attr(u2 + `2`, l2 * a2)), E2 = E2.merge(w2.append(`text`).attr(`fill`, `currentColor`).attr(u2, l2 * h2).attr(`dy`, e2 === ie ? `0em` : e2 === oe ? `0.71em` : `0.32em`)), f3 !== b2 && (x2 = x2.transition(f3), S2 = S2.transition(f3), T2 = T2.transition(f3), E2 = E2.transition(f3), C2 = C2.transition(f3).attr(`opacity`, ce).attr(`transform`, function(e3) {
      return isFinite(e3 = y2(e3)) ? d2(e3 + c2) : this.getAttribute(`transform`);
    }), w2.attr(`opacity`, ce).attr(`transform`, function(e3) {
      var t3 = this.parentNode.__axis;
      return d2((t3 && isFinite(t3 = t3(e3)) ? t3 : y2(e3)) + c2);
    })), C2.remove(), x2.attr(`d`, e2 === se || e2 === ae ? o2 ? `M` + l2 * o2 + `,` + _2 + `H` + c2 + `V` + v2 + `H` + l2 * o2 : `M` + c2 + `,` + _2 + `V` + v2 : o2 ? `M` + _2 + `,` + l2 * o2 + `V` + c2 + `H` + v2 + `V` + l2 * o2 : `M` + _2 + `,` + c2 + `H` + v2), S2.attr(`opacity`, 1).attr(`transform`, function(e3) {
      return d2(y2(e3) + c2);
    }), T2.attr(u2 + `2`, l2 * a2), E2.attr(u2, l2 * h2).text(m2), b2.filter(pe).attr(`fill`, `none`).attr(`font-size`, 10).attr(`font-family`, `sans-serif`).attr(`text-anchor`, e2 === ae ? `start` : e2 === se ? `end` : `middle`), b2.each(function() {
      this.__axis = y2;
    });
  }
  return f2.scale = function(e3) {
    return arguments.length ? (t2 = e3, f2) : t2;
  }, f2.ticks = function() {
    return n2 = Array.from(arguments), f2;
  }, f2.tickArguments = function(e3) {
    return arguments.length ? (n2 = e3 == null ? [] : Array.from(e3), f2) : n2.slice();
  }, f2.tickValues = function(e3) {
    return arguments.length ? (r2 = e3 == null ? null : Array.from(e3), f2) : r2 && r2.slice();
  }, f2.tickFormat = function(e3) {
    return arguments.length ? (i2 = e3, f2) : i2;
  }, f2.tickSize = function(e3) {
    return arguments.length ? (a2 = o2 = +e3, f2) : a2;
  }, f2.tickSizeInner = function(e3) {
    return arguments.length ? (a2 = +e3, f2) : a2;
  }, f2.tickSizeOuter = function(e3) {
    return arguments.length ? (o2 = +e3, f2) : o2;
  }, f2.tickPadding = function(e3) {
    return arguments.length ? (s2 = +e3, f2) : s2;
  }, f2.offset = function(e3) {
    return arguments.length ? (c2 = +e3, f2) : c2;
  }, f2;
}
function he(e2) {
  return me(ie, e2);
}
function ge(e2) {
  return me(oe, e2);
}
const _e = Math.PI / 180, ve = 180 / Math.PI;
var ye = 18, be = 0.96422, xe = 1, Se = 0.82521, Ce = 4 / 29, A = 6 / 29, we = 3 * A * A, Te = A * A * A;
function Ee(e2) {
  if (e2 instanceof j) return new j(e2.l, e2.a, e2.b, e2.opacity);
  if (e2 instanceof M) return Pe(e2);
  e2 instanceof p || (e2 = x(e2));
  var t2 = je(e2.r), n2 = je(e2.g), r2 = je(e2.b), i2 = Oe((0.2225045 * t2 + 0.7168786 * n2 + 0.0606169 * r2) / xe), a2, o2;
  return t2 === n2 && n2 === r2 ? a2 = o2 = i2 : (a2 = Oe((0.4360747 * t2 + 0.3850649 * n2 + 0.1430804 * r2) / be), o2 = Oe((0.0139322 * t2 + 0.0971045 * n2 + 0.7141733 * r2) / Se)), new j(116 * i2 - 16, 500 * (a2 - i2), 200 * (i2 - o2), e2.opacity);
}
function De(e2, t2, n2, r2) {
  return arguments.length === 1 ? Ee(e2) : new j(e2, t2, n2, r2 ?? 1);
}
function j(e2, t2, n2, r2) {
  this.l = +e2, this.a = +t2, this.b = +n2, this.opacity = +r2;
}
m(j, De, h(b, { brighter(e2) {
  return new j(this.l + ye * (e2 ?? 1), this.a, this.b, this.opacity);
}, darker(e2) {
  return new j(this.l - ye * (e2 ?? 1), this.a, this.b, this.opacity);
}, rgb() {
  var e2 = (this.l + 16) / 116, t2 = isNaN(this.a) ? e2 : e2 + this.a / 500, n2 = isNaN(this.b) ? e2 : e2 - this.b / 200;
  return t2 = be * ke(t2), e2 = xe * ke(e2), n2 = Se * ke(n2), new p(Ae(3.1338561 * t2 - 1.6168667 * e2 - 0.4906146 * n2), Ae(-0.9787684 * t2 + 1.9161415 * e2 + 0.033454 * n2), Ae(0.0719453 * t2 - 0.2289914 * e2 + 1.4052427 * n2), this.opacity);
} }));
function Oe(e2) {
  return e2 > Te ? e2 ** (1 / 3) : e2 / we + Ce;
}
function ke(e2) {
  return e2 > A ? e2 * e2 * e2 : we * (e2 - Ce);
}
function Ae(e2) {
  return 255 * (e2 <= 31308e-7 ? 12.92 * e2 : 1.055 * e2 ** (1 / 2.4) - 0.055);
}
function je(e2) {
  return (e2 /= 255) <= 0.04045 ? e2 / 12.92 : ((e2 + 0.055) / 1.055) ** 2.4;
}
function Me(e2) {
  if (e2 instanceof M) return new M(e2.h, e2.c, e2.l, e2.opacity);
  if (e2 instanceof j || (e2 = Ee(e2)), e2.a === 0 && e2.b === 0) return new M(NaN, 0 < e2.l && e2.l < 100 ? 0 : NaN, e2.l, e2.opacity);
  var t2 = Math.atan2(e2.b, e2.a) * ve;
  return new M(t2 < 0 ? t2 + 360 : t2, Math.sqrt(e2.a * e2.a + e2.b * e2.b), e2.l, e2.opacity);
}
function Ne(e2, t2, n2, r2) {
  return arguments.length === 1 ? Me(e2) : new M(e2, t2, n2, r2 ?? 1);
}
function M(e2, t2, n2, r2) {
  this.h = +e2, this.c = +t2, this.l = +n2, this.opacity = +r2;
}
function Pe(e2) {
  if (isNaN(e2.h)) return new j(e2.l, 0, 0, e2.opacity);
  var t2 = e2.h * _e;
  return new j(e2.l, Math.cos(t2) * e2.c, Math.sin(t2) * e2.c, e2.opacity);
}
m(M, Ne, h(b, { brighter(e2) {
  return new M(this.h, this.c, this.l + ye * (e2 ?? 1), this.opacity);
}, darker(e2) {
  return new M(this.h, this.c, this.l - ye * (e2 ?? 1), this.opacity);
}, rgb() {
  return Pe(this).rgb();
} }));
function Fe(e2) {
  return function(t2, n2) {
    var r2 = e2((t2 = Ne(t2)).h, (n2 = Ne(n2)).h), i2 = f(t2.c, n2.c), a2 = f(t2.l, n2.l), o2 = f(t2.opacity, n2.opacity);
    return function(e3) {
      return t2.h = r2(e3), t2.c = i2(e3), t2.l = a2(e3), t2.opacity = o2(e3), t2 + ``;
    };
  };
}
var Ie = Fe(v);
function Le(e2, t2) {
  e2 = e2.slice();
  var n2 = 0, r2 = e2.length - 1, i2 = e2[n2], a2 = e2[r2], o2;
  return a2 < i2 && (o2 = n2, n2 = r2, r2 = o2, o2 = i2, i2 = a2, a2 = o2), e2[n2] = t2.floor(i2), e2[r2] = t2.ceil(a2), e2;
}
var Re = /* @__PURE__ */ new Date(), ze = /* @__PURE__ */ new Date();
function N(e2, t2, n2, r2) {
  function i2(t3) {
    return e2(t3 = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+t3)), t3;
  }
  return i2.floor = (t3) => (e2(t3 = /* @__PURE__ */ new Date(+t3)), t3), i2.ceil = (n3) => (e2(n3 = new Date(n3 - 1)), t2(n3, 1), e2(n3), n3), i2.round = (e3) => {
    let t3 = i2(e3), n3 = i2.ceil(e3);
    return e3 - t3 < n3 - e3 ? t3 : n3;
  }, i2.offset = (e3, n3) => (t2(e3 = /* @__PURE__ */ new Date(+e3), n3 == null ? 1 : Math.floor(n3)), e3), i2.range = (n3, r3, a2) => {
    let o2 = [];
    if (n3 = i2.ceil(n3), a2 = a2 == null ? 1 : Math.floor(a2), !(n3 < r3) || !(a2 > 0)) return o2;
    let s2;
    do
      o2.push(s2 = /* @__PURE__ */ new Date(+n3)), t2(n3, a2), e2(n3);
    while (s2 < n3 && n3 < r3);
    return o2;
  }, i2.filter = (n3) => N((t3) => {
    if (t3 >= t3) for (; e2(t3), !n3(t3); ) t3.setTime(t3 - 1);
  }, (e3, r3) => {
    if (e3 >= e3) if (r3 < 0) for (; ++r3 <= 0; ) for (; t2(e3, -1), !n3(e3); ) ;
    else for (; --r3 >= 0; ) for (; t2(e3, 1), !n3(e3); ) ;
  }), n2 && (i2.count = (t3, r3) => (Re.setTime(+t3), ze.setTime(+r3), e2(Re), e2(ze), Math.floor(n2(Re, ze))), i2.every = (e3) => (e3 = Math.floor(e3), !isFinite(e3) || !(e3 > 0) ? null : e3 > 1 ? i2.filter(r2 ? (t3) => r2(t3) % e3 === 0 : (t3) => i2.count(0, t3) % e3 === 0) : i2)), i2;
}
const P = N(() => {
}, (e2, t2) => {
  e2.setTime(+e2 + t2);
}, (e2, t2) => t2 - e2);
P.every = (e2) => (e2 = Math.floor(e2), !isFinite(e2) || !(e2 > 0) ? null : e2 > 1 ? N((t2) => {
  t2.setTime(Math.floor(t2 / e2) * e2);
}, (t2, n2) => {
  t2.setTime(+t2 + n2 * e2);
}, (t2, n2) => (n2 - t2) / e2) : P), P.range;
const F = 1e3, I = F * 60, L = I * 60, R = L * 24, Be = R * 7, Ve = R * 30, He = R * 365, z = N((e2) => {
  e2.setTime(e2 - e2.getMilliseconds());
}, (e2, t2) => {
  e2.setTime(+e2 + t2 * F);
}, (e2, t2) => (t2 - e2) / F, (e2) => e2.getUTCSeconds());
z.range;
const Ue = N((e2) => {
  e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * F);
}, (e2, t2) => {
  e2.setTime(+e2 + t2 * I);
}, (e2, t2) => (t2 - e2) / I, (e2) => e2.getMinutes());
Ue.range;
const We = N((e2) => {
  e2.setUTCSeconds(0, 0);
}, (e2, t2) => {
  e2.setTime(+e2 + t2 * I);
}, (e2, t2) => (t2 - e2) / I, (e2) => e2.getUTCMinutes());
We.range;
const Ge = N((e2) => {
  e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * F - e2.getMinutes() * I);
}, (e2, t2) => {
  e2.setTime(+e2 + t2 * L);
}, (e2, t2) => (t2 - e2) / L, (e2) => e2.getHours());
Ge.range;
const Ke = N((e2) => {
  e2.setUTCMinutes(0, 0, 0);
}, (e2, t2) => {
  e2.setTime(+e2 + t2 * L);
}, (e2, t2) => (t2 - e2) / L, (e2) => e2.getUTCHours());
Ke.range;
const B = N((e2) => e2.setHours(0, 0, 0, 0), (e2, t2) => e2.setDate(e2.getDate() + t2), (e2, t2) => (t2 - e2 - (t2.getTimezoneOffset() - e2.getTimezoneOffset()) * I) / R, (e2) => e2.getDate() - 1);
B.range;
const qe = N((e2) => {
  e2.setUTCHours(0, 0, 0, 0);
}, (e2, t2) => {
  e2.setUTCDate(e2.getUTCDate() + t2);
}, (e2, t2) => (t2 - e2) / R, (e2) => e2.getUTCDate() - 1);
qe.range;
const Je = N((e2) => {
  e2.setUTCHours(0, 0, 0, 0);
}, (e2, t2) => {
  e2.setUTCDate(e2.getUTCDate() + t2);
}, (e2, t2) => (t2 - e2) / R, (e2) => Math.floor(e2 / R));
Je.range;
function V(e2) {
  return N((t2) => {
    t2.setDate(t2.getDate() - (t2.getDay() + 7 - e2) % 7), t2.setHours(0, 0, 0, 0);
  }, (e3, t2) => {
    e3.setDate(e3.getDate() + t2 * 7);
  }, (e3, t2) => (t2 - e3 - (t2.getTimezoneOffset() - e3.getTimezoneOffset()) * I) / Be);
}
const Ye = V(0), Xe = V(1), Ze = V(2), Qe = V(3), H = V(4), $e = V(5), et = V(6);
Ye.range, Xe.range, Ze.range, Qe.range, H.range, $e.range, et.range;
function U(e2) {
  return N((t2) => {
    t2.setUTCDate(t2.getUTCDate() - (t2.getUTCDay() + 7 - e2) % 7), t2.setUTCHours(0, 0, 0, 0);
  }, (e3, t2) => {
    e3.setUTCDate(e3.getUTCDate() + t2 * 7);
  }, (e3, t2) => (t2 - e3) / Be);
}
const tt = U(0), nt = U(1), rt = U(2), it = U(3), W = U(4), at = U(5), ot = U(6);
tt.range, nt.range, rt.range, it.range, W.range, at.range, ot.range;
const st = N((e2) => {
  e2.setDate(1), e2.setHours(0, 0, 0, 0);
}, (e2, t2) => {
  e2.setMonth(e2.getMonth() + t2);
}, (e2, t2) => t2.getMonth() - e2.getMonth() + (t2.getFullYear() - e2.getFullYear()) * 12, (e2) => e2.getMonth());
st.range;
const ct = N((e2) => {
  e2.setUTCDate(1), e2.setUTCHours(0, 0, 0, 0);
}, (e2, t2) => {
  e2.setUTCMonth(e2.getUTCMonth() + t2);
}, (e2, t2) => t2.getUTCMonth() - e2.getUTCMonth() + (t2.getUTCFullYear() - e2.getUTCFullYear()) * 12, (e2) => e2.getUTCMonth());
ct.range;
const G = N((e2) => {
  e2.setMonth(0, 1), e2.setHours(0, 0, 0, 0);
}, (e2, t2) => {
  e2.setFullYear(e2.getFullYear() + t2);
}, (e2, t2) => t2.getFullYear() - e2.getFullYear(), (e2) => e2.getFullYear());
G.every = (e2) => !isFinite(e2 = Math.floor(e2)) || !(e2 > 0) ? null : N((t2) => {
  t2.setFullYear(Math.floor(t2.getFullYear() / e2) * e2), t2.setMonth(0, 1), t2.setHours(0, 0, 0, 0);
}, (t2, n2) => {
  t2.setFullYear(t2.getFullYear() + n2 * e2);
}), G.range;
const K = N((e2) => {
  e2.setUTCMonth(0, 1), e2.setUTCHours(0, 0, 0, 0);
}, (e2, t2) => {
  e2.setUTCFullYear(e2.getUTCFullYear() + t2);
}, (e2, t2) => t2.getUTCFullYear() - e2.getUTCFullYear(), (e2) => e2.getUTCFullYear());
K.every = (e2) => !isFinite(e2 = Math.floor(e2)) || !(e2 > 0) ? null : N((t2) => {
  t2.setUTCFullYear(Math.floor(t2.getUTCFullYear() / e2) * e2), t2.setUTCMonth(0, 1), t2.setUTCHours(0, 0, 0, 0);
}, (t2, n2) => {
  t2.setUTCFullYear(t2.getUTCFullYear() + n2 * e2);
}), K.range;
function lt(e2, t2, n2, r2, i2, a2) {
  let o2 = [[z, 1, F], [z, 5, 5 * F], [z, 15, 15 * F], [z, 30, 30 * F], [a2, 1, I], [a2, 5, 5 * I], [a2, 15, 15 * I], [a2, 30, 30 * I], [i2, 1, L], [i2, 3, 3 * L], [i2, 6, 6 * L], [i2, 12, 12 * L], [r2, 1, R], [r2, 2, 2 * R], [n2, 1, Be], [t2, 1, Ve], [t2, 3, 3 * Ve], [e2, 1, He]];
  function s2(e3, t3, n3) {
    let r3 = t3 < e3;
    r3 && ([e3, t3] = [t3, e3]);
    let i3 = n3 && typeof n3.range == `function` ? n3 : c2(e3, t3, n3), a3 = i3 ? i3.range(e3, +t3 + 1) : [];
    return r3 ? a3.reverse() : a3;
  }
  function c2(t3, n3, r3) {
    let i3 = Math.abs(n3 - t3) / r3, a3 = C(([, , e3]) => e3).right(o2, i3);
    if (a3 === o2.length) return e2.every(w(t3 / He, n3 / He, r3));
    if (a3 === 0) return P.every(Math.max(w(t3, n3, r3), 1));
    let [s3, c3] = o2[i3 / o2[a3 - 1][2] < o2[a3][2] / i3 ? a3 - 1 : a3];
    return s3.every(c3);
  }
  return [s2, c2];
}
var [ut, dt] = lt(K, ct, tt, Je, Ke, We), [ft, pt] = lt(G, st, Ye, B, Ge, Ue);
function mt(e2) {
  if (0 <= e2.y && e2.y < 100) {
    var t2 = new Date(-1, e2.m, e2.d, e2.H, e2.M, e2.S, e2.L);
    return t2.setFullYear(e2.y), t2;
  }
  return new Date(e2.y, e2.m, e2.d, e2.H, e2.M, e2.S, e2.L);
}
function ht(e2) {
  if (0 <= e2.y && e2.y < 100) {
    var t2 = new Date(Date.UTC(-1, e2.m, e2.d, e2.H, e2.M, e2.S, e2.L));
    return t2.setUTCFullYear(e2.y), t2;
  }
  return new Date(Date.UTC(e2.y, e2.m, e2.d, e2.H, e2.M, e2.S, e2.L));
}
function gt(e2, t2, n2) {
  return { y: e2, m: t2, d: n2, H: 0, M: 0, S: 0, L: 0 };
}
function _t(e2) {
  var t2 = e2.dateTime, n2 = e2.date, r2 = e2.time, i2 = e2.periods, a2 = e2.days, o2 = e2.shortDays, s2 = e2.months, c2 = e2.shortMonths, l2 = St(i2), u2 = Ct(i2), d2 = St(a2), f2 = Ct(a2), p2 = St(o2), m2 = Ct(o2), h2 = St(s2), g2 = Ct(s2), _2 = St(c2), v2 = Ct(c2), y2 = { a: re2, A: ie2, b: ae2, B: oe2, c: null, d: Wt, e: Wt, f: Yt, g: sn, G: ln, H: Gt, I: Kt, j: qt, L: Jt, m: Xt, M: Zt, p: se2, q: ce2, Q: Mn, s: Nn, S: Qt, u: $t, U: en, V: nn, w: rn, W: an, x: null, X: null, y: on, Y: cn, Z: un, "%": jn }, b2 = { a: le2, A: ue2, b: de2, B: fe2, c: null, d: dn, e: dn, f: gn, g: Dn, G: kn, H: fn, I: pn, j: mn, L: hn, m: _n, M: vn, p: pe2, q: me2, Q: Mn, s: Nn, S: yn, u: bn, U: xn, V: Cn, w: wn, W: Tn, x: null, X: null, y: En, Y: On, Z: An, "%": jn }, x2 = { a: E2, A: D2, b: O2, B: k2, c: ee2, d: Pt, e: Pt, f: Bt, g: At, G: kt, H: It, I: It, j: Ft, L: zt, m: Nt, M: Lt, p: T2, q: Mt, Q: Ht, s: Ut, S: Rt, u: Tt, U: Et, V: Dt, w: wt, W: Ot, x: te2, X: ne2, y: At, Y: kt, Z: jt, "%": Vt };
  y2.x = S2(n2, y2), y2.X = S2(r2, y2), y2.c = S2(t2, y2), b2.x = S2(n2, b2), b2.X = S2(r2, b2), b2.c = S2(t2, b2);
  function S2(e3, t3) {
    return function(n3) {
      var r3 = [], i3 = -1, a3 = 0, o3 = e3.length, s3, c3, l3;
      for (n3 instanceof Date || (n3 = /* @__PURE__ */ new Date(+n3)); ++i3 < o3; ) e3.charCodeAt(i3) === 37 && (r3.push(e3.slice(a3, i3)), (c3 = vt[s3 = e3.charAt(++i3)]) == null ? c3 = s3 === `e` ? ` ` : `0` : s3 = e3.charAt(++i3), (l3 = t3[s3]) && (s3 = l3(n3, c3)), r3.push(s3), a3 = i3 + 1);
      return r3.push(e3.slice(a3, i3)), r3.join(``);
    };
  }
  function C2(e3, t3) {
    return function(n3) {
      var r3 = gt(1900, void 0, 1), i3 = w2(r3, e3, n3 += ``, 0), a3, o3;
      if (i3 != n3.length) return null;
      if (`Q` in r3) return new Date(r3.Q);
      if (`s` in r3) return new Date(r3.s * 1e3 + (`L` in r3 ? r3.L : 0));
      if (t3 && !(`Z` in r3) && (r3.Z = 0), `p` in r3 && (r3.H = r3.H % 12 + r3.p * 12), r3.m === void 0 && (r3.m = `q` in r3 ? r3.q : 0), `V` in r3) {
        if (r3.V < 1 || r3.V > 53) return null;
        `w` in r3 || (r3.w = 1), `Z` in r3 ? (a3 = ht(gt(r3.y, 0, 1)), o3 = a3.getUTCDay(), a3 = o3 > 4 || o3 === 0 ? nt.ceil(a3) : nt(a3), a3 = qe.offset(a3, (r3.V - 1) * 7), r3.y = a3.getUTCFullYear(), r3.m = a3.getUTCMonth(), r3.d = a3.getUTCDate() + (r3.w + 6) % 7) : (a3 = mt(gt(r3.y, 0, 1)), o3 = a3.getDay(), a3 = o3 > 4 || o3 === 0 ? Xe.ceil(a3) : Xe(a3), a3 = B.offset(a3, (r3.V - 1) * 7), r3.y = a3.getFullYear(), r3.m = a3.getMonth(), r3.d = a3.getDate() + (r3.w + 6) % 7);
      } else (`W` in r3 || `U` in r3) && (`w` in r3 || (r3.w = `u` in r3 ? r3.u % 7 : `W` in r3 ? 1 : 0), o3 = `Z` in r3 ? ht(gt(r3.y, 0, 1)).getUTCDay() : mt(gt(r3.y, 0, 1)).getDay(), r3.m = 0, r3.d = `W` in r3 ? (r3.w + 6) % 7 + r3.W * 7 - (o3 + 5) % 7 : r3.w + r3.U * 7 - (o3 + 6) % 7);
      return `Z` in r3 ? (r3.H += r3.Z / 100 | 0, r3.M += r3.Z % 100, ht(r3)) : mt(r3);
    };
  }
  function w2(e3, t3, n3, r3) {
    for (var i3 = 0, a3 = t3.length, o3 = n3.length, s3, c3; i3 < a3; ) {
      if (r3 >= o3) return -1;
      if (s3 = t3.charCodeAt(i3++), s3 === 37) {
        if (s3 = t3.charAt(i3++), c3 = x2[s3 in vt ? t3.charAt(i3++) : s3], !c3 || (r3 = c3(e3, n3, r3)) < 0) return -1;
      } else if (s3 != n3.charCodeAt(r3++)) return -1;
    }
    return r3;
  }
  function T2(e3, t3, n3) {
    var r3 = l2.exec(t3.slice(n3));
    return r3 ? (e3.p = u2.get(r3[0].toLowerCase()), n3 + r3[0].length) : -1;
  }
  function E2(e3, t3, n3) {
    var r3 = p2.exec(t3.slice(n3));
    return r3 ? (e3.w = m2.get(r3[0].toLowerCase()), n3 + r3[0].length) : -1;
  }
  function D2(e3, t3, n3) {
    var r3 = d2.exec(t3.slice(n3));
    return r3 ? (e3.w = f2.get(r3[0].toLowerCase()), n3 + r3[0].length) : -1;
  }
  function O2(e3, t3, n3) {
    var r3 = _2.exec(t3.slice(n3));
    return r3 ? (e3.m = v2.get(r3[0].toLowerCase()), n3 + r3[0].length) : -1;
  }
  function k2(e3, t3, n3) {
    var r3 = h2.exec(t3.slice(n3));
    return r3 ? (e3.m = g2.get(r3[0].toLowerCase()), n3 + r3[0].length) : -1;
  }
  function ee2(e3, n3, r3) {
    return w2(e3, t2, n3, r3);
  }
  function te2(e3, t3, r3) {
    return w2(e3, n2, t3, r3);
  }
  function ne2(e3, t3, n3) {
    return w2(e3, r2, t3, n3);
  }
  function re2(e3) {
    return o2[e3.getDay()];
  }
  function ie2(e3) {
    return a2[e3.getDay()];
  }
  function ae2(e3) {
    return c2[e3.getMonth()];
  }
  function oe2(e3) {
    return s2[e3.getMonth()];
  }
  function se2(e3) {
    return i2[+(e3.getHours() >= 12)];
  }
  function ce2(e3) {
    return 1 + ~~(e3.getMonth() / 3);
  }
  function le2(e3) {
    return o2[e3.getUTCDay()];
  }
  function ue2(e3) {
    return a2[e3.getUTCDay()];
  }
  function de2(e3) {
    return c2[e3.getUTCMonth()];
  }
  function fe2(e3) {
    return s2[e3.getUTCMonth()];
  }
  function pe2(e3) {
    return i2[+(e3.getUTCHours() >= 12)];
  }
  function me2(e3) {
    return 1 + ~~(e3.getUTCMonth() / 3);
  }
  return { format: function(e3) {
    var t3 = S2(e3 += ``, y2);
    return t3.toString = function() {
      return e3;
    }, t3;
  }, parse: function(e3) {
    var t3 = C2(e3 += ``, false);
    return t3.toString = function() {
      return e3;
    }, t3;
  }, utcFormat: function(e3) {
    var t3 = S2(e3 += ``, b2);
    return t3.toString = function() {
      return e3;
    }, t3;
  }, utcParse: function(e3) {
    var t3 = C2(e3 += ``, true);
    return t3.toString = function() {
      return e3;
    }, t3;
  } };
}
var vt = { "-": ``, _: ` `, 0: `0` }, q = /^\s*\d+/, yt = /^%/, bt = /[\\^$*+?|[\]().{}]/g;
function J(e2, t2, n2) {
  var r2 = e2 < 0 ? `-` : ``, i2 = (r2 ? -e2 : e2) + ``, a2 = i2.length;
  return r2 + (a2 < n2 ? Array(n2 - a2 + 1).join(t2) + i2 : i2);
}
function xt(e2) {
  return e2.replace(bt, `\\$&`);
}
function St(e2) {
  return RegExp(`^(?:` + e2.map(xt).join(`|`) + `)`, `i`);
}
function Ct(e2) {
  return new Map(e2.map((e3, t2) => [e3.toLowerCase(), t2]));
}
function wt(e2, t2, n2) {
  var r2 = q.exec(t2.slice(n2, n2 + 1));
  return r2 ? (e2.w = +r2[0], n2 + r2[0].length) : -1;
}
function Tt(e2, t2, n2) {
  var r2 = q.exec(t2.slice(n2, n2 + 1));
  return r2 ? (e2.u = +r2[0], n2 + r2[0].length) : -1;
}
function Et(e2, t2, n2) {
  var r2 = q.exec(t2.slice(n2, n2 + 2));
  return r2 ? (e2.U = +r2[0], n2 + r2[0].length) : -1;
}
function Dt(e2, t2, n2) {
  var r2 = q.exec(t2.slice(n2, n2 + 2));
  return r2 ? (e2.V = +r2[0], n2 + r2[0].length) : -1;
}
function Ot(e2, t2, n2) {
  var r2 = q.exec(t2.slice(n2, n2 + 2));
  return r2 ? (e2.W = +r2[0], n2 + r2[0].length) : -1;
}
function kt(e2, t2, n2) {
  var r2 = q.exec(t2.slice(n2, n2 + 4));
  return r2 ? (e2.y = +r2[0], n2 + r2[0].length) : -1;
}
function At(e2, t2, n2) {
  var r2 = q.exec(t2.slice(n2, n2 + 2));
  return r2 ? (e2.y = +r2[0] + (+r2[0] > 68 ? 1900 : 2e3), n2 + r2[0].length) : -1;
}
function jt(e2, t2, n2) {
  var r2 = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t2.slice(n2, n2 + 6));
  return r2 ? (e2.Z = r2[1] ? 0 : -(r2[2] + (r2[3] || `00`)), n2 + r2[0].length) : -1;
}
function Mt(e2, t2, n2) {
  var r2 = q.exec(t2.slice(n2, n2 + 1));
  return r2 ? (e2.q = r2[0] * 3 - 3, n2 + r2[0].length) : -1;
}
function Nt(e2, t2, n2) {
  var r2 = q.exec(t2.slice(n2, n2 + 2));
  return r2 ? (e2.m = r2[0] - 1, n2 + r2[0].length) : -1;
}
function Pt(e2, t2, n2) {
  var r2 = q.exec(t2.slice(n2, n2 + 2));
  return r2 ? (e2.d = +r2[0], n2 + r2[0].length) : -1;
}
function Ft(e2, t2, n2) {
  var r2 = q.exec(t2.slice(n2, n2 + 3));
  return r2 ? (e2.m = 0, e2.d = +r2[0], n2 + r2[0].length) : -1;
}
function It(e2, t2, n2) {
  var r2 = q.exec(t2.slice(n2, n2 + 2));
  return r2 ? (e2.H = +r2[0], n2 + r2[0].length) : -1;
}
function Lt(e2, t2, n2) {
  var r2 = q.exec(t2.slice(n2, n2 + 2));
  return r2 ? (e2.M = +r2[0], n2 + r2[0].length) : -1;
}
function Rt(e2, t2, n2) {
  var r2 = q.exec(t2.slice(n2, n2 + 2));
  return r2 ? (e2.S = +r2[0], n2 + r2[0].length) : -1;
}
function zt(e2, t2, n2) {
  var r2 = q.exec(t2.slice(n2, n2 + 3));
  return r2 ? (e2.L = +r2[0], n2 + r2[0].length) : -1;
}
function Bt(e2, t2, n2) {
  var r2 = q.exec(t2.slice(n2, n2 + 6));
  return r2 ? (e2.L = Math.floor(r2[0] / 1e3), n2 + r2[0].length) : -1;
}
function Vt(e2, t2, n2) {
  var r2 = yt.exec(t2.slice(n2, n2 + 1));
  return r2 ? n2 + r2[0].length : -1;
}
function Ht(e2, t2, n2) {
  var r2 = q.exec(t2.slice(n2));
  return r2 ? (e2.Q = +r2[0], n2 + r2[0].length) : -1;
}
function Ut(e2, t2, n2) {
  var r2 = q.exec(t2.slice(n2));
  return r2 ? (e2.s = +r2[0], n2 + r2[0].length) : -1;
}
function Wt(e2, t2) {
  return J(e2.getDate(), t2, 2);
}
function Gt(e2, t2) {
  return J(e2.getHours(), t2, 2);
}
function Kt(e2, t2) {
  return J(e2.getHours() % 12 || 12, t2, 2);
}
function qt(e2, t2) {
  return J(1 + B.count(G(e2), e2), t2, 3);
}
function Jt(e2, t2) {
  return J(e2.getMilliseconds(), t2, 3);
}
function Yt(e2, t2) {
  return Jt(e2, t2) + `000`;
}
function Xt(e2, t2) {
  return J(e2.getMonth() + 1, t2, 2);
}
function Zt(e2, t2) {
  return J(e2.getMinutes(), t2, 2);
}
function Qt(e2, t2) {
  return J(e2.getSeconds(), t2, 2);
}
function $t(e2) {
  var t2 = e2.getDay();
  return t2 === 0 ? 7 : t2;
}
function en(e2, t2) {
  return J(Ye.count(G(e2) - 1, e2), t2, 2);
}
function tn(e2) {
  var t2 = e2.getDay();
  return t2 >= 4 || t2 === 0 ? H(e2) : H.ceil(e2);
}
function nn(e2, t2) {
  return e2 = tn(e2), J(H.count(G(e2), e2) + (G(e2).getDay() === 4), t2, 2);
}
function rn(e2) {
  return e2.getDay();
}
function an(e2, t2) {
  return J(Xe.count(G(e2) - 1, e2), t2, 2);
}
function on(e2, t2) {
  return J(e2.getFullYear() % 100, t2, 2);
}
function sn(e2, t2) {
  return e2 = tn(e2), J(e2.getFullYear() % 100, t2, 2);
}
function cn(e2, t2) {
  return J(e2.getFullYear() % 1e4, t2, 4);
}
function ln(e2, t2) {
  var n2 = e2.getDay();
  return e2 = n2 >= 4 || n2 === 0 ? H(e2) : H.ceil(e2), J(e2.getFullYear() % 1e4, t2, 4);
}
function un(e2) {
  var t2 = e2.getTimezoneOffset();
  return (t2 > 0 ? `-` : (t2 *= -1, `+`)) + J(t2 / 60 | 0, `0`, 2) + J(t2 % 60, `0`, 2);
}
function dn(e2, t2) {
  return J(e2.getUTCDate(), t2, 2);
}
function fn(e2, t2) {
  return J(e2.getUTCHours(), t2, 2);
}
function pn(e2, t2) {
  return J(e2.getUTCHours() % 12 || 12, t2, 2);
}
function mn(e2, t2) {
  return J(1 + qe.count(K(e2), e2), t2, 3);
}
function hn(e2, t2) {
  return J(e2.getUTCMilliseconds(), t2, 3);
}
function gn(e2, t2) {
  return hn(e2, t2) + `000`;
}
function _n(e2, t2) {
  return J(e2.getUTCMonth() + 1, t2, 2);
}
function vn(e2, t2) {
  return J(e2.getUTCMinutes(), t2, 2);
}
function yn(e2, t2) {
  return J(e2.getUTCSeconds(), t2, 2);
}
function bn(e2) {
  var t2 = e2.getUTCDay();
  return t2 === 0 ? 7 : t2;
}
function xn(e2, t2) {
  return J(tt.count(K(e2) - 1, e2), t2, 2);
}
function Sn(e2) {
  var t2 = e2.getUTCDay();
  return t2 >= 4 || t2 === 0 ? W(e2) : W.ceil(e2);
}
function Cn(e2, t2) {
  return e2 = Sn(e2), J(W.count(K(e2), e2) + (K(e2).getUTCDay() === 4), t2, 2);
}
function wn(e2) {
  return e2.getUTCDay();
}
function Tn(e2, t2) {
  return J(nt.count(K(e2) - 1, e2), t2, 2);
}
function En(e2, t2) {
  return J(e2.getUTCFullYear() % 100, t2, 2);
}
function Dn(e2, t2) {
  return e2 = Sn(e2), J(e2.getUTCFullYear() % 100, t2, 2);
}
function On(e2, t2) {
  return J(e2.getUTCFullYear() % 1e4, t2, 4);
}
function kn(e2, t2) {
  var n2 = e2.getUTCDay();
  return e2 = n2 >= 4 || n2 === 0 ? W(e2) : W.ceil(e2), J(e2.getUTCFullYear() % 1e4, t2, 4);
}
function An() {
  return `+0000`;
}
function jn() {
  return `%`;
}
function Mn(e2) {
  return +e2;
}
function Nn(e2) {
  return Math.floor(e2 / 1e3);
}
var Pn, Fn;
In({ dateTime: `%x, %X`, date: `%-m/%-d/%Y`, time: `%-I:%M:%S %p`, periods: [`AM`, `PM`], days: [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`], shortDays: [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`], months: [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`], shortMonths: [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`] });
function In(e2) {
  return Pn = _t(e2), Fn = Pn.format, Pn.parse, Pn.utcFormat, Pn.utcParse, Pn;
}
function Ln(e2) {
  return new Date(e2);
}
function Rn(e2) {
  return e2 instanceof Date ? +e2 : +/* @__PURE__ */ new Date(+e2);
}
function zn(e2, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
  var u2 = T(), d2 = u2.invert, f2 = u2.domain, p2 = l2(`.%L`), m2 = l2(`:%S`), h2 = l2(`%I:%M`), g2 = l2(`%I %p`), _2 = l2(`%a %d`), v2 = l2(`%b %d`), y2 = l2(`%B`), b2 = l2(`%Y`);
  function x2(e3) {
    return (c2(e3) < e3 ? p2 : s2(e3) < e3 ? m2 : o2(e3) < e3 ? h2 : a2(e3) < e3 ? g2 : r2(e3) < e3 ? i2(e3) < e3 ? _2 : v2 : n2(e3) < e3 ? y2 : b2)(e3);
  }
  return u2.invert = function(e3) {
    return new Date(d2(e3));
  }, u2.domain = function(e3) {
    return arguments.length ? f2(Array.from(e3, Rn)) : f2().map(Ln);
  }, u2.ticks = function(t3) {
    var n3 = f2();
    return e2(n3[0], n3[n3.length - 1], t3 ?? 10);
  }, u2.tickFormat = function(e3, t3) {
    return t3 == null ? x2 : l2(t3);
  }, u2.nice = function(e3) {
    var n3 = f2();
    return (!e3 || typeof e3.range != `function`) && (e3 = t2(n3[0], n3[n3.length - 1], e3 ?? 10)), e3 ? f2(Le(n3, e3)) : u2;
  }, u2.copy = function() {
    return E(u2, zn(e2, t2, n2, r2, i2, a2, o2, s2, c2, l2));
  }, u2;
}
function Bn() {
  return O.apply(zn(ft, pt, G, st, Ye, B, Ge, Ue, z, Fn).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var Vn = t(((e2, t2) => {
  (function(n2, r2) {
    typeof e2 == `object` && t2 !== void 0 ? t2.exports = r2() : typeof define == `function` && define.amd ? define(r2) : (n2 = typeof globalThis < `u` ? globalThis : n2 || self).dayjs_plugin_isoWeek = r2();
  })(e2, (function() {
    var e3 = `day`;
    return function(t3, n2, r2) {
      var i2 = function(t4) {
        return t4.add(4 - t4.isoWeekday(), e3);
      }, a2 = n2.prototype;
      a2.isoWeekYear = function() {
        return i2(this).year();
      }, a2.isoWeek = function(t4) {
        if (!this.$utils().u(t4)) return this.add(7 * (t4 - this.isoWeek()), e3);
        var n3, a3, o3, s2, c2 = i2(this), l2 = (n3 = this.isoWeekYear(), a3 = this.$u, o3 = (a3 ? r2.utc : r2)().year(n3).startOf(`year`), s2 = 4 - o3.isoWeekday(), o3.isoWeekday() > 4 && (s2 += 7), o3.add(s2, e3));
        return c2.diff(l2, `week`) + 1;
      }, a2.isoWeekday = function(e4) {
        return this.$utils().u(e4) ? this.day() || 7 : this.day(this.day() % 7 ? e4 : e4 - 7);
      };
      var o2 = a2.startOf;
      a2.startOf = function(e4, t4) {
        var n3 = this.$utils(), r3 = !!n3.u(t4) || t4;
        return n3.p(e4) === `isoweek` ? r3 ? this.date(this.date() - (this.isoWeekday() - 1)).startOf(`day`) : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf(`day`) : o2.bind(this)(e4, t4);
      };
    };
  }));
})), Hn = t(((e2, t2) => {
  (function(n2, r2) {
    typeof e2 == `object` && t2 !== void 0 ? t2.exports = r2() : typeof define == `function` && define.amd ? define(r2) : (n2 = typeof globalThis < `u` ? globalThis : n2 || self).dayjs_plugin_customParseFormat = r2();
  })(e2, (function() {
    var e3 = { LTS: `h:mm:ss A`, LT: `h:mm A`, L: `MM/DD/YYYY`, LL: `MMMM D, YYYY`, LLL: `MMMM D, YYYY h:mm A`, LLLL: `dddd, MMMM D, YYYY h:mm A` }, t3 = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n2 = /\d/, r2 = /\d\d/, i2 = /\d\d?/, a2 = /\d*[^-_:/,()\s\d]+/, o2 = {}, s2 = function(e4) {
      return (e4 = +e4) + (e4 > 68 ? 1900 : 2e3);
    }, c2 = function(e4) {
      return function(t4) {
        this[e4] = +t4;
      };
    }, l2 = [/[+-]\d\d:?(\d\d)?|Z/, function(e4) {
      (this.zone || (this.zone = {})).offset = (function(e5) {
        if (!e5 || e5 === `Z`) return 0;
        var t4 = e5.match(/([+-]|\d\d)/g), n3 = 60 * t4[1] + (+t4[2] || 0);
        return n3 === 0 ? 0 : t4[0] === `+` ? -n3 : n3;
      })(e4);
    }], u2 = function(e4) {
      var t4 = o2[e4];
      return t4 && (t4.indexOf ? t4 : t4.s.concat(t4.f));
    }, d2 = function(e4, t4) {
      var n3, r3 = o2.meridiem;
      if (r3) {
        for (var i3 = 1; i3 <= 24; i3 += 1) if (e4.indexOf(r3(i3, 0, t4)) > -1) {
          n3 = i3 > 12;
          break;
        }
      } else n3 = e4 === (t4 ? `pm` : `PM`);
      return n3;
    }, f2 = { A: [a2, function(e4) {
      this.afternoon = d2(e4, false);
    }], a: [a2, function(e4) {
      this.afternoon = d2(e4, true);
    }], Q: [n2, function(e4) {
      this.month = 3 * (e4 - 1) + 1;
    }], S: [n2, function(e4) {
      this.milliseconds = 100 * e4;
    }], SS: [r2, function(e4) {
      this.milliseconds = 10 * e4;
    }], SSS: [/\d{3}/, function(e4) {
      this.milliseconds = +e4;
    }], s: [i2, c2(`seconds`)], ss: [i2, c2(`seconds`)], m: [i2, c2(`minutes`)], mm: [i2, c2(`minutes`)], H: [i2, c2(`hours`)], h: [i2, c2(`hours`)], HH: [i2, c2(`hours`)], hh: [i2, c2(`hours`)], D: [i2, c2(`day`)], DD: [r2, c2(`day`)], Do: [a2, function(e4) {
      var t4 = o2.ordinal;
      if (this.day = e4.match(/\d+/)[0], t4) for (var n3 = 1; n3 <= 31; n3 += 1) t4(n3).replace(/\[|\]/g, ``) === e4 && (this.day = n3);
    }], w: [i2, c2(`week`)], ww: [r2, c2(`week`)], M: [i2, c2(`month`)], MM: [r2, c2(`month`)], MMM: [a2, function(e4) {
      var t4 = u2(`months`), n3 = (u2(`monthsShort`) || t4.map((function(e5) {
        return e5.slice(0, 3);
      }))).indexOf(e4) + 1;
      if (n3 < 1) throw Error();
      this.month = n3 % 12 || n3;
    }], MMMM: [a2, function(e4) {
      var t4 = u2(`months`).indexOf(e4) + 1;
      if (t4 < 1) throw Error();
      this.month = t4 % 12 || t4;
    }], Y: [/[+-]?\d+/, c2(`year`)], YY: [r2, function(e4) {
      this.year = s2(e4);
    }], YYYY: [/\d{4}/, c2(`year`)], Z: l2, ZZ: l2 };
    function p2(n3) {
      for (var r3 = n3, i3 = o2 && o2.formats, a3 = (n3 = r3.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(t4, n4, r4) {
        var a4 = r4 && r4.toUpperCase();
        return n4 || i3[r4] || e3[r4] || i3[a4].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(e4, t5, n5) {
          return t5 || n5.slice(1);
        }));
      }))).match(t3), s3 = a3.length, c3 = 0; c3 < s3; c3 += 1) {
        var l3 = a3[c3], u3 = f2[l3], d3 = u3 && u3[0], p3 = u3 && u3[1];
        a3[c3] = p3 ? { regex: d3, parser: p3 } : l3.replace(/^\[|\]$/g, ``);
      }
      return function(e4) {
        for (var t4 = {}, n4 = 0, r4 = 0; n4 < s3; n4 += 1) {
          var i4 = a3[n4];
          if (typeof i4 == `string`) r4 += i4.length;
          else {
            var o3 = i4.regex, c4 = i4.parser, l4 = e4.slice(r4), u4 = o3.exec(l4)[0];
            c4.call(t4, u4), e4 = e4.replace(u4, ``);
          }
        }
        return (function(e5) {
          var t5 = e5.afternoon;
          if (t5 !== void 0) {
            var n5 = e5.hours;
            t5 ? n5 < 12 && (e5.hours += 12) : n5 === 12 && (e5.hours = 0), delete e5.afternoon;
          }
        })(t4), t4;
      };
    }
    return function(e4, t4, n3) {
      n3.p.customParseFormat = true, e4 && e4.parseTwoDigitYear && (s2 = e4.parseTwoDigitYear);
      var r3 = t4.prototype, i3 = r3.parse;
      r3.parse = function(e5) {
        var t5 = e5.date, r4 = e5.utc, a3 = e5.args;
        this.$u = r4;
        var s3 = a3[1];
        if (typeof s3 == `string`) {
          var c3 = true === a3[2], l3 = true === a3[3], u3 = c3 || l3, d3 = a3[2];
          l3 && (d3 = a3[2]), o2 = this.$locale(), !c3 && d3 && (o2 = n3.Ls[d3]), this.$d = (function(e6, t6, n4, r5) {
            try {
              if ([`x`, `X`].indexOf(t6) > -1) return new Date((t6 === `X` ? 1e3 : 1) * e6);
              var i4 = p2(t6)(e6), a4 = i4.year, o3 = i4.month, s4 = i4.day, c4 = i4.hours, l4 = i4.minutes, u4 = i4.seconds, d4 = i4.milliseconds, f4 = i4.zone, m3 = i4.week, h3 = /* @__PURE__ */ new Date(), g2 = s4 || (a4 || o3 ? 1 : h3.getDate()), _2 = a4 || h3.getFullYear(), v2 = 0;
              a4 && !o3 || (v2 = o3 > 0 ? o3 - 1 : h3.getMonth());
              var y2, b2 = c4 || 0, x2 = l4 || 0, S2 = u4 || 0, C2 = d4 || 0;
              return f4 ? new Date(Date.UTC(_2, v2, g2, b2, x2, S2, C2 + 60 * f4.offset * 1e3)) : n4 ? new Date(Date.UTC(_2, v2, g2, b2, x2, S2, C2)) : (y2 = new Date(_2, v2, g2, b2, x2, S2, C2), m3 && (y2 = r5(y2).week(m3).toDate()), y2);
            } catch {
              return /* @__PURE__ */ new Date(``);
            }
          })(t5, s3, r4, n3), this.init(), d3 && true !== d3 && (this.$L = this.locale(d3).$L), u3 && t5 != this.format(s3) && (this.$d = /* @__PURE__ */ new Date(``)), o2 = {};
        } else if (s3 instanceof Array) for (var f3 = s3.length, m2 = 1; m2 <= f3; m2 += 1) {
          a3[1] = s3[m2 - 1];
          var h2 = n3.apply(this, a3);
          if (h2.isValid()) {
            this.$d = h2.$d, this.$L = h2.$L, this.init();
            break;
          }
          m2 === f3 && (this.$d = /* @__PURE__ */ new Date(``));
        }
        else i3.call(this, e5);
      };
    };
  }));
})), Un = t(((e2, t2) => {
  (function(n2, r2) {
    typeof e2 == `object` && t2 !== void 0 ? t2.exports = r2() : typeof define == `function` && define.amd ? define(r2) : (n2 = typeof globalThis < `u` ? globalThis : n2 || self).dayjs_plugin_advancedFormat = r2();
  })(e2, (function() {
    return function(e3, t3) {
      var n2 = t3.prototype, r2 = n2.format;
      n2.format = function(e4) {
        var t4 = this, n3 = this.$locale();
        if (!this.isValid()) return r2.bind(this)(e4);
        var i2 = this.$utils(), a2 = (e4 || `YYYY-MM-DDTHH:mm:ssZ`).replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, (function(e5) {
          switch (e5) {
            case `Q`:
              return Math.ceil((t4.$M + 1) / 3);
            case `Do`:
              return n3.ordinal(t4.$D);
            case `gggg`:
              return t4.weekYear();
            case `GGGG`:
              return t4.isoWeekYear();
            case `wo`:
              return n3.ordinal(t4.week(), `W`);
            case `w`:
            case `ww`:
              return i2.s(t4.week(), e5 === `w` ? 1 : 2, `0`);
            case `W`:
            case `WW`:
              return i2.s(t4.isoWeek(), e5 === `W` ? 1 : 2, `0`);
            case `k`:
            case `kk`:
              return i2.s(String(t4.$H === 0 ? 24 : t4.$H), e5 === `k` ? 1 : 2, `0`);
            case `X`:
              return Math.floor(t4.$d.getTime() / 1e3);
            case `x`:
              return t4.$d.getTime();
            case `z`:
              return `[` + t4.offsetName() + `]`;
            case `zzz`:
              return `[` + t4.offsetName(`long`) + `]`;
            default:
              return e5;
          }
        }));
        return r2.bind(this)(a2);
      };
    };
  }));
})), Wn = t(((e2, t2) => {
  (function(n2, r2) {
    typeof e2 == `object` && t2 !== void 0 ? t2.exports = r2() : typeof define == `function` && define.amd ? define(r2) : (n2 = typeof globalThis < `u` ? globalThis : n2 || self).dayjs_plugin_duration = r2();
  })(e2, (function() {
    var e3, t3, n2 = 1e3, r2 = 6e4, i2 = 36e5, a2 = 864e5, o2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, s2 = 31536e6, c2 = 2628e6, l2 = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, u2 = { years: s2, months: c2, days: a2, hours: i2, minutes: r2, seconds: n2, milliseconds: 1, weeks: 6048e5 }, d2 = function(e4) {
      return e4 instanceof v2;
    }, f2 = function(e4, t4, n3) {
      return new v2(e4, n3, t4.$l);
    }, p2 = function(e4) {
      return t3.p(e4) + `s`;
    }, m2 = function(e4) {
      return e4 < 0;
    }, h2 = function(e4) {
      return m2(e4) ? Math.ceil(e4) : Math.floor(e4);
    }, g2 = function(e4) {
      return Math.abs(e4);
    }, _2 = function(e4, t4) {
      return e4 ? m2(e4) ? { negative: true, format: `` + g2(e4) + t4 } : { negative: false, format: `` + e4 + t4 } : { negative: false, format: `` };
    }, v2 = (function() {
      function m3(e4, t4, n3) {
        var r3 = this;
        if (this.$d = {}, this.$l = n3, e4 === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), t4) return f2(e4 * u2[p2(t4)], this);
        if (typeof e4 == `number`) return this.$ms = e4, this.parseFromMilliseconds(), this;
        if (typeof e4 == `object`) return Object.keys(e4).forEach((function(t5) {
          r3.$d[p2(t5)] = e4[t5];
        })), this.calMilliseconds(), this;
        if (typeof e4 == `string`) {
          var i3 = e4.match(l2);
          if (i3) {
            var a3 = i3.slice(2).map((function(e5) {
              return e5 == null ? 0 : Number(e5);
            }));
            return this.$d.years = a3[0], this.$d.months = a3[1], this.$d.weeks = a3[2], this.$d.days = a3[3], this.$d.hours = a3[4], this.$d.minutes = a3[5], this.$d.seconds = a3[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var g3 = m3.prototype;
      return g3.calMilliseconds = function() {
        var e4 = this;
        this.$ms = Object.keys(this.$d).reduce((function(t4, n3) {
          return t4 + (e4.$d[n3] || 0) * u2[n3];
        }), 0);
      }, g3.parseFromMilliseconds = function() {
        var e4 = this.$ms;
        this.$d.years = h2(e4 / s2), e4 %= s2, this.$d.months = h2(e4 / c2), e4 %= c2, this.$d.days = h2(e4 / a2), e4 %= a2, this.$d.hours = h2(e4 / i2), e4 %= i2, this.$d.minutes = h2(e4 / r2), e4 %= r2, this.$d.seconds = h2(e4 / n2), e4 %= n2, this.$d.milliseconds = e4;
      }, g3.toISOString = function() {
        var e4 = _2(this.$d.years, `Y`), t4 = _2(this.$d.months, `M`), n3 = +this.$d.days || 0;
        this.$d.weeks && (n3 += 7 * this.$d.weeks);
        var r3 = _2(n3, `D`), i3 = _2(this.$d.hours, `H`), a3 = _2(this.$d.minutes, `M`), o3 = this.$d.seconds || 0;
        this.$d.milliseconds && (o3 += this.$d.milliseconds / 1e3, o3 = Math.round(1e3 * o3) / 1e3);
        var s3 = _2(o3, `S`), c3 = e4.negative || t4.negative || r3.negative || i3.negative || a3.negative || s3.negative, l3 = i3.format || a3.format || s3.format ? `T` : ``, u3 = (c3 ? `-` : ``) + `P` + e4.format + t4.format + r3.format + l3 + i3.format + a3.format + s3.format;
        return u3 === `P` || u3 === `-P` ? `P0D` : u3;
      }, g3.toJSON = function() {
        return this.toISOString();
      }, g3.format = function(e4) {
        var n3 = e4 || `YYYY-MM-DDTHH:mm:ss`, r3 = { Y: this.$d.years, YY: t3.s(this.$d.years, 2, `0`), YYYY: t3.s(this.$d.years, 4, `0`), M: this.$d.months, MM: t3.s(this.$d.months, 2, `0`), D: this.$d.days, DD: t3.s(this.$d.days, 2, `0`), H: this.$d.hours, HH: t3.s(this.$d.hours, 2, `0`), m: this.$d.minutes, mm: t3.s(this.$d.minutes, 2, `0`), s: this.$d.seconds, ss: t3.s(this.$d.seconds, 2, `0`), SSS: t3.s(this.$d.milliseconds, 3, `0`) };
        return n3.replace(o2, (function(e5, t4) {
          return t4 || String(r3[e5]);
        }));
      }, g3.as = function(e4) {
        return this.$ms / u2[p2(e4)];
      }, g3.get = function(e4) {
        var t4 = this.$ms, n3 = p2(e4);
        return n3 === `milliseconds` ? t4 %= 1e3 : t4 = n3 === `weeks` ? h2(t4 / u2[n3]) : this.$d[n3], t4 || 0;
      }, g3.add = function(e4, t4, n3) {
        var r3;
        return r3 = t4 ? e4 * u2[p2(t4)] : d2(e4) ? e4.$ms : f2(e4, this).$ms, f2(this.$ms + r3 * (n3 ? -1 : 1), this);
      }, g3.subtract = function(e4, t4) {
        return this.add(e4, t4, true);
      }, g3.locale = function(e4) {
        var t4 = this.clone();
        return t4.$l = e4, t4;
      }, g3.clone = function() {
        return f2(this.$ms, this);
      }, g3.humanize = function(t4) {
        return e3().add(this.$ms, `ms`).locale(this.$l).fromNow(!t4);
      }, g3.valueOf = function() {
        return this.asMilliseconds();
      }, g3.milliseconds = function() {
        return this.get(`milliseconds`);
      }, g3.asMilliseconds = function() {
        return this.as(`milliseconds`);
      }, g3.seconds = function() {
        return this.get(`seconds`);
      }, g3.asSeconds = function() {
        return this.as(`seconds`);
      }, g3.minutes = function() {
        return this.get(`minutes`);
      }, g3.asMinutes = function() {
        return this.as(`minutes`);
      }, g3.hours = function() {
        return this.get(`hours`);
      }, g3.asHours = function() {
        return this.as(`hours`);
      }, g3.days = function() {
        return this.get(`days`);
      }, g3.asDays = function() {
        return this.as(`days`);
      }, g3.weeks = function() {
        return this.get(`weeks`);
      }, g3.asWeeks = function() {
        return this.as(`weeks`);
      }, g3.months = function() {
        return this.get(`months`);
      }, g3.asMonths = function() {
        return this.as(`months`);
      }, g3.years = function() {
        return this.get(`years`);
      }, g3.asYears = function() {
        return this.as(`years`);
      }, m3;
    })(), y2 = function(e4, t4, n3) {
      return e4.add(t4.years() * n3, `y`).add(t4.months() * n3, `M`).add(t4.days() * n3, `d`).add(t4.hours() * n3, `h`).add(t4.minutes() * n3, `m`).add(t4.seconds() * n3, `s`).add(t4.milliseconds() * n3, `ms`);
    };
    return function(n3, r3, i3) {
      e3 = i3, t3 = i3().$utils(), i3.duration = function(e4, t4) {
        return f2(e4, { $l: i3.locale() }, t4);
      }, i3.isDuration = d2;
      var a3 = r3.prototype.add, o3 = r3.prototype.subtract;
      r3.prototype.add = function(e4, t4) {
        return d2(e4) ? y2(this, e4, 1) : a3.bind(this)(e4, t4);
      }, r3.prototype.subtract = function(e4, t4) {
        return d2(e4) ? y2(this, e4, -1) : o3.bind(this)(e4, t4);
      };
    };
  }));
})), Gn = ee(), Y = e(S(), 1), Kn = e(Vn(), 1), qn = e(Hn(), 1), Jn = e(Un(), 1), Yn = e(S(), 1), Xn = e(Wn(), 1), Zn = (function() {
  var e2 = _(function(e3, t3, n3, r3) {
    for (n3 || (n3 = {}), r3 = e3.length; r3--; n3[e3[r3]] = t3) ;
    return n3;
  }, `o`), t2 = [6, 8, 10, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 33, 35, 36, 38, 40], n2 = [1, 26], r2 = [1, 27], i2 = [1, 28], a2 = [1, 29], o2 = [1, 30], s2 = [1, 31], c2 = [1, 32], l2 = [1, 33], u2 = [1, 34], d2 = [1, 9], f2 = [1, 10], p2 = [1, 11], m2 = [1, 12], h2 = [1, 13], g2 = [1, 14], v2 = [1, 15], y2 = [1, 16], b2 = [1, 19], x2 = [1, 20], S2 = [1, 21], C2 = [1, 22], w2 = [1, 23], T2 = [1, 25], E2 = [1, 35], D2 = { trace: _(function() {
  }, `trace`), yy: {}, symbols_: { error: 2, start: 3, gantt: 4, document: 5, EOF: 6, line: 7, SPACE: 8, statement: 9, NL: 10, weekday: 11, weekday_monday: 12, weekday_tuesday: 13, weekday_wednesday: 14, weekday_thursday: 15, weekday_friday: 16, weekday_saturday: 17, weekday_sunday: 18, weekend: 19, weekend_friday: 20, weekend_saturday: 21, dateFormat: 22, inclusiveEndDates: 23, topAxis: 24, axisFormat: 25, tickInterval: 26, excludes: 27, includes: 28, todayMarker: 29, title: 30, acc_title: 31, acc_title_value: 32, acc_descr: 33, acc_descr_value: 34, acc_descr_multiline_value: 35, section: 36, clickStatement: 37, taskTxt: 38, taskData: 39, click: 40, callbackname: 41, callbackargs: 42, href: 43, clickStatementDebug: 44, $accept: 0, $end: 1 }, terminals_: { 2: `error`, 4: `gantt`, 6: `EOF`, 8: `SPACE`, 10: `NL`, 12: `weekday_monday`, 13: `weekday_tuesday`, 14: `weekday_wednesday`, 15: `weekday_thursday`, 16: `weekday_friday`, 17: `weekday_saturday`, 18: `weekday_sunday`, 20: `weekend_friday`, 21: `weekend_saturday`, 22: `dateFormat`, 23: `inclusiveEndDates`, 24: `topAxis`, 25: `axisFormat`, 26: `tickInterval`, 27: `excludes`, 28: `includes`, 29: `todayMarker`, 30: `title`, 31: `acc_title`, 32: `acc_title_value`, 33: `acc_descr`, 34: `acc_descr_value`, 35: `acc_descr_multiline_value`, 36: `section`, 38: `taskTxt`, 39: `taskData`, 40: `click`, 41: `callbackname`, 42: `callbackargs`, 43: `href` }, productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [19, 1], [19, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 1], [9, 1], [9, 2], [37, 2], [37, 3], [37, 3], [37, 4], [37, 3], [37, 4], [37, 2], [44, 2], [44, 3], [44, 3], [44, 4], [44, 3], [44, 4], [44, 2]], performAction: _(function(e3, t3, n3, r3, i3, a3, o3) {
    var s3 = a3.length - 1;
    switch (i3) {
      case 1:
        return a3[s3 - 1];
      case 2:
        this.$ = [];
        break;
      case 3:
        a3[s3 - 1].push(a3[s3]), this.$ = a3[s3 - 1];
        break;
      case 4:
      case 5:
        this.$ = a3[s3];
        break;
      case 6:
      case 7:
        this.$ = [];
        break;
      case 8:
        r3.setWeekday(`monday`);
        break;
      case 9:
        r3.setWeekday(`tuesday`);
        break;
      case 10:
        r3.setWeekday(`wednesday`);
        break;
      case 11:
        r3.setWeekday(`thursday`);
        break;
      case 12:
        r3.setWeekday(`friday`);
        break;
      case 13:
        r3.setWeekday(`saturday`);
        break;
      case 14:
        r3.setWeekday(`sunday`);
        break;
      case 15:
        r3.setWeekend(`friday`);
        break;
      case 16:
        r3.setWeekend(`saturday`);
        break;
      case 17:
        r3.setDateFormat(a3[s3].substr(11)), this.$ = a3[s3].substr(11);
        break;
      case 18:
        r3.enableInclusiveEndDates(), this.$ = a3[s3].substr(18);
        break;
      case 19:
        r3.TopAxis(), this.$ = a3[s3].substr(8);
        break;
      case 20:
        r3.setAxisFormat(a3[s3].substr(11)), this.$ = a3[s3].substr(11);
        break;
      case 21:
        r3.setTickInterval(a3[s3].substr(13)), this.$ = a3[s3].substr(13);
        break;
      case 22:
        r3.setExcludes(a3[s3].substr(9)), this.$ = a3[s3].substr(9);
        break;
      case 23:
        r3.setIncludes(a3[s3].substr(9)), this.$ = a3[s3].substr(9);
        break;
      case 24:
        r3.setTodayMarker(a3[s3].substr(12)), this.$ = a3[s3].substr(12);
        break;
      case 27:
        r3.setDiagramTitle(a3[s3].substr(6)), this.$ = a3[s3].substr(6);
        break;
      case 28:
        this.$ = a3[s3].trim(), r3.setAccTitle(this.$);
        break;
      case 29:
      case 30:
        this.$ = a3[s3].trim(), r3.setAccDescription(this.$);
        break;
      case 31:
        r3.addSection(a3[s3].substr(8)), this.$ = a3[s3].substr(8);
        break;
      case 33:
        r3.addTask(a3[s3 - 1], a3[s3]), this.$ = `task`;
        break;
      case 34:
        this.$ = a3[s3 - 1], r3.setClickEvent(a3[s3 - 1], a3[s3], null);
        break;
      case 35:
        this.$ = a3[s3 - 2], r3.setClickEvent(a3[s3 - 2], a3[s3 - 1], a3[s3]);
        break;
      case 36:
        this.$ = a3[s3 - 2], r3.setClickEvent(a3[s3 - 2], a3[s3 - 1], null), r3.setLink(a3[s3 - 2], a3[s3]);
        break;
      case 37:
        this.$ = a3[s3 - 3], r3.setClickEvent(a3[s3 - 3], a3[s3 - 2], a3[s3 - 1]), r3.setLink(a3[s3 - 3], a3[s3]);
        break;
      case 38:
        this.$ = a3[s3 - 2], r3.setClickEvent(a3[s3 - 2], a3[s3], null), r3.setLink(a3[s3 - 2], a3[s3 - 1]);
        break;
      case 39:
        this.$ = a3[s3 - 3], r3.setClickEvent(a3[s3 - 3], a3[s3 - 1], a3[s3]), r3.setLink(a3[s3 - 3], a3[s3 - 2]);
        break;
      case 40:
        this.$ = a3[s3 - 1], r3.setLink(a3[s3 - 1], a3[s3]);
        break;
      case 41:
      case 47:
        this.$ = a3[s3 - 1] + ` ` + a3[s3];
        break;
      case 42:
      case 43:
      case 45:
        this.$ = a3[s3 - 2] + ` ` + a3[s3 - 1] + ` ` + a3[s3];
        break;
      case 44:
      case 46:
        this.$ = a3[s3 - 3] + ` ` + a3[s3 - 2] + ` ` + a3[s3 - 1] + ` ` + a3[s3];
        break;
    }
  }, `anonymous`), table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, e2(t2, [2, 2], { 5: 3 }), { 6: [1, 4], 7: 5, 8: [1, 6], 9: 7, 10: [1, 8], 11: 17, 12: n2, 13: r2, 14: i2, 15: a2, 16: o2, 17: s2, 18: c2, 19: 18, 20: l2, 21: u2, 22: d2, 23: f2, 24: p2, 25: m2, 26: h2, 27: g2, 28: v2, 29: y2, 30: b2, 31: x2, 33: S2, 35: C2, 36: w2, 37: 24, 38: T2, 40: E2 }, e2(t2, [2, 7], { 1: [2, 1] }), e2(t2, [2, 3]), { 9: 36, 11: 17, 12: n2, 13: r2, 14: i2, 15: a2, 16: o2, 17: s2, 18: c2, 19: 18, 20: l2, 21: u2, 22: d2, 23: f2, 24: p2, 25: m2, 26: h2, 27: g2, 28: v2, 29: y2, 30: b2, 31: x2, 33: S2, 35: C2, 36: w2, 37: 24, 38: T2, 40: E2 }, e2(t2, [2, 5]), e2(t2, [2, 6]), e2(t2, [2, 17]), e2(t2, [2, 18]), e2(t2, [2, 19]), e2(t2, [2, 20]), e2(t2, [2, 21]), e2(t2, [2, 22]), e2(t2, [2, 23]), e2(t2, [2, 24]), e2(t2, [2, 25]), e2(t2, [2, 26]), e2(t2, [2, 27]), { 32: [1, 37] }, { 34: [1, 38] }, e2(t2, [2, 30]), e2(t2, [2, 31]), e2(t2, [2, 32]), { 39: [1, 39] }, e2(t2, [2, 8]), e2(t2, [2, 9]), e2(t2, [2, 10]), e2(t2, [2, 11]), e2(t2, [2, 12]), e2(t2, [2, 13]), e2(t2, [2, 14]), e2(t2, [2, 15]), e2(t2, [2, 16]), { 41: [1, 40], 43: [1, 41] }, e2(t2, [2, 4]), e2(t2, [2, 28]), e2(t2, [2, 29]), e2(t2, [2, 33]), e2(t2, [2, 34], { 42: [1, 42], 43: [1, 43] }), e2(t2, [2, 40], { 41: [1, 44] }), e2(t2, [2, 35], { 43: [1, 45] }), e2(t2, [2, 36]), e2(t2, [2, 38], { 42: [1, 46] }), e2(t2, [2, 37]), e2(t2, [2, 39])], defaultActions: {}, parseError: _(function(e3, t3) {
    if (t3.recoverable) this.trace(e3);
    else {
      var n3 = Error(e3);
      throw n3.hash = t3, n3;
    }
  }, `parseError`), parse: _(function(e3) {
    var t3 = this, n3 = [0], r3 = [], i3 = [null], a3 = [], o3 = this.table, s3 = ``, c3 = 0, l3 = 0, u3 = 0, d3 = 2, f3 = 1, p3 = a3.slice.call(arguments, 1), m3 = Object.create(this.lexer), h3 = { yy: {} };
    for (var g3 in this.yy) Object.prototype.hasOwnProperty.call(this.yy, g3) && (h3.yy[g3] = this.yy[g3]);
    m3.setInput(e3, h3.yy), h3.yy.lexer = m3, h3.yy.parser = this, m3.yylloc === void 0 && (m3.yylloc = {});
    var v3 = m3.yylloc;
    a3.push(v3);
    var y3 = m3.options && m3.options.ranges;
    typeof h3.yy.parseError == `function` ? this.parseError = h3.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
    function b3(e4) {
      n3.length -= 2 * e4, i3.length -= e4, a3.length -= e4;
    }
    _(b3, `popStack`);
    function x3() {
      var e4 = r3.pop() || m3.lex() || f3;
      return typeof e4 != `number` && (e4 instanceof Array && (r3 = e4, e4 = r3.pop()), e4 = t3.symbols_[e4] || e4), e4;
    }
    _(x3, `lex`);
    for (var S3, C3, w3, T3, E3, D3 = {}, O3, k2, ee2, te2; ; ) {
      if (w3 = n3[n3.length - 1], this.defaultActions[w3] ? T3 = this.defaultActions[w3] : (S3 ?? (S3 = x3()), T3 = o3[w3] && o3[w3][S3]), T3 === void 0 || !T3.length || !T3[0]) {
        var ne2 = ``;
        for (O3 in te2 = [], o3[w3]) this.terminals_[O3] && O3 > d3 && te2.push(`'` + this.terminals_[O3] + `'`);
        ne2 = m3.showPosition ? `Parse error on line ` + (c3 + 1) + `:
` + m3.showPosition() + `
Expecting ` + te2.join(`, `) + `, got '` + (this.terminals_[S3] || S3) + `'` : `Parse error on line ` + (c3 + 1) + `: Unexpected ` + (S3 == f3 ? `end of input` : `'` + (this.terminals_[S3] || S3) + `'`), this.parseError(ne2, { text: m3.match, token: this.terminals_[S3] || S3, line: m3.yylineno, loc: v3, expected: te2 });
      }
      if (T3[0] instanceof Array && T3.length > 1) throw Error(`Parse Error: multiple actions possible at state: ` + w3 + `, token: ` + S3);
      switch (T3[0]) {
        case 1:
          n3.push(S3), i3.push(m3.yytext), a3.push(m3.yylloc), n3.push(T3[1]), S3 = null, C3 ? (S3 = C3, C3 = null) : (l3 = m3.yyleng, s3 = m3.yytext, c3 = m3.yylineno, v3 = m3.yylloc, u3 > 0 && u3--);
          break;
        case 2:
          if (k2 = this.productions_[T3[1]][1], D3.$ = i3[i3.length - k2], D3._$ = { first_line: a3[a3.length - (k2 || 1)].first_line, last_line: a3[a3.length - 1].last_line, first_column: a3[a3.length - (k2 || 1)].first_column, last_column: a3[a3.length - 1].last_column }, y3 && (D3._$.range = [a3[a3.length - (k2 || 1)].range[0], a3[a3.length - 1].range[1]]), E3 = this.performAction.apply(D3, [s3, l3, c3, h3.yy, T3[1], i3, a3].concat(p3)), E3 !== void 0) return E3;
          k2 && (n3 = n3.slice(0, -1 * k2 * 2), i3 = i3.slice(0, -1 * k2), a3 = a3.slice(0, -1 * k2)), n3.push(this.productions_[T3[1]][0]), i3.push(D3.$), a3.push(D3._$), ee2 = o3[n3[n3.length - 2]][n3[n3.length - 1]], n3.push(ee2);
          break;
        case 3:
          return true;
      }
    }
    return true;
  }, `parse`) };
  D2.lexer = (function() {
    return { EOF: 1, parseError: _(function(e3, t3) {
      if (this.yy.parser) this.yy.parser.parseError(e3, t3);
      else throw Error(e3);
    }, `parseError`), setInput: _(function(e3, t3) {
      return this.yy = t3 || this.yy || {}, this._input = e3, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = ``, this.conditionStack = [`INITIAL`], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
    }, `setInput`), input: _(function() {
      var e3 = this._input[0];
      return this.yytext += e3, this.yyleng++, this.offset++, this.match += e3, this.matched += e3, e3.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e3;
    }, `input`), unput: _(function(e3) {
      var t3 = e3.length, n3 = e3.split(/(?:\r\n?|\n)/g);
      this._input = e3 + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t3), this.offset -= t3;
      var r3 = this.match.split(/(?:\r\n?|\n)/g);
      this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n3.length - 1 && (this.yylineno -= n3.length - 1);
      var i3 = this.yylloc.range;
      return this.yylloc = { first_line: this.yylloc.first_line, last_line: this.yylineno + 1, first_column: this.yylloc.first_column, last_column: n3 ? (n3.length === r3.length ? this.yylloc.first_column : 0) + r3[r3.length - n3.length].length - n3[0].length : this.yylloc.first_column - t3 }, this.options.ranges && (this.yylloc.range = [i3[0], i3[0] + this.yyleng - t3]), this.yyleng = this.yytext.length, this;
    }, `unput`), more: _(function() {
      return this._more = true, this;
    }, `more`), reject: _(function() {
      if (this.options.backtrack_lexer) this._backtrack = true;
      else return this.parseError(`Lexical error on line ` + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), { text: ``, token: null, line: this.yylineno });
      return this;
    }, `reject`), less: _(function(e3) {
      this.unput(this.match.slice(e3));
    }, `less`), pastInput: _(function() {
      var e3 = this.matched.substr(0, this.matched.length - this.match.length);
      return (e3.length > 20 ? `...` : ``) + e3.substr(-20).replace(/\n/g, ``);
    }, `pastInput`), upcomingInput: _(function() {
      var e3 = this.match;
      return e3.length < 20 && (e3 += this._input.substr(0, 20 - e3.length)), (e3.substr(0, 20) + (e3.length > 20 ? `...` : ``)).replace(/\n/g, ``);
    }, `upcomingInput`), showPosition: _(function() {
      var e3 = this.pastInput(), t3 = Array(e3.length + 1).join(`-`);
      return e3 + this.upcomingInput() + `
` + t3 + `^`;
    }, `showPosition`), test_match: _(function(e3, t3) {
      var n3, r3, i3;
      if (this.options.backtrack_lexer && (i3 = { yylineno: this.yylineno, yylloc: { first_line: this.yylloc.first_line, last_line: this.last_line, first_column: this.yylloc.first_column, last_column: this.yylloc.last_column }, yytext: this.yytext, match: this.match, matches: this.matches, matched: this.matched, yyleng: this.yyleng, offset: this.offset, _more: this._more, _input: this._input, yy: this.yy, conditionStack: this.conditionStack.slice(0), done: this.done }, this.options.ranges && (i3.yylloc.range = this.yylloc.range.slice(0))), r3 = e3[0].match(/(?:\r\n?|\n).*/g), r3 && (this.yylineno += r3.length), this.yylloc = { first_line: this.yylloc.last_line, last_line: this.yylineno + 1, first_column: this.yylloc.last_column, last_column: r3 ? r3[r3.length - 1].length - r3[r3.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e3[0].length }, this.yytext += e3[0], this.match += e3[0], this.matches = e3, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(e3[0].length), this.matched += e3[0], n3 = this.performAction.call(this, this.yy, this, t3, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), n3) return n3;
      if (this._backtrack) {
        for (var a3 in i3) this[a3] = i3[a3];
        return false;
      }
      return false;
    }, `test_match`), next: _(function() {
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
    }, `next`), lex: _(function() {
      return this.next() || this.lex();
    }, `lex`), begin: _(function(e3) {
      this.conditionStack.push(e3);
    }, `begin`), popState: _(function() {
      return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
    }, `popState`), _currentRules: _(function() {
      return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
    }, `_currentRules`), topState: _(function(e3) {
      return e3 = this.conditionStack.length - 1 - Math.abs(e3 || 0), e3 >= 0 ? this.conditionStack[e3] : `INITIAL`;
    }, `topState`), pushState: _(function(e3) {
      this.begin(e3);
    }, `pushState`), stateStackSize: _(function() {
      return this.conditionStack.length;
    }, `stateStackSize`), options: { "case-insensitive": true }, performAction: _(function(e3, t3, n3, r3) {
      switch (n3) {
        case 0:
          return this.begin(`open_directive`), `open_directive`;
        case 1:
          return this.begin(`acc_title`), 31;
        case 2:
          return this.popState(), `acc_title_value`;
        case 3:
          return this.begin(`acc_descr`), 33;
        case 4:
          return this.popState(), `acc_descr_value`;
        case 5:
          this.begin(`acc_descr_multiline`);
          break;
        case 6:
          this.popState();
          break;
        case 7:
          return `acc_descr_multiline_value`;
        case 8:
          break;
        case 9:
          break;
        case 10:
          break;
        case 11:
          return 10;
        case 12:
          break;
        case 13:
          break;
        case 14:
          this.begin(`href`);
          break;
        case 15:
          this.popState();
          break;
        case 16:
          return 43;
        case 17:
          this.begin(`callbackname`);
          break;
        case 18:
          this.popState();
          break;
        case 19:
          this.popState(), this.begin(`callbackargs`);
          break;
        case 20:
          return 41;
        case 21:
          this.popState();
          break;
        case 22:
          return 42;
        case 23:
          this.begin(`click`);
          break;
        case 24:
          this.popState();
          break;
        case 25:
          return 40;
        case 26:
          return 4;
        case 27:
          return 22;
        case 28:
          return 23;
        case 29:
          return 24;
        case 30:
          return 25;
        case 31:
          return 26;
        case 32:
          return 28;
        case 33:
          return 27;
        case 34:
          return 29;
        case 35:
          return 12;
        case 36:
          return 13;
        case 37:
          return 14;
        case 38:
          return 15;
        case 39:
          return 16;
        case 40:
          return 17;
        case 41:
          return 18;
        case 42:
          return 20;
        case 43:
          return 21;
        case 44:
          return `date`;
        case 45:
          return 30;
        case 46:
          return `accDescription`;
        case 47:
          return 36;
        case 48:
          return 38;
        case 49:
          return 39;
        case 50:
          return `:`;
        case 51:
          return 6;
        case 52:
          return `INVALID`;
      }
    }, `anonymous`), rules: [/^(?:%%\{)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:%%(?!\{)*[^\n]*)/i, /^(?:[^\}]%%*[^\n]*)/i, /^(?:%%*[^\n]*[\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:%[^\n]*)/i, /^(?:href[\s]+["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:call[\s]+)/i, /^(?:\([\s]*\))/i, /^(?:\()/i, /^(?:[^(]*)/i, /^(?:\))/i, /^(?:[^)]*)/i, /^(?:click[\s]+)/i, /^(?:[\s\n])/i, /^(?:[^\s\n]*)/i, /^(?:gantt\b)/i, /^(?:dateFormat\s[^#\n;]+)/i, /^(?:inclusiveEndDates\b)/i, /^(?:topAxis\b)/i, /^(?:axisFormat\s[^#\n;]+)/i, /^(?:tickInterval\s[^#\n;]+)/i, /^(?:includes\s[^#\n;]+)/i, /^(?:excludes\s[^#\n;]+)/i, /^(?:todayMarker\s[^\n;]+)/i, /^(?:weekday\s+monday\b)/i, /^(?:weekday\s+tuesday\b)/i, /^(?:weekday\s+wednesday\b)/i, /^(?:weekday\s+thursday\b)/i, /^(?:weekday\s+friday\b)/i, /^(?:weekday\s+saturday\b)/i, /^(?:weekday\s+sunday\b)/i, /^(?:weekend\s+friday\b)/i, /^(?:weekend\s+saturday\b)/i, /^(?:\d\d\d\d-\d\d-\d\d\b)/i, /^(?:title\s[^\n]+)/i, /^(?:accDescription\s[^#\n;]+)/i, /^(?:section\s[^\n]+)/i, /^(?:[^:\n]+)/i, /^(?::[^#\n;]+)/i, /^(?::)/i, /^(?:$)/i, /^(?:.)/i], conditions: { acc_descr_multiline: { rules: [6, 7], inclusive: false }, acc_descr: { rules: [4], inclusive: false }, acc_title: { rules: [2], inclusive: false }, callbackargs: { rules: [21, 22], inclusive: false }, callbackname: { rules: [18, 19, 20], inclusive: false }, href: { rules: [15, 16], inclusive: false }, click: { rules: [24, 25], inclusive: false }, INITIAL: { rules: [0, 1, 3, 5, 8, 9, 10, 11, 12, 13, 14, 17, 23, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52], inclusive: true } } };
  })();
  function O2() {
    this.yy = {};
  }
  return _(O2, `Parser`), O2.prototype = D2, D2.Parser = O2, new O2();
})();
Zn.parser = Zn;
var Qn = Zn;
Y.default.extend(Kn.default), Y.default.extend(qn.default), Y.default.extend(Jn.default);
var $n = { friday: 5, saturday: 6 }, X = ``, er = ``, tr = void 0, nr = ``, rr = [], ir = [], ar = /* @__PURE__ */ new Map(), or = [], sr = [], cr = ``, lr = ``, ur = [`active`, `done`, `crit`, `milestone`, `vert`], dr = [], fr = false, pr = false, mr = `sunday`, hr = `saturday`, gr = 0, _r = _(function() {
  or = [], sr = [], cr = ``, dr = [], Yr = 0, $r = void 0, ei = void 0, Z = [], X = ``, er = ``, lr = ``, tr = void 0, nr = ``, rr = [], ir = [], fr = false, pr = false, gr = 0, ar = /* @__PURE__ */ new Map(), o(), mr = `sunday`, hr = `saturday`;
}, `clear`), vr = _(function(e2) {
  er = e2;
}, `setAxisFormat`), yr = _(function() {
  return er;
}, `getAxisFormat`), br = _(function(e2) {
  tr = e2;
}, `setTickInterval`), xr = _(function() {
  return tr;
}, `getTickInterval`), Sr = _(function(e2) {
  nr = e2;
}, `setTodayMarker`), Cr = _(function() {
  return nr;
}, `getTodayMarker`), wr = _(function(e2) {
  X = e2;
}, `setDateFormat`), Tr = _(function() {
  fr = true;
}, `enableInclusiveEndDates`), Er = _(function() {
  return fr;
}, `endDatesAreInclusive`), Dr = _(function() {
  pr = true;
}, `enableTopAxis`), Or = _(function() {
  return pr;
}, `topAxisEnabled`), kr = _(function(e2) {
  lr = e2;
}, `setDisplayMode`), Ar = _(function() {
  return lr;
}, `getDisplayMode`), jr = _(function() {
  return X;
}, `getDateFormat`), Mr = _(function(e2) {
  rr = e2.toLowerCase().split(/[\s,]+/);
}, `setIncludes`), Nr = _(function() {
  return rr;
}, `getIncludes`), Pr = _(function(e2) {
  ir = e2.toLowerCase().split(/[\s,]+/);
}, `setExcludes`), Fr = _(function() {
  return ir;
}, `getExcludes`), Ir = _(function() {
  return ar;
}, `getLinks`), Lr = _(function(e2) {
  cr = e2, or.push(e2);
}, `addSection`), Rr = _(function() {
  return or;
}, `getSections`), zr = _(function() {
  let e2 = ii(), t2 = 0;
  for (; !e2 && t2 < 10; ) e2 = ii(), t2++;
  return sr = Z, sr;
}, `getTasks`), Br = _(function(e2, t2, n2, r2) {
  let i2 = e2.format(t2.trim()), a2 = e2.format(`YYYY-MM-DD`);
  return r2.includes(i2) || r2.includes(a2) ? false : n2.includes(`weekends`) && (e2.isoWeekday() === $n[hr] || e2.isoWeekday() === $n[hr] + 1) || n2.includes(e2.format(`dddd`).toLowerCase()) ? true : n2.includes(i2) || n2.includes(a2);
}, `isInvalidDate`), Vr = _(function(e2) {
  mr = e2;
}, `setWeekday`), Hr = _(function() {
  return mr;
}, `getWeekday`), Ur = _(function(e2) {
  hr = e2;
}, `setWeekend`), Wr = _(function(e2, t2, n2, r2) {
  if (!n2.length || e2.manualEndTime) return;
  let i2;
  i2 = e2.startTime instanceof Date ? (0, Y.default)(e2.startTime) : (0, Y.default)(e2.startTime, t2, true), i2 = i2.add(1, `d`);
  let a2;
  a2 = e2.endTime instanceof Date ? (0, Y.default)(e2.endTime) : (0, Y.default)(e2.endTime, t2, true);
  let [o2, s2] = Gr(i2, a2, t2, n2, r2);
  e2.endTime = o2.toDate(), e2.renderEndTime = s2;
}, `checkTaskDates`), Gr = _(function(e2, t2, n2, r2, i2) {
  let a2 = false, o2 = null;
  for (; e2 <= t2; ) a2 || (o2 = t2.toDate()), a2 = Br(e2, n2, r2, i2), a2 && (t2 = t2.add(1, `d`)), e2 = e2.add(1, `d`);
  return [t2, o2];
}, `fixTaskDates`), Kr = _(function(e2, t2, n2) {
  if (n2 = n2.trim(), _((e3) => {
    let t3 = e3.trim();
    return t3 === `x` || t3 === `X`;
  }, `isTimestampFormat`)(t2) && /^\d+$/.test(n2)) return new Date(Number(n2));
  let r2 = /^after\s+(?<ids>[\d\w- ]+)/.exec(n2);
  if (r2 !== null) {
    let e3 = null;
    for (let t4 of r2.groups.ids.split(` `)) {
      let n3 = Q(t4);
      n3 !== void 0 && (!e3 || n3.endTime > e3.endTime) && (e3 = n3);
    }
    if (e3) return e3.endTime;
    let t3 = /* @__PURE__ */ new Date();
    return t3.setHours(0, 0, 0, 0), t3;
  }
  let i2 = (0, Y.default)(n2, t2.trim(), true);
  if (i2.isValid()) return i2.toDate();
  {
    g.debug(`Invalid date:` + n2), g.debug(`With date format:` + t2.trim());
    let e3 = new Date(n2);
    if (e3 === void 0 || isNaN(e3.getTime()) || e3.getFullYear() < -1e4 || e3.getFullYear() > 1e4) throw Error(`Invalid date:` + n2);
    return e3;
  }
}, `getStartDate`), qr = _(function(e2) {
  let t2 = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(e2.trim());
  return t2 === null ? [NaN, `ms`] : [Number.parseFloat(t2[1]), t2[2]];
}, `parseDuration`), Jr = _(function(e2, t2, n2, r2 = false) {
  n2 = n2.trim();
  let i2 = /^until\s+(?<ids>[\d\w- ]+)/.exec(n2);
  if (i2 !== null) {
    let e3 = null;
    for (let t4 of i2.groups.ids.split(` `)) {
      let n3 = Q(t4);
      n3 !== void 0 && (!e3 || n3.startTime < e3.startTime) && (e3 = n3);
    }
    if (e3) return e3.startTime;
    let t3 = /* @__PURE__ */ new Date();
    return t3.setHours(0, 0, 0, 0), t3;
  }
  let a2 = (0, Y.default)(n2, t2.trim(), true);
  if (a2.isValid()) return r2 && (a2 = a2.add(1, `d`)), a2.toDate();
  let o2 = (0, Y.default)(e2), [s2, c2] = qr(n2);
  if (!Number.isNaN(s2)) {
    let e3 = o2.add(s2, c2);
    e3.isValid() && (o2 = e3);
  }
  return o2.toDate();
}, `getEndDate`), Yr = 0, Xr = _(function(e2) {
  return e2 === void 0 ? (Yr += 1, `task` + Yr) : e2;
}, `parseId`), Zr = _(function(e2, t2) {
  let n2;
  n2 = t2.substr(0, 1) === `:` ? t2.substr(1, t2.length) : t2;
  let r2 = n2.split(`,`), i2 = {};
  ui(r2, i2, ur);
  for (let e3 = 0; e3 < r2.length; e3++) r2[e3] = r2[e3].trim();
  let a2 = ``;
  switch (r2.length) {
    case 1:
      i2.id = Xr(), i2.startTime = e2.endTime, a2 = r2[0];
      break;
    case 2:
      i2.id = Xr(), i2.startTime = Kr(void 0, X, r2[0]), a2 = r2[1];
      break;
    case 3:
      i2.id = Xr(r2[0]), i2.startTime = Kr(void 0, X, r2[1]), a2 = r2[2];
      break;
    default:
  }
  return a2 && (i2.endTime = Jr(i2.startTime, X, a2, fr), i2.manualEndTime = (0, Y.default)(a2, `YYYY-MM-DD`, true).isValid(), Wr(i2, X, ir, rr)), i2;
}, `compileData`), Qr = _(function(e2, t2) {
  let n2;
  n2 = t2.substr(0, 1) === `:` ? t2.substr(1, t2.length) : t2;
  let r2 = n2.split(`,`), i2 = {};
  ui(r2, i2, ur);
  for (let e3 = 0; e3 < r2.length; e3++) r2[e3] = r2[e3].trim();
  switch (r2.length) {
    case 1:
      i2.id = Xr(), i2.startTime = { type: `prevTaskEnd`, id: e2 }, i2.endTime = { data: r2[0] };
      break;
    case 2:
      i2.id = Xr(), i2.startTime = { type: `getStartDate`, startData: r2[0] }, i2.endTime = { data: r2[1] };
      break;
    case 3:
      i2.id = Xr(r2[0]), i2.startTime = { type: `getStartDate`, startData: r2[1] }, i2.endTime = { data: r2[2] };
      break;
    default:
  }
  return i2;
}, `parseData`), $r, ei, Z = [], ti = {}, ni = _(function(e2, t2) {
  let n2 = { section: cr, type: cr, processed: false, manualEndTime: false, renderEndTime: null, raw: { data: t2 }, task: e2, classes: [] }, r2 = Qr(ei, t2);
  n2.raw.startTime = r2.startTime, n2.raw.endTime = r2.endTime, n2.id = r2.id, n2.prevTaskId = ei, n2.active = r2.active, n2.done = r2.done, n2.crit = r2.crit, n2.milestone = r2.milestone, n2.vert = r2.vert, n2.order = gr, gr++;
  let i2 = Z.push(n2);
  ei = n2.id, ti[n2.id] = i2 - 1;
}, `addTask`), Q = _(function(e2) {
  let t2 = ti[e2];
  return Z[t2];
}, `findTaskById`), ri = _(function(e2, t2) {
  let n2 = { section: cr, type: cr, description: e2, task: e2, classes: [] }, r2 = Zr($r, t2);
  n2.startTime = r2.startTime, n2.endTime = r2.endTime, n2.id = r2.id, n2.active = r2.active, n2.done = r2.done, n2.crit = r2.crit, n2.milestone = r2.milestone, n2.vert = r2.vert, $r = n2, sr.push(n2);
}, `addTaskOrg`), ii = _(function() {
  let e2 = _(function(e3) {
    let t3 = Z[e3], n2 = ``;
    switch (Z[e3].raw.startTime.type) {
      case `prevTaskEnd`:
        t3.startTime = Q(t3.prevTaskId).endTime;
        break;
      case `getStartDate`:
        n2 = Kr(void 0, X, Z[e3].raw.startTime.startData), n2 && (Z[e3].startTime = n2);
        break;
    }
    return Z[e3].startTime && (Z[e3].endTime = Jr(Z[e3].startTime, X, Z[e3].raw.endTime.data, fr), Z[e3].endTime && (Z[e3].processed = true, Z[e3].manualEndTime = (0, Y.default)(Z[e3].raw.endTime.data, `YYYY-MM-DD`, true).isValid(), Wr(Z[e3], X, ir, rr))), Z[e3].processed;
  }, `compileTask`), t2 = true;
  for (let [n2, r2] of Z.entries()) e2(n2), t2 && (t2 = r2.processed);
  return t2;
}, `compileTasks`), ai = _(function(e2, t2) {
  let n2 = t2;
  s().securityLevel !== `loose` && (n2 = (0, Gn.sanitizeUrl)(t2)), e2.split(`,`).forEach(function(e3) {
    Q(e3) !== void 0 && (ci(e3, () => {
      window.open(n2, `_self`);
    }), ar.set(e3, n2));
  }), oi(e2, `clickable`);
}, `setLink`), oi = _(function(e2, t2) {
  e2.split(`,`).forEach(function(e3) {
    let n2 = Q(e3);
    n2 !== void 0 && n2.classes.push(t2);
  });
}, `setClass`), si = _(function(e2, t2, n2) {
  if (s().securityLevel !== `loose` || t2 === void 0) return;
  let r2 = [];
  if (typeof n2 == `string`) {
    r2 = n2.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    for (let e3 = 0; e3 < r2.length; e3++) {
      let t3 = r2[e3].trim();
      t3.startsWith(`"`) && t3.endsWith(`"`) && (t3 = t3.substr(1, t3.length - 2)), r2[e3] = t3;
    }
  }
  r2.length === 0 && r2.push(e2), Q(e2) !== void 0 && ci(e2, () => {
    k.runFunc(t2, ...r2);
  });
}, `setClickFun`), ci = _(function(e2, t2) {
  dr.push(function() {
    let n2 = document.querySelector(`[id="${e2}"]`);
    n2 !== null && n2.addEventListener(`click`, function() {
      t2();
    });
  }, function() {
    let n2 = document.querySelector(`[id="${e2}-text"]`);
    n2 !== null && n2.addEventListener(`click`, function() {
      t2();
    });
  });
}, `pushFun`), li = { getConfig: _(() => s().gantt, `getConfig`), clear: _r, setDateFormat: wr, getDateFormat: jr, enableInclusiveEndDates: Tr, endDatesAreInclusive: Er, enableTopAxis: Dr, topAxisEnabled: Or, setAxisFormat: vr, getAxisFormat: yr, setTickInterval: br, getTickInterval: xr, setTodayMarker: Sr, getTodayMarker: Cr, setAccTitle: n, getAccTitle: u, setDiagramTitle: i, getDiagramTitle: r, setDisplayMode: kr, getDisplayMode: Ar, setAccDescription: d, getAccDescription: a, addSection: Lr, getSections: Rr, getTasks: zr, addTask: ni, findTaskById: Q, addTaskOrg: ri, setIncludes: Mr, getIncludes: Nr, setExcludes: Pr, getExcludes: Fr, setClickEvent: _(function(e2, t2, n2) {
  e2.split(`,`).forEach(function(e3) {
    si(e3, t2, n2);
  }), oi(e2, `clickable`);
}, `setClickEvent`), setLink: ai, getLinks: Ir, bindFunctions: _(function(e2) {
  dr.forEach(function(t2) {
    t2(e2);
  });
}, `bindFunctions`), parseDuration: qr, isInvalidDate: Br, setWeekday: Vr, getWeekday: Hr, setWeekend: Ur };
function ui(e2, t2, n2) {
  let r2 = true;
  for (; r2; ) r2 = false, n2.forEach(function(n3) {
    let i2 = `^\\s*` + n3 + `\\s*$`, a2 = new RegExp(i2);
    e2[0].match(a2) && (t2[n3] = true, e2.shift(1), r2 = true);
  });
}
_(ui, `getTaskTags`), Yn.default.extend(Xn.default);
var di = _(function() {
  g.debug(`Something is calling, setConf, remove the call`);
}, `setConf`), fi = { monday: Xe, tuesday: Ze, wednesday: Qe, thursday: H, friday: $e, saturday: et, sunday: Ye }, pi = _((e2, t2) => {
  let n2 = [...e2].map(() => -1 / 0), r2 = [...e2].sort((e3, t3) => e3.startTime - t3.startTime || e3.order - t3.order), i2 = 0;
  for (let e3 of r2) for (let r3 = 0; r3 < n2.length; r3++) if (e3.startTime >= n2[r3]) {
    n2[r3] = e3.endTime, e3.order = r3 + t2, r3 > i2 && (i2 = r3);
    break;
  }
  return i2;
}, `getMaxIntersections`), $, mi = 1e4, hi = { parser: Qn, db: li, renderer: { setConf: di, draw: _(function(e2, t2, n2, r2) {
  let i2 = s().gantt, a2 = s().securityLevel, o2;
  a2 === `sandbox` && (o2 = y(`#i` + t2));
  let u2 = y(a2 === `sandbox` ? o2.nodes()[0].contentDocument.body : `body`), d2 = a2 === `sandbox` ? o2.nodes()[0].contentDocument : document, f2 = d2.getElementById(t2);
  $ = f2.parentElement.offsetWidth, $ === void 0 && ($ = 1200), i2.useWidth !== void 0 && ($ = i2.useWidth);
  let p2 = r2.db.getTasks(), m2 = [];
  for (let e3 of p2) m2.push(e3.type);
  m2 = re2(m2);
  let h2 = {}, v2 = 2 * i2.topPadding;
  if (r2.db.getDisplayMode() === `compact` || i2.displayMode === `compact`) {
    let e3 = {};
    for (let t4 of p2) e3[t4.section] === void 0 ? e3[t4.section] = [t4] : e3[t4.section].push(t4);
    let t3 = 0;
    for (let n3 of Object.keys(e3)) {
      let r3 = pi(e3[n3], t3) + 1;
      t3 += r3, v2 += r3 * (i2.barHeight + i2.barGap), h2[n3] = r3;
    }
  } else {
    v2 += p2.length * (i2.barHeight + i2.barGap);
    for (let e3 of m2) h2[e3] = p2.filter((t3) => t3.type === e3).length;
  }
  f2.setAttribute(`viewBox`, `0 0 ` + $ + ` ` + v2);
  let b2 = u2.select(`[id="${t2}"]`), x2 = Bn().domain([ne(p2, function(e3) {
    return e3.startTime;
  }), te(p2, function(e3) {
    return e3.endTime;
  })]).rangeRound([0, $ - i2.leftPadding - i2.rightPadding]);
  function S2(e3, t3) {
    let n3 = e3.startTime, r3 = t3.startTime, i3 = 0;
    return n3 > r3 ? i3 = 1 : n3 < r3 && (i3 = -1), i3;
  }
  _(S2, `taskCompare`), p2.sort(S2), C2(p2, $, v2), c(b2, v2, $, i2.useMaxWidth), b2.append(`text`).text(r2.db.getDiagramTitle()).attr(`x`, $ / 2).attr(`y`, i2.titleTopMargin).attr(`class`, `titleText`);
  function C2(e3, t3, n3) {
    let a3 = i2.barHeight, o3 = a3 + i2.barGap, s2 = i2.topPadding, c2 = i2.leftPadding, l2 = D().domain([0, m2.length]).range([`#00B9FA`, `#F95002`]).interpolate(Ie);
    T2(o3, s2, c2, t3, n3, e3, r2.db.getExcludes(), r2.db.getIncludes()), O2(c2, s2, t3, n3), w2(e3, o3, s2, c2, a3, l2, t3, n3), k2(o3, s2, c2, a3, l2), ee2(c2, s2, t3, n3);
  }
  _(C2, `makeGantt`);
  function w2(e3, n3, a3, o3, c2, l2, u3) {
    e3.sort((e4, t3) => e4.vert === t3.vert ? 0 : e4.vert ? 1 : -1);
    let d3 = [...new Set(e3.map((e4) => e4.order))].map((t3) => e3.find((e4) => e4.order === t3));
    b2.append(`g`).selectAll(`rect`).data(d3).enter().append(`rect`).attr(`x`, 0).attr(`y`, function(e4, t3) {
      return t3 = e4.order, t3 * n3 + a3 - 2;
    }).attr(`width`, function() {
      return u3 - i2.rightPadding / 2;
    }).attr(`height`, n3).attr(`class`, function(e4) {
      for (let [t3, n4] of m2.entries()) if (e4.type === n4) return `section section` + t3 % i2.numberSectionStyles;
      return `section section0`;
    }).enter();
    let f3 = b2.append(`g`).selectAll(`rect`).data(e3).enter(), h3 = r2.db.getLinks();
    if (f3.append(`rect`).attr(`id`, function(e4) {
      return e4.id;
    }).attr(`rx`, 3).attr(`ry`, 3).attr(`x`, function(e4) {
      return e4.milestone ? x2(e4.startTime) + o3 + 0.5 * (x2(e4.endTime) - x2(e4.startTime)) - 0.5 * c2 : x2(e4.startTime) + o3;
    }).attr(`y`, function(e4, t3) {
      return t3 = e4.order, e4.vert ? i2.gridLineStartPadding : t3 * n3 + a3;
    }).attr(`width`, function(e4) {
      return e4.milestone ? c2 : e4.vert ? 0.08 * c2 : x2(e4.renderEndTime || e4.endTime) - x2(e4.startTime);
    }).attr(`height`, function(e4) {
      return e4.vert ? p2.length * (i2.barHeight + i2.barGap) + i2.barHeight * 2 : c2;
    }).attr(`transform-origin`, function(e4, t3) {
      return t3 = e4.order, (x2(e4.startTime) + o3 + 0.5 * (x2(e4.endTime) - x2(e4.startTime))).toString() + `px ` + (t3 * n3 + a3 + 0.5 * c2).toString() + `px`;
    }).attr(`class`, function(e4) {
      let t3 = ``;
      e4.classes.length > 0 && (t3 = e4.classes.join(` `));
      let n4 = 0;
      for (let [t4, r4] of m2.entries()) e4.type === r4 && (n4 = t4 % i2.numberSectionStyles);
      let r3 = ``;
      return e4.active ? e4.crit ? r3 += ` activeCrit` : r3 = ` active` : e4.done ? r3 = e4.crit ? ` doneCrit` : ` done` : e4.crit && (r3 += ` crit`), r3.length === 0 && (r3 = ` task`), e4.milestone && (r3 = ` milestone ` + r3), e4.vert && (r3 = ` vert ` + r3), r3 += n4, r3 += ` ` + t3, `task` + r3;
    }), f3.append(`text`).attr(`id`, function(e4) {
      return e4.id + `-text`;
    }).text(function(e4) {
      return e4.task;
    }).attr(`font-size`, i2.fontSize).attr(`x`, function(e4) {
      let t3 = x2(e4.startTime), n4 = x2(e4.renderEndTime || e4.endTime);
      if (e4.milestone && (t3 += 0.5 * (x2(e4.endTime) - x2(e4.startTime)) - 0.5 * c2, n4 = t3 + c2), e4.vert) return x2(e4.startTime) + o3;
      let r3 = this.getBBox().width;
      return r3 > n4 - t3 ? n4 + r3 + 1.5 * i2.leftPadding > u3 ? t3 + o3 - 5 : n4 + o3 + 5 : (n4 - t3) / 2 + t3 + o3;
    }).attr(`y`, function(e4, t3) {
      return e4.vert ? i2.gridLineStartPadding + p2.length * (i2.barHeight + i2.barGap) + 60 : (t3 = e4.order, t3 * n3 + i2.barHeight / 2 + (i2.fontSize / 2 - 2) + a3);
    }).attr(`text-height`, c2).attr(`class`, function(e4) {
      let t3 = x2(e4.startTime), n4 = x2(e4.endTime);
      e4.milestone && (n4 = t3 + c2);
      let r3 = this.getBBox().width, a4 = ``;
      e4.classes.length > 0 && (a4 = e4.classes.join(` `));
      let o4 = 0;
      for (let [t4, n5] of m2.entries()) e4.type === n5 && (o4 = t4 % i2.numberSectionStyles);
      let s2 = ``;
      return e4.active && (s2 = e4.crit ? `activeCritText` + o4 : `activeText` + o4), e4.done ? s2 = e4.crit ? s2 + ` doneCritText` + o4 : s2 + ` doneText` + o4 : e4.crit && (s2 = s2 + ` critText` + o4), e4.milestone && (s2 += ` milestoneText`), e4.vert && (s2 += ` vertText`), r3 > n4 - t3 ? n4 + r3 + 1.5 * i2.leftPadding > u3 ? a4 + ` taskTextOutsideLeft taskTextOutside` + o4 + ` ` + s2 : a4 + ` taskTextOutsideRight taskTextOutside` + o4 + ` ` + s2 + ` width-` + r3 : a4 + ` taskText taskText` + o4 + ` ` + s2 + ` width-` + r3;
    }), s().securityLevel === `sandbox`) {
      let e4;
      e4 = y(`#i` + t2);
      let n4 = e4.nodes()[0].contentDocument;
      f3.filter(function(e5) {
        return h3.has(e5.id);
      }).each(function(e5) {
        var t3 = n4.querySelector(`#` + e5.id), r3 = n4.querySelector(`#` + e5.id + `-text`);
        let i3 = t3.parentNode;
        var a4 = n4.createElement(`a`);
        a4.setAttribute(`xlink:href`, h3.get(e5.id)), a4.setAttribute(`target`, `_top`), i3.appendChild(a4), a4.appendChild(t3), a4.appendChild(r3);
      });
    }
  }
  _(w2, `drawRects`);
  function T2(e3, t3, n3, a3, o3, s2, c2, l2) {
    if (c2.length === 0 && l2.length === 0) return;
    let u3, d3;
    for (let { startTime: e4, endTime: t4 } of s2) (u3 === void 0 || e4 < u3) && (u3 = e4), (d3 === void 0 || t4 > d3) && (d3 = t4);
    if (!u3 || !d3) return;
    if ((0, Yn.default)(d3).diff((0, Yn.default)(u3), `year`) > 5) {
      g.warn(`The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.`);
      return;
    }
    let f3 = r2.db.getDateFormat(), p3 = [], m3 = null, h3 = (0, Yn.default)(u3);
    for (; h3.valueOf() <= d3; ) r2.db.isInvalidDate(h3, f3, c2, l2) ? m3 ? m3.end = h3 : m3 = { start: h3, end: h3 } : m3 && (m3 = (p3.push(m3), null)), h3 = h3.add(1, `d`);
    b2.append(`g`).selectAll(`rect`).data(p3).enter().append(`rect`).attr(`id`, (e4) => `exclude-` + e4.start.format(`YYYY-MM-DD`)).attr(`x`, (e4) => x2(e4.start.startOf(`day`)) + n3).attr(`y`, i2.gridLineStartPadding).attr(`width`, (e4) => x2(e4.end.endOf(`day`)) - x2(e4.start.startOf(`day`))).attr(`height`, o3 - t3 - i2.gridLineStartPadding).attr(`transform-origin`, function(t4, r3) {
      return (x2(t4.start) + n3 + 0.5 * (x2(t4.end) - x2(t4.start))).toString() + `px ` + (r3 * e3 + 0.5 * o3).toString() + `px`;
    }).attr(`class`, `exclude-range`);
  }
  _(T2, `drawExcludeDays`);
  function E2(e3, t3, n3, r3) {
    if (n3 <= 0 || e3 > t3) return 1 / 0;
    let i3 = t3 - e3, a3 = Yn.default.duration({ [r3 ?? `day`]: n3 }).asMilliseconds();
    return a3 <= 0 ? 1 / 0 : Math.ceil(i3 / a3);
  }
  _(E2, `getEstimatedTickCount`);
  function O2(e3, t3, n3, a3) {
    let o3 = r2.db.getDateFormat(), s2 = r2.db.getAxisFormat(), c2;
    c2 = s2 || (o3 === `D` ? `%d` : i2.axisFormat ?? `%Y-%m-%d`);
    let l2 = ge(x2).tickSize(-a3 + t3 + i2.gridLineStartPadding).tickFormat(Fn(c2)), u3 = /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(r2.db.getTickInterval() || i2.tickInterval);
    if (u3 !== null) {
      let e4 = parseInt(u3[1], 10);
      if (isNaN(e4) || e4 <= 0) g.warn(`Invalid tick interval value: "${u3[1]}". Skipping custom tick interval.`);
      else {
        let t4 = u3[2], n4 = r2.db.getWeekday() || i2.weekday, a4 = x2.domain(), o4 = a4[0], s3 = a4[1], c3 = E2(o4, s3, e4, t4);
        if (c3 > mi) g.warn(`The tick interval "${e4}${t4}" would generate ${c3} ticks, which exceeds the maximum allowed (${mi}). This may indicate an invalid date or time range. Skipping custom tick interval.`);
        else switch (t4) {
          case `millisecond`:
            l2.ticks(P.every(e4));
            break;
          case `second`:
            l2.ticks(z.every(e4));
            break;
          case `minute`:
            l2.ticks(Ue.every(e4));
            break;
          case `hour`:
            l2.ticks(Ge.every(e4));
            break;
          case `day`:
            l2.ticks(B.every(e4));
            break;
          case `week`:
            l2.ticks(fi[n4].every(e4));
            break;
          case `month`:
            l2.ticks(st.every(e4));
            break;
        }
      }
    }
    if (b2.append(`g`).attr(`class`, `grid`).attr(`transform`, `translate(` + e3 + `, ` + (a3 - 50) + `)`).call(l2).selectAll(`text`).style(`text-anchor`, `middle`).attr(`fill`, `#000`).attr(`stroke`, `none`).attr(`font-size`, 10).attr(`dy`, `1em`), r2.db.topAxisEnabled() || i2.topAxis) {
      let n4 = he(x2).tickSize(-a3 + t3 + i2.gridLineStartPadding).tickFormat(Fn(c2));
      if (u3 !== null) {
        let e4 = parseInt(u3[1], 10);
        if (isNaN(e4) || e4 <= 0) g.warn(`Invalid tick interval value: "${u3[1]}". Skipping custom tick interval.`);
        else {
          let t4 = u3[2], a4 = r2.db.getWeekday() || i2.weekday, o4 = x2.domain(), s3 = o4[0], c3 = o4[1];
          if (E2(s3, c3, e4, t4) <= mi) switch (t4) {
            case `millisecond`:
              n4.ticks(P.every(e4));
              break;
            case `second`:
              n4.ticks(z.every(e4));
              break;
            case `minute`:
              n4.ticks(Ue.every(e4));
              break;
            case `hour`:
              n4.ticks(Ge.every(e4));
              break;
            case `day`:
              n4.ticks(B.every(e4));
              break;
            case `week`:
              n4.ticks(fi[a4].every(e4));
              break;
            case `month`:
              n4.ticks(st.every(e4));
              break;
          }
        }
      }
      b2.append(`g`).attr(`class`, `grid`).attr(`transform`, `translate(` + e3 + `, ` + t3 + `)`).call(n4).selectAll(`text`).style(`text-anchor`, `middle`).attr(`fill`, `#000`).attr(`stroke`, `none`).attr(`font-size`, 10);
    }
  }
  _(O2, `makeGrid`);
  function k2(e3, t3) {
    let n3 = 0, r3 = Object.keys(h2).map((e4) => [e4, h2[e4]]);
    b2.append(`g`).selectAll(`text`).data(r3).enter().append(function(e4) {
      let t4 = e4[0].split(l.lineBreakRegex), n4 = -(t4.length - 1) / 2, r4 = d2.createElementNS(`http://www.w3.org/2000/svg`, `text`);
      r4.setAttribute(`dy`, n4 + `em`);
      for (let [e5, n5] of t4.entries()) {
        let t5 = d2.createElementNS(`http://www.w3.org/2000/svg`, `tspan`);
        t5.setAttribute(`alignment-baseline`, `central`), t5.setAttribute(`x`, `10`), e5 > 0 && t5.setAttribute(`dy`, `1em`), t5.textContent = n5, r4.appendChild(t5);
      }
      return r4;
    }).attr(`x`, 10).attr(`y`, function(i3, a3) {
      if (a3 > 0) for (let o3 = 0; o3 < a3; o3++) return n3 += r3[a3 - 1][1], i3[1] * e3 / 2 + n3 * e3 + t3;
      else return i3[1] * e3 / 2 + t3;
    }).attr(`font-size`, i2.sectionFontSize).attr(`class`, function(e4) {
      for (let [t4, n4] of m2.entries()) if (e4[0] === n4) return `sectionTitle sectionTitle` + t4 % i2.numberSectionStyles;
      return `sectionTitle`;
    });
  }
  _(k2, `vertLabels`);
  function ee2(e3, t3, n3, a3) {
    let o3 = r2.db.getTodayMarker();
    if (o3 === `off`) return;
    let s2 = b2.append(`g`).attr(`class`, `today`), c2 = /* @__PURE__ */ new Date(), l2 = s2.append(`line`);
    l2.attr(`x1`, x2(c2) + e3).attr(`x2`, x2(c2) + e3).attr(`y1`, i2.titleTopMargin).attr(`y2`, a3 - i2.titleTopMargin).attr(`class`, `today`), o3 !== `` && l2.attr(`style`, o3.replace(/,/g, `;`));
  }
  _(ee2, `drawToday`);
  function re2(e3) {
    let t3 = {}, n3 = [];
    for (let r3 = 0, i3 = e3.length; r3 < i3; ++r3) Object.prototype.hasOwnProperty.call(t3, e3[r3]) || (t3[e3[r3]] = true, n3.push(e3[r3]));
    return n3;
  }
  _(re2, `checkUnique`);
}, `draw`) }, styles: _((e2) => `
  .mermaid-main-font {
        font-family: ${e2.fontFamily};
  }

  .exclude-range {
    fill: ${e2.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${e2.sectionBkgColor};
  }

  .section2 {
    fill: ${e2.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${e2.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${e2.titleColor};
  }

  .sectionTitle1 {
    fill: ${e2.titleColor};
  }

  .sectionTitle2 {
    fill: ${e2.titleColor};
  }

  .sectionTitle3 {
    fill: ${e2.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${e2.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${e2.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${e2.fontFamily};
    fill: ${e2.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${e2.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${e2.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${e2.taskTextDarkColor};
    text-anchor: start;
    font-family: ${e2.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${e2.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${e2.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${e2.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${e2.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${e2.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${e2.taskBkgColor};
    stroke: ${e2.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${e2.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${e2.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${e2.activeTaskBkgColor};
    stroke: ${e2.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${e2.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${e2.doneTaskBorderColor};
    fill: ${e2.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${e2.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${e2.critBorderColor};
    fill: ${e2.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${e2.critBorderColor};
    fill: ${e2.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${e2.critBorderColor};
    fill: ${e2.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${e2.taskTextDarkColor} !important;
  }

  .vert {
    stroke: ${e2.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${e2.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${e2.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e2.titleColor || e2.textColor};
    font-family: ${e2.fontFamily};
  }
`, `getStyles`) };
export {
  hi as diagram
};
