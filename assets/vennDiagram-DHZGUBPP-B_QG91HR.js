import { Bn as e, Cn as t, Hn as n, In as r, Jn as i, N as a, Nn as o, Nt as s, Pn as c, Un as l, Vn as u, b as d, bn as f, gn as p, pn as m, un as h, vn as g, xn as _, yn as v } from "./index-4Ava25sD.js";
var y = (e2, t2) => n(e2, `a`, -t2), b = 1e-10;
function x(e2, t2) {
  let n2 = C(e2), r2 = n2.filter((t3) => S(t3, e2)), i2 = 0, a2 = 0, o2 = [];
  if (r2.length > 1) {
    let t3 = O(r2);
    for (let e3 = 0; e3 < r2.length; ++e3) {
      let n4 = r2[e3];
      n4.angle = Math.atan2(n4.x - t3.x, n4.y - t3.y);
    }
    r2.sort((e3, t4) => t4.angle - e3.angle);
    let n3 = r2[r2.length - 1];
    for (let t4 = 0; t4 < r2.length; ++t4) {
      let s2 = r2[t4];
      a2 += (n3.x + s2.x) * (s2.y - n3.y);
      let c2 = { x: (s2.x + n3.x) / 2, y: (s2.y + n3.y) / 2 }, l2 = null;
      for (let t5 = 0; t5 < s2.parentIndex.length; ++t5) if (n3.parentIndex.includes(s2.parentIndex[t5])) {
        let r3 = e2[s2.parentIndex[t5]], i3 = Math.atan2(s2.x - r3.x, s2.y - r3.y), a3 = Math.atan2(n3.x - r3.x, n3.y - r3.y), o3 = a3 - i3;
        o3 < 0 && (o3 += 2 * Math.PI);
        let u2 = a3 - o3 / 2, d2 = T(c2, { x: r3.x + r3.radius * Math.sin(u2), y: r3.y + r3.radius * Math.cos(u2) });
        d2 > r3.radius * 2 && (d2 = r3.radius * 2), (l2 == null || l2.width > d2) && (l2 = { circle: r3, width: d2, p1: s2, p2: n3, large: d2 > r3.radius, sweep: true });
      }
      l2 != null && (o2.push(l2), i2 += w(l2.circle.radius, l2.width), n3 = s2);
    }
  } else {
    let t3 = e2[0];
    for (let n4 = 1; n4 < e2.length; ++n4) e2[n4].radius < t3.radius && (t3 = e2[n4]);
    let n3 = false;
    for (let r3 = 0; r3 < e2.length; ++r3) if (T(e2[r3], t3) > Math.abs(t3.radius - e2[r3].radius)) {
      n3 = true;
      break;
    }
    n3 ? i2 = a2 = 0 : (i2 = t3.radius * t3.radius * Math.PI, o2.push({ circle: t3, p1: { x: t3.x, y: t3.y + t3.radius }, p2: { x: t3.x - b, y: t3.y + t3.radius }, width: t3.radius * 2, large: true, sweep: true }));
  }
  return a2 /= 2, t2 && (t2.area = i2 + a2, t2.arcArea = i2, t2.polygonArea = a2, t2.arcs = o2, t2.innerPoints = r2, t2.intersectionPoints = n2), i2 + a2;
}
function S(e2, t2) {
  return t2.every((t3) => T(e2, t3) < t3.radius + b);
}
function C(e2) {
  let t2 = [];
  for (let n2 = 0; n2 < e2.length; ++n2) for (let r2 = n2 + 1; r2 < e2.length; ++r2) {
    let i2 = D(e2[n2], e2[r2]);
    for (let e3 of i2) e3.parentIndex = [n2, r2], t2.push(e3);
  }
  return t2;
}
function w(e2, t2) {
  return e2 * e2 * Math.acos(1 - t2 / e2) - (e2 - t2) * Math.sqrt(t2 * (2 * e2 - t2));
}
function T(e2, t2) {
  return Math.sqrt((e2.x - t2.x) * (e2.x - t2.x) + (e2.y - t2.y) * (e2.y - t2.y));
}
function E(e2, t2, n2) {
  if (n2 >= e2 + t2) return 0;
  if (n2 <= Math.abs(e2 - t2)) return Math.PI * Math.min(e2, t2) * Math.min(e2, t2);
  let r2 = e2 - (n2 * n2 - t2 * t2 + e2 * e2) / (2 * n2), i2 = t2 - (n2 * n2 - e2 * e2 + t2 * t2) / (2 * n2);
  return w(e2, r2) + w(t2, i2);
}
function D(e2, t2) {
  let n2 = T(e2, t2), r2 = e2.radius, i2 = t2.radius;
  if (n2 >= r2 + i2 || n2 <= Math.abs(r2 - i2)) return [];
  let a2 = (r2 * r2 - i2 * i2 + n2 * n2) / (2 * n2), o2 = Math.sqrt(r2 * r2 - a2 * a2), s2 = e2.x + a2 * (t2.x - e2.x) / n2, c2 = e2.y + a2 * (t2.y - e2.y) / n2, l2 = -(t2.y - e2.y) * (o2 / n2), u2 = -(t2.x - e2.x) * (o2 / n2);
  return [{ x: s2 + l2, y: c2 - u2 }, { x: s2 - l2, y: c2 + u2 }];
}
function O(e2) {
  let t2 = { x: 0, y: 0 };
  for (let n2 of e2) t2.x += n2.x, t2.y += n2.y;
  return t2.x /= e2.length, t2.y /= e2.length, t2;
}
function k(e2, t2, n2, r2) {
  r2 || (r2 = {});
  let i2 = r2.maxIterations || 100, a2 = r2.tolerance || 1e-10, o2 = e2(t2), s2 = e2(n2), c2 = n2 - t2;
  if (o2 * s2 > 0) throw `Initial bisect points must have opposite signs`;
  if (o2 === 0) return t2;
  if (s2 === 0) return n2;
  for (let n3 = 0; n3 < i2; ++n3) {
    c2 /= 2;
    let n4 = t2 + c2, r3 = e2(n4);
    if (r3 * o2 >= 0 && (t2 = n4), Math.abs(c2) < a2 || r3 === 0) return n4;
  }
  return t2 + c2;
}
function A(e2) {
  let t2 = Array(e2);
  for (let n2 = 0; n2 < e2; ++n2) t2[n2] = 0;
  return t2;
}
function j(e2, t2) {
  return A(e2).map(() => A(t2));
}
function M(e2, t2) {
  let n2 = 0;
  for (let r2 = 0; r2 < e2.length; ++r2) n2 += e2[r2] * t2[r2];
  return n2;
}
function N(e2) {
  return Math.sqrt(M(e2, e2));
}
function P(e2, t2, n2) {
  for (let r2 = 0; r2 < t2.length; ++r2) e2[r2] = t2[r2] * n2;
}
function F(e2, t2, n2, r2, i2) {
  for (let a2 = 0; a2 < e2.length; ++a2) e2[a2] = t2 * n2[a2] + r2 * i2[a2];
}
function I(e2, t2, n2) {
  n2 || (n2 = {});
  let r2 = n2.maxIterations || t2.length * 200, i2 = n2.nonZeroDelta || 1.05, a2 = n2.zeroDelta || 1e-3, o2 = n2.minErrorDelta || 1e-6, s2 = n2.minErrorDelta || 1e-5, c2 = n2.rho === void 0 ? 1 : n2.rho, l2 = n2.chi === void 0 ? 2 : n2.chi, u2 = n2.psi === void 0 ? -0.5 : n2.psi, d2 = n2.sigma === void 0 ? 0.5 : n2.sigma, f2, p2 = t2.length, m2 = Array(p2 + 1);
  m2[0] = t2, m2[0].fx = e2(t2), m2[0].id = 0;
  for (let n3 = 0; n3 < p2; ++n3) {
    let r3 = t2.slice();
    r3[n3] = r3[n3] ? r3[n3] * i2 : a2, m2[n3 + 1] = r3, m2[n3 + 1].fx = e2(r3), m2[n3 + 1].id = n3 + 1;
  }
  function h2(e3) {
    for (let t3 = 0; t3 < e3.length; t3++) m2[p2][t3] = e3[t3];
    m2[p2].fx = e3.fx;
  }
  let g2 = (e3, t3) => e3.fx - t3.fx, _2 = t2.slice(), v2 = t2.slice(), y2 = t2.slice(), b2 = t2.slice();
  for (let t3 = 0; t3 < r2; ++t3) {
    if (m2.sort(g2), n2.history) {
      let e3 = m2.map((e4) => {
        let t5 = e4.slice();
        return t5.fx = e4.fx, t5.id = e4.id, t5;
      });
      e3.sort((e4, t5) => e4.id - t5.id), n2.history.push({ x: m2[0].slice(), fx: m2[0].fx, simplex: e3 });
    }
    f2 = 0;
    for (let e3 = 0; e3 < p2; ++e3) f2 = Math.max(f2, Math.abs(m2[0][e3] - m2[1][e3]));
    if (Math.abs(m2[0].fx - m2[p2].fx) < o2 && f2 < s2) break;
    for (let e3 = 0; e3 < p2; ++e3) {
      _2[e3] = 0;
      for (let t5 = 0; t5 < p2; ++t5) _2[e3] += m2[t5][e3];
      _2[e3] /= p2;
    }
    let t4 = m2[p2];
    if (F(v2, 1 + c2, _2, -c2, t4), v2.fx = e2(v2), v2.fx < m2[0].fx) F(b2, 1 + l2, _2, -l2, t4), b2.fx = e2(b2), b2.fx < v2.fx ? h2(b2) : h2(v2);
    else if (v2.fx >= m2[p2 - 1].fx) {
      let n3 = false;
      if (v2.fx > t4.fx ? (F(y2, 1 + u2, _2, -u2, t4), y2.fx = e2(y2), y2.fx < t4.fx ? h2(y2) : n3 = true) : (F(y2, 1 - u2 * c2, _2, u2 * c2, t4), y2.fx = e2(y2), y2.fx < v2.fx ? h2(y2) : n3 = true), n3) {
        if (d2 >= 1) break;
        for (let t5 = 1; t5 < m2.length; ++t5) F(m2[t5], 1 - d2, m2[0], d2, m2[t5]), m2[t5].fx = e2(m2[t5]);
      }
    } else h2(v2);
  }
  return m2.sort(g2), { fx: m2[0].fx, x: m2[0] };
}
function L(e2, t2, n2, r2, i2, a2, o2) {
  let s2 = n2.fx, c2 = M(n2.fxprime, t2), l2 = s2, u2 = s2, d2 = c2, f2 = 0;
  i2 || (i2 = 1), a2 || (a2 = 1e-6), o2 || (o2 = 0.1);
  function p2(u3, f3, p3) {
    for (let m2 = 0; m2 < 16; ++m2) if (i2 = (u3 + f3) / 2, F(r2.x, 1, n2.x, i2, t2), l2 = r2.fx = e2(r2.x, r2.fxprime), d2 = M(r2.fxprime, t2), l2 > s2 + a2 * i2 * c2 || l2 >= p3) f3 = i2;
    else {
      if (Math.abs(d2) <= -o2 * c2) return i2;
      d2 * (f3 - u3) >= 0 && (f3 = u3), u3 = i2, p3 = l2;
    }
    return 0;
  }
  for (let m2 = 0; m2 < 10; ++m2) {
    if (F(r2.x, 1, n2.x, i2, t2), l2 = r2.fx = e2(r2.x, r2.fxprime), d2 = M(r2.fxprime, t2), l2 > s2 + a2 * i2 * c2 || m2 && l2 >= u2) return p2(f2, i2, u2);
    if (Math.abs(d2) <= -o2 * c2) return i2;
    if (d2 >= 0) return p2(i2, f2, l2);
    u2 = l2, f2 = i2, i2 *= 2;
  }
  return i2;
}
function ee(e2, t2, n2) {
  let r2 = { x: t2.slice(), fx: 0, fxprime: t2.slice() }, i2 = { x: t2.slice(), fx: 0, fxprime: t2.slice() }, a2 = t2.slice(), o2, s2, c2 = 1, l2;
  n2 || (n2 = {}), l2 = n2.maxIterations || t2.length * 20, r2.fx = e2(r2.x, r2.fxprime), o2 = r2.fxprime.slice(), P(o2, r2.fxprime, -1);
  for (let t3 = 0; t3 < l2; ++t3) {
    if (c2 = L(e2, o2, r2, i2, c2), n2.history && n2.history.push({ x: r2.x.slice(), fx: r2.fx, fxprime: r2.fxprime.slice(), alpha: c2 }), !c2) P(o2, r2.fxprime, -1);
    else {
      F(a2, 1, i2.fxprime, -1, r2.fxprime);
      let e3 = M(r2.fxprime, r2.fxprime), t4 = Math.max(0, M(a2, i2.fxprime) / e3);
      F(o2, t4, o2, -1, i2.fxprime), s2 = r2, r2 = i2, i2 = s2;
    }
    if (N(r2.fxprime) <= 1e-5) break;
  }
  return n2.history && n2.history.push({ x: r2.x.slice(), fx: r2.fx, fxprime: r2.fxprime.slice(), alpha: c2 }), r2;
}
function te(e2, t2 = {}) {
  t2.maxIterations = t2.maxIterations || 500;
  let n2 = t2.initialLayout || oe, r2 = t2.lossFunction || z, i2 = re(e2, t2), a2 = n2(i2, t2), o2 = Object.keys(a2), s2 = [];
  for (let e3 of o2) s2.push(a2[e3].x), s2.push(a2[e3].y);
  let c2 = I((e3) => {
    let t3 = {};
    for (let n3 = 0; n3 < o2.length; ++n3) {
      let r3 = o2[n3];
      t3[r3] = { x: e3[2 * n3], y: e3[2 * n3 + 1], radius: a2[r3].radius };
    }
    return r2(t3, i2);
  }, s2, t2).x;
  for (let e3 = 0; e3 < o2.length; ++e3) {
    let t3 = o2[e3];
    a2[t3].x = c2[2 * e3], a2[t3].y = c2[2 * e3 + 1];
  }
  return a2;
}
var ne = 1e-10;
function R(e2, t2, n2) {
  return Math.min(e2, t2) * Math.min(e2, t2) * Math.PI <= n2 + ne ? Math.abs(e2 - t2) : k((r2) => E(e2, t2, r2) - n2, 0, e2 + t2);
}
function re(e2, t2 = {}) {
  let n2 = t2.distinct, r2 = e2.map((e3) => Object.assign({}, e3));
  function i2(e3) {
    return e3.join(`;`);
  }
  if (n2) {
    let e3 = /* @__PURE__ */ new Map();
    for (let t3 of r2) for (let n3 = 0; n3 < t3.sets.length; n3++) {
      let r3 = String(t3.sets[n3]);
      e3.set(r3, t3.size + (e3.get(r3) || 0));
      for (let i3 = n3 + 1; i3 < t3.sets.length; i3++) {
        let n4 = String(t3.sets[i3]), a3 = `${r3};${n4}`, o3 = `${n4};${r3}`;
        e3.set(a3, t3.size + (e3.get(a3) || 0)), e3.set(o3, t3.size + (e3.get(o3) || 0));
      }
    }
    for (let t3 of r2) t3.sets.length < 3 && (t3.size = e3.get(i2(t3.sets)));
  }
  let a2 = [], o2 = /* @__PURE__ */ new Set();
  for (let e3 of r2) if (e3.sets.length === 1) a2.push(e3.sets[0]);
  else if (e3.sets.length === 2) {
    let t3 = e3.sets[0], n3 = e3.sets[1];
    o2.add(i2(e3.sets)), o2.add(i2([n3, t3]));
  }
  a2.sort((e3, t3) => e3 === t3 ? 0 : e3 < t3 ? -1 : 1);
  for (let e3 = 0; e3 < a2.length; ++e3) {
    let t3 = a2[e3];
    for (let n3 = e3 + 1; n3 < a2.length; ++n3) {
      let e4 = a2[n3];
      o2.has(i2([t3, e4])) || r2.push({ sets: [t3, e4], size: 0 });
    }
  }
  return r2;
}
function ie(e2, t2, n2) {
  let r2 = j(t2.length, t2.length), i2 = j(t2.length, t2.length);
  return e2.filter((e3) => e3.sets.length === 2).forEach((e3) => {
    let a2 = n2[e3.sets[0]], o2 = n2[e3.sets[1]], s2 = R(Math.sqrt(t2[a2].size / Math.PI), Math.sqrt(t2[o2].size / Math.PI), e3.size);
    r2[a2][o2] = r2[o2][a2] = s2;
    let c2 = 0;
    e3.size + 1e-10 >= Math.min(t2[a2].size, t2[o2].size) ? c2 = 1 : e3.size <= 1e-10 && (c2 = -1), i2[a2][o2] = i2[o2][a2] = c2;
  }), { distances: r2, constraints: i2 };
}
function ae(e2, t2, n2, r2) {
  for (let e3 = 0; e3 < t2.length; ++e3) t2[e3] = 0;
  let i2 = 0;
  for (let a2 = 0; a2 < n2.length; ++a2) {
    let o2 = e2[2 * a2], s2 = e2[2 * a2 + 1];
    for (let c2 = a2 + 1; c2 < n2.length; ++c2) {
      let l2 = e2[2 * c2], u2 = e2[2 * c2 + 1], d2 = n2[a2][c2], f2 = r2[a2][c2], p2 = (l2 - o2) * (l2 - o2) + (u2 - s2) * (u2 - s2), m2 = Math.sqrt(p2), h2 = p2 - d2 * d2;
      f2 > 0 && m2 <= d2 || f2 < 0 && m2 >= d2 || (i2 += 2 * h2 * h2, t2[2 * a2] += 4 * h2 * (o2 - l2), t2[2 * a2 + 1] += 4 * h2 * (s2 - u2), t2[2 * c2] += 4 * h2 * (l2 - o2), t2[2 * c2 + 1] += 4 * h2 * (u2 - s2));
    }
  }
  return i2;
}
function oe(e2, t2 = {}) {
  let n2 = ce(e2, t2), r2 = t2.lossFunction || z;
  if (e2.length >= 8) {
    let i2 = se(e2, t2), a2 = r2(i2, e2), o2 = r2(n2, e2);
    a2 + 1e-8 < o2 && (n2 = i2);
  }
  return n2;
}
function se(e2, t2 = {}) {
  let n2 = t2.restarts || 10, r2 = [], i2 = {};
  for (let t3 of e2) t3.sets.length === 1 && (i2[t3.sets[0]] = r2.length, r2.push(t3));
  let { distances: a2, constraints: o2 } = ie(e2, r2, i2), s2 = N(a2.map(N)) / a2.length;
  a2 = a2.map((e3) => e3.map((e4) => e4 / s2));
  let c2 = (e3, t3) => ae(e3, t3, a2, o2), l2 = null;
  for (let e3 = 0; e3 < n2; ++e3) {
    let e4 = ee(c2, A(a2.length * 2).map(Math.random), t2);
    (!l2 || e4.fx < l2.fx) && (l2 = e4);
  }
  let u2 = l2.x, d2 = {};
  for (let e3 = 0; e3 < r2.length; ++e3) {
    let t3 = r2[e3];
    d2[t3.sets[0]] = { x: u2[2 * e3] * s2, y: u2[2 * e3 + 1] * s2, radius: Math.sqrt(t3.size / Math.PI) };
  }
  if (t2.history) for (let e3 of t2.history) P(e3.x, s2);
  return d2;
}
function ce(e2, t2) {
  let n2 = t2 && t2.lossFunction ? t2.lossFunction : z, r2 = {}, i2 = {};
  for (let t3 of e2) if (t3.sets.length === 1) {
    let e3 = t3.sets[0];
    r2[e3] = { x: 1e10, y: 1e10, rowid: r2.length, size: t3.size, radius: Math.sqrt(t3.size / Math.PI) }, i2[e3] = [];
  }
  e2 = e2.filter((e3) => e3.sets.length === 2);
  for (let t3 of e2) {
    let e3 = t3.weight == null ? 1 : t3.weight, n3 = t3.sets[0], a3 = t3.sets[1];
    t3.size + ne >= Math.min(r2[n3].size, r2[a3].size) && (e3 = 0), i2[n3].push({ set: a3, size: t3.size, weight: e3 }), i2[a3].push({ set: n3, size: t3.size, weight: e3 });
  }
  let a2 = [];
  Object.keys(i2).forEach((e3) => {
    let t3 = 0;
    for (let n3 = 0; n3 < i2[e3].length; ++n3) t3 += i2[e3][n3].size * i2[e3][n3].weight;
    a2.push({ set: e3, size: t3 });
  });
  function o2(e3, t3) {
    return t3.size - e3.size;
  }
  a2.sort(o2);
  let s2 = {};
  function c2(e3) {
    return e3.set in s2;
  }
  function l2(e3, t3) {
    r2[t3].x = e3.x, r2[t3].y = e3.y, s2[t3] = true;
  }
  l2({ x: 0, y: 0 }, a2[0].set);
  for (let t3 = 1; t3 < a2.length; ++t3) {
    let s3 = a2[t3].set, d2 = i2[s3].filter(c2), f2 = r2[s3];
    if (d2.sort(o2), d2.length === 0) throw `ERROR: missing pairwise overlap information`;
    let p2 = [];
    for (var u2 = 0; u2 < d2.length; ++u2) {
      let e3 = r2[d2[u2].set], t4 = R(f2.radius, e3.radius, d2[u2].size);
      p2.push({ x: e3.x + t4, y: e3.y }), p2.push({ x: e3.x - t4, y: e3.y }), p2.push({ y: e3.y + t4, x: e3.x }), p2.push({ y: e3.y - t4, x: e3.x });
      for (let n3 = u2 + 1; n3 < d2.length; ++n3) {
        let i3 = r2[d2[n3].set], a3 = R(f2.radius, i3.radius, d2[n3].size), o3 = D({ x: e3.x, y: e3.y, radius: t4 }, { x: i3.x, y: i3.y, radius: a3 });
        p2.push(...o3);
      }
    }
    let m2 = 1e50, h2 = p2[0];
    for (let t4 of p2) {
      r2[s3].x = t4.x, r2[s3].y = t4.y;
      let i3 = n2(r2, e2);
      i3 < m2 && (m2 = i3, h2 = t4);
    }
    l2(h2, s3);
  }
  return r2;
}
function z(e2, t2) {
  let n2 = 0;
  for (let r2 of t2) {
    if (r2.sets.length === 1) continue;
    let t3;
    if (r2.sets.length === 2) {
      let n3 = e2[r2.sets[0]], i3 = e2[r2.sets[1]];
      t3 = E(n3.radius, i3.radius, T(n3, i3));
    } else t3 = x(r2.sets.map((t4) => e2[t4]));
    let i2 = r2.weight == null ? 1 : r2.weight;
    n2 += i2 * (t3 - r2.size) * (t3 - r2.size);
  }
  return n2;
}
function le(e2, t2) {
  let n2 = 0;
  for (let r2 of t2) {
    if (r2.sets.length === 1) continue;
    let t3;
    if (r2.sets.length === 2) {
      let n3 = e2[r2.sets[0]], i3 = e2[r2.sets[1]];
      t3 = E(n3.radius, i3.radius, T(n3, i3));
    } else t3 = x(r2.sets.map((t4) => e2[t4]));
    let i2 = r2.weight == null ? 1 : r2.weight, a2 = Math.log((t3 + 1) / (r2.size + 1));
    n2 += i2 * a2 * a2;
  }
  return n2;
}
function ue(e2, t2, n2) {
  if (n2 == null ? e2.sort((e3, t3) => t3.radius - e3.radius) : e2.sort(n2), e2.length > 0) {
    let t3 = e2[0].x, n3 = e2[0].y;
    for (let r3 of e2) r3.x -= t3, r3.y -= n3;
  }
  if (e2.length === 2 && T(e2[0], e2[1]) < Math.abs(e2[1].radius - e2[0].radius) && (e2[1].x = e2[0].x + e2[0].radius - e2[1].radius - 1e-10, e2[1].y = e2[0].y), e2.length > 1) {
    let n3 = Math.atan2(e2[1].x, e2[1].y) - t2, r3 = Math.cos(n3), i2 = Math.sin(n3);
    for (let t3 of e2) {
      let e3 = t3.x, n4 = t3.y;
      t3.x = r3 * e3 - i2 * n4, t3.y = i2 * e3 + r3 * n4;
    }
  }
  if (e2.length > 2) {
    let n3 = Math.atan2(e2[2].x, e2[2].y) - t2;
    for (; n3 < 0; ) n3 += 2 * Math.PI;
    for (; n3 > 2 * Math.PI; ) n3 -= 2 * Math.PI;
    if (n3 > Math.PI) {
      let t3 = e2[1].y / (1e-10 + e2[1].x);
      for (let n4 of e2) {
        var r2 = (n4.x + t3 * n4.y) / (1 + t3 * t3);
        n4.x = 2 * r2 - n4.x, n4.y = 2 * r2 * t3 - n4.y;
      }
    }
  }
}
function de(e2) {
  e2.forEach((e3) => {
    e3.parent = e3;
  });
  function t2(e3) {
    return e3.parent !== e3 && (e3.parent = t2(e3.parent)), e3.parent;
  }
  function n2(e3, n3) {
    let r3 = t2(e3);
    r3.parent = t2(n3);
  }
  for (let t3 = 0; t3 < e2.length; ++t3) for (let r3 = t3 + 1; r3 < e2.length; ++r3) {
    let i2 = e2[t3].radius + e2[r3].radius;
    T(e2[t3], e2[r3]) + 1e-10 < i2 && n2(e2[r3], e2[t3]);
  }
  let r2 = /* @__PURE__ */ new Map();
  for (let n3 = 0; n3 < e2.length; ++n3) {
    let i2 = t2(e2[n3]).parent.setid;
    r2.has(i2) || r2.set(i2, []), r2.get(i2).push(e2[n3]);
  }
  return e2.forEach((e3) => {
    delete e3.parent;
  }), Array.from(r2.values());
}
function B(e2) {
  let t2 = (t3) => ({ max: e2.reduce((e3, n2) => Math.max(e3, n2[t3] + n2.radius), -1 / 0), min: e2.reduce((e3, n2) => Math.min(e3, n2[t3] - n2.radius), 1 / 0) });
  return { xRange: t2(`x`), yRange: t2(`y`) };
}
function fe(e2, t2, n2) {
  t2 ?? (t2 = Math.PI / 2);
  let r2 = he(e2).map((e3) => Object.assign({}, e3)), i2 = de(r2);
  for (let e3 of i2) {
    ue(e3, t2, n2);
    let r3 = B(e3);
    e3.size = (r3.xRange.max - r3.xRange.min) * (r3.yRange.max - r3.yRange.min), e3.bounds = r3;
  }
  i2.sort((e3, t3) => t3.size - e3.size), r2 = i2[0];
  let a2 = r2.bounds, o2 = (a2.xRange.max - a2.xRange.min) / 50;
  function s2(e3, t3, n3) {
    if (!e3) return;
    let i3 = e3.bounds, s3, c3;
    if (t3) s3 = a2.xRange.max - i3.xRange.min + o2;
    else {
      s3 = a2.xRange.max - i3.xRange.max;
      let e4 = (i3.xRange.max - i3.xRange.min) / 2 - (a2.xRange.max - a2.xRange.min) / 2;
      e4 < 0 && (s3 += e4);
    }
    if (n3) c3 = a2.yRange.max - i3.yRange.min + o2;
    else {
      c3 = a2.yRange.max - i3.yRange.max;
      let e4 = (i3.yRange.max - i3.yRange.min) / 2 - (a2.yRange.max - a2.yRange.min) / 2;
      e4 < 0 && (c3 += e4);
    }
    for (let t4 of e3) t4.x += s3, t4.y += c3, r2.push(t4);
  }
  let c2 = 1;
  for (; c2 < i2.length; ) s2(i2[c2], true, false), s2(i2[c2 + 1], false, true), s2(i2[c2 + 2], true, true), c2 += 3, a2 = B(r2);
  return me(r2);
}
function pe(e2, t2, n2, r2, i2) {
  let a2 = he(e2);
  t2 -= 2 * r2, n2 -= 2 * r2;
  let { xRange: o2, yRange: s2 } = B(a2);
  if (o2.max === o2.min || s2.max === s2.min) return console.log(`not scaling solution: zero size detected`), e2;
  let c2, l2;
  if (i2) {
    let e3 = Math.sqrt(i2 / Math.PI) * 2;
    c2 = t2 / e3, l2 = n2 / e3;
  } else c2 = t2 / (o2.max - o2.min), l2 = n2 / (s2.max - s2.min);
  let u2 = Math.min(l2, c2), d2 = (t2 - (o2.max - o2.min) * u2) / 2, f2 = (n2 - (s2.max - s2.min) * u2) / 2;
  return me(a2.map((e3) => ({ radius: u2 * e3.radius, x: r2 + d2 + (e3.x - o2.min) * u2, y: r2 + f2 + (e3.y - s2.min) * u2, setid: e3.setid })));
}
function me(e2) {
  let t2 = {};
  for (let n2 of e2) t2[n2.setid] = n2;
  return t2;
}
function he(e2) {
  return Object.keys(e2).map((t2) => Object.assign(e2[t2], { setid: t2 }));
}
function ge(e2 = {}) {
  let t2 = false, n2 = 600, r2 = 350, i2 = 15, a2 = 1e3, o2 = Math.PI / 2, s2 = true, c2 = null, l2 = true, u2 = true, d2 = null, f2 = null, p2 = false, m2 = null, h2 = e2 && e2.symmetricalTextCentre ? e2.symmetricalTextCentre : false, g2 = {}, _2 = e2 && e2.colourScheme ? e2.colourScheme : e2 && e2.colorScheme ? e2.colorScheme : [`#1f77b4`, `#ff7f0e`, `#2ca02c`, `#d62728`, `#9467bd`, `#8c564b`, `#e377c2`, `#7f7f7f`, `#bcbd22`, `#17becf`], v2 = 0, y2 = function(e3) {
    if (e3 in g2) return g2[e3];
    var t3 = g2[e3] = _2[v2];
    return v2 += 1, v2 >= _2.length && (v2 = 0), t3;
  }, b2 = te, x2 = z;
  function S2(g3) {
    let _3 = g3.datum(), v3 = /* @__PURE__ */ new Set();
    _3.forEach((e3) => {
      e3.size == 0 && e3.sets.length == 1 && v3.add(e3.sets[0]);
    }), _3 = _3.filter((e3) => !e3.sets.some((e4) => v3.has(e4)));
    let S3 = {}, C2 = {};
    if (_3.length > 0) {
      let e3 = b2(_3, { lossFunction: x2, distinct: p2 });
      s2 && (e3 = fe(e3, o2, f2)), S3 = pe(e3, n2, r2, i2, c2), C2 = ye(S3, _3, h2);
    }
    let w2 = {};
    _3.forEach((e3) => {
      e3.label && (w2[e3.sets] = e3.label);
    });
    function T2(e3) {
      if (e3.sets in w2) return w2[e3.sets];
      if (e3.sets.length == 1) return `` + e3.sets[0];
    }
    g3.selectAll(`svg`).data([S3]).enter().append(`svg`);
    let E2 = g3.select(`svg`);
    t2 ? E2.attr(`viewBox`, `0 0 ${n2} ${r2}`) : E2.attr(`width`, n2).attr(`height`, r2);
    let D2 = {}, O2 = false;
    E2.selectAll(`.venn-area path`).each(function(e3) {
      let t3 = this.getAttribute(`d`);
      e3.sets.length == 1 && t3 && !p2 && (O2 = true, D2[e3.sets[0]] = xe(t3));
    });
    function k2(e3) {
      return (t3) => we(e3.sets.map((e4) => {
        let i3 = D2[e4], a3 = S3[e4];
        return i3 || (i3 = { x: n2 / 2, y: r2 / 2, radius: 1 }), a3 || (a3 = { x: n2 / 2, y: r2 / 2, radius: 1 }), { x: i3.x * (1 - t3) + a3.x * t3, y: i3.y * (1 - t3) + a3.y * t3, radius: i3.radius * (1 - t3) + a3.radius * t3 };
      }), m2);
    }
    let A2 = E2.selectAll(`.venn-area`).data(_3, (e3) => e3.sets), j2 = A2.enter().append(`g`).attr(`class`, (e3) => `venn-area venn-${e3.sets.length == 1 ? `circle` : `intersection`}${e3.colour || e3.color ? ` venn-coloured` : ``}`).attr(`data-venn-sets`, (e3) => e3.sets.join(`_`)), M2 = j2.append(`path`), N2 = j2.append(`text`).attr(`class`, `label`).text((e3) => T2(e3)).attr(`text-anchor`, `middle`).attr(`dy`, `.35em`).attr(`x`, n2 / 2).attr(`y`, r2 / 2);
    u2 && (M2.style(`fill-opacity`, `0`).filter((e3) => e3.sets.length == 1).style(`fill`, (e3) => e3.colour ? e3.colour : e3.color ? e3.color : y2(e3.sets)).style(`fill-opacity`, `.25`), N2.style(`fill`, (t3) => t3.colour || t3.color ? `#FFF` : e2.textFill ? e2.textFill : t3.sets.length == 1 ? y2(t3.sets) : `#444`));
    function P2(e3) {
      return typeof e3.transition == `function` ? e3.transition(`venn`).duration(a2) : e3;
    }
    let F2 = g3;
    O2 && typeof F2.transition == `function` ? (F2 = P2(g3), F2.selectAll(`path`).attrTween(`d`, k2)) : F2.selectAll(`path`).attr(`d`, (e3) => we(e3.sets.map((e4) => S3[e4])), m2);
    let I2 = F2.selectAll(`text`).filter((e3) => e3.sets in C2).text((e3) => T2(e3)).attr(`x`, (e3) => Math.floor(C2[e3.sets].x)).attr(`y`, (e3) => Math.floor(C2[e3.sets].y));
    l2 && (O2 ? `on` in I2 ? I2.on(`end`, V(S3, T2)) : I2.each(`end`, V(S3, T2)) : I2.each(V(S3, T2)));
    let L2 = P2(A2.exit()).remove();
    typeof A2.transition == `function` && L2.selectAll(`path`).attrTween(`d`, k2);
    let ee2 = L2.selectAll(`text`).attr(`x`, n2 / 2).attr(`y`, r2 / 2);
    return d2 !== null && (N2.style(`font-size`, `0px`), I2.style(`font-size`, d2), ee2.style(`font-size`, `0px`)), { circles: S3, textCentres: C2, nodes: A2, enter: j2, update: F2, exit: L2 };
  }
  return S2.wrap = function(e3) {
    return arguments.length ? (l2 = e3, S2) : l2;
  }, S2.useViewBox = function() {
    return t2 = true, S2;
  }, S2.width = function(e3) {
    return arguments.length ? (n2 = e3, S2) : n2;
  }, S2.height = function(e3) {
    return arguments.length ? (r2 = e3, S2) : r2;
  }, S2.padding = function(e3) {
    return arguments.length ? (i2 = e3, S2) : i2;
  }, S2.distinct = function(e3) {
    return arguments.length ? (p2 = e3, S2) : p2;
  }, S2.colours = function(e3) {
    return arguments.length ? (y2 = e3, S2) : y2;
  }, S2.colors = function(e3) {
    return arguments.length ? (y2 = e3, S2) : y2;
  }, S2.fontSize = function(e3) {
    return arguments.length ? (d2 = e3, S2) : d2;
  }, S2.round = function(e3) {
    return arguments.length ? (m2 = e3, S2) : m2;
  }, S2.duration = function(e3) {
    return arguments.length ? (a2 = e3, S2) : a2;
  }, S2.layoutFunction = function(e3) {
    return arguments.length ? (b2 = e3, S2) : b2;
  }, S2.normalize = function(e3) {
    return arguments.length ? (s2 = e3, S2) : s2;
  }, S2.scaleToFit = function(e3) {
    return arguments.length ? (c2 = e3, S2) : c2;
  }, S2.styled = function(e3) {
    return arguments.length ? (u2 = e3, S2) : u2;
  }, S2.orientation = function(e3) {
    return arguments.length ? (o2 = e3, S2) : o2;
  }, S2.orientationOrder = function(e3) {
    return arguments.length ? (f2 = e3, S2) : f2;
  }, S2.lossFunction = function(e3) {
    return arguments.length ? (x2 = e3 === `default` ? z : e3 === `logRatio` ? le : e3, S2) : x2;
  }, S2;
}
function V(e2, t2) {
  return function(n2) {
    let r2 = this, i2 = e2[n2.sets[0]].radius || 50, a2 = t2(n2) || ``, o2 = a2.split(/\s+/).reverse(), s2 = (a2.length + o2.length) / 3, c2 = o2.pop(), l2 = [c2], u2 = 0, d2 = 1.1;
    r2.textContent = null;
    let f2 = [];
    function p2(e3) {
      let t3 = r2.ownerDocument.createElementNS(r2.namespaceURI, `tspan`);
      return t3.textContent = e3, f2.push(t3), r2.append(t3), t3;
    }
    let m2 = p2(c2);
    for (; c2 = o2.pop(), c2; ) {
      l2.push(c2);
      let e3 = l2.join(` `);
      m2.textContent = e3, e3.length > s2 && m2.getComputedTextLength() > i2 && (l2.pop(), m2.textContent = l2.join(` `), l2 = [c2], m2 = p2(c2), u2++);
    }
    let h2 = 0.35 - u2 * d2 / 2, g2 = r2.getAttribute(`x`), _2 = r2.getAttribute(`y`);
    f2.forEach((e3, t3) => {
      e3.setAttribute(`x`, g2), e3.setAttribute(`y`, _2), e3.setAttribute(`dy`, `${h2 + t3 * d2}em`);
    });
  };
}
function H(e2, t2, n2) {
  let r2 = t2[0].radius - T(t2[0], e2);
  for (let n3 = 1; n3 < t2.length; ++n3) {
    let i2 = t2[n3].radius - T(t2[n3], e2);
    i2 <= r2 && (r2 = i2);
  }
  for (let t3 = 0; t3 < n2.length; ++t3) {
    let i2 = T(n2[t3], e2) - n2[t3].radius;
    i2 <= r2 && (r2 = i2);
  }
  return r2;
}
function _e(e2, t2, n2) {
  let r2 = [];
  for (let t3 of e2) r2.push({ x: t3.x, y: t3.y }), r2.push({ x: t3.x + t3.radius / 2, y: t3.y }), r2.push({ x: t3.x - t3.radius / 2, y: t3.y }), r2.push({ x: t3.x, y: t3.y + t3.radius / 2 }), r2.push({ x: t3.x, y: t3.y - t3.radius / 2 });
  let i2 = r2[0], a2 = H(r2[0], e2, t2);
  for (let n3 = 1; n3 < r2.length; ++n3) {
    let o3 = H(r2[n3], e2, t2);
    o3 >= a2 && (i2 = r2[n3], a2 = o3);
  }
  let o2 = I((n3) => -1 * H({ x: n3[0], y: n3[1] }, e2, t2), [i2.x, i2.y], { maxIterations: 500, minErrorDelta: 1e-10 }).x, s2 = { x: n2 ? 0 : o2[0], y: o2[1] }, c2 = true;
  for (let t3 of e2) if (T(s2, t3) > t3.radius) {
    c2 = false;
    break;
  }
  for (let e3 of t2) if (T(s2, e3) < e3.radius) {
    c2 = false;
    break;
  }
  if (c2) return s2;
  if (e2.length == 1) return { x: e2[0].x, y: e2[0].y };
  let l2 = {};
  return x(e2, l2), l2.arcs.length === 0 ? { x: 0, y: -1e3, disjoint: true } : l2.arcs.length == 1 ? { x: l2.arcs[0].circle.x, y: l2.arcs[0].circle.y } : t2.length ? _e(e2, []) : O(l2.arcs.map((e3) => e3.p1));
}
function ve(e2) {
  let t2 = {}, n2 = Object.keys(e2);
  for (let e3 of n2) t2[e3] = [];
  for (let r2 = 0; r2 < n2.length; r2++) {
    let i2 = n2[r2], a2 = e2[i2];
    for (let o2 = r2 + 1; o2 < n2.length; ++o2) {
      let r3 = n2[o2], s2 = e2[r3], c2 = T(a2, s2);
      c2 + s2.radius <= a2.radius + 1e-10 ? t2[r3].push(i2) : c2 + a2.radius <= s2.radius + 1e-10 && t2[i2].push(r3);
    }
  }
  return t2;
}
function ye(e2, t2, n2) {
  let r2 = {}, i2 = ve(e2);
  for (let a2 = 0; a2 < t2.length; ++a2) {
    let o2 = t2[a2].sets, s2 = {}, c2 = {};
    for (let e3 = 0; e3 < o2.length; ++e3) {
      s2[o2[e3]] = true;
      let t3 = i2[o2[e3]];
      for (let e4 = 0; e4 < t3.length; ++e4) c2[t3[e4]] = true;
    }
    let l2 = [], u2 = [];
    for (let t3 in e2) t3 in s2 ? l2.push(e2[t3]) : t3 in c2 || u2.push(e2[t3]);
    let d2 = _e(l2, u2, n2);
    r2[o2] = d2, d2.disjoint && t2[a2].size > 0 && console.log(`WARNING: area ` + o2 + ` not represented on screen`);
  }
  return r2;
}
function be(e2, t2, n2) {
  let r2 = [];
  return r2.push(`
M`, e2, t2), r2.push(`
m`, -n2, 0), r2.push(`
a`, n2, n2, 0, 1, 0, n2 * 2, 0), r2.push(`
a`, n2, n2, 0, 1, 0, -n2 * 2, 0), r2.join(` `);
}
function xe(e2) {
  let t2 = e2.split(` `);
  return { x: Number.parseFloat(t2[1]), y: Number.parseFloat(t2[2]), radius: -Number.parseFloat(t2[4]) };
}
function Se(e2) {
  if (e2.length === 0) return [];
  let t2 = {};
  return x(e2, t2), t2.arcs;
}
function Ce(e2, t2) {
  if (e2.length === 0) return `M 0 0`;
  let n2 = 10 ** (t2 || 0), r2 = t2 == null ? (e3) => e3 : (e3) => Math.round(e3 * n2) / n2;
  if (e2.length == 1) {
    let t3 = e2[0].circle;
    return be(r2(t3.x), r2(t3.y), r2(t3.radius));
  }
  let i2 = [`
M`, r2(e2[0].p2.x), r2(e2[0].p2.y)];
  for (let t3 of e2) {
    let e3 = r2(t3.circle.radius);
    i2.push(`
A`, e3, e3, 0, t3.large ? 1 : 0, t3.sweep ? 1 : 0, r2(t3.p1.x), r2(t3.p1.y));
  }
  return i2.join(` `);
}
function we(e2, t2) {
  return Ce(Se(e2), t2);
}
function Te(e2, t2 = {}) {
  let { lossFunction: n2, layoutFunction: r2 = te, normalize: i2 = true, orientation: a2 = Math.PI / 2, orientationOrder: o2, width: s2 = 600, height: c2 = 350, padding: l2 = 15, scaleToFit: u2 = false, symmetricalTextCentre: d2 = false, distinct: f2, round: p2 = 2 } = t2, m2 = r2(e2, { lossFunction: n2 === `default` || !n2 ? z : n2 === `logRatio` ? le : n2, distinct: f2 });
  i2 && (m2 = fe(m2, a2, o2));
  let h2 = pe(m2, s2, c2, l2, u2), g2 = ye(h2, e2, d2), _2 = new Map(Object.keys(h2).map((e3) => [e3, { set: e3, x: h2[e3].x, y: h2[e3].y, radius: h2[e3].radius }])), v2 = e2.map((e3) => {
    let t3 = e3.sets.map((e4) => _2.get(e4)), n3 = Se(t3);
    return { circles: t3, arcs: n3, path: Ce(n3, p2), area: e3, has: new Set(e3.sets) };
  });
  function y2(e3) {
    let t3 = ``;
    for (let n3 of v2) n3.has.size > e3.length && e3.every((e4) => n3.has.has(e4)) && (t3 += ` ` + n3.path);
    return t3;
  }
  return v2.map(({ circles: e3, arcs: t3, path: n3, area: r3 }) => ({ data: r3, text: g2[r3.sets], circles: e3, arcs: t3, path: n3, distinctPath: n3 + y2(r3.sets) }));
}
var U = (function() {
  var e2 = i(function(e3, t3, n3, r3) {
    for (n3 || (n3 = {}), r3 = e3.length; r3--; n3[e3[r3]] = t3) ;
    return n3;
  }, `o`), t2 = [5, 8], n2 = [7, 8, 11, 12, 17, 19, 22, 24], r2 = [1, 17], a2 = [1, 18], o2 = [7, 8, 11, 12, 14, 15, 16, 17, 19, 20, 21, 22, 24, 27], s2 = [1, 31], c2 = [1, 39], l2 = [7, 8, 11, 12, 17, 19, 22, 24, 27], u2 = [1, 57], d2 = [1, 56], f2 = [1, 58], p2 = [1, 59], m2 = [1, 60], h2 = [7, 8, 11, 12, 16, 17, 19, 20, 22, 24, 27, 31, 32, 33], g2 = { trace: i(function() {
  }, `trace`), yy: {}, symbols_: { error: 2, start: 3, optNewlines: 4, VENN: 5, document: 6, EOF: 7, NEWLINE: 8, line: 9, statement: 10, TITLE: 11, SET: 12, identifier: 13, BRACKET_LABEL: 14, COLON: 15, NUMERIC: 16, UNION: 17, identifierList: 18, TEXT: 19, IDENTIFIER: 20, STRING: 21, INDENT_TEXT: 22, indentedTextTail: 23, STYLE: 24, stylesOpt: 25, styleField: 26, COMMA: 27, styleValue: 28, valueTokens: 29, valueToken: 30, HEXCOLOR: 31, RGBCOLOR: 32, RGBACOLOR: 33, $accept: 0, $end: 1 }, terminals_: { 2: `error`, 5: `VENN`, 7: `EOF`, 8: `NEWLINE`, 11: `TITLE`, 12: `SET`, 14: `BRACKET_LABEL`, 15: `COLON`, 16: `NUMERIC`, 17: `UNION`, 19: `TEXT`, 20: `IDENTIFIER`, 21: `STRING`, 22: `INDENT_TEXT`, 24: `STYLE`, 27: `COMMA`, 31: `HEXCOLOR`, 32: `RGBCOLOR`, 33: `RGBACOLOR` }, productions_: [0, [3, 4], [4, 0], [4, 2], [6, 0], [6, 2], [9, 1], [9, 1], [10, 1], [10, 2], [10, 3], [10, 4], [10, 5], [10, 2], [10, 3], [10, 4], [10, 5], [10, 3], [10, 3], [10, 3], [10, 4], [10, 4], [10, 2], [10, 3], [23, 1], [23, 1], [23, 1], [23, 2], [23, 2], [25, 1], [25, 3], [26, 3], [28, 1], [28, 1], [29, 1], [29, 2], [30, 1], [30, 1], [30, 1], [30, 1], [30, 1], [18, 1], [18, 3], [13, 1], [13, 1]], performAction: i(function(e3, t3, n3, r3, i2, a3, o3) {
    var s3 = a3.length - 1;
    switch (i2) {
      case 1:
        return a3[s3 - 1];
      case 2:
      case 3:
      case 4:
        this.$ = [];
        break;
      case 5:
        a3[s3 - 1].push(a3[s3]), this.$ = a3[s3 - 1];
        break;
      case 6:
        this.$ = [];
        break;
      case 7:
      case 22:
      case 32:
      case 36:
      case 37:
      case 38:
      case 39:
      case 40:
        this.$ = a3[s3];
        break;
      case 8:
        r3.setDiagramTitle(a3[s3].substr(6)), this.$ = a3[s3].substr(6);
        break;
      case 9:
        r3.addSubsetData([a3[s3]], void 0, void 0), r3.setIndentMode && r3.setIndentMode(true);
        break;
      case 10:
        r3.addSubsetData([a3[s3 - 1]], a3[s3], void 0), r3.setIndentMode && r3.setIndentMode(true);
        break;
      case 11:
        r3.addSubsetData([a3[s3 - 2]], void 0, parseFloat(a3[s3])), r3.setIndentMode && r3.setIndentMode(true);
        break;
      case 12:
        r3.addSubsetData([a3[s3 - 3]], a3[s3 - 2], parseFloat(a3[s3])), r3.setIndentMode && r3.setIndentMode(true);
        break;
      case 13:
        if (a3[s3].length < 2) throw Error(`union requires multiple identifiers`);
        r3.validateUnionIdentifiers && r3.validateUnionIdentifiers(a3[s3]), r3.addSubsetData(a3[s3], void 0, void 0), r3.setIndentMode && r3.setIndentMode(true);
        break;
      case 14:
        if (a3[s3 - 1].length < 2) throw Error(`union requires multiple identifiers`);
        r3.validateUnionIdentifiers && r3.validateUnionIdentifiers(a3[s3 - 1]), r3.addSubsetData(a3[s3 - 1], a3[s3], void 0), r3.setIndentMode && r3.setIndentMode(true);
        break;
      case 15:
        if (a3[s3 - 2].length < 2) throw Error(`union requires multiple identifiers`);
        r3.validateUnionIdentifiers && r3.validateUnionIdentifiers(a3[s3 - 2]), r3.addSubsetData(a3[s3 - 2], void 0, parseFloat(a3[s3])), r3.setIndentMode && r3.setIndentMode(true);
        break;
      case 16:
        if (a3[s3 - 3].length < 2) throw Error(`union requires multiple identifiers`);
        r3.validateUnionIdentifiers && r3.validateUnionIdentifiers(a3[s3 - 3]), r3.addSubsetData(a3[s3 - 3], a3[s3 - 2], parseFloat(a3[s3])), r3.setIndentMode && r3.setIndentMode(true);
        break;
      case 17:
      case 18:
      case 19:
        r3.addTextData(a3[s3 - 1], a3[s3], void 0);
        break;
      case 20:
      case 21:
        r3.addTextData(a3[s3 - 2], a3[s3 - 1], a3[s3]);
        break;
      case 23:
        r3.addStyleData(a3[s3 - 1], a3[s3]);
        break;
      case 24:
      case 25:
      case 26:
        var c3 = r3.getCurrentSets();
        if (!c3) throw Error(`text requires set`);
        r3.addTextData(c3, a3[s3], void 0);
        break;
      case 27:
      case 28:
        var c3 = r3.getCurrentSets();
        if (!c3) throw Error(`text requires set`);
        r3.addTextData(c3, a3[s3 - 1], a3[s3]);
        break;
      case 29:
      case 41:
        this.$ = [a3[s3]];
        break;
      case 30:
      case 42:
        this.$ = [...a3[s3 - 2], a3[s3]];
        break;
      case 31:
        this.$ = [a3[s3 - 2], a3[s3]];
        break;
      case 33:
        this.$ = a3[s3].join(` `);
        break;
      case 34:
        this.$ = [a3[s3]];
        break;
      case 35:
        a3[s3 - 1].push(a3[s3]), this.$ = a3[s3 - 1];
        break;
      case 43:
      case 44:
        this.$ = a3[s3];
        break;
    }
  }, `anonymous`), table: [e2(t2, [2, 2], { 3: 1, 4: 2 }), { 1: [3] }, { 5: [1, 3], 8: [1, 4] }, e2(n2, [2, 4], { 6: 5 }), e2(t2, [2, 3]), { 7: [1, 6], 8: [1, 8], 9: 7, 10: 9, 11: [1, 10], 12: [1, 11], 17: [1, 12], 19: [1, 13], 22: [1, 14], 24: [1, 15] }, { 1: [2, 1] }, e2(n2, [2, 5]), e2(n2, [2, 6]), e2(n2, [2, 7]), e2(n2, [2, 8]), { 13: 16, 20: r2, 21: a2 }, { 13: 20, 18: 19, 20: r2, 21: a2 }, { 13: 20, 18: 21, 20: r2, 21: a2 }, { 16: [1, 25], 20: [1, 23], 21: [1, 24], 23: 22 }, { 13: 20, 18: 26, 20: r2, 21: a2 }, e2(n2, [2, 9], { 14: [1, 27], 15: [1, 28] }), e2(o2, [2, 43]), e2(o2, [2, 44]), e2(n2, [2, 13], { 14: [1, 29], 15: [1, 30], 27: s2 }), e2(o2, [2, 41]), { 16: [1, 34], 20: [1, 32], 21: [1, 33], 27: s2 }, e2(n2, [2, 22]), e2(n2, [2, 24], { 14: [1, 35] }), e2(n2, [2, 25], { 14: [1, 36] }), e2(n2, [2, 26]), { 20: c2, 25: 37, 26: 38, 27: s2 }, e2(n2, [2, 10], { 15: [1, 40] }), { 16: [1, 41] }, e2(n2, [2, 14], { 15: [1, 42] }), { 16: [1, 43] }, { 13: 44, 20: r2, 21: a2 }, e2(n2, [2, 17], { 14: [1, 45] }), e2(n2, [2, 18], { 14: [1, 46] }), e2(n2, [2, 19]), e2(n2, [2, 27]), e2(n2, [2, 28]), e2(n2, [2, 23], { 27: [1, 47] }), e2(l2, [2, 29]), { 15: [1, 48] }, { 16: [1, 49] }, e2(n2, [2, 11]), { 16: [1, 50] }, e2(n2, [2, 15]), e2(o2, [2, 42]), e2(n2, [2, 20]), e2(n2, [2, 21]), { 20: c2, 26: 51 }, { 16: u2, 20: d2, 21: [1, 53], 28: 52, 29: 54, 30: 55, 31: f2, 32: p2, 33: m2 }, e2(n2, [2, 12]), e2(n2, [2, 16]), e2(l2, [2, 30]), e2(l2, [2, 31]), e2(l2, [2, 32]), e2(l2, [2, 33], { 30: 61, 16: u2, 20: d2, 31: f2, 32: p2, 33: m2 }), e2(h2, [2, 34]), e2(h2, [2, 36]), e2(h2, [2, 37]), e2(h2, [2, 38]), e2(h2, [2, 39]), e2(h2, [2, 40]), e2(h2, [2, 35])], defaultActions: { 6: [2, 1] }, parseError: i(function(e3, t3) {
    if (t3.recoverable) this.trace(e3);
    else {
      var n3 = Error(e3);
      throw n3.hash = t3, n3;
    }
  }, `parseError`), parse: i(function(e3) {
    var t3 = this, n3 = [0], r3 = [], a3 = [null], o3 = [], s3 = this.table, c3 = ``, l3 = 0, u3 = 0, d3 = 0, f3 = 2, p3 = 1, m3 = o3.slice.call(arguments, 1), h3 = Object.create(this.lexer), g3 = { yy: {} };
    for (var _3 in this.yy) Object.prototype.hasOwnProperty.call(this.yy, _3) && (g3.yy[_3] = this.yy[_3]);
    h3.setInput(e3, g3.yy), g3.yy.lexer = h3, g3.yy.parser = this, h3.yylloc === void 0 && (h3.yylloc = {});
    var v2 = h3.yylloc;
    o3.push(v2);
    var y2 = h3.options && h3.options.ranges;
    typeof g3.yy.parseError == `function` ? this.parseError = g3.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
    function b2(e4) {
      n3.length -= 2 * e4, a3.length -= e4, o3.length -= e4;
    }
    i(b2, `popStack`);
    function x2() {
      var e4 = r3.pop() || h3.lex() || p3;
      return typeof e4 != `number` && (e4 instanceof Array && (r3 = e4, e4 = r3.pop()), e4 = t3.symbols_[e4] || e4), e4;
    }
    i(x2, `lex`);
    for (var S2, C2, w2, T2, E2, D2 = {}, O2, k2, A2, j2; ; ) {
      if (w2 = n3[n3.length - 1], this.defaultActions[w2] ? T2 = this.defaultActions[w2] : (S2 ?? (S2 = x2()), T2 = s3[w2] && s3[w2][S2]), T2 === void 0 || !T2.length || !T2[0]) {
        var M2 = ``;
        for (O2 in j2 = [], s3[w2]) this.terminals_[O2] && O2 > f3 && j2.push(`'` + this.terminals_[O2] + `'`);
        M2 = h3.showPosition ? `Parse error on line ` + (l3 + 1) + `:
` + h3.showPosition() + `
Expecting ` + j2.join(`, `) + `, got '` + (this.terminals_[S2] || S2) + `'` : `Parse error on line ` + (l3 + 1) + `: Unexpected ` + (S2 == p3 ? `end of input` : `'` + (this.terminals_[S2] || S2) + `'`), this.parseError(M2, { text: h3.match, token: this.terminals_[S2] || S2, line: h3.yylineno, loc: v2, expected: j2 });
      }
      if (T2[0] instanceof Array && T2.length > 1) throw Error(`Parse Error: multiple actions possible at state: ` + w2 + `, token: ` + S2);
      switch (T2[0]) {
        case 1:
          n3.push(S2), a3.push(h3.yytext), o3.push(h3.yylloc), n3.push(T2[1]), S2 = null, C2 ? (S2 = C2, C2 = null) : (u3 = h3.yyleng, c3 = h3.yytext, l3 = h3.yylineno, v2 = h3.yylloc, d3 > 0 && d3--);
          break;
        case 2:
          if (k2 = this.productions_[T2[1]][1], D2.$ = a3[a3.length - k2], D2._$ = { first_line: o3[o3.length - (k2 || 1)].first_line, last_line: o3[o3.length - 1].last_line, first_column: o3[o3.length - (k2 || 1)].first_column, last_column: o3[o3.length - 1].last_column }, y2 && (D2._$.range = [o3[o3.length - (k2 || 1)].range[0], o3[o3.length - 1].range[1]]), E2 = this.performAction.apply(D2, [c3, u3, l3, g3.yy, T2[1], a3, o3].concat(m3)), E2 !== void 0) return E2;
          k2 && (n3 = n3.slice(0, -1 * k2 * 2), a3 = a3.slice(0, -1 * k2), o3 = o3.slice(0, -1 * k2)), n3.push(this.productions_[T2[1]][0]), a3.push(D2.$), o3.push(D2._$), A2 = s3[n3[n3.length - 2]][n3[n3.length - 1]], n3.push(A2);
          break;
        case 3:
          return true;
      }
    }
    return true;
  }, `parse`) };
  g2.lexer = (function() {
    return { EOF: 1, parseError: i(function(e3, t3) {
      if (this.yy.parser) this.yy.parser.parseError(e3, t3);
      else throw Error(e3);
    }, `parseError`), setInput: i(function(e3, t3) {
      return this.yy = t3 || this.yy || {}, this._input = e3, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = ``, this.conditionStack = [`INITIAL`], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
    }, `setInput`), input: i(function() {
      var e3 = this._input[0];
      return this.yytext += e3, this.yyleng++, this.offset++, this.match += e3, this.matched += e3, e3.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e3;
    }, `input`), unput: i(function(e3) {
      var t3 = e3.length, n3 = e3.split(/(?:\r\n?|\n)/g);
      this._input = e3 + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t3), this.offset -= t3;
      var r3 = this.match.split(/(?:\r\n?|\n)/g);
      this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n3.length - 1 && (this.yylineno -= n3.length - 1);
      var i2 = this.yylloc.range;
      return this.yylloc = { first_line: this.yylloc.first_line, last_line: this.yylineno + 1, first_column: this.yylloc.first_column, last_column: n3 ? (n3.length === r3.length ? this.yylloc.first_column : 0) + r3[r3.length - n3.length].length - n3[0].length : this.yylloc.first_column - t3 }, this.options.ranges && (this.yylloc.range = [i2[0], i2[0] + this.yyleng - t3]), this.yyleng = this.yytext.length, this;
    }, `unput`), more: i(function() {
      return this._more = true, this;
    }, `more`), reject: i(function() {
      if (this.options.backtrack_lexer) this._backtrack = true;
      else return this.parseError(`Lexical error on line ` + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), { text: ``, token: null, line: this.yylineno });
      return this;
    }, `reject`), less: i(function(e3) {
      this.unput(this.match.slice(e3));
    }, `less`), pastInput: i(function() {
      var e3 = this.matched.substr(0, this.matched.length - this.match.length);
      return (e3.length > 20 ? `...` : ``) + e3.substr(-20).replace(/\n/g, ``);
    }, `pastInput`), upcomingInput: i(function() {
      var e3 = this.match;
      return e3.length < 20 && (e3 += this._input.substr(0, 20 - e3.length)), (e3.substr(0, 20) + (e3.length > 20 ? `...` : ``)).replace(/\n/g, ``);
    }, `upcomingInput`), showPosition: i(function() {
      var e3 = this.pastInput(), t3 = Array(e3.length + 1).join(`-`);
      return e3 + this.upcomingInput() + `
` + t3 + `^`;
    }, `showPosition`), test_match: i(function(e3, t3) {
      var n3, r3, i2;
      if (this.options.backtrack_lexer && (i2 = { yylineno: this.yylineno, yylloc: { first_line: this.yylloc.first_line, last_line: this.last_line, first_column: this.yylloc.first_column, last_column: this.yylloc.last_column }, yytext: this.yytext, match: this.match, matches: this.matches, matched: this.matched, yyleng: this.yyleng, offset: this.offset, _more: this._more, _input: this._input, yy: this.yy, conditionStack: this.conditionStack.slice(0), done: this.done }, this.options.ranges && (i2.yylloc.range = this.yylloc.range.slice(0))), r3 = e3[0].match(/(?:\r\n?|\n).*/g), r3 && (this.yylineno += r3.length), this.yylloc = { first_line: this.yylloc.last_line, last_line: this.yylineno + 1, first_column: this.yylloc.last_column, last_column: r3 ? r3[r3.length - 1].length - r3[r3.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e3[0].length }, this.yytext += e3[0], this.match += e3[0], this.matches = e3, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(e3[0].length), this.matched += e3[0], n3 = this.performAction.call(this, this.yy, this, t3, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), n3) return n3;
      if (this._backtrack) {
        for (var a3 in i2) this[a3] = i2[a3];
        return false;
      }
      return false;
    }, `test_match`), next: i(function() {
      if (this.done) return this.EOF;
      this._input || (this.done = true);
      var e3, t3, n3, r3;
      this._more || (this.yytext = ``, this.match = ``);
      for (var i2 = this._currentRules(), a3 = 0; a3 < i2.length; a3++) if (n3 = this._input.match(this.rules[i2[a3]]), n3 && (!t3 || n3[0].length > t3[0].length)) {
        if (t3 = n3, r3 = a3, this.options.backtrack_lexer) {
          if (e3 = this.test_match(n3, i2[a3]), e3 !== false) return e3;
          if (this._backtrack) {
            t3 = false;
            continue;
          } else return false;
        } else if (!this.options.flex) break;
      }
      return t3 ? (e3 = this.test_match(t3, i2[r3]), e3 === false ? false : e3) : this._input === `` ? this.EOF : this.parseError(`Lexical error on line ` + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: ``, token: null, line: this.yylineno });
    }, `next`), lex: i(function() {
      return this.next() || this.lex();
    }, `lex`), begin: i(function(e3) {
      this.conditionStack.push(e3);
    }, `begin`), popState: i(function() {
      return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
    }, `popState`), _currentRules: i(function() {
      return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
    }, `_currentRules`), topState: i(function(e3) {
      return e3 = this.conditionStack.length - 1 - Math.abs(e3 || 0), e3 >= 0 ? this.conditionStack[e3] : `INITIAL`;
    }, `topState`), pushState: i(function(e3) {
      this.begin(e3);
    }, `pushState`), stateStackSize: i(function() {
      return this.conditionStack.length;
    }, `stateStackSize`), options: { "case-insensitive": true }, performAction: i(function(e3, t3, n3, r3) {
      switch (n3) {
        case 0:
          break;
        case 1:
          break;
        case 2:
          break;
        case 3:
          if (e3.getIndentMode && e3.getIndentMode()) return e3.consumeIndentText = true, this.begin(`INITIAL`), 22;
          break;
        case 4:
          break;
        case 5:
          e3.setIndentMode && e3.setIndentMode(false), this.begin(`INITIAL`), this.unput(t3.yytext);
          break;
        case 6:
          return this.begin(`bol`), 8;
        case 7:
          break;
        case 8:
          break;
        case 9:
          return 7;
        case 10:
          return 11;
        case 11:
          return 5;
        case 12:
          return 12;
        case 13:
          return 17;
        case 14:
          if (e3.consumeIndentText) e3.consumeIndentText = false;
          else return 19;
          break;
        case 15:
          return 24;
        case 16:
          return t3.yytext = t3.yytext.slice(2, -2), 14;
        case 17:
          return t3.yytext = t3.yytext.slice(1, -1).trim(), 14;
        case 18:
          return 16;
        case 19:
          return 31;
        case 20:
          return 33;
        case 21:
          return 32;
        case 22:
          return 20;
        case 23:
          return 21;
        case 24:
          return 27;
        case 25:
          return 15;
      }
    }, `anonymous`), rules: [/^(?:%%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[ \t]+(?=[\n\r]))/i, /^(?:[ \t]+(?=text\b))/i, /^(?:[ \t]+)/i, /^(?:[^ \t\n\r])/i, /^(?:[\n\r]+)/i, /^(?:%%[^\n]*)/i, /^(?:[ \t]+)/i, /^(?:$)/i, /^(?:title\s[^#\n;]+)/i, /^(?:venn-beta\b)/i, /^(?:set\b)/i, /^(?:union\b)/i, /^(?:text\b)/i, /^(?:style\b)/i, /^(?:\["[^\"]*"\])/i, /^(?:\[[^\]\"]+\])/i, /^(?:[+-]?(\d+(\.\d+)?|\.\d+))/i, /^(?:#[0-9a-fA-F]{3,8})/i, /^(?:rgba\(\s*[0-9.]+\s*[,]\s*[0-9.]+\s*[,]\s*[0-9.]+\s*[,]\s*[0-9.]+\s*\))/i, /^(?:rgb\(\s*[0-9.]+\s*[,]\s*[0-9.]+\s*[,]\s*[0-9.]+\s*\))/i, /^(?:[A-Za-z_][A-Za-z0-9\-_]*)/i, /^(?:"[^\"]*")/i, /^(?:,)/i, /^(?::)/i], conditions: { bol: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], inclusive: true }, INITIAL: { rules: [0, 1, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], inclusive: true } } };
  })();
  function _2() {
    this.yy = {};
  }
  return i(_2, `Parser`), _2.prototype = g2, g2.Parser = _2, new _2();
})();
U.parser = U;
var Ee = U, W = [], G = [], K = [], q = /* @__PURE__ */ new Set(), J, Y = false, De = i((e2, t2, n2) => {
  let r2 = Z(e2).sort(), i2 = n2 ?? 10 / e2.length ** 2;
  J = r2, r2.length === 1 && q.add(r2[0]), W.push({ sets: r2, size: i2, label: t2 ? X(t2) : void 0 });
}, `addSubsetData`), Oe = i(() => W, `getSubsetData`), X = i((e2) => {
  let t2 = e2.trim();
  return t2.length >= 2 && t2.startsWith(`"`) && t2.endsWith(`"`) ? t2.slice(1, -1) : t2;
}, `normalizeText`), ke = i((e2) => e2 && X(e2), `normalizeStyleValue`), Ae = i((e2, t2, n2) => {
  let r2 = X(t2);
  G.push({ sets: Z(e2).sort(), id: r2, label: n2 ? X(n2) : void 0 });
}, `addTextData`), je = i((e2, t2) => {
  let n2 = Z(e2).sort(), r2 = {};
  for (let [e3, n3] of t2) r2[e3] = ke(n3) ?? n3;
  K.push({ targets: n2, styles: r2 });
}, `addStyleData`), Me = i(() => K, `getStyleData`), Z = i((e2) => e2.map((e3) => X(e3)), `normalizeIdentifierList`), Ne = i((e2) => {
  let t2 = Z(e2).filter((e3) => !q.has(e3));
  if (t2.length > 0) throw Error(`unknown set identifier: ${t2.join(`, `)}`);
}, `validateUnionIdentifiers`), Pe = i(() => G, `getTextData`), Fe = i(() => J, `getCurrentSets`), Ie = i(() => Y, `getIndentMode`), Le = i((e2) => {
  Y = e2;
}, `setIndentMode`), Re = g.venn;
function ze() {
  return a(Re, _().venn);
}
i(ze, `getConfig`);
var Be = { getConfig: ze, clear: i(() => {
  m(), W.length = 0, G.length = 0, K.length = 0, q.clear(), J = void 0, Y = false;
}, `customClear`), setAccTitle: c, getAccTitle: f, setDiagramTitle: r, getDiagramTitle: t, getAccDescription: v, setAccDescription: o, addSubsetData: De, getSubsetData: Oe, addTextData: Ae, addStyleData: je, validateUnionIdentifiers: Ne, getTextData: Pe, getStyleData: Me, getCurrentSets: Fe, getIndentMode: Ie, setIndentMode: Le }, Ve = i((e2) => `
  .venn-title {
    font-size: 32px;
    fill: ${e2.vennTitleTextColor};
    font-family: ${e2.fontFamily};
  }

  .venn-circle text {
    font-size: 48px;
    font-family: ${e2.fontFamily};
  }

  .venn-intersection text {
    font-size: 48px;
    fill: ${e2.vennSetTextColor};
    font-family: ${e2.fontFamily};
  }

  .venn-text-node {
    font-family: ${e2.fontFamily};
    color: ${e2.vennSetTextColor};
  }
`, `getStyles`);
function He(e2) {
  let t2 = /* @__PURE__ */ new Map();
  for (let n2 of e2) {
    let e3 = n2.targets.join(`|`), r2 = t2.get(e3);
    r2 ? Object.assign(r2, n2.styles) : t2.set(e3, { ...n2.styles });
  }
  return t2;
}
i(He, `buildStyleByKey`);
var Ue = i((t2, n2, r2, i2) => {
  var _a, _b, _c;
  let a2 = i2.db, o2 = (_a = a2.getConfig) == null ? void 0 : _a.call(a2), { themeVariables: c2, look: f2, handDrawnSeed: m2 } = _(), g2 = f2 === `handDrawn`, v2 = [c2.venn1, c2.venn2, c2.venn3, c2.venn4, c2.venn5, c2.venn6, c2.venn7, c2.venn8].filter(Boolean), b2 = (_b = a2.getDiagramTitle) == null ? void 0 : _b.call(a2), x2 = a2.getSubsetData(), S2 = a2.getTextData(), C2 = He(a2.getStyleData()), w2 = (o2 == null ? void 0 : o2.width) ?? 800, T2 = (o2 == null ? void 0 : o2.height) ?? 450, E2 = w2 / 1600, D2 = b2 ? 48 * E2 : 0, O2 = c2.primaryTextColor ?? c2.textColor, k2 = s(n2);
  k2.attr(`viewBox`, `0 0 ${w2} ${T2}`), b2 && k2.append(`text`).text(b2).attr(`class`, `venn-title`).attr(`font-size`, `${32 * E2}px`).attr(`text-anchor`, `middle`).attr(`dominant-baseline`, `middle`).attr(`x`, `50%`).attr(`y`, 32 * E2).style(`fill`, c2.vennTitleTextColor || c2.titleColor);
  let A2 = h(document.createElement(`div`)), j2 = ge().width(w2).height(T2 - D2);
  A2.datum(x2).call(j2);
  let M2 = g2 ? d.svg(A2.select(`svg`).node()) : void 0, N2 = Te(x2, { width: w2, height: T2 - D2, padding: (o2 == null ? void 0 : o2.padding) ?? 15 }), P2 = /* @__PURE__ */ new Map();
  for (let e2 of N2) {
    let t3 = Q([...e2.data.sets].sort());
    P2.set(t3, e2);
  }
  S2.length > 0 && $(o2, P2, A2, S2, E2, C2);
  let F2 = l(c2.background || `#f4f4f4`);
  A2.selectAll(`.venn-circle`).each(function(t3, n3) {
    var _a2;
    let r3 = h(this), i3 = Q([...t3.sets].sort()), a3 = C2.get(i3), o3 = (a3 == null ? void 0 : a3.fill) || v2[n3 % v2.length] || c2.primaryColor;
    r3.classed(`venn-set-${n3 % 8}`, true);
    let s2 = (a3 == null ? void 0 : a3[`fill-opacity`]) ?? 0.1, l2 = (a3 == null ? void 0 : a3.stroke) || o3, d2 = (a3 == null ? void 0 : a3[`stroke-width`]) || `${5 * E2}`;
    if (g2 && M2) {
      let e2 = P2.get(i3);
      if (e2 && e2.circles.length > 0) {
        let t4 = e2.circles[0], i4 = M2.circle(t4.x, t4.y, t4.radius * 2, { roughness: 0.7, seed: m2, fill: y(o3, 0.7), fillStyle: `hachure`, fillWeight: 2, hachureGap: 8, hachureAngle: -41 + n3 * 60, stroke: l2, strokeWidth: parseFloat(String(d2)) });
        r3.select(`path`).remove(), (_a2 = r3.node()) == null ? void 0 : _a2.insertBefore(i4, r3.select(`text`).node());
      }
    } else r3.select(`path`).style(`fill`, o3).style(`fill-opacity`, s2).style(`stroke`, l2).style(`stroke-width`, d2).style(`stroke-opacity`, 0.95);
    let f3 = (a3 == null ? void 0 : a3.color) || (F2 ? u(o3, 30) : e(o3, 30));
    r3.select(`text`).style(`font-size`, `${48 * E2}px`).style(`fill`, f3);
  }), g2 && M2 ? A2.selectAll(`.venn-intersection`).each(function(e2) {
    var _a2;
    let t3 = h(this), n3 = Q([...e2.sets].sort()), r3 = C2.get(n3), i3 = r3 == null ? void 0 : r3.fill;
    if (i3) {
      let e3 = t3.select(`path`), n4 = e3.attr(`d`);
      if (n4) {
        let t4 = M2.path(n4, { roughness: 0.7, seed: m2, fill: y(i3, 0.3), fillStyle: `cross-hatch`, fillWeight: 2, hachureGap: 6, hachureAngle: 60, stroke: `none` }), r4 = e3.node();
        (_a2 = r4 == null ? void 0 : r4.parentNode) == null ? void 0 : _a2.insertBefore(t4, r4), e3.remove();
      }
    } else t3.select(`path`).style(`fill-opacity`, 0);
    t3.select(`text`).style(`font-size`, `${48 * E2}px`).style(`fill`, (r3 == null ? void 0 : r3.color) ?? c2.vennSetTextColor ?? O2);
  }) : (A2.selectAll(`.venn-intersection text`).style(`font-size`, `${48 * E2}px`).style(`fill`, (e2) => {
    var _a2;
    let t3 = Q([...e2.sets].sort());
    return ((_a2 = C2.get(t3)) == null ? void 0 : _a2.color) ?? c2.vennSetTextColor ?? O2;
  }), A2.selectAll(`.venn-intersection path`).style(`fill-opacity`, (e2) => {
    var _a2;
    let t3 = Q([...e2.sets].sort());
    return ((_a2 = C2.get(t3)) == null ? void 0 : _a2.fill) ? 1 : 0;
  }).style(`fill`, (e2) => {
    var _a2;
    let t3 = Q([...e2.sets].sort());
    return ((_a2 = C2.get(t3)) == null ? void 0 : _a2.fill) ?? `transparent`;
  }));
  let I2 = k2.append(`g`).attr(`transform`, `translate(0, ${D2})`), L2 = A2.select(`svg`).node();
  if (L2 && `childNodes` in L2) for (let e2 of [...L2.childNodes]) (_c = I2.node()) == null ? void 0 : _c.appendChild(e2);
  p(k2, T2, w2, (o2 == null ? void 0 : o2.useMaxWidth) ?? true);
}, `draw`);
function Q(e2) {
  return e2.join(`|`);
}
i(Q, `stableSetsKey`);
function $(e2, t2, n2, r2, i2, a2) {
  var _a;
  let o2 = (e2 == null ? void 0 : e2.useDebugLayout) ?? false, s2 = n2.select(`svg`).append(`g`).attr(`class`, `venn-text-nodes`), c2 = /* @__PURE__ */ new Map();
  for (let e3 of r2) {
    let t3 = Q(e3.sets), n3 = c2.get(t3);
    n3 ? n3.push(e3) : c2.set(t3, [e3]);
  }
  for (let [e3, n3] of c2.entries()) {
    let r3 = t2.get(e3);
    if (!(r3 == null ? void 0 : r3.text)) continue;
    let c3 = r3.text.x, l2 = r3.text.y, u2 = Math.min(...r3.circles.map((e4) => e4.radius)), d2 = Math.min(...r3.circles.map((e4) => e4.radius - Math.hypot(c3 - e4.x, l2 - e4.y))), f2 = Number.isFinite(d2) ? Math.max(0, d2) : 0;
    f2 === 0 && Number.isFinite(u2) && (f2 = u2 * 0.6);
    let p2 = s2.append(`g`).attr(`class`, `venn-text-area`).attr(`font-size`, `${40 * i2}px`);
    o2 && p2.append(`circle`).attr(`class`, `venn-text-debug-circle`).attr(`cx`, c3).attr(`cy`, l2).attr(`r`, f2).attr(`fill`, `none`).attr(`stroke`, `purple`).attr(`stroke-width`, 1.5 * i2).attr(`stroke-dasharray`, `${6 * i2} ${4 * i2}`);
    let m2 = Math.max(80 * i2, f2 * 2 * 0.95), h2 = Math.max(60 * i2, f2 * 2 * 0.95), g2 = (r3.data.label && r3.data.label.length > 0 ? Math.min(32 * i2, f2 * 0.25) : 0) + (n3.length <= 2 ? 30 * i2 : 0), _2 = c3 - m2 / 2, v2 = l2 - h2 / 2 + g2, y2 = Math.max(1, Math.ceil(Math.sqrt(n3.length))), b2 = Math.max(1, Math.ceil(n3.length / y2)), x2 = m2 / y2, S2 = h2 / b2;
    for (let [e4, t3] of n3.entries()) {
      let n4 = e4 % y2, r4 = Math.floor(e4 / y2), s3 = _2 + x2 * (n4 + 0.5), c4 = v2 + S2 * (r4 + 0.5);
      o2 && p2.append(`rect`).attr(`class`, `venn-text-debug-cell`).attr(`x`, _2 + x2 * n4).attr(`y`, v2 + S2 * r4).attr(`width`, x2).attr(`height`, S2).attr(`fill`, `none`).attr(`stroke`, `teal`).attr(`stroke-width`, 1 * i2).attr(`stroke-dasharray`, `${4 * i2} ${3 * i2}`);
      let l3 = x2 * 0.9, u3 = S2 * 0.9, d3 = p2.append(`foreignObject`).attr(`class`, `venn-text-node-fo`).attr(`width`, l3).attr(`height`, u3).attr(`x`, s3 - l3 / 2).attr(`y`, c4 - u3 / 2).attr(`overflow`, `visible`), f3 = (_a = a2.get(t3.id)) == null ? void 0 : _a.color, m3 = d3.append(`xhtml:span`).attr(`class`, `venn-text-node`).style(`display`, `flex`).style(`width`, `100%`).style(`height`, `100%`).style(`white-space`, `normal`).style(`align-items`, `center`).style(`justify-content`, `center`).style(`text-align`, `center`).style(`overflow-wrap`, `normal`).style(`word-break`, `normal`).text(t3.label ?? t3.id);
      f3 && m3.style(`color`, f3);
    }
  }
}
i($, `renderTextNodes`);
var We = { parser: Ee, db: Be, renderer: { draw: Ue }, styles: Ve };
export {
  We as diagram
};
