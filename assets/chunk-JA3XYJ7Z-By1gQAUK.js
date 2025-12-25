var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a;
import { I as e, N as t, O as n, s as r, y as i } from "./chunk-ABZYJK2D-ODb6qSou.js";
import { g as a, h as o, p as s } from "./src-D8UWkQNo.js";
import { a as c } from "./chunk-S3R3BYOJ-D8yhV3IZ.js";
var l = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }), u = Object.freeze({ rotate: 0, vFlip: false, hFlip: false }), d = Object.freeze({ ...l, ...u }), f = Object.freeze({ ...d, body: ``, hidden: false }), p = Object.freeze({ width: null, height: null }), ee = Object.freeze({ ...p, ...u }), m = (e4, t2, n2, r2 = ``) => {
  let i2 = e4.split(`:`);
  if (e4.slice(0, 1) === `@`) {
    if (i2.length < 2 || i2.length > 3) return null;
    r2 = i2.shift().slice(1);
  }
  if (i2.length > 3 || !i2.length) return null;
  if (i2.length > 1) {
    let e5 = i2.pop(), n3 = i2.pop(), a3 = { provider: i2.length > 0 ? i2[0] : r2, prefix: n3, name: e5 };
    return t2 && !h(a3) ? null : a3;
  }
  let a2 = i2[0], o2 = a2.split(`-`);
  if (o2.length > 1) {
    let e5 = { provider: r2, prefix: o2.shift(), name: o2.join(`-`) };
    return t2 && !h(e5) ? null : e5;
  }
  if (n2 && r2 === ``) {
    let e5 = { provider: r2, prefix: ``, name: a2 };
    return t2 && !h(e5, n2) ? null : e5;
  }
  return null;
}, h = (e4, t2) => e4 ? !!((t2 && e4.prefix === `` || e4.prefix) && e4.name) : false;
function te(e4, t2) {
  let n2 = {};
  !e4.hFlip != !t2.hFlip && (n2.hFlip = true), !e4.vFlip != !t2.vFlip && (n2.vFlip = true);
  let r2 = ((e4.rotate || 0) + (t2.rotate || 0)) % 4;
  return r2 && (n2.rotate = r2), n2;
}
function ne(e4, t2) {
  let n2 = te(e4, t2);
  for (let r2 in f) r2 in u ? r2 in e4 && !(r2 in n2) && (n2[r2] = u[r2]) : r2 in t2 ? n2[r2] = t2[r2] : r2 in e4 && (n2[r2] = e4[r2]);
  return n2;
}
function re(e4, t2) {
  let n2 = e4.icons, r2 = e4.aliases || /* @__PURE__ */ Object.create(null), i2 = /* @__PURE__ */ Object.create(null);
  function a2(e5) {
    if (n2[e5]) return i2[e5] = [];
    if (!(e5 in i2)) {
      i2[e5] = null;
      let t3 = r2[e5] && r2[e5].parent, n3 = t3 && a2(t3);
      n3 && (i2[e5] = [t3].concat(n3));
    }
    return i2[e5];
  }
  return (t2 || Object.keys(n2).concat(Object.keys(r2))).forEach(a2), i2;
}
function ie(e4, t2, n2) {
  let r2 = e4.icons, i2 = e4.aliases || /* @__PURE__ */ Object.create(null), a2 = {};
  function o2(e5) {
    a2 = ne(r2[e5] || i2[e5], a2);
  }
  return o2(t2), n2.forEach(o2), ne(e4, a2);
}
function ae(e4, t2) {
  if (e4.icons[t2]) return ie(e4, t2, []);
  let n2 = re(e4, [t2])[t2];
  return n2 ? ie(e4, t2, n2) : null;
}
var oe = /(-?[0-9.]*[0-9]+[0-9.]*)/g, se = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function ce(e4, t2, n2) {
  if (t2 === 1) return e4;
  if (n2 || (n2 = 100), typeof e4 == `number`) return Math.ceil(e4 * t2 * n2) / n2;
  if (typeof e4 != `string`) return e4;
  let r2 = e4.split(oe);
  if (r2 === null || !r2.length) return e4;
  let i2 = [], a2 = r2.shift(), o2 = se.test(a2);
  for (; ; ) {
    if (o2) {
      let e5 = parseFloat(a2);
      isNaN(e5) ? i2.push(a2) : i2.push(Math.ceil(e5 * t2 * n2) / n2);
    } else i2.push(a2);
    if (a2 = r2.shift(), a2 === void 0) return i2.join(``);
    o2 = !o2;
  }
}
function le(e4, t2 = `defs`) {
  let n2 = ``, r2 = e4.indexOf(`<` + t2);
  for (; r2 >= 0; ) {
    let i2 = e4.indexOf(`>`, r2), a2 = e4.indexOf(`</` + t2);
    if (i2 === -1 || a2 === -1) break;
    let o2 = e4.indexOf(`>`, a2);
    if (o2 === -1) break;
    n2 += e4.slice(i2 + 1, a2).trim(), e4 = e4.slice(0, r2).trim() + e4.slice(o2 + 1);
  }
  return { defs: n2, content: e4 };
}
function ue(e4, t2) {
  return e4 ? `<defs>` + e4 + `</defs>` + t2 : t2;
}
function de(e4, t2, n2) {
  let r2 = le(e4);
  return ue(r2.defs, t2 + r2.content + n2);
}
var fe = (e4) => e4 === `unset` || e4 === `undefined` || e4 === `none`;
function pe(e4, t2) {
  let n2 = { ...d, ...e4 }, r2 = { ...ee, ...t2 }, i2 = { left: n2.left, top: n2.top, width: n2.width, height: n2.height }, a2 = n2.body;
  [n2, r2].forEach((e5) => {
    let t3 = [], n3 = e5.hFlip, r3 = e5.vFlip, o3 = e5.rotate;
    n3 ? r3 ? o3 += 2 : (t3.push(`translate(` + (i2.width + i2.left).toString() + ` ` + (0 - i2.top).toString() + `)`), t3.push(`scale(-1 1)`), i2.top = i2.left = 0) : r3 && (t3.push(`translate(` + (0 - i2.left).toString() + ` ` + (i2.height + i2.top).toString() + `)`), t3.push(`scale(1 -1)`), i2.top = i2.left = 0);
    let s3;
    switch (o3 < 0 && (o3 -= Math.floor(o3 / 4) * 4), o3 %= 4, o3) {
      case 1:
        s3 = i2.height / 2 + i2.top, t3.unshift(`rotate(90 ` + s3.toString() + ` ` + s3.toString() + `)`);
        break;
      case 2:
        t3.unshift(`rotate(180 ` + (i2.width / 2 + i2.left).toString() + ` ` + (i2.height / 2 + i2.top).toString() + `)`);
        break;
      case 3:
        s3 = i2.width / 2 + i2.left, t3.unshift(`rotate(-90 ` + s3.toString() + ` ` + s3.toString() + `)`);
        break;
    }
    o3 % 2 == 1 && (i2.left !== i2.top && (s3 = i2.left, i2.left = i2.top, i2.top = s3), i2.width !== i2.height && (s3 = i2.width, i2.width = i2.height, i2.height = s3)), t3.length && (a2 = de(a2, `<g transform="` + t3.join(` `) + `">`, `</g>`));
  });
  let o2 = r2.width, s2 = r2.height, c2 = i2.width, l2 = i2.height, u2, f2;
  o2 === null ? (f2 = s2 === null ? `1em` : s2 === `auto` ? l2 : s2, u2 = ce(f2, c2 / l2)) : (u2 = o2 === `auto` ? c2 : o2, f2 = s2 === null ? ce(u2, l2 / c2) : s2 === `auto` ? l2 : s2);
  let p2 = {}, m2 = (e5, t3) => {
    fe(t3) || (p2[e5] = t3.toString());
  };
  m2(`width`, u2), m2(`height`, f2);
  let h2 = [i2.left, i2.top, c2, l2];
  return p2.viewBox = h2.join(` `), { attributes: p2, viewBox: h2, body: a2 };
}
var me = /\sid="(\S+)"/g, he = /* @__PURE__ */ new Map();
function ge(e4) {
  e4 = e4.replace(/[0-9]+$/, ``) || `a`;
  let t2 = he.get(e4) || 0;
  return he.set(e4, t2 + 1), t2 ? `${e4}${t2}` : e4;
}
function _e(e4) {
  let t2 = [], n2;
  for (; n2 = me.exec(e4); ) t2.push(n2[1]);
  if (!t2.length) return e4;
  let r2 = `suffix` + (Math.random() * 16777216 | Date.now()).toString(16);
  return t2.forEach((t3) => {
    let n3 = ge(t3), i2 = t3.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
    e4 = e4.replace(RegExp(`([#;"])(` + i2 + `)([")]|\\.[a-z])`, `g`), `$1` + n3 + r2 + `$3`);
  }), e4 = e4.replace(new RegExp(r2, `g`), ``), e4;
}
function ve(e4, t2) {
  let n2 = e4.indexOf(`xlink:`) === -1 ? `` : ` xmlns:xlink="http://www.w3.org/1999/xlink"`;
  for (let e5 in t2) n2 += ` ` + e5 + `="` + t2[e5] + `"`;
  return `<svg xmlns="http://www.w3.org/2000/svg"` + n2 + `>` + e4 + `</svg>`;
}
function g() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var _ = g();
function ye(e4) {
  _ = e4;
}
var v = { exec: () => null };
function y(e4, t2 = ``) {
  let n2 = typeof e4 == `string` ? e4 : e4.source, r2 = { replace: (e5, t3) => {
    let i2 = typeof t3 == `string` ? t3 : t3.source;
    return i2 = i2.replace(b.caret, `$1`), n2 = n2.replace(e5, i2), r2;
  }, getRegex: () => new RegExp(n2, t2) };
  return r2;
}
var be = (() => {
  try {
    return true;
  } catch {
    return false;
  }
})(), b = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e4) => RegExp(`^( {0,3}${e4})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e4) => RegExp(`^ {0,${Math.min(3, e4 - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e4) => RegExp(`^ {0,${Math.min(3, e4 - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e4) => RegExp(`^ {0,${Math.min(3, e4 - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e4) => RegExp(`^ {0,${Math.min(3, e4 - 1)}}#`), htmlBeginRegex: (e4) => RegExp(`^ {0,${Math.min(3, e4 - 1)}}<(?:[a-z].*>|!--)`, `i`) }, xe = /^(?:[ \t]*(?:\n|$))+/, Se = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Ce = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, x = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, we = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, S = /(?:[*+-]|\d{1,9}[.)])/, Te = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Ee = y(Te).replace(/bull/g, S).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, ``).getRegex(), De = y(Te).replace(/bull/g, S).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), C = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Oe = /^[^\n]+/, w = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, ke = y(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`, w).replace(`title`, /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Ae = y(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, S).getRegex(), T = `address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`, E = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, je = y(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`, `i`).replace(`comment`, E).replace(`tag`, T).replace(`attribute`, / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), D = y(C).replace(`hr`, x).replace(`heading`, ` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`, ``).replace(`|table`, ``).replace(`blockquote`, ` {0,3}>`).replace(`fences`, " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`, ` {0,3}(?:[*+-]|1[.)]) `).replace(`html`, `</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`, T).getRegex(), O = { blockquote: y(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`, D).getRegex(), code: Se, def: ke, fences: Ce, heading: we, hr: x, html: je, lheading: Ee, list: Ae, newline: xe, paragraph: D, table: v, text: Oe }, Me = y(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`, x).replace(`heading`, ` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`, ` {0,3}>`).replace(`code`, `(?: {4}| {0,3}	)[^\\n]`).replace(`fences`, " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`, ` {0,3}(?:[*+-]|1[.)]) `).replace(`html`, `</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`, T).getRegex(), Ne = { ...O, lheading: De, table: Me, paragraph: y(C).replace(`hr`, x).replace(`heading`, ` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`, ``).replace(`table`, Me).replace(`blockquote`, ` {0,3}>`).replace(`fences`, " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`, ` {0,3}(?:[*+-]|1[.)]) `).replace(`html`, `</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`, T).getRegex() }, Pe = { ...O, html: y(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`, E).replace(/tag/g, `(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: v, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: y(C).replace(`hr`, x).replace(`heading`, ` *#{1,6} *[^
]`).replace(`lheading`, Ee).replace(`|table`, ``).replace(`blockquote`, ` {0,3}>`).replace(`|fences`, ``).replace(`|list`, ``).replace(`|html`, ``).replace(`|tag`, ``).getRegex() }, Fe = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Ie = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Le = /^( {2,}|\\)\n(?!\s*$)/, Re = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, k = /[\p{P}\p{S}]/u, A = /[\s\p{P}\p{S}]/u, ze = /[^\s\p{P}\p{S}]/u, Be = y(/^((?![*_])punctSpace)/, `u`).replace(/punctSpace/g, A).getRegex(), Ve = /(?!~)[\p{P}\p{S}]/u, He = /(?!~)[\s\p{P}\p{S}]/u, Ue = /(?:[^\s\p{P}\p{S}]|~)/u, We = y(/link|precode-code|html/, `g`).replace(`link`, /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`, be ? "(?<!`)()" : "(^^|[^`])").replace(`code`, /(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`, /<(?! )[^<>]*?>/).getRegex(), Ge = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Ke = y(Ge, `u`).replace(/punct/g, k).getRegex(), qe = y(Ge, `u`).replace(/punct/g, Ve).getRegex(), Je = `^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`, Ye = y(Je, `gu`).replace(/notPunctSpace/g, ze).replace(/punctSpace/g, A).replace(/punct/g, k).getRegex(), Xe = y(Je, `gu`).replace(/notPunctSpace/g, Ue).replace(/punctSpace/g, He).replace(/punct/g, Ve).getRegex(), Ze = y(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`, `gu`).replace(/notPunctSpace/g, ze).replace(/punctSpace/g, A).replace(/punct/g, k).getRegex(), Qe = y(/\\(punct)/, `gu`).replace(/punct/g, k).getRegex(), $e = y(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`, /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`, /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), et = y(E).replace(`(?:-->|$)`, `-->`).getRegex(), tt = y(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`, et).replace(`attribute`, /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), j = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, nt = y(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace(`label`, j).replace(`href`, /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`, /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), rt = y(/^!?\[(label)\]\[(ref)\]/).replace(`label`, j).replace(`ref`, w).getRegex(), it = y(/^!?\[(ref)\](?:\[\])?/).replace(`ref`, w).getRegex(), at = y(`reflink|nolink(?!\\()`, `g`).replace(`reflink`, rt).replace(`nolink`, it).getRegex(), ot = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, M = { _backpedal: v, anyPunctuation: Qe, autolink: $e, blockSkip: We, br: Le, code: Ie, del: v, emStrongLDelim: Ke, emStrongRDelimAst: Ye, emStrongRDelimUnd: Ze, escape: Fe, link: nt, nolink: it, punctuation: Be, reflink: rt, reflinkSearch: at, tag: tt, text: Re, url: v }, st = { ...M, link: y(/^!?\[(label)\]\((.*?)\)/).replace(`label`, j).getRegex(), reflink: y(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`, j).getRegex() }, N = { ...M, emStrongRDelimAst: Xe, emStrongLDelim: qe, url: y(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`, ot).replace(`email`, /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: y(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`, ot).getRegex() }, ct = { ...N, br: y(Le).replace(`{2,}`, `*`).getRegex(), text: y(N.text).replace(`\\b_`, `\\b_| {2,}\\n`).replace(/\{2,\}/g, `*`).getRegex() }, P = { normal: O, gfm: Ne, pedantic: Pe }, F = { normal: M, gfm: N, breaks: ct, pedantic: st }, lt = { "&": `&amp;`, "<": `&lt;`, ">": `&gt;`, '"': `&quot;`, "'": `&#39;` }, ut = (e4) => lt[e4];
function I(e4, t2) {
  if (t2) {
    if (b.escapeTest.test(e4)) return e4.replace(b.escapeReplace, ut);
  } else if (b.escapeTestNoEncode.test(e4)) return e4.replace(b.escapeReplaceNoEncode, ut);
  return e4;
}
function dt(e4) {
  try {
    e4 = encodeURI(e4).replace(b.percentDecode, `%`);
  } catch {
    return null;
  }
  return e4;
}
function ft(e4, t2) {
  var _a2;
  let n2 = e4.replace(b.findPipe, (e5, t3, n3) => {
    let r3 = false, i2 = t3;
    for (; --i2 >= 0 && n3[i2] === `\\`; ) r3 = !r3;
    return r3 ? `|` : ` |`;
  }).split(b.splitPipe), r2 = 0;
  if (n2[0].trim() || n2.shift(), n2.length > 0 && !((_a2 = n2.at(-1)) == null ? void 0 : _a2.trim()) && n2.pop(), t2) if (n2.length > t2) n2.splice(t2);
  else for (; n2.length < t2; ) n2.push(``);
  for (; r2 < n2.length; r2++) n2[r2] = n2[r2].trim().replace(b.slashPipe, `|`);
  return n2;
}
function L(e4, t2, n2) {
  let r2 = e4.length;
  if (r2 === 0) return ``;
  let i2 = 0;
  for (; i2 < r2; ) {
    let a2 = e4.charAt(r2 - i2 - 1);
    if (a2 === t2 && !n2) i2++;
    else if (a2 !== t2 && n2) i2++;
    else break;
  }
  return e4.slice(0, r2 - i2);
}
function pt(e4, t2) {
  if (e4.indexOf(t2[1]) === -1) return -1;
  let n2 = 0;
  for (let r2 = 0; r2 < e4.length; r2++) if (e4[r2] === `\\`) r2++;
  else if (e4[r2] === t2[0]) n2++;
  else if (e4[r2] === t2[1] && (n2--, n2 < 0)) return r2;
  return n2 > 0 ? -2 : -1;
}
function mt(e4, t2, n2, r2, i2) {
  let a2 = t2.href, o2 = t2.title || null, s2 = e4[1].replace(i2.other.outputLinkReplace, `$1`);
  r2.state.inLink = true;
  let c2 = { type: e4[0].charAt(0) === `!` ? `image` : `link`, raw: n2, href: a2, title: o2, text: s2, tokens: r2.inlineTokens(s2) };
  return r2.state.inLink = false, c2;
}
function ht(e4, t2, n2) {
  let r2 = e4.match(n2.other.indentCodeCompensation);
  if (r2 === null) return t2;
  let i2 = r2[1];
  return t2.split(`
`).map((e5) => {
    let t3 = e5.match(n2.other.beginningSpace);
    if (t3 === null) return e5;
    let [r3] = t3;
    return r3.length >= i2.length ? e5.slice(i2.length) : e5;
  }).join(`
`);
}
var R = class {
  constructor(e4) {
    __publicField(this, "options");
    __publicField(this, "rules");
    __publicField(this, "lexer");
    this.options = e4 || _;
  }
  space(e4) {
    let t2 = this.rules.block.newline.exec(e4);
    if (t2 && t2[0].length > 0) return { type: `space`, raw: t2[0] };
  }
  code(e4) {
    let t2 = this.rules.block.code.exec(e4);
    if (t2) {
      let e5 = t2[0].replace(this.rules.other.codeRemoveIndent, ``);
      return { type: `code`, raw: t2[0], codeBlockStyle: `indented`, text: this.options.pedantic ? e5 : L(e5, `
`) };
    }
  }
  fences(e4) {
    let t2 = this.rules.block.fences.exec(e4);
    if (t2) {
      let e5 = t2[0], n2 = ht(e5, t2[3] || ``, this.rules);
      return { type: `code`, raw: e5, lang: t2[2] ? t2[2].trim().replace(this.rules.inline.anyPunctuation, `$1`) : t2[2], text: n2 };
    }
  }
  heading(e4) {
    let t2 = this.rules.block.heading.exec(e4);
    if (t2) {
      let e5 = t2[2].trim();
      if (this.rules.other.endingHash.test(e5)) {
        let t3 = L(e5, `#`);
        (this.options.pedantic || !t3 || this.rules.other.endingSpaceChar.test(t3)) && (e5 = t3.trim());
      }
      return { type: `heading`, raw: t2[0], depth: t2[1].length, text: e5, tokens: this.lexer.inline(e5) };
    }
  }
  hr(e4) {
    let t2 = this.rules.block.hr.exec(e4);
    if (t2) return { type: `hr`, raw: L(t2[0], `
`) };
  }
  blockquote(e4) {
    let t2 = this.rules.block.blockquote.exec(e4);
    if (t2) {
      let e5 = L(t2[0], `
`).split(`
`), n2 = ``, r2 = ``, i2 = [];
      for (; e5.length > 0; ) {
        let t3 = false, a2 = [], o2;
        for (o2 = 0; o2 < e5.length; o2++) if (this.rules.other.blockquoteStart.test(e5[o2])) a2.push(e5[o2]), t3 = true;
        else if (!t3) a2.push(e5[o2]);
        else break;
        e5 = e5.slice(o2);
        let s2 = a2.join(`
`), c2 = s2.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, ``);
        n2 = n2 ? `${n2}
${s2}` : s2, r2 = r2 ? `${r2}
${c2}` : c2;
        let l2 = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(c2, i2, true), this.lexer.state.top = l2, e5.length === 0) break;
        let u2 = i2.at(-1);
        if ((u2 == null ? void 0 : u2.type) === `code`) break;
        if ((u2 == null ? void 0 : u2.type) === `blockquote`) {
          let t4 = u2, a3 = t4.raw + `
` + e5.join(`
`), o3 = this.blockquote(a3);
          i2[i2.length - 1] = o3, n2 = n2.substring(0, n2.length - t4.raw.length) + o3.raw, r2 = r2.substring(0, r2.length - t4.text.length) + o3.text;
          break;
        } else if ((u2 == null ? void 0 : u2.type) === `list`) {
          let t4 = u2, a3 = t4.raw + `
` + e5.join(`
`), o3 = this.list(a3);
          i2[i2.length - 1] = o3, n2 = n2.substring(0, n2.length - u2.raw.length) + o3.raw, r2 = r2.substring(0, r2.length - t4.raw.length) + o3.raw, e5 = a3.substring(i2.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: `blockquote`, raw: n2, tokens: i2, text: r2 };
    }
  }
  list(e4) {
    let t2 = this.rules.block.list.exec(e4);
    if (t2) {
      let n2 = t2[1].trim(), r2 = n2.length > 1, i2 = { type: `list`, raw: ``, ordered: r2, start: r2 ? +n2.slice(0, -1) : ``, loose: false, items: [] };
      n2 = r2 ? `\\d{1,9}\\${n2.slice(-1)}` : `\\${n2}`, this.options.pedantic && (n2 = r2 ? n2 : `[*+-]`);
      let a2 = this.rules.other.listItemRegex(n2), o2 = false;
      for (; e4; ) {
        let n3 = false, r3 = ``, s3 = ``;
        if (!(t2 = a2.exec(e4)) || this.rules.block.hr.test(e4)) break;
        r3 = t2[0], e4 = e4.substring(r3.length);
        let c2 = t2[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (e5) => ` `.repeat(3 * e5.length)), l2 = e4.split(`
`, 1)[0], u2 = !c2.trim(), d2 = 0;
        if (this.options.pedantic ? (d2 = 2, s3 = c2.trimStart()) : u2 ? d2 = t2[1].length + 1 : (d2 = t2[2].search(this.rules.other.nonSpaceChar), d2 = d2 > 4 ? 1 : d2, s3 = c2.slice(d2), d2 += t2[1].length), u2 && this.rules.other.blankLine.test(l2) && (r3 += l2 + `
`, e4 = e4.substring(l2.length + 1), n3 = true), !n3) {
          let t3 = this.rules.other.nextBulletRegex(d2), n4 = this.rules.other.hrRegex(d2), i3 = this.rules.other.fencesBeginRegex(d2), a3 = this.rules.other.headingBeginRegex(d2), o3 = this.rules.other.htmlBeginRegex(d2);
          for (; e4; ) {
            let f3 = e4.split(`
`, 1)[0], p3;
            if (l2 = f3, this.options.pedantic ? (l2 = l2.replace(this.rules.other.listReplaceNesting, `  `), p3 = l2) : p3 = l2.replace(this.rules.other.tabCharGlobal, `    `), i3.test(l2) || a3.test(l2) || o3.test(l2) || t3.test(l2) || n4.test(l2)) break;
            if (p3.search(this.rules.other.nonSpaceChar) >= d2 || !l2.trim()) s3 += `
` + p3.slice(d2);
            else {
              if (u2 || c2.replace(this.rules.other.tabCharGlobal, `    `).search(this.rules.other.nonSpaceChar) >= 4 || i3.test(c2) || a3.test(c2) || n4.test(c2)) break;
              s3 += `
` + l2;
            }
            !u2 && !l2.trim() && (u2 = true), r3 += f3 + `
`, e4 = e4.substring(f3.length + 1), c2 = p3.slice(d2);
          }
        }
        i2.loose || (o2 ? i2.loose = true : this.rules.other.doubleBlankLine.test(r3) && (o2 = true));
        let f2 = null, p2;
        this.options.gfm && (f2 = this.rules.other.listIsTask.exec(s3), f2 && (p2 = f2[0] !== `[ ] `, s3 = s3.replace(this.rules.other.listReplaceTask, ``))), i2.items.push({ type: `list_item`, raw: r3, task: !!f2, checked: p2, loose: false, text: s3, tokens: [] }), i2.raw += r3;
      }
      let s2 = i2.items.at(-1);
      if (s2) s2.raw = s2.raw.trimEnd(), s2.text = s2.text.trimEnd();
      else return;
      i2.raw = i2.raw.trimEnd();
      for (let e5 = 0; e5 < i2.items.length; e5++) if (this.lexer.state.top = false, i2.items[e5].tokens = this.lexer.blockTokens(i2.items[e5].text, []), !i2.loose) {
        let t3 = i2.items[e5].tokens.filter((e6) => e6.type === `space`);
        i2.loose = t3.length > 0 && t3.some((e6) => this.rules.other.anyLine.test(e6.raw));
      }
      if (i2.loose) for (let e5 = 0; e5 < i2.items.length; e5++) i2.items[e5].loose = true;
      return i2;
    }
  }
  html(e4) {
    let t2 = this.rules.block.html.exec(e4);
    if (t2) return { type: `html`, block: true, raw: t2[0], pre: t2[1] === `pre` || t2[1] === `script` || t2[1] === `style`, text: t2[0] };
  }
  def(e4) {
    let t2 = this.rules.block.def.exec(e4);
    if (t2) {
      let e5 = t2[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, ` `), n2 = t2[2] ? t2[2].replace(this.rules.other.hrefBrackets, `$1`).replace(this.rules.inline.anyPunctuation, `$1`) : ``, r2 = t2[3] ? t2[3].substring(1, t2[3].length - 1).replace(this.rules.inline.anyPunctuation, `$1`) : t2[3];
      return { type: `def`, tag: e5, raw: t2[0], href: n2, title: r2 };
    }
  }
  table(e4) {
    var _a2;
    let t2 = this.rules.block.table.exec(e4);
    if (!t2 || !this.rules.other.tableDelimiter.test(t2[2])) return;
    let n2 = ft(t2[1]), r2 = t2[2].replace(this.rules.other.tableAlignChars, ``).split(`|`), i2 = ((_a2 = t2[3]) == null ? void 0 : _a2.trim()) ? t2[3].replace(this.rules.other.tableRowBlankLine, ``).split(`
`) : [], a2 = { type: `table`, raw: t2[0], header: [], align: [], rows: [] };
    if (n2.length === r2.length) {
      for (let e5 of r2) this.rules.other.tableAlignRight.test(e5) ? a2.align.push(`right`) : this.rules.other.tableAlignCenter.test(e5) ? a2.align.push(`center`) : this.rules.other.tableAlignLeft.test(e5) ? a2.align.push(`left`) : a2.align.push(null);
      for (let e5 = 0; e5 < n2.length; e5++) a2.header.push({ text: n2[e5], tokens: this.lexer.inline(n2[e5]), header: true, align: a2.align[e5] });
      for (let e5 of i2) a2.rows.push(ft(e5, a2.header.length).map((e6, t3) => ({ text: e6, tokens: this.lexer.inline(e6), header: false, align: a2.align[t3] })));
      return a2;
    }
  }
  lheading(e4) {
    let t2 = this.rules.block.lheading.exec(e4);
    if (t2) return { type: `heading`, raw: t2[0], depth: t2[2].charAt(0) === `=` ? 1 : 2, text: t2[1], tokens: this.lexer.inline(t2[1]) };
  }
  paragraph(e4) {
    let t2 = this.rules.block.paragraph.exec(e4);
    if (t2) {
      let e5 = t2[1].charAt(t2[1].length - 1) === `
` ? t2[1].slice(0, -1) : t2[1];
      return { type: `paragraph`, raw: t2[0], text: e5, tokens: this.lexer.inline(e5) };
    }
  }
  text(e4) {
    let t2 = this.rules.block.text.exec(e4);
    if (t2) return { type: `text`, raw: t2[0], text: t2[0], tokens: this.lexer.inline(t2[0]) };
  }
  escape(e4) {
    let t2 = this.rules.inline.escape.exec(e4);
    if (t2) return { type: `escape`, raw: t2[0], text: t2[1] };
  }
  tag(e4) {
    let t2 = this.rules.inline.tag.exec(e4);
    if (t2) return !this.lexer.state.inLink && this.rules.other.startATag.test(t2[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(t2[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t2[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t2[0]) && (this.lexer.state.inRawBlock = false), { type: `html`, raw: t2[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: t2[0] };
  }
  link(e4) {
    let t2 = this.rules.inline.link.exec(e4);
    if (t2) {
      let e5 = t2[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(e5)) {
        if (!this.rules.other.endAngleBracket.test(e5)) return;
        let t3 = L(e5.slice(0, -1), `\\`);
        if ((e5.length - t3.length) % 2 == 0) return;
      } else {
        let e6 = pt(t2[2], `()`);
        if (e6 === -2) return;
        if (e6 > -1) {
          let n3 = (t2[0].indexOf(`!`) === 0 ? 5 : 4) + t2[1].length + e6;
          t2[2] = t2[2].substring(0, e6), t2[0] = t2[0].substring(0, n3).trim(), t2[3] = ``;
        }
      }
      let n2 = t2[2], r2 = ``;
      if (this.options.pedantic) {
        let e6 = this.rules.other.pedanticHrefTitle.exec(n2);
        e6 && (n2 = e6[1], r2 = e6[3]);
      } else r2 = t2[3] ? t2[3].slice(1, -1) : ``;
      return n2 = n2.trim(), this.rules.other.startAngleBracket.test(n2) && (n2 = this.options.pedantic && !this.rules.other.endAngleBracket.test(e5) ? n2.slice(1) : n2.slice(1, -1)), mt(t2, { href: n2 && n2.replace(this.rules.inline.anyPunctuation, `$1`), title: r2 && r2.replace(this.rules.inline.anyPunctuation, `$1`) }, t2[0], this.lexer, this.rules);
    }
  }
  reflink(e4, t2) {
    let n2;
    if ((n2 = this.rules.inline.reflink.exec(e4)) || (n2 = this.rules.inline.nolink.exec(e4))) {
      let e5 = t2[(n2[2] || n2[1]).replace(this.rules.other.multipleSpaceGlobal, ` `).toLowerCase()];
      if (!e5) {
        let e6 = n2[0].charAt(0);
        return { type: `text`, raw: e6, text: e6 };
      }
      return mt(n2, e5, n2[0], this.lexer, this.rules);
    }
  }
  emStrong(e4, t2, n2 = ``) {
    let r2 = this.rules.inline.emStrongLDelim.exec(e4);
    if (!(!r2 || r2[3] && n2.match(this.rules.other.unicodeAlphaNumeric)) && (!(r2[1] || r2[2]) || !n2 || this.rules.inline.punctuation.exec(n2))) {
      let n3 = [...r2[0]].length - 1, i2, a2, o2 = n3, s2 = 0, c2 = r2[0][0] === `*` ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (c2.lastIndex = 0, t2 = t2.slice(-1 * e4.length + n3); (r2 = c2.exec(t2)) != null; ) {
        if (i2 = r2[1] || r2[2] || r2[3] || r2[4] || r2[5] || r2[6], !i2) continue;
        if (a2 = [...i2].length, r2[3] || r2[4]) {
          o2 += a2;
          continue;
        } else if ((r2[5] || r2[6]) && n3 % 3 && !((n3 + a2) % 3)) {
          s2 += a2;
          continue;
        }
        if (o2 -= a2, o2 > 0) continue;
        a2 = Math.min(a2, a2 + o2 + s2);
        let t3 = [...r2[0]][0].length, c3 = e4.slice(0, n3 + r2.index + t3 + a2);
        if (Math.min(n3, a2) % 2) {
          let e5 = c3.slice(1, -1);
          return { type: `em`, raw: c3, text: e5, tokens: this.lexer.inlineTokens(e5) };
        }
        let l2 = c3.slice(2, -2);
        return { type: `strong`, raw: c3, text: l2, tokens: this.lexer.inlineTokens(l2) };
      }
    }
  }
  codespan(e4) {
    let t2 = this.rules.inline.code.exec(e4);
    if (t2) {
      let e5 = t2[2].replace(this.rules.other.newLineCharGlobal, ` `), n2 = this.rules.other.nonSpaceChar.test(e5), r2 = this.rules.other.startingSpaceChar.test(e5) && this.rules.other.endingSpaceChar.test(e5);
      return n2 && r2 && (e5 = e5.substring(1, e5.length - 1)), { type: `codespan`, raw: t2[0], text: e5 };
    }
  }
  br(e4) {
    let t2 = this.rules.inline.br.exec(e4);
    if (t2) return { type: `br`, raw: t2[0] };
  }
  del(e4) {
    let t2 = this.rules.inline.del.exec(e4);
    if (t2) return { type: `del`, raw: t2[0], text: t2[2], tokens: this.lexer.inlineTokens(t2[2]) };
  }
  autolink(e4) {
    let t2 = this.rules.inline.autolink.exec(e4);
    if (t2) {
      let e5, n2;
      return t2[2] === `@` ? (e5 = t2[1], n2 = `mailto:` + e5) : (e5 = t2[1], n2 = e5), { type: `link`, raw: t2[0], text: e5, href: n2, tokens: [{ type: `text`, raw: e5, text: e5 }] };
    }
  }
  url(e4) {
    var _a2;
    let t2;
    if (t2 = this.rules.inline.url.exec(e4)) {
      let e5, n2;
      if (t2[2] === `@`) e5 = t2[0], n2 = `mailto:` + e5;
      else {
        let r2;
        do
          r2 = t2[0], t2[0] = ((_a2 = this.rules.inline._backpedal.exec(t2[0])) == null ? void 0 : _a2[0]) ?? ``;
        while (r2 !== t2[0]);
        e5 = t2[0], n2 = t2[1] === `www.` ? `http://` + t2[0] : t2[0];
      }
      return { type: `link`, raw: t2[0], text: e5, href: n2, tokens: [{ type: `text`, raw: e5, text: e5 }] };
    }
  }
  inlineText(e4) {
    let t2 = this.rules.inline.text.exec(e4);
    if (t2) {
      let e5 = this.lexer.state.inRawBlock;
      return { type: `text`, raw: t2[0], text: t2[0], escaped: e5 };
    }
  }
}, z = class e2 {
  constructor(e4) {
    __publicField(this, "tokens");
    __publicField(this, "options");
    __publicField(this, "state");
    __publicField(this, "tokenizer");
    __publicField(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e4 || _, this.options.tokenizer = this.options.tokenizer || new R(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    let t2 = { other: b, block: P.normal, inline: F.normal };
    this.options.pedantic ? (t2.block = P.pedantic, t2.inline = F.pedantic) : this.options.gfm && (t2.block = P.gfm, this.options.breaks ? t2.inline = F.breaks : t2.inline = F.gfm), this.tokenizer.rules = t2;
  }
  static get rules() {
    return { block: P, inline: F };
  }
  static lex(t2, n2) {
    return new e2(n2).lex(t2);
  }
  static lexInline(t2, n2) {
    return new e2(n2).inlineTokens(t2);
  }
  lex(e4) {
    e4 = e4.replace(b.carriageReturn, `
`), this.blockTokens(e4, this.tokens);
    for (let e5 = 0; e5 < this.inlineQueue.length; e5++) {
      let t2 = this.inlineQueue[e5];
      this.inlineTokens(t2.src, t2.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e4, t2 = [], n2 = false) {
    var _a2, _b, _c;
    for (this.options.pedantic && (e4 = e4.replace(b.tabCharGlobal, `    `).replace(b.spaceLine, ``)); e4; ) {
      let r2;
      if ((_b = (_a2 = this.options.extensions) == null ? void 0 : _a2.block) == null ? void 0 : _b.some((n3) => (r2 = n3.call({ lexer: this }, e4, t2)) ? (e4 = e4.substring(r2.raw.length), t2.push(r2), true) : false)) continue;
      if (r2 = this.tokenizer.space(e4)) {
        e4 = e4.substring(r2.raw.length);
        let n3 = t2.at(-1);
        r2.raw.length === 1 && n3 !== void 0 ? n3.raw += `
` : t2.push(r2);
        continue;
      }
      if (r2 = this.tokenizer.code(e4)) {
        e4 = e4.substring(r2.raw.length);
        let n3 = t2.at(-1);
        (n3 == null ? void 0 : n3.type) === `paragraph` || (n3 == null ? void 0 : n3.type) === `text` ? (n3.raw += (n3.raw.endsWith(`
`) ? `` : `
`) + r2.raw, n3.text += `
` + r2.text, this.inlineQueue.at(-1).src = n3.text) : t2.push(r2);
        continue;
      }
      if (r2 = this.tokenizer.fences(e4)) {
        e4 = e4.substring(r2.raw.length), t2.push(r2);
        continue;
      }
      if (r2 = this.tokenizer.heading(e4)) {
        e4 = e4.substring(r2.raw.length), t2.push(r2);
        continue;
      }
      if (r2 = this.tokenizer.hr(e4)) {
        e4 = e4.substring(r2.raw.length), t2.push(r2);
        continue;
      }
      if (r2 = this.tokenizer.blockquote(e4)) {
        e4 = e4.substring(r2.raw.length), t2.push(r2);
        continue;
      }
      if (r2 = this.tokenizer.list(e4)) {
        e4 = e4.substring(r2.raw.length), t2.push(r2);
        continue;
      }
      if (r2 = this.tokenizer.html(e4)) {
        e4 = e4.substring(r2.raw.length), t2.push(r2);
        continue;
      }
      if (r2 = this.tokenizer.def(e4)) {
        e4 = e4.substring(r2.raw.length);
        let n3 = t2.at(-1);
        (n3 == null ? void 0 : n3.type) === `paragraph` || (n3 == null ? void 0 : n3.type) === `text` ? (n3.raw += (n3.raw.endsWith(`
`) ? `` : `
`) + r2.raw, n3.text += `
` + r2.raw, this.inlineQueue.at(-1).src = n3.text) : this.tokens.links[r2.tag] || (this.tokens.links[r2.tag] = { href: r2.href, title: r2.title }, t2.push(r2));
        continue;
      }
      if (r2 = this.tokenizer.table(e4)) {
        e4 = e4.substring(r2.raw.length), t2.push(r2);
        continue;
      }
      if (r2 = this.tokenizer.lheading(e4)) {
        e4 = e4.substring(r2.raw.length), t2.push(r2);
        continue;
      }
      let i2 = e4;
      if ((_c = this.options.extensions) == null ? void 0 : _c.startBlock) {
        let t3 = 1 / 0, n3 = e4.slice(1), r3;
        this.options.extensions.startBlock.forEach((e5) => {
          r3 = e5.call({ lexer: this }, n3), typeof r3 == `number` && r3 >= 0 && (t3 = Math.min(t3, r3));
        }), t3 < 1 / 0 && t3 >= 0 && (i2 = e4.substring(0, t3 + 1));
      }
      if (this.state.top && (r2 = this.tokenizer.paragraph(i2))) {
        let a2 = t2.at(-1);
        n2 && (a2 == null ? void 0 : a2.type) === `paragraph` ? (a2.raw += (a2.raw.endsWith(`
`) ? `` : `
`) + r2.raw, a2.text += `
` + r2.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a2.text) : t2.push(r2), n2 = i2.length !== e4.length, e4 = e4.substring(r2.raw.length);
        continue;
      }
      if (r2 = this.tokenizer.text(e4)) {
        e4 = e4.substring(r2.raw.length);
        let n3 = t2.at(-1);
        (n3 == null ? void 0 : n3.type) === `text` ? (n3.raw += (n3.raw.endsWith(`
`) ? `` : `
`) + r2.raw, n3.text += `
` + r2.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = n3.text) : t2.push(r2);
        continue;
      }
      if (e4) {
        let t3 = `Infinite loop on byte: ` + e4.charCodeAt(0);
        if (this.options.silent) {
          console.error(t3);
          break;
        } else throw Error(t3);
      }
    }
    return this.state.top = true, t2;
  }
  inline(e4, t2 = []) {
    return this.inlineQueue.push({ src: e4, tokens: t2 }), t2;
  }
  inlineTokens(e4, t2 = []) {
    var _a2, _b, _c, _d, _e2;
    let n2 = e4, r2 = null;
    if (this.tokens.links) {
      let e5 = Object.keys(this.tokens.links);
      if (e5.length > 0) for (; (r2 = this.tokenizer.rules.inline.reflinkSearch.exec(n2)) != null; ) e5.includes(r2[0].slice(r2[0].lastIndexOf(`[`) + 1, -1)) && (n2 = n2.slice(0, r2.index) + `[` + `a`.repeat(r2[0].length - 2) + `]` + n2.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (r2 = this.tokenizer.rules.inline.anyPunctuation.exec(n2)) != null; ) n2 = n2.slice(0, r2.index) + `++` + n2.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let i2;
    for (; (r2 = this.tokenizer.rules.inline.blockSkip.exec(n2)) != null; ) i2 = r2[2] ? r2[2].length : 0, n2 = n2.slice(0, r2.index + i2) + `[` + `a`.repeat(r2[0].length - i2 - 2) + `]` + n2.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    n2 = ((_b = (_a2 = this.options.hooks) == null ? void 0 : _a2.emStrongMask) == null ? void 0 : _b.call({ lexer: this }, n2)) ?? n2;
    let a2 = false, o2 = ``;
    for (; e4; ) {
      a2 || (o2 = ``), a2 = false;
      let r3;
      if ((_d = (_c = this.options.extensions) == null ? void 0 : _c.inline) == null ? void 0 : _d.some((n3) => (r3 = n3.call({ lexer: this }, e4, t2)) ? (e4 = e4.substring(r3.raw.length), t2.push(r3), true) : false)) continue;
      if (r3 = this.tokenizer.escape(e4)) {
        e4 = e4.substring(r3.raw.length), t2.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.tag(e4)) {
        e4 = e4.substring(r3.raw.length), t2.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.link(e4)) {
        e4 = e4.substring(r3.raw.length), t2.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.reflink(e4, this.tokens.links)) {
        e4 = e4.substring(r3.raw.length);
        let n3 = t2.at(-1);
        r3.type === `text` && (n3 == null ? void 0 : n3.type) === `text` ? (n3.raw += r3.raw, n3.text += r3.text) : t2.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.emStrong(e4, n2, o2)) {
        e4 = e4.substring(r3.raw.length), t2.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.codespan(e4)) {
        e4 = e4.substring(r3.raw.length), t2.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.br(e4)) {
        e4 = e4.substring(r3.raw.length), t2.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.del(e4)) {
        e4 = e4.substring(r3.raw.length), t2.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.autolink(e4)) {
        e4 = e4.substring(r3.raw.length), t2.push(r3);
        continue;
      }
      if (!this.state.inLink && (r3 = this.tokenizer.url(e4))) {
        e4 = e4.substring(r3.raw.length), t2.push(r3);
        continue;
      }
      let i3 = e4;
      if ((_e2 = this.options.extensions) == null ? void 0 : _e2.startInline) {
        let t3 = 1 / 0, n3 = e4.slice(1), r4;
        this.options.extensions.startInline.forEach((e5) => {
          r4 = e5.call({ lexer: this }, n3), typeof r4 == `number` && r4 >= 0 && (t3 = Math.min(t3, r4));
        }), t3 < 1 / 0 && t3 >= 0 && (i3 = e4.substring(0, t3 + 1));
      }
      if (r3 = this.tokenizer.inlineText(i3)) {
        e4 = e4.substring(r3.raw.length), r3.raw.slice(-1) !== `_` && (o2 = r3.raw.slice(-1)), a2 = true;
        let n3 = t2.at(-1);
        (n3 == null ? void 0 : n3.type) === `text` ? (n3.raw += r3.raw, n3.text += r3.text) : t2.push(r3);
        continue;
      }
      if (e4) {
        let t3 = `Infinite loop on byte: ` + e4.charCodeAt(0);
        if (this.options.silent) {
          console.error(t3);
          break;
        } else throw Error(t3);
      }
    }
    return t2;
  }
}, B = class {
  constructor(e4) {
    __publicField(this, "options");
    __publicField(this, "parser");
    this.options = e4 || _;
  }
  space(e4) {
    return ``;
  }
  code({ text: e4, lang: t2, escaped: n2 }) {
    var _a2;
    let r2 = (_a2 = (t2 || ``).match(b.notSpaceStart)) == null ? void 0 : _a2[0], i2 = e4.replace(b.endingNewline, ``) + `
`;
    return r2 ? `<pre><code class="language-` + I(r2) + `">` + (n2 ? i2 : I(i2, true)) + `</code></pre>
` : `<pre><code>` + (n2 ? i2 : I(i2, true)) + `</code></pre>
`;
  }
  blockquote({ tokens: e4 }) {
    return `<blockquote>
${this.parser.parse(e4)}</blockquote>
`;
  }
  html({ text: e4 }) {
    return e4;
  }
  def(e4) {
    return ``;
  }
  heading({ tokens: e4, depth: t2 }) {
    return `<h${t2}>${this.parser.parseInline(e4)}</h${t2}>
`;
  }
  hr(e4) {
    return `<hr>
`;
  }
  list(e4) {
    let t2 = e4.ordered, n2 = e4.start, r2 = ``;
    for (let t3 = 0; t3 < e4.items.length; t3++) {
      let n3 = e4.items[t3];
      r2 += this.listitem(n3);
    }
    let i2 = t2 ? `ol` : `ul`, a2 = t2 && n2 !== 1 ? ` start="` + n2 + `"` : ``;
    return `<` + i2 + a2 + `>
` + r2 + `</` + i2 + `>
`;
  }
  listitem(e4) {
    var _a2;
    let t2 = ``;
    if (e4.task) {
      let n2 = this.checkbox({ checked: !!e4.checked });
      e4.loose ? ((_a2 = e4.tokens[0]) == null ? void 0 : _a2.type) === `paragraph` ? (e4.tokens[0].text = n2 + ` ` + e4.tokens[0].text, e4.tokens[0].tokens && e4.tokens[0].tokens.length > 0 && e4.tokens[0].tokens[0].type === `text` && (e4.tokens[0].tokens[0].text = n2 + ` ` + I(e4.tokens[0].tokens[0].text), e4.tokens[0].tokens[0].escaped = true)) : e4.tokens.unshift({ type: `text`, raw: n2 + ` `, text: n2 + ` `, escaped: true }) : t2 += n2 + ` `;
    }
    return t2 += this.parser.parse(e4.tokens, !!e4.loose), `<li>${t2}</li>
`;
  }
  checkbox({ checked: e4 }) {
    return `<input ` + (e4 ? `checked="" ` : ``) + `disabled="" type="checkbox">`;
  }
  paragraph({ tokens: e4 }) {
    return `<p>${this.parser.parseInline(e4)}</p>
`;
  }
  table(e4) {
    let t2 = ``, n2 = ``;
    for (let t3 = 0; t3 < e4.header.length; t3++) n2 += this.tablecell(e4.header[t3]);
    t2 += this.tablerow({ text: n2 });
    let r2 = ``;
    for (let t3 = 0; t3 < e4.rows.length; t3++) {
      let i2 = e4.rows[t3];
      n2 = ``;
      for (let e5 = 0; e5 < i2.length; e5++) n2 += this.tablecell(i2[e5]);
      r2 += this.tablerow({ text: n2 });
    }
    return r2 && (r2 = `<tbody>${r2}</tbody>`), `<table>
<thead>
` + t2 + `</thead>
` + r2 + `</table>
`;
  }
  tablerow({ text: e4 }) {
    return `<tr>
${e4}</tr>
`;
  }
  tablecell(e4) {
    let t2 = this.parser.parseInline(e4.tokens), n2 = e4.header ? `th` : `td`;
    return (e4.align ? `<${n2} align="${e4.align}">` : `<${n2}>`) + t2 + `</${n2}>
`;
  }
  strong({ tokens: e4 }) {
    return `<strong>${this.parser.parseInline(e4)}</strong>`;
  }
  em({ tokens: e4 }) {
    return `<em>${this.parser.parseInline(e4)}</em>`;
  }
  codespan({ text: e4 }) {
    return `<code>${I(e4, true)}</code>`;
  }
  br(e4) {
    return `<br>`;
  }
  del({ tokens: e4 }) {
    return `<del>${this.parser.parseInline(e4)}</del>`;
  }
  link({ href: e4, title: t2, tokens: n2 }) {
    let r2 = this.parser.parseInline(n2), i2 = dt(e4);
    if (i2 === null) return r2;
    e4 = i2;
    let a2 = `<a href="` + e4 + `"`;
    return t2 && (a2 += ` title="` + I(t2) + `"`), a2 += `>` + r2 + `</a>`, a2;
  }
  image({ href: e4, title: t2, text: n2, tokens: r2 }) {
    r2 && (n2 = this.parser.parseInline(r2, this.parser.textRenderer));
    let i2 = dt(e4);
    if (i2 === null) return I(n2);
    e4 = i2;
    let a2 = `<img src="${e4}" alt="${n2}"`;
    return t2 && (a2 += ` title="${I(t2)}"`), a2 += `>`, a2;
  }
  text(e4) {
    return `tokens` in e4 && e4.tokens ? this.parser.parseInline(e4.tokens) : `escaped` in e4 && e4.escaped ? e4.text : I(e4.text);
  }
}, V = class {
  strong({ text: e4 }) {
    return e4;
  }
  em({ text: e4 }) {
    return e4;
  }
  codespan({ text: e4 }) {
    return e4;
  }
  del({ text: e4 }) {
    return e4;
  }
  html({ text: e4 }) {
    return e4;
  }
  text({ text: e4 }) {
    return e4;
  }
  link({ text: e4 }) {
    return `` + e4;
  }
  image({ text: e4 }) {
    return `` + e4;
  }
  br() {
    return ``;
  }
}, H = class e3 {
  constructor(e4) {
    __publicField(this, "options");
    __publicField(this, "renderer");
    __publicField(this, "textRenderer");
    this.options = e4 || _, this.options.renderer = this.options.renderer || new B(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new V();
  }
  static parse(t2, n2) {
    return new e3(n2).parse(t2);
  }
  static parseInline(t2, n2) {
    return new e3(n2).parseInline(t2);
  }
  parse(e4, t2 = true) {
    var _a2, _b;
    let n2 = ``;
    for (let r2 = 0; r2 < e4.length; r2++) {
      let i2 = e4[r2];
      if ((_b = (_a2 = this.options.extensions) == null ? void 0 : _a2.renderers) == null ? void 0 : _b[i2.type]) {
        let e5 = i2, t3 = this.options.extensions.renderers[e5.type].call({ parser: this }, e5);
        if (t3 !== false || ![`space`, `hr`, `heading`, `code`, `table`, `blockquote`, `list`, `html`, `def`, `paragraph`, `text`].includes(e5.type)) {
          n2 += t3 || ``;
          continue;
        }
      }
      let a2 = i2;
      switch (a2.type) {
        case `space`:
          n2 += this.renderer.space(a2);
          continue;
        case `hr`:
          n2 += this.renderer.hr(a2);
          continue;
        case `heading`:
          n2 += this.renderer.heading(a2);
          continue;
        case `code`:
          n2 += this.renderer.code(a2);
          continue;
        case `table`:
          n2 += this.renderer.table(a2);
          continue;
        case `blockquote`:
          n2 += this.renderer.blockquote(a2);
          continue;
        case `list`:
          n2 += this.renderer.list(a2);
          continue;
        case `html`:
          n2 += this.renderer.html(a2);
          continue;
        case `def`:
          n2 += this.renderer.def(a2);
          continue;
        case `paragraph`:
          n2 += this.renderer.paragraph(a2);
          continue;
        case `text`: {
          let i3 = a2, o2 = this.renderer.text(i3);
          for (; r2 + 1 < e4.length && e4[r2 + 1].type === `text`; ) i3 = e4[++r2], o2 += `
` + this.renderer.text(i3);
          t2 ? n2 += this.renderer.paragraph({ type: `paragraph`, raw: o2, text: o2, tokens: [{ type: `text`, raw: o2, text: o2, escaped: true }] }) : n2 += o2;
          continue;
        }
        default: {
          let e5 = `Token with "` + a2.type + `" type was not found.`;
          if (this.options.silent) return console.error(e5), ``;
          throw Error(e5);
        }
      }
    }
    return n2;
  }
  parseInline(e4, t2 = this.renderer) {
    var _a2, _b;
    let n2 = ``;
    for (let r2 = 0; r2 < e4.length; r2++) {
      let i2 = e4[r2];
      if ((_b = (_a2 = this.options.extensions) == null ? void 0 : _a2.renderers) == null ? void 0 : _b[i2.type]) {
        let e5 = this.options.extensions.renderers[i2.type].call({ parser: this }, i2);
        if (e5 !== false || ![`escape`, `html`, `link`, `image`, `strong`, `em`, `codespan`, `br`, `del`, `text`].includes(i2.type)) {
          n2 += e5 || ``;
          continue;
        }
      }
      let a2 = i2;
      switch (a2.type) {
        case `escape`:
          n2 += t2.text(a2);
          break;
        case `html`:
          n2 += t2.html(a2);
          break;
        case `link`:
          n2 += t2.link(a2);
          break;
        case `image`:
          n2 += t2.image(a2);
          break;
        case `strong`:
          n2 += t2.strong(a2);
          break;
        case `em`:
          n2 += t2.em(a2);
          break;
        case `codespan`:
          n2 += t2.codespan(a2);
          break;
        case `br`:
          n2 += t2.br(a2);
          break;
        case `del`:
          n2 += t2.del(a2);
          break;
        case `text`:
          n2 += t2.text(a2);
          break;
        default: {
          let e5 = `Token with "` + a2.type + `" type was not found.`;
          if (this.options.silent) return console.error(e5), ``;
          throw Error(e5);
        }
      }
    }
    return n2;
  }
}, U = (_a = class {
  constructor(e4) {
    __publicField(this, "options");
    __publicField(this, "block");
    this.options = e4 || _;
  }
  preprocess(e4) {
    return e4;
  }
  postprocess(e4) {
    return e4;
  }
  processAllTokens(e4) {
    return e4;
  }
  emStrongMask(e4) {
    return e4;
  }
  provideLexer() {
    return this.block ? z.lex : z.lexInline;
  }
  provideParser() {
    return this.block ? H.parse : H.parseInline;
  }
}, __publicField(_a, "passThroughHooks", /* @__PURE__ */ new Set([`preprocess`, `postprocess`, `processAllTokens`, `emStrongMask`])), __publicField(_a, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set([`preprocess`, `postprocess`, `processAllTokens`])), _a), W = new class {
  constructor(...e4) {
    __publicField(this, "defaults", g());
    __publicField(this, "options", this.setOptions);
    __publicField(this, "parse", this.parseMarkdown(true));
    __publicField(this, "parseInline", this.parseMarkdown(false));
    __publicField(this, "Parser", H);
    __publicField(this, "Renderer", B);
    __publicField(this, "TextRenderer", V);
    __publicField(this, "Lexer", z);
    __publicField(this, "Tokenizer", R);
    __publicField(this, "Hooks", U);
    this.use(...e4);
  }
  walkTokens(e4, t2) {
    var _a2, _b;
    let n2 = [];
    for (let r2 of e4) switch (n2 = n2.concat(t2.call(this, r2)), r2.type) {
      case `table`: {
        let e5 = r2;
        for (let r3 of e5.header) n2 = n2.concat(this.walkTokens(r3.tokens, t2));
        for (let r3 of e5.rows) for (let e6 of r3) n2 = n2.concat(this.walkTokens(e6.tokens, t2));
        break;
      }
      case `list`: {
        let e5 = r2;
        n2 = n2.concat(this.walkTokens(e5.items, t2));
        break;
      }
      default: {
        let e5 = r2;
        ((_b = (_a2 = this.defaults.extensions) == null ? void 0 : _a2.childTokens) == null ? void 0 : _b[e5.type]) ? this.defaults.extensions.childTokens[e5.type].forEach((r3) => {
          let i2 = e5[r3].flat(1 / 0);
          n2 = n2.concat(this.walkTokens(i2, t2));
        }) : e5.tokens && (n2 = n2.concat(this.walkTokens(e5.tokens, t2)));
      }
    }
    return n2;
  }
  use(...e4) {
    let t2 = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e4.forEach((e5) => {
      let n2 = { ...e5 };
      if (n2.async = this.defaults.async || n2.async || false, e5.extensions && (e5.extensions.forEach((e6) => {
        if (!e6.name) throw Error(`extension name required`);
        if (`renderer` in e6) {
          let n3 = t2.renderers[e6.name];
          n3 ? t2.renderers[e6.name] = function(...t3) {
            let r2 = e6.renderer.apply(this, t3);
            return r2 === false && (r2 = n3.apply(this, t3)), r2;
          } : t2.renderers[e6.name] = e6.renderer;
        }
        if (`tokenizer` in e6) {
          if (!e6.level || e6.level !== `block` && e6.level !== `inline`) throw Error(`extension level must be 'block' or 'inline'`);
          let n3 = t2[e6.level];
          n3 ? n3.unshift(e6.tokenizer) : t2[e6.level] = [e6.tokenizer], e6.start && (e6.level === `block` ? t2.startBlock ? t2.startBlock.push(e6.start) : t2.startBlock = [e6.start] : e6.level === `inline` && (t2.startInline ? t2.startInline.push(e6.start) : t2.startInline = [e6.start]));
        }
        `childTokens` in e6 && e6.childTokens && (t2.childTokens[e6.name] = e6.childTokens);
      }), n2.extensions = t2), e5.renderer) {
        let t3 = this.defaults.renderer || new B(this.defaults);
        for (let n3 in e5.renderer) {
          if (!(n3 in t3)) throw Error(`renderer '${n3}' does not exist`);
          if ([`options`, `parser`].includes(n3)) continue;
          let r2 = n3, i2 = e5.renderer[r2], a2 = t3[r2];
          t3[r2] = (...e6) => {
            let n4 = i2.apply(t3, e6);
            return n4 === false && (n4 = a2.apply(t3, e6)), n4 || ``;
          };
        }
        n2.renderer = t3;
      }
      if (e5.tokenizer) {
        let t3 = this.defaults.tokenizer || new R(this.defaults);
        for (let n3 in e5.tokenizer) {
          if (!(n3 in t3)) throw Error(`tokenizer '${n3}' does not exist`);
          if ([`options`, `rules`, `lexer`].includes(n3)) continue;
          let r2 = n3, i2 = e5.tokenizer[r2], a2 = t3[r2];
          t3[r2] = (...e6) => {
            let n4 = i2.apply(t3, e6);
            return n4 === false && (n4 = a2.apply(t3, e6)), n4;
          };
        }
        n2.tokenizer = t3;
      }
      if (e5.hooks) {
        let t3 = this.defaults.hooks || new U();
        for (let n3 in e5.hooks) {
          if (!(n3 in t3)) throw Error(`hook '${n3}' does not exist`);
          if ([`options`, `block`].includes(n3)) continue;
          let r2 = n3, i2 = e5.hooks[r2], a2 = t3[r2];
          U.passThroughHooks.has(n3) ? t3[r2] = (e6) => {
            if (this.defaults.async && U.passThroughHooksRespectAsync.has(n3)) return (async () => {
              let n4 = await i2.call(t3, e6);
              return a2.call(t3, n4);
            })();
            let r3 = i2.call(t3, e6);
            return a2.call(t3, r3);
          } : t3[r2] = (...e6) => {
            if (this.defaults.async) return (async () => {
              let n5 = await i2.apply(t3, e6);
              return n5 === false && (n5 = await a2.apply(t3, e6)), n5;
            })();
            let n4 = i2.apply(t3, e6);
            return n4 === false && (n4 = a2.apply(t3, e6)), n4;
          };
        }
        n2.hooks = t3;
      }
      if (e5.walkTokens) {
        let t3 = this.defaults.walkTokens, r2 = e5.walkTokens;
        n2.walkTokens = function(e6) {
          let n3 = [];
          return n3.push(r2.call(this, e6)), t3 && (n3 = n3.concat(t3.call(this, e6))), n3;
        };
      }
      this.defaults = { ...this.defaults, ...n2 };
    }), this;
  }
  setOptions(e4) {
    return this.defaults = { ...this.defaults, ...e4 }, this;
  }
  lexer(e4, t2) {
    return z.lex(e4, t2 ?? this.defaults);
  }
  parser(e4, t2) {
    return H.parse(e4, t2 ?? this.defaults);
  }
  parseMarkdown(e4) {
    return (t2, n2) => {
      let r2 = { ...n2 }, i2 = { ...this.defaults, ...r2 }, a2 = this.onError(!!i2.silent, !!i2.async);
      if (this.defaults.async === true && r2.async === false) return a2(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));
      if (typeof t2 > `u` || t2 === null) return a2(Error(`marked(): input parameter is undefined or null`));
      if (typeof t2 != `string`) return a2(Error(`marked(): input parameter is of type ` + Object.prototype.toString.call(t2) + `, string expected`));
      if (i2.hooks && (i2.hooks.options = i2, i2.hooks.block = e4), i2.async) return (async () => {
        let n3 = i2.hooks ? await i2.hooks.preprocess(t2) : t2, r3 = await (i2.hooks ? await i2.hooks.provideLexer() : e4 ? z.lex : z.lexInline)(n3, i2), a3 = i2.hooks ? await i2.hooks.processAllTokens(r3) : r3;
        i2.walkTokens && await Promise.all(this.walkTokens(a3, i2.walkTokens));
        let o2 = await (i2.hooks ? await i2.hooks.provideParser() : e4 ? H.parse : H.parseInline)(a3, i2);
        return i2.hooks ? await i2.hooks.postprocess(o2) : o2;
      })().catch(a2);
      try {
        i2.hooks && (t2 = i2.hooks.preprocess(t2));
        let n3 = (i2.hooks ? i2.hooks.provideLexer() : e4 ? z.lex : z.lexInline)(t2, i2);
        i2.hooks && (n3 = i2.hooks.processAllTokens(n3)), i2.walkTokens && this.walkTokens(n3, i2.walkTokens);
        let r3 = (i2.hooks ? i2.hooks.provideParser() : e4 ? H.parse : H.parseInline)(n3, i2);
        return i2.hooks && (r3 = i2.hooks.postprocess(r3)), r3;
      } catch (e5) {
        return a2(e5);
      }
    };
  }
  onError(e4, t2) {
    return (n2) => {
      if (n2.message += `
Please report this to https://github.com/markedjs/marked.`, e4) {
        let e5 = `<p>An error occurred:</p><pre>` + I(n2.message + ``, true) + `</pre>`;
        return t2 ? Promise.resolve(e5) : e5;
      }
      if (t2) return Promise.reject(n2);
      throw n2;
    };
  }
}();
function G(e4, t2) {
  return W.parse(e4, t2);
}
G.options = G.setOptions = function(e4) {
  return W.setOptions(e4), G.defaults = W.defaults, ye(G.defaults), G;
}, G.getDefaults = g, G.defaults = _, G.use = function(...e4) {
  return W.use(...e4), G.defaults = W.defaults, ye(G.defaults), G;
}, G.walkTokens = function(e4, t2) {
  return W.walkTokens(e4, t2);
}, G.parseInline = W.parseInline, G.Parser = H, G.parser = H.parse, G.Renderer = B, G.TextRenderer = V, G.Lexer = z, G.lexer = z.lex, G.Tokenizer = R, G.Hooks = U, G.parse = G, G.options, G.setOptions, G.use, G.walkTokens, G.parseInline, H.parse, z.lex;
function gt(e4) {
  var t2 = [...arguments].slice(1), n2 = Array.from(typeof e4 == `string` ? [e4] : e4);
  n2[n2.length - 1] = n2[n2.length - 1].replace(/\r?\n([\t ]*)$/, ``);
  var r2 = n2.reduce(function(e5, t3) {
    var n3 = t3.match(/\n([\t ]+|(?!\s).)/g);
    return n3 ? e5.concat(n3.map(function(e6) {
      var _a2;
      return ((_a2 = e6.match(/[\t ]/g)) == null ? void 0 : _a2.length) ?? 0;
    })) : e5;
  }, []);
  if (r2.length) {
    var i2 = RegExp(`
[	 ]{` + Math.min.apply(Math, r2) + `}`, `g`);
    n2 = n2.map(function(e5) {
      return e5.replace(i2, `
`);
    });
  }
  n2[0] = n2[0].replace(/^\r?\n/, ``);
  var a2 = n2[0];
  return t2.forEach(function(e5, t3) {
    var r3 = a2.match(/(?:^|\n)( *)$/), i3 = r3 ? r3[1] : ``, o2 = e5;
    typeof e5 == `string` && e5.includes(`
`) && (o2 = String(e5).split(`
`).map(function(e6, t4) {
      return t4 === 0 ? e6 : `` + i3 + e6;
    }).join(`
`)), a2 += o2 + n2[t3 + 1];
  }), a2;
}
var _t = { body: `<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>`, height: 80, width: 80 }, K = /* @__PURE__ */ new Map(), vt = /* @__PURE__ */ new Map(), yt = o((e4) => {
  for (let t2 of e4) {
    if (!t2.name) throw Error(`Invalid icon loader. Must have a "name" property with non-empty string value.`);
    if (a.debug(`Registering icon pack:`, t2.name), `loader` in t2) vt.set(t2.name, t2.loader);
    else if (`icons` in t2) K.set(t2.name, t2.icons);
    else throw a.error(`Invalid icon loader:`, t2), Error(`Invalid icon loader. Must have either "icons" or "loader" property.`);
  }
}, `registerIconPacks`), bt = o(async (e4, t2) => {
  let n2 = m(e4, true, t2 !== void 0);
  if (!n2) throw Error(`Invalid icon name: ${e4}`);
  let r2 = n2.prefix || t2;
  if (!r2) throw Error(`Icon name must contain a prefix: ${e4}`);
  let i2 = K.get(r2);
  if (!i2) {
    let e5 = vt.get(r2);
    if (!e5) throw Error(`Icon set not found: ${n2.prefix}`);
    try {
      i2 = { ...await e5(), prefix: r2 }, K.set(r2, i2);
    } catch (e6) {
      throw a.error(e6), Error(`Failed to load icon set: ${n2.prefix}`);
    }
  }
  let o2 = ae(i2, n2.name);
  if (!o2) throw Error(`Icon not found: ${e4}`);
  return o2;
}, `getRegisteredIconData`), xt = o(async (e4) => {
  try {
    return await bt(e4), true;
  } catch {
    return false;
  }
}, `isIconAvailable`), St = o(async (t2, n2, r2) => {
  let o2;
  try {
    o2 = await bt(t2, n2 == null ? void 0 : n2.fallbackPrefix);
  } catch (e4) {
    a.error(e4), o2 = _t;
  }
  let s2 = pe(o2, n2);
  return e(ve(_e(s2.body), { ...s2.attributes, ...r2 }), i());
}, `getIconSVG`);
function Ct(e4, { markdownAutoWrap: t2 }) {
  let n2 = gt(e4.replace(/<br\/>/g, `
`).replace(/\n{2,}/g, `
`));
  return t2 === false ? n2.replace(/ /g, `&nbsp;`) : n2;
}
o(Ct, `preprocessMarkdown`);
function wt(e4, t2 = {}) {
  let n2 = Ct(e4, t2), r2 = G.lexer(n2), i2 = [[]], a2 = 0;
  function s2(e5, t3 = `normal`) {
    e5.type === `text` ? e5.text.split(`
`).forEach((e6, n3) => {
      n3 !== 0 && (a2++, i2.push([])), e6.split(` `).forEach((e7) => {
        e7 = e7.replace(/&#39;/g, `'`), e7 && i2[a2].push({ content: e7, type: t3 });
      });
    }) : e5.type === `strong` || e5.type === `em` ? e5.tokens.forEach((t4) => {
      s2(t4, e5.type);
    }) : e5.type === `html` && i2[a2].push({ content: e5.text, type: `normal` });
  }
  return o(s2, `processNode`), r2.forEach((e5) => {
    var _a2;
    e5.type === `paragraph` ? (_a2 = e5.tokens) == null ? void 0 : _a2.forEach((e6) => {
      s2(e6);
    }) : e5.type === `html` ? i2[a2].push({ content: e5.text, type: `normal` }) : i2[a2].push({ content: e5.raw, type: `normal` });
  }), i2;
}
o(wt, `markdownToLines`);
function Tt(e4, { markdownAutoWrap: t2 } = {}) {
  let n2 = G.lexer(e4);
  function r2(e5) {
    var _a2, _b, _c;
    return e5.type === `text` ? t2 === false ? e5.text.replace(/\n */g, `<br/>`).replace(/ /g, `&nbsp;`) : e5.text.replace(/\n */g, `<br/>`) : e5.type === `strong` ? `<strong>${(_a2 = e5.tokens) == null ? void 0 : _a2.map(r2).join(``)}</strong>` : e5.type === `em` ? `<em>${(_b = e5.tokens) == null ? void 0 : _b.map(r2).join(``)}</em>` : e5.type === `paragraph` ? `<p>${(_c = e5.tokens) == null ? void 0 : _c.map(r2).join(``)}</p>` : e5.type === `space` ? `` : e5.type === `html` ? `${e5.text}` : e5.type === `escape` ? e5.text : (a.warn(`Unsupported markdown: ${e5.type}`), e5.raw);
  }
  return o(r2, `output`), n2.map(r2).join(``);
}
o(Tt, `markdownToHTML`);
function q(e4) {
  return Intl.Segmenter ? [...new Intl.Segmenter().segment(e4)].map((e5) => e5.segment) : [...e4];
}
o(q, `splitTextToChars`);
function Et(e4, t2) {
  return J(e4, [], q(t2.content), t2.type);
}
o(Et, `splitWordToFitWidth`);
function J(e4, t2, n2, r2) {
  if (n2.length === 0) return [{ content: t2.join(``), type: r2 }, { content: ``, type: r2 }];
  let [i2, ...a2] = n2, o2 = [...t2, i2];
  return e4([{ content: o2.join(``), type: r2 }]) ? J(e4, o2, a2, r2) : (t2.length === 0 && i2 && (t2.push(i2), n2.shift()), [{ content: t2.join(``), type: r2 }, { content: n2.join(``), type: r2 }]);
}
o(J, `splitWordToFitWidthRecursion`);
function Dt(e4, t2) {
  if (e4.some(({ content: e5 }) => e5.includes(`
`))) throw Error(`splitLineToFitWidth does not support newlines in the line`);
  return Y(e4, t2);
}
o(Dt, `splitLineToFitWidth`);
function Y(e4, t2, n2 = [], r2 = []) {
  if (e4.length === 0) return r2.length > 0 && n2.push(r2), n2.length > 0 ? n2 : [];
  let i2 = ``;
  e4[0].content === ` ` && (i2 = ` `, e4.shift());
  let a2 = e4.shift() ?? { content: ` `, type: `normal` }, o2 = [...r2];
  if (i2 !== `` && o2.push({ content: i2, type: `normal` }), o2.push(a2), t2(o2)) return Y(e4, t2, n2, o2);
  if (r2.length > 0) n2.push(r2), e4.unshift(a2);
  else if (a2.content) {
    let [r3, i3] = Et(t2, a2);
    n2.push([r3]), i3.content && e4.unshift(i3);
  }
  return Y(e4, t2, n2);
}
o(Y, `splitLineToFitWidthRecursion`);
function X(e4, t2) {
  t2 && e4.attr(`style`, t2);
}
o(X, `applyStyle`);
async function Ot(a2, o2, s2, c2, l2 = false, u2 = i()) {
  let d2 = a2.append(`foreignObject`);
  d2.attr(`width`, `${10 * s2}px`), d2.attr(`height`, `${10 * s2}px`);
  let f2 = d2.append(`xhtml:div`), p2 = n(o2.label) ? await t(o2.label.replace(r.lineBreakRegex, `
`), u2) : e(o2.label, u2), ee2 = o2.isNode ? `nodeLabel` : `edgeLabel`, m2 = f2.append(`span`);
  m2.html(p2), X(m2, o2.labelStyle), m2.attr(`class`, `${ee2} ${c2}`), X(f2, o2.labelStyle), f2.style(`display`, `table-cell`), f2.style(`white-space`, `nowrap`), f2.style(`line-height`, `1.5`), f2.style(`max-width`, s2 + `px`), f2.style(`text-align`, `center`), f2.attr(`xmlns`, `http://www.w3.org/1999/xhtml`), l2 && f2.attr(`class`, `labelBkg`);
  let h2 = f2.node().getBoundingClientRect();
  return h2.width === s2 && (f2.style(`display`, `table`), f2.style(`white-space`, `break-spaces`), f2.style(`width`, s2 + `px`), h2 = f2.node().getBoundingClientRect()), d2.node();
}
o(Ot, `addHtmlSpan`);
function Z(e4, t2, n2) {
  return e4.append(`tspan`).attr(`class`, `text-outer-tspan`).attr(`x`, 0).attr(`y`, t2 * n2 - 0.1 + `em`).attr(`dy`, n2 + `em`);
}
o(Z, `createTspan`);
function kt(e4, t2, n2) {
  let r2 = e4.append(`text`), i2 = Z(r2, 1, t2);
  Q(i2, n2);
  let a2 = i2.node().getComputedTextLength();
  return r2.remove(), a2;
}
o(kt, `computeWidthOfText`);
function At(e4, t2, n2) {
  var _a2;
  let r2 = e4.append(`text`), i2 = Z(r2, 1, t2);
  Q(i2, [{ content: n2, type: `normal` }]);
  let a2 = (_a2 = i2.node()) == null ? void 0 : _a2.getBoundingClientRect();
  return a2 && r2.remove(), a2;
}
o(At, `computeDimensionOfText`);
function jt(e4, t2, n2, r2 = false) {
  let i2 = 1.1, a2 = t2.append(`g`), s2 = a2.insert(`rect`).attr(`class`, `background`).attr(`style`, `stroke: none`), c2 = a2.append(`text`).attr(`y`, `-10.1`), l2 = 0;
  for (let t3 of n2) {
    let n3 = o((t4) => kt(a2, i2, t4) <= e4, `checkWidth`), r3 = n3(t3) ? [t3] : Dt(t3, n3);
    for (let e5 of r3) Q(Z(c2, l2, i2), e5), l2++;
  }
  if (r2) {
    let e5 = c2.node().getBBox();
    return s2.attr(`x`, e5.x - 2).attr(`y`, e5.y - 2).attr(`width`, e5.width + 4).attr(`height`, e5.height + 4), a2.node();
  } else return c2.node();
}
o(jt, `createFormattedText`);
function Q(e4, t2) {
  e4.text(``), t2.forEach((t3, n2) => {
    let r2 = e4.append(`tspan`).attr(`font-style`, t3.type === `em` ? `italic` : `normal`).attr(`class`, `text-inner-tspan`).attr(`font-weight`, t3.type === `strong` ? `bold` : `normal`);
    n2 === 0 ? r2.text(t3.content) : r2.text(` ` + t3.content);
  });
}
o(Q, `updateTextContentAndStyles`);
async function $(t2, n2 = {}) {
  let r2 = [];
  t2.replace(/(fa[bklrs]?):fa-([\w-]+)/g, (t3, i3, a2) => (r2.push((async () => {
    let r3 = `${i3}:${a2}`;
    return await xt(r3) ? await St(r3, void 0, { class: `label-icon` }) : `<i class='${e(t3, n2).replace(`:`, ` `)}'></i>`;
  })()), t3));
  let i2 = await Promise.all(r2);
  return t2.replace(/(fa[bklrs]?):fa-([\w-]+)/g, () => i2.shift() ?? ``);
}
o($, `replaceIconSubstring`);
var Mt = o(async (e4, t2 = ``, { style: r2 = ``, isTitle: i2 = false, classes: o2 = ``, useHtmlLabels: l2 = true, isNode: u2 = true, width: d2 = 200, addSvgBackground: f2 = false } = {}, p2) => {
  if (a.debug(`XYZ createText`, t2, r2, i2, o2, l2, u2, `addSvgBackground: `, f2), l2) {
    let i3 = await $(c(Tt(t2, p2)), p2), a2 = t2.replace(/\\\\/g, `\\`);
    return await Ot(e4, { isNode: u2, label: n(t2) ? a2 : i3, labelStyle: r2.replace(`fill:`, `color:`) }, d2, o2, f2, p2);
  } else {
    let n2 = jt(d2, e4, wt(t2.replace(/<br\s*\/?>/g, `<br/>`).replace(`<br>`, `<br/>`), p2), t2 ? f2 : false);
    if (u2) {
      /stroke:/.exec(r2) && (r2 = r2.replace(`stroke:`, `lineColor:`));
      let e5 = r2.replace(/stroke:[^;]+;?/g, ``).replace(/stroke-width:[^;]+;?/g, ``).replace(/fill:[^;]+;?/g, ``).replace(/color:/g, `fill:`);
      s(n2).attr(`style`, e5);
    } else {
      let e5 = r2.replace(/stroke:[^;]+;?/g, ``).replace(/stroke-width:[^;]+;?/g, ``).replace(/fill:[^;]+;?/g, ``).replace(/background:/g, `fill:`);
      s(n2).select(`rect`).attr(`style`, e5.replace(/background:/g, `fill:`));
      let t3 = r2.replace(/stroke:[^;]+;?/g, ``).replace(/stroke-width:[^;]+;?/g, ``).replace(/fill:[^;]+;?/g, ``).replace(/color:/g, `fill:`);
      s(n2).select(`text`).attr(`style`, t3);
    }
    return n2;
  }
}, `createText`);
export {
  $ as a,
  yt as i,
  Mt as n,
  _t as o,
  St as r,
  gt as s,
  At as t
};
