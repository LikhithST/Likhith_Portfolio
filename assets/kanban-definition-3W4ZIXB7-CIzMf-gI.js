import { $ as e, G as t, I as n, Q as r, Z as i, b as a, d as o } from "./chunk-ABZYJK2D-ODb6qSou.js";
import { g as s, h as c } from "./src-D8UWkQNo.js";
import "./math-O_7OW4FW.js";
import "./chunk-S3R3BYOJ-D8yhV3IZ.js";
import { t as l } from "./chunk-EXTU4WIE-K1dhFJK1.js";
import { n as u, t as d } from "./chunk-MI3HLSF2-BT3n8yzv.js";
import "./chunk-CVBHYZKI-9IS-TY3G.js";
import "./chunk-ATLVNIR6-6j91LnhU.js";
import "./dist-DrVb-WkD.js";
import "./identity-IHMFXfGJ.js";
import "./chunk-JA3XYJ7Z-By1gQAUK.js";
import { a as f, c as p, i as m } from "./chunk-JZLCHNYA-BantgYUJ.js";
import { t as h } from "./chunk-FMBD7UC4-CBN5yYuZ.js";
var g = (function() {
  var e2 = c(function(e3, t3, n3, r3) {
    for (n3 || (n3 = {}), r3 = e3.length; r3--; n3[e3[r3]] = t3) ;
    return n3;
  }, `o`), t2 = [1, 4], n2 = [1, 13], r2 = [1, 12], i2 = [1, 15], a2 = [1, 16], o2 = [1, 20], s2 = [1, 19], l2 = [6, 7, 8], u2 = [1, 26], d2 = [1, 24], f2 = [1, 25], p2 = [6, 7, 11], m2 = [1, 31], h2 = [6, 7, 11, 24], g2 = [1, 6, 13, 16, 17, 20, 23], _2 = [1, 35], v2 = [1, 36], y2 = [1, 6, 7, 11, 13, 16, 17, 20, 23], b2 = [1, 38], x2 = { trace: c(function() {
  }, `trace`), yy: {}, symbols_: { error: 2, start: 3, mindMap: 4, spaceLines: 5, SPACELINE: 6, NL: 7, KANBAN: 8, document: 9, stop: 10, EOF: 11, statement: 12, SPACELIST: 13, node: 14, shapeData: 15, ICON: 16, CLASS: 17, nodeWithId: 18, nodeWithoutId: 19, NODE_DSTART: 20, NODE_DESCR: 21, NODE_DEND: 22, NODE_ID: 23, SHAPE_DATA: 24, $accept: 0, $end: 1 }, terminals_: { 2: `error`, 6: `SPACELINE`, 7: `NL`, 8: `KANBAN`, 11: `EOF`, 13: `SPACELIST`, 16: `ICON`, 17: `CLASS`, 20: `NODE_DSTART`, 21: `NODE_DESCR`, 22: `NODE_DEND`, 23: `NODE_ID`, 24: `SHAPE_DATA` }, productions_: [0, [3, 1], [3, 2], [5, 1], [5, 2], [5, 2], [4, 2], [4, 3], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [9, 3], [9, 2], [12, 3], [12, 2], [12, 2], [12, 2], [12, 1], [12, 2], [12, 1], [12, 1], [12, 1], [12, 1], [14, 1], [14, 1], [19, 3], [18, 1], [18, 4], [15, 2], [15, 1]], performAction: c(function(e3, t3, n3, r3, i3, a3, o3) {
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
        r3.getLogger().info(`Node: `, a3[s3 - 1].id), r3.addNode(a3[s3 - 2].length, a3[s3 - 1].id, a3[s3 - 1].descr, a3[s3 - 1].type, a3[s3]);
        break;
      case 16:
        r3.getLogger().info(`Node: `, a3[s3].id), r3.addNode(a3[s3 - 1].length, a3[s3].id, a3[s3].descr, a3[s3].type);
        break;
      case 17:
        r3.getLogger().trace(`Icon: `, a3[s3]), r3.decorateNode({ icon: a3[s3] });
        break;
      case 18:
      case 23:
        r3.decorateNode({ class: a3[s3] });
        break;
      case 19:
        r3.getLogger().trace(`SPACELIST`);
        break;
      case 20:
        r3.getLogger().trace(`Node: `, a3[s3 - 1].id), r3.addNode(0, a3[s3 - 1].id, a3[s3 - 1].descr, a3[s3 - 1].type, a3[s3]);
        break;
      case 21:
        r3.getLogger().trace(`Node: `, a3[s3].id), r3.addNode(0, a3[s3].id, a3[s3].descr, a3[s3].type);
        break;
      case 22:
        r3.decorateNode({ icon: a3[s3] });
        break;
      case 27:
        r3.getLogger().trace(`node found ..`, a3[s3 - 2]), this.$ = { id: a3[s3 - 1], descr: a3[s3 - 1], type: r3.getType(a3[s3 - 2], a3[s3]) };
        break;
      case 28:
        this.$ = { id: a3[s3], descr: a3[s3], type: 0 };
        break;
      case 29:
        r3.getLogger().trace(`node found ..`, a3[s3 - 3]), this.$ = { id: a3[s3 - 3], descr: a3[s3 - 1], type: r3.getType(a3[s3 - 2], a3[s3]) };
        break;
      case 30:
        this.$ = a3[s3 - 1] + a3[s3];
        break;
      case 31:
        this.$ = a3[s3];
        break;
    }
  }, `anonymous`), table: [{ 3: 1, 4: 2, 5: 3, 6: [1, 5], 8: t2 }, { 1: [3] }, { 1: [2, 1] }, { 4: 6, 6: [1, 7], 7: [1, 8], 8: t2 }, { 6: n2, 7: [1, 10], 9: 9, 12: 11, 13: r2, 14: 14, 16: i2, 17: a2, 18: 17, 19: 18, 20: o2, 23: s2 }, e2(l2, [2, 3]), { 1: [2, 2] }, e2(l2, [2, 4]), e2(l2, [2, 5]), { 1: [2, 6], 6: n2, 12: 21, 13: r2, 14: 14, 16: i2, 17: a2, 18: 17, 19: 18, 20: o2, 23: s2 }, { 6: n2, 9: 22, 12: 11, 13: r2, 14: 14, 16: i2, 17: a2, 18: 17, 19: 18, 20: o2, 23: s2 }, { 6: u2, 7: d2, 10: 23, 11: f2 }, e2(p2, [2, 24], { 18: 17, 19: 18, 14: 27, 16: [1, 28], 17: [1, 29], 20: o2, 23: s2 }), e2(p2, [2, 19]), e2(p2, [2, 21], { 15: 30, 24: m2 }), e2(p2, [2, 22]), e2(p2, [2, 23]), e2(h2, [2, 25]), e2(h2, [2, 26]), e2(h2, [2, 28], { 20: [1, 32] }), { 21: [1, 33] }, { 6: u2, 7: d2, 10: 34, 11: f2 }, { 1: [2, 7], 6: n2, 12: 21, 13: r2, 14: 14, 16: i2, 17: a2, 18: 17, 19: 18, 20: o2, 23: s2 }, e2(g2, [2, 14], { 7: _2, 11: v2 }), e2(y2, [2, 8]), e2(y2, [2, 9]), e2(y2, [2, 10]), e2(p2, [2, 16], { 15: 37, 24: m2 }), e2(p2, [2, 17]), e2(p2, [2, 18]), e2(p2, [2, 20], { 24: b2 }), e2(h2, [2, 31]), { 21: [1, 39] }, { 22: [1, 40] }, e2(g2, [2, 13], { 7: _2, 11: v2 }), e2(y2, [2, 11]), e2(y2, [2, 12]), e2(p2, [2, 15], { 24: b2 }), e2(h2, [2, 30]), { 22: [1, 41] }, e2(h2, [2, 27]), e2(h2, [2, 29])], defaultActions: { 2: [2, 1], 6: [2, 2] }, parseError: c(function(e3, t3) {
    if (t3.recoverable) this.trace(e3);
    else {
      var n3 = Error(e3);
      throw n3.hash = t3, n3;
    }
  }, `parseError`), parse: c(function(e3) {
    var t3 = this, n3 = [0], r3 = [], i3 = [null], a3 = [], o3 = this.table, s3 = ``, l3 = 0, u3 = 0, d3 = 0, f3 = 2, p3 = 1, m3 = a3.slice.call(arguments, 1), h3 = Object.create(this.lexer), g3 = { yy: {} };
    for (var _3 in this.yy) Object.prototype.hasOwnProperty.call(this.yy, _3) && (g3.yy[_3] = this.yy[_3]);
    h3.setInput(e3, g3.yy), g3.yy.lexer = h3, g3.yy.parser = this, h3.yylloc === void 0 && (h3.yylloc = {});
    var v3 = h3.yylloc;
    a3.push(v3);
    var y3 = h3.options && h3.options.ranges;
    typeof g3.yy.parseError == `function` ? this.parseError = g3.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
    function b3(e4) {
      n3.length -= 2 * e4, i3.length -= e4, a3.length -= e4;
    }
    c(b3, `popStack`);
    function x3() {
      var e4 = r3.pop() || h3.lex() || p3;
      return typeof e4 != `number` && (e4 instanceof Array && (r3 = e4, e4 = r3.pop()), e4 = t3.symbols_[e4] || e4), e4;
    }
    c(x3, `lex`);
    for (var S3, C2, w2, T2, E2, D2 = {}, O2, k2, A2, j2; ; ) {
      if (w2 = n3[n3.length - 1], this.defaultActions[w2] ? T2 = this.defaultActions[w2] : (S3 ?? (S3 = x3()), T2 = o3[w2] && o3[w2][S3]), T2 === void 0 || !T2.length || !T2[0]) {
        var M = ``;
        for (O2 in j2 = [], o3[w2]) this.terminals_[O2] && O2 > f3 && j2.push(`'` + this.terminals_[O2] + `'`);
        M = h3.showPosition ? `Parse error on line ` + (l3 + 1) + `:
` + h3.showPosition() + `
Expecting ` + j2.join(`, `) + `, got '` + (this.terminals_[S3] || S3) + `'` : `Parse error on line ` + (l3 + 1) + `: Unexpected ` + (S3 == p3 ? `end of input` : `'` + (this.terminals_[S3] || S3) + `'`), this.parseError(M, { text: h3.match, token: this.terminals_[S3] || S3, line: h3.yylineno, loc: v3, expected: j2 });
      }
      if (T2[0] instanceof Array && T2.length > 1) throw Error(`Parse Error: multiple actions possible at state: ` + w2 + `, token: ` + S3);
      switch (T2[0]) {
        case 1:
          n3.push(S3), i3.push(h3.yytext), a3.push(h3.yylloc), n3.push(T2[1]), S3 = null, C2 ? (S3 = C2, C2 = null) : (u3 = h3.yyleng, s3 = h3.yytext, l3 = h3.yylineno, v3 = h3.yylloc, d3 > 0 && d3--);
          break;
        case 2:
          if (k2 = this.productions_[T2[1]][1], D2.$ = i3[i3.length - k2], D2._$ = { first_line: a3[a3.length - (k2 || 1)].first_line, last_line: a3[a3.length - 1].last_line, first_column: a3[a3.length - (k2 || 1)].first_column, last_column: a3[a3.length - 1].last_column }, y3 && (D2._$.range = [a3[a3.length - (k2 || 1)].range[0], a3[a3.length - 1].range[1]]), E2 = this.performAction.apply(D2, [s3, u3, l3, g3.yy, T2[1], i3, a3].concat(m3)), E2 !== void 0) return E2;
          k2 && (n3 = n3.slice(0, -1 * k2 * 2), i3 = i3.slice(0, -1 * k2), a3 = a3.slice(0, -1 * k2)), n3.push(this.productions_[T2[1]][0]), i3.push(D2.$), a3.push(D2._$), A2 = o3[n3[n3.length - 2]][n3[n3.length - 1]], n3.push(A2);
          break;
        case 3:
          return true;
      }
    }
    return true;
  }, `parse`) };
  x2.lexer = (function() {
    return { EOF: 1, parseError: c(function(e3, t3) {
      if (this.yy.parser) this.yy.parser.parseError(e3, t3);
      else throw Error(e3);
    }, `parseError`), setInput: c(function(e3, t3) {
      return this.yy = t3 || this.yy || {}, this._input = e3, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = ``, this.conditionStack = [`INITIAL`], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
    }, `setInput`), input: c(function() {
      var e3 = this._input[0];
      return this.yytext += e3, this.yyleng++, this.offset++, this.match += e3, this.matched += e3, e3.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e3;
    }, `input`), unput: c(function(e3) {
      var t3 = e3.length, n3 = e3.split(/(?:\r\n?|\n)/g);
      this._input = e3 + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t3), this.offset -= t3;
      var r3 = this.match.split(/(?:\r\n?|\n)/g);
      this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n3.length - 1 && (this.yylineno -= n3.length - 1);
      var i3 = this.yylloc.range;
      return this.yylloc = { first_line: this.yylloc.first_line, last_line: this.yylineno + 1, first_column: this.yylloc.first_column, last_column: n3 ? (n3.length === r3.length ? this.yylloc.first_column : 0) + r3[r3.length - n3.length].length - n3[0].length : this.yylloc.first_column - t3 }, this.options.ranges && (this.yylloc.range = [i3[0], i3[0] + this.yyleng - t3]), this.yyleng = this.yytext.length, this;
    }, `unput`), more: c(function() {
      return this._more = true, this;
    }, `more`), reject: c(function() {
      if (this.options.backtrack_lexer) this._backtrack = true;
      else return this.parseError(`Lexical error on line ` + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), { text: ``, token: null, line: this.yylineno });
      return this;
    }, `reject`), less: c(function(e3) {
      this.unput(this.match.slice(e3));
    }, `less`), pastInput: c(function() {
      var e3 = this.matched.substr(0, this.matched.length - this.match.length);
      return (e3.length > 20 ? `...` : ``) + e3.substr(-20).replace(/\n/g, ``);
    }, `pastInput`), upcomingInput: c(function() {
      var e3 = this.match;
      return e3.length < 20 && (e3 += this._input.substr(0, 20 - e3.length)), (e3.substr(0, 20) + (e3.length > 20 ? `...` : ``)).replace(/\n/g, ``);
    }, `upcomingInput`), showPosition: c(function() {
      var e3 = this.pastInput(), t3 = Array(e3.length + 1).join(`-`);
      return e3 + this.upcomingInput() + `
` + t3 + `^`;
    }, `showPosition`), test_match: c(function(e3, t3) {
      var n3, r3, i3;
      if (this.options.backtrack_lexer && (i3 = { yylineno: this.yylineno, yylloc: { first_line: this.yylloc.first_line, last_line: this.last_line, first_column: this.yylloc.first_column, last_column: this.yylloc.last_column }, yytext: this.yytext, match: this.match, matches: this.matches, matched: this.matched, yyleng: this.yyleng, offset: this.offset, _more: this._more, _input: this._input, yy: this.yy, conditionStack: this.conditionStack.slice(0), done: this.done }, this.options.ranges && (i3.yylloc.range = this.yylloc.range.slice(0))), r3 = e3[0].match(/(?:\r\n?|\n).*/g), r3 && (this.yylineno += r3.length), this.yylloc = { first_line: this.yylloc.last_line, last_line: this.yylineno + 1, first_column: this.yylloc.last_column, last_column: r3 ? r3[r3.length - 1].length - r3[r3.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e3[0].length }, this.yytext += e3[0], this.match += e3[0], this.matches = e3, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(e3[0].length), this.matched += e3[0], n3 = this.performAction.call(this, this.yy, this, t3, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), n3) return n3;
      if (this._backtrack) {
        for (var a3 in i3) this[a3] = i3[a3];
        return false;
      }
      return false;
    }, `test_match`), next: c(function() {
      if (this.done) return this.EOF;
      this._input || (this.done = true);
      var e3, t3, n3, r3;
      this._more || (this.yytext = ``, this.match = ``);
      for (var i3 = this._currentRules(), a3 = 0; a3 < i3.length; a3++) if (n3 = this._input.match(this.rules[i3[a3]]), n3 && (!t3 || n3[0].length > t3[0].length)) {
        if (t3 = n3, r3 = a3, this.options.backtrack_lexer) {
          if (e3 = this.test_match(n3, i3[a3]), e3 !== false) return e3;
          if (this._backtrack) {
            t3 = false;
            continue;
          } else return false;
        } else if (!this.options.flex) break;
      }
      return t3 ? (e3 = this.test_match(t3, i3[r3]), e3 === false ? false : e3) : this._input === `` ? this.EOF : this.parseError(`Lexical error on line ` + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: ``, token: null, line: this.yylineno });
    }, `next`), lex: c(function() {
      return this.next() || this.lex();
    }, `lex`), begin: c(function(e3) {
      this.conditionStack.push(e3);
    }, `begin`), popState: c(function() {
      return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
    }, `popState`), _currentRules: c(function() {
      return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
    }, `_currentRules`), topState: c(function(e3) {
      return e3 = this.conditionStack.length - 1 - Math.abs(e3 || 0), e3 >= 0 ? this.conditionStack[e3] : `INITIAL`;
    }, `topState`), pushState: c(function(e3) {
      this.begin(e3);
    }, `pushState`), stateStackSize: c(function() {
      return this.conditionStack.length;
    }, `stateStackSize`), options: { "case-insensitive": true }, performAction: c(function(e3, t3, n3, r3) {
      switch (n3) {
        case 0:
          return this.pushState(`shapeData`), t3.yytext = ``, 24;
        case 1:
          return this.pushState(`shapeDataStr`), 24;
        case 2:
          return this.popState(), 24;
        case 3:
          return t3.yytext = t3.yytext.replace(/\n\s*/g, `<br/>`), 24;
        case 4:
          return 24;
        case 5:
          this.popState();
          break;
        case 6:
          return e3.getLogger().trace(`Found comment`, t3.yytext), 6;
        case 7:
          return 8;
        case 8:
          this.begin(`CLASS`);
          break;
        case 9:
          return this.popState(), 17;
        case 10:
          this.popState();
          break;
        case 11:
          e3.getLogger().trace(`Begin icon`), this.begin(`ICON`);
          break;
        case 12:
          return e3.getLogger().trace(`SPACELINE`), 6;
        case 13:
          return 7;
        case 14:
          return 16;
        case 15:
          e3.getLogger().trace(`end icon`), this.popState();
          break;
        case 16:
          return e3.getLogger().trace(`Exploding node`), this.begin(`NODE`), 20;
        case 17:
          return e3.getLogger().trace(`Cloud`), this.begin(`NODE`), 20;
        case 18:
          return e3.getLogger().trace(`Explosion Bang`), this.begin(`NODE`), 20;
        case 19:
          return e3.getLogger().trace(`Cloud Bang`), this.begin(`NODE`), 20;
        case 20:
          return this.begin(`NODE`), 20;
        case 21:
          return this.begin(`NODE`), 20;
        case 22:
          return this.begin(`NODE`), 20;
        case 23:
          return this.begin(`NODE`), 20;
        case 24:
          return 13;
        case 25:
          return 23;
        case 26:
          return 11;
        case 27:
          this.begin(`NSTR2`);
          break;
        case 28:
          return `NODE_DESCR`;
        case 29:
          this.popState();
          break;
        case 30:
          e3.getLogger().trace(`Starting NSTR`), this.begin(`NSTR`);
          break;
        case 31:
          return e3.getLogger().trace(`description:`, t3.yytext), `NODE_DESCR`;
        case 32:
          this.popState();
          break;
        case 33:
          return this.popState(), e3.getLogger().trace(`node end ))`), `NODE_DEND`;
        case 34:
          return this.popState(), e3.getLogger().trace(`node end )`), `NODE_DEND`;
        case 35:
          return this.popState(), e3.getLogger().trace(`node end ...`, t3.yytext), `NODE_DEND`;
        case 36:
          return this.popState(), e3.getLogger().trace(`node end ((`), `NODE_DEND`;
        case 37:
          return this.popState(), e3.getLogger().trace(`node end (-`), `NODE_DEND`;
        case 38:
          return this.popState(), e3.getLogger().trace(`node end (-`), `NODE_DEND`;
        case 39:
          return this.popState(), e3.getLogger().trace(`node end ((`), `NODE_DEND`;
        case 40:
          return this.popState(), e3.getLogger().trace(`node end ((`), `NODE_DEND`;
        case 41:
          return e3.getLogger().trace(`Long description:`, t3.yytext), 21;
        case 42:
          return e3.getLogger().trace(`Long description:`, t3.yytext), 21;
      }
    }, `anonymous`), rules: [/^(?:@\{)/i, /^(?:["])/i, /^(?:["])/i, /^(?:[^\"]+)/i, /^(?:[^}^"]+)/i, /^(?:\})/i, /^(?:\s*%%.*)/i, /^(?:kanban\b)/i, /^(?::::)/i, /^(?:.+)/i, /^(?:\n)/i, /^(?:::icon\()/i, /^(?:[\s]+[\n])/i, /^(?:[\n]+)/i, /^(?:[^\)]+)/i, /^(?:\))/i, /^(?:-\))/i, /^(?:\(-)/i, /^(?:\)\))/i, /^(?:\))/i, /^(?:\(\()/i, /^(?:\{\{)/i, /^(?:\()/i, /^(?:\[)/i, /^(?:[\s]+)/i, /^(?:[^\(\[\n\)\{\}@]+)/i, /^(?:$)/i, /^(?:["][`])/i, /^(?:[^`"]+)/i, /^(?:[`]["])/i, /^(?:["])/i, /^(?:[^"]+)/i, /^(?:["])/i, /^(?:[\)]\))/i, /^(?:[\)])/i, /^(?:[\]])/i, /^(?:\}\})/i, /^(?:\(-)/i, /^(?:-\))/i, /^(?:\(\()/i, /^(?:\()/i, /^(?:[^\)\]\(\}]+)/i, /^(?:.+(?!\(\())/i], conditions: { shapeDataEndBracket: { rules: [], inclusive: false }, shapeDataStr: { rules: [2, 3], inclusive: false }, shapeData: { rules: [1, 4, 5], inclusive: false }, CLASS: { rules: [9, 10], inclusive: false }, ICON: { rules: [14, 15], inclusive: false }, NSTR2: { rules: [28, 29], inclusive: false }, NSTR: { rules: [31, 32], inclusive: false }, NODE: { rules: [27, 30, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42], inclusive: false }, INITIAL: { rules: [0, 6, 7, 8, 11, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], inclusive: true } } };
  })();
  function S2() {
    this.yy = {};
  }
  return c(S2, `Parser`), S2.prototype = x2, x2.Parser = S2, new S2();
})();
g.parser = g;
var _ = g, v = [], y = [], b = 0, x = {}, S = c(() => {
  v = [], y = [], b = 0, x = {};
}, `clear`), C = c((e2) => {
  if (v.length === 0) return null;
  let t2 = v[0].level, n2 = null;
  for (let e3 = v.length - 1; e3 >= 0; e3--) if (v[e3].level === t2 && !n2 && (n2 = v[e3]), v[e3].level < t2) throw Error(`Items without section detected, found section ("` + v[e3].label + `")`);
  return e2 === (n2 == null ? void 0 : n2.level) ? null : n2;
}, `getSection`), w = c(function() {
  return y;
}, `getSections`), T = c(function() {
  let e2 = [], t2 = [], r2 = w(), i2 = a();
  for (let e3 of r2) {
    let r3 = { id: e3.id, label: n(e3.label ?? ``, i2), isGroup: true, ticket: e3.ticket, shape: `kanbanSection`, level: e3.level, look: i2.look };
    t2.push(r3);
    let a2 = v.filter((t3) => t3.parentId === e3.id);
    for (let r4 of a2) {
      let a3 = { id: r4.id, parentId: e3.id, label: n(r4.label ?? ``, i2), isGroup: false, ticket: r4 == null ? void 0 : r4.ticket, priority: r4 == null ? void 0 : r4.priority, assigned: r4 == null ? void 0 : r4.assigned, icon: r4 == null ? void 0 : r4.icon, shape: `kanbanItem`, level: r4.level, rx: 5, ry: 5, cssStyles: [`text-align: left`] };
      t2.push(a3);
    }
  }
  return { nodes: t2, edges: e2, other: {}, config: a() };
}, `getData`), E = c((e2, t2, r2, i2, s2) => {
  var _a, _b;
  let c2 = a(), l2 = ((_a = c2.mindmap) == null ? void 0 : _a.padding) ?? o.mindmap.padding;
  switch (i2) {
    case D.ROUNDED_RECT:
    case D.RECT:
    case D.HEXAGON:
      l2 *= 2;
  }
  let f2 = { id: n(t2, c2) || `kbn` + b++, level: e2, label: n(r2, c2), width: ((_b = c2.mindmap) == null ? void 0 : _b.maxNodeWidth) ?? o.mindmap.maxNodeWidth, padding: l2, isGroup: false };
  if (s2 !== void 0) {
    let e3;
    e3 = s2.includes(`
`) ? s2 + `
` : `{
` + s2 + `
}`;
    let t3 = u(e3, { schema: d });
    if (t3.shape && (t3.shape !== t3.shape.toLowerCase() || t3.shape.includes(`_`))) throw Error(`No such shape: ${t3.shape}. Shape names should be lowercase.`);
    (t3 == null ? void 0 : t3.shape) && t3.shape === `kanbanItem` && (f2.shape = t3 == null ? void 0 : t3.shape), (t3 == null ? void 0 : t3.label) && (f2.label = t3 == null ? void 0 : t3.label), (t3 == null ? void 0 : t3.icon) && (f2.icon = t3 == null ? void 0 : t3.icon.toString()), (t3 == null ? void 0 : t3.assigned) && (f2.assigned = t3 == null ? void 0 : t3.assigned.toString()), (t3 == null ? void 0 : t3.ticket) && (f2.ticket = t3 == null ? void 0 : t3.ticket.toString()), (t3 == null ? void 0 : t3.priority) && (f2.priority = t3 == null ? void 0 : t3.priority);
  }
  let p2 = C(e2);
  p2 ? f2.parentId = p2.id || `kbn` + b++ : y.push(f2), v.push(f2);
}, `addNode`), D = { DEFAULT: 0, NO_BORDER: 0, ROUNDED_RECT: 1, RECT: 2, CIRCLE: 3, CLOUD: 4, BANG: 5, HEXAGON: 6 }, O = { clear: S, addNode: E, getSections: w, getData: T, nodeType: D, getType: c((e2, t2) => {
  switch (s.debug(`In get type`, e2, t2), e2) {
    case `[`:
      return D.RECT;
    case `(`:
      return t2 === `)` ? D.ROUNDED_RECT : D.CLOUD;
    case `((`:
      return D.CIRCLE;
    case `)`:
      return D.CLOUD;
    case `))`:
      return D.BANG;
    case `{{`:
      return D.HEXAGON;
    default:
      return D.DEFAULT;
  }
}, `getType`), setElementForId: c((e2, t2) => {
  x[e2] = t2;
}, `setElementForId`), decorateNode: c((e2) => {
  if (!e2) return;
  let t2 = a(), r2 = v[v.length - 1];
  e2.icon && (r2.icon = n(e2.icon, t2)), e2.class && (r2.cssClasses = n(e2.class, t2));
}, `decorateNode`), type2Str: c((e2) => {
  switch (e2) {
    case D.DEFAULT:
      return `no-border`;
    case D.RECT:
      return `rect`;
    case D.ROUNDED_RECT:
      return `rounded-rect`;
    case D.CIRCLE:
      return `circle`;
    case D.CLOUD:
      return `cloud`;
    case D.BANG:
      return `bang`;
    case D.HEXAGON:
      return `hexgon`;
    default:
      return `no-border`;
  }
}, `type2Str`), getLogger: c(() => s, `getLogger`), getElementById: c((e2) => x[e2], `getElementById`) }, k = { draw: c(async (e2, n2, r2, i2) => {
  var _a, _b, _c, _d, _e;
  s.debug(`Rendering kanban diagram
` + e2);
  let c2 = i2.db.getData(), u2 = a();
  u2.htmlLabels = false;
  let d2 = l(n2), h2 = d2.append(`g`);
  h2.attr(`class`, `sections`);
  let g2 = d2.append(`g`);
  g2.attr(`class`, `items`);
  let _2 = c2.nodes.filter((e3) => e3.isGroup), v2 = 0, y2 = [], b2 = 25;
  for (let e3 of _2) {
    let t2 = ((_a = u2 == null ? void 0 : u2.kanban) == null ? void 0 : _a.sectionWidth) || 200;
    v2 += 1, e3.x = t2 * v2 + (v2 - 1) * 10 / 2, e3.width = t2, e3.y = 0, e3.height = t2 * 3, e3.rx = 5, e3.ry = 5, e3.cssClasses = e3.cssClasses + ` section-` + v2;
    let n3 = await m(h2, e3);
    b2 = Math.max(b2, (_b = n3 == null ? void 0 : n3.labelBBox) == null ? void 0 : _b.height), y2.push(n3);
  }
  let x2 = 0;
  for (let e3 of _2) {
    let t2 = y2[x2];
    x2 += 1;
    let n3 = ((_c = u2 == null ? void 0 : u2.kanban) == null ? void 0 : _c.sectionWidth) || 200, r3 = -n3 * 3 / 2 + b2, i3 = r3, a2 = c2.nodes.filter((t3) => t3.parentId === e3.id);
    for (let t3 of a2) {
      if (t3.isGroup) throw Error(`Groups within groups are not allowed in Kanban diagrams`);
      t3.x = e3.x, t3.width = n3 - 1.5 * 10;
      let r4 = (await f(g2, t3, { config: u2 })).node().getBBox();
      t3.y = i3 + r4.height / 2, await p(t3), i3 = t3.y + r4.height / 2 + 10 / 2;
    }
    let o2 = t2.cluster.select(`rect`), s2 = Math.max(i3 - r3 + 30, 50) + (b2 - 25);
    o2.attr(`height`, s2);
  }
  t(void 0, d2, ((_d = u2.mindmap) == null ? void 0 : _d.padding) ?? o.kanban.padding, ((_e = u2.mindmap) == null ? void 0 : _e.useMaxWidth) ?? o.kanban.useMaxWidth);
}, `draw`) }, A = c((t2) => {
  let n2 = ``;
  for (let n3 = 0; n3 < t2.THEME_COLOR_LIMIT; n3++) t2[`lineColor` + n3] = t2[`lineColor` + n3] || t2[`cScaleInv` + n3], e(t2[`lineColor` + n3]) ? t2[`lineColor` + n3] = r(t2[`lineColor` + n3], 20) : t2[`lineColor` + n3] = i(t2[`lineColor` + n3], 20);
  let a2 = c((e2, n3) => t2.darkMode ? i(e2, n3) : r(e2, n3), `adjuster`);
  for (let e2 = 0; e2 < t2.THEME_COLOR_LIMIT; e2++) {
    let r2 = `` + (17 - 3 * e2);
    n2 += `
    .section-${e2 - 1} rect, .section-${e2 - 1} path, .section-${e2 - 1} circle, .section-${e2 - 1} polygon, .section-${e2 - 1} path  {
      fill: ${a2(t2[`cScale` + e2], 10)};
      stroke: ${a2(t2[`cScale` + e2], 10)};

    }
    .section-${e2 - 1} text {
     fill: ${t2[`cScaleLabel` + e2]};
    }
    .node-icon-${e2 - 1} {
      font-size: 40px;
      color: ${t2[`cScaleLabel` + e2]};
    }
    .section-edge-${e2 - 1}{
      stroke: ${t2[`cScale` + e2]};
    }
    .edge-depth-${e2 - 1}{
      stroke-width: ${r2};
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

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t2.background};
    stroke: ${t2.nodeBorder};
    stroke-width: 1px;
  }

  .kanban-ticket-link {
    fill: ${t2.background};
    stroke: ${t2.nodeBorder};
    text-decoration: underline;
  }
    `;
  }
  return n2;
}, `genSections`), j = { db: O, renderer: k, parser: _, styles: c((e2) => `
  .edge {
    stroke-width: 3;
  }
  ${A(e2)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${e2.git0};
  }
  .section-root text {
    fill: ${e2.gitBranchLabel0};
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
  .cluster-label, .label {
    color: ${e2.textColor};
    fill: ${e2.textColor};
    }
  .kanban-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
    ${h()}
`, `getStyles`) };
export {
  j as diagram
};
