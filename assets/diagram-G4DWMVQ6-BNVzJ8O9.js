var _a;
import { t as e } from "./ordinal-Bs01uwBv.js";
import { t } from "./defaultLocale-BExgBGLN.js";
import "./init-B8xRTswO.js";
import { Cn as n, D as r, E as i, In as a, Jn as o, N as s, Nn as c, Nt as l, Pn as u, Tn as d, Yn as f, bn as p, gn as m, pn as h, un as g, vn as _, xn as v, yn as y } from "./index-4Ava25sD.js";
import "./chunk-K5T4RW27-OuehT3M0.js";
import "./reduce-BYgg84dj.js";
import "./flatten-COzv_UkG.js";
import "./chunk-7N4EOEYR-D1jf8gU4.js";
import "./chunk-67CJDMHE-DkrmGhRn.js";
import "./chunk-KGLVRYIC-B7L8tDEY.js";
import "./chunk-FOC6F5B3-B63lKV-F.js";
import "./chunk-AA7GKIK3-D5IXgCR6.js";
import "./chunk-2KRD3SAO-CNzDCA3U.js";
import "./chunk-ORNJ4GCN-9SMZAFfc.js";
import "./chunk-LIHQZDEY-eWu76TC0.js";
import "./chunk-CIAEETIT-u0HN2vK9.js";
import { t as b } from "./chunk-4BX2VUAB-BsqOnTl0.js";
import { t as x } from "./mermaid-parser.core-C5_5uso8.js";
import { t as S } from "./chunk-EDXVE4YY-B3BtpSK2.js";
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
    this.nodes = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this.classes = /* @__PURE__ */ new Map(), this.setAccTitle = u, this.getAccTitle = p, this.setDiagramTitle = a, this.getDiagramTitle = n, this.getAccDescription = y, this.setAccDescription = c;
  }
  getNodes() {
    return this.nodes;
  }
  getConfig() {
    let e3 = _, t2 = v();
    return s({ ...e3.treemap, ...t2.treemap ?? {} });
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
      i(e4) && ((n2 == null ? void 0 : n2.textStyles) ? n2.textStyles.push(e4) : n2.textStyles = [e4]), (n2 == null ? void 0 : n2.styles) ? n2.styles.push(e4) : n2.styles = [e4];
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
    h(), this.nodes = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this.classes = /* @__PURE__ */ new Map(), this.root = void 0;
  }
}, o(_a, `TreeMapDB`), _a);
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
o(X, `buildHierarchy`);
var oe = o((e3, t2) => {
  b(e3, t2);
  let n2 = [];
  for (let n3 of e3.TreemapRows ?? []) n3.$type === `ClassDefStatement` && t2.addClass(n3.className ?? ``, n3.styleText ?? ``);
  for (let r3 of e3.TreemapRows ?? []) {
    let e4 = r3.item;
    if (!e4) continue;
    let i3 = r3.indent ? parseInt(r3.indent) : 0, a2 = se(e4), o2 = e4.classSelector ? t2.getStylesForClass(e4.classSelector) : [], s2 = o2.length > 0 ? o2 : void 0, c2 = { level: i3, name: a2, type: e4.$type, value: e4.value, classSelector: e4.classSelector, cssCompiledStyles: s2 };
    n2.push(c2);
  }
  let r2 = X(n2), i2 = o((e4, n3) => {
    for (let r3 of e4) t2.addNode(r3, n3), r3.children && r3.children.length > 0 && i2(r3.children, n3 + 1);
  }, `addNodesRecursively`);
  i2(r2, 0);
}, `populate`), se = o((e3) => e3.name ? String(e3.name) : ``, `getItemName`), Z = { parser: { yy: void 0 }, parse: o(async (e3) => {
  var _a2;
  try {
    let t2 = await x(`treemap`, e3);
    f.debug(`Treemap AST:`, t2);
    let n2 = (_a2 = Z.parser) == null ? void 0 : _a2.yy;
    if (!(n2 instanceof Y)) throw Error(`parser.parser?.yy was not a TreemapDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.`);
    oe(t2, n2);
  } catch (e4) {
    throw f.error(`Error parsing treemap:`, e4), e4;
  }
}, `parse`) }, ce = 10, Q = 10, $ = 25, le = { draw: o((n2, i2, a2, s2) => {
  let c2 = s2.db, u2 = c2.getConfig(), d2 = u2.padding ?? ce, p2 = c2.getDiagramTitle(), h2 = c2.getRoot(), { themeVariables: _2 } = v();
  if (!h2) return;
  let y2 = p2 ? 30 : 0, b2 = l(i2), x2 = u2.nodeWidth ? u2.nodeWidth * Q : 960, C2 = u2.nodeHeight ? u2.nodeHeight * Q : 500, w2 = x2, T2 = C2 + y2;
  b2.attr(`viewBox`, `0 0 ${w2} ${T2}`), m(b2, T2, w2, u2.useMaxWidth);
  let E2;
  try {
    let e3 = u2.valueFormat || `,`;
    if (e3 === `$0,0`) E2 = o((e4) => `$` + t(`,`)(e4), `valueFormat`);
    else if (e3.startsWith(`$`) && e3.includes(`,`)) {
      let n3 = /\.\d+/.exec(e3), r2 = n3 ? n3[0] : ``;
      E2 = o((e4) => `$` + t(`,` + r2)(e4), `valueFormat`);
    } else if (e3.startsWith(`$`)) {
      let n3 = e3.substring(1);
      E2 = o((e4) => `$` + t(n3 || ``)(e4), `valueFormat`);
    } else E2 = t(e3);
  } catch (e3) {
    f.error(`Error creating format function:`, e3), E2 = t(`,`);
  }
  let D2 = e().range([`transparent`, _2.cScale0, _2.cScale1, _2.cScale2, _2.cScale3, _2.cScale4, _2.cScale5, _2.cScale6, _2.cScale7, _2.cScale8, _2.cScale9, _2.cScale10, _2.cScale11]), O2 = e().range([`transparent`, _2.cScalePeer0, _2.cScalePeer1, _2.cScalePeer2, _2.cScalePeer3, _2.cScalePeer4, _2.cScalePeer5, _2.cScalePeer6, _2.cScalePeer7, _2.cScalePeer8, _2.cScalePeer9, _2.cScalePeer10, _2.cScalePeer11]), k2 = e().range([_2.cScaleLabel0, _2.cScaleLabel1, _2.cScaleLabel2, _2.cScaleLabel3, _2.cScaleLabel4, _2.cScaleLabel5, _2.cScaleLabel6, _2.cScaleLabel7, _2.cScaleLabel8, _2.cScaleLabel9, _2.cScaleLabel10, _2.cScaleLabel11]);
  p2 && b2.append(`text`).attr(`x`, w2 / 2).attr(`y`, y2 / 2).attr(`class`, `treemapTitle`).attr(`text-anchor`, `middle`).attr(`dominant-baseline`, `middle`).text(p2);
  let A2 = b2.append(`g`).attr(`transform`, `translate(0, ${y2})`).attr(`class`, `treemapContainer`), j2 = R(h2).sum((e3) => e3.value ?? 0).sort((e3, t2) => (t2.value ?? 0) - (e3.value ?? 0)), M2 = ae().size([x2, C2]).paddingTop((e3) => e3.children && e3.children.length > 0 ? $ + Q : 0).paddingInner(d2).paddingLeft((e3) => e3.children && e3.children.length > 0 ? Q : 0).paddingRight((e3) => e3.children && e3.children.length > 0 ? Q : 0).paddingBottom((e3) => e3.children && e3.children.length > 0 ? Q : 0).round(true)(j2), N2 = M2.descendants().filter((e3) => e3.children && e3.children.length > 0), P2 = A2.selectAll(`.treemapSection`).data(N2).enter().append(`g`).attr(`class`, `treemapSection`).attr(`transform`, (e3) => `translate(${e3.x0},${e3.y0})`);
  P2.append(`rect`).attr(`width`, (e3) => e3.x1 - e3.x0).attr(`height`, $).attr(`class`, `treemapSectionHeader`).attr(`fill`, `none`).attr(`fill-opacity`, 0.6).attr(`stroke-width`, 0.6).attr(`style`, (e3) => e3.depth === 0 ? `display: none;` : ``), P2.append(`clipPath`).attr(`id`, (e3, t2) => `clip-section-${i2}-${t2}`).append(`rect`).attr(`width`, (e3) => Math.max(0, e3.x1 - e3.x0 - 12)).attr(`height`, $), P2.append(`rect`).attr(`width`, (e3) => e3.x1 - e3.x0).attr(`height`, (e3) => e3.y1 - e3.y0).attr(`class`, (e3, t2) => `treemapSection section${t2}`).attr(`fill`, (e3) => D2(e3.data.name)).attr(`fill-opacity`, 0.6).attr(`stroke`, (e3) => O2(e3.data.name)).attr(`stroke-width`, 2).attr(`stroke-opacity`, 0.4).attr(`style`, (e3) => {
    if (e3.depth === 0) return `display: none;`;
    let t2 = r({ cssCompiledStyles: e3.data.cssCompiledStyles });
    return t2.nodeStyles + `;` + t2.borderStyles.join(`;`);
  }), P2.append(`text`).attr(`class`, `treemapSectionLabel`).attr(`x`, 6).attr(`y`, $ / 2).attr(`dominant-baseline`, `middle`).text((e3) => e3.depth === 0 ? `` : e3.data.name).attr(`font-weight`, `bold`).attr(`style`, (e3) => e3.depth === 0 ? `display: none;` : `dominant-baseline: middle; font-size: 12px; fill:` + k2(e3.data.name) + `; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;` + r({ cssCompiledStyles: e3.data.cssCompiledStyles }).labelStyles.replace(`color:`, `fill:`)).each(function(e3) {
    if (e3.depth === 0) return;
    let t2 = g(this), n3 = e3.data.name;
    t2.text(n3);
    let r2 = e3.x1 - e3.x0, i3;
    i3 = u2.showValues !== false && e3.value ? r2 - 10 - 30 - 10 - 6 : r2 - 6 - 6;
    let a3 = Math.max(15, i3), o2 = t2.node();
    if (o2.getComputedTextLength() > a3) {
      let e4 = n3;
      for (; e4.length > 0; ) {
        if (e4 = n3.substring(0, e4.length - 1), e4.length === 0) {
          t2.text(`...`), o2.getComputedTextLength() > a3 && t2.text(``);
          break;
        }
        if (t2.text(e4 + `...`), o2.getComputedTextLength() <= a3) break;
      }
    }
  }), u2.showValues !== false && P2.append(`text`).attr(`class`, `treemapSectionValue`).attr(`x`, (e3) => e3.x1 - e3.x0 - 10).attr(`y`, $ / 2).attr(`text-anchor`, `end`).attr(`dominant-baseline`, `middle`).text((e3) => e3.value ? E2(e3.value) : ``).attr(`font-style`, `italic`).attr(`style`, (e3) => e3.depth === 0 ? `display: none;` : `text-anchor: end; dominant-baseline: middle; font-size: 10px; fill:` + k2(e3.data.name) + `; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;` + r({ cssCompiledStyles: e3.data.cssCompiledStyles }).labelStyles.replace(`color:`, `fill:`));
  let F2 = M2.leaves(), I2 = A2.selectAll(`.treemapLeafGroup`).data(F2).enter().append(`g`).attr(`class`, (e3, t2) => `treemapNode treemapLeafGroup leaf${t2}${e3.data.classSelector ? ` ${e3.data.classSelector}` : ``}x`).attr(`transform`, (e3) => `translate(${e3.x0},${e3.y0})`);
  I2.append(`rect`).attr(`width`, (e3) => e3.x1 - e3.x0).attr(`height`, (e3) => e3.y1 - e3.y0).attr(`class`, `treemapLeaf`).attr(`fill`, (e3) => e3.parent ? D2(e3.parent.data.name) : D2(e3.data.name)).attr(`style`, (e3) => r({ cssCompiledStyles: e3.data.cssCompiledStyles }).nodeStyles).attr(`fill-opacity`, 0.3).attr(`stroke`, (e3) => e3.parent ? D2(e3.parent.data.name) : D2(e3.data.name)).attr(`stroke-width`, 3), I2.append(`clipPath`).attr(`id`, (e3, t2) => `clip-${i2}-${t2}`).append(`rect`).attr(`width`, (e3) => Math.max(0, e3.x1 - e3.x0 - 4)).attr(`height`, (e3) => Math.max(0, e3.y1 - e3.y0 - 4)), I2.append(`text`).attr(`class`, `treemapLabel`).attr(`x`, (e3) => (e3.x1 - e3.x0) / 2).attr(`y`, (e3) => (e3.y1 - e3.y0) / 2).attr(`style`, (e3) => `text-anchor: middle; dominant-baseline: middle; font-size: 38px;fill:` + k2(e3.data.name) + `;` + r({ cssCompiledStyles: e3.data.cssCompiledStyles }).labelStyles.replace(`color:`, `fill:`)).attr(`clip-path`, (e3, t2) => `url(#clip-${i2}-${t2})`).text((e3) => e3.data.name).each(function(e3) {
    let t2 = g(this), n3 = e3.x1 - e3.x0, r2 = e3.y1 - e3.y0, i3 = t2.node(), a3 = n3 - 8, o2 = r2 - 8;
    if (a3 < 10 || o2 < 10) {
      t2.style(`display`, `none`);
      return;
    }
    let s3 = parseInt(t2.style(`font-size`), 10), c3 = 0.6;
    for (; i3.getComputedTextLength() > a3 && s3 > 8; ) s3--, t2.style(`font-size`, `${s3}px`);
    let l2 = Math.max(6, Math.min(28, Math.round(s3 * c3))), u3 = s3 + 2 + l2;
    for (; u3 > o2 && s3 > 8 && (s3--, l2 = Math.max(6, Math.min(28, Math.round(s3 * c3))), !(l2 < 6 && s3 === 8)); ) t2.style(`font-size`, `${s3}px`), u3 = s3 + 2 + l2;
    t2.style(`font-size`, `${s3}px`), (i3.getComputedTextLength() > a3 || s3 < 8 || o2 < s3) && t2.style(`display`, `none`);
  }), u2.showValues !== false && I2.append(`text`).attr(`class`, `treemapValue`).attr(`x`, (e3) => (e3.x1 - e3.x0) / 2).attr(`y`, function(e3) {
    return (e3.y1 - e3.y0) / 2;
  }).attr(`style`, (e3) => `text-anchor: middle; dominant-baseline: hanging; font-size: 28px;fill:` + k2(e3.data.name) + `;` + r({ cssCompiledStyles: e3.data.cssCompiledStyles }).labelStyles.replace(`color:`, `fill:`)).attr(`clip-path`, (e3, t2) => `url(#clip-${i2}-${t2})`).text((e3) => e3.value ? E2(e3.value) : ``).each(function(e3) {
    let t2 = g(this), n3 = this.parentNode;
    if (!n3) {
      t2.style(`display`, `none`);
      return;
    }
    let r2 = g(n3).select(`.treemapLabel`);
    if (r2.empty() || r2.style(`display`) === `none`) {
      t2.style(`display`, `none`);
      return;
    }
    let i3 = parseFloat(r2.style(`font-size`)), a3 = Math.max(6, Math.min(28, Math.round(i3 * 0.6)));
    t2.style(`font-size`, `${a3}px`);
    let o2 = (e3.y1 - e3.y0) / 2 + i3 / 2 + 2;
    t2.attr(`y`, o2);
    let s3 = e3.x1 - e3.x0, c3 = e3.y1 - e3.y0 - 4, l2 = s3 - 8;
    t2.node().getComputedTextLength() > l2 || o2 + a3 > c3 || a3 < 6 ? t2.style(`display`, `none`) : t2.style(`display`, null);
  }), S(b2, u2.diagramPadding ?? 8, `flowchart`, (u2 == null ? void 0 : u2.useMaxWidth) || false);
}, `draw`), getClasses: o(function(e3, t2) {
  return t2.db.getClasses();
}, `getClasses`) }, ue = { sectionStrokeColor: `black`, sectionStrokeWidth: `1`, sectionFillColor: `#efefef`, leafStrokeColor: `black`, leafStrokeWidth: `1`, leafFillColor: `#efefef`, labelFontSize: `12px`, valueFontSize: `10px`, titleFontSize: `14px` }, de = { parser: Z, get db() {
  return new Y();
}, renderer: le, styles: o(({ treemap: e3 } = {}) => {
  let t2 = s(d(), v().themeVariables), n2 = s(ue, e3), r2 = n2.titleColor ?? t2.titleColor, i2 = n2.labelColor ?? t2.textColor, a2 = n2.valueColor ?? t2.textColor;
  return `
  .treemapNode.section {
    stroke: ${n2.sectionStrokeColor};
    stroke-width: ${n2.sectionStrokeWidth};
    fill: ${n2.sectionFillColor};
  }
  .treemapNode.leaf {
    stroke: ${n2.leafStrokeColor};
    stroke-width: ${n2.leafStrokeWidth};
    fill: ${n2.leafFillColor};
  }
  .treemapLabel {
    fill: ${i2};
    font-size: ${n2.labelFontSize};
  }
  .treemapValue {
    fill: ${a2};
    font-size: ${n2.valueFontSize};
  }
  .treemapTitle {
    fill: ${r2};
    font-size: ${n2.titleFontSize};
  }
  `;
}, `getStyles`) };
export {
  de as diagram
};
