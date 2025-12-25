const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/info-NVLQJR56-Bxwm2tvX.js","assets/chunk-FPAJGGOC-C3gFAQ_Y.js","assets/isEmpty-Suvitui-.js","assets/identity-IHMFXfGJ.js","assets/reduce-S4_EnTW-.js","assets/flatten-DG1tNxhW.js","assets/chunk-CXUkj53v.js","assets/chunk-LBM3YZW2-B_3MR1yX.js","assets/packet-BFZMPI3H-C2yL9DJW.js","assets/chunk-76Q3JFCE-BoCXoCPi.js","assets/pie-7BOR55EZ-CueuETcs.js","assets/chunk-T53DSG4Q-CZaMHOwT.js","assets/architecture-U656AL7Q-C3oZIHTb.js","assets/chunk-O7ZBX7Z2-Bruh2zNs.js","assets/gitGraph-F6HP7TQM-bUF6WDRF.js","assets/chunk-S6J4BHB3-DAc_Mhl7.js","assets/radar-NHE76QYJ-SEWh2MWp.js","assets/chunk-LHMN2FUI-C3wDs2RB.js","assets/treemap-KMMF4GRG-CThXuBT8.js","assets/chunk-FWNWRKHM-Df_W1Cti.js"])))=>i.map(i=>d[i]);
import { rt as e, __tla as __tla_0 } from "./chunk-ABZYJK2D-ODb6qSou.js";
import { f as t } from "./chunk-FPAJGGOC-C3gFAQ_Y.js";
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
        let { createInfoServices: e2 } = await import("./info-NVLQJR56-Bxwm2tvX.js").then(async (m) => {
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
        let { createPacketServices: e2 } = await import("./packet-BFZMPI3H-C2yL9DJW.js").then(async (m) => {
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
        let { createPieServices: e2 } = await import("./pie-7BOR55EZ-CueuETcs.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          createPieServices: e2
        };
      }, __vite__mapDeps([10,1,2,3,4,5,6,11]));
      n.pie = t2().Pie.parser.LangiumParser;
    }, `pie`),
    architecture: t(async () => {
      let { createArchitectureServices: t2 } = await e(async () => {
        let { createArchitectureServices: e2 } = await import("./architecture-U656AL7Q-C3oZIHTb.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          createArchitectureServices: e2
        };
      }, __vite__mapDeps([12,1,2,3,4,5,6,13]));
      n.architecture = t2().Architecture.parser.LangiumParser;
    }, `architecture`),
    gitGraph: t(async () => {
      let { createGitGraphServices: t2 } = await e(async () => {
        let { createGitGraphServices: e2 } = await import("./gitGraph-F6HP7TQM-bUF6WDRF.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          createGitGraphServices: e2
        };
      }, __vite__mapDeps([14,1,2,3,4,5,6,15]));
      n.gitGraph = t2().GitGraph.parser.LangiumParser;
    }, `gitGraph`),
    radar: t(async () => {
      let { createRadarServices: t2 } = await e(async () => {
        let { createRadarServices: e2 } = await import("./radar-NHE76QYJ-SEWh2MWp.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          createRadarServices: e2
        };
      }, __vite__mapDeps([16,1,2,3,4,5,6,17]));
      n.radar = t2().Radar.parser.LangiumParser;
    }, `radar`),
    treemap: t(async () => {
      let { createTreemapServices: t2 } = await e(async () => {
        let { createTreemapServices: e2 } = await import("./treemap-KMMF4GRG-CThXuBT8.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          createTreemapServices: e2
        };
      }, __vite__mapDeps([18,1,2,3,4,5,6,19]));
      n.treemap = t2().Treemap.parser.LangiumParser;
    }, `treemap`)
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
      let t2 = e2.lexerErrors.map((e3) => e3.message).join(`
`), n2 = e2.parserErrors.map((e3) => e3.message).join(`
`);
      super(`Parsing failed: ${t2} ${n2}`), this.result = e2;
    }
  }, t(_a, `MermaidParseError`), _a);
});
export {
  __tla,
  i as t
};
