import { c as e } from "./chunk-ICPOFSXX-cosQBm9P.js";
import { g as t, h as n } from "./src-DiRGiyL4.js";
import { t as r } from "./chunk-426QAEUC-DnOBqw_y.js";
import "./identity-B9owP9ru.js";
import "./isEmpty-DOQ62aC5.js";
import "./chunk-K5T4RW27-CzljlcrI.js";
import "./reduce-mGdWE-KL.js";
import "./flatten-CqtkwEvn.js";
import "./chunk-7N4EOEYR-cGcAQvpO.js";
import "./chunk-67CJDMHE-X0heNxj0.js";
import "./chunk-KGLVRYIC-BC3qp-Ss.js";
import "./chunk-FOC6F5B3-OxJqr3tu.js";
import "./chunk-AA7GKIK3-H6knSMUZ.js";
import "./chunk-2KRD3SAO-BhrV7a2r.js";
import "./chunk-ORNJ4GCN-DkoYmq2g.js";
import "./chunk-LIHQZDEY-D-TcdTVz.js";
import "./chunk-CIAEETIT-B3M4TTX-.js";
import { t as i } from "./mermaid-parser.core-BhyjZala.js";
var a = { parse: n(async (e2) => {
  let n2 = await i(`info`, e2);
  t.debug(n2);
}, `parse`) }, o = { version: `11.14.0` }, s = { parser: a, db: { getVersion: n(() => o.version, `getVersion`) }, renderer: { draw: n((n2, i2, a2) => {
  t.debug(`rendering info diagram
` + n2);
  let o2 = r(i2);
  e(o2, 100, 400, true), o2.append(`g`).append(`text`).attr(`x`, 100).attr(`y`, 40).attr(`class`, `version`).attr(`font-size`, 32).style(`text-anchor`, `middle`).text(`v${a2}`);
}, `draw`) } };
export {
  s as diagram
};
