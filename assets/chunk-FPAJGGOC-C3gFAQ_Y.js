var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a2, _b2, _c2, _d2, _e2;
import { i as e, n as t, r as n, t as r } from "./chunk-CXUkj53v.js";
import { t as i } from "./isEmpty-Suvitui-.js";
import { a, c as o, d as s, n as c, s as l, t as u } from "./reduce-S4_EnTW-.js";
import { a as d, n as f, t as p } from "./flatten-DG1tNxhW.js";
function m(e6) {
  return typeof e6 == `object` && !!e6 && typeof e6.$type == `string`;
}
function h(e6) {
  return typeof e6 == `object` && !!e6 && typeof e6.$refText == `string`;
}
function g(e6) {
  return typeof e6 == `object` && !!e6 && typeof e6.name == `string` && typeof e6.type == `string` && typeof e6.path == `string`;
}
function _(e6) {
  return typeof e6 == `object` && !!e6 && m(e6.container) && h(e6.reference) && typeof e6.message == `string`;
}
var v = class {
  constructor() {
    this.subtypes = {}, this.allSubtypes = {};
  }
  isInstance(e6, t2) {
    return m(e6) && this.isSubtype(e6.$type, t2);
  }
  isSubtype(e6, t2) {
    if (e6 === t2) return true;
    let n2 = this.subtypes[e6];
    n2 || (n2 = this.subtypes[e6] = {});
    let r2 = n2[t2];
    if (r2 !== void 0) return r2;
    {
      let r3 = this.computeIsSubtype(e6, t2);
      return n2[t2] = r3, r3;
    }
  }
  getAllSubTypes(e6) {
    let t2 = this.allSubtypes[e6];
    if (t2) return t2;
    {
      let t3 = this.getAllTypes(), n2 = [];
      for (let r2 of t3) this.isSubtype(r2, e6) && n2.push(r2);
      return this.allSubtypes[e6] = n2, n2;
    }
  }
};
function y(e6) {
  return typeof e6 == `object` && !!e6 && Array.isArray(e6.content);
}
function ee(e6) {
  return typeof e6 == `object` && !!e6 && typeof e6.tokenType == `object`;
}
function te(e6) {
  return y(e6) && typeof e6.fullText == `string`;
}
var b = class e2 {
  constructor(e6, t2) {
    this.startFn = e6, this.nextFn = t2;
  }
  iterator() {
    let e6 = { state: this.startFn(), next: () => this.nextFn(e6.state), [Symbol.iterator]: () => e6 };
    return e6;
  }
  [Symbol.iterator]() {
    return this.iterator();
  }
  isEmpty() {
    return !!this.iterator().next().done;
  }
  count() {
    let e6 = this.iterator(), t2 = 0, n2 = e6.next();
    for (; !n2.done; ) t2++, n2 = e6.next();
    return t2;
  }
  toArray() {
    let e6 = [], t2 = this.iterator(), n2;
    do
      n2 = t2.next(), n2.value !== void 0 && e6.push(n2.value);
    while (!n2.done);
    return e6;
  }
  toSet() {
    return new Set(this);
  }
  toMap(e6, t2) {
    let n2 = this.map((n3) => [e6 ? e6(n3) : n3, t2 ? t2(n3) : n3]);
    return new Map(n2);
  }
  toString() {
    return this.join();
  }
  concat(t2) {
    return new e2(() => ({ first: this.startFn(), firstDone: false, iterator: t2[Symbol.iterator]() }), (e6) => {
      let t3;
      if (!e6.firstDone) {
        do
          if (t3 = this.nextFn(e6.first), !t3.done) return t3;
        while (!t3.done);
        e6.firstDone = true;
      }
      do
        if (t3 = e6.iterator.next(), !t3.done) return t3;
      while (!t3.done);
      return x;
    });
  }
  join(e6 = `,`) {
    let t2 = this.iterator(), n2 = ``, r2, i2 = false;
    do
      r2 = t2.next(), r2.done || (i2 && (n2 += e6), n2 += ne(r2.value)), i2 = true;
    while (!r2.done);
    return n2;
  }
  indexOf(e6, t2 = 0) {
    let n2 = this.iterator(), r2 = 0, i2 = n2.next();
    for (; !i2.done; ) {
      if (r2 >= t2 && i2.value === e6) return r2;
      i2 = n2.next(), r2++;
    }
    return -1;
  }
  every(e6) {
    let t2 = this.iterator(), n2 = t2.next();
    for (; !n2.done; ) {
      if (!e6(n2.value)) return false;
      n2 = t2.next();
    }
    return true;
  }
  some(e6) {
    let t2 = this.iterator(), n2 = t2.next();
    for (; !n2.done; ) {
      if (e6(n2.value)) return true;
      n2 = t2.next();
    }
    return false;
  }
  forEach(e6) {
    let t2 = this.iterator(), n2 = 0, r2 = t2.next();
    for (; !r2.done; ) e6(r2.value, n2), r2 = t2.next(), n2++;
  }
  map(t2) {
    return new e2(this.startFn, (e6) => {
      let { done: n2, value: r2 } = this.nextFn(e6);
      return n2 ? x : { done: false, value: t2(r2) };
    });
  }
  filter(t2) {
    return new e2(this.startFn, (e6) => {
      let n2;
      do
        if (n2 = this.nextFn(e6), !n2.done && t2(n2.value)) return n2;
      while (!n2.done);
      return x;
    });
  }
  nonNullable() {
    return this.filter((e6) => e6 != null);
  }
  reduce(e6, t2) {
    let n2 = this.iterator(), r2 = t2, i2 = n2.next();
    for (; !i2.done; ) r2 = r2 === void 0 ? i2.value : e6(r2, i2.value), i2 = n2.next();
    return r2;
  }
  reduceRight(e6, t2) {
    return this.recursiveReduce(this.iterator(), e6, t2);
  }
  recursiveReduce(e6, t2, n2) {
    let r2 = e6.next();
    if (r2.done) return n2;
    let i2 = this.recursiveReduce(e6, t2, n2);
    return i2 === void 0 ? r2.value : t2(i2, r2.value);
  }
  find(e6) {
    let t2 = this.iterator(), n2 = t2.next();
    for (; !n2.done; ) {
      if (e6(n2.value)) return n2.value;
      n2 = t2.next();
    }
  }
  findIndex(e6) {
    let t2 = this.iterator(), n2 = 0, r2 = t2.next();
    for (; !r2.done; ) {
      if (e6(r2.value)) return n2;
      r2 = t2.next(), n2++;
    }
    return -1;
  }
  includes(e6) {
    let t2 = this.iterator(), n2 = t2.next();
    for (; !n2.done; ) {
      if (n2.value === e6) return true;
      n2 = t2.next();
    }
    return false;
  }
  flatMap(t2) {
    return new e2(() => ({ this: this.startFn() }), (e6) => {
      do {
        if (e6.iterator) {
          let t3 = e6.iterator.next();
          if (t3.done) e6.iterator = void 0;
          else return t3;
        }
        let { done: n2, value: r2 } = this.nextFn(e6.this);
        if (!n2) {
          let n3 = t2(r2);
          if (re(n3)) e6.iterator = n3[Symbol.iterator]();
          else return { done: false, value: n3 };
        }
      } while (e6.iterator);
      return x;
    });
  }
  flat(t2) {
    if (t2 === void 0 && (t2 = 1), t2 <= 0) return this;
    let n2 = t2 > 1 ? this.flat(t2 - 1) : this;
    return new e2(() => ({ this: n2.startFn() }), (e6) => {
      do {
        if (e6.iterator) {
          let t4 = e6.iterator.next();
          if (t4.done) e6.iterator = void 0;
          else return t4;
        }
        let { done: t3, value: r2 } = n2.nextFn(e6.this);
        if (!t3) if (re(r2)) e6.iterator = r2[Symbol.iterator]();
        else return { done: false, value: r2 };
      } while (e6.iterator);
      return x;
    });
  }
  head() {
    let e6 = this.iterator().next();
    if (!e6.done) return e6.value;
  }
  tail(t2 = 1) {
    return new e2(() => {
      let e6 = this.startFn();
      for (let n2 = 0; n2 < t2; n2++) if (this.nextFn(e6).done) return e6;
      return e6;
    }, this.nextFn);
  }
  limit(t2) {
    return new e2(() => ({ size: 0, state: this.startFn() }), (e6) => (e6.size++, e6.size > t2 ? x : this.nextFn(e6.state)));
  }
  distinct(t2) {
    return new e2(() => ({ set: /* @__PURE__ */ new Set(), internalState: this.startFn() }), (e6) => {
      let n2;
      do
        if (n2 = this.nextFn(e6.internalState), !n2.done) {
          let r2 = t2 ? t2(n2.value) : n2.value;
          if (!e6.set.has(r2)) return e6.set.add(r2), n2;
        }
      while (!n2.done);
      return x;
    });
  }
  exclude(e6, t2) {
    let n2 = /* @__PURE__ */ new Set();
    for (let r2 of e6) {
      let e7 = t2 ? t2(r2) : r2;
      n2.add(e7);
    }
    return this.filter((e7) => {
      let r2 = t2 ? t2(e7) : e7;
      return !n2.has(r2);
    });
  }
};
function ne(e6) {
  return typeof e6 == `string` ? e6 : e6 === void 0 ? `undefined` : typeof e6.toString == `function` ? e6.toString() : Object.prototype.toString.call(e6);
}
function re(e6) {
  return !!e6 && typeof e6[Symbol.iterator] == `function`;
}
const ie = new b(() => void 0, () => x), x = Object.freeze({ done: true, value: void 0 });
function S(...e6) {
  if (e6.length === 1) {
    let t2 = e6[0];
    if (t2 instanceof b) return t2;
    if (re(t2)) return new b(() => t2[Symbol.iterator](), (e7) => e7.next());
    if (typeof t2.length == `number`) return new b(() => ({ index: 0 }), (e7) => e7.index < t2.length ? { done: false, value: t2[e7.index++] } : x);
  }
  return e6.length > 1 ? new b(() => ({ collIndex: 0, arrIndex: 0 }), (t2) => {
    do {
      if (t2.iterator) {
        let e7 = t2.iterator.next();
        if (!e7.done) return e7;
        t2.iterator = void 0;
      }
      if (t2.array) {
        if (t2.arrIndex < t2.array.length) return { done: false, value: t2.array[t2.arrIndex++] };
        t2.array = void 0, t2.arrIndex = 0;
      }
      if (t2.collIndex < e6.length) {
        let n2 = e6[t2.collIndex++];
        re(n2) ? t2.iterator = n2[Symbol.iterator]() : n2 && typeof n2.length == `number` && (t2.array = n2);
      }
    } while (t2.iterator || t2.array || t2.collIndex < e6.length);
    return x;
  }) : ie;
}
var ae = class extends b {
  constructor(e6, t2, n2) {
    super(() => ({ iterators: (n2 == null ? void 0 : n2.includeRoot) ? [[e6][Symbol.iterator]()] : [t2(e6)[Symbol.iterator]()], pruned: false }), (e7) => {
      for (e7.pruned && (e7.pruned = (e7.iterators.pop(), false)); e7.iterators.length > 0; ) {
        let n3 = e7.iterators[e7.iterators.length - 1].next();
        if (n3.done) e7.iterators.pop();
        else return e7.iterators.push(t2(n3.value)[Symbol.iterator]()), n3;
      }
      return x;
    });
  }
  iterator() {
    let e6 = { state: this.startFn(), next: () => this.nextFn(e6.state), prune: () => {
      e6.state.pruned = true;
    }, [Symbol.iterator]: () => e6 };
    return e6;
  }
}, oe;
(function(e6) {
  function t2(e7) {
    return e7.reduce((e8, t3) => e8 + t3, 0);
  }
  e6.sum = t2;
  function n2(e7) {
    return e7.reduce((e8, t3) => e8 * t3, 0);
  }
  e6.product = n2;
  function r2(e7) {
    return e7.reduce((e8, t3) => Math.min(e8, t3));
  }
  e6.min = r2;
  function i2(e7) {
    return e7.reduce((e8, t3) => Math.max(e8, t3));
  }
  e6.max = i2;
})(oe || (oe = {}));
var se = t({ DefaultNameRegexp: () => ge, RangeComparison: () => pe, compareRange: () => me, findCommentNode: () => ve, findDeclarationNodeAtOffset: () => _e, findLeafNodeAtOffset: () => be, findLeafNodeBeforeOffset: () => xe, flattenCst: () => le, getInteriorNodes: () => Ee, getNextNode: () => we, getPreviousNode: () => Ce, getStartlineNode: () => Te, inRange: () => he, isChildNode: () => ue, isCommentNode: () => ye, streamCst: () => ce, toDocumentSegment: () => fe, tokenToRange: () => de });
function ce(e6) {
  return new ae(e6, (e7) => y(e7) ? e7.content : [], { includeRoot: true });
}
function le(e6) {
  return ce(e6).filter(ee);
}
function ue(e6, t2) {
  for (; e6.container; ) if (e6 = e6.container, e6 === t2) return true;
  return false;
}
function de(e6) {
  return { start: { character: e6.startColumn - 1, line: e6.startLine - 1 }, end: { character: e6.endColumn, line: e6.endLine - 1 } };
}
function fe(e6) {
  if (!e6) return;
  let { offset: t2, end: n2, range: r2 } = e6;
  return { range: r2, offset: t2, end: n2, length: n2 - t2 };
}
var pe;
(function(e6) {
  e6[e6.Before = 0] = `Before`, e6[e6.After = 1] = `After`, e6[e6.OverlapFront = 2] = `OverlapFront`, e6[e6.OverlapBack = 3] = `OverlapBack`, e6[e6.Inside = 4] = `Inside`, e6[e6.Outside = 5] = `Outside`;
})(pe || (pe = {}));
function me(e6, t2) {
  if (e6.end.line < t2.start.line || e6.end.line === t2.start.line && e6.end.character <= t2.start.character) return pe.Before;
  if (e6.start.line > t2.end.line || e6.start.line === t2.end.line && e6.start.character >= t2.end.character) return pe.After;
  let n2 = e6.start.line > t2.start.line || e6.start.line === t2.start.line && e6.start.character >= t2.start.character, r2 = e6.end.line < t2.end.line || e6.end.line === t2.end.line && e6.end.character <= t2.end.character;
  return n2 && r2 ? pe.Inside : n2 ? pe.OverlapBack : r2 ? pe.OverlapFront : pe.Outside;
}
function he(e6, t2) {
  return me(e6, t2) > pe.After;
}
const ge = /^[\w\p{L}]$/u;
function _e(e6, t2, n2 = ge) {
  if (e6) {
    if (t2 > 0) {
      let r2 = t2 - e6.offset, i2 = e6.text.charAt(r2);
      n2.test(i2) || t2--;
    }
    return be(e6, t2);
  }
}
function ve(e6, t2) {
  if (e6) {
    let n2 = Ce(e6, true);
    if (n2 && ye(n2, t2)) return n2;
    if (te(e6)) {
      let n3 = e6.content.findIndex((e7) => !e7.hidden);
      for (let r2 = n3 - 1; r2 >= 0; r2--) {
        let n4 = e6.content[r2];
        if (ye(n4, t2)) return n4;
      }
    }
  }
}
function ye(e6, t2) {
  return ee(e6) && t2.includes(e6.tokenType.name);
}
function be(e6, t2) {
  if (ee(e6)) return e6;
  if (y(e6)) {
    let n2 = Se(e6, t2, false);
    if (n2) return be(n2, t2);
  }
}
function xe(e6, t2) {
  if (ee(e6)) return e6;
  if (y(e6)) {
    let n2 = Se(e6, t2, true);
    if (n2) return xe(n2, t2);
  }
}
function Se(e6, t2, n2) {
  let r2 = 0, i2 = e6.content.length - 1, a2;
  for (; r2 <= i2; ) {
    let o2 = Math.floor((r2 + i2) / 2), s2 = e6.content[o2];
    if (s2.offset <= t2 && s2.end > t2) return s2;
    s2.end <= t2 ? (a2 = n2 ? s2 : void 0, r2 = o2 + 1) : i2 = o2 - 1;
  }
  return a2;
}
function Ce(e6, t2 = true) {
  for (; e6.container; ) {
    let n2 = e6.container, r2 = n2.content.indexOf(e6);
    for (; r2 > 0; ) {
      r2--;
      let e7 = n2.content[r2];
      if (t2 || !e7.hidden) return e7;
    }
    e6 = n2;
  }
}
function we(e6, t2 = true) {
  for (; e6.container; ) {
    let n2 = e6.container, r2 = n2.content.indexOf(e6), i2 = n2.content.length - 1;
    for (; r2 < i2; ) {
      r2++;
      let e7 = n2.content[r2];
      if (t2 || !e7.hidden) return e7;
    }
    e6 = n2;
  }
}
function Te(e6) {
  if (e6.range.start.character === 0) return e6;
  let t2 = e6.range.start.line, n2 = e6, r2;
  for (; e6.container; ) {
    let i2 = e6.container, a2 = r2 ?? i2.content.indexOf(e6);
    if (a2 === 0 ? (e6 = i2, r2 = void 0) : (r2 = a2 - 1, e6 = i2.content[r2]), e6.range.start.line !== t2) break;
    n2 = e6;
  }
  return n2;
}
function Ee(e6, t2) {
  let n2 = De(e6, t2);
  return n2 ? n2.parent.content.slice(n2.a + 1, n2.b) : [];
}
function De(e6, t2) {
  let n2 = Oe(e6), r2 = Oe(t2), i2;
  for (let e7 = 0; e7 < n2.length && e7 < r2.length; e7++) {
    let t3 = n2[e7], a2 = r2[e7];
    if (t3.parent === a2.parent) i2 = { parent: t3.parent, a: t3.index, b: a2.index };
    else break;
  }
  return i2;
}
function Oe(e6) {
  let t2 = [];
  for (; e6.container; ) {
    let n2 = e6.container, r2 = n2.content.indexOf(e6);
    t2.push({ parent: n2, index: r2 }), e6 = n2;
  }
  return t2.reverse();
}
var ke = class extends Error {
  constructor(e6, t2) {
    super(e6 ? `${t2} at ${e6.range.start.line}:${e6.range.start.character}` : t2);
  }
};
function Ae(e6) {
  throw Error(`Error! The input value was not handled.`);
}
var je = t({ AbstractElement: () => Ge, AbstractRule: () => Ne, AbstractType: () => Fe, Action: () => zt, Alternatives: () => Vt, ArrayLiteral: () => qe, ArrayType: () => Ye, Assignment: () => Ut, BooleanLiteral: () => Ze, CharacterRange: () => Gt, Condition: () => Le, Conjunction: () => $e, CrossReference: () => qt, Disjunction: () => tt, EndOfFile: () => Yt, Grammar: () => rt, GrammarImport: () => at, Group: () => Zt, InferredType: () => st, Interface: () => lt, Keyword: () => $t, LangiumGrammarAstReflection: () => bn, LangiumGrammarTerminals: () => Me, NamedArgument: () => dt, NegatedToken: () => tn, Negation: () => pt, NumberLiteral: () => ht, Parameter: () => _t, ParameterReference: () => yt, ParserRule: () => xt, ReferenceType: () => Ct, RegexToken: () => rn, ReturnType: () => Tt, RuleCall: () => on, SimpleType: () => Dt, StringLiteral: () => kt, TerminalAlternatives: () => cn, TerminalGroup: () => un, TerminalRule: () => jt, TerminalRuleCall: () => fn, Type: () => Nt, TypeAttribute: () => Ft, TypeDefinition: () => Ve, UnionType: () => Lt, UnorderedGroup: () => mn, UntilToken: () => gn, ValueLiteral: () => Ue, Wildcard: () => vn, isAbstractElement: () => Ke, isAbstractRule: () => Pe, isAbstractType: () => Ie, isAction: () => Bt, isAlternatives: () => Ht, isArrayLiteral: () => Je, isArrayType: () => Xe, isAssignment: () => Wt, isBooleanLiteral: () => Qe, isCharacterRange: () => Kt, isCondition: () => Re, isConjunction: () => et, isCrossReference: () => Jt, isDisjunction: () => nt, isEndOfFile: () => Xt, isFeatureName: () => ze, isGrammar: () => it, isGrammarImport: () => ot, isGroup: () => Qt, isInferredType: () => ct, isInterface: () => ut, isKeyword: () => en, isNamedArgument: () => ft, isNegatedToken: () => nn, isNegation: () => mt, isNumberLiteral: () => gt, isParameter: () => vt, isParameterReference: () => bt, isParserRule: () => St, isPrimitiveType: () => Be, isReferenceType: () => wt, isRegexToken: () => an, isReturnType: () => Et, isRuleCall: () => sn, isSimpleType: () => Ot, isStringLiteral: () => At, isTerminalAlternatives: () => ln, isTerminalGroup: () => dn, isTerminalRule: () => Mt, isTerminalRuleCall: () => pn, isType: () => Pt, isTypeAttribute: () => It, isTypeDefinition: () => He, isUnionType: () => Rt, isUnorderedGroup: () => hn, isUntilToken: () => _n, isValueLiteral: () => We, isWildcard: () => yn, reflection: () => C });
const Me = { ID: /\^?[_a-zA-Z][\w_]*/, STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/, NUMBER: /NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity)/, RegexLiteral: /\/(?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+\/[a-z]*/, WS: /\s+/, ML_COMMENT: /\/\*[\s\S]*?\*\//, SL_COMMENT: /\/\/[^\n\r]*/ }, Ne = `AbstractRule`;
function Pe(e6) {
  return C.isInstance(e6, Ne);
}
const Fe = `AbstractType`;
function Ie(e6) {
  return C.isInstance(e6, Fe);
}
const Le = `Condition`;
function Re(e6) {
  return C.isInstance(e6, Le);
}
function ze(e6) {
  return Be(e6) || e6 === `current` || e6 === `entry` || e6 === `extends` || e6 === `false` || e6 === `fragment` || e6 === `grammar` || e6 === `hidden` || e6 === `import` || e6 === `interface` || e6 === `returns` || e6 === `terminal` || e6 === `true` || e6 === `type` || e6 === `infer` || e6 === `infers` || e6 === `with` || typeof e6 == `string` && /\^?[_a-zA-Z][\w_]*/.test(e6);
}
function Be(e6) {
  return e6 === `string` || e6 === `number` || e6 === `boolean` || e6 === `Date` || e6 === `bigint`;
}
const Ve = `TypeDefinition`;
function He(e6) {
  return C.isInstance(e6, Ve);
}
const Ue = `ValueLiteral`;
function We(e6) {
  return C.isInstance(e6, Ue);
}
const Ge = `AbstractElement`;
function Ke(e6) {
  return C.isInstance(e6, Ge);
}
const qe = `ArrayLiteral`;
function Je(e6) {
  return C.isInstance(e6, qe);
}
const Ye = `ArrayType`;
function Xe(e6) {
  return C.isInstance(e6, Ye);
}
const Ze = `BooleanLiteral`;
function Qe(e6) {
  return C.isInstance(e6, Ze);
}
const $e = `Conjunction`;
function et(e6) {
  return C.isInstance(e6, $e);
}
const tt = `Disjunction`;
function nt(e6) {
  return C.isInstance(e6, tt);
}
const rt = `Grammar`;
function it(e6) {
  return C.isInstance(e6, rt);
}
const at = `GrammarImport`;
function ot(e6) {
  return C.isInstance(e6, at);
}
const st = `InferredType`;
function ct(e6) {
  return C.isInstance(e6, st);
}
const lt = `Interface`;
function ut(e6) {
  return C.isInstance(e6, lt);
}
const dt = `NamedArgument`;
function ft(e6) {
  return C.isInstance(e6, dt);
}
const pt = `Negation`;
function mt(e6) {
  return C.isInstance(e6, pt);
}
const ht = `NumberLiteral`;
function gt(e6) {
  return C.isInstance(e6, ht);
}
const _t = `Parameter`;
function vt(e6) {
  return C.isInstance(e6, _t);
}
const yt = `ParameterReference`;
function bt(e6) {
  return C.isInstance(e6, yt);
}
const xt = `ParserRule`;
function St(e6) {
  return C.isInstance(e6, xt);
}
const Ct = `ReferenceType`;
function wt(e6) {
  return C.isInstance(e6, Ct);
}
const Tt = `ReturnType`;
function Et(e6) {
  return C.isInstance(e6, Tt);
}
const Dt = `SimpleType`;
function Ot(e6) {
  return C.isInstance(e6, Dt);
}
const kt = `StringLiteral`;
function At(e6) {
  return C.isInstance(e6, kt);
}
const jt = `TerminalRule`;
function Mt(e6) {
  return C.isInstance(e6, jt);
}
const Nt = `Type`;
function Pt(e6) {
  return C.isInstance(e6, Nt);
}
const Ft = `TypeAttribute`;
function It(e6) {
  return C.isInstance(e6, Ft);
}
const Lt = `UnionType`;
function Rt(e6) {
  return C.isInstance(e6, Lt);
}
const zt = `Action`;
function Bt(e6) {
  return C.isInstance(e6, zt);
}
const Vt = `Alternatives`;
function Ht(e6) {
  return C.isInstance(e6, Vt);
}
const Ut = `Assignment`;
function Wt(e6) {
  return C.isInstance(e6, Ut);
}
const Gt = `CharacterRange`;
function Kt(e6) {
  return C.isInstance(e6, Gt);
}
const qt = `CrossReference`;
function Jt(e6) {
  return C.isInstance(e6, qt);
}
const Yt = `EndOfFile`;
function Xt(e6) {
  return C.isInstance(e6, Yt);
}
const Zt = `Group`;
function Qt(e6) {
  return C.isInstance(e6, Zt);
}
const $t = `Keyword`;
function en(e6) {
  return C.isInstance(e6, $t);
}
const tn = `NegatedToken`;
function nn(e6) {
  return C.isInstance(e6, tn);
}
const rn = `RegexToken`;
function an(e6) {
  return C.isInstance(e6, rn);
}
const on = `RuleCall`;
function sn(e6) {
  return C.isInstance(e6, on);
}
const cn = `TerminalAlternatives`;
function ln(e6) {
  return C.isInstance(e6, cn);
}
const un = `TerminalGroup`;
function dn(e6) {
  return C.isInstance(e6, un);
}
const fn = `TerminalRuleCall`;
function pn(e6) {
  return C.isInstance(e6, fn);
}
const mn = `UnorderedGroup`;
function hn(e6) {
  return C.isInstance(e6, mn);
}
const gn = `UntilToken`;
function _n(e6) {
  return C.isInstance(e6, gn);
}
const vn = `Wildcard`;
function yn(e6) {
  return C.isInstance(e6, vn);
}
var bn = class extends v {
  getAllTypes() {
    return [Ge, Ne, Fe, zt, Vt, qe, Ye, Ut, Ze, Gt, Le, $e, qt, tt, Yt, rt, at, Zt, st, lt, $t, dt, tn, pt, ht, _t, yt, xt, Ct, rn, Tt, on, Dt, kt, cn, un, jt, fn, Nt, Ft, Ve, Lt, mn, gn, Ue, vn];
  }
  computeIsSubtype(e6, t2) {
    switch (e6) {
      case zt:
      case Vt:
      case Ut:
      case Gt:
      case qt:
      case Yt:
      case Zt:
      case $t:
      case tn:
      case rn:
      case on:
      case cn:
      case un:
      case fn:
      case mn:
      case gn:
      case vn:
        return this.isSubtype(Ge, t2);
      case qe:
      case ht:
      case kt:
        return this.isSubtype(Ue, t2);
      case Ye:
      case Ct:
      case Dt:
      case Lt:
        return this.isSubtype(Ve, t2);
      case Ze:
        return this.isSubtype(`Condition`, t2) || this.isSubtype(`ValueLiteral`, t2);
      case $e:
      case tt:
      case pt:
      case yt:
        return this.isSubtype(Le, t2);
      case st:
      case lt:
      case Nt:
        return this.isSubtype(Fe, t2);
      case xt:
        return this.isSubtype(`AbstractRule`, t2) || this.isSubtype(`AbstractType`, t2);
      case jt:
        return this.isSubtype(Ne, t2);
      default:
        return false;
    }
  }
  getReferenceType(e6) {
    let t2 = `${e6.container.$type}:${e6.property}`;
    switch (t2) {
      case `Action:type`:
      case `CrossReference:type`:
      case `Interface:superTypes`:
      case `ParserRule:returnType`:
      case `SimpleType:typeRef`:
        return Fe;
      case `Grammar:hiddenTokens`:
      case `ParserRule:hiddenTokens`:
      case `RuleCall:rule`:
        return Ne;
      case `Grammar:usedGrammars`:
        return rt;
      case `NamedArgument:parameter`:
      case `ParameterReference:parameter`:
        return _t;
      case `TerminalRuleCall:rule`:
        return jt;
      default:
        throw Error(`${t2} is not a valid reference id.`);
    }
  }
  getTypeMetaData(e6) {
    switch (e6) {
      case Ge:
        return { name: Ge, properties: [{ name: `cardinality` }, { name: `lookahead` }] };
      case qe:
        return { name: qe, properties: [{ name: `elements`, defaultValue: [] }] };
      case Ye:
        return { name: Ye, properties: [{ name: `elementType` }] };
      case Ze:
        return { name: Ze, properties: [{ name: `true`, defaultValue: false }] };
      case $e:
        return { name: $e, properties: [{ name: `left` }, { name: `right` }] };
      case tt:
        return { name: tt, properties: [{ name: `left` }, { name: `right` }] };
      case rt:
        return { name: rt, properties: [{ name: `definesHiddenTokens`, defaultValue: false }, { name: `hiddenTokens`, defaultValue: [] }, { name: `imports`, defaultValue: [] }, { name: `interfaces`, defaultValue: [] }, { name: `isDeclared`, defaultValue: false }, { name: `name` }, { name: `rules`, defaultValue: [] }, { name: `types`, defaultValue: [] }, { name: `usedGrammars`, defaultValue: [] }] };
      case at:
        return { name: at, properties: [{ name: `path` }] };
      case st:
        return { name: st, properties: [{ name: `name` }] };
      case lt:
        return { name: lt, properties: [{ name: `attributes`, defaultValue: [] }, { name: `name` }, { name: `superTypes`, defaultValue: [] }] };
      case dt:
        return { name: dt, properties: [{ name: `calledByName`, defaultValue: false }, { name: `parameter` }, { name: `value` }] };
      case pt:
        return { name: pt, properties: [{ name: `value` }] };
      case ht:
        return { name: ht, properties: [{ name: `value` }] };
      case _t:
        return { name: _t, properties: [{ name: `name` }] };
      case yt:
        return { name: yt, properties: [{ name: `parameter` }] };
      case xt:
        return { name: xt, properties: [{ name: `dataType` }, { name: `definesHiddenTokens`, defaultValue: false }, { name: `definition` }, { name: `entry`, defaultValue: false }, { name: `fragment`, defaultValue: false }, { name: `hiddenTokens`, defaultValue: [] }, { name: `inferredType` }, { name: `name` }, { name: `parameters`, defaultValue: [] }, { name: `returnType` }, { name: `wildcard`, defaultValue: false }] };
      case Ct:
        return { name: Ct, properties: [{ name: `referenceType` }] };
      case Tt:
        return { name: Tt, properties: [{ name: `name` }] };
      case Dt:
        return { name: Dt, properties: [{ name: `primitiveType` }, { name: `stringType` }, { name: `typeRef` }] };
      case kt:
        return { name: kt, properties: [{ name: `value` }] };
      case jt:
        return { name: jt, properties: [{ name: `definition` }, { name: `fragment`, defaultValue: false }, { name: `hidden`, defaultValue: false }, { name: `name` }, { name: `type` }] };
      case Nt:
        return { name: Nt, properties: [{ name: `name` }, { name: `type` }] };
      case Ft:
        return { name: Ft, properties: [{ name: `defaultValue` }, { name: `isOptional`, defaultValue: false }, { name: `name` }, { name: `type` }] };
      case Lt:
        return { name: Lt, properties: [{ name: `types`, defaultValue: [] }] };
      case zt:
        return { name: zt, properties: [{ name: `cardinality` }, { name: `feature` }, { name: `inferredType` }, { name: `lookahead` }, { name: `operator` }, { name: `type` }] };
      case Vt:
        return { name: Vt, properties: [{ name: `cardinality` }, { name: `elements`, defaultValue: [] }, { name: `lookahead` }] };
      case Ut:
        return { name: Ut, properties: [{ name: `cardinality` }, { name: `feature` }, { name: `lookahead` }, { name: `operator` }, { name: `terminal` }] };
      case Gt:
        return { name: Gt, properties: [{ name: `cardinality` }, { name: `left` }, { name: `lookahead` }, { name: `right` }] };
      case qt:
        return { name: qt, properties: [{ name: `cardinality` }, { name: `deprecatedSyntax`, defaultValue: false }, { name: `lookahead` }, { name: `terminal` }, { name: `type` }] };
      case Yt:
        return { name: Yt, properties: [{ name: `cardinality` }, { name: `lookahead` }] };
      case Zt:
        return { name: Zt, properties: [{ name: `cardinality` }, { name: `elements`, defaultValue: [] }, { name: `guardCondition` }, { name: `lookahead` }] };
      case $t:
        return { name: $t, properties: [{ name: `cardinality` }, { name: `lookahead` }, { name: `value` }] };
      case tn:
        return { name: tn, properties: [{ name: `cardinality` }, { name: `lookahead` }, { name: `terminal` }] };
      case rn:
        return { name: rn, properties: [{ name: `cardinality` }, { name: `lookahead` }, { name: `regex` }] };
      case on:
        return { name: on, properties: [{ name: `arguments`, defaultValue: [] }, { name: `cardinality` }, { name: `lookahead` }, { name: `rule` }] };
      case cn:
        return { name: cn, properties: [{ name: `cardinality` }, { name: `elements`, defaultValue: [] }, { name: `lookahead` }] };
      case un:
        return { name: un, properties: [{ name: `cardinality` }, { name: `elements`, defaultValue: [] }, { name: `lookahead` }] };
      case fn:
        return { name: fn, properties: [{ name: `cardinality` }, { name: `lookahead` }, { name: `rule` }] };
      case mn:
        return { name: mn, properties: [{ name: `cardinality` }, { name: `elements`, defaultValue: [] }, { name: `lookahead` }] };
      case gn:
        return { name: gn, properties: [{ name: `cardinality` }, { name: `lookahead` }, { name: `terminal` }] };
      case vn:
        return { name: vn, properties: [{ name: `cardinality` }, { name: `lookahead` }] };
      default:
        return { name: e6, properties: [] };
    }
  }
};
const C = new bn();
var xn = t({ assignMandatoryProperties: () => Nn, copyAstNode: () => Fn, findLocalReferences: () => Mn, findRootNode: () => En, getContainerOfType: () => Cn, getDocument: () => Tn, hasContainerOfType: () => wn, linkContentToContainer: () => Sn, streamAllContents: () => On, streamAst: () => kn, streamContents: () => Dn, streamReferences: () => jn });
function Sn(e6) {
  for (let [t2, n2] of Object.entries(e6)) t2.startsWith(`$`) || (Array.isArray(n2) ? n2.forEach((n3, r2) => {
    m(n3) && (n3.$container = e6, n3.$containerProperty = t2, n3.$containerIndex = r2);
  }) : m(n2) && (n2.$container = e6, n2.$containerProperty = t2));
}
function Cn(e6, t2) {
  let n2 = e6;
  for (; n2; ) {
    if (t2(n2)) return n2;
    n2 = n2.$container;
  }
}
function wn(e6, t2) {
  let n2 = e6;
  for (; n2; ) {
    if (t2(n2)) return true;
    n2 = n2.$container;
  }
  return false;
}
function Tn(e6) {
  let t2 = En(e6).$document;
  if (!t2) throw Error(`AST node has no document.`);
  return t2;
}
function En(e6) {
  for (; e6.$container; ) e6 = e6.$container;
  return e6;
}
function Dn(e6, t2) {
  if (!e6) throw Error(`Node must be an AstNode.`);
  let n2 = t2 == null ? void 0 : t2.range;
  return new b(() => ({ keys: Object.keys(e6), keyIndex: 0, arrayIndex: 0 }), (t3) => {
    for (; t3.keyIndex < t3.keys.length; ) {
      let r2 = t3.keys[t3.keyIndex];
      if (!r2.startsWith(`$`)) {
        let i2 = e6[r2];
        if (m(i2)) {
          if (t3.keyIndex++, An(i2, n2)) return { done: false, value: i2 };
        } else if (Array.isArray(i2)) {
          for (; t3.arrayIndex < i2.length; ) {
            let e7 = i2[t3.arrayIndex++];
            if (m(e7) && An(e7, n2)) return { done: false, value: e7 };
          }
          t3.arrayIndex = 0;
        }
      }
      t3.keyIndex++;
    }
    return x;
  });
}
function On(e6, t2) {
  if (!e6) throw Error(`Root node must be an AstNode.`);
  return new ae(e6, (e7) => Dn(e7, t2));
}
function kn(e6, t2) {
  if (e6) {
    if ((t2 == null ? void 0 : t2.range) && !An(e6, t2.range)) return new ae(e6, () => []);
  } else throw Error(`Root node must be an AstNode.`);
  return new ae(e6, (e7) => Dn(e7, t2), { includeRoot: true });
}
function An(e6, t2) {
  var _a3;
  if (!t2) return true;
  let n2 = (_a3 = e6.$cstNode) == null ? void 0 : _a3.range;
  return n2 ? he(n2, t2) : false;
}
function jn(e6) {
  return new b(() => ({ keys: Object.keys(e6), keyIndex: 0, arrayIndex: 0 }), (t2) => {
    for (; t2.keyIndex < t2.keys.length; ) {
      let n2 = t2.keys[t2.keyIndex];
      if (!n2.startsWith(`$`)) {
        let r2 = e6[n2];
        if (h(r2)) return t2.keyIndex++, { done: false, value: { reference: r2, container: e6, property: n2 } };
        if (Array.isArray(r2)) {
          for (; t2.arrayIndex < r2.length; ) {
            let i2 = t2.arrayIndex++, a2 = r2[i2];
            if (h(a2)) return { done: false, value: { reference: a2, container: e6, property: n2, index: i2 } };
          }
          t2.arrayIndex = 0;
        }
      }
      t2.keyIndex++;
    }
    return x;
  });
}
function Mn(e6, t2 = Tn(e6).parseResult.value) {
  let n2 = [];
  return kn(t2).forEach((t3) => {
    jn(t3).forEach((t4) => {
      t4.reference.ref === e6 && n2.push(t4.reference);
    });
  }), S(n2);
}
function Nn(e6, t2) {
  let n2 = e6.getTypeMetaData(t2.$type), r2 = t2;
  for (let e7 of n2.properties) e7.defaultValue !== void 0 && r2[e7.name] === void 0 && (r2[e7.name] = Pn(e7.defaultValue));
}
function Pn(e6) {
  return Array.isArray(e6) ? [...e6.map(Pn)] : e6;
}
function Fn(e6, t2) {
  let n2 = { $type: e6.$type };
  for (let [r2, i2] of Object.entries(e6)) if (!r2.startsWith(`$`)) if (m(i2)) n2[r2] = Fn(i2, t2);
  else if (h(i2)) n2[r2] = t2(n2, r2, i2.$refNode, i2.$refText);
  else if (Array.isArray(i2)) {
    let e7 = [];
    for (let a2 of i2) m(a2) ? e7.push(Fn(a2, t2)) : h(a2) ? e7.push(t2(n2, r2, a2.$refNode, a2.$refText)) : e7.push(a2);
    n2[r2] = e7;
  } else n2[r2] = i2;
  return Sn(n2), n2;
}
function w(e6) {
  return e6.charCodeAt(0);
}
function In(e6, t2) {
  Array.isArray(e6) ? e6.forEach(function(e7) {
    t2.push(e7);
  }) : t2.push(e6);
}
function Ln(e6, t2) {
  if (e6[t2] === true) throw `duplicate flag ` + t2;
  e6[t2], e6[t2] = true;
}
function Rn(e6) {
  if (e6 === void 0) throw Error(`Internal Error - Should never get here!`);
  return true;
}
function zn() {
  throw Error(`Internal Error - Should never get here!`);
}
function Bn(e6) {
  return e6.type === `Character`;
}
const Vn = [];
for (let e6 = w(`0`); e6 <= w(`9`); e6++) Vn.push(e6);
const Hn = [w(`_`)].concat(Vn);
for (let e6 = w(`a`); e6 <= w(`z`); e6++) Hn.push(e6);
for (let e6 = w(`A`); e6 <= w(`Z`); e6++) Hn.push(e6);
const Un = [w(` `), w(`\f`), w(`
`), w(`\r`), w(`	`), w(`\v`), w(`	`), w(`\xA0`), w(`\u1680`), w(`\u2000`), w(`\u2001`), w(`\u2002`), w(`\u2003`), w(`\u2004`), w(`\u2005`), w(`\u2006`), w(`\u2007`), w(`\u2008`), w(`\u2009`), w(`\u200A`), w(`\u2028`), w(`\u2029`), w(`\u202F`), w(`\u205F`), w(`\u3000`), w(`\uFEFF`)];
var Wn = /[0-9a-fA-F]/, Gn = /[0-9]/, Kn = /[1-9]/, qn = class {
  constructor() {
    this.idx = 0, this.input = ``, this.groupIdx = 0;
  }
  saveState() {
    return { idx: this.idx, input: this.input, groupIdx: this.groupIdx };
  }
  restoreState(e6) {
    this.idx = e6.idx, this.input = e6.input, this.groupIdx = e6.groupIdx;
  }
  pattern(e6) {
    this.idx = 0, this.input = e6, this.groupIdx = 0, this.consumeChar(`/`);
    let t2 = this.disjunction();
    this.consumeChar(`/`);
    let n2 = { type: `Flags`, loc: { begin: this.idx, end: e6.length }, global: false, ignoreCase: false, multiLine: false, unicode: false, sticky: false };
    for (; this.isRegExpFlag(); ) switch (this.popChar()) {
      case `g`:
        Ln(n2, `global`);
        break;
      case `i`:
        Ln(n2, `ignoreCase`);
        break;
      case `m`:
        Ln(n2, `multiLine`);
        break;
      case `u`:
        Ln(n2, `unicode`);
        break;
      case `y`:
        Ln(n2, `sticky`);
        break;
    }
    if (this.idx !== this.input.length) throw Error(`Redundant input: ` + this.input.substring(this.idx));
    return { type: `Pattern`, flags: n2, value: t2, loc: this.loc(0) };
  }
  disjunction() {
    let e6 = [], t2 = this.idx;
    for (e6.push(this.alternative()); this.peekChar() === `|`; ) this.consumeChar(`|`), e6.push(this.alternative());
    return { type: `Disjunction`, value: e6, loc: this.loc(t2) };
  }
  alternative() {
    let e6 = [], t2 = this.idx;
    for (; this.isTerm(); ) e6.push(this.term());
    return { type: `Alternative`, value: e6, loc: this.loc(t2) };
  }
  term() {
    return this.isAssertion() ? this.assertion() : this.atom();
  }
  assertion() {
    let e6 = this.idx;
    switch (this.popChar()) {
      case `^`:
        return { type: `StartAnchor`, loc: this.loc(e6) };
      case `$`:
        return { type: `EndAnchor`, loc: this.loc(e6) };
      case `\\`:
        switch (this.popChar()) {
          case `b`:
            return { type: `WordBoundary`, loc: this.loc(e6) };
          case `B`:
            return { type: `NonWordBoundary`, loc: this.loc(e6) };
        }
        throw Error(`Invalid Assertion Escape`);
      case `(`:
        this.consumeChar(`?`);
        let t2;
        switch (this.popChar()) {
          case `=`:
            t2 = `Lookahead`;
            break;
          case `!`:
            t2 = `NegativeLookahead`;
            break;
        }
        Rn(t2);
        let n2 = this.disjunction();
        return this.consumeChar(`)`), { type: t2, value: n2, loc: this.loc(e6) };
    }
    return zn();
  }
  quantifier(e6 = false) {
    let t2, n2 = this.idx;
    switch (this.popChar()) {
      case `*`:
        t2 = { atLeast: 0, atMost: 1 / 0 };
        break;
      case `+`:
        t2 = { atLeast: 1, atMost: 1 / 0 };
        break;
      case `?`:
        t2 = { atLeast: 0, atMost: 1 };
        break;
      case `{`:
        let n3 = this.integerIncludingZero();
        switch (this.popChar()) {
          case `}`:
            t2 = { atLeast: n3, atMost: n3 };
            break;
          case `,`:
            let e7;
            this.isDigit() ? (e7 = this.integerIncludingZero(), t2 = { atLeast: n3, atMost: e7 }) : t2 = { atLeast: n3, atMost: 1 / 0 }, this.consumeChar(`}`);
            break;
        }
        if (e6 === true && t2 === void 0) return;
        Rn(t2);
        break;
    }
    if (!(e6 === true && t2 === void 0) && Rn(t2)) return this.peekChar(0) === `?` ? (this.consumeChar(`?`), t2.greedy = false) : t2.greedy = true, t2.type = `Quantifier`, t2.loc = this.loc(n2), t2;
  }
  atom() {
    let e6, t2 = this.idx;
    switch (this.peekChar()) {
      case `.`:
        e6 = this.dotAll();
        break;
      case `\\`:
        e6 = this.atomEscape();
        break;
      case `[`:
        e6 = this.characterClass();
        break;
      case `(`:
        e6 = this.group();
        break;
    }
    return e6 === void 0 && this.isPatternCharacter() && (e6 = this.patternCharacter()), Rn(e6) ? (e6.loc = this.loc(t2), this.isQuantifier() && (e6.quantifier = this.quantifier()), e6) : zn();
  }
  dotAll() {
    return this.consumeChar(`.`), { type: `Set`, complement: true, value: [w(`
`), w(`\r`), w(`\u2028`), w(`\u2029`)] };
  }
  atomEscape() {
    switch (this.consumeChar(`\\`), this.peekChar()) {
      case `1`:
      case `2`:
      case `3`:
      case `4`:
      case `5`:
      case `6`:
      case `7`:
      case `8`:
      case `9`:
        return this.decimalEscapeAtom();
      case `d`:
      case `D`:
      case `s`:
      case `S`:
      case `w`:
      case `W`:
        return this.characterClassEscape();
      case `f`:
      case `n`:
      case `r`:
      case `t`:
      case `v`:
        return this.controlEscapeAtom();
      case `c`:
        return this.controlLetterEscapeAtom();
      case `0`:
        return this.nulCharacterAtom();
      case `x`:
        return this.hexEscapeSequenceAtom();
      case `u`:
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  decimalEscapeAtom() {
    return { type: `GroupBackReference`, value: this.positiveInteger() };
  }
  characterClassEscape() {
    let e6, t2 = false;
    switch (this.popChar()) {
      case `d`:
        e6 = Vn;
        break;
      case `D`:
        e6 = Vn, t2 = true;
        break;
      case `s`:
        e6 = Un;
        break;
      case `S`:
        e6 = Un, t2 = true;
        break;
      case `w`:
        e6 = Hn;
        break;
      case `W`:
        e6 = Hn, t2 = true;
        break;
    }
    return Rn(e6) ? { type: `Set`, value: e6, complement: t2 } : zn();
  }
  controlEscapeAtom() {
    let e6;
    switch (this.popChar()) {
      case `f`:
        e6 = w(`\f`);
        break;
      case `n`:
        e6 = w(`
`);
        break;
      case `r`:
        e6 = w(`\r`);
        break;
      case `t`:
        e6 = w(`	`);
        break;
      case `v`:
        e6 = w(`\v`);
        break;
    }
    return Rn(e6) ? { type: `Character`, value: e6 } : zn();
  }
  controlLetterEscapeAtom() {
    this.consumeChar(`c`);
    let e6 = this.popChar();
    if (/[a-zA-Z]/.test(e6) === false) throw Error(`Invalid `);
    return { type: `Character`, value: e6.toUpperCase().charCodeAt(0) - 64 };
  }
  nulCharacterAtom() {
    return this.consumeChar(`0`), { type: `Character`, value: w(`\0`) };
  }
  hexEscapeSequenceAtom() {
    return this.consumeChar(`x`), this.parseHexDigits(2);
  }
  regExpUnicodeEscapeSequenceAtom() {
    return this.consumeChar(`u`), this.parseHexDigits(4);
  }
  identityEscapeAtom() {
    return { type: `Character`, value: w(this.popChar()) };
  }
  classPatternCharacterAtom() {
    switch (this.peekChar()) {
      case `
`:
      case `\r`:
      case `\u2028`:
      case `\u2029`:
      case `\\`:
      case `]`:
        throw Error(`TBD`);
      default:
        return { type: `Character`, value: w(this.popChar()) };
    }
  }
  characterClass() {
    let e6 = [], t2 = false;
    for (this.consumeChar(`[`), this.peekChar(0) === `^` && (this.consumeChar(`^`), t2 = true); this.isClassAtom(); ) {
      let t3 = this.classAtom();
      if (t3.type, Bn(t3) && this.isRangeDash()) {
        this.consumeChar(`-`);
        let n2 = this.classAtom();
        if (n2.type, Bn(n2)) {
          if (n2.value < t3.value) throw Error(`Range out of order in character class`);
          e6.push({ from: t3.value, to: n2.value });
        } else In(t3.value, e6), e6.push(w(`-`)), In(n2.value, e6);
      } else In(t3.value, e6);
    }
    return this.consumeChar(`]`), { type: `Set`, complement: t2, value: e6 };
  }
  classAtom() {
    switch (this.peekChar()) {
      case `]`:
      case `
`:
      case `\r`:
      case `\u2028`:
      case `\u2029`:
        throw Error(`TBD`);
      case `\\`:
        return this.classEscape();
      default:
        return this.classPatternCharacterAtom();
    }
  }
  classEscape() {
    switch (this.consumeChar(`\\`), this.peekChar()) {
      case `b`:
        return this.consumeChar(`b`), { type: `Character`, value: w(`\b`) };
      case `d`:
      case `D`:
      case `s`:
      case `S`:
      case `w`:
      case `W`:
        return this.characterClassEscape();
      case `f`:
      case `n`:
      case `r`:
      case `t`:
      case `v`:
        return this.controlEscapeAtom();
      case `c`:
        return this.controlLetterEscapeAtom();
      case `0`:
        return this.nulCharacterAtom();
      case `x`:
        return this.hexEscapeSequenceAtom();
      case `u`:
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  group() {
    let e6 = true;
    switch (this.consumeChar(`(`), this.peekChar(0)) {
      case `?`:
        this.consumeChar(`?`), this.consumeChar(`:`), e6 = false;
        break;
      default:
        this.groupIdx++;
        break;
    }
    let t2 = this.disjunction();
    this.consumeChar(`)`);
    let n2 = { type: `Group`, capturing: e6, value: t2 };
    return e6 && (n2.idx = this.groupIdx), n2;
  }
  positiveInteger() {
    let e6 = this.popChar();
    if (Kn.test(e6) === false) throw Error(`Expecting a positive integer`);
    for (; Gn.test(this.peekChar(0)); ) e6 += this.popChar();
    return parseInt(e6, 10);
  }
  integerIncludingZero() {
    let e6 = this.popChar();
    if (Gn.test(e6) === false) throw Error(`Expecting an integer`);
    for (; Gn.test(this.peekChar(0)); ) e6 += this.popChar();
    return parseInt(e6, 10);
  }
  patternCharacter() {
    let e6 = this.popChar();
    switch (e6) {
      case `
`:
      case `\r`:
      case `\u2028`:
      case `\u2029`:
      case `^`:
      case `$`:
      case `\\`:
      case `.`:
      case `*`:
      case `+`:
      case `?`:
      case `(`:
      case `)`:
      case `[`:
      case `|`:
        throw Error(`TBD`);
      default:
        return { type: `Character`, value: w(e6) };
    }
  }
  isRegExpFlag() {
    switch (this.peekChar(0)) {
      case `g`:
      case `i`:
      case `m`:
      case `u`:
      case `y`:
        return true;
      default:
        return false;
    }
  }
  isRangeDash() {
    return this.peekChar() === `-` && this.isClassAtom(1);
  }
  isDigit() {
    return Gn.test(this.peekChar(0));
  }
  isClassAtom(e6 = 0) {
    switch (this.peekChar(e6)) {
      case `]`:
      case `
`:
      case `\r`:
      case `\u2028`:
      case `\u2029`:
        return false;
      default:
        return true;
    }
  }
  isTerm() {
    return this.isAtom() || this.isAssertion();
  }
  isAtom() {
    if (this.isPatternCharacter()) return true;
    switch (this.peekChar(0)) {
      case `.`:
      case `\\`:
      case `[`:
      case `(`:
        return true;
      default:
        return false;
    }
  }
  isAssertion() {
    switch (this.peekChar(0)) {
      case `^`:
      case `$`:
        return true;
      case `\\`:
        switch (this.peekChar(1)) {
          case `b`:
          case `B`:
            return true;
          default:
            return false;
        }
      case `(`:
        return this.peekChar(1) === `?` && (this.peekChar(2) === `=` || this.peekChar(2) === `!`);
      default:
        return false;
    }
  }
  isQuantifier() {
    let e6 = this.saveState();
    try {
      return this.quantifier(true) !== void 0;
    } catch {
      return false;
    } finally {
      this.restoreState(e6);
    }
  }
  isPatternCharacter() {
    switch (this.peekChar()) {
      case `^`:
      case `$`:
      case `\\`:
      case `.`:
      case `*`:
      case `+`:
      case `?`:
      case `(`:
      case `)`:
      case `[`:
      case `|`:
      case `/`:
      case `
`:
      case `\r`:
      case `\u2028`:
      case `\u2029`:
        return false;
      default:
        return true;
    }
  }
  parseHexDigits(e6) {
    let t2 = ``;
    for (let n2 = 0; n2 < e6; n2++) {
      let e7 = this.popChar();
      if (Wn.test(e7) === false) throw Error(`Expecting a HexDecimal digits`);
      t2 += e7;
    }
    return { type: `Character`, value: parseInt(t2, 16) };
  }
  peekChar(e6 = 0) {
    return this.input[this.idx + e6];
  }
  popChar() {
    let e6 = this.peekChar(0);
    return this.consumeChar(void 0), e6;
  }
  consumeChar(e6) {
    if (e6 !== void 0 && this.input[this.idx] !== e6) throw Error(`Expected: '` + e6 + `' but found: '` + this.input[this.idx] + `' at offset: ` + this.idx);
    if (this.idx >= this.input.length) throw Error(`Unexpected end of input`);
    this.idx++;
  }
  loc(e6) {
    return { begin: e6, end: this.idx };
  }
}, Jn = class {
  visitChildren(e6) {
    for (let t2 in e6) {
      let n2 = e6[t2];
      e6.hasOwnProperty(t2) && (n2.type === void 0 ? Array.isArray(n2) && n2.forEach((e7) => {
        this.visit(e7);
      }, this) : this.visit(n2));
    }
  }
  visit(e6) {
    switch (e6.type) {
      case `Pattern`:
        this.visitPattern(e6);
        break;
      case `Flags`:
        this.visitFlags(e6);
        break;
      case `Disjunction`:
        this.visitDisjunction(e6);
        break;
      case `Alternative`:
        this.visitAlternative(e6);
        break;
      case `StartAnchor`:
        this.visitStartAnchor(e6);
        break;
      case `EndAnchor`:
        this.visitEndAnchor(e6);
        break;
      case `WordBoundary`:
        this.visitWordBoundary(e6);
        break;
      case `NonWordBoundary`:
        this.visitNonWordBoundary(e6);
        break;
      case `Lookahead`:
        this.visitLookahead(e6);
        break;
      case `NegativeLookahead`:
        this.visitNegativeLookahead(e6);
        break;
      case `Character`:
        this.visitCharacter(e6);
        break;
      case `Set`:
        this.visitSet(e6);
        break;
      case `Group`:
        this.visitGroup(e6);
        break;
      case `GroupBackReference`:
        this.visitGroupBackReference(e6);
        break;
      case `Quantifier`:
        this.visitQuantifier(e6);
        break;
    }
    this.visitChildren(e6);
  }
  visitPattern(e6) {
  }
  visitFlags(e6) {
  }
  visitDisjunction(e6) {
  }
  visitAlternative(e6) {
  }
  visitStartAnchor(e6) {
  }
  visitEndAnchor(e6) {
  }
  visitWordBoundary(e6) {
  }
  visitNonWordBoundary(e6) {
  }
  visitLookahead(e6) {
  }
  visitNegativeLookahead(e6) {
  }
  visitCharacter(e6) {
  }
  visitSet(e6) {
  }
  visitGroup(e6) {
  }
  visitGroupBackReference(e6) {
  }
  visitQuantifier(e6) {
  }
}, Yn = t({ NEWLINE_REGEXP: () => Xn, escapeRegExp: () => rr, getCaseInsensitivePattern: () => ir, getTerminalParts: () => $n, isMultilineComment: () => er, isWhitespace: () => nr, partialMatches: () => ar, partialRegExp: () => or, whitespaceCharacters: () => tr });
const Xn = /\r?\n/gm;
var Zn = new qn(), Qn = new class extends Jn {
  constructor() {
    super(...arguments), this.isStarting = true, this.endRegexpStack = [], this.multiline = false;
  }
  get endRegex() {
    return this.endRegexpStack.join(``);
  }
  reset(e6) {
    this.multiline = false, this.regex = e6, this.startRegexp = ``, this.isStarting = true, this.endRegexpStack = [];
  }
  visitGroup(e6) {
    e6.quantifier && (this.isStarting = false, this.endRegexpStack = []);
  }
  visitCharacter(e6) {
    let t2 = String.fromCharCode(e6.value);
    if (!this.multiline && t2 === `
` && (this.multiline = true), e6.quantifier) this.isStarting = false, this.endRegexpStack = [];
    else {
      let e7 = rr(t2);
      this.endRegexpStack.push(e7), this.isStarting && (this.startRegexp += e7);
    }
  }
  visitSet(e6) {
    if (!this.multiline) {
      let t2 = this.regex.substring(e6.loc.begin, e6.loc.end), n2 = new RegExp(t2);
      this.multiline = !!`
`.match(n2);
    }
    if (e6.quantifier) this.isStarting = false, this.endRegexpStack = [];
    else {
      let t2 = this.regex.substring(e6.loc.begin, e6.loc.end);
      this.endRegexpStack.push(t2), this.isStarting && (this.startRegexp += t2);
    }
  }
  visitChildren(e6) {
    e6.type === `Group` && e6.quantifier || super.visitChildren(e6);
  }
}();
function $n(e6) {
  try {
    typeof e6 != `string` && (e6 = e6.source), e6 = `/${e6}/`;
    let t2 = Zn.pattern(e6), n2 = [];
    for (let r2 of t2.value.value) Qn.reset(e6), Qn.visit(r2), n2.push({ start: Qn.startRegexp, end: Qn.endRegex });
    return n2;
  } catch {
    return [];
  }
}
function er(e6) {
  try {
    return typeof e6 == `string` && (e6 = new RegExp(e6)), e6 = e6.toString(), Qn.reset(e6), Qn.visit(Zn.pattern(e6)), Qn.multiline;
  } catch {
    return false;
  }
}
const tr = `\f
\r	\v \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`.split(``);
function nr(e6) {
  let t2 = typeof e6 == `string` ? new RegExp(e6) : e6;
  return tr.some((e7) => t2.test(e7));
}
function rr(e6) {
  return e6.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
}
function ir(e6) {
  return Array.prototype.map.call(e6, (e7) => /\w/.test(e7) ? `[${e7.toLowerCase()}${e7.toUpperCase()}]` : rr(e7)).join(``);
}
function ar(e6, t2) {
  let n2 = or(e6), r2 = t2.match(n2);
  return !!r2 && r2[0].length > 0;
}
function or(e6) {
  typeof e6 == `string` && (e6 = new RegExp(e6));
  let t2 = e6, n2 = e6.source, r2 = 0;
  function i2() {
    let e7 = ``, a2;
    function o2(t3) {
      e7 += n2.substr(r2, t3), r2 += t3;
    }
    function s2(t3) {
      e7 += `(?:` + n2.substr(r2, t3) + `|$)`, r2 += t3;
    }
    for (; r2 < n2.length; ) switch (n2[r2]) {
      case `\\`:
        switch (n2[r2 + 1]) {
          case `c`:
            s2(3);
            break;
          case `x`:
            s2(4);
            break;
          case `u`:
            t2.unicode ? n2[r2 + 2] === `{` ? s2(n2.indexOf(`}`, r2) - r2 + 1) : s2(6) : s2(2);
            break;
          case `p`:
          case `P`:
            t2.unicode ? s2(n2.indexOf(`}`, r2) - r2 + 1) : s2(2);
            break;
          case `k`:
            s2(n2.indexOf(`>`, r2) - r2 + 1);
            break;
          default:
            s2(2);
            break;
        }
        break;
      case `[`:
        a2 = /\[(?:\\.|.)*?\]/g, a2.lastIndex = r2, a2 = a2.exec(n2) || [], s2(a2[0].length);
        break;
      case `|`:
      case `^`:
      case `$`:
      case `*`:
      case `+`:
      case `?`:
        o2(1);
        break;
      case `{`:
        a2 = /\{\d+,?\d*\}/g, a2.lastIndex = r2, a2 = a2.exec(n2), a2 ? o2(a2[0].length) : s2(1);
        break;
      case `(`:
        if (n2[r2 + 1] === `?`) switch (n2[r2 + 2]) {
          case `:`:
            e7 += `(?:`, r2 += 3, e7 += i2() + `|$)`;
            break;
          case `=`:
            e7 += `(?=`, r2 += 3, e7 += i2() + `)`;
            break;
          case `!`:
            a2 = r2, r2 += 3, i2(), e7 += n2.substr(a2, r2 - a2);
            break;
          case `<`:
            switch (n2[r2 + 3]) {
              case `=`:
              case `!`:
                a2 = r2, r2 += 4, i2(), e7 += n2.substr(a2, r2 - a2);
                break;
              default:
                o2(n2.indexOf(`>`, r2) - r2 + 1), e7 += i2() + `|$)`;
                break;
            }
            break;
        }
        else o2(1), e7 += i2() + `|$)`;
        break;
      case `)`:
        return ++r2, e7;
      default:
        s2(1);
        break;
    }
    return e7;
  }
  return new RegExp(i2(), e6.flags);
}
var sr = t({ findAssignment: () => br, findNameAssignment: () => xr, findNodeForKeyword: () => vr, findNodeForProperty: () => hr, findNodesForKeyword: () => _r, findNodesForKeywordInternal: () => yr, findNodesForProperty: () => mr, getActionAtElement: () => Cr, getActionType: () => Nr, getAllReachableRules: () => ur, getCrossReferenceTerminal: () => fr, getEntryRule: () => cr, getExplicitRuleType: () => jr, getHiddenRules: () => lr, getRuleType: () => Fr, getRuleTypeName: () => Pr, getTypeName: () => Mr, isArrayCardinality: () => Tr, isArrayOperator: () => Er, isCommentTerminal: () => pr, isDataType: () => kr, isDataTypeRule: () => Dr, isOptionalCardinality: () => wr, terminalRegex: () => Ir });
function cr(e6) {
  return e6.rules.find((e7) => St(e7) && e7.entry);
}
function lr(e6) {
  return e6.rules.filter((e7) => Mt(e7) && e7.hidden);
}
function ur(e6, t2) {
  let n2 = /* @__PURE__ */ new Set(), r2 = cr(e6);
  if (!r2) return new Set(e6.rules);
  let i2 = [r2].concat(lr(e6));
  for (let e7 of i2) dr(e7, n2, t2);
  let a2 = /* @__PURE__ */ new Set();
  for (let t3 of e6.rules) (n2.has(t3.name) || Mt(t3) && t3.hidden) && a2.add(t3);
  return a2;
}
function dr(e6, t2, n2) {
  t2.add(e6.name), On(e6).forEach((e7) => {
    if (sn(e7) || n2 && pn(e7)) {
      let r2 = e7.rule.ref;
      r2 && !t2.has(r2.name) && dr(r2, t2, n2);
    }
  });
}
function fr(e6) {
  var _a3;
  if (e6.terminal) return e6.terminal;
  if (e6.type.ref) return (_a3 = xr(e6.type.ref)) == null ? void 0 : _a3.terminal;
}
function pr(e6) {
  return e6.hidden && !nr(Ir(e6));
}
function mr(e6, t2) {
  return !e6 || !t2 ? [] : gr(e6, t2, e6.astNode, true);
}
function hr(e6, t2, n2) {
  if (!e6 || !t2) return;
  let r2 = gr(e6, t2, e6.astNode, true);
  if (r2.length !== 0) return n2 = n2 === void 0 ? 0 : Math.max(0, Math.min(n2, r2.length - 1)), r2[n2];
}
function gr(e6, t2, n2, r2) {
  if (!r2) {
    let n3 = Cn(e6.grammarSource, Wt);
    if (n3 && n3.feature === t2) return [e6];
  }
  return y(e6) && e6.astNode === n2 ? e6.content.flatMap((e7) => gr(e7, t2, n2, false)) : [];
}
function _r(e6, t2) {
  return e6 ? yr(e6, t2, e6 == null ? void 0 : e6.astNode) : [];
}
function vr(e6, t2, n2) {
  if (!e6) return;
  let r2 = yr(e6, t2, e6 == null ? void 0 : e6.astNode);
  if (r2.length !== 0) return n2 = n2 === void 0 ? 0 : Math.max(0, Math.min(n2, r2.length - 1)), r2[n2];
}
function yr(e6, t2, n2) {
  if (e6.astNode !== n2) return [];
  if (en(e6.grammarSource) && e6.grammarSource.value === t2) return [e6];
  let r2 = ce(e6).iterator(), i2, a2 = [];
  do
    if (i2 = r2.next(), !i2.done) {
      let e7 = i2.value;
      e7.astNode === n2 ? en(e7.grammarSource) && e7.grammarSource.value === t2 && a2.push(e7) : r2.prune();
    }
  while (!i2.done);
  return a2;
}
function br(e6) {
  var _a3;
  let t2 = e6.astNode;
  for (; t2 === ((_a3 = e6.container) == null ? void 0 : _a3.astNode); ) {
    let t3 = Cn(e6.grammarSource, Wt);
    if (t3) return t3;
    e6 = e6.container;
  }
}
function xr(e6) {
  let t2 = e6;
  return ct(t2) && (Bt(t2.$container) ? t2 = t2.$container.$container : St(t2.$container) ? t2 = t2.$container : Ae(t2.$container)), Sr(e6, t2, /* @__PURE__ */ new Map());
}
function Sr(e6, t2, n2) {
  var _a3;
  function r2(t3, r3) {
    let i2;
    return Cn(t3, Wt) || (i2 = Sr(r3, r3, n2)), n2.set(e6, i2), i2;
  }
  if (n2.has(e6)) return n2.get(e6);
  n2.set(e6, void 0);
  for (let i2 of On(t2)) if (Wt(i2) && i2.feature.toLowerCase() === `name`) return n2.set(e6, i2), i2;
  else if (sn(i2) && St(i2.rule.ref)) return r2(i2, i2.rule.ref);
  else if (Ot(i2) && ((_a3 = i2.typeRef) == null ? void 0 : _a3.ref)) return r2(i2, i2.typeRef.ref);
}
function Cr(e6) {
  let t2 = e6.$container;
  if (Qt(t2)) {
    let n2 = t2.elements, r2 = n2.indexOf(e6);
    for (let e7 = r2 - 1; e7 >= 0; e7--) {
      let t3 = n2[e7];
      if (Bt(t3)) return t3;
      {
        let t4 = On(n2[e7]).find(Bt);
        if (t4) return t4;
      }
    }
  }
  if (Ke(t2)) return Cr(t2);
}
function wr(e6, t2) {
  return e6 === `?` || e6 === `*` || Qt(t2) && !!t2.guardCondition;
}
function Tr(e6) {
  return e6 === `*` || e6 === `+`;
}
function Er(e6) {
  return e6 === `+=`;
}
function Dr(e6) {
  return Or(e6, /* @__PURE__ */ new Set());
}
function Or(e6, t2) {
  if (t2.has(e6)) return true;
  t2.add(e6);
  for (let n2 of On(e6)) if (sn(n2)) {
    if (!n2.rule.ref || St(n2.rule.ref) && !Or(n2.rule.ref, t2)) return false;
  } else if (Wt(n2)) return false;
  else if (Bt(n2)) return false;
  return !!e6.definition;
}
function kr(e6) {
  return Ar(e6.type, /* @__PURE__ */ new Set());
}
function Ar(e6, t2) {
  if (t2.has(e6)) return true;
  if (t2.add(e6), Xe(e6) || wt(e6)) return false;
  if (Rt(e6)) return e6.types.every((e7) => Ar(e7, t2));
  if (Ot(e6)) {
    if (e6.primitiveType !== void 0 || e6.stringType !== void 0) return true;
    if (e6.typeRef !== void 0) {
      let n2 = e6.typeRef.ref;
      return Pt(n2) ? Ar(n2.type, t2) : false;
    } else return false;
  } else return false;
}
function jr(e6) {
  if (e6.inferredType) return e6.inferredType.name;
  if (e6.dataType) return e6.dataType;
  if (e6.returnType) {
    let t2 = e6.returnType.ref;
    if (t2 && (St(t2) || ut(t2) || Pt(t2))) return t2.name;
  }
}
function Mr(e6) {
  if (St(e6)) return Dr(e6) ? e6.name : jr(e6) ?? e6.name;
  if (ut(e6) || Pt(e6) || Et(e6)) return e6.name;
  if (Bt(e6)) {
    let t2 = Nr(e6);
    if (t2) return t2;
  } else if (ct(e6)) return e6.name;
  throw Error(`Cannot get name of Unknown Type`);
}
function Nr(e6) {
  var _a3;
  if (e6.inferredType) return e6.inferredType.name;
  if ((_a3 = e6.type) == null ? void 0 : _a3.ref) return Mr(e6.type.ref);
}
function Pr(e6) {
  var _a3;
  return Mt(e6) ? ((_a3 = e6.type) == null ? void 0 : _a3.name) ?? `string` : Dr(e6) ? e6.name : jr(e6) ?? e6.name;
}
function Fr(e6) {
  var _a3;
  return Mt(e6) ? ((_a3 = e6.type) == null ? void 0 : _a3.name) ?? `string` : jr(e6) ?? e6.name;
}
function Ir(e6) {
  let t2 = { s: false, i: false, u: false }, n2 = Rr(e6.definition, t2), r2 = Object.entries(t2).filter(([, e7]) => e7).map(([e7]) => e7).join(``);
  return new RegExp(n2, r2);
}
var Lr = `[\\s\\S]`;
function Rr(e6, t2) {
  if (ln(e6)) return zr(e6);
  if (dn(e6)) return Br(e6);
  if (Kt(e6)) return Ur(e6);
  if (pn(e6)) {
    let t3 = e6.rule.ref;
    if (!t3) throw Error(`Missing rule reference.`);
    return Gr(Rr(t3.definition), { cardinality: e6.cardinality, lookahead: e6.lookahead });
  } else if (nn(e6)) return Hr(e6);
  else if (_n(e6)) return Vr(e6);
  else if (an(e6)) {
    let n2 = e6.regex.lastIndexOf(`/`), r2 = e6.regex.substring(1, n2), i2 = e6.regex.substring(n2 + 1);
    return t2 && (t2.i = i2.includes(`i`), t2.s = i2.includes(`s`), t2.u = i2.includes(`u`)), Gr(r2, { cardinality: e6.cardinality, lookahead: e6.lookahead, wrap: false });
  } else if (yn(e6)) return Gr(Lr, { cardinality: e6.cardinality, lookahead: e6.lookahead });
  else throw Error(`Invalid terminal element: ${e6 == null ? void 0 : e6.$type}`);
}
function zr(e6) {
  return Gr(e6.elements.map((e7) => Rr(e7)).join(`|`), { cardinality: e6.cardinality, lookahead: e6.lookahead });
}
function Br(e6) {
  return Gr(e6.elements.map((e7) => Rr(e7)).join(``), { cardinality: e6.cardinality, lookahead: e6.lookahead });
}
function Vr(e6) {
  return Gr(`${Lr}*?${Rr(e6.terminal)}`, { cardinality: e6.cardinality, lookahead: e6.lookahead });
}
function Hr(e6) {
  return Gr(`(?!${Rr(e6.terminal)})${Lr}*?`, { cardinality: e6.cardinality, lookahead: e6.lookahead });
}
function Ur(e6) {
  return e6.right ? Gr(`[${Wr(e6.left)}-${Wr(e6.right)}]`, { cardinality: e6.cardinality, lookahead: e6.lookahead, wrap: false }) : Gr(Wr(e6.left), { cardinality: e6.cardinality, lookahead: e6.lookahead, wrap: false });
}
function Wr(e6) {
  return rr(e6.value);
}
function Gr(e6, t2) {
  return (t2.wrap !== false || t2.lookahead) && (e6 = `(${t2.lookahead ?? ``}${e6})`), t2.cardinality ? `${e6}${t2.cardinality}` : e6;
}
function Kr(e6) {
  let t2 = [], n2 = e6.Grammar;
  for (let e7 of n2.rules) Mt(e7) && pr(e7) && er(Ir(e7)) && t2.push(e7.name);
  return { multilineCommentRules: t2, nameRegexp: ge };
}
var qr = typeof global == `object` && global && global.Object === Object && global, Jr = typeof self == `object` && self && self.Object === Object && self, Yr = qr || Jr || Function(`return this`)(), Xr = Yr.Symbol, Zr = Object.prototype, Qr = Zr.hasOwnProperty, $r = Zr.toString, ei = Xr ? Xr.toStringTag : void 0;
function ti(e6) {
  var t2 = Qr.call(e6, ei), n2 = e6[ei];
  try {
    e6[ei] = void 0;
    var r2 = true;
  } catch {
  }
  var i2 = $r.call(e6);
  return r2 && (t2 ? e6[ei] = n2 : delete e6[ei]), i2;
}
var ni = ti, ri = Object.prototype.toString;
function ii(e6) {
  return ri.call(e6);
}
var ai = ii, oi = `[object Null]`, si = `[object Undefined]`, ci = Xr ? Xr.toStringTag : void 0;
function li(e6) {
  return e6 == null ? e6 === void 0 ? si : oi : ci && ci in Object(e6) ? ni(e6) : ai(e6);
}
var ui = li;
function di(e6) {
  return typeof e6 == `object` && !!e6;
}
var fi = di, pi = `[object Symbol]`;
function mi(e6) {
  return typeof e6 == `symbol` || fi(e6) && ui(e6) == pi;
}
var hi = mi;
function gi(e6, t2) {
  for (var n2 = -1, r2 = e6 == null ? 0 : e6.length, i2 = Array(r2); ++n2 < r2; ) i2[n2] = t2(e6[n2], n2, e6);
  return i2;
}
var _i = gi, T = Array.isArray, vi = 1 / 0, yi = Xr ? Xr.prototype : void 0, bi = yi ? yi.toString : void 0;
function xi(e6) {
  if (typeof e6 == `string`) return e6;
  if (T(e6)) return _i(e6, xi) + ``;
  if (hi(e6)) return bi ? bi.call(e6) : ``;
  var t2 = e6 + ``;
  return t2 == `0` && 1 / e6 == -vi ? `-0` : t2;
}
var Si = xi, Ci = /\s/;
function wi(e6) {
  for (var t2 = e6.length; t2-- && Ci.test(e6.charAt(t2)); ) ;
  return t2;
}
var Ti = wi, Ei = /^\s+/;
function Di(e6) {
  return e6 && e6.slice(0, Ti(e6) + 1).replace(Ei, ``);
}
var Oi = Di;
function ki(e6) {
  var t2 = typeof e6;
  return e6 != null && (t2 == `object` || t2 == `function`);
}
var Ai = ki, ji = NaN, Mi = /^[-+]0x[0-9a-f]+$/i, Ni = /^0b[01]+$/i, Pi = /^0o[0-7]+$/i, Fi = parseInt;
function Ii(e6) {
  if (typeof e6 == `number`) return e6;
  if (hi(e6)) return ji;
  if (Ai(e6)) {
    var t2 = typeof e6.valueOf == `function` ? e6.valueOf() : e6;
    e6 = Ai(t2) ? t2 + `` : t2;
  }
  if (typeof e6 != `string`) return e6 === 0 ? e6 : +e6;
  e6 = Oi(e6);
  var n2 = Ni.test(e6);
  return n2 || Pi.test(e6) ? Fi(e6.slice(2), n2 ? 2 : 8) : Mi.test(e6) ? ji : +e6;
}
var Li = Ii, Ri = 1 / 0, zi = 17976931348623157e292;
function Bi(e6) {
  return e6 ? (e6 = Li(e6), e6 === Ri || e6 === -Ri ? (e6 < 0 ? -1 : 1) * zi : e6 === e6 ? e6 : 0) : e6 === 0 ? e6 : 0;
}
var Vi = Bi;
function Hi(e6) {
  var t2 = Vi(e6), n2 = t2 % 1;
  return t2 === t2 ? n2 ? t2 - n2 : t2 : 0;
}
var Ui = Hi;
function Wi(e6) {
  return e6;
}
var Gi = Wi, Ki = `[object AsyncFunction]`, qi = `[object Function]`, Ji = `[object GeneratorFunction]`, Yi = `[object Proxy]`;
function Xi(e6) {
  if (!Ai(e6)) return false;
  var t2 = ui(e6);
  return t2 == qi || t2 == Ji || t2 == Ki || t2 == Yi;
}
var Zi = Xi, Qi = Yr[`__core-js_shared__`], $i = (function() {
  var e6 = /[^.]+$/.exec(Qi && Qi.keys && Qi.keys.IE_PROTO || ``);
  return e6 ? `Symbol(src)_1.` + e6 : ``;
})();
function ea(e6) {
  return !!$i && $i in e6;
}
var ta = ea, na = Function.prototype.toString;
function ra(e6) {
  if (e6 != null) {
    try {
      return na.call(e6);
    } catch {
    }
    try {
      return e6 + ``;
    } catch {
    }
  }
  return ``;
}
var ia = ra, aa = /[\\^$.*+?()[\]{}|]/g, oa = /^\[object .+?Constructor\]$/, sa = Function.prototype, ca = Object.prototype, la = sa.toString, ua = ca.hasOwnProperty, da = RegExp(`^` + la.call(ua).replace(aa, `\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, `$1.*?`) + `$`);
function fa(e6) {
  return !Ai(e6) || ta(e6) ? false : (Zi(e6) ? da : oa).test(ia(e6));
}
var pa = fa;
function ma(e6, t2) {
  return e6 == null ? void 0 : e6[t2];
}
var ha = ma;
function ga(e6, t2) {
  var n2 = ha(e6, t2);
  return pa(n2) ? n2 : void 0;
}
var _a = ga, va = _a(Yr, `WeakMap`), ya = Object.create, ba = /* @__PURE__ */ (function() {
  function e6() {
  }
  return function(t2) {
    if (!Ai(t2)) return {};
    if (ya) return ya(t2);
    e6.prototype = t2;
    var n2 = new e6();
    return e6.prototype = void 0, n2;
  };
})();
function xa(e6, t2, n2) {
  switch (n2.length) {
    case 0:
      return e6.call(t2);
    case 1:
      return e6.call(t2, n2[0]);
    case 2:
      return e6.call(t2, n2[0], n2[1]);
    case 3:
      return e6.call(t2, n2[0], n2[1], n2[2]);
  }
  return e6.apply(t2, n2);
}
var Sa = xa;
function Ca() {
}
var E = Ca;
function wa(e6, t2) {
  var n2 = -1, r2 = e6.length;
  for (t2 || (t2 = Array(r2)); ++n2 < r2; ) t2[n2] = e6[n2];
  return t2;
}
var Ta = wa, Ea = 800, Da = 16, Oa = Date.now;
function ka(e6) {
  var t2 = 0, n2 = 0;
  return function() {
    var r2 = Oa(), i2 = Da - (r2 - n2);
    if (n2 = r2, i2 > 0) {
      if (++t2 >= Ea) return arguments[0];
    } else t2 = 0;
    return e6.apply(void 0, arguments);
  };
}
var Aa = ka;
function ja(e6) {
  return function() {
    return e6;
  };
}
var Ma = ja, Na = (function() {
  try {
    var e6 = _a(Object, `defineProperty`);
    return e6({}, ``, {}), e6;
  } catch {
  }
})(), Pa = Aa(Na ? function(e6, t2) {
  return Na(e6, `toString`, { configurable: true, enumerable: false, value: Ma(t2), writable: true });
} : Gi);
function Fa(e6, t2) {
  for (var n2 = -1, r2 = e6 == null ? 0 : e6.length; ++n2 < r2 && t2(e6[n2], n2, e6) !== false; ) ;
  return e6;
}
var Ia = Fa;
function La(e6, t2, n2, r2) {
  for (var i2 = e6.length, a2 = n2 + (r2 ? 1 : -1); r2 ? a2-- : ++a2 < i2; ) if (t2(e6[a2], a2, e6)) return a2;
  return -1;
}
var Ra = La;
function za(e6) {
  return e6 !== e6;
}
var Ba = za;
function Va(e6, t2, n2) {
  for (var r2 = n2 - 1, i2 = e6.length; ++r2 < i2; ) if (e6[r2] === t2) return r2;
  return -1;
}
var Ha = Va;
function Ua(e6, t2, n2) {
  return t2 === t2 ? Ha(e6, t2, n2) : Ra(e6, Ba, n2);
}
var Wa = Ua;
function Ga(e6, t2) {
  return !!(e6 != null && e6.length) && Wa(e6, t2, 0) > -1;
}
var Ka = Ga, qa = 9007199254740991, Ja = /^(?:0|[1-9]\d*)$/;
function Ya(e6, t2) {
  var n2 = typeof e6;
  return t2 ?? (t2 = qa), !!t2 && (n2 == `number` || n2 != `symbol` && Ja.test(e6)) && e6 > -1 && e6 % 1 == 0 && e6 < t2;
}
var Xa = Ya;
function Za(e6, t2, n2) {
  t2 == `__proto__` && Na ? Na(e6, t2, { configurable: true, enumerable: true, value: n2, writable: true }) : e6[t2] = n2;
}
var Qa = Za;
function $a(e6, t2) {
  return e6 === t2 || e6 !== e6 && t2 !== t2;
}
var eo = $a, to = Object.prototype.hasOwnProperty;
function no(e6, t2, n2) {
  var r2 = e6[t2];
  (!(to.call(e6, t2) && eo(r2, n2)) || n2 === void 0 && !(t2 in e6)) && Qa(e6, t2, n2);
}
var ro = no;
function io(e6, t2, n2, r2) {
  var i2 = !n2;
  n2 || (n2 = {});
  for (var a2 = -1, o2 = t2.length; ++a2 < o2; ) {
    var s2 = t2[a2], c2 = r2 ? r2(n2[s2], e6[s2], s2, n2, e6) : void 0;
    c2 === void 0 && (c2 = e6[s2]), i2 ? Qa(n2, s2, c2) : ro(n2, s2, c2);
  }
  return n2;
}
var ao = io, oo = Math.max;
function so(e6, t2, n2) {
  return t2 = oo(t2 === void 0 ? e6.length - 1 : t2, 0), function() {
    for (var r2 = arguments, i2 = -1, a2 = oo(r2.length - t2, 0), o2 = Array(a2); ++i2 < a2; ) o2[i2] = r2[t2 + i2];
    i2 = -1;
    for (var s2 = Array(t2 + 1); ++i2 < t2; ) s2[i2] = r2[i2];
    return s2[t2] = n2(o2), Sa(e6, this, s2);
  };
}
var co = so;
function lo(e6, t2) {
  return Pa(co(e6, t2, Gi), e6 + ``);
}
var uo = lo, fo = 9007199254740991;
function po(e6) {
  return typeof e6 == `number` && e6 > -1 && e6 % 1 == 0 && e6 <= fo;
}
var mo = po;
function ho(e6) {
  return e6 != null && mo(e6.length) && !Zi(e6);
}
var go = ho;
function _o(e6, t2, n2) {
  if (!Ai(n2)) return false;
  var r2 = typeof t2;
  return (r2 == `number` ? go(n2) && Xa(t2, n2.length) : r2 == `string` && t2 in n2) ? eo(n2[t2], e6) : false;
}
var vo = _o;
function yo(e6) {
  return uo(function(t2, n2) {
    var r2 = -1, i2 = n2.length, a2 = i2 > 1 ? n2[i2 - 1] : void 0, o2 = i2 > 2 ? n2[2] : void 0;
    for (a2 = e6.length > 3 && typeof a2 == `function` ? (i2--, a2) : void 0, o2 && vo(n2[0], n2[1], o2) && (a2 = i2 < 3 ? void 0 : a2, i2 = 1), t2 = Object(t2); ++r2 < i2; ) {
      var s2 = n2[r2];
      s2 && e6(t2, s2, r2, a2);
    }
    return t2;
  });
}
var bo = yo, xo = Object.prototype;
function So(e6) {
  var t2 = e6 && e6.constructor;
  return e6 === (typeof t2 == `function` && t2.prototype || xo);
}
var Co = So;
function wo(e6, t2) {
  for (var n2 = -1, r2 = Array(e6); ++n2 < e6; ) r2[n2] = t2(n2);
  return r2;
}
var To = wo, Eo = `[object Arguments]`;
function Do(e6) {
  return fi(e6) && ui(e6) == Eo;
}
var Oo = Do, ko = Object.prototype, Ao = ko.hasOwnProperty, jo = ko.propertyIsEnumerable, Mo = Oo(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Oo : function(e6) {
  return fi(e6) && Ao.call(e6, `callee`) && !jo.call(e6, `callee`);
};
function No() {
  return false;
}
var Po = No, Fo = typeof exports == `object` && exports && !exports.nodeType && exports, Io = Fo && typeof module == `object` && module && !module.nodeType && module, Lo = Io && Io.exports === Fo ? Yr.Buffer : void 0, Ro = (Lo ? Lo.isBuffer : void 0) || Po, zo = `[object Arguments]`, Bo = `[object Array]`, Vo = `[object Boolean]`, Ho = `[object Date]`, Uo = `[object Error]`, Wo = `[object Function]`, Go = `[object Map]`, Ko = `[object Number]`, qo = `[object Object]`, Jo = `[object RegExp]`, Yo = `[object Set]`, Xo = `[object String]`, Zo = `[object WeakMap]`, Qo = `[object ArrayBuffer]`, $o = `[object DataView]`, es = `[object Float32Array]`, ts = `[object Float64Array]`, ns = `[object Int8Array]`, rs = `[object Int16Array]`, is = `[object Int32Array]`, as = `[object Uint8Array]`, os = `[object Uint8ClampedArray]`, ss = `[object Uint16Array]`, cs = `[object Uint32Array]`, D = {};
D[es] = D[ts] = D[ns] = D[rs] = D[is] = D[as] = D[os] = D[ss] = D[cs] = true, D[zo] = D[Bo] = D[Qo] = D[Vo] = D[$o] = D[Ho] = D[Uo] = D[Wo] = D[Go] = D[Ko] = D[qo] = D[Jo] = D[Yo] = D[Xo] = D[Zo] = false;
function ls(e6) {
  return fi(e6) && mo(e6.length) && !!D[ui(e6)];
}
var us = ls;
function ds(e6) {
  return function(t2) {
    return e6(t2);
  };
}
var fs = ds, ps = typeof exports == `object` && exports && !exports.nodeType && exports, ms = ps && typeof module == `object` && module && !module.nodeType && module, hs = ms && ms.exports === ps && qr.process, gs = (function() {
  try {
    return ms && ms.require && ms.require(`util`).types || hs && hs.binding && hs.binding(`util`);
  } catch {
  }
})(), _s = gs && gs.isTypedArray, vs = _s ? fs(_s) : us, ys = Object.prototype.hasOwnProperty;
function bs(e6, t2) {
  var n2 = T(e6), r2 = !n2 && Mo(e6), i2 = !n2 && !r2 && Ro(e6), a2 = !n2 && !r2 && !i2 && vs(e6), o2 = n2 || r2 || i2 || a2, s2 = o2 ? To(e6.length, String) : [], c2 = s2.length;
  for (var l2 in e6) (t2 || ys.call(e6, l2)) && !(o2 && (l2 == `length` || i2 && (l2 == `offset` || l2 == `parent`) || a2 && (l2 == `buffer` || l2 == `byteLength` || l2 == `byteOffset`) || Xa(l2, c2))) && s2.push(l2);
  return s2;
}
var xs = bs;
function Ss(e6, t2) {
  return function(n2) {
    return e6(t2(n2));
  };
}
var Cs = Ss, ws = Cs(Object.keys, Object), Ts = Object.prototype.hasOwnProperty;
function Es(e6) {
  if (!Co(e6)) return ws(e6);
  var t2 = [];
  for (var n2 in Object(e6)) Ts.call(e6, n2) && n2 != `constructor` && t2.push(n2);
  return t2;
}
var Ds = Es;
function Os(e6) {
  return go(e6) ? xs(e6) : Ds(e6);
}
var ks = Os, As = Object.prototype.hasOwnProperty, js = bo(function(e6, t2) {
  if (Co(t2) || go(t2)) {
    ao(t2, ks(t2), e6);
    return;
  }
  for (var n2 in t2) As.call(t2, n2) && ro(e6, n2, t2[n2]);
});
function Ms(e6) {
  var t2 = [];
  if (e6 != null) for (var n2 in Object(e6)) t2.push(n2);
  return t2;
}
var Ns = Ms, Ps = Object.prototype.hasOwnProperty;
function Fs(e6) {
  if (!Ai(e6)) return Ns(e6);
  var t2 = Co(e6), n2 = [];
  for (var r2 in e6) r2 == `constructor` && (t2 || !Ps.call(e6, r2)) || n2.push(r2);
  return n2;
}
var Is = Fs;
function Ls(e6) {
  return go(e6) ? xs(e6, true) : Is(e6);
}
var Rs = Ls, zs = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Bs = /^\w*$/;
function Vs(e6, t2) {
  if (T(e6)) return false;
  var n2 = typeof e6;
  return n2 == `number` || n2 == `symbol` || n2 == `boolean` || e6 == null || hi(e6) ? true : Bs.test(e6) || !zs.test(e6) || t2 != null && e6 in Object(t2);
}
var Hs = Vs, Us = _a(Object, `create`);
function Ws() {
  this.__data__ = Us ? Us(null) : {}, this.size = 0;
}
var Gs = Ws;
function Ks(e6) {
  var t2 = this.has(e6) && delete this.__data__[e6];
  return this.size -= t2 ? 1 : 0, t2;
}
var qs = Ks, Js = `__lodash_hash_undefined__`, Ys = Object.prototype.hasOwnProperty;
function Xs(e6) {
  var t2 = this.__data__;
  if (Us) {
    var n2 = t2[e6];
    return n2 === Js ? void 0 : n2;
  }
  return Ys.call(t2, e6) ? t2[e6] : void 0;
}
var Zs = Xs, Qs = Object.prototype.hasOwnProperty;
function $s(e6) {
  var t2 = this.__data__;
  return Us ? t2[e6] !== void 0 : Qs.call(t2, e6);
}
var ec = $s, tc = `__lodash_hash_undefined__`;
function nc(e6, t2) {
  var n2 = this.__data__;
  return this.size += this.has(e6) ? 0 : 1, n2[e6] = Us && t2 === void 0 ? tc : t2, this;
}
var rc = nc;
function ic(e6) {
  var t2 = -1, n2 = e6 == null ? 0 : e6.length;
  for (this.clear(); ++t2 < n2; ) {
    var r2 = e6[t2];
    this.set(r2[0], r2[1]);
  }
}
ic.prototype.clear = Gs, ic.prototype.delete = qs, ic.prototype.get = Zs, ic.prototype.has = ec, ic.prototype.set = rc;
var ac = ic;
function oc() {
  this.__data__ = [], this.size = 0;
}
var sc = oc;
function cc(e6, t2) {
  for (var n2 = e6.length; n2--; ) if (eo(e6[n2][0], t2)) return n2;
  return -1;
}
var lc = cc, uc = Array.prototype.splice;
function dc(e6) {
  var t2 = this.__data__, n2 = lc(t2, e6);
  return n2 < 0 ? false : (n2 == t2.length - 1 ? t2.pop() : uc.call(t2, n2, 1), --this.size, true);
}
var fc = dc;
function pc(e6) {
  var t2 = this.__data__, n2 = lc(t2, e6);
  return n2 < 0 ? void 0 : t2[n2][1];
}
var mc = pc;
function hc(e6) {
  return lc(this.__data__, e6) > -1;
}
var gc = hc;
function _c(e6, t2) {
  var n2 = this.__data__, r2 = lc(n2, e6);
  return r2 < 0 ? (++this.size, n2.push([e6, t2])) : n2[r2][1] = t2, this;
}
var vc = _c;
function yc(e6) {
  var t2 = -1, n2 = e6 == null ? 0 : e6.length;
  for (this.clear(); ++t2 < n2; ) {
    var r2 = e6[t2];
    this.set(r2[0], r2[1]);
  }
}
yc.prototype.clear = sc, yc.prototype.delete = fc, yc.prototype.get = mc, yc.prototype.has = gc, yc.prototype.set = vc;
var bc = yc, xc = _a(Yr, `Map`);
function Sc() {
  this.size = 0, this.__data__ = { hash: new ac(), map: new (xc || bc)(), string: new ac() };
}
var Cc = Sc;
function wc(e6) {
  var t2 = typeof e6;
  return t2 == `string` || t2 == `number` || t2 == `symbol` || t2 == `boolean` ? e6 !== `__proto__` : e6 === null;
}
var Tc = wc;
function Ec(e6, t2) {
  var n2 = e6.__data__;
  return Tc(t2) ? n2[typeof t2 == `string` ? `string` : `hash`] : n2.map;
}
var Dc = Ec;
function Oc(e6) {
  var t2 = Dc(this, e6).delete(e6);
  return this.size -= t2 ? 1 : 0, t2;
}
var kc = Oc;
function Ac(e6) {
  return Dc(this, e6).get(e6);
}
var jc = Ac;
function Mc(e6) {
  return Dc(this, e6).has(e6);
}
var Nc = Mc;
function Pc(e6, t2) {
  var n2 = Dc(this, e6), r2 = n2.size;
  return n2.set(e6, t2), this.size += n2.size == r2 ? 0 : 1, this;
}
var Fc = Pc;
function Ic(e6) {
  var t2 = -1, n2 = e6 == null ? 0 : e6.length;
  for (this.clear(); ++t2 < n2; ) {
    var r2 = e6[t2];
    this.set(r2[0], r2[1]);
  }
}
Ic.prototype.clear = Cc, Ic.prototype.delete = kc, Ic.prototype.get = jc, Ic.prototype.has = Nc, Ic.prototype.set = Fc;
var Lc = Ic, Rc = `Expected a function`;
function zc(e6, t2) {
  if (typeof e6 != `function` || t2 != null && typeof t2 != `function`) throw TypeError(Rc);
  var n2 = function() {
    var r2 = arguments, i2 = t2 ? t2.apply(this, r2) : r2[0], a2 = n2.cache;
    if (a2.has(i2)) return a2.get(i2);
    var o2 = e6.apply(this, r2);
    return n2.cache = a2.set(i2, o2) || a2, o2;
  };
  return n2.cache = new (zc.Cache || Lc)(), n2;
}
zc.Cache = Lc;
var Bc = zc, Vc = 500;
function Hc(e6) {
  var t2 = Bc(e6, function(e7) {
    return n2.size === Vc && n2.clear(), e7;
  }), n2 = t2.cache;
  return t2;
}
var Uc = Hc, Wc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Gc = /\\(\\)?/g, Kc = Uc(function(e6) {
  var t2 = [];
  return e6.charCodeAt(0) === 46 && t2.push(``), e6.replace(Wc, function(e7, n2, r2, i2) {
    t2.push(r2 ? i2.replace(Gc, `$1`) : n2 || e7);
  }), t2;
});
function qc(e6) {
  return e6 == null ? `` : Si(e6);
}
var Jc = qc;
function Yc(e6, t2) {
  return T(e6) ? e6 : Hs(e6, t2) ? [e6] : Kc(Jc(e6));
}
var Xc = Yc, Zc = 1 / 0;
function Qc(e6) {
  if (typeof e6 == `string` || hi(e6)) return e6;
  var t2 = e6 + ``;
  return t2 == `0` && 1 / e6 == -Zc ? `-0` : t2;
}
var $c = Qc;
function el(e6, t2) {
  t2 = Xc(t2, e6);
  for (var n2 = 0, r2 = t2.length; e6 != null && n2 < r2; ) e6 = e6[$c(t2[n2++])];
  return n2 && n2 == r2 ? e6 : void 0;
}
var tl = el;
function nl(e6, t2, n2) {
  var r2 = e6 == null ? void 0 : tl(e6, t2);
  return r2 === void 0 ? n2 : r2;
}
var rl = nl;
function il(e6, t2) {
  for (var n2 = -1, r2 = t2.length, i2 = e6.length; ++n2 < r2; ) e6[i2 + n2] = t2[n2];
  return e6;
}
var al = il, ol = Xr ? Xr.isConcatSpreadable : void 0;
function sl(e6) {
  return T(e6) || Mo(e6) || !!(ol && e6 && e6[ol]);
}
var cl = sl;
function ll(e6, t2, n2, r2, i2) {
  var a2 = -1, o2 = e6.length;
  for (n2 || (n2 = cl), i2 || (i2 = []); ++a2 < o2; ) {
    var s2 = e6[a2];
    t2 > 0 && n2(s2) ? t2 > 1 ? ll(s2, t2 - 1, n2, r2, i2) : al(i2, s2) : r2 || (i2[i2.length] = s2);
  }
  return i2;
}
var ul = ll;
function dl(e6) {
  return e6 != null && e6.length ? ul(e6, 1) : [];
}
var fl = dl, pl = Cs(Object.getPrototypeOf, Object);
function ml(e6, t2, n2) {
  var r2 = -1, i2 = e6.length;
  t2 < 0 && (t2 = -t2 > i2 ? 0 : i2 + t2), n2 = n2 > i2 ? i2 : n2, n2 < 0 && (n2 += i2), i2 = t2 > n2 ? 0 : n2 - t2 >>> 0, t2 >>>= 0;
  for (var a2 = Array(i2); ++r2 < i2; ) a2[r2] = e6[r2 + t2];
  return a2;
}
var hl = ml;
function gl(e6, t2, n2, r2) {
  var i2 = -1, a2 = e6 == null ? 0 : e6.length;
  for (r2 && a2 && (n2 = e6[++i2]); ++i2 < a2; ) n2 = t2(n2, e6[i2], i2, e6);
  return n2;
}
var _l = gl;
function vl() {
  this.__data__ = new bc(), this.size = 0;
}
var yl = vl;
function bl(e6) {
  var t2 = this.__data__, n2 = t2.delete(e6);
  return this.size = t2.size, n2;
}
var xl = bl;
function Sl(e6) {
  return this.__data__.get(e6);
}
var Cl = Sl;
function wl(e6) {
  return this.__data__.has(e6);
}
var Tl = wl, El = 200;
function Dl(e6, t2) {
  var n2 = this.__data__;
  if (n2 instanceof bc) {
    var r2 = n2.__data__;
    if (!xc || r2.length < El - 1) return r2.push([e6, t2]), this.size = ++n2.size, this;
    n2 = this.__data__ = new Lc(r2);
  }
  return n2.set(e6, t2), this.size = n2.size, this;
}
var Ol = Dl;
function kl(e6) {
  this.size = (this.__data__ = new bc(e6)).size;
}
kl.prototype.clear = yl, kl.prototype.delete = xl, kl.prototype.get = Cl, kl.prototype.has = Tl, kl.prototype.set = Ol;
var Al = kl;
function jl(e6, t2) {
  return e6 && ao(t2, ks(t2), e6);
}
var Ml = jl;
function Nl(e6, t2) {
  return e6 && ao(t2, Rs(t2), e6);
}
var Pl = Nl, Fl = typeof exports == `object` && exports && !exports.nodeType && exports, Il = Fl && typeof module == `object` && module && !module.nodeType && module, Ll = Il && Il.exports === Fl ? Yr.Buffer : void 0, Rl = Ll ? Ll.allocUnsafe : void 0;
function zl(e6, t2) {
  if (t2) return e6.slice();
  var n2 = e6.length, r2 = Rl ? Rl(n2) : new e6.constructor(n2);
  return e6.copy(r2), r2;
}
var Bl = zl;
function Vl(e6, t2) {
  for (var n2 = -1, r2 = e6 == null ? 0 : e6.length, i2 = 0, a2 = []; ++n2 < r2; ) {
    var o2 = e6[n2];
    t2(o2, n2, e6) && (a2[i2++] = o2);
  }
  return a2;
}
var Hl = Vl;
function Ul() {
  return [];
}
var Wl = Ul, Gl = Object.prototype.propertyIsEnumerable, Kl = Object.getOwnPropertySymbols, ql = Kl ? function(e6) {
  return e6 == null ? [] : (e6 = Object(e6), Hl(Kl(e6), function(t2) {
    return Gl.call(e6, t2);
  }));
} : Wl;
function Jl(e6, t2) {
  return ao(e6, ql(e6), t2);
}
var Yl = Jl, Xl = Object.getOwnPropertySymbols ? function(e6) {
  for (var t2 = []; e6; ) al(t2, ql(e6)), e6 = pl(e6);
  return t2;
} : Wl;
function Zl(e6, t2) {
  return ao(e6, Xl(e6), t2);
}
var Ql = Zl;
function $l(e6, t2, n2) {
  var r2 = t2(e6);
  return T(e6) ? r2 : al(r2, n2(e6));
}
var eu = $l;
function tu(e6) {
  return eu(e6, ks, ql);
}
var nu = tu;
function ru(e6) {
  return eu(e6, Rs, Xl);
}
var iu = ru, au = _a(Yr, `DataView`), ou = _a(Yr, `Promise`), su = _a(Yr, `Set`), cu = `[object Map]`, lu = `[object Object]`, uu = `[object Promise]`, du = `[object Set]`, fu = `[object WeakMap]`, pu = `[object DataView]`, mu = ia(au), hu = ia(xc), gu = ia(ou), _u = ia(su), vu = ia(va), yu = ui;
(au && yu(new au(new ArrayBuffer(1))) != pu || xc && yu(new xc()) != cu || ou && yu(ou.resolve()) != uu || su && yu(new su()) != du || va && yu(new va()) != fu) && (yu = function(e6) {
  var t2 = ui(e6), n2 = t2 == lu ? e6.constructor : void 0, r2 = n2 ? ia(n2) : ``;
  if (r2) switch (r2) {
    case mu:
      return pu;
    case hu:
      return cu;
    case gu:
      return uu;
    case _u:
      return du;
    case vu:
      return fu;
  }
  return t2;
});
var bu = yu, xu = Object.prototype.hasOwnProperty;
function Su(e6) {
  var t2 = e6.length, n2 = new e6.constructor(t2);
  return t2 && typeof e6[0] == `string` && xu.call(e6, `index`) && (n2.index = e6.index, n2.input = e6.input), n2;
}
var Cu = Su, wu = Yr.Uint8Array;
function Tu(e6) {
  var t2 = new e6.constructor(e6.byteLength);
  return new wu(t2).set(new wu(e6)), t2;
}
var Eu = Tu;
function Du(e6, t2) {
  var n2 = t2 ? Eu(e6.buffer) : e6.buffer;
  return new e6.constructor(n2, e6.byteOffset, e6.byteLength);
}
var Ou = Du, ku = /\w*$/;
function Au(e6) {
  var t2 = new e6.constructor(e6.source, ku.exec(e6));
  return t2.lastIndex = e6.lastIndex, t2;
}
var ju = Au, Mu = Xr ? Xr.prototype : void 0, Nu = Mu ? Mu.valueOf : void 0;
function Pu(e6) {
  return Nu ? Object(Nu.call(e6)) : {};
}
var Fu = Pu;
function Iu(e6, t2) {
  var n2 = t2 ? Eu(e6.buffer) : e6.buffer;
  return new e6.constructor(n2, e6.byteOffset, e6.length);
}
var Lu = Iu, Ru = `[object Boolean]`, zu = `[object Date]`, Bu = `[object Map]`, Vu = `[object Number]`, Hu = `[object RegExp]`, Uu = `[object Set]`, Wu = `[object String]`, Gu = `[object Symbol]`, Ku = `[object ArrayBuffer]`, qu = `[object DataView]`, Ju = `[object Float32Array]`, Yu = `[object Float64Array]`, Xu = `[object Int8Array]`, Zu = `[object Int16Array]`, Qu = `[object Int32Array]`, $u = `[object Uint8Array]`, ed = `[object Uint8ClampedArray]`, td = `[object Uint16Array]`, nd = `[object Uint32Array]`;
function rd(e6, t2, n2) {
  var r2 = e6.constructor;
  switch (t2) {
    case Ku:
      return Eu(e6);
    case Ru:
    case zu:
      return new r2(+e6);
    case qu:
      return Ou(e6, n2);
    case Ju:
    case Yu:
    case Xu:
    case Zu:
    case Qu:
    case $u:
    case ed:
    case td:
    case nd:
      return Lu(e6, n2);
    case Bu:
      return new r2();
    case Vu:
    case Wu:
      return new r2(e6);
    case Hu:
      return ju(e6);
    case Uu:
      return new r2();
    case Gu:
      return Fu(e6);
  }
}
var id = rd;
function ad(e6) {
  return typeof e6.constructor == `function` && !Co(e6) ? ba(pl(e6)) : {};
}
var od = ad, sd = `[object Map]`;
function cd(e6) {
  return fi(e6) && bu(e6) == sd;
}
var ld = cd, ud = gs && gs.isMap, dd = ud ? fs(ud) : ld, fd = `[object Set]`;
function pd(e6) {
  return fi(e6) && bu(e6) == fd;
}
var md = pd, hd = gs && gs.isSet, gd = hd ? fs(hd) : md, _d = 1, vd = 2, yd = 4, bd = `[object Arguments]`, xd = `[object Array]`, Sd = `[object Boolean]`, Cd = `[object Date]`, wd = `[object Error]`, Td = `[object Function]`, Ed = `[object GeneratorFunction]`, Dd = `[object Map]`, Od = `[object Number]`, kd = `[object Object]`, Ad = `[object RegExp]`, jd = `[object Set]`, Md = `[object String]`, Nd = `[object Symbol]`, Pd = `[object WeakMap]`, Fd = `[object ArrayBuffer]`, Id = `[object DataView]`, Ld = `[object Float32Array]`, Rd = `[object Float64Array]`, zd = `[object Int8Array]`, Bd = `[object Int16Array]`, Vd = `[object Int32Array]`, Hd = `[object Uint8Array]`, Ud = `[object Uint8ClampedArray]`, Wd = `[object Uint16Array]`, Gd = `[object Uint32Array]`, O = {};
O[bd] = O[xd] = O[Fd] = O[Id] = O[Sd] = O[Cd] = O[Ld] = O[Rd] = O[zd] = O[Bd] = O[Vd] = O[Dd] = O[Od] = O[kd] = O[Ad] = O[jd] = O[Md] = O[Nd] = O[Hd] = O[Ud] = O[Wd] = O[Gd] = true, O[wd] = O[Td] = O[Pd] = false;
function Kd(e6, t2, n2, r2, i2, a2) {
  var o2, s2 = t2 & _d, c2 = t2 & vd, l2 = t2 & yd;
  if (n2 && (o2 = i2 ? n2(e6, r2, i2, a2) : n2(e6)), o2 !== void 0) return o2;
  if (!Ai(e6)) return e6;
  var u2 = T(e6);
  if (u2) {
    if (o2 = Cu(e6), !s2) return Ta(e6, o2);
  } else {
    var d2 = bu(e6), f2 = d2 == Td || d2 == Ed;
    if (Ro(e6)) return Bl(e6, s2);
    if (d2 == kd || d2 == bd || f2 && !i2) {
      if (o2 = c2 || f2 ? {} : od(e6), !s2) return c2 ? Ql(e6, Pl(o2, e6)) : Yl(e6, Ml(o2, e6));
    } else {
      if (!O[d2]) return i2 ? e6 : {};
      o2 = id(e6, d2, s2);
    }
  }
  a2 || (a2 = new Al());
  var p2 = a2.get(e6);
  if (p2) return p2;
  a2.set(e6, o2), gd(e6) ? e6.forEach(function(r3) {
    o2.add(Kd(r3, t2, n2, r3, e6, a2));
  }) : dd(e6) && e6.forEach(function(r3, i3) {
    o2.set(i3, Kd(r3, t2, n2, i3, e6, a2));
  });
  var m2 = u2 ? void 0 : (l2 ? c2 ? iu : nu : c2 ? Rs : ks)(e6);
  return Ia(m2 || e6, function(r3, i3) {
    m2 && (i3 = r3, r3 = e6[i3]), ro(o2, i3, Kd(r3, t2, n2, i3, e6, a2));
  }), o2;
}
var qd = Kd, Jd = 4;
function Yd(e6) {
  return qd(e6, Jd);
}
var k = Yd;
function Xd(e6) {
  for (var t2 = -1, n2 = e6 == null ? 0 : e6.length, r2 = 0, i2 = []; ++t2 < n2; ) {
    var a2 = e6[t2];
    a2 && (i2[r2++] = a2);
  }
  return i2;
}
var Zd = Xd, Qd = `__lodash_hash_undefined__`;
function $d(e6) {
  return this.__data__.set(e6, Qd), this;
}
var ef = $d;
function tf(e6) {
  return this.__data__.has(e6);
}
var nf = tf;
function rf(e6) {
  var t2 = -1, n2 = e6 == null ? 0 : e6.length;
  for (this.__data__ = new Lc(); ++t2 < n2; ) this.add(e6[t2]);
}
rf.prototype.add = rf.prototype.push = ef, rf.prototype.has = nf;
var af = rf;
function of(e6, t2) {
  for (var n2 = -1, r2 = e6 == null ? 0 : e6.length; ++n2 < r2; ) if (t2(e6[n2], n2, e6)) return true;
  return false;
}
var sf = of;
function cf(e6, t2) {
  return e6.has(t2);
}
var lf = cf, uf = 1, df = 2;
function ff(e6, t2, n2, r2, i2, a2) {
  var o2 = n2 & uf, s2 = e6.length, c2 = t2.length;
  if (s2 != c2 && !(o2 && c2 > s2)) return false;
  var l2 = a2.get(e6), u2 = a2.get(t2);
  if (l2 && u2) return l2 == t2 && u2 == e6;
  var d2 = -1, f2 = true, p2 = n2 & df ? new af() : void 0;
  for (a2.set(e6, t2), a2.set(t2, e6); ++d2 < s2; ) {
    var m2 = e6[d2], h2 = t2[d2];
    if (r2) var g2 = o2 ? r2(h2, m2, d2, t2, e6, a2) : r2(m2, h2, d2, e6, t2, a2);
    if (g2 !== void 0) {
      if (g2) continue;
      f2 = false;
      break;
    }
    if (p2) {
      if (!sf(t2, function(e7, t3) {
        if (!lf(p2, t3) && (m2 === e7 || i2(m2, e7, n2, r2, a2))) return p2.push(t3);
      })) {
        f2 = false;
        break;
      }
    } else if (!(m2 === h2 || i2(m2, h2, n2, r2, a2))) {
      f2 = false;
      break;
    }
  }
  return a2.delete(e6), a2.delete(t2), f2;
}
var pf = ff;
function mf(e6) {
  var t2 = -1, n2 = Array(e6.size);
  return e6.forEach(function(e7, r2) {
    n2[++t2] = [r2, e7];
  }), n2;
}
var hf = mf;
function gf(e6) {
  var t2 = -1, n2 = Array(e6.size);
  return e6.forEach(function(e7) {
    n2[++t2] = e7;
  }), n2;
}
var _f = gf, vf = 1, yf = 2, bf = `[object Boolean]`, xf = `[object Date]`, Sf = `[object Error]`, Cf = `[object Map]`, wf = `[object Number]`, Tf = `[object RegExp]`, Ef = `[object Set]`, Df = `[object String]`, Of = `[object Symbol]`, kf = `[object ArrayBuffer]`, Af = `[object DataView]`, jf = Xr ? Xr.prototype : void 0, Mf = jf ? jf.valueOf : void 0;
function Nf(e6, t2, n2, r2, i2, a2, o2) {
  switch (n2) {
    case Af:
      if (e6.byteLength != t2.byteLength || e6.byteOffset != t2.byteOffset) return false;
      e6 = e6.buffer, t2 = t2.buffer;
    case kf:
      return !(e6.byteLength != t2.byteLength || !a2(new wu(e6), new wu(t2)));
    case bf:
    case xf:
    case wf:
      return eo(+e6, +t2);
    case Sf:
      return e6.name == t2.name && e6.message == t2.message;
    case Tf:
    case Df:
      return e6 == t2 + ``;
    case Cf:
      var s2 = hf;
    case Ef:
      var c2 = r2 & vf;
      if (s2 || (s2 = _f), e6.size != t2.size && !c2) return false;
      var l2 = o2.get(e6);
      if (l2) return l2 == t2;
      r2 |= yf, o2.set(e6, t2);
      var u2 = pf(s2(e6), s2(t2), r2, i2, a2, o2);
      return o2.delete(e6), u2;
    case Of:
      if (Mf) return Mf.call(e6) == Mf.call(t2);
  }
  return false;
}
var Pf = Nf, Ff = 1, If = Object.prototype.hasOwnProperty;
function Lf(e6, t2, n2, r2, i2, a2) {
  var o2 = n2 & Ff, s2 = nu(e6), c2 = s2.length;
  if (c2 != nu(t2).length && !o2) return false;
  for (var l2 = c2; l2--; ) {
    var u2 = s2[l2];
    if (!(o2 ? u2 in t2 : If.call(t2, u2))) return false;
  }
  var d2 = a2.get(e6), f2 = a2.get(t2);
  if (d2 && f2) return d2 == t2 && f2 == e6;
  var p2 = true;
  a2.set(e6, t2), a2.set(t2, e6);
  for (var m2 = o2; ++l2 < c2; ) {
    u2 = s2[l2];
    var h2 = e6[u2], g2 = t2[u2];
    if (r2) var _2 = o2 ? r2(g2, h2, u2, t2, e6, a2) : r2(h2, g2, u2, e6, t2, a2);
    if (!(_2 === void 0 ? h2 === g2 || i2(h2, g2, n2, r2, a2) : _2)) {
      p2 = false;
      break;
    }
    m2 || (m2 = u2 == `constructor`);
  }
  if (p2 && !m2) {
    var v2 = e6.constructor, y2 = t2.constructor;
    v2 != y2 && `constructor` in e6 && `constructor` in t2 && !(typeof v2 == `function` && v2 instanceof v2 && typeof y2 == `function` && y2 instanceof y2) && (p2 = false);
  }
  return a2.delete(e6), a2.delete(t2), p2;
}
var Rf = Lf, zf = 1, Bf = `[object Arguments]`, Vf = `[object Array]`, Hf = `[object Object]`, Uf = Object.prototype.hasOwnProperty;
function Wf(e6, t2, n2, r2, i2, a2) {
  var o2 = T(e6), s2 = T(t2), c2 = o2 ? Vf : bu(e6), l2 = s2 ? Vf : bu(t2);
  c2 = c2 == Bf ? Hf : c2, l2 = l2 == Bf ? Hf : l2;
  var u2 = c2 == Hf, d2 = l2 == Hf, f2 = c2 == l2;
  if (f2 && Ro(e6)) {
    if (!Ro(t2)) return false;
    o2 = true, u2 = false;
  }
  if (f2 && !u2) return a2 || (a2 = new Al()), o2 || vs(e6) ? pf(e6, t2, n2, r2, i2, a2) : Pf(e6, t2, c2, n2, r2, i2, a2);
  if (!(n2 & zf)) {
    var p2 = u2 && Uf.call(e6, `__wrapped__`), m2 = d2 && Uf.call(t2, `__wrapped__`);
    if (p2 || m2) {
      var h2 = p2 ? e6.value() : e6, g2 = m2 ? t2.value() : t2;
      return a2 || (a2 = new Al()), i2(h2, g2, n2, r2, a2);
    }
  }
  return f2 ? (a2 || (a2 = new Al()), Rf(e6, t2, n2, r2, i2, a2)) : false;
}
var Gf = Wf;
function Kf(e6, t2, n2, r2, i2) {
  return e6 === t2 ? true : e6 == null || t2 == null || !fi(e6) && !fi(t2) ? e6 !== e6 && t2 !== t2 : Gf(e6, t2, n2, r2, Kf, i2);
}
var qf = Kf, Jf = 1, Yf = 2;
function Xf(e6, t2, n2, r2) {
  var i2 = n2.length, a2 = i2, o2 = !r2;
  if (e6 == null) return !a2;
  for (e6 = Object(e6); i2--; ) {
    var s2 = n2[i2];
    if (o2 && s2[2] ? s2[1] !== e6[s2[0]] : !(s2[0] in e6)) return false;
  }
  for (; ++i2 < a2; ) {
    s2 = n2[i2];
    var c2 = s2[0], l2 = e6[c2], u2 = s2[1];
    if (o2 && s2[2]) {
      if (l2 === void 0 && !(c2 in e6)) return false;
    } else {
      var d2 = new Al();
      if (r2) var f2 = r2(l2, u2, c2, e6, t2, d2);
      if (!(f2 === void 0 ? qf(u2, l2, Jf | Yf, r2, d2) : f2)) return false;
    }
  }
  return true;
}
var Zf = Xf;
function Qf(e6) {
  return e6 === e6 && !Ai(e6);
}
var $f = Qf;
function ep(e6) {
  for (var t2 = ks(e6), n2 = t2.length; n2--; ) {
    var r2 = t2[n2], i2 = e6[r2];
    t2[n2] = [r2, i2, $f(i2)];
  }
  return t2;
}
var tp = ep;
function np(e6, t2) {
  return function(n2) {
    return n2 == null ? false : n2[e6] === t2 && (t2 !== void 0 || e6 in Object(n2));
  };
}
var rp = np;
function ip(e6) {
  var t2 = tp(e6);
  return t2.length == 1 && t2[0][2] ? rp(t2[0][0], t2[0][1]) : function(n2) {
    return n2 === e6 || Zf(n2, e6, t2);
  };
}
var ap = ip;
function op(e6, t2) {
  return e6 != null && t2 in Object(e6);
}
var sp = op;
function cp(e6, t2, n2) {
  t2 = Xc(t2, e6);
  for (var r2 = -1, i2 = t2.length, a2 = false; ++r2 < i2; ) {
    var o2 = $c(t2[r2]);
    if (!(a2 = e6 != null && n2(e6, o2))) break;
    e6 = e6[o2];
  }
  return a2 || ++r2 != i2 ? a2 : (i2 = e6 == null ? 0 : e6.length, !!i2 && mo(i2) && Xa(o2, i2) && (T(e6) || Mo(e6)));
}
var lp = cp;
function up(e6, t2) {
  return e6 != null && lp(e6, t2, sp);
}
var dp = up, fp = 1, pp = 2;
function mp(e6, t2) {
  return Hs(e6) && $f(t2) ? rp($c(e6), t2) : function(n2) {
    var r2 = rl(n2, e6);
    return r2 === void 0 && r2 === t2 ? dp(n2, e6) : qf(t2, r2, fp | pp);
  };
}
var hp = mp;
function gp(e6) {
  return function(t2) {
    return t2 == null ? void 0 : t2[e6];
  };
}
var _p = gp;
function vp(e6) {
  return function(t2) {
    return tl(t2, e6);
  };
}
var yp = vp;
function bp(e6) {
  return Hs(e6) ? _p($c(e6)) : yp(e6);
}
var xp = bp;
function Sp(e6) {
  return typeof e6 == `function` ? e6 : e6 == null ? Gi : typeof e6 == `object` ? T(e6) ? hp(e6[0], e6[1]) : ap(e6) : xp(e6);
}
var Cp = Sp;
function wp(e6, t2, n2, r2) {
  for (var i2 = -1, a2 = e6 == null ? 0 : e6.length; ++i2 < a2; ) {
    var o2 = e6[i2];
    t2(r2, o2, n2(o2), e6);
  }
  return r2;
}
var Tp = wp;
function Ep(e6) {
  return function(t2, n2, r2) {
    for (var i2 = -1, a2 = Object(t2), o2 = r2(t2), s2 = o2.length; s2--; ) {
      var c2 = o2[e6 ? s2 : ++i2];
      if (n2(a2[c2], c2, a2) === false) break;
    }
    return t2;
  };
}
var Dp = Ep();
function Op(e6, t2) {
  return e6 && Dp(e6, t2, ks);
}
var kp = Op;
function Ap(e6, t2) {
  return function(n2, r2) {
    if (n2 == null) return n2;
    if (!go(n2)) return e6(n2, r2);
    for (var i2 = n2.length, a2 = t2 ? i2 : -1, o2 = Object(n2); (t2 ? a2-- : ++a2 < i2) && r2(o2[a2], a2, o2) !== false; ) ;
    return n2;
  };
}
var jp = Ap(kp);
function Mp(e6, t2, n2, r2) {
  return jp(e6, function(e7, i2, a2) {
    t2(r2, e7, n2(e7), a2);
  }), r2;
}
var Np = Mp;
function Pp(e6, t2) {
  return function(n2, r2) {
    var i2 = T(n2) ? Tp : Np, a2 = t2 ? t2() : {};
    return i2(n2, e6, Cp(r2, 2), a2);
  };
}
var Fp = Pp, Ip = Object.prototype, Lp = Ip.hasOwnProperty, Rp = uo(function(e6, t2) {
  e6 = Object(e6);
  var n2 = -1, r2 = t2.length, i2 = r2 > 2 ? t2[2] : void 0;
  for (i2 && vo(t2[0], t2[1], i2) && (r2 = 1); ++n2 < r2; ) for (var a2 = t2[n2], o2 = Rs(a2), s2 = -1, c2 = o2.length; ++s2 < c2; ) {
    var l2 = o2[s2], u2 = e6[l2];
    (u2 === void 0 || eo(u2, Ip[l2]) && !Lp.call(e6, l2)) && (e6[l2] = a2[l2]);
  }
  return e6;
});
function zp(e6) {
  return fi(e6) && go(e6);
}
var Bp = zp;
function Vp(e6, t2, n2) {
  for (var r2 = -1, i2 = e6 == null ? 0 : e6.length; ++r2 < i2; ) if (n2(t2, e6[r2])) return true;
  return false;
}
var Hp = Vp, Up = 200;
function Wp(e6, t2, n2, r2) {
  var i2 = -1, a2 = Ka, o2 = true, s2 = e6.length, c2 = [], l2 = t2.length;
  if (!s2) return c2;
  n2 && (t2 = _i(t2, fs(n2))), r2 ? (a2 = Hp, o2 = false) : t2.length >= Up && (a2 = lf, o2 = false, t2 = new af(t2));
  outer: for (; ++i2 < s2; ) {
    var u2 = e6[i2], d2 = n2 == null ? u2 : n2(u2);
    if (u2 = r2 || u2 !== 0 ? u2 : 0, o2 && d2 === d2) {
      for (var f2 = l2; f2--; ) if (t2[f2] === d2) continue outer;
      c2.push(u2);
    } else a2(t2, d2, r2) || c2.push(u2);
  }
  return c2;
}
var Gp = Wp, Kp = uo(function(e6, t2) {
  return Bp(e6) ? Gp(e6, ul(t2, 1, Bp, true)) : [];
});
function qp(e6) {
  var t2 = e6 == null ? 0 : e6.length;
  return t2 ? e6[t2 - 1] : void 0;
}
var Jp = qp;
function Yp(e6, t2, n2) {
  var r2 = e6 == null ? 0 : e6.length;
  return r2 ? (t2 = n2 || t2 === void 0 ? 1 : Ui(t2), hl(e6, t2 < 0 ? 0 : t2, r2)) : [];
}
var A = Yp;
function Xp(e6, t2, n2) {
  var r2 = e6 == null ? 0 : e6.length;
  return r2 ? (t2 = n2 || t2 === void 0 ? 1 : Ui(t2), t2 = r2 - t2, hl(e6, 0, t2 < 0 ? 0 : t2)) : [];
}
var Zp = Xp;
function Qp(e6) {
  return typeof e6 == `function` ? e6 : Gi;
}
var $p = Qp;
function em(e6, t2) {
  return (T(e6) ? Ia : jp)(e6, $p(t2));
}
var j = em;
function tm(e6, t2) {
  for (var n2 = -1, r2 = e6 == null ? 0 : e6.length; ++n2 < r2; ) if (!t2(e6[n2], n2, e6)) return false;
  return true;
}
var nm = tm;
function rm(e6, t2) {
  var n2 = true;
  return jp(e6, function(e7, r2, i2) {
    return n2 = !!t2(e7, r2, i2), n2;
  }), n2;
}
var im = rm;
function am(e6, t2, n2) {
  var r2 = T(e6) ? nm : im;
  return n2 && vo(e6, t2, n2) && (t2 = void 0), r2(e6, Cp(t2, 3));
}
var om = am;
function sm(e6, t2) {
  var n2 = [];
  return jp(e6, function(e7, r2, i2) {
    t2(e7, r2, i2) && n2.push(e7);
  }), n2;
}
var cm = sm;
function lm(e6, t2) {
  return (T(e6) ? Hl : cm)(e6, Cp(t2, 3));
}
var um = lm;
function dm(e6) {
  return function(t2, n2, r2) {
    var i2 = Object(t2);
    if (!go(t2)) {
      var a2 = Cp(n2, 3);
      t2 = ks(t2), n2 = function(e7) {
        return a2(i2[e7], e7, i2);
      };
    }
    var o2 = e6(t2, n2, r2);
    return o2 > -1 ? i2[a2 ? t2[o2] : o2] : void 0;
  };
}
var fm = dm, pm = Math.max;
function mm(e6, t2, n2) {
  var r2 = e6 == null ? 0 : e6.length;
  if (!r2) return -1;
  var i2 = n2 == null ? 0 : Ui(n2);
  return i2 < 0 && (i2 = pm(r2 + i2, 0)), Ra(e6, Cp(t2, 3), i2);
}
var hm = fm(mm);
function gm(e6) {
  return e6 && e6.length ? e6[0] : void 0;
}
var _m = gm;
function vm(e6, t2) {
  var n2 = -1, r2 = go(e6) ? Array(e6.length) : [];
  return jp(e6, function(e7, i2, a2) {
    r2[++n2] = t2(e7, i2, a2);
  }), r2;
}
var ym = vm;
function bm(e6, t2) {
  return (T(e6) ? _i : ym)(e6, Cp(t2, 3));
}
var M = bm;
function xm(e6, t2) {
  return ul(M(e6, t2), 1);
}
var Sm = xm, Cm = Object.prototype.hasOwnProperty, wm = Fp(function(e6, t2, n2) {
  Cm.call(e6, n2) ? e6[n2].push(t2) : Qa(e6, n2, [t2]);
}), Tm = Object.prototype.hasOwnProperty;
function Em(e6, t2) {
  return e6 != null && Tm.call(e6, t2);
}
var Dm = Em;
function Om(e6, t2) {
  return e6 != null && lp(e6, t2, Dm);
}
var N = Om, km = `[object String]`;
function Am(e6) {
  return typeof e6 == `string` || !T(e6) && fi(e6) && ui(e6) == km;
}
var jm = Am;
function Mm(e6, t2) {
  return _i(t2, function(t3) {
    return e6[t3];
  });
}
var Nm = Mm;
function Pm(e6) {
  return e6 == null ? [] : Nm(e6, ks(e6));
}
var P = Pm, Fm = Math.max;
function Im(e6, t2, n2, r2) {
  e6 = go(e6) ? e6 : P(e6), n2 = n2 && !r2 ? Ui(n2) : 0;
  var i2 = e6.length;
  return n2 < 0 && (n2 = Fm(i2 + n2, 0)), jm(e6) ? n2 <= i2 && e6.indexOf(t2, n2) > -1 : !!i2 && Wa(e6, t2, n2) > -1;
}
var Lm = Im, Rm = Math.max;
function zm(e6, t2, n2) {
  var r2 = e6 == null ? 0 : e6.length;
  if (!r2) return -1;
  var i2 = n2 == null ? 0 : Ui(n2);
  return i2 < 0 && (i2 = Rm(r2 + i2, 0)), Wa(e6, t2, i2);
}
var Bm = zm, Vm = `[object Map]`, Hm = `[object Set]`, Um = Object.prototype.hasOwnProperty;
function Wm(e6) {
  if (e6 == null) return true;
  if (go(e6) && (T(e6) || typeof e6 == `string` || typeof e6.splice == `function` || Ro(e6) || vs(e6) || Mo(e6))) return !e6.length;
  var t2 = bu(e6);
  if (t2 == Vm || t2 == Hm) return !e6.size;
  if (Co(e6)) return !Ds(e6).length;
  for (var n2 in e6) if (Um.call(e6, n2)) return false;
  return true;
}
var F = Wm, Gm = `[object RegExp]`;
function Km(e6) {
  return fi(e6) && ui(e6) == Gm;
}
var qm = Km, Jm = gs && gs.isRegExp, Ym = Jm ? fs(Jm) : qm;
function Xm(e6) {
  return e6 === void 0;
}
var Zm = Xm, Qm = `Expected a function`;
function $m(e6) {
  if (typeof e6 != `function`) throw TypeError(Qm);
  return function() {
    var t2 = arguments;
    switch (t2.length) {
      case 0:
        return !e6.call(this);
      case 1:
        return !e6.call(this, t2[0]);
      case 2:
        return !e6.call(this, t2[0], t2[1]);
      case 3:
        return !e6.call(this, t2[0], t2[1], t2[2]);
    }
    return !e6.apply(this, t2);
  };
}
var eh = $m;
function th(e6, t2, n2, r2) {
  if (!Ai(e6)) return e6;
  t2 = Xc(t2, e6);
  for (var i2 = -1, a2 = t2.length, o2 = a2 - 1, s2 = e6; s2 != null && ++i2 < a2; ) {
    var c2 = $c(t2[i2]), l2 = n2;
    if (c2 === `__proto__` || c2 === `constructor` || c2 === `prototype`) return e6;
    if (i2 != o2) {
      var u2 = s2[c2];
      l2 = r2 ? r2(u2, c2, s2) : void 0, l2 === void 0 && (l2 = Ai(u2) ? u2 : Xa(t2[i2 + 1]) ? [] : {});
    }
    ro(s2, c2, l2), s2 = s2[c2];
  }
  return e6;
}
var nh = th;
function rh(e6, t2, n2) {
  for (var r2 = -1, i2 = t2.length, a2 = {}; ++r2 < i2; ) {
    var o2 = t2[r2], s2 = tl(e6, o2);
    n2(s2, o2) && nh(a2, Xc(o2, e6), s2);
  }
  return a2;
}
var ih = rh;
function ah(e6, t2) {
  if (e6 == null) return {};
  var n2 = _i(iu(e6), function(e7) {
    return [e7];
  });
  return t2 = Cp(t2), ih(e6, n2, function(e7, n3) {
    return t2(e7, n3[0]);
  });
}
var oh = ah;
function sh(e6, t2, n2, r2, i2) {
  return i2(e6, function(e7, i3, a2) {
    n2 = r2 ? (r2 = false, e7) : t2(n2, e7, i3, a2);
  }), n2;
}
var ch = sh;
function lh(e6, t2, n2) {
  var r2 = T(e6) ? _l : ch, i2 = arguments.length < 3;
  return r2(e6, Cp(t2, 4), n2, i2, jp);
}
var uh = lh;
function dh(e6, t2) {
  return (T(e6) ? Hl : cm)(e6, eh(Cp(t2, 3)));
}
var fh = dh;
function ph(e6, t2) {
  var n2;
  return jp(e6, function(e7, r2, i2) {
    return n2 = t2(e7, r2, i2), !n2;
  }), !!n2;
}
var mh = ph;
function hh(e6, t2, n2) {
  var r2 = T(e6) ? sf : mh;
  return n2 && vo(e6, t2, n2) && (t2 = void 0), r2(e6, Cp(t2, 3));
}
var gh = hh, _h = su && 1 / _f(new su([, -0]))[1] == 1 / 0 ? function(e6) {
  return new su(e6);
} : E, vh = 200;
function yh(e6, t2, n2) {
  var r2 = -1, i2 = Ka, a2 = e6.length, o2 = true, s2 = [], c2 = s2;
  if (n2) o2 = false, i2 = Hp;
  else if (a2 >= vh) {
    var l2 = t2 ? null : _h(e6);
    if (l2) return _f(l2);
    o2 = false, i2 = lf, c2 = new af();
  } else c2 = t2 ? [] : s2;
  outer: for (; ++r2 < a2; ) {
    var u2 = e6[r2], d2 = t2 ? t2(u2) : u2;
    if (u2 = n2 || u2 !== 0 ? u2 : 0, o2 && d2 === d2) {
      for (var f2 = c2.length; f2--; ) if (c2[f2] === d2) continue outer;
      t2 && c2.push(d2), s2.push(u2);
    } else i2(c2, d2, n2) || (c2 !== s2 && c2.push(d2), s2.push(u2));
  }
  return s2;
}
var bh = yh;
function xh(e6) {
  return e6 && e6.length ? bh(e6) : [];
}
var Sh = xh;
function Ch(e6) {
  console && console.error && console.error(`Error: ${e6}`);
}
function wh(e6) {
  console && console.warn && console.warn(`Warning: ${e6}`);
}
function Th(e6) {
  let t2 = (/* @__PURE__ */ new Date()).getTime(), n2 = e6();
  return { time: (/* @__PURE__ */ new Date()).getTime() - t2, value: n2 };
}
function Eh(e6) {
  function t2() {
  }
  t2.prototype = e6;
  let n2 = new t2();
  function r2() {
    return typeof n2.bar;
  }
  return r2(), r2(), e6;
}
var Dh = typeof global == `object` && global && global.Object === Object && global, Oh = typeof self == `object` && self && self.Object === Object && self, kh = Dh || Oh || Function(`return this`)(), Ah = kh.Symbol, jh = Object.prototype, Mh = jh.hasOwnProperty, Nh = jh.toString, Ph = Ah ? Ah.toStringTag : void 0;
function Fh(e6) {
  var t2 = Mh.call(e6, Ph), n2 = e6[Ph];
  try {
    e6[Ph] = void 0;
    var r2 = true;
  } catch {
  }
  var i2 = Nh.call(e6);
  return r2 && (t2 ? e6[Ph] = n2 : delete e6[Ph]), i2;
}
var Ih = Fh, Lh = Object.prototype.toString;
function Rh(e6) {
  return Lh.call(e6);
}
var zh = Rh, Bh = `[object Null]`, Vh = `[object Undefined]`, Hh = Ah ? Ah.toStringTag : void 0;
function Uh(e6) {
  return e6 == null ? e6 === void 0 ? Vh : Bh : Hh && Hh in Object(e6) ? Ih(e6) : zh(e6);
}
var Wh = Uh;
function Gh(e6) {
  return typeof e6 == `object` && !!e6;
}
var Kh = Gh, qh = `[object Symbol]`;
function Jh(e6) {
  return typeof e6 == `symbol` || Kh(e6) && Wh(e6) == qh;
}
var Yh = Jh;
function Xh(e6, t2) {
  for (var n2 = -1, r2 = e6 == null ? 0 : e6.length, i2 = Array(r2); ++n2 < r2; ) i2[n2] = t2(e6[n2], n2, e6);
  return i2;
}
var Zh = Xh, Qh = Array.isArray, $h = 1 / 0, eg = Ah ? Ah.prototype : void 0, tg = eg ? eg.toString : void 0;
function ng(e6) {
  if (typeof e6 == `string`) return e6;
  if (Qh(e6)) return Zh(e6, ng) + ``;
  if (Yh(e6)) return tg ? tg.call(e6) : ``;
  var t2 = e6 + ``;
  return t2 == `0` && 1 / e6 == -$h ? `-0` : t2;
}
var rg = ng, ig = /\s/;
function ag(e6) {
  for (var t2 = e6.length; t2-- && ig.test(e6.charAt(t2)); ) ;
  return t2;
}
var og = ag, sg = /^\s+/;
function cg(e6) {
  return e6 && e6.slice(0, og(e6) + 1).replace(sg, ``);
}
var lg = cg;
function ug(e6) {
  var t2 = typeof e6;
  return e6 != null && (t2 == `object` || t2 == `function`);
}
var dg = ug, fg = NaN, pg = /^[-+]0x[0-9a-f]+$/i, mg = /^0b[01]+$/i, hg = /^0o[0-7]+$/i, gg = parseInt;
function _g(e6) {
  if (typeof e6 == `number`) return e6;
  if (Yh(e6)) return fg;
  if (dg(e6)) {
    var t2 = typeof e6.valueOf == `function` ? e6.valueOf() : e6;
    e6 = dg(t2) ? t2 + `` : t2;
  }
  if (typeof e6 != `string`) return e6 === 0 ? e6 : +e6;
  e6 = lg(e6);
  var n2 = mg.test(e6);
  return n2 || hg.test(e6) ? gg(e6.slice(2), n2 ? 2 : 8) : pg.test(e6) ? fg : +e6;
}
var vg = _g, yg = 1 / 0, bg = 17976931348623157e292;
function xg(e6) {
  return e6 ? (e6 = vg(e6), e6 === yg || e6 === -yg ? (e6 < 0 ? -1 : 1) * bg : e6 === e6 ? e6 : 0) : e6 === 0 ? e6 : 0;
}
var Sg = xg;
function Cg(e6) {
  var t2 = Sg(e6), n2 = t2 % 1;
  return t2 === t2 ? n2 ? t2 - n2 : t2 : 0;
}
var wg = Cg;
function Tg(e6) {
  return e6;
}
var Eg = Tg, Dg = `[object AsyncFunction]`, Og = `[object Function]`, kg = `[object GeneratorFunction]`, Ag = `[object Proxy]`;
function jg(e6) {
  if (!dg(e6)) return false;
  var t2 = Wh(e6);
  return t2 == Og || t2 == kg || t2 == Dg || t2 == Ag;
}
var Mg = jg, Ng = kh[`__core-js_shared__`], Pg = (function() {
  var e6 = /[^.]+$/.exec(Ng && Ng.keys && Ng.keys.IE_PROTO || ``);
  return e6 ? `Symbol(src)_1.` + e6 : ``;
})();
function Fg(e6) {
  return !!Pg && Pg in e6;
}
var Ig = Fg, Lg = Function.prototype.toString;
function Rg(e6) {
  if (e6 != null) {
    try {
      return Lg.call(e6);
    } catch {
    }
    try {
      return e6 + ``;
    } catch {
    }
  }
  return ``;
}
var zg = Rg, Bg = /[\\^$.*+?()[\]{}|]/g, Vg = /^\[object .+?Constructor\]$/, Hg = Function.prototype, Ug = Object.prototype, Wg = Hg.toString, Gg = Ug.hasOwnProperty, Kg = RegExp(`^` + Wg.call(Gg).replace(Bg, `\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, `$1.*?`) + `$`);
function qg(e6) {
  return !dg(e6) || Ig(e6) ? false : (Mg(e6) ? Kg : Vg).test(zg(e6));
}
var Jg = qg;
function Yg(e6, t2) {
  return e6 == null ? void 0 : e6[t2];
}
var Xg = Yg;
function Zg(e6, t2) {
  var n2 = Xg(e6, t2);
  return Jg(n2) ? n2 : void 0;
}
var Qg = Zg, $g = Qg(kh, `WeakMap`);
function e_(e6, t2, n2) {
  switch (n2.length) {
    case 0:
      return e6.call(t2);
    case 1:
      return e6.call(t2, n2[0]);
    case 2:
      return e6.call(t2, n2[0], n2[1]);
    case 3:
      return e6.call(t2, n2[0], n2[1], n2[2]);
  }
  return e6.apply(t2, n2);
}
var t_ = e_, n_ = 800, r_ = 16, i_ = Date.now;
function a_(e6) {
  var t2 = 0, n2 = 0;
  return function() {
    var r2 = i_(), i2 = r_ - (r2 - n2);
    if (n2 = r2, i2 > 0) {
      if (++t2 >= n_) return arguments[0];
    } else t2 = 0;
    return e6.apply(void 0, arguments);
  };
}
var o_ = a_;
function s_(e6) {
  return function() {
    return e6;
  };
}
var c_ = s_, l_ = (function() {
  try {
    var e6 = Qg(Object, `defineProperty`);
    return e6({}, ``, {}), e6;
  } catch {
  }
})(), u_ = o_(l_ ? function(e6, t2) {
  return l_(e6, `toString`, { configurable: true, enumerable: false, value: c_(t2), writable: true });
} : Eg);
function d_(e6, t2) {
  for (var n2 = -1, r2 = e6 == null ? 0 : e6.length; ++n2 < r2 && t2(e6[n2], n2, e6) !== false; ) ;
  return e6;
}
var f_ = d_;
function p_(e6, t2, n2, r2) {
  for (var i2 = e6.length, a2 = n2 + (r2 ? 1 : -1); r2 ? a2-- : ++a2 < i2; ) if (t2(e6[a2], a2, e6)) return a2;
  return -1;
}
var m_ = p_;
function h_(e6) {
  return e6 !== e6;
}
var g_ = h_;
function __(e6, t2, n2) {
  for (var r2 = n2 - 1, i2 = e6.length; ++r2 < i2; ) if (e6[r2] === t2) return r2;
  return -1;
}
var v_ = __;
function y_(e6, t2, n2) {
  return t2 === t2 ? v_(e6, t2, n2) : m_(e6, g_, n2);
}
var b_ = y_, x_ = 9007199254740991, S_ = /^(?:0|[1-9]\d*)$/;
function C_(e6, t2) {
  var n2 = typeof e6;
  return t2 ?? (t2 = x_), !!t2 && (n2 == `number` || n2 != `symbol` && S_.test(e6)) && e6 > -1 && e6 % 1 == 0 && e6 < t2;
}
var w_ = C_;
function T_(e6, t2, n2) {
  t2 == `__proto__` && l_ ? l_(e6, t2, { configurable: true, enumerable: true, value: n2, writable: true }) : e6[t2] = n2;
}
var E_ = T_;
function D_(e6, t2) {
  return e6 === t2 || e6 !== e6 && t2 !== t2;
}
var O_ = D_, k_ = Object.prototype.hasOwnProperty;
function A_(e6, t2, n2) {
  var r2 = e6[t2];
  (!(k_.call(e6, t2) && O_(r2, n2)) || n2 === void 0 && !(t2 in e6)) && E_(e6, t2, n2);
}
var j_ = A_;
function M_(e6, t2, n2, r2) {
  var i2 = !n2;
  n2 || (n2 = {});
  for (var a2 = -1, o2 = t2.length; ++a2 < o2; ) {
    var s2 = t2[a2], c2 = r2 ? r2(n2[s2], e6[s2], s2, n2, e6) : void 0;
    c2 === void 0 && (c2 = e6[s2]), i2 ? E_(n2, s2, c2) : j_(n2, s2, c2);
  }
  return n2;
}
var N_ = M_, P_ = Math.max;
function F_(e6, t2, n2) {
  return t2 = P_(t2 === void 0 ? e6.length - 1 : t2, 0), function() {
    for (var r2 = arguments, i2 = -1, a2 = P_(r2.length - t2, 0), o2 = Array(a2); ++i2 < a2; ) o2[i2] = r2[t2 + i2];
    i2 = -1;
    for (var s2 = Array(t2 + 1); ++i2 < t2; ) s2[i2] = r2[i2];
    return s2[t2] = n2(o2), t_(e6, this, s2);
  };
}
var I_ = F_;
function L_(e6, t2) {
  return u_(I_(e6, t2, Eg), e6 + ``);
}
var R_ = L_, z_ = 9007199254740991;
function B_(e6) {
  return typeof e6 == `number` && e6 > -1 && e6 % 1 == 0 && e6 <= z_;
}
var V_ = B_;
function H_(e6) {
  return e6 != null && V_(e6.length) && !Mg(e6);
}
var U_ = H_;
function W_(e6, t2, n2) {
  if (!dg(n2)) return false;
  var r2 = typeof t2;
  return (r2 == `number` ? U_(n2) && w_(t2, n2.length) : r2 == `string` && t2 in n2) ? O_(n2[t2], e6) : false;
}
var G_ = W_;
function K_(e6) {
  return R_(function(t2, n2) {
    var r2 = -1, i2 = n2.length, a2 = i2 > 1 ? n2[i2 - 1] : void 0, o2 = i2 > 2 ? n2[2] : void 0;
    for (a2 = e6.length > 3 && typeof a2 == `function` ? (i2--, a2) : void 0, o2 && G_(n2[0], n2[1], o2) && (a2 = i2 < 3 ? void 0 : a2, i2 = 1), t2 = Object(t2); ++r2 < i2; ) {
      var s2 = n2[r2];
      s2 && e6(t2, s2, r2, a2);
    }
    return t2;
  });
}
var q_ = K_, J_ = Object.prototype;
function Y_(e6) {
  var t2 = e6 && e6.constructor;
  return e6 === (typeof t2 == `function` && t2.prototype || J_);
}
var X_ = Y_;
function Z_(e6, t2) {
  for (var n2 = -1, r2 = Array(e6); ++n2 < e6; ) r2[n2] = t2(n2);
  return r2;
}
var Q_ = Z_, $_ = `[object Arguments]`;
function ev(e6) {
  return Kh(e6) && Wh(e6) == $_;
}
var tv = ev, nv = Object.prototype, rv = nv.hasOwnProperty, iv = nv.propertyIsEnumerable, av = tv(/* @__PURE__ */ (function() {
  return arguments;
})()) ? tv : function(e6) {
  return Kh(e6) && rv.call(e6, `callee`) && !iv.call(e6, `callee`);
};
function ov() {
  return false;
}
var sv = ov, cv = typeof exports == `object` && exports && !exports.nodeType && exports, lv = cv && typeof module == `object` && module && !module.nodeType && module, uv = lv && lv.exports === cv ? kh.Buffer : void 0, dv = (uv ? uv.isBuffer : void 0) || sv, fv = `[object Arguments]`, pv = `[object Array]`, mv = `[object Boolean]`, hv = `[object Date]`, gv = `[object Error]`, _v = `[object Function]`, vv = `[object Map]`, yv = `[object Number]`, bv = `[object Object]`, xv = `[object RegExp]`, Sv = `[object Set]`, Cv = `[object String]`, wv = `[object WeakMap]`, Tv = `[object ArrayBuffer]`, Ev = `[object DataView]`, Dv = `[object Float32Array]`, Ov = `[object Float64Array]`, kv = `[object Int8Array]`, Av = `[object Int16Array]`, jv = `[object Int32Array]`, Mv = `[object Uint8Array]`, Nv = `[object Uint8ClampedArray]`, Pv = `[object Uint16Array]`, Fv = `[object Uint32Array]`, I = {};
I[Dv] = I[Ov] = I[kv] = I[Av] = I[jv] = I[Mv] = I[Nv] = I[Pv] = I[Fv] = true, I[fv] = I[pv] = I[Tv] = I[mv] = I[Ev] = I[hv] = I[gv] = I[_v] = I[vv] = I[yv] = I[bv] = I[xv] = I[Sv] = I[Cv] = I[wv] = false;
function Iv(e6) {
  return Kh(e6) && V_(e6.length) && !!I[Wh(e6)];
}
var Lv = Iv;
function Rv(e6) {
  return function(t2) {
    return e6(t2);
  };
}
var zv = Rv, Bv = typeof exports == `object` && exports && !exports.nodeType && exports, Vv = Bv && typeof module == `object` && module && !module.nodeType && module, Hv = Vv && Vv.exports === Bv && Dh.process, Uv = (function() {
  try {
    return Vv && Vv.require && Vv.require(`util`).types || Hv && Hv.binding && Hv.binding(`util`);
  } catch {
  }
})(), Wv = Uv && Uv.isTypedArray, Gv = Wv ? zv(Wv) : Lv, Kv = Object.prototype.hasOwnProperty;
function qv(e6, t2) {
  var n2 = Qh(e6), r2 = !n2 && av(e6), i2 = !n2 && !r2 && dv(e6), a2 = !n2 && !r2 && !i2 && Gv(e6), o2 = n2 || r2 || i2 || a2, s2 = o2 ? Q_(e6.length, String) : [], c2 = s2.length;
  for (var l2 in e6) (t2 || Kv.call(e6, l2)) && !(o2 && (l2 == `length` || i2 && (l2 == `offset` || l2 == `parent`) || a2 && (l2 == `buffer` || l2 == `byteLength` || l2 == `byteOffset`) || w_(l2, c2))) && s2.push(l2);
  return s2;
}
var Jv = qv;
function Yv(e6, t2) {
  return function(n2) {
    return e6(t2(n2));
  };
}
var Xv = Yv, Zv = Xv(Object.keys, Object), Qv = Object.prototype.hasOwnProperty;
function $v(e6) {
  if (!X_(e6)) return Zv(e6);
  var t2 = [];
  for (var n2 in Object(e6)) Qv.call(e6, n2) && n2 != `constructor` && t2.push(n2);
  return t2;
}
var ey = $v;
function ty(e6) {
  return U_(e6) ? Jv(e6) : ey(e6);
}
var ny = ty, ry = Object.prototype.hasOwnProperty, iy = q_(function(e6, t2) {
  if (X_(t2) || U_(t2)) {
    N_(t2, ny(t2), e6);
    return;
  }
  for (var n2 in t2) ry.call(t2, n2) && j_(e6, n2, t2[n2]);
});
function ay(e6) {
  var t2 = [];
  if (e6 != null) for (var n2 in Object(e6)) t2.push(n2);
  return t2;
}
var oy = ay, sy = Object.prototype.hasOwnProperty;
function cy(e6) {
  if (!dg(e6)) return oy(e6);
  var t2 = X_(e6), n2 = [];
  for (var r2 in e6) r2 == `constructor` && (t2 || !sy.call(e6, r2)) || n2.push(r2);
  return n2;
}
var ly = cy;
function uy(e6) {
  return U_(e6) ? Jv(e6, true) : ly(e6);
}
var dy = uy, fy = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, py = /^\w*$/;
function my(e6, t2) {
  if (Qh(e6)) return false;
  var n2 = typeof e6;
  return n2 == `number` || n2 == `symbol` || n2 == `boolean` || e6 == null || Yh(e6) ? true : py.test(e6) || !fy.test(e6) || t2 != null && e6 in Object(t2);
}
var hy = my, gy = Qg(Object, `create`);
function _y() {
  this.__data__ = gy ? gy(null) : {}, this.size = 0;
}
var vy = _y;
function yy(e6) {
  var t2 = this.has(e6) && delete this.__data__[e6];
  return this.size -= t2 ? 1 : 0, t2;
}
var by = yy, xy = `__lodash_hash_undefined__`, Sy = Object.prototype.hasOwnProperty;
function Cy(e6) {
  var t2 = this.__data__;
  if (gy) {
    var n2 = t2[e6];
    return n2 === xy ? void 0 : n2;
  }
  return Sy.call(t2, e6) ? t2[e6] : void 0;
}
var wy = Cy, Ty = Object.prototype.hasOwnProperty;
function Ey(e6) {
  var t2 = this.__data__;
  return gy ? t2[e6] !== void 0 : Ty.call(t2, e6);
}
var Dy = Ey, Oy = `__lodash_hash_undefined__`;
function ky(e6, t2) {
  var n2 = this.__data__;
  return this.size += this.has(e6) ? 0 : 1, n2[e6] = gy && t2 === void 0 ? Oy : t2, this;
}
var Ay = ky;
function jy(e6) {
  var t2 = -1, n2 = e6 == null ? 0 : e6.length;
  for (this.clear(); ++t2 < n2; ) {
    var r2 = e6[t2];
    this.set(r2[0], r2[1]);
  }
}
jy.prototype.clear = vy, jy.prototype.delete = by, jy.prototype.get = wy, jy.prototype.has = Dy, jy.prototype.set = Ay;
var My = jy;
function Ny() {
  this.__data__ = [], this.size = 0;
}
var Py = Ny;
function Fy(e6, t2) {
  for (var n2 = e6.length; n2--; ) if (O_(e6[n2][0], t2)) return n2;
  return -1;
}
var Iy = Fy, Ly = Array.prototype.splice;
function Ry(e6) {
  var t2 = this.__data__, n2 = Iy(t2, e6);
  return n2 < 0 ? false : (n2 == t2.length - 1 ? t2.pop() : Ly.call(t2, n2, 1), --this.size, true);
}
var zy = Ry;
function By(e6) {
  var t2 = this.__data__, n2 = Iy(t2, e6);
  return n2 < 0 ? void 0 : t2[n2][1];
}
var Vy = By;
function Hy(e6) {
  return Iy(this.__data__, e6) > -1;
}
var Uy = Hy;
function Wy(e6, t2) {
  var n2 = this.__data__, r2 = Iy(n2, e6);
  return r2 < 0 ? (++this.size, n2.push([e6, t2])) : n2[r2][1] = t2, this;
}
var Gy = Wy;
function Ky(e6) {
  var t2 = -1, n2 = e6 == null ? 0 : e6.length;
  for (this.clear(); ++t2 < n2; ) {
    var r2 = e6[t2];
    this.set(r2[0], r2[1]);
  }
}
Ky.prototype.clear = Py, Ky.prototype.delete = zy, Ky.prototype.get = Vy, Ky.prototype.has = Uy, Ky.prototype.set = Gy;
var qy = Ky, Jy = Qg(kh, `Map`);
function Yy() {
  this.size = 0, this.__data__ = { hash: new My(), map: new (Jy || qy)(), string: new My() };
}
var Xy = Yy;
function Zy(e6) {
  var t2 = typeof e6;
  return t2 == `string` || t2 == `number` || t2 == `symbol` || t2 == `boolean` ? e6 !== `__proto__` : e6 === null;
}
var Qy = Zy;
function $y(e6, t2) {
  var n2 = e6.__data__;
  return Qy(t2) ? n2[typeof t2 == `string` ? `string` : `hash`] : n2.map;
}
var eb = $y;
function tb(e6) {
  var t2 = eb(this, e6).delete(e6);
  return this.size -= t2 ? 1 : 0, t2;
}
var nb = tb;
function rb(e6) {
  return eb(this, e6).get(e6);
}
var ib = rb;
function ab(e6) {
  return eb(this, e6).has(e6);
}
var ob = ab;
function sb(e6, t2) {
  var n2 = eb(this, e6), r2 = n2.size;
  return n2.set(e6, t2), this.size += n2.size == r2 ? 0 : 1, this;
}
var cb = sb;
function lb(e6) {
  var t2 = -1, n2 = e6 == null ? 0 : e6.length;
  for (this.clear(); ++t2 < n2; ) {
    var r2 = e6[t2];
    this.set(r2[0], r2[1]);
  }
}
lb.prototype.clear = Xy, lb.prototype.delete = nb, lb.prototype.get = ib, lb.prototype.has = ob, lb.prototype.set = cb;
var ub = lb, db = `Expected a function`;
function fb(e6, t2) {
  if (typeof e6 != `function` || t2 != null && typeof t2 != `function`) throw TypeError(db);
  var n2 = function() {
    var r2 = arguments, i2 = t2 ? t2.apply(this, r2) : r2[0], a2 = n2.cache;
    if (a2.has(i2)) return a2.get(i2);
    var o2 = e6.apply(this, r2);
    return n2.cache = a2.set(i2, o2) || a2, o2;
  };
  return n2.cache = new (fb.Cache || ub)(), n2;
}
fb.Cache = ub;
var pb = fb, mb = 500;
function hb(e6) {
  var t2 = pb(e6, function(e7) {
    return n2.size === mb && n2.clear(), e7;
  }), n2 = t2.cache;
  return t2;
}
var gb = hb, _b = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, vb = /\\(\\)?/g, yb = gb(function(e6) {
  var t2 = [];
  return e6.charCodeAt(0) === 46 && t2.push(``), e6.replace(_b, function(e7, n2, r2, i2) {
    t2.push(r2 ? i2.replace(vb, `$1`) : n2 || e7);
  }), t2;
});
function bb(e6) {
  return e6 == null ? `` : rg(e6);
}
var xb = bb;
function Sb(e6, t2) {
  return Qh(e6) ? e6 : hy(e6, t2) ? [e6] : yb(xb(e6));
}
var Cb = Sb, wb = 1 / 0;
function Tb(e6) {
  if (typeof e6 == `string` || Yh(e6)) return e6;
  var t2 = e6 + ``;
  return t2 == `0` && 1 / e6 == -wb ? `-0` : t2;
}
var Eb = Tb;
function Db(e6, t2) {
  t2 = Cb(t2, e6);
  for (var n2 = 0, r2 = t2.length; e6 != null && n2 < r2; ) e6 = e6[Eb(t2[n2++])];
  return n2 && n2 == r2 ? e6 : void 0;
}
var Ob = Db;
function kb(e6, t2, n2) {
  var r2 = e6 == null ? void 0 : Ob(e6, t2);
  return r2 === void 0 ? n2 : r2;
}
var Ab = kb;
function jb(e6, t2) {
  for (var n2 = -1, r2 = t2.length, i2 = e6.length; ++n2 < r2; ) e6[i2 + n2] = t2[n2];
  return e6;
}
var Mb = jb, Nb = Xv(Object.getPrototypeOf, Object);
function Pb() {
  this.__data__ = new qy(), this.size = 0;
}
var Fb = Pb;
function Ib(e6) {
  var t2 = this.__data__, n2 = t2.delete(e6);
  return this.size = t2.size, n2;
}
var Lb = Ib;
function Rb(e6) {
  return this.__data__.get(e6);
}
var zb = Rb;
function Bb(e6) {
  return this.__data__.has(e6);
}
var Vb = Bb, Hb = 200;
function Ub(e6, t2) {
  var n2 = this.__data__;
  if (n2 instanceof qy) {
    var r2 = n2.__data__;
    if (!Jy || r2.length < Hb - 1) return r2.push([e6, t2]), this.size = ++n2.size, this;
    n2 = this.__data__ = new ub(r2);
  }
  return n2.set(e6, t2), this.size = n2.size, this;
}
var Wb = Ub;
function Gb(e6) {
  this.size = (this.__data__ = new qy(e6)).size;
}
Gb.prototype.clear = Fb, Gb.prototype.delete = Lb, Gb.prototype.get = zb, Gb.prototype.has = Vb, Gb.prototype.set = Wb;
var Kb = Gb;
function qb(e6, t2) {
  for (var n2 = -1, r2 = e6 == null ? 0 : e6.length, i2 = 0, a2 = []; ++n2 < r2; ) {
    var o2 = e6[n2];
    t2(o2, n2, e6) && (a2[i2++] = o2);
  }
  return a2;
}
var Jb = qb;
function Yb() {
  return [];
}
var Xb = Yb, Zb = Object.prototype.propertyIsEnumerable, Qb = Object.getOwnPropertySymbols, $b = Qb ? function(e6) {
  return e6 == null ? [] : (e6 = Object(e6), Jb(Qb(e6), function(t2) {
    return Zb.call(e6, t2);
  }));
} : Xb, ex = Object.getOwnPropertySymbols ? function(e6) {
  for (var t2 = []; e6; ) Mb(t2, $b(e6)), e6 = Nb(e6);
  return t2;
} : Xb;
function tx(e6, t2, n2) {
  var r2 = t2(e6);
  return Qh(e6) ? r2 : Mb(r2, n2(e6));
}
var nx = tx;
function rx(e6) {
  return nx(e6, ny, $b);
}
var ix = rx;
function ax(e6) {
  return nx(e6, dy, ex);
}
var ox = ax, sx = Qg(kh, `DataView`), cx = Qg(kh, `Promise`), lx = Qg(kh, `Set`), ux = `[object Map]`, dx = `[object Object]`, fx = `[object Promise]`, px = `[object Set]`, mx = `[object WeakMap]`, hx = `[object DataView]`, gx = zg(sx), _x = zg(Jy), vx = zg(cx), yx = zg(lx), bx = zg($g), xx = Wh;
(sx && xx(new sx(new ArrayBuffer(1))) != hx || Jy && xx(new Jy()) != ux || cx && xx(cx.resolve()) != fx || lx && xx(new lx()) != px || $g && xx(new $g()) != mx) && (xx = function(e6) {
  var t2 = Wh(e6), n2 = t2 == dx ? e6.constructor : void 0, r2 = n2 ? zg(n2) : ``;
  if (r2) switch (r2) {
    case gx:
      return hx;
    case _x:
      return ux;
    case vx:
      return fx;
    case yx:
      return px;
    case bx:
      return mx;
  }
  return t2;
});
var Sx = xx, Cx = kh.Uint8Array, wx = `__lodash_hash_undefined__`;
function Tx(e6) {
  return this.__data__.set(e6, wx), this;
}
var Ex = Tx;
function Dx(e6) {
  return this.__data__.has(e6);
}
var Ox = Dx;
function kx(e6) {
  var t2 = -1, n2 = e6 == null ? 0 : e6.length;
  for (this.__data__ = new ub(); ++t2 < n2; ) this.add(e6[t2]);
}
kx.prototype.add = kx.prototype.push = Ex, kx.prototype.has = Ox;
var Ax = kx;
function jx(e6, t2) {
  for (var n2 = -1, r2 = e6 == null ? 0 : e6.length; ++n2 < r2; ) if (t2(e6[n2], n2, e6)) return true;
  return false;
}
var Mx = jx;
function Nx(e6, t2) {
  return e6.has(t2);
}
var Px = Nx, Fx = 1, Ix = 2;
function Lx(e6, t2, n2, r2, i2, a2) {
  var o2 = n2 & Fx, s2 = e6.length, c2 = t2.length;
  if (s2 != c2 && !(o2 && c2 > s2)) return false;
  var l2 = a2.get(e6), u2 = a2.get(t2);
  if (l2 && u2) return l2 == t2 && u2 == e6;
  var d2 = -1, f2 = true, p2 = n2 & Ix ? new Ax() : void 0;
  for (a2.set(e6, t2), a2.set(t2, e6); ++d2 < s2; ) {
    var m2 = e6[d2], h2 = t2[d2];
    if (r2) var g2 = o2 ? r2(h2, m2, d2, t2, e6, a2) : r2(m2, h2, d2, e6, t2, a2);
    if (g2 !== void 0) {
      if (g2) continue;
      f2 = false;
      break;
    }
    if (p2) {
      if (!Mx(t2, function(e7, t3) {
        if (!Px(p2, t3) && (m2 === e7 || i2(m2, e7, n2, r2, a2))) return p2.push(t3);
      })) {
        f2 = false;
        break;
      }
    } else if (!(m2 === h2 || i2(m2, h2, n2, r2, a2))) {
      f2 = false;
      break;
    }
  }
  return a2.delete(e6), a2.delete(t2), f2;
}
var Rx = Lx;
function zx(e6) {
  var t2 = -1, n2 = Array(e6.size);
  return e6.forEach(function(e7, r2) {
    n2[++t2] = [r2, e7];
  }), n2;
}
var Bx = zx;
function Vx(e6) {
  var t2 = -1, n2 = Array(e6.size);
  return e6.forEach(function(e7) {
    n2[++t2] = e7;
  }), n2;
}
var Hx = Vx, Ux = 1, Wx = 2, Gx = `[object Boolean]`, Kx = `[object Date]`, qx = `[object Error]`, Jx = `[object Map]`, Yx = `[object Number]`, Xx = `[object RegExp]`, Zx = `[object Set]`, Qx = `[object String]`, $x = `[object Symbol]`, eS = `[object ArrayBuffer]`, tS = `[object DataView]`, nS = Ah ? Ah.prototype : void 0, rS = nS ? nS.valueOf : void 0;
function iS(e6, t2, n2, r2, i2, a2, o2) {
  switch (n2) {
    case tS:
      if (e6.byteLength != t2.byteLength || e6.byteOffset != t2.byteOffset) return false;
      e6 = e6.buffer, t2 = t2.buffer;
    case eS:
      return !(e6.byteLength != t2.byteLength || !a2(new Cx(e6), new Cx(t2)));
    case Gx:
    case Kx:
    case Yx:
      return O_(+e6, +t2);
    case qx:
      return e6.name == t2.name && e6.message == t2.message;
    case Xx:
    case Qx:
      return e6 == t2 + ``;
    case Jx:
      var s2 = Bx;
    case Zx:
      var c2 = r2 & Ux;
      if (s2 || (s2 = Hx), e6.size != t2.size && !c2) return false;
      var l2 = o2.get(e6);
      if (l2) return l2 == t2;
      r2 |= Wx, o2.set(e6, t2);
      var u2 = Rx(s2(e6), s2(t2), r2, i2, a2, o2);
      return o2.delete(e6), u2;
    case $x:
      if (rS) return rS.call(e6) == rS.call(t2);
  }
  return false;
}
var aS = iS, oS = 1, sS = Object.prototype.hasOwnProperty;
function cS(e6, t2, n2, r2, i2, a2) {
  var o2 = n2 & oS, s2 = ix(e6), c2 = s2.length;
  if (c2 != ix(t2).length && !o2) return false;
  for (var l2 = c2; l2--; ) {
    var u2 = s2[l2];
    if (!(o2 ? u2 in t2 : sS.call(t2, u2))) return false;
  }
  var d2 = a2.get(e6), f2 = a2.get(t2);
  if (d2 && f2) return d2 == t2 && f2 == e6;
  var p2 = true;
  a2.set(e6, t2), a2.set(t2, e6);
  for (var m2 = o2; ++l2 < c2; ) {
    u2 = s2[l2];
    var h2 = e6[u2], g2 = t2[u2];
    if (r2) var _2 = o2 ? r2(g2, h2, u2, t2, e6, a2) : r2(h2, g2, u2, e6, t2, a2);
    if (!(_2 === void 0 ? h2 === g2 || i2(h2, g2, n2, r2, a2) : _2)) {
      p2 = false;
      break;
    }
    m2 || (m2 = u2 == `constructor`);
  }
  if (p2 && !m2) {
    var v2 = e6.constructor, y2 = t2.constructor;
    v2 != y2 && `constructor` in e6 && `constructor` in t2 && !(typeof v2 == `function` && v2 instanceof v2 && typeof y2 == `function` && y2 instanceof y2) && (p2 = false);
  }
  return a2.delete(e6), a2.delete(t2), p2;
}
var lS = cS, uS = 1, dS = `[object Arguments]`, fS = `[object Array]`, pS = `[object Object]`, mS = Object.prototype.hasOwnProperty;
function hS(e6, t2, n2, r2, i2, a2) {
  var o2 = Qh(e6), s2 = Qh(t2), c2 = o2 ? fS : Sx(e6), l2 = s2 ? fS : Sx(t2);
  c2 = c2 == dS ? pS : c2, l2 = l2 == dS ? pS : l2;
  var u2 = c2 == pS, d2 = l2 == pS, f2 = c2 == l2;
  if (f2 && dv(e6)) {
    if (!dv(t2)) return false;
    o2 = true, u2 = false;
  }
  if (f2 && !u2) return a2 || (a2 = new Kb()), o2 || Gv(e6) ? Rx(e6, t2, n2, r2, i2, a2) : aS(e6, t2, c2, n2, r2, i2, a2);
  if (!(n2 & uS)) {
    var p2 = u2 && mS.call(e6, `__wrapped__`), m2 = d2 && mS.call(t2, `__wrapped__`);
    if (p2 || m2) {
      var h2 = p2 ? e6.value() : e6, g2 = m2 ? t2.value() : t2;
      return a2 || (a2 = new Kb()), i2(h2, g2, n2, r2, a2);
    }
  }
  return f2 ? (a2 || (a2 = new Kb()), lS(e6, t2, n2, r2, i2, a2)) : false;
}
var gS = hS;
function _S(e6, t2, n2, r2, i2) {
  return e6 === t2 ? true : e6 == null || t2 == null || !Kh(e6) && !Kh(t2) ? e6 !== e6 && t2 !== t2 : gS(e6, t2, n2, r2, _S, i2);
}
var vS = _S, yS = 1, bS = 2;
function xS(e6, t2, n2, r2) {
  var i2 = n2.length, a2 = i2, o2 = !r2;
  if (e6 == null) return !a2;
  for (e6 = Object(e6); i2--; ) {
    var s2 = n2[i2];
    if (o2 && s2[2] ? s2[1] !== e6[s2[0]] : !(s2[0] in e6)) return false;
  }
  for (; ++i2 < a2; ) {
    s2 = n2[i2];
    var c2 = s2[0], l2 = e6[c2], u2 = s2[1];
    if (o2 && s2[2]) {
      if (l2 === void 0 && !(c2 in e6)) return false;
    } else {
      var d2 = new Kb();
      if (r2) var f2 = r2(l2, u2, c2, e6, t2, d2);
      if (!(f2 === void 0 ? vS(u2, l2, yS | bS, r2, d2) : f2)) return false;
    }
  }
  return true;
}
var SS = xS;
function CS(e6) {
  return e6 === e6 && !dg(e6);
}
var wS = CS;
function TS(e6) {
  for (var t2 = ny(e6), n2 = t2.length; n2--; ) {
    var r2 = t2[n2], i2 = e6[r2];
    t2[n2] = [r2, i2, wS(i2)];
  }
  return t2;
}
var ES = TS;
function DS(e6, t2) {
  return function(n2) {
    return n2 == null ? false : n2[e6] === t2 && (t2 !== void 0 || e6 in Object(n2));
  };
}
var OS = DS;
function kS(e6) {
  var t2 = ES(e6);
  return t2.length == 1 && t2[0][2] ? OS(t2[0][0], t2[0][1]) : function(n2) {
    return n2 === e6 || SS(n2, e6, t2);
  };
}
var AS = kS;
function jS(e6, t2) {
  return e6 != null && t2 in Object(e6);
}
var MS = jS;
function NS(e6, t2, n2) {
  t2 = Cb(t2, e6);
  for (var r2 = -1, i2 = t2.length, a2 = false; ++r2 < i2; ) {
    var o2 = Eb(t2[r2]);
    if (!(a2 = e6 != null && n2(e6, o2))) break;
    e6 = e6[o2];
  }
  return a2 || ++r2 != i2 ? a2 : (i2 = e6 == null ? 0 : e6.length, !!i2 && V_(i2) && w_(o2, i2) && (Qh(e6) || av(e6)));
}
var PS = NS;
function FS(e6, t2) {
  return e6 != null && PS(e6, t2, MS);
}
var IS = FS, LS = 1, RS = 2;
function zS(e6, t2) {
  return hy(e6) && wS(t2) ? OS(Eb(e6), t2) : function(n2) {
    var r2 = Ab(n2, e6);
    return r2 === void 0 && r2 === t2 ? IS(n2, e6) : vS(t2, r2, LS | RS);
  };
}
var BS = zS;
function VS(e6) {
  return function(t2) {
    return t2 == null ? void 0 : t2[e6];
  };
}
var HS = VS;
function US(e6) {
  return function(t2) {
    return Ob(t2, e6);
  };
}
var WS = US;
function GS(e6) {
  return hy(e6) ? HS(Eb(e6)) : WS(e6);
}
var KS = GS;
function qS(e6) {
  return typeof e6 == `function` ? e6 : e6 == null ? Eg : typeof e6 == `object` ? Qh(e6) ? BS(e6[0], e6[1]) : AS(e6) : KS(e6);
}
var JS = qS;
function YS(e6) {
  return function(t2, n2, r2) {
    for (var i2 = -1, a2 = Object(t2), o2 = r2(t2), s2 = o2.length; s2--; ) {
      var c2 = o2[e6 ? s2 : ++i2];
      if (n2(a2[c2], c2, a2) === false) break;
    }
    return t2;
  };
}
var XS = YS();
function ZS(e6, t2) {
  return e6 && XS(e6, t2, ny);
}
var QS = ZS;
function $S(e6, t2) {
  return function(n2, r2) {
    if (n2 == null) return n2;
    if (!U_(n2)) return e6(n2, r2);
    for (var i2 = n2.length, a2 = t2 ? i2 : -1, o2 = Object(n2); (t2 ? a2-- : ++a2 < i2) && r2(o2[a2], a2, o2) !== false; ) ;
    return n2;
  };
}
var eC = $S(QS);
function tC(e6) {
  return typeof e6 == `function` ? e6 : Eg;
}
var nC = tC;
function rC(e6, t2) {
  return (Qh(e6) ? f_ : eC)(e6, nC(t2));
}
var iC = rC;
function aC(e6, t2) {
  for (var n2 = -1, r2 = e6 == null ? 0 : e6.length; ++n2 < r2; ) if (!t2(e6[n2], n2, e6)) return false;
  return true;
}
var oC = aC;
function sC(e6, t2) {
  var n2 = true;
  return eC(e6, function(e7, r2, i2) {
    return n2 = !!t2(e7, r2, i2), n2;
  }), n2;
}
var cC = sC;
function lC(e6, t2, n2) {
  var r2 = Qh(e6) ? oC : cC;
  return n2 && G_(e6, t2, n2) && (t2 = void 0), r2(e6, JS(t2, 3));
}
var uC = lC;
function dC(e6, t2) {
  var n2 = -1, r2 = U_(e6) ? Array(e6.length) : [];
  return eC(e6, function(e7, i2, a2) {
    r2[++n2] = t2(e7, i2, a2);
  }), r2;
}
var fC = dC;
function pC(e6, t2) {
  return (Qh(e6) ? Zh : fC)(e6, JS(t2, 3));
}
var mC = pC, hC = `[object String]`;
function gC(e6) {
  return typeof e6 == `string` || !Qh(e6) && Kh(e6) && Wh(e6) == hC;
}
var _C = gC;
function vC(e6, t2) {
  return Zh(t2, function(t3) {
    return e6[t3];
  });
}
var yC = vC;
function bC(e6) {
  return e6 == null ? [] : yC(e6, ny(e6));
}
var xC = bC, SC = Math.max;
function CC(e6, t2, n2, r2) {
  e6 = U_(e6) ? e6 : xC(e6), n2 = n2 && !r2 ? wg(n2) : 0;
  var i2 = e6.length;
  return n2 < 0 && (n2 = SC(i2 + n2, 0)), _C(e6) ? n2 <= i2 && e6.indexOf(t2, n2) > -1 : !!i2 && b_(e6, t2, n2) > -1;
}
var wC = CC, TC = `[object RegExp]`;
function EC(e6) {
  return Kh(e6) && Wh(e6) == TC;
}
var DC = EC, OC = Uv && Uv.isRegExp, kC = OC ? zv(OC) : DC;
function AC(e6, t2, n2, r2) {
  if (!dg(e6)) return e6;
  t2 = Cb(t2, e6);
  for (var i2 = -1, a2 = t2.length, o2 = a2 - 1, s2 = e6; s2 != null && ++i2 < a2; ) {
    var c2 = Eb(t2[i2]), l2 = n2;
    if (c2 === `__proto__` || c2 === `constructor` || c2 === `prototype`) return e6;
    if (i2 != o2) {
      var u2 = s2[c2];
      l2 = r2 ? r2(u2, c2, s2) : void 0, l2 === void 0 && (l2 = dg(u2) ? u2 : w_(t2[i2 + 1]) ? [] : {});
    }
    j_(s2, c2, l2), s2 = s2[c2];
  }
  return e6;
}
var jC = AC;
function MC(e6, t2, n2) {
  for (var r2 = -1, i2 = t2.length, a2 = {}; ++r2 < i2; ) {
    var o2 = t2[r2], s2 = Ob(e6, o2);
    n2(s2, o2) && jC(a2, Cb(o2, e6), s2);
  }
  return a2;
}
var NC = MC;
function PC(e6, t2) {
  if (e6 == null) return {};
  var n2 = Zh(ox(e6), function(e7) {
    return [e7];
  });
  return t2 = JS(t2), NC(e6, n2, function(e7, n3) {
    return t2(e7, n3[0]);
  });
}
var FC = PC;
function IC(e6, t2) {
  var n2;
  return eC(e6, function(e7, r2, i2) {
    return n2 = t2(e7, r2, i2), !n2;
  }), !!n2;
}
var LC = IC;
function RC(e6, t2, n2) {
  var r2 = Qh(e6) ? Mx : LC;
  return n2 && G_(e6, t2, n2) && (t2 = void 0), r2(e6, JS(t2, 3));
}
var zC = RC;
function BC(e6) {
  return VC(e6) ? e6.LABEL : e6.name;
}
function VC(e6) {
  return _C(e6.LABEL) && e6.LABEL !== ``;
}
var HC = class {
  get definition() {
    return this._definition;
  }
  set definition(e6) {
    this._definition = e6;
  }
  constructor(e6) {
    this._definition = e6;
  }
  accept(e6) {
    e6.visit(this), iC(this.definition, (t2) => {
      t2.accept(e6);
    });
  }
}, L = class extends HC {
  constructor(e6) {
    super([]), this.idx = 1, iy(this, FC(e6, (e7) => e7 !== void 0));
  }
  set definition(e6) {
  }
  get definition() {
    return this.referencedRule === void 0 ? [] : this.referencedRule.definition;
  }
  accept(e6) {
    e6.visit(this);
  }
}, UC = class extends HC {
  constructor(e6) {
    super(e6.definition), this.orgText = ``, iy(this, FC(e6, (e7) => e7 !== void 0));
  }
}, WC = class extends HC {
  constructor(e6) {
    super(e6.definition), this.ignoreAmbiguities = false, iy(this, FC(e6, (e7) => e7 !== void 0));
  }
}, R = class extends HC {
  constructor(e6) {
    super(e6.definition), this.idx = 1, iy(this, FC(e6, (e7) => e7 !== void 0));
  }
}, GC = class extends HC {
  constructor(e6) {
    super(e6.definition), this.idx = 1, iy(this, FC(e6, (e7) => e7 !== void 0));
  }
}, KC = class extends HC {
  constructor(e6) {
    super(e6.definition), this.idx = 1, iy(this, FC(e6, (e7) => e7 !== void 0));
  }
}, z = class extends HC {
  constructor(e6) {
    super(e6.definition), this.idx = 1, iy(this, FC(e6, (e7) => e7 !== void 0));
  }
}, qC = class extends HC {
  constructor(e6) {
    super(e6.definition), this.idx = 1, iy(this, FC(e6, (e7) => e7 !== void 0));
  }
}, B = class extends HC {
  get definition() {
    return this._definition;
  }
  set definition(e6) {
    this._definition = e6;
  }
  constructor(e6) {
    super(e6.definition), this.idx = 1, this.ignoreAmbiguities = false, this.hasPredicates = false, iy(this, FC(e6, (e7) => e7 !== void 0));
  }
}, V = class {
  constructor(e6) {
    this.idx = 1, iy(this, FC(e6, (e7) => e7 !== void 0));
  }
  accept(e6) {
    e6.visit(this);
  }
};
function JC(e6) {
  return mC(e6, YC);
}
function YC(e6) {
  function t2(e7) {
    return mC(e7, YC);
  }
  if (e6 instanceof L) {
    let t3 = { type: `NonTerminal`, name: e6.nonTerminalName, idx: e6.idx };
    return _C(e6.label) && (t3.label = e6.label), t3;
  } else if (e6 instanceof WC) return { type: `Alternative`, definition: t2(e6.definition) };
  else if (e6 instanceof R) return { type: `Option`, idx: e6.idx, definition: t2(e6.definition) };
  else if (e6 instanceof GC) return { type: `RepetitionMandatory`, idx: e6.idx, definition: t2(e6.definition) };
  else if (e6 instanceof KC) return { type: `RepetitionMandatoryWithSeparator`, idx: e6.idx, separator: YC(new V({ terminalType: e6.separator })), definition: t2(e6.definition) };
  else if (e6 instanceof qC) return { type: `RepetitionWithSeparator`, idx: e6.idx, separator: YC(new V({ terminalType: e6.separator })), definition: t2(e6.definition) };
  else if (e6 instanceof z) return { type: `Repetition`, idx: e6.idx, definition: t2(e6.definition) };
  else if (e6 instanceof B) return { type: `Alternation`, idx: e6.idx, definition: t2(e6.definition) };
  else if (e6 instanceof V) {
    let t3 = { type: `Terminal`, name: e6.terminalType.name, label: BC(e6.terminalType), idx: e6.idx };
    _C(e6.label) && (t3.terminalLabel = e6.label);
    let n2 = e6.terminalType.PATTERN;
    return e6.terminalType.PATTERN && (t3.pattern = kC(n2) ? n2.source : n2), t3;
  } else if (e6 instanceof UC) return { type: `Rule`, name: e6.name, orgText: e6.orgText, definition: t2(e6.definition) };
  else throw Error(`non exhaustive match`);
}
var XC = class {
  visit(e6) {
    let t2 = e6;
    switch (t2.constructor) {
      case L:
        return this.visitNonTerminal(t2);
      case WC:
        return this.visitAlternative(t2);
      case R:
        return this.visitOption(t2);
      case GC:
        return this.visitRepetitionMandatory(t2);
      case KC:
        return this.visitRepetitionMandatoryWithSeparator(t2);
      case qC:
        return this.visitRepetitionWithSeparator(t2);
      case z:
        return this.visitRepetition(t2);
      case B:
        return this.visitAlternation(t2);
      case V:
        return this.visitTerminal(t2);
      case UC:
        return this.visitRule(t2);
      default:
        throw Error(`non exhaustive match`);
    }
  }
  visitNonTerminal(e6) {
  }
  visitAlternative(e6) {
  }
  visitOption(e6) {
  }
  visitRepetition(e6) {
  }
  visitRepetitionMandatory(e6) {
  }
  visitRepetitionMandatoryWithSeparator(e6) {
  }
  visitRepetitionWithSeparator(e6) {
  }
  visitAlternation(e6) {
  }
  visitTerminal(e6) {
  }
  visitRule(e6) {
  }
};
function ZC(e6) {
  return e6 instanceof WC || e6 instanceof R || e6 instanceof z || e6 instanceof GC || e6 instanceof KC || e6 instanceof qC || e6 instanceof V || e6 instanceof UC;
}
function QC(e6, t2 = []) {
  return e6 instanceof R || e6 instanceof z || e6 instanceof qC ? true : e6 instanceof B ? zC(e6.definition, (e7) => QC(e7, t2)) : e6 instanceof L && wC(t2, e6) ? false : e6 instanceof HC ? (e6 instanceof L && t2.push(e6), uC(e6.definition, (e7) => QC(e7, t2))) : false;
}
function $C(e6) {
  return e6 instanceof B;
}
function ew(e6) {
  if (e6 instanceof L) return `SUBRULE`;
  if (e6 instanceof R) return `OPTION`;
  if (e6 instanceof B) return `OR`;
  if (e6 instanceof GC) return `AT_LEAST_ONE`;
  if (e6 instanceof KC) return `AT_LEAST_ONE_SEP`;
  if (e6 instanceof qC) return `MANY_SEP`;
  if (e6 instanceof z) return `MANY`;
  if (e6 instanceof V) return `CONSUME`;
  throw Error(`non exhaustive match`);
}
var tw = class {
  walk(e6, t2 = []) {
    j(e6.definition, (n2, r2) => {
      let i2 = A(e6.definition, r2 + 1);
      if (n2 instanceof L) this.walkProdRef(n2, i2, t2);
      else if (n2 instanceof V) this.walkTerminal(n2, i2, t2);
      else if (n2 instanceof WC) this.walkFlat(n2, i2, t2);
      else if (n2 instanceof R) this.walkOption(n2, i2, t2);
      else if (n2 instanceof GC) this.walkAtLeastOne(n2, i2, t2);
      else if (n2 instanceof KC) this.walkAtLeastOneSep(n2, i2, t2);
      else if (n2 instanceof qC) this.walkManySep(n2, i2, t2);
      else if (n2 instanceof z) this.walkMany(n2, i2, t2);
      else if (n2 instanceof B) this.walkOr(n2, i2, t2);
      else throw Error(`non exhaustive match`);
    });
  }
  walkTerminal(e6, t2, n2) {
  }
  walkProdRef(e6, t2, n2) {
  }
  walkFlat(e6, t2, n2) {
    let r2 = t2.concat(n2);
    this.walk(e6, r2);
  }
  walkOption(e6, t2, n2) {
    let r2 = t2.concat(n2);
    this.walk(e6, r2);
  }
  walkAtLeastOne(e6, t2, n2) {
    let r2 = [new R({ definition: e6.definition })].concat(t2, n2);
    this.walk(e6, r2);
  }
  walkAtLeastOneSep(e6, t2, n2) {
    let r2 = nw(e6, t2, n2);
    this.walk(e6, r2);
  }
  walkMany(e6, t2, n2) {
    let r2 = [new R({ definition: e6.definition })].concat(t2, n2);
    this.walk(e6, r2);
  }
  walkManySep(e6, t2, n2) {
    let r2 = nw(e6, t2, n2);
    this.walk(e6, r2);
  }
  walkOr(e6, t2, n2) {
    let r2 = t2.concat(n2);
    j(e6.definition, (e7) => {
      let t3 = new WC({ definition: [e7] });
      this.walk(t3, r2);
    });
  }
};
function nw(e6, t2, n2) {
  return [new R({ definition: [new V({ terminalType: e6.separator })].concat(e6.definition) })].concat(t2, n2);
}
function rw(e6) {
  if (e6 instanceof L) return rw(e6.referencedRule);
  if (e6 instanceof V) return ow(e6);
  if (ZC(e6)) return iw(e6);
  if ($C(e6)) return aw(e6);
  throw Error(`non exhaustive match`);
}
function iw(e6) {
  let t2 = [], n2 = e6.definition, r2 = 0, i2 = n2.length > r2, a2, o2 = true;
  for (; i2 && o2; ) a2 = n2[r2], o2 = QC(a2), t2 = t2.concat(rw(a2)), r2 += 1, i2 = n2.length > r2;
  return Sh(t2);
}
function aw(e6) {
  return Sh(fl(M(e6.definition, (e7) => rw(e7))));
}
function ow(e6) {
  return [e6.terminalType];
}
const sw = `_~IN~_`;
var cw = class extends tw {
  constructor(e6) {
    super(), this.topProd = e6, this.follows = {};
  }
  startWalking() {
    return this.walk(this.topProd), this.follows;
  }
  walkTerminal(e6, t2, n2) {
  }
  walkProdRef(e6, t2, n2) {
    let r2 = uw(e6.referencedRule, e6.idx) + this.topProd.name, i2 = rw(new WC({ definition: t2.concat(n2) }));
    this.follows[r2] = i2;
  }
};
function lw(e6) {
  let t2 = {};
  return j(e6, (e7) => {
    js(t2, new cw(e7).startWalking());
  }), t2;
}
function uw(e6, t2) {
  return e6.name + t2 + sw;
}
var dw = {}, fw = new qn();
function pw(e6) {
  let t2 = e6.toString();
  if (dw.hasOwnProperty(t2)) return dw[t2];
  {
    let e7 = fw.pattern(t2);
    return dw[t2] = e7, e7;
  }
}
function mw() {
  dw = {};
}
var hw = `Complement Sets are not supported for first char optimization`;
const gw = `Unable to use "first char" lexer optimizations:
`;
function _w(e6, t2 = false) {
  try {
    let t3 = pw(e6);
    return vw(t3.value, {}, t3.flags.ignoreCase);
  } catch (n2) {
    if (n2.message === hw) t2 && wh(`${gw}	Unable to optimize: < ${e6.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
    else {
      let n3 = ``;
      t2 && (n3 = `
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`), Ch(`${gw}
	Failed parsing: < ${e6.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues` + n3);
    }
  }
  return [];
}
function vw(e6, t2, n2) {
  switch (e6.type) {
    case `Disjunction`:
      for (let r3 = 0; r3 < e6.value.length; r3++) vw(e6.value[r3], t2, n2);
      break;
    case `Alternative`:
      let r2 = e6.value;
      for (let e7 = 0; e7 < r2.length; e7++) {
        let i2 = r2[e7];
        switch (i2.type) {
          case `EndAnchor`:
          case `GroupBackReference`:
          case `Lookahead`:
          case `NegativeLookahead`:
          case `StartAnchor`:
          case `WordBoundary`:
          case `NonWordBoundary`:
            continue;
        }
        let a2 = i2;
        switch (a2.type) {
          case `Character`:
            yw(a2.value, t2, n2);
            break;
          case `Set`:
            if (a2.complement === true) throw Error(hw);
            j(a2.value, (e8) => {
              if (typeof e8 == `number`) yw(e8, t2, n2);
              else {
                let r3 = e8;
                if (n2 === true) for (let e9 = r3.from; e9 <= r3.to; e9++) yw(e9, t2, n2);
                else {
                  for (let e9 = r3.from; e9 <= r3.to && e9 < 256; e9++) yw(e9, t2, n2);
                  if (r3.to >= 256) {
                    let e9 = r3.from >= 256 ? r3.from : 256, n3 = r3.to, i3 = iT(e9), a3 = iT(n3);
                    for (let e10 = i3; e10 <= a3; e10++) t2[e10] = e10;
                  }
                }
              }
            });
            break;
          case `Group`:
            vw(a2.value, t2, n2);
            break;
          default:
            throw Error(`Non Exhaustive Match`);
        }
        let o2 = a2.quantifier !== void 0 && a2.quantifier.atLeast === 0;
        if (a2.type === `Group` && Sw(a2) === false || a2.type !== `Group` && o2 === false) break;
      }
      break;
    default:
      throw Error(`non exhaustive match!`);
  }
  return P(t2);
}
function yw(e6, t2, n2) {
  let r2 = iT(e6);
  t2[r2] = r2, n2 === true && bw(e6, t2);
}
function bw(e6, t2) {
  let n2 = String.fromCharCode(e6), r2 = n2.toUpperCase();
  if (r2 !== n2) {
    let e7 = iT(r2.charCodeAt(0));
    t2[e7] = e7;
  } else {
    let e7 = n2.toLowerCase();
    if (e7 !== n2) {
      let n3 = iT(e7.charCodeAt(0));
      t2[n3] = n3;
    }
  }
}
function xw(e6, t2) {
  return hm(e6.value, (e7) => {
    if (typeof e7 == `number`) return Lm(t2, e7);
    {
      let n2 = e7;
      return hm(t2, (e8) => n2.from <= e8 && e8 <= n2.to) !== void 0;
    }
  });
}
function Sw(e6) {
  let t2 = e6.quantifier;
  return t2 && t2.atLeast === 0 ? true : e6.value ? T(e6.value) ? om(e6.value, Sw) : Sw(e6.value) : false;
}
var Cw = class extends Jn {
  constructor(e6) {
    super(), this.targetCharCodes = e6, this.found = false;
  }
  visitChildren(e6) {
    if (this.found !== true) {
      switch (e6.type) {
        case `Lookahead`:
          this.visitLookahead(e6);
          return;
        case `NegativeLookahead`:
          this.visitNegativeLookahead(e6);
          return;
      }
      super.visitChildren(e6);
    }
  }
  visitCharacter(e6) {
    Lm(this.targetCharCodes, e6.value) && (this.found = true);
  }
  visitSet(e6) {
    e6.complement ? xw(e6, this.targetCharCodes) === void 0 && (this.found = true) : xw(e6, this.targetCharCodes) !== void 0 && (this.found = true);
  }
};
function ww(e6, t2) {
  if (t2 instanceof RegExp) {
    let n2 = pw(t2), r2 = new Cw(e6);
    return r2.visit(n2), r2.found;
  } else return hm(t2, (t3) => Lm(e6, t3.charCodeAt(0))) !== void 0;
}
var Tw = `PATTERN`;
const Ew = `defaultMode`;
let Dw = typeof RegExp(`(?:)`).sticky == `boolean`;
function Ow(e6, t2) {
  t2 = Rp(t2, { useSticky: Dw, debug: false, safeMode: false, positionTracking: `full`, lineTerminatorCharacters: [`\r`, `
`], tracer: (e7, t3) => t3() });
  let n2 = t2.tracer;
  n2(`initCharCodeToOptimizedIndexMap`, () => {
    aT();
  });
  let r2;
  n2(`Reject Lexer.NA`, () => {
    r2 = fh(e6, (e7) => e7[Tw] === U.NA);
  });
  let i2 = false, a2;
  n2(`Transform Patterns`, () => {
    i2 = false, a2 = M(r2, (e7) => {
      let n3 = e7[Tw];
      if (Ym(n3)) {
        let e8 = n3.source;
        return e8.length === 1 && e8 !== `^` && e8 !== `$` && e8 !== `.` && !n3.ignoreCase ? e8 : e8.length === 2 && e8[0] === `\\` && !Lm([`d`, `D`, `s`, `S`, `t`, `r`, `n`, `t`, `0`, `c`, `b`, `B`, `f`, `v`, `w`, `W`], e8[1]) ? e8[1] : t2.useSticky ? Kw(n3) : Gw(n3);
      } else if (Zi(n3)) return i2 = true, { exec: n3 };
      else if (typeof n3 == `object`) return i2 = true, n3;
      else if (typeof n3 == `string`) {
        if (n3.length === 1) return n3;
        {
          let e8 = n3.replace(/[\\^$.*+?()[\]{}|]/g, `\\$&`), r3 = new RegExp(e8);
          return t2.useSticky ? Kw(r3) : Gw(r3);
        }
      } else throw Error(`non exhaustive match`);
    });
  });
  let o2, s2, c2, l2, u2;
  n2(`misc mapping`, () => {
    o2 = M(r2, (e7) => e7.tokenTypeIdx), s2 = M(r2, (e7) => {
      let t3 = e7.GROUP;
      if (t3 !== U.SKIPPED) {
        if (jm(t3)) return t3;
        if (Zm(t3)) return false;
        throw Error(`non exhaustive match`);
      }
    }), c2 = M(r2, (e7) => {
      let t3 = e7.LONGER_ALT;
      if (t3) return T(t3) ? M(t3, (e8) => Bm(r2, e8)) : [Bm(r2, t3)];
    }), l2 = M(r2, (e7) => e7.PUSH_MODE), u2 = M(r2, (e7) => N(e7, `POP_MODE`));
  });
  let d2;
  n2(`Line Terminator Handling`, () => {
    let e7 = tT(t2.lineTerminatorCharacters);
    d2 = M(r2, (e8) => false), t2.positionTracking !== `onlyOffset` && (d2 = M(r2, (t3) => N(t3, `LINE_BREAKS`) ? !!t3.LINE_BREAKS : $w(t3, e7) === false && ww(e7, t3.PATTERN)));
  });
  let f2, p2, m2, h2;
  n2(`Misc Mapping #2`, () => {
    f2 = M(r2, Xw), p2 = M(a2, Zw), m2 = uh(r2, (e7, t3) => {
      let n3 = t3.GROUP;
      return jm(n3) && n3 !== U.SKIPPED && (e7[n3] = []), e7;
    }, {}), h2 = M(a2, (e7, t3) => ({ pattern: a2[t3], longerAlt: c2[t3], canLineTerminator: d2[t3], isCustom: f2[t3], short: p2[t3], group: s2[t3], push: l2[t3], pop: u2[t3], tokenTypeIdx: o2[t3], tokenType: r2[t3] }));
  });
  let g2 = true, _2 = [];
  return t2.safeMode || n2(`First Char Optimization`, () => {
    _2 = uh(r2, (e7, n3, r3) => {
      if (typeof n3.PATTERN == `string`) nT(e7, iT(n3.PATTERN.charCodeAt(0)), h2[r3]);
      else if (T(n3.START_CHARS_HINT)) {
        let t3;
        j(n3.START_CHARS_HINT, (n4) => {
          let i3 = iT(typeof n4 == `string` ? n4.charCodeAt(0) : n4);
          t3 !== i3 && (t3 = i3, nT(e7, i3, h2[r3]));
        });
      } else if (Ym(n3.PATTERN)) if (n3.PATTERN.unicode) g2 = false, t2.ensureOptimizations && Ch(`${gw}	Unable to analyze < ${n3.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);
      else {
        let i3 = _w(n3.PATTERN, t2.ensureOptimizations);
        F(i3) && (g2 = false), j(i3, (t3) => {
          nT(e7, t3, h2[r3]);
        });
      }
      else t2.ensureOptimizations && Ch(`${gw}	TokenType: <${n3.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`), g2 = false;
      return e7;
    }, []);
  }), { emptyGroups: m2, patternIdxToConfig: h2, charCodeToPatternIdxToConfig: _2, hasCustom: i2, canBeOptimized: g2 };
}
function kw(e6, t2) {
  let n2 = [], r2 = jw(e6);
  n2 = n2.concat(r2.errors);
  let i2 = Mw(r2.valid), a2 = i2.valid;
  return n2 = n2.concat(i2.errors), n2 = n2.concat(Aw(a2)), n2 = n2.concat(Bw(a2)), n2 = n2.concat(Vw(a2, t2)), n2 = n2.concat(Hw(a2)), n2;
}
function Aw(e6) {
  let t2 = [], n2 = um(e6, (e7) => Ym(e7[Tw]));
  return t2 = t2.concat(Pw(n2)), t2 = t2.concat(Lw(n2)), t2 = t2.concat(Rw(n2)), t2 = t2.concat(zw(n2)), t2 = t2.concat(Fw(n2)), t2;
}
function jw(e6) {
  let t2 = um(e6, (e7) => !N(e7, Tw));
  return { errors: M(t2, (e7) => ({ message: `Token Type: ->` + e7.name + `<- missing static 'PATTERN' property`, type: H.MISSING_PATTERN, tokenTypes: [e7] })), valid: Kp(e6, t2) };
}
function Mw(e6) {
  let t2 = um(e6, (e7) => {
    let t3 = e7[Tw];
    return !Ym(t3) && !Zi(t3) && !N(t3, `exec`) && !jm(t3);
  });
  return { errors: M(t2, (e7) => ({ message: `Token Type: ->` + e7.name + `<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.`, type: H.INVALID_PATTERN, tokenTypes: [e7] })), valid: Kp(e6, t2) };
}
var Nw = /[^\\][$]/;
function Pw(e6) {
  class t2 extends Jn {
    constructor() {
      super(...arguments), this.found = false;
    }
    visitEndAnchor(e7) {
      this.found = true;
    }
  }
  return M(um(e6, (e7) => {
    let n2 = e7.PATTERN;
    try {
      let e8 = pw(n2), r2 = new t2();
      return r2.visit(e8), r2.found;
    } catch {
      return Nw.test(n2.source);
    }
  }), (e7) => ({ message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + e7.name + `<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`, type: H.EOI_ANCHOR_FOUND, tokenTypes: [e7] }));
}
function Fw(e6) {
  return M(um(e6, (e7) => e7.PATTERN.test(``)), (e7) => ({ message: `Token Type: ->` + e7.name + `<- static 'PATTERN' must not match an empty string`, type: H.EMPTY_MATCH_PATTERN, tokenTypes: [e7] }));
}
var Iw = /[^\\[][\^]|^\^/;
function Lw(e6) {
  class t2 extends Jn {
    constructor() {
      super(...arguments), this.found = false;
    }
    visitStartAnchor(e7) {
      this.found = true;
    }
  }
  return M(um(e6, (e7) => {
    let n2 = e7.PATTERN;
    try {
      let e8 = pw(n2), r2 = new t2();
      return r2.visit(e8), r2.found;
    } catch {
      return Iw.test(n2.source);
    }
  }), (e7) => ({ message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + e7.name + `<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`, type: H.SOI_ANCHOR_FOUND, tokenTypes: [e7] }));
}
function Rw(e6) {
  return M(um(e6, (e7) => {
    let t2 = e7[Tw];
    return t2 instanceof RegExp && (t2.multiline || t2.global);
  }), (e7) => ({ message: `Token Type: ->` + e7.name + `<- static 'PATTERN' may NOT contain global('g') or multiline('m')`, type: H.UNSUPPORTED_FLAGS_FOUND, tokenTypes: [e7] }));
}
function zw(e6) {
  let t2 = [], n2 = M(e6, (n3) => uh(e6, (e7, r2) => n3.PATTERN.source === r2.PATTERN.source && !Lm(t2, r2) && r2.PATTERN !== U.NA ? (t2.push(r2), e7.push(r2), e7) : e7, []));
  return n2 = Zd(n2), M(um(n2, (e7) => e7.length > 1), (e7) => {
    let t3 = M(e7, (e8) => e8.name);
    return { message: `The same RegExp pattern ->${_m(e7).PATTERN}<-has been used in all of the following Token Types: ${t3.join(`, `)} <-`, type: H.DUPLICATE_PATTERNS_FOUND, tokenTypes: e7 };
  });
}
function Bw(e6) {
  return M(um(e6, (e7) => {
    if (!N(e7, `GROUP`)) return false;
    let t2 = e7.GROUP;
    return t2 !== U.SKIPPED && t2 !== U.NA && !jm(t2);
  }), (e7) => ({ message: `Token Type: ->` + e7.name + `<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String`, type: H.INVALID_GROUP_TYPE_FOUND, tokenTypes: [e7] }));
}
function Vw(e6, t2) {
  return M(um(e6, (e7) => e7.PUSH_MODE !== void 0 && !Lm(t2, e7.PUSH_MODE)), (e7) => ({ message: `Token Type: ->${e7.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${e7.PUSH_MODE}<-which does not exist`, type: H.PUSH_MODE_DOES_NOT_EXIST, tokenTypes: [e7] }));
}
function Hw(e6) {
  let t2 = [], n2 = uh(e6, (e7, t3, n3) => {
    let r2 = t3.PATTERN;
    return r2 === U.NA || (jm(r2) ? e7.push({ str: r2, idx: n3, tokenType: t3 }) : Ym(r2) && Ww(r2) && e7.push({ str: r2.source, idx: n3, tokenType: t3 })), e7;
  }, []);
  return j(e6, (e7, r2) => {
    j(n2, ({ str: n3, idx: i2, tokenType: a2 }) => {
      if (r2 < i2 && Uw(n3, e7.PATTERN)) {
        let n4 = `Token: ->${a2.name}<- can never be matched.
Because it appears AFTER the Token Type ->${e7.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
        t2.push({ message: n4, type: H.UNREACHABLE_PATTERN, tokenTypes: [e7, a2] });
      }
    });
  }), t2;
}
function Uw(e6, t2) {
  if (Ym(t2)) {
    let n2 = t2.exec(e6);
    return n2 !== null && n2.index === 0;
  } else if (Zi(t2)) return t2(e6, 0, [], {});
  else if (N(t2, `exec`)) return t2.exec(e6, 0, [], {});
  else if (typeof t2 == `string`) return t2 === e6;
  else throw Error(`non exhaustive match`);
}
function Ww(e6) {
  return hm([`.`, `\\`, `[`, `]`, `|`, `^`, `$`, `(`, `)`, `?`, `*`, `+`, `{`], (t2) => e6.source.indexOf(t2) !== -1) === void 0;
}
function Gw(e6) {
  let t2 = e6.ignoreCase ? `i` : ``;
  return RegExp(`^(?:${e6.source})`, t2);
}
function Kw(e6) {
  let t2 = e6.ignoreCase ? `iy` : `y`;
  return RegExp(`${e6.source}`, t2);
}
function qw(e6, t2, n2) {
  let r2 = [];
  return N(e6, `defaultMode`) || r2.push({ message: `A MultiMode Lexer cannot be initialized without a <` + Ew + `> property in its definition
`, type: H.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE }), N(e6, `modes`) || r2.push({ message: `A MultiMode Lexer cannot be initialized without a <modes> property in its definition
`, type: H.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY }), N(e6, `modes`) && N(e6, `defaultMode`) && !N(e6.modes, e6.defaultMode) && r2.push({ message: `A MultiMode Lexer cannot be initialized with a ${Ew}: <${e6.defaultMode}>which does not exist
`, type: H.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST }), N(e6, `modes`) && j(e6.modes, (e7, t3) => {
    j(e7, (n3, i2) => {
      Zm(n3) ? r2.push({ message: `A Lexer cannot be initialized using an undefined Token Type. Mode:<${t3}> at index: <${i2}>
`, type: H.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED }) : N(n3, `LONGER_ALT`) && j(T(n3.LONGER_ALT) ? n3.LONGER_ALT : [n3.LONGER_ALT], (i3) => {
        !Zm(i3) && !Lm(e7, i3) && r2.push({ message: `A MultiMode Lexer cannot be initialized with a longer_alt <${i3.name}> on token <${n3.name}> outside of mode <${t3}>
`, type: H.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE });
      });
    });
  }), r2;
}
function Jw(e6, t2, n2) {
  let r2 = [], i2 = false, a2 = fh(Zd(fl(P(e6.modes))), (e7) => e7[Tw] === U.NA), o2 = tT(n2);
  return t2 && j(a2, (e7) => {
    let t3 = $w(e7, o2);
    if (t3 !== false) {
      let n3 = { message: eT(e7, t3), type: t3.issue, tokenType: e7 };
      r2.push(n3);
    } else N(e7, `LINE_BREAKS`) ? e7.LINE_BREAKS === true && (i2 = true) : ww(o2, e7.PATTERN) && (i2 = true);
  }), t2 && !i2 && r2.push({ message: `Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`, type: H.NO_LINE_BREAKS_FLAGS }), r2;
}
function Yw(e6) {
  let t2 = {};
  return j(ks(e6), (n2) => {
    let r2 = e6[n2];
    if (T(r2)) t2[n2] = [];
    else throw Error(`non exhaustive match`);
  }), t2;
}
function Xw(e6) {
  let t2 = e6.PATTERN;
  if (Ym(t2)) return false;
  if (Zi(t2) || N(t2, `exec`)) return true;
  if (jm(t2)) return false;
  throw Error(`non exhaustive match`);
}
function Zw(e6) {
  return jm(e6) && e6.length === 1 ? e6.charCodeAt(0) : false;
}
const Qw = { test: function(e6) {
  let t2 = e6.length;
  for (let n2 = this.lastIndex; n2 < t2; n2++) {
    let t3 = e6.charCodeAt(n2);
    if (t3 === 10) return this.lastIndex = n2 + 1, true;
    if (t3 === 13) return e6.charCodeAt(n2 + 1) === 10 ? this.lastIndex = n2 + 2 : this.lastIndex = n2 + 1, true;
  }
  return false;
}, lastIndex: 0 };
function $w(e6, t2) {
  if (N(e6, `LINE_BREAKS`)) return false;
  if (Ym(e6.PATTERN)) {
    try {
      ww(t2, e6.PATTERN);
    } catch (e7) {
      return { issue: H.IDENTIFY_TERMINATOR, errMsg: e7.message };
    }
    return false;
  } else if (jm(e6.PATTERN)) return false;
  else if (Xw(e6)) return { issue: H.CUSTOM_LINE_BREAK };
  else throw Error(`non exhaustive match`);
}
function eT(e6, t2) {
  if (t2.issue === H.IDENTIFY_TERMINATOR) return `Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${e6.name}> Token Type
	 Root cause: ${t2.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
  if (t2.issue === H.CUSTOM_LINE_BREAK) return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${e6.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
  throw Error(`non exhaustive match`);
}
function tT(e6) {
  return M(e6, (e7) => jm(e7) ? e7.charCodeAt(0) : e7);
}
function nT(e6, t2, n2) {
  e6[t2] === void 0 ? e6[t2] = [n2] : e6[t2].push(n2);
}
var rT = [];
function iT(e6) {
  return e6 < 256 ? e6 : rT[e6];
}
function aT() {
  if (F(rT)) {
    rT = Array(65536);
    for (let e6 = 0; e6 < 65536; e6++) rT[e6] = e6 > 255 ? 255 + ~~(e6 / 255) : e6;
  }
}
function oT(e6, t2) {
  let n2 = e6.tokenTypeIdx;
  return n2 === t2.tokenTypeIdx ? true : t2.isParent === true && t2.categoryMatchesMap[n2] === true;
}
function sT(e6, t2) {
  return e6.tokenTypeIdx === t2.tokenTypeIdx;
}
let cT = 1;
const lT = {};
function uT(e6) {
  let t2 = dT(e6);
  fT(t2), mT(t2), pT(t2), j(t2, (e7) => {
    e7.isParent = e7.categoryMatches.length > 0;
  });
}
function dT(e6) {
  let t2 = k(e6), n2 = e6, r2 = true;
  for (; r2; ) {
    n2 = Zd(fl(M(n2, (e8) => e8.CATEGORIES)));
    let e7 = Kp(n2, t2);
    t2 = t2.concat(e7), F(e7) ? r2 = false : n2 = e7;
  }
  return t2;
}
function fT(e6) {
  j(e6, (e7) => {
    gT(e7) || (lT[cT] = e7, e7.tokenTypeIdx = cT++), _T(e7) && !T(e7.CATEGORIES) && (e7.CATEGORIES = [e7.CATEGORIES]), _T(e7) || (e7.CATEGORIES = []), vT(e7) || (e7.categoryMatches = []), yT(e7) || (e7.categoryMatchesMap = {});
  });
}
function pT(e6) {
  j(e6, (e7) => {
    e7.categoryMatches = [], j(e7.categoryMatchesMap, (t2, n2) => {
      e7.categoryMatches.push(lT[n2].tokenTypeIdx);
    });
  });
}
function mT(e6) {
  j(e6, (e7) => {
    hT([], e7);
  });
}
function hT(e6, t2) {
  j(e6, (e7) => {
    t2.categoryMatchesMap[e7.tokenTypeIdx] = true;
  }), j(t2.CATEGORIES, (n2) => {
    let r2 = e6.concat(t2);
    Lm(r2, n2) || hT(r2, n2);
  });
}
function gT(e6) {
  return N(e6, `tokenTypeIdx`);
}
function _T(e6) {
  return N(e6, `CATEGORIES`);
}
function vT(e6) {
  return N(e6, `categoryMatches`);
}
function yT(e6) {
  return N(e6, `categoryMatchesMap`);
}
function bT(e6) {
  return N(e6, `tokenTypeIdx`);
}
const xT = { buildUnableToPopLexerModeMessage(e6) {
  return `Unable to pop Lexer Mode after encountering Token ->${e6.image}<- The Mode Stack is empty`;
}, buildUnexpectedCharactersMessage(e6, t2, n2, r2, i2) {
  return `unexpected character: ->${e6.charAt(t2)}<- at offset: ${t2}, skipped ${n2} characters.`;
} };
var H;
(function(e6) {
  e6[e6.MISSING_PATTERN = 0] = `MISSING_PATTERN`, e6[e6.INVALID_PATTERN = 1] = `INVALID_PATTERN`, e6[e6.EOI_ANCHOR_FOUND = 2] = `EOI_ANCHOR_FOUND`, e6[e6.UNSUPPORTED_FLAGS_FOUND = 3] = `UNSUPPORTED_FLAGS_FOUND`, e6[e6.DUPLICATE_PATTERNS_FOUND = 4] = `DUPLICATE_PATTERNS_FOUND`, e6[e6.INVALID_GROUP_TYPE_FOUND = 5] = `INVALID_GROUP_TYPE_FOUND`, e6[e6.PUSH_MODE_DOES_NOT_EXIST = 6] = `PUSH_MODE_DOES_NOT_EXIST`, e6[e6.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7] = `MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE`, e6[e6.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8] = `MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY`, e6[e6.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9] = `MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST`, e6[e6.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10] = `LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED`, e6[e6.SOI_ANCHOR_FOUND = 11] = `SOI_ANCHOR_FOUND`, e6[e6.EMPTY_MATCH_PATTERN = 12] = `EMPTY_MATCH_PATTERN`, e6[e6.NO_LINE_BREAKS_FLAGS = 13] = `NO_LINE_BREAKS_FLAGS`, e6[e6.UNREACHABLE_PATTERN = 14] = `UNREACHABLE_PATTERN`, e6[e6.IDENTIFY_TERMINATOR = 15] = `IDENTIFY_TERMINATOR`, e6[e6.CUSTOM_LINE_BREAK = 16] = `CUSTOM_LINE_BREAK`, e6[e6.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE = 17] = `MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE`;
})(H || (H = {}));
var ST = { deferDefinitionErrorsHandling: false, positionTracking: `full`, lineTerminatorsPattern: /\n|\r\n?/g, lineTerminatorCharacters: [`
`, `\r`], ensureOptimizations: false, safeMode: false, errorMessageProvider: xT, traceInitPerf: false, skipValidations: false, recoveryEnabled: true };
Object.freeze(ST);
var U = class {
  constructor(e6, t2 = ST) {
    if (this.lexerDefinition = e6, this.lexerDefinitionErrors = [], this.lexerDefinitionWarning = [], this.patternIdxToConfig = {}, this.charCodeToPatternIdxToConfig = {}, this.modes = [], this.emptyGroups = {}, this.trackStartLines = true, this.trackEndLines = true, this.hasCustom = false, this.canModeBeOptimized = {}, this.TRACE_INIT = (e7, t3) => {
      if (this.traceInitPerf === true) {
        this.traceInitIndent++;
        let n3 = Array(this.traceInitIndent + 1).join(`	`);
        this.traceInitIndent < this.traceInitMaxIdent && console.log(`${n3}--> <${e7}>`);
        let { time: r2, value: i2 } = Th(t3), a2 = r2 > 10 ? console.warn : console.log;
        return this.traceInitIndent < this.traceInitMaxIdent && a2(`${n3}<-- <${e7}> time: ${r2}ms`), this.traceInitIndent--, i2;
      } else return t3();
    }, typeof t2 == `boolean`) throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);
    this.config = js({}, ST, t2);
    let n2 = this.config.traceInitPerf;
    n2 === true ? (this.traceInitMaxIdent = 1 / 0, this.traceInitPerf = true) : typeof n2 == `number` && (this.traceInitMaxIdent = n2, this.traceInitPerf = true), this.traceInitIndent = -1, this.TRACE_INIT(`Lexer Constructor`, () => {
      let n3, r2 = true;
      this.TRACE_INIT(`Lexer Config handling`, () => {
        if (this.config.lineTerminatorsPattern === ST.lineTerminatorsPattern) this.config.lineTerminatorsPattern = Qw;
        else if (this.config.lineTerminatorCharacters === ST.lineTerminatorCharacters) throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);
        if (t2.safeMode && t2.ensureOptimizations) throw Error(`"safeMode" and "ensureOptimizations" flags are mutually exclusive.`);
        this.trackStartLines = /full|onlyStart/i.test(this.config.positionTracking), this.trackEndLines = /full/i.test(this.config.positionTracking), T(e6) ? n3 = { modes: { defaultMode: k(e6) }, defaultMode: Ew } : (r2 = false, n3 = k(e6));
      }), this.config.skipValidations === false && (this.TRACE_INIT(`performRuntimeChecks`, () => {
        this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(qw(n3, this.trackStartLines, this.config.lineTerminatorCharacters));
      }), this.TRACE_INIT(`performWarningRuntimeChecks`, () => {
        this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat(Jw(n3, this.trackStartLines, this.config.lineTerminatorCharacters));
      })), n3.modes = n3.modes ? n3.modes : {}, j(n3.modes, (e7, t3) => {
        n3.modes[t3] = fh(e7, (e8) => Zm(e8));
      });
      let i2 = ks(n3.modes);
      if (j(n3.modes, (e7, n4) => {
        this.TRACE_INIT(`Mode: <${n4}> processing`, () => {
          if (this.modes.push(n4), this.config.skipValidations === false && this.TRACE_INIT(`validatePatterns`, () => {
            this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(kw(e7, i2));
          }), F(this.lexerDefinitionErrors)) {
            uT(e7);
            let r3;
            this.TRACE_INIT(`analyzeTokenTypes`, () => {
              r3 = Ow(e7, { lineTerminatorCharacters: this.config.lineTerminatorCharacters, positionTracking: t2.positionTracking, ensureOptimizations: t2.ensureOptimizations, safeMode: t2.safeMode, tracer: this.TRACE_INIT });
            }), this.patternIdxToConfig[n4] = r3.patternIdxToConfig, this.charCodeToPatternIdxToConfig[n4] = r3.charCodeToPatternIdxToConfig, this.emptyGroups = js({}, this.emptyGroups, r3.emptyGroups), this.hasCustom = r3.hasCustom || this.hasCustom, this.canModeBeOptimized[n4] = r3.canBeOptimized;
          }
        });
      }), this.defaultMode = n3.defaultMode, !F(this.lexerDefinitionErrors) && !this.config.deferDefinitionErrorsHandling) {
        let e7 = M(this.lexerDefinitionErrors, (e8) => e8.message).join(`-----------------------
`);
        throw Error(`Errors detected in definition of Lexer:
` + e7);
      }
      j(this.lexerDefinitionWarning, (e7) => {
        wh(e7.message);
      }), this.TRACE_INIT(`Choosing sub-methods implementations`, () => {
        if (Dw ? (this.chopInput = Gi, this.match = this.matchWithTest) : (this.updateLastIndex = E, this.match = this.matchWithExec), r2 && (this.handleModes = E), this.trackStartLines === false && (this.computeNewColumn = Gi), this.trackEndLines === false && (this.updateTokenEndLineColumnLocation = E), /full/i.test(this.config.positionTracking)) this.createTokenInstance = this.createFullToken;
        else if (/onlyStart/i.test(this.config.positionTracking)) this.createTokenInstance = this.createStartOnlyToken;
        else if (/onlyOffset/i.test(this.config.positionTracking)) this.createTokenInstance = this.createOffsetOnlyToken;
        else throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
        this.hasCustom ? (this.addToken = this.addTokenUsingPush, this.handlePayload = this.handlePayloadWithCustom) : (this.addToken = this.addTokenUsingMemberAccess, this.handlePayload = this.handlePayloadNoCustom);
      }), this.TRACE_INIT(`Failed Optimization Warnings`, () => {
        let e7 = uh(this.canModeBeOptimized, (e8, t3, n4) => (t3 === false && e8.push(n4), e8), []);
        if (t2.ensureOptimizations && !F(e7)) throw Error(`Lexer Modes: < ${e7.join(`, `)} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`);
      }), this.TRACE_INIT(`clearRegExpParserCache`, () => {
        mw();
      }), this.TRACE_INIT(`toFastProperties`, () => {
        Eh(this);
      });
    });
  }
  tokenize(e6, t2 = this.defaultMode) {
    if (!F(this.lexerDefinitionErrors)) {
      let e7 = M(this.lexerDefinitionErrors, (e8) => e8.message).join(`-----------------------
`);
      throw Error(`Unable to Tokenize because Errors detected in definition of Lexer:
` + e7);
    }
    return this.tokenizeInternal(e6, t2);
  }
  tokenizeInternal(e6, t2) {
    let n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2, g2, _2 = e6, v2 = _2.length, y2 = 0, ee2 = 0, te2 = this.hasCustom ? 0 : Math.floor(e6.length / 10), b2 = Array(te2), ne2 = [], re2 = this.trackStartLines ? 1 : void 0, ie2 = this.trackStartLines ? 1 : void 0, x2 = Yw(this.emptyGroups), S2 = this.trackStartLines, ae2 = this.config.lineTerminatorsPattern, oe2 = 0, se2 = [], ce2 = [], le2 = [], ue2 = [];
    Object.freeze(ue2);
    let de2;
    function fe2() {
      return se2;
    }
    function pe2(e7) {
      let t3 = iT(e7), n3 = ce2[t3];
      return n3 === void 0 ? ue2 : n3;
    }
    let me2 = (e7) => {
      if (le2.length === 1 && e7.tokenType.PUSH_MODE === void 0) {
        let t3 = this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(e7);
        ne2.push({ offset: e7.startOffset, line: e7.startLine, column: e7.startColumn, length: e7.image.length, message: t3 });
      } else {
        le2.pop();
        let e8 = Jp(le2);
        se2 = this.patternIdxToConfig[e8], ce2 = this.charCodeToPatternIdxToConfig[e8], oe2 = se2.length;
        let t3 = this.canModeBeOptimized[e8] && this.config.safeMode === false;
        de2 = ce2 && t3 ? pe2 : fe2;
      }
    };
    function he2(e7) {
      le2.push(e7), ce2 = this.charCodeToPatternIdxToConfig[e7], se2 = this.patternIdxToConfig[e7], oe2 = se2.length, oe2 = se2.length;
      let t3 = this.canModeBeOptimized[e7] && this.config.safeMode === false;
      de2 = ce2 && t3 ? pe2 : fe2;
    }
    he2.call(this, t2);
    let ge2, _e3 = this.config.recoveryEnabled;
    for (; y2 < v2; ) {
      s2 = null;
      let t3 = _2.charCodeAt(y2), te3 = de2(t3), ce3 = te3.length;
      for (n2 = 0; n2 < ce3; n2++) {
        ge2 = te3[n2];
        let r3 = ge2.pattern;
        c2 = null;
        let u3 = ge2.short;
        if (u3 === false ? ge2.isCustom === true ? (g2 = r3.exec(_2, y2, b2, x2), g2 === null ? s2 = null : (s2 = g2[0], g2.payload !== void 0 && (c2 = g2.payload))) : (this.updateLastIndex(r3, y2), s2 = this.match(r3, e6, y2)) : t3 === u3 && (s2 = r3), s2 !== null) {
          if (o2 = ge2.longerAlt, o2 !== void 0) {
            let t4 = o2.length;
            for (i2 = 0; i2 < t4; i2++) {
              let t5 = se2[o2[i2]], n3 = t5.pattern;
              if (l2 = null, t5.isCustom === true ? (g2 = n3.exec(_2, y2, b2, x2), g2 === null ? a2 = null : (a2 = g2[0], g2.payload !== void 0 && (l2 = g2.payload))) : (this.updateLastIndex(n3, y2), a2 = this.match(n3, e6, y2)), a2 && a2.length > s2.length) {
                s2 = a2, c2 = l2, ge2 = t5;
                break;
              }
            }
          }
          break;
        }
      }
      if (s2 !== null) {
        if (u2 = s2.length, d2 = ge2.group, d2 !== void 0 && (f2 = ge2.tokenTypeIdx, p2 = this.createTokenInstance(s2, y2, f2, ge2.tokenType, re2, ie2, u2), this.handlePayload(p2, c2), d2 === false ? ee2 = this.addToken(b2, ee2, p2) : x2[d2].push(p2)), e6 = this.chopInput(e6, u2), y2 += u2, ie2 = this.computeNewColumn(ie2, u2), S2 === true && ge2.canLineTerminator === true) {
          let e7 = 0, t4, n3;
          ae2.lastIndex = 0;
          do
            t4 = ae2.test(s2), t4 === true && (n3 = ae2.lastIndex - 1, e7++);
          while (t4 === true);
          e7 !== 0 && (re2 += e7, ie2 = u2 - n3, this.updateTokenEndLineColumnLocation(p2, d2, n3, e7, re2, ie2, u2));
        }
        this.handleModes(ge2, me2, he2, p2);
      } else {
        let t4 = y2, n3 = re2, i3 = ie2, a3 = _e3 === false;
        for (; a3 === false && y2 < v2; ) for (e6 = this.chopInput(e6, 1), y2++, r2 = 0; r2 < oe2; r2++) {
          let t5 = se2[r2], n4 = t5.pattern, i4 = t5.short;
          if (i4 === false ? t5.isCustom === true ? a3 = n4.exec(_2, y2, b2, x2) !== null : (this.updateLastIndex(n4, y2), a3 = n4.exec(e6) !== null) : _2.charCodeAt(y2) === i4 && (a3 = true), a3 === true) break;
        }
        if (m2 = y2 - t4, ie2 = this.computeNewColumn(ie2, m2), h2 = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(_2, t4, m2, n3, i3), ne2.push({ offset: t4, line: n3, column: i3, length: m2, message: h2 }), _e3 === false) break;
      }
    }
    return this.hasCustom || (b2.length = ee2), { tokens: b2, groups: x2, errors: ne2 };
  }
  handleModes(e6, t2, n2, r2) {
    if (e6.pop === true) {
      let i2 = e6.push;
      t2(r2), i2 !== void 0 && n2.call(this, i2);
    } else e6.push !== void 0 && n2.call(this, e6.push);
  }
  chopInput(e6, t2) {
    return e6.substring(t2);
  }
  updateLastIndex(e6, t2) {
    e6.lastIndex = t2;
  }
  updateTokenEndLineColumnLocation(e6, t2, n2, r2, i2, a2, o2) {
    let s2, c2;
    t2 !== void 0 && (s2 = n2 === o2 - 1, c2 = s2 ? -1 : 0, r2 === 1 && s2 === true || (e6.endLine = i2 + c2, e6.endColumn = a2 - 1 + -c2));
  }
  computeNewColumn(e6, t2) {
    return e6 + t2;
  }
  createOffsetOnlyToken(e6, t2, n2, r2) {
    return { image: e6, startOffset: t2, tokenTypeIdx: n2, tokenType: r2 };
  }
  createStartOnlyToken(e6, t2, n2, r2, i2, a2) {
    return { image: e6, startOffset: t2, startLine: i2, startColumn: a2, tokenTypeIdx: n2, tokenType: r2 };
  }
  createFullToken(e6, t2, n2, r2, i2, a2, o2) {
    return { image: e6, startOffset: t2, endOffset: t2 + o2 - 1, startLine: i2, endLine: i2, startColumn: a2, endColumn: a2 + o2 - 1, tokenTypeIdx: n2, tokenType: r2 };
  }
  addTokenUsingPush(e6, t2, n2) {
    return e6.push(n2), t2;
  }
  addTokenUsingMemberAccess(e6, t2, n2) {
    return e6[t2] = n2, t2++, t2;
  }
  handlePayloadNoCustom(e6, t2) {
  }
  handlePayloadWithCustom(e6, t2) {
    t2 !== null && (e6.payload = t2);
  }
  matchWithTest(e6, t2, n2) {
    return e6.test(t2) === true ? t2.substring(n2, e6.lastIndex) : null;
  }
  matchWithExec(e6, t2) {
    let n2 = e6.exec(t2);
    return n2 === null ? null : n2[0];
  }
};
U.SKIPPED = `This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.`, U.NA = /NOT_APPLICABLE/;
function CT(e6) {
  return wT(e6) ? e6.LABEL : e6.name;
}
function wT(e6) {
  return jm(e6.LABEL) && e6.LABEL !== ``;
}
var TT = `parent`, ET = `categories`, DT = `label`, OT = `group`, kT = `push_mode`, AT = `pop_mode`, jT = `longer_alt`, MT = `line_breaks`, NT = `start_chars_hint`;
function PT(e6) {
  return FT(e6);
}
function FT(e6) {
  let t2 = e6.pattern, n2 = {};
  if (n2.name = e6.name, Zm(t2) || (n2.PATTERN = t2), N(e6, TT)) throw `The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;
  return N(e6, ET) && (n2.CATEGORIES = e6[ET]), uT([n2]), N(e6, DT) && (n2.LABEL = e6[DT]), N(e6, OT) && (n2.GROUP = e6[OT]), N(e6, AT) && (n2.POP_MODE = e6[AT]), N(e6, kT) && (n2.PUSH_MODE = e6[kT]), N(e6, jT) && (n2.LONGER_ALT = e6[jT]), N(e6, MT) && (n2.LINE_BREAKS = e6[MT]), N(e6, NT) && (n2.START_CHARS_HINT = e6[NT]), n2;
}
const IT = PT({ name: `EOF`, pattern: U.NA });
uT([IT]);
function LT(e6, t2, n2, r2, i2, a2, o2, s2) {
  return { image: t2, startOffset: n2, endOffset: r2, startLine: i2, endLine: a2, startColumn: o2, endColumn: s2, tokenTypeIdx: e6.tokenTypeIdx, tokenType: e6 };
}
function RT(e6, t2) {
  return oT(e6, t2);
}
const zT = { buildMismatchTokenMessage({ expected: e6, actual: t2, previous: n2, ruleName: r2 }) {
  return `Expecting ${wT(e6) ? `--> ${CT(e6)} <--` : `token of type --> ${e6.name} <--`} but found --> '${t2.image}' <--`;
}, buildNotAllInputParsedMessage({ firstRedundant: e6, ruleName: t2 }) {
  return `Redundant input, expecting EOF but found: ` + e6.image;
}, buildNoViableAltMessage({ expectedPathsPerAlt: e6, actual: t2, previous: n2, customUserDescription: r2, ruleName: i2 }) {
  let a2 = `
but found: '` + _m(t2).image + `'`;
  return r2 ? `Expecting: ` + r2 + a2 : `Expecting: one of these possible Token sequences:
${M(M(uh(e6, (e7, t3) => e7.concat(t3), []), (e7) => `[${M(e7, (e8) => CT(e8)).join(`, `)}]`), (e7, t3) => `  ${t3 + 1}. ${e7}`).join(`
`)}` + a2;
}, buildEarlyExitMessage({ expectedIterationPaths: e6, actual: t2, customUserDescription: n2, ruleName: r2 }) {
  let i2 = `
but found: '` + _m(t2).image + `'`;
  return n2 ? `Expecting: ` + n2 + i2 : `Expecting: expecting at least one iteration which starts with one of these possible Token sequences::
  <${M(e6, (e7) => `[${M(e7, (e8) => CT(e8)).join(`,`)}]`).join(` ,`)}>` + i2;
} };
Object.freeze(zT);
const BT = { buildRuleNotFoundError(e6, t2) {
  return `Invalid grammar, reference to a rule which is not defined: ->` + t2.nonTerminalName + `<-
inside top level rule: ->` + e6.name + `<-`;
} }, VT = { buildDuplicateFoundError(e6, t2) {
  function n2(e7) {
    return e7 instanceof V ? e7.terminalType.name : e7 instanceof L ? e7.nonTerminalName : ``;
  }
  let r2 = e6.name, i2 = _m(t2), a2 = i2.idx, o2 = ew(i2), s2 = n2(i2), c2 = `->${o2}${a2 > 0 ? a2 : ``}<- ${s2 ? `with argument: ->${s2}<-` : ``}
                  appears more than once (${t2.length} times) in the top level rule: ->${r2}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;
  return c2 = c2.replace(/[ \t]+/g, ` `), c2 = c2.replace(/\s\s+/g, `
`), c2;
}, buildNamespaceConflictError(e6) {
  return `Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${e6.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;
}, buildAlternationPrefixAmbiguityError(e6) {
  let t2 = M(e6.prefixPath, (e7) => CT(e7)).join(`, `), n2 = e6.alternation.idx === 0 ? `` : e6.alternation.idx;
  return `Ambiguous alternatives: <${e6.ambiguityIndices.join(` ,`)}> due to common lookahead prefix
in <OR${n2}> inside <${e6.topLevelRule.name}> Rule,
<${t2}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;
}, buildAlternationAmbiguityError(e6) {
  let t2 = M(e6.prefixPath, (e7) => CT(e7)).join(`, `), n2 = e6.alternation.idx === 0 ? `` : e6.alternation.idx, r2 = `Ambiguous Alternatives Detected: <${e6.ambiguityIndices.join(` ,`)}> in <OR${n2}> inside <${e6.topLevelRule.name}> Rule,
<${t2}> may appears as a prefix path in all these alternatives.
`;
  return r2 += `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, r2;
}, buildEmptyRepetitionError(e6) {
  let t2 = ew(e6.repetition);
  return e6.repetition.idx !== 0 && (t2 += e6.repetition.idx), `The repetition <${t2}> within Rule <${e6.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`;
}, buildTokenNameError(e6) {
  return `deprecated`;
}, buildEmptyAlternationError(e6) {
  return `Ambiguous empty alternative: <${e6.emptyChoiceIdx + 1}> in <OR${e6.alternation.idx}> inside <${e6.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`;
}, buildTooManyAlternativesError(e6) {
  return `An Alternation cannot have more than 256 alternatives:
<OR${e6.alternation.idx}> inside <${e6.topLevelRule.name}> Rule.
 has ${e6.alternation.definition.length + 1} alternatives.`;
}, buildLeftRecursionError(e6) {
  let t2 = e6.topLevelRule.name;
  return `Left Recursion found in grammar.
rule: <${t2}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${`${t2} --> ${M(e6.leftRecursionPath, (e7) => e7.name).concat([t2]).join(` --> `)}`}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;
}, buildInvalidRuleNameError(e6) {
  return `deprecated`;
}, buildDuplicateRuleNameError(e6) {
  let t2;
  return t2 = e6.topLevelRule instanceof UC ? e6.topLevelRule.name : e6.topLevelRule, `Duplicate definition, rule: ->${t2}<- is already defined in the grammar: ->${e6.grammarName}<-`;
} };
function HT(e6, t2) {
  let n2 = new UT(e6, t2);
  return n2.resolveRefs(), n2.errors;
}
var UT = class extends XC {
  constructor(e6, t2) {
    super(), this.nameToTopRule = e6, this.errMsgProvider = t2, this.errors = [];
  }
  resolveRefs() {
    j(P(this.nameToTopRule), (e6) => {
      this.currTopLevel = e6, e6.accept(this);
    });
  }
  visitNonTerminal(e6) {
    let t2 = this.nameToTopRule[e6.nonTerminalName];
    if (t2) e6.referencedRule = t2;
    else {
      let t3 = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, e6);
      this.errors.push({ message: t3, type: VD.UNRESOLVED_SUBRULE_REF, ruleName: this.currTopLevel.name, unresolvedRefName: e6.nonTerminalName });
    }
  }
}, WT = class extends tw {
  constructor(e6, t2) {
    super(), this.topProd = e6, this.path = t2, this.possibleTokTypes = [], this.nextProductionName = ``, this.nextProductionOccurrence = 0, this.found = false, this.isAtEndOfPath = false;
  }
  startWalking() {
    if (this.found = false, this.path.ruleStack[0] !== this.topProd.name) throw Error(`The path does not start with the walker's top Rule!`);
    return this.ruleStack = k(this.path.ruleStack).reverse(), this.occurrenceStack = k(this.path.occurrenceStack).reverse(), this.ruleStack.pop(), this.occurrenceStack.pop(), this.updateExpectedNext(), this.walk(this.topProd), this.possibleTokTypes;
  }
  walk(e6, t2 = []) {
    this.found || super.walk(e6, t2);
  }
  walkProdRef(e6, t2, n2) {
    if (e6.referencedRule.name === this.nextProductionName && e6.idx === this.nextProductionOccurrence) {
      let r2 = t2.concat(n2);
      this.updateExpectedNext(), this.walk(e6.referencedRule, r2);
    }
  }
  updateExpectedNext() {
    F(this.ruleStack) ? (this.nextProductionName = ``, this.nextProductionOccurrence = 0, this.isAtEndOfPath = true) : (this.nextProductionName = this.ruleStack.pop(), this.nextProductionOccurrence = this.occurrenceStack.pop());
  }
}, GT = class extends WT {
  constructor(e6, t2) {
    super(e6, t2), this.path = t2, this.nextTerminalName = ``, this.nextTerminalOccurrence = 0, this.nextTerminalName = this.path.lastTok.name, this.nextTerminalOccurrence = this.path.lastTokOccurrence;
  }
  walkTerminal(e6, t2, n2) {
    this.isAtEndOfPath && e6.terminalType.name === this.nextTerminalName && e6.idx === this.nextTerminalOccurrence && !this.found && (this.possibleTokTypes = rw(new WC({ definition: t2.concat(n2) })), this.found = true);
  }
}, KT = class extends tw {
  constructor(e6, t2) {
    super(), this.topRule = e6, this.occurrence = t2, this.result = { token: void 0, occurrence: void 0, isEndOfRule: void 0 };
  }
  startWalking() {
    return this.walk(this.topRule), this.result;
  }
}, qT = class extends KT {
  walkMany(e6, t2, n2) {
    if (e6.idx === this.occurrence) {
      let e7 = _m(t2.concat(n2));
      this.result.isEndOfRule = e7 === void 0, e7 instanceof V && (this.result.token = e7.terminalType, this.result.occurrence = e7.idx);
    } else super.walkMany(e6, t2, n2);
  }
}, JT = class extends KT {
  walkManySep(e6, t2, n2) {
    if (e6.idx === this.occurrence) {
      let e7 = _m(t2.concat(n2));
      this.result.isEndOfRule = e7 === void 0, e7 instanceof V && (this.result.token = e7.terminalType, this.result.occurrence = e7.idx);
    } else super.walkManySep(e6, t2, n2);
  }
}, YT = class extends KT {
  walkAtLeastOne(e6, t2, n2) {
    if (e6.idx === this.occurrence) {
      let e7 = _m(t2.concat(n2));
      this.result.isEndOfRule = e7 === void 0, e7 instanceof V && (this.result.token = e7.terminalType, this.result.occurrence = e7.idx);
    } else super.walkAtLeastOne(e6, t2, n2);
  }
}, XT = class extends KT {
  walkAtLeastOneSep(e6, t2, n2) {
    if (e6.idx === this.occurrence) {
      let e7 = _m(t2.concat(n2));
      this.result.isEndOfRule = e7 === void 0, e7 instanceof V && (this.result.token = e7.terminalType, this.result.occurrence = e7.idx);
    } else super.walkAtLeastOneSep(e6, t2, n2);
  }
};
function ZT(e6, t2, n2 = []) {
  n2 = k(n2);
  let r2 = [], i2 = 0;
  function a2(t3) {
    return t3.concat(A(e6, i2 + 1));
  }
  function o2(e7) {
    let i3 = ZT(a2(e7), t2, n2);
    return r2.concat(i3);
  }
  for (; n2.length < t2 && i2 < e6.length; ) {
    let t3 = e6[i2];
    if (t3 instanceof WC || t3 instanceof L) return o2(t3.definition);
    if (t3 instanceof R) r2 = o2(t3.definition);
    else if (t3 instanceof GC) return o2(t3.definition.concat([new z({ definition: t3.definition })]));
    else if (t3 instanceof KC) return o2([new WC({ definition: t3.definition }), new z({ definition: [new V({ terminalType: t3.separator })].concat(t3.definition) })]);
    else if (t3 instanceof qC) r2 = o2(t3.definition.concat([new z({ definition: [new V({ terminalType: t3.separator })].concat(t3.definition) })]));
    else if (t3 instanceof z) r2 = o2(t3.definition.concat([new z({ definition: t3.definition })]));
    else if (t3 instanceof B) return j(t3.definition, (e7) => {
      F(e7.definition) === false && (r2 = o2(e7.definition));
    }), r2;
    else if (t3 instanceof V) n2.push(t3.terminalType);
    else throw Error(`non exhaustive match`);
    i2++;
  }
  return r2.push({ partialPath: n2, suffixDef: A(e6, i2) }), r2;
}
function QT(e6, t2, n2, r2) {
  let i2 = `EXIT_NONE_TERMINAL`, a2 = [i2], o2 = `EXIT_ALTERNATIVE`, s2 = false, c2 = t2.length, l2 = c2 - r2 - 1, u2 = [], d2 = [];
  for (d2.push({ idx: -1, def: e6, ruleStack: [], occurrenceStack: [] }); !F(d2); ) {
    let e7 = d2.pop();
    if (e7 === o2) {
      s2 && Jp(d2).idx <= l2 && d2.pop();
      continue;
    }
    let r3 = e7.def, f2 = e7.idx, p2 = e7.ruleStack, m2 = e7.occurrenceStack;
    if (F(r3)) continue;
    let h2 = r3[0];
    if (h2 === i2) {
      let e8 = { idx: f2, def: A(r3), ruleStack: Zp(p2), occurrenceStack: Zp(m2) };
      d2.push(e8);
    } else if (h2 instanceof V) if (f2 < c2 - 1) {
      let e8 = f2 + 1, i3 = t2[e8];
      if (n2(i3, h2.terminalType)) {
        let t3 = { idx: e8, def: A(r3), ruleStack: p2, occurrenceStack: m2 };
        d2.push(t3);
      }
    } else if (f2 === c2 - 1) u2.push({ nextTokenType: h2.terminalType, nextTokenOccurrence: h2.idx, ruleStack: p2, occurrenceStack: m2 }), s2 = true;
    else throw Error(`non exhaustive match`);
    else if (h2 instanceof L) {
      let e8 = k(p2);
      e8.push(h2.nonTerminalName);
      let t3 = k(m2);
      t3.push(h2.idx);
      let n3 = { idx: f2, def: h2.definition.concat(a2, A(r3)), ruleStack: e8, occurrenceStack: t3 };
      d2.push(n3);
    } else if (h2 instanceof R) {
      let e8 = { idx: f2, def: A(r3), ruleStack: p2, occurrenceStack: m2 };
      d2.push(e8), d2.push(o2);
      let t3 = { idx: f2, def: h2.definition.concat(A(r3)), ruleStack: p2, occurrenceStack: m2 };
      d2.push(t3);
    } else if (h2 instanceof GC) {
      let e8 = new z({ definition: h2.definition, idx: h2.idx }), t3 = { idx: f2, def: h2.definition.concat([e8], A(r3)), ruleStack: p2, occurrenceStack: m2 };
      d2.push(t3);
    } else if (h2 instanceof KC) {
      let e8 = new z({ definition: [new V({ terminalType: h2.separator })].concat(h2.definition), idx: h2.idx }), t3 = { idx: f2, def: h2.definition.concat([e8], A(r3)), ruleStack: p2, occurrenceStack: m2 };
      d2.push(t3);
    } else if (h2 instanceof qC) {
      let e8 = { idx: f2, def: A(r3), ruleStack: p2, occurrenceStack: m2 };
      d2.push(e8), d2.push(o2);
      let t3 = new z({ definition: [new V({ terminalType: h2.separator })].concat(h2.definition), idx: h2.idx }), n3 = { idx: f2, def: h2.definition.concat([t3], A(r3)), ruleStack: p2, occurrenceStack: m2 };
      d2.push(n3);
    } else if (h2 instanceof z) {
      let e8 = { idx: f2, def: A(r3), ruleStack: p2, occurrenceStack: m2 };
      d2.push(e8), d2.push(o2);
      let t3 = new z({ definition: h2.definition, idx: h2.idx }), n3 = { idx: f2, def: h2.definition.concat([t3], A(r3)), ruleStack: p2, occurrenceStack: m2 };
      d2.push(n3);
    } else if (h2 instanceof B) for (let e8 = h2.definition.length - 1; e8 >= 0; e8--) {
      let t3 = { idx: f2, def: h2.definition[e8].definition.concat(A(r3)), ruleStack: p2, occurrenceStack: m2 };
      d2.push(t3), d2.push(o2);
    }
    else if (h2 instanceof WC) d2.push({ idx: f2, def: h2.definition.concat(A(r3)), ruleStack: p2, occurrenceStack: m2 });
    else if (h2 instanceof UC) d2.push($T(h2, f2, p2, m2));
    else throw Error(`non exhaustive match`);
  }
  return u2;
}
function $T(e6, t2, n2, r2) {
  let i2 = k(n2);
  i2.push(e6.name);
  let a2 = k(r2);
  return a2.push(1), { idx: t2, def: e6.definition, ruleStack: i2, occurrenceStack: a2 };
}
var W;
(function(e6) {
  e6[e6.OPTION = 0] = `OPTION`, e6[e6.REPETITION = 1] = `REPETITION`, e6[e6.REPETITION_MANDATORY = 2] = `REPETITION_MANDATORY`, e6[e6.REPETITION_MANDATORY_WITH_SEPARATOR = 3] = `REPETITION_MANDATORY_WITH_SEPARATOR`, e6[e6.REPETITION_WITH_SEPARATOR = 4] = `REPETITION_WITH_SEPARATOR`, e6[e6.ALTERNATION = 5] = `ALTERNATION`;
})(W || (W = {}));
function eE(e6) {
  if (e6 instanceof R || e6 === `Option`) return W.OPTION;
  if (e6 instanceof z || e6 === `Repetition`) return W.REPETITION;
  if (e6 instanceof GC || e6 === `RepetitionMandatory`) return W.REPETITION_MANDATORY;
  if (e6 instanceof KC || e6 === `RepetitionMandatoryWithSeparator`) return W.REPETITION_MANDATORY_WITH_SEPARATOR;
  if (e6 instanceof qC || e6 === `RepetitionWithSeparator`) return W.REPETITION_WITH_SEPARATOR;
  if (e6 instanceof B || e6 === `Alternation`) return W.ALTERNATION;
  throw Error(`non exhaustive match`);
}
function tE(e6) {
  let { occurrence: t2, rule: n2, prodType: r2, maxLookahead: i2 } = e6, a2 = eE(r2);
  return a2 === W.ALTERNATION ? fE(t2, n2, i2) : pE(t2, n2, a2, i2);
}
function nE(e6, t2, n2, r2, i2, a2) {
  let o2 = fE(e6, t2, n2);
  return a2(o2, r2, gE(o2) ? sT : oT, i2);
}
function rE(e6, t2, n2, r2, i2, a2) {
  let o2 = pE(e6, t2, i2, n2), s2 = gE(o2) ? sT : oT;
  return a2(o2[0], s2, r2);
}
function iE(e6, t2, n2, r2) {
  let i2 = e6.length, a2 = om(e6, (e7) => om(e7, (e8) => e8.length === 1));
  if (t2) return function(t3) {
    let r3 = M(t3, (e7) => e7.GATE);
    for (let t4 = 0; t4 < i2; t4++) {
      let i3 = e6[t4], a3 = i3.length, o2 = r3[t4];
      if (!(o2 !== void 0 && o2.call(this) === false)) nextPath: for (let e7 = 0; e7 < a3; e7++) {
        let r4 = i3[e7], a4 = r4.length;
        for (let e8 = 0; e8 < a4; e8++) if (n2(this.LA(e8 + 1), r4[e8]) === false) continue nextPath;
        return t4;
      }
    }
  };
  if (a2 && !r2) {
    let t3 = uh(M(e6, (e7) => fl(e7)), (e7, t4, n3) => (j(t4, (t5) => {
      N(e7, t5.tokenTypeIdx) || (e7[t5.tokenTypeIdx] = n3), j(t5.categoryMatches, (t6) => {
        N(e7, t6) || (e7[t6] = n3);
      });
    }), e7), {});
    return function() {
      return t3[this.LA(1).tokenTypeIdx];
    };
  } else return function() {
    for (let t3 = 0; t3 < i2; t3++) {
      let r3 = e6[t3], i3 = r3.length;
      nextPath: for (let e7 = 0; e7 < i3; e7++) {
        let i4 = r3[e7], a3 = i4.length;
        for (let e8 = 0; e8 < a3; e8++) if (n2(this.LA(e8 + 1), i4[e8]) === false) continue nextPath;
        return t3;
      }
    }
  };
}
function aE(e6, t2, n2) {
  let r2 = om(e6, (e7) => e7.length === 1), i2 = e6.length;
  if (r2 && !n2) {
    let t3 = fl(e6);
    if (t3.length === 1 && F(t3[0].categoryMatches)) {
      let e7 = t3[0].tokenTypeIdx;
      return function() {
        return this.LA(1).tokenTypeIdx === e7;
      };
    } else {
      let e7 = uh(t3, (e8, t4, n3) => (e8[t4.tokenTypeIdx] = true, j(t4.categoryMatches, (t5) => {
        e8[t5] = true;
      }), e8), []);
      return function() {
        return e7[this.LA(1).tokenTypeIdx] === true;
      };
    }
  } else return function() {
    nextPath: for (let n3 = 0; n3 < i2; n3++) {
      let r3 = e6[n3], i3 = r3.length;
      for (let e7 = 0; e7 < i3; e7++) if (t2(this.LA(e7 + 1), r3[e7]) === false) continue nextPath;
      return true;
    }
    return false;
  };
}
var oE = class extends tw {
  constructor(e6, t2, n2) {
    super(), this.topProd = e6, this.targetOccurrence = t2, this.targetProdType = n2;
  }
  startWalking() {
    return this.walk(this.topProd), this.restDef;
  }
  checkIsTarget(e6, t2, n2, r2) {
    return e6.idx === this.targetOccurrence && this.targetProdType === t2 ? (this.restDef = n2.concat(r2), true) : false;
  }
  walkOption(e6, t2, n2) {
    this.checkIsTarget(e6, W.OPTION, t2, n2) || super.walkOption(e6, t2, n2);
  }
  walkAtLeastOne(e6, t2, n2) {
    this.checkIsTarget(e6, W.REPETITION_MANDATORY, t2, n2) || super.walkOption(e6, t2, n2);
  }
  walkAtLeastOneSep(e6, t2, n2) {
    this.checkIsTarget(e6, W.REPETITION_MANDATORY_WITH_SEPARATOR, t2, n2) || super.walkOption(e6, t2, n2);
  }
  walkMany(e6, t2, n2) {
    this.checkIsTarget(e6, W.REPETITION, t2, n2) || super.walkOption(e6, t2, n2);
  }
  walkManySep(e6, t2, n2) {
    this.checkIsTarget(e6, W.REPETITION_WITH_SEPARATOR, t2, n2) || super.walkOption(e6, t2, n2);
  }
}, sE = class extends XC {
  constructor(e6, t2, n2) {
    super(), this.targetOccurrence = e6, this.targetProdType = t2, this.targetRef = n2, this.result = [];
  }
  checkIsTarget(e6, t2) {
    e6.idx === this.targetOccurrence && this.targetProdType === t2 && (this.targetRef === void 0 || e6 === this.targetRef) && (this.result = e6.definition);
  }
  visitOption(e6) {
    this.checkIsTarget(e6, W.OPTION);
  }
  visitRepetition(e6) {
    this.checkIsTarget(e6, W.REPETITION);
  }
  visitRepetitionMandatory(e6) {
    this.checkIsTarget(e6, W.REPETITION_MANDATORY);
  }
  visitRepetitionMandatoryWithSeparator(e6) {
    this.checkIsTarget(e6, W.REPETITION_MANDATORY_WITH_SEPARATOR);
  }
  visitRepetitionWithSeparator(e6) {
    this.checkIsTarget(e6, W.REPETITION_WITH_SEPARATOR);
  }
  visitAlternation(e6) {
    this.checkIsTarget(e6, W.ALTERNATION);
  }
};
function cE(e6) {
  let t2 = Array(e6);
  for (let n2 = 0; n2 < e6; n2++) t2[n2] = [];
  return t2;
}
function lE(e6) {
  let t2 = [``];
  for (let n2 = 0; n2 < e6.length; n2++) {
    let r2 = e6[n2], i2 = [];
    for (let e7 = 0; e7 < t2.length; e7++) {
      let n3 = t2[e7];
      i2.push(n3 + `_` + r2.tokenTypeIdx);
      for (let e8 = 0; e8 < r2.categoryMatches.length; e8++) {
        let t3 = `_` + r2.categoryMatches[e8];
        i2.push(n3 + t3);
      }
    }
    t2 = i2;
  }
  return t2;
}
function uE(e6, t2, n2) {
  for (let r2 = 0; r2 < e6.length; r2++) {
    if (r2 === n2) continue;
    let i2 = e6[r2];
    for (let e7 = 0; e7 < t2.length; e7++) if (i2[t2[e7]] === true) return false;
  }
  return true;
}
function dE(e6, t2) {
  let n2 = M(e6, (e7) => ZT([e7], 1)), r2 = cE(n2.length), i2 = M(n2, (e7) => {
    let t3 = {};
    return j(e7, (e8) => {
      j(lE(e8.partialPath), (e9) => {
        t3[e9] = true;
      });
    }), t3;
  }), a2 = n2;
  for (let e7 = 1; e7 <= t2; e7++) {
    let n3 = a2;
    a2 = cE(n3.length);
    for (let o2 = 0; o2 < n3.length; o2++) {
      let s2 = n3[o2];
      for (let n4 = 0; n4 < s2.length; n4++) {
        let c2 = s2[n4].partialPath, l2 = s2[n4].suffixDef, u2 = lE(c2);
        if (uE(i2, u2, o2) || F(l2) || c2.length === t2) {
          let e8 = r2[o2];
          if (mE(e8, c2) === false) {
            e8.push(c2);
            for (let e9 = 0; e9 < u2.length; e9++) {
              let t3 = u2[e9];
              i2[o2][t3] = true;
            }
          }
        } else {
          let t3 = ZT(l2, e7 + 1, c2);
          a2[o2] = a2[o2].concat(t3), j(t3, (e8) => {
            j(lE(e8.partialPath), (e9) => {
              i2[o2][e9] = true;
            });
          });
        }
      }
    }
  }
  return r2;
}
function fE(e6, t2, n2, r2) {
  let i2 = new sE(e6, W.ALTERNATION, r2);
  return t2.accept(i2), dE(i2.result, n2);
}
function pE(e6, t2, n2, r2) {
  let i2 = new sE(e6, n2);
  t2.accept(i2);
  let a2 = i2.result, o2 = new oE(t2, e6, n2).startWalking();
  return dE([new WC({ definition: a2 }), new WC({ definition: o2 })], r2);
}
function mE(e6, t2) {
  compareOtherPath: for (let n2 = 0; n2 < e6.length; n2++) {
    let r2 = e6[n2];
    if (r2.length === t2.length) {
      for (let e7 = 0; e7 < r2.length; e7++) {
        let n3 = t2[e7], i2 = r2[e7];
        if (!(n3 === i2 || i2.categoryMatchesMap[n3.tokenTypeIdx] !== void 0)) continue compareOtherPath;
      }
      return true;
    }
  }
  return false;
}
function hE(e6, t2) {
  return e6.length < t2.length && om(e6, (e7, n2) => {
    let r2 = t2[n2];
    return e7 === r2 || r2.categoryMatchesMap[e7.tokenTypeIdx];
  });
}
function gE(e6) {
  return om(e6, (e7) => om(e7, (e8) => om(e8, (e9) => F(e9.categoryMatches))));
}
function _E(e6) {
  return M(e6.lookaheadStrategy.validate({ rules: e6.rules, tokenTypes: e6.tokenTypes, grammarName: e6.grammarName }), (e7) => Object.assign({ type: VD.CUSTOM_LOOKAHEAD_VALIDATION }, e7));
}
function vE(e6, t2, n2, r2) {
  let i2 = Sm(e6, (e7) => yE(e7, n2)), a2 = FE(e6, t2, n2), o2 = Sm(e6, (e7) => jE(e7, n2)), s2 = Sm(e6, (t3) => CE(t3, e6, r2, n2));
  return i2.concat(a2, o2, s2);
}
function yE(e6, t2) {
  let n2 = new SE();
  e6.accept(n2);
  let r2 = n2.allProductions;
  return M(P(oh(wm(r2, bE), (e7) => e7.length > 1)), (n3) => {
    let r3 = _m(n3), i2 = t2.buildDuplicateFoundError(e6, n3), a2 = ew(r3), o2 = { message: i2, type: VD.DUPLICATE_PRODUCTIONS, ruleName: e6.name, dslName: a2, occurrence: r3.idx }, s2 = xE(r3);
    return s2 && (o2.parameter = s2), o2;
  });
}
function bE(e6) {
  return `${ew(e6)}_#_${e6.idx}_#_${xE(e6)}`;
}
function xE(e6) {
  return e6 instanceof V ? e6.terminalType.name : e6 instanceof L ? e6.nonTerminalName : ``;
}
var SE = class extends XC {
  constructor() {
    super(...arguments), this.allProductions = [];
  }
  visitNonTerminal(e6) {
    this.allProductions.push(e6);
  }
  visitOption(e6) {
    this.allProductions.push(e6);
  }
  visitRepetitionWithSeparator(e6) {
    this.allProductions.push(e6);
  }
  visitRepetitionMandatory(e6) {
    this.allProductions.push(e6);
  }
  visitRepetitionMandatoryWithSeparator(e6) {
    this.allProductions.push(e6);
  }
  visitRepetition(e6) {
    this.allProductions.push(e6);
  }
  visitAlternation(e6) {
    this.allProductions.push(e6);
  }
  visitTerminal(e6) {
    this.allProductions.push(e6);
  }
};
function CE(e6, t2, n2, r2) {
  let i2 = [];
  if (uh(t2, (t3, n3) => n3.name === e6.name ? t3 + 1 : t3, 0) > 1) {
    let t3 = r2.buildDuplicateRuleNameError({ topLevelRule: e6, grammarName: n2 });
    i2.push({ message: t3, type: VD.DUPLICATE_RULE_NAME, ruleName: e6.name });
  }
  return i2;
}
function wE(e6, t2, n2) {
  let r2 = [], i2;
  return Lm(t2, e6) || (i2 = `Invalid rule override, rule: ->${e6}<- cannot be overridden in the grammar: ->${n2}<-as it is not defined in any of the super grammars `, r2.push({ message: i2, type: VD.INVALID_RULE_OVERRIDE, ruleName: e6 })), r2;
}
function TE(e6, t2, n2, r2 = []) {
  let i2 = [], a2 = EE(t2.definition);
  if (F(a2)) return [];
  {
    let t3 = e6.name;
    Lm(a2, e6) && i2.push({ message: n2.buildLeftRecursionError({ topLevelRule: e6, leftRecursionPath: r2 }), type: VD.LEFT_RECURSION, ruleName: t3 });
    let o2 = Sm(Kp(a2, r2.concat([e6])), (t4) => {
      let i3 = k(r2);
      return i3.push(t4), TE(e6, t4, n2, i3);
    });
    return i2.concat(o2);
  }
}
function EE(e6) {
  let t2 = [];
  if (F(e6)) return t2;
  let n2 = _m(e6);
  if (n2 instanceof L) t2.push(n2.referencedRule);
  else if (n2 instanceof WC || n2 instanceof R || n2 instanceof GC || n2 instanceof KC || n2 instanceof qC || n2 instanceof z) t2 = t2.concat(EE(n2.definition));
  else if (n2 instanceof B) t2 = fl(M(n2.definition, (e7) => EE(e7.definition)));
  else if (!(n2 instanceof V)) throw Error(`non exhaustive match`);
  let r2 = QC(n2), i2 = e6.length > 1;
  if (r2 && i2) {
    let n3 = A(e6);
    return t2.concat(EE(n3));
  } else return t2;
}
var DE = class extends XC {
  constructor() {
    super(...arguments), this.alternations = [];
  }
  visitAlternation(e6) {
    this.alternations.push(e6);
  }
};
function OE(e6, t2) {
  let n2 = new DE();
  e6.accept(n2);
  let r2 = n2.alternations;
  return Sm(r2, (n3) => Sm(Zp(n3.definition), (r3, i2) => F(QT([r3], [], oT, 1)) ? [{ message: t2.buildEmptyAlternationError({ topLevelRule: e6, alternation: n3, emptyChoiceIdx: i2 }), type: VD.NONE_LAST_EMPTY_ALT, ruleName: e6.name, occurrence: n3.idx, alternative: i2 + 1 }] : []));
}
function kE(e6, t2, n2) {
  let r2 = new DE();
  e6.accept(r2);
  let i2 = r2.alternations;
  return i2 = fh(i2, (e7) => e7.ignoreAmbiguities === true), Sm(i2, (r3) => {
    let i3 = r3.idx, a2 = fE(i3, e6, r3.maxLookahead || t2, r3), o2 = NE(a2, r3, e6, n2), s2 = PE(a2, r3, e6, n2);
    return o2.concat(s2);
  });
}
var AE = class extends XC {
  constructor() {
    super(...arguments), this.allProductions = [];
  }
  visitRepetitionWithSeparator(e6) {
    this.allProductions.push(e6);
  }
  visitRepetitionMandatory(e6) {
    this.allProductions.push(e6);
  }
  visitRepetitionMandatoryWithSeparator(e6) {
    this.allProductions.push(e6);
  }
  visitRepetition(e6) {
    this.allProductions.push(e6);
  }
};
function jE(e6, t2) {
  let n2 = new DE();
  e6.accept(n2);
  let r2 = n2.alternations;
  return Sm(r2, (n3) => n3.definition.length > 255 ? [{ message: t2.buildTooManyAlternativesError({ topLevelRule: e6, alternation: n3 }), type: VD.TOO_MANY_ALTS, ruleName: e6.name, occurrence: n3.idx }] : []);
}
function ME(e6, t2, n2) {
  let r2 = [];
  return j(e6, (e7) => {
    let i2 = new AE();
    e7.accept(i2);
    let a2 = i2.allProductions;
    j(a2, (i3) => {
      let a3 = eE(i3), o2 = i3.maxLookahead || t2, s2 = i3.idx, c2 = pE(s2, e7, a3, o2)[0];
      if (F(fl(c2))) {
        let t3 = n2.buildEmptyRepetitionError({ topLevelRule: e7, repetition: i3 });
        r2.push({ message: t3, type: VD.NO_NON_EMPTY_LOOKAHEAD, ruleName: e7.name });
      }
    });
  }), r2;
}
function NE(e6, t2, n2, r2) {
  let i2 = [];
  return M(uh(e6, (n3, r3, a2) => (t2.definition[a2].ignoreAmbiguities === true || j(r3, (r4) => {
    let o2 = [a2];
    j(e6, (e7, n4) => {
      a2 !== n4 && mE(e7, r4) && t2.definition[n4].ignoreAmbiguities !== true && o2.push(n4);
    }), o2.length > 1 && !mE(i2, r4) && (i2.push(r4), n3.push({ alts: o2, path: r4 }));
  }), n3), []), (e7) => {
    let i3 = M(e7.alts, (e8) => e8 + 1);
    return { message: r2.buildAlternationAmbiguityError({ topLevelRule: n2, alternation: t2, ambiguityIndices: i3, prefixPath: e7.path }), type: VD.AMBIGUOUS_ALTS, ruleName: n2.name, occurrence: t2.idx, alternatives: e7.alts };
  });
}
function PE(e6, t2, n2, r2) {
  let i2 = uh(e6, (e7, t3, n3) => {
    let r3 = M(t3, (e8) => ({ idx: n3, path: e8 }));
    return e7.concat(r3);
  }, []);
  return Zd(Sm(i2, (e7) => {
    if (t2.definition[e7.idx].ignoreAmbiguities === true) return [];
    let a2 = e7.idx, o2 = e7.path;
    return M(um(i2, (e8) => t2.definition[e8.idx].ignoreAmbiguities !== true && e8.idx < a2 && hE(e8.path, o2)), (e8) => {
      let i3 = [e8.idx + 1, a2 + 1], o3 = t2.idx === 0 ? `` : t2.idx;
      return { message: r2.buildAlternationPrefixAmbiguityError({ topLevelRule: n2, alternation: t2, ambiguityIndices: i3, prefixPath: e8.path }), type: VD.AMBIGUOUS_PREFIX_ALTS, ruleName: n2.name, occurrence: o3, alternatives: i3 };
    });
  }));
}
function FE(e6, t2, n2) {
  let r2 = [], i2 = M(t2, (e7) => e7.name);
  return j(e6, (e7) => {
    let t3 = e7.name;
    if (Lm(i2, t3)) {
      let i3 = n2.buildNamespaceConflictError(e7);
      r2.push({ message: i3, type: VD.CONFLICT_TOKENS_RULES_NAMESPACE, ruleName: t3 });
    }
  }), r2;
}
function IE(e6) {
  let t2 = Rp(e6, { errMsgProvider: BT }), n2 = {};
  return j(e6.rules, (e7) => {
    n2[e7.name] = e7;
  }), HT(n2, t2.errMsgProvider);
}
function LE(e6) {
  return e6 = Rp(e6, { errMsgProvider: VT }), vE(e6.rules, e6.tokenTypes, e6.errMsgProvider, e6.grammarName);
}
var RE = `MismatchedTokenException`, zE = `NoViableAltException`, BE = `EarlyExitException`, VE = `NotAllInputParsedException`, HE = [RE, zE, BE, VE];
Object.freeze(HE);
function UE(e6) {
  return Lm(HE, e6.name);
}
var WE = class extends Error {
  constructor(e6, t2) {
    super(e6), this.token = t2, this.resyncedTokens = [], Object.setPrototypeOf(this, new.target.prototype), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}, GE = class extends WE {
  constructor(e6, t2, n2) {
    super(e6, t2), this.previousToken = n2, this.name = RE;
  }
}, KE = class extends WE {
  constructor(e6, t2, n2) {
    super(e6, t2), this.previousToken = n2, this.name = zE;
  }
}, qE = class extends WE {
  constructor(e6, t2) {
    super(e6, t2), this.name = VE;
  }
}, JE = class extends WE {
  constructor(e6, t2, n2) {
    super(e6, t2), this.previousToken = n2, this.name = BE;
  }
};
const YE = {};
var XE = class extends Error {
  constructor(e6) {
    super(e6), this.name = `InRuleRecoveryException`;
  }
}, ZE = class {
  initRecoverable(e6) {
    this.firstAfterRepMap = {}, this.resyncFollows = {}, this.recoveryEnabled = N(e6, `recoveryEnabled`) ? e6.recoveryEnabled : zD.recoveryEnabled, this.recoveryEnabled && (this.attemptInRepetitionRecovery = QE);
  }
  getTokenToInsert(e6) {
    let t2 = LT(e6, ``, NaN, NaN, NaN, NaN, NaN, NaN);
    return t2.isInsertedInRecovery = true, t2;
  }
  canTokenTypeBeInsertedInRecovery(e6) {
    return true;
  }
  canTokenTypeBeDeletedInRecovery(e6) {
    return true;
  }
  tryInRepetitionRecovery(e6, t2, n2, r2) {
    let i2 = this.findReSyncTokenType(), a2 = this.exportLexerState(), o2 = [], s2 = false, c2 = this.LA(1), l2 = this.LA(1), u2 = () => {
      let e7 = this.LA(0), t3 = new GE(this.errorMessageProvider.buildMismatchTokenMessage({ expected: r2, actual: c2, previous: e7, ruleName: this.getCurrRuleFullName() }), c2, this.LA(0));
      t3.resyncedTokens = Zp(o2), this.SAVE_ERROR(t3);
    };
    for (; !s2; ) if (this.tokenMatcher(l2, r2)) {
      u2();
      return;
    } else if (n2.call(this)) {
      u2(), e6.apply(this, t2);
      return;
    } else this.tokenMatcher(l2, i2) ? s2 = true : (l2 = this.SKIP_TOKEN(), this.addToResyncTokens(l2, o2));
    this.importLexerState(a2);
  }
  shouldInRepetitionRecoveryBeTried(e6, t2, n2) {
    return !(n2 === false || this.tokenMatcher(this.LA(1), e6) || this.isBackTracking() || this.canPerformInRuleRecovery(e6, this.getFollowsForInRuleRecovery(e6, t2)));
  }
  getFollowsForInRuleRecovery(e6, t2) {
    let n2 = this.getCurrentGrammarPath(e6, t2);
    return this.getNextPossibleTokenTypes(n2);
  }
  tryInRuleRecovery(e6, t2) {
    if (this.canRecoverWithSingleTokenInsertion(e6, t2)) return this.getTokenToInsert(e6);
    if (this.canRecoverWithSingleTokenDeletion(e6)) {
      let e7 = this.SKIP_TOKEN();
      return this.consumeToken(), e7;
    }
    throw new XE(`sad sad panda`);
  }
  canPerformInRuleRecovery(e6, t2) {
    return this.canRecoverWithSingleTokenInsertion(e6, t2) || this.canRecoverWithSingleTokenDeletion(e6);
  }
  canRecoverWithSingleTokenInsertion(e6, t2) {
    if (!this.canTokenTypeBeInsertedInRecovery(e6) || F(t2)) return false;
    let n2 = this.LA(1);
    return hm(t2, (e7) => this.tokenMatcher(n2, e7)) !== void 0;
  }
  canRecoverWithSingleTokenDeletion(e6) {
    return this.canTokenTypeBeDeletedInRecovery(e6) ? this.tokenMatcher(this.LA(2), e6) : false;
  }
  isInCurrentRuleReSyncSet(e6) {
    let t2 = this.getCurrFollowKey();
    return Lm(this.getFollowSetFromFollowKey(t2), e6);
  }
  findReSyncTokenType() {
    let e6 = this.flattenFollowSet(), t2 = this.LA(1), n2 = 2;
    for (; ; ) {
      let r2 = hm(e6, (e7) => RT(t2, e7));
      if (r2 !== void 0) return r2;
      t2 = this.LA(n2), n2++;
    }
  }
  getCurrFollowKey() {
    if (this.RULE_STACK.length === 1) return YE;
    let e6 = this.getLastExplicitRuleShortName(), t2 = this.getLastExplicitRuleOccurrenceIndex(), n2 = this.getPreviousExplicitRuleShortName();
    return { ruleName: this.shortRuleNameToFullName(e6), idxInCallingRule: t2, inRule: this.shortRuleNameToFullName(n2) };
  }
  buildFullFollowKeyStack() {
    let e6 = this.RULE_STACK, t2 = this.RULE_OCCURRENCE_STACK;
    return M(e6, (n2, r2) => r2 === 0 ? YE : { ruleName: this.shortRuleNameToFullName(n2), idxInCallingRule: t2[r2], inRule: this.shortRuleNameToFullName(e6[r2 - 1]) });
  }
  flattenFollowSet() {
    return fl(M(this.buildFullFollowKeyStack(), (e6) => this.getFollowSetFromFollowKey(e6)));
  }
  getFollowSetFromFollowKey(e6) {
    if (e6 === YE) return [IT];
    let t2 = e6.ruleName + e6.idxInCallingRule + sw + e6.inRule;
    return this.resyncFollows[t2];
  }
  addToResyncTokens(e6, t2) {
    return this.tokenMatcher(e6, IT) || t2.push(e6), t2;
  }
  reSyncTo(e6) {
    let t2 = [], n2 = this.LA(1);
    for (; this.tokenMatcher(n2, e6) === false; ) n2 = this.SKIP_TOKEN(), this.addToResyncTokens(n2, t2);
    return Zp(t2);
  }
  attemptInRepetitionRecovery(e6, t2, n2, r2, i2, a2, o2) {
  }
  getCurrentGrammarPath(e6, t2) {
    return { ruleStack: this.getHumanReadableRuleStack(), occurrenceStack: k(this.RULE_OCCURRENCE_STACK), lastTok: e6, lastTokOccurrence: t2 };
  }
  getHumanReadableRuleStack() {
    return M(this.RULE_STACK, (e6) => this.shortRuleNameToFullName(e6));
  }
};
function QE(e6, t2, n2, r2, i2, a2, o2) {
  let s2 = this.getKeyForAutomaticLookahead(r2, i2), c2 = this.firstAfterRepMap[s2];
  if (c2 === void 0) {
    let e7 = this.getCurrRuleFullName(), t3 = this.getGAstProductions()[e7];
    c2 = new a2(t3, i2).startWalking(), this.firstAfterRepMap[s2] = c2;
  }
  let l2 = c2.token, u2 = c2.occurrence, d2 = c2.isEndOfRule;
  this.RULE_STACK.length === 1 && d2 && l2 === void 0 && (l2 = IT, u2 = 1), !(l2 === void 0 || u2 === void 0) && this.shouldInRepetitionRecoveryBeTried(l2, u2, o2) && this.tryInRepetitionRecovery(e6, t2, n2, l2);
}
const $E = 1024, eD = 1280, tD = 1536;
function nD(e6, t2, n2) {
  return n2 | t2 | e6;
}
var rD = class {
  constructor(e6) {
    this.maxLookahead = (e6 == null ? void 0 : e6.maxLookahead) ?? zD.maxLookahead;
  }
  validate(e6) {
    let t2 = this.validateNoLeftRecursion(e6.rules);
    if (F(t2)) {
      let n2 = this.validateEmptyOrAlternatives(e6.rules), r2 = this.validateAmbiguousAlternationAlternatives(e6.rules, this.maxLookahead), i2 = this.validateSomeNonEmptyLookaheadPath(e6.rules, this.maxLookahead);
      return [...t2, ...n2, ...r2, ...i2];
    }
    return t2;
  }
  validateNoLeftRecursion(e6) {
    return Sm(e6, (e7) => TE(e7, e7, VT));
  }
  validateEmptyOrAlternatives(e6) {
    return Sm(e6, (e7) => OE(e7, VT));
  }
  validateAmbiguousAlternationAlternatives(e6, t2) {
    return Sm(e6, (e7) => kE(e7, t2, VT));
  }
  validateSomeNonEmptyLookaheadPath(e6, t2) {
    return ME(e6, t2, VT);
  }
  buildLookaheadForAlternation(e6) {
    return nE(e6.prodOccurrence, e6.rule, e6.maxLookahead, e6.hasPredicates, e6.dynamicTokensEnabled, iE);
  }
  buildLookaheadForOptional(e6) {
    return rE(e6.prodOccurrence, e6.rule, e6.maxLookahead, e6.dynamicTokensEnabled, eE(e6.prodType), aE);
  }
}, iD = class {
  initLooksAhead(e6) {
    this.dynamicTokensEnabled = N(e6, `dynamicTokensEnabled`) ? e6.dynamicTokensEnabled : zD.dynamicTokensEnabled, this.maxLookahead = N(e6, `maxLookahead`) ? e6.maxLookahead : zD.maxLookahead, this.lookaheadStrategy = N(e6, `lookaheadStrategy`) ? e6.lookaheadStrategy : new rD({ maxLookahead: this.maxLookahead }), this.lookAheadFuncsCache = /* @__PURE__ */ new Map();
  }
  preComputeLookaheadFunctions(e6) {
    j(e6, (e7) => {
      this.TRACE_INIT(`${e7.name} Rule Lookahead`, () => {
        let { alternation: t2, repetition: n2, option: r2, repetitionMandatory: i2, repetitionMandatoryWithSeparator: a2, repetitionWithSeparator: o2 } = oD(e7);
        j(t2, (t3) => {
          let n3 = t3.idx === 0 ? `` : t3.idx;
          this.TRACE_INIT(`${ew(t3)}${n3}`, () => {
            let n4 = this.lookaheadStrategy.buildLookaheadForAlternation({ prodOccurrence: t3.idx, rule: e7, maxLookahead: t3.maxLookahead || this.maxLookahead, hasPredicates: t3.hasPredicates, dynamicTokensEnabled: this.dynamicTokensEnabled }), r3 = nD(this.fullRuleNameToShort[e7.name], 256, t3.idx);
            this.setLaFuncCache(r3, n4);
          });
        }), j(n2, (t3) => {
          this.computeLookaheadFunc(e7, t3.idx, 768, `Repetition`, t3.maxLookahead, ew(t3));
        }), j(r2, (t3) => {
          this.computeLookaheadFunc(e7, t3.idx, 512, `Option`, t3.maxLookahead, ew(t3));
        }), j(i2, (t3) => {
          this.computeLookaheadFunc(e7, t3.idx, $E, `RepetitionMandatory`, t3.maxLookahead, ew(t3));
        }), j(a2, (t3) => {
          this.computeLookaheadFunc(e7, t3.idx, tD, `RepetitionMandatoryWithSeparator`, t3.maxLookahead, ew(t3));
        }), j(o2, (t3) => {
          this.computeLookaheadFunc(e7, t3.idx, eD, `RepetitionWithSeparator`, t3.maxLookahead, ew(t3));
        });
      });
    });
  }
  computeLookaheadFunc(e6, t2, n2, r2, i2, a2) {
    this.TRACE_INIT(`${a2}${t2 === 0 ? `` : t2}`, () => {
      let a3 = this.lookaheadStrategy.buildLookaheadForOptional({ prodOccurrence: t2, rule: e6, maxLookahead: i2 || this.maxLookahead, dynamicTokensEnabled: this.dynamicTokensEnabled, prodType: r2 }), o2 = nD(this.fullRuleNameToShort[e6.name], n2, t2);
      this.setLaFuncCache(o2, a3);
    });
  }
  getKeyForAutomaticLookahead(e6, t2) {
    return nD(this.getLastExplicitRuleShortName(), e6, t2);
  }
  getLaFuncFromCache(e6) {
    return this.lookAheadFuncsCache.get(e6);
  }
  setLaFuncCache(e6, t2) {
    this.lookAheadFuncsCache.set(e6, t2);
  }
}, aD = new class extends XC {
  constructor() {
    super(...arguments), this.dslMethods = { option: [], alternation: [], repetition: [], repetitionWithSeparator: [], repetitionMandatory: [], repetitionMandatoryWithSeparator: [] };
  }
  reset() {
    this.dslMethods = { option: [], alternation: [], repetition: [], repetitionWithSeparator: [], repetitionMandatory: [], repetitionMandatoryWithSeparator: [] };
  }
  visitOption(e6) {
    this.dslMethods.option.push(e6);
  }
  visitRepetitionWithSeparator(e6) {
    this.dslMethods.repetitionWithSeparator.push(e6);
  }
  visitRepetitionMandatory(e6) {
    this.dslMethods.repetitionMandatory.push(e6);
  }
  visitRepetitionMandatoryWithSeparator(e6) {
    this.dslMethods.repetitionMandatoryWithSeparator.push(e6);
  }
  visitRepetition(e6) {
    this.dslMethods.repetition.push(e6);
  }
  visitAlternation(e6) {
    this.dslMethods.alternation.push(e6);
  }
}();
function oD(e6) {
  aD.reset(), e6.accept(aD);
  let t2 = aD.dslMethods;
  return aD.reset(), t2;
}
function sD(e6, t2) {
  isNaN(e6.startOffset) === true ? (e6.startOffset = t2.startOffset, e6.endOffset = t2.endOffset) : e6.endOffset < t2.endOffset && (e6.endOffset = t2.endOffset);
}
function cD(e6, t2) {
  isNaN(e6.startOffset) === true ? (e6.startOffset = t2.startOffset, e6.startColumn = t2.startColumn, e6.startLine = t2.startLine, e6.endOffset = t2.endOffset, e6.endColumn = t2.endColumn, e6.endLine = t2.endLine) : e6.endOffset < t2.endOffset && (e6.endOffset = t2.endOffset, e6.endColumn = t2.endColumn, e6.endLine = t2.endLine);
}
function lD(e6, t2, n2) {
  e6.children[n2] === void 0 ? e6.children[n2] = [t2] : e6.children[n2].push(t2);
}
function uD(e6, t2, n2) {
  e6.children[t2] === void 0 ? e6.children[t2] = [n2] : e6.children[t2].push(n2);
}
var dD = `name`;
function fD(e6, t2) {
  Object.defineProperty(e6, dD, { enumerable: false, configurable: true, writable: false, value: t2 });
}
function pD(e6, t2) {
  let n2 = ks(e6), r2 = n2.length;
  for (let i2 = 0; i2 < r2; i2++) {
    let r3 = e6[n2[i2]], a2 = r3.length;
    for (let e7 = 0; e7 < a2; e7++) {
      let n3 = r3[e7];
      n3.tokenTypeIdx === void 0 && this[n3.name](n3.children, t2);
    }
  }
}
function mD(e6, t2) {
  let n2 = function() {
  };
  return fD(n2, e6 + `BaseSemantics`), n2.prototype = { visit: function(e7, t3) {
    if (T(e7) && (e7 = e7[0]), !Zm(e7)) return this[e7.name](e7.children, t3);
  }, validateVisitor: function() {
    let e7 = _D(this, t2);
    if (!F(e7)) {
      let t3 = M(e7, (e8) => e8.msg);
      throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${t3.join(`

`).replace(/\n/g, `
	`)}`);
    }
  } }, n2.prototype.constructor = n2, n2._RULE_NAMES = t2, n2;
}
function hD(e6, t2, n2) {
  let r2 = function() {
  };
  fD(r2, e6 + `BaseSemanticsWithDefaults`);
  let i2 = Object.create(n2.prototype);
  return j(t2, (e7) => {
    i2[e7] = pD;
  }), r2.prototype = i2, r2.prototype.constructor = r2, r2;
}
var gD;
(function(e6) {
  e6[e6.REDUNDANT_METHOD = 0] = `REDUNDANT_METHOD`, e6[e6.MISSING_METHOD = 1] = `MISSING_METHOD`;
})(gD || (gD = {}));
function _D(e6, t2) {
  return vD(e6, t2);
}
function vD(e6, t2) {
  return Zd(M(um(t2, (t3) => Zi(e6[t3]) === false), (t3) => ({ msg: `Missing visitor method: <${t3}> on ${e6.constructor.name} CST Visitor.`, type: gD.MISSING_METHOD, methodName: t3 })));
}
var yD = class {
  initTreeBuilder(e6) {
    if (this.CST_STACK = [], this.outputCst = e6.outputCst, this.nodeLocationTracking = N(e6, `nodeLocationTracking`) ? e6.nodeLocationTracking : zD.nodeLocationTracking, !this.outputCst) this.cstInvocationStateUpdate = E, this.cstFinallyStateUpdate = E, this.cstPostTerminal = E, this.cstPostNonTerminal = E, this.cstPostRule = E;
    else if (/full/i.test(this.nodeLocationTracking)) this.recoveryEnabled ? (this.setNodeLocationFromToken = cD, this.setNodeLocationFromNode = cD, this.cstPostRule = E, this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery) : (this.setNodeLocationFromToken = E, this.setNodeLocationFromNode = E, this.cstPostRule = this.cstPostRuleFull, this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular);
    else if (/onlyOffset/i.test(this.nodeLocationTracking)) this.recoveryEnabled ? (this.setNodeLocationFromToken = sD, this.setNodeLocationFromNode = sD, this.cstPostRule = E, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery) : (this.setNodeLocationFromToken = E, this.setNodeLocationFromNode = E, this.cstPostRule = this.cstPostRuleOnlyOffset, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular);
    else if (/none/i.test(this.nodeLocationTracking)) this.setNodeLocationFromToken = E, this.setNodeLocationFromNode = E, this.cstPostRule = E, this.setInitialNodeLocation = E;
    else throw Error(`Invalid <nodeLocationTracking> config option: "${e6.nodeLocationTracking}"`);
  }
  setInitialNodeLocationOnlyOffsetRecovery(e6) {
    e6.location = { startOffset: NaN, endOffset: NaN };
  }
  setInitialNodeLocationOnlyOffsetRegular(e6) {
    e6.location = { startOffset: this.LA(1).startOffset, endOffset: NaN };
  }
  setInitialNodeLocationFullRecovery(e6) {
    e6.location = { startOffset: NaN, startLine: NaN, startColumn: NaN, endOffset: NaN, endLine: NaN, endColumn: NaN };
  }
  setInitialNodeLocationFullRegular(e6) {
    let t2 = this.LA(1);
    e6.location = { startOffset: t2.startOffset, startLine: t2.startLine, startColumn: t2.startColumn, endOffset: NaN, endLine: NaN, endColumn: NaN };
  }
  cstInvocationStateUpdate(e6) {
    let t2 = { name: e6, children: /* @__PURE__ */ Object.create(null) };
    this.setInitialNodeLocation(t2), this.CST_STACK.push(t2);
  }
  cstFinallyStateUpdate() {
    this.CST_STACK.pop();
  }
  cstPostRuleFull(e6) {
    let t2 = this.LA(0), n2 = e6.location;
    n2.startOffset <= t2.startOffset ? (n2.endOffset = t2.endOffset, n2.endLine = t2.endLine, n2.endColumn = t2.endColumn) : (n2.startOffset = NaN, n2.startLine = NaN, n2.startColumn = NaN);
  }
  cstPostRuleOnlyOffset(e6) {
    let t2 = this.LA(0), n2 = e6.location;
    n2.startOffset <= t2.startOffset ? n2.endOffset = t2.endOffset : n2.startOffset = NaN;
  }
  cstPostTerminal(e6, t2) {
    let n2 = this.CST_STACK[this.CST_STACK.length - 1];
    lD(n2, t2, e6), this.setNodeLocationFromToken(n2.location, t2);
  }
  cstPostNonTerminal(e6, t2) {
    let n2 = this.CST_STACK[this.CST_STACK.length - 1];
    uD(n2, t2, e6), this.setNodeLocationFromNode(n2.location, e6.location);
  }
  getBaseCstVisitorConstructor() {
    if (Zm(this.baseCstVisitorConstructor)) {
      let e6 = mD(this.className, ks(this.gastProductionsCache));
      return this.baseCstVisitorConstructor = e6, e6;
    }
    return this.baseCstVisitorConstructor;
  }
  getBaseCstVisitorConstructorWithDefaults() {
    if (Zm(this.baseCstVisitorWithDefaultsConstructor)) {
      let e6 = hD(this.className, ks(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
      return this.baseCstVisitorWithDefaultsConstructor = e6, e6;
    }
    return this.baseCstVisitorWithDefaultsConstructor;
  }
  getLastExplicitRuleShortName() {
    let e6 = this.RULE_STACK;
    return e6[e6.length - 1];
  }
  getPreviousExplicitRuleShortName() {
    let e6 = this.RULE_STACK;
    return e6[e6.length - 2];
  }
  getLastExplicitRuleOccurrenceIndex() {
    let e6 = this.RULE_OCCURRENCE_STACK;
    return e6[e6.length - 1];
  }
}, bD = class {
  initLexerAdapter() {
    this.tokVector = [], this.tokVectorLength = 0, this.currIdx = -1;
  }
  set input(e6) {
    if (this.selfAnalysisDone !== true) throw Error(`Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.`);
    this.reset(), this.tokVector = e6, this.tokVectorLength = e6.length;
  }
  get input() {
    return this.tokVector;
  }
  SKIP_TOKEN() {
    return this.currIdx <= this.tokVector.length - 2 ? (this.consumeToken(), this.LA(1)) : RD;
  }
  LA(e6) {
    let t2 = this.currIdx + e6;
    return t2 < 0 || this.tokVectorLength <= t2 ? RD : this.tokVector[t2];
  }
  consumeToken() {
    this.currIdx++;
  }
  exportLexerState() {
    return this.currIdx;
  }
  importLexerState(e6) {
    this.currIdx = e6;
  }
  resetLexerState() {
    this.currIdx = -1;
  }
  moveToTerminatedState() {
    this.currIdx = this.tokVector.length - 1;
  }
  getLexerPosition() {
    return this.exportLexerState();
  }
}, xD = class {
  ACTION(e6) {
    return e6.call(this);
  }
  consume(e6, t2, n2) {
    return this.consumeInternal(t2, e6, n2);
  }
  subrule(e6, t2, n2) {
    return this.subruleInternal(t2, e6, n2);
  }
  option(e6, t2) {
    return this.optionInternal(t2, e6);
  }
  or(e6, t2) {
    return this.orInternal(t2, e6);
  }
  many(e6, t2) {
    return this.manyInternal(e6, t2);
  }
  atLeastOne(e6, t2) {
    return this.atLeastOneInternal(e6, t2);
  }
  CONSUME(e6, t2) {
    return this.consumeInternal(e6, 0, t2);
  }
  CONSUME1(e6, t2) {
    return this.consumeInternal(e6, 1, t2);
  }
  CONSUME2(e6, t2) {
    return this.consumeInternal(e6, 2, t2);
  }
  CONSUME3(e6, t2) {
    return this.consumeInternal(e6, 3, t2);
  }
  CONSUME4(e6, t2) {
    return this.consumeInternal(e6, 4, t2);
  }
  CONSUME5(e6, t2) {
    return this.consumeInternal(e6, 5, t2);
  }
  CONSUME6(e6, t2) {
    return this.consumeInternal(e6, 6, t2);
  }
  CONSUME7(e6, t2) {
    return this.consumeInternal(e6, 7, t2);
  }
  CONSUME8(e6, t2) {
    return this.consumeInternal(e6, 8, t2);
  }
  CONSUME9(e6, t2) {
    return this.consumeInternal(e6, 9, t2);
  }
  SUBRULE(e6, t2) {
    return this.subruleInternal(e6, 0, t2);
  }
  SUBRULE1(e6, t2) {
    return this.subruleInternal(e6, 1, t2);
  }
  SUBRULE2(e6, t2) {
    return this.subruleInternal(e6, 2, t2);
  }
  SUBRULE3(e6, t2) {
    return this.subruleInternal(e6, 3, t2);
  }
  SUBRULE4(e6, t2) {
    return this.subruleInternal(e6, 4, t2);
  }
  SUBRULE5(e6, t2) {
    return this.subruleInternal(e6, 5, t2);
  }
  SUBRULE6(e6, t2) {
    return this.subruleInternal(e6, 6, t2);
  }
  SUBRULE7(e6, t2) {
    return this.subruleInternal(e6, 7, t2);
  }
  SUBRULE8(e6, t2) {
    return this.subruleInternal(e6, 8, t2);
  }
  SUBRULE9(e6, t2) {
    return this.subruleInternal(e6, 9, t2);
  }
  OPTION(e6) {
    return this.optionInternal(e6, 0);
  }
  OPTION1(e6) {
    return this.optionInternal(e6, 1);
  }
  OPTION2(e6) {
    return this.optionInternal(e6, 2);
  }
  OPTION3(e6) {
    return this.optionInternal(e6, 3);
  }
  OPTION4(e6) {
    return this.optionInternal(e6, 4);
  }
  OPTION5(e6) {
    return this.optionInternal(e6, 5);
  }
  OPTION6(e6) {
    return this.optionInternal(e6, 6);
  }
  OPTION7(e6) {
    return this.optionInternal(e6, 7);
  }
  OPTION8(e6) {
    return this.optionInternal(e6, 8);
  }
  OPTION9(e6) {
    return this.optionInternal(e6, 9);
  }
  OR(e6) {
    return this.orInternal(e6, 0);
  }
  OR1(e6) {
    return this.orInternal(e6, 1);
  }
  OR2(e6) {
    return this.orInternal(e6, 2);
  }
  OR3(e6) {
    return this.orInternal(e6, 3);
  }
  OR4(e6) {
    return this.orInternal(e6, 4);
  }
  OR5(e6) {
    return this.orInternal(e6, 5);
  }
  OR6(e6) {
    return this.orInternal(e6, 6);
  }
  OR7(e6) {
    return this.orInternal(e6, 7);
  }
  OR8(e6) {
    return this.orInternal(e6, 8);
  }
  OR9(e6) {
    return this.orInternal(e6, 9);
  }
  MANY(e6) {
    this.manyInternal(0, e6);
  }
  MANY1(e6) {
    this.manyInternal(1, e6);
  }
  MANY2(e6) {
    this.manyInternal(2, e6);
  }
  MANY3(e6) {
    this.manyInternal(3, e6);
  }
  MANY4(e6) {
    this.manyInternal(4, e6);
  }
  MANY5(e6) {
    this.manyInternal(5, e6);
  }
  MANY6(e6) {
    this.manyInternal(6, e6);
  }
  MANY7(e6) {
    this.manyInternal(7, e6);
  }
  MANY8(e6) {
    this.manyInternal(8, e6);
  }
  MANY9(e6) {
    this.manyInternal(9, e6);
  }
  MANY_SEP(e6) {
    this.manySepFirstInternal(0, e6);
  }
  MANY_SEP1(e6) {
    this.manySepFirstInternal(1, e6);
  }
  MANY_SEP2(e6) {
    this.manySepFirstInternal(2, e6);
  }
  MANY_SEP3(e6) {
    this.manySepFirstInternal(3, e6);
  }
  MANY_SEP4(e6) {
    this.manySepFirstInternal(4, e6);
  }
  MANY_SEP5(e6) {
    this.manySepFirstInternal(5, e6);
  }
  MANY_SEP6(e6) {
    this.manySepFirstInternal(6, e6);
  }
  MANY_SEP7(e6) {
    this.manySepFirstInternal(7, e6);
  }
  MANY_SEP8(e6) {
    this.manySepFirstInternal(8, e6);
  }
  MANY_SEP9(e6) {
    this.manySepFirstInternal(9, e6);
  }
  AT_LEAST_ONE(e6) {
    this.atLeastOneInternal(0, e6);
  }
  AT_LEAST_ONE1(e6) {
    return this.atLeastOneInternal(1, e6);
  }
  AT_LEAST_ONE2(e6) {
    this.atLeastOneInternal(2, e6);
  }
  AT_LEAST_ONE3(e6) {
    this.atLeastOneInternal(3, e6);
  }
  AT_LEAST_ONE4(e6) {
    this.atLeastOneInternal(4, e6);
  }
  AT_LEAST_ONE5(e6) {
    this.atLeastOneInternal(5, e6);
  }
  AT_LEAST_ONE6(e6) {
    this.atLeastOneInternal(6, e6);
  }
  AT_LEAST_ONE7(e6) {
    this.atLeastOneInternal(7, e6);
  }
  AT_LEAST_ONE8(e6) {
    this.atLeastOneInternal(8, e6);
  }
  AT_LEAST_ONE9(e6) {
    this.atLeastOneInternal(9, e6);
  }
  AT_LEAST_ONE_SEP(e6) {
    this.atLeastOneSepFirstInternal(0, e6);
  }
  AT_LEAST_ONE_SEP1(e6) {
    this.atLeastOneSepFirstInternal(1, e6);
  }
  AT_LEAST_ONE_SEP2(e6) {
    this.atLeastOneSepFirstInternal(2, e6);
  }
  AT_LEAST_ONE_SEP3(e6) {
    this.atLeastOneSepFirstInternal(3, e6);
  }
  AT_LEAST_ONE_SEP4(e6) {
    this.atLeastOneSepFirstInternal(4, e6);
  }
  AT_LEAST_ONE_SEP5(e6) {
    this.atLeastOneSepFirstInternal(5, e6);
  }
  AT_LEAST_ONE_SEP6(e6) {
    this.atLeastOneSepFirstInternal(6, e6);
  }
  AT_LEAST_ONE_SEP7(e6) {
    this.atLeastOneSepFirstInternal(7, e6);
  }
  AT_LEAST_ONE_SEP8(e6) {
    this.atLeastOneSepFirstInternal(8, e6);
  }
  AT_LEAST_ONE_SEP9(e6) {
    this.atLeastOneSepFirstInternal(9, e6);
  }
  RULE(e6, t2, n2 = BD) {
    if (Lm(this.definedRulesNames, e6)) {
      let t3 = { message: VT.buildDuplicateRuleNameError({ topLevelRule: e6, grammarName: this.className }), type: VD.DUPLICATE_RULE_NAME, ruleName: e6 };
      this.definitionErrors.push(t3);
    }
    this.definedRulesNames.push(e6);
    let r2 = this.defineRule(e6, t2, n2);
    return this[e6] = r2, r2;
  }
  OVERRIDE_RULE(e6, t2, n2 = BD) {
    let r2 = wE(e6, this.definedRulesNames, this.className);
    this.definitionErrors = this.definitionErrors.concat(r2);
    let i2 = this.defineRule(e6, t2, n2);
    return this[e6] = i2, i2;
  }
  BACKTRACK(e6, t2) {
    return function() {
      this.isBackTrackingStack.push(1);
      let n2 = this.saveRecogState();
      try {
        return e6.apply(this, t2), true;
      } catch (e7) {
        if (UE(e7)) return false;
        throw e7;
      } finally {
        this.reloadRecogState(n2), this.isBackTrackingStack.pop();
      }
    };
  }
  getGAstProductions() {
    return this.gastProductionsCache;
  }
  getSerializedGastProductions() {
    return JC(P(this.gastProductionsCache));
  }
}, SD = class {
  initRecognizerEngine(e6, t2) {
    if (this.className = this.constructor.name, this.shortRuleNameToFull = {}, this.fullRuleNameToShort = {}, this.ruleShortNameIdx = 256, this.tokenMatcher = sT, this.subruleIdx = 0, this.definedRulesNames = [], this.tokensMap = {}, this.isBackTrackingStack = [], this.RULE_STACK = [], this.RULE_OCCURRENCE_STACK = [], this.gastProductionsCache = {}, N(t2, `serializedGrammar`)) throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);
    if (T(e6)) {
      if (F(e6)) throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);
      if (typeof e6[0].startOffset == `number`) throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`);
    }
    if (T(e6)) this.tokensMap = uh(e6, (e7, t3) => (e7[t3.name] = t3, e7), {});
    else if (N(e6, `modes`) && om(fl(P(e6.modes)), bT)) this.tokensMap = uh(Sh(fl(P(e6.modes))), (e7, t3) => (e7[t3.name] = t3, e7), {});
    else if (Ai(e6)) this.tokensMap = k(e6);
    else throw Error(`<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition`);
    this.tokensMap.EOF = IT, this.tokenMatcher = om(N(e6, `modes`) ? fl(P(e6.modes)) : P(e6), (e7) => F(e7.categoryMatches)) ? sT : oT, uT(P(this.tokensMap));
  }
  defineRule(e6, t2, n2) {
    if (this.selfAnalysisDone) throw Error(`Grammar rule <${e6}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
    let r2 = N(n2, `resyncEnabled`) ? n2.resyncEnabled : BD.resyncEnabled, i2 = N(n2, `recoveryValueFunc`) ? n2.recoveryValueFunc : BD.recoveryValueFunc, a2 = this.ruleShortNameIdx << 12;
    this.ruleShortNameIdx++, this.shortRuleNameToFull[a2] = e6, this.fullRuleNameToShort[e6] = a2;
    let o2;
    return o2 = this.outputCst === true ? function(...n3) {
      try {
        this.ruleInvocationStateUpdate(a2, e6, this.subruleIdx), t2.apply(this, n3);
        let r3 = this.CST_STACK[this.CST_STACK.length - 1];
        return this.cstPostRule(r3), r3;
      } catch (e7) {
        return this.invokeRuleCatch(e7, r2, i2);
      } finally {
        this.ruleFinallyStateUpdate();
      }
    } : function(...n3) {
      try {
        return this.ruleInvocationStateUpdate(a2, e6, this.subruleIdx), t2.apply(this, n3);
      } catch (e7) {
        return this.invokeRuleCatch(e7, r2, i2);
      } finally {
        this.ruleFinallyStateUpdate();
      }
    }, Object.assign(o2, { ruleName: e6, originalGrammarAction: t2 });
  }
  invokeRuleCatch(e6, t2, n2) {
    let r2 = this.RULE_STACK.length === 1, i2 = t2 && !this.isBackTracking() && this.recoveryEnabled;
    if (UE(e6)) {
      let t3 = e6;
      if (i2) {
        let r3 = this.findReSyncTokenType();
        if (this.isInCurrentRuleReSyncSet(r3)) if (t3.resyncedTokens = this.reSyncTo(r3), this.outputCst) {
          let e7 = this.CST_STACK[this.CST_STACK.length - 1];
          return e7.recoveredNode = true, e7;
        } else return n2(e6);
        else {
          if (this.outputCst) {
            let e7 = this.CST_STACK[this.CST_STACK.length - 1];
            e7.recoveredNode = true, t3.partialCstResult = e7;
          }
          throw t3;
        }
      } else if (r2) return this.moveToTerminatedState(), n2(e6);
      else throw t3;
    } else throw e6;
  }
  optionInternal(e6, t2) {
    let n2 = this.getKeyForAutomaticLookahead(512, t2);
    return this.optionInternalLogic(e6, t2, n2);
  }
  optionInternalLogic(e6, t2, n2) {
    let r2 = this.getLaFuncFromCache(n2), i2;
    if (typeof e6 != `function`) {
      i2 = e6.DEF;
      let t3 = e6.GATE;
      if (t3 !== void 0) {
        let e7 = r2;
        r2 = () => t3.call(this) && e7.call(this);
      }
    } else i2 = e6;
    if (r2.call(this) === true) return i2.call(this);
  }
  atLeastOneInternal(e6, t2) {
    let n2 = this.getKeyForAutomaticLookahead($E, e6);
    return this.atLeastOneInternalLogic(e6, t2, n2);
  }
  atLeastOneInternalLogic(e6, t2, n2) {
    let r2 = this.getLaFuncFromCache(n2), i2;
    if (typeof t2 != `function`) {
      i2 = t2.DEF;
      let e7 = t2.GATE;
      if (e7 !== void 0) {
        let t3 = r2;
        r2 = () => e7.call(this) && t3.call(this);
      }
    } else i2 = t2;
    if (r2.call(this) === true) {
      let e7 = this.doSingleRepetition(i2);
      for (; r2.call(this) === true && e7 === true; ) e7 = this.doSingleRepetition(i2);
    } else throw this.raiseEarlyExitException(e6, W.REPETITION_MANDATORY, t2.ERR_MSG);
    this.attemptInRepetitionRecovery(this.atLeastOneInternal, [e6, t2], r2, $E, e6, YT);
  }
  atLeastOneSepFirstInternal(e6, t2) {
    let n2 = this.getKeyForAutomaticLookahead(tD, e6);
    this.atLeastOneSepFirstInternalLogic(e6, t2, n2);
  }
  atLeastOneSepFirstInternalLogic(e6, t2, n2) {
    let r2 = t2.DEF, i2 = t2.SEP;
    if (this.getLaFuncFromCache(n2).call(this) === true) {
      r2.call(this);
      let t3 = () => this.tokenMatcher(this.LA(1), i2);
      for (; this.tokenMatcher(this.LA(1), i2) === true; ) this.CONSUME(i2), r2.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [e6, i2, t3, r2, XT], t3, tD, e6, XT);
    } else throw this.raiseEarlyExitException(e6, W.REPETITION_MANDATORY_WITH_SEPARATOR, t2.ERR_MSG);
  }
  manyInternal(e6, t2) {
    let n2 = this.getKeyForAutomaticLookahead(768, e6);
    return this.manyInternalLogic(e6, t2, n2);
  }
  manyInternalLogic(e6, t2, n2) {
    let r2 = this.getLaFuncFromCache(n2), i2;
    if (typeof t2 != `function`) {
      i2 = t2.DEF;
      let e7 = t2.GATE;
      if (e7 !== void 0) {
        let t3 = r2;
        r2 = () => e7.call(this) && t3.call(this);
      }
    } else i2 = t2;
    let a2 = true;
    for (; r2.call(this) === true && a2 === true; ) a2 = this.doSingleRepetition(i2);
    this.attemptInRepetitionRecovery(this.manyInternal, [e6, t2], r2, 768, e6, qT, a2);
  }
  manySepFirstInternal(e6, t2) {
    let n2 = this.getKeyForAutomaticLookahead(eD, e6);
    this.manySepFirstInternalLogic(e6, t2, n2);
  }
  manySepFirstInternalLogic(e6, t2, n2) {
    let r2 = t2.DEF, i2 = t2.SEP;
    if (this.getLaFuncFromCache(n2).call(this) === true) {
      r2.call(this);
      let t3 = () => this.tokenMatcher(this.LA(1), i2);
      for (; this.tokenMatcher(this.LA(1), i2) === true; ) this.CONSUME(i2), r2.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [e6, i2, t3, r2, JT], t3, eD, e6, JT);
    }
  }
  repetitionSepSecondInternal(e6, t2, n2, r2, i2) {
    for (; n2(); ) this.CONSUME(t2), r2.call(this);
    this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [e6, t2, n2, r2, i2], n2, tD, e6, i2);
  }
  doSingleRepetition(e6) {
    let t2 = this.getLexerPosition();
    return e6.call(this), this.getLexerPosition() > t2;
  }
  orInternal(e6, t2) {
    let n2 = this.getKeyForAutomaticLookahead(256, t2), r2 = T(e6) ? e6 : e6.DEF, i2 = this.getLaFuncFromCache(n2).call(this, r2);
    if (i2 !== void 0) return r2[i2].ALT.call(this);
    this.raiseNoAltException(t2, e6.ERR_MSG);
  }
  ruleFinallyStateUpdate() {
    if (this.RULE_STACK.pop(), this.RULE_OCCURRENCE_STACK.pop(), this.cstFinallyStateUpdate(), this.RULE_STACK.length === 0 && this.isAtEndOfInput() === false) {
      let e6 = this.LA(1), t2 = this.errorMessageProvider.buildNotAllInputParsedMessage({ firstRedundant: e6, ruleName: this.getCurrRuleFullName() });
      this.SAVE_ERROR(new qE(t2, e6));
    }
  }
  subruleInternal(e6, t2, n2) {
    let r2;
    try {
      let i2 = n2 === void 0 ? void 0 : n2.ARGS;
      return this.subruleIdx = t2, r2 = e6.apply(this, i2), this.cstPostNonTerminal(r2, n2 !== void 0 && n2.LABEL !== void 0 ? n2.LABEL : e6.ruleName), r2;
    } catch (t3) {
      throw this.subruleInternalError(t3, n2, e6.ruleName);
    }
  }
  subruleInternalError(e6, t2, n2) {
    throw UE(e6) && e6.partialCstResult !== void 0 && (this.cstPostNonTerminal(e6.partialCstResult, t2 !== void 0 && t2.LABEL !== void 0 ? t2.LABEL : n2), delete e6.partialCstResult), e6;
  }
  consumeInternal(e6, t2, n2) {
    let r2;
    try {
      let t3 = this.LA(1);
      this.tokenMatcher(t3, e6) === true ? (this.consumeToken(), r2 = t3) : this.consumeInternalError(e6, t3, n2);
    } catch (n3) {
      r2 = this.consumeInternalRecovery(e6, t2, n3);
    }
    return this.cstPostTerminal(n2 !== void 0 && n2.LABEL !== void 0 ? n2.LABEL : e6.name, r2), r2;
  }
  consumeInternalError(e6, t2, n2) {
    let r2, i2 = this.LA(0);
    throw r2 = n2 !== void 0 && n2.ERR_MSG ? n2.ERR_MSG : this.errorMessageProvider.buildMismatchTokenMessage({ expected: e6, actual: t2, previous: i2, ruleName: this.getCurrRuleFullName() }), this.SAVE_ERROR(new GE(r2, t2, i2));
  }
  consumeInternalRecovery(e6, t2, n2) {
    if (this.recoveryEnabled && n2.name === `MismatchedTokenException` && !this.isBackTracking()) {
      let r2 = this.getFollowsForInRuleRecovery(e6, t2);
      try {
        return this.tryInRuleRecovery(e6, r2);
      } catch (e7) {
        throw e7.name === `InRuleRecoveryException` ? n2 : e7;
      }
    } else throw n2;
  }
  saveRecogState() {
    let e6 = this.errors, t2 = k(this.RULE_STACK);
    return { errors: e6, lexerState: this.exportLexerState(), RULE_STACK: t2, CST_STACK: this.CST_STACK };
  }
  reloadRecogState(e6) {
    this.errors = e6.errors, this.importLexerState(e6.lexerState), this.RULE_STACK = e6.RULE_STACK;
  }
  ruleInvocationStateUpdate(e6, t2, n2) {
    this.RULE_OCCURRENCE_STACK.push(n2), this.RULE_STACK.push(e6), this.cstInvocationStateUpdate(t2);
  }
  isBackTracking() {
    return this.isBackTrackingStack.length !== 0;
  }
  getCurrRuleFullName() {
    let e6 = this.getLastExplicitRuleShortName();
    return this.shortRuleNameToFull[e6];
  }
  shortRuleNameToFullName(e6) {
    return this.shortRuleNameToFull[e6];
  }
  isAtEndOfInput() {
    return this.tokenMatcher(this.LA(1), IT);
  }
  reset() {
    this.resetLexerState(), this.subruleIdx = 0, this.isBackTrackingStack = [], this.errors = [], this.RULE_STACK = [], this.CST_STACK = [], this.RULE_OCCURRENCE_STACK = [];
  }
}, CD = class {
  initErrorHandler(e6) {
    this._errors = [], this.errorMessageProvider = N(e6, `errorMessageProvider`) ? e6.errorMessageProvider : zD.errorMessageProvider;
  }
  SAVE_ERROR(e6) {
    if (UE(e6)) return e6.context = { ruleStack: this.getHumanReadableRuleStack(), ruleOccurrenceStack: k(this.RULE_OCCURRENCE_STACK) }, this._errors.push(e6), e6;
    throw Error(`Trying to save an Error which is not a RecognitionException`);
  }
  get errors() {
    return k(this._errors);
  }
  set errors(e6) {
    this._errors = e6;
  }
  raiseEarlyExitException(e6, t2, n2) {
    let r2 = this.getCurrRuleFullName(), i2 = this.getGAstProductions()[r2], a2 = pE(e6, i2, t2, this.maxLookahead)[0], o2 = [];
    for (let e7 = 1; e7 <= this.maxLookahead; e7++) o2.push(this.LA(e7));
    let s2 = this.errorMessageProvider.buildEarlyExitMessage({ expectedIterationPaths: a2, actual: o2, previous: this.LA(0), customUserDescription: n2, ruleName: r2 });
    throw this.SAVE_ERROR(new JE(s2, this.LA(1), this.LA(0)));
  }
  raiseNoAltException(e6, t2) {
    let n2 = this.getCurrRuleFullName(), r2 = this.getGAstProductions()[n2], i2 = fE(e6, r2, this.maxLookahead), a2 = [];
    for (let e7 = 1; e7 <= this.maxLookahead; e7++) a2.push(this.LA(e7));
    let o2 = this.LA(0), s2 = this.errorMessageProvider.buildNoViableAltMessage({ expectedPathsPerAlt: i2, actual: a2, previous: o2, customUserDescription: t2, ruleName: this.getCurrRuleFullName() });
    throw this.SAVE_ERROR(new KE(s2, this.LA(1), o2));
  }
}, wD = class {
  initContentAssist() {
  }
  computeContentAssist(e6, t2) {
    let n2 = this.gastProductionsCache[e6];
    if (Zm(n2)) throw Error(`Rule ->${e6}<- does not exist in this grammar.`);
    return QT([n2], t2, this.tokenMatcher, this.maxLookahead);
  }
  getNextPossibleTokenTypes(e6) {
    let t2 = _m(e6.ruleStack), n2 = this.getGAstProductions()[t2];
    return new GT(n2, e6).startWalking();
  }
}, TD = { description: `This Object indicates the Parser is during Recording Phase` };
Object.freeze(TD);
var ED = true, DD = 2 ** 8 - 1, OD = PT({ name: `RECORDING_PHASE_TOKEN`, pattern: U.NA });
uT([OD]);
var kD = LT(OD, `This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`, -1, -1, -1, -1, -1, -1);
Object.freeze(kD);
var AD = { name: `This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`, children: {} }, jD = class {
  initGastRecorder(e6) {
    this.recordingProdStack = [], this.RECORDING_PHASE = false;
  }
  enableRecording() {
    this.RECORDING_PHASE = true, this.TRACE_INIT(`Enable Recording`, () => {
      for (let e6 = 0; e6 < 10; e6++) {
        let t2 = e6 > 0 ? e6 : ``;
        this[`CONSUME${t2}`] = function(t3, n2) {
          return this.consumeInternalRecord(t3, e6, n2);
        }, this[`SUBRULE${t2}`] = function(t3, n2) {
          return this.subruleInternalRecord(t3, e6, n2);
        }, this[`OPTION${t2}`] = function(t3) {
          return this.optionInternalRecord(t3, e6);
        }, this[`OR${t2}`] = function(t3) {
          return this.orInternalRecord(t3, e6);
        }, this[`MANY${t2}`] = function(t3) {
          this.manyInternalRecord(e6, t3);
        }, this[`MANY_SEP${t2}`] = function(t3) {
          this.manySepFirstInternalRecord(e6, t3);
        }, this[`AT_LEAST_ONE${t2}`] = function(t3) {
          this.atLeastOneInternalRecord(e6, t3);
        }, this[`AT_LEAST_ONE_SEP${t2}`] = function(t3) {
          this.atLeastOneSepFirstInternalRecord(e6, t3);
        };
      }
      this.consume = function(e6, t2, n2) {
        return this.consumeInternalRecord(t2, e6, n2);
      }, this.subrule = function(e6, t2, n2) {
        return this.subruleInternalRecord(t2, e6, n2);
      }, this.option = function(e6, t2) {
        return this.optionInternalRecord(t2, e6);
      }, this.or = function(e6, t2) {
        return this.orInternalRecord(t2, e6);
      }, this.many = function(e6, t2) {
        this.manyInternalRecord(e6, t2);
      }, this.atLeastOne = function(e6, t2) {
        this.atLeastOneInternalRecord(e6, t2);
      }, this.ACTION = this.ACTION_RECORD, this.BACKTRACK = this.BACKTRACK_RECORD, this.LA = this.LA_RECORD;
    });
  }
  disableRecording() {
    this.RECORDING_PHASE = false, this.TRACE_INIT(`Deleting Recording methods`, () => {
      let e6 = this;
      for (let t2 = 0; t2 < 10; t2++) {
        let n2 = t2 > 0 ? t2 : ``;
        delete e6[`CONSUME${n2}`], delete e6[`SUBRULE${n2}`], delete e6[`OPTION${n2}`], delete e6[`OR${n2}`], delete e6[`MANY${n2}`], delete e6[`MANY_SEP${n2}`], delete e6[`AT_LEAST_ONE${n2}`], delete e6[`AT_LEAST_ONE_SEP${n2}`];
      }
      delete e6.consume, delete e6.subrule, delete e6.option, delete e6.or, delete e6.many, delete e6.atLeastOne, delete e6.ACTION, delete e6.BACKTRACK, delete e6.LA;
    });
  }
  ACTION_RECORD(e6) {
  }
  BACKTRACK_RECORD(e6, t2) {
    return () => true;
  }
  LA_RECORD(e6) {
    return RD;
  }
  topLevelRuleRecord(e6, t2) {
    try {
      let n2 = new UC({ definition: [], name: e6 });
      return n2.name = e6, this.recordingProdStack.push(n2), t2.call(this), this.recordingProdStack.pop(), n2;
    } catch (e7) {
      if (e7.KNOWN_RECORDER_ERROR !== true) try {
        e7.message += `
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`;
      } catch {
        throw e7;
      }
      throw e7;
    }
  }
  optionInternalRecord(e6, t2) {
    return MD.call(this, R, e6, t2);
  }
  atLeastOneInternalRecord(e6, t2) {
    MD.call(this, GC, t2, e6);
  }
  atLeastOneSepFirstInternalRecord(e6, t2) {
    MD.call(this, KC, t2, e6, ED);
  }
  manyInternalRecord(e6, t2) {
    MD.call(this, z, t2, e6);
  }
  manySepFirstInternalRecord(e6, t2) {
    MD.call(this, qC, t2, e6, ED);
  }
  orInternalRecord(e6, t2) {
    return ND.call(this, e6, t2);
  }
  subruleInternalRecord(e6, t2, n2) {
    if (FD(t2), !e6 || N(e6, `ruleName`) === false) {
      let n3 = Error(`<SUBRULE${PD(t2)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e6)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw n3.KNOWN_RECORDER_ERROR = true, n3;
    }
    let r2 = Jp(this.recordingProdStack), i2 = e6.ruleName, a2 = new L({ idx: t2, nonTerminalName: i2, label: n2 == null ? void 0 : n2.LABEL, referencedRule: void 0 });
    return r2.definition.push(a2), this.outputCst ? AD : TD;
  }
  consumeInternalRecord(e6, t2, n2) {
    if (FD(t2), !gT(e6)) {
      let n3 = Error(`<CONSUME${PD(t2)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e6)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw n3.KNOWN_RECORDER_ERROR = true, n3;
    }
    let r2 = Jp(this.recordingProdStack), i2 = new V({ idx: t2, terminalType: e6, label: n2 == null ? void 0 : n2.LABEL });
    return r2.definition.push(i2), kD;
  }
};
function MD(e6, t2, n2, r2 = false) {
  FD(n2);
  let i2 = Jp(this.recordingProdStack), a2 = Zi(t2) ? t2 : t2.DEF, o2 = new e6({ definition: [], idx: n2 });
  return r2 && (o2.separator = t2.SEP), N(t2, `MAX_LOOKAHEAD`) && (o2.maxLookahead = t2.MAX_LOOKAHEAD), this.recordingProdStack.push(o2), a2.call(this), i2.definition.push(o2), this.recordingProdStack.pop(), TD;
}
function ND(e6, t2) {
  FD(t2);
  let n2 = Jp(this.recordingProdStack), r2 = T(e6) === false, i2 = r2 === false ? e6 : e6.DEF, a2 = new B({ definition: [], idx: t2, ignoreAmbiguities: r2 && e6.IGNORE_AMBIGUITIES === true });
  return N(e6, `MAX_LOOKAHEAD`) && (a2.maxLookahead = e6.MAX_LOOKAHEAD), a2.hasPredicates = gh(i2, (e7) => Zi(e7.GATE)), n2.definition.push(a2), j(i2, (e7) => {
    let t3 = new WC({ definition: [] });
    a2.definition.push(t3), N(e7, `IGNORE_AMBIGUITIES`) ? t3.ignoreAmbiguities = e7.IGNORE_AMBIGUITIES : N(e7, `GATE`) && (t3.ignoreAmbiguities = true), this.recordingProdStack.push(t3), e7.ALT.call(this), this.recordingProdStack.pop();
  }), TD;
}
function PD(e6) {
  return e6 === 0 ? `` : `${e6}`;
}
function FD(e6) {
  if (e6 < 0 || e6 > DD) {
    let t2 = Error(`Invalid DSL Method idx value: <${e6}>
	Idx value must be a none negative value smaller than ${DD + 1}`);
    throw t2.KNOWN_RECORDER_ERROR = true, t2;
  }
}
var ID = class {
  initPerformanceTracer(e6) {
    if (N(e6, `traceInitPerf`)) {
      let t2 = e6.traceInitPerf, n2 = typeof t2 == `number`;
      this.traceInitMaxIdent = n2 ? t2 : 1 / 0, this.traceInitPerf = n2 ? t2 > 0 : t2;
    } else this.traceInitMaxIdent = 0, this.traceInitPerf = zD.traceInitPerf;
    this.traceInitIndent = -1;
  }
  TRACE_INIT(e6, t2) {
    if (this.traceInitPerf === true) {
      this.traceInitIndent++;
      let n2 = Array(this.traceInitIndent + 1).join(`	`);
      this.traceInitIndent < this.traceInitMaxIdent && console.log(`${n2}--> <${e6}>`);
      let { time: r2, value: i2 } = Th(t2), a2 = r2 > 10 ? console.warn : console.log;
      return this.traceInitIndent < this.traceInitMaxIdent && a2(`${n2}<-- <${e6}> time: ${r2}ms`), this.traceInitIndent--, i2;
    } else return t2();
  }
};
function LD(e6, t2) {
  t2.forEach((t3) => {
    let n2 = t3.prototype;
    Object.getOwnPropertyNames(n2).forEach((r2) => {
      if (r2 === `constructor`) return;
      let i2 = Object.getOwnPropertyDescriptor(n2, r2);
      i2 && (i2.get || i2.set) ? Object.defineProperty(e6.prototype, r2, i2) : e6.prototype[r2] = t3.prototype[r2];
    });
  });
}
const RD = LT(IT, ``, NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(RD);
const zD = Object.freeze({ recoveryEnabled: false, maxLookahead: 3, dynamicTokensEnabled: false, outputCst: true, errorMessageProvider: zT, nodeLocationTracking: `none`, traceInitPerf: false, skipValidations: false }), BD = Object.freeze({ recoveryValueFunc: () => void 0, resyncEnabled: true });
var VD;
(function(e6) {
  e6[e6.INVALID_RULE_NAME = 0] = `INVALID_RULE_NAME`, e6[e6.DUPLICATE_RULE_NAME = 1] = `DUPLICATE_RULE_NAME`, e6[e6.INVALID_RULE_OVERRIDE = 2] = `INVALID_RULE_OVERRIDE`, e6[e6.DUPLICATE_PRODUCTIONS = 3] = `DUPLICATE_PRODUCTIONS`, e6[e6.UNRESOLVED_SUBRULE_REF = 4] = `UNRESOLVED_SUBRULE_REF`, e6[e6.LEFT_RECURSION = 5] = `LEFT_RECURSION`, e6[e6.NONE_LAST_EMPTY_ALT = 6] = `NONE_LAST_EMPTY_ALT`, e6[e6.AMBIGUOUS_ALTS = 7] = `AMBIGUOUS_ALTS`, e6[e6.CONFLICT_TOKENS_RULES_NAMESPACE = 8] = `CONFLICT_TOKENS_RULES_NAMESPACE`, e6[e6.INVALID_TOKEN_NAME = 9] = `INVALID_TOKEN_NAME`, e6[e6.NO_NON_EMPTY_LOOKAHEAD = 10] = `NO_NON_EMPTY_LOOKAHEAD`, e6[e6.AMBIGUOUS_PREFIX_ALTS = 11] = `AMBIGUOUS_PREFIX_ALTS`, e6[e6.TOO_MANY_ALTS = 12] = `TOO_MANY_ALTS`, e6[e6.CUSTOM_LOOKAHEAD_VALIDATION = 13] = `CUSTOM_LOOKAHEAD_VALIDATION`;
})(VD || (VD = {}));
function HD(e6 = void 0) {
  return function() {
    return e6;
  };
}
var UD = class e3 {
  static performSelfAnalysis(e6) {
    throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.");
  }
  performSelfAnalysis() {
    this.TRACE_INIT(`performSelfAnalysis`, () => {
      let t2;
      this.selfAnalysisDone = true;
      let n2 = this.className;
      this.TRACE_INIT(`toFastProps`, () => {
        Eh(this);
      }), this.TRACE_INIT(`Grammar Recording`, () => {
        try {
          this.enableRecording(), j(this.definedRulesNames, (e6) => {
            let t3 = this[e6].originalGrammarAction, n3;
            this.TRACE_INIT(`${e6} Rule`, () => {
              n3 = this.topLevelRuleRecord(e6, t3);
            }), this.gastProductionsCache[e6] = n3;
          });
        } finally {
          this.disableRecording();
        }
      });
      let r2 = [];
      if (this.TRACE_INIT(`Grammar Resolving`, () => {
        r2 = IE({ rules: P(this.gastProductionsCache) }), this.definitionErrors = this.definitionErrors.concat(r2);
      }), this.TRACE_INIT(`Grammar Validations`, () => {
        if (F(r2) && this.skipValidations === false) {
          let e6 = LE({ rules: P(this.gastProductionsCache), tokenTypes: P(this.tokensMap), errMsgProvider: VT, grammarName: n2 }), t3 = _E({ lookaheadStrategy: this.lookaheadStrategy, rules: P(this.gastProductionsCache), tokenTypes: P(this.tokensMap), grammarName: n2 });
          this.definitionErrors = this.definitionErrors.concat(e6, t3);
        }
      }), F(this.definitionErrors) && (this.recoveryEnabled && this.TRACE_INIT(`computeAllProdsFollows`, () => {
        this.resyncFollows = lw(P(this.gastProductionsCache));
      }), this.TRACE_INIT(`ComputeLookaheadFunctions`, () => {
        var e6, t3;
        (t3 = (e6 = this.lookaheadStrategy).initialize) == null || t3.call(e6, { rules: P(this.gastProductionsCache) }), this.preComputeLookaheadFunctions(P(this.gastProductionsCache));
      })), !e3.DEFER_DEFINITION_ERRORS_HANDLING && !F(this.definitionErrors)) throw t2 = M(this.definitionErrors, (e6) => e6.message), Error(`Parser Definition Errors detected:
 ${t2.join(`
-------------------------------
`)}`);
    });
  }
  constructor(e6, t2) {
    this.definitionErrors = [], this.selfAnalysisDone = false;
    let n2 = this;
    if (n2.initErrorHandler(t2), n2.initLexerAdapter(), n2.initLooksAhead(t2), n2.initRecognizerEngine(e6, t2), n2.initRecoverable(t2), n2.initTreeBuilder(t2), n2.initContentAssist(), n2.initGastRecorder(t2), n2.initPerformanceTracer(t2), N(t2, `ignoredIssues`)) throw Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);
    this.skipValidations = N(t2, `skipValidations`) ? t2.skipValidations : zD.skipValidations;
  }
};
UD.DEFER_DEFINITION_ERRORS_HANDLING = false, LD(UD, [ZE, iD, yD, bD, SD, xD, CD, wD, jD, ID]);
var WD = class extends UD {
  constructor(e6, t2 = zD) {
    let n2 = k(t2);
    n2.outputCst = false, super(e6, n2);
  }
};
function GD(e6, t2, n2) {
  return `${e6.name}_${t2}_${n2}`;
}
var KD = class {
  constructor(e6) {
    this.target = e6;
  }
  isEpsilon() {
    return false;
  }
}, qD = class extends KD {
  constructor(e6, t2) {
    super(e6), this.tokenType = t2;
  }
}, JD = class extends KD {
  constructor(e6) {
    super(e6);
  }
  isEpsilon() {
    return true;
  }
}, YD = class extends KD {
  constructor(e6, t2, n2) {
    super(e6), this.rule = t2, this.followState = n2;
  }
  isEpsilon() {
    return true;
  }
};
function XD(e6) {
  let t2 = { decisionMap: {}, decisionStates: [], ruleToStartState: /* @__PURE__ */ new Map(), ruleToStopState: /* @__PURE__ */ new Map(), states: [] };
  ZD(t2, e6);
  let n2 = e6.length;
  for (let r2 = 0; r2 < n2; r2++) {
    let n3 = e6[r2], i2 = aO(t2, n3, n3);
    i2 !== void 0 && hO(t2, n3, i2);
  }
  return t2;
}
function ZD(e6, t2) {
  let n2 = t2.length;
  for (let r2 = 0; r2 < n2; r2++) {
    let n3 = t2[r2], i2 = K(e6, n3, void 0, { type: 2 }), a2 = K(e6, n3, void 0, { type: 7 });
    i2.stop = a2, e6.ruleToStartState.set(n3, i2), e6.ruleToStopState.set(n3, a2);
  }
}
function QD(e6, t2, n2) {
  return n2 instanceof V ? pO(e6, t2, n2.terminalType, n2) : n2 instanceof L ? mO(e6, t2, n2) : n2 instanceof B ? rO(e6, t2, n2) : n2 instanceof R ? iO(e6, t2, n2) : n2 instanceof z ? $D(e6, t2, n2) : n2 instanceof qC ? eO(e6, t2, n2) : n2 instanceof GC ? tO(e6, t2, n2) : n2 instanceof KC ? nO(e6, t2, n2) : aO(e6, t2, n2);
}
function $D(e6, t2, n2) {
  let r2 = K(e6, t2, n2, { type: 5 });
  return lO(e6, r2), sO(e6, t2, n2, uO(e6, t2, r2, n2, aO(e6, t2, n2)));
}
function eO(e6, t2, n2) {
  let r2 = K(e6, t2, n2, { type: 5 });
  return lO(e6, r2), sO(e6, t2, n2, uO(e6, t2, r2, n2, aO(e6, t2, n2)), pO(e6, t2, n2.separator, n2));
}
function tO(e6, t2, n2) {
  let r2 = K(e6, t2, n2, { type: 4 });
  return lO(e6, r2), oO(e6, t2, n2, uO(e6, t2, r2, n2, aO(e6, t2, n2)));
}
function nO(e6, t2, n2) {
  let r2 = K(e6, t2, n2, { type: 4 });
  return lO(e6, r2), oO(e6, t2, n2, uO(e6, t2, r2, n2, aO(e6, t2, n2)), pO(e6, t2, n2.separator, n2));
}
function rO(e6, t2, n2) {
  let r2 = K(e6, t2, n2, { type: 1 });
  return lO(e6, r2), uO(e6, t2, r2, n2, ...d(n2.definition, (n3) => QD(e6, t2, n3)));
}
function iO(e6, t2, n2) {
  let r2 = K(e6, t2, n2, { type: 1 });
  return lO(e6, r2), cO(e6, t2, n2, uO(e6, t2, r2, n2, aO(e6, t2, n2)));
}
function aO(e6, t2, n2) {
  let r2 = o(d(n2.definition, (n3) => QD(e6, t2, n3)), (e7) => e7 !== void 0);
  return r2.length === 1 ? r2[0] : r2.length === 0 ? void 0 : fO(e6, r2);
}
function oO(e6, t2, n2, r2, i2) {
  let a2 = r2.left, o2 = r2.right, s2 = K(e6, t2, n2, { type: 11 });
  lO(e6, s2);
  let c2 = K(e6, t2, n2, { type: 12 });
  return a2.loopback = s2, c2.loopback = s2, e6.decisionMap[GD(t2, i2 ? `RepetitionMandatoryWithSeparator` : `RepetitionMandatory`, n2.idx)] = s2, G(o2, s2), i2 === void 0 ? (G(s2, a2), G(s2, c2)) : (G(s2, c2), G(s2, i2.left), G(i2.right, a2)), { left: a2, right: c2 };
}
function sO(e6, t2, n2, r2, i2) {
  let a2 = r2.left, o2 = r2.right, s2 = K(e6, t2, n2, { type: 10 });
  lO(e6, s2);
  let c2 = K(e6, t2, n2, { type: 12 }), l2 = K(e6, t2, n2, { type: 9 });
  return s2.loopback = l2, c2.loopback = l2, G(s2, a2), G(s2, c2), G(o2, l2), i2 === void 0 ? G(l2, s2) : (G(l2, c2), G(l2, i2.left), G(i2.right, a2)), e6.decisionMap[GD(t2, i2 ? `RepetitionWithSeparator` : `Repetition`, n2.idx)] = s2, { left: s2, right: c2 };
}
function cO(e6, t2, n2, r2) {
  let i2 = r2.left, a2 = r2.right;
  return G(i2, a2), e6.decisionMap[GD(t2, `Option`, n2.idx)] = i2, r2;
}
function lO(e6, t2) {
  return e6.decisionStates.push(t2), t2.decision = e6.decisionStates.length - 1, t2.decision;
}
function uO(e6, t2, n2, r2, ...i2) {
  let a2 = K(e6, t2, r2, { type: 8, start: n2 });
  n2.end = a2;
  for (let e7 of i2) e7 === void 0 ? G(n2, a2) : (G(n2, e7.left), G(e7.right, a2));
  let o2 = { left: n2, right: a2 };
  return e6.decisionMap[GD(t2, dO(r2), r2.idx)] = n2, o2;
}
function dO(e6) {
  if (e6 instanceof B) return `Alternation`;
  if (e6 instanceof R) return `Option`;
  if (e6 instanceof z) return `Repetition`;
  if (e6 instanceof qC) return `RepetitionWithSeparator`;
  if (e6 instanceof GC) return `RepetitionMandatory`;
  if (e6 instanceof KC) return `RepetitionMandatoryWithSeparator`;
  throw Error(`Invalid production type encountered`);
}
function fO(e6, t2) {
  let n2 = t2.length;
  for (let r3 = 0; r3 < n2 - 1; r3++) {
    let n3 = t2[r3], i3;
    n3.left.transitions.length === 1 && (i3 = n3.left.transitions[0]);
    let a2 = i3 instanceof YD, o2 = i3, s2 = t2[r3 + 1].left;
    n3.left.type === 1 && n3.right.type === 1 && i3 !== void 0 && (a2 && o2.followState === n3.right || i3.target === n3.right) ? (a2 ? o2.followState = s2 : i3.target = s2, _O(e6, n3.right)) : G(n3.right, s2);
  }
  let r2 = t2[0], i2 = t2[n2 - 1];
  return { left: r2.left, right: i2.right };
}
function pO(e6, t2, n2, r2) {
  let i2 = K(e6, t2, r2, { type: 1 }), a2 = K(e6, t2, r2, { type: 1 });
  return gO(i2, new qD(a2, n2)), { left: i2, right: a2 };
}
function mO(e6, t2, n2) {
  let r2 = n2.referencedRule, i2 = e6.ruleToStartState.get(r2), a2 = K(e6, t2, n2, { type: 1 }), o2 = K(e6, t2, n2, { type: 1 });
  return gO(a2, new YD(i2, r2, o2)), { left: a2, right: o2 };
}
function hO(e6, t2, n2) {
  let r2 = e6.ruleToStartState.get(t2);
  G(r2, n2.left);
  let i2 = e6.ruleToStopState.get(t2);
  return G(n2.right, i2), { left: r2, right: i2 };
}
function G(e6, t2) {
  gO(e6, new JD(t2));
}
function K(e6, t2, n2, r2) {
  let i2 = Object.assign({ atn: e6, production: n2, epsilonOnlyTransitions: false, rule: t2, transitions: [], nextTokenWithinRule: [], stateNumber: e6.states.length }, r2);
  return e6.states.push(i2), i2;
}
function gO(e6, t2) {
  e6.transitions.length === 0 && (e6.epsilonOnlyTransitions = t2.isEpsilon()), e6.transitions.push(t2);
}
function _O(e6, t2) {
  e6.states.splice(e6.states.indexOf(t2), 1);
}
const vO = {};
var yO = class {
  constructor() {
    this.map = {}, this.configs = [];
  }
  get size() {
    return this.configs.length;
  }
  finalize() {
    this.map = {};
  }
  add(e6) {
    let t2 = bO(e6);
    t2 in this.map || (this.map[t2] = this.configs.length, this.configs.push(e6));
  }
  get elements() {
    return this.configs;
  }
  get alts() {
    return d(this.configs, (e6) => e6.alt);
  }
  get key() {
    let e6 = ``;
    for (let t2 in this.map) e6 += t2 + `:`;
    return e6;
  }
};
function bO(e6, t2 = true) {
  return `${t2 ? `a${e6.alt}` : ``}s${e6.state.stateNumber}:${e6.stack.map((e7) => e7.stateNumber.toString()).join(`_`)}`;
}
function xO(e6, t2) {
  return l(d(e6, t2), 1);
}
var SO = xO;
function CO(e6, t2) {
  return e6 && e6.length ? a(e6, s(t2, 2)) : [];
}
var wO = CO;
function TO(e6, t2) {
  let n2 = {};
  return (r2) => {
    let i2 = r2.toString(), a2 = n2[i2];
    return a2 === void 0 ? (a2 = { atnStartState: e6, decision: t2, states: {} }, n2[i2] = a2, a2) : a2;
  };
}
var EO = class {
  constructor() {
    this.predicates = [];
  }
  is(e6) {
    return e6 >= this.predicates.length || this.predicates[e6];
  }
  set(e6, t2) {
    this.predicates[e6] = t2;
  }
  toString() {
    let e6 = ``, t2 = this.predicates.length;
    for (let n2 = 0; n2 < t2; n2++) e6 += this.predicates[n2] === true ? `1` : `0`;
    return e6;
  }
}, DO = new EO(), OO = class extends rD {
  constructor(e6) {
    super(), this.logging = (e6 == null ? void 0 : e6.logging) ?? ((e7) => console.log(e7));
  }
  initialize(e6) {
    this.atn = XD(e6.rules), this.dfas = AO(this.atn);
  }
  validateAmbiguousAlternationAlternatives() {
    return [];
  }
  validateEmptyOrAlternatives() {
    return [];
  }
  buildLookaheadForAlternation(e6) {
    let { prodOccurrence: t2, rule: n2, hasPredicates: r2, dynamicTokensEnabled: i2 } = e6, a2 = this.dfas, o2 = this.logging, s2 = GD(n2, `Alternation`, t2), l2 = this.atn.decisionMap[s2].decision, f2 = d(tE({ maxLookahead: 1, occurrence: t2, prodType: `Alternation`, rule: n2 }), (e7) => d(e7, (e8) => e8[0]));
    if (kO(f2, false) && !i2) {
      let e7 = u(f2, (e8, t3, n3) => (c(t3, (t4) => {
        t4 && (e8[t4.tokenTypeIdx] = n3, c(t4.categoryMatches, (t5) => {
          e8[t5] = n3;
        }));
      }), e8), {});
      return r2 ? function(t3) {
        var _a3;
        let n3 = e7[this.LA(1).tokenTypeIdx];
        if (t3 !== void 0 && n3 !== void 0) {
          let e8 = (_a3 = t3[n3]) == null ? void 0 : _a3.GATE;
          if (e8 !== void 0 && e8.call(this) === false) return;
        }
        return n3;
      } : function() {
        return e7[this.LA(1).tokenTypeIdx];
      };
    } else if (r2) return function(e7) {
      let t3 = new EO(), n3 = e7 === void 0 ? 0 : e7.length;
      for (let r4 = 0; r4 < n3; r4++) {
        let n4 = e7 == null ? void 0 : e7[r4].GATE;
        t3.set(r4, n4 === void 0 || n4.call(this));
      }
      let r3 = jO.call(this, a2, l2, t3, o2);
      return typeof r3 == `number` ? r3 : void 0;
    };
    else return function() {
      let e7 = jO.call(this, a2, l2, DO, o2);
      return typeof e7 == `number` ? e7 : void 0;
    };
  }
  buildLookaheadForOptional(e6) {
    let { prodOccurrence: t2, rule: n2, prodType: r2, dynamicTokensEnabled: a2 } = e6, o2 = this.dfas, s2 = this.logging, l2 = GD(n2, r2, t2), f2 = this.atn.decisionMap[l2].decision, m2 = d(tE({ maxLookahead: 1, occurrence: t2, prodType: r2, rule: n2 }), (e7) => d(e7, (e8) => e8[0]));
    if (kO(m2) && m2[0][0] && !a2) {
      let e7 = m2[0], t3 = p(e7);
      if (t3.length === 1 && i(t3[0].categoryMatches)) {
        let e8 = t3[0].tokenTypeIdx;
        return function() {
          return this.LA(1).tokenTypeIdx === e8;
        };
      } else {
        let e8 = u(t3, (e9, t4) => (t4 !== void 0 && (e9[t4.tokenTypeIdx] = true, c(t4.categoryMatches, (t5) => {
          e9[t5] = true;
        })), e9), {});
        return function() {
          return e8[this.LA(1).tokenTypeIdx] === true;
        };
      }
    }
    return function() {
      let e7 = jO.call(this, o2, f2, DO, s2);
      return typeof e7 == `object` ? false : e7 === 0;
    };
  }
};
function kO(e6, t2 = true) {
  let n2 = /* @__PURE__ */ new Set();
  for (let r2 of e6) {
    let e7 = /* @__PURE__ */ new Set();
    for (let i2 of r2) {
      if (i2 === void 0) {
        if (t2) break;
        return false;
      }
      let r3 = [i2.tokenTypeIdx].concat(i2.categoryMatches);
      for (let t3 of r3) if (n2.has(t3)) {
        if (!e7.has(t3)) return false;
      } else n2.add(t3), e7.add(t3);
    }
  }
  return true;
}
function AO(e6) {
  let t2 = e6.decisionStates.length, n2 = Array(t2);
  for (let r2 = 0; r2 < t2; r2++) n2[r2] = TO(e6.decisionStates[r2], r2);
  return n2;
}
function jO(e6, t2, n2, r2) {
  let i2 = e6[t2](n2), a2 = i2.start;
  return a2 === void 0 && (a2 = WO(i2, HO(GO(i2.atnStartState))), i2.start = a2), MO.apply(this, [i2, a2, n2, r2]);
}
function MO(e6, t2, n2, r2) {
  let i2 = t2, a2 = 1, o2 = [], s2 = this.LA(a2++);
  for (; ; ) {
    let t3 = RO(i2, s2);
    if (t3 === void 0 && (t3 = NO.apply(this, [e6, i2, s2, a2, n2, r2])), t3 === vO) return LO(o2, i2, s2);
    if (t3.isAcceptState === true) return t3.prediction;
    i2 = t3, o2.push(s2), s2 = this.LA(a2++);
  }
}
function NO(e6, t2, n2, r2, i2, a2) {
  let o2 = zO(t2.configs, n2, i2);
  if (o2.size === 0) return UO(e6, t2, n2, vO), vO;
  let s2 = HO(o2), c2 = VO(o2, i2);
  if (c2 !== void 0) s2.isAcceptState = true, s2.prediction = c2, s2.configs.uniqueAlt = c2;
  else if (XO(o2)) {
    let t3 = f(o2.alts);
    s2.isAcceptState = true, s2.prediction = t3, s2.configs.uniqueAlt = t3, PO.apply(this, [e6, r2, o2.alts, a2]);
  }
  return s2 = UO(e6, t2, n2, s2), s2;
}
function PO(e6, t2, n2, r2) {
  let i2 = [];
  for (let e7 = 1; e7 <= t2; e7++) i2.push(this.LA(e7).tokenType);
  let a2 = e6.atnStartState, o2 = a2.rule, s2 = a2.production;
  r2(FO({ topLevelRule: o2, ambiguityIndices: n2, production: s2, prefixPath: i2 }));
}
function FO(e6) {
  let t2 = d(e6.prefixPath, (e7) => CT(e7)).join(`, `), n2 = e6.production.idx === 0 ? `` : e6.production.idx, r2 = `Ambiguous Alternatives Detected: <${e6.ambiguityIndices.join(`, `)}> in <${IO(e6.production)}${n2}> inside <${e6.topLevelRule.name}> Rule,
<${t2}> may appears as a prefix path in all these alternatives.
`;
  return r2 += `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, r2;
}
function IO(e6) {
  if (e6 instanceof L) return `SUBRULE`;
  if (e6 instanceof R) return `OPTION`;
  if (e6 instanceof B) return `OR`;
  if (e6 instanceof GC) return `AT_LEAST_ONE`;
  if (e6 instanceof KC) return `AT_LEAST_ONE_SEP`;
  if (e6 instanceof qC) return `MANY_SEP`;
  if (e6 instanceof z) return `MANY`;
  if (e6 instanceof V) return `CONSUME`;
  throw Error(`non exhaustive match`);
}
function LO(e6, t2, n2) {
  return { actualToken: n2, possibleTokenTypes: wO(SO(t2.configs.elements, (e7) => e7.state.transitions).filter((e7) => e7 instanceof qD).map((e7) => e7.tokenType), (e7) => e7.tokenTypeIdx), tokenPath: e6 };
}
function RO(e6, t2) {
  return e6.edges[t2.tokenTypeIdx];
}
function zO(e6, t2, n2) {
  let r2 = new yO(), i2 = [];
  for (let a3 of e6.elements) {
    if (n2.is(a3.alt) === false) continue;
    if (a3.state.type === 7) {
      i2.push(a3);
      continue;
    }
    let e7 = a3.state.transitions.length;
    for (let n3 = 0; n3 < e7; n3++) {
      let e8 = a3.state.transitions[n3], i3 = BO(e8, t2);
      i3 !== void 0 && r2.add({ state: i3, alt: a3.alt, stack: a3.stack });
    }
  }
  let a2;
  if (i2.length === 0 && r2.size === 1 && (a2 = r2), a2 === void 0) {
    a2 = new yO();
    for (let e7 of r2.elements) KO(e7, a2);
  }
  if (i2.length > 0 && !JO(a2)) for (let e7 of i2) a2.add(e7);
  return a2;
}
function BO(e6, t2) {
  if (e6 instanceof qD && RT(t2, e6.tokenType)) return e6.target;
}
function VO(e6, t2) {
  let n2;
  for (let r2 of e6.elements) if (t2.is(r2.alt) === true) {
    if (n2 === void 0) n2 = r2.alt;
    else if (n2 !== r2.alt) return;
  }
  return n2;
}
function HO(e6) {
  return { configs: e6, edges: {}, isAcceptState: false, prediction: -1 };
}
function UO(e6, t2, n2, r2) {
  return r2 = WO(e6, r2), t2.edges[n2.tokenTypeIdx] = r2, r2;
}
function WO(e6, t2) {
  if (t2 === vO) return t2;
  let n2 = t2.configs.key, r2 = e6.states[n2];
  return r2 === void 0 ? (t2.configs.finalize(), e6.states[n2] = t2, t2) : r2;
}
function GO(e6) {
  let t2 = new yO(), n2 = e6.transitions.length;
  for (let r2 = 0; r2 < n2; r2++) KO({ state: e6.transitions[r2].target, alt: r2, stack: [] }, t2);
  return t2;
}
function KO(e6, t2) {
  let n2 = e6.state;
  if (n2.type === 7) {
    if (e6.stack.length > 0) {
      let n3 = [...e6.stack];
      KO({ state: n3.pop(), alt: e6.alt, stack: n3 }, t2);
    } else t2.add(e6);
    return;
  }
  n2.epsilonOnlyTransitions || t2.add(e6);
  let r2 = n2.transitions.length;
  for (let i2 = 0; i2 < r2; i2++) {
    let r3 = n2.transitions[i2], a2 = qO(e6, r3);
    a2 !== void 0 && KO(a2, t2);
  }
}
function qO(e6, t2) {
  if (t2 instanceof JD) return { state: t2.target, alt: e6.alt, stack: e6.stack };
  if (t2 instanceof YD) {
    let n2 = [...e6.stack, t2.followState];
    return { state: t2.target, alt: e6.alt, stack: n2 };
  }
}
function JO(e6) {
  for (let t2 of e6.elements) if (t2.state.type === 7) return true;
  return false;
}
function YO(e6) {
  for (let t2 of e6.elements) if (t2.state.type !== 7) return false;
  return true;
}
function XO(e6) {
  if (YO(e6)) return true;
  let t2 = ZO(e6.elements);
  return QO(t2) && !$O(t2);
}
function ZO(e6) {
  let t2 = /* @__PURE__ */ new Map();
  for (let n2 of e6) {
    let e7 = bO(n2, false), r2 = t2.get(e7);
    r2 === void 0 && (r2 = {}, t2.set(e7, r2)), r2[n2.alt] = true;
  }
  return t2;
}
function QO(e6) {
  for (let t2 of Array.from(e6.values())) if (Object.keys(t2).length > 1) return true;
  return false;
}
function $O(e6) {
  for (let t2 of Array.from(e6.values())) if (Object.keys(t2).length === 1) return true;
  return false;
}
var ek;
(function(e6) {
  function t2(e7) {
    return typeof e7 == `string`;
  }
  e6.is = t2;
})(ek || (ek = {}));
var tk;
(function(e6) {
  function t2(e7) {
    return typeof e7 == `string`;
  }
  e6.is = t2;
})(tk || (tk = {}));
var nk;
(function(e6) {
  e6.MIN_VALUE = -2147483648, e6.MAX_VALUE = 2147483647;
  function t2(t3) {
    return typeof t3 == `number` && e6.MIN_VALUE <= t3 && t3 <= e6.MAX_VALUE;
  }
  e6.is = t2;
})(nk || (nk = {}));
var rk;
(function(e6) {
  e6.MIN_VALUE = 0, e6.MAX_VALUE = 2147483647;
  function t2(t3) {
    return typeof t3 == `number` && e6.MIN_VALUE <= t3 && t3 <= e6.MAX_VALUE;
  }
  e6.is = t2;
})(rk || (rk = {}));
var q;
(function(e6) {
  function t2(e7, t3) {
    return e7 === Number.MAX_VALUE && (e7 = rk.MAX_VALUE), t3 === Number.MAX_VALUE && (t3 = rk.MAX_VALUE), { line: e7, character: t3 };
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return Y.objectLiteral(t3) && Y.uinteger(t3.line) && Y.uinteger(t3.character);
  }
  e6.is = n2;
})(q || (q = {}));
var J;
(function(e6) {
  function t2(e7, t3, n3, r2) {
    if (Y.uinteger(e7) && Y.uinteger(t3) && Y.uinteger(n3) && Y.uinteger(r2)) return { start: q.create(e7, t3), end: q.create(n3, r2) };
    if (q.is(e7) && q.is(t3)) return { start: e7, end: t3 };
    throw Error(`Range#create called with invalid arguments[${e7}, ${t3}, ${n3}, ${r2}]`);
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return Y.objectLiteral(t3) && q.is(t3.start) && q.is(t3.end);
  }
  e6.is = n2;
})(J || (J = {}));
var ik;
(function(e6) {
  function t2(e7, t3) {
    return { uri: e7, range: t3 };
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return Y.objectLiteral(t3) && J.is(t3.range) && (Y.string(t3.uri) || Y.undefined(t3.uri));
  }
  e6.is = n2;
})(ik || (ik = {}));
var ak;
(function(e6) {
  function t2(e7, t3, n3, r2) {
    return { targetUri: e7, targetRange: t3, targetSelectionRange: n3, originSelectionRange: r2 };
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return Y.objectLiteral(t3) && J.is(t3.targetRange) && Y.string(t3.targetUri) && J.is(t3.targetSelectionRange) && (J.is(t3.originSelectionRange) || Y.undefined(t3.originSelectionRange));
  }
  e6.is = n2;
})(ak || (ak = {}));
var ok;
(function(e6) {
  function t2(e7, t3, n3, r2) {
    return { red: e7, green: t3, blue: n3, alpha: r2 };
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return Y.objectLiteral(t3) && Y.numberRange(t3.red, 0, 1) && Y.numberRange(t3.green, 0, 1) && Y.numberRange(t3.blue, 0, 1) && Y.numberRange(t3.alpha, 0, 1);
  }
  e6.is = n2;
})(ok || (ok = {}));
var sk;
(function(e6) {
  function t2(e7, t3) {
    return { range: e7, color: t3 };
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return Y.objectLiteral(t3) && J.is(t3.range) && ok.is(t3.color);
  }
  e6.is = n2;
})(sk || (sk = {}));
var ck;
(function(e6) {
  function t2(e7, t3, n3) {
    return { label: e7, textEdit: t3, additionalTextEdits: n3 };
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return Y.objectLiteral(t3) && Y.string(t3.label) && (Y.undefined(t3.textEdit) || _k.is(t3)) && (Y.undefined(t3.additionalTextEdits) || Y.typedArray(t3.additionalTextEdits, _k.is));
  }
  e6.is = n2;
})(ck || (ck = {}));
var lk;
(function(e6) {
  e6.Comment = `comment`, e6.Imports = `imports`, e6.Region = `region`;
})(lk || (lk = {}));
var uk;
(function(e6) {
  function t2(e7, t3, n3, r2, i2, a2) {
    let o2 = { startLine: e7, endLine: t3 };
    return Y.defined(n3) && (o2.startCharacter = n3), Y.defined(r2) && (o2.endCharacter = r2), Y.defined(i2) && (o2.kind = i2), Y.defined(a2) && (o2.collapsedText = a2), o2;
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return Y.objectLiteral(t3) && Y.uinteger(t3.startLine) && Y.uinteger(t3.startLine) && (Y.undefined(t3.startCharacter) || Y.uinteger(t3.startCharacter)) && (Y.undefined(t3.endCharacter) || Y.uinteger(t3.endCharacter)) && (Y.undefined(t3.kind) || Y.string(t3.kind));
  }
  e6.is = n2;
})(uk || (uk = {}));
var dk;
(function(e6) {
  function t2(e7, t3) {
    return { location: e7, message: t3 };
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return Y.defined(t3) && ik.is(t3.location) && Y.string(t3.message);
  }
  e6.is = n2;
})(dk || (dk = {}));
var fk;
(function(e6) {
  e6.Error = 1, e6.Warning = 2, e6.Information = 3, e6.Hint = 4;
})(fk || (fk = {}));
var pk;
(function(e6) {
  e6.Unnecessary = 1, e6.Deprecated = 2;
})(pk || (pk = {}));
var mk;
(function(e6) {
  function t2(e7) {
    let t3 = e7;
    return Y.objectLiteral(t3) && Y.string(t3.href);
  }
  e6.is = t2;
})(mk || (mk = {}));
var hk;
(function(e6) {
  function t2(e7, t3, n3, r2, i2, a2) {
    let o2 = { range: e7, message: t3 };
    return Y.defined(n3) && (o2.severity = n3), Y.defined(r2) && (o2.code = r2), Y.defined(i2) && (o2.source = i2), Y.defined(a2) && (o2.relatedInformation = a2), o2;
  }
  e6.create = t2;
  function n2(e7) {
    var _a3;
    let t3 = e7;
    return Y.defined(t3) && J.is(t3.range) && Y.string(t3.message) && (Y.number(t3.severity) || Y.undefined(t3.severity)) && (Y.integer(t3.code) || Y.string(t3.code) || Y.undefined(t3.code)) && (Y.undefined(t3.codeDescription) || Y.string((_a3 = t3.codeDescription) == null ? void 0 : _a3.href)) && (Y.string(t3.source) || Y.undefined(t3.source)) && (Y.undefined(t3.relatedInformation) || Y.typedArray(t3.relatedInformation, dk.is));
  }
  e6.is = n2;
})(hk || (hk = {}));
var gk;
(function(e6) {
  function t2(e7, t3, ...n3) {
    let r2 = { title: e7, command: t3 };
    return Y.defined(n3) && n3.length > 0 && (r2.arguments = n3), r2;
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return Y.defined(t3) && Y.string(t3.title) && Y.string(t3.command);
  }
  e6.is = n2;
})(gk || (gk = {}));
var _k;
(function(e6) {
  function t2(e7, t3) {
    return { range: e7, newText: t3 };
  }
  e6.replace = t2;
  function n2(e7, t3) {
    return { range: { start: e7, end: e7 }, newText: t3 };
  }
  e6.insert = n2;
  function r2(e7) {
    return { range: e7, newText: `` };
  }
  e6.del = r2;
  function i2(e7) {
    let t3 = e7;
    return Y.objectLiteral(t3) && Y.string(t3.newText) && J.is(t3.range);
  }
  e6.is = i2;
})(_k || (_k = {}));
var vk;
(function(e6) {
  function t2(e7, t3, n3) {
    let r2 = { label: e7 };
    return t3 !== void 0 && (r2.needsConfirmation = t3), n3 !== void 0 && (r2.description = n3), r2;
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return Y.objectLiteral(t3) && Y.string(t3.label) && (Y.boolean(t3.needsConfirmation) || t3.needsConfirmation === void 0) && (Y.string(t3.description) || t3.description === void 0);
  }
  e6.is = n2;
})(vk || (vk = {}));
var yk;
(function(e6) {
  function t2(e7) {
    let t3 = e7;
    return Y.string(t3);
  }
  e6.is = t2;
})(yk || (yk = {}));
var bk;
(function(e6) {
  function t2(e7, t3, n3) {
    return { range: e7, newText: t3, annotationId: n3 };
  }
  e6.replace = t2;
  function n2(e7, t3, n3) {
    return { range: { start: e7, end: e7 }, newText: t3, annotationId: n3 };
  }
  e6.insert = n2;
  function r2(e7, t3) {
    return { range: e7, newText: ``, annotationId: t3 };
  }
  e6.del = r2;
  function i2(e7) {
    let t3 = e7;
    return _k.is(t3) && (vk.is(t3.annotationId) || yk.is(t3.annotationId));
  }
  e6.is = i2;
})(bk || (bk = {}));
var xk;
(function(e6) {
  function t2(e7, t3) {
    return { textDocument: e7, edits: t3 };
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return Y.defined(t3) && Ok.is(t3.textDocument) && Array.isArray(t3.edits);
  }
  e6.is = n2;
})(xk || (xk = {}));
var Sk;
(function(e6) {
  function t2(e7, t3, n3) {
    let r2 = { kind: `create`, uri: e7 };
    return t3 !== void 0 && (t3.overwrite !== void 0 || t3.ignoreIfExists !== void 0) && (r2.options = t3), n3 !== void 0 && (r2.annotationId = n3), r2;
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return t3 && t3.kind === `create` && Y.string(t3.uri) && (t3.options === void 0 || (t3.options.overwrite === void 0 || Y.boolean(t3.options.overwrite)) && (t3.options.ignoreIfExists === void 0 || Y.boolean(t3.options.ignoreIfExists))) && (t3.annotationId === void 0 || yk.is(t3.annotationId));
  }
  e6.is = n2;
})(Sk || (Sk = {}));
var Ck;
(function(e6) {
  function t2(e7, t3, n3, r2) {
    let i2 = { kind: `rename`, oldUri: e7, newUri: t3 };
    return n3 !== void 0 && (n3.overwrite !== void 0 || n3.ignoreIfExists !== void 0) && (i2.options = n3), r2 !== void 0 && (i2.annotationId = r2), i2;
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return t3 && t3.kind === `rename` && Y.string(t3.oldUri) && Y.string(t3.newUri) && (t3.options === void 0 || (t3.options.overwrite === void 0 || Y.boolean(t3.options.overwrite)) && (t3.options.ignoreIfExists === void 0 || Y.boolean(t3.options.ignoreIfExists))) && (t3.annotationId === void 0 || yk.is(t3.annotationId));
  }
  e6.is = n2;
})(Ck || (Ck = {}));
var wk;
(function(e6) {
  function t2(e7, t3, n3) {
    let r2 = { kind: `delete`, uri: e7 };
    return t3 !== void 0 && (t3.recursive !== void 0 || t3.ignoreIfNotExists !== void 0) && (r2.options = t3), n3 !== void 0 && (r2.annotationId = n3), r2;
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return t3 && t3.kind === `delete` && Y.string(t3.uri) && (t3.options === void 0 || (t3.options.recursive === void 0 || Y.boolean(t3.options.recursive)) && (t3.options.ignoreIfNotExists === void 0 || Y.boolean(t3.options.ignoreIfNotExists))) && (t3.annotationId === void 0 || yk.is(t3.annotationId));
  }
  e6.is = n2;
})(wk || (wk = {}));
var Tk;
(function(e6) {
  function t2(e7) {
    let t3 = e7;
    return t3 && (t3.changes !== void 0 || t3.documentChanges !== void 0) && (t3.documentChanges === void 0 || t3.documentChanges.every((e8) => Y.string(e8.kind) ? Sk.is(e8) || Ck.is(e8) || wk.is(e8) : xk.is(e8)));
  }
  e6.is = t2;
})(Tk || (Tk = {}));
var Ek;
(function(e6) {
  function t2(e7) {
    return { uri: e7 };
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return Y.defined(t3) && Y.string(t3.uri);
  }
  e6.is = n2;
})(Ek || (Ek = {}));
var Dk;
(function(e6) {
  function t2(e7, t3) {
    return { uri: e7, version: t3 };
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return Y.defined(t3) && Y.string(t3.uri) && Y.integer(t3.version);
  }
  e6.is = n2;
})(Dk || (Dk = {}));
var Ok;
(function(e6) {
  function t2(e7, t3) {
    return { uri: e7, version: t3 };
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return Y.defined(t3) && Y.string(t3.uri) && (t3.version === null || Y.integer(t3.version));
  }
  e6.is = n2;
})(Ok || (Ok = {}));
var kk;
(function(e6) {
  function t2(e7, t3, n3, r2) {
    return { uri: e7, languageId: t3, version: n3, text: r2 };
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return Y.defined(t3) && Y.string(t3.uri) && Y.string(t3.languageId) && Y.integer(t3.version) && Y.string(t3.text);
  }
  e6.is = n2;
})(kk || (kk = {}));
var Ak;
(function(e6) {
  e6.PlainText = `plaintext`, e6.Markdown = `markdown`;
  function t2(t3) {
    let n2 = t3;
    return n2 === e6.PlainText || n2 === e6.Markdown;
  }
  e6.is = t2;
})(Ak || (Ak = {}));
var jk;
(function(e6) {
  function t2(e7) {
    let t3 = e7;
    return Y.objectLiteral(e7) && Ak.is(t3.kind) && Y.string(t3.value);
  }
  e6.is = t2;
})(jk || (jk = {}));
var Mk;
(function(e6) {
  e6.Text = 1, e6.Method = 2, e6.Function = 3, e6.Constructor = 4, e6.Field = 5, e6.Variable = 6, e6.Class = 7, e6.Interface = 8, e6.Module = 9, e6.Property = 10, e6.Unit = 11, e6.Value = 12, e6.Enum = 13, e6.Keyword = 14, e6.Snippet = 15, e6.Color = 16, e6.File = 17, e6.Reference = 18, e6.Folder = 19, e6.EnumMember = 20, e6.Constant = 21, e6.Struct = 22, e6.Event = 23, e6.Operator = 24, e6.TypeParameter = 25;
})(Mk || (Mk = {}));
var Nk;
(function(e6) {
  e6.PlainText = 1, e6.Snippet = 2;
})(Nk || (Nk = {}));
var Pk;
(function(e6) {
  e6.Deprecated = 1;
})(Pk || (Pk = {}));
var Fk;
(function(e6) {
  function t2(e7, t3, n3) {
    return { newText: e7, insert: t3, replace: n3 };
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return t3 && Y.string(t3.newText) && J.is(t3.insert) && J.is(t3.replace);
  }
  e6.is = n2;
})(Fk || (Fk = {}));
var Ik;
(function(e6) {
  e6.asIs = 1, e6.adjustIndentation = 2;
})(Ik || (Ik = {}));
var Lk;
(function(e6) {
  function t2(e7) {
    let t3 = e7;
    return t3 && (Y.string(t3.detail) || t3.detail === void 0) && (Y.string(t3.description) || t3.description === void 0);
  }
  e6.is = t2;
})(Lk || (Lk = {}));
var Rk;
(function(e6) {
  function t2(e7) {
    return { label: e7 };
  }
  e6.create = t2;
})(Rk || (Rk = {}));
var zk;
(function(e6) {
  function t2(e7, t3) {
    return { items: e7 || [], isIncomplete: !!t3 };
  }
  e6.create = t2;
})(zk || (zk = {}));
var Bk;
(function(e6) {
  function t2(e7) {
    return e7.replace(/[\\`*_{}[\]()#+\-.!]/g, `\\$&`);
  }
  e6.fromPlainText = t2;
  function n2(e7) {
    let t3 = e7;
    return Y.string(t3) || Y.objectLiteral(t3) && Y.string(t3.language) && Y.string(t3.value);
  }
  e6.is = n2;
})(Bk || (Bk = {}));
var Vk;
(function(e6) {
  function t2(e7) {
    let t3 = e7;
    return !!t3 && Y.objectLiteral(t3) && (jk.is(t3.contents) || Bk.is(t3.contents) || Y.typedArray(t3.contents, Bk.is)) && (e7.range === void 0 || J.is(e7.range));
  }
  e6.is = t2;
})(Vk || (Vk = {}));
var Hk;
(function(e6) {
  function t2(e7, t3) {
    return t3 ? { label: e7, documentation: t3 } : { label: e7 };
  }
  e6.create = t2;
})(Hk || (Hk = {}));
var Uk;
(function(e6) {
  function t2(e7, t3, ...n2) {
    let r2 = { label: e7 };
    return Y.defined(t3) && (r2.documentation = t3), Y.defined(n2) ? r2.parameters = n2 : r2.parameters = [], r2;
  }
  e6.create = t2;
})(Uk || (Uk = {}));
var Wk;
(function(e6) {
  e6.Text = 1, e6.Read = 2, e6.Write = 3;
})(Wk || (Wk = {}));
var Gk;
(function(e6) {
  function t2(e7, t3) {
    let n2 = { range: e7 };
    return Y.number(t3) && (n2.kind = t3), n2;
  }
  e6.create = t2;
})(Gk || (Gk = {}));
var Kk;
(function(e6) {
  e6.File = 1, e6.Module = 2, e6.Namespace = 3, e6.Package = 4, e6.Class = 5, e6.Method = 6, e6.Property = 7, e6.Field = 8, e6.Constructor = 9, e6.Enum = 10, e6.Interface = 11, e6.Function = 12, e6.Variable = 13, e6.Constant = 14, e6.String = 15, e6.Number = 16, e6.Boolean = 17, e6.Array = 18, e6.Object = 19, e6.Key = 20, e6.Null = 21, e6.EnumMember = 22, e6.Struct = 23, e6.Event = 24, e6.Operator = 25, e6.TypeParameter = 26;
})(Kk || (Kk = {}));
var qk;
(function(e6) {
  e6.Deprecated = 1;
})(qk || (qk = {}));
var Jk;
(function(e6) {
  function t2(e7, t3, n2, r2, i2) {
    let a2 = { name: e7, kind: t3, location: { uri: r2, range: n2 } };
    return i2 && (a2.containerName = i2), a2;
  }
  e6.create = t2;
})(Jk || (Jk = {}));
var Yk;
(function(e6) {
  function t2(e7, t3, n2, r2) {
    return r2 === void 0 ? { name: e7, kind: t3, location: { uri: n2 } } : { name: e7, kind: t3, location: { uri: n2, range: r2 } };
  }
  e6.create = t2;
})(Yk || (Yk = {}));
var Xk;
(function(e6) {
  function t2(e7, t3, n3, r2, i2, a2) {
    let o2 = { name: e7, detail: t3, kind: n3, range: r2, selectionRange: i2 };
    return a2 !== void 0 && (o2.children = a2), o2;
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return t3 && Y.string(t3.name) && Y.number(t3.kind) && J.is(t3.range) && J.is(t3.selectionRange) && (t3.detail === void 0 || Y.string(t3.detail)) && (t3.deprecated === void 0 || Y.boolean(t3.deprecated)) && (t3.children === void 0 || Array.isArray(t3.children)) && (t3.tags === void 0 || Array.isArray(t3.tags));
  }
  e6.is = n2;
})(Xk || (Xk = {}));
var Zk;
(function(e6) {
  e6.Empty = ``, e6.QuickFix = `quickfix`, e6.Refactor = `refactor`, e6.RefactorExtract = `refactor.extract`, e6.RefactorInline = `refactor.inline`, e6.RefactorRewrite = `refactor.rewrite`, e6.Source = `source`, e6.SourceOrganizeImports = `source.organizeImports`, e6.SourceFixAll = `source.fixAll`;
})(Zk || (Zk = {}));
var Qk;
(function(e6) {
  e6.Invoked = 1, e6.Automatic = 2;
})(Qk || (Qk = {}));
var $k;
(function(e6) {
  function t2(e7, t3, n3) {
    let r2 = { diagnostics: e7 };
    return t3 != null && (r2.only = t3), n3 != null && (r2.triggerKind = n3), r2;
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return Y.defined(t3) && Y.typedArray(t3.diagnostics, hk.is) && (t3.only === void 0 || Y.typedArray(t3.only, Y.string)) && (t3.triggerKind === void 0 || t3.triggerKind === Qk.Invoked || t3.triggerKind === Qk.Automatic);
  }
  e6.is = n2;
})($k || ($k = {}));
var eA;
(function(e6) {
  function t2(e7, t3, n3) {
    let r2 = { title: e7 }, i2 = true;
    return typeof t3 == `string` ? (i2 = false, r2.kind = t3) : gk.is(t3) ? r2.command = t3 : r2.edit = t3, i2 && n3 !== void 0 && (r2.kind = n3), r2;
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return t3 && Y.string(t3.title) && (t3.diagnostics === void 0 || Y.typedArray(t3.diagnostics, hk.is)) && (t3.kind === void 0 || Y.string(t3.kind)) && (t3.edit !== void 0 || t3.command !== void 0) && (t3.command === void 0 || gk.is(t3.command)) && (t3.isPreferred === void 0 || Y.boolean(t3.isPreferred)) && (t3.edit === void 0 || Tk.is(t3.edit));
  }
  e6.is = n2;
})(eA || (eA = {}));
var tA;
(function(e6) {
  function t2(e7, t3) {
    let n3 = { range: e7 };
    return Y.defined(t3) && (n3.data = t3), n3;
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return Y.defined(t3) && J.is(t3.range) && (Y.undefined(t3.command) || gk.is(t3.command));
  }
  e6.is = n2;
})(tA || (tA = {}));
var nA;
(function(e6) {
  function t2(e7, t3) {
    return { tabSize: e7, insertSpaces: t3 };
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return Y.defined(t3) && Y.uinteger(t3.tabSize) && Y.boolean(t3.insertSpaces);
  }
  e6.is = n2;
})(nA || (nA = {}));
var rA;
(function(e6) {
  function t2(e7, t3, n3) {
    return { range: e7, target: t3, data: n3 };
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return Y.defined(t3) && J.is(t3.range) && (Y.undefined(t3.target) || Y.string(t3.target));
  }
  e6.is = n2;
})(rA || (rA = {}));
var iA;
(function(e6) {
  function t2(e7, t3) {
    return { range: e7, parent: t3 };
  }
  e6.create = t2;
  function n2(t3) {
    let n3 = t3;
    return Y.objectLiteral(n3) && J.is(n3.range) && (n3.parent === void 0 || e6.is(n3.parent));
  }
  e6.is = n2;
})(iA || (iA = {}));
var aA;
(function(e6) {
  e6.namespace = `namespace`, e6.type = `type`, e6.class = `class`, e6.enum = `enum`, e6.interface = `interface`, e6.struct = `struct`, e6.typeParameter = `typeParameter`, e6.parameter = `parameter`, e6.variable = `variable`, e6.property = `property`, e6.enumMember = `enumMember`, e6.event = `event`, e6.function = `function`, e6.method = `method`, e6.macro = `macro`, e6.keyword = `keyword`, e6.modifier = `modifier`, e6.comment = `comment`, e6.string = `string`, e6.number = `number`, e6.regexp = `regexp`, e6.operator = `operator`, e6.decorator = `decorator`;
})(aA || (aA = {}));
var oA;
(function(e6) {
  e6.declaration = `declaration`, e6.definition = `definition`, e6.readonly = `readonly`, e6.static = `static`, e6.deprecated = `deprecated`, e6.abstract = `abstract`, e6.async = `async`, e6.modification = `modification`, e6.documentation = `documentation`, e6.defaultLibrary = `defaultLibrary`;
})(oA || (oA = {}));
var sA;
(function(e6) {
  function t2(e7) {
    let t3 = e7;
    return Y.objectLiteral(t3) && (t3.resultId === void 0 || typeof t3.resultId == `string`) && Array.isArray(t3.data) && (t3.data.length === 0 || typeof t3.data[0] == `number`);
  }
  e6.is = t2;
})(sA || (sA = {}));
var cA;
(function(e6) {
  function t2(e7, t3) {
    return { range: e7, text: t3 };
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return t3 != null && J.is(t3.range) && Y.string(t3.text);
  }
  e6.is = n2;
})(cA || (cA = {}));
var lA;
(function(e6) {
  function t2(e7, t3, n3) {
    return { range: e7, variableName: t3, caseSensitiveLookup: n3 };
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return t3 != null && J.is(t3.range) && Y.boolean(t3.caseSensitiveLookup) && (Y.string(t3.variableName) || t3.variableName === void 0);
  }
  e6.is = n2;
})(lA || (lA = {}));
var uA;
(function(e6) {
  function t2(e7, t3) {
    return { range: e7, expression: t3 };
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return t3 != null && J.is(t3.range) && (Y.string(t3.expression) || t3.expression === void 0);
  }
  e6.is = n2;
})(uA || (uA = {}));
var dA;
(function(e6) {
  function t2(e7, t3) {
    return { frameId: e7, stoppedLocation: t3 };
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return Y.defined(t3) && J.is(e7.stoppedLocation);
  }
  e6.is = n2;
})(dA || (dA = {}));
var fA;
(function(e6) {
  e6.Type = 1, e6.Parameter = 2;
  function t2(e7) {
    return e7 === 1 || e7 === 2;
  }
  e6.is = t2;
})(fA || (fA = {}));
var pA;
(function(e6) {
  function t2(e7) {
    return { value: e7 };
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return Y.objectLiteral(t3) && (t3.tooltip === void 0 || Y.string(t3.tooltip) || jk.is(t3.tooltip)) && (t3.location === void 0 || ik.is(t3.location)) && (t3.command === void 0 || gk.is(t3.command));
  }
  e6.is = n2;
})(pA || (pA = {}));
var mA;
(function(e6) {
  function t2(e7, t3, n3) {
    let r2 = { position: e7, label: t3 };
    return n3 !== void 0 && (r2.kind = n3), r2;
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return Y.objectLiteral(t3) && q.is(t3.position) && (Y.string(t3.label) || Y.typedArray(t3.label, pA.is)) && (t3.kind === void 0 || fA.is(t3.kind)) && t3.textEdits === void 0 || Y.typedArray(t3.textEdits, _k.is) && (t3.tooltip === void 0 || Y.string(t3.tooltip) || jk.is(t3.tooltip)) && (t3.paddingLeft === void 0 || Y.boolean(t3.paddingLeft)) && (t3.paddingRight === void 0 || Y.boolean(t3.paddingRight));
  }
  e6.is = n2;
})(mA || (mA = {}));
var hA;
(function(e6) {
  function t2(e7) {
    return { kind: `snippet`, value: e7 };
  }
  e6.createSnippet = t2;
})(hA || (hA = {}));
var gA;
(function(e6) {
  function t2(e7, t3, n2, r2) {
    return { insertText: e7, filterText: t3, range: n2, command: r2 };
  }
  e6.create = t2;
})(gA || (gA = {}));
var _A;
(function(e6) {
  function t2(e7) {
    return { items: e7 };
  }
  e6.create = t2;
})(_A || (_A = {}));
var vA;
(function(e6) {
  e6.Invoked = 0, e6.Automatic = 1;
})(vA || (vA = {}));
var yA;
(function(e6) {
  function t2(e7, t3) {
    return { range: e7, text: t3 };
  }
  e6.create = t2;
})(yA || (yA = {}));
var bA;
(function(e6) {
  function t2(e7, t3) {
    return { triggerKind: e7, selectedCompletionInfo: t3 };
  }
  e6.create = t2;
})(bA || (bA = {}));
var xA;
(function(e6) {
  function t2(e7) {
    let t3 = e7;
    return Y.objectLiteral(t3) && tk.is(t3.uri) && Y.string(t3.name);
  }
  e6.is = t2;
})(xA || (xA = {}));
var SA;
(function(e6) {
  function t2(e7, t3, n3, r3) {
    return new CA(e7, t3, n3, r3);
  }
  e6.create = t2;
  function n2(e7) {
    let t3 = e7;
    return !!(Y.defined(t3) && Y.string(t3.uri) && (Y.undefined(t3.languageId) || Y.string(t3.languageId)) && Y.uinteger(t3.lineCount) && Y.func(t3.getText) && Y.func(t3.positionAt) && Y.func(t3.offsetAt));
  }
  e6.is = n2;
  function r2(e7, t3) {
    let n3 = e7.getText(), r3 = i2(t3, (e8, t4) => {
      let n4 = e8.range.start.line - t4.range.start.line;
      return n4 === 0 ? e8.range.start.character - t4.range.start.character : n4;
    }), a2 = n3.length;
    for (let t4 = r3.length - 1; t4 >= 0; t4--) {
      let i3 = r3[t4], o2 = e7.offsetAt(i3.range.start), s2 = e7.offsetAt(i3.range.end);
      if (s2 <= a2) n3 = n3.substring(0, o2) + i3.newText + n3.substring(s2, n3.length);
      else throw Error(`Overlapping edit`);
      a2 = o2;
    }
    return n3;
  }
  e6.applyEdits = r2;
  function i2(e7, t3) {
    if (e7.length <= 1) return e7;
    let n3 = e7.length / 2 | 0, r3 = e7.slice(0, n3), a2 = e7.slice(n3);
    i2(r3, t3), i2(a2, t3);
    let o2 = 0, s2 = 0, c2 = 0;
    for (; o2 < r3.length && s2 < a2.length; ) t3(r3[o2], a2[s2]) <= 0 ? e7[c2++] = r3[o2++] : e7[c2++] = a2[s2++];
    for (; o2 < r3.length; ) e7[c2++] = r3[o2++];
    for (; s2 < a2.length; ) e7[c2++] = a2[s2++];
    return e7;
  }
})(SA || (SA = {}));
var CA = class {
  constructor(e6, t2, n2, r2) {
    this._uri = e6, this._languageId = t2, this._version = n2, this._content = r2, this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(e6) {
    if (e6) {
      let t2 = this.offsetAt(e6.start), n2 = this.offsetAt(e6.end);
      return this._content.substring(t2, n2);
    }
    return this._content;
  }
  update(e6, t2) {
    this._content = e6.text, this._version = t2, this._lineOffsets = void 0;
  }
  getLineOffsets() {
    if (this._lineOffsets === void 0) {
      let e6 = [], t2 = this._content, n2 = true;
      for (let r2 = 0; r2 < t2.length; r2++) {
        n2 && (n2 = (e6.push(r2), false));
        let i2 = t2.charAt(r2);
        n2 = i2 === `\r` || i2 === `
`, i2 === `\r` && r2 + 1 < t2.length && t2.charAt(r2 + 1) === `
` && r2++;
      }
      n2 && t2.length > 0 && e6.push(t2.length), this._lineOffsets = e6;
    }
    return this._lineOffsets;
  }
  positionAt(e6) {
    e6 = Math.max(Math.min(e6, this._content.length), 0);
    let t2 = this.getLineOffsets(), n2 = 0, r2 = t2.length;
    if (r2 === 0) return q.create(0, e6);
    for (; n2 < r2; ) {
      let i3 = Math.floor((n2 + r2) / 2);
      t2[i3] > e6 ? r2 = i3 : n2 = i3 + 1;
    }
    let i2 = n2 - 1;
    return q.create(i2, e6 - t2[i2]);
  }
  offsetAt(e6) {
    let t2 = this.getLineOffsets();
    if (e6.line >= t2.length) return this._content.length;
    if (e6.line < 0) return 0;
    let n2 = t2[e6.line], r2 = e6.line + 1 < t2.length ? t2[e6.line + 1] : this._content.length;
    return Math.max(Math.min(n2 + e6.character, r2), n2);
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
}, Y;
(function(e6) {
  let t2 = Object.prototype.toString;
  function n2(e7) {
    return e7 !== void 0;
  }
  e6.defined = n2;
  function r2(e7) {
    return e7 === void 0;
  }
  e6.undefined = r2;
  function i2(e7) {
    return e7 === true || e7 === false;
  }
  e6.boolean = i2;
  function a2(e7) {
    return t2.call(e7) === `[object String]`;
  }
  e6.string = a2;
  function o2(e7) {
    return t2.call(e7) === `[object Number]`;
  }
  e6.number = o2;
  function s2(e7, n3, r3) {
    return t2.call(e7) === `[object Number]` && n3 <= e7 && e7 <= r3;
  }
  e6.numberRange = s2;
  function c2(e7) {
    return t2.call(e7) === `[object Number]` && -2147483648 <= e7 && e7 <= 2147483647;
  }
  e6.integer = c2;
  function l2(e7) {
    return t2.call(e7) === `[object Number]` && 0 <= e7 && e7 <= 2147483647;
  }
  e6.uinteger = l2;
  function u2(e7) {
    return t2.call(e7) === `[object Function]`;
  }
  e6.func = u2;
  function d2(e7) {
    return typeof e7 == `object` && !!e7;
  }
  e6.objectLiteral = d2;
  function f2(e7, t3) {
    return Array.isArray(e7) && e7.every(t3);
  }
  e6.typedArray = f2;
})(Y || (Y = {}));
var wA = class {
  constructor() {
    this.nodeStack = [];
  }
  get current() {
    return this.nodeStack[this.nodeStack.length - 1] ?? this.rootNode;
  }
  buildRootNode(e6) {
    return this.rootNode = new kA(e6), this.rootNode.root = this.rootNode, this.nodeStack = [this.rootNode], this.rootNode;
  }
  buildCompositeNode(e6) {
    let t2 = new DA();
    return t2.grammarSource = e6, t2.root = this.rootNode, this.current.content.push(t2), this.nodeStack.push(t2), t2;
  }
  buildLeafNode(e6, t2) {
    let n2 = new EA(e6.startOffset, e6.image.length, de(e6), e6.tokenType, !t2);
    return n2.grammarSource = t2, n2.root = this.rootNode, this.current.content.push(n2), n2;
  }
  removeNode(e6) {
    let t2 = e6.container;
    if (t2) {
      let n2 = t2.content.indexOf(e6);
      n2 >= 0 && t2.content.splice(n2, 1);
    }
  }
  addHiddenNodes(e6) {
    let t2 = [];
    for (let n3 of e6) {
      let e7 = new EA(n3.startOffset, n3.image.length, de(n3), n3.tokenType, true);
      e7.root = this.rootNode, t2.push(e7);
    }
    let n2 = this.current, r2 = false;
    if (n2.content.length > 0) {
      n2.content.push(...t2);
      return;
    }
    for (; n2.container; ) {
      let e7 = n2.container.content.indexOf(n2);
      if (e7 > 0) {
        n2.container.content.splice(e7, 0, ...t2), r2 = true;
        break;
      }
      n2 = n2.container;
    }
    r2 || this.rootNode.content.unshift(...t2);
  }
  construct(e6) {
    let t2 = this.current;
    typeof e6.$type == `string` && (this.current.astNode = e6), e6.$cstNode = t2;
    let n2 = this.nodeStack.pop();
    (n2 == null ? void 0 : n2.content.length) === 0 && this.removeNode(n2);
  }
}, TA = class {
  get parent() {
    return this.container;
  }
  get feature() {
    return this.grammarSource;
  }
  get hidden() {
    return false;
  }
  get astNode() {
    var _a3, _b3;
    let e6 = typeof ((_a3 = this._astNode) == null ? void 0 : _a3.$type) == `string` ? this._astNode : (_b3 = this.container) == null ? void 0 : _b3.astNode;
    if (!e6) throw Error(`This node has no associated AST element`);
    return e6;
  }
  set astNode(e6) {
    this._astNode = e6;
  }
  get element() {
    return this.astNode;
  }
  get text() {
    return this.root.fullText.substring(this.offset, this.end);
  }
}, EA = class extends TA {
  get offset() {
    return this._offset;
  }
  get length() {
    return this._length;
  }
  get end() {
    return this._offset + this._length;
  }
  get hidden() {
    return this._hidden;
  }
  get tokenType() {
    return this._tokenType;
  }
  get range() {
    return this._range;
  }
  constructor(e6, t2, n2, r2, i2 = false) {
    super(), this._hidden = i2, this._offset = e6, this._tokenType = r2, this._length = t2, this._range = n2;
  }
}, DA = class extends TA {
  constructor() {
    super(...arguments), this.content = new OA(this);
  }
  get children() {
    return this.content;
  }
  get offset() {
    var _a3;
    return ((_a3 = this.firstNonHiddenNode) == null ? void 0 : _a3.offset) ?? 0;
  }
  get length() {
    return this.end - this.offset;
  }
  get end() {
    var _a3;
    return ((_a3 = this.lastNonHiddenNode) == null ? void 0 : _a3.end) ?? 0;
  }
  get range() {
    let e6 = this.firstNonHiddenNode, t2 = this.lastNonHiddenNode;
    if (e6 && t2) {
      if (this._rangeCache === void 0) {
        let { range: n2 } = e6, { range: r2 } = t2;
        this._rangeCache = { start: n2.start, end: r2.end.line < n2.start.line ? n2.start : r2.end };
      }
      return this._rangeCache;
    } else return { start: q.create(0, 0), end: q.create(0, 0) };
  }
  get firstNonHiddenNode() {
    for (let e6 of this.content) if (!e6.hidden) return e6;
    return this.content[0];
  }
  get lastNonHiddenNode() {
    for (let e6 = this.content.length - 1; e6 >= 0; e6--) {
      let t2 = this.content[e6];
      if (!t2.hidden) return t2;
    }
    return this.content[this.content.length - 1];
  }
}, OA = class e4 extends Array {
  constructor(t2) {
    super(), this.parent = t2, Object.setPrototypeOf(this, e4.prototype);
  }
  push(...e6) {
    return this.addParents(e6), super.push(...e6);
  }
  unshift(...e6) {
    return this.addParents(e6), super.unshift(...e6);
  }
  splice(e6, t2, ...n2) {
    return this.addParents(n2), super.splice(e6, t2, ...n2);
  }
  addParents(e6) {
    for (let t2 of e6) t2.container = this.parent;
  }
}, kA = class extends DA {
  get text() {
    return this._text.substring(this.offset, this.end);
  }
  get fullText() {
    return this._text;
  }
  constructor(e6) {
    super(), this._text = ``, this._text = e6 ?? ``;
  }
};
const AA = Symbol(`Datatype`);
function jA(e6) {
  return e6.$type === AA;
}
var MA = `\u200B`, NA = (e6) => e6.endsWith(MA) ? e6 : e6 + MA, PA = class {
  constructor(e6) {
    this._unorderedGroups = /* @__PURE__ */ new Map(), this.allRules = /* @__PURE__ */ new Map(), this.lexer = e6.parser.Lexer;
    let t2 = this.lexer.definition, n2 = e6.LanguageMetaData.mode === `production`;
    this.wrapper = new BA(t2, Object.assign(Object.assign({}, e6.parser.ParserConfig), { skipValidations: n2, errorMessageProvider: e6.parser.ParserErrorMessageProvider }));
  }
  alternatives(e6, t2) {
    this.wrapper.wrapOr(e6, t2);
  }
  optional(e6, t2) {
    this.wrapper.wrapOption(e6, t2);
  }
  many(e6, t2) {
    this.wrapper.wrapMany(e6, t2);
  }
  atLeastOne(e6, t2) {
    this.wrapper.wrapAtLeastOne(e6, t2);
  }
  getRule(e6) {
    return this.allRules.get(e6);
  }
  isRecording() {
    return this.wrapper.IS_RECORDING;
  }
  get unorderedGroups() {
    return this._unorderedGroups;
  }
  getRuleStack() {
    return this.wrapper.RULE_STACK;
  }
  finalize() {
    this.wrapper.wrapSelfAnalysis();
  }
}, FA = class extends PA {
  get current() {
    return this.stack[this.stack.length - 1];
  }
  constructor(e6) {
    super(e6), this.nodeBuilder = new wA(), this.stack = [], this.assignmentMap = /* @__PURE__ */ new Map(), this.linker = e6.references.Linker, this.converter = e6.parser.ValueConverter, this.astReflection = e6.shared.AstReflection;
  }
  rule(e6, t2) {
    let n2 = this.computeRuleType(e6), r2 = this.wrapper.DEFINE_RULE(NA(e6.name), this.startImplementation(n2, t2).bind(this));
    return this.allRules.set(e6.name, r2), e6.entry && (this.mainRule = r2), r2;
  }
  computeRuleType(e6) {
    if (!e6.fragment) return Dr(e6) ? AA : jr(e6) ?? e6.name;
  }
  parse(e6, t2 = {}) {
    this.nodeBuilder.buildRootNode(e6);
    let n2 = this.lexerResult = this.lexer.tokenize(e6);
    this.wrapper.input = n2.tokens;
    let r2 = t2.rule ? this.allRules.get(t2.rule) : this.mainRule;
    if (!r2) throw Error(t2.rule ? `No rule found with name '${t2.rule}'` : `No main rule available.`);
    let i2 = r2.call(this.wrapper, {});
    return this.nodeBuilder.addHiddenNodes(n2.hidden), this.unorderedGroups.clear(), this.lexerResult = void 0, { value: i2, lexerErrors: n2.errors, lexerReport: n2.report, parserErrors: this.wrapper.errors };
  }
  startImplementation(e6, t2) {
    return (n2) => {
      let r2 = !this.isRecording() && e6 !== void 0;
      if (r2) {
        let t3 = { $type: e6 };
        this.stack.push(t3), e6 === AA && (t3.value = ``);
      }
      let i2;
      try {
        i2 = t2(n2);
      } catch {
        i2 = void 0;
      }
      return i2 === void 0 && r2 && (i2 = this.construct()), i2;
    };
  }
  extractHiddenTokens(e6) {
    let t2 = this.lexerResult.hidden;
    if (!t2.length) return [];
    let n2 = e6.startOffset;
    for (let e7 = 0; e7 < t2.length; e7++) if (t2[e7].startOffset > n2) return t2.splice(0, e7);
    return t2.splice(0, t2.length);
  }
  consume(e6, t2, n2) {
    let r2 = this.wrapper.wrapConsume(e6, t2);
    if (!this.isRecording() && this.isValidToken(r2)) {
      let e7 = this.extractHiddenTokens(r2);
      this.nodeBuilder.addHiddenNodes(e7);
      let t3 = this.nodeBuilder.buildLeafNode(r2, n2), { assignment: i2, isCrossRef: a2 } = this.getAssignment(n2), o2 = this.current;
      if (i2) {
        let e8 = en(n2) ? r2.image : this.converter.convert(r2.image, t3);
        this.assign(i2.operator, i2.feature, e8, t3, a2);
      } else if (jA(o2)) {
        let e8 = r2.image;
        en(n2) || (e8 = this.converter.convert(e8, t3).toString()), o2.value += e8;
      }
    }
  }
  isValidToken(e6) {
    return !e6.isInsertedInRecovery && !isNaN(e6.startOffset) && typeof e6.endOffset == `number` && !isNaN(e6.endOffset);
  }
  subrule(e6, t2, n2, r2, i2) {
    let a2;
    !this.isRecording() && !n2 && (a2 = this.nodeBuilder.buildCompositeNode(r2));
    let o2 = this.wrapper.wrapSubrule(e6, t2, i2);
    !this.isRecording() && a2 && a2.length > 0 && this.performSubruleAssignment(o2, r2, a2);
  }
  performSubruleAssignment(e6, t2, n2) {
    let { assignment: r2, isCrossRef: i2 } = this.getAssignment(t2);
    if (r2) this.assign(r2.operator, r2.feature, e6, n2, i2);
    else if (!r2) {
      let t3 = this.current;
      if (jA(t3)) t3.value += e6.toString();
      else if (typeof e6 == `object` && e6) {
        let n3 = this.assignWithoutOverride(e6, t3);
        this.stack.pop(), this.stack.push(n3);
      }
    }
  }
  action(e6, t2) {
    if (!this.isRecording()) {
      let n2 = this.current;
      if (t2.feature && t2.operator) {
        n2 = this.construct(), this.nodeBuilder.removeNode(n2.$cstNode), this.nodeBuilder.buildCompositeNode(t2).content.push(n2.$cstNode);
        let r2 = { $type: e6 };
        this.stack.push(r2), this.assign(t2.operator, t2.feature, n2, n2.$cstNode, false);
      } else n2.$type = e6;
    }
  }
  construct() {
    if (this.isRecording()) return;
    let e6 = this.current;
    return Sn(e6), this.nodeBuilder.construct(e6), this.stack.pop(), jA(e6) ? this.converter.convert(e6.value, e6.$cstNode) : (Nn(this.astReflection, e6), e6);
  }
  getAssignment(e6) {
    if (!this.assignmentMap.has(e6)) {
      let t2 = Cn(e6, Wt);
      this.assignmentMap.set(e6, { assignment: t2, isCrossRef: t2 ? Jt(t2.terminal) : false });
    }
    return this.assignmentMap.get(e6);
  }
  assign(e6, t2, n2, r2, i2) {
    let a2 = this.current, o2;
    switch (o2 = i2 && typeof n2 == `string` ? this.linker.buildReference(a2, t2, r2, n2) : n2, e6) {
      case `=`:
        a2[t2] = o2;
        break;
      case `?=`:
        a2[t2] = true;
        break;
      case `+=`:
        Array.isArray(a2[t2]) || (a2[t2] = []), a2[t2].push(o2);
    }
  }
  assignWithoutOverride(e6, t2) {
    for (let [n3, r2] of Object.entries(t2)) {
      let t3 = e6[n3];
      t3 === void 0 ? e6[n3] = r2 : Array.isArray(t3) && Array.isArray(r2) && (r2.push(...t3), e6[n3] = r2);
    }
    let n2 = e6.$cstNode;
    return n2 && (n2.astNode = void 0, e6.$cstNode = void 0), e6;
  }
  get definitionErrors() {
    return this.wrapper.definitionErrors;
  }
}, IA = class {
  buildMismatchTokenMessage(e6) {
    return zT.buildMismatchTokenMessage(e6);
  }
  buildNotAllInputParsedMessage(e6) {
    return zT.buildNotAllInputParsedMessage(e6);
  }
  buildNoViableAltMessage(e6) {
    return zT.buildNoViableAltMessage(e6);
  }
  buildEarlyExitMessage(e6) {
    return zT.buildEarlyExitMessage(e6);
  }
}, LA = class extends IA {
  buildMismatchTokenMessage({ expected: e6, actual: t2 }) {
    return `Expecting ${e6.LABEL ? "`" + e6.LABEL + "`" : e6.name.endsWith(`:KW`) ? `keyword '${e6.name.substring(0, e6.name.length - 3)}'` : `token of type '${e6.name}'`} but found \`${t2.image}\`.`;
  }
  buildNotAllInputParsedMessage({ firstRedundant: e6 }) {
    return `Expecting end of file but found \`${e6.image}\`.`;
  }
}, RA = class extends PA {
  constructor() {
    super(...arguments), this.tokens = [], this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
  }
  action() {
  }
  construct() {
  }
  parse(e6) {
    return this.resetState(), this.tokens = this.lexer.tokenize(e6, { mode: `partial` }).tokens, this.wrapper.input = [...this.tokens], this.mainRule.call(this.wrapper, {}), this.unorderedGroups.clear(), { tokens: this.tokens, elementStack: [...this.lastElementStack], tokenIndex: this.nextTokenIndex };
  }
  rule(e6, t2) {
    let n2 = this.wrapper.DEFINE_RULE(NA(e6.name), this.startImplementation(t2).bind(this));
    return this.allRules.set(e6.name, n2), e6.entry && (this.mainRule = n2), n2;
  }
  resetState() {
    this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
  }
  startImplementation(e6) {
    return (t2) => {
      let n2 = this.keepStackSize();
      try {
        e6(t2);
      } finally {
        this.resetStackSize(n2);
      }
    };
  }
  removeUnexpectedElements() {
    this.elementStack.splice(this.stackSize);
  }
  keepStackSize() {
    let e6 = this.elementStack.length;
    return this.stackSize = e6, e6;
  }
  resetStackSize(e6) {
    this.removeUnexpectedElements(), this.stackSize = e6;
  }
  consume(e6, t2, n2) {
    this.wrapper.wrapConsume(e6, t2), this.isRecording() || (this.lastElementStack = [...this.elementStack, n2], this.nextTokenIndex = this.currIdx + 1);
  }
  subrule(e6, t2, n2, r2, i2) {
    this.before(r2), this.wrapper.wrapSubrule(e6, t2, i2), this.after(r2);
  }
  before(e6) {
    this.isRecording() || this.elementStack.push(e6);
  }
  after(e6) {
    if (!this.isRecording()) {
      let t2 = this.elementStack.lastIndexOf(e6);
      t2 >= 0 && this.elementStack.splice(t2);
    }
  }
  get currIdx() {
    return this.wrapper.currIdx;
  }
}, zA = { recoveryEnabled: true, nodeLocationTracking: `full`, skipValidations: true, errorMessageProvider: new LA() }, BA = class extends WD {
  constructor(e6, t2) {
    let n2 = t2 && `maxLookahead` in t2;
    super(e6, Object.assign(Object.assign(Object.assign({}, zA), { lookaheadStrategy: n2 ? new rD({ maxLookahead: t2.maxLookahead }) : new OO({ logging: t2.skipValidations ? () => {
    } : void 0 }) }), t2));
  }
  get IS_RECORDING() {
    return this.RECORDING_PHASE;
  }
  DEFINE_RULE(e6, t2) {
    return this.RULE(e6, t2);
  }
  wrapSelfAnalysis() {
    this.performSelfAnalysis();
  }
  wrapConsume(e6, t2) {
    return this.consume(e6, t2);
  }
  wrapSubrule(e6, t2, n2) {
    return this.subrule(e6, t2, { ARGS: [n2] });
  }
  wrapOr(e6, t2) {
    this.or(e6, t2);
  }
  wrapOption(e6, t2) {
    this.option(e6, t2);
  }
  wrapMany(e6, t2) {
    this.many(e6, t2);
  }
  wrapAtLeastOne(e6, t2) {
    this.atLeastOne(e6, t2);
  }
};
function VA(e6, t2, n2) {
  return HA({ parser: t2, tokens: n2, ruleNames: /* @__PURE__ */ new Map() }, e6), t2;
}
function HA(e6, t2) {
  let n2 = ur(t2, false), r2 = S(t2.rules).filter(St).filter((e7) => n2.has(e7));
  for (let t3 of r2) {
    let n3 = Object.assign(Object.assign({}, e6), { consume: 1, optional: 1, subrule: 1, many: 1, or: 1 });
    e6.parser.rule(t3, UA(n3, t3.definition));
  }
}
function UA(e6, t2, n2 = false) {
  let r2;
  if (en(t2)) r2 = $A(e6, t2);
  else if (Bt(t2)) r2 = WA(e6, t2);
  else if (Wt(t2)) r2 = UA(e6, t2.terminal);
  else if (Jt(t2)) r2 = QA(e6, t2);
  else if (sn(t2)) r2 = GA(e6, t2);
  else if (Ht(t2)) r2 = JA(e6, t2);
  else if (hn(t2)) r2 = YA(e6, t2);
  else if (Qt(t2)) r2 = XA(e6, t2);
  else if (Xt(t2)) {
    let n3 = e6.consume++;
    r2 = () => e6.parser.consume(n3, IT, t2);
  } else throw new ke(t2.$cstNode, `Unexpected element type: ${t2.$type}`);
  return ej(e6, n2 ? void 0 : ZA(t2), r2, t2.cardinality);
}
function WA(e6, t2) {
  let n2 = Mr(t2);
  return () => e6.parser.action(n2, t2);
}
function GA(e6, t2) {
  let n2 = t2.rule.ref;
  if (St(n2)) {
    let r2 = e6.subrule++, i2 = n2.fragment, a2 = t2.arguments.length > 0 ? KA(n2, t2.arguments) : () => ({});
    return (o2) => e6.parser.subrule(r2, tj(e6, n2), i2, t2, a2(o2));
  } else if (Mt(n2)) {
    let r2 = e6.consume++, i2 = rj(e6, n2.name);
    return () => e6.parser.consume(r2, i2, t2);
  } else if (n2) Ae(n2);
  else throw new ke(t2.$cstNode, `Undefined rule: ${t2.rule.$refText}`);
}
function KA(e6, t2) {
  let n2 = t2.map((e7) => qA(e7.value));
  return (t3) => {
    let r2 = {};
    for (let i2 = 0; i2 < n2.length; i2++) {
      let a2 = e6.parameters[i2], o2 = n2[i2];
      r2[a2.name] = o2(t3);
    }
    return r2;
  };
}
function qA(e6) {
  if (nt(e6)) {
    let t2 = qA(e6.left), n2 = qA(e6.right);
    return (e7) => t2(e7) || n2(e7);
  } else if (et(e6)) {
    let t2 = qA(e6.left), n2 = qA(e6.right);
    return (e7) => t2(e7) && n2(e7);
  } else if (mt(e6)) {
    let t2 = qA(e6.value);
    return (e7) => !t2(e7);
  } else if (bt(e6)) {
    let t2 = e6.parameter.ref.name;
    return (e7) => e7 !== void 0 && e7[t2] === true;
  } else if (Qe(e6)) {
    let t2 = !!e6.true;
    return () => t2;
  }
  Ae(e6);
}
function JA(e6, t2) {
  if (t2.elements.length === 1) return UA(e6, t2.elements[0]);
  {
    let n2 = [];
    for (let r3 of t2.elements) {
      let t3 = { ALT: UA(e6, r3, true) }, i2 = ZA(r3);
      i2 && (t3.GATE = qA(i2)), n2.push(t3);
    }
    let r2 = e6.or++;
    return (t3) => e6.parser.alternatives(r2, n2.map((e7) => {
      let n3 = { ALT: () => e7.ALT(t3) }, r3 = e7.GATE;
      return r3 && (n3.GATE = () => r3(t3)), n3;
    }));
  }
}
function YA(e6, t2) {
  if (t2.elements.length === 1) return UA(e6, t2.elements[0]);
  let n2 = [];
  for (let r3 of t2.elements) {
    let t3 = { ALT: UA(e6, r3, true) }, i3 = ZA(r3);
    i3 && (t3.GATE = qA(i3)), n2.push(t3);
  }
  let r2 = e6.or++, i2 = (e7, t3) => `uGroup_${e7}_${t3.getRuleStack().join(`-`)}`, a2 = ej(e6, ZA(t2), (t3) => e6.parser.alternatives(r2, n2.map((n3, a3) => {
    let o2 = { ALT: () => true }, s2 = e6.parser;
    o2.ALT = () => {
      if (n3.ALT(t3), !s2.isRecording()) {
        let e7 = i2(r2, s2);
        s2.unorderedGroups.get(e7) || s2.unorderedGroups.set(e7, []);
        let t4 = s2.unorderedGroups.get(e7);
        (t4 == null ? void 0 : t4[a3]) === void 0 && (t4[a3] = true);
      }
    };
    let c2 = n3.GATE;
    return c2 ? o2.GATE = () => c2(t3) : o2.GATE = () => {
      var _a3;
      return !((_a3 = s2.unorderedGroups.get(i2(r2, s2))) == null ? void 0 : _a3[a3]);
    }, o2;
  })), `*`);
  return (t3) => {
    a2(t3), e6.parser.isRecording() || e6.parser.unorderedGroups.delete(i2(r2, e6.parser));
  };
}
function XA(e6, t2) {
  let n2 = t2.elements.map((t3) => UA(e6, t3));
  return (e7) => n2.forEach((t3) => t3(e7));
}
function ZA(e6) {
  if (Qt(e6)) return e6.guardCondition;
}
function QA(e6, t2, n2 = t2.terminal) {
  var _a3;
  if (n2) if (sn(n2) && St(n2.rule.ref)) {
    let r2 = n2.rule.ref, i2 = e6.subrule++;
    return (n3) => e6.parser.subrule(i2, tj(e6, r2), false, t2, n3);
  } else if (sn(n2) && Mt(n2.rule.ref)) {
    let r2 = e6.consume++, i2 = rj(e6, n2.rule.ref.name);
    return () => e6.parser.consume(r2, i2, t2);
  } else if (en(n2)) {
    let r2 = e6.consume++, i2 = rj(e6, n2.value);
    return () => e6.parser.consume(r2, i2, t2);
  } else throw Error(`Could not build cross reference parser`);
  else {
    if (!t2.type.ref) throw Error(`Could not resolve reference to type: ` + t2.type.$refText);
    let n3 = (_a3 = xr(t2.type.ref)) == null ? void 0 : _a3.terminal;
    if (!n3) throw Error(`Could not find name assignment for type: ` + Mr(t2.type.ref));
    return QA(e6, t2, n3);
  }
}
function $A(e6, t2) {
  let n2 = e6.consume++, r2 = e6.tokens[t2.value];
  if (!r2) throw Error(`Could not find token for keyword: ` + t2.value);
  return () => e6.parser.consume(n2, r2, t2);
}
function ej(e6, t2, n2, r2) {
  let i2 = t2 && qA(t2);
  if (!r2) if (i2) {
    let t3 = e6.or++;
    return (r3) => e6.parser.alternatives(t3, [{ ALT: () => n2(r3), GATE: () => i2(r3) }, { ALT: HD(), GATE: () => !i2(r3) }]);
  } else return n2;
  if (r2 === `*`) {
    let t3 = e6.many++;
    return (r3) => e6.parser.many(t3, { DEF: () => n2(r3), GATE: i2 ? () => i2(r3) : void 0 });
  } else if (r2 === `+`) {
    let t3 = e6.many++;
    if (i2) {
      let r3 = e6.or++;
      return (a2) => e6.parser.alternatives(r3, [{ ALT: () => e6.parser.atLeastOne(t3, { DEF: () => n2(a2) }), GATE: () => i2(a2) }, { ALT: HD(), GATE: () => !i2(a2) }]);
    } else return (r3) => e6.parser.atLeastOne(t3, { DEF: () => n2(r3) });
  } else if (r2 === `?`) {
    let t3 = e6.optional++;
    return (r3) => e6.parser.optional(t3, { DEF: () => n2(r3), GATE: i2 ? () => i2(r3) : void 0 });
  } else Ae(r2);
}
function tj(e6, t2) {
  let n2 = nj(e6, t2), r2 = e6.parser.getRule(n2);
  if (!r2) throw Error(`Rule "${n2}" not found."`);
  return r2;
}
function nj(e6, t2) {
  if (St(t2)) return t2.name;
  if (e6.ruleNames.has(t2)) return e6.ruleNames.get(t2);
  {
    let n2 = t2, r2 = n2.$container, i2 = t2.$type;
    for (; !St(r2); ) (Qt(r2) || Ht(r2) || hn(r2)) && (i2 = r2.elements.indexOf(n2).toString() + `:` + i2), n2 = r2, r2 = r2.$container;
    return i2 = r2.name + `:` + i2, e6.ruleNames.set(t2, i2), i2;
  }
}
function rj(e6, t2) {
  let n2 = e6.tokens[t2];
  if (!n2) throw Error(`Token "${t2}" not found."`);
  return n2;
}
function ij(e6) {
  let t2 = e6.Grammar, n2 = e6.parser.Lexer, r2 = new RA(e6);
  return VA(t2, r2, n2.definition), r2.finalize(), r2;
}
function aj(e6) {
  let t2 = oj(e6);
  return t2.finalize(), t2;
}
function oj(e6) {
  let t2 = e6.Grammar, n2 = e6.parser.Lexer;
  return VA(t2, new FA(e6), n2.definition);
}
var sj = class {
  constructor() {
    this.diagnostics = [];
  }
  buildTokens(e6, t2) {
    let n2 = S(ur(e6, false)), r2 = this.buildTerminalTokens(n2), i2 = this.buildKeywordTokens(n2, r2, t2);
    return r2.forEach((e7) => {
      let t3 = e7.PATTERN;
      typeof t3 == `object` && t3 && `test` in t3 && nr(t3) ? i2.unshift(e7) : i2.push(e7);
    }), i2;
  }
  flushLexingReport(e6) {
    return { diagnostics: this.popDiagnostics() };
  }
  popDiagnostics() {
    let e6 = [...this.diagnostics];
    return this.diagnostics = [], e6;
  }
  buildTerminalTokens(e6) {
    return e6.filter(Mt).filter((e7) => !e7.fragment).map((e7) => this.buildTerminalToken(e7)).toArray();
  }
  buildTerminalToken(e6) {
    let t2 = Ir(e6), n2 = this.requiresCustomPattern(t2) ? this.regexPatternFunction(t2) : t2, r2 = { name: e6.name, PATTERN: n2 };
    return typeof n2 == `function` && (r2.LINE_BREAKS = true), e6.hidden && (r2.GROUP = nr(t2) ? U.SKIPPED : `hidden`), r2;
  }
  requiresCustomPattern(e6) {
    return e6.flags.includes(`u`) || e6.flags.includes(`s`) ? true : !!(e6.source.includes(`?<=`) || e6.source.includes(`?<!`));
  }
  regexPatternFunction(e6) {
    let t2 = new RegExp(e6, e6.flags + `y`);
    return (e7, n2) => (t2.lastIndex = n2, t2.exec(e7));
  }
  buildKeywordTokens(e6, t2, n2) {
    return e6.filter(St).flatMap((e7) => On(e7).filter(en)).distinct((e7) => e7.value).toArray().sort((e7, t3) => t3.value.length - e7.value.length).map((e7) => this.buildKeywordToken(e7, t2, !!(n2 == null ? void 0 : n2.caseInsensitive)));
  }
  buildKeywordToken(e6, t2, n2) {
    let r2 = this.buildKeywordPattern(e6, n2), i2 = { name: e6.value, PATTERN: r2, LONGER_ALT: this.findLongerAlt(e6, t2) };
    return typeof r2 == `function` && (i2.LINE_BREAKS = true), i2;
  }
  buildKeywordPattern(e6, t2) {
    return t2 ? new RegExp(ir(e6.value)) : e6.value;
  }
  findLongerAlt(e6, t2) {
    return t2.reduce((t3, n2) => {
      let r2 = n2 == null ? void 0 : n2.PATTERN;
      return (r2 == null ? void 0 : r2.source) && ar(`^` + r2.source + `$`, e6.value) && t3.push(n2), t3;
    }, []);
  }
}, cj = class {
  convert(e6, t2) {
    let n2 = t2.grammarSource;
    if (Jt(n2) && (n2 = fr(n2)), sn(n2)) {
      let r2 = n2.rule.ref;
      if (!r2) throw Error(`This cst node was not parsed by a rule.`);
      return this.runConverter(r2, e6, t2);
    }
    return e6;
  }
  runConverter(e6, t2, n2) {
    var _a3;
    switch (e6.name.toUpperCase()) {
      case `INT`:
        return lj.convertInt(t2);
      case `STRING`:
        return lj.convertString(t2);
      case `ID`:
        return lj.convertID(t2);
    }
    switch ((_a3 = Fr(e6)) == null ? void 0 : _a3.toLowerCase()) {
      case `number`:
        return lj.convertNumber(t2);
      case `boolean`:
        return lj.convertBoolean(t2);
      case `bigint`:
        return lj.convertBigint(t2);
      case `date`:
        return lj.convertDate(t2);
      default:
        return t2;
    }
  }
}, lj;
(function(e6) {
  function t2(e7) {
    let t3 = ``;
    for (let r3 = 1; r3 < e7.length - 1; r3++) {
      let i3 = e7.charAt(r3);
      if (i3 === `\\`) {
        let i4 = e7.charAt(++r3);
        t3 += n2(i4);
      } else t3 += i3;
    }
    return t3;
  }
  e6.convertString = t2;
  function n2(e7) {
    switch (e7) {
      case `b`:
        return `\b`;
      case `f`:
        return `\f`;
      case `n`:
        return `
`;
      case `r`:
        return `\r`;
      case `t`:
        return `	`;
      case `v`:
        return `\v`;
      case `0`:
        return `\0`;
      default:
        return e7;
    }
  }
  function r2(e7) {
    return e7.charAt(0) === `^` ? e7.substring(1) : e7;
  }
  e6.convertID = r2;
  function i2(e7) {
    return parseInt(e7);
  }
  e6.convertInt = i2;
  function a2(e7) {
    return BigInt(e7);
  }
  e6.convertBigint = a2;
  function o2(e7) {
    return new Date(e7);
  }
  e6.convertDate = o2;
  function s2(e7) {
    return Number(e7);
  }
  e6.convertNumber = s2;
  function c2(e7) {
    return e7.toLowerCase() === `true`;
  }
  e6.convertBoolean = c2;
})(lj || (lj = {}));
var uj = r(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true });
  var t2;
  function n2() {
    if (t2 === void 0) throw Error(`No runtime abstraction layer installed`);
    return t2;
  }
  (function(e7) {
    function n3(e8) {
      if (e8 === void 0) throw Error(`No runtime abstraction layer provided`);
      t2 = e8;
    }
    e7.install = n3;
  })(n2 || (n2 = {})), e6.default = n2;
})), dj = r(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.stringArray = e6.array = e6.func = e6.error = e6.number = e6.string = e6.boolean = void 0;
  function t2(e7) {
    return e7 === true || e7 === false;
  }
  e6.boolean = t2;
  function n2(e7) {
    return typeof e7 == `string` || e7 instanceof String;
  }
  e6.string = n2;
  function r2(e7) {
    return typeof e7 == `number` || e7 instanceof Number;
  }
  e6.number = r2;
  function i2(e7) {
    return e7 instanceof Error;
  }
  e6.error = i2;
  function a2(e7) {
    return typeof e7 == `function`;
  }
  e6.func = a2;
  function o2(e7) {
    return Array.isArray(e7);
  }
  e6.array = o2;
  function s2(e7) {
    return o2(e7) && e7.every((e8) => n2(e8));
  }
  e6.stringArray = s2;
})), fj = r(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.Emitter = e6.Event = void 0;
  var t2 = uj(), n2;
  (function(e7) {
    let t3 = { dispose() {
    } };
    e7.None = function() {
      return t3;
    };
  })(n2 || (e6.Event = n2 = {}));
  var r2 = class {
    add(e7, t3 = null, n3) {
      this._callbacks || (this._callbacks = [], this._contexts = []), this._callbacks.push(e7), this._contexts.push(t3), Array.isArray(n3) && n3.push({ dispose: () => this.remove(e7, t3) });
    }
    remove(e7, t3 = null) {
      if (!this._callbacks) return;
      let n3 = false;
      for (let r3 = 0, i3 = this._callbacks.length; r3 < i3; r3++) if (this._callbacks[r3] === e7) if (this._contexts[r3] === t3) {
        this._callbacks.splice(r3, 1), this._contexts.splice(r3, 1);
        return;
      } else n3 = true;
      if (n3) throw Error(`When adding a listener with a context, you should remove it with the same context`);
    }
    invoke(...e7) {
      if (!this._callbacks) return [];
      let n3 = [], r3 = this._callbacks.slice(0), i3 = this._contexts.slice(0);
      for (let a2 = 0, o2 = r3.length; a2 < o2; a2++) try {
        n3.push(r3[a2].apply(i3[a2], e7));
      } catch (e8) {
        (0, t2.default)().console.error(e8);
      }
      return n3;
    }
    isEmpty() {
      return !this._callbacks || this._callbacks.length === 0;
    }
    dispose() {
      this._callbacks = void 0, this._contexts = void 0;
    }
  }, i2 = class e7 {
    constructor(e8) {
      this._options = e8;
    }
    get event() {
      return this._event || (this._event = (t3, n3, i3) => {
        this._callbacks || (this._callbacks = new r2()), this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty() && this._options.onFirstListenerAdd(this), this._callbacks.add(t3, n3);
        let a2 = { dispose: () => {
          this._callbacks && (this._callbacks.remove(t3, n3), a2.dispose = e7._noop, this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty() && this._options.onLastListenerRemove(this));
        } };
        return Array.isArray(i3) && i3.push(a2), a2;
      }), this._event;
    }
    fire(e8) {
      this._callbacks && this._callbacks.invoke.call(this._callbacks, e8);
    }
    dispose() {
      this._callbacks && (this._callbacks = (this._callbacks.dispose(), void 0));
    }
  };
  e6.Emitter = i2, i2._noop = function() {
  };
})), pj = r(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.CancellationTokenSource = e6.CancellationToken = void 0;
  var t2 = uj(), n2 = dj(), r2 = fj(), i2;
  (function(e7) {
    e7.None = Object.freeze({ isCancellationRequested: false, onCancellationRequested: r2.Event.None }), e7.Cancelled = Object.freeze({ isCancellationRequested: true, onCancellationRequested: r2.Event.None });
    function t3(t4) {
      let r3 = t4;
      return r3 && (r3 === e7.None || r3 === e7.Cancelled || n2.boolean(r3.isCancellationRequested) && !!r3.onCancellationRequested);
    }
    e7.is = t3;
  })(i2 || (e6.CancellationToken = i2 = {}));
  var a2 = Object.freeze(function(e7, n3) {
    let r3 = (0, t2.default)().timer.setTimeout(e7.bind(n3), 0);
    return { dispose() {
      r3.dispose();
    } };
  }), o2 = class {
    constructor() {
      this._isCancelled = false;
    }
    cancel() {
      this._isCancelled || (this._isCancelled = true, this._emitter && (this._emitter.fire(void 0), this.dispose()));
    }
    get isCancellationRequested() {
      return this._isCancelled;
    }
    get onCancellationRequested() {
      return this._isCancelled ? a2 : (this._emitter || (this._emitter = new r2.Emitter()), this._emitter.event);
    }
    dispose() {
      this._emitter && (this._emitter = (this._emitter.dispose(), void 0));
    }
  };
  e6.CancellationTokenSource = class {
    get token() {
      return this._token || (this._token = new o2()), this._token;
    }
    cancel() {
      this._token ? this._token.cancel() : this._token = i2.Cancelled;
    }
    dispose() {
      this._token ? this._token instanceof o2 && this._token.dispose() : this._token = i2.None;
    }
  };
})), X = {};
n(X, e(pj(), 1));
function mj() {
  return new Promise((e6) => {
    typeof setImmediate > `u` ? setTimeout(e6, 0) : setImmediate(e6);
  });
}
var hj = 0, gj = 10;
function _j() {
  return hj = performance.now(), new X.CancellationTokenSource();
}
function vj(e6) {
  gj = e6;
}
const yj = Symbol(`OperationCancelled`);
function bj(e6) {
  return e6 === yj;
}
async function Z(e6) {
  if (e6 === X.CancellationToken.None) return;
  let t2 = performance.now();
  if (t2 - hj >= gj && (hj = t2, await mj(), hj = performance.now()), e6.isCancellationRequested) throw yj;
}
var xj = class {
  constructor() {
    this.promise = new Promise((e6, t2) => {
      this.resolve = (t3) => (e6(t3), this), this.reject = (e7) => (t2(e7), this);
    });
  }
}, Sj = class e5 {
  constructor(e6, t2, n2, r2) {
    this._uri = e6, this._languageId = t2, this._version = n2, this._content = r2, this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(e6) {
    if (e6) {
      let t2 = this.offsetAt(e6.start), n2 = this.offsetAt(e6.end);
      return this._content.substring(t2, n2);
    }
    return this._content;
  }
  update(t2, n2) {
    for (let n3 of t2) if (e5.isIncremental(n3)) {
      let e6 = Dj(n3.range), t3 = this.offsetAt(e6.start), r2 = this.offsetAt(e6.end);
      this._content = this._content.substring(0, t3) + n3.text + this._content.substring(r2, this._content.length);
      let i2 = Math.max(e6.start.line, 0), a2 = Math.max(e6.end.line, 0), o2 = this._lineOffsets, s2 = Tj(n3.text, false, t3);
      if (a2 - i2 === s2.length) for (let e7 = 0, t4 = s2.length; e7 < t4; e7++) o2[e7 + i2 + 1] = s2[e7];
      else s2.length < 1e4 ? o2.splice(i2 + 1, a2 - i2, ...s2) : this._lineOffsets = o2 = o2.slice(0, i2 + 1).concat(s2, o2.slice(a2 + 1));
      let c2 = n3.text.length - (r2 - t3);
      if (c2 !== 0) for (let e7 = i2 + 1 + s2.length, t4 = o2.length; e7 < t4; e7++) o2[e7] = o2[e7] + c2;
    } else if (e5.isFull(n3)) this._content = n3.text, this._lineOffsets = void 0;
    else throw Error(`Unknown change event received`);
    this._version = n2;
  }
  getLineOffsets() {
    return this._lineOffsets === void 0 && (this._lineOffsets = Tj(this._content, true)), this._lineOffsets;
  }
  positionAt(e6) {
    e6 = Math.max(Math.min(e6, this._content.length), 0);
    let t2 = this.getLineOffsets(), n2 = 0, r2 = t2.length;
    if (r2 === 0) return { line: 0, character: e6 };
    for (; n2 < r2; ) {
      let i3 = Math.floor((n2 + r2) / 2);
      t2[i3] > e6 ? r2 = i3 : n2 = i3 + 1;
    }
    let i2 = n2 - 1;
    return e6 = this.ensureBeforeEOL(e6, t2[i2]), { line: i2, character: e6 - t2[i2] };
  }
  offsetAt(e6) {
    let t2 = this.getLineOffsets();
    if (e6.line >= t2.length) return this._content.length;
    if (e6.line < 0) return 0;
    let n2 = t2[e6.line];
    if (e6.character <= 0) return n2;
    let r2 = e6.line + 1 < t2.length ? t2[e6.line + 1] : this._content.length, i2 = Math.min(n2 + e6.character, r2);
    return this.ensureBeforeEOL(i2, n2);
  }
  ensureBeforeEOL(e6, t2) {
    for (; e6 > t2 && Ej(this._content.charCodeAt(e6 - 1)); ) e6--;
    return e6;
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
  static isIncremental(e6) {
    let t2 = e6;
    return t2 != null && typeof t2.text == `string` && t2.range !== void 0 && (t2.rangeLength === void 0 || typeof t2.rangeLength == `number`);
  }
  static isFull(e6) {
    let t2 = e6;
    return t2 != null && typeof t2.text == `string` && t2.range === void 0 && t2.rangeLength === void 0;
  }
}, Cj;
(function(e6) {
  function t2(e7, t3, n3, r3) {
    return new Sj(e7, t3, n3, r3);
  }
  e6.create = t2;
  function n2(e7, t3, n3) {
    if (e7 instanceof Sj) return e7.update(t3, n3), e7;
    throw Error(`TextDocument.update: document must be created by TextDocument.create`);
  }
  e6.update = n2;
  function r2(e7, t3) {
    let n3 = e7.getText(), r3 = wj(t3.map(Oj), (e8, t4) => {
      let n4 = e8.range.start.line - t4.range.start.line;
      return n4 === 0 ? e8.range.start.character - t4.range.start.character : n4;
    }), i2 = 0, a2 = [];
    for (let t4 of r3) {
      let r4 = e7.offsetAt(t4.range.start);
      if (r4 < i2) throw Error(`Overlapping edit`);
      r4 > i2 && a2.push(n3.substring(i2, r4)), t4.newText.length && a2.push(t4.newText), i2 = e7.offsetAt(t4.range.end);
    }
    return a2.push(n3.substr(i2)), a2.join(``);
  }
  e6.applyEdits = r2;
})(Cj || (Cj = {}));
function wj(e6, t2) {
  if (e6.length <= 1) return e6;
  let n2 = e6.length / 2 | 0, r2 = e6.slice(0, n2), i2 = e6.slice(n2);
  wj(r2, t2), wj(i2, t2);
  let a2 = 0, o2 = 0, s2 = 0;
  for (; a2 < r2.length && o2 < i2.length; ) t2(r2[a2], i2[o2]) <= 0 ? e6[s2++] = r2[a2++] : e6[s2++] = i2[o2++];
  for (; a2 < r2.length; ) e6[s2++] = r2[a2++];
  for (; o2 < i2.length; ) e6[s2++] = i2[o2++];
  return e6;
}
function Tj(e6, t2, n2 = 0) {
  let r2 = t2 ? [n2] : [];
  for (let t3 = 0; t3 < e6.length; t3++) {
    let i2 = e6.charCodeAt(t3);
    Ej(i2) && (i2 === 13 && t3 + 1 < e6.length && e6.charCodeAt(t3 + 1) === 10 && t3++, r2.push(n2 + t3 + 1));
  }
  return r2;
}
function Ej(e6) {
  return e6 === 13 || e6 === 10;
}
function Dj(e6) {
  let t2 = e6.start, n2 = e6.end;
  return t2.line > n2.line || t2.line === n2.line && t2.character > n2.character ? { start: n2, end: t2 } : e6;
}
function Oj(e6) {
  let t2 = Dj(e6.range);
  return t2 === e6.range ? e6 : { newText: e6.newText, range: t2 };
}
var kj;
(() => {
  var e6 = { 470: (e7) => {
    function t3(e8) {
      if (typeof e8 != `string`) throw TypeError(`Path must be a string. Received ` + JSON.stringify(e8));
    }
    function n3(e8, t4) {
      for (var n4, r4 = ``, i2 = 0, a2 = -1, o2 = 0, s2 = 0; s2 <= e8.length; ++s2) {
        if (s2 < e8.length) n4 = e8.charCodeAt(s2);
        else {
          if (n4 === 47) break;
          n4 = 47;
        }
        if (n4 === 47) {
          if (!(a2 === s2 - 1 || o2 === 1)) if (a2 !== s2 - 1 && o2 === 2) {
            if (r4.length < 2 || i2 !== 2 || r4.charCodeAt(r4.length - 1) !== 46 || r4.charCodeAt(r4.length - 2) !== 46) {
              if (r4.length > 2) {
                var c2 = r4.lastIndexOf(`/`);
                if (c2 !== r4.length - 1) {
                  c2 === -1 ? (r4 = ``, i2 = 0) : i2 = (r4 = r4.slice(0, c2)).length - 1 - r4.lastIndexOf(`/`), a2 = s2, o2 = 0;
                  continue;
                }
              } else if (r4.length === 2 || r4.length === 1) {
                r4 = ``, i2 = 0, a2 = s2, o2 = 0;
                continue;
              }
            }
            t4 && (r4.length > 0 ? r4 += `/..` : r4 = `..`, i2 = 2);
          } else r4.length > 0 ? r4 += `/` + e8.slice(a2 + 1, s2) : r4 = e8.slice(a2 + 1, s2), i2 = s2 - a2 - 1;
          a2 = s2, o2 = 0;
        } else n4 === 46 && o2 !== -1 ? ++o2 : o2 = -1;
      }
      return r4;
    }
    var r3 = { resolve: function() {
      for (var e8, r4 = ``, i2 = false, a2 = arguments.length - 1; a2 >= -1 && !i2; a2--) {
        var o2;
        a2 >= 0 ? o2 = arguments[a2] : (e8 === void 0 && (e8 = process.cwd()), o2 = e8), t3(o2), o2.length !== 0 && (r4 = o2 + `/` + r4, i2 = o2.charCodeAt(0) === 47);
      }
      return r4 = n3(r4, !i2), i2 ? r4.length > 0 ? `/` + r4 : `/` : r4.length > 0 ? r4 : `.`;
    }, normalize: function(e8) {
      if (t3(e8), e8.length === 0) return `.`;
      var r4 = e8.charCodeAt(0) === 47, i2 = e8.charCodeAt(e8.length - 1) === 47;
      return (e8 = n3(e8, !r4)).length !== 0 || r4 || (e8 = `.`), e8.length > 0 && i2 && (e8 += `/`), r4 ? `/` + e8 : e8;
    }, isAbsolute: function(e8) {
      return t3(e8), e8.length > 0 && e8.charCodeAt(0) === 47;
    }, join: function() {
      if (arguments.length === 0) return `.`;
      for (var e8, n4 = 0; n4 < arguments.length; ++n4) {
        var i2 = arguments[n4];
        t3(i2), i2.length > 0 && (e8 === void 0 ? e8 = i2 : e8 += `/` + i2);
      }
      return e8 === void 0 ? `.` : r3.normalize(e8);
    }, relative: function(e8, n4) {
      if (t3(e8), t3(n4), e8 === n4 || (e8 = r3.resolve(e8)) === (n4 = r3.resolve(n4))) return ``;
      for (var i2 = 1; i2 < e8.length && e8.charCodeAt(i2) === 47; ++i2) ;
      for (var a2 = e8.length, o2 = a2 - i2, s2 = 1; s2 < n4.length && n4.charCodeAt(s2) === 47; ++s2) ;
      for (var c2 = n4.length - s2, l2 = o2 < c2 ? o2 : c2, u2 = -1, d2 = 0; d2 <= l2; ++d2) {
        if (d2 === l2) {
          if (c2 > l2) {
            if (n4.charCodeAt(s2 + d2) === 47) return n4.slice(s2 + d2 + 1);
            if (d2 === 0) return n4.slice(s2 + d2);
          } else o2 > l2 && (e8.charCodeAt(i2 + d2) === 47 ? u2 = d2 : d2 === 0 && (u2 = 0));
          break;
        }
        var f2 = e8.charCodeAt(i2 + d2);
        if (f2 !== n4.charCodeAt(s2 + d2)) break;
        f2 === 47 && (u2 = d2);
      }
      var p2 = ``;
      for (d2 = i2 + u2 + 1; d2 <= a2; ++d2) d2 !== a2 && e8.charCodeAt(d2) !== 47 || (p2.length === 0 ? p2 += `..` : p2 += `/..`);
      return p2.length > 0 ? p2 + n4.slice(s2 + u2) : (s2 += u2, n4.charCodeAt(s2) === 47 && ++s2, n4.slice(s2));
    }, _makeLong: function(e8) {
      return e8;
    }, dirname: function(e8) {
      if (t3(e8), e8.length === 0) return `.`;
      for (var n4 = e8.charCodeAt(0), r4 = n4 === 47, i2 = -1, a2 = true, o2 = e8.length - 1; o2 >= 1; --o2) if ((n4 = e8.charCodeAt(o2)) === 47) {
        if (!a2) {
          i2 = o2;
          break;
        }
      } else a2 = false;
      return i2 === -1 ? r4 ? `/` : `.` : r4 && i2 === 1 ? `//` : e8.slice(0, i2);
    }, basename: function(e8, n4) {
      if (n4 !== void 0 && typeof n4 != `string`) throw TypeError(`"ext" argument must be a string`);
      t3(e8);
      var r4, i2 = 0, a2 = -1, o2 = true;
      if (n4 !== void 0 && n4.length > 0 && n4.length <= e8.length) {
        if (n4.length === e8.length && n4 === e8) return ``;
        var s2 = n4.length - 1, c2 = -1;
        for (r4 = e8.length - 1; r4 >= 0; --r4) {
          var l2 = e8.charCodeAt(r4);
          if (l2 === 47) {
            if (!o2) {
              i2 = r4 + 1;
              break;
            }
          } else c2 === -1 && (o2 = false, c2 = r4 + 1), s2 >= 0 && (l2 === n4.charCodeAt(s2) ? --s2 == -1 && (a2 = r4) : (s2 = -1, a2 = c2));
        }
        return i2 === a2 ? a2 = c2 : a2 === -1 && (a2 = e8.length), e8.slice(i2, a2);
      }
      for (r4 = e8.length - 1; r4 >= 0; --r4) if (e8.charCodeAt(r4) === 47) {
        if (!o2) {
          i2 = r4 + 1;
          break;
        }
      } else a2 === -1 && (o2 = false, a2 = r4 + 1);
      return a2 === -1 ? `` : e8.slice(i2, a2);
    }, extname: function(e8) {
      t3(e8);
      for (var n4 = -1, r4 = 0, i2 = -1, a2 = true, o2 = 0, s2 = e8.length - 1; s2 >= 0; --s2) {
        var c2 = e8.charCodeAt(s2);
        if (c2 !== 47) i2 === -1 && (a2 = false, i2 = s2 + 1), c2 === 46 ? n4 === -1 ? n4 = s2 : o2 !== 1 && (o2 = 1) : n4 !== -1 && (o2 = -1);
        else if (!a2) {
          r4 = s2 + 1;
          break;
        }
      }
      return n4 === -1 || i2 === -1 || o2 === 0 || o2 === 1 && n4 === i2 - 1 && n4 === r4 + 1 ? `` : e8.slice(n4, i2);
    }, format: function(e8) {
      if (typeof e8 != `object` || !e8) throw TypeError(`The "pathObject" argument must be of type Object. Received type ` + typeof e8);
      return (function(e9, t4) {
        var n4 = t4.dir || t4.root, r4 = t4.base || (t4.name || ``) + (t4.ext || ``);
        return n4 ? n4 === t4.root ? n4 + r4 : n4 + `/` + r4 : r4;
      })(0, e8);
    }, parse: function(e8) {
      t3(e8);
      var n4 = { root: ``, dir: ``, base: ``, ext: ``, name: `` };
      if (e8.length === 0) return n4;
      var r4, i2 = e8.charCodeAt(0), a2 = i2 === 47;
      a2 ? (n4.root = `/`, r4 = 1) : r4 = 0;
      for (var o2 = -1, s2 = 0, c2 = -1, l2 = true, u2 = e8.length - 1, d2 = 0; u2 >= r4; --u2) if ((i2 = e8.charCodeAt(u2)) !== 47) c2 === -1 && (l2 = false, c2 = u2 + 1), i2 === 46 ? o2 === -1 ? o2 = u2 : d2 !== 1 && (d2 = 1) : o2 !== -1 && (d2 = -1);
      else if (!l2) {
        s2 = u2 + 1;
        break;
      }
      return o2 === -1 || c2 === -1 || d2 === 0 || d2 === 1 && o2 === c2 - 1 && o2 === s2 + 1 ? c2 !== -1 && (n4.base = n4.name = s2 === 0 && a2 ? e8.slice(1, c2) : e8.slice(s2, c2)) : (s2 === 0 && a2 ? (n4.name = e8.slice(1, o2), n4.base = e8.slice(1, c2)) : (n4.name = e8.slice(s2, o2), n4.base = e8.slice(s2, c2)), n4.ext = e8.slice(o2, c2)), s2 > 0 ? n4.dir = e8.slice(0, s2 - 1) : a2 && (n4.dir = `/`), n4;
    }, sep: `/`, delimiter: `:`, win32: null, posix: null };
    r3.posix = r3, e7.exports = r3;
  } }, t2 = {};
  function n2(r3) {
    var i2 = t2[r3];
    if (i2 !== void 0) return i2.exports;
    var a2 = t2[r3] = { exports: {} };
    return e6[r3](a2, a2.exports, n2), a2.exports;
  }
  n2.d = (e7, t3) => {
    for (var r3 in t3) n2.o(t3, r3) && !n2.o(e7, r3) && Object.defineProperty(e7, r3, { enumerable: true, get: t3[r3] });
  }, n2.o = (e7, t3) => Object.prototype.hasOwnProperty.call(e7, t3), n2.r = (e7) => {
    typeof Symbol < `u` && Symbol.toStringTag && Object.defineProperty(e7, Symbol.toStringTag, { value: `Module` }), Object.defineProperty(e7, `__esModule`, { value: true });
  };
  var r2 = {};
  (() => {
    let e7;
    n2.r(r2), n2.d(r2, { URI: () => c2, Utils: () => te2 }), typeof process == `object` ? e7 = process.platform === `win32` : typeof navigator == `object` && (e7 = navigator.userAgent.indexOf(`Windows`) >= 0);
    let t3 = /^\w[\w\d+.-]*$/, i2 = /^\//, a2 = /^\/\//;
    function o2(e8, n3) {
      if (!e8.scheme && n3) throw Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e8.authority}", path: "${e8.path}", query: "${e8.query}", fragment: "${e8.fragment}"}`);
      if (e8.scheme && !t3.test(e8.scheme)) throw Error(`[UriError]: Scheme contains illegal characters.`);
      if (e8.path) {
        if (e8.authority) {
          if (!i2.test(e8.path)) throw Error(`[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character`);
        } else if (a2.test(e8.path)) throw Error(`[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")`);
      }
    }
    let s2 = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    class c2 {
      constructor(e8, t4, n3, r3, i3, a3 = false) {
        __publicField(this, "scheme");
        __publicField(this, "authority");
        __publicField(this, "path");
        __publicField(this, "query");
        __publicField(this, "fragment");
        typeof e8 == `object` ? (this.scheme = e8.scheme || ``, this.authority = e8.authority || ``, this.path = e8.path || ``, this.query = e8.query || ``, this.fragment = e8.fragment || ``) : (this.scheme = /* @__PURE__ */ (function(e9, t5) {
          return e9 || t5 ? e9 : `file`;
        })(e8, a3), this.authority = t4 || ``, this.path = (function(e9, t5) {
          switch (e9) {
            case `https`:
            case `http`:
            case `file`:
              t5 ? t5[0] !== `/` && (t5 = `/` + t5) : t5 = `/`;
          }
          return t5;
        })(this.scheme, n3 || ``), this.query = r3 || ``, this.fragment = i3 || ``, o2(this, a3));
      }
      static isUri(e8) {
        return e8 instanceof c2 || !!e8 && typeof e8.authority == `string` && typeof e8.fragment == `string` && typeof e8.path == `string` && typeof e8.query == `string` && typeof e8.scheme == `string` && typeof e8.fsPath == `string` && typeof e8.with == `function` && typeof e8.toString == `function`;
      }
      get fsPath() {
        return m2(this, false);
      }
      with(e8) {
        if (!e8) return this;
        let { scheme: t4, authority: n3, path: r3, query: i3, fragment: a3 } = e8;
        return t4 === void 0 ? t4 = this.scheme : t4 === null && (t4 = ``), n3 === void 0 ? n3 = this.authority : n3 === null && (n3 = ``), r3 === void 0 ? r3 = this.path : r3 === null && (r3 = ``), i3 === void 0 ? i3 = this.query : i3 === null && (i3 = ``), a3 === void 0 ? a3 = this.fragment : a3 === null && (a3 = ``), t4 === this.scheme && n3 === this.authority && r3 === this.path && i3 === this.query && a3 === this.fragment ? this : new u2(t4, n3, r3, i3, a3);
      }
      static parse(e8, t4 = false) {
        let n3 = s2.exec(e8);
        return n3 ? new u2(n3[2] || ``, v2(n3[4] || ``), v2(n3[5] || ``), v2(n3[7] || ``), v2(n3[9] || ``), t4) : new u2(``, ``, ``, ``, ``);
      }
      static file(t4) {
        let n3 = ``;
        if (e7 && (t4 = t4.replace(/\\/g, `/`)), t4[0] === `/` && t4[1] === `/`) {
          let e8 = t4.indexOf(`/`, 2);
          e8 === -1 ? (n3 = t4.substring(2), t4 = `/`) : (n3 = t4.substring(2, e8), t4 = t4.substring(e8) || `/`);
        }
        return new u2(`file`, n3, t4, ``, ``);
      }
      static from(e8) {
        let t4 = new u2(e8.scheme, e8.authority, e8.path, e8.query, e8.fragment);
        return o2(t4, true), t4;
      }
      toString(e8 = false) {
        return h2(this, e8);
      }
      toJSON() {
        return this;
      }
      static revive(e8) {
        if (e8) {
          if (e8 instanceof c2) return e8;
          {
            let t4 = new u2(e8);
            return t4._formatted = e8.external, t4._fsPath = e8._sep === l2 ? e8.fsPath : null, t4;
          }
        }
        return e8;
      }
    }
    let l2 = e7 ? 1 : void 0;
    class u2 extends c2 {
      constructor() {
        super(...arguments);
        __publicField(this, "_formatted", null);
        __publicField(this, "_fsPath", null);
      }
      get fsPath() {
        return this._fsPath || (this._fsPath = m2(this, false)), this._fsPath;
      }
      toString(e8 = false) {
        return e8 ? h2(this, true) : (this._formatted || (this._formatted = h2(this, false)), this._formatted);
      }
      toJSON() {
        let e8 = { $mid: 1 };
        return this._fsPath && (e8.fsPath = this._fsPath, e8._sep = l2), this._formatted && (e8.external = this._formatted), this.path && (e8.path = this.path), this.scheme && (e8.scheme = this.scheme), this.authority && (e8.authority = this.authority), this.query && (e8.query = this.query), this.fragment && (e8.fragment = this.fragment), e8;
      }
    }
    let d2 = { 58: `%3A`, 47: `%2F`, 63: `%3F`, 35: `%23`, 91: `%5B`, 93: `%5D`, 64: `%40`, 33: `%21`, 36: `%24`, 38: `%26`, 39: `%27`, 40: `%28`, 41: `%29`, 42: `%2A`, 43: `%2B`, 44: `%2C`, 59: `%3B`, 61: `%3D`, 32: `%20` };
    function f2(e8, t4, n3) {
      let r3, i3 = -1;
      for (let a3 = 0; a3 < e8.length; a3++) {
        let o3 = e8.charCodeAt(a3);
        if (o3 >= 97 && o3 <= 122 || o3 >= 65 && o3 <= 90 || o3 >= 48 && o3 <= 57 || o3 === 45 || o3 === 46 || o3 === 95 || o3 === 126 || t4 && o3 === 47 || n3 && o3 === 91 || n3 && o3 === 93 || n3 && o3 === 58) i3 !== -1 && (r3 += encodeURIComponent(e8.substring(i3, a3)), i3 = -1), r3 !== void 0 && (r3 += e8.charAt(a3));
        else {
          r3 === void 0 && (r3 = e8.substr(0, a3));
          let t5 = d2[o3];
          t5 === void 0 ? i3 === -1 && (i3 = a3) : (i3 !== -1 && (r3 += encodeURIComponent(e8.substring(i3, a3)), i3 = -1), r3 += t5);
        }
      }
      return i3 !== -1 && (r3 += encodeURIComponent(e8.substring(i3))), r3 === void 0 ? e8 : r3;
    }
    function p2(e8) {
      let t4;
      for (let n3 = 0; n3 < e8.length; n3++) {
        let r3 = e8.charCodeAt(n3);
        r3 === 35 || r3 === 63 ? (t4 === void 0 && (t4 = e8.substr(0, n3)), t4 += d2[r3]) : t4 !== void 0 && (t4 += e8[n3]);
      }
      return t4 === void 0 ? e8 : t4;
    }
    function m2(t4, n3) {
      let r3;
      return r3 = t4.authority && t4.path.length > 1 && t4.scheme === `file` ? `//${t4.authority}${t4.path}` : t4.path.charCodeAt(0) === 47 && (t4.path.charCodeAt(1) >= 65 && t4.path.charCodeAt(1) <= 90 || t4.path.charCodeAt(1) >= 97 && t4.path.charCodeAt(1) <= 122) && t4.path.charCodeAt(2) === 58 ? n3 ? t4.path.substr(1) : t4.path[1].toLowerCase() + t4.path.substr(2) : t4.path, e7 && (r3 = r3.replace(/\//g, `\\`)), r3;
    }
    function h2(e8, t4) {
      let n3 = t4 ? p2 : f2, r3 = ``, { scheme: i3, authority: a3, path: o3, query: s3, fragment: c3 } = e8;
      if (i3 && (r3 += i3, r3 += `:`), (a3 || i3 === `file`) && (r3 += `/`, r3 += `/`), a3) {
        let e9 = a3.indexOf(`@`);
        if (e9 !== -1) {
          let t5 = a3.substr(0, e9);
          a3 = a3.substr(e9 + 1), e9 = t5.lastIndexOf(`:`), e9 === -1 ? r3 += n3(t5, false, false) : (r3 += n3(t5.substr(0, e9), false, false), r3 += `:`, r3 += n3(t5.substr(e9 + 1), false, true)), r3 += `@`;
        }
        a3 = a3.toLowerCase(), e9 = a3.lastIndexOf(`:`), e9 === -1 ? r3 += n3(a3, false, true) : (r3 += n3(a3.substr(0, e9), false, true), r3 += a3.substr(e9));
      }
      if (o3) {
        if (o3.length >= 3 && o3.charCodeAt(0) === 47 && o3.charCodeAt(2) === 58) {
          let e9 = o3.charCodeAt(1);
          e9 >= 65 && e9 <= 90 && (o3 = `/${String.fromCharCode(e9 + 32)}:${o3.substr(3)}`);
        } else if (o3.length >= 2 && o3.charCodeAt(1) === 58) {
          let e9 = o3.charCodeAt(0);
          e9 >= 65 && e9 <= 90 && (o3 = `${String.fromCharCode(e9 + 32)}:${o3.substr(2)}`);
        }
        r3 += n3(o3, true, false);
      }
      return s3 && (r3 += `?`, r3 += n3(s3, false, false)), c3 && (r3 += `#`, r3 += t4 ? c3 : f2(c3, false, false)), r3;
    }
    function g2(e8) {
      try {
        return decodeURIComponent(e8);
      } catch {
        return e8.length > 3 ? e8.substr(0, 3) + g2(e8.substr(3)) : e8;
      }
    }
    let _2 = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function v2(e8) {
      return e8.match(_2) ? e8.replace(_2, ((e9) => g2(e9))) : e8;
    }
    var y2 = n2(470);
    let ee2 = y2.posix || y2;
    var te2;
    (function(e8) {
      e8.joinPath = function(e9, ...t4) {
        return e9.with({ path: ee2.join(e9.path, ...t4) });
      }, e8.resolvePath = function(e9, ...t4) {
        let n3 = e9.path, r3 = false;
        n3[0] !== `/` && (n3 = `/` + n3, r3 = true);
        let i3 = ee2.resolve(n3, ...t4);
        return r3 && i3[0] === `/` && !e9.authority && (i3 = i3.substring(1)), e9.with({ path: i3 });
      }, e8.dirname = function(e9) {
        if (e9.path.length === 0 || e9.path === `/`) return e9;
        let t4 = ee2.dirname(e9.path);
        return t4.length === 1 && t4.charCodeAt(0) === 46 && (t4 = ``), e9.with({ path: t4 });
      }, e8.basename = function(e9) {
        return ee2.basename(e9.path);
      }, e8.extname = function(e9) {
        return ee2.extname(e9.path);
      };
    })(te2 || (te2 = {}));
  })(), kj = r2;
})();
const { URI: Aj, Utils: jj } = kj;
var Mj;
(function(e6) {
  e6.basename = jj.basename, e6.dirname = jj.dirname, e6.extname = jj.extname, e6.joinPath = jj.joinPath, e6.resolvePath = jj.resolvePath;
  function t2(e7, t3) {
    return (e7 == null ? void 0 : e7.toString()) === (t3 == null ? void 0 : t3.toString());
  }
  e6.equals = t2;
  function n2(e7, t3) {
    let n3 = typeof e7 == `string` ? e7 : e7.path, r3 = typeof t3 == `string` ? t3 : t3.path, i2 = n3.split(`/`).filter((e8) => e8.length > 0), a2 = r3.split(`/`).filter((e8) => e8.length > 0), o2 = 0;
    for (; o2 < i2.length && i2[o2] === a2[o2]; o2++) ;
    return `../`.repeat(i2.length - o2) + a2.slice(o2).join(`/`);
  }
  e6.relative = n2;
  function r2(e7) {
    return Aj.parse(e7.toString()).toString();
  }
  e6.normalize = r2;
})(Mj || (Mj = {}));
var Q;
(function(e6) {
  e6[e6.Changed = 0] = `Changed`, e6[e6.Parsed = 1] = `Parsed`, e6[e6.IndexedContent = 2] = `IndexedContent`, e6[e6.ComputedScopes = 3] = `ComputedScopes`, e6[e6.Linked = 4] = `Linked`, e6[e6.IndexedReferences = 5] = `IndexedReferences`, e6[e6.Validated = 6] = `Validated`;
})(Q || (Q = {}));
var Nj = class {
  constructor(e6) {
    this.serviceRegistry = e6.ServiceRegistry, this.textDocuments = e6.workspace.TextDocuments, this.fileSystemProvider = e6.workspace.FileSystemProvider;
  }
  async fromUri(e6, t2 = X.CancellationToken.None) {
    let n2 = await this.fileSystemProvider.readFile(e6);
    return this.createAsync(e6, n2, t2);
  }
  fromTextDocument(e6, t2, n2) {
    return t2 ?? (t2 = Aj.parse(e6.uri)), X.CancellationToken.is(n2) ? this.createAsync(t2, e6, n2) : this.create(t2, e6, n2);
  }
  fromString(e6, t2, n2) {
    return X.CancellationToken.is(n2) ? this.createAsync(t2, e6, n2) : this.create(t2, e6, n2);
  }
  fromModel(e6, t2) {
    return this.create(t2, { $model: e6 });
  }
  create(e6, t2, n2) {
    if (typeof t2 == `string`) {
      let r2 = this.parse(e6, t2, n2);
      return this.createLangiumDocument(r2, e6, void 0, t2);
    } else if (`$model` in t2) {
      let n3 = { value: t2.$model, parserErrors: [], lexerErrors: [] };
      return this.createLangiumDocument(n3, e6);
    } else {
      let r2 = this.parse(e6, t2.getText(), n2);
      return this.createLangiumDocument(r2, e6, t2);
    }
  }
  async createAsync(e6, t2, n2) {
    if (typeof t2 == `string`) {
      let r2 = await this.parseAsync(e6, t2, n2);
      return this.createLangiumDocument(r2, e6, void 0, t2);
    } else {
      let r2 = await this.parseAsync(e6, t2.getText(), n2);
      return this.createLangiumDocument(r2, e6, t2);
    }
  }
  createLangiumDocument(e6, t2, n2, r2) {
    let i2;
    if (n2) i2 = { parseResult: e6, uri: t2, state: Q.Parsed, references: [], textDocument: n2 };
    else {
      let n3 = this.createTextDocumentGetter(t2, r2);
      i2 = { parseResult: e6, uri: t2, state: Q.Parsed, references: [], get textDocument() {
        return n3();
      } };
    }
    return e6.value.$document = i2, i2;
  }
  async update(e6, t2) {
    var _a3, _b3;
    let n2 = (_a3 = e6.parseResult.value.$cstNode) == null ? void 0 : _a3.root.fullText, r2 = (_b3 = this.textDocuments) == null ? void 0 : _b3.get(e6.uri.toString()), i2 = r2 ? r2.getText() : await this.fileSystemProvider.readFile(e6.uri);
    if (r2) Object.defineProperty(e6, `textDocument`, { value: r2 });
    else {
      let t3 = this.createTextDocumentGetter(e6.uri, i2);
      Object.defineProperty(e6, `textDocument`, { get: t3 });
    }
    return n2 !== i2 && (e6.parseResult = await this.parseAsync(e6.uri, i2, t2), e6.parseResult.value.$document = e6), e6.state = Q.Parsed, e6;
  }
  parse(e6, t2, n2) {
    return this.serviceRegistry.getServices(e6).parser.LangiumParser.parse(t2, n2);
  }
  parseAsync(e6, t2, n2) {
    return this.serviceRegistry.getServices(e6).parser.AsyncParser.parse(t2, n2);
  }
  createTextDocumentGetter(e6, t2) {
    let n2 = this.serviceRegistry, r2;
    return () => r2 ?? (r2 = Cj.create(e6.toString(), n2.getServices(e6).LanguageMetaData.languageId, 0, t2 ?? ``));
  }
}, Pj = class {
  constructor(e6) {
    this.documentMap = /* @__PURE__ */ new Map(), this.langiumDocumentFactory = e6.workspace.LangiumDocumentFactory, this.serviceRegistry = e6.ServiceRegistry;
  }
  get all() {
    return S(this.documentMap.values());
  }
  addDocument(e6) {
    let t2 = e6.uri.toString();
    if (this.documentMap.has(t2)) throw Error(`A document with the URI '${t2}' is already present.`);
    this.documentMap.set(t2, e6);
  }
  getDocument(e6) {
    let t2 = e6.toString();
    return this.documentMap.get(t2);
  }
  async getOrCreateDocument(e6, t2) {
    let n2 = this.getDocument(e6);
    return n2 || (n2 = await this.langiumDocumentFactory.fromUri(e6, t2), this.addDocument(n2), n2);
  }
  createDocument(e6, t2, n2) {
    if (n2) return this.langiumDocumentFactory.fromString(t2, e6, n2).then((e7) => (this.addDocument(e7), e7));
    {
      let n3 = this.langiumDocumentFactory.fromString(t2, e6);
      return this.addDocument(n3), n3;
    }
  }
  hasDocument(e6) {
    return this.documentMap.has(e6.toString());
  }
  invalidateDocument(e6) {
    let t2 = e6.toString(), n2 = this.documentMap.get(t2);
    return n2 && (this.serviceRegistry.getServices(e6).references.Linker.unlink(n2), n2.state = Q.Changed, n2.precomputedScopes = void 0, n2.diagnostics = void 0), n2;
  }
  deleteDocument(e6) {
    let t2 = e6.toString(), n2 = this.documentMap.get(t2);
    return n2 && (n2.state = Q.Changed, this.documentMap.delete(t2)), n2;
  }
}, Fj = Symbol(`ref_resolving`), Ij = class {
  constructor(e6) {
    this.reflection = e6.shared.AstReflection, this.langiumDocuments = () => e6.shared.workspace.LangiumDocuments, this.scopeProvider = e6.references.ScopeProvider, this.astNodeLocator = e6.workspace.AstNodeLocator;
  }
  async link(e6, t2 = X.CancellationToken.None) {
    for (let n2 of kn(e6.parseResult.value)) await Z(t2), jn(n2).forEach((t3) => this.doLink(t3, e6));
  }
  doLink(e6, t2) {
    let n2 = e6.reference;
    if (n2._ref === void 0) {
      n2._ref = Fj;
      try {
        let t3 = this.getCandidate(e6);
        _(t3) ? n2._ref = t3 : (n2._nodeDescription = t3, this.langiumDocuments().hasDocument(t3.documentUri) ? n2._ref = this.loadAstNode(t3) ?? this.createLinkingError(e6, t3) : n2._ref = void 0);
      } catch (t3) {
        console.error(`An error occurred while resolving reference to '${n2.$refText}':`, t3);
        let r2 = t3.message ?? String(t3);
        n2._ref = Object.assign(Object.assign({}, e6), { message: `An error occurred while resolving reference to '${n2.$refText}': ${r2}` });
      }
      t2.references.push(n2);
    }
  }
  unlink(e6) {
    for (let t2 of e6.references) delete t2._ref, delete t2._nodeDescription;
    e6.references = [];
  }
  getCandidate(e6) {
    return this.scopeProvider.getScope(e6).getElement(e6.reference.$refText) ?? this.createLinkingError(e6);
  }
  buildReference(e6, t2, n2, r2) {
    let i2 = this, a2 = { $refNode: n2, $refText: r2, get ref() {
      if (m(this._ref)) return this._ref;
      if (g(this._nodeDescription)) this._ref = i2.loadAstNode(this._nodeDescription) ?? i2.createLinkingError({ reference: a2, container: e6, property: t2 }, this._nodeDescription);
      else if (this._ref === void 0) {
        this._ref = Fj;
        let n3 = En(e6).$document, r3 = i2.getLinkedNode({ reference: a2, container: e6, property: t2 });
        if (r3.error && n3 && n3.state < Q.ComputedScopes) {
          this._ref = void 0;
          return;
        }
        this._ref = r3.node ?? r3.error, this._nodeDescription = r3.descr, n3 == null ? void 0 : n3.references.push(this);
      } else if (this._ref === Fj) throw Error(`Cyclic reference resolution detected: ${i2.astNodeLocator.getAstNodePath(e6)}/${t2} (symbol '${r2}')`);
      return m(this._ref) ? this._ref : void 0;
    }, get $nodeDescription() {
      return this._nodeDescription;
    }, get error() {
      return _(this._ref) ? this._ref : void 0;
    } };
    return a2;
  }
  getLinkedNode(e6) {
    try {
      let t2 = this.getCandidate(e6);
      if (_(t2)) return { error: t2 };
      let n2 = this.loadAstNode(t2);
      return n2 ? { node: n2, descr: t2 } : { descr: t2, error: this.createLinkingError(e6, t2) };
    } catch (t2) {
      console.error(`An error occurred while resolving reference to '${e6.reference.$refText}':`, t2);
      let n2 = t2.message ?? String(t2);
      return { error: Object.assign(Object.assign({}, e6), { message: `An error occurred while resolving reference to '${e6.reference.$refText}': ${n2}` }) };
    }
  }
  loadAstNode(e6) {
    if (e6.node) return e6.node;
    let t2 = this.langiumDocuments().getDocument(e6.documentUri);
    if (t2) return this.astNodeLocator.getAstNode(t2.parseResult.value, e6.path);
  }
  createLinkingError(e6, t2) {
    let n2 = En(e6.container).$document;
    n2 && n2.state < Q.ComputedScopes && console.warn(`Attempted reference resolution before document reached ComputedScopes state (${n2.uri}).`);
    let r2 = this.reflection.getReferenceType(e6);
    return Object.assign(Object.assign({}, e6), { message: `Could not resolve reference to ${r2} named '${e6.reference.$refText}'.`, targetDescription: t2 });
  }
};
function Lj(e6) {
  return typeof e6.name == `string`;
}
var Rj = class {
  getName(e6) {
    if (Lj(e6)) return e6.name;
  }
  getNameNode(e6) {
    return hr(e6.$cstNode, `name`);
  }
}, zj = class {
  constructor(e6) {
    this.nameProvider = e6.references.NameProvider, this.index = e6.shared.workspace.IndexManager, this.nodeLocator = e6.workspace.AstNodeLocator;
  }
  findDeclaration(e6) {
    if (e6) {
      let t2 = br(e6), n2 = e6.astNode;
      if (t2 && n2) {
        let r2 = n2[t2.feature];
        if (h(r2)) return r2.ref;
        if (Array.isArray(r2)) {
          for (let t3 of r2) if (h(t3) && t3.$refNode && t3.$refNode.offset <= e6.offset && t3.$refNode.end >= e6.end) return t3.ref;
        }
      }
      if (n2) {
        let t3 = this.nameProvider.getNameNode(n2);
        if (t3 && (t3 === e6 || ue(e6, t3))) return n2;
      }
    }
  }
  findDeclarationNode(e6) {
    let t2 = this.findDeclaration(e6);
    if (t2 == null ? void 0 : t2.$cstNode) return this.nameProvider.getNameNode(t2) ?? t2.$cstNode;
  }
  findReferences(e6, t2) {
    let n2 = [];
    if (t2.includeDeclaration) {
      let t3 = this.getReferenceToSelf(e6);
      t3 && n2.push(t3);
    }
    let r2 = this.index.findAllReferences(e6, this.nodeLocator.getAstNodePath(e6));
    return t2.documentUri && (r2 = r2.filter((e7) => Mj.equals(e7.sourceUri, t2.documentUri))), n2.push(...r2), S(n2);
  }
  getReferenceToSelf(e6) {
    let t2 = this.nameProvider.getNameNode(e6);
    if (t2) {
      let n2 = Tn(e6), r2 = this.nodeLocator.getAstNodePath(e6);
      return { sourceUri: n2.uri, sourcePath: r2, targetUri: n2.uri, targetPath: r2, segment: fe(t2), local: true };
    }
  }
}, Bj = class {
  constructor(e6) {
    if (this.map = /* @__PURE__ */ new Map(), e6) for (let [t2, n2] of e6) this.add(t2, n2);
  }
  get size() {
    return oe.sum(S(this.map.values()).map((e6) => e6.length));
  }
  clear() {
    this.map.clear();
  }
  delete(e6, t2) {
    if (t2 === void 0) return this.map.delete(e6);
    {
      let n2 = this.map.get(e6);
      if (n2) {
        let r2 = n2.indexOf(t2);
        if (r2 >= 0) return n2.length === 1 ? this.map.delete(e6) : n2.splice(r2, 1), true;
      }
      return false;
    }
  }
  get(e6) {
    return this.map.get(e6) ?? [];
  }
  has(e6, t2) {
    if (t2 === void 0) return this.map.has(e6);
    {
      let n2 = this.map.get(e6);
      return n2 ? n2.indexOf(t2) >= 0 : false;
    }
  }
  add(e6, t2) {
    return this.map.has(e6) ? this.map.get(e6).push(t2) : this.map.set(e6, [t2]), this;
  }
  addAll(e6, t2) {
    return this.map.has(e6) ? this.map.get(e6).push(...t2) : this.map.set(e6, Array.from(t2)), this;
  }
  forEach(e6) {
    this.map.forEach((t2, n2) => t2.forEach((t3) => e6(t3, n2, this)));
  }
  [Symbol.iterator]() {
    return this.entries().iterator();
  }
  entries() {
    return S(this.map.entries()).flatMap(([e6, t2]) => t2.map((t3) => [e6, t3]));
  }
  keys() {
    return S(this.map.keys());
  }
  values() {
    return S(this.map.values()).flat();
  }
  entriesGroupedByKey() {
    return S(this.map.entries());
  }
}, Vj = class {
  get size() {
    return this.map.size;
  }
  constructor(e6) {
    if (this.map = /* @__PURE__ */ new Map(), this.inverse = /* @__PURE__ */ new Map(), e6) for (let [t2, n2] of e6) this.set(t2, n2);
  }
  clear() {
    this.map.clear(), this.inverse.clear();
  }
  set(e6, t2) {
    return this.map.set(e6, t2), this.inverse.set(t2, e6), this;
  }
  get(e6) {
    return this.map.get(e6);
  }
  getKey(e6) {
    return this.inverse.get(e6);
  }
  delete(e6) {
    let t2 = this.map.get(e6);
    return t2 === void 0 ? false : (this.map.delete(e6), this.inverse.delete(t2), true);
  }
}, Hj = class {
  constructor(e6) {
    this.nameProvider = e6.references.NameProvider, this.descriptions = e6.workspace.AstNodeDescriptionProvider;
  }
  async computeExports(e6, t2 = X.CancellationToken.None) {
    return this.computeExportsForNode(e6.parseResult.value, e6, void 0, t2);
  }
  async computeExportsForNode(e6, t2, n2 = Dn, r2 = X.CancellationToken.None) {
    let i2 = [];
    this.exportNode(e6, i2, t2);
    for (let a2 of n2(e6)) await Z(r2), this.exportNode(a2, i2, t2);
    return i2;
  }
  exportNode(e6, t2, n2) {
    let r2 = this.nameProvider.getName(e6);
    r2 && t2.push(this.descriptions.createDescription(e6, r2, n2));
  }
  async computeLocalScopes(e6, t2 = X.CancellationToken.None) {
    let n2 = e6.parseResult.value, r2 = new Bj();
    for (let i2 of On(n2)) await Z(t2), this.processNode(i2, e6, r2);
    return r2;
  }
  processNode(e6, t2, n2) {
    let r2 = e6.$container;
    if (r2) {
      let i2 = this.nameProvider.getName(e6);
      i2 && n2.add(r2, this.descriptions.createDescription(e6, i2, t2));
    }
  }
}, Uj = class {
  constructor(e6, t2, n2) {
    this.elements = e6, this.outerScope = t2, this.caseInsensitive = (n2 == null ? void 0 : n2.caseInsensitive) ?? false;
  }
  getAllElements() {
    return this.outerScope ? this.elements.concat(this.outerScope.getAllElements()) : this.elements;
  }
  getElement(e6) {
    let t2 = this.caseInsensitive ? this.elements.find((t3) => t3.name.toLowerCase() === e6.toLowerCase()) : this.elements.find((t3) => t3.name === e6);
    if (t2) return t2;
    if (this.outerScope) return this.outerScope.getElement(e6);
  }
}, Wj = class {
  constructor(e6, t2, n2) {
    this.elements = /* @__PURE__ */ new Map(), this.caseInsensitive = (n2 == null ? void 0 : n2.caseInsensitive) ?? false;
    for (let t3 of e6) {
      let e7 = this.caseInsensitive ? t3.name.toLowerCase() : t3.name;
      this.elements.set(e7, t3);
    }
    this.outerScope = t2;
  }
  getElement(e6) {
    let t2 = this.caseInsensitive ? e6.toLowerCase() : e6, n2 = this.elements.get(t2);
    if (n2) return n2;
    if (this.outerScope) return this.outerScope.getElement(e6);
  }
  getAllElements() {
    let e6 = S(this.elements.values());
    return this.outerScope && (e6 = e6.concat(this.outerScope.getAllElements())), e6;
  }
};
const Gj = { getElement() {
}, getAllElements() {
  return ie;
} };
var Kj = class {
  constructor() {
    this.toDispose = [], this.isDisposed = false;
  }
  onDispose(e6) {
    this.toDispose.push(e6);
  }
  dispose() {
    this.throwIfDisposed(), this.clear(), this.isDisposed = true, this.toDispose.forEach((e6) => e6.dispose());
  }
  throwIfDisposed() {
    if (this.isDisposed) throw Error(`This cache has already been disposed`);
  }
}, qj = class extends Kj {
  constructor() {
    super(...arguments), this.cache = /* @__PURE__ */ new Map();
  }
  has(e6) {
    return this.throwIfDisposed(), this.cache.has(e6);
  }
  set(e6, t2) {
    this.throwIfDisposed(), this.cache.set(e6, t2);
  }
  get(e6, t2) {
    if (this.throwIfDisposed(), this.cache.has(e6)) return this.cache.get(e6);
    if (t2) {
      let n2 = t2();
      return this.cache.set(e6, n2), n2;
    } else return;
  }
  delete(e6) {
    return this.throwIfDisposed(), this.cache.delete(e6);
  }
  clear() {
    this.throwIfDisposed(), this.cache.clear();
  }
}, Jj = class extends Kj {
  constructor(e6) {
    super(), this.cache = /* @__PURE__ */ new Map(), this.converter = e6 ?? ((e7) => e7);
  }
  has(e6, t2) {
    return this.throwIfDisposed(), this.cacheForContext(e6).has(t2);
  }
  set(e6, t2, n2) {
    this.throwIfDisposed(), this.cacheForContext(e6).set(t2, n2);
  }
  get(e6, t2, n2) {
    this.throwIfDisposed();
    let r2 = this.cacheForContext(e6);
    if (r2.has(t2)) return r2.get(t2);
    if (n2) {
      let e7 = n2();
      return r2.set(t2, e7), e7;
    } else return;
  }
  delete(e6, t2) {
    return this.throwIfDisposed(), this.cacheForContext(e6).delete(t2);
  }
  clear(e6) {
    if (this.throwIfDisposed(), e6) {
      let t2 = this.converter(e6);
      this.cache.delete(t2);
    } else this.cache.clear();
  }
  cacheForContext(e6) {
    let t2 = this.converter(e6), n2 = this.cache.get(t2);
    return n2 || (n2 = /* @__PURE__ */ new Map(), this.cache.set(t2, n2)), n2;
  }
}, Yj = class extends Jj {
  constructor(e6, t2) {
    super((e7) => e7.toString()), t2 ? (this.toDispose.push(e6.workspace.DocumentBuilder.onDocumentPhase(t2, (e7) => {
      this.clear(e7.uri.toString());
    })), this.toDispose.push(e6.workspace.DocumentBuilder.onUpdate((e7, t3) => {
      for (let e8 of t3) this.clear(e8);
    }))) : this.toDispose.push(e6.workspace.DocumentBuilder.onUpdate((e7, t3) => {
      let n2 = e7.concat(t3);
      for (let e8 of n2) this.clear(e8);
    }));
  }
}, Xj = class extends qj {
  constructor(e6, t2) {
    super(), t2 ? (this.toDispose.push(e6.workspace.DocumentBuilder.onBuildPhase(t2, () => {
      this.clear();
    })), this.toDispose.push(e6.workspace.DocumentBuilder.onUpdate((e7, t3) => {
      t3.length > 0 && this.clear();
    }))) : this.toDispose.push(e6.workspace.DocumentBuilder.onUpdate(() => {
      this.clear();
    }));
  }
}, Zj = class {
  constructor(e6) {
    this.reflection = e6.shared.AstReflection, this.nameProvider = e6.references.NameProvider, this.descriptions = e6.workspace.AstNodeDescriptionProvider, this.indexManager = e6.shared.workspace.IndexManager, this.globalScopeCache = new Xj(e6.shared);
  }
  getScope(e6) {
    let t2 = [], n2 = this.reflection.getReferenceType(e6), r2 = Tn(e6.container).precomputedScopes;
    if (r2) {
      let i3 = e6.container;
      do {
        let e7 = r2.get(i3);
        e7.length > 0 && t2.push(S(e7).filter((e8) => this.reflection.isSubtype(e8.type, n2))), i3 = i3.$container;
      } while (i3);
    }
    let i2 = this.getGlobalScope(n2, e6);
    for (let e7 = t2.length - 1; e7 >= 0; e7--) i2 = this.createScope(t2[e7], i2);
    return i2;
  }
  createScope(e6, t2, n2) {
    return new Uj(S(e6), t2, n2);
  }
  createScopeForNodes(e6, t2, n2) {
    return new Uj(S(e6).map((e7) => {
      let t3 = this.nameProvider.getName(e7);
      if (t3) return this.descriptions.createDescription(e7, t3);
    }).nonNullable(), t2, n2);
  }
  getGlobalScope(e6, t2) {
    return this.globalScopeCache.get(e6, () => new Wj(this.indexManager.allElements(e6)));
  }
};
function Qj(e6) {
  return typeof e6.$comment == `string`;
}
function $j(e6) {
  return typeof e6 == `object` && !!e6 && (`$ref` in e6 || `$error` in e6);
}
var eM = class {
  constructor(e6) {
    this.ignoreProperties = /* @__PURE__ */ new Set([`$container`, `$containerProperty`, `$containerIndex`, `$document`, `$cstNode`]), this.langiumDocuments = e6.shared.workspace.LangiumDocuments, this.astNodeLocator = e6.workspace.AstNodeLocator, this.nameProvider = e6.references.NameProvider, this.commentProvider = e6.documentation.CommentProvider;
  }
  serialize(e6, t2) {
    let n2 = t2 ?? {}, r2 = t2 == null ? void 0 : t2.replacer, i2 = (e7, t3) => this.replacer(e7, t3, n2), a2 = r2 ? (e7, t3) => r2(e7, t3, i2) : i2;
    try {
      return this.currentDocument = Tn(e6), JSON.stringify(e6, a2, t2 == null ? void 0 : t2.space);
    } finally {
      this.currentDocument = void 0;
    }
  }
  deserialize(e6, t2) {
    let n2 = t2 ?? {}, r2 = JSON.parse(e6);
    return this.linkNode(r2, r2, n2), r2;
  }
  replacer(e6, t2, { refText: n2, sourceText: r2, textRegions: i2, comments: a2, uriConverter: o2 }) {
    var _a3, _b3, _c3;
    if (!this.ignoreProperties.has(e6)) if (h(t2)) {
      let e7 = t2.ref, r3 = n2 ? t2.$refText : void 0;
      if (e7) {
        let n3 = Tn(e7), i3 = ``;
        this.currentDocument && this.currentDocument !== n3 && (i3 = o2 ? o2(n3.uri, t2) : n3.uri.toString());
        let a3 = this.astNodeLocator.getAstNodePath(e7);
        return { $ref: `${i3}#${a3}`, $refText: r3 };
      } else return { $error: ((_a3 = t2.error) == null ? void 0 : _a3.message) ?? `Could not resolve reference`, $refText: r3 };
    } else if (m(t2)) {
      let n3;
      if (i2 && (n3 = this.addAstNodeRegionWithAssignmentsTo(Object.assign({}, t2)), (!e6 || t2.$document) && (n3 == null ? void 0 : n3.$textRegion) && (n3.$textRegion.documentURI = (_b3 = this.currentDocument) == null ? void 0 : _b3.uri.toString())), r2 && !e6 && (n3 ?? (n3 = Object.assign({}, t2)), n3.$sourceText = (_c3 = t2.$cstNode) == null ? void 0 : _c3.text), a2) {
        n3 ?? (n3 = Object.assign({}, t2));
        let e7 = this.commentProvider.getComment(t2);
        e7 && (n3.$comment = e7.replace(/\r/g, ``));
      }
      return n3 ?? t2;
    } else return t2;
  }
  addAstNodeRegionWithAssignmentsTo(e6) {
    let t2 = (e7) => ({ offset: e7.offset, end: e7.end, length: e7.length, range: e7.range });
    if (e6.$cstNode) {
      let n2 = e6.$textRegion = t2(e6.$cstNode), r2 = n2.assignments = {};
      return Object.keys(e6).filter((e7) => !e7.startsWith(`$`)).forEach((n3) => {
        let i2 = mr(e6.$cstNode, n3).map(t2);
        i2.length !== 0 && (r2[n3] = i2);
      }), e6;
    }
  }
  linkNode(e6, t2, n2, r2, i2, a2) {
    for (let [r3, i3] of Object.entries(e6)) if (Array.isArray(i3)) for (let a3 = 0; a3 < i3.length; a3++) {
      let o3 = i3[a3];
      $j(o3) ? i3[a3] = this.reviveReference(e6, r3, t2, o3, n2) : m(o3) && this.linkNode(o3, t2, n2, e6, r3, a3);
    }
    else $j(i3) ? e6[r3] = this.reviveReference(e6, r3, t2, i3, n2) : m(i3) && this.linkNode(i3, t2, n2, e6, r3);
    let o2 = e6;
    o2.$container = r2, o2.$containerProperty = i2, o2.$containerIndex = a2;
  }
  reviveReference(e6, t2, n2, r2, i2) {
    let a2 = r2.$refText, o2 = r2.$error;
    if (r2.$ref) {
      let e7 = this.getRefNode(n2, r2.$ref, i2.uriConverter);
      if (m(e7)) return a2 || (a2 = this.nameProvider.getName(e7)), { $refText: a2 ?? ``, ref: e7 };
      o2 = e7;
    }
    if (o2) {
      let n3 = { $refText: a2 ?? `` };
      return n3.error = { container: e6, property: t2, message: o2, reference: n3 }, n3;
    } else return;
  }
  getRefNode(e6, t2, n2) {
    try {
      let r2 = t2.indexOf(`#`);
      if (r2 === 0) return this.astNodeLocator.getAstNode(e6, t2.substring(1)) || `Could not resolve path: ` + t2;
      if (r2 < 0) {
        let e7 = n2 ? n2(t2) : Aj.parse(t2), r3 = this.langiumDocuments.getDocument(e7);
        return r3 ? r3.parseResult.value : `Could not find document for URI: ` + t2;
      }
      let i2 = n2 ? n2(t2.substring(0, r2)) : Aj.parse(t2.substring(0, r2)), a2 = this.langiumDocuments.getDocument(i2);
      return a2 ? r2 === t2.length - 1 ? a2.parseResult.value : this.astNodeLocator.getAstNode(a2.parseResult.value, t2.substring(r2 + 1)) || `Could not resolve URI: ` + t2 : `Could not find document for URI: ` + t2;
    } catch (e7) {
      return String(e7);
    }
  }
}, tM = class {
  get map() {
    return this.fileExtensionMap;
  }
  constructor(e6) {
    this.languageIdMap = /* @__PURE__ */ new Map(), this.fileExtensionMap = /* @__PURE__ */ new Map(), this.textDocuments = e6 == null ? void 0 : e6.workspace.TextDocuments;
  }
  register(e6) {
    let t2 = e6.LanguageMetaData;
    for (let n2 of t2.fileExtensions) this.fileExtensionMap.has(n2) && console.warn(`The file extension ${n2} is used by multiple languages. It is now assigned to '${t2.languageId}'.`), this.fileExtensionMap.set(n2, e6);
    this.languageIdMap.set(t2.languageId, e6), this.languageIdMap.size === 1 ? this.singleton = e6 : this.singleton = void 0;
  }
  getServices(e6) {
    var _a3, _b3;
    if (this.singleton !== void 0) return this.singleton;
    if (this.languageIdMap.size === 0) throw Error("The service registry is empty. Use `register` to register the services of a language.");
    let t2 = (_b3 = (_a3 = this.textDocuments) == null ? void 0 : _a3.get(e6)) == null ? void 0 : _b3.languageId;
    if (t2 !== void 0) {
      let e7 = this.languageIdMap.get(t2);
      if (e7) return e7;
    }
    let n2 = Mj.extname(e6), r2 = this.fileExtensionMap.get(n2);
    if (!r2) throw t2 ? Error(`The service registry contains no services for the extension '${n2}' for language '${t2}'.`) : Error(`The service registry contains no services for the extension '${n2}'.`);
    return r2;
  }
  hasServices(e6) {
    try {
      return this.getServices(e6), true;
    } catch {
      return false;
    }
  }
  get all() {
    return Array.from(this.languageIdMap.values());
  }
};
function nM(e6) {
  return { code: e6 };
}
var rM;
(function(e6) {
  e6.all = [`fast`, `slow`, `built-in`];
})(rM || (rM = {}));
var iM = class {
  constructor(e6) {
    this.entries = new Bj(), this.entriesBefore = [], this.entriesAfter = [], this.reflection = e6.shared.AstReflection;
  }
  register(e6, t2 = this, n2 = `fast`) {
    if (n2 === `built-in`) throw Error(`The 'built-in' category is reserved for lexer, parser, and linker errors.`);
    for (let [r2, i2] of Object.entries(e6)) {
      let e7 = i2;
      if (Array.isArray(e7)) for (let i3 of e7) {
        let e8 = { check: this.wrapValidationException(i3, t2), category: n2 };
        this.addEntry(r2, e8);
      }
      else if (typeof e7 == `function`) {
        let i3 = { check: this.wrapValidationException(e7, t2), category: n2 };
        this.addEntry(r2, i3);
      } else Ae(e7);
    }
  }
  wrapValidationException(e6, t2) {
    return async (n2, r2, i2) => {
      await this.handleException(() => e6.call(t2, n2, r2, i2), `An error occurred during validation`, r2, n2);
    };
  }
  async handleException(e6, t2, n2, r2) {
    try {
      await e6();
    } catch (e7) {
      if (bj(e7)) throw e7;
      console.error(`${t2}:`, e7), e7 instanceof Error && e7.stack && console.error(e7.stack), n2(`error`, `${t2}: ${e7 instanceof Error ? e7.message : String(e7)}`, { node: r2 });
    }
  }
  addEntry(e6, t2) {
    if (e6 === `AstNode`) {
      this.entries.add(`AstNode`, t2);
      return;
    }
    for (let n2 of this.reflection.getAllSubTypes(e6)) this.entries.add(n2, t2);
  }
  getChecks(e6, t2) {
    let n2 = S(this.entries.get(e6)).concat(this.entries.get(`AstNode`));
    return t2 && (n2 = n2.filter((e7) => t2.includes(e7.category))), n2.map((e7) => e7.check);
  }
  registerBeforeDocument(e6, t2 = this) {
    this.entriesBefore.push(this.wrapPreparationException(e6, `An error occurred during set-up of the validation`, t2));
  }
  registerAfterDocument(e6, t2 = this) {
    this.entriesAfter.push(this.wrapPreparationException(e6, `An error occurred during tear-down of the validation`, t2));
  }
  wrapPreparationException(e6, t2, n2) {
    return async (r2, i2, a2, o2) => {
      await this.handleException(() => e6.call(n2, r2, i2, a2, o2), t2, i2, r2);
    };
  }
  get checksBefore() {
    return this.entriesBefore;
  }
  get checksAfter() {
    return this.entriesAfter;
  }
}, aM = class {
  constructor(e6) {
    this.validationRegistry = e6.validation.ValidationRegistry, this.metadata = e6.LanguageMetaData;
  }
  async validateDocument(e6, t2 = {}, n2 = X.CancellationToken.None) {
    let r2 = e6.parseResult, i2 = [];
    if (await Z(n2), (!t2.categories || t2.categories.includes(`built-in`)) && (this.processLexingErrors(r2, i2, t2), t2.stopAfterLexingErrors && i2.some((e7) => {
      var _a3;
      return ((_a3 = e7.data) == null ? void 0 : _a3.code) === lM.LexingError;
    }) || (this.processParsingErrors(r2, i2, t2), t2.stopAfterParsingErrors && i2.some((e7) => {
      var _a3;
      return ((_a3 = e7.data) == null ? void 0 : _a3.code) === lM.ParsingError;
    })) || (this.processLinkingErrors(e6, i2, t2), t2.stopAfterLinkingErrors && i2.some((e7) => {
      var _a3;
      return ((_a3 = e7.data) == null ? void 0 : _a3.code) === lM.LinkingError;
    })))) return i2;
    try {
      i2.push(...await this.validateAst(r2.value, t2, n2));
    } catch (e7) {
      if (bj(e7)) throw e7;
      console.error(`An error occurred during validation:`, e7);
    }
    return await Z(n2), i2;
  }
  processLexingErrors(e6, t2, n2) {
    var _a3;
    let r2 = [...e6.lexerErrors, ...((_a3 = e6.lexerReport) == null ? void 0 : _a3.diagnostics) ?? []];
    for (let e7 of r2) {
      let n3 = e7.severity ?? `error`, r3 = { severity: sM(n3), range: { start: { line: e7.line - 1, character: e7.column - 1 }, end: { line: e7.line - 1, character: e7.column + e7.length - 1 } }, message: e7.message, data: cM(n3), source: this.getSource() };
      t2.push(r3);
    }
  }
  processParsingErrors(e6, t2, n2) {
    for (let n3 of e6.parserErrors) {
      let e7;
      if (isNaN(n3.token.startOffset)) {
        if (`previousToken` in n3) {
          let t3 = n3.previousToken;
          if (isNaN(t3.startOffset)) {
            let t4 = { line: 0, character: 0 };
            e7 = { start: t4, end: t4 };
          } else {
            let n4 = { line: t3.endLine - 1, character: t3.endColumn };
            e7 = { start: n4, end: n4 };
          }
        }
      } else e7 = de(n3.token);
      if (e7) {
        let r2 = { severity: sM(`error`), range: e7, message: n3.message, data: nM(lM.ParsingError), source: this.getSource() };
        t2.push(r2);
      }
    }
  }
  processLinkingErrors(e6, t2, n2) {
    for (let n3 of e6.references) {
      let e7 = n3.error;
      if (e7) {
        let n4 = { node: e7.container, property: e7.property, index: e7.index, data: { code: lM.LinkingError, containerType: e7.container.$type, property: e7.property, refText: e7.reference.$refText } };
        t2.push(this.toDiagnostic(`error`, e7.message, n4));
      }
    }
  }
  async validateAst(e6, t2, n2 = X.CancellationToken.None) {
    let r2 = [], i2 = (e7, t3, n3) => {
      r2.push(this.toDiagnostic(e7, t3, n3));
    };
    return await this.validateAstBefore(e6, t2, i2, n2), await this.validateAstNodes(e6, t2, i2, n2), await this.validateAstAfter(e6, t2, i2, n2), r2;
  }
  async validateAstBefore(e6, t2, n2, r2 = X.CancellationToken.None) {
    let i2 = this.validationRegistry.checksBefore;
    for (let a2 of i2) await Z(r2), await a2(e6, n2, t2.categories ?? [], r2);
  }
  async validateAstNodes(e6, t2, n2, r2 = X.CancellationToken.None) {
    await Promise.all(kn(e6).map(async (e7) => {
      await Z(r2);
      let i2 = this.validationRegistry.getChecks(e7.$type, t2.categories);
      for (let t3 of i2) await t3(e7, n2, r2);
    }));
  }
  async validateAstAfter(e6, t2, n2, r2 = X.CancellationToken.None) {
    let i2 = this.validationRegistry.checksAfter;
    for (let a2 of i2) await Z(r2), await a2(e6, n2, t2.categories ?? [], r2);
  }
  toDiagnostic(e6, t2, n2) {
    return { message: t2, range: oM(n2), severity: sM(e6), code: n2.code, codeDescription: n2.codeDescription, tags: n2.tags, relatedInformation: n2.relatedInformation, data: n2.data, source: this.getSource() };
  }
  getSource() {
    return this.metadata.languageId;
  }
};
function oM(e6) {
  if (e6.range) return e6.range;
  let t2;
  return typeof e6.property == `string` ? t2 = hr(e6.node.$cstNode, e6.property, e6.index) : typeof e6.keyword == `string` && (t2 = vr(e6.node.$cstNode, e6.keyword, e6.index)), t2 ?? (t2 = e6.node.$cstNode), t2 ? t2.range : { start: { line: 0, character: 0 }, end: { line: 0, character: 0 } };
}
function sM(e6) {
  switch (e6) {
    case `error`:
      return 1;
    case `warning`:
      return 2;
    case `info`:
      return 3;
    case `hint`:
      return 4;
    default:
      throw Error(`Invalid diagnostic severity: ` + e6);
  }
}
function cM(e6) {
  switch (e6) {
    case `error`:
      return nM(lM.LexingError);
    case `warning`:
      return nM(lM.LexingWarning);
    case `info`:
      return nM(lM.LexingInfo);
    case `hint`:
      return nM(lM.LexingHint);
    default:
      throw Error(`Invalid diagnostic severity: ` + e6);
  }
}
var lM;
(function(e6) {
  e6.LexingError = `lexing-error`, e6.LexingWarning = `lexing-warning`, e6.LexingInfo = `lexing-info`, e6.LexingHint = `lexing-hint`, e6.ParsingError = `parsing-error`, e6.LinkingError = `linking-error`;
})(lM || (lM = {}));
var uM = class {
  constructor(e6) {
    this.astNodeLocator = e6.workspace.AstNodeLocator, this.nameProvider = e6.references.NameProvider;
  }
  createDescription(e6, t2, n2) {
    let r2 = n2 ?? Tn(e6);
    t2 ?? (t2 = this.nameProvider.getName(e6));
    let i2 = this.astNodeLocator.getAstNodePath(e6);
    if (!t2) throw Error(`Node at path ${i2} has no name.`);
    let a2, o2 = () => a2 ?? (a2 = fe(this.nameProvider.getNameNode(e6) ?? e6.$cstNode));
    return { node: e6, name: t2, get nameSegment() {
      return o2();
    }, selectionSegment: fe(e6.$cstNode), type: e6.$type, documentUri: r2.uri, path: i2 };
  }
}, dM = class {
  constructor(e6) {
    this.nodeLocator = e6.workspace.AstNodeLocator;
  }
  async createDescriptions(e6, t2 = X.CancellationToken.None) {
    let n2 = [], r2 = e6.parseResult.value;
    for (let e7 of kn(r2)) await Z(t2), jn(e7).filter((e8) => !_(e8)).forEach((e8) => {
      let t3 = this.createDescription(e8);
      t3 && n2.push(t3);
    });
    return n2;
  }
  createDescription(e6) {
    let t2 = e6.reference.$nodeDescription, n2 = e6.reference.$refNode;
    if (!t2 || !n2) return;
    let r2 = Tn(e6.container).uri;
    return { sourceUri: r2, sourcePath: this.nodeLocator.getAstNodePath(e6.container), targetUri: t2.documentUri, targetPath: t2.path, segment: fe(n2), local: Mj.equals(t2.documentUri, r2) };
  }
}, fM = class {
  constructor() {
    this.segmentSeparator = `/`, this.indexSeparator = `@`;
  }
  getAstNodePath(e6) {
    if (e6.$container) {
      let t2 = this.getAstNodePath(e6.$container), n2 = this.getPathSegment(e6);
      return t2 + this.segmentSeparator + n2;
    }
    return ``;
  }
  getPathSegment({ $containerProperty: e6, $containerIndex: t2 }) {
    if (!e6) throw Error(`Missing '$containerProperty' in AST node.`);
    return t2 === void 0 ? e6 : e6 + this.indexSeparator + t2;
  }
  getAstNode(e6, t2) {
    return t2.split(this.segmentSeparator).reduce((e7, t3) => {
      var _a3;
      if (!e7 || t3.length === 0) return e7;
      let n2 = t3.indexOf(this.indexSeparator);
      if (n2 > 0) {
        let r2 = t3.substring(0, n2), i2 = parseInt(t3.substring(n2 + 1));
        return (_a3 = e7[r2]) == null ? void 0 : _a3[i2];
      }
      return e7[t3];
    }, e6);
  }
}, pM = {};
n(pM, e(fj(), 1));
var mM = class {
  constructor(e6) {
    this._ready = new xj(), this.settings = {}, this.workspaceConfig = false, this.onConfigurationSectionUpdateEmitter = new pM.Emitter(), this.serviceRegistry = e6.ServiceRegistry;
  }
  get ready() {
    return this._ready.promise;
  }
  initialize(e6) {
    var _a3;
    this.workspaceConfig = ((_a3 = e6.capabilities.workspace) == null ? void 0 : _a3.configuration) ?? false;
  }
  async initialized(e6) {
    if (this.workspaceConfig) {
      if (e6.register) {
        let t2 = this.serviceRegistry.all;
        e6.register({ section: t2.map((e7) => this.toSectionName(e7.LanguageMetaData.languageId)) });
      }
      if (e6.fetchConfiguration) {
        let t2 = this.serviceRegistry.all.map((e7) => ({ section: this.toSectionName(e7.LanguageMetaData.languageId) })), n2 = await e6.fetchConfiguration(t2);
        t2.forEach((e7, t3) => {
          this.updateSectionConfiguration(e7.section, n2[t3]);
        });
      }
    }
    this._ready.resolve();
  }
  updateConfiguration(e6) {
    e6.settings && Object.keys(e6.settings).forEach((t2) => {
      let n2 = e6.settings[t2];
      this.updateSectionConfiguration(t2, n2), this.onConfigurationSectionUpdateEmitter.fire({ section: t2, configuration: n2 });
    });
  }
  updateSectionConfiguration(e6, t2) {
    this.settings[e6] = t2;
  }
  async getConfiguration(e6, t2) {
    await this.ready;
    let n2 = this.toSectionName(e6);
    if (this.settings[n2]) return this.settings[n2][t2];
  }
  toSectionName(e6) {
    return `${e6}`;
  }
  get onConfigurationSectionUpdate() {
    return this.onConfigurationSectionUpdateEmitter.event;
  }
}, hM;
(function(e6) {
  function t2(e7) {
    return { dispose: async () => await e7() };
  }
  e6.create = t2;
})(hM || (hM = {}));
var gM = class {
  constructor(e6) {
    this.updateBuildOptions = { validation: { categories: [`built-in`, `fast`] } }, this.updateListeners = [], this.buildPhaseListeners = new Bj(), this.documentPhaseListeners = new Bj(), this.buildState = /* @__PURE__ */ new Map(), this.documentBuildWaiters = /* @__PURE__ */ new Map(), this.currentState = Q.Changed, this.langiumDocuments = e6.workspace.LangiumDocuments, this.langiumDocumentFactory = e6.workspace.LangiumDocumentFactory, this.textDocuments = e6.workspace.TextDocuments, this.indexManager = e6.workspace.IndexManager, this.serviceRegistry = e6.ServiceRegistry;
  }
  async build(e6, t2 = {}, n2 = X.CancellationToken.None) {
    var _a3;
    for (let n3 of e6) {
      let e7 = n3.uri.toString();
      if (n3.state === Q.Validated) {
        if (typeof t2.validation == `boolean` && t2.validation) n3.state = Q.IndexedReferences, n3.diagnostics = void 0, this.buildState.delete(e7);
        else if (typeof t2.validation == `object`) {
          let r2 = this.buildState.get(e7), i2 = (_a3 = r2 == null ? void 0 : r2.result) == null ? void 0 : _a3.validationChecks;
          if (i2) {
            let a2 = (t2.validation.categories ?? rM.all).filter((e8) => !i2.includes(e8));
            a2.length > 0 && (this.buildState.set(e7, { completed: false, options: { validation: Object.assign(Object.assign({}, t2.validation), { categories: a2 }) }, result: r2.result }), n3.state = Q.IndexedReferences);
          }
        }
      } else this.buildState.delete(e7);
    }
    this.currentState = Q.Changed, await this.emitUpdate(e6.map((e7) => e7.uri), []), await this.buildDocuments(e6, t2, n2);
  }
  async update(e6, t2, n2 = X.CancellationToken.None) {
    this.currentState = Q.Changed;
    for (let e7 of t2) this.langiumDocuments.deleteDocument(e7), this.buildState.delete(e7.toString()), this.indexManager.remove(e7);
    for (let t3 of e6) {
      if (!this.langiumDocuments.invalidateDocument(t3)) {
        let e7 = this.langiumDocumentFactory.fromModel({ $type: `INVALID` }, t3);
        e7.state = Q.Changed, this.langiumDocuments.addDocument(e7);
      }
      this.buildState.delete(t3.toString());
    }
    let r2 = S(e6).concat(t2).map((e7) => e7.toString()).toSet();
    this.langiumDocuments.all.filter((e7) => !r2.has(e7.uri.toString()) && this.shouldRelink(e7, r2)).forEach((e7) => {
      this.serviceRegistry.getServices(e7.uri).references.Linker.unlink(e7), e7.state = Math.min(e7.state, Q.ComputedScopes), e7.diagnostics = void 0;
    }), await this.emitUpdate(e6, t2), await Z(n2);
    let i2 = this.sortDocuments(this.langiumDocuments.all.filter((e7) => {
      var _a3;
      return e7.state < Q.Linked || !((_a3 = this.buildState.get(e7.uri.toString())) == null ? void 0 : _a3.completed);
    }).toArray());
    await this.buildDocuments(i2, this.updateBuildOptions, n2);
  }
  async emitUpdate(e6, t2) {
    await Promise.all(this.updateListeners.map((n2) => n2(e6, t2)));
  }
  sortDocuments(e6) {
    let t2 = 0, n2 = e6.length - 1;
    for (; t2 < n2; ) {
      for (; t2 < e6.length && this.hasTextDocument(e6[t2]); ) t2++;
      for (; n2 >= 0 && !this.hasTextDocument(e6[n2]); ) n2--;
      t2 < n2 && ([e6[t2], e6[n2]] = [e6[n2], e6[t2]]);
    }
    return e6;
  }
  hasTextDocument(e6) {
    var _a3;
    return !!((_a3 = this.textDocuments) == null ? void 0 : _a3.get(e6.uri));
  }
  shouldRelink(e6, t2) {
    return e6.references.some((e7) => e7.error !== void 0) ? true : this.indexManager.isAffected(e6, t2);
  }
  onUpdate(e6) {
    return this.updateListeners.push(e6), hM.create(() => {
      let t2 = this.updateListeners.indexOf(e6);
      t2 >= 0 && this.updateListeners.splice(t2, 1);
    });
  }
  async buildDocuments(e6, t2, n2) {
    this.prepareBuild(e6, t2), await this.runCancelable(e6, Q.Parsed, n2, (e7) => this.langiumDocumentFactory.update(e7, n2)), await this.runCancelable(e6, Q.IndexedContent, n2, (e7) => this.indexManager.updateContent(e7, n2)), await this.runCancelable(e6, Q.ComputedScopes, n2, async (e7) => {
      e7.precomputedScopes = await this.serviceRegistry.getServices(e7.uri).references.ScopeComputation.computeLocalScopes(e7, n2);
    }), await this.runCancelable(e6, Q.Linked, n2, (e7) => this.serviceRegistry.getServices(e7.uri).references.Linker.link(e7, n2)), await this.runCancelable(e6, Q.IndexedReferences, n2, (e7) => this.indexManager.updateReferences(e7, n2));
    let r2 = e6.filter((e7) => this.shouldValidate(e7));
    await this.runCancelable(r2, Q.Validated, n2, (e7) => this.validate(e7, n2));
    for (let t3 of e6) {
      let e7 = this.buildState.get(t3.uri.toString());
      e7 && (e7.completed = true);
    }
  }
  prepareBuild(e6, t2) {
    for (let n2 of e6) {
      let e7 = n2.uri.toString(), r2 = this.buildState.get(e7);
      (!r2 || r2.completed) && this.buildState.set(e7, { completed: false, options: t2, result: r2 == null ? void 0 : r2.result });
    }
  }
  async runCancelable(e6, t2, n2, r2) {
    let i2 = e6.filter((e7) => e7.state < t2);
    for (let e7 of i2) await Z(n2), await r2(e7), e7.state = t2, await this.notifyDocumentPhase(e7, t2, n2);
    let a2 = e6.filter((e7) => e7.state === t2);
    await this.notifyBuildPhase(a2, t2, n2), this.currentState = t2;
  }
  onBuildPhase(e6, t2) {
    return this.buildPhaseListeners.add(e6, t2), hM.create(() => {
      this.buildPhaseListeners.delete(e6, t2);
    });
  }
  onDocumentPhase(e6, t2) {
    return this.documentPhaseListeners.add(e6, t2), hM.create(() => {
      this.documentPhaseListeners.delete(e6, t2);
    });
  }
  waitUntil(e6, t2, n2) {
    let r2;
    if (t2 && `path` in t2 ? r2 = t2 : n2 = t2, n2 ?? (n2 = X.CancellationToken.None), r2) {
      let t3 = this.langiumDocuments.getDocument(r2);
      if (t3 && t3.state > e6) return Promise.resolve(r2);
    }
    return this.currentState >= e6 ? Promise.resolve(void 0) : n2.isCancellationRequested ? Promise.reject(yj) : new Promise((t3, i2) => {
      let a2 = this.onBuildPhase(e6, () => {
        var _a3;
        a2.dispose(), o2.dispose(), t3(r2 ? (_a3 = this.langiumDocuments.getDocument(r2)) == null ? void 0 : _a3.uri : void 0);
      }), o2 = n2.onCancellationRequested(() => {
        a2.dispose(), o2.dispose(), i2(yj);
      });
    });
  }
  async notifyDocumentPhase(e6, t2, n2) {
    let r2 = this.documentPhaseListeners.get(t2).slice();
    for (let t3 of r2) try {
      await t3(e6, n2);
    } catch (e7) {
      if (!bj(e7)) throw e7;
    }
  }
  async notifyBuildPhase(e6, t2, n2) {
    if (e6.length === 0) return;
    let r2 = this.buildPhaseListeners.get(t2).slice();
    for (let t3 of r2) await Z(n2), await t3(e6, n2);
  }
  shouldValidate(e6) {
    return !!this.getBuildOptions(e6).validation;
  }
  async validate(e6, t2) {
    let n2 = this.serviceRegistry.getServices(e6.uri).validation.DocumentValidator, r2 = this.getBuildOptions(e6).validation, i2 = typeof r2 == `object` ? r2 : void 0, a2 = await n2.validateDocument(e6, i2, t2);
    e6.diagnostics ? e6.diagnostics.push(...a2) : e6.diagnostics = a2;
    let o2 = this.buildState.get(e6.uri.toString());
    if (o2) {
      o2.result ?? (o2.result = {});
      let e7 = (i2 == null ? void 0 : i2.categories) ?? rM.all;
      o2.result.validationChecks ? o2.result.validationChecks.push(...e7) : o2.result.validationChecks = [...e7];
    }
  }
  getBuildOptions(e6) {
    var _a3;
    return ((_a3 = this.buildState.get(e6.uri.toString())) == null ? void 0 : _a3.options) ?? {};
  }
}, _M = class {
  constructor(e6) {
    this.symbolIndex = /* @__PURE__ */ new Map(), this.symbolByTypeIndex = new Jj(), this.referenceIndex = /* @__PURE__ */ new Map(), this.documents = e6.workspace.LangiumDocuments, this.serviceRegistry = e6.ServiceRegistry, this.astReflection = e6.AstReflection;
  }
  findAllReferences(e6, t2) {
    let n2 = Tn(e6).uri, r2 = [];
    return this.referenceIndex.forEach((e7) => {
      e7.forEach((e8) => {
        Mj.equals(e8.targetUri, n2) && e8.targetPath === t2 && r2.push(e8);
      });
    }), S(r2);
  }
  allElements(e6, t2) {
    let n2 = S(this.symbolIndex.keys());
    return t2 && (n2 = n2.filter((e7) => !t2 || t2.has(e7))), n2.map((t3) => this.getFileDescriptions(t3, e6)).flat();
  }
  getFileDescriptions(e6, t2) {
    return t2 ? this.symbolByTypeIndex.get(e6, t2, () => (this.symbolIndex.get(e6) ?? []).filter((e7) => this.astReflection.isSubtype(e7.type, t2))) : this.symbolIndex.get(e6) ?? [];
  }
  remove(e6) {
    let t2 = e6.toString();
    this.symbolIndex.delete(t2), this.symbolByTypeIndex.clear(t2), this.referenceIndex.delete(t2);
  }
  async updateContent(e6, t2 = X.CancellationToken.None) {
    let n2 = await this.serviceRegistry.getServices(e6.uri).references.ScopeComputation.computeExports(e6, t2), r2 = e6.uri.toString();
    this.symbolIndex.set(r2, n2), this.symbolByTypeIndex.clear(r2);
  }
  async updateReferences(e6, t2 = X.CancellationToken.None) {
    let n2 = await this.serviceRegistry.getServices(e6.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e6, t2);
    this.referenceIndex.set(e6.uri.toString(), n2);
  }
  isAffected(e6, t2) {
    let n2 = this.referenceIndex.get(e6.uri.toString());
    return n2 ? n2.some((e7) => !e7.local && t2.has(e7.targetUri.toString())) : false;
  }
}, vM = class {
  constructor(e6) {
    this.initialBuildOptions = {}, this._ready = new xj(), this.serviceRegistry = e6.ServiceRegistry, this.langiumDocuments = e6.workspace.LangiumDocuments, this.documentBuilder = e6.workspace.DocumentBuilder, this.fileSystemProvider = e6.workspace.FileSystemProvider, this.mutex = e6.workspace.WorkspaceLock;
  }
  get ready() {
    return this._ready.promise;
  }
  get workspaceFolders() {
    return this.folders;
  }
  initialize(e6) {
    this.folders = e6.workspaceFolders ?? void 0;
  }
  initialized(e6) {
    return this.mutex.write((e7) => this.initializeWorkspace(this.folders ?? [], e7));
  }
  async initializeWorkspace(e6, t2 = X.CancellationToken.None) {
    let n2 = await this.performStartup(e6);
    await Z(t2), await this.documentBuilder.build(n2, this.initialBuildOptions, t2);
  }
  async performStartup(e6) {
    let t2 = this.serviceRegistry.all.flatMap((e7) => e7.LanguageMetaData.fileExtensions), n2 = [], r2 = (e7) => {
      n2.push(e7), this.langiumDocuments.hasDocument(e7.uri) || this.langiumDocuments.addDocument(e7);
    };
    return await this.loadAdditionalDocuments(e6, r2), await Promise.all(e6.map((e7) => [e7, this.getRootFolder(e7)]).map(async (e7) => this.traverseFolder(...e7, t2, r2))), this._ready.resolve(), n2;
  }
  loadAdditionalDocuments(e6, t2) {
    return Promise.resolve();
  }
  getRootFolder(e6) {
    return Aj.parse(e6.uri);
  }
  async traverseFolder(e6, t2, n2, r2) {
    let i2 = await this.fileSystemProvider.readDirectory(t2);
    await Promise.all(i2.map(async (t3) => {
      this.includeEntry(e6, t3, n2) && (t3.isDirectory ? await this.traverseFolder(e6, t3.uri, n2, r2) : t3.isFile && r2(await this.langiumDocuments.getOrCreateDocument(t3.uri)));
    }));
  }
  includeEntry(e6, t2, n2) {
    let r2 = Mj.basename(t2.uri);
    if (r2.startsWith(`.`)) return false;
    if (t2.isDirectory) return r2 !== `node_modules` && r2 !== `out`;
    if (t2.isFile) {
      let e7 = Mj.extname(t2.uri);
      return n2.includes(e7);
    }
    return false;
  }
}, yM = class {
  buildUnexpectedCharactersMessage(e6, t2, n2, r2, i2) {
    return xT.buildUnexpectedCharactersMessage(e6, t2, n2, r2, i2);
  }
  buildUnableToPopLexerModeMessage(e6) {
    return xT.buildUnableToPopLexerModeMessage(e6);
  }
};
const bM = { mode: `full` };
var xM = class {
  constructor(e6) {
    this.errorMessageProvider = e6.parser.LexerErrorMessageProvider, this.tokenBuilder = e6.parser.TokenBuilder;
    let t2 = this.tokenBuilder.buildTokens(e6.Grammar, { caseInsensitive: e6.LanguageMetaData.caseInsensitive });
    this.tokenTypes = this.toTokenTypeDictionary(t2), this.chevrotainLexer = new U(wM(t2) ? Object.values(t2) : t2, { positionTracking: `full`, skipValidations: e6.LanguageMetaData.mode === `production`, errorMessageProvider: this.errorMessageProvider });
  }
  get definition() {
    return this.tokenTypes;
  }
  tokenize(e6, t2 = bM) {
    var _a3;
    var n2;
    let r2 = this.chevrotainLexer.tokenize(e6);
    return { tokens: r2.tokens, errors: r2.errors, hidden: r2.groups.hidden ?? [], report: (_a3 = (n2 = this.tokenBuilder).flushLexingReport) == null ? void 0 : _a3.call(n2, e6) };
  }
  toTokenTypeDictionary(e6) {
    if (wM(e6)) return e6;
    let t2 = CM(e6) ? Object.values(e6.modes).flat() : e6, n2 = {};
    return t2.forEach((e7) => n2[e7.name] = e7), n2;
  }
};
function SM(e6) {
  return Array.isArray(e6) && (e6.length === 0 || `name` in e6[0]);
}
function CM(e6) {
  return e6 && `modes` in e6 && `defaultMode` in e6;
}
function wM(e6) {
  return !SM(e6) && !CM(e6);
}
function TM(e6, t2, n2) {
  let r2, i2;
  typeof e6 == `string` ? (i2 = t2, r2 = n2) : (i2 = e6.range.start, r2 = t2), i2 || (i2 = q.create(0, 0));
  let a2 = DM(e6), o2 = UM(r2);
  return IM({ index: 0, tokens: AM({ lines: a2, position: i2, options: o2 }), position: i2 });
}
function EM(e6, t2) {
  let n2 = UM(t2), r2 = DM(e6);
  if (r2.length === 0) return false;
  let i2 = r2[0], a2 = r2[r2.length - 1], o2 = n2.start, s2 = n2.end;
  return !!(o2 == null ? void 0 : o2.exec(i2)) && !!(s2 == null ? void 0 : s2.exec(a2));
}
function DM(e6) {
  let t2 = ``;
  return t2 = typeof e6 == `string` ? e6 : e6.text, t2.split(Xn);
}
var OM = /\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy, kM = /\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;
function AM(e6) {
  var _a3, _b3, _c3;
  let t2 = [], n2 = e6.position.line, r2 = e6.position.character;
  for (let i2 = 0; i2 < e6.lines.length; i2++) {
    let a2 = i2 === 0, o2 = i2 === e6.lines.length - 1, s2 = e6.lines[i2], c2 = 0;
    if (a2 && e6.options.start) {
      let t3 = (_a3 = e6.options.start) == null ? void 0 : _a3.exec(s2);
      t3 && (c2 = t3.index + t3[0].length);
    } else {
      let t3 = (_b3 = e6.options.line) == null ? void 0 : _b3.exec(s2);
      t3 && (c2 = t3.index + t3[0].length);
    }
    if (o2) {
      let t3 = (_c3 = e6.options.end) == null ? void 0 : _c3.exec(s2);
      t3 && (s2 = s2.substring(0, t3.index));
    }
    if (s2 = s2.substring(0, FM(s2)), PM(s2, c2) >= s2.length) {
      if (t2.length > 0) {
        let e7 = q.create(n2, r2);
        t2.push({ type: `break`, content: ``, range: J.create(e7, e7) });
      }
    } else {
      OM.lastIndex = c2;
      let e7 = OM.exec(s2);
      if (e7) {
        let i3 = e7[0], a3 = e7[1], o3 = q.create(n2, r2 + c2), l2 = q.create(n2, r2 + c2 + i3.length);
        t2.push({ type: `tag`, content: a3, range: J.create(o3, l2) }), c2 += i3.length, c2 = PM(s2, c2);
      }
      if (c2 < s2.length) {
        let e8 = s2.substring(c2), i3 = Array.from(e8.matchAll(kM));
        t2.push(...jM(i3, e8, n2, r2 + c2));
      }
    }
    n2++, r2 = 0;
  }
  return t2.length > 0 && t2[t2.length - 1].type === `break` ? t2.slice(0, -1) : t2;
}
function jM(e6, t2, n2, r2) {
  let i2 = [];
  if (e6.length === 0) {
    let e7 = q.create(n2, r2), a2 = q.create(n2, r2 + t2.length);
    i2.push({ type: `text`, content: t2, range: J.create(e7, a2) });
  } else {
    let a2 = 0;
    for (let o3 of e6) {
      let e7 = o3.index, s2 = t2.substring(a2, e7);
      s2.length > 0 && i2.push({ type: `text`, content: t2.substring(a2, e7), range: J.create(q.create(n2, a2 + r2), q.create(n2, e7 + r2)) });
      let c2 = s2.length + 1, l2 = o3[1];
      if (i2.push({ type: `inline-tag`, content: l2, range: J.create(q.create(n2, a2 + c2 + r2), q.create(n2, a2 + c2 + l2.length + r2)) }), c2 += l2.length, o3.length === 4) {
        c2 += o3[2].length;
        let e8 = o3[3];
        i2.push({ type: `text`, content: e8, range: J.create(q.create(n2, a2 + c2 + r2), q.create(n2, a2 + c2 + e8.length + r2)) });
      } else i2.push({ type: `text`, content: ``, range: J.create(q.create(n2, a2 + c2 + r2), q.create(n2, a2 + c2 + r2)) });
      a2 = e7 + o3[0].length;
    }
    let o2 = t2.substring(a2);
    o2.length > 0 && i2.push({ type: `text`, content: o2, range: J.create(q.create(n2, a2 + r2), q.create(n2, a2 + r2 + o2.length)) });
  }
  return i2;
}
var MM = /\S/, NM = /\s*$/;
function PM(e6, t2) {
  let n2 = e6.substring(t2).match(MM);
  return n2 ? t2 + n2.index : e6.length;
}
function FM(e6) {
  let t2 = e6.match(NM);
  if (t2 && typeof t2.index == `number`) return t2.index;
}
function IM(e6) {
  var _a3, _b3;
  let t2 = q.create(e6.position.line, e6.position.character);
  if (e6.tokens.length === 0) return new GM([], J.create(t2, t2));
  let n2 = [];
  for (; e6.index < e6.tokens.length; ) {
    let t3 = LM(e6, n2[n2.length - 1]);
    t3 && n2.push(t3);
  }
  let r2 = ((_a3 = n2[0]) == null ? void 0 : _a3.range.start) ?? t2, i2 = ((_b3 = n2[n2.length - 1]) == null ? void 0 : _b3.range.end) ?? t2;
  return new GM(n2, J.create(r2, i2));
}
function LM(e6, t2) {
  let n2 = e6.tokens[e6.index];
  if (n2.type === `tag`) return VM(e6, false);
  if (n2.type === `text` || n2.type === `inline-tag`) return zM(e6);
  RM(n2, t2), e6.index++;
}
function RM(e6, t2) {
  if (t2) {
    let n2 = new XM(``, e6.range);
    `inlines` in t2 ? t2.inlines.push(n2) : t2.content.inlines.push(n2);
  }
}
function zM(e6) {
  let t2 = e6.tokens[e6.index], n2 = t2, r2 = t2, i2 = [];
  for (; t2 && t2.type !== `break` && t2.type !== `tag`; ) i2.push(BM(e6)), r2 = t2, t2 = e6.tokens[e6.index];
  return new YM(i2, J.create(n2.range.start, r2.range.end));
}
function BM(e6) {
  return e6.tokens[e6.index].type === `inline-tag` ? VM(e6, true) : HM(e6);
}
function VM(e6, t2) {
  var _a3;
  let n2 = e6.tokens[e6.index++], r2 = n2.content.substring(1);
  if (((_a3 = e6.tokens[e6.index]) == null ? void 0 : _a3.type) === `text`) if (t2) {
    let i2 = HM(e6);
    return new KM(r2, new YM([i2], i2.range), t2, J.create(n2.range.start, i2.range.end));
  } else {
    let i2 = zM(e6);
    return new KM(r2, i2, t2, J.create(n2.range.start, i2.range.end));
  }
  else {
    let e7 = n2.range;
    return new KM(r2, new YM([], e7), t2, e7);
  }
}
function HM(e6) {
  let t2 = e6.tokens[e6.index++];
  return new XM(t2.content, t2.range);
}
function UM(e6) {
  if (!e6) return UM({ start: `/**`, end: `*/`, line: `*` });
  let { start: t2, end: n2, line: r2 } = e6;
  return { start: WM(t2, true), end: WM(n2, false), line: WM(r2, true) };
}
function WM(e6, t2) {
  if (typeof e6 == `string` || typeof e6 == `object`) {
    let n2 = typeof e6 == `string` ? rr(e6) : e6.source;
    return t2 ? RegExp(`^\\s*${n2}`) : RegExp(`\\s*${n2}\\s*$`);
  } else return e6;
}
var GM = class {
  constructor(e6, t2) {
    this.elements = e6, this.range = t2;
  }
  getTag(e6) {
    return this.getAllTags().find((t2) => t2.name === e6);
  }
  getTags(e6) {
    return this.getAllTags().filter((t2) => t2.name === e6);
  }
  getAllTags() {
    return this.elements.filter((e6) => `name` in e6);
  }
  toString() {
    let e6 = ``;
    for (let t2 of this.elements) if (e6.length === 0) e6 = t2.toString();
    else {
      let n2 = t2.toString();
      e6 += ZM(e6) + n2;
    }
    return e6.trim();
  }
  toMarkdown(e6) {
    let t2 = ``;
    for (let n2 of this.elements) if (t2.length === 0) t2 = n2.toMarkdown(e6);
    else {
      let r2 = n2.toMarkdown(e6);
      t2 += ZM(t2) + r2;
    }
    return t2.trim();
  }
}, KM = class {
  constructor(e6, t2, n2, r2) {
    this.name = e6, this.content = t2, this.inline = n2, this.range = r2;
  }
  toString() {
    let e6 = `@${this.name}`, t2 = this.content.toString();
    return this.content.inlines.length === 1 ? e6 = `${e6} ${t2}` : this.content.inlines.length > 1 && (e6 = `${e6}
${t2}`), this.inline ? `{${e6}}` : e6;
  }
  toMarkdown(e6) {
    var _a3;
    return ((_a3 = e6 == null ? void 0 : e6.renderTag) == null ? void 0 : _a3.call(e6, this)) ?? this.toMarkdownDefault(e6);
  }
  toMarkdownDefault(e6) {
    let t2 = this.content.toMarkdown(e6);
    if (this.inline) {
      let n3 = qM(this.name, t2, e6 ?? {});
      if (typeof n3 == `string`) return n3;
    }
    let n2 = ``;
    (e6 == null ? void 0 : e6.tag) === `italic` || (e6 == null ? void 0 : e6.tag) === void 0 ? n2 = `*` : (e6 == null ? void 0 : e6.tag) === `bold` ? n2 = `**` : (e6 == null ? void 0 : e6.tag) === `bold-italic` && (n2 = `***`);
    let r2 = `${n2}@${this.name}${n2}`;
    return this.content.inlines.length === 1 ? r2 = `${r2} \u2014 ${t2}` : this.content.inlines.length > 1 && (r2 = `${r2}
${t2}`), this.inline ? `{${r2}}` : r2;
  }
};
function qM(e6, t2, n2) {
  var _a3;
  if (e6 === `linkplain` || e6 === `linkcode` || e6 === `link`) {
    let r2 = t2.indexOf(` `), i2 = t2;
    if (r2 > 0) {
      let e7 = PM(t2, r2);
      i2 = t2.substring(e7), t2 = t2.substring(0, r2);
    }
    return (e6 === `linkcode` || e6 === `link` && n2.link === `code`) && (i2 = `\`${i2}\``), ((_a3 = n2.renderLink) == null ? void 0 : _a3.call(n2, t2, i2)) ?? JM(t2, i2);
  }
}
function JM(e6, t2) {
  try {
    return Aj.parse(e6, true), `[${t2}](${e6})`;
  } catch {
    return e6;
  }
}
var YM = class {
  constructor(e6, t2) {
    this.inlines = e6, this.range = t2;
  }
  toString() {
    let e6 = ``;
    for (let t2 = 0; t2 < this.inlines.length; t2++) {
      let n2 = this.inlines[t2], r2 = this.inlines[t2 + 1];
      e6 += n2.toString(), r2 && r2.range.start.line > n2.range.start.line && (e6 += `
`);
    }
    return e6;
  }
  toMarkdown(e6) {
    let t2 = ``;
    for (let n2 = 0; n2 < this.inlines.length; n2++) {
      let r2 = this.inlines[n2], i2 = this.inlines[n2 + 1];
      t2 += r2.toMarkdown(e6), i2 && i2.range.start.line > r2.range.start.line && (t2 += `
`);
    }
    return t2;
  }
}, XM = class {
  constructor(e6, t2) {
    this.text = e6, this.range = t2;
  }
  toString() {
    return this.text;
  }
  toMarkdown() {
    return this.text;
  }
};
function ZM(e6) {
  return e6.endsWith(`
`) ? `
` : `

`;
}
var QM = class {
  constructor(e6) {
    this.indexManager = e6.shared.workspace.IndexManager, this.commentProvider = e6.documentation.CommentProvider;
  }
  getDocumentation(e6) {
    let t2 = this.commentProvider.getComment(e6);
    if (t2 && EM(t2)) return TM(t2).toMarkdown({ renderLink: (t3, n2) => this.documentationLinkRenderer(e6, t3, n2), renderTag: (t3) => this.documentationTagRenderer(e6, t3) });
  }
  documentationLinkRenderer(e6, t2, n2) {
    let r2 = this.findNameInPrecomputedScopes(e6, t2) ?? this.findNameInGlobalScope(e6, t2);
    if (r2 && r2.nameSegment) {
      let e7 = r2.nameSegment.range.start.line + 1, t3 = r2.nameSegment.range.start.character + 1;
      return `[${n2}](${r2.documentUri.with({ fragment: `L${e7},${t3}` }).toString()})`;
    } else return;
  }
  documentationTagRenderer(e6, t2) {
  }
  findNameInPrecomputedScopes(e6, t2) {
    let n2 = Tn(e6).precomputedScopes;
    if (!n2) return;
    let r2 = e6;
    do {
      let e7 = n2.get(r2).find((e8) => e8.name === t2);
      if (e7) return e7;
      r2 = r2.$container;
    } while (r2);
  }
  findNameInGlobalScope(e6, t2) {
    return this.indexManager.allElements().find((e7) => e7.name === t2);
  }
}, $M = class {
  constructor(e6) {
    this.grammarConfig = () => e6.parser.GrammarConfig;
  }
  getComment(e6) {
    var _a3;
    return Qj(e6) ? e6.$comment : (_a3 = ve(e6.$cstNode, this.grammarConfig().multilineCommentRules)) == null ? void 0 : _a3.text;
  }
}, eN = class {
  constructor(e6) {
    this.syncParser = e6.parser.LangiumParser;
  }
  parse(e6, t2) {
    return Promise.resolve(this.syncParser.parse(e6));
  }
}, tN = class {
  constructor(e6) {
    this.threadCount = 8, this.terminationDelay = 200, this.workerPool = [], this.queue = [], this.hydrator = e6.serializer.Hydrator;
  }
  initializeWorkers() {
    for (; this.workerPool.length < this.threadCount; ) {
      let e6 = this.createWorker();
      e6.onReady(() => {
        if (this.queue.length > 0) {
          let t2 = this.queue.shift();
          t2 && (e6.lock(), t2.resolve(e6));
        }
      }), this.workerPool.push(e6);
    }
  }
  async parse(e6, t2) {
    let n2 = await this.acquireParserWorker(t2), r2 = new xj(), i2, a2 = t2.onCancellationRequested(() => {
      i2 = setTimeout(() => {
        this.terminateWorker(n2);
      }, this.terminationDelay);
    });
    return n2.parse(e6).then((e7) => {
      let t3 = this.hydrator.hydrate(e7);
      r2.resolve(t3);
    }).catch((e7) => {
      r2.reject(e7);
    }).finally(() => {
      a2.dispose(), clearTimeout(i2);
    }), r2.promise;
  }
  terminateWorker(e6) {
    e6.terminate();
    let t2 = this.workerPool.indexOf(e6);
    t2 >= 0 && this.workerPool.splice(t2, 1);
  }
  async acquireParserWorker(e6) {
    this.initializeWorkers();
    for (let e7 of this.workerPool) if (e7.ready) return e7.lock(), e7;
    let t2 = new xj();
    return e6.onCancellationRequested(() => {
      let e7 = this.queue.indexOf(t2);
      e7 >= 0 && this.queue.splice(e7, 1), t2.reject(yj);
    }), this.queue.push(t2), t2.promise;
  }
}, nN = class {
  get ready() {
    return this._ready;
  }
  get onReady() {
    return this.onReadyEmitter.event;
  }
  constructor(e6, t2, n2, r2) {
    this.onReadyEmitter = new pM.Emitter(), this.deferred = new xj(), this._ready = true, this._parsing = false, this.sendMessage = e6, this._terminate = r2, t2((e7) => {
      let t3 = e7;
      this.deferred.resolve(t3), this.unlock();
    }), n2((e7) => {
      this.deferred.reject(e7), this.unlock();
    });
  }
  terminate() {
    this.deferred.reject(yj), this._terminate();
  }
  lock() {
    this._ready = false;
  }
  unlock() {
    this._parsing = false, this._ready = true, this.onReadyEmitter.fire();
  }
  parse(e6) {
    if (this._parsing) throw Error(`Parser worker is busy`);
    return this._parsing = true, this.deferred = new xj(), this.sendMessage(e6), this.deferred.promise;
  }
}, rN = class {
  constructor() {
    this.previousTokenSource = new X.CancellationTokenSource(), this.writeQueue = [], this.readQueue = [], this.done = true;
  }
  write(e6) {
    this.cancelWrite();
    let t2 = _j();
    return this.previousTokenSource = t2, this.enqueue(this.writeQueue, e6, t2.token);
  }
  read(e6) {
    return this.enqueue(this.readQueue, e6);
  }
  enqueue(e6, t2, n2 = X.CancellationToken.None) {
    let r2 = new xj(), i2 = { action: t2, deferred: r2, cancellationToken: n2 };
    return e6.push(i2), this.performNextOperation(), r2.promise;
  }
  async performNextOperation() {
    if (!this.done) return;
    let e6 = [];
    if (this.writeQueue.length > 0) e6.push(this.writeQueue.shift());
    else if (this.readQueue.length > 0) e6.push(...this.readQueue.splice(0, this.readQueue.length));
    else return;
    this.done = false, await Promise.all(e6.map(async ({ action: e7, deferred: t2, cancellationToken: n2 }) => {
      try {
        let r2 = await Promise.resolve().then(() => e7(n2));
        t2.resolve(r2);
      } catch (e8) {
        bj(e8) ? t2.resolve(void 0) : t2.reject(e8);
      }
    })), this.done = true, this.performNextOperation();
  }
  cancelWrite() {
    this.previousTokenSource.cancel();
  }
}, iN = class {
  constructor(e6) {
    this.grammarElementIdMap = new Vj(), this.tokenTypeIdMap = new Vj(), this.grammar = e6.Grammar, this.lexer = e6.parser.Lexer, this.linker = e6.references.Linker;
  }
  dehydrate(e6) {
    return { lexerErrors: e6.lexerErrors, lexerReport: e6.lexerReport ? this.dehydrateLexerReport(e6.lexerReport) : void 0, parserErrors: e6.parserErrors.map((e7) => Object.assign(Object.assign({}, e7), { message: e7.message })), value: this.dehydrateAstNode(e6.value, this.createDehyrationContext(e6.value)) };
  }
  dehydrateLexerReport(e6) {
    return e6;
  }
  createDehyrationContext(e6) {
    let t2 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Map();
    for (let n3 of kn(e6)) t2.set(n3, {});
    if (e6.$cstNode) for (let t3 of ce(e6.$cstNode)) n2.set(t3, {});
    return { astNodes: t2, cstNodes: n2 };
  }
  dehydrateAstNode(e6, t2) {
    let n2 = t2.astNodes.get(e6);
    n2.$type = e6.$type, n2.$containerIndex = e6.$containerIndex, n2.$containerProperty = e6.$containerProperty, e6.$cstNode !== void 0 && (n2.$cstNode = this.dehydrateCstNode(e6.$cstNode, t2));
    for (let [r2, i2] of Object.entries(e6)) if (!r2.startsWith(`$`)) if (Array.isArray(i2)) {
      let e7 = [];
      n2[r2] = e7;
      for (let n3 of i2) m(n3) ? e7.push(this.dehydrateAstNode(n3, t2)) : h(n3) ? e7.push(this.dehydrateReference(n3, t2)) : e7.push(n3);
    } else m(i2) ? n2[r2] = this.dehydrateAstNode(i2, t2) : h(i2) ? n2[r2] = this.dehydrateReference(i2, t2) : i2 !== void 0 && (n2[r2] = i2);
    return n2;
  }
  dehydrateReference(e6, t2) {
    let n2 = {};
    return n2.$refText = e6.$refText, e6.$refNode && (n2.$refNode = t2.cstNodes.get(e6.$refNode)), n2;
  }
  dehydrateCstNode(e6, t2) {
    let n2 = t2.cstNodes.get(e6);
    return te(e6) ? n2.fullText = e6.fullText : n2.grammarSource = this.getGrammarElementId(e6.grammarSource), n2.hidden = e6.hidden, n2.astNode = t2.astNodes.get(e6.astNode), y(e6) ? n2.content = e6.content.map((e7) => this.dehydrateCstNode(e7, t2)) : ee(e6) && (n2.tokenType = e6.tokenType.name, n2.offset = e6.offset, n2.length = e6.length, n2.startLine = e6.range.start.line, n2.startColumn = e6.range.start.character, n2.endLine = e6.range.end.line, n2.endColumn = e6.range.end.character), n2;
  }
  hydrate(e6) {
    let t2 = e6.value, n2 = this.createHydrationContext(t2);
    return `$cstNode` in t2 && this.hydrateCstNode(t2.$cstNode, n2), { lexerErrors: e6.lexerErrors, lexerReport: e6.lexerReport, parserErrors: e6.parserErrors, value: this.hydrateAstNode(t2, n2) };
  }
  createHydrationContext(e6) {
    let t2 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Map();
    for (let n3 of kn(e6)) t2.set(n3, {});
    let r2;
    if (e6.$cstNode) for (let t3 of ce(e6.$cstNode)) {
      let e7;
      `fullText` in t3 ? (e7 = new kA(t3.fullText), r2 = e7) : `content` in t3 ? e7 = new DA() : `tokenType` in t3 && (e7 = this.hydrateCstLeafNode(t3)), e7 && (n2.set(t3, e7), e7.root = r2);
    }
    return { astNodes: t2, cstNodes: n2 };
  }
  hydrateAstNode(e6, t2) {
    let n2 = t2.astNodes.get(e6);
    n2.$type = e6.$type, n2.$containerIndex = e6.$containerIndex, n2.$containerProperty = e6.$containerProperty, e6.$cstNode && (n2.$cstNode = t2.cstNodes.get(e6.$cstNode));
    for (let [r2, i2] of Object.entries(e6)) if (!r2.startsWith(`$`)) if (Array.isArray(i2)) {
      let e7 = [];
      n2[r2] = e7;
      for (let a2 of i2) m(a2) ? e7.push(this.setParent(this.hydrateAstNode(a2, t2), n2)) : h(a2) ? e7.push(this.hydrateReference(a2, n2, r2, t2)) : e7.push(a2);
    } else m(i2) ? n2[r2] = this.setParent(this.hydrateAstNode(i2, t2), n2) : h(i2) ? n2[r2] = this.hydrateReference(i2, n2, r2, t2) : i2 !== void 0 && (n2[r2] = i2);
    return n2;
  }
  setParent(e6, t2) {
    return e6.$container = t2, e6;
  }
  hydrateReference(e6, t2, n2, r2) {
    return this.linker.buildReference(t2, n2, r2.cstNodes.get(e6.$refNode), e6.$refText);
  }
  hydrateCstNode(e6, t2, n2 = 0) {
    let r2 = t2.cstNodes.get(e6);
    if (typeof e6.grammarSource == `number` && (r2.grammarSource = this.getGrammarElement(e6.grammarSource)), r2.astNode = t2.astNodes.get(e6.astNode), y(r2)) for (let i2 of e6.content) {
      let e7 = this.hydrateCstNode(i2, t2, n2++);
      r2.content.push(e7);
    }
    return r2;
  }
  hydrateCstLeafNode(e6) {
    let t2 = this.getTokenType(e6.tokenType), n2 = e6.offset, r2 = e6.length, i2 = e6.startLine, a2 = e6.startColumn, o2 = e6.endLine, s2 = e6.endColumn, c2 = e6.hidden;
    return new EA(n2, r2, { start: { line: i2, character: a2 }, end: { line: o2, character: s2 } }, t2, c2);
  }
  getTokenType(e6) {
    return this.lexer.definition[e6];
  }
  getGrammarElementId(e6) {
    if (e6) return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.get(e6);
  }
  getGrammarElement(e6) {
    return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.getKey(e6);
  }
  createGrammarElementIdMap() {
    let e6 = 0;
    for (let t2 of kn(this.grammar)) Ke(t2) && this.grammarElementIdMap.set(t2, e6++);
  }
};
function aN(e6) {
  return { documentation: { CommentProvider: (e7) => new $M(e7), DocumentationProvider: (e7) => new QM(e7) }, parser: { AsyncParser: (e7) => new eN(e7), GrammarConfig: (e7) => Kr(e7), LangiumParser: (e7) => aj(e7), CompletionParser: (e7) => ij(e7), ValueConverter: () => new cj(), TokenBuilder: () => new sj(), Lexer: (e7) => new xM(e7), ParserErrorMessageProvider: () => new LA(), LexerErrorMessageProvider: () => new yM() }, workspace: { AstNodeLocator: () => new fM(), AstNodeDescriptionProvider: (e7) => new uM(e7), ReferenceDescriptionProvider: (e7) => new dM(e7) }, references: { Linker: (e7) => new Ij(e7), NameProvider: () => new Rj(), ScopeProvider: (e7) => new Zj(e7), ScopeComputation: (e7) => new Hj(e7), References: (e7) => new zj(e7) }, serializer: { Hydrator: (e7) => new iN(e7), JsonSerializer: (e7) => new eM(e7) }, validation: { DocumentValidator: (e7) => new aM(e7), ValidationRegistry: (e7) => new iM(e7) }, shared: () => e6.shared };
}
function oN(e6) {
  return { ServiceRegistry: (e7) => new tM(e7), workspace: { LangiumDocuments: (e7) => new Pj(e7), LangiumDocumentFactory: (e7) => new Nj(e7), DocumentBuilder: (e7) => new gM(e7), IndexManager: (e7) => new _M(e7), WorkspaceManager: (e7) => new vM(e7), FileSystemProvider: (t2) => e6.fileSystemProvider(t2), WorkspaceLock: () => new rN(), ConfigurationProvider: (e7) => new mM(e7) } };
}
var sN;
(function(e6) {
  e6.merge = (e7, t2) => mN(mN({}, e7), t2);
})(sN || (sN = {}));
function cN(e6, t2, n2, r2, i2, a2, o2, s2, c2) {
  return dN([e6, t2, n2, r2, i2, a2, o2, s2, c2].reduce(mN, {}));
}
var lN = Symbol(`isProxy`);
function uN(e6) {
  if (e6 && e6[lN]) for (let t2 of Object.values(e6)) uN(t2);
  return e6;
}
function dN(e6, t2) {
  let n2 = new Proxy({}, { deleteProperty: () => false, set: () => {
    throw Error(`Cannot set property on injected service container`);
  }, get: (r2, i2) => i2 === lN ? true : pN(r2, i2, e6, t2 || n2), getOwnPropertyDescriptor: (r2, i2) => (pN(r2, i2, e6, t2 || n2), Object.getOwnPropertyDescriptor(r2, i2)), has: (t3, n3) => n3 in e6, ownKeys: () => [...Object.getOwnPropertyNames(e6)] });
  return n2;
}
var fN = Symbol();
function pN(e6, t2, n2, r2) {
  if (t2 in e6) {
    if (e6[t2] instanceof Error) throw Error(`Construction failure. Please make sure that your dependencies are constructable.`, { cause: e6[t2] });
    if (e6[t2] === fN) throw Error(`Cycle detected. Please make "` + String(t2) + `" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies`);
    return e6[t2];
  } else if (t2 in n2) {
    let i2 = n2[t2];
    e6[t2] = fN;
    try {
      e6[t2] = typeof i2 == `function` ? i2(r2) : dN(i2, r2);
    } catch (n3) {
      throw e6[t2] = n3 instanceof Error ? n3 : void 0, n3;
    }
    return e6[t2];
  } else return;
}
function mN(e6, t2) {
  if (t2) {
    for (let [n2, r2] of Object.entries(t2)) if (r2 !== void 0) {
      let t3 = e6[n2];
      t3 !== null && r2 !== null && typeof t3 == `object` && typeof r2 == `object` ? e6[n2] = mN(t3, r2) : e6[n2] = r2;
    }
  }
  return e6;
}
const hN = { indentTokenName: `INDENT`, dedentTokenName: `DEDENT`, whitespaceTokenName: `WS`, ignoreIndentationDelimiters: [] };
var gN;
(function(e6) {
  e6.REGULAR = `indentation-sensitive`, e6.IGNORE_INDENTATION = `ignore-indentation`;
})(gN || (gN = {}));
var _N = class extends sj {
  constructor(e6 = hN) {
    super(), this.indentationStack = [0], this.whitespaceRegExp = /[ \t]+/y, this.options = Object.assign(Object.assign({}, hN), e6), this.indentTokenType = PT({ name: this.options.indentTokenName, pattern: this.indentMatcher.bind(this), line_breaks: false }), this.dedentTokenType = PT({ name: this.options.dedentTokenName, pattern: this.dedentMatcher.bind(this), line_breaks: false });
  }
  buildTokens(e6, t2) {
    let n2 = super.buildTokens(e6, t2);
    if (!SM(n2)) throw Error(`Invalid tokens built by default builder`);
    let { indentTokenName: r2, dedentTokenName: i2, whitespaceTokenName: a2, ignoreIndentationDelimiters: o2 } = this.options, s2, c2, l2, u2 = [];
    for (let e7 of n2) {
      for (let [t3, n3] of o2) e7.name === t3 ? e7.PUSH_MODE = gN.IGNORE_INDENTATION : e7.name === n3 && (e7.POP_MODE = true);
      e7.name === i2 ? s2 = e7 : e7.name === r2 ? c2 = e7 : e7.name === a2 ? l2 = e7 : u2.push(e7);
    }
    if (!s2 || !c2 || !l2) throw Error(`Some indentation/whitespace tokens not found!`);
    return o2.length > 0 ? { modes: { [gN.REGULAR]: [s2, c2, ...u2, l2], [gN.IGNORE_INDENTATION]: [...u2, l2] }, defaultMode: gN.REGULAR } : [s2, c2, l2, ...u2];
  }
  flushLexingReport(e6) {
    let t2 = super.flushLexingReport(e6);
    return Object.assign(Object.assign({}, t2), { remainingDedents: this.flushRemainingDedents(e6) });
  }
  isStartOfLine(e6, t2) {
    return t2 === 0 || `\r
`.includes(e6[t2 - 1]);
  }
  matchWhitespace(e6, t2, n2, r2) {
    this.whitespaceRegExp.lastIndex = t2;
    let i2 = this.whitespaceRegExp.exec(e6);
    return { currIndentLevel: (i2 == null ? void 0 : i2[0].length) ?? 0, prevIndentLevel: this.indentationStack.at(-1), match: i2 };
  }
  createIndentationTokenInstance(e6, t2, n2, r2) {
    let i2 = this.getLineNumber(t2, r2);
    return LT(e6, n2, r2, r2 + n2.length, i2, i2, 1, n2.length);
  }
  getLineNumber(e6, t2) {
    return e6.substring(0, t2).split(/\r\n|\r|\n/).length;
  }
  indentMatcher(e6, t2, n2, r2) {
    if (!this.isStartOfLine(e6, t2)) return null;
    let { currIndentLevel: i2, prevIndentLevel: a2, match: o2 } = this.matchWhitespace(e6, t2, n2, r2);
    return i2 <= a2 ? null : (this.indentationStack.push(i2), o2);
  }
  dedentMatcher(e6, t2, n2, r2) {
    var _a3, _b3;
    if (!this.isStartOfLine(e6, t2)) return null;
    let { currIndentLevel: i2, prevIndentLevel: a2, match: o2 } = this.matchWhitespace(e6, t2, n2, r2);
    if (i2 >= a2) return null;
    let s2 = this.indentationStack.lastIndexOf(i2);
    if (s2 === -1) return this.diagnostics.push({ severity: `error`, message: `Invalid dedent level ${i2} at offset: ${t2}. Current indentation stack: ${this.indentationStack}`, offset: t2, length: ((_a3 = o2 == null ? void 0 : o2[0]) == null ? void 0 : _a3.length) ?? 0, line: this.getLineNumber(e6, t2), column: 1 }), null;
    let c2 = this.indentationStack.length - s2 - 1, l2 = ((_b3 = e6.substring(0, t2).match(/[\r\n]+$/)) == null ? void 0 : _b3[0].length) ?? 1;
    for (let r3 = 0; r3 < c2; r3++) {
      let r4 = this.createIndentationTokenInstance(this.dedentTokenType, e6, ``, t2 - (l2 - 1));
      n2.push(r4), this.indentationStack.pop();
    }
    return null;
  }
  buildTerminalToken(e6) {
    let t2 = super.buildTerminalToken(e6), { indentTokenName: n2, dedentTokenName: r2, whitespaceTokenName: i2 } = this.options;
    return t2.name === n2 ? this.indentTokenType : t2.name === r2 ? this.dedentTokenType : t2.name === i2 ? PT({ name: i2, pattern: this.whitespaceRegExp, group: U.SKIPPED }) : t2;
  }
  flushRemainingDedents(e6) {
    let t2 = [];
    for (; this.indentationStack.length > 1; ) t2.push(this.createIndentationTokenInstance(this.dedentTokenType, e6, ``, e6.length)), this.indentationStack.pop();
    return this.indentationStack = [0], t2;
  }
}, vN = class extends xM {
  constructor(e6) {
    if (super(e6), e6.parser.TokenBuilder instanceof _N) this.indentationTokenBuilder = e6.parser.TokenBuilder;
    else throw Error(`IndentationAwareLexer requires an accompanying IndentationAwareTokenBuilder`);
  }
  tokenize(e6, t2 = bM) {
    let n2 = super.tokenize(e6), r2 = n2.report;
    (t2 == null ? void 0 : t2.mode) === `full` && n2.tokens.push(...r2.remainingDedents), r2.remainingDedents = [];
    let { indentTokenType: i2, dedentTokenType: a2 } = this.indentationTokenBuilder, o2 = i2.tokenTypeIdx, s2 = a2.tokenTypeIdx, c2 = [], l2 = n2.tokens.length - 1;
    for (let e7 = 0; e7 < l2; e7++) {
      let t3 = n2.tokens[e7], r3 = n2.tokens[e7 + 1];
      if (t3.tokenTypeIdx === o2 && r3.tokenTypeIdx === s2) {
        e7++;
        continue;
      }
      c2.push(t3);
    }
    return l2 >= 0 && c2.push(n2.tokens[l2]), n2.tokens = c2, n2;
  }
}, yN = class {
  readFile() {
    throw Error(`No file system is available.`);
  }
  async readDirectory() {
    return [];
  }
};
const bN = { fileSystemProvider: () => new yN() };
var xN = { Grammar: () => void 0, LanguageMetaData: () => ({ caseInsensitive: false, fileExtensions: [`.langium`], languageId: `langium` }) }, SN = { AstReflection: () => new bn() };
function CN() {
  let e6 = cN(oN(bN), SN), t2 = cN(aN({ shared: e6 }), xN);
  return e6.ServiceRegistry.register(t2), t2;
}
function wN(e6) {
  let t2 = CN(), n2 = t2.serializer.JsonSerializer.deserialize(e6);
  return t2.shared.workspace.LangiumDocumentFactory.fromModel(n2, Aj.parse(`memory://${n2.name ?? `grammar`}.langium`)), n2;
}
var TN = t({ AstUtils: () => xn, BiMap: () => Vj, Cancellation: () => X, ContextCache: () => Jj, CstUtils: () => se, DONE_RESULT: () => x, Deferred: () => xj, Disposable: () => hM, DisposableCache: () => Kj, DocumentCache: () => Yj, EMPTY_STREAM: () => ie, ErrorWithLocation: () => ke, GrammarUtils: () => sr, MultiMap: () => Bj, OperationCancelled: () => yj, Reduction: () => oe, RegExpUtils: () => Yn, SimpleCache: () => qj, StreamImpl: () => b, TreeStreamImpl: () => ae, URI: () => Aj, UriUtils: () => Mj, WorkspaceCache: () => Xj, assertUnreachable: () => Ae, delayNextTick: () => mj, interruptAndCheck: () => Z, isOperationCancelled: () => bj, loadGrammarFromJson: () => wN, setInterruptionPeriod: () => vj, startCancelableOperation: () => _j, stream: () => S });
n(TN, pM), n(t({ AbstractAstReflection: () => v, AbstractCstNode: () => TA, AbstractLangiumParser: () => PA, AbstractParserErrorMessageProvider: () => IA, AbstractThreadedAsyncParser: () => tN, AstUtils: () => xn, BiMap: () => Vj, Cancellation: () => X, CompositeCstNodeImpl: () => DA, ContextCache: () => Jj, CstNodeBuilder: () => wA, CstUtils: () => se, DEFAULT_TOKENIZE_OPTIONS: () => bM, DONE_RESULT: () => x, DatatypeSymbol: () => AA, DefaultAstNodeDescriptionProvider: () => uM, DefaultAstNodeLocator: () => fM, DefaultAsyncParser: () => eN, DefaultCommentProvider: () => $M, DefaultConfigurationProvider: () => mM, DefaultDocumentBuilder: () => gM, DefaultDocumentValidator: () => aM, DefaultHydrator: () => iN, DefaultIndexManager: () => _M, DefaultJsonSerializer: () => eM, DefaultLangiumDocumentFactory: () => Nj, DefaultLangiumDocuments: () => Pj, DefaultLexer: () => xM, DefaultLexerErrorMessageProvider: () => yM, DefaultLinker: () => Ij, DefaultNameProvider: () => Rj, DefaultReferenceDescriptionProvider: () => dM, DefaultReferences: () => zj, DefaultScopeComputation: () => Hj, DefaultScopeProvider: () => Zj, DefaultServiceRegistry: () => tM, DefaultTokenBuilder: () => sj, DefaultValueConverter: () => cj, DefaultWorkspaceLock: () => rN, DefaultWorkspaceManager: () => vM, Deferred: () => xj, Disposable: () => hM, DisposableCache: () => Kj, DocumentCache: () => Yj, DocumentState: () => Q, DocumentValidator: () => lM, EMPTY_SCOPE: () => Gj, EMPTY_STREAM: () => ie, EmptyFileSystem: () => bN, EmptyFileSystemProvider: () => yN, ErrorWithLocation: () => ke, GrammarAST: () => je, GrammarUtils: () => sr, IndentationAwareLexer: () => vN, IndentationAwareTokenBuilder: () => _N, JSDocDocumentationProvider: () => QM, LangiumCompletionParser: () => RA, LangiumParser: () => FA, LangiumParserErrorMessageProvider: () => LA, LeafCstNodeImpl: () => EA, LexingMode: () => gN, MapScope: () => Wj, Module: () => sN, MultiMap: () => Bj, OperationCancelled: () => yj, ParserWorker: () => nN, Reduction: () => oe, RegExpUtils: () => Yn, RootCstNodeImpl: () => kA, SimpleCache: () => qj, StreamImpl: () => b, StreamScope: () => Uj, TextDocument: () => Cj, TreeStreamImpl: () => ae, URI: () => Aj, UriUtils: () => Mj, ValidationCategory: () => rM, ValidationRegistry: () => iM, ValueConverter: () => lj, WorkspaceCache: () => Xj, assertUnreachable: () => Ae, createCompletionParser: () => ij, createDefaultCoreModule: () => aN, createDefaultSharedCoreModule: () => oN, createGrammarConfig: () => Kr, createLangiumParser: () => aj, createParser: () => VA, delayNextTick: () => mj, diagnosticData: () => nM, eagerLoad: () => uN, getDiagnosticRange: () => oM, indentationBuilderDefaultOptions: () => hN, inject: () => cN, interruptAndCheck: () => Z, isAstNode: () => m, isAstNodeDescription: () => g, isAstNodeWithComment: () => Qj, isCompositeCstNode: () => y, isIMultiModeLexerDefinition: () => CM, isJSDoc: () => EM, isLeafCstNode: () => ee, isLinkingError: () => _, isNamed: () => Lj, isOperationCancelled: () => bj, isReference: () => h, isRootCstNode: () => te, isTokenTypeArray: () => SM, isTokenTypeDictionary: () => wM, loadGrammarFromJson: () => wN, parseJSDoc: () => TM, prepareLangiumParser: () => oj, setInterruptionPeriod: () => vj, startCancelableOperation: () => _j, stream: () => S, toDiagnosticData: () => cM, toDiagnosticSeverity: () => sM }), TN);
var EN = Object.defineProperty, $ = (e6, t2) => EN(e6, `name`, { value: t2, configurable: true }), DN = `Statement`, ON = `Architecture`;
function kN(e6) {
  return pP.isInstance(e6, ON);
}
$(kN, `isArchitecture`);
var AN = `Axis`, jN = `Branch`;
function MN(e6) {
  return pP.isInstance(e6, jN);
}
$(MN, `isBranch`);
var NN = `Checkout`, PN = `CherryPicking`, FN = `ClassDefStatement`, IN = `Commit`;
function LN(e6) {
  return pP.isInstance(e6, IN);
}
$(LN, `isCommit`);
var RN = `Curve`, zN = `Edge`, BN = `Entry`, VN = `GitGraph`;
function HN(e6) {
  return pP.isInstance(e6, VN);
}
$(HN, `isGitGraph`);
var UN = `Group`, WN = `Info`;
function GN(e6) {
  return pP.isInstance(e6, WN);
}
$(GN, `isInfo`);
var KN = `Item`, qN = `Junction`, JN = `Merge`;
function YN(e6) {
  return pP.isInstance(e6, JN);
}
$(YN, `isMerge`);
var XN = `Option`, ZN = `Packet`;
function QN(e6) {
  return pP.isInstance(e6, ZN);
}
$(QN, `isPacket`);
var $N = `PacketBlock`;
function eP(e6) {
  return pP.isInstance(e6, $N);
}
$(eP, `isPacketBlock`);
function tP(e6) {
  return pP.isInstance(e6, `Pie`);
}
$(tP, `isPie`);
var nP = `PieSection`;
function rP(e6) {
  return pP.isInstance(e6, nP);
}
$(rP, `isPieSection`);
var iP = `Radar`, aP = `Service`, oP = `Treemap`;
function sP(e6) {
  return pP.isInstance(e6, oP);
}
$(sP, `isTreemap`);
var cP = `TreemapRow`, lP = `Direction`, uP = `Leaf`, dP = `Section`, fP = (_a2 = class extends v {
  getAllTypes() {
    return [ON, AN, jN, NN, PN, FN, IN, RN, lP, zN, BN, VN, UN, WN, KN, qN, uP, JN, XN, ZN, $N, `Pie`, nP, iP, dP, aP, DN, oP, cP];
  }
  computeIsSubtype(e6, t2) {
    switch (e6) {
      case jN:
      case NN:
      case PN:
      case IN:
      case JN:
        return this.isSubtype(DN, t2);
      case lP:
        return this.isSubtype(VN, t2);
      case uP:
      case dP:
        return this.isSubtype(KN, t2);
      default:
        return false;
    }
  }
  getReferenceType(e6) {
    let t2 = `${e6.container.$type}:${e6.property}`;
    switch (t2) {
      case `Entry:axis`:
        return AN;
      default:
        throw Error(`${t2} is not a valid reference id.`);
    }
  }
  getTypeMetaData(e6) {
    switch (e6) {
      case ON:
        return { name: ON, properties: [{ name: `accDescr` }, { name: `accTitle` }, { name: `edges`, defaultValue: [] }, { name: `groups`, defaultValue: [] }, { name: `junctions`, defaultValue: [] }, { name: `services`, defaultValue: [] }, { name: `title` }] };
      case AN:
        return { name: AN, properties: [{ name: `label` }, { name: `name` }] };
      case jN:
        return { name: jN, properties: [{ name: `name` }, { name: `order` }] };
      case NN:
        return { name: NN, properties: [{ name: `branch` }] };
      case PN:
        return { name: PN, properties: [{ name: `id` }, { name: `parent` }, { name: `tags`, defaultValue: [] }] };
      case FN:
        return { name: FN, properties: [{ name: `className` }, { name: `styleText` }] };
      case IN:
        return { name: IN, properties: [{ name: `id` }, { name: `message` }, { name: `tags`, defaultValue: [] }, { name: `type` }] };
      case RN:
        return { name: RN, properties: [{ name: `entries`, defaultValue: [] }, { name: `label` }, { name: `name` }] };
      case zN:
        return { name: zN, properties: [{ name: `lhsDir` }, { name: `lhsGroup`, defaultValue: false }, { name: `lhsId` }, { name: `lhsInto`, defaultValue: false }, { name: `rhsDir` }, { name: `rhsGroup`, defaultValue: false }, { name: `rhsId` }, { name: `rhsInto`, defaultValue: false }, { name: `title` }] };
      case BN:
        return { name: BN, properties: [{ name: `axis` }, { name: `value` }] };
      case VN:
        return { name: VN, properties: [{ name: `accDescr` }, { name: `accTitle` }, { name: `statements`, defaultValue: [] }, { name: `title` }] };
      case UN:
        return { name: UN, properties: [{ name: `icon` }, { name: `id` }, { name: `in` }, { name: `title` }] };
      case WN:
        return { name: WN, properties: [{ name: `accDescr` }, { name: `accTitle` }, { name: `title` }] };
      case KN:
        return { name: KN, properties: [{ name: `classSelector` }, { name: `name` }] };
      case qN:
        return { name: qN, properties: [{ name: `id` }, { name: `in` }] };
      case JN:
        return { name: JN, properties: [{ name: `branch` }, { name: `id` }, { name: `tags`, defaultValue: [] }, { name: `type` }] };
      case XN:
        return { name: XN, properties: [{ name: `name` }, { name: `value`, defaultValue: false }] };
      case ZN:
        return { name: ZN, properties: [{ name: `accDescr` }, { name: `accTitle` }, { name: `blocks`, defaultValue: [] }, { name: `title` }] };
      case $N:
        return { name: $N, properties: [{ name: `bits` }, { name: `end` }, { name: `label` }, { name: `start` }] };
      case `Pie`:
        return { name: `Pie`, properties: [{ name: `accDescr` }, { name: `accTitle` }, { name: `sections`, defaultValue: [] }, { name: `showData`, defaultValue: false }, { name: `title` }] };
      case nP:
        return { name: nP, properties: [{ name: `label` }, { name: `value` }] };
      case iP:
        return { name: iP, properties: [{ name: `accDescr` }, { name: `accTitle` }, { name: `axes`, defaultValue: [] }, { name: `curves`, defaultValue: [] }, { name: `options`, defaultValue: [] }, { name: `title` }] };
      case aP:
        return { name: aP, properties: [{ name: `icon` }, { name: `iconText` }, { name: `id` }, { name: `in` }, { name: `title` }] };
      case oP:
        return { name: oP, properties: [{ name: `accDescr` }, { name: `accTitle` }, { name: `title` }, { name: `TreemapRows`, defaultValue: [] }] };
      case cP:
        return { name: cP, properties: [{ name: `indent` }, { name: `item` }] };
      case lP:
        return { name: lP, properties: [{ name: `accDescr` }, { name: `accTitle` }, { name: `dir` }, { name: `statements`, defaultValue: [] }, { name: `title` }] };
      case uP:
        return { name: uP, properties: [{ name: `classSelector` }, { name: `name` }, { name: `value` }] };
      case dP:
        return { name: dP, properties: [{ name: `classSelector` }, { name: `name` }] };
      default:
        return { name: e6, properties: [] };
    }
  }
}, $(_a2, `MermaidAstReflection`), _a2), pP = new fP(), mP, hP = $(() => mP ?? (mP = wN(`{"$type":"Grammar","isDeclared":true,"name":"Info","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Info","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"info"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"Keyword","value":"showInfo"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@7"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), `InfoGrammar`), gP, _P = $(() => gP ?? (gP = wN(`{"$type":"Grammar","isDeclared":true,"name":"Packet","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Packet","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"packet"},{"$type":"Keyword","value":"packet-beta"}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"Assignment","feature":"blocks","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PacketBlock","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"start","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"end","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}],"cardinality":"?"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"+"},{"$type":"Assignment","feature":"bits","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]}]},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@9"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), `PacketGrammar`), vP, yP = $(() => vP ?? (vP = wN(`{"$type":"Grammar","isDeclared":true,"name":"Pie","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Pie","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"pie"},{"$type":"Assignment","feature":"showData","operator":"?=","terminal":{"$type":"Keyword","value":"showData"},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"Assignment","feature":"sections","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PieSection","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"FLOAT_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/-?[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/-?(0|[1-9][0-9]*)(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@2"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@3"}}]},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@11"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@12"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), `PieGrammar`), bP, xP = $(() => bP ?? (bP = wN(`{"$type":"Grammar","isDeclared":true,"name":"Architecture","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Architecture","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"architecture-beta"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"groups","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"services","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"junctions","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"edges","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"LeftPort","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"lhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"RightPort","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"rhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Keyword","value":":"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Arrow","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Assignment","feature":"lhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"--"},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]}},{"$type":"Keyword","value":"-"}]}]},{"$type":"Assignment","feature":"rhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Group","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"group"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Service","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"service"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"iconText","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]}}],"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Junction","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"junction"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Edge","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"lhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"lhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"rhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"rhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"ARROW_DIRECTION","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"L"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"R"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"T"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"B"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_GROUP","definition":{"$type":"RegexToken","regex":"/\\\\{group\\\\}/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_INTO","definition":{"$type":"RegexToken","regex":"/<|>/"},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@18"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@19"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"TerminalRule","name":"ARCH_ICON","definition":{"$type":"RegexToken","regex":"/\\\\([\\\\w-:]+\\\\)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_TITLE","definition":{"$type":"RegexToken","regex":"/\\\\[[\\\\w ]+\\\\]/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), `ArchitectureGrammar`), SP, CP = $(() => SP ?? (SP = wN(`{"$type":"Grammar","isDeclared":true,"name":"GitGraph","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"GitGraph","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Keyword","value":":"}]},{"$type":"Keyword","value":"gitGraph:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Keyword","value":":"}]}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"Assignment","feature":"statements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Direction","definition":{"$type":"Assignment","feature":"dir","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"LR"},{"$type":"Keyword","value":"TB"},{"$type":"Keyword","value":"BT"}]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Commit","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"commit"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"msg:","cardinality":"?"},{"$type":"Assignment","feature":"message","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Branch","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"branch"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"order:"},{"$type":"Assignment","feature":"order","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Merge","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"merge"},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Checkout","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"checkout"},{"$type":"Keyword","value":"switch"}]},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"CherryPicking","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"cherry-pick"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"parent:"},{"$type":"Assignment","feature":"parent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@14"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"TerminalRule","name":"REFERENCE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\\\w([-\\\\./\\\\w]*[-\\\\w])?/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), `GitGraphGrammar`), wP, TP = $(() => wP ?? (wP = wN(`{"$type":"Grammar","isDeclared":true,"name":"Radar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Radar","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":"radar-beta:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":":"}]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Keyword","value":"axis"},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"curve"},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Label","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}},{"$type":"Keyword","value":"]"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Axis","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Curve","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"},{"$type":"Keyword","value":"{"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Keyword","value":"}"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Entries","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"DetailedEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"axis","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@2"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Keyword","value":":","cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"NumberEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Option","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"showLegend"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"ticks"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"max"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"min"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"graticule"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"GRATICULE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"circle"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"polygon"}}]},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@16"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"interfaces":[{"$type":"Interface","name":"Entry","attributes":[{"$type":"TypeAttribute","name":"axis","isOptional":true,"type":{"$type":"ReferenceType","referenceType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@2"}}}},{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}],"superTypes":[]}],"definesHiddenTokens":false,"hiddenTokens":[],"types":[],"usedGrammars":[]}`)), `RadarGrammar`), EP, DP = $(() => EP ?? (EP = wN(`{"$type":"Grammar","isDeclared":true,"name":"Treemap","rules":[{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"ParserRule","entry":true,"name":"Treemap","returnType":{"$ref":"#/interfaces@4"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@0"},"arguments":[]},{"$type":"Assignment","feature":"TreemapRows","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"TREEMAP_KEYWORD","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"treemap-beta"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"treemap"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"CLASS_DEF","definition":{"$type":"RegexToken","regex":"/classDef\\\\s+([a-zA-Z_][a-zA-Z0-9_]+)(?:\\\\s+([^;\\\\r\\\\n]*))?(?:;)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STYLE_SEPARATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":":::"}},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"SEPARATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":":"}},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"COMMA","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":","}},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WS","definition":{"$type":"RegexToken","regex":"/[ \\\\t]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"ML_COMMENT","definition":{"$type":"RegexToken","regex":"/\\\\%\\\\%[^\\\\n]*/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"NL","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false},{"$type":"ParserRule","name":"TreemapRow","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"indent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"item","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ClassDef","dataType":"string","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Item","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Section","returnType":{"$ref":"#/interfaces@1"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Assignment","feature":"classSelector","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Leaf","returnType":{"$ref":"#/interfaces@2"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Assignment","feature":"classSelector","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"INDENTATION","definition":{"$type":"RegexToken","regex":"/[ \\\\t]{1,}/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID2","definition":{"$type":"RegexToken","regex":"/[a-zA-Z_][a-zA-Z0-9_]*/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER2","definition":{"$type":"RegexToken","regex":"/[0-9_\\\\.\\\\,]+/"},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"MyNumber","dataType":"number","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"STRING2","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/"},"fragment":false,"hidden":false}],"interfaces":[{"$type":"Interface","name":"Item","attributes":[{"$type":"TypeAttribute","name":"name","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false},{"$type":"TypeAttribute","name":"classSelector","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]},{"$type":"Interface","name":"Section","superTypes":[{"$ref":"#/interfaces@0"}],"attributes":[]},{"$type":"Interface","name":"Leaf","superTypes":[{"$ref":"#/interfaces@0"}],"attributes":[{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}]},{"$type":"Interface","name":"ClassDefStatement","attributes":[{"$type":"TypeAttribute","name":"className","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false},{"$type":"TypeAttribute","name":"styleText","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false}],"superTypes":[]},{"$type":"Interface","name":"Treemap","attributes":[{"$type":"TypeAttribute","name":"TreemapRows","type":{"$type":"ArrayType","elementType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@14"}}},"isOptional":false},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"definesHiddenTokens":false,"hiddenTokens":[],"imports":[],"types":[],"usedGrammars":[],"$comment":"/**\\n * Treemap grammar for Langium\\n * Converted from mindmap grammar\\n *\\n * The ML_COMMENT and NL hidden terminals handle whitespace, comments, and newlines\\n * before the treemap keyword, allowing for empty lines and comments before the\\n * treemap declaration.\\n */"}`)), `TreemapGrammar`), OP = { languageId: `info`, fileExtensions: [`.mmd`, `.mermaid`], caseInsensitive: false, mode: `production` }, kP = { languageId: `packet`, fileExtensions: [`.mmd`, `.mermaid`], caseInsensitive: false, mode: `production` }, AP = { languageId: `pie`, fileExtensions: [`.mmd`, `.mermaid`], caseInsensitive: false, mode: `production` }, jP = { languageId: `architecture`, fileExtensions: [`.mmd`, `.mermaid`], caseInsensitive: false, mode: `production` }, MP = { languageId: `gitGraph`, fileExtensions: [`.mmd`, `.mermaid`], caseInsensitive: false, mode: `production` }, NP = { languageId: `radar`, fileExtensions: [`.mmd`, `.mermaid`], caseInsensitive: false, mode: `production` }, PP = { languageId: `treemap`, fileExtensions: [`.mmd`, `.mermaid`], caseInsensitive: false, mode: `production` }, FP = { AstReflection: $(() => new fP(), `AstReflection`) }, IP = { Grammar: $(() => hP(), `Grammar`), LanguageMetaData: $(() => OP, `LanguageMetaData`), parser: {} }, LP = { Grammar: $(() => _P(), `Grammar`), LanguageMetaData: $(() => kP, `LanguageMetaData`), parser: {} }, RP = { Grammar: $(() => yP(), `Grammar`), LanguageMetaData: $(() => AP, `LanguageMetaData`), parser: {} }, zP = { Grammar: $(() => xP(), `Grammar`), LanguageMetaData: $(() => jP, `LanguageMetaData`), parser: {} }, BP = { Grammar: $(() => CP(), `Grammar`), LanguageMetaData: $(() => MP, `LanguageMetaData`), parser: {} }, VP = { Grammar: $(() => TP(), `Grammar`), LanguageMetaData: $(() => NP, `LanguageMetaData`), parser: {} }, HP = { Grammar: $(() => DP(), `Grammar`), LanguageMetaData: $(() => PP, `LanguageMetaData`), parser: {} }, UP = { ACC_DESCR: /accDescr(?:[\t ]*:([^\n\r]*)|\s*{([^}]*)})/, ACC_TITLE: /accTitle[\t ]*:([^\n\r]*)/, TITLE: /title([\t ][^\n\r]*|)/ }, WP = (_b2 = class extends cj {
  runConverter(e6, t2, n2) {
    let r2 = this.runCommonConverter(e6, t2, n2);
    return r2 === void 0 && (r2 = this.runCustomConverter(e6, t2, n2)), r2 === void 0 ? super.runConverter(e6, t2, n2) : r2;
  }
  runCommonConverter(e6, t2, n2) {
    let r2 = UP[e6.name];
    if (r2 === void 0) return;
    let i2 = r2.exec(t2);
    if (i2 !== null) {
      if (i2[1] !== void 0) return i2[1].trim().replace(/[\t ]{2,}/gm, ` `);
      if (i2[2] !== void 0) return i2[2].replace(/^\s*/gm, ``).replace(/\s+$/gm, ``).replace(/[\t ]{2,}/gm, ` `).replace(/[\n\r]{2,}/gm, `
`);
    }
  }
}, $(_b2, `AbstractMermaidValueConverter`), _b2), GP = (_c2 = class extends WP {
  runCustomConverter(e6, t2, n2) {
  }
}, $(_c2, `CommonValueConverter`), _c2), KP = (_d2 = class extends sj {
  constructor(e6) {
    super(), this.keywords = new Set(e6);
  }
  buildKeywordTokens(e6, t2, n2) {
    let r2 = super.buildKeywordTokens(e6, t2, n2);
    return r2.forEach((e7) => {
      this.keywords.has(e7.name) && e7.PATTERN !== void 0 && (e7.PATTERN = RegExp(e7.PATTERN.toString() + `(?:(?=%%)|(?!\\S))`));
    }), r2;
  }
}, $(_d2, `AbstractMermaidTokenBuilder`), _d2);
_e2 = class extends KP {
}, $(_e2, `CommonTokenBuilder`), _e2;
export {
  BP as a,
  LP as c,
  HP as d,
  $ as f,
  oN as g,
  aN as h,
  GP as i,
  RP as l,
  cN as m,
  WP as n,
  IP as o,
  bN as p,
  zP as r,
  FP as s,
  KP as t,
  VP as u
};
