var _a;
import { _ as createDefaultCoreModule, g as inject, h as EmptyFileSystem, i as CommonValueConverter, m as __name, s as MermaidGeneratedSharedModule, t as AbstractMermaidTokenBuilder, u as RadarGrammarGeneratedModule, v as createDefaultSharedCoreModule } from "./chunk-K5T4RW27-tz9qyvLz.js";
var RadarTokenBuilder = (_a = class extends AbstractMermaidTokenBuilder {
  constructor() {
    super(["radar-beta"]);
  }
}, __name(_a, "RadarTokenBuilder"), _a);
var RadarModule = { parser: {
  TokenBuilder: /* @__PURE__ */ __name(() => new RadarTokenBuilder(), "TokenBuilder"),
  ValueConverter: /* @__PURE__ */ __name(() => new CommonValueConverter(), "ValueConverter")
} };
function createRadarServices(context = EmptyFileSystem) {
  const shared = inject(createDefaultSharedCoreModule(context), MermaidGeneratedSharedModule);
  const Radar = inject(createDefaultCoreModule({ shared }), RadarGrammarGeneratedModule, RadarModule);
  shared.ServiceRegistry.register(Radar);
  return {
    shared,
    Radar
  };
}
__name(createRadarServices, "createRadarServices");
export {
  createRadarServices as n,
  RadarModule as t
};
