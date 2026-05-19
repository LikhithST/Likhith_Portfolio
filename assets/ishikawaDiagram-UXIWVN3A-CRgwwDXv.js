var _a;
import { Cn as e, In as t, Jn as n, Nn as r, Nt as i, Pn as a, R as o, Sn as s, b as c, bn as l, gn as u, hn as d, pn as f, yn as p } from "./index-4Ava25sD.js";
var m = (function() {
  var e2 = n(function(e3, t3, n2, r3) {
    for (n2 || (n2 = {}), r3 = e3.length; r3--; n2[e3[r3]] = t3) ;
    return n2;
  }, `o`), t2 = [1, 4], r2 = [1, 14], i2 = [1, 12], a2 = [1, 13], o2 = [6, 7, 8], s2 = [1, 20], c2 = [1, 18], l2 = [1, 19], u2 = [6, 7, 11], d2 = [1, 6, 13, 14], f2 = [1, 23], p2 = [1, 24], m2 = [1, 6, 7, 11, 13, 14], h2 = { trace: n(function() {
  }, `trace`), yy: {}, symbols_: { error: 2, start: 3, ishikawa: 4, spaceLines: 5, SPACELINE: 6, NL: 7, ISHIKAWA: 8, document: 9, stop: 10, EOF: 11, statement: 12, SPACELIST: 13, TEXT: 14, $accept: 0, $end: 1 }, terminals_: { 2: `error`, 6: `SPACELINE`, 7: `NL`, 8: `ISHIKAWA`, 11: `EOF`, 13: `SPACELIST`, 14: `TEXT` }, productions_: [0, [3, 1], [3, 2], [5, 1], [5, 2], [5, 2], [4, 2], [4, 3], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [9, 3], [9, 2], [12, 2], [12, 1], [12, 1], [12, 1]], performAction: n(function(e3, t3, n2, r3, i3, a3, o3) {
    var s3 = a3.length - 1;
    switch (i3) {
      case 6:
      case 7:
        return r3;
      case 15:
        r3.addNode(a3[s3 - 1].length, a3[s3].trim());
        break;
      case 16:
        r3.addNode(0, a3[s3].trim());
        break;
    }
  }, `anonymous`), table: [{ 3: 1, 4: 2, 5: 3, 6: [1, 5], 8: t2 }, { 1: [3] }, { 1: [2, 1] }, { 4: 6, 6: [1, 7], 7: [1, 8], 8: t2 }, { 6: r2, 7: [1, 10], 9: 9, 12: 11, 13: i2, 14: a2 }, e2(o2, [2, 3]), { 1: [2, 2] }, e2(o2, [2, 4]), e2(o2, [2, 5]), { 1: [2, 6], 6: r2, 12: 15, 13: i2, 14: a2 }, { 6: r2, 9: 16, 12: 11, 13: i2, 14: a2 }, { 6: s2, 7: c2, 10: 17, 11: l2 }, e2(u2, [2, 18], { 14: [1, 21] }), e2(u2, [2, 16]), e2(u2, [2, 17]), { 6: s2, 7: c2, 10: 22, 11: l2 }, { 1: [2, 7], 6: r2, 12: 15, 13: i2, 14: a2 }, e2(d2, [2, 14], { 7: f2, 11: p2 }), e2(m2, [2, 8]), e2(m2, [2, 9]), e2(m2, [2, 10]), e2(u2, [2, 15]), e2(d2, [2, 13], { 7: f2, 11: p2 }), e2(m2, [2, 11]), e2(m2, [2, 12])], defaultActions: { 2: [2, 1], 6: [2, 2] }, parseError: n(function(e3, t3) {
    if (t3.recoverable) this.trace(e3);
    else {
      var n2 = Error(e3);
      throw n2.hash = t3, n2;
    }
  }, `parseError`), parse: n(function(e3) {
    var t3 = this, r3 = [0], i3 = [], a3 = [null], o3 = [], s3 = this.table, c3 = ``, l3 = 0, u3 = 0, d3 = 0, f3 = 2, p3 = 1, m3 = o3.slice.call(arguments, 1), h3 = Object.create(this.lexer), g3 = { yy: {} };
    for (var _2 in this.yy) Object.prototype.hasOwnProperty.call(this.yy, _2) && (g3.yy[_2] = this.yy[_2]);
    h3.setInput(e3, g3.yy), g3.yy.lexer = h3, g3.yy.parser = this, h3.yylloc === void 0 && (h3.yylloc = {});
    var v2 = h3.yylloc;
    o3.push(v2);
    var y2 = h3.options && h3.options.ranges;
    typeof g3.yy.parseError == `function` ? this.parseError = g3.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
    function b2(e4) {
      r3.length -= 2 * e4, a3.length -= e4, o3.length -= e4;
    }
    n(b2, `popStack`);
    function x2() {
      var e4 = i3.pop() || h3.lex() || p3;
      return typeof e4 != `number` && (e4 instanceof Array && (i3 = e4, e4 = i3.pop()), e4 = t3.symbols_[e4] || e4), e4;
    }
    n(x2, `lex`);
    for (var S2, C2, w2, T2, E2, D2 = {}, O2, k2, A2, j2; ; ) {
      if (w2 = r3[r3.length - 1], this.defaultActions[w2] ? T2 = this.defaultActions[w2] : (S2 ?? (S2 = x2()), T2 = s3[w2] && s3[w2][S2]), T2 === void 0 || !T2.length || !T2[0]) {
        var M2 = ``;
        for (O2 in j2 = [], s3[w2]) this.terminals_[O2] && O2 > f3 && j2.push(`'` + this.terminals_[O2] + `'`);
        M2 = h3.showPosition ? `Parse error on line ` + (l3 + 1) + `:
` + h3.showPosition() + `
Expecting ` + j2.join(`, `) + `, got '` + (this.terminals_[S2] || S2) + `'` : `Parse error on line ` + (l3 + 1) + `: Unexpected ` + (S2 == p3 ? `end of input` : `'` + (this.terminals_[S2] || S2) + `'`), this.parseError(M2, { text: h3.match, token: this.terminals_[S2] || S2, line: h3.yylineno, loc: v2, expected: j2 });
      }
      if (T2[0] instanceof Array && T2.length > 1) throw Error(`Parse Error: multiple actions possible at state: ` + w2 + `, token: ` + S2);
      switch (T2[0]) {
        case 1:
          r3.push(S2), a3.push(h3.yytext), o3.push(h3.yylloc), r3.push(T2[1]), S2 = null, C2 ? (S2 = C2, C2 = null) : (u3 = h3.yyleng, c3 = h3.yytext, l3 = h3.yylineno, v2 = h3.yylloc, d3 > 0 && d3--);
          break;
        case 2:
          if (k2 = this.productions_[T2[1]][1], D2.$ = a3[a3.length - k2], D2._$ = { first_line: o3[o3.length - (k2 || 1)].first_line, last_line: o3[o3.length - 1].last_line, first_column: o3[o3.length - (k2 || 1)].first_column, last_column: o3[o3.length - 1].last_column }, y2 && (D2._$.range = [o3[o3.length - (k2 || 1)].range[0], o3[o3.length - 1].range[1]]), E2 = this.performAction.apply(D2, [c3, u3, l3, g3.yy, T2[1], a3, o3].concat(m3)), E2 !== void 0) return E2;
          k2 && (r3 = r3.slice(0, -1 * k2 * 2), a3 = a3.slice(0, -1 * k2), o3 = o3.slice(0, -1 * k2)), r3.push(this.productions_[T2[1]][0]), a3.push(D2.$), o3.push(D2._$), A2 = s3[r3[r3.length - 2]][r3[r3.length - 1]], r3.push(A2);
          break;
        case 3:
          return true;
      }
    }
    return true;
  }, `parse`) };
  h2.lexer = (function() {
    return { EOF: 1, parseError: n(function(e3, t3) {
      if (this.yy.parser) this.yy.parser.parseError(e3, t3);
      else throw Error(e3);
    }, `parseError`), setInput: n(function(e3, t3) {
      return this.yy = t3 || this.yy || {}, this._input = e3, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = ``, this.conditionStack = [`INITIAL`], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
    }, `setInput`), input: n(function() {
      var e3 = this._input[0];
      return this.yytext += e3, this.yyleng++, this.offset++, this.match += e3, this.matched += e3, e3.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e3;
    }, `input`), unput: n(function(e3) {
      var t3 = e3.length, n2 = e3.split(/(?:\r\n?|\n)/g);
      this._input = e3 + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t3), this.offset -= t3;
      var r3 = this.match.split(/(?:\r\n?|\n)/g);
      this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n2.length - 1 && (this.yylineno -= n2.length - 1);
      var i3 = this.yylloc.range;
      return this.yylloc = { first_line: this.yylloc.first_line, last_line: this.yylineno + 1, first_column: this.yylloc.first_column, last_column: n2 ? (n2.length === r3.length ? this.yylloc.first_column : 0) + r3[r3.length - n2.length].length - n2[0].length : this.yylloc.first_column - t3 }, this.options.ranges && (this.yylloc.range = [i3[0], i3[0] + this.yyleng - t3]), this.yyleng = this.yytext.length, this;
    }, `unput`), more: n(function() {
      return this._more = true, this;
    }, `more`), reject: n(function() {
      if (this.options.backtrack_lexer) this._backtrack = true;
      else return this.parseError(`Lexical error on line ` + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), { text: ``, token: null, line: this.yylineno });
      return this;
    }, `reject`), less: n(function(e3) {
      this.unput(this.match.slice(e3));
    }, `less`), pastInput: n(function() {
      var e3 = this.matched.substr(0, this.matched.length - this.match.length);
      return (e3.length > 20 ? `...` : ``) + e3.substr(-20).replace(/\n/g, ``);
    }, `pastInput`), upcomingInput: n(function() {
      var e3 = this.match;
      return e3.length < 20 && (e3 += this._input.substr(0, 20 - e3.length)), (e3.substr(0, 20) + (e3.length > 20 ? `...` : ``)).replace(/\n/g, ``);
    }, `upcomingInput`), showPosition: n(function() {
      var e3 = this.pastInput(), t3 = Array(e3.length + 1).join(`-`);
      return e3 + this.upcomingInput() + `
` + t3 + `^`;
    }, `showPosition`), test_match: n(function(e3, t3) {
      var n2, r3, i3;
      if (this.options.backtrack_lexer && (i3 = { yylineno: this.yylineno, yylloc: { first_line: this.yylloc.first_line, last_line: this.last_line, first_column: this.yylloc.first_column, last_column: this.yylloc.last_column }, yytext: this.yytext, match: this.match, matches: this.matches, matched: this.matched, yyleng: this.yyleng, offset: this.offset, _more: this._more, _input: this._input, yy: this.yy, conditionStack: this.conditionStack.slice(0), done: this.done }, this.options.ranges && (i3.yylloc.range = this.yylloc.range.slice(0))), r3 = e3[0].match(/(?:\r\n?|\n).*/g), r3 && (this.yylineno += r3.length), this.yylloc = { first_line: this.yylloc.last_line, last_line: this.yylineno + 1, first_column: this.yylloc.last_column, last_column: r3 ? r3[r3.length - 1].length - r3[r3.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e3[0].length }, this.yytext += e3[0], this.match += e3[0], this.matches = e3, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(e3[0].length), this.matched += e3[0], n2 = this.performAction.call(this, this.yy, this, t3, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), n2) return n2;
      if (this._backtrack) {
        for (var a3 in i3) this[a3] = i3[a3];
        return false;
      }
      return false;
    }, `test_match`), next: n(function() {
      if (this.done) return this.EOF;
      this._input || (this.done = true);
      var e3, t3, n2, r3;
      this._more || (this.yytext = ``, this.match = ``);
      for (var i3 = this._currentRules(), a3 = 0; a3 < i3.length; a3++) if (n2 = this._input.match(this.rules[i3[a3]]), n2 && (!t3 || n2[0].length > t3[0].length)) {
        if (t3 = n2, r3 = a3, this.options.backtrack_lexer) {
          if (e3 = this.test_match(n2, i3[a3]), e3 !== false) return e3;
          if (this._backtrack) {
            t3 = false;
            continue;
          } else return false;
        } else if (!this.options.flex) break;
      }
      return t3 ? (e3 = this.test_match(t3, i3[r3]), e3 === false ? false : e3) : this._input === `` ? this.EOF : this.parseError(`Lexical error on line ` + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: ``, token: null, line: this.yylineno });
    }, `next`), lex: n(function() {
      return this.next() || this.lex();
    }, `lex`), begin: n(function(e3) {
      this.conditionStack.push(e3);
    }, `begin`), popState: n(function() {
      return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
    }, `popState`), _currentRules: n(function() {
      return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
    }, `_currentRules`), topState: n(function(e3) {
      return e3 = this.conditionStack.length - 1 - Math.abs(e3 || 0), e3 >= 0 ? this.conditionStack[e3] : `INITIAL`;
    }, `topState`), pushState: n(function(e3) {
      this.begin(e3);
    }, `pushState`), stateStackSize: n(function() {
      return this.conditionStack.length;
    }, `stateStackSize`), options: { "case-insensitive": true }, performAction: n(function(e3, t3, n2, r3) {
      switch (n2) {
        case 0:
          return 6;
        case 1:
          return 8;
        case 2:
          return 8;
        case 3:
          return 6;
        case 4:
          return 7;
        case 5:
          return 13;
        case 6:
          return 14;
        case 7:
          return 11;
      }
    }, `anonymous`), rules: [/^(?:\s*%%.*)/i, /^(?:ishikawa-beta\b)/i, /^(?:ishikawa\b)/i, /^(?:[\s]+[\n])/i, /^(?:[\n]+)/i, /^(?:[\s]+)/i, /^(?:[^\n]+)/i, /^(?:$)/i], conditions: { INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7], inclusive: true } } };
  })();
  function g2() {
    this.yy = {};
  }
  return n(g2, `Parser`), g2.prototype = h2, h2.Parser = g2, new g2();
})();
m.parser = m;
var h = m, g = (_a = class {
  constructor() {
    this.stack = [], this.clear = this.clear.bind(this), this.addNode = this.addNode.bind(this), this.getRoot = this.getRoot.bind(this);
  }
  clear() {
    this.root = void 0, this.stack = [], this.baseLevel = void 0, f();
  }
  getRoot() {
    return this.root;
  }
  addNode(e2, n2) {
    let r2 = d.sanitizeText(n2, s());
    if (!this.root) {
      this.root = { text: r2, children: [] }, this.stack = [{ level: 0, node: this.root }], t(r2);
      return;
    }
    this.baseLevel ?? (this.baseLevel = e2);
    let i2 = e2 - this.baseLevel + 1;
    for (i2 <= 0 && (i2 = 1); this.stack.length > 1 && this.stack[this.stack.length - 1].level >= i2; ) this.stack.pop();
    let a2 = this.stack[this.stack.length - 1].node, o2 = { text: r2, children: [] };
    a2.children.push(o2), this.stack.push({ level: i2, node: o2 });
  }
  getAccTitle() {
    return l();
  }
  setAccTitle(e2) {
    a(e2);
  }
  getAccDescription() {
    return p();
  }
  setAccDescription(e2) {
    r(e2);
  }
  getDiagramTitle() {
    return e();
  }
  setDiagramTitle(e2) {
    t(e2);
  }
}, n(_a, `IshikawaDB`), _a), _ = 14, v = 250, y = 30, b = 60, x = 5, S = 82 * Math.PI / 180, C = Math.cos(S), w = Math.sin(S), T = n((e2, t2, n2) => {
  let r2 = e2.node().getBBox(), i2 = r2.width + t2 * 2, a2 = r2.height + t2 * 2;
  u(e2, a2, i2, n2), e2.attr(`viewBox`, `${r2.x - t2} ${r2.y - t2} ${i2} ${a2}`);
}, `applyPaddedViewBox`), E = n((e2, t2, n2, r2) => {
  var _a2, _b;
  let a2 = r2.db.getRoot();
  if (!a2) return;
  let l2 = s(), { look: u2, handDrawnSeed: d2, themeVariables: f2 } = l2, p2 = o(l2.fontSize)[0] ?? _, m2 = u2 === `handDrawn`, h2 = a2.children ?? [], g2 = ((_a2 = l2.ishikawa) == null ? void 0 : _a2.diagramPadding) ?? 20, y2 = ((_b = l2.ishikawa) == null ? void 0 : _b.useMaxWidth) ?? false, b2 = i(t2), x2 = b2.append(`g`).attr(`class`, `ishikawa`), S2 = m2 ? c.svg(b2.node()) : void 0, C2 = S2 ? { roughSvg: S2, seed: d2 ?? 0, lineColor: (f2 == null ? void 0 : f2.lineColor) ?? `#333`, fillColor: (f2 == null ? void 0 : f2.mainBkg) ?? `#fff` } : void 0, w2 = `ishikawa-arrow-${t2}`;
  m2 || x2.append(`defs`).append(`marker`).attr(`id`, w2).attr(`viewBox`, `0 0 10 10`).attr(`refX`, 0).attr(`refY`, 5).attr(`markerWidth`, 6).attr(`markerHeight`, 6).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 10 0 L 0 5 L 10 10 Z`).attr(`class`, `ishikawa-arrow`);
  let E2 = 0, k2 = v, A2 = m2 ? void 0 : L(x2, E2, k2, E2, k2, `ishikawa-spine`);
  if (O(x2, E2, k2, a2.text, p2, C2), !h2.length) {
    m2 && L(x2, E2, k2, E2, k2, `ishikawa-spine`, C2), T(b2, g2, y2);
    return;
  }
  E2 -= 20;
  let j2 = h2.filter((e3, t3) => t3 % 2 == 0), N2 = h2.filter((e3, t3) => t3 % 2 == 1), P2 = D(j2), F2 = D(N2), I2 = P2.total + F2.total, R2 = v, z = v;
  if (I2 > 0) {
    let e3 = v * 2, t3 = v * 0.3;
    R2 = Math.max(t3, e3 * (P2.total / I2)), z = Math.max(t3, e3 * (F2.total / I2));
  }
  let B = p2 * 2;
  R2 = Math.max(R2, P2.max * B), z = Math.max(z, F2.max * B), k2 = Math.max(R2, v), A2 && A2.attr(`y1`, k2).attr(`y2`, k2), x2.select(`.ishikawa-head-group`).attr(`transform`, `translate(0,${k2})`);
  let V = Math.ceil(h2.length / 2);
  for (let e3 = 0; e3 < V; e3++) {
    let t3 = x2.append(`g`).attr(`class`, `ishikawa-pair`);
    for (let [n3, r3, i2] of [[h2[e3 * 2], -1, R2], [h2[e3 * 2 + 1], 1, z]]) n3 && M(t3, n3, E2, k2, r3, i2, p2, C2);
    E2 = t3.selectAll(`text`).nodes().reduce((e4, t4) => Math.min(e4, t4.getBBox().x), 1 / 0);
  }
  if (m2) L(x2, E2, k2, 0, k2, `ishikawa-spine`, C2);
  else {
    A2.attr(`x1`, E2);
    let e3 = `url(#${w2})`;
    x2.selectAll(`line.ishikawa-branch, line.ishikawa-sub-branch`).attr(`marker-start`, e3);
  }
  T(b2, g2, y2);
}, `draw`), D = n((e2) => {
  let t2 = n((e3) => e3.children.reduce((e4, n2) => e4 + 1 + t2(n2), 0), `countDescendants`);
  return e2.reduce((e3, n2) => {
    let r2 = t2(n2);
    return e3.total += r2, e3.max = Math.max(e3.max, r2), e3;
  }, { total: 0, max: 0 });
}, `sideStats`), O = n((e2, t2, n2, r2, i2, a2) => {
  let o2 = Math.max(6, Math.floor(110 / (i2 * 0.6))), s2 = e2.append(`g`).attr(`class`, `ishikawa-head-group`).attr(`transform`, `translate(${t2},${n2})`), c2 = F(s2, P(r2, o2), 0, 0, `ishikawa-head-label`, `start`, i2), l2 = c2.node().getBBox(), u2 = Math.max(60, l2.width + 6), d2 = Math.max(40, l2.height * 2 + 40), f2 = `M 0 ${-d2 / 2} L 0 ${d2 / 2} Q ${u2 * 2.4} 0 0 ${-d2 / 2} Z`;
  if (a2) {
    let e3 = a2.roughSvg.path(f2, { roughness: 1.5, seed: a2.seed, fill: a2.fillColor, fillStyle: `hachure`, fillWeight: 2.5, hachureGap: 5, stroke: a2.lineColor, strokeWidth: 2 });
    s2.insert(() => e3, `:first-child`).attr(`class`, `ishikawa-head`);
  } else s2.insert(`path`, `:first-child`).attr(`class`, `ishikawa-head`).attr(`d`, f2);
  c2.attr(`transform`, `translate(${(u2 - l2.width) / 2 - l2.x + 3},${-l2.y - l2.height / 2})`);
}, `drawHead`), k = n((e2, t2) => {
  let r2 = [], i2 = [], a2 = n((e3, n2, o2) => {
    let s2 = t2 === -1 ? [...e3].reverse() : e3;
    for (let e4 of s2) {
      let t3 = r2.length, s3 = e4.children ?? [];
      r2.push({ depth: o2, text: P(e4.text, 15), parentIndex: n2, childCount: s3.length }), o2 % 2 == 0 ? (i2.push(t3), s3.length && a2(s3, t3, o2 + 1)) : (s3.length && a2(s3, t3, o2 + 1), i2.push(t3));
    }
  }, `walk`);
  return a2(e2, -1, 2), { entries: r2, yOrder: i2 };
}, `flattenTree`), A = n((e2, t2, n2, r2, i2, a2, o2) => {
  let s2 = e2.append(`g`).attr(`class`, `ishikawa-label-group`), c2 = F(s2, t2, n2, r2 + 11 * i2, `ishikawa-label cause`, `middle`, a2).node().getBBox();
  if (o2) {
    let e3 = o2.roughSvg.rectangle(c2.x - 20, c2.y - 2, c2.width + 40, c2.height + 4, { roughness: 1.5, seed: o2.seed, fill: o2.fillColor, fillStyle: `hachure`, fillWeight: 2.5, hachureGap: 5, stroke: o2.lineColor, strokeWidth: 2 });
    s2.insert(() => e3, `:first-child`).attr(`class`, `ishikawa-label-box`);
  } else s2.insert(`rect`, `:first-child`).attr(`class`, `ishikawa-label-box`).attr(`x`, c2.x - 20).attr(`y`, c2.y - 2).attr(`width`, c2.width + 40).attr(`height`, c2.height + 4);
}, `drawCauseLabel`), j = n((e2, t2, n2, r2, i2, a2) => {
  let o2 = Math.sqrt(r2 * r2 + i2 * i2);
  if (o2 === 0) return;
  let s2 = r2 / o2, c2 = i2 / o2, l2 = -c2 * 6, u2 = s2 * 6, d2 = t2, f2 = n2, p2 = `M ${d2} ${f2} L ${d2 - s2 * 6 * 2 + l2} ${f2 - c2 * 6 * 2 + u2} L ${d2 - s2 * 6 * 2 - l2} ${f2 - c2 * 6 * 2 - u2} Z`, m2 = a2.roughSvg.path(p2, { roughness: 1, seed: a2.seed, fill: a2.lineColor, fillStyle: `solid`, stroke: a2.lineColor, strokeWidth: 1 });
  e2.append(() => m2);
}, `drawArrowMarker`), M = n((e2, t2, n2, r2, i2, a2, o2, s2) => {
  let c2 = t2.children ?? [], l2 = a2 * (c2.length ? 1 : 0.2), u2 = -C * l2, d2 = w * l2 * i2, f2 = n2 + u2, p2 = r2 + d2;
  if (L(e2, n2, r2, f2, p2, `ishikawa-branch`, s2), s2 && j(e2, n2, r2, n2 - f2, r2 - p2, s2), A(e2, t2.text, f2, p2, i2, o2, s2), !c2.length) return;
  let { entries: m2, yOrder: h2 } = k(c2, i2), g2 = m2.length, _2 = Array(g2);
  for (let [e3, t3] of h2.entries()) _2[t3] = r2 + d2 * ((e3 + 1) / (g2 + 1));
  let v2 = /* @__PURE__ */ new Map();
  v2.set(-1, { x0: n2, y0: r2, x1: f2, y1: p2, childCount: c2.length, childrenDrawn: 0 });
  let S2 = -C, T2 = w * i2, E2 = i2 < 0 ? `ishikawa-label up` : `ishikawa-label down`;
  for (let [t3, n3] of m2.entries()) {
    let r3 = _2[t3], i3 = v2.get(n3.parentIndex), a3 = e2.append(`g`).attr(`class`, `ishikawa-sub-group`), c3 = 0, l3 = 0, u3 = 0;
    if (n3.depth % 2 == 0) {
      let e3 = i3.y1 - i3.y0;
      c3 = I(i3.x0, i3.x1, e3 ? (r3 - i3.y0) / e3 : 0.5), l3 = r3, u3 = c3 - (n3.childCount > 0 ? b + n3.childCount * x : y), L(a3, c3, r3, u3, r3, `ishikawa-sub-branch`, s2), s2 && j(a3, c3, r3, 1, 0, s2), F(a3, n3.text, u3, r3, `ishikawa-label align`, `end`, o2);
    } else {
      let e3 = i3.childrenDrawn++;
      c3 = I(i3.x0, i3.x1, (i3.childCount - e3) / (i3.childCount + 1)), l3 = i3.y0, u3 = c3 + S2 * ((r3 - l3) / T2), L(a3, c3, l3, u3, r3, `ishikawa-sub-branch`, s2), s2 && j(a3, c3, l3, c3 - u3, l3 - r3, s2), F(a3, n3.text, u3, r3, E2, `end`, o2);
    }
    n3.childCount > 0 && v2.set(t3, { x0: c3, y0: l3, x1: u3, y1: r3, childCount: n3.childCount, childrenDrawn: 0 });
  }
}, `drawBranch`), N = n((e2) => e2.split(/<br\s*\/?>|\n/), `splitLines`), P = n((e2, t2) => {
  if (e2.length <= t2) return e2;
  let n2 = [];
  for (let r2 of e2.split(/\s+/)) {
    let e3 = n2.length - 1;
    e3 >= 0 && n2[e3].length + 1 + r2.length <= t2 ? n2[e3] += ` ` + r2 : n2.push(r2);
  }
  return n2.join(`
`);
}, `wrapText`), F = n((e2, t2, n2, r2, i2, a2, o2) => {
  let s2 = N(t2), c2 = o2 * 1.05, l2 = e2.append(`text`).attr(`class`, i2).attr(`text-anchor`, a2).attr(`x`, n2).attr(`y`, r2 - (s2.length - 1) * c2 / 2);
  for (let [e3, t3] of s2.entries()) l2.append(`tspan`).attr(`x`, n2).attr(`dy`, e3 === 0 ? 0 : c2).text(t3);
  return l2;
}, `drawMultilineText`), I = n((e2, t2, n2) => e2 + (t2 - e2) * n2, `lerp`), L = n((e2, t2, n2, r2, i2, a2, o2) => {
  if (o2) {
    let s2 = o2.roughSvg.line(t2, n2, r2, i2, { roughness: 1.5, seed: o2.seed, stroke: o2.lineColor, strokeWidth: 2 });
    e2.append(() => s2).attr(`class`, a2);
    return;
  }
  return e2.append(`line`).attr(`class`, a2).attr(`x1`, t2).attr(`y1`, n2).attr(`x2`, r2).attr(`y2`, i2);
}, `drawLine`), R = { parser: h, get db() {
  return new g();
}, renderer: { draw: E }, styles: n((e2) => `
.ishikawa .ishikawa-spine,
.ishikawa .ishikawa-branch,
.ishikawa .ishikawa-sub-branch {
  stroke: ${e2.lineColor};
  stroke-width: 2;
  fill: none;
}

.ishikawa .ishikawa-sub-branch {
  stroke-width: 1;
}

.ishikawa .ishikawa-arrow {
  fill: ${e2.lineColor};
}

.ishikawa .ishikawa-head {
  fill: ${e2.mainBkg};
  stroke: ${e2.lineColor};
  stroke-width: 2;
}

.ishikawa .ishikawa-label-box {
  fill: ${e2.mainBkg};
  stroke: ${e2.lineColor};
  stroke-width: 2;
}

.ishikawa text {
  font-family: ${e2.fontFamily};
  font-size: ${e2.fontSize};
  fill: ${e2.textColor};
}

.ishikawa .ishikawa-head-label {
  font-weight: 600;
  text-anchor: middle;
  dominant-baseline: middle;
  font-size: 14px;
}

.ishikawa .ishikawa-label {
  text-anchor: end;
}

.ishikawa .ishikawa-label.cause {
  text-anchor: middle;
  dominant-baseline: middle;
}

.ishikawa .ishikawa-label.align {
  text-anchor: end;
  dominant-baseline: middle;
}

.ishikawa .ishikawa-label.up {
  dominant-baseline: baseline;
}

.ishikawa .ishikawa-label.down {
  dominant-baseline: hanging;
}
`, `getStyles`) };
export {
  R as diagram
};
