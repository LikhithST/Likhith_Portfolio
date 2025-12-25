import { b as e, h as t } from "./chunk-ABZYJK2D-ODb6qSou.js";
import { g as n, h as r, p as i } from "./src-D8UWkQNo.js";
import { B as a, F as o, G as s, H as c, I as l, K as u, L as d, R as f, U as p, V as m, W as h, g, z as _ } from "./chunk-S3R3BYOJ-D8yhV3IZ.js";
import { t as v } from "./line-DzDDQdde.js";
import { n as y, r as b, t as x } from "./chunk-HN2XXSSU-SCO0eetj.js";
import { t as S } from "./chunk-CVBHYZKI-9IS-TY3G.js";
import { i as C, n as w } from "./chunk-ATLVNIR6-6j91LnhU.js";
import { n as T } from "./chunk-JA3XYJ7Z-By1gQAUK.js";
import { d as E, r as D } from "./chunk-JZLCHNYA-BantgYUJ.js";
var ee = r((e2, t2, n2, r2, i2, a2) => {
  t2.arrowTypeStart && k(e2, `start`, t2.arrowTypeStart, n2, r2, i2, a2), t2.arrowTypeEnd && k(e2, `end`, t2.arrowTypeEnd, n2, r2, i2, a2);
}, `addEdgeMarkers`), O = { arrow_cross: { type: `cross`, fill: false }, arrow_point: { type: `point`, fill: true }, arrow_barb: { type: `barb`, fill: true }, arrow_circle: { type: `circle`, fill: false }, aggregation: { type: `aggregation`, fill: false }, extension: { type: `extension`, fill: false }, composition: { type: `composition`, fill: true }, dependency: { type: `dependency`, fill: true }, lollipop: { type: `lollipop`, fill: false }, only_one: { type: `onlyOne`, fill: false }, zero_or_one: { type: `zeroOrOne`, fill: false }, one_or_more: { type: `oneOrMore`, fill: false }, zero_or_more: { type: `zeroOrMore`, fill: false }, requirement_arrow: { type: `requirement_arrow`, fill: false }, requirement_contains: { type: `requirement_contains`, fill: false } }, k = r((e2, t2, r2, i2, a2, o2, s2) => {
  var _a;
  let c2 = O[r2];
  if (!c2) {
    n.warn(`Unknown arrow type: ${r2}`);
    return;
  }
  let l2 = `${a2}_${o2}-${c2.type}${t2 === `start` ? `Start` : `End`}`;
  if (s2 && s2.trim() !== ``) {
    let n2 = `${l2}_${s2.replace(/[^\dA-Za-z]/g, `_`)}`;
    if (!document.getElementById(n2)) {
      let e3 = document.getElementById(l2);
      if (e3) {
        let t3 = e3.cloneNode(true);
        t3.id = n2, t3.querySelectorAll(`path, circle, line`).forEach((e4) => {
          e4.setAttribute(`stroke`, s2), c2.fill && e4.setAttribute(`fill`, s2);
        }), (_a = e3.parentNode) == null ? void 0 : _a.appendChild(t3);
      }
    }
    e2.attr(`marker-${t2}`, `url(${i2}#${n2})`);
  } else e2.attr(`marker-${t2}`, `url(${i2}#${l2})`);
}, `addEdgeMarker`), A = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), M = r(() => {
  A.clear(), j.clear();
}, `clear`), N = r((e2) => e2 ? e2.reduce((e3, t2) => e3 + `;` + t2, ``) : ``, `getLabelStyles`), P = r(async (r2, a2) => {
  let o2 = t(e().flowchart.htmlLabels), { labelStyles: s2 } = C(a2);
  a2.labelStyle = s2;
  let c2 = await T(r2, a2.label, { style: a2.labelStyle, useHtmlLabels: o2, addSvgBackground: true, isNode: false });
  n.info(`abc82`, a2, a2.labelType);
  let l2 = r2.insert(`g`).attr(`class`, `edgeLabel`), u2 = l2.insert(`g`).attr(`class`, `label`).attr(`data-id`, a2.id);
  u2.node().appendChild(c2);
  let d2 = c2.getBBox();
  if (o2) {
    let e2 = c2.children[0], t2 = i(c2);
    d2 = e2.getBoundingClientRect(), t2.attr(`width`, d2.width), t2.attr(`height`, d2.height);
  }
  u2.attr(`transform`, `translate(` + -d2.width / 2 + `, ` + -d2.height / 2 + `)`), A.set(a2.id, l2), a2.width = d2.width, a2.height = d2.height;
  let f2;
  if (a2.startLabelLeft) {
    let e2 = await D(a2.startLabelLeft, N(a2.labelStyle)), t2 = r2.insert(`g`).attr(`class`, `edgeTerminals`), n2 = t2.insert(`g`).attr(`class`, `inner`);
    f2 = n2.node().appendChild(e2);
    let i2 = e2.getBBox();
    n2.attr(`transform`, `translate(` + -i2.width / 2 + `, ` + -i2.height / 2 + `)`), j.get(a2.id) || j.set(a2.id, {}), j.get(a2.id).startLeft = t2, F(f2, a2.startLabelLeft);
  }
  if (a2.startLabelRight) {
    let e2 = await D(a2.startLabelRight, N(a2.labelStyle)), t2 = r2.insert(`g`).attr(`class`, `edgeTerminals`), n2 = t2.insert(`g`).attr(`class`, `inner`);
    f2 = t2.node().appendChild(e2), n2.node().appendChild(e2);
    let i2 = e2.getBBox();
    n2.attr(`transform`, `translate(` + -i2.width / 2 + `, ` + -i2.height / 2 + `)`), j.get(a2.id) || j.set(a2.id, {}), j.get(a2.id).startRight = t2, F(f2, a2.startLabelRight);
  }
  if (a2.endLabelLeft) {
    let e2 = await D(a2.endLabelLeft, N(a2.labelStyle)), t2 = r2.insert(`g`).attr(`class`, `edgeTerminals`), n2 = t2.insert(`g`).attr(`class`, `inner`);
    f2 = n2.node().appendChild(e2);
    let i2 = e2.getBBox();
    n2.attr(`transform`, `translate(` + -i2.width / 2 + `, ` + -i2.height / 2 + `)`), t2.node().appendChild(e2), j.get(a2.id) || j.set(a2.id, {}), j.get(a2.id).endLeft = t2, F(f2, a2.endLabelLeft);
  }
  if (a2.endLabelRight) {
    let e2 = await D(a2.endLabelRight, N(a2.labelStyle)), t2 = r2.insert(`g`).attr(`class`, `edgeTerminals`), n2 = t2.insert(`g`).attr(`class`, `inner`);
    f2 = n2.node().appendChild(e2);
    let i2 = e2.getBBox();
    n2.attr(`transform`, `translate(` + -i2.width / 2 + `, ` + -i2.height / 2 + `)`), t2.node().appendChild(e2), j.get(a2.id) || j.set(a2.id, {}), j.get(a2.id).endRight = t2, F(f2, a2.endLabelRight);
  }
  return c2;
}, `insertEdgeLabel`);
function F(t2, n2) {
  e().flowchart.htmlLabels && t2 && (t2.style.width = n2.length * 9 + `px`, t2.style.height = `12px`);
}
r(F, `setTerminalWidth`);
var I = r((t2, r2) => {
  n.debug(`Moving label abc88 `, t2.id, t2.label, A.get(t2.id), r2);
  let i2 = r2.updatedPath ? r2.updatedPath : r2.originalPath, { subGraphTitleTotalMargin: a2 } = S(e());
  if (t2.label) {
    let e2 = A.get(t2.id), o2 = t2.x, s2 = t2.y;
    if (i2) {
      let e3 = g.calcLabelPosition(i2);
      n.debug(`Moving label ` + t2.label + ` from (`, o2, `,`, s2, `) to (`, e3.x, `,`, e3.y, `) abc88`), r2.updatedPath && (o2 = e3.x, s2 = e3.y);
    }
    e2.attr(`transform`, `translate(${o2}, ${s2 + a2 / 2})`);
  }
  if (t2.startLabelLeft) {
    let e2 = j.get(t2.id).startLeft, n2 = t2.x, r3 = t2.y;
    if (i2) {
      let e3 = g.calcTerminalLabelPosition(t2.arrowTypeStart ? 10 : 0, `start_left`, i2);
      n2 = e3.x, r3 = e3.y;
    }
    e2.attr(`transform`, `translate(${n2}, ${r3})`);
  }
  if (t2.startLabelRight) {
    let e2 = j.get(t2.id).startRight, n2 = t2.x, r3 = t2.y;
    if (i2) {
      let e3 = g.calcTerminalLabelPosition(t2.arrowTypeStart ? 10 : 0, `start_right`, i2);
      n2 = e3.x, r3 = e3.y;
    }
    e2.attr(`transform`, `translate(${n2}, ${r3})`);
  }
  if (t2.endLabelLeft) {
    let e2 = j.get(t2.id).endLeft, n2 = t2.x, r3 = t2.y;
    if (i2) {
      let e3 = g.calcTerminalLabelPosition(t2.arrowTypeEnd ? 10 : 0, `end_left`, i2);
      n2 = e3.x, r3 = e3.y;
    }
    e2.attr(`transform`, `translate(${n2}, ${r3})`);
  }
  if (t2.endLabelRight) {
    let e2 = j.get(t2.id).endRight, n2 = t2.x, r3 = t2.y;
    if (i2) {
      let e3 = g.calcTerminalLabelPosition(t2.arrowTypeEnd ? 10 : 0, `end_right`, i2);
      n2 = e3.x, r3 = e3.y;
    }
    e2.attr(`transform`, `translate(${n2}, ${r3})`);
  }
}, `positionEdgeLabel`), L = r((e2, t2) => {
  let n2 = e2.x, r2 = e2.y, i2 = Math.abs(t2.x - n2), a2 = Math.abs(t2.y - r2), o2 = e2.width / 2, s2 = e2.height / 2;
  return i2 >= o2 || a2 >= s2;
}, `outsideNode`), R = r((e2, t2, r2) => {
  n.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t2)}
  insidePoint : ${JSON.stringify(r2)}
  node        : x:${e2.x} y:${e2.y} w:${e2.width} h:${e2.height}`);
  let i2 = e2.x, a2 = e2.y, o2 = Math.abs(i2 - r2.x), s2 = e2.width / 2, c2 = r2.x < t2.x ? s2 - o2 : s2 + o2, l2 = e2.height / 2, u2 = Math.abs(t2.y - r2.y), d2 = Math.abs(t2.x - r2.x);
  if (Math.abs(a2 - t2.y) * s2 > Math.abs(i2 - t2.x) * l2) {
    let e3 = r2.y < t2.y ? t2.y - l2 - a2 : a2 - l2 - t2.y;
    c2 = d2 * e3 / u2;
    let i3 = { x: r2.x < t2.x ? r2.x + c2 : r2.x - d2 + c2, y: r2.y < t2.y ? r2.y + u2 - e3 : r2.y - u2 + e3 };
    return c2 === 0 && (i3.x = t2.x, i3.y = t2.y), d2 === 0 && (i3.x = t2.x), u2 === 0 && (i3.y = t2.y), n.debug(`abc89 top/bottom calc, Q ${u2}, q ${e3}, R ${d2}, r ${c2}`, i3), i3;
  } else {
    c2 = r2.x < t2.x ? t2.x - s2 - i2 : i2 - s2 - t2.x;
    let e3 = u2 * c2 / d2, a3 = r2.x < t2.x ? r2.x + d2 - c2 : r2.x - d2 + c2, o3 = r2.y < t2.y ? r2.y + e3 : r2.y - e3;
    return n.debug(`sides calc abc89, Q ${u2}, q ${e3}, R ${d2}, r ${c2}`, { _x: a3, _y: o3 }), c2 === 0 && (a3 = t2.x, o3 = t2.y), d2 === 0 && (a3 = t2.x), u2 === 0 && (o3 = t2.y), { x: a3, y: o3 };
  }
}, `intersection`), z = r((e2, t2) => {
  n.warn(`abc88 cutPathAtIntersect`, e2, t2);
  let r2 = [], i2 = e2[0], a2 = false;
  return e2.forEach((e3) => {
    if (n.info(`abc88 checking point`, e3, t2), !L(t2, e3) && !a2) {
      let o2 = R(t2, i2, e3);
      n.debug(`abc88 inside`, e3, i2, o2), n.debug(`abc88 intersection`, o2, t2);
      let s2 = false;
      r2.forEach((e4) => {
        s2 || (s2 = e4.x === o2.x && e4.y === o2.y);
      }), r2.some((e4) => e4.x === o2.x && e4.y === o2.y) ? n.warn(`abc88 no intersect`, o2, r2) : r2.push(o2), a2 = true;
    } else n.warn(`abc88 outside`, e3, i2), i2 = e3, a2 || r2.push(e3);
  }), n.debug(`returning points`, r2), r2;
}, `cutPathAtIntersect`);
function B(e2) {
  let t2 = [], n2 = [];
  for (let r2 = 1; r2 < e2.length - 1; r2++) {
    let i2 = e2[r2 - 1], a2 = e2[r2], o2 = e2[r2 + 1];
    (i2.x === a2.x && a2.y === o2.y && Math.abs(a2.x - o2.x) > 5 && Math.abs(a2.y - i2.y) > 5 || i2.y === a2.y && a2.x === o2.x && Math.abs(a2.x - i2.x) > 5 && Math.abs(a2.y - o2.y) > 5) && (t2.push(a2), n2.push(r2));
  }
  return { cornerPoints: t2, cornerPointPositions: n2 };
}
r(B, `extractCornerPoints`);
var V = r(function(e2, t2, n2) {
  let r2 = t2.x - e2.x, i2 = t2.y - e2.y, a2 = n2 / Math.sqrt(r2 * r2 + i2 * i2);
  return { x: t2.x - a2 * r2, y: t2.y - a2 * i2 };
}, `findAdjacentPoint`), H = r(function(e2) {
  let { cornerPointPositions: t2 } = B(e2), r2 = [];
  for (let i2 = 0; i2 < e2.length; i2++) if (t2.includes(i2)) {
    let t3 = e2[i2 - 1], a2 = e2[i2 + 1], o2 = e2[i2], s2 = V(t3, o2, 5), c2 = V(a2, o2, 5), l2 = c2.x - s2.x, u2 = c2.y - s2.y;
    r2.push(s2);
    let d2 = Math.sqrt(2) * 2, f2 = { x: o2.x, y: o2.y };
    Math.abs(a2.x - t3.x) > 10 && Math.abs(a2.y - t3.y) >= 10 ? (n.debug(`Corner point fixing`, Math.abs(a2.x - t3.x), Math.abs(a2.y - t3.y)), f2 = o2.x === s2.x ? { x: l2 < 0 ? s2.x - 5 + d2 : s2.x + 5 - d2, y: u2 < 0 ? s2.y - d2 : s2.y + d2 } : { x: l2 < 0 ? s2.x - d2 : s2.x + d2, y: u2 < 0 ? s2.y - 5 + d2 : s2.y + 5 - d2 }) : n.debug(`Corner point skipping fixing`, Math.abs(a2.x - t3.x), Math.abs(a2.y - t3.y)), r2.push(f2, c2);
  } else r2.push(e2[i2]);
  return r2;
}, `fixCorners`), U = r((e2, t2, n2) => {
  let r2 = e2 - t2 - n2, i2 = Math.floor(r2 / 4);
  return `0 ${t2} ${Array(i2).fill(`2 2`).join(` `)} ${n2}`;
}, `generateDashArray`), W = r(function(t2, r2, y2, S2, C2, T2, D2, O2 = false) {
  var _a;
  let { handDrawnSeed: k2 } = e(), A2 = r2.points, j2 = false, M2 = C2;
  var N2 = T2;
  let P2 = [];
  for (let e2 in r2.cssCompiledStyles) w(e2) || P2.push(r2.cssCompiledStyles[e2]);
  n.debug(`UIO intersect check`, r2.points, N2.x, M2.x), N2.intersect && M2.intersect && !O2 && (A2 = A2.slice(1, r2.points.length - 1), A2.unshift(M2.intersect(A2[0])), n.debug(`Last point UIO`, r2.start, `-->`, r2.end, A2[A2.length - 1], N2, N2.intersect(A2[A2.length - 1])), A2.push(N2.intersect(A2[A2.length - 1])));
  let F2 = btoa(JSON.stringify(A2));
  r2.toCluster && (n.info(`to cluster abc88`, y2.get(r2.toCluster)), A2 = z(r2.points, y2.get(r2.toCluster).node), j2 = true), r2.fromCluster && (n.debug(`from cluster abc88`, y2.get(r2.fromCluster), JSON.stringify(A2, null, 2)), A2 = z(A2.reverse(), y2.get(r2.fromCluster).node).reverse(), j2 = true);
  let I2 = A2.filter((e2) => !Number.isNaN(e2.y));
  I2 = H(I2);
  let L2 = p;
  switch (L2 = u, r2.curve) {
    case `linear`:
      L2 = u;
      break;
    case `basis`:
      L2 = p;
      break;
    case `cardinal`:
      L2 = c;
      break;
    case `bumpX`:
      L2 = h;
      break;
    case `bumpY`:
      L2 = s;
      break;
    case `catmullRom`:
      L2 = m;
      break;
    case `monotoneX`:
      L2 = _;
      break;
    case `monotoneY`:
      L2 = a;
      break;
    case `natural`:
      L2 = f;
      break;
    case `step`:
      L2 = d;
      break;
    case `stepAfter`:
      L2 = o;
      break;
    case `stepBefore`:
      L2 = l;
      break;
    default:
      L2 = p;
  }
  let { x: R2, y: B2 } = x(r2), V2 = v().x(R2).y(B2).curve(L2), W2;
  switch (r2.thickness) {
    case `normal`:
      W2 = `edge-thickness-normal`;
      break;
    case `thick`:
      W2 = `edge-thickness-thick`;
      break;
    case `invisible`:
      W2 = `edge-thickness-invisible`;
      break;
    default:
      W2 = `edge-thickness-normal`;
  }
  switch (r2.pattern) {
    case `solid`:
      W2 += ` edge-pattern-solid`;
      break;
    case `dotted`:
      W2 += ` edge-pattern-dotted`;
      break;
    case `dashed`:
      W2 += ` edge-pattern-dashed`;
      break;
    default:
      W2 += ` edge-pattern-solid`;
  }
  let K2, J2 = r2.curve === `rounded` ? G(q(I2, r2), 5) : V2(I2), Y2 = Array.isArray(r2.style) ? r2.style : [r2.style], X2 = Y2.find((e2) => e2 == null ? void 0 : e2.startsWith(`stroke:`)), Z = false;
  if (r2.look === `handDrawn`) {
    let e2 = E.svg(t2);
    Object.assign([], I2);
    let n2 = e2.path(J2, { roughness: 0.3, seed: k2 });
    W2 += ` transition`, K2 = i(n2).select(`path`).attr(`id`, r2.id).attr(`class`, ` ` + W2 + (r2.classes ? ` ` + r2.classes : ``)).attr(`style`, Y2 ? Y2.reduce((e3, t3) => e3 + `;` + t3, ``) : ``);
    let a2 = K2.attr(`d`);
    K2.attr(`d`, a2), t2.node().appendChild(K2.node());
  } else {
    let e2 = P2.join(`;`), n2 = Y2 ? Y2.reduce((e3, t3) => e3 + t3 + `;`, ``) : ``, i2 = ``;
    r2.animate && (i2 = ` edge-animation-fast`), r2.animation && (i2 = ` edge-animation-` + r2.animation);
    let a2 = (e2 ? e2 + `;` + n2 + `;` : n2) + `;` + (Y2 ? Y2.reduce((e3, t3) => e3 + `;` + t3, ``) : ``);
    K2 = t2.append(`path`).attr(`d`, J2).attr(`id`, r2.id).attr(`class`, ` ` + W2 + (r2.classes ? ` ` + r2.classes : ``) + (i2 ?? ``)).attr(`style`, a2), X2 = (_a = a2.match(/stroke:([^;]+)/)) == null ? void 0 : _a[1], Z = r2.animate === true || !!r2.animation || e2.includes(`animation`);
    let o2 = K2.node(), s2 = typeof o2.getTotalLength == `function` ? o2.getTotalLength() : 0, c2 = b[r2.arrowTypeStart] || 0, l2 = b[r2.arrowTypeEnd] || 0;
    if (r2.look === `neo` && !Z) {
      let e3 = `stroke-dasharray: ${r2.pattern === `dotted` || r2.pattern === `dashed` ? U(s2, c2, l2) : `0 ${c2} ${s2 - c2 - l2} ${l2}`}; stroke-dashoffset: 0;`;
      K2.attr(`style`, e3 + K2.attr(`style`));
    }
  }
  K2.attr(`data-edge`, true), K2.attr(`data-et`, `edge`), K2.attr(`data-id`, r2.id), K2.attr(`data-points`, F2), r2.showPoints && I2.forEach((e2) => {
    t2.append(`circle`).style(`stroke`, `red`).style(`fill`, `red`).attr(`r`, 1).attr(`cx`, e2.x).attr(`cy`, e2.y);
  });
  let Q = ``;
  (e().flowchart.arrowMarkerAbsolute || e().state.arrowMarkerAbsolute) && (Q = window.location.protocol + `//` + window.location.host + window.location.pathname + window.location.search, Q = Q.replace(/\(/g, `\\(`).replace(/\)/g, `\\)`)), n.info(`arrowTypeStart`, r2.arrowTypeStart), n.info(`arrowTypeEnd`, r2.arrowTypeEnd), ee(K2, r2, Q, D2, S2, X2);
  let te = Math.floor(A2.length / 2), ne = A2[te];
  g.isLabelCoordinateInPath(ne, K2.attr(`d`)) || (j2 = true);
  let $ = {};
  return j2 && ($.updatedPath = A2), $.originalPath = r2.points, $;
}, `insertEdge`);
function G(e2, t2) {
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
r(G, `generateRoundedPath`);
function K(e2, t2) {
  if (!e2 || !t2) return { angle: 0, deltaX: 0, deltaY: 0 };
  let n2 = t2.x - e2.x, r2 = t2.y - e2.y;
  return { angle: Math.atan2(r2, n2), deltaX: n2, deltaY: r2 };
}
r(K, `calculateDeltaAndAngle`);
function q(e2, t2) {
  let n2 = e2.map((e3) => ({ ...e3 }));
  if (e2.length >= 2 && y[t2.arrowTypeStart]) {
    let r3 = y[t2.arrowTypeStart], i2 = e2[0], a2 = e2[1], { angle: o2 } = K(i2, a2), s2 = r3 * Math.cos(o2), c2 = r3 * Math.sin(o2);
    n2[0].x = i2.x + s2, n2[0].y = i2.y + c2;
  }
  let r2 = e2.length;
  if (r2 >= 2 && y[t2.arrowTypeEnd]) {
    let i2 = y[t2.arrowTypeEnd], a2 = e2[r2 - 1], o2 = e2[r2 - 2], { angle: s2 } = K(o2, a2), c2 = i2 * Math.cos(s2), l2 = i2 * Math.sin(s2);
    n2[r2 - 1].x = a2.x - c2, n2[r2 - 1].y = a2.y - l2;
  }
  return n2;
}
r(q, `applyMarkerOffsetsToPoints`);
var J = r((e2, t2, n2, r2) => {
  t2.forEach((t3) => {
    Y[t3](e2, n2, r2);
  });
}, `insertMarkers`), Y = { extension: r((e2, t2, r2) => {
  n.trace(`Making markers for `, r2), e2.append(`defs`).append(`marker`).attr(`id`, r2 + `_` + t2 + `-extensionStart`).attr(`class`, `marker extension ` + t2).attr(`refX`, 18).attr(`refY`, 7).attr(`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 1,7 L18,13 V 1 Z`), e2.append(`defs`).append(`marker`).attr(`id`, r2 + `_` + t2 + `-extensionEnd`).attr(`class`, `marker extension ` + t2).attr(`refX`, 1).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 28).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 1,1 V 13 L18,7 Z`);
}, `extension`), composition: r((e2, t2, n2) => {
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-compositionStart`).attr(`class`, `marker composition ` + t2).attr(`refX`, 18).attr(`refY`, 7).attr(`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 18,7 L9,13 L1,7 L9,1 Z`), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-compositionEnd`).attr(`class`, `marker composition ` + t2).attr(`refX`, 1).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 28).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 18,7 L9,13 L1,7 L9,1 Z`);
}, `composition`), aggregation: r((e2, t2, n2) => {
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-aggregationStart`).attr(`class`, `marker aggregation ` + t2).attr(`refX`, 18).attr(`refY`, 7).attr(`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 18,7 L9,13 L1,7 L9,1 Z`), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-aggregationEnd`).attr(`class`, `marker aggregation ` + t2).attr(`refX`, 1).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 28).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 18,7 L9,13 L1,7 L9,1 Z`);
}, `aggregation`), dependency: r((e2, t2, n2) => {
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-dependencyStart`).attr(`class`, `marker dependency ` + t2).attr(`refX`, 6).attr(`refY`, 7).attr(`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 5,7 L9,13 L1,7 L9,1 Z`), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-dependencyEnd`).attr(`class`, `marker dependency ` + t2).attr(`refX`, 13).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 28).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 18,7 L9,13 L14,7 L9,1 Z`);
}, `dependency`), lollipop: r((e2, t2, n2) => {
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-lollipopStart`).attr(`class`, `marker lollipop ` + t2).attr(`refX`, 13).attr(`refY`, 7).attr(`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, `auto`).append(`circle`).attr(`stroke`, `black`).attr(`fill`, `transparent`).attr(`cx`, 7).attr(`cy`, 7).attr(`r`, 6), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-lollipopEnd`).attr(`class`, `marker lollipop ` + t2).attr(`refX`, 1).attr(`refY`, 7).attr(`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, `auto`).append(`circle`).attr(`stroke`, `black`).attr(`fill`, `transparent`).attr(`cx`, 7).attr(`cy`, 7).attr(`r`, 6);
}, `lollipop`), point: r((e2, t2, n2) => {
  e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-pointEnd`).attr(`class`, `marker ` + t2).attr(`viewBox`, `0 0 10 10`).attr(`refX`, 5).attr(`refY`, 5).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 8).attr(`markerHeight`, 8).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 0 0 L 10 5 L 0 10 z`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 1).style(`stroke-dasharray`, `1,0`), e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-pointStart`).attr(`class`, `marker ` + t2).attr(`viewBox`, `0 0 10 10`).attr(`refX`, 4.5).attr(`refY`, 5).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 8).attr(`markerHeight`, 8).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 0 5 L 10 10 L 10 0 z`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 1).style(`stroke-dasharray`, `1,0`);
}, `point`), circle: r((e2, t2, n2) => {
  e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-circleEnd`).attr(`class`, `marker ` + t2).attr(`viewBox`, `0 0 10 10`).attr(`refX`, 11).attr(`refY`, 5).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 11).attr(`markerHeight`, 11).attr(`orient`, `auto`).append(`circle`).attr(`cx`, `5`).attr(`cy`, `5`).attr(`r`, `5`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 1).style(`stroke-dasharray`, `1,0`), e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-circleStart`).attr(`class`, `marker ` + t2).attr(`viewBox`, `0 0 10 10`).attr(`refX`, -1).attr(`refY`, 5).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 11).attr(`markerHeight`, 11).attr(`orient`, `auto`).append(`circle`).attr(`cx`, `5`).attr(`cy`, `5`).attr(`r`, `5`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 1).style(`stroke-dasharray`, `1,0`);
}, `circle`), cross: r((e2, t2, n2) => {
  e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-crossEnd`).attr(`class`, `marker cross ` + t2).attr(`viewBox`, `0 0 11 11`).attr(`refX`, 12).attr(`refY`, 5.2).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 11).attr(`markerHeight`, 11).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 1,1 l 9,9 M 10,1 l -9,9`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 2).style(`stroke-dasharray`, `1,0`), e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-crossStart`).attr(`class`, `marker cross ` + t2).attr(`viewBox`, `0 0 11 11`).attr(`refX`, -1).attr(`refY`, 5.2).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 11).attr(`markerHeight`, 11).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 1,1 l 9,9 M 10,1 l -9,9`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 2).style(`stroke-dasharray`, `1,0`);
}, `cross`), barb: r((e2, t2, n2) => {
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-barbEnd`).attr(`refX`, 19).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 14).attr(`markerUnits`, `userSpaceOnUse`).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 19,7 L9,13 L14,7 L9,1 Z`);
}, `barb`), only_one: r((e2, t2, n2) => {
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-onlyOneStart`).attr(`class`, `marker onlyOne ` + t2).attr(`refX`, 0).attr(`refY`, 9).attr(`markerWidth`, 18).attr(`markerHeight`, 18).attr(`orient`, `auto`).append(`path`).attr(`d`, `M9,0 L9,18 M15,0 L15,18`), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-onlyOneEnd`).attr(`class`, `marker onlyOne ` + t2).attr(`refX`, 18).attr(`refY`, 9).attr(`markerWidth`, 18).attr(`markerHeight`, 18).attr(`orient`, `auto`).append(`path`).attr(`d`, `M3,0 L3,18 M9,0 L9,18`);
}, `only_one`), zero_or_one: r((e2, t2, n2) => {
  let r2 = e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-zeroOrOneStart`).attr(`class`, `marker zeroOrOne ` + t2).attr(`refX`, 0).attr(`refY`, 9).attr(`markerWidth`, 30).attr(`markerHeight`, 18).attr(`orient`, `auto`);
  r2.append(`circle`).attr(`fill`, `white`).attr(`cx`, 21).attr(`cy`, 9).attr(`r`, 6), r2.append(`path`).attr(`d`, `M9,0 L9,18`);
  let i2 = e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-zeroOrOneEnd`).attr(`class`, `marker zeroOrOne ` + t2).attr(`refX`, 30).attr(`refY`, 9).attr(`markerWidth`, 30).attr(`markerHeight`, 18).attr(`orient`, `auto`);
  i2.append(`circle`).attr(`fill`, `white`).attr(`cx`, 9).attr(`cy`, 9).attr(`r`, 6), i2.append(`path`).attr(`d`, `M21,0 L21,18`);
}, `zero_or_one`), one_or_more: r((e2, t2, n2) => {
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-oneOrMoreStart`).attr(`class`, `marker oneOrMore ` + t2).attr(`refX`, 18).attr(`refY`, 18).attr(`markerWidth`, 45).attr(`markerHeight`, 36).attr(`orient`, `auto`).append(`path`).attr(`d`, `M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27`), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-oneOrMoreEnd`).attr(`class`, `marker oneOrMore ` + t2).attr(`refX`, 27).attr(`refY`, 18).attr(`markerWidth`, 45).attr(`markerHeight`, 36).attr(`orient`, `auto`).append(`path`).attr(`d`, `M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18`);
}, `one_or_more`), zero_or_more: r((e2, t2, n2) => {
  let r2 = e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-zeroOrMoreStart`).attr(`class`, `marker zeroOrMore ` + t2).attr(`refX`, 18).attr(`refY`, 18).attr(`markerWidth`, 57).attr(`markerHeight`, 36).attr(`orient`, `auto`);
  r2.append(`circle`).attr(`fill`, `white`).attr(`cx`, 48).attr(`cy`, 18).attr(`r`, 6), r2.append(`path`).attr(`d`, `M0,18 Q18,0 36,18 Q18,36 0,18`);
  let i2 = e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-zeroOrMoreEnd`).attr(`class`, `marker zeroOrMore ` + t2).attr(`refX`, 39).attr(`refY`, 18).attr(`markerWidth`, 57).attr(`markerHeight`, 36).attr(`orient`, `auto`);
  i2.append(`circle`).attr(`fill`, `white`).attr(`cx`, 9).attr(`cy`, 18).attr(`r`, 6), i2.append(`path`).attr(`d`, `M21,18 Q39,0 57,18 Q39,36 21,18`);
}, `zero_or_more`), requirement_arrow: r((e2, t2, n2) => {
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-requirement_arrowEnd`).attr(`refX`, 20).attr(`refY`, 10).attr(`markerWidth`, 20).attr(`markerHeight`, 20).attr(`orient`, `auto`).append(`path`).attr(`d`, `M0,0
      L20,10
      M20,10
      L0,20`);
}, `requirement_arrow`), requirement_contains: r((e2, t2, n2) => {
  let r2 = e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-requirement_containsStart`).attr(`refX`, 0).attr(`refY`, 10).attr(`markerWidth`, 20).attr(`markerHeight`, 20).attr(`orient`, `auto`).append(`g`);
  r2.append(`circle`).attr(`cx`, 10).attr(`cy`, 10).attr(`r`, 9).attr(`fill`, `none`), r2.append(`line`).attr(`x1`, 1).attr(`x2`, 19).attr(`y1`, 10).attr(`y2`, 10), r2.append(`line`).attr(`y1`, 1).attr(`y2`, 19).attr(`x1`, 10).attr(`x2`, 10);
}, `requirement_contains`) }, X = J;
export {
  I as a,
  X as i,
  W as n,
  P as r,
  M as t
};
