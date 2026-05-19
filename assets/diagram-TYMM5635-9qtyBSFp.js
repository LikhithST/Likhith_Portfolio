var _a;
import { Cn as e, In as t, Jn as n, N as r, Nn as i, Nt as a, Pn as o, Yn as s, bn as c, gn as l, pn as u, vn as d, xn as f, yn as p } from "./index-4Ava25sD.js";
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
import { t as m } from "./chunk-4BX2VUAB-BsqOnTl0.js";
import { t as h } from "./mermaid-parser.core-C5_5uso8.js";
var g = d.packet, _ = (_a = class {
  constructor() {
    this.packet = [], this.setAccTitle = o, this.getAccTitle = c, this.setDiagramTitle = t, this.getDiagramTitle = e, this.getAccDescription = p, this.setAccDescription = i;
  }
  getConfig() {
    let e2 = r({ ...g, ...f().packet });
    return e2.showBits && (e2.paddingY += 10), e2;
  }
  getPacket() {
    return this.packet;
  }
  pushWord(e2) {
    e2.length > 0 && this.packet.push(e2);
  }
  clear() {
    u(), this.packet = [];
  }
}, n(_a, `PacketDB`), _a), v = 1e4, y = n((e2, t2) => {
  m(e2, t2);
  let n2 = -1, r2 = [], i2 = 1, { bitsPerRow: a2 } = t2.getConfig();
  for (let { start: o2, end: c2, bits: l2, label: u2 } of e2.blocks) {
    if (o2 !== void 0 && c2 !== void 0 && c2 < o2) throw Error(`Packet block ${o2} - ${c2} is invalid. End must be greater than start.`);
    if (o2 ?? (o2 = n2 + 1), o2 !== n2 + 1) throw Error(`Packet block ${o2} - ${c2 ?? o2} is not contiguous. It should start from ${n2 + 1}.`);
    if (l2 === 0) throw Error(`Packet block ${o2} is invalid. Cannot have a zero bit field.`);
    for (c2 ?? (c2 = o2 + (l2 ?? 1) - 1), l2 ?? (l2 = c2 - o2 + 1), n2 = c2, s.debug(`Packet block ${o2} - ${n2} with label ${u2}`); r2.length <= a2 + 1 && t2.getPacket().length < v; ) {
      let [e3, n3] = b({ start: o2, end: c2, bits: l2, label: u2 }, i2, a2);
      if (r2.push(e3), e3.end + 1 === i2 * a2 && (t2.pushWord(r2), r2 = [], i2++), !n3) break;
      ({ start: o2, end: c2, bits: l2, label: u2 } = n3);
    }
  }
  t2.pushWord(r2);
}, `populate`), b = n((e2, t2, n2) => {
  if (e2.start === void 0) throw Error(`start should have been set during first phase`);
  if (e2.end === void 0) throw Error(`end should have been set during first phase`);
  if (e2.start > e2.end) throw Error(`Block start ${e2.start} is greater than block end ${e2.end}.`);
  if (e2.end + 1 <= t2 * n2) return [e2, void 0];
  let r2 = t2 * n2 - 1, i2 = t2 * n2;
  return [{ start: e2.start, end: r2, label: e2.label, bits: r2 - e2.start }, { start: i2, end: e2.end, label: e2.label, bits: e2.end - i2 }];
}, `getNextFittingBlock`), x = { parser: { yy: void 0 }, parse: n(async (e2) => {
  var _a2;
  let t2 = await h(`packet`, e2), n2 = (_a2 = x.parser) == null ? void 0 : _a2.yy;
  if (!(n2 instanceof _)) throw Error(`parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.`);
  s.debug(t2), y(t2, n2);
}, `parse`) }, S = n((e2, t2, n2, r2) => {
  let i2 = r2.db, o2 = i2.getConfig(), { rowHeight: s2, paddingY: c2, bitWidth: u2, bitsPerRow: d2 } = o2, f2 = i2.getPacket(), p2 = i2.getDiagramTitle(), m2 = s2 + c2, h2 = m2 * (f2.length + 1) - (p2 ? 0 : s2), g2 = u2 * d2 + 2, _2 = a(t2);
  _2.attr(`viewBox`, `0 0 ${g2} ${h2}`), l(_2, h2, g2, o2.useMaxWidth);
  for (let [e3, t3] of f2.entries()) C(_2, t3, e3, o2);
  _2.append(`text`).text(p2).attr(`x`, g2 / 2).attr(`y`, h2 - m2 / 2).attr(`dominant-baseline`, `middle`).attr(`text-anchor`, `middle`).attr(`class`, `packetTitle`);
}, `draw`), C = n((e2, t2, n2, { rowHeight: r2, paddingX: i2, paddingY: a2, bitWidth: o2, bitsPerRow: s2, showBits: c2 }) => {
  let l2 = e2.append(`g`), u2 = n2 * (r2 + a2) + a2;
  for (let e3 of t2) {
    let t3 = e3.start % s2 * o2 + 1, n3 = (e3.end - e3.start + 1) * o2 - i2;
    if (l2.append(`rect`).attr(`x`, t3).attr(`y`, u2).attr(`width`, n3).attr(`height`, r2).attr(`class`, `packetBlock`), l2.append(`text`).attr(`x`, t3 + n3 / 2).attr(`y`, u2 + r2 / 2).attr(`class`, `packetLabel`).attr(`dominant-baseline`, `middle`).attr(`text-anchor`, `middle`).text(e3.label), !c2) continue;
    let a3 = e3.end === e3.start, d2 = u2 - 2;
    l2.append(`text`).attr(`x`, t3 + (a3 ? n3 / 2 : 0)).attr(`y`, d2).attr(`class`, `packetByte start`).attr(`dominant-baseline`, `auto`).attr(`text-anchor`, a3 ? `middle` : `start`).text(e3.start), a3 || l2.append(`text`).attr(`x`, t3 + n3).attr(`y`, d2).attr(`class`, `packetByte end`).attr(`dominant-baseline`, `auto`).attr(`text-anchor`, `end`).text(e3.end);
  }
}, `drawWord`), w = { draw: S }, T = { byteFontSize: `10px`, startByteColor: `black`, endByteColor: `black`, labelColor: `black`, labelFontSize: `12px`, titleColor: `black`, titleFontSize: `14px`, blockStrokeColor: `black`, blockStrokeWidth: `1`, blockFillColor: `#efefef` }, E = { parser: x, get db() {
  return new _();
}, renderer: w, styles: n(({ packet: e2 } = {}) => {
  let t2 = r(T, e2);
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
