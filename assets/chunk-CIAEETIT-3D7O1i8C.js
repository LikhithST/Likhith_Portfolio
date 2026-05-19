var _a;
import { _ as createDefaultCoreModule, g as inject, h as EmptyFileSystem, m as __name, n as AbstractMermaidValueConverter, p as WardleyGrammarGeneratedModule, s as MermaidGeneratedSharedModule, v as createDefaultSharedCoreModule } from "./chunk-K5T4RW27-tz9qyvLz.js";
var WardleyValueConverter = (_a = class extends AbstractMermaidValueConverter {
  runCustomConverter(rule, input, _cstNode) {
    switch (rule.name.toUpperCase()) {
      case "LINK_LABEL":
        return input.substring(1).trim();
      default:
        return;
    }
  }
}, __name(_a, "WardleyValueConverter"), _a);
var WardleyModule = { parser: { ValueConverter: /* @__PURE__ */ __name(() => new WardleyValueConverter(), "ValueConverter") } };
function createWardleyServices(context = EmptyFileSystem) {
  const shared = inject(createDefaultSharedCoreModule(context), MermaidGeneratedSharedModule);
  const Wardley = inject(createDefaultCoreModule({ shared }), WardleyGrammarGeneratedModule, WardleyModule);
  shared.ServiceRegistry.register(Wardley);
  return {
    shared,
    Wardley
  };
}
__name(createWardleyServices, "createWardleyServices");
export {
  createWardleyServices as n,
  WardleyModule as t
};
