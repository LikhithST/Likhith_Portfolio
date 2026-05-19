var _a;
import { b as w, ag as de, a4 as Q, t as J, b0 as he, F as ue, aF as K, bc as P, a$ as Y, b2 as pe, a3 as fe, b4 as me, a7 as ge, a2 as ye, b1 as Se, T as ve, ax as xe, u as be } from "./index-bLSjIDix.js";
import { s as we } from "./chunk-2J33WTMH-Bwgx4IxG.js";
import { p as Ce } from "./chunk-4BX2VUAB-BgiORwHT.js";
import { p as Te } from "./wardley-L42UT6IY-mILw-_Db.js";
import { f as I } from "./defaultLocale-CrowFXzY.js";
import { o as Z } from "./ordinal-Cboi1Yqb.js";
import "./init-Gi6I4Gst.js";
function Le(e2) {
  var a = 0, n = e2.children, l = n && n.length;
  if (!l) a = 1;
  else for (; --l >= 0; ) a += n[l].value;
  e2.value = a;
}
function $e() {
  return this.eachAfter(Le);
}
function Ae(e2, a) {
  let n = -1;
  for (const l of this) e2.call(a, l, ++n, this);
  return this;
}
function Fe(e2, a) {
  for (var n = this, l = [n], r, o, d = -1; n = l.pop(); ) if (e2.call(a, n, ++d, this), r = n.children) for (o = r.length - 1; o >= 0; --o) l.push(r[o]);
  return this;
}
function Ne(e2, a) {
  for (var n = this, l = [n], r = [], o, d, h, m = -1; n = l.pop(); ) if (r.push(n), o = n.children) for (d = 0, h = o.length; d < h; ++d) l.push(o[d]);
  for (; n = r.pop(); ) e2.call(a, n, ++m, this);
  return this;
}
function Me(e2, a) {
  let n = -1;
  for (const l of this) if (e2.call(a, l, ++n, this)) return l;
}
function Ve(e2) {
  return this.eachAfter(function(a) {
    for (var n = +e2(a.data) || 0, l = a.children, r = l && l.length; --r >= 0; ) n += l[r].value;
    a.value = n;
  });
}
function ke(e2) {
  return this.eachBefore(function(a) {
    a.children && a.children.sort(e2);
  });
}
function _e(e2) {
  for (var a = this, n = ze(a, e2), l = [a]; a !== n; ) a = a.parent, l.push(a);
  for (var r = l.length; e2 !== n; ) l.splice(r, 0, e2), e2 = e2.parent;
  return l;
}
function ze(e2, a) {
  if (e2 === a) return e2;
  var n = e2.ancestors(), l = a.ancestors(), r = null;
  for (e2 = n.pop(), a = l.pop(); e2 === a; ) r = e2, e2 = n.pop(), a = l.pop();
  return r;
}
function De() {
  for (var e2 = this, a = [e2]; e2 = e2.parent; ) a.push(e2);
  return a;
}
function Pe() {
  return Array.from(this);
}
function Be() {
  var e2 = [];
  return this.eachBefore(function(a) {
    a.children || e2.push(a);
  }), e2;
}
function Re() {
  var e2 = this, a = [];
  return e2.each(function(n) {
    n !== e2 && a.push({ source: n.parent, target: n });
  }), a;
}
function* Ee() {
  var e2 = this, a, n = [e2], l, r, o;
  do
    for (a = n.reverse(), n = []; e2 = a.pop(); ) if (yield e2, l = e2.children) for (r = 0, o = l.length; r < o; ++r) n.push(l[r]);
  while (n.length);
}
function ee(e2, a) {
  e2 instanceof Map ? (e2 = [void 0, e2], a === void 0 && (a = Ie)) : a === void 0 && (a = He);
  for (var n = new j(e2), l, r = [n], o, d, h, m; l = r.pop(); ) if ((d = a(l.data)) && (m = (d = Array.from(d)).length)) for (l.children = d, h = m - 1; h >= 0; --h) r.push(o = d[h] = new j(d[h])), o.parent = l, o.depth = l.depth + 1;
  return n.eachBefore(Ge);
}
function We() {
  return ee(this).eachBefore(Oe);
}
function He(e2) {
  return e2.children;
}
function Ie(e2) {
  return Array.isArray(e2) ? e2[1] : null;
}
function Oe(e2) {
  e2.data.value !== void 0 && (e2.value = e2.data.value), e2.data = e2.data.data;
}
function Ge(e2) {
  var a = 0;
  do
    e2.height = a;
  while ((e2 = e2.parent) && e2.height < ++a);
}
function j(e2) {
  this.data = e2, this.depth = this.height = 0, this.parent = null;
}
j.prototype = ee.prototype = { constructor: j, count: $e, each: Ae, eachAfter: Ne, eachBefore: Fe, find: Me, sum: Ve, sort: ke, path: _e, ancestors: De, descendants: Pe, leaves: Be, links: Re, copy: We, [Symbol.iterator]: Ee };
function qe(e2) {
  if (typeof e2 != "function") throw new Error();
  return e2;
}
function O() {
  return 0;
}
function G(e2) {
  return function() {
    return e2;
  };
}
function Xe(e2) {
  e2.x0 = Math.round(e2.x0), e2.y0 = Math.round(e2.y0), e2.x1 = Math.round(e2.x1), e2.y1 = Math.round(e2.y1);
}
function Ye(e2, a, n, l, r) {
  for (var o = e2.children, d, h = -1, m = o.length, c = e2.value && (l - a) / e2.value; ++h < m; ) d = o[h], d.y0 = n, d.y1 = r, d.x0 = a, d.x1 = a += d.value * c;
}
function je(e2, a, n, l, r) {
  for (var o = e2.children, d, h = -1, m = o.length, c = e2.value && (r - n) / e2.value; ++h < m; ) d = o[h], d.x0 = a, d.x1 = l, d.y0 = n, d.y1 = n += d.value * c;
}
var Ue = (1 + Math.sqrt(5)) / 2;
function Ze(e2, a, n, l, r, o) {
  for (var d = [], h = a.children, m, c, u = 0, b = 0, s = h.length, x, S, v = a.value, p, g, M, N, z, R, V; u < s; ) {
    x = r - n, S = o - l;
    do
      p = h[b++].value;
    while (!p && b < s);
    for (g = M = p, R = Math.max(S / x, x / S) / (v * e2), V = p * p * R, z = Math.max(M / V, V / g); b < s; ++b) {
      if (p += c = h[b].value, c < g && (g = c), c > M && (M = c), V = p * p * R, N = Math.max(M / V, V / g), N > z) {
        p -= c;
        break;
      }
      z = N;
    }
    d.push(m = { value: p, dice: x < S, children: h.slice(u, b) }), m.dice ? Ye(m, n, l, r, v ? l += S * p / v : o) : je(m, n, l, v ? n += x * p / v : r, o), v -= p, u = b;
  }
  return d;
}
const Je = (function e(a) {
  function n(l, r, o, d, h) {
    Ze(a, l, r, o, d, h);
  }
  return n.ratio = function(l) {
    return e((l = +l) > 1 ? l : 1);
  }, n;
})(Ue);
function Ke() {
  var e2 = Je, a = false, n = 1, l = 1, r = [0], o = O, d = O, h = O, m = O, c = O;
  function u(s) {
    return s.x0 = s.y0 = 0, s.x1 = n, s.y1 = l, s.eachBefore(b), r = [0], a && s.eachBefore(Xe), s;
  }
  function b(s) {
    var x = r[s.depth], S = s.x0 + x, v = s.y0 + x, p = s.x1 - x, g = s.y1 - x;
    p < S && (S = p = (S + p) / 2), g < v && (v = g = (v + g) / 2), s.x0 = S, s.y0 = v, s.x1 = p, s.y1 = g, s.children && (x = r[s.depth + 1] = o(s) / 2, S += c(s) - x, v += d(s) - x, p -= h(s) - x, g -= m(s) - x, p < S && (S = p = (S + p) / 2), g < v && (v = g = (v + g) / 2), e2(s, S, v, p, g));
  }
  return u.round = function(s) {
    return arguments.length ? (a = !!s, u) : a;
  }, u.size = function(s) {
    return arguments.length ? (n = +s[0], l = +s[1], u) : [n, l];
  }, u.tile = function(s) {
    return arguments.length ? (e2 = qe(s), u) : e2;
  }, u.padding = function(s) {
    return arguments.length ? u.paddingInner(s).paddingOuter(s) : u.paddingInner();
  }, u.paddingInner = function(s) {
    return arguments.length ? (o = typeof s == "function" ? s : G(+s), u) : o;
  }, u.paddingOuter = function(s) {
    return arguments.length ? u.paddingTop(s).paddingRight(s).paddingBottom(s).paddingLeft(s) : u.paddingTop();
  }, u.paddingTop = function(s) {
    return arguments.length ? (d = typeof s == "function" ? s : G(+s), u) : d;
  }, u.paddingRight = function(s) {
    return arguments.length ? (h = typeof s == "function" ? s : G(+s), u) : h;
  }, u.paddingBottom = function(s) {
    return arguments.length ? (m = typeof s == "function" ? s : G(+s), u) : m;
  }, u.paddingLeft = function(s) {
    return arguments.length ? (c = typeof s == "function" ? s : G(+s), u) : c;
  }, u;
}
var ae = (_a = class {
  constructor() {
    this.nodes = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this.classes = /* @__PURE__ */ new Map(), this.setAccTitle = pe, this.getAccTitle = fe, this.setDiagramTitle = me, this.getDiagramTitle = ge, this.getAccDescription = ye, this.setAccDescription = Se;
  }
  getNodes() {
    return this.nodes;
  }
  getConfig() {
    const e2 = ve, a = Q();
    return J({ ...e2.treemap, ...a.treemap ?? {} });
  }
  addNode(e2, a) {
    this.nodes.push(e2), this.levels.set(e2, a), a === 0 && (this.outerNodes.push(e2), this.root ?? (this.root = e2));
  }
  getRoot() {
    return { name: "", children: this.outerNodes };
  }
  addClass(e2, a) {
    const n = this.classes.get(e2) ?? { id: e2, styles: [], textStyles: [] }, l = a.replace(/\\,/g, "\xA7\xA7\xA7").replace(/,/g, ";").replace(/§§§/g, ",").split(";");
    l && l.forEach((r) => {
      xe(r) && ((n == null ? void 0 : n.textStyles) ? n.textStyles.push(r) : n.textStyles = [r]), (n == null ? void 0 : n.styles) ? n.styles.push(r) : n.styles = [r];
    }), this.classes.set(e2, n);
  }
  getClasses() {
    return this.classes;
  }
  getStylesForClass(e2) {
    var _a2;
    return ((_a2 = this.classes.get(e2)) == null ? void 0 : _a2.styles) ?? [];
  }
  clear() {
    be(), this.nodes = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this.classes = /* @__PURE__ */ new Map(), this.root = void 0;
  }
}, w(_a, "TreeMapDB"), _a);
function ne(e2) {
  if (!e2.length) return [];
  const a = [], n = [];
  return e2.forEach((l) => {
    const r = { name: l.name, children: l.type === "Leaf" ? void 0 : [] };
    for (r.classSelector = l == null ? void 0 : l.classSelector, (l == null ? void 0 : l.cssCompiledStyles) && (r.cssCompiledStyles = l.cssCompiledStyles), l.type === "Leaf" && l.value !== void 0 && (r.value = l.value); n.length > 0 && n[n.length - 1].level >= l.level; ) n.pop();
    if (n.length === 0) a.push(r);
    else {
      const o = n[n.length - 1].node;
      o.children ? o.children.push(r) : o.children = [r];
    }
    l.type !== "Leaf" && n.push({ node: r, level: l.level });
  }), a;
}
w(ne, "buildHierarchy");
var Qe = w((e2, a) => {
  Ce(e2, a);
  const n = [];
  for (const o of e2.TreemapRows ?? []) o.$type === "ClassDefStatement" && a.addClass(o.className ?? "", o.styleText ?? "");
  for (const o of e2.TreemapRows ?? []) {
    const d = o.item;
    if (!d) continue;
    const h = o.indent ? parseInt(o.indent) : 0, m = et(d), c = d.classSelector ? a.getStylesForClass(d.classSelector) : [], u = c.length > 0 ? c : void 0, b = { level: h, name: m, type: d.$type, value: d.value, classSelector: d.classSelector, cssCompiledStyles: u };
    n.push(b);
  }
  const l = ne(n), r = w((o, d) => {
    for (const h of o) a.addNode(h, d), h.children && h.children.length > 0 && r(h.children, d + 1);
  }, "addNodesRecursively");
  r(l, 0);
}, "populate"), et = w((e2) => e2.name ? String(e2.name) : "", "getItemName"), le = { parser: { yy: void 0 }, parse: w(async (e2) => {
  var _a2;
  try {
    const n = await Te("treemap", e2);
    K.debug("Treemap AST:", n);
    const l = (_a2 = le.parser) == null ? void 0 : _a2.yy;
    if (!(l instanceof ae)) throw new Error("parser.parser?.yy was not a TreemapDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
    Qe(n, l);
  } catch (a) {
    throw K.error("Error parsing treemap:", a), a;
  }
}, "parse") }, tt = 10, B = 10, q = 25, at = w((e2, a, n, l) => {
  const r = l.db, o = r.getConfig(), d = o.padding ?? tt, h = r.getDiagramTitle(), m = r.getRoot(), { themeVariables: c } = Q();
  if (!m) return;
  const u = h ? 30 : 0, b = he(a), s = o.nodeWidth ? o.nodeWidth * B : 960, x = o.nodeHeight ? o.nodeHeight * B : 500, S = s, v = x + u;
  b.attr("viewBox", `0 0 ${S} ${v}`), ue(b, v, S, o.useMaxWidth);
  let p;
  try {
    const t = o.valueFormat || ",";
    if (t === "$0,0") p = w((i) => "$" + I(",")(i), "valueFormat");
    else if (t.startsWith("$") && t.includes(",")) {
      const i = /\.\d+/.exec(t), f = i ? i[0] : "";
      p = w((C) => "$" + I("," + f)(C), "valueFormat");
    } else if (t.startsWith("$")) {
      const i = t.substring(1);
      p = w((f) => "$" + I(i || "")(f), "valueFormat");
    } else p = I(t);
  } catch (t) {
    K.error("Error creating format function:", t), p = I(",");
  }
  const g = Z().range(["transparent", c.cScale0, c.cScale1, c.cScale2, c.cScale3, c.cScale4, c.cScale5, c.cScale6, c.cScale7, c.cScale8, c.cScale9, c.cScale10, c.cScale11]), M = Z().range(["transparent", c.cScalePeer0, c.cScalePeer1, c.cScalePeer2, c.cScalePeer3, c.cScalePeer4, c.cScalePeer5, c.cScalePeer6, c.cScalePeer7, c.cScalePeer8, c.cScalePeer9, c.cScalePeer10, c.cScalePeer11]), N = Z().range([c.cScaleLabel0, c.cScaleLabel1, c.cScaleLabel2, c.cScaleLabel3, c.cScaleLabel4, c.cScaleLabel5, c.cScaleLabel6, c.cScaleLabel7, c.cScaleLabel8, c.cScaleLabel9, c.cScaleLabel10, c.cScaleLabel11]);
  h && b.append("text").attr("x", S / 2).attr("y", u / 2).attr("class", "treemapTitle").attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(h);
  const z = b.append("g").attr("transform", `translate(0, ${u})`).attr("class", "treemapContainer"), R = ee(m).sum((t) => t.value ?? 0).sort((t, i) => (i.value ?? 0) - (t.value ?? 0)), te = Ke().size([s, x]).paddingTop((t) => t.children && t.children.length > 0 ? q + B : 0).paddingInner(d).paddingLeft((t) => t.children && t.children.length > 0 ? B : 0).paddingRight((t) => t.children && t.children.length > 0 ? B : 0).paddingBottom((t) => t.children && t.children.length > 0 ? B : 0).round(true)(R), re = te.descendants().filter((t) => t.children && t.children.length > 0), E = z.selectAll(".treemapSection").data(re).enter().append("g").attr("class", "treemapSection").attr("transform", (t) => `translate(${t.x0},${t.y0})`);
  E.append("rect").attr("width", (t) => t.x1 - t.x0).attr("height", q).attr("class", "treemapSectionHeader").attr("fill", "none").attr("fill-opacity", 0.6).attr("stroke-width", 0.6).attr("style", (t) => t.depth === 0 ? "display: none;" : ""), E.append("clipPath").attr("id", (t, i) => `clip-section-${a}-${i}`).append("rect").attr("width", (t) => Math.max(0, t.x1 - t.x0 - 12)).attr("height", q), E.append("rect").attr("width", (t) => t.x1 - t.x0).attr("height", (t) => t.y1 - t.y0).attr("class", (t, i) => `treemapSection section${i}`).attr("fill", (t) => g(t.data.name)).attr("fill-opacity", 0.6).attr("stroke", (t) => M(t.data.name)).attr("stroke-width", 2).attr("stroke-opacity", 0.4).attr("style", (t) => {
    if (t.depth === 0) return "display: none;";
    const i = P({ cssCompiledStyles: t.data.cssCompiledStyles });
    return i.nodeStyles + ";" + i.borderStyles.join(";");
  }), E.append("text").attr("class", "treemapSectionLabel").attr("x", 6).attr("y", q / 2).attr("dominant-baseline", "middle").text((t) => t.depth === 0 ? "" : t.data.name).attr("font-weight", "bold").attr("style", (t) => {
    if (t.depth === 0) return "display: none;";
    const i = "dominant-baseline: middle; font-size: 12px; fill:" + N(t.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;", f = P({ cssCompiledStyles: t.data.cssCompiledStyles });
    return i + f.labelStyles.replace("color:", "fill:");
  }).each(function(t) {
    if (t.depth === 0) return;
    const i = Y(this), f = t.data.name;
    i.text(f);
    const C = t.x1 - t.x0, L = 6;
    let $;
    o.showValues !== false && t.value ? $ = C - 10 - 30 - 10 - L : $ = C - L - 6;
    const A = Math.max(15, $), y = i.node();
    if (y.getComputedTextLength() > A) {
      let T = f;
      for (; T.length > 0; ) {
        if (T = f.substring(0, T.length - 1), T.length === 0) {
          i.text("..."), y.getComputedTextLength() > A && i.text("");
          break;
        }
        if (i.text(T + "..."), y.getComputedTextLength() <= A) break;
      }
    }
  }), o.showValues !== false && E.append("text").attr("class", "treemapSectionValue").attr("x", (t) => t.x1 - t.x0 - 10).attr("y", q / 2).attr("text-anchor", "end").attr("dominant-baseline", "middle").text((t) => t.value ? p(t.value) : "").attr("font-style", "italic").attr("style", (t) => {
    if (t.depth === 0) return "display: none;";
    const i = "text-anchor: end; dominant-baseline: middle; font-size: 10px; fill:" + N(t.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;", f = P({ cssCompiledStyles: t.data.cssCompiledStyles });
    return i + f.labelStyles.replace("color:", "fill:");
  });
  const se = te.leaves(), X = z.selectAll(".treemapLeafGroup").data(se).enter().append("g").attr("class", (t, i) => `treemapNode treemapLeafGroup leaf${i}${t.data.classSelector ? ` ${t.data.classSelector}` : ""}x`).attr("transform", (t) => `translate(${t.x0},${t.y0})`);
  X.append("rect").attr("width", (t) => t.x1 - t.x0).attr("height", (t) => t.y1 - t.y0).attr("class", "treemapLeaf").attr("fill", (t) => t.parent ? g(t.parent.data.name) : g(t.data.name)).attr("style", (t) => P({ cssCompiledStyles: t.data.cssCompiledStyles }).nodeStyles).attr("fill-opacity", 0.3).attr("stroke", (t) => t.parent ? g(t.parent.data.name) : g(t.data.name)).attr("stroke-width", 3), X.append("clipPath").attr("id", (t, i) => `clip-${a}-${i}`).append("rect").attr("width", (t) => Math.max(0, t.x1 - t.x0 - 4)).attr("height", (t) => Math.max(0, t.y1 - t.y0 - 4)), X.append("text").attr("class", "treemapLabel").attr("x", (t) => (t.x1 - t.x0) / 2).attr("y", (t) => (t.y1 - t.y0) / 2).attr("style", (t) => {
    const i = "text-anchor: middle; dominant-baseline: middle; font-size: 38px;fill:" + N(t.data.name) + ";", f = P({ cssCompiledStyles: t.data.cssCompiledStyles });
    return i + f.labelStyles.replace("color:", "fill:");
  }).attr("clip-path", (t, i) => `url(#clip-${a}-${i})`).text((t) => t.data.name).each(function(t) {
    const i = Y(this), f = t.x1 - t.x0, C = t.y1 - t.y0, L = i.node(), $ = 4, D = f - 2 * $, A = C - 2 * $;
    if (D < 10 || A < 10) {
      i.style("display", "none");
      return;
    }
    let y = parseInt(i.style("font-size"), 10);
    const k = 8, F = 28, T = 0.6, _ = 6, W = 2;
    for (; L.getComputedTextLength() > D && y > k; ) y--, i.style("font-size", `${y}px`);
    let H = Math.max(_, Math.min(F, Math.round(y * T))), U = y + W + H;
    for (; U > A && y > k && (y--, H = Math.max(_, Math.min(F, Math.round(y * T))), !(H < _ && y === k)); ) i.style("font-size", `${y}px`), U = y + W + H;
    i.style("font-size", `${y}px`), (L.getComputedTextLength() > D || y < k || A < y) && i.style("display", "none");
  }), o.showValues !== false && X.append("text").attr("class", "treemapValue").attr("x", (i) => (i.x1 - i.x0) / 2).attr("y", function(i) {
    return (i.y1 - i.y0) / 2;
  }).attr("style", (i) => {
    const f = "text-anchor: middle; dominant-baseline: hanging; font-size: 28px;fill:" + N(i.data.name) + ";", C = P({ cssCompiledStyles: i.data.cssCompiledStyles });
    return f + C.labelStyles.replace("color:", "fill:");
  }).attr("clip-path", (i, f) => `url(#clip-${a}-${f})`).text((i) => i.value ? p(i.value) : "").each(function(i) {
    const f = Y(this), C = this.parentNode;
    if (!C) {
      f.style("display", "none");
      return;
    }
    const L = Y(C).select(".treemapLabel");
    if (L.empty() || L.style("display") === "none") {
      f.style("display", "none");
      return;
    }
    const $ = parseFloat(L.style("font-size")), D = 28, A = 0.6, y = 6, k = 2, F = Math.max(y, Math.min(D, Math.round($ * A)));
    f.style("font-size", `${F}px`);
    const _ = (i.y1 - i.y0) / 2 + $ / 2 + k;
    f.attr("y", _);
    const W = i.x1 - i.x0, oe = i.y1 - i.y0 - 4, ce = W - 8;
    f.node().getComputedTextLength() > ce || _ + F > oe || F < y ? f.style("display", "none") : f.style("display", null);
  });
  const ie = o.diagramPadding ?? 8;
  we(b, ie, "flowchart", (o == null ? void 0 : o.useMaxWidth) || false);
}, "draw"), nt = w(function(e2, a) {
  return a.db.getClasses();
}, "getClasses"), lt = { draw: at, getClasses: nt }, rt = { sectionStrokeColor: "black", sectionStrokeWidth: "1", sectionFillColor: "#efefef", leafStrokeColor: "black", leafStrokeWidth: "1", leafFillColor: "#efefef", labelFontSize: "12px", valueFontSize: "10px", titleFontSize: "14px" }, st = w(({ treemap: e2 } = {}) => {
  const a = de(), n = Q(), l = J(a, n.themeVariables), r = J(rt, e2), o = r.titleColor ?? l.titleColor, d = r.labelColor ?? l.textColor, h = r.valueColor ?? l.textColor;
  return `
  .treemapNode.section {
    stroke: ${r.sectionStrokeColor};
    stroke-width: ${r.sectionStrokeWidth};
    fill: ${r.sectionFillColor};
  }
  .treemapNode.leaf {
    stroke: ${r.leafStrokeColor};
    stroke-width: ${r.leafStrokeWidth};
    fill: ${r.leafFillColor};
  }
  .treemapLabel {
    fill: ${d};
    font-size: ${r.labelFontSize};
  }
  .treemapValue {
    fill: ${h};
    font-size: ${r.valueFontSize};
  }
  .treemapTitle {
    fill: ${o};
    font-size: ${r.titleFontSize};
  }
  `;
}, "getStyles"), it = st, gt = { parser: le, get db() {
  return new ae();
}, renderer: lt, styles: it };
export {
  gt as diagram
};
