import { c as e } from "./chunk-ABZYJK2D-ODb6qSou.js";
import { t } from "./chunk-XAJISQIX-Ck7schVE.js";
import { g as n, h as r } from "./src-D8UWkQNo.js";
import { t as i } from "./chunk-EXTU4WIE-K1dhFJK1.js";
import "./identity-IHMFXfGJ.js";
import "./isEmpty-Suvitui-.js";
import "./chunk-FPAJGGOC-C3gFAQ_Y.js";
import "./reduce-S4_EnTW-.js";
import "./flatten-DG1tNxhW.js";
import "./chunk-O7ZBX7Z2-Bruh2zNs.js";
import "./chunk-S6J4BHB3-DAc_Mhl7.js";
import "./chunk-LBM3YZW2-B_3MR1yX.js";
import "./chunk-76Q3JFCE-BoCXoCPi.js";
import "./chunk-T53DSG4Q-CZaMHOwT.js";
import "./chunk-LHMN2FUI-C3wDs2RB.js";
import "./chunk-FWNWRKHM-Df_W1Cti.js";
import { t as a } from "./mermaid-parser.core-pDIzeYSr.js";
var o = { parse: r(async (e2) => {
  let t2 = await a(`info`, e2);
  n.debug(t2);
}, `parse`) }, s = { version: t.version + `` }, c = { parser: o, db: { getVersion: r(() => s.version, `getVersion`) }, renderer: { draw: r((t2, r2, a2) => {
  n.debug(`rendering info diagram
` + t2);
  let o2 = i(r2);
  e(o2, 100, 400, true), o2.append(`g`).append(`text`).attr(`x`, 100).attr(`y`, 40).attr(`class`, `version`).attr(`font-size`, 32).style(`text-anchor`, `middle`).text(`v${a2}`);
}, `draw`) } };
export {
  c as diagram
};
