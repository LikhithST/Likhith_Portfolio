var _a;
import { B as e, C as t, U as n, _ as r, a as i, c as a, d as o, v as s, y as c, z as l } from "./chunk-ABZYJK2D-ODb6qSou.js";
import { g as u, h as d } from "./src-D8UWkQNo.js";
import "./math-O_7OW4FW.js";
import { i as f } from "./chunk-S3R3BYOJ-D8yhV3IZ.js";
import { t as p } from "./chunk-EXTU4WIE-K1dhFJK1.js";
import "./dist-DrVb-WkD.js";
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
import { t as m } from "./chunk-4BX2VUAB-DvcVo9Pr.js";
import { t as h } from "./mermaid-parser.core-pDIzeYSr.js";
var g = o.packet, _ = (_a = class {
  constructor() {
    this.packet = [], this.setAccTitle = e, this.getAccTitle = s, this.setDiagramTitle = n, this.getDiagramTitle = t, this.getAccDescription = r, this.setAccDescription = l;
  }
  getConfig() {
    let e2 = f({ ...g, ...c().packet });
    return e2.showBits && (e2.paddingY += 10), e2;
  }
  getPacket() {
    return this.packet;
  }
  pushWord(e2) {
    e2.length > 0 && this.packet.push(e2);
  }
  clear() {
    i(), this.packet = [];
  }
}, d(_a, `PacketDB`), _a), v = 1e4, y = d((e2, t2) => {
  m(e2, t2);
  let n2 = -1, r2 = [], i2 = 1, { bitsPerRow: a2 } = t2.getConfig();
  for (let { start: o2, end: s2, bits: c2, label: l2 } of e2.blocks) {
    if (o2 !== void 0 && s2 !== void 0 && s2 < o2) throw Error(`Packet block ${o2} - ${s2} is invalid. End must be greater than start.`);
    if (o2 ?? (o2 = n2 + 1), o2 !== n2 + 1) throw Error(`Packet block ${o2} - ${s2 ?? o2} is not contiguous. It should start from ${n2 + 1}.`);
    if (c2 === 0) throw Error(`Packet block ${o2} is invalid. Cannot have a zero bit field.`);
    for (s2 ?? (s2 = o2 + (c2 ?? 1) - 1), c2 ?? (c2 = s2 - o2 + 1), n2 = s2, u.debug(`Packet block ${o2} - ${n2} with label ${l2}`); r2.length <= a2 + 1 && t2.getPacket().length < v; ) {
      let [e3, n3] = b({ start: o2, end: s2, bits: c2, label: l2 }, i2, a2);
      if (r2.push(e3), e3.end + 1 === i2 * a2 && (t2.pushWord(r2), r2 = [], i2++), !n3) break;
      ({ start: o2, end: s2, bits: c2, label: l2 } = n3);
    }
  }
  t2.pushWord(r2);
}, `populate`), b = d((e2, t2, n2) => {
  if (e2.start === void 0) throw Error(`start should have been set during first phase`);
  if (e2.end === void 0) throw Error(`end should have been set during first phase`);
  if (e2.start > e2.end) throw Error(`Block start ${e2.start} is greater than block end ${e2.end}.`);
  if (e2.end + 1 <= t2 * n2) return [e2, void 0];
  let r2 = t2 * n2 - 1, i2 = t2 * n2;
  return [{ start: e2.start, end: r2, label: e2.label, bits: r2 - e2.start }, { start: i2, end: e2.end, label: e2.label, bits: e2.end - i2 }];
}, `getNextFittingBlock`), x = { parser: { yy: void 0 }, parse: d(async (e2) => {
  var _a2;
  let t2 = await h(`packet`, e2), n2 = (_a2 = x.parser) == null ? void 0 : _a2.yy;
  if (!(n2 instanceof _)) throw Error(`parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.`);
  u.debug(t2), y(t2, n2);
}, `parse`) }, S = d((e2, t2, n2, r2) => {
  let i2 = r2.db, o2 = i2.getConfig(), { rowHeight: s2, paddingY: c2, bitWidth: l2, bitsPerRow: u2 } = o2, d2 = i2.getPacket(), f2 = i2.getDiagramTitle(), m2 = s2 + c2, h2 = m2 * (d2.length + 1) - (f2 ? 0 : s2), g2 = l2 * u2 + 2, _2 = p(t2);
  _2.attr(`viewbox`, `0 0 ${g2} ${h2}`), a(_2, h2, g2, o2.useMaxWidth);
  for (let [e3, t3] of d2.entries()) C(_2, t3, e3, o2);
  _2.append(`text`).text(f2).attr(`x`, g2 / 2).attr(`y`, h2 - m2 / 2).attr(`dominant-baseline`, `middle`).attr(`text-anchor`, `middle`).attr(`class`, `packetTitle`);
}, `draw`), C = d((e2, t2, n2, { rowHeight: r2, paddingX: i2, paddingY: a2, bitWidth: o2, bitsPerRow: s2, showBits: c2 }) => {
  let l2 = e2.append(`g`), u2 = n2 * (r2 + a2) + a2;
  for (let e3 of t2) {
    let t3 = e3.start % s2 * o2 + 1, n3 = (e3.end - e3.start + 1) * o2 - i2;
    if (l2.append(`rect`).attr(`x`, t3).attr(`y`, u2).attr(`width`, n3).attr(`height`, r2).attr(`class`, `packetBlock`), l2.append(`text`).attr(`x`, t3 + n3 / 2).attr(`y`, u2 + r2 / 2).attr(`class`, `packetLabel`).attr(`dominant-baseline`, `middle`).attr(`text-anchor`, `middle`).text(e3.label), !c2) continue;
    let a3 = e3.end === e3.start, d2 = u2 - 2;
    l2.append(`text`).attr(`x`, t3 + (a3 ? n3 / 2 : 0)).attr(`y`, d2).attr(`class`, `packetByte start`).attr(`dominant-baseline`, `auto`).attr(`text-anchor`, a3 ? `middle` : `start`).text(e3.start), a3 || l2.append(`text`).attr(`x`, t3 + n3).attr(`y`, d2).attr(`class`, `packetByte end`).attr(`dominant-baseline`, `auto`).attr(`text-anchor`, `end`).text(e3.end);
  }
}, `drawWord`), w = { draw: S }, T = { byteFontSize: `10px`, startByteColor: `black`, endByteColor: `black`, labelColor: `black`, labelFontSize: `12px`, titleColor: `black`, titleFontSize: `14px`, blockStrokeColor: `black`, blockStrokeWidth: `1`, blockFillColor: `#efefef` }, E = { parser: x, get db() {
  return new _();
}, renderer: w, styles: d(({ packet: e2 } = {}) => {
  let t2 = f(T, e2);
  return `
	.packetByte {
		font-size: ${t2.byteFontSize};
	}
	.packetByte.start {
		fill: ${t2.startByteColor};
	}
	.packetByte.end {
		fill: ${t2.endByteColor};
	}
	.packetLabel {
		fill: ${t2.labelColor};
		font-size: ${t2.labelFontSize};
	}
	.packetTitle {
		fill: ${t2.titleColor};
		font-size: ${t2.titleFontSize};
	}
	.packetBlock {
		stroke: ${t2.blockStrokeColor};
		stroke-width: ${t2.blockStrokeWidth};
		fill: ${t2.blockFillColor};
	}
	`;
}, `styles`) };
export {
  E as diagram
};
