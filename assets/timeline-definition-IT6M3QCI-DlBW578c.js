import { $ as e, G as t, Q as n, Z as r, a as i, b as a, o } from "./chunk-ABZYJK2D-ODb6qSou.js";
import { g as s, h as c, m as l, p as u } from "./src-D8UWkQNo.js";
import "./path-B-GLhb_8.js";
import "./math-O_7OW4FW.js";
import { t as d } from "./arc-Bab8x5BZ.js";
var f = (function() {
  var e2 = c(function(e3, t3, n3, r3) {
    for (n3 || (n3 = {}), r3 = e3.length; r3--; n3[e3[r3]] = t3) ;
    return n3;
  }, `o`), t2 = [6, 8, 10, 11, 12, 14, 16, 17, 20, 21], n2 = [1, 9], r2 = [1, 10], i2 = [1, 11], a2 = [1, 12], o2 = [1, 13], s2 = [1, 16], l2 = [1, 17], u2 = { trace: c(function() {
  }, `trace`), yy: {}, symbols_: { error: 2, start: 3, timeline: 4, document: 5, EOF: 6, line: 7, SPACE: 8, statement: 9, NEWLINE: 10, title: 11, acc_title: 12, acc_title_value: 13, acc_descr: 14, acc_descr_value: 15, acc_descr_multiline_value: 16, section: 17, period_statement: 18, event_statement: 19, period: 20, event: 21, $accept: 0, $end: 1 }, terminals_: { 2: `error`, 4: `timeline`, 6: `EOF`, 8: `SPACE`, 10: `NEWLINE`, 11: `title`, 12: `acc_title`, 13: `acc_title_value`, 14: `acc_descr`, 15: `acc_descr_value`, 16: `acc_descr_multiline_value`, 17: `section`, 20: `period`, 21: `event` }, productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 1], [9, 1], [9, 1], [18, 1], [19, 1]], performAction: c(function(e3, t3, n3, r3, i3, a3, o3) {
    var s3 = a3.length - 1;
    switch (i3) {
      case 1:
        return a3[s3 - 1];
      case 2:
        this.$ = [];
        break;
      case 3:
        a3[s3 - 1].push(a3[s3]), this.$ = a3[s3 - 1];
        break;
      case 4:
      case 5:
        this.$ = a3[s3];
        break;
      case 6:
      case 7:
        this.$ = [];
        break;
      case 8:
        r3.getCommonDb().setDiagramTitle(a3[s3].substr(6)), this.$ = a3[s3].substr(6);
        break;
      case 9:
        this.$ = a3[s3].trim(), r3.getCommonDb().setAccTitle(this.$);
        break;
      case 10:
      case 11:
        this.$ = a3[s3].trim(), r3.getCommonDb().setAccDescription(this.$);
        break;
      case 12:
        r3.addSection(a3[s3].substr(8)), this.$ = a3[s3].substr(8);
        break;
      case 15:
        r3.addTask(a3[s3], 0, ``), this.$ = a3[s3];
        break;
      case 16:
        r3.addEvent(a3[s3].substr(2)), this.$ = a3[s3];
        break;
    }
  }, `anonymous`), table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, e2(t2, [2, 2], { 5: 3 }), { 6: [1, 4], 7: 5, 8: [1, 6], 9: 7, 10: [1, 8], 11: n2, 12: r2, 14: i2, 16: a2, 17: o2, 18: 14, 19: 15, 20: s2, 21: l2 }, e2(t2, [2, 7], { 1: [2, 1] }), e2(t2, [2, 3]), { 9: 18, 11: n2, 12: r2, 14: i2, 16: a2, 17: o2, 18: 14, 19: 15, 20: s2, 21: l2 }, e2(t2, [2, 5]), e2(t2, [2, 6]), e2(t2, [2, 8]), { 13: [1, 19] }, { 15: [1, 20] }, e2(t2, [2, 11]), e2(t2, [2, 12]), e2(t2, [2, 13]), e2(t2, [2, 14]), e2(t2, [2, 15]), e2(t2, [2, 16]), e2(t2, [2, 4]), e2(t2, [2, 9]), e2(t2, [2, 10])], defaultActions: {}, parseError: c(function(e3, t3) {
    if (t3.recoverable) this.trace(e3);
    else {
      var n3 = Error(e3);
      throw n3.hash = t3, n3;
    }
  }, `parseError`), parse: c(function(e3) {
    var t3 = this, n3 = [0], r3 = [], i3 = [null], a3 = [], o3 = this.table, s3 = ``, l3 = 0, u3 = 0, d3 = 0, f2 = 2, p2 = 1, m2 = a3.slice.call(arguments, 1), h2 = Object.create(this.lexer), g2 = { yy: {} };
    for (var _2 in this.yy) Object.prototype.hasOwnProperty.call(this.yy, _2) && (g2.yy[_2] = this.yy[_2]);
    h2.setInput(e3, g2.yy), g2.yy.lexer = h2, g2.yy.parser = this, h2.yylloc === void 0 && (h2.yylloc = {});
    var v2 = h2.yylloc;
    a3.push(v2);
    var y2 = h2.options && h2.options.ranges;
    typeof g2.yy.parseError == `function` ? this.parseError = g2.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
    function b2(e4) {
      n3.length -= 2 * e4, i3.length -= e4, a3.length -= e4;
    }
    c(b2, `popStack`);
    function x2() {
      var e4 = r3.pop() || h2.lex() || p2;
      return typeof e4 != `number` && (e4 instanceof Array && (r3 = e4, e4 = r3.pop()), e4 = t3.symbols_[e4] || e4), e4;
    }
    c(x2, `lex`);
    for (var S2, C2, w2, T2, E2, D2 = {}, O2, k2, A2, j2; ; ) {
      if (w2 = n3[n3.length - 1], this.defaultActions[w2] ? T2 = this.defaultActions[w2] : (S2 ?? (S2 = x2()), T2 = o3[w2] && o3[w2][S2]), T2 === void 0 || !T2.length || !T2[0]) {
        var M2 = ``;
        for (O2 in j2 = [], o3[w2]) this.terminals_[O2] && O2 > f2 && j2.push(`'` + this.terminals_[O2] + `'`);
        M2 = h2.showPosition ? `Parse error on line ` + (l3 + 1) + `:
` + h2.showPosition() + `
Expecting ` + j2.join(`, `) + `, got '` + (this.terminals_[S2] || S2) + `'` : `Parse error on line ` + (l3 + 1) + `: Unexpected ` + (S2 == p2 ? `end of input` : `'` + (this.terminals_[S2] || S2) + `'`), this.parseError(M2, { text: h2.match, token: this.terminals_[S2] || S2, line: h2.yylineno, loc: v2, expected: j2 });
      }
      if (T2[0] instanceof Array && T2.length > 1) throw Error(`Parse Error: multiple actions possible at state: ` + w2 + `, token: ` + S2);
      switch (T2[0]) {
        case 1:
          n3.push(S2), i3.push(h2.yytext), a3.push(h2.yylloc), n3.push(T2[1]), S2 = null, C2 ? (S2 = C2, C2 = null) : (u3 = h2.yyleng, s3 = h2.yytext, l3 = h2.yylineno, v2 = h2.yylloc, d3 > 0 && d3--);
          break;
        case 2:
          if (k2 = this.productions_[T2[1]][1], D2.$ = i3[i3.length - k2], D2._$ = { first_line: a3[a3.length - (k2 || 1)].first_line, last_line: a3[a3.length - 1].last_line, first_column: a3[a3.length - (k2 || 1)].first_column, last_column: a3[a3.length - 1].last_column }, y2 && (D2._$.range = [a3[a3.length - (k2 || 1)].range[0], a3[a3.length - 1].range[1]]), E2 = this.performAction.apply(D2, [s3, u3, l3, g2.yy, T2[1], i3, a3].concat(m2)), E2 !== void 0) return E2;
          k2 && (n3 = n3.slice(0, -1 * k2 * 2), i3 = i3.slice(0, -1 * k2), a3 = a3.slice(0, -1 * k2)), n3.push(this.productions_[T2[1]][0]), i3.push(D2.$), a3.push(D2._$), A2 = o3[n3[n3.length - 2]][n3[n3.length - 1]], n3.push(A2);
          break;
        case 3:
          return true;
      }
    }
    return true;
  }, `parse`) };
  u2.lexer = (function() {
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
          break;
        case 1:
          break;
        case 2:
          return 10;
        case 3:
          break;
        case 4:
          break;
        case 5:
          return 4;
        case 6:
          return 11;
        case 7:
          return this.begin(`acc_title`), 12;
        case 8:
          return this.popState(), `acc_title_value`;
        case 9:
          return this.begin(`acc_descr`), 14;
        case 10:
          return this.popState(), `acc_descr_value`;
        case 11:
          this.begin(`acc_descr_multiline`);
          break;
        case 12:
          this.popState();
          break;
        case 13:
          return `acc_descr_multiline_value`;
        case 14:
          return 17;
        case 15:
          return 21;
        case 16:
          return 20;
        case 17:
          return 6;
        case 18:
          return `INVALID`;
      }
    }, `anonymous`), rules: [/^(?:%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:timeline\b)/i, /^(?:title\s[^\n]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:section\s[^:\n]+)/i, /^(?::\s(?:[^:\n]|:(?!\s))+)/i, /^(?:[^#:\n]+)/i, /^(?:$)/i, /^(?:.)/i], conditions: { acc_descr_multiline: { rules: [12, 13], inclusive: false }, acc_descr: { rules: [10], inclusive: false }, acc_title: { rules: [8], inclusive: false }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18], inclusive: true } } };
  })();
  function d2() {
    this.yy = {};
  }
  return c(d2, `Parser`), d2.prototype = u2, u2.Parser = d2, new d2();
})();
f.parser = f;
var p = f, m = {};
l(m, { addEvent: () => E, addSection: () => S, addTask: () => T, addTaskOrg: () => D, clear: () => x, default: () => k, getCommonDb: () => b, getSections: () => C, getTasks: () => w });
var h = ``, g = 0, _ = [], v = [], y = [], b = c(() => o, `getCommonDb`), x = c(function() {
  _.length = 0, v.length = 0, h = ``, y.length = 0, i();
}, `clear`), S = c(function(e2) {
  h = e2, _.push(e2);
}, `addSection`), C = c(function() {
  return _;
}, `getSections`), w = c(function() {
  let e2 = O(), t2 = 0;
  for (; !e2 && t2 < 100; ) e2 = O(), t2++;
  return v.push(...y), v;
}, `getTasks`), T = c(function(e2, t2, n2) {
  let r2 = { id: g++, section: h, type: h, task: e2, score: t2 || 0, events: n2 ? [n2] : [] };
  y.push(r2);
}, `addTask`), E = c(function(e2) {
  y.find((e3) => e3.id === g - 1).events.push(e2);
}, `addEvent`), D = c(function(e2) {
  let t2 = { section: h, type: h, description: e2, task: e2, classes: [] };
  v.push(t2);
}, `addTaskOrg`), O = c(function() {
  let e2 = c(function(e3) {
    return y[e3].processed;
  }, `compileTask`), t2 = true;
  for (let [n2, r2] of y.entries()) e2(n2), t2 && (t2 = r2.processed);
  return t2;
}, `compileTasks`), k = { clear: x, getCommonDb: b, addSection: S, getSections: C, getTasks: w, addTask: T, addTaskOrg: D, addEvent: E }, A = 12, j = c(function(e2, t2) {
  let n2 = e2.append(`rect`);
  return n2.attr(`x`, t2.x), n2.attr(`y`, t2.y), n2.attr(`fill`, t2.fill), n2.attr(`stroke`, t2.stroke), n2.attr(`width`, t2.width), n2.attr(`height`, t2.height), n2.attr(`rx`, t2.rx), n2.attr(`ry`, t2.ry), t2.class !== void 0 && n2.attr(`class`, t2.class), n2;
}, `drawRect`), M = c(function(e2, t2) {
  let n2 = e2.append(`circle`).attr(`cx`, t2.cx).attr(`cy`, t2.cy).attr(`class`, `face`).attr(`r`, 15).attr(`stroke-width`, 2).attr(`overflow`, `visible`), r2 = e2.append(`g`);
  r2.append(`circle`).attr(`cx`, t2.cx - 15 / 3).attr(`cy`, t2.cy - 15 / 3).attr(`r`, 1.5).attr(`stroke-width`, 2).attr(`fill`, `#666`).attr(`stroke`, `#666`), r2.append(`circle`).attr(`cx`, t2.cx + 15 / 3).attr(`cy`, t2.cy - 15 / 3).attr(`r`, 1.5).attr(`stroke-width`, 2).attr(`fill`, `#666`).attr(`stroke`, `#666`);
  function i2(e3) {
    let n3 = d().startAngle(Math.PI / 2).endAngle(3 * (Math.PI / 2)).innerRadius(15 / 2).outerRadius(15 / 2.2);
    e3.append(`path`).attr(`class`, `mouth`).attr(`d`, n3).attr(`transform`, `translate(` + t2.cx + `,` + (t2.cy + 2) + `)`);
  }
  c(i2, `smile`);
  function a2(e3) {
    let n3 = d().startAngle(3 * Math.PI / 2).endAngle(5 * (Math.PI / 2)).innerRadius(15 / 2).outerRadius(15 / 2.2);
    e3.append(`path`).attr(`class`, `mouth`).attr(`d`, n3).attr(`transform`, `translate(` + t2.cx + `,` + (t2.cy + 7) + `)`);
  }
  c(a2, `sad`);
  function o2(e3) {
    e3.append(`line`).attr(`class`, `mouth`).attr(`stroke`, 2).attr(`x1`, t2.cx - 5).attr(`y1`, t2.cy + 7).attr(`x2`, t2.cx + 5).attr(`y2`, t2.cy + 7).attr(`class`, `mouth`).attr(`stroke-width`, `1px`).attr(`stroke`, `#666`);
  }
  return c(o2, `ambivalent`), t2.score > 3 ? i2(r2) : t2.score < 3 ? a2(r2) : o2(r2), n2;
}, `drawFace`), N = c(function(e2, t2) {
  let n2 = e2.append(`circle`);
  return n2.attr(`cx`, t2.cx), n2.attr(`cy`, t2.cy), n2.attr(`class`, `actor-` + t2.pos), n2.attr(`fill`, t2.fill), n2.attr(`stroke`, t2.stroke), n2.attr(`r`, t2.r), n2.class !== void 0 && n2.attr(`class`, n2.class), t2.title !== void 0 && n2.append(`title`).text(t2.title), n2;
}, `drawCircle`), P = c(function(e2, t2) {
  let n2 = t2.text.replace(/<br\s*\/?>/gi, ` `), r2 = e2.append(`text`);
  r2.attr(`x`, t2.x), r2.attr(`y`, t2.y), r2.attr(`class`, `legend`), r2.style(`text-anchor`, t2.anchor), t2.class !== void 0 && r2.attr(`class`, t2.class);
  let i2 = r2.append(`tspan`);
  return i2.attr(`x`, t2.x + t2.textMargin * 2), i2.text(n2), r2;
}, `drawText`), F = c(function(e2, t2) {
  function n2(e3, t3, n3, r3, i2) {
    return e3 + `,` + t3 + ` ` + (e3 + n3) + `,` + t3 + ` ` + (e3 + n3) + `,` + (t3 + r3 - i2) + ` ` + (e3 + n3 - i2 * 1.2) + `,` + (t3 + r3) + ` ` + e3 + `,` + (t3 + r3);
  }
  c(n2, `genPoints`);
  let r2 = e2.append(`polygon`);
  r2.attr(`points`, n2(t2.x, t2.y, 50, 20, 7)), r2.attr(`class`, `labelBox`), t2.y += t2.labelMargin, t2.x += 0.5 * t2.labelMargin, P(e2, t2);
}, `drawLabel`), I = c(function(e2, t2, n2) {
  let r2 = e2.append(`g`), i2 = V();
  i2.x = t2.x, i2.y = t2.y, i2.fill = t2.fill, i2.width = n2.width, i2.height = n2.height, i2.class = `journey-section section-type-` + t2.num, i2.rx = 3, i2.ry = 3, j(r2, i2), H(n2)(t2.text, r2, i2.x, i2.y, i2.width, i2.height, { class: `journey-section section-type-` + t2.num }, n2, t2.colour);
}, `drawSection`), L = -1, R = c(function(e2, t2, n2) {
  let r2 = t2.x + n2.width / 2, i2 = e2.append(`g`);
  L++, i2.append(`line`).attr(`id`, `task` + L).attr(`x1`, r2).attr(`y1`, t2.y).attr(`x2`, r2).attr(`y2`, 450).attr(`class`, `task-line`).attr(`stroke-width`, `1px`).attr(`stroke-dasharray`, `4 2`).attr(`stroke`, `#666`), M(i2, { cx: r2, cy: 300 + (5 - t2.score) * 30, score: t2.score });
  let a2 = V();
  a2.x = t2.x, a2.y = t2.y, a2.fill = t2.fill, a2.width = n2.width, a2.height = n2.height, a2.class = `task task-type-` + t2.num, a2.rx = 3, a2.ry = 3, j(i2, a2), H(n2)(t2.task, i2, a2.x, a2.y, a2.width, a2.height, { class: `task` }, n2, t2.colour);
}, `drawTask`), z = c(function(e2, t2) {
  j(e2, { x: t2.startx, y: t2.starty, width: t2.stopx - t2.startx, height: t2.stopy - t2.starty, fill: t2.fill, class: `rect` }).lower();
}, `drawBackgroundRect`), B = c(function() {
  return { x: 0, y: 0, fill: void 0, "text-anchor": `start`, width: 100, height: 100, textMargin: 0, rx: 0, ry: 0 };
}, `getTextObj`), V = c(function() {
  return { x: 0, y: 0, width: 100, anchor: `start`, height: 100, rx: 0, ry: 0 };
}, `getNoteRect`), H = (function() {
  function e2(e3, t3, n3, i2, a2, o2, s2, c2) {
    r2(t3.append(`text`).attr(`x`, n3 + a2 / 2).attr(`y`, i2 + o2 / 2 + 5).style(`font-color`, c2).style(`text-anchor`, `middle`).text(e3), s2);
  }
  c(e2, `byText`);
  function t2(e3, t3, n3, i2, a2, o2, s2, c2, l2) {
    let { taskFontSize: u2, taskFontFamily: d2 } = c2, f2 = e3.split(/<br\s*\/?>/gi);
    for (let e4 = 0; e4 < f2.length; e4++) {
      let c3 = e4 * u2 - u2 * (f2.length - 1) / 2, p2 = t3.append(`text`).attr(`x`, n3 + a2 / 2).attr(`y`, i2).attr(`fill`, l2).style(`text-anchor`, `middle`).style(`font-size`, u2).style(`font-family`, d2);
      p2.append(`tspan`).attr(`x`, n3 + a2 / 2).attr(`dy`, c3).text(f2[e4]), p2.attr(`y`, i2 + o2 / 2).attr(`dominant-baseline`, `central`).attr(`alignment-baseline`, `central`), r2(p2, s2);
    }
  }
  c(t2, `byTspan`);
  function n2(e3, n3, i2, a2, o2, s2, c2, l2) {
    let u2 = n3.append(`switch`), d2 = u2.append(`foreignObject`).attr(`x`, i2).attr(`y`, a2).attr(`width`, o2).attr(`height`, s2).attr(`position`, `fixed`).append(`xhtml:div`).style(`display`, `table`).style(`height`, `100%`).style(`width`, `100%`);
    d2.append(`div`).attr(`class`, `label`).style(`display`, `table-cell`).style(`text-align`, `center`).style(`vertical-align`, `middle`).text(e3), t2(e3, u2, i2, a2, o2, s2, c2, l2), r2(d2, c2);
  }
  c(n2, `byFo`);
  function r2(e3, t3) {
    for (let n3 in t3) n3 in t3 && e3.attr(n3, t3[n3]);
  }
  return c(r2, `_setTextAttrs`), function(r3) {
    return r3.textPlacement === `fo` ? n2 : r3.textPlacement === `old` ? e2 : t2;
  };
})(), U = c(function(e2) {
  e2.append(`defs`).append(`marker`).attr(`id`, `arrowhead`).attr(`refX`, 5).attr(`refY`, 2).attr(`markerWidth`, 6).attr(`markerHeight`, 4).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 0,0 V 4 L6,2 Z`);
}, `initGraphics`);
function W(e2, t2) {
  e2.each(function() {
    var e3 = u(this), n2 = e3.text().split(/(\s+|<br>)/).reverse(), r2, i2 = [], a2 = 1.1, o2 = e3.attr(`y`), s2 = parseFloat(e3.attr(`dy`)), c2 = e3.text(null).append(`tspan`).attr(`x`, 0).attr(`y`, o2).attr(`dy`, s2 + `em`);
    for (let s3 = 0; s3 < n2.length; s3++) r2 = n2[n2.length - 1 - s3], i2.push(r2), c2.text(i2.join(` `).trim()), (c2.node().getComputedTextLength() > t2 || r2 === `<br>`) && (i2.pop(), c2.text(i2.join(` `).trim()), i2 = r2 === `<br>` ? [``] : [r2], c2 = e3.append(`tspan`).attr(`x`, 0).attr(`y`, o2).attr(`dy`, a2 + `em`).text(r2));
  });
}
c(W, `wrap`);
var G = c(function(e2, t2, n2, r2) {
  var _a;
  let i2 = n2 % A - 1, a2 = e2.append(`g`);
  t2.section = i2, a2.attr(`class`, (t2.class ? t2.class + ` ` : ``) + `timeline-node ` + (`section-` + i2));
  let o2 = a2.append(`g`), s2 = a2.append(`g`), c2 = s2.append(`text`).text(t2.descr).attr(`dy`, `1em`).attr(`alignment-baseline`, `middle`).attr(`dominant-baseline`, `middle`).attr(`text-anchor`, `middle`).call(W, t2.width).node().getBBox(), l2 = ((_a = r2.fontSize) == null ? void 0 : _a.replace) ? r2.fontSize.replace(`px`, ``) : r2.fontSize;
  return t2.height = c2.height + l2 * 1.1 * 0.5 + t2.padding, t2.height = Math.max(t2.height, t2.maxHeight), t2.width += 2 * t2.padding, s2.attr(`transform`, `translate(` + t2.width / 2 + `, ` + t2.padding / 2 + `)`), q(o2, t2, i2, r2), t2;
}, `drawNode`), K = c(function(e2, t2, n2) {
  var _a;
  let r2 = e2.append(`g`), i2 = r2.append(`text`).text(t2.descr).attr(`dy`, `1em`).attr(`alignment-baseline`, `middle`).attr(`dominant-baseline`, `middle`).attr(`text-anchor`, `middle`).call(W, t2.width).node().getBBox(), a2 = ((_a = n2.fontSize) == null ? void 0 : _a.replace) ? n2.fontSize.replace(`px`, ``) : n2.fontSize;
  return r2.remove(), i2.height + a2 * 1.1 * 0.5 + t2.padding;
}, `getVirtualNodeHeight`), q = c(function(e2, t2, n2) {
  e2.append(`path`).attr(`id`, `node-` + t2.id).attr(`class`, `node-bkg node-` + t2.type).attr(`d`, `M0 ${t2.height - 5} v${-t2.height + 10} q0,-5 5,-5 h${t2.width - 10} q5,0 5,5 v${t2.height - 5} H0 Z`), e2.append(`line`).attr(`class`, `node-line-` + n2).attr(`x1`, 0).attr(`y1`, t2.height).attr(`x2`, t2.width).attr(`y2`, t2.height);
}, `defaultBkg`), J = { drawRect: j, drawCircle: N, drawSection: I, drawText: P, drawLabel: F, drawTask: R, drawBackgroundRect: z, getTextObj: B, getNoteRect: V, initGraphics: U, drawNode: G, getVirtualNodeHeight: K }, Y = c(function(e2, n2, r2, i2) {
  var _a, _b, _c;
  let o2 = a(), c2 = ((_a = o2.timeline) == null ? void 0 : _a.leftMargin) ?? 50;
  s.debug(`timeline`, i2.db);
  let l2 = o2.securityLevel, d2;
  l2 === `sandbox` && (d2 = u(`#i` + n2));
  let f2 = u(l2 === `sandbox` ? d2.nodes()[0].contentDocument.body : `body`).select(`#` + n2);
  f2.append(`g`);
  let p2 = i2.db.getTasks(), m2 = i2.db.getCommonDb().getDiagramTitle();
  s.debug(`task`, p2), J.initGraphics(f2);
  let h2 = i2.db.getSections();
  s.debug(`sections`, h2);
  let g2 = 0, _2 = 0, v2 = 0, y2 = 0, b2 = 50 + c2, x2 = 50;
  y2 = 50;
  let S2 = 0, C2 = true;
  h2.forEach(function(e3) {
    let t2 = { number: S2, descr: e3, section: S2, width: 150, padding: 20, maxHeight: g2 }, n3 = J.getVirtualNodeHeight(f2, t2, o2);
    s.debug(`sectionHeight before draw`, n3), g2 = Math.max(g2, n3 + 20);
  });
  let w2 = 0, T2 = 0;
  s.debug(`tasks.length`, p2.length);
  for (let [e3, t2] of p2.entries()) {
    let n3 = { number: e3, descr: t2, section: t2.section, width: 150, padding: 20, maxHeight: _2 }, r3 = J.getVirtualNodeHeight(f2, n3, o2);
    s.debug(`taskHeight before draw`, r3), _2 = Math.max(_2, r3 + 20), w2 = Math.max(w2, t2.events.length);
    let i3 = 0;
    for (let e4 of t2.events) {
      let n4 = { descr: e4, section: t2.section, number: t2.section, width: 150, padding: 20, maxHeight: 50 };
      i3 += J.getVirtualNodeHeight(f2, n4, o2);
    }
    t2.events.length > 0 && (i3 += (t2.events.length - 1) * 10), T2 = Math.max(T2, i3);
  }
  s.debug(`maxSectionHeight before draw`, g2), s.debug(`maxTaskHeight before draw`, _2), h2 && h2.length > 0 ? h2.forEach((e3) => {
    let t2 = p2.filter((t3) => t3.section === e3), n3 = { number: S2, descr: e3, section: S2, width: 200 * Math.max(t2.length, 1) - 50, padding: 20, maxHeight: g2 };
    s.debug(`sectionNode`, n3);
    let r3 = f2.append(`g`), i3 = J.drawNode(r3, n3, S2, o2);
    s.debug(`sectionNode output`, i3), r3.attr(`transform`, `translate(${b2}, ${y2})`), x2 += g2 + 50, t2.length > 0 && X(f2, t2, S2, b2, x2, _2, o2, w2, T2, g2, false), b2 += 200 * Math.max(t2.length, 1), x2 = y2, S2++;
  }) : (C2 = false, X(f2, p2, S2, b2, x2, _2, o2, w2, T2, g2, true));
  let E2 = f2.node().getBBox();
  s.debug(`bounds`, E2), m2 && f2.append(`text`).text(m2).attr(`x`, E2.width / 2 - c2).attr(`font-size`, `4ex`).attr(`font-weight`, `bold`).attr(`y`, 20), v2 = C2 ? g2 + _2 + 150 : _2 + 100, f2.append(`g`).attr(`class`, `lineWrapper`).append(`line`).attr(`x1`, c2).attr(`y1`, v2).attr(`x2`, E2.width + 3 * c2).attr(`y2`, v2).attr(`stroke-width`, 4).attr(`stroke`, `black`).attr(`marker-end`, `url(#arrowhead)`), t(void 0, f2, ((_b = o2.timeline) == null ? void 0 : _b.padding) ?? 50, ((_c = o2.timeline) == null ? void 0 : _c.useMaxWidth) ?? false);
}, `draw`), X = c(function(e2, t2, n2, r2, i2, a2, o2, c2, l2, u2, d2) {
  var _a;
  for (let c3 of t2) {
    let t3 = { descr: c3.task, section: n2, number: n2, width: 150, padding: 20, maxHeight: a2 };
    s.debug(`taskNode`, t3);
    let u3 = e2.append(`g`).attr(`class`, `taskWrapper`), f2 = J.drawNode(u3, t3, n2, o2).height;
    if (s.debug(`taskHeight after draw`, f2), u3.attr(`transform`, `translate(${r2}, ${i2})`), a2 = Math.max(a2, f2), c3.events) {
      let t4 = e2.append(`g`).attr(`class`, `lineWrapper`), s2 = a2;
      i2 += 100, s2 += Z(e2, c3.events, n2, r2, i2, o2), i2 -= 100, t4.append(`line`).attr(`x1`, r2 + 190 / 2).attr(`y1`, i2 + a2).attr(`x2`, r2 + 190 / 2).attr(`y2`, i2 + a2 + 100 + l2 + 100).attr(`stroke-width`, 2).attr(`stroke`, `black`).attr(`marker-end`, `url(#arrowhead)`).attr(`stroke-dasharray`, `5,5`);
    }
    r2 += 200, d2 && !((_a = o2.timeline) == null ? void 0 : _a.disableMulticolor) && n2++;
  }
  i2 -= 10;
}, `drawTasks`), Z = c(function(e2, t2, n2, r2, i2, a2) {
  let o2 = 0, c2 = i2;
  i2 += 100;
  for (let c3 of t2) {
    let t3 = { descr: c3, section: n2, number: n2, width: 150, padding: 20, maxHeight: 50 };
    s.debug(`eventNode`, t3);
    let l2 = e2.append(`g`).attr(`class`, `eventWrapper`), u2 = J.drawNode(l2, t3, n2, a2).height;
    o2 += u2, l2.attr(`transform`, `translate(${r2}, ${i2})`), i2 = i2 + 10 + u2;
  }
  return i2 = c2, o2;
}, `drawEvents`), Q = { setConf: c(() => {
}, `setConf`), draw: Y }, $ = c((t2) => {
  let i2 = ``;
  for (let i3 = 0; i3 < t2.THEME_COLOR_LIMIT; i3++) t2[`lineColor` + i3] = t2[`lineColor` + i3] || t2[`cScaleInv` + i3], e(t2[`lineColor` + i3]) ? t2[`lineColor` + i3] = n(t2[`lineColor` + i3], 20) : t2[`lineColor` + i3] = r(t2[`lineColor` + i3], 20);
  for (let e2 = 0; e2 < t2.THEME_COLOR_LIMIT; e2++) {
    let n2 = `` + (17 - 3 * e2);
    i2 += `
    .section-${e2 - 1} rect, .section-${e2 - 1} path, .section-${e2 - 1} circle, .section-${e2 - 1} path  {
      fill: ${t2[`cScale` + e2]};
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
      stroke-width: ${n2};
    }
    .section-${e2 - 1} line {
      stroke: ${t2[`cScaleInv` + e2]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${t2[`cScaleLabel` + e2]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `;
  }
  return i2;
}, `genSections`), ee = { db: m, renderer: Q, parser: p, styles: c((e2) => `
  .edge {
    stroke-width: 3;
  }
  ${$(e2)}
  .section-root rect, .section-root path, .section-root circle  {
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
  .eventWrapper  {
   filter: brightness(120%);
  }
`, `getStyles`) };
export {
  ee as diagram
};
