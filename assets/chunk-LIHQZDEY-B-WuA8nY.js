var _a, _b, _c;
import { _ as createDefaultCoreModule, f as TreemapGrammarGeneratedModule, g as inject, h as EmptyFileSystem, m as __name, n as AbstractMermaidValueConverter, s as MermaidGeneratedSharedModule, t as AbstractMermaidTokenBuilder, v as createDefaultSharedCoreModule } from "./chunk-K5T4RW27-tz9qyvLz.js";
var TreemapTokenBuilder = (_a = class extends AbstractMermaidTokenBuilder {
  constructor() {
    super(["treemap"]);
  }
}, __name(_a, "TreemapTokenBuilder"), _a);
var classDefRegex = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/;
var TreemapValueConverter = (_b = class extends AbstractMermaidValueConverter {
  runCustomConverter(rule, input, _cstNode) {
    if (rule.name === "NUMBER2") return parseFloat(input.replace(/,/g, ""));
    else if (rule.name === "SEPARATOR") return input.substring(1, input.length - 1);
    else if (rule.name === "STRING2") return input.substring(1, input.length - 1);
    else if (rule.name === "INDENTATION") return input.length;
    else if (rule.name === "ClassDef") {
      if (typeof input !== "string") return input;
      const match = classDefRegex.exec(input);
      if (match) return {
        $type: "ClassDefStatement",
        className: match[1],
        styleText: match[2] || void 0
      };
    }
  }
}, __name(_b, "TreemapValueConverter"), _b);
function registerValidationChecks(services) {
  const validator = services.validation.TreemapValidator;
  const registry = services.validation.ValidationRegistry;
  if (registry) {
    const checks = { Treemap: validator.checkSingleRoot.bind(validator) };
    registry.register(checks, validator);
  }
}
__name(registerValidationChecks, "registerValidationChecks");
var TreemapValidator = (_c = class {
  checkSingleRoot(doc, accept) {
    let rootNodeIndentation;
    for (const row of doc.TreemapRows) {
      if (!row.item) continue;
      if (rootNodeIndentation === void 0 && row.indent === void 0) rootNodeIndentation = 0;
      else if (row.indent === void 0) accept("error", "Multiple root nodes are not allowed in a treemap.", {
        node: row,
        property: "item"
      });
      else if (rootNodeIndentation !== void 0 && rootNodeIndentation >= parseInt(row.indent, 10)) accept("error", "Multiple root nodes are not allowed in a treemap.", {
        node: row,
        property: "item"
      });
    }
  }
}, __name(_c, "TreemapValidator"), _c);
var TreemapModule = {
  parser: {
    TokenBuilder: /* @__PURE__ */ __name(() => new TreemapTokenBuilder(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ __name(() => new TreemapValueConverter(), "ValueConverter")
  },
  validation: { TreemapValidator: /* @__PURE__ */ __name(() => new TreemapValidator(), "TreemapValidator") }
};
function createTreemapServices(context = EmptyFileSystem) {
  const shared = inject(createDefaultSharedCoreModule(context), MermaidGeneratedSharedModule);
  const Treemap = inject(createDefaultCoreModule({ shared }), TreemapGrammarGeneratedModule, TreemapModule);
  shared.ServiceRegistry.register(Treemap);
  registerValidationChecks(Treemap);
  return {
    shared,
    Treemap
  };
}
__name(createTreemapServices, "createTreemapServices");
export {
  createTreemapServices as n,
  TreemapModule as t
};
