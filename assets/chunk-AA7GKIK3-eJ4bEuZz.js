var _a, _b;
import { _ as createDefaultCoreModule, g as inject, h as EmptyFileSystem, l as PieGrammarGeneratedModule, m as __name, n as AbstractMermaidValueConverter, s as MermaidGeneratedSharedModule, t as AbstractMermaidTokenBuilder, v as createDefaultSharedCoreModule } from "./chunk-K5T4RW27-tz9qyvLz.js";
var PieTokenBuilder = (_a = class extends AbstractMermaidTokenBuilder {
  constructor() {
    super(["pie", "showData"]);
  }
}, __name(_a, "PieTokenBuilder"), _a);
var PieValueConverter = (_b = class extends AbstractMermaidValueConverter {
  runCustomConverter(rule, input, _cstNode) {
    if (rule.name !== "PIE_SECTION_LABEL") return;
    return input.replace(/"/g, "").trim();
  }
}, __name(_b, "PieValueConverter"), _b);
var PieModule = { parser: {
  TokenBuilder: /* @__PURE__ */ __name(() => new PieTokenBuilder(), "TokenBuilder"),
  ValueConverter: /* @__PURE__ */ __name(() => new PieValueConverter(), "ValueConverter")
} };
function createPieServices(context = EmptyFileSystem) {
  const shared = inject(createDefaultSharedCoreModule(context), MermaidGeneratedSharedModule);
  const Pie = inject(createDefaultCoreModule({ shared }), PieGrammarGeneratedModule, PieModule);
  shared.ServiceRegistry.register(Pie);
  return {
    shared,
    Pie
  };
}
__name(createPieServices, "createPieServices");
export {
  createPieServices as n,
  PieModule as t
};
