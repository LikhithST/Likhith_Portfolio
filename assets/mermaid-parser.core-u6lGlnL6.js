const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/info-OMHHGYJF-DB9vGGF2.js","assets/chunk-K5T4RW27-tz9qyvLz.js","assets/index-BgJKKt_a.js","assets/index-CwqkXNru.css","assets/reduce-Bhlg0TWY.js","assets/flatten-0eP1SDYC.js","assets/chunk-KGLVRYIC-DQYRvLid.js","assets/packet-4T2RLAQJ-BNVc0ylJ.js","assets/chunk-FOC6F5B3-p48mC7BT.js","assets/pie-ZZUOXDRM-DQOLCNMs.js","assets/chunk-AA7GKIK3-eJ4bEuZz.js","assets/treeView-SZITEDCU-xtZIApOh.js","assets/chunk-ORNJ4GCN-DjpLDsD7.js","assets/architecture-YZFGNWBL-BHj960xI.js","assets/chunk-7N4EOEYR-DTwTLFXJ.js","assets/gitGraph-7Q5UKJZL-D5RV6InJ.js","assets/chunk-67CJDMHE-CpN0Fvb8.js","assets/radar-PYXPWWZC-DvGjFOu_.js","assets/chunk-2KRD3SAO-CW7bIFU5.js","assets/treemap-W4RFUUIX-C_6xzseB.js","assets/chunk-LIHQZDEY-B-WuA8nY.js","assets/wardley-RL74JXVD-QoTmOrkz.js","assets/chunk-CIAEETIT-3D7O1i8C.js"])))=>i.map(i=>d[i]);
import { Zn as __vitePreload, __tla as __tla_0 } from "./index-BgJKKt_a.js";
import { m as __name } from "./chunk-K5T4RW27-tz9qyvLz.js";
let parse;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var _a;
  var parsers = {};
  var initializers = {
    info: __name(async () => {
      const { createInfoServices: createInfoServices2 } = await __vitePreload(async () => {
        const { createInfoServices: createInfoServices2$1 } = await import("./info-OMHHGYJF-DB9vGGF2.js");
        return {
          createInfoServices: createInfoServices2$1
        };
      }, __vite__mapDeps([0,1,2,3,4,5,6]));
      parsers.info = createInfoServices2().Info.parser.LangiumParser;
    }, "info"),
    packet: __name(async () => {
      const { createPacketServices: createPacketServices2 } = await __vitePreload(async () => {
        const { createPacketServices: createPacketServices2$1 } = await import("./packet-4T2RLAQJ-BNVc0ylJ.js");
        return {
          createPacketServices: createPacketServices2$1
        };
      }, __vite__mapDeps([7,1,2,3,4,5,8]));
      parsers.packet = createPacketServices2().Packet.parser.LangiumParser;
    }, "packet"),
    pie: __name(async () => {
      const { createPieServices: createPieServices2 } = await __vitePreload(async () => {
        const { createPieServices: createPieServices2$1 } = await import("./pie-ZZUOXDRM-DQOLCNMs.js");
        return {
          createPieServices: createPieServices2$1
        };
      }, __vite__mapDeps([9,1,2,3,4,5,10]));
      parsers.pie = createPieServices2().Pie.parser.LangiumParser;
    }, "pie"),
    treeView: __name(async () => {
      const { createTreeViewServices: createTreeViewServices2 } = await __vitePreload(async () => {
        const { createTreeViewServices: createTreeViewServices2$1 } = await import("./treeView-SZITEDCU-xtZIApOh.js");
        return {
          createTreeViewServices: createTreeViewServices2$1
        };
      }, __vite__mapDeps([11,1,2,3,4,5,12]));
      parsers.treeView = createTreeViewServices2().TreeView.parser.LangiumParser;
    }, "treeView"),
    architecture: __name(async () => {
      const { createArchitectureServices: createArchitectureServices2 } = await __vitePreload(async () => {
        const { createArchitectureServices: createArchitectureServices2$1 } = await import("./architecture-YZFGNWBL-BHj960xI.js");
        return {
          createArchitectureServices: createArchitectureServices2$1
        };
      }, __vite__mapDeps([13,1,2,3,4,5,14]));
      parsers.architecture = createArchitectureServices2().Architecture.parser.LangiumParser;
    }, "architecture"),
    gitGraph: __name(async () => {
      const { createGitGraphServices: createGitGraphServices2 } = await __vitePreload(async () => {
        const { createGitGraphServices: createGitGraphServices2$1 } = await import("./gitGraph-7Q5UKJZL-D5RV6InJ.js");
        return {
          createGitGraphServices: createGitGraphServices2$1
        };
      }, __vite__mapDeps([15,1,2,3,4,5,16]));
      parsers.gitGraph = createGitGraphServices2().GitGraph.parser.LangiumParser;
    }, "gitGraph"),
    radar: __name(async () => {
      const { createRadarServices: createRadarServices2 } = await __vitePreload(async () => {
        const { createRadarServices: createRadarServices2$1 } = await import("./radar-PYXPWWZC-DvGjFOu_.js");
        return {
          createRadarServices: createRadarServices2$1
        };
      }, __vite__mapDeps([17,1,2,3,4,5,18]));
      parsers.radar = createRadarServices2().Radar.parser.LangiumParser;
    }, "radar"),
    treemap: __name(async () => {
      const { createTreemapServices: createTreemapServices2 } = await __vitePreload(async () => {
        const { createTreemapServices: createTreemapServices2$1 } = await import("./treemap-W4RFUUIX-C_6xzseB.js");
        return {
          createTreemapServices: createTreemapServices2$1
        };
      }, __vite__mapDeps([19,1,2,3,4,5,20]));
      parsers.treemap = createTreemapServices2().Treemap.parser.LangiumParser;
    }, "treemap"),
    wardley: __name(async () => {
      const { createWardleyServices: createWardleyServices2 } = await __vitePreload(async () => {
        const { createWardleyServices: createWardleyServices2$1 } = await import("./wardley-RL74JXVD-QoTmOrkz.js");
        return {
          createWardleyServices: createWardleyServices2$1
        };
      }, __vite__mapDeps([21,1,2,3,4,5,22]));
      parsers.wardley = createWardleyServices2().Wardley.parser.LangiumParser;
    }, "wardley")
  };
  parse = async function(diagramType, text) {
    const initializer = initializers[diagramType];
    if (!initializer) throw new Error(`Unknown diagram type: ${diagramType}`);
    if (!parsers[diagramType]) await initializer();
    const result = parsers[diagramType].parse(text);
    if (result.lexerErrors.length > 0 || result.parserErrors.length > 0) throw new MermaidParseError(result);
    return result.value;
  };
  __name(parse, "parse");
  var MermaidParseError = (_a = class extends Error {
    constructor(result) {
      const lexerErrors = result.lexerErrors.map((err) => {
        return `Lexer error on line ${err.line !== void 0 && !isNaN(err.line) ? err.line : "?"}, column ${err.column !== void 0 && !isNaN(err.column) ? err.column : "?"}: ${err.message}`;
      }).join("\n");
      const parserErrors = result.parserErrors.map((err) => {
        return `Parse error on line ${err.token.startLine !== void 0 && !isNaN(err.token.startLine) ? err.token.startLine : "?"}, column ${err.token.startColumn !== void 0 && !isNaN(err.token.startColumn) ? err.token.startColumn : "?"}: ${err.message}`;
      }).join("\n");
      super(`Parsing failed: ${lexerErrors} ${parserErrors}`);
      this.result = result;
    }
  }, __name(_a, "MermaidParseError"), _a);
});
export {
  __tla,
  parse as t
};
