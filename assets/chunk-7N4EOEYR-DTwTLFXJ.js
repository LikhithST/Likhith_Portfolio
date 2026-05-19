var _a, _b;
import { _ as createDefaultCoreModule, g as inject, h as EmptyFileSystem, m as __name, n as AbstractMermaidValueConverter, r as ArchitectureGrammarGeneratedModule, s as MermaidGeneratedSharedModule, t as AbstractMermaidTokenBuilder, v as createDefaultSharedCoreModule } from "./chunk-K5T4RW27-tz9qyvLz.js";
var ArchitectureTokenBuilder = (_a = class extends AbstractMermaidTokenBuilder {
  constructor() {
    super(["architecture"]);
  }
}, __name(_a, "ArchitectureTokenBuilder"), _a);
var ArchitectureValueConverter = (_b = class extends AbstractMermaidValueConverter {
  runCustomConverter(rule, input, _cstNode) {
    if (rule.name === "ARCH_ICON") return input.replace(/[()]/g, "").trim();
    else if (rule.name === "ARCH_TEXT_ICON") return input.replace(/["()]/g, "");
    else if (rule.name === "ARCH_TITLE") {
      let result = input.replace(/^\[|]$/g, "").trim();
      if (result.startsWith('"') && result.endsWith('"') || result.startsWith("'") && result.endsWith("'")) {
        result = result.slice(1, -1);
        result = result.replace(/\\"/g, '"').replace(/\\'/g, "'");
      }
      return result.trim();
    }
  }
}, __name(_b, "ArchitectureValueConverter"), _b);
var ArchitectureModule = { parser: {
  TokenBuilder: /* @__PURE__ */ __name(() => new ArchitectureTokenBuilder(), "TokenBuilder"),
  ValueConverter: /* @__PURE__ */ __name(() => new ArchitectureValueConverter(), "ValueConverter")
} };
function createArchitectureServices(context = EmptyFileSystem) {
  const shared = inject(createDefaultSharedCoreModule(context), MermaidGeneratedSharedModule);
  const Architecture = inject(createDefaultCoreModule({ shared }), ArchitectureGrammarGeneratedModule, ArchitectureModule);
  shared.ServiceRegistry.register(Architecture);
  return {
    shared,
    Architecture
  };
}
__name(createArchitectureServices, "createArchitectureServices");
export {
  createArchitectureServices as n,
  ArchitectureModule as t
};
