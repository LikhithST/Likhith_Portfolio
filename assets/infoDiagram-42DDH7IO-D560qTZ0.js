import { c as e } from "./chunk-ICPOFSXX-qplCg4jO.js";
import { g as t, h as n } from "./src-BWB47EtT.js";
import { t as r } from "./chunk-426QAEUC-BhmuD47R.js";
import "./identity-B9owP9ru.js";
import "./isEmpty-DOQ62aC5.js";
import "./chunk-K5T4RW27-DUXd3lAV.js";
import "./reduce-mGdWE-KL.js";
import "./flatten-CqtkwEvn.js";
import "./chunk-7N4EOEYR-BNay14On.js";
import "./chunk-67CJDMHE-CevvqCZQ.js";
import "./chunk-KGLVRYIC-Bdwc4beS.js";
import "./chunk-FOC6F5B3-MYrXiPPN.js";
import "./chunk-AA7GKIK3-Dr4yUAtZ.js";
import "./chunk-2KRD3SAO-FjXc5vAo.js";
import "./chunk-ORNJ4GCN-CQK2OPE5.js";
import "./chunk-LIHQZDEY-CLu_63wF.js";
import "./chunk-CIAEETIT-B2khf7wt.js";
import { t as i } from "./mermaid-parser.core-CeQTpQma.js";
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
