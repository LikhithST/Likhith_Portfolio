var _a, _b;
import { _ as createDefaultCoreModule, d as TreeViewGrammarGeneratedModule, g as inject, h as EmptyFileSystem, m as __name, n as AbstractMermaidValueConverter, s as MermaidGeneratedSharedModule, t as AbstractMermaidTokenBuilder, v as createDefaultSharedCoreModule } from "./chunk-K5T4RW27-tz9qyvLz.js";
var TreeViewValueConverter = (_a = class extends AbstractMermaidValueConverter {
  runCustomConverter(rule, input, _cstNode) {
    if (rule.name === "INDENTATION") return (input == null ? void 0 : input.length) || 0;
    else if (rule.name === "STRING2") return input.substring(1, input.length - 1);
  }
}, __name(_a, "TreeViewValueConverter"), _a);
var TreeViewTokenBuilder = (_b = class extends AbstractMermaidTokenBuilder {
  constructor() {
    super(["treeView-beta"]);
  }
}, __name(_b, "TreeViewTokenBuilder"), _b);
var TreeViewModule = { parser: {
  TokenBuilder: /* @__PURE__ */ __name(() => new TreeViewTokenBuilder(), "TokenBuilder"),
  ValueConverter: /* @__PURE__ */ __name(() => new TreeViewValueConverter(), "ValueConverter")
} };
function createTreeViewServices(context = EmptyFileSystem) {
  const shared = inject(createDefaultSharedCoreModule(context), MermaidGeneratedSharedModule);
  const TreeView = inject(createDefaultCoreModule({ shared }), TreeViewGrammarGeneratedModule, TreeViewModule);
  shared.ServiceRegistry.register(TreeView);
  return {
    shared,
    TreeView
  };
}
__name(createTreeViewServices, "createTreeViewServices");
export {
  createTreeViewServices as n,
  TreeViewModule as t
};
