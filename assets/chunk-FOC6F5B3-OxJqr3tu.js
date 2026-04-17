var _a;
import { _ as e, c as t, g as n, h as r, i, m as a, s as o, t as s, v as c } from "./chunk-K5T4RW27-CzljlcrI.js";
var l = (_a = class extends s {
  constructor() {
    super([`packet`]);
  }
}, a(_a, `PacketTokenBuilder`), _a), u = { parser: { TokenBuilder: a(() => new l(), `TokenBuilder`), ValueConverter: a(() => new i(), `ValueConverter`) } };
function d(i2 = r) {
  let a2 = n(c(i2), o), s2 = n(e({ shared: a2 }), t, u);
  return a2.ServiceRegistry.register(s2), { shared: a2, Packet: s2 };
}
a(d, `createPacketServices`);
export {
  d as n,
  u as t
};
