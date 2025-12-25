import { l as e, n as t, o as n, r, t as i } from "./src-D8UWkQNo.js";
import { i as a, n as o, r as s, t as c } from "./defaultLocale-Dzu6vUN4.js";
import { t as l } from "./init-BBmXJqXp.js";
function u(e2, t2) {
  return e2 == null || t2 == null ? NaN : e2 < t2 ? -1 : e2 > t2 ? 1 : e2 >= t2 ? 0 : NaN;
}
function d(e2, t2) {
  return e2 == null || t2 == null ? NaN : t2 < e2 ? -1 : t2 > e2 ? 1 : t2 >= e2 ? 0 : NaN;
}
function f(e2) {
  let t2, n2, r2;
  e2.length === 2 ? (t2 = e2 === u || e2 === d ? e2 : p, n2 = e2, r2 = e2) : (t2 = u, n2 = (t3, n3) => u(e2(t3), n3), r2 = (t3, n3) => e2(t3) - n3);
  function i2(e3, r3, i3 = 0, a3 = e3.length) {
    if (i3 < a3) {
      if (t2(r3, r3) !== 0) return a3;
      do {
        let t3 = i3 + a3 >>> 1;
        n2(e3[t3], r3) < 0 ? i3 = t3 + 1 : a3 = t3;
      } while (i3 < a3);
    }
    return i3;
  }
  function a2(e3, r3, i3 = 0, a3 = e3.length) {
    if (i3 < a3) {
      if (t2(r3, r3) !== 0) return a3;
      do {
        let t3 = i3 + a3 >>> 1;
        n2(e3[t3], r3) <= 0 ? i3 = t3 + 1 : a3 = t3;
      } while (i3 < a3);
    }
    return i3;
  }
  function o2(e3, t3, n3 = 0, a3 = e3.length) {
    let o3 = i2(e3, t3, n3, a3 - 1);
    return o3 > n3 && r2(e3[o3 - 1], t3) > -r2(e3[o3], t3) ? o3 - 1 : o3;
  }
  return { left: i2, center: o2, right: a2 };
}
function p() {
  return 0;
}
function m(e2) {
  return e2 === null ? NaN : +e2;
}
var h = f(u);
const g = h.right;
h.left, f(m).center;
var _ = g, v = Math.sqrt(50), y = Math.sqrt(10), b = Math.sqrt(2);
function x(e2, t2, n2) {
  let r2 = (t2 - e2) / Math.max(0, n2), i2 = Math.floor(Math.log10(r2)), a2 = r2 / 10 ** i2, o2 = a2 >= v ? 10 : a2 >= y ? 5 : a2 >= b ? 2 : 1, s2, c2, l2;
  return i2 < 0 ? (l2 = 10 ** -i2 / o2, s2 = Math.round(e2 * l2), c2 = Math.round(t2 * l2), s2 / l2 < e2 && ++s2, c2 / l2 > t2 && --c2, l2 = -l2) : (l2 = 10 ** i2 * o2, s2 = Math.round(e2 / l2), c2 = Math.round(t2 / l2), s2 * l2 < e2 && ++s2, c2 * l2 > t2 && --c2), c2 < s2 && 0.5 <= n2 && n2 < 2 ? x(e2, t2, n2 * 2) : [s2, c2, l2];
}
function S(e2, t2, n2) {
  if (t2 = +t2, e2 = +e2, n2 = +n2, !(n2 > 0)) return [];
  if (e2 === t2) return [e2];
  let r2 = t2 < e2, [i2, a2, o2] = r2 ? x(t2, e2, n2) : x(e2, t2, n2);
  if (!(a2 >= i2)) return [];
  let s2 = a2 - i2 + 1, c2 = Array(s2);
  if (r2) if (o2 < 0) for (let e3 = 0; e3 < s2; ++e3) c2[e3] = (a2 - e3) / -o2;
  else for (let e3 = 0; e3 < s2; ++e3) c2[e3] = (a2 - e3) * o2;
  else if (o2 < 0) for (let e3 = 0; e3 < s2; ++e3) c2[e3] = (i2 + e3) / -o2;
  else for (let e3 = 0; e3 < s2; ++e3) c2[e3] = (i2 + e3) * o2;
  return c2;
}
function C(e2, t2, n2) {
  return t2 = +t2, e2 = +e2, n2 = +n2, x(e2, t2, n2)[2];
}
function w(e2, t2, n2) {
  t2 = +t2, e2 = +e2, n2 = +n2;
  let r2 = t2 < e2, i2 = r2 ? C(t2, e2, n2) : C(e2, t2, n2);
  return (r2 ? -1 : 1) * (i2 < 0 ? 1 / -i2 : i2);
}
function T(e2, t2) {
  t2 || (t2 = []);
  var n2 = e2 ? Math.min(t2.length, e2.length) : 0, r2 = t2.slice(), i2;
  return function(a2) {
    for (i2 = 0; i2 < n2; ++i2) r2[i2] = e2[i2] * (1 - a2) + t2[i2] * a2;
    return r2;
  };
}
function E(e2) {
  return ArrayBuffer.isView(e2) && !(e2 instanceof DataView);
}
function D(e2, t2) {
  var n2 = t2 ? t2.length : 0, r2 = e2 ? Math.min(n2, e2.length) : 0, i2 = Array(r2), a2 = Array(n2), o2;
  for (o2 = 0; o2 < r2; ++o2) i2[o2] = A(e2[o2], t2[o2]);
  for (; o2 < n2; ++o2) a2[o2] = t2[o2];
  return function(e3) {
    for (o2 = 0; o2 < r2; ++o2) a2[o2] = i2[o2](e3);
    return a2;
  };
}
function O(e2, t2) {
  var n2 = /* @__PURE__ */ new Date();
  return e2 = +e2, t2 = +t2, function(r2) {
    return n2.setTime(e2 * (1 - r2) + t2 * r2), n2;
  };
}
function k(e2, t2) {
  var n2 = {}, r2 = {}, i2;
  for (i2 in (typeof e2 != `object` || !e2) && (e2 = {}), (typeof t2 != `object` || !t2) && (t2 = {}), t2) i2 in e2 ? n2[i2] = A(e2[i2], t2[i2]) : r2[i2] = t2[i2];
  return function(e3) {
    for (i2 in n2) r2[i2] = n2[i2](e3);
    return r2;
  };
}
function A(a2, o2) {
  var s2 = typeof o2, c2;
  return o2 == null || s2 === `boolean` ? n(o2) : (s2 === `number` ? t : s2 === `string` ? (c2 = e(o2)) ? (o2 = c2, r) : i : o2 instanceof e ? r : o2 instanceof Date ? O : E(o2) ? T : Array.isArray(o2) ? D : typeof o2.valueOf != `function` && typeof o2.toString != `function` || isNaN(o2) ? k : t)(a2, o2);
}
function j(e2, t2) {
  return e2 = +e2, t2 = +t2, function(n2) {
    return Math.round(e2 * (1 - n2) + t2 * n2);
  };
}
function M(e2) {
  return Math.max(0, -a(Math.abs(e2)));
}
function N(e2, t2) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(a(t2) / 3))) * 3 - a(Math.abs(e2)));
}
function P(e2, t2) {
  return e2 = Math.abs(e2), t2 = Math.abs(t2) - e2, Math.max(0, a(t2) - a(e2)) + 1;
}
function F(e2) {
  return function() {
    return e2;
  };
}
function I(e2) {
  return +e2;
}
var L = [0, 1];
function R(e2) {
  return e2;
}
function z(e2, t2) {
  return (t2 -= e2 = +e2) ? function(n2) {
    return (n2 - e2) / t2;
  } : F(isNaN(t2) ? NaN : 0.5);
}
function B(e2, t2) {
  var n2;
  return e2 > t2 && (n2 = e2, e2 = t2, t2 = n2), function(n3) {
    return Math.max(e2, Math.min(t2, n3));
  };
}
function V(e2, t2, n2) {
  var r2 = e2[0], i2 = e2[1], a2 = t2[0], o2 = t2[1];
  return i2 < r2 ? (r2 = z(i2, r2), a2 = n2(o2, a2)) : (r2 = z(r2, i2), a2 = n2(a2, o2)), function(e3) {
    return a2(r2(e3));
  };
}
function H(e2, t2, n2) {
  var r2 = Math.min(e2.length, t2.length) - 1, i2 = Array(r2), a2 = Array(r2), o2 = -1;
  for (e2[r2] < e2[0] && (e2 = e2.slice().reverse(), t2 = t2.slice().reverse()); ++o2 < r2; ) i2[o2] = z(e2[o2], e2[o2 + 1]), a2[o2] = n2(t2[o2], t2[o2 + 1]);
  return function(t3) {
    var n3 = _(e2, t3, 1, r2) - 1;
    return a2[n3](i2[n3](t3));
  };
}
function U(e2, t2) {
  return t2.domain(e2.domain()).range(e2.range()).interpolate(e2.interpolate()).clamp(e2.clamp()).unknown(e2.unknown());
}
function W() {
  var e2 = L, n2 = L, r2 = A, i2, a2, o2, s2 = R, c2, l2, u2;
  function d2() {
    var t2 = Math.min(e2.length, n2.length);
    return s2 !== R && (s2 = B(e2[0], e2[t2 - 1])), c2 = t2 > 2 ? H : V, l2 = u2 = null, f2;
  }
  function f2(t2) {
    return t2 == null || isNaN(t2 = +t2) ? o2 : (l2 || (l2 = c2(e2.map(i2), n2, r2)))(i2(s2(t2)));
  }
  return f2.invert = function(r3) {
    return s2(a2((u2 || (u2 = c2(n2, e2.map(i2), t)))(r3)));
  }, f2.domain = function(t2) {
    return arguments.length ? (e2 = Array.from(t2, I), d2()) : e2.slice();
  }, f2.range = function(e3) {
    return arguments.length ? (n2 = Array.from(e3), d2()) : n2.slice();
  }, f2.rangeRound = function(e3) {
    return n2 = Array.from(e3), r2 = j, d2();
  }, f2.clamp = function(e3) {
    return arguments.length ? (s2 = e3 ? true : R, d2()) : s2 !== R;
  }, f2.interpolate = function(e3) {
    return arguments.length ? (r2 = e3, d2()) : r2;
  }, f2.unknown = function(e3) {
    return arguments.length ? (o2 = e3, f2) : o2;
  }, function(e3, t2) {
    return i2 = e3, a2 = t2, d2();
  };
}
function G() {
  return W()(R, R);
}
function K(e2, t2, n2, r2) {
  var i2 = w(e2, t2, n2), a2;
  switch (r2 = s(r2 ?? `,f`), r2.type) {
    case `s`:
      var l2 = Math.max(Math.abs(e2), Math.abs(t2));
      return r2.precision == null && !isNaN(a2 = N(i2, l2)) && (r2.precision = a2), o(r2, l2);
    case ``:
    case `e`:
    case `g`:
    case `p`:
    case `r`:
      r2.precision == null && !isNaN(a2 = P(i2, Math.max(Math.abs(e2), Math.abs(t2)))) && (r2.precision = a2 - (r2.type === `e`));
      break;
    case `f`:
    case `%`:
      r2.precision == null && !isNaN(a2 = M(i2)) && (r2.precision = a2 - (r2.type === `%`) * 2);
      break;
  }
  return c(r2);
}
function q(e2) {
  var t2 = e2.domain;
  return e2.ticks = function(e3) {
    var n2 = t2();
    return S(n2[0], n2[n2.length - 1], e3 ?? 10);
  }, e2.tickFormat = function(e3, n2) {
    var r2 = t2();
    return K(r2[0], r2[r2.length - 1], e3 ?? 10, n2);
  }, e2.nice = function(n2) {
    n2 ?? (n2 = 10);
    var r2 = t2(), i2 = 0, a2 = r2.length - 1, o2 = r2[i2], s2 = r2[a2], c2, l2, u2 = 10;
    for (s2 < o2 && (l2 = o2, o2 = s2, s2 = l2, l2 = i2, i2 = a2, a2 = l2); u2-- > 0; ) {
      if (l2 = C(o2, s2, n2), l2 === c2) return r2[i2] = o2, r2[a2] = s2, t2(r2);
      if (l2 > 0) o2 = Math.floor(o2 / l2) * l2, s2 = Math.ceil(s2 / l2) * l2;
      else if (l2 < 0) o2 = Math.ceil(o2 * l2) / l2, s2 = Math.floor(s2 * l2) / l2;
      else break;
      c2 = l2;
    }
    return e2;
  }, e2;
}
function J() {
  var e2 = G();
  return e2.copy = function() {
    return U(e2, J());
  }, l.apply(e2, arguments), q(e2);
}
export {
  f as a,
  w as i,
  G as n,
  U as r,
  J as t
};
