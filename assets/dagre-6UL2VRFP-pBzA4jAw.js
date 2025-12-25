import { b as e } from "./chunk-ABZYJK2D-ODb6qSou.js";
import { g as t, h as n } from "./src-D8UWkQNo.js";
import "./path-B-GLhb_8.js";
import "./math-O_7OW4FW.js";
import "./array-CopOK-GI.js";
import "./chunk-S3R3BYOJ-D8yhV3IZ.js";
import "./line-DzDDQdde.js";
import "./chunk-HN2XXSSU-SCO0eetj.js";
import { t as r } from "./chunk-CVBHYZKI-9IS-TY3G.js";
import "./chunk-ATLVNIR6-6j91LnhU.js";
import "./dist-DrVb-WkD.js";
import "./identity-IHMFXfGJ.js";
import "./chunk-JA3XYJ7Z-By1gQAUK.js";
import { a as i, c as a, i as o, l as s, n as c, t as l, u } from "./chunk-JZLCHNYA-BantgYUJ.js";
import { a as d, i as f, n as p, r as m, t as h } from "./chunk-QXUST7PY-BALPMe08.js";
import "./isEmpty-Suvitui-.js";
import "./reduce-S4_EnTW-.js";
import { a as g } from "./flatten-DG1tNxhW.js";
import { n as _, t as v } from "./graphlib-Ct7gWg8T.js";
import { t as y } from "./clone-Bi4b2wkd.js";
import { t as b } from "./dagre-DFBV6fTk.js";
function x(e2) {
  var t2 = { options: { directed: e2.isDirected(), multigraph: e2.isMultigraph(), compound: e2.isCompound() }, nodes: S(e2), edges: C(e2) };
  return _(e2.graph()) || (t2.value = y(e2.graph())), t2;
}
function S(e2) {
  return g(e2.nodes(), function(t2) {
    var n2 = e2.node(t2), r2 = e2.parent(t2), i2 = { v: t2 };
    return _(n2) || (i2.value = n2), _(r2) || (i2.parent = r2), i2;
  });
}
function C(e2) {
  return g(e2.edges(), function(t2) {
    var n2 = e2.edge(t2), r2 = { v: t2.v, w: t2.w };
    return _(t2.name) || (r2.name = t2.name), _(n2) || (r2.value = n2), r2;
  });
}
var w = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), D = n(() => {
  T.clear(), E.clear(), w.clear();
}, `clear`), O = n((e2, n2) => {
  let r2 = T.get(n2) || [];
  return t.trace(`In isDescendant`, n2, ` `, e2, ` = `, r2.includes(e2)), r2.includes(e2);
}, `isDescendant`), k = n((e2, n2) => {
  let r2 = T.get(n2) || [];
  return t.info(`Descendants of `, n2, ` is `, r2), t.info(`Edge is `, e2), e2.v === n2 || e2.w === n2 ? false : r2 ? r2.includes(e2.v) || O(e2.v, n2) || O(e2.w, n2) || r2.includes(e2.w) : (t.debug(`Tilt, `, n2, `,not in descendants`), false);
}, `edgeInCluster`), A = n((e2, n2, r2, i2) => {
  t.warn(`Copying children of `, e2, `root`, i2, `data`, n2.node(e2), i2);
  let a2 = n2.children(e2) || [];
  e2 !== i2 && a2.push(e2), t.warn(`Copying (nodes) clusterId`, e2, `nodes`, a2), a2.forEach((a3) => {
    if (n2.children(a3).length > 0) A(a3, n2, r2, i2);
    else {
      let o2 = n2.node(a3);
      t.info(`cp `, a3, ` to `, i2, ` with parent `, e2), r2.setNode(a3, o2), i2 !== n2.parent(a3) && (t.warn(`Setting parent`, a3, n2.parent(a3)), r2.setParent(a3, n2.parent(a3))), e2 !== i2 && a3 !== e2 ? (t.debug(`Setting parent`, a3, e2), r2.setParent(a3, e2)) : (t.info(`In copy `, e2, `root`, i2, `data`, n2.node(e2), i2), t.debug(`Not Setting parent for node=`, a3, `cluster!==rootId`, e2 !== i2, `node!==clusterId`, a3 !== e2));
      let s2 = n2.edges(a3);
      t.debug(`Copying Edges`, s2), s2.forEach((a4) => {
        t.info(`Edge`, a4);
        let o3 = n2.edge(a4.v, a4.w, a4.name);
        t.info(`Edge data`, o3, i2);
        try {
          k(a4, i2) ? (t.info(`Copying as `, a4.v, a4.w, o3, a4.name), r2.setEdge(a4.v, a4.w, o3, a4.name), t.info(`newGraph edges `, r2.edges(), r2.edge(r2.edges()[0]))) : t.info(`Skipping copy of edge `, a4.v, `-->`, a4.w, ` rootId: `, i2, ` clusterId:`, e2);
        } catch (e3) {
          t.error(e3);
        }
      });
    }
    t.debug(`Removing node`, a3), n2.removeNode(a3);
  });
}, `copy`), j = n((e2, t2) => {
  let n2 = t2.children(e2), r2 = [...n2];
  for (let i2 of n2) E.set(i2, e2), r2 = [...r2, ...j(i2, t2)];
  return r2;
}, `extractDescendants`), M = n((e2, t2, n2) => {
  let r2 = e2.edges().filter((e3) => e3.v === t2 || e3.w === t2), i2 = e2.edges().filter((e3) => e3.v === n2 || e3.w === n2), a2 = r2.map((e3) => ({ v: e3.v === t2 ? n2 : e3.v, w: e3.w === t2 ? t2 : e3.w })), o2 = i2.map((e3) => ({ v: e3.v, w: e3.w }));
  return a2.filter((e3) => o2.some((t3) => e3.v === t3.v && e3.w === t3.w));
}, `findCommonEdges`), N = n((e2, n2, r2) => {
  let i2 = n2.children(e2);
  if (t.trace(`Searching children of id `, e2, i2), i2.length < 1) return e2;
  let a2;
  for (let e3 of i2) {
    let t2 = N(e3, n2, r2), i3 = M(n2, r2, t2);
    if (t2) if (i3.length > 0) a2 = t2;
    else return t2;
  }
  return a2;
}, `findNonClusterChild`), P = n((e2) => !w.has(e2) || !w.get(e2).externalConnections ? e2 : w.has(e2) ? w.get(e2).id : e2, `getAnchorId`), F = n((e2, n2) => {
  if (!e2 || n2 > 10) {
    t.debug(`Opting out, no graph `);
    return;
  } else t.debug(`Opting in, graph `);
  e2.nodes().forEach(function(n3) {
    e2.children(n3).length > 0 && (t.warn(`Cluster identified`, n3, ` Replacement id in edges: `, N(n3, e2, n3)), T.set(n3, j(n3, e2)), w.set(n3, { id: N(n3, e2, n3), clusterData: e2.node(n3) }));
  }), e2.nodes().forEach(function(n3) {
    let r2 = e2.children(n3), i2 = e2.edges();
    r2.length > 0 ? (t.debug(`Cluster identified`, n3, T), i2.forEach((e3) => {
      O(e3.v, n3) ^ O(e3.w, n3) && (t.warn(`Edge: `, e3, ` leaves cluster `, n3), t.warn(`Descendants of XXX `, n3, `: `, T.get(n3)), w.get(n3).externalConnections = true);
    })) : t.debug(`Not a cluster `, n3, T);
  });
  for (let t2 of w.keys()) {
    let n3 = w.get(t2).id, r2 = e2.parent(n3);
    r2 !== t2 && w.has(r2) && !w.get(r2).externalConnections && (w.get(t2).id = r2);
  }
  e2.edges().forEach(function(n3) {
    let r2 = e2.edge(n3);
    t.warn(`Edge ` + n3.v + ` -> ` + n3.w + `: ` + JSON.stringify(n3)), t.warn(`Edge ` + n3.v + ` -> ` + n3.w + `: ` + JSON.stringify(e2.edge(n3)));
    let i2 = n3.v, a2 = n3.w;
    if (t.warn(`Fix XXX`, w, `ids:`, n3.v, n3.w, `Translating: `, w.get(n3.v), ` --- `, w.get(n3.w)), w.get(n3.v) || w.get(n3.w)) {
      if (t.warn(`Fixing and trying - removing XXX`, n3.v, n3.w, n3.name), i2 = P(n3.v), a2 = P(n3.w), e2.removeEdge(n3.v, n3.w, n3.name), i2 !== n3.v) {
        let t2 = e2.parent(i2);
        w.get(t2).externalConnections = true, r2.fromCluster = n3.v;
      }
      if (a2 !== n3.w) {
        let t2 = e2.parent(a2);
        w.get(t2).externalConnections = true, r2.toCluster = n3.w;
      }
      t.warn(`Fix Replacing with XXX`, i2, a2, n3.name), e2.setEdge(i2, a2, r2, n3.name);
    }
  }), t.warn(`Adjusted Graph`, x(e2)), I(e2, 0), t.trace(w);
}, `adjustClustersAndEdges`), I = n((e2, n2) => {
  var _a, _b;
  if (t.warn(`extractor - `, n2, x(e2), e2.children(`D`)), n2 > 10) {
    t.error(`Bailing out`);
    return;
  }
  let r2 = e2.nodes(), i2 = false;
  for (let t2 of r2) {
    let n3 = e2.children(t2);
    i2 || (i2 = n3.length > 0);
  }
  if (!i2) {
    t.debug(`Done, no node has children`, e2.nodes());
    return;
  }
  t.debug(`Nodes = `, r2, n2);
  for (let i3 of r2) if (t.debug(`Extracting node`, i3, w, w.has(i3) && !w.get(i3).externalConnections, !e2.parent(i3), e2.node(i3), e2.children(`D`), ` Depth `, n2), !w.has(i3)) t.debug(`Not a cluster`, i3, n2);
  else if (!w.get(i3).externalConnections && e2.children(i3) && e2.children(i3).length > 0) {
    t.warn(`Cluster without external connections, without a parent and with children`, i3, n2);
    let r3 = e2.graph().rankdir === `TB` ? `LR` : `TB`;
    ((_b = (_a = w.get(i3)) == null ? void 0 : _a.clusterData) == null ? void 0 : _b.dir) && (r3 = w.get(i3).clusterData.dir, t.warn(`Fixing dir`, w.get(i3).clusterData.dir, r3));
    let a2 = new v({ multigraph: true, compound: true }).setGraph({ rankdir: r3, nodesep: 50, ranksep: 50, marginx: 8, marginy: 8 }).setDefaultEdgeLabel(function() {
      return {};
    });
    t.warn(`Old graph before copy`, x(e2)), A(i3, e2, a2, i3), e2.setNode(i3, { clusterNode: true, id: i3, clusterData: w.get(i3).clusterData, label: w.get(i3).label, graph: a2 }), t.warn(`New graph after copy node: (`, i3, `)`, x(a2)), t.debug(`Old graph after copy`, x(e2));
  } else t.warn(`Cluster ** `, i3, ` **not meeting the criteria !externalConnections:`, !w.get(i3).externalConnections, ` no parent: `, !e2.parent(i3), ` children `, e2.children(i3) && e2.children(i3).length > 0, e2.children(`D`), n2), t.debug(w);
  r2 = e2.nodes(), t.warn(`New list of nodes`, r2);
  for (let i3 of r2) {
    let r3 = e2.node(i3);
    t.warn(` Now next level`, i3, r3), (r3 == null ? void 0 : r3.clusterNode) && I(r3.graph, n2 + 1);
  }
}, `extractor`), L = n((e2, t2) => {
  if (t2.length === 0) return [];
  let n2 = Object.assign([], t2);
  return t2.forEach((t3) => {
    let r2 = L(e2, e2.children(t3));
    n2 = [...n2, ...r2];
  }), n2;
}, `sorter`), R = n((e2) => L(e2, e2.children()), `sortNodesByHierarchy`), z = n(async (e2, c2, l2, f2, h2, g2) => {
  t.warn(`Graph in recursive render:XAX`, x(c2), h2);
  let _2 = c2.graph().rankdir;
  t.trace(`Dir in recursive render - dir:`, _2);
  let v2 = e2.insert(`g`).attr(`class`, `root`);
  c2.nodes() ? t.info(`Recursive render XXX`, c2.nodes()) : t.info(`No nodes found for`, c2), c2.edges().length > 0 && t.info(`Recursive edges`, c2.edge(c2.edges()[0]));
  let y2 = v2.insert(`g`).attr(`class`, `clusters`), S2 = v2.insert(`g`).attr(`class`, `edgePaths`), C2 = v2.insert(`g`).attr(`class`, `edgeLabels`), T2 = v2.insert(`g`).attr(`class`, `nodes`);
  await Promise.all(c2.nodes().map(async function(e3) {
    let n2 = c2.node(e3);
    if (h2 !== void 0) {
      let n3 = JSON.parse(JSON.stringify(h2.clusterData));
      t.trace(`Setting data for parent cluster XXX
 Node.id = `, e3, `
 data=`, n3.height, `
Parent cluster`, h2.height), c2.setNode(h2.id, n3), c2.parent(e3) || (t.trace(`Setting parent`, e3, h2.id), c2.setParent(e3, h2.id, n3));
    }
    if (t.info(`(Insert) Node XXX` + e3 + `: ` + JSON.stringify(c2.node(e3))), n2 == null ? void 0 : n2.clusterNode) {
      t.info(`Cluster identified XBX`, e3, n2.width, c2.node(e3));
      let { ranksep: r2, nodesep: i2 } = c2.graph();
      n2.graph.setGraph({ ...n2.graph.graph(), ranksep: r2 + 25, nodesep: i2 });
      let a2 = await z(T2, n2.graph, l2, f2, c2.node(e3), g2), o2 = a2.elem;
      u(n2, o2), n2.diff = a2.diff || 0, t.info(`New compound node after recursive render XAX`, e3, `width`, n2.width, `height`, n2.height), s(o2, n2);
    } else c2.children(e3).length > 0 ? (t.trace(`Cluster - the non recursive path XBX`, e3, n2.id, n2, n2.width, `Graph:`, c2), t.trace(N(n2.id, c2)), w.set(n2.id, { id: N(n2.id, c2), node: n2 })) : (t.trace(`Node - the non recursive path XAX`, e3, T2, c2.node(e3), _2), await i(T2, c2.node(e3), { config: g2, dir: _2 }));
  })), await n(async () => {
    let e3 = c2.edges().map(async function(e4) {
      let n2 = c2.edge(e4.v, e4.w, e4.name);
      t.info(`Edge ` + e4.v + ` -> ` + e4.w + `: ` + JSON.stringify(e4)), t.info(`Edge ` + e4.v + ` -> ` + e4.w + `: `, e4, ` `, JSON.stringify(c2.edge(e4))), t.info(`Fix`, w, `ids:`, e4.v, e4.w, `Translating: `, w.get(e4.v), w.get(e4.w)), await m(C2, n2);
    });
    await Promise.all(e3);
  }, `processEdges`)(), t.info(`Graph before layout:`, JSON.stringify(x(c2))), t.info(`############################################# XXX`), t.info(`###                Layout                 ### XXX`), t.info(`############################################# XXX`), b(c2), t.info(`Graph after layout:`, JSON.stringify(x(c2)));
  let E2 = 0, { subGraphTitleTotalMargin: D2 } = r(g2);
  return await Promise.all(R(c2).map(async function(e3) {
    var _a;
    let n2 = c2.node(e3);
    if (t.info(`Position XBX => ` + e3 + `: (` + n2.x, `,` + n2.y, `) width: `, n2.width, ` height: `, n2.height), n2 == null ? void 0 : n2.clusterNode) n2.y += D2, t.info(`A tainted cluster node XBX1`, e3, n2.id, n2.width, n2.height, n2.x, n2.y, c2.parent(e3)), w.get(n2.id).node = n2, a(n2);
    else if (c2.children(e3).length > 0) {
      t.info(`A pure cluster node XBX1`, e3, n2.id, n2.x, n2.y, n2.width, n2.height, c2.parent(e3)), n2.height += D2, c2.node(n2.parentId);
      let r2 = (n2 == null ? void 0 : n2.padding) / 2 || 0, i2 = ((_a = n2 == null ? void 0 : n2.labelBBox) == null ? void 0 : _a.height) || 0, a2 = i2 - r2 || 0;
      t.debug(`OffsetY`, a2, `labelHeight`, i2, `halfPadding`, r2), await o(y2, n2), w.get(n2.id).node = n2;
    } else {
      let e4 = c2.node(n2.parentId);
      n2.y += D2 / 2, t.info(`A regular node XBX1 - using the padding`, n2.id, `parent`, n2.parentId, n2.width, n2.height, n2.x, n2.y, `offsetY`, n2.offsetY, `parent`, e4, e4 == null ? void 0 : e4.offsetY, n2), a(n2);
    }
  })), c2.edges().forEach(function(e3) {
    let n2 = c2.edge(e3);
    t.info(`Edge ` + e3.v + ` -> ` + e3.w + `: ` + JSON.stringify(n2), n2), n2.points.forEach((e4) => e4.y += D2 / 2), d(n2, p(S2, n2, w, l2, c2.node(e3.v), c2.node(e3.w), f2));
  }), c2.nodes().forEach(function(e3) {
    let n2 = c2.node(e3);
    t.info(e3, n2.type, n2.diff), n2.isGroup && (E2 = n2.diff);
  }), t.warn(`Returning from recursive render XAX`, v2, E2), { elem: v2, diff: E2 };
}, `recursiveRender`), B = n(async (n2, r2) => {
  var _a, _b, _c, _d, _e, _f;
  let i2 = new v({ multigraph: true, compound: true }).setGraph({ rankdir: n2.direction, nodesep: ((_a = n2.config) == null ? void 0 : _a.nodeSpacing) || ((_c = (_b = n2.config) == null ? void 0 : _b.flowchart) == null ? void 0 : _c.nodeSpacing) || n2.nodeSpacing, ranksep: ((_d = n2.config) == null ? void 0 : _d.rankSpacing) || ((_f = (_e = n2.config) == null ? void 0 : _e.flowchart) == null ? void 0 : _f.rankSpacing) || n2.rankSpacing, marginx: 8, marginy: 8 }).setDefaultEdgeLabel(function() {
    return {};
  }), a2 = r2.select(`g`);
  f(a2, n2.markers, n2.type, n2.diagramId), c(), h(), l(), D(), n2.nodes.forEach((e2) => {
    i2.setNode(e2.id, { ...e2 }), e2.parentId && i2.setParent(e2.id, e2.parentId);
  }), t.debug(`Edges:`, n2.edges), n2.edges.forEach((e2) => {
    if (e2.start === e2.end) {
      let t2 = e2.start, n3 = t2 + `---` + t2 + `---1`, r3 = t2 + `---` + t2 + `---2`, a3 = i2.node(t2);
      i2.setNode(n3, { domId: n3, id: n3, parentId: a3.parentId, labelStyle: ``, label: ``, padding: 0, shape: `labelRect`, style: ``, width: 10, height: 10 }), i2.setParent(n3, a3.parentId), i2.setNode(r3, { domId: r3, id: r3, parentId: a3.parentId, labelStyle: ``, padding: 0, shape: `labelRect`, label: ``, style: ``, width: 10, height: 10 }), i2.setParent(r3, a3.parentId);
      let o3 = structuredClone(e2), s2 = structuredClone(e2), c2 = structuredClone(e2);
      o3.label = ``, o3.arrowTypeEnd = `none`, o3.id = t2 + `-cyclic-special-1`, s2.arrowTypeStart = `none`, s2.arrowTypeEnd = `none`, s2.id = t2 + `-cyclic-special-mid`, c2.label = ``, a3.isGroup && (o3.fromCluster = t2, c2.toCluster = t2), c2.id = t2 + `-cyclic-special-2`, c2.arrowTypeStart = `none`, i2.setEdge(t2, n3, o3, t2 + `-cyclic-special-0`), i2.setEdge(n3, r3, s2, t2 + `-cyclic-special-1`), i2.setEdge(r3, t2, c2, t2 + `-cyc<lic-special-2`);
    } else i2.setEdge(e2.start, e2.end, { ...e2 }, e2.id);
  }), t.warn(`Graph at first:`, JSON.stringify(x(i2))), F(i2), t.warn(`Graph after XAX:`, JSON.stringify(x(i2)));
  let o2 = e();
  await z(a2, i2, n2.type, n2.diagramId, void 0, o2);
}, `render`);
export {
  B as render
};
