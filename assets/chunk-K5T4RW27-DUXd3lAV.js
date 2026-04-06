var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a2, _b2, _c2, _d2, _e2;
import { a as e, i as t, n, o as r, r as i, t as a } from "./chunk-Dpv4RYZm.js";
import { t as o } from "./isEmpty-DOQ62aC5.js";
import { a as s, c, d as l, n as u, s as d, t as f } from "./reduce-mGdWE-KL.js";
import { a as p, n as m, t as h } from "./flatten-CqtkwEvn.js";
function g(e6) {
  return typeof e6 == `object` && !!e6 && typeof e6.$type == `string`;
}
function _(e6) {
  return typeof e6 == `object` && !!e6 && typeof e6.$refText == `string` && `ref` in e6;
}
function v(e6) {
  return typeof e6 == `object` && !!e6 && typeof e6.$refText == `string` && `items` in e6;
}
function y(e6) {
  return typeof e6 == `object` && !!e6 && typeof e6.name == `string` && typeof e6.type == `string` && typeof e6.path == `string`;
}
function b(e6) {
  return typeof e6 == `object` && !!e6 && typeof e6.info == `object` && typeof e6.message == `string`;
}
var x = class {
  constructor() {
    this.subtypes = {}, this.allSubtypes = {};
  }
  getAllTypes() {
    return Object.keys(this.types);
  }
  getReferenceType(e6) {
    var _a3;
    let t2 = this.types[e6.container.$type];
    if (!t2) throw Error(`Type ${e6.container.$type || `undefined`} not found.`);
    let n2 = (_a3 = t2.properties[e6.property]) == null ? void 0 : _a3.referenceType;
    if (!n2) throw Error(`Property ${e6.property || `undefined`} of type ${e6.container.$type} is not a reference.`);
    return n2;
  }
  getTypeMetaData(e6) {
    return this.types[e6] || { name: e6, properties: {}, superTypes: [] };
  }
  isInstance(e6, t2) {
    return g(e6) && this.isSubtype(e6.$type, t2);
  }
  isSubtype(e6, t2) {
    if (e6 === t2) return true;
    let n2 = this.subtypes[e6];
    n2 || (n2 = this.subtypes[e6] = {});
    let r2 = n2[t2];
    if (r2 !== void 0) return r2;
    {
      let r3 = this.types[e6], i2 = r3 ? r3.superTypes.some((e7) => this.isSubtype(e7, t2)) : false;
      return n2[t2] = i2, i2;
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
function S(e6) {
  return typeof e6 == `object` && !!e6 && Array.isArray(e6.content);
}
function C(e6) {
  return typeof e6 == `object` && !!e6 && typeof e6.tokenType == `object`;
}
function w(e6) {
  return S(e6) && typeof e6.fullText == `string`;
}
var T = class e2 {
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
      return E;
    });
  }
  join(e6 = `,`) {
    let t2 = this.iterator(), n2 = ``, r2, i2 = false;
    do
      r2 = t2.next(), r2.done || (i2 && (n2 += e6), n2 += ee(r2.value)), i2 = true;
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
      return n2 ? E : { done: false, value: t2(r2) };
    });
  }
  filter(t2) {
    return new e2(this.startFn, (e6) => {
      let n2;
      do
        if (n2 = this.nextFn(e6), !n2.done && t2(n2.value)) return n2;
      while (!n2.done);
      return E;
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
          if (te(n3)) e6.iterator = n3[Symbol.iterator]();
          else return { done: false, value: n3 };
        }
      } while (e6.iterator);
      return E;
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
        if (!t3) if (te(r2)) e6.iterator = r2[Symbol.iterator]();
        else return { done: false, value: r2 };
      } while (e6.iterator);
      return E;
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
    return new e2(() => ({ size: 0, state: this.startFn() }), (e6) => (e6.size++, e6.size > t2 ? E : this.nextFn(e6.state)));
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
      return E;
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
function ee(e6) {
  return typeof e6 == `string` ? e6 : e6 === void 0 ? `undefined` : typeof e6.toString == `function` ? e6.toString() : Object.prototype.toString.call(e6);
}
function te(e6) {
  return !!e6 && typeof e6[Symbol.iterator] == `function`;
}
const ne = new T(() => void 0, () => E), E = Object.freeze({ done: true, value: void 0 });
function D(...e6) {
  if (e6.length === 1) {
    let t2 = e6[0];
    if (t2 instanceof T) return t2;
    if (te(t2)) return new T(() => t2[Symbol.iterator](), (e7) => e7.next());
    if (typeof t2.length == `number`) return new T(() => ({ index: 0 }), (e7) => e7.index < t2.length ? { done: false, value: t2[e7.index++] } : E);
  }
  return e6.length > 1 ? new T(() => ({ collIndex: 0, arrIndex: 0 }), (t2) => {
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
        te(n2) ? t2.iterator = n2[Symbol.iterator]() : n2 && typeof n2.length == `number` && (t2.array = n2);
      }
    } while (t2.iterator || t2.array || t2.collIndex < e6.length);
    return E;
  }) : ne;
}
var re = class extends T {
  constructor(e6, t2, n2) {
    super(() => ({ iterators: (n2 == null ? void 0 : n2.includeRoot) ? [[e6][Symbol.iterator]()] : [t2(e6)[Symbol.iterator]()], pruned: false }), (e7) => {
      for (e7.pruned && (e7.pruned = (e7.iterators.pop(), false)); e7.iterators.length > 0; ) {
        let n3 = e7.iterators[e7.iterators.length - 1].next();
        if (n3.done) e7.iterators.pop();
        else return e7.iterators.push(t2(n3.value)[Symbol.iterator]()), n3;
      }
      return E;
    });
  }
  iterator() {
    let e6 = { state: this.startFn(), next: () => this.nextFn(e6.state), prune: () => {
      e6.state.pruned = true;
    }, [Symbol.iterator]: () => e6 };
    return e6;
  }
}, ie;
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
})(ie || (ie = {}));
var ae = i({ assignMandatoryProperties: () => pe, copyAstNode: () => he, findRootNode: () => le, getContainerOfType: () => se, getDocument: () => O, getReferenceNodes: () => k, hasContainerOfType: () => ce, linkContentToContainer: () => oe, streamAllContents: () => A, streamAst: () => j, streamContents: () => ue, streamReferences: () => fe });
function oe(e6, t2 = {}) {
  for (let [n2, r2] of Object.entries(e6)) n2.startsWith(`$`) || (Array.isArray(r2) ? r2.forEach((r3, i2) => {
    g(r3) && (r3.$container = e6, r3.$containerProperty = n2, r3.$containerIndex = i2, t2.deep && oe(r3, t2));
  }) : g(r2) && (r2.$container = e6, r2.$containerProperty = n2, t2.deep && oe(r2, t2)));
}
function se(e6, t2) {
  let n2 = e6;
  for (; n2; ) {
    if (t2(n2)) return n2;
    n2 = n2.$container;
  }
}
function ce(e6, t2) {
  let n2 = e6;
  for (; n2; ) {
    if (t2(n2)) return true;
    n2 = n2.$container;
  }
  return false;
}
function O(e6) {
  let t2 = le(e6).$document;
  if (!t2) throw Error(`AST node has no document.`);
  return t2;
}
function le(e6) {
  for (; e6.$container; ) e6 = e6.$container;
  return e6;
}
function k(e6) {
  return _(e6) ? e6.ref ? [e6.ref] : [] : v(e6) ? e6.items.map((e7) => e7.ref) : [];
}
function ue(e6, t2) {
  if (!e6) throw Error(`Node must be an AstNode.`);
  let n2 = t2 == null ? void 0 : t2.range;
  return new T(() => ({ keys: Object.keys(e6), keyIndex: 0, arrayIndex: 0 }), (t3) => {
    for (; t3.keyIndex < t3.keys.length; ) {
      let r2 = t3.keys[t3.keyIndex];
      if (!r2.startsWith(`$`)) {
        let i2 = e6[r2];
        if (g(i2)) {
          if (t3.keyIndex++, de(i2, n2)) return { done: false, value: i2 };
        } else if (Array.isArray(i2)) {
          for (; t3.arrayIndex < i2.length; ) {
            let e7 = i2[t3.arrayIndex++];
            if (g(e7) && de(e7, n2)) return { done: false, value: e7 };
          }
          t3.arrayIndex = 0;
        }
      }
      t3.keyIndex++;
    }
    return E;
  });
}
function A(e6, t2) {
  if (!e6) throw Error(`Root node must be an AstNode.`);
  return new re(e6, (e7) => ue(e7, t2));
}
function j(e6, t2) {
  if (e6) {
    if ((t2 == null ? void 0 : t2.range) && !de(e6, t2.range)) return new re(e6, () => []);
  } else throw Error(`Root node must be an AstNode.`);
  return new re(e6, (e7) => ue(e7, t2), { includeRoot: true });
}
function de(e6, t2) {
  var _a3;
  if (!t2) return true;
  let n2 = (_a3 = e6.$cstNode) == null ? void 0 : _a3.range;
  return n2 ? Sn(n2, t2) : false;
}
function fe(e6) {
  return new T(() => ({ keys: Object.keys(e6), keyIndex: 0, arrayIndex: 0 }), (t2) => {
    for (; t2.keyIndex < t2.keys.length; ) {
      let n2 = t2.keys[t2.keyIndex];
      if (!n2.startsWith(`$`)) {
        let r2 = e6[n2];
        if (_(r2) || v(r2)) return t2.keyIndex++, { done: false, value: { reference: r2, container: e6, property: n2 } };
        if (Array.isArray(r2)) {
          for (; t2.arrayIndex < r2.length; ) {
            let i2 = t2.arrayIndex++, a2 = r2[i2];
            if (_(a2) || v(r2)) return { done: false, value: { reference: a2, container: e6, property: n2, index: i2 } };
          }
          t2.arrayIndex = 0;
        }
      }
      t2.keyIndex++;
    }
    return E;
  });
}
function pe(e6, t2) {
  let n2 = e6.getTypeMetaData(t2.$type), r2 = t2;
  for (let e7 of Object.values(n2.properties)) e7.defaultValue !== void 0 && r2[e7.name] === void 0 && (r2[e7.name] = me(e7.defaultValue));
}
function me(e6) {
  return Array.isArray(e6) ? [...e6.map(me)] : e6;
}
function he(e6, t2, n2) {
  let r2 = { $type: e6.$type };
  n2 && (n2.set(e6, r2), n2.set(r2, e6));
  for (let [i2, a2] of Object.entries(e6)) if (!i2.startsWith(`$`)) if (g(a2)) r2[i2] = he(a2, t2, n2);
  else if (_(a2)) r2[i2] = t2(r2, i2, a2.$refNode, a2.$refText, a2);
  else if (Array.isArray(a2)) {
    let e7 = [];
    for (let o2 of a2) g(o2) ? e7.push(he(o2, t2, n2)) : _(o2) ? e7.push(t2(r2, i2, o2.$refNode, o2.$refText, o2)) : e7.push(o2);
    r2[i2] = e7;
  } else r2[i2] = a2;
  return oe(r2, { deep: true }), r2;
}
var ge = i({ AbstractElement: () => ve, AbstractParserRule: () => be, AbstractRule: () => Se, AbstractType: () => M, Action: () => Te, Alternatives: () => De, ArrayLiteral: () => ke, ArrayType: () => je, Assignment: () => Ne, BooleanLiteral: () => Fe, CharacterRange: () => Le, Condition: () => ze, Conjunction: () => Ve, CrossReference: () => Ue, Disjunction: () => Ge, EndOfFile: () => qe, Grammar: () => Ye, GrammarImport: () => Ze, Group: () => $e, InferredType: () => tt, InfixRule: () => rt, InfixRuleOperatorList: () => at, InfixRuleOperators: () => st, Interface: () => lt, Keyword: () => dt, LangiumGrammarAstReflection: () => fn, LangiumGrammarTerminals: () => _e, NamedArgument: () => pt, NegatedToken: () => ht, Negation: () => _t, NumberLiteral: () => yt, Parameter: () => xt, ParameterReference: () => Ct, ParserRule: () => Tt, ReferenceType: () => Dt, RegexToken: () => kt, ReturnType: () => jt, RuleCall: () => Nt, SimpleType: () => Ft, StringLiteral: () => Lt, TerminalAlternatives: () => zt, TerminalElement: () => Vt, TerminalGroup: () => Ut, TerminalRule: () => Gt, TerminalRuleCall: () => qt, Type: () => Yt, TypeAttribute: () => Zt, TypeDefinition: () => $t, UnionType: () => tn, UnorderedGroup: () => rn, UntilToken: () => on, ValueLiteral: () => cn, Wildcard: () => un, isAbstractElement: () => ye, isAbstractParserRule: () => xe, isAbstractRule: () => Ce, isAbstractType: () => we, isAction: () => Ee, isAlternatives: () => Oe, isArrayLiteral: () => Ae, isArrayType: () => Me, isAssignment: () => Pe, isBooleanLiteral: () => Ie, isCharacterRange: () => Re, isCondition: () => Be, isConjunction: () => He, isCrossReference: () => We, isDisjunction: () => Ke, isEndOfFile: () => Je, isGrammar: () => Xe, isGrammarImport: () => Qe, isGroup: () => et, isInferredType: () => nt, isInfixRule: () => it, isInfixRuleOperatorList: () => ot, isInfixRuleOperators: () => ct, isInterface: () => ut, isKeyword: () => ft, isNamedArgument: () => mt, isNegatedToken: () => gt, isNegation: () => vt, isNumberLiteral: () => bt, isParameter: () => St, isParameterReference: () => wt, isParserRule: () => Et, isReferenceType: () => Ot, isRegexToken: () => At, isReturnType: () => Mt, isRuleCall: () => Pt, isSimpleType: () => It, isStringLiteral: () => Rt, isTerminalAlternatives: () => Bt, isTerminalElement: () => Ht, isTerminalGroup: () => Wt, isTerminalRule: () => Kt, isTerminalRuleCall: () => Jt, isType: () => Xt, isTypeAttribute: () => Qt, isTypeDefinition: () => en, isUnionType: () => nn, isUnorderedGroup: () => an, isUntilToken: () => sn, isValueLiteral: () => ln, isWildcard: () => dn, reflection: () => N });
const _e = { ID: /\^?[_a-zA-Z][\w_]*/, STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/, NUMBER: /NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity)/, RegexLiteral: /\/(?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+\/[a-z]*/, WS: /\s+/, ML_COMMENT: /\/\*[\s\S]*?\*\//, SL_COMMENT: /\/\/[^\n\r]*/ }, ve = { $type: `AbstractElement`, cardinality: `cardinality` };
function ye(e6) {
  return N.isInstance(e6, ve.$type);
}
const be = { $type: `AbstractParserRule` };
function xe(e6) {
  return N.isInstance(e6, be.$type);
}
const Se = { $type: `AbstractRule` };
function Ce(e6) {
  return N.isInstance(e6, Se.$type);
}
const M = { $type: `AbstractType` };
function we(e6) {
  return N.isInstance(e6, M.$type);
}
const Te = { $type: `Action`, cardinality: `cardinality`, feature: `feature`, inferredType: `inferredType`, operator: `operator`, type: `type` };
function Ee(e6) {
  return N.isInstance(e6, Te.$type);
}
const De = { $type: `Alternatives`, cardinality: `cardinality`, elements: `elements` };
function Oe(e6) {
  return N.isInstance(e6, De.$type);
}
const ke = { $type: `ArrayLiteral`, elements: `elements` };
function Ae(e6) {
  return N.isInstance(e6, ke.$type);
}
const je = { $type: `ArrayType`, elementType: `elementType` };
function Me(e6) {
  return N.isInstance(e6, je.$type);
}
const Ne = { $type: `Assignment`, cardinality: `cardinality`, feature: `feature`, operator: `operator`, predicate: `predicate`, terminal: `terminal` };
function Pe(e6) {
  return N.isInstance(e6, Ne.$type);
}
const Fe = { $type: `BooleanLiteral`, true: `true` };
function Ie(e6) {
  return N.isInstance(e6, Fe.$type);
}
const Le = { $type: `CharacterRange`, cardinality: `cardinality`, left: `left`, lookahead: `lookahead`, parenthesized: `parenthesized`, right: `right` };
function Re(e6) {
  return N.isInstance(e6, Le.$type);
}
const ze = { $type: `Condition` };
function Be(e6) {
  return N.isInstance(e6, ze.$type);
}
const Ve = { $type: `Conjunction`, left: `left`, right: `right` };
function He(e6) {
  return N.isInstance(e6, Ve.$type);
}
const Ue = { $type: `CrossReference`, cardinality: `cardinality`, deprecatedSyntax: `deprecatedSyntax`, isMulti: `isMulti`, terminal: `terminal`, type: `type` };
function We(e6) {
  return N.isInstance(e6, Ue.$type);
}
const Ge = { $type: `Disjunction`, left: `left`, right: `right` };
function Ke(e6) {
  return N.isInstance(e6, Ge.$type);
}
const qe = { $type: `EndOfFile`, cardinality: `cardinality` };
function Je(e6) {
  return N.isInstance(e6, qe.$type);
}
const Ye = { $type: `Grammar`, imports: `imports`, interfaces: `interfaces`, isDeclared: `isDeclared`, name: `name`, rules: `rules`, types: `types` };
function Xe(e6) {
  return N.isInstance(e6, Ye.$type);
}
const Ze = { $type: `GrammarImport`, path: `path` };
function Qe(e6) {
  return N.isInstance(e6, Ze.$type);
}
const $e = { $type: `Group`, cardinality: `cardinality`, elements: `elements`, guardCondition: `guardCondition`, predicate: `predicate` };
function et(e6) {
  return N.isInstance(e6, $e.$type);
}
const tt = { $type: `InferredType`, name: `name` };
function nt(e6) {
  return N.isInstance(e6, tt.$type);
}
const rt = { $type: `InfixRule`, call: `call`, dataType: `dataType`, inferredType: `inferredType`, name: `name`, operators: `operators`, parameters: `parameters`, returnType: `returnType` };
function it(e6) {
  return N.isInstance(e6, rt.$type);
}
const at = { $type: `InfixRuleOperatorList`, associativity: `associativity`, operators: `operators` };
function ot(e6) {
  return N.isInstance(e6, at.$type);
}
const st = { $type: `InfixRuleOperators`, precedences: `precedences` };
function ct(e6) {
  return N.isInstance(e6, st.$type);
}
const lt = { $type: `Interface`, attributes: `attributes`, name: `name`, superTypes: `superTypes` };
function ut(e6) {
  return N.isInstance(e6, lt.$type);
}
const dt = { $type: `Keyword`, cardinality: `cardinality`, predicate: `predicate`, value: `value` };
function ft(e6) {
  return N.isInstance(e6, dt.$type);
}
const pt = { $type: `NamedArgument`, calledByName: `calledByName`, parameter: `parameter`, value: `value` };
function mt(e6) {
  return N.isInstance(e6, pt.$type);
}
const ht = { $type: `NegatedToken`, cardinality: `cardinality`, lookahead: `lookahead`, parenthesized: `parenthesized`, terminal: `terminal` };
function gt(e6) {
  return N.isInstance(e6, ht.$type);
}
const _t = { $type: `Negation`, value: `value` };
function vt(e6) {
  return N.isInstance(e6, _t.$type);
}
const yt = { $type: `NumberLiteral`, value: `value` };
function bt(e6) {
  return N.isInstance(e6, yt.$type);
}
const xt = { $type: `Parameter`, name: `name` };
function St(e6) {
  return N.isInstance(e6, xt.$type);
}
const Ct = { $type: `ParameterReference`, parameter: `parameter` };
function wt(e6) {
  return N.isInstance(e6, Ct.$type);
}
const Tt = { $type: `ParserRule`, dataType: `dataType`, definition: `definition`, entry: `entry`, fragment: `fragment`, inferredType: `inferredType`, name: `name`, parameters: `parameters`, returnType: `returnType` };
function Et(e6) {
  return N.isInstance(e6, Tt.$type);
}
const Dt = { $type: `ReferenceType`, isMulti: `isMulti`, referenceType: `referenceType` };
function Ot(e6) {
  return N.isInstance(e6, Dt.$type);
}
const kt = { $type: `RegexToken`, cardinality: `cardinality`, lookahead: `lookahead`, parenthesized: `parenthesized`, regex: `regex` };
function At(e6) {
  return N.isInstance(e6, kt.$type);
}
const jt = { $type: `ReturnType`, name: `name` };
function Mt(e6) {
  return N.isInstance(e6, jt.$type);
}
const Nt = { $type: `RuleCall`, arguments: `arguments`, cardinality: `cardinality`, predicate: `predicate`, rule: `rule` };
function Pt(e6) {
  return N.isInstance(e6, Nt.$type);
}
const Ft = { $type: `SimpleType`, primitiveType: `primitiveType`, stringType: `stringType`, typeRef: `typeRef` };
function It(e6) {
  return N.isInstance(e6, Ft.$type);
}
const Lt = { $type: `StringLiteral`, value: `value` };
function Rt(e6) {
  return N.isInstance(e6, Lt.$type);
}
const zt = { $type: `TerminalAlternatives`, cardinality: `cardinality`, elements: `elements`, lookahead: `lookahead`, parenthesized: `parenthesized` };
function Bt(e6) {
  return N.isInstance(e6, zt.$type);
}
const Vt = { $type: `TerminalElement`, cardinality: `cardinality`, lookahead: `lookahead`, parenthesized: `parenthesized` };
function Ht(e6) {
  return N.isInstance(e6, Vt.$type);
}
const Ut = { $type: `TerminalGroup`, cardinality: `cardinality`, elements: `elements`, lookahead: `lookahead`, parenthesized: `parenthesized` };
function Wt(e6) {
  return N.isInstance(e6, Ut.$type);
}
const Gt = { $type: `TerminalRule`, definition: `definition`, fragment: `fragment`, hidden: `hidden`, name: `name`, type: `type` };
function Kt(e6) {
  return N.isInstance(e6, Gt.$type);
}
const qt = { $type: `TerminalRuleCall`, cardinality: `cardinality`, lookahead: `lookahead`, parenthesized: `parenthesized`, rule: `rule` };
function Jt(e6) {
  return N.isInstance(e6, qt.$type);
}
const Yt = { $type: `Type`, name: `name`, type: `type` };
function Xt(e6) {
  return N.isInstance(e6, Yt.$type);
}
const Zt = { $type: `TypeAttribute`, defaultValue: `defaultValue`, isOptional: `isOptional`, name: `name`, type: `type` };
function Qt(e6) {
  return N.isInstance(e6, Zt.$type);
}
const $t = { $type: `TypeDefinition` };
function en(e6) {
  return N.isInstance(e6, $t.$type);
}
const tn = { $type: `UnionType`, types: `types` };
function nn(e6) {
  return N.isInstance(e6, tn.$type);
}
const rn = { $type: `UnorderedGroup`, cardinality: `cardinality`, elements: `elements` };
function an(e6) {
  return N.isInstance(e6, rn.$type);
}
const on = { $type: `UntilToken`, cardinality: `cardinality`, lookahead: `lookahead`, parenthesized: `parenthesized`, terminal: `terminal` };
function sn(e6) {
  return N.isInstance(e6, on.$type);
}
const cn = { $type: `ValueLiteral` };
function ln(e6) {
  return N.isInstance(e6, cn.$type);
}
const un = { $type: `Wildcard`, cardinality: `cardinality`, lookahead: `lookahead`, parenthesized: `parenthesized` };
function dn(e6) {
  return N.isInstance(e6, un.$type);
}
var fn = class extends x {
  constructor() {
    super(...arguments), this.types = { AbstractElement: { name: ve.$type, properties: { cardinality: { name: ve.cardinality } }, superTypes: [] }, AbstractParserRule: { name: be.$type, properties: {}, superTypes: [Se.$type, M.$type] }, AbstractRule: { name: Se.$type, properties: {}, superTypes: [] }, AbstractType: { name: M.$type, properties: {}, superTypes: [] }, Action: { name: Te.$type, properties: { cardinality: { name: Te.cardinality }, feature: { name: Te.feature }, inferredType: { name: Te.inferredType }, operator: { name: Te.operator }, type: { name: Te.type, referenceType: M.$type } }, superTypes: [ve.$type] }, Alternatives: { name: De.$type, properties: { cardinality: { name: De.cardinality }, elements: { name: De.elements, defaultValue: [] } }, superTypes: [ve.$type] }, ArrayLiteral: { name: ke.$type, properties: { elements: { name: ke.elements, defaultValue: [] } }, superTypes: [cn.$type] }, ArrayType: { name: je.$type, properties: { elementType: { name: je.elementType } }, superTypes: [$t.$type] }, Assignment: { name: Ne.$type, properties: { cardinality: { name: Ne.cardinality }, feature: { name: Ne.feature }, operator: { name: Ne.operator }, predicate: { name: Ne.predicate }, terminal: { name: Ne.terminal } }, superTypes: [ve.$type] }, BooleanLiteral: { name: Fe.$type, properties: { true: { name: Fe.true, defaultValue: false } }, superTypes: [ze.$type, cn.$type] }, CharacterRange: { name: Le.$type, properties: { cardinality: { name: Le.cardinality }, left: { name: Le.left }, lookahead: { name: Le.lookahead }, parenthesized: { name: Le.parenthesized, defaultValue: false }, right: { name: Le.right } }, superTypes: [Vt.$type] }, Condition: { name: ze.$type, properties: {}, superTypes: [] }, Conjunction: { name: Ve.$type, properties: { left: { name: Ve.left }, right: { name: Ve.right } }, superTypes: [ze.$type] }, CrossReference: { name: Ue.$type, properties: { cardinality: { name: Ue.cardinality }, deprecatedSyntax: { name: Ue.deprecatedSyntax, defaultValue: false }, isMulti: { name: Ue.isMulti, defaultValue: false }, terminal: { name: Ue.terminal }, type: { name: Ue.type, referenceType: M.$type } }, superTypes: [ve.$type] }, Disjunction: { name: Ge.$type, properties: { left: { name: Ge.left }, right: { name: Ge.right } }, superTypes: [ze.$type] }, EndOfFile: { name: qe.$type, properties: { cardinality: { name: qe.cardinality } }, superTypes: [ve.$type] }, Grammar: { name: Ye.$type, properties: { imports: { name: Ye.imports, defaultValue: [] }, interfaces: { name: Ye.interfaces, defaultValue: [] }, isDeclared: { name: Ye.isDeclared, defaultValue: false }, name: { name: Ye.name }, rules: { name: Ye.rules, defaultValue: [] }, types: { name: Ye.types, defaultValue: [] } }, superTypes: [] }, GrammarImport: { name: Ze.$type, properties: { path: { name: Ze.path } }, superTypes: [] }, Group: { name: $e.$type, properties: { cardinality: { name: $e.cardinality }, elements: { name: $e.elements, defaultValue: [] }, guardCondition: { name: $e.guardCondition }, predicate: { name: $e.predicate } }, superTypes: [ve.$type] }, InferredType: { name: tt.$type, properties: { name: { name: tt.name } }, superTypes: [M.$type] }, InfixRule: { name: rt.$type, properties: { call: { name: rt.call }, dataType: { name: rt.dataType }, inferredType: { name: rt.inferredType }, name: { name: rt.name }, operators: { name: rt.operators }, parameters: { name: rt.parameters, defaultValue: [] }, returnType: { name: rt.returnType, referenceType: M.$type } }, superTypes: [be.$type] }, InfixRuleOperatorList: { name: at.$type, properties: { associativity: { name: at.associativity }, operators: { name: at.operators, defaultValue: [] } }, superTypes: [] }, InfixRuleOperators: { name: st.$type, properties: { precedences: { name: st.precedences, defaultValue: [] } }, superTypes: [] }, Interface: { name: lt.$type, properties: { attributes: { name: lt.attributes, defaultValue: [] }, name: { name: lt.name }, superTypes: { name: lt.superTypes, defaultValue: [], referenceType: M.$type } }, superTypes: [M.$type] }, Keyword: { name: dt.$type, properties: { cardinality: { name: dt.cardinality }, predicate: { name: dt.predicate }, value: { name: dt.value } }, superTypes: [ve.$type] }, NamedArgument: { name: pt.$type, properties: { calledByName: { name: pt.calledByName, defaultValue: false }, parameter: { name: pt.parameter, referenceType: xt.$type }, value: { name: pt.value } }, superTypes: [] }, NegatedToken: { name: ht.$type, properties: { cardinality: { name: ht.cardinality }, lookahead: { name: ht.lookahead }, parenthesized: { name: ht.parenthesized, defaultValue: false }, terminal: { name: ht.terminal } }, superTypes: [Vt.$type] }, Negation: { name: _t.$type, properties: { value: { name: _t.value } }, superTypes: [ze.$type] }, NumberLiteral: { name: yt.$type, properties: { value: { name: yt.value } }, superTypes: [cn.$type] }, Parameter: { name: xt.$type, properties: { name: { name: xt.name } }, superTypes: [] }, ParameterReference: { name: Ct.$type, properties: { parameter: { name: Ct.parameter, referenceType: xt.$type } }, superTypes: [ze.$type] }, ParserRule: { name: Tt.$type, properties: { dataType: { name: Tt.dataType }, definition: { name: Tt.definition }, entry: { name: Tt.entry, defaultValue: false }, fragment: { name: Tt.fragment, defaultValue: false }, inferredType: { name: Tt.inferredType }, name: { name: Tt.name }, parameters: { name: Tt.parameters, defaultValue: [] }, returnType: { name: Tt.returnType, referenceType: M.$type } }, superTypes: [be.$type] }, ReferenceType: { name: Dt.$type, properties: { isMulti: { name: Dt.isMulti, defaultValue: false }, referenceType: { name: Dt.referenceType } }, superTypes: [$t.$type] }, RegexToken: { name: kt.$type, properties: { cardinality: { name: kt.cardinality }, lookahead: { name: kt.lookahead }, parenthesized: { name: kt.parenthesized, defaultValue: false }, regex: { name: kt.regex } }, superTypes: [Vt.$type] }, ReturnType: { name: jt.$type, properties: { name: { name: jt.name } }, superTypes: [] }, RuleCall: { name: Nt.$type, properties: { arguments: { name: Nt.arguments, defaultValue: [] }, cardinality: { name: Nt.cardinality }, predicate: { name: Nt.predicate }, rule: { name: Nt.rule, referenceType: Se.$type } }, superTypes: [ve.$type] }, SimpleType: { name: Ft.$type, properties: { primitiveType: { name: Ft.primitiveType }, stringType: { name: Ft.stringType }, typeRef: { name: Ft.typeRef, referenceType: M.$type } }, superTypes: [$t.$type] }, StringLiteral: { name: Lt.$type, properties: { value: { name: Lt.value } }, superTypes: [cn.$type] }, TerminalAlternatives: { name: zt.$type, properties: { cardinality: { name: zt.cardinality }, elements: { name: zt.elements, defaultValue: [] }, lookahead: { name: zt.lookahead }, parenthesized: { name: zt.parenthesized, defaultValue: false } }, superTypes: [Vt.$type] }, TerminalElement: { name: Vt.$type, properties: { cardinality: { name: Vt.cardinality }, lookahead: { name: Vt.lookahead }, parenthesized: { name: Vt.parenthesized, defaultValue: false } }, superTypes: [ve.$type] }, TerminalGroup: { name: Ut.$type, properties: { cardinality: { name: Ut.cardinality }, elements: { name: Ut.elements, defaultValue: [] }, lookahead: { name: Ut.lookahead }, parenthesized: { name: Ut.parenthesized, defaultValue: false } }, superTypes: [Vt.$type] }, TerminalRule: { name: Gt.$type, properties: { definition: { name: Gt.definition }, fragment: { name: Gt.fragment, defaultValue: false }, hidden: { name: Gt.hidden, defaultValue: false }, name: { name: Gt.name }, type: { name: Gt.type } }, superTypes: [Se.$type] }, TerminalRuleCall: { name: qt.$type, properties: { cardinality: { name: qt.cardinality }, lookahead: { name: qt.lookahead }, parenthesized: { name: qt.parenthesized, defaultValue: false }, rule: { name: qt.rule, referenceType: Gt.$type } }, superTypes: [Vt.$type] }, Type: { name: Yt.$type, properties: { name: { name: Yt.name }, type: { name: Yt.type } }, superTypes: [M.$type] }, TypeAttribute: { name: Zt.$type, properties: { defaultValue: { name: Zt.defaultValue }, isOptional: { name: Zt.isOptional, defaultValue: false }, name: { name: Zt.name }, type: { name: Zt.type } }, superTypes: [] }, TypeDefinition: { name: $t.$type, properties: {}, superTypes: [] }, UnionType: { name: tn.$type, properties: { types: { name: tn.types, defaultValue: [] } }, superTypes: [$t.$type] }, UnorderedGroup: { name: rn.$type, properties: { cardinality: { name: rn.cardinality }, elements: { name: rn.elements, defaultValue: [] } }, superTypes: [ve.$type] }, UntilToken: { name: on.$type, properties: { cardinality: { name: on.cardinality }, lookahead: { name: on.lookahead }, parenthesized: { name: on.parenthesized, defaultValue: false }, terminal: { name: on.terminal } }, superTypes: [Vt.$type] }, ValueLiteral: { name: cn.$type, properties: {}, superTypes: [] }, Wildcard: { name: un.$type, properties: { cardinality: { name: un.cardinality }, lookahead: { name: un.lookahead }, parenthesized: { name: un.parenthesized, defaultValue: false } }, superTypes: [Vt.$type] } };
  }
};
const N = new fn();
var pn = i({ DefaultNameRegexp: () => Cn, RangeComparison: () => bn, compareRange: () => xn, findCommentNode: () => Tn, findDeclarationNodeAtOffset: () => wn, findLeafNodeAtOffset: () => Dn, findLeafNodeBeforeOffset: () => On, flattenCst: () => gn, getDatatypeNode: () => mn, getInteriorNodes: () => Nn, getNextNode: () => jn, getPreviousNode: () => An, getStartlineNode: () => Mn, inRange: () => Sn, isChildNode: () => _n, isCommentNode: () => En, streamCst: () => hn, toDocumentSegment: () => yn, tokenToRange: () => vn });
function mn(e6) {
  let t2 = e6, n2 = false;
  for (; t2; ) {
    let e7 = se(t2.grammarSource, Et);
    if (e7 && e7.dataType) t2 = t2.container, n2 = true;
    else if (n2) return t2;
    else return;
  }
}
function hn(e6) {
  return new re(e6, (e7) => S(e7) ? e7.content : [], { includeRoot: true });
}
function gn(e6) {
  return hn(e6).filter(C);
}
function _n(e6, t2) {
  for (; e6.container; ) if (e6 = e6.container, e6 === t2) return true;
  return false;
}
function vn(e6) {
  return { start: { character: e6.startColumn - 1, line: e6.startLine - 1 }, end: { character: e6.endColumn, line: e6.endLine - 1 } };
}
function yn(e6) {
  if (!e6) return;
  let { offset: t2, end: n2, range: r2 } = e6;
  return { range: r2, offset: t2, end: n2, length: n2 - t2 };
}
var bn;
(function(e6) {
  e6[e6.Before = 0] = `Before`, e6[e6.After = 1] = `After`, e6[e6.OverlapFront = 2] = `OverlapFront`, e6[e6.OverlapBack = 3] = `OverlapBack`, e6[e6.Inside = 4] = `Inside`, e6[e6.Outside = 5] = `Outside`;
})(bn || (bn = {}));
function xn(e6, t2) {
  if (e6.end.line < t2.start.line || e6.end.line === t2.start.line && e6.end.character <= t2.start.character) return bn.Before;
  if (e6.start.line > t2.end.line || e6.start.line === t2.end.line && e6.start.character >= t2.end.character) return bn.After;
  let n2 = e6.start.line > t2.start.line || e6.start.line === t2.start.line && e6.start.character >= t2.start.character, r2 = e6.end.line < t2.end.line || e6.end.line === t2.end.line && e6.end.character <= t2.end.character;
  return n2 && r2 ? bn.Inside : n2 ? bn.OverlapBack : r2 ? bn.OverlapFront : bn.Outside;
}
function Sn(e6, t2) {
  return xn(e6, t2) > bn.After;
}
const Cn = /^[\w\p{L}]$/u;
function wn(e6, t2, n2 = Cn) {
  if (e6) {
    if (t2 > 0) {
      let r2 = t2 - e6.offset, i2 = e6.text.charAt(r2);
      n2.test(i2) || t2--;
    }
    return Dn(e6, t2);
  }
}
function Tn(e6, t2) {
  if (e6) {
    let n2 = An(e6, true);
    if (n2 && En(n2, t2)) return n2;
    if (w(e6)) {
      let n3 = e6.content.findIndex((e7) => !e7.hidden);
      for (let r2 = n3 - 1; r2 >= 0; r2--) {
        let n4 = e6.content[r2];
        if (En(n4, t2)) return n4;
      }
    }
  }
}
function En(e6, t2) {
  return C(e6) && t2.includes(e6.tokenType.name);
}
function Dn(e6, t2) {
  if (C(e6)) return e6;
  if (S(e6)) {
    let n2 = kn(e6, t2, false);
    if (n2) return Dn(n2, t2);
  }
}
function On(e6, t2) {
  if (C(e6)) return e6;
  if (S(e6)) {
    let n2 = kn(e6, t2, true);
    if (n2) return On(n2, t2);
  }
}
function kn(e6, t2, n2) {
  let r2 = 0, i2 = e6.content.length - 1, a2;
  for (; r2 <= i2; ) {
    let o2 = Math.floor((r2 + i2) / 2), s2 = e6.content[o2];
    if (s2.offset <= t2 && s2.end > t2) return s2;
    s2.end <= t2 ? (a2 = n2 ? s2 : void 0, r2 = o2 + 1) : i2 = o2 - 1;
  }
  return a2;
}
function An(e6, t2 = true) {
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
function jn(e6, t2 = true) {
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
function Mn(e6) {
  if (e6.range.start.character === 0) return e6;
  let t2 = e6.range.start.line, n2 = e6, r2;
  for (; e6.container; ) {
    let i2 = e6.container, a2 = r2 ?? i2.content.indexOf(e6);
    if (a2 === 0 ? (e6 = i2, r2 = void 0) : (r2 = a2 - 1, e6 = i2.content[r2]), e6.range.start.line !== t2) break;
    n2 = e6;
  }
  return n2;
}
function Nn(e6, t2) {
  let n2 = Pn(e6, t2);
  return n2 ? n2.parent.content.slice(n2.a + 1, n2.b) : [];
}
function Pn(e6, t2) {
  let n2 = Fn(e6), r2 = Fn(t2), i2;
  for (let e7 = 0; e7 < n2.length && e7 < r2.length; e7++) {
    let t3 = n2[e7], a2 = r2[e7];
    if (t3.parent === a2.parent) i2 = { parent: t3.parent, a: t3.index, b: a2.index };
    else break;
  }
  return i2;
}
function Fn(e6) {
  let t2 = [];
  for (; e6.container; ) {
    let n2 = e6.container, r2 = n2.content.indexOf(e6);
    t2.push({ parent: n2, index: r2 }), e6 = n2;
  }
  return t2.reverse();
}
var In = class extends Error {
  constructor(e6, t2) {
    super(e6 ? `${t2} at ${e6.range.start.line}:${e6.range.start.character}` : t2);
  }
};
function Ln(e6, t2 = `Error: Got unexpected value.`) {
  throw Error(t2);
}
function Rn(e6, t2 = `Error: Condition is violated.`) {
  if (!e6) throw Error(t2);
}
function P(e6) {
  return e6.charCodeAt(0);
}
function zn(e6, t2) {
  Array.isArray(e6) ? e6.forEach(function(e7) {
    t2.push(e7);
  }) : t2.push(e6);
}
function Bn(e6, t2) {
  if (e6[t2] === true) throw `duplicate flag ` + t2;
  e6[t2], e6[t2] = true;
}
function Vn(e6) {
  if (e6 === void 0) throw Error(`Internal Error - Should never get here!`);
  return true;
}
function Hn() {
  throw Error(`Internal Error - Should never get here!`);
}
function Un(e6) {
  return e6.type === `Character`;
}
const Wn = [];
for (let e6 = P(`0`); e6 <= P(`9`); e6++) Wn.push(e6);
const Gn = [P(`_`)].concat(Wn);
for (let e6 = P(`a`); e6 <= P(`z`); e6++) Gn.push(e6);
for (let e6 = P(`A`); e6 <= P(`Z`); e6++) Gn.push(e6);
const Kn = [P(` `), P(`\f`), P(`
`), P(`\r`), P(`	`), P(`\v`), P(`	`), P(`\xA0`), P(`\u1680`), P(`\u2000`), P(`\u2001`), P(`\u2002`), P(`\u2003`), P(`\u2004`), P(`\u2005`), P(`\u2006`), P(`\u2007`), P(`\u2008`), P(`\u2009`), P(`\u200A`), P(`\u2028`), P(`\u2029`), P(`\u202F`), P(`\u205F`), P(`\u3000`), P(`\uFEFF`)];
var qn = /[0-9a-fA-F]/, Jn = /[0-9]/, Yn = /[1-9]/, Xn = class {
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
        Bn(n2, `global`);
        break;
      case `i`:
        Bn(n2, `ignoreCase`);
        break;
      case `m`:
        Bn(n2, `multiLine`);
        break;
      case `u`:
        Bn(n2, `unicode`);
        break;
      case `y`:
        Bn(n2, `sticky`);
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
          case `<`:
            switch (this.popChar()) {
              case `=`:
                t2 = `Lookbehind`;
                break;
              case `!`:
                t2 = `NegativeLookbehind`;
            }
            break;
        }
        Vn(t2);
        let n2 = this.disjunction();
        return this.consumeChar(`)`), { type: t2, value: n2, loc: this.loc(e6) };
    }
    return Hn();
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
        Vn(t2);
        break;
    }
    if (!(e6 === true && t2 === void 0) && Vn(t2)) return this.peekChar(0) === `?` ? (this.consumeChar(`?`), t2.greedy = false) : t2.greedy = true, t2.type = `Quantifier`, t2.loc = this.loc(n2), t2;
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
    return e6 === void 0 && this.isPatternCharacter() && (e6 = this.patternCharacter()), Vn(e6) ? (e6.loc = this.loc(t2), this.isQuantifier() && (e6.quantifier = this.quantifier()), e6) : Hn();
  }
  dotAll() {
    return this.consumeChar(`.`), { type: `Set`, complement: true, value: [P(`
`), P(`\r`), P(`\u2028`), P(`\u2029`)] };
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
        e6 = Wn;
        break;
      case `D`:
        e6 = Wn, t2 = true;
        break;
      case `s`:
        e6 = Kn;
        break;
      case `S`:
        e6 = Kn, t2 = true;
        break;
      case `w`:
        e6 = Gn;
        break;
      case `W`:
        e6 = Gn, t2 = true;
        break;
    }
    return Vn(e6) ? { type: `Set`, value: e6, complement: t2 } : Hn();
  }
  controlEscapeAtom() {
    let e6;
    switch (this.popChar()) {
      case `f`:
        e6 = P(`\f`);
        break;
      case `n`:
        e6 = P(`
`);
        break;
      case `r`:
        e6 = P(`\r`);
        break;
      case `t`:
        e6 = P(`	`);
        break;
      case `v`:
        e6 = P(`\v`);
        break;
    }
    return Vn(e6) ? { type: `Character`, value: e6 } : Hn();
  }
  controlLetterEscapeAtom() {
    this.consumeChar(`c`);
    let e6 = this.popChar();
    if (/[a-zA-Z]/.test(e6) === false) throw Error(`Invalid `);
    return { type: `Character`, value: e6.toUpperCase().charCodeAt(0) - 64 };
  }
  nulCharacterAtom() {
    return this.consumeChar(`0`), { type: `Character`, value: P(`\0`) };
  }
  hexEscapeSequenceAtom() {
    return this.consumeChar(`x`), this.parseHexDigits(2);
  }
  regExpUnicodeEscapeSequenceAtom() {
    return this.consumeChar(`u`), this.parseHexDigits(4);
  }
  identityEscapeAtom() {
    return { type: `Character`, value: P(this.popChar()) };
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
        return { type: `Character`, value: P(this.popChar()) };
    }
  }
  characterClass() {
    let e6 = [], t2 = false;
    for (this.consumeChar(`[`), this.peekChar(0) === `^` && (this.consumeChar(`^`), t2 = true); this.isClassAtom(); ) {
      let t3 = this.classAtom();
      if (t3.type, Un(t3) && this.isRangeDash()) {
        this.consumeChar(`-`);
        let n2 = this.classAtom();
        if (n2.type, Un(n2)) {
          if (n2.value < t3.value) throw Error(`Range out of order in character class`);
          e6.push({ from: t3.value, to: n2.value });
        } else zn(t3.value, e6), e6.push(P(`-`)), zn(n2.value, e6);
      } else zn(t3.value, e6);
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
        return this.consumeChar(`b`), { type: `Character`, value: P(`\b`) };
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
    if (Yn.test(e6) === false) throw Error(`Expecting a positive integer`);
    for (; Jn.test(this.peekChar(0)); ) e6 += this.popChar();
    return parseInt(e6, 10);
  }
  integerIncludingZero() {
    let e6 = this.popChar();
    if (Jn.test(e6) === false) throw Error(`Expecting an integer`);
    for (; Jn.test(this.peekChar(0)); ) e6 += this.popChar();
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
        return { type: `Character`, value: P(e6) };
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
    return Jn.test(this.peekChar(0));
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
        return this.peekChar(1) === `?` && (this.peekChar(2) === `=` || this.peekChar(2) === `!` || this.peekChar(2) === `<` && (this.peekChar(3) === `=` || this.peekChar(3) === `!`));
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
      if (qn.test(e7) === false) throw Error(`Expecting a HexDecimal digits`);
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
}, Zn = class {
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
      case `Lookbehind`:
        this.visitLookbehind(e6);
        break;
      case `NegativeLookbehind`:
        this.visitNegativeLookbehind(e6);
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
  visitLookbehind(e6) {
  }
  visitNegativeLookbehind(e6) {
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
}, Qn = i({ NEWLINE_REGEXP: () => $n, escapeRegExp: () => or, getTerminalParts: () => nr, isMultilineComment: () => rr, isWhitespace: () => ar, partialMatches: () => sr, partialRegExp: () => cr, whitespaceCharacters: () => ir });
const $n = /\r?\n/gm;
var er = new Xn(), tr = new class extends Zn {
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
      let e7 = or(t2);
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
function nr(e6) {
  try {
    typeof e6 != `string` && (e6 = e6.source), e6 = `/${e6}/`;
    let t2 = er.pattern(e6), n2 = [];
    for (let r2 of t2.value.value) tr.reset(e6), tr.visit(r2), n2.push({ start: tr.startRegexp, end: tr.endRegex });
    return n2;
  } catch {
    return [];
  }
}
function rr(e6) {
  try {
    return typeof e6 == `string` && (e6 = new RegExp(e6)), e6 = e6.toString(), tr.reset(e6), tr.visit(er.pattern(e6)), tr.multiline;
  } catch {
    return false;
  }
}
const ir = `\f
\r	\v \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`.split(``);
function ar(e6) {
  let t2 = typeof e6 == `string` ? new RegExp(e6) : e6;
  return ir.some((e7) => t2.test(e7));
}
function or(e6) {
  return e6.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
}
function sr(e6, t2) {
  let n2 = cr(e6), r2 = t2.match(n2);
  return !!r2 && r2[0].length > 0;
}
function cr(e6) {
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
var lr = i({ findAssignment: () => Cr, findNameAssignment: () => wr, findNodeForKeyword: () => xr, findNodeForProperty: () => vr, findNodesForKeyword: () => br, findNodesForKeywordInternal: () => Sr, findNodesForProperty: () => _r, getActionAtElement: () => Er, getActionType: () => Ir, getAllReachableRules: () => fr, getAllRulesUsedForCrossReferences: () => mr, getCrossReferenceTerminal: () => hr, getEntryRule: () => ur, getExplicitRuleType: () => Pr, getHiddenRules: () => dr, getRuleType: () => Rr, getRuleTypeName: () => Lr, getTypeName: () => Fr, isArrayCardinality: () => Or, isArrayOperator: () => kr, isCommentTerminal: () => gr, isDataType: () => Mr, isDataTypeRule: () => Ar, isOptionalCardinality: () => Dr, terminalRegex: () => zr });
function ur(e6) {
  return e6.rules.find((e7) => Et(e7) && e7.entry);
}
function dr(e6) {
  return e6.rules.filter((e7) => Kt(e7) && e7.hidden);
}
function fr(e6, t2) {
  let n2 = /* @__PURE__ */ new Set(), r2 = ur(e6);
  if (!r2) return new Set(e6.rules);
  let i2 = [r2].concat(dr(e6));
  for (let e7 of i2) pr(e7, n2, t2);
  let a2 = /* @__PURE__ */ new Set();
  for (let t3 of e6.rules) (n2.has(t3.name) || Kt(t3) && t3.hidden) && a2.add(t3);
  return a2;
}
function pr(e6, t2, n2) {
  t2.add(e6.name), A(e6).forEach((e7) => {
    if (Pt(e7) || n2 && Jt(e7)) {
      let r2 = e7.rule.ref;
      r2 && !t2.has(r2.name) && pr(r2, t2, n2);
    }
  });
}
function mr(e6) {
  let t2 = /* @__PURE__ */ new Set();
  return A(e6).forEach((e7) => {
    We(e7) && (Et(e7.type.ref) && t2.add(e7.type.ref), nt(e7.type.ref) && Et(e7.type.ref.$container) && t2.add(e7.type.ref.$container));
  }), t2;
}
function hr(e6) {
  var _a3;
  if (e6.terminal) return e6.terminal;
  if (e6.type.ref) return (_a3 = wr(e6.type.ref)) == null ? void 0 : _a3.terminal;
}
function gr(e6) {
  return e6.hidden && !ar(zr(e6));
}
function _r(e6, t2) {
  return !e6 || !t2 ? [] : yr(e6, t2, e6.astNode, true);
}
function vr(e6, t2, n2) {
  if (!e6 || !t2) return;
  let r2 = yr(e6, t2, e6.astNode, true);
  if (r2.length !== 0) return n2 = n2 === void 0 ? 0 : Math.max(0, Math.min(n2, r2.length - 1)), r2[n2];
}
function yr(e6, t2, n2, r2) {
  if (!r2) {
    let n3 = se(e6.grammarSource, Pe);
    if (n3 && n3.feature === t2) return [e6];
  }
  return S(e6) && e6.astNode === n2 ? e6.content.flatMap((e7) => yr(e7, t2, n2, false)) : [];
}
function br(e6, t2) {
  return e6 ? Sr(e6, t2, e6 == null ? void 0 : e6.astNode) : [];
}
function xr(e6, t2, n2) {
  if (!e6) return;
  let r2 = Sr(e6, t2, e6 == null ? void 0 : e6.astNode);
  if (r2.length !== 0) return n2 = n2 === void 0 ? 0 : Math.max(0, Math.min(n2, r2.length - 1)), r2[n2];
}
function Sr(e6, t2, n2) {
  if (e6.astNode !== n2) return [];
  if (ft(e6.grammarSource) && e6.grammarSource.value === t2) return [e6];
  let r2 = hn(e6).iterator(), i2, a2 = [];
  do
    if (i2 = r2.next(), !i2.done) {
      let e7 = i2.value;
      e7.astNode === n2 ? ft(e7.grammarSource) && e7.grammarSource.value === t2 && a2.push(e7) : r2.prune();
    }
  while (!i2.done);
  return a2;
}
function Cr(e6) {
  var _a3;
  let t2 = e6.astNode;
  for (; t2 === ((_a3 = e6.container) == null ? void 0 : _a3.astNode); ) {
    let t3 = se(e6.grammarSource, Pe);
    if (t3) return t3;
    e6 = e6.container;
  }
}
function wr(e6) {
  let t2 = e6;
  return nt(t2) && (Ee(t2.$container) ? t2 = t2.$container.$container : xe(t2.$container) ? t2 = t2.$container : Ln(t2.$container)), Tr(e6, t2, /* @__PURE__ */ new Map());
}
function Tr(e6, t2, n2) {
  var _a3;
  function r2(t3, r3) {
    let i2;
    return se(t3, Pe) || (i2 = Tr(r3, r3, n2)), n2.set(e6, i2), i2;
  }
  if (n2.has(e6)) return n2.get(e6);
  n2.set(e6, void 0);
  for (let i2 of A(t2)) if (Pe(i2) && i2.feature.toLowerCase() === `name`) return n2.set(e6, i2), i2;
  else if (Pt(i2) && Et(i2.rule.ref)) return r2(i2, i2.rule.ref);
  else if (It(i2) && ((_a3 = i2.typeRef) == null ? void 0 : _a3.ref)) return r2(i2, i2.typeRef.ref);
}
function Er(e6) {
  let t2 = e6.$container;
  if (et(t2)) {
    let n2 = t2.elements, r2 = n2.indexOf(e6);
    for (let e7 = r2 - 1; e7 >= 0; e7--) {
      let t3 = n2[e7];
      if (Ee(t3)) return t3;
      {
        let t4 = A(n2[e7]).find(Ee);
        if (t4) return t4;
      }
    }
  }
  if (ye(t2)) return Er(t2);
}
function Dr(e6, t2) {
  return e6 === `?` || e6 === `*` || et(t2) && !!t2.guardCondition;
}
function Or(e6) {
  return e6 === `*` || e6 === `+`;
}
function kr(e6) {
  return e6 === `+=`;
}
function Ar(e6) {
  return jr(e6, /* @__PURE__ */ new Set());
}
function jr(e6, t2) {
  if (t2.has(e6)) return true;
  t2.add(e6);
  for (let n2 of A(e6)) if (Pt(n2)) {
    if (!n2.rule.ref || Et(n2.rule.ref) && !jr(n2.rule.ref, t2) || it(n2.rule.ref)) return false;
  } else if (Pe(n2)) return false;
  else if (Ee(n2)) return false;
  return !!e6.definition;
}
function Mr(e6) {
  return Nr(e6.type, /* @__PURE__ */ new Set());
}
function Nr(e6, t2) {
  if (t2.has(e6)) return true;
  if (t2.add(e6), Me(e6) || Ot(e6)) return false;
  if (nn(e6)) return e6.types.every((e7) => Nr(e7, t2));
  if (It(e6)) {
    if (e6.primitiveType !== void 0 || e6.stringType !== void 0) return true;
    if (e6.typeRef !== void 0) {
      let n2 = e6.typeRef.ref;
      return Xt(n2) ? Nr(n2.type, t2) : false;
    } else return false;
  } else return false;
}
function Pr(e6) {
  if (!Kt(e6)) {
    if (e6.inferredType) return e6.inferredType.name;
    if (e6.dataType) return e6.dataType;
    if (e6.returnType) {
      let t2 = e6.returnType.ref;
      if (t2) return t2.name;
    }
  }
}
function Fr(e6) {
  if (xe(e6)) return Et(e6) && Ar(e6) ? e6.name : Pr(e6) ?? e6.name;
  if (ut(e6) || Xt(e6) || Mt(e6)) return e6.name;
  if (Ee(e6)) {
    let t2 = Ir(e6);
    if (t2) return t2;
  } else if (nt(e6)) return e6.name;
  throw Error(`Cannot get name of Unknown Type`);
}
function Ir(e6) {
  var _a3;
  if (e6.inferredType) return e6.inferredType.name;
  if ((_a3 = e6.type) == null ? void 0 : _a3.ref) return Fr(e6.type.ref);
}
function Lr(e6) {
  var _a3;
  return Kt(e6) ? ((_a3 = e6.type) == null ? void 0 : _a3.name) ?? `string` : Et(e6) && Ar(e6) ? e6.name : Pr(e6) ?? e6.name;
}
function Rr(e6) {
  var _a3;
  return Kt(e6) ? ((_a3 = e6.type) == null ? void 0 : _a3.name) ?? `string` : Pr(e6) ?? e6.name;
}
function zr(e6) {
  let t2 = { s: false, i: false, u: false }, n2 = Vr(e6.definition, t2), r2 = Object.entries(t2).filter(([, e7]) => e7).map(([e7]) => e7).join(``);
  return new RegExp(n2, r2);
}
var Br = `[\\s\\S]`;
function Vr(e6, t2) {
  var _a3;
  if (Bt(e6)) return Hr(e6);
  if (Wt(e6)) return Ur(e6);
  if (Re(e6)) return Kr(e6);
  if (Jt(e6)) {
    let t3 = e6.rule.ref;
    if (!t3) throw Error(`Missing rule reference.`);
    return Jr(Vr(t3.definition), { cardinality: e6.cardinality, lookahead: e6.lookahead, parenthesized: e6.parenthesized });
  } else if (gt(e6)) return Gr(e6);
  else if (sn(e6)) return Wr(e6);
  else if (At(e6)) {
    let n2 = e6.regex.lastIndexOf(`/`), r2 = e6.regex.substring(1, n2), i2 = e6.regex.substring(n2 + 1);
    return t2 && (t2.i = i2.includes(`i`), t2.s = i2.includes(`s`), t2.u = i2.includes(`u`)), Jr(r2, { cardinality: e6.cardinality, lookahead: e6.lookahead, parenthesized: e6.parenthesized, wrap: false });
  } else if (dn(e6)) return Jr(Br, { cardinality: e6.cardinality, lookahead: e6.lookahead, parenthesized: e6.parenthesized });
  else throw Error(`Invalid terminal element: ${e6 == null ? void 0 : e6.$type}, ${(_a3 = e6 == null ? void 0 : e6.$cstNode) == null ? void 0 : _a3.text}`);
}
function Hr(e6) {
  return Jr(e6.elements.map((e7) => Vr(e7)).join(`|`), { cardinality: e6.cardinality, lookahead: e6.lookahead, parenthesized: e6.parenthesized, wrap: false });
}
function Ur(e6) {
  return Jr(e6.elements.map((e7) => Vr(e7)).join(``), { cardinality: e6.cardinality, lookahead: e6.lookahead, parenthesized: e6.parenthesized, wrap: false });
}
function Wr(e6) {
  return Jr(`${Br}*?${Vr(e6.terminal)}`, { cardinality: e6.cardinality, lookahead: e6.lookahead, parenthesized: e6.parenthesized });
}
function Gr(e6) {
  return Jr(`(?!${Vr(e6.terminal)})${Br}*?`, { cardinality: e6.cardinality, lookahead: e6.lookahead, parenthesized: e6.parenthesized });
}
function Kr(e6) {
  return e6.right ? Jr(`[${qr(e6.left)}-${qr(e6.right)}]`, { cardinality: e6.cardinality, lookahead: e6.lookahead, parenthesized: e6.parenthesized, wrap: false }) : Jr(qr(e6.left), { cardinality: e6.cardinality, lookahead: e6.lookahead, parenthesized: e6.parenthesized, wrap: false });
}
function qr(e6) {
  return or(e6.value);
}
function Jr(e6, t2) {
  return (t2.parenthesized || t2.lookahead || t2.wrap !== false) && (e6 = `(${t2.lookahead ?? (t2.parenthesized ? `` : `?:`)}${e6})`), t2.cardinality ? `${e6}${t2.cardinality}` : e6;
}
function Yr(e6) {
  let t2 = [], n2 = e6.Grammar;
  for (let e7 of n2.rules) Kt(e7) && gr(e7) && rr(zr(e7)) && t2.push(e7.name);
  return { multilineCommentRules: t2, nameRegexp: Cn };
}
var Xr = typeof global == `object` && global && global.Object === Object && global, Zr = typeof self == `object` && self && self.Object === Object && self, Qr = Xr || Zr || Function(`return this`)(), $r = Qr.Symbol, ei = Object.prototype, ti = ei.hasOwnProperty, ni = ei.toString, ri = $r ? $r.toStringTag : void 0;
function ii(e6) {
  var t2 = ti.call(e6, ri), n2 = e6[ri];
  try {
    e6[ri] = void 0;
    var r2 = true;
  } catch {
  }
  var i2 = ni.call(e6);
  return r2 && (t2 ? e6[ri] = n2 : delete e6[ri]), i2;
}
var ai = ii, oi = Object.prototype.toString;
function si(e6) {
  return oi.call(e6);
}
var ci = si, li = `[object Null]`, ui = `[object Undefined]`, di = $r ? $r.toStringTag : void 0;
function fi(e6) {
  return e6 == null ? e6 === void 0 ? ui : li : di && di in Object(e6) ? ai(e6) : ci(e6);
}
var pi = fi;
function mi(e6) {
  return typeof e6 == `object` && !!e6;
}
var hi = mi, gi = `[object Symbol]`;
function _i(e6) {
  return typeof e6 == `symbol` || hi(e6) && pi(e6) == gi;
}
var vi = _i;
function yi(e6, t2) {
  for (var n2 = -1, r2 = e6 == null ? 0 : e6.length, i2 = Array(r2); ++n2 < r2; ) i2[n2] = t2(e6[n2], n2, e6);
  return i2;
}
var bi = yi, F = Array.isArray, xi = 1 / 0, Si = $r ? $r.prototype : void 0, Ci = Si ? Si.toString : void 0;
function wi(e6) {
  if (typeof e6 == `string`) return e6;
  if (F(e6)) return bi(e6, wi) + ``;
  if (vi(e6)) return Ci ? Ci.call(e6) : ``;
  var t2 = e6 + ``;
  return t2 == `0` && 1 / e6 == -xi ? `-0` : t2;
}
var Ti = wi, Ei = /\s/;
function Di(e6) {
  for (var t2 = e6.length; t2-- && Ei.test(e6.charAt(t2)); ) ;
  return t2;
}
var Oi = Di, ki = /^\s+/;
function Ai(e6) {
  return e6 && e6.slice(0, Oi(e6) + 1).replace(ki, ``);
}
var ji = Ai;
function Mi(e6) {
  var t2 = typeof e6;
  return e6 != null && (t2 == `object` || t2 == `function`);
}
var Ni = Mi, Pi = NaN, Fi = /^[-+]0x[0-9a-f]+$/i, Ii = /^0b[01]+$/i, Li = /^0o[0-7]+$/i, Ri = parseInt;
function zi(e6) {
  if (typeof e6 == `number`) return e6;
  if (vi(e6)) return Pi;
  if (Ni(e6)) {
    var t2 = typeof e6.valueOf == `function` ? e6.valueOf() : e6;
    e6 = Ni(t2) ? t2 + `` : t2;
  }
  if (typeof e6 != `string`) return e6 === 0 ? e6 : +e6;
  e6 = ji(e6);
  var n2 = Ii.test(e6);
  return n2 || Li.test(e6) ? Ri(e6.slice(2), n2 ? 2 : 8) : Fi.test(e6) ? Pi : +e6;
}
var Bi = zi, Vi = 1 / 0, Hi = 17976931348623157e292;
function Ui(e6) {
  return e6 ? (e6 = Bi(e6), e6 === Vi || e6 === -Vi ? (e6 < 0 ? -1 : 1) * Hi : e6 === e6 ? e6 : 0) : e6 === 0 ? e6 : 0;
}
var Wi = Ui;
function Gi(e6) {
  var t2 = Wi(e6), n2 = t2 % 1;
  return t2 === t2 ? n2 ? t2 - n2 : t2 : 0;
}
var Ki = Gi;
function qi(e6) {
  return e6;
}
var Ji = qi, Yi = `[object AsyncFunction]`, Xi = `[object Function]`, Zi = `[object GeneratorFunction]`, Qi = `[object Proxy]`;
function $i(e6) {
  if (!Ni(e6)) return false;
  var t2 = pi(e6);
  return t2 == Xi || t2 == Zi || t2 == Yi || t2 == Qi;
}
var ea = $i, ta = Qr[`__core-js_shared__`], na = (function() {
  var e6 = /[^.]+$/.exec(ta && ta.keys && ta.keys.IE_PROTO || ``);
  return e6 ? `Symbol(src)_1.` + e6 : ``;
})();
function ra(e6) {
  return !!na && na in e6;
}
var ia = ra, aa = Function.prototype.toString;
function oa(e6) {
  if (e6 != null) {
    try {
      return aa.call(e6);
    } catch {
    }
    try {
      return e6 + ``;
    } catch {
    }
  }
  return ``;
}
var sa = oa, ca = /[\\^$.*+?()[\]{}|]/g, la = /^\[object .+?Constructor\]$/, ua = Function.prototype, da = Object.prototype, fa = ua.toString, pa = da.hasOwnProperty, ma = RegExp(`^` + fa.call(pa).replace(ca, `\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, `$1.*?`) + `$`);
function ha(e6) {
  return !Ni(e6) || ia(e6) ? false : (ea(e6) ? ma : la).test(sa(e6));
}
var ga = ha;
function _a(e6, t2) {
  return e6 == null ? void 0 : e6[t2];
}
var va = _a;
function ya(e6, t2) {
  var n2 = va(e6, t2);
  return ga(n2) ? n2 : void 0;
}
var ba = ya, xa = ba(Qr, `WeakMap`), Sa = Object.create, Ca = /* @__PURE__ */ (function() {
  function e6() {
  }
  return function(t2) {
    if (!Ni(t2)) return {};
    if (Sa) return Sa(t2);
    e6.prototype = t2;
    var n2 = new e6();
    return e6.prototype = void 0, n2;
  };
})();
function wa(e6, t2, n2) {
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
var Ta = wa;
function Ea() {
}
var Da = Ea;
function Oa(e6, t2) {
  var n2 = -1, r2 = e6.length;
  for (t2 || (t2 = Array(r2)); ++n2 < r2; ) t2[n2] = e6[n2];
  return t2;
}
var ka = Oa, Aa = 800, ja = 16, Ma = Date.now;
function Na(e6) {
  var t2 = 0, n2 = 0;
  return function() {
    var r2 = Ma(), i2 = ja - (r2 - n2);
    if (n2 = r2, i2 > 0) {
      if (++t2 >= Aa) return arguments[0];
    } else t2 = 0;
    return e6.apply(void 0, arguments);
  };
}
var Pa = Na;
function Fa(e6) {
  return function() {
    return e6;
  };
}
var Ia = Fa, La = (function() {
  try {
    var e6 = ba(Object, `defineProperty`);
    return e6({}, ``, {}), e6;
  } catch {
  }
})(), Ra = Pa(La ? function(e6, t2) {
  return La(e6, `toString`, { configurable: true, enumerable: false, value: Ia(t2), writable: true });
} : Ji);
function za(e6, t2) {
  for (var n2 = -1, r2 = e6 == null ? 0 : e6.length; ++n2 < r2 && t2(e6[n2], n2, e6) !== false; ) ;
  return e6;
}
var Ba = za;
function Va(e6, t2, n2, r2) {
  for (var i2 = e6.length, a2 = n2 + (r2 ? 1 : -1); r2 ? a2-- : ++a2 < i2; ) if (t2(e6[a2], a2, e6)) return a2;
  return -1;
}
var Ha = Va;
function Ua(e6) {
  return e6 !== e6;
}
var Wa = Ua;
function Ga(e6, t2, n2) {
  for (var r2 = n2 - 1, i2 = e6.length; ++r2 < i2; ) if (e6[r2] === t2) return r2;
  return -1;
}
var Ka = Ga;
function qa(e6, t2, n2) {
  return t2 === t2 ? Ka(e6, t2, n2) : Ha(e6, Wa, n2);
}
var Ja = qa;
function Ya(e6, t2) {
  return !!(e6 != null && e6.length) && Ja(e6, t2, 0) > -1;
}
var Xa = Ya, Za = 9007199254740991, Qa = /^(?:0|[1-9]\d*)$/;
function $a(e6, t2) {
  var n2 = typeof e6;
  return t2 ?? (t2 = Za), !!t2 && (n2 == `number` || n2 != `symbol` && Qa.test(e6)) && e6 > -1 && e6 % 1 == 0 && e6 < t2;
}
var eo = $a;
function to(e6, t2, n2) {
  t2 == `__proto__` && La ? La(e6, t2, { configurable: true, enumerable: true, value: n2, writable: true }) : e6[t2] = n2;
}
var no = to;
function ro(e6, t2) {
  return e6 === t2 || e6 !== e6 && t2 !== t2;
}
var io = ro, ao = Object.prototype.hasOwnProperty;
function oo(e6, t2, n2) {
  var r2 = e6[t2];
  (!(ao.call(e6, t2) && io(r2, n2)) || n2 === void 0 && !(t2 in e6)) && no(e6, t2, n2);
}
var so = oo;
function co(e6, t2, n2, r2) {
  var i2 = !n2;
  n2 || (n2 = {});
  for (var a2 = -1, o2 = t2.length; ++a2 < o2; ) {
    var s2 = t2[a2], c2 = r2 ? r2(n2[s2], e6[s2], s2, n2, e6) : void 0;
    c2 === void 0 && (c2 = e6[s2]), i2 ? no(n2, s2, c2) : so(n2, s2, c2);
  }
  return n2;
}
var lo = co, uo = Math.max;
function fo(e6, t2, n2) {
  return t2 = uo(t2 === void 0 ? e6.length - 1 : t2, 0), function() {
    for (var r2 = arguments, i2 = -1, a2 = uo(r2.length - t2, 0), o2 = Array(a2); ++i2 < a2; ) o2[i2] = r2[t2 + i2];
    i2 = -1;
    for (var s2 = Array(t2 + 1); ++i2 < t2; ) s2[i2] = r2[i2];
    return s2[t2] = n2(o2), Ta(e6, this, s2);
  };
}
var po = fo;
function mo(e6, t2) {
  return Ra(po(e6, t2, Ji), e6 + ``);
}
var ho = mo, go = 9007199254740991;
function _o(e6) {
  return typeof e6 == `number` && e6 > -1 && e6 % 1 == 0 && e6 <= go;
}
var vo = _o;
function yo(e6) {
  return e6 != null && vo(e6.length) && !ea(e6);
}
var bo = yo;
function xo(e6, t2, n2) {
  if (!Ni(n2)) return false;
  var r2 = typeof t2;
  return (r2 == `number` ? bo(n2) && eo(t2, n2.length) : r2 == `string` && t2 in n2) ? io(n2[t2], e6) : false;
}
var So = xo;
function Co(e6) {
  return ho(function(t2, n2) {
    var r2 = -1, i2 = n2.length, a2 = i2 > 1 ? n2[i2 - 1] : void 0, o2 = i2 > 2 ? n2[2] : void 0;
    for (a2 = e6.length > 3 && typeof a2 == `function` ? (i2--, a2) : void 0, o2 && So(n2[0], n2[1], o2) && (a2 = i2 < 3 ? void 0 : a2, i2 = 1), t2 = Object(t2); ++r2 < i2; ) {
      var s2 = n2[r2];
      s2 && e6(t2, s2, r2, a2);
    }
    return t2;
  });
}
var wo = Co, To = Object.prototype;
function Eo(e6) {
  var t2 = e6 && e6.constructor;
  return e6 === (typeof t2 == `function` && t2.prototype || To);
}
var Do = Eo;
function Oo(e6, t2) {
  for (var n2 = -1, r2 = Array(e6); ++n2 < e6; ) r2[n2] = t2(n2);
  return r2;
}
var ko = Oo, Ao = `[object Arguments]`;
function jo(e6) {
  return hi(e6) && pi(e6) == Ao;
}
var Mo = jo, No = Object.prototype, Po = No.hasOwnProperty, Fo = No.propertyIsEnumerable, Io = Mo(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Mo : function(e6) {
  return hi(e6) && Po.call(e6, `callee`) && !Fo.call(e6, `callee`);
};
function Lo() {
  return false;
}
var Ro = Lo, zo = typeof exports == `object` && exports && !exports.nodeType && exports, Bo = zo && typeof module == `object` && module && !module.nodeType && module, Vo = Bo && Bo.exports === zo ? Qr.Buffer : void 0, Ho = (Vo ? Vo.isBuffer : void 0) || Ro, Uo = `[object Arguments]`, Wo = `[object Array]`, Go = `[object Boolean]`, Ko = `[object Date]`, qo = `[object Error]`, Jo = `[object Function]`, Yo = `[object Map]`, Xo = `[object Number]`, Zo = `[object Object]`, Qo = `[object RegExp]`, $o = `[object Set]`, es = `[object String]`, ts = `[object WeakMap]`, ns = `[object ArrayBuffer]`, rs = `[object DataView]`, is = `[object Float32Array]`, as = `[object Float64Array]`, os = `[object Int8Array]`, ss = `[object Int16Array]`, cs = `[object Int32Array]`, ls = `[object Uint8Array]`, us = `[object Uint8ClampedArray]`, ds = `[object Uint16Array]`, fs = `[object Uint32Array]`, I = {};
I[is] = I[as] = I[os] = I[ss] = I[cs] = I[ls] = I[us] = I[ds] = I[fs] = true, I[Uo] = I[Wo] = I[ns] = I[Go] = I[rs] = I[Ko] = I[qo] = I[Jo] = I[Yo] = I[Xo] = I[Zo] = I[Qo] = I[$o] = I[es] = I[ts] = false;
function ps(e6) {
  return hi(e6) && vo(e6.length) && !!I[pi(e6)];
}
var ms = ps;
function hs(e6) {
  return function(t2) {
    return e6(t2);
  };
}
var gs = hs, _s = typeof exports == `object` && exports && !exports.nodeType && exports, vs = _s && typeof module == `object` && module && !module.nodeType && module, ys = vs && vs.exports === _s && Xr.process, bs = (function() {
  try {
    return vs && vs.require && vs.require(`util`).types || ys && ys.binding && ys.binding(`util`);
  } catch {
  }
})(), xs = bs && bs.isTypedArray, Ss = xs ? gs(xs) : ms, Cs = Object.prototype.hasOwnProperty;
function ws(e6, t2) {
  var n2 = F(e6), r2 = !n2 && Io(e6), i2 = !n2 && !r2 && Ho(e6), a2 = !n2 && !r2 && !i2 && Ss(e6), o2 = n2 || r2 || i2 || a2, s2 = o2 ? ko(e6.length, String) : [], c2 = s2.length;
  for (var l2 in e6) (t2 || Cs.call(e6, l2)) && !(o2 && (l2 == `length` || i2 && (l2 == `offset` || l2 == `parent`) || a2 && (l2 == `buffer` || l2 == `byteLength` || l2 == `byteOffset`) || eo(l2, c2))) && s2.push(l2);
  return s2;
}
var Ts = ws;
function Es(e6, t2) {
  return function(n2) {
    return e6(t2(n2));
  };
}
var Ds = Es, Os = Ds(Object.keys, Object), ks = Object.prototype.hasOwnProperty;
function As(e6) {
  if (!Do(e6)) return Os(e6);
  var t2 = [];
  for (var n2 in Object(e6)) ks.call(e6, n2) && n2 != `constructor` && t2.push(n2);
  return t2;
}
var js = As;
function Ms(e6) {
  return bo(e6) ? Ts(e6) : js(e6);
}
var Ns = Ms, Ps = Object.prototype.hasOwnProperty, Fs = wo(function(e6, t2) {
  if (Do(t2) || bo(t2)) {
    lo(t2, Ns(t2), e6);
    return;
  }
  for (var n2 in t2) Ps.call(t2, n2) && so(e6, n2, t2[n2]);
});
function Is(e6) {
  var t2 = [];
  if (e6 != null) for (var n2 in Object(e6)) t2.push(n2);
  return t2;
}
var Ls = Is, Rs = Object.prototype.hasOwnProperty;
function zs(e6) {
  if (!Ni(e6)) return Ls(e6);
  var t2 = Do(e6), n2 = [];
  for (var r2 in e6) r2 == `constructor` && (t2 || !Rs.call(e6, r2)) || n2.push(r2);
  return n2;
}
var Bs = zs;
function Vs(e6) {
  return bo(e6) ? Ts(e6, true) : Bs(e6);
}
var Hs = Vs, Us = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ws = /^\w*$/;
function Gs(e6, t2) {
  if (F(e6)) return false;
  var n2 = typeof e6;
  return n2 == `number` || n2 == `symbol` || n2 == `boolean` || e6 == null || vi(e6) ? true : Ws.test(e6) || !Us.test(e6) || t2 != null && e6 in Object(t2);
}
var Ks = Gs, qs = ba(Object, `create`);
function Js() {
  this.__data__ = qs ? qs(null) : {}, this.size = 0;
}
var Ys = Js;
function Xs(e6) {
  var t2 = this.has(e6) && delete this.__data__[e6];
  return this.size -= t2 ? 1 : 0, t2;
}
var Zs = Xs, Qs = `__lodash_hash_undefined__`, $s = Object.prototype.hasOwnProperty;
function ec(e6) {
  var t2 = this.__data__;
  if (qs) {
    var n2 = t2[e6];
    return n2 === Qs ? void 0 : n2;
  }
  return $s.call(t2, e6) ? t2[e6] : void 0;
}
var tc = ec, nc = Object.prototype.hasOwnProperty;
function rc(e6) {
  var t2 = this.__data__;
  return qs ? t2[e6] !== void 0 : nc.call(t2, e6);
}
var ic = rc, ac = `__lodash_hash_undefined__`;
function oc(e6, t2) {
  var n2 = this.__data__;
  return this.size += this.has(e6) ? 0 : 1, n2[e6] = qs && t2 === void 0 ? ac : t2, this;
}
var sc = oc;
function cc(e6) {
  var t2 = -1, n2 = e6 == null ? 0 : e6.length;
  for (this.clear(); ++t2 < n2; ) {
    var r2 = e6[t2];
    this.set(r2[0], r2[1]);
  }
}
cc.prototype.clear = Ys, cc.prototype.delete = Zs, cc.prototype.get = tc, cc.prototype.has = ic, cc.prototype.set = sc;
var lc = cc;
function uc() {
  this.__data__ = [], this.size = 0;
}
var dc = uc;
function fc(e6, t2) {
  for (var n2 = e6.length; n2--; ) if (io(e6[n2][0], t2)) return n2;
  return -1;
}
var pc = fc, mc = Array.prototype.splice;
function hc(e6) {
  var t2 = this.__data__, n2 = pc(t2, e6);
  return n2 < 0 ? false : (n2 == t2.length - 1 ? t2.pop() : mc.call(t2, n2, 1), --this.size, true);
}
var gc = hc;
function _c(e6) {
  var t2 = this.__data__, n2 = pc(t2, e6);
  return n2 < 0 ? void 0 : t2[n2][1];
}
var vc = _c;
function yc(e6) {
  return pc(this.__data__, e6) > -1;
}
var bc = yc;
function xc(e6, t2) {
  var n2 = this.__data__, r2 = pc(n2, e6);
  return r2 < 0 ? (++this.size, n2.push([e6, t2])) : n2[r2][1] = t2, this;
}
var Sc = xc;
function Cc(e6) {
  var t2 = -1, n2 = e6 == null ? 0 : e6.length;
  for (this.clear(); ++t2 < n2; ) {
    var r2 = e6[t2];
    this.set(r2[0], r2[1]);
  }
}
Cc.prototype.clear = dc, Cc.prototype.delete = gc, Cc.prototype.get = vc, Cc.prototype.has = bc, Cc.prototype.set = Sc;
var wc = Cc, Tc = ba(Qr, `Map`);
function Ec() {
  this.size = 0, this.__data__ = { hash: new lc(), map: new (Tc || wc)(), string: new lc() };
}
var Dc = Ec;
function Oc(e6) {
  var t2 = typeof e6;
  return t2 == `string` || t2 == `number` || t2 == `symbol` || t2 == `boolean` ? e6 !== `__proto__` : e6 === null;
}
var kc = Oc;
function Ac(e6, t2) {
  var n2 = e6.__data__;
  return kc(t2) ? n2[typeof t2 == `string` ? `string` : `hash`] : n2.map;
}
var jc = Ac;
function Mc(e6) {
  var t2 = jc(this, e6).delete(e6);
  return this.size -= t2 ? 1 : 0, t2;
}
var Nc = Mc;
function Pc(e6) {
  return jc(this, e6).get(e6);
}
var Fc = Pc;
function Ic(e6) {
  return jc(this, e6).has(e6);
}
var Lc = Ic;
function Rc(e6, t2) {
  var n2 = jc(this, e6), r2 = n2.size;
  return n2.set(e6, t2), this.size += n2.size == r2 ? 0 : 1, this;
}
var zc = Rc;
function Bc(e6) {
  var t2 = -1, n2 = e6 == null ? 0 : e6.length;
  for (this.clear(); ++t2 < n2; ) {
    var r2 = e6[t2];
    this.set(r2[0], r2[1]);
  }
}
Bc.prototype.clear = Dc, Bc.prototype.delete = Nc, Bc.prototype.get = Fc, Bc.prototype.has = Lc, Bc.prototype.set = zc;
var Vc = Bc, Hc = `Expected a function`;
function Uc(e6, t2) {
  if (typeof e6 != `function` || t2 != null && typeof t2 != `function`) throw TypeError(Hc);
  var n2 = function() {
    var r2 = arguments, i2 = t2 ? t2.apply(this, r2) : r2[0], a2 = n2.cache;
    if (a2.has(i2)) return a2.get(i2);
    var o2 = e6.apply(this, r2);
    return n2.cache = a2.set(i2, o2) || a2, o2;
  };
  return n2.cache = new (Uc.Cache || Vc)(), n2;
}
Uc.Cache = Vc;
var Wc = Uc, Gc = 500;
function Kc(e6) {
  var t2 = Wc(e6, function(e7) {
    return n2.size === Gc && n2.clear(), e7;
  }), n2 = t2.cache;
  return t2;
}
var qc = Kc, Jc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Yc = /\\(\\)?/g, Xc = qc(function(e6) {
  var t2 = [];
  return e6.charCodeAt(0) === 46 && t2.push(``), e6.replace(Jc, function(e7, n2, r2, i2) {
    t2.push(r2 ? i2.replace(Yc, `$1`) : n2 || e7);
  }), t2;
});
function Zc(e6) {
  return e6 == null ? `` : Ti(e6);
}
var Qc = Zc;
function $c(e6, t2) {
  return F(e6) ? e6 : Ks(e6, t2) ? [e6] : Xc(Qc(e6));
}
var el = $c, tl = 1 / 0;
function nl(e6) {
  if (typeof e6 == `string` || vi(e6)) return e6;
  var t2 = e6 + ``;
  return t2 == `0` && 1 / e6 == -tl ? `-0` : t2;
}
var rl = nl;
function il(e6, t2) {
  t2 = el(t2, e6);
  for (var n2 = 0, r2 = t2.length; e6 != null && n2 < r2; ) e6 = e6[rl(t2[n2++])];
  return n2 && n2 == r2 ? e6 : void 0;
}
var al = il;
function ol(e6, t2, n2) {
  var r2 = e6 == null ? void 0 : al(e6, t2);
  return r2 === void 0 ? n2 : r2;
}
var sl = ol;
function cl(e6, t2) {
  for (var n2 = -1, r2 = t2.length, i2 = e6.length; ++n2 < r2; ) e6[i2 + n2] = t2[n2];
  return e6;
}
var ll = cl, ul = $r ? $r.isConcatSpreadable : void 0;
function dl(e6) {
  return F(e6) || Io(e6) || !!(ul && e6 && e6[ul]);
}
var fl = dl;
function pl(e6, t2, n2, r2, i2) {
  var a2 = -1, o2 = e6.length;
  for (n2 || (n2 = fl), i2 || (i2 = []); ++a2 < o2; ) {
    var s2 = e6[a2];
    t2 > 0 && n2(s2) ? t2 > 1 ? pl(s2, t2 - 1, n2, r2, i2) : ll(i2, s2) : r2 || (i2[i2.length] = s2);
  }
  return i2;
}
var ml = pl;
function hl(e6) {
  return e6 != null && e6.length ? ml(e6, 1) : [];
}
var gl = hl, _l = Ds(Object.getPrototypeOf, Object);
function vl(e6, t2, n2) {
  var r2 = -1, i2 = e6.length;
  t2 < 0 && (t2 = -t2 > i2 ? 0 : i2 + t2), n2 = n2 > i2 ? i2 : n2, n2 < 0 && (n2 += i2), i2 = t2 > n2 ? 0 : n2 - t2 >>> 0, t2 >>>= 0;
  for (var a2 = Array(i2); ++r2 < i2; ) a2[r2] = e6[r2 + t2];
  return a2;
}
var yl = vl;
function bl(e6, t2, n2, r2) {
  var i2 = -1, a2 = e6 == null ? 0 : e6.length;
  for (r2 && a2 && (n2 = e6[++i2]); ++i2 < a2; ) n2 = t2(n2, e6[i2], i2, e6);
  return n2;
}
var xl = bl;
function Sl() {
  this.__data__ = new wc(), this.size = 0;
}
var Cl = Sl;
function wl(e6) {
  var t2 = this.__data__, n2 = t2.delete(e6);
  return this.size = t2.size, n2;
}
var Tl = wl;
function El(e6) {
  return this.__data__.get(e6);
}
var Dl = El;
function Ol(e6) {
  return this.__data__.has(e6);
}
var kl = Ol, Al = 200;
function jl(e6, t2) {
  var n2 = this.__data__;
  if (n2 instanceof wc) {
    var r2 = n2.__data__;
    if (!Tc || r2.length < Al - 1) return r2.push([e6, t2]), this.size = ++n2.size, this;
    n2 = this.__data__ = new Vc(r2);
  }
  return n2.set(e6, t2), this.size = n2.size, this;
}
var Ml = jl;
function Nl(e6) {
  this.size = (this.__data__ = new wc(e6)).size;
}
Nl.prototype.clear = Cl, Nl.prototype.delete = Tl, Nl.prototype.get = Dl, Nl.prototype.has = kl, Nl.prototype.set = Ml;
var Pl = Nl;
function Fl(e6, t2) {
  return e6 && lo(t2, Ns(t2), e6);
}
var Il = Fl;
function Ll(e6, t2) {
  return e6 && lo(t2, Hs(t2), e6);
}
var Rl = Ll, zl = typeof exports == `object` && exports && !exports.nodeType && exports, Bl = zl && typeof module == `object` && module && !module.nodeType && module, Vl = Bl && Bl.exports === zl ? Qr.Buffer : void 0, Hl = Vl ? Vl.allocUnsafe : void 0;
function Ul(e6, t2) {
  if (t2) return e6.slice();
  var n2 = e6.length, r2 = Hl ? Hl(n2) : new e6.constructor(n2);
  return e6.copy(r2), r2;
}
var Wl = Ul;
function Gl(e6, t2) {
  for (var n2 = -1, r2 = e6 == null ? 0 : e6.length, i2 = 0, a2 = []; ++n2 < r2; ) {
    var o2 = e6[n2];
    t2(o2, n2, e6) && (a2[i2++] = o2);
  }
  return a2;
}
var Kl = Gl;
function ql() {
  return [];
}
var Jl = ql, Yl = Object.prototype.propertyIsEnumerable, Xl = Object.getOwnPropertySymbols, Zl = Xl ? function(e6) {
  return e6 == null ? [] : (e6 = Object(e6), Kl(Xl(e6), function(t2) {
    return Yl.call(e6, t2);
  }));
} : Jl;
function Ql(e6, t2) {
  return lo(e6, Zl(e6), t2);
}
var $l = Ql, eu = Object.getOwnPropertySymbols ? function(e6) {
  for (var t2 = []; e6; ) ll(t2, Zl(e6)), e6 = _l(e6);
  return t2;
} : Jl;
function tu(e6, t2) {
  return lo(e6, eu(e6), t2);
}
var nu = tu;
function ru(e6, t2, n2) {
  var r2 = t2(e6);
  return F(e6) ? r2 : ll(r2, n2(e6));
}
var iu = ru;
function au(e6) {
  return iu(e6, Ns, Zl);
}
var ou = au;
function su(e6) {
  return iu(e6, Hs, eu);
}
var cu = su, lu = ba(Qr, `DataView`), uu = ba(Qr, `Promise`), du = ba(Qr, `Set`), fu = `[object Map]`, pu = `[object Object]`, mu = `[object Promise]`, hu = `[object Set]`, gu = `[object WeakMap]`, _u = `[object DataView]`, vu = sa(lu), yu = sa(Tc), bu = sa(uu), xu = sa(du), Su = sa(xa), Cu = pi;
(lu && Cu(new lu(new ArrayBuffer(1))) != _u || Tc && Cu(new Tc()) != fu || uu && Cu(uu.resolve()) != mu || du && Cu(new du()) != hu || xa && Cu(new xa()) != gu) && (Cu = function(e6) {
  var t2 = pi(e6), n2 = t2 == pu ? e6.constructor : void 0, r2 = n2 ? sa(n2) : ``;
  if (r2) switch (r2) {
    case vu:
      return _u;
    case yu:
      return fu;
    case bu:
      return mu;
    case xu:
      return hu;
    case Su:
      return gu;
  }
  return t2;
});
var wu = Cu, Tu = Object.prototype.hasOwnProperty;
function Eu(e6) {
  var t2 = e6.length, n2 = new e6.constructor(t2);
  return t2 && typeof e6[0] == `string` && Tu.call(e6, `index`) && (n2.index = e6.index, n2.input = e6.input), n2;
}
var Du = Eu, Ou = Qr.Uint8Array;
function ku(e6) {
  var t2 = new e6.constructor(e6.byteLength);
  return new Ou(t2).set(new Ou(e6)), t2;
}
var Au = ku;
function ju(e6, t2) {
  var n2 = t2 ? Au(e6.buffer) : e6.buffer;
  return new e6.constructor(n2, e6.byteOffset, e6.byteLength);
}
var Mu = ju, Nu = /\w*$/;
function Pu(e6) {
  var t2 = new e6.constructor(e6.source, Nu.exec(e6));
  return t2.lastIndex = e6.lastIndex, t2;
}
var Fu = Pu, Iu = $r ? $r.prototype : void 0, Lu = Iu ? Iu.valueOf : void 0;
function Ru(e6) {
  return Lu ? Object(Lu.call(e6)) : {};
}
var zu = Ru;
function Bu(e6, t2) {
  var n2 = t2 ? Au(e6.buffer) : e6.buffer;
  return new e6.constructor(n2, e6.byteOffset, e6.length);
}
var Vu = Bu, Hu = `[object Boolean]`, Uu = `[object Date]`, Wu = `[object Map]`, Gu = `[object Number]`, Ku = `[object RegExp]`, qu = `[object Set]`, Ju = `[object String]`, Yu = `[object Symbol]`, Xu = `[object ArrayBuffer]`, Zu = `[object DataView]`, Qu = `[object Float32Array]`, $u = `[object Float64Array]`, ed = `[object Int8Array]`, td = `[object Int16Array]`, nd = `[object Int32Array]`, rd = `[object Uint8Array]`, id = `[object Uint8ClampedArray]`, ad = `[object Uint16Array]`, od = `[object Uint32Array]`;
function sd(e6, t2, n2) {
  var r2 = e6.constructor;
  switch (t2) {
    case Xu:
      return Au(e6);
    case Hu:
    case Uu:
      return new r2(+e6);
    case Zu:
      return Mu(e6, n2);
    case Qu:
    case $u:
    case ed:
    case td:
    case nd:
    case rd:
    case id:
    case ad:
    case od:
      return Vu(e6, n2);
    case Wu:
      return new r2();
    case Gu:
    case Ju:
      return new r2(e6);
    case Ku:
      return Fu(e6);
    case qu:
      return new r2();
    case Yu:
      return zu(e6);
  }
}
var cd = sd;
function ld(e6) {
  return typeof e6.constructor == `function` && !Do(e6) ? Ca(_l(e6)) : {};
}
var ud = ld, dd = `[object Map]`;
function fd(e6) {
  return hi(e6) && wu(e6) == dd;
}
var pd = fd, md = bs && bs.isMap, hd = md ? gs(md) : pd, gd = `[object Set]`;
function _d(e6) {
  return hi(e6) && wu(e6) == gd;
}
var vd = _d, yd = bs && bs.isSet, bd = yd ? gs(yd) : vd, xd = 1, Sd = 2, Cd = 4, wd = `[object Arguments]`, Td = `[object Array]`, Ed = `[object Boolean]`, Dd = `[object Date]`, Od = `[object Error]`, kd = `[object Function]`, Ad = `[object GeneratorFunction]`, jd = `[object Map]`, Md = `[object Number]`, Nd = `[object Object]`, Pd = `[object RegExp]`, Fd = `[object Set]`, Id = `[object String]`, Ld = `[object Symbol]`, Rd = `[object WeakMap]`, zd = `[object ArrayBuffer]`, Bd = `[object DataView]`, Vd = `[object Float32Array]`, Hd = `[object Float64Array]`, Ud = `[object Int8Array]`, Wd = `[object Int16Array]`, Gd = `[object Int32Array]`, Kd = `[object Uint8Array]`, qd = `[object Uint8ClampedArray]`, Jd = `[object Uint16Array]`, Yd = `[object Uint32Array]`, L = {};
L[wd] = L[Td] = L[zd] = L[Bd] = L[Ed] = L[Dd] = L[Vd] = L[Hd] = L[Ud] = L[Wd] = L[Gd] = L[jd] = L[Md] = L[Nd] = L[Pd] = L[Fd] = L[Id] = L[Ld] = L[Kd] = L[qd] = L[Jd] = L[Yd] = true, L[Od] = L[kd] = L[Rd] = false;
function Xd(e6, t2, n2, r2, i2, a2) {
  var o2, s2 = t2 & xd, c2 = t2 & Sd, l2 = t2 & Cd;
  if (n2 && (o2 = i2 ? n2(e6, r2, i2, a2) : n2(e6)), o2 !== void 0) return o2;
  if (!Ni(e6)) return e6;
  var u2 = F(e6);
  if (u2) {
    if (o2 = Du(e6), !s2) return ka(e6, o2);
  } else {
    var d2 = wu(e6), f2 = d2 == kd || d2 == Ad;
    if (Ho(e6)) return Wl(e6, s2);
    if (d2 == Nd || d2 == wd || f2 && !i2) {
      if (o2 = c2 || f2 ? {} : ud(e6), !s2) return c2 ? nu(e6, Rl(o2, e6)) : $l(e6, Il(o2, e6));
    } else {
      if (!L[d2]) return i2 ? e6 : {};
      o2 = cd(e6, d2, s2);
    }
  }
  a2 || (a2 = new Pl());
  var p2 = a2.get(e6);
  if (p2) return p2;
  a2.set(e6, o2), bd(e6) ? e6.forEach(function(r3) {
    o2.add(Xd(r3, t2, n2, r3, e6, a2));
  }) : hd(e6) && e6.forEach(function(r3, i3) {
    o2.set(i3, Xd(r3, t2, n2, i3, e6, a2));
  });
  var m2 = u2 ? void 0 : (l2 ? c2 ? cu : ou : c2 ? Hs : Ns)(e6);
  return Ba(m2 || e6, function(r3, i3) {
    m2 && (i3 = r3, r3 = e6[i3]), so(o2, i3, Xd(r3, t2, n2, i3, e6, a2));
  }), o2;
}
var Zd = Xd, Qd = 4;
function $d(e6) {
  return Zd(e6, Qd);
}
var ef = $d;
function tf(e6) {
  for (var t2 = -1, n2 = e6 == null ? 0 : e6.length, r2 = 0, i2 = []; ++t2 < n2; ) {
    var a2 = e6[t2];
    a2 && (i2[r2++] = a2);
  }
  return i2;
}
var nf = tf, rf = `__lodash_hash_undefined__`;
function af(e6) {
  return this.__data__.set(e6, rf), this;
}
var of = af;
function sf(e6) {
  return this.__data__.has(e6);
}
var cf = sf;
function lf(e6) {
  var t2 = -1, n2 = e6 == null ? 0 : e6.length;
  for (this.__data__ = new Vc(); ++t2 < n2; ) this.add(e6[t2]);
}
lf.prototype.add = lf.prototype.push = of, lf.prototype.has = cf;
var uf = lf;
function df(e6, t2) {
  for (var n2 = -1, r2 = e6 == null ? 0 : e6.length; ++n2 < r2; ) if (t2(e6[n2], n2, e6)) return true;
  return false;
}
var ff = df;
function pf(e6, t2) {
  return e6.has(t2);
}
var mf = pf, hf = 1, gf = 2;
function _f(e6, t2, n2, r2, i2, a2) {
  var o2 = n2 & hf, s2 = e6.length, c2 = t2.length;
  if (s2 != c2 && !(o2 && c2 > s2)) return false;
  var l2 = a2.get(e6), u2 = a2.get(t2);
  if (l2 && u2) return l2 == t2 && u2 == e6;
  var d2 = -1, f2 = true, p2 = n2 & gf ? new uf() : void 0;
  for (a2.set(e6, t2), a2.set(t2, e6); ++d2 < s2; ) {
    var m2 = e6[d2], h2 = t2[d2];
    if (r2) var g2 = o2 ? r2(h2, m2, d2, t2, e6, a2) : r2(m2, h2, d2, e6, t2, a2);
    if (g2 !== void 0) {
      if (g2) continue;
      f2 = false;
      break;
    }
    if (p2) {
      if (!ff(t2, function(e7, t3) {
        if (!mf(p2, t3) && (m2 === e7 || i2(m2, e7, n2, r2, a2))) return p2.push(t3);
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
var vf = _f;
function yf(e6) {
  var t2 = -1, n2 = Array(e6.size);
  return e6.forEach(function(e7, r2) {
    n2[++t2] = [r2, e7];
  }), n2;
}
var bf = yf;
function xf(e6) {
  var t2 = -1, n2 = Array(e6.size);
  return e6.forEach(function(e7) {
    n2[++t2] = e7;
  }), n2;
}
var Sf = xf, Cf = 1, wf = 2, Tf = `[object Boolean]`, Ef = `[object Date]`, Df = `[object Error]`, Of = `[object Map]`, kf = `[object Number]`, Af = `[object RegExp]`, jf = `[object Set]`, Mf = `[object String]`, Nf = `[object Symbol]`, Pf = `[object ArrayBuffer]`, Ff = `[object DataView]`, If = $r ? $r.prototype : void 0, Lf = If ? If.valueOf : void 0;
function Rf(e6, t2, n2, r2, i2, a2, o2) {
  switch (n2) {
    case Ff:
      if (e6.byteLength != t2.byteLength || e6.byteOffset != t2.byteOffset) return false;
      e6 = e6.buffer, t2 = t2.buffer;
    case Pf:
      return !(e6.byteLength != t2.byteLength || !a2(new Ou(e6), new Ou(t2)));
    case Tf:
    case Ef:
    case kf:
      return io(+e6, +t2);
    case Df:
      return e6.name == t2.name && e6.message == t2.message;
    case Af:
    case Mf:
      return e6 == t2 + ``;
    case Of:
      var s2 = bf;
    case jf:
      var c2 = r2 & Cf;
      if (s2 || (s2 = Sf), e6.size != t2.size && !c2) return false;
      var l2 = o2.get(e6);
      if (l2) return l2 == t2;
      r2 |= wf, o2.set(e6, t2);
      var u2 = vf(s2(e6), s2(t2), r2, i2, a2, o2);
      return o2.delete(e6), u2;
    case Nf:
      if (Lf) return Lf.call(e6) == Lf.call(t2);
  }
  return false;
}
var zf = Rf, Bf = 1, Vf = Object.prototype.hasOwnProperty;
function Hf(e6, t2, n2, r2, i2, a2) {
  var o2 = n2 & Bf, s2 = ou(e6), c2 = s2.length;
  if (c2 != ou(t2).length && !o2) return false;
  for (var l2 = c2; l2--; ) {
    var u2 = s2[l2];
    if (!(o2 ? u2 in t2 : Vf.call(t2, u2))) return false;
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
var Uf = Hf, Wf = 1, Gf = `[object Arguments]`, Kf = `[object Array]`, qf = `[object Object]`, Jf = Object.prototype.hasOwnProperty;
function Yf(e6, t2, n2, r2, i2, a2) {
  var o2 = F(e6), s2 = F(t2), c2 = o2 ? Kf : wu(e6), l2 = s2 ? Kf : wu(t2);
  c2 = c2 == Gf ? qf : c2, l2 = l2 == Gf ? qf : l2;
  var u2 = c2 == qf, d2 = l2 == qf, f2 = c2 == l2;
  if (f2 && Ho(e6)) {
    if (!Ho(t2)) return false;
    o2 = true, u2 = false;
  }
  if (f2 && !u2) return a2 || (a2 = new Pl()), o2 || Ss(e6) ? vf(e6, t2, n2, r2, i2, a2) : zf(e6, t2, c2, n2, r2, i2, a2);
  if (!(n2 & Wf)) {
    var p2 = u2 && Jf.call(e6, `__wrapped__`), m2 = d2 && Jf.call(t2, `__wrapped__`);
    if (p2 || m2) {
      var h2 = p2 ? e6.value() : e6, g2 = m2 ? t2.value() : t2;
      return a2 || (a2 = new Pl()), i2(h2, g2, n2, r2, a2);
    }
  }
  return f2 ? (a2 || (a2 = new Pl()), Uf(e6, t2, n2, r2, i2, a2)) : false;
}
var Xf = Yf;
function Zf(e6, t2, n2, r2, i2) {
  return e6 === t2 ? true : e6 == null || t2 == null || !hi(e6) && !hi(t2) ? e6 !== e6 && t2 !== t2 : Xf(e6, t2, n2, r2, Zf, i2);
}
var Qf = Zf, $f = 1, ep = 2;
function tp(e6, t2, n2, r2) {
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
      var d2 = new Pl();
      if (r2) var f2 = r2(l2, u2, c2, e6, t2, d2);
      if (!(f2 === void 0 ? Qf(u2, l2, $f | ep, r2, d2) : f2)) return false;
    }
  }
  return true;
}
var np = tp;
function rp(e6) {
  return e6 === e6 && !Ni(e6);
}
var ip = rp;
function ap(e6) {
  for (var t2 = Ns(e6), n2 = t2.length; n2--; ) {
    var r2 = t2[n2], i2 = e6[r2];
    t2[n2] = [r2, i2, ip(i2)];
  }
  return t2;
}
var op = ap;
function sp(e6, t2) {
  return function(n2) {
    return n2 == null ? false : n2[e6] === t2 && (t2 !== void 0 || e6 in Object(n2));
  };
}
var cp = sp;
function lp(e6) {
  var t2 = op(e6);
  return t2.length == 1 && t2[0][2] ? cp(t2[0][0], t2[0][1]) : function(n2) {
    return n2 === e6 || np(n2, e6, t2);
  };
}
var up = lp;
function dp(e6, t2) {
  return e6 != null && t2 in Object(e6);
}
var fp = dp;
function pp(e6, t2, n2) {
  t2 = el(t2, e6);
  for (var r2 = -1, i2 = t2.length, a2 = false; ++r2 < i2; ) {
    var o2 = rl(t2[r2]);
    if (!(a2 = e6 != null && n2(e6, o2))) break;
    e6 = e6[o2];
  }
  return a2 || ++r2 != i2 ? a2 : (i2 = e6 == null ? 0 : e6.length, !!i2 && vo(i2) && eo(o2, i2) && (F(e6) || Io(e6)));
}
var mp = pp;
function hp(e6, t2) {
  return e6 != null && mp(e6, t2, fp);
}
var gp = hp, _p = 1, vp = 2;
function yp(e6, t2) {
  return Ks(e6) && ip(t2) ? cp(rl(e6), t2) : function(n2) {
    var r2 = sl(n2, e6);
    return r2 === void 0 && r2 === t2 ? gp(n2, e6) : Qf(t2, r2, _p | vp);
  };
}
var bp = yp;
function xp(e6) {
  return function(t2) {
    return t2 == null ? void 0 : t2[e6];
  };
}
var Sp = xp;
function Cp(e6) {
  return function(t2) {
    return al(t2, e6);
  };
}
var wp = Cp;
function Tp(e6) {
  return Ks(e6) ? Sp(rl(e6)) : wp(e6);
}
var Ep = Tp;
function Dp(e6) {
  return typeof e6 == `function` ? e6 : e6 == null ? Ji : typeof e6 == `object` ? F(e6) ? bp(e6[0], e6[1]) : up(e6) : Ep(e6);
}
var Op = Dp;
function kp(e6, t2, n2, r2) {
  for (var i2 = -1, a2 = e6 == null ? 0 : e6.length; ++i2 < a2; ) {
    var o2 = e6[i2];
    t2(r2, o2, n2(o2), e6);
  }
  return r2;
}
var Ap = kp;
function jp(e6) {
  return function(t2, n2, r2) {
    for (var i2 = -1, a2 = Object(t2), o2 = r2(t2), s2 = o2.length; s2--; ) {
      var c2 = o2[e6 ? s2 : ++i2];
      if (n2(a2[c2], c2, a2) === false) break;
    }
    return t2;
  };
}
var Mp = jp();
function Np(e6, t2) {
  return e6 && Mp(e6, t2, Ns);
}
var Pp = Np;
function Fp(e6, t2) {
  return function(n2, r2) {
    if (n2 == null) return n2;
    if (!bo(n2)) return e6(n2, r2);
    for (var i2 = n2.length, a2 = t2 ? i2 : -1, o2 = Object(n2); (t2 ? a2-- : ++a2 < i2) && r2(o2[a2], a2, o2) !== false; ) ;
    return n2;
  };
}
var Ip = Fp(Pp);
function Lp(e6, t2, n2, r2) {
  return Ip(e6, function(e7, i2, a2) {
    t2(r2, e7, n2(e7), a2);
  }), r2;
}
var Rp = Lp;
function zp(e6, t2) {
  return function(n2, r2) {
    var i2 = F(n2) ? Ap : Rp, a2 = t2 ? t2() : {};
    return i2(n2, e6, Op(r2, 2), a2);
  };
}
var Bp = zp, Vp = Object.prototype, Hp = Vp.hasOwnProperty, Up = ho(function(e6, t2) {
  e6 = Object(e6);
  var n2 = -1, r2 = t2.length, i2 = r2 > 2 ? t2[2] : void 0;
  for (i2 && So(t2[0], t2[1], i2) && (r2 = 1); ++n2 < r2; ) for (var a2 = t2[n2], o2 = Hs(a2), s2 = -1, c2 = o2.length; ++s2 < c2; ) {
    var l2 = o2[s2], u2 = e6[l2];
    (u2 === void 0 || io(u2, Vp[l2]) && !Hp.call(e6, l2)) && (e6[l2] = a2[l2]);
  }
  return e6;
});
function Wp(e6) {
  return hi(e6) && bo(e6);
}
var Gp = Wp;
function Kp(e6, t2, n2) {
  for (var r2 = -1, i2 = e6 == null ? 0 : e6.length; ++r2 < i2; ) if (n2(t2, e6[r2])) return true;
  return false;
}
var qp = Kp, Jp = 200;
function Yp(e6, t2, n2, r2) {
  var i2 = -1, a2 = Xa, o2 = true, s2 = e6.length, c2 = [], l2 = t2.length;
  if (!s2) return c2;
  n2 && (t2 = bi(t2, gs(n2))), r2 ? (a2 = qp, o2 = false) : t2.length >= Jp && (a2 = mf, o2 = false, t2 = new uf(t2));
  outer: for (; ++i2 < s2; ) {
    var u2 = e6[i2], d2 = n2 == null ? u2 : n2(u2);
    if (u2 = r2 || u2 !== 0 ? u2 : 0, o2 && d2 === d2) {
      for (var f2 = l2; f2--; ) if (t2[f2] === d2) continue outer;
      c2.push(u2);
    } else a2(t2, d2, r2) || c2.push(u2);
  }
  return c2;
}
var Xp = Yp, Zp = ho(function(e6, t2) {
  return Gp(e6) ? Xp(e6, ml(t2, 1, Gp, true)) : [];
});
function Qp(e6) {
  var t2 = e6 == null ? 0 : e6.length;
  return t2 ? e6[t2 - 1] : void 0;
}
var $p = Qp;
function em(e6, t2, n2) {
  var r2 = e6 == null ? 0 : e6.length;
  return r2 ? (t2 = n2 || t2 === void 0 ? 1 : Ki(t2), yl(e6, t2 < 0 ? 0 : t2, r2)) : [];
}
var tm = em;
function nm(e6, t2, n2) {
  var r2 = e6 == null ? 0 : e6.length;
  return r2 ? (t2 = n2 || t2 === void 0 ? 1 : Ki(t2), t2 = r2 - t2, yl(e6, 0, t2 < 0 ? 0 : t2)) : [];
}
var rm = nm;
function im(e6) {
  return typeof e6 == `function` ? e6 : Ji;
}
var am = im;
function om(e6, t2) {
  return (F(e6) ? Ba : Ip)(e6, am(t2));
}
var R = om;
function sm(e6, t2) {
  for (var n2 = -1, r2 = e6 == null ? 0 : e6.length; ++n2 < r2; ) if (!t2(e6[n2], n2, e6)) return false;
  return true;
}
var cm = sm;
function lm(e6, t2) {
  var n2 = true;
  return Ip(e6, function(e7, r2, i2) {
    return n2 = !!t2(e7, r2, i2), n2;
  }), n2;
}
var um = lm;
function dm(e6, t2, n2) {
  var r2 = F(e6) ? cm : um;
  return n2 && So(e6, t2, n2) && (t2 = void 0), r2(e6, Op(t2, 3));
}
var fm = dm;
function pm(e6, t2) {
  var n2 = [];
  return Ip(e6, function(e7, r2, i2) {
    t2(e7, r2, i2) && n2.push(e7);
  }), n2;
}
var mm = pm;
function hm(e6, t2) {
  return (F(e6) ? Kl : mm)(e6, Op(t2, 3));
}
var gm = hm;
function _m(e6) {
  return function(t2, n2, r2) {
    var i2 = Object(t2);
    if (!bo(t2)) {
      var a2 = Op(n2, 3);
      t2 = Ns(t2), n2 = function(e7) {
        return a2(i2[e7], e7, i2);
      };
    }
    var o2 = e6(t2, n2, r2);
    return o2 > -1 ? i2[a2 ? t2[o2] : o2] : void 0;
  };
}
var vm = _m, ym = Math.max;
function bm(e6, t2, n2) {
  var r2 = e6 == null ? 0 : e6.length;
  if (!r2) return -1;
  var i2 = n2 == null ? 0 : Ki(n2);
  return i2 < 0 && (i2 = ym(r2 + i2, 0)), Ha(e6, Op(t2, 3), i2);
}
var xm = vm(bm);
function Sm(e6) {
  return e6 && e6.length ? e6[0] : void 0;
}
var Cm = Sm;
function wm(e6, t2) {
  var n2 = -1, r2 = bo(e6) ? Array(e6.length) : [];
  return Ip(e6, function(e7, i2, a2) {
    r2[++n2] = t2(e7, i2, a2);
  }), r2;
}
var Tm = wm;
function Em(e6, t2) {
  return (F(e6) ? bi : Tm)(e6, Op(t2, 3));
}
var z = Em;
function Dm(e6, t2) {
  return ml(z(e6, t2), 1);
}
var Om = Dm, km = Object.prototype.hasOwnProperty, Am = Bp(function(e6, t2, n2) {
  km.call(e6, n2) ? e6[n2].push(t2) : no(e6, n2, [t2]);
}), jm = Object.prototype.hasOwnProperty;
function Mm(e6, t2) {
  return e6 != null && jm.call(e6, t2);
}
var Nm = Mm;
function Pm(e6, t2) {
  return e6 != null && mp(e6, t2, Nm);
}
var B = Pm, Fm = `[object String]`;
function Im(e6) {
  return typeof e6 == `string` || !F(e6) && hi(e6) && pi(e6) == Fm;
}
var Lm = Im;
function Rm(e6, t2) {
  return bi(t2, function(t3) {
    return e6[t3];
  });
}
var zm = Rm;
function Bm(e6) {
  return e6 == null ? [] : zm(e6, Ns(e6));
}
var Vm = Bm, Hm = Math.max;
function Um(e6, t2, n2, r2) {
  e6 = bo(e6) ? e6 : Vm(e6), n2 = n2 && !r2 ? Ki(n2) : 0;
  var i2 = e6.length;
  return n2 < 0 && (n2 = Hm(i2 + n2, 0)), Lm(e6) ? n2 <= i2 && e6.indexOf(t2, n2) > -1 : !!i2 && Ja(e6, t2, n2) > -1;
}
var Wm = Um, Gm = Math.max;
function Km(e6, t2, n2) {
  var r2 = e6 == null ? 0 : e6.length;
  if (!r2) return -1;
  var i2 = n2 == null ? 0 : Ki(n2);
  return i2 < 0 && (i2 = Gm(r2 + i2, 0)), Ja(e6, t2, i2);
}
var qm = Km, Jm = `[object Map]`, Ym = `[object Set]`, Xm = Object.prototype.hasOwnProperty;
function Zm(e6) {
  if (e6 == null) return true;
  if (bo(e6) && (F(e6) || typeof e6 == `string` || typeof e6.splice == `function` || Ho(e6) || Ss(e6) || Io(e6))) return !e6.length;
  var t2 = wu(e6);
  if (t2 == Jm || t2 == Ym) return !e6.size;
  if (Do(e6)) return !js(e6).length;
  for (var n2 in e6) if (Xm.call(e6, n2)) return false;
  return true;
}
var V = Zm, Qm = `[object RegExp]`;
function $m(e6) {
  return hi(e6) && pi(e6) == Qm;
}
var eh = $m, th = bs && bs.isRegExp, nh = th ? gs(th) : eh;
function rh(e6) {
  return e6 === void 0;
}
var ih = rh, ah = `Expected a function`;
function oh(e6) {
  if (typeof e6 != `function`) throw TypeError(ah);
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
var sh = oh;
function ch(e6, t2, n2, r2) {
  if (!Ni(e6)) return e6;
  t2 = el(t2, e6);
  for (var i2 = -1, a2 = t2.length, o2 = a2 - 1, s2 = e6; s2 != null && ++i2 < a2; ) {
    var c2 = rl(t2[i2]), l2 = n2;
    if (c2 === `__proto__` || c2 === `constructor` || c2 === `prototype`) return e6;
    if (i2 != o2) {
      var u2 = s2[c2];
      l2 = r2 ? r2(u2, c2, s2) : void 0, l2 === void 0 && (l2 = Ni(u2) ? u2 : eo(t2[i2 + 1]) ? [] : {});
    }
    so(s2, c2, l2), s2 = s2[c2];
  }
  return e6;
}
var lh = ch;
function uh(e6, t2, n2) {
  for (var r2 = -1, i2 = t2.length, a2 = {}; ++r2 < i2; ) {
    var o2 = t2[r2], s2 = al(e6, o2);
    n2(s2, o2) && lh(a2, el(o2, e6), s2);
  }
  return a2;
}
var dh = uh;
function fh(e6, t2) {
  if (e6 == null) return {};
  var n2 = bi(cu(e6), function(e7) {
    return [e7];
  });
  return t2 = Op(t2), dh(e6, n2, function(e7, n3) {
    return t2(e7, n3[0]);
  });
}
var ph = fh;
function mh(e6, t2, n2, r2, i2) {
  return i2(e6, function(e7, i3, a2) {
    n2 = r2 ? (r2 = false, e7) : t2(n2, e7, i3, a2);
  }), n2;
}
var hh = mh;
function gh(e6, t2, n2) {
  var r2 = F(e6) ? xl : hh, i2 = arguments.length < 3;
  return r2(e6, Op(t2, 4), n2, i2, Ip);
}
var _h = gh;
function vh(e6, t2) {
  return (F(e6) ? Kl : mm)(e6, sh(Op(t2, 3)));
}
var yh = vh;
function bh(e6, t2) {
  var n2;
  return Ip(e6, function(e7, r2, i2) {
    return n2 = t2(e7, r2, i2), !n2;
  }), !!n2;
}
var xh = bh;
function Sh(e6, t2, n2) {
  var r2 = F(e6) ? ff : xh;
  return n2 && So(e6, t2, n2) && (t2 = void 0), r2(e6, Op(t2, 3));
}
var Ch = Sh, wh = du && 1 / Sf(new du([, -0]))[1] == 1 / 0 ? function(e6) {
  return new du(e6);
} : Da, Th = 200;
function Eh(e6, t2, n2) {
  var r2 = -1, i2 = Xa, a2 = e6.length, o2 = true, s2 = [], c2 = s2;
  if (n2) o2 = false, i2 = qp;
  else if (a2 >= Th) {
    var l2 = t2 ? null : wh(e6);
    if (l2) return Sf(l2);
    o2 = false, i2 = mf, c2 = new uf();
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
var Dh = Eh;
function Oh(e6) {
  return e6 && e6.length ? Dh(e6) : [];
}
var kh = Oh;
function Ah(e6) {
  console && console.error && console.error(`Error: ${e6}`);
}
function jh(e6) {
  console && console.warn && console.warn(`Warning: ${e6}`);
}
function Mh(e6) {
  let t2 = (/* @__PURE__ */ new Date()).getTime(), n2 = e6();
  return { time: (/* @__PURE__ */ new Date()).getTime() - t2, value: n2 };
}
function Nh(e6) {
  function t2() {
  }
  t2.prototype = e6;
  let n2 = new t2();
  function r2() {
    return typeof n2.bar;
  }
  return r2(), r2(), e6;
}
var Ph = typeof global == `object` && global && global.Object === Object && global, Fh = typeof self == `object` && self && self.Object === Object && self, Ih = Ph || Fh || Function(`return this`)(), Lh = Ih.Symbol, Rh = Object.prototype, zh = Rh.hasOwnProperty, Bh = Rh.toString, Vh = Lh ? Lh.toStringTag : void 0;
function Hh(e6) {
  var t2 = zh.call(e6, Vh), n2 = e6[Vh];
  try {
    e6[Vh] = void 0;
    var r2 = true;
  } catch {
  }
  var i2 = Bh.call(e6);
  return r2 && (t2 ? e6[Vh] = n2 : delete e6[Vh]), i2;
}
var Uh = Hh, Wh = Object.prototype.toString;
function Gh(e6) {
  return Wh.call(e6);
}
var Kh = Gh, qh = `[object Null]`, Jh = `[object Undefined]`, Yh = Lh ? Lh.toStringTag : void 0;
function Xh(e6) {
  return e6 == null ? e6 === void 0 ? Jh : qh : Yh && Yh in Object(e6) ? Uh(e6) : Kh(e6);
}
var Zh = Xh;
function Qh(e6) {
  return typeof e6 == `object` && !!e6;
}
var $h = Qh, eg = `[object Symbol]`;
function tg(e6) {
  return typeof e6 == `symbol` || $h(e6) && Zh(e6) == eg;
}
var ng = tg;
function rg(e6, t2) {
  for (var n2 = -1, r2 = e6 == null ? 0 : e6.length, i2 = Array(r2); ++n2 < r2; ) i2[n2] = t2(e6[n2], n2, e6);
  return i2;
}
var ig = rg, ag = Array.isArray, og = 1 / 0, sg = Lh ? Lh.prototype : void 0, cg = sg ? sg.toString : void 0;
function lg(e6) {
  if (typeof e6 == `string`) return e6;
  if (ag(e6)) return ig(e6, lg) + ``;
  if (ng(e6)) return cg ? cg.call(e6) : ``;
  var t2 = e6 + ``;
  return t2 == `0` && 1 / e6 == -og ? `-0` : t2;
}
var ug = lg, dg = /\s/;
function fg(e6) {
  for (var t2 = e6.length; t2-- && dg.test(e6.charAt(t2)); ) ;
  return t2;
}
var pg = fg, mg = /^\s+/;
function hg(e6) {
  return e6 && e6.slice(0, pg(e6) + 1).replace(mg, ``);
}
var gg = hg;
function _g(e6) {
  var t2 = typeof e6;
  return e6 != null && (t2 == `object` || t2 == `function`);
}
var vg = _g, yg = NaN, bg = /^[-+]0x[0-9a-f]+$/i, xg = /^0b[01]+$/i, Sg = /^0o[0-7]+$/i, Cg = parseInt;
function wg(e6) {
  if (typeof e6 == `number`) return e6;
  if (ng(e6)) return yg;
  if (vg(e6)) {
    var t2 = typeof e6.valueOf == `function` ? e6.valueOf() : e6;
    e6 = vg(t2) ? t2 + `` : t2;
  }
  if (typeof e6 != `string`) return e6 === 0 ? e6 : +e6;
  e6 = gg(e6);
  var n2 = xg.test(e6);
  return n2 || Sg.test(e6) ? Cg(e6.slice(2), n2 ? 2 : 8) : bg.test(e6) ? yg : +e6;
}
var Tg = wg, Eg = 1 / 0, Dg = 17976931348623157e292;
function Og(e6) {
  return e6 ? (e6 = Tg(e6), e6 === Eg || e6 === -Eg ? (e6 < 0 ? -1 : 1) * Dg : e6 === e6 ? e6 : 0) : e6 === 0 ? e6 : 0;
}
var kg = Og;
function Ag(e6) {
  var t2 = kg(e6), n2 = t2 % 1;
  return t2 === t2 ? n2 ? t2 - n2 : t2 : 0;
}
var jg = Ag;
function Mg(e6) {
  return e6;
}
var Ng = Mg, Pg = `[object AsyncFunction]`, Fg = `[object Function]`, Ig = `[object GeneratorFunction]`, Lg = `[object Proxy]`;
function Rg(e6) {
  if (!vg(e6)) return false;
  var t2 = Zh(e6);
  return t2 == Fg || t2 == Ig || t2 == Pg || t2 == Lg;
}
var zg = Rg, Bg = Ih[`__core-js_shared__`], Vg = (function() {
  var e6 = /[^.]+$/.exec(Bg && Bg.keys && Bg.keys.IE_PROTO || ``);
  return e6 ? `Symbol(src)_1.` + e6 : ``;
})();
function Hg(e6) {
  return !!Vg && Vg in e6;
}
var Ug = Hg, Wg = Function.prototype.toString;
function Gg(e6) {
  if (e6 != null) {
    try {
      return Wg.call(e6);
    } catch {
    }
    try {
      return e6 + ``;
    } catch {
    }
  }
  return ``;
}
var Kg = Gg, qg = /[\\^$.*+?()[\]{}|]/g, Jg = /^\[object .+?Constructor\]$/, Yg = Function.prototype, Xg = Object.prototype, Zg = Yg.toString, Qg = Xg.hasOwnProperty, $g = RegExp(`^` + Zg.call(Qg).replace(qg, `\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, `$1.*?`) + `$`);
function e_(e6) {
  return !vg(e6) || Ug(e6) ? false : (zg(e6) ? $g : Jg).test(Kg(e6));
}
var t_ = e_;
function n_(e6, t2) {
  return e6 == null ? void 0 : e6[t2];
}
var r_ = n_;
function i_(e6, t2) {
  var n2 = r_(e6, t2);
  return t_(n2) ? n2 : void 0;
}
var a_ = i_, o_ = a_(Ih, `WeakMap`);
function s_(e6, t2, n2) {
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
var c_ = s_, l_ = 800, u_ = 16, d_ = Date.now;
function f_(e6) {
  var t2 = 0, n2 = 0;
  return function() {
    var r2 = d_(), i2 = u_ - (r2 - n2);
    if (n2 = r2, i2 > 0) {
      if (++t2 >= l_) return arguments[0];
    } else t2 = 0;
    return e6.apply(void 0, arguments);
  };
}
var p_ = f_;
function m_(e6) {
  return function() {
    return e6;
  };
}
var h_ = m_, g_ = (function() {
  try {
    var e6 = a_(Object, `defineProperty`);
    return e6({}, ``, {}), e6;
  } catch {
  }
})(), __ = p_(g_ ? function(e6, t2) {
  return g_(e6, `toString`, { configurable: true, enumerable: false, value: h_(t2), writable: true });
} : Ng);
function v_(e6, t2) {
  for (var n2 = -1, r2 = e6 == null ? 0 : e6.length; ++n2 < r2 && t2(e6[n2], n2, e6) !== false; ) ;
  return e6;
}
var y_ = v_;
function b_(e6, t2, n2, r2) {
  for (var i2 = e6.length, a2 = n2 + (r2 ? 1 : -1); r2 ? a2-- : ++a2 < i2; ) if (t2(e6[a2], a2, e6)) return a2;
  return -1;
}
var x_ = b_;
function S_(e6) {
  return e6 !== e6;
}
var C_ = S_;
function w_(e6, t2, n2) {
  for (var r2 = n2 - 1, i2 = e6.length; ++r2 < i2; ) if (e6[r2] === t2) return r2;
  return -1;
}
var T_ = w_;
function E_(e6, t2, n2) {
  return t2 === t2 ? T_(e6, t2, n2) : x_(e6, C_, n2);
}
var D_ = E_, O_ = 9007199254740991, k_ = /^(?:0|[1-9]\d*)$/;
function A_(e6, t2) {
  var n2 = typeof e6;
  return t2 ?? (t2 = O_), !!t2 && (n2 == `number` || n2 != `symbol` && k_.test(e6)) && e6 > -1 && e6 % 1 == 0 && e6 < t2;
}
var j_ = A_;
function M_(e6, t2, n2) {
  t2 == `__proto__` && g_ ? g_(e6, t2, { configurable: true, enumerable: true, value: n2, writable: true }) : e6[t2] = n2;
}
var N_ = M_;
function P_(e6, t2) {
  return e6 === t2 || e6 !== e6 && t2 !== t2;
}
var F_ = P_, I_ = Object.prototype.hasOwnProperty;
function L_(e6, t2, n2) {
  var r2 = e6[t2];
  (!(I_.call(e6, t2) && F_(r2, n2)) || n2 === void 0 && !(t2 in e6)) && N_(e6, t2, n2);
}
var R_ = L_;
function z_(e6, t2, n2, r2) {
  var i2 = !n2;
  n2 || (n2 = {});
  for (var a2 = -1, o2 = t2.length; ++a2 < o2; ) {
    var s2 = t2[a2], c2 = r2 ? r2(n2[s2], e6[s2], s2, n2, e6) : void 0;
    c2 === void 0 && (c2 = e6[s2]), i2 ? N_(n2, s2, c2) : R_(n2, s2, c2);
  }
  return n2;
}
var B_ = z_, V_ = Math.max;
function H_(e6, t2, n2) {
  return t2 = V_(t2 === void 0 ? e6.length - 1 : t2, 0), function() {
    for (var r2 = arguments, i2 = -1, a2 = V_(r2.length - t2, 0), o2 = Array(a2); ++i2 < a2; ) o2[i2] = r2[t2 + i2];
    i2 = -1;
    for (var s2 = Array(t2 + 1); ++i2 < t2; ) s2[i2] = r2[i2];
    return s2[t2] = n2(o2), c_(e6, this, s2);
  };
}
var U_ = H_;
function W_(e6, t2) {
  return __(U_(e6, t2, Ng), e6 + ``);
}
var G_ = W_, K_ = 9007199254740991;
function q_(e6) {
  return typeof e6 == `number` && e6 > -1 && e6 % 1 == 0 && e6 <= K_;
}
var J_ = q_;
function Y_(e6) {
  return e6 != null && J_(e6.length) && !zg(e6);
}
var X_ = Y_;
function Z_(e6, t2, n2) {
  if (!vg(n2)) return false;
  var r2 = typeof t2;
  return (r2 == `number` ? X_(n2) && j_(t2, n2.length) : r2 == `string` && t2 in n2) ? F_(n2[t2], e6) : false;
}
var Q_ = Z_;
function $_(e6) {
  return G_(function(t2, n2) {
    var r2 = -1, i2 = n2.length, a2 = i2 > 1 ? n2[i2 - 1] : void 0, o2 = i2 > 2 ? n2[2] : void 0;
    for (a2 = e6.length > 3 && typeof a2 == `function` ? (i2--, a2) : void 0, o2 && Q_(n2[0], n2[1], o2) && (a2 = i2 < 3 ? void 0 : a2, i2 = 1), t2 = Object(t2); ++r2 < i2; ) {
      var s2 = n2[r2];
      s2 && e6(t2, s2, r2, a2);
    }
    return t2;
  });
}
var ev = $_, tv = Object.prototype;
function nv(e6) {
  var t2 = e6 && e6.constructor;
  return e6 === (typeof t2 == `function` && t2.prototype || tv);
}
var rv = nv;
function iv(e6, t2) {
  for (var n2 = -1, r2 = Array(e6); ++n2 < e6; ) r2[n2] = t2(n2);
  return r2;
}
var av = iv, ov = `[object Arguments]`;
function sv(e6) {
  return $h(e6) && Zh(e6) == ov;
}
var cv = sv, lv = Object.prototype, uv = lv.hasOwnProperty, dv = lv.propertyIsEnumerable, fv = cv(/* @__PURE__ */ (function() {
  return arguments;
})()) ? cv : function(e6) {
  return $h(e6) && uv.call(e6, `callee`) && !dv.call(e6, `callee`);
};
function pv() {
  return false;
}
var mv = pv, hv = typeof exports == `object` && exports && !exports.nodeType && exports, gv = hv && typeof module == `object` && module && !module.nodeType && module, _v = gv && gv.exports === hv ? Ih.Buffer : void 0, vv = (_v ? _v.isBuffer : void 0) || mv, yv = `[object Arguments]`, bv = `[object Array]`, xv = `[object Boolean]`, Sv = `[object Date]`, Cv = `[object Error]`, wv = `[object Function]`, Tv = `[object Map]`, Ev = `[object Number]`, Dv = `[object Object]`, Ov = `[object RegExp]`, kv = `[object Set]`, Av = `[object String]`, jv = `[object WeakMap]`, Mv = `[object ArrayBuffer]`, Nv = `[object DataView]`, Pv = `[object Float32Array]`, Fv = `[object Float64Array]`, Iv = `[object Int8Array]`, Lv = `[object Int16Array]`, Rv = `[object Int32Array]`, zv = `[object Uint8Array]`, Bv = `[object Uint8ClampedArray]`, Vv = `[object Uint16Array]`, Hv = `[object Uint32Array]`, H = {};
H[Pv] = H[Fv] = H[Iv] = H[Lv] = H[Rv] = H[zv] = H[Bv] = H[Vv] = H[Hv] = true, H[yv] = H[bv] = H[Mv] = H[xv] = H[Nv] = H[Sv] = H[Cv] = H[wv] = H[Tv] = H[Ev] = H[Dv] = H[Ov] = H[kv] = H[Av] = H[jv] = false;
function Uv(e6) {
  return $h(e6) && J_(e6.length) && !!H[Zh(e6)];
}
var Wv = Uv;
function Gv(e6) {
  return function(t2) {
    return e6(t2);
  };
}
var Kv = Gv, qv = typeof exports == `object` && exports && !exports.nodeType && exports, Jv = qv && typeof module == `object` && module && !module.nodeType && module, Yv = Jv && Jv.exports === qv && Ph.process, Xv = (function() {
  try {
    return Jv && Jv.require && Jv.require(`util`).types || Yv && Yv.binding && Yv.binding(`util`);
  } catch {
  }
})(), Zv = Xv && Xv.isTypedArray, Qv = Zv ? Kv(Zv) : Wv, $v = Object.prototype.hasOwnProperty;
function ey(e6, t2) {
  var n2 = ag(e6), r2 = !n2 && fv(e6), i2 = !n2 && !r2 && vv(e6), a2 = !n2 && !r2 && !i2 && Qv(e6), o2 = n2 || r2 || i2 || a2, s2 = o2 ? av(e6.length, String) : [], c2 = s2.length;
  for (var l2 in e6) (t2 || $v.call(e6, l2)) && !(o2 && (l2 == `length` || i2 && (l2 == `offset` || l2 == `parent`) || a2 && (l2 == `buffer` || l2 == `byteLength` || l2 == `byteOffset`) || j_(l2, c2))) && s2.push(l2);
  return s2;
}
var ty = ey;
function ny(e6, t2) {
  return function(n2) {
    return e6(t2(n2));
  };
}
var ry = ny, iy = ry(Object.keys, Object), ay = Object.prototype.hasOwnProperty;
function oy(e6) {
  if (!rv(e6)) return iy(e6);
  var t2 = [];
  for (var n2 in Object(e6)) ay.call(e6, n2) && n2 != `constructor` && t2.push(n2);
  return t2;
}
var sy = oy;
function cy(e6) {
  return X_(e6) ? ty(e6) : sy(e6);
}
var ly = cy, uy = Object.prototype.hasOwnProperty, dy = ev(function(e6, t2) {
  if (rv(t2) || X_(t2)) {
    B_(t2, ly(t2), e6);
    return;
  }
  for (var n2 in t2) uy.call(t2, n2) && R_(e6, n2, t2[n2]);
});
function fy(e6) {
  var t2 = [];
  if (e6 != null) for (var n2 in Object(e6)) t2.push(n2);
  return t2;
}
var py = fy, my = Object.prototype.hasOwnProperty;
function hy(e6) {
  if (!vg(e6)) return py(e6);
  var t2 = rv(e6), n2 = [];
  for (var r2 in e6) r2 == `constructor` && (t2 || !my.call(e6, r2)) || n2.push(r2);
  return n2;
}
var gy = hy;
function _y(e6) {
  return X_(e6) ? ty(e6, true) : gy(e6);
}
var vy = _y, yy = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, by = /^\w*$/;
function xy(e6, t2) {
  if (ag(e6)) return false;
  var n2 = typeof e6;
  return n2 == `number` || n2 == `symbol` || n2 == `boolean` || e6 == null || ng(e6) ? true : by.test(e6) || !yy.test(e6) || t2 != null && e6 in Object(t2);
}
var Sy = xy, Cy = a_(Object, `create`);
function wy() {
  this.__data__ = Cy ? Cy(null) : {}, this.size = 0;
}
var Ty = wy;
function Ey(e6) {
  var t2 = this.has(e6) && delete this.__data__[e6];
  return this.size -= t2 ? 1 : 0, t2;
}
var Dy = Ey, Oy = `__lodash_hash_undefined__`, ky = Object.prototype.hasOwnProperty;
function Ay(e6) {
  var t2 = this.__data__;
  if (Cy) {
    var n2 = t2[e6];
    return n2 === Oy ? void 0 : n2;
  }
  return ky.call(t2, e6) ? t2[e6] : void 0;
}
var jy = Ay, My = Object.prototype.hasOwnProperty;
function Ny(e6) {
  var t2 = this.__data__;
  return Cy ? t2[e6] !== void 0 : My.call(t2, e6);
}
var Py = Ny, Fy = `__lodash_hash_undefined__`;
function Iy(e6, t2) {
  var n2 = this.__data__;
  return this.size += this.has(e6) ? 0 : 1, n2[e6] = Cy && t2 === void 0 ? Fy : t2, this;
}
var Ly = Iy;
function Ry(e6) {
  var t2 = -1, n2 = e6 == null ? 0 : e6.length;
  for (this.clear(); ++t2 < n2; ) {
    var r2 = e6[t2];
    this.set(r2[0], r2[1]);
  }
}
Ry.prototype.clear = Ty, Ry.prototype.delete = Dy, Ry.prototype.get = jy, Ry.prototype.has = Py, Ry.prototype.set = Ly;
var zy = Ry;
function By() {
  this.__data__ = [], this.size = 0;
}
var Vy = By;
function Hy(e6, t2) {
  for (var n2 = e6.length; n2--; ) if (F_(e6[n2][0], t2)) return n2;
  return -1;
}
var Uy = Hy, Wy = Array.prototype.splice;
function Gy(e6) {
  var t2 = this.__data__, n2 = Uy(t2, e6);
  return n2 < 0 ? false : (n2 == t2.length - 1 ? t2.pop() : Wy.call(t2, n2, 1), --this.size, true);
}
var Ky = Gy;
function qy(e6) {
  var t2 = this.__data__, n2 = Uy(t2, e6);
  return n2 < 0 ? void 0 : t2[n2][1];
}
var Jy = qy;
function Yy(e6) {
  return Uy(this.__data__, e6) > -1;
}
var Xy = Yy;
function Zy(e6, t2) {
  var n2 = this.__data__, r2 = Uy(n2, e6);
  return r2 < 0 ? (++this.size, n2.push([e6, t2])) : n2[r2][1] = t2, this;
}
var Qy = Zy;
function $y(e6) {
  var t2 = -1, n2 = e6 == null ? 0 : e6.length;
  for (this.clear(); ++t2 < n2; ) {
    var r2 = e6[t2];
    this.set(r2[0], r2[1]);
  }
}
$y.prototype.clear = Vy, $y.prototype.delete = Ky, $y.prototype.get = Jy, $y.prototype.has = Xy, $y.prototype.set = Qy;
var eb = $y, tb = a_(Ih, `Map`);
function nb() {
  this.size = 0, this.__data__ = { hash: new zy(), map: new (tb || eb)(), string: new zy() };
}
var rb = nb;
function ib(e6) {
  var t2 = typeof e6;
  return t2 == `string` || t2 == `number` || t2 == `symbol` || t2 == `boolean` ? e6 !== `__proto__` : e6 === null;
}
var ab = ib;
function ob(e6, t2) {
  var n2 = e6.__data__;
  return ab(t2) ? n2[typeof t2 == `string` ? `string` : `hash`] : n2.map;
}
var sb = ob;
function cb(e6) {
  var t2 = sb(this, e6).delete(e6);
  return this.size -= t2 ? 1 : 0, t2;
}
var lb = cb;
function ub(e6) {
  return sb(this, e6).get(e6);
}
var db = ub;
function fb(e6) {
  return sb(this, e6).has(e6);
}
var pb = fb;
function mb(e6, t2) {
  var n2 = sb(this, e6), r2 = n2.size;
  return n2.set(e6, t2), this.size += n2.size == r2 ? 0 : 1, this;
}
var hb = mb;
function gb(e6) {
  var t2 = -1, n2 = e6 == null ? 0 : e6.length;
  for (this.clear(); ++t2 < n2; ) {
    var r2 = e6[t2];
    this.set(r2[0], r2[1]);
  }
}
gb.prototype.clear = rb, gb.prototype.delete = lb, gb.prototype.get = db, gb.prototype.has = pb, gb.prototype.set = hb;
var _b = gb, vb = `Expected a function`;
function yb(e6, t2) {
  if (typeof e6 != `function` || t2 != null && typeof t2 != `function`) throw TypeError(vb);
  var n2 = function() {
    var r2 = arguments, i2 = t2 ? t2.apply(this, r2) : r2[0], a2 = n2.cache;
    if (a2.has(i2)) return a2.get(i2);
    var o2 = e6.apply(this, r2);
    return n2.cache = a2.set(i2, o2) || a2, o2;
  };
  return n2.cache = new (yb.Cache || _b)(), n2;
}
yb.Cache = _b;
var bb = yb, xb = 500;
function Sb(e6) {
  var t2 = bb(e6, function(e7) {
    return n2.size === xb && n2.clear(), e7;
  }), n2 = t2.cache;
  return t2;
}
var Cb = Sb, wb = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Tb = /\\(\\)?/g, Eb = Cb(function(e6) {
  var t2 = [];
  return e6.charCodeAt(0) === 46 && t2.push(``), e6.replace(wb, function(e7, n2, r2, i2) {
    t2.push(r2 ? i2.replace(Tb, `$1`) : n2 || e7);
  }), t2;
});
function Db(e6) {
  return e6 == null ? `` : ug(e6);
}
var Ob = Db;
function kb(e6, t2) {
  return ag(e6) ? e6 : Sy(e6, t2) ? [e6] : Eb(Ob(e6));
}
var Ab = kb, jb = 1 / 0;
function Mb(e6) {
  if (typeof e6 == `string` || ng(e6)) return e6;
  var t2 = e6 + ``;
  return t2 == `0` && 1 / e6 == -jb ? `-0` : t2;
}
var Nb = Mb;
function Pb(e6, t2) {
  t2 = Ab(t2, e6);
  for (var n2 = 0, r2 = t2.length; e6 != null && n2 < r2; ) e6 = e6[Nb(t2[n2++])];
  return n2 && n2 == r2 ? e6 : void 0;
}
var Fb = Pb;
function Ib(e6, t2, n2) {
  var r2 = e6 == null ? void 0 : Fb(e6, t2);
  return r2 === void 0 ? n2 : r2;
}
var Lb = Ib;
function Rb(e6, t2) {
  for (var n2 = -1, r2 = t2.length, i2 = e6.length; ++n2 < r2; ) e6[i2 + n2] = t2[n2];
  return e6;
}
var zb = Rb, Bb = ry(Object.getPrototypeOf, Object);
function Vb() {
  this.__data__ = new eb(), this.size = 0;
}
var Hb = Vb;
function Ub(e6) {
  var t2 = this.__data__, n2 = t2.delete(e6);
  return this.size = t2.size, n2;
}
var Wb = Ub;
function Gb(e6) {
  return this.__data__.get(e6);
}
var Kb = Gb;
function qb(e6) {
  return this.__data__.has(e6);
}
var Jb = qb, Yb = 200;
function Xb(e6, t2) {
  var n2 = this.__data__;
  if (n2 instanceof eb) {
    var r2 = n2.__data__;
    if (!tb || r2.length < Yb - 1) return r2.push([e6, t2]), this.size = ++n2.size, this;
    n2 = this.__data__ = new _b(r2);
  }
  return n2.set(e6, t2), this.size = n2.size, this;
}
var Zb = Xb;
function Qb(e6) {
  this.size = (this.__data__ = new eb(e6)).size;
}
Qb.prototype.clear = Hb, Qb.prototype.delete = Wb, Qb.prototype.get = Kb, Qb.prototype.has = Jb, Qb.prototype.set = Zb;
var $b = Qb;
function ex(e6, t2) {
  for (var n2 = -1, r2 = e6 == null ? 0 : e6.length, i2 = 0, a2 = []; ++n2 < r2; ) {
    var o2 = e6[n2];
    t2(o2, n2, e6) && (a2[i2++] = o2);
  }
  return a2;
}
var tx = ex;
function nx() {
  return [];
}
var rx = nx, ix = Object.prototype.propertyIsEnumerable, ax = Object.getOwnPropertySymbols, ox = ax ? function(e6) {
  return e6 == null ? [] : (e6 = Object(e6), tx(ax(e6), function(t2) {
    return ix.call(e6, t2);
  }));
} : rx, sx = Object.getOwnPropertySymbols ? function(e6) {
  for (var t2 = []; e6; ) zb(t2, ox(e6)), e6 = Bb(e6);
  return t2;
} : rx;
function cx(e6, t2, n2) {
  var r2 = t2(e6);
  return ag(e6) ? r2 : zb(r2, n2(e6));
}
var lx = cx;
function ux(e6) {
  return lx(e6, ly, ox);
}
var dx = ux;
function fx(e6) {
  return lx(e6, vy, sx);
}
var px = fx, mx = a_(Ih, `DataView`), hx = a_(Ih, `Promise`), gx = a_(Ih, `Set`), _x = `[object Map]`, vx = `[object Object]`, yx = `[object Promise]`, bx = `[object Set]`, xx = `[object WeakMap]`, Sx = `[object DataView]`, Cx = Kg(mx), wx = Kg(tb), Tx = Kg(hx), Ex = Kg(gx), Dx = Kg(o_), Ox = Zh;
(mx && Ox(new mx(new ArrayBuffer(1))) != Sx || tb && Ox(new tb()) != _x || hx && Ox(hx.resolve()) != yx || gx && Ox(new gx()) != bx || o_ && Ox(new o_()) != xx) && (Ox = function(e6) {
  var t2 = Zh(e6), n2 = t2 == vx ? e6.constructor : void 0, r2 = n2 ? Kg(n2) : ``;
  if (r2) switch (r2) {
    case Cx:
      return Sx;
    case wx:
      return _x;
    case Tx:
      return yx;
    case Ex:
      return bx;
    case Dx:
      return xx;
  }
  return t2;
});
var kx = Ox, Ax = Ih.Uint8Array, jx = `__lodash_hash_undefined__`;
function Mx(e6) {
  return this.__data__.set(e6, jx), this;
}
var Nx = Mx;
function Px(e6) {
  return this.__data__.has(e6);
}
var Fx = Px;
function Ix(e6) {
  var t2 = -1, n2 = e6 == null ? 0 : e6.length;
  for (this.__data__ = new _b(); ++t2 < n2; ) this.add(e6[t2]);
}
Ix.prototype.add = Ix.prototype.push = Nx, Ix.prototype.has = Fx;
var Lx = Ix;
function Rx(e6, t2) {
  for (var n2 = -1, r2 = e6 == null ? 0 : e6.length; ++n2 < r2; ) if (t2(e6[n2], n2, e6)) return true;
  return false;
}
var zx = Rx;
function Bx(e6, t2) {
  return e6.has(t2);
}
var Vx = Bx, Hx = 1, Ux = 2;
function Wx(e6, t2, n2, r2, i2, a2) {
  var o2 = n2 & Hx, s2 = e6.length, c2 = t2.length;
  if (s2 != c2 && !(o2 && c2 > s2)) return false;
  var l2 = a2.get(e6), u2 = a2.get(t2);
  if (l2 && u2) return l2 == t2 && u2 == e6;
  var d2 = -1, f2 = true, p2 = n2 & Ux ? new Lx() : void 0;
  for (a2.set(e6, t2), a2.set(t2, e6); ++d2 < s2; ) {
    var m2 = e6[d2], h2 = t2[d2];
    if (r2) var g2 = o2 ? r2(h2, m2, d2, t2, e6, a2) : r2(m2, h2, d2, e6, t2, a2);
    if (g2 !== void 0) {
      if (g2) continue;
      f2 = false;
      break;
    }
    if (p2) {
      if (!zx(t2, function(e7, t3) {
        if (!Vx(p2, t3) && (m2 === e7 || i2(m2, e7, n2, r2, a2))) return p2.push(t3);
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
var Gx = Wx;
function Kx(e6) {
  var t2 = -1, n2 = Array(e6.size);
  return e6.forEach(function(e7, r2) {
    n2[++t2] = [r2, e7];
  }), n2;
}
var qx = Kx;
function Jx(e6) {
  var t2 = -1, n2 = Array(e6.size);
  return e6.forEach(function(e7) {
    n2[++t2] = e7;
  }), n2;
}
var Yx = Jx, Xx = 1, Zx = 2, Qx = `[object Boolean]`, $x = `[object Date]`, eS = `[object Error]`, tS = `[object Map]`, nS = `[object Number]`, rS = `[object RegExp]`, iS = `[object Set]`, aS = `[object String]`, oS = `[object Symbol]`, sS = `[object ArrayBuffer]`, cS = `[object DataView]`, lS = Lh ? Lh.prototype : void 0, uS = lS ? lS.valueOf : void 0;
function dS(e6, t2, n2, r2, i2, a2, o2) {
  switch (n2) {
    case cS:
      if (e6.byteLength != t2.byteLength || e6.byteOffset != t2.byteOffset) return false;
      e6 = e6.buffer, t2 = t2.buffer;
    case sS:
      return !(e6.byteLength != t2.byteLength || !a2(new Ax(e6), new Ax(t2)));
    case Qx:
    case $x:
    case nS:
      return F_(+e6, +t2);
    case eS:
      return e6.name == t2.name && e6.message == t2.message;
    case rS:
    case aS:
      return e6 == t2 + ``;
    case tS:
      var s2 = qx;
    case iS:
      var c2 = r2 & Xx;
      if (s2 || (s2 = Yx), e6.size != t2.size && !c2) return false;
      var l2 = o2.get(e6);
      if (l2) return l2 == t2;
      r2 |= Zx, o2.set(e6, t2);
      var u2 = Gx(s2(e6), s2(t2), r2, i2, a2, o2);
      return o2.delete(e6), u2;
    case oS:
      if (uS) return uS.call(e6) == uS.call(t2);
  }
  return false;
}
var fS = dS, pS = 1, mS = Object.prototype.hasOwnProperty;
function hS(e6, t2, n2, r2, i2, a2) {
  var o2 = n2 & pS, s2 = dx(e6), c2 = s2.length;
  if (c2 != dx(t2).length && !o2) return false;
  for (var l2 = c2; l2--; ) {
    var u2 = s2[l2];
    if (!(o2 ? u2 in t2 : mS.call(t2, u2))) return false;
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
var gS = hS, _S = 1, vS = `[object Arguments]`, yS = `[object Array]`, bS = `[object Object]`, xS = Object.prototype.hasOwnProperty;
function SS(e6, t2, n2, r2, i2, a2) {
  var o2 = ag(e6), s2 = ag(t2), c2 = o2 ? yS : kx(e6), l2 = s2 ? yS : kx(t2);
  c2 = c2 == vS ? bS : c2, l2 = l2 == vS ? bS : l2;
  var u2 = c2 == bS, d2 = l2 == bS, f2 = c2 == l2;
  if (f2 && vv(e6)) {
    if (!vv(t2)) return false;
    o2 = true, u2 = false;
  }
  if (f2 && !u2) return a2 || (a2 = new $b()), o2 || Qv(e6) ? Gx(e6, t2, n2, r2, i2, a2) : fS(e6, t2, c2, n2, r2, i2, a2);
  if (!(n2 & _S)) {
    var p2 = u2 && xS.call(e6, `__wrapped__`), m2 = d2 && xS.call(t2, `__wrapped__`);
    if (p2 || m2) {
      var h2 = p2 ? e6.value() : e6, g2 = m2 ? t2.value() : t2;
      return a2 || (a2 = new $b()), i2(h2, g2, n2, r2, a2);
    }
  }
  return f2 ? (a2 || (a2 = new $b()), gS(e6, t2, n2, r2, i2, a2)) : false;
}
var CS = SS;
function wS(e6, t2, n2, r2, i2) {
  return e6 === t2 ? true : e6 == null || t2 == null || !$h(e6) && !$h(t2) ? e6 !== e6 && t2 !== t2 : CS(e6, t2, n2, r2, wS, i2);
}
var TS = wS, ES = 1, DS = 2;
function OS(e6, t2, n2, r2) {
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
      var d2 = new $b();
      if (r2) var f2 = r2(l2, u2, c2, e6, t2, d2);
      if (!(f2 === void 0 ? TS(u2, l2, ES | DS, r2, d2) : f2)) return false;
    }
  }
  return true;
}
var kS = OS;
function AS(e6) {
  return e6 === e6 && !vg(e6);
}
var jS = AS;
function MS(e6) {
  for (var t2 = ly(e6), n2 = t2.length; n2--; ) {
    var r2 = t2[n2], i2 = e6[r2];
    t2[n2] = [r2, i2, jS(i2)];
  }
  return t2;
}
var NS = MS;
function PS(e6, t2) {
  return function(n2) {
    return n2 == null ? false : n2[e6] === t2 && (t2 !== void 0 || e6 in Object(n2));
  };
}
var FS = PS;
function IS(e6) {
  var t2 = NS(e6);
  return t2.length == 1 && t2[0][2] ? FS(t2[0][0], t2[0][1]) : function(n2) {
    return n2 === e6 || kS(n2, e6, t2);
  };
}
var LS = IS;
function RS(e6, t2) {
  return e6 != null && t2 in Object(e6);
}
var zS = RS;
function BS(e6, t2, n2) {
  t2 = Ab(t2, e6);
  for (var r2 = -1, i2 = t2.length, a2 = false; ++r2 < i2; ) {
    var o2 = Nb(t2[r2]);
    if (!(a2 = e6 != null && n2(e6, o2))) break;
    e6 = e6[o2];
  }
  return a2 || ++r2 != i2 ? a2 : (i2 = e6 == null ? 0 : e6.length, !!i2 && J_(i2) && j_(o2, i2) && (ag(e6) || fv(e6)));
}
var VS = BS;
function HS(e6, t2) {
  return e6 != null && VS(e6, t2, zS);
}
var US = HS, WS = 1, GS = 2;
function KS(e6, t2) {
  return Sy(e6) && jS(t2) ? FS(Nb(e6), t2) : function(n2) {
    var r2 = Lb(n2, e6);
    return r2 === void 0 && r2 === t2 ? US(n2, e6) : TS(t2, r2, WS | GS);
  };
}
var qS = KS;
function JS(e6) {
  return function(t2) {
    return t2 == null ? void 0 : t2[e6];
  };
}
var YS = JS;
function XS(e6) {
  return function(t2) {
    return Fb(t2, e6);
  };
}
var ZS = XS;
function QS(e6) {
  return Sy(e6) ? YS(Nb(e6)) : ZS(e6);
}
var $S = QS;
function eC(e6) {
  return typeof e6 == `function` ? e6 : e6 == null ? Ng : typeof e6 == `object` ? ag(e6) ? qS(e6[0], e6[1]) : LS(e6) : $S(e6);
}
var tC = eC;
function nC(e6) {
  return function(t2, n2, r2) {
    for (var i2 = -1, a2 = Object(t2), o2 = r2(t2), s2 = o2.length; s2--; ) {
      var c2 = o2[e6 ? s2 : ++i2];
      if (n2(a2[c2], c2, a2) === false) break;
    }
    return t2;
  };
}
var rC = nC();
function iC(e6, t2) {
  return e6 && rC(e6, t2, ly);
}
var aC = iC;
function oC(e6, t2) {
  return function(n2, r2) {
    if (n2 == null) return n2;
    if (!X_(n2)) return e6(n2, r2);
    for (var i2 = n2.length, a2 = t2 ? i2 : -1, o2 = Object(n2); (t2 ? a2-- : ++a2 < i2) && r2(o2[a2], a2, o2) !== false; ) ;
    return n2;
  };
}
var sC = oC(aC);
function cC(e6) {
  return typeof e6 == `function` ? e6 : Ng;
}
var lC = cC;
function uC(e6, t2) {
  return (ag(e6) ? y_ : sC)(e6, lC(t2));
}
var dC = uC;
function fC(e6, t2) {
  for (var n2 = -1, r2 = e6 == null ? 0 : e6.length; ++n2 < r2; ) if (!t2(e6[n2], n2, e6)) return false;
  return true;
}
var pC = fC;
function mC(e6, t2) {
  var n2 = true;
  return sC(e6, function(e7, r2, i2) {
    return n2 = !!t2(e7, r2, i2), n2;
  }), n2;
}
var hC = mC;
function gC(e6, t2, n2) {
  var r2 = ag(e6) ? pC : hC;
  return n2 && Q_(e6, t2, n2) && (t2 = void 0), r2(e6, tC(t2, 3));
}
var _C = gC;
function vC(e6, t2) {
  var n2 = -1, r2 = X_(e6) ? Array(e6.length) : [];
  return sC(e6, function(e7, i2, a2) {
    r2[++n2] = t2(e7, i2, a2);
  }), r2;
}
var yC = vC;
function bC(e6, t2) {
  return (ag(e6) ? ig : yC)(e6, tC(t2, 3));
}
var xC = bC, SC = `[object String]`;
function CC(e6) {
  return typeof e6 == `string` || !ag(e6) && $h(e6) && Zh(e6) == SC;
}
var wC = CC;
function TC(e6, t2) {
  return ig(t2, function(t3) {
    return e6[t3];
  });
}
var EC = TC;
function DC(e6) {
  return e6 == null ? [] : EC(e6, ly(e6));
}
var OC = DC, kC = Math.max;
function AC(e6, t2, n2, r2) {
  e6 = X_(e6) ? e6 : OC(e6), n2 = n2 && !r2 ? jg(n2) : 0;
  var i2 = e6.length;
  return n2 < 0 && (n2 = kC(i2 + n2, 0)), wC(e6) ? n2 <= i2 && e6.indexOf(t2, n2) > -1 : !!i2 && D_(e6, t2, n2) > -1;
}
var jC = AC, MC = `[object RegExp]`;
function NC(e6) {
  return $h(e6) && Zh(e6) == MC;
}
var PC = NC, FC = Xv && Xv.isRegExp, IC = FC ? Kv(FC) : PC;
function LC(e6, t2, n2, r2) {
  if (!vg(e6)) return e6;
  t2 = Ab(t2, e6);
  for (var i2 = -1, a2 = t2.length, o2 = a2 - 1, s2 = e6; s2 != null && ++i2 < a2; ) {
    var c2 = Nb(t2[i2]), l2 = n2;
    if (c2 === `__proto__` || c2 === `constructor` || c2 === `prototype`) return e6;
    if (i2 != o2) {
      var u2 = s2[c2];
      l2 = r2 ? r2(u2, c2, s2) : void 0, l2 === void 0 && (l2 = vg(u2) ? u2 : j_(t2[i2 + 1]) ? [] : {});
    }
    R_(s2, c2, l2), s2 = s2[c2];
  }
  return e6;
}
var RC = LC;
function zC(e6, t2, n2) {
  for (var r2 = -1, i2 = t2.length, a2 = {}; ++r2 < i2; ) {
    var o2 = t2[r2], s2 = Fb(e6, o2);
    n2(s2, o2) && RC(a2, Ab(o2, e6), s2);
  }
  return a2;
}
var BC = zC;
function VC(e6, t2) {
  if (e6 == null) return {};
  var n2 = ig(px(e6), function(e7) {
    return [e7];
  });
  return t2 = tC(t2), BC(e6, n2, function(e7, n3) {
    return t2(e7, n3[0]);
  });
}
var HC = VC;
function UC(e6, t2) {
  var n2;
  return sC(e6, function(e7, r2, i2) {
    return n2 = t2(e7, r2, i2), !n2;
  }), !!n2;
}
var WC = UC;
function GC(e6, t2, n2) {
  var r2 = ag(e6) ? zx : WC;
  return n2 && Q_(e6, t2, n2) && (t2 = void 0), r2(e6, tC(t2, 3));
}
var KC = GC;
function qC(e6) {
  return JC(e6) ? e6.LABEL : e6.name;
}
function JC(e6) {
  return wC(e6.LABEL) && e6.LABEL !== ``;
}
var YC = class {
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
    e6.visit(this), dC(this.definition, (t2) => {
      t2.accept(e6);
    });
  }
}, XC = class extends YC {
  constructor(e6) {
    super([]), this.idx = 1, dy(this, HC(e6, (e7) => e7 !== void 0));
  }
  set definition(e6) {
  }
  get definition() {
    return this.referencedRule === void 0 ? [] : this.referencedRule.definition;
  }
  accept(e6) {
    e6.visit(this);
  }
}, ZC = class extends YC {
  constructor(e6) {
    super(e6.definition), this.orgText = ``, dy(this, HC(e6, (e7) => e7 !== void 0));
  }
}, QC = class extends YC {
  constructor(e6) {
    super(e6.definition), this.ignoreAmbiguities = false, dy(this, HC(e6, (e7) => e7 !== void 0));
  }
}, $C = class extends YC {
  constructor(e6) {
    super(e6.definition), this.idx = 1, dy(this, HC(e6, (e7) => e7 !== void 0));
  }
}, ew = class extends YC {
  constructor(e6) {
    super(e6.definition), this.idx = 1, dy(this, HC(e6, (e7) => e7 !== void 0));
  }
}, tw = class extends YC {
  constructor(e6) {
    super(e6.definition), this.idx = 1, dy(this, HC(e6, (e7) => e7 !== void 0));
  }
}, U = class extends YC {
  constructor(e6) {
    super(e6.definition), this.idx = 1, dy(this, HC(e6, (e7) => e7 !== void 0));
  }
}, nw = class extends YC {
  constructor(e6) {
    super(e6.definition), this.idx = 1, dy(this, HC(e6, (e7) => e7 !== void 0));
  }
}, rw = class extends YC {
  get definition() {
    return this._definition;
  }
  set definition(e6) {
    this._definition = e6;
  }
  constructor(e6) {
    super(e6.definition), this.idx = 1, this.ignoreAmbiguities = false, this.hasPredicates = false, dy(this, HC(e6, (e7) => e7 !== void 0));
  }
}, W = class {
  constructor(e6) {
    this.idx = 1, dy(this, HC(e6, (e7) => e7 !== void 0));
  }
  accept(e6) {
    e6.visit(this);
  }
};
function iw(e6) {
  return xC(e6, aw);
}
function aw(e6) {
  function t2(e7) {
    return xC(e7, aw);
  }
  if (e6 instanceof XC) {
    let t3 = { type: `NonTerminal`, name: e6.nonTerminalName, idx: e6.idx };
    return wC(e6.label) && (t3.label = e6.label), t3;
  } else if (e6 instanceof QC) return { type: `Alternative`, definition: t2(e6.definition) };
  else if (e6 instanceof $C) return { type: `Option`, idx: e6.idx, definition: t2(e6.definition) };
  else if (e6 instanceof ew) return { type: `RepetitionMandatory`, idx: e6.idx, definition: t2(e6.definition) };
  else if (e6 instanceof tw) return { type: `RepetitionMandatoryWithSeparator`, idx: e6.idx, separator: aw(new W({ terminalType: e6.separator })), definition: t2(e6.definition) };
  else if (e6 instanceof nw) return { type: `RepetitionWithSeparator`, idx: e6.idx, separator: aw(new W({ terminalType: e6.separator })), definition: t2(e6.definition) };
  else if (e6 instanceof U) return { type: `Repetition`, idx: e6.idx, definition: t2(e6.definition) };
  else if (e6 instanceof rw) return { type: `Alternation`, idx: e6.idx, definition: t2(e6.definition) };
  else if (e6 instanceof W) {
    let t3 = { type: `Terminal`, name: e6.terminalType.name, label: qC(e6.terminalType), idx: e6.idx };
    wC(e6.label) && (t3.terminalLabel = e6.label);
    let n2 = e6.terminalType.PATTERN;
    return e6.terminalType.PATTERN && (t3.pattern = IC(n2) ? n2.source : n2), t3;
  } else if (e6 instanceof ZC) return { type: `Rule`, name: e6.name, orgText: e6.orgText, definition: t2(e6.definition) };
  else throw Error(`non exhaustive match`);
}
var ow = class {
  visit(e6) {
    let t2 = e6;
    switch (t2.constructor) {
      case XC:
        return this.visitNonTerminal(t2);
      case QC:
        return this.visitAlternative(t2);
      case $C:
        return this.visitOption(t2);
      case ew:
        return this.visitRepetitionMandatory(t2);
      case tw:
        return this.visitRepetitionMandatoryWithSeparator(t2);
      case nw:
        return this.visitRepetitionWithSeparator(t2);
      case U:
        return this.visitRepetition(t2);
      case rw:
        return this.visitAlternation(t2);
      case W:
        return this.visitTerminal(t2);
      case ZC:
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
function sw(e6) {
  return e6 instanceof QC || e6 instanceof $C || e6 instanceof U || e6 instanceof ew || e6 instanceof tw || e6 instanceof nw || e6 instanceof W || e6 instanceof ZC;
}
function cw(e6, t2 = []) {
  return e6 instanceof $C || e6 instanceof U || e6 instanceof nw ? true : e6 instanceof rw ? KC(e6.definition, (e7) => cw(e7, t2)) : e6 instanceof XC && jC(t2, e6) ? false : e6 instanceof YC ? (e6 instanceof XC && t2.push(e6), _C(e6.definition, (e7) => cw(e7, t2))) : false;
}
function lw(e6) {
  return e6 instanceof rw;
}
function uw(e6) {
  if (e6 instanceof XC) return `SUBRULE`;
  if (e6 instanceof $C) return `OPTION`;
  if (e6 instanceof rw) return `OR`;
  if (e6 instanceof ew) return `AT_LEAST_ONE`;
  if (e6 instanceof tw) return `AT_LEAST_ONE_SEP`;
  if (e6 instanceof nw) return `MANY_SEP`;
  if (e6 instanceof U) return `MANY`;
  if (e6 instanceof W) return `CONSUME`;
  throw Error(`non exhaustive match`);
}
var dw = class {
  walk(e6, t2 = []) {
    R(e6.definition, (n2, r2) => {
      let i2 = tm(e6.definition, r2 + 1);
      if (n2 instanceof XC) this.walkProdRef(n2, i2, t2);
      else if (n2 instanceof W) this.walkTerminal(n2, i2, t2);
      else if (n2 instanceof QC) this.walkFlat(n2, i2, t2);
      else if (n2 instanceof $C) this.walkOption(n2, i2, t2);
      else if (n2 instanceof ew) this.walkAtLeastOne(n2, i2, t2);
      else if (n2 instanceof tw) this.walkAtLeastOneSep(n2, i2, t2);
      else if (n2 instanceof nw) this.walkManySep(n2, i2, t2);
      else if (n2 instanceof U) this.walkMany(n2, i2, t2);
      else if (n2 instanceof rw) this.walkOr(n2, i2, t2);
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
    let r2 = [new $C({ definition: e6.definition })].concat(t2, n2);
    this.walk(e6, r2);
  }
  walkAtLeastOneSep(e6, t2, n2) {
    let r2 = fw(e6, t2, n2);
    this.walk(e6, r2);
  }
  walkMany(e6, t2, n2) {
    let r2 = [new $C({ definition: e6.definition })].concat(t2, n2);
    this.walk(e6, r2);
  }
  walkManySep(e6, t2, n2) {
    let r2 = fw(e6, t2, n2);
    this.walk(e6, r2);
  }
  walkOr(e6, t2, n2) {
    let r2 = t2.concat(n2);
    R(e6.definition, (e7) => {
      let t3 = new QC({ definition: [e7] });
      this.walk(t3, r2);
    });
  }
};
function fw(e6, t2, n2) {
  return [new $C({ definition: [new W({ terminalType: e6.separator })].concat(e6.definition) })].concat(t2, n2);
}
function pw(e6) {
  if (e6 instanceof XC) return pw(e6.referencedRule);
  if (e6 instanceof W) return gw(e6);
  if (sw(e6)) return mw(e6);
  if (lw(e6)) return hw(e6);
  throw Error(`non exhaustive match`);
}
function mw(e6) {
  let t2 = [], n2 = e6.definition, r2 = 0, i2 = n2.length > r2, a2, o2 = true;
  for (; i2 && o2; ) a2 = n2[r2], o2 = cw(a2), t2 = t2.concat(pw(a2)), r2 += 1, i2 = n2.length > r2;
  return kh(t2);
}
function hw(e6) {
  return kh(gl(z(e6.definition, (e7) => pw(e7))));
}
function gw(e6) {
  return [e6.terminalType];
}
const _w = `_~IN~_`;
var vw = class extends dw {
  constructor(e6) {
    super(), this.topProd = e6, this.follows = {};
  }
  startWalking() {
    return this.walk(this.topProd), this.follows;
  }
  walkTerminal(e6, t2, n2) {
  }
  walkProdRef(e6, t2, n2) {
    let r2 = bw(e6.referencedRule, e6.idx) + this.topProd.name, i2 = pw(new QC({ definition: t2.concat(n2) }));
    this.follows[r2] = i2;
  }
};
function yw(e6) {
  let t2 = {};
  return R(e6, (e7) => {
    Fs(t2, new vw(e7).startWalking());
  }), t2;
}
function bw(e6, t2) {
  return e6.name + t2 + _w;
}
var xw = {}, Sw = new Xn();
function Cw(e6) {
  let t2 = e6.toString();
  if (xw.hasOwnProperty(t2)) return xw[t2];
  {
    let e7 = Sw.pattern(t2);
    return xw[t2] = e7, e7;
  }
}
function ww() {
  xw = {};
}
var Tw = `Complement Sets are not supported for first char optimization`;
const Ew = `Unable to use "first char" lexer optimizations:
`;
function Dw(e6, t2 = false) {
  try {
    let t3 = Cw(e6);
    return Ow(t3.value, {}, t3.flags.ignoreCase);
  } catch (n2) {
    if (n2.message === Tw) t2 && jh(`${Ew}	Unable to optimize: < ${e6.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
    else {
      let n3 = ``;
      t2 && (n3 = `
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`), Ah(`${Ew}
	Failed parsing: < ${e6.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues` + n3);
    }
  }
  return [];
}
function Ow(e6, t2, n2) {
  switch (e6.type) {
    case `Disjunction`:
      for (let r3 = 0; r3 < e6.value.length; r3++) Ow(e6.value[r3], t2, n2);
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
          case `Lookbehind`:
          case `NegativeLookbehind`:
          case `StartAnchor`:
          case `WordBoundary`:
          case `NonWordBoundary`:
            continue;
        }
        let a2 = i2;
        switch (a2.type) {
          case `Character`:
            kw(a2.value, t2, n2);
            break;
          case `Set`:
            if (a2.complement === true) throw Error(Tw);
            R(a2.value, (e8) => {
              if (typeof e8 == `number`) kw(e8, t2, n2);
              else {
                let r3 = e8;
                if (n2 === true) for (let e9 = r3.from; e9 <= r3.to; e9++) kw(e9, t2, n2);
                else {
                  for (let e9 = r3.from; e9 <= r3.to && e9 < 256; e9++) kw(e9, t2, n2);
                  if (r3.to >= 256) {
                    let e9 = r3.from >= 256 ? r3.from : 256, n3 = r3.to, i3 = pT(e9), a3 = pT(n3);
                    for (let e10 = i3; e10 <= a3; e10++) t2[e10] = e10;
                  }
                }
              }
            });
            break;
          case `Group`:
            Ow(a2.value, t2, n2);
            break;
          default:
            throw Error(`Non Exhaustive Match`);
        }
        let o2 = a2.quantifier !== void 0 && a2.quantifier.atLeast === 0;
        if (a2.type === `Group` && Mw(a2) === false || a2.type !== `Group` && o2 === false) break;
      }
      break;
    default:
      throw Error(`non exhaustive match!`);
  }
  return Vm(t2);
}
function kw(e6, t2, n2) {
  let r2 = pT(e6);
  t2[r2] = r2, n2 === true && Aw(e6, t2);
}
function Aw(e6, t2) {
  let n2 = String.fromCharCode(e6), r2 = n2.toUpperCase();
  if (r2 !== n2) {
    let e7 = pT(r2.charCodeAt(0));
    t2[e7] = e7;
  } else {
    let e7 = n2.toLowerCase();
    if (e7 !== n2) {
      let n3 = pT(e7.charCodeAt(0));
      t2[n3] = n3;
    }
  }
}
function jw(e6, t2) {
  return xm(e6.value, (e7) => {
    if (typeof e7 == `number`) return Wm(t2, e7);
    {
      let n2 = e7;
      return xm(t2, (e8) => n2.from <= e8 && e8 <= n2.to) !== void 0;
    }
  });
}
function Mw(e6) {
  let t2 = e6.quantifier;
  return t2 && t2.atLeast === 0 ? true : e6.value ? F(e6.value) ? fm(e6.value, Mw) : Mw(e6.value) : false;
}
var Nw = class extends Zn {
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
        case `Lookbehind`:
          this.visitLookbehind(e6);
          return;
        case `NegativeLookbehind`:
          this.visitNegativeLookbehind(e6);
          return;
      }
      super.visitChildren(e6);
    }
  }
  visitCharacter(e6) {
    Wm(this.targetCharCodes, e6.value) && (this.found = true);
  }
  visitSet(e6) {
    e6.complement ? jw(e6, this.targetCharCodes) === void 0 && (this.found = true) : jw(e6, this.targetCharCodes) !== void 0 && (this.found = true);
  }
};
function Pw(e6, t2) {
  if (t2 instanceof RegExp) {
    let n2 = Cw(t2), r2 = new Nw(e6);
    return r2.visit(n2), r2.found;
  } else return xm(t2, (t3) => Wm(e6, t3.charCodeAt(0))) !== void 0;
}
var Fw = `PATTERN`;
const Iw = `defaultMode`;
function Lw(e6, t2) {
  t2 = Up(t2, { debug: false, safeMode: false, positionTracking: `full`, lineTerminatorCharacters: [`\r`, `
`], tracer: (e7, t3) => t3() });
  let n2 = t2.tracer;
  n2(`initCharCodeToOptimizedIndexMap`, () => {
    mT();
  });
  let r2;
  n2(`Reject Lexer.NA`, () => {
    r2 = yh(e6, (e7) => e7[Fw] === MT.NA);
  });
  let i2 = false, a2;
  n2(`Transform Patterns`, () => {
    i2 = false, a2 = z(r2, (e7) => {
      let t3 = e7[Fw];
      if (nh(t3)) {
        let e8 = t3.source;
        return e8.length === 1 && e8 !== `^` && e8 !== `$` && e8 !== `.` && !t3.ignoreCase ? e8 : e8.length === 2 && e8[0] === `\\` && !Wm([`d`, `D`, `s`, `S`, `t`, `r`, `n`, `t`, `0`, `c`, `b`, `B`, `f`, `v`, `w`, `W`], e8[1]) ? e8[1] : tT(t3);
      } else if (ea(t3)) return i2 = true, { exec: t3 };
      else if (typeof t3 == `object`) return i2 = true, t3;
      else if (typeof t3 == `string`) {
        if (t3.length === 1) return t3;
        {
          let e8 = t3.replace(/[\\^$.*+?()[\]{}|]/g, `\\$&`);
          return tT(new RegExp(e8));
        }
      } else throw Error(`non exhaustive match`);
    });
  });
  let o2, s2, c2, l2, u2;
  n2(`misc mapping`, () => {
    o2 = z(r2, (e7) => e7.tokenTypeIdx), s2 = z(r2, (e7) => {
      let t3 = e7.GROUP;
      if (t3 !== MT.SKIPPED) {
        if (Lm(t3)) return t3;
        if (ih(t3)) return false;
        throw Error(`non exhaustive match`);
      }
    }), c2 = z(r2, (e7) => {
      let t3 = e7.LONGER_ALT;
      if (t3) return F(t3) ? z(t3, (e8) => qm(r2, e8)) : [qm(r2, t3)];
    }), l2 = z(r2, (e7) => e7.PUSH_MODE), u2 = z(r2, (e7) => B(e7, `POP_MODE`));
  });
  let d2;
  n2(`Line Terminator Handling`, () => {
    let e7 = uT(t2.lineTerminatorCharacters);
    d2 = z(r2, (e8) => false), t2.positionTracking !== `onlyOffset` && (d2 = z(r2, (t3) => B(t3, `LINE_BREAKS`) ? !!t3.LINE_BREAKS : cT(t3, e7) === false && Pw(e7, t3.PATTERN)));
  });
  let f2, p2, m2, h2;
  n2(`Misc Mapping #2`, () => {
    f2 = z(r2, aT), p2 = z(a2, oT), m2 = _h(r2, (e7, t3) => {
      let n3 = t3.GROUP;
      return Lm(n3) && n3 !== MT.SKIPPED && (e7[n3] = []), e7;
    }, {}), h2 = z(a2, (e7, t3) => ({ pattern: a2[t3], longerAlt: c2[t3], canLineTerminator: d2[t3], isCustom: f2[t3], short: p2[t3], group: s2[t3], push: l2[t3], pop: u2[t3], tokenTypeIdx: o2[t3], tokenType: r2[t3] }));
  });
  let g2 = true, _2 = [];
  return t2.safeMode || n2(`First Char Optimization`, () => {
    _2 = _h(r2, (e7, n3, r3) => {
      if (typeof n3.PATTERN == `string`) dT(e7, pT(n3.PATTERN.charCodeAt(0)), h2[r3]);
      else if (F(n3.START_CHARS_HINT)) {
        let t3;
        R(n3.START_CHARS_HINT, (n4) => {
          let i3 = pT(typeof n4 == `string` ? n4.charCodeAt(0) : n4);
          t3 !== i3 && (t3 = i3, dT(e7, i3, h2[r3]));
        });
      } else if (nh(n3.PATTERN)) if (n3.PATTERN.unicode) g2 = false, t2.ensureOptimizations && Ah(`${Ew}	Unable to analyze < ${n3.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);
      else {
        let i3 = Dw(n3.PATTERN, t2.ensureOptimizations);
        V(i3) && (g2 = false), R(i3, (t3) => {
          dT(e7, t3, h2[r3]);
        });
      }
      else t2.ensureOptimizations && Ah(`${Ew}	TokenType: <${n3.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`), g2 = false;
      return e7;
    }, []);
  }), { emptyGroups: m2, patternIdxToConfig: h2, charCodeToPatternIdxToConfig: _2, hasCustom: i2, canBeOptimized: g2 };
}
function Rw(e6, t2) {
  let n2 = [], r2 = Bw(e6);
  n2 = n2.concat(r2.errors);
  let i2 = Vw(r2.valid), a2 = i2.valid;
  return n2 = n2.concat(i2.errors), n2 = n2.concat(zw(a2)), n2 = n2.concat(Yw(a2)), n2 = n2.concat(Xw(a2, t2)), n2 = n2.concat(Zw(a2)), n2;
}
function zw(e6) {
  let t2 = [], n2 = gm(e6, (e7) => nh(e7[Fw]));
  return t2 = t2.concat(Uw(n2)), t2 = t2.concat(Kw(n2)), t2 = t2.concat(qw(n2)), t2 = t2.concat(Jw(n2)), t2 = t2.concat(Ww(n2)), t2;
}
function Bw(e6) {
  let t2 = gm(e6, (e7) => !B(e7, Fw));
  return { errors: z(t2, (e7) => ({ message: `Token Type: ->` + e7.name + `<- missing static 'PATTERN' property`, type: G.MISSING_PATTERN, tokenTypes: [e7] })), valid: Zp(e6, t2) };
}
function Vw(e6) {
  let t2 = gm(e6, (e7) => {
    let t3 = e7[Fw];
    return !nh(t3) && !ea(t3) && !B(t3, `exec`) && !Lm(t3);
  });
  return { errors: z(t2, (e7) => ({ message: `Token Type: ->` + e7.name + `<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.`, type: G.INVALID_PATTERN, tokenTypes: [e7] })), valid: Zp(e6, t2) };
}
var Hw = /[^\\][$]/;
function Uw(e6) {
  class t2 extends Zn {
    constructor() {
      super(...arguments), this.found = false;
    }
    visitEndAnchor(e7) {
      this.found = true;
    }
  }
  return z(gm(e6, (e7) => {
    let n2 = e7.PATTERN;
    try {
      let e8 = Cw(n2), r2 = new t2();
      return r2.visit(e8), r2.found;
    } catch {
      return Hw.test(n2.source);
    }
  }), (e7) => ({ message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + e7.name + `<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`, type: G.EOI_ANCHOR_FOUND, tokenTypes: [e7] }));
}
function Ww(e6) {
  return z(gm(e6, (e7) => e7.PATTERN.test(``)), (e7) => ({ message: `Token Type: ->` + e7.name + `<- static 'PATTERN' must not match an empty string`, type: G.EMPTY_MATCH_PATTERN, tokenTypes: [e7] }));
}
var Gw = /[^\\[][\^]|^\^/;
function Kw(e6) {
  class t2 extends Zn {
    constructor() {
      super(...arguments), this.found = false;
    }
    visitStartAnchor(e7) {
      this.found = true;
    }
  }
  return z(gm(e6, (e7) => {
    let n2 = e7.PATTERN;
    try {
      let e8 = Cw(n2), r2 = new t2();
      return r2.visit(e8), r2.found;
    } catch {
      return Gw.test(n2.source);
    }
  }), (e7) => ({ message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + e7.name + `<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`, type: G.SOI_ANCHOR_FOUND, tokenTypes: [e7] }));
}
function qw(e6) {
  return z(gm(e6, (e7) => {
    let t2 = e7[Fw];
    return t2 instanceof RegExp && (t2.multiline || t2.global);
  }), (e7) => ({ message: `Token Type: ->` + e7.name + `<- static 'PATTERN' may NOT contain global('g') or multiline('m')`, type: G.UNSUPPORTED_FLAGS_FOUND, tokenTypes: [e7] }));
}
function Jw(e6) {
  let t2 = [], n2 = z(e6, (n3) => _h(e6, (e7, r2) => n3.PATTERN.source === r2.PATTERN.source && !Wm(t2, r2) && r2.PATTERN !== MT.NA ? (t2.push(r2), e7.push(r2), e7) : e7, []));
  return n2 = nf(n2), z(gm(n2, (e7) => e7.length > 1), (e7) => {
    let t3 = z(e7, (e8) => e8.name);
    return { message: `The same RegExp pattern ->${Cm(e7).PATTERN}<-has been used in all of the following Token Types: ${t3.join(`, `)} <-`, type: G.DUPLICATE_PATTERNS_FOUND, tokenTypes: e7 };
  });
}
function Yw(e6) {
  return z(gm(e6, (e7) => {
    if (!B(e7, `GROUP`)) return false;
    let t2 = e7.GROUP;
    return t2 !== MT.SKIPPED && t2 !== MT.NA && !Lm(t2);
  }), (e7) => ({ message: `Token Type: ->` + e7.name + `<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String`, type: G.INVALID_GROUP_TYPE_FOUND, tokenTypes: [e7] }));
}
function Xw(e6, t2) {
  return z(gm(e6, (e7) => e7.PUSH_MODE !== void 0 && !Wm(t2, e7.PUSH_MODE)), (e7) => ({ message: `Token Type: ->${e7.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${e7.PUSH_MODE}<-which does not exist`, type: G.PUSH_MODE_DOES_NOT_EXIST, tokenTypes: [e7] }));
}
function Zw(e6) {
  let t2 = [], n2 = _h(e6, (e7, t3, n3) => {
    let r2 = t3.PATTERN;
    return r2 === MT.NA || (Lm(r2) ? e7.push({ str: r2, idx: n3, tokenType: t3 }) : nh(r2) && $w(r2) && e7.push({ str: r2.source, idx: n3, tokenType: t3 })), e7;
  }, []);
  return R(e6, (e7, r2) => {
    R(n2, ({ str: n3, idx: i2, tokenType: a2 }) => {
      if (r2 < i2 && Qw(n3, e7.PATTERN)) {
        let n4 = `Token: ->${a2.name}<- can never be matched.
Because it appears AFTER the Token Type ->${e7.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
        t2.push({ message: n4, type: G.UNREACHABLE_PATTERN, tokenTypes: [e7, a2] });
      }
    });
  }), t2;
}
function Qw(e6, t2) {
  if (nh(t2)) {
    if (eT(t2)) return false;
    let n2 = t2.exec(e6);
    return n2 !== null && n2.index === 0;
  } else if (ea(t2)) return t2(e6, 0, [], {});
  else if (B(t2, `exec`)) return t2.exec(e6, 0, [], {});
  else if (typeof t2 == `string`) return t2 === e6;
  else throw Error(`non exhaustive match`);
}
function $w(e6) {
  return xm([`.`, `\\`, `[`, `]`, `|`, `^`, `$`, `(`, `)`, `?`, `*`, `+`, `{`], (t2) => e6.source.indexOf(t2) !== -1) === void 0;
}
function eT(e6) {
  return /(\(\?=)|(\(\?!)|(\(\?<=)|(\(\?<!)/.test(e6.source);
}
function tT(e6) {
  let t2 = e6.ignoreCase ? `iy` : `y`;
  return RegExp(`${e6.source}`, t2);
}
function nT(e6, t2, n2) {
  let r2 = [];
  return B(e6, `defaultMode`) || r2.push({ message: `A MultiMode Lexer cannot be initialized without a <` + Iw + `> property in its definition
`, type: G.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE }), B(e6, `modes`) || r2.push({ message: `A MultiMode Lexer cannot be initialized without a <modes> property in its definition
`, type: G.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY }), B(e6, `modes`) && B(e6, `defaultMode`) && !B(e6.modes, e6.defaultMode) && r2.push({ message: `A MultiMode Lexer cannot be initialized with a ${Iw}: <${e6.defaultMode}>which does not exist
`, type: G.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST }), B(e6, `modes`) && R(e6.modes, (e7, t3) => {
    R(e7, (n3, i2) => {
      ih(n3) ? r2.push({ message: `A Lexer cannot be initialized using an undefined Token Type. Mode:<${t3}> at index: <${i2}>
`, type: G.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED }) : B(n3, `LONGER_ALT`) && R(F(n3.LONGER_ALT) ? n3.LONGER_ALT : [n3.LONGER_ALT], (i3) => {
        !ih(i3) && !Wm(e7, i3) && r2.push({ message: `A MultiMode Lexer cannot be initialized with a longer_alt <${i3.name}> on token <${n3.name}> outside of mode <${t3}>
`, type: G.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE });
      });
    });
  }), r2;
}
function rT(e6, t2, n2) {
  let r2 = [], i2 = false, a2 = yh(nf(gl(Vm(e6.modes))), (e7) => e7[Fw] === MT.NA), o2 = uT(n2);
  return t2 && R(a2, (e7) => {
    let t3 = cT(e7, o2);
    if (t3 !== false) {
      let n3 = { message: lT(e7, t3), type: t3.issue, tokenType: e7 };
      r2.push(n3);
    } else B(e7, `LINE_BREAKS`) ? e7.LINE_BREAKS === true && (i2 = true) : Pw(o2, e7.PATTERN) && (i2 = true);
  }), t2 && !i2 && r2.push({ message: `Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`, type: G.NO_LINE_BREAKS_FLAGS }), r2;
}
function iT(e6) {
  let t2 = {};
  return R(Ns(e6), (n2) => {
    let r2 = e6[n2];
    if (F(r2)) t2[n2] = [];
    else throw Error(`non exhaustive match`);
  }), t2;
}
function aT(e6) {
  let t2 = e6.PATTERN;
  if (nh(t2)) return false;
  if (ea(t2) || B(t2, `exec`)) return true;
  if (Lm(t2)) return false;
  throw Error(`non exhaustive match`);
}
function oT(e6) {
  return Lm(e6) && e6.length === 1 ? e6.charCodeAt(0) : false;
}
const sT = { test: function(e6) {
  let t2 = e6.length;
  for (let n2 = this.lastIndex; n2 < t2; n2++) {
    let t3 = e6.charCodeAt(n2);
    if (t3 === 10) return this.lastIndex = n2 + 1, true;
    if (t3 === 13) return e6.charCodeAt(n2 + 1) === 10 ? this.lastIndex = n2 + 2 : this.lastIndex = n2 + 1, true;
  }
  return false;
}, lastIndex: 0 };
function cT(e6, t2) {
  if (B(e6, `LINE_BREAKS`)) return false;
  if (nh(e6.PATTERN)) {
    try {
      Pw(t2, e6.PATTERN);
    } catch (e7) {
      return { issue: G.IDENTIFY_TERMINATOR, errMsg: e7.message };
    }
    return false;
  } else if (Lm(e6.PATTERN)) return false;
  else if (aT(e6)) return { issue: G.CUSTOM_LINE_BREAK };
  else throw Error(`non exhaustive match`);
}
function lT(e6, t2) {
  if (t2.issue === G.IDENTIFY_TERMINATOR) return `Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${e6.name}> Token Type
	 Root cause: ${t2.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
  if (t2.issue === G.CUSTOM_LINE_BREAK) return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${e6.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
  throw Error(`non exhaustive match`);
}
function uT(e6) {
  return z(e6, (e7) => Lm(e7) ? e7.charCodeAt(0) : e7);
}
function dT(e6, t2, n2) {
  e6[t2] === void 0 ? e6[t2] = [n2] : e6[t2].push(n2);
}
var fT = [];
function pT(e6) {
  return e6 < 256 ? e6 : fT[e6];
}
function mT() {
  if (V(fT)) {
    fT = Array(65536);
    for (let e6 = 0; e6 < 65536; e6++) fT[e6] = e6 > 255 ? 255 + ~~(e6 / 255) : e6;
  }
}
function hT(e6, t2) {
  let n2 = e6.tokenTypeIdx;
  return n2 === t2.tokenTypeIdx ? true : t2.isParent === true && t2.categoryMatchesMap[n2] === true;
}
function gT(e6, t2) {
  return e6.tokenTypeIdx === t2.tokenTypeIdx;
}
let _T = 1;
const vT = {};
function yT(e6) {
  let t2 = bT(e6);
  xT(t2), CT(t2), ST(t2), R(t2, (e7) => {
    e7.isParent = e7.categoryMatches.length > 0;
  });
}
function bT(e6) {
  let t2 = ef(e6), n2 = e6, r2 = true;
  for (; r2; ) {
    n2 = nf(gl(z(n2, (e8) => e8.CATEGORIES)));
    let e7 = Zp(n2, t2);
    t2 = t2.concat(e7), V(e7) ? r2 = false : n2 = e7;
  }
  return t2;
}
function xT(e6) {
  R(e6, (e7) => {
    TT(e7) || (vT[_T] = e7, e7.tokenTypeIdx = _T++), ET(e7) && !F(e7.CATEGORIES) && (e7.CATEGORIES = [e7.CATEGORIES]), ET(e7) || (e7.CATEGORIES = []), DT(e7) || (e7.categoryMatches = []), OT(e7) || (e7.categoryMatchesMap = {});
  });
}
function ST(e6) {
  R(e6, (e7) => {
    e7.categoryMatches = [], R(e7.categoryMatchesMap, (t2, n2) => {
      e7.categoryMatches.push(vT[n2].tokenTypeIdx);
    });
  });
}
function CT(e6) {
  R(e6, (e7) => {
    wT([], e7);
  });
}
function wT(e6, t2) {
  R(e6, (e7) => {
    t2.categoryMatchesMap[e7.tokenTypeIdx] = true;
  }), R(t2.CATEGORIES, (n2) => {
    let r2 = e6.concat(t2);
    Wm(r2, n2) || wT(r2, n2);
  });
}
function TT(e6) {
  return B(e6, `tokenTypeIdx`);
}
function ET(e6) {
  return B(e6, `CATEGORIES`);
}
function DT(e6) {
  return B(e6, `categoryMatches`);
}
function OT(e6) {
  return B(e6, `categoryMatchesMap`);
}
function kT(e6) {
  return B(e6, `tokenTypeIdx`);
}
const AT = { buildUnableToPopLexerModeMessage(e6) {
  return `Unable to pop Lexer Mode after encountering Token ->${e6.image}<- The Mode Stack is empty`;
}, buildUnexpectedCharactersMessage(e6, t2, n2, r2, i2, a2) {
  return `unexpected character: ->${e6.charAt(t2)}<- at offset: ${t2}, skipped ${n2} characters.`;
} };
var G;
(function(e6) {
  e6[e6.MISSING_PATTERN = 0] = `MISSING_PATTERN`, e6[e6.INVALID_PATTERN = 1] = `INVALID_PATTERN`, e6[e6.EOI_ANCHOR_FOUND = 2] = `EOI_ANCHOR_FOUND`, e6[e6.UNSUPPORTED_FLAGS_FOUND = 3] = `UNSUPPORTED_FLAGS_FOUND`, e6[e6.DUPLICATE_PATTERNS_FOUND = 4] = `DUPLICATE_PATTERNS_FOUND`, e6[e6.INVALID_GROUP_TYPE_FOUND = 5] = `INVALID_GROUP_TYPE_FOUND`, e6[e6.PUSH_MODE_DOES_NOT_EXIST = 6] = `PUSH_MODE_DOES_NOT_EXIST`, e6[e6.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7] = `MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE`, e6[e6.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8] = `MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY`, e6[e6.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9] = `MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST`, e6[e6.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10] = `LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED`, e6[e6.SOI_ANCHOR_FOUND = 11] = `SOI_ANCHOR_FOUND`, e6[e6.EMPTY_MATCH_PATTERN = 12] = `EMPTY_MATCH_PATTERN`, e6[e6.NO_LINE_BREAKS_FLAGS = 13] = `NO_LINE_BREAKS_FLAGS`, e6[e6.UNREACHABLE_PATTERN = 14] = `UNREACHABLE_PATTERN`, e6[e6.IDENTIFY_TERMINATOR = 15] = `IDENTIFY_TERMINATOR`, e6[e6.CUSTOM_LINE_BREAK = 16] = `CUSTOM_LINE_BREAK`, e6[e6.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE = 17] = `MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE`;
})(G || (G = {}));
var jT = { deferDefinitionErrorsHandling: false, positionTracking: `full`, lineTerminatorsPattern: /\n|\r\n?/g, lineTerminatorCharacters: [`
`, `\r`], ensureOptimizations: false, safeMode: false, errorMessageProvider: AT, traceInitPerf: false, skipValidations: false, recoveryEnabled: true };
Object.freeze(jT);
var MT = class {
  constructor(e6, t2 = jT) {
    if (this.lexerDefinition = e6, this.lexerDefinitionErrors = [], this.lexerDefinitionWarning = [], this.patternIdxToConfig = {}, this.charCodeToPatternIdxToConfig = {}, this.modes = [], this.emptyGroups = {}, this.trackStartLines = true, this.trackEndLines = true, this.hasCustom = false, this.canModeBeOptimized = {}, this.TRACE_INIT = (e7, t3) => {
      if (this.traceInitPerf === true) {
        this.traceInitIndent++;
        let n3 = Array(this.traceInitIndent + 1).join(`	`);
        this.traceInitIndent < this.traceInitMaxIdent && console.log(`${n3}--> <${e7}>`);
        let { time: r2, value: i2 } = Mh(t3), a2 = r2 > 10 ? console.warn : console.log;
        return this.traceInitIndent < this.traceInitMaxIdent && a2(`${n3}<-- <${e7}> time: ${r2}ms`), this.traceInitIndent--, i2;
      } else return t3();
    }, typeof t2 == `boolean`) throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);
    this.config = Fs({}, jT, t2);
    let n2 = this.config.traceInitPerf;
    n2 === true ? (this.traceInitMaxIdent = 1 / 0, this.traceInitPerf = true) : typeof n2 == `number` && (this.traceInitMaxIdent = n2, this.traceInitPerf = true), this.traceInitIndent = -1, this.TRACE_INIT(`Lexer Constructor`, () => {
      let n3, r2 = true;
      this.TRACE_INIT(`Lexer Config handling`, () => {
        if (this.config.lineTerminatorsPattern === jT.lineTerminatorsPattern) this.config.lineTerminatorsPattern = sT;
        else if (this.config.lineTerminatorCharacters === jT.lineTerminatorCharacters) throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);
        if (t2.safeMode && t2.ensureOptimizations) throw Error(`"safeMode" and "ensureOptimizations" flags are mutually exclusive.`);
        this.trackStartLines = /full|onlyStart/i.test(this.config.positionTracking), this.trackEndLines = /full/i.test(this.config.positionTracking), F(e6) ? n3 = { modes: { defaultMode: ef(e6) }, defaultMode: Iw } : (r2 = false, n3 = ef(e6));
      }), this.config.skipValidations === false && (this.TRACE_INIT(`performRuntimeChecks`, () => {
        this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(nT(n3, this.trackStartLines, this.config.lineTerminatorCharacters));
      }), this.TRACE_INIT(`performWarningRuntimeChecks`, () => {
        this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat(rT(n3, this.trackStartLines, this.config.lineTerminatorCharacters));
      })), n3.modes = n3.modes ? n3.modes : {}, R(n3.modes, (e7, t3) => {
        n3.modes[t3] = yh(e7, (e8) => ih(e8));
      });
      let i2 = Ns(n3.modes);
      if (R(n3.modes, (e7, n4) => {
        this.TRACE_INIT(`Mode: <${n4}> processing`, () => {
          if (this.modes.push(n4), this.config.skipValidations === false && this.TRACE_INIT(`validatePatterns`, () => {
            this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(Rw(e7, i2));
          }), V(this.lexerDefinitionErrors)) {
            yT(e7);
            let r3;
            this.TRACE_INIT(`analyzeTokenTypes`, () => {
              r3 = Lw(e7, { lineTerminatorCharacters: this.config.lineTerminatorCharacters, positionTracking: t2.positionTracking, ensureOptimizations: t2.ensureOptimizations, safeMode: t2.safeMode, tracer: this.TRACE_INIT });
            }), this.patternIdxToConfig[n4] = r3.patternIdxToConfig, this.charCodeToPatternIdxToConfig[n4] = r3.charCodeToPatternIdxToConfig, this.emptyGroups = Fs({}, this.emptyGroups, r3.emptyGroups), this.hasCustom = r3.hasCustom || this.hasCustom, this.canModeBeOptimized[n4] = r3.canBeOptimized;
          }
        });
      }), this.defaultMode = n3.defaultMode, !V(this.lexerDefinitionErrors) && !this.config.deferDefinitionErrorsHandling) {
        let e7 = z(this.lexerDefinitionErrors, (e8) => e8.message).join(`-----------------------
`);
        throw Error(`Errors detected in definition of Lexer:
` + e7);
      }
      R(this.lexerDefinitionWarning, (e7) => {
        jh(e7.message);
      }), this.TRACE_INIT(`Choosing sub-methods implementations`, () => {
        if (r2 && (this.handleModes = Da), this.trackStartLines === false && (this.computeNewColumn = Ji), this.trackEndLines === false && (this.updateTokenEndLineColumnLocation = Da), /full/i.test(this.config.positionTracking)) this.createTokenInstance = this.createFullToken;
        else if (/onlyStart/i.test(this.config.positionTracking)) this.createTokenInstance = this.createStartOnlyToken;
        else if (/onlyOffset/i.test(this.config.positionTracking)) this.createTokenInstance = this.createOffsetOnlyToken;
        else throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
        this.hasCustom ? (this.addToken = this.addTokenUsingPush, this.handlePayload = this.handlePayloadWithCustom) : (this.addToken = this.addTokenUsingMemberAccess, this.handlePayload = this.handlePayloadNoCustom);
      }), this.TRACE_INIT(`Failed Optimization Warnings`, () => {
        let e7 = _h(this.canModeBeOptimized, (e8, t3, n4) => (t3 === false && e8.push(n4), e8), []);
        if (t2.ensureOptimizations && !V(e7)) throw Error(`Lexer Modes: < ${e7.join(`, `)} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`);
      }), this.TRACE_INIT(`clearRegExpParserCache`, () => {
        ww();
      }), this.TRACE_INIT(`toFastProperties`, () => {
        Nh(this);
      });
    });
  }
  tokenize(e6, t2 = this.defaultMode) {
    if (!V(this.lexerDefinitionErrors)) {
      let e7 = z(this.lexerDefinitionErrors, (e8) => e8.message).join(`-----------------------
`);
      throw Error(`Unable to Tokenize because Errors detected in definition of Lexer:
` + e7);
    }
    return this.tokenizeInternal(e6, t2);
  }
  tokenizeInternal(e6, t2) {
    let n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2, g2, _2 = e6, v2 = _2.length, y2 = 0, b2 = 0, x2 = this.hasCustom ? 0 : Math.floor(e6.length / 10), S2 = Array(x2), C2 = [], w2 = this.trackStartLines ? 1 : void 0, T2 = this.trackStartLines ? 1 : void 0, ee2 = iT(this.emptyGroups), te2 = this.trackStartLines, ne2 = this.config.lineTerminatorsPattern, E2 = 0, D2 = [], re2 = [], ie2 = [], ae2 = [];
    Object.freeze(ae2);
    let oe2 = false, se2 = (e7) => {
      if (ie2.length === 1 && e7.tokenType.PUSH_MODE === void 0) {
        let t3 = this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(e7);
        C2.push({ offset: e7.startOffset, line: e7.startLine, column: e7.startColumn, length: e7.image.length, message: t3 });
      } else {
        ie2.pop();
        let e8 = $p(ie2);
        D2 = this.patternIdxToConfig[e8], re2 = this.charCodeToPatternIdxToConfig[e8], E2 = D2.length;
        let t3 = this.canModeBeOptimized[e8] && this.config.safeMode === false;
        oe2 = !!(re2 && t3);
      }
    };
    function ce2(e7) {
      ie2.push(e7), re2 = this.charCodeToPatternIdxToConfig[e7], D2 = this.patternIdxToConfig[e7], E2 = D2.length, E2 = D2.length;
      let t3 = this.canModeBeOptimized[e7] && this.config.safeMode === false;
      oe2 = !!(re2 && t3);
    }
    ce2.call(this, t2);
    let O2, le2 = this.config.recoveryEnabled;
    for (; y2 < v2; ) {
      s2 = null, u2 = -1;
      let t3 = _2.charCodeAt(y2), x3;
      if (oe2) {
        let e7 = pT(t3), n3 = re2[e7];
        x3 = n3 === void 0 ? ae2 : n3;
      } else x3 = D2;
      let k2 = x3.length;
      for (n2 = 0; n2 < k2; n2++) {
        O2 = x3[n2];
        let r3 = O2.pattern;
        c2 = null;
        let d3 = O2.short;
        if (d3 === false ? O2.isCustom === true ? (g2 = r3.exec(_2, y2, S2, ee2), g2 === null ? s2 = null : (s2 = g2[0], u2 = s2.length, g2.payload !== void 0 && (c2 = g2.payload))) : (r3.lastIndex = y2, u2 = this.matchLength(r3, e6, y2)) : t3 === d3 && (u2 = 1, s2 = r3), u2 !== -1) {
          if (o2 = O2.longerAlt, o2 !== void 0) {
            s2 = e6.substring(y2, y2 + u2);
            let t4 = o2.length;
            for (i2 = 0; i2 < t4; i2++) {
              let t5 = D2[o2[i2]], n3 = t5.pattern;
              if (l2 = null, t5.isCustom === true ? (g2 = n3.exec(_2, y2, S2, ee2), g2 === null ? a2 = null : (a2 = g2[0], g2.payload !== void 0 && (l2 = g2.payload))) : (n3.lastIndex = y2, a2 = this.match(n3, e6, y2)), a2 && a2.length > s2.length) {
                s2 = a2, u2 = a2.length, c2 = l2, O2 = t5;
                break;
              }
            }
          }
          break;
        }
      }
      if (u2 !== -1) {
        if (d2 = O2.group, d2 !== void 0 && (s2 = s2 === null ? e6.substring(y2, y2 + u2) : s2, f2 = O2.tokenTypeIdx, p2 = this.createTokenInstance(s2, y2, f2, O2.tokenType, w2, T2, u2), this.handlePayload(p2, c2), d2 === false ? b2 = this.addToken(S2, b2, p2) : ee2[d2].push(p2)), te2 === true && O2.canLineTerminator === true) {
          let t4 = 0, n3, r3;
          ne2.lastIndex = 0;
          do
            s2 = s2 === null ? e6.substring(y2, y2 + u2) : s2, n3 = ne2.test(s2), n3 === true && (r3 = ne2.lastIndex - 1, t4++);
          while (n3 === true);
          t4 === 0 ? T2 = this.computeNewColumn(T2, u2) : (w2 += t4, T2 = u2 - r3, this.updateTokenEndLineColumnLocation(p2, d2, r3, t4, w2, T2, u2));
        } else T2 = this.computeNewColumn(T2, u2);
        y2 += u2, this.handleModes(O2, se2, ce2, p2);
      } else {
        let t4 = y2, n3 = w2, i3 = T2, a3 = le2 === false;
        for (; a3 === false && y2 < v2; ) for (y2++, r2 = 0; r2 < E2; r2++) {
          let t5 = D2[r2], n4 = t5.pattern, i4 = t5.short;
          if (i4 === false ? t5.isCustom === true ? a3 = n4.exec(_2, y2, S2, ee2) !== null : (n4.lastIndex = y2, a3 = n4.exec(e6) !== null) : _2.charCodeAt(y2) === i4 && (a3 = true), a3 === true) break;
        }
        if (m2 = y2 - t4, T2 = this.computeNewColumn(T2, m2), h2 = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(_2, t4, m2, n3, i3, $p(ie2)), C2.push({ offset: t4, line: n3, column: i3, length: m2, message: h2 }), le2 === false) break;
      }
    }
    return this.hasCustom || (S2.length = b2), { tokens: S2, groups: ee2, errors: C2 };
  }
  handleModes(e6, t2, n2, r2) {
    if (e6.pop === true) {
      let i2 = e6.push;
      t2(r2), i2 !== void 0 && n2.call(this, i2);
    } else e6.push !== void 0 && n2.call(this, e6.push);
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
  match(e6, t2, n2) {
    return e6.test(t2) === true ? t2.substring(n2, e6.lastIndex) : null;
  }
  matchLength(e6, t2, n2) {
    return e6.test(t2) === true ? e6.lastIndex - n2 : -1;
  }
};
MT.SKIPPED = `This marks a skipped Token pattern, this means each token identified by it will be consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.`, MT.NA = /NOT_APPLICABLE/;
function NT(e6) {
  return PT(e6) ? e6.LABEL : e6.name;
}
function PT(e6) {
  return Lm(e6.LABEL) && e6.LABEL !== ``;
}
var FT = `parent`, IT = `categories`, LT = `label`, RT = `group`, zT = `push_mode`, BT = `pop_mode`, VT = `longer_alt`, HT = `line_breaks`, UT = `start_chars_hint`;
function WT(e6) {
  return GT(e6);
}
function GT(e6) {
  let t2 = e6.pattern, n2 = {};
  if (n2.name = e6.name, ih(t2) || (n2.PATTERN = t2), B(e6, FT)) throw `The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;
  return B(e6, IT) && (n2.CATEGORIES = e6[IT]), yT([n2]), B(e6, LT) && (n2.LABEL = e6[LT]), B(e6, RT) && (n2.GROUP = e6[RT]), B(e6, BT) && (n2.POP_MODE = e6[BT]), B(e6, zT) && (n2.PUSH_MODE = e6[zT]), B(e6, VT) && (n2.LONGER_ALT = e6[VT]), B(e6, HT) && (n2.LINE_BREAKS = e6[HT]), B(e6, UT) && (n2.START_CHARS_HINT = e6[UT]), n2;
}
const KT = WT({ name: `EOF`, pattern: MT.NA });
yT([KT]);
function qT(e6, t2, n2, r2, i2, a2, o2, s2) {
  return { image: t2, startOffset: n2, endOffset: r2, startLine: i2, endLine: a2, startColumn: o2, endColumn: s2, tokenTypeIdx: e6.tokenTypeIdx, tokenType: e6 };
}
function JT(e6, t2) {
  return hT(e6, t2);
}
const YT = { buildMismatchTokenMessage({ expected: e6, actual: t2, previous: n2, ruleName: r2 }) {
  return `Expecting ${PT(e6) ? `--> ${NT(e6)} <--` : `token of type --> ${e6.name} <--`} but found --> '${t2.image}' <--`;
}, buildNotAllInputParsedMessage({ firstRedundant: e6, ruleName: t2 }) {
  return `Redundant input, expecting EOF but found: ` + e6.image;
}, buildNoViableAltMessage({ expectedPathsPerAlt: e6, actual: t2, previous: n2, customUserDescription: r2, ruleName: i2 }) {
  let a2 = `
but found: '` + Cm(t2).image + `'`;
  return r2 ? `Expecting: ` + r2 + a2 : `Expecting: one of these possible Token sequences:
${z(z(_h(e6, (e7, t3) => e7.concat(t3), []), (e7) => `[${z(e7, (e8) => NT(e8)).join(`, `)}]`), (e7, t3) => `  ${t3 + 1}. ${e7}`).join(`
`)}` + a2;
}, buildEarlyExitMessage({ expectedIterationPaths: e6, actual: t2, customUserDescription: n2, ruleName: r2 }) {
  let i2 = `
but found: '` + Cm(t2).image + `'`;
  return n2 ? `Expecting: ` + n2 + i2 : `Expecting: expecting at least one iteration which starts with one of these possible Token sequences::
  <${z(e6, (e7) => `[${z(e7, (e8) => NT(e8)).join(`,`)}]`).join(` ,`)}>` + i2;
} };
Object.freeze(YT);
const XT = { buildRuleNotFoundError(e6, t2) {
  return `Invalid grammar, reference to a rule which is not defined: ->` + t2.nonTerminalName + `<-
inside top level rule: ->` + e6.name + `<-`;
} }, ZT = { buildDuplicateFoundError(e6, t2) {
  function n2(e7) {
    return e7 instanceof W ? e7.terminalType.name : e7 instanceof XC ? e7.nonTerminalName : ``;
  }
  let r2 = e6.name, i2 = Cm(t2), a2 = i2.idx, o2 = uw(i2), s2 = n2(i2), c2 = `->${o2}${a2 > 0 ? a2 : ``}<- ${s2 ? `with argument: ->${s2}<-` : ``}
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
  let t2 = z(e6.prefixPath, (e7) => NT(e7)).join(`, `), n2 = e6.alternation.idx === 0 ? `` : e6.alternation.idx;
  return `Ambiguous alternatives: <${e6.ambiguityIndices.join(` ,`)}> due to common lookahead prefix
in <OR${n2}> inside <${e6.topLevelRule.name}> Rule,
<${t2}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;
}, buildAlternationAmbiguityError(e6) {
  let t2 = e6.alternation.idx === 0 ? `` : e6.alternation.idx, n2 = e6.prefixPath.length === 0, r2 = `Ambiguous Alternatives Detected: <${e6.ambiguityIndices.join(` ,`)}> in <OR${t2}> inside <${e6.topLevelRule.name}> Rule,
`;
  if (n2) r2 += `These alternatives are all empty (match no tokens), making them indistinguishable.
Only the last alternative may be empty.
`;
  else {
    let t3 = z(e6.prefixPath, (e7) => NT(e7)).join(`, `);
    r2 += `<${t3}> may appears as a prefix path in all these alternatives.
`;
  }
  return r2 += `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, r2;
}, buildEmptyRepetitionError(e6) {
  let t2 = uw(e6.repetition);
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
 ${`${t2} --> ${z(e6.leftRecursionPath, (e7) => e7.name).concat([t2]).join(` --> `)}`}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;
}, buildInvalidRuleNameError(e6) {
  return `deprecated`;
}, buildDuplicateRuleNameError(e6) {
  let t2;
  return t2 = e6.topLevelRule instanceof ZC ? e6.topLevelRule.name : e6.topLevelRule, `Duplicate definition, rule: ->${t2}<- is already defined in the grammar: ->${e6.grammarName}<-`;
} };
function QT(e6, t2) {
  let n2 = new $T(e6, t2);
  return n2.resolveRefs(), n2.errors;
}
var $T = class extends ow {
  constructor(e6, t2) {
    super(), this.nameToTopRule = e6, this.errMsgProvider = t2, this.errors = [];
  }
  resolveRefs() {
    R(Vm(this.nameToTopRule), (e6) => {
      this.currTopLevel = e6, e6.accept(this);
    });
  }
  visitNonTerminal(e6) {
    let t2 = this.nameToTopRule[e6.nonTerminalName];
    if (t2) e6.referencedRule = t2;
    else {
      let t3 = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, e6);
      this.errors.push({ message: t3, type: ZD.UNRESOLVED_SUBRULE_REF, ruleName: this.currTopLevel.name, unresolvedRefName: e6.nonTerminalName });
    }
  }
}, eE = class extends dw {
  constructor(e6, t2) {
    super(), this.topProd = e6, this.path = t2, this.possibleTokTypes = [], this.nextProductionName = ``, this.nextProductionOccurrence = 0, this.found = false, this.isAtEndOfPath = false;
  }
  startWalking() {
    if (this.found = false, this.path.ruleStack[0] !== this.topProd.name) throw Error(`The path does not start with the walker's top Rule!`);
    return this.ruleStack = ef(this.path.ruleStack).reverse(), this.occurrenceStack = ef(this.path.occurrenceStack).reverse(), this.ruleStack.pop(), this.occurrenceStack.pop(), this.updateExpectedNext(), this.walk(this.topProd), this.possibleTokTypes;
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
    V(this.ruleStack) ? (this.nextProductionName = ``, this.nextProductionOccurrence = 0, this.isAtEndOfPath = true) : (this.nextProductionName = this.ruleStack.pop(), this.nextProductionOccurrence = this.occurrenceStack.pop());
  }
}, tE = class extends eE {
  constructor(e6, t2) {
    super(e6, t2), this.path = t2, this.nextTerminalName = ``, this.nextTerminalOccurrence = 0, this.nextTerminalName = this.path.lastTok.name, this.nextTerminalOccurrence = this.path.lastTokOccurrence;
  }
  walkTerminal(e6, t2, n2) {
    this.isAtEndOfPath && e6.terminalType.name === this.nextTerminalName && e6.idx === this.nextTerminalOccurrence && !this.found && (this.possibleTokTypes = pw(new QC({ definition: t2.concat(n2) })), this.found = true);
  }
}, nE = class extends dw {
  constructor(e6, t2) {
    super(), this.topRule = e6, this.occurrence = t2, this.result = { token: void 0, occurrence: void 0, isEndOfRule: void 0 };
  }
  startWalking() {
    return this.walk(this.topRule), this.result;
  }
}, rE = class extends nE {
  walkMany(e6, t2, n2) {
    if (e6.idx === this.occurrence) {
      let e7 = Cm(t2.concat(n2));
      this.result.isEndOfRule = e7 === void 0, e7 instanceof W && (this.result.token = e7.terminalType, this.result.occurrence = e7.idx);
    } else super.walkMany(e6, t2, n2);
  }
}, iE = class extends nE {
  walkManySep(e6, t2, n2) {
    if (e6.idx === this.occurrence) {
      let e7 = Cm(t2.concat(n2));
      this.result.isEndOfRule = e7 === void 0, e7 instanceof W && (this.result.token = e7.terminalType, this.result.occurrence = e7.idx);
    } else super.walkManySep(e6, t2, n2);
  }
}, aE = class extends nE {
  walkAtLeastOne(e6, t2, n2) {
    if (e6.idx === this.occurrence) {
      let e7 = Cm(t2.concat(n2));
      this.result.isEndOfRule = e7 === void 0, e7 instanceof W && (this.result.token = e7.terminalType, this.result.occurrence = e7.idx);
    } else super.walkAtLeastOne(e6, t2, n2);
  }
}, oE = class extends nE {
  walkAtLeastOneSep(e6, t2, n2) {
    if (e6.idx === this.occurrence) {
      let e7 = Cm(t2.concat(n2));
      this.result.isEndOfRule = e7 === void 0, e7 instanceof W && (this.result.token = e7.terminalType, this.result.occurrence = e7.idx);
    } else super.walkAtLeastOneSep(e6, t2, n2);
  }
};
function sE(e6, t2, n2 = []) {
  n2 = ef(n2);
  let r2 = [], i2 = 0;
  function a2(t3) {
    return t3.concat(tm(e6, i2 + 1));
  }
  function o2(e7) {
    let i3 = sE(a2(e7), t2, n2);
    return r2.concat(i3);
  }
  for (; n2.length < t2 && i2 < e6.length; ) {
    let t3 = e6[i2];
    if (t3 instanceof QC || t3 instanceof XC) return o2(t3.definition);
    if (t3 instanceof $C) r2 = o2(t3.definition);
    else if (t3 instanceof ew) return o2(t3.definition.concat([new U({ definition: t3.definition })]));
    else if (t3 instanceof tw) return o2([new QC({ definition: t3.definition }), new U({ definition: [new W({ terminalType: t3.separator })].concat(t3.definition) })]);
    else if (t3 instanceof nw) r2 = o2(t3.definition.concat([new U({ definition: [new W({ terminalType: t3.separator })].concat(t3.definition) })]));
    else if (t3 instanceof U) r2 = o2(t3.definition.concat([new U({ definition: t3.definition })]));
    else if (t3 instanceof rw) return R(t3.definition, (e7) => {
      V(e7.definition) === false && (r2 = o2(e7.definition));
    }), r2;
    else if (t3 instanceof W) n2.push(t3.terminalType);
    else throw Error(`non exhaustive match`);
    i2++;
  }
  return r2.push({ partialPath: n2, suffixDef: tm(e6, i2) }), r2;
}
function cE(e6, t2, n2, r2) {
  let i2 = `EXIT_NONE_TERMINAL`, a2 = [i2], o2 = `EXIT_ALTERNATIVE`, s2 = false, c2 = t2.length, l2 = c2 - r2 - 1, u2 = [], d2 = [];
  for (d2.push({ idx: -1, def: e6, ruleStack: [], occurrenceStack: [] }); !V(d2); ) {
    let e7 = d2.pop();
    if (e7 === o2) {
      s2 && $p(d2).idx <= l2 && d2.pop();
      continue;
    }
    let r3 = e7.def, f2 = e7.idx, p2 = e7.ruleStack, m2 = e7.occurrenceStack;
    if (V(r3)) continue;
    let h2 = r3[0];
    if (h2 === i2) {
      let e8 = { idx: f2, def: tm(r3), ruleStack: rm(p2), occurrenceStack: rm(m2) };
      d2.push(e8);
    } else if (h2 instanceof W) if (f2 < c2 - 1) {
      let e8 = f2 + 1, i3 = t2[e8];
      if (n2(i3, h2.terminalType)) {
        let t3 = { idx: e8, def: tm(r3), ruleStack: p2, occurrenceStack: m2 };
        d2.push(t3);
      }
    } else if (f2 === c2 - 1) u2.push({ nextTokenType: h2.terminalType, nextTokenOccurrence: h2.idx, ruleStack: p2, occurrenceStack: m2 }), s2 = true;
    else throw Error(`non exhaustive match`);
    else if (h2 instanceof XC) {
      let e8 = ef(p2);
      e8.push(h2.nonTerminalName);
      let t3 = ef(m2);
      t3.push(h2.idx);
      let n3 = { idx: f2, def: h2.definition.concat(a2, tm(r3)), ruleStack: e8, occurrenceStack: t3 };
      d2.push(n3);
    } else if (h2 instanceof $C) {
      let e8 = { idx: f2, def: tm(r3), ruleStack: p2, occurrenceStack: m2 };
      d2.push(e8), d2.push(o2);
      let t3 = { idx: f2, def: h2.definition.concat(tm(r3)), ruleStack: p2, occurrenceStack: m2 };
      d2.push(t3);
    } else if (h2 instanceof ew) {
      let e8 = new U({ definition: h2.definition, idx: h2.idx }), t3 = { idx: f2, def: h2.definition.concat([e8], tm(r3)), ruleStack: p2, occurrenceStack: m2 };
      d2.push(t3);
    } else if (h2 instanceof tw) {
      let e8 = new U({ definition: [new W({ terminalType: h2.separator })].concat(h2.definition), idx: h2.idx }), t3 = { idx: f2, def: h2.definition.concat([e8], tm(r3)), ruleStack: p2, occurrenceStack: m2 };
      d2.push(t3);
    } else if (h2 instanceof nw) {
      let e8 = { idx: f2, def: tm(r3), ruleStack: p2, occurrenceStack: m2 };
      d2.push(e8), d2.push(o2);
      let t3 = new U({ definition: [new W({ terminalType: h2.separator })].concat(h2.definition), idx: h2.idx }), n3 = { idx: f2, def: h2.definition.concat([t3], tm(r3)), ruleStack: p2, occurrenceStack: m2 };
      d2.push(n3);
    } else if (h2 instanceof U) {
      let e8 = { idx: f2, def: tm(r3), ruleStack: p2, occurrenceStack: m2 };
      d2.push(e8), d2.push(o2);
      let t3 = new U({ definition: h2.definition, idx: h2.idx }), n3 = { idx: f2, def: h2.definition.concat([t3], tm(r3)), ruleStack: p2, occurrenceStack: m2 };
      d2.push(n3);
    } else if (h2 instanceof rw) for (let e8 = h2.definition.length - 1; e8 >= 0; e8--) {
      let t3 = { idx: f2, def: h2.definition[e8].definition.concat(tm(r3)), ruleStack: p2, occurrenceStack: m2 };
      d2.push(t3), d2.push(o2);
    }
    else if (h2 instanceof QC) d2.push({ idx: f2, def: h2.definition.concat(tm(r3)), ruleStack: p2, occurrenceStack: m2 });
    else if (h2 instanceof ZC) d2.push(lE(h2, f2, p2, m2));
    else throw Error(`non exhaustive match`);
  }
  return u2;
}
function lE(e6, t2, n2, r2) {
  let i2 = ef(n2);
  i2.push(e6.name);
  let a2 = ef(r2);
  return a2.push(1), { idx: t2, def: e6.definition, ruleStack: i2, occurrenceStack: a2 };
}
var K;
(function(e6) {
  e6[e6.OPTION = 0] = `OPTION`, e6[e6.REPETITION = 1] = `REPETITION`, e6[e6.REPETITION_MANDATORY = 2] = `REPETITION_MANDATORY`, e6[e6.REPETITION_MANDATORY_WITH_SEPARATOR = 3] = `REPETITION_MANDATORY_WITH_SEPARATOR`, e6[e6.REPETITION_WITH_SEPARATOR = 4] = `REPETITION_WITH_SEPARATOR`, e6[e6.ALTERNATION = 5] = `ALTERNATION`;
})(K || (K = {}));
function uE(e6) {
  if (e6 instanceof $C || e6 === `Option`) return K.OPTION;
  if (e6 instanceof U || e6 === `Repetition`) return K.REPETITION;
  if (e6 instanceof ew || e6 === `RepetitionMandatory`) return K.REPETITION_MANDATORY;
  if (e6 instanceof tw || e6 === `RepetitionMandatoryWithSeparator`) return K.REPETITION_MANDATORY_WITH_SEPARATOR;
  if (e6 instanceof nw || e6 === `RepetitionWithSeparator`) return K.REPETITION_WITH_SEPARATOR;
  if (e6 instanceof rw || e6 === `Alternation`) return K.ALTERNATION;
  throw Error(`non exhaustive match`);
}
function dE(e6) {
  let { occurrence: t2, rule: n2, prodType: r2, maxLookahead: i2 } = e6, a2 = uE(r2);
  return a2 === K.ALTERNATION ? SE(t2, n2, i2) : CE(t2, n2, a2, i2);
}
function fE(e6, t2, n2, r2, i2, a2) {
  let o2 = SE(e6, t2, n2);
  return a2(o2, r2, EE(o2) ? gT : hT, i2);
}
function pE(e6, t2, n2, r2, i2, a2) {
  let o2 = CE(e6, t2, i2, n2), s2 = EE(o2) ? gT : hT;
  return a2(o2[0], s2, r2);
}
function mE(e6, t2, n2, r2) {
  let i2 = e6.length, a2 = fm(e6, (e7) => fm(e7, (e8) => e8.length === 1));
  if (t2) return function(t3) {
    let r3 = z(t3, (e7) => e7.GATE);
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
    let t3 = _h(z(e6, (e7) => gl(e7)), (e7, t4, n3) => (R(t4, (t5) => {
      B(e7, t5.tokenTypeIdx) || (e7[t5.tokenTypeIdx] = n3), R(t5.categoryMatches, (t6) => {
        B(e7, t6) || (e7[t6] = n3);
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
function hE(e6, t2, n2) {
  let r2 = fm(e6, (e7) => e7.length === 1), i2 = e6.length;
  if (r2 && !n2) {
    let t3 = gl(e6);
    if (t3.length === 1 && V(t3[0].categoryMatches)) {
      let e7 = t3[0].tokenTypeIdx;
      return function() {
        return this.LA(1).tokenTypeIdx === e7;
      };
    } else {
      let e7 = _h(t3, (e8, t4, n3) => (e8[t4.tokenTypeIdx] = true, R(t4.categoryMatches, (t5) => {
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
var gE = class extends dw {
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
    this.checkIsTarget(e6, K.OPTION, t2, n2) || super.walkOption(e6, t2, n2);
  }
  walkAtLeastOne(e6, t2, n2) {
    this.checkIsTarget(e6, K.REPETITION_MANDATORY, t2, n2) || super.walkOption(e6, t2, n2);
  }
  walkAtLeastOneSep(e6, t2, n2) {
    this.checkIsTarget(e6, K.REPETITION_MANDATORY_WITH_SEPARATOR, t2, n2) || super.walkOption(e6, t2, n2);
  }
  walkMany(e6, t2, n2) {
    this.checkIsTarget(e6, K.REPETITION, t2, n2) || super.walkOption(e6, t2, n2);
  }
  walkManySep(e6, t2, n2) {
    this.checkIsTarget(e6, K.REPETITION_WITH_SEPARATOR, t2, n2) || super.walkOption(e6, t2, n2);
  }
}, _E = class extends ow {
  constructor(e6, t2, n2) {
    super(), this.targetOccurrence = e6, this.targetProdType = t2, this.targetRef = n2, this.result = [];
  }
  checkIsTarget(e6, t2) {
    e6.idx === this.targetOccurrence && this.targetProdType === t2 && (this.targetRef === void 0 || e6 === this.targetRef) && (this.result = e6.definition);
  }
  visitOption(e6) {
    this.checkIsTarget(e6, K.OPTION);
  }
  visitRepetition(e6) {
    this.checkIsTarget(e6, K.REPETITION);
  }
  visitRepetitionMandatory(e6) {
    this.checkIsTarget(e6, K.REPETITION_MANDATORY);
  }
  visitRepetitionMandatoryWithSeparator(e6) {
    this.checkIsTarget(e6, K.REPETITION_MANDATORY_WITH_SEPARATOR);
  }
  visitRepetitionWithSeparator(e6) {
    this.checkIsTarget(e6, K.REPETITION_WITH_SEPARATOR);
  }
  visitAlternation(e6) {
    this.checkIsTarget(e6, K.ALTERNATION);
  }
};
function vE(e6) {
  let t2 = Array(e6);
  for (let n2 = 0; n2 < e6; n2++) t2[n2] = [];
  return t2;
}
function yE(e6) {
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
function bE(e6, t2, n2) {
  for (let r2 = 0; r2 < e6.length; r2++) {
    if (r2 === n2) continue;
    let i2 = e6[r2];
    for (let e7 = 0; e7 < t2.length; e7++) if (i2[t2[e7]] === true) return false;
  }
  return true;
}
function xE(e6, t2) {
  let n2 = z(e6, (e7) => sE([e7], 1)), r2 = vE(n2.length), i2 = z(n2, (e7) => {
    let t3 = {};
    return R(e7, (e8) => {
      R(yE(e8.partialPath), (e9) => {
        t3[e9] = true;
      });
    }), t3;
  }), a2 = n2;
  for (let e7 = 1; e7 <= t2; e7++) {
    let n3 = a2;
    a2 = vE(n3.length);
    for (let o2 = 0; o2 < n3.length; o2++) {
      let s2 = n3[o2];
      for (let n4 = 0; n4 < s2.length; n4++) {
        let c2 = s2[n4].partialPath, l2 = s2[n4].suffixDef, u2 = yE(c2);
        if (bE(i2, u2, o2) || V(l2) || c2.length === t2) {
          let e8 = r2[o2];
          if (wE(e8, c2) === false) {
            e8.push(c2);
            for (let e9 = 0; e9 < u2.length; e9++) {
              let t3 = u2[e9];
              i2[o2][t3] = true;
            }
          }
        } else {
          let t3 = sE(l2, e7 + 1, c2);
          a2[o2] = a2[o2].concat(t3), R(t3, (e8) => {
            R(yE(e8.partialPath), (e9) => {
              i2[o2][e9] = true;
            });
          });
        }
      }
    }
  }
  return r2;
}
function SE(e6, t2, n2, r2) {
  let i2 = new _E(e6, K.ALTERNATION, r2);
  return t2.accept(i2), xE(i2.result, n2);
}
function CE(e6, t2, n2, r2) {
  let i2 = new _E(e6, n2);
  t2.accept(i2);
  let a2 = i2.result, o2 = new gE(t2, e6, n2).startWalking();
  return xE([new QC({ definition: a2 }), new QC({ definition: o2 })], r2);
}
function wE(e6, t2) {
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
function TE(e6, t2) {
  return e6.length < t2.length && fm(e6, (e7, n2) => {
    let r2 = t2[n2];
    return e7 === r2 || r2.categoryMatchesMap[e7.tokenTypeIdx];
  });
}
function EE(e6) {
  return fm(e6, (e7) => fm(e7, (e8) => fm(e8, (e9) => V(e9.categoryMatches))));
}
function DE(e6) {
  return z(e6.lookaheadStrategy.validate({ rules: e6.rules, tokenTypes: e6.tokenTypes, grammarName: e6.grammarName }), (e7) => Object.assign({ type: ZD.CUSTOM_LOOKAHEAD_VALIDATION }, e7));
}
function OE(e6, t2, n2, r2) {
  let i2 = Om(e6, (e7) => kE(e7, n2)), a2 = GE(e6, t2, n2), o2 = Om(e6, (e7) => VE(e7, n2)), s2 = Om(e6, (t3) => NE(t3, e6, r2, n2));
  return i2.concat(a2, o2, s2);
}
function kE(e6, t2) {
  let n2 = new ME();
  e6.accept(n2);
  let r2 = n2.allProductions;
  return z(Vm(ph(Am(r2, AE), (e7) => e7.length > 1)), (n3) => {
    let r3 = Cm(n3), i2 = t2.buildDuplicateFoundError(e6, n3), a2 = uw(r3), o2 = { message: i2, type: ZD.DUPLICATE_PRODUCTIONS, ruleName: e6.name, dslName: a2, occurrence: r3.idx }, s2 = jE(r3);
    return s2 && (o2.parameter = s2), o2;
  });
}
function AE(e6) {
  return `${uw(e6)}_#_${e6.idx}_#_${jE(e6)}`;
}
function jE(e6) {
  return e6 instanceof W ? e6.terminalType.name : e6 instanceof XC ? e6.nonTerminalName : ``;
}
var ME = class extends ow {
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
function NE(e6, t2, n2, r2) {
  let i2 = [];
  if (_h(t2, (t3, n3) => n3.name === e6.name ? t3 + 1 : t3, 0) > 1) {
    let t3 = r2.buildDuplicateRuleNameError({ topLevelRule: e6, grammarName: n2 });
    i2.push({ message: t3, type: ZD.DUPLICATE_RULE_NAME, ruleName: e6.name });
  }
  return i2;
}
function PE(e6, t2, n2) {
  let r2 = [], i2;
  return Wm(t2, e6) || (i2 = `Invalid rule override, rule: ->${e6}<- cannot be overridden in the grammar: ->${n2}<-as it is not defined in any of the super grammars `, r2.push({ message: i2, type: ZD.INVALID_RULE_OVERRIDE, ruleName: e6 })), r2;
}
function FE(e6, t2, n2, r2 = []) {
  let i2 = [], a2 = IE(t2.definition);
  if (V(a2)) return [];
  {
    let t3 = e6.name;
    Wm(a2, e6) && i2.push({ message: n2.buildLeftRecursionError({ topLevelRule: e6, leftRecursionPath: r2 }), type: ZD.LEFT_RECURSION, ruleName: t3 });
    let o2 = Om(Zp(a2, r2.concat([e6])), (t4) => {
      let i3 = ef(r2);
      return i3.push(t4), FE(e6, t4, n2, i3);
    });
    return i2.concat(o2);
  }
}
function IE(e6) {
  let t2 = [];
  if (V(e6)) return t2;
  let n2 = Cm(e6);
  if (n2 instanceof XC) t2.push(n2.referencedRule);
  else if (n2 instanceof QC || n2 instanceof $C || n2 instanceof ew || n2 instanceof tw || n2 instanceof nw || n2 instanceof U) t2 = t2.concat(IE(n2.definition));
  else if (n2 instanceof rw) t2 = gl(z(n2.definition, (e7) => IE(e7.definition)));
  else if (!(n2 instanceof W)) throw Error(`non exhaustive match`);
  let r2 = cw(n2), i2 = e6.length > 1;
  if (r2 && i2) {
    let n3 = tm(e6);
    return t2.concat(IE(n3));
  } else return t2;
}
var LE = class extends ow {
  constructor() {
    super(...arguments), this.alternations = [];
  }
  visitAlternation(e6) {
    this.alternations.push(e6);
  }
};
function RE(e6, t2) {
  let n2 = new LE();
  e6.accept(n2);
  let r2 = n2.alternations;
  return Om(r2, (n3) => Om(rm(n3.definition), (r3, i2) => V(cE([r3], [], hT, 1)) ? [{ message: t2.buildEmptyAlternationError({ topLevelRule: e6, alternation: n3, emptyChoiceIdx: i2 }), type: ZD.NONE_LAST_EMPTY_ALT, ruleName: e6.name, occurrence: n3.idx, alternative: i2 + 1 }] : []));
}
function zE(e6, t2, n2) {
  let r2 = new LE();
  e6.accept(r2);
  let i2 = r2.alternations;
  return i2 = yh(i2, (e7) => e7.ignoreAmbiguities === true), Om(i2, (r3) => {
    let i3 = r3.idx, a2 = SE(i3, e6, r3.maxLookahead || t2, r3), o2 = UE(a2, r3, e6, n2), s2 = WE(a2, r3, e6, n2);
    return o2.concat(s2);
  });
}
var BE = class extends ow {
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
function VE(e6, t2) {
  let n2 = new LE();
  e6.accept(n2);
  let r2 = n2.alternations;
  return Om(r2, (n3) => n3.definition.length > 255 ? [{ message: t2.buildTooManyAlternativesError({ topLevelRule: e6, alternation: n3 }), type: ZD.TOO_MANY_ALTS, ruleName: e6.name, occurrence: n3.idx }] : []);
}
function HE(e6, t2, n2) {
  let r2 = [];
  return R(e6, (e7) => {
    let i2 = new BE();
    e7.accept(i2);
    let a2 = i2.allProductions;
    R(a2, (i3) => {
      let a3 = uE(i3), o2 = i3.maxLookahead || t2, s2 = i3.idx, c2 = CE(s2, e7, a3, o2)[0];
      if (V(gl(c2))) {
        let t3 = n2.buildEmptyRepetitionError({ topLevelRule: e7, repetition: i3 });
        r2.push({ message: t3, type: ZD.NO_NON_EMPTY_LOOKAHEAD, ruleName: e7.name });
      }
    });
  }), r2;
}
function UE(e6, t2, n2, r2) {
  let i2 = [];
  return z(_h(e6, (n3, r3, a2) => (t2.definition[a2].ignoreAmbiguities === true || R(r3, (r4) => {
    let o2 = [a2];
    R(e6, (e7, n4) => {
      a2 !== n4 && wE(e7, r4) && t2.definition[n4].ignoreAmbiguities !== true && o2.push(n4);
    }), o2.length > 1 && !wE(i2, r4) && (i2.push(r4), n3.push({ alts: o2, path: r4 }));
  }), n3), []), (e7) => {
    let i3 = z(e7.alts, (e8) => e8 + 1);
    return { message: r2.buildAlternationAmbiguityError({ topLevelRule: n2, alternation: t2, ambiguityIndices: i3, prefixPath: e7.path }), type: ZD.AMBIGUOUS_ALTS, ruleName: n2.name, occurrence: t2.idx, alternatives: e7.alts };
  });
}
function WE(e6, t2, n2, r2) {
  let i2 = _h(e6, (e7, t3, n3) => {
    let r3 = z(t3, (e8) => ({ idx: n3, path: e8 }));
    return e7.concat(r3);
  }, []);
  return nf(Om(i2, (e7) => {
    if (t2.definition[e7.idx].ignoreAmbiguities === true) return [];
    let a2 = e7.idx, o2 = e7.path;
    return z(gm(i2, (e8) => t2.definition[e8.idx].ignoreAmbiguities !== true && e8.idx < a2 && TE(e8.path, o2)), (e8) => {
      let i3 = [e8.idx + 1, a2 + 1], o3 = t2.idx === 0 ? `` : t2.idx;
      return { message: r2.buildAlternationPrefixAmbiguityError({ topLevelRule: n2, alternation: t2, ambiguityIndices: i3, prefixPath: e8.path }), type: ZD.AMBIGUOUS_PREFIX_ALTS, ruleName: n2.name, occurrence: o3, alternatives: i3 };
    });
  }));
}
function GE(e6, t2, n2) {
  let r2 = [], i2 = z(t2, (e7) => e7.name);
  return R(e6, (e7) => {
    let t3 = e7.name;
    if (Wm(i2, t3)) {
      let i3 = n2.buildNamespaceConflictError(e7);
      r2.push({ message: i3, type: ZD.CONFLICT_TOKENS_RULES_NAMESPACE, ruleName: t3 });
    }
  }), r2;
}
function KE(e6) {
  let t2 = Up(e6, { errMsgProvider: XT }), n2 = {};
  return R(e6.rules, (e7) => {
    n2[e7.name] = e7;
  }), QT(n2, t2.errMsgProvider);
}
function qE(e6) {
  return e6 = Up(e6, { errMsgProvider: ZT }), OE(e6.rules, e6.tokenTypes, e6.errMsgProvider, e6.grammarName);
}
var JE = `MismatchedTokenException`, YE = `NoViableAltException`, XE = `EarlyExitException`, ZE = `NotAllInputParsedException`, QE = [JE, YE, XE, ZE];
Object.freeze(QE);
function $E(e6) {
  return Wm(QE, e6.name);
}
var eD = class extends Error {
  constructor(e6, t2) {
    super(e6), this.token = t2, this.resyncedTokens = [], Object.setPrototypeOf(this, new.target.prototype), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}, tD = class extends eD {
  constructor(e6, t2, n2) {
    super(e6, t2), this.previousToken = n2, this.name = JE;
  }
}, nD = class extends eD {
  constructor(e6, t2, n2) {
    super(e6, t2), this.previousToken = n2, this.name = YE;
  }
}, rD = class extends eD {
  constructor(e6, t2) {
    super(e6, t2), this.name = ZE;
  }
}, iD = class extends eD {
  constructor(e6, t2, n2) {
    super(e6, t2), this.previousToken = n2, this.name = XE;
  }
};
const aD = {};
var oD = class extends Error {
  constructor(e6) {
    super(e6), this.name = `InRuleRecoveryException`;
  }
}, sD = class {
  initRecoverable(e6) {
    this.firstAfterRepMap = {}, this.resyncFollows = {}, this.recoveryEnabled = B(e6, `recoveryEnabled`) ? e6.recoveryEnabled : YD.recoveryEnabled, this.recoveryEnabled && (this.attemptInRepetitionRecovery = cD);
  }
  getTokenToInsert(e6) {
    let t2 = qT(e6, ``, NaN, NaN, NaN, NaN, NaN, NaN);
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
      let e7 = this.LA(0), t3 = new tD(this.errorMessageProvider.buildMismatchTokenMessage({ expected: r2, actual: c2, previous: e7, ruleName: this.getCurrRuleFullName() }), c2, this.LA(0));
      t3.resyncedTokens = rm(o2), this.SAVE_ERROR(t3);
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
    throw new oD(`sad sad panda`);
  }
  canPerformInRuleRecovery(e6, t2) {
    return this.canRecoverWithSingleTokenInsertion(e6, t2) || this.canRecoverWithSingleTokenDeletion(e6);
  }
  canRecoverWithSingleTokenInsertion(e6, t2) {
    if (!this.canTokenTypeBeInsertedInRecovery(e6) || V(t2)) return false;
    let n2 = this.LA(1);
    return xm(t2, (e7) => this.tokenMatcher(n2, e7)) !== void 0;
  }
  canRecoverWithSingleTokenDeletion(e6) {
    return this.canTokenTypeBeDeletedInRecovery(e6) ? this.tokenMatcher(this.LA(2), e6) : false;
  }
  isInCurrentRuleReSyncSet(e6) {
    let t2 = this.getCurrFollowKey();
    return Wm(this.getFollowSetFromFollowKey(t2), e6);
  }
  findReSyncTokenType() {
    let e6 = this.flattenFollowSet(), t2 = this.LA(1), n2 = 2;
    for (; ; ) {
      let r2 = xm(e6, (e7) => JT(t2, e7));
      if (r2 !== void 0) return r2;
      t2 = this.LA(n2), n2++;
    }
  }
  getCurrFollowKey() {
    if (this.RULE_STACK.length === 1) return aD;
    let e6 = this.getLastExplicitRuleShortName(), t2 = this.getLastExplicitRuleOccurrenceIndex(), n2 = this.getPreviousExplicitRuleShortName();
    return { ruleName: this.shortRuleNameToFullName(e6), idxInCallingRule: t2, inRule: this.shortRuleNameToFullName(n2) };
  }
  buildFullFollowKeyStack() {
    let e6 = this.RULE_STACK, t2 = this.RULE_OCCURRENCE_STACK;
    return z(e6, (n2, r2) => r2 === 0 ? aD : { ruleName: this.shortRuleNameToFullName(n2), idxInCallingRule: t2[r2], inRule: this.shortRuleNameToFullName(e6[r2 - 1]) });
  }
  flattenFollowSet() {
    return gl(z(this.buildFullFollowKeyStack(), (e6) => this.getFollowSetFromFollowKey(e6)));
  }
  getFollowSetFromFollowKey(e6) {
    if (e6 === aD) return [KT];
    let t2 = e6.ruleName + e6.idxInCallingRule + _w + e6.inRule;
    return this.resyncFollows[t2];
  }
  addToResyncTokens(e6, t2) {
    return this.tokenMatcher(e6, KT) || t2.push(e6), t2;
  }
  reSyncTo(e6) {
    let t2 = [], n2 = this.LA(1);
    for (; this.tokenMatcher(n2, e6) === false; ) n2 = this.SKIP_TOKEN(), this.addToResyncTokens(n2, t2);
    return rm(t2);
  }
  attemptInRepetitionRecovery(e6, t2, n2, r2, i2, a2, o2) {
  }
  getCurrentGrammarPath(e6, t2) {
    return { ruleStack: this.getHumanReadableRuleStack(), occurrenceStack: ef(this.RULE_OCCURRENCE_STACK), lastTok: e6, lastTokOccurrence: t2 };
  }
  getHumanReadableRuleStack() {
    return z(this.RULE_STACK, (e6) => this.shortRuleNameToFullName(e6));
  }
};
function cD(e6, t2, n2, r2, i2, a2, o2) {
  let s2 = this.getKeyForAutomaticLookahead(r2, i2), c2 = this.firstAfterRepMap[s2];
  if (c2 === void 0) {
    let e7 = this.getCurrRuleFullName(), t3 = this.getGAstProductions()[e7];
    c2 = new a2(t3, i2).startWalking(), this.firstAfterRepMap[s2] = c2;
  }
  let l2 = c2.token, u2 = c2.occurrence, d2 = c2.isEndOfRule;
  this.RULE_STACK.length === 1 && d2 && l2 === void 0 && (l2 = KT, u2 = 1), !(l2 === void 0 || u2 === void 0) && this.shouldInRepetitionRecoveryBeTried(l2, u2, o2) && this.tryInRepetitionRecovery(e6, t2, n2, l2);
}
const lD = 1024, uD = 1280, dD = 1536;
function fD(e6, t2, n2) {
  return n2 | t2 | e6;
}
var pD = class {
  constructor(e6) {
    this.maxLookahead = (e6 == null ? void 0 : e6.maxLookahead) ?? YD.maxLookahead;
  }
  validate(e6) {
    let t2 = this.validateNoLeftRecursion(e6.rules);
    if (V(t2)) {
      let n2 = this.validateEmptyOrAlternatives(e6.rules), r2 = this.validateAmbiguousAlternationAlternatives(e6.rules, this.maxLookahead), i2 = this.validateSomeNonEmptyLookaheadPath(e6.rules, this.maxLookahead);
      return [...t2, ...n2, ...r2, ...i2];
    }
    return t2;
  }
  validateNoLeftRecursion(e6) {
    return Om(e6, (e7) => FE(e7, e7, ZT));
  }
  validateEmptyOrAlternatives(e6) {
    return Om(e6, (e7) => RE(e7, ZT));
  }
  validateAmbiguousAlternationAlternatives(e6, t2) {
    return Om(e6, (e7) => zE(e7, t2, ZT));
  }
  validateSomeNonEmptyLookaheadPath(e6, t2) {
    return HE(e6, t2, ZT);
  }
  buildLookaheadForAlternation(e6) {
    return fE(e6.prodOccurrence, e6.rule, e6.maxLookahead, e6.hasPredicates, e6.dynamicTokensEnabled, mE);
  }
  buildLookaheadForOptional(e6) {
    return pE(e6.prodOccurrence, e6.rule, e6.maxLookahead, e6.dynamicTokensEnabled, uE(e6.prodType), hE);
  }
}, mD = class {
  initLooksAhead(e6) {
    this.dynamicTokensEnabled = B(e6, `dynamicTokensEnabled`) ? e6.dynamicTokensEnabled : YD.dynamicTokensEnabled, this.maxLookahead = B(e6, `maxLookahead`) ? e6.maxLookahead : YD.maxLookahead, this.lookaheadStrategy = B(e6, `lookaheadStrategy`) ? e6.lookaheadStrategy : new pD({ maxLookahead: this.maxLookahead }), this.lookAheadFuncsCache = /* @__PURE__ */ new Map();
  }
  preComputeLookaheadFunctions(e6) {
    R(e6, (e7) => {
      this.TRACE_INIT(`${e7.name} Rule Lookahead`, () => {
        let { alternation: t2, repetition: n2, option: r2, repetitionMandatory: i2, repetitionMandatoryWithSeparator: a2, repetitionWithSeparator: o2 } = gD(e7);
        R(t2, (t3) => {
          let n3 = t3.idx === 0 ? `` : t3.idx;
          this.TRACE_INIT(`${uw(t3)}${n3}`, () => {
            let n4 = this.lookaheadStrategy.buildLookaheadForAlternation({ prodOccurrence: t3.idx, rule: e7, maxLookahead: t3.maxLookahead || this.maxLookahead, hasPredicates: t3.hasPredicates, dynamicTokensEnabled: this.dynamicTokensEnabled }), r3 = fD(this.fullRuleNameToShort[e7.name], 256, t3.idx);
            this.setLaFuncCache(r3, n4);
          });
        }), R(n2, (t3) => {
          this.computeLookaheadFunc(e7, t3.idx, 768, `Repetition`, t3.maxLookahead, uw(t3));
        }), R(r2, (t3) => {
          this.computeLookaheadFunc(e7, t3.idx, 512, `Option`, t3.maxLookahead, uw(t3));
        }), R(i2, (t3) => {
          this.computeLookaheadFunc(e7, t3.idx, lD, `RepetitionMandatory`, t3.maxLookahead, uw(t3));
        }), R(a2, (t3) => {
          this.computeLookaheadFunc(e7, t3.idx, dD, `RepetitionMandatoryWithSeparator`, t3.maxLookahead, uw(t3));
        }), R(o2, (t3) => {
          this.computeLookaheadFunc(e7, t3.idx, uD, `RepetitionWithSeparator`, t3.maxLookahead, uw(t3));
        });
      });
    });
  }
  computeLookaheadFunc(e6, t2, n2, r2, i2, a2) {
    this.TRACE_INIT(`${a2}${t2 === 0 ? `` : t2}`, () => {
      let a3 = this.lookaheadStrategy.buildLookaheadForOptional({ prodOccurrence: t2, rule: e6, maxLookahead: i2 || this.maxLookahead, dynamicTokensEnabled: this.dynamicTokensEnabled, prodType: r2 }), o2 = fD(this.fullRuleNameToShort[e6.name], n2, t2);
      this.setLaFuncCache(o2, a3);
    });
  }
  getKeyForAutomaticLookahead(e6, t2) {
    return fD(this.getLastExplicitRuleShortName(), e6, t2);
  }
  getLaFuncFromCache(e6) {
    return this.lookAheadFuncsCache.get(e6);
  }
  setLaFuncCache(e6, t2) {
    this.lookAheadFuncsCache.set(e6, t2);
  }
}, hD = new class extends ow {
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
function gD(e6) {
  hD.reset(), e6.accept(hD);
  let t2 = hD.dslMethods;
  return hD.reset(), t2;
}
function _D(e6, t2) {
  isNaN(e6.startOffset) === true ? (e6.startOffset = t2.startOffset, e6.endOffset = t2.endOffset) : e6.endOffset < t2.endOffset && (e6.endOffset = t2.endOffset);
}
function vD(e6, t2) {
  isNaN(e6.startOffset) === true ? (e6.startOffset = t2.startOffset, e6.startColumn = t2.startColumn, e6.startLine = t2.startLine, e6.endOffset = t2.endOffset, e6.endColumn = t2.endColumn, e6.endLine = t2.endLine) : e6.endOffset < t2.endOffset && (e6.endOffset = t2.endOffset, e6.endColumn = t2.endColumn, e6.endLine = t2.endLine);
}
function yD(e6, t2, n2) {
  e6.children[n2] === void 0 ? e6.children[n2] = [t2] : e6.children[n2].push(t2);
}
function bD(e6, t2, n2) {
  e6.children[t2] === void 0 ? e6.children[t2] = [n2] : e6.children[t2].push(n2);
}
var xD = `name`;
function SD(e6, t2) {
  Object.defineProperty(e6, xD, { enumerable: false, configurable: true, writable: false, value: t2 });
}
function CD(e6, t2) {
  let n2 = Ns(e6), r2 = n2.length;
  for (let i2 = 0; i2 < r2; i2++) {
    let r3 = e6[n2[i2]], a2 = r3.length;
    for (let e7 = 0; e7 < a2; e7++) {
      let n3 = r3[e7];
      n3.tokenTypeIdx === void 0 && this[n3.name](n3.children, t2);
    }
  }
}
function wD(e6, t2) {
  let n2 = function() {
  };
  return SD(n2, e6 + `BaseSemantics`), n2.prototype = { visit: function(e7, t3) {
    if (F(e7) && (e7 = e7[0]), !ih(e7)) return this[e7.name](e7.children, t3);
  }, validateVisitor: function() {
    let e7 = DD(this, t2);
    if (!V(e7)) {
      let t3 = z(e7, (e8) => e8.msg);
      throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${t3.join(`

`).replace(/\n/g, `
	`)}`);
    }
  } }, n2.prototype.constructor = n2, n2._RULE_NAMES = t2, n2;
}
function TD(e6, t2, n2) {
  let r2 = function() {
  };
  SD(r2, e6 + `BaseSemanticsWithDefaults`);
  let i2 = Object.create(n2.prototype);
  return R(t2, (e7) => {
    i2[e7] = CD;
  }), r2.prototype = i2, r2.prototype.constructor = r2, r2;
}
var ED;
(function(e6) {
  e6[e6.REDUNDANT_METHOD = 0] = `REDUNDANT_METHOD`, e6[e6.MISSING_METHOD = 1] = `MISSING_METHOD`;
})(ED || (ED = {}));
function DD(e6, t2) {
  return OD(e6, t2);
}
function OD(e6, t2) {
  return nf(z(gm(t2, (t3) => ea(e6[t3]) === false), (t3) => ({ msg: `Missing visitor method: <${t3}> on ${e6.constructor.name} CST Visitor.`, type: ED.MISSING_METHOD, methodName: t3 })));
}
var kD = class {
  initTreeBuilder(e6) {
    if (this.CST_STACK = [], this.outputCst = e6.outputCst, this.nodeLocationTracking = B(e6, `nodeLocationTracking`) ? e6.nodeLocationTracking : YD.nodeLocationTracking, !this.outputCst) this.cstInvocationStateUpdate = Da, this.cstFinallyStateUpdate = Da, this.cstPostTerminal = Da, this.cstPostNonTerminal = Da, this.cstPostRule = Da;
    else if (/full/i.test(this.nodeLocationTracking)) this.recoveryEnabled ? (this.setNodeLocationFromToken = vD, this.setNodeLocationFromNode = vD, this.cstPostRule = Da, this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery) : (this.setNodeLocationFromToken = Da, this.setNodeLocationFromNode = Da, this.cstPostRule = this.cstPostRuleFull, this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular);
    else if (/onlyOffset/i.test(this.nodeLocationTracking)) this.recoveryEnabled ? (this.setNodeLocationFromToken = _D, this.setNodeLocationFromNode = _D, this.cstPostRule = Da, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery) : (this.setNodeLocationFromToken = Da, this.setNodeLocationFromNode = Da, this.cstPostRule = this.cstPostRuleOnlyOffset, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular);
    else if (/none/i.test(this.nodeLocationTracking)) this.setNodeLocationFromToken = Da, this.setNodeLocationFromNode = Da, this.cstPostRule = Da, this.setInitialNodeLocation = Da;
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
    yD(n2, t2, e6), this.setNodeLocationFromToken(n2.location, t2);
  }
  cstPostNonTerminal(e6, t2) {
    let n2 = this.CST_STACK[this.CST_STACK.length - 1];
    bD(n2, t2, e6), this.setNodeLocationFromNode(n2.location, e6.location);
  }
  getBaseCstVisitorConstructor() {
    if (ih(this.baseCstVisitorConstructor)) {
      let e6 = wD(this.className, Ns(this.gastProductionsCache));
      return this.baseCstVisitorConstructor = e6, e6;
    }
    return this.baseCstVisitorConstructor;
  }
  getBaseCstVisitorConstructorWithDefaults() {
    if (ih(this.baseCstVisitorWithDefaultsConstructor)) {
      let e6 = TD(this.className, Ns(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
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
}, AD = class {
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
    return this.currIdx <= this.tokVector.length - 2 ? (this.consumeToken(), this.LA(1)) : JD;
  }
  LA(e6) {
    let t2 = this.currIdx + e6;
    return t2 < 0 || this.tokVectorLength <= t2 ? JD : this.tokVector[t2];
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
}, jD = class {
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
  RULE(e6, t2, n2 = XD) {
    if (Wm(this.definedRulesNames, e6)) {
      let t3 = { message: ZT.buildDuplicateRuleNameError({ topLevelRule: e6, grammarName: this.className }), type: ZD.DUPLICATE_RULE_NAME, ruleName: e6 };
      this.definitionErrors.push(t3);
    }
    this.definedRulesNames.push(e6);
    let r2 = this.defineRule(e6, t2, n2);
    return this[e6] = r2, r2;
  }
  OVERRIDE_RULE(e6, t2, n2 = XD) {
    let r2 = PE(e6, this.definedRulesNames, this.className);
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
        if ($E(e7)) return false;
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
    return iw(Vm(this.gastProductionsCache));
  }
}, MD = class {
  initRecognizerEngine(e6, t2) {
    if (this.className = this.constructor.name, this.shortRuleNameToFull = {}, this.fullRuleNameToShort = {}, this.ruleShortNameIdx = 256, this.tokenMatcher = gT, this.subruleIdx = 0, this.definedRulesNames = [], this.tokensMap = {}, this.isBackTrackingStack = [], this.RULE_STACK = [], this.RULE_OCCURRENCE_STACK = [], this.gastProductionsCache = {}, B(t2, `serializedGrammar`)) throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);
    if (F(e6)) {
      if (V(e6)) throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);
      if (typeof e6[0].startOffset == `number`) throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`);
    }
    if (F(e6)) this.tokensMap = _h(e6, (e7, t3) => (e7[t3.name] = t3, e7), {});
    else if (B(e6, `modes`) && fm(gl(Vm(e6.modes)), kT)) this.tokensMap = _h(kh(gl(Vm(e6.modes))), (e7, t3) => (e7[t3.name] = t3, e7), {});
    else if (Ni(e6)) this.tokensMap = ef(e6);
    else throw Error(`<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition`);
    this.tokensMap.EOF = KT, this.tokenMatcher = fm(B(e6, `modes`) ? gl(Vm(e6.modes)) : Vm(e6), (e7) => V(e7.categoryMatches)) ? gT : hT, yT(Vm(this.tokensMap));
  }
  defineRule(e6, t2, n2) {
    if (this.selfAnalysisDone) throw Error(`Grammar rule <${e6}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
    let r2 = B(n2, `resyncEnabled`) ? n2.resyncEnabled : XD.resyncEnabled, i2 = B(n2, `recoveryValueFunc`) ? n2.recoveryValueFunc : XD.recoveryValueFunc, a2 = this.ruleShortNameIdx << 12;
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
    if ($E(e6)) {
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
    let n2 = this.getKeyForAutomaticLookahead(lD, e6);
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
    } else throw this.raiseEarlyExitException(e6, K.REPETITION_MANDATORY, t2.ERR_MSG);
    this.attemptInRepetitionRecovery(this.atLeastOneInternal, [e6, t2], r2, lD, e6, aE);
  }
  atLeastOneSepFirstInternal(e6, t2) {
    let n2 = this.getKeyForAutomaticLookahead(dD, e6);
    this.atLeastOneSepFirstInternalLogic(e6, t2, n2);
  }
  atLeastOneSepFirstInternalLogic(e6, t2, n2) {
    let r2 = t2.DEF, i2 = t2.SEP;
    if (this.getLaFuncFromCache(n2).call(this) === true) {
      r2.call(this);
      let t3 = () => this.tokenMatcher(this.LA(1), i2);
      for (; this.tokenMatcher(this.LA(1), i2) === true; ) this.CONSUME(i2), r2.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [e6, i2, t3, r2, oE], t3, dD, e6, oE);
    } else throw this.raiseEarlyExitException(e6, K.REPETITION_MANDATORY_WITH_SEPARATOR, t2.ERR_MSG);
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
    this.attemptInRepetitionRecovery(this.manyInternal, [e6, t2], r2, 768, e6, rE, a2);
  }
  manySepFirstInternal(e6, t2) {
    let n2 = this.getKeyForAutomaticLookahead(uD, e6);
    this.manySepFirstInternalLogic(e6, t2, n2);
  }
  manySepFirstInternalLogic(e6, t2, n2) {
    let r2 = t2.DEF, i2 = t2.SEP;
    if (this.getLaFuncFromCache(n2).call(this) === true) {
      r2.call(this);
      let t3 = () => this.tokenMatcher(this.LA(1), i2);
      for (; this.tokenMatcher(this.LA(1), i2) === true; ) this.CONSUME(i2), r2.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [e6, i2, t3, r2, iE], t3, uD, e6, iE);
    }
  }
  repetitionSepSecondInternal(e6, t2, n2, r2, i2) {
    for (; n2(); ) this.CONSUME(t2), r2.call(this);
    this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [e6, t2, n2, r2, i2], n2, dD, e6, i2);
  }
  doSingleRepetition(e6) {
    let t2 = this.getLexerPosition();
    return e6.call(this), this.getLexerPosition() > t2;
  }
  orInternal(e6, t2) {
    let n2 = this.getKeyForAutomaticLookahead(256, t2), r2 = F(e6) ? e6 : e6.DEF, i2 = this.getLaFuncFromCache(n2).call(this, r2);
    if (i2 !== void 0) return r2[i2].ALT.call(this);
    this.raiseNoAltException(t2, e6.ERR_MSG);
  }
  ruleFinallyStateUpdate() {
    if (this.RULE_STACK.pop(), this.RULE_OCCURRENCE_STACK.pop(), this.cstFinallyStateUpdate(), this.RULE_STACK.length === 0 && this.isAtEndOfInput() === false) {
      let e6 = this.LA(1), t2 = this.errorMessageProvider.buildNotAllInputParsedMessage({ firstRedundant: e6, ruleName: this.getCurrRuleFullName() });
      this.SAVE_ERROR(new rD(t2, e6));
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
    throw $E(e6) && e6.partialCstResult !== void 0 && (this.cstPostNonTerminal(e6.partialCstResult, t2 !== void 0 && t2.LABEL !== void 0 ? t2.LABEL : n2), delete e6.partialCstResult), e6;
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
    throw r2 = n2 !== void 0 && n2.ERR_MSG ? n2.ERR_MSG : this.errorMessageProvider.buildMismatchTokenMessage({ expected: e6, actual: t2, previous: i2, ruleName: this.getCurrRuleFullName() }), this.SAVE_ERROR(new tD(r2, t2, i2));
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
    let e6 = this.errors, t2 = ef(this.RULE_STACK);
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
    return this.tokenMatcher(this.LA(1), KT);
  }
  reset() {
    this.resetLexerState(), this.subruleIdx = 0, this.isBackTrackingStack = [], this.errors = [], this.RULE_STACK = [], this.CST_STACK = [], this.RULE_OCCURRENCE_STACK = [];
  }
}, ND = class {
  initErrorHandler(e6) {
    this._errors = [], this.errorMessageProvider = B(e6, `errorMessageProvider`) ? e6.errorMessageProvider : YD.errorMessageProvider;
  }
  SAVE_ERROR(e6) {
    if ($E(e6)) return e6.context = { ruleStack: this.getHumanReadableRuleStack(), ruleOccurrenceStack: ef(this.RULE_OCCURRENCE_STACK) }, this._errors.push(e6), e6;
    throw Error(`Trying to save an Error which is not a RecognitionException`);
  }
  get errors() {
    return ef(this._errors);
  }
  set errors(e6) {
    this._errors = e6;
  }
  raiseEarlyExitException(e6, t2, n2) {
    let r2 = this.getCurrRuleFullName(), i2 = this.getGAstProductions()[r2], a2 = CE(e6, i2, t2, this.maxLookahead)[0], o2 = [];
    for (let e7 = 1; e7 <= this.maxLookahead; e7++) o2.push(this.LA(e7));
    let s2 = this.errorMessageProvider.buildEarlyExitMessage({ expectedIterationPaths: a2, actual: o2, previous: this.LA(0), customUserDescription: n2, ruleName: r2 });
    throw this.SAVE_ERROR(new iD(s2, this.LA(1), this.LA(0)));
  }
  raiseNoAltException(e6, t2) {
    let n2 = this.getCurrRuleFullName(), r2 = this.getGAstProductions()[n2], i2 = SE(e6, r2, this.maxLookahead), a2 = [];
    for (let e7 = 1; e7 <= this.maxLookahead; e7++) a2.push(this.LA(e7));
    let o2 = this.LA(0), s2 = this.errorMessageProvider.buildNoViableAltMessage({ expectedPathsPerAlt: i2, actual: a2, previous: o2, customUserDescription: t2, ruleName: this.getCurrRuleFullName() });
    throw this.SAVE_ERROR(new nD(s2, this.LA(1), o2));
  }
}, PD = class {
  initContentAssist() {
  }
  computeContentAssist(e6, t2) {
    let n2 = this.gastProductionsCache[e6];
    if (ih(n2)) throw Error(`Rule ->${e6}<- does not exist in this grammar.`);
    return cE([n2], t2, this.tokenMatcher, this.maxLookahead);
  }
  getNextPossibleTokenTypes(e6) {
    let t2 = Cm(e6.ruleStack), n2 = this.getGAstProductions()[t2];
    return new tE(n2, e6).startWalking();
  }
}, FD = { description: `This Object indicates the Parser is during Recording Phase` };
Object.freeze(FD);
var ID = true, LD = 2 ** 8 - 1, RD = WT({ name: `RECORDING_PHASE_TOKEN`, pattern: MT.NA });
yT([RD]);
var zD = qT(RD, `This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`, -1, -1, -1, -1, -1, -1);
Object.freeze(zD);
var BD = { name: `This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`, children: {} }, VD = class {
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
    return JD;
  }
  topLevelRuleRecord(e6, t2) {
    try {
      let n2 = new ZC({ definition: [], name: e6 });
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
    return HD.call(this, $C, e6, t2);
  }
  atLeastOneInternalRecord(e6, t2) {
    HD.call(this, ew, t2, e6);
  }
  atLeastOneSepFirstInternalRecord(e6, t2) {
    HD.call(this, tw, t2, e6, ID);
  }
  manyInternalRecord(e6, t2) {
    HD.call(this, U, t2, e6);
  }
  manySepFirstInternalRecord(e6, t2) {
    HD.call(this, nw, t2, e6, ID);
  }
  orInternalRecord(e6, t2) {
    return UD.call(this, e6, t2);
  }
  subruleInternalRecord(e6, t2, n2) {
    if (GD(t2), !e6 || B(e6, `ruleName`) === false) {
      let n3 = Error(`<SUBRULE${WD(t2)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e6)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw n3.KNOWN_RECORDER_ERROR = true, n3;
    }
    let r2 = $p(this.recordingProdStack), i2 = e6.ruleName, a2 = new XC({ idx: t2, nonTerminalName: i2, label: n2 == null ? void 0 : n2.LABEL, referencedRule: void 0 });
    return r2.definition.push(a2), this.outputCst ? BD : FD;
  }
  consumeInternalRecord(e6, t2, n2) {
    if (GD(t2), !TT(e6)) {
      let n3 = Error(`<CONSUME${WD(t2)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e6)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw n3.KNOWN_RECORDER_ERROR = true, n3;
    }
    let r2 = $p(this.recordingProdStack), i2 = new W({ idx: t2, terminalType: e6, label: n2 == null ? void 0 : n2.LABEL });
    return r2.definition.push(i2), zD;
  }
};
function HD(e6, t2, n2, r2 = false) {
  GD(n2);
  let i2 = $p(this.recordingProdStack), a2 = ea(t2) ? t2 : t2.DEF, o2 = new e6({ definition: [], idx: n2 });
  return r2 && (o2.separator = t2.SEP), B(t2, `MAX_LOOKAHEAD`) && (o2.maxLookahead = t2.MAX_LOOKAHEAD), this.recordingProdStack.push(o2), a2.call(this), i2.definition.push(o2), this.recordingProdStack.pop(), FD;
}
function UD(e6, t2) {
  GD(t2);
  let n2 = $p(this.recordingProdStack), r2 = F(e6) === false, i2 = r2 === false ? e6 : e6.DEF, a2 = new rw({ definition: [], idx: t2, ignoreAmbiguities: r2 && e6.IGNORE_AMBIGUITIES === true });
  return B(e6, `MAX_LOOKAHEAD`) && (a2.maxLookahead = e6.MAX_LOOKAHEAD), a2.hasPredicates = Ch(i2, (e7) => ea(e7.GATE)), n2.definition.push(a2), R(i2, (e7) => {
    let t3 = new QC({ definition: [] });
    a2.definition.push(t3), B(e7, `IGNORE_AMBIGUITIES`) ? t3.ignoreAmbiguities = e7.IGNORE_AMBIGUITIES : B(e7, `GATE`) && (t3.ignoreAmbiguities = true), this.recordingProdStack.push(t3), e7.ALT.call(this), this.recordingProdStack.pop();
  }), FD;
}
function WD(e6) {
  return e6 === 0 ? `` : `${e6}`;
}
function GD(e6) {
  if (e6 < 0 || e6 > LD) {
    let t2 = Error(`Invalid DSL Method idx value: <${e6}>
	Idx value must be a none negative value smaller than ${LD + 1}`);
    throw t2.KNOWN_RECORDER_ERROR = true, t2;
  }
}
var KD = class {
  initPerformanceTracer(e6) {
    if (B(e6, `traceInitPerf`)) {
      let t2 = e6.traceInitPerf, n2 = typeof t2 == `number`;
      this.traceInitMaxIdent = n2 ? t2 : 1 / 0, this.traceInitPerf = n2 ? t2 > 0 : t2;
    } else this.traceInitMaxIdent = 0, this.traceInitPerf = YD.traceInitPerf;
    this.traceInitIndent = -1;
  }
  TRACE_INIT(e6, t2) {
    if (this.traceInitPerf === true) {
      this.traceInitIndent++;
      let n2 = Array(this.traceInitIndent + 1).join(`	`);
      this.traceInitIndent < this.traceInitMaxIdent && console.log(`${n2}--> <${e6}>`);
      let { time: r2, value: i2 } = Mh(t2), a2 = r2 > 10 ? console.warn : console.log;
      return this.traceInitIndent < this.traceInitMaxIdent && a2(`${n2}<-- <${e6}> time: ${r2}ms`), this.traceInitIndent--, i2;
    } else return t2();
  }
};
function qD(e6, t2) {
  t2.forEach((t3) => {
    let n2 = t3.prototype;
    Object.getOwnPropertyNames(n2).forEach((r2) => {
      if (r2 === `constructor`) return;
      let i2 = Object.getOwnPropertyDescriptor(n2, r2);
      i2 && (i2.get || i2.set) ? Object.defineProperty(e6.prototype, r2, i2) : e6.prototype[r2] = t3.prototype[r2];
    });
  });
}
const JD = qT(KT, ``, NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(JD);
const YD = Object.freeze({ recoveryEnabled: false, maxLookahead: 3, dynamicTokensEnabled: false, outputCst: true, errorMessageProvider: YT, nodeLocationTracking: `none`, traceInitPerf: false, skipValidations: false }), XD = Object.freeze({ recoveryValueFunc: () => void 0, resyncEnabled: true });
var ZD;
(function(e6) {
  e6[e6.INVALID_RULE_NAME = 0] = `INVALID_RULE_NAME`, e6[e6.DUPLICATE_RULE_NAME = 1] = `DUPLICATE_RULE_NAME`, e6[e6.INVALID_RULE_OVERRIDE = 2] = `INVALID_RULE_OVERRIDE`, e6[e6.DUPLICATE_PRODUCTIONS = 3] = `DUPLICATE_PRODUCTIONS`, e6[e6.UNRESOLVED_SUBRULE_REF = 4] = `UNRESOLVED_SUBRULE_REF`, e6[e6.LEFT_RECURSION = 5] = `LEFT_RECURSION`, e6[e6.NONE_LAST_EMPTY_ALT = 6] = `NONE_LAST_EMPTY_ALT`, e6[e6.AMBIGUOUS_ALTS = 7] = `AMBIGUOUS_ALTS`, e6[e6.CONFLICT_TOKENS_RULES_NAMESPACE = 8] = `CONFLICT_TOKENS_RULES_NAMESPACE`, e6[e6.INVALID_TOKEN_NAME = 9] = `INVALID_TOKEN_NAME`, e6[e6.NO_NON_EMPTY_LOOKAHEAD = 10] = `NO_NON_EMPTY_LOOKAHEAD`, e6[e6.AMBIGUOUS_PREFIX_ALTS = 11] = `AMBIGUOUS_PREFIX_ALTS`, e6[e6.TOO_MANY_ALTS = 12] = `TOO_MANY_ALTS`, e6[e6.CUSTOM_LOOKAHEAD_VALIDATION = 13] = `CUSTOM_LOOKAHEAD_VALIDATION`;
})(ZD || (ZD = {}));
function QD(e6 = void 0) {
  return function() {
    return e6;
  };
}
var $D = class e3 {
  static performSelfAnalysis(e6) {
    throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.");
  }
  performSelfAnalysis() {
    this.TRACE_INIT(`performSelfAnalysis`, () => {
      let t2;
      this.selfAnalysisDone = true;
      let n2 = this.className;
      this.TRACE_INIT(`toFastProps`, () => {
        Nh(this);
      }), this.TRACE_INIT(`Grammar Recording`, () => {
        try {
          this.enableRecording(), R(this.definedRulesNames, (e6) => {
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
        r2 = KE({ rules: Vm(this.gastProductionsCache) }), this.definitionErrors = this.definitionErrors.concat(r2);
      }), this.TRACE_INIT(`Grammar Validations`, () => {
        if (V(r2) && this.skipValidations === false) {
          let e6 = qE({ rules: Vm(this.gastProductionsCache), tokenTypes: Vm(this.tokensMap), errMsgProvider: ZT, grammarName: n2 }), t3 = DE({ lookaheadStrategy: this.lookaheadStrategy, rules: Vm(this.gastProductionsCache), tokenTypes: Vm(this.tokensMap), grammarName: n2 });
          this.definitionErrors = this.definitionErrors.concat(e6, t3);
        }
      }), V(this.definitionErrors) && (this.recoveryEnabled && this.TRACE_INIT(`computeAllProdsFollows`, () => {
        this.resyncFollows = yw(Vm(this.gastProductionsCache));
      }), this.TRACE_INIT(`ComputeLookaheadFunctions`, () => {
        var e6, t3;
        (t3 = (e6 = this.lookaheadStrategy).initialize) == null || t3.call(e6, { rules: Vm(this.gastProductionsCache) }), this.preComputeLookaheadFunctions(Vm(this.gastProductionsCache));
      })), !e3.DEFER_DEFINITION_ERRORS_HANDLING && !V(this.definitionErrors)) throw t2 = z(this.definitionErrors, (e6) => e6.message), Error(`Parser Definition Errors detected:
 ${t2.join(`
-------------------------------
`)}`);
    });
  }
  constructor(e6, t2) {
    this.definitionErrors = [], this.selfAnalysisDone = false;
    let n2 = this;
    if (n2.initErrorHandler(t2), n2.initLexerAdapter(), n2.initLooksAhead(t2), n2.initRecognizerEngine(e6, t2), n2.initRecoverable(t2), n2.initTreeBuilder(t2), n2.initContentAssist(), n2.initGastRecorder(t2), n2.initPerformanceTracer(t2), B(t2, `ignoredIssues`)) throw Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);
    this.skipValidations = B(t2, `skipValidations`) ? t2.skipValidations : YD.skipValidations;
  }
};
$D.DEFER_DEFINITION_ERRORS_HANDLING = false, qD($D, [sD, mD, kD, AD, MD, jD, ND, PD, VD, KD]);
var eO = class extends $D {
  constructor(e6, t2 = YD) {
    let n2 = ef(t2);
    n2.outputCst = false, super(e6, n2);
  }
};
function tO(e6, t2, n2) {
  return `${e6.name}_${t2}_${n2}`;
}
var nO = class {
  constructor(e6) {
    this.target = e6;
  }
  isEpsilon() {
    return false;
  }
}, rO = class extends nO {
  constructor(e6, t2) {
    super(e6), this.tokenType = t2;
  }
}, iO = class extends nO {
  constructor(e6) {
    super(e6);
  }
  isEpsilon() {
    return true;
  }
}, aO = class extends nO {
  constructor(e6, t2, n2) {
    super(e6), this.rule = t2, this.followState = n2;
  }
  isEpsilon() {
    return true;
  }
};
function oO(e6) {
  let t2 = { decisionMap: {}, decisionStates: [], ruleToStartState: /* @__PURE__ */ new Map(), ruleToStopState: /* @__PURE__ */ new Map(), states: [] };
  sO(t2, e6);
  let n2 = e6.length;
  for (let r2 = 0; r2 < n2; r2++) {
    let n3 = e6[r2], i2 = hO(t2, n3, n3);
    i2 !== void 0 && TO(t2, n3, i2);
  }
  return t2;
}
function sO(e6, t2) {
  let n2 = t2.length;
  for (let r2 = 0; r2 < n2; r2++) {
    let n3 = t2[r2], i2 = DO(e6, n3, void 0, { type: 2 }), a2 = DO(e6, n3, void 0, { type: 7 });
    i2.stop = a2, e6.ruleToStartState.set(n3, i2), e6.ruleToStopState.set(n3, a2);
  }
}
function cO(e6, t2, n2) {
  return n2 instanceof W ? CO(e6, t2, n2.terminalType, n2) : n2 instanceof XC ? wO(e6, t2, n2) : n2 instanceof rw ? pO(e6, t2, n2) : n2 instanceof $C ? mO(e6, t2, n2) : n2 instanceof U ? lO(e6, t2, n2) : n2 instanceof nw ? uO(e6, t2, n2) : n2 instanceof ew ? dO(e6, t2, n2) : n2 instanceof tw ? fO(e6, t2, n2) : hO(e6, t2, n2);
}
function lO(e6, t2, n2) {
  let r2 = DO(e6, t2, n2, { type: 5 });
  return yO(e6, r2), _O(e6, t2, n2, bO(e6, t2, r2, n2, hO(e6, t2, n2)));
}
function uO(e6, t2, n2) {
  let r2 = DO(e6, t2, n2, { type: 5 });
  return yO(e6, r2), _O(e6, t2, n2, bO(e6, t2, r2, n2, hO(e6, t2, n2)), CO(e6, t2, n2.separator, n2));
}
function dO(e6, t2, n2) {
  let r2 = DO(e6, t2, n2, { type: 4 });
  return yO(e6, r2), gO(e6, t2, n2, bO(e6, t2, r2, n2, hO(e6, t2, n2)));
}
function fO(e6, t2, n2) {
  let r2 = DO(e6, t2, n2, { type: 4 });
  return yO(e6, r2), gO(e6, t2, n2, bO(e6, t2, r2, n2, hO(e6, t2, n2)), CO(e6, t2, n2.separator, n2));
}
function pO(e6, t2, n2) {
  let r2 = DO(e6, t2, n2, { type: 1 });
  return yO(e6, r2), bO(e6, t2, r2, n2, ...p(n2.definition, (n3) => cO(e6, t2, n3)));
}
function mO(e6, t2, n2) {
  let r2 = DO(e6, t2, n2, { type: 1 });
  return yO(e6, r2), vO(e6, t2, n2, bO(e6, t2, r2, n2, hO(e6, t2, n2)));
}
function hO(e6, t2, n2) {
  let r2 = c(p(n2.definition, (n3) => cO(e6, t2, n3)), (e7) => e7 !== void 0);
  return r2.length === 1 ? r2[0] : r2.length === 0 ? void 0 : SO(e6, r2);
}
function gO(e6, t2, n2, r2, i2) {
  let a2 = r2.left, o2 = r2.right, s2 = DO(e6, t2, n2, { type: 11 });
  yO(e6, s2);
  let c2 = DO(e6, t2, n2, { type: 12 });
  return a2.loopback = s2, c2.loopback = s2, e6.decisionMap[tO(t2, i2 ? `RepetitionMandatoryWithSeparator` : `RepetitionMandatory`, n2.idx)] = s2, EO(o2, s2), i2 === void 0 ? (EO(s2, a2), EO(s2, c2)) : (EO(s2, c2), EO(s2, i2.left), EO(i2.right, a2)), { left: a2, right: c2 };
}
function _O(e6, t2, n2, r2, i2) {
  let a2 = r2.left, o2 = r2.right, s2 = DO(e6, t2, n2, { type: 10 });
  yO(e6, s2);
  let c2 = DO(e6, t2, n2, { type: 12 }), l2 = DO(e6, t2, n2, { type: 9 });
  return s2.loopback = l2, c2.loopback = l2, EO(s2, a2), EO(s2, c2), EO(o2, l2), i2 === void 0 ? EO(l2, s2) : (EO(l2, c2), EO(l2, i2.left), EO(i2.right, a2)), e6.decisionMap[tO(t2, i2 ? `RepetitionWithSeparator` : `Repetition`, n2.idx)] = s2, { left: s2, right: c2 };
}
function vO(e6, t2, n2, r2) {
  let i2 = r2.left, a2 = r2.right;
  return EO(i2, a2), e6.decisionMap[tO(t2, `Option`, n2.idx)] = i2, r2;
}
function yO(e6, t2) {
  return e6.decisionStates.push(t2), t2.decision = e6.decisionStates.length - 1, t2.decision;
}
function bO(e6, t2, n2, r2, ...i2) {
  let a2 = DO(e6, t2, r2, { type: 8, start: n2 });
  n2.end = a2;
  for (let e7 of i2) e7 === void 0 ? EO(n2, a2) : (EO(n2, e7.left), EO(e7.right, a2));
  let o2 = { left: n2, right: a2 };
  return e6.decisionMap[tO(t2, xO(r2), r2.idx)] = n2, o2;
}
function xO(e6) {
  if (e6 instanceof rw) return `Alternation`;
  if (e6 instanceof $C) return `Option`;
  if (e6 instanceof U) return `Repetition`;
  if (e6 instanceof nw) return `RepetitionWithSeparator`;
  if (e6 instanceof ew) return `RepetitionMandatory`;
  if (e6 instanceof tw) return `RepetitionMandatoryWithSeparator`;
  throw Error(`Invalid production type encountered`);
}
function SO(e6, t2) {
  let n2 = t2.length;
  for (let r3 = 0; r3 < n2 - 1; r3++) {
    let n3 = t2[r3], i3;
    n3.left.transitions.length === 1 && (i3 = n3.left.transitions[0]);
    let a2 = i3 instanceof aO, o2 = i3, s2 = t2[r3 + 1].left;
    n3.left.type === 1 && n3.right.type === 1 && i3 !== void 0 && (a2 && o2.followState === n3.right || i3.target === n3.right) ? (a2 ? o2.followState = s2 : i3.target = s2, kO(e6, n3.right)) : EO(n3.right, s2);
  }
  let r2 = t2[0], i2 = t2[n2 - 1];
  return { left: r2.left, right: i2.right };
}
function CO(e6, t2, n2, r2) {
  let i2 = DO(e6, t2, r2, { type: 1 }), a2 = DO(e6, t2, r2, { type: 1 });
  return OO(i2, new rO(a2, n2)), { left: i2, right: a2 };
}
function wO(e6, t2, n2) {
  let r2 = n2.referencedRule, i2 = e6.ruleToStartState.get(r2), a2 = DO(e6, t2, n2, { type: 1 }), o2 = DO(e6, t2, n2, { type: 1 });
  return OO(a2, new aO(i2, r2, o2)), { left: a2, right: o2 };
}
function TO(e6, t2, n2) {
  let r2 = e6.ruleToStartState.get(t2);
  EO(r2, n2.left);
  let i2 = e6.ruleToStopState.get(t2);
  return EO(n2.right, i2), { left: r2, right: i2 };
}
function EO(e6, t2) {
  OO(e6, new iO(t2));
}
function DO(e6, t2, n2, r2) {
  let i2 = Object.assign({ atn: e6, production: n2, epsilonOnlyTransitions: false, rule: t2, transitions: [], nextTokenWithinRule: [], stateNumber: e6.states.length }, r2);
  return e6.states.push(i2), i2;
}
function OO(e6, t2) {
  e6.transitions.length === 0 && (e6.epsilonOnlyTransitions = t2.isEpsilon()), e6.transitions.push(t2);
}
function kO(e6, t2) {
  e6.states.splice(e6.states.indexOf(t2), 1);
}
const AO = {};
var jO = class {
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
    let t2 = MO(e6);
    t2 in this.map || (this.map[t2] = this.configs.length, this.configs.push(e6));
  }
  get elements() {
    return this.configs;
  }
  get alts() {
    return p(this.configs, (e6) => e6.alt);
  }
  get key() {
    let e6 = ``;
    for (let t2 in this.map) e6 += t2 + `:`;
    return e6;
  }
};
function MO(e6, t2 = true) {
  return `${t2 ? `a${e6.alt}` : ``}s${e6.state.stateNumber}:${e6.stack.map((e7) => e7.stateNumber.toString()).join(`_`)}`;
}
function NO(e6, t2) {
  return d(p(e6, t2), 1);
}
var PO = NO;
function FO(e6, t2) {
  return e6 && e6.length ? s(e6, l(t2, 2)) : [];
}
var IO = FO;
function LO(e6, t2) {
  let n2 = {};
  return (r2) => {
    let i2 = r2.toString(), a2 = n2[i2];
    return a2 === void 0 ? (a2 = { atnStartState: e6, decision: t2, states: {} }, n2[i2] = a2, a2) : a2;
  };
}
var RO = class {
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
}, zO = new RO(), BO = class extends pD {
  constructor(e6) {
    super(), this.logging = (e6 == null ? void 0 : e6.logging) ?? ((e7) => console.log(e7));
  }
  initialize(e6) {
    this.atn = oO(e6.rules), this.dfas = HO(this.atn);
  }
  validateAmbiguousAlternationAlternatives() {
    return [];
  }
  validateEmptyOrAlternatives() {
    return [];
  }
  buildLookaheadForAlternation(e6) {
    let { prodOccurrence: t2, rule: n2, hasPredicates: r2, dynamicTokensEnabled: i2 } = e6, a2 = this.dfas, o2 = this.logging, s2 = tO(n2, `Alternation`, t2), c2 = this.atn.decisionMap[s2].decision, l2 = p(dE({ maxLookahead: 1, occurrence: t2, prodType: `Alternation`, rule: n2 }), (e7) => p(e7, (e8) => e8[0]));
    if (VO(l2, false) && !i2) {
      let e7 = f(l2, (e8, t3, n3) => (u(t3, (t4) => {
        t4 && (e8[t4.tokenTypeIdx] = n3, u(t4.categoryMatches, (t5) => {
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
      let t3 = new RO(), n3 = e7 === void 0 ? 0 : e7.length;
      for (let r4 = 0; r4 < n3; r4++) {
        let n4 = e7 == null ? void 0 : e7[r4].GATE;
        t3.set(r4, n4 === void 0 || n4.call(this));
      }
      let r3 = UO.call(this, a2, c2, t3, o2);
      return typeof r3 == `number` ? r3 : void 0;
    };
    else return function() {
      let e7 = UO.call(this, a2, c2, zO, o2);
      return typeof e7 == `number` ? e7 : void 0;
    };
  }
  buildLookaheadForOptional(e6) {
    let { prodOccurrence: t2, rule: n2, prodType: r2, dynamicTokensEnabled: i2 } = e6, a2 = this.dfas, s2 = this.logging, c2 = tO(n2, r2, t2), l2 = this.atn.decisionMap[c2].decision, d2 = p(dE({ maxLookahead: 1, occurrence: t2, prodType: r2, rule: n2 }), (e7) => p(e7, (e8) => e8[0]));
    if (VO(d2) && d2[0][0] && !i2) {
      let e7 = d2[0], t3 = h(e7);
      if (t3.length === 1 && o(t3[0].categoryMatches)) {
        let e8 = t3[0].tokenTypeIdx;
        return function() {
          return this.LA(1).tokenTypeIdx === e8;
        };
      } else {
        let e8 = f(t3, (e9, t4) => (t4 !== void 0 && (e9[t4.tokenTypeIdx] = true, u(t4.categoryMatches, (t5) => {
          e9[t5] = true;
        })), e9), {});
        return function() {
          return e8[this.LA(1).tokenTypeIdx] === true;
        };
      }
    }
    return function() {
      let e7 = UO.call(this, a2, l2, zO, s2);
      return typeof e7 == `object` ? false : e7 === 0;
    };
  }
};
function VO(e6, t2 = true) {
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
function HO(e6) {
  let t2 = e6.decisionStates.length, n2 = Array(t2);
  for (let r2 = 0; r2 < t2; r2++) n2[r2] = LO(e6.decisionStates[r2], r2);
  return n2;
}
function UO(e6, t2, n2, r2) {
  let i2 = e6[t2](n2), a2 = i2.start;
  return a2 === void 0 && (a2 = nk(i2, ek(rk(i2.atnStartState))), i2.start = a2), WO.apply(this, [i2, a2, n2, r2]);
}
function WO(e6, t2, n2, r2) {
  let i2 = t2, a2 = 1, o2 = [], s2 = this.LA(a2++);
  for (; ; ) {
    let t3 = XO(i2, s2);
    if (t3 === void 0 && (t3 = GO.apply(this, [e6, i2, s2, a2, n2, r2])), t3 === AO) return YO(o2, i2, s2);
    if (t3.isAcceptState === true) return t3.prediction;
    i2 = t3, o2.push(s2), s2 = this.LA(a2++);
  }
}
function GO(e6, t2, n2, r2, i2, a2) {
  let o2 = ZO(t2.configs, n2, i2);
  if (o2.size === 0) return tk(e6, t2, n2, AO), AO;
  let s2 = ek(o2), c2 = $O(o2, i2);
  if (c2 !== void 0) s2.isAcceptState = true, s2.prediction = c2, s2.configs.uniqueAlt = c2;
  else if (ck(o2)) {
    let t3 = m(o2.alts);
    s2.isAcceptState = true, s2.prediction = t3, s2.configs.uniqueAlt = t3, KO.apply(this, [e6, r2, o2.alts, a2]);
  }
  return s2 = tk(e6, t2, n2, s2), s2;
}
function KO(e6, t2, n2, r2) {
  let i2 = [];
  for (let e7 = 1; e7 <= t2; e7++) i2.push(this.LA(e7).tokenType);
  let a2 = e6.atnStartState, o2 = a2.rule, s2 = a2.production;
  r2(qO({ topLevelRule: o2, ambiguityIndices: n2, production: s2, prefixPath: i2 }));
}
function qO(e6) {
  let t2 = p(e6.prefixPath, (e7) => NT(e7)).join(`, `), n2 = e6.production.idx === 0 ? `` : e6.production.idx, r2 = `Ambiguous Alternatives Detected: <${e6.ambiguityIndices.join(`, `)}> in <${JO(e6.production)}${n2}> inside <${e6.topLevelRule.name}> Rule,
<${t2}> may appears as a prefix path in all these alternatives.
`;
  return r2 += `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, r2;
}
function JO(e6) {
  if (e6 instanceof XC) return `SUBRULE`;
  if (e6 instanceof $C) return `OPTION`;
  if (e6 instanceof rw) return `OR`;
  if (e6 instanceof ew) return `AT_LEAST_ONE`;
  if (e6 instanceof tw) return `AT_LEAST_ONE_SEP`;
  if (e6 instanceof nw) return `MANY_SEP`;
  if (e6 instanceof U) return `MANY`;
  if (e6 instanceof W) return `CONSUME`;
  throw Error(`non exhaustive match`);
}
function YO(e6, t2, n2) {
  return { actualToken: n2, possibleTokenTypes: IO(PO(t2.configs.elements, (e7) => e7.state.transitions).filter((e7) => e7 instanceof rO).map((e7) => e7.tokenType), (e7) => e7.tokenTypeIdx), tokenPath: e6 };
}
function XO(e6, t2) {
  return e6.edges[t2.tokenTypeIdx];
}
function ZO(e6, t2, n2) {
  let r2 = new jO(), i2 = [];
  for (let a3 of e6.elements) {
    if (n2.is(a3.alt) === false) continue;
    if (a3.state.type === 7) {
      i2.push(a3);
      continue;
    }
    let e7 = a3.state.transitions.length;
    for (let n3 = 0; n3 < e7; n3++) {
      let e8 = a3.state.transitions[n3], i3 = QO(e8, t2);
      i3 !== void 0 && r2.add({ state: i3, alt: a3.alt, stack: a3.stack });
    }
  }
  let a2;
  if (i2.length === 0 && r2.size === 1 && (a2 = r2), a2 === void 0) {
    a2 = new jO();
    for (let e7 of r2.elements) ik(e7, a2);
  }
  if (i2.length > 0 && !ok(a2)) for (let e7 of i2) a2.add(e7);
  return a2;
}
function QO(e6, t2) {
  if (e6 instanceof rO && JT(t2, e6.tokenType)) return e6.target;
}
function $O(e6, t2) {
  let n2;
  for (let r2 of e6.elements) if (t2.is(r2.alt) === true) {
    if (n2 === void 0) n2 = r2.alt;
    else if (n2 !== r2.alt) return;
  }
  return n2;
}
function ek(e6) {
  return { configs: e6, edges: {}, isAcceptState: false, prediction: -1 };
}
function tk(e6, t2, n2, r2) {
  return r2 = nk(e6, r2), t2.edges[n2.tokenTypeIdx] = r2, r2;
}
function nk(e6, t2) {
  if (t2 === AO) return t2;
  let n2 = t2.configs.key, r2 = e6.states[n2];
  return r2 === void 0 ? (t2.configs.finalize(), e6.states[n2] = t2, t2) : r2;
}
function rk(e6) {
  let t2 = new jO(), n2 = e6.transitions.length;
  for (let r2 = 0; r2 < n2; r2++) ik({ state: e6.transitions[r2].target, alt: r2, stack: [] }, t2);
  return t2;
}
function ik(e6, t2) {
  let n2 = e6.state;
  if (n2.type === 7) {
    if (e6.stack.length > 0) {
      let n3 = [...e6.stack];
      ik({ state: n3.pop(), alt: e6.alt, stack: n3 }, t2);
    } else t2.add(e6);
    return;
  }
  n2.epsilonOnlyTransitions || t2.add(e6);
  let r2 = n2.transitions.length;
  for (let i2 = 0; i2 < r2; i2++) {
    let r3 = n2.transitions[i2], a2 = ak(e6, r3);
    a2 !== void 0 && ik(a2, t2);
  }
}
function ak(e6, t2) {
  if (t2 instanceof iO) return { state: t2.target, alt: e6.alt, stack: e6.stack };
  if (t2 instanceof aO) {
    let n2 = [...e6.stack, t2.followState];
    return { state: t2.target, alt: e6.alt, stack: n2 };
  }
}
function ok(e6) {
  for (let t2 of e6.elements) if (t2.state.type === 7) return true;
  return false;
}
function sk(e6) {
  for (let t2 of e6.elements) if (t2.state.type !== 7) return false;
  return true;
}
function ck(e6) {
  if (sk(e6)) return true;
  let t2 = lk(e6.elements);
  return uk(t2) && !dk(t2);
}
function lk(e6) {
  let t2 = /* @__PURE__ */ new Map();
  for (let n2 of e6) {
    let e7 = MO(n2, false), r2 = t2.get(e7);
    r2 === void 0 && (r2 = {}, t2.set(e7, r2)), r2[n2.alt] = true;
  }
  return t2;
}
function uk(e6) {
  for (let t2 of Array.from(e6.values())) if (Object.keys(t2).length > 1) return true;
  return false;
}
function dk(e6) {
  for (let t2 of Array.from(e6.values())) if (Object.keys(t2).length === 1) return true;
  return false;
}
var fk = i({ AnnotatedTextEdit: () => Nk, ChangeAnnotation: () => jk, ChangeAnnotationIdentifier: () => Mk, CodeAction: () => gA, CodeActionContext: () => hA, CodeActionKind: () => pA, CodeActionTriggerKind: () => mA, CodeDescription: () => Dk, CodeLens: () => _A, Color: () => yk, ColorInformation: () => bk, ColorPresentation: () => xk, Command: () => kk, CompletionItem: () => eA, CompletionItemKind: () => Jk, CompletionItemLabelDetails: () => $k, CompletionItemTag: () => Xk, CompletionList: () => tA, CreateFile: () => Fk, DeleteFile: () => Lk, Diagnostic: () => Ok, DiagnosticRelatedInformation: () => wk, DiagnosticSeverity: () => Tk, DiagnosticTag: () => Ek, DocumentHighlight: () => sA, DocumentHighlightKind: () => oA, DocumentLink: () => yA, DocumentSymbol: () => fA, DocumentUri: () => pk, EOL: () => RA, FoldingRange: () => Ck, FoldingRangeKind: () => Sk, FormattingOptions: () => vA, Hover: () => rA, InlayHint: () => AA, InlayHintKind: () => OA, InlayHintLabelPart: () => kA, InlineCompletionContext: () => IA, InlineCompletionItem: () => MA, InlineCompletionList: () => NA, InlineCompletionTriggerKind: () => PA, InlineValueContext: () => DA, InlineValueEvaluatableExpression: () => EA, InlineValueText: () => wA, InlineValueVariableLookup: () => TA, InsertReplaceEdit: () => Zk, InsertTextFormat: () => Yk, InsertTextMode: () => Qk, Location: () => _k, LocationLink: () => vk, MarkedString: () => nA, MarkupContent: () => qk, MarkupKind: () => Kk, OptionalVersionedTextDocumentIdentifier: () => Wk, ParameterInformation: () => iA, Position: () => q, Range: () => J, RenameFile: () => Ik, SelectedCompletionInfo: () => FA, SelectionRange: () => bA, SemanticTokenModifiers: () => SA, SemanticTokenTypes: () => xA, SemanticTokens: () => CA, SignatureInformation: () => aA, StringValue: () => jA, SymbolInformation: () => uA, SymbolKind: () => cA, SymbolTag: () => lA, TextDocument: () => zA, TextDocumentEdit: () => Pk, TextDocumentIdentifier: () => Hk, TextDocumentItem: () => Gk, TextEdit: () => Ak, URI: () => mk, VersionedTextDocumentIdentifier: () => Uk, WorkspaceChange: () => Vk, WorkspaceEdit: () => Rk, WorkspaceFolder: () => LA, WorkspaceSymbol: () => dA, integer: () => hk, uinteger: () => gk }), pk, mk, hk, gk, q, J, _k, vk, yk, bk, xk, Sk, Ck, wk, Tk, Ek, Dk, Ok, kk, Ak, jk, Mk, Nk, Pk, Fk, Ik, Lk, Rk, zk, Bk, Vk, Hk, Uk, Wk, Gk, Kk, qk, Jk, Yk, Xk, Zk, Qk, $k, eA, tA, nA, rA, iA, aA, oA, sA, cA, lA, uA, dA, fA, pA, mA, hA, gA, _A, vA, yA, bA, xA, SA, CA, wA, TA, EA, DA, OA, kA, AA, jA, MA, NA, PA, FA, IA, LA, RA, zA, BA, Y, VA = n((() => {
  (function(e6) {
    function t2(e7) {
      return typeof e7 == `string`;
    }
    e6.is = t2;
  })(pk || (pk = {})), (function(e6) {
    function t2(e7) {
      return typeof e7 == `string`;
    }
    e6.is = t2;
  })(mk || (mk = {})), (function(e6) {
    e6.MIN_VALUE = -2147483648, e6.MAX_VALUE = 2147483647;
    function t2(t3) {
      return typeof t3 == `number` && e6.MIN_VALUE <= t3 && t3 <= e6.MAX_VALUE;
    }
    e6.is = t2;
  })(hk || (hk = {})), (function(e6) {
    e6.MIN_VALUE = 0, e6.MAX_VALUE = 2147483647;
    function t2(t3) {
      return typeof t3 == `number` && e6.MIN_VALUE <= t3 && t3 <= e6.MAX_VALUE;
    }
    e6.is = t2;
  })(gk || (gk = {})), (function(e6) {
    function t2(e7, t3) {
      return e7 === Number.MAX_VALUE && (e7 = gk.MAX_VALUE), t3 === Number.MAX_VALUE && (t3 = gk.MAX_VALUE), { line: e7, character: t3 };
    }
    e6.create = t2;
    function n2(e7) {
      let t3 = e7;
      return Y.objectLiteral(t3) && Y.uinteger(t3.line) && Y.uinteger(t3.character);
    }
    e6.is = n2;
  })(q || (q = {})), (function(e6) {
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
  })(J || (J = {})), (function(e6) {
    function t2(e7, t3) {
      return { uri: e7, range: t3 };
    }
    e6.create = t2;
    function n2(e7) {
      let t3 = e7;
      return Y.objectLiteral(t3) && J.is(t3.range) && (Y.string(t3.uri) || Y.undefined(t3.uri));
    }
    e6.is = n2;
  })(_k || (_k = {})), (function(e6) {
    function t2(e7, t3, n3, r2) {
      return { targetUri: e7, targetRange: t3, targetSelectionRange: n3, originSelectionRange: r2 };
    }
    e6.create = t2;
    function n2(e7) {
      let t3 = e7;
      return Y.objectLiteral(t3) && J.is(t3.targetRange) && Y.string(t3.targetUri) && J.is(t3.targetSelectionRange) && (J.is(t3.originSelectionRange) || Y.undefined(t3.originSelectionRange));
    }
    e6.is = n2;
  })(vk || (vk = {})), (function(e6) {
    function t2(e7, t3, n3, r2) {
      return { red: e7, green: t3, blue: n3, alpha: r2 };
    }
    e6.create = t2;
    function n2(e7) {
      let t3 = e7;
      return Y.objectLiteral(t3) && Y.numberRange(t3.red, 0, 1) && Y.numberRange(t3.green, 0, 1) && Y.numberRange(t3.blue, 0, 1) && Y.numberRange(t3.alpha, 0, 1);
    }
    e6.is = n2;
  })(yk || (yk = {})), (function(e6) {
    function t2(e7, t3) {
      return { range: e7, color: t3 };
    }
    e6.create = t2;
    function n2(e7) {
      let t3 = e7;
      return Y.objectLiteral(t3) && J.is(t3.range) && yk.is(t3.color);
    }
    e6.is = n2;
  })(bk || (bk = {})), (function(e6) {
    function t2(e7, t3, n3) {
      return { label: e7, textEdit: t3, additionalTextEdits: n3 };
    }
    e6.create = t2;
    function n2(e7) {
      let t3 = e7;
      return Y.objectLiteral(t3) && Y.string(t3.label) && (Y.undefined(t3.textEdit) || Ak.is(t3)) && (Y.undefined(t3.additionalTextEdits) || Y.typedArray(t3.additionalTextEdits, Ak.is));
    }
    e6.is = n2;
  })(xk || (xk = {})), (function(e6) {
    e6.Comment = `comment`, e6.Imports = `imports`, e6.Region = `region`;
  })(Sk || (Sk = {})), (function(e6) {
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
  })(Ck || (Ck = {})), (function(e6) {
    function t2(e7, t3) {
      return { location: e7, message: t3 };
    }
    e6.create = t2;
    function n2(e7) {
      let t3 = e7;
      return Y.defined(t3) && _k.is(t3.location) && Y.string(t3.message);
    }
    e6.is = n2;
  })(wk || (wk = {})), (function(e6) {
    e6.Error = 1, e6.Warning = 2, e6.Information = 3, e6.Hint = 4;
  })(Tk || (Tk = {})), (function(e6) {
    e6.Unnecessary = 1, e6.Deprecated = 2;
  })(Ek || (Ek = {})), (function(e6) {
    function t2(e7) {
      let t3 = e7;
      return Y.objectLiteral(t3) && Y.string(t3.href);
    }
    e6.is = t2;
  })(Dk || (Dk = {})), (function(e6) {
    function t2(e7, t3, n3, r2, i2, a2) {
      let o2 = { range: e7, message: t3 };
      return Y.defined(n3) && (o2.severity = n3), Y.defined(r2) && (o2.code = r2), Y.defined(i2) && (o2.source = i2), Y.defined(a2) && (o2.relatedInformation = a2), o2;
    }
    e6.create = t2;
    function n2(e7) {
      var _a3;
      let t3 = e7;
      return Y.defined(t3) && J.is(t3.range) && Y.string(t3.message) && (Y.number(t3.severity) || Y.undefined(t3.severity)) && (Y.integer(t3.code) || Y.string(t3.code) || Y.undefined(t3.code)) && (Y.undefined(t3.codeDescription) || Y.string((_a3 = t3.codeDescription) == null ? void 0 : _a3.href)) && (Y.string(t3.source) || Y.undefined(t3.source)) && (Y.undefined(t3.relatedInformation) || Y.typedArray(t3.relatedInformation, wk.is));
    }
    e6.is = n2;
  })(Ok || (Ok = {})), (function(e6) {
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
  })(kk || (kk = {})), (function(e6) {
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
  })(Ak || (Ak = {})), (function(e6) {
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
  })(jk || (jk = {})), (function(e6) {
    function t2(e7) {
      let t3 = e7;
      return Y.string(t3);
    }
    e6.is = t2;
  })(Mk || (Mk = {})), (function(e6) {
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
      return Ak.is(t3) && (jk.is(t3.annotationId) || Mk.is(t3.annotationId));
    }
    e6.is = i2;
  })(Nk || (Nk = {})), (function(e6) {
    function t2(e7, t3) {
      return { textDocument: e7, edits: t3 };
    }
    e6.create = t2;
    function n2(e7) {
      let t3 = e7;
      return Y.defined(t3) && Wk.is(t3.textDocument) && Array.isArray(t3.edits);
    }
    e6.is = n2;
  })(Pk || (Pk = {})), (function(e6) {
    function t2(e7, t3, n3) {
      let r2 = { kind: `create`, uri: e7 };
      return t3 !== void 0 && (t3.overwrite !== void 0 || t3.ignoreIfExists !== void 0) && (r2.options = t3), n3 !== void 0 && (r2.annotationId = n3), r2;
    }
    e6.create = t2;
    function n2(e7) {
      let t3 = e7;
      return t3 && t3.kind === `create` && Y.string(t3.uri) && (t3.options === void 0 || (t3.options.overwrite === void 0 || Y.boolean(t3.options.overwrite)) && (t3.options.ignoreIfExists === void 0 || Y.boolean(t3.options.ignoreIfExists))) && (t3.annotationId === void 0 || Mk.is(t3.annotationId));
    }
    e6.is = n2;
  })(Fk || (Fk = {})), (function(e6) {
    function t2(e7, t3, n3, r2) {
      let i2 = { kind: `rename`, oldUri: e7, newUri: t3 };
      return n3 !== void 0 && (n3.overwrite !== void 0 || n3.ignoreIfExists !== void 0) && (i2.options = n3), r2 !== void 0 && (i2.annotationId = r2), i2;
    }
    e6.create = t2;
    function n2(e7) {
      let t3 = e7;
      return t3 && t3.kind === `rename` && Y.string(t3.oldUri) && Y.string(t3.newUri) && (t3.options === void 0 || (t3.options.overwrite === void 0 || Y.boolean(t3.options.overwrite)) && (t3.options.ignoreIfExists === void 0 || Y.boolean(t3.options.ignoreIfExists))) && (t3.annotationId === void 0 || Mk.is(t3.annotationId));
    }
    e6.is = n2;
  })(Ik || (Ik = {})), (function(e6) {
    function t2(e7, t3, n3) {
      let r2 = { kind: `delete`, uri: e7 };
      return t3 !== void 0 && (t3.recursive !== void 0 || t3.ignoreIfNotExists !== void 0) && (r2.options = t3), n3 !== void 0 && (r2.annotationId = n3), r2;
    }
    e6.create = t2;
    function n2(e7) {
      let t3 = e7;
      return t3 && t3.kind === `delete` && Y.string(t3.uri) && (t3.options === void 0 || (t3.options.recursive === void 0 || Y.boolean(t3.options.recursive)) && (t3.options.ignoreIfNotExists === void 0 || Y.boolean(t3.options.ignoreIfNotExists))) && (t3.annotationId === void 0 || Mk.is(t3.annotationId));
    }
    e6.is = n2;
  })(Lk || (Lk = {})), (function(e6) {
    function t2(e7) {
      let t3 = e7;
      return t3 && (t3.changes !== void 0 || t3.documentChanges !== void 0) && (t3.documentChanges === void 0 || t3.documentChanges.every((e8) => Y.string(e8.kind) ? Fk.is(e8) || Ik.is(e8) || Lk.is(e8) : Pk.is(e8)));
    }
    e6.is = t2;
  })(Rk || (Rk = {})), zk = class {
    constructor(e6, t2) {
      this.edits = e6, this.changeAnnotations = t2;
    }
    insert(e6, t2, n2) {
      let r2, i2;
      if (n2 === void 0 ? r2 = Ak.insert(e6, t2) : Mk.is(n2) ? (i2 = n2, r2 = Nk.insert(e6, t2, n2)) : (this.assertChangeAnnotations(this.changeAnnotations), i2 = this.changeAnnotations.manage(n2), r2 = Nk.insert(e6, t2, i2)), this.edits.push(r2), i2 !== void 0) return i2;
    }
    replace(e6, t2, n2) {
      let r2, i2;
      if (n2 === void 0 ? r2 = Ak.replace(e6, t2) : Mk.is(n2) ? (i2 = n2, r2 = Nk.replace(e6, t2, n2)) : (this.assertChangeAnnotations(this.changeAnnotations), i2 = this.changeAnnotations.manage(n2), r2 = Nk.replace(e6, t2, i2)), this.edits.push(r2), i2 !== void 0) return i2;
    }
    delete(e6, t2) {
      let n2, r2;
      if (t2 === void 0 ? n2 = Ak.del(e6) : Mk.is(t2) ? (r2 = t2, n2 = Nk.del(e6, t2)) : (this.assertChangeAnnotations(this.changeAnnotations), r2 = this.changeAnnotations.manage(t2), n2 = Nk.del(e6, r2)), this.edits.push(n2), r2 !== void 0) return r2;
    }
    add(e6) {
      this.edits.push(e6);
    }
    all() {
      return this.edits;
    }
    clear() {
      this.edits.splice(0, this.edits.length);
    }
    assertChangeAnnotations(e6) {
      if (e6 === void 0) throw Error(`Text edit change is not configured to manage change annotations.`);
    }
  }, Bk = class {
    constructor(e6) {
      this._annotations = e6 === void 0 ? /* @__PURE__ */ Object.create(null) : e6, this._counter = 0, this._size = 0;
    }
    all() {
      return this._annotations;
    }
    get size() {
      return this._size;
    }
    manage(e6, t2) {
      let n2;
      if (Mk.is(e6) ? n2 = e6 : (n2 = this.nextId(), t2 = e6), this._annotations[n2] !== void 0) throw Error(`Id ${n2} is already in use.`);
      if (t2 === void 0) throw Error(`No annotation provided for id ${n2}`);
      return this._annotations[n2] = t2, this._size++, n2;
    }
    nextId() {
      return this._counter++, this._counter.toString();
    }
  }, Vk = class {
    constructor(e6) {
      this._textEditChanges = /* @__PURE__ */ Object.create(null), e6 === void 0 ? this._workspaceEdit = {} : (this._workspaceEdit = e6, e6.documentChanges ? (this._changeAnnotations = new Bk(e6.changeAnnotations), e6.changeAnnotations = this._changeAnnotations.all(), e6.documentChanges.forEach((e7) => {
        if (Pk.is(e7)) {
          let t2 = new zk(e7.edits, this._changeAnnotations);
          this._textEditChanges[e7.textDocument.uri] = t2;
        }
      })) : e6.changes && Object.keys(e6.changes).forEach((t2) => {
        let n2 = new zk(e6.changes[t2]);
        this._textEditChanges[t2] = n2;
      }));
    }
    get edit() {
      return this.initDocumentChanges(), this._changeAnnotations !== void 0 && (this._changeAnnotations.size === 0 ? this._workspaceEdit.changeAnnotations = void 0 : this._workspaceEdit.changeAnnotations = this._changeAnnotations.all()), this._workspaceEdit;
    }
    getTextEditChange(e6) {
      if (Wk.is(e6)) {
        if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw Error(`Workspace edit is not configured for document changes.`);
        let t2 = { uri: e6.uri, version: e6.version }, n2 = this._textEditChanges[t2.uri];
        if (!n2) {
          let e7 = [], r2 = { textDocument: t2, edits: e7 };
          this._workspaceEdit.documentChanges.push(r2), n2 = new zk(e7, this._changeAnnotations), this._textEditChanges[t2.uri] = n2;
        }
        return n2;
      } else {
        if (this.initChanges(), this._workspaceEdit.changes === void 0) throw Error(`Workspace edit is not configured for normal text edit changes.`);
        let t2 = this._textEditChanges[e6];
        if (!t2) {
          let n2 = [];
          this._workspaceEdit.changes[e6] = n2, t2 = new zk(n2), this._textEditChanges[e6] = t2;
        }
        return t2;
      }
    }
    initDocumentChanges() {
      this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._changeAnnotations = new Bk(), this._workspaceEdit.documentChanges = [], this._workspaceEdit.changeAnnotations = this._changeAnnotations.all());
    }
    initChanges() {
      this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._workspaceEdit.changes = /* @__PURE__ */ Object.create(null));
    }
    createFile(e6, t2, n2) {
      if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw Error(`Workspace edit is not configured for document changes.`);
      let r2;
      jk.is(t2) || Mk.is(t2) ? r2 = t2 : n2 = t2;
      let i2, a2;
      if (r2 === void 0 ? i2 = Fk.create(e6, n2) : (a2 = Mk.is(r2) ? r2 : this._changeAnnotations.manage(r2), i2 = Fk.create(e6, n2, a2)), this._workspaceEdit.documentChanges.push(i2), a2 !== void 0) return a2;
    }
    renameFile(e6, t2, n2, r2) {
      if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw Error(`Workspace edit is not configured for document changes.`);
      let i2;
      jk.is(n2) || Mk.is(n2) ? i2 = n2 : r2 = n2;
      let a2, o2;
      if (i2 === void 0 ? a2 = Ik.create(e6, t2, r2) : (o2 = Mk.is(i2) ? i2 : this._changeAnnotations.manage(i2), a2 = Ik.create(e6, t2, r2, o2)), this._workspaceEdit.documentChanges.push(a2), o2 !== void 0) return o2;
    }
    deleteFile(e6, t2, n2) {
      if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw Error(`Workspace edit is not configured for document changes.`);
      let r2;
      jk.is(t2) || Mk.is(t2) ? r2 = t2 : n2 = t2;
      let i2, a2;
      if (r2 === void 0 ? i2 = Lk.create(e6, n2) : (a2 = Mk.is(r2) ? r2 : this._changeAnnotations.manage(r2), i2 = Lk.create(e6, n2, a2)), this._workspaceEdit.documentChanges.push(i2), a2 !== void 0) return a2;
    }
  }, (function(e6) {
    function t2(e7) {
      return { uri: e7 };
    }
    e6.create = t2;
    function n2(e7) {
      let t3 = e7;
      return Y.defined(t3) && Y.string(t3.uri);
    }
    e6.is = n2;
  })(Hk || (Hk = {})), (function(e6) {
    function t2(e7, t3) {
      return { uri: e7, version: t3 };
    }
    e6.create = t2;
    function n2(e7) {
      let t3 = e7;
      return Y.defined(t3) && Y.string(t3.uri) && Y.integer(t3.version);
    }
    e6.is = n2;
  })(Uk || (Uk = {})), (function(e6) {
    function t2(e7, t3) {
      return { uri: e7, version: t3 };
    }
    e6.create = t2;
    function n2(e7) {
      let t3 = e7;
      return Y.defined(t3) && Y.string(t3.uri) && (t3.version === null || Y.integer(t3.version));
    }
    e6.is = n2;
  })(Wk || (Wk = {})), (function(e6) {
    function t2(e7, t3, n3, r2) {
      return { uri: e7, languageId: t3, version: n3, text: r2 };
    }
    e6.create = t2;
    function n2(e7) {
      let t3 = e7;
      return Y.defined(t3) && Y.string(t3.uri) && Y.string(t3.languageId) && Y.integer(t3.version) && Y.string(t3.text);
    }
    e6.is = n2;
  })(Gk || (Gk = {})), (function(e6) {
    e6.PlainText = `plaintext`, e6.Markdown = `markdown`;
    function t2(t3) {
      let n2 = t3;
      return n2 === e6.PlainText || n2 === e6.Markdown;
    }
    e6.is = t2;
  })(Kk || (Kk = {})), (function(e6) {
    function t2(e7) {
      let t3 = e7;
      return Y.objectLiteral(e7) && Kk.is(t3.kind) && Y.string(t3.value);
    }
    e6.is = t2;
  })(qk || (qk = {})), (function(e6) {
    e6.Text = 1, e6.Method = 2, e6.Function = 3, e6.Constructor = 4, e6.Field = 5, e6.Variable = 6, e6.Class = 7, e6.Interface = 8, e6.Module = 9, e6.Property = 10, e6.Unit = 11, e6.Value = 12, e6.Enum = 13, e6.Keyword = 14, e6.Snippet = 15, e6.Color = 16, e6.File = 17, e6.Reference = 18, e6.Folder = 19, e6.EnumMember = 20, e6.Constant = 21, e6.Struct = 22, e6.Event = 23, e6.Operator = 24, e6.TypeParameter = 25;
  })(Jk || (Jk = {})), (function(e6) {
    e6.PlainText = 1, e6.Snippet = 2;
  })(Yk || (Yk = {})), (function(e6) {
    e6.Deprecated = 1;
  })(Xk || (Xk = {})), (function(e6) {
    function t2(e7, t3, n3) {
      return { newText: e7, insert: t3, replace: n3 };
    }
    e6.create = t2;
    function n2(e7) {
      let t3 = e7;
      return t3 && Y.string(t3.newText) && J.is(t3.insert) && J.is(t3.replace);
    }
    e6.is = n2;
  })(Zk || (Zk = {})), (function(e6) {
    e6.asIs = 1, e6.adjustIndentation = 2;
  })(Qk || (Qk = {})), (function(e6) {
    function t2(e7) {
      let t3 = e7;
      return t3 && (Y.string(t3.detail) || t3.detail === void 0) && (Y.string(t3.description) || t3.description === void 0);
    }
    e6.is = t2;
  })($k || ($k = {})), (function(e6) {
    function t2(e7) {
      return { label: e7 };
    }
    e6.create = t2;
  })(eA || (eA = {})), (function(e6) {
    function t2(e7, t3) {
      return { items: e7 || [], isIncomplete: !!t3 };
    }
    e6.create = t2;
  })(tA || (tA = {})), (function(e6) {
    function t2(e7) {
      return e7.replace(/[\\`*_{}[\]()#+\-.!]/g, `\\$&`);
    }
    e6.fromPlainText = t2;
    function n2(e7) {
      let t3 = e7;
      return Y.string(t3) || Y.objectLiteral(t3) && Y.string(t3.language) && Y.string(t3.value);
    }
    e6.is = n2;
  })(nA || (nA = {})), (function(e6) {
    function t2(e7) {
      let t3 = e7;
      return !!t3 && Y.objectLiteral(t3) && (qk.is(t3.contents) || nA.is(t3.contents) || Y.typedArray(t3.contents, nA.is)) && (e7.range === void 0 || J.is(e7.range));
    }
    e6.is = t2;
  })(rA || (rA = {})), (function(e6) {
    function t2(e7, t3) {
      return t3 ? { label: e7, documentation: t3 } : { label: e7 };
    }
    e6.create = t2;
  })(iA || (iA = {})), (function(e6) {
    function t2(e7, t3, ...n2) {
      let r2 = { label: e7 };
      return Y.defined(t3) && (r2.documentation = t3), Y.defined(n2) ? r2.parameters = n2 : r2.parameters = [], r2;
    }
    e6.create = t2;
  })(aA || (aA = {})), (function(e6) {
    e6.Text = 1, e6.Read = 2, e6.Write = 3;
  })(oA || (oA = {})), (function(e6) {
    function t2(e7, t3) {
      let n2 = { range: e7 };
      return Y.number(t3) && (n2.kind = t3), n2;
    }
    e6.create = t2;
  })(sA || (sA = {})), (function(e6) {
    e6.File = 1, e6.Module = 2, e6.Namespace = 3, e6.Package = 4, e6.Class = 5, e6.Method = 6, e6.Property = 7, e6.Field = 8, e6.Constructor = 9, e6.Enum = 10, e6.Interface = 11, e6.Function = 12, e6.Variable = 13, e6.Constant = 14, e6.String = 15, e6.Number = 16, e6.Boolean = 17, e6.Array = 18, e6.Object = 19, e6.Key = 20, e6.Null = 21, e6.EnumMember = 22, e6.Struct = 23, e6.Event = 24, e6.Operator = 25, e6.TypeParameter = 26;
  })(cA || (cA = {})), (function(e6) {
    e6.Deprecated = 1;
  })(lA || (lA = {})), (function(e6) {
    function t2(e7, t3, n2, r2, i2) {
      let a2 = { name: e7, kind: t3, location: { uri: r2, range: n2 } };
      return i2 && (a2.containerName = i2), a2;
    }
    e6.create = t2;
  })(uA || (uA = {})), (function(e6) {
    function t2(e7, t3, n2, r2) {
      return r2 === void 0 ? { name: e7, kind: t3, location: { uri: n2 } } : { name: e7, kind: t3, location: { uri: n2, range: r2 } };
    }
    e6.create = t2;
  })(dA || (dA = {})), (function(e6) {
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
  })(fA || (fA = {})), (function(e6) {
    e6.Empty = ``, e6.QuickFix = `quickfix`, e6.Refactor = `refactor`, e6.RefactorExtract = `refactor.extract`, e6.RefactorInline = `refactor.inline`, e6.RefactorRewrite = `refactor.rewrite`, e6.Source = `source`, e6.SourceOrganizeImports = `source.organizeImports`, e6.SourceFixAll = `source.fixAll`;
  })(pA || (pA = {})), (function(e6) {
    e6.Invoked = 1, e6.Automatic = 2;
  })(mA || (mA = {})), (function(e6) {
    function t2(e7, t3, n3) {
      let r2 = { diagnostics: e7 };
      return t3 != null && (r2.only = t3), n3 != null && (r2.triggerKind = n3), r2;
    }
    e6.create = t2;
    function n2(e7) {
      let t3 = e7;
      return Y.defined(t3) && Y.typedArray(t3.diagnostics, Ok.is) && (t3.only === void 0 || Y.typedArray(t3.only, Y.string)) && (t3.triggerKind === void 0 || t3.triggerKind === mA.Invoked || t3.triggerKind === mA.Automatic);
    }
    e6.is = n2;
  })(hA || (hA = {})), (function(e6) {
    function t2(e7, t3, n3) {
      let r2 = { title: e7 }, i2 = true;
      return typeof t3 == `string` ? (i2 = false, r2.kind = t3) : kk.is(t3) ? r2.command = t3 : r2.edit = t3, i2 && n3 !== void 0 && (r2.kind = n3), r2;
    }
    e6.create = t2;
    function n2(e7) {
      let t3 = e7;
      return t3 && Y.string(t3.title) && (t3.diagnostics === void 0 || Y.typedArray(t3.diagnostics, Ok.is)) && (t3.kind === void 0 || Y.string(t3.kind)) && (t3.edit !== void 0 || t3.command !== void 0) && (t3.command === void 0 || kk.is(t3.command)) && (t3.isPreferred === void 0 || Y.boolean(t3.isPreferred)) && (t3.edit === void 0 || Rk.is(t3.edit));
    }
    e6.is = n2;
  })(gA || (gA = {})), (function(e6) {
    function t2(e7, t3) {
      let n3 = { range: e7 };
      return Y.defined(t3) && (n3.data = t3), n3;
    }
    e6.create = t2;
    function n2(e7) {
      let t3 = e7;
      return Y.defined(t3) && J.is(t3.range) && (Y.undefined(t3.command) || kk.is(t3.command));
    }
    e6.is = n2;
  })(_A || (_A = {})), (function(e6) {
    function t2(e7, t3) {
      return { tabSize: e7, insertSpaces: t3 };
    }
    e6.create = t2;
    function n2(e7) {
      let t3 = e7;
      return Y.defined(t3) && Y.uinteger(t3.tabSize) && Y.boolean(t3.insertSpaces);
    }
    e6.is = n2;
  })(vA || (vA = {})), (function(e6) {
    function t2(e7, t3, n3) {
      return { range: e7, target: t3, data: n3 };
    }
    e6.create = t2;
    function n2(e7) {
      let t3 = e7;
      return Y.defined(t3) && J.is(t3.range) && (Y.undefined(t3.target) || Y.string(t3.target));
    }
    e6.is = n2;
  })(yA || (yA = {})), (function(e6) {
    function t2(e7, t3) {
      return { range: e7, parent: t3 };
    }
    e6.create = t2;
    function n2(t3) {
      let n3 = t3;
      return Y.objectLiteral(n3) && J.is(n3.range) && (n3.parent === void 0 || e6.is(n3.parent));
    }
    e6.is = n2;
  })(bA || (bA = {})), (function(e6) {
    e6.namespace = `namespace`, e6.type = `type`, e6.class = `class`, e6.enum = `enum`, e6.interface = `interface`, e6.struct = `struct`, e6.typeParameter = `typeParameter`, e6.parameter = `parameter`, e6.variable = `variable`, e6.property = `property`, e6.enumMember = `enumMember`, e6.event = `event`, e6.function = `function`, e6.method = `method`, e6.macro = `macro`, e6.keyword = `keyword`, e6.modifier = `modifier`, e6.comment = `comment`, e6.string = `string`, e6.number = `number`, e6.regexp = `regexp`, e6.operator = `operator`, e6.decorator = `decorator`;
  })(xA || (xA = {})), (function(e6) {
    e6.declaration = `declaration`, e6.definition = `definition`, e6.readonly = `readonly`, e6.static = `static`, e6.deprecated = `deprecated`, e6.abstract = `abstract`, e6.async = `async`, e6.modification = `modification`, e6.documentation = `documentation`, e6.defaultLibrary = `defaultLibrary`;
  })(SA || (SA = {})), (function(e6) {
    function t2(e7) {
      let t3 = e7;
      return Y.objectLiteral(t3) && (t3.resultId === void 0 || typeof t3.resultId == `string`) && Array.isArray(t3.data) && (t3.data.length === 0 || typeof t3.data[0] == `number`);
    }
    e6.is = t2;
  })(CA || (CA = {})), (function(e6) {
    function t2(e7, t3) {
      return { range: e7, text: t3 };
    }
    e6.create = t2;
    function n2(e7) {
      let t3 = e7;
      return t3 != null && J.is(t3.range) && Y.string(t3.text);
    }
    e6.is = n2;
  })(wA || (wA = {})), (function(e6) {
    function t2(e7, t3, n3) {
      return { range: e7, variableName: t3, caseSensitiveLookup: n3 };
    }
    e6.create = t2;
    function n2(e7) {
      let t3 = e7;
      return t3 != null && J.is(t3.range) && Y.boolean(t3.caseSensitiveLookup) && (Y.string(t3.variableName) || t3.variableName === void 0);
    }
    e6.is = n2;
  })(TA || (TA = {})), (function(e6) {
    function t2(e7, t3) {
      return { range: e7, expression: t3 };
    }
    e6.create = t2;
    function n2(e7) {
      let t3 = e7;
      return t3 != null && J.is(t3.range) && (Y.string(t3.expression) || t3.expression === void 0);
    }
    e6.is = n2;
  })(EA || (EA = {})), (function(e6) {
    function t2(e7, t3) {
      return { frameId: e7, stoppedLocation: t3 };
    }
    e6.create = t2;
    function n2(e7) {
      let t3 = e7;
      return Y.defined(t3) && J.is(e7.stoppedLocation);
    }
    e6.is = n2;
  })(DA || (DA = {})), (function(e6) {
    e6.Type = 1, e6.Parameter = 2;
    function t2(e7) {
      return e7 === 1 || e7 === 2;
    }
    e6.is = t2;
  })(OA || (OA = {})), (function(e6) {
    function t2(e7) {
      return { value: e7 };
    }
    e6.create = t2;
    function n2(e7) {
      let t3 = e7;
      return Y.objectLiteral(t3) && (t3.tooltip === void 0 || Y.string(t3.tooltip) || qk.is(t3.tooltip)) && (t3.location === void 0 || _k.is(t3.location)) && (t3.command === void 0 || kk.is(t3.command));
    }
    e6.is = n2;
  })(kA || (kA = {})), (function(e6) {
    function t2(e7, t3, n3) {
      let r2 = { position: e7, label: t3 };
      return n3 !== void 0 && (r2.kind = n3), r2;
    }
    e6.create = t2;
    function n2(e7) {
      let t3 = e7;
      return Y.objectLiteral(t3) && q.is(t3.position) && (Y.string(t3.label) || Y.typedArray(t3.label, kA.is)) && (t3.kind === void 0 || OA.is(t3.kind)) && t3.textEdits === void 0 || Y.typedArray(t3.textEdits, Ak.is) && (t3.tooltip === void 0 || Y.string(t3.tooltip) || qk.is(t3.tooltip)) && (t3.paddingLeft === void 0 || Y.boolean(t3.paddingLeft)) && (t3.paddingRight === void 0 || Y.boolean(t3.paddingRight));
    }
    e6.is = n2;
  })(AA || (AA = {})), (function(e6) {
    function t2(e7) {
      return { kind: `snippet`, value: e7 };
    }
    e6.createSnippet = t2;
  })(jA || (jA = {})), (function(e6) {
    function t2(e7, t3, n2, r2) {
      return { insertText: e7, filterText: t3, range: n2, command: r2 };
    }
    e6.create = t2;
  })(MA || (MA = {})), (function(e6) {
    function t2(e7) {
      return { items: e7 };
    }
    e6.create = t2;
  })(NA || (NA = {})), (function(e6) {
    e6.Invoked = 0, e6.Automatic = 1;
  })(PA || (PA = {})), (function(e6) {
    function t2(e7, t3) {
      return { range: e7, text: t3 };
    }
    e6.create = t2;
  })(FA || (FA = {})), (function(e6) {
    function t2(e7, t3) {
      return { triggerKind: e7, selectedCompletionInfo: t3 };
    }
    e6.create = t2;
  })(IA || (IA = {})), (function(e6) {
    function t2(e7) {
      let t3 = e7;
      return Y.objectLiteral(t3) && mk.is(t3.uri) && Y.string(t3.name);
    }
    e6.is = t2;
  })(LA || (LA = {})), RA = [`
`, `\r
`, `\r`], (function(e6) {
    function t2(e7, t3, n3, r3) {
      return new BA(e7, t3, n3, r3);
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
  })(zA || (zA = {})), BA = class {
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
  }, (function(e6) {
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
}));
VA();
var HA = class {
  constructor() {
    this.nodeStack = [];
  }
  get current() {
    return this.nodeStack[this.nodeStack.length - 1] ?? this.rootNode;
  }
  buildRootNode(e6) {
    return this.rootNode = new qA(e6), this.rootNode.root = this.rootNode, this.nodeStack = [this.rootNode], this.rootNode;
  }
  buildCompositeNode(e6) {
    let t2 = new GA();
    return t2.grammarSource = e6, t2.root = this.rootNode, this.current.content.push(t2), this.nodeStack.push(t2), t2;
  }
  buildLeafNode(e6, t2) {
    let n2 = new WA(e6.startOffset, e6.image.length, vn(e6), e6.tokenType, !t2);
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
      let e7 = new WA(n3.startOffset, n3.image.length, vn(n3), n3.tokenType, true);
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
    typeof e6.$type == `string` && !e6.$infixName && (this.current.astNode = e6), e6.$cstNode = t2;
    let n2 = this.nodeStack.pop();
    (n2 == null ? void 0 : n2.content.length) === 0 && this.removeNode(n2);
  }
}, UA = class {
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
  get text() {
    return this.root.fullText.substring(this.offset, this.end);
  }
}, WA = class extends UA {
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
}, GA = class extends UA {
  constructor() {
    super(...arguments), this.content = new KA(this);
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
}, KA = class e4 extends Array {
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
}, qA = class extends GA {
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
const JA = Symbol(`Datatype`);
function YA(e6) {
  return e6.$type === JA;
}
var XA = `\u200B`, ZA = (e6) => e6.endsWith(XA) ? e6 : e6 + XA, QA = class {
  constructor(e6) {
    var _a3;
    this._unorderedGroups = /* @__PURE__ */ new Map(), this.allRules = /* @__PURE__ */ new Map(), this.lexer = e6.parser.Lexer;
    let t2 = this.lexer.definition, n2 = e6.LanguageMetaData.mode === `production`;
    ((_a3 = e6.shared.profilers.LangiumProfiler) == null ? void 0 : _a3.isActive(`parsing`)) ? this.wrapper = new aj(t2, { ...e6.parser.ParserConfig, skipValidations: n2, errorMessageProvider: e6.parser.ParserErrorMessageProvider }, e6.shared.profilers.LangiumProfiler.createTask(`parsing`, e6.LanguageMetaData.languageId)) : this.wrapper = new ij(t2, { ...e6.parser.ParserConfig, skipValidations: n2, errorMessageProvider: e6.parser.ParserErrorMessageProvider });
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
}, $A = class extends QA {
  get current() {
    return this.stack[this.stack.length - 1];
  }
  constructor(e6) {
    super(e6), this.nodeBuilder = new HA(), this.stack = [], this.assignmentMap = /* @__PURE__ */ new Map(), this.operatorPrecedence = /* @__PURE__ */ new Map(), this.linker = e6.references.Linker, this.converter = e6.parser.ValueConverter, this.astReflection = e6.shared.AstReflection;
  }
  rule(e6, t2) {
    let n2 = this.computeRuleType(e6), r2;
    it(e6) && (r2 = e6.name, this.registerPrecedenceMap(e6));
    let i2 = this.wrapper.DEFINE_RULE(ZA(e6.name), this.startImplementation(n2, r2, t2).bind(this));
    return this.allRules.set(e6.name, i2), Et(e6) && e6.entry && (this.mainRule = i2), i2;
  }
  registerPrecedenceMap(e6) {
    let t2 = e6.name, n2 = /* @__PURE__ */ new Map();
    for (let t3 = 0; t3 < e6.operators.precedences.length; t3++) {
      let r2 = e6.operators.precedences[t3];
      for (let e7 of r2.operators) n2.set(e7.value, { precedence: t3, rightAssoc: r2.associativity === `right` });
    }
    this.operatorPrecedence.set(t2, n2);
  }
  computeRuleType(e6) {
    return it(e6) ? Fr(e6) : e6.fragment ? void 0 : Ar(e6) ? JA : Fr(e6);
  }
  parse(e6, t2 = {}) {
    this.nodeBuilder.buildRootNode(e6);
    let n2 = this.lexerResult = this.lexer.tokenize(e6);
    this.wrapper.input = n2.tokens;
    let r2 = t2.rule ? this.allRules.get(t2.rule) : this.mainRule;
    if (!r2) throw Error(t2.rule ? `No rule found with name '${t2.rule}'` : `No main rule available.`);
    let i2 = this.doParse(r2);
    return this.nodeBuilder.addHiddenNodes(n2.hidden), this.unorderedGroups.clear(), this.lexerResult = void 0, oe(i2, { deep: true }), { value: i2, lexerErrors: n2.errors, lexerReport: n2.report, parserErrors: this.wrapper.errors };
  }
  doParse(e6) {
    let t2 = this.wrapper.rule(e6);
    if (this.stack.length > 0 && (t2 = this.construct()), t2 === void 0) throw Error(`No result from parser`);
    if (this.stack.length > 0) throw Error(`Parser stack is not empty after parsing`);
    return t2;
  }
  startImplementation(e6, t2, n2) {
    return (r2) => {
      let i2 = !this.isRecording() && e6 !== void 0;
      if (i2) {
        let n3 = { $type: e6 };
        this.stack.push(n3), e6 === JA ? n3.value = `` : t2 !== void 0 && (n3.$infixName = t2);
      }
      return n2(r2), i2 ? this.construct() : void 0;
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
      let t3 = this.nodeBuilder.buildLeafNode(r2, n2), { assignment: i2, crossRef: a2 } = this.getAssignment(n2), o2 = this.current;
      if (i2) {
        let e8 = ft(n2) ? r2.image : this.converter.convert(r2.image, t3);
        this.assign(i2.operator, i2.feature, e8, t3, a2);
      } else if (YA(o2)) {
        let e8 = r2.image;
        ft(n2) || (e8 = this.converter.convert(e8, t3).toString()), o2.value += e8;
      }
    }
  }
  isValidToken(e6) {
    return !e6.isInsertedInRecovery && !isNaN(e6.startOffset) && typeof e6.endOffset == `number` && !isNaN(e6.endOffset);
  }
  subrule(e6, t2, n2, r2, i2) {
    let a2;
    !this.isRecording() && !n2 && (a2 = this.nodeBuilder.buildCompositeNode(r2));
    let o2;
    try {
      o2 = this.wrapper.wrapSubrule(e6, t2, i2);
    } finally {
      this.isRecording() || (o2 === void 0 && !n2 && (o2 = this.construct()), o2 !== void 0 && a2 && a2.length > 0 && this.performSubruleAssignment(o2, r2, a2));
    }
  }
  performSubruleAssignment(e6, t2, n2) {
    let { assignment: r2, crossRef: i2 } = this.getAssignment(t2);
    if (r2) this.assign(r2.operator, r2.feature, e6, n2, i2);
    else if (!r2) {
      let t3 = this.current;
      if (YA(t3)) t3.value += e6.toString();
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
        this.stack.push(r2), this.assign(t2.operator, t2.feature, n2, n2.$cstNode);
      } else n2.$type = e6;
    }
  }
  construct() {
    if (this.isRecording()) return;
    let e6 = this.stack.pop();
    return this.nodeBuilder.construct(e6), `$infixName` in e6 ? this.constructInfix(e6, this.operatorPrecedence.get(e6.$infixName)) : YA(e6) ? this.converter.convert(e6.value, e6.$cstNode) : (pe(this.astReflection, e6), e6);
  }
  constructInfix(e6, t2) {
    let n2 = e6.parts;
    if (!Array.isArray(n2) || n2.length === 0) return;
    let r2 = e6.operators;
    if (!Array.isArray(r2) || n2.length < 2) return n2[0];
    let i2 = 0, a2 = -1;
    for (let e7 = 0; e7 < r2.length; e7++) {
      let n3 = r2[e7], o3 = t2.get(n3) ?? { precedence: 1 / 0, rightAssoc: false };
      o3.precedence > a2 ? (a2 = o3.precedence, i2 = e7) : o3.precedence === a2 && (o3.rightAssoc || (i2 = e7));
    }
    let o2 = r2.slice(0, i2), s2 = r2.slice(i2 + 1), c2 = n2.slice(0, i2 + 1), l2 = n2.slice(i2 + 1), u2 = { $infixName: e6.$infixName, $type: e6.$type, $cstNode: e6.$cstNode, parts: c2, operators: o2 }, d2 = { $infixName: e6.$infixName, $type: e6.$type, $cstNode: e6.$cstNode, parts: l2, operators: s2 }, f2 = this.constructInfix(u2, t2), p2 = this.constructInfix(d2, t2);
    return { $type: e6.$type, $cstNode: e6.$cstNode, left: f2, operator: r2[i2], right: p2 };
  }
  getAssignment(e6) {
    if (!this.assignmentMap.has(e6)) {
      let t2 = se(e6, Pe);
      this.assignmentMap.set(e6, { assignment: t2, crossRef: t2 && We(t2.terminal) ? t2.terminal.isMulti ? `multi` : `single` : void 0 });
    }
    return this.assignmentMap.get(e6);
  }
  assign(e6, t2, n2, r2, i2) {
    let a2 = this.current, o2;
    switch (o2 = i2 === `single` && typeof n2 == `string` ? this.linker.buildReference(a2, t2, r2, n2) : i2 === `multi` && typeof n2 == `string` ? this.linker.buildMultiReference(a2, t2, r2, n2) : n2, e6) {
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
}, ej = class {
  buildMismatchTokenMessage(e6) {
    return YT.buildMismatchTokenMessage(e6);
  }
  buildNotAllInputParsedMessage(e6) {
    return YT.buildNotAllInputParsedMessage(e6);
  }
  buildNoViableAltMessage(e6) {
    return YT.buildNoViableAltMessage(e6);
  }
  buildEarlyExitMessage(e6) {
    return YT.buildEarlyExitMessage(e6);
  }
}, tj = class extends ej {
  buildMismatchTokenMessage({ expected: e6, actual: t2 }) {
    return `Expecting ${e6.LABEL ? "`" + e6.LABEL + "`" : e6.name.endsWith(`:KW`) ? `keyword '${e6.name.substring(0, e6.name.length - 3)}'` : `token of type '${e6.name}'`} but found \`${t2.image}\`.`;
  }
  buildNotAllInputParsedMessage({ firstRedundant: e6 }) {
    return `Expecting end of file but found \`${e6.image}\`.`;
  }
}, nj = class extends QA {
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
    let n2 = this.wrapper.DEFINE_RULE(ZA(e6.name), this.startImplementation(t2).bind(this));
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
}, rj = { recoveryEnabled: true, nodeLocationTracking: `full`, skipValidations: true, errorMessageProvider: new tj() }, ij = class extends eO {
  constructor(e6, t2) {
    let n2 = t2 && `maxLookahead` in t2;
    super(e6, { ...rj, lookaheadStrategy: n2 ? new pD({ maxLookahead: t2.maxLookahead }) : new BO({ logging: t2.skipValidations ? () => {
    } : void 0 }), ...t2 });
  }
  get IS_RECORDING() {
    return this.RECORDING_PHASE;
  }
  DEFINE_RULE(e6, t2, n2) {
    return this.RULE(e6, t2, n2);
  }
  wrapSelfAnalysis() {
    this.performSelfAnalysis();
  }
  wrapConsume(e6, t2) {
    return this.consume(e6, t2, void 0);
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
  rule(e6) {
    return e6.call(this, {});
  }
}, aj = class extends ij {
  constructor(e6, t2, n2) {
    super(e6, t2), this.task = n2;
  }
  rule(e6) {
    this.task.start(), this.task.startSubTask(this.ruleName(e6));
    try {
      return super.rule(e6);
    } finally {
      this.task.stopSubTask(this.ruleName(e6)), this.task.stop();
    }
  }
  ruleName(e6) {
    return e6.ruleName;
  }
  subrule(e6, t2, n2) {
    this.task.startSubTask(this.ruleName(t2));
    try {
      return super.subrule(e6, t2, n2);
    } finally {
      this.task.stopSubTask(this.ruleName(t2));
    }
  }
};
function oj(e6, t2, n2) {
  return sj({ parser: t2, tokens: n2, ruleNames: /* @__PURE__ */ new Map() }, e6), t2;
}
function sj(e6, t2) {
  let n2 = fr(t2, false), r2 = D(t2.rules).filter(Et).filter((e7) => n2.has(e7));
  for (let t3 of r2) {
    let n3 = { ...e6, consume: 1, optional: 1, subrule: 1, many: 1, or: 1 };
    e6.parser.rule(t3, lj(n3, t3.definition));
  }
  let i2 = D(t2.rules).filter(it).filter((e7) => n2.has(e7));
  for (let t3 of i2) e6.parser.rule(t3, cj(e6, t3));
}
function cj(e6, t2) {
  let n2 = t2.call.rule.ref;
  if (!n2) throw Error(`Could not resolve reference to infix operator rule: ` + t2.call.rule.$refText);
  if (Kt(n2)) throw Error(`Cannot use terminal rule in infix expression`);
  let r2 = t2.operators.precedences.flatMap((e7) => e7.operators), i2 = { $type: `Group`, elements: [] }, a2 = { $container: i2, $type: `Assignment`, feature: `parts`, operator: `+=`, terminal: t2.call }, o2 = { $container: i2, $type: `Group`, elements: [], cardinality: `*` };
  i2.elements.push(a2, o2);
  let s2 = { $container: o2, $type: `Assignment`, feature: `operators`, operator: `+=`, terminal: { $type: `Alternatives`, elements: r2 } }, c2 = { ...a2, $container: o2 };
  o2.elements.push(s2, c2);
  let l2 = r2.map((t3) => e6.tokens[t3.value]).map((t3, n3) => ({ ALT: () => e6.parser.consume(n3, t3, s2) })), u2;
  return (t3) => {
    u2 ?? (u2 = xj(e6, n2)), e6.parser.subrule(0, u2, false, a2, t3), e6.parser.many(0, { DEF: () => {
      e6.parser.alternatives(0, l2), e6.parser.subrule(1, u2, false, c2, t3);
    } });
  };
}
function lj(e6, t2, n2 = false) {
  let r2;
  if (ft(t2)) r2 = yj(e6, t2);
  else if (Ee(t2)) r2 = uj(e6, t2);
  else if (Pe(t2)) r2 = lj(e6, t2.terminal);
  else if (We(t2)) r2 = vj(e6, t2);
  else if (Pt(t2)) r2 = dj(e6, t2);
  else if (Oe(t2)) r2 = mj(e6, t2);
  else if (an(t2)) r2 = hj(e6, t2);
  else if (et(t2)) r2 = gj(e6, t2);
  else if (Je(t2)) {
    let n3 = e6.consume++;
    r2 = () => e6.parser.consume(n3, KT, t2);
  } else throw new In(t2.$cstNode, `Unexpected element type: ${t2.$type}`);
  return bj(e6, n2 ? void 0 : _j(t2), r2, t2.cardinality);
}
function uj(e6, t2) {
  let n2 = Fr(t2);
  return () => e6.parser.action(n2, t2);
}
function dj(e6, t2) {
  let n2 = t2.rule.ref;
  if (xe(n2)) {
    let r2 = e6.subrule++, i2 = Et(n2) && n2.fragment, a2 = t2.arguments.length > 0 ? fj(n2, t2.arguments) : () => ({}), o2;
    return (s2) => {
      o2 ?? (o2 = xj(e6, n2)), e6.parser.subrule(r2, o2, i2, t2, a2(s2));
    };
  } else if (Kt(n2)) {
    let r2 = e6.consume++, i2 = Cj(e6, n2.name);
    return () => e6.parser.consume(r2, i2, t2);
  } else if (n2) Ln(n2);
  else throw new In(t2.$cstNode, `Undefined rule: ${t2.rule.$refText}`);
}
function fj(e6, t2) {
  if (t2.some((e7) => e7.calledByName)) {
    let e7 = t2.map((e8) => {
      var _a3, _b3;
      return { parameterName: (_b3 = (_a3 = e8.parameter) == null ? void 0 : _a3.ref) == null ? void 0 : _b3.name, predicate: pj(e8.value) };
    });
    return (t3) => {
      let n2 = {};
      for (let { parameterName: r2, predicate: i2 } of e7) r2 && (n2[r2] = i2(t3));
      return n2;
    };
  } else {
    let n2 = t2.map((e7) => pj(e7.value));
    return (t3) => {
      let r2 = {};
      for (let i2 = 0; i2 < n2.length; i2++) if (i2 < e6.parameters.length) {
        let a2 = e6.parameters[i2].name, o2 = n2[i2];
        r2[a2] = o2(t3);
      }
      return r2;
    };
  }
}
function pj(e6) {
  if (Ke(e6)) {
    let t2 = pj(e6.left), n2 = pj(e6.right);
    return (e7) => t2(e7) || n2(e7);
  } else if (He(e6)) {
    let t2 = pj(e6.left), n2 = pj(e6.right);
    return (e7) => t2(e7) && n2(e7);
  } else if (vt(e6)) {
    let t2 = pj(e6.value);
    return (e7) => !t2(e7);
  } else if (wt(e6)) {
    let t2 = e6.parameter.ref.name;
    return (e7) => e7 !== void 0 && e7[t2] === true;
  } else if (Ie(e6)) {
    let t2 = !!e6.true;
    return () => t2;
  }
  Ln(e6);
}
function mj(e6, t2) {
  if (t2.elements.length === 1) return lj(e6, t2.elements[0]);
  {
    let n2 = [];
    for (let r3 of t2.elements) {
      let t3 = { ALT: lj(e6, r3, true) }, i2 = _j(r3);
      i2 && (t3.GATE = pj(i2)), n2.push(t3);
    }
    let r2 = e6.or++;
    return (t3) => e6.parser.alternatives(r2, n2.map((e7) => {
      let n3 = { ALT: () => e7.ALT(t3) }, r3 = e7.GATE;
      return r3 && (n3.GATE = () => r3(t3)), n3;
    }));
  }
}
function hj(e6, t2) {
  if (t2.elements.length === 1) return lj(e6, t2.elements[0]);
  let n2 = [];
  for (let r3 of t2.elements) {
    let t3 = { ALT: lj(e6, r3, true) }, i3 = _j(r3);
    i3 && (t3.GATE = pj(i3)), n2.push(t3);
  }
  let r2 = e6.or++, i2 = (e7, t3) => `uGroup_${e7}_${t3.getRuleStack().join(`-`)}`, a2 = bj(e6, _j(t2), (t3) => e6.parser.alternatives(r2, n2.map((n3, a3) => {
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
function gj(e6, t2) {
  let n2 = t2.elements.map((t3) => lj(e6, t3));
  return (e7) => n2.forEach((t3) => t3(e7));
}
function _j(e6) {
  if (et(e6)) return e6.guardCondition;
}
function vj(e6, t2, n2 = t2.terminal) {
  var _a3;
  if (n2) if (Pt(n2) && Et(n2.rule.ref)) {
    let r2 = n2.rule.ref, i2 = e6.subrule++, a2;
    return (n3) => {
      a2 ?? (a2 = xj(e6, r2)), e6.parser.subrule(i2, a2, false, t2, n3);
    };
  } else if (Pt(n2) && Kt(n2.rule.ref)) {
    let r2 = e6.consume++, i2 = Cj(e6, n2.rule.ref.name);
    return () => e6.parser.consume(r2, i2, t2);
  } else if (ft(n2)) {
    let r2 = e6.consume++, i2 = Cj(e6, n2.value);
    return () => e6.parser.consume(r2, i2, t2);
  } else throw Error(`Could not build cross reference parser`);
  else {
    if (!t2.type.ref) throw Error(`Could not resolve reference to type: ` + t2.type.$refText);
    let n3 = (_a3 = wr(t2.type.ref)) == null ? void 0 : _a3.terminal;
    if (!n3) throw Error(`Could not find name assignment for type: ` + Fr(t2.type.ref));
    return vj(e6, t2, n3);
  }
}
function yj(e6, t2) {
  let n2 = e6.consume++, r2 = e6.tokens[t2.value];
  if (!r2) throw Error(`Could not find token for keyword: ` + t2.value);
  return () => e6.parser.consume(n2, r2, t2);
}
function bj(e6, t2, n2, r2) {
  let i2 = t2 && pj(t2);
  if (!r2) if (i2) {
    let t3 = e6.or++;
    return (r3) => e6.parser.alternatives(t3, [{ ALT: () => n2(r3), GATE: () => i2(r3) }, { ALT: QD(), GATE: () => !i2(r3) }]);
  } else return n2;
  if (r2 === `*`) {
    let t3 = e6.many++;
    return (r3) => e6.parser.many(t3, { DEF: () => n2(r3), GATE: i2 ? () => i2(r3) : void 0 });
  } else if (r2 === `+`) {
    let t3 = e6.many++;
    if (i2) {
      let r3 = e6.or++;
      return (a2) => e6.parser.alternatives(r3, [{ ALT: () => e6.parser.atLeastOne(t3, { DEF: () => n2(a2) }), GATE: () => i2(a2) }, { ALT: QD(), GATE: () => !i2(a2) }]);
    } else return (r3) => e6.parser.atLeastOne(t3, { DEF: () => n2(r3) });
  } else if (r2 === `?`) {
    let t3 = e6.optional++;
    return (r3) => e6.parser.optional(t3, { DEF: () => n2(r3), GATE: i2 ? () => i2(r3) : void 0 });
  } else Ln(r2);
}
function xj(e6, t2) {
  let n2 = Sj(e6, t2), r2 = e6.parser.getRule(n2);
  if (!r2) throw Error(`Rule "${n2}" not found."`);
  return r2;
}
function Sj(e6, t2) {
  if (xe(t2)) return t2.name;
  if (e6.ruleNames.has(t2)) return e6.ruleNames.get(t2);
  {
    let n2 = t2, r2 = n2.$container, i2 = t2.$type;
    for (; !Et(r2); ) (et(r2) || Oe(r2) || an(r2)) && (i2 = r2.elements.indexOf(n2).toString() + `:` + i2), n2 = r2, r2 = r2.$container;
    return i2 = r2.name + `:` + i2, e6.ruleNames.set(t2, i2), i2;
  }
}
function Cj(e6, t2) {
  let n2 = e6.tokens[t2];
  if (!n2) throw Error(`Token "${t2}" not found."`);
  return n2;
}
function wj(e6) {
  let t2 = e6.Grammar, n2 = e6.parser.Lexer, r2 = new nj(e6);
  return oj(t2, r2, n2.definition), r2.finalize(), r2;
}
function Tj(e6) {
  let t2 = Ej(e6);
  return t2.finalize(), t2;
}
function Ej(e6) {
  let t2 = e6.Grammar, n2 = e6.parser.Lexer;
  return oj(t2, new $A(e6), n2.definition);
}
var Dj = class {
  constructor() {
    this.diagnostics = [];
  }
  buildTokens(e6, t2) {
    let n2 = D(fr(e6, false)), r2 = this.buildTerminalTokens(n2), i2 = this.buildKeywordTokens(n2, r2, t2);
    return i2.push(...r2), i2;
  }
  flushLexingReport(e6) {
    return { diagnostics: this.popDiagnostics() };
  }
  popDiagnostics() {
    let e6 = [...this.diagnostics];
    return this.diagnostics = [], e6;
  }
  buildTerminalTokens(e6) {
    return e6.filter(Kt).filter((e7) => !e7.fragment).map((e7) => this.buildTerminalToken(e7)).toArray();
  }
  buildTerminalToken(e6) {
    let t2 = zr(e6), n2 = this.requiresCustomPattern(t2) ? this.regexPatternFunction(t2) : t2, r2 = { name: e6.name, PATTERN: n2 };
    return typeof n2 == `function` && (r2.LINE_BREAKS = true), e6.hidden && (r2.GROUP = ar(t2) ? MT.SKIPPED : `hidden`), r2;
  }
  requiresCustomPattern(e6) {
    return !!(e6.flags.includes(`u`) || e6.flags.includes(`s`));
  }
  regexPatternFunction(e6) {
    let t2 = new RegExp(e6, e6.flags + `y`);
    return (e7, n2) => (t2.lastIndex = n2, t2.exec(e7));
  }
  buildKeywordTokens(e6, t2, n2) {
    return e6.filter(xe).flatMap((e7) => A(e7).filter(ft)).distinct((e7) => e7.value).toArray().sort((e7, t3) => t3.value.length - e7.value.length).map((e7) => this.buildKeywordToken(e7, t2, !!(n2 == null ? void 0 : n2.caseInsensitive)));
  }
  buildKeywordToken(e6, t2, n2) {
    let r2 = this.buildKeywordPattern(e6, n2), i2 = { name: e6.value, PATTERN: r2, LONGER_ALT: this.findLongerAlt(e6, t2) };
    return typeof r2 == `function` && (i2.LINE_BREAKS = true), i2;
  }
  buildKeywordPattern(e6, t2) {
    return t2 ? new RegExp(or(e6.value), `i`) : e6.value;
  }
  findLongerAlt(e6, t2) {
    return t2.reduce((t3, n2) => {
      let r2 = n2 == null ? void 0 : n2.PATTERN;
      return (r2 == null ? void 0 : r2.source) && sr(`^` + r2.source + `$`, e6.value) && t3.push(n2), t3;
    }, []);
  }
}, Oj = class {
  convert(e6, t2) {
    let n2 = t2.grammarSource;
    if (We(n2) && (n2 = hr(n2)), Pt(n2)) {
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
        return kj.convertInt(t2);
      case `STRING`:
        return kj.convertString(t2);
      case `ID`:
        return kj.convertID(t2);
    }
    switch ((_a3 = Rr(e6)) == null ? void 0 : _a3.toLowerCase()) {
      case `number`:
        return kj.convertNumber(t2);
      case `boolean`:
        return kj.convertBoolean(t2);
      case `bigint`:
        return kj.convertBigint(t2);
      case `date`:
        return kj.convertDate(t2);
      default:
        return t2;
    }
  }
}, kj;
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
})(kj || (kj = {}));
var Aj = a(((e6) => {
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
})), jj = a(((e6) => {
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
})), Mj = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.Emitter = e6.Event = void 0;
  var t2 = Aj(), n2;
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
})), Nj = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.CancellationTokenSource = e6.CancellationToken = void 0;
  var t2 = Aj(), n2 = jj(), r2 = Mj(), i2;
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
t(X, r(Nj(), 1));
function Pj() {
  return new Promise((e6) => {
    typeof setImmediate > `u` ? setTimeout(e6, 0) : setImmediate(e6);
  });
}
var Fj = 0, Ij = 10;
function Lj() {
  return Fj = performance.now(), new X.CancellationTokenSource();
}
function Rj(e6) {
  Ij = e6;
}
const zj = Symbol(`OperationCancelled`);
function Bj(e6) {
  return e6 === zj;
}
async function Vj(e6) {
  if (e6 === X.CancellationToken.None) return;
  let t2 = performance.now();
  if (t2 - Fj >= Ij && (Fj = t2, await Pj(), Fj = performance.now()), e6.isCancellationRequested) throw zj;
}
var Hj = class {
  constructor() {
    this.promise = new Promise((e6, t2) => {
      this.resolve = (t3) => (e6(t3), this), this.reject = (e7) => (t2(e7), this);
    });
  }
}, Uj = class e5 {
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
      let e6 = Jj(n3.range), t3 = this.offsetAt(e6.start), r2 = this.offsetAt(e6.end);
      this._content = this._content.substring(0, t3) + n3.text + this._content.substring(r2, this._content.length);
      let i2 = Math.max(e6.start.line, 0), a2 = Math.max(e6.end.line, 0), o2 = this._lineOffsets, s2 = Kj(n3.text, false, t3);
      if (a2 - i2 === s2.length) for (let e7 = 0, t4 = s2.length; e7 < t4; e7++) o2[e7 + i2 + 1] = s2[e7];
      else s2.length < 1e4 ? o2.splice(i2 + 1, a2 - i2, ...s2) : this._lineOffsets = o2 = o2.slice(0, i2 + 1).concat(s2, o2.slice(a2 + 1));
      let c2 = n3.text.length - (r2 - t3);
      if (c2 !== 0) for (let e7 = i2 + 1 + s2.length, t4 = o2.length; e7 < t4; e7++) o2[e7] = o2[e7] + c2;
    } else if (e5.isFull(n3)) this._content = n3.text, this._lineOffsets = void 0;
    else throw Error(`Unknown change event received`);
    this._version = n2;
  }
  getLineOffsets() {
    return this._lineOffsets === void 0 && (this._lineOffsets = Kj(this._content, true)), this._lineOffsets;
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
    for (; e6 > t2 && qj(this._content.charCodeAt(e6 - 1)); ) e6--;
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
}, Wj;
(function(e6) {
  function t2(e7, t3, n3, r3) {
    return new Uj(e7, t3, n3, r3);
  }
  e6.create = t2;
  function n2(e7, t3, n3) {
    if (e7 instanceof Uj) return e7.update(t3, n3), e7;
    throw Error(`TextDocument.update: document must be created by TextDocument.create`);
  }
  e6.update = n2;
  function r2(e7, t3) {
    let n3 = e7.getText(), r3 = Gj(t3.map(Yj), (e8, t4) => {
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
})(Wj || (Wj = {}));
function Gj(e6, t2) {
  if (e6.length <= 1) return e6;
  let n2 = e6.length / 2 | 0, r2 = e6.slice(0, n2), i2 = e6.slice(n2);
  Gj(r2, t2), Gj(i2, t2);
  let a2 = 0, o2 = 0, s2 = 0;
  for (; a2 < r2.length && o2 < i2.length; ) t2(r2[a2], i2[o2]) <= 0 ? e6[s2++] = r2[a2++] : e6[s2++] = i2[o2++];
  for (; a2 < r2.length; ) e6[s2++] = r2[a2++];
  for (; o2 < i2.length; ) e6[s2++] = i2[o2++];
  return e6;
}
function Kj(e6, t2, n2 = 0) {
  let r2 = t2 ? [n2] : [];
  for (let t3 = 0; t3 < e6.length; t3++) {
    let i2 = e6.charCodeAt(t3);
    qj(i2) && (i2 === 13 && t3 + 1 < e6.length && e6.charCodeAt(t3 + 1) === 10 && t3++, r2.push(n2 + t3 + 1));
  }
  return r2;
}
function qj(e6) {
  return e6 === 13 || e6 === 10;
}
function Jj(e6) {
  let t2 = e6.start, n2 = e6.end;
  return t2.line > n2.line || t2.line === n2.line && t2.character > n2.character ? { start: n2, end: t2 } : e6;
}
function Yj(e6) {
  let t2 = Jj(e6.range);
  return t2 === e6.range ? e6 : { newText: e6.newText, range: t2 };
}
var Xj;
(() => {
  var e6 = { 975: (e7) => {
    function t3(e8) {
      if (typeof e8 != `string`) throw TypeError(`Path must be a string. Received ` + JSON.stringify(e8));
    }
    function n3(e8, t4) {
      for (var n4, r4 = ``, i3 = 0, a3 = -1, o3 = 0, s3 = 0; s3 <= e8.length; ++s3) {
        if (s3 < e8.length) n4 = e8.charCodeAt(s3);
        else {
          if (n4 === 47) break;
          n4 = 47;
        }
        if (n4 === 47) {
          if (!(a3 === s3 - 1 || o3 === 1)) if (a3 !== s3 - 1 && o3 === 2) {
            if (r4.length < 2 || i3 !== 2 || r4.charCodeAt(r4.length - 1) !== 46 || r4.charCodeAt(r4.length - 2) !== 46) {
              if (r4.length > 2) {
                var c3 = r4.lastIndexOf(`/`);
                if (c3 !== r4.length - 1) {
                  c3 === -1 ? (r4 = ``, i3 = 0) : i3 = (r4 = r4.slice(0, c3)).length - 1 - r4.lastIndexOf(`/`), a3 = s3, o3 = 0;
                  continue;
                }
              } else if (r4.length === 2 || r4.length === 1) {
                r4 = ``, i3 = 0, a3 = s3, o3 = 0;
                continue;
              }
            }
            t4 && (r4.length > 0 ? r4 += `/..` : r4 = `..`, i3 = 2);
          } else r4.length > 0 ? r4 += `/` + e8.slice(a3 + 1, s3) : r4 = e8.slice(a3 + 1, s3), i3 = s3 - a3 - 1;
          a3 = s3, o3 = 0;
        } else n4 === 46 && o3 !== -1 ? ++o3 : o3 = -1;
      }
      return r4;
    }
    var r3 = { resolve: function() {
      for (var e8, r4 = ``, i3 = false, a3 = arguments.length - 1; a3 >= -1 && !i3; a3--) {
        var o3;
        a3 >= 0 ? o3 = arguments[a3] : (e8 === void 0 && (e8 = process.cwd()), o3 = e8), t3(o3), o3.length !== 0 && (r4 = o3 + `/` + r4, i3 = o3.charCodeAt(0) === 47);
      }
      return r4 = n3(r4, !i3), i3 ? r4.length > 0 ? `/` + r4 : `/` : r4.length > 0 ? r4 : `.`;
    }, normalize: function(e8) {
      if (t3(e8), e8.length === 0) return `.`;
      var r4 = e8.charCodeAt(0) === 47, i3 = e8.charCodeAt(e8.length - 1) === 47;
      return (e8 = n3(e8, !r4)).length !== 0 || r4 || (e8 = `.`), e8.length > 0 && i3 && (e8 += `/`), r4 ? `/` + e8 : e8;
    }, isAbsolute: function(e8) {
      return t3(e8), e8.length > 0 && e8.charCodeAt(0) === 47;
    }, join: function() {
      if (arguments.length === 0) return `.`;
      for (var e8, n4 = 0; n4 < arguments.length; ++n4) {
        var i3 = arguments[n4];
        t3(i3), i3.length > 0 && (e8 === void 0 ? e8 = i3 : e8 += `/` + i3);
      }
      return e8 === void 0 ? `.` : r3.normalize(e8);
    }, relative: function(e8, n4) {
      if (t3(e8), t3(n4), e8 === n4 || (e8 = r3.resolve(e8)) === (n4 = r3.resolve(n4))) return ``;
      for (var i3 = 1; i3 < e8.length && e8.charCodeAt(i3) === 47; ++i3) ;
      for (var a3 = e8.length, o3 = a3 - i3, s3 = 1; s3 < n4.length && n4.charCodeAt(s3) === 47; ++s3) ;
      for (var c3 = n4.length - s3, l3 = o3 < c3 ? o3 : c3, u3 = -1, d3 = 0; d3 <= l3; ++d3) {
        if (d3 === l3) {
          if (c3 > l3) {
            if (n4.charCodeAt(s3 + d3) === 47) return n4.slice(s3 + d3 + 1);
            if (d3 === 0) return n4.slice(s3 + d3);
          } else o3 > l3 && (e8.charCodeAt(i3 + d3) === 47 ? u3 = d3 : d3 === 0 && (u3 = 0));
          break;
        }
        var f3 = e8.charCodeAt(i3 + d3);
        if (f3 !== n4.charCodeAt(s3 + d3)) break;
        f3 === 47 && (u3 = d3);
      }
      var p3 = ``;
      for (d3 = i3 + u3 + 1; d3 <= a3; ++d3) d3 !== a3 && e8.charCodeAt(d3) !== 47 || (p3.length === 0 ? p3 += `..` : p3 += `/..`);
      return p3.length > 0 ? p3 + n4.slice(s3 + u3) : (s3 += u3, n4.charCodeAt(s3) === 47 && ++s3, n4.slice(s3));
    }, _makeLong: function(e8) {
      return e8;
    }, dirname: function(e8) {
      if (t3(e8), e8.length === 0) return `.`;
      for (var n4 = e8.charCodeAt(0), r4 = n4 === 47, i3 = -1, a3 = true, o3 = e8.length - 1; o3 >= 1; --o3) if ((n4 = e8.charCodeAt(o3)) === 47) {
        if (!a3) {
          i3 = o3;
          break;
        }
      } else a3 = false;
      return i3 === -1 ? r4 ? `/` : `.` : r4 && i3 === 1 ? `//` : e8.slice(0, i3);
    }, basename: function(e8, n4) {
      if (n4 !== void 0 && typeof n4 != `string`) throw TypeError(`"ext" argument must be a string`);
      t3(e8);
      var r4, i3 = 0, a3 = -1, o3 = true;
      if (n4 !== void 0 && n4.length > 0 && n4.length <= e8.length) {
        if (n4.length === e8.length && n4 === e8) return ``;
        var s3 = n4.length - 1, c3 = -1;
        for (r4 = e8.length - 1; r4 >= 0; --r4) {
          var l3 = e8.charCodeAt(r4);
          if (l3 === 47) {
            if (!o3) {
              i3 = r4 + 1;
              break;
            }
          } else c3 === -1 && (o3 = false, c3 = r4 + 1), s3 >= 0 && (l3 === n4.charCodeAt(s3) ? --s3 == -1 && (a3 = r4) : (s3 = -1, a3 = c3));
        }
        return i3 === a3 ? a3 = c3 : a3 === -1 && (a3 = e8.length), e8.slice(i3, a3);
      }
      for (r4 = e8.length - 1; r4 >= 0; --r4) if (e8.charCodeAt(r4) === 47) {
        if (!o3) {
          i3 = r4 + 1;
          break;
        }
      } else a3 === -1 && (o3 = false, a3 = r4 + 1);
      return a3 === -1 ? `` : e8.slice(i3, a3);
    }, extname: function(e8) {
      t3(e8);
      for (var n4 = -1, r4 = 0, i3 = -1, a3 = true, o3 = 0, s3 = e8.length - 1; s3 >= 0; --s3) {
        var c3 = e8.charCodeAt(s3);
        if (c3 !== 47) i3 === -1 && (a3 = false, i3 = s3 + 1), c3 === 46 ? n4 === -1 ? n4 = s3 : o3 !== 1 && (o3 = 1) : n4 !== -1 && (o3 = -1);
        else if (!a3) {
          r4 = s3 + 1;
          break;
        }
      }
      return n4 === -1 || i3 === -1 || o3 === 0 || o3 === 1 && n4 === i3 - 1 && n4 === r4 + 1 ? `` : e8.slice(n4, i3);
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
      var r4, i3 = e8.charCodeAt(0), a3 = i3 === 47;
      a3 ? (n4.root = `/`, r4 = 1) : r4 = 0;
      for (var o3 = -1, s3 = 0, c3 = -1, l3 = true, u3 = e8.length - 1, d3 = 0; u3 >= r4; --u3) if ((i3 = e8.charCodeAt(u3)) !== 47) c3 === -1 && (l3 = false, c3 = u3 + 1), i3 === 46 ? o3 === -1 ? o3 = u3 : d3 !== 1 && (d3 = 1) : o3 !== -1 && (d3 = -1);
      else if (!l3) {
        s3 = u3 + 1;
        break;
      }
      return o3 === -1 || c3 === -1 || d3 === 0 || d3 === 1 && o3 === c3 - 1 && o3 === s3 + 1 ? c3 !== -1 && (n4.base = n4.name = s3 === 0 && a3 ? e8.slice(1, c3) : e8.slice(s3, c3)) : (s3 === 0 && a3 ? (n4.name = e8.slice(1, o3), n4.base = e8.slice(1, c3)) : (n4.name = e8.slice(s3, o3), n4.base = e8.slice(s3, c3)), n4.ext = e8.slice(o3, c3)), s3 > 0 ? n4.dir = e8.slice(0, s3 - 1) : a3 && (n4.dir = `/`), n4;
    }, sep: `/`, delimiter: `:`, win32: null, posix: null };
    r3.posix = r3, e7.exports = r3;
  } }, t2 = {};
  function n2(r3) {
    var i3 = t2[r3];
    if (i3 !== void 0) return i3.exports;
    var a3 = t2[r3] = { exports: {} };
    return e6[r3](a3, a3.exports, n2), a3.exports;
  }
  n2.d = (e7, t3) => {
    for (var r3 in t3) n2.o(t3, r3) && !n2.o(e7, r3) && Object.defineProperty(e7, r3, { enumerable: true, get: t3[r3] });
  }, n2.o = (e7, t3) => Object.prototype.hasOwnProperty.call(e7, t3), n2.r = (e7) => {
    typeof Symbol < `u` && Symbol.toStringTag && Object.defineProperty(e7, Symbol.toStringTag, { value: `Module` }), Object.defineProperty(e7, `__esModule`, { value: true });
  };
  var r2 = {};
  let i2;
  n2.r(r2), n2.d(r2, { URI: () => u2, Utils: () => C2 }), typeof process == `object` ? i2 = process.platform === `win32` : typeof navigator == `object` && (i2 = navigator.userAgent.indexOf(`Windows`) >= 0);
  let a2 = /^\w[\w\d+.-]*$/, o2 = /^\//, s2 = /^\/\//;
  function c2(e7, t3) {
    if (!e7.scheme && t3) throw Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e7.authority}", path: "${e7.path}", query: "${e7.query}", fragment: "${e7.fragment}"}`);
    if (e7.scheme && !a2.test(e7.scheme)) throw Error(`[UriError]: Scheme contains illegal characters.`);
    if (e7.path) {
      if (e7.authority) {
        if (!o2.test(e7.path)) throw Error(`[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character`);
      } else if (s2.test(e7.path)) throw Error(`[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")`);
    }
  }
  let l2 = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
  class u2 {
    constructor(e7, t3, n3, r3, i3, a3 = false) {
      __publicField(this, "scheme");
      __publicField(this, "authority");
      __publicField(this, "path");
      __publicField(this, "query");
      __publicField(this, "fragment");
      typeof e7 == `object` ? (this.scheme = e7.scheme || ``, this.authority = e7.authority || ``, this.path = e7.path || ``, this.query = e7.query || ``, this.fragment = e7.fragment || ``) : (this.scheme = /* @__PURE__ */ (function(e8, t4) {
        return e8 || t4 ? e8 : `file`;
      })(e7, a3), this.authority = t3 || ``, this.path = (function(e8, t4) {
        switch (e8) {
          case `https`:
          case `http`:
          case `file`:
            t4 ? t4[0] !== `/` && (t4 = `/` + t4) : t4 = `/`;
        }
        return t4;
      })(this.scheme, n3 || ``), this.query = r3 || ``, this.fragment = i3 || ``, c2(this, a3));
    }
    static isUri(e7) {
      return e7 instanceof u2 || !!e7 && typeof e7.authority == `string` && typeof e7.fragment == `string` && typeof e7.path == `string` && typeof e7.query == `string` && typeof e7.scheme == `string` && typeof e7.fsPath == `string` && typeof e7.with == `function` && typeof e7.toString == `function`;
    }
    get fsPath() {
      return g2(this, false);
    }
    with(e7) {
      if (!e7) return this;
      let { scheme: t3, authority: n3, path: r3, query: i3, fragment: a3 } = e7;
      return t3 === void 0 ? t3 = this.scheme : t3 === null && (t3 = ``), n3 === void 0 ? n3 = this.authority : n3 === null && (n3 = ``), r3 === void 0 ? r3 = this.path : r3 === null && (r3 = ``), i3 === void 0 ? i3 = this.query : i3 === null && (i3 = ``), a3 === void 0 ? a3 = this.fragment : a3 === null && (a3 = ``), t3 === this.scheme && n3 === this.authority && r3 === this.path && i3 === this.query && a3 === this.fragment ? this : new f2(t3, n3, r3, i3, a3);
    }
    static parse(e7, t3 = false) {
      let n3 = l2.exec(e7);
      return n3 ? new f2(n3[2] || ``, b2(n3[4] || ``), b2(n3[5] || ``), b2(n3[7] || ``), b2(n3[9] || ``), t3) : new f2(``, ``, ``, ``, ``);
    }
    static file(e7) {
      let t3 = ``;
      if (i2 && (e7 = e7.replace(/\\/g, `/`)), e7[0] === `/` && e7[1] === `/`) {
        let n3 = e7.indexOf(`/`, 2);
        n3 === -1 ? (t3 = e7.substring(2), e7 = `/`) : (t3 = e7.substring(2, n3), e7 = e7.substring(n3) || `/`);
      }
      return new f2(`file`, t3, e7, ``, ``);
    }
    static from(e7) {
      let t3 = new f2(e7.scheme, e7.authority, e7.path, e7.query, e7.fragment);
      return c2(t3, true), t3;
    }
    toString(e7 = false) {
      return _2(this, e7);
    }
    toJSON() {
      return this;
    }
    static revive(e7) {
      if (e7) {
        if (e7 instanceof u2) return e7;
        {
          let t3 = new f2(e7);
          return t3._formatted = e7.external, t3._fsPath = e7._sep === d2 ? e7.fsPath : null, t3;
        }
      }
      return e7;
    }
  }
  let d2 = i2 ? 1 : void 0;
  class f2 extends u2 {
    constructor() {
      super(...arguments);
      __publicField(this, "_formatted", null);
      __publicField(this, "_fsPath", null);
    }
    get fsPath() {
      return this._fsPath || (this._fsPath = g2(this, false)), this._fsPath;
    }
    toString(e7 = false) {
      return e7 ? _2(this, true) : (this._formatted || (this._formatted = _2(this, false)), this._formatted);
    }
    toJSON() {
      let e7 = { $mid: 1 };
      return this._fsPath && (e7.fsPath = this._fsPath, e7._sep = d2), this._formatted && (e7.external = this._formatted), this.path && (e7.path = this.path), this.scheme && (e7.scheme = this.scheme), this.authority && (e7.authority = this.authority), this.query && (e7.query = this.query), this.fragment && (e7.fragment = this.fragment), e7;
    }
  }
  let p2 = { 58: `%3A`, 47: `%2F`, 63: `%3F`, 35: `%23`, 91: `%5B`, 93: `%5D`, 64: `%40`, 33: `%21`, 36: `%24`, 38: `%26`, 39: `%27`, 40: `%28`, 41: `%29`, 42: `%2A`, 43: `%2B`, 44: `%2C`, 59: `%3B`, 61: `%3D`, 32: `%20` };
  function m2(e7, t3, n3) {
    let r3, i3 = -1;
    for (let a3 = 0; a3 < e7.length; a3++) {
      let o3 = e7.charCodeAt(a3);
      if (o3 >= 97 && o3 <= 122 || o3 >= 65 && o3 <= 90 || o3 >= 48 && o3 <= 57 || o3 === 45 || o3 === 46 || o3 === 95 || o3 === 126 || t3 && o3 === 47 || n3 && o3 === 91 || n3 && o3 === 93 || n3 && o3 === 58) i3 !== -1 && (r3 += encodeURIComponent(e7.substring(i3, a3)), i3 = -1), r3 !== void 0 && (r3 += e7.charAt(a3));
      else {
        r3 === void 0 && (r3 = e7.substr(0, a3));
        let t4 = p2[o3];
        t4 === void 0 ? i3 === -1 && (i3 = a3) : (i3 !== -1 && (r3 += encodeURIComponent(e7.substring(i3, a3)), i3 = -1), r3 += t4);
      }
    }
    return i3 !== -1 && (r3 += encodeURIComponent(e7.substring(i3))), r3 === void 0 ? e7 : r3;
  }
  function h2(e7) {
    let t3;
    for (let n3 = 0; n3 < e7.length; n3++) {
      let r3 = e7.charCodeAt(n3);
      r3 === 35 || r3 === 63 ? (t3 === void 0 && (t3 = e7.substr(0, n3)), t3 += p2[r3]) : t3 !== void 0 && (t3 += e7[n3]);
    }
    return t3 === void 0 ? e7 : t3;
  }
  function g2(e7, t3) {
    let n3;
    return n3 = e7.authority && e7.path.length > 1 && e7.scheme === `file` ? `//${e7.authority}${e7.path}` : e7.path.charCodeAt(0) === 47 && (e7.path.charCodeAt(1) >= 65 && e7.path.charCodeAt(1) <= 90 || e7.path.charCodeAt(1) >= 97 && e7.path.charCodeAt(1) <= 122) && e7.path.charCodeAt(2) === 58 ? t3 ? e7.path.substr(1) : e7.path[1].toLowerCase() + e7.path.substr(2) : e7.path, i2 && (n3 = n3.replace(/\//g, `\\`)), n3;
  }
  function _2(e7, t3) {
    let n3 = t3 ? h2 : m2, r3 = ``, { scheme: i3, authority: a3, path: o3, query: s3, fragment: c3 } = e7;
    if (i3 && (r3 += i3, r3 += `:`), (a3 || i3 === `file`) && (r3 += `/`, r3 += `/`), a3) {
      let e8 = a3.indexOf(`@`);
      if (e8 !== -1) {
        let t4 = a3.substr(0, e8);
        a3 = a3.substr(e8 + 1), e8 = t4.lastIndexOf(`:`), e8 === -1 ? r3 += n3(t4, false, false) : (r3 += n3(t4.substr(0, e8), false, false), r3 += `:`, r3 += n3(t4.substr(e8 + 1), false, true)), r3 += `@`;
      }
      a3 = a3.toLowerCase(), e8 = a3.lastIndexOf(`:`), e8 === -1 ? r3 += n3(a3, false, true) : (r3 += n3(a3.substr(0, e8), false, true), r3 += a3.substr(e8));
    }
    if (o3) {
      if (o3.length >= 3 && o3.charCodeAt(0) === 47 && o3.charCodeAt(2) === 58) {
        let e8 = o3.charCodeAt(1);
        e8 >= 65 && e8 <= 90 && (o3 = `/${String.fromCharCode(e8 + 32)}:${o3.substr(3)}`);
      } else if (o3.length >= 2 && o3.charCodeAt(1) === 58) {
        let e8 = o3.charCodeAt(0);
        e8 >= 65 && e8 <= 90 && (o3 = `${String.fromCharCode(e8 + 32)}:${o3.substr(2)}`);
      }
      r3 += n3(o3, true, false);
    }
    return s3 && (r3 += `?`, r3 += n3(s3, false, false)), c3 && (r3 += `#`, r3 += t3 ? c3 : m2(c3, false, false)), r3;
  }
  function v2(e7) {
    try {
      return decodeURIComponent(e7);
    } catch {
      return e7.length > 3 ? e7.substr(0, 3) + v2(e7.substr(3)) : e7;
    }
  }
  let y2 = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
  function b2(e7) {
    return e7.match(y2) ? e7.replace(y2, ((e8) => v2(e8))) : e7;
  }
  var x2 = n2(975);
  let S2 = x2.posix || x2;
  var C2;
  (function(e7) {
    e7.joinPath = function(e8, ...t3) {
      return e8.with({ path: S2.join(e8.path, ...t3) });
    }, e7.resolvePath = function(e8, ...t3) {
      let n3 = e8.path, r3 = false;
      n3[0] !== `/` && (n3 = `/` + n3, r3 = true);
      let i3 = S2.resolve(n3, ...t3);
      return r3 && i3[0] === `/` && !e8.authority && (i3 = i3.substring(1)), e8.with({ path: i3 });
    }, e7.dirname = function(e8) {
      if (e8.path.length === 0 || e8.path === `/`) return e8;
      let t3 = S2.dirname(e8.path);
      return t3.length === 1 && t3.charCodeAt(0) === 46 && (t3 = ``), e8.with({ path: t3 });
    }, e7.basename = function(e8) {
      return S2.basename(e8.path);
    }, e7.extname = function(e8) {
      return S2.extname(e8.path);
    };
  })(C2 || (C2 = {})), Xj = r2;
})();
const { URI: Zj, Utils: Qj } = Xj;
var $j;
(function(e6) {
  e6.basename = Qj.basename, e6.dirname = Qj.dirname, e6.extname = Qj.extname, e6.joinPath = Qj.joinPath, e6.resolvePath = Qj.resolvePath;
  let t2 = typeof process == `object` && (process == null ? void 0 : process.platform) === `win32`;
  function n2(e7, t3) {
    return (e7 == null ? void 0 : e7.toString()) === (t3 == null ? void 0 : t3.toString());
  }
  e6.equals = n2;
  function r2(e7, n3) {
    let r3 = typeof e7 == `string` ? Zj.parse(e7).path : e7.path, i3 = typeof n3 == `string` ? Zj.parse(n3).path : n3.path, a3 = r3.split(`/`).filter((e8) => e8.length > 0), o2 = i3.split(`/`).filter((e8) => e8.length > 0);
    if (t2) {
      let e8 = /^[A-Z]:$/;
      if (a3[0] && e8.test(a3[0]) && (a3[0] = a3[0].toLowerCase()), o2[0] && e8.test(o2[0]) && (o2[0] = o2[0].toLowerCase()), a3[0] !== o2[0]) return i3.substring(1);
    }
    let s2 = 0;
    for (; s2 < a3.length && a3[s2] === o2[s2]; s2++) ;
    return `../`.repeat(a3.length - s2) + o2.slice(s2).join(`/`);
  }
  e6.relative = r2;
  function i2(e7) {
    return Zj.parse(e7.toString()).toString();
  }
  e6.normalize = i2;
  function a2(e7, t3) {
    let n3 = typeof e7 == `string` ? e7 : e7.path, r3 = typeof t3 == `string` ? t3 : t3.path;
    return r3.charAt(r3.length - 1) === `/` && (r3 = r3.slice(0, -1)), n3.charAt(n3.length - 1) === `/` && (n3 = n3.slice(0, -1)), r3 === n3 ? true : r3.length < n3.length || r3.charAt(n3.length) !== `/` ? false : r3.startsWith(n3);
  }
  e6.contains = a2;
})($j || ($j = {}));
var eM = class {
  constructor() {
    this.root = { name: ``, children: /* @__PURE__ */ new Map() };
  }
  normalizeUri(e6) {
    return $j.normalize(e6);
  }
  clear() {
    this.root.children.clear();
  }
  insert(e6, t2) {
    let n2 = this.getNode(this.normalizeUri(e6), true);
    n2.element = t2;
  }
  delete(e6) {
    let t2 = this.getNode(this.normalizeUri(e6), false);
    (t2 == null ? void 0 : t2.parent) && t2.parent.children.delete(t2.name);
  }
  has(e6) {
    var _a3;
    return ((_a3 = this.getNode(this.normalizeUri(e6), false)) == null ? void 0 : _a3.element) !== void 0;
  }
  hasNode(e6) {
    return this.getNode(this.normalizeUri(e6), false) !== void 0;
  }
  find(e6) {
    var _a3;
    return (_a3 = this.getNode(this.normalizeUri(e6), false)) == null ? void 0 : _a3.element;
  }
  findNode(e6) {
    let t2 = this.normalizeUri(e6), n2 = this.getNode(t2, false);
    if (n2) return { name: n2.name, uri: $j.joinPath(Zj.parse(t2), n2.name).toString(), element: n2.element };
  }
  findChildren(e6) {
    let t2 = this.normalizeUri(e6), n2 = this.getNode(t2, false);
    return n2 ? Array.from(n2.children.values()).map((e7) => ({ name: e7.name, uri: $j.joinPath(Zj.parse(t2), e7.name).toString(), element: e7.element })) : [];
  }
  all() {
    return this.collectValues(this.root);
  }
  findAll(e6) {
    let t2 = this.getNode($j.normalize(e6), false);
    return t2 ? this.collectValues(t2) : [];
  }
  getNode(e6, t2) {
    let n2 = e6.split(`/`);
    e6.charAt(e6.length - 1) === `/` && n2.pop();
    let r2 = this.root;
    for (let e7 of n2) {
      let n3 = r2.children.get(e7);
      if (!n3) if (t2) n3 = { name: e7, children: /* @__PURE__ */ new Map(), parent: r2 }, r2.children.set(e7, n3);
      else return;
      r2 = n3;
    }
    return r2;
  }
  collectValues(e6) {
    let t2 = [];
    e6.element && t2.push(e6.element);
    for (let n2 of e6.children.values()) t2.push(...this.collectValues(n2));
    return t2;
  }
}, Z;
(function(e6) {
  e6[e6.Changed = 0] = `Changed`, e6[e6.Parsed = 1] = `Parsed`, e6[e6.IndexedContent = 2] = `IndexedContent`, e6[e6.ComputedScopes = 3] = `ComputedScopes`, e6[e6.Linked = 4] = `Linked`, e6[e6.IndexedReferences = 5] = `IndexedReferences`, e6[e6.Validated = 6] = `Validated`;
})(Z || (Z = {}));
var tM = class {
  constructor(e6) {
    this.serviceRegistry = e6.ServiceRegistry, this.textDocuments = e6.workspace.TextDocuments, this.fileSystemProvider = e6.workspace.FileSystemProvider;
  }
  async fromUri(e6, t2 = X.CancellationToken.None) {
    let n2 = await this.fileSystemProvider.readFile(e6);
    return this.createAsync(e6, n2, t2);
  }
  fromTextDocument(e6, t2, n2) {
    return t2 ?? (t2 = Zj.parse(e6.uri)), X.CancellationToken.is(n2) ? this.createAsync(t2, e6, n2) : this.create(t2, e6, n2);
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
    if (n2) i2 = { parseResult: e6, uri: t2, state: Z.Parsed, references: [], textDocument: n2 };
    else {
      let n3 = this.createTextDocumentGetter(t2, r2);
      i2 = { parseResult: e6, uri: t2, state: Z.Parsed, references: [], get textDocument() {
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
    return n2 !== i2 && (e6.parseResult = await this.parseAsync(e6.uri, i2, t2), e6.parseResult.value.$document = e6), e6.state = Z.Parsed, e6;
  }
  parse(e6, t2, n2) {
    return this.serviceRegistry.getServices(e6).parser.LangiumParser.parse(t2, n2);
  }
  parseAsync(e6, t2, n2) {
    return this.serviceRegistry.getServices(e6).parser.AsyncParser.parse(t2, n2);
  }
  createTextDocumentGetter(e6, t2) {
    let n2 = this.serviceRegistry, r2;
    return () => r2 ?? (r2 = Wj.create(e6.toString(), n2.getServices(e6).LanguageMetaData.languageId, 0, t2 ?? ``));
  }
}, nM = class {
  constructor(e6) {
    this.documentTrie = new eM(), this.services = e6, this.langiumDocumentFactory = e6.workspace.LangiumDocumentFactory, this.documentBuilder = () => e6.workspace.DocumentBuilder;
  }
  get all() {
    return D(this.documentTrie.all());
  }
  addDocument(e6) {
    let t2 = e6.uri.toString();
    if (this.documentTrie.has(t2)) throw Error(`A document with the URI '${t2}' is already present.`);
    this.documentTrie.insert(t2, e6);
  }
  getDocument(e6) {
    let t2 = e6.toString();
    return this.documentTrie.find(t2);
  }
  getDocuments(e6) {
    let t2 = e6.toString();
    return this.documentTrie.findAll(t2);
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
    return this.documentTrie.has(e6.toString());
  }
  invalidateDocument(e6) {
    let t2 = e6.toString(), n2 = this.documentTrie.find(t2);
    return n2 && this.documentBuilder().resetToState(n2, Z.Changed), n2;
  }
  deleteDocument(e6) {
    let t2 = e6.toString(), n2 = this.documentTrie.find(t2);
    return n2 && (n2.state = Z.Changed, this.documentTrie.delete(t2)), n2;
  }
  deleteDocuments(e6) {
    let t2 = e6.toString(), n2 = this.documentTrie.findAll(t2);
    for (let e7 of n2) e7.state = Z.Changed;
    return this.documentTrie.delete(t2), n2;
  }
};
const rM = Symbol(`RefResolving`);
var iM = class {
  constructor(e6) {
    this.reflection = e6.shared.AstReflection, this.langiumDocuments = () => e6.shared.workspace.LangiumDocuments, this.scopeProvider = e6.references.ScopeProvider, this.astNodeLocator = e6.workspace.AstNodeLocator, this.profiler = e6.shared.profilers.LangiumProfiler, this.languageId = e6.LanguageMetaData.languageId;
  }
  async link(e6, t2 = X.CancellationToken.None) {
    var _a3;
    if ((_a3 = this.profiler) == null ? void 0 : _a3.isActive(`linking`)) {
      let n2 = this.profiler.createTask(`linking`, this.languageId);
      n2.start();
      try {
        for (let r2 of j(e6.parseResult.value)) await Vj(t2), fe(r2).forEach((t3) => {
          let i2 = `${r2.$type}:${t3.property}`;
          n2.startSubTask(i2);
          try {
            this.doLink(t3, e6);
          } finally {
            n2.stopSubTask(i2);
          }
        });
      } finally {
        n2.stop();
      }
    } else for (let n2 of j(e6.parseResult.value)) await Vj(t2), fe(n2).forEach((t3) => this.doLink(t3, e6));
  }
  doLink(e6, t2) {
    let n2 = e6.reference;
    if (`_ref` in n2 && n2._ref === void 0) {
      n2._ref = rM;
      try {
        let t3 = this.getCandidate(e6);
        b(t3) ? n2._ref = t3 : (n2._nodeDescription = t3, n2._ref = this.loadAstNode(t3) ?? this.createLinkingError(e6, t3));
      } catch (t3) {
        console.error(`An error occurred while resolving reference to '${n2.$refText}':`, t3);
        let r2 = t3.message ?? String(t3);
        n2._ref = { info: e6, message: `An error occurred while resolving reference to '${n2.$refText}': ${r2}` };
      }
      t2.references.push(n2);
    } else if (`_items` in n2 && n2._items === void 0) {
      n2._items = rM;
      try {
        let t3 = this.getCandidates(e6), r2 = [];
        if (b(t3)) n2._linkingError = t3;
        else for (let e7 of t3) {
          let t4 = this.loadAstNode(e7);
          t4 && r2.push({ ref: t4, $nodeDescription: e7 });
        }
        n2._items = r2;
      } catch (t3) {
        n2._linkingError = { info: e6, message: `An error occurred while resolving reference to '${n2.$refText}': ${t3}` }, n2._items = [];
      }
      t2.references.push(n2);
    }
  }
  unlink(e6) {
    for (let t2 of e6.references) `_ref` in t2 ? (t2._ref = void 0, delete t2._nodeDescription) : `_items` in t2 && (t2._items = void 0, delete t2._linkingError);
    e6.references = [];
  }
  getCandidate(e6) {
    return this.scopeProvider.getScope(e6).getElement(e6.reference.$refText) ?? this.createLinkingError(e6);
  }
  getCandidates(e6) {
    let t2 = this.scopeProvider.getScope(e6).getElements(e6.reference.$refText).distinct((e7) => `${e7.documentUri}#${e7.path}`).toArray();
    return t2.length > 0 ? t2 : this.createLinkingError(e6);
  }
  buildReference(e6, t2, n2, r2) {
    let i2 = this, a2 = { $refNode: n2, $refText: r2, _ref: void 0, get ref() {
      if (g(this._ref)) return this._ref;
      if (y(this._nodeDescription)) this._ref = i2.loadAstNode(this._nodeDescription) ?? i2.createLinkingError({ reference: a2, container: e6, property: t2 }, this._nodeDescription);
      else if (this._ref === void 0) {
        this._ref = rM;
        let n3 = le(e6).$document, r3 = i2.getLinkedNode({ reference: a2, container: e6, property: t2 });
        if (r3.error && n3 && n3.state < Z.ComputedScopes) {
          this._ref = void 0;
          return;
        }
        this._ref = r3.node ?? r3.error, this._nodeDescription = r3.descr, n3 == null ? void 0 : n3.references.push(this);
      } else this._ref === rM && i2.throwCyclicReferenceError(e6, t2, r2);
      return g(this._ref) ? this._ref : void 0;
    }, get $nodeDescription() {
      return this._nodeDescription;
    }, get error() {
      return b(this._ref) ? this._ref : void 0;
    } };
    return a2;
  }
  buildMultiReference(e6, t2, n2, r2) {
    let i2 = this, a2 = { $refNode: n2, $refText: r2, _items: void 0, get items() {
      if (Array.isArray(this._items)) return this._items;
      if (this._items === void 0) {
        this._items = rM;
        let n3 = le(e6).$document, r3 = i2.getCandidates({ reference: a2, container: e6, property: t2 }), o2 = [];
        if (b(r3)) this._linkingError = r3;
        else for (let e7 of r3) {
          let t3 = i2.loadAstNode(e7);
          t3 && o2.push({ ref: t3, $nodeDescription: e7 });
        }
        this._items = o2, n3 == null ? void 0 : n3.references.push(this);
      } else this._items === rM && i2.throwCyclicReferenceError(e6, t2, r2);
      return Array.isArray(this._items) ? this._items : [];
    }, get error() {
      if (this._linkingError) return this._linkingError;
      if (!(this.items.length > 0)) return this._linkingError = i2.createLinkingError({ reference: a2, container: e6, property: t2 });
    } };
    return a2;
  }
  throwCyclicReferenceError(e6, t2, n2) {
    throw Error(`Cyclic reference resolution detected: ${this.astNodeLocator.getAstNodePath(e6)}/${t2} (symbol '${n2}')`);
  }
  getLinkedNode(e6) {
    try {
      let t2 = this.getCandidate(e6);
      if (b(t2)) return { error: t2 };
      let n2 = this.loadAstNode(t2);
      return n2 ? { node: n2, descr: t2 } : { descr: t2, error: this.createLinkingError(e6, t2) };
    } catch (t2) {
      console.error(`An error occurred while resolving reference to '${e6.reference.$refText}':`, t2);
      let n2 = t2.message ?? String(t2);
      return { error: { info: e6, message: `An error occurred while resolving reference to '${e6.reference.$refText}': ${n2}` } };
    }
  }
  loadAstNode(e6) {
    if (e6.node) return e6.node;
    let t2 = this.langiumDocuments().getDocument(e6.documentUri);
    if (t2) return this.astNodeLocator.getAstNode(t2.parseResult.value, e6.path);
  }
  createLinkingError(e6, t2) {
    let n2 = le(e6.container).$document;
    return n2 && n2.state < Z.ComputedScopes && console.warn(`Attempted reference resolution before document reached ComputedScopes state (${n2.uri}).`), { info: e6, message: `Could not resolve reference to ${this.reflection.getReferenceType(e6)} named '${e6.reference.$refText}'.`, targetDescription: t2 };
  }
};
function aM(e6) {
  return typeof e6.name == `string`;
}
var oM = class {
  getName(e6) {
    if (aM(e6)) return e6.name;
  }
  getNameNode(e6) {
    return vr(e6.$cstNode, `name`);
  }
}, sM = class {
  constructor(e6) {
    this.nameProvider = e6.references.NameProvider, this.index = e6.shared.workspace.IndexManager, this.nodeLocator = e6.workspace.AstNodeLocator, this.documents = e6.shared.workspace.LangiumDocuments, this.hasMultiReference = j(e6.Grammar).some((e7) => We(e7) && e7.isMulti);
  }
  findDeclarations(e6) {
    if (e6) {
      let t2 = Cr(e6), n2 = e6.astNode;
      if (t2 && n2) {
        let r2 = n2[t2.feature];
        if (_(r2) || v(r2)) return k(r2);
        if (Array.isArray(r2)) {
          for (let t3 of r2) if ((_(t3) || v(t3)) && t3.$refNode && t3.$refNode.offset <= e6.offset && t3.$refNode.end >= e6.end) return k(t3);
        }
      }
      if (n2) {
        let t3 = this.nameProvider.getNameNode(n2);
        if (t3 && (t3 === e6 || _n(e6, t3))) return this.getSelfNodes(n2);
      }
    }
    return [];
  }
  getSelfNodes(e6) {
    if (this.hasMultiReference) {
      let t2 = this.index.findAllReferences(e6, this.nodeLocator.getAstNodePath(e6)), n2 = this.getNodeFromReferenceDescription(t2.head());
      if (n2) {
        for (let t3 of fe(n2)) if (v(t3.reference) && t3.reference.items.some((t4) => t4.ref === e6)) return t3.reference.items.map((e7) => e7.ref);
      }
      return [e6];
    } else return [e6];
  }
  getNodeFromReferenceDescription(e6) {
    if (!e6) return;
    let t2 = this.documents.getDocument(e6.sourceUri);
    if (t2) return this.nodeLocator.getAstNode(t2.parseResult.value, e6.sourcePath);
  }
  findDeclarationNodes(e6) {
    let t2 = this.findDeclarations(e6), n2 = [];
    for (let e7 of t2) {
      let t3 = this.nameProvider.getNameNode(e7) ?? e7.$cstNode;
      t3 && n2.push(t3);
    }
    return n2;
  }
  findReferences(e6, t2) {
    let n2 = [];
    t2.includeDeclaration && n2.push(...this.getSelfReferences(e6));
    let r2 = this.index.findAllReferences(e6, this.nodeLocator.getAstNodePath(e6));
    return t2.documentUri && (r2 = r2.filter((e7) => $j.equals(e7.sourceUri, t2.documentUri))), n2.push(...r2), D(n2);
  }
  getSelfReferences(e6) {
    let t2 = this.getSelfNodes(e6), n2 = [];
    for (let e7 of t2) {
      let t3 = this.nameProvider.getNameNode(e7);
      if (t3) {
        let r2 = O(e7), i2 = this.nodeLocator.getAstNodePath(e7);
        n2.push({ sourceUri: r2.uri, sourcePath: i2, targetUri: r2.uri, targetPath: i2, segment: yn(t3), local: true });
      }
    }
    return n2;
  }
}, cM = class {
  constructor(e6) {
    if (this.map = /* @__PURE__ */ new Map(), e6) for (let [t2, n2] of e6) this.add(t2, n2);
  }
  get size() {
    return ie.sum(D(this.map.values()).map((e6) => e6.length));
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
  getStream(e6) {
    let t2 = this.map.get(e6);
    return t2 ? D(t2) : ne;
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
    return D(this.map.entries()).flatMap(([e6, t2]) => t2.map((t3) => [e6, t3]));
  }
  keys() {
    return D(this.map.keys());
  }
  values() {
    return D(this.map.values()).flat();
  }
  entriesGroupedByKey() {
    return D(this.map.entries());
  }
}, lM = class {
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
}, uM = class {
  constructor(e6) {
    this.nameProvider = e6.references.NameProvider, this.descriptions = e6.workspace.AstNodeDescriptionProvider;
  }
  async collectExportedSymbols(e6, t2 = X.CancellationToken.None) {
    return this.collectExportedSymbolsForNode(e6.parseResult.value, e6, void 0, t2);
  }
  async collectExportedSymbolsForNode(e6, t2, n2 = ue, r2 = X.CancellationToken.None) {
    let i2 = [];
    this.addExportedSymbol(e6, i2, t2);
    for (let a2 of n2(e6)) await Vj(r2), this.addExportedSymbol(a2, i2, t2);
    return i2;
  }
  addExportedSymbol(e6, t2, n2) {
    let r2 = this.nameProvider.getName(e6);
    r2 && t2.push(this.descriptions.createDescription(e6, r2, n2));
  }
  async collectLocalSymbols(e6, t2 = X.CancellationToken.None) {
    let n2 = e6.parseResult.value, r2 = new cM();
    for (let i2 of A(n2)) await Vj(t2), this.addLocalSymbol(i2, e6, r2);
    return r2;
  }
  addLocalSymbol(e6, t2, n2) {
    let r2 = e6.$container;
    if (r2) {
      let i2 = this.nameProvider.getName(e6);
      i2 && n2.add(r2, this.descriptions.createDescription(e6, i2, t2));
    }
  }
}, dM = class {
  constructor(e6, t2, n2) {
    this.elements = e6, this.outerScope = t2, this.caseInsensitive = (n2 == null ? void 0 : n2.caseInsensitive) ?? false, this.concatOuterScope = (n2 == null ? void 0 : n2.concatOuterScope) ?? true;
  }
  getAllElements() {
    return this.outerScope ? this.elements.concat(this.outerScope.getAllElements()) : this.elements;
  }
  getElement(e6) {
    let t2 = this.caseInsensitive ? e6.toLowerCase() : e6, n2 = this.caseInsensitive ? this.elements.find((e7) => e7.name.toLowerCase() === t2) : this.elements.find((t3) => t3.name === e6);
    if (n2) return n2;
    if (this.outerScope) return this.outerScope.getElement(e6);
  }
  getElements(e6) {
    let t2 = this.caseInsensitive ? e6.toLowerCase() : e6, n2 = this.caseInsensitive ? this.elements.filter((e7) => e7.name.toLowerCase() === t2) : this.elements.filter((t3) => t3.name === e6);
    return (this.concatOuterScope || n2.isEmpty()) && this.outerScope ? n2.concat(this.outerScope.getElements(e6)) : n2;
  }
}, fM = class {
  constructor(e6, t2, n2) {
    this.elements = /* @__PURE__ */ new Map(), this.caseInsensitive = (n2 == null ? void 0 : n2.caseInsensitive) ?? false, this.concatOuterScope = (n2 == null ? void 0 : n2.concatOuterScope) ?? true;
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
  getElements(e6) {
    let t2 = this.caseInsensitive ? e6.toLowerCase() : e6, n2 = this.elements.get(t2), r2 = n2 ? [n2] : [];
    return (this.concatOuterScope || r2.length > 0) && this.outerScope ? D(r2).concat(this.outerScope.getElements(e6)) : D(r2);
  }
  getAllElements() {
    let e6 = D(this.elements.values());
    return this.outerScope && (e6 = e6.concat(this.outerScope.getAllElements())), e6;
  }
}, pM = class {
  constructor(e6, t2, n2) {
    this.elements = new cM(), this.caseInsensitive = (n2 == null ? void 0 : n2.caseInsensitive) ?? false, this.concatOuterScope = (n2 == null ? void 0 : n2.concatOuterScope) ?? true;
    for (let t3 of e6) {
      let e7 = this.caseInsensitive ? t3.name.toLowerCase() : t3.name;
      this.elements.add(e7, t3);
    }
    this.outerScope = t2;
  }
  getElement(e6) {
    let t2 = this.caseInsensitive ? e6.toLowerCase() : e6, n2 = this.elements.get(t2)[0];
    if (n2) return n2;
    if (this.outerScope) return this.outerScope.getElement(e6);
  }
  getElements(e6) {
    let t2 = this.caseInsensitive ? e6.toLowerCase() : e6, n2 = this.elements.get(t2);
    return (this.concatOuterScope || n2.length === 0) && this.outerScope ? D(n2).concat(this.outerScope.getElements(e6)) : D(n2);
  }
  getAllElements() {
    let e6 = D(this.elements.values());
    return this.outerScope && (e6 = e6.concat(this.outerScope.getAllElements())), e6;
  }
};
const mM = { getElement() {
}, getElements() {
  return ne;
}, getAllElements() {
  return ne;
} };
var hM = class {
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
}, gM = class extends hM {
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
}, _M = class extends hM {
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
}, vM = class extends _M {
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
}, yM = class extends gM {
  constructor(e6, t2) {
    super(), t2 ? (this.toDispose.push(e6.workspace.DocumentBuilder.onBuildPhase(t2, () => {
      this.clear();
    })), this.toDispose.push(e6.workspace.DocumentBuilder.onUpdate((e7, t3) => {
      t3.length > 0 && this.clear();
    }))) : this.toDispose.push(e6.workspace.DocumentBuilder.onUpdate(() => {
      this.clear();
    }));
  }
}, bM = class {
  constructor(e6) {
    this.reflection = e6.shared.AstReflection, this.nameProvider = e6.references.NameProvider, this.descriptions = e6.workspace.AstNodeDescriptionProvider, this.indexManager = e6.shared.workspace.IndexManager, this.globalScopeCache = new yM(e6.shared);
  }
  getScope(e6) {
    let t2 = [], n2 = this.reflection.getReferenceType(e6), r2 = O(e6.container).localSymbols;
    if (r2) {
      let i3 = e6.container;
      do
        r2.has(i3) && t2.push(r2.getStream(i3).filter((e7) => this.reflection.isSubtype(e7.type, n2))), i3 = i3.$container;
      while (i3);
    }
    let i2 = this.getGlobalScope(n2, e6);
    for (let e7 = t2.length - 1; e7 >= 0; e7--) i2 = this.createScope(t2[e7], i2);
    return i2;
  }
  createScope(e6, t2, n2) {
    return new dM(D(e6), t2, n2);
  }
  createScopeForNodes(e6, t2, n2) {
    return new dM(D(e6).map((e7) => {
      let t3 = this.nameProvider.getName(e7);
      if (t3) return this.descriptions.createDescription(e7, t3);
    }).nonNullable(), t2, n2);
  }
  getGlobalScope(e6, t2) {
    return this.globalScopeCache.get(e6, () => new pM(this.indexManager.allElements(e6)));
  }
};
function xM(e6) {
  return typeof e6.$comment == `string`;
}
function SM(e6) {
  return typeof e6 == `object` && !!e6 && (`$ref` in e6 || `$error` in e6);
}
var CM = class {
  constructor(e6) {
    this.ignoreProperties = /* @__PURE__ */ new Set([`$container`, `$containerProperty`, `$containerIndex`, `$document`, `$cstNode`]), this.langiumDocuments = e6.shared.workspace.LangiumDocuments, this.astNodeLocator = e6.workspace.AstNodeLocator, this.nameProvider = e6.references.NameProvider, this.commentProvider = e6.documentation.CommentProvider;
  }
  serialize(e6, t2) {
    let n2 = t2 ?? {}, r2 = t2 == null ? void 0 : t2.replacer, i2 = (e7, t3) => this.replacer(e7, t3, n2), a2 = r2 ? (e7, t3) => r2(e7, t3, i2) : i2;
    try {
      return this.currentDocument = O(e6), JSON.stringify(e6, a2, t2 == null ? void 0 : t2.space);
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
    if (!this.ignoreProperties.has(e6)) if (_(t2)) {
      let e7 = t2.ref, r3 = n2 ? t2.$refText : void 0;
      if (e7) {
        let t3 = O(e7), n3 = ``;
        this.currentDocument && this.currentDocument !== t3 && (n3 = o2 ? o2(t3.uri, e7) : t3.uri.toString());
        let i3 = this.astNodeLocator.getAstNodePath(e7);
        return { $ref: `${n3}#${i3}`, $refText: r3 };
      } else return { $error: ((_a3 = t2.error) == null ? void 0 : _a3.message) ?? `Could not resolve reference`, $refText: r3 };
    } else if (v(t2)) {
      let e7 = n2 ? t2.$refText : void 0, r3 = [];
      for (let e8 of t2.items) {
        let t3 = e8.ref, n3 = O(e8.ref), i3 = ``;
        this.currentDocument && this.currentDocument !== n3 && (i3 = o2 ? o2(n3.uri, t3) : n3.uri.toString());
        let a3 = this.astNodeLocator.getAstNodePath(t3);
        r3.push(`${i3}#${a3}`);
      }
      return { $refs: r3, $refText: e7 };
    } else if (g(t2)) {
      let n3;
      if (i2 && (n3 = this.addAstNodeRegionWithAssignmentsTo({ ...t2 }), (!e6 || t2.$document) && (n3 == null ? void 0 : n3.$textRegion) && (n3.$textRegion.documentURI = (_b3 = this.currentDocument) == null ? void 0 : _b3.uri.toString())), r2 && !e6 && (n3 ?? (n3 = { ...t2 }), n3.$sourceText = (_c3 = t2.$cstNode) == null ? void 0 : _c3.text), a2) {
        n3 ?? (n3 = { ...t2 });
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
        let i2 = _r(e6.$cstNode, n3).map(t2);
        i2.length !== 0 && (r2[n3] = i2);
      }), e6;
    }
  }
  linkNode(e6, t2, n2, r2, i2, a2) {
    for (let [r3, i3] of Object.entries(e6)) if (Array.isArray(i3)) for (let a3 = 0; a3 < i3.length; a3++) {
      let o3 = i3[a3];
      SM(o3) ? i3[a3] = this.reviveReference(e6, r3, t2, o3, n2) : g(o3) && this.linkNode(o3, t2, n2, e6, r3, a3);
    }
    else SM(i3) ? e6[r3] = this.reviveReference(e6, r3, t2, i3, n2) : g(i3) && this.linkNode(i3, t2, n2, e6, r3);
    let o2 = e6;
    o2.$container = r2, o2.$containerProperty = i2, o2.$containerIndex = a2;
  }
  reviveReference(e6, t2, n2, r2, i2) {
    let a2 = r2.$refText, o2 = r2.$error, s2;
    if (r2.$ref) {
      let e7 = this.getRefNode(n2, r2.$ref, i2.uriConverter);
      if (g(e7)) return a2 || (a2 = this.nameProvider.getName(e7)), { $refText: a2 ?? ``, ref: e7 };
      o2 = e7;
    } else if (r2.$refs) {
      let e7 = [];
      for (let t3 of r2.$refs) {
        let r3 = this.getRefNode(n2, t3, i2.uriConverter);
        g(r3) && e7.push({ ref: r3 });
      }
      if (e7.length === 0) s2 = { $refText: a2 ?? ``, items: e7 }, o2 ?? (o2 = `Could not resolve multi-reference`);
      else return { $refText: a2 ?? ``, items: e7 };
    }
    if (o2) return s2 ?? (s2 = { $refText: a2 ?? ``, ref: void 0 }), s2.error = { info: { container: e6, property: t2, reference: s2 }, message: o2 }, s2;
  }
  getRefNode(e6, t2, n2) {
    try {
      let r2 = t2.indexOf(`#`);
      if (r2 === 0) return this.astNodeLocator.getAstNode(e6, t2.substring(1)) || `Could not resolve path: ` + t2;
      if (r2 < 0) {
        let e7 = n2 ? n2(t2) : Zj.parse(t2), r3 = this.langiumDocuments.getDocument(e7);
        return r3 ? r3.parseResult.value : `Could not find document for URI: ` + t2;
      }
      let i2 = n2 ? n2(t2.substring(0, r2)) : Zj.parse(t2.substring(0, r2)), a2 = this.langiumDocuments.getDocument(i2);
      return a2 ? r2 === t2.length - 1 ? a2.parseResult.value : this.astNodeLocator.getAstNode(a2.parseResult.value, t2.substring(r2 + 1)) || `Could not resolve URI: ` + t2 : `Could not find document for URI: ` + t2;
    } catch (e7) {
      return String(e7);
    }
  }
}, wM = class {
  get map() {
    return this.fileExtensionMap;
  }
  constructor(e6) {
    this.languageIdMap = /* @__PURE__ */ new Map(), this.fileExtensionMap = /* @__PURE__ */ new Map(), this.fileNameMap = /* @__PURE__ */ new Map(), this.textDocuments = e6 == null ? void 0 : e6.workspace.TextDocuments;
  }
  register(e6) {
    let t2 = e6.LanguageMetaData;
    for (let n2 of t2.fileExtensions) this.fileExtensionMap.has(n2) && console.warn(`The file extension ${n2} is used by multiple languages. It is now assigned to '${t2.languageId}'.`), this.fileExtensionMap.set(n2, e6);
    if (t2.fileNames) for (let n2 of t2.fileNames) this.fileNameMap.has(n2) && console.warn(`The file name ${n2} is used by multiple languages. It is now assigned to '${t2.languageId}'.`), this.fileNameMap.set(n2, e6);
    this.languageIdMap.set(t2.languageId, e6);
  }
  getServices(e6) {
    var _a3, _b3;
    if (this.languageIdMap.size === 0) throw Error("The service registry is empty. Use `register` to register the services of a language.");
    let t2 = (_b3 = (_a3 = this.textDocuments) == null ? void 0 : _a3.get(e6)) == null ? void 0 : _b3.languageId;
    if (t2 !== void 0) {
      let e7 = this.languageIdMap.get(t2);
      if (e7) return e7;
    }
    let n2 = $j.extname(e6), r2 = $j.basename(e6), i2 = this.fileNameMap.get(r2) ?? this.fileExtensionMap.get(n2);
    if (!i2) throw t2 ? Error(`The service registry contains no services for the extension '${n2}' for language '${t2}'.`) : Error(`The service registry contains no services for the extension '${n2}'.`);
    return i2;
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
function TM(e6) {
  return { code: e6 };
}
var EM;
(function(e6) {
  e6.defaults = [`fast`, `slow`, `built-in`], e6.all = e6.defaults;
})(EM || (EM = {}));
var DM = class {
  constructor(e6) {
    this.entries = new cM(), this.knownCategories = new Set(EM.defaults), this.entriesBefore = [], this.entriesAfter = [], this.reflection = e6.shared.AstReflection;
  }
  register(e6, t2 = this, n2 = `fast`) {
    if (n2 === `built-in`) throw Error(`The 'built-in' category is reserved for lexer, parser, and linker errors.`);
    this.knownCategories.add(n2);
    for (let [r2, i2] of Object.entries(e6)) {
      let e7 = i2;
      if (Array.isArray(e7)) for (let i3 of e7) {
        let e8 = { check: this.wrapValidationException(i3, t2), category: n2 };
        this.addEntry(r2, e8);
      }
      else if (typeof e7 == `function`) {
        let i3 = { check: this.wrapValidationException(e7, t2), category: n2 };
        this.addEntry(r2, i3);
      } else Ln(e7);
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
      if (Bj(e7)) throw e7;
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
    let n2 = D(this.entries.get(e6)).concat(this.entries.get(`AstNode`));
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
  getAllValidationCategories(e6) {
    return this.knownCategories;
  }
};
const OM = Object.freeze({ validateNode: true, validateChildren: true });
var kM = class {
  constructor(e6) {
    this.validationRegistry = e6.validation.ValidationRegistry, this.metadata = e6.LanguageMetaData, this.profiler = e6.shared.profilers.LangiumProfiler, this.languageId = e6.LanguageMetaData.languageId;
  }
  async validateDocument(e6, t2 = {}, n2 = X.CancellationToken.None) {
    let r2 = e6.parseResult, i2 = [];
    if (await Vj(n2), (!t2.categories || t2.categories.includes(`built-in`)) && (this.processLexingErrors(r2, i2, t2), t2.stopAfterLexingErrors && i2.some((e7) => {
      var _a3;
      return ((_a3 = e7.data) == null ? void 0 : _a3.code) === NM.LexingError;
    }) || (this.processParsingErrors(r2, i2, t2), t2.stopAfterParsingErrors && i2.some((e7) => {
      var _a3;
      return ((_a3 = e7.data) == null ? void 0 : _a3.code) === NM.ParsingError;
    })) || (this.processLinkingErrors(e6, i2, t2), t2.stopAfterLinkingErrors && i2.some((e7) => {
      var _a3;
      return ((_a3 = e7.data) == null ? void 0 : _a3.code) === NM.LinkingError;
    })))) return i2;
    try {
      i2.push(...await this.validateAst(r2.value, t2, n2));
    } catch (e7) {
      if (Bj(e7)) throw e7;
      console.error(`An error occurred during validation:`, e7);
    }
    return await Vj(n2), i2;
  }
  processLexingErrors(e6, t2, n2) {
    var _a3;
    let r2 = [...e6.lexerErrors, ...((_a3 = e6.lexerReport) == null ? void 0 : _a3.diagnostics) ?? []];
    for (let e7 of r2) {
      let n3 = e7.severity ?? `error`, r3 = { severity: jM(n3), range: { start: { line: e7.line - 1, character: e7.column - 1 }, end: { line: e7.line - 1, character: e7.column + e7.length - 1 } }, message: e7.message, data: MM(n3), source: this.getSource() };
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
      } else e7 = vn(n3.token);
      if (e7) {
        let r2 = { severity: jM(`error`), range: e7, message: n3.message, data: TM(NM.ParsingError), source: this.getSource() };
        t2.push(r2);
      }
    }
  }
  processLinkingErrors(e6, t2, n2) {
    var _a3;
    for (let n3 of e6.references) {
      let e7 = n3.error;
      if (e7) {
        let r2 = { node: e7.info.container, range: (_a3 = n3.$refNode) == null ? void 0 : _a3.range, property: e7.info.property, index: e7.info.index, data: { code: NM.LinkingError, containerType: e7.info.container.$type, property: e7.info.property, refText: e7.info.reference.$refText } };
        t2.push(this.toDiagnostic(`error`, e7.message, r2));
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
    for (let a2 of i2) await Vj(r2), await a2(e6, n2, t2.categories ?? [], r2);
  }
  async validateAstNodes(e6, t2, n2, r2 = X.CancellationToken.None) {
    var _a3;
    if ((_a3 = this.profiler) == null ? void 0 : _a3.isActive(`validating`)) {
      let i2 = this.profiler.createTask(`validating`, this.languageId);
      i2.start();
      try {
        let a2 = j(e6).iterator();
        for (let e7 of a2) {
          i2.startSubTask(e7.$type);
          let o2 = this.validateSingleNodeOptions(e7, t2);
          if (o2.validateNode) try {
            let i3 = this.validationRegistry.getChecks(e7.$type, t2.categories);
            for (let t3 of i3) await t3(e7, n2, r2);
          } finally {
            i2.stopSubTask(e7.$type);
          }
          o2.validateChildren || a2.prune();
        }
      } finally {
        i2.stop();
      }
    } else {
      let i2 = j(e6).iterator();
      for (let e7 of i2) {
        await Vj(r2);
        let a2 = this.validateSingleNodeOptions(e7, t2);
        if (a2.validateNode) {
          let i3 = this.validationRegistry.getChecks(e7.$type, t2.categories);
          for (let t3 of i3) await t3(e7, n2, r2);
        }
        a2.validateChildren || i2.prune();
      }
    }
  }
  validateSingleNodeOptions(e6, t2) {
    return OM;
  }
  async validateAstAfter(e6, t2, n2, r2 = X.CancellationToken.None) {
    let i2 = this.validationRegistry.checksAfter;
    for (let a2 of i2) await Vj(r2), await a2(e6, n2, t2.categories ?? [], r2);
  }
  toDiagnostic(e6, t2, n2) {
    return { message: t2, range: AM(n2), severity: jM(e6), code: n2.code, codeDescription: n2.codeDescription, tags: n2.tags, relatedInformation: n2.relatedInformation, data: n2.data, source: this.getSource() };
  }
  getSource() {
    return this.metadata.languageId;
  }
};
function AM(e6) {
  if (e6.range) return e6.range;
  let t2;
  return typeof e6.property == `string` ? t2 = vr(e6.node.$cstNode, e6.property, e6.index) : typeof e6.keyword == `string` && (t2 = xr(e6.node.$cstNode, e6.keyword, e6.index)), t2 ?? (t2 = e6.node.$cstNode), t2 ? t2.range : { start: { line: 0, character: 0 }, end: { line: 0, character: 0 } };
}
function jM(e6) {
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
function MM(e6) {
  switch (e6) {
    case `error`:
      return TM(NM.LexingError);
    case `warning`:
      return TM(NM.LexingWarning);
    case `info`:
      return TM(NM.LexingInfo);
    case `hint`:
      return TM(NM.LexingHint);
    default:
      throw Error(`Invalid diagnostic severity: ` + e6);
  }
}
var NM;
(function(e6) {
  e6.LexingError = `lexing-error`, e6.LexingWarning = `lexing-warning`, e6.LexingInfo = `lexing-info`, e6.LexingHint = `lexing-hint`, e6.ParsingError = `parsing-error`, e6.LinkingError = `linking-error`;
})(NM || (NM = {}));
var PM = class {
  constructor(e6) {
    this.astNodeLocator = e6.workspace.AstNodeLocator, this.nameProvider = e6.references.NameProvider;
  }
  createDescription(e6, t2, n2) {
    let r2 = n2 ?? O(e6);
    t2 ?? (t2 = this.nameProvider.getName(e6));
    let i2 = this.astNodeLocator.getAstNodePath(e6);
    if (!t2) throw Error(`Node at path ${i2} has no name.`);
    let a2, o2 = () => a2 ?? (a2 = yn(this.nameProvider.getNameNode(e6) ?? e6.$cstNode));
    return { node: e6, name: t2, get nameSegment() {
      return o2();
    }, selectionSegment: yn(e6.$cstNode), type: e6.$type, documentUri: r2.uri, path: i2 };
  }
}, FM = class {
  constructor(e6) {
    this.nodeLocator = e6.workspace.AstNodeLocator;
  }
  async createDescriptions(e6, t2 = X.CancellationToken.None) {
    let n2 = [], r2 = e6.parseResult.value;
    for (let e7 of j(r2)) await Vj(t2), fe(e7).forEach((e8) => {
      e8.reference.error || n2.push(...this.createInfoDescriptions(e8));
    });
    return n2;
  }
  createInfoDescriptions(e6) {
    let t2 = e6.reference;
    if (t2.error || !t2.$refNode) return [];
    let n2 = [];
    _(t2) && t2.$nodeDescription ? n2 = [t2.$nodeDescription] : v(t2) && (n2 = t2.items.map((e7) => e7.$nodeDescription).filter((e7) => e7 !== void 0));
    let r2 = O(e6.container).uri, i2 = this.nodeLocator.getAstNodePath(e6.container), a2 = [], o2 = yn(t2.$refNode);
    for (let e7 of n2) a2.push({ sourceUri: r2, sourcePath: i2, targetUri: e7.documentUri, targetPath: e7.path, segment: o2, local: $j.equals(e7.documentUri, r2) });
    return a2;
  }
}, IM = class {
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
}, LM = {};
t(LM, r(Mj(), 1));
var RM = class {
  constructor(e6) {
    this._ready = new Hj(), this.onConfigurationSectionUpdateEmitter = new LM.Emitter(), this.settings = {}, this.workspaceConfig = false, this.serviceRegistry = e6.ServiceRegistry;
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
    typeof e6.settings != `object` || e6.settings === null || Object.entries(e6.settings).forEach(([e7, t2]) => {
      this.updateSectionConfiguration(e7, t2), this.onConfigurationSectionUpdateEmitter.fire({ section: e7, configuration: t2 });
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
}, zM = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.Message = e6.NotificationType9 = e6.NotificationType8 = e6.NotificationType7 = e6.NotificationType6 = e6.NotificationType5 = e6.NotificationType4 = e6.NotificationType3 = e6.NotificationType2 = e6.NotificationType1 = e6.NotificationType0 = e6.NotificationType = e6.RequestType9 = e6.RequestType8 = e6.RequestType7 = e6.RequestType6 = e6.RequestType5 = e6.RequestType4 = e6.RequestType3 = e6.RequestType2 = e6.RequestType1 = e6.RequestType = e6.RequestType0 = e6.AbstractMessageSignature = e6.ParameterStructures = e6.ResponseError = e6.ErrorCodes = void 0;
  var t2 = jj(), n2;
  (function(e7) {
    e7.ParseError = -32700, e7.InvalidRequest = -32600, e7.MethodNotFound = -32601, e7.InvalidParams = -32602, e7.InternalError = -32603, e7.jsonrpcReservedErrorRangeStart = -32099, e7.serverErrorStart = -32099, e7.MessageWriteError = -32099, e7.MessageReadError = -32098, e7.PendingResponseRejected = -32097, e7.ConnectionInactive = -32096, e7.ServerNotInitialized = -32002, e7.UnknownErrorCode = -32001, e7.jsonrpcReservedErrorRangeEnd = -32e3, e7.serverErrorEnd = -32e3;
  })(n2 || (e6.ErrorCodes = n2 = {})), e6.ResponseError = class e7 extends Error {
    constructor(r3, i3, a3) {
      super(i3), this.code = t2.number(r3) ? r3 : n2.UnknownErrorCode, this.data = a3, Object.setPrototypeOf(this, e7.prototype);
    }
    toJson() {
      let e8 = { code: this.code, message: this.message };
      return this.data !== void 0 && (e8.data = this.data), e8;
    }
  };
  var r2 = class e7 {
    constructor(e8) {
      this.kind = e8;
    }
    static is(t3) {
      return t3 === e7.auto || t3 === e7.byName || t3 === e7.byPosition;
    }
    toString() {
      return this.kind;
    }
  };
  e6.ParameterStructures = r2, r2.auto = new r2(`auto`), r2.byPosition = new r2(`byPosition`), r2.byName = new r2(`byName`);
  var i2 = class {
    constructor(e7, t3) {
      this.method = e7, this.numberOfParams = t3;
    }
    get parameterStructures() {
      return r2.auto;
    }
  };
  e6.AbstractMessageSignature = i2, e6.RequestType0 = class extends i2 {
    constructor(e7) {
      super(e7, 0);
    }
  }, e6.RequestType = class extends i2 {
    constructor(e7, t3 = r2.auto) {
      super(e7, 1), this._parameterStructures = t3;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  }, e6.RequestType1 = class extends i2 {
    constructor(e7, t3 = r2.auto) {
      super(e7, 1), this._parameterStructures = t3;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  }, e6.RequestType2 = class extends i2 {
    constructor(e7) {
      super(e7, 2);
    }
  }, e6.RequestType3 = class extends i2 {
    constructor(e7) {
      super(e7, 3);
    }
  }, e6.RequestType4 = class extends i2 {
    constructor(e7) {
      super(e7, 4);
    }
  }, e6.RequestType5 = class extends i2 {
    constructor(e7) {
      super(e7, 5);
    }
  }, e6.RequestType6 = class extends i2 {
    constructor(e7) {
      super(e7, 6);
    }
  }, e6.RequestType7 = class extends i2 {
    constructor(e7) {
      super(e7, 7);
    }
  }, e6.RequestType8 = class extends i2 {
    constructor(e7) {
      super(e7, 8);
    }
  }, e6.RequestType9 = class extends i2 {
    constructor(e7) {
      super(e7, 9);
    }
  }, e6.NotificationType = class extends i2 {
    constructor(e7, t3 = r2.auto) {
      super(e7, 1), this._parameterStructures = t3;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  }, e6.NotificationType0 = class extends i2 {
    constructor(e7) {
      super(e7, 0);
    }
  }, e6.NotificationType1 = class extends i2 {
    constructor(e7, t3 = r2.auto) {
      super(e7, 1), this._parameterStructures = t3;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  }, e6.NotificationType2 = class extends i2 {
    constructor(e7) {
      super(e7, 2);
    }
  }, e6.NotificationType3 = class extends i2 {
    constructor(e7) {
      super(e7, 3);
    }
  }, e6.NotificationType4 = class extends i2 {
    constructor(e7) {
      super(e7, 4);
    }
  }, e6.NotificationType5 = class extends i2 {
    constructor(e7) {
      super(e7, 5);
    }
  }, e6.NotificationType6 = class extends i2 {
    constructor(e7) {
      super(e7, 6);
    }
  }, e6.NotificationType7 = class extends i2 {
    constructor(e7) {
      super(e7, 7);
    }
  }, e6.NotificationType8 = class extends i2 {
    constructor(e7) {
      super(e7, 8);
    }
  }, e6.NotificationType9 = class extends i2 {
    constructor(e7) {
      super(e7, 9);
    }
  };
  var a2;
  (function(e7) {
    function n3(e8) {
      let n4 = e8;
      return n4 && t2.string(n4.method) && (t2.string(n4.id) || t2.number(n4.id));
    }
    e7.isRequest = n3;
    function r3(e8) {
      let n4 = e8;
      return n4 && t2.string(n4.method) && e8.id === void 0;
    }
    e7.isNotification = r3;
    function i3(e8) {
      let n4 = e8;
      return n4 && (n4.result !== void 0 || !!n4.error) && (t2.string(n4.id) || t2.number(n4.id) || n4.id === null);
    }
    e7.isResponse = i3;
  })(a2 || (e6.Message = a2 = {}));
})), BM = a(((e6) => {
  var t2;
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.LRUCache = e6.LinkedMap = e6.Touch = void 0;
  var n2;
  (function(e7) {
    e7.None = 0, e7.First = 1, e7.AsOld = e7.First, e7.Last = 2, e7.AsNew = e7.Last;
  })(n2 || (e6.Touch = n2 = {}));
  var r2 = class {
    constructor() {
      this[t2] = `LinkedMap`, this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
    }
    clear() {
      this._map.clear(), this._head = void 0, this._tail = void 0, this._size = 0, this._state++;
    }
    isEmpty() {
      return !this._head && !this._tail;
    }
    get size() {
      return this._size;
    }
    get first() {
      var _a3;
      return (_a3 = this._head) == null ? void 0 : _a3.value;
    }
    get last() {
      var _a3;
      return (_a3 = this._tail) == null ? void 0 : _a3.value;
    }
    has(e7) {
      return this._map.has(e7);
    }
    get(e7, t3 = n2.None) {
      let r3 = this._map.get(e7);
      if (r3) return t3 !== n2.None && this.touch(r3, t3), r3.value;
    }
    set(e7, t3, r3 = n2.None) {
      let i2 = this._map.get(e7);
      if (i2) i2.value = t3, r3 !== n2.None && this.touch(i2, r3);
      else {
        switch (i2 = { key: e7, value: t3, next: void 0, previous: void 0 }, r3) {
          case n2.None:
            this.addItemLast(i2);
            break;
          case n2.First:
            this.addItemFirst(i2);
            break;
          case n2.Last:
            this.addItemLast(i2);
            break;
          default:
            this.addItemLast(i2);
            break;
        }
        this._map.set(e7, i2), this._size++;
      }
      return this;
    }
    delete(e7) {
      return !!this.remove(e7);
    }
    remove(e7) {
      let t3 = this._map.get(e7);
      if (t3) return this._map.delete(e7), this.removeItem(t3), this._size--, t3.value;
    }
    shift() {
      if (!this._head && !this._tail) return;
      if (!this._head || !this._tail) throw Error(`Invalid list`);
      let e7 = this._head;
      return this._map.delete(e7.key), this.removeItem(e7), this._size--, e7.value;
    }
    forEach(e7, t3) {
      let n3 = this._state, r3 = this._head;
      for (; r3; ) {
        if (t3 ? e7.bind(t3)(r3.value, r3.key, this) : e7(r3.value, r3.key, this), this._state !== n3) throw Error(`LinkedMap got modified during iteration.`);
        r3 = r3.next;
      }
    }
    keys() {
      let e7 = this._state, t3 = this._head, n3 = { [Symbol.iterator]: () => n3, next: () => {
        if (this._state !== e7) throw Error(`LinkedMap got modified during iteration.`);
        if (t3) {
          let e8 = { value: t3.key, done: false };
          return t3 = t3.next, e8;
        } else return { value: void 0, done: true };
      } };
      return n3;
    }
    values() {
      let e7 = this._state, t3 = this._head, n3 = { [Symbol.iterator]: () => n3, next: () => {
        if (this._state !== e7) throw Error(`LinkedMap got modified during iteration.`);
        if (t3) {
          let e8 = { value: t3.value, done: false };
          return t3 = t3.next, e8;
        } else return { value: void 0, done: true };
      } };
      return n3;
    }
    entries() {
      let e7 = this._state, t3 = this._head, n3 = { [Symbol.iterator]: () => n3, next: () => {
        if (this._state !== e7) throw Error(`LinkedMap got modified during iteration.`);
        if (t3) {
          let e8 = { value: [t3.key, t3.value], done: false };
          return t3 = t3.next, e8;
        } else return { value: void 0, done: true };
      } };
      return n3;
    }
    [(t2 = Symbol.toStringTag, Symbol.iterator)]() {
      return this.entries();
    }
    trimOld(e7) {
      if (e7 >= this.size) return;
      if (e7 === 0) {
        this.clear();
        return;
      }
      let t3 = this._head, n3 = this.size;
      for (; t3 && n3 > e7; ) this._map.delete(t3.key), t3 = t3.next, n3--;
      this._head = t3, this._size = n3, t3 && (t3.previous = void 0), this._state++;
    }
    addItemFirst(e7) {
      if (!this._head && !this._tail) this._tail = e7;
      else if (this._head) e7.next = this._head, this._head.previous = e7;
      else throw Error(`Invalid list`);
      this._head = e7, this._state++;
    }
    addItemLast(e7) {
      if (!this._head && !this._tail) this._head = e7;
      else if (this._tail) e7.previous = this._tail, this._tail.next = e7;
      else throw Error(`Invalid list`);
      this._tail = e7, this._state++;
    }
    removeItem(e7) {
      if (e7 === this._head && e7 === this._tail) this._head = void 0, this._tail = void 0;
      else if (e7 === this._head) {
        if (!e7.next) throw Error(`Invalid list`);
        e7.next.previous = void 0, this._head = e7.next;
      } else if (e7 === this._tail) {
        if (!e7.previous) throw Error(`Invalid list`);
        e7.previous.next = void 0, this._tail = e7.previous;
      } else {
        let t3 = e7.next, n3 = e7.previous;
        if (!t3 || !n3) throw Error(`Invalid list`);
        t3.previous = n3, n3.next = t3;
      }
      e7.next = void 0, e7.previous = void 0, this._state++;
    }
    touch(e7, t3) {
      if (!this._head || !this._tail) throw Error(`Invalid list`);
      if (!(t3 !== n2.First && t3 !== n2.Last)) {
        if (t3 === n2.First) {
          if (e7 === this._head) return;
          let t4 = e7.next, n3 = e7.previous;
          e7 === this._tail ? (n3.next = void 0, this._tail = n3) : (t4.previous = n3, n3.next = t4), e7.previous = void 0, e7.next = this._head, this._head.previous = e7, this._head = e7, this._state++;
        } else if (t3 === n2.Last) {
          if (e7 === this._tail) return;
          let t4 = e7.next, n3 = e7.previous;
          e7 === this._head ? (t4.previous = void 0, this._head = t4) : (t4.previous = n3, n3.next = t4), e7.next = void 0, e7.previous = this._tail, this._tail.next = e7, this._tail = e7, this._state++;
        }
      }
    }
    toJSON() {
      let e7 = [];
      return this.forEach((t3, n3) => {
        e7.push([n3, t3]);
      }), e7;
    }
    fromJSON(e7) {
      this.clear();
      for (let [t3, n3] of e7) this.set(t3, n3);
    }
  };
  e6.LinkedMap = r2, e6.LRUCache = class extends r2 {
    constructor(e7, t3 = 1) {
      super(), this._limit = e7, this._ratio = Math.min(Math.max(0, t3), 1);
    }
    get limit() {
      return this._limit;
    }
    set limit(e7) {
      this._limit = e7, this.checkTrim();
    }
    get ratio() {
      return this._ratio;
    }
    set ratio(e7) {
      this._ratio = Math.min(Math.max(0, e7), 1), this.checkTrim();
    }
    get(e7, t3 = n2.AsNew) {
      return super.get(e7, t3);
    }
    peek(e7) {
      return super.get(e7, n2.None);
    }
    set(e7, t3) {
      return super.set(e7, t3, n2.Last), this.checkTrim(), this;
    }
    checkTrim() {
      this.size > this._limit && this.trimOld(Math.round(this._limit * this._ratio));
    }
  };
})), VM = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.Disposable = void 0;
  var t2;
  (function(e7) {
    function t3(e8) {
      return { dispose: e8 };
    }
    e7.create = t3;
  })(t2 || (e6.Disposable = t2 = {}));
})), HM = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.SharedArrayReceiverStrategy = e6.SharedArraySenderStrategy = void 0;
  var t2 = Nj(), n2;
  (function(e7) {
    e7.Continue = 0, e7.Cancelled = 1;
  })(n2 || (n2 = {})), e6.SharedArraySenderStrategy = class {
    constructor() {
      this.buffers = /* @__PURE__ */ new Map();
    }
    enableCancellation(e7) {
      if (e7.id === null) return;
      let t3 = new SharedArrayBuffer(4), r3 = new Int32Array(t3, 0, 1);
      r3[0] = n2.Continue, this.buffers.set(e7.id, t3), e7.$cancellationData = t3;
    }
    async sendCancellation(e7, t3) {
      let r3 = this.buffers.get(t3);
      if (r3 === void 0) return;
      let i3 = new Int32Array(r3, 0, 1);
      Atomics.store(i3, 0, n2.Cancelled);
    }
    cleanup(e7) {
      this.buffers.delete(e7);
    }
    dispose() {
      this.buffers.clear();
    }
  };
  var r2 = class {
    constructor(e7) {
      this.data = new Int32Array(e7, 0, 1);
    }
    get isCancellationRequested() {
      return Atomics.load(this.data, 0) === n2.Cancelled;
    }
    get onCancellationRequested() {
      throw Error(`Cancellation over SharedArrayBuffer doesn't support cancellation events`);
    }
  }, i2 = class {
    constructor(e7) {
      this.token = new r2(e7);
    }
    cancel() {
    }
    dispose() {
    }
  };
  e6.SharedArrayReceiverStrategy = class {
    constructor() {
      this.kind = `request`;
    }
    createCancellationTokenSource(e7) {
      let n3 = e7.$cancellationData;
      return n3 === void 0 ? new t2.CancellationTokenSource() : new i2(n3);
    }
  };
})), UM = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.Semaphore = void 0;
  var t2 = Aj();
  e6.Semaphore = class {
    constructor(e7 = 1) {
      if (e7 <= 0) throw Error(`Capacity must be greater than 0`);
      this._capacity = e7, this._active = 0, this._waiting = [];
    }
    lock(e7) {
      return new Promise((t3, n2) => {
        this._waiting.push({ thunk: e7, resolve: t3, reject: n2 }), this.runNext();
      });
    }
    get active() {
      return this._active;
    }
    runNext() {
      this._waiting.length === 0 || this._active === this._capacity || (0, t2.default)().timer.setImmediate(() => this.doRunNext());
    }
    doRunNext() {
      if (this._waiting.length === 0 || this._active === this._capacity) return;
      let e7 = this._waiting.shift();
      if (this._active++, this._active > this._capacity) throw Error(`To many thunks active`);
      try {
        let t3 = e7.thunk();
        t3 instanceof Promise ? t3.then((t4) => {
          this._active--, e7.resolve(t4), this.runNext();
        }, (t4) => {
          this._active--, e7.reject(t4), this.runNext();
        }) : (this._active--, e7.resolve(t3), this.runNext());
      } catch (t3) {
        this._active--, e7.reject(t3), this.runNext();
      }
    }
  };
})), WM = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.ReadableStreamMessageReader = e6.AbstractMessageReader = e6.MessageReader = void 0;
  var t2 = Aj(), n2 = jj(), r2 = Mj(), i2 = UM(), a2;
  (function(e7) {
    function t3(e8) {
      let t4 = e8;
      return t4 && n2.func(t4.listen) && n2.func(t4.dispose) && n2.func(t4.onError) && n2.func(t4.onClose) && n2.func(t4.onPartialMessage);
    }
    e7.is = t3;
  })(a2 || (e6.MessageReader = a2 = {}));
  var o2 = class {
    constructor() {
      this.errorEmitter = new r2.Emitter(), this.closeEmitter = new r2.Emitter(), this.partialMessageEmitter = new r2.Emitter();
    }
    dispose() {
      this.errorEmitter.dispose(), this.closeEmitter.dispose();
    }
    get onError() {
      return this.errorEmitter.event;
    }
    fireError(e7) {
      this.errorEmitter.fire(this.asError(e7));
    }
    get onClose() {
      return this.closeEmitter.event;
    }
    fireClose() {
      this.closeEmitter.fire(void 0);
    }
    get onPartialMessage() {
      return this.partialMessageEmitter.event;
    }
    firePartialMessage(e7) {
      this.partialMessageEmitter.fire(e7);
    }
    asError(e7) {
      return e7 instanceof Error ? e7 : Error(`Reader received error. Reason: ${n2.string(e7.message) ? e7.message : `unknown`}`);
    }
  };
  e6.AbstractMessageReader = o2;
  var s2;
  (function(e7) {
    function n3(e8) {
      let n4, r3, i3 = /* @__PURE__ */ new Map(), a3, o3 = /* @__PURE__ */ new Map();
      if (e8 === void 0 || typeof e8 == `string`) n4 = e8 ?? `utf-8`;
      else {
        if (n4 = e8.charset ?? `utf-8`, e8.contentDecoder !== void 0 && (r3 = e8.contentDecoder, i3.set(r3.name, r3)), e8.contentDecoders !== void 0) for (let t3 of e8.contentDecoders) i3.set(t3.name, t3);
        if (e8.contentTypeDecoder !== void 0 && (a3 = e8.contentTypeDecoder, o3.set(a3.name, a3)), e8.contentTypeDecoders !== void 0) for (let t3 of e8.contentTypeDecoders) o3.set(t3.name, t3);
      }
      return a3 === void 0 && (a3 = (0, t2.default)().applicationJson.decoder, o3.set(a3.name, a3)), { charset: n4, contentDecoder: r3, contentDecoders: i3, contentTypeDecoder: a3, contentTypeDecoders: o3 };
    }
    e7.fromOptions = n3;
  })(s2 || (s2 = {})), e6.ReadableStreamMessageReader = class extends o2 {
    constructor(e7, n3) {
      super(), this.readable = e7, this.options = s2.fromOptions(n3), this.buffer = (0, t2.default)().messageBuffer.create(this.options.charset), this._partialMessageTimeout = 1e4, this.nextMessageLength = -1, this.messageToken = 0, this.readSemaphore = new i2.Semaphore(1);
    }
    set partialMessageTimeout(e7) {
      this._partialMessageTimeout = e7;
    }
    get partialMessageTimeout() {
      return this._partialMessageTimeout;
    }
    listen(e7) {
      this.nextMessageLength = -1, this.messageToken = 0, this.partialMessageTimer = void 0, this.callback = e7;
      let t3 = this.readable.onData((e8) => {
        this.onData(e8);
      });
      return this.readable.onError((e8) => this.fireError(e8)), this.readable.onClose(() => this.fireClose()), t3;
    }
    onData(e7) {
      try {
        for (this.buffer.append(e7); ; ) {
          if (this.nextMessageLength === -1) {
            let e9 = this.buffer.tryReadHeaders(true);
            if (!e9) return;
            let t3 = e9.get(`content-length`);
            if (!t3) {
              this.fireError(Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(e9))}`));
              return;
            }
            let n3 = parseInt(t3);
            if (isNaN(n3)) {
              this.fireError(Error(`Content-Length value must be a number. Got ${t3}`));
              return;
            }
            this.nextMessageLength = n3;
          }
          let e8 = this.buffer.tryReadBody(this.nextMessageLength);
          if (e8 === void 0) {
            this.setPartialMessageTimer();
            return;
          }
          this.clearPartialMessageTimer(), this.nextMessageLength = -1, this.readSemaphore.lock(async () => {
            let t3 = this.options.contentDecoder === void 0 ? e8 : await this.options.contentDecoder.decode(e8), n3 = await this.options.contentTypeDecoder.decode(t3, this.options);
            this.callback(n3);
          }).catch((e9) => {
            this.fireError(e9);
          });
        }
      } catch (e8) {
        this.fireError(e8);
      }
    }
    clearPartialMessageTimer() {
      this.partialMessageTimer && (this.partialMessageTimer = (this.partialMessageTimer.dispose(), void 0));
    }
    setPartialMessageTimer() {
      this.clearPartialMessageTimer(), !(this._partialMessageTimeout <= 0) && (this.partialMessageTimer = (0, t2.default)().timer.setTimeout((e7, t3) => {
        this.partialMessageTimer = void 0, e7 === this.messageToken && (this.firePartialMessage({ messageToken: e7, waitingTime: t3 }), this.setPartialMessageTimer());
      }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout));
    }
  };
})), GM = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.WriteableStreamMessageWriter = e6.AbstractMessageWriter = e6.MessageWriter = void 0;
  var t2 = Aj(), n2 = jj(), r2 = UM(), i2 = Mj(), a2 = `Content-Length: `, o2 = `\r
`, s2;
  (function(e7) {
    function t3(e8) {
      let t4 = e8;
      return t4 && n2.func(t4.dispose) && n2.func(t4.onClose) && n2.func(t4.onError) && n2.func(t4.write);
    }
    e7.is = t3;
  })(s2 || (e6.MessageWriter = s2 = {}));
  var c2 = class {
    constructor() {
      this.errorEmitter = new i2.Emitter(), this.closeEmitter = new i2.Emitter();
    }
    dispose() {
      this.errorEmitter.dispose(), this.closeEmitter.dispose();
    }
    get onError() {
      return this.errorEmitter.event;
    }
    fireError(e7, t3, n3) {
      this.errorEmitter.fire([this.asError(e7), t3, n3]);
    }
    get onClose() {
      return this.closeEmitter.event;
    }
    fireClose() {
      this.closeEmitter.fire(void 0);
    }
    asError(e7) {
      return e7 instanceof Error ? e7 : Error(`Writer received error. Reason: ${n2.string(e7.message) ? e7.message : `unknown`}`);
    }
  };
  e6.AbstractMessageWriter = c2;
  var l2;
  (function(e7) {
    function n3(e8) {
      return e8 === void 0 || typeof e8 == `string` ? { charset: e8 ?? `utf-8`, contentTypeEncoder: (0, t2.default)().applicationJson.encoder } : { charset: e8.charset ?? `utf-8`, contentEncoder: e8.contentEncoder, contentTypeEncoder: e8.contentTypeEncoder ?? (0, t2.default)().applicationJson.encoder };
    }
    e7.fromOptions = n3;
  })(l2 || (l2 = {})), e6.WriteableStreamMessageWriter = class extends c2 {
    constructor(e7, t3) {
      super(), this.writable = e7, this.options = l2.fromOptions(t3), this.errorCount = 0, this.writeSemaphore = new r2.Semaphore(1), this.writable.onError((e8) => this.fireError(e8)), this.writable.onClose(() => this.fireClose());
    }
    async write(e7) {
      return this.writeSemaphore.lock(async () => this.options.contentTypeEncoder.encode(e7, this.options).then((e8) => this.options.contentEncoder === void 0 ? e8 : this.options.contentEncoder.encode(e8)).then((t3) => {
        let n3 = [];
        return n3.push(a2, t3.byteLength.toString(), o2), n3.push(o2), this.doWrite(e7, n3, t3);
      }, (e8) => {
        throw this.fireError(e8), e8;
      }));
    }
    async doWrite(e7, t3, n3) {
      try {
        return await this.writable.write(t3.join(``), `ascii`), this.writable.write(n3);
      } catch (t4) {
        return this.handleError(t4, e7), Promise.reject(t4);
      }
    }
    handleError(e7, t3) {
      this.errorCount++, this.fireError(e7, t3, this.errorCount);
    }
    end() {
      this.writable.end();
    }
  };
})), KM = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.AbstractMessageBuffer = void 0;
  var t2 = 13, n2 = 10, r2 = `\r
`;
  e6.AbstractMessageBuffer = class {
    constructor(e7 = `utf-8`) {
      this._encoding = e7, this._chunks = [], this._totalLength = 0;
    }
    get encoding() {
      return this._encoding;
    }
    append(e7) {
      let t3 = typeof e7 == `string` ? this.fromString(e7, this._encoding) : e7;
      this._chunks.push(t3), this._totalLength += t3.byteLength;
    }
    tryReadHeaders(e7 = false) {
      if (this._chunks.length === 0) return;
      let i2 = 0, a2 = 0, o2 = 0, s2 = 0;
      row: for (; a2 < this._chunks.length; ) {
        let e8 = this._chunks[a2];
        o2 = 0;
        column: for (; o2 < e8.length; ) {
          switch (e8[o2]) {
            case t2:
              switch (i2) {
                case 0:
                  i2 = 1;
                  break;
                case 2:
                  i2 = 3;
                  break;
                default:
                  i2 = 0;
              }
              break;
            case n2:
              switch (i2) {
                case 1:
                  i2 = 2;
                  break;
                case 3:
                  i2 = 4, o2++;
                  break row;
                default:
                  i2 = 0;
              }
              break;
            default:
              i2 = 0;
          }
          o2++;
        }
        s2 += e8.byteLength, a2++;
      }
      if (i2 !== 4) return;
      let c2 = this._read(s2 + o2), l2 = /* @__PURE__ */ new Map(), u2 = this.toString(c2, `ascii`).split(r2);
      if (u2.length < 2) return l2;
      for (let t3 = 0; t3 < u2.length - 2; t3++) {
        let n3 = u2[t3], r3 = n3.indexOf(`:`);
        if (r3 === -1) throw Error(`Message header must separate key and value using ':'
${n3}`);
        let i3 = n3.substr(0, r3), a3 = n3.substr(r3 + 1).trim();
        l2.set(e7 ? i3.toLowerCase() : i3, a3);
      }
      return l2;
    }
    tryReadBody(e7) {
      if (!(this._totalLength < e7)) return this._read(e7);
    }
    get numberOfBytes() {
      return this._totalLength;
    }
    _read(e7) {
      if (e7 === 0) return this.emptyBuffer();
      if (e7 > this._totalLength) throw Error(`Cannot read so many bytes!`);
      if (this._chunks[0].byteLength === e7) {
        let t4 = this._chunks[0];
        return this._chunks.shift(), this._totalLength -= e7, this.asNative(t4);
      }
      if (this._chunks[0].byteLength > e7) {
        let t4 = this._chunks[0], n4 = this.asNative(t4, e7);
        return this._chunks[0] = t4.slice(e7), this._totalLength -= e7, n4;
      }
      let t3 = this.allocNative(e7), n3 = 0;
      for (; e7 > 0; ) {
        let r3 = this._chunks[0];
        if (r3.byteLength > e7) {
          let i2 = r3.slice(0, e7);
          t3.set(i2, n3), n3 += e7, this._chunks[0] = r3.slice(e7), this._totalLength -= e7, e7 -= e7;
        } else t3.set(r3, n3), n3 += r3.byteLength, this._chunks.shift(), this._totalLength -= r3.byteLength, e7 -= r3.byteLength;
      }
      return t3;
    }
  };
})), qM = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.createMessageConnection = e6.ConnectionOptions = e6.MessageStrategy = e6.CancellationStrategy = e6.CancellationSenderStrategy = e6.CancellationReceiverStrategy = e6.RequestCancellationReceiverStrategy = e6.IdCancellationReceiverStrategy = e6.ConnectionStrategy = e6.ConnectionError = e6.ConnectionErrors = e6.LogTraceNotification = e6.SetTraceNotification = e6.TraceFormat = e6.TraceValues = e6.Trace = e6.NullLogger = e6.ProgressType = e6.ProgressToken = void 0;
  var t2 = Aj(), n2 = jj(), r2 = zM(), i2 = BM(), a2 = Mj(), o2 = Nj(), s2;
  (function(e7) {
    e7.type = new r2.NotificationType(`$/cancelRequest`);
  })(s2 || (s2 = {}));
  var c2;
  (function(e7) {
    function t3(e8) {
      return typeof e8 == `string` || typeof e8 == `number`;
    }
    e7.is = t3;
  })(c2 || (e6.ProgressToken = c2 = {}));
  var l2;
  (function(e7) {
    e7.type = new r2.NotificationType(`$/progress`);
  })(l2 || (l2 = {})), e6.ProgressType = class {
    constructor() {
    }
  };
  var u2;
  (function(e7) {
    function t3(e8) {
      return n2.func(e8);
    }
    e7.is = t3;
  })(u2 || (u2 = {})), e6.NullLogger = Object.freeze({ error: () => {
  }, warn: () => {
  }, info: () => {
  }, log: () => {
  } });
  var d2;
  (function(e7) {
    e7[e7.Off = 0] = `Off`, e7[e7.Messages = 1] = `Messages`, e7[e7.Compact = 2] = `Compact`, e7[e7.Verbose = 3] = `Verbose`;
  })(d2 || (e6.Trace = d2 = {}));
  var f2;
  (function(e7) {
    e7.Off = `off`, e7.Messages = `messages`, e7.Compact = `compact`, e7.Verbose = `verbose`;
  })(f2 || (e6.TraceValues = f2 = {})), (function(e7) {
    function t3(t4) {
      if (!n2.string(t4)) return e7.Off;
      switch (t4 = t4.toLowerCase(), t4) {
        case `off`:
          return e7.Off;
        case `messages`:
          return e7.Messages;
        case `compact`:
          return e7.Compact;
        case `verbose`:
          return e7.Verbose;
        default:
          return e7.Off;
      }
    }
    e7.fromString = t3;
    function r3(t4) {
      switch (t4) {
        case e7.Off:
          return `off`;
        case e7.Messages:
          return `messages`;
        case e7.Compact:
          return `compact`;
        case e7.Verbose:
          return `verbose`;
        default:
          return `off`;
      }
    }
    e7.toString = r3;
  })(d2 || (e6.Trace = d2 = {}));
  var p2;
  (function(e7) {
    e7.Text = `text`, e7.JSON = `json`;
  })(p2 || (e6.TraceFormat = p2 = {})), (function(e7) {
    function t3(t4) {
      return n2.string(t4) ? (t4 = t4.toLowerCase(), t4 === `json` ? e7.JSON : e7.Text) : e7.Text;
    }
    e7.fromString = t3;
  })(p2 || (e6.TraceFormat = p2 = {}));
  var m2;
  (function(e7) {
    e7.type = new r2.NotificationType(`$/setTrace`);
  })(m2 || (e6.SetTraceNotification = m2 = {}));
  var h2;
  (function(e7) {
    e7.type = new r2.NotificationType(`$/logTrace`);
  })(h2 || (e6.LogTraceNotification = h2 = {}));
  var g2;
  (function(e7) {
    e7[e7.Closed = 1] = `Closed`, e7[e7.Disposed = 2] = `Disposed`, e7[e7.AlreadyListening = 3] = `AlreadyListening`;
  })(g2 || (e6.ConnectionErrors = g2 = {}));
  var _2 = class e7 extends Error {
    constructor(t3, n3) {
      super(n3), this.code = t3, Object.setPrototypeOf(this, e7.prototype);
    }
  };
  e6.ConnectionError = _2;
  var v2;
  (function(e7) {
    function t3(e8) {
      let t4 = e8;
      return t4 && n2.func(t4.cancelUndispatched);
    }
    e7.is = t3;
  })(v2 || (e6.ConnectionStrategy = v2 = {}));
  var y2;
  (function(e7) {
    function t3(e8) {
      let t4 = e8;
      return t4 && (t4.kind === void 0 || t4.kind === `id`) && n2.func(t4.createCancellationTokenSource) && (t4.dispose === void 0 || n2.func(t4.dispose));
    }
    e7.is = t3;
  })(y2 || (e6.IdCancellationReceiverStrategy = y2 = {}));
  var b2;
  (function(e7) {
    function t3(e8) {
      let t4 = e8;
      return t4 && t4.kind === `request` && n2.func(t4.createCancellationTokenSource) && (t4.dispose === void 0 || n2.func(t4.dispose));
    }
    e7.is = t3;
  })(b2 || (e6.RequestCancellationReceiverStrategy = b2 = {}));
  var x2;
  (function(e7) {
    e7.Message = Object.freeze({ createCancellationTokenSource(e8) {
      return new o2.CancellationTokenSource();
    } });
    function t3(e8) {
      return y2.is(e8) || b2.is(e8);
    }
    e7.is = t3;
  })(x2 || (e6.CancellationReceiverStrategy = x2 = {}));
  var S2;
  (function(e7) {
    e7.Message = Object.freeze({ sendCancellation(e8, t4) {
      return e8.sendNotification(s2.type, { id: t4 });
    }, cleanup(e8) {
    } });
    function t3(e8) {
      let t4 = e8;
      return t4 && n2.func(t4.sendCancellation) && n2.func(t4.cleanup);
    }
    e7.is = t3;
  })(S2 || (e6.CancellationSenderStrategy = S2 = {}));
  var C2;
  (function(e7) {
    e7.Message = Object.freeze({ receiver: x2.Message, sender: S2.Message });
    function t3(e8) {
      let t4 = e8;
      return t4 && x2.is(t4.receiver) && S2.is(t4.sender);
    }
    e7.is = t3;
  })(C2 || (e6.CancellationStrategy = C2 = {}));
  var w2;
  (function(e7) {
    function t3(e8) {
      let t4 = e8;
      return t4 && n2.func(t4.handleMessage);
    }
    e7.is = t3;
  })(w2 || (e6.MessageStrategy = w2 = {}));
  var T2;
  (function(e7) {
    function t3(e8) {
      let t4 = e8;
      return t4 && (C2.is(t4.cancellationStrategy) || v2.is(t4.connectionStrategy) || w2.is(t4.messageStrategy));
    }
    e7.is = t3;
  })(T2 || (e6.ConnectionOptions = T2 = {}));
  var ee2;
  (function(e7) {
    e7[e7.New = 1] = `New`, e7[e7.Listening = 2] = `Listening`, e7[e7.Closed = 3] = `Closed`, e7[e7.Disposed = 4] = `Disposed`;
  })(ee2 || (ee2 = {}));
  function te2(f3, v3, b3, x3) {
    let S3 = b3 === void 0 ? e6.NullLogger : b3, T3 = 0, te3 = 0, ne2 = 0, E2, D2 = /* @__PURE__ */ new Map(), re2, ie2 = /* @__PURE__ */ new Map(), ae2 = /* @__PURE__ */ new Map(), oe2, se2 = new i2.LinkedMap(), ce2 = /* @__PURE__ */ new Map(), O2 = /* @__PURE__ */ new Set(), le2 = /* @__PURE__ */ new Map(), k2 = d2.Off, ue2 = p2.Text, A2, j2 = ee2.New, de2 = new a2.Emitter(), fe2 = new a2.Emitter(), pe2 = new a2.Emitter(), me2 = new a2.Emitter(), he2 = new a2.Emitter(), ge2 = x3 && x3.cancellationStrategy ? x3.cancellationStrategy : C2.Message;
    function _e3(e7) {
      if (e7 === null) throw Error(`Can't send requests with id null since the response can't be correlated.`);
      return `req-` + e7.toString();
    }
    function ve2(e7) {
      return e7 === null ? `res-unknown-` + (++ne2).toString() : `res-` + e7.toString();
    }
    function ye2() {
      return `not-` + (++te3).toString();
    }
    function be2(e7, t3) {
      r2.Message.isRequest(t3) ? e7.set(_e3(t3.id), t3) : r2.Message.isResponse(t3) ? e7.set(ve2(t3.id), t3) : e7.set(ye2(), t3);
    }
    function xe2(e7) {
    }
    function Se2() {
      return j2 === ee2.Listening;
    }
    function Ce2() {
      return j2 === ee2.Closed;
    }
    function M2() {
      return j2 === ee2.Disposed;
    }
    function we2() {
      (j2 === ee2.New || j2 === ee2.Listening) && (j2 = ee2.Closed, fe2.fire(void 0));
    }
    function Te2(e7) {
      de2.fire([e7, void 0, void 0]);
    }
    function Ee2(e7) {
      de2.fire(e7);
    }
    f3.onClose(we2), f3.onError(Te2), v3.onClose(we2), v3.onError(Ee2);
    function De2() {
      oe2 || se2.size === 0 || (oe2 = (0, t2.default)().timer.setImmediate(() => {
        oe2 = void 0, ke2();
      }));
    }
    function Oe2(e7) {
      r2.Message.isRequest(e7) ? je2(e7) : r2.Message.isNotification(e7) ? Ne2(e7) : r2.Message.isResponse(e7) ? Me2(e7) : Pe2(e7);
    }
    function ke2() {
      if (se2.size === 0) return;
      let e7 = se2.shift();
      try {
        let t3 = x3 == null ? void 0 : x3.messageStrategy;
        w2.is(t3) ? t3.handleMessage(e7, Oe2) : Oe2(e7);
      } finally {
        De2();
      }
    }
    let Ae2 = (e7) => {
      try {
        if (r2.Message.isNotification(e7) && e7.method === s2.type.method) {
          let t3 = e7.params.id, n3 = _e3(t3), i3 = se2.get(n3);
          if (r2.Message.isRequest(i3)) {
            let r3 = x3 == null ? void 0 : x3.connectionStrategy, a4 = r3 && r3.cancelUndispatched ? r3.cancelUndispatched(i3, xe2) : void 0;
            if (a4 && (a4.error !== void 0 || a4.result !== void 0)) {
              se2.delete(n3), le2.delete(t3), a4.id = i3.id, Re2(a4, e7.method, Date.now()), v3.write(a4).catch(() => S3.error(`Sending response for canceled message failed.`));
              return;
            }
          }
          let a3 = le2.get(t3);
          if (a3 !== void 0) {
            a3.cancel(), Be2(e7);
            return;
          } else O2.add(t3);
        }
        be2(se2, e7);
      } finally {
        De2();
      }
    };
    function je2(e7) {
      if (M2()) return;
      function t3(t4, n3, i4) {
        let a4 = { jsonrpc: `2.0`, id: e7.id };
        t4 instanceof r2.ResponseError ? a4.error = t4.toJson() : a4.result = t4 === void 0 ? null : t4, Re2(a4, n3, i4), v3.write(a4).catch(() => S3.error(`Sending response failed.`));
      }
      function i3(t4, n3, r3) {
        let i4 = { jsonrpc: `2.0`, id: e7.id, error: t4.toJson() };
        Re2(i4, n3, r3), v3.write(i4).catch(() => S3.error(`Sending response failed.`));
      }
      function a3(t4, n3, r3) {
        t4 === void 0 && (t4 = null);
        let i4 = { jsonrpc: `2.0`, id: e7.id, result: t4 };
        Re2(i4, n3, r3), v3.write(i4).catch(() => S3.error(`Sending response failed.`));
      }
      ze2(e7);
      let o3 = D2.get(e7.method), s3, c3;
      o3 && (s3 = o3.type, c3 = o3.handler);
      let l3 = Date.now();
      if (c3 || E2) {
        let o4 = e7.id ?? String(Date.now()), u3 = y2.is(ge2.receiver) ? ge2.receiver.createCancellationTokenSource(o4) : ge2.receiver.createCancellationTokenSource(e7);
        e7.id !== null && O2.has(e7.id) && u3.cancel(), e7.id !== null && le2.set(o4, u3);
        try {
          let d3;
          if (c3) if (e7.params === void 0) {
            if (s3 !== void 0 && s3.numberOfParams !== 0) {
              i3(new r2.ResponseError(r2.ErrorCodes.InvalidParams, `Request ${e7.method} defines ${s3.numberOfParams} params but received none.`), e7.method, l3);
              return;
            }
            d3 = c3(u3.token);
          } else if (Array.isArray(e7.params)) {
            if (s3 !== void 0 && s3.parameterStructures === r2.ParameterStructures.byName) {
              i3(new r2.ResponseError(r2.ErrorCodes.InvalidParams, `Request ${e7.method} defines parameters by name but received parameters by position`), e7.method, l3);
              return;
            }
            d3 = c3(...e7.params, u3.token);
          } else {
            if (s3 !== void 0 && s3.parameterStructures === r2.ParameterStructures.byPosition) {
              i3(new r2.ResponseError(r2.ErrorCodes.InvalidParams, `Request ${e7.method} defines parameters by position but received parameters by name`), e7.method, l3);
              return;
            }
            d3 = c3(e7.params, u3.token);
          }
          else E2 && (d3 = E2(e7.method, e7.params, u3.token));
          let f4 = d3;
          d3 ? f4.then ? f4.then((n3) => {
            le2.delete(o4), t3(n3, e7.method, l3);
          }, (t4) => {
            le2.delete(o4), t4 instanceof r2.ResponseError ? i3(t4, e7.method, l3) : t4 && n2.string(t4.message) ? i3(new r2.ResponseError(r2.ErrorCodes.InternalError, `Request ${e7.method} failed with message: ${t4.message}`), e7.method, l3) : i3(new r2.ResponseError(r2.ErrorCodes.InternalError, `Request ${e7.method} failed unexpectedly without providing any details.`), e7.method, l3);
          }) : (le2.delete(o4), t3(d3, e7.method, l3)) : (le2.delete(o4), a3(d3, e7.method, l3));
        } catch (a4) {
          le2.delete(o4), a4 instanceof r2.ResponseError ? t3(a4, e7.method, l3) : a4 && n2.string(a4.message) ? i3(new r2.ResponseError(r2.ErrorCodes.InternalError, `Request ${e7.method} failed with message: ${a4.message}`), e7.method, l3) : i3(new r2.ResponseError(r2.ErrorCodes.InternalError, `Request ${e7.method} failed unexpectedly without providing any details.`), e7.method, l3);
        }
      } else i3(new r2.ResponseError(r2.ErrorCodes.MethodNotFound, `Unhandled method ${e7.method}`), e7.method, l3);
    }
    function Me2(e7) {
      if (!M2()) if (e7.id === null) e7.error ? S3.error(`Received response message without id: Error is: 
${JSON.stringify(e7.error, void 0, 4)}`) : S3.error(`Received response message without id. No further error information provided.`);
      else {
        let t3 = e7.id, n3 = ce2.get(t3);
        if (Ve2(e7, n3), n3 !== void 0) {
          ce2.delete(t3);
          try {
            if (e7.error) {
              let t4 = e7.error;
              n3.reject(new r2.ResponseError(t4.code, t4.message, t4.data));
            } else if (e7.result !== void 0) n3.resolve(e7.result);
            else throw Error(`Should never happen.`);
          } catch (e8) {
            e8.message ? S3.error(`Response handler '${n3.method}' failed with message: ${e8.message}`) : S3.error(`Response handler '${n3.method}' failed unexpectedly.`);
          }
        }
      }
    }
    function Ne2(e7) {
      if (M2()) return;
      let t3, n3;
      if (e7.method === s2.type.method) {
        let t4 = e7.params.id;
        O2.delete(t4), Be2(e7);
        return;
      } else {
        let r3 = ie2.get(e7.method);
        r3 && (n3 = r3.handler, t3 = r3.type);
      }
      if (n3 || re2) try {
        if (Be2(e7), n3) if (e7.params === void 0) t3 !== void 0 && t3.numberOfParams !== 0 && t3.parameterStructures !== r2.ParameterStructures.byName && S3.error(`Notification ${e7.method} defines ${t3.numberOfParams} params but received none.`), n3();
        else if (Array.isArray(e7.params)) {
          let i3 = e7.params;
          e7.method === l2.type.method && i3.length === 2 && c2.is(i3[0]) ? n3({ token: i3[0], value: i3[1] }) : (t3 !== void 0 && (t3.parameterStructures === r2.ParameterStructures.byName && S3.error(`Notification ${e7.method} defines parameters by name but received parameters by position`), t3.numberOfParams !== e7.params.length && S3.error(`Notification ${e7.method} defines ${t3.numberOfParams} params but received ${i3.length} arguments`)), n3(...i3));
        } else t3 !== void 0 && t3.parameterStructures === r2.ParameterStructures.byPosition && S3.error(`Notification ${e7.method} defines parameters by position but received parameters by name`), n3(e7.params);
        else re2 && re2(e7.method, e7.params);
      } catch (t4) {
        t4.message ? S3.error(`Notification handler '${e7.method}' failed with message: ${t4.message}`) : S3.error(`Notification handler '${e7.method}' failed unexpectedly.`);
      }
      else pe2.fire(e7);
    }
    function Pe2(e7) {
      if (!e7) {
        S3.error(`Received empty message.`);
        return;
      }
      S3.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(e7, null, 4)}`);
      let t3 = e7;
      if (n2.string(t3.id) || n2.number(t3.id)) {
        let e8 = t3.id, n3 = ce2.get(e8);
        n3 && n3.reject(Error(`The received response has neither a result nor an error property.`));
      }
    }
    function Fe2(e7) {
      if (e7 != null) switch (k2) {
        case d2.Verbose:
          return JSON.stringify(e7, null, 4);
        case d2.Compact:
          return JSON.stringify(e7);
        default:
          return;
      }
    }
    function Ie2(e7) {
      if (!(k2 === d2.Off || !A2)) if (ue2 === p2.Text) {
        let t3;
        (k2 === d2.Verbose || k2 === d2.Compact) && e7.params && (t3 = `Params: ${Fe2(e7.params)}

`), A2.log(`Sending request '${e7.method} - (${e7.id})'.`, t3);
      } else He2(`send-request`, e7);
    }
    function Le2(e7) {
      if (!(k2 === d2.Off || !A2)) if (ue2 === p2.Text) {
        let t3;
        (k2 === d2.Verbose || k2 === d2.Compact) && (t3 = e7.params ? `Params: ${Fe2(e7.params)}

` : `No parameters provided.

`), A2.log(`Sending notification '${e7.method}'.`, t3);
      } else He2(`send-notification`, e7);
    }
    function Re2(e7, t3, n3) {
      if (!(k2 === d2.Off || !A2)) if (ue2 === p2.Text) {
        let r3;
        (k2 === d2.Verbose || k2 === d2.Compact) && (e7.error && e7.error.data ? r3 = `Error data: ${Fe2(e7.error.data)}

` : e7.result ? r3 = `Result: ${Fe2(e7.result)}

` : e7.error === void 0 && (r3 = `No result returned.

`)), A2.log(`Sending response '${t3} - (${e7.id})'. Processing request took ${Date.now() - n3}ms`, r3);
      } else He2(`send-response`, e7);
    }
    function ze2(e7) {
      if (!(k2 === d2.Off || !A2)) if (ue2 === p2.Text) {
        let t3;
        (k2 === d2.Verbose || k2 === d2.Compact) && e7.params && (t3 = `Params: ${Fe2(e7.params)}

`), A2.log(`Received request '${e7.method} - (${e7.id})'.`, t3);
      } else He2(`receive-request`, e7);
    }
    function Be2(e7) {
      if (!(k2 === d2.Off || !A2 || e7.method === h2.type.method)) if (ue2 === p2.Text) {
        let t3;
        (k2 === d2.Verbose || k2 === d2.Compact) && (t3 = e7.params ? `Params: ${Fe2(e7.params)}

` : `No parameters provided.

`), A2.log(`Received notification '${e7.method}'.`, t3);
      } else He2(`receive-notification`, e7);
    }
    function Ve2(e7, t3) {
      if (!(k2 === d2.Off || !A2)) if (ue2 === p2.Text) {
        let n3;
        if ((k2 === d2.Verbose || k2 === d2.Compact) && (e7.error && e7.error.data ? n3 = `Error data: ${Fe2(e7.error.data)}

` : e7.result ? n3 = `Result: ${Fe2(e7.result)}

` : e7.error === void 0 && (n3 = `No result returned.

`)), t3) {
          let r3 = e7.error ? ` Request failed: ${e7.error.message} (${e7.error.code}).` : ``;
          A2.log(`Received response '${t3.method} - (${e7.id})' in ${Date.now() - t3.timerStart}ms.${r3}`, n3);
        } else A2.log(`Received response ${e7.id} without active response promise.`, n3);
      } else He2(`receive-response`, e7);
    }
    function He2(e7, t3) {
      if (!A2 || k2 === d2.Off) return;
      let n3 = { isLSPMessage: true, type: e7, message: t3, timestamp: Date.now() };
      A2.log(n3);
    }
    function Ue2() {
      if (Ce2()) throw new _2(g2.Closed, `Connection is closed.`);
      if (M2()) throw new _2(g2.Disposed, `Connection is disposed.`);
    }
    function We2() {
      if (Se2()) throw new _2(g2.AlreadyListening, `Connection is already listening`);
    }
    function Ge2() {
      if (!Se2()) throw Error(`Call listen() first.`);
    }
    function Ke2(e7) {
      return e7 === void 0 ? null : e7;
    }
    function qe2(e7) {
      if (e7 !== null) return e7;
    }
    function Je2(e7) {
      return e7 != null && !Array.isArray(e7) && typeof e7 == `object`;
    }
    function Ye2(e7, t3) {
      switch (e7) {
        case r2.ParameterStructures.auto:
          return Je2(t3) ? qe2(t3) : [Ke2(t3)];
        case r2.ParameterStructures.byName:
          if (!Je2(t3)) throw Error(`Received parameters by name but param is not an object literal.`);
          return qe2(t3);
        case r2.ParameterStructures.byPosition:
          return [Ke2(t3)];
        default:
          throw Error(`Unknown parameter structure ${e7.toString()}`);
      }
    }
    function Xe2(e7, t3) {
      let n3, r3 = e7.numberOfParams;
      switch (r3) {
        case 0:
          n3 = void 0;
          break;
        case 1:
          n3 = Ye2(e7.parameterStructures, t3[0]);
          break;
        default:
          n3 = [];
          for (let e8 = 0; e8 < t3.length && e8 < r3; e8++) n3.push(Ke2(t3[e8]));
          if (t3.length < r3) for (let e8 = t3.length; e8 < r3; e8++) n3.push(null);
          break;
      }
      return n3;
    }
    let Ze2 = { sendNotification: (e7, ...t3) => {
      Ue2();
      let i3, a3;
      if (n2.string(e7)) {
        i3 = e7;
        let n3 = t3[0], o4 = 0, s3 = r2.ParameterStructures.auto;
        r2.ParameterStructures.is(n3) && (o4 = 1, s3 = n3);
        let c3 = t3.length, l3 = c3 - o4;
        switch (l3) {
          case 0:
            a3 = void 0;
            break;
          case 1:
            a3 = Ye2(s3, t3[o4]);
            break;
          default:
            if (s3 === r2.ParameterStructures.byName) throw Error(`Received ${l3} parameters for 'by Name' notification parameter structure.`);
            a3 = t3.slice(o4, c3).map((e8) => Ke2(e8));
            break;
        }
      } else {
        let n3 = t3;
        i3 = e7.method, a3 = Xe2(e7, n3);
      }
      let o3 = { jsonrpc: `2.0`, method: i3, params: a3 };
      return Le2(o3), v3.write(o3).catch((e8) => {
        throw S3.error(`Sending notification failed.`), e8;
      });
    }, onNotification: (e7, t3) => {
      Ue2();
      let r3;
      return n2.func(e7) ? re2 = e7 : t3 && (n2.string(e7) ? (r3 = e7, ie2.set(e7, { type: void 0, handler: t3 })) : (r3 = e7.method, ie2.set(e7.method, { type: e7, handler: t3 }))), { dispose: () => {
        r3 === void 0 ? re2 = void 0 : ie2.delete(r3);
      } };
    }, onProgress: (e7, t3, n3) => {
      if (ae2.has(t3)) throw Error(`Progress handler for token ${t3} already registered`);
      return ae2.set(t3, n3), { dispose: () => {
        ae2.delete(t3);
      } };
    }, sendProgress: (e7, t3, n3) => Ze2.sendNotification(l2.type, { token: t3, value: n3 }), onUnhandledProgress: me2.event, sendRequest: (e7, ...t3) => {
      Ue2(), Ge2();
      let i3, a3, s3;
      if (n2.string(e7)) {
        i3 = e7;
        let n3 = t3[0], c4 = t3[t3.length - 1], l4 = 0, u4 = r2.ParameterStructures.auto;
        r2.ParameterStructures.is(n3) && (l4 = 1, u4 = n3);
        let d3 = t3.length;
        o2.CancellationToken.is(c4) && (--d3, s3 = c4);
        let f4 = d3 - l4;
        switch (f4) {
          case 0:
            a3 = void 0;
            break;
          case 1:
            a3 = Ye2(u4, t3[l4]);
            break;
          default:
            if (u4 === r2.ParameterStructures.byName) throw Error(`Received ${f4} parameters for 'by Name' request parameter structure.`);
            a3 = t3.slice(l4, d3).map((e8) => Ke2(e8));
            break;
        }
      } else {
        let n3 = t3;
        i3 = e7.method, a3 = Xe2(e7, n3);
        let r3 = e7.numberOfParams;
        s3 = o2.CancellationToken.is(n3[r3]) ? n3[r3] : void 0;
      }
      let c3 = T3++, l3;
      s3 && (l3 = s3.onCancellationRequested(() => {
        let e8 = ge2.sender.sendCancellation(Ze2, c3);
        return e8 === void 0 ? (S3.log(`Received no promise from cancellation strategy when cancelling id ${c3}`), Promise.resolve()) : e8.catch(() => {
          S3.log(`Sending cancellation messages for id ${c3} failed`);
        });
      }));
      let u3 = { jsonrpc: `2.0`, id: c3, method: i3, params: a3 };
      return Ie2(u3), typeof ge2.sender.enableCancellation == `function` && ge2.sender.enableCancellation(u3), new Promise(async (e8, t4) => {
        let n3 = { method: i3, timerStart: Date.now(), resolve: (t5) => {
          e8(t5), ge2.sender.cleanup(c3), l3 == null ? void 0 : l3.dispose();
        }, reject: (e9) => {
          t4(e9), ge2.sender.cleanup(c3), l3 == null ? void 0 : l3.dispose();
        } };
        try {
          await v3.write(u3), ce2.set(c3, n3);
        } catch (e9) {
          throw S3.error(`Sending request failed.`), n3.reject(new r2.ResponseError(r2.ErrorCodes.MessageWriteError, e9.message ? e9.message : `Unknown reason`)), e9;
        }
      });
    }, onRequest: (e7, t3) => {
      Ue2();
      let r3 = null;
      return u2.is(e7) ? (r3 = void 0, E2 = e7) : n2.string(e7) ? (r3 = null, t3 !== void 0 && (r3 = e7, D2.set(e7, { handler: t3, type: void 0 }))) : t3 !== void 0 && (r3 = e7.method, D2.set(e7.method, { type: e7, handler: t3 })), { dispose: () => {
        r3 !== null && (r3 === void 0 ? E2 = void 0 : D2.delete(r3));
      } };
    }, hasPendingResponse: () => ce2.size > 0, trace: async (e7, t3, r3) => {
      let i3 = false, a3 = p2.Text;
      r3 !== void 0 && (n2.boolean(r3) ? i3 = r3 : (i3 = r3.sendNotification || false, a3 = r3.traceFormat || p2.Text)), k2 = e7, ue2 = a3, A2 = k2 === d2.Off ? void 0 : t3, i3 && !Ce2() && !M2() && await Ze2.sendNotification(m2.type, { value: d2.toString(e7) });
    }, onError: de2.event, onClose: fe2.event, onUnhandledNotification: pe2.event, onDispose: he2.event, end: () => {
      v3.end();
    }, dispose: () => {
      if (M2()) return;
      j2 = ee2.Disposed, he2.fire(void 0);
      let e7 = new r2.ResponseError(r2.ErrorCodes.PendingResponseRejected, `Pending response rejected since connection got disposed`);
      for (let t3 of ce2.values()) t3.reject(e7);
      ce2 = /* @__PURE__ */ new Map(), le2 = /* @__PURE__ */ new Map(), O2 = /* @__PURE__ */ new Set(), se2 = new i2.LinkedMap(), n2.func(v3.dispose) && v3.dispose(), n2.func(f3.dispose) && f3.dispose();
    }, listen: () => {
      Ue2(), We2(), j2 = ee2.Listening, f3.listen(Ae2);
    }, inspect: () => {
      (0, t2.default)().console.log(`inspect`);
    } };
    return Ze2.onNotification(h2.type, (e7) => {
      if (k2 === d2.Off || !A2) return;
      let t3 = k2 === d2.Verbose || k2 === d2.Compact;
      A2.log(e7.message, t3 ? e7.verbose : void 0);
    }), Ze2.onNotification(l2.type, (e7) => {
      let t3 = ae2.get(e7.token);
      t3 ? t3(e7.value) : me2.fire(e7);
    }), Ze2;
  }
  e6.createMessageConnection = te2;
})), JM = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.ProgressType = e6.ProgressToken = e6.createMessageConnection = e6.NullLogger = e6.ConnectionOptions = e6.ConnectionStrategy = e6.AbstractMessageBuffer = e6.WriteableStreamMessageWriter = e6.AbstractMessageWriter = e6.MessageWriter = e6.ReadableStreamMessageReader = e6.AbstractMessageReader = e6.MessageReader = e6.SharedArrayReceiverStrategy = e6.SharedArraySenderStrategy = e6.CancellationToken = e6.CancellationTokenSource = e6.Emitter = e6.Event = e6.Disposable = e6.LRUCache = e6.Touch = e6.LinkedMap = e6.ParameterStructures = e6.NotificationType9 = e6.NotificationType8 = e6.NotificationType7 = e6.NotificationType6 = e6.NotificationType5 = e6.NotificationType4 = e6.NotificationType3 = e6.NotificationType2 = e6.NotificationType1 = e6.NotificationType0 = e6.NotificationType = e6.ErrorCodes = e6.ResponseError = e6.RequestType9 = e6.RequestType8 = e6.RequestType7 = e6.RequestType6 = e6.RequestType5 = e6.RequestType4 = e6.RequestType3 = e6.RequestType2 = e6.RequestType1 = e6.RequestType0 = e6.RequestType = e6.Message = e6.RAL = void 0, e6.MessageStrategy = e6.CancellationStrategy = e6.CancellationSenderStrategy = e6.CancellationReceiverStrategy = e6.ConnectionError = e6.ConnectionErrors = e6.LogTraceNotification = e6.SetTraceNotification = e6.TraceFormat = e6.TraceValues = e6.Trace = void 0;
  var t2 = zM();
  Object.defineProperty(e6, `Message`, { enumerable: true, get: function() {
    return t2.Message;
  } }), Object.defineProperty(e6, `RequestType`, { enumerable: true, get: function() {
    return t2.RequestType;
  } }), Object.defineProperty(e6, `RequestType0`, { enumerable: true, get: function() {
    return t2.RequestType0;
  } }), Object.defineProperty(e6, `RequestType1`, { enumerable: true, get: function() {
    return t2.RequestType1;
  } }), Object.defineProperty(e6, `RequestType2`, { enumerable: true, get: function() {
    return t2.RequestType2;
  } }), Object.defineProperty(e6, `RequestType3`, { enumerable: true, get: function() {
    return t2.RequestType3;
  } }), Object.defineProperty(e6, `RequestType4`, { enumerable: true, get: function() {
    return t2.RequestType4;
  } }), Object.defineProperty(e6, `RequestType5`, { enumerable: true, get: function() {
    return t2.RequestType5;
  } }), Object.defineProperty(e6, `RequestType6`, { enumerable: true, get: function() {
    return t2.RequestType6;
  } }), Object.defineProperty(e6, `RequestType7`, { enumerable: true, get: function() {
    return t2.RequestType7;
  } }), Object.defineProperty(e6, `RequestType8`, { enumerable: true, get: function() {
    return t2.RequestType8;
  } }), Object.defineProperty(e6, `RequestType9`, { enumerable: true, get: function() {
    return t2.RequestType9;
  } }), Object.defineProperty(e6, `ResponseError`, { enumerable: true, get: function() {
    return t2.ResponseError;
  } }), Object.defineProperty(e6, `ErrorCodes`, { enumerable: true, get: function() {
    return t2.ErrorCodes;
  } }), Object.defineProperty(e6, `NotificationType`, { enumerable: true, get: function() {
    return t2.NotificationType;
  } }), Object.defineProperty(e6, `NotificationType0`, { enumerable: true, get: function() {
    return t2.NotificationType0;
  } }), Object.defineProperty(e6, `NotificationType1`, { enumerable: true, get: function() {
    return t2.NotificationType1;
  } }), Object.defineProperty(e6, `NotificationType2`, { enumerable: true, get: function() {
    return t2.NotificationType2;
  } }), Object.defineProperty(e6, `NotificationType3`, { enumerable: true, get: function() {
    return t2.NotificationType3;
  } }), Object.defineProperty(e6, `NotificationType4`, { enumerable: true, get: function() {
    return t2.NotificationType4;
  } }), Object.defineProperty(e6, `NotificationType5`, { enumerable: true, get: function() {
    return t2.NotificationType5;
  } }), Object.defineProperty(e6, `NotificationType6`, { enumerable: true, get: function() {
    return t2.NotificationType6;
  } }), Object.defineProperty(e6, `NotificationType7`, { enumerable: true, get: function() {
    return t2.NotificationType7;
  } }), Object.defineProperty(e6, `NotificationType8`, { enumerable: true, get: function() {
    return t2.NotificationType8;
  } }), Object.defineProperty(e6, `NotificationType9`, { enumerable: true, get: function() {
    return t2.NotificationType9;
  } }), Object.defineProperty(e6, `ParameterStructures`, { enumerable: true, get: function() {
    return t2.ParameterStructures;
  } });
  var n2 = BM();
  Object.defineProperty(e6, `LinkedMap`, { enumerable: true, get: function() {
    return n2.LinkedMap;
  } }), Object.defineProperty(e6, `LRUCache`, { enumerable: true, get: function() {
    return n2.LRUCache;
  } }), Object.defineProperty(e6, `Touch`, { enumerable: true, get: function() {
    return n2.Touch;
  } });
  var r2 = VM();
  Object.defineProperty(e6, `Disposable`, { enumerable: true, get: function() {
    return r2.Disposable;
  } });
  var i2 = Mj();
  Object.defineProperty(e6, `Event`, { enumerable: true, get: function() {
    return i2.Event;
  } }), Object.defineProperty(e6, `Emitter`, { enumerable: true, get: function() {
    return i2.Emitter;
  } });
  var a2 = Nj();
  Object.defineProperty(e6, `CancellationTokenSource`, { enumerable: true, get: function() {
    return a2.CancellationTokenSource;
  } }), Object.defineProperty(e6, `CancellationToken`, { enumerable: true, get: function() {
    return a2.CancellationToken;
  } });
  var o2 = HM();
  Object.defineProperty(e6, `SharedArraySenderStrategy`, { enumerable: true, get: function() {
    return o2.SharedArraySenderStrategy;
  } }), Object.defineProperty(e6, `SharedArrayReceiverStrategy`, { enumerable: true, get: function() {
    return o2.SharedArrayReceiverStrategy;
  } });
  var s2 = WM();
  Object.defineProperty(e6, `MessageReader`, { enumerable: true, get: function() {
    return s2.MessageReader;
  } }), Object.defineProperty(e6, `AbstractMessageReader`, { enumerable: true, get: function() {
    return s2.AbstractMessageReader;
  } }), Object.defineProperty(e6, `ReadableStreamMessageReader`, { enumerable: true, get: function() {
    return s2.ReadableStreamMessageReader;
  } });
  var c2 = GM();
  Object.defineProperty(e6, `MessageWriter`, { enumerable: true, get: function() {
    return c2.MessageWriter;
  } }), Object.defineProperty(e6, `AbstractMessageWriter`, { enumerable: true, get: function() {
    return c2.AbstractMessageWriter;
  } }), Object.defineProperty(e6, `WriteableStreamMessageWriter`, { enumerable: true, get: function() {
    return c2.WriteableStreamMessageWriter;
  } });
  var l2 = KM();
  Object.defineProperty(e6, `AbstractMessageBuffer`, { enumerable: true, get: function() {
    return l2.AbstractMessageBuffer;
  } });
  var u2 = qM();
  Object.defineProperty(e6, `ConnectionStrategy`, { enumerable: true, get: function() {
    return u2.ConnectionStrategy;
  } }), Object.defineProperty(e6, `ConnectionOptions`, { enumerable: true, get: function() {
    return u2.ConnectionOptions;
  } }), Object.defineProperty(e6, `NullLogger`, { enumerable: true, get: function() {
    return u2.NullLogger;
  } }), Object.defineProperty(e6, `createMessageConnection`, { enumerable: true, get: function() {
    return u2.createMessageConnection;
  } }), Object.defineProperty(e6, `ProgressToken`, { enumerable: true, get: function() {
    return u2.ProgressToken;
  } }), Object.defineProperty(e6, `ProgressType`, { enumerable: true, get: function() {
    return u2.ProgressType;
  } }), Object.defineProperty(e6, `Trace`, { enumerable: true, get: function() {
    return u2.Trace;
  } }), Object.defineProperty(e6, `TraceValues`, { enumerable: true, get: function() {
    return u2.TraceValues;
  } }), Object.defineProperty(e6, `TraceFormat`, { enumerable: true, get: function() {
    return u2.TraceFormat;
  } }), Object.defineProperty(e6, `SetTraceNotification`, { enumerable: true, get: function() {
    return u2.SetTraceNotification;
  } }), Object.defineProperty(e6, `LogTraceNotification`, { enumerable: true, get: function() {
    return u2.LogTraceNotification;
  } }), Object.defineProperty(e6, `ConnectionErrors`, { enumerable: true, get: function() {
    return u2.ConnectionErrors;
  } }), Object.defineProperty(e6, `ConnectionError`, { enumerable: true, get: function() {
    return u2.ConnectionError;
  } }), Object.defineProperty(e6, `CancellationReceiverStrategy`, { enumerable: true, get: function() {
    return u2.CancellationReceiverStrategy;
  } }), Object.defineProperty(e6, `CancellationSenderStrategy`, { enumerable: true, get: function() {
    return u2.CancellationSenderStrategy;
  } }), Object.defineProperty(e6, `CancellationStrategy`, { enumerable: true, get: function() {
    return u2.CancellationStrategy;
  } }), Object.defineProperty(e6, `MessageStrategy`, { enumerable: true, get: function() {
    return u2.MessageStrategy;
  } }), e6.RAL = Aj().default;
})), YM = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true });
  var t2 = JM(), n2 = class e7 extends t2.AbstractMessageBuffer {
    constructor(e8 = `utf-8`) {
      super(e8), this.asciiDecoder = new TextDecoder(`ascii`);
    }
    emptyBuffer() {
      return e7.emptyBuffer;
    }
    fromString(e8, t3) {
      return new TextEncoder().encode(e8);
    }
    toString(e8, t3) {
      return t3 === `ascii` ? this.asciiDecoder.decode(e8) : new TextDecoder(t3).decode(e8);
    }
    asNative(e8, t3) {
      return t3 === void 0 ? e8 : e8.slice(0, t3);
    }
    allocNative(e8) {
      return new Uint8Array(e8);
    }
  };
  n2.emptyBuffer = new Uint8Array();
  var r2 = class {
    constructor(e7) {
      this.socket = e7, this._onData = new t2.Emitter(), this._messageListener = (e8) => {
        e8.data.arrayBuffer().then((e9) => {
          this._onData.fire(new Uint8Array(e9));
        }, () => {
          (0, t2.RAL)().console.error(`Converting blob to array buffer failed.`);
        });
      }, this.socket.addEventListener(`message`, this._messageListener);
    }
    onClose(e7) {
      return this.socket.addEventListener(`close`, e7), t2.Disposable.create(() => this.socket.removeEventListener(`close`, e7));
    }
    onError(e7) {
      return this.socket.addEventListener(`error`, e7), t2.Disposable.create(() => this.socket.removeEventListener(`error`, e7));
    }
    onEnd(e7) {
      return this.socket.addEventListener(`end`, e7), t2.Disposable.create(() => this.socket.removeEventListener(`end`, e7));
    }
    onData(e7) {
      return this._onData.event(e7);
    }
  }, i2 = class {
    constructor(e7) {
      this.socket = e7;
    }
    onClose(e7) {
      return this.socket.addEventListener(`close`, e7), t2.Disposable.create(() => this.socket.removeEventListener(`close`, e7));
    }
    onError(e7) {
      return this.socket.addEventListener(`error`, e7), t2.Disposable.create(() => this.socket.removeEventListener(`error`, e7));
    }
    onEnd(e7) {
      return this.socket.addEventListener(`end`, e7), t2.Disposable.create(() => this.socket.removeEventListener(`end`, e7));
    }
    write(e7, t3) {
      if (typeof e7 == `string`) {
        if (t3 !== void 0 && t3 !== `utf-8`) throw Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${t3}`);
        this.socket.send(e7);
      } else this.socket.send(e7);
      return Promise.resolve();
    }
    end() {
      this.socket.close();
    }
  }, a2 = new TextEncoder(), o2 = Object.freeze({ messageBuffer: Object.freeze({ create: (e7) => new n2(e7) }), applicationJson: Object.freeze({ encoder: Object.freeze({ name: `application/json`, encode: (e7, t3) => {
    if (t3.charset !== `utf-8`) throw Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${t3.charset}`);
    return Promise.resolve(a2.encode(JSON.stringify(e7, void 0, 0)));
  } }), decoder: Object.freeze({ name: `application/json`, decode: (e7, t3) => {
    if (!(e7 instanceof Uint8Array)) throw Error(`In a Browser environments only Uint8Arrays are supported.`);
    return Promise.resolve(JSON.parse(new TextDecoder(t3.charset).decode(e7)));
  } }) }), stream: Object.freeze({ asReadableStream: (e7) => new r2(e7), asWritableStream: (e7) => new i2(e7) }), console, timer: Object.freeze({ setTimeout(e7, t3, ...n3) {
    let r3 = setTimeout(e7, t3, ...n3);
    return { dispose: () => clearTimeout(r3) };
  }, setImmediate(e7, ...t3) {
    let n3 = setTimeout(e7, 0, ...t3);
    return { dispose: () => clearTimeout(n3) };
  }, setInterval(e7, t3, ...n3) {
    let r3 = setInterval(e7, t3, ...n3);
    return { dispose: () => clearInterval(r3) };
  } }) });
  function s2() {
    return o2;
  }
  (function(e7) {
    function n3() {
      t2.RAL.install(o2);
    }
    e7.install = n3;
  })(s2 || (s2 = {})), e6.default = s2;
})), XM = a(((e6) => {
  var t2 = e6 && e6.__createBinding || (Object.create ? (function(e7, t3, n3, r3) {
    r3 === void 0 && (r3 = n3);
    var i3 = Object.getOwnPropertyDescriptor(t3, n3);
    (!i3 || (`get` in i3 ? !t3.__esModule : i3.writable || i3.configurable)) && (i3 = { enumerable: true, get: function() {
      return t3[n3];
    } }), Object.defineProperty(e7, r3, i3);
  }) : (function(e7, t3, n3, r3) {
    r3 === void 0 && (r3 = n3), e7[r3] = t3[n3];
  })), n2 = e6 && e6.__exportStar || function(e7, n3) {
    for (var r3 in e7) r3 !== `default` && !Object.prototype.hasOwnProperty.call(n3, r3) && t2(n3, e7, r3);
  };
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.createMessageConnection = e6.BrowserMessageWriter = e6.BrowserMessageReader = void 0, YM().default.install();
  var r2 = JM();
  n2(JM(), e6), e6.BrowserMessageReader = class extends r2.AbstractMessageReader {
    constructor(e7) {
      super(), this._onData = new r2.Emitter(), this._messageListener = (e8) => {
        this._onData.fire(e8.data);
      }, e7.addEventListener(`error`, (e8) => this.fireError(e8)), e7.onmessage = this._messageListener;
    }
    listen(e7) {
      return this._onData.event(e7);
    }
  }, e6.BrowserMessageWriter = class extends r2.AbstractMessageWriter {
    constructor(e7) {
      super(), this.port = e7, this.errorCount = 0, e7.addEventListener(`error`, (e8) => this.fireError(e8));
    }
    write(e7) {
      try {
        return this.port.postMessage(e7), Promise.resolve();
      } catch (t3) {
        return this.handleError(t3, e7), Promise.reject(t3);
      }
    }
    handleError(e7, t3) {
      this.errorCount++, this.fireError(e7, t3, this.errorCount);
    }
    end() {
    }
  };
  function i2(e7, t3, n3, i3) {
    return n3 === void 0 && (n3 = r2.NullLogger), r2.ConnectionStrategy.is(i3) && (i3 = { connectionStrategy: i3 }), (0, r2.createMessageConnection)(e7, t3, n3, i3);
  }
  e6.createMessageConnection = i2;
})), ZM = a(((e6, t2) => {
  t2.exports = XM();
})), Q = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.ProtocolNotificationType = e6.ProtocolNotificationType0 = e6.ProtocolRequestType = e6.ProtocolRequestType0 = e6.RegistrationType = e6.MessageDirection = void 0;
  var t2 = XM(), n2;
  (function(e7) {
    e7.clientToServer = `clientToServer`, e7.serverToClient = `serverToClient`, e7.both = `both`;
  })(n2 || (e6.MessageDirection = n2 = {})), e6.RegistrationType = class {
    constructor(e7) {
      this.method = e7;
    }
  }, e6.ProtocolRequestType0 = class extends t2.RequestType0 {
    constructor(e7) {
      super(e7);
    }
  }, e6.ProtocolRequestType = class extends t2.RequestType {
    constructor(e7) {
      super(e7, t2.ParameterStructures.byName);
    }
  }, e6.ProtocolNotificationType0 = class extends t2.NotificationType0 {
    constructor(e7) {
      super(e7);
    }
  }, e6.ProtocolNotificationType = class extends t2.NotificationType {
    constructor(e7) {
      super(e7, t2.ParameterStructures.byName);
    }
  };
})), QM = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.objectLiteral = e6.typedArray = e6.stringArray = e6.array = e6.func = e6.error = e6.number = e6.string = e6.boolean = void 0;
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
  function c2(e7, t3) {
    return Array.isArray(e7) && e7.every(t3);
  }
  e6.typedArray = c2;
  function l2(e7) {
    return typeof e7 == `object` && !!e7;
  }
  e6.objectLiteral = l2;
})), $M = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.ImplementationRequest = void 0;
  var t2 = Q(), n2;
  (function(e7) {
    e7.method = `textDocument/implementation`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolRequestType(e7.method);
  })(n2 || (e6.ImplementationRequest = n2 = {}));
})), eN = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.TypeDefinitionRequest = void 0;
  var t2 = Q(), n2;
  (function(e7) {
    e7.method = `textDocument/typeDefinition`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolRequestType(e7.method);
  })(n2 || (e6.TypeDefinitionRequest = n2 = {}));
})), tN = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.DidChangeWorkspaceFoldersNotification = e6.WorkspaceFoldersRequest = void 0;
  var t2 = Q(), n2;
  (function(e7) {
    e7.method = `workspace/workspaceFolders`, e7.messageDirection = t2.MessageDirection.serverToClient, e7.type = new t2.ProtocolRequestType0(e7.method);
  })(n2 || (e6.WorkspaceFoldersRequest = n2 = {}));
  var r2;
  (function(e7) {
    e7.method = `workspace/didChangeWorkspaceFolders`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolNotificationType(e7.method);
  })(r2 || (e6.DidChangeWorkspaceFoldersNotification = r2 = {}));
})), nN = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.ConfigurationRequest = void 0;
  var t2 = Q(), n2;
  (function(e7) {
    e7.method = `workspace/configuration`, e7.messageDirection = t2.MessageDirection.serverToClient, e7.type = new t2.ProtocolRequestType(e7.method);
  })(n2 || (e6.ConfigurationRequest = n2 = {}));
})), rN = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.ColorPresentationRequest = e6.DocumentColorRequest = void 0;
  var t2 = Q(), n2;
  (function(e7) {
    e7.method = `textDocument/documentColor`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolRequestType(e7.method);
  })(n2 || (e6.DocumentColorRequest = n2 = {}));
  var r2;
  (function(e7) {
    e7.method = `textDocument/colorPresentation`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolRequestType(e7.method);
  })(r2 || (e6.ColorPresentationRequest = r2 = {}));
})), iN = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.FoldingRangeRefreshRequest = e6.FoldingRangeRequest = void 0;
  var t2 = Q(), n2;
  (function(e7) {
    e7.method = `textDocument/foldingRange`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolRequestType(e7.method);
  })(n2 || (e6.FoldingRangeRequest = n2 = {}));
  var r2;
  (function(e7) {
    e7.method = `workspace/foldingRange/refresh`, e7.messageDirection = t2.MessageDirection.serverToClient, e7.type = new t2.ProtocolRequestType0(e7.method);
  })(r2 || (e6.FoldingRangeRefreshRequest = r2 = {}));
})), aN = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.DeclarationRequest = void 0;
  var t2 = Q(), n2;
  (function(e7) {
    e7.method = `textDocument/declaration`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolRequestType(e7.method);
  })(n2 || (e6.DeclarationRequest = n2 = {}));
})), oN = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.SelectionRangeRequest = void 0;
  var t2 = Q(), n2;
  (function(e7) {
    e7.method = `textDocument/selectionRange`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolRequestType(e7.method);
  })(n2 || (e6.SelectionRangeRequest = n2 = {}));
})), sN = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.WorkDoneProgressCancelNotification = e6.WorkDoneProgressCreateRequest = e6.WorkDoneProgress = void 0;
  var t2 = XM(), n2 = Q(), r2;
  (function(e7) {
    e7.type = new t2.ProgressType();
    function n3(t3) {
      return t3 === e7.type;
    }
    e7.is = n3;
  })(r2 || (e6.WorkDoneProgress = r2 = {}));
  var i2;
  (function(e7) {
    e7.method = `window/workDoneProgress/create`, e7.messageDirection = n2.MessageDirection.serverToClient, e7.type = new n2.ProtocolRequestType(e7.method);
  })(i2 || (e6.WorkDoneProgressCreateRequest = i2 = {}));
  var a2;
  (function(e7) {
    e7.method = `window/workDoneProgress/cancel`, e7.messageDirection = n2.MessageDirection.clientToServer, e7.type = new n2.ProtocolNotificationType(e7.method);
  })(a2 || (e6.WorkDoneProgressCancelNotification = a2 = {}));
})), cN = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.CallHierarchyOutgoingCallsRequest = e6.CallHierarchyIncomingCallsRequest = e6.CallHierarchyPrepareRequest = void 0;
  var t2 = Q(), n2;
  (function(e7) {
    e7.method = `textDocument/prepareCallHierarchy`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolRequestType(e7.method);
  })(n2 || (e6.CallHierarchyPrepareRequest = n2 = {}));
  var r2;
  (function(e7) {
    e7.method = `callHierarchy/incomingCalls`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolRequestType(e7.method);
  })(r2 || (e6.CallHierarchyIncomingCallsRequest = r2 = {}));
  var i2;
  (function(e7) {
    e7.method = `callHierarchy/outgoingCalls`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolRequestType(e7.method);
  })(i2 || (e6.CallHierarchyOutgoingCallsRequest = i2 = {}));
})), lN = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.SemanticTokensRefreshRequest = e6.SemanticTokensRangeRequest = e6.SemanticTokensDeltaRequest = e6.SemanticTokensRequest = e6.SemanticTokensRegistrationType = e6.TokenFormat = void 0;
  var t2 = Q(), n2;
  (function(e7) {
    e7.Relative = `relative`;
  })(n2 || (e6.TokenFormat = n2 = {}));
  var r2;
  (function(e7) {
    e7.method = `textDocument/semanticTokens`, e7.type = new t2.RegistrationType(e7.method);
  })(r2 || (e6.SemanticTokensRegistrationType = r2 = {}));
  var i2;
  (function(e7) {
    e7.method = `textDocument/semanticTokens/full`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolRequestType(e7.method), e7.registrationMethod = r2.method;
  })(i2 || (e6.SemanticTokensRequest = i2 = {}));
  var a2;
  (function(e7) {
    e7.method = `textDocument/semanticTokens/full/delta`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolRequestType(e7.method), e7.registrationMethod = r2.method;
  })(a2 || (e6.SemanticTokensDeltaRequest = a2 = {}));
  var o2;
  (function(e7) {
    e7.method = `textDocument/semanticTokens/range`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolRequestType(e7.method), e7.registrationMethod = r2.method;
  })(o2 || (e6.SemanticTokensRangeRequest = o2 = {}));
  var s2;
  (function(e7) {
    e7.method = `workspace/semanticTokens/refresh`, e7.messageDirection = t2.MessageDirection.serverToClient, e7.type = new t2.ProtocolRequestType0(e7.method);
  })(s2 || (e6.SemanticTokensRefreshRequest = s2 = {}));
})), uN = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.ShowDocumentRequest = void 0;
  var t2 = Q(), n2;
  (function(e7) {
    e7.method = `window/showDocument`, e7.messageDirection = t2.MessageDirection.serverToClient, e7.type = new t2.ProtocolRequestType(e7.method);
  })(n2 || (e6.ShowDocumentRequest = n2 = {}));
})), dN = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.LinkedEditingRangeRequest = void 0;
  var t2 = Q(), n2;
  (function(e7) {
    e7.method = `textDocument/linkedEditingRange`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolRequestType(e7.method);
  })(n2 || (e6.LinkedEditingRangeRequest = n2 = {}));
})), fN = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.WillDeleteFilesRequest = e6.DidDeleteFilesNotification = e6.DidRenameFilesNotification = e6.WillRenameFilesRequest = e6.DidCreateFilesNotification = e6.WillCreateFilesRequest = e6.FileOperationPatternKind = void 0;
  var t2 = Q(), n2;
  (function(e7) {
    e7.file = `file`, e7.folder = `folder`;
  })(n2 || (e6.FileOperationPatternKind = n2 = {}));
  var r2;
  (function(e7) {
    e7.method = `workspace/willCreateFiles`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolRequestType(e7.method);
  })(r2 || (e6.WillCreateFilesRequest = r2 = {}));
  var i2;
  (function(e7) {
    e7.method = `workspace/didCreateFiles`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolNotificationType(e7.method);
  })(i2 || (e6.DidCreateFilesNotification = i2 = {}));
  var a2;
  (function(e7) {
    e7.method = `workspace/willRenameFiles`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolRequestType(e7.method);
  })(a2 || (e6.WillRenameFilesRequest = a2 = {}));
  var o2;
  (function(e7) {
    e7.method = `workspace/didRenameFiles`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolNotificationType(e7.method);
  })(o2 || (e6.DidRenameFilesNotification = o2 = {}));
  var s2;
  (function(e7) {
    e7.method = `workspace/didDeleteFiles`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolNotificationType(e7.method);
  })(s2 || (e6.DidDeleteFilesNotification = s2 = {}));
  var c2;
  (function(e7) {
    e7.method = `workspace/willDeleteFiles`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolRequestType(e7.method);
  })(c2 || (e6.WillDeleteFilesRequest = c2 = {}));
})), pN = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.MonikerRequest = e6.MonikerKind = e6.UniquenessLevel = void 0;
  var t2 = Q(), n2;
  (function(e7) {
    e7.document = `document`, e7.project = `project`, e7.group = `group`, e7.scheme = `scheme`, e7.global = `global`;
  })(n2 || (e6.UniquenessLevel = n2 = {}));
  var r2;
  (function(e7) {
    e7.$import = `import`, e7.$export = `export`, e7.local = `local`;
  })(r2 || (e6.MonikerKind = r2 = {}));
  var i2;
  (function(e7) {
    e7.method = `textDocument/moniker`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolRequestType(e7.method);
  })(i2 || (e6.MonikerRequest = i2 = {}));
})), mN = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.TypeHierarchySubtypesRequest = e6.TypeHierarchySupertypesRequest = e6.TypeHierarchyPrepareRequest = void 0;
  var t2 = Q(), n2;
  (function(e7) {
    e7.method = `textDocument/prepareTypeHierarchy`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolRequestType(e7.method);
  })(n2 || (e6.TypeHierarchyPrepareRequest = n2 = {}));
  var r2;
  (function(e7) {
    e7.method = `typeHierarchy/supertypes`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolRequestType(e7.method);
  })(r2 || (e6.TypeHierarchySupertypesRequest = r2 = {}));
  var i2;
  (function(e7) {
    e7.method = `typeHierarchy/subtypes`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolRequestType(e7.method);
  })(i2 || (e6.TypeHierarchySubtypesRequest = i2 = {}));
})), hN = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.InlineValueRefreshRequest = e6.InlineValueRequest = void 0;
  var t2 = Q(), n2;
  (function(e7) {
    e7.method = `textDocument/inlineValue`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolRequestType(e7.method);
  })(n2 || (e6.InlineValueRequest = n2 = {}));
  var r2;
  (function(e7) {
    e7.method = `workspace/inlineValue/refresh`, e7.messageDirection = t2.MessageDirection.serverToClient, e7.type = new t2.ProtocolRequestType0(e7.method);
  })(r2 || (e6.InlineValueRefreshRequest = r2 = {}));
})), gN = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.InlayHintRefreshRequest = e6.InlayHintResolveRequest = e6.InlayHintRequest = void 0;
  var t2 = Q(), n2;
  (function(e7) {
    e7.method = `textDocument/inlayHint`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolRequestType(e7.method);
  })(n2 || (e6.InlayHintRequest = n2 = {}));
  var r2;
  (function(e7) {
    e7.method = `inlayHint/resolve`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolRequestType(e7.method);
  })(r2 || (e6.InlayHintResolveRequest = r2 = {}));
  var i2;
  (function(e7) {
    e7.method = `workspace/inlayHint/refresh`, e7.messageDirection = t2.MessageDirection.serverToClient, e7.type = new t2.ProtocolRequestType0(e7.method);
  })(i2 || (e6.InlayHintRefreshRequest = i2 = {}));
})), _N = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.DiagnosticRefreshRequest = e6.WorkspaceDiagnosticRequest = e6.DocumentDiagnosticRequest = e6.DocumentDiagnosticReportKind = e6.DiagnosticServerCancellationData = void 0;
  var t2 = XM(), n2 = QM(), r2 = Q(), i2;
  (function(e7) {
    function t3(e8) {
      let t4 = e8;
      return t4 && n2.boolean(t4.retriggerRequest);
    }
    e7.is = t3;
  })(i2 || (e6.DiagnosticServerCancellationData = i2 = {}));
  var a2;
  (function(e7) {
    e7.Full = `full`, e7.Unchanged = `unchanged`;
  })(a2 || (e6.DocumentDiagnosticReportKind = a2 = {}));
  var o2;
  (function(e7) {
    e7.method = `textDocument/diagnostic`, e7.messageDirection = r2.MessageDirection.clientToServer, e7.type = new r2.ProtocolRequestType(e7.method), e7.partialResult = new t2.ProgressType();
  })(o2 || (e6.DocumentDiagnosticRequest = o2 = {}));
  var s2;
  (function(e7) {
    e7.method = `workspace/diagnostic`, e7.messageDirection = r2.MessageDirection.clientToServer, e7.type = new r2.ProtocolRequestType(e7.method), e7.partialResult = new t2.ProgressType();
  })(s2 || (e6.WorkspaceDiagnosticRequest = s2 = {}));
  var c2;
  (function(e7) {
    e7.method = `workspace/diagnostic/refresh`, e7.messageDirection = r2.MessageDirection.serverToClient, e7.type = new r2.ProtocolRequestType0(e7.method);
  })(c2 || (e6.DiagnosticRefreshRequest = c2 = {}));
})), vN = a(((t2) => {
  Object.defineProperty(t2, `__esModule`, { value: true }), t2.DidCloseNotebookDocumentNotification = t2.DidSaveNotebookDocumentNotification = t2.DidChangeNotebookDocumentNotification = t2.NotebookCellArrayChange = t2.DidOpenNotebookDocumentNotification = t2.NotebookDocumentSyncRegistrationType = t2.NotebookDocument = t2.NotebookCell = t2.ExecutionSummary = t2.NotebookCellKind = void 0;
  var n2 = (VA(), e(fk)), r2 = QM(), i2 = Q(), a2;
  (function(e6) {
    e6.Markup = 1, e6.Code = 2;
    function t3(e7) {
      return e7 === 1 || e7 === 2;
    }
    e6.is = t3;
  })(a2 || (t2.NotebookCellKind = a2 = {}));
  var o2;
  (function(e6) {
    function t3(e7, t4) {
      let n3 = { executionOrder: e7 };
      return (t4 === true || t4 === false) && (n3.success = t4), n3;
    }
    e6.create = t3;
    function i3(e7) {
      let t4 = e7;
      return r2.objectLiteral(t4) && n2.uinteger.is(t4.executionOrder) && (t4.success === void 0 || r2.boolean(t4.success));
    }
    e6.is = i3;
    function a3(e7, t4) {
      return e7 === t4 ? true : e7 == null || t4 == null ? false : e7.executionOrder === t4.executionOrder && e7.success === t4.success;
    }
    e6.equals = a3;
  })(o2 || (t2.ExecutionSummary = o2 = {}));
  var s2;
  (function(e6) {
    function t3(e7, t4) {
      return { kind: e7, document: t4 };
    }
    e6.create = t3;
    function i3(e7) {
      let t4 = e7;
      return r2.objectLiteral(t4) && a2.is(t4.kind) && n2.DocumentUri.is(t4.document) && (t4.metadata === void 0 || r2.objectLiteral(t4.metadata));
    }
    e6.is = i3;
    function s3(e7, t4) {
      let n3 = /* @__PURE__ */ new Set();
      return e7.document !== t4.document && n3.add(`document`), e7.kind !== t4.kind && n3.add(`kind`), e7.executionSummary !== t4.executionSummary && n3.add(`executionSummary`), (e7.metadata !== void 0 || t4.metadata !== void 0) && !c3(e7.metadata, t4.metadata) && n3.add(`metadata`), (e7.executionSummary !== void 0 || t4.executionSummary !== void 0) && !o2.equals(e7.executionSummary, t4.executionSummary) && n3.add(`executionSummary`), n3;
    }
    e6.diff = s3;
    function c3(e7, t4) {
      if (e7 === t4) return true;
      if (e7 == null || t4 == null || typeof e7 != typeof t4 || typeof e7 != `object`) return false;
      let n3 = Array.isArray(e7), i4 = Array.isArray(t4);
      if (n3 !== i4) return false;
      if (n3 && i4) {
        if (e7.length !== t4.length) return false;
        for (let n4 = 0; n4 < e7.length; n4++) if (!c3(e7[n4], t4[n4])) return false;
      }
      if (r2.objectLiteral(e7) && r2.objectLiteral(t4)) {
        let n4 = Object.keys(e7), r3 = Object.keys(t4);
        if (n4.length !== r3.length || (n4.sort(), r3.sort(), !c3(n4, r3))) return false;
        for (let r4 = 0; r4 < n4.length; r4++) {
          let i5 = n4[r4];
          if (!c3(e7[i5], t4[i5])) return false;
        }
      }
      return true;
    }
  })(s2 || (t2.NotebookCell = s2 = {}));
  var c2;
  (function(e6) {
    function t3(e7, t4, n3, r3) {
      return { uri: e7, notebookType: t4, version: n3, cells: r3 };
    }
    e6.create = t3;
    function i3(e7) {
      let t4 = e7;
      return r2.objectLiteral(t4) && r2.string(t4.uri) && n2.integer.is(t4.version) && r2.typedArray(t4.cells, s2.is);
    }
    e6.is = i3;
  })(c2 || (t2.NotebookDocument = c2 = {}));
  var l2;
  (function(e6) {
    e6.method = `notebookDocument/sync`, e6.messageDirection = i2.MessageDirection.clientToServer, e6.type = new i2.RegistrationType(e6.method);
  })(l2 || (t2.NotebookDocumentSyncRegistrationType = l2 = {}));
  var u2;
  (function(e6) {
    e6.method = `notebookDocument/didOpen`, e6.messageDirection = i2.MessageDirection.clientToServer, e6.type = new i2.ProtocolNotificationType(e6.method), e6.registrationMethod = l2.method;
  })(u2 || (t2.DidOpenNotebookDocumentNotification = u2 = {}));
  var d2;
  (function(e6) {
    function t3(e7) {
      let t4 = e7;
      return r2.objectLiteral(t4) && n2.uinteger.is(t4.start) && n2.uinteger.is(t4.deleteCount) && (t4.cells === void 0 || r2.typedArray(t4.cells, s2.is));
    }
    e6.is = t3;
    function i3(e7, t4, n3) {
      let r3 = { start: e7, deleteCount: t4 };
      return n3 !== void 0 && (r3.cells = n3), r3;
    }
    e6.create = i3;
  })(d2 || (t2.NotebookCellArrayChange = d2 = {}));
  var f2;
  (function(e6) {
    e6.method = `notebookDocument/didChange`, e6.messageDirection = i2.MessageDirection.clientToServer, e6.type = new i2.ProtocolNotificationType(e6.method), e6.registrationMethod = l2.method;
  })(f2 || (t2.DidChangeNotebookDocumentNotification = f2 = {}));
  var p2;
  (function(e6) {
    e6.method = `notebookDocument/didSave`, e6.messageDirection = i2.MessageDirection.clientToServer, e6.type = new i2.ProtocolNotificationType(e6.method), e6.registrationMethod = l2.method;
  })(p2 || (t2.DidSaveNotebookDocumentNotification = p2 = {}));
  var m2;
  (function(e6) {
    e6.method = `notebookDocument/didClose`, e6.messageDirection = i2.MessageDirection.clientToServer, e6.type = new i2.ProtocolNotificationType(e6.method), e6.registrationMethod = l2.method;
  })(m2 || (t2.DidCloseNotebookDocumentNotification = m2 = {}));
})), yN = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.InlineCompletionRequest = void 0;
  var t2 = Q(), n2;
  (function(e7) {
    e7.method = `textDocument/inlineCompletion`, e7.messageDirection = t2.MessageDirection.clientToServer, e7.type = new t2.ProtocolRequestType(e7.method);
  })(n2 || (e6.InlineCompletionRequest = n2 = {}));
})), bN = a(((t2) => {
  Object.defineProperty(t2, `__esModule`, { value: true }), t2.WorkspaceSymbolRequest = t2.CodeActionResolveRequest = t2.CodeActionRequest = t2.DocumentSymbolRequest = t2.DocumentHighlightRequest = t2.ReferencesRequest = t2.DefinitionRequest = t2.SignatureHelpRequest = t2.SignatureHelpTriggerKind = t2.HoverRequest = t2.CompletionResolveRequest = t2.CompletionRequest = t2.CompletionTriggerKind = t2.PublishDiagnosticsNotification = t2.WatchKind = t2.RelativePattern = t2.FileChangeType = t2.DidChangeWatchedFilesNotification = t2.WillSaveTextDocumentWaitUntilRequest = t2.WillSaveTextDocumentNotification = t2.TextDocumentSaveReason = t2.DidSaveTextDocumentNotification = t2.DidCloseTextDocumentNotification = t2.DidChangeTextDocumentNotification = t2.TextDocumentContentChangeEvent = t2.DidOpenTextDocumentNotification = t2.TextDocumentSyncKind = t2.TelemetryEventNotification = t2.LogMessageNotification = t2.ShowMessageRequest = t2.ShowMessageNotification = t2.MessageType = t2.DidChangeConfigurationNotification = t2.ExitNotification = t2.ShutdownRequest = t2.InitializedNotification = t2.InitializeErrorCodes = t2.InitializeRequest = t2.WorkDoneProgressOptions = t2.TextDocumentRegistrationOptions = t2.StaticRegistrationOptions = t2.PositionEncodingKind = t2.FailureHandlingKind = t2.ResourceOperationKind = t2.UnregistrationRequest = t2.RegistrationRequest = t2.DocumentSelector = t2.NotebookCellTextDocumentFilter = t2.NotebookDocumentFilter = t2.TextDocumentFilter = void 0, t2.MonikerRequest = t2.MonikerKind = t2.UniquenessLevel = t2.WillDeleteFilesRequest = t2.DidDeleteFilesNotification = t2.WillRenameFilesRequest = t2.DidRenameFilesNotification = t2.WillCreateFilesRequest = t2.DidCreateFilesNotification = t2.FileOperationPatternKind = t2.LinkedEditingRangeRequest = t2.ShowDocumentRequest = t2.SemanticTokensRegistrationType = t2.SemanticTokensRefreshRequest = t2.SemanticTokensRangeRequest = t2.SemanticTokensDeltaRequest = t2.SemanticTokensRequest = t2.TokenFormat = t2.CallHierarchyPrepareRequest = t2.CallHierarchyOutgoingCallsRequest = t2.CallHierarchyIncomingCallsRequest = t2.WorkDoneProgressCancelNotification = t2.WorkDoneProgressCreateRequest = t2.WorkDoneProgress = t2.SelectionRangeRequest = t2.DeclarationRequest = t2.FoldingRangeRefreshRequest = t2.FoldingRangeRequest = t2.ColorPresentationRequest = t2.DocumentColorRequest = t2.ConfigurationRequest = t2.DidChangeWorkspaceFoldersNotification = t2.WorkspaceFoldersRequest = t2.TypeDefinitionRequest = t2.ImplementationRequest = t2.ApplyWorkspaceEditRequest = t2.ExecuteCommandRequest = t2.PrepareRenameRequest = t2.RenameRequest = t2.PrepareSupportDefaultBehavior = t2.DocumentOnTypeFormattingRequest = t2.DocumentRangesFormattingRequest = t2.DocumentRangeFormattingRequest = t2.DocumentFormattingRequest = t2.DocumentLinkResolveRequest = t2.DocumentLinkRequest = t2.CodeLensRefreshRequest = t2.CodeLensResolveRequest = t2.CodeLensRequest = t2.WorkspaceSymbolResolveRequest = void 0, t2.InlineCompletionRequest = t2.DidCloseNotebookDocumentNotification = t2.DidSaveNotebookDocumentNotification = t2.DidChangeNotebookDocumentNotification = t2.NotebookCellArrayChange = t2.DidOpenNotebookDocumentNotification = t2.NotebookDocumentSyncRegistrationType = t2.NotebookDocument = t2.NotebookCell = t2.ExecutionSummary = t2.NotebookCellKind = t2.DiagnosticRefreshRequest = t2.WorkspaceDiagnosticRequest = t2.DocumentDiagnosticRequest = t2.DocumentDiagnosticReportKind = t2.DiagnosticServerCancellationData = t2.InlayHintRefreshRequest = t2.InlayHintResolveRequest = t2.InlayHintRequest = t2.InlineValueRefreshRequest = t2.InlineValueRequest = t2.TypeHierarchySupertypesRequest = t2.TypeHierarchySubtypesRequest = t2.TypeHierarchyPrepareRequest = void 0;
  var n2 = Q(), r2 = (VA(), e(fk)), i2 = QM(), a2 = $M();
  Object.defineProperty(t2, `ImplementationRequest`, { enumerable: true, get: function() {
    return a2.ImplementationRequest;
  } });
  var o2 = eN();
  Object.defineProperty(t2, `TypeDefinitionRequest`, { enumerable: true, get: function() {
    return o2.TypeDefinitionRequest;
  } });
  var s2 = tN();
  Object.defineProperty(t2, `WorkspaceFoldersRequest`, { enumerable: true, get: function() {
    return s2.WorkspaceFoldersRequest;
  } }), Object.defineProperty(t2, `DidChangeWorkspaceFoldersNotification`, { enumerable: true, get: function() {
    return s2.DidChangeWorkspaceFoldersNotification;
  } });
  var c2 = nN();
  Object.defineProperty(t2, `ConfigurationRequest`, { enumerable: true, get: function() {
    return c2.ConfigurationRequest;
  } });
  var l2 = rN();
  Object.defineProperty(t2, `DocumentColorRequest`, { enumerable: true, get: function() {
    return l2.DocumentColorRequest;
  } }), Object.defineProperty(t2, `ColorPresentationRequest`, { enumerable: true, get: function() {
    return l2.ColorPresentationRequest;
  } });
  var u2 = iN();
  Object.defineProperty(t2, `FoldingRangeRequest`, { enumerable: true, get: function() {
    return u2.FoldingRangeRequest;
  } }), Object.defineProperty(t2, `FoldingRangeRefreshRequest`, { enumerable: true, get: function() {
    return u2.FoldingRangeRefreshRequest;
  } });
  var d2 = aN();
  Object.defineProperty(t2, `DeclarationRequest`, { enumerable: true, get: function() {
    return d2.DeclarationRequest;
  } });
  var f2 = oN();
  Object.defineProperty(t2, `SelectionRangeRequest`, { enumerable: true, get: function() {
    return f2.SelectionRangeRequest;
  } });
  var p2 = sN();
  Object.defineProperty(t2, `WorkDoneProgress`, { enumerable: true, get: function() {
    return p2.WorkDoneProgress;
  } }), Object.defineProperty(t2, `WorkDoneProgressCreateRequest`, { enumerable: true, get: function() {
    return p2.WorkDoneProgressCreateRequest;
  } }), Object.defineProperty(t2, `WorkDoneProgressCancelNotification`, { enumerable: true, get: function() {
    return p2.WorkDoneProgressCancelNotification;
  } });
  var m2 = cN();
  Object.defineProperty(t2, `CallHierarchyIncomingCallsRequest`, { enumerable: true, get: function() {
    return m2.CallHierarchyIncomingCallsRequest;
  } }), Object.defineProperty(t2, `CallHierarchyOutgoingCallsRequest`, { enumerable: true, get: function() {
    return m2.CallHierarchyOutgoingCallsRequest;
  } }), Object.defineProperty(t2, `CallHierarchyPrepareRequest`, { enumerable: true, get: function() {
    return m2.CallHierarchyPrepareRequest;
  } });
  var h2 = lN();
  Object.defineProperty(t2, `TokenFormat`, { enumerable: true, get: function() {
    return h2.TokenFormat;
  } }), Object.defineProperty(t2, `SemanticTokensRequest`, { enumerable: true, get: function() {
    return h2.SemanticTokensRequest;
  } }), Object.defineProperty(t2, `SemanticTokensDeltaRequest`, { enumerable: true, get: function() {
    return h2.SemanticTokensDeltaRequest;
  } }), Object.defineProperty(t2, `SemanticTokensRangeRequest`, { enumerable: true, get: function() {
    return h2.SemanticTokensRangeRequest;
  } }), Object.defineProperty(t2, `SemanticTokensRefreshRequest`, { enumerable: true, get: function() {
    return h2.SemanticTokensRefreshRequest;
  } }), Object.defineProperty(t2, `SemanticTokensRegistrationType`, { enumerable: true, get: function() {
    return h2.SemanticTokensRegistrationType;
  } });
  var g2 = uN();
  Object.defineProperty(t2, `ShowDocumentRequest`, { enumerable: true, get: function() {
    return g2.ShowDocumentRequest;
  } });
  var _2 = dN();
  Object.defineProperty(t2, `LinkedEditingRangeRequest`, { enumerable: true, get: function() {
    return _2.LinkedEditingRangeRequest;
  } });
  var v2 = fN();
  Object.defineProperty(t2, `FileOperationPatternKind`, { enumerable: true, get: function() {
    return v2.FileOperationPatternKind;
  } }), Object.defineProperty(t2, `DidCreateFilesNotification`, { enumerable: true, get: function() {
    return v2.DidCreateFilesNotification;
  } }), Object.defineProperty(t2, `WillCreateFilesRequest`, { enumerable: true, get: function() {
    return v2.WillCreateFilesRequest;
  } }), Object.defineProperty(t2, `DidRenameFilesNotification`, { enumerable: true, get: function() {
    return v2.DidRenameFilesNotification;
  } }), Object.defineProperty(t2, `WillRenameFilesRequest`, { enumerable: true, get: function() {
    return v2.WillRenameFilesRequest;
  } }), Object.defineProperty(t2, `DidDeleteFilesNotification`, { enumerable: true, get: function() {
    return v2.DidDeleteFilesNotification;
  } }), Object.defineProperty(t2, `WillDeleteFilesRequest`, { enumerable: true, get: function() {
    return v2.WillDeleteFilesRequest;
  } });
  var y2 = pN();
  Object.defineProperty(t2, `UniquenessLevel`, { enumerable: true, get: function() {
    return y2.UniquenessLevel;
  } }), Object.defineProperty(t2, `MonikerKind`, { enumerable: true, get: function() {
    return y2.MonikerKind;
  } }), Object.defineProperty(t2, `MonikerRequest`, { enumerable: true, get: function() {
    return y2.MonikerRequest;
  } });
  var b2 = mN();
  Object.defineProperty(t2, `TypeHierarchyPrepareRequest`, { enumerable: true, get: function() {
    return b2.TypeHierarchyPrepareRequest;
  } }), Object.defineProperty(t2, `TypeHierarchySubtypesRequest`, { enumerable: true, get: function() {
    return b2.TypeHierarchySubtypesRequest;
  } }), Object.defineProperty(t2, `TypeHierarchySupertypesRequest`, { enumerable: true, get: function() {
    return b2.TypeHierarchySupertypesRequest;
  } });
  var x2 = hN();
  Object.defineProperty(t2, `InlineValueRequest`, { enumerable: true, get: function() {
    return x2.InlineValueRequest;
  } }), Object.defineProperty(t2, `InlineValueRefreshRequest`, { enumerable: true, get: function() {
    return x2.InlineValueRefreshRequest;
  } });
  var S2 = gN();
  Object.defineProperty(t2, `InlayHintRequest`, { enumerable: true, get: function() {
    return S2.InlayHintRequest;
  } }), Object.defineProperty(t2, `InlayHintResolveRequest`, { enumerable: true, get: function() {
    return S2.InlayHintResolveRequest;
  } }), Object.defineProperty(t2, `InlayHintRefreshRequest`, { enumerable: true, get: function() {
    return S2.InlayHintRefreshRequest;
  } });
  var C2 = _N();
  Object.defineProperty(t2, `DiagnosticServerCancellationData`, { enumerable: true, get: function() {
    return C2.DiagnosticServerCancellationData;
  } }), Object.defineProperty(t2, `DocumentDiagnosticReportKind`, { enumerable: true, get: function() {
    return C2.DocumentDiagnosticReportKind;
  } }), Object.defineProperty(t2, `DocumentDiagnosticRequest`, { enumerable: true, get: function() {
    return C2.DocumentDiagnosticRequest;
  } }), Object.defineProperty(t2, `WorkspaceDiagnosticRequest`, { enumerable: true, get: function() {
    return C2.WorkspaceDiagnosticRequest;
  } }), Object.defineProperty(t2, `DiagnosticRefreshRequest`, { enumerable: true, get: function() {
    return C2.DiagnosticRefreshRequest;
  } });
  var w2 = vN();
  Object.defineProperty(t2, `NotebookCellKind`, { enumerable: true, get: function() {
    return w2.NotebookCellKind;
  } }), Object.defineProperty(t2, `ExecutionSummary`, { enumerable: true, get: function() {
    return w2.ExecutionSummary;
  } }), Object.defineProperty(t2, `NotebookCell`, { enumerable: true, get: function() {
    return w2.NotebookCell;
  } }), Object.defineProperty(t2, `NotebookDocument`, { enumerable: true, get: function() {
    return w2.NotebookDocument;
  } }), Object.defineProperty(t2, `NotebookDocumentSyncRegistrationType`, { enumerable: true, get: function() {
    return w2.NotebookDocumentSyncRegistrationType;
  } }), Object.defineProperty(t2, `DidOpenNotebookDocumentNotification`, { enumerable: true, get: function() {
    return w2.DidOpenNotebookDocumentNotification;
  } }), Object.defineProperty(t2, `NotebookCellArrayChange`, { enumerable: true, get: function() {
    return w2.NotebookCellArrayChange;
  } }), Object.defineProperty(t2, `DidChangeNotebookDocumentNotification`, { enumerable: true, get: function() {
    return w2.DidChangeNotebookDocumentNotification;
  } }), Object.defineProperty(t2, `DidSaveNotebookDocumentNotification`, { enumerable: true, get: function() {
    return w2.DidSaveNotebookDocumentNotification;
  } }), Object.defineProperty(t2, `DidCloseNotebookDocumentNotification`, { enumerable: true, get: function() {
    return w2.DidCloseNotebookDocumentNotification;
  } });
  var T2 = yN();
  Object.defineProperty(t2, `InlineCompletionRequest`, { enumerable: true, get: function() {
    return T2.InlineCompletionRequest;
  } });
  var ee2;
  (function(e6) {
    function t3(e7) {
      let t4 = e7;
      return i2.string(t4) || i2.string(t4.language) || i2.string(t4.scheme) || i2.string(t4.pattern);
    }
    e6.is = t3;
  })(ee2 || (t2.TextDocumentFilter = ee2 = {}));
  var te2;
  (function(e6) {
    function t3(e7) {
      let t4 = e7;
      return i2.objectLiteral(t4) && (i2.string(t4.notebookType) || i2.string(t4.scheme) || i2.string(t4.pattern));
    }
    e6.is = t3;
  })(te2 || (t2.NotebookDocumentFilter = te2 = {}));
  var ne2;
  (function(e6) {
    function t3(e7) {
      let t4 = e7;
      return i2.objectLiteral(t4) && (i2.string(t4.notebook) || te2.is(t4.notebook)) && (t4.language === void 0 || i2.string(t4.language));
    }
    e6.is = t3;
  })(ne2 || (t2.NotebookCellTextDocumentFilter = ne2 = {}));
  var E2;
  (function(e6) {
    function t3(e7) {
      if (!Array.isArray(e7)) return false;
      for (let t4 of e7) if (!i2.string(t4) && !ee2.is(t4) && !ne2.is(t4)) return false;
      return true;
    }
    e6.is = t3;
  })(E2 || (t2.DocumentSelector = E2 = {}));
  var D2;
  (function(e6) {
    e6.method = `client/registerCapability`, e6.messageDirection = n2.MessageDirection.serverToClient, e6.type = new n2.ProtocolRequestType(e6.method);
  })(D2 || (t2.RegistrationRequest = D2 = {}));
  var re2;
  (function(e6) {
    e6.method = `client/unregisterCapability`, e6.messageDirection = n2.MessageDirection.serverToClient, e6.type = new n2.ProtocolRequestType(e6.method);
  })(re2 || (t2.UnregistrationRequest = re2 = {}));
  var ie2;
  (function(e6) {
    e6.Create = `create`, e6.Rename = `rename`, e6.Delete = `delete`;
  })(ie2 || (t2.ResourceOperationKind = ie2 = {}));
  var ae2;
  (function(e6) {
    e6.Abort = `abort`, e6.Transactional = `transactional`, e6.TextOnlyTransactional = `textOnlyTransactional`, e6.Undo = `undo`;
  })(ae2 || (t2.FailureHandlingKind = ae2 = {}));
  var oe2;
  (function(e6) {
    e6.UTF8 = `utf-8`, e6.UTF16 = `utf-16`, e6.UTF32 = `utf-32`;
  })(oe2 || (t2.PositionEncodingKind = oe2 = {}));
  var se2;
  (function(e6) {
    function t3(e7) {
      let t4 = e7;
      return t4 && i2.string(t4.id) && t4.id.length > 0;
    }
    e6.hasId = t3;
  })(se2 || (t2.StaticRegistrationOptions = se2 = {}));
  var ce2;
  (function(e6) {
    function t3(e7) {
      let t4 = e7;
      return t4 && (t4.documentSelector === null || E2.is(t4.documentSelector));
    }
    e6.is = t3;
  })(ce2 || (t2.TextDocumentRegistrationOptions = ce2 = {}));
  var O2;
  (function(e6) {
    function t3(e7) {
      let t4 = e7;
      return i2.objectLiteral(t4) && (t4.workDoneProgress === void 0 || i2.boolean(t4.workDoneProgress));
    }
    e6.is = t3;
    function n3(e7) {
      let t4 = e7;
      return t4 && i2.boolean(t4.workDoneProgress);
    }
    e6.hasWorkDoneProgress = n3;
  })(O2 || (t2.WorkDoneProgressOptions = O2 = {}));
  var le2;
  (function(e6) {
    e6.method = `initialize`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolRequestType(e6.method);
  })(le2 || (t2.InitializeRequest = le2 = {}));
  var k2;
  (function(e6) {
    e6.unknownProtocolVersion = 1;
  })(k2 || (t2.InitializeErrorCodes = k2 = {}));
  var ue2;
  (function(e6) {
    e6.method = `initialized`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolNotificationType(e6.method);
  })(ue2 || (t2.InitializedNotification = ue2 = {}));
  var A2;
  (function(e6) {
    e6.method = `shutdown`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolRequestType0(e6.method);
  })(A2 || (t2.ShutdownRequest = A2 = {}));
  var j2;
  (function(e6) {
    e6.method = `exit`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolNotificationType0(e6.method);
  })(j2 || (t2.ExitNotification = j2 = {}));
  var de2;
  (function(e6) {
    e6.method = `workspace/didChangeConfiguration`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolNotificationType(e6.method);
  })(de2 || (t2.DidChangeConfigurationNotification = de2 = {}));
  var fe2;
  (function(e6) {
    e6.Error = 1, e6.Warning = 2, e6.Info = 3, e6.Log = 4, e6.Debug = 5;
  })(fe2 || (t2.MessageType = fe2 = {}));
  var pe2;
  (function(e6) {
    e6.method = `window/showMessage`, e6.messageDirection = n2.MessageDirection.serverToClient, e6.type = new n2.ProtocolNotificationType(e6.method);
  })(pe2 || (t2.ShowMessageNotification = pe2 = {}));
  var me2;
  (function(e6) {
    e6.method = `window/showMessageRequest`, e6.messageDirection = n2.MessageDirection.serverToClient, e6.type = new n2.ProtocolRequestType(e6.method);
  })(me2 || (t2.ShowMessageRequest = me2 = {}));
  var he2;
  (function(e6) {
    e6.method = `window/logMessage`, e6.messageDirection = n2.MessageDirection.serverToClient, e6.type = new n2.ProtocolNotificationType(e6.method);
  })(he2 || (t2.LogMessageNotification = he2 = {}));
  var ge2;
  (function(e6) {
    e6.method = `telemetry/event`, e6.messageDirection = n2.MessageDirection.serverToClient, e6.type = new n2.ProtocolNotificationType(e6.method);
  })(ge2 || (t2.TelemetryEventNotification = ge2 = {}));
  var _e3;
  (function(e6) {
    e6.None = 0, e6.Full = 1, e6.Incremental = 2;
  })(_e3 || (t2.TextDocumentSyncKind = _e3 = {}));
  var ve2;
  (function(e6) {
    e6.method = `textDocument/didOpen`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolNotificationType(e6.method);
  })(ve2 || (t2.DidOpenTextDocumentNotification = ve2 = {}));
  var ye2;
  (function(e6) {
    function t3(e7) {
      let t4 = e7;
      return t4 != null && typeof t4.text == `string` && t4.range !== void 0 && (t4.rangeLength === void 0 || typeof t4.rangeLength == `number`);
    }
    e6.isIncremental = t3;
    function n3(e7) {
      let t4 = e7;
      return t4 != null && typeof t4.text == `string` && t4.range === void 0 && t4.rangeLength === void 0;
    }
    e6.isFull = n3;
  })(ye2 || (t2.TextDocumentContentChangeEvent = ye2 = {}));
  var be2;
  (function(e6) {
    e6.method = `textDocument/didChange`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolNotificationType(e6.method);
  })(be2 || (t2.DidChangeTextDocumentNotification = be2 = {}));
  var xe2;
  (function(e6) {
    e6.method = `textDocument/didClose`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolNotificationType(e6.method);
  })(xe2 || (t2.DidCloseTextDocumentNotification = xe2 = {}));
  var Se2;
  (function(e6) {
    e6.method = `textDocument/didSave`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolNotificationType(e6.method);
  })(Se2 || (t2.DidSaveTextDocumentNotification = Se2 = {}));
  var Ce2;
  (function(e6) {
    e6.Manual = 1, e6.AfterDelay = 2, e6.FocusOut = 3;
  })(Ce2 || (t2.TextDocumentSaveReason = Ce2 = {}));
  var M2;
  (function(e6) {
    e6.method = `textDocument/willSave`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolNotificationType(e6.method);
  })(M2 || (t2.WillSaveTextDocumentNotification = M2 = {}));
  var we2;
  (function(e6) {
    e6.method = `textDocument/willSaveWaitUntil`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolRequestType(e6.method);
  })(we2 || (t2.WillSaveTextDocumentWaitUntilRequest = we2 = {}));
  var Te2;
  (function(e6) {
    e6.method = `workspace/didChangeWatchedFiles`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolNotificationType(e6.method);
  })(Te2 || (t2.DidChangeWatchedFilesNotification = Te2 = {}));
  var Ee2;
  (function(e6) {
    e6.Created = 1, e6.Changed = 2, e6.Deleted = 3;
  })(Ee2 || (t2.FileChangeType = Ee2 = {}));
  var De2;
  (function(e6) {
    function t3(e7) {
      let t4 = e7;
      return i2.objectLiteral(t4) && (r2.URI.is(t4.baseUri) || r2.WorkspaceFolder.is(t4.baseUri)) && i2.string(t4.pattern);
    }
    e6.is = t3;
  })(De2 || (t2.RelativePattern = De2 = {}));
  var Oe2;
  (function(e6) {
    e6.Create = 1, e6.Change = 2, e6.Delete = 4;
  })(Oe2 || (t2.WatchKind = Oe2 = {}));
  var ke2;
  (function(e6) {
    e6.method = `textDocument/publishDiagnostics`, e6.messageDirection = n2.MessageDirection.serverToClient, e6.type = new n2.ProtocolNotificationType(e6.method);
  })(ke2 || (t2.PublishDiagnosticsNotification = ke2 = {}));
  var Ae2;
  (function(e6) {
    e6.Invoked = 1, e6.TriggerCharacter = 2, e6.TriggerForIncompleteCompletions = 3;
  })(Ae2 || (t2.CompletionTriggerKind = Ae2 = {}));
  var je2;
  (function(e6) {
    e6.method = `textDocument/completion`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolRequestType(e6.method);
  })(je2 || (t2.CompletionRequest = je2 = {}));
  var Me2;
  (function(e6) {
    e6.method = `completionItem/resolve`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolRequestType(e6.method);
  })(Me2 || (t2.CompletionResolveRequest = Me2 = {}));
  var Ne2;
  (function(e6) {
    e6.method = `textDocument/hover`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolRequestType(e6.method);
  })(Ne2 || (t2.HoverRequest = Ne2 = {}));
  var Pe2;
  (function(e6) {
    e6.Invoked = 1, e6.TriggerCharacter = 2, e6.ContentChange = 3;
  })(Pe2 || (t2.SignatureHelpTriggerKind = Pe2 = {}));
  var Fe2;
  (function(e6) {
    e6.method = `textDocument/signatureHelp`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolRequestType(e6.method);
  })(Fe2 || (t2.SignatureHelpRequest = Fe2 = {}));
  var Ie2;
  (function(e6) {
    e6.method = `textDocument/definition`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolRequestType(e6.method);
  })(Ie2 || (t2.DefinitionRequest = Ie2 = {}));
  var Le2;
  (function(e6) {
    e6.method = `textDocument/references`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolRequestType(e6.method);
  })(Le2 || (t2.ReferencesRequest = Le2 = {}));
  var Re2;
  (function(e6) {
    e6.method = `textDocument/documentHighlight`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolRequestType(e6.method);
  })(Re2 || (t2.DocumentHighlightRequest = Re2 = {}));
  var ze2;
  (function(e6) {
    e6.method = `textDocument/documentSymbol`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolRequestType(e6.method);
  })(ze2 || (t2.DocumentSymbolRequest = ze2 = {}));
  var Be2;
  (function(e6) {
    e6.method = `textDocument/codeAction`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolRequestType(e6.method);
  })(Be2 || (t2.CodeActionRequest = Be2 = {}));
  var Ve2;
  (function(e6) {
    e6.method = `codeAction/resolve`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolRequestType(e6.method);
  })(Ve2 || (t2.CodeActionResolveRequest = Ve2 = {}));
  var He2;
  (function(e6) {
    e6.method = `workspace/symbol`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolRequestType(e6.method);
  })(He2 || (t2.WorkspaceSymbolRequest = He2 = {}));
  var Ue2;
  (function(e6) {
    e6.method = `workspaceSymbol/resolve`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolRequestType(e6.method);
  })(Ue2 || (t2.WorkspaceSymbolResolveRequest = Ue2 = {}));
  var We2;
  (function(e6) {
    e6.method = `textDocument/codeLens`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolRequestType(e6.method);
  })(We2 || (t2.CodeLensRequest = We2 = {}));
  var Ge2;
  (function(e6) {
    e6.method = `codeLens/resolve`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolRequestType(e6.method);
  })(Ge2 || (t2.CodeLensResolveRequest = Ge2 = {}));
  var Ke2;
  (function(e6) {
    e6.method = `workspace/codeLens/refresh`, e6.messageDirection = n2.MessageDirection.serverToClient, e6.type = new n2.ProtocolRequestType0(e6.method);
  })(Ke2 || (t2.CodeLensRefreshRequest = Ke2 = {}));
  var qe2;
  (function(e6) {
    e6.method = `textDocument/documentLink`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolRequestType(e6.method);
  })(qe2 || (t2.DocumentLinkRequest = qe2 = {}));
  var Je2;
  (function(e6) {
    e6.method = `documentLink/resolve`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolRequestType(e6.method);
  })(Je2 || (t2.DocumentLinkResolveRequest = Je2 = {}));
  var Ye2;
  (function(e6) {
    e6.method = `textDocument/formatting`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolRequestType(e6.method);
  })(Ye2 || (t2.DocumentFormattingRequest = Ye2 = {}));
  var Xe2;
  (function(e6) {
    e6.method = `textDocument/rangeFormatting`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolRequestType(e6.method);
  })(Xe2 || (t2.DocumentRangeFormattingRequest = Xe2 = {}));
  var Ze2;
  (function(e6) {
    e6.method = `textDocument/rangesFormatting`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolRequestType(e6.method);
  })(Ze2 || (t2.DocumentRangesFormattingRequest = Ze2 = {}));
  var Qe2;
  (function(e6) {
    e6.method = `textDocument/onTypeFormatting`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolRequestType(e6.method);
  })(Qe2 || (t2.DocumentOnTypeFormattingRequest = Qe2 = {}));
  var $e2;
  (function(e6) {
    e6.Identifier = 1;
  })($e2 || (t2.PrepareSupportDefaultBehavior = $e2 = {}));
  var et2;
  (function(e6) {
    e6.method = `textDocument/rename`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolRequestType(e6.method);
  })(et2 || (t2.RenameRequest = et2 = {}));
  var tt2;
  (function(e6) {
    e6.method = `textDocument/prepareRename`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolRequestType(e6.method);
  })(tt2 || (t2.PrepareRenameRequest = tt2 = {}));
  var nt2;
  (function(e6) {
    e6.method = `workspace/executeCommand`, e6.messageDirection = n2.MessageDirection.clientToServer, e6.type = new n2.ProtocolRequestType(e6.method);
  })(nt2 || (t2.ExecuteCommandRequest = nt2 = {}));
  var rt2;
  (function(e6) {
    e6.method = `workspace/applyEdit`, e6.messageDirection = n2.MessageDirection.serverToClient, e6.type = new n2.ProtocolRequestType(`workspace/applyEdit`);
  })(rt2 || (t2.ApplyWorkspaceEditRequest = rt2 = {}));
})), xN = a(((e6) => {
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.createProtocolConnection = void 0;
  var t2 = XM();
  function n2(e7, n3, r2, i2) {
    return t2.ConnectionStrategy.is(i2) && (i2 = { connectionStrategy: i2 }), (0, t2.createMessageConnection)(e7, n3, r2, i2);
  }
  e6.createProtocolConnection = n2;
})), SN = a(((t2) => {
  var n2 = t2 && t2.__createBinding || (Object.create ? (function(e6, t3, n3, r3) {
    r3 === void 0 && (r3 = n3);
    var i3 = Object.getOwnPropertyDescriptor(t3, n3);
    (!i3 || (`get` in i3 ? !t3.__esModule : i3.writable || i3.configurable)) && (i3 = { enumerable: true, get: function() {
      return t3[n3];
    } }), Object.defineProperty(e6, r3, i3);
  }) : (function(e6, t3, n3, r3) {
    r3 === void 0 && (r3 = n3), e6[r3] = t3[n3];
  })), r2 = t2 && t2.__exportStar || function(e6, t3) {
    for (var r3 in e6) r3 !== `default` && !Object.prototype.hasOwnProperty.call(t3, r3) && n2(t3, e6, r3);
  };
  Object.defineProperty(t2, `__esModule`, { value: true }), t2.LSPErrorCodes = t2.createProtocolConnection = void 0, r2(XM(), t2), r2((VA(), e(fk)), t2), r2(Q(), t2), r2(bN(), t2);
  var i2 = xN();
  Object.defineProperty(t2, `createProtocolConnection`, { enumerable: true, get: function() {
    return i2.createProtocolConnection;
  } });
  var a2;
  (function(e6) {
    e6.lspReservedErrorRangeStart = -32899, e6.RequestFailed = -32803, e6.ServerCancelled = -32802, e6.ContentModified = -32801, e6.RequestCancelled = -32800, e6.lspReservedErrorRangeEnd = -32800;
  })(a2 || (t2.LSPErrorCodes = a2 = {}));
})), CN = a(((e6) => {
  var t2 = e6 && e6.__createBinding || (Object.create ? (function(e7, t3, n3, r3) {
    r3 === void 0 && (r3 = n3);
    var i3 = Object.getOwnPropertyDescriptor(t3, n3);
    (!i3 || (`get` in i3 ? !t3.__esModule : i3.writable || i3.configurable)) && (i3 = { enumerable: true, get: function() {
      return t3[n3];
    } }), Object.defineProperty(e7, r3, i3);
  }) : (function(e7, t3, n3, r3) {
    r3 === void 0 && (r3 = n3), e7[r3] = t3[n3];
  })), n2 = e6 && e6.__exportStar || function(e7, n3) {
    for (var r3 in e7) r3 !== `default` && !Object.prototype.hasOwnProperty.call(n3, r3) && t2(n3, e7, r3);
  };
  Object.defineProperty(e6, `__esModule`, { value: true }), e6.createProtocolConnection = void 0;
  var r2 = ZM();
  n2(ZM(), e6), n2(SN(), e6);
  function i2(e7, t3, n3, i3) {
    return (0, r2.createMessageConnection)(e7, t3, n3, i3);
  }
  e6.createProtocolConnection = i2;
})), wN;
(function(e6) {
  function t2(e7) {
    return { dispose: async () => await e7() };
  }
  e6.create = t2;
})(wN || (wN = {}));
var TN = CN(), EN = class {
  constructor(e6) {
    this.updateBuildOptions = { validation: { categories: [`built-in`, `fast`] } }, this.updateListeners = [], this.buildPhaseListeners = new cM(), this.documentPhaseListeners = new cM(), this.buildState = /* @__PURE__ */ new Map(), this.documentBuildWaiters = /* @__PURE__ */ new Map(), this.currentState = Z.Changed, this.langiumDocuments = e6.workspace.LangiumDocuments, this.langiumDocumentFactory = e6.workspace.LangiumDocumentFactory, this.textDocuments = e6.workspace.TextDocuments, this.indexManager = e6.workspace.IndexManager, this.fileSystemProvider = e6.workspace.FileSystemProvider, this.workspaceManager = () => e6.workspace.WorkspaceManager, this.serviceRegistry = e6.ServiceRegistry;
  }
  async build(e6, t2 = {}, n2 = X.CancellationToken.None) {
    var _a3;
    for (let n3 of e6) {
      let e7 = n3.uri.toString();
      if (n3.state === Z.Validated) {
        if (typeof t2.validation == `boolean` && t2.validation) this.resetToState(n3, Z.IndexedReferences);
        else if (typeof t2.validation == `object`) {
          let r2 = this.findMissingValidationCategories(n3, t2);
          r2.length > 0 && (this.buildState.set(e7, { completed: false, options: { validation: { categories: r2 } }, result: (_a3 = this.buildState.get(e7)) == null ? void 0 : _a3.result }), n3.state = Z.IndexedReferences);
        }
      } else this.buildState.delete(e7);
    }
    this.currentState = Z.Changed, await this.emitUpdate(e6.map((e7) => e7.uri), []), await this.buildDocuments(e6, t2, n2);
  }
  async update(e6, t2, n2 = X.CancellationToken.None) {
    this.currentState = Z.Changed;
    let r2 = [];
    for (let e7 of t2) {
      let t3 = this.langiumDocuments.deleteDocuments(e7);
      for (let e8 of t3) r2.push(e8.uri), this.cleanUpDeleted(e8);
    }
    let i2 = (await Promise.all(e6.map((e7) => this.findChangedUris(e7)))).flat();
    for (let e7 of i2) {
      let t3 = this.langiumDocuments.getDocument(e7);
      t3 === void 0 && (t3 = this.langiumDocumentFactory.fromModel({ $type: `INVALID` }, e7), t3.state = Z.Changed, this.langiumDocuments.addDocument(t3)), this.resetToState(t3, Z.Changed);
    }
    let a2 = D(i2).concat(r2).map((e7) => e7.toString()).toSet();
    this.langiumDocuments.all.filter((e7) => !a2.has(e7.uri.toString()) && this.shouldRelink(e7, a2)).forEach((e7) => this.resetToState(e7, Z.ComputedScopes)), await this.emitUpdate(i2, r2), await Vj(n2);
    let o2 = this.sortDocuments(this.langiumDocuments.all.filter((e7) => {
      var _a3;
      return e7.state < Z.Validated || !((_a3 = this.buildState.get(e7.uri.toString())) == null ? void 0 : _a3.completed) || this.resultsAreIncomplete(e7, this.updateBuildOptions);
    }).toArray());
    await this.buildDocuments(o2, this.updateBuildOptions, n2);
  }
  resultsAreIncomplete(e6, t2) {
    return this.findMissingValidationCategories(e6, t2).length >= 1;
  }
  findMissingValidationCategories(e6, t2) {
    var _a3, _b3;
    let n2 = this.buildState.get(e6.uri.toString()), r2 = this.serviceRegistry.getServices(e6.uri).validation.ValidationRegistry.getAllValidationCategories(e6), i2 = ((_a3 = n2 == null ? void 0 : n2.result) == null ? void 0 : _a3.validationChecks) ? new Set((_b3 = n2 == null ? void 0 : n2.result) == null ? void 0 : _b3.validationChecks) : (n2 == null ? void 0 : n2.completed) ? r2 : /* @__PURE__ */ new Set();
    return D(t2 === void 0 || t2.validation === true ? r2 : typeof t2.validation == `object` ? t2.validation.categories ?? r2 : []).filter((e7) => !i2.has(e7)).toArray();
  }
  async findChangedUris(e6) {
    var _a3;
    if (this.langiumDocuments.getDocument(e6) ?? ((_a3 = this.textDocuments) == null ? void 0 : _a3.get(e6))) return [e6];
    try {
      let t2 = await this.fileSystemProvider.stat(e6);
      if (t2.isDirectory) return await this.workspaceManager().searchFolder(e6);
      if (this.workspaceManager().shouldIncludeEntry(t2)) return [e6];
    } catch {
    }
    return [];
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
    return this.updateListeners.push(e6), wN.create(() => {
      let t2 = this.updateListeners.indexOf(e6);
      t2 >= 0 && this.updateListeners.splice(t2, 1);
    });
  }
  resetToState(e6, t2) {
    switch (t2) {
      case Z.Changed:
      case Z.Parsed:
        this.indexManager.removeContent(e6.uri);
      case Z.IndexedContent:
        e6.localSymbols = void 0;
      case Z.ComputedScopes:
        this.serviceRegistry.getServices(e6.uri).references.Linker.unlink(e6);
      case Z.Linked:
        this.indexManager.removeReferences(e6.uri);
      case Z.IndexedReferences:
        e6.diagnostics = void 0, this.buildState.delete(e6.uri.toString());
      case Z.Validated:
    }
    e6.state > t2 && (e6.state = t2);
  }
  cleanUpDeleted(e6) {
    this.buildState.delete(e6.uri.toString()), this.indexManager.remove(e6.uri), e6.state = Z.Changed;
  }
  async buildDocuments(e6, t2, n2) {
    this.prepareBuild(e6, t2), await this.runCancelable(e6, Z.Parsed, n2, (e7) => this.langiumDocumentFactory.update(e7, n2)), await this.runCancelable(e6, Z.IndexedContent, n2, (e7) => this.indexManager.updateContent(e7, n2)), await this.runCancelable(e6, Z.ComputedScopes, n2, async (e7) => {
      e7.localSymbols = await this.serviceRegistry.getServices(e7.uri).references.ScopeComputation.collectLocalSymbols(e7, n2);
    });
    let r2 = e6.filter((e7) => this.shouldLink(e7));
    await this.runCancelable(r2, Z.Linked, n2, (e7) => this.serviceRegistry.getServices(e7.uri).references.Linker.link(e7, n2)), await this.runCancelable(r2, Z.IndexedReferences, n2, (e7) => this.indexManager.updateReferences(e7, n2));
    let i2 = e6.filter((e7) => this.shouldValidate(e7) ? true : (this.markAsCompleted(e7), false));
    await this.runCancelable(i2, Z.Validated, n2, async (e7) => {
      await this.validate(e7, n2), this.markAsCompleted(e7);
    });
  }
  markAsCompleted(e6) {
    let t2 = this.buildState.get(e6.uri.toString());
    t2 && (t2.completed = true);
  }
  prepareBuild(e6, t2) {
    for (let n2 of e6) {
      let e7 = n2.uri.toString(), r2 = this.buildState.get(e7);
      (!r2 || r2.completed) && this.buildState.set(e7, { completed: false, options: t2, result: r2 == null ? void 0 : r2.result });
    }
  }
  async runCancelable(e6, t2, n2, r2) {
    for (let i3 of e6) i3.state < t2 && (await Vj(n2), await r2(i3), i3.state = t2, await this.notifyDocumentPhase(i3, t2, n2));
    let i2 = e6.filter((e7) => e7.state === t2);
    await this.notifyBuildPhase(i2, t2, n2), this.currentState = t2;
  }
  onBuildPhase(e6, t2) {
    return this.buildPhaseListeners.add(e6, t2), wN.create(() => {
      this.buildPhaseListeners.delete(e6, t2);
    });
  }
  onDocumentPhase(e6, t2) {
    return this.documentPhaseListeners.add(e6, t2), wN.create(() => {
      this.documentPhaseListeners.delete(e6, t2);
    });
  }
  waitUntil(e6, t2, n2) {
    let r2;
    return t2 && `path` in t2 ? r2 = t2 : n2 = t2, n2 ?? (n2 = X.CancellationToken.None), r2 ? this.awaitDocumentState(e6, r2, n2) : this.awaitBuilderState(e6, n2);
  }
  awaitDocumentState(e6, t2, n2) {
    let r2 = this.langiumDocuments.getDocument(t2);
    if (r2) {
      if (r2.state >= e6) return Promise.resolve(t2);
      if (n2.isCancellationRequested) return Promise.reject(zj);
      if (this.currentState >= e6 && e6 > r2.state) return Promise.reject(new TN.ResponseError(TN.LSPErrorCodes.RequestFailed, `Document state of ${t2.toString()} is ${Z[r2.state]}, requiring ${Z[e6]}, but workspace state is already ${Z[this.currentState]}. Returning undefined.`));
    } else return Promise.reject(new TN.ResponseError(TN.LSPErrorCodes.ServerCancelled, `No document found for URI: ${t2.toString()}`));
    return new Promise((r3, i2) => {
      let a2 = this.onDocumentPhase(e6, (e7) => {
        $j.equals(e7.uri, t2) && (a2.dispose(), o2.dispose(), r3(e7.uri));
      }), o2 = n2.onCancellationRequested(() => {
        a2.dispose(), o2.dispose(), i2(zj);
      });
    });
  }
  awaitBuilderState(e6, t2) {
    return this.currentState >= e6 ? Promise.resolve() : t2.isCancellationRequested ? Promise.reject(zj) : new Promise((n2, r2) => {
      let i2 = this.onBuildPhase(e6, () => {
        i2.dispose(), a2.dispose(), n2();
      }), a2 = t2.onCancellationRequested(() => {
        i2.dispose(), a2.dispose(), r2(zj);
      });
    });
  }
  async notifyDocumentPhase(e6, t2, n2) {
    let r2 = this.documentPhaseListeners.get(t2).slice();
    for (let t3 of r2) try {
      await Vj(n2), await t3(e6, n2);
    } catch (e7) {
      if (!Bj(e7)) throw e7;
    }
  }
  async notifyBuildPhase(e6, t2, n2) {
    if (e6.length === 0) return;
    let r2 = this.buildPhaseListeners.get(t2).slice();
    for (let t3 of r2) await Vj(n2), await t3(e6, n2);
  }
  shouldLink(e6) {
    return this.getBuildOptions(e6).eagerLinking ?? true;
  }
  shouldValidate(e6) {
    return !!this.getBuildOptions(e6).validation;
  }
  async validate(e6, t2) {
    let n2 = this.serviceRegistry.getServices(e6.uri).validation.DocumentValidator, r2 = this.getBuildOptions(e6), i2 = typeof r2.validation == `object` ? { ...r2.validation } : {};
    i2.categories = this.findMissingValidationCategories(e6, r2);
    let a2 = await n2.validateDocument(e6, i2, t2);
    e6.diagnostics ? e6.diagnostics.push(...a2) : e6.diagnostics = a2;
    let o2 = this.buildState.get(e6.uri.toString());
    o2 && (o2.result ?? (o2.result = {}), o2.result.validationChecks ? o2.result.validationChecks = D(o2.result.validationChecks).concat(i2.categories).distinct().toArray() : o2.result.validationChecks = [...i2.categories]);
  }
  getBuildOptions(e6) {
    var _a3;
    return ((_a3 = this.buildState.get(e6.uri.toString())) == null ? void 0 : _a3.options) ?? {};
  }
}, DN = class {
  constructor(e6) {
    this.symbolIndex = /* @__PURE__ */ new Map(), this.symbolByTypeIndex = new _M(), this.referenceIndex = /* @__PURE__ */ new Map(), this.documents = e6.workspace.LangiumDocuments, this.serviceRegistry = e6.ServiceRegistry, this.astReflection = e6.AstReflection;
  }
  findAllReferences(e6, t2) {
    let n2 = O(e6).uri, r2 = [];
    return this.referenceIndex.forEach((e7) => {
      e7.forEach((e8) => {
        $j.equals(e8.targetUri, n2) && e8.targetPath === t2 && r2.push(e8);
      });
    }), D(r2);
  }
  allElements(e6, t2) {
    let n2 = D(this.symbolIndex.keys());
    return t2 && (n2 = n2.filter((e7) => !t2 || t2.has(e7))), n2.map((t3) => this.getFileDescriptions(t3, e6)).flat();
  }
  getFileDescriptions(e6, t2) {
    return t2 ? this.symbolByTypeIndex.get(e6, t2, () => (this.symbolIndex.get(e6) ?? []).filter((e7) => this.astReflection.isSubtype(e7.type, t2))) : this.symbolIndex.get(e6) ?? [];
  }
  remove(e6) {
    this.removeContent(e6), this.removeReferences(e6);
  }
  removeContent(e6) {
    let t2 = e6.toString();
    this.symbolIndex.delete(t2), this.symbolByTypeIndex.clear(t2);
  }
  removeReferences(e6) {
    let t2 = e6.toString();
    this.referenceIndex.delete(t2);
  }
  async updateContent(e6, t2 = X.CancellationToken.None) {
    let n2 = await this.serviceRegistry.getServices(e6.uri).references.ScopeComputation.collectExportedSymbols(e6, t2), r2 = e6.uri.toString();
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
}, ON = class {
  constructor(e6) {
    this.initialBuildOptions = {}, this._ready = new Hj(), this.serviceRegistry = e6.ServiceRegistry, this.langiumDocuments = e6.workspace.LangiumDocuments, this.documentBuilder = e6.workspace.DocumentBuilder, this.fileSystemProvider = e6.workspace.FileSystemProvider, this.mutex = e6.workspace.WorkspaceLock;
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
    await Vj(t2), await this.documentBuilder.build(n2, this.initialBuildOptions, t2);
  }
  async performStartup(e6) {
    let t2 = [], n2 = (e7) => {
      t2.push(e7), this.langiumDocuments.hasDocument(e7.uri) || this.langiumDocuments.addDocument(e7);
    };
    await this.loadAdditionalDocuments(e6, n2);
    let r2 = [];
    await Promise.all(e6.map((e7) => this.getRootFolder(e7)).map(async (e7) => this.traverseFolder(e7, r2)));
    let i2 = D(r2).distinct((e7) => e7.toString()).filter((e7) => !this.langiumDocuments.hasDocument(e7));
    return await this.loadWorkspaceDocuments(i2, n2), this._ready.resolve(), t2;
  }
  async loadWorkspaceDocuments(e6, t2) {
    await Promise.all(e6.map(async (e7) => {
      t2(await this.langiumDocuments.getOrCreateDocument(e7));
    }));
  }
  loadAdditionalDocuments(e6, t2) {
    return Promise.resolve();
  }
  getRootFolder(e6) {
    return Zj.parse(e6.uri);
  }
  async traverseFolder(e6, t2) {
    try {
      let n2 = await this.fileSystemProvider.readDirectory(e6);
      await Promise.all(n2.map(async (e7) => {
        this.shouldIncludeEntry(e7) && (e7.isDirectory ? await this.traverseFolder(e7.uri, t2) : e7.isFile && t2.push(e7.uri));
      }));
    } catch (t3) {
      console.error(`Failure to read directory content of ` + e6.toString(true), t3);
    }
  }
  async searchFolder(e6) {
    let t2 = [];
    return await this.traverseFolder(e6, t2), t2;
  }
  shouldIncludeEntry(e6) {
    let t2 = $j.basename(e6.uri);
    return t2.startsWith(`.`) ? false : e6.isDirectory ? t2 !== `node_modules` && t2 !== `out` : e6.isFile ? this.serviceRegistry.hasServices(e6.uri) : false;
  }
}, kN = class {
  buildUnexpectedCharactersMessage(e6, t2, n2, r2, i2) {
    return AT.buildUnexpectedCharactersMessage(e6, t2, n2, r2, i2);
  }
  buildUnableToPopLexerModeMessage(e6) {
    return AT.buildUnableToPopLexerModeMessage(e6);
  }
};
const AN = { mode: `full` };
var jN = class {
  constructor(e6) {
    this.errorMessageProvider = e6.parser.LexerErrorMessageProvider, this.tokenBuilder = e6.parser.TokenBuilder;
    let t2 = this.tokenBuilder.buildTokens(e6.Grammar, { caseInsensitive: e6.LanguageMetaData.caseInsensitive });
    this.tokenTypes = this.toTokenTypeDictionary(t2), this.chevrotainLexer = new MT(PN(t2) ? Object.values(t2) : t2, { positionTracking: `full`, skipValidations: e6.LanguageMetaData.mode === `production`, errorMessageProvider: this.errorMessageProvider });
  }
  get definition() {
    return this.tokenTypes;
  }
  tokenize(e6, t2 = AN) {
    var _a3, _b3;
    let n2 = this.chevrotainLexer.tokenize(e6);
    return { tokens: n2.tokens, errors: n2.errors, hidden: n2.groups.hidden ?? [], report: (_b3 = (_a3 = this.tokenBuilder).flushLexingReport) == null ? void 0 : _b3.call(_a3, e6) };
  }
  toTokenTypeDictionary(e6) {
    if (PN(e6)) return e6;
    let t2 = NN(e6) ? Object.values(e6.modes).flat() : e6, n2 = {};
    return t2.forEach((e7) => n2[e7.name] = e7), n2;
  }
};
function MN(e6) {
  return Array.isArray(e6) && (e6.length === 0 || `name` in e6[0]);
}
function NN(e6) {
  return e6 && `modes` in e6 && `defaultMode` in e6;
}
function PN(e6) {
  return !MN(e6) && !NN(e6);
}
VA();
function FN(e6, t2, n2) {
  let r2, i2;
  typeof e6 == `string` ? (i2 = t2, r2 = n2) : (i2 = e6.range.start, r2 = t2), i2 || (i2 = q.create(0, 0));
  let a2 = LN(e6), o2 = $N(r2);
  return KN({ index: 0, tokens: BN({ lines: a2, position: i2, options: o2 }), position: i2 });
}
function IN(e6, t2) {
  let n2 = $N(t2), r2 = LN(e6);
  if (r2.length === 0) return false;
  let i2 = r2[0], a2 = r2[r2.length - 1], o2 = n2.start, s2 = n2.end;
  return !!(o2 == null ? void 0 : o2.exec(i2)) && !!(s2 == null ? void 0 : s2.exec(a2));
}
function LN(e6) {
  let t2 = ``;
  return t2 = typeof e6 == `string` ? e6 : e6.text, t2.split($n);
}
var RN = /\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy, zN = /\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;
function BN(e6) {
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
    if (s2 = s2.substring(0, GN(s2)), WN(s2, c2) >= s2.length) {
      if (t2.length > 0) {
        let e7 = q.create(n2, r2);
        t2.push({ type: `break`, content: ``, range: J.create(e7, e7) });
      }
    } else {
      RN.lastIndex = c2;
      let e7 = RN.exec(s2);
      if (e7) {
        let i3 = e7[0], a3 = e7[1], o3 = q.create(n2, r2 + c2), l2 = q.create(n2, r2 + c2 + i3.length);
        t2.push({ type: `tag`, content: a3, range: J.create(o3, l2) }), c2 += i3.length, c2 = WN(s2, c2);
      }
      if (c2 < s2.length) {
        let e8 = s2.substring(c2), i3 = Array.from(e8.matchAll(zN));
        t2.push(...VN(i3, e8, n2, r2 + c2));
      }
    }
    n2++, r2 = 0;
  }
  return t2.length > 0 && t2[t2.length - 1].type === `break` ? t2.slice(0, -1) : t2;
}
function VN(e6, t2, n2, r2) {
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
var HN = /\S/, UN = /\s*$/;
function WN(e6, t2) {
  let n2 = e6.substring(t2).match(HN);
  return n2 ? t2 + n2.index : e6.length;
}
function GN(e6) {
  let t2 = e6.match(UN);
  if (t2 && typeof t2.index == `number`) return t2.index;
}
function KN(e6) {
  var _a3, _b3;
  let t2 = q.create(e6.position.line, e6.position.character);
  if (e6.tokens.length === 0) return new tP([], J.create(t2, t2));
  let n2 = [];
  for (; e6.index < e6.tokens.length; ) {
    let t3 = qN(e6, n2[n2.length - 1]);
    t3 && n2.push(t3);
  }
  let r2 = ((_a3 = n2[0]) == null ? void 0 : _a3.range.start) ?? t2, i2 = ((_b3 = n2[n2.length - 1]) == null ? void 0 : _b3.range.end) ?? t2;
  return new tP(n2, J.create(r2, i2));
}
function qN(e6, t2) {
  let n2 = e6.tokens[e6.index];
  if (n2.type === `tag`) return ZN(e6, false);
  if (n2.type === `text` || n2.type === `inline-tag`) return YN(e6);
  JN(n2, t2), e6.index++;
}
function JN(e6, t2) {
  if (t2) {
    let n2 = new oP(``, e6.range);
    `inlines` in t2 ? t2.inlines.push(n2) : t2.content.inlines.push(n2);
  }
}
function YN(e6) {
  let t2 = e6.tokens[e6.index], n2 = t2, r2 = t2, i2 = [];
  for (; t2 && t2.type !== `break` && t2.type !== `tag`; ) i2.push(XN(e6)), r2 = t2, t2 = e6.tokens[e6.index];
  return new aP(i2, J.create(n2.range.start, r2.range.end));
}
function XN(e6) {
  return e6.tokens[e6.index].type === `inline-tag` ? ZN(e6, true) : QN(e6);
}
function ZN(e6, t2) {
  var _a3;
  let n2 = e6.tokens[e6.index++], r2 = n2.content.substring(1);
  if (((_a3 = e6.tokens[e6.index]) == null ? void 0 : _a3.type) === `text`) if (t2) {
    let i2 = QN(e6);
    return new nP(r2, new aP([i2], i2.range), t2, J.create(n2.range.start, i2.range.end));
  } else {
    let i2 = YN(e6);
    return new nP(r2, i2, t2, J.create(n2.range.start, i2.range.end));
  }
  else {
    let e7 = n2.range;
    return new nP(r2, new aP([], e7), t2, e7);
  }
}
function QN(e6) {
  let t2 = e6.tokens[e6.index++];
  return new oP(t2.content, t2.range);
}
function $N(e6) {
  if (!e6) return $N({ start: `/**`, end: `*/`, line: `*` });
  let { start: t2, end: n2, line: r2 } = e6;
  return { start: eP(t2, true), end: eP(n2, false), line: eP(r2, true) };
}
function eP(e6, t2) {
  if (typeof e6 == `string` || typeof e6 == `object`) {
    let n2 = typeof e6 == `string` ? or(e6) : e6.source;
    return t2 ? RegExp(`^\\s*${n2}`) : RegExp(`\\s*${n2}\\s*$`);
  } else return e6;
}
var tP = class {
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
      e6 += sP(e6) + n2;
    }
    return e6.trim();
  }
  toMarkdown(e6) {
    let t2 = ``;
    for (let n2 of this.elements) if (t2.length === 0) t2 = n2.toMarkdown(e6);
    else {
      let r2 = n2.toMarkdown(e6);
      t2 += sP(t2) + r2;
    }
    return t2.trim();
  }
}, nP = class {
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
      let n3 = rP(this.name, t2, e6 ?? {});
      if (typeof n3 == `string`) return n3;
    }
    let n2 = ``;
    (e6 == null ? void 0 : e6.tag) === `italic` || (e6 == null ? void 0 : e6.tag) === void 0 ? n2 = `*` : (e6 == null ? void 0 : e6.tag) === `bold` ? n2 = `**` : (e6 == null ? void 0 : e6.tag) === `bold-italic` && (n2 = `***`);
    let r2 = `${n2}@${this.name}${n2}`;
    return this.content.inlines.length === 1 ? r2 = `${r2} \u2014 ${t2}` : this.content.inlines.length > 1 && (r2 = `${r2}
${t2}`), this.inline ? `{${r2}}` : r2;
  }
};
function rP(e6, t2, n2) {
  var _a3;
  if (e6 === `linkplain` || e6 === `linkcode` || e6 === `link`) {
    let r2 = t2.indexOf(` `), i2 = t2;
    if (r2 > 0) {
      let e7 = WN(t2, r2);
      i2 = t2.substring(e7), t2 = t2.substring(0, r2);
    }
    return (e6 === `linkcode` || e6 === `link` && n2.link === `code`) && (i2 = `\`${i2}\``), ((_a3 = n2.renderLink) == null ? void 0 : _a3.call(n2, t2, i2)) ?? iP(t2, i2);
  }
}
function iP(e6, t2) {
  try {
    return Zj.parse(e6, true), `[${t2}](${e6})`;
  } catch {
    return e6;
  }
}
var aP = class {
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
}, oP = class {
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
function sP(e6) {
  return e6.endsWith(`
`) ? `
` : `

`;
}
var cP = class {
  constructor(e6) {
    this.indexManager = e6.shared.workspace.IndexManager, this.commentProvider = e6.documentation.CommentProvider;
  }
  getDocumentation(e6) {
    let t2 = this.commentProvider.getComment(e6);
    if (t2 && IN(t2)) return FN(t2).toMarkdown({ renderLink: (t3, n2) => this.documentationLinkRenderer(e6, t3, n2), renderTag: (t3) => this.documentationTagRenderer(e6, t3) });
  }
  documentationLinkRenderer(e6, t2, n2) {
    let r2 = this.findNameInLocalSymbols(e6, t2) ?? this.findNameInGlobalScope(e6, t2);
    if (r2 && r2.nameSegment) {
      let e7 = r2.nameSegment.range.start.line + 1, t3 = r2.nameSegment.range.start.character + 1;
      return `[${n2}](${r2.documentUri.with({ fragment: `L${e7},${t3}` }).toString()})`;
    } else return;
  }
  documentationTagRenderer(e6, t2) {
  }
  findNameInLocalSymbols(e6, t2) {
    let n2 = O(e6).localSymbols;
    if (!n2) return;
    let r2 = e6;
    do {
      let e7 = n2.getStream(r2).find((e8) => e8.name === t2);
      if (e7) return e7;
      r2 = r2.$container;
    } while (r2);
  }
  findNameInGlobalScope(e6, t2) {
    return this.indexManager.allElements().find((e7) => e7.name === t2);
  }
}, lP = class {
  constructor(e6) {
    this.grammarConfig = () => e6.parser.GrammarConfig;
  }
  getComment(e6) {
    var _a3;
    return xM(e6) ? e6.$comment : (_a3 = Tn(e6.$cstNode, this.grammarConfig().multilineCommentRules)) == null ? void 0 : _a3.text;
  }
}, uP = class {
  constructor(e6) {
    this.syncParser = e6.parser.LangiumParser;
  }
  parse(e6, t2) {
    return Promise.resolve(this.syncParser.parse(e6));
  }
}, dP = class {
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
    let n2 = await this.acquireParserWorker(t2), r2 = new Hj(), i2, a2 = t2.onCancellationRequested(() => {
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
    let t2 = new Hj();
    return e6.onCancellationRequested(() => {
      let e7 = this.queue.indexOf(t2);
      e7 >= 0 && this.queue.splice(e7, 1), t2.reject(zj);
    }), this.queue.push(t2), t2.promise;
  }
}, fP = class {
  get ready() {
    return this._ready;
  }
  get onReady() {
    return this.onReadyEmitter.event;
  }
  constructor(e6, t2, n2, r2) {
    this.onReadyEmitter = new LM.Emitter(), this.deferred = new Hj(), this._ready = true, this._parsing = false, this.sendMessage = e6, this._terminate = r2, t2((e7) => {
      let t3 = e7;
      this.deferred.resolve(t3), this.unlock();
    }), n2((e7) => {
      this.deferred.reject(e7), this.unlock();
    });
  }
  terminate() {
    this.deferred.reject(zj), this._terminate();
  }
  lock() {
    this._ready = false;
  }
  unlock() {
    this._parsing = false, this._ready = true, this.onReadyEmitter.fire();
  }
  parse(e6) {
    if (this._parsing) throw Error(`Parser worker is busy`);
    return this._parsing = true, this.deferred = new Hj(), this.sendMessage(e6), this.deferred.promise;
  }
}, pP = class {
  constructor() {
    this.previousTokenSource = new X.CancellationTokenSource(), this.writeQueue = [], this.readQueue = [], this.done = true;
  }
  write(e6) {
    this.cancelWrite();
    let t2 = Lj();
    return this.previousTokenSource = t2, this.enqueue(this.writeQueue, e6, t2.token);
  }
  read(e6) {
    return this.enqueue(this.readQueue, e6);
  }
  enqueue(e6, t2, n2 = X.CancellationToken.None) {
    let r2 = new Hj(), i2 = { action: t2, deferred: r2, cancellationToken: n2 };
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
        Bj(e8) ? t2.resolve(void 0) : t2.reject(e8);
      }
    })), this.done = true, this.performNextOperation();
  }
  cancelWrite() {
    this.previousTokenSource.cancel();
  }
}, mP = class {
  constructor(e6) {
    this.grammarElementIdMap = new lM(), this.tokenTypeIdMap = new lM(), this.grammar = e6.Grammar, this.lexer = e6.parser.Lexer, this.linker = e6.references.Linker;
  }
  dehydrate(e6) {
    return { lexerErrors: e6.lexerErrors, lexerReport: e6.lexerReport ? this.dehydrateLexerReport(e6.lexerReport) : void 0, parserErrors: e6.parserErrors.map((e7) => ({ ...e7, message: e7.message })), value: this.dehydrateAstNode(e6.value, this.createDehyrationContext(e6.value)) };
  }
  dehydrateLexerReport(e6) {
    return e6;
  }
  createDehyrationContext(e6) {
    let t2 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Map();
    for (let n3 of j(e6)) t2.set(n3, {});
    if (e6.$cstNode) for (let t3 of hn(e6.$cstNode)) n2.set(t3, {});
    return { astNodes: t2, cstNodes: n2 };
  }
  dehydrateAstNode(e6, t2) {
    let n2 = t2.astNodes.get(e6);
    n2.$type = e6.$type, n2.$containerIndex = e6.$containerIndex, n2.$containerProperty = e6.$containerProperty, e6.$cstNode !== void 0 && (n2.$cstNode = this.dehydrateCstNode(e6.$cstNode, t2));
    for (let [r2, i2] of Object.entries(e6)) if (!r2.startsWith(`$`)) if (Array.isArray(i2)) {
      let e7 = [];
      n2[r2] = e7;
      for (let n3 of i2) g(n3) ? e7.push(this.dehydrateAstNode(n3, t2)) : _(n3) ? e7.push(this.dehydrateReference(n3, t2)) : e7.push(n3);
    } else g(i2) ? n2[r2] = this.dehydrateAstNode(i2, t2) : _(i2) ? n2[r2] = this.dehydrateReference(i2, t2) : i2 !== void 0 && (n2[r2] = i2);
    return n2;
  }
  dehydrateReference(e6, t2) {
    let n2 = {};
    return n2.$refText = e6.$refText, e6.$refNode && (n2.$refNode = t2.cstNodes.get(e6.$refNode)), n2;
  }
  dehydrateCstNode(e6, t2) {
    let n2 = t2.cstNodes.get(e6);
    return w(e6) ? n2.fullText = e6.fullText : n2.grammarSource = this.getGrammarElementId(e6.grammarSource), n2.hidden = e6.hidden, n2.astNode = t2.astNodes.get(e6.astNode), S(e6) ? n2.content = e6.content.map((e7) => this.dehydrateCstNode(e7, t2)) : C(e6) && (n2.tokenType = e6.tokenType.name, n2.offset = e6.offset, n2.length = e6.length, n2.startLine = e6.range.start.line, n2.startColumn = e6.range.start.character, n2.endLine = e6.range.end.line, n2.endColumn = e6.range.end.character), n2;
  }
  hydrate(e6) {
    let t2 = e6.value, n2 = this.createHydrationContext(t2);
    return `$cstNode` in t2 && this.hydrateCstNode(t2.$cstNode, n2), { lexerErrors: e6.lexerErrors, lexerReport: e6.lexerReport, parserErrors: e6.parserErrors, value: this.hydrateAstNode(t2, n2) };
  }
  createHydrationContext(e6) {
    let t2 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Map();
    for (let n3 of j(e6)) t2.set(n3, {});
    let r2;
    if (e6.$cstNode) for (let t3 of hn(e6.$cstNode)) {
      let e7;
      `fullText` in t3 ? (e7 = new qA(t3.fullText), r2 = e7) : `content` in t3 ? e7 = new GA() : `tokenType` in t3 && (e7 = this.hydrateCstLeafNode(t3)), e7 && (n2.set(t3, e7), e7.root = r2);
    }
    return { astNodes: t2, cstNodes: n2 };
  }
  hydrateAstNode(e6, t2) {
    let n2 = t2.astNodes.get(e6);
    n2.$type = e6.$type, n2.$containerIndex = e6.$containerIndex, n2.$containerProperty = e6.$containerProperty, e6.$cstNode && (n2.$cstNode = t2.cstNodes.get(e6.$cstNode));
    for (let [r2, i2] of Object.entries(e6)) if (!r2.startsWith(`$`)) if (Array.isArray(i2)) {
      let e7 = [];
      n2[r2] = e7;
      for (let a2 of i2) g(a2) ? e7.push(this.setParent(this.hydrateAstNode(a2, t2), n2)) : _(a2) ? e7.push(this.hydrateReference(a2, n2, r2, t2)) : e7.push(a2);
    } else g(i2) ? n2[r2] = this.setParent(this.hydrateAstNode(i2, t2), n2) : _(i2) ? n2[r2] = this.hydrateReference(i2, n2, r2, t2) : i2 !== void 0 && (n2[r2] = i2);
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
    if (typeof e6.grammarSource == `number` && (r2.grammarSource = this.getGrammarElement(e6.grammarSource)), r2.astNode = t2.astNodes.get(e6.astNode), S(r2)) for (let i2 of e6.content) {
      let e7 = this.hydrateCstNode(i2, t2, n2++);
      r2.content.push(e7);
    }
    return r2;
  }
  hydrateCstLeafNode(e6) {
    let t2 = this.getTokenType(e6.tokenType), n2 = e6.offset, r2 = e6.length, i2 = e6.startLine, a2 = e6.startColumn, o2 = e6.endLine, s2 = e6.endColumn, c2 = e6.hidden;
    return new WA(n2, r2, { start: { line: i2, character: a2 }, end: { line: o2, character: s2 } }, t2, c2);
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
    for (let t2 of j(this.grammar)) ye(t2) && this.grammarElementIdMap.set(t2, e6++);
  }
};
function hP(e6) {
  return { documentation: { CommentProvider: (e7) => new lP(e7), DocumentationProvider: (e7) => new cP(e7) }, parser: { AsyncParser: (e7) => new uP(e7), GrammarConfig: (e7) => Yr(e7), LangiumParser: (e7) => Tj(e7), CompletionParser: (e7) => wj(e7), ValueConverter: () => new Oj(), TokenBuilder: () => new Dj(), Lexer: (e7) => new jN(e7), ParserErrorMessageProvider: () => new tj(), LexerErrorMessageProvider: () => new kN() }, workspace: { AstNodeLocator: () => new IM(), AstNodeDescriptionProvider: (e7) => new PM(e7), ReferenceDescriptionProvider: (e7) => new FM(e7) }, references: { Linker: (e7) => new iM(e7), NameProvider: () => new oM(), ScopeProvider: (e7) => new bM(e7), ScopeComputation: (e7) => new uM(e7), References: (e7) => new sM(e7) }, serializer: { Hydrator: (e7) => new mP(e7), JsonSerializer: (e7) => new CM(e7) }, validation: { DocumentValidator: (e7) => new kM(e7), ValidationRegistry: (e7) => new DM(e7) }, shared: () => e6.shared };
}
function gP(e6) {
  return { ServiceRegistry: (e7) => new wM(e7), workspace: { LangiumDocuments: (e7) => new nM(e7), LangiumDocumentFactory: (e7) => new tM(e7), DocumentBuilder: (e7) => new EN(e7), IndexManager: (e7) => new DN(e7), WorkspaceManager: (e7) => new ON(e7), FileSystemProvider: (t2) => e6.fileSystemProvider(t2), WorkspaceLock: () => new pP(), ConfigurationProvider: (e7) => new RM(e7) }, profilers: {} };
}
var _P;
(function(e6) {
  e6.merge = (e7, t2) => wP(wP({}, e7), t2);
})(_P || (_P = {}));
function vP(e6, t2, n2, r2, i2, a2, o2, s2, c2) {
  return xP([e6, t2, n2, r2, i2, a2, o2, s2, c2].reduce(wP, {}));
}
var yP = Symbol(`isProxy`);
function bP(e6) {
  if (e6 && e6[yP]) for (let t2 of Object.values(e6)) bP(t2);
  return e6;
}
function xP(e6, t2) {
  let n2 = new Proxy({}, { deleteProperty: () => false, set: () => {
    throw Error(`Cannot set property on injected service container`);
  }, get: (r2, i2) => i2 === yP ? true : CP(r2, i2, e6, t2 || n2), getOwnPropertyDescriptor: (r2, i2) => (CP(r2, i2, e6, t2 || n2), Object.getOwnPropertyDescriptor(r2, i2)), has: (t3, n3) => n3 in e6, ownKeys: () => [...Object.getOwnPropertyNames(e6)] });
  return n2;
}
var SP = Symbol();
function CP(e6, t2, n2, r2) {
  if (t2 in e6) {
    if (e6[t2] instanceof Error) throw Error(`Construction failure. Please make sure that your dependencies are constructable. Cause: ` + e6[t2]);
    if (e6[t2] === SP) throw Error(`Cycle detected. Please make "` + String(t2) + `" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies`);
    return e6[t2];
  } else if (t2 in n2) {
    let i2 = n2[t2];
    e6[t2] = SP;
    try {
      e6[t2] = typeof i2 == `function` ? i2(r2) : xP(i2, r2);
    } catch (n3) {
      throw e6[t2] = n3 instanceof Error ? n3 : void 0, n3;
    }
    return e6[t2];
  } else return;
}
function wP(e6, t2) {
  if (t2) {
    for (let [n2, r2] of Object.entries(t2)) if (r2 != null) if (typeof r2 == `object`) {
      let t3 = e6[n2];
      typeof t3 == `object` && t3 ? e6[n2] = wP(t3, r2) : e6[n2] = wP({}, r2);
    } else e6[n2] = r2;
  }
  return e6;
}
const TP = { indentTokenName: `INDENT`, dedentTokenName: `DEDENT`, whitespaceTokenName: `WS`, ignoreIndentationDelimiters: [] };
var EP;
(function(e6) {
  e6.REGULAR = `indentation-sensitive`, e6.IGNORE_INDENTATION = `ignore-indentation`;
})(EP || (EP = {}));
var DP = class extends Dj {
  constructor(e6 = TP) {
    super(), this.indentationStack = [0], this.whitespaceRegExp = /[ \t]+/y, this.options = { ...TP, ...e6 }, this.indentTokenType = WT({ name: this.options.indentTokenName, pattern: this.indentMatcher.bind(this), line_breaks: false }), this.dedentTokenType = WT({ name: this.options.dedentTokenName, pattern: this.dedentMatcher.bind(this), line_breaks: false });
  }
  buildTokens(e6, t2) {
    let n2 = super.buildTokens(e6, t2);
    if (!MN(n2)) throw Error(`Invalid tokens built by default builder`);
    let { indentTokenName: r2, dedentTokenName: i2, whitespaceTokenName: a2, ignoreIndentationDelimiters: o2 } = this.options, s2, c2, l2, u2 = [];
    for (let e7 of n2) {
      for (let [t3, n3] of o2) e7.name === t3 ? e7.PUSH_MODE = EP.IGNORE_INDENTATION : e7.name === n3 && (e7.POP_MODE = true);
      e7.name === i2 ? s2 = e7 : e7.name === r2 ? c2 = e7 : e7.name === a2 ? l2 = e7 : u2.push(e7);
    }
    if (!s2 || !c2 || !l2) throw Error(`Some indentation/whitespace tokens not found!`);
    return o2.length > 0 ? { modes: { [EP.REGULAR]: [s2, c2, ...u2, l2], [EP.IGNORE_INDENTATION]: [...u2, l2] }, defaultMode: EP.REGULAR } : [s2, c2, l2, ...u2];
  }
  flushLexingReport(e6) {
    return { ...super.flushLexingReport(e6), remainingDedents: this.flushRemainingDedents(e6) };
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
    return qT(e6, n2, r2, r2 + n2.length, i2, i2, 1, n2.length);
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
    return t2.name === n2 ? this.indentTokenType : t2.name === r2 ? this.dedentTokenType : t2.name === i2 ? WT({ name: i2, pattern: this.whitespaceRegExp, group: MT.SKIPPED }) : t2;
  }
  flushRemainingDedents(e6) {
    let t2 = [];
    for (; this.indentationStack.length > 1; ) t2.push(this.createIndentationTokenInstance(this.dedentTokenType, e6, ``, e6.length)), this.indentationStack.pop();
    return this.indentationStack = [0], t2;
  }
}, OP = class extends jN {
  constructor(e6) {
    if (super(e6), e6.parser.TokenBuilder instanceof DP) this.indentationTokenBuilder = e6.parser.TokenBuilder;
    else throw Error(`IndentationAwareLexer requires an accompanying IndentationAwareTokenBuilder`);
  }
  tokenize(e6, t2 = AN) {
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
}, kP = class {
  stat(e6) {
    throw Error(`No file system is available.`);
  }
  statSync(e6) {
    throw Error(`No file system is available.`);
  }
  async exists() {
    return false;
  }
  existsSync() {
    return false;
  }
  readBinary() {
    throw Error(`No file system is available.`);
  }
  readBinarySync() {
    throw Error(`No file system is available.`);
  }
  readFile() {
    throw Error(`No file system is available.`);
  }
  readFileSync() {
    throw Error(`No file system is available.`);
  }
  async readDirectory() {
    return [];
  }
  readDirectorySync() {
    return [];
  }
};
const AP = { fileSystemProvider: () => new kP() };
var jP = { Grammar: () => void 0, LanguageMetaData: () => ({ caseInsensitive: false, fileExtensions: [`.langium`], languageId: `langium` }) }, MP = { AstReflection: () => new fn() };
function NP() {
  let e6 = vP(gP(AP), MP), t2 = vP(hP({ shared: e6 }), jP);
  return e6.ServiceRegistry.register(t2), t2;
}
function PP(e6) {
  let t2 = NP(), n2 = t2.serializer.JsonSerializer.deserialize(e6);
  return t2.shared.workspace.LangiumDocumentFactory.fromModel(n2, Zj.parse(`memory:/${n2.name ?? `grammar`}.langium`)), n2;
}
var FP = i({ AstUtils: () => ae, BiMap: () => lM, Cancellation: () => X, ContextCache: () => _M, CstUtils: () => pn, DONE_RESULT: () => E, Deferred: () => Hj, Disposable: () => wN, DisposableCache: () => hM, DocumentCache: () => vM, EMPTY_STREAM: () => ne, ErrorWithLocation: () => In, GrammarUtils: () => lr, MultiMap: () => cM, OperationCancelled: () => zj, Reduction: () => ie, RegExpUtils: () => Qn, SimpleCache: () => gM, StreamImpl: () => T, TreeStreamImpl: () => re, URI: () => Zj, UriTrie: () => eM, UriUtils: () => $j, WorkspaceCache: () => yM, assertCondition: () => Rn, assertUnreachable: () => Ln, delayNextTick: () => Pj, interruptAndCheck: () => Vj, isOperationCancelled: () => Bj, loadGrammarFromJson: () => PP, setInterruptionPeriod: () => Rj, startCancelableOperation: () => Lj, stream: () => D });
t(FP, LM);
var IP = class {
  constructor(e6) {
    this.activeCategories = /* @__PURE__ */ new Set(), this.allCategories = /* @__PURE__ */ new Set([`validating`, `parsing`, `linking`]), this.activeCategories = e6 ?? new Set(this.allCategories), this.records = new cM();
  }
  isActive(e6) {
    return this.activeCategories.has(e6);
  }
  start(...e6) {
    e6 ? e6.forEach((e7) => this.activeCategories.add(e7)) : this.activeCategories = new Set(this.allCategories);
  }
  stop(...e6) {
    e6 ? e6.forEach((e7) => this.activeCategories.delete(e7)) : this.activeCategories.clear();
  }
  createTask(e6, t2) {
    if (!this.isActive(e6)) throw Error(`Category "${e6}" is not active.`);
    return console.log(`Creating profiling task for '${e6}.${t2}'.`), new LP((t3) => this.records.add(e6, this.dumpRecord(e6, t3)), t2);
  }
  dumpRecord(e6, t2) {
    console.info(`Task ${e6}.${t2.identifier} executed in ${t2.duration.toFixed(2)}ms and ended at ${t2.date.toISOString()}`);
    let n2 = [];
    for (let e7 of t2.entries.keys()) {
      let r3 = t2.entries.get(e7), i3 = r3.reduce((e8, t3) => e8 + t3);
      n2.push({ name: `${t2.identifier}.${e7}`, count: r3.length, duration: i3 });
    }
    let r2 = t2.duration - n2.map((e7) => e7.duration).reduce((e7, t3) => e7 + t3, 0);
    n2.push({ name: t2.identifier, count: 1, duration: r2 }), n2.sort((e7, t3) => t3.duration - e7.duration);
    function i2(e7) {
      return Math.round(100 * e7) / 100;
    }
    return console.table(n2.map((e7) => ({ Element: e7.name, Count: e7.count, "Self %": i2(100 * e7.duration / t2.duration), "Time (ms)": i2(e7.duration) }))), t2;
  }
  getRecords(...e6) {
    return e6.length === 0 ? this.records.values() : this.records.entries().filter((t2) => e6.some((e7) => e7 === t2[0])).flatMap((e7) => e7[1]);
  }
}, LP = class {
  constructor(e6, t2) {
    this.stack = [], this.entries = new cM(), this.addRecord = e6, this.identifier = t2;
  }
  start() {
    if (this.startTime !== void 0) throw Error(`Task "${this.identifier}" is already started.`);
    this.startTime = performance.now();
  }
  stop() {
    if (this.startTime === void 0) throw Error(`Task "${this.identifier}" was not started.`);
    if (this.stack.length !== 0) throw Error(`Task "${this.identifier}" cannot be stopped before sub-task(s): ${this.stack.map((e7) => e7.id).join(`, `)}.`);
    let e6 = { identifier: this.identifier, date: /* @__PURE__ */ new Date(), duration: performance.now() - this.startTime, entries: this.entries };
    this.addRecord(e6), this.startTime = void 0, this.entries.clear();
  }
  startSubTask(e6) {
    this.stack.push({ id: e6, start: performance.now(), content: 0 });
  }
  stopSubTask(e6) {
    let t2 = this.stack.pop();
    if (!t2) throw Error(`Task "${this.identifier}.${e6}" was not started.`);
    if (t2.id !== e6) throw Error(`Sub-Task "${t2.id}" is not already stopped.`);
    let n2 = performance.now() - t2.start;
    this.stack.at(-1) !== void 0 && (this.stack[this.stack.length - 1].content += n2);
    let r2 = n2 - t2.content;
    this.entries.add(e6, r2);
  }
};
t(i({ AbstractAstReflection: () => x, AbstractCstNode: () => UA, AbstractLangiumParser: () => QA, AbstractParserErrorMessageProvider: () => ej, AbstractThreadedAsyncParser: () => dP, AstUtils: () => ae, BiMap: () => lM, Cancellation: () => X, CompositeCstNodeImpl: () => GA, ContextCache: () => _M, CstNodeBuilder: () => HA, CstUtils: () => pn, DEFAULT_TOKENIZE_OPTIONS: () => AN, DONE_RESULT: () => E, DatatypeSymbol: () => JA, DefaultAstNodeDescriptionProvider: () => PM, DefaultAstNodeLocator: () => IM, DefaultAsyncParser: () => uP, DefaultCommentProvider: () => lP, DefaultConfigurationProvider: () => RM, DefaultDocumentBuilder: () => EN, DefaultDocumentValidator: () => kM, DefaultHydrator: () => mP, DefaultIndexManager: () => DN, DefaultJsonSerializer: () => CM, DefaultLangiumDocumentFactory: () => tM, DefaultLangiumDocuments: () => nM, DefaultLangiumProfiler: () => IP, DefaultLexer: () => jN, DefaultLexerErrorMessageProvider: () => kN, DefaultLinker: () => iM, DefaultNameProvider: () => oM, DefaultReferenceDescriptionProvider: () => FM, DefaultReferences: () => sM, DefaultScopeComputation: () => uM, DefaultScopeProvider: () => bM, DefaultServiceRegistry: () => wM, DefaultTokenBuilder: () => Dj, DefaultValueConverter: () => Oj, DefaultWorkspaceLock: () => pP, DefaultWorkspaceManager: () => ON, Deferred: () => Hj, Disposable: () => wN, DisposableCache: () => hM, DocumentCache: () => vM, DocumentState: () => Z, DocumentValidator: () => NM, EMPTY_SCOPE: () => mM, EMPTY_STREAM: () => ne, EmptyFileSystem: () => AP, EmptyFileSystemProvider: () => kP, ErrorWithLocation: () => In, GrammarAST: () => ge, GrammarUtils: () => lr, IndentationAwareLexer: () => OP, IndentationAwareTokenBuilder: () => DP, JSDocDocumentationProvider: () => cP, LangiumCompletionParser: () => nj, LangiumParser: () => $A, LangiumParserErrorMessageProvider: () => tj, LeafCstNodeImpl: () => WA, LexingMode: () => EP, MapScope: () => fM, Module: () => _P, MultiMap: () => cM, MultiMapScope: () => pM, OperationCancelled: () => zj, ParserWorker: () => fP, ProfilingTask: () => LP, Reduction: () => ie, RefResolving: () => rM, RegExpUtils: () => Qn, RootCstNodeImpl: () => qA, SimpleCache: () => gM, StreamImpl: () => T, StreamScope: () => dM, TextDocument: () => Wj, TreeStreamImpl: () => re, URI: () => Zj, UriTrie: () => eM, UriUtils: () => $j, VALIDATE_EACH_NODE: () => OM, ValidationCategory: () => EM, ValidationRegistry: () => DM, ValueConverter: () => kj, WorkspaceCache: () => yM, assertCondition: () => Rn, assertUnreachable: () => Ln, createCompletionParser: () => wj, createDefaultCoreModule: () => hP, createDefaultSharedCoreModule: () => gP, createGrammarConfig: () => Yr, createLangiumParser: () => Tj, createParser: () => oj, delayNextTick: () => Pj, diagnosticData: () => TM, eagerLoad: () => bP, getDiagnosticRange: () => AM, indentationBuilderDefaultOptions: () => TP, inject: () => vP, interruptAndCheck: () => Vj, isAstNode: () => g, isAstNodeDescription: () => y, isAstNodeWithComment: () => xM, isCompositeCstNode: () => S, isIMultiModeLexerDefinition: () => NN, isJSDoc: () => IN, isLeafCstNode: () => C, isLinkingError: () => b, isMultiReference: () => v, isNamed: () => aM, isOperationCancelled: () => Bj, isReference: () => _, isRootCstNode: () => w, isTokenTypeArray: () => MN, isTokenTypeDictionary: () => PN, loadGrammarFromJson: () => PP, parseJSDoc: () => FN, prepareLangiumParser: () => Ej, setInterruptionPeriod: () => Rj, startCancelableOperation: () => Lj, stream: () => D, toDiagnosticData: () => MM, toDiagnosticSeverity: () => jM }), FP);
var RP = Object.defineProperty, $ = (e6, t2) => RP(e6, `name`, { value: t2, configurable: true }), zP;
((e6) => {
  e6.Terminals = { ARROW_DIRECTION: /L|R|T|B/, ARROW_GROUP: /\{group\}/, ARROW_INTO: /<|>/, ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/, ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/, TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/, STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/, ID: /[\w]([-\w]*\w)?/, NEWLINE: /\r?\n/, WHITESPACE: /[\t ]+/, YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/, DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/, SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/, ARCH_ICON: /\([\w-:]+\)/, ARCH_TITLE: /\[(?:"([^"\\]|\\.)*"|'([^'\\]|\\.)*'|[\w ]+)\]/ };
})(zP || (zP = {}));
var BP;
((e6) => {
  e6.Terminals = { ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/, ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/, TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/, INT: /0|[1-9][0-9]*(?!\.)/, STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/, NEWLINE: /\r?\n/, WHITESPACE: /[\t ]+/, YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/, DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/, SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/, REFERENCE: /\w([-\./\w]*[-\w])?/ };
})(BP || (BP = {}));
var VP;
((e6) => {
  e6.Terminals = { ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/, ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/, TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/, NEWLINE: /\r?\n/, WHITESPACE: /[\t ]+/, YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/, DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/, SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/ };
})(VP || (VP = {}));
var HP;
((e6) => {
  e6.Terminals = { ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/, ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/, TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/, INT: /0|[1-9][0-9]*(?!\.)/, STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/, NEWLINE: /\r?\n/, WHITESPACE: /[\t ]+/, YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/, DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/, SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/ };
})(HP || (HP = {}));
var UP;
((e6) => {
  e6.Terminals = { NUMBER_PIE: /(?:-?[0-9]+\.[0-9]+(?!\.))|(?:-?(0|[1-9][0-9]*)(?!\.))/, ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/, ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/, TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/, STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/, NEWLINE: /\r?\n/, WHITESPACE: /[\t ]+/, YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/, DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/, SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/ };
})(UP || (UP = {}));
var WP;
((e6) => {
  e6.Terminals = { GRATICULE: /circle|polygon/, BOOLEAN: /true|false/, ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/, ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/, TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/, NUMBER: /(?:[0-9]+\.[0-9]+(?!\.))|(?:0|[1-9][0-9]*(?!\.))/, STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/, ID: /[\w]([-\w]*\w)?/, NEWLINE: /\r?\n/, WHITESPACE: /[\t ]+/, YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/, DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/, SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/ };
})(WP || (WP = {}));
var GP;
((e6) => {
  e6.Terminals = { ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/, ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/, TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/, TREEMAP_KEYWORD: /treemap-beta|treemap/, CLASS_DEF: /classDef\s+([a-zA-Z_][a-zA-Z0-9_]+)(?:\s+([^;\r\n]*))?(?:;)?/, STYLE_SEPARATOR: /:::/, SEPARATOR: /:/, COMMA: /,/, INDENTATION: /[ \t]{1,}/, WS: /[ \t]+/, ML_COMMENT: /\%\%[^\n]*/, NL: /\r?\n/, ID2: /[a-zA-Z_][a-zA-Z0-9_]*/, NUMBER2: /[0-9_\.\,]+/, STRING2: /"[^"]*"|'[^']*'/ };
})(GP || (GP = {}));
var KP;
((e6) => {
  e6.Terminals = { ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/, ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/, TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/, INDENTATION: /[ \t]{1,}/, WS: /[ \t]+/, ML_COMMENT: /\%\%[^\n]*/, NL: /\r?\n/, STRING2: /"[^"]*"|'[^']*'/ };
})(KP || (KP = {}));
var qP;
((e6) => {
  e6.Terminals = { WARDLEY_NUMBER: /[0-9]+\.[0-9]+/, ARROW: /->/, LINK_PORT: /\+<>|\+>|\+</, LINK_ARROW: /-->|-\.->|>|\+'[^']*'<>|\+'[^']*'<|\+'[^']*'>/, LINK_LABEL: /;[^\n\r]+/, STRATEGY: /build|buy|outsource|market/, KW_WARDLEY: /wardley-beta/, KW_SIZE: /size/, KW_EVOLUTION: /evolution/, KW_ANCHOR: /anchor/, KW_COMPONENT: /component/, KW_LABEL: /label/, KW_INERTIA: /inertia/, KW_EVOLVE: /evolve/, KW_PIPELINE: /pipeline/, KW_NOTE: /note/, KW_ANNOTATIONS: /annotations/, KW_ANNOTATION: /annotation/, KW_ACCELERATOR: /accelerator/, KW_DEACCELERATOR: /deaccelerator/, NAME_WITH_SPACES: /(?!title\s|accTitle|accDescr)[A-Za-z][A-Za-z0-9_()&]*(?:[ \t]+[A-Za-z(][A-Za-z0-9_()&]*)*/, WS: /[ \t]+/, ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/, ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/, TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/, INT: /0|[1-9][0-9]*(?!\.)/, STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/, ID: /[\w]([-\w]*\w)?/, NEWLINE: /\r?\n/, WHITESPACE: /[\t ]+/, YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/, DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/, SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/ };
})(qP || (qP = {})), { ...zP.Terminals, ...BP.Terminals, ...VP.Terminals, ...HP.Terminals, ...UP.Terminals, ...WP.Terminals, ...KP.Terminals, ...GP.Terminals, ...qP.Terminals };
var JP = { $type: `Accelerator`, name: `name`, x: `x`, y: `y` }, YP = { $type: `Anchor`, evolution: `evolution`, name: `name`, visibility: `visibility` }, XP = { $type: `Annotation`, number: `number`, text: `text`, x: `x`, y: `y` }, ZP = { $type: `Annotations`, x: `x`, y: `y` }, QP = { $type: `Architecture`, accDescr: `accDescr`, accTitle: `accTitle`, edges: `edges`, groups: `groups`, junctions: `junctions`, services: `services`, title: `title` };
function $P(e6) {
  return tI.isInstance(e6, QP.$type);
}
$($P, `isArchitecture`);
var eF = { $type: `Axis`, label: `label`, name: `name` }, tF = { $type: `Branch`, name: `name`, order: `order` };
function nF(e6) {
  return tI.isInstance(e6, tF.$type);
}
$(nF, `isBranch`);
var rF = { $type: `Checkout`, branch: `branch` }, iF = { $type: `CherryPicking`, id: `id`, parent: `parent`, tags: `tags` }, aF = { $type: `ClassDefStatement`, className: `className`, styleText: `styleText` }, oF = { $type: `Commit`, id: `id`, message: `message`, tags: `tags`, type: `type` };
function sF(e6) {
  return tI.isInstance(e6, oF.$type);
}
$(sF, `isCommit`);
var cF = { $type: `Component`, decorator: `decorator`, evolution: `evolution`, inertia: `inertia`, label: `label`, name: `name`, visibility: `visibility` }, lF = { $type: `Curve`, entries: `entries`, label: `label`, name: `name` }, uF = { $type: `Deaccelerator`, name: `name`, x: `x`, y: `y` }, dF = { $type: `Decorator`, strategy: `strategy` }, fF = { $type: `Direction`, accDescr: `accDescr`, accTitle: `accTitle`, dir: `dir`, statements: `statements`, title: `title` }, pF = { $type: `Edge`, lhsDir: `lhsDir`, lhsGroup: `lhsGroup`, lhsId: `lhsId`, lhsInto: `lhsInto`, rhsDir: `rhsDir`, rhsGroup: `rhsGroup`, rhsId: `rhsId`, rhsInto: `rhsInto`, title: `title` }, mF = { $type: `Entry`, axis: `axis`, value: `value` }, hF = { $type: `Evolution`, stages: `stages` }, gF = { $type: `EvolutionStage`, boundary: `boundary`, name: `name`, secondName: `secondName` }, _F = { $type: `Evolve`, component: `component`, target: `target` }, vF = { $type: `GitGraph`, accDescr: `accDescr`, accTitle: `accTitle`, statements: `statements`, title: `title` };
function yF(e6) {
  return tI.isInstance(e6, vF.$type);
}
$(yF, `isGitGraph`);
var bF = { $type: `Group`, icon: `icon`, id: `id`, in: `in`, title: `title` }, xF = { $type: `Info`, accDescr: `accDescr`, accTitle: `accTitle`, title: `title` };
function SF(e6) {
  return tI.isInstance(e6, xF.$type);
}
$(SF, `isInfo`);
var CF = { $type: `Item`, classSelector: `classSelector`, name: `name` }, wF = { $type: `Junction`, id: `id`, in: `in` }, TF = { $type: `Label`, negX: `negX`, negY: `negY`, offsetX: `offsetX`, offsetY: `offsetY` }, EF = { $type: `Leaf`, classSelector: `classSelector`, name: `name`, value: `value` }, DF = { $type: `Link`, arrow: `arrow`, from: `from`, fromPort: `fromPort`, linkLabel: `linkLabel`, to: `to`, toPort: `toPort` }, OF = { $type: `Merge`, branch: `branch`, id: `id`, tags: `tags`, type: `type` };
function kF(e6) {
  return tI.isInstance(e6, OF.$type);
}
$(kF, `isMerge`);
var AF = { $type: `Note`, evolution: `evolution`, text: `text`, visibility: `visibility` }, jF = { $type: `Option`, name: `name`, value: `value` }, MF = { $type: `Packet`, accDescr: `accDescr`, accTitle: `accTitle`, blocks: `blocks`, title: `title` };
function NF(e6) {
  return tI.isInstance(e6, MF.$type);
}
$(NF, `isPacket`);
var PF = { $type: `PacketBlock`, bits: `bits`, end: `end`, label: `label`, start: `start` };
function FF(e6) {
  return tI.isInstance(e6, PF.$type);
}
$(FF, `isPacketBlock`);
var IF = { $type: `Pie`, accDescr: `accDescr`, accTitle: `accTitle`, sections: `sections`, showData: `showData`, title: `title` };
function LF(e6) {
  return tI.isInstance(e6, IF.$type);
}
$(LF, `isPie`);
var RF = { $type: `PieSection`, label: `label`, value: `value` };
function zF(e6) {
  return tI.isInstance(e6, RF.$type);
}
$(zF, `isPieSection`);
var BF = { $type: `Pipeline`, components: `components`, parent: `parent` }, VF = { $type: `PipelineComponent`, evolution: `evolution`, label: `label`, name: `name` }, HF = { $type: `Radar`, accDescr: `accDescr`, accTitle: `accTitle`, axes: `axes`, curves: `curves`, options: `options`, title: `title` }, UF = { $type: `Section`, classSelector: `classSelector`, name: `name` }, WF = { $type: `Service`, icon: `icon`, iconText: `iconText`, id: `id`, in: `in`, title: `title` }, GF = { $type: `Size`, height: `height`, width: `width` }, KF = { $type: `Statement` }, qF = { $type: `Treemap`, accDescr: `accDescr`, accTitle: `accTitle`, title: `title`, TreemapRows: `TreemapRows` };
function JF(e6) {
  return tI.isInstance(e6, qF.$type);
}
$(JF, `isTreemap`);
var YF = { $type: `TreemapRow`, indent: `indent`, item: `item` }, XF = { $type: `TreeNode`, indent: `indent`, name: `name` }, ZF = { $type: `TreeView`, accDescr: `accDescr`, accTitle: `accTitle`, nodes: `nodes`, title: `title` }, QF = { $type: `Wardley`, accDescr: `accDescr`, accelerators: `accelerators`, accTitle: `accTitle`, anchors: `anchors`, annotation: `annotation`, annotations: `annotations`, components: `components`, deaccelerators: `deaccelerators`, evolution: `evolution`, evolves: `evolves`, links: `links`, notes: `notes`, pipelines: `pipelines`, size: `size`, title: `title` };
function $F(e6) {
  return tI.isInstance(e6, QF.$type);
}
$($F, `isWardley`);
var eI = (_a2 = class extends x {
  constructor() {
    super(...arguments), this.types = { Accelerator: { name: JP.$type, properties: { name: { name: JP.name }, x: { name: JP.x }, y: { name: JP.y } }, superTypes: [] }, Anchor: { name: YP.$type, properties: { evolution: { name: YP.evolution }, name: { name: YP.name }, visibility: { name: YP.visibility } }, superTypes: [] }, Annotation: { name: XP.$type, properties: { number: { name: XP.number }, text: { name: XP.text }, x: { name: XP.x }, y: { name: XP.y } }, superTypes: [] }, Annotations: { name: ZP.$type, properties: { x: { name: ZP.x }, y: { name: ZP.y } }, superTypes: [] }, Architecture: { name: QP.$type, properties: { accDescr: { name: QP.accDescr }, accTitle: { name: QP.accTitle }, edges: { name: QP.edges, defaultValue: [] }, groups: { name: QP.groups, defaultValue: [] }, junctions: { name: QP.junctions, defaultValue: [] }, services: { name: QP.services, defaultValue: [] }, title: { name: QP.title } }, superTypes: [] }, Axis: { name: eF.$type, properties: { label: { name: eF.label }, name: { name: eF.name } }, superTypes: [] }, Branch: { name: tF.$type, properties: { name: { name: tF.name }, order: { name: tF.order } }, superTypes: [KF.$type] }, Checkout: { name: rF.$type, properties: { branch: { name: rF.branch } }, superTypes: [KF.$type] }, CherryPicking: { name: iF.$type, properties: { id: { name: iF.id }, parent: { name: iF.parent }, tags: { name: iF.tags, defaultValue: [] } }, superTypes: [KF.$type] }, ClassDefStatement: { name: aF.$type, properties: { className: { name: aF.className }, styleText: { name: aF.styleText } }, superTypes: [] }, Commit: { name: oF.$type, properties: { id: { name: oF.id }, message: { name: oF.message }, tags: { name: oF.tags, defaultValue: [] }, type: { name: oF.type } }, superTypes: [KF.$type] }, Component: { name: cF.$type, properties: { decorator: { name: cF.decorator }, evolution: { name: cF.evolution }, inertia: { name: cF.inertia, defaultValue: false }, label: { name: cF.label }, name: { name: cF.name }, visibility: { name: cF.visibility } }, superTypes: [] }, Curve: { name: lF.$type, properties: { entries: { name: lF.entries, defaultValue: [] }, label: { name: lF.label }, name: { name: lF.name } }, superTypes: [] }, Deaccelerator: { name: uF.$type, properties: { name: { name: uF.name }, x: { name: uF.x }, y: { name: uF.y } }, superTypes: [] }, Decorator: { name: dF.$type, properties: { strategy: { name: dF.strategy } }, superTypes: [] }, Direction: { name: fF.$type, properties: { accDescr: { name: fF.accDescr }, accTitle: { name: fF.accTitle }, dir: { name: fF.dir }, statements: { name: fF.statements, defaultValue: [] }, title: { name: fF.title } }, superTypes: [vF.$type] }, Edge: { name: pF.$type, properties: { lhsDir: { name: pF.lhsDir }, lhsGroup: { name: pF.lhsGroup, defaultValue: false }, lhsId: { name: pF.lhsId }, lhsInto: { name: pF.lhsInto, defaultValue: false }, rhsDir: { name: pF.rhsDir }, rhsGroup: { name: pF.rhsGroup, defaultValue: false }, rhsId: { name: pF.rhsId }, rhsInto: { name: pF.rhsInto, defaultValue: false }, title: { name: pF.title } }, superTypes: [] }, Entry: { name: mF.$type, properties: { axis: { name: mF.axis, referenceType: eF.$type }, value: { name: mF.value } }, superTypes: [] }, Evolution: { name: hF.$type, properties: { stages: { name: hF.stages, defaultValue: [] } }, superTypes: [] }, EvolutionStage: { name: gF.$type, properties: { boundary: { name: gF.boundary }, name: { name: gF.name }, secondName: { name: gF.secondName } }, superTypes: [] }, Evolve: { name: _F.$type, properties: { component: { name: _F.component }, target: { name: _F.target } }, superTypes: [] }, GitGraph: { name: vF.$type, properties: { accDescr: { name: vF.accDescr }, accTitle: { name: vF.accTitle }, statements: { name: vF.statements, defaultValue: [] }, title: { name: vF.title } }, superTypes: [] }, Group: { name: bF.$type, properties: { icon: { name: bF.icon }, id: { name: bF.id }, in: { name: bF.in }, title: { name: bF.title } }, superTypes: [] }, Info: { name: xF.$type, properties: { accDescr: { name: xF.accDescr }, accTitle: { name: xF.accTitle }, title: { name: xF.title } }, superTypes: [] }, Item: { name: CF.$type, properties: { classSelector: { name: CF.classSelector }, name: { name: CF.name } }, superTypes: [] }, Junction: { name: wF.$type, properties: { id: { name: wF.id }, in: { name: wF.in } }, superTypes: [] }, Label: { name: TF.$type, properties: { negX: { name: TF.negX, defaultValue: false }, negY: { name: TF.negY, defaultValue: false }, offsetX: { name: TF.offsetX }, offsetY: { name: TF.offsetY } }, superTypes: [] }, Leaf: { name: EF.$type, properties: { classSelector: { name: EF.classSelector }, name: { name: EF.name }, value: { name: EF.value } }, superTypes: [CF.$type] }, Link: { name: DF.$type, properties: { arrow: { name: DF.arrow }, from: { name: DF.from }, fromPort: { name: DF.fromPort }, linkLabel: { name: DF.linkLabel }, to: { name: DF.to }, toPort: { name: DF.toPort } }, superTypes: [] }, Merge: { name: OF.$type, properties: { branch: { name: OF.branch }, id: { name: OF.id }, tags: { name: OF.tags, defaultValue: [] }, type: { name: OF.type } }, superTypes: [KF.$type] }, Note: { name: AF.$type, properties: { evolution: { name: AF.evolution }, text: { name: AF.text }, visibility: { name: AF.visibility } }, superTypes: [] }, Option: { name: jF.$type, properties: { name: { name: jF.name }, value: { name: jF.value, defaultValue: false } }, superTypes: [] }, Packet: { name: MF.$type, properties: { accDescr: { name: MF.accDescr }, accTitle: { name: MF.accTitle }, blocks: { name: MF.blocks, defaultValue: [] }, title: { name: MF.title } }, superTypes: [] }, PacketBlock: { name: PF.$type, properties: { bits: { name: PF.bits }, end: { name: PF.end }, label: { name: PF.label }, start: { name: PF.start } }, superTypes: [] }, Pie: { name: IF.$type, properties: { accDescr: { name: IF.accDescr }, accTitle: { name: IF.accTitle }, sections: { name: IF.sections, defaultValue: [] }, showData: { name: IF.showData, defaultValue: false }, title: { name: IF.title } }, superTypes: [] }, PieSection: { name: RF.$type, properties: { label: { name: RF.label }, value: { name: RF.value } }, superTypes: [] }, Pipeline: { name: BF.$type, properties: { components: { name: BF.components, defaultValue: [] }, parent: { name: BF.parent } }, superTypes: [] }, PipelineComponent: { name: VF.$type, properties: { evolution: { name: VF.evolution }, label: { name: VF.label }, name: { name: VF.name } }, superTypes: [] }, Radar: { name: HF.$type, properties: { accDescr: { name: HF.accDescr }, accTitle: { name: HF.accTitle }, axes: { name: HF.axes, defaultValue: [] }, curves: { name: HF.curves, defaultValue: [] }, options: { name: HF.options, defaultValue: [] }, title: { name: HF.title } }, superTypes: [] }, Section: { name: UF.$type, properties: { classSelector: { name: UF.classSelector }, name: { name: UF.name } }, superTypes: [CF.$type] }, Service: { name: WF.$type, properties: { icon: { name: WF.icon }, iconText: { name: WF.iconText }, id: { name: WF.id }, in: { name: WF.in }, title: { name: WF.title } }, superTypes: [] }, Size: { name: GF.$type, properties: { height: { name: GF.height }, width: { name: GF.width } }, superTypes: [] }, Statement: { name: KF.$type, properties: {}, superTypes: [] }, TreeNode: { name: XF.$type, properties: { indent: { name: XF.indent }, name: { name: XF.name } }, superTypes: [] }, TreeView: { name: ZF.$type, properties: { accDescr: { name: ZF.accDescr }, accTitle: { name: ZF.accTitle }, nodes: { name: ZF.nodes, defaultValue: [] }, title: { name: ZF.title } }, superTypes: [] }, Treemap: { name: qF.$type, properties: { accDescr: { name: qF.accDescr }, accTitle: { name: qF.accTitle }, title: { name: qF.title }, TreemapRows: { name: qF.TreemapRows, defaultValue: [] } }, superTypes: [] }, TreemapRow: { name: YF.$type, properties: { indent: { name: YF.indent }, item: { name: YF.item } }, superTypes: [] }, Wardley: { name: QF.$type, properties: { accDescr: { name: QF.accDescr }, accelerators: { name: QF.accelerators, defaultValue: [] }, accTitle: { name: QF.accTitle }, anchors: { name: QF.anchors, defaultValue: [] }, annotation: { name: QF.annotation, defaultValue: [] }, annotations: { name: QF.annotations, defaultValue: [] }, components: { name: QF.components, defaultValue: [] }, deaccelerators: { name: QF.deaccelerators, defaultValue: [] }, evolution: { name: QF.evolution }, evolves: { name: QF.evolves, defaultValue: [] }, links: { name: QF.links, defaultValue: [] }, notes: { name: QF.notes, defaultValue: [] }, pipelines: { name: QF.pipelines, defaultValue: [] }, size: { name: QF.size }, title: { name: QF.title } }, superTypes: [] } };
  }
}, $(_a2, `MermaidAstReflection`), _a2), tI = new eI(), nI, rI = $(() => nI ?? (nI = PP(`{"$type":"Grammar","isDeclared":true,"name":"ArchitectureGrammar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Architecture","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"architecture-beta"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"groups","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"services","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"junctions","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"edges","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]},"entry":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"LeftPort","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"lhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},"entry":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"RightPort","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"rhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Keyword","value":":"}]},"entry":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"Arrow","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Assignment","feature":"lhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"--"},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]}},{"$type":"Keyword","value":"-"}]}]},{"$type":"Assignment","feature":"rhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}]},"entry":false,"parameters":[]},{"$type":"ParserRule","name":"Group","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"group"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Service","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"service"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"iconText","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]}}],"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Junction","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"junction"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Edge","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"lhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"lhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"rhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"rhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"ARROW_DIRECTION","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"L"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"R"},"parenthesized":false}],"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"T"},"parenthesized":false}],"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"B"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_GROUP","definition":{"$type":"RegexToken","regex":"/\\\\{group\\\\}/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_INTO","definition":{"$type":"RegexToken","regex":"/<|>/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@18"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@19"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","name":"ARCH_ICON","definition":{"$type":"RegexToken","regex":"/\\\\([\\\\w-:]+\\\\)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_TITLE","definition":{"$type":"RegexToken","regex":"/\\\\[(?:\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'|[\\\\w ]+)\\\\]/","parenthesized":false},"fragment":false,"hidden":false}],"interfaces":[],"types":[]}`)), `ArchitectureGrammarGrammar`), iI, aI = $(() => iI ?? (iI = PP(`{"$type":"Grammar","isDeclared":true,"name":"GitGraphGrammar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"GitGraph","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Keyword","value":":"}]},{"$type":"Keyword","value":"gitGraph:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Keyword","value":":"}]}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"Assignment","feature":"statements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Direction","definition":{"$type":"Assignment","feature":"dir","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"LR"},{"$type":"Keyword","value":"TB"},{"$type":"Keyword","value":"BT"}]}},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Commit","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"commit"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"msg:","cardinality":"?"},{"$type":"Assignment","feature":"message","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Branch","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"branch"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"order:"},{"$type":"Assignment","feature":"order","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Merge","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"merge"},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Checkout","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"checkout"},{"$type":"Keyword","value":"switch"}]},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"CherryPicking","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"cherry-pick"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"parent:"},{"$type":"Assignment","feature":"parent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@14"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","name":"REFERENCE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\\\w([-\\\\./\\\\w]*[-\\\\w])?/","parenthesized":false},"fragment":false,"hidden":false}],"interfaces":[],"types":[]}`)), `GitGraphGrammarGrammar`), oI, sI = $(() => oI ?? (oI = PP(`{"$type":"Grammar","isDeclared":true,"name":"InfoGrammar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Info","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"info"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"Keyword","value":"showInfo"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"?"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@7"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false}],"interfaces":[],"types":[]}`)), `InfoGrammarGrammar`), cI, lI = $(() => cI ?? (cI = PP(`{"$type":"Grammar","isDeclared":true,"name":"PacketGrammar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Packet","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"packet"},{"$type":"Keyword","value":"packet-beta"}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"Assignment","feature":"blocks","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"PacketBlock","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"start","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"end","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}],"cardinality":"?"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"+"},{"$type":"Assignment","feature":"bits","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]}]},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@9"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false}],"interfaces":[],"types":[]}`)), `PacketGrammarGrammar`), uI, dI = $(() => uI ?? (uI = PP(`{"$type":"Grammar","isDeclared":true,"name":"PieGrammar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Pie","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"pie"},{"$type":"Assignment","feature":"showData","operator":"?=","terminal":{"$type":"Keyword","value":"showData"},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"Assignment","feature":"sections","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"PieSection","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"FLOAT_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/-?[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/-?(0|[1-9][0-9]*)(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@2"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@3"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@11"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@12"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false}],"interfaces":[],"types":[]}`)), `PieGrammarGrammar`), fI, pI = $(() => fI ?? (fI = PP(`{"$type":"Grammar","isDeclared":true,"name":"RadarGrammar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Radar","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":"radar-beta:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":":"}]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Keyword","value":"axis"},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"curve"},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"Label","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}},{"$type":"Keyword","value":"]"}]},"entry":false,"parameters":[]},{"$type":"ParserRule","name":"Axis","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Curve","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"},{"$type":"Keyword","value":"{"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Keyword","value":"}"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"Entries","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]}]},"entry":false,"parameters":[]},{"$type":"ParserRule","name":"DetailedEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"axis","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@2"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},"deprecatedSyntax":false,"isMulti":false}},{"$type":"Keyword","value":":","cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"NumberEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Option","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"showLegend"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"ticks"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"max"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"min"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"graticule"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"GRATICULE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"circle"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"polygon"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@16"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false}],"interfaces":[{"$type":"Interface","name":"Entry","attributes":[{"$type":"TypeAttribute","name":"axis","isOptional":true,"type":{"$type":"ReferenceType","referenceType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@2"}},"isMulti":false}},{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}],"superTypes":[]}],"types":[]}`)), `RadarGrammarGrammar`), mI, hI = $(() => mI ?? (mI = PP(`{"$type":"Grammar","isDeclared":true,"name":"TreemapGrammar","rules":[{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"ParserRule","entry":true,"name":"Treemap","returnType":{"$ref":"#/interfaces@4"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@0"},"arguments":[]},{"$type":"Assignment","feature":"TreemapRows","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"TREEMAP_KEYWORD","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"treemap-beta"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"treemap"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"CLASS_DEF","definition":{"$type":"RegexToken","regex":"/classDef\\\\s+([a-zA-Z_][a-zA-Z0-9_]+)(?:\\\\s+([^;\\\\r\\\\n]*))?(?:;)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STYLE_SEPARATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":":::"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"SEPARATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":":"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"COMMA","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":","},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INDENTATION","definition":{"$type":"RegexToken","regex":"/[ \\\\t]{1,}/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WS","definition":{"$type":"RegexToken","regex":"/[ \\\\t]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"ML_COMMENT","definition":{"$type":"RegexToken","regex":"/\\\\%\\\\%[^\\\\n]*/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"NL","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false},{"$type":"ParserRule","name":"TreemapRow","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"indent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"item","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"ClassDef","dataType":"string","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Item","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Section","returnType":{"$ref":"#/interfaces@1"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Assignment","feature":"classSelector","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"?"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Leaf","returnType":{"$ref":"#/interfaces@2"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[],"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[],"cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Assignment","feature":"classSelector","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"?"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"ID2","definition":{"$type":"RegexToken","regex":"/[a-zA-Z_][a-zA-Z0-9_]*/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER2","definition":{"$type":"RegexToken","regex":"/[0-9_\\\\.\\\\,]+/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"MyNumber","dataType":"number","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"STRING2","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/","parenthesized":false},"fragment":false,"hidden":false}],"interfaces":[{"$type":"Interface","name":"Item","attributes":[{"$type":"TypeAttribute","name":"name","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false},{"$type":"TypeAttribute","name":"classSelector","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]},{"$type":"Interface","name":"Section","superTypes":[{"$ref":"#/interfaces@0"}],"attributes":[]},{"$type":"Interface","name":"Leaf","superTypes":[{"$ref":"#/interfaces@0"}],"attributes":[{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}]},{"$type":"Interface","name":"ClassDefStatement","attributes":[{"$type":"TypeAttribute","name":"className","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false},{"$type":"TypeAttribute","name":"styleText","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false}],"superTypes":[]},{"$type":"Interface","name":"Treemap","attributes":[{"$type":"TypeAttribute","name":"TreemapRows","type":{"$type":"ArrayType","elementType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@15"}}},"isOptional":false},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"imports":[],"types":[],"$comment":"/**\\n * Treemap grammar for Langium\\n * Converted from mindmap grammar\\n *\\n * The ML_COMMENT and NL hidden terminals handle whitespace, comments, and newlines\\n * before the treemap keyword, allowing for empty lines and comments before the\\n * treemap declaration.\\n */"}`)), `TreemapGrammarGrammar`), gI, _I = $(() => gI ?? (gI = PP(`{"$type":"Grammar","isDeclared":true,"name":"TreeViewGrammar","rules":[{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"ParserRule","entry":true,"name":"TreeView","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"treeView-beta"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[],"cardinality":"?"},{"$type":"Assignment","feature":"nodes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@0"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"INDENTATION","definition":{"$type":"RegexToken","regex":"/[ \\\\t]{1,}/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WS","definition":{"$type":"RegexToken","regex":"/[ \\\\t]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"ML_COMMENT","definition":{"$type":"RegexToken","regex":"/\\\\%\\\\%[^\\\\n]*/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"NL","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false},{"$type":"ParserRule","name":"TreeNode","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"indent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"STRING2","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/","parenthesized":false},"fragment":false,"hidden":false}],"interfaces":[{"$type":"Interface","name":"TreeView","attributes":[{"$type":"TypeAttribute","name":"nodes","type":{"$type":"ArrayType","elementType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@9"}}},"isOptional":false},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"imports":[],"types":[],"$comment":"/**\\n * TreeView grammar for Langium\\n * Converted from treemap grammar\\n *\\n * The ML_COMMENT and NL hidden terminals handle whitespace, comments, and newlines\\n * before the treemap keyword, allowing for empty lines and comments before the\\n * treeView declaration.\\n */"}`)), `TreeViewGrammarGrammar`), vI, yI = $(() => vI ?? (vI = PP(`{"$type":"Grammar","isDeclared":true,"name":"WardleyGrammar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Wardley","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@52"},"arguments":[],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@25"},"arguments":[]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@52"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@42"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"size","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Assignment","feature":"evolution","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Assignment","feature":"anchors","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"components","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"links","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Assignment","feature":"evolves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Assignment","feature":"pipelines","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"notes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}},{"$type":"Assignment","feature":"annotations","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}},{"$type":"Assignment","feature":"annotation","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}},{"$type":"Assignment","feature":"accelerators","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},{"$type":"Assignment","feature":"deaccelerators","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}}]},"entry":false,"parameters":[]},{"$type":"ParserRule","name":"Size","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@26"},"arguments":[]},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"width","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@48"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"height","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@48"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Evolution","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@27"},"arguments":[]},{"$type":"Assignment","feature":"stages","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]},{"$type":"Assignment","feature":"stages","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}}],"cardinality":"+"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EvolutionStage","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"@"},{"$type":"Assignment","feature":"boundary","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}}],"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"/"},{"$type":"Assignment","feature":"secondName","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}}],"cardinality":"?"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Anchor","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"visibility","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"evolution","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Component","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"visibility","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"evolution","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"decorator","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"inertia","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@31"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"("},{"$type":"Assignment","feature":"inertia","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@31"},"arguments":[]}},{"$type":"Keyword","value":")"}]}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Label","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@30"},"arguments":[]},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"negX","operator":"?=","terminal":{"$type":"Keyword","value":"-"},"cardinality":"?"},{"$type":"Assignment","feature":"offsetX","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@48"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"negY","operator":"?=","terminal":{"$type":"Keyword","value":"-"},"cardinality":"?"},{"$type":"Assignment","feature":"offsetY","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@48"},"arguments":[]}},{"$type":"Keyword","value":"]"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Decorator","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"("},{"$type":"Assignment","feature":"strategy","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]}},{"$type":"Keyword","value":")"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Link","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"from","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Assignment","feature":"fromPort","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"arrow","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}]},"cardinality":"?"},{"$type":"Assignment","feature":"to","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Assignment","feature":"toPort","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"linkLabel","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Evolve","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@32"},"arguments":[]},{"$type":"Assignment","feature":"component","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Assignment","feature":"target","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Pipeline","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@33"},"arguments":[]},{"$type":"Assignment","feature":"parent","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Keyword","value":"{"},{"$type":"RuleCall","rule":{"$ref":"#/rules@52"},"arguments":[],"cardinality":"+"},{"$type":"Assignment","feature":"components","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]},"cardinality":"+"},{"$type":"Keyword","value":"}"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"PipelineComponent","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"evolution","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Note","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@34"},"arguments":[]},{"$type":"Assignment","feature":"text","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]}},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"visibility","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"evolution","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Annotations","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@35"},"arguments":[]},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"x","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"y","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Annotation","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@36"},"arguments":[]},{"$type":"Assignment","feature":"number","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@48"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"x","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"y","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"Assignment","feature":"text","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"CoordinateValue","dataType":"number","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@48"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Accelerator","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@37"},"arguments":[]},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"x","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"y","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Deaccelerator","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@38"},"arguments":[]},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"x","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"y","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"WARDLEY_NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"->"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"LINK_PORT","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"+<>"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"+>"},"parenthesized":false}],"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"+<"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"LINK_ARROW","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"-->"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"-.->"},"parenthesized":false}],"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":">"},"parenthesized":false}],"parenthesized":false},{"$type":"RegexToken","regex":"/\\\\+'[^']*'<>/","parenthesized":false}],"parenthesized":false},{"$type":"RegexToken","regex":"/\\\\+'[^']*'</","parenthesized":false}],"parenthesized":false},{"$type":"RegexToken","regex":"/\\\\+'[^']*'>/","parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"LINK_LABEL","definition":{"$type":"RegexToken","regex":"/;[^\\\\n\\\\r]+/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRATEGY","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"build"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"buy"},"parenthesized":false}],"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"outsource"},"parenthesized":false}],"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"market"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_WARDLEY","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"wardley-beta"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_SIZE","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"size"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_EVOLUTION","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"evolution"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_ANCHOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"anchor"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_COMPONENT","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"component"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_LABEL","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"label"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_INERTIA","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"inertia"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_EVOLVE","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"evolve"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_PIPELINE","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"pipeline"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_NOTE","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"note"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_ANNOTATIONS","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"annotations"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_ANNOTATION","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"annotation"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_ACCELERATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"accelerator"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_DEACCELERATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"deaccelerator"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NAME_WITH_SPACES","definition":{"$type":"RegexToken","regex":"/(?!title\\\\s|accTitle|accDescr)[A-Za-z][A-Za-z0-9_()&]*(?:[ \\\\t]+[A-Za-z(][A-Za-z0-9_()&]*)*/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WS","definition":{"$type":"RegexToken","regex":"/[ \\\\t]+/","parenthesized":false},"fragment":false},{"$type":"ParserRule","name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@52"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@44"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@45"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@46"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@47"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@48"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false}],"interfaces":[],"types":[]}`)), `WardleyGrammarGrammar`), bI = { languageId: `architecture`, fileExtensions: [`.mmd`, `.mermaid`], caseInsensitive: false, mode: `production` }, xI = { languageId: `gitGraph`, fileExtensions: [`.mmd`, `.mermaid`], caseInsensitive: false, mode: `production` }, SI = { languageId: `info`, fileExtensions: [`.mmd`, `.mermaid`], caseInsensitive: false, mode: `production` }, CI = { languageId: `packet`, fileExtensions: [`.mmd`, `.mermaid`], caseInsensitive: false, mode: `production` }, wI = { languageId: `pie`, fileExtensions: [`.mmd`, `.mermaid`], caseInsensitive: false, mode: `production` }, TI = { languageId: `radar`, fileExtensions: [`.mmd`, `.mermaid`], caseInsensitive: false, mode: `production` }, EI = { languageId: `treemap`, fileExtensions: [`.mmd`, `.mermaid`], caseInsensitive: false, mode: `production` }, DI = { languageId: `treeView`, fileExtensions: [`.mmd`, `.mermaid`], caseInsensitive: false, mode: `production` }, OI = { languageId: `wardley`, fileExtensions: [`.mmd`, `.mermaid`], caseInsensitive: false, mode: `production` }, kI = { AstReflection: $(() => new eI(), `AstReflection`) }, AI = { Grammar: $(() => rI(), `Grammar`), LanguageMetaData: $(() => bI, `LanguageMetaData`), parser: {} }, jI = { Grammar: $(() => aI(), `Grammar`), LanguageMetaData: $(() => xI, `LanguageMetaData`), parser: {} }, MI = { Grammar: $(() => sI(), `Grammar`), LanguageMetaData: $(() => SI, `LanguageMetaData`), parser: {} }, NI = { Grammar: $(() => lI(), `Grammar`), LanguageMetaData: $(() => CI, `LanguageMetaData`), parser: {} }, PI = { Grammar: $(() => dI(), `Grammar`), LanguageMetaData: $(() => wI, `LanguageMetaData`), parser: {} }, FI = { Grammar: $(() => pI(), `Grammar`), LanguageMetaData: $(() => TI, `LanguageMetaData`), parser: {} }, II = { Grammar: $(() => hI(), `Grammar`), LanguageMetaData: $(() => EI, `LanguageMetaData`), parser: {} }, LI = { Grammar: $(() => _I(), `Grammar`), LanguageMetaData: $(() => DI, `LanguageMetaData`), parser: {} }, RI = { Grammar: $(() => yI(), `Grammar`), LanguageMetaData: $(() => OI, `LanguageMetaData`), parser: {} }, zI = { ACC_DESCR: /accDescr(?:[\t ]*:([^\n\r]*)|\s*{([^}]*)})/, ACC_TITLE: /accTitle[\t ]*:([^\n\r]*)/, TITLE: /title([\t ][^\n\r]*|)/ }, BI = (_b2 = class extends Oj {
  runConverter(e6, t2, n2) {
    let r2 = this.runCommonConverter(e6, t2, n2);
    return r2 === void 0 && (r2 = this.runCustomConverter(e6, t2, n2)), r2 === void 0 ? super.runConverter(e6, t2, n2) : r2;
  }
  runCommonConverter(e6, t2, n2) {
    let r2 = zI[e6.name];
    if (r2 === void 0) return;
    let i2 = r2.exec(t2);
    if (i2 !== null) {
      if (i2[1] !== void 0) return i2[1].trim().replace(/[\t ]{2,}/gm, ` `);
      if (i2[2] !== void 0) return i2[2].replace(/^\s*/gm, ``).replace(/\s+$/gm, ``).replace(/[\t ]{2,}/gm, ` `).replace(/[\n\r]{2,}/gm, `
`);
    }
  }
}, $(_b2, `AbstractMermaidValueConverter`), _b2), VI = (_c2 = class extends BI {
  runCustomConverter(e6, t2, n2) {
  }
}, $(_c2, `CommonValueConverter`), _c2), HI = (_d2 = class extends Dj {
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
_e2 = class extends HI {
}, $(_e2, `CommonTokenBuilder`), _e2;
export {
  hP as _,
  jI as a,
  NI as c,
  LI as d,
  II as f,
  vP as g,
  AP as h,
  VI as i,
  PI as l,
  $ as m,
  BI as n,
  MI as o,
  RI as p,
  AI as r,
  kI as s,
  HI as t,
  FI as u,
  gP as v
};
