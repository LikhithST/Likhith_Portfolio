var _a;
import { _ as createDefaultCoreModule, g as inject, h as EmptyFileSystem, i as CommonValueConverter, m as __name, o as InfoGrammarGeneratedModule, s as MermaidGeneratedSharedModule, t as AbstractMermaidTokenBuilder, v as createDefaultSharedCoreModule } from "./chunk-K5T4RW27-tz9qyvLz.js";
var InfoTokenBuilder = (_a = class extends AbstractMermaidTokenBuilder {
  constructor() {
    super(["info", "showInfo"]);
  }
}, __name(_a, "InfoTokenBuilder"), _a);
var InfoModule = { parser: {
  TokenBuilder: /* @__PURE__ */ __name(() => new InfoTokenBuilder(), "TokenBuilder"),
  ValueConverter: /* @__PURE__ */ __name(() => new CommonValueConverter(), "ValueConverter")
} };
function createInfoServices(context = EmptyFileSystem) {
  const shared = inject(createDefaultSharedCoreModule(context), MermaidGeneratedSharedModule);
  const Info = inject(createDefaultCoreModule({ shared }), InfoGrammarGeneratedModule, InfoModule);
  shared.ServiceRegistry.register(Info);
  return {
    shared,
    Info
  };
}
__name(createInfoServices, "createInfoServices");
export {
  createInfoServices as n,
  InfoModule as t
};
