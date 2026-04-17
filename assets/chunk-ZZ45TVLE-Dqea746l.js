import { b as e, d as t } from "./chunk-ICPOFSXX-cosQBm9P.js";
import { h as n } from "./src-DiRGiyL4.js";
import { p as r } from "./chunk-5PVQY5BW-BPITZuxu.js";
var i = n(({ flowchart: e2 }) => {
  var _a, _b;
  let t2 = ((_a = e2 == null ? void 0 : e2.subGraphTitleMargin) == null ? void 0 : _a.top) ?? 0, n2 = ((_b = e2 == null ? void 0 : e2.subGraphTitleMargin) == null ? void 0 : _b.bottom) ?? 0;
  return { subGraphTitleTopMargin: t2, subGraphTitleBottomMargin: n2, subGraphTitleTotalMargin: t2 + n2 };
}, `getSubGraphTitleMargins`);
async function a(i2, a2) {
  let o = i2.getElementsByTagName(`img`);
  if (!o || o.length === 0) return;
  let s = a2.replace(/<img[^>]*>/g, ``).trim() === ``;
  await Promise.all([...o].map((i3) => new Promise((a3) => {
    function o2() {
      if (i3.style.display = `flex`, i3.style.flexDirection = `column`, s) {
        let [n2 = t.fontSize] = r(e().fontSize ? e().fontSize : window.getComputedStyle(document.body).fontSize), a4 = n2 * 5 + `px`;
        i3.style.minWidth = a4, i3.style.maxWidth = a4;
      } else i3.style.width = `100%`;
      a3(i3);
    }
    n(o2, `setupImage`), setTimeout(() => {
      i3.complete && o2();
    }), i3.addEventListener(`error`, o2), i3.addEventListener(`load`, o2);
  })));
}
n(a, `configureLabelImages`);
export {
  i as n,
  a as t
};
