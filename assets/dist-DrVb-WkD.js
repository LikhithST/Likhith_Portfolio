import { t as e } from "./chunk-CXUkj53v.js";
var t = e(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.BLANK_URL = e2.relativeFirstCharacters = e2.whitespaceEscapeCharsRegex = e2.urlSchemeRegex = e2.ctrlCharactersRegex = e2.htmlCtrlEntityRegex = e2.htmlEntitiesRegex = e2.invalidProtocolRegex = void 0, e2.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im, e2.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g, e2.htmlCtrlEntityRegex = /&(newline|tab);/gi, e2.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, e2.urlSchemeRegex = /^.+(:|&colon;)/gim, e2.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g, e2.relativeFirstCharacters = [`.`, `/`], e2.BLANK_URL = `about:blank`;
})), n = e(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.sanitizeUrl = void 0;
  var n2 = t();
  function r(e3) {
    return n2.relativeFirstCharacters.indexOf(e3[0]) > -1;
  }
  function i(e3) {
    return e3.replace(n2.ctrlCharactersRegex, ``).replace(n2.htmlEntitiesRegex, function(e4, t2) {
      return String.fromCharCode(t2);
    });
  }
  function a(e3) {
    return URL.canParse(e3);
  }
  function o(e3) {
    try {
      return decodeURIComponent(e3);
    } catch {
      return e3;
    }
  }
  function s(e3) {
    if (!e3) return n2.BLANK_URL;
    var t2, s2 = o(e3.trim());
    do
      s2 = i(s2).replace(n2.htmlCtrlEntityRegex, ``).replace(n2.ctrlCharactersRegex, ``).replace(n2.whitespaceEscapeCharsRegex, ``).trim(), s2 = o(s2), t2 = s2.match(n2.ctrlCharactersRegex) || s2.match(n2.htmlEntitiesRegex) || s2.match(n2.htmlCtrlEntityRegex) || s2.match(n2.whitespaceEscapeCharsRegex);
    while (t2 && t2.length > 0);
    var c = s2;
    if (!c) return n2.BLANK_URL;
    if (r(c)) return c;
    var l = c.trimStart(), u = l.match(n2.urlSchemeRegex);
    if (!u) return c;
    var d = u[0].toLowerCase().trim();
    if (n2.invalidProtocolRegex.test(d)) return n2.BLANK_URL;
    var f = l.replace(/\\/g, `/`);
    if (d === `mailto:` || d.includes(`://`)) return f;
    if (d === `http:` || d === `https:`) {
      if (!a(f)) return n2.BLANK_URL;
      var p = new URL(f);
      return p.protocol = p.protocol.toLowerCase(), p.hostname = p.hostname.toLowerCase(), p.toString();
    }
    return f;
  }
  e2.sanitizeUrl = s;
}));
export {
  n as t
};
