import { Bn as e, Jn as t, Ln as n, Mn as r, Mt as i, Nt as a, Sn as o, Un as s, Vn as c, Yn as l, _ as u, h as d, jt as f, m as p, vn as m } from "./index-4Ava25sD.js";
import { t as h } from "./chunk-FMBD7UC4-BgifVydb.js";
var g = (function() {
  var e2 = t(function(e3, t2, n3, r3) {
    for (n3 || (n3 = {}), r3 = e3.length; r3--; n3[e3[r3]] = t2) ;
    return n3;
  }, `o`), n2 = [1, 4], r2 = [1, 13], i2 = [1, 12], a2 = [1, 15], o2 = [1, 16], s2 = [1, 20], c2 = [1, 19], l2 = [6, 7, 8], u2 = [1, 26], d2 = [1, 24], f2 = [1, 25], p2 = [6, 7, 11], m2 = [1, 31], h2 = [6, 7, 11, 24], g2 = [1, 6, 13, 16, 17, 20, 23], _2 = [1, 35], v2 = [1, 36], y2 = [1, 6, 7, 11, 13, 16, 17, 20, 23], b2 = [1, 38], x2 = { trace: t(function() {
  }, `trace`), yy: {}, symbols_: { error: 2, start: 3, mindMap: 4, spaceLines: 5, SPACELINE: 6, NL: 7, KANBAN: 8, document: 9, stop: 10, EOF: 11, statement: 12, SPACELIST: 13, node: 14, shapeData: 15, ICON: 16, CLASS: 17, nodeWithId: 18, nodeWithoutId: 19, NODE_DSTART: 20, NODE_DESCR: 21, NODE_DEND: 22, NODE_ID: 23, SHAPE_DATA: 24, $accept: 0, $end: 1 }, terminals_: { 2: `error`, 6: `SPACELINE`, 7: `NL`, 8: `KANBAN`, 11: `EOF`, 13: `SPACELIST`, 16: `ICON`, 17: `CLASS`, 20: `NODE_DSTART`, 21: `NODE_DESCR`, 22: `NODE_DEND`, 23: `NODE_ID`, 24: `SHAPE_DATA` }, productions_: [0, [3, 1], [3, 2], [5, 1], [5, 2], [5, 2], [4, 2], [4, 3], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [9, 3], [9, 2], [12, 3], [12, 2], [12, 2], [12, 2], [12, 1], [12, 2], [12, 1], [12, 1], [12, 1], [12, 1], [14, 1], [14, 1], [19, 3], [18, 1], [18, 4], [15, 2], [15, 1]], performAction: t(function(e3, t2, n3, r3, i3, a3, o3) {
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
  }, `anonymous`), table: [{ 3: 1, 4: 2, 5: 3, 6: [1, 5], 8: n2 }, { 1: [3] }, { 1: [2, 1] }, { 4: 6, 6: [1, 7], 7: [1, 8], 8: n2 }, { 6: r2, 7: [1, 10], 9: 9, 12: 11, 13: i2, 14: 14, 16: a2, 17: o2, 18: 17, 19: 18, 20: s2, 23: c2 }, e2(l2, [2, 3]), { 1: [2, 2] }, e2(l2, [2, 4]), e2(l2, [2, 5]), { 1: [2, 6], 6: r2, 12: 21, 13: i2, 14: 14, 16: a2, 17: o2, 18: 17, 19: 18, 20: s2, 23: c2 }, { 6: r2, 9: 22, 12: 11, 13: i2, 14: 14, 16: a2, 17: o2, 18: 17, 19: 18, 20: s2, 23: c2 }, { 6: u2, 7: d2, 10: 23, 11: f2 }, e2(p2, [2, 24], { 18: 17, 19: 18, 14: 27, 16: [1, 28], 17: [1, 29], 20: s2, 23: c2 }), e2(p2, [2, 19]), e2(p2, [2, 21], { 15: 30, 24: m2 }), e2(p2, [2, 22]), e2(p2, [2, 23]), e2(h2, [2, 25]), e2(h2, [2, 26]), e2(h2, [2, 28], { 20: [1, 32] }), { 21: [1, 33] }, { 6: u2, 7: d2, 10: 34, 11: f2 }, { 1: [2, 7], 6: r2, 12: 21, 13: i2, 14: 14, 16: a2, 17: o2, 18: 17, 19: 18, 20: s2, 23: c2 }, e2(g2, [2, 14], { 7: _2, 11: v2 }), e2(y2, [2, 8]), e2(y2, [2, 9]), e2(y2, [2, 10]), e2(p2, [2, 16], { 15: 37, 24: m2 }), e2(p2, [2, 17]), e2(p2, [2, 18]), e2(p2, [2, 20], { 24: b2 }), e2(h2, [2, 31]), { 21: [1, 39] }, { 22: [1, 40] }, e2(g2, [2, 13], { 7: _2, 11: v2 }), e2(y2, [2, 11]), e2(y2, [2, 12]), e2(p2, [2, 15], { 24: b2 }), e2(h2, [2, 30]), { 22: [1, 41] }, e2(h2, [2, 27]), e2(h2, [2, 29])], defaultActions: { 2: [2, 1], 6: [2, 2] }, parseError: t(function(e3, t2) {
    if (t2.recoverable) this.trace(e3);
    else {
      var n3 = Error(e3);
      throw n3.hash = t2, n3;
    }
  }, `parseError`), parse: t(function(e3) {
    var n3 = this, r3 = [0], i3 = [], a3 = [null], o3 = [], s3 = this.table, c3 = ``, l3 = 0, u3 = 0, d3 = 0, f3 = 2, p3 = 1, m3 = o3.slice.call(arguments, 1), h3 = Object.create(this.lexer), g3 = { yy: {} };
    for (var _3 in this.yy) Object.prototype.hasOwnProperty.call(this.yy, _3) && (g3.yy[_3] = this.yy[_3]);
    h3.setInput(e3, g3.yy), g3.yy.lexer = h3, g3.yy.parser = this, h3.yylloc === void 0 && (h3.yylloc = {});
    var v3 = h3.yylloc;
    o3.push(v3);
    var y3 = h3.options && h3.options.ranges;
    typeof g3.yy.parseError == `function` ? this.parseError = g3.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
    function b3(e4) {
      r3.length -= 2 * e4, a3.length -= e4, o3.length -= e4;
    }
    t(b3, `popStack`);
    function x3() {
      var e4 = i3.pop() || h3.lex() || p3;
      return typeof e4 != `number` && (e4 instanceof Array && (i3 = e4, e4 = i3.pop()), e4 = n3.symbols_[e4] || e4), e4;
    }
    t(x3, `lex`);
    for (var S3, C2, w2, T2, E2, D2 = {}, O2, k2, A2, j2; ; ) {
      if (w2 = r3[r3.length - 1], this.defaultActions[w2] ? T2 = this.defaultActions[w2] : (S3 ?? (S3 = x3()), T2 = s3[w2] && s3[w2][S3]), T2 === void 0 || !T2.length || !T2[0]) {
        var M = ``;
        for (O2 in j2 = [], s3[w2]) this.terminals_[O2] && O2 > f3 && j2.push(`'` + this.terminals_[O2] + `'`);
        M = h3.showPosition ? `Parse error on line ` + (l3 + 1) + `:
` + h3.showPosition() + `
Expecting ` + j2.join(`, `) + `, got '` + (this.terminals_[S3] || S3) + `'` : `Parse error on line ` + (l3 + 1) + `: Unexpected ` + (S3 == p3 ? `end of input` : `'` + (this.terminals_[S3] || S3) + `'`), this.parseError(M, { text: h3.match, token: this.terminals_[S3] || S3, line: h3.yylineno, loc: v3, expected: j2 });
      }
      if (T2[0] instanceof Array && T2.length > 1) throw Error(`Parse Error: multiple actions possible at state: ` + w2 + `, token: ` + S3);
      switch (T2[0]) {
        case 1:
          r3.push(S3), a3.push(h3.yytext), o3.push(h3.yylloc), r3.push(T2[1]), S3 = null, C2 ? (S3 = C2, C2 = null) : (u3 = h3.yyleng, c3 = h3.yytext, l3 = h3.yylineno, v3 = h3.yylloc, d3 > 0 && d3--);
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
  x2.lexer = (function() {
    return { EOF: 1, parseError: t(function(e3, t2) {
      if (this.yy.parser) this.yy.parser.parseError(e3, t2);
      else throw Error(e3);
    }, `parseError`), setInput: t(function(e3, t2) {
      return this.yy = t2 || this.yy || {}, this._input = e3, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = ``, this.conditionStack = [`INITIAL`], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
    }, `setInput`), input: t(function() {
      var e3 = this._input[0];
      return this.yytext += e3, this.yyleng++, this.offset++, this.match += e3, this.matched += e3, e3.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e3;
    }, `input`), unput: t(function(e3) {
      var t2 = e3.length, n3 = e3.split(/(?:\r\n?|\n)/g);
      this._input = e3 + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t2), this.offset -= t2;
      var r3 = this.match.split(/(?:\r\n?|\n)/g);
      this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n3.length - 1 && (this.yylineno -= n3.length - 1);
      var i3 = this.yylloc.range;
      return this.yylloc = { first_line: this.yylloc.first_line, last_line: this.yylineno + 1, first_column: this.yylloc.first_column, last_column: n3 ? (n3.length === r3.length ? this.yylloc.first_column : 0) + r3[r3.length - n3.length].length - n3[0].length : this.yylloc.first_column - t2 }, this.options.ranges && (this.yylloc.range = [i3[0], i3[0] + this.yyleng - t2]), this.yyleng = this.yytext.length, this;
    }, `unput`), more: t(function() {
      return this._more = true, this;
    }, `more`), reject: t(function() {
      if (this.options.backtrack_lexer) this._backtrack = true;
      else return this.parseError(`Lexical error on line ` + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), { text: ``, token: null, line: this.yylineno });
      return this;
    }, `reject`), less: t(function(e3) {
      this.unput(this.match.slice(e3));
    }, `less`), pastInput: t(function() {
      var e3 = this.matched.substr(0, this.matched.length - this.match.length);
      return (e3.length > 20 ? `...` : ``) + e3.substr(-20).replace(/\n/g, ``);
    }, `pastInput`), upcomingInput: t(function() {
      var e3 = this.match;
      return e3.length < 20 && (e3 += this._input.substr(0, 20 - e3.length)), (e3.substr(0, 20) + (e3.length > 20 ? `...` : ``)).replace(/\n/g, ``);
    }, `upcomingInput`), showPosition: t(function() {
      var e3 = this.pastInput(), t2 = Array(e3.length + 1).join(`-`);
      return e3 + this.upcomingInput() + `
` + t2 + `^`;
    }, `showPosition`), test_match: t(function(e3, t2) {
      var n3, r3, i3;
      if (this.options.backtrack_lexer && (i3 = { yylineno: this.yylineno, yylloc: { first_line: this.yylloc.first_line, last_line: this.last_line, first_column: this.yylloc.first_column, last_column: this.yylloc.last_column }, yytext: this.yytext, match: this.match, matches: this.matches, matched: this.matched, yyleng: this.yyleng, offset: this.offset, _more: this._more, _input: this._input, yy: this.yy, conditionStack: this.conditionStack.slice(0), done: this.done }, this.options.ranges && (i3.yylloc.range = this.yylloc.range.slice(0))), r3 = e3[0].match(/(?:\r\n?|\n).*/g), r3 && (this.yylineno += r3.length), this.yylloc = { first_line: this.yylloc.last_line, last_line: this.yylineno + 1, first_column: this.yylloc.last_column, last_column: r3 ? r3[r3.length - 1].length - r3[r3.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e3[0].length }, this.yytext += e3[0], this.match += e3[0], this.matches = e3, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(e3[0].length), this.matched += e3[0], n3 = this.performAction.call(this, this.yy, this, t2, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), n3) return n3;
      if (this._backtrack) {
        for (var a3 in i3) this[a3] = i3[a3];
        return false;
      }
      return false;
    }, `test_match`), next: t(function() {
      if (this.done) return this.EOF;
      this._input || (this.done = true);
      var e3, t2, n3, r3;
      this._more || (this.yytext = ``, this.match = ``);
      for (var i3 = this._currentRules(), a3 = 0; a3 < i3.length; a3++) if (n3 = this._input.match(this.rules[i3[a3]]), n3 && (!t2 || n3[0].length > t2[0].length)) {
        if (t2 = n3, r3 = a3, this.options.backtrack_lexer) {
          if (e3 = this.test_match(n3, i3[a3]), e3 !== false) return e3;
          if (this._backtrack) {
            t2 = false;
            continue;
          } else return false;
        } else if (!this.options.flex) break;
      }
      return t2 ? (e3 = this.test_match(t2, i3[r3]), e3 === false ? false : e3) : this._input === `` ? this.EOF : this.parseError(`Lexical error on line ` + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: ``, token: null, line: this.yylineno });
    }, `next`), lex: t(function() {
      return this.next() || this.lex();
    }, `lex`), begin: t(function(e3) {
      this.conditionStack.push(e3);
    }, `begin`), popState: t(function() {
      return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
    }, `popState`), _currentRules: t(function() {
      return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
    }, `_currentRules`), topState: t(function(e3) {
      return e3 = this.conditionStack.length - 1 - Math.abs(e3 || 0), e3 >= 0 ? this.conditionStack[e3] : `INITIAL`;
    }, `topState`), pushState: t(function(e3) {
      this.begin(e3);
    }, `pushState`), stateStackSize: t(function() {
      return this.conditionStack.length;
    }, `stateStackSize`), options: { "case-insensitive": true }, performAction: t(function(e3, t2, n3, r3) {
      switch (n3) {
        case 0:
          return this.pushState(`shapeData`), t2.yytext = ``, 24;
        case 1:
          return this.pushState(`shapeDataStr`), 24;
        case 2:
          return this.popState(), 24;
        case 3:
          return t2.yytext = t2.yytext.replace(/\n\s*/g, `<br/>`), 24;
        case 4:
          return 24;
        case 5:
          this.popState();
          break;
        case 6:
          return e3.getLogger().trace(`Found comment`, t2.yytext), 6;
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
          return e3.getLogger().trace(`description:`, t2.yytext), `NODE_DESCR`;
        case 32:
          this.popState();
          break;
        case 33:
          return this.popState(), e3.getLogger().trace(`node end ))`), `NODE_DEND`;
        case 34:
          return this.popState(), e3.getLogger().trace(`node end )`), `NODE_DEND`;
        case 35:
          return this.popState(), e3.getLogger().trace(`node end ...`, t2.yytext), `NODE_DEND`;
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
          return e3.getLogger().trace(`Long description:`, t2.yytext), 21;
        case 42:
          return e3.getLogger().trace(`Long description:`, t2.yytext), 21;
      }
    }, `anonymous`), rules: [/^(?:@\{)/i, /^(?:["])/i, /^(?:["])/i, /^(?:[^\"]+)/i, /^(?:[^}^"]+)/i, /^(?:\})/i, /^(?:\s*%%.*)/i, /^(?:kanban\b)/i, /^(?::::)/i, /^(?:.+)/i, /^(?:\n)/i, /^(?:::icon\()/i, /^(?:[\s]+[\n])/i, /^(?:[\n]+)/i, /^(?:[^\)]+)/i, /^(?:\))/i, /^(?:-\))/i, /^(?:\(-)/i, /^(?:\)\))/i, /^(?:\))/i, /^(?:\(\()/i, /^(?:\{\{)/i, /^(?:\()/i, /^(?:\[)/i, /^(?:[\s]+)/i, /^(?:[^\(\[\n\)\{\}@]+)/i, /^(?:$)/i, /^(?:["][`])/i, /^(?:[^`"]+)/i, /^(?:[`]["])/i, /^(?:["])/i, /^(?:[^"]+)/i, /^(?:["])/i, /^(?:[\)]\))/i, /^(?:[\)])/i, /^(?:[\]])/i, /^(?:\}\})/i, /^(?:\(-)/i, /^(?:-\))/i, /^(?:\(\()/i, /^(?:\()/i, /^(?:[^\)\]\(\}]+)/i, /^(?:.+(?!\(\())/i], conditions: { shapeDataEndBracket: { rules: [], inclusive: false }, shapeDataStr: { rules: [2, 3], inclusive: false }, shapeData: { rules: [1, 4, 5], inclusive: false }, CLASS: { rules: [9, 10], inclusive: false }, ICON: { rules: [14, 15], inclusive: false }, NSTR2: { rules: [28, 29], inclusive: false }, NSTR: { rules: [31, 32], inclusive: false }, NODE: { rules: [27, 30, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42], inclusive: false }, INITIAL: { rules: [0, 6, 7, 8, 11, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], inclusive: true } } };
  })();
  function S2() {
    this.yy = {};
  }
  return t(S2, `Parser`), S2.prototype = x2, x2.Parser = S2, new S2();
})();
g.parser = g;
var _ = g, v = [], y = [], b = 0, x = {}, S = t(() => {
  v = [], y = [], b = 0, x = {};
}, `clear`), C = t((e2) => {
  if (v.length === 0) return null;
  let t2 = v[0].level, n2 = null;
  for (let e3 = v.length - 1; e3 >= 0; e3--) if (v[e3].level === t2 && !n2 && (n2 = v[e3]), v[e3].level < t2) throw Error(`Items without section detected, found section ("` + v[e3].label + `")`);
  return e2 === (n2 == null ? void 0 : n2.level) ? null : n2;
}, `getSection`), w = t(function() {
  return y;
}, `getSections`), T = t(function() {
  let e2 = [], t2 = [], n2 = w(), i2 = o();
  for (let e3 of n2) {
    let n3 = { id: e3.id, label: r(e3.label ?? ``, i2), labelType: `markdown`, isGroup: true, ticket: e3.ticket, shape: `kanbanSection`, level: e3.level, look: i2.look };
    t2.push(n3);
    let a2 = v.filter((t3) => t3.parentId === e3.id);
    for (let n4 of a2) {
      let a3 = { id: n4.id, parentId: e3.id, label: r(n4.label ?? ``, i2), labelType: `markdown`, isGroup: false, ticket: n4 == null ? void 0 : n4.ticket, priority: n4 == null ? void 0 : n4.priority, assigned: n4 == null ? void 0 : n4.assigned, icon: n4 == null ? void 0 : n4.icon, shape: `kanbanItem`, level: n4.level, rx: 5, ry: 5, cssStyles: [`text-align: left`] };
      t2.push(a3);
    }
  }
  return { nodes: t2, edges: e2, other: {}, config: o() };
}, `getData`), E = t((e2, t2, n2, a2, s2) => {
  var _a, _b;
  let c2 = o(), l2 = ((_a = c2.mindmap) == null ? void 0 : _a.padding) ?? m.mindmap.padding;
  switch (a2) {
    case D.ROUNDED_RECT:
    case D.RECT:
    case D.HEXAGON:
      l2 *= 2;
  }
  let u2 = { id: r(t2, c2) || `kbn` + b++, level: e2, label: r(n2, c2), width: ((_b = c2.mindmap) == null ? void 0 : _b.maxNodeWidth) ?? m.mindmap.maxNodeWidth, padding: l2, isGroup: false };
  if (s2 !== void 0) {
    let e3;
    e3 = s2.includes(`
`) ? s2 + `
` : `{
` + s2 + `
}`;
    let t3 = i(e3, { schema: f });
    if (t3.shape && (t3.shape !== t3.shape.toLowerCase() || t3.shape.includes(`_`))) throw Error(`No such shape: ${t3.shape}. Shape names should be lowercase.`);
    (t3 == null ? void 0 : t3.shape) && t3.shape === `kanbanItem` && (u2.shape = t3 == null ? void 0 : t3.shape), (t3 == null ? void 0 : t3.label) && (u2.label = t3 == null ? void 0 : t3.label), (t3 == null ? void 0 : t3.icon) && (u2.icon = t3 == null ? void 0 : t3.icon.toString()), (t3 == null ? void 0 : t3.assigned) && (u2.assigned = t3 == null ? void 0 : t3.assigned.toString()), (t3 == null ? void 0 : t3.ticket) && (u2.ticket = t3 == null ? void 0 : t3.ticket.toString()), (t3 == null ? void 0 : t3.priority) && (u2.priority = t3 == null ? void 0 : t3.priority);
  }
  let d2 = C(e2);
  d2 ? u2.parentId = d2.id || `kbn` + b++ : y.push(u2), v.push(u2);
}, `addNode`), D = { DEFAULT: 0, NO_BORDER: 0, ROUNDED_RECT: 1, RECT: 2, CIRCLE: 3, CLOUD: 4, BANG: 5, HEXAGON: 6 }, O = { clear: S, addNode: E, getSections: w, getData: T, nodeType: D, getType: t((e2, t2) => {
  switch (l.debug(`In get type`, e2, t2), e2) {
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
}, `getType`), setElementForId: t((e2, t2) => {
  x[e2] = t2;
}, `setElementForId`), decorateNode: t((e2) => {
  if (!e2) return;
  let t2 = o(), n2 = v[v.length - 1];
  e2.icon && (n2.icon = r(e2.icon, t2)), e2.class && (n2.cssClasses = r(e2.class, t2));
}, `decorateNode`), type2Str: t((e2) => {
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
}, `type2Str`), getLogger: t(() => l, `getLogger`), getElementById: t((e2) => x[e2], `getElementById`) }, k = { draw: t(async (e2, t2, r2, i2) => {
  var _a, _b, _c, _d, _e;
  l.debug(`Rendering kanban diagram
` + e2);
  let s2 = i2.db.getData(), c2 = o();
  c2.htmlLabels = false;
  let f2 = a(t2);
  for (let e3 of s2.nodes) e3.domId = `${t2}-${e3.id}`;
  let h2 = f2.append(`g`);
  h2.attr(`class`, `sections`);
  let g2 = f2.append(`g`);
  g2.attr(`class`, `items`);
  let _2 = s2.nodes.filter((e3) => e3.isGroup), v2 = 0, y2 = [], b2 = 25;
  for (let e3 of _2) {
    let t3 = ((_a = c2 == null ? void 0 : c2.kanban) == null ? void 0 : _a.sectionWidth) || 200;
    v2 += 1, e3.x = t3 * v2 + (v2 - 1) * 10 / 2, e3.width = t3, e3.y = 0, e3.height = t3 * 3, e3.rx = 5, e3.ry = 5, e3.cssClasses = e3.cssClasses + ` section-` + v2;
    let n2 = await p(h2, e3);
    b2 = Math.max(b2, (_b = n2 == null ? void 0 : n2.labelBBox) == null ? void 0 : _b.height), y2.push(n2);
  }
  let x2 = 0;
  for (let e3 of _2) {
    let t3 = y2[x2];
    x2 += 1;
    let n2 = ((_c = c2 == null ? void 0 : c2.kanban) == null ? void 0 : _c.sectionWidth) || 200, r3 = -n2 * 3 / 2 + b2, i3 = r3, a2 = s2.nodes.filter((t4) => t4.parentId === e3.id);
    for (let t4 of a2) {
      if (t4.isGroup) throw Error(`Groups within groups are not allowed in Kanban diagrams`);
      t4.x = e3.x, t4.width = n2 - 1.5 * 10;
      let r4 = (await d(g2, t4, { config: c2 })).node().getBBox();
      t4.y = i3 + r4.height / 2, await u(t4), i3 = t4.y + r4.height / 2 + 10 / 2;
    }
    let o2 = t3.cluster.select(`rect`), l2 = Math.max(i3 - r3 + 30, 50) + (b2 - 25);
    o2.attr(`height`, l2);
  }
  n(void 0, f2, ((_d = c2.mindmap) == null ? void 0 : _d.padding) ?? m.kanban.padding, ((_e = c2.mindmap) == null ? void 0 : _e.useMaxWidth) ?? m.kanban.useMaxWidth);
}, `draw`) }, A = t((n2) => {
  let r2 = ``;
  for (let t2 = 0; t2 < n2.THEME_COLOR_LIMIT; t2++) n2[`lineColor` + t2] = n2[`lineColor` + t2] || n2[`cScaleInv` + t2], s(n2[`lineColor` + t2]) ? n2[`lineColor` + t2] = c(n2[`lineColor` + t2], 20) : n2[`lineColor` + t2] = e(n2[`lineColor` + t2], 20);
  let i2 = t((t2, r3) => n2.darkMode ? e(t2, r3) : c(t2, r3), `adjuster`);
  for (let e2 = 0; e2 < n2.THEME_COLOR_LIMIT; e2++) {
    let t2 = `` + (17 - 3 * e2);
    r2 += `
    .section-${e2 - 1} rect, .section-${e2 - 1} path, .section-${e2 - 1} circle, .section-${e2 - 1} polygon, .section-${e2 - 1} path  {
      fill: ${i2(n2[`cScale` + e2], 10)};
      stroke: ${i2(n2[`cScale` + e2], 10)};

    }
    .section-${e2 - 1} text {
     fill: ${n2[`cScaleLabel` + e2]};
    }
    .node-icon-${e2 - 1} {
      font-size: 40px;
      color: ${n2[`cScaleLabel` + e2]};
    }
    .section-edge-${e2 - 1}{
      stroke: ${n2[`cScale` + e2]};
    }
    .edge-depth-${e2 - 1}{
      stroke-width: ${t2};
    }
    .section-${e2 - 1} line {
      stroke: ${n2[`cScaleInv` + e2]} ;
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
    fill: ${n2.background};
    stroke: ${n2.nodeBorder};
    stroke-width: 1px;
  }

  .kanban-ticket-link {
    fill: ${n2.background};
    stroke: ${n2.nodeBorder};
    text-decoration: underline;
  }
    `;
  }
  return r2;
}, `genSections`), j = { db: O, renderer: k, parser: _, styles: t((e2) => `
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
