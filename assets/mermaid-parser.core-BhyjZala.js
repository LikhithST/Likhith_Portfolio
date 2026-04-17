const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/info-OMHHGYJF-CO3Vlgz-.js","assets/chunk-K5T4RW27-CzljlcrI.js","assets/isEmpty-DOQ62aC5.js","assets/identity-B9owP9ru.js","assets/reduce-mGdWE-KL.js","assets/flatten-CqtkwEvn.js","assets/chunk-klrzTbvl.js","assets/chunk-KGLVRYIC-BC3qp-Ss.js","assets/packet-4T2RLAQJ-CrcE-ZTI.js","assets/chunk-FOC6F5B3-OxJqr3tu.js","assets/pie-ZZUOXDRM-BzaGYoqW.js","assets/chunk-AA7GKIK3-H6knSMUZ.js","assets/treeView-SZITEDCU-exNZkk5Q.js","assets/chunk-ORNJ4GCN-DkoYmq2g.js","assets/architecture-YZFGNWBL-C08IWumR.js","assets/chunk-7N4EOEYR-cGcAQvpO.js","assets/gitGraph-7Q5UKJZL-3f7DzSho.js","assets/chunk-67CJDMHE-X0heNxj0.js","assets/radar-PYXPWWZC-82v6RmeC.js","assets/chunk-2KRD3SAO-BhrV7a2r.js","assets/treemap-W4RFUUIX-BzrtpMPK.js","assets/chunk-LIHQZDEY-D-TcdTVz.js","assets/wardley-RL74JXVD-D6pWqOte.js","assets/chunk-CIAEETIT-B3M4TTX-.js"])))=>i.map(i=>d[i]);
import { at as e, __tla as __tla_0 } from "./chunk-ICPOFSXX-cosQBm9P.js";
import { m as t } from "./chunk-K5T4RW27-CzljlcrI.js";
let i;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var _a;
  var n = {}, r = {
    info: t(async () => {
      let { createInfoServices: t2 } = await e(async () => {
        let { createInfoServices: e2 } = await import("./info-OMHHGYJF-CO3Vlgz-.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          createInfoServices: e2
        };
      }, __vite__mapDeps([0,1,2,3,4,5,6,7]));
      n.info = t2().Info.parser.LangiumParser;
    }, `info`),
    packet: t(async () => {
      let { createPacketServices: t2 } = await e(async () => {
        let { createPacketServices: e2 } = await import("./packet-4T2RLAQJ-CrcE-ZTI.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          createPacketServices: e2
        };
      }, __vite__mapDeps([8,1,2,3,4,5,6,9]));
      n.packet = t2().Packet.parser.LangiumParser;
    }, `packet`),
    pie: t(async () => {
      let { createPieServices: t2 } = await e(async () => {
        let { createPieServices: e2 } = await import("./pie-ZZUOXDRM-BzaGYoqW.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          createPieServices: e2
        };
      }, __vite__mapDeps([10,1,2,3,4,5,6,11]));
      n.pie = t2().Pie.parser.LangiumParser;
    }, `pie`),
    treeView: t(async () => {
      let { createTreeViewServices: t2 } = await e(async () => {
        let { createTreeViewServices: e2 } = await import("./treeView-SZITEDCU-exNZkk5Q.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          createTreeViewServices: e2
        };
      }, __vite__mapDeps([12,1,2,3,4,5,6,13]));
      n.treeView = t2().TreeView.parser.LangiumParser;
    }, `treeView`),
    architecture: t(async () => {
      let { createArchitectureServices: t2 } = await e(async () => {
        let { createArchitectureServices: e2 } = await import("./architecture-YZFGNWBL-C08IWumR.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          createArchitectureServices: e2
        };
      }, __vite__mapDeps([14,1,2,3,4,5,6,15]));
      n.architecture = t2().Architecture.parser.LangiumParser;
    }, `architecture`),
    gitGraph: t(async () => {
      let { createGitGraphServices: t2 } = await e(async () => {
        let { createGitGraphServices: e2 } = await import("./gitGraph-7Q5UKJZL-3f7DzSho.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          createGitGraphServices: e2
        };
      }, __vite__mapDeps([16,1,2,3,4,5,6,17]));
      n.gitGraph = t2().GitGraph.parser.LangiumParser;
    }, `gitGraph`),
    radar: t(async () => {
      let { createRadarServices: t2 } = await e(async () => {
        let { createRadarServices: e2 } = await import("./radar-PYXPWWZC-82v6RmeC.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          createRadarServices: e2
        };
      }, __vite__mapDeps([18,1,2,3,4,5,6,19]));
      n.radar = t2().Radar.parser.LangiumParser;
    }, `radar`),
    treemap: t(async () => {
      let { createTreemapServices: t2 } = await e(async () => {
        let { createTreemapServices: e2 } = await import("./treemap-W4RFUUIX-BzrtpMPK.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          createTreemapServices: e2
        };
      }, __vite__mapDeps([20,1,2,3,4,5,6,21]));
      n.treemap = t2().Treemap.parser.LangiumParser;
    }, `treemap`),
    wardley: t(async () => {
      let { createWardleyServices: t2 } = await e(async () => {
        let { createWardleyServices: e2 } = await import("./wardley-RL74JXVD-D6pWqOte.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          createWardleyServices: e2
        };
      }, __vite__mapDeps([22,1,2,3,4,5,6,23]));
      n.wardley = t2().Wardley.parser.LangiumParser;
    }, `wardley`)
  };
  i = async function(e2, t2) {
    let i2 = r[e2];
    if (!i2) throw Error(`Unknown diagram type: ${e2}`);
    n[e2] || await i2();
    let o = n[e2].parse(t2);
    if (o.lexerErrors.length > 0 || o.parserErrors.length > 0) throw new a(o);
    return o.value;
  };
  t(i, `parse`);
  var a = (_a = class extends Error {
    constructor(e2) {
      let t2 = e2.lexerErrors.map((e3) => `Lexer error on line ${e3.line !== void 0 && !isNaN(e3.line) ? e3.line : `?`}, column ${e3.column !== void 0 && !isNaN(e3.column) ? e3.column : `?`}: ${e3.message}`).join(`
`), n2 = e2.parserErrors.map((e3) => `Parse error on line ${e3.token.startLine !== void 0 && !isNaN(e3.token.startLine) ? e3.token.startLine : `?`}, column ${e3.token.startColumn !== void 0 && !isNaN(e3.token.startColumn) ? e3.token.startColumn : `?`}: ${e3.message}`).join(`
`);
      super(`Parsing failed: ${t2} ${n2}`), this.result = e2;
    }
  }, t(_a, `MermaidParseError`), _a);
});
export {
  __tla,
  i as t
};
