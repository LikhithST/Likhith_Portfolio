var _a;
import { B as e, C as t, E as n, V as r, W as i, _ as a, a as o, c as s, d as c, v as l, y as u } from "./chunk-ICPOFSXX-qplCg4jO.js";
import { g as d, h as f, p } from "./src-BWB47EtT.js";
import { t as m } from "./ordinal-BV8Hym1O.js";
import { t as h } from "./defaultLocale-DPK_2BZd.js";
import "./init-BNJjXmOc.js";
import "./dist-DAHuMNYw.js";
import { i as g } from "./chunk-5PVQY5BW-DyH3Wf6D.js";
import { t as _ } from "./chunk-426QAEUC-BhmuD47R.js";
import "./identity-B9owP9ru.js";
import { i as v, n as y } from "./chunk-X2U36JSP-6pKAqsHP.js";
import "./isEmpty-DOQ62aC5.js";
import "./chunk-K5T4RW27-DUXd3lAV.js";
import "./reduce-mGdWE-KL.js";
import "./flatten-CqtkwEvn.js";
import "./chunk-7N4EOEYR-BNay14On.js";
import "./chunk-67CJDMHE-CevvqCZQ.js";
import "./chunk-KGLVRYIC-Bdwc4beS.js";
import "./chunk-FOC6F5B3-MYrXiPPN.js";
import "./chunk-AA7GKIK3-Dr4yUAtZ.js";
import "./chunk-2KRD3SAO-FjXc5vAo.js";
import "./chunk-ORNJ4GCN-CQK2OPE5.js";
import "./chunk-LIHQZDEY-CLu_63wF.js";
import "./chunk-CIAEETIT-B2khf7wt.js";
import { t as b } from "./chunk-4BX2VUAB-BbK9EeOm.js";
import { t as x } from "./mermaid-parser.core-CeQTpQma.js";
import { t as S } from "./chunk-EDXVE4YY-OSeYB_F1.js";
function C(e3) {
  var t2 = 0, n2 = e3.children, r2 = n2 && n2.length;
  if (!r2) t2 = 1;
  else for (; --r2 >= 0; ) t2 += n2[r2].value;
  e3.value = t2;
}
function w() {
  return this.eachAfter(C);
}
function T(e3, t2) {
  let n2 = -1;
  for (let r2 of this) e3.call(t2, r2, ++n2, this);
  return this;
}
function E(e3, t2) {
  for (var n2 = this, r2 = [n2], i2, a2, o2 = -1; n2 = r2.pop(); ) if (e3.call(t2, n2, ++o2, this), i2 = n2.children) for (a2 = i2.length - 1; a2 >= 0; --a2) r2.push(i2[a2]);
  return this;
}
function D(e3, t2) {
  for (var n2 = this, r2 = [n2], i2 = [], a2, o2, s2, c2 = -1; n2 = r2.pop(); ) if (i2.push(n2), a2 = n2.children) for (o2 = 0, s2 = a2.length; o2 < s2; ++o2) r2.push(a2[o2]);
  for (; n2 = i2.pop(); ) e3.call(t2, n2, ++c2, this);
  return this;
}
function O(e3, t2) {
  let n2 = -1;
  for (let r2 of this) if (e3.call(t2, r2, ++n2, this)) return r2;
}
function k(e3) {
  return this.eachAfter(function(t2) {
    for (var n2 = +e3(t2.data) || 0, r2 = t2.children, i2 = r2 && r2.length; --i2 >= 0; ) n2 += r2[i2].value;
    t2.value = n2;
  });
}
function A(e3) {
  return this.eachBefore(function(t2) {
    t2.children && t2.children.sort(e3);
  });
}
function j(e3) {
  for (var t2 = this, n2 = M(t2, e3), r2 = [t2]; t2 !== n2; ) t2 = t2.parent, r2.push(t2);
  for (var i2 = r2.length; e3 !== n2; ) r2.splice(i2, 0, e3), e3 = e3.parent;
  return r2;
}
function M(e3, t2) {
  if (e3 === t2) return e3;
  var n2 = e3.ancestors(), r2 = t2.ancestors(), i2 = null;
  for (e3 = n2.pop(), t2 = r2.pop(); e3 === t2; ) i2 = e3, e3 = n2.pop(), t2 = r2.pop();
  return i2;
}
function N() {
  for (var e3 = this, t2 = [e3]; e3 = e3.parent; ) t2.push(e3);
  return t2;
}
function P() {
  return Array.from(this);
}
function F() {
  var e3 = [];
  return this.eachBefore(function(t2) {
    t2.children || e3.push(t2);
  }), e3;
}
function I() {
  var e3 = this, t2 = [];
  return e3.each(function(n2) {
    n2 !== e3 && t2.push({ source: n2.parent, target: n2 });
  }), t2;
}
function* L() {
  var e3 = this, t2, n2 = [e3], r2, i2, a2;
  do
    for (t2 = n2.reverse(), n2 = []; e3 = t2.pop(); ) if (yield e3, r2 = e3.children) for (i2 = 0, a2 = r2.length; i2 < a2; ++i2) n2.push(r2[i2]);
  while (n2.length);
}
function R(e3, t2) {
  e3 instanceof Map ? (e3 = [void 0, e3], t2 === void 0 && (t2 = V)) : t2 === void 0 && (t2 = B);
  for (var n2 = new W(e3), r2, i2 = [n2], a2, o2, s2, c2; r2 = i2.pop(); ) if ((o2 = t2(r2.data)) && (c2 = (o2 = Array.from(o2)).length)) for (r2.children = o2, s2 = c2 - 1; s2 >= 0; --s2) i2.push(a2 = o2[s2] = new W(o2[s2])), a2.parent = r2, a2.depth = r2.depth + 1;
  return n2.eachBefore(U);
}
function z() {
  return R(this).eachBefore(H);
}
function B(e3) {
  return e3.children;
}
function V(e3) {
  return Array.isArray(e3) ? e3[1] : null;
}
function H(e3) {
  e3.data.value !== void 0 && (e3.value = e3.data.value), e3.data = e3.data.data;
}
function U(e3) {
  var t2 = 0;
  do
    e3.height = t2;
  while ((e3 = e3.parent) && e3.height < ++t2);
}
function W(e3) {
  this.data = e3, this.depth = this.height = 0, this.parent = null;
}
W.prototype = R.prototype = { constructor: W, count: w, each: T, eachAfter: D, eachBefore: E, find: O, sum: k, sort: A, path: j, ancestors: N, descendants: P, leaves: F, links: I, copy: z, [Symbol.iterator]: L };
function G(e3) {
  if (typeof e3 != `function`) throw Error();
  return e3;
}
function K() {
  return 0;
}
function q(e3) {
  return function() {
    return e3;
  };
}
function J(e3) {
  e3.x0 = Math.round(e3.x0), e3.y0 = Math.round(e3.y0), e3.x1 = Math.round(e3.x1), e3.y1 = Math.round(e3.y1);
}
function ee(e3, t2, n2, r2, i2) {
  for (var a2 = e3.children, o2, s2 = -1, c2 = a2.length, l2 = e3.value && (r2 - t2) / e3.value; ++s2 < c2; ) o2 = a2[s2], o2.y0 = n2, o2.y1 = i2, o2.x0 = t2, o2.x1 = t2 += o2.value * l2;
}
function te(e3, t2, n2, r2, i2) {
  for (var a2 = e3.children, o2, s2 = -1, c2 = a2.length, l2 = e3.value && (i2 - n2) / e3.value; ++s2 < c2; ) o2 = a2[s2], o2.x0 = t2, o2.x1 = r2, o2.y0 = n2, o2.y1 = n2 += o2.value * l2;
}
var ne = (1 + Math.sqrt(5)) / 2;
function re(e3, t2, n2, r2, i2, a2) {
  for (var o2 = [], s2 = t2.children, c2, l2, u2 = 0, d2 = 0, f2 = s2.length, p2, m2, h2 = t2.value, g2, _2, v2, y2, b2, x2, S2; u2 < f2; ) {
    p2 = i2 - n2, m2 = a2 - r2;
    do
      g2 = s2[d2++].value;
    while (!g2 && d2 < f2);
    for (_2 = v2 = g2, x2 = Math.max(m2 / p2, p2 / m2) / (h2 * e3), S2 = g2 * g2 * x2, b2 = Math.max(v2 / S2, S2 / _2); d2 < f2; ++d2) {
      if (g2 += l2 = s2[d2].value, l2 < _2 && (_2 = l2), l2 > v2 && (v2 = l2), S2 = g2 * g2 * x2, y2 = Math.max(v2 / S2, S2 / _2), y2 > b2) {
        g2 -= l2;
        break;
      }
      b2 = y2;
    }
    o2.push(c2 = { value: g2, dice: p2 < m2, children: s2.slice(u2, d2) }), c2.dice ? ee(c2, n2, r2, i2, h2 ? r2 += m2 * g2 / h2 : a2) : te(c2, n2, r2, h2 ? n2 += p2 * g2 / h2 : i2, a2), h2 -= g2, u2 = d2;
  }
  return o2;
}
var ie = (function e2(t2) {
  function n2(e3, n3, r2, i2, a2) {
    re(t2, e3, n3, r2, i2, a2);
  }
  return n2.ratio = function(t3) {
    return e2((t3 = +t3) > 1 ? t3 : 1);
  }, n2;
})(ne);
function ae() {
  var e3 = ie, t2 = false, n2 = 1, r2 = 1, i2 = [0], a2 = K, o2 = K, s2 = K, c2 = K, l2 = K;
  function u2(e4) {
    return e4.x0 = e4.y0 = 0, e4.x1 = n2, e4.y1 = r2, e4.eachBefore(d2), i2 = [0], t2 && e4.eachBefore(J), e4;
  }
  function d2(t3) {
    var n3 = i2[t3.depth], r3 = t3.x0 + n3, u3 = t3.y0 + n3, d3 = t3.x1 - n3, f2 = t3.y1 - n3;
    d3 < r3 && (r3 = d3 = (r3 + d3) / 2), f2 < u3 && (u3 = f2 = (u3 + f2) / 2), t3.x0 = r3, t3.y0 = u3, t3.x1 = d3, t3.y1 = f2, t3.children && (n3 = i2[t3.depth + 1] = a2(t3) / 2, r3 += l2(t3) - n3, u3 += o2(t3) - n3, d3 -= s2(t3) - n3, f2 -= c2(t3) - n3, d3 < r3 && (r3 = d3 = (r3 + d3) / 2), f2 < u3 && (u3 = f2 = (u3 + f2) / 2), e3(t3, r3, u3, d3, f2));
  }
  return u2.round = function(e4) {
    return arguments.length ? (t2 = !!e4, u2) : t2;
  }, u2.size = function(e4) {
    return arguments.length ? (n2 = +e4[0], r2 = +e4[1], u2) : [n2, r2];
  }, u2.tile = function(t3) {
    return arguments.length ? (e3 = G(t3), u2) : e3;
  }, u2.padding = function(e4) {
    return arguments.length ? u2.paddingInner(e4).paddingOuter(e4) : u2.paddingInner();
  }, u2.paddingInner = function(e4) {
    return arguments.length ? (a2 = typeof e4 == `function` ? e4 : q(+e4), u2) : a2;
  }, u2.paddingOuter = function(e4) {
    return arguments.length ? u2.paddingTop(e4).paddingRight(e4).paddingBottom(e4).paddingLeft(e4) : u2.paddingTop();
  }, u2.paddingTop = function(e4) {
    return arguments.length ? (o2 = typeof e4 == `function` ? e4 : q(+e4), u2) : o2;
  }, u2.paddingRight = function(e4) {
    return arguments.length ? (s2 = typeof e4 == `function` ? e4 : q(+e4), u2) : s2;
  }, u2.paddingBottom = function(e4) {
    return arguments.length ? (c2 = typeof e4 == `function` ? e4 : q(+e4), u2) : c2;
  }, u2.paddingLeft = function(e4) {
    return arguments.length ? (l2 = typeof e4 == `function` ? e4 : q(+e4), u2) : l2;
  }, u2;
}
var Y = (_a = class {
  constructor() {
    this.nodes = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this.classes = /* @__PURE__ */ new Map(), this.setAccTitle = r, this.getAccTitle = l, this.setDiagramTitle = i, this.getDiagramTitle = t, this.getAccDescription = a, this.setAccDescription = e;
  }
  getNodes() {
    return this.nodes;
  }
  getConfig() {
    let e3 = c, t2 = u();
    return g({ ...e3.treemap, ...t2.treemap ?? {} });
  }
  addNode(e3, t2) {
    this.nodes.push(e3), this.levels.set(e3, t2), t2 === 0 && (this.outerNodes.push(e3), this.root ?? (this.root = e3));
  }
  getRoot() {
    return { name: ``, children: this.outerNodes };
  }
  addClass(e3, t2) {
    let n2 = this.classes.get(e3) ?? { id: e3, styles: [], textStyles: [] }, r2 = t2.replace(/\\,/g, `\xA7\xA7\xA7`).replace(/,/g, `;`).replace(/§§§/g, `,`).split(`;`);
    r2 && r2.forEach((e4) => {
      y(e4) && ((n2 == null ? void 0 : n2.textStyles) ? n2.textStyles.push(e4) : n2.textStyles = [e4]), (n2 == null ? void 0 : n2.styles) ? n2.styles.push(e4) : n2.styles = [e4];
    }), this.classes.set(e3, n2);
  }
  getClasses() {
    return this.classes;
  }
  getStylesForClass(e3) {
    var _a2;
    return ((_a2 = this.classes.get(e3)) == null ? void 0 : _a2.styles) ?? [];
  }
  clear() {
    o(), this.nodes = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this.classes = /* @__PURE__ */ new Map(), this.root = void 0;
  }
}, f(_a, `TreeMapDB`), _a);
function X(e3) {
  if (!e3.length) return [];
  let t2 = [], n2 = [];
  return e3.forEach((e4) => {
    let r2 = { name: e4.name, children: e4.type === `Leaf` ? void 0 : [] };
    for (r2.classSelector = e4 == null ? void 0 : e4.classSelector, (e4 == null ? void 0 : e4.cssCompiledStyles) && (r2.cssCompiledStyles = e4.cssCompiledStyles), e4.type === `Leaf` && e4.value !== void 0 && (r2.value = e4.value); n2.length > 0 && n2[n2.length - 1].level >= e4.level; ) n2.pop();
    if (n2.length === 0) t2.push(r2);
    else {
      let e5 = n2[n2.length - 1].node;
      e5.children ? e5.children.push(r2) : e5.children = [r2];
    }
    e4.type !== `Leaf` && n2.push({ node: r2, level: e4.level });
  }), t2;
}
f(X, `buildHierarchy`);
var oe = f((e3, t2) => {
  b(e3, t2);
  let n2 = [];
  for (let n3 of e3.TreemapRows ?? []) n3.$type === `ClassDefStatement` && t2.addClass(n3.className ?? ``, n3.styleText ?? ``);
  for (let r3 of e3.TreemapRows ?? []) {
    let e4 = r3.item;
    if (!e4) continue;
    let i3 = r3.indent ? parseInt(r3.indent) : 0, a2 = se(e4), o2 = e4.classSelector ? t2.getStylesForClass(e4.classSelector) : [], s2 = o2.length > 0 ? o2 : void 0, c2 = { level: i3, name: a2, type: e4.$type, value: e4.value, classSelector: e4.classSelector, cssCompiledStyles: s2 };
    n2.push(c2);
  }
  let r2 = X(n2), i2 = f((e4, n3) => {
    for (let r3 of e4) t2.addNode(r3, n3), r3.children && r3.children.length > 0 && i2(r3.children, n3 + 1);
  }, `addNodesRecursively`);
  i2(r2, 0);
}, `populate`), se = f((e3) => e3.name ? String(e3.name) : ``, `getItemName`), Z = { parser: { yy: void 0 }, parse: f(async (e3) => {
  var _a2;
  try {
    let t2 = await x(`treemap`, e3);
    d.debug(`Treemap AST:`, t2);
    let n2 = (_a2 = Z.parser) == null ? void 0 : _a2.yy;
    if (!(n2 instanceof Y)) throw Error(`parser.parser?.yy was not a TreemapDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.`);
    oe(t2, n2);
  } catch (e4) {
    throw d.error(`Error parsing treemap:`, e4), e4;
  }
}, `parse`) }, ce = 10, Q = 10, $ = 25, le = { draw: f((e3, t2, n2, r2) => {
  let i2 = r2.db, a2 = i2.getConfig(), o2 = a2.padding ?? ce, c2 = i2.getDiagramTitle(), l2 = i2.getRoot(), { themeVariables: g2 } = u();
  if (!l2) return;
  let y2 = c2 ? 30 : 0, b2 = _(t2), x2 = a2.nodeWidth ? a2.nodeWidth * Q : 960, C2 = a2.nodeHeight ? a2.nodeHeight * Q : 500, w2 = x2, T2 = C2 + y2;
  b2.attr(`viewBox`, `0 0 ${w2} ${T2}`), s(b2, T2, w2, a2.useMaxWidth);
  let E2;
  try {
    let e4 = a2.valueFormat || `,`;
    if (e4 === `$0,0`) E2 = f((e5) => `$` + h(`,`)(e5), `valueFormat`);
    else if (e4.startsWith(`$`) && e4.includes(`,`)) {
      let t3 = /\.\d+/.exec(e4), n3 = t3 ? t3[0] : ``;
      E2 = f((e5) => `$` + h(`,` + n3)(e5), `valueFormat`);
    } else if (e4.startsWith(`$`)) {
      let t3 = e4.substring(1);
      E2 = f((e5) => `$` + h(t3 || ``)(e5), `valueFormat`);
    } else E2 = h(e4);
  } catch (e4) {
    d.error(`Error creating format function:`, e4), E2 = h(`,`);
  }
  let D2 = m().range([`transparent`, g2.cScale0, g2.cScale1, g2.cScale2, g2.cScale3, g2.cScale4, g2.cScale5, g2.cScale6, g2.cScale7, g2.cScale8, g2.cScale9, g2.cScale10, g2.cScale11]), O2 = m().range([`transparent`, g2.cScalePeer0, g2.cScalePeer1, g2.cScalePeer2, g2.cScalePeer3, g2.cScalePeer4, g2.cScalePeer5, g2.cScalePeer6, g2.cScalePeer7, g2.cScalePeer8, g2.cScalePeer9, g2.cScalePeer10, g2.cScalePeer11]), k2 = m().range([g2.cScaleLabel0, g2.cScaleLabel1, g2.cScaleLabel2, g2.cScaleLabel3, g2.cScaleLabel4, g2.cScaleLabel5, g2.cScaleLabel6, g2.cScaleLabel7, g2.cScaleLabel8, g2.cScaleLabel9, g2.cScaleLabel10, g2.cScaleLabel11]);
  c2 && b2.append(`text`).attr(`x`, w2 / 2).attr(`y`, y2 / 2).attr(`class`, `treemapTitle`).attr(`text-anchor`, `middle`).attr(`dominant-baseline`, `middle`).text(c2);
  let A2 = b2.append(`g`).attr(`transform`, `translate(0, ${y2})`).attr(`class`, `treemapContainer`), j2 = R(l2).sum((e4) => e4.value ?? 0).sort((e4, t3) => (t3.value ?? 0) - (e4.value ?? 0)), M2 = ae().size([x2, C2]).paddingTop((e4) => e4.children && e4.children.length > 0 ? $ + Q : 0).paddingInner(o2).paddingLeft((e4) => e4.children && e4.children.length > 0 ? Q : 0).paddingRight((e4) => e4.children && e4.children.length > 0 ? Q : 0).paddingBottom((e4) => e4.children && e4.children.length > 0 ? Q : 0).round(true)(j2), N2 = M2.descendants().filter((e4) => e4.children && e4.children.length > 0), P2 = A2.selectAll(`.treemapSection`).data(N2).enter().append(`g`).attr(`class`, `treemapSection`).attr(`transform`, (e4) => `translate(${e4.x0},${e4.y0})`);
  P2.append(`rect`).attr(`width`, (e4) => e4.x1 - e4.x0).attr(`height`, $).attr(`class`, `treemapSectionHeader`).attr(`fill`, `none`).attr(`fill-opacity`, 0.6).attr(`stroke-width`, 0.6).attr(`style`, (e4) => e4.depth === 0 ? `display: none;` : ``), P2.append(`clipPath`).attr(`id`, (e4, n3) => `clip-section-${t2}-${n3}`).append(`rect`).attr(`width`, (e4) => Math.max(0, e4.x1 - e4.x0 - 12)).attr(`height`, $), P2.append(`rect`).attr(`width`, (e4) => e4.x1 - e4.x0).attr(`height`, (e4) => e4.y1 - e4.y0).attr(`class`, (e4, t3) => `treemapSection section${t3}`).attr(`fill`, (e4) => D2(e4.data.name)).attr(`fill-opacity`, 0.6).attr(`stroke`, (e4) => O2(e4.data.name)).attr(`stroke-width`, 2).attr(`stroke-opacity`, 0.4).attr(`style`, (e4) => {
    if (e4.depth === 0) return `display: none;`;
    let t3 = v({ cssCompiledStyles: e4.data.cssCompiledStyles });
    return t3.nodeStyles + `;` + t3.borderStyles.join(`;`);
  }), P2.append(`text`).attr(`class`, `treemapSectionLabel`).attr(`x`, 6).attr(`y`, $ / 2).attr(`dominant-baseline`, `middle`).text((e4) => e4.depth === 0 ? `` : e4.data.name).attr(`font-weight`, `bold`).attr(`style`, (e4) => e4.depth === 0 ? `display: none;` : `dominant-baseline: middle; font-size: 12px; fill:` + k2(e4.data.name) + `; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;` + v({ cssCompiledStyles: e4.data.cssCompiledStyles }).labelStyles.replace(`color:`, `fill:`)).each(function(e4) {
    if (e4.depth === 0) return;
    let t3 = p(this), n3 = e4.data.name;
    t3.text(n3);
    let r3 = e4.x1 - e4.x0, i3;
    i3 = a2.showValues !== false && e4.value ? r3 - 10 - 30 - 10 - 6 : r3 - 6 - 6;
    let o3 = Math.max(15, i3), s2 = t3.node();
    if (s2.getComputedTextLength() > o3) {
      let e5 = n3;
      for (; e5.length > 0; ) {
        if (e5 = n3.substring(0, e5.length - 1), e5.length === 0) {
          t3.text(`...`), s2.getComputedTextLength() > o3 && t3.text(``);
          break;
        }
        if (t3.text(e5 + `...`), s2.getComputedTextLength() <= o3) break;
      }
    }
  }), a2.showValues !== false && P2.append(`text`).attr(`class`, `treemapSectionValue`).attr(`x`, (e4) => e4.x1 - e4.x0 - 10).attr(`y`, $ / 2).attr(`text-anchor`, `end`).attr(`dominant-baseline`, `middle`).text((e4) => e4.value ? E2(e4.value) : ``).attr(`font-style`, `italic`).attr(`style`, (e4) => e4.depth === 0 ? `display: none;` : `text-anchor: end; dominant-baseline: middle; font-size: 10px; fill:` + k2(e4.data.name) + `; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;` + v({ cssCompiledStyles: e4.data.cssCompiledStyles }).labelStyles.replace(`color:`, `fill:`));
  let F2 = M2.leaves(), I2 = A2.selectAll(`.treemapLeafGroup`).data(F2).enter().append(`g`).attr(`class`, (e4, t3) => `treemapNode treemapLeafGroup leaf${t3}${e4.data.classSelector ? ` ${e4.data.classSelector}` : ``}x`).attr(`transform`, (e4) => `translate(${e4.x0},${e4.y0})`);
  I2.append(`rect`).attr(`width`, (e4) => e4.x1 - e4.x0).attr(`height`, (e4) => e4.y1 - e4.y0).attr(`class`, `treemapLeaf`).attr(`fill`, (e4) => e4.parent ? D2(e4.parent.data.name) : D2(e4.data.name)).attr(`style`, (e4) => v({ cssCompiledStyles: e4.data.cssCompiledStyles }).nodeStyles).attr(`fill-opacity`, 0.3).attr(`stroke`, (e4) => e4.parent ? D2(e4.parent.data.name) : D2(e4.data.name)).attr(`stroke-width`, 3), I2.append(`clipPath`).attr(`id`, (e4, n3) => `clip-${t2}-${n3}`).append(`rect`).attr(`width`, (e4) => Math.max(0, e4.x1 - e4.x0 - 4)).attr(`height`, (e4) => Math.max(0, e4.y1 - e4.y0 - 4)), I2.append(`text`).attr(`class`, `treemapLabel`).attr(`x`, (e4) => (e4.x1 - e4.x0) / 2).attr(`y`, (e4) => (e4.y1 - e4.y0) / 2).attr(`style`, (e4) => `text-anchor: middle; dominant-baseline: middle; font-size: 38px;fill:` + k2(e4.data.name) + `;` + v({ cssCompiledStyles: e4.data.cssCompiledStyles }).labelStyles.replace(`color:`, `fill:`)).attr(`clip-path`, (e4, n3) => `url(#clip-${t2}-${n3})`).text((e4) => e4.data.name).each(function(e4) {
    let t3 = p(this), n3 = e4.x1 - e4.x0, r3 = e4.y1 - e4.y0, i3 = t3.node(), a3 = n3 - 8, o3 = r3 - 8;
    if (a3 < 10 || o3 < 10) {
      t3.style(`display`, `none`);
      return;
    }
    let s2 = parseInt(t3.style(`font-size`), 10), c3 = 0.6;
    for (; i3.getComputedTextLength() > a3 && s2 > 8; ) s2--, t3.style(`font-size`, `${s2}px`);
    let l3 = Math.max(6, Math.min(28, Math.round(s2 * c3))), u2 = s2 + 2 + l3;
    for (; u2 > o3 && s2 > 8 && (s2--, l3 = Math.max(6, Math.min(28, Math.round(s2 * c3))), !(l3 < 6 && s2 === 8)); ) t3.style(`font-size`, `${s2}px`), u2 = s2 + 2 + l3;
    t3.style(`font-size`, `${s2}px`), (i3.getComputedTextLength() > a3 || s2 < 8 || o3 < s2) && t3.style(`display`, `none`);
  }), a2.showValues !== false && I2.append(`text`).attr(`class`, `treemapValue`).attr(`x`, (e4) => (e4.x1 - e4.x0) / 2).attr(`y`, function(e4) {
    return (e4.y1 - e4.y0) / 2;
  }).attr(`style`, (e4) => `text-anchor: middle; dominant-baseline: hanging; font-size: 28px;fill:` + k2(e4.data.name) + `;` + v({ cssCompiledStyles: e4.data.cssCompiledStyles }).labelStyles.replace(`color:`, `fill:`)).attr(`clip-path`, (e4, n3) => `url(#clip-${t2}-${n3})`).text((e4) => e4.value ? E2(e4.value) : ``).each(function(e4) {
    let t3 = p(this), n3 = this.parentNode;
    if (!n3) {
      t3.style(`display`, `none`);
      return;
    }
    let r3 = p(n3).select(`.treemapLabel`);
    if (r3.empty() || r3.style(`display`) === `none`) {
      t3.style(`display`, `none`);
      return;
    }
    let i3 = parseFloat(r3.style(`font-size`)), a3 = Math.max(6, Math.min(28, Math.round(i3 * 0.6)));
    t3.style(`font-size`, `${a3}px`);
    let o3 = (e4.y1 - e4.y0) / 2 + i3 / 2 + 2;
    t3.attr(`y`, o3);
    let s2 = e4.x1 - e4.x0, c3 = e4.y1 - e4.y0 - 4, l3 = s2 - 8;
    t3.node().getComputedTextLength() > l3 || o3 + a3 > c3 || a3 < 6 ? t3.style(`display`, `none`) : t3.style(`display`, null);
  }), S(b2, a2.diagramPadding ?? 8, `flowchart`, (a2 == null ? void 0 : a2.useMaxWidth) || false);
}, `draw`), getClasses: f(function(e3, t2) {
  return t2.db.getClasses();
}, `getClasses`) }, ue = { sectionStrokeColor: `black`, sectionStrokeWidth: `1`, sectionFillColor: `#efefef`, leafStrokeColor: `black`, leafStrokeWidth: `1`, leafFillColor: `#efefef`, labelFontSize: `12px`, valueFontSize: `10px`, titleFontSize: `14px` }, de = { parser: Z, get db() {
  return new Y();
}, renderer: le, styles: f(({ treemap: e3 } = {}) => {
  let t2 = g(n(), u().themeVariables), r2 = g(ue, e3), i2 = r2.titleColor ?? t2.titleColor, a2 = r2.labelColor ?? t2.textColor, o2 = r2.valueColor ?? t2.textColor;
  return `
  .treemapNode.section {
    stroke: ${r2.sectionStrokeColor};
    stroke-width: ${r2.sectionStrokeWidth};
    fill: ${r2.sectionFillColor};
  }
  .treemapNode.leaf {
    stroke: ${r2.leafStrokeColor};
    stroke-width: ${r2.leafStrokeWidth};
    fill: ${r2.leafFillColor};
  }
  .treemapLabel {
    fill: ${a2};
    font-size: ${r2.labelFontSize};
  }
  .treemapValue {
    fill: ${o2};
    font-size: ${r2.valueFontSize};
  }
  .treemapTitle {
    fill: ${i2};
    font-size: ${r2.titleFontSize};
  }
  `;
}, `getStyles`) };
export {
  de as diagram
};
