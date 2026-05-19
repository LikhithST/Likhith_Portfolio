var _a;
import { Bn as e, Dn as t, Jn as n, Mn as r, Sn as i, Un as a, Vn as o, Yn as s, a as c, o as l, vn as u, xn as d } from "./index-4Ava25sD.js";
import { t as f } from "./chunk-55IACEB6-DmI8nO1B.js";
import { t as p } from "./chunk-EDXVE4YY-B3BtpSK2.js";
var m = [];
for (let e2 = 0; e2 < 256; ++e2) m.push((e2 + 256).toString(16).slice(1));
function h(e2, t2 = 0) {
  return (m[e2[t2 + 0]] + m[e2[t2 + 1]] + m[e2[t2 + 2]] + m[e2[t2 + 3]] + `-` + m[e2[t2 + 4]] + m[e2[t2 + 5]] + `-` + m[e2[t2 + 6]] + m[e2[t2 + 7]] + `-` + m[e2[t2 + 8]] + m[e2[t2 + 9]] + `-` + m[e2[t2 + 10]] + m[e2[t2 + 11]] + m[e2[t2 + 12]] + m[e2[t2 + 13]] + m[e2[t2 + 14]] + m[e2[t2 + 15]]).toLowerCase();
}
var g, _ = new Uint8Array(16);
function v() {
  if (!g) {
    if (typeof crypto > `u` || !crypto.getRandomValues) throw Error(`crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported`);
    g = crypto.getRandomValues.bind(crypto);
  }
  return g(_);
}
var y = { randomUUID: typeof crypto < `u` && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
function b(e2, t2, n2) {
  var _a2;
  if (y.randomUUID && !t2 && !e2) return y.randomUUID();
  e2 || (e2 = {});
  let r2 = e2.random ?? ((_a2 = e2.rng) == null ? void 0 : _a2.call(e2)) ?? v();
  if (r2.length < 16) throw Error(`Random bytes length must be >= 16`);
  if (r2[6] = r2[6] & 15 | 64, r2[8] = r2[8] & 63 | 128, t2) {
    if (n2 || (n2 = 0), n2 < 0 || n2 + 16 > t2.length) throw RangeError(`UUID byte range ${n2}:${n2 + 15} is out of buffer bounds`);
    for (let e3 = 0; e3 < 16; ++e3) t2[n2 + e3] = r2[e3];
    return t2;
  }
  return h(r2);
}
var x = b, S = (function() {
  var e2 = n(function(e3, t3, n2, r3) {
    for (n2 || (n2 = {}), r3 = e3.length; r3--; n2[e3[r3]] = t3) ;
    return n2;
  }, `o`), t2 = [1, 4], r2 = [1, 13], i2 = [1, 12], a2 = [1, 15], o2 = [1, 16], s2 = [1, 20], c2 = [1, 19], l2 = [6, 7, 8], u2 = [1, 26], d2 = [1, 24], f2 = [1, 25], p2 = [6, 7, 11], m2 = [1, 6, 13, 15, 16, 19, 22], h2 = [1, 33], g2 = [1, 34], _2 = [1, 6, 7, 11, 13, 15, 16, 19, 22], v2 = { trace: n(function() {
  }, `trace`), yy: {}, symbols_: { error: 2, start: 3, mindMap: 4, spaceLines: 5, SPACELINE: 6, NL: 7, MINDMAP: 8, document: 9, stop: 10, EOF: 11, statement: 12, SPACELIST: 13, node: 14, ICON: 15, CLASS: 16, nodeWithId: 17, nodeWithoutId: 18, NODE_DSTART: 19, NODE_DESCR: 20, NODE_DEND: 21, NODE_ID: 22, $accept: 0, $end: 1 }, terminals_: { 2: `error`, 6: `SPACELINE`, 7: `NL`, 8: `MINDMAP`, 11: `EOF`, 13: `SPACELIST`, 15: `ICON`, 16: `CLASS`, 19: `NODE_DSTART`, 20: `NODE_DESCR`, 21: `NODE_DEND`, 22: `NODE_ID` }, productions_: [0, [3, 1], [3, 2], [5, 1], [5, 2], [5, 2], [4, 2], [4, 3], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [9, 3], [9, 2], [12, 2], [12, 2], [12, 2], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [14, 1], [14, 1], [18, 3], [17, 1], [17, 4]], performAction: n(function(e3, t3, n2, r3, i3, a3, o3) {
    var s3 = a3.length - 1;
    switch (i3) {
      case 6:
      case 7:
        return r3;
      case 8:
        r3.getLogger().trace(`Stop NL `);
        break;
      case 9:
        r3.getLogger().trace(`Stop EOF `);
        break;
      case 11:
        r3.getLogger().trace(`Stop NL2 `);
        break;
      case 12:
        r3.getLogger().trace(`Stop EOF2 `);
        break;
      case 15:
        r3.getLogger().info(`Node: `, a3[s3].id), r3.addNode(a3[s3 - 1].length, a3[s3].id, a3[s3].descr, a3[s3].type);
        break;
      case 16:
        r3.getLogger().trace(`Icon: `, a3[s3]), r3.decorateNode({ icon: a3[s3] });
        break;
      case 17:
      case 21:
        r3.decorateNode({ class: a3[s3] });
        break;
      case 18:
        r3.getLogger().trace(`SPACELIST`);
        break;
      case 19:
        r3.getLogger().trace(`Node: `, a3[s3].id), r3.addNode(0, a3[s3].id, a3[s3].descr, a3[s3].type);
        break;
      case 20:
        r3.decorateNode({ icon: a3[s3] });
        break;
      case 25:
        r3.getLogger().trace(`node found ..`, a3[s3 - 2]), this.$ = { id: a3[s3 - 1], descr: a3[s3 - 1], type: r3.getType(a3[s3 - 2], a3[s3]) };
        break;
      case 26:
        this.$ = { id: a3[s3], descr: a3[s3], type: r3.nodeType.DEFAULT };
        break;
      case 27:
        r3.getLogger().trace(`node found ..`, a3[s3 - 3]), this.$ = { id: a3[s3 - 3], descr: a3[s3 - 1], type: r3.getType(a3[s3 - 2], a3[s3]) };
        break;
    }
  }, `anonymous`), table: [{ 3: 1, 4: 2, 5: 3, 6: [1, 5], 8: t2 }, { 1: [3] }, { 1: [2, 1] }, { 4: 6, 6: [1, 7], 7: [1, 8], 8: t2 }, { 6: r2, 7: [1, 10], 9: 9, 12: 11, 13: i2, 14: 14, 15: a2, 16: o2, 17: 17, 18: 18, 19: s2, 22: c2 }, e2(l2, [2, 3]), { 1: [2, 2] }, e2(l2, [2, 4]), e2(l2, [2, 5]), { 1: [2, 6], 6: r2, 12: 21, 13: i2, 14: 14, 15: a2, 16: o2, 17: 17, 18: 18, 19: s2, 22: c2 }, { 6: r2, 9: 22, 12: 11, 13: i2, 14: 14, 15: a2, 16: o2, 17: 17, 18: 18, 19: s2, 22: c2 }, { 6: u2, 7: d2, 10: 23, 11: f2 }, e2(p2, [2, 22], { 17: 17, 18: 18, 14: 27, 15: [1, 28], 16: [1, 29], 19: s2, 22: c2 }), e2(p2, [2, 18]), e2(p2, [2, 19]), e2(p2, [2, 20]), e2(p2, [2, 21]), e2(p2, [2, 23]), e2(p2, [2, 24]), e2(p2, [2, 26], { 19: [1, 30] }), { 20: [1, 31] }, { 6: u2, 7: d2, 10: 32, 11: f2 }, { 1: [2, 7], 6: r2, 12: 21, 13: i2, 14: 14, 15: a2, 16: o2, 17: 17, 18: 18, 19: s2, 22: c2 }, e2(m2, [2, 14], { 7: h2, 11: g2 }), e2(_2, [2, 8]), e2(_2, [2, 9]), e2(_2, [2, 10]), e2(p2, [2, 15]), e2(p2, [2, 16]), e2(p2, [2, 17]), { 20: [1, 35] }, { 21: [1, 36] }, e2(m2, [2, 13], { 7: h2, 11: g2 }), e2(_2, [2, 11]), e2(_2, [2, 12]), { 21: [1, 37] }, e2(p2, [2, 25]), e2(p2, [2, 27])], defaultActions: { 2: [2, 1], 6: [2, 2] }, parseError: n(function(e3, t3) {
    if (t3.recoverable) this.trace(e3);
    else {
      var n2 = Error(e3);
      throw n2.hash = t3, n2;
    }
  }, `parseError`), parse: n(function(e3) {
    var t3 = this, r3 = [0], i3 = [], a3 = [null], o3 = [], s3 = this.table, c3 = ``, l3 = 0, u3 = 0, d3 = 0, f3 = 2, p3 = 1, m3 = o3.slice.call(arguments, 1), h3 = Object.create(this.lexer), g3 = { yy: {} };
    for (var _3 in this.yy) Object.prototype.hasOwnProperty.call(this.yy, _3) && (g3.yy[_3] = this.yy[_3]);
    h3.setInput(e3, g3.yy), g3.yy.lexer = h3, g3.yy.parser = this, h3.yylloc === void 0 && (h3.yylloc = {});
    var v3 = h3.yylloc;
    o3.push(v3);
    var y3 = h3.options && h3.options.ranges;
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
    for (var S2, C2, w2, T2, E2, D2 = {}, O2, k2, A2, j; ; ) {
      if (w2 = r3[r3.length - 1], this.defaultActions[w2] ? T2 = this.defaultActions[w2] : (S2 ?? (S2 = x2()), T2 = s3[w2] && s3[w2][S2]), T2 === void 0 || !T2.length || !T2[0]) {
        var M = ``;
        for (O2 in j = [], s3[w2]) this.terminals_[O2] && O2 > f3 && j.push(`'` + this.terminals_[O2] + `'`);
        M = h3.showPosition ? `Parse error on line ` + (l3 + 1) + `:
` + h3.showPosition() + `
Expecting ` + j.join(`, `) + `, got '` + (this.terminals_[S2] || S2) + `'` : `Parse error on line ` + (l3 + 1) + `: Unexpected ` + (S2 == p3 ? `end of input` : `'` + (this.terminals_[S2] || S2) + `'`), this.parseError(M, { text: h3.match, token: this.terminals_[S2] || S2, line: h3.yylineno, loc: v3, expected: j });
      }
      if (T2[0] instanceof Array && T2.length > 1) throw Error(`Parse Error: multiple actions possible at state: ` + w2 + `, token: ` + S2);
      switch (T2[0]) {
        case 1:
          r3.push(S2), a3.push(h3.yytext), o3.push(h3.yylloc), r3.push(T2[1]), S2 = null, C2 ? (S2 = C2, C2 = null) : (u3 = h3.yyleng, c3 = h3.yytext, l3 = h3.yylineno, v3 = h3.yylloc, d3 > 0 && d3--);
          break;
        case 2:
          if (k2 = this.productions_[T2[1]][1], D2.$ = a3[a3.length - k2], D2._$ = { first_line: o3[o3.length - (k2 || 1)].first_line, last_line: o3[o3.length - 1].last_line, first_column: o3[o3.length - (k2 || 1)].first_column, last_column: o3[o3.length - 1].last_column }, y3 && (D2._$.range = [o3[o3.length - (k2 || 1)].range[0], o3[o3.length - 1].range[1]]), E2 = this.performAction.apply(D2, [c3, u3, l3, g3.yy, T2[1], a3, o3].concat(m3)), E2 !== void 0) return E2;
          k2 && (r3 = r3.slice(0, -1 * k2 * 2), a3 = a3.slice(0, -1 * k2), o3 = o3.slice(0, -1 * k2)), r3.push(this.productions_[T2[1]][0]), a3.push(D2.$), o3.push(D2._$), A2 = s3[r3[r3.length - 2]][r3[r3.length - 1]], r3.push(A2);
          break;
        case 3:
          return true;
      }
    }
    return true;
  }, `parse`) };
  v2.lexer = (function() {
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
          return e3.getLogger().trace(`Found comment`, t3.yytext), 6;
        case 1:
          return 8;
        case 2:
          this.begin(`CLASS`);
          break;
        case 3:
          return this.popState(), 16;
        case 4:
          this.popState();
          break;
        case 5:
          e3.getLogger().trace(`Begin icon`), this.begin(`ICON`);
          break;
        case 6:
          return e3.getLogger().trace(`SPACELINE`), 6;
        case 7:
          return 7;
        case 8:
          return 15;
        case 9:
          e3.getLogger().trace(`end icon`), this.popState();
          break;
        case 10:
          return e3.getLogger().trace(`Exploding node`), this.begin(`NODE`), 19;
        case 11:
          return e3.getLogger().trace(`Cloud`), this.begin(`NODE`), 19;
        case 12:
          return e3.getLogger().trace(`Explosion Bang`), this.begin(`NODE`), 19;
        case 13:
          return e3.getLogger().trace(`Cloud Bang`), this.begin(`NODE`), 19;
        case 14:
          return this.begin(`NODE`), 19;
        case 15:
          return this.begin(`NODE`), 19;
        case 16:
          return this.begin(`NODE`), 19;
        case 17:
          return this.begin(`NODE`), 19;
        case 18:
          return 13;
        case 19:
          return 22;
        case 20:
          return 11;
        case 21:
          this.begin(`NSTR2`);
          break;
        case 22:
          return `NODE_DESCR`;
        case 23:
          this.popState();
          break;
        case 24:
          e3.getLogger().trace(`Starting NSTR`), this.begin(`NSTR`);
          break;
        case 25:
          return e3.getLogger().trace(`description:`, t3.yytext), `NODE_DESCR`;
        case 26:
          this.popState();
          break;
        case 27:
          return this.popState(), e3.getLogger().trace(`node end ))`), `NODE_DEND`;
        case 28:
          return this.popState(), e3.getLogger().trace(`node end )`), `NODE_DEND`;
        case 29:
          return this.popState(), e3.getLogger().trace(`node end ...`, t3.yytext), `NODE_DEND`;
        case 30:
          return this.popState(), e3.getLogger().trace(`node end ((`), `NODE_DEND`;
        case 31:
          return this.popState(), e3.getLogger().trace(`node end (-`), `NODE_DEND`;
        case 32:
          return this.popState(), e3.getLogger().trace(`node end (-`), `NODE_DEND`;
        case 33:
          return this.popState(), e3.getLogger().trace(`node end ((`), `NODE_DEND`;
        case 34:
          return this.popState(), e3.getLogger().trace(`node end ((`), `NODE_DEND`;
        case 35:
          return e3.getLogger().trace(`Long description:`, t3.yytext), 20;
        case 36:
          return e3.getLogger().trace(`Long description:`, t3.yytext), 20;
      }
    }, `anonymous`), rules: [/^(?:\s*%%.*)/i, /^(?:mindmap\b)/i, /^(?::::)/i, /^(?:.+)/i, /^(?:\n)/i, /^(?:::icon\()/i, /^(?:[\s]+[\n])/i, /^(?:[\n]+)/i, /^(?:[^\)]+)/i, /^(?:\))/i, /^(?:-\))/i, /^(?:\(-)/i, /^(?:\)\))/i, /^(?:\))/i, /^(?:\(\()/i, /^(?:\{\{)/i, /^(?:\()/i, /^(?:\[)/i, /^(?:[\s]+)/i, /^(?:[^\(\[\n\)\{\}]+)/i, /^(?:$)/i, /^(?:["][`])/i, /^(?:[^`"]+)/i, /^(?:[`]["])/i, /^(?:["])/i, /^(?:[^"]+)/i, /^(?:["])/i, /^(?:[\)]\))/i, /^(?:[\)])/i, /^(?:[\]])/i, /^(?:\}\})/i, /^(?:\(-)/i, /^(?:-\))/i, /^(?:\(\()/i, /^(?:\()/i, /^(?:[^\)\]\(\}]+)/i, /^(?:.+(?!\(\())/i], conditions: { CLASS: { rules: [3, 4], inclusive: false }, ICON: { rules: [8, 9], inclusive: false }, NSTR2: { rules: [22, 23], inclusive: false }, NSTR: { rules: [25, 26], inclusive: false }, NODE: { rules: [21, 24, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], inclusive: false }, INITIAL: { rules: [0, 1, 2, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], inclusive: true } } };
  })();
  function y2() {
    this.yy = {};
  }
  return n(y2, `Parser`), y2.prototype = v2, v2.Parser = y2, new y2();
})();
S.parser = S;
var C = S, w = 12, T = { DEFAULT: 0, NO_BORDER: 0, ROUNDED_RECT: 1, RECT: 2, CIRCLE: 3, CLOUD: 4, BANG: 5, HEXAGON: 6 }, E = (_a = class {
  constructor() {
    this.nodes = [], this.count = 0, this.elements = {}, this.getLogger = this.getLogger.bind(this), this.nodeType = T, this.clear(), this.getType = this.getType.bind(this), this.getElementById = this.getElementById.bind(this), this.getParent = this.getParent.bind(this), this.getMindmap = this.getMindmap.bind(this), this.addNode = this.addNode.bind(this), this.decorateNode = this.decorateNode.bind(this);
  }
  clear() {
    this.nodes = [], this.count = 0, this.elements = {}, this.baseLevel = void 0;
  }
  getParent(e2) {
    for (let t2 = this.nodes.length - 1; t2 >= 0; t2--) if (this.nodes[t2].level < e2) return this.nodes[t2];
    return null;
  }
  getMindmap() {
    return this.nodes.length > 0 ? this.nodes[0] : null;
  }
  addNode(e2, t2, n2, a2) {
    var _a2, _b;
    s.info(`addNode`, e2, t2, n2, a2);
    let o2 = false;
    this.nodes.length === 0 ? (this.baseLevel = e2, e2 = 0, o2 = true) : this.baseLevel !== void 0 && (e2 -= this.baseLevel, o2 = false);
    let c2 = i(), l2 = ((_a2 = c2.mindmap) == null ? void 0 : _a2.padding) ?? u.mindmap.padding;
    switch (a2) {
      case this.nodeType.ROUNDED_RECT:
      case this.nodeType.RECT:
      case this.nodeType.HEXAGON:
        l2 *= 2;
        break;
    }
    let d2 = { id: this.count++, nodeId: r(t2, c2), level: e2, descr: r(n2, c2), type: a2, children: [], width: ((_b = c2.mindmap) == null ? void 0 : _b.maxNodeWidth) ?? u.mindmap.maxNodeWidth, padding: l2, isRoot: o2 }, f2 = this.getParent(e2);
    if (f2) f2.children.push(d2), this.nodes.push(d2);
    else if (o2) this.nodes.push(d2);
    else throw Error(`There can be only one root. No parent could be found for ("${d2.descr}")`);
  }
  getType(e2, t2) {
    switch (s.debug(`In get type`, e2, t2), e2) {
      case `[`:
        return this.nodeType.RECT;
      case `(`:
        return t2 === `)` ? this.nodeType.ROUNDED_RECT : this.nodeType.CLOUD;
      case `((`:
        return this.nodeType.CIRCLE;
      case `)`:
        return this.nodeType.CLOUD;
      case `))`:
        return this.nodeType.BANG;
      case `{{`:
        return this.nodeType.HEXAGON;
      default:
        return this.nodeType.DEFAULT;
    }
  }
  setElementForId(e2, t2) {
    this.elements[e2] = t2;
  }
  getElementById(e2) {
    return this.elements[e2];
  }
  decorateNode(e2) {
    if (!e2) return;
    let t2 = i(), n2 = this.nodes[this.nodes.length - 1];
    e2.icon && (n2.icon = r(e2.icon, t2)), e2.class && (n2.class = r(e2.class, t2));
  }
  type2Str(e2) {
    switch (e2) {
      case this.nodeType.DEFAULT:
        return `no-border`;
      case this.nodeType.RECT:
        return `rect`;
      case this.nodeType.ROUNDED_RECT:
        return `rounded-rect`;
      case this.nodeType.CIRCLE:
        return `circle`;
      case this.nodeType.CLOUD:
        return `cloud`;
      case this.nodeType.BANG:
        return `bang`;
      case this.nodeType.HEXAGON:
        return `hexgon`;
      default:
        return `no-border`;
    }
  }
  assignSections(e2, t2) {
    if (e2.level === 0 ? e2.section = void 0 : e2.section = t2, e2.children) for (let [n2, r2] of e2.children.entries()) {
      let i2 = e2.level === 0 ? n2 % (w - 1) : t2;
      this.assignSections(r2, i2);
    }
  }
  flattenNodes(e2, t2) {
    let r2 = i(), a2 = [`mindmap-node`];
    e2.isRoot === true ? a2.push(`section-root`, `section--1`) : e2.section !== void 0 && a2.push(`section-${e2.section}`), e2.class && a2.push(e2.class);
    let o2 = a2.join(` `), s2 = n((e3) => {
      var _a2;
      let t3 = (((_a2 = r2.theme) == null ? void 0 : _a2.toLowerCase()) ?? ``).includes(`redux`);
      switch (e3) {
        case T.CIRCLE:
          return `mindmapCircle`;
        case T.RECT:
          return `rect`;
        case T.ROUNDED_RECT:
          return `rounded`;
        case T.CLOUD:
          return `cloud`;
        case T.BANG:
          return `bang`;
        case T.HEXAGON:
          return `hexagon`;
        case T.DEFAULT:
          return t3 ? `rounded` : `defaultMindmapNode`;
        case T.NO_BORDER:
        default:
          return `rect`;
      }
    }, `getShapeFromType`), c2 = { id: e2.id.toString(), domId: `node_` + e2.id.toString(), label: e2.descr, labelType: `markdown`, isGroup: false, shape: s2(e2.type), width: e2.width, height: e2.height ?? 0, padding: e2.padding, cssClasses: o2, cssStyles: [], look: r2.look, icon: e2.icon, x: e2.x, y: e2.y, level: e2.level, nodeId: e2.nodeId, type: e2.type, section: e2.section };
    if (t2.push(c2), e2.children) for (let n2 of e2.children) this.flattenNodes(n2, t2);
  }
  generateEdges(e2, t2) {
    if (!e2.children) return;
    let n2 = i();
    for (let r2 of e2.children) {
      let i2 = `edge`;
      r2.section !== void 0 && (i2 += ` section-edge-${r2.section}`);
      let a2 = e2.level + 1;
      i2 += ` edge-depth-${a2}`;
      let o2 = { id: `edge_${e2.id}_${r2.id}`, start: e2.id.toString(), end: r2.id.toString(), type: `normal`, curve: `basis`, thickness: `normal`, look: n2.look, classes: i2, depth: e2.level, section: r2.section };
      t2.push(o2), this.generateEdges(r2, t2);
    }
  }
  getData() {
    let e2 = this.getMindmap(), n2 = i(), r2 = t().layout !== void 0, a2 = n2;
    if (r2 || (a2.layout = `cose-bilkent`), !e2) return { nodes: [], edges: [], config: a2 };
    s.debug(`getData: mindmapRoot`, e2, n2), this.assignSections(e2);
    let o2 = [], c2 = [];
    this.flattenNodes(e2, o2), this.generateEdges(e2, c2), s.debug(`getData: processed ${o2.length} nodes and ${c2.length} edges`);
    let l2 = /* @__PURE__ */ new Map();
    for (let e3 of o2) l2.set(e3.id, { shape: e3.shape, width: e3.width, height: e3.height, padding: e3.padding });
    return { nodes: o2, edges: c2, config: a2, rootNode: e2, markers: [`point`], direction: `TB`, nodeSpacing: 50, rankSpacing: 50, shapes: Object.fromEntries(l2), type: `mindmap`, diagramId: `mindmap-` + x() };
  }
  getLogger() {
    return s;
  }
}, n(_a, `MindmapDB`), _a), D = { draw: n(async (e2, t2, n2, r2) => {
  var _a2, _b;
  s.debug(`Rendering mindmap diagram
` + e2);
  let i2 = r2.db, a2 = i2.getData(), o2 = f(t2, a2.config.securityLevel);
  if (a2.type = r2.type, a2.layoutAlgorithm = c(a2.config.layout, { fallback: `cose-bilkent` }), a2.diagramId = t2, !i2.getMindmap()) return;
  a2.nodes.forEach((e3) => {
    e3.shape === `rounded` ? (e3.radius = 15, e3.taper = 15, e3.stroke = `none`, e3.width = 0, e3.padding = 15) : e3.shape === `circle` ? e3.padding = 10 : e3.shape === `rect` ? (e3.width = 0, e3.padding = 10) : e3.shape === `hexagon` && (e3.width = 0, e3.height = 0);
  }), await l(a2, o2);
  let { themeVariables: m2 } = d(), { useGradient: h2, gradientStart: g2, gradientStop: _2 } = m2;
  if (h2 && g2 && _2) {
    let e3 = o2.attr(`id`), t3 = o2.append(`defs`).append(`linearGradient`).attr(`id`, `${e3}-gradient`).attr(`gradientUnits`, `objectBoundingBox`).attr(`x1`, `0%`).attr(`y1`, `0%`).attr(`x2`, `100%`).attr(`y2`, `0%`);
    t3.append(`stop`).attr(`offset`, `0%`).attr(`stop-color`, g2).attr(`stop-opacity`, 1), t3.append(`stop`).attr(`offset`, `100%`).attr(`stop-color`, _2).attr(`stop-opacity`, 1);
  }
  p(o2, ((_a2 = a2.config.mindmap) == null ? void 0 : _a2.padding) ?? u.mindmap.padding, `mindmapDiagram`, ((_b = a2.config.mindmap) == null ? void 0 : _b.useMaxWidth) ?? u.mindmap.useMaxWidth);
}, `draw`) }, O = n((t2) => {
  let { theme: n2, look: r2 } = t2, i2 = ``;
  for (let n3 = 0; n3 < t2.THEME_COLOR_LIMIT; n3++) t2[`lineColor` + n3] = t2[`lineColor` + n3] || t2[`cScaleInv` + n3], a(t2[`lineColor` + n3]) ? t2[`lineColor` + n3] = o(t2[`lineColor` + n3], 20) : t2[`lineColor` + n3] = e(t2[`lineColor` + n3], 20);
  for (let e2 = 0; e2 < t2.THEME_COLOR_LIMIT; e2++) {
    let a2 = `` + (r2 === `neo` ? Math.max(10 - (e2 - 1) * 2, 2) : 17 - 3 * e2);
    i2 += `
    .section-${e2 - 1} rect, .section-${e2 - 1} path, .section-${e2 - 1} circle, .section-${e2 - 1} polygon, .section-${e2 - 1} path  {
      fill: ${t2[`cScale` + e2]};
    }
    .section-${e2 - 1} text {
     fill: ${t2[`cScaleLabel` + e2]};
    }
     .section-${e2 - 1} span {
     color: ${t2[`cScaleLabel` + e2]};
    }
    .node-icon-${e2 - 1} {
      font-size: 40px;
      color: ${t2[`cScaleLabel` + e2]};
    }
    .section-edge-${e2 - 1}{
      stroke: ${t2[`cScale` + e2]};
    }
    .edge-depth-${e2 - 1}{
      stroke-width: ${a2};
    }
    .section-${e2 - 1} line {
      stroke: ${t2[`cScaleInv` + e2]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    [data-look="neo"].mindmap-node.section-${e2 - 1} rect, [data-look="neo"].mindmap-node.section-${e2 - 1} path, [data-look="neo"].mindmap-node.section-${e2 - 1} circle, [data-look="neo"].mindmap-node.section-${e2 - 1} polygon {
      fill: ${n2 === `redux` || n2 === `redux-dark` || n2 === `neutral` ? t2.mainBkg : t2[`cScale` + e2]};
      stroke: ${n2 === `redux` || n2 === `redux-dark` ? t2.nodeBorder : t2[`cScale` + e2]};
      stroke-width: ${t2.strokeWidth ?? 2}px;
    }
    [data-look="neo"].section-edge-${e2 - 1}{
      stroke: ${(n2 == null ? void 0 : n2.includes(`redux`)) || n2 === `neo-dark` ? t2.nodeBorder : t2[`cScale` + e2]};
    }
    [data-look="neo"].mindmap-node.section-${e2 - 1} text {
     fill: ${n2 === `redux` || n2 === `redux-dark` ? t2.nodeBorder : t2[`cScaleLabel` + (n2 === `neutral` ? 1 : e2)]};
    }
    `;
  }
  return i2;
}, `genSections`), k = n((e2, t2, n2) => {
  let r2 = ``;
  for (let i2 = 0; i2 < e2; i2++) r2 += `
    [data-look="neo"].mindmap-node.section-${i2 - 1} rect, [data-look="neo"].mindmap-node.section-${i2 - 1} path, [data-look="neo"].mindmap-node.section-${i2 - 1} circle, [data-look="neo"].mindmap-node.section-${i2 - 1} polygon {
      stroke: url(${t2}-gradient);
      fill: ${n2};
    }
    .section-${i2 - 1} line {
      stroke-width: 0;
    }`;
  return r2;
}, `genGradient`), A = { get db() {
  return new E();
}, renderer: D, parser: C, styles: n((e2) => {
  let { theme: t2 } = e2, n2 = e2.svgId, r2 = e2.dropShadow ? e2.dropShadow.replace(`url(#drop-shadow)`, `url(${n2}-drop-shadow)`) : `none`;
  return `
  .edge {
    stroke-width: 3;
  }
  ${O(e2)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${e2.git0};
  }
  .section-root text {
    fill: ${e2.gitBranchLabel0};
  }
  .section-root span {
    color: ${(t2 == null ? void 0 : t2.includes(`redux`)) ? e2.nodeBorder : e2.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .mindmap-node-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
  [data-look="neo"].mindmap-node  {
    filter: ${r2};
  }
  [data-look="neo"].mindmap-node.section-root rect, [data-look="neo"].mindmap-node.section-root path, [data-look="neo"].mindmap-node.section-root circle, [data-look="neo"].mindmap-node.section-root polygon  {
    fill: ${(t2 == null ? void 0 : t2.includes(`redux`)) ? e2.mainBkg : e2.git0};
  }
  [data-look="neo"].mindmap-node.section-root .text-inner-tspan {
    fill:  ${(t2 == null ? void 0 : t2.includes(`redux`)) ? e2.nodeBorder : e2[`cScaleLabel` + (t2 === `neutral` ? 1 : 0)]};
  }
  ${e2.useGradient && n2 && e2.mainBkg ? k(e2.THEME_COLOR_LIMIT, n2, e2.mainBkg) : ``}
`;
}, `getStyles`) };
export {
  A as diagram
};
