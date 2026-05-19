import { Jn as __name } from "./index-BgJKKt_a.js";
import "./chunk-55IACEB6-CT2HYb7w.js";
import "./chunk-EDXVE4YY-BmFbq3wW.js";
import { i as styles_default, n as stateDiagram_default, r as stateRenderer_v3_unified_default, t as StateDB } from "./chunk-OYMX7WX6-BfVoHuzM.js";
var diagram = {
  parser: stateDiagram_default,
  get db() {
    return new StateDB(2);
  },
  renderer: stateRenderer_v3_unified_default,
  styles: styles_default,
  init: /* @__PURE__ */ __name((cnf) => {
    if (!cnf.state) cnf.state = {};
    cnf.state.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
  }, "init")
};
export {
  diagram
};
