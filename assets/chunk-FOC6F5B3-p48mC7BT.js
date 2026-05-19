var _a;
import { _ as createDefaultCoreModule, c as PacketGrammarGeneratedModule, g as inject, h as EmptyFileSystem, i as CommonValueConverter, m as __name, s as MermaidGeneratedSharedModule, t as AbstractMermaidTokenBuilder, v as createDefaultSharedCoreModule } from "./chunk-K5T4RW27-tz9qyvLz.js";
var PacketTokenBuilder = (_a = class extends AbstractMermaidTokenBuilder {
  constructor() {
    super(["packet"]);
  }
}, __name(_a, "PacketTokenBuilder"), _a);
var PacketModule = { parser: {
  TokenBuilder: /* @__PURE__ */ __name(() => new PacketTokenBuilder(), "TokenBuilder"),
  ValueConverter: /* @__PURE__ */ __name(() => new CommonValueConverter(), "ValueConverter")
} };
function createPacketServices(context = EmptyFileSystem) {
  const shared = inject(createDefaultSharedCoreModule(context), MermaidGeneratedSharedModule);
  const Packet = inject(createDefaultCoreModule({ shared }), PacketGrammarGeneratedModule, PacketModule);
  shared.ServiceRegistry.register(Packet);
  return {
    shared,
    Packet
  };
}
__name(createPacketServices, "createPacketServices");
export {
  createPacketServices as n,
  PacketModule as t
};
