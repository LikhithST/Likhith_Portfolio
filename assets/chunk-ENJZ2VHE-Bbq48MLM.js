import { b as e, w as t, y as n } from "./chunk-ICPOFSXX-qplCg4jO.js";
import { g as r, h as i, p as a } from "./src-BWB47EtT.js";
import { B as o, F as s, G as c, H as l, I as u, K as d, L as f, R as p, U as m, V as h, W as g, g as _, u as v, z as y } from "./chunk-5PVQY5BW-DyH3Wf6D.js";
import { t as b } from "./line-CKQlCIK2.js";
import { i as x, n as S, r as C, t as w } from "./chunk-BSJP7CBP-BBDH2KVu.js";
import { n as T } from "./chunk-ZZ45TVLE-BXYMKbdF.js";
import { i as E, n as D } from "./chunk-X2U36JSP-6pKAqsHP.js";
import { n as O } from "./chunk-U2HBQHQK-B952OdWg.js";
import { t as ee } from "./rough.esm-1QChbhql.js";
import { r as k } from "./chunk-5FUZZQ4R-CDUw6eb4.js";
var te = i((e2, t2, n2, r2, i2, a2 = false, o2) => {
  t2.arrowTypeStart && M(e2, `start`, t2.arrowTypeStart, n2, r2, i2, a2, o2), t2.arrowTypeEnd && M(e2, `end`, t2.arrowTypeEnd, n2, r2, i2, a2, o2);
}, `addEdgeMarkers`), A = { arrow_cross: { type: `cross`, fill: false }, arrow_point: { type: `point`, fill: true }, arrow_barb: { type: `barb`, fill: true }, arrow_barb_neo: { type: `barb`, fill: true }, arrow_circle: { type: `circle`, fill: false }, aggregation: { type: `aggregation`, fill: false }, extension: { type: `extension`, fill: false }, composition: { type: `composition`, fill: true }, dependency: { type: `dependency`, fill: true }, lollipop: { type: `lollipop`, fill: false }, only_one: { type: `onlyOne`, fill: false }, zero_or_one: { type: `zeroOrOne`, fill: false }, one_or_more: { type: `oneOrMore`, fill: false }, zero_or_more: { type: `zeroOrMore`, fill: false }, requirement_arrow: { type: `requirement_arrow`, fill: false }, requirement_contains: { type: `requirement_contains`, fill: false } }, j = [`cross`, `point`, `circle`, `lollipop`, `aggregation`, `extension`, `composition`, `dependency`, `barb`], M = i((e2, t2, n2, i2, a2, o2, s2 = false, c2) => {
  var _a;
  let l2 = A[n2], u2 = l2 && j.includes(l2.type);
  if (!l2) {
    r.warn(`Unknown arrow type: ${n2}`);
    return;
  }
  let d2 = `${a2}_${o2}-${l2.type}${t2 === `start` ? `Start` : `End`}${s2 && u2 ? `-margin` : ``}`;
  if (c2 && c2.trim() !== ``) {
    let n3 = `${d2}_${c2.replace(/[^\dA-Za-z]/g, `_`)}`;
    if (!document.getElementById(n3)) {
      let e3 = document.getElementById(d2);
      if (e3) {
        let t3 = e3.cloneNode(true);
        t3.id = n3, t3.querySelectorAll(`path, circle, line`).forEach((e4) => {
          e4.setAttribute(`stroke`, c2), l2.fill && e4.setAttribute(`fill`, c2);
        }), (_a = e3.parentNode) == null ? void 0 : _a.appendChild(t3);
      }
    }
    e2.attr(`marker-${t2}`, `url(${i2}#${n3})`);
  } else e2.attr(`marker-${t2}`, `url(${i2}#${d2})`);
}, `addEdgeMarker`), ne = i((t2) => {
  var _a, _b;
  return typeof t2 == `string` ? t2 : (_b = (_a = e()) == null ? void 0 : _a.flowchart) == null ? void 0 : _b.curve;
}, `resolveEdgeCurveType`), N = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), F = i(() => {
  N.clear(), P.clear();
}, `clear`), I = i((e2) => e2 ? typeof e2 == `string` ? e2 : e2.reduce((e3, t2) => e3 + `;` + t2, ``) : ``, `getLabelStyles`), L = i(async (n2, i2) => {
  let o2 = e(), s2 = t(o2), { labelStyles: c2 } = E(i2);
  i2.labelStyle = c2;
  let l2 = n2.insert(`g`).attr(`class`, `edgeLabel`), u2 = l2.insert(`g`).attr(`class`, `label`).attr(`data-id`, i2.id), d2 = i2.labelType === `markdown`, f2 = await O(n2, i2.label, { style: I(i2.labelStyle), useHtmlLabels: s2, addSvgBackground: true, isNode: false, markdown: d2, width: void 0 }, o2);
  u2.node().appendChild(f2), r.info(`abc82`, i2, i2.labelType);
  let p2 = f2.getBBox(), m2 = p2;
  if (s2) {
    let e2 = f2.children[0], t2 = a(f2);
    p2 = e2.getBoundingClientRect(), m2 = p2, t2.attr(`width`, p2.width), t2.attr(`height`, p2.height);
  } else {
    let e2 = a(f2).select(`text`).node();
    e2 && typeof e2.getBBox == `function` && (m2 = e2.getBBox());
  }
  u2.attr(`transform`, w(m2, s2)), N.set(i2.id, l2), i2.width = p2.width, i2.height = p2.height;
  let h2;
  if (i2.startLabelLeft) {
    let e2 = n2.insert(`g`).attr(`class`, `edgeTerminals`), t2 = e2.insert(`g`).attr(`class`, `inner`), r2 = await k(t2, i2.startLabelLeft, I(i2.labelStyle) || ``, false, false);
    h2 = r2;
    let o3 = r2.getBBox();
    if (s2) {
      let e3 = r2.children[0], t3 = a(r2);
      o3 = e3.getBoundingClientRect(), t3.attr(`width`, o3.width), t3.attr(`height`, o3.height);
    }
    t2.attr(`transform`, w(o3, s2)), P.get(i2.id) || P.set(i2.id, {}), P.get(i2.id).startLeft = e2, R(h2, i2.startLabelLeft);
  }
  if (i2.startLabelRight) {
    let e2 = n2.insert(`g`).attr(`class`, `edgeTerminals`), t2 = e2.insert(`g`).attr(`class`, `inner`), r2 = await k(t2, i2.startLabelRight, I(i2.labelStyle) || ``, false, false);
    h2 = r2, t2.node().appendChild(r2);
    let o3 = r2.getBBox();
    if (s2) {
      let e3 = r2.children[0], t3 = a(r2);
      o3 = e3.getBoundingClientRect(), t3.attr(`width`, o3.width), t3.attr(`height`, o3.height);
    }
    t2.attr(`transform`, w(o3, s2)), P.get(i2.id) || P.set(i2.id, {}), P.get(i2.id).startRight = e2, R(h2, i2.startLabelRight);
  }
  if (i2.endLabelLeft) {
    let e2 = n2.insert(`g`).attr(`class`, `edgeTerminals`), t2 = e2.insert(`g`).attr(`class`, `inner`), r2 = await k(t2, i2.endLabelLeft, I(i2.labelStyle) || ``, false, false);
    h2 = r2;
    let o3 = r2.getBBox();
    if (s2) {
      let e3 = r2.children[0], t3 = a(r2);
      o3 = e3.getBoundingClientRect(), t3.attr(`width`, o3.width), t3.attr(`height`, o3.height);
    }
    t2.attr(`transform`, w(o3, s2)), e2.node().appendChild(r2), P.get(i2.id) || P.set(i2.id, {}), P.get(i2.id).endLeft = e2, R(h2, i2.endLabelLeft);
  }
  if (i2.endLabelRight) {
    let e2 = n2.insert(`g`).attr(`class`, `edgeTerminals`), t2 = e2.insert(`g`).attr(`class`, `inner`), r2 = await k(t2, i2.endLabelRight, I(i2.labelStyle) || ``, false, false);
    h2 = r2;
    let o3 = r2.getBBox();
    if (s2) {
      let e3 = r2.children[0], t3 = a(r2);
      o3 = e3.getBoundingClientRect(), t3.attr(`width`, o3.width), t3.attr(`height`, o3.height);
    }
    t2.attr(`transform`, w(o3, s2)), e2.node().appendChild(r2), P.get(i2.id) || P.set(i2.id, {}), P.get(i2.id).endRight = e2, R(h2, i2.endLabelRight);
  }
  return f2;
}, `insertEdgeLabel`);
function R(n2, r2) {
  t(e()) && n2 && (n2.style.width = r2.length * 9 + `px`, n2.style.height = `12px`);
}
i(R, `setTerminalWidth`);
var z = i((t2, n2) => {
  r.debug(`Moving label abc88 `, t2.id, t2.label, N.get(t2.id), n2);
  let i2 = n2.updatedPath ? n2.updatedPath : n2.originalPath, { subGraphTitleTotalMargin: a2 } = T(e());
  if (t2.label) {
    let e2 = N.get(t2.id), o2 = t2.x, s2 = t2.y;
    if (i2) {
      let e3 = _.calcLabelPosition(i2);
      r.debug(`Moving label ` + t2.label + ` from (`, o2, `,`, s2, `) to (`, e3.x, `,`, e3.y, `) abc88`), n2.updatedPath && (o2 = e3.x, s2 = e3.y);
    }
    e2.attr(`transform`, `translate(${o2}, ${s2 + a2 / 2})`);
  }
  if (t2.startLabelLeft) {
    let e2 = P.get(t2.id).startLeft, n3 = t2.x, r2 = t2.y;
    if (i2) {
      let e3 = _.calcTerminalLabelPosition(t2.arrowTypeStart ? 10 : 0, `start_left`, i2);
      n3 = e3.x, r2 = e3.y;
    }
    e2.attr(`transform`, `translate(${n3}, ${r2})`);
  }
  if (t2.startLabelRight) {
    let e2 = P.get(t2.id).startRight, n3 = t2.x, r2 = t2.y;
    if (i2) {
      let e3 = _.calcTerminalLabelPosition(t2.arrowTypeStart ? 10 : 0, `start_right`, i2);
      n3 = e3.x, r2 = e3.y;
    }
    e2.attr(`transform`, `translate(${n3}, ${r2})`);
  }
  if (t2.endLabelLeft) {
    let e2 = P.get(t2.id).endLeft, n3 = t2.x, r2 = t2.y;
    if (i2) {
      let e3 = _.calcTerminalLabelPosition(t2.arrowTypeEnd ? 10 : 0, `end_left`, i2);
      n3 = e3.x, r2 = e3.y;
    }
    e2.attr(`transform`, `translate(${n3}, ${r2})`);
  }
  if (t2.endLabelRight) {
    let e2 = P.get(t2.id).endRight, n3 = t2.x, r2 = t2.y;
    if (i2) {
      let e3 = _.calcTerminalLabelPosition(t2.arrowTypeEnd ? 10 : 0, `end_right`, i2);
      n3 = e3.x, r2 = e3.y;
    }
    e2.attr(`transform`, `translate(${n3}, ${r2})`);
  }
}, `positionEdgeLabel`), B = i((e2, t2) => {
  let n2 = e2.x, r2 = e2.y, i2 = Math.abs(t2.x - n2), a2 = Math.abs(t2.y - r2), o2 = e2.width / 2, s2 = e2.height / 2;
  return i2 >= o2 || a2 >= s2;
}, `outsideNode`), V = i((e2, t2, n2) => {
  r.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t2)}
  insidePoint : ${JSON.stringify(n2)}
  node        : x:${e2.x} y:${e2.y} w:${e2.width} h:${e2.height}`);
  let i2 = e2.x, a2 = e2.y, o2 = Math.abs(i2 - n2.x), s2 = e2.width / 2, c2 = n2.x < t2.x ? s2 - o2 : s2 + o2, l2 = e2.height / 2, u2 = Math.abs(t2.y - n2.y), d2 = Math.abs(t2.x - n2.x);
  if (Math.abs(a2 - t2.y) * s2 > Math.abs(i2 - t2.x) * l2) {
    let e3 = n2.y < t2.y ? t2.y - l2 - a2 : a2 - l2 - t2.y;
    c2 = d2 * e3 / u2;
    let i3 = { x: n2.x < t2.x ? n2.x + c2 : n2.x - d2 + c2, y: n2.y < t2.y ? n2.y + u2 - e3 : n2.y - u2 + e3 };
    return c2 === 0 && (i3.x = t2.x, i3.y = t2.y), d2 === 0 && (i3.x = t2.x), u2 === 0 && (i3.y = t2.y), r.debug(`abc89 top/bottom calc, Q ${u2}, q ${e3}, R ${d2}, r ${c2}`, i3), i3;
  } else {
    c2 = n2.x < t2.x ? t2.x - s2 - i2 : i2 - s2 - t2.x;
    let e3 = u2 * c2 / d2, a3 = n2.x < t2.x ? n2.x + d2 - c2 : n2.x - d2 + c2, o3 = n2.y < t2.y ? n2.y + e3 : n2.y - e3;
    return r.debug(`sides calc abc89, Q ${u2}, q ${e3}, R ${d2}, r ${c2}`, { _x: a3, _y: o3 }), c2 === 0 && (a3 = t2.x, o3 = t2.y), d2 === 0 && (a3 = t2.x), u2 === 0 && (o3 = t2.y), { x: a3, y: o3 };
  }
}, `intersection`), H = i((e2, t2) => {
  r.warn(`abc88 cutPathAtIntersect`, e2, t2);
  let n2 = [], i2 = e2[0], a2 = false;
  return e2.forEach((e3) => {
    if (r.info(`abc88 checking point`, e3, t2), !B(t2, e3) && !a2) {
      let o2 = V(t2, i2, e3);
      r.debug(`abc88 inside`, e3, i2, o2), r.debug(`abc88 intersection`, o2, t2);
      let s2 = false;
      n2.forEach((e4) => {
        s2 || (s2 = e4.x === o2.x && e4.y === o2.y);
      }), n2.some((e4) => e4.x === o2.x && e4.y === o2.y) ? r.warn(`abc88 no intersect`, o2, n2) : n2.push(o2), a2 = true;
    } else r.warn(`abc88 outside`, e3, i2), i2 = e3, a2 || n2.push(e3);
  }), r.debug(`returning points`, n2), n2;
}, `cutPathAtIntersect`);
function U(e2) {
  let t2 = [], n2 = [];
  for (let r2 = 1; r2 < e2.length - 1; r2++) {
    let i2 = e2[r2 - 1], a2 = e2[r2], o2 = e2[r2 + 1];
    (i2.x === a2.x && a2.y === o2.y && Math.abs(a2.x - o2.x) > 5 && Math.abs(a2.y - i2.y) > 5 || i2.y === a2.y && a2.x === o2.x && Math.abs(a2.x - i2.x) > 5 && Math.abs(a2.y - o2.y) > 5) && (t2.push(a2), n2.push(r2));
  }
  return { cornerPoints: t2, cornerPointPositions: n2 };
}
i(U, `extractCornerPoints`);
var W = i(function(e2, t2, n2) {
  let r2 = t2.x - e2.x, i2 = t2.y - e2.y, a2 = n2 / Math.sqrt(r2 * r2 + i2 * i2);
  return { x: t2.x - a2 * r2, y: t2.y - a2 * i2 };
}, `findAdjacentPoint`), re = i(function(e2) {
  let { cornerPointPositions: t2 } = U(e2), n2 = [];
  for (let i2 = 0; i2 < e2.length; i2++) if (t2.includes(i2)) {
    let t3 = e2[i2 - 1], a2 = e2[i2 + 1], o2 = e2[i2], s2 = W(t3, o2, 5), c2 = W(a2, o2, 5), l2 = c2.x - s2.x, u2 = c2.y - s2.y;
    n2.push(s2);
    let d2 = Math.sqrt(2) * 2, f2 = { x: o2.x, y: o2.y };
    Math.abs(a2.x - t3.x) > 10 && Math.abs(a2.y - t3.y) >= 10 ? (r.debug(`Corner point fixing`, Math.abs(a2.x - t3.x), Math.abs(a2.y - t3.y)), f2 = o2.x === s2.x ? { x: l2 < 0 ? s2.x - 5 + d2 : s2.x + 5 - d2, y: u2 < 0 ? s2.y - d2 : s2.y + d2 } : { x: l2 < 0 ? s2.x - d2 : s2.x + d2, y: u2 < 0 ? s2.y - 5 + d2 : s2.y + 5 - d2 }) : r.debug(`Corner point skipping fixing`, Math.abs(a2.x - t3.x), Math.abs(a2.y - t3.y)), n2.push(f2, c2);
  } else n2.push(e2[i2]);
  return n2;
}, `fixCorners`), ie = i((e2, t2, n2) => {
  let r2 = e2 - t2 - n2, i2 = Math.floor(r2 / 4);
  return `0 ${t2} ${Array(i2).fill(`2 2`).join(` `)} ${n2}`;
}, `generateDashArray`), G = i(function(t2, n2, i2, C2, w2, T2, E2, O2 = false) {
  var _a;
  if (!E2) throw Error(`insertEdge: missing diagramId for edge "${n2.id}" \u2014 edge IDs require a diagram prefix for uniqueness`);
  let { handDrawnSeed: k2 } = e(), A2 = n2.points, j2 = false, M2 = w2;
  var N2 = T2;
  let P2 = [];
  for (let e2 in n2.cssCompiledStyles) D(e2) || P2.push(n2.cssCompiledStyles[e2]);
  r.debug(`UIO intersect check`, n2.points, N2.x, M2.x), N2.intersect && M2.intersect && !O2 && (A2 = A2.slice(1, n2.points.length - 1), A2.unshift(M2.intersect(A2[0])), r.debug(`Last point UIO`, n2.start, `-->`, n2.end, A2[A2.length - 1], N2, N2.intersect(A2[A2.length - 1])), A2.push(N2.intersect(A2[A2.length - 1])));
  let F2 = btoa(JSON.stringify(A2));
  n2.toCluster && (r.info(`to cluster abc88`, i2.get(n2.toCluster)), A2 = H(n2.points, i2.get(n2.toCluster).node), j2 = true), n2.fromCluster && (r.debug(`from cluster abc88`, i2.get(n2.fromCluster), JSON.stringify(A2, null, 2)), A2 = H(A2.reverse(), i2.get(n2.fromCluster).node).reverse(), j2 = true);
  let I2 = A2.filter((e2) => !Number.isNaN(e2.y)), L2 = ne(n2.curve);
  L2 !== `rounded` && (I2 = re(I2));
  let R2 = d;
  switch (L2) {
    case `linear`:
      R2 = d;
      break;
    case `basis`:
      R2 = m;
      break;
    case `cardinal`:
      R2 = l;
      break;
    case `bumpX`:
      R2 = g;
      break;
    case `bumpY`:
      R2 = c;
      break;
    case `catmullRom`:
      R2 = h;
      break;
    case `monotoneX`:
      R2 = y;
      break;
    case `monotoneY`:
      R2 = o;
      break;
    case `natural`:
      R2 = p;
      break;
    case `step`:
      R2 = f;
      break;
    case `stepAfter`:
      R2 = s;
      break;
    case `stepBefore`:
      R2 = u;
      break;
    case `rounded`:
      R2 = d;
      break;
    default:
      R2 = m;
  }
  let { x: z2, y: B2 } = S(n2), V2 = b().x(z2).y(B2).curve(R2), U2;
  switch (n2.thickness) {
    case `normal`:
      U2 = `edge-thickness-normal`;
      break;
    case `thick`:
      U2 = `edge-thickness-thick`;
      break;
    case `invisible`:
      U2 = `edge-thickness-invisible`;
      break;
    default:
      U2 = `edge-thickness-normal`;
  }
  switch (n2.pattern) {
    case `solid`:
      U2 += ` edge-pattern-solid`;
      break;
    case `dotted`:
      U2 += ` edge-pattern-dotted`;
      break;
    case `dashed`:
      U2 += ` edge-pattern-dashed`;
      break;
    default:
      U2 += ` edge-pattern-solid`;
  }
  let W2, G2 = L2 === `rounded` ? K(J(I2, n2), 5) : V2(I2), q2 = Array.isArray(n2.style) ? n2.style : [n2.style], Y2 = q2.find((e2) => e2 == null ? void 0 : e2.startsWith(`stroke:`)), X2 = ``;
  n2.animate && (X2 = `edge-animation-fast`), n2.animation && (X2 = `edge-animation-` + n2.animation);
  let Z2 = false;
  if (n2.look === `handDrawn`) {
    let e2 = ee.svg(t2);
    Object.assign([], I2);
    let r2 = e2.path(G2, { roughness: 0.3, seed: k2 });
    U2 += ` transition`, W2 = a(r2).select(`path`).attr(`id`, `${E2}-${n2.id}`).attr(`class`, ` ` + U2 + (n2.classes ? ` ` + n2.classes : ``) + (X2 ? ` ` + X2 : ``)).attr(`style`, q2 ? q2.reduce((e3, t3) => e3 + `;` + t3, ``) : ``);
    let i3 = W2.attr(`d`);
    W2.attr(`d`, i3), t2.node().appendChild(W2.node());
  } else {
    let e2 = P2.join(`;`), r2 = q2 ? q2.reduce((e3, t3) => e3 + t3 + `;`, ``) : ``, i3 = (e2 ? e2 + `;` + r2 + `;` : r2) + `;` + (q2 ? q2.reduce((e3, t3) => e3 + `;` + t3, ``) : ``);
    W2 = t2.append(`path`).attr(`d`, G2).attr(`id`, `${E2}-${n2.id}`).attr(`class`, ` ` + U2 + (n2.classes ? ` ` + n2.classes : ``) + (X2 ? ` ` + X2 : ``)).attr(`style`, i3), Y2 = (_a = i3.match(/stroke:([^;]+)/)) == null ? void 0 : _a[1], Z2 = n2.animate === true || !!n2.animation || e2.includes(`animation`);
    let a2 = W2.node(), o2 = typeof a2.getTotalLength == `function` ? a2.getTotalLength() : 0, s2 = x[n2.arrowTypeStart] || 0, c2 = x[n2.arrowTypeEnd] || 0;
    if (n2.look === `neo` && !Z2) {
      let e3 = `stroke-dasharray: ${n2.pattern === `dotted` || n2.pattern === `dashed` ? ie(o2, s2, c2) : `0 ${s2} ${o2 - s2 - c2} ${c2}`}; stroke-dashoffset: 0;`;
      W2.attr(`style`, e3 + W2.attr(`style`));
    }
  }
  W2.attr(`data-edge`, true), W2.attr(`data-et`, `edge`), W2.attr(`data-id`, n2.id), W2.attr(`data-points`, F2), W2.attr(`data-look`, v(n2.look)), n2.showPoints && I2.forEach((e2) => {
    t2.append(`circle`).style(`stroke`, `red`).style(`fill`, `red`).attr(`r`, 1).attr(`cx`, e2.x).attr(`cy`, e2.y);
  });
  let Q = ``;
  (e().flowchart.arrowMarkerAbsolute || e().state.arrowMarkerAbsolute) && (Q = window.location.protocol + `//` + window.location.host + window.location.pathname + window.location.search, Q = Q.replace(/\(/g, `\\(`).replace(/\)/g, `\\)`)), r.info(`arrowTypeStart`, n2.arrowTypeStart), r.info(`arrowTypeEnd`, n2.arrowTypeEnd);
  let ae = !Z2 && (n2 == null ? void 0 : n2.look) === `neo`;
  te(W2, n2, Q, E2, C2, ae, Y2);
  let oe = Math.floor(A2.length / 2), se = A2[oe];
  _.isLabelCoordinateInPath(se, W2.attr(`d`)) || (j2 = true);
  let $ = {};
  return j2 && ($.updatedPath = A2), $.originalPath = n2.points, $;
}, `insertEdge`);
function K(e2, t2) {
  if (e2.length < 2) return ``;
  let n2 = ``, r2 = e2.length, i2 = 1e-5;
  for (let a2 = 0; a2 < r2; a2++) {
    let o2 = e2[a2], s2 = e2[a2 - 1], c2 = e2[a2 + 1];
    if (a2 === 0) n2 += `M${o2.x},${o2.y}`;
    else if (a2 === r2 - 1) n2 += `L${o2.x},${o2.y}`;
    else {
      let e3 = o2.x - s2.x, r3 = o2.y - s2.y, a3 = c2.x - o2.x, l2 = c2.y - o2.y, u2 = Math.hypot(e3, r3), d2 = Math.hypot(a3, l2);
      if (u2 < i2 || d2 < i2) {
        n2 += `L${o2.x},${o2.y}`;
        continue;
      }
      let f2 = e3 / u2, p2 = r3 / u2, m2 = a3 / d2, h2 = l2 / d2, g2 = f2 * m2 + p2 * h2, _2 = Math.max(-1, Math.min(1, g2)), v2 = Math.acos(_2);
      if (v2 < i2 || Math.abs(Math.PI - v2) < i2) {
        n2 += `L${o2.x},${o2.y}`;
        continue;
      }
      let y2 = Math.min(t2 / Math.sin(v2 / 2), u2 / 2, d2 / 2), b2 = o2.x - f2 * y2, x2 = o2.y - p2 * y2, S2 = o2.x + m2 * y2, C2 = o2.y + h2 * y2;
      n2 += `L${b2},${x2}`, n2 += `Q${o2.x},${o2.y} ${S2},${C2}`;
    }
  }
  return n2;
}
i(K, `generateRoundedPath`);
function q(e2, t2) {
  if (!e2 || !t2) return { angle: 0, deltaX: 0, deltaY: 0 };
  let n2 = t2.x - e2.x, r2 = t2.y - e2.y;
  return { angle: Math.atan2(r2, n2), deltaX: n2, deltaY: r2 };
}
i(q, `calculateDeltaAndAngle`);
function J(e2, t2) {
  let n2 = e2.map((e3) => ({ ...e3 }));
  if (e2.length >= 2 && C[t2.arrowTypeStart]) {
    let r3 = C[t2.arrowTypeStart], i2 = e2[0], a2 = e2[1], { angle: o2 } = q(i2, a2), s2 = r3 * Math.cos(o2), c2 = r3 * Math.sin(o2);
    n2[0].x = i2.x + s2, n2[0].y = i2.y + c2;
  }
  let r2 = e2.length;
  if (r2 >= 2 && C[t2.arrowTypeEnd]) {
    let i2 = C[t2.arrowTypeEnd], a2 = e2[r2 - 1], o2 = e2[r2 - 2], { angle: s2 } = q(o2, a2), c2 = i2 * Math.cos(s2), l2 = i2 * Math.sin(s2);
    n2[r2 - 1].x = a2.x - c2, n2[r2 - 1].y = a2.y - l2;
  }
  return n2;
}
i(J, `applyMarkerOffsetsToPoints`);
var Y = i((e2, t2, n2, r2) => {
  t2.forEach((t3) => {
    X[t3](e2, n2, r2);
  });
}, `insertMarkers`), X = { extension: i((e2, t2, n2) => {
  r.trace(`Making markers for `, n2), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-extensionStart`).attr(`class`, `marker extension ` + t2).attr(`refX`, 18).attr(`refY`, 7).attr(`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, `auto`).attr(`markerUnits`, `userSpaceOnUse`).append(`path`).attr(`d`, `M 1,7 L18,13 V 1 Z`), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-extensionEnd`).attr(`class`, `marker extension ` + t2).attr(`refX`, 1).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 28).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 1,1 V 13 L18,7 Z`), e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-extensionStart-margin`).attr(`class`, `marker extension ` + t2).attr(`refX`, 18).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 28).attr(`orient`, `auto`).attr(`markerUnits`, `userSpaceOnUse`).attr(`viewBox`, `0 0 20 14`).append(`polygon`).attr(`points`, `10,7 18,13 18,1`).style(`stroke-width`, 2).style(`stroke-dasharray`, `0`), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-extensionEnd-margin`).attr(`class`, `marker extension ` + t2).attr(`refX`, 9).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 28).attr(`orient`, `auto`).attr(`markerUnits`, `userSpaceOnUse`).attr(`viewBox`, `0 0 20 14`).append(`polygon`).attr(`points`, `10,1 10,13 18,7`).style(`stroke-width`, 2).style(`stroke-dasharray`, `0`);
}, `extension`), composition: i((e2, t2, n2) => {
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-compositionStart`).attr(`class`, `marker composition ` + t2).attr(`refX`, 18).attr(`refY`, 7).attr(`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 18,7 L9,13 L1,7 L9,1 Z`), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-compositionEnd`).attr(`class`, `marker composition ` + t2).attr(`refX`, 1).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 28).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 18,7 L9,13 L1,7 L9,1 Z`), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-compositionStart-margin`).attr(`class`, `marker composition ` + t2).attr(`refX`, 15).attr(`refY`, 7).attr(`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, `auto`).attr(`markerUnits`, `userSpaceOnUse`).append(`path`).style(`stroke-width`, 0).attr(`viewBox`, `0 0 15 15`).attr(`d`, `M 18,7 L9,13 L1,7 L9,1 Z`), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-compositionEnd-margin`).attr(`class`, `marker composition ` + t2).attr(`refX`, 3.5).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 28).attr(`orient`, `auto`).attr(`markerUnits`, `userSpaceOnUse`).append(`path`).style(`stroke-width`, 0).attr(`d`, `M 18,7 L9,13 L1,7 L9,1 Z`);
}, `composition`), aggregation: i((e2, t2, n2) => {
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-aggregationStart`).attr(`class`, `marker aggregation ` + t2).attr(`refX`, 18).attr(`refY`, 7).attr(`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 18,7 L9,13 L1,7 L9,1 Z`), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-aggregationEnd`).attr(`class`, `marker aggregation ` + t2).attr(`refX`, 1).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 28).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 18,7 L9,13 L1,7 L9,1 Z`), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-aggregationStart-margin`).attr(`class`, `marker aggregation ` + t2).attr(`refX`, 15).attr(`refY`, 7).attr(`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, `auto`).attr(`markerUnits`, `userSpaceOnUse`).append(`path`).style(`stroke-width`, 2).attr(`d`, `M 18,7 L9,13 L1,7 L9,1 Z`), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-aggregationEnd-margin`).attr(`class`, `marker aggregation ` + t2).attr(`refX`, 1).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 28).attr(`orient`, `auto`).attr(`markerUnits`, `userSpaceOnUse`).append(`path`).style(`stroke-width`, 2).attr(`d`, `M 18,7 L9,13 L1,7 L9,1 Z`);
}, `aggregation`), dependency: i((e2, t2, n2) => {
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-dependencyStart`).attr(`class`, `marker dependency ` + t2).attr(`refX`, 6).attr(`refY`, 7).attr(`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 5,7 L9,13 L1,7 L9,1 Z`), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-dependencyEnd`).attr(`class`, `marker dependency ` + t2).attr(`refX`, 13).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 28).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 18,7 L9,13 L14,7 L9,1 Z`), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-dependencyStart-margin`).attr(`class`, `marker dependency ` + t2).attr(`refX`, 4).attr(`refY`, 7).attr(`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, `auto`).attr(`markerUnits`, `userSpaceOnUse`).append(`path`).style(`stroke-width`, 0).attr(`d`, `M 5,7 L9,13 L1,7 L9,1 Z`), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-dependencyEnd-margin`).attr(`class`, `marker dependency ` + t2).attr(`refX`, 16).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 28).attr(`orient`, `auto`).attr(`markerUnits`, `userSpaceOnUse`).append(`path`).style(`stroke-width`, 0).attr(`d`, `M 18,7 L9,13 L14,7 L9,1 Z`);
}, `dependency`), lollipop: i((e2, t2, n2) => {
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-lollipopStart`).attr(`class`, `marker lollipop ` + t2).attr(`refX`, 13).attr(`refY`, 7).attr(`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, `auto`).append(`circle`).attr(`fill`, `transparent`).attr(`cx`, 7).attr(`cy`, 7).attr(`r`, 6), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-lollipopEnd`).attr(`class`, `marker lollipop ` + t2).attr(`refX`, 1).attr(`refY`, 7).attr(`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, `auto`).append(`circle`).attr(`fill`, `transparent`).attr(`cx`, 7).attr(`cy`, 7).attr(`r`, 6), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-lollipopStart-margin`).attr(`class`, `marker lollipop ` + t2).attr(`refX`, 13).attr(`refY`, 7).attr(`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, `auto`).attr(`markerUnits`, `userSpaceOnUse`).append(`circle`).attr(`fill`, `transparent`).attr(`cx`, 7).attr(`cy`, 7).attr(`r`, 6).attr(`stroke-width`, 2), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-lollipopEnd-margin`).attr(`class`, `marker lollipop ` + t2).attr(`refX`, 1).attr(`refY`, 7).attr(`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, `auto`).attr(`markerUnits`, `userSpaceOnUse`).append(`circle`).attr(`fill`, `transparent`).attr(`cx`, 7).attr(`cy`, 7).attr(`r`, 6).attr(`stroke-width`, 2);
}, `lollipop`), point: i((e2, t2, n2) => {
  e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-pointEnd`).attr(`class`, `marker ` + t2).attr(`viewBox`, `0 0 10 10`).attr(`refX`, 5).attr(`refY`, 5).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 8).attr(`markerHeight`, 8).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 0 0 L 10 5 L 0 10 z`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 1).style(`stroke-dasharray`, `1,0`), e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-pointStart`).attr(`class`, `marker ` + t2).attr(`viewBox`, `0 0 10 10`).attr(`refX`, 4.5).attr(`refY`, 5).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 8).attr(`markerHeight`, 8).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 0 5 L 10 10 L 10 0 z`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 1).style(`stroke-dasharray`, `1,0`), e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-pointEnd-margin`).attr(`class`, `marker ` + t2).attr(`viewBox`, `0 0 11.5 14`).attr(`refX`, 11.5).attr(`refY`, 7).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 10.5).attr(`markerHeight`, 14).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 0 0 L 11.5 7 L 0 14 z`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 0).style(`stroke-dasharray`, `1,0`), e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-pointStart-margin`).attr(`class`, `marker ` + t2).attr(`viewBox`, `0 0 11.5 14`).attr(`refX`, 1).attr(`refY`, 7).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 11.5).attr(`markerHeight`, 14).attr(`orient`, `auto`).append(`polygon`).attr(`points`, `0,7 11.5,14 11.5,0`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 0).style(`stroke-dasharray`, `1,0`);
}, `point`), circle: i((e2, t2, n2) => {
  e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-circleEnd`).attr(`class`, `marker ` + t2).attr(`viewBox`, `0 0 10 10`).attr(`refX`, 11).attr(`refY`, 5).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 11).attr(`markerHeight`, 11).attr(`orient`, `auto`).append(`circle`).attr(`cx`, `5`).attr(`cy`, `5`).attr(`r`, `5`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 1).style(`stroke-dasharray`, `1,0`), e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-circleStart`).attr(`class`, `marker ` + t2).attr(`viewBox`, `0 0 10 10`).attr(`refX`, -1).attr(`refY`, 5).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 11).attr(`markerHeight`, 11).attr(`orient`, `auto`).append(`circle`).attr(`cx`, `5`).attr(`cy`, `5`).attr(`r`, `5`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 1).style(`stroke-dasharray`, `1,0`), e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-circleEnd-margin`).attr(`class`, `marker ` + t2).attr(`viewBox`, `0 0 10 10`).attr(`refY`, 5).attr(`refX`, 12.25).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 14).attr(`markerHeight`, 14).attr(`orient`, `auto`).append(`circle`).attr(`cx`, `5`).attr(`cy`, `5`).attr(`r`, `5`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 0).style(`stroke-dasharray`, `1,0`), e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-circleStart-margin`).attr(`class`, `marker ` + t2).attr(`viewBox`, `0 0 10 10`).attr(`refX`, -2).attr(`refY`, 5).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 14).attr(`markerHeight`, 14).attr(`orient`, `auto`).append(`circle`).attr(`cx`, `5`).attr(`cy`, `5`).attr(`r`, `5`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 0).style(`stroke-dasharray`, `1,0`);
}, `circle`), cross: i((e2, t2, n2) => {
  e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-crossEnd`).attr(`class`, `marker cross ` + t2).attr(`viewBox`, `0 0 11 11`).attr(`refX`, 12).attr(`refY`, 5.2).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 11).attr(`markerHeight`, 11).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 1,1 l 9,9 M 10,1 l -9,9`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 2).style(`stroke-dasharray`, `1,0`), e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-crossStart`).attr(`class`, `marker cross ` + t2).attr(`viewBox`, `0 0 11 11`).attr(`refX`, -1).attr(`refY`, 5.2).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 11).attr(`markerHeight`, 11).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 1,1 l 9,9 M 10,1 l -9,9`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 2).style(`stroke-dasharray`, `1,0`), e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-crossEnd-margin`).attr(`class`, `marker cross ` + t2).attr(`viewBox`, `0 0 15 15`).attr(`refX`, 17.7).attr(`refY`, 7.5).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 12).attr(`markerHeight`, 12).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 1,1 L 14,14 M 1,14 L 14,1`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 2.5), e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-crossStart-margin`).attr(`class`, `marker cross ` + t2).attr(`viewBox`, `0 0 15 15`).attr(`refX`, -3.5).attr(`refY`, 7.5).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 12).attr(`markerHeight`, 12).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 1,1 L 14,14 M 1,14 L 14,1`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 2.5).style(`stroke-dasharray`, `1,0`);
}, `cross`), barb: i((e2, t2, n2) => {
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-barbEnd`).attr(`refX`, 19).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 14).attr(`markerUnits`, `userSpaceOnUse`).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 19,7 L9,13 L14,7 L9,1 Z`);
}, `barb`), barbNeo: i((e2, t2, r2) => {
  let { themeVariables: i2 } = n(), { transitionColor: a2 } = i2;
  e2.append(`defs`).append(`marker`).attr(`id`, r2 + `_` + t2 + `-barbEnd`).attr(`refX`, 19).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 14).attr(`markerUnits`, `strokeWidth`).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 19,7 L11,14 L13,7 L11,0 Z`), e2.append(`defs`).append(`marker`).attr(`id`, r2 + `_` + t2 + `-barbEnd-margin`).attr(`refX`, 17).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 14).attr(`markerUnits`, `userSpaceOnUse`).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 19,7 L11,14 L13,7 L11,0 Z`).attr(`fill`, `${a2}`);
}, `barbNeo`), only_one: i((e2, t2, n2) => {
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-onlyOneStart`).attr(`class`, `marker onlyOne ` + t2).attr(`refX`, 0).attr(`refY`, 9).attr(`markerWidth`, 18).attr(`markerHeight`, 18).attr(`orient`, `auto`).append(`path`).attr(`d`, `M9,0 L9,18 M15,0 L15,18`), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-onlyOneEnd`).attr(`class`, `marker onlyOne ` + t2).attr(`refX`, 18).attr(`refY`, 9).attr(`markerWidth`, 18).attr(`markerHeight`, 18).attr(`orient`, `auto`).append(`path`).attr(`d`, `M3,0 L3,18 M9,0 L9,18`);
}, `only_one`), zero_or_one: i((e2, t2, n2) => {
  let r2 = e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-zeroOrOneStart`).attr(`class`, `marker zeroOrOne ` + t2).attr(`refX`, 0).attr(`refY`, 9).attr(`markerWidth`, 30).attr(`markerHeight`, 18).attr(`orient`, `auto`);
  r2.append(`circle`).attr(`fill`, `white`).attr(`cx`, 21).attr(`cy`, 9).attr(`r`, 6), r2.append(`path`).attr(`d`, `M9,0 L9,18`);
  let i2 = e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-zeroOrOneEnd`).attr(`class`, `marker zeroOrOne ` + t2).attr(`refX`, 30).attr(`refY`, 9).attr(`markerWidth`, 30).attr(`markerHeight`, 18).attr(`orient`, `auto`);
  i2.append(`circle`).attr(`fill`, `white`).attr(`cx`, 9).attr(`cy`, 9).attr(`r`, 6), i2.append(`path`).attr(`d`, `M21,0 L21,18`);
}, `zero_or_one`), one_or_more: i((e2, t2, n2) => {
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-oneOrMoreStart`).attr(`class`, `marker oneOrMore ` + t2).attr(`refX`, 18).attr(`refY`, 18).attr(`markerWidth`, 45).attr(`markerHeight`, 36).attr(`orient`, `auto`).append(`path`).attr(`d`, `M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27`), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-oneOrMoreEnd`).attr(`class`, `marker oneOrMore ` + t2).attr(`refX`, 27).attr(`refY`, 18).attr(`markerWidth`, 45).attr(`markerHeight`, 36).attr(`orient`, `auto`).append(`path`).attr(`d`, `M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18`);
}, `one_or_more`), zero_or_more: i((e2, t2, n2) => {
  let r2 = e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-zeroOrMoreStart`).attr(`class`, `marker zeroOrMore ` + t2).attr(`refX`, 18).attr(`refY`, 18).attr(`markerWidth`, 57).attr(`markerHeight`, 36).attr(`orient`, `auto`);
  r2.append(`circle`).attr(`fill`, `white`).attr(`cx`, 48).attr(`cy`, 18).attr(`r`, 6), r2.append(`path`).attr(`d`, `M0,18 Q18,0 36,18 Q18,36 0,18`);
  let i2 = e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-zeroOrMoreEnd`).attr(`class`, `marker zeroOrMore ` + t2).attr(`refX`, 39).attr(`refY`, 18).attr(`markerWidth`, 57).attr(`markerHeight`, 36).attr(`orient`, `auto`);
  i2.append(`circle`).attr(`fill`, `white`).attr(`cx`, 9).attr(`cy`, 18).attr(`r`, 6), i2.append(`path`).attr(`d`, `M21,18 Q39,0 57,18 Q39,36 21,18`);
}, `zero_or_more`), only_one_neo: i((e2, t2, r2) => {
  let { themeVariables: i2 } = n(), { strokeWidth: a2 } = i2;
  e2.append(`defs`).append(`marker`).attr(`id`, r2 + `_` + t2 + `-onlyOneStart`).attr(`class`, `marker onlyOne ` + t2).attr(`refX`, 0).attr(`refY`, 9).attr(`markerWidth`, 18).attr(`markerHeight`, 18).attr(`orient`, `auto`).attr(`markerUnits`, `userSpaceOnUse`).append(`path`).attr(`d`, `M9,0 L9,18 M15,0 L15,18`).attr(`stroke-width`, `${a2}`), e2.append(`defs`).append(`marker`).attr(`id`, r2 + `_` + t2 + `-onlyOneEnd`).attr(`class`, `marker onlyOne ` + t2).attr(`refX`, 18).attr(`refY`, 9).attr(`markerWidth`, 18).attr(`markerHeight`, 18).attr(`orient`, `auto`).attr(`markerUnits`, `userSpaceOnUse`).append(`path`).attr(`d`, `M3,0 L3,18 M9,0 L9,18`).attr(`stroke-width`, `${a2}`);
}, `only_one_neo`), zero_or_one_neo: i((e2, t2, r2) => {
  let { themeVariables: i2 } = n(), { strokeWidth: a2, mainBkg: o2 } = i2, s2 = e2.append(`defs`).append(`marker`).attr(`id`, r2 + `_` + t2 + `-zeroOrOneStart`).attr(`class`, `marker zeroOrOne ` + t2).attr(`refX`, 0).attr(`refY`, 9).attr(`markerWidth`, 30).attr(`markerHeight`, 18).attr(`orient`, `auto`).attr(`markerUnits`, `userSpaceOnUse`);
  s2.append(`circle`).attr(`fill`, o2 ?? `white`).attr(`cx`, 21).attr(`cy`, 9).attr(`stroke-width`, `${a2}`).attr(`r`, 6), s2.append(`path`).attr(`d`, `M9,0 L9,18`).attr(`stroke-width`, `${a2}`);
  let c2 = e2.append(`defs`).append(`marker`).attr(`id`, r2 + `_` + t2 + `-zeroOrOneEnd`).attr(`class`, `marker zeroOrOne ` + t2).attr(`refX`, 30).attr(`refY`, 9).attr(`markerWidth`, 30).attr(`markerHeight`, 18).attr(`markerUnits`, `userSpaceOnUse`).attr(`orient`, `auto`);
  c2.append(`circle`).attr(`fill`, o2 ?? `white`).attr(`cx`, 9).attr(`cy`, 9).attr(`stroke-width`, `${a2}`).attr(`r`, 6), c2.append(`path`).attr(`d`, `M21,0 L21,18`).attr(`stroke-width`, `${a2}`);
}, `zero_or_one_neo`), one_or_more_neo: i((e2, t2, r2) => {
  let { themeVariables: i2 } = n(), { strokeWidth: a2 } = i2;
  e2.append(`defs`).append(`marker`).attr(`id`, r2 + `_` + t2 + `-oneOrMoreStart`).attr(`class`, `marker oneOrMore ` + t2).attr(`refX`, 18).attr(`refY`, 18).attr(`markerWidth`, 45).attr(`markerHeight`, 36).attr(`orient`, `auto`).attr(`markerUnits`, `userSpaceOnUse`).append(`path`).attr(`d`, `M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27`).attr(`stroke-width`, `${a2}`), e2.append(`defs`).append(`marker`).attr(`id`, r2 + `_` + t2 + `-oneOrMoreEnd`).attr(`class`, `marker oneOrMore ` + t2).attr(`refX`, 27).attr(`refY`, 18).attr(`markerWidth`, 45).attr(`markerHeight`, 36).attr(`markerUnits`, `userSpaceOnUse`).attr(`orient`, `auto`).append(`path`).attr(`d`, `M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18`).attr(`stroke-width`, `${a2}`);
}, `one_or_more_neo`), zero_or_more_neo: i((e2, t2, r2) => {
  let { themeVariables: i2 } = n(), { strokeWidth: a2, mainBkg: o2 } = i2, s2 = e2.append(`defs`).append(`marker`).attr(`id`, r2 + `_` + t2 + `-zeroOrMoreStart`).attr(`class`, `marker zeroOrMore ` + t2).attr(`refX`, 18).attr(`refY`, 18).attr(`markerWidth`, 57).attr(`markerHeight`, 36).attr(`markerUnits`, `userSpaceOnUse`).attr(`orient`, `auto`);
  s2.append(`circle`).attr(`fill`, o2 ?? `white`).attr(`cx`, 45.5).attr(`cy`, 18).attr(`r`, 6).attr(`stroke-width`, `${a2}`), s2.append(`path`).attr(`d`, `M0,18 Q18,0 36,18 Q18,36 0,18`).attr(`stroke-width`, `${a2}`);
  let c2 = e2.append(`defs`).append(`marker`).attr(`id`, r2 + `_` + t2 + `-zeroOrMoreEnd`).attr(`class`, `marker zeroOrMore ` + t2).attr(`refX`, 39).attr(`refY`, 18).attr(`markerWidth`, 57).attr(`markerHeight`, 36).attr(`orient`, `auto`).attr(`markerUnits`, `userSpaceOnUse`);
  c2.append(`circle`).attr(`fill`, o2 ?? `white`).attr(`cx`, 11).attr(`cy`, 18).attr(`r`, 6).attr(`stroke-width`, `${a2}`), c2.append(`path`).attr(`d`, `M21,18 Q39,0 57,18 Q39,36 21,18`).attr(`stroke-width`, `${a2}`);
}, `zero_or_more_neo`), requirement_arrow: i((e2, t2, n2) => {
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-requirement_arrowEnd`).attr(`refX`, 20).attr(`refY`, 10).attr(`markerWidth`, 20).attr(`markerHeight`, 20).attr(`orient`, `auto`).append(`path`).attr(`d`, `M0,0
      L20,10
      M20,10
      L0,20`);
}, `requirement_arrow`), requirement_contains: i((e2, t2, n2) => {
  let r2 = e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-requirement_containsStart`).attr(`refX`, 0).attr(`refY`, 10).attr(`markerWidth`, 20).attr(`markerHeight`, 20).attr(`orient`, `auto`).append(`g`);
  r2.append(`circle`).attr(`cx`, 10).attr(`cy`, 10).attr(`r`, 9).attr(`fill`, `none`), r2.append(`line`).attr(`x1`, 1).attr(`x2`, 19).attr(`y1`, 10).attr(`y2`, 10), r2.append(`line`).attr(`y1`, 1).attr(`y2`, 19).attr(`x1`, 10).attr(`x2`, 10);
}, `requirement_contains`), requirement_arrow_neo: i((e2, t2, r2) => {
  let { themeVariables: i2 } = n(), { strokeWidth: a2 } = i2;
  e2.append(`defs`).append(`marker`).attr(`id`, r2 + `_` + t2 + `-requirement_arrowEnd`).attr(`refX`, 20).attr(`refY`, 10).attr(`markerWidth`, 20).attr(`markerHeight`, 20).attr(`orient`, `auto`).attr(`markerUnits`, `userSpaceOnUse`).attr(`stroke-width`, `${a2}`).attr(`viewBox`, `0 0 25 20`).append(`path`).attr(`d`, `M0,0
      L20,10
      M20,10
      L0,20`).attr(`stroke-linejoin`, `miter`);
}, `requirement_arrow_neo`), requirement_contains_neo: i((e2, t2, r2) => {
  let { themeVariables: i2 } = n(), { strokeWidth: a2 } = i2, o2 = e2.append(`defs`).append(`marker`).attr(`id`, r2 + `_` + t2 + `-requirement_containsStart`).attr(`refX`, 0).attr(`refY`, 10).attr(`markerWidth`, 20).attr(`markerHeight`, 20).attr(`orient`, `auto`).attr(`markerUnits`, `userSpaceOnUse`).append(`g`);
  o2.append(`circle`).attr(`cx`, 10).attr(`cy`, 10).attr(`r`, 9).attr(`fill`, `none`), o2.append(`line`).attr(`x1`, 1).attr(`x2`, 19).attr(`y1`, 10).attr(`y2`, 10), o2.append(`line`).attr(`y1`, 1).attr(`y2`, 19).attr(`x1`, 10).attr(`x2`, 10), o2.selectAll(`*`).attr(`stroke-width`, `${a2}`);
}, `requirement_contains_neo`) }, Z = Y;
export {
  z as a,
  Z as i,
  G as n,
  L as r,
  F as t
};
