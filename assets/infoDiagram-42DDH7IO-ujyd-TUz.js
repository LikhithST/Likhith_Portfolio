import { Jn as e, Nt as t, Yn as n, gn as r } from "./index-4Ava25sD.js";
import "./chunk-K5T4RW27-OuehT3M0.js";
import "./reduce-BYgg84dj.js";
import "./flatten-COzv_UkG.js";
import "./chunk-7N4EOEYR-D1jf8gU4.js";
import "./chunk-67CJDMHE-DkrmGhRn.js";
import "./chunk-KGLVRYIC-B7L8tDEY.js";
import "./chunk-FOC6F5B3-B63lKV-F.js";
import "./chunk-AA7GKIK3-D5IXgCR6.js";
import "./chunk-2KRD3SAO-CNzDCA3U.js";
import "./chunk-ORNJ4GCN-9SMZAFfc.js";
import "./chunk-LIHQZDEY-eWu76TC0.js";
import "./chunk-CIAEETIT-u0HN2vK9.js";
import { t as i } from "./mermaid-parser.core-C5_5uso8.js";
var a = { parse: e(async (e2) => {
  let t2 = await i(`info`, e2);
  n.debug(t2);
}, `parse`) }, o = { version: `11.14.0` }, s = { parser: a, db: { getVersion: e(() => o.version, `getVersion`) }, renderer: { draw: e((e2, i2, a2) => {
  n.debug(`rendering info diagram
` + e2);
  let o2 = t(i2);
  r(o2, 100, 400, true), o2.append(`g`).append(`text`).attr(`x`, 100).attr(`y`, 40).attr(`class`, `version`).attr(`font-size`, 32).style(`text-anchor`, `middle`).text(`v${a2}`);
}, `draw`) } };
export {
  s as diagram
};
