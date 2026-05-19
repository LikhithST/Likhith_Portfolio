var e = class e2 extends Error {
  constructor(t3, n2) {
    var r2 = `KaTeX parse error: ` + t3, i2, a2, o2 = n2 && n2.loc;
    if (o2 && o2.start <= o2.end) {
      var s2 = o2.lexer.input;
      i2 = o2.start, a2 = o2.end, i2 === s2.length ? r2 += ` at end of input: ` : r2 += ` at position ` + (i2 + 1) + `: `;
      var c2 = s2.slice(i2, a2).replace(/[^]/g, `$&\u0332`), l2 = i2 > 15 ? `\u2026` + s2.slice(i2 - 15, i2) : s2.slice(0, i2), u2 = a2 + 15 < s2.length ? s2.slice(a2, a2 + 15) + `\u2026` : s2.slice(a2);
      r2 += l2 + c2 + u2;
    }
    super(r2), this.name = `ParseError`, Object.setPrototypeOf(this, e2.prototype), this.position = i2, i2 != null && a2 != null && (this.length = a2 - i2), this.rawMessage = t3;
  }
}, t = /([A-Z])/g, n = (e6) => e6.replace(t, `-$1`).toLowerCase(), r = { "&": `&amp;`, ">": `&gt;`, "<": `&lt;`, '"': `&quot;`, "'": `&#x27;` }, i = /[&><"']/g, a = (e6) => String(e6).replace(i, (e7) => r[e7]), o = (e6) => e6.type === `ordgroup` || e6.type === `color` ? e6.body.length === 1 ? o(e6.body[0]) : e6 : e6.type === `font` ? o(e6.body) : e6, s = /* @__PURE__ */ new Set([`mathord`, `textord`, `atom`]), c = (e6) => s.has(o(e6).type), l = (e6) => {
  var t3 = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e6);
  return t3 ? t3[2] !== `:` || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t3[1]) ? null : t3[1].toLowerCase() : `_relative`;
}, u = { displayMode: { type: `boolean`, description: `Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.`, cli: `-d, --display-mode` }, output: { type: { enum: [`htmlAndMathml`, `html`, `mathml`] }, description: `Determines the markup language of the output.`, cli: `-F, --format <type>` }, leqno: { type: `boolean`, description: `Render display math in leqno style (left-justified tags).` }, fleqn: { type: `boolean`, description: `Render display math flush left.` }, throwOnError: { type: `boolean`, default: true, cli: `-t, --no-throw-on-error`, cliDescription: `Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error.` }, errorColor: { type: `string`, default: `#cc0000`, cli: `-c, --error-color <color>`, cliDescription: `A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.`, cliProcessor: (e6) => `#` + e6 }, macros: { type: `object`, cli: `-m, --macro <def>`, cliDescription: `Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).`, cliDefault: [], cliProcessor: (e6, t3) => (t3.push(e6), t3) }, minRuleThickness: { type: `number`, description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.", processor: (e6) => Math.max(0, e6), cli: `--min-rule-thickness <size>`, cliProcessor: parseFloat }, colorIsTextColor: { type: `boolean`, description: `Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.`, cli: `-b, --color-is-text-color` }, strict: { type: [{ enum: [`warn`, `ignore`, `error`] }, `boolean`, `function`], description: `Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.`, cli: `-S, --strict`, cliDefault: false }, trust: { type: [`boolean`, `function`], description: `Trust the input, enabling all HTML features such as \\url.`, cli: `-T, --trust` }, maxSize: { type: `number`, default: 1 / 0, description: `If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large`, processor: (e6) => Math.max(0, e6), cli: `-s, --max-size <n>`, cliProcessor: parseInt }, maxExpand: { type: `number`, default: 1e3, description: `Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.`, processor: (e6) => Math.max(0, e6), cli: `-e, --max-expand <n>`, cliProcessor: (e6) => e6 === `Infinity` ? 1 / 0 : parseInt(e6) }, globalGroup: { type: `boolean`, cli: false } };
function d(e6) {
  if (`default` in e6) return e6.default;
  var t3 = e6.type, n2 = Array.isArray(t3) ? t3[0] : t3;
  if (typeof n2 != `string`) return n2.enum[0];
  switch (n2) {
    case `boolean`:
      return false;
    case `string`:
      return ``;
    case `number`:
      return 0;
    case `object`:
      return {};
  }
}
var f = class {
  constructor(e6) {
    e6 === void 0 && (e6 = {}), e6 || (e6 = {});
    for (var t3 of Object.keys(u)) {
      var n2 = u[t3], r2 = e6[t3];
      this[t3] = r2 === void 0 ? d(n2) : n2.processor ? n2.processor(r2) : r2;
    }
  }
  reportNonstrict(t3, n2, r2) {
    var i2 = this.strict;
    if (typeof i2 == `function` && (i2 = i2(t3, n2, r2)), !(!i2 || i2 === `ignore`)) {
      if (i2 === true || i2 === `error`) throw new e(`LaTeX-incompatible input and strict mode is set to 'error': ` + (n2 + ` [` + t3 + `]`), r2);
      i2 === `warn` ? typeof console < `u` && console.warn(`LaTeX-incompatible input and strict mode is set to 'warn': ` + (n2 + ` [` + t3 + `]`)) : typeof console < `u` && console.warn(`LaTeX-incompatible input and strict mode is set to ` + (`unrecognized '` + i2 + `': ` + n2 + ` [` + t3 + `]`));
    }
  }
  useStrictBehavior(e6, t3, n2) {
    var r2 = this.strict;
    if (typeof r2 == `function`) try {
      r2 = r2(e6, t3, n2);
    } catch {
      r2 = `error`;
    }
    return !r2 || r2 === `ignore` ? false : r2 === true || r2 === `error` ? true : r2 === `warn` ? (typeof console < `u` && console.warn(`LaTeX-incompatible input and strict mode is set to 'warn': ` + (t3 + ` [` + e6 + `]`)), false) : (typeof console < `u` && console.warn(`LaTeX-incompatible input and strict mode is set to ` + (`unrecognized '` + r2 + `': ` + t3 + ` [` + e6 + `]`)), false);
  }
  isTrusted(e6) {
    if (`url` in e6 && e6.url && !e6.protocol) {
      var t3 = l(e6.url);
      if (t3 == null) return false;
      e6.protocol = t3;
    }
    return !!(typeof this.trust == `function` ? this.trust(e6) : this.trust);
  }
}, p = class {
  constructor(e6, t3, n2) {
    this.id = e6, this.size = t3, this.cramped = n2;
  }
  sup() {
    return S[C[this.id]];
  }
  sub() {
    return S[ee[this.id]];
  }
  fracNum() {
    return S[te[this.id]];
  }
  fracDen() {
    return S[w[this.id]];
  }
  cramp() {
    return S[ne[this.id]];
  }
  text() {
    return S[re[this.id]];
  }
  isTight() {
    return this.size >= 2;
  }
}, m = 0, h = 1, g = 2, _ = 3, v = 4, y = 5, b = 6, x = 7, S = [new p(m, 0, false), new p(h, 0, true), new p(g, 1, false), new p(_, 1, true), new p(v, 2, false), new p(y, 2, true), new p(b, 3, false), new p(x, 3, true)], C = [v, y, v, y, b, x, b, x], ee = [y, y, y, y, x, x, x, x], te = [g, _, v, y, b, x, b, x], w = [_, _, y, y, x, x, x, x], ne = [h, h, _, _, y, y, x, x], re = [m, h, g, _, g, _, g, _], T = { DISPLAY: S[m], TEXT: S[g], SCRIPT: S[v], SCRIPTSCRIPT: S[b] }, ie = [{ name: `latin`, blocks: [[256, 591], [768, 879]] }, { name: `cyrillic`, blocks: [[1024, 1279]] }, { name: `armenian`, blocks: [[1328, 1423]] }, { name: `brahmic`, blocks: [[2304, 4255]] }, { name: `georgian`, blocks: [[4256, 4351]] }, { name: `cjk`, blocks: [[12288, 12543], [19968, 40879], [65280, 65376]] }, { name: `hangul`, blocks: [[44032, 55215]] }];
function ae(e6) {
  for (var t3 = 0; t3 < ie.length; t3++) for (var n2 = ie[t3], r2 = 0; r2 < n2.blocks.length; r2++) {
    var i2 = n2.blocks[r2];
    if (e6 >= i2[0] && e6 <= i2[1]) return n2.name;
  }
  return null;
}
var oe = [];
ie.forEach((e6) => e6.blocks.forEach((e7) => oe.push(...e7)));
function se(e6) {
  for (var t3 = 0; t3 < oe.length; t3 += 2) if (e6 >= oe[t3] && e6 <= oe[t3 + 1]) return true;
  return false;
}
var E = (e6) => e6 + ` ` + e6, ce = 80, le = function(e6, t3) {
  return `M95,` + (622 + e6 + t3) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + e6 / 2.075 + ` -` + e6 + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + e6) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + e6) + ` ` + t3 + `h400000v` + (40 + e6) + `h-400000z`;
}, ue = function(e6, t3) {
  return `M263,` + (601 + e6 + t3) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + e6 / 2.084 + ` -` + e6 + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + e6) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + e6) + ` ` + t3 + `h400000v` + (40 + e6) + `h-400000z`;
}, de = function(e6, t3) {
  return `M983 ` + (10 + e6 + t3) + `
l` + e6 / 3.13 + ` -` + e6 + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + e6) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + e6) + ` ` + t3 + `h400000v` + (40 + e6) + `h-400000z`;
}, fe = function(e6, t3) {
  return `M424,` + (2398 + e6 + t3) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + e6 / 4.223 + ` -` + e6 + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + e6) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + e6) + ` ` + t3 + `
h400000v` + (40 + e6) + `h-400000z`;
}, pe = function(e6, t3) {
  return `M473,` + (2713 + e6 + t3) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e6 / 5.298 + ` -` + e6 + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e6) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e6) + ` ` + t3 + `h400000v` + (40 + e6) + `H1017.7z`;
}, me = function(e6) {
  var t3 = e6 / 2;
  return `M400000 ` + e6 + ` H0 L` + t3 + ` 0 l65 45 L145 ` + (e6 - 80) + ` H400000z`;
}, he = function(e6, t3, n2) {
  var r2 = n2 - 54 - t3 - e6;
  return `M702 ` + (e6 + t3) + `H400000` + (40 + e6) + `
H742v` + r2 + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t3 + `H400000v` + (40 + e6) + `H742z`;
}, ge = function(e6, t3, n2) {
  t3 = 1e3 * t3;
  var r2 = ``;
  switch (e6) {
    case `sqrtMain`:
      r2 = le(t3, ce);
      break;
    case `sqrtSize1`:
      r2 = ue(t3, ce);
      break;
    case `sqrtSize2`:
      r2 = de(t3, ce);
      break;
    case `sqrtSize3`:
      r2 = fe(t3, ce);
      break;
    case `sqrtSize4`:
      r2 = pe(t3, ce);
      break;
    case `sqrtTall`:
      r2 = he(t3, ce, n2);
  }
  return r2;
}, _e = function(e6, t3) {
  switch (e6) {
    case `\u239C`:
      return E(`M291 0 H417 V` + t3 + ` H291z`);
    case `\u2223`:
      return E(`M145 0 H188 V` + t3 + ` H145z`);
    case `\u2225`:
      return E(`M145 0 H188 V` + t3 + ` H145z`) + E(`M367 0 H410 V` + t3 + ` H367z`);
    case `\u239F`:
      return E(`M457 0 H583 V` + t3 + ` H457z`);
    case `\u23A2`:
      return E(`M319 0 H403 V` + t3 + ` H319z`);
    case `\u23A5`:
      return E(`M263 0 H347 V` + t3 + ` H263z`);
    case `\u23AA`:
      return E(`M384 0 H504 V` + t3 + ` H384z`);
    case `\u23D0`:
      return E(`M312 0 H355 V` + t3 + ` H312z`);
    case `\u2016`:
      return E(`M257 0 H300 V` + t3 + ` H257z`) + E(`M478 0 H521 V` + t3 + ` H478z`);
    default:
      return ``;
  }
}, ve = { doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`, doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`, leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`, leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`, leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`, leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`, leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`, leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`, leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`, leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`, leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`, lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`, leftlinesegment: E(`M40 281 V428 H0 V94 H40 V241 H400000 v40z`), leftbracketunder: E(`M0 0 h120 V290 H399995 v120 H0z`), leftbracketover: E(`M0 440 h120 V150 H399995 v-120 H0z`), leftmapsto: E(`M40 281 V448H0V74H40V241H400000v40z`), leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`, longequal: E(`M0 50 h400000 v40H0z m0 194h40000v40H0z`), midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`, midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`, oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`, oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`, oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`, oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`, rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`, rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`, rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`, rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`, rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`, rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`, rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`, rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`, rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`, righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`, rightlinesegment: E(`M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`), rightbracketunder: E(`M399995 0 h-120 V290 H0 v120 H400000z`), rightbracketover: E(`M399995 440 h-120 V150 H0 v-120 H399995z`), rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`, twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`, twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`, tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`, tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`, tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`, tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`, vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`, widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`, widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`, widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`, widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`, widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`, widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`, widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`, widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`, baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`, rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`, baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`, rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`, shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`, shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z` }, ye = function(e6, t3) {
  switch (e6) {
    case `lbrack`:
      return `M403 1759 V84 H666 V0 H319 V1759 v` + t3 + ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + t3 + ` v1759 h84z`;
    case `rbrack`:
      return `M347 1759 V0 H0 V84 H263 V1759 v` + t3 + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + t3 + ` v1759 h84z`;
    case `vert`:
      return `M145 15 v585 v` + t3 + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t3 + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t3 + ` v585 h43z`;
    case `doublevert`:
      return `M145 15 v585 v` + t3 + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t3 + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t3 + ` v585 h43z
M367 15 v585 v` + t3 + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t3 + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + t3 + ` v585 h43z`;
    case `lfloor`:
      return `M319 602 V0 H403 V602 v` + t3 + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + t3 + ` v1715 H319z`;
    case `rfloor`:
      return `M319 602 V0 H403 V602 v` + t3 + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + t3 + ` v1715 H319z`;
    case `lceil`:
      return `M403 1759 V84 H666 V0 H319 V1759 v` + t3 + ` v602 h84z
M403 1759 V0 H319 V1759 v` + t3 + ` v602 h84z`;
    case `rceil`:
      return `M347 1759 V0 H0 V84 H263 V1759 v` + t3 + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + t3 + ` v602 h84z`;
    case `lparen`:
      return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (t3 + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (t3 + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
    case `rparen`:
      return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (t3 + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (t3 + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
    default:
      throw Error(`Unknown stretchy delimiter.`);
  }
}, be = class {
  constructor(e6) {
    this.children = e6, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(e6) {
    return this.classes.includes(e6);
  }
  toNode() {
    for (var e6 = document.createDocumentFragment(), t3 = 0; t3 < this.children.length; t3++) e6.appendChild(this.children[t3].toNode());
    return e6;
  }
  toMarkup() {
    for (var e6 = ``, t3 = 0; t3 < this.children.length; t3++) e6 += this.children[t3].toMarkup();
    return e6;
  }
  toText() {
    return this.children.map((e6) => e6.toText()).join(``);
  }
}, xe = { pt: 1, mm: 7227 / 2540, cm: 7227 / 254, in: 72.27, bp: 803 / 800, pc: 12, dd: 1238 / 1157, cc: 14856 / 1157, nd: 685 / 642, nc: 1370 / 107, sp: 1 / 65536, px: 803 / 800 }, Se = { ex: true, em: true, mu: true }, Ce = function(e6) {
  return typeof e6 != `string` && (e6 = e6.unit), e6 in xe || e6 in Se || e6 === `ex`;
}, D = function(t3, n2) {
  var r2;
  if (t3.unit in xe) r2 = xe[t3.unit] / n2.fontMetrics().ptPerEm / n2.sizeMultiplier;
  else if (t3.unit === `mu`) r2 = n2.fontMetrics().cssEmPerMu;
  else {
    var i2 = n2.style.isTight() ? n2.havingStyle(n2.style.text()) : n2;
    if (t3.unit === `ex`) r2 = i2.fontMetrics().xHeight;
    else if (t3.unit === `em`) r2 = i2.fontMetrics().quad;
    else throw new e(`Invalid unit: '` + t3.unit + `'`);
    i2 !== n2 && (r2 *= i2.sizeMultiplier / n2.sizeMultiplier);
  }
  return Math.min(t3.number * r2, n2.maxSize);
}, O = function(e6) {
  return +e6.toFixed(4) + `em`;
}, we = function(e6) {
  return e6.filter((e7) => e7).join(` `);
}, Te = function(e6, t3, n2) {
  if (this.classes = e6 || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = n2 || {}, t3) {
    t3.style.isTight() && this.classes.push(`mtight`);
    var r2 = t3.getColor();
    r2 && (this.style.color = r2);
  }
}, Ee = function(e6) {
  var t3 = document.createElement(e6);
  t3.className = we(this.classes);
  for (var n2 of Object.keys(this.style)) t3.style[n2] = this.style[n2];
  for (var r2 of Object.keys(this.attributes)) t3.setAttribute(r2, this.attributes[r2]);
  for (var i2 = 0; i2 < this.children.length; i2++) t3.appendChild(this.children[i2].toNode());
  return t3;
}, De = /[\s"'>/=\x00-\x1f]/, Oe = function(t3) {
  var r2 = `<` + t3;
  this.classes.length && (r2 += ` class="` + a(we(this.classes)) + `"`);
  var i2 = ``;
  for (var o2 of Object.keys(this.style)) i2 += n(o2) + `:` + this.style[o2] + `;`;
  i2 && (r2 += ` style="` + a(i2) + `"`);
  for (var s2 of Object.keys(this.attributes)) {
    if (De.test(s2)) throw new e(`Invalid attribute name '` + s2 + `'`);
    r2 += ` ` + s2 + `="` + a(this.attributes[s2]) + `"`;
  }
  r2 += `>`;
  for (var c2 = 0; c2 < this.children.length; c2++) r2 += this.children[c2].toMarkup();
  return r2 += `</` + t3 + `>`, r2;
}, ke = class {
  constructor(e6, t3, n2, r2) {
    Te.call(this, e6, n2, r2), this.children = t3 || [];
  }
  setAttribute(e6, t3) {
    this.attributes[e6] = t3;
  }
  hasClass(e6) {
    return this.classes.includes(e6);
  }
  toNode() {
    return Ee.call(this, `span`);
  }
  toMarkup() {
    return Oe.call(this, `span`);
  }
}, Ae = class {
  constructor(e6, t3, n2, r2) {
    Te.call(this, t3, r2), this.children = n2 || [], this.setAttribute(`href`, e6);
  }
  setAttribute(e6, t3) {
    this.attributes[e6] = t3;
  }
  hasClass(e6) {
    return this.classes.includes(e6);
  }
  toNode() {
    return Ee.call(this, `a`);
  }
  toMarkup() {
    return Oe.call(this, `a`);
  }
}, je = class {
  constructor(e6, t3, n2) {
    this.alt = t3, this.src = e6, this.classes = [`mord`], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = n2;
  }
  hasClass(e6) {
    return this.classes.includes(e6);
  }
  toNode() {
    var e6 = document.createElement(`img`);
    e6.src = this.src, e6.alt = this.alt, e6.className = `mord`;
    for (var t3 of Object.keys(this.style)) e6.style[t3] = this.style[t3];
    return e6;
  }
  toMarkup() {
    var e6 = `<img src="` + a(this.src) + `"` + (` alt="` + a(this.alt) + `"`), t3 = ``;
    for (var r2 of Object.keys(this.style)) t3 += n(r2) + `:` + this.style[r2] + `;`;
    return t3 && (e6 += ` style="` + a(t3) + `"`), e6 += `'/>`, e6;
  }
}, Me = { \u00EE: `\u0131\u0302`, \u00EF: `\u0131\u0308`, \u00ED: `\u0131\u0301`, \u00EC: `\u0131\u0300` }, Ne = class {
  constructor(e6, t3, n2, r2, i2, a2, o2, s2) {
    this.text = e6, this.height = t3 || 0, this.depth = n2 || 0, this.italic = r2 || 0, this.skew = i2 || 0, this.width = a2 || 0, this.classes = o2 || [], this.style = s2 || {}, this.maxFontSize = 0;
    var c2 = ae(this.text.charCodeAt(0));
    c2 && this.classes.push(c2 + `_fallback`), /[îïíì]/.test(this.text) && (this.text = Me[this.text]);
  }
  hasClass(e6) {
    return this.classes.includes(e6);
  }
  toNode() {
    var e6 = document.createTextNode(this.text), t3 = null;
    this.italic > 0 && (t3 = document.createElement(`span`), t3.style.marginRight = O(this.italic)), this.classes.length > 0 && (t3 || (t3 = document.createElement(`span`)), t3.className = we(this.classes));
    for (var n2 of Object.keys(this.style)) t3 || (t3 = document.createElement(`span`)), t3.style[n2] = this.style[n2];
    return t3 ? (t3.appendChild(e6), t3) : e6;
  }
  toMarkup() {
    var e6 = false, t3 = `<span`;
    this.classes.length && (e6 = true, t3 += ` class="`, t3 += a(we(this.classes)), t3 += `"`);
    var r2 = ``;
    this.italic > 0 && (r2 += `margin-right:` + O(this.italic) + `;`);
    for (var i2 of Object.keys(this.style)) r2 += n(i2) + `:` + this.style[i2] + `;`;
    r2 && (e6 = true, t3 += ` style="` + a(r2) + `"`);
    var o2 = a(this.text);
    return e6 ? (t3 += `>`, t3 += o2, t3 += `</span>`, t3) : o2;
  }
}, Pe = class {
  constructor(e6, t3) {
    this.children = e6 || [], this.attributes = t3 || {};
  }
  toNode() {
    var e6 = document.createElementNS(`http://www.w3.org/2000/svg`, `svg`);
    for (var t3 of Object.keys(this.attributes)) e6.setAttribute(t3, this.attributes[t3]);
    for (var n2 = 0; n2 < this.children.length; n2++) e6.appendChild(this.children[n2].toNode());
    return e6;
  }
  toMarkup() {
    var e6 = `<svg xmlns="http://www.w3.org/2000/svg"`;
    for (var t3 of Object.keys(this.attributes)) e6 += ` ` + t3 + `="` + a(this.attributes[t3]) + `"`;
    e6 += `>`;
    for (var n2 = 0; n2 < this.children.length; n2++) e6 += this.children[n2].toMarkup();
    return e6 += `</svg>`, e6;
  }
}, Fe = class {
  constructor(e6, t3) {
    this.pathName = e6, this.alternate = t3;
  }
  toNode() {
    var e6 = document.createElementNS(`http://www.w3.org/2000/svg`, `path`);
    return this.alternate ? e6.setAttribute(`d`, this.alternate) : e6.setAttribute(`d`, ve[this.pathName]), e6;
  }
  toMarkup() {
    return this.alternate ? `<path d="` + a(this.alternate) + `"/>` : `<path d="` + a(ve[this.pathName]) + `"/>`;
  }
}, Ie = class {
  constructor(e6) {
    this.attributes = e6 || {};
  }
  toNode() {
    var e6 = document.createElementNS(`http://www.w3.org/2000/svg`, `line`);
    for (var t3 of Object.keys(this.attributes)) e6.setAttribute(t3, this.attributes[t3]);
    return e6;
  }
  toMarkup() {
    var e6 = `<line`;
    for (var t3 of Object.keys(this.attributes)) e6 += ` ` + t3 + `="` + a(this.attributes[t3]) + `"`;
    return e6 += `/>`, e6;
  }
};
function Le(e6) {
  if (e6 instanceof Ne) return e6;
  throw Error(`Expected symbolNode but got ` + String(e6) + `.`);
}
function Re(e6) {
  if (e6 instanceof ke) return e6;
  throw Error(`Expected span<HtmlDomNode> but got ` + String(e6) + `.`);
}
var ze = (e6) => e6 instanceof ke || e6 instanceof Ae || e6 instanceof be, Be = { "AMS-Regular": { 32: [0, 0, 0, 0, 0.25], 65: [0, 0.68889, 0, 0, 0.72222], 66: [0, 0.68889, 0, 0, 0.66667], 67: [0, 0.68889, 0, 0, 0.72222], 68: [0, 0.68889, 0, 0, 0.72222], 69: [0, 0.68889, 0, 0, 0.66667], 70: [0, 0.68889, 0, 0, 0.61111], 71: [0, 0.68889, 0, 0, 0.77778], 72: [0, 0.68889, 0, 0, 0.77778], 73: [0, 0.68889, 0, 0, 0.38889], 74: [0.16667, 0.68889, 0, 0, 0.5], 75: [0, 0.68889, 0, 0, 0.77778], 76: [0, 0.68889, 0, 0, 0.66667], 77: [0, 0.68889, 0, 0, 0.94445], 78: [0, 0.68889, 0, 0, 0.72222], 79: [0.16667, 0.68889, 0, 0, 0.77778], 80: [0, 0.68889, 0, 0, 0.61111], 81: [0.16667, 0.68889, 0, 0, 0.77778], 82: [0, 0.68889, 0, 0, 0.72222], 83: [0, 0.68889, 0, 0, 0.55556], 84: [0, 0.68889, 0, 0, 0.66667], 85: [0, 0.68889, 0, 0, 0.72222], 86: [0, 0.68889, 0, 0, 0.72222], 87: [0, 0.68889, 0, 0, 1], 88: [0, 0.68889, 0, 0, 0.72222], 89: [0, 0.68889, 0, 0, 0.72222], 90: [0, 0.68889, 0, 0, 0.66667], 107: [0, 0.68889, 0, 0, 0.55556], 160: [0, 0, 0, 0, 0.25], 165: [0, 0.675, 0.025, 0, 0.75], 174: [0.15559, 0.69224, 0, 0, 0.94666], 240: [0, 0.68889, 0, 0, 0.55556], 295: [0, 0.68889, 0, 0, 0.54028], 710: [0, 0.825, 0, 0, 2.33334], 732: [0, 0.9, 0, 0, 2.33334], 770: [0, 0.825, 0, 0, 2.33334], 771: [0, 0.9, 0, 0, 2.33334], 989: [0.08167, 0.58167, 0, 0, 0.77778], 1008: [0, 0.43056, 0.04028, 0, 0.66667], 8245: [0, 0.54986, 0, 0, 0.275], 8463: [0, 0.68889, 0, 0, 0.54028], 8487: [0, 0.68889, 0, 0, 0.72222], 8498: [0, 0.68889, 0, 0, 0.55556], 8502: [0, 0.68889, 0, 0, 0.66667], 8503: [0, 0.68889, 0, 0, 0.44445], 8504: [0, 0.68889, 0, 0, 0.66667], 8513: [0, 0.68889, 0, 0, 0.63889], 8592: [-0.03598, 0.46402, 0, 0, 0.5], 8594: [-0.03598, 0.46402, 0, 0, 0.5], 8602: [-0.13313, 0.36687, 0, 0, 1], 8603: [-0.13313, 0.36687, 0, 0, 1], 8606: [0.01354, 0.52239, 0, 0, 1], 8608: [0.01354, 0.52239, 0, 0, 1], 8610: [0.01354, 0.52239, 0, 0, 1.11111], 8611: [0.01354, 0.52239, 0, 0, 1.11111], 8619: [0, 0.54986, 0, 0, 1], 8620: [0, 0.54986, 0, 0, 1], 8621: [-0.13313, 0.37788, 0, 0, 1.38889], 8622: [-0.13313, 0.36687, 0, 0, 1], 8624: [0, 0.69224, 0, 0, 0.5], 8625: [0, 0.69224, 0, 0, 0.5], 8630: [0, 0.43056, 0, 0, 1], 8631: [0, 0.43056, 0, 0, 1], 8634: [0.08198, 0.58198, 0, 0, 0.77778], 8635: [0.08198, 0.58198, 0, 0, 0.77778], 8638: [0.19444, 0.69224, 0, 0, 0.41667], 8639: [0.19444, 0.69224, 0, 0, 0.41667], 8642: [0.19444, 0.69224, 0, 0, 0.41667], 8643: [0.19444, 0.69224, 0, 0, 0.41667], 8644: [0.1808, 0.675, 0, 0, 1], 8646: [0.1808, 0.675, 0, 0, 1], 8647: [0.1808, 0.675, 0, 0, 1], 8648: [0.19444, 0.69224, 0, 0, 0.83334], 8649: [0.1808, 0.675, 0, 0, 1], 8650: [0.19444, 0.69224, 0, 0, 0.83334], 8651: [0.01354, 0.52239, 0, 0, 1], 8652: [0.01354, 0.52239, 0, 0, 1], 8653: [-0.13313, 0.36687, 0, 0, 1], 8654: [-0.13313, 0.36687, 0, 0, 1], 8655: [-0.13313, 0.36687, 0, 0, 1], 8666: [0.13667, 0.63667, 0, 0, 1], 8667: [0.13667, 0.63667, 0, 0, 1], 8669: [-0.13313, 0.37788, 0, 0, 1], 8672: [-0.064, 0.437, 0, 0, 1.334], 8674: [-0.064, 0.437, 0, 0, 1.334], 8705: [0, 0.825, 0, 0, 0.5], 8708: [0, 0.68889, 0, 0, 0.55556], 8709: [0.08167, 0.58167, 0, 0, 0.77778], 8717: [0, 0.43056, 0, 0, 0.42917], 8722: [-0.03598, 0.46402, 0, 0, 0.5], 8724: [0.08198, 0.69224, 0, 0, 0.77778], 8726: [0.08167, 0.58167, 0, 0, 0.77778], 8733: [0, 0.69224, 0, 0, 0.77778], 8736: [0, 0.69224, 0, 0, 0.72222], 8737: [0, 0.69224, 0, 0, 0.72222], 8738: [0.03517, 0.52239, 0, 0, 0.72222], 8739: [0.08167, 0.58167, 0, 0, 0.22222], 8740: [0.25142, 0.74111, 0, 0, 0.27778], 8741: [0.08167, 0.58167, 0, 0, 0.38889], 8742: [0.25142, 0.74111, 0, 0, 0.5], 8756: [0, 0.69224, 0, 0, 0.66667], 8757: [0, 0.69224, 0, 0, 0.66667], 8764: [-0.13313, 0.36687, 0, 0, 0.77778], 8765: [-0.13313, 0.37788, 0, 0, 0.77778], 8769: [-0.13313, 0.36687, 0, 0, 0.77778], 8770: [-0.03625, 0.46375, 0, 0, 0.77778], 8774: [0.30274, 0.79383, 0, 0, 0.77778], 8776: [-0.01688, 0.48312, 0, 0, 0.77778], 8778: [0.08167, 0.58167, 0, 0, 0.77778], 8782: [0.06062, 0.54986, 0, 0, 0.77778], 8783: [0.06062, 0.54986, 0, 0, 0.77778], 8785: [0.08198, 0.58198, 0, 0, 0.77778], 8786: [0.08198, 0.58198, 0, 0, 0.77778], 8787: [0.08198, 0.58198, 0, 0, 0.77778], 8790: [0, 0.69224, 0, 0, 0.77778], 8791: [0.22958, 0.72958, 0, 0, 0.77778], 8796: [0.08198, 0.91667, 0, 0, 0.77778], 8806: [0.25583, 0.75583, 0, 0, 0.77778], 8807: [0.25583, 0.75583, 0, 0, 0.77778], 8808: [0.25142, 0.75726, 0, 0, 0.77778], 8809: [0.25142, 0.75726, 0, 0, 0.77778], 8812: [0.25583, 0.75583, 0, 0, 0.5], 8814: [0.20576, 0.70576, 0, 0, 0.77778], 8815: [0.20576, 0.70576, 0, 0, 0.77778], 8816: [0.30274, 0.79383, 0, 0, 0.77778], 8817: [0.30274, 0.79383, 0, 0, 0.77778], 8818: [0.22958, 0.72958, 0, 0, 0.77778], 8819: [0.22958, 0.72958, 0, 0, 0.77778], 8822: [0.1808, 0.675, 0, 0, 0.77778], 8823: [0.1808, 0.675, 0, 0, 0.77778], 8828: [0.13667, 0.63667, 0, 0, 0.77778], 8829: [0.13667, 0.63667, 0, 0, 0.77778], 8830: [0.22958, 0.72958, 0, 0, 0.77778], 8831: [0.22958, 0.72958, 0, 0, 0.77778], 8832: [0.20576, 0.70576, 0, 0, 0.77778], 8833: [0.20576, 0.70576, 0, 0, 0.77778], 8840: [0.30274, 0.79383, 0, 0, 0.77778], 8841: [0.30274, 0.79383, 0, 0, 0.77778], 8842: [0.13597, 0.63597, 0, 0, 0.77778], 8843: [0.13597, 0.63597, 0, 0, 0.77778], 8847: [0.03517, 0.54986, 0, 0, 0.77778], 8848: [0.03517, 0.54986, 0, 0, 0.77778], 8858: [0.08198, 0.58198, 0, 0, 0.77778], 8859: [0.08198, 0.58198, 0, 0, 0.77778], 8861: [0.08198, 0.58198, 0, 0, 0.77778], 8862: [0, 0.675, 0, 0, 0.77778], 8863: [0, 0.675, 0, 0, 0.77778], 8864: [0, 0.675, 0, 0, 0.77778], 8865: [0, 0.675, 0, 0, 0.77778], 8872: [0, 0.69224, 0, 0, 0.61111], 8873: [0, 0.69224, 0, 0, 0.72222], 8874: [0, 0.69224, 0, 0, 0.88889], 8876: [0, 0.68889, 0, 0, 0.61111], 8877: [0, 0.68889, 0, 0, 0.61111], 8878: [0, 0.68889, 0, 0, 0.72222], 8879: [0, 0.68889, 0, 0, 0.72222], 8882: [0.03517, 0.54986, 0, 0, 0.77778], 8883: [0.03517, 0.54986, 0, 0, 0.77778], 8884: [0.13667, 0.63667, 0, 0, 0.77778], 8885: [0.13667, 0.63667, 0, 0, 0.77778], 8888: [0, 0.54986, 0, 0, 1.11111], 8890: [0.19444, 0.43056, 0, 0, 0.55556], 8891: [0.19444, 0.69224, 0, 0, 0.61111], 8892: [0.19444, 0.69224, 0, 0, 0.61111], 8901: [0, 0.54986, 0, 0, 0.27778], 8903: [0.08167, 0.58167, 0, 0, 0.77778], 8905: [0.08167, 0.58167, 0, 0, 0.77778], 8906: [0.08167, 0.58167, 0, 0, 0.77778], 8907: [0, 0.69224, 0, 0, 0.77778], 8908: [0, 0.69224, 0, 0, 0.77778], 8909: [-0.03598, 0.46402, 0, 0, 0.77778], 8910: [0, 0.54986, 0, 0, 0.76042], 8911: [0, 0.54986, 0, 0, 0.76042], 8912: [0.03517, 0.54986, 0, 0, 0.77778], 8913: [0.03517, 0.54986, 0, 0, 0.77778], 8914: [0, 0.54986, 0, 0, 0.66667], 8915: [0, 0.54986, 0, 0, 0.66667], 8916: [0, 0.69224, 0, 0, 0.66667], 8918: [0.0391, 0.5391, 0, 0, 0.77778], 8919: [0.0391, 0.5391, 0, 0, 0.77778], 8920: [0.03517, 0.54986, 0, 0, 1.33334], 8921: [0.03517, 0.54986, 0, 0, 1.33334], 8922: [0.38569, 0.88569, 0, 0, 0.77778], 8923: [0.38569, 0.88569, 0, 0, 0.77778], 8926: [0.13667, 0.63667, 0, 0, 0.77778], 8927: [0.13667, 0.63667, 0, 0, 0.77778], 8928: [0.30274, 0.79383, 0, 0, 0.77778], 8929: [0.30274, 0.79383, 0, 0, 0.77778], 8934: [0.23222, 0.74111, 0, 0, 0.77778], 8935: [0.23222, 0.74111, 0, 0, 0.77778], 8936: [0.23222, 0.74111, 0, 0, 0.77778], 8937: [0.23222, 0.74111, 0, 0, 0.77778], 8938: [0.20576, 0.70576, 0, 0, 0.77778], 8939: [0.20576, 0.70576, 0, 0, 0.77778], 8940: [0.30274, 0.79383, 0, 0, 0.77778], 8941: [0.30274, 0.79383, 0, 0, 0.77778], 8994: [0.19444, 0.69224, 0, 0, 0.77778], 8995: [0.19444, 0.69224, 0, 0, 0.77778], 9416: [0.15559, 0.69224, 0, 0, 0.90222], 9484: [0, 0.69224, 0, 0, 0.5], 9488: [0, 0.69224, 0, 0, 0.5], 9492: [0, 0.37788, 0, 0, 0.5], 9496: [0, 0.37788, 0, 0, 0.5], 9585: [0.19444, 0.68889, 0, 0, 0.88889], 9586: [0.19444, 0.74111, 0, 0, 0.88889], 9632: [0, 0.675, 0, 0, 0.77778], 9633: [0, 0.675, 0, 0, 0.77778], 9650: [0, 0.54986, 0, 0, 0.72222], 9651: [0, 0.54986, 0, 0, 0.72222], 9654: [0.03517, 0.54986, 0, 0, 0.77778], 9660: [0, 0.54986, 0, 0, 0.72222], 9661: [0, 0.54986, 0, 0, 0.72222], 9664: [0.03517, 0.54986, 0, 0, 0.77778], 9674: [0.11111, 0.69224, 0, 0, 0.66667], 9733: [0.19444, 0.69224, 0, 0, 0.94445], 10003: [0, 0.69224, 0, 0, 0.83334], 10016: [0, 0.69224, 0, 0, 0.83334], 10731: [0.11111, 0.69224, 0, 0, 0.66667], 10846: [0.19444, 0.75583, 0, 0, 0.61111], 10877: [0.13667, 0.63667, 0, 0, 0.77778], 10878: [0.13667, 0.63667, 0, 0, 0.77778], 10885: [0.25583, 0.75583, 0, 0, 0.77778], 10886: [0.25583, 0.75583, 0, 0, 0.77778], 10887: [0.13597, 0.63597, 0, 0, 0.77778], 10888: [0.13597, 0.63597, 0, 0, 0.77778], 10889: [0.26167, 0.75726, 0, 0, 0.77778], 10890: [0.26167, 0.75726, 0, 0, 0.77778], 10891: [0.48256, 0.98256, 0, 0, 0.77778], 10892: [0.48256, 0.98256, 0, 0, 0.77778], 10901: [0.13667, 0.63667, 0, 0, 0.77778], 10902: [0.13667, 0.63667, 0, 0, 0.77778], 10933: [0.25142, 0.75726, 0, 0, 0.77778], 10934: [0.25142, 0.75726, 0, 0, 0.77778], 10935: [0.26167, 0.75726, 0, 0, 0.77778], 10936: [0.26167, 0.75726, 0, 0, 0.77778], 10937: [0.26167, 0.75726, 0, 0, 0.77778], 10938: [0.26167, 0.75726, 0, 0, 0.77778], 10949: [0.25583, 0.75583, 0, 0, 0.77778], 10950: [0.25583, 0.75583, 0, 0, 0.77778], 10955: [0.28481, 0.79383, 0, 0, 0.77778], 10956: [0.28481, 0.79383, 0, 0, 0.77778], 57350: [0.08167, 0.58167, 0, 0, 0.22222], 57351: [0.08167, 0.58167, 0, 0, 0.38889], 57352: [0.08167, 0.58167, 0, 0, 0.77778], 57353: [0, 0.43056, 0.04028, 0, 0.66667], 57356: [0.25142, 0.75726, 0, 0, 0.77778], 57357: [0.25142, 0.75726, 0, 0, 0.77778], 57358: [0.41951, 0.91951, 0, 0, 0.77778], 57359: [0.30274, 0.79383, 0, 0, 0.77778], 57360: [0.30274, 0.79383, 0, 0, 0.77778], 57361: [0.41951, 0.91951, 0, 0, 0.77778], 57366: [0.25142, 0.75726, 0, 0, 0.77778], 57367: [0.25142, 0.75726, 0, 0, 0.77778], 57368: [0.25142, 0.75726, 0, 0, 0.77778], 57369: [0.25142, 0.75726, 0, 0, 0.77778], 57370: [0.13597, 0.63597, 0, 0, 0.77778], 57371: [0.13597, 0.63597, 0, 0, 0.77778] }, "Caligraphic-Regular": { 32: [0, 0, 0, 0, 0.25], 65: [0, 0.68333, 0, 0.19445, 0.79847], 66: [0, 0.68333, 0.03041, 0.13889, 0.65681], 67: [0, 0.68333, 0.05834, 0.13889, 0.52653], 68: [0, 0.68333, 0.02778, 0.08334, 0.77139], 69: [0, 0.68333, 0.08944, 0.11111, 0.52778], 70: [0, 0.68333, 0.09931, 0.11111, 0.71875], 71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487], 72: [0, 0.68333, 965e-5, 0.11111, 0.84452], 73: [0, 0.68333, 0.07382, 0, 0.54452], 74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778], 75: [0, 0.68333, 0.01445, 0.05556, 0.76195], 76: [0, 0.68333, 0, 0.13889, 0.68972], 77: [0, 0.68333, 0, 0.13889, 1.2009], 78: [0, 0.68333, 0.14736, 0.08334, 0.82049], 79: [0, 0.68333, 0.02778, 0.11111, 0.79611], 80: [0, 0.68333, 0.08222, 0.08334, 0.69556], 81: [0.09722, 0.68333, 0, 0.11111, 0.81667], 82: [0, 0.68333, 0, 0.08334, 0.8475], 83: [0, 0.68333, 0.075, 0.13889, 0.60556], 84: [0, 0.68333, 0.25417, 0, 0.54464], 85: [0, 0.68333, 0.09931, 0.08334, 0.62583], 86: [0, 0.68333, 0.08222, 0, 0.61278], 87: [0, 0.68333, 0.08222, 0.08334, 0.98778], 88: [0, 0.68333, 0.14643, 0.13889, 0.7133], 89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834], 90: [0, 0.68333, 0.07944, 0.13889, 0.72473], 160: [0, 0, 0, 0, 0.25] }, "Fraktur-Regular": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69141, 0, 0, 0.29574], 34: [0, 0.69141, 0, 0, 0.21471], 38: [0, 0.69141, 0, 0, 0.73786], 39: [0, 0.69141, 0, 0, 0.21201], 40: [0.24982, 0.74947, 0, 0, 0.38865], 41: [0.24982, 0.74947, 0, 0, 0.38865], 42: [0, 0.62119, 0, 0, 0.27764], 43: [0.08319, 0.58283, 0, 0, 0.75623], 44: [0, 0.10803, 0, 0, 0.27764], 45: [0.08319, 0.58283, 0, 0, 0.75623], 46: [0, 0.10803, 0, 0, 0.27764], 47: [0.24982, 0.74947, 0, 0, 0.50181], 48: [0, 0.47534, 0, 0, 0.50181], 49: [0, 0.47534, 0, 0, 0.50181], 50: [0, 0.47534, 0, 0, 0.50181], 51: [0.18906, 0.47534, 0, 0, 0.50181], 52: [0.18906, 0.47534, 0, 0, 0.50181], 53: [0.18906, 0.47534, 0, 0, 0.50181], 54: [0, 0.69141, 0, 0, 0.50181], 55: [0.18906, 0.47534, 0, 0, 0.50181], 56: [0, 0.69141, 0, 0, 0.50181], 57: [0.18906, 0.47534, 0, 0, 0.50181], 58: [0, 0.47534, 0, 0, 0.21606], 59: [0.12604, 0.47534, 0, 0, 0.21606], 61: [-0.13099, 0.36866, 0, 0, 0.75623], 63: [0, 0.69141, 0, 0, 0.36245], 65: [0, 0.69141, 0, 0, 0.7176], 66: [0, 0.69141, 0, 0, 0.88397], 67: [0, 0.69141, 0, 0, 0.61254], 68: [0, 0.69141, 0, 0, 0.83158], 69: [0, 0.69141, 0, 0, 0.66278], 70: [0.12604, 0.69141, 0, 0, 0.61119], 71: [0, 0.69141, 0, 0, 0.78539], 72: [0.06302, 0.69141, 0, 0, 0.7203], 73: [0, 0.69141, 0, 0, 0.55448], 74: [0.12604, 0.69141, 0, 0, 0.55231], 75: [0, 0.69141, 0, 0, 0.66845], 76: [0, 0.69141, 0, 0, 0.66602], 77: [0, 0.69141, 0, 0, 1.04953], 78: [0, 0.69141, 0, 0, 0.83212], 79: [0, 0.69141, 0, 0, 0.82699], 80: [0.18906, 0.69141, 0, 0, 0.82753], 81: [0.03781, 0.69141, 0, 0, 0.82699], 82: [0, 0.69141, 0, 0, 0.82807], 83: [0, 0.69141, 0, 0, 0.82861], 84: [0, 0.69141, 0, 0, 0.66899], 85: [0, 0.69141, 0, 0, 0.64576], 86: [0, 0.69141, 0, 0, 0.83131], 87: [0, 0.69141, 0, 0, 1.04602], 88: [0, 0.69141, 0, 0, 0.71922], 89: [0.18906, 0.69141, 0, 0, 0.83293], 90: [0.12604, 0.69141, 0, 0, 0.60201], 91: [0.24982, 0.74947, 0, 0, 0.27764], 93: [0.24982, 0.74947, 0, 0, 0.27764], 94: [0, 0.69141, 0, 0, 0.49965], 97: [0, 0.47534, 0, 0, 0.50046], 98: [0, 0.69141, 0, 0, 0.51315], 99: [0, 0.47534, 0, 0, 0.38946], 100: [0, 0.62119, 0, 0, 0.49857], 101: [0, 0.47534, 0, 0, 0.40053], 102: [0.18906, 0.69141, 0, 0, 0.32626], 103: [0.18906, 0.47534, 0, 0, 0.5037], 104: [0.18906, 0.69141, 0, 0, 0.52126], 105: [0, 0.69141, 0, 0, 0.27899], 106: [0, 0.69141, 0, 0, 0.28088], 107: [0, 0.69141, 0, 0, 0.38946], 108: [0, 0.69141, 0, 0, 0.27953], 109: [0, 0.47534, 0, 0, 0.76676], 110: [0, 0.47534, 0, 0, 0.52666], 111: [0, 0.47534, 0, 0, 0.48885], 112: [0.18906, 0.52396, 0, 0, 0.50046], 113: [0.18906, 0.47534, 0, 0, 0.48912], 114: [0, 0.47534, 0, 0, 0.38919], 115: [0, 0.47534, 0, 0, 0.44266], 116: [0, 0.62119, 0, 0, 0.33301], 117: [0, 0.47534, 0, 0, 0.5172], 118: [0, 0.52396, 0, 0, 0.5118], 119: [0, 0.52396, 0, 0, 0.77351], 120: [0.18906, 0.47534, 0, 0, 0.38865], 121: [0.18906, 0.47534, 0, 0, 0.49884], 122: [0.18906, 0.47534, 0, 0, 0.39054], 160: [0, 0, 0, 0, 0.25], 8216: [0, 0.69141, 0, 0, 0.21471], 8217: [0, 0.69141, 0, 0, 0.21471], 58112: [0, 0.62119, 0, 0, 0.49749], 58113: [0, 0.62119, 0, 0, 0.4983], 58114: [0.18906, 0.69141, 0, 0, 0.33328], 58115: [0.18906, 0.69141, 0, 0, 0.32923], 58116: [0.18906, 0.47534, 0, 0, 0.50343], 58117: [0, 0.69141, 0, 0, 0.33301], 58118: [0, 0.62119, 0, 0, 0.33409], 58119: [0, 0.47534, 0, 0, 0.50073] }, "Main-Bold": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.35], 34: [0, 0.69444, 0, 0, 0.60278], 35: [0.19444, 0.69444, 0, 0, 0.95833], 36: [0.05556, 0.75, 0, 0, 0.575], 37: [0.05556, 0.75, 0, 0, 0.95833], 38: [0, 0.69444, 0, 0, 0.89444], 39: [0, 0.69444, 0, 0, 0.31944], 40: [0.25, 0.75, 0, 0, 0.44722], 41: [0.25, 0.75, 0, 0, 0.44722], 42: [0, 0.75, 0, 0, 0.575], 43: [0.13333, 0.63333, 0, 0, 0.89444], 44: [0.19444, 0.15556, 0, 0, 0.31944], 45: [0, 0.44444, 0, 0, 0.38333], 46: [0, 0.15556, 0, 0, 0.31944], 47: [0.25, 0.75, 0, 0, 0.575], 48: [0, 0.64444, 0, 0, 0.575], 49: [0, 0.64444, 0, 0, 0.575], 50: [0, 0.64444, 0, 0, 0.575], 51: [0, 0.64444, 0, 0, 0.575], 52: [0, 0.64444, 0, 0, 0.575], 53: [0, 0.64444, 0, 0, 0.575], 54: [0, 0.64444, 0, 0, 0.575], 55: [0, 0.64444, 0, 0, 0.575], 56: [0, 0.64444, 0, 0, 0.575], 57: [0, 0.64444, 0, 0, 0.575], 58: [0, 0.44444, 0, 0, 0.31944], 59: [0.19444, 0.44444, 0, 0, 0.31944], 60: [0.08556, 0.58556, 0, 0, 0.89444], 61: [-0.10889, 0.39111, 0, 0, 0.89444], 62: [0.08556, 0.58556, 0, 0, 0.89444], 63: [0, 0.69444, 0, 0, 0.54305], 64: [0, 0.69444, 0, 0, 0.89444], 65: [0, 0.68611, 0, 0, 0.86944], 66: [0, 0.68611, 0, 0, 0.81805], 67: [0, 0.68611, 0, 0, 0.83055], 68: [0, 0.68611, 0, 0, 0.88194], 69: [0, 0.68611, 0, 0, 0.75555], 70: [0, 0.68611, 0, 0, 0.72361], 71: [0, 0.68611, 0, 0, 0.90416], 72: [0, 0.68611, 0, 0, 0.9], 73: [0, 0.68611, 0, 0, 0.43611], 74: [0, 0.68611, 0, 0, 0.59444], 75: [0, 0.68611, 0, 0, 0.90138], 76: [0, 0.68611, 0, 0, 0.69166], 77: [0, 0.68611, 0, 0, 1.09166], 78: [0, 0.68611, 0, 0, 0.9], 79: [0, 0.68611, 0, 0, 0.86388], 80: [0, 0.68611, 0, 0, 0.78611], 81: [0.19444, 0.68611, 0, 0, 0.86388], 82: [0, 0.68611, 0, 0, 0.8625], 83: [0, 0.68611, 0, 0, 0.63889], 84: [0, 0.68611, 0, 0, 0.8], 85: [0, 0.68611, 0, 0, 0.88472], 86: [0, 0.68611, 0.01597, 0, 0.86944], 87: [0, 0.68611, 0.01597, 0, 1.18888], 88: [0, 0.68611, 0, 0, 0.86944], 89: [0, 0.68611, 0.02875, 0, 0.86944], 90: [0, 0.68611, 0, 0, 0.70277], 91: [0.25, 0.75, 0, 0, 0.31944], 92: [0.25, 0.75, 0, 0, 0.575], 93: [0.25, 0.75, 0, 0, 0.31944], 94: [0, 0.69444, 0, 0, 0.575], 95: [0.31, 0.13444, 0.03194, 0, 0.575], 97: [0, 0.44444, 0, 0, 0.55902], 98: [0, 0.69444, 0, 0, 0.63889], 99: [0, 0.44444, 0, 0, 0.51111], 100: [0, 0.69444, 0, 0, 0.63889], 101: [0, 0.44444, 0, 0, 0.52708], 102: [0, 0.69444, 0.10903, 0, 0.35139], 103: [0.19444, 0.44444, 0.01597, 0, 0.575], 104: [0, 0.69444, 0, 0, 0.63889], 105: [0, 0.69444, 0, 0, 0.31944], 106: [0.19444, 0.69444, 0, 0, 0.35139], 107: [0, 0.69444, 0, 0, 0.60694], 108: [0, 0.69444, 0, 0, 0.31944], 109: [0, 0.44444, 0, 0, 0.95833], 110: [0, 0.44444, 0, 0, 0.63889], 111: [0, 0.44444, 0, 0, 0.575], 112: [0.19444, 0.44444, 0, 0, 0.63889], 113: [0.19444, 0.44444, 0, 0, 0.60694], 114: [0, 0.44444, 0, 0, 0.47361], 115: [0, 0.44444, 0, 0, 0.45361], 116: [0, 0.63492, 0, 0, 0.44722], 117: [0, 0.44444, 0, 0, 0.63889], 118: [0, 0.44444, 0.01597, 0, 0.60694], 119: [0, 0.44444, 0.01597, 0, 0.83055], 120: [0, 0.44444, 0, 0, 0.60694], 121: [0.19444, 0.44444, 0.01597, 0, 0.60694], 122: [0, 0.44444, 0, 0, 0.51111], 123: [0.25, 0.75, 0, 0, 0.575], 124: [0.25, 0.75, 0, 0, 0.31944], 125: [0.25, 0.75, 0, 0, 0.575], 126: [0.35, 0.34444, 0, 0, 0.575], 160: [0, 0, 0, 0, 0.25], 163: [0, 0.69444, 0, 0, 0.86853], 168: [0, 0.69444, 0, 0, 0.575], 172: [0, 0.44444, 0, 0, 0.76666], 176: [0, 0.69444, 0, 0, 0.86944], 177: [0.13333, 0.63333, 0, 0, 0.89444], 184: [0.17014, 0, 0, 0, 0.51111], 198: [0, 0.68611, 0, 0, 1.04166], 215: [0.13333, 0.63333, 0, 0, 0.89444], 216: [0.04861, 0.73472, 0, 0, 0.89444], 223: [0, 0.69444, 0, 0, 0.59722], 230: [0, 0.44444, 0, 0, 0.83055], 247: [0.13333, 0.63333, 0, 0, 0.89444], 248: [0.09722, 0.54167, 0, 0, 0.575], 305: [0, 0.44444, 0, 0, 0.31944], 338: [0, 0.68611, 0, 0, 1.16944], 339: [0, 0.44444, 0, 0, 0.89444], 567: [0.19444, 0.44444, 0, 0, 0.35139], 710: [0, 0.69444, 0, 0, 0.575], 711: [0, 0.63194, 0, 0, 0.575], 713: [0, 0.59611, 0, 0, 0.575], 714: [0, 0.69444, 0, 0, 0.575], 715: [0, 0.69444, 0, 0, 0.575], 728: [0, 0.69444, 0, 0, 0.575], 729: [0, 0.69444, 0, 0, 0.31944], 730: [0, 0.69444, 0, 0, 0.86944], 732: [0, 0.69444, 0, 0, 0.575], 733: [0, 0.69444, 0, 0, 0.575], 915: [0, 0.68611, 0, 0, 0.69166], 916: [0, 0.68611, 0, 0, 0.95833], 920: [0, 0.68611, 0, 0, 0.89444], 923: [0, 0.68611, 0, 0, 0.80555], 926: [0, 0.68611, 0, 0, 0.76666], 928: [0, 0.68611, 0, 0, 0.9], 931: [0, 0.68611, 0, 0, 0.83055], 933: [0, 0.68611, 0, 0, 0.89444], 934: [0, 0.68611, 0, 0, 0.83055], 936: [0, 0.68611, 0, 0, 0.89444], 937: [0, 0.68611, 0, 0, 0.83055], 8211: [0, 0.44444, 0.03194, 0, 0.575], 8212: [0, 0.44444, 0.03194, 0, 1.14999], 8216: [0, 0.69444, 0, 0, 0.31944], 8217: [0, 0.69444, 0, 0, 0.31944], 8220: [0, 0.69444, 0, 0, 0.60278], 8221: [0, 0.69444, 0, 0, 0.60278], 8224: [0.19444, 0.69444, 0, 0, 0.51111], 8225: [0.19444, 0.69444, 0, 0, 0.51111], 8242: [0, 0.55556, 0, 0, 0.34444], 8407: [0, 0.72444, 0.15486, 0, 0.575], 8463: [0, 0.69444, 0, 0, 0.66759], 8465: [0, 0.69444, 0, 0, 0.83055], 8467: [0, 0.69444, 0, 0, 0.47361], 8472: [0.19444, 0.44444, 0, 0, 0.74027], 8476: [0, 0.69444, 0, 0, 0.83055], 8501: [0, 0.69444, 0, 0, 0.70277], 8592: [-0.10889, 0.39111, 0, 0, 1.14999], 8593: [0.19444, 0.69444, 0, 0, 0.575], 8594: [-0.10889, 0.39111, 0, 0, 1.14999], 8595: [0.19444, 0.69444, 0, 0, 0.575], 8596: [-0.10889, 0.39111, 0, 0, 1.14999], 8597: [0.25, 0.75, 0, 0, 0.575], 8598: [0.19444, 0.69444, 0, 0, 1.14999], 8599: [0.19444, 0.69444, 0, 0, 1.14999], 8600: [0.19444, 0.69444, 0, 0, 1.14999], 8601: [0.19444, 0.69444, 0, 0, 1.14999], 8636: [-0.10889, 0.39111, 0, 0, 1.14999], 8637: [-0.10889, 0.39111, 0, 0, 1.14999], 8640: [-0.10889, 0.39111, 0, 0, 1.14999], 8641: [-0.10889, 0.39111, 0, 0, 1.14999], 8656: [-0.10889, 0.39111, 0, 0, 1.14999], 8657: [0.19444, 0.69444, 0, 0, 0.70277], 8658: [-0.10889, 0.39111, 0, 0, 1.14999], 8659: [0.19444, 0.69444, 0, 0, 0.70277], 8660: [-0.10889, 0.39111, 0, 0, 1.14999], 8661: [0.25, 0.75, 0, 0, 0.70277], 8704: [0, 0.69444, 0, 0, 0.63889], 8706: [0, 0.69444, 0.06389, 0, 0.62847], 8707: [0, 0.69444, 0, 0, 0.63889], 8709: [0.05556, 0.75, 0, 0, 0.575], 8711: [0, 0.68611, 0, 0, 0.95833], 8712: [0.08556, 0.58556, 0, 0, 0.76666], 8715: [0.08556, 0.58556, 0, 0, 0.76666], 8722: [0.13333, 0.63333, 0, 0, 0.89444], 8723: [0.13333, 0.63333, 0, 0, 0.89444], 8725: [0.25, 0.75, 0, 0, 0.575], 8726: [0.25, 0.75, 0, 0, 0.575], 8727: [-0.02778, 0.47222, 0, 0, 0.575], 8728: [-0.02639, 0.47361, 0, 0, 0.575], 8729: [-0.02639, 0.47361, 0, 0, 0.575], 8730: [0.18, 0.82, 0, 0, 0.95833], 8733: [0, 0.44444, 0, 0, 0.89444], 8734: [0, 0.44444, 0, 0, 1.14999], 8736: [0, 0.69224, 0, 0, 0.72222], 8739: [0.25, 0.75, 0, 0, 0.31944], 8741: [0.25, 0.75, 0, 0, 0.575], 8743: [0, 0.55556, 0, 0, 0.76666], 8744: [0, 0.55556, 0, 0, 0.76666], 8745: [0, 0.55556, 0, 0, 0.76666], 8746: [0, 0.55556, 0, 0, 0.76666], 8747: [0.19444, 0.69444, 0.12778, 0, 0.56875], 8764: [-0.10889, 0.39111, 0, 0, 0.89444], 8768: [0.19444, 0.69444, 0, 0, 0.31944], 8771: [222e-5, 0.50222, 0, 0, 0.89444], 8773: [0.027, 0.638, 0, 0, 0.894], 8776: [0.02444, 0.52444, 0, 0, 0.89444], 8781: [222e-5, 0.50222, 0, 0, 0.89444], 8801: [222e-5, 0.50222, 0, 0, 0.89444], 8804: [0.19667, 0.69667, 0, 0, 0.89444], 8805: [0.19667, 0.69667, 0, 0, 0.89444], 8810: [0.08556, 0.58556, 0, 0, 1.14999], 8811: [0.08556, 0.58556, 0, 0, 1.14999], 8826: [0.08556, 0.58556, 0, 0, 0.89444], 8827: [0.08556, 0.58556, 0, 0, 0.89444], 8834: [0.08556, 0.58556, 0, 0, 0.89444], 8835: [0.08556, 0.58556, 0, 0, 0.89444], 8838: [0.19667, 0.69667, 0, 0, 0.89444], 8839: [0.19667, 0.69667, 0, 0, 0.89444], 8846: [0, 0.55556, 0, 0, 0.76666], 8849: [0.19667, 0.69667, 0, 0, 0.89444], 8850: [0.19667, 0.69667, 0, 0, 0.89444], 8851: [0, 0.55556, 0, 0, 0.76666], 8852: [0, 0.55556, 0, 0, 0.76666], 8853: [0.13333, 0.63333, 0, 0, 0.89444], 8854: [0.13333, 0.63333, 0, 0, 0.89444], 8855: [0.13333, 0.63333, 0, 0, 0.89444], 8856: [0.13333, 0.63333, 0, 0, 0.89444], 8857: [0.13333, 0.63333, 0, 0, 0.89444], 8866: [0, 0.69444, 0, 0, 0.70277], 8867: [0, 0.69444, 0, 0, 0.70277], 8868: [0, 0.69444, 0, 0, 0.89444], 8869: [0, 0.69444, 0, 0, 0.89444], 8900: [-0.02639, 0.47361, 0, 0, 0.575], 8901: [-0.02639, 0.47361, 0, 0, 0.31944], 8902: [-0.02778, 0.47222, 0, 0, 0.575], 8968: [0.25, 0.75, 0, 0, 0.51111], 8969: [0.25, 0.75, 0, 0, 0.51111], 8970: [0.25, 0.75, 0, 0, 0.51111], 8971: [0.25, 0.75, 0, 0, 0.51111], 8994: [-0.13889, 0.36111, 0, 0, 1.14999], 8995: [-0.13889, 0.36111, 0, 0, 1.14999], 9651: [0.19444, 0.69444, 0, 0, 1.02222], 9657: [-0.02778, 0.47222, 0, 0, 0.575], 9661: [0.19444, 0.69444, 0, 0, 1.02222], 9667: [-0.02778, 0.47222, 0, 0, 0.575], 9711: [0.19444, 0.69444, 0, 0, 1.14999], 9824: [0.12963, 0.69444, 0, 0, 0.89444], 9825: [0.12963, 0.69444, 0, 0, 0.89444], 9826: [0.12963, 0.69444, 0, 0, 0.89444], 9827: [0.12963, 0.69444, 0, 0, 0.89444], 9837: [0, 0.75, 0, 0, 0.44722], 9838: [0.19444, 0.69444, 0, 0, 0.44722], 9839: [0.19444, 0.69444, 0, 0, 0.44722], 10216: [0.25, 0.75, 0, 0, 0.44722], 10217: [0.25, 0.75, 0, 0, 0.44722], 10815: [0, 0.68611, 0, 0, 0.9], 10927: [0.19667, 0.69667, 0, 0, 0.89444], 10928: [0.19667, 0.69667, 0, 0, 0.89444], 57376: [0.19444, 0.69444, 0, 0, 0] }, "Main-BoldItalic": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0.11417, 0, 0.38611], 34: [0, 0.69444, 0.07939, 0, 0.62055], 35: [0.19444, 0.69444, 0.06833, 0, 0.94444], 37: [0.05556, 0.75, 0.12861, 0, 0.94444], 38: [0, 0.69444, 0.08528, 0, 0.88555], 39: [0, 0.69444, 0.12945, 0, 0.35555], 40: [0.25, 0.75, 0.15806, 0, 0.47333], 41: [0.25, 0.75, 0.03306, 0, 0.47333], 42: [0, 0.75, 0.14333, 0, 0.59111], 43: [0.10333, 0.60333, 0.03306, 0, 0.88555], 44: [0.19444, 0.14722, 0, 0, 0.35555], 45: [0, 0.44444, 0.02611, 0, 0.41444], 46: [0, 0.14722, 0, 0, 0.35555], 47: [0.25, 0.75, 0.15806, 0, 0.59111], 48: [0, 0.64444, 0.13167, 0, 0.59111], 49: [0, 0.64444, 0.13167, 0, 0.59111], 50: [0, 0.64444, 0.13167, 0, 0.59111], 51: [0, 0.64444, 0.13167, 0, 0.59111], 52: [0.19444, 0.64444, 0.13167, 0, 0.59111], 53: [0, 0.64444, 0.13167, 0, 0.59111], 54: [0, 0.64444, 0.13167, 0, 0.59111], 55: [0.19444, 0.64444, 0.13167, 0, 0.59111], 56: [0, 0.64444, 0.13167, 0, 0.59111], 57: [0, 0.64444, 0.13167, 0, 0.59111], 58: [0, 0.44444, 0.06695, 0, 0.35555], 59: [0.19444, 0.44444, 0.06695, 0, 0.35555], 61: [-0.10889, 0.39111, 0.06833, 0, 0.88555], 63: [0, 0.69444, 0.11472, 0, 0.59111], 64: [0, 0.69444, 0.09208, 0, 0.88555], 65: [0, 0.68611, 0, 0, 0.86555], 66: [0, 0.68611, 0.0992, 0, 0.81666], 67: [0, 0.68611, 0.14208, 0, 0.82666], 68: [0, 0.68611, 0.09062, 0, 0.87555], 69: [0, 0.68611, 0.11431, 0, 0.75666], 70: [0, 0.68611, 0.12903, 0, 0.72722], 71: [0, 0.68611, 0.07347, 0, 0.89527], 72: [0, 0.68611, 0.17208, 0, 0.8961], 73: [0, 0.68611, 0.15681, 0, 0.47166], 74: [0, 0.68611, 0.145, 0, 0.61055], 75: [0, 0.68611, 0.14208, 0, 0.89499], 76: [0, 0.68611, 0, 0, 0.69777], 77: [0, 0.68611, 0.17208, 0, 1.07277], 78: [0, 0.68611, 0.17208, 0, 0.8961], 79: [0, 0.68611, 0.09062, 0, 0.85499], 80: [0, 0.68611, 0.0992, 0, 0.78721], 81: [0.19444, 0.68611, 0.09062, 0, 0.85499], 82: [0, 0.68611, 0.02559, 0, 0.85944], 83: [0, 0.68611, 0.11264, 0, 0.64999], 84: [0, 0.68611, 0.12903, 0, 0.7961], 85: [0, 0.68611, 0.17208, 0, 0.88083], 86: [0, 0.68611, 0.18625, 0, 0.86555], 87: [0, 0.68611, 0.18625, 0, 1.15999], 88: [0, 0.68611, 0.15681, 0, 0.86555], 89: [0, 0.68611, 0.19803, 0, 0.86555], 90: [0, 0.68611, 0.14208, 0, 0.70888], 91: [0.25, 0.75, 0.1875, 0, 0.35611], 93: [0.25, 0.75, 0.09972, 0, 0.35611], 94: [0, 0.69444, 0.06709, 0, 0.59111], 95: [0.31, 0.13444, 0.09811, 0, 0.59111], 97: [0, 0.44444, 0.09426, 0, 0.59111], 98: [0, 0.69444, 0.07861, 0, 0.53222], 99: [0, 0.44444, 0.05222, 0, 0.53222], 100: [0, 0.69444, 0.10861, 0, 0.59111], 101: [0, 0.44444, 0.085, 0, 0.53222], 102: [0.19444, 0.69444, 0.21778, 0, 0.4], 103: [0.19444, 0.44444, 0.105, 0, 0.53222], 104: [0, 0.69444, 0.09426, 0, 0.59111], 105: [0, 0.69326, 0.11387, 0, 0.35555], 106: [0.19444, 0.69326, 0.1672, 0, 0.35555], 107: [0, 0.69444, 0.11111, 0, 0.53222], 108: [0, 0.69444, 0.10861, 0, 0.29666], 109: [0, 0.44444, 0.09426, 0, 0.94444], 110: [0, 0.44444, 0.09426, 0, 0.64999], 111: [0, 0.44444, 0.07861, 0, 0.59111], 112: [0.19444, 0.44444, 0.07861, 0, 0.59111], 113: [0.19444, 0.44444, 0.105, 0, 0.53222], 114: [0, 0.44444, 0.11111, 0, 0.50167], 115: [0, 0.44444, 0.08167, 0, 0.48694], 116: [0, 0.63492, 0.09639, 0, 0.385], 117: [0, 0.44444, 0.09426, 0, 0.62055], 118: [0, 0.44444, 0.11111, 0, 0.53222], 119: [0, 0.44444, 0.11111, 0, 0.76777], 120: [0, 0.44444, 0.12583, 0, 0.56055], 121: [0.19444, 0.44444, 0.105, 0, 0.56166], 122: [0, 0.44444, 0.13889, 0, 0.49055], 126: [0.35, 0.34444, 0.11472, 0, 0.59111], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.69444, 0.11473, 0, 0.59111], 176: [0, 0.69444, 0, 0, 0.94888], 184: [0.17014, 0, 0, 0, 0.53222], 198: [0, 0.68611, 0.11431, 0, 1.02277], 216: [0.04861, 0.73472, 0.09062, 0, 0.88555], 223: [0.19444, 0.69444, 0.09736, 0, 0.665], 230: [0, 0.44444, 0.085, 0, 0.82666], 248: [0.09722, 0.54167, 0.09458, 0, 0.59111], 305: [0, 0.44444, 0.09426, 0, 0.35555], 338: [0, 0.68611, 0.11431, 0, 1.14054], 339: [0, 0.44444, 0.085, 0, 0.82666], 567: [0.19444, 0.44444, 0.04611, 0, 0.385], 710: [0, 0.69444, 0.06709, 0, 0.59111], 711: [0, 0.63194, 0.08271, 0, 0.59111], 713: [0, 0.59444, 0.10444, 0, 0.59111], 714: [0, 0.69444, 0.08528, 0, 0.59111], 715: [0, 0.69444, 0, 0, 0.59111], 728: [0, 0.69444, 0.10333, 0, 0.59111], 729: [0, 0.69444, 0.12945, 0, 0.35555], 730: [0, 0.69444, 0, 0, 0.94888], 732: [0, 0.69444, 0.11472, 0, 0.59111], 733: [0, 0.69444, 0.11472, 0, 0.59111], 915: [0, 0.68611, 0.12903, 0, 0.69777], 916: [0, 0.68611, 0, 0, 0.94444], 920: [0, 0.68611, 0.09062, 0, 0.88555], 923: [0, 0.68611, 0, 0, 0.80666], 926: [0, 0.68611, 0.15092, 0, 0.76777], 928: [0, 0.68611, 0.17208, 0, 0.8961], 931: [0, 0.68611, 0.11431, 0, 0.82666], 933: [0, 0.68611, 0.10778, 0, 0.88555], 934: [0, 0.68611, 0.05632, 0, 0.82666], 936: [0, 0.68611, 0.10778, 0, 0.88555], 937: [0, 0.68611, 0.0992, 0, 0.82666], 8211: [0, 0.44444, 0.09811, 0, 0.59111], 8212: [0, 0.44444, 0.09811, 0, 1.18221], 8216: [0, 0.69444, 0.12945, 0, 0.35555], 8217: [0, 0.69444, 0.12945, 0, 0.35555], 8220: [0, 0.69444, 0.16772, 0, 0.62055], 8221: [0, 0.69444, 0.07939, 0, 0.62055] }, "Main-Italic": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0.12417, 0, 0.30667], 34: [0, 0.69444, 0.06961, 0, 0.51444], 35: [0.19444, 0.69444, 0.06616, 0, 0.81777], 37: [0.05556, 0.75, 0.13639, 0, 0.81777], 38: [0, 0.69444, 0.09694, 0, 0.76666], 39: [0, 0.69444, 0.12417, 0, 0.30667], 40: [0.25, 0.75, 0.16194, 0, 0.40889], 41: [0.25, 0.75, 0.03694, 0, 0.40889], 42: [0, 0.75, 0.14917, 0, 0.51111], 43: [0.05667, 0.56167, 0.03694, 0, 0.76666], 44: [0.19444, 0.10556, 0, 0, 0.30667], 45: [0, 0.43056, 0.02826, 0, 0.35778], 46: [0, 0.10556, 0, 0, 0.30667], 47: [0.25, 0.75, 0.16194, 0, 0.51111], 48: [0, 0.64444, 0.13556, 0, 0.51111], 49: [0, 0.64444, 0.13556, 0, 0.51111], 50: [0, 0.64444, 0.13556, 0, 0.51111], 51: [0, 0.64444, 0.13556, 0, 0.51111], 52: [0.19444, 0.64444, 0.13556, 0, 0.51111], 53: [0, 0.64444, 0.13556, 0, 0.51111], 54: [0, 0.64444, 0.13556, 0, 0.51111], 55: [0.19444, 0.64444, 0.13556, 0, 0.51111], 56: [0, 0.64444, 0.13556, 0, 0.51111], 57: [0, 0.64444, 0.13556, 0, 0.51111], 58: [0, 0.43056, 0.0582, 0, 0.30667], 59: [0.19444, 0.43056, 0.0582, 0, 0.30667], 61: [-0.13313, 0.36687, 0.06616, 0, 0.76666], 63: [0, 0.69444, 0.1225, 0, 0.51111], 64: [0, 0.69444, 0.09597, 0, 0.76666], 65: [0, 0.68333, 0, 0, 0.74333], 66: [0, 0.68333, 0.10257, 0, 0.70389], 67: [0, 0.68333, 0.14528, 0, 0.71555], 68: [0, 0.68333, 0.09403, 0, 0.755], 69: [0, 0.68333, 0.12028, 0, 0.67833], 70: [0, 0.68333, 0.13305, 0, 0.65277], 71: [0, 0.68333, 0.08722, 0, 0.77361], 72: [0, 0.68333, 0.16389, 0, 0.74333], 73: [0, 0.68333, 0.15806, 0, 0.38555], 74: [0, 0.68333, 0.14028, 0, 0.525], 75: [0, 0.68333, 0.14528, 0, 0.76888], 76: [0, 0.68333, 0, 0, 0.62722], 77: [0, 0.68333, 0.16389, 0, 0.89666], 78: [0, 0.68333, 0.16389, 0, 0.74333], 79: [0, 0.68333, 0.09403, 0, 0.76666], 80: [0, 0.68333, 0.10257, 0, 0.67833], 81: [0.19444, 0.68333, 0.09403, 0, 0.76666], 82: [0, 0.68333, 0.03868, 0, 0.72944], 83: [0, 0.68333, 0.11972, 0, 0.56222], 84: [0, 0.68333, 0.13305, 0, 0.71555], 85: [0, 0.68333, 0.16389, 0, 0.74333], 86: [0, 0.68333, 0.18361, 0, 0.74333], 87: [0, 0.68333, 0.18361, 0, 0.99888], 88: [0, 0.68333, 0.15806, 0, 0.74333], 89: [0, 0.68333, 0.19383, 0, 0.74333], 90: [0, 0.68333, 0.14528, 0, 0.61333], 91: [0.25, 0.75, 0.1875, 0, 0.30667], 93: [0.25, 0.75, 0.10528, 0, 0.30667], 94: [0, 0.69444, 0.06646, 0, 0.51111], 95: [0.31, 0.12056, 0.09208, 0, 0.51111], 97: [0, 0.43056, 0.07671, 0, 0.51111], 98: [0, 0.69444, 0.06312, 0, 0.46], 99: [0, 0.43056, 0.05653, 0, 0.46], 100: [0, 0.69444, 0.10333, 0, 0.51111], 101: [0, 0.43056, 0.07514, 0, 0.46], 102: [0.19444, 0.69444, 0.21194, 0, 0.30667], 103: [0.19444, 0.43056, 0.08847, 0, 0.46], 104: [0, 0.69444, 0.07671, 0, 0.51111], 105: [0, 0.65536, 0.1019, 0, 0.30667], 106: [0.19444, 0.65536, 0.14467, 0, 0.30667], 107: [0, 0.69444, 0.10764, 0, 0.46], 108: [0, 0.69444, 0.10333, 0, 0.25555], 109: [0, 0.43056, 0.07671, 0, 0.81777], 110: [0, 0.43056, 0.07671, 0, 0.56222], 111: [0, 0.43056, 0.06312, 0, 0.51111], 112: [0.19444, 0.43056, 0.06312, 0, 0.51111], 113: [0.19444, 0.43056, 0.08847, 0, 0.46], 114: [0, 0.43056, 0.10764, 0, 0.42166], 115: [0, 0.43056, 0.08208, 0, 0.40889], 116: [0, 0.61508, 0.09486, 0, 0.33222], 117: [0, 0.43056, 0.07671, 0, 0.53666], 118: [0, 0.43056, 0.10764, 0, 0.46], 119: [0, 0.43056, 0.10764, 0, 0.66444], 120: [0, 0.43056, 0.12042, 0, 0.46389], 121: [0.19444, 0.43056, 0.08847, 0, 0.48555], 122: [0, 0.43056, 0.12292, 0, 0.40889], 126: [0.35, 0.31786, 0.11585, 0, 0.51111], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.66786, 0.10474, 0, 0.51111], 176: [0, 0.69444, 0, 0, 0.83129], 184: [0.17014, 0, 0, 0, 0.46], 198: [0, 0.68333, 0.12028, 0, 0.88277], 216: [0.04861, 0.73194, 0.09403, 0, 0.76666], 223: [0.19444, 0.69444, 0.10514, 0, 0.53666], 230: [0, 0.43056, 0.07514, 0, 0.71555], 248: [0.09722, 0.52778, 0.09194, 0, 0.51111], 338: [0, 0.68333, 0.12028, 0, 0.98499], 339: [0, 0.43056, 0.07514, 0, 0.71555], 710: [0, 0.69444, 0.06646, 0, 0.51111], 711: [0, 0.62847, 0.08295, 0, 0.51111], 713: [0, 0.56167, 0.10333, 0, 0.51111], 714: [0, 0.69444, 0.09694, 0, 0.51111], 715: [0, 0.69444, 0, 0, 0.51111], 728: [0, 0.69444, 0.10806, 0, 0.51111], 729: [0, 0.66786, 0.11752, 0, 0.30667], 730: [0, 0.69444, 0, 0, 0.83129], 732: [0, 0.66786, 0.11585, 0, 0.51111], 733: [0, 0.69444, 0.1225, 0, 0.51111], 915: [0, 0.68333, 0.13305, 0, 0.62722], 916: [0, 0.68333, 0, 0, 0.81777], 920: [0, 0.68333, 0.09403, 0, 0.76666], 923: [0, 0.68333, 0, 0, 0.69222], 926: [0, 0.68333, 0.15294, 0, 0.66444], 928: [0, 0.68333, 0.16389, 0, 0.74333], 931: [0, 0.68333, 0.12028, 0, 0.71555], 933: [0, 0.68333, 0.11111, 0, 0.76666], 934: [0, 0.68333, 0.05986, 0, 0.71555], 936: [0, 0.68333, 0.11111, 0, 0.76666], 937: [0, 0.68333, 0.10257, 0, 0.71555], 8211: [0, 0.43056, 0.09208, 0, 0.51111], 8212: [0, 0.43056, 0.09208, 0, 1.02222], 8216: [0, 0.69444, 0.12417, 0, 0.30667], 8217: [0, 0.69444, 0.12417, 0, 0.30667], 8220: [0, 0.69444, 0.1685, 0, 0.51444], 8221: [0, 0.69444, 0.06961, 0, 0.51444], 8463: [0, 0.68889, 0, 0, 0.54028] }, "Main-Regular": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.27778], 34: [0, 0.69444, 0, 0, 0.5], 35: [0.19444, 0.69444, 0, 0, 0.83334], 36: [0.05556, 0.75, 0, 0, 0.5], 37: [0.05556, 0.75, 0, 0, 0.83334], 38: [0, 0.69444, 0, 0, 0.77778], 39: [0, 0.69444, 0, 0, 0.27778], 40: [0.25, 0.75, 0, 0, 0.38889], 41: [0.25, 0.75, 0, 0, 0.38889], 42: [0, 0.75, 0, 0, 0.5], 43: [0.08333, 0.58333, 0, 0, 0.77778], 44: [0.19444, 0.10556, 0, 0, 0.27778], 45: [0, 0.43056, 0, 0, 0.33333], 46: [0, 0.10556, 0, 0, 0.27778], 47: [0.25, 0.75, 0, 0, 0.5], 48: [0, 0.64444, 0, 0, 0.5], 49: [0, 0.64444, 0, 0, 0.5], 50: [0, 0.64444, 0, 0, 0.5], 51: [0, 0.64444, 0, 0, 0.5], 52: [0, 0.64444, 0, 0, 0.5], 53: [0, 0.64444, 0, 0, 0.5], 54: [0, 0.64444, 0, 0, 0.5], 55: [0, 0.64444, 0, 0, 0.5], 56: [0, 0.64444, 0, 0, 0.5], 57: [0, 0.64444, 0, 0, 0.5], 58: [0, 0.43056, 0, 0, 0.27778], 59: [0.19444, 0.43056, 0, 0, 0.27778], 60: [0.0391, 0.5391, 0, 0, 0.77778], 61: [-0.13313, 0.36687, 0, 0, 0.77778], 62: [0.0391, 0.5391, 0, 0, 0.77778], 63: [0, 0.69444, 0, 0, 0.47222], 64: [0, 0.69444, 0, 0, 0.77778], 65: [0, 0.68333, 0, 0, 0.75], 66: [0, 0.68333, 0, 0, 0.70834], 67: [0, 0.68333, 0, 0, 0.72222], 68: [0, 0.68333, 0, 0, 0.76389], 69: [0, 0.68333, 0, 0, 0.68056], 70: [0, 0.68333, 0, 0, 0.65278], 71: [0, 0.68333, 0, 0, 0.78472], 72: [0, 0.68333, 0, 0, 0.75], 73: [0, 0.68333, 0, 0, 0.36111], 74: [0, 0.68333, 0, 0, 0.51389], 75: [0, 0.68333, 0, 0, 0.77778], 76: [0, 0.68333, 0, 0, 0.625], 77: [0, 0.68333, 0, 0, 0.91667], 78: [0, 0.68333, 0, 0, 0.75], 79: [0, 0.68333, 0, 0, 0.77778], 80: [0, 0.68333, 0, 0, 0.68056], 81: [0.19444, 0.68333, 0, 0, 0.77778], 82: [0, 0.68333, 0, 0, 0.73611], 83: [0, 0.68333, 0, 0, 0.55556], 84: [0, 0.68333, 0, 0, 0.72222], 85: [0, 0.68333, 0, 0, 0.75], 86: [0, 0.68333, 0.01389, 0, 0.75], 87: [0, 0.68333, 0.01389, 0, 1.02778], 88: [0, 0.68333, 0, 0, 0.75], 89: [0, 0.68333, 0.025, 0, 0.75], 90: [0, 0.68333, 0, 0, 0.61111], 91: [0.25, 0.75, 0, 0, 0.27778], 92: [0.25, 0.75, 0, 0, 0.5], 93: [0.25, 0.75, 0, 0, 0.27778], 94: [0, 0.69444, 0, 0, 0.5], 95: [0.31, 0.12056, 0.02778, 0, 0.5], 97: [0, 0.43056, 0, 0, 0.5], 98: [0, 0.69444, 0, 0, 0.55556], 99: [0, 0.43056, 0, 0, 0.44445], 100: [0, 0.69444, 0, 0, 0.55556], 101: [0, 0.43056, 0, 0, 0.44445], 102: [0, 0.69444, 0.07778, 0, 0.30556], 103: [0.19444, 0.43056, 0.01389, 0, 0.5], 104: [0, 0.69444, 0, 0, 0.55556], 105: [0, 0.66786, 0, 0, 0.27778], 106: [0.19444, 0.66786, 0, 0, 0.30556], 107: [0, 0.69444, 0, 0, 0.52778], 108: [0, 0.69444, 0, 0, 0.27778], 109: [0, 0.43056, 0, 0, 0.83334], 110: [0, 0.43056, 0, 0, 0.55556], 111: [0, 0.43056, 0, 0, 0.5], 112: [0.19444, 0.43056, 0, 0, 0.55556], 113: [0.19444, 0.43056, 0, 0, 0.52778], 114: [0, 0.43056, 0, 0, 0.39167], 115: [0, 0.43056, 0, 0, 0.39445], 116: [0, 0.61508, 0, 0, 0.38889], 117: [0, 0.43056, 0, 0, 0.55556], 118: [0, 0.43056, 0.01389, 0, 0.52778], 119: [0, 0.43056, 0.01389, 0, 0.72222], 120: [0, 0.43056, 0, 0, 0.52778], 121: [0.19444, 0.43056, 0.01389, 0, 0.52778], 122: [0, 0.43056, 0, 0, 0.44445], 123: [0.25, 0.75, 0, 0, 0.5], 124: [0.25, 0.75, 0, 0, 0.27778], 125: [0.25, 0.75, 0, 0, 0.5], 126: [0.35, 0.31786, 0, 0, 0.5], 160: [0, 0, 0, 0, 0.25], 163: [0, 0.69444, 0, 0, 0.76909], 167: [0.19444, 0.69444, 0, 0, 0.44445], 168: [0, 0.66786, 0, 0, 0.5], 172: [0, 0.43056, 0, 0, 0.66667], 176: [0, 0.69444, 0, 0, 0.75], 177: [0.08333, 0.58333, 0, 0, 0.77778], 182: [0.19444, 0.69444, 0, 0, 0.61111], 184: [0.17014, 0, 0, 0, 0.44445], 198: [0, 0.68333, 0, 0, 0.90278], 215: [0.08333, 0.58333, 0, 0, 0.77778], 216: [0.04861, 0.73194, 0, 0, 0.77778], 223: [0, 0.69444, 0, 0, 0.5], 230: [0, 0.43056, 0, 0, 0.72222], 247: [0.08333, 0.58333, 0, 0, 0.77778], 248: [0.09722, 0.52778, 0, 0, 0.5], 305: [0, 0.43056, 0, 0, 0.27778], 338: [0, 0.68333, 0, 0, 1.01389], 339: [0, 0.43056, 0, 0, 0.77778], 567: [0.19444, 0.43056, 0, 0, 0.30556], 710: [0, 0.69444, 0, 0, 0.5], 711: [0, 0.62847, 0, 0, 0.5], 713: [0, 0.56778, 0, 0, 0.5], 714: [0, 0.69444, 0, 0, 0.5], 715: [0, 0.69444, 0, 0, 0.5], 728: [0, 0.69444, 0, 0, 0.5], 729: [0, 0.66786, 0, 0, 0.27778], 730: [0, 0.69444, 0, 0, 0.75], 732: [0, 0.66786, 0, 0, 0.5], 733: [0, 0.69444, 0, 0, 0.5], 915: [0, 0.68333, 0, 0, 0.625], 916: [0, 0.68333, 0, 0, 0.83334], 920: [0, 0.68333, 0, 0, 0.77778], 923: [0, 0.68333, 0, 0, 0.69445], 926: [0, 0.68333, 0, 0, 0.66667], 928: [0, 0.68333, 0, 0, 0.75], 931: [0, 0.68333, 0, 0, 0.72222], 933: [0, 0.68333, 0, 0, 0.77778], 934: [0, 0.68333, 0, 0, 0.72222], 936: [0, 0.68333, 0, 0, 0.77778], 937: [0, 0.68333, 0, 0, 0.72222], 8211: [0, 0.43056, 0.02778, 0, 0.5], 8212: [0, 0.43056, 0.02778, 0, 1], 8216: [0, 0.69444, 0, 0, 0.27778], 8217: [0, 0.69444, 0, 0, 0.27778], 8220: [0, 0.69444, 0, 0, 0.5], 8221: [0, 0.69444, 0, 0, 0.5], 8224: [0.19444, 0.69444, 0, 0, 0.44445], 8225: [0.19444, 0.69444, 0, 0, 0.44445], 8230: [0, 0.123, 0, 0, 1.172], 8242: [0, 0.55556, 0, 0, 0.275], 8407: [0, 0.71444, 0.15382, 0, 0.5], 8463: [0, 0.68889, 0, 0, 0.54028], 8465: [0, 0.69444, 0, 0, 0.72222], 8467: [0, 0.69444, 0, 0.11111, 0.41667], 8472: [0.19444, 0.43056, 0, 0.11111, 0.63646], 8476: [0, 0.69444, 0, 0, 0.72222], 8501: [0, 0.69444, 0, 0, 0.61111], 8592: [-0.13313, 0.36687, 0, 0, 1], 8593: [0.19444, 0.69444, 0, 0, 0.5], 8594: [-0.13313, 0.36687, 0, 0, 1], 8595: [0.19444, 0.69444, 0, 0, 0.5], 8596: [-0.13313, 0.36687, 0, 0, 1], 8597: [0.25, 0.75, 0, 0, 0.5], 8598: [0.19444, 0.69444, 0, 0, 1], 8599: [0.19444, 0.69444, 0, 0, 1], 8600: [0.19444, 0.69444, 0, 0, 1], 8601: [0.19444, 0.69444, 0, 0, 1], 8614: [0.011, 0.511, 0, 0, 1], 8617: [0.011, 0.511, 0, 0, 1.126], 8618: [0.011, 0.511, 0, 0, 1.126], 8636: [-0.13313, 0.36687, 0, 0, 1], 8637: [-0.13313, 0.36687, 0, 0, 1], 8640: [-0.13313, 0.36687, 0, 0, 1], 8641: [-0.13313, 0.36687, 0, 0, 1], 8652: [0.011, 0.671, 0, 0, 1], 8656: [-0.13313, 0.36687, 0, 0, 1], 8657: [0.19444, 0.69444, 0, 0, 0.61111], 8658: [-0.13313, 0.36687, 0, 0, 1], 8659: [0.19444, 0.69444, 0, 0, 0.61111], 8660: [-0.13313, 0.36687, 0, 0, 1], 8661: [0.25, 0.75, 0, 0, 0.61111], 8704: [0, 0.69444, 0, 0, 0.55556], 8706: [0, 0.69444, 0.05556, 0.08334, 0.5309], 8707: [0, 0.69444, 0, 0, 0.55556], 8709: [0.05556, 0.75, 0, 0, 0.5], 8711: [0, 0.68333, 0, 0, 0.83334], 8712: [0.0391, 0.5391, 0, 0, 0.66667], 8715: [0.0391, 0.5391, 0, 0, 0.66667], 8722: [0.08333, 0.58333, 0, 0, 0.77778], 8723: [0.08333, 0.58333, 0, 0, 0.77778], 8725: [0.25, 0.75, 0, 0, 0.5], 8726: [0.25, 0.75, 0, 0, 0.5], 8727: [-0.03472, 0.46528, 0, 0, 0.5], 8728: [-0.05555, 0.44445, 0, 0, 0.5], 8729: [-0.05555, 0.44445, 0, 0, 0.5], 8730: [0.2, 0.8, 0, 0, 0.83334], 8733: [0, 0.43056, 0, 0, 0.77778], 8734: [0, 0.43056, 0, 0, 1], 8736: [0, 0.69224, 0, 0, 0.72222], 8739: [0.25, 0.75, 0, 0, 0.27778], 8741: [0.25, 0.75, 0, 0, 0.5], 8743: [0, 0.55556, 0, 0, 0.66667], 8744: [0, 0.55556, 0, 0, 0.66667], 8745: [0, 0.55556, 0, 0, 0.66667], 8746: [0, 0.55556, 0, 0, 0.66667], 8747: [0.19444, 0.69444, 0.11111, 0, 0.41667], 8764: [-0.13313, 0.36687, 0, 0, 0.77778], 8768: [0.19444, 0.69444, 0, 0, 0.27778], 8771: [-0.03625, 0.46375, 0, 0, 0.77778], 8773: [-0.022, 0.589, 0, 0, 0.778], 8776: [-0.01688, 0.48312, 0, 0, 0.77778], 8781: [-0.03625, 0.46375, 0, 0, 0.77778], 8784: [-0.133, 0.673, 0, 0, 0.778], 8801: [-0.03625, 0.46375, 0, 0, 0.77778], 8804: [0.13597, 0.63597, 0, 0, 0.77778], 8805: [0.13597, 0.63597, 0, 0, 0.77778], 8810: [0.0391, 0.5391, 0, 0, 1], 8811: [0.0391, 0.5391, 0, 0, 1], 8826: [0.0391, 0.5391, 0, 0, 0.77778], 8827: [0.0391, 0.5391, 0, 0, 0.77778], 8834: [0.0391, 0.5391, 0, 0, 0.77778], 8835: [0.0391, 0.5391, 0, 0, 0.77778], 8838: [0.13597, 0.63597, 0, 0, 0.77778], 8839: [0.13597, 0.63597, 0, 0, 0.77778], 8846: [0, 0.55556, 0, 0, 0.66667], 8849: [0.13597, 0.63597, 0, 0, 0.77778], 8850: [0.13597, 0.63597, 0, 0, 0.77778], 8851: [0, 0.55556, 0, 0, 0.66667], 8852: [0, 0.55556, 0, 0, 0.66667], 8853: [0.08333, 0.58333, 0, 0, 0.77778], 8854: [0.08333, 0.58333, 0, 0, 0.77778], 8855: [0.08333, 0.58333, 0, 0, 0.77778], 8856: [0.08333, 0.58333, 0, 0, 0.77778], 8857: [0.08333, 0.58333, 0, 0, 0.77778], 8866: [0, 0.69444, 0, 0, 0.61111], 8867: [0, 0.69444, 0, 0, 0.61111], 8868: [0, 0.69444, 0, 0, 0.77778], 8869: [0, 0.69444, 0, 0, 0.77778], 8872: [0.249, 0.75, 0, 0, 0.867], 8900: [-0.05555, 0.44445, 0, 0, 0.5], 8901: [-0.05555, 0.44445, 0, 0, 0.27778], 8902: [-0.03472, 0.46528, 0, 0, 0.5], 8904: [5e-3, 0.505, 0, 0, 0.9], 8942: [0.03, 0.903, 0, 0, 0.278], 8943: [-0.19, 0.313, 0, 0, 1.172], 8945: [-0.1, 0.823, 0, 0, 1.282], 8968: [0.25, 0.75, 0, 0, 0.44445], 8969: [0.25, 0.75, 0, 0, 0.44445], 8970: [0.25, 0.75, 0, 0, 0.44445], 8971: [0.25, 0.75, 0, 0, 0.44445], 8994: [-0.14236, 0.35764, 0, 0, 1], 8995: [-0.14236, 0.35764, 0, 0, 1], 9136: [0.244, 0.744, 0, 0, 0.412], 9137: [0.244, 0.745, 0, 0, 0.412], 9651: [0.19444, 0.69444, 0, 0, 0.88889], 9657: [-0.03472, 0.46528, 0, 0, 0.5], 9661: [0.19444, 0.69444, 0, 0, 0.88889], 9667: [-0.03472, 0.46528, 0, 0, 0.5], 9711: [0.19444, 0.69444, 0, 0, 1], 9824: [0.12963, 0.69444, 0, 0, 0.77778], 9825: [0.12963, 0.69444, 0, 0, 0.77778], 9826: [0.12963, 0.69444, 0, 0, 0.77778], 9827: [0.12963, 0.69444, 0, 0, 0.77778], 9837: [0, 0.75, 0, 0, 0.38889], 9838: [0.19444, 0.69444, 0, 0, 0.38889], 9839: [0.19444, 0.69444, 0, 0, 0.38889], 10216: [0.25, 0.75, 0, 0, 0.38889], 10217: [0.25, 0.75, 0, 0, 0.38889], 10222: [0.244, 0.744, 0, 0, 0.412], 10223: [0.244, 0.745, 0, 0, 0.412], 10229: [0.011, 0.511, 0, 0, 1.609], 10230: [0.011, 0.511, 0, 0, 1.638], 10231: [0.011, 0.511, 0, 0, 1.859], 10232: [0.024, 0.525, 0, 0, 1.609], 10233: [0.024, 0.525, 0, 0, 1.638], 10234: [0.024, 0.525, 0, 0, 1.858], 10236: [0.011, 0.511, 0, 0, 1.638], 10815: [0, 0.68333, 0, 0, 0.75], 10927: [0.13597, 0.63597, 0, 0, 0.77778], 10928: [0.13597, 0.63597, 0, 0, 0.77778], 57376: [0.19444, 0.69444, 0, 0, 0] }, "Math-BoldItalic": { 32: [0, 0, 0, 0, 0.25], 48: [0, 0.44444, 0, 0, 0.575], 49: [0, 0.44444, 0, 0, 0.575], 50: [0, 0.44444, 0, 0, 0.575], 51: [0.19444, 0.44444, 0, 0, 0.575], 52: [0.19444, 0.44444, 0, 0, 0.575], 53: [0.19444, 0.44444, 0, 0, 0.575], 54: [0, 0.64444, 0, 0, 0.575], 55: [0.19444, 0.44444, 0, 0, 0.575], 56: [0, 0.64444, 0, 0, 0.575], 57: [0.19444, 0.44444, 0, 0, 0.575], 65: [0, 0.68611, 0, 0, 0.86944], 66: [0, 0.68611, 0.04835, 0, 0.8664], 67: [0, 0.68611, 0.06979, 0, 0.81694], 68: [0, 0.68611, 0.03194, 0, 0.93812], 69: [0, 0.68611, 0.05451, 0, 0.81007], 70: [0, 0.68611, 0.15972, 0, 0.68889], 71: [0, 0.68611, 0, 0, 0.88673], 72: [0, 0.68611, 0.08229, 0, 0.98229], 73: [0, 0.68611, 0.07778, 0, 0.51111], 74: [0, 0.68611, 0.10069, 0, 0.63125], 75: [0, 0.68611, 0.06979, 0, 0.97118], 76: [0, 0.68611, 0, 0, 0.75555], 77: [0, 0.68611, 0.11424, 0, 1.14201], 78: [0, 0.68611, 0.11424, 0, 0.95034], 79: [0, 0.68611, 0.03194, 0, 0.83666], 80: [0, 0.68611, 0.15972, 0, 0.72309], 81: [0.19444, 0.68611, 0, 0, 0.86861], 82: [0, 0.68611, 421e-5, 0, 0.87235], 83: [0, 0.68611, 0.05382, 0, 0.69271], 84: [0, 0.68611, 0.15972, 0, 0.63663], 85: [0, 0.68611, 0.11424, 0, 0.80027], 86: [0, 0.68611, 0.25555, 0, 0.67778], 87: [0, 0.68611, 0.15972, 0, 1.09305], 88: [0, 0.68611, 0.07778, 0, 0.94722], 89: [0, 0.68611, 0.25555, 0, 0.67458], 90: [0, 0.68611, 0.06979, 0, 0.77257], 97: [0, 0.44444, 0, 0, 0.63287], 98: [0, 0.69444, 0, 0, 0.52083], 99: [0, 0.44444, 0, 0, 0.51342], 100: [0, 0.69444, 0, 0, 0.60972], 101: [0, 0.44444, 0, 0, 0.55361], 102: [0.19444, 0.69444, 0.11042, 0, 0.56806], 103: [0.19444, 0.44444, 0.03704, 0, 0.5449], 104: [0, 0.69444, 0, 0, 0.66759], 105: [0, 0.69326, 0, 0, 0.4048], 106: [0.19444, 0.69326, 0.0622, 0, 0.47083], 107: [0, 0.69444, 0.01852, 0, 0.6037], 108: [0, 0.69444, 88e-4, 0, 0.34815], 109: [0, 0.44444, 0, 0, 1.0324], 110: [0, 0.44444, 0, 0, 0.71296], 111: [0, 0.44444, 0, 0, 0.58472], 112: [0.19444, 0.44444, 0, 0, 0.60092], 113: [0.19444, 0.44444, 0.03704, 0, 0.54213], 114: [0, 0.44444, 0.03194, 0, 0.5287], 115: [0, 0.44444, 0, 0, 0.53125], 116: [0, 0.63492, 0, 0, 0.41528], 117: [0, 0.44444, 0, 0, 0.68102], 118: [0, 0.44444, 0.03704, 0, 0.56666], 119: [0, 0.44444, 0.02778, 0, 0.83148], 120: [0, 0.44444, 0, 0, 0.65903], 121: [0.19444, 0.44444, 0.03704, 0, 0.59028], 122: [0, 0.44444, 0.04213, 0, 0.55509], 160: [0, 0, 0, 0, 0.25], 915: [0, 0.68611, 0.15972, 0, 0.65694], 916: [0, 0.68611, 0, 0, 0.95833], 920: [0, 0.68611, 0.03194, 0, 0.86722], 923: [0, 0.68611, 0, 0, 0.80555], 926: [0, 0.68611, 0.07458, 0, 0.84125], 928: [0, 0.68611, 0.08229, 0, 0.98229], 931: [0, 0.68611, 0.05451, 0, 0.88507], 933: [0, 0.68611, 0.15972, 0, 0.67083], 934: [0, 0.68611, 0, 0, 0.76666], 936: [0, 0.68611, 0.11653, 0, 0.71402], 937: [0, 0.68611, 0.04835, 0, 0.8789], 945: [0, 0.44444, 0, 0, 0.76064], 946: [0.19444, 0.69444, 0.03403, 0, 0.65972], 947: [0.19444, 0.44444, 0.06389, 0, 0.59003], 948: [0, 0.69444, 0.03819, 0, 0.52222], 949: [0, 0.44444, 0, 0, 0.52882], 950: [0.19444, 0.69444, 0.06215, 0, 0.50833], 951: [0.19444, 0.44444, 0.03704, 0, 0.6], 952: [0, 0.69444, 0.03194, 0, 0.5618], 953: [0, 0.44444, 0, 0, 0.41204], 954: [0, 0.44444, 0, 0, 0.66759], 955: [0, 0.69444, 0, 0, 0.67083], 956: [0.19444, 0.44444, 0, 0, 0.70787], 957: [0, 0.44444, 0.06898, 0, 0.57685], 958: [0.19444, 0.69444, 0.03021, 0, 0.50833], 959: [0, 0.44444, 0, 0, 0.58472], 960: [0, 0.44444, 0.03704, 0, 0.68241], 961: [0.19444, 0.44444, 0, 0, 0.6118], 962: [0.09722, 0.44444, 0.07917, 0, 0.42361], 963: [0, 0.44444, 0.03704, 0, 0.68588], 964: [0, 0.44444, 0.13472, 0, 0.52083], 965: [0, 0.44444, 0.03704, 0, 0.63055], 966: [0.19444, 0.44444, 0, 0, 0.74722], 967: [0.19444, 0.44444, 0, 0, 0.71805], 968: [0.19444, 0.69444, 0.03704, 0, 0.75833], 969: [0, 0.44444, 0.03704, 0, 0.71782], 977: [0, 0.69444, 0, 0, 0.69155], 981: [0.19444, 0.69444, 0, 0, 0.7125], 982: [0, 0.44444, 0.03194, 0, 0.975], 1009: [0.19444, 0.44444, 0, 0, 0.6118], 1013: [0, 0.44444, 0, 0, 0.48333], 57649: [0, 0.44444, 0, 0, 0.39352], 57911: [0.19444, 0.44444, 0, 0, 0.43889] }, "Math-Italic": { 32: [0, 0, 0, 0, 0.25], 48: [0, 0.43056, 0, 0, 0.5], 49: [0, 0.43056, 0, 0, 0.5], 50: [0, 0.43056, 0, 0, 0.5], 51: [0.19444, 0.43056, 0, 0, 0.5], 52: [0.19444, 0.43056, 0, 0, 0.5], 53: [0.19444, 0.43056, 0, 0, 0.5], 54: [0, 0.64444, 0, 0, 0.5], 55: [0.19444, 0.43056, 0, 0, 0.5], 56: [0, 0.64444, 0, 0, 0.5], 57: [0.19444, 0.43056, 0, 0, 0.5], 65: [0, 0.68333, 0, 0.13889, 0.75], 66: [0, 0.68333, 0.05017, 0.08334, 0.75851], 67: [0, 0.68333, 0.07153, 0.08334, 0.71472], 68: [0, 0.68333, 0.02778, 0.05556, 0.82792], 69: [0, 0.68333, 0.05764, 0.08334, 0.7382], 70: [0, 0.68333, 0.13889, 0.08334, 0.64306], 71: [0, 0.68333, 0, 0.08334, 0.78625], 72: [0, 0.68333, 0.08125, 0.05556, 0.83125], 73: [0, 0.68333, 0.07847, 0.11111, 0.43958], 74: [0, 0.68333, 0.09618, 0.16667, 0.55451], 75: [0, 0.68333, 0.07153, 0.05556, 0.84931], 76: [0, 0.68333, 0, 0.02778, 0.68056], 77: [0, 0.68333, 0.10903, 0.08334, 0.97014], 78: [0, 0.68333, 0.10903, 0.08334, 0.80347], 79: [0, 0.68333, 0.02778, 0.08334, 0.76278], 80: [0, 0.68333, 0.13889, 0.08334, 0.64201], 81: [0.19444, 0.68333, 0, 0.08334, 0.79056], 82: [0, 0.68333, 773e-5, 0.08334, 0.75929], 83: [0, 0.68333, 0.05764, 0.08334, 0.6132], 84: [0, 0.68333, 0.13889, 0.08334, 0.58438], 85: [0, 0.68333, 0.10903, 0.02778, 0.68278], 86: [0, 0.68333, 0.22222, 0, 0.58333], 87: [0, 0.68333, 0.13889, 0, 0.94445], 88: [0, 0.68333, 0.07847, 0.08334, 0.82847], 89: [0, 0.68333, 0.22222, 0, 0.58056], 90: [0, 0.68333, 0.07153, 0.08334, 0.68264], 97: [0, 0.43056, 0, 0, 0.52859], 98: [0, 0.69444, 0, 0, 0.42917], 99: [0, 0.43056, 0, 0.05556, 0.43276], 100: [0, 0.69444, 0, 0.16667, 0.52049], 101: [0, 0.43056, 0, 0.05556, 0.46563], 102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959], 103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697], 104: [0, 0.69444, 0, 0, 0.57616], 105: [0, 0.65952, 0, 0, 0.34451], 106: [0.19444, 0.65952, 0.05724, 0, 0.41181], 107: [0, 0.69444, 0.03148, 0, 0.5206], 108: [0, 0.69444, 0.01968, 0.08334, 0.29838], 109: [0, 0.43056, 0, 0, 0.87801], 110: [0, 0.43056, 0, 0, 0.60023], 111: [0, 0.43056, 0, 0.05556, 0.48472], 112: [0.19444, 0.43056, 0, 0.08334, 0.50313], 113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641], 114: [0, 0.43056, 0.02778, 0.05556, 0.45116], 115: [0, 0.43056, 0, 0.05556, 0.46875], 116: [0, 0.61508, 0, 0.08334, 0.36111], 117: [0, 0.43056, 0, 0.02778, 0.57246], 118: [0, 0.43056, 0.03588, 0.02778, 0.48472], 119: [0, 0.43056, 0.02691, 0.08334, 0.71592], 120: [0, 0.43056, 0, 0.02778, 0.57153], 121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028], 122: [0, 0.43056, 0.04398, 0.05556, 0.46505], 160: [0, 0, 0, 0, 0.25], 915: [0, 0.68333, 0.13889, 0.08334, 0.61528], 916: [0, 0.68333, 0, 0.16667, 0.83334], 920: [0, 0.68333, 0.02778, 0.08334, 0.76278], 923: [0, 0.68333, 0, 0.16667, 0.69445], 926: [0, 0.68333, 0.07569, 0.08334, 0.74236], 928: [0, 0.68333, 0.08125, 0.05556, 0.83125], 931: [0, 0.68333, 0.05764, 0.08334, 0.77986], 933: [0, 0.68333, 0.13889, 0.05556, 0.58333], 934: [0, 0.68333, 0, 0.08334, 0.66667], 936: [0, 0.68333, 0.11, 0.05556, 0.61222], 937: [0, 0.68333, 0.05017, 0.08334, 0.7724], 945: [0, 0.43056, 37e-4, 0.02778, 0.6397], 946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563], 947: [0.19444, 0.43056, 0.05556, 0, 0.51773], 948: [0, 0.69444, 0.03785, 0.05556, 0.44444], 949: [0, 0.43056, 0, 0.08334, 0.46632], 950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375], 951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653], 952: [0, 0.69444, 0.02778, 0.08334, 0.46944], 953: [0, 0.43056, 0, 0.05556, 0.35394], 954: [0, 0.43056, 0, 0, 0.57616], 955: [0, 0.69444, 0, 0, 0.58334], 956: [0.19444, 0.43056, 0, 0.02778, 0.60255], 957: [0, 0.43056, 0.06366, 0.02778, 0.49398], 958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375], 959: [0, 0.43056, 0, 0.05556, 0.48472], 960: [0, 0.43056, 0.03588, 0, 0.57003], 961: [0.19444, 0.43056, 0, 0.08334, 0.51702], 962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285], 963: [0, 0.43056, 0.03588, 0, 0.57141], 964: [0, 0.43056, 0.1132, 0.02778, 0.43715], 965: [0, 0.43056, 0.03588, 0.02778, 0.54028], 966: [0.19444, 0.43056, 0, 0.08334, 0.65417], 967: [0.19444, 0.43056, 0, 0.05556, 0.62569], 968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139], 969: [0, 0.43056, 0.03588, 0, 0.62245], 977: [0, 0.69444, 0, 0.08334, 0.59144], 981: [0.19444, 0.69444, 0, 0.08334, 0.59583], 982: [0, 0.43056, 0.02778, 0, 0.82813], 1009: [0.19444, 0.43056, 0, 0.08334, 0.51702], 1013: [0, 0.43056, 0, 0.05556, 0.4059], 57649: [0, 0.43056, 0, 0.02778, 0.32246], 57911: [0.19444, 0.43056, 0, 0.08334, 0.38403] }, "SansSerif-Bold": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.36667], 34: [0, 0.69444, 0, 0, 0.55834], 35: [0.19444, 0.69444, 0, 0, 0.91667], 36: [0.05556, 0.75, 0, 0, 0.55], 37: [0.05556, 0.75, 0, 0, 1.02912], 38: [0, 0.69444, 0, 0, 0.83056], 39: [0, 0.69444, 0, 0, 0.30556], 40: [0.25, 0.75, 0, 0, 0.42778], 41: [0.25, 0.75, 0, 0, 0.42778], 42: [0, 0.75, 0, 0, 0.55], 43: [0.11667, 0.61667, 0, 0, 0.85556], 44: [0.10556, 0.13056, 0, 0, 0.30556], 45: [0, 0.45833, 0, 0, 0.36667], 46: [0, 0.13056, 0, 0, 0.30556], 47: [0.25, 0.75, 0, 0, 0.55], 48: [0, 0.69444, 0, 0, 0.55], 49: [0, 0.69444, 0, 0, 0.55], 50: [0, 0.69444, 0, 0, 0.55], 51: [0, 0.69444, 0, 0, 0.55], 52: [0, 0.69444, 0, 0, 0.55], 53: [0, 0.69444, 0, 0, 0.55], 54: [0, 0.69444, 0, 0, 0.55], 55: [0, 0.69444, 0, 0, 0.55], 56: [0, 0.69444, 0, 0, 0.55], 57: [0, 0.69444, 0, 0, 0.55], 58: [0, 0.45833, 0, 0, 0.30556], 59: [0.10556, 0.45833, 0, 0, 0.30556], 61: [-0.09375, 0.40625, 0, 0, 0.85556], 63: [0, 0.69444, 0, 0, 0.51945], 64: [0, 0.69444, 0, 0, 0.73334], 65: [0, 0.69444, 0, 0, 0.73334], 66: [0, 0.69444, 0, 0, 0.73334], 67: [0, 0.69444, 0, 0, 0.70278], 68: [0, 0.69444, 0, 0, 0.79445], 69: [0, 0.69444, 0, 0, 0.64167], 70: [0, 0.69444, 0, 0, 0.61111], 71: [0, 0.69444, 0, 0, 0.73334], 72: [0, 0.69444, 0, 0, 0.79445], 73: [0, 0.69444, 0, 0, 0.33056], 74: [0, 0.69444, 0, 0, 0.51945], 75: [0, 0.69444, 0, 0, 0.76389], 76: [0, 0.69444, 0, 0, 0.58056], 77: [0, 0.69444, 0, 0, 0.97778], 78: [0, 0.69444, 0, 0, 0.79445], 79: [0, 0.69444, 0, 0, 0.79445], 80: [0, 0.69444, 0, 0, 0.70278], 81: [0.10556, 0.69444, 0, 0, 0.79445], 82: [0, 0.69444, 0, 0, 0.70278], 83: [0, 0.69444, 0, 0, 0.61111], 84: [0, 0.69444, 0, 0, 0.73334], 85: [0, 0.69444, 0, 0, 0.76389], 86: [0, 0.69444, 0.01528, 0, 0.73334], 87: [0, 0.69444, 0.01528, 0, 1.03889], 88: [0, 0.69444, 0, 0, 0.73334], 89: [0, 0.69444, 0.0275, 0, 0.73334], 90: [0, 0.69444, 0, 0, 0.67223], 91: [0.25, 0.75, 0, 0, 0.34306], 93: [0.25, 0.75, 0, 0, 0.34306], 94: [0, 0.69444, 0, 0, 0.55], 95: [0.35, 0.10833, 0.03056, 0, 0.55], 97: [0, 0.45833, 0, 0, 0.525], 98: [0, 0.69444, 0, 0, 0.56111], 99: [0, 0.45833, 0, 0, 0.48889], 100: [0, 0.69444, 0, 0, 0.56111], 101: [0, 0.45833, 0, 0, 0.51111], 102: [0, 0.69444, 0.07639, 0, 0.33611], 103: [0.19444, 0.45833, 0.01528, 0, 0.55], 104: [0, 0.69444, 0, 0, 0.56111], 105: [0, 0.69444, 0, 0, 0.25556], 106: [0.19444, 0.69444, 0, 0, 0.28611], 107: [0, 0.69444, 0, 0, 0.53056], 108: [0, 0.69444, 0, 0, 0.25556], 109: [0, 0.45833, 0, 0, 0.86667], 110: [0, 0.45833, 0, 0, 0.56111], 111: [0, 0.45833, 0, 0, 0.55], 112: [0.19444, 0.45833, 0, 0, 0.56111], 113: [0.19444, 0.45833, 0, 0, 0.56111], 114: [0, 0.45833, 0.01528, 0, 0.37222], 115: [0, 0.45833, 0, 0, 0.42167], 116: [0, 0.58929, 0, 0, 0.40417], 117: [0, 0.45833, 0, 0, 0.56111], 118: [0, 0.45833, 0.01528, 0, 0.5], 119: [0, 0.45833, 0.01528, 0, 0.74445], 120: [0, 0.45833, 0, 0, 0.5], 121: [0.19444, 0.45833, 0.01528, 0, 0.5], 122: [0, 0.45833, 0, 0, 0.47639], 126: [0.35, 0.34444, 0, 0, 0.55], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.69444, 0, 0, 0.55], 176: [0, 0.69444, 0, 0, 0.73334], 180: [0, 0.69444, 0, 0, 0.55], 184: [0.17014, 0, 0, 0, 0.48889], 305: [0, 0.45833, 0, 0, 0.25556], 567: [0.19444, 0.45833, 0, 0, 0.28611], 710: [0, 0.69444, 0, 0, 0.55], 711: [0, 0.63542, 0, 0, 0.55], 713: [0, 0.63778, 0, 0, 0.55], 728: [0, 0.69444, 0, 0, 0.55], 729: [0, 0.69444, 0, 0, 0.30556], 730: [0, 0.69444, 0, 0, 0.73334], 732: [0, 0.69444, 0, 0, 0.55], 733: [0, 0.69444, 0, 0, 0.55], 915: [0, 0.69444, 0, 0, 0.58056], 916: [0, 0.69444, 0, 0, 0.91667], 920: [0, 0.69444, 0, 0, 0.85556], 923: [0, 0.69444, 0, 0, 0.67223], 926: [0, 0.69444, 0, 0, 0.73334], 928: [0, 0.69444, 0, 0, 0.79445], 931: [0, 0.69444, 0, 0, 0.79445], 933: [0, 0.69444, 0, 0, 0.85556], 934: [0, 0.69444, 0, 0, 0.79445], 936: [0, 0.69444, 0, 0, 0.85556], 937: [0, 0.69444, 0, 0, 0.79445], 8211: [0, 0.45833, 0.03056, 0, 0.55], 8212: [0, 0.45833, 0.03056, 0, 1.10001], 8216: [0, 0.69444, 0, 0, 0.30556], 8217: [0, 0.69444, 0, 0, 0.30556], 8220: [0, 0.69444, 0, 0, 0.55834], 8221: [0, 0.69444, 0, 0, 0.55834] }, "SansSerif-Italic": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0.05733, 0, 0.31945], 34: [0, 0.69444, 316e-5, 0, 0.5], 35: [0.19444, 0.69444, 0.05087, 0, 0.83334], 36: [0.05556, 0.75, 0.11156, 0, 0.5], 37: [0.05556, 0.75, 0.03126, 0, 0.83334], 38: [0, 0.69444, 0.03058, 0, 0.75834], 39: [0, 0.69444, 0.07816, 0, 0.27778], 40: [0.25, 0.75, 0.13164, 0, 0.38889], 41: [0.25, 0.75, 0.02536, 0, 0.38889], 42: [0, 0.75, 0.11775, 0, 0.5], 43: [0.08333, 0.58333, 0.02536, 0, 0.77778], 44: [0.125, 0.08333, 0, 0, 0.27778], 45: [0, 0.44444, 0.01946, 0, 0.33333], 46: [0, 0.08333, 0, 0, 0.27778], 47: [0.25, 0.75, 0.13164, 0, 0.5], 48: [0, 0.65556, 0.11156, 0, 0.5], 49: [0, 0.65556, 0.11156, 0, 0.5], 50: [0, 0.65556, 0.11156, 0, 0.5], 51: [0, 0.65556, 0.11156, 0, 0.5], 52: [0, 0.65556, 0.11156, 0, 0.5], 53: [0, 0.65556, 0.11156, 0, 0.5], 54: [0, 0.65556, 0.11156, 0, 0.5], 55: [0, 0.65556, 0.11156, 0, 0.5], 56: [0, 0.65556, 0.11156, 0, 0.5], 57: [0, 0.65556, 0.11156, 0, 0.5], 58: [0, 0.44444, 0.02502, 0, 0.27778], 59: [0.125, 0.44444, 0.02502, 0, 0.27778], 61: [-0.13, 0.37, 0.05087, 0, 0.77778], 63: [0, 0.69444, 0.11809, 0, 0.47222], 64: [0, 0.69444, 0.07555, 0, 0.66667], 65: [0, 0.69444, 0, 0, 0.66667], 66: [0, 0.69444, 0.08293, 0, 0.66667], 67: [0, 0.69444, 0.11983, 0, 0.63889], 68: [0, 0.69444, 0.07555, 0, 0.72223], 69: [0, 0.69444, 0.11983, 0, 0.59722], 70: [0, 0.69444, 0.13372, 0, 0.56945], 71: [0, 0.69444, 0.11983, 0, 0.66667], 72: [0, 0.69444, 0.08094, 0, 0.70834], 73: [0, 0.69444, 0.13372, 0, 0.27778], 74: [0, 0.69444, 0.08094, 0, 0.47222], 75: [0, 0.69444, 0.11983, 0, 0.69445], 76: [0, 0.69444, 0, 0, 0.54167], 77: [0, 0.69444, 0.08094, 0, 0.875], 78: [0, 0.69444, 0.08094, 0, 0.70834], 79: [0, 0.69444, 0.07555, 0, 0.73611], 80: [0, 0.69444, 0.08293, 0, 0.63889], 81: [0.125, 0.69444, 0.07555, 0, 0.73611], 82: [0, 0.69444, 0.08293, 0, 0.64584], 83: [0, 0.69444, 0.09205, 0, 0.55556], 84: [0, 0.69444, 0.13372, 0, 0.68056], 85: [0, 0.69444, 0.08094, 0, 0.6875], 86: [0, 0.69444, 0.1615, 0, 0.66667], 87: [0, 0.69444, 0.1615, 0, 0.94445], 88: [0, 0.69444, 0.13372, 0, 0.66667], 89: [0, 0.69444, 0.17261, 0, 0.66667], 90: [0, 0.69444, 0.11983, 0, 0.61111], 91: [0.25, 0.75, 0.15942, 0, 0.28889], 93: [0.25, 0.75, 0.08719, 0, 0.28889], 94: [0, 0.69444, 0.0799, 0, 0.5], 95: [0.35, 0.09444, 0.08616, 0, 0.5], 97: [0, 0.44444, 981e-5, 0, 0.48056], 98: [0, 0.69444, 0.03057, 0, 0.51667], 99: [0, 0.44444, 0.08336, 0, 0.44445], 100: [0, 0.69444, 0.09483, 0, 0.51667], 101: [0, 0.44444, 0.06778, 0, 0.44445], 102: [0, 0.69444, 0.21705, 0, 0.30556], 103: [0.19444, 0.44444, 0.10836, 0, 0.5], 104: [0, 0.69444, 0.01778, 0, 0.51667], 105: [0, 0.67937, 0.09718, 0, 0.23889], 106: [0.19444, 0.67937, 0.09162, 0, 0.26667], 107: [0, 0.69444, 0.08336, 0, 0.48889], 108: [0, 0.69444, 0.09483, 0, 0.23889], 109: [0, 0.44444, 0.01778, 0, 0.79445], 110: [0, 0.44444, 0.01778, 0, 0.51667], 111: [0, 0.44444, 0.06613, 0, 0.5], 112: [0.19444, 0.44444, 0.0389, 0, 0.51667], 113: [0.19444, 0.44444, 0.04169, 0, 0.51667], 114: [0, 0.44444, 0.10836, 0, 0.34167], 115: [0, 0.44444, 0.0778, 0, 0.38333], 116: [0, 0.57143, 0.07225, 0, 0.36111], 117: [0, 0.44444, 0.04169, 0, 0.51667], 118: [0, 0.44444, 0.10836, 0, 0.46111], 119: [0, 0.44444, 0.10836, 0, 0.68334], 120: [0, 0.44444, 0.09169, 0, 0.46111], 121: [0.19444, 0.44444, 0.10836, 0, 0.46111], 122: [0, 0.44444, 0.08752, 0, 0.43472], 126: [0.35, 0.32659, 0.08826, 0, 0.5], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.67937, 0.06385, 0, 0.5], 176: [0, 0.69444, 0, 0, 0.73752], 184: [0.17014, 0, 0, 0, 0.44445], 305: [0, 0.44444, 0.04169, 0, 0.23889], 567: [0.19444, 0.44444, 0.04169, 0, 0.26667], 710: [0, 0.69444, 0.0799, 0, 0.5], 711: [0, 0.63194, 0.08432, 0, 0.5], 713: [0, 0.60889, 0.08776, 0, 0.5], 714: [0, 0.69444, 0.09205, 0, 0.5], 715: [0, 0.69444, 0, 0, 0.5], 728: [0, 0.69444, 0.09483, 0, 0.5], 729: [0, 0.67937, 0.07774, 0, 0.27778], 730: [0, 0.69444, 0, 0, 0.73752], 732: [0, 0.67659, 0.08826, 0, 0.5], 733: [0, 0.69444, 0.09205, 0, 0.5], 915: [0, 0.69444, 0.13372, 0, 0.54167], 916: [0, 0.69444, 0, 0, 0.83334], 920: [0, 0.69444, 0.07555, 0, 0.77778], 923: [0, 0.69444, 0, 0, 0.61111], 926: [0, 0.69444, 0.12816, 0, 0.66667], 928: [0, 0.69444, 0.08094, 0, 0.70834], 931: [0, 0.69444, 0.11983, 0, 0.72222], 933: [0, 0.69444, 0.09031, 0, 0.77778], 934: [0, 0.69444, 0.04603, 0, 0.72222], 936: [0, 0.69444, 0.09031, 0, 0.77778], 937: [0, 0.69444, 0.08293, 0, 0.72222], 8211: [0, 0.44444, 0.08616, 0, 0.5], 8212: [0, 0.44444, 0.08616, 0, 1], 8216: [0, 0.69444, 0.07816, 0, 0.27778], 8217: [0, 0.69444, 0.07816, 0, 0.27778], 8220: [0, 0.69444, 0.14205, 0, 0.5], 8221: [0, 0.69444, 316e-5, 0, 0.5] }, "SansSerif-Regular": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.31945], 34: [0, 0.69444, 0, 0, 0.5], 35: [0.19444, 0.69444, 0, 0, 0.83334], 36: [0.05556, 0.75, 0, 0, 0.5], 37: [0.05556, 0.75, 0, 0, 0.83334], 38: [0, 0.69444, 0, 0, 0.75834], 39: [0, 0.69444, 0, 0, 0.27778], 40: [0.25, 0.75, 0, 0, 0.38889], 41: [0.25, 0.75, 0, 0, 0.38889], 42: [0, 0.75, 0, 0, 0.5], 43: [0.08333, 0.58333, 0, 0, 0.77778], 44: [0.125, 0.08333, 0, 0, 0.27778], 45: [0, 0.44444, 0, 0, 0.33333], 46: [0, 0.08333, 0, 0, 0.27778], 47: [0.25, 0.75, 0, 0, 0.5], 48: [0, 0.65556, 0, 0, 0.5], 49: [0, 0.65556, 0, 0, 0.5], 50: [0, 0.65556, 0, 0, 0.5], 51: [0, 0.65556, 0, 0, 0.5], 52: [0, 0.65556, 0, 0, 0.5], 53: [0, 0.65556, 0, 0, 0.5], 54: [0, 0.65556, 0, 0, 0.5], 55: [0, 0.65556, 0, 0, 0.5], 56: [0, 0.65556, 0, 0, 0.5], 57: [0, 0.65556, 0, 0, 0.5], 58: [0, 0.44444, 0, 0, 0.27778], 59: [0.125, 0.44444, 0, 0, 0.27778], 61: [-0.13, 0.37, 0, 0, 0.77778], 63: [0, 0.69444, 0, 0, 0.47222], 64: [0, 0.69444, 0, 0, 0.66667], 65: [0, 0.69444, 0, 0, 0.66667], 66: [0, 0.69444, 0, 0, 0.66667], 67: [0, 0.69444, 0, 0, 0.63889], 68: [0, 0.69444, 0, 0, 0.72223], 69: [0, 0.69444, 0, 0, 0.59722], 70: [0, 0.69444, 0, 0, 0.56945], 71: [0, 0.69444, 0, 0, 0.66667], 72: [0, 0.69444, 0, 0, 0.70834], 73: [0, 0.69444, 0, 0, 0.27778], 74: [0, 0.69444, 0, 0, 0.47222], 75: [0, 0.69444, 0, 0, 0.69445], 76: [0, 0.69444, 0, 0, 0.54167], 77: [0, 0.69444, 0, 0, 0.875], 78: [0, 0.69444, 0, 0, 0.70834], 79: [0, 0.69444, 0, 0, 0.73611], 80: [0, 0.69444, 0, 0, 0.63889], 81: [0.125, 0.69444, 0, 0, 0.73611], 82: [0, 0.69444, 0, 0, 0.64584], 83: [0, 0.69444, 0, 0, 0.55556], 84: [0, 0.69444, 0, 0, 0.68056], 85: [0, 0.69444, 0, 0, 0.6875], 86: [0, 0.69444, 0.01389, 0, 0.66667], 87: [0, 0.69444, 0.01389, 0, 0.94445], 88: [0, 0.69444, 0, 0, 0.66667], 89: [0, 0.69444, 0.025, 0, 0.66667], 90: [0, 0.69444, 0, 0, 0.61111], 91: [0.25, 0.75, 0, 0, 0.28889], 93: [0.25, 0.75, 0, 0, 0.28889], 94: [0, 0.69444, 0, 0, 0.5], 95: [0.35, 0.09444, 0.02778, 0, 0.5], 97: [0, 0.44444, 0, 0, 0.48056], 98: [0, 0.69444, 0, 0, 0.51667], 99: [0, 0.44444, 0, 0, 0.44445], 100: [0, 0.69444, 0, 0, 0.51667], 101: [0, 0.44444, 0, 0, 0.44445], 102: [0, 0.69444, 0.06944, 0, 0.30556], 103: [0.19444, 0.44444, 0.01389, 0, 0.5], 104: [0, 0.69444, 0, 0, 0.51667], 105: [0, 0.67937, 0, 0, 0.23889], 106: [0.19444, 0.67937, 0, 0, 0.26667], 107: [0, 0.69444, 0, 0, 0.48889], 108: [0, 0.69444, 0, 0, 0.23889], 109: [0, 0.44444, 0, 0, 0.79445], 110: [0, 0.44444, 0, 0, 0.51667], 111: [0, 0.44444, 0, 0, 0.5], 112: [0.19444, 0.44444, 0, 0, 0.51667], 113: [0.19444, 0.44444, 0, 0, 0.51667], 114: [0, 0.44444, 0.01389, 0, 0.34167], 115: [0, 0.44444, 0, 0, 0.38333], 116: [0, 0.57143, 0, 0, 0.36111], 117: [0, 0.44444, 0, 0, 0.51667], 118: [0, 0.44444, 0.01389, 0, 0.46111], 119: [0, 0.44444, 0.01389, 0, 0.68334], 120: [0, 0.44444, 0, 0, 0.46111], 121: [0.19444, 0.44444, 0.01389, 0, 0.46111], 122: [0, 0.44444, 0, 0, 0.43472], 126: [0.35, 0.32659, 0, 0, 0.5], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.67937, 0, 0, 0.5], 176: [0, 0.69444, 0, 0, 0.66667], 184: [0.17014, 0, 0, 0, 0.44445], 305: [0, 0.44444, 0, 0, 0.23889], 567: [0.19444, 0.44444, 0, 0, 0.26667], 710: [0, 0.69444, 0, 0, 0.5], 711: [0, 0.63194, 0, 0, 0.5], 713: [0, 0.60889, 0, 0, 0.5], 714: [0, 0.69444, 0, 0, 0.5], 715: [0, 0.69444, 0, 0, 0.5], 728: [0, 0.69444, 0, 0, 0.5], 729: [0, 0.67937, 0, 0, 0.27778], 730: [0, 0.69444, 0, 0, 0.66667], 732: [0, 0.67659, 0, 0, 0.5], 733: [0, 0.69444, 0, 0, 0.5], 915: [0, 0.69444, 0, 0, 0.54167], 916: [0, 0.69444, 0, 0, 0.83334], 920: [0, 0.69444, 0, 0, 0.77778], 923: [0, 0.69444, 0, 0, 0.61111], 926: [0, 0.69444, 0, 0, 0.66667], 928: [0, 0.69444, 0, 0, 0.70834], 931: [0, 0.69444, 0, 0, 0.72222], 933: [0, 0.69444, 0, 0, 0.77778], 934: [0, 0.69444, 0, 0, 0.72222], 936: [0, 0.69444, 0, 0, 0.77778], 937: [0, 0.69444, 0, 0, 0.72222], 8211: [0, 0.44444, 0.02778, 0, 0.5], 8212: [0, 0.44444, 0.02778, 0, 1], 8216: [0, 0.69444, 0, 0, 0.27778], 8217: [0, 0.69444, 0, 0, 0.27778], 8220: [0, 0.69444, 0, 0, 0.5], 8221: [0, 0.69444, 0, 0, 0.5] }, "Script-Regular": { 32: [0, 0, 0, 0, 0.25], 65: [0, 0.7, 0.22925, 0, 0.80253], 66: [0, 0.7, 0.04087, 0, 0.90757], 67: [0, 0.7, 0.1689, 0, 0.66619], 68: [0, 0.7, 0.09371, 0, 0.77443], 69: [0, 0.7, 0.18583, 0, 0.56162], 70: [0, 0.7, 0.13634, 0, 0.89544], 71: [0, 0.7, 0.17322, 0, 0.60961], 72: [0, 0.7, 0.29694, 0, 0.96919], 73: [0, 0.7, 0.19189, 0, 0.80907], 74: [0.27778, 0.7, 0.19189, 0, 1.05159], 75: [0, 0.7, 0.31259, 0, 0.91364], 76: [0, 0.7, 0.19189, 0, 0.87373], 77: [0, 0.7, 0.15981, 0, 1.08031], 78: [0, 0.7, 0.3525, 0, 0.9015], 79: [0, 0.7, 0.08078, 0, 0.73787], 80: [0, 0.7, 0.08078, 0, 1.01262], 81: [0, 0.7, 0.03305, 0, 0.88282], 82: [0, 0.7, 0.06259, 0, 0.85], 83: [0, 0.7, 0.19189, 0, 0.86767], 84: [0, 0.7, 0.29087, 0, 0.74697], 85: [0, 0.7, 0.25815, 0, 0.79996], 86: [0, 0.7, 0.27523, 0, 0.62204], 87: [0, 0.7, 0.27523, 0, 0.80532], 88: [0, 0.7, 0.26006, 0, 0.94445], 89: [0, 0.7, 0.2939, 0, 0.70961], 90: [0, 0.7, 0.24037, 0, 0.8212], 160: [0, 0, 0, 0, 0.25] }, "Size1-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [0.35001, 0.85, 0, 0, 0.45834], 41: [0.35001, 0.85, 0, 0, 0.45834], 47: [0.35001, 0.85, 0, 0, 0.57778], 91: [0.35001, 0.85, 0, 0, 0.41667], 92: [0.35001, 0.85, 0, 0, 0.57778], 93: [0.35001, 0.85, 0, 0, 0.41667], 123: [0.35001, 0.85, 0, 0, 0.58334], 125: [0.35001, 0.85, 0, 0, 0.58334], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.72222, 0, 0, 0.55556], 732: [0, 0.72222, 0, 0, 0.55556], 770: [0, 0.72222, 0, 0, 0.55556], 771: [0, 0.72222, 0, 0, 0.55556], 8214: [-99e-5, 0.601, 0, 0, 0.77778], 8593: [1e-5, 0.6, 0, 0, 0.66667], 8595: [1e-5, 0.6, 0, 0, 0.66667], 8657: [1e-5, 0.6, 0, 0, 0.77778], 8659: [1e-5, 0.6, 0, 0, 0.77778], 8719: [0.25001, 0.75, 0, 0, 0.94445], 8720: [0.25001, 0.75, 0, 0, 0.94445], 8721: [0.25001, 0.75, 0, 0, 1.05556], 8730: [0.35001, 0.85, 0, 0, 1], 8739: [-599e-5, 0.606, 0, 0, 0.33333], 8741: [-599e-5, 0.606, 0, 0, 0.55556], 8747: [0.30612, 0.805, 0.19445, 0, 0.47222], 8748: [0.306, 0.805, 0.19445, 0, 0.47222], 8749: [0.306, 0.805, 0.19445, 0, 0.47222], 8750: [0.30612, 0.805, 0.19445, 0, 0.47222], 8896: [0.25001, 0.75, 0, 0, 0.83334], 8897: [0.25001, 0.75, 0, 0, 0.83334], 8898: [0.25001, 0.75, 0, 0, 0.83334], 8899: [0.25001, 0.75, 0, 0, 0.83334], 8968: [0.35001, 0.85, 0, 0, 0.47222], 8969: [0.35001, 0.85, 0, 0, 0.47222], 8970: [0.35001, 0.85, 0, 0, 0.47222], 8971: [0.35001, 0.85, 0, 0, 0.47222], 9168: [-99e-5, 0.601, 0, 0, 0.66667], 10216: [0.35001, 0.85, 0, 0, 0.47222], 10217: [0.35001, 0.85, 0, 0, 0.47222], 10752: [0.25001, 0.75, 0, 0, 1.11111], 10753: [0.25001, 0.75, 0, 0, 1.11111], 10754: [0.25001, 0.75, 0, 0, 1.11111], 10756: [0.25001, 0.75, 0, 0, 0.83334], 10758: [0.25001, 0.75, 0, 0, 0.83334] }, "Size2-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [0.65002, 1.15, 0, 0, 0.59722], 41: [0.65002, 1.15, 0, 0, 0.59722], 47: [0.65002, 1.15, 0, 0, 0.81111], 91: [0.65002, 1.15, 0, 0, 0.47222], 92: [0.65002, 1.15, 0, 0, 0.81111], 93: [0.65002, 1.15, 0, 0, 0.47222], 123: [0.65002, 1.15, 0, 0, 0.66667], 125: [0.65002, 1.15, 0, 0, 0.66667], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.75, 0, 0, 1], 732: [0, 0.75, 0, 0, 1], 770: [0, 0.75, 0, 0, 1], 771: [0, 0.75, 0, 0, 1], 8719: [0.55001, 1.05, 0, 0, 1.27778], 8720: [0.55001, 1.05, 0, 0, 1.27778], 8721: [0.55001, 1.05, 0, 0, 1.44445], 8730: [0.65002, 1.15, 0, 0, 1], 8747: [0.86225, 1.36, 0.44445, 0, 0.55556], 8748: [0.862, 1.36, 0.44445, 0, 0.55556], 8749: [0.862, 1.36, 0.44445, 0, 0.55556], 8750: [0.86225, 1.36, 0.44445, 0, 0.55556], 8896: [0.55001, 1.05, 0, 0, 1.11111], 8897: [0.55001, 1.05, 0, 0, 1.11111], 8898: [0.55001, 1.05, 0, 0, 1.11111], 8899: [0.55001, 1.05, 0, 0, 1.11111], 8968: [0.65002, 1.15, 0, 0, 0.52778], 8969: [0.65002, 1.15, 0, 0, 0.52778], 8970: [0.65002, 1.15, 0, 0, 0.52778], 8971: [0.65002, 1.15, 0, 0, 0.52778], 10216: [0.65002, 1.15, 0, 0, 0.61111], 10217: [0.65002, 1.15, 0, 0, 0.61111], 10752: [0.55001, 1.05, 0, 0, 1.51112], 10753: [0.55001, 1.05, 0, 0, 1.51112], 10754: [0.55001, 1.05, 0, 0, 1.51112], 10756: [0.55001, 1.05, 0, 0, 1.11111], 10758: [0.55001, 1.05, 0, 0, 1.11111] }, "Size3-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [0.95003, 1.45, 0, 0, 0.73611], 41: [0.95003, 1.45, 0, 0, 0.73611], 47: [0.95003, 1.45, 0, 0, 1.04445], 91: [0.95003, 1.45, 0, 0, 0.52778], 92: [0.95003, 1.45, 0, 0, 1.04445], 93: [0.95003, 1.45, 0, 0, 0.52778], 123: [0.95003, 1.45, 0, 0, 0.75], 125: [0.95003, 1.45, 0, 0, 0.75], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.75, 0, 0, 1.44445], 732: [0, 0.75, 0, 0, 1.44445], 770: [0, 0.75, 0, 0, 1.44445], 771: [0, 0.75, 0, 0, 1.44445], 8730: [0.95003, 1.45, 0, 0, 1], 8968: [0.95003, 1.45, 0, 0, 0.58334], 8969: [0.95003, 1.45, 0, 0, 0.58334], 8970: [0.95003, 1.45, 0, 0, 0.58334], 8971: [0.95003, 1.45, 0, 0, 0.58334], 10216: [0.95003, 1.45, 0, 0, 0.75], 10217: [0.95003, 1.45, 0, 0, 0.75] }, "Size4-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [1.25003, 1.75, 0, 0, 0.79167], 41: [1.25003, 1.75, 0, 0, 0.79167], 47: [1.25003, 1.75, 0, 0, 1.27778], 91: [1.25003, 1.75, 0, 0, 0.58334], 92: [1.25003, 1.75, 0, 0, 1.27778], 93: [1.25003, 1.75, 0, 0, 0.58334], 123: [1.25003, 1.75, 0, 0, 0.80556], 125: [1.25003, 1.75, 0, 0, 0.80556], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.825, 0, 0, 1.8889], 732: [0, 0.825, 0, 0, 1.8889], 770: [0, 0.825, 0, 0, 1.8889], 771: [0, 0.825, 0, 0, 1.8889], 8730: [1.25003, 1.75, 0, 0, 1], 8968: [1.25003, 1.75, 0, 0, 0.63889], 8969: [1.25003, 1.75, 0, 0, 0.63889], 8970: [1.25003, 1.75, 0, 0, 0.63889], 8971: [1.25003, 1.75, 0, 0, 0.63889], 9115: [0.64502, 1.155, 0, 0, 0.875], 9116: [1e-5, 0.6, 0, 0, 0.875], 9117: [0.64502, 1.155, 0, 0, 0.875], 9118: [0.64502, 1.155, 0, 0, 0.875], 9119: [1e-5, 0.6, 0, 0, 0.875], 9120: [0.64502, 1.155, 0, 0, 0.875], 9121: [0.64502, 1.155, 0, 0, 0.66667], 9122: [-99e-5, 0.601, 0, 0, 0.66667], 9123: [0.64502, 1.155, 0, 0, 0.66667], 9124: [0.64502, 1.155, 0, 0, 0.66667], 9125: [-99e-5, 0.601, 0, 0, 0.66667], 9126: [0.64502, 1.155, 0, 0, 0.66667], 9127: [1e-5, 0.9, 0, 0, 0.88889], 9128: [0.65002, 1.15, 0, 0, 0.88889], 9129: [0.90001, 0, 0, 0, 0.88889], 9130: [0, 0.3, 0, 0, 0.88889], 9131: [1e-5, 0.9, 0, 0, 0.88889], 9132: [0.65002, 1.15, 0, 0, 0.88889], 9133: [0.90001, 0, 0, 0, 0.88889], 9143: [0.88502, 0.915, 0, 0, 1.05556], 10216: [1.25003, 1.75, 0, 0, 0.80556], 10217: [1.25003, 1.75, 0, 0, 0.80556], 57344: [-499e-5, 0.605, 0, 0, 1.05556], 57345: [-499e-5, 0.605, 0, 0, 1.05556], 57680: [0, 0.12, 0, 0, 0.45], 57681: [0, 0.12, 0, 0, 0.45], 57682: [0, 0.12, 0, 0, 0.45], 57683: [0, 0.12, 0, 0, 0.45] }, "Typewriter-Regular": { 32: [0, 0, 0, 0, 0.525], 33: [0, 0.61111, 0, 0, 0.525], 34: [0, 0.61111, 0, 0, 0.525], 35: [0, 0.61111, 0, 0, 0.525], 36: [0.08333, 0.69444, 0, 0, 0.525], 37: [0.08333, 0.69444, 0, 0, 0.525], 38: [0, 0.61111, 0, 0, 0.525], 39: [0, 0.61111, 0, 0, 0.525], 40: [0.08333, 0.69444, 0, 0, 0.525], 41: [0.08333, 0.69444, 0, 0, 0.525], 42: [0, 0.52083, 0, 0, 0.525], 43: [-0.08056, 0.53055, 0, 0, 0.525], 44: [0.13889, 0.125, 0, 0, 0.525], 45: [-0.08056, 0.53055, 0, 0, 0.525], 46: [0, 0.125, 0, 0, 0.525], 47: [0.08333, 0.69444, 0, 0, 0.525], 48: [0, 0.61111, 0, 0, 0.525], 49: [0, 0.61111, 0, 0, 0.525], 50: [0, 0.61111, 0, 0, 0.525], 51: [0, 0.61111, 0, 0, 0.525], 52: [0, 0.61111, 0, 0, 0.525], 53: [0, 0.61111, 0, 0, 0.525], 54: [0, 0.61111, 0, 0, 0.525], 55: [0, 0.61111, 0, 0, 0.525], 56: [0, 0.61111, 0, 0, 0.525], 57: [0, 0.61111, 0, 0, 0.525], 58: [0, 0.43056, 0, 0, 0.525], 59: [0.13889, 0.43056, 0, 0, 0.525], 60: [-0.05556, 0.55556, 0, 0, 0.525], 61: [-0.19549, 0.41562, 0, 0, 0.525], 62: [-0.05556, 0.55556, 0, 0, 0.525], 63: [0, 0.61111, 0, 0, 0.525], 64: [0, 0.61111, 0, 0, 0.525], 65: [0, 0.61111, 0, 0, 0.525], 66: [0, 0.61111, 0, 0, 0.525], 67: [0, 0.61111, 0, 0, 0.525], 68: [0, 0.61111, 0, 0, 0.525], 69: [0, 0.61111, 0, 0, 0.525], 70: [0, 0.61111, 0, 0, 0.525], 71: [0, 0.61111, 0, 0, 0.525], 72: [0, 0.61111, 0, 0, 0.525], 73: [0, 0.61111, 0, 0, 0.525], 74: [0, 0.61111, 0, 0, 0.525], 75: [0, 0.61111, 0, 0, 0.525], 76: [0, 0.61111, 0, 0, 0.525], 77: [0, 0.61111, 0, 0, 0.525], 78: [0, 0.61111, 0, 0, 0.525], 79: [0, 0.61111, 0, 0, 0.525], 80: [0, 0.61111, 0, 0, 0.525], 81: [0.13889, 0.61111, 0, 0, 0.525], 82: [0, 0.61111, 0, 0, 0.525], 83: [0, 0.61111, 0, 0, 0.525], 84: [0, 0.61111, 0, 0, 0.525], 85: [0, 0.61111, 0, 0, 0.525], 86: [0, 0.61111, 0, 0, 0.525], 87: [0, 0.61111, 0, 0, 0.525], 88: [0, 0.61111, 0, 0, 0.525], 89: [0, 0.61111, 0, 0, 0.525], 90: [0, 0.61111, 0, 0, 0.525], 91: [0.08333, 0.69444, 0, 0, 0.525], 92: [0.08333, 0.69444, 0, 0, 0.525], 93: [0.08333, 0.69444, 0, 0, 0.525], 94: [0, 0.61111, 0, 0, 0.525], 95: [0.09514, 0, 0, 0, 0.525], 96: [0, 0.61111, 0, 0, 0.525], 97: [0, 0.43056, 0, 0, 0.525], 98: [0, 0.61111, 0, 0, 0.525], 99: [0, 0.43056, 0, 0, 0.525], 100: [0, 0.61111, 0, 0, 0.525], 101: [0, 0.43056, 0, 0, 0.525], 102: [0, 0.61111, 0, 0, 0.525], 103: [0.22222, 0.43056, 0, 0, 0.525], 104: [0, 0.61111, 0, 0, 0.525], 105: [0, 0.61111, 0, 0, 0.525], 106: [0.22222, 0.61111, 0, 0, 0.525], 107: [0, 0.61111, 0, 0, 0.525], 108: [0, 0.61111, 0, 0, 0.525], 109: [0, 0.43056, 0, 0, 0.525], 110: [0, 0.43056, 0, 0, 0.525], 111: [0, 0.43056, 0, 0, 0.525], 112: [0.22222, 0.43056, 0, 0, 0.525], 113: [0.22222, 0.43056, 0, 0, 0.525], 114: [0, 0.43056, 0, 0, 0.525], 115: [0, 0.43056, 0, 0, 0.525], 116: [0, 0.55358, 0, 0, 0.525], 117: [0, 0.43056, 0, 0, 0.525], 118: [0, 0.43056, 0, 0, 0.525], 119: [0, 0.43056, 0, 0, 0.525], 120: [0, 0.43056, 0, 0, 0.525], 121: [0.22222, 0.43056, 0, 0, 0.525], 122: [0, 0.43056, 0, 0, 0.525], 123: [0.08333, 0.69444, 0, 0, 0.525], 124: [0.08333, 0.69444, 0, 0, 0.525], 125: [0.08333, 0.69444, 0, 0, 0.525], 126: [0, 0.61111, 0, 0, 0.525], 127: [0, 0.61111, 0, 0, 0.525], 160: [0, 0, 0, 0, 0.525], 176: [0, 0.61111, 0, 0, 0.525], 184: [0.19445, 0, 0, 0, 0.525], 305: [0, 0.43056, 0, 0, 0.525], 567: [0.22222, 0.43056, 0, 0, 0.525], 711: [0, 0.56597, 0, 0, 0.525], 713: [0, 0.56555, 0, 0, 0.525], 714: [0, 0.61111, 0, 0, 0.525], 715: [0, 0.61111, 0, 0, 0.525], 728: [0, 0.61111, 0, 0, 0.525], 730: [0, 0.61111, 0, 0, 0.525], 770: [0, 0.61111, 0, 0, 0.525], 771: [0, 0.61111, 0, 0, 0.525], 776: [0, 0.61111, 0, 0, 0.525], 915: [0, 0.61111, 0, 0, 0.525], 916: [0, 0.61111, 0, 0, 0.525], 920: [0, 0.61111, 0, 0, 0.525], 923: [0, 0.61111, 0, 0, 0.525], 926: [0, 0.61111, 0, 0, 0.525], 928: [0, 0.61111, 0, 0, 0.525], 931: [0, 0.61111, 0, 0, 0.525], 933: [0, 0.61111, 0, 0, 0.525], 934: [0, 0.61111, 0, 0, 0.525], 936: [0, 0.61111, 0, 0, 0.525], 937: [0, 0.61111, 0, 0, 0.525], 8216: [0, 0.61111, 0, 0, 0.525], 8217: [0, 0.61111, 0, 0, 0.525], 8242: [0, 0.61111, 0, 0, 0.525], 9251: [0.11111, 0.21944, 0, 0, 0.525] } }, Ve = { slant: [0.25, 0.25, 0.25], space: [0, 0, 0], stretch: [0, 0, 0], shrink: [0, 0, 0], xHeight: [0.431, 0.431, 0.431], quad: [1, 1.171, 1.472], extraSpace: [0, 0, 0], num1: [0.677, 0.732, 0.925], num2: [0.394, 0.384, 0.387], num3: [0.444, 0.471, 0.504], denom1: [0.686, 0.752, 1.025], denom2: [0.345, 0.344, 0.532], sup1: [0.413, 0.503, 0.504], sup2: [0.363, 0.431, 0.404], sup3: [0.289, 0.286, 0.294], sub1: [0.15, 0.143, 0.2], sub2: [0.247, 0.286, 0.4], supDrop: [0.386, 0.353, 0.494], subDrop: [0.05, 0.071, 0.1], delim1: [2.39, 1.7, 1.98], delim2: [1.01, 1.157, 1.42], axisHeight: [0.25, 0.25, 0.25], defaultRuleThickness: [0.04, 0.049, 0.049], bigOpSpacing1: [0.111, 0.111, 0.111], bigOpSpacing2: [0.166, 0.166, 0.166], bigOpSpacing3: [0.2, 0.2, 0.2], bigOpSpacing4: [0.6, 0.611, 0.611], bigOpSpacing5: [0.1, 0.143, 0.143], sqrtRuleThickness: [0.04, 0.04, 0.04], ptPerEm: [10, 10, 10], doubleRuleSep: [0.2, 0.2, 0.2], arrayRuleWidth: [0.04, 0.04, 0.04], fboxsep: [0.3, 0.3, 0.3], fboxrule: [0.04, 0.04, 0.04] }, He = { \u00C5: `A`, \u00D0: `D`, \u00DE: `o`, \u00E5: `a`, \u00F0: `d`, \u00FE: `o`, \u0410: `A`, \u0411: `B`, \u0412: `B`, \u0413: `F`, \u0414: `A`, \u0415: `E`, \u0416: `K`, \u0417: `3`, \u0418: `N`, \u0419: `N`, \u041A: `K`, \u041B: `N`, \u041C: `M`, \u041D: `H`, \u041E: `O`, \u041F: `N`, \u0420: `P`, \u0421: `C`, \u0422: `T`, \u0423: `y`, \u0424: `O`, \u0425: `X`, \u0426: `U`, \u0427: `h`, \u0428: `W`, \u0429: `W`, \u042A: `B`, \u042B: `X`, \u042C: `B`, \u042D: `3`, \u042E: `X`, \u042F: `R`, \u0430: `a`, \u0431: `b`, \u0432: `a`, \u0433: `r`, \u0434: `y`, \u0435: `e`, \u0436: `m`, \u0437: `e`, \u0438: `n`, \u0439: `n`, \u043A: `n`, \u043B: `n`, \u043C: `m`, \u043D: `n`, \u043E: `o`, \u043F: `n`, \u0440: `p`, \u0441: `c`, \u0442: `o`, \u0443: `y`, \u0444: `b`, \u0445: `x`, \u0446: `n`, \u0447: `n`, \u0448: `w`, \u0449: `w`, \u044A: `a`, \u044B: `m`, \u044C: `a`, \u044D: `e`, \u044E: `m`, \u044F: `r` };
function Ue(e6, t3) {
  Be[e6] = t3;
}
function We(e6, t3, n2) {
  if (!Be[t3]) throw Error(`Font metrics not found for font: ` + t3 + `.`);
  var r2 = e6.charCodeAt(0), i2 = Be[t3][r2];
  if (!i2 && e6[0] in He && (r2 = He[e6[0]].charCodeAt(0), i2 = Be[t3][r2]), !i2 && n2 === `text` && se(r2) && (i2 = Be[t3][77]), i2) return { depth: i2[0], height: i2[1], italic: i2[2], skew: i2[3], width: i2[4] };
}
var Ge = {};
function Ke(e6) {
  var t3 = e6 >= 5 ? 0 : e6 >= 3 ? 1 : 2;
  if (!Ge[t3]) {
    var n2 = Ge[t3] = { cssEmPerMu: Ve.quad[t3] / 18 };
    for (var r2 in Ve) Ve.hasOwnProperty(r2) && (n2[r2] = Ve[r2][t3]);
  }
  return Ge[t3];
}
var qe = { bin: 1, close: 1, inner: 1, open: 1, punct: 1, rel: 1 }, Je = { "accent-token": 1, mathord: 1, "op-token": 1, spacing: 1, textord: 1 }, k = { math: {}, text: {} };
function A(e6, t3, n2, r2, i2, a2) {
  k[e6][i2] = { font: t3, group: n2, replace: r2 }, a2 && r2 && (k[e6][r2] = k[e6][i2]);
}
var j = `math`, M = `text`, N = `main`, P = `ams`, F = `accent-token`, I = `bin`, Ye = `close`, Xe = `inner`, L = `mathord`, R = `op-token`, Ze = `open`, Qe = `punct`, z = `rel`, $e = `spacing`, B = `textord`;
A(j, N, z, `\u2261`, `\\equiv`, true), A(j, N, z, `\u227A`, `\\prec`, true), A(j, N, z, `\u227B`, `\\succ`, true), A(j, N, z, `\u223C`, `\\sim`, true), A(j, N, z, `\u22A5`, `\\perp`), A(j, N, z, `\u2AAF`, `\\preceq`, true), A(j, N, z, `\u2AB0`, `\\succeq`, true), A(j, N, z, `\u2243`, `\\simeq`, true), A(j, N, z, `\u2223`, `\\mid`, true), A(j, N, z, `\u226A`, `\\ll`, true), A(j, N, z, `\u226B`, `\\gg`, true), A(j, N, z, `\u224D`, `\\asymp`, true), A(j, N, z, `\u2225`, `\\parallel`), A(j, N, z, `\u22C8`, `\\bowtie`, true), A(j, N, z, `\u2323`, `\\smile`, true), A(j, N, z, `\u2291`, `\\sqsubseteq`, true), A(j, N, z, `\u2292`, `\\sqsupseteq`, true), A(j, N, z, `\u2250`, `\\doteq`, true), A(j, N, z, `\u2322`, `\\frown`, true), A(j, N, z, `\u220B`, `\\ni`, true), A(j, N, z, `\u221D`, `\\propto`, true), A(j, N, z, `\u22A2`, `\\vdash`, true), A(j, N, z, `\u22A3`, `\\dashv`, true), A(j, N, z, `\u220B`, `\\owns`), A(j, N, Qe, `.`, `\\ldotp`), A(j, N, Qe, `\u22C5`, `\\cdotp`), A(j, N, Qe, `\u22C5`, `\xB7`), A(M, N, B, `\u22C5`, `\xB7`), A(j, N, B, `#`, `\\#`), A(M, N, B, `#`, `\\#`), A(j, N, B, `&`, `\\&`), A(M, N, B, `&`, `\\&`), A(j, N, B, `\u2135`, `\\aleph`, true), A(j, N, B, `\u2200`, `\\forall`, true), A(j, N, B, `\u210F`, `\\hbar`, true), A(j, N, B, `\u2203`, `\\exists`, true), A(j, N, B, `\u2207`, `\\nabla`, true), A(j, N, B, `\u266D`, `\\flat`, true), A(j, N, B, `\u2113`, `\\ell`, true), A(j, N, B, `\u266E`, `\\natural`, true), A(j, N, B, `\u2663`, `\\clubsuit`, true), A(j, N, B, `\u2118`, `\\wp`, true), A(j, N, B, `\u266F`, `\\sharp`, true), A(j, N, B, `\u2662`, `\\diamondsuit`, true), A(j, N, B, `\u211C`, `\\Re`, true), A(j, N, B, `\u2661`, `\\heartsuit`, true), A(j, N, B, `\u2111`, `\\Im`, true), A(j, N, B, `\u2660`, `\\spadesuit`, true), A(j, N, B, `\xA7`, `\\S`, true), A(M, N, B, `\xA7`, `\\S`), A(j, N, B, `\xB6`, `\\P`, true), A(M, N, B, `\xB6`, `\\P`), A(j, N, B, `\u2020`, `\\dag`), A(M, N, B, `\u2020`, `\\dag`), A(M, N, B, `\u2020`, `\\textdagger`), A(j, N, B, `\u2021`, `\\ddag`), A(M, N, B, `\u2021`, `\\ddag`), A(M, N, B, `\u2021`, `\\textdaggerdbl`), A(j, N, Ye, `\u23B1`, `\\rmoustache`, true), A(j, N, Ze, `\u23B0`, `\\lmoustache`, true), A(j, N, Ye, `\u27EF`, `\\rgroup`, true), A(j, N, Ze, `\u27EE`, `\\lgroup`, true), A(j, N, I, `\u2213`, `\\mp`, true), A(j, N, I, `\u2296`, `\\ominus`, true), A(j, N, I, `\u228E`, `\\uplus`, true), A(j, N, I, `\u2293`, `\\sqcap`, true), A(j, N, I, `\u2217`, `\\ast`), A(j, N, I, `\u2294`, `\\sqcup`, true), A(j, N, I, `\u25EF`, `\\bigcirc`, true), A(j, N, I, `\u2219`, `\\bullet`, true), A(j, N, I, `\u2021`, `\\ddagger`), A(j, N, I, `\u2240`, `\\wr`, true), A(j, N, I, `\u2A3F`, `\\amalg`), A(j, N, I, `&`, `\\And`), A(j, N, z, `\u27F5`, `\\longleftarrow`, true), A(j, N, z, `\u21D0`, `\\Leftarrow`, true), A(j, N, z, `\u27F8`, `\\Longleftarrow`, true), A(j, N, z, `\u27F6`, `\\longrightarrow`, true), A(j, N, z, `\u21D2`, `\\Rightarrow`, true), A(j, N, z, `\u27F9`, `\\Longrightarrow`, true), A(j, N, z, `\u2194`, `\\leftrightarrow`, true), A(j, N, z, `\u27F7`, `\\longleftrightarrow`, true), A(j, N, z, `\u21D4`, `\\Leftrightarrow`, true), A(j, N, z, `\u27FA`, `\\Longleftrightarrow`, true), A(j, N, z, `\u21A6`, `\\mapsto`, true), A(j, N, z, `\u27FC`, `\\longmapsto`, true), A(j, N, z, `\u2197`, `\\nearrow`, true), A(j, N, z, `\u21A9`, `\\hookleftarrow`, true), A(j, N, z, `\u21AA`, `\\hookrightarrow`, true), A(j, N, z, `\u2198`, `\\searrow`, true), A(j, N, z, `\u21BC`, `\\leftharpoonup`, true), A(j, N, z, `\u21C0`, `\\rightharpoonup`, true), A(j, N, z, `\u2199`, `\\swarrow`, true), A(j, N, z, `\u21BD`, `\\leftharpoondown`, true), A(j, N, z, `\u21C1`, `\\rightharpoondown`, true), A(j, N, z, `\u2196`, `\\nwarrow`, true), A(j, N, z, `\u21CC`, `\\rightleftharpoons`, true), A(j, P, z, `\u226E`, `\\nless`, true), A(j, P, z, `\uE010`, `\\@nleqslant`), A(j, P, z, `\uE011`, `\\@nleqq`), A(j, P, z, `\u2A87`, `\\lneq`, true), A(j, P, z, `\u2268`, `\\lneqq`, true), A(j, P, z, `\uE00C`, `\\@lvertneqq`), A(j, P, z, `\u22E6`, `\\lnsim`, true), A(j, P, z, `\u2A89`, `\\lnapprox`, true), A(j, P, z, `\u2280`, `\\nprec`, true), A(j, P, z, `\u22E0`, `\\npreceq`, true), A(j, P, z, `\u22E8`, `\\precnsim`, true), A(j, P, z, `\u2AB9`, `\\precnapprox`, true), A(j, P, z, `\u2241`, `\\nsim`, true), A(j, P, z, `\uE006`, `\\@nshortmid`), A(j, P, z, `\u2224`, `\\nmid`, true), A(j, P, z, `\u22AC`, `\\nvdash`, true), A(j, P, z, `\u22AD`, `\\nvDash`, true), A(j, P, z, `\u22EA`, `\\ntriangleleft`), A(j, P, z, `\u22EC`, `\\ntrianglelefteq`, true), A(j, P, z, `\u228A`, `\\subsetneq`, true), A(j, P, z, `\uE01A`, `\\@varsubsetneq`), A(j, P, z, `\u2ACB`, `\\subsetneqq`, true), A(j, P, z, `\uE017`, `\\@varsubsetneqq`), A(j, P, z, `\u226F`, `\\ngtr`, true), A(j, P, z, `\uE00F`, `\\@ngeqslant`), A(j, P, z, `\uE00E`, `\\@ngeqq`), A(j, P, z, `\u2A88`, `\\gneq`, true), A(j, P, z, `\u2269`, `\\gneqq`, true), A(j, P, z, `\uE00D`, `\\@gvertneqq`), A(j, P, z, `\u22E7`, `\\gnsim`, true), A(j, P, z, `\u2A8A`, `\\gnapprox`, true), A(j, P, z, `\u2281`, `\\nsucc`, true), A(j, P, z, `\u22E1`, `\\nsucceq`, true), A(j, P, z, `\u22E9`, `\\succnsim`, true), A(j, P, z, `\u2ABA`, `\\succnapprox`, true), A(j, P, z, `\u2246`, `\\ncong`, true), A(j, P, z, `\uE007`, `\\@nshortparallel`), A(j, P, z, `\u2226`, `\\nparallel`, true), A(j, P, z, `\u22AF`, `\\nVDash`, true), A(j, P, z, `\u22EB`, `\\ntriangleright`), A(j, P, z, `\u22ED`, `\\ntrianglerighteq`, true), A(j, P, z, `\uE018`, `\\@nsupseteqq`), A(j, P, z, `\u228B`, `\\supsetneq`, true), A(j, P, z, `\uE01B`, `\\@varsupsetneq`), A(j, P, z, `\u2ACC`, `\\supsetneqq`, true), A(j, P, z, `\uE019`, `\\@varsupsetneqq`), A(j, P, z, `\u22AE`, `\\nVdash`, true), A(j, P, z, `\u2AB5`, `\\precneqq`, true), A(j, P, z, `\u2AB6`, `\\succneqq`, true), A(j, P, z, `\uE016`, `\\@nsubseteqq`), A(j, P, I, `\u22B4`, `\\unlhd`), A(j, P, I, `\u22B5`, `\\unrhd`), A(j, P, z, `\u219A`, `\\nleftarrow`, true), A(j, P, z, `\u219B`, `\\nrightarrow`, true), A(j, P, z, `\u21CD`, `\\nLeftarrow`, true), A(j, P, z, `\u21CF`, `\\nRightarrow`, true), A(j, P, z, `\u21AE`, `\\nleftrightarrow`, true), A(j, P, z, `\u21CE`, `\\nLeftrightarrow`, true), A(j, P, z, `\u25B3`, `\\vartriangle`), A(j, P, B, `\u210F`, `\\hslash`), A(j, P, B, `\u25BD`, `\\triangledown`), A(j, P, B, `\u25CA`, `\\lozenge`), A(j, P, B, `\u24C8`, `\\circledS`), A(j, P, B, `\xAE`, `\\circledR`), A(M, P, B, `\xAE`, `\\circledR`), A(j, P, B, `\u2221`, `\\measuredangle`, true), A(j, P, B, `\u2204`, `\\nexists`), A(j, P, B, `\u2127`, `\\mho`), A(j, P, B, `\u2132`, `\\Finv`, true), A(j, P, B, `\u2141`, `\\Game`, true), A(j, P, B, `\u2035`, `\\backprime`), A(j, P, B, `\u25B2`, `\\blacktriangle`), A(j, P, B, `\u25BC`, `\\blacktriangledown`), A(j, P, B, `\u25A0`, `\\blacksquare`), A(j, P, B, `\u29EB`, `\\blacklozenge`), A(j, P, B, `\u2605`, `\\bigstar`), A(j, P, B, `\u2222`, `\\sphericalangle`, true), A(j, P, B, `\u2201`, `\\complement`, true), A(j, P, B, `\xF0`, `\\eth`, true), A(M, N, B, `\xF0`, `\xF0`), A(j, P, B, `\u2571`, `\\diagup`), A(j, P, B, `\u2572`, `\\diagdown`), A(j, P, B, `\u25A1`, `\\square`), A(j, P, B, `\u25A1`, `\\Box`), A(j, P, B, `\u25CA`, `\\Diamond`), A(j, P, B, `\xA5`, `\\yen`, true), A(M, P, B, `\xA5`, `\\yen`, true), A(j, P, B, `\u2713`, `\\checkmark`, true), A(M, P, B, `\u2713`, `\\checkmark`), A(j, P, B, `\u2136`, `\\beth`, true), A(j, P, B, `\u2138`, `\\daleth`, true), A(j, P, B, `\u2137`, `\\gimel`, true), A(j, P, B, `\u03DD`, `\\digamma`, true), A(j, P, B, `\u03F0`, `\\varkappa`), A(j, P, Ze, `\u250C`, `\\@ulcorner`, true), A(j, P, Ye, `\u2510`, `\\@urcorner`, true), A(j, P, Ze, `\u2514`, `\\@llcorner`, true), A(j, P, Ye, `\u2518`, `\\@lrcorner`, true), A(j, P, z, `\u2266`, `\\leqq`, true), A(j, P, z, `\u2A7D`, `\\leqslant`, true), A(j, P, z, `\u2A95`, `\\eqslantless`, true), A(j, P, z, `\u2272`, `\\lesssim`, true), A(j, P, z, `\u2A85`, `\\lessapprox`, true), A(j, P, z, `\u224A`, `\\approxeq`, true), A(j, P, I, `\u22D6`, `\\lessdot`), A(j, P, z, `\u22D8`, `\\lll`, true), A(j, P, z, `\u2276`, `\\lessgtr`, true), A(j, P, z, `\u22DA`, `\\lesseqgtr`, true), A(j, P, z, `\u2A8B`, `\\lesseqqgtr`, true), A(j, P, z, `\u2251`, `\\doteqdot`), A(j, P, z, `\u2253`, `\\risingdotseq`, true), A(j, P, z, `\u2252`, `\\fallingdotseq`, true), A(j, P, z, `\u223D`, `\\backsim`, true), A(j, P, z, `\u22CD`, `\\backsimeq`, true), A(j, P, z, `\u2AC5`, `\\subseteqq`, true), A(j, P, z, `\u22D0`, `\\Subset`, true), A(j, P, z, `\u228F`, `\\sqsubset`, true), A(j, P, z, `\u227C`, `\\preccurlyeq`, true), A(j, P, z, `\u22DE`, `\\curlyeqprec`, true), A(j, P, z, `\u227E`, `\\precsim`, true), A(j, P, z, `\u2AB7`, `\\precapprox`, true), A(j, P, z, `\u22B2`, `\\vartriangleleft`), A(j, P, z, `\u22B4`, `\\trianglelefteq`), A(j, P, z, `\u22A8`, `\\vDash`, true), A(j, P, z, `\u22AA`, `\\Vvdash`, true), A(j, P, z, `\u2323`, `\\smallsmile`), A(j, P, z, `\u2322`, `\\smallfrown`), A(j, P, z, `\u224F`, `\\bumpeq`, true), A(j, P, z, `\u224E`, `\\Bumpeq`, true), A(j, P, z, `\u2267`, `\\geqq`, true), A(j, P, z, `\u2A7E`, `\\geqslant`, true), A(j, P, z, `\u2A96`, `\\eqslantgtr`, true), A(j, P, z, `\u2273`, `\\gtrsim`, true), A(j, P, z, `\u2A86`, `\\gtrapprox`, true), A(j, P, I, `\u22D7`, `\\gtrdot`), A(j, P, z, `\u22D9`, `\\ggg`, true), A(j, P, z, `\u2277`, `\\gtrless`, true), A(j, P, z, `\u22DB`, `\\gtreqless`, true), A(j, P, z, `\u2A8C`, `\\gtreqqless`, true), A(j, P, z, `\u2256`, `\\eqcirc`, true), A(j, P, z, `\u2257`, `\\circeq`, true), A(j, P, z, `\u225C`, `\\triangleq`, true), A(j, P, z, `\u223C`, `\\thicksim`), A(j, P, z, `\u2248`, `\\thickapprox`), A(j, P, z, `\u2AC6`, `\\supseteqq`, true), A(j, P, z, `\u22D1`, `\\Supset`, true), A(j, P, z, `\u2290`, `\\sqsupset`, true), A(j, P, z, `\u227D`, `\\succcurlyeq`, true), A(j, P, z, `\u22DF`, `\\curlyeqsucc`, true), A(j, P, z, `\u227F`, `\\succsim`, true), A(j, P, z, `\u2AB8`, `\\succapprox`, true), A(j, P, z, `\u22B3`, `\\vartriangleright`), A(j, P, z, `\u22B5`, `\\trianglerighteq`), A(j, P, z, `\u22A9`, `\\Vdash`, true), A(j, P, z, `\u2223`, `\\shortmid`), A(j, P, z, `\u2225`, `\\shortparallel`), A(j, P, z, `\u226C`, `\\between`, true), A(j, P, z, `\u22D4`, `\\pitchfork`, true), A(j, P, z, `\u221D`, `\\varpropto`), A(j, P, z, `\u25C0`, `\\blacktriangleleft`), A(j, P, z, `\u2234`, `\\therefore`, true), A(j, P, z, `\u220D`, `\\backepsilon`), A(j, P, z, `\u25B6`, `\\blacktriangleright`), A(j, P, z, `\u2235`, `\\because`, true), A(j, P, z, `\u22D8`, `\\llless`), A(j, P, z, `\u22D9`, `\\gggtr`), A(j, P, I, `\u22B2`, `\\lhd`), A(j, P, I, `\u22B3`, `\\rhd`), A(j, P, z, `\u2242`, `\\eqsim`, true), A(j, N, z, `\u22C8`, `\\Join`), A(j, P, z, `\u2251`, `\\Doteq`, true), A(j, P, I, `\u2214`, `\\dotplus`, true), A(j, P, I, `\u2216`, `\\smallsetminus`), A(j, P, I, `\u22D2`, `\\Cap`, true), A(j, P, I, `\u22D3`, `\\Cup`, true), A(j, P, I, `\u2A5E`, `\\doublebarwedge`, true), A(j, P, I, `\u229F`, `\\boxminus`, true), A(j, P, I, `\u229E`, `\\boxplus`, true), A(j, P, I, `\u22C7`, `\\divideontimes`, true), A(j, P, I, `\u22C9`, `\\ltimes`, true), A(j, P, I, `\u22CA`, `\\rtimes`, true), A(j, P, I, `\u22CB`, `\\leftthreetimes`, true), A(j, P, I, `\u22CC`, `\\rightthreetimes`, true), A(j, P, I, `\u22CF`, `\\curlywedge`, true), A(j, P, I, `\u22CE`, `\\curlyvee`, true), A(j, P, I, `\u229D`, `\\circleddash`, true), A(j, P, I, `\u229B`, `\\circledast`, true), A(j, P, I, `\u22C5`, `\\centerdot`), A(j, P, I, `\u22BA`, `\\intercal`, true), A(j, P, I, `\u22D2`, `\\doublecap`), A(j, P, I, `\u22D3`, `\\doublecup`), A(j, P, I, `\u22A0`, `\\boxtimes`, true), A(j, P, z, `\u21E2`, `\\dashrightarrow`, true), A(j, P, z, `\u21E0`, `\\dashleftarrow`, true), A(j, P, z, `\u21C7`, `\\leftleftarrows`, true), A(j, P, z, `\u21C6`, `\\leftrightarrows`, true), A(j, P, z, `\u21DA`, `\\Lleftarrow`, true), A(j, P, z, `\u219E`, `\\twoheadleftarrow`, true), A(j, P, z, `\u21A2`, `\\leftarrowtail`, true), A(j, P, z, `\u21AB`, `\\looparrowleft`, true), A(j, P, z, `\u21CB`, `\\leftrightharpoons`, true), A(j, P, z, `\u21B6`, `\\curvearrowleft`, true), A(j, P, z, `\u21BA`, `\\circlearrowleft`, true), A(j, P, z, `\u21B0`, `\\Lsh`, true), A(j, P, z, `\u21C8`, `\\upuparrows`, true), A(j, P, z, `\u21BF`, `\\upharpoonleft`, true), A(j, P, z, `\u21C3`, `\\downharpoonleft`, true), A(j, N, z, `\u22B6`, `\\origof`, true), A(j, N, z, `\u22B7`, `\\imageof`, true), A(j, P, z, `\u22B8`, `\\multimap`, true), A(j, P, z, `\u21AD`, `\\leftrightsquigarrow`, true), A(j, P, z, `\u21C9`, `\\rightrightarrows`, true), A(j, P, z, `\u21C4`, `\\rightleftarrows`, true), A(j, P, z, `\u21A0`, `\\twoheadrightarrow`, true), A(j, P, z, `\u21A3`, `\\rightarrowtail`, true), A(j, P, z, `\u21AC`, `\\looparrowright`, true), A(j, P, z, `\u21B7`, `\\curvearrowright`, true), A(j, P, z, `\u21BB`, `\\circlearrowright`, true), A(j, P, z, `\u21B1`, `\\Rsh`, true), A(j, P, z, `\u21CA`, `\\downdownarrows`, true), A(j, P, z, `\u21BE`, `\\upharpoonright`, true), A(j, P, z, `\u21C2`, `\\downharpoonright`, true), A(j, P, z, `\u21DD`, `\\rightsquigarrow`, true), A(j, P, z, `\u21DD`, `\\leadsto`), A(j, P, z, `\u21DB`, `\\Rrightarrow`, true), A(j, P, z, `\u21BE`, `\\restriction`), A(j, N, B, `\u2018`, "`"), A(j, N, B, `$`, `\\$`), A(M, N, B, `$`, `\\$`), A(M, N, B, `$`, `\\textdollar`), A(j, N, B, `%`, `\\%`), A(M, N, B, `%`, `\\%`), A(j, N, B, `_`, `\\_`), A(M, N, B, `_`, `\\_`), A(M, N, B, `_`, `\\textunderscore`), A(j, N, B, `\u2220`, `\\angle`, true), A(j, N, B, `\u221E`, `\\infty`, true), A(j, N, B, `\u2032`, `\\prime`), A(j, N, B, `\u25B3`, `\\triangle`), A(j, N, B, `\u0393`, `\\Gamma`, true), A(j, N, B, `\u0394`, `\\Delta`, true), A(j, N, B, `\u0398`, `\\Theta`, true), A(j, N, B, `\u039B`, `\\Lambda`, true), A(j, N, B, `\u039E`, `\\Xi`, true), A(j, N, B, `\u03A0`, `\\Pi`, true), A(j, N, B, `\u03A3`, `\\Sigma`, true), A(j, N, B, `\u03A5`, `\\Upsilon`, true), A(j, N, B, `\u03A6`, `\\Phi`, true), A(j, N, B, `\u03A8`, `\\Psi`, true), A(j, N, B, `\u03A9`, `\\Omega`, true), A(j, N, B, `A`, `\u0391`), A(j, N, B, `B`, `\u0392`), A(j, N, B, `E`, `\u0395`), A(j, N, B, `Z`, `\u0396`), A(j, N, B, `H`, `\u0397`), A(j, N, B, `I`, `\u0399`), A(j, N, B, `K`, `\u039A`), A(j, N, B, `M`, `\u039C`), A(j, N, B, `N`, `\u039D`), A(j, N, B, `O`, `\u039F`), A(j, N, B, `P`, `\u03A1`), A(j, N, B, `T`, `\u03A4`), A(j, N, B, `X`, `\u03A7`), A(j, N, B, `\xAC`, `\\neg`, true), A(j, N, B, `\xAC`, `\\lnot`), A(j, N, B, `\u22A4`, `\\top`), A(j, N, B, `\u22A5`, `\\bot`), A(j, N, B, `\u2205`, `\\emptyset`), A(j, P, B, `\u2205`, `\\varnothing`), A(j, N, L, `\u03B1`, `\\alpha`, true), A(j, N, L, `\u03B2`, `\\beta`, true), A(j, N, L, `\u03B3`, `\\gamma`, true), A(j, N, L, `\u03B4`, `\\delta`, true), A(j, N, L, `\u03F5`, `\\epsilon`, true), A(j, N, L, `\u03B6`, `\\zeta`, true), A(j, N, L, `\u03B7`, `\\eta`, true), A(j, N, L, `\u03B8`, `\\theta`, true), A(j, N, L, `\u03B9`, `\\iota`, true), A(j, N, L, `\u03BA`, `\\kappa`, true), A(j, N, L, `\u03BB`, `\\lambda`, true), A(j, N, L, `\u03BC`, `\\mu`, true), A(j, N, L, `\u03BD`, `\\nu`, true), A(j, N, L, `\u03BE`, `\\xi`, true), A(j, N, L, `\u03BF`, `\\omicron`, true), A(j, N, L, `\u03C0`, `\\pi`, true), A(j, N, L, `\u03C1`, `\\rho`, true), A(j, N, L, `\u03C3`, `\\sigma`, true), A(j, N, L, `\u03C4`, `\\tau`, true), A(j, N, L, `\u03C5`, `\\upsilon`, true), A(j, N, L, `\u03D5`, `\\phi`, true), A(j, N, L, `\u03C7`, `\\chi`, true), A(j, N, L, `\u03C8`, `\\psi`, true), A(j, N, L, `\u03C9`, `\\omega`, true), A(j, N, L, `\u03B5`, `\\varepsilon`, true), A(j, N, L, `\u03D1`, `\\vartheta`, true), A(j, N, L, `\u03D6`, `\\varpi`, true), A(j, N, L, `\u03F1`, `\\varrho`, true), A(j, N, L, `\u03C2`, `\\varsigma`, true), A(j, N, L, `\u03C6`, `\\varphi`, true), A(j, N, I, `\u2217`, `*`, true), A(j, N, I, `+`, `+`), A(j, N, I, `\u2212`, `-`, true), A(j, N, I, `\u22C5`, `\\cdot`, true), A(j, N, I, `\u2218`, `\\circ`, true), A(j, N, I, `\xF7`, `\\div`, true), A(j, N, I, `\xB1`, `\\pm`, true), A(j, N, I, `\xD7`, `\\times`, true), A(j, N, I, `\u2229`, `\\cap`, true), A(j, N, I, `\u222A`, `\\cup`, true), A(j, N, I, `\u2216`, `\\setminus`, true), A(j, N, I, `\u2227`, `\\land`), A(j, N, I, `\u2228`, `\\lor`), A(j, N, I, `\u2227`, `\\wedge`, true), A(j, N, I, `\u2228`, `\\vee`, true), A(j, N, B, `\u221A`, `\\surd`), A(j, N, Ze, `\u27E8`, `\\langle`, true), A(j, N, Ze, `\u2223`, `\\lvert`), A(j, N, Ze, `\u2225`, `\\lVert`), A(j, N, Ye, `?`, `?`), A(j, N, Ye, `!`, `!`), A(j, N, Ye, `\u27E9`, `\\rangle`, true), A(j, N, Ye, `\u2223`, `\\rvert`), A(j, N, Ye, `\u2225`, `\\rVert`), A(j, N, z, `=`, `=`), A(j, N, z, `:`, `:`), A(j, N, z, `\u2248`, `\\approx`, true), A(j, N, z, `\u2245`, `\\cong`, true), A(j, N, z, `\u2265`, `\\ge`), A(j, N, z, `\u2265`, `\\geq`, true), A(j, N, z, `\u2190`, `\\gets`), A(j, N, z, `>`, `\\gt`, true), A(j, N, z, `\u2208`, `\\in`, true), A(j, N, z, `\uE020`, `\\@not`), A(j, N, z, `\u2282`, `\\subset`, true), A(j, N, z, `\u2283`, `\\supset`, true), A(j, N, z, `\u2286`, `\\subseteq`, true), A(j, N, z, `\u2287`, `\\supseteq`, true), A(j, P, z, `\u2288`, `\\nsubseteq`, true), A(j, P, z, `\u2289`, `\\nsupseteq`, true), A(j, N, z, `\u22A8`, `\\models`), A(j, N, z, `\u2190`, `\\leftarrow`, true), A(j, N, z, `\u2264`, `\\le`), A(j, N, z, `\u2264`, `\\leq`, true), A(j, N, z, `<`, `\\lt`, true), A(j, N, z, `\u2192`, `\\rightarrow`, true), A(j, N, z, `\u2192`, `\\to`), A(j, P, z, `\u2271`, `\\ngeq`, true), A(j, P, z, `\u2270`, `\\nleq`, true), A(j, N, $e, `\xA0`, `\\ `), A(j, N, $e, `\xA0`, `\\space`), A(j, N, $e, `\xA0`, `\\nobreakspace`), A(M, N, $e, `\xA0`, `\\ `), A(M, N, $e, `\xA0`, ` `), A(M, N, $e, `\xA0`, `\\space`), A(M, N, $e, `\xA0`, `\\nobreakspace`), A(j, N, $e, null, `\\nobreak`), A(j, N, $e, null, `\\allowbreak`), A(j, N, Qe, `,`, `,`), A(j, N, Qe, `;`, `;`), A(j, P, I, `\u22BC`, `\\barwedge`, true), A(j, P, I, `\u22BB`, `\\veebar`, true), A(j, N, I, `\u2299`, `\\odot`, true), A(j, N, I, `\u2295`, `\\oplus`, true), A(j, N, I, `\u2297`, `\\otimes`, true), A(j, N, B, `\u2202`, `\\partial`, true), A(j, N, I, `\u2298`, `\\oslash`, true), A(j, P, I, `\u229A`, `\\circledcirc`, true), A(j, P, I, `\u22A1`, `\\boxdot`, true), A(j, N, I, `\u25B3`, `\\bigtriangleup`), A(j, N, I, `\u25BD`, `\\bigtriangledown`), A(j, N, I, `\u2020`, `\\dagger`), A(j, N, I, `\u22C4`, `\\diamond`), A(j, N, I, `\u22C6`, `\\star`), A(j, N, I, `\u25C3`, `\\triangleleft`), A(j, N, I, `\u25B9`, `\\triangleright`), A(j, N, Ze, `{`, `\\{`), A(M, N, B, `{`, `\\{`), A(M, N, B, `{`, `\\textbraceleft`), A(j, N, Ye, `}`, `\\}`), A(M, N, B, `}`, `\\}`), A(M, N, B, `}`, `\\textbraceright`), A(j, N, Ze, `{`, `\\lbrace`), A(j, N, Ye, `}`, `\\rbrace`), A(j, N, Ze, `[`, `\\lbrack`, true), A(M, N, B, `[`, `\\lbrack`, true), A(j, N, Ye, `]`, `\\rbrack`, true), A(M, N, B, `]`, `\\rbrack`, true), A(j, N, Ze, `(`, `\\lparen`, true), A(j, N, Ye, `)`, `\\rparen`, true), A(M, N, B, `<`, `\\textless`, true), A(M, N, B, `>`, `\\textgreater`, true), A(j, N, Ze, `\u230A`, `\\lfloor`, true), A(j, N, Ye, `\u230B`, `\\rfloor`, true), A(j, N, Ze, `\u2308`, `\\lceil`, true), A(j, N, Ye, `\u2309`, `\\rceil`, true), A(j, N, B, `\\`, `\\backslash`), A(j, N, B, `\u2223`, `|`), A(j, N, B, `\u2223`, `\\vert`), A(M, N, B, `|`, `\\textbar`, true), A(j, N, B, `\u2225`, `\\|`), A(j, N, B, `\u2225`, `\\Vert`), A(M, N, B, `\u2225`, `\\textbardbl`), A(M, N, B, `~`, `\\textasciitilde`), A(M, N, B, `\\`, `\\textbackslash`), A(M, N, B, `^`, `\\textasciicircum`), A(j, N, z, `\u2191`, `\\uparrow`, true), A(j, N, z, `\u21D1`, `\\Uparrow`, true), A(j, N, z, `\u2193`, `\\downarrow`, true), A(j, N, z, `\u21D3`, `\\Downarrow`, true), A(j, N, z, `\u2195`, `\\updownarrow`, true), A(j, N, z, `\u21D5`, `\\Updownarrow`, true), A(j, N, R, `\u2210`, `\\coprod`), A(j, N, R, `\u22C1`, `\\bigvee`), A(j, N, R, `\u22C0`, `\\bigwedge`), A(j, N, R, `\u2A04`, `\\biguplus`), A(j, N, R, `\u22C2`, `\\bigcap`), A(j, N, R, `\u22C3`, `\\bigcup`), A(j, N, R, `\u222B`, `\\int`), A(j, N, R, `\u222B`, `\\intop`), A(j, N, R, `\u222C`, `\\iint`), A(j, N, R, `\u222D`, `\\iiint`), A(j, N, R, `\u220F`, `\\prod`), A(j, N, R, `\u2211`, `\\sum`), A(j, N, R, `\u2A02`, `\\bigotimes`), A(j, N, R, `\u2A01`, `\\bigoplus`), A(j, N, R, `\u2A00`, `\\bigodot`), A(j, N, R, `\u222E`, `\\oint`), A(j, N, R, `\u222F`, `\\oiint`), A(j, N, R, `\u2230`, `\\oiiint`), A(j, N, R, `\u2A06`, `\\bigsqcup`), A(j, N, R, `\u222B`, `\\smallint`), A(M, N, Xe, `\u2026`, `\\textellipsis`), A(j, N, Xe, `\u2026`, `\\mathellipsis`), A(M, N, Xe, `\u2026`, `\\ldots`, true), A(j, N, Xe, `\u2026`, `\\ldots`, true), A(j, N, Xe, `\u22EF`, `\\@cdots`, true), A(j, N, Xe, `\u22F1`, `\\ddots`, true), A(j, N, B, `\u22EE`, `\\varvdots`), A(M, N, B, `\u22EE`, `\\varvdots`), A(j, N, F, `\u02CA`, `\\acute`), A(j, N, F, `\u02CB`, `\\grave`), A(j, N, F, `\xA8`, `\\ddot`), A(j, N, F, `~`, `\\tilde`), A(j, N, F, `\u02C9`, `\\bar`), A(j, N, F, `\u02D8`, `\\breve`), A(j, N, F, `\u02C7`, `\\check`), A(j, N, F, `^`, `\\hat`), A(j, N, F, `\u20D7`, `\\vec`), A(j, N, F, `\u02D9`, `\\dot`), A(j, N, F, `\u02DA`, `\\mathring`), A(j, N, L, `\uE131`, `\\@imath`), A(j, N, L, `\uE237`, `\\@jmath`), A(j, N, B, `\u0131`, `\u0131`), A(j, N, B, `\u0237`, `\u0237`), A(M, N, B, `\u0131`, `\\i`, true), A(M, N, B, `\u0237`, `\\j`, true), A(M, N, B, `\xDF`, `\\ss`, true), A(M, N, B, `\xE6`, `\\ae`, true), A(M, N, B, `\u0153`, `\\oe`, true), A(M, N, B, `\xF8`, `\\o`, true), A(M, N, B, `\xC6`, `\\AE`, true), A(M, N, B, `\u0152`, `\\OE`, true), A(M, N, B, `\xD8`, `\\O`, true), A(M, N, F, `\u02CA`, `\\'`), A(M, N, F, `\u02CB`, "\\`"), A(M, N, F, `\u02C6`, `\\^`), A(M, N, F, `\u02DC`, `\\~`), A(M, N, F, `\u02C9`, `\\=`), A(M, N, F, `\u02D8`, `\\u`), A(M, N, F, `\u02D9`, `\\.`), A(M, N, F, `\xB8`, `\\c`), A(M, N, F, `\u02DA`, `\\r`), A(M, N, F, `\u02C7`, `\\v`), A(M, N, F, `\xA8`, `\\"`), A(M, N, F, `\u02DD`, `\\H`), A(M, N, F, `\u25EF`, `\\textcircled`);
var et = { "--": true, "---": true, "``": true, "''": true };
A(M, N, B, `\u2013`, `--`, true), A(M, N, B, `\u2013`, `\\textendash`), A(M, N, B, `\u2014`, `---`, true), A(M, N, B, `\u2014`, `\\textemdash`), A(M, N, B, `\u2018`, "`", true), A(M, N, B, `\u2018`, `\\textquoteleft`), A(M, N, B, `\u2019`, `'`, true), A(M, N, B, `\u2019`, `\\textquoteright`), A(M, N, B, `\u201C`, "``", true), A(M, N, B, `\u201C`, `\\textquotedblleft`), A(M, N, B, `\u201D`, `''`, true), A(M, N, B, `\u201D`, `\\textquotedblright`), A(j, N, B, `\xB0`, `\\degree`, true), A(M, N, B, `\xB0`, `\\degree`), A(M, N, B, `\xB0`, `\\textdegree`, true), A(j, N, B, `\xA3`, `\\pounds`), A(j, N, B, `\xA3`, `\\mathsterling`, true), A(M, N, B, `\xA3`, `\\pounds`), A(M, N, B, `\xA3`, `\\textsterling`, true), A(j, P, B, `\u2720`, `\\maltese`), A(M, P, B, `\u2720`, `\\maltese`);
for (var tt = `0123456789/@."`, nt = 0; nt < tt.length; nt++) {
  var rt = tt.charAt(nt);
  A(j, N, B, rt, rt);
}
for (var it = `0123456789!@*()-=+";:?/.,`, at = 0; at < it.length; at++) {
  var ot = it.charAt(at);
  A(M, N, B, ot, ot);
}
for (var st = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`, ct = 0; ct < st.length; ct++) {
  var lt = st.charAt(ct);
  A(j, N, L, lt, lt), A(M, N, B, lt, lt);
}
A(j, P, B, `C`, `\u2102`), A(M, P, B, `C`, `\u2102`), A(j, P, B, `H`, `\u210D`), A(M, P, B, `H`, `\u210D`), A(j, P, B, `N`, `\u2115`), A(M, P, B, `N`, `\u2115`), A(j, P, B, `P`, `\u2119`), A(M, P, B, `P`, `\u2119`), A(j, P, B, `Q`, `\u211A`), A(M, P, B, `Q`, `\u211A`), A(j, P, B, `R`, `\u211D`), A(M, P, B, `R`, `\u211D`), A(j, P, B, `Z`, `\u2124`), A(M, P, B, `Z`, `\u2124`), A(j, N, L, `h`, `\u210E`), A(M, N, L, `h`, `\u210E`);
for (var V = ``, ut = 0; ut < st.length; ut++) {
  var H = st.charAt(ut);
  V = String.fromCharCode(55349, 56320 + ut), A(j, N, L, H, V), A(M, N, B, H, V), V = String.fromCharCode(55349, 56372 + ut), A(j, N, L, H, V), A(M, N, B, H, V), V = String.fromCharCode(55349, 56424 + ut), A(j, N, L, H, V), A(M, N, B, H, V), V = String.fromCharCode(55349, 56580 + ut), A(j, N, L, H, V), A(M, N, B, H, V), V = String.fromCharCode(55349, 56684 + ut), A(j, N, L, H, V), A(M, N, B, H, V), V = String.fromCharCode(55349, 56736 + ut), A(j, N, L, H, V), A(M, N, B, H, V), V = String.fromCharCode(55349, 56788 + ut), A(j, N, L, H, V), A(M, N, B, H, V), V = String.fromCharCode(55349, 56840 + ut), A(j, N, L, H, V), A(M, N, B, H, V), V = String.fromCharCode(55349, 56944 + ut), A(j, N, L, H, V), A(M, N, B, H, V), ut < 26 && (V = String.fromCharCode(55349, 56632 + ut), A(j, N, L, H, V), A(M, N, B, H, V), V = String.fromCharCode(55349, 56476 + ut), A(j, N, L, H, V), A(M, N, B, H, V));
}
V = String.fromCharCode(55349, 56668), A(j, N, L, `k`, V), A(M, N, B, `k`, V);
for (var dt = 0; dt < 10; dt++) {
  var ft = dt.toString();
  V = String.fromCharCode(55349, 57294 + dt), A(j, N, L, ft, V), A(M, N, B, ft, V), V = String.fromCharCode(55349, 57314 + dt), A(j, N, L, ft, V), A(M, N, B, ft, V), V = String.fromCharCode(55349, 57324 + dt), A(j, N, L, ft, V), A(M, N, B, ft, V), V = String.fromCharCode(55349, 57334 + dt), A(j, N, L, ft, V), A(M, N, B, ft, V);
}
for (var pt = `\xD0\xDE\xFE`, mt = 0; mt < pt.length; mt++) {
  var ht = pt.charAt(mt);
  A(j, N, L, ht, ht), A(M, N, B, ht, ht);
}
var gt = [[`mathbf`, `textbf`, `Main-Bold`], [`mathbf`, `textbf`, `Main-Bold`], [`mathnormal`, `textit`, `Math-Italic`], [`mathnormal`, `textit`, `Math-Italic`], [`boldsymbol`, `boldsymbol`, `Main-BoldItalic`], [`boldsymbol`, `boldsymbol`, `Main-BoldItalic`], [`mathscr`, `textscr`, `Script-Regular`], [``, ``, ``], [``, ``, ``], [``, ``, ``], [`mathfrak`, `textfrak`, `Fraktur-Regular`], [`mathfrak`, `textfrak`, `Fraktur-Regular`], [`mathbb`, `textbb`, `AMS-Regular`], [`mathbb`, `textbb`, `AMS-Regular`], [`mathboldfrak`, `textboldfrak`, `Fraktur-Regular`], [`mathboldfrak`, `textboldfrak`, `Fraktur-Regular`], [`mathsf`, `textsf`, `SansSerif-Regular`], [`mathsf`, `textsf`, `SansSerif-Regular`], [`mathboldsf`, `textboldsf`, `SansSerif-Bold`], [`mathboldsf`, `textboldsf`, `SansSerif-Bold`], [`mathitsf`, `textitsf`, `SansSerif-Italic`], [`mathitsf`, `textitsf`, `SansSerif-Italic`], [``, ``, ``], [``, ``, ``], [`mathtt`, `texttt`, `Typewriter-Regular`], [`mathtt`, `texttt`, `Typewriter-Regular`]], _t = [[`mathbf`, `textbf`, `Main-Bold`], [``, ``, ``], [`mathsf`, `textsf`, `SansSerif-Regular`], [`mathboldsf`, `textboldsf`, `SansSerif-Bold`], [`mathtt`, `texttt`, `Typewriter-Regular`]], vt = (t3, n2) => {
  var r2 = t3.charCodeAt(0), i2 = t3.charCodeAt(1), a2 = (r2 - 55296) * 1024 + (i2 - 56320) + 65536, o2 = n2 === `math` ? 0 : 1;
  if (119808 <= a2 && a2 < 120484) {
    var s2 = Math.floor((a2 - 119808) / 26);
    return [gt[s2][2], gt[s2][o2]];
  } else if (120782 <= a2 && a2 <= 120831) {
    var c2 = Math.floor((a2 - 120782) / 10);
    return [_t[c2][2], _t[c2][o2]];
  } else if (a2 === 120485 || a2 === 120486) return [gt[0][2], gt[0][o2]];
  else if (120486 < a2 && a2 < 120782) return [``, ``];
  else throw new e(`Unsupported character: ` + t3);
}, yt = function(e6, t3, n2) {
  if (k[n2][e6]) {
    var r2 = k[n2][e6].replace;
    r2 && (e6 = r2);
  }
  return { value: e6, metrics: We(e6, t3, n2) };
}, bt = function(e6, t3, n2, r2, i2) {
  var a2 = yt(e6, t3, n2), o2 = a2.metrics;
  e6 = a2.value;
  var s2;
  if (o2) {
    var c2 = o2.italic;
    (n2 === `text` || r2 && r2.font === `mathit`) && (c2 = 0), s2 = new Ne(e6, o2.height, o2.depth, c2, o2.skew, o2.width, i2);
  } else typeof console < `u` && console.warn(`No character metrics ` + (`for '` + e6 + `' in style '` + t3 + `' and mode '` + n2 + `'`)), s2 = new Ne(e6, 0, 0, 0, 0, 0, i2);
  if (r2) {
    s2.maxFontSize = r2.sizeMultiplier, r2.style.isTight() && s2.classes.push(`mtight`);
    var l2 = r2.getColor();
    l2 && (s2.style.color = l2);
  }
  return s2;
}, xt = function(e6, t3, n2, r2) {
  return r2 === void 0 && (r2 = []), n2.font === `boldsymbol` && yt(e6, `Main-Bold`, t3).metrics ? bt(e6, `Main-Bold`, t3, n2, r2.concat([`mathbf`])) : e6 === `\\` || k[t3][e6].font === `main` ? bt(e6, `Main-Regular`, t3, n2, r2) : bt(e6, `AMS-Regular`, t3, n2, r2.concat([`amsrm`]));
}, St = function(e6, t3, n2, r2, i2) {
  return i2 !== `textord` && yt(e6, `Math-BoldItalic`, t3).metrics ? { fontName: `Math-BoldItalic`, fontClass: `boldsymbol` } : { fontName: `Main-Bold`, fontClass: `mathbf` };
}, Ct = function(e6, t3, n2) {
  var r2 = e6.mode, i2 = e6.text, a2 = [`mord`], o2 = r2 === `math` || r2 === `text` && t3.font, s2 = o2 ? t3.font : t3.fontFamily, c2 = ``, l2 = ``;
  if (i2.charCodeAt(0) === 55349 && ([c2, l2] = vt(i2, r2)), c2.length > 0) return bt(i2, c2, r2, t3, a2.concat(l2));
  if (s2) {
    var u2, d2;
    if (s2 === `boldsymbol`) {
      var f2 = St(i2, r2, t3, a2, n2);
      u2 = f2.fontName, d2 = [f2.fontClass];
    } else o2 ? (u2 = Ft[s2].fontName, d2 = [s2]) : (u2 = Pt(s2, t3.fontWeight, t3.fontShape), d2 = [s2, t3.fontWeight, t3.fontShape]);
    if (yt(i2, u2, r2).metrics) return bt(i2, u2, r2, t3, a2.concat(d2));
    if (et.hasOwnProperty(i2) && u2.slice(0, 10) === `Typewriter`) {
      for (var p2 = [], m2 = 0; m2 < i2.length; m2++) p2.push(bt(i2[m2], u2, r2, t3, a2.concat(d2)));
      return At(p2);
    }
  }
  if (n2 === `mathord`) return bt(i2, `Math-Italic`, r2, t3, a2.concat([`mathnormal`]));
  if (n2 === `textord`) {
    var h2 = k[r2][i2] && k[r2][i2].font;
    if (h2 === `ams`) return bt(i2, Pt(`amsrm`, t3.fontWeight, t3.fontShape), r2, t3, a2.concat(`amsrm`, t3.fontWeight, t3.fontShape));
    if (h2 === `main` || !h2) return bt(i2, Pt(`textrm`, t3.fontWeight, t3.fontShape), r2, t3, a2.concat(t3.fontWeight, t3.fontShape));
    var g2 = Pt(h2, t3.fontWeight, t3.fontShape);
    return bt(i2, g2, r2, t3, a2.concat(g2, t3.fontWeight, t3.fontShape));
  } else throw Error(`unexpected type: ` + n2 + ` in makeOrd`);
}, wt = (e6, t3) => {
  if (we(e6.classes) !== we(t3.classes) || e6.skew !== t3.skew || e6.maxFontSize !== t3.maxFontSize || e6.italic !== 0 && e6.hasClass(`mathnormal`)) return false;
  if (e6.classes.length === 1) {
    var n2 = e6.classes[0];
    if (n2 === `mbin` || n2 === `mord`) return false;
  }
  for (var r2 of Object.keys(e6.style)) if (e6.style[r2] !== t3.style[r2]) return false;
  for (var i2 of Object.keys(t3.style)) if (e6.style[i2] !== t3.style[i2]) return false;
  return true;
}, Tt = (e6) => {
  for (var t3 = 0; t3 < e6.length - 1; t3++) {
    var n2 = e6[t3], r2 = e6[t3 + 1];
    n2 instanceof Ne && r2 instanceof Ne && wt(n2, r2) && (n2.text += r2.text, n2.height = Math.max(n2.height, r2.height), n2.depth = Math.max(n2.depth, r2.depth), n2.italic = r2.italic, e6.splice(t3 + 1, 1), t3--);
  }
  return e6;
}, Et = function(e6) {
  for (var t3 = 0, n2 = 0, r2 = 0, i2 = 0; i2 < e6.children.length; i2++) {
    var a2 = e6.children[i2];
    a2.height > t3 && (t3 = a2.height), a2.depth > n2 && (n2 = a2.depth), a2.maxFontSize > r2 && (r2 = a2.maxFontSize);
  }
  e6.height = t3, e6.depth = n2, e6.maxFontSize = r2;
}, U = function(e6, t3, n2, r2) {
  var i2 = new ke(e6, t3, n2, r2);
  return Et(i2), i2;
}, Dt = (e6, t3, n2, r2) => new ke(e6, t3, n2, r2), Ot = function(e6, t3, n2) {
  var r2 = U([e6], [], t3);
  return r2.height = Math.max(n2 || t3.fontMetrics().defaultRuleThickness, t3.minRuleThickness), r2.style.borderBottomWidth = O(r2.height), r2.maxFontSize = 1, r2;
}, kt = function(e6, t3, n2, r2) {
  var i2 = new Ae(e6, t3, n2, r2);
  return Et(i2), i2;
}, At = function(e6) {
  var t3 = new be(e6);
  return Et(t3), t3;
}, jt = function(e6, t3) {
  return e6 instanceof be ? U([], [e6], t3) : e6;
}, Mt = function(e6) {
  if (e6.positionType === `individualShift`) {
    for (var t3 = e6.children, n2 = [t3[0]], r2 = -t3[0].shift - t3[0].elem.depth, i2 = r2, a2 = 1; a2 < t3.length; a2++) {
      var o2 = -t3[a2].shift - i2 - t3[a2].elem.depth, s2 = o2 - (t3[a2 - 1].elem.height + t3[a2 - 1].elem.depth);
      i2 += o2, n2.push({ type: `kern`, size: s2 }), n2.push(t3[a2]);
    }
    return { children: n2, depth: r2 };
  }
  var c2;
  if (e6.positionType === `top`) {
    for (var l2 = e6.positionData, u2 = 0; u2 < e6.children.length; u2++) {
      var d2 = e6.children[u2];
      l2 -= d2.type === `kern` ? d2.size : d2.elem.height + d2.elem.depth;
    }
    c2 = l2;
  } else if (e6.positionType === `bottom`) c2 = -e6.positionData;
  else {
    var f2 = e6.children[0];
    if (f2.type !== `elem`) throw Error(`First child must have type "elem".`);
    if (e6.positionType === `shift`) c2 = -f2.elem.depth - e6.positionData;
    else if (e6.positionType === `firstBaseline`) c2 = -f2.elem.depth;
    else throw Error(`Invalid positionType ` + e6.positionType + `.`);
  }
  return { children: e6.children, depth: c2 };
}, W = function(e6, t3) {
  for (var { children: n2, depth: r2 } = Mt(e6), i2 = 0, a2 = 0; a2 < n2.length; a2++) {
    var o2 = n2[a2];
    if (o2.type === `elem`) {
      var s2 = o2.elem;
      i2 = Math.max(i2, s2.maxFontSize, s2.height);
    }
  }
  i2 += 2;
  var c2 = U([`pstrut`], []);
  c2.style.height = O(i2);
  for (var l2 = [], u2 = r2, d2 = r2, f2 = r2, p2 = 0; p2 < n2.length; p2++) {
    var m2 = n2[p2];
    if (m2.type === `kern`) f2 += m2.size;
    else {
      var h2 = m2.elem, g2 = m2.wrapperClasses || [], _2 = m2.wrapperStyle || {}, v2 = U(g2, [c2, h2], void 0, _2);
      v2.style.top = O(-i2 - f2 - h2.depth), m2.marginLeft && (v2.style.marginLeft = m2.marginLeft), m2.marginRight && (v2.style.marginRight = m2.marginRight), l2.push(v2), f2 += h2.height + h2.depth;
    }
    u2 = Math.min(u2, f2), d2 = Math.max(d2, f2);
  }
  var y2 = U([`vlist`], l2);
  y2.style.height = O(d2);
  var b2;
  if (u2 < 0) {
    var x2 = U([`vlist`], [U([], [])]);
    x2.style.height = O(-u2), b2 = [U([`vlist-r`], [y2, U([`vlist-s`], [new Ne(`\u200B`)])]), U([`vlist-r`], [x2])];
  } else b2 = [U([`vlist-r`], [y2])];
  var S2 = U([`vlist-t`], b2);
  return b2.length === 2 && S2.classes.push(`vlist-t2`), S2.height = d2, S2.depth = -u2, S2;
}, Nt = (e6, t3) => {
  var n2 = U([`mspace`], [], t3), r2 = D(e6, t3);
  return n2.style.marginRight = O(r2), n2;
}, Pt = function(e6, t3, n2) {
  var r2 = ``;
  switch (e6) {
    case `amsrm`:
      r2 = `AMS`;
      break;
    case `textrm`:
      r2 = `Main`;
      break;
    case `textsf`:
      r2 = `SansSerif`;
      break;
    case `texttt`:
      r2 = `Typewriter`;
      break;
    default:
      r2 = e6;
  }
  var i2 = t3 === `textbf` && n2 === `textit` ? `BoldItalic` : t3 === `textbf` ? `Bold` : t3 === `textit` ? `Italic` : `Regular`;
  return r2 + `-` + i2;
}, Ft = { mathbf: { variant: `bold`, fontName: `Main-Bold` }, mathrm: { variant: `normal`, fontName: `Main-Regular` }, textit: { variant: `italic`, fontName: `Main-Italic` }, mathit: { variant: `italic`, fontName: `Main-Italic` }, mathnormal: { variant: `italic`, fontName: `Math-Italic` }, mathsfit: { variant: `sans-serif-italic`, fontName: `SansSerif-Italic` }, mathbb: { variant: `double-struck`, fontName: `AMS-Regular` }, mathcal: { variant: `script`, fontName: `Caligraphic-Regular` }, mathfrak: { variant: `fraktur`, fontName: `Fraktur-Regular` }, mathscr: { variant: `script`, fontName: `Script-Regular` }, mathsf: { variant: `sans-serif`, fontName: `SansSerif-Regular` }, mathtt: { variant: `monospace`, fontName: `Typewriter-Regular` } }, It = { vec: [`vec`, 0.471, 0.714], oiintSize1: [`oiintSize1`, 0.957, 0.499], oiintSize2: [`oiintSize2`, 1.472, 0.659], oiiintSize1: [`oiiintSize1`, 1.304, 0.499], oiiintSize2: [`oiiintSize2`, 1.98, 0.659] }, Lt = function(e6, t3) {
  var [n2, r2, i2] = It[e6], a2 = Dt([`overlay`], [new Pe([new Fe(n2)], { width: O(r2), height: O(i2), style: `width:` + O(r2), viewBox: `0 0 ` + 1e3 * r2 + ` ` + 1e3 * i2, preserveAspectRatio: `xMinYMin` })], t3);
  return a2.height = i2, a2.style.height = O(i2), a2.style.width = O(r2), a2;
}, G = { number: 3, unit: `mu` }, Rt = { number: 4, unit: `mu` }, zt = { number: 5, unit: `mu` }, Bt = { mord: { mop: G, mbin: Rt, mrel: zt, minner: G }, mop: { mord: G, mop: G, mrel: zt, minner: G }, mbin: { mord: Rt, mop: Rt, mopen: Rt, minner: Rt }, mrel: { mord: zt, mop: zt, mopen: zt, minner: zt }, mopen: {}, mclose: { mop: G, mbin: Rt, mrel: zt, minner: G }, mpunct: { mord: G, mop: G, mrel: zt, mopen: G, mclose: G, mpunct: G, minner: G }, minner: { mord: G, mop: G, mbin: Rt, mrel: zt, mopen: G, mpunct: G, minner: G } }, Vt = { mord: { mop: G }, mop: { mord: G, mop: G }, mbin: {}, mrel: {}, mopen: {}, mclose: { mop: G }, mpunct: {}, minner: { mop: G } }, Ht = {}, Ut = {}, Wt = {};
function K(e6) {
  for (var { type: t3, names: n2, props: r2, handler: i2, htmlBuilder: a2, mathmlBuilder: o2 } = e6, s2 = { type: t3, numArgs: r2.numArgs, argTypes: r2.argTypes, allowedInArgument: !!r2.allowedInArgument, allowedInText: !!r2.allowedInText, allowedInMath: r2.allowedInMath === void 0 ? true : r2.allowedInMath, numOptionalArgs: r2.numOptionalArgs || 0, infix: !!r2.infix, primitive: !!r2.primitive, handler: i2 }, c2 = 0; c2 < n2.length; ++c2) Ht[n2[c2]] = s2;
  t3 && (a2 && (Ut[t3] = a2), o2 && (Wt[t3] = o2));
}
function Gt(e6) {
  var { type: t3, htmlBuilder: n2, mathmlBuilder: r2 } = e6;
  K({ type: t3, names: [], props: { numArgs: 0 }, handler() {
    throw Error(`Should never be called.`);
  }, htmlBuilder: n2, mathmlBuilder: r2 });
}
var Kt = function(e6) {
  return e6.type === `ordgroup` && e6.body.length === 1 ? e6.body[0] : e6;
}, q = function(e6) {
  return e6.type === `ordgroup` ? e6.body : [e6];
}, qt = /* @__PURE__ */ new Set([`leftmost`, `mbin`, `mopen`, `mrel`, `mop`, `mpunct`]), Jt = /* @__PURE__ */ new Set([`rightmost`, `mrel`, `mclose`, `mpunct`]), Yt = { display: T.DISPLAY, text: T.TEXT, script: T.SCRIPT, scriptscript: T.SCRIPTSCRIPT }, Xt = { mord: `mord`, mop: `mop`, mbin: `mbin`, mrel: `mrel`, mopen: `mopen`, mclose: `mclose`, mpunct: `mpunct`, minner: `minner` }, Zt = function(e6, t3, n2, r2) {
  r2 === void 0 && (r2 = [null, null]);
  for (var i2 = [], a2 = 0; a2 < e6.length; a2++) {
    var o2 = J(e6[a2], t3);
    if (o2 instanceof be) {
      var s2 = o2.children;
      i2.push(...s2);
    } else i2.push(o2);
  }
  if (Tt(i2), !n2) return i2;
  var c2 = t3;
  if (e6.length === 1) {
    var l2 = e6[0];
    l2.type === `sizing` ? c2 = t3.havingSize(l2.size) : l2.type === `styling` && (c2 = t3.havingStyle(Yt[l2.style]));
  }
  var u2 = U([r2[0] || `leftmost`], [], t3), d2 = U([r2[1] || `rightmost`], [], t3), f2 = n2 === `root`;
  return Qt(i2, (e7, t4) => {
    var n3 = t4.classes[0], r3 = e7.classes[0];
    n3 === `mbin` && Jt.has(r3) ? t4.classes[0] = `mord` : r3 === `mbin` && qt.has(n3) && (e7.classes[0] = `mord`);
  }, { node: u2 }, d2, f2), Qt(i2, (e7, t4) => {
    var _a, _b;
    var n3 = tn(t4), r3 = tn(e7), i3 = n3 && r3 ? e7.hasClass(`mtight`) ? (_a = Vt[n3]) == null ? void 0 : _a[r3] : (_b = Bt[n3]) == null ? void 0 : _b[r3] : null;
    if (i3) return Nt(i3, c2);
  }, { node: u2 }, d2, f2), i2;
}, Qt = function(e6, t3, n2, r2, i2) {
  r2 && e6.push(r2);
  for (var a2 = 0; a2 < e6.length; a2++) {
    var o2 = e6[a2], s2 = $t(o2);
    if (s2) {
      Qt(s2.children, t3, n2, null, i2);
      continue;
    }
    var c2 = !o2.hasClass(`mspace`);
    if (c2) {
      var l2 = t3(o2, n2.node);
      l2 && (n2.insertAfter ? n2.insertAfter(l2) : (e6.unshift(l2), a2++));
    }
    c2 ? n2.node = o2 : i2 && o2.hasClass(`newline`) && (n2.node = U([`leftmost`])), n2.insertAfter = /* @__PURE__ */ ((t4) => (n3) => {
      e6.splice(t4 + 1, 0, n3), a2++;
    })(a2);
  }
  r2 && e6.pop();
}, $t = function(e6) {
  return e6 instanceof be || e6 instanceof Ae || e6 instanceof ke && e6.hasClass(`enclosing`) ? e6 : null;
}, en = function(e6, t3) {
  var n2 = $t(e6);
  if (n2) {
    var r2 = n2.children;
    if (r2.length) {
      if (t3 === `right`) return en(r2[r2.length - 1], `right`);
      if (t3 === `left`) return en(r2[0], `left`);
    }
  }
  return e6;
}, tn = function(e6, t3) {
  return e6 ? (t3 && (e6 = en(e6, t3)), Xt[e6.classes[0]] || null) : null;
}, nn = function(e6, t3) {
  var n2 = [`nulldelimiter`].concat(e6.baseSizingClasses());
  return U(t3.concat(n2));
}, J = function(t3, n2, r2) {
  if (!t3) return U();
  if (Ut[t3.type]) {
    var i2 = Ut[t3.type](t3, n2);
    if (r2 && n2.size !== r2.size) {
      i2 = U(n2.sizingClasses(r2), [i2], n2);
      var a2 = n2.sizeMultiplier / r2.sizeMultiplier;
      i2.height *= a2, i2.depth *= a2;
    }
    return i2;
  } else throw new e(`Got group of unknown type: '` + t3.type + `'`);
};
function rn(e6, t3) {
  var n2 = U([`base`], e6, t3), r2 = U([`strut`]);
  return r2.style.height = O(n2.height + n2.depth), n2.depth && (r2.style.verticalAlign = O(-n2.depth)), n2.children.unshift(r2), n2;
}
function an(e6, t3) {
  var n2 = null;
  e6.length === 1 && e6[0].type === `tag` && (n2 = e6[0].tag, e6 = e6[0].body);
  var r2 = Zt(e6, t3, `root`), i2;
  r2.length === 2 && r2[1].hasClass(`tag`) && (i2 = r2.pop());
  for (var a2 = [], o2 = [], s2 = 0; s2 < r2.length; s2++) if (o2.push(r2[s2]), r2[s2].hasClass(`mbin`) || r2[s2].hasClass(`mrel`) || r2[s2].hasClass(`allowbreak`)) {
    for (var c2 = false; s2 < r2.length - 1 && r2[s2 + 1].hasClass(`mspace`) && !r2[s2 + 1].hasClass(`newline`); ) s2++, o2.push(r2[s2]), r2[s2].hasClass(`nobreak`) && (c2 = true);
    c2 || (a2.push(rn(o2, t3)), o2 = []);
  } else r2[s2].hasClass(`newline`) && (o2.pop(), o2.length > 0 && (a2.push(rn(o2, t3)), o2 = []), a2.push(r2[s2]));
  o2.length > 0 && a2.push(rn(o2, t3));
  var l2;
  n2 ? (l2 = rn(Zt(n2, t3, true), t3), l2.classes = [`tag`], a2.push(l2)) : i2 && a2.push(i2);
  var u2 = U([`katex-html`], a2);
  if (u2.setAttribute(`aria-hidden`, `true`), l2) {
    var d2 = l2.children[0];
    d2.style.height = O(u2.height + u2.depth), u2.depth && (d2.style.verticalAlign = O(-u2.depth));
  }
  return u2;
}
function on(e6) {
  return new be(e6);
}
var Y = class {
  constructor(e6, t3, n2) {
    this.type = e6, this.attributes = {}, this.children = t3 || [], this.classes = n2 || [];
  }
  setAttribute(e6, t3) {
    this.attributes[e6] = t3;
  }
  getAttribute(e6) {
    return this.attributes[e6];
  }
  toNode() {
    var e6 = document.createElementNS(`http://www.w3.org/1998/Math/MathML`, this.type);
    for (var t3 in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t3) && e6.setAttribute(t3, this.attributes[t3]);
    this.classes.length > 0 && (e6.className = we(this.classes));
    for (var n2 = 0; n2 < this.children.length; n2++) if (this.children[n2] instanceof X && this.children[n2 + 1] instanceof X) {
      for (var r2 = this.children[n2].toText() + this.children[++n2].toText(); this.children[n2 + 1] instanceof X; ) r2 += this.children[++n2].toText();
      e6.appendChild(new X(r2).toNode());
    } else e6.appendChild(this.children[n2].toNode());
    return e6;
  }
  toMarkup() {
    var e6 = `<` + this.type;
    for (var t3 in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t3) && (e6 += ` ` + t3 + `="`, e6 += a(this.attributes[t3]), e6 += `"`);
    this.classes.length > 0 && (e6 += ` class ="` + a(we(this.classes)) + `"`), e6 += `>`;
    for (var n2 = 0; n2 < this.children.length; n2++) e6 += this.children[n2].toMarkup();
    return e6 += `</` + this.type + `>`, e6;
  }
  toText() {
    return this.children.map((e6) => e6.toText()).join(``);
  }
}, X = class {
  constructor(e6) {
    this.text = e6;
  }
  toNode() {
    return document.createTextNode(this.text);
  }
  toMarkup() {
    return a(this.toText());
  }
  toText() {
    return this.text;
  }
}, sn = class {
  constructor(e6) {
    this.width = e6, e6 >= 0.05555 && e6 <= 0.05556 ? this.character = `\u200A` : e6 >= 0.1666 && e6 <= 0.1667 ? this.character = `\u2009` : e6 >= 0.2222 && e6 <= 0.2223 ? this.character = `\u2005` : e6 >= 0.2777 && e6 <= 0.2778 ? this.character = `\u2005\u200A` : e6 >= -0.05556 && e6 <= -0.05555 ? this.character = `\u200A\u2063` : e6 >= -0.1667 && e6 <= -0.1666 ? this.character = `\u2009\u2063` : e6 >= -0.2223 && e6 <= -0.2222 ? this.character = `\u205F\u2063` : e6 >= -0.2778 && e6 <= -0.2777 ? this.character = `\u2005\u2063` : this.character = null;
  }
  toNode() {
    if (this.character) return document.createTextNode(this.character);
    var e6 = document.createElementNS(`http://www.w3.org/1998/Math/MathML`, `mspace`);
    return e6.setAttribute(`width`, O(this.width)), e6;
  }
  toMarkup() {
    return this.character ? `<mtext>` + this.character + `</mtext>` : `<mspace width="` + O(this.width) + `"/>`;
  }
  toText() {
    return this.character ? this.character : ` `;
  }
}, cn = /* @__PURE__ */ new Set([`\\imath`, `\\jmath`]), ln = /* @__PURE__ */ new Set([`mrow`, `mtable`]), un = function(e6, t3, n2) {
  return k[t3][e6] && k[t3][e6].replace && e6.charCodeAt(0) !== 55349 && !(et.hasOwnProperty(e6) && n2 && (n2.fontFamily && n2.fontFamily.slice(4, 6) === `tt` || n2.font && n2.font.slice(4, 6) === `tt`)) && (e6 = k[t3][e6].replace), new X(e6);
}, dn = function(e6) {
  return e6.length === 1 ? e6[0] : new Y(`mrow`, e6);
}, fn = function(e6, t3) {
  if (t3.fontFamily === `texttt`) return `monospace`;
  if (t3.fontFamily === `textsf`) return t3.fontShape === `textit` && t3.fontWeight === `textbf` ? `sans-serif-bold-italic` : t3.fontShape === `textit` ? `sans-serif-italic` : t3.fontWeight === `textbf` ? `bold-sans-serif` : `sans-serif`;
  if (t3.fontShape === `textit` && t3.fontWeight === `textbf`) return `bold-italic`;
  if (t3.fontShape === `textit`) return `italic`;
  if (t3.fontWeight === `textbf`) return `bold`;
  var n2 = t3.font;
  if (!n2 || n2 === `mathnormal`) return null;
  var r2 = e6.mode;
  if (n2 === `mathit`) return `italic`;
  if (n2 === `boldsymbol`) return e6.type === `textord` ? `bold` : `bold-italic`;
  if (n2 === `mathbf`) return `bold`;
  if (n2 === `mathbb`) return `double-struck`;
  if (n2 === `mathsfit`) return `sans-serif-italic`;
  if (n2 === `mathfrak`) return `fraktur`;
  if (n2 === `mathscr` || n2 === `mathcal`) return `script`;
  if (n2 === `mathsf`) return `sans-serif`;
  if (n2 === `mathtt`) return `monospace`;
  var i2 = e6.text;
  if (cn.has(i2)) return null;
  if (k[r2][i2]) {
    var a2 = k[r2][i2].replace;
    a2 && (i2 = a2);
  }
  var o2 = Ft[n2].fontName;
  return We(i2, o2, r2) ? Ft[n2].variant : null;
};
function pn(e6) {
  if (!e6) return false;
  if (e6.type === `mi` && e6.children.length === 1) {
    var t3 = e6.children[0];
    return t3 instanceof X && t3.text === `.`;
  } else if (e6.type === `mo` && e6.children.length === 1 && e6.getAttribute(`separator`) === `true` && e6.getAttribute(`lspace`) === `0em` && e6.getAttribute(`rspace`) === `0em`) {
    var n2 = e6.children[0];
    return n2 instanceof X && n2.text === `,`;
  } else return false;
}
var mn = function(e6, t3, n2) {
  if (e6.length === 1) {
    var r2 = Z(e6[0], t3);
    return n2 && r2 instanceof Y && r2.type === `mo` && (r2.setAttribute(`lspace`, `0em`), r2.setAttribute(`rspace`, `0em`)), [r2];
  }
  for (var i2 = [], a2, o2 = 0; o2 < e6.length; o2++) {
    var s2 = Z(e6[o2], t3);
    if (s2 instanceof Y && a2 instanceof Y) {
      if (s2.type === `mtext` && a2.type === `mtext` && s2.getAttribute(`mathvariant`) === a2.getAttribute(`mathvariant`)) {
        a2.children.push(...s2.children);
        continue;
      } else if (s2.type === `mn` && a2.type === `mn`) {
        a2.children.push(...s2.children);
        continue;
      } else if (pn(s2) && a2.type === `mn`) {
        a2.children.push(...s2.children);
        continue;
      } else if (s2.type === `mn` && pn(a2)) s2.children = [...a2.children, ...s2.children], i2.pop();
      else if ((s2.type === `msup` || s2.type === `msub`) && s2.children.length >= 1 && (a2.type === `mn` || pn(a2))) {
        var c2 = s2.children[0];
        c2 instanceof Y && c2.type === `mn` && (c2.children = [...a2.children, ...c2.children], i2.pop());
      } else if (a2.type === `mi` && a2.children.length === 1) {
        var l2 = a2.children[0];
        if (l2 instanceof X && l2.text === `\u0338` && (s2.type === `mo` || s2.type === `mi` || s2.type === `mn`)) {
          var u2 = s2.children[0];
          u2 instanceof X && u2.text.length > 0 && (u2.text = u2.text.slice(0, 1) + `\u0338` + u2.text.slice(1), i2.pop());
        }
      }
    }
    i2.push(s2), a2 = s2;
  }
  return i2;
}, hn = function(e6, t3, n2) {
  return dn(mn(e6, t3, n2));
}, Z = function(t3, n2) {
  if (!t3) return new Y(`mrow`);
  if (Wt[t3.type]) return Wt[t3.type](t3, n2);
  throw new e(`Got group of unknown type: '` + t3.type + `'`);
};
function gn(e6, t3, n2, r2, i2) {
  var a2 = mn(e6, n2), o2 = a2.length === 1 && a2[0] instanceof Y && ln.has(a2[0].type) ? a2[0] : new Y(`mrow`, a2), s2 = new Y(`annotation`, [new X(t3)]);
  s2.setAttribute(`encoding`, `application/x-tex`);
  var c2 = new Y(`math`, [new Y(`semantics`, [o2, s2])]);
  return c2.setAttribute(`xmlns`, `http://www.w3.org/1998/Math/MathML`), r2 && c2.setAttribute(`display`, `block`), U([i2 ? `katex` : `katex-mathml`], [c2]);
}
var _n = [[1, 1, 1], [2, 1, 1], [3, 1, 1], [4, 2, 1], [5, 2, 1], [6, 3, 1], [7, 4, 2], [8, 6, 3], [9, 7, 6], [10, 8, 7], [11, 10, 9]], vn = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.44, 1.728, 2.074, 2.488], yn = function(e6, t3) {
  return t3.size < 2 ? e6 : _n[e6 - 1][t3.size - 1];
}, bn = class e3 {
  constructor(t3) {
    this.style = t3.style, this.color = t3.color, this.size = t3.size || e3.BASESIZE, this.textSize = t3.textSize || this.size, this.phantom = !!t3.phantom, this.font = t3.font || ``, this.fontFamily = t3.fontFamily || ``, this.fontWeight = t3.fontWeight || ``, this.fontShape = t3.fontShape || ``, this.sizeMultiplier = vn[this.size - 1], this.maxSize = t3.maxSize, this.minRuleThickness = t3.minRuleThickness, this._fontMetrics = void 0;
  }
  extend(t3) {
    var n2 = { style: this.style, size: this.size, textSize: this.textSize, color: this.color, phantom: this.phantom, font: this.font, fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontShape: this.fontShape, maxSize: this.maxSize, minRuleThickness: this.minRuleThickness };
    return Object.assign(n2, t3), new e3(n2);
  }
  havingStyle(e6) {
    return this.style === e6 ? this : this.extend({ style: e6, size: yn(this.textSize, e6) });
  }
  havingCrampedStyle() {
    return this.havingStyle(this.style.cramp());
  }
  havingSize(e6) {
    return this.size === e6 && this.textSize === e6 ? this : this.extend({ style: this.style.text(), size: e6, textSize: e6, sizeMultiplier: vn[e6 - 1] });
  }
  havingBaseStyle(t3) {
    t3 || (t3 = this.style.text());
    var n2 = yn(e3.BASESIZE, t3);
    return this.size === n2 && this.textSize === e3.BASESIZE && this.style === t3 ? this : this.extend({ style: t3, size: n2 });
  }
  havingBaseSizing() {
    var e6;
    switch (this.style.id) {
      case 4:
      case 5:
        e6 = 3;
        break;
      case 6:
      case 7:
        e6 = 1;
        break;
      default:
        e6 = 6;
    }
    return this.extend({ style: this.style.text(), size: e6 });
  }
  withColor(e6) {
    return this.extend({ color: e6 });
  }
  withPhantom() {
    return this.extend({ phantom: true });
  }
  withFont(e6) {
    return this.extend({ font: e6 });
  }
  withTextFontFamily(e6) {
    return this.extend({ fontFamily: e6, font: `` });
  }
  withTextFontWeight(e6) {
    return this.extend({ fontWeight: e6, font: `` });
  }
  withTextFontShape(e6) {
    return this.extend({ fontShape: e6, font: `` });
  }
  sizingClasses(e6) {
    return e6.size === this.size ? [] : [`sizing`, `reset-size` + e6.size, `size` + this.size];
  }
  baseSizingClasses() {
    return this.size === e3.BASESIZE ? [] : [`sizing`, `reset-size` + this.size, `size` + e3.BASESIZE];
  }
  fontMetrics() {
    return this._fontMetrics || (this._fontMetrics = Ke(this.size)), this._fontMetrics;
  }
  getColor() {
    return this.phantom ? `transparent` : this.color;
  }
};
bn.BASESIZE = 6;
var xn = function(e6) {
  return new bn({ style: e6.displayMode ? T.DISPLAY : T.TEXT, maxSize: e6.maxSize, minRuleThickness: e6.minRuleThickness });
}, Sn = function(e6, t3) {
  if (t3.displayMode) {
    var n2 = [`katex-display`];
    t3.leqno && n2.push(`leqno`), t3.fleqn && n2.push(`fleqn`), e6 = U(n2, [e6]);
  }
  return e6;
}, Cn = function(e6, t3, n2) {
  var r2 = xn(n2), i2;
  return n2.output === `mathml` ? gn(e6, t3, r2, n2.displayMode, true) : (i2 = n2.output === `html` ? U([`katex`], [an(e6, r2)]) : U([`katex`], [gn(e6, t3, r2, n2.displayMode, false), an(e6, r2)]), Sn(i2, n2));
}, wn = function(e6, t3, n2) {
  return Sn(U([`katex`], [an(e6, xn(n2))]), n2);
}, Tn = { widehat: `^`, widecheck: `\u02C7`, widetilde: `~`, utilde: `~`, overleftarrow: `\u2190`, underleftarrow: `\u2190`, xleftarrow: `\u2190`, overrightarrow: `\u2192`, underrightarrow: `\u2192`, xrightarrow: `\u2192`, underbrace: `\u23DF`, overbrace: `\u23DE`, underbracket: `\u23B5`, overbracket: `\u23B4`, overgroup: `\u23E0`, undergroup: `\u23E1`, overleftrightarrow: `\u2194`, underleftrightarrow: `\u2194`, xleftrightarrow: `\u2194`, Overrightarrow: `\u21D2`, xRightarrow: `\u21D2`, overleftharpoon: `\u21BC`, xleftharpoonup: `\u21BC`, overrightharpoon: `\u21C0`, xrightharpoonup: `\u21C0`, xLeftarrow: `\u21D0`, xLeftrightarrow: `\u21D4`, xhookleftarrow: `\u21A9`, xhookrightarrow: `\u21AA`, xmapsto: `\u21A6`, xrightharpoondown: `\u21C1`, xleftharpoondown: `\u21BD`, xrightleftharpoons: `\u21CC`, xleftrightharpoons: `\u21CB`, xtwoheadleftarrow: `\u219E`, xtwoheadrightarrow: `\u21A0`, xlongequal: `=`, xtofrom: `\u21C4`, xrightleftarrows: `\u21C4`, xrightequilibrium: `\u21CC`, xleftequilibrium: `\u21CB`, "\\cdrightarrow": `\u2192`, "\\cdleftarrow": `\u2190`, "\\cdlongequal": `=` }, En = function(e6) {
  var t3 = new Y(`mo`, [new X(Tn[e6.replace(/^\\/, ``)])]);
  return t3.setAttribute(`stretchy`, `true`), t3;
}, Dn = { overrightarrow: [[`rightarrow`], 0.888, 522, `xMaxYMin`], overleftarrow: [[`leftarrow`], 0.888, 522, `xMinYMin`], underrightarrow: [[`rightarrow`], 0.888, 522, `xMaxYMin`], underleftarrow: [[`leftarrow`], 0.888, 522, `xMinYMin`], xrightarrow: [[`rightarrow`], 1.469, 522, `xMaxYMin`], "\\cdrightarrow": [[`rightarrow`], 3, 522, `xMaxYMin`], xleftarrow: [[`leftarrow`], 1.469, 522, `xMinYMin`], "\\cdleftarrow": [[`leftarrow`], 3, 522, `xMinYMin`], Overrightarrow: [[`doublerightarrow`], 0.888, 560, `xMaxYMin`], xRightarrow: [[`doublerightarrow`], 1.526, 560, `xMaxYMin`], xLeftarrow: [[`doubleleftarrow`], 1.526, 560, `xMinYMin`], overleftharpoon: [[`leftharpoon`], 0.888, 522, `xMinYMin`], xleftharpoonup: [[`leftharpoon`], 0.888, 522, `xMinYMin`], xleftharpoondown: [[`leftharpoondown`], 0.888, 522, `xMinYMin`], overrightharpoon: [[`rightharpoon`], 0.888, 522, `xMaxYMin`], xrightharpoonup: [[`rightharpoon`], 0.888, 522, `xMaxYMin`], xrightharpoondown: [[`rightharpoondown`], 0.888, 522, `xMaxYMin`], xlongequal: [[`longequal`], 0.888, 334, `xMinYMin`], "\\cdlongequal": [[`longequal`], 3, 334, `xMinYMin`], xtwoheadleftarrow: [[`twoheadleftarrow`], 0.888, 334, `xMinYMin`], xtwoheadrightarrow: [[`twoheadrightarrow`], 0.888, 334, `xMaxYMin`], overleftrightarrow: [[`leftarrow`, `rightarrow`], 0.888, 522], overbrace: [[`leftbrace`, `midbrace`, `rightbrace`], 1.6, 548], underbrace: [[`leftbraceunder`, `midbraceunder`, `rightbraceunder`], 1.6, 548], underleftrightarrow: [[`leftarrow`, `rightarrow`], 0.888, 522], xleftrightarrow: [[`leftarrow`, `rightarrow`], 1.75, 522], xLeftrightarrow: [[`doubleleftarrow`, `doublerightarrow`], 1.75, 560], xrightleftharpoons: [[`leftharpoondownplus`, `rightharpoonplus`], 1.75, 716], xleftrightharpoons: [[`leftharpoonplus`, `rightharpoondownplus`], 1.75, 716], xhookleftarrow: [[`leftarrow`, `righthook`], 1.08, 522], xhookrightarrow: [[`lefthook`, `rightarrow`], 1.08, 522], overlinesegment: [[`leftlinesegment`, `rightlinesegment`], 0.888, 522], underlinesegment: [[`leftlinesegment`, `rightlinesegment`], 0.888, 522], overbracket: [[`leftbracketover`, `rightbracketover`], 1.6, 440], underbracket: [[`leftbracketunder`, `rightbracketunder`], 1.6, 410], overgroup: [[`leftgroup`, `rightgroup`], 0.888, 342], undergroup: [[`leftgroupunder`, `rightgroupunder`], 0.888, 342], xmapsto: [[`leftmapsto`, `rightarrow`], 1.5, 522], xtofrom: [[`leftToFrom`, `rightToFrom`], 1.75, 528], xrightleftarrows: [[`baraboveleftarrow`, `rightarrowabovebar`], 1.75, 901], xrightequilibrium: [[`baraboveshortleftharpoon`, `rightharpoonaboveshortbar`], 1.75, 716], xleftequilibrium: [[`shortbaraboveleftharpoon`, `shortrightharpoonabovebar`], 1.75, 716] }, On = /* @__PURE__ */ new Set([`widehat`, `widecheck`, `widetilde`, `utilde`]), kn = function(e6, t3) {
  function n2() {
    var n3 = 4e5, r3 = e6.label.slice(1);
    if (On.has(r3)) {
      var i3 = e6, a3 = i3.base.type === `ordgroup` ? i3.base.body.length : 1, o2, s2, c2;
      if (a3 > 5) r3 === `widehat` || r3 === `widecheck` ? (o2 = 420, n3 = 2364, c2 = 0.42, s2 = r3 + `4`) : (o2 = 312, n3 = 2340, c2 = 0.34, s2 = `tilde4`);
      else {
        var l2 = [1, 1, 2, 2, 3, 3][a3];
        r3 === `widehat` || r3 === `widecheck` ? (n3 = [0, 1062, 2364, 2364, 2364][l2], o2 = [0, 239, 300, 360, 420][l2], c2 = [0, 0.24, 0.3, 0.3, 0.36, 0.42][l2], s2 = r3 + l2) : (n3 = [0, 600, 1033, 2339, 2340][l2], o2 = [0, 260, 286, 306, 312][l2], c2 = [0, 0.26, 0.286, 0.3, 0.306, 0.34][l2], s2 = `tilde` + l2);
      }
      return { span: Dt([], [new Pe([new Fe(s2)], { width: `100%`, height: O(c2), viewBox: `0 0 ` + n3 + ` ` + o2, preserveAspectRatio: `none` })], t3), minWidth: 0, height: c2 };
    } else {
      var u2 = [], d2 = Dn[r3], [f2, p2, m2] = d2, h2 = m2 / 1e3, g2 = f2.length, _2, v2;
      if (g2 === 1) {
        var y2 = d2[3];
        _2 = [`hide-tail`], v2 = [y2];
      } else if (g2 === 2) _2 = [`halfarrow-left`, `halfarrow-right`], v2 = [`xMinYMin`, `xMaxYMin`];
      else if (g2 === 3) _2 = [`brace-left`, `brace-center`, `brace-right`], v2 = [`xMinYMin`, `xMidYMin`, `xMaxYMin`];
      else throw Error(`Correct katexImagesData or update code here to support
                    ` + g2 + ` children.`);
      for (var b2 = 0; b2 < g2; b2++) {
        var x2 = new Pe([new Fe(f2[b2])], { width: `400em`, height: O(h2), viewBox: `0 0 ` + n3 + ` ` + m2, preserveAspectRatio: v2[b2] + ` slice` }), S2 = Dt([_2[b2]], [x2], t3);
        if (g2 === 1) return { span: S2, minWidth: p2, height: h2 };
        S2.style.height = O(h2), u2.push(S2);
      }
      return { span: U([`stretchy`], u2, t3), minWidth: p2, height: h2 };
    }
  }
  var { span: r2, minWidth: i2, height: a2 } = n2();
  return r2.height = a2, r2.style.height = O(a2), i2 > 0 && (r2.style.minWidth = O(i2)), r2;
}, An = function(e6, t3, n2, r2, i2) {
  var a2, o2 = e6.height + e6.depth + n2 + r2;
  if (/fbox|color|angl/.test(t3)) {
    if (a2 = U([`stretchy`, t3], [], i2), t3 === `fbox`) {
      var s2 = i2.color && i2.getColor();
      s2 && (a2.style.borderColor = s2);
    }
  } else {
    var c2 = [];
    /^[bx]cancel$/.test(t3) && c2.push(new Ie({ x1: `0`, y1: `0`, x2: `100%`, y2: `100%`, "stroke-width": `0.046em` })), /^x?cancel$/.test(t3) && c2.push(new Ie({ x1: `0`, y1: `100%`, x2: `100%`, y2: `0`, "stroke-width": `0.046em` })), a2 = Dt([], [new Pe(c2, { width: `100%`, height: O(o2) })], i2);
  }
  return a2.height = o2, a2.style.height = O(o2), a2;
};
function Q(e6, t3) {
  if (!e6 || e6.type !== t3) throw Error(`Expected node of type ` + t3 + `, but got ` + (e6 ? `node of type ` + e6.type : String(e6)));
  return e6;
}
function jn(e6) {
  var t3 = Mn(e6);
  if (!t3) throw Error(`Expected node of symbol group type, but got ` + (e6 ? `node of type ` + e6.type : String(e6)));
  return t3;
}
function Mn(e6) {
  return e6 && (e6.type === `atom` || Je.hasOwnProperty(e6.type)) ? e6 : null;
}
var Nn = (e6) => {
  if (e6 instanceof Ne) return e6;
  if (ze(e6) && e6.children.length === 1) return Nn(e6.children[0]);
}, Pn = (e6, t3) => {
  var _a;
  var n2, r2, i2;
  e6 && e6.type === `supsub` ? (r2 = Q(e6.base, `accent`), n2 = r2.base, e6.base = n2, i2 = Re(J(e6, t3)), e6.base = r2) : (r2 = Q(e6, `accent`), n2 = r2.base);
  var a2 = J(n2, t3.havingCrampedStyle()), o2 = r2.isShifty && c(n2), s2 = 0;
  o2 && (s2 = ((_a = Nn(a2)) == null ? void 0 : _a.skew) ?? 0);
  var l2 = r2.label === `\\c`, u2 = l2 ? a2.height + a2.depth : Math.min(a2.height, t3.fontMetrics().xHeight), d2;
  if (r2.isStretchy) d2 = kn(r2, t3), d2 = W({ positionType: `firstBaseline`, children: [{ type: `elem`, elem: a2 }, { type: `elem`, elem: d2, wrapperClasses: [`svg-align`], wrapperStyle: s2 > 0 ? { width: `calc(100% - ` + O(2 * s2) + `)`, marginLeft: O(2 * s2) } : void 0 }] });
  else {
    var f2, p2;
    r2.label === `\\vec` ? (f2 = Lt(`vec`, t3), p2 = It.vec[1]) : (f2 = Ct({ type: `textord`, mode: r2.mode, text: r2.label }, t3, `textord`), f2 = Le(f2), f2.italic = 0, p2 = f2.width, l2 && (u2 += f2.depth)), d2 = U([`accent-body`], [f2]);
    var m2 = r2.label === `\\textcircled`;
    m2 && (d2.classes.push(`accent-full`), u2 = a2.height);
    var h2 = s2;
    m2 || (h2 -= p2 / 2), d2.style.left = O(h2), r2.label === `\\textcircled` && (d2.style.top = `.2em`), d2 = W({ positionType: `firstBaseline`, children: [{ type: `elem`, elem: a2 }, { type: `kern`, size: -u2 }, { type: `elem`, elem: d2 }] });
  }
  var g2 = U([`mord`, `accent`], [d2], t3);
  return i2 ? (i2.children[0] = g2, i2.height = Math.max(g2.height, i2.height), i2.classes[0] = `mord`, i2) : g2;
}, Fn = (e6, t3) => {
  var n2 = e6.isStretchy ? En(e6.label) : new Y(`mo`, [un(e6.label, e6.mode)]), r2 = new Y(`mover`, [Z(e6.base, t3), n2]);
  return r2.setAttribute(`accent`, `true`), r2;
}, In = new RegExp([`\\acute`, `\\grave`, `\\ddot`, `\\tilde`, `\\bar`, `\\breve`, `\\check`, `\\hat`, `\\vec`, `\\dot`, `\\mathring`].map((e6) => `\\` + e6).join(`|`));
K({ type: `accent`, names: [`\\acute`, `\\grave`, `\\ddot`, `\\tilde`, `\\bar`, `\\breve`, `\\check`, `\\hat`, `\\vec`, `\\dot`, `\\mathring`, `\\widecheck`, `\\widehat`, `\\widetilde`, `\\overrightarrow`, `\\overleftarrow`, `\\Overrightarrow`, `\\overleftrightarrow`, `\\overgroup`, `\\overlinesegment`, `\\overleftharpoon`, `\\overrightharpoon`], props: { numArgs: 1 }, handler: (e6, t3) => {
  var n2 = Kt(t3[0]), r2 = !In.test(e6.funcName), i2 = !r2 || e6.funcName === `\\widehat` || e6.funcName === `\\widetilde` || e6.funcName === `\\widecheck`;
  return { type: `accent`, mode: e6.parser.mode, label: e6.funcName, isStretchy: r2, isShifty: i2, base: n2 };
}, htmlBuilder: Pn, mathmlBuilder: Fn }), K({ type: `accent`, names: [`\\'`, "\\`", `\\^`, `\\~`, `\\=`, `\\u`, `\\.`, `\\"`, `\\c`, `\\r`, `\\H`, `\\v`, `\\textcircled`], props: { numArgs: 1, allowedInText: true, allowedInMath: true, argTypes: [`primitive`] }, handler: (e6, t3) => {
  var n2 = t3[0], r2 = e6.parser.mode;
  return r2 === `math` && (e6.parser.settings.reportNonstrict(`mathVsTextAccents`, `LaTeX's accent ` + e6.funcName + ` works only in text mode`), r2 = `text`), { type: `accent`, mode: r2, label: e6.funcName, isStretchy: false, isShifty: true, base: n2 };
}, htmlBuilder: Pn, mathmlBuilder: Fn }), K({ type: `accentUnder`, names: [`\\underleftarrow`, `\\underrightarrow`, `\\underleftrightarrow`, `\\undergroup`, `\\underlinesegment`, `\\utilde`], props: { numArgs: 1 }, handler: (e6, t3) => {
  var { parser: n2, funcName: r2 } = e6, i2 = t3[0];
  return { type: `accentUnder`, mode: n2.mode, label: r2, base: i2 };
}, htmlBuilder: (e6, t3) => {
  var n2 = J(e6.base, t3), r2 = kn(e6, t3), i2 = e6.label === `\\utilde` ? 0.12 : 0;
  return U([`mord`, `accentunder`], [W({ positionType: `top`, positionData: n2.height, children: [{ type: `elem`, elem: r2, wrapperClasses: [`svg-align`] }, { type: `kern`, size: i2 }, { type: `elem`, elem: n2 }] })], t3);
}, mathmlBuilder: (e6, t3) => {
  var n2 = En(e6.label), r2 = new Y(`munder`, [Z(e6.base, t3), n2]);
  return r2.setAttribute(`accentunder`, `true`), r2;
} });
var Ln = (e6) => {
  var t3 = new Y(`mpadded`, e6 ? [e6] : []);
  return t3.setAttribute(`width`, `+0.6em`), t3.setAttribute(`lspace`, `0.3em`), t3;
};
K({ type: `xArrow`, names: [`\\xleftarrow`, `\\xrightarrow`, `\\xLeftarrow`, `\\xRightarrow`, `\\xleftrightarrow`, `\\xLeftrightarrow`, `\\xhookleftarrow`, `\\xhookrightarrow`, `\\xmapsto`, `\\xrightharpoondown`, `\\xrightharpoonup`, `\\xleftharpoondown`, `\\xleftharpoonup`, `\\xrightleftharpoons`, `\\xleftrightharpoons`, `\\xlongequal`, `\\xtwoheadrightarrow`, `\\xtwoheadleftarrow`, `\\xtofrom`, `\\xrightleftarrows`, `\\xrightequilibrium`, `\\xleftequilibrium`, `\\\\cdrightarrow`, `\\\\cdleftarrow`, `\\\\cdlongequal`], props: { numArgs: 1, numOptionalArgs: 1 }, handler(e6, t3, n2) {
  var { parser: r2, funcName: i2 } = e6;
  return { type: `xArrow`, mode: r2.mode, label: i2, body: t3[0], below: n2[0] };
}, htmlBuilder(e6, t3) {
  var n2 = t3.style, r2 = t3.havingStyle(n2.sup()), i2 = jt(J(e6.body, r2, t3), t3), a2 = e6.label.slice(0, 2) === `\\x` ? `x` : `cd`;
  i2.classes.push(a2 + `-arrow-pad`);
  var o2;
  e6.below && (r2 = t3.havingStyle(n2.sub()), o2 = jt(J(e6.below, r2, t3), t3), o2.classes.push(a2 + `-arrow-pad`));
  var s2 = kn(e6, t3), c2 = -t3.fontMetrics().axisHeight + 0.5 * s2.height, l2 = -t3.fontMetrics().axisHeight - 0.5 * s2.height - 0.111;
  (i2.depth > 0.25 || e6.label === `\\xleftequilibrium`) && (l2 -= i2.depth);
  var u2;
  if (o2) {
    var d2 = -t3.fontMetrics().axisHeight + o2.height + 0.5 * s2.height + 0.111;
    u2 = W({ positionType: `individualShift`, children: [{ type: `elem`, elem: i2, shift: l2 }, { type: `elem`, elem: s2, shift: c2 }, { type: `elem`, elem: o2, shift: d2 }] });
  } else u2 = W({ positionType: `individualShift`, children: [{ type: `elem`, elem: i2, shift: l2 }, { type: `elem`, elem: s2, shift: c2 }] });
  return u2.children[0].children[0].children[1].classes.push(`svg-align`), U([`mrel`, `x-arrow`], [u2], t3);
}, mathmlBuilder(e6, t3) {
  var n2 = En(e6.label);
  n2.setAttribute(`minsize`, e6.label.charAt(0) === `x` ? `1.75em` : `3.0em`);
  var r2;
  if (e6.body) {
    var i2 = Ln(Z(e6.body, t3));
    r2 = e6.below ? new Y(`munderover`, [n2, Ln(Z(e6.below, t3)), i2]) : new Y(`mover`, [n2, i2]);
  } else e6.below ? r2 = new Y(`munder`, [n2, Ln(Z(e6.below, t3))]) : (r2 = Ln(), r2 = new Y(`mover`, [n2, r2]));
  return r2;
} });
function Rn(e6, t3) {
  var n2 = Zt(e6.body, t3, true);
  return U([e6.mclass], n2, t3);
}
function zn(e6, t3) {
  var n2, r2 = mn(e6.body, t3);
  return e6.mclass === `minner` ? n2 = new Y(`mpadded`, r2) : e6.mclass === `mord` ? e6.isCharacterBox ? (n2 = r2[0], n2.type = `mi`) : n2 = new Y(`mi`, r2) : (e6.isCharacterBox ? (n2 = r2[0], n2.type = `mo`) : n2 = new Y(`mo`, r2), e6.mclass === `mbin` ? (n2.attributes.lspace = `0.22em`, n2.attributes.rspace = `0.22em`) : e6.mclass === `mpunct` ? (n2.attributes.lspace = `0em`, n2.attributes.rspace = `0.17em`) : e6.mclass === `mopen` || e6.mclass === `mclose` ? (n2.attributes.lspace = `0em`, n2.attributes.rspace = `0em`) : e6.mclass === `minner` && (n2.attributes.lspace = `0.0556em`, n2.attributes.width = `+0.1111em`)), n2;
}
K({ type: `mclass`, names: [`\\mathord`, `\\mathbin`, `\\mathrel`, `\\mathopen`, `\\mathclose`, `\\mathpunct`, `\\mathinner`], props: { numArgs: 1, primitive: true }, handler(e6, t3) {
  var { parser: n2, funcName: r2 } = e6, i2 = t3[0];
  return { type: `mclass`, mode: n2.mode, mclass: `m` + r2.slice(5), body: q(i2), isCharacterBox: c(i2) };
}, htmlBuilder: Rn, mathmlBuilder: zn });
var Bn = (e6) => {
  var t3 = e6.type === `ordgroup` && e6.body.length ? e6.body[0] : e6;
  return t3.type === `atom` && (t3.family === `bin` || t3.family === `rel`) ? `m` + t3.family : `mord`;
};
K({ type: `mclass`, names: [`\\@binrel`], props: { numArgs: 2 }, handler(e6, t3) {
  var { parser: n2 } = e6;
  return { type: `mclass`, mode: n2.mode, mclass: Bn(t3[0]), body: q(t3[1]), isCharacterBox: c(t3[1]) };
} }), K({ type: `mclass`, names: [`\\stackrel`, `\\overset`, `\\underset`], props: { numArgs: 2 }, handler(e6, t3) {
  var { parser: n2, funcName: r2 } = e6, i2 = t3[1], a2 = t3[0], o2 = r2 === `\\stackrel` ? `mrel` : Bn(i2), s2 = { type: `op`, mode: i2.mode, limits: true, alwaysHandleSupSub: true, parentIsSupSub: false, symbol: false, suppressBaseShift: r2 !== `\\stackrel`, body: q(i2) }, l2 = { type: `supsub`, mode: a2.mode, base: s2, sup: r2 === `\\underset` ? null : a2, sub: r2 === `\\underset` ? a2 : null };
  return { type: `mclass`, mode: n2.mode, mclass: o2, body: [l2], isCharacterBox: c(l2) };
}, htmlBuilder: Rn, mathmlBuilder: zn }), K({ type: `pmb`, names: [`\\pmb`], props: { numArgs: 1, allowedInText: true }, handler(e6, t3) {
  var { parser: n2 } = e6;
  return { type: `pmb`, mode: n2.mode, mclass: Bn(t3[0]), body: q(t3[0]) };
}, htmlBuilder(e6, t3) {
  var n2 = Zt(e6.body, t3, true), r2 = U([e6.mclass], n2, t3);
  return r2.style.textShadow = `0.02em 0.01em 0.04px`, r2;
}, mathmlBuilder(e6, t3) {
  var n2 = new Y(`mstyle`, mn(e6.body, t3));
  return n2.setAttribute(`style`, `text-shadow: 0.02em 0.01em 0.04px`), n2;
} });
var Vn = { ">": `\\\\cdrightarrow`, "<": `\\\\cdleftarrow`, "=": `\\\\cdlongequal`, A: `\\uparrow`, V: `\\downarrow`, "|": `\\Vert`, ".": `no arrow` }, Hn = () => ({ type: `styling`, body: [], mode: `math`, style: `display` }), Un = (e6) => e6.type === `textord` && e6.text === `@`, Wn = (e6, t3) => (e6.type === `mathord` || e6.type === `atom`) && e6.text === t3;
function Gn(e6, t3, n2) {
  var r2 = Vn[e6];
  switch (r2) {
    case `\\\\cdrightarrow`:
    case `\\\\cdleftarrow`:
      return n2.callFunction(r2, [t3[0]], [t3[1]]);
    case `\\uparrow`:
    case `\\downarrow`:
      var i2 = n2.callFunction(`\\\\cdleft`, [t3[0]], []), a2 = { type: `atom`, text: r2, mode: `math`, family: `rel` }, o2 = { type: `ordgroup`, mode: `math`, body: [i2, n2.callFunction(`\\Big`, [a2], []), n2.callFunction(`\\\\cdright`, [t3[1]], [])] };
      return n2.callFunction(`\\\\cdparent`, [o2], []);
    case `\\\\cdlongequal`:
      return n2.callFunction(`\\\\cdlongequal`, [], []);
    case `\\Vert`:
      return n2.callFunction(`\\Big`, [{ type: `textord`, text: `\\Vert`, mode: `math` }], []);
    default:
      return { type: `textord`, text: ` `, mode: `math` };
  }
}
function Kn(t3) {
  var n2 = [];
  for (t3.gullet.beginGroup(), t3.gullet.macros.set(`\\cr`, `\\\\\\relax`), t3.gullet.beginGroup(); ; ) {
    n2.push(t3.parseExpression(false, `\\\\`)), t3.gullet.endGroup(), t3.gullet.beginGroup();
    var r2 = t3.fetch().text;
    if (r2 === `&` || r2 === `\\\\`) t3.consume();
    else if (r2 === `\\end`) {
      n2[n2.length - 1].length === 0 && n2.pop();
      break;
    } else throw new e(`Expected \\\\ or \\cr or \\end`, t3.nextToken);
  }
  for (var i2 = [], a2 = [i2], o2 = 0; o2 < n2.length; o2++) {
    for (var s2 = n2[o2], c2 = Hn(), l2 = 0; l2 < s2.length; l2++) if (!Un(s2[l2])) c2.body.push(s2[l2]);
    else {
      i2.push(c2), l2 += 1;
      var u2 = jn(s2[l2]).text, d2 = [, ,];
      if (d2[0] = { type: `ordgroup`, mode: `math`, body: [] }, d2[1] = { type: `ordgroup`, mode: `math`, body: [] }, !`=|.`.includes(u2)) if (`<>AV`.includes(u2)) for (var f2 = 0; f2 < 2; f2++) {
        for (var p2 = true, m2 = l2 + 1; m2 < s2.length; m2++) {
          if (Wn(s2[m2], u2)) {
            p2 = false, l2 = m2;
            break;
          }
          if (Un(s2[m2])) throw new e(`Missing a ` + u2 + ` character to complete a CD arrow.`, s2[m2]);
          d2[f2].body.push(s2[m2]);
        }
        if (p2) throw new e(`Missing a ` + u2 + ` character to complete a CD arrow.`, s2[l2]);
      }
      else throw new e(`Expected one of "<>AV=|." after @`, s2[l2]);
      var h2 = { type: `styling`, body: [Gn(u2, d2, t3)], mode: `math`, style: `display` };
      i2.push(h2), c2 = Hn();
    }
    o2 % 2 == 0 ? i2.push(c2) : i2.shift(), i2 = [], a2.push(i2);
  }
  return t3.gullet.endGroup(), t3.gullet.endGroup(), { type: `array`, mode: `math`, body: a2, arraystretch: 1, addJot: true, rowGaps: [null], cols: Array(a2[0].length).fill({ type: `align`, align: `c`, pregap: 0.25, postgap: 0.25 }), colSeparationType: `CD`, hLinesBeforeRow: Array(a2.length + 1).fill([]) };
}
K({ type: `cdlabel`, names: [`\\\\cdleft`, `\\\\cdright`], props: { numArgs: 1 }, handler(e6, t3) {
  var { parser: n2, funcName: r2 } = e6;
  return { type: `cdlabel`, mode: n2.mode, side: r2.slice(4), label: t3[0] };
}, htmlBuilder(e6, t3) {
  var n2 = t3.havingStyle(t3.style.sup()), r2 = jt(J(e6.label, n2, t3), t3);
  return r2.classes.push(`cd-label-` + e6.side), r2.style.bottom = O(0.8 - r2.depth), r2.height = 0, r2.depth = 0, r2;
}, mathmlBuilder(e6, t3) {
  var n2 = new Y(`mrow`, [Z(e6.label, t3)]);
  return n2 = new Y(`mpadded`, [n2]), n2.setAttribute(`width`, `0`), e6.side === `left` && n2.setAttribute(`lspace`, `-1width`), n2.setAttribute(`voffset`, `0.7em`), n2 = new Y(`mstyle`, [n2]), n2.setAttribute(`displaystyle`, `false`), n2.setAttribute(`scriptlevel`, `1`), n2;
} }), K({ type: `cdlabelparent`, names: [`\\\\cdparent`], props: { numArgs: 1 }, handler(e6, t3) {
  var { parser: n2 } = e6;
  return { type: `cdlabelparent`, mode: n2.mode, fragment: t3[0] };
}, htmlBuilder(e6, t3) {
  var n2 = jt(J(e6.fragment, t3), t3);
  return n2.classes.push(`cd-vert-arrow`), n2;
}, mathmlBuilder(e6, t3) {
  return new Y(`mrow`, [Z(e6.fragment, t3)]);
} }), K({ type: `textord`, names: [`\\@char`], props: { numArgs: 1, allowedInText: true }, handler(t3, n2) {
  for (var { parser: r2 } = t3, i2 = Q(n2[0], `ordgroup`).body, a2 = ``, o2 = 0; o2 < i2.length; o2++) {
    var s2 = Q(i2[o2], `textord`);
    a2 += s2.text;
  }
  var c2 = parseInt(a2), l2;
  if (isNaN(c2)) throw new e(`\\@char has non-numeric argument ` + a2);
  if (c2 < 0 || c2 >= 1114111) throw new e(`\\@char with invalid code point ` + a2);
  return c2 <= 65535 ? l2 = String.fromCharCode(c2) : (c2 -= 65536, l2 = String.fromCharCode((c2 >> 10) + 55296, (c2 & 1023) + 56320)), { type: `textord`, mode: r2.mode, text: l2 };
} });
var qn = (e6, t3) => At(Zt(e6.body, t3.withColor(e6.color), false)), Jn = (e6, t3) => {
  var n2 = new Y(`mstyle`, mn(e6.body, t3.withColor(e6.color)));
  return n2.setAttribute(`mathcolor`, e6.color), n2;
};
K({ type: `color`, names: [`\\textcolor`], props: { numArgs: 2, allowedInText: true, argTypes: [`color`, `original`] }, handler(e6, t3) {
  var { parser: n2 } = e6, r2 = Q(t3[0], `color-token`).color, i2 = t3[1];
  return { type: `color`, mode: n2.mode, color: r2, body: q(i2) };
}, htmlBuilder: qn, mathmlBuilder: Jn }), K({ type: `color`, names: [`\\color`], props: { numArgs: 1, allowedInText: true, argTypes: [`color`] }, handler(e6, t3) {
  var { parser: n2, breakOnTokenText: r2 } = e6, i2 = Q(t3[0], `color-token`).color;
  n2.gullet.macros.set(`\\current@color`, i2);
  var a2 = n2.parseExpression(true, r2);
  return { type: `color`, mode: n2.mode, color: i2, body: a2 };
}, htmlBuilder: qn, mathmlBuilder: Jn }), K({ type: `cr`, names: [`\\\\`], props: { numArgs: 0, numOptionalArgs: 0, allowedInText: true }, handler(e6, t3, n2) {
  var { parser: r2 } = e6, i2 = r2.gullet.future().text === `[` ? r2.parseSizeGroup(true) : null, a2 = !r2.settings.displayMode || !r2.settings.useStrictBehavior(`newLineInDisplayMode`, `In LaTeX, \\\\ or \\newline does nothing in display mode`);
  return { type: `cr`, mode: r2.mode, newLine: a2, size: i2 && Q(i2, `size`).value };
}, htmlBuilder(e6, t3) {
  var n2 = U([`mspace`], [], t3);
  return e6.newLine && (n2.classes.push(`newline`), e6.size && (n2.style.marginTop = O(D(e6.size, t3)))), n2;
}, mathmlBuilder(e6, t3) {
  var n2 = new Y(`mspace`);
  return e6.newLine && (n2.setAttribute(`linebreak`, `newline`), e6.size && n2.setAttribute(`height`, O(D(e6.size, t3)))), n2;
} });
var Yn = { "\\global": `\\global`, "\\long": `\\\\globallong`, "\\\\globallong": `\\\\globallong`, "\\def": `\\gdef`, "\\gdef": `\\gdef`, "\\edef": `\\xdef`, "\\xdef": `\\xdef`, "\\let": `\\\\globallet`, "\\futurelet": `\\\\globalfuture` }, Xn = (t3) => {
  var n2 = t3.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(n2)) throw new e(`Expected a control sequence`, t3);
  return n2;
}, Zn = (e6) => {
  var t3 = e6.gullet.popToken();
  return t3.text === `=` && (t3 = e6.gullet.popToken(), t3.text === ` ` && (t3 = e6.gullet.popToken())), t3;
}, Qn = (e6, t3, n2, r2) => {
  var i2 = e6.gullet.macros.get(n2.text);
  i2 ?? (i2 = (n2.noexpand = true, { tokens: [n2], numArgs: 0, unexpandable: !e6.gullet.isExpandable(n2.text) })), e6.gullet.macros.set(t3, i2, r2);
};
K({ type: `internal`, names: [`\\global`, `\\long`, `\\\\globallong`], props: { numArgs: 0, allowedInText: true }, handler(t3) {
  var { parser: n2, funcName: r2 } = t3;
  n2.consumeSpaces();
  var i2 = n2.fetch();
  if (Yn[i2.text]) return (r2 === `\\global` || r2 === `\\\\globallong`) && (i2.text = Yn[i2.text]), Q(n2.parseFunction(), `internal`);
  throw new e(`Invalid token after macro prefix`, i2);
} }), K({ type: `internal`, names: [`\\def`, `\\gdef`, `\\edef`, `\\xdef`], props: { numArgs: 0, allowedInText: true, primitive: true }, handler(t3) {
  var { parser: n2, funcName: r2 } = t3, i2 = n2.gullet.popToken(), a2 = i2.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(a2)) throw new e(`Expected a control sequence`, i2);
  for (var o2 = 0, s2, c2 = [[]]; n2.gullet.future().text !== `{`; ) if (i2 = n2.gullet.popToken(), i2.text === `#`) {
    if (n2.gullet.future().text === `{`) {
      s2 = n2.gullet.future(), c2[o2].push(`{`);
      break;
    }
    if (i2 = n2.gullet.popToken(), !/^[1-9]$/.test(i2.text)) throw new e(`Invalid argument number "` + i2.text + `"`);
    if (parseInt(i2.text) !== o2 + 1) throw new e(`Argument number "` + i2.text + `" out of order`);
    o2++, c2.push([]);
  } else if (i2.text === `EOF`) throw new e(`Expected a macro definition`);
  else c2[o2].push(i2.text);
  var { tokens: l2 } = n2.gullet.consumeArg();
  return s2 && l2.unshift(s2), (r2 === `\\edef` || r2 === `\\xdef`) && (l2 = n2.gullet.expandTokens(l2), l2.reverse()), n2.gullet.macros.set(a2, { tokens: l2, numArgs: o2, delimiters: c2 }, r2 === Yn[r2]), { type: `internal`, mode: n2.mode };
} }), K({ type: `internal`, names: [`\\let`, `\\\\globallet`], props: { numArgs: 0, allowedInText: true, primitive: true }, handler(e6) {
  var { parser: t3, funcName: n2 } = e6, r2 = Xn(t3.gullet.popToken());
  return t3.gullet.consumeSpaces(), Qn(t3, r2, Zn(t3), n2 === `\\\\globallet`), { type: `internal`, mode: t3.mode };
} }), K({ type: `internal`, names: [`\\futurelet`, `\\\\globalfuture`], props: { numArgs: 0, allowedInText: true, primitive: true }, handler(e6) {
  var { parser: t3, funcName: n2 } = e6, r2 = Xn(t3.gullet.popToken()), i2 = t3.gullet.popToken(), a2 = t3.gullet.popToken();
  return Qn(t3, r2, a2, n2 === `\\\\globalfuture`), t3.gullet.pushToken(a2), t3.gullet.pushToken(i2), { type: `internal`, mode: t3.mode };
} });
var $n = function(e6, t3, n2) {
  var r2 = We(k.math[e6] && k.math[e6].replace || e6, t3, n2);
  if (!r2) throw Error(`Unsupported symbol ` + e6 + ` and font size ` + t3 + `.`);
  return r2;
}, er = function(e6, t3, n2, r2) {
  var i2 = n2.havingBaseStyle(t3), a2 = U(r2.concat(i2.sizingClasses(n2)), [e6], n2), o2 = i2.sizeMultiplier / n2.sizeMultiplier;
  return a2.height *= o2, a2.depth *= o2, a2.maxFontSize = i2.sizeMultiplier, a2;
}, tr = function(e6, t3, n2) {
  var r2 = t3.havingBaseStyle(n2), i2 = (1 - t3.sizeMultiplier / r2.sizeMultiplier) * t3.fontMetrics().axisHeight;
  e6.classes.push(`delimcenter`), e6.style.top = O(i2), e6.height -= i2, e6.depth += i2;
}, nr = function(e6, t3, n2, r2, i2, a2) {
  var o2 = er(bt(e6, `Main-Regular`, i2, r2), t3, r2, a2);
  return n2 && tr(o2, r2, t3), o2;
}, rr = function(e6, t3, n2, r2) {
  return bt(e6, `Size` + t3 + `-Regular`, n2, r2);
}, ir = function(e6, t3, n2, r2, i2, a2) {
  var o2 = rr(e6, t3, i2, r2), s2 = er(U([`delimsizing`, `size` + t3], [o2], r2), T.TEXT, r2, a2);
  return n2 && tr(s2, r2, T.TEXT), s2;
}, ar = function(e6, t3, n2) {
  return { type: `elem`, elem: U([`delimsizinginner`, t3 === `Size1-Regular` ? `delim-size1` : `delim-size4`], [U([], [bt(e6, t3, n2)])]) };
}, or = function(e6, t3, n2) {
  var r2 = Be[`Size4-Regular`][e6.charCodeAt(0)] ? Be[`Size4-Regular`][e6.charCodeAt(0)][4] : Be[`Size1-Regular`][e6.charCodeAt(0)][4], i2 = Dt([], [new Pe([new Fe(`inner`, _e(e6, Math.round(1e3 * t3)))], { width: O(r2), height: O(t3), style: `width:` + O(r2), viewBox: `0 0 ` + 1e3 * r2 + ` ` + Math.round(1e3 * t3), preserveAspectRatio: `xMinYMin` })], n2);
  return i2.height = t3, i2.style.height = O(t3), i2.style.width = O(r2), { type: `elem`, elem: i2 };
}, sr = 8e-3, cr = { type: `kern`, size: -1 * sr }, lr = /* @__PURE__ */ new Set([`|`, `\\lvert`, `\\rvert`, `\\vert`]), ur = /* @__PURE__ */ new Set([`\\|`, `\\lVert`, `\\rVert`, `\\Vert`]), dr = function(e6, t3, n2, r2, i2, a2) {
  var o2, s2, c2, l2, u2 = ``, d2 = 0;
  o2 = c2 = l2 = e6, s2 = null;
  var f2 = `Size1-Regular`;
  e6 === `\\uparrow` ? c2 = l2 = `\u23D0` : e6 === `\\Uparrow` ? c2 = l2 = `\u2016` : e6 === `\\downarrow` ? o2 = c2 = `\u23D0` : e6 === `\\Downarrow` ? o2 = c2 = `\u2016` : e6 === `\\updownarrow` ? (o2 = `\\uparrow`, c2 = `\u23D0`, l2 = `\\downarrow`) : e6 === `\\Updownarrow` ? (o2 = `\\Uparrow`, c2 = `\u2016`, l2 = `\\Downarrow`) : lr.has(e6) ? (c2 = `\u2223`, u2 = `vert`, d2 = 333) : ur.has(e6) ? (c2 = `\u2225`, u2 = `doublevert`, d2 = 556) : e6 === `[` || e6 === `\\lbrack` ? (o2 = `\u23A1`, c2 = `\u23A2`, l2 = `\u23A3`, f2 = `Size4-Regular`, u2 = `lbrack`, d2 = 667) : e6 === `]` || e6 === `\\rbrack` ? (o2 = `\u23A4`, c2 = `\u23A5`, l2 = `\u23A6`, f2 = `Size4-Regular`, u2 = `rbrack`, d2 = 667) : e6 === `\\lfloor` || e6 === `\u230A` ? (c2 = o2 = `\u23A2`, l2 = `\u23A3`, f2 = `Size4-Regular`, u2 = `lfloor`, d2 = 667) : e6 === `\\lceil` || e6 === `\u2308` ? (o2 = `\u23A1`, c2 = l2 = `\u23A2`, f2 = `Size4-Regular`, u2 = `lceil`, d2 = 667) : e6 === `\\rfloor` || e6 === `\u230B` ? (c2 = o2 = `\u23A5`, l2 = `\u23A6`, f2 = `Size4-Regular`, u2 = `rfloor`, d2 = 667) : e6 === `\\rceil` || e6 === `\u2309` ? (o2 = `\u23A4`, c2 = l2 = `\u23A5`, f2 = `Size4-Regular`, u2 = `rceil`, d2 = 667) : e6 === `(` || e6 === `\\lparen` ? (o2 = `\u239B`, c2 = `\u239C`, l2 = `\u239D`, f2 = `Size4-Regular`, u2 = `lparen`, d2 = 875) : e6 === `)` || e6 === `\\rparen` ? (o2 = `\u239E`, c2 = `\u239F`, l2 = `\u23A0`, f2 = `Size4-Regular`, u2 = `rparen`, d2 = 875) : e6 === `\\{` || e6 === `\\lbrace` ? (o2 = `\u23A7`, s2 = `\u23A8`, l2 = `\u23A9`, c2 = `\u23AA`, f2 = `Size4-Regular`) : e6 === `\\}` || e6 === `\\rbrace` ? (o2 = `\u23AB`, s2 = `\u23AC`, l2 = `\u23AD`, c2 = `\u23AA`, f2 = `Size4-Regular`) : e6 === `\\lgroup` || e6 === `\u27EE` ? (o2 = `\u23A7`, l2 = `\u23A9`, c2 = `\u23AA`, f2 = `Size4-Regular`) : e6 === `\\rgroup` || e6 === `\u27EF` ? (o2 = `\u23AB`, l2 = `\u23AD`, c2 = `\u23AA`, f2 = `Size4-Regular`) : e6 === `\\lmoustache` || e6 === `\u23B0` ? (o2 = `\u23A7`, l2 = `\u23AD`, c2 = `\u23AA`, f2 = `Size4-Regular`) : (e6 === `\\rmoustache` || e6 === `\u23B1`) && (o2 = `\u23AB`, l2 = `\u23A9`, c2 = `\u23AA`, f2 = `Size4-Regular`);
  var p2 = $n(o2, f2, i2), m2 = p2.height + p2.depth, h2 = $n(c2, f2, i2), g2 = h2.height + h2.depth, _2 = $n(l2, f2, i2), v2 = _2.height + _2.depth, y2 = 0, b2 = 1;
  if (s2 !== null) {
    var x2 = $n(s2, f2, i2);
    y2 = x2.height + x2.depth, b2 = 2;
  }
  var S2 = m2 + v2 + y2, C2 = S2 + Math.max(0, Math.ceil((t3 - S2) / (b2 * g2))) * b2 * g2, ee2 = r2.fontMetrics().axisHeight;
  n2 && (ee2 *= r2.sizeMultiplier);
  var te2 = C2 / 2 - ee2, w2 = [];
  if (u2.length > 0) {
    var ne2 = C2 - m2 - v2, re2 = Math.round(C2 * 1e3), ie2 = ye(u2, Math.round(ne2 * 1e3)), ae2 = new Fe(u2, ie2), oe2 = O(d2 / 1e3), se2 = O(re2 / 1e3), E2 = Dt([], [new Pe([ae2], { width: oe2, height: se2, viewBox: `0 0 ` + d2 + ` ` + re2 })], r2);
    E2.height = re2 / 1e3, E2.style.width = oe2, E2.style.height = se2, w2.push({ type: `elem`, elem: E2 });
  } else {
    if (w2.push(ar(l2, f2, i2)), w2.push(cr), s2 === null) {
      var ce2 = C2 - m2 - v2 + 2 * sr;
      w2.push(or(c2, ce2, r2));
    } else {
      var le2 = (C2 - m2 - v2 - y2) / 2 + 2 * sr;
      w2.push(or(c2, le2, r2)), w2.push(cr), w2.push(ar(s2, f2, i2)), w2.push(cr), w2.push(or(c2, le2, r2));
    }
    w2.push(cr), w2.push(ar(o2, f2, i2));
  }
  var ue2 = r2.havingBaseStyle(T.TEXT);
  return er(U([`delimsizing`, `mult`], [W({ positionType: `bottom`, positionData: te2, children: w2 })], ue2), T.TEXT, r2, a2);
}, fr = 80, pr = 0.08, mr = function(e6, t3, n2, r2, i2) {
  return Dt([`hide-tail`], [new Pe([new Fe(e6, ge(e6, r2, n2))], { width: `400em`, height: O(t3), viewBox: `0 0 400000 ` + n2, preserveAspectRatio: `xMinYMin slice` })], i2);
}, hr = function(e6, t3) {
  var n2 = t3.havingBaseSizing(), r2 = Tr(`\\surd`, e6 * n2.sizeMultiplier, Cr, n2), i2 = n2.sizeMultiplier, a2 = Math.max(0, t3.minRuleThickness - t3.fontMetrics().sqrtRuleThickness), o2, s2 = 0, c2 = 0, l2 = 0, u2;
  return r2.type === `small` ? (l2 = 1e3 + 1e3 * a2 + fr, e6 < 1 ? i2 = 1 : e6 < 1.4 && (i2 = 0.7), s2 = (1 + a2 + pr) / i2, c2 = (1 + a2) / i2, o2 = mr(`sqrtMain`, s2, l2, a2, t3), o2.style.minWidth = `0.853em`, u2 = 0.833 / i2) : r2.type === `large` ? (l2 = (1e3 + fr) * yr[r2.size], c2 = (yr[r2.size] + a2) / i2, s2 = (yr[r2.size] + a2 + pr) / i2, o2 = mr(`sqrtSize` + r2.size, s2, l2, a2, t3), o2.style.minWidth = `1.02em`, u2 = 1 / i2) : (s2 = e6 + a2 + pr, c2 = e6 + a2, l2 = Math.floor(1e3 * e6 + a2) + fr, o2 = mr(`sqrtTall`, s2, l2, a2, t3), o2.style.minWidth = `0.742em`, u2 = 1.056), o2.height = c2, o2.style.height = O(s2), { span: o2, advanceWidth: u2, ruleWidth: (t3.fontMetrics().sqrtRuleThickness + a2) * i2 };
}, gr = /* @__PURE__ */ new Set([`(`, `\\lparen`, `)`, `\\rparen`, `[`, `\\lbrack`, `]`, `\\rbrack`, `\\{`, `\\lbrace`, `\\}`, `\\rbrace`, `\\lfloor`, `\\rfloor`, `\u230A`, `\u230B`, `\\lceil`, `\\rceil`, `\u2308`, `\u2309`, `\\surd`]), _r = /* @__PURE__ */ new Set([`\\uparrow`, `\\downarrow`, `\\updownarrow`, `\\Uparrow`, `\\Downarrow`, `\\Updownarrow`, `|`, `\\|`, `\\vert`, `\\Vert`, `\\lvert`, `\\rvert`, `\\lVert`, `\\rVert`, `\\lgroup`, `\\rgroup`, `\u27EE`, `\u27EF`, `\\lmoustache`, `\\rmoustache`, `\u23B0`, `\u23B1`]), vr = /* @__PURE__ */ new Set([`<`, `>`, `\\langle`, `\\rangle`, `/`, `\\backslash`, `\\lt`, `\\gt`]), yr = [0, 1.2, 1.8, 2.4, 3], br = function(t3, n2, r2, i2, a2) {
  if (t3 === `<` || t3 === `\\lt` || t3 === `\u27E8` ? t3 = `\\langle` : (t3 === `>` || t3 === `\\gt` || t3 === `\u27E9`) && (t3 = `\\rangle`), gr.has(t3) || vr.has(t3)) return ir(t3, n2, false, r2, i2, a2);
  if (_r.has(t3)) return dr(t3, yr[n2], false, r2, i2, a2);
  throw new e(`Illegal delimiter: '` + t3 + `'`);
}, xr = [{ type: `small`, style: T.SCRIPTSCRIPT }, { type: `small`, style: T.SCRIPT }, { type: `small`, style: T.TEXT }, { type: `large`, size: 1 }, { type: `large`, size: 2 }, { type: `large`, size: 3 }, { type: `large`, size: 4 }], Sr = [{ type: `small`, style: T.SCRIPTSCRIPT }, { type: `small`, style: T.SCRIPT }, { type: `small`, style: T.TEXT }, { type: `stack` }], Cr = [{ type: `small`, style: T.SCRIPTSCRIPT }, { type: `small`, style: T.SCRIPT }, { type: `small`, style: T.TEXT }, { type: `large`, size: 1 }, { type: `large`, size: 2 }, { type: `large`, size: 3 }, { type: `large`, size: 4 }, { type: `stack` }], wr = function(e6) {
  if (e6.type === `small`) return `Main-Regular`;
  if (e6.type === `large`) return `Size` + e6.size + `-Regular`;
  if (e6.type === `stack`) return `Size4-Regular`;
  var t3 = e6.type;
  throw Error(`Add support for delim type '` + t3 + `' here.`);
}, Tr = function(e6, t3, n2, r2) {
  for (var i2 = Math.min(2, 3 - r2.style.size); i2 < n2.length; i2++) {
    var a2 = n2[i2];
    if (a2.type === `stack`) break;
    var o2 = $n(e6, wr(a2), `math`), s2 = o2.height + o2.depth;
    if (a2.type === `small`) {
      var c2 = r2.havingBaseStyle(a2.style);
      s2 *= c2.sizeMultiplier;
    }
    if (s2 > t3) return a2;
  }
  return n2[n2.length - 1];
}, Er = function(e6, t3, n2, r2, i2, a2) {
  e6 === `<` || e6 === `\\lt` || e6 === `\u27E8` ? e6 = `\\langle` : (e6 === `>` || e6 === `\\gt` || e6 === `\u27E9`) && (e6 = `\\rangle`);
  var o2 = vr.has(e6) ? xr : gr.has(e6) ? Cr : Sr, s2 = Tr(e6, t3, o2, r2);
  return s2.type === `small` ? nr(e6, s2.style, n2, r2, i2, a2) : s2.type === `large` ? ir(e6, s2.size, n2, r2, i2, a2) : dr(e6, t3, n2, r2, i2, a2);
}, Dr = function(e6, t3, n2, r2, i2, a2) {
  var o2 = r2.fontMetrics().axisHeight * r2.sizeMultiplier, s2 = 901, c2 = 5 / r2.fontMetrics().ptPerEm, l2 = Math.max(t3 - o2, n2 + o2);
  return Er(e6, Math.max(l2 / 500 * s2, 2 * l2 - c2), true, r2, i2, a2);
}, Or = { "\\bigl": { mclass: `mopen`, size: 1 }, "\\Bigl": { mclass: `mopen`, size: 2 }, "\\biggl": { mclass: `mopen`, size: 3 }, "\\Biggl": { mclass: `mopen`, size: 4 }, "\\bigr": { mclass: `mclose`, size: 1 }, "\\Bigr": { mclass: `mclose`, size: 2 }, "\\biggr": { mclass: `mclose`, size: 3 }, "\\Biggr": { mclass: `mclose`, size: 4 }, "\\bigm": { mclass: `mrel`, size: 1 }, "\\Bigm": { mclass: `mrel`, size: 2 }, "\\biggm": { mclass: `mrel`, size: 3 }, "\\Biggm": { mclass: `mrel`, size: 4 }, "\\big": { mclass: `mord`, size: 1 }, "\\Big": { mclass: `mord`, size: 2 }, "\\bigg": { mclass: `mord`, size: 3 }, "\\Bigg": { mclass: `mord`, size: 4 } }, kr = new Set(`(,\\lparen,),\\rparen,[,\\lbrack,],\\rbrack,\\{,\\lbrace,\\},\\rbrace,\\lfloor,\\rfloor,\u230A,\u230B,\\lceil,\\rceil,\u2308,\u2309,<,>,\\langle,\u27E8,\\rangle,\u27E9,\\lt,\\gt,\\lvert,\\rvert,\\lVert,\\rVert,\\lgroup,\\rgroup,\u27EE,\u27EF,\\lmoustache,\\rmoustache,\u23B0,\u23B1,/,\\backslash,|,\\vert,\\|,\\Vert,\\uparrow,\\Uparrow,\\downarrow,\\Downarrow,\\updownarrow,\\Updownarrow,.`.split(`,`));
function Ar(t3, n2) {
  var r2 = Mn(t3);
  if (r2 && kr.has(r2.text)) return r2;
  throw r2 ? new e(`Invalid delimiter '` + r2.text + `' after '` + n2.funcName + `'`, t3) : new e(`Invalid delimiter type '` + t3.type + `'`, t3);
}
K({ type: `delimsizing`, names: [`\\bigl`, `\\Bigl`, `\\biggl`, `\\Biggl`, `\\bigr`, `\\Bigr`, `\\biggr`, `\\Biggr`, `\\bigm`, `\\Bigm`, `\\biggm`, `\\Biggm`, `\\big`, `\\Big`, `\\bigg`, `\\Bigg`], props: { numArgs: 1, argTypes: [`primitive`] }, handler: (e6, t3) => {
  var n2 = Ar(t3[0], e6);
  return { type: `delimsizing`, mode: e6.parser.mode, size: Or[e6.funcName].size, mclass: Or[e6.funcName].mclass, delim: n2.text };
}, htmlBuilder: (e6, t3) => e6.delim === `.` ? U([e6.mclass]) : br(e6.delim, e6.size, t3, e6.mode, [e6.mclass]), mathmlBuilder: (e6) => {
  var t3 = [];
  e6.delim !== `.` && t3.push(un(e6.delim, e6.mode));
  var n2 = new Y(`mo`, t3);
  e6.mclass === `mopen` || e6.mclass === `mclose` ? n2.setAttribute(`fence`, `true`) : n2.setAttribute(`fence`, `false`), n2.setAttribute(`stretchy`, `true`);
  var r2 = O(yr[e6.size]);
  return n2.setAttribute(`minsize`, r2), n2.setAttribute(`maxsize`, r2), n2;
} });
function jr(e6) {
  if (!e6.body) throw Error(`Bug: The leftright ParseNode wasn't fully parsed.`);
}
K({ type: `leftright-right`, names: [`\\right`], props: { numArgs: 1, primitive: true }, handler: (t3, n2) => {
  var r2 = t3.parser.gullet.macros.get(`\\current@color`);
  if (r2 && typeof r2 != `string`) throw new e(`\\current@color set to non-string in \\right`);
  return { type: `leftright-right`, mode: t3.parser.mode, delim: Ar(n2[0], t3).text, color: r2 };
} }), K({ type: `leftright`, names: [`\\left`], props: { numArgs: 1, primitive: true }, handler: (e6, t3) => {
  var n2 = Ar(t3[0], e6), r2 = e6.parser;
  ++r2.leftrightDepth;
  var i2 = r2.parseExpression(false);
  --r2.leftrightDepth, r2.expect(`\\right`, false);
  var a2 = Q(r2.parseFunction(), `leftright-right`);
  return { type: `leftright`, mode: r2.mode, body: i2, left: n2.text, right: a2.delim, rightColor: a2.color };
}, htmlBuilder: (e6, t3) => {
  jr(e6);
  for (var n2 = Zt(e6.body, t3, true, [`mopen`, `mclose`]), r2 = 0, i2 = 0, a2 = false, o2 = 0; o2 < n2.length; o2++) n2[o2].isMiddle ? a2 = true : (r2 = Math.max(n2[o2].height, r2), i2 = Math.max(n2[o2].depth, i2));
  r2 *= t3.sizeMultiplier, i2 *= t3.sizeMultiplier;
  var s2 = e6.left === `.` ? nn(t3, [`mopen`]) : Dr(e6.left, r2, i2, t3, e6.mode, [`mopen`]);
  if (n2.unshift(s2), a2) for (var c2 = 1; c2 < n2.length; c2++) {
    var l2 = n2[c2].isMiddle;
    l2 && (n2[c2] = Dr(l2.delim, r2, i2, l2.options, e6.mode, []));
  }
  var u2;
  if (e6.right === `.`) u2 = nn(t3, [`mclose`]);
  else {
    var d2 = e6.rightColor ? t3.withColor(e6.rightColor) : t3;
    u2 = Dr(e6.right, r2, i2, d2, e6.mode, [`mclose`]);
  }
  return n2.push(u2), U([`minner`], n2, t3);
}, mathmlBuilder: (e6, t3) => {
  jr(e6);
  var n2 = mn(e6.body, t3);
  if (e6.left !== `.`) {
    var r2 = new Y(`mo`, [un(e6.left, e6.mode)]);
    r2.setAttribute(`fence`, `true`), n2.unshift(r2);
  }
  if (e6.right !== `.`) {
    var i2 = new Y(`mo`, [un(e6.right, e6.mode)]);
    i2.setAttribute(`fence`, `true`), e6.rightColor && i2.setAttribute(`mathcolor`, e6.rightColor), n2.push(i2);
  }
  return dn(n2);
} }), K({ type: `middle`, names: [`\\middle`], props: { numArgs: 1, primitive: true }, handler: (t3, n2) => {
  var r2 = Ar(n2[0], t3);
  if (!t3.parser.leftrightDepth) throw new e(`\\middle without preceding \\left`, r2);
  return { type: `middle`, mode: t3.parser.mode, delim: r2.text };
}, htmlBuilder: (e6, t3) => {
  var n2;
  return e6.delim === `.` ? n2 = nn(t3, []) : (n2 = br(e6.delim, 1, t3, e6.mode, []), n2.isMiddle = { delim: e6.delim, options: t3 }), n2;
}, mathmlBuilder: (e6, t3) => {
  var n2 = new Y(`mo`, [e6.delim === `\\vert` || e6.delim === `|` ? un(`|`, `text`) : un(e6.delim, e6.mode)]);
  return n2.setAttribute(`fence`, `true`), n2.setAttribute(`lspace`, `0.05em`), n2.setAttribute(`rspace`, `0.05em`), n2;
} });
var Mr = (e6, t3) => {
  var n2 = jt(J(e6.body, t3), t3), r2 = e6.label.slice(1), i2 = t3.sizeMultiplier, a2, o2 = 0, s2 = c(e6.body);
  if (r2 === `sout`) a2 = U([`stretchy`, `sout`]), a2.height = t3.fontMetrics().defaultRuleThickness / i2, o2 = -0.5 * t3.fontMetrics().xHeight;
  else if (r2 === `phase`) {
    var l2 = D({ number: 0.6, unit: `pt` }, t3), u2 = D({ number: 0.35, unit: `ex` }, t3), d2 = t3.havingBaseSizing();
    i2 /= d2.sizeMultiplier;
    var f2 = n2.height + n2.depth + l2 + u2;
    n2.style.paddingLeft = O(f2 / 2 + l2);
    var p2 = Math.floor(1e3 * f2 * i2);
    a2 = Dt([`hide-tail`], [new Pe([new Fe(`phase`, me(p2))], { width: `400em`, height: O(p2 / 1e3), viewBox: `0 0 400000 ` + p2, preserveAspectRatio: `xMinYMin slice` })], t3), a2.style.height = O(f2), o2 = n2.depth + l2 + u2;
  } else {
    /cancel/.test(r2) ? s2 || n2.classes.push(`cancel-pad`) : r2 === `angl` ? n2.classes.push(`anglpad`) : n2.classes.push(`boxpad`);
    var m2 = 0, h2 = 0, g2 = 0;
    /box/.test(r2) ? (g2 = Math.max(t3.fontMetrics().fboxrule, t3.minRuleThickness), m2 = t3.fontMetrics().fboxsep + (r2 === `colorbox` ? 0 : g2), h2 = m2) : r2 === `angl` ? (g2 = Math.max(t3.fontMetrics().defaultRuleThickness, t3.minRuleThickness), m2 = 4 * g2, h2 = Math.max(0, 0.25 - n2.depth)) : (m2 = s2 ? 0.2 : 0, h2 = m2), a2 = An(n2, r2, m2, h2, t3), /fbox|boxed|fcolorbox/.test(r2) ? (a2.style.borderStyle = `solid`, a2.style.borderWidth = O(g2)) : r2 === `angl` && g2 !== 0.049 && (a2.style.borderTopWidth = O(g2), a2.style.borderRightWidth = O(g2)), o2 = n2.depth + h2, e6.backgroundColor && (a2.style.backgroundColor = e6.backgroundColor, e6.borderColor && (a2.style.borderColor = e6.borderColor));
  }
  var _2;
  if (e6.backgroundColor) _2 = W({ positionType: `individualShift`, children: [{ type: `elem`, elem: a2, shift: o2 }, { type: `elem`, elem: n2, shift: 0 }] });
  else {
    var v2 = /cancel|phase/.test(r2) ? [`svg-align`] : [];
    _2 = W({ positionType: `individualShift`, children: [{ type: `elem`, elem: n2, shift: 0 }, { type: `elem`, elem: a2, shift: o2, wrapperClasses: v2 }] });
  }
  return /cancel/.test(r2) && (_2.height = n2.height, _2.depth = n2.depth), /cancel/.test(r2) && !s2 ? U([`mord`, `cancel-lap`], [_2], t3) : U([`mord`], [_2], t3);
}, Nr = (e6, t3) => {
  var n2 = 0, r2 = new Y(e6.label.includes(`colorbox`) ? `mpadded` : `menclose`, [Z(e6.body, t3)]);
  switch (e6.label) {
    case `\\cancel`:
      r2.setAttribute(`notation`, `updiagonalstrike`);
      break;
    case `\\bcancel`:
      r2.setAttribute(`notation`, `downdiagonalstrike`);
      break;
    case `\\phase`:
      r2.setAttribute(`notation`, `phasorangle`);
      break;
    case `\\sout`:
      r2.setAttribute(`notation`, `horizontalstrike`);
      break;
    case `\\fbox`:
      r2.setAttribute(`notation`, `box`);
      break;
    case `\\angl`:
      r2.setAttribute(`notation`, `actuarial`);
      break;
    case `\\fcolorbox`:
    case `\\colorbox`:
      if (n2 = t3.fontMetrics().fboxsep * t3.fontMetrics().ptPerEm, r2.setAttribute(`width`, `+` + 2 * n2 + `pt`), r2.setAttribute(`height`, `+` + 2 * n2 + `pt`), r2.setAttribute(`lspace`, n2 + `pt`), r2.setAttribute(`voffset`, n2 + `pt`), e6.label === `\\fcolorbox`) {
        var i2 = Math.max(t3.fontMetrics().fboxrule, t3.minRuleThickness);
        r2.setAttribute(`style`, `border: ` + O(i2) + ` solid ` + e6.borderColor);
      }
      break;
    case `\\xcancel`:
      r2.setAttribute(`notation`, `updiagonalstrike downdiagonalstrike`);
      break;
  }
  return e6.backgroundColor && r2.setAttribute(`mathbackground`, e6.backgroundColor), r2;
};
K({ type: `enclose`, names: [`\\colorbox`], props: { numArgs: 2, allowedInText: true, argTypes: [`color`, `text`] }, handler(e6, t3, n2) {
  var { parser: r2, funcName: i2 } = e6, a2 = Q(t3[0], `color-token`).color, o2 = t3[1];
  return { type: `enclose`, mode: r2.mode, label: i2, backgroundColor: a2, body: o2 };
}, htmlBuilder: Mr, mathmlBuilder: Nr }), K({ type: `enclose`, names: [`\\fcolorbox`], props: { numArgs: 3, allowedInText: true, argTypes: [`color`, `color`, `text`] }, handler(e6, t3, n2) {
  var { parser: r2, funcName: i2 } = e6, a2 = Q(t3[0], `color-token`).color, o2 = Q(t3[1], `color-token`).color, s2 = t3[2];
  return { type: `enclose`, mode: r2.mode, label: i2, backgroundColor: o2, borderColor: a2, body: s2 };
}, htmlBuilder: Mr, mathmlBuilder: Nr }), K({ type: `enclose`, names: [`\\fbox`], props: { numArgs: 1, argTypes: [`hbox`], allowedInText: true }, handler(e6, t3) {
  var { parser: n2 } = e6;
  return { type: `enclose`, mode: n2.mode, label: `\\fbox`, body: t3[0] };
} }), K({ type: `enclose`, names: [`\\cancel`, `\\bcancel`, `\\xcancel`, `\\phase`], props: { numArgs: 1 }, handler(e6, t3) {
  var { parser: n2, funcName: r2 } = e6, i2 = t3[0];
  return { type: `enclose`, mode: n2.mode, label: r2, body: i2 };
}, htmlBuilder: Mr, mathmlBuilder: Nr }), K({ type: `enclose`, names: [`\\sout`], props: { numArgs: 1, allowedInText: true }, handler(e6, t3) {
  var { parser: n2, funcName: r2 } = e6;
  n2.mode === `math` && n2.settings.reportNonstrict(`mathVsSout`, `LaTeX's \\sout works only in text mode`);
  var i2 = t3[0];
  return { type: `enclose`, mode: n2.mode, label: r2, body: i2 };
}, htmlBuilder: Mr, mathmlBuilder: Nr }), K({ type: `enclose`, names: [`\\angl`], props: { numArgs: 1, argTypes: [`hbox`], allowedInText: false }, handler(e6, t3) {
  var { parser: n2 } = e6;
  return { type: `enclose`, mode: n2.mode, label: `\\angl`, body: t3[0] };
} });
var Pr = {};
function Fr(e6) {
  for (var { type: t3, names: n2, props: r2, handler: i2, htmlBuilder: a2, mathmlBuilder: o2 } = e6, s2 = { type: t3, numArgs: r2.numArgs || 0, allowedInText: false, numOptionalArgs: 0, handler: i2 }, c2 = 0; c2 < n2.length; ++c2) Pr[n2[c2]] = s2;
  a2 && (Ut[t3] = a2), o2 && (Wt[t3] = o2);
}
var Ir = {};
function $(e6, t3) {
  Ir[e6] = t3;
}
var Lr = class e4 {
  constructor(e6, t3, n2) {
    this.lexer = e6, this.start = t3, this.end = n2;
  }
  static range(t3, n2) {
    return n2 ? !t3 || !t3.loc || !n2.loc || t3.loc.lexer !== n2.loc.lexer ? null : new e4(t3.loc.lexer, t3.loc.start, n2.loc.end) : t3 && t3.loc;
  }
}, Rr = class e5 {
  constructor(e6, t3) {
    this.text = e6, this.loc = t3;
  }
  range(t3, n2) {
    return new e5(n2, Lr.range(this, t3));
  }
};
function zr(e6) {
  var t3 = [];
  e6.consumeSpaces();
  var n2 = e6.fetch().text;
  for (n2 === `\\relax` && (e6.consume(), e6.consumeSpaces(), n2 = e6.fetch().text); n2 === `\\hline` || n2 === `\\hdashline`; ) e6.consume(), t3.push(n2 === `\\hdashline`), e6.consumeSpaces(), n2 = e6.fetch().text;
  return t3;
}
var Br = (t3) => {
  if (!t3.parser.settings.displayMode) throw new e(`{` + t3.envName + `} can be used only in display mode.`);
}, Vr = /* @__PURE__ */ new Set([`gather`, `gather*`]);
function Hr(e6) {
  if (!e6.includes(`ed`)) return !e6.includes(`*`);
}
function Ur(t3, n2, r2) {
  var { hskipBeforeAndAfter: i2, addJot: a2, cols: o2, arraystretch: s2, colSeparationType: c2, autoTag: l2, singleRow: u2, emptySingleRow: d2, maxNumCols: f2, leqno: p2 } = n2;
  if (t3.gullet.beginGroup(), u2 || t3.gullet.macros.set(`\\cr`, `\\\\\\relax`), !s2) {
    var m2 = t3.gullet.expandMacroAsText(`\\arraystretch`);
    if (m2 == null) s2 = 1;
    else if (s2 = parseFloat(m2), !s2 || s2 < 0) throw new e(`Invalid \\arraystretch: ` + m2);
  }
  t3.gullet.beginGroup();
  var h2 = [], g2 = [h2], _2 = [], v2 = [], y2 = l2 == null ? void 0 : [];
  function b2() {
    l2 && t3.gullet.macros.set(`\\@eqnsw`, `1`, true);
  }
  function x2() {
    y2 && (t3.gullet.macros.get(`\\df@tag`) ? (y2.push(t3.subparse([new Rr(`\\df@tag`)])), t3.gullet.macros.set(`\\df@tag`, void 0, true)) : y2.push(!!l2 && t3.gullet.macros.get(`\\@eqnsw`) === `1`));
  }
  for (b2(), v2.push(zr(t3)); ; ) {
    var S2 = t3.parseExpression(false, u2 ? `\\end` : `\\\\`);
    t3.gullet.endGroup(), t3.gullet.beginGroup();
    var C2 = { type: `ordgroup`, mode: t3.mode, body: S2 };
    r2 && (C2 = { type: `styling`, mode: t3.mode, style: r2, body: [C2] }), h2.push(C2);
    var ee2 = t3.fetch().text;
    if (ee2 === `&`) {
      if (f2 && h2.length === f2) {
        if (u2 || c2) throw new e(`Too many tab characters: &`, t3.nextToken);
        t3.settings.reportNonstrict(`textEnv`, `Too few columns specified in the {array} column argument.`);
      }
      t3.consume();
    } else if (ee2 === `\\end`) {
      x2(), h2.length === 1 && C2.type === `styling` && C2.body.length === 1 && C2.body[0].type === `ordgroup` && C2.body[0].body.length === 0 && (g2.length > 1 || !d2) && g2.pop(), v2.length < g2.length + 1 && v2.push([]);
      break;
    } else if (ee2 === `\\\\`) {
      t3.consume();
      var te2 = void 0;
      t3.gullet.future().text !== ` ` && (te2 = t3.parseSizeGroup(true)), _2.push(te2 ? te2.value : null), x2(), v2.push(zr(t3)), h2 = [], g2.push(h2), b2();
    } else throw new e(`Expected & or \\\\ or \\cr or \\end`, t3.nextToken);
  }
  return t3.gullet.endGroup(), t3.gullet.endGroup(), { type: `array`, mode: t3.mode, addJot: a2, arraystretch: s2, body: g2, cols: o2, rowGaps: _2, hskipBeforeAndAfter: i2, hLinesBeforeRow: v2, colSeparationType: c2, tags: y2, leqno: p2 };
}
function Wr(e6) {
  return e6.slice(0, 1) === `d` ? `display` : `text`;
}
var Gr = function(t3, n2) {
  var _a;
  var r2, i2, a2 = t3.body.length, o2 = t3.hLinesBeforeRow, s2 = 0, c2 = Array(a2), l2 = [], u2 = Math.max(n2.fontMetrics().arrayRuleWidth, n2.minRuleThickness), d2 = 1 / n2.fontMetrics().ptPerEm, f2 = 5 * d2;
  t3.colSeparationType && t3.colSeparationType === `small` && (f2 = 0.2778 * (n2.havingStyle(T.SCRIPT).sizeMultiplier / n2.sizeMultiplier));
  var p2 = t3.colSeparationType === `CD` ? D({ number: 3, unit: `ex` }, n2) : 12 * d2, m2 = 3 * d2, h2 = t3.arraystretch * p2, g2 = 0.7 * h2, _2 = 0.3 * h2, v2 = 0;
  function y2(e6) {
    for (var t4 = 0; t4 < e6.length; ++t4) t4 > 0 && (v2 += 0.25), l2.push({ pos: v2, isDashed: e6[t4] });
  }
  for (y2(o2[0]), r2 = 0; r2 < t3.body.length; ++r2) {
    var b2 = t3.body[r2], x2 = g2, S2 = _2;
    s2 < b2.length && (s2 = b2.length);
    var C2 = Array(b2.length);
    for (i2 = 0; i2 < b2.length; ++i2) {
      var ee2 = J(b2[i2], n2);
      S2 < ee2.depth && (S2 = ee2.depth), x2 < ee2.height && (x2 = ee2.height), C2[i2] = ee2;
    }
    var te2 = t3.rowGaps[r2], w2 = 0;
    te2 && (w2 = D(te2, n2), w2 > 0 && (w2 += _2, S2 < w2 && (S2 = w2), w2 = 0)), t3.addJot && r2 < t3.body.length - 1 && (S2 += m2), C2.height = x2, C2.depth = S2, v2 += x2, C2.pos = v2, v2 += S2 + w2, c2[r2] = C2, y2(o2[r2 + 1]);
  }
  var ne2 = v2 / 2 + n2.fontMetrics().axisHeight, re2 = t3.cols || [], ie2 = [], ae2, oe2, se2 = [];
  if (t3.tags && t3.tags.some((e6) => e6)) for (r2 = 0; r2 < a2; ++r2) {
    var E2 = c2[r2], ce2 = E2.pos - ne2, le2 = t3.tags[r2], ue2 = void 0;
    ue2 = le2 === true ? U([`eqn-num`], [], n2) : le2 === false ? U([], [], n2) : U([], Zt(le2, n2, true), n2), ue2.depth = E2.depth, ue2.height = E2.height, se2.push({ type: `elem`, elem: ue2, shift: ce2 });
  }
  for (i2 = 0, oe2 = 0; i2 < s2 || oe2 < re2.length; ++i2, ++oe2) {
    for (var de2 = re2[oe2], fe2 = true; ((_a = pe2 = de2) == null ? void 0 : _a.type) === `separator`; ) {
      var pe2;
      if (fe2 || (ae2 = U([`arraycolsep`], []), ae2.style.width = O(n2.fontMetrics().doubleRuleSep), ie2.push(ae2)), de2.separator === `|` || de2.separator === `:`) {
        var me2 = de2.separator === `|` ? `solid` : `dashed`, he2 = U([`vertical-separator`], [], n2);
        he2.style.height = O(v2), he2.style.borderRightWidth = O(u2), he2.style.borderRightStyle = me2, he2.style.margin = `0 ` + O(-u2 / 2);
        var ge2 = v2 - ne2;
        ge2 && (he2.style.verticalAlign = O(-ge2)), ie2.push(he2);
      } else throw new e(`Invalid separator type: ` + de2.separator);
      oe2++, de2 = re2[oe2], fe2 = false;
    }
    if (!(i2 >= s2)) {
      var _e2 = void 0;
      (i2 > 0 || t3.hskipBeforeAndAfter) && (_e2 = (de2 == null ? void 0 : de2.pregap) ?? f2, _e2 !== 0 && (ae2 = U([`arraycolsep`], []), ae2.style.width = O(_e2), ie2.push(ae2)));
      var ve2 = [];
      for (r2 = 0; r2 < a2; ++r2) {
        var ye2 = c2[r2], be2 = ye2[i2];
        if (be2) {
          var xe2 = ye2.pos - ne2;
          be2.depth = ye2.depth, be2.height = ye2.height, ve2.push({ type: `elem`, elem: be2, shift: xe2 });
        }
      }
      var Se2 = W({ positionType: `individualShift`, children: ve2 }), Ce2 = U([`col-align-` + ((de2 == null ? void 0 : de2.align) || `c`)], [Se2]);
      ie2.push(Ce2), (i2 < s2 - 1 || t3.hskipBeforeAndAfter) && (_e2 = (de2 == null ? void 0 : de2.postgap) ?? f2, _e2 !== 0 && (ae2 = U([`arraycolsep`], []), ae2.style.width = O(_e2), ie2.push(ae2)));
    }
  }
  var we2 = U([`mtable`], ie2);
  if (l2.length > 0) {
    for (var Te2 = Ot(`hline`, n2, u2), Ee2 = Ot(`hdashline`, n2, u2), De2 = [{ type: `elem`, elem: we2, shift: 0 }]; l2.length > 0; ) {
      var Oe2 = l2.pop(), ke2 = Oe2.pos - ne2;
      Oe2.isDashed ? De2.push({ type: `elem`, elem: Ee2, shift: ke2 }) : De2.push({ type: `elem`, elem: Te2, shift: ke2 });
    }
    we2 = W({ positionType: `individualShift`, children: De2 });
  }
  if (se2.length === 0) return U([`mord`], [we2], n2);
  var Ae2 = U([`tag`], [W({ positionType: `individualShift`, children: se2 })], n2);
  return At([we2, Ae2]);
}, Kr = { c: `center `, l: `left `, r: `right ` }, qr = function(e6, t3) {
  for (var n2 = [], r2 = new Y(`mtd`, [], [`mtr-glue`]), i2 = new Y(`mtd`, [], [`mml-eqn-num`]), a2 = 0; a2 < e6.body.length; a2++) {
    for (var o2 = e6.body[a2], s2 = [], c2 = 0; c2 < o2.length; c2++) s2.push(new Y(`mtd`, [Z(o2[c2], t3)]));
    e6.tags && e6.tags[a2] && (s2.unshift(r2), s2.push(r2), e6.leqno ? s2.unshift(i2) : s2.push(i2)), n2.push(new Y(`mtr`, s2));
  }
  var l2 = new Y(`mtable`, n2), u2 = e6.arraystretch === 0.5 ? 0.1 : 0.16 + e6.arraystretch - 1 + (e6.addJot ? 0.09 : 0);
  l2.setAttribute(`rowspacing`, O(u2));
  var d2 = ``, f2 = ``;
  if (e6.cols && e6.cols.length > 0) {
    var p2 = e6.cols, m2 = ``, h2 = false, g2 = 0, _2 = p2.length;
    p2[0].type === `separator` && (d2 += `top `, g2 = 1), p2[p2.length - 1].type === `separator` && (d2 += `bottom `, --_2);
    for (var v2 = g2; v2 < _2; v2++) {
      var y2 = p2[v2];
      y2.type === `align` ? (f2 += Kr[y2.align], h2 && (m2 += `none `), h2 = true) : y2.type === `separator` && (h2 && (h2 = (m2 += y2.separator === `|` ? `solid ` : `dashed `, false)));
    }
    l2.setAttribute(`columnalign`, f2.trim()), /[sd]/.test(m2) && l2.setAttribute(`columnlines`, m2.trim());
  }
  if (e6.colSeparationType === `align`) {
    for (var b2 = e6.cols || [], x2 = ``, S2 = 1; S2 < b2.length; S2++) x2 += S2 % 2 ? `0em ` : `1em `;
    l2.setAttribute(`columnspacing`, x2.trim());
  } else e6.colSeparationType === `alignat` || e6.colSeparationType === `gather` ? l2.setAttribute(`columnspacing`, `0em`) : e6.colSeparationType === `small` ? l2.setAttribute(`columnspacing`, `0.2778em`) : e6.colSeparationType === `CD` ? l2.setAttribute(`columnspacing`, `0.5em`) : l2.setAttribute(`columnspacing`, `1em`);
  var C2 = ``, ee2 = e6.hLinesBeforeRow;
  d2 += ee2[0].length > 0 ? `left ` : ``, d2 += ee2[ee2.length - 1].length > 0 ? `right ` : ``;
  for (var te2 = 1; te2 < ee2.length - 1; te2++) C2 += ee2[te2].length === 0 ? `none ` : ee2[te2][0] ? `dashed ` : `solid `;
  return /[sd]/.test(C2) && l2.setAttribute(`rowlines`, C2.trim()), d2 !== `` && (l2 = new Y(`menclose`, [l2]), l2.setAttribute(`notation`, d2.trim())), e6.arraystretch && e6.arraystretch < 1 && (l2 = new Y(`mstyle`, [l2]), l2.setAttribute(`scriptlevel`, `1`)), l2;
}, Jr = function(t3, n2) {
  t3.envName.includes(`ed`) || Br(t3);
  var r2 = [], i2 = t3.envName.includes(`at`) ? `alignat` : `align`, a2 = t3.envName === `split`, o2 = Ur(t3.parser, { cols: r2, addJot: true, autoTag: a2 ? void 0 : Hr(t3.envName), emptySingleRow: true, colSeparationType: i2, maxNumCols: a2 ? 2 : void 0, leqno: t3.parser.settings.leqno }, `display`), s2 = 0, c2 = 0, l2 = { type: `ordgroup`, mode: t3.mode, body: [] };
  if (n2[0] && n2[0].type === `ordgroup`) {
    for (var u2 = ``, d2 = 0; d2 < n2[0].body.length; d2++) {
      var f2 = Q(n2[0].body[d2], `textord`);
      u2 += f2.text;
    }
    s2 = Number(u2), c2 = s2 * 2;
  }
  var p2 = !c2;
  o2.body.forEach(function(t4) {
    for (var n3 = 1; n3 < t4.length; n3 += 2) Q(Q(t4[n3], `styling`).body[0], `ordgroup`).body.unshift(l2);
    if (p2) c2 < t4.length && (c2 = t4.length);
    else {
      var r3 = t4.length / 2;
      if (s2 < r3) throw new e(`Too many math in a row: ` + (`expected ` + s2 + `, but got ` + r3), t4[0]);
    }
  });
  for (var m2 = 0; m2 < c2; ++m2) {
    var h2 = `r`, g2 = 0;
    m2 % 2 == 1 ? h2 = `l` : m2 > 0 && p2 && (g2 = 1), r2[m2] = { type: `align`, align: h2, pregap: g2, postgap: 0 };
  }
  return o2.colSeparationType = p2 ? `align` : `alignat`, o2;
};
Fr({ type: `array`, names: [`array`, `darray`], props: { numArgs: 1 }, handler(t3, n2) {
  var r2 = (Mn(n2[0]) ? [n2[0]] : Q(n2[0], `ordgroup`).body).map(function(t4) {
    var n3 = jn(t4).text;
    if (`lcr`.includes(n3)) return { type: `align`, align: n3 };
    if (n3 === `|`) return { type: `separator`, separator: `|` };
    if (n3 === `:`) return { type: `separator`, separator: `:` };
    throw new e(`Unknown column alignment: ` + n3, t4);
  }), i2 = { cols: r2, hskipBeforeAndAfter: true, maxNumCols: r2.length };
  return Ur(t3.parser, i2, Wr(t3.envName));
}, htmlBuilder: Gr, mathmlBuilder: qr }), Fr({ type: `array`, names: [`matrix`, `pmatrix`, `bmatrix`, `Bmatrix`, `vmatrix`, `Vmatrix`, `matrix*`, `pmatrix*`, `bmatrix*`, `Bmatrix*`, `vmatrix*`, `Vmatrix*`], props: { numArgs: 0 }, handler(t3) {
  var n2 = { matrix: null, pmatrix: [`(`, `)`], bmatrix: [`[`, `]`], Bmatrix: [`\\{`, `\\}`], vmatrix: [`|`, `|`], Vmatrix: [`\\Vert`, `\\Vert`] }[t3.envName.replace(`*`, ``)], r2 = `c`, i2 = { hskipBeforeAndAfter: false, cols: [{ type: `align`, align: r2 }] };
  if (t3.envName.charAt(t3.envName.length - 1) === `*`) {
    var a2 = t3.parser;
    if (a2.consumeSpaces(), a2.fetch().text === `[`) {
      if (a2.consume(), a2.consumeSpaces(), r2 = a2.fetch().text, !`lcr`.includes(r2)) throw new e(`Expected l or c or r`, a2.nextToken);
      a2.consume(), a2.consumeSpaces(), a2.expect(`]`), a2.consume(), i2.cols = [{ type: `align`, align: r2 }];
    }
  }
  var o2 = Ur(t3.parser, i2, Wr(t3.envName)), s2 = Math.max(0, ...o2.body.map((e6) => e6.length));
  return o2.cols = Array(s2).fill({ type: `align`, align: r2 }), n2 ? { type: `leftright`, mode: t3.mode, body: [o2], left: n2[0], right: n2[1], rightColor: void 0 } : o2;
}, htmlBuilder: Gr, mathmlBuilder: qr }), Fr({ type: `array`, names: [`smallmatrix`], props: { numArgs: 0 }, handler(e6) {
  var t3 = Ur(e6.parser, { arraystretch: 0.5 }, `script`);
  return t3.colSeparationType = `small`, t3;
}, htmlBuilder: Gr, mathmlBuilder: qr }), Fr({ type: `array`, names: [`subarray`], props: { numArgs: 1 }, handler(t3, n2) {
  var r2 = (Mn(n2[0]) ? [n2[0]] : Q(n2[0], `ordgroup`).body).map(function(t4) {
    var n3 = jn(t4).text;
    if (`lc`.includes(n3)) return { type: `align`, align: n3 };
    throw new e(`Unknown column alignment: ` + n3, t4);
  });
  if (r2.length > 1) throw new e(`{subarray} can contain only one column`);
  var i2 = { cols: r2, hskipBeforeAndAfter: false, arraystretch: 0.5 }, a2 = Ur(t3.parser, i2, `script`);
  if (a2.body.length > 0 && a2.body[0].length > 1) throw new e(`{subarray} can contain only one column`);
  return a2;
}, htmlBuilder: Gr, mathmlBuilder: qr }), Fr({ type: `array`, names: [`cases`, `dcases`, `rcases`, `drcases`], props: { numArgs: 0 }, handler(e6) {
  var t3 = Ur(e6.parser, { arraystretch: 1.2, cols: [{ type: `align`, align: `l`, pregap: 0, postgap: 1 }, { type: `align`, align: `l`, pregap: 0, postgap: 0 }] }, Wr(e6.envName));
  return { type: `leftright`, mode: e6.mode, body: [t3], left: e6.envName.includes(`r`) ? `.` : `\\{`, right: e6.envName.includes(`r`) ? `\\}` : `.`, rightColor: void 0 };
}, htmlBuilder: Gr, mathmlBuilder: qr }), Fr({ type: `array`, names: [`align`, `align*`, `aligned`, `split`], props: { numArgs: 0 }, handler: Jr, htmlBuilder: Gr, mathmlBuilder: qr }), Fr({ type: `array`, names: [`gathered`, `gather`, `gather*`], props: { numArgs: 0 }, handler(e6) {
  Vr.has(e6.envName) && Br(e6);
  var t3 = { cols: [{ type: `align`, align: `c` }], addJot: true, colSeparationType: `gather`, autoTag: Hr(e6.envName), emptySingleRow: true, leqno: e6.parser.settings.leqno };
  return Ur(e6.parser, t3, `display`);
}, htmlBuilder: Gr, mathmlBuilder: qr }), Fr({ type: `array`, names: [`alignat`, `alignat*`, `alignedat`], props: { numArgs: 1 }, handler: Jr, htmlBuilder: Gr, mathmlBuilder: qr }), Fr({ type: `array`, names: [`equation`, `equation*`], props: { numArgs: 0 }, handler(e6) {
  Br(e6);
  var t3 = { autoTag: Hr(e6.envName), emptySingleRow: true, singleRow: true, maxNumCols: 1, leqno: e6.parser.settings.leqno };
  return Ur(e6.parser, t3, `display`);
}, htmlBuilder: Gr, mathmlBuilder: qr }), Fr({ type: `array`, names: [`CD`], props: { numArgs: 0 }, handler(e6) {
  return Br(e6), Kn(e6.parser);
}, htmlBuilder: Gr, mathmlBuilder: qr }), $(`\\nonumber`, `\\gdef\\@eqnsw{0}`), $(`\\notag`, `\\nonumber`), K({ type: `text`, names: [`\\hline`, `\\hdashline`], props: { numArgs: 0, allowedInText: true, allowedInMath: true }, handler(t3, n2) {
  throw new e(t3.funcName + ` valid only within array environment`);
} });
var Yr = Pr;
K({ type: `environment`, names: [`\\begin`, `\\end`], props: { numArgs: 1, argTypes: [`text`] }, handler(t3, n2) {
  var { parser: r2, funcName: i2 } = t3, a2 = n2[0];
  if (a2.type !== `ordgroup`) throw new e(`Invalid environment name`, a2);
  for (var o2 = ``, s2 = 0; s2 < a2.body.length; ++s2) o2 += Q(a2.body[s2], `textord`).text;
  if (i2 === `\\begin`) {
    if (!Yr.hasOwnProperty(o2)) throw new e(`No such environment: ` + o2, a2);
    var c2 = Yr[o2], { args: l2, optArgs: u2 } = r2.parseArguments(`\\begin{` + o2 + `}`, c2), d2 = { mode: r2.mode, envName: o2, parser: r2 }, f2 = c2.handler(d2, l2, u2);
    r2.expect(`\\end`, false);
    var p2 = r2.nextToken, m2 = Q(r2.parseFunction(), `environment`);
    if (m2.name !== o2) throw new e(`Mismatch: \\begin{` + o2 + `} matched by \\end{` + m2.name + `}`, p2);
    return f2;
  }
  return { type: `environment`, mode: r2.mode, name: o2, nameGroup: a2 };
} });
var Xr = (e6, t3) => {
  var n2 = e6.font, r2 = t3.withFont(n2);
  return J(e6.body, r2);
}, Zr = (e6, t3) => {
  var n2 = e6.font, r2 = t3.withFont(n2);
  return Z(e6.body, r2);
}, Qr = { "\\Bbb": `\\mathbb`, "\\bold": `\\mathbf`, "\\frak": `\\mathfrak`, "\\bm": `\\boldsymbol` };
K({ type: `font`, names: [`\\mathrm`, `\\mathit`, `\\mathbf`, `\\mathnormal`, `\\mathsfit`, `\\mathbb`, `\\mathcal`, `\\mathfrak`, `\\mathscr`, `\\mathsf`, `\\mathtt`, `\\Bbb`, `\\bold`, `\\frak`], props: { numArgs: 1, allowedInArgument: true }, handler: (e6, t3) => {
  var { parser: n2, funcName: r2 } = e6, i2 = Kt(t3[0]), a2 = r2;
  return a2 in Qr && (a2 = Qr[a2]), { type: `font`, mode: n2.mode, font: a2.slice(1), body: i2 };
}, htmlBuilder: Xr, mathmlBuilder: Zr }), K({ type: `mclass`, names: [`\\boldsymbol`, `\\bm`], props: { numArgs: 1 }, handler: (e6, t3) => {
  var { parser: n2 } = e6, r2 = t3[0];
  return { type: `mclass`, mode: n2.mode, mclass: Bn(r2), body: [{ type: `font`, mode: n2.mode, font: `boldsymbol`, body: r2 }], isCharacterBox: c(r2) };
} }), K({ type: `font`, names: [`\\rm`, `\\sf`, `\\tt`, `\\bf`, `\\it`, `\\cal`], props: { numArgs: 0, allowedInText: true }, handler: (e6, t3) => {
  var { parser: n2, funcName: r2, breakOnTokenText: i2 } = e6, { mode: a2 } = n2, o2 = n2.parseExpression(true, i2);
  return { type: `font`, mode: a2, font: `math` + r2.slice(1), body: { type: `ordgroup`, mode: n2.mode, body: o2 } };
}, htmlBuilder: Xr, mathmlBuilder: Zr });
var $r = (e6, t3) => {
  var n2 = t3.style, r2 = n2.fracNum(), i2 = n2.fracDen(), a2 = t3.havingStyle(r2), o2 = J(e6.numer, a2, t3);
  if (e6.continued) {
    var s2 = 8.5 / t3.fontMetrics().ptPerEm, c2 = 3.5 / t3.fontMetrics().ptPerEm;
    o2.height = o2.height < s2 ? s2 : o2.height, o2.depth = o2.depth < c2 ? c2 : o2.depth;
  }
  a2 = t3.havingStyle(i2);
  var l2 = J(e6.denom, a2, t3), u2, d2, f2;
  e6.hasBarLine ? (e6.barSize ? (d2 = D(e6.barSize, t3), u2 = Ot(`frac-line`, t3, d2)) : u2 = Ot(`frac-line`, t3), d2 = u2.height, f2 = u2.height) : (u2 = null, d2 = 0, f2 = t3.fontMetrics().defaultRuleThickness);
  var p2, m2, h2;
  n2.size === T.DISPLAY.size ? (p2 = t3.fontMetrics().num1, m2 = d2 > 0 ? 3 * f2 : 7 * f2, h2 = t3.fontMetrics().denom1) : (d2 > 0 ? (p2 = t3.fontMetrics().num2, m2 = f2) : (p2 = t3.fontMetrics().num3, m2 = 3 * f2), h2 = t3.fontMetrics().denom2);
  var g2;
  if (u2) {
    var _2 = t3.fontMetrics().axisHeight;
    p2 - o2.depth - (_2 + 0.5 * d2) < m2 && (p2 += m2 - (p2 - o2.depth - (_2 + 0.5 * d2))), _2 - 0.5 * d2 - (l2.height - h2) < m2 && (h2 += m2 - (_2 - 0.5 * d2 - (l2.height - h2)));
    var v2 = -(_2 - 0.5 * d2);
    g2 = W({ positionType: `individualShift`, children: [{ type: `elem`, elem: l2, shift: h2 }, { type: `elem`, elem: u2, shift: v2 }, { type: `elem`, elem: o2, shift: -p2 }] });
  } else {
    var y2 = p2 - o2.depth - (l2.height - h2);
    y2 < m2 && (p2 += 0.5 * (m2 - y2), h2 += 0.5 * (m2 - y2)), g2 = W({ positionType: `individualShift`, children: [{ type: `elem`, elem: l2, shift: h2 }, { type: `elem`, elem: o2, shift: -p2 }] });
  }
  a2 = t3.havingStyle(n2), g2.height *= a2.sizeMultiplier / t3.sizeMultiplier, g2.depth *= a2.sizeMultiplier / t3.sizeMultiplier;
  var b2 = n2.size === T.DISPLAY.size ? t3.fontMetrics().delim1 : n2.size === T.SCRIPTSCRIPT.size ? t3.havingStyle(T.SCRIPT).fontMetrics().delim2 : t3.fontMetrics().delim2, x2 = e6.leftDelim == null ? nn(t3, [`mopen`]) : Er(e6.leftDelim, b2, true, t3.havingStyle(n2), e6.mode, [`mopen`]), S2 = e6.continued ? U([]) : e6.rightDelim == null ? nn(t3, [`mclose`]) : Er(e6.rightDelim, b2, true, t3.havingStyle(n2), e6.mode, [`mclose`]);
  return U([`mord`].concat(a2.sizingClasses(t3)), [x2, U([`mfrac`], [g2]), S2], t3);
}, ei = (e6, t3) => {
  var n2 = new Y(`mfrac`, [Z(e6.numer, t3), Z(e6.denom, t3)]);
  if (!e6.hasBarLine) n2.setAttribute(`linethickness`, `0px`);
  else if (e6.barSize) {
    var r2 = D(e6.barSize, t3);
    n2.setAttribute(`linethickness`, O(r2));
  }
  if (e6.leftDelim != null || e6.rightDelim != null) {
    var i2 = [];
    if (e6.leftDelim != null) {
      var a2 = new Y(`mo`, [new X(e6.leftDelim.replace(`\\`, ``))]);
      a2.setAttribute(`fence`, `true`), i2.push(a2);
    }
    if (i2.push(n2), e6.rightDelim != null) {
      var o2 = new Y(`mo`, [new X(e6.rightDelim.replace(`\\`, ``))]);
      o2.setAttribute(`fence`, `true`), i2.push(o2);
    }
    return dn(i2);
  }
  return n2;
}, ti = (e6, t3) => t3 ? { type: `styling`, mode: e6.mode, style: t3, body: [e6] } : e6;
K({ type: `genfrac`, names: [`\\cfrac`, `\\dfrac`, `\\frac`, `\\tfrac`, `\\dbinom`, `\\binom`, `\\tbinom`, `\\\\atopfrac`, `\\\\bracefrac`, `\\\\brackfrac`], props: { numArgs: 2, allowedInArgument: true }, handler: (e6, t3) => {
  var { parser: n2, funcName: r2 } = e6, i2 = t3[0], a2 = t3[1], o2, s2 = null, c2 = null;
  switch (r2) {
    case `\\cfrac`:
    case `\\dfrac`:
    case `\\frac`:
    case `\\tfrac`:
      o2 = true;
      break;
    case `\\\\atopfrac`:
      o2 = false;
      break;
    case `\\dbinom`:
    case `\\binom`:
    case `\\tbinom`:
      o2 = false, s2 = `(`, c2 = `)`;
      break;
    case `\\\\bracefrac`:
      o2 = false, s2 = `\\{`, c2 = `\\}`;
      break;
    case `\\\\brackfrac`:
      o2 = false, s2 = `[`, c2 = `]`;
      break;
    default:
      throw Error(`Unrecognized genfrac command`);
  }
  var l2 = r2 === `\\cfrac`, u2 = null;
  return l2 || r2.startsWith(`\\d`) ? u2 = `display` : r2.startsWith(`\\t`) && (u2 = `text`), ti({ type: `genfrac`, mode: n2.mode, numer: i2, denom: a2, continued: l2, hasBarLine: o2, leftDelim: s2, rightDelim: c2, barSize: null }, u2);
}, htmlBuilder: $r, mathmlBuilder: ei }), K({ type: `infix`, names: [`\\over`, `\\choose`, `\\atop`, `\\brace`, `\\brack`], props: { numArgs: 0, infix: true }, handler(e6) {
  var { parser: t3, funcName: n2, token: r2 } = e6, i2;
  switch (n2) {
    case `\\over`:
      i2 = `\\frac`;
      break;
    case `\\choose`:
      i2 = `\\binom`;
      break;
    case `\\atop`:
      i2 = `\\\\atopfrac`;
      break;
    case `\\brace`:
      i2 = `\\\\bracefrac`;
      break;
    case `\\brack`:
      i2 = `\\\\brackfrac`;
      break;
    default:
      throw Error(`Unrecognized infix genfrac command`);
  }
  return { type: `infix`, mode: t3.mode, replaceWith: i2, token: r2 };
} });
var ni = [`display`, `text`, `script`, `scriptscript`], ri = function(e6) {
  var t3 = null;
  return e6.length > 0 && (t3 = e6, t3 = t3 === `.` ? null : t3), t3;
};
K({ type: `genfrac`, names: [`\\genfrac`], props: { numArgs: 6, allowedInArgument: true, argTypes: [`math`, `math`, `size`, `text`, `math`, `math`] }, handler(e6, t3) {
  var { parser: n2 } = e6, r2 = t3[4], i2 = t3[5], a2 = Kt(t3[0]), o2 = a2.type === `atom` && a2.family === `open` ? ri(a2.text) : null, s2 = Kt(t3[1]), c2 = s2.type === `atom` && s2.family === `close` ? ri(s2.text) : null, l2 = Q(t3[2], `size`), u2, d2 = null;
  l2.isBlank ? u2 = true : (d2 = l2.value, u2 = d2.number > 0);
  var f2 = null, p2 = t3[3];
  if (p2.type === `ordgroup`) {
    if (p2.body.length > 0) {
      var m2 = Q(p2.body[0], `textord`);
      f2 = ni[Number(m2.text)];
    }
  } else p2 = Q(p2, `textord`), f2 = ni[Number(p2.text)];
  return ti({ type: `genfrac`, mode: n2.mode, numer: r2, denom: i2, continued: false, hasBarLine: u2, barSize: d2, leftDelim: o2, rightDelim: c2 }, f2);
} }), K({ type: `infix`, names: [`\\above`], props: { numArgs: 1, argTypes: [`size`], infix: true }, handler(e6, t3) {
  var { parser: n2, funcName: r2, token: i2 } = e6;
  return { type: `infix`, mode: n2.mode, replaceWith: `\\\\abovefrac`, size: Q(t3[0], `size`).value, token: i2 };
} }), K({ type: `genfrac`, names: [`\\\\abovefrac`], props: { numArgs: 3, argTypes: [`math`, `size`, `math`] }, handler: (e6, t3) => {
  var { parser: n2, funcName: r2 } = e6, i2 = t3[0], a2 = Q(t3[1], `infix`).size;
  if (!a2) throw Error(`\\\\abovefrac expected size, but got ` + String(a2));
  var o2 = t3[2], s2 = a2.number > 0;
  return { type: `genfrac`, mode: n2.mode, numer: i2, denom: o2, continued: false, hasBarLine: s2, barSize: a2, leftDelim: null, rightDelim: null };
} });
var ii = (e6, t3) => {
  var n2 = t3.style, r2, i2;
  e6.type === `supsub` ? (r2 = e6.sup ? J(e6.sup, t3.havingStyle(n2.sup()), t3) : J(e6.sub, t3.havingStyle(n2.sub()), t3), i2 = Q(e6.base, `horizBrace`)) : i2 = Q(e6, `horizBrace`);
  var a2 = J(i2.base, t3.havingBaseStyle(T.DISPLAY)), o2 = kn(i2, t3), s2;
  if (i2.isOver ? (s2 = W({ positionType: `firstBaseline`, children: [{ type: `elem`, elem: a2 }, { type: `kern`, size: 0.1 }, { type: `elem`, elem: o2 }] }), s2.children[0].children[0].children[1].classes.push(`svg-align`)) : (s2 = W({ positionType: `bottom`, positionData: a2.depth + 0.1 + o2.height, children: [{ type: `elem`, elem: o2 }, { type: `kern`, size: 0.1 }, { type: `elem`, elem: a2 }] }), s2.children[0].children[0].children[0].classes.push(`svg-align`)), r2) {
    var c2 = U([`minner`, i2.isOver ? `mover` : `munder`], [s2], t3);
    s2 = i2.isOver ? W({ positionType: `firstBaseline`, children: [{ type: `elem`, elem: c2 }, { type: `kern`, size: 0.2 }, { type: `elem`, elem: r2 }] }) : W({ positionType: `bottom`, positionData: c2.depth + 0.2 + r2.height + r2.depth, children: [{ type: `elem`, elem: r2 }, { type: `kern`, size: 0.2 }, { type: `elem`, elem: c2 }] });
  }
  return U([`minner`, i2.isOver ? `mover` : `munder`], [s2], t3);
};
K({ type: `horizBrace`, names: [`\\overbrace`, `\\underbrace`, `\\overbracket`, `\\underbracket`], props: { numArgs: 1 }, handler(e6, t3) {
  var { parser: n2, funcName: r2 } = e6;
  return { type: `horizBrace`, mode: n2.mode, label: r2, isOver: r2.includes(`\\over`), base: t3[0] };
}, htmlBuilder: ii, mathmlBuilder: (e6, t3) => {
  var n2 = En(e6.label);
  return new Y(e6.isOver ? `mover` : `munder`, [Z(e6.base, t3), n2]);
} }), K({ type: `href`, names: [`\\href`], props: { numArgs: 2, argTypes: [`url`, `original`], allowedInText: true }, handler: (e6, t3) => {
  var { parser: n2 } = e6, r2 = t3[1], i2 = Q(t3[0], `url`).url;
  return n2.settings.isTrusted({ command: `\\href`, url: i2 }) ? { type: `href`, mode: n2.mode, href: i2, body: q(r2) } : n2.formatUnsupportedCmd(`\\href`);
}, htmlBuilder: (e6, t3) => {
  var n2 = Zt(e6.body, t3, false);
  return kt(e6.href, [], n2, t3);
}, mathmlBuilder: (e6, t3) => {
  var n2 = hn(e6.body, t3);
  return n2 instanceof Y || (n2 = new Y(`mrow`, [n2])), n2.setAttribute(`href`, e6.href), n2;
} }), K({ type: `href`, names: [`\\url`], props: { numArgs: 1, argTypes: [`url`], allowedInText: true }, handler: (e6, t3) => {
  var { parser: n2 } = e6, r2 = Q(t3[0], `url`).url;
  if (!n2.settings.isTrusted({ command: `\\url`, url: r2 })) return n2.formatUnsupportedCmd(`\\url`);
  for (var i2 = [], a2 = 0; a2 < r2.length; a2++) {
    var o2 = r2[a2];
    o2 === `~` && (o2 = `\\textasciitilde`), i2.push({ type: `textord`, mode: `text`, text: o2 });
  }
  var s2 = { type: `text`, mode: n2.mode, font: `\\texttt`, body: i2 };
  return { type: `href`, mode: n2.mode, href: r2, body: q(s2) };
} }), K({ type: `hbox`, names: [`\\hbox`], props: { numArgs: 1, argTypes: [`text`], allowedInText: true, primitive: true }, handler(e6, t3) {
  var { parser: n2 } = e6;
  return { type: `hbox`, mode: n2.mode, body: q(t3[0]) };
}, htmlBuilder(e6, t3) {
  return At(Zt(e6.body, t3, false));
}, mathmlBuilder(e6, t3) {
  return new Y(`mrow`, mn(e6.body, t3));
} }), K({ type: `html`, names: [`\\htmlClass`, `\\htmlId`, `\\htmlStyle`, `\\htmlData`], props: { numArgs: 2, argTypes: [`raw`, `original`], allowedInText: true }, handler: (t3, n2) => {
  var { parser: r2, funcName: i2, token: a2 } = t3, o2 = Q(n2[0], `raw`).string, s2 = n2[1];
  r2.settings.strict && r2.settings.reportNonstrict(`htmlExtension`, `HTML extension is disabled on strict mode`);
  var c2, l2 = {};
  switch (i2) {
    case `\\htmlClass`:
      l2.class = o2, c2 = { command: `\\htmlClass`, class: o2 };
      break;
    case `\\htmlId`:
      l2.id = o2, c2 = { command: `\\htmlId`, id: o2 };
      break;
    case `\\htmlStyle`:
      l2.style = o2, c2 = { command: `\\htmlStyle`, style: o2 };
      break;
    case `\\htmlData`:
      for (var u2 = o2.split(`,`), d2 = 0; d2 < u2.length; d2++) {
        var f2 = u2[d2], p2 = f2.indexOf(`=`);
        if (p2 < 0) throw new e(`\\htmlData key/value '` + f2 + `' missing equals sign`);
        var m2 = f2.slice(0, p2), h2 = f2.slice(p2 + 1);
        l2[`data-` + m2.trim()] = h2;
      }
      c2 = { command: `\\htmlData`, attributes: l2 };
      break;
    default:
      throw Error(`Unrecognized html command`);
  }
  return r2.settings.isTrusted(c2) ? { type: `html`, mode: r2.mode, attributes: l2, body: q(s2) } : r2.formatUnsupportedCmd(i2);
}, htmlBuilder: (e6, t3) => {
  var n2 = Zt(e6.body, t3, false), r2 = [`enclosing`];
  e6.attributes.class && r2.push(...e6.attributes.class.trim().split(/\s+/));
  var i2 = U(r2, n2, t3);
  for (var a2 in e6.attributes) a2 !== `class` && e6.attributes.hasOwnProperty(a2) && i2.setAttribute(a2, e6.attributes[a2]);
  return i2;
}, mathmlBuilder: (e6, t3) => hn(e6.body, t3) }), K({ type: `htmlmathml`, names: [`\\html@mathml`], props: { numArgs: 2, allowedInArgument: true, allowedInText: true }, handler: (e6, t3) => {
  var { parser: n2 } = e6;
  return { type: `htmlmathml`, mode: n2.mode, html: q(t3[0]), mathml: q(t3[1]) };
}, htmlBuilder: (e6, t3) => At(Zt(e6.html, t3, false)), mathmlBuilder: (e6, t3) => hn(e6.mathml, t3) });
var ai = function(t3) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t3)) return { number: +t3, unit: `bp` };
  var n2 = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t3);
  if (!n2) throw new e(`Invalid size: '` + t3 + `' in \\includegraphics`);
  var r2 = { number: +(n2[1] + n2[2]), unit: n2[3] };
  if (!Ce(r2)) throw new e(`Invalid unit: '` + r2.unit + `' in \\includegraphics.`);
  return r2;
};
K({ type: `includegraphics`, names: [`\\includegraphics`], props: { numArgs: 1, numOptionalArgs: 1, argTypes: [`raw`, `url`], allowedInText: false }, handler: (t3, n2, r2) => {
  var { parser: i2 } = t3, a2 = { number: 0, unit: `em` }, o2 = { number: 0.9, unit: `em` }, s2 = { number: 0, unit: `em` }, c2 = ``;
  if (r2[0]) for (var l2 = Q(r2[0], `raw`).string.split(`,`), u2 = 0; u2 < l2.length; u2++) {
    var d2 = l2[u2].split(`=`);
    if (d2.length === 2) {
      var f2 = d2[1].trim();
      switch (d2[0].trim()) {
        case `alt`:
          c2 = f2;
          break;
        case `width`:
          a2 = ai(f2);
          break;
        case `height`:
          o2 = ai(f2);
          break;
        case `totalheight`:
          s2 = ai(f2);
          break;
        default:
          throw new e(`Invalid key: '` + d2[0] + `' in \\includegraphics.`);
      }
    }
  }
  var p2 = Q(n2[0], `url`).url;
  return c2 === `` && (c2 = p2, c2 = c2.replace(/^.*[\\/]/, ``), c2 = c2.substring(0, c2.lastIndexOf(`.`))), i2.settings.isTrusted({ command: `\\includegraphics`, url: p2 }) ? { type: `includegraphics`, mode: i2.mode, alt: c2, width: a2, height: o2, totalheight: s2, src: p2 } : i2.formatUnsupportedCmd(`\\includegraphics`);
}, htmlBuilder: (e6, t3) => {
  var n2 = D(e6.height, t3), r2 = 0;
  e6.totalheight.number > 0 && (r2 = D(e6.totalheight, t3) - n2);
  var i2 = 0;
  e6.width.number > 0 && (i2 = D(e6.width, t3));
  var a2 = { height: O(n2 + r2) };
  i2 > 0 && (a2.width = O(i2)), r2 > 0 && (a2.verticalAlign = O(-r2));
  var o2 = new je(e6.src, e6.alt, a2);
  return o2.height = n2, o2.depth = r2, o2;
}, mathmlBuilder: (e6, t3) => {
  var n2 = new Y(`mglyph`, []);
  n2.setAttribute(`alt`, e6.alt);
  var r2 = D(e6.height, t3), i2 = 0;
  if (e6.totalheight.number > 0 && (i2 = D(e6.totalheight, t3) - r2, n2.setAttribute(`valign`, O(-i2))), n2.setAttribute(`height`, O(r2 + i2)), e6.width.number > 0) {
    var a2 = D(e6.width, t3);
    n2.setAttribute(`width`, O(a2));
  }
  return n2.setAttribute(`src`, e6.src), n2;
} }), K({ type: `kern`, names: [`\\kern`, `\\mkern`, `\\hskip`, `\\mskip`], props: { numArgs: 1, argTypes: [`size`], primitive: true, allowedInText: true }, handler(e6, t3) {
  var { parser: n2, funcName: r2 } = e6, i2 = Q(t3[0], `size`);
  if (n2.settings.strict) {
    var a2 = r2[1] === `m`, o2 = i2.value.unit === `mu`;
    a2 ? (o2 || n2.settings.reportNonstrict(`mathVsTextUnits`, `LaTeX's ` + r2 + ` supports only mu units, ` + (`not ` + i2.value.unit + ` units`)), n2.mode !== `math` && n2.settings.reportNonstrict(`mathVsTextUnits`, `LaTeX's ` + r2 + ` works only in math mode`)) : o2 && n2.settings.reportNonstrict(`mathVsTextUnits`, `LaTeX's ` + r2 + ` doesn't support mu units`);
  }
  return { type: `kern`, mode: n2.mode, dimension: i2.value };
}, htmlBuilder(e6, t3) {
  return Nt(e6.dimension, t3);
}, mathmlBuilder(e6, t3) {
  return new sn(D(e6.dimension, t3));
} }), K({ type: `lap`, names: [`\\mathllap`, `\\mathrlap`, `\\mathclap`], props: { numArgs: 1, allowedInText: true }, handler: (e6, t3) => {
  var { parser: n2, funcName: r2 } = e6, i2 = t3[0];
  return { type: `lap`, mode: n2.mode, alignment: r2.slice(5), body: i2 };
}, htmlBuilder: (e6, t3) => {
  var n2;
  e6.alignment === `clap` ? (n2 = U([], [J(e6.body, t3)]), n2 = U([`inner`], [n2], t3)) : n2 = U([`inner`], [J(e6.body, t3)]);
  var r2 = U([`fix`], []), i2 = U([e6.alignment], [n2, r2], t3), a2 = U([`strut`]);
  return a2.style.height = O(i2.height + i2.depth), i2.depth && (a2.style.verticalAlign = O(-i2.depth)), i2.children.unshift(a2), i2 = U([`thinbox`], [i2], t3), U([`mord`, `vbox`], [i2], t3);
}, mathmlBuilder: (e6, t3) => {
  var n2 = new Y(`mpadded`, [Z(e6.body, t3)]);
  if (e6.alignment !== `rlap`) {
    var r2 = e6.alignment === `llap` ? `-1` : `-0.5`;
    n2.setAttribute(`lspace`, r2 + `width`);
  }
  return n2.setAttribute(`width`, `0px`), n2;
} }), K({ type: `styling`, names: [`\\(`, `$`], props: { numArgs: 0, allowedInText: true, allowedInMath: false }, handler(e6, t3) {
  var { funcName: n2, parser: r2 } = e6, i2 = r2.mode;
  r2.switchMode(`math`);
  var a2 = n2 === `\\(` ? `\\)` : `$`, o2 = r2.parseExpression(false, a2);
  return r2.expect(a2), r2.switchMode(i2), { type: `styling`, mode: r2.mode, style: `text`, body: o2 };
} }), K({ type: `text`, names: [`\\)`, `\\]`], props: { numArgs: 0, allowedInText: true, allowedInMath: false }, handler(t3, n2) {
  throw new e(`Mismatched ` + t3.funcName);
} });
var oi = (e6, t3) => {
  switch (t3.style.size) {
    case T.DISPLAY.size:
      return e6.display;
    case T.TEXT.size:
      return e6.text;
    case T.SCRIPT.size:
      return e6.script;
    case T.SCRIPTSCRIPT.size:
      return e6.scriptscript;
    default:
      return e6.text;
  }
};
K({ type: `mathchoice`, names: [`\\mathchoice`], props: { numArgs: 4, primitive: true }, handler: (e6, t3) => {
  var { parser: n2 } = e6;
  return { type: `mathchoice`, mode: n2.mode, display: q(t3[0]), text: q(t3[1]), script: q(t3[2]), scriptscript: q(t3[3]) };
}, htmlBuilder: (e6, t3) => At(Zt(oi(e6, t3), t3, false)), mathmlBuilder: (e6, t3) => hn(oi(e6, t3), t3) });
var si = (e6, t3, n2, r2, i2, a2, o2) => {
  e6 = U([], [e6]);
  var s2 = n2 && c(n2), l2, u2;
  if (t3) {
    var d2 = J(t3, r2.havingStyle(i2.sup()), r2);
    u2 = { elem: d2, kern: Math.max(r2.fontMetrics().bigOpSpacing1, r2.fontMetrics().bigOpSpacing3 - d2.depth) };
  }
  if (n2) {
    var f2 = J(n2, r2.havingStyle(i2.sub()), r2);
    l2 = { elem: f2, kern: Math.max(r2.fontMetrics().bigOpSpacing2, r2.fontMetrics().bigOpSpacing4 - f2.height) };
  }
  var p2;
  if (u2 && l2) p2 = W({ positionType: `bottom`, positionData: r2.fontMetrics().bigOpSpacing5 + l2.elem.height + l2.elem.depth + l2.kern + e6.depth + o2, children: [{ type: `kern`, size: r2.fontMetrics().bigOpSpacing5 }, { type: `elem`, elem: l2.elem, marginLeft: O(-a2) }, { type: `kern`, size: l2.kern }, { type: `elem`, elem: e6 }, { type: `kern`, size: u2.kern }, { type: `elem`, elem: u2.elem, marginLeft: O(a2) }, { type: `kern`, size: r2.fontMetrics().bigOpSpacing5 }] });
  else if (l2) p2 = W({ positionType: `top`, positionData: e6.height - o2, children: [{ type: `kern`, size: r2.fontMetrics().bigOpSpacing5 }, { type: `elem`, elem: l2.elem, marginLeft: O(-a2) }, { type: `kern`, size: l2.kern }, { type: `elem`, elem: e6 }] });
  else if (u2) p2 = W({ positionType: `bottom`, positionData: e6.depth + o2, children: [{ type: `elem`, elem: e6 }, { type: `kern`, size: u2.kern }, { type: `elem`, elem: u2.elem, marginLeft: O(a2) }, { type: `kern`, size: r2.fontMetrics().bigOpSpacing5 }] });
  else return e6;
  var m2 = [p2];
  if (l2 && a2 !== 0 && !s2) {
    var h2 = U([`mspace`], [], r2);
    h2.style.marginRight = O(a2), m2.unshift(h2);
  }
  return U([`mop`, `op-limits`], m2, r2);
}, ci = /* @__PURE__ */ new Set([`\\smallint`]), li = (e6, t3) => {
  var n2, r2, i2 = false, a2;
  e6.type === `supsub` ? (n2 = e6.sup, r2 = e6.sub, a2 = Q(e6.base, `op`), i2 = true) : a2 = Q(e6, `op`);
  var o2 = t3.style, s2 = false;
  o2.size === T.DISPLAY.size && a2.symbol && !ci.has(a2.name) && (s2 = true);
  var c2;
  if (a2.symbol) {
    var l2 = s2 ? `Size2-Regular` : `Size1-Regular`, u2 = ``;
    if ((a2.name === `\\oiint` || a2.name === `\\oiiint`) && (u2 = a2.name.slice(1), a2.name = u2 === `oiint` ? `\\iint` : `\\iiint`), c2 = bt(a2.name, l2, `math`, t3, [`mop`, `op-symbol`, s2 ? `large-op` : `small-op`]), u2.length > 0) {
      var d2 = c2.italic, f2 = Lt(u2 + `Size` + (s2 ? `2` : `1`), t3);
      c2 = W({ positionType: `individualShift`, children: [{ type: `elem`, elem: c2, shift: 0 }, { type: `elem`, elem: f2, shift: s2 ? 0.08 : 0 }] }), a2.name = `\\` + u2, c2.classes.unshift(`mop`), c2.italic = d2;
    }
  } else if (a2.body) {
    var p2 = Zt(a2.body, t3, true);
    p2.length === 1 && p2[0] instanceof Ne ? (c2 = p2[0], c2.classes[0] = `mop`) : c2 = U([`mop`], p2, t3);
  } else {
    for (var m2 = [], h2 = 1; h2 < a2.name.length; h2++) m2.push(xt(a2.name[h2], a2.mode, t3));
    c2 = U([`mop`], m2, t3);
  }
  var g2 = 0, _2 = 0;
  return (c2 instanceof Ne || a2.name === `\\oiint` || a2.name === `\\oiiint`) && !a2.suppressBaseShift && (g2 = (c2.height - c2.depth) / 2 - t3.fontMetrics().axisHeight, _2 = c2.italic || 0), i2 ? si(c2, n2, r2, t3, o2, _2, g2) : (g2 && (c2.style.position = `relative`, c2.style.top = O(g2)), c2);
}, ui = (e6, t3) => {
  var n2;
  if (e6.symbol) n2 = new Y(`mo`, [un(e6.name, e6.mode)]), ci.has(e6.name) && n2.setAttribute(`largeop`, `false`);
  else if (e6.body) n2 = new Y(`mo`, mn(e6.body, t3));
  else {
    n2 = new Y(`mi`, [new X(e6.name.slice(1))]);
    var r2 = new Y(`mo`, [un(`\u2061`, `text`)]);
    n2 = e6.parentIsSupSub ? new Y(`mrow`, [n2, r2]) : on([n2, r2]);
  }
  return n2;
}, di = { "\u220F": `\\prod`, "\u2210": `\\coprod`, "\u2211": `\\sum`, "\u22C0": `\\bigwedge`, "\u22C1": `\\bigvee`, "\u22C2": `\\bigcap`, "\u22C3": `\\bigcup`, "\u2A00": `\\bigodot`, "\u2A01": `\\bigoplus`, "\u2A02": `\\bigotimes`, "\u2A04": `\\biguplus`, "\u2A06": `\\bigsqcup` };
K({ type: `op`, names: `\\coprod.\\bigvee.\\bigwedge.\\biguplus.\\bigcap.\\bigcup.\\intop.\\prod.\\sum.\\bigotimes.\\bigoplus.\\bigodot.\\bigsqcup.\\smallint.\u220F.\u2210.\u2211.\u22C0.\u22C1.\u22C2.\u22C3.\u2A00.\u2A01.\u2A02.\u2A04.\u2A06`.split(`.`), props: { numArgs: 0 }, handler: (e6, t3) => {
  var { parser: n2, funcName: r2 } = e6, i2 = r2;
  return i2.length === 1 && (i2 = di[i2]), { type: `op`, mode: n2.mode, limits: true, parentIsSupSub: false, symbol: true, name: i2 };
}, htmlBuilder: li, mathmlBuilder: ui }), K({ type: `op`, names: [`\\mathop`], props: { numArgs: 1, primitive: true }, handler: (e6, t3) => {
  var { parser: n2 } = e6, r2 = t3[0];
  return { type: `op`, mode: n2.mode, limits: false, parentIsSupSub: false, symbol: false, body: q(r2) };
}, htmlBuilder: li, mathmlBuilder: ui });
var fi = { "\u222B": `\\int`, "\u222C": `\\iint`, "\u222D": `\\iiint`, "\u222E": `\\oint`, "\u222F": `\\oiint`, "\u2230": `\\oiiint` };
K({ type: `op`, names: `\\arcsin.\\arccos.\\arctan.\\arctg.\\arcctg.\\arg.\\ch.\\cos.\\cosec.\\cosh.\\cot.\\cotg.\\coth.\\csc.\\ctg.\\cth.\\deg.\\dim.\\exp.\\hom.\\ker.\\lg.\\ln.\\log.\\sec.\\sin.\\sinh.\\sh.\\tan.\\tanh.\\tg.\\th`.split(`.`), props: { numArgs: 0 }, handler(e6) {
  var { parser: t3, funcName: n2 } = e6;
  return { type: `op`, mode: t3.mode, limits: false, parentIsSupSub: false, symbol: false, name: n2 };
}, htmlBuilder: li, mathmlBuilder: ui }), K({ type: `op`, names: [`\\det`, `\\gcd`, `\\inf`, `\\lim`, `\\max`, `\\min`, `\\Pr`, `\\sup`], props: { numArgs: 0 }, handler(e6) {
  var { parser: t3, funcName: n2 } = e6;
  return { type: `op`, mode: t3.mode, limits: true, parentIsSupSub: false, symbol: false, name: n2 };
}, htmlBuilder: li, mathmlBuilder: ui }), K({ type: `op`, names: [`\\int`, `\\iint`, `\\iiint`, `\\oint`, `\\oiint`, `\\oiiint`, `\u222B`, `\u222C`, `\u222D`, `\u222E`, `\u222F`, `\u2230`], props: { numArgs: 0, allowedInArgument: true }, handler(e6) {
  var { parser: t3, funcName: n2 } = e6, r2 = n2;
  return r2.length === 1 && (r2 = fi[r2]), { type: `op`, mode: t3.mode, limits: false, parentIsSupSub: false, symbol: true, name: r2 };
}, htmlBuilder: li, mathmlBuilder: ui });
var pi = (e6, t3) => {
  var n2, r2, i2 = false, a2;
  e6.type === `supsub` ? (n2 = e6.sup, r2 = e6.sub, a2 = Q(e6.base, `operatorname`), i2 = true) : a2 = Q(e6, `operatorname`);
  var o2;
  if (a2.body.length > 0) {
    for (var s2 = Zt(a2.body.map((e7) => {
      var t4 = `text` in e7 ? e7.text : void 0;
      return typeof t4 == `string` ? { type: `textord`, mode: e7.mode, text: t4 } : e7;
    }), t3.withFont(`mathrm`), true), c2 = 0; c2 < s2.length; c2++) {
      var l2 = s2[c2];
      l2 instanceof Ne && (l2.text = l2.text.replace(/\u2212/, `-`).replace(/\u2217/, `*`));
    }
    o2 = U([`mop`], s2, t3);
  } else o2 = U([`mop`], [], t3);
  return i2 ? si(o2, n2, r2, t3, t3.style, 0, 0) : o2;
};
K({ type: `operatorname`, names: [`\\operatorname@`, `\\operatornamewithlimits`], props: { numArgs: 1 }, handler: (e6, t3) => {
  var { parser: n2, funcName: r2 } = e6, i2 = t3[0];
  return { type: `operatorname`, mode: n2.mode, body: q(i2), alwaysHandleSupSub: r2 === `\\operatornamewithlimits`, limits: false, parentIsSupSub: false };
}, htmlBuilder: pi, mathmlBuilder: (e6, t3) => {
  for (var n2 = mn(e6.body, t3.withFont(`mathrm`)), r2 = true, i2 = 0; i2 < n2.length; i2++) {
    var a2 = n2[i2];
    if (!(a2 instanceof sn)) if (a2 instanceof Y) switch (a2.type) {
      case `mi`:
      case `mn`:
      case `mspace`:
      case `mtext`:
        break;
      case `mo`:
        var o2 = a2.children[0];
        a2.children.length === 1 && o2 instanceof X ? o2.text = o2.text.replace(/\u2212/, `-`).replace(/\u2217/, `*`) : r2 = false;
        break;
      default:
        r2 = false;
    }
    else r2 = false;
  }
  r2 && (n2 = [new X(n2.map((e7) => e7.toText()).join(``))]);
  var s2 = new Y(`mi`, n2);
  s2.setAttribute(`mathvariant`, `normal`);
  var c2 = new Y(`mo`, [un(`\u2061`, `text`)]);
  return e6.parentIsSupSub ? new Y(`mrow`, [s2, c2]) : on([s2, c2]);
} }), $(`\\operatorname`, `\\@ifstar\\operatornamewithlimits\\operatorname@`), Gt({ type: `ordgroup`, htmlBuilder(e6, t3) {
  return e6.semisimple ? At(Zt(e6.body, t3, false)) : U([`mord`], Zt(e6.body, t3, true), t3);
}, mathmlBuilder(e6, t3) {
  return hn(e6.body, t3, true);
} }), K({ type: `overline`, names: [`\\overline`], props: { numArgs: 1 }, handler(e6, t3) {
  var { parser: n2 } = e6, r2 = t3[0];
  return { type: `overline`, mode: n2.mode, body: r2 };
}, htmlBuilder(e6, t3) {
  var n2 = J(e6.body, t3.havingCrampedStyle()), r2 = Ot(`overline-line`, t3), i2 = t3.fontMetrics().defaultRuleThickness;
  return U([`mord`, `overline`], [W({ positionType: `firstBaseline`, children: [{ type: `elem`, elem: n2 }, { type: `kern`, size: 3 * i2 }, { type: `elem`, elem: r2 }, { type: `kern`, size: i2 }] })], t3);
}, mathmlBuilder(e6, t3) {
  var n2 = new Y(`mo`, [new X(`\u203E`)]);
  n2.setAttribute(`stretchy`, `true`);
  var r2 = new Y(`mover`, [Z(e6.body, t3), n2]);
  return r2.setAttribute(`accent`, `true`), r2;
} }), K({ type: `phantom`, names: [`\\phantom`], props: { numArgs: 1, allowedInText: true }, handler: (e6, t3) => {
  var { parser: n2 } = e6, r2 = t3[0];
  return { type: `phantom`, mode: n2.mode, body: q(r2) };
}, htmlBuilder: (e6, t3) => At(Zt(e6.body, t3.withPhantom(), false)), mathmlBuilder: (e6, t3) => new Y(`mphantom`, mn(e6.body, t3)) }), $(`\\hphantom`, `\\smash{\\phantom{#1}}`), K({ type: `vphantom`, names: [`\\vphantom`], props: { numArgs: 1, allowedInText: true }, handler: (e6, t3) => {
  var { parser: n2 } = e6, r2 = t3[0];
  return { type: `vphantom`, mode: n2.mode, body: r2 };
}, htmlBuilder: (e6, t3) => U([`mord`, `rlap`], [U([`inner`], [J(e6.body, t3.withPhantom())]), U([`fix`], [])], t3), mathmlBuilder: (e6, t3) => {
  var n2 = new Y(`mpadded`, [new Y(`mphantom`, mn(q(e6.body), t3))]);
  return n2.setAttribute(`width`, `0px`), n2;
} }), K({ type: `raisebox`, names: [`\\raisebox`], props: { numArgs: 2, argTypes: [`size`, `hbox`], allowedInText: true }, handler(e6, t3) {
  var { parser: n2 } = e6, r2 = Q(t3[0], `size`).value, i2 = t3[1];
  return { type: `raisebox`, mode: n2.mode, dy: r2, body: i2 };
}, htmlBuilder(e6, t3) {
  var n2 = J(e6.body, t3);
  return W({ positionType: `shift`, positionData: -D(e6.dy, t3), children: [{ type: `elem`, elem: n2 }] });
}, mathmlBuilder(e6, t3) {
  var n2 = new Y(`mpadded`, [Z(e6.body, t3)]), r2 = e6.dy.number + e6.dy.unit;
  return n2.setAttribute(`voffset`, r2), n2;
} }), K({ type: `internal`, names: [`\\relax`], props: { numArgs: 0, allowedInText: true, allowedInArgument: true }, handler(e6) {
  var { parser: t3 } = e6;
  return { type: `internal`, mode: t3.mode };
} }), K({ type: `rule`, names: [`\\rule`], props: { numArgs: 2, numOptionalArgs: 1, allowedInText: true, allowedInMath: true, argTypes: [`size`, `size`, `size`] }, handler(e6, t3, n2) {
  var { parser: r2 } = e6, i2 = n2[0], a2 = Q(t3[0], `size`), o2 = Q(t3[1], `size`);
  return { type: `rule`, mode: r2.mode, shift: i2 && Q(i2, `size`).value, width: a2.value, height: o2.value };
}, htmlBuilder(e6, t3) {
  var n2 = U([`mord`, `rule`], [], t3), r2 = D(e6.width, t3), i2 = D(e6.height, t3), a2 = e6.shift ? D(e6.shift, t3) : 0;
  return n2.style.borderRightWidth = O(r2), n2.style.borderTopWidth = O(i2), n2.style.bottom = O(a2), n2.width = r2, n2.height = i2 + a2, n2.depth = -a2, n2.maxFontSize = i2 * 1.125 * t3.sizeMultiplier, n2;
}, mathmlBuilder(e6, t3) {
  var n2 = D(e6.width, t3), r2 = D(e6.height, t3), i2 = e6.shift ? D(e6.shift, t3) : 0, a2 = t3.color && t3.getColor() || `black`, o2 = new Y(`mspace`);
  o2.setAttribute(`mathbackground`, a2), o2.setAttribute(`width`, O(n2)), o2.setAttribute(`height`, O(r2));
  var s2 = new Y(`mpadded`, [o2]);
  return i2 >= 0 ? s2.setAttribute(`height`, O(i2)) : (s2.setAttribute(`height`, O(i2)), s2.setAttribute(`depth`, O(-i2))), s2.setAttribute(`voffset`, O(i2)), s2;
} });
function mi(e6, t3, n2) {
  for (var r2 = Zt(e6, t3, false), i2 = t3.sizeMultiplier / n2.sizeMultiplier, a2 = 0; a2 < r2.length; a2++) {
    var o2 = r2[a2].classes.indexOf(`sizing`);
    o2 < 0 ? Array.prototype.push.apply(r2[a2].classes, t3.sizingClasses(n2)) : r2[a2].classes[o2 + 1] === `reset-size` + t3.size && (r2[a2].classes[o2 + 1] = `reset-size` + n2.size), r2[a2].height *= i2, r2[a2].depth *= i2;
  }
  return At(r2);
}
var hi = [`\\tiny`, `\\sixptsize`, `\\scriptsize`, `\\footnotesize`, `\\small`, `\\normalsize`, `\\large`, `\\Large`, `\\LARGE`, `\\huge`, `\\Huge`];
K({ type: `sizing`, names: hi, props: { numArgs: 0, allowedInText: true }, handler: (e6, t3) => {
  var { breakOnTokenText: n2, funcName: r2, parser: i2 } = e6, a2 = i2.parseExpression(false, n2);
  return { type: `sizing`, mode: i2.mode, size: hi.indexOf(r2) + 1, body: a2 };
}, htmlBuilder: (e6, t3) => {
  var n2 = t3.havingSize(e6.size);
  return mi(e6.body, n2, t3);
}, mathmlBuilder: (e6, t3) => {
  var n2 = t3.havingSize(e6.size), r2 = new Y(`mstyle`, mn(e6.body, n2));
  return r2.setAttribute(`mathsize`, O(n2.sizeMultiplier)), r2;
} }), K({ type: `smash`, names: [`\\smash`], props: { numArgs: 1, numOptionalArgs: 1, allowedInText: true }, handler: (e6, t3, n2) => {
  var { parser: r2 } = e6, i2 = false, a2 = false, o2 = n2[0] && Q(n2[0], `ordgroup`);
  if (o2) for (var s2 = ``, c2 = 0; c2 < o2.body.length; ++c2) {
    var l2 = o2.body[c2];
    if (s2 = jn(l2).text, s2 === `t`) i2 = true;
    else if (s2 === `b`) a2 = true;
    else {
      i2 = false, a2 = false;
      break;
    }
  }
  else i2 = true, a2 = true;
  var u2 = t3[0];
  return { type: `smash`, mode: r2.mode, body: u2, smashHeight: i2, smashDepth: a2 };
}, htmlBuilder: (e6, t3) => {
  var n2 = U([], [J(e6.body, t3)]);
  if (!e6.smashHeight && !e6.smashDepth) return n2;
  if (e6.smashHeight && (n2.height = 0), e6.smashDepth && (n2.depth = 0), e6.smashHeight && e6.smashDepth) return U([`mord`, `smash`], [n2], t3);
  if (n2.children) for (var r2 = 0; r2 < n2.children.length; r2++) e6.smashHeight && (n2.children[r2].height = 0), e6.smashDepth && (n2.children[r2].depth = 0);
  return U([`mord`], [W({ positionType: `firstBaseline`, children: [{ type: `elem`, elem: n2 }] })], t3);
}, mathmlBuilder: (e6, t3) => {
  var n2 = new Y(`mpadded`, [Z(e6.body, t3)]);
  return e6.smashHeight && n2.setAttribute(`height`, `0px`), e6.smashDepth && n2.setAttribute(`depth`, `0px`), n2;
} }), K({ type: `sqrt`, names: [`\\sqrt`], props: { numArgs: 1, numOptionalArgs: 1 }, handler(e6, t3, n2) {
  var { parser: r2 } = e6, i2 = n2[0], a2 = t3[0];
  return { type: `sqrt`, mode: r2.mode, body: a2, index: i2 };
}, htmlBuilder(e6, t3) {
  var n2 = J(e6.body, t3.havingCrampedStyle());
  n2.height === 0 && (n2.height = t3.fontMetrics().xHeight), n2 = jt(n2, t3);
  var r2 = t3.fontMetrics().defaultRuleThickness, i2 = r2;
  t3.style.id < T.TEXT.id && (i2 = t3.fontMetrics().xHeight);
  var a2 = r2 + i2 / 4, { span: o2, ruleWidth: s2, advanceWidth: c2 } = hr(n2.height + n2.depth + a2 + r2, t3), l2 = o2.height - s2;
  l2 > n2.height + n2.depth + a2 && (a2 = (a2 + l2 - n2.height - n2.depth) / 2);
  var u2 = o2.height - n2.height - a2 - s2;
  n2.style.paddingLeft = O(c2);
  var d2 = W({ positionType: `firstBaseline`, children: [{ type: `elem`, elem: n2, wrapperClasses: [`svg-align`] }, { type: `kern`, size: -(n2.height + u2) }, { type: `elem`, elem: o2 }, { type: `kern`, size: s2 }] });
  if (e6.index) {
    var f2 = t3.havingStyle(T.SCRIPTSCRIPT), p2 = J(e6.index, f2, t3);
    return U([`mord`, `sqrt`], [U([`root`], [W({ positionType: `shift`, positionData: -(0.6 * (d2.height - d2.depth)), children: [{ type: `elem`, elem: p2 }] })]), d2], t3);
  } else return U([`mord`, `sqrt`], [d2], t3);
}, mathmlBuilder(e6, t3) {
  var { body: n2, index: r2 } = e6;
  return r2 ? new Y(`mroot`, [Z(n2, t3), Z(r2, t3)]) : new Y(`msqrt`, [Z(n2, t3)]);
} });
var gi = { display: T.DISPLAY, text: T.TEXT, script: T.SCRIPT, scriptscript: T.SCRIPTSCRIPT };
K({ type: `styling`, names: [`\\displaystyle`, `\\textstyle`, `\\scriptstyle`, `\\scriptscriptstyle`], props: { numArgs: 0, allowedInText: true, primitive: true }, handler(e6, t3) {
  var { breakOnTokenText: n2, funcName: r2, parser: i2 } = e6, a2 = i2.parseExpression(true, n2), o2 = r2.slice(1, r2.length - 5);
  return { type: `styling`, mode: i2.mode, style: o2, body: a2 };
}, htmlBuilder(e6, t3) {
  var n2 = gi[e6.style], r2 = t3.havingStyle(n2).withFont(``);
  return mi(e6.body, r2, t3);
}, mathmlBuilder(e6, t3) {
  var n2 = gi[e6.style], r2 = t3.havingStyle(n2), i2 = new Y(`mstyle`, mn(e6.body, r2)), a2 = { display: [`0`, `true`], text: [`0`, `false`], script: [`1`, `false`], scriptscript: [`2`, `false`] }[e6.style];
  return i2.setAttribute(`scriptlevel`, a2[0]), i2.setAttribute(`displaystyle`, a2[1]), i2;
} });
var _i = function(e6, t3) {
  var n2 = e6.base;
  return n2 ? n2.type === `op` ? n2.limits && (t3.style.size === T.DISPLAY.size || n2.alwaysHandleSupSub) ? li : null : n2.type === `operatorname` ? n2.alwaysHandleSupSub && (t3.style.size === T.DISPLAY.size || n2.limits) ? pi : null : n2.type === `accent` ? c(n2.base) ? Pn : null : n2.type === `horizBrace` && !e6.sub === n2.isOver ? ii : null : null;
};
Gt({ type: `supsub`, htmlBuilder(e6, t3) {
  var n2 = _i(e6, t3);
  if (n2) return n2(e6, t3);
  var { base: r2, sup: i2, sub: a2 } = e6, o2 = J(r2, t3), s2, l2, u2 = t3.fontMetrics(), d2 = 0, f2 = 0, p2 = r2 && c(r2);
  if (i2) {
    var m2 = t3.havingStyle(t3.style.sup());
    s2 = J(i2, m2, t3), p2 || (d2 = o2.height - m2.fontMetrics().supDrop * m2.sizeMultiplier / t3.sizeMultiplier);
  }
  if (a2) {
    var h2 = t3.havingStyle(t3.style.sub());
    l2 = J(a2, h2, t3), p2 || (f2 = o2.depth + h2.fontMetrics().subDrop * h2.sizeMultiplier / t3.sizeMultiplier);
  }
  var g2 = t3.style === T.DISPLAY ? u2.sup1 : t3.style.cramped ? u2.sup3 : u2.sup2, _2 = t3.sizeMultiplier, v2 = O(0.5 / u2.ptPerEm / _2), y2 = null;
  if (l2) {
    var b2 = e6.base && e6.base.type === `op` && e6.base.name && (e6.base.name === `\\oiint` || e6.base.name === `\\oiiint`);
    (o2 instanceof Ne || b2) && (y2 = O(-o2.italic));
  }
  var x2;
  if (s2 && l2) {
    d2 = Math.max(d2, g2, s2.depth + 0.25 * u2.xHeight), f2 = Math.max(f2, u2.sub2);
    var S2 = 4 * u2.defaultRuleThickness;
    if (d2 - s2.depth - (l2.height - f2) < S2) {
      f2 = S2 - (d2 - s2.depth) + l2.height;
      var C2 = 0.8 * u2.xHeight - (d2 - s2.depth);
      C2 > 0 && (d2 += C2, f2 -= C2);
    }
    x2 = W({ positionType: `individualShift`, children: [{ type: `elem`, elem: l2, shift: f2, marginRight: v2, marginLeft: y2 }, { type: `elem`, elem: s2, shift: -d2, marginRight: v2 }] });
  } else if (l2) f2 = Math.max(f2, u2.sub1, l2.height - 0.8 * u2.xHeight), x2 = W({ positionType: `shift`, positionData: f2, children: [{ type: `elem`, elem: l2, marginLeft: y2, marginRight: v2 }] });
  else if (s2) d2 = Math.max(d2, g2, s2.depth + 0.25 * u2.xHeight), x2 = W({ positionType: `shift`, positionData: -d2, children: [{ type: `elem`, elem: s2, marginRight: v2 }] });
  else throw Error(`supsub must have either sup or sub.`);
  return U([tn(o2, `right`) || `mord`], [o2, U([`msupsub`], [x2])], t3);
}, mathmlBuilder(e6, t3) {
  var n2 = false, r2, i2;
  e6.base && e6.base.type === `horizBrace` && (i2 = !!e6.sup, i2 === e6.base.isOver && (n2 = true, r2 = e6.base.isOver)), e6.base && (e6.base.type === `op` || e6.base.type === `operatorname`) && (e6.base.parentIsSupSub = true);
  var a2 = [Z(e6.base, t3)];
  e6.sub && a2.push(Z(e6.sub, t3)), e6.sup && a2.push(Z(e6.sup, t3));
  var o2;
  if (n2) o2 = r2 ? `mover` : `munder`;
  else if (e6.sub) if (e6.sup) {
    var s2 = e6.base;
    o2 = s2 && s2.type === `op` && s2.limits && t3.style === T.DISPLAY || s2 && s2.type === `operatorname` && s2.alwaysHandleSupSub && (t3.style === T.DISPLAY || s2.limits) ? `munderover` : `msubsup`;
  } else {
    var c2 = e6.base;
    o2 = c2 && c2.type === `op` && c2.limits && (t3.style === T.DISPLAY || c2.alwaysHandleSupSub) || c2 && c2.type === `operatorname` && c2.alwaysHandleSupSub && (c2.limits || t3.style === T.DISPLAY) ? `munder` : `msub`;
  }
  else {
    var l2 = e6.base;
    o2 = l2 && l2.type === `op` && l2.limits && (t3.style === T.DISPLAY || l2.alwaysHandleSupSub) || l2 && l2.type === `operatorname` && l2.alwaysHandleSupSub && (l2.limits || t3.style === T.DISPLAY) ? `mover` : `msup`;
  }
  return new Y(o2, a2);
} }), Gt({ type: `atom`, htmlBuilder(e6, t3) {
  return xt(e6.text, e6.mode, t3, [`m` + e6.family]);
}, mathmlBuilder(e6, t3) {
  var n2 = new Y(`mo`, [un(e6.text, e6.mode)]);
  if (e6.family === `bin`) {
    var r2 = fn(e6, t3);
    r2 === `bold-italic` && n2.setAttribute(`mathvariant`, r2);
  } else e6.family === `punct` ? n2.setAttribute(`separator`, `true`) : (e6.family === `open` || e6.family === `close`) && n2.setAttribute(`stretchy`, `false`);
  return n2;
} });
var vi = { mi: `italic`, mn: `normal`, mtext: `normal` };
Gt({ type: `mathord`, htmlBuilder(e6, t3) {
  return Ct(e6, t3, `mathord`);
}, mathmlBuilder(e6, t3) {
  var n2 = new Y(`mi`, [un(e6.text, e6.mode, t3)]), r2 = fn(e6, t3) || `italic`;
  return r2 !== vi[n2.type] && n2.setAttribute(`mathvariant`, r2), n2;
} }), Gt({ type: `textord`, htmlBuilder(e6, t3) {
  return Ct(e6, t3, `textord`);
}, mathmlBuilder(e6, t3) {
  var n2 = un(e6.text, e6.mode, t3), r2 = fn(e6, t3) || `normal`, i2 = e6.mode === `text` ? new Y(`mtext`, [n2]) : /[0-9]/.test(e6.text) ? new Y(`mn`, [n2]) : e6.text === `\\prime` ? new Y(`mo`, [n2]) : new Y(`mi`, [n2]);
  return r2 !== vi[i2.type] && i2.setAttribute(`mathvariant`, r2), i2;
} });
var yi = { "\\nobreak": `nobreak`, "\\allowbreak": `allowbreak` }, bi = { " ": {}, "\\ ": {}, "~": { className: `nobreak` }, "\\space": {}, "\\nobreakspace": { className: `nobreak` } };
Gt({ type: `spacing`, htmlBuilder(t3, n2) {
  if (bi.hasOwnProperty(t3.text)) {
    var r2 = bi[t3.text].className || ``;
    if (t3.mode === `text`) {
      var i2 = Ct(t3, n2, `textord`);
      return i2.classes.push(r2), i2;
    } else return U([`mspace`, r2], [xt(t3.text, t3.mode, n2)], n2);
  } else if (yi.hasOwnProperty(t3.text)) return U([`mspace`, yi[t3.text]], [], n2);
  else throw new e(`Unknown type of space "` + t3.text + `"`);
}, mathmlBuilder(t3, n2) {
  var r2;
  if (bi.hasOwnProperty(t3.text)) r2 = new Y(`mtext`, [new X(`\xA0`)]);
  else if (yi.hasOwnProperty(t3.text)) return new Y(`mspace`);
  else throw new e(`Unknown type of space "` + t3.text + `"`);
  return r2;
} });
var xi = () => {
  var e6 = new Y(`mtd`, []);
  return e6.setAttribute(`width`, `50%`), e6;
};
Gt({ type: `tag`, mathmlBuilder(e6, t3) {
  var n2 = new Y(`mtable`, [new Y(`mtr`, [xi(), new Y(`mtd`, [hn(e6.body, t3)]), xi(), new Y(`mtd`, [hn(e6.tag, t3)])])]);
  return n2.setAttribute(`width`, `100%`), n2;
} });
var Si = { "\\text": void 0, "\\textrm": `textrm`, "\\textsf": `textsf`, "\\texttt": `texttt`, "\\textnormal": `textrm` }, Ci = { "\\textbf": `textbf`, "\\textmd": `textmd` }, wi = { "\\textit": `textit`, "\\textup": `textup` }, Ti = (e6, t3) => {
  var n2 = e6.font;
  if (n2) {
    if (Si[n2]) return t3.withTextFontFamily(Si[n2]);
    if (Ci[n2]) return t3.withTextFontWeight(Ci[n2]);
    if (n2 === `\\emph`) return t3.fontShape === `textit` ? t3.withTextFontShape(`textup`) : t3.withTextFontShape(`textit`);
  } else return t3;
  return t3.withTextFontShape(wi[n2]);
};
K({ type: `text`, names: [`\\text`, `\\textrm`, `\\textsf`, `\\texttt`, `\\textnormal`, `\\textbf`, `\\textmd`, `\\textit`, `\\textup`, `\\emph`], props: { numArgs: 1, argTypes: [`text`], allowedInArgument: true, allowedInText: true }, handler(e6, t3) {
  var { parser: n2, funcName: r2 } = e6, i2 = t3[0];
  return { type: `text`, mode: n2.mode, body: q(i2), font: r2 };
}, htmlBuilder(e6, t3) {
  var n2 = Ti(e6, t3);
  return U([`mord`, `text`], Zt(e6.body, n2, true), n2);
}, mathmlBuilder(e6, t3) {
  var n2 = Ti(e6, t3);
  return hn(e6.body, n2);
} }), K({ type: `underline`, names: [`\\underline`], props: { numArgs: 1, allowedInText: true }, handler(e6, t3) {
  var { parser: n2 } = e6;
  return { type: `underline`, mode: n2.mode, body: t3[0] };
}, htmlBuilder(e6, t3) {
  var n2 = J(e6.body, t3), r2 = Ot(`underline-line`, t3), i2 = t3.fontMetrics().defaultRuleThickness;
  return U([`mord`, `underline`], [W({ positionType: `top`, positionData: n2.height, children: [{ type: `kern`, size: i2 }, { type: `elem`, elem: r2 }, { type: `kern`, size: 3 * i2 }, { type: `elem`, elem: n2 }] })], t3);
}, mathmlBuilder(e6, t3) {
  var n2 = new Y(`mo`, [new X(`\u203E`)]);
  n2.setAttribute(`stretchy`, `true`);
  var r2 = new Y(`munder`, [Z(e6.body, t3), n2]);
  return r2.setAttribute(`accentunder`, `true`), r2;
} }), K({ type: `vcenter`, names: [`\\vcenter`], props: { numArgs: 1, argTypes: [`original`], allowedInText: false }, handler(e6, t3) {
  var { parser: n2 } = e6;
  return { type: `vcenter`, mode: n2.mode, body: t3[0] };
}, htmlBuilder(e6, t3) {
  var n2 = J(e6.body, t3), r2 = t3.fontMetrics().axisHeight;
  return W({ positionType: `shift`, positionData: 0.5 * (n2.height - r2 - (n2.depth + r2)), children: [{ type: `elem`, elem: n2 }] });
}, mathmlBuilder(e6, t3) {
  return new Y(`mrow`, [new Y(`mpadded`, [Z(e6.body, t3)], [`vcenter`])]);
} }), K({ type: `verb`, names: [`\\verb`], props: { numArgs: 0, allowedInText: true }, handler(t3, n2, r2) {
  throw new e(`\\verb ended by end of line instead of matching delimiter`);
}, htmlBuilder(e6, t3) {
  for (var n2 = Ei(e6), r2 = [], i2 = t3.havingStyle(t3.style.text()), a2 = 0; a2 < n2.length; a2++) {
    var o2 = n2[a2];
    o2 === `~` && (o2 = `\\textasciitilde`), r2.push(bt(o2, `Typewriter-Regular`, e6.mode, i2, [`mord`, `texttt`]));
  }
  return U([`mord`, `text`].concat(i2.sizingClasses(t3)), Tt(r2), i2);
}, mathmlBuilder(e6, t3) {
  var n2 = new Y(`mtext`, [new X(Ei(e6))]);
  return n2.setAttribute(`mathvariant`, `monospace`), n2;
} });
var Ei = (e6) => e6.body.replace(/ /g, e6.star ? `\u2423` : `\xA0`), Di = Ht, Oi = `[ \r
	]`, ki = `\\\\[a-zA-Z@]+`, Ai = `\\\\[^\uD800-\uDFFF]`, ji = `(` + ki + `)` + Oi + `*`, Mi = `\\\\(
|[ \r	]+
?)[ \r	]*`, Ni = `[\u0300-\u036F]`, Pi = RegExp(Ni + `+$`), Fi = `(` + Oi + `+)|` + (Mi + `|`) + `([!-\\[\\]-\u2027\u202A-\uD7FF\uF900-\uFFFF]` + (Ni + `*`) + `|[\uD800-\uDBFF][\uDC00-\uDFFF]` + (Ni + `*`) + `|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5` + (`|` + ji) + (`|` + Ai + `)`), Ii = class {
  constructor(e6, t3) {
    this.input = e6, this.settings = t3, this.tokenRegex = new RegExp(Fi, `g`), this.catcodes = { "%": 14, "~": 13 };
  }
  setCatcode(e6, t3) {
    this.catcodes[e6] = t3;
  }
  lex() {
    var t3 = this.input, n2 = this.tokenRegex.lastIndex;
    if (n2 === t3.length) return new Rr(`EOF`, new Lr(this, n2, n2));
    var r2 = this.tokenRegex.exec(t3);
    if (r2 === null || r2.index !== n2) throw new e(`Unexpected character: '` + t3[n2] + `'`, new Rr(t3[n2], new Lr(this, n2, n2 + 1)));
    var i2 = r2[6] || r2[3] || (r2[2] ? `\\ ` : ` `);
    if (this.catcodes[i2] === 14) {
      var a2 = t3.indexOf(`
`, this.tokenRegex.lastIndex);
      return a2 === -1 ? (this.tokenRegex.lastIndex = t3.length, this.settings.reportNonstrict(`commentAtEnd`, `% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)`)) : this.tokenRegex.lastIndex = a2 + 1, this.lex();
    }
    return new Rr(i2, new Lr(this, n2, this.tokenRegex.lastIndex));
  }
}, Li = class {
  constructor(e6, t3) {
    e6 === void 0 && (e6 = {}), t3 === void 0 && (t3 = {}), this.current = t3, this.builtins = e6, this.undefStack = [];
  }
  beginGroup() {
    this.undefStack.push({});
  }
  endGroup() {
    if (this.undefStack.length === 0) throw new e(`Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug`);
    var t3 = this.undefStack.pop();
    for (var n2 in t3) t3.hasOwnProperty(n2) && (t3[n2] == null ? delete this.current[n2] : this.current[n2] = t3[n2]);
  }
  endGroups() {
    for (; this.undefStack.length > 0; ) this.endGroup();
  }
  has(e6) {
    return this.current.hasOwnProperty(e6) || this.builtins.hasOwnProperty(e6);
  }
  get(e6) {
    return this.current.hasOwnProperty(e6) ? this.current[e6] : this.builtins[e6];
  }
  set(e6, t3, n2) {
    if (n2 === void 0 && (n2 = false), n2) {
      for (var r2 = 0; r2 < this.undefStack.length; r2++) delete this.undefStack[r2][e6];
      this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e6] = t3);
    } else {
      var i2 = this.undefStack[this.undefStack.length - 1];
      i2 && !i2.hasOwnProperty(e6) && (i2[e6] = this.current[e6]);
    }
    t3 == null ? delete this.current[e6] : this.current[e6] = t3;
  }
}, Ri = Ir;
$(`\\noexpand`, function(e6) {
  var t3 = e6.popToken();
  return e6.isExpandable(t3.text) && (t3.noexpand = true, t3.treatAsRelax = true), { tokens: [t3], numArgs: 0 };
}), $(`\\expandafter`, function(e6) {
  var t3 = e6.popToken();
  return e6.expandOnce(true), { tokens: [t3], numArgs: 0 };
}), $(`\\@firstoftwo`, function(e6) {
  return { tokens: e6.consumeArgs(2)[0], numArgs: 0 };
}), $(`\\@secondoftwo`, function(e6) {
  return { tokens: e6.consumeArgs(2)[1], numArgs: 0 };
}), $(`\\@ifnextchar`, function(e6) {
  var t3 = e6.consumeArgs(3);
  e6.consumeSpaces();
  var n2 = e6.future();
  return t3[0].length === 1 && t3[0][0].text === n2.text ? { tokens: t3[1], numArgs: 0 } : { tokens: t3[2], numArgs: 0 };
}), $(`\\@ifstar`, `\\@ifnextchar *{\\@firstoftwo{#1}}`), $(`\\TextOrMath`, function(e6) {
  var t3 = e6.consumeArgs(2);
  return e6.mode === `text` ? { tokens: t3[0], numArgs: 0 } : { tokens: t3[1], numArgs: 0 };
});
var zi = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, a: 10, A: 10, b: 11, B: 11, c: 12, C: 12, d: 13, D: 13, e: 14, E: 14, f: 15, F: 15 };
$(`\\char`, function(t3) {
  var n2 = t3.popToken(), r2, i2 = 0;
  if (n2.text === `'`) r2 = 8, n2 = t3.popToken();
  else if (n2.text === `"`) r2 = 16, n2 = t3.popToken();
  else if (n2.text === "`") if (n2 = t3.popToken(), n2.text[0] === `\\`) i2 = n2.text.charCodeAt(1);
  else if (n2.text === `EOF`) throw new e("\\char` missing argument");
  else i2 = n2.text.charCodeAt(0);
  else r2 = 10;
  if (r2) {
    if (i2 = zi[n2.text], i2 == null || i2 >= r2) throw new e(`Invalid base-` + r2 + ` digit ` + n2.text);
    for (var a2; (a2 = zi[t3.future().text]) != null && a2 < r2; ) i2 *= r2, i2 += a2, t3.popToken();
  }
  return `\\@char{` + i2 + `}`;
});
var Bi = (t3, n2, r2, i2) => {
  var a2 = t3.consumeArg().tokens;
  if (a2.length !== 1) throw new e(`\\newcommand's first argument must be a macro name`);
  var o2 = a2[0].text, s2 = t3.isDefined(o2);
  if (s2 && !n2) throw new e(`\\newcommand{` + o2 + `} attempting to redefine ` + (o2 + `; use \\renewcommand`));
  if (!s2 && !r2) throw new e(`\\renewcommand{` + o2 + `} when command ` + o2 + ` does not yet exist; use \\newcommand`);
  var c2 = 0;
  if (a2 = t3.consumeArg().tokens, a2.length === 1 && a2[0].text === `[`) {
    for (var l2 = ``, u2 = t3.expandNextToken(); u2.text !== `]` && u2.text !== `EOF`; ) l2 += u2.text, u2 = t3.expandNextToken();
    if (!l2.match(/^\s*[0-9]+\s*$/)) throw new e(`Invalid number of arguments: ` + l2);
    c2 = parseInt(l2), a2 = t3.consumeArg().tokens;
  }
  return s2 && i2 || t3.macros.set(o2, { tokens: a2, numArgs: c2 }), ``;
};
$(`\\newcommand`, (e6) => Bi(e6, false, true, false)), $(`\\renewcommand`, (e6) => Bi(e6, true, false, false)), $(`\\providecommand`, (e6) => Bi(e6, true, true, true)), $(`\\message`, (e6) => {
  var t3 = e6.consumeArgs(1)[0];
  return console.log(t3.reverse().map((e7) => e7.text).join(``)), ``;
}), $(`\\errmessage`, (e6) => {
  var t3 = e6.consumeArgs(1)[0];
  return console.error(t3.reverse().map((e7) => e7.text).join(``)), ``;
}), $(`\\show`, (e6) => {
  var t3 = e6.popToken(), n2 = t3.text;
  return console.log(t3, e6.macros.get(n2), Di[n2], k.math[n2], k.text[n2]), ``;
}), $(`\\bgroup`, `{`), $(`\\egroup`, `}`), $(`~`, `\\nobreakspace`), $(`\\lq`, "`"), $(`\\rq`, `'`), $(`\\aa`, `\\r a`), $(`\\AA`, `\\r A`), $(`\\textcopyright`, "\\html@mathml{\\textcircled{c}}{\\char`\xA9}"), $(`\\copyright`, `\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}`), $(`\\textregistered`, "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`\xAE}"), $(`\u212C`, `\\mathscr{B}`), $(`\u2130`, `\\mathscr{E}`), $(`\u2131`, `\\mathscr{F}`), $(`\u210B`, `\\mathscr{H}`), $(`\u2110`, `\\mathscr{I}`), $(`\u2112`, `\\mathscr{L}`), $(`\u2133`, `\\mathscr{M}`), $(`\u211B`, `\\mathscr{R}`), $(`\u212D`, `\\mathfrak{C}`), $(`\u210C`, `\\mathfrak{H}`), $(`\u2128`, `\\mathfrak{Z}`), $(`\\Bbbk`, `\\Bbb{k}`), $(`\\llap`, `\\mathllap{\\textrm{#1}}`), $(`\\rlap`, `\\mathrlap{\\textrm{#1}}`), $(`\\clap`, `\\mathclap{\\textrm{#1}}`), $(`\\mathstrut`, `\\vphantom{(}`), $(`\\underbar`, `\\underline{\\text{#1}}`), $(`\\not`, `\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}`), $(`\\neq`, "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`\u2260}}"), $(`\\ne`, `\\neq`), $(`\u2260`, `\\neq`), $(`\\notin`, "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`\u2209}}"), $(`\u2209`, `\\notin`), $(`\u2258`, "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`\u2258}}"), $(`\u2259`, "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`\u2258}}"), $(`\u225A`, "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`\u225A}}"), $(`\u225B`, "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`\u225B}}"), $(`\u225D`, "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`\u225D}}"), $(`\u225E`, "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`\u225E}}"), $(`\u225F`, "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`\u225F}}"), $(`\u27C2`, `\\perp`), $(`\u203C`, `\\mathclose{!\\mkern-0.8mu!}`), $(`\u220C`, `\\notni`), $(`\u231C`, `\\ulcorner`), $(`\u231D`, `\\urcorner`), $(`\u231E`, `\\llcorner`), $(`\u231F`, `\\lrcorner`), $(`\xA9`, `\\copyright`), $(`\xAE`, `\\textregistered`), $(`\\ulcorner`, `\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}`), $(`\\urcorner`, `\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}`), $(`\\llcorner`, `\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}`), $(`\\lrcorner`, `\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}`), $(`\\vdots`, `{\\varvdots\\rule{0pt}{15pt}}`), $(`\u22EE`, `\\vdots`), $(`\\varGamma`, `\\mathit{\\Gamma}`), $(`\\varDelta`, `\\mathit{\\Delta}`), $(`\\varTheta`, `\\mathit{\\Theta}`), $(`\\varLambda`, `\\mathit{\\Lambda}`), $(`\\varXi`, `\\mathit{\\Xi}`), $(`\\varPi`, `\\mathit{\\Pi}`), $(`\\varSigma`, `\\mathit{\\Sigma}`), $(`\\varUpsilon`, `\\mathit{\\Upsilon}`), $(`\\varPhi`, `\\mathit{\\Phi}`), $(`\\varPsi`, `\\mathit{\\Psi}`), $(`\\varOmega`, `\\mathit{\\Omega}`), $(`\\substack`, `\\begin{subarray}{c}#1\\end{subarray}`), $(`\\colon`, `\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax`), $(`\\boxed`, `\\fbox{$\\displaystyle{#1}$}`), $(`\\iff`, `\\DOTSB\\;\\Longleftrightarrow\\;`), $(`\\implies`, `\\DOTSB\\;\\Longrightarrow\\;`), $(`\\impliedby`, `\\DOTSB\\;\\Longleftarrow\\;`), $(`\\dddot`, `{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}`), $(`\\ddddot`, `{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}`);
var Vi = { ",": `\\dotsc`, "\\not": `\\dotsb`, "+": `\\dotsb`, "=": `\\dotsb`, "<": `\\dotsb`, ">": `\\dotsb`, "-": `\\dotsb`, "*": `\\dotsb`, ":": `\\dotsb`, "\\DOTSB": `\\dotsb`, "\\coprod": `\\dotsb`, "\\bigvee": `\\dotsb`, "\\bigwedge": `\\dotsb`, "\\biguplus": `\\dotsb`, "\\bigcap": `\\dotsb`, "\\bigcup": `\\dotsb`, "\\prod": `\\dotsb`, "\\sum": `\\dotsb`, "\\bigotimes": `\\dotsb`, "\\bigoplus": `\\dotsb`, "\\bigodot": `\\dotsb`, "\\bigsqcup": `\\dotsb`, "\\And": `\\dotsb`, "\\longrightarrow": `\\dotsb`, "\\Longrightarrow": `\\dotsb`, "\\longleftarrow": `\\dotsb`, "\\Longleftarrow": `\\dotsb`, "\\longleftrightarrow": `\\dotsb`, "\\Longleftrightarrow": `\\dotsb`, "\\mapsto": `\\dotsb`, "\\longmapsto": `\\dotsb`, "\\hookrightarrow": `\\dotsb`, "\\doteq": `\\dotsb`, "\\mathbin": `\\dotsb`, "\\mathrel": `\\dotsb`, "\\relbar": `\\dotsb`, "\\Relbar": `\\dotsb`, "\\xrightarrow": `\\dotsb`, "\\xleftarrow": `\\dotsb`, "\\DOTSI": `\\dotsi`, "\\int": `\\dotsi`, "\\oint": `\\dotsi`, "\\iint": `\\dotsi`, "\\iiint": `\\dotsi`, "\\iiiint": `\\dotsi`, "\\idotsint": `\\dotsi`, "\\DOTSX": `\\dotsx` }, Hi = /* @__PURE__ */ new Set([`bin`, `rel`]);
$(`\\dots`, function(e6) {
  var t3 = `\\dotso`, n2 = e6.expandAfterFuture().text;
  return n2 in Vi ? t3 = Vi[n2] : (n2.slice(0, 4) === `\\not` || n2 in k.math && Hi.has(k.math[n2].group)) && (t3 = `\\dotsb`), t3;
});
var Ui = { ")": true, "]": true, "\\rbrack": true, "\\}": true, "\\rbrace": true, "\\rangle": true, "\\rceil": true, "\\rfloor": true, "\\rgroup": true, "\\rmoustache": true, "\\right": true, "\\bigr": true, "\\biggr": true, "\\Bigr": true, "\\Biggr": true, $: true, ";": true, ".": true, ",": true };
$(`\\dotso`, function(e6) {
  return e6.future().text in Ui ? `\\ldots\\,` : `\\ldots`;
}), $(`\\dotsc`, function(e6) {
  var t3 = e6.future().text;
  return t3 in Ui && t3 !== `,` ? `\\ldots\\,` : `\\ldots`;
}), $(`\\cdots`, function(e6) {
  return e6.future().text in Ui ? `\\@cdots\\,` : `\\@cdots`;
}), $(`\\dotsb`, `\\cdots`), $(`\\dotsm`, `\\cdots`), $(`\\dotsi`, `\\!\\cdots`), $(`\\dotsx`, `\\ldots\\,`), $(`\\DOTSI`, `\\relax`), $(`\\DOTSB`, `\\relax`), $(`\\DOTSX`, `\\relax`), $(`\\tmspace`, `\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax`), $(`\\,`, `\\tmspace+{3mu}{.1667em}`), $(`\\thinspace`, `\\,`), $(`\\>`, `\\mskip{4mu}`), $(`\\:`, `\\tmspace+{4mu}{.2222em}`), $(`\\medspace`, `\\:`), $(`\\;`, `\\tmspace+{5mu}{.2777em}`), $(`\\thickspace`, `\\;`), $(`\\!`, `\\tmspace-{3mu}{.1667em}`), $(`\\negthinspace`, `\\!`), $(`\\negmedspace`, `\\tmspace-{4mu}{.2222em}`), $(`\\negthickspace`, `\\tmspace-{5mu}{.277em}`), $(`\\enspace`, `\\kern.5em `), $(`\\enskip`, `\\hskip.5em\\relax`), $(`\\quad`, `\\hskip1em\\relax`), $(`\\qquad`, `\\hskip2em\\relax`), $(`\\tag`, `\\@ifstar\\tag@literal\\tag@paren`), $(`\\tag@paren`, `\\tag@literal{({#1})}`), $(`\\tag@literal`, (t3) => {
  if (t3.macros.get(`\\df@tag`)) throw new e(`Multiple \\tag`);
  return `\\gdef\\df@tag{\\text{#1}}`;
}), $(`\\bmod`, `\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}`), $(`\\pod`, `\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)`), $(`\\pmod`, `\\pod{{\\rm mod}\\mkern6mu#1}`), $(`\\mod`, `\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1`), $(`\\newline`, `\\\\\\relax`), $(`\\TeX`, `\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}`);
var Wi = O(Be[`Main-Regular`][84][1] - 0.7 * Be[`Main-Regular`][65][1]);
$(`\\LaTeX`, `\\textrm{\\html@mathml{` + (`L\\kern-.36em\\raisebox{` + Wi + `}{\\scriptstyle A}`) + `\\kern-.15em\\TeX}{LaTeX}}`), $(`\\KaTeX`, `\\textrm{\\html@mathml{` + (`K\\kern-.17em\\raisebox{` + Wi + `}{\\scriptstyle A}`) + `\\kern-.15em\\TeX}{KaTeX}}`), $(`\\hspace`, `\\@ifstar\\@hspacer\\@hspace`), $(`\\@hspace`, `\\hskip #1\\relax`), $(`\\@hspacer`, `\\rule{0pt}{0pt}\\hskip #1\\relax`), $(`\\ordinarycolon`, `:`), $(`\\vcentcolon`, `\\mathrel{\\mathop\\ordinarycolon}`), $(`\\dblcolon`, `\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}`), $(`\\coloneqq`, `\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}`), $(`\\Coloneqq`, `\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}`), $(`\\coloneq`, `\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}`), $(`\\Coloneq`, `\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}`), $(`\\eqqcolon`, `\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}`), $(`\\Eqqcolon`, `\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}`), $(`\\eqcolon`, `\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}`), $(`\\Eqcolon`, `\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}`), $(`\\colonapprox`, `\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}`), $(`\\Colonapprox`, `\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}`), $(`\\colonsim`, `\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}`), $(`\\Colonsim`, `\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}`), $(`\u2237`, `\\dblcolon`), $(`\u2239`, `\\eqcolon`), $(`\u2254`, `\\coloneqq`), $(`\u2255`, `\\eqqcolon`), $(`\u2A74`, `\\Coloneqq`), $(`\\ratio`, `\\vcentcolon`), $(`\\coloncolon`, `\\dblcolon`), $(`\\colonequals`, `\\coloneqq`), $(`\\coloncolonequals`, `\\Coloneqq`), $(`\\equalscolon`, `\\eqqcolon`), $(`\\equalscoloncolon`, `\\Eqqcolon`), $(`\\colonminus`, `\\coloneq`), $(`\\coloncolonminus`, `\\Coloneq`), $(`\\minuscolon`, `\\eqcolon`), $(`\\minuscoloncolon`, `\\Eqcolon`), $(`\\coloncolonapprox`, `\\Colonapprox`), $(`\\coloncolonsim`, `\\Colonsim`), $(`\\simcolon`, `\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}`), $(`\\simcoloncolon`, `\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}`), $(`\\approxcolon`, `\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}`), $(`\\approxcoloncolon`, `\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}`), $(`\\notni`, "\\html@mathml{\\not\\ni}{\\mathrel{\\char`\u220C}}"), $(`\\limsup`, `\\DOTSB\\operatorname*{lim\\,sup}`), $(`\\liminf`, `\\DOTSB\\operatorname*{lim\\,inf}`), $(`\\injlim`, `\\DOTSB\\operatorname*{inj\\,lim}`), $(`\\projlim`, `\\DOTSB\\operatorname*{proj\\,lim}`), $(`\\varlimsup`, `\\DOTSB\\operatorname*{\\overline{lim}}`), $(`\\varliminf`, `\\DOTSB\\operatorname*{\\underline{lim}}`), $(`\\varinjlim`, `\\DOTSB\\operatorname*{\\underrightarrow{lim}}`), $(`\\varprojlim`, `\\DOTSB\\operatorname*{\\underleftarrow{lim}}`), $(`\\gvertneqq`, `\\html@mathml{\\@gvertneqq}{\u2269}`), $(`\\lvertneqq`, `\\html@mathml{\\@lvertneqq}{\u2268}`), $(`\\ngeqq`, `\\html@mathml{\\@ngeqq}{\u2271}`), $(`\\ngeqslant`, `\\html@mathml{\\@ngeqslant}{\u2271}`), $(`\\nleqq`, `\\html@mathml{\\@nleqq}{\u2270}`), $(`\\nleqslant`, `\\html@mathml{\\@nleqslant}{\u2270}`), $(`\\nshortmid`, `\\html@mathml{\\@nshortmid}{\u2224}`), $(`\\nshortparallel`, `\\html@mathml{\\@nshortparallel}{\u2226}`), $(`\\nsubseteqq`, `\\html@mathml{\\@nsubseteqq}{\u2288}`), $(`\\nsupseteqq`, `\\html@mathml{\\@nsupseteqq}{\u2289}`), $(`\\varsubsetneq`, `\\html@mathml{\\@varsubsetneq}{\u228A}`), $(`\\varsubsetneqq`, `\\html@mathml{\\@varsubsetneqq}{\u2ACB}`), $(`\\varsupsetneq`, `\\html@mathml{\\@varsupsetneq}{\u228B}`), $(`\\varsupsetneqq`, `\\html@mathml{\\@varsupsetneqq}{\u2ACC}`), $(`\\imath`, `\\html@mathml{\\@imath}{\u0131}`), $(`\\jmath`, `\\html@mathml{\\@jmath}{\u0237}`), $(`\\llbracket`, "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`\u27E6}}"), $(`\\rrbracket`, "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`\u27E7}}"), $(`\u27E6`, `\\llbracket`), $(`\u27E7`, `\\rrbracket`), $(`\\lBrace`, "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`\u2983}}"), $(`\\rBrace`, "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`\u2984}}"), $(`\u2983`, `\\lBrace`), $(`\u2984`, `\\rBrace`), $(`\\minuso`, "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`\u29B5}}"), $(`\u29B5`, `\\minuso`), $(`\\darr`, `\\downarrow`), $(`\\dArr`, `\\Downarrow`), $(`\\Darr`, `\\Downarrow`), $(`\\lang`, `\\langle`), $(`\\rang`, `\\rangle`), $(`\\uarr`, `\\uparrow`), $(`\\uArr`, `\\Uparrow`), $(`\\Uarr`, `\\Uparrow`), $(`\\N`, `\\mathbb{N}`), $(`\\R`, `\\mathbb{R}`), $(`\\Z`, `\\mathbb{Z}`), $(`\\alef`, `\\aleph`), $(`\\alefsym`, `\\aleph`), $(`\\Alpha`, `\\mathrm{A}`), $(`\\Beta`, `\\mathrm{B}`), $(`\\bull`, `\\bullet`), $(`\\Chi`, `\\mathrm{X}`), $(`\\clubs`, `\\clubsuit`), $(`\\cnums`, `\\mathbb{C}`), $(`\\Complex`, `\\mathbb{C}`), $(`\\Dagger`, `\\ddagger`), $(`\\diamonds`, `\\diamondsuit`), $(`\\empty`, `\\emptyset`), $(`\\Epsilon`, `\\mathrm{E}`), $(`\\Eta`, `\\mathrm{H}`), $(`\\exist`, `\\exists`), $(`\\harr`, `\\leftrightarrow`), $(`\\hArr`, `\\Leftrightarrow`), $(`\\Harr`, `\\Leftrightarrow`), $(`\\hearts`, `\\heartsuit`), $(`\\image`, `\\Im`), $(`\\infin`, `\\infty`), $(`\\Iota`, `\\mathrm{I}`), $(`\\isin`, `\\in`), $(`\\Kappa`, `\\mathrm{K}`), $(`\\larr`, `\\leftarrow`), $(`\\lArr`, `\\Leftarrow`), $(`\\Larr`, `\\Leftarrow`), $(`\\lrarr`, `\\leftrightarrow`), $(`\\lrArr`, `\\Leftrightarrow`), $(`\\Lrarr`, `\\Leftrightarrow`), $(`\\Mu`, `\\mathrm{M}`), $(`\\natnums`, `\\mathbb{N}`), $(`\\Nu`, `\\mathrm{N}`), $(`\\Omicron`, `\\mathrm{O}`), $(`\\plusmn`, `\\pm`), $(`\\rarr`, `\\rightarrow`), $(`\\rArr`, `\\Rightarrow`), $(`\\Rarr`, `\\Rightarrow`), $(`\\real`, `\\Re`), $(`\\reals`, `\\mathbb{R}`), $(`\\Reals`, `\\mathbb{R}`), $(`\\Rho`, `\\mathrm{P}`), $(`\\sdot`, `\\cdot`), $(`\\sect`, `\\S`), $(`\\spades`, `\\spadesuit`), $(`\\sub`, `\\subset`), $(`\\sube`, `\\subseteq`), $(`\\supe`, `\\supseteq`), $(`\\Tau`, `\\mathrm{T}`), $(`\\thetasym`, `\\vartheta`), $(`\\weierp`, `\\wp`), $(`\\Zeta`, `\\mathrm{Z}`), $(`\\argmin`, `\\DOTSB\\operatorname*{arg\\,min}`), $(`\\argmax`, `\\DOTSB\\operatorname*{arg\\,max}`), $(`\\plim`, `\\DOTSB\\mathop{\\operatorname{plim}}\\limits`), $(`\\bra`, `\\mathinner{\\langle{#1}|}`), $(`\\ket`, `\\mathinner{|{#1}\\rangle}`), $(`\\braket`, `\\mathinner{\\langle{#1}\\rangle}`), $(`\\Bra`, `\\left\\langle#1\\right|`), $(`\\Ket`, `\\left|#1\\right\\rangle`);
var Gi = (e6) => (t3) => {
  var n2 = t3.consumeArg().tokens, r2 = t3.consumeArg().tokens, i2 = t3.consumeArg().tokens, a2 = t3.consumeArg().tokens, o2 = t3.macros.get(`|`), s2 = t3.macros.get(`\\|`);
  t3.macros.beginGroup();
  var c2 = (t4) => (n3) => {
    e6 && (n3.macros.set(`|`, o2), i2.length && n3.macros.set(`\\|`, s2));
    var a3 = t4;
    return !t4 && i2.length && n3.future().text === `|` && (n3.popToken(), a3 = true), { tokens: a3 ? i2 : r2, numArgs: 0 };
  };
  t3.macros.set(`|`, c2(false)), i2.length && t3.macros.set(`\\|`, c2(true));
  var l2 = t3.consumeArg().tokens, u2 = t3.expandTokens([...a2, ...l2, ...n2]);
  return t3.macros.endGroup(), { tokens: u2.reverse(), numArgs: 0 };
};
$(`\\bra@ket`, Gi(false)), $(`\\bra@set`, Gi(true)), $(`\\Braket`, `\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}`), $(`\\Set`, `\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}`), $(`\\set`, `\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}`), $(`\\angln`, `{\\angl n}`), $(`\\blue`, `\\textcolor{##6495ed}{#1}`), $(`\\orange`, `\\textcolor{##ffa500}{#1}`), $(`\\pink`, `\\textcolor{##ff00af}{#1}`), $(`\\red`, `\\textcolor{##df0030}{#1}`), $(`\\green`, `\\textcolor{##28ae7b}{#1}`), $(`\\gray`, `\\textcolor{gray}{#1}`), $(`\\purple`, `\\textcolor{##9d38bd}{#1}`), $(`\\blueA`, `\\textcolor{##ccfaff}{#1}`), $(`\\blueB`, `\\textcolor{##80f6ff}{#1}`), $(`\\blueC`, `\\textcolor{##63d9ea}{#1}`), $(`\\blueD`, `\\textcolor{##11accd}{#1}`), $(`\\blueE`, `\\textcolor{##0c7f99}{#1}`), $(`\\tealA`, `\\textcolor{##94fff5}{#1}`), $(`\\tealB`, `\\textcolor{##26edd5}{#1}`), $(`\\tealC`, `\\textcolor{##01d1c1}{#1}`), $(`\\tealD`, `\\textcolor{##01a995}{#1}`), $(`\\tealE`, `\\textcolor{##208170}{#1}`), $(`\\greenA`, `\\textcolor{##b6ffb0}{#1}`), $(`\\greenB`, `\\textcolor{##8af281}{#1}`), $(`\\greenC`, `\\textcolor{##74cf70}{#1}`), $(`\\greenD`, `\\textcolor{##1fab54}{#1}`), $(`\\greenE`, `\\textcolor{##0d923f}{#1}`), $(`\\goldA`, `\\textcolor{##ffd0a9}{#1}`), $(`\\goldB`, `\\textcolor{##ffbb71}{#1}`), $(`\\goldC`, `\\textcolor{##ff9c39}{#1}`), $(`\\goldD`, `\\textcolor{##e07d10}{#1}`), $(`\\goldE`, `\\textcolor{##a75a05}{#1}`), $(`\\redA`, `\\textcolor{##fca9a9}{#1}`), $(`\\redB`, `\\textcolor{##ff8482}{#1}`), $(`\\redC`, `\\textcolor{##f9685d}{#1}`), $(`\\redD`, `\\textcolor{##e84d39}{#1}`), $(`\\redE`, `\\textcolor{##bc2612}{#1}`), $(`\\maroonA`, `\\textcolor{##ffbde0}{#1}`), $(`\\maroonB`, `\\textcolor{##ff92c6}{#1}`), $(`\\maroonC`, `\\textcolor{##ed5fa6}{#1}`), $(`\\maroonD`, `\\textcolor{##ca337c}{#1}`), $(`\\maroonE`, `\\textcolor{##9e034e}{#1}`), $(`\\purpleA`, `\\textcolor{##ddd7ff}{#1}`), $(`\\purpleB`, `\\textcolor{##c6b9fc}{#1}`), $(`\\purpleC`, `\\textcolor{##aa87ff}{#1}`), $(`\\purpleD`, `\\textcolor{##7854ab}{#1}`), $(`\\purpleE`, `\\textcolor{##543b78}{#1}`), $(`\\mintA`, `\\textcolor{##f5f9e8}{#1}`), $(`\\mintB`, `\\textcolor{##edf2df}{#1}`), $(`\\mintC`, `\\textcolor{##e0e5cc}{#1}`), $(`\\grayA`, `\\textcolor{##f6f7f7}{#1}`), $(`\\grayB`, `\\textcolor{##f0f1f2}{#1}`), $(`\\grayC`, `\\textcolor{##e3e5e6}{#1}`), $(`\\grayD`, `\\textcolor{##d6d8da}{#1}`), $(`\\grayE`, `\\textcolor{##babec2}{#1}`), $(`\\grayF`, `\\textcolor{##888d93}{#1}`), $(`\\grayG`, `\\textcolor{##626569}{#1}`), $(`\\grayH`, `\\textcolor{##3b3e40}{#1}`), $(`\\grayI`, `\\textcolor{##21242c}{#1}`), $(`\\kaBlue`, `\\textcolor{##314453}{#1}`), $(`\\kaGreen`, `\\textcolor{##71B307}{#1}`);
var Ki = { "^": true, _: true, "\\limits": true, "\\nolimits": true }, qi = class {
  constructor(e6, t3, n2) {
    this.settings = t3, this.expansionCount = 0, this.feed(e6), this.macros = new Li(Ri, t3.macros), this.mode = n2, this.stack = [];
  }
  feed(e6) {
    this.lexer = new Ii(e6, this.settings);
  }
  switchMode(e6) {
    this.mode = e6;
  }
  beginGroup() {
    this.macros.beginGroup();
  }
  endGroup() {
    this.macros.endGroup();
  }
  endGroups() {
    this.macros.endGroups();
  }
  future() {
    return this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
  }
  popToken() {
    return this.future(), this.stack.pop();
  }
  pushToken(e6) {
    this.stack.push(e6);
  }
  pushTokens(e6) {
    this.stack.push(...e6);
  }
  scanArgument(e6) {
    var t3, n2, r2;
    if (e6) {
      if (this.consumeSpaces(), this.future().text !== `[`) return null;
      t3 = this.popToken(), { tokens: r2, end: n2 } = this.consumeArg([`]`]);
    } else ({ tokens: r2, start: t3, end: n2 } = this.consumeArg());
    return this.pushToken(new Rr(`EOF`, n2.loc)), this.pushTokens(r2), new Rr(``, Lr.range(t3, n2));
  }
  consumeSpaces() {
    for (; this.future().text === ` `; ) this.stack.pop();
  }
  consumeArg(t3) {
    var n2 = [], r2 = t3 && t3.length > 0;
    r2 || this.consumeSpaces();
    var i2 = this.future(), a2, o2 = 0, s2 = 0;
    do {
      if (a2 = this.popToken(), n2.push(a2), a2.text === `{`) ++o2;
      else if (a2.text === `}`) {
        if (--o2, o2 === -1) throw new e(`Extra }`, a2);
      } else if (a2.text === `EOF`) throw new e(`Unexpected end of input in a macro argument, expected '` + (t3 && r2 ? t3[s2] : `}`) + `'`, a2);
      if (t3 && r2) if ((o2 === 0 || o2 === 1 && t3[s2] === `{`) && a2.text === t3[s2]) {
        if (++s2, s2 === t3.length) {
          n2.splice(-s2, s2);
          break;
        }
      } else s2 = 0;
    } while (o2 !== 0 || r2);
    return i2.text === `{` && n2[n2.length - 1].text === `}` && (n2.pop(), n2.shift()), n2.reverse(), { tokens: n2, start: i2, end: a2 };
  }
  consumeArgs(t3, n2) {
    if (n2) {
      if (n2.length !== t3 + 1) throw new e(`The length of delimiters doesn't match the number of args!`);
      for (var r2 = n2[0], i2 = 0; i2 < r2.length; i2++) {
        var a2 = this.popToken();
        if (r2[i2] !== a2.text) throw new e(`Use of the macro doesn't match its definition`, a2);
      }
    }
    for (var o2 = [], s2 = 0; s2 < t3; s2++) o2.push(this.consumeArg(n2 && n2[s2 + 1]).tokens);
    return o2;
  }
  countExpansion(t3) {
    if (this.expansionCount += t3, this.expansionCount > this.settings.maxExpand) throw new e(`Too many expansions: infinite loop or need to increase maxExpand setting`);
  }
  expandOnce(t3) {
    var n2 = this.popToken(), r2 = n2.text, i2 = n2.noexpand ? null : this._getExpansion(r2);
    if (i2 == null || t3 && i2.unexpandable) {
      if (t3 && i2 == null && r2[0] === `\\` && !this.isDefined(r2)) throw new e(`Undefined control sequence: ` + r2);
      return this.pushToken(n2), false;
    }
    this.countExpansion(1);
    var a2 = i2.tokens, o2 = this.consumeArgs(i2.numArgs, i2.delimiters);
    if (i2.numArgs) {
      a2 = a2.slice();
      for (var s2 = a2.length - 1; s2 >= 0; --s2) {
        var c2 = a2[s2];
        if (c2.text === `#`) {
          if (s2 === 0) throw new e(`Incomplete placeholder at end of macro body`, c2);
          if (c2 = a2[--s2], c2.text === `#`) a2.splice(s2 + 1, 1);
          else if (/^[1-9]$/.test(c2.text)) a2.splice(s2, 2, ...o2[c2.text - 1]);
          else throw new e(`Not a valid argument number`, c2);
        }
      }
    }
    return this.pushTokens(a2), a2.length;
  }
  expandAfterFuture() {
    return this.expandOnce(), this.future();
  }
  expandNextToken() {
    for (; ; ) if (this.expandOnce() === false) {
      var e6 = this.stack.pop();
      return e6.treatAsRelax && (e6.text = `\\relax`), e6;
    }
  }
  expandMacro(e6) {
    return this.macros.has(e6) ? this.expandTokens([new Rr(e6)]) : void 0;
  }
  expandTokens(e6) {
    var t3 = [], n2 = this.stack.length;
    for (this.pushTokens(e6); this.stack.length > n2; ) if (this.expandOnce(true) === false) {
      var r2 = this.stack.pop();
      r2.treatAsRelax && (r2.treatAsRelax = (r2.noexpand = false, false)), t3.push(r2);
    }
    return this.countExpansion(t3.length), t3;
  }
  expandMacroAsText(e6) {
    var t3 = this.expandMacro(e6);
    return t3 && t3.map((e7) => e7.text).join(``);
  }
  _getExpansion(e6) {
    var t3 = this.macros.get(e6);
    if (t3 == null) return t3;
    if (e6.length === 1) {
      var n2 = this.lexer.catcodes[e6];
      if (n2 != null && n2 !== 13) return;
    }
    var r2 = typeof t3 == `function` ? t3(this) : t3;
    if (typeof r2 == `string`) {
      var i2 = 0;
      if (r2.includes(`#`)) for (var a2 = r2.replace(/##/g, ``); a2.includes(`#` + (i2 + 1)); ) ++i2;
      for (var o2 = new Ii(r2, this.settings), s2 = [], c2 = o2.lex(); c2.text !== `EOF`; ) s2.push(c2), c2 = o2.lex();
      return s2.reverse(), { tokens: s2, numArgs: i2 };
    }
    return r2;
  }
  isDefined(e6) {
    return this.macros.has(e6) || Di.hasOwnProperty(e6) || k.math.hasOwnProperty(e6) || k.text.hasOwnProperty(e6) || Ki.hasOwnProperty(e6);
  }
  isExpandable(e6) {
    var t3 = this.macros.get(e6);
    return t3 == null ? Di.hasOwnProperty(e6) && !Di[e6].primitive : typeof t3 == `string` || typeof t3 == `function` || !t3.unexpandable;
  }
}, Ji = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, Yi = Object.freeze({ "\u208A": `+`, "\u208B": `-`, "\u208C": `=`, "\u208D": `(`, "\u208E": `)`, "\u2080": `0`, "\u2081": `1`, "\u2082": `2`, "\u2083": `3`, "\u2084": `4`, "\u2085": `5`, "\u2086": `6`, "\u2087": `7`, "\u2088": `8`, "\u2089": `9`, "\u2090": `a`, "\u2091": `e`, "\u2095": `h`, "\u1D62": `i`, "\u2C7C": `j`, "\u2096": `k`, "\u2097": `l`, "\u2098": `m`, "\u2099": `n`, "\u2092": `o`, "\u209A": `p`, "\u1D63": `r`, "\u209B": `s`, "\u209C": `t`, "\u1D64": `u`, "\u1D65": `v`, "\u2093": `x`, "\u1D66": `\u03B2`, "\u1D67": `\u03B3`, "\u1D68": `\u03C1`, "\u1D69": `\u03D5`, "\u1D6A": `\u03C7`, "\u207A": `+`, "\u207B": `-`, "\u207C": `=`, "\u207D": `(`, "\u207E": `)`, "\u2070": `0`, "\xB9": `1`, "\xB2": `2`, "\xB3": `3`, "\u2074": `4`, "\u2075": `5`, "\u2076": `6`, "\u2077": `7`, "\u2078": `8`, "\u2079": `9`, "\u1D2C": `A`, "\u1D2E": `B`, "\u1D30": `D`, "\u1D31": `E`, "\u1D33": `G`, "\u1D34": `H`, "\u1D35": `I`, "\u1D36": `J`, "\u1D37": `K`, "\u1D38": `L`, "\u1D39": `M`, "\u1D3A": `N`, "\u1D3C": `O`, "\u1D3E": `P`, "\u1D3F": `R`, "\u1D40": `T`, "\u1D41": `U`, "\u2C7D": `V`, "\u1D42": `W`, "\u1D43": `a`, "\u1D47": `b`, "\u1D9C": `c`, "\u1D48": `d`, "\u1D49": `e`, "\u1DA0": `f`, "\u1D4D": `g`, \u02B0: `h`, "\u2071": `i`, \u02B2: `j`, "\u1D4F": `k`, \u02E1: `l`, "\u1D50": `m`, \u207F: `n`, "\u1D52": `o`, "\u1D56": `p`, \u02B3: `r`, \u02E2: `s`, "\u1D57": `t`, "\u1D58": `u`, "\u1D5B": `v`, \u02B7: `w`, \u02E3: `x`, \u02B8: `y`, "\u1DBB": `z`, "\u1D5D": `\u03B2`, "\u1D5E": `\u03B3`, "\u1D5F": `\u03B4`, "\u1D60": `\u03D5`, "\u1D61": `\u03C7`, "\u1DBF": `\u03B8` }), Xi = { "\u0301": { text: `\\'`, math: `\\acute` }, "\u0300": { text: "\\`", math: `\\grave` }, "\u0308": { text: `\\"`, math: `\\ddot` }, "\u0303": { text: `\\~`, math: `\\tilde` }, "\u0304": { text: `\\=`, math: `\\bar` }, "\u0306": { text: `\\u`, math: `\\breve` }, "\u030C": { text: `\\v`, math: `\\check` }, "\u0302": { text: `\\^`, math: `\\hat` }, "\u0307": { text: `\\.`, math: `\\dot` }, "\u030A": { text: `\\r`, math: `\\mathring` }, "\u030B": { text: `\\H` }, "\u0327": { text: `\\c` } }, Zi = { \u00E1: `a\u0301`, \u00E0: `a\u0300`, \u00E4: `a\u0308`, \u01DF: `a\u0308\u0304`, \u00E3: `a\u0303`, \u0101: `a\u0304`, \u0103: `a\u0306`, \u1EAF: `a\u0306\u0301`, \u1EB1: `a\u0306\u0300`, \u1EB5: `a\u0306\u0303`, \u01CE: `a\u030C`, \u00E2: `a\u0302`, \u1EA5: `a\u0302\u0301`, \u1EA7: `a\u0302\u0300`, \u1EAB: `a\u0302\u0303`, \u0227: `a\u0307`, \u01E1: `a\u0307\u0304`, \u00E5: `a\u030A`, \u01FB: `a\u030A\u0301`, \u1E03: `b\u0307`, \u0107: `c\u0301`, \u1E09: `c\u0327\u0301`, \u010D: `c\u030C`, \u0109: `c\u0302`, \u010B: `c\u0307`, \u00E7: `c\u0327`, \u010F: `d\u030C`, \u1E0B: `d\u0307`, \u1E11: `d\u0327`, \u00E9: `e\u0301`, \u00E8: `e\u0300`, \u00EB: `e\u0308`, \u1EBD: `e\u0303`, \u0113: `e\u0304`, \u1E17: `e\u0304\u0301`, \u1E15: `e\u0304\u0300`, \u0115: `e\u0306`, \u1E1D: `e\u0327\u0306`, \u011B: `e\u030C`, \u00EA: `e\u0302`, \u1EBF: `e\u0302\u0301`, \u1EC1: `e\u0302\u0300`, \u1EC5: `e\u0302\u0303`, \u0117: `e\u0307`, \u0229: `e\u0327`, \u1E1F: `f\u0307`, \u01F5: `g\u0301`, \u1E21: `g\u0304`, \u011F: `g\u0306`, \u01E7: `g\u030C`, \u011D: `g\u0302`, \u0121: `g\u0307`, \u0123: `g\u0327`, \u1E27: `h\u0308`, \u021F: `h\u030C`, \u0125: `h\u0302`, \u1E23: `h\u0307`, \u1E29: `h\u0327`, \u00ED: `i\u0301`, \u00EC: `i\u0300`, \u00EF: `i\u0308`, \u1E2F: `i\u0308\u0301`, \u0129: `i\u0303`, \u012B: `i\u0304`, \u012D: `i\u0306`, \u01D0: `i\u030C`, \u00EE: `i\u0302`, \u01F0: `j\u030C`, \u0135: `j\u0302`, \u1E31: `k\u0301`, \u01E9: `k\u030C`, \u0137: `k\u0327`, \u013A: `l\u0301`, \u013E: `l\u030C`, \u013C: `l\u0327`, \u1E3F: `m\u0301`, \u1E41: `m\u0307`, \u0144: `n\u0301`, \u01F9: `n\u0300`, \u00F1: `n\u0303`, \u0148: `n\u030C`, \u1E45: `n\u0307`, \u0146: `n\u0327`, \u00F3: `o\u0301`, \u00F2: `o\u0300`, \u00F6: `o\u0308`, \u022B: `o\u0308\u0304`, \u00F5: `o\u0303`, \u1E4D: `o\u0303\u0301`, \u1E4F: `o\u0303\u0308`, \u022D: `o\u0303\u0304`, \u014D: `o\u0304`, \u1E53: `o\u0304\u0301`, \u1E51: `o\u0304\u0300`, \u014F: `o\u0306`, \u01D2: `o\u030C`, \u00F4: `o\u0302`, \u1ED1: `o\u0302\u0301`, \u1ED3: `o\u0302\u0300`, \u1ED7: `o\u0302\u0303`, \u022F: `o\u0307`, \u0231: `o\u0307\u0304`, \u0151: `o\u030B`, \u1E55: `p\u0301`, \u1E57: `p\u0307`, \u0155: `r\u0301`, \u0159: `r\u030C`, \u1E59: `r\u0307`, \u0157: `r\u0327`, \u015B: `s\u0301`, \u1E65: `s\u0301\u0307`, \u0161: `s\u030C`, \u1E67: `s\u030C\u0307`, \u015D: `s\u0302`, \u1E61: `s\u0307`, \u015F: `s\u0327`, \u1E97: `t\u0308`, \u0165: `t\u030C`, \u1E6B: `t\u0307`, \u0163: `t\u0327`, \u00FA: `u\u0301`, \u00F9: `u\u0300`, \u00FC: `u\u0308`, \u01D8: `u\u0308\u0301`, \u01DC: `u\u0308\u0300`, \u01D6: `u\u0308\u0304`, \u01DA: `u\u0308\u030C`, \u0169: `u\u0303`, \u1E79: `u\u0303\u0301`, \u016B: `u\u0304`, \u1E7B: `u\u0304\u0308`, \u016D: `u\u0306`, \u01D4: `u\u030C`, \u00FB: `u\u0302`, \u016F: `u\u030A`, \u0171: `u\u030B`, \u1E7D: `v\u0303`, \u1E83: `w\u0301`, \u1E81: `w\u0300`, \u1E85: `w\u0308`, \u0175: `w\u0302`, \u1E87: `w\u0307`, \u1E98: `w\u030A`, \u1E8D: `x\u0308`, \u1E8B: `x\u0307`, \u00FD: `y\u0301`, \u1EF3: `y\u0300`, \u00FF: `y\u0308`, \u1EF9: `y\u0303`, \u0233: `y\u0304`, \u0177: `y\u0302`, \u1E8F: `y\u0307`, \u1E99: `y\u030A`, \u017A: `z\u0301`, \u017E: `z\u030C`, \u1E91: `z\u0302`, \u017C: `z\u0307`, \u00C1: `A\u0301`, \u00C0: `A\u0300`, \u00C4: `A\u0308`, \u01DE: `A\u0308\u0304`, \u00C3: `A\u0303`, \u0100: `A\u0304`, \u0102: `A\u0306`, \u1EAE: `A\u0306\u0301`, \u1EB0: `A\u0306\u0300`, \u1EB4: `A\u0306\u0303`, \u01CD: `A\u030C`, \u00C2: `A\u0302`, \u1EA4: `A\u0302\u0301`, \u1EA6: `A\u0302\u0300`, \u1EAA: `A\u0302\u0303`, \u0226: `A\u0307`, \u01E0: `A\u0307\u0304`, \u00C5: `A\u030A`, \u01FA: `A\u030A\u0301`, \u1E02: `B\u0307`, \u0106: `C\u0301`, \u1E08: `C\u0327\u0301`, \u010C: `C\u030C`, \u0108: `C\u0302`, \u010A: `C\u0307`, \u00C7: `C\u0327`, \u010E: `D\u030C`, \u1E0A: `D\u0307`, \u1E10: `D\u0327`, \u00C9: `E\u0301`, \u00C8: `E\u0300`, \u00CB: `E\u0308`, \u1EBC: `E\u0303`, \u0112: `E\u0304`, \u1E16: `E\u0304\u0301`, \u1E14: `E\u0304\u0300`, \u0114: `E\u0306`, \u1E1C: `E\u0327\u0306`, \u011A: `E\u030C`, \u00CA: `E\u0302`, \u1EBE: `E\u0302\u0301`, \u1EC0: `E\u0302\u0300`, \u1EC4: `E\u0302\u0303`, \u0116: `E\u0307`, \u0228: `E\u0327`, \u1E1E: `F\u0307`, \u01F4: `G\u0301`, \u1E20: `G\u0304`, \u011E: `G\u0306`, \u01E6: `G\u030C`, \u011C: `G\u0302`, \u0120: `G\u0307`, \u0122: `G\u0327`, \u1E26: `H\u0308`, \u021E: `H\u030C`, \u0124: `H\u0302`, \u1E22: `H\u0307`, \u1E28: `H\u0327`, \u00CD: `I\u0301`, \u00CC: `I\u0300`, \u00CF: `I\u0308`, \u1E2E: `I\u0308\u0301`, \u0128: `I\u0303`, \u012A: `I\u0304`, \u012C: `I\u0306`, \u01CF: `I\u030C`, \u00CE: `I\u0302`, \u0130: `I\u0307`, \u0134: `J\u0302`, \u1E30: `K\u0301`, \u01E8: `K\u030C`, \u0136: `K\u0327`, \u0139: `L\u0301`, \u013D: `L\u030C`, \u013B: `L\u0327`, \u1E3E: `M\u0301`, \u1E40: `M\u0307`, \u0143: `N\u0301`, \u01F8: `N\u0300`, \u00D1: `N\u0303`, \u0147: `N\u030C`, \u1E44: `N\u0307`, \u0145: `N\u0327`, \u00D3: `O\u0301`, \u00D2: `O\u0300`, \u00D6: `O\u0308`, \u022A: `O\u0308\u0304`, \u00D5: `O\u0303`, \u1E4C: `O\u0303\u0301`, \u1E4E: `O\u0303\u0308`, \u022C: `O\u0303\u0304`, \u014C: `O\u0304`, \u1E52: `O\u0304\u0301`, \u1E50: `O\u0304\u0300`, \u014E: `O\u0306`, \u01D1: `O\u030C`, \u00D4: `O\u0302`, \u1ED0: `O\u0302\u0301`, \u1ED2: `O\u0302\u0300`, \u1ED6: `O\u0302\u0303`, \u022E: `O\u0307`, \u0230: `O\u0307\u0304`, \u0150: `O\u030B`, \u1E54: `P\u0301`, \u1E56: `P\u0307`, \u0154: `R\u0301`, \u0158: `R\u030C`, \u1E58: `R\u0307`, \u0156: `R\u0327`, \u015A: `S\u0301`, \u1E64: `S\u0301\u0307`, \u0160: `S\u030C`, \u1E66: `S\u030C\u0307`, \u015C: `S\u0302`, \u1E60: `S\u0307`, \u015E: `S\u0327`, \u0164: `T\u030C`, \u1E6A: `T\u0307`, \u0162: `T\u0327`, \u00DA: `U\u0301`, \u00D9: `U\u0300`, \u00DC: `U\u0308`, \u01D7: `U\u0308\u0301`, \u01DB: `U\u0308\u0300`, \u01D5: `U\u0308\u0304`, \u01D9: `U\u0308\u030C`, \u0168: `U\u0303`, \u1E78: `U\u0303\u0301`, \u016A: `U\u0304`, \u1E7A: `U\u0304\u0308`, \u016C: `U\u0306`, \u01D3: `U\u030C`, \u00DB: `U\u0302`, \u016E: `U\u030A`, \u0170: `U\u030B`, \u1E7C: `V\u0303`, \u1E82: `W\u0301`, \u1E80: `W\u0300`, \u1E84: `W\u0308`, \u0174: `W\u0302`, \u1E86: `W\u0307`, \u1E8C: `X\u0308`, \u1E8A: `X\u0307`, \u00DD: `Y\u0301`, \u1EF2: `Y\u0300`, \u0178: `Y\u0308`, \u1EF8: `Y\u0303`, \u0232: `Y\u0304`, \u0176: `Y\u0302`, \u1E8E: `Y\u0307`, \u0179: `Z\u0301`, \u017D: `Z\u030C`, \u1E90: `Z\u0302`, \u017B: `Z\u0307`, \u03AC: `\u03B1\u0301`, \u1F70: `\u03B1\u0300`, \u1FB1: `\u03B1\u0304`, \u1FB0: `\u03B1\u0306`, \u03AD: `\u03B5\u0301`, \u1F72: `\u03B5\u0300`, \u03AE: `\u03B7\u0301`, \u1F74: `\u03B7\u0300`, \u03AF: `\u03B9\u0301`, \u1F76: `\u03B9\u0300`, \u03CA: `\u03B9\u0308`, \u0390: `\u03B9\u0308\u0301`, \u1FD2: `\u03B9\u0308\u0300`, \u1FD1: `\u03B9\u0304`, \u1FD0: `\u03B9\u0306`, \u03CC: `\u03BF\u0301`, \u1F78: `\u03BF\u0300`, \u03CD: `\u03C5\u0301`, \u1F7A: `\u03C5\u0300`, \u03CB: `\u03C5\u0308`, \u03B0: `\u03C5\u0308\u0301`, \u1FE2: `\u03C5\u0308\u0300`, \u1FE1: `\u03C5\u0304`, \u1FE0: `\u03C5\u0306`, \u03CE: `\u03C9\u0301`, \u1F7C: `\u03C9\u0300`, \u038E: `\u03A5\u0301`, \u1FEA: `\u03A5\u0300`, \u03AB: `\u03A5\u0308`, \u1FE9: `\u03A5\u0304`, \u1FE8: `\u03A5\u0306`, \u038F: `\u03A9\u0301`, \u1FFA: `\u03A9\u0300` }, Qi = class t2 {
  constructor(e6, t3) {
    this.mode = `math`, this.gullet = new qi(e6, t3, this.mode), this.settings = t3, this.leftrightDepth = 0, this.nextToken = null;
  }
  expect(t3, n2) {
    if (n2 === void 0 && (n2 = true), this.fetch().text !== t3) throw new e(`Expected '` + t3 + `', got '` + this.fetch().text + `'`, this.fetch());
    n2 && this.consume();
  }
  consume() {
    this.nextToken = null;
  }
  fetch() {
    return this.nextToken ?? (this.nextToken = this.gullet.expandNextToken()), this.nextToken;
  }
  switchMode(e6) {
    this.mode = e6, this.gullet.switchMode(e6);
  }
  parse() {
    this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set(`\\color`, `\\textcolor`);
    try {
      var e6 = this.parseExpression(false);
      return this.expect(`EOF`), this.settings.globalGroup || this.gullet.endGroup(), e6;
    } finally {
      this.gullet.endGroups();
    }
  }
  subparse(e6) {
    var t3 = this.nextToken;
    this.consume(), this.gullet.pushToken(new Rr(`}`)), this.gullet.pushTokens(e6);
    var n2 = this.parseExpression(false);
    return this.expect(`}`), this.nextToken = t3, n2;
  }
  parseExpression(e6, n2) {
    for (var r2 = []; ; ) {
      this.mode === `math` && this.consumeSpaces();
      var i2 = this.fetch();
      if (t2.endOfExpression.has(i2.text) || n2 && i2.text === n2 || e6 && Di[i2.text] && Di[i2.text].infix) break;
      var a2 = this.parseAtom(n2);
      if (a2) {
        if (a2.type === `internal`) continue;
      } else break;
      r2.push(a2);
    }
    return this.mode === `text` && this.formLigatures(r2), this.handleInfixNodes(r2);
  }
  handleInfixNodes(t3) {
    for (var n2 = -1, r2, i2 = 0; i2 < t3.length; i2++) {
      var a2 = t3[i2];
      if (a2.type === `infix`) {
        if (n2 !== -1) throw new e(`only one infix operator per group`, a2.token);
        n2 = i2, r2 = a2.replaceWith;
      }
    }
    if (n2 !== -1 && r2) {
      var o2, s2, c2 = t3.slice(0, n2), l2 = t3.slice(n2 + 1);
      return o2 = c2.length === 1 && c2[0].type === `ordgroup` ? c2[0] : { type: `ordgroup`, mode: this.mode, body: c2 }, s2 = l2.length === 1 && l2[0].type === `ordgroup` ? l2[0] : { type: `ordgroup`, mode: this.mode, body: l2 }, [r2 === `\\\\abovefrac` ? this.callFunction(r2, [o2, t3[n2], s2], []) : this.callFunction(r2, [o2, s2], [])];
    } else return t3;
  }
  handleSupSubscript(t3) {
    var n2 = this.fetch(), r2 = n2.text;
    this.consume(), this.consumeSpaces();
    var i2;
    do
      i2 = this.parseGroup(t3);
    while ((i2 == null ? void 0 : i2.type) === `internal`);
    if (!i2) throw new e(`Expected group after '` + r2 + `'`, n2);
    return i2;
  }
  formatUnsupportedCmd(e6) {
    for (var t3 = [], n2 = 0; n2 < e6.length; n2++) t3.push({ type: `textord`, mode: `text`, text: e6[n2] });
    var r2 = { type: `text`, mode: this.mode, body: t3 };
    return { type: `color`, mode: this.mode, color: this.settings.errorColor, body: [r2] };
  }
  parseAtom(t3) {
    var n2 = this.parseGroup(`atom`, t3);
    if ((n2 == null ? void 0 : n2.type) === `internal` || this.mode === `text`) return n2;
    for (var r2, i2; ; ) {
      this.consumeSpaces();
      var a2 = this.fetch();
      if (a2.text === `\\limits` || a2.text === `\\nolimits`) {
        if (n2 && n2.type === `op`) n2.limits = a2.text === `\\limits`, n2.alwaysHandleSupSub = true;
        else if (n2 && n2.type === `operatorname`) n2.alwaysHandleSupSub && (n2.limits = a2.text === `\\limits`);
        else throw new e(`Limit controls must follow a math operator`, a2);
        this.consume();
      } else if (a2.text === `^`) {
        if (r2) throw new e(`Double superscript`, a2);
        r2 = this.handleSupSubscript(`superscript`);
      } else if (a2.text === `_`) {
        if (i2) throw new e(`Double subscript`, a2);
        i2 = this.handleSupSubscript(`subscript`);
      } else if (a2.text === `'`) {
        if (r2) throw new e(`Double superscript`, a2);
        var o2 = { type: `textord`, mode: this.mode, text: `\\prime` }, s2 = [o2];
        for (this.consume(); this.fetch().text === `'`; ) s2.push(o2), this.consume();
        this.fetch().text === `^` && s2.push(this.handleSupSubscript(`superscript`)), r2 = { type: `ordgroup`, mode: this.mode, body: s2 };
      } else if (Yi[a2.text]) {
        var c2 = Ji.test(a2.text), l2 = [];
        for (l2.push(new Rr(Yi[a2.text])), this.consume(); ; ) {
          var u2 = this.fetch().text;
          if (!Yi[u2] || Ji.test(u2) !== c2) break;
          l2.unshift(new Rr(Yi[u2])), this.consume();
        }
        var d2 = this.subparse(l2);
        c2 ? i2 = { type: `ordgroup`, mode: `math`, body: d2 } : r2 = { type: `ordgroup`, mode: `math`, body: d2 };
      } else break;
    }
    return r2 || i2 ? { type: `supsub`, mode: this.mode, base: n2, sup: r2, sub: i2 } : n2;
  }
  parseFunction(t3, n2) {
    var r2 = this.fetch(), i2 = r2.text, a2 = Di[i2];
    if (!a2) return null;
    if (this.consume(), n2 && n2 !== `atom` && !a2.allowedInArgument) throw new e(`Got function '` + i2 + `' with no arguments` + (n2 ? ` as ` + n2 : ``), r2);
    if (this.mode === `text` && !a2.allowedInText) throw new e(`Can't use function '` + i2 + `' in text mode`, r2);
    if (this.mode === `math` && a2.allowedInMath === false) throw new e(`Can't use function '` + i2 + `' in math mode`, r2);
    var { args: o2, optArgs: s2 } = this.parseArguments(i2, a2);
    return this.callFunction(i2, o2, s2, r2, t3);
  }
  callFunction(t3, n2, r2, i2, a2) {
    var o2 = { funcName: t3, parser: this, token: i2, breakOnTokenText: a2 }, s2 = Di[t3];
    if (s2 && s2.handler) return s2.handler(o2, n2, r2);
    throw new e(`No function handler for ` + t3);
  }
  parseArguments(t3, n2) {
    var r2 = n2.numArgs + n2.numOptionalArgs;
    if (r2 === 0) return { args: [], optArgs: [] };
    for (var i2 = [], a2 = [], o2 = 0; o2 < r2; o2++) {
      var s2 = n2.argTypes && n2.argTypes[o2], c2 = o2 < n2.numOptionalArgs;
      (`primitive` in n2 && n2.primitive && s2 == null || n2.type === `sqrt` && o2 === 1 && a2[0] == null) && (s2 = `primitive`);
      var l2 = this.parseGroupOfType(`argument to '` + t3 + `'`, s2, c2);
      if (c2) a2.push(l2);
      else if (l2 != null) i2.push(l2);
      else throw new e(`Null argument, please report this as a bug`);
    }
    return { args: i2, optArgs: a2 };
  }
  parseGroupOfType(t3, n2, r2) {
    switch (n2) {
      case `color`:
        return this.parseColorGroup(r2);
      case `size`:
        return this.parseSizeGroup(r2);
      case `url`:
        return this.parseUrlGroup(r2);
      case `math`:
      case `text`:
        return this.parseArgumentGroup(r2, n2);
      case `hbox`:
        var i2 = this.parseArgumentGroup(r2, `text`);
        return i2 == null ? null : { type: `styling`, mode: i2.mode, body: [i2], style: `text` };
      case `raw`:
        var a2 = this.parseStringGroup(`raw`, r2);
        return a2 == null ? null : { type: `raw`, mode: `text`, string: a2.text };
      case `primitive`:
        if (r2) throw new e(`A primitive argument cannot be optional`);
        var o2 = this.parseGroup(t3);
        if (o2 == null) throw new e(`Expected group as ` + t3, this.fetch());
        return o2;
      case `original`:
      case null:
      case void 0:
        return this.parseArgumentGroup(r2);
      default:
        throw new e(`Unknown group type as ` + t3, this.fetch());
    }
  }
  consumeSpaces() {
    for (; this.fetch().text === ` `; ) this.consume();
  }
  parseStringGroup(e6, t3) {
    var n2 = this.gullet.scanArgument(t3);
    if (n2 == null) return null;
    for (var r2 = ``, i2; (i2 = this.fetch()).text !== `EOF`; ) r2 += i2.text, this.consume();
    return this.consume(), n2.text = r2, n2;
  }
  parseRegexGroup(t3, n2) {
    for (var r2 = this.fetch(), i2 = r2, a2 = ``, o2; (o2 = this.fetch()).text !== `EOF` && t3.test(a2 + o2.text); ) i2 = o2, a2 += i2.text, this.consume();
    if (a2 === ``) throw new e(`Invalid ` + n2 + `: '` + r2.text + `'`, r2);
    return r2.range(i2, a2);
  }
  parseColorGroup(t3) {
    var n2 = this.parseStringGroup(`color`, t3);
    if (n2 == null) return null;
    var r2 = /^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(n2.text);
    if (!r2) throw new e(`Invalid color: '` + n2.text + `'`, n2);
    var i2 = r2[0];
    return /^[0-9a-f]{6}$/i.test(i2) && (i2 = `#` + i2), { type: `color-token`, mode: this.mode, color: i2 };
  }
  parseSizeGroup(t3) {
    var n2, r2 = false;
    if (this.gullet.consumeSpaces(), n2 = !t3 && this.gullet.future().text !== `{` ? this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, `size`) : this.parseStringGroup(`size`, t3), !n2) return null;
    !t3 && n2.text.length === 0 && (n2.text = `0pt`, r2 = true);
    var i2 = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(n2.text);
    if (!i2) throw new e(`Invalid size: '` + n2.text + `'`, n2);
    var a2 = { number: +(i2[1] + i2[2]), unit: i2[3] };
    if (!Ce(a2)) throw new e(`Invalid unit: '` + a2.unit + `'`, n2);
    return { type: `size`, mode: this.mode, value: a2, isBlank: r2 };
  }
  parseUrlGroup(e6) {
    this.gullet.lexer.setCatcode(`%`, 13), this.gullet.lexer.setCatcode(`~`, 12);
    var t3 = this.parseStringGroup(`url`, e6);
    if (this.gullet.lexer.setCatcode(`%`, 14), this.gullet.lexer.setCatcode(`~`, 13), t3 == null) return null;
    var n2 = t3.text.replace(/\\([#$%&~_^{}])/g, `$1`);
    return { type: `url`, mode: this.mode, url: n2 };
  }
  parseArgumentGroup(e6, t3) {
    var n2 = this.gullet.scanArgument(e6);
    if (n2 == null) return null;
    var r2 = this.mode;
    t3 && this.switchMode(t3), this.gullet.beginGroup();
    var i2 = this.parseExpression(false, `EOF`);
    this.expect(`EOF`), this.gullet.endGroup();
    var a2 = { type: `ordgroup`, mode: this.mode, loc: n2.loc, body: i2 };
    return t3 && this.switchMode(r2), a2;
  }
  parseGroup(t3, n2) {
    var r2 = this.fetch(), i2 = r2.text, a2;
    if (i2 === `{` || i2 === `\\begingroup`) {
      this.consume();
      var o2 = i2 === `{` ? `}` : `\\endgroup`;
      this.gullet.beginGroup();
      var s2 = this.parseExpression(false, o2), c2 = this.fetch();
      this.expect(o2), this.gullet.endGroup(), a2 = { type: `ordgroup`, mode: this.mode, loc: Lr.range(r2, c2), body: s2, semisimple: i2 === `\\begingroup` || void 0 };
    } else if (a2 = this.parseFunction(n2, t3) || this.parseSymbol(), a2 == null && i2[0] === `\\` && !Ki.hasOwnProperty(i2)) {
      if (this.settings.throwOnError) throw new e(`Undefined control sequence: ` + i2, r2);
      a2 = this.formatUnsupportedCmd(i2), this.consume();
    }
    return a2;
  }
  formLigatures(e6) {
    for (var t3 = e6.length - 1, n2 = 0; n2 < t3; ++n2) {
      var r2 = e6[n2];
      if (r2.type === `textord`) {
        var i2 = r2.text, a2 = e6[n2 + 1];
        if (!(!a2 || a2.type !== `textord`)) {
          if (i2 === `-` && a2.text === `-`) {
            var o2 = e6[n2 + 2];
            n2 + 1 < t3 && o2 && o2.type === `textord` && o2.text === `-` ? (e6.splice(n2, 3, { type: `textord`, mode: `text`, loc: Lr.range(r2, o2), text: `---` }), t3 -= 2) : (e6.splice(n2, 2, { type: `textord`, mode: `text`, loc: Lr.range(r2, a2), text: `--` }), --t3);
          }
          (i2 === `'` || i2 === "`") && a2.text === i2 && (e6.splice(n2, 2, { type: `textord`, mode: `text`, loc: Lr.range(r2, a2), text: i2 + i2 }), --t3);
        }
      }
    }
  }
  parseSymbol() {
    var t3 = this.fetch(), n2 = t3.text;
    if (/^\\verb[^a-zA-Z]/.test(n2)) {
      this.consume();
      var r2 = n2.slice(5), i2 = r2.charAt(0) === `*`;
      if (i2 && (r2 = r2.slice(1)), r2.length < 2 || r2.charAt(0) !== r2.slice(-1)) throw new e(`\\verb assertion failed --
                    please report what input caused this bug`);
      return r2 = r2.slice(1, -1), { type: `verb`, mode: `text`, body: r2, star: i2 };
    }
    Zi.hasOwnProperty(n2[0]) && !k[this.mode][n2[0]] && (this.settings.strict && this.mode === `math` && this.settings.reportNonstrict(`unicodeTextInMathMode`, `Accented Unicode text character "` + n2[0] + `" used in math mode`, t3), n2 = Zi[n2[0]] + n2.slice(1));
    var a2 = Pi.exec(n2);
    a2 && (n2 = n2.substring(0, a2.index), n2 === `i` ? n2 = `\u0131` : n2 === `j` && (n2 = `\u0237`));
    var o2;
    if (k[this.mode][n2]) {
      this.settings.strict && this.mode === `math` && pt.includes(n2) && this.settings.reportNonstrict(`unicodeTextInMathMode`, `Latin-1/Unicode text character "` + n2[0] + `" used in math mode`, t3);
      var s2 = k[this.mode][n2].group, c2 = Lr.range(t3), l2;
      if (qe.hasOwnProperty(s2)) {
        var u2 = s2;
        l2 = { type: `atom`, mode: this.mode, family: u2, loc: c2, text: n2 };
      } else l2 = { type: s2, mode: this.mode, loc: c2, text: n2 };
      o2 = l2;
    } else if (n2.charCodeAt(0) >= 128) this.settings.strict && (se(n2.charCodeAt(0)) ? this.mode === `math` && this.settings.reportNonstrict(`unicodeTextInMathMode`, `Unicode text character "` + n2[0] + `" used in math mode`, t3) : this.settings.reportNonstrict(`unknownSymbol`, `Unrecognized Unicode character "` + n2[0] + `"` + (` (` + n2.charCodeAt(0) + `)`), t3)), o2 = { type: `textord`, mode: `text`, loc: Lr.range(t3), text: n2 };
    else return null;
    if (this.consume(), a2) for (var d2 = 0; d2 < a2[0].length; d2++) {
      var f2 = a2[0][d2];
      if (!Xi[f2]) throw new e(`Unknown accent ' ` + f2 + `'`, t3);
      var p2 = Xi[f2][this.mode] || Xi[f2].text;
      if (!p2) throw new e(`Accent ` + f2 + ` unsupported in ` + this.mode + ` mode`, t3);
      o2 = { type: `accent`, mode: this.mode, loc: Lr.range(t3), label: p2, isStretchy: false, isShifty: true, base: o2 };
    }
    return o2;
  }
};
Qi.endOfExpression = /* @__PURE__ */ new Set([`}`, `\\endgroup`, `\\end`, `\\right`, `&`]);
var $i = function(t3, n2) {
  if (!(typeof t3 == `string` || t3 instanceof String)) throw TypeError(`KaTeX can only parse string typed expression`);
  var r2 = new Qi(t3, n2);
  delete r2.gullet.macros.current[`\\df@tag`];
  var i2 = r2.parse();
  if (delete r2.gullet.macros.current[`\\current@color`], delete r2.gullet.macros.current[`\\color`], r2.gullet.macros.get(`\\df@tag`)) {
    if (!n2.displayMode) throw new e(`\\tag works only in display equations`);
    i2 = [{ type: `tag`, mode: `text`, body: i2, tag: r2.subparse([new Rr(`\\df@tag`)]) }];
  }
  return i2;
}, ea = function(e6, t3, n2) {
  t3.textContent = ``;
  var r2 = ia(e6, n2).toNode();
  t3.appendChild(r2);
};
typeof document < `u` && document.compatMode !== `CSS1Compat` && (typeof console < `u` && console.warn(`Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype.`), ea = function() {
  throw new e(`KaTeX doesn't work in quirks mode.`);
});
var ta = function(e6, t3) {
  return ia(e6, t3).toMarkup();
}, na = function(e6, t3) {
  return $i(e6, new f(t3));
}, ra = function(t3, n2, r2) {
  if (r2.throwOnError || !(t3 instanceof e)) throw t3;
  var i2 = U([`katex-error`], [new Ne(n2)]);
  return i2.setAttribute(`title`, t3.toString()), i2.setAttribute(`style`, `color:` + r2.errorColor), i2;
}, ia = function(e6, t3) {
  var n2 = new f(t3);
  try {
    return Cn($i(e6, n2), e6, n2);
  } catch (t4) {
    return ra(t4, e6, n2);
  }
}, aa = { version: `0.16.45`, render: ea, renderToString: ta, ParseError: e, SETTINGS_SCHEMA: u, __parse: na, __renderToDomTree: ia, __renderToHTMLTree: function(e6, t3) {
  var n2 = new f(t3);
  try {
    return wn($i(e6, n2), e6, n2);
  } catch (t4) {
    return ra(t4, e6, n2);
  }
}, __setFontMetrics: Ue, __defineSymbol: A, __defineFunction: K, __defineMacro: $, __domTree: { Span: ke, Anchor: Ae, SymbolNode: Ne, SvgNode: Pe, PathNode: Fe, LineNode: Ie } };
export {
  aa as default
};
