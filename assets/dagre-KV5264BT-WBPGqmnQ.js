import { Jn as e, Sn as t, Yn as n, _ as r, c as i, d as a, f as o, h as s, k as c, l, m as u, p as d, s as f, u as p, v as m, y as h } from "./index-4Ava25sD.js";
import "./reduce-BYgg84dj.js";
import { a as g } from "./flatten-COzv_UkG.js";
import { n as _, t as v } from "./graphlib-ByIJZzv_.js";
import { t as y } from "./clone--oFhIp0S.js";
import { t as b } from "./dagre-D5G0UzAB.js";
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
var w = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), D = e(() => {
  T.clear(), E.clear(), w.clear();
}, `clear`), O = e((e2, t2) => {
  let r2 = T.get(t2) || [];
  return n.trace(`In isDescendant`, t2, ` `, e2, ` = `, r2.includes(e2)), r2.includes(e2);
}, `isDescendant`), k = e((e2, t2) => {
  let r2 = T.get(t2) || [];
  return n.info(`Descendants of `, t2, ` is `, r2), n.info(`Edge is `, e2), e2.v === t2 || e2.w === t2 ? false : r2 ? r2.includes(e2.v) || O(e2.v, t2) || O(e2.w, t2) || r2.includes(e2.w) : (n.debug(`Tilt, `, t2, `,not in descendants`), false);
}, `edgeInCluster`), A = e((e2, t2, r2, i2) => {
  n.warn(`Copying children of `, e2, `root`, i2, `data`, t2.node(e2), i2);
  let a2 = t2.children(e2) || [];
  e2 !== i2 && a2.push(e2), n.warn(`Copying (nodes) clusterId`, e2, `nodes`, a2), a2.forEach((a3) => {
    if (t2.children(a3).length > 0) A(a3, t2, r2, i2);
    else {
      let o2 = t2.node(a3);
      n.info(`cp `, a3, ` to `, i2, ` with parent `, e2), r2.setNode(a3, o2), i2 !== t2.parent(a3) && (n.warn(`Setting parent`, a3, t2.parent(a3)), r2.setParent(a3, t2.parent(a3))), e2 !== i2 && a3 !== e2 ? (n.debug(`Setting parent`, a3, e2), r2.setParent(a3, e2)) : (n.info(`In copy `, e2, `root`, i2, `data`, t2.node(e2), i2), n.debug(`Not Setting parent for node=`, a3, `cluster!==rootId`, e2 !== i2, `node!==clusterId`, a3 !== e2));
      let s2 = t2.edges(a3);
      n.debug(`Copying Edges`, s2), s2.forEach((a4) => {
        n.info(`Edge`, a4);
        let o3 = t2.edge(a4.v, a4.w, a4.name);
        n.info(`Edge data`, o3, i2);
        try {
          k(a4, i2) ? (n.info(`Copying as `, a4.v, a4.w, o3, a4.name), r2.setEdge(a4.v, a4.w, o3, a4.name), n.info(`newGraph edges `, r2.edges(), r2.edge(r2.edges()[0]))) : n.info(`Skipping copy of edge `, a4.v, `-->`, a4.w, ` rootId: `, i2, ` clusterId:`, e2);
        } catch (e3) {
          n.error(e3);
        }
      });
    }
    n.debug(`Removing node`, a3), t2.removeNode(a3);
  });
}, `copy`), j = e((e2, t2) => {
  let n2 = t2.children(e2), r2 = [...n2];
  for (let i2 of n2) E.set(i2, e2), r2 = [...r2, ...j(i2, t2)];
  return r2;
}, `extractDescendants`), M = e((e2, t2, n2) => {
  let r2 = e2.edges().filter((e3) => e3.v === t2 || e3.w === t2), i2 = e2.edges().filter((e3) => e3.v === n2 || e3.w === n2), a2 = r2.map((e3) => ({ v: e3.v === t2 ? n2 : e3.v, w: e3.w === t2 ? t2 : e3.w })), o2 = i2.map((e3) => ({ v: e3.v, w: e3.w }));
  return a2.filter((e3) => o2.some((t3) => e3.v === t3.v && e3.w === t3.w));
}, `findCommonEdges`), N = e((e2, t2, r2) => {
  let i2 = t2.children(e2);
  if (n.trace(`Searching children of id `, e2, i2), i2.length < 1) return e2;
  let a2;
  for (let e3 of i2) {
    let n2 = N(e3, t2, r2), i3 = M(t2, r2, n2);
    if (n2) if (i3.length > 0) a2 = n2;
    else return n2;
  }
  return a2;
}, `findNonClusterChild`), P = e((e2) => !w.has(e2) || !w.get(e2).externalConnections ? e2 : w.has(e2) ? w.get(e2).id : e2, `getAnchorId`), F = e((e2, t2) => {
  if (!e2 || t2 > 10) {
    n.debug(`Opting out, no graph `);
    return;
  } else n.debug(`Opting in, graph `);
  e2.nodes().forEach(function(t3) {
    e2.children(t3).length > 0 && (n.warn(`Cluster identified`, t3, ` Replacement id in edges: `, N(t3, e2, t3)), T.set(t3, j(t3, e2)), w.set(t3, { id: N(t3, e2, t3), clusterData: e2.node(t3) }));
  }), e2.nodes().forEach(function(t3) {
    let r2 = e2.children(t3), i2 = e2.edges();
    r2.length > 0 ? (n.debug(`Cluster identified`, t3, T), i2.forEach((e3) => {
      O(e3.v, t3) ^ O(e3.w, t3) && (n.warn(`Edge: `, e3, ` leaves cluster `, t3), n.warn(`Descendants of XXX `, t3, `: `, T.get(t3)), w.get(t3).externalConnections = true);
    })) : n.debug(`Not a cluster `, t3, T);
  });
  for (let t3 of w.keys()) {
    let n2 = w.get(t3).id, r2 = e2.parent(n2);
    r2 !== t3 && w.has(r2) && !w.get(r2).externalConnections && (w.get(t3).id = r2);
  }
  e2.edges().forEach(function(t3) {
    let r2 = e2.edge(t3);
    n.warn(`Edge ` + t3.v + ` -> ` + t3.w + `: ` + JSON.stringify(t3)), n.warn(`Edge ` + t3.v + ` -> ` + t3.w + `: ` + JSON.stringify(e2.edge(t3)));
    let i2 = t3.v, a2 = t3.w;
    if (n.warn(`Fix XXX`, w, `ids:`, t3.v, t3.w, `Translating: `, w.get(t3.v), ` --- `, w.get(t3.w)), w.get(t3.v) || w.get(t3.w)) {
      if (n.warn(`Fixing and trying - removing XXX`, t3.v, t3.w, t3.name), i2 = P(t3.v), a2 = P(t3.w), e2.removeEdge(t3.v, t3.w, t3.name), i2 !== t3.v) {
        let n2 = e2.parent(i2);
        w.get(n2).externalConnections = true, r2.fromCluster = t3.v;
      }
      if (a2 !== t3.w) {
        let n2 = e2.parent(a2);
        w.get(n2).externalConnections = true, r2.toCluster = t3.w;
      }
      n.warn(`Fix Replacing with XXX`, i2, a2, t3.name), e2.setEdge(i2, a2, r2, t3.name);
    }
  }), n.warn(`Adjusted Graph`, x(e2)), I(e2, 0), n.trace(w);
}, `adjustClustersAndEdges`), I = e((e2, t2) => {
  var _a, _b;
  if (n.warn(`extractor - `, t2, x(e2), e2.children(`D`)), t2 > 10) {
    n.error(`Bailing out`);
    return;
  }
  let r2 = e2.nodes(), i2 = false;
  for (let t3 of r2) {
    let n2 = e2.children(t3);
    i2 || (i2 = n2.length > 0);
  }
  if (!i2) {
    n.debug(`Done, no node has children`, e2.nodes());
    return;
  }
  n.debug(`Nodes = `, r2, t2);
  for (let i3 of r2) if (n.debug(`Extracting node`, i3, w, w.has(i3) && !w.get(i3).externalConnections, !e2.parent(i3), e2.node(i3), e2.children(`D`), ` Depth `, t2), !w.has(i3)) n.debug(`Not a cluster`, i3, t2);
  else if (!w.get(i3).externalConnections && e2.children(i3) && e2.children(i3).length > 0) {
    n.warn(`Cluster without external connections, without a parent and with children`, i3, t2);
    let r3 = e2.graph().rankdir === `TB` ? `LR` : `TB`;
    ((_b = (_a = w.get(i3)) == null ? void 0 : _a.clusterData) == null ? void 0 : _b.dir) && (r3 = w.get(i3).clusterData.dir, n.warn(`Fixing dir`, w.get(i3).clusterData.dir, r3));
    let a2 = new v({ multigraph: true, compound: true }).setGraph({ rankdir: r3, nodesep: 50, ranksep: 50, marginx: 8, marginy: 8 }).setDefaultEdgeLabel(function() {
      return {};
    });
    n.warn(`Old graph before copy`, x(e2)), A(i3, e2, a2, i3), e2.setNode(i3, { clusterNode: true, id: i3, clusterData: w.get(i3).clusterData, label: w.get(i3).label, graph: a2 }), n.warn(`New graph after copy node: (`, i3, `)`, x(a2)), n.debug(`Old graph after copy`, x(e2));
  } else n.warn(`Cluster ** `, i3, ` **not meeting the criteria !externalConnections:`, !w.get(i3).externalConnections, ` no parent: `, !e2.parent(i3), ` children `, e2.children(i3) && e2.children(i3).length > 0, e2.children(`D`), t2), n.debug(w);
  r2 = e2.nodes(), n.warn(`New list of nodes`, r2);
  for (let i3 of r2) {
    let r3 = e2.node(i3);
    n.warn(` Now next level`, i3, r3), (r3 == null ? void 0 : r3.clusterNode) && I(r3.graph, t2 + 1);
  }
}, `extractor`), L = e((e2, t2) => {
  if (t2.length === 0) return [];
  let n2 = Object.assign([], t2);
  return t2.forEach((t3) => {
    let r2 = L(e2, e2.children(t3));
    n2 = [...n2, ...r2];
  }), n2;
}, `sorter`), R = e((e2) => L(e2, e2.children()), `sortNodesByHierarchy`), z = e(async (t2, o2, d2, f2, p2, g2) => {
  n.warn(`Graph in recursive render:XAX`, x(o2), p2);
  let _2 = o2.graph().rankdir;
  n.trace(`Dir in recursive render - dir:`, _2);
  let v2 = t2.insert(`g`).attr(`class`, `root`);
  o2.nodes() ? n.info(`Recursive render XXX`, o2.nodes()) : n.info(`No nodes found for`, o2), o2.edges().length > 0 && n.info(`Recursive edges`, o2.edge(o2.edges()[0]));
  let y2 = v2.insert(`g`).attr(`class`, `clusters`), S2 = v2.insert(`g`).attr(`class`, `edgePaths`), C2 = v2.insert(`g`).attr(`class`, `edgeLabels`), T2 = v2.insert(`g`).attr(`class`, `nodes`);
  await Promise.all(o2.nodes().map(async function(e2) {
    let t3 = o2.node(e2);
    if (p2 !== void 0) {
      let t4 = JSON.parse(JSON.stringify(p2.clusterData));
      n.trace(`Setting data for parent cluster XXX
 Node.id = `, e2, `
 data=`, t4.height, `
Parent cluster`, p2.height), o2.setNode(p2.id, t4), o2.parent(e2) || (n.trace(`Setting parent`, e2, p2.id), o2.setParent(e2, p2.id, t4));
    }
    if (n.info(`(Insert) Node XXX` + e2 + `: ` + JSON.stringify(o2.node(e2))), t3 == null ? void 0 : t3.clusterNode) {
      n.info(`Cluster identified XBX`, e2, t3.width, o2.node(e2));
      let { ranksep: r2, nodesep: i2 } = o2.graph();
      t3.graph.setGraph({ ...t3.graph.graph(), ranksep: r2 + 25, nodesep: i2 });
      let a2 = await z(T2, t3.graph, d2, f2, o2.node(e2), g2), s2 = a2.elem;
      h(t3, s2), t3.diff = a2.diff || 0, n.info(`New compound node after recursive render XAX`, e2, `width`, t3.width, `height`, t3.height), m(s2, t3);
    } else o2.children(e2).length > 0 ? (n.trace(`Cluster - the non recursive path XBX`, e2, t3.id, t3, t3.width, `Graph:`, o2), n.trace(N(t3.id, o2)), w.set(t3.id, { id: N(t3.id, o2), node: t3 })) : (n.trace(`Node - the non recursive path XAX`, e2, T2, o2.node(e2), _2), await s(T2, o2.node(e2), { config: g2, dir: _2 }));
  })), await e(async () => {
    let e2 = o2.edges().map(async function(e3) {
      let t3 = o2.edge(e3.v, e3.w, e3.name);
      n.info(`Edge ` + e3.v + ` -> ` + e3.w + `: ` + JSON.stringify(e3)), n.info(`Edge ` + e3.v + ` -> ` + e3.w + `: `, e3, ` `, JSON.stringify(o2.edge(e3))), n.info(`Fix`, w, `ids:`, e3.v, e3.w, `Translating: `, w.get(e3.v), w.get(e3.w)), await l(C2, t3);
    });
    await Promise.all(e2);
  }, `processEdges`)(), n.info(`Graph before layout:`, JSON.stringify(x(o2))), n.info(`############################################# XXX`), n.info(`###                Layout                 ### XXX`), n.info(`############################################# XXX`), b(o2), n.info(`Graph after layout:`, JSON.stringify(x(o2)));
  let E2 = 0, { subGraphTitleTotalMargin: D2 } = c(g2);
  return await Promise.all(R(o2).map(async function(e2) {
    var _a;
    let t3 = o2.node(e2);
    if (n.info(`Position XBX => ` + e2 + `: (` + t3.x, `,` + t3.y, `) width: `, t3.width, ` height: `, t3.height), t3 == null ? void 0 : t3.clusterNode) t3.y += D2, n.info(`A tainted cluster node XBX1`, e2, t3.id, t3.width, t3.height, t3.x, t3.y, o2.parent(e2)), w.get(t3.id).node = t3, r(t3);
    else if (o2.children(e2).length > 0) {
      n.info(`A pure cluster node XBX1`, e2, t3.id, t3.x, t3.y, t3.width, t3.height, o2.parent(e2)), t3.height += D2, o2.node(t3.parentId);
      let r2 = (t3 == null ? void 0 : t3.padding) / 2 || 0, i2 = ((_a = t3 == null ? void 0 : t3.labelBBox) == null ? void 0 : _a.height) || 0, a2 = i2 - r2 || 0;
      n.debug(`OffsetY`, a2, `labelHeight`, i2, `halfPadding`, r2), await u(y2, t3), w.get(t3.id).node = t3;
    } else {
      let e3 = o2.node(t3.parentId);
      t3.y += D2 / 2, n.info(`A regular node XBX1 - using the padding`, t3.id, `parent`, t3.parentId, t3.width, t3.height, t3.x, t3.y, `offsetY`, t3.offsetY, `parent`, e3, e3 == null ? void 0 : e3.offsetY, t3), r(t3);
    }
  })), o2.edges().forEach(function(e2) {
    let t3 = o2.edge(e2);
    n.info(`Edge ` + e2.v + ` -> ` + e2.w + `: ` + JSON.stringify(t3), t3), t3.points.forEach((e3) => e3.y += D2 / 2), a(t3, i(S2, t3, w, d2, o2.node(e2.v), o2.node(e2.w), f2));
  }), o2.nodes().forEach(function(e2) {
    let t3 = o2.node(e2);
    n.info(e2, t3.type, t3.diff), t3.isGroup && (E2 = t3.diff);
  }), n.warn(`Returning from recursive render XAX`, v2, E2), { elem: v2, diff: E2 };
}, `recursiveRender`), B = e(async (e2, r2) => {
  var _a, _b, _c, _d, _e, _f;
  let i2 = new v({ multigraph: true, compound: true }).setGraph({ rankdir: e2.direction, nodesep: ((_a = e2.config) == null ? void 0 : _a.nodeSpacing) || ((_c = (_b = e2.config) == null ? void 0 : _b.flowchart) == null ? void 0 : _c.nodeSpacing) || e2.nodeSpacing, ranksep: ((_d = e2.config) == null ? void 0 : _d.rankSpacing) || ((_f = (_e = e2.config) == null ? void 0 : _e.flowchart) == null ? void 0 : _f.rankSpacing) || e2.rankSpacing, marginx: 8, marginy: 8 }).setDefaultEdgeLabel(function() {
    return {};
  }), a2 = r2.select(`g`);
  p(a2, e2.markers, e2.type, e2.diagramId), d(), f(), o(), D(), e2.nodes.forEach((e3) => {
    i2.setNode(e3.id, { ...e3 }), e3.parentId && i2.setParent(e3.id, e3.parentId);
  }), n.debug(`Edges:`, e2.edges), e2.edges.forEach((e3) => {
    if (e3.start === e3.end) {
      let t2 = e3.start, n2 = t2 + `---` + t2 + `---1`, r3 = t2 + `---` + t2 + `---2`, a3 = i2.node(t2);
      i2.setNode(n2, { domId: n2, id: n2, parentId: a3.parentId, labelStyle: ``, label: ``, padding: 0, shape: `labelRect`, style: ``, width: 10, height: 10 }), i2.setParent(n2, a3.parentId), i2.setNode(r3, { domId: r3, id: r3, parentId: a3.parentId, labelStyle: ``, padding: 0, shape: `labelRect`, label: ``, style: ``, width: 10, height: 10 }), i2.setParent(r3, a3.parentId);
      let o2 = structuredClone(e3), s3 = structuredClone(e3), c2 = structuredClone(e3);
      o2.label = ``, o2.arrowTypeEnd = `none`, o2.id = t2 + `-cyclic-special-1`, s3.arrowTypeStart = `none`, s3.arrowTypeEnd = `none`, s3.id = t2 + `-cyclic-special-mid`, c2.label = ``, a3.isGroup && (o2.fromCluster = t2, c2.toCluster = t2), c2.id = t2 + `-cyclic-special-2`, c2.arrowTypeStart = `none`, i2.setEdge(t2, n2, o2, t2 + `-cyclic-special-0`), i2.setEdge(n2, r3, s3, t2 + `-cyclic-special-1`), i2.setEdge(r3, t2, c2, t2 + `-cyc<lic-special-2`);
    } else i2.setEdge(e3.start, e3.end, { ...e3 }, e3.id);
  }), n.warn(`Graph at first:`, JSON.stringify(x(i2))), F(i2), n.warn(`Graph after XAX:`, JSON.stringify(x(i2)));
  let s2 = t();
  await z(a2, i2, e2.type, e2.diagramId, void 0, s2);
}, `render`);
export {
  B as render
};
