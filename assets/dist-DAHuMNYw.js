import { t as e } from "./chunk-Dpv4RYZm.js";
const t = Math.abs, n = Math.atan2, r = Math.cos, i = Math.max, a = Math.min, o = Math.sin, s = Math.sqrt, c = 1e-12, l = Math.PI, u = l / 2, d = 2 * l;
function f(e2) {
  return e2 > 1 ? 0 : e2 < -1 ? l : Math.acos(e2);
}
function p(e2) {
  return e2 >= 1 ? u : e2 <= -1 ? -u : Math.asin(e2);
}
var m = e(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.BLANK_URL = e2.relativeFirstCharacters = e2.whitespaceEscapeCharsRegex = e2.urlSchemeRegex = e2.ctrlCharactersRegex = e2.htmlCtrlEntityRegex = e2.htmlEntitiesRegex = e2.invalidProtocolRegex = void 0, e2.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im, e2.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g, e2.htmlCtrlEntityRegex = /&(newline|tab);/gi, e2.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, e2.urlSchemeRegex = /^.+(:|&colon;)/gim, e2.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g, e2.relativeFirstCharacters = [`.`, `/`], e2.BLANK_URL = `about:blank`;
})), h = e(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.sanitizeUrl = o2;
  var t2 = m();
  function n2(e3) {
    return t2.relativeFirstCharacters.indexOf(e3[0]) > -1;
  }
  function r2(e3) {
    return e3.replace(t2.ctrlCharactersRegex, ``).replace(t2.htmlEntitiesRegex, function(e4, t3) {
      return String.fromCharCode(t3);
    });
  }
  function i2(e3) {
    return URL.canParse(e3);
  }
  function a2(e3) {
    try {
      return decodeURIComponent(e3);
    } catch {
      return e3;
    }
  }
  function o2(e3) {
    if (!e3) return t2.BLANK_URL;
    var o3, s2 = a2(e3.trim());
    do
      s2 = r2(s2).replace(t2.htmlCtrlEntityRegex, ``).replace(t2.ctrlCharactersRegex, ``).replace(t2.whitespaceEscapeCharsRegex, ``).trim(), s2 = a2(s2), o3 = s2.match(t2.ctrlCharactersRegex) || s2.match(t2.htmlEntitiesRegex) || s2.match(t2.htmlCtrlEntityRegex) || s2.match(t2.whitespaceEscapeCharsRegex);
    while (o3 && o3.length > 0);
    var c2 = s2;
    if (!c2) return t2.BLANK_URL;
    if (n2(c2)) return c2;
    var l2 = c2.trimStart(), u2 = l2.match(t2.urlSchemeRegex);
    if (!u2) return c2;
    var d2 = u2[0].toLowerCase().trim();
    if (t2.invalidProtocolRegex.test(d2)) return t2.BLANK_URL;
    var f2 = l2.replace(/\\/g, `/`);
    if (d2 === `mailto:` || d2.includes(`://`)) return f2;
    if (d2 === `http:` || d2 === `https:`) {
      if (!i2(f2)) return t2.BLANK_URL;
      var p2 = new URL(f2);
      return p2.protocol = p2.protocol.toLowerCase(), p2.hostname = p2.hostname.toLowerCase(), p2.toString();
    }
    return f2;
  }
}));
export {
  n as a,
  u as c,
  l as d,
  o as f,
  p as i,
  i as l,
  d as m,
  t as n,
  r as o,
  s as p,
  f as r,
  c as s,
  h as t,
  a as u
};
