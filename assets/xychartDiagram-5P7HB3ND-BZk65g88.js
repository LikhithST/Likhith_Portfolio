var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j;
import { t as e } from "./linear-DpWPTl-K.js";
import { t } from "./ordinal-Bs01uwBv.js";
import "./defaultLocale-BExgBGLN.js";
import { t as n } from "./init-B8xRTswO.js";
import { Cn as r, Ft as i, In as a, Jn as o, Mn as s, N as c, Nn as l, Nt as u, Pn as d, Tn as f, Yn as p, bn as m, gn as h, pn as g, vn as _, x as v, xn as y, yn as b } from "./index-4Ava25sD.js";
function x(e2, t2, n2) {
  e2 = +e2, t2 = +t2, n2 = (i2 = arguments.length) < 2 ? (t2 = e2, e2 = 0, 1) : i2 < 3 ? 1 : +n2;
  for (var r2 = -1, i2 = Math.max(0, Math.ceil((t2 - e2) / n2)) | 0, a2 = Array(i2); ++r2 < i2; ) a2[r2] = e2 + r2 * n2;
  return a2;
}
function S() {
  var e2 = t().unknown(void 0), r2 = e2.domain, i2 = e2.range, a2 = 0, o2 = 1, s2, c2, l2 = false, u2 = 0, d2 = 0, f2 = 0.5;
  delete e2.unknown;
  function p2() {
    var e3 = r2().length, t2 = o2 < a2, n2 = t2 ? o2 : a2, p3 = t2 ? a2 : o2;
    s2 = (p3 - n2) / Math.max(1, e3 - u2 + d2 * 2), l2 && (s2 = Math.floor(s2)), n2 += (p3 - n2 - s2 * (e3 - u2)) * f2, c2 = s2 * (1 - u2), l2 && (n2 = Math.round(n2), c2 = Math.round(c2));
    var m2 = x(e3).map(function(e4) {
      return n2 + s2 * e4;
    });
    return i2(t2 ? m2.reverse() : m2);
  }
  return e2.domain = function(e3) {
    return arguments.length ? (r2(e3), p2()) : r2();
  }, e2.range = function(e3) {
    return arguments.length ? ([a2, o2] = e3, a2 = +a2, o2 = +o2, p2()) : [a2, o2];
  }, e2.rangeRound = function(e3) {
    return [a2, o2] = e3, a2 = +a2, o2 = +o2, l2 = true, p2();
  }, e2.bandwidth = function() {
    return c2;
  }, e2.step = function() {
    return s2;
  }, e2.round = function(e3) {
    return arguments.length ? (l2 = !!e3, p2()) : l2;
  }, e2.padding = function(e3) {
    return arguments.length ? (u2 = Math.min(1, d2 = +e3), p2()) : u2;
  }, e2.paddingInner = function(e3) {
    return arguments.length ? (u2 = Math.min(1, e3), p2()) : u2;
  }, e2.paddingOuter = function(e3) {
    return arguments.length ? (d2 = +e3, p2()) : d2;
  }, e2.align = function(e3) {
    return arguments.length ? (f2 = Math.max(0, Math.min(1, e3)), p2()) : f2;
  }, e2.copy = function() {
    return S(r2(), [a2, o2]).round(l2).paddingInner(u2).paddingOuter(d2).align(f2);
  }, n.apply(p2(), arguments);
}
var C = (function() {
  var e2 = o(function(e3, t3, n3, r3) {
    for (n3 || (n3 = {}), r3 = e3.length; r3--; n3[e3[r3]] = t3) ;
    return n3;
  }, `o`), t2 = [1, 10, 12, 14, 16, 18, 19, 21, 23], n2 = [2, 6], r2 = [1, 3], i2 = [1, 5], a2 = [1, 6], s2 = [1, 7], c2 = [1, 5, 10, 12, 14, 16, 18, 19, 21, 23, 34, 35, 36], l2 = [1, 25], u2 = [1, 26], d2 = [1, 28], f2 = [1, 29], p2 = [1, 30], m2 = [1, 31], h2 = [1, 32], g2 = [1, 33], _2 = [1, 34], v2 = [1, 35], y2 = [1, 36], b2 = [1, 37], x2 = [1, 43], S2 = [1, 42], C2 = [1, 47], w2 = [1, 50], T2 = [1, 10, 12, 14, 16, 18, 19, 21, 23, 34, 35, 36], E2 = [1, 10, 12, 14, 16, 18, 19, 21, 23, 24, 26, 27, 28, 34, 35, 36], D2 = [1, 10, 12, 14, 16, 18, 19, 21, 23, 24, 26, 27, 28, 34, 35, 36, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], O2 = [1, 64], k2 = { trace: o(function() {
  }, `trace`), yy: {}, symbols_: { error: 2, start: 3, eol: 4, XYCHART: 5, chartConfig: 6, document: 7, CHART_ORIENTATION: 8, statement: 9, title: 10, text: 11, X_AXIS: 12, parseXAxis: 13, Y_AXIS: 14, parseYAxis: 15, LINE: 16, plotData: 17, BAR: 18, acc_title: 19, acc_title_value: 20, acc_descr: 21, acc_descr_value: 22, acc_descr_multiline_value: 23, SQUARE_BRACES_START: 24, commaSeparatedNumbers: 25, SQUARE_BRACES_END: 26, NUMBER_WITH_DECIMAL: 27, COMMA: 28, xAxisData: 29, bandData: 30, ARROW_DELIMITER: 31, commaSeparatedTexts: 32, yAxisData: 33, NEWLINE: 34, SEMI: 35, EOF: 36, alphaNum: 37, STR: 38, MD_STR: 39, alphaNumToken: 40, AMP: 41, NUM: 42, ALPHA: 43, PLUS: 44, EQUALS: 45, MULT: 46, DOT: 47, BRKT: 48, MINUS: 49, UNDERSCORE: 50, $accept: 0, $end: 1 }, terminals_: { 2: `error`, 5: `XYCHART`, 8: `CHART_ORIENTATION`, 10: `title`, 12: `X_AXIS`, 14: `Y_AXIS`, 16: `LINE`, 18: `BAR`, 19: `acc_title`, 20: `acc_title_value`, 21: `acc_descr`, 22: `acc_descr_value`, 23: `acc_descr_multiline_value`, 24: `SQUARE_BRACES_START`, 26: `SQUARE_BRACES_END`, 27: `NUMBER_WITH_DECIMAL`, 28: `COMMA`, 31: `ARROW_DELIMITER`, 34: `NEWLINE`, 35: `SEMI`, 36: `EOF`, 38: `STR`, 39: `MD_STR`, 41: `AMP`, 42: `NUM`, 43: `ALPHA`, 44: `PLUS`, 45: `EQUALS`, 46: `MULT`, 47: `DOT`, 48: `BRKT`, 49: `MINUS`, 50: `UNDERSCORE` }, productions_: [0, [3, 2], [3, 3], [3, 2], [3, 1], [6, 1], [7, 0], [7, 2], [9, 2], [9, 2], [9, 2], [9, 2], [9, 2], [9, 3], [9, 2], [9, 3], [9, 2], [9, 2], [9, 1], [17, 3], [25, 3], [25, 1], [13, 1], [13, 2], [13, 1], [29, 1], [29, 3], [30, 3], [32, 3], [32, 1], [15, 1], [15, 2], [15, 1], [33, 3], [4, 1], [4, 1], [4, 1], [11, 1], [11, 1], [11, 1], [37, 1], [37, 2], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1]], performAction: o(function(e3, t3, n3, r3, i3, a3, o2) {
    var s3 = a3.length - 1;
    switch (i3) {
      case 5:
        r3.setOrientation(a3[s3]);
        break;
      case 9:
        r3.setDiagramTitle(a3[s3].text.trim());
        break;
      case 12:
        r3.setLineData({ text: ``, type: `text` }, a3[s3]);
        break;
      case 13:
        r3.setLineData(a3[s3 - 1], a3[s3]);
        break;
      case 14:
        r3.setBarData({ text: ``, type: `text` }, a3[s3]);
        break;
      case 15:
        r3.setBarData(a3[s3 - 1], a3[s3]);
        break;
      case 16:
        this.$ = a3[s3].trim(), r3.setAccTitle(this.$);
        break;
      case 17:
      case 18:
        this.$ = a3[s3].trim(), r3.setAccDescription(this.$);
        break;
      case 19:
        this.$ = a3[s3 - 1];
        break;
      case 20:
        this.$ = [Number(a3[s3 - 2]), ...a3[s3]];
        break;
      case 21:
        this.$ = [Number(a3[s3])];
        break;
      case 22:
        r3.setXAxisTitle(a3[s3]);
        break;
      case 23:
        r3.setXAxisTitle(a3[s3 - 1]);
        break;
      case 24:
        r3.setXAxisTitle({ type: `text`, text: `` });
        break;
      case 25:
        r3.setXAxisBand(a3[s3]);
        break;
      case 26:
        r3.setXAxisRangeData(Number(a3[s3 - 2]), Number(a3[s3]));
        break;
      case 27:
        this.$ = a3[s3 - 1];
        break;
      case 28:
        this.$ = [a3[s3 - 2], ...a3[s3]];
        break;
      case 29:
        this.$ = [a3[s3]];
        break;
      case 30:
        r3.setYAxisTitle(a3[s3]);
        break;
      case 31:
        r3.setYAxisTitle(a3[s3 - 1]);
        break;
      case 32:
        r3.setYAxisTitle({ type: `text`, text: `` });
        break;
      case 33:
        r3.setYAxisRangeData(Number(a3[s3 - 2]), Number(a3[s3]));
        break;
      case 37:
        this.$ = { text: a3[s3], type: `text` };
        break;
      case 38:
        this.$ = { text: a3[s3], type: `text` };
        break;
      case 39:
        this.$ = { text: a3[s3], type: `markdown` };
        break;
      case 40:
        this.$ = a3[s3];
        break;
      case 41:
        this.$ = a3[s3 - 1] + `` + a3[s3];
        break;
    }
  }, `anonymous`), table: [e2(t2, n2, { 3: 1, 4: 2, 7: 4, 5: r2, 34: i2, 35: a2, 36: s2 }), { 1: [3] }, e2(t2, n2, { 4: 2, 7: 4, 3: 8, 5: r2, 34: i2, 35: a2, 36: s2 }), e2(t2, n2, { 4: 2, 7: 4, 6: 9, 3: 10, 5: r2, 8: [1, 11], 34: i2, 35: a2, 36: s2 }), { 1: [2, 4], 9: 12, 10: [1, 13], 12: [1, 14], 14: [1, 15], 16: [1, 16], 18: [1, 17], 19: [1, 18], 21: [1, 19], 23: [1, 20] }, e2(c2, [2, 34]), e2(c2, [2, 35]), e2(c2, [2, 36]), { 1: [2, 1] }, e2(t2, n2, { 4: 2, 7: 4, 3: 21, 5: r2, 34: i2, 35: a2, 36: s2 }), { 1: [2, 3] }, e2(c2, [2, 5]), e2(t2, [2, 7], { 4: 22, 34: i2, 35: a2, 36: s2 }), { 11: 23, 37: 24, 38: l2, 39: u2, 40: 27, 41: d2, 42: f2, 43: p2, 44: m2, 45: h2, 46: g2, 47: _2, 48: v2, 49: y2, 50: b2 }, { 11: 39, 13: 38, 24: x2, 27: S2, 29: 40, 30: 41, 37: 24, 38: l2, 39: u2, 40: 27, 41: d2, 42: f2, 43: p2, 44: m2, 45: h2, 46: g2, 47: _2, 48: v2, 49: y2, 50: b2 }, { 11: 45, 15: 44, 27: C2, 33: 46, 37: 24, 38: l2, 39: u2, 40: 27, 41: d2, 42: f2, 43: p2, 44: m2, 45: h2, 46: g2, 47: _2, 48: v2, 49: y2, 50: b2 }, { 11: 49, 17: 48, 24: w2, 37: 24, 38: l2, 39: u2, 40: 27, 41: d2, 42: f2, 43: p2, 44: m2, 45: h2, 46: g2, 47: _2, 48: v2, 49: y2, 50: b2 }, { 11: 52, 17: 51, 24: w2, 37: 24, 38: l2, 39: u2, 40: 27, 41: d2, 42: f2, 43: p2, 44: m2, 45: h2, 46: g2, 47: _2, 48: v2, 49: y2, 50: b2 }, { 20: [1, 53] }, { 22: [1, 54] }, e2(T2, [2, 18]), { 1: [2, 2] }, e2(T2, [2, 8]), e2(T2, [2, 9]), e2(E2, [2, 37], { 40: 55, 41: d2, 42: f2, 43: p2, 44: m2, 45: h2, 46: g2, 47: _2, 48: v2, 49: y2, 50: b2 }), e2(E2, [2, 38]), e2(E2, [2, 39]), e2(D2, [2, 40]), e2(D2, [2, 42]), e2(D2, [2, 43]), e2(D2, [2, 44]), e2(D2, [2, 45]), e2(D2, [2, 46]), e2(D2, [2, 47]), e2(D2, [2, 48]), e2(D2, [2, 49]), e2(D2, [2, 50]), e2(D2, [2, 51]), e2(T2, [2, 10]), e2(T2, [2, 22], { 30: 41, 29: 56, 24: x2, 27: S2 }), e2(T2, [2, 24]), e2(T2, [2, 25]), { 31: [1, 57] }, { 11: 59, 32: 58, 37: 24, 38: l2, 39: u2, 40: 27, 41: d2, 42: f2, 43: p2, 44: m2, 45: h2, 46: g2, 47: _2, 48: v2, 49: y2, 50: b2 }, e2(T2, [2, 11]), e2(T2, [2, 30], { 33: 60, 27: C2 }), e2(T2, [2, 32]), { 31: [1, 61] }, e2(T2, [2, 12]), { 17: 62, 24: w2 }, { 25: 63, 27: O2 }, e2(T2, [2, 14]), { 17: 65, 24: w2 }, e2(T2, [2, 16]), e2(T2, [2, 17]), e2(D2, [2, 41]), e2(T2, [2, 23]), { 27: [1, 66] }, { 26: [1, 67] }, { 26: [2, 29], 28: [1, 68] }, e2(T2, [2, 31]), { 27: [1, 69] }, e2(T2, [2, 13]), { 26: [1, 70] }, { 26: [2, 21], 28: [1, 71] }, e2(T2, [2, 15]), e2(T2, [2, 26]), e2(T2, [2, 27]), { 11: 59, 32: 72, 37: 24, 38: l2, 39: u2, 40: 27, 41: d2, 42: f2, 43: p2, 44: m2, 45: h2, 46: g2, 47: _2, 48: v2, 49: y2, 50: b2 }, e2(T2, [2, 33]), e2(T2, [2, 19]), { 25: 73, 27: O2 }, { 26: [2, 28] }, { 26: [2, 20] }], defaultActions: { 8: [2, 1], 10: [2, 3], 21: [2, 2], 72: [2, 28], 73: [2, 20] }, parseError: o(function(e3, t3) {
    if (t3.recoverable) this.trace(e3);
    else {
      var n3 = Error(e3);
      throw n3.hash = t3, n3;
    }
  }, `parseError`), parse: o(function(e3) {
    var t3 = this, n3 = [0], r3 = [], i3 = [null], a3 = [], s3 = this.table, c3 = ``, l3 = 0, u3 = 0, d3 = 0, f3 = 2, p3 = 1, m3 = a3.slice.call(arguments, 1), h3 = Object.create(this.lexer), g3 = { yy: {} };
    for (var _3 in this.yy) Object.prototype.hasOwnProperty.call(this.yy, _3) && (g3.yy[_3] = this.yy[_3]);
    h3.setInput(e3, g3.yy), g3.yy.lexer = h3, g3.yy.parser = this, h3.yylloc === void 0 && (h3.yylloc = {});
    var v3 = h3.yylloc;
    a3.push(v3);
    var y3 = h3.options && h3.options.ranges;
    typeof g3.yy.parseError == `function` ? this.parseError = g3.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
    function b3(e4) {
      n3.length -= 2 * e4, i3.length -= e4, a3.length -= e4;
    }
    o(b3, `popStack`);
    function x3() {
      var e4 = r3.pop() || h3.lex() || p3;
      return typeof e4 != `number` && (e4 instanceof Array && (r3 = e4, e4 = r3.pop()), e4 = t3.symbols_[e4] || e4), e4;
    }
    o(x3, `lex`);
    for (var S3, C3, w3, T3, E3, D3 = {}, O3, k3, A3, j2; ; ) {
      if (w3 = n3[n3.length - 1], this.defaultActions[w3] ? T3 = this.defaultActions[w3] : (S3 ?? (S3 = x3()), T3 = s3[w3] && s3[w3][S3]), T3 === void 0 || !T3.length || !T3[0]) {
        var M2 = ``;
        for (O3 in j2 = [], s3[w3]) this.terminals_[O3] && O3 > f3 && j2.push(`'` + this.terminals_[O3] + `'`);
        M2 = h3.showPosition ? `Parse error on line ` + (l3 + 1) + `:
` + h3.showPosition() + `
Expecting ` + j2.join(`, `) + `, got '` + (this.terminals_[S3] || S3) + `'` : `Parse error on line ` + (l3 + 1) + `: Unexpected ` + (S3 == p3 ? `end of input` : `'` + (this.terminals_[S3] || S3) + `'`), this.parseError(M2, { text: h3.match, token: this.terminals_[S3] || S3, line: h3.yylineno, loc: v3, expected: j2 });
      }
      if (T3[0] instanceof Array && T3.length > 1) throw Error(`Parse Error: multiple actions possible at state: ` + w3 + `, token: ` + S3);
      switch (T3[0]) {
        case 1:
          n3.push(S3), i3.push(h3.yytext), a3.push(h3.yylloc), n3.push(T3[1]), S3 = null, C3 ? (S3 = C3, C3 = null) : (u3 = h3.yyleng, c3 = h3.yytext, l3 = h3.yylineno, v3 = h3.yylloc, d3 > 0 && d3--);
          break;
        case 2:
          if (k3 = this.productions_[T3[1]][1], D3.$ = i3[i3.length - k3], D3._$ = { first_line: a3[a3.length - (k3 || 1)].first_line, last_line: a3[a3.length - 1].last_line, first_column: a3[a3.length - (k3 || 1)].first_column, last_column: a3[a3.length - 1].last_column }, y3 && (D3._$.range = [a3[a3.length - (k3 || 1)].range[0], a3[a3.length - 1].range[1]]), E3 = this.performAction.apply(D3, [c3, u3, l3, g3.yy, T3[1], i3, a3].concat(m3)), E3 !== void 0) return E3;
          k3 && (n3 = n3.slice(0, -1 * k3 * 2), i3 = i3.slice(0, -1 * k3), a3 = a3.slice(0, -1 * k3)), n3.push(this.productions_[T3[1]][0]), i3.push(D3.$), a3.push(D3._$), A3 = s3[n3[n3.length - 2]][n3[n3.length - 1]], n3.push(A3);
          break;
        case 3:
          return true;
      }
    }
    return true;
  }, `parse`) };
  k2.lexer = (function() {
    return { EOF: 1, parseError: o(function(e3, t3) {
      if (this.yy.parser) this.yy.parser.parseError(e3, t3);
      else throw Error(e3);
    }, `parseError`), setInput: o(function(e3, t3) {
      return this.yy = t3 || this.yy || {}, this._input = e3, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = ``, this.conditionStack = [`INITIAL`], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
    }, `setInput`), input: o(function() {
      var e3 = this._input[0];
      return this.yytext += e3, this.yyleng++, this.offset++, this.match += e3, this.matched += e3, e3.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e3;
    }, `input`), unput: o(function(e3) {
      var t3 = e3.length, n3 = e3.split(/(?:\r\n?|\n)/g);
      this._input = e3 + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t3), this.offset -= t3;
      var r3 = this.match.split(/(?:\r\n?|\n)/g);
      this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n3.length - 1 && (this.yylineno -= n3.length - 1);
      var i3 = this.yylloc.range;
      return this.yylloc = { first_line: this.yylloc.first_line, last_line: this.yylineno + 1, first_column: this.yylloc.first_column, last_column: n3 ? (n3.length === r3.length ? this.yylloc.first_column : 0) + r3[r3.length - n3.length].length - n3[0].length : this.yylloc.first_column - t3 }, this.options.ranges && (this.yylloc.range = [i3[0], i3[0] + this.yyleng - t3]), this.yyleng = this.yytext.length, this;
    }, `unput`), more: o(function() {
      return this._more = true, this;
    }, `more`), reject: o(function() {
      if (this.options.backtrack_lexer) this._backtrack = true;
      else return this.parseError(`Lexical error on line ` + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), { text: ``, token: null, line: this.yylineno });
      return this;
    }, `reject`), less: o(function(e3) {
      this.unput(this.match.slice(e3));
    }, `less`), pastInput: o(function() {
      var e3 = this.matched.substr(0, this.matched.length - this.match.length);
      return (e3.length > 20 ? `...` : ``) + e3.substr(-20).replace(/\n/g, ``);
    }, `pastInput`), upcomingInput: o(function() {
      var e3 = this.match;
      return e3.length < 20 && (e3 += this._input.substr(0, 20 - e3.length)), (e3.substr(0, 20) + (e3.length > 20 ? `...` : ``)).replace(/\n/g, ``);
    }, `upcomingInput`), showPosition: o(function() {
      var e3 = this.pastInput(), t3 = Array(e3.length + 1).join(`-`);
      return e3 + this.upcomingInput() + `
` + t3 + `^`;
    }, `showPosition`), test_match: o(function(e3, t3) {
      var n3, r3, i3;
      if (this.options.backtrack_lexer && (i3 = { yylineno: this.yylineno, yylloc: { first_line: this.yylloc.first_line, last_line: this.last_line, first_column: this.yylloc.first_column, last_column: this.yylloc.last_column }, yytext: this.yytext, match: this.match, matches: this.matches, matched: this.matched, yyleng: this.yyleng, offset: this.offset, _more: this._more, _input: this._input, yy: this.yy, conditionStack: this.conditionStack.slice(0), done: this.done }, this.options.ranges && (i3.yylloc.range = this.yylloc.range.slice(0))), r3 = e3[0].match(/(?:\r\n?|\n).*/g), r3 && (this.yylineno += r3.length), this.yylloc = { first_line: this.yylloc.last_line, last_line: this.yylineno + 1, first_column: this.yylloc.last_column, last_column: r3 ? r3[r3.length - 1].length - r3[r3.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e3[0].length }, this.yytext += e3[0], this.match += e3[0], this.matches = e3, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(e3[0].length), this.matched += e3[0], n3 = this.performAction.call(this, this.yy, this, t3, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), n3) return n3;
      if (this._backtrack) {
        for (var a3 in i3) this[a3] = i3[a3];
        return false;
      }
      return false;
    }, `test_match`), next: o(function() {
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
    }, `next`), lex: o(function() {
      return this.next() || this.lex();
    }, `lex`), begin: o(function(e3) {
      this.conditionStack.push(e3);
    }, `begin`), popState: o(function() {
      return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
    }, `popState`), _currentRules: o(function() {
      return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
    }, `_currentRules`), topState: o(function(e3) {
      return e3 = this.conditionStack.length - 1 - Math.abs(e3 || 0), e3 >= 0 ? this.conditionStack[e3] : `INITIAL`;
    }, `topState`), pushState: o(function(e3) {
      this.begin(e3);
    }, `pushState`), stateStackSize: o(function() {
      return this.conditionStack.length;
    }, `stateStackSize`), options: { "case-insensitive": true }, performAction: o(function(e3, t3, n3, r3) {
      switch (n3) {
        case 0:
          break;
        case 1:
          break;
        case 2:
          return this.popState(), 34;
        case 3:
          return this.popState(), 34;
        case 4:
          return 34;
        case 5:
          break;
        case 6:
          return 10;
        case 7:
          return this.pushState(`acc_title`), 19;
        case 8:
          return this.popState(), `acc_title_value`;
        case 9:
          return this.pushState(`acc_descr`), 21;
        case 10:
          return this.popState(), `acc_descr_value`;
        case 11:
          this.pushState(`acc_descr_multiline`);
          break;
        case 12:
          this.popState();
          break;
        case 13:
          return `acc_descr_multiline_value`;
        case 14:
          return 5;
        case 15:
          return 5;
        case 16:
          return 8;
        case 17:
          return this.pushState(`axis_data`), `X_AXIS`;
        case 18:
          return this.pushState(`axis_data`), `Y_AXIS`;
        case 19:
          return this.pushState(`axis_band_data`), 24;
        case 20:
          return 31;
        case 21:
          return this.pushState(`data`), 16;
        case 22:
          return this.pushState(`data`), 18;
        case 23:
          return this.pushState(`data_inner`), 24;
        case 24:
          return 27;
        case 25:
          return this.popState(), 26;
        case 26:
          this.popState();
          break;
        case 27:
          this.pushState(`string`);
          break;
        case 28:
          this.popState();
          break;
        case 29:
          return `STR`;
        case 30:
          return 24;
        case 31:
          return 26;
        case 32:
          return 43;
        case 33:
          return `COLON`;
        case 34:
          return 44;
        case 35:
          return 28;
        case 36:
          return 45;
        case 37:
          return 46;
        case 38:
          return 48;
        case 39:
          return 50;
        case 40:
          return 47;
        case 41:
          return 41;
        case 42:
          return 49;
        case 43:
          return 42;
        case 44:
          break;
        case 45:
          return 35;
        case 46:
          return 36;
      }
    }, `anonymous`), rules: [/^(?:%%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:(\r?\n))/i, /^(?:(\r?\n))/i, /^(?:[\n\r]+)/i, /^(?:%%[^\n]*)/i, /^(?:title\b)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:\})/i, /^(?:[^\}]*)/i, /^(?:xychart-beta\b)/i, /^(?:xychart\b)/i, /^(?:(?:vertical|horizontal))/i, /^(?:x-axis\b)/i, /^(?:y-axis\b)/i, /^(?:\[)/i, /^(?:-->)/i, /^(?:line\b)/i, /^(?:bar\b)/i, /^(?:\[)/i, /^(?:[+-]?(?:\d+(?:\.\d+)?|\.\d+))/i, /^(?:\])/i, /^(?:(?:`\)                                    \{ this\.pushState\(md_string\); \}\n<md_string>\(\?:\(\?!`"\)\.\)\+                  \{ return MD_STR; \}\n<md_string>\(\?:`))/i, /^(?:["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:\[)/i, /^(?:\])/i, /^(?:[A-Za-z]+)/i, /^(?::)/i, /^(?:\+)/i, /^(?:,)/i, /^(?:=)/i, /^(?:\*)/i, /^(?:#)/i, /^(?:[\_])/i, /^(?:\.)/i, /^(?:&)/i, /^(?:-)/i, /^(?:[0-9]+)/i, /^(?:\s+)/i, /^(?:;)/i, /^(?:$)/i], conditions: { data_inner: { rules: [0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 21, 22, 24, 25, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], inclusive: true }, data: { rules: [0, 1, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 21, 22, 23, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], inclusive: true }, axis_band_data: { rules: [0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 21, 22, 25, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], inclusive: true }, axis_data: { rules: [0, 1, 2, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], inclusive: true }, acc_descr_multiline: { rules: [12, 13], inclusive: false }, acc_descr: { rules: [10], inclusive: false }, acc_title: { rules: [8], inclusive: false }, title: { rules: [], inclusive: false }, md_string: { rules: [], inclusive: false }, string: { rules: [28, 29], inclusive: false }, INITIAL: { rules: [0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 21, 22, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], inclusive: true } } };
  })();
  function A2() {
    this.yy = {};
  }
  return o(A2, `Parser`), A2.prototype = k2, k2.Parser = A2, new A2();
})();
C.parser = C;
var w = C;
function T(e2) {
  return e2.type === `bar`;
}
o(T, `isBarPlot`);
function E(e2) {
  return e2.type === `band`;
}
o(E, `isBandAxisData`);
function D(e2) {
  return e2.type === `linear`;
}
o(D, `isLinearAxisData`);
var O = (_a = class {
  constructor(e2) {
    this.parentGroup = e2;
  }
  getMaxDimension(e2, t2) {
    if (!this.parentGroup) return { width: e2.reduce((e3, t3) => Math.max(t3.length, e3), 0) * t2, height: t2 };
    let n2 = { width: 0, height: 0 }, r2 = this.parentGroup.append(`g`).attr(`visibility`, `hidden`).attr(`font-size`, t2);
    for (let i2 of e2) {
      let e3 = v(r2, 1, i2), a2 = e3 ? e3.width : i2.length * t2, o2 = e3 ? e3.height : t2;
      n2.width = Math.max(n2.width, a2), n2.height = Math.max(n2.height, o2);
    }
    return r2.remove(), n2;
  }
}, o(_a, `TextDimensionCalculatorWithFont`), _a), k = 0.7, A = 0.2, j = (_b = class {
  constructor(e2, t2, n2, r2) {
    this.axisConfig = e2, this.title = t2, this.textDimensionCalculator = n2, this.axisThemeConfig = r2, this.boundingRect = { x: 0, y: 0, width: 0, height: 0 }, this.axisPosition = `left`, this.showTitle = false, this.showLabel = false, this.showTick = false, this.showAxisLine = false, this.outerPadding = 0, this.titleTextHeight = 0, this.labelTextHeight = 0, this.range = [0, 10], this.boundingRect = { x: 0, y: 0, width: 0, height: 0 }, this.axisPosition = `left`;
  }
  setRange(e2) {
    this.range = e2, this.axisPosition === `left` || this.axisPosition === `right` ? this.boundingRect.height = e2[1] - e2[0] : this.boundingRect.width = e2[1] - e2[0], this.recalculateScale();
  }
  getRange() {
    return [this.range[0] + this.outerPadding, this.range[1] - this.outerPadding];
  }
  setAxisPosition(e2) {
    this.axisPosition = e2, this.setRange(this.range);
  }
  getTickDistance() {
    let e2 = this.getRange();
    return Math.abs(e2[0] - e2[1]) / this.getTickValues().length;
  }
  getAxisOuterPadding() {
    return this.outerPadding;
  }
  getLabelDimension() {
    return this.textDimensionCalculator.getMaxDimension(this.getTickValues().map((e2) => e2.toString()), this.axisConfig.labelFontSize);
  }
  recalculateOuterPaddingToDrawBar() {
    k * this.getTickDistance() > this.outerPadding * 2 && (this.outerPadding = Math.floor(k * this.getTickDistance() / 2)), this.recalculateScale();
  }
  calculateSpaceIfDrawnHorizontally(e2) {
    let t2 = e2.height;
    if (this.axisConfig.showAxisLine && t2 > this.axisConfig.axisLineWidth && (t2 -= this.axisConfig.axisLineWidth, this.showAxisLine = true), this.axisConfig.showLabel) {
      let n2 = this.getLabelDimension(), r2 = A * e2.width;
      this.outerPadding = Math.min(n2.width / 2, r2);
      let i2 = n2.height + this.axisConfig.labelPadding * 2;
      this.labelTextHeight = n2.height, i2 <= t2 && (t2 -= i2, this.showLabel = true);
    }
    if (this.axisConfig.showTick && t2 >= this.axisConfig.tickLength && (this.showTick = true, t2 -= this.axisConfig.tickLength), this.axisConfig.showTitle && this.title) {
      let e3 = this.textDimensionCalculator.getMaxDimension([this.title], this.axisConfig.titleFontSize), n2 = e3.height + this.axisConfig.titlePadding * 2;
      this.titleTextHeight = e3.height, n2 <= t2 && (t2 -= n2, this.showTitle = true);
    }
    this.boundingRect.width = e2.width, this.boundingRect.height = e2.height - t2;
  }
  calculateSpaceIfDrawnVertical(e2) {
    let t2 = e2.width;
    if (this.axisConfig.showAxisLine && t2 > this.axisConfig.axisLineWidth && (t2 -= this.axisConfig.axisLineWidth, this.showAxisLine = true), this.axisConfig.showLabel) {
      let n2 = this.getLabelDimension(), r2 = A * e2.height;
      this.outerPadding = Math.min(n2.height / 2, r2);
      let i2 = n2.width + this.axisConfig.labelPadding * 2;
      i2 <= t2 && (t2 -= i2, this.showLabel = true);
    }
    if (this.axisConfig.showTick && t2 >= this.axisConfig.tickLength && (this.showTick = true, t2 -= this.axisConfig.tickLength), this.axisConfig.showTitle && this.title) {
      let e3 = this.textDimensionCalculator.getMaxDimension([this.title], this.axisConfig.titleFontSize), n2 = e3.height + this.axisConfig.titlePadding * 2;
      this.titleTextHeight = e3.height, n2 <= t2 && (t2 -= n2, this.showTitle = true);
    }
    this.boundingRect.width = e2.width - t2, this.boundingRect.height = e2.height;
  }
  calculateSpace(e2) {
    return this.axisPosition === `left` || this.axisPosition === `right` ? this.calculateSpaceIfDrawnVertical(e2) : this.calculateSpaceIfDrawnHorizontally(e2), this.recalculateScale(), { width: this.boundingRect.width, height: this.boundingRect.height };
  }
  setBoundingBoxXY(e2) {
    this.boundingRect.x = e2.x, this.boundingRect.y = e2.y;
  }
  getDrawableElementsForLeftAxis() {
    let e2 = [];
    if (this.showAxisLine) {
      let t2 = this.boundingRect.x + this.boundingRect.width - this.axisConfig.axisLineWidth / 2;
      e2.push({ type: `path`, groupTexts: [`left-axis`, `axisl-line`], data: [{ path: `M ${t2},${this.boundingRect.y} L ${t2},${this.boundingRect.y + this.boundingRect.height} `, strokeFill: this.axisThemeConfig.axisLineColor, strokeWidth: this.axisConfig.axisLineWidth }] });
    }
    if (this.showLabel && e2.push({ type: `text`, groupTexts: [`left-axis`, `label`], data: this.getTickValues().map((e3) => ({ text: e3.toString(), x: this.boundingRect.x + this.boundingRect.width - (this.showLabel ? this.axisConfig.labelPadding : 0) - (this.showTick ? this.axisConfig.tickLength : 0) - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0), y: this.getScaleValue(e3), fill: this.axisThemeConfig.labelColor, fontSize: this.axisConfig.labelFontSize, rotation: 0, verticalPos: `middle`, horizontalPos: `right` })) }), this.showTick) {
      let t2 = this.boundingRect.x + this.boundingRect.width - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0);
      e2.push({ type: `path`, groupTexts: [`left-axis`, `ticks`], data: this.getTickValues().map((e3) => ({ path: `M ${t2},${this.getScaleValue(e3)} L ${t2 - this.axisConfig.tickLength},${this.getScaleValue(e3)}`, strokeFill: this.axisThemeConfig.tickColor, strokeWidth: this.axisConfig.tickWidth })) });
    }
    return this.showTitle && e2.push({ type: `text`, groupTexts: [`left-axis`, `title`], data: [{ text: this.title, x: this.boundingRect.x + this.axisConfig.titlePadding, y: this.boundingRect.y + this.boundingRect.height / 2, fill: this.axisThemeConfig.titleColor, fontSize: this.axisConfig.titleFontSize, rotation: 270, verticalPos: `top`, horizontalPos: `center` }] }), e2;
  }
  getDrawableElementsForBottomAxis() {
    let e2 = [];
    if (this.showAxisLine) {
      let t2 = this.boundingRect.y + this.axisConfig.axisLineWidth / 2;
      e2.push({ type: `path`, groupTexts: [`bottom-axis`, `axis-line`], data: [{ path: `M ${this.boundingRect.x},${t2} L ${this.boundingRect.x + this.boundingRect.width},${t2}`, strokeFill: this.axisThemeConfig.axisLineColor, strokeWidth: this.axisConfig.axisLineWidth }] });
    }
    if (this.showLabel && e2.push({ type: `text`, groupTexts: [`bottom-axis`, `label`], data: this.getTickValues().map((e3) => ({ text: e3.toString(), x: this.getScaleValue(e3), y: this.boundingRect.y + this.axisConfig.labelPadding + (this.showTick ? this.axisConfig.tickLength : 0) + (this.showAxisLine ? this.axisConfig.axisLineWidth : 0), fill: this.axisThemeConfig.labelColor, fontSize: this.axisConfig.labelFontSize, rotation: 0, verticalPos: `top`, horizontalPos: `center` })) }), this.showTick) {
      let t2 = this.boundingRect.y + (this.showAxisLine ? this.axisConfig.axisLineWidth : 0);
      e2.push({ type: `path`, groupTexts: [`bottom-axis`, `ticks`], data: this.getTickValues().map((e3) => ({ path: `M ${this.getScaleValue(e3)},${t2} L ${this.getScaleValue(e3)},${t2 + this.axisConfig.tickLength}`, strokeFill: this.axisThemeConfig.tickColor, strokeWidth: this.axisConfig.tickWidth })) });
    }
    return this.showTitle && e2.push({ type: `text`, groupTexts: [`bottom-axis`, `title`], data: [{ text: this.title, x: this.range[0] + (this.range[1] - this.range[0]) / 2, y: this.boundingRect.y + this.boundingRect.height - this.axisConfig.titlePadding - this.titleTextHeight, fill: this.axisThemeConfig.titleColor, fontSize: this.axisConfig.titleFontSize, rotation: 0, verticalPos: `top`, horizontalPos: `center` }] }), e2;
  }
  getDrawableElementsForTopAxis() {
    let e2 = [];
    if (this.showAxisLine) {
      let t2 = this.boundingRect.y + this.boundingRect.height - this.axisConfig.axisLineWidth / 2;
      e2.push({ type: `path`, groupTexts: [`top-axis`, `axis-line`], data: [{ path: `M ${this.boundingRect.x},${t2} L ${this.boundingRect.x + this.boundingRect.width},${t2}`, strokeFill: this.axisThemeConfig.axisLineColor, strokeWidth: this.axisConfig.axisLineWidth }] });
    }
    if (this.showLabel && e2.push({ type: `text`, groupTexts: [`top-axis`, `label`], data: this.getTickValues().map((e3) => ({ text: e3.toString(), x: this.getScaleValue(e3), y: this.boundingRect.y + (this.showTitle ? this.titleTextHeight + this.axisConfig.titlePadding * 2 : 0) + this.axisConfig.labelPadding, fill: this.axisThemeConfig.labelColor, fontSize: this.axisConfig.labelFontSize, rotation: 0, verticalPos: `top`, horizontalPos: `center` })) }), this.showTick) {
      let t2 = this.boundingRect.y;
      e2.push({ type: `path`, groupTexts: [`top-axis`, `ticks`], data: this.getTickValues().map((e3) => ({ path: `M ${this.getScaleValue(e3)},${t2 + this.boundingRect.height - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0)} L ${this.getScaleValue(e3)},${t2 + this.boundingRect.height - this.axisConfig.tickLength - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0)}`, strokeFill: this.axisThemeConfig.tickColor, strokeWidth: this.axisConfig.tickWidth })) });
    }
    return this.showTitle && e2.push({ type: `text`, groupTexts: [`top-axis`, `title`], data: [{ text: this.title, x: this.boundingRect.x + this.boundingRect.width / 2, y: this.boundingRect.y + this.axisConfig.titlePadding, fill: this.axisThemeConfig.titleColor, fontSize: this.axisConfig.titleFontSize, rotation: 0, verticalPos: `top`, horizontalPos: `center` }] }), e2;
  }
  getDrawableElements() {
    if (this.axisPosition === `left`) return this.getDrawableElementsForLeftAxis();
    if (this.axisPosition === `right`) throw Error(`Drawing of right axis is not implemented`);
    return this.axisPosition === `bottom` ? this.getDrawableElementsForBottomAxis() : this.axisPosition === `top` ? this.getDrawableElementsForTopAxis() : [];
  }
}, o(_b, `BaseAxis`), _b), M = (_c = class extends j {
  constructor(e2, t2, n2, r2, i2) {
    super(e2, r2, i2, t2), this.categories = n2, this.scale = S().domain(this.categories).range(this.getRange());
  }
  setRange(e2) {
    super.setRange(e2);
  }
  recalculateScale() {
    this.scale = S().domain(this.categories).range(this.getRange()).paddingInner(1).paddingOuter(0).align(0.5), p.trace(`BandAxis axis final categories, range: `, this.categories, this.getRange());
  }
  getTickValues() {
    return this.categories;
  }
  getScaleValue(e2) {
    return this.scale(e2) ?? this.getRange()[0];
  }
}, o(_c, `BandAxis`), _c), ee = (_d = class extends j {
  constructor(t2, n2, r2, i2, a2) {
    super(t2, i2, a2, n2), this.domain = r2, this.scale = e().domain(this.domain).range(this.getRange());
  }
  getTickValues() {
    return this.scale.ticks();
  }
  recalculateScale() {
    let t2 = [...this.domain];
    this.axisPosition === `left` && t2.reverse(), this.scale = e().domain(t2).range(this.getRange());
  }
  getScaleValue(e2) {
    return this.scale(e2);
  }
}, o(_d, `LinearAxis`), _d);
function N(e2, t2, n2, r2) {
  let i2 = new O(r2);
  return E(e2) ? new M(t2, n2, e2.categories, e2.title, i2) : new ee(t2, n2, [e2.min, e2.max], e2.title, i2);
}
o(N, `getAxis`);
var te = (_e2 = class {
  constructor(e2, t2, n2, r2) {
    this.textDimensionCalculator = e2, this.chartConfig = t2, this.chartData = n2, this.chartThemeConfig = r2, this.boundingRect = { x: 0, y: 0, width: 0, height: 0 }, this.showChartTitle = false;
  }
  setBoundingBoxXY(e2) {
    this.boundingRect.x = e2.x, this.boundingRect.y = e2.y;
  }
  calculateSpace(e2) {
    let t2 = this.textDimensionCalculator.getMaxDimension([this.chartData.title], this.chartConfig.titleFontSize), n2 = Math.max(t2.width, e2.width), r2 = t2.height + 2 * this.chartConfig.titlePadding;
    return t2.width <= n2 && t2.height <= r2 && this.chartConfig.showTitle && this.chartData.title && (this.boundingRect.width = n2, this.boundingRect.height = r2, this.showChartTitle = true), { width: this.boundingRect.width, height: this.boundingRect.height };
  }
  getDrawableElements() {
    let e2 = [];
    return this.showChartTitle && e2.push({ groupTexts: [`chart-title`], type: `text`, data: [{ fontSize: this.chartConfig.titleFontSize, text: this.chartData.title, verticalPos: `middle`, horizontalPos: `center`, x: this.boundingRect.x + this.boundingRect.width / 2, y: this.boundingRect.y + this.boundingRect.height / 2, fill: this.chartThemeConfig.titleColor, rotation: 0 }] }), e2;
  }
}, o(_e2, `ChartTitle`), _e2);
function ne(e2, t2, n2, r2) {
  return new te(new O(r2), e2, t2, n2);
}
o(ne, `getChartTitleComponent`);
var re = (_f = class {
  constructor(e2, t2, n2, r2, i2) {
    this.plotData = e2, this.xAxis = t2, this.yAxis = n2, this.orientation = r2, this.plotIndex = i2;
  }
  getDrawableElement() {
    let e2 = this.plotData.data.map((e3) => [this.xAxis.getScaleValue(e3[0]), this.yAxis.getScaleValue(e3[1])]), t2;
    return t2 = this.orientation === `horizontal` ? i().y((e3) => e3[0]).x((e3) => e3[1])(e2) : i().x((e3) => e3[0]).y((e3) => e3[1])(e2), t2 ? [{ groupTexts: [`plot`, `line-plot-${this.plotIndex}`], type: `path`, data: [{ path: t2, strokeFill: this.plotData.strokeFill, strokeWidth: this.plotData.strokeWidth }] }] : [];
  }
}, o(_f, `LinePlot`), _f), ie = (_g = class {
  constructor(e2, t2, n2, r2, i2, a2) {
    this.barData = e2, this.boundingRect = t2, this.xAxis = n2, this.yAxis = r2, this.orientation = i2, this.plotIndex = a2;
  }
  getDrawableElement() {
    let e2 = this.barData.data.map((e3) => [this.xAxis.getScaleValue(e3[0]), this.yAxis.getScaleValue(e3[1])]), t2 = Math.min(this.xAxis.getAxisOuterPadding() * 2, this.xAxis.getTickDistance()) * 0.95, n2 = t2 / 2;
    return this.orientation === `horizontal` ? [{ groupTexts: [`plot`, `bar-plot-${this.plotIndex}`], type: `rect`, data: e2.map((e3) => ({ x: this.boundingRect.x, y: e3[0] - n2, height: t2, width: e3[1] - this.boundingRect.x, fill: this.barData.fill, strokeWidth: 0, strokeFill: this.barData.fill })) }] : [{ groupTexts: [`plot`, `bar-plot-${this.plotIndex}`], type: `rect`, data: e2.map((e3) => ({ x: e3[0] - n2, y: e3[1], width: t2, height: this.boundingRect.y + this.boundingRect.height - e3[1], fill: this.barData.fill, strokeWidth: 0, strokeFill: this.barData.fill })) }];
  }
}, o(_g, `BarPlot`), _g), ae = (_h = class {
  constructor(e2, t2, n2) {
    this.chartConfig = e2, this.chartData = t2, this.chartThemeConfig = n2, this.boundingRect = { x: 0, y: 0, width: 0, height: 0 };
  }
  setAxes(e2, t2) {
    this.xAxis = e2, this.yAxis = t2;
  }
  setBoundingBoxXY(e2) {
    this.boundingRect.x = e2.x, this.boundingRect.y = e2.y;
  }
  calculateSpace(e2) {
    return this.boundingRect.width = e2.width, this.boundingRect.height = e2.height, { width: this.boundingRect.width, height: this.boundingRect.height };
  }
  getDrawableElements() {
    if (!(this.xAxis && this.yAxis)) throw Error(`Axes must be passed to render Plots`);
    let e2 = [];
    for (let [t2, n2] of this.chartData.plots.entries()) switch (n2.type) {
      case `line`:
        {
          let r2 = new re(n2, this.xAxis, this.yAxis, this.chartConfig.chartOrientation, t2);
          e2.push(...r2.getDrawableElement());
        }
        break;
      case `bar`:
        {
          let r2 = new ie(n2, this.boundingRect, this.xAxis, this.yAxis, this.chartConfig.chartOrientation, t2);
          e2.push(...r2.getDrawableElement());
        }
        break;
    }
    return e2;
  }
}, o(_h, `BasePlot`), _h);
function P(e2, t2, n2) {
  return new ae(e2, t2, n2);
}
o(P, `getPlotComponent`);
var oe = (_i = class {
  constructor(e2, t2, n2, r2) {
    this.chartConfig = e2, this.chartData = t2, this.componentStore = { title: ne(e2, t2, n2, r2), plot: P(e2, t2, n2), xAxis: N(t2.xAxis, e2.xAxis, { titleColor: n2.xAxisTitleColor, labelColor: n2.xAxisLabelColor, tickColor: n2.xAxisTickColor, axisLineColor: n2.xAxisLineColor }, r2), yAxis: N(t2.yAxis, e2.yAxis, { titleColor: n2.yAxisTitleColor, labelColor: n2.yAxisLabelColor, tickColor: n2.yAxisTickColor, axisLineColor: n2.yAxisLineColor }, r2) };
  }
  calculateVerticalSpace() {
    let e2 = this.chartConfig.width, t2 = this.chartConfig.height, n2 = 0, r2 = 0, i2 = Math.floor(e2 * this.chartConfig.plotReservedSpacePercent / 100), a2 = Math.floor(t2 * this.chartConfig.plotReservedSpacePercent / 100), o2 = this.componentStore.plot.calculateSpace({ width: i2, height: a2 });
    e2 -= o2.width, t2 -= o2.height, o2 = this.componentStore.title.calculateSpace({ width: this.chartConfig.width, height: t2 }), r2 = o2.height, t2 -= o2.height, this.componentStore.xAxis.setAxisPosition(`bottom`), o2 = this.componentStore.xAxis.calculateSpace({ width: e2, height: t2 }), t2 -= o2.height, this.componentStore.yAxis.setAxisPosition(`left`), o2 = this.componentStore.yAxis.calculateSpace({ width: e2, height: t2 }), n2 = o2.width, e2 -= o2.width, e2 > 0 && (i2 += e2, e2 = 0), t2 > 0 && (a2 += t2, t2 = 0), this.componentStore.plot.calculateSpace({ width: i2, height: a2 }), this.componentStore.plot.setBoundingBoxXY({ x: n2, y: r2 }), this.componentStore.xAxis.setRange([n2, n2 + i2]), this.componentStore.xAxis.setBoundingBoxXY({ x: n2, y: r2 + a2 }), this.componentStore.yAxis.setRange([r2, r2 + a2]), this.componentStore.yAxis.setBoundingBoxXY({ x: 0, y: r2 }), this.chartData.plots.some((e3) => T(e3)) && this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
  }
  calculateHorizontalSpace() {
    let e2 = this.chartConfig.width, t2 = this.chartConfig.height, n2 = 0, r2 = 0, i2 = 0, a2 = Math.floor(e2 * this.chartConfig.plotReservedSpacePercent / 100), o2 = Math.floor(t2 * this.chartConfig.plotReservedSpacePercent / 100), s2 = this.componentStore.plot.calculateSpace({ width: a2, height: o2 });
    e2 -= s2.width, t2 -= s2.height, s2 = this.componentStore.title.calculateSpace({ width: this.chartConfig.width, height: t2 }), n2 = s2.height, t2 -= s2.height, this.componentStore.xAxis.setAxisPosition(`left`), s2 = this.componentStore.xAxis.calculateSpace({ width: e2, height: t2 }), e2 -= s2.width, r2 = s2.width, this.componentStore.yAxis.setAxisPosition(`top`), s2 = this.componentStore.yAxis.calculateSpace({ width: e2, height: t2 }), t2 -= s2.height, i2 = n2 + s2.height, e2 > 0 && (a2 += e2, e2 = 0), t2 > 0 && (o2 += t2, t2 = 0), this.componentStore.plot.calculateSpace({ width: a2, height: o2 }), this.componentStore.plot.setBoundingBoxXY({ x: r2, y: i2 }), this.componentStore.yAxis.setRange([r2, r2 + a2]), this.componentStore.yAxis.setBoundingBoxXY({ x: r2, y: n2 }), this.componentStore.xAxis.setRange([i2, i2 + o2]), this.componentStore.xAxis.setBoundingBoxXY({ x: 0, y: i2 }), this.chartData.plots.some((e3) => T(e3)) && this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
  }
  calculateSpace() {
    this.chartConfig.chartOrientation === `horizontal` ? this.calculateHorizontalSpace() : this.calculateVerticalSpace();
  }
  getDrawableElement() {
    this.calculateSpace();
    let e2 = [];
    this.componentStore.plot.setAxes(this.componentStore.xAxis, this.componentStore.yAxis);
    for (let t2 of Object.values(this.componentStore)) e2.push(...t2.getDrawableElements());
    return e2;
  }
}, o(_i, `Orchestrator`), _i), se = (_j = class {
  static build(e2, t2, n2, r2) {
    return new oe(e2, t2, n2, r2).getDrawableElement();
  }
}, o(_j, `XYChartBuilder`), _j), F = 0, I, L = W(), R = U(), z = G(), B = R.plotColorPalette.split(`,`).map((e2) => e2.trim()), V = false, H = false;
function U() {
  let e2 = f(), t2 = y();
  return c(e2.xyChart, t2.themeVariables.xyChart);
}
o(U, `getChartDefaultThemeConfig`);
function W() {
  let e2 = y();
  return c(_.xyChart, e2.xyChart);
}
o(W, `getChartDefaultConfig`);
function G() {
  return { yAxis: { type: `linear`, title: ``, min: 1 / 0, max: -1 / 0 }, xAxis: { type: `band`, title: ``, categories: [] }, title: ``, plots: [] };
}
o(G, `getChartDefaultData`);
function K(e2) {
  let t2 = y();
  return s(e2.trim(), t2);
}
o(K, `textSanitizer`);
function q(e2) {
  I = e2;
}
o(q, `setTmpSVGG`);
function J(e2) {
  e2 === `horizontal` ? L.chartOrientation = `horizontal` : L.chartOrientation = `vertical`;
}
o(J, `setOrientation`);
function Y(e2) {
  z.xAxis.title = K(e2.text);
}
o(Y, `setXAxisTitle`);
function X(e2, t2) {
  z.xAxis = { type: `linear`, title: z.xAxis.title, min: e2, max: t2 }, V = true;
}
o(X, `setXAxisRangeData`);
function ce(e2) {
  z.xAxis = { type: `band`, title: z.xAxis.title, categories: e2.map((e3) => K(e3.text)) }, V = true;
}
o(ce, `setXAxisBand`);
function le(e2) {
  z.yAxis.title = K(e2.text);
}
o(le, `setYAxisTitle`);
function ue(e2, t2) {
  z.yAxis = { type: `linear`, title: z.yAxis.title, min: e2, max: t2 }, H = true;
}
o(ue, `setYAxisRangeData`);
function de(e2) {
  let t2 = Math.min(...e2), n2 = Math.max(...e2), r2 = D(z.yAxis) ? z.yAxis.min : 1 / 0, i2 = D(z.yAxis) ? z.yAxis.max : -1 / 0;
  z.yAxis = { type: `linear`, title: z.yAxis.title, min: Math.min(r2, t2), max: Math.max(i2, n2) };
}
o(de, `setYAxisRangeFromPlotData`);
function Z(e2) {
  let t2 = [];
  if (e2.length === 0) return t2;
  if (!V) {
    let t3 = D(z.xAxis) ? z.xAxis.min : 1 / 0, n2 = D(z.xAxis) ? z.xAxis.max : -1 / 0;
    X(Math.min(t3, 1), Math.max(n2, e2.length));
  }
  if (H || de(e2), E(z.xAxis) && (t2 = z.xAxis.categories.map((t3, n2) => [t3, e2[n2]])), D(z.xAxis)) {
    let n2 = z.xAxis.min, r2 = z.xAxis.max, i2 = (r2 - n2) / (e2.length - 1), a2 = [];
    for (let e3 = n2; e3 <= r2; e3 += i2) a2.push(`${e3}`);
    t2 = a2.map((t3, n3) => [t3, e2[n3]]);
  }
  return t2;
}
o(Z, `transformDataWithoutCategory`);
function Q(e2) {
  return B[e2 === 0 ? 0 : e2 % B.length];
}
o(Q, `getPlotColorFromPalette`);
function fe(e2, t2) {
  let n2 = Z(t2);
  z.plots.push({ type: `line`, strokeFill: Q(F), strokeWidth: 2, data: n2 }), F++;
}
o(fe, `setLineData`);
function pe(e2, t2) {
  let n2 = Z(t2);
  z.plots.push({ type: `bar`, fill: Q(F), data: n2 }), F++;
}
o(pe, `setBarData`);
function me() {
  if (z.plots.length === 0) throw Error(`No Plot to render, please provide a plot with some data`);
  return z.title = r(), se.build(L, z, R, I);
}
o(me, `getDrawableElem`);
function he() {
  return R;
}
o(he, `getChartThemeConfig`);
function ge() {
  return L;
}
o(ge, `getChartConfig`);
function $() {
  return z;
}
o($, `getXYChartData`);
var _e = { parser: w, db: { getDrawableElem: me, clear: o(function() {
  g(), F = 0, L = W(), z = G(), R = U(), B = R.plotColorPalette.split(`,`).map((e2) => e2.trim()), V = false, H = false;
}, `clear`), setAccTitle: d, getAccTitle: m, setDiagramTitle: a, getDiagramTitle: r, getAccDescription: b, setAccDescription: l, setOrientation: J, setXAxisTitle: Y, setXAxisRangeData: X, setXAxisBand: ce, setYAxisTitle: le, setYAxisRangeData: ue, setLineData: fe, setBarData: pe, setTmpSVGG: q, getChartThemeConfig: he, getChartConfig: ge, getXYChartData: $ }, renderer: { draw: o((e2, t2, n2, r2) => {
  let i2 = r2.db, a2 = i2.getChartThemeConfig(), s2 = i2.getChartConfig(), c2 = i2.getXYChartData().plots[0].data.map((e3) => e3[1]);
  function l2(e3) {
    return e3 === `top` ? `text-before-edge` : `middle`;
  }
  o(l2, `getDominantBaseLine`);
  function d2(e3) {
    return e3 === `left` ? `start` : e3 === `right` ? `end` : `middle`;
  }
  o(d2, `getTextAnchor`);
  function f2(e3) {
    return `translate(${e3.x}, ${e3.y}) rotate(${e3.rotation || 0})`;
  }
  o(f2, `getTextTransformation`), p.debug(`Rendering xychart chart
` + e2);
  let m2 = u(t2), g2 = m2.append(`g`).attr(`class`, `main`), _2 = g2.append(`rect`).attr(`width`, s2.width).attr(`height`, s2.height).attr(`class`, `background`);
  h(m2, s2.height, s2.width, true), m2.attr(`viewBox`, `0 0 ${s2.width} ${s2.height}`), _2.attr(`fill`, a2.backgroundColor), i2.setTmpSVGG(m2.append(`g`).attr(`class`, `mermaid-tmp-group`));
  let v2 = i2.getDrawableElem(), y2 = {};
  function b2(e3) {
    let t3 = g2, n3 = ``;
    for (let [r3] of e3.entries()) {
      let i3 = g2;
      r3 > 0 && y2[n3] && (i3 = y2[n3]), n3 += e3[r3], t3 = y2[n3], t3 || (t3 = y2[n3] = i3.append(`g`).attr(`class`, e3[r3]));
    }
    return t3;
  }
  o(b2, `getGroup`);
  for (let e3 of v2) {
    if (e3.data.length === 0) continue;
    let t3 = b2(e3.groupTexts);
    switch (e3.type) {
      case `rect`:
        if (t3.selectAll(`rect`).data(e3.data).enter().append(`rect`).attr(`x`, (e4) => e4.x).attr(`y`, (e4) => e4.y).attr(`width`, (e4) => e4.width).attr(`height`, (e4) => e4.height).attr(`fill`, (e4) => e4.fill).attr(`stroke`, (e4) => e4.strokeFill).attr(`stroke-width`, (e4) => e4.strokeWidth), s2.showDataLabel) {
          let n3 = s2.showDataLabelOutsideBar;
          if (s2.chartOrientation === `horizontal`) {
            let r3 = function(e4, t4) {
              let { data: n4, label: r4 } = e4;
              return t4 * r4.length * i3 <= n4.width - s3;
            };
            o(r3, `fitsHorizontally`);
            let i3 = 0.7, s3 = 10, l3 = e3.data.map((e4, t4) => ({ data: e4, label: c2[t4].toString() })).filter((e4) => e4.data.width > 0 && e4.data.height > 0), u2 = l3.map((e4) => {
              let { data: t4 } = e4, n4 = t4.height * 0.7;
              for (; !r3(e4, n4) && n4 > 0; ) --n4;
              return n4;
            }), d3 = Math.floor(Math.min(...u2)), f3 = o((e4) => n3 ? e4.data.x + e4.data.width + 10 : e4.data.x + e4.data.width - 10, `determineLabelXPosition`);
            t3.selectAll(`text`).data(l3).enter().append(`text`).attr(`x`, f3).attr(`y`, (e4) => e4.data.y + e4.data.height / 2).attr(`text-anchor`, n3 ? `start` : `end`).attr(`dominant-baseline`, `middle`).attr(`fill`, a2.dataLabelColor).attr(`font-size`, `${d3}px`).text((e4) => e4.label);
          } else {
            let r3 = function(e4, t4, n4) {
              let { data: r4, label: i4 } = e4, a3 = t4 * i4.length * 0.7, o2 = r4.x + r4.width / 2, s4 = o2 - a3 / 2, c3 = o2 + a3 / 2, l4 = s4 >= r4.x && c3 <= r4.x + r4.width, u3 = r4.y + n4 + t4 <= r4.y + r4.height;
              return l4 && u3;
            };
            o(r3, `fitsInBar`);
            let i3 = e3.data.map((e4, t4) => ({ data: e4, label: c2[t4].toString() })).filter((e4) => e4.data.width > 0 && e4.data.height > 0), s3 = i3.map((e4) => {
              let { data: t4, label: n4 } = e4, i4 = t4.width / (n4.length * 0.7);
              for (; !r3(e4, i4, 10) && i4 > 0; ) --i4;
              return i4;
            }), l3 = Math.floor(Math.min(...s3)), u2 = o((e4) => n3 ? e4.data.y - 10 : e4.data.y + 10, `determineLabelYPosition`);
            t3.selectAll(`text`).data(i3).enter().append(`text`).attr(`x`, (e4) => e4.data.x + e4.data.width / 2).attr(`y`, u2).attr(`text-anchor`, `middle`).attr(`dominant-baseline`, n3 ? `auto` : `hanging`).attr(`fill`, a2.dataLabelColor).attr(`font-size`, `${l3}px`).text((e4) => e4.label);
          }
        }
        break;
      case `text`:
        t3.selectAll(`text`).data(e3.data).enter().append(`text`).attr(`x`, 0).attr(`y`, 0).attr(`fill`, (e4) => e4.fill).attr(`font-size`, (e4) => e4.fontSize).attr(`dominant-baseline`, (e4) => l2(e4.verticalPos)).attr(`text-anchor`, (e4) => d2(e4.horizontalPos)).attr(`transform`, (e4) => f2(e4)).text((e4) => e4.text);
        break;
      case `path`:
        t3.selectAll(`path`).data(e3.data).enter().append(`path`).attr(`d`, (e4) => e4.path).attr(`fill`, (e4) => e4.fill ? e4.fill : `none`).attr(`stroke`, (e4) => e4.strokeFill).attr(`stroke-width`, (e4) => e4.strokeWidth);
        break;
    }
  }
}, `draw`) } };
export {
  _e as diagram
};
