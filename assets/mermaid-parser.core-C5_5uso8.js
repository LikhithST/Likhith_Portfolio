const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/info-OMHHGYJF-C4kkAwZW.js","assets/chunk-K5T4RW27-OuehT3M0.js","assets/index-4Ava25sD.js","assets/index-EilHf_F5.css","assets/reduce-BYgg84dj.js","assets/flatten-COzv_UkG.js","assets/chunk-KGLVRYIC-B7L8tDEY.js","assets/packet-4T2RLAQJ-De_ZDW_d.js","assets/chunk-FOC6F5B3-B63lKV-F.js","assets/pie-ZZUOXDRM-DbmbZG13.js","assets/chunk-AA7GKIK3-D5IXgCR6.js","assets/treeView-SZITEDCU-DTo4W69P.js","assets/chunk-ORNJ4GCN-9SMZAFfc.js","assets/architecture-YZFGNWBL-B7AJhSgo.js","assets/chunk-7N4EOEYR-D1jf8gU4.js","assets/gitGraph-7Q5UKJZL-rqeoaU-x.js","assets/chunk-67CJDMHE-DkrmGhRn.js","assets/radar-PYXPWWZC-DRlw20bj.js","assets/chunk-2KRD3SAO-CNzDCA3U.js","assets/treemap-W4RFUUIX-D6r8jzy3.js","assets/chunk-LIHQZDEY-eWu76TC0.js","assets/wardley-RL74JXVD-Dkfy67SG.js","assets/chunk-CIAEETIT-u0HN2vK9.js"])))=>i.map(i=>d[i]);
import { Zn as e, __tla as __tla_0 } from "./index-4Ava25sD.js";
import { m as t } from "./chunk-K5T4RW27-OuehT3M0.js";
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
        let { createInfoServices: e2 } = await import("./info-OMHHGYJF-C4kkAwZW.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          createInfoServices: e2
        };
      }, __vite__mapDeps([0,1,2,3,4,5,6]));
      n.info = t2().Info.parser.LangiumParser;
    }, `info`),
    packet: t(async () => {
      let { createPacketServices: t2 } = await e(async () => {
        let { createPacketServices: e2 } = await import("./packet-4T2RLAQJ-De_ZDW_d.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          createPacketServices: e2
        };
      }, __vite__mapDeps([7,1,2,3,4,5,8]));
      n.packet = t2().Packet.parser.LangiumParser;
    }, `packet`),
    pie: t(async () => {
      let { createPieServices: t2 } = await e(async () => {
        let { createPieServices: e2 } = await import("./pie-ZZUOXDRM-DbmbZG13.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          createPieServices: e2
        };
      }, __vite__mapDeps([9,1,2,3,4,5,10]));
      n.pie = t2().Pie.parser.LangiumParser;
    }, `pie`),
    treeView: t(async () => {
      let { createTreeViewServices: t2 } = await e(async () => {
        let { createTreeViewServices: e2 } = await import("./treeView-SZITEDCU-DTo4W69P.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          createTreeViewServices: e2
        };
      }, __vite__mapDeps([11,1,2,3,4,5,12]));
      n.treeView = t2().TreeView.parser.LangiumParser;
    }, `treeView`),
    architecture: t(async () => {
      let { createArchitectureServices: t2 } = await e(async () => {
        let { createArchitectureServices: e2 } = await import("./architecture-YZFGNWBL-B7AJhSgo.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          createArchitectureServices: e2
        };
      }, __vite__mapDeps([13,1,2,3,4,5,14]));
      n.architecture = t2().Architecture.parser.LangiumParser;
    }, `architecture`),
    gitGraph: t(async () => {
      let { createGitGraphServices: t2 } = await e(async () => {
        let { createGitGraphServices: e2 } = await import("./gitGraph-7Q5UKJZL-rqeoaU-x.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          createGitGraphServices: e2
        };
      }, __vite__mapDeps([15,1,2,3,4,5,16]));
      n.gitGraph = t2().GitGraph.parser.LangiumParser;
    }, `gitGraph`),
    radar: t(async () => {
      let { createRadarServices: t2 } = await e(async () => {
        let { createRadarServices: e2 } = await import("./radar-PYXPWWZC-DRlw20bj.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          createRadarServices: e2
        };
      }, __vite__mapDeps([17,1,2,3,4,5,18]));
      n.radar = t2().Radar.parser.LangiumParser;
    }, `radar`),
    treemap: t(async () => {
      let { createTreemapServices: t2 } = await e(async () => {
        let { createTreemapServices: e2 } = await import("./treemap-W4RFUUIX-D6r8jzy3.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          createTreemapServices: e2
        };
      }, __vite__mapDeps([19,1,2,3,4,5,20]));
      n.treemap = t2().Treemap.parser.LangiumParser;
    }, `treemap`),
    wardley: t(async () => {
      let { createWardleyServices: t2 } = await e(async () => {
        let { createWardleyServices: e2 } = await import("./wardley-RL74JXVD-Dkfy67SG.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          createWardleyServices: e2
        };
      }, __vite__mapDeps([21,1,2,3,4,5,22]));
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
