import { h as e } from "./src-D8UWkQNo.js";
function t(e2) {
  return e2 == null;
}
e(t, `isNothing`);
function n(e2) {
  return typeof e2 == `object` && !!e2;
}
e(n, `isObject`);
function r(e2) {
  return Array.isArray(e2) ? e2 : t(e2) ? [] : [e2];
}
e(r, `toArray`);
function i(e2, t2) {
  var n2, r2, i2, a2;
  if (t2) for (a2 = Object.keys(t2), n2 = 0, r2 = a2.length; n2 < r2; n2 += 1) i2 = a2[n2], e2[i2] = t2[i2];
  return e2;
}
e(i, `extend`);
function a(e2, t2) {
  var n2 = ``, r2;
  for (r2 = 0; r2 < t2; r2 += 1) n2 += e2;
  return n2;
}
e(a, `repeat`);
function o(e2) {
  return e2 === 0 && 1 / e2 == -1 / 0;
}
e(o, `isNegativeZero`);
var s = { isNothing: t, isObject: n, toArray: r, repeat: a, isNegativeZero: o, extend: i };
function c(e2, t2) {
  var n2 = ``, r2 = e2.reason || `(unknown reason)`;
  return e2.mark ? (e2.mark.name && (n2 += `in "` + e2.mark.name + `" `), n2 += `(` + (e2.mark.line + 1) + `:` + (e2.mark.column + 1) + `)`, !t2 && e2.mark.snippet && (n2 += `

` + e2.mark.snippet), r2 + ` ` + n2) : r2;
}
e(c, `formatError`);
function l(e2, t2) {
  Error.call(this), this.name = `YAMLException`, this.reason = e2, this.mark = t2, this.message = c(this, false), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = Error().stack || ``;
}
e(l, `YAMLException$1`), l.prototype = Object.create(Error.prototype), l.prototype.constructor = l, l.prototype.toString = e(function(e2) {
  return this.name + `: ` + c(this, e2);
}, `toString`);
var u = l;
function d(e2, t2, n2, r2, i2) {
  var a2 = ``, o2 = ``, s2 = Math.floor(i2 / 2) - 1;
  return r2 - t2 > s2 && (a2 = ` ... `, t2 = r2 - s2 + a2.length), n2 - r2 > s2 && (o2 = ` ...`, n2 = r2 + s2 - o2.length), { str: a2 + e2.slice(t2, n2).replace(/\t/g, `\u2192`) + o2, pos: r2 - t2 + a2.length };
}
e(d, `getLine`);
function f(e2, t2) {
  return s.repeat(` `, t2 - e2.length) + e2;
}
e(f, `padStart`);
function p(e2, t2) {
  if (t2 = Object.create(t2 || null), !e2.buffer) return null;
  t2.maxLength || (t2.maxLength = 79), typeof t2.indent != `number` && (t2.indent = 1), typeof t2.linesBefore != `number` && (t2.linesBefore = 3), typeof t2.linesAfter != `number` && (t2.linesAfter = 2);
  for (var n2 = /\r?\n|\r|\0/g, r2 = [0], i2 = [], a2, o2 = -1; a2 = n2.exec(e2.buffer); ) i2.push(a2.index), r2.push(a2.index + a2[0].length), e2.position <= a2.index && o2 < 0 && (o2 = r2.length - 2);
  o2 < 0 && (o2 = r2.length - 1);
  var c2 = ``, l2, u2, p2 = Math.min(e2.line + t2.linesAfter, i2.length).toString().length, m2 = t2.maxLength - (t2.indent + p2 + 3);
  for (l2 = 1; l2 <= t2.linesBefore && !(o2 - l2 < 0); l2++) u2 = d(e2.buffer, r2[o2 - l2], i2[o2 - l2], e2.position - (r2[o2] - r2[o2 - l2]), m2), c2 = s.repeat(` `, t2.indent) + f((e2.line - l2 + 1).toString(), p2) + ` | ` + u2.str + `
` + c2;
  for (u2 = d(e2.buffer, r2[o2], i2[o2], e2.position, m2), c2 += s.repeat(` `, t2.indent) + f((e2.line + 1).toString(), p2) + ` | ` + u2.str + `
`, c2 += s.repeat(`-`, t2.indent + p2 + 3 + u2.pos) + `^
`, l2 = 1; l2 <= t2.linesAfter && !(o2 + l2 >= i2.length); l2++) u2 = d(e2.buffer, r2[o2 + l2], i2[o2 + l2], e2.position - (r2[o2] - r2[o2 + l2]), m2), c2 += s.repeat(` `, t2.indent) + f((e2.line + l2 + 1).toString(), p2) + ` | ` + u2.str + `
`;
  return c2.replace(/\n$/, ``);
}
e(p, `makeSnippet`);
var m = p, h = [`kind`, `multi`, `resolve`, `construct`, `instanceOf`, `predicate`, `represent`, `representName`, `defaultStyle`, `styleAliases`], g = [`scalar`, `sequence`, `mapping`];
function _(e2) {
  var t2 = {};
  return e2 !== null && Object.keys(e2).forEach(function(n2) {
    e2[n2].forEach(function(e3) {
      t2[String(e3)] = n2;
    });
  }), t2;
}
e(_, `compileStyleAliases`);
function v(e2, t2) {
  if (t2 || (t2 = {}), Object.keys(t2).forEach(function(t3) {
    if (h.indexOf(t3) === -1) throw new u(`Unknown option "` + t3 + `" is met in definition of "` + e2 + `" YAML type.`);
  }), this.options = t2, this.tag = e2, this.kind = t2.kind || null, this.resolve = t2.resolve || function() {
    return true;
  }, this.construct = t2.construct || function(e3) {
    return e3;
  }, this.instanceOf = t2.instanceOf || null, this.predicate = t2.predicate || null, this.represent = t2.represent || null, this.representName = t2.representName || null, this.defaultStyle = t2.defaultStyle || null, this.multi = t2.multi || false, this.styleAliases = _(t2.styleAliases || null), g.indexOf(this.kind) === -1) throw new u(`Unknown kind "` + this.kind + `" is specified for "` + e2 + `" YAML type.`);
}
e(v, `Type$1`);
var y = v;
function ee(e2, t2) {
  var n2 = [];
  return e2[t2].forEach(function(e3) {
    var t3 = n2.length;
    n2.forEach(function(n3, r2) {
      n3.tag === e3.tag && n3.kind === e3.kind && n3.multi === e3.multi && (t3 = r2);
    }), n2[t3] = e3;
  }), n2;
}
e(ee, `compileList`);
function te() {
  var t2 = { scalar: {}, sequence: {}, mapping: {}, fallback: {}, multi: { scalar: [], sequence: [], mapping: [], fallback: [] } }, n2, r2;
  function i2(e2) {
    e2.multi ? (t2.multi[e2.kind].push(e2), t2.multi.fallback.push(e2)) : t2[e2.kind][e2.tag] = t2.fallback[e2.tag] = e2;
  }
  for (e(i2, `collectType`), n2 = 0, r2 = arguments.length; n2 < r2; n2 += 1) arguments[n2].forEach(i2);
  return t2;
}
e(te, `compileMap`);
function b(e2) {
  return this.extend(e2);
}
e(b, `Schema$1`), b.prototype.extend = e(function(e2) {
  var t2 = [], n2 = [];
  if (e2 instanceof y) n2.push(e2);
  else if (Array.isArray(e2)) n2 = n2.concat(e2);
  else if (e2 && (Array.isArray(e2.implicit) || Array.isArray(e2.explicit))) e2.implicit && (t2 = t2.concat(e2.implicit)), e2.explicit && (n2 = n2.concat(e2.explicit));
  else throw new u(`Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })`);
  t2.forEach(function(e3) {
    if (!(e3 instanceof y)) throw new u(`Specified list of YAML types (or a single Type object) contains a non-Type object.`);
    if (e3.loadKind && e3.loadKind !== `scalar`) throw new u(`There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.`);
    if (e3.multi) throw new u(`There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.`);
  }), n2.forEach(function(e3) {
    if (!(e3 instanceof y)) throw new u(`Specified list of YAML types (or a single Type object) contains a non-Type object.`);
  });
  var r2 = Object.create(b.prototype);
  return r2.implicit = (this.implicit || []).concat(t2), r2.explicit = (this.explicit || []).concat(n2), r2.compiledImplicit = ee(r2, `implicit`), r2.compiledExplicit = ee(r2, `explicit`), r2.compiledTypeMap = te(r2.compiledImplicit, r2.compiledExplicit), r2;
}, `extend`);
var ne = new b({ explicit: [new y(`tag:yaml.org,2002:str`, { kind: `scalar`, construct: e(function(e2) {
  return e2 === null ? `` : e2;
}, `construct`) }), new y(`tag:yaml.org,2002:seq`, { kind: `sequence`, construct: e(function(e2) {
  return e2 === null ? [] : e2;
}, `construct`) }), new y(`tag:yaml.org,2002:map`, { kind: `mapping`, construct: e(function(e2) {
  return e2 === null ? {} : e2;
}, `construct`) })] });
function re(e2) {
  if (e2 === null) return true;
  var t2 = e2.length;
  return t2 === 1 && e2 === `~` || t2 === 4 && (e2 === `null` || e2 === `Null` || e2 === `NULL`);
}
e(re, `resolveYamlNull`);
function ie() {
  return null;
}
e(ie, `constructYamlNull`);
function ae(e2) {
  return e2 === null;
}
e(ae, `isNull`);
var oe = new y(`tag:yaml.org,2002:null`, { kind: `scalar`, resolve: re, construct: ie, predicate: ae, represent: { canonical: e(function() {
  return `~`;
}, `canonical`), lowercase: e(function() {
  return `null`;
}, `lowercase`), uppercase: e(function() {
  return `NULL`;
}, `uppercase`), camelcase: e(function() {
  return `Null`;
}, `camelcase`), empty: e(function() {
  return ``;
}, `empty`) }, defaultStyle: `lowercase` });
function se(e2) {
  if (e2 === null) return false;
  var t2 = e2.length;
  return t2 === 4 && (e2 === `true` || e2 === `True` || e2 === `TRUE`) || t2 === 5 && (e2 === `false` || e2 === `False` || e2 === `FALSE`);
}
e(se, `resolveYamlBoolean`);
function ce(e2) {
  return e2 === `true` || e2 === `True` || e2 === `TRUE`;
}
e(ce, `constructYamlBoolean`);
function le(e2) {
  return Object.prototype.toString.call(e2) === `[object Boolean]`;
}
e(le, `isBoolean`);
var ue = new y(`tag:yaml.org,2002:bool`, { kind: `scalar`, resolve: se, construct: ce, predicate: le, represent: { lowercase: e(function(e2) {
  return e2 ? `true` : `false`;
}, `lowercase`), uppercase: e(function(e2) {
  return e2 ? `TRUE` : `FALSE`;
}, `uppercase`), camelcase: e(function(e2) {
  return e2 ? `True` : `False`;
}, `camelcase`) }, defaultStyle: `lowercase` });
function de(e2) {
  return 48 <= e2 && e2 <= 57 || 65 <= e2 && e2 <= 70 || 97 <= e2 && e2 <= 102;
}
e(de, `isHexCode`);
function fe(e2) {
  return 48 <= e2 && e2 <= 55;
}
e(fe, `isOctCode`);
function pe(e2) {
  return 48 <= e2 && e2 <= 57;
}
e(pe, `isDecCode`);
function me(e2) {
  if (e2 === null) return false;
  var t2 = e2.length, n2 = 0, r2 = false, i2;
  if (!t2) return false;
  if (i2 = e2[n2], (i2 === `-` || i2 === `+`) && (i2 = e2[++n2]), i2 === `0`) {
    if (n2 + 1 === t2) return true;
    if (i2 = e2[++n2], i2 === `b`) {
      for (n2++; n2 < t2; n2++) if (i2 = e2[n2], i2 !== `_`) {
        if (i2 !== `0` && i2 !== `1`) return false;
        r2 = true;
      }
      return r2 && i2 !== `_`;
    }
    if (i2 === `x`) {
      for (n2++; n2 < t2; n2++) if (i2 = e2[n2], i2 !== `_`) {
        if (!de(e2.charCodeAt(n2))) return false;
        r2 = true;
      }
      return r2 && i2 !== `_`;
    }
    if (i2 === `o`) {
      for (n2++; n2 < t2; n2++) if (i2 = e2[n2], i2 !== `_`) {
        if (!fe(e2.charCodeAt(n2))) return false;
        r2 = true;
      }
      return r2 && i2 !== `_`;
    }
  }
  if (i2 === `_`) return false;
  for (; n2 < t2; n2++) if (i2 = e2[n2], i2 !== `_`) {
    if (!pe(e2.charCodeAt(n2))) return false;
    r2 = true;
  }
  return !(!r2 || i2 === `_`);
}
e(me, `resolveYamlInteger`);
function he(e2) {
  var t2 = e2, n2 = 1, r2;
  if (t2.indexOf(`_`) !== -1 && (t2 = t2.replace(/_/g, ``)), r2 = t2[0], (r2 === `-` || r2 === `+`) && (r2 === `-` && (n2 = -1), t2 = t2.slice(1), r2 = t2[0]), t2 === `0`) return 0;
  if (r2 === `0`) {
    if (t2[1] === `b`) return n2 * parseInt(t2.slice(2), 2);
    if (t2[1] === `x`) return n2 * parseInt(t2.slice(2), 16);
    if (t2[1] === `o`) return n2 * parseInt(t2.slice(2), 8);
  }
  return n2 * parseInt(t2, 10);
}
e(he, `constructYamlInteger`);
function ge(e2) {
  return Object.prototype.toString.call(e2) === `[object Number]` && e2 % 1 == 0 && !s.isNegativeZero(e2);
}
e(ge, `isInteger`);
var _e = new y(`tag:yaml.org,2002:int`, { kind: `scalar`, resolve: me, construct: he, predicate: ge, represent: { binary: e(function(e2) {
  return e2 >= 0 ? `0b` + e2.toString(2) : `-0b` + e2.toString(2).slice(1);
}, `binary`), octal: e(function(e2) {
  return e2 >= 0 ? `0o` + e2.toString(8) : `-0o` + e2.toString(8).slice(1);
}, `octal`), decimal: e(function(e2) {
  return e2.toString(10);
}, `decimal`), hexadecimal: e(function(e2) {
  return e2 >= 0 ? `0x` + e2.toString(16).toUpperCase() : `-0x` + e2.toString(16).toUpperCase().slice(1);
}, `hexadecimal`) }, defaultStyle: `decimal`, styleAliases: { binary: [2, `bin`], octal: [8, `oct`], decimal: [10, `dec`], hexadecimal: [16, `hex`] } }), ve = RegExp(`^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);
function ye(e2) {
  return !(e2 === null || !ve.test(e2) || e2[e2.length - 1] === `_`);
}
e(ye, `resolveYamlFloat`);
function be(e2) {
  var t2 = e2.replace(/_/g, ``).toLowerCase(), n2 = t2[0] === `-` ? -1 : 1;
  return `+-`.indexOf(t2[0]) >= 0 && (t2 = t2.slice(1)), t2 === `.inf` ? n2 === 1 ? 1 / 0 : -1 / 0 : t2 === `.nan` ? NaN : n2 * parseFloat(t2, 10);
}
e(be, `constructYamlFloat`);
var xe = /^[-+]?[0-9]+e/;
function Se(e2, t2) {
  var n2;
  if (isNaN(e2)) switch (t2) {
    case `lowercase`:
      return `.nan`;
    case `uppercase`:
      return `.NAN`;
    case `camelcase`:
      return `.NaN`;
  }
  else if (e2 === 1 / 0) switch (t2) {
    case `lowercase`:
      return `.inf`;
    case `uppercase`:
      return `.INF`;
    case `camelcase`:
      return `.Inf`;
  }
  else if (e2 === -1 / 0) switch (t2) {
    case `lowercase`:
      return `-.inf`;
    case `uppercase`:
      return `-.INF`;
    case `camelcase`:
      return `-.Inf`;
  }
  else if (s.isNegativeZero(e2)) return `-0.0`;
  return n2 = e2.toString(10), xe.test(n2) ? n2.replace(`e`, `.e`) : n2;
}
e(Se, `representYamlFloat`);
function Ce(e2) {
  return Object.prototype.toString.call(e2) === `[object Number]` && (e2 % 1 != 0 || s.isNegativeZero(e2));
}
e(Ce, `isFloat`);
var we = new y(`tag:yaml.org,2002:float`, { kind: `scalar`, resolve: ye, construct: be, predicate: Ce, represent: Se, defaultStyle: `lowercase` }), Te = ne.extend({ implicit: [oe, ue, _e, we] }), Ee = Te, De = RegExp(`^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$`), Oe = RegExp(`^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$`);
function ke(e2) {
  return e2 === null ? false : De.exec(e2) !== null || Oe.exec(e2) !== null;
}
e(ke, `resolveYamlTimestamp`);
function Ae(e2) {
  var t2, n2, r2, i2, a2, o2, s2, c2 = 0, l2 = null, u2, d2, f2;
  if (t2 = De.exec(e2), t2 === null && (t2 = Oe.exec(e2)), t2 === null) throw Error(`Date resolve error`);
  if (n2 = +t2[1], r2 = t2[2] - 1, i2 = +t2[3], !t2[4]) return new Date(Date.UTC(n2, r2, i2));
  if (a2 = +t2[4], o2 = +t2[5], s2 = +t2[6], t2[7]) {
    for (c2 = t2[7].slice(0, 3); c2.length < 3; ) c2 += `0`;
    c2 = +c2;
  }
  return t2[9] && (u2 = +t2[10], d2 = +(t2[11] || 0), l2 = (u2 * 60 + d2) * 6e4, t2[9] === `-` && (l2 = -l2)), f2 = new Date(Date.UTC(n2, r2, i2, a2, o2, s2, c2)), l2 && f2.setTime(f2.getTime() - l2), f2;
}
e(Ae, `constructYamlTimestamp`);
function je(e2) {
  return e2.toISOString();
}
e(je, `representYamlTimestamp`);
var Me = new y(`tag:yaml.org,2002:timestamp`, { kind: `scalar`, resolve: ke, construct: Ae, instanceOf: Date, represent: je });
function Ne(e2) {
  return e2 === `<<` || e2 === null;
}
e(Ne, `resolveYamlMerge`);
var Pe = new y(`tag:yaml.org,2002:merge`, { kind: `scalar`, resolve: Ne }), Fe = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function Ie(e2) {
  if (e2 === null) return false;
  var t2, n2, r2 = 0, i2 = e2.length, a2 = Fe;
  for (n2 = 0; n2 < i2; n2++) if (t2 = a2.indexOf(e2.charAt(n2)), !(t2 > 64)) {
    if (t2 < 0) return false;
    r2 += 6;
  }
  return r2 % 8 == 0;
}
e(Ie, `resolveYamlBinary`);
function Le(e2) {
  var t2, n2, r2 = e2.replace(/[\r\n=]/g, ``), i2 = r2.length, a2 = Fe, o2 = 0, s2 = [];
  for (t2 = 0; t2 < i2; t2++) t2 % 4 == 0 && t2 && (s2.push(o2 >> 16 & 255), s2.push(o2 >> 8 & 255), s2.push(o2 & 255)), o2 = o2 << 6 | a2.indexOf(r2.charAt(t2));
  return n2 = i2 % 4 * 6, n2 === 0 ? (s2.push(o2 >> 16 & 255), s2.push(o2 >> 8 & 255), s2.push(o2 & 255)) : n2 === 18 ? (s2.push(o2 >> 10 & 255), s2.push(o2 >> 2 & 255)) : n2 === 12 && s2.push(o2 >> 4 & 255), new Uint8Array(s2);
}
e(Le, `constructYamlBinary`);
function Re(e2) {
  var t2 = ``, n2 = 0, r2, i2, a2 = e2.length, o2 = Fe;
  for (r2 = 0; r2 < a2; r2++) r2 % 3 == 0 && r2 && (t2 += o2[n2 >> 18 & 63], t2 += o2[n2 >> 12 & 63], t2 += o2[n2 >> 6 & 63], t2 += o2[n2 & 63]), n2 = (n2 << 8) + e2[r2];
  return i2 = a2 % 3, i2 === 0 ? (t2 += o2[n2 >> 18 & 63], t2 += o2[n2 >> 12 & 63], t2 += o2[n2 >> 6 & 63], t2 += o2[n2 & 63]) : i2 === 2 ? (t2 += o2[n2 >> 10 & 63], t2 += o2[n2 >> 4 & 63], t2 += o2[n2 << 2 & 63], t2 += o2[64]) : i2 === 1 && (t2 += o2[n2 >> 2 & 63], t2 += o2[n2 << 4 & 63], t2 += o2[64], t2 += o2[64]), t2;
}
e(Re, `representYamlBinary`);
function ze(e2) {
  return Object.prototype.toString.call(e2) === `[object Uint8Array]`;
}
e(ze, `isBinary`);
var Be = new y(`tag:yaml.org,2002:binary`, { kind: `scalar`, resolve: Ie, construct: Le, predicate: ze, represent: Re }), Ve = Object.prototype.hasOwnProperty, He = Object.prototype.toString;
function Ue(e2) {
  if (e2 === null) return true;
  var t2 = [], n2, r2, i2, a2, o2, s2 = e2;
  for (n2 = 0, r2 = s2.length; n2 < r2; n2 += 1) {
    if (i2 = s2[n2], o2 = false, He.call(i2) !== `[object Object]`) return false;
    for (a2 in i2) if (Ve.call(i2, a2)) if (!o2) o2 = true;
    else return false;
    if (!o2) return false;
    if (t2.indexOf(a2) === -1) t2.push(a2);
    else return false;
  }
  return true;
}
e(Ue, `resolveYamlOmap`);
function We(e2) {
  return e2 === null ? [] : e2;
}
e(We, `constructYamlOmap`);
var Ge = new y(`tag:yaml.org,2002:omap`, { kind: `sequence`, resolve: Ue, construct: We }), Ke = Object.prototype.toString;
function qe(e2) {
  if (e2 === null) return true;
  var t2, n2, r2, i2, a2, o2 = e2;
  for (a2 = Array(o2.length), t2 = 0, n2 = o2.length; t2 < n2; t2 += 1) {
    if (r2 = o2[t2], Ke.call(r2) !== `[object Object]` || (i2 = Object.keys(r2), i2.length !== 1)) return false;
    a2[t2] = [i2[0], r2[i2[0]]];
  }
  return true;
}
e(qe, `resolveYamlPairs`);
function Je(e2) {
  if (e2 === null) return [];
  var t2, n2, r2, i2, a2, o2 = e2;
  for (a2 = Array(o2.length), t2 = 0, n2 = o2.length; t2 < n2; t2 += 1) r2 = o2[t2], i2 = Object.keys(r2), a2[t2] = [i2[0], r2[i2[0]]];
  return a2;
}
e(Je, `constructYamlPairs`);
var Ye = new y(`tag:yaml.org,2002:pairs`, { kind: `sequence`, resolve: qe, construct: Je }), Xe = Object.prototype.hasOwnProperty;
function Ze(e2) {
  if (e2 === null) return true;
  var t2, n2 = e2;
  for (t2 in n2) if (Xe.call(n2, t2) && n2[t2] !== null) return false;
  return true;
}
e(Ze, `resolveYamlSet`);
function Qe(e2) {
  return e2 === null ? {} : e2;
}
e(Qe, `constructYamlSet`);
var $e = new y(`tag:yaml.org,2002:set`, { kind: `mapping`, resolve: Ze, construct: Qe }), et = Ee.extend({ implicit: [Me, Pe], explicit: [Be, Ge, Ye, $e] }), x = Object.prototype.hasOwnProperty, S = 1, tt = 2, nt = 3, C = 4, w = 1, rt = 2, it = 3, at = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, ot = /[\x85\u2028\u2029]/, st = /[,\[\]\{\}]/, ct = /^(?:!|!!|![a-z\-]+!)$/i, lt = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function ut(e2) {
  return Object.prototype.toString.call(e2);
}
e(ut, `_class`);
function T(e2) {
  return e2 === 10 || e2 === 13;
}
e(T, `is_EOL`);
function E(e2) {
  return e2 === 9 || e2 === 32;
}
e(E, `is_WHITE_SPACE`);
function D(e2) {
  return e2 === 9 || e2 === 32 || e2 === 10 || e2 === 13;
}
e(D, `is_WS_OR_EOL`);
function O(e2) {
  return e2 === 44 || e2 === 91 || e2 === 93 || e2 === 123 || e2 === 125;
}
e(O, `is_FLOW_INDICATOR`);
function dt(e2) {
  var t2;
  return 48 <= e2 && e2 <= 57 ? e2 - 48 : (t2 = e2 | 32, 97 <= t2 && t2 <= 102 ? t2 - 97 + 10 : -1);
}
e(dt, `fromHexCode`);
function ft(e2) {
  return e2 === 120 ? 2 : e2 === 117 ? 4 : e2 === 85 ? 8 : 0;
}
e(ft, `escapedHexLen`);
function pt(e2) {
  return 48 <= e2 && e2 <= 57 ? e2 - 48 : -1;
}
e(pt, `fromDecimalCode`);
function k(e2) {
  return e2 === 48 ? `\0` : e2 === 97 ? `\x07` : e2 === 98 ? `\b` : e2 === 116 || e2 === 9 ? `	` : e2 === 110 ? `
` : e2 === 118 ? `\v` : e2 === 102 ? `\f` : e2 === 114 ? `\r` : e2 === 101 ? `\x1B` : e2 === 32 ? ` ` : e2 === 34 ? `"` : e2 === 47 ? `/` : e2 === 92 ? `\\` : e2 === 78 ? `\x85` : e2 === 95 ? `\xA0` : e2 === 76 ? `\u2028` : e2 === 80 ? `\u2029` : ``;
}
e(k, `simpleEscapeSequence`);
function mt(e2) {
  return e2 <= 65535 ? String.fromCharCode(e2) : String.fromCharCode((e2 - 65536 >> 10) + 55296, (e2 - 65536 & 1023) + 56320);
}
e(mt, `charFromCodepoint`);
var ht = Array(256), gt = Array(256);
for (A = 0; A < 256; A++) ht[A] = k(A) ? 1 : 0, gt[A] = k(A);
var A;
function _t(e2, t2) {
  this.input = e2, this.filename = t2.filename || null, this.schema = t2.schema || et, this.onWarning = t2.onWarning || null, this.legacy = t2.legacy || false, this.json = t2.json || false, this.listener = t2.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e2.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
e(_t, `State$1`);
function vt(e2, t2) {
  var n2 = { name: e2.filename, buffer: e2.input.slice(0, -1), position: e2.position, line: e2.line, column: e2.position - e2.lineStart };
  return n2.snippet = m(n2), new u(t2, n2);
}
e(vt, `generateError`);
function j(e2, t2) {
  throw vt(e2, t2);
}
e(j, `throwError`);
function M(e2, t2) {
  e2.onWarning && e2.onWarning.call(null, vt(e2, t2));
}
e(M, `throwWarning`);
var yt = { YAML: e(function(e2, t2, n2) {
  var r2, i2, a2;
  e2.version !== null && j(e2, `duplication of %YAML directive`), n2.length !== 1 && j(e2, `YAML directive accepts exactly one argument`), r2 = /^([0-9]+)\.([0-9]+)$/.exec(n2[0]), r2 === null && j(e2, `ill-formed argument of the YAML directive`), i2 = parseInt(r2[1], 10), a2 = parseInt(r2[2], 10), i2 !== 1 && j(e2, `unacceptable YAML version of the document`), e2.version = n2[0], e2.checkLineBreaks = a2 < 2, a2 !== 1 && a2 !== 2 && M(e2, `unsupported YAML version of the document`);
}, `handleYamlDirective`), TAG: e(function(e2, t2, n2) {
  var r2, i2;
  n2.length !== 2 && j(e2, `TAG directive accepts exactly two arguments`), r2 = n2[0], i2 = n2[1], ct.test(r2) || j(e2, `ill-formed tag handle (first argument) of the TAG directive`), x.call(e2.tagMap, r2) && j(e2, `there is a previously declared suffix for "` + r2 + `" tag handle`), lt.test(i2) || j(e2, `ill-formed tag prefix (second argument) of the TAG directive`);
  try {
    i2 = decodeURIComponent(i2);
  } catch {
    j(e2, `tag prefix is malformed: ` + i2);
  }
  e2.tagMap[r2] = i2;
}, `handleTagDirective`) };
function N(e2, t2, n2, r2) {
  var i2, a2, o2, s2;
  if (t2 < n2) {
    if (s2 = e2.input.slice(t2, n2), r2) for (i2 = 0, a2 = s2.length; i2 < a2; i2 += 1) o2 = s2.charCodeAt(i2), o2 === 9 || 32 <= o2 && o2 <= 1114111 || j(e2, `expected valid JSON character`);
    else at.test(s2) && j(e2, `the stream contains non-printable characters`);
    e2.result += s2;
  }
}
e(N, `captureSegment`);
function bt(e2, t2, n2, r2) {
  var i2, a2, o2, c2;
  for (s.isObject(n2) || j(e2, `cannot merge mappings; the provided source object is unacceptable`), i2 = Object.keys(n2), o2 = 0, c2 = i2.length; o2 < c2; o2 += 1) a2 = i2[o2], x.call(t2, a2) || (t2[a2] = n2[a2], r2[a2] = true);
}
e(bt, `mergeMappings`);
function P(e2, t2, n2, r2, i2, a2, o2, s2, c2) {
  var l2, u2;
  if (Array.isArray(i2)) for (i2 = Array.prototype.slice.call(i2), l2 = 0, u2 = i2.length; l2 < u2; l2 += 1) Array.isArray(i2[l2]) && j(e2, `nested arrays are not supported inside keys`), typeof i2 == `object` && ut(i2[l2]) === `[object Object]` && (i2[l2] = `[object Object]`);
  if (typeof i2 == `object` && ut(i2) === `[object Object]` && (i2 = `[object Object]`), i2 = String(i2), t2 === null && (t2 = {}), r2 === `tag:yaml.org,2002:merge`) if (Array.isArray(a2)) for (l2 = 0, u2 = a2.length; l2 < u2; l2 += 1) bt(e2, t2, a2[l2], n2);
  else bt(e2, t2, a2, n2);
  else !e2.json && !x.call(n2, i2) && x.call(t2, i2) && (e2.line = o2 || e2.line, e2.lineStart = s2 || e2.lineStart, e2.position = c2 || e2.position, j(e2, `duplicated mapping key`)), i2 === `__proto__` ? Object.defineProperty(t2, i2, { configurable: true, enumerable: true, writable: true, value: a2 }) : t2[i2] = a2, delete n2[i2];
  return t2;
}
e(P, `storeMappingPair`);
function F(e2) {
  var t2 = e2.input.charCodeAt(e2.position);
  t2 === 10 ? e2.position++ : t2 === 13 ? (e2.position++, e2.input.charCodeAt(e2.position) === 10 && e2.position++) : j(e2, `a line break is expected`), e2.line += 1, e2.lineStart = e2.position, e2.firstTabInLine = -1;
}
e(F, `readLineBreak`);
function I(e2, t2, n2) {
  for (var r2 = 0, i2 = e2.input.charCodeAt(e2.position); i2 !== 0; ) {
    for (; E(i2); ) i2 === 9 && e2.firstTabInLine === -1 && (e2.firstTabInLine = e2.position), i2 = e2.input.charCodeAt(++e2.position);
    if (t2 && i2 === 35) do
      i2 = e2.input.charCodeAt(++e2.position);
    while (i2 !== 10 && i2 !== 13 && i2 !== 0);
    if (T(i2)) for (F(e2), i2 = e2.input.charCodeAt(e2.position), r2++, e2.lineIndent = 0; i2 === 32; ) e2.lineIndent++, i2 = e2.input.charCodeAt(++e2.position);
    else break;
  }
  return n2 !== -1 && r2 !== 0 && e2.lineIndent < n2 && M(e2, `deficient indentation`), r2;
}
e(I, `skipSeparationSpace`);
function L(e2) {
  var t2 = e2.position, n2 = e2.input.charCodeAt(t2);
  return !!((n2 === 45 || n2 === 46) && n2 === e2.input.charCodeAt(t2 + 1) && n2 === e2.input.charCodeAt(t2 + 2) && (t2 += 3, n2 = e2.input.charCodeAt(t2), n2 === 0 || D(n2)));
}
e(L, `testDocumentSeparator`);
function R(e2, t2) {
  t2 === 1 ? e2.result += ` ` : t2 > 1 && (e2.result += s.repeat(`
`, t2 - 1));
}
e(R, `writeFoldedLines`);
function xt(e2, t2, n2) {
  var r2, i2, a2, o2, s2, c2, l2, u2, d2 = e2.kind, f2 = e2.result, p2 = e2.input.charCodeAt(e2.position);
  if (D(p2) || O(p2) || p2 === 35 || p2 === 38 || p2 === 42 || p2 === 33 || p2 === 124 || p2 === 62 || p2 === 39 || p2 === 34 || p2 === 37 || p2 === 64 || p2 === 96 || (p2 === 63 || p2 === 45) && (i2 = e2.input.charCodeAt(e2.position + 1), D(i2) || n2 && O(i2))) return false;
  for (e2.kind = `scalar`, e2.result = ``, a2 = o2 = e2.position, s2 = false; p2 !== 0; ) {
    if (p2 === 58) {
      if (i2 = e2.input.charCodeAt(e2.position + 1), D(i2) || n2 && O(i2)) break;
    } else if (p2 === 35) {
      if (r2 = e2.input.charCodeAt(e2.position - 1), D(r2)) break;
    } else if (e2.position === e2.lineStart && L(e2) || n2 && O(p2)) break;
    else if (T(p2)) if (c2 = e2.line, l2 = e2.lineStart, u2 = e2.lineIndent, I(e2, false, -1), e2.lineIndent >= t2) {
      s2 = true, p2 = e2.input.charCodeAt(e2.position);
      continue;
    } else {
      e2.position = o2, e2.line = c2, e2.lineStart = l2, e2.lineIndent = u2;
      break;
    }
    s2 && (s2 = (N(e2, a2, o2, false), R(e2, e2.line - c2), a2 = o2 = e2.position, false)), E(p2) || (o2 = e2.position + 1), p2 = e2.input.charCodeAt(++e2.position);
  }
  return N(e2, a2, o2, false), e2.result ? true : (e2.kind = d2, e2.result = f2, false);
}
e(xt, `readPlainScalar`);
function St(e2, t2) {
  var n2 = e2.input.charCodeAt(e2.position), r2, i2;
  if (n2 !== 39) return false;
  for (e2.kind = `scalar`, e2.result = ``, e2.position++, r2 = i2 = e2.position; (n2 = e2.input.charCodeAt(e2.position)) !== 0; ) if (n2 === 39) if (N(e2, r2, e2.position, true), n2 = e2.input.charCodeAt(++e2.position), n2 === 39) r2 = e2.position, e2.position++, i2 = e2.position;
  else return true;
  else T(n2) ? (N(e2, r2, i2, true), R(e2, I(e2, false, t2)), r2 = i2 = e2.position) : e2.position === e2.lineStart && L(e2) ? j(e2, `unexpected end of the document within a single quoted scalar`) : (e2.position++, i2 = e2.position);
  j(e2, `unexpected end of the stream within a single quoted scalar`);
}
e(St, `readSingleQuotedScalar`);
function Ct(e2, t2) {
  var n2, r2, i2, a2, o2, s2 = e2.input.charCodeAt(e2.position);
  if (s2 !== 34) return false;
  for (e2.kind = `scalar`, e2.result = ``, e2.position++, n2 = r2 = e2.position; (s2 = e2.input.charCodeAt(e2.position)) !== 0; ) if (s2 === 34) return N(e2, n2, e2.position, true), e2.position++, true;
  else if (s2 === 92) {
    if (N(e2, n2, e2.position, true), s2 = e2.input.charCodeAt(++e2.position), T(s2)) I(e2, false, t2);
    else if (s2 < 256 && ht[s2]) e2.result += gt[s2], e2.position++;
    else if ((o2 = ft(s2)) > 0) {
      for (i2 = o2, a2 = 0; i2 > 0; i2--) s2 = e2.input.charCodeAt(++e2.position), (o2 = dt(s2)) >= 0 ? a2 = (a2 << 4) + o2 : j(e2, `expected hexadecimal character`);
      e2.result += mt(a2), e2.position++;
    } else j(e2, `unknown escape sequence`);
    n2 = r2 = e2.position;
  } else T(s2) ? (N(e2, n2, r2, true), R(e2, I(e2, false, t2)), n2 = r2 = e2.position) : e2.position === e2.lineStart && L(e2) ? j(e2, `unexpected end of the document within a double quoted scalar`) : (e2.position++, r2 = e2.position);
  j(e2, `unexpected end of the stream within a double quoted scalar`);
}
e(Ct, `readDoubleQuotedScalar`);
function wt(e2, t2) {
  var n2 = true, r2, i2, a2, o2 = e2.tag, s2, c2 = e2.anchor, l2, u2, d2, f2, p2, m2 = /* @__PURE__ */ Object.create(null), h2, g2, _2, v2 = e2.input.charCodeAt(e2.position);
  if (v2 === 91) u2 = 93, p2 = false, s2 = [];
  else if (v2 === 123) u2 = 125, p2 = true, s2 = {};
  else return false;
  for (e2.anchor !== null && (e2.anchorMap[e2.anchor] = s2), v2 = e2.input.charCodeAt(++e2.position); v2 !== 0; ) {
    if (I(e2, true, t2), v2 = e2.input.charCodeAt(e2.position), v2 === u2) return e2.position++, e2.tag = o2, e2.anchor = c2, e2.kind = p2 ? `mapping` : `sequence`, e2.result = s2, true;
    n2 ? v2 === 44 && j(e2, `expected the node content, but found ','`) : j(e2, `missed comma between flow collection entries`), g2 = h2 = _2 = null, d2 = f2 = false, v2 === 63 && (l2 = e2.input.charCodeAt(e2.position + 1), D(l2) && (d2 = f2 = true, e2.position++, I(e2, true, t2))), r2 = e2.line, i2 = e2.lineStart, a2 = e2.position, B(e2, t2, S, false, true), g2 = e2.tag, h2 = e2.result, I(e2, true, t2), v2 = e2.input.charCodeAt(e2.position), (f2 || e2.line === r2) && v2 === 58 && (d2 = true, v2 = e2.input.charCodeAt(++e2.position), I(e2, true, t2), B(e2, t2, S, false, true), _2 = e2.result), p2 ? P(e2, s2, m2, g2, h2, _2, r2, i2, a2) : d2 ? s2.push(P(e2, null, m2, g2, h2, _2, r2, i2, a2)) : s2.push(h2), I(e2, true, t2), v2 = e2.input.charCodeAt(e2.position), v2 === 44 ? (n2 = true, v2 = e2.input.charCodeAt(++e2.position)) : n2 = false;
  }
  j(e2, `unexpected end of the stream within a flow collection`);
}
e(wt, `readFlowCollection`);
function Tt(e2, t2) {
  var n2, r2, i2 = w, a2 = false, o2 = false, c2 = t2, l2 = 0, u2 = false, d2, f2 = e2.input.charCodeAt(e2.position);
  if (f2 === 124) r2 = false;
  else if (f2 === 62) r2 = true;
  else return false;
  for (e2.kind = `scalar`, e2.result = ``; f2 !== 0; ) if (f2 = e2.input.charCodeAt(++e2.position), f2 === 43 || f2 === 45) w === i2 ? i2 = f2 === 43 ? it : rt : j(e2, `repeat of a chomping mode identifier`);
  else if ((d2 = pt(f2)) >= 0) d2 === 0 ? j(e2, `bad explicit indentation width of a block scalar; it cannot be less than one`) : o2 ? j(e2, `repeat of an indentation width identifier`) : (c2 = t2 + d2 - 1, o2 = true);
  else break;
  if (E(f2)) {
    do
      f2 = e2.input.charCodeAt(++e2.position);
    while (E(f2));
    if (f2 === 35) do
      f2 = e2.input.charCodeAt(++e2.position);
    while (!T(f2) && f2 !== 0);
  }
  for (; f2 !== 0; ) {
    for (F(e2), e2.lineIndent = 0, f2 = e2.input.charCodeAt(e2.position); (!o2 || e2.lineIndent < c2) && f2 === 32; ) e2.lineIndent++, f2 = e2.input.charCodeAt(++e2.position);
    if (!o2 && e2.lineIndent > c2 && (c2 = e2.lineIndent), T(f2)) {
      l2++;
      continue;
    }
    if (e2.lineIndent < c2) {
      i2 === it ? e2.result += s.repeat(`
`, a2 ? 1 + l2 : l2) : i2 === w && a2 && (e2.result += `
`);
      break;
    }
    for (r2 ? E(f2) ? (u2 = true, e2.result += s.repeat(`
`, a2 ? 1 + l2 : l2)) : u2 ? (u2 = false, e2.result += s.repeat(`
`, l2 + 1)) : l2 === 0 ? a2 && (e2.result += ` `) : e2.result += s.repeat(`
`, l2) : e2.result += s.repeat(`
`, a2 ? 1 + l2 : l2), a2 = true, o2 = true, l2 = 0, n2 = e2.position; !T(f2) && f2 !== 0; ) f2 = e2.input.charCodeAt(++e2.position);
    N(e2, n2, e2.position, false);
  }
  return true;
}
e(Tt, `readBlockScalar`);
function z(e2, t2) {
  var n2, r2 = e2.tag, i2 = e2.anchor, a2 = [], o2, s2 = false, c2;
  if (e2.firstTabInLine !== -1) return false;
  for (e2.anchor !== null && (e2.anchorMap[e2.anchor] = a2), c2 = e2.input.charCodeAt(e2.position); c2 !== 0 && (e2.firstTabInLine !== -1 && (e2.position = e2.firstTabInLine, j(e2, `tab characters must not be used in indentation`)), !(c2 !== 45 || (o2 = e2.input.charCodeAt(e2.position + 1), !D(o2)))); ) {
    if (s2 = true, e2.position++, I(e2, true, -1) && e2.lineIndent <= t2) {
      a2.push(null), c2 = e2.input.charCodeAt(e2.position);
      continue;
    }
    if (n2 = e2.line, B(e2, t2, nt, false, true), a2.push(e2.result), I(e2, true, -1), c2 = e2.input.charCodeAt(e2.position), (e2.line === n2 || e2.lineIndent > t2) && c2 !== 0) j(e2, `bad indentation of a sequence entry`);
    else if (e2.lineIndent < t2) break;
  }
  return s2 ? (e2.tag = r2, e2.anchor = i2, e2.kind = `sequence`, e2.result = a2, true) : false;
}
e(z, `readBlockSequence`);
function Et(e2, t2, n2) {
  var r2, i2, a2, o2, s2, c2, l2 = e2.tag, u2 = e2.anchor, d2 = {}, f2 = /* @__PURE__ */ Object.create(null), p2 = null, m2 = null, h2 = null, g2 = false, _2 = false, v2;
  if (e2.firstTabInLine !== -1) return false;
  for (e2.anchor !== null && (e2.anchorMap[e2.anchor] = d2), v2 = e2.input.charCodeAt(e2.position); v2 !== 0; ) {
    if (!g2 && e2.firstTabInLine !== -1 && (e2.position = e2.firstTabInLine, j(e2, `tab characters must not be used in indentation`)), r2 = e2.input.charCodeAt(e2.position + 1), a2 = e2.line, (v2 === 63 || v2 === 58) && D(r2)) v2 === 63 ? (g2 && (P(e2, d2, f2, p2, m2, null, o2, s2, c2), p2 = m2 = h2 = null), _2 = true, g2 = true, i2 = true) : g2 ? (g2 = false, i2 = true) : j(e2, `incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line`), e2.position += 1, v2 = r2;
    else {
      if (o2 = e2.line, s2 = e2.lineStart, c2 = e2.position, !B(e2, n2, tt, false, true)) break;
      if (e2.line === a2) {
        for (v2 = e2.input.charCodeAt(e2.position); E(v2); ) v2 = e2.input.charCodeAt(++e2.position);
        if (v2 === 58) v2 = e2.input.charCodeAt(++e2.position), D(v2) || j(e2, `a whitespace character is expected after the key-value separator within a block mapping`), g2 && (P(e2, d2, f2, p2, m2, null, o2, s2, c2), p2 = m2 = h2 = null), _2 = true, g2 = false, i2 = false, p2 = e2.tag, m2 = e2.result;
        else if (_2) j(e2, `can not read an implicit mapping pair; a colon is missed`);
        else return e2.tag = l2, e2.anchor = u2, true;
      } else if (_2) j(e2, `can not read a block mapping entry; a multiline key may not be an implicit key`);
      else return e2.tag = l2, e2.anchor = u2, true;
    }
    if ((e2.line === a2 || e2.lineIndent > t2) && (g2 && (o2 = e2.line, s2 = e2.lineStart, c2 = e2.position), B(e2, t2, C, true, i2) && (g2 ? m2 = e2.result : h2 = e2.result), g2 || (P(e2, d2, f2, p2, m2, h2, o2, s2, c2), p2 = m2 = h2 = null), I(e2, true, -1), v2 = e2.input.charCodeAt(e2.position)), (e2.line === a2 || e2.lineIndent > t2) && v2 !== 0) j(e2, `bad indentation of a mapping entry`);
    else if (e2.lineIndent < t2) break;
  }
  return g2 && P(e2, d2, f2, p2, m2, null, o2, s2, c2), _2 && (e2.tag = l2, e2.anchor = u2, e2.kind = `mapping`, e2.result = d2), _2;
}
e(Et, `readBlockMapping`);
function Dt(e2) {
  var t2, n2 = false, r2 = false, i2, a2, o2 = e2.input.charCodeAt(e2.position);
  if (o2 !== 33) return false;
  if (e2.tag !== null && j(e2, `duplication of a tag property`), o2 = e2.input.charCodeAt(++e2.position), o2 === 60 ? (n2 = true, o2 = e2.input.charCodeAt(++e2.position)) : o2 === 33 ? (r2 = true, i2 = `!!`, o2 = e2.input.charCodeAt(++e2.position)) : i2 = `!`, t2 = e2.position, n2) {
    do
      o2 = e2.input.charCodeAt(++e2.position);
    while (o2 !== 0 && o2 !== 62);
    e2.position < e2.length ? (a2 = e2.input.slice(t2, e2.position), o2 = e2.input.charCodeAt(++e2.position)) : j(e2, `unexpected end of the stream within a verbatim tag`);
  } else {
    for (; o2 !== 0 && !D(o2); ) o2 === 33 && (r2 ? j(e2, `tag suffix cannot contain exclamation marks`) : (i2 = e2.input.slice(t2 - 1, e2.position + 1), ct.test(i2) || j(e2, `named tag handle cannot contain such characters`), r2 = true, t2 = e2.position + 1)), o2 = e2.input.charCodeAt(++e2.position);
    a2 = e2.input.slice(t2, e2.position), st.test(a2) && j(e2, `tag suffix cannot contain flow indicator characters`);
  }
  a2 && !lt.test(a2) && j(e2, `tag name cannot contain such characters: ` + a2);
  try {
    a2 = decodeURIComponent(a2);
  } catch {
    j(e2, `tag name is malformed: ` + a2);
  }
  return n2 ? e2.tag = a2 : x.call(e2.tagMap, i2) ? e2.tag = e2.tagMap[i2] + a2 : i2 === `!` ? e2.tag = `!` + a2 : i2 === `!!` ? e2.tag = `tag:yaml.org,2002:` + a2 : j(e2, `undeclared tag handle "` + i2 + `"`), true;
}
e(Dt, `readTagProperty`);
function Ot(e2) {
  var t2, n2 = e2.input.charCodeAt(e2.position);
  if (n2 !== 38) return false;
  for (e2.anchor !== null && j(e2, `duplication of an anchor property`), n2 = e2.input.charCodeAt(++e2.position), t2 = e2.position; n2 !== 0 && !D(n2) && !O(n2); ) n2 = e2.input.charCodeAt(++e2.position);
  return e2.position === t2 && j(e2, `name of an anchor node must contain at least one character`), e2.anchor = e2.input.slice(t2, e2.position), true;
}
e(Ot, `readAnchorProperty`);
function kt(e2) {
  var t2, n2, r2 = e2.input.charCodeAt(e2.position);
  if (r2 !== 42) return false;
  for (r2 = e2.input.charCodeAt(++e2.position), t2 = e2.position; r2 !== 0 && !D(r2) && !O(r2); ) r2 = e2.input.charCodeAt(++e2.position);
  return e2.position === t2 && j(e2, `name of an alias node must contain at least one character`), n2 = e2.input.slice(t2, e2.position), x.call(e2.anchorMap, n2) || j(e2, `unidentified alias "` + n2 + `"`), e2.result = e2.anchorMap[n2], I(e2, true, -1), true;
}
e(kt, `readAlias`);
function B(e2, t2, n2, r2, i2) {
  var a2, o2, s2, c2 = 1, l2 = false, u2 = false, d2, f2, p2, m2, h2, g2;
  if (e2.listener !== null && e2.listener(`open`, e2), e2.tag = null, e2.anchor = null, e2.kind = null, e2.result = null, a2 = o2 = s2 = C === n2 || nt === n2, r2 && I(e2, true, -1) && (l2 = true, e2.lineIndent > t2 ? c2 = 1 : e2.lineIndent === t2 ? c2 = 0 : e2.lineIndent < t2 && (c2 = -1)), c2 === 1) for (; Dt(e2) || Ot(e2); ) I(e2, true, -1) ? (l2 = true, s2 = a2, e2.lineIndent > t2 ? c2 = 1 : e2.lineIndent === t2 ? c2 = 0 : e2.lineIndent < t2 && (c2 = -1)) : s2 = false;
  if (s2 && (s2 = l2 || i2), (c2 === 1 || C === n2) && (h2 = S === n2 || tt === n2 ? t2 : t2 + 1, g2 = e2.position - e2.lineStart, c2 === 1 ? s2 && (z(e2, g2) || Et(e2, g2, h2)) || wt(e2, h2) ? u2 = true : (o2 && Tt(e2, h2) || St(e2, h2) || Ct(e2, h2) ? u2 = true : kt(e2) ? (u2 = true, (e2.tag !== null || e2.anchor !== null) && j(e2, `alias node should not have any properties`)) : xt(e2, h2, S === n2) && (u2 = true, e2.tag === null && (e2.tag = `?`)), e2.anchor !== null && (e2.anchorMap[e2.anchor] = e2.result)) : c2 === 0 && (u2 = s2 && z(e2, g2))), e2.tag === null) e2.anchor !== null && (e2.anchorMap[e2.anchor] = e2.result);
  else if (e2.tag === `?`) {
    for (e2.result !== null && e2.kind !== `scalar` && j(e2, `unacceptable node kind for !<?> tag; it should be "scalar", not "` + e2.kind + `"`), d2 = 0, f2 = e2.implicitTypes.length; d2 < f2; d2 += 1) if (m2 = e2.implicitTypes[d2], m2.resolve(e2.result)) {
      e2.result = m2.construct(e2.result), e2.tag = m2.tag, e2.anchor !== null && (e2.anchorMap[e2.anchor] = e2.result);
      break;
    }
  } else if (e2.tag !== `!`) {
    if (x.call(e2.typeMap[e2.kind || `fallback`], e2.tag)) m2 = e2.typeMap[e2.kind || `fallback`][e2.tag];
    else for (m2 = null, p2 = e2.typeMap.multi[e2.kind || `fallback`], d2 = 0, f2 = p2.length; d2 < f2; d2 += 1) if (e2.tag.slice(0, p2[d2].tag.length) === p2[d2].tag) {
      m2 = p2[d2];
      break;
    }
    m2 || j(e2, `unknown tag !<` + e2.tag + `>`), e2.result !== null && m2.kind !== e2.kind && j(e2, `unacceptable node kind for !<` + e2.tag + `> tag; it should be "` + m2.kind + `", not "` + e2.kind + `"`), m2.resolve(e2.result, e2.tag) ? (e2.result = m2.construct(e2.result, e2.tag), e2.anchor !== null && (e2.anchorMap[e2.anchor] = e2.result)) : j(e2, `cannot resolve a node with !<` + e2.tag + `> explicit tag`);
  }
  return e2.listener !== null && e2.listener(`close`, e2), e2.tag !== null || e2.anchor !== null || u2;
}
e(B, `composeNode`);
function At(e2) {
  var t2 = e2.position, n2, r2, i2, a2 = false, o2;
  for (e2.version = null, e2.checkLineBreaks = e2.legacy, e2.tagMap = /* @__PURE__ */ Object.create(null), e2.anchorMap = /* @__PURE__ */ Object.create(null); (o2 = e2.input.charCodeAt(e2.position)) !== 0 && (I(e2, true, -1), o2 = e2.input.charCodeAt(e2.position), !(e2.lineIndent > 0 || o2 !== 37)); ) {
    for (a2 = true, o2 = e2.input.charCodeAt(++e2.position), n2 = e2.position; o2 !== 0 && !D(o2); ) o2 = e2.input.charCodeAt(++e2.position);
    for (r2 = e2.input.slice(n2, e2.position), i2 = [], r2.length < 1 && j(e2, `directive name must not be less than one character in length`); o2 !== 0; ) {
      for (; E(o2); ) o2 = e2.input.charCodeAt(++e2.position);
      if (o2 === 35) {
        do
          o2 = e2.input.charCodeAt(++e2.position);
        while (o2 !== 0 && !T(o2));
        break;
      }
      if (T(o2)) break;
      for (n2 = e2.position; o2 !== 0 && !D(o2); ) o2 = e2.input.charCodeAt(++e2.position);
      i2.push(e2.input.slice(n2, e2.position));
    }
    o2 !== 0 && F(e2), x.call(yt, r2) ? yt[r2](e2, r2, i2) : M(e2, `unknown document directive "` + r2 + `"`);
  }
  if (I(e2, true, -1), e2.lineIndent === 0 && e2.input.charCodeAt(e2.position) === 45 && e2.input.charCodeAt(e2.position + 1) === 45 && e2.input.charCodeAt(e2.position + 2) === 45 ? (e2.position += 3, I(e2, true, -1)) : a2 && j(e2, `directives end mark is expected`), B(e2, e2.lineIndent - 1, C, false, true), I(e2, true, -1), e2.checkLineBreaks && ot.test(e2.input.slice(t2, e2.position)) && M(e2, `non-ASCII line breaks are interpreted as content`), e2.documents.push(e2.result), e2.position === e2.lineStart && L(e2)) {
    e2.input.charCodeAt(e2.position) === 46 && (e2.position += 3, I(e2, true, -1));
    return;
  }
  if (e2.position < e2.length - 1) j(e2, `end of the stream or a document separator is expected`);
  else return;
}
e(At, `readDocument`);
function V(e2, t2) {
  e2 = String(e2), t2 || (t2 = {}), e2.length !== 0 && (e2.charCodeAt(e2.length - 1) !== 10 && e2.charCodeAt(e2.length - 1) !== 13 && (e2 += `
`), e2.charCodeAt(0) === 65279 && (e2 = e2.slice(1)));
  var n2 = new _t(e2, t2), r2 = e2.indexOf(`\0`);
  for (r2 !== -1 && (n2.position = r2, j(n2, `null byte is not allowed in input`)), n2.input += `\0`; n2.input.charCodeAt(n2.position) === 32; ) n2.lineIndent += 1, n2.position += 1;
  for (; n2.position < n2.length - 1; ) At(n2);
  return n2.documents;
}
e(V, `loadDocuments`);
function jt(e2, t2, n2) {
  typeof t2 == `object` && t2 && n2 === void 0 && (n2 = t2, t2 = null);
  var r2 = V(e2, n2);
  if (typeof t2 != `function`) return r2;
  for (var i2 = 0, a2 = r2.length; i2 < a2; i2 += 1) t2(r2[i2]);
}
e(jt, `loadAll$1`);
function Mt(e2, t2) {
  var n2 = V(e2, t2);
  if (n2.length !== 0) {
    if (n2.length === 1) return n2[0];
    throw new u(`expected a single document in the stream, but found more`);
  }
}
e(Mt, `load$1`);
var Nt = { loadAll: jt, load: Mt }, Pt = Object.prototype.toString, Ft = Object.prototype.hasOwnProperty, H = 65279, It = 9, U = 10, Lt = 13, Rt = 32, zt = 33, Bt = 34, Vt = 35, Ht = 37, Ut = 38, Wt = 39, Gt = 42, Kt = 44, qt = 45, W = 58, Jt = 61, Yt = 62, Xt = 63, Zt = 64, Qt = 91, $t = 93, en = 96, tn = 123, nn = 124, rn = 125, G = {};
G[0] = `\\0`, G[7] = `\\a`, G[8] = `\\b`, G[9] = `\\t`, G[10] = `\\n`, G[11] = `\\v`, G[12] = `\\f`, G[13] = `\\r`, G[27] = `\\e`, G[34] = `\\"`, G[92] = `\\\\`, G[133] = `\\N`, G[160] = `\\_`, G[8232] = `\\L`, G[8233] = `\\P`;
var an = [`y`, `Y`, `yes`, `Yes`, `YES`, `on`, `On`, `ON`, `n`, `N`, `no`, `No`, `NO`, `off`, `Off`, `OFF`], on = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function sn(e2, t2) {
  var n2, r2, i2, a2, o2, s2, c2;
  if (t2 === null) return {};
  for (n2 = {}, r2 = Object.keys(t2), i2 = 0, a2 = r2.length; i2 < a2; i2 += 1) o2 = r2[i2], s2 = String(t2[o2]), o2.slice(0, 2) === `!!` && (o2 = `tag:yaml.org,2002:` + o2.slice(2)), c2 = e2.compiledTypeMap.fallback[o2], c2 && Ft.call(c2.styleAliases, s2) && (s2 = c2.styleAliases[s2]), n2[o2] = s2;
  return n2;
}
e(sn, `compileStyleMap`);
function cn(e2) {
  var t2 = e2.toString(16).toUpperCase(), n2, r2;
  if (e2 <= 255) n2 = `x`, r2 = 2;
  else if (e2 <= 65535) n2 = `u`, r2 = 4;
  else if (e2 <= 4294967295) n2 = `U`, r2 = 8;
  else throw new u(`code point within a string may not be greater than 0xFFFFFFFF`);
  return `\\` + n2 + s.repeat(`0`, r2 - t2.length) + t2;
}
e(cn, `encodeHex`);
var ln = 1, K = 2;
function un(e2) {
  this.schema = e2.schema || et, this.indent = Math.max(1, e2.indent || 2), this.noArrayIndent = e2.noArrayIndent || false, this.skipInvalid = e2.skipInvalid || false, this.flowLevel = s.isNothing(e2.flowLevel) ? -1 : e2.flowLevel, this.styleMap = sn(this.schema, e2.styles || null), this.sortKeys = e2.sortKeys || false, this.lineWidth = e2.lineWidth || 80, this.noRefs = e2.noRefs || false, this.noCompatMode = e2.noCompatMode || false, this.condenseFlow = e2.condenseFlow || false, this.quotingType = e2.quotingType === `"` ? K : ln, this.forceQuotes = e2.forceQuotes || false, this.replacer = typeof e2.replacer == `function` ? e2.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = ``, this.duplicates = [], this.usedDuplicates = null;
}
e(un, `State`);
function dn(e2, t2) {
  for (var n2 = s.repeat(` `, t2), r2 = 0, i2 = -1, a2 = ``, o2, c2 = e2.length; r2 < c2; ) i2 = e2.indexOf(`
`, r2), i2 === -1 ? (o2 = e2.slice(r2), r2 = c2) : (o2 = e2.slice(r2, i2 + 1), r2 = i2 + 1), o2.length && o2 !== `
` && (a2 += n2), a2 += o2;
  return a2;
}
e(dn, `indentString`);
function q(e2, t2) {
  return `
` + s.repeat(` `, e2.indent * t2);
}
e(q, `generateNextLine`);
function fn(e2, t2) {
  var n2, r2, i2;
  for (n2 = 0, r2 = e2.implicitTypes.length; n2 < r2; n2 += 1) if (i2 = e2.implicitTypes[n2], i2.resolve(t2)) return true;
  return false;
}
e(fn, `testImplicitResolving`);
function J(e2) {
  return e2 === Rt || e2 === It;
}
e(J, `isWhitespace`);
function Y(e2) {
  return 32 <= e2 && e2 <= 126 || 161 <= e2 && e2 <= 55295 && e2 !== 8232 && e2 !== 8233 || 57344 <= e2 && e2 <= 65533 && e2 !== H || 65536 <= e2 && e2 <= 1114111;
}
e(Y, `isPrintable`);
function pn(e2) {
  return Y(e2) && e2 !== H && e2 !== Lt && e2 !== U;
}
e(pn, `isNsCharOrWhitespace`);
function mn(e2, t2, n2) {
  var r2 = pn(e2), i2 = r2 && !J(e2);
  return (n2 ? r2 : r2 && e2 !== Kt && e2 !== Qt && e2 !== $t && e2 !== tn && e2 !== rn) && e2 !== Vt && !(t2 === W && !i2) || pn(t2) && !J(t2) && e2 === Vt || t2 === W && i2;
}
e(mn, `isPlainSafe`);
function hn(e2) {
  return Y(e2) && e2 !== H && !J(e2) && e2 !== qt && e2 !== Xt && e2 !== W && e2 !== Kt && e2 !== Qt && e2 !== $t && e2 !== tn && e2 !== rn && e2 !== Vt && e2 !== Ut && e2 !== Gt && e2 !== zt && e2 !== nn && e2 !== Jt && e2 !== Yt && e2 !== Wt && e2 !== Bt && e2 !== Ht && e2 !== Zt && e2 !== en;
}
e(hn, `isPlainSafeFirst`);
function gn(e2) {
  return !J(e2) && e2 !== W;
}
e(gn, `isPlainSafeLast`);
function X(e2, t2) {
  var n2 = e2.charCodeAt(t2), r2;
  return n2 >= 55296 && n2 <= 56319 && t2 + 1 < e2.length && (r2 = e2.charCodeAt(t2 + 1), r2 >= 56320 && r2 <= 57343) ? (n2 - 55296) * 1024 + r2 - 56320 + 65536 : n2;
}
e(X, `codePointAt`);
function _n(e2) {
  return /^\n* /.test(e2);
}
e(_n, `needIndentIndicator`);
var vn = 1, yn = 2, bn = 3, xn = 4, Z = 5;
function Sn(e2, t2, n2, r2, i2, a2, o2, s2) {
  var c2, l2 = 0, u2 = null, d2 = false, f2 = false, p2 = r2 !== -1, m2 = -1, h2 = hn(X(e2, 0)) && gn(X(e2, e2.length - 1));
  if (t2 || o2) for (c2 = 0; c2 < e2.length; l2 >= 65536 ? c2 += 2 : c2++) {
    if (l2 = X(e2, c2), !Y(l2)) return Z;
    h2 && (h2 = mn(l2, u2, s2)), u2 = l2;
  }
  else {
    for (c2 = 0; c2 < e2.length; l2 >= 65536 ? c2 += 2 : c2++) {
      if (l2 = X(e2, c2), l2 === U) d2 = true, p2 && (f2 || (f2 = c2 - m2 - 1 > r2 && e2[m2 + 1] !== ` `), m2 = c2);
      else if (!Y(l2)) return Z;
      h2 && (h2 = mn(l2, u2, s2)), u2 = l2;
    }
    f2 || (f2 = p2 && c2 - m2 - 1 > r2 && e2[m2 + 1] !== ` `);
  }
  return !d2 && !f2 ? h2 && !o2 && !i2(e2) ? vn : a2 === K ? Z : yn : n2 > 9 && _n(e2) ? Z : o2 ? a2 === K ? Z : yn : f2 ? xn : bn;
}
e(Sn, `chooseScalarStyle`);
function Cn(t2, n2, r2, i2, a2) {
  t2.dump = (function() {
    if (n2.length === 0) return t2.quotingType === K ? `""` : `''`;
    if (!t2.noCompatMode && (an.indexOf(n2) !== -1 || on.test(n2))) return t2.quotingType === K ? `"` + n2 + `"` : `'` + n2 + `'`;
    var o2 = t2.indent * Math.max(1, r2), s2 = t2.lineWidth === -1 ? -1 : Math.max(Math.min(t2.lineWidth, 40), t2.lineWidth - o2), c2 = i2 || t2.flowLevel > -1 && r2 >= t2.flowLevel;
    function l2(e2) {
      return fn(t2, e2);
    }
    switch (e(l2, `testAmbiguity`), Sn(n2, c2, t2.indent, s2, l2, t2.quotingType, t2.forceQuotes && !i2, a2)) {
      case vn:
        return n2;
      case yn:
        return `'` + n2.replace(/'/g, `''`) + `'`;
      case bn:
        return `|` + wn(n2, t2.indent) + Tn(dn(n2, o2));
      case xn:
        return `>` + wn(n2, t2.indent) + Tn(dn(En(n2, s2), o2));
      case Z:
        return `"` + On(n2) + `"`;
      default:
        throw new u(`impossible error: invalid scalar style`);
    }
  })();
}
e(Cn, `writeScalar`);
function wn(e2, t2) {
  var n2 = _n(e2) ? String(t2) : ``, r2 = e2[e2.length - 1] === `
`;
  return n2 + (r2 && (e2[e2.length - 2] === `
` || e2 === `
`) ? `+` : r2 ? `` : `-`) + `
`;
}
e(wn, `blockHeader`);
function Tn(e2) {
  return e2[e2.length - 1] === `
` ? e2.slice(0, -1) : e2;
}
e(Tn, `dropEndingNewline`);
function En(e2, t2) {
  for (var n2 = /(\n+)([^\n]*)/g, r2 = (function() {
    var r3 = e2.indexOf(`
`);
    return r3 = r3 === -1 ? e2.length : r3, n2.lastIndex = r3, Dn(e2.slice(0, r3), t2);
  })(), i2 = e2[0] === `
` || e2[0] === ` `, a2, o2; o2 = n2.exec(e2); ) {
    var s2 = o2[1], c2 = o2[2];
    a2 = c2[0] === ` `, r2 += s2 + (!i2 && !a2 && c2 !== `` ? `
` : ``) + Dn(c2, t2), i2 = a2;
  }
  return r2;
}
e(En, `foldString`);
function Dn(e2, t2) {
  if (e2 === `` || e2[0] === ` `) return e2;
  for (var n2 = / [^ ]/g, r2, i2 = 0, a2, o2 = 0, s2 = 0, c2 = ``; r2 = n2.exec(e2); ) s2 = r2.index, s2 - i2 > t2 && (a2 = o2 > i2 ? o2 : s2, c2 += `
` + e2.slice(i2, a2), i2 = a2 + 1), o2 = s2;
  return c2 += `
`, e2.length - i2 > t2 && o2 > i2 ? c2 += e2.slice(i2, o2) + `
` + e2.slice(o2 + 1) : c2 += e2.slice(i2), c2.slice(1);
}
e(Dn, `foldLine`);
function On(e2) {
  for (var t2 = ``, n2 = 0, r2, i2 = 0; i2 < e2.length; n2 >= 65536 ? i2 += 2 : i2++) n2 = X(e2, i2), r2 = G[n2], !r2 && Y(n2) ? (t2 += e2[i2], n2 >= 65536 && (t2 += e2[i2 + 1])) : t2 += r2 || cn(n2);
  return t2;
}
e(On, `escapeString`);
function kn(e2, t2, n2) {
  var r2 = ``, i2 = e2.tag, a2, o2, s2;
  for (a2 = 0, o2 = n2.length; a2 < o2; a2 += 1) s2 = n2[a2], e2.replacer && (s2 = e2.replacer.call(n2, String(a2), s2)), (Q(e2, t2, s2, false, false) || s2 === void 0 && Q(e2, t2, null, false, false)) && (r2 !== `` && (r2 += `,` + (e2.condenseFlow ? `` : ` `)), r2 += e2.dump);
  e2.tag = i2, e2.dump = `[` + r2 + `]`;
}
e(kn, `writeFlowSequence`);
function An(e2, t2, n2, r2) {
  var i2 = ``, a2 = e2.tag, o2, s2, c2;
  for (o2 = 0, s2 = n2.length; o2 < s2; o2 += 1) c2 = n2[o2], e2.replacer && (c2 = e2.replacer.call(n2, String(o2), c2)), (Q(e2, t2 + 1, c2, true, true, false, true) || c2 === void 0 && Q(e2, t2 + 1, null, true, true, false, true)) && ((!r2 || i2 !== ``) && (i2 += q(e2, t2)), e2.dump && U === e2.dump.charCodeAt(0) ? i2 += `-` : i2 += `- `, i2 += e2.dump);
  e2.tag = a2, e2.dump = i2 || `[]`;
}
e(An, `writeBlockSequence`);
function jn(e2, t2, n2) {
  var r2 = ``, i2 = e2.tag, a2 = Object.keys(n2), o2, s2, c2, l2, u2;
  for (o2 = 0, s2 = a2.length; o2 < s2; o2 += 1) u2 = ``, r2 !== `` && (u2 += `, `), e2.condenseFlow && (u2 += `"`), c2 = a2[o2], l2 = n2[c2], e2.replacer && (l2 = e2.replacer.call(n2, c2, l2)), Q(e2, t2, c2, false, false) && (e2.dump.length > 1024 && (u2 += `? `), u2 += e2.dump + (e2.condenseFlow ? `"` : ``) + `:` + (e2.condenseFlow ? `` : ` `), Q(e2, t2, l2, false, false) && (u2 += e2.dump, r2 += u2));
  e2.tag = i2, e2.dump = `{` + r2 + `}`;
}
e(jn, `writeFlowMapping`);
function Mn(e2, t2, n2, r2) {
  var i2 = ``, a2 = e2.tag, o2 = Object.keys(n2), s2, c2, l2, d2, f2, p2;
  if (e2.sortKeys === true) o2.sort();
  else if (typeof e2.sortKeys == `function`) o2.sort(e2.sortKeys);
  else if (e2.sortKeys) throw new u(`sortKeys must be a boolean or a function`);
  for (s2 = 0, c2 = o2.length; s2 < c2; s2 += 1) p2 = ``, (!r2 || i2 !== ``) && (p2 += q(e2, t2)), l2 = o2[s2], d2 = n2[l2], e2.replacer && (d2 = e2.replacer.call(n2, l2, d2)), Q(e2, t2 + 1, l2, true, true, true) && (f2 = e2.tag !== null && e2.tag !== `?` || e2.dump && e2.dump.length > 1024, f2 && (e2.dump && U === e2.dump.charCodeAt(0) ? p2 += `?` : p2 += `? `), p2 += e2.dump, f2 && (p2 += q(e2, t2)), Q(e2, t2 + 1, d2, true, f2) && (e2.dump && U === e2.dump.charCodeAt(0) ? p2 += `:` : p2 += `: `, p2 += e2.dump, i2 += p2));
  e2.tag = a2, e2.dump = i2 || `{}`;
}
e(Mn, `writeBlockMapping`);
function Nn(e2, t2, n2) {
  var r2, i2 = n2 ? e2.explicitTypes : e2.implicitTypes, a2, o2, s2, c2;
  for (a2 = 0, o2 = i2.length; a2 < o2; a2 += 1) if (s2 = i2[a2], (s2.instanceOf || s2.predicate) && (!s2.instanceOf || typeof t2 == `object` && t2 instanceof s2.instanceOf) && (!s2.predicate || s2.predicate(t2))) {
    if (n2 ? s2.multi && s2.representName ? e2.tag = s2.representName(t2) : e2.tag = s2.tag : e2.tag = `?`, s2.represent) {
      if (c2 = e2.styleMap[s2.tag] || s2.defaultStyle, Pt.call(s2.represent) === `[object Function]`) r2 = s2.represent(t2, c2);
      else if (Ft.call(s2.represent, c2)) r2 = s2.represent[c2](t2, c2);
      else throw new u(`!<` + s2.tag + `> tag resolver accepts not "` + c2 + `" style`);
      e2.dump = r2;
    }
    return true;
  }
  return false;
}
e(Nn, `detectType`);
function Q(e2, t2, n2, r2, i2, a2, o2) {
  e2.tag = null, e2.dump = n2, Nn(e2, n2, false) || Nn(e2, n2, true);
  var s2 = Pt.call(e2.dump), c2 = r2, l2;
  r2 && (r2 = e2.flowLevel < 0 || e2.flowLevel > t2);
  var d2 = s2 === `[object Object]` || s2 === `[object Array]`, f2, p2;
  if (d2 && (f2 = e2.duplicates.indexOf(n2), p2 = f2 !== -1), (e2.tag !== null && e2.tag !== `?` || p2 || e2.indent !== 2 && t2 > 0) && (i2 = false), p2 && e2.usedDuplicates[f2]) e2.dump = `*ref_` + f2;
  else {
    if (d2 && p2 && !e2.usedDuplicates[f2] && (e2.usedDuplicates[f2] = true), s2 === `[object Object]`) r2 && Object.keys(e2.dump).length !== 0 ? (Mn(e2, t2, e2.dump, i2), p2 && (e2.dump = `&ref_` + f2 + e2.dump)) : (jn(e2, t2, e2.dump), p2 && (e2.dump = `&ref_` + f2 + ` ` + e2.dump));
    else if (s2 === `[object Array]`) r2 && e2.dump.length !== 0 ? (e2.noArrayIndent && !o2 && t2 > 0 ? An(e2, t2 - 1, e2.dump, i2) : An(e2, t2, e2.dump, i2), p2 && (e2.dump = `&ref_` + f2 + e2.dump)) : (kn(e2, t2, e2.dump), p2 && (e2.dump = `&ref_` + f2 + ` ` + e2.dump));
    else if (s2 === `[object String]`) e2.tag !== `?` && Cn(e2, e2.dump, t2, a2, c2);
    else if (s2 === `[object Undefined]`) return false;
    else {
      if (e2.skipInvalid) return false;
      throw new u(`unacceptable kind of an object to dump ` + s2);
    }
    e2.tag !== null && e2.tag !== `?` && (l2 = encodeURI(e2.tag[0] === `!` ? e2.tag.slice(1) : e2.tag).replace(/!/g, `%21`), l2 = e2.tag[0] === `!` ? `!` + l2 : l2.slice(0, 18) === `tag:yaml.org,2002:` ? `!!` + l2.slice(18) : `!<` + l2 + `>`, e2.dump = l2 + ` ` + e2.dump);
  }
  return true;
}
e(Q, `writeNode`);
function Pn(e2, t2) {
  var n2 = [], r2 = [], i2, a2;
  for ($(e2, n2, r2), i2 = 0, a2 = r2.length; i2 < a2; i2 += 1) t2.duplicates.push(n2[r2[i2]]);
  t2.usedDuplicates = Array(a2);
}
e(Pn, `getDuplicateReferences`);
function $(e2, t2, n2) {
  var r2, i2, a2;
  if (typeof e2 == `object` && e2) if (i2 = t2.indexOf(e2), i2 !== -1) n2.indexOf(i2) === -1 && n2.push(i2);
  else if (t2.push(e2), Array.isArray(e2)) for (i2 = 0, a2 = e2.length; i2 < a2; i2 += 1) $(e2[i2], t2, n2);
  else for (r2 = Object.keys(e2), i2 = 0, a2 = r2.length; i2 < a2; i2 += 1) $(e2[r2[i2]], t2, n2);
}
e($, `inspectNode`);
function Fn(e2, t2) {
  t2 || (t2 = {});
  var n2 = new un(t2);
  n2.noRefs || Pn(e2, n2);
  var r2 = e2;
  return n2.replacer && (r2 = n2.replacer.call({ "": r2 }, ``, r2)), Q(n2, 0, r2, true, true) ? n2.dump + `
` : ``;
}
e(Fn, `dump$1`);
var In = { dump: Fn };
function Ln(e2, t2) {
  return function() {
    throw Error(`Function yaml.` + e2 + ` is removed in js-yaml 4. Use yaml.` + t2 + ` instead, which is now safe by default.`);
  };
}
e(Ln, `renamed`);
var Rn = Te, zn = Nt.load;
Nt.loadAll, In.dump;
export {
  zn as n,
  Rn as t
};
