import { n as e, t } from "./path-B-GLhb_8.js";
import { a as n, c as r, d as i, f as a, i as o, l as s, n as c, o as l, p as u, r as d, s as f, t as p, u as m } from "./math-O_7OW4FW.js";
function h(e2) {
  return e2.innerRadius;
}
function g(e2) {
  return e2.outerRadius;
}
function _(e2) {
  return e2.startAngle;
}
function v(e2) {
  return e2.endAngle;
}
function y(e2) {
  return e2 && e2.padAngle;
}
function b(e2, t2, n2, r2, i2, a2, o2, s2) {
  var c2 = n2 - e2, l2 = r2 - t2, u2 = o2 - i2, d2 = s2 - a2, f2 = d2 * c2 - u2 * l2;
  if (!(f2 * f2 < 1e-12)) return f2 = (u2 * (t2 - a2) - d2 * (e2 - i2)) / f2, [e2 + f2 * c2, t2 + f2 * l2];
}
function x(e2, t2, n2, i2, o2, s2, c2) {
  var l2 = e2 - n2, u2 = t2 - i2, d2 = (c2 ? s2 : -s2) / a(l2 * l2 + u2 * u2), f2 = d2 * u2, p2 = -d2 * l2, m2 = e2 + f2, h2 = t2 + p2, g2 = n2 + f2, _2 = i2 + p2, v2 = (m2 + g2) / 2, y2 = (h2 + _2) / 2, b2 = g2 - m2, x2 = _2 - h2, S2 = b2 * b2 + x2 * x2, C = o2 - s2, w = m2 * _2 - g2 * h2, T = (x2 < 0 ? -1 : 1) * a(r(0, C * C * S2 - w * w)), E = (w * x2 - b2 * T) / S2, D = (-w * b2 - x2 * T) / S2, O = (w * x2 + b2 * T) / S2, k = (-w * b2 + x2 * T) / S2, A = E - v2, j = D - y2, M = O - v2, N = k - y2;
  return A * A + j * j > M * M + N * N && (E = O, D = k), { cx: E, cy: D, x01: -f2, y01: -p2, x11: E * (o2 / C - 1), y11: D * (o2 / C - 1) };
}
function S() {
  var r2 = h, l2 = g, S2 = e(0), C = null, w = _, T = v, E = y, D = null, O = t(k);
  function k() {
    var e2, t2, h2 = +r2.apply(this, arguments), g2 = +l2.apply(this, arguments), _2 = w.apply(this, arguments) - f, v2 = T.apply(this, arguments) - f, y2 = p(v2 - _2), k2 = v2 > _2;
    if (D || (D = e2 = O()), g2 < h2 && (t2 = g2, g2 = h2, h2 = t2), !(g2 > 1e-12)) D.moveTo(0, 0);
    else if (y2 > u - 1e-12) D.moveTo(g2 * n(_2), g2 * i(_2)), D.arc(0, 0, g2, _2, v2, !k2), h2 > 1e-12 && (D.moveTo(h2 * n(v2), h2 * i(v2)), D.arc(0, 0, h2, v2, _2, k2));
    else {
      var A = _2, j = v2, M = _2, N = v2, P = y2, F = y2, I = E.apply(this, arguments) / 2, L = I > 1e-12 && (C ? +C.apply(this, arguments) : a(h2 * h2 + g2 * g2)), R = s(p(g2 - h2) / 2, +S2.apply(this, arguments)), z = R, B = R, V, H;
      if (L > 1e-12) {
        var U = d(L / h2 * i(I)), W = d(L / g2 * i(I));
        (P -= U * 2) > 1e-12 ? (U *= k2 ? 1 : -1, M += U, N -= U) : (P = 0, M = N = (_2 + v2) / 2), (F -= W * 2) > 1e-12 ? (W *= k2 ? 1 : -1, A += W, j -= W) : (F = 0, A = j = (_2 + v2) / 2);
      }
      var G = g2 * n(A), K = g2 * i(A), q = h2 * n(N), J = h2 * i(N);
      if (R > 1e-12) {
        var Y = g2 * n(j), X = g2 * i(j), Z = h2 * n(M), Q = h2 * i(M), $;
        if (y2 < m) if ($ = b(G, K, Z, Q, Y, X, q, J)) {
          var ee = G - $[0], te = K - $[1], ne = Y - $[0], re = X - $[1], ie = 1 / i(c((ee * ne + te * re) / (a(ee * ee + te * te) * a(ne * ne + re * re))) / 2), ae = a($[0] * $[0] + $[1] * $[1]);
          z = s(R, (h2 - ae) / (ie - 1)), B = s(R, (g2 - ae) / (ie + 1));
        } else z = B = 0;
      }
      F > 1e-12 ? B > 1e-12 ? (V = x(Z, Q, G, K, g2, B, k2), H = x(Y, X, q, J, g2, B, k2), D.moveTo(V.cx + V.x01, V.cy + V.y01), B < R ? D.arc(V.cx, V.cy, B, o(V.y01, V.x01), o(H.y01, H.x01), !k2) : (D.arc(V.cx, V.cy, B, o(V.y01, V.x01), o(V.y11, V.x11), !k2), D.arc(0, 0, g2, o(V.cy + V.y11, V.cx + V.x11), o(H.cy + H.y11, H.cx + H.x11), !k2), D.arc(H.cx, H.cy, B, o(H.y11, H.x11), o(H.y01, H.x01), !k2))) : (D.moveTo(G, K), D.arc(0, 0, g2, A, j, !k2)) : D.moveTo(G, K), !(h2 > 1e-12) || !(P > 1e-12) ? D.lineTo(q, J) : z > 1e-12 ? (V = x(q, J, Y, X, h2, -z, k2), H = x(G, K, Z, Q, h2, -z, k2), D.lineTo(V.cx + V.x01, V.cy + V.y01), z < R ? D.arc(V.cx, V.cy, z, o(V.y01, V.x01), o(H.y01, H.x01), !k2) : (D.arc(V.cx, V.cy, z, o(V.y01, V.x01), o(V.y11, V.x11), !k2), D.arc(0, 0, h2, o(V.cy + V.y11, V.cx + V.x11), o(H.cy + H.y11, H.cx + H.x11), k2), D.arc(H.cx, H.cy, z, o(H.y11, H.x11), o(H.y01, H.x01), !k2))) : D.arc(0, 0, h2, N, M, k2);
    }
    if (D.closePath(), e2) return D = null, e2 + `` || null;
  }
  return k.centroid = function() {
    var e2 = (+r2.apply(this, arguments) + +l2.apply(this, arguments)) / 2, t2 = (+w.apply(this, arguments) + +T.apply(this, arguments)) / 2 - m / 2;
    return [n(t2) * e2, i(t2) * e2];
  }, k.innerRadius = function(t2) {
    return arguments.length ? (r2 = typeof t2 == `function` ? t2 : e(+t2), k) : r2;
  }, k.outerRadius = function(t2) {
    return arguments.length ? (l2 = typeof t2 == `function` ? t2 : e(+t2), k) : l2;
  }, k.cornerRadius = function(t2) {
    return arguments.length ? (S2 = typeof t2 == `function` ? t2 : e(+t2), k) : S2;
  }, k.padRadius = function(t2) {
    return arguments.length ? (C = t2 == null ? null : typeof t2 == `function` ? t2 : e(+t2), k) : C;
  }, k.startAngle = function(t2) {
    return arguments.length ? (w = typeof t2 == `function` ? t2 : e(+t2), k) : w;
  }, k.endAngle = function(t2) {
    return arguments.length ? (T = typeof t2 == `function` ? t2 : e(+t2), k) : T;
  }, k.padAngle = function(t2) {
    return arguments.length ? (E = typeof t2 == `function` ? t2 : e(+t2), k) : E;
  }, k.context = function(e2) {
    return arguments.length ? (D = e2 ?? null, k) : D;
  }, k;
}
export {
  S as t
};
