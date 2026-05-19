import { Jn as __name, Nt as selectSvgElement, Yn as log, gn as configureSvgSize } from "./index-BgJKKt_a.js";
import "./chunk-K5T4RW27-tz9qyvLz.js";
import "./reduce-Bhlg0TWY.js";
import "./flatten-0eP1SDYC.js";
import "./chunk-7N4EOEYR-DTwTLFXJ.js";
import "./chunk-67CJDMHE-CpN0Fvb8.js";
import "./chunk-KGLVRYIC-DQYRvLid.js";
import "./chunk-FOC6F5B3-p48mC7BT.js";
import "./chunk-AA7GKIK3-eJ4bEuZz.js";
import "./chunk-2KRD3SAO-CW7bIFU5.js";
import "./chunk-ORNJ4GCN-DjpLDsD7.js";
import "./chunk-LIHQZDEY-B-WuA8nY.js";
import "./chunk-CIAEETIT-3D7O1i8C.js";
import { t as parse } from "./mermaid-parser.core-u6lGlnL6.js";
var parser = { parse: /* @__PURE__ */ __name(async (input) => {
  const ast = await parse("info", input);
  log.debug(ast);
}, "parse") };
var DEFAULT_INFO_DB = { version: "11.14.0" };
var diagram = {
  parser,
  db: { getVersion: /* @__PURE__ */ __name(() => DEFAULT_INFO_DB.version, "getVersion") },
  renderer: { draw: /* @__PURE__ */ __name((text, id, version) => {
    log.debug("rendering info diagram\n" + text);
    const svg = selectSvgElement(id);
    configureSvgSize(svg, 100, 400, true);
    svg.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
  }, "draw") }
};
export {
  diagram
};
