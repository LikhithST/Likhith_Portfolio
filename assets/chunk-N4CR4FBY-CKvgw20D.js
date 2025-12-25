const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/dagre-6UL2VRFP-pBzA4jAw.js","assets/chunk-ABZYJK2D-ODb6qSou.js","assets/src-D8UWkQNo.js","assets/chunk-CXUkj53v.js","assets/dist-DrVb-WkD.js","assets/chunk-JA3XYJ7Z-By1gQAUK.js","assets/chunk-S3R3BYOJ-D8yhV3IZ.js","assets/math-O_7OW4FW.js","assets/identity-IHMFXfGJ.js","assets/path-B-GLhb_8.js","assets/array-CopOK-GI.js","assets/line-DzDDQdde.js","assets/dagre-DFBV6fTk.js","assets/graphlib-Ct7gWg8T.js","assets/isEmpty-Suvitui-.js","assets/reduce-S4_EnTW-.js","assets/flatten-DG1tNxhW.js","assets/clone-Bi4b2wkd.js","assets/chunk-ATLVNIR6-6j91LnhU.js","assets/chunk-CVBHYZKI-9IS-TY3G.js","assets/chunk-HN2XXSSU-SCO0eetj.js","assets/chunk-JZLCHNYA-BantgYUJ.js","assets/chunk-QXUST7PY-BALPMe08.js","assets/cose-bilkent-S5V4N54A-cHdPDtxa.js","assets/cytoscape.esm-DGsSD2nE.js"])))=>i.map(i=>d[i]);
import { rt as e, s as t, y as n, __tla as __tla_0 } from "./chunk-ABZYJK2D-ODb6qSou.js";
import { g as r, h as i } from "./src-D8UWkQNo.js";
import { d as a } from "./chunk-S3R3BYOJ-D8yhV3IZ.js";
import { a as o, i as s, s as c } from "./chunk-JZLCHNYA-BantgYUJ.js";
import { a as l, i as u, n as d, r as f } from "./chunk-QXUST7PY-BALPMe08.js";
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
        loader: i(async () => await e(() => import("./dagre-6UL2VRFP-pBzA4jAw.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])), `loader`)
      },
      ...[
        {
          name: `cose-bilkent`,
          loader: i(async () => await e(() => import("./cose-bilkent-S5V4N54A-cHdPDtxa.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }), __vite__mapDeps([23,24,2,3])), `loader`)
        }
      ]
    ]);
  }, `registerDefaultLayoutLoaders`)();
  g = i(async (e2, t2) => {
    if (!(e2.layoutAlgorithm in m)) throw Error(`Unknown layout algorithm: ${e2.layoutAlgorithm}`);
    let n2 = m[e2.layoutAlgorithm];
    return (await n2.loader()).render(e2, t2, p, {
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
