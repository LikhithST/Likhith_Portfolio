const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/dagre-KV5264BT-D3JRE8lQ.js","assets/chunk-ICPOFSXX-cosQBm9P.js","assets/src-DiRGiyL4.js","assets/chunk-klrzTbvl.js","assets/dist-BhM2qfql.js","assets/chunk-U2HBQHQK-hKpSiSuC.js","assets/chunk-5PVQY5BW-BPITZuxu.js","assets/identity-B9owP9ru.js","assets/path-CAD_RBb9.js","assets/array-BsT2bq1e.js","assets/line-JQWj2J5K.js","assets/dagre-D6rYN8fh.js","assets/graphlib-C1YJNT5s.js","assets/isEmpty-DOQ62aC5.js","assets/reduce-mGdWE-KL.js","assets/flatten-CqtkwEvn.js","assets/clone-CTxX_2du.js","assets/chunk-5FUZZQ4R-B6iWTsnj.js","assets/chunk-X2U36JSP-B8oHYWOH.js","assets/chunk-ZZ45TVLE-Dqea746l.js","assets/rough.esm-1QChbhql.js","assets/chunk-BSJP7CBP-B3RVoR71.js","assets/chunk-ENJZ2VHE-Dk0BFS66.js","assets/cose-bilkent-S5V4N54A-FbiHxYRH.js","assets/cytoscape.esm-D8iQ9qSD.js"])))=>i.map(i=>d[i]);
import { at as e, s as t, y as n, __tla as __tla_0 } from "./chunk-ICPOFSXX-cosQBm9P.js";
import { g as r, h as i } from "./src-DiRGiyL4.js";
import { d as a } from "./chunk-5PVQY5BW-BPITZuxu.js";
import { a as o, i as s, s as c } from "./chunk-5FUZZQ4R-B6iWTsnj.js";
import { a as l, i as u, n as d, r as f } from "./chunk-ENJZ2VHE-Dk0BFS66.js";
let h, g, _;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let p, m;
  p = {
    common: t,
    getConfig: n,
    insertCluster: s,
    insertEdge: d,
    insertEdgeLabel: f,
    insertMarkers: u,
    insertNode: o,
    interpolateToCurve: a,
    labelHelper: c,
    log: r,
    positionEdgeLabel: l
  };
  m = {};
  h = i((e2) => {
    for (let t2 of e2) m[t2.name] = t2;
  }, `registerLayoutLoaders`);
  i(() => {
    h([
      {
        name: `dagre`,
        loader: i(async () => await e(() => import("./dagre-KV5264BT-D3JRE8lQ.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])), `loader`)
      },
      ...[
        {
          name: `cose-bilkent`,
          loader: i(async () => await e(() => import("./cose-bilkent-S5V4N54A-FbiHxYRH.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }), __vite__mapDeps([23,24,2,3])), `loader`)
        }
      ]
    ]);
  }, `registerDefaultLayoutLoaders`)();
  g = i(async (e2, t2) => {
    if (!(e2.layoutAlgorithm in m)) throw Error(`Unknown layout algorithm: ${e2.layoutAlgorithm}`);
    if (e2.diagramId) for (let t3 of e2.nodes) {
      let n3 = t3.domId || t3.id;
      t3.domId = `${e2.diagramId}-${n3}`;
    }
    let n2 = m[e2.layoutAlgorithm], r2 = await n2.loader(), { theme: i2, themeVariables: a2 } = e2.config, { useGradient: o2, gradientStart: s2, gradientStop: c2 } = a2, l2 = t2.attr(`id`);
    if (t2.append(`defs`).append(`filter`).attr(`id`, `${l2}-drop-shadow`).attr(`height`, `130%`).attr(`width`, `130%`).append(`feDropShadow`).attr(`dx`, `4`).attr(`dy`, `4`).attr(`stdDeviation`, 0).attr(`flood-opacity`, `0.06`).attr(`flood-color`, `${(i2 == null ? void 0 : i2.includes(`dark`)) ? `#FFFFFF` : `#000000`}`), t2.append(`defs`).append(`filter`).attr(`id`, `${l2}-drop-shadow-small`).attr(`height`, `150%`).attr(`width`, `150%`).append(`feDropShadow`).attr(`dx`, `2`).attr(`dy`, `2`).attr(`stdDeviation`, 0).attr(`flood-opacity`, `0.06`).attr(`flood-color`, `${(i2 == null ? void 0 : i2.includes(`dark`)) ? `#FFFFFF` : `#000000`}`), o2) {
      let e3 = t2.append(`linearGradient`).attr(`id`, t2.attr(`id`) + `-gradient`).attr(`gradientUnits`, `objectBoundingBox`).attr(`x1`, `0%`).attr(`y1`, `0%`).attr(`x2`, `100%`).attr(`y2`, `0%`);
      e3.append(`svg:stop`).attr(`offset`, `0%`).attr(`stop-color`, s2).attr(`stop-opacity`, 1), e3.append(`svg:stop`).attr(`offset`, `100%`).attr(`stop-color`, c2).attr(`stop-opacity`, 1);
    }
    return r2.render(e2, t2, p, {
      algorithm: n2.algorithm
    });
  }, `render`);
  _ = i((e2 = ``, { fallback: t2 = `dagre` } = {}) => {
    if (e2 in m) return e2;
    if (t2 in m) return r.warn(`Layout algorithm ${e2} is not registered. Using ${t2} as fallback.`), t2;
    throw Error(`Both layout algorithms ${e2} and ${t2} are not registered.`);
  }, `getRegisteredLayoutAlgorithm`);
});
export {
  __tla,
  h as n,
  g as r,
  _ as t
};
