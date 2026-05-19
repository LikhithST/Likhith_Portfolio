import { t as e } from "./arc-DfjZgq6W.js";
import { Bn as t, Jn as n, Ln as r, Nt as i, R as a, Sn as o, Un as s, Vn as c, Yn as l, mn as u, pn as d, qn as f, un as p, xn as m } from "./index-4Ava25sD.js";
var h = (function() {
  var e2 = n(function(e3, t3, n2, r3) {
    for (n2 || (n2 = {}), r3 = e3.length; r3--; n2[e3[r3]] = t3) ;
    return n2;
  }, `o`), t2 = [6, 11, 13, 14, 15, 17, 19, 20, 23, 24], r2 = [1, 12], i2 = [1, 13], a2 = [1, 14], o2 = [1, 15], s2 = [1, 16], c2 = [1, 19], l2 = [1, 20], u2 = { trace: n(function() {
  }, `trace`), yy: {}, symbols_: { error: 2, start: 3, timeline_header: 4, document: 5, EOF: 6, timeline: 7, timeline_lr: 8, timeline_td: 9, line: 10, SPACE: 11, statement: 12, NEWLINE: 13, title: 14, acc_title: 15, acc_title_value: 16, acc_descr: 17, acc_descr_value: 18, acc_descr_multiline_value: 19, section: 20, period_statement: 21, event_statement: 22, period: 23, event: 24, $accept: 0, $end: 1 }, terminals_: { 2: `error`, 6: `EOF`, 7: `timeline`, 8: `timeline_lr`, 9: `timeline_td`, 11: `SPACE`, 13: `NEWLINE`, 14: `title`, 15: `acc_title`, 16: `acc_title_value`, 17: `acc_descr`, 18: `acc_descr_value`, 19: `acc_descr_multiline_value`, 20: `section`, 23: `period`, 24: `event` }, productions_: [0, [3, 3], [4, 1], [4, 1], [4, 1], [5, 0], [5, 2], [10, 2], [10, 1], [10, 1], [10, 1], [12, 1], [12, 2], [12, 2], [12, 1], [12, 1], [12, 1], [12, 1], [21, 1], [22, 1]], performAction: n(function(e3, t3, n2, r3, i3, a3, o3) {
    var s3 = a3.length - 1;
    switch (i3) {
      case 1:
        return a3[s3 - 1];
      case 3:
        r3.setDirection(`LR`);
        break;
      case 4:
        r3.setDirection(`TD`);
        break;
      case 5:
        this.$ = [];
        break;
      case 6:
        a3[s3 - 1].push(a3[s3]), this.$ = a3[s3 - 1];
        break;
      case 7:
      case 8:
        this.$ = a3[s3];
        break;
      case 9:
      case 10:
        this.$ = [];
        break;
      case 11:
        r3.getCommonDb().setDiagramTitle(a3[s3].substr(6)), this.$ = a3[s3].substr(6);
        break;
      case 12:
        this.$ = a3[s3].trim(), r3.getCommonDb().setAccTitle(this.$);
        break;
      case 13:
      case 14:
        this.$ = a3[s3].trim(), r3.getCommonDb().setAccDescription(this.$);
        break;
      case 15:
        r3.addSection(a3[s3].substr(8)), this.$ = a3[s3].substr(8);
        break;
      case 18:
        r3.addTask(a3[s3], 0, ``), this.$ = a3[s3];
        break;
      case 19:
        r3.addEvent(a3[s3].substr(2)), this.$ = a3[s3];
        break;
    }
  }, `anonymous`), table: [{ 3: 1, 4: 2, 7: [1, 3], 8: [1, 4], 9: [1, 5] }, { 1: [3] }, e2(t2, [2, 5], { 5: 6 }), e2(t2, [2, 2]), e2(t2, [2, 3]), e2(t2, [2, 4]), { 6: [1, 7], 10: 8, 11: [1, 9], 12: 10, 13: [1, 11], 14: r2, 15: i2, 17: a2, 19: o2, 20: s2, 21: 17, 22: 18, 23: c2, 24: l2 }, e2(t2, [2, 10], { 1: [2, 1] }), e2(t2, [2, 6]), { 12: 21, 14: r2, 15: i2, 17: a2, 19: o2, 20: s2, 21: 17, 22: 18, 23: c2, 24: l2 }, e2(t2, [2, 8]), e2(t2, [2, 9]), e2(t2, [2, 11]), { 16: [1, 22] }, { 18: [1, 23] }, e2(t2, [2, 14]), e2(t2, [2, 15]), e2(t2, [2, 16]), e2(t2, [2, 17]), e2(t2, [2, 18]), e2(t2, [2, 19]), e2(t2, [2, 7]), e2(t2, [2, 12]), e2(t2, [2, 13])], defaultActions: {}, parseError: n(function(e3, t3) {
    if (t3.recoverable) this.trace(e3);
    else {
      var n2 = Error(e3);
      throw n2.hash = t3, n2;
    }
  }, `parseError`), parse: n(function(e3) {
    var t3 = this, r3 = [0], i3 = [], a3 = [null], o3 = [], s3 = this.table, c3 = ``, l3 = 0, u3 = 0, d3 = 0, f2 = 2, p2 = 1, m2 = o3.slice.call(arguments, 1), h2 = Object.create(this.lexer), g2 = { yy: {} };
    for (var _2 in this.yy) Object.prototype.hasOwnProperty.call(this.yy, _2) && (g2.yy[_2] = this.yy[_2]);
    h2.setInput(e3, g2.yy), g2.yy.lexer = h2, g2.yy.parser = this, h2.yylloc === void 0 && (h2.yylloc = {});
    var v2 = h2.yylloc;
    o3.push(v2);
    var y2 = h2.options && h2.options.ranges;
    typeof g2.yy.parseError == `function` ? this.parseError = g2.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
    function b2(e4) {
      r3.length -= 2 * e4, a3.length -= e4, o3.length -= e4;
    }
    n(b2, `popStack`);
    function x2() {
      var e4 = i3.pop() || h2.lex() || p2;
      return typeof e4 != `number` && (e4 instanceof Array && (i3 = e4, e4 = i3.pop()), e4 = t3.symbols_[e4] || e4), e4;
    }
    n(x2, `lex`);
    for (var S2, C2, w2, T2, E2, D2 = {}, O2, k2, A2, j2; ; ) {
      if (w2 = r3[r3.length - 1], this.defaultActions[w2] ? T2 = this.defaultActions[w2] : (S2 ?? (S2 = x2()), T2 = s3[w2] && s3[w2][S2]), T2 === void 0 || !T2.length || !T2[0]) {
        var M2 = ``;
        for (O2 in j2 = [], s3[w2]) this.terminals_[O2] && O2 > f2 && j2.push(`'` + this.terminals_[O2] + `'`);
        M2 = h2.showPosition ? `Parse error on line ` + (l3 + 1) + `:
` + h2.showPosition() + `
Expecting ` + j2.join(`, `) + `, got '` + (this.terminals_[S2] || S2) + `'` : `Parse error on line ` + (l3 + 1) + `: Unexpected ` + (S2 == p2 ? `end of input` : `'` + (this.terminals_[S2] || S2) + `'`), this.parseError(M2, { text: h2.match, token: this.terminals_[S2] || S2, line: h2.yylineno, loc: v2, expected: j2 });
      }
      if (T2[0] instanceof Array && T2.length > 1) throw Error(`Parse Error: multiple actions possible at state: ` + w2 + `, token: ` + S2);
      switch (T2[0]) {
        case 1:
          r3.push(S2), a3.push(h2.yytext), o3.push(h2.yylloc), r3.push(T2[1]), S2 = null, C2 ? (S2 = C2, C2 = null) : (u3 = h2.yyleng, c3 = h2.yytext, l3 = h2.yylineno, v2 = h2.yylloc, d3 > 0 && d3--);
          break;
        case 2:
          if (k2 = this.productions_[T2[1]][1], D2.$ = a3[a3.length - k2], D2._$ = { first_line: o3[o3.length - (k2 || 1)].first_line, last_line: o3[o3.length - 1].last_line, first_column: o3[o3.length - (k2 || 1)].first_column, last_column: o3[o3.length - 1].last_column }, y2 && (D2._$.range = [o3[o3.length - (k2 || 1)].range[0], o3[o3.length - 1].range[1]]), E2 = this.performAction.apply(D2, [c3, u3, l3, g2.yy, T2[1], a3, o3].concat(m2)), E2 !== void 0) return E2;
          k2 && (r3 = r3.slice(0, -1 * k2 * 2), a3 = a3.slice(0, -1 * k2), o3 = o3.slice(0, -1 * k2)), r3.push(this.productions_[T2[1]][0]), a3.push(D2.$), o3.push(D2._$), A2 = s3[r3[r3.length - 2]][r3[r3.length - 1]], r3.push(A2);
          break;
        case 3:
          return true;
      }
    }
    return true;
  }, `parse`) };
  u2.lexer = (function() {
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
          break;
        case 1:
          break;
        case 2:
          return 13;
        case 3:
          break;
        case 4:
          break;
        case 5:
          return 8;
        case 6:
          return 9;
        case 7:
          return 7;
        case 8:
          return 14;
        case 9:
          return this.begin(`acc_title`), 15;
        case 10:
          return this.popState(), `acc_title_value`;
        case 11:
          return this.begin(`acc_descr`), 17;
        case 12:
          return this.popState(), `acc_descr_value`;
        case 13:
          this.begin(`acc_descr_multiline`);
          break;
        case 14:
          this.popState();
          break;
        case 15:
          return `acc_descr_multiline_value`;
        case 16:
          return 20;
        case 17:
          return 24;
        case 18:
          return 23;
        case 19:
          return 6;
        case 20:
          return `INVALID`;
      }
    }, `anonymous`), rules: [/^(?:%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:timeline[ \t]+LR\b)/i, /^(?:timeline[ \t]+TD\b)/i, /^(?:timeline\b)/i, /^(?:title\s[^\n]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:section\s[^:\n]+)/i, /^(?::\s(?:[^:\n]|:(?!\s))+)/i, /^(?:[^#:\n]+)/i, /^(?:$)/i, /^(?:.)/i], conditions: { acc_descr_multiline: { rules: [14, 15], inclusive: false }, acc_descr: { rules: [12], inclusive: false }, acc_title: { rules: [10], inclusive: false }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 16, 17, 18, 19, 20], inclusive: true } } };
  })();
  function d2() {
    this.yy = {};
  }
  return n(d2, `Parser`), d2.prototype = u2, u2.Parser = d2, new d2();
})();
h.parser = h;
var g = h, _ = {};
f(_, { addEvent: () => M, addSection: () => O, addTask: () => j, addTaskOrg: () => N, clear: () => T, default: () => ee, getCommonDb: () => w, getDirection: () => D, getSections: () => k, getTasks: () => A, setDirection: () => E });
var v = ``, y = 0, b = `LR`, x = [], S = [], C = [], w = n(() => u, `getCommonDb`), T = n(function() {
  x.length = 0, S.length = 0, v = ``, C.length = 0, b = `LR`, d();
}, `clear`), E = n(function(e2) {
  b = e2;
}, `setDirection`), D = n(function() {
  return b;
}, `getDirection`), O = n(function(e2) {
  v = e2, x.push(e2);
}, `addSection`), k = n(function() {
  return x;
}, `getSections`), A = n(function() {
  let e2 = P(), t2 = 0;
  for (; !e2 && t2 < 100; ) e2 = P(), t2++;
  return S.push(...C), S;
}, `getTasks`), j = n(function(e2, t2, n2) {
  let r2 = { id: y++, section: v, type: v, task: e2, score: t2 || 0, events: n2 ? [n2] : [] };
  C.push(r2);
}, `addTask`), M = n(function(e2) {
  C.find((e3) => e3.id === y - 1).events.push(e2);
}, `addEvent`), N = n(function(e2) {
  let t2 = { section: v, type: v, description: e2, task: e2, classes: [] };
  S.push(t2);
}, `addTaskOrg`), P = n(function() {
  let e2 = n(function(e3) {
    return C[e3].processed;
  }, `compileTask`), t2 = true;
  for (let [n2, r2] of C.entries()) e2(n2), t2 && (t2 = r2.processed);
  return t2;
}, `compileTasks`), ee = { clear: T, getCommonDb: w, getDirection: D, setDirection: E, addSection: O, getSections: k, getTasks: A, addTask: j, addTaskOrg: N, addEvent: M }, F = 0, I = n(function(e2, t2) {
  let n2 = e2.append(`rect`);
  return n2.attr(`x`, t2.x), n2.attr(`y`, t2.y), n2.attr(`fill`, t2.fill), n2.attr(`stroke`, t2.stroke), n2.attr(`width`, t2.width), n2.attr(`height`, t2.height), n2.attr(`rx`, t2.rx), n2.attr(`ry`, t2.ry), t2.class !== void 0 && n2.attr(`class`, t2.class), n2;
}, `drawRect`), te = n(function(t2, r2) {
  let i2 = t2.append(`circle`).attr(`cx`, r2.cx).attr(`cy`, r2.cy).attr(`class`, `face`).attr(`r`, 15).attr(`stroke-width`, 2).attr(`overflow`, `visible`), a2 = t2.append(`g`);
  a2.append(`circle`).attr(`cx`, r2.cx - 15 / 3).attr(`cy`, r2.cy - 15 / 3).attr(`r`, 1.5).attr(`stroke-width`, 2).attr(`fill`, `#666`).attr(`stroke`, `#666`), a2.append(`circle`).attr(`cx`, r2.cx + 15 / 3).attr(`cy`, r2.cy - 15 / 3).attr(`r`, 1.5).attr(`stroke-width`, 2).attr(`fill`, `#666`).attr(`stroke`, `#666`);
  function o2(t3) {
    let n2 = e().startAngle(Math.PI / 2).endAngle(3 * (Math.PI / 2)).innerRadius(15 / 2).outerRadius(15 / 2.2);
    t3.append(`path`).attr(`class`, `mouth`).attr(`d`, n2).attr(`transform`, `translate(` + r2.cx + `,` + (r2.cy + 2) + `)`);
  }
  n(o2, `smile`);
  function s2(t3) {
    let n2 = e().startAngle(3 * Math.PI / 2).endAngle(5 * (Math.PI / 2)).innerRadius(15 / 2).outerRadius(15 / 2.2);
    t3.append(`path`).attr(`class`, `mouth`).attr(`d`, n2).attr(`transform`, `translate(` + r2.cx + `,` + (r2.cy + 7) + `)`);
  }
  n(s2, `sad`);
  function c2(e2) {
    e2.append(`line`).attr(`class`, `mouth`).attr(`stroke`, 2).attr(`x1`, r2.cx - 5).attr(`y1`, r2.cy + 7).attr(`x2`, r2.cx + 5).attr(`y2`, r2.cy + 7).attr(`class`, `mouth`).attr(`stroke-width`, `1px`).attr(`stroke`, `#666`);
  }
  return n(c2, `ambivalent`), r2.score > 3 ? o2(a2) : r2.score < 3 ? s2(a2) : c2(a2), i2;
}, `drawFace`), ne = n(function(e2, t2) {
  let n2 = e2.append(`circle`);
  return n2.attr(`cx`, t2.cx), n2.attr(`cy`, t2.cy), n2.attr(`class`, `actor-` + t2.pos), n2.attr(`fill`, t2.fill), n2.attr(`stroke`, t2.stroke), n2.attr(`r`, t2.r), n2.class !== void 0 && n2.attr(`class`, n2.class), t2.title !== void 0 && n2.append(`title`).text(t2.title), n2;
}, `drawCircle`), L = n(function(e2, t2) {
  let n2 = t2.text.replace(/<br\s*\/?>/gi, ` `), r2 = e2.append(`text`);
  r2.attr(`x`, t2.x), r2.attr(`y`, t2.y), r2.attr(`class`, `legend`), r2.style(`text-anchor`, t2.anchor), t2.class !== void 0 && r2.attr(`class`, t2.class);
  let i2 = r2.append(`tspan`);
  return i2.attr(`x`, t2.x + t2.textMargin * 2), i2.text(n2), r2;
}, `drawText`), re = n(function(e2, t2) {
  function r2(e3, t3, n2, r3, i3) {
    return e3 + `,` + t3 + ` ` + (e3 + n2) + `,` + t3 + ` ` + (e3 + n2) + `,` + (t3 + r3 - i3) + ` ` + (e3 + n2 - i3 * 1.2) + `,` + (t3 + r3) + ` ` + e3 + `,` + (t3 + r3);
  }
  n(r2, `genPoints`);
  let i2 = e2.append(`polygon`);
  i2.attr(`points`, r2(t2.x, t2.y, 50, 20, 7)), i2.attr(`class`, `labelBox`), t2.y += t2.labelMargin, t2.x += 0.5 * t2.labelMargin, L(e2, t2);
}, `drawLabel`), R = n(function(e2, t2, n2) {
  let r2 = e2.append(`g`), i2 = B();
  i2.x = t2.x, i2.y = t2.y, i2.fill = t2.fill, i2.width = n2.width, i2.height = n2.height, i2.class = `journey-section section-type-` + t2.num, i2.rx = 3, i2.ry = 3, I(r2, i2), V(n2)(t2.text, r2, i2.x, i2.y, i2.width, i2.height, { class: `journey-section section-type-` + t2.num }, n2, t2.colour);
}, `drawSection`), z = -1, ie = n(function(e2, t2, n2, r2) {
  let i2 = t2.x + n2.width / 2, a2 = e2.append(`g`);
  z++, a2.append(`line`).attr(`id`, r2 + `-task` + z).attr(`x1`, i2).attr(`y1`, t2.y).attr(`x2`, i2).attr(`y2`, 450).attr(`class`, `task-line`).attr(`stroke-width`, `1px`).attr(`stroke-dasharray`, `4 2`).attr(`stroke`, `#666`), te(a2, { cx: i2, cy: 300 + (5 - t2.score) * 30, score: t2.score });
  let o2 = B();
  o2.x = t2.x, o2.y = t2.y, o2.fill = t2.fill, o2.width = n2.width, o2.height = n2.height, o2.class = `task task-type-` + t2.num, o2.rx = 3, o2.ry = 3, I(a2, o2), V(n2)(t2.task, a2, o2.x, o2.y, o2.width, o2.height, { class: `task` }, n2, t2.colour);
}, `drawTask`), ae = n(function(e2, t2) {
  I(e2, { x: t2.startx, y: t2.starty, width: t2.stopx - t2.startx, height: t2.stopy - t2.starty, fill: t2.fill, class: `rect` }).lower();
}, `drawBackgroundRect`), oe = n(function() {
  return { x: 0, y: 0, fill: void 0, "text-anchor": `start`, width: 100, height: 100, textMargin: 0, rx: 0, ry: 0 };
}, `getTextObj`), B = n(function() {
  return { x: 0, y: 0, width: 100, anchor: `start`, height: 100, rx: 0, ry: 0 };
}, `getNoteRect`), V = (function() {
  function e2(e3, t3, n2, r3, a2, o2, s2, c2) {
    i2(t3.append(`text`).attr(`x`, n2 + a2 / 2).attr(`y`, r3 + o2 / 2 + 5).style(`font-color`, c2).style(`text-anchor`, `middle`).text(e3), s2);
  }
  n(e2, `byText`);
  function t2(e3, t3, n2, r3, a2, o2, s2, c2, l2) {
    let { taskFontSize: u2, taskFontFamily: d2 } = c2, f2 = e3.split(/<br\s*\/?>/gi);
    for (let e4 = 0; e4 < f2.length; e4++) {
      let c3 = e4 * u2 - u2 * (f2.length - 1) / 2, p2 = t3.append(`text`).attr(`x`, n2 + a2 / 2).attr(`y`, r3).attr(`fill`, l2).style(`text-anchor`, `middle`).style(`font-size`, u2).style(`font-family`, d2);
      p2.append(`tspan`).attr(`x`, n2 + a2 / 2).attr(`dy`, c3).text(f2[e4]), p2.attr(`y`, r3 + o2 / 2).attr(`dominant-baseline`, `central`).attr(`alignment-baseline`, `central`), i2(p2, s2);
    }
  }
  n(t2, `byTspan`);
  function r2(e3, n2, r3, a2, o2, s2, c2, l2) {
    let u2 = n2.append(`switch`), d2 = u2.append(`foreignObject`).attr(`x`, r3).attr(`y`, a2).attr(`width`, o2).attr(`height`, s2).attr(`position`, `fixed`).append(`xhtml:div`).style(`display`, `table`).style(`height`, `100%`).style(`width`, `100%`);
    d2.append(`div`).attr(`class`, `label`).style(`display`, `table-cell`).style(`text-align`, `center`).style(`vertical-align`, `middle`).text(e3), t2(e3, u2, r3, a2, o2, s2, c2, l2), i2(d2, c2);
  }
  n(r2, `byFo`);
  function i2(e3, t3) {
    for (let n2 in t3) n2 in t3 && e3.attr(n2, t3[n2]);
  }
  return n(i2, `_setTextAttrs`), function(n2) {
    return n2.textPlacement === `fo` ? r2 : n2.textPlacement === `old` ? e2 : t2;
  };
})(), se = n(function(e2, t2) {
  F = 0, z = -1, e2.append(`defs`).append(`marker`).attr(`id`, t2 + `-arrowhead`).attr(`refX`, 5).attr(`refY`, 2).attr(`markerWidth`, 6).attr(`markerHeight`, 4).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 0,0 V 4 L6,2 Z`);
}, `initGraphics`);
function H(e2, t2) {
  e2.each(function() {
    var e3 = p(this), n2 = e3.text().split(/(\s+|<br>)/).reverse(), r2, i2 = [], a2 = 1.1, o2 = e3.attr(`y`), s2 = parseFloat(e3.attr(`dy`)), c2 = e3.text(null).append(`tspan`).attr(`x`, 0).attr(`y`, o2).attr(`dy`, s2 + `em`);
    for (let s3 = 0; s3 < n2.length; s3++) r2 = n2[n2.length - 1 - s3], i2.push(r2), c2.text(i2.join(` `).trim()), (c2.node().getComputedTextLength() > t2 || r2 === `<br>`) && (i2.pop(), c2.text(i2.join(` `).trim()), i2 = r2 === `<br>` ? [``] : [r2], c2 = e3.append(`tspan`).attr(`x`, 0).attr(`y`, o2).attr(`dy`, a2 + `em`).text(r2));
  });
}
n(H, `wrap`);
var ce = n(function(e2, t2, n2, r2, i2, a2 = false) {
  var _a, _b, _c;
  let { theme: o2, look: s2 } = r2, c2 = o2 == null ? void 0 : o2.includes(`redux`), l2 = n2 % (((_a = r2 == null ? void 0 : r2.themeVariables) == null ? void 0 : _a.THEME_COLOR_LIMIT) ?? 12) - 1, u2 = e2.append(`g`);
  t2.section = l2, u2.attr(`class`, (t2.class ? t2.class + ` ` : ``) + `timeline-node ` + (`section-` + l2));
  let d2 = u2.append(`g`), f2 = u2.append(`g`), m2 = f2.append(`text`).text(t2.descr).attr(`dy`, `1em`).attr(`alignment-baseline`, `middle`).attr(`dominant-baseline`, `middle`).attr(`text-anchor`, `middle`).call(H, t2.width).node().getBBox(), h2 = ((_b = r2.fontSize) == null ? void 0 : _b.replace) ? r2.fontSize.replace(`px`, ``) : r2.fontSize;
  if (t2.height = m2.height + h2 * 1.1 * 0.5 + t2.padding, t2.height = Math.max(t2.height, t2.maxHeight), t2.width += 2 * t2.padding, f2.attr(`transform`, `translate(` + t2.width / 2 + `, ` + t2.padding / 2 + `)`), c2 && f2.attr(`transform`, `translate(${t2.width / 2}, ${a2 ? t2.padding / 2 + 3 : t2.padding})`), ue(d2, t2, l2, i2, r2), s2 === `neo` && (u2.attr(`data-look`, `neo`), c2)) {
    let t3 = o2.includes(`dark`), n3 = p(((_c = e2.node()) == null ? void 0 : _c.ownerSVGElement) ?? e2.node()), r3 = n3.attr(`id`) ?? ``, i3 = r3 ? `${r3}-drop-shadow` : `drop-shadow`;
    if (n3.select(`#${i3}`).empty()) {
      let e3 = n3.select(`defs`);
      (e3.empty() ? n3.append(`defs`) : e3).append(`filter`).attr(`id`, i3).attr(`height`, `130%`).attr(`width`, `130%`).append(`feDropShadow`).attr(`dx`, `4`).attr(`dy`, `4`).attr(`stdDeviation`, 0).attr(`flood-opacity`, t3 ? `0.2` : `0.06`).attr(`flood-color`, t3 ? `#FFFFFF` : `#000000`);
    }
  }
  return t2;
}, `drawNode`), le = n(function(e2, t2, n2) {
  var _a;
  let r2 = e2.append(`g`), i2 = r2.append(`text`).text(t2.descr).attr(`dy`, `1em`).attr(`alignment-baseline`, `middle`).attr(`dominant-baseline`, `middle`).attr(`text-anchor`, `middle`).call(H, t2.width).node().getBBox(), a2 = ((_a = n2.fontSize) == null ? void 0 : _a.replace) ? n2.fontSize.replace(`px`, ``) : n2.fontSize;
  return r2.remove(), i2.height + a2 * 1.1 * 0.5 + t2.padding;
}, `getVirtualNodeHeight`), ue = n(function(e2, t2, n2, r2, i2) {
  let { theme: a2 } = i2, o2 = (a2 == null ? void 0 : a2.includes(`redux`)) ? 0 : 5, s2 = o2 > 0 ? `M0 ${t2.height - 5} v${-t2.height + 10} q0,-${o2},${o2},-${o2} h${t2.width - 10} q${o2},0,${o2},${o2} v${t2.height - 5} H0 Z` : `M0 ${t2.height - 5} v${-(t2.height - 5)} h${t2.width} v${t2.height} H0 Z`;
  e2.append(`path`).attr(`id`, r2 + `-node-` + F++).attr(`class`, `node-bkg node-` + t2.type).attr(`d`, s2), (a2 == null ? void 0 : a2.includes(`redux`)) || e2.append(`line`).attr(`class`, `node-line-` + n2).attr(`x1`, 0).attr(`y1`, t2.height).attr(`x2`, t2.width).attr(`y2`, t2.height);
}, `defaultBkg`), U = { drawRect: I, drawCircle: ne, drawSection: R, drawText: L, drawLabel: re, drawTask: ie, drawBackgroundRect: ae, getTextObj: oe, getNoteRect: B, initGraphics: se, drawNode: ce, getVirtualNodeHeight: le }, de = n(function(e2, t2, n2, i2) {
  var _a, _b, _c;
  let a2 = o(), { look: s2, theme: c2, themeVariables: u2 } = a2, { useGradient: d2, gradientStart: f2, gradientStop: m2 } = u2, h2 = ((_a = a2.timeline) == null ? void 0 : _a.leftMargin) ?? 50;
  l.debug(`timeline`, i2.db);
  let g2 = a2.securityLevel, _2;
  g2 === `sandbox` && (_2 = p(`#i` + t2));
  let v2 = p(g2 === `sandbox` ? _2.nodes()[0].contentDocument.body : `body`).select(`#` + t2);
  v2.append(`g`);
  let y2 = i2.db.getTasks(), b2 = i2.db.getCommonDb().getDiagramTitle();
  l.debug(`task`, y2), U.initGraphics(v2, t2);
  let x2 = i2.db.getSections();
  l.debug(`sections`, x2);
  let S2 = 0, C2 = 0, w2 = 0, T2 = 0, E2 = 50 + h2, D2 = 50;
  T2 = 50;
  let O2 = 0, k2 = true;
  x2.forEach(function(e3) {
    let t3 = { number: O2, descr: e3, section: O2, width: 150, padding: 20, maxHeight: S2 }, n3 = U.getVirtualNodeHeight(v2, t3, a2);
    l.debug(`sectionHeight before draw`, n3), S2 = Math.max(S2, n3 + 20);
  });
  let A2 = 0, j2 = 0;
  l.debug(`tasks.length`, y2.length);
  for (let [e3, t3] of y2.entries()) {
    let n3 = { number: e3, descr: t3, section: t3.section, width: 150, padding: 20, maxHeight: C2 }, r2 = U.getVirtualNodeHeight(v2, n3, a2);
    l.debug(`taskHeight before draw`, r2), C2 = Math.max(C2, r2 + 20), A2 = Math.max(A2, t3.events.length);
    let i3 = 0;
    for (let e4 of t3.events) {
      let n4 = { descr: e4, section: t3.section, number: t3.section, width: 150, padding: 20, maxHeight: 50 };
      i3 += U.getVirtualNodeHeight(v2, n4, a2);
    }
    t3.events.length > 0 && (i3 += (t3.events.length - 1) * 10), j2 = Math.max(j2, i3);
  }
  l.debug(`maxSectionHeight before draw`, S2), l.debug(`maxTaskHeight before draw`, C2), x2 && x2.length > 0 ? x2.forEach((e3) => {
    let n3 = y2.filter((t3) => t3.section === e3), r2 = { number: O2, descr: e3, section: O2, width: 200 * Math.max(n3.length, 1) - 50, padding: 20, maxHeight: S2 };
    l.debug(`sectionNode`, r2);
    let i3 = v2.append(`g`), o2 = U.drawNode(i3, r2, O2, a2, t2);
    l.debug(`sectionNode output`, o2), i3.attr(`transform`, `translate(${E2}, ${T2})`), D2 += S2 + 50, n3.length > 0 && W(v2, n3, O2, E2, D2, C2, a2, A2, j2, S2, false, t2), E2 += 200 * Math.max(n3.length, 1), D2 = T2, O2++;
  }) : (k2 = false, W(v2, y2, O2, E2, D2, C2, a2, A2, j2, S2, true, t2));
  let M2 = v2.node().getBBox();
  if (l.debug(`bounds`, M2), b2 && v2.append(`text`).text(b2).attr(`x`, s2 === `neo` ? M2.x * 2 + h2 : M2.width / 2 - h2).attr(`font-size`, `4ex`).attr(`font-weight`, `bold`).attr(`y`, 20), w2 = k2 ? S2 + C2 + 150 : C2 + 100, v2.append(`g`).attr(`class`, `lineWrapper`).append(`line`).attr(`x1`, h2).attr(`y1`, w2).attr(`x2`, M2.width + 3 * h2).attr(`y2`, w2).attr(`stroke-width`, 4).attr(`stroke`, `black`).attr(`marker-end`, `url(#${t2}-arrowhead)`), s2 === `neo` && d2 && c2 !== `neutral`) {
    let e3 = v2.select(`defs`), t3 = (e3.empty() ? v2.append(`defs`) : e3).append(`linearGradient`).attr(`id`, v2.attr(`id`) + `-gradient`).attr(`gradientUnits`, `objectBoundingBox`).attr(`x1`, `0%`).attr(`y1`, `0%`).attr(`x2`, `100%`).attr(`y2`, `0%`);
    t3.append(`stop`).attr(`offset`, `0%`).attr(`stop-color`, f2).attr(`stop-opacity`, 1), t3.append(`stop`).attr(`offset`, `100%`).attr(`stop-color`, m2).attr(`stop-opacity`, 1);
  }
  r(void 0, v2, ((_b = a2.timeline) == null ? void 0 : _b.padding) ?? 50, ((_c = a2.timeline) == null ? void 0 : _c.useMaxWidth) ?? false);
}, `draw`), W = n(function(e2, t2, n2, r2, i2, a2, o2, s2, c2, u2, d2, f2) {
  var _a;
  for (let s3 of t2) {
    let t3 = { descr: s3.task, section: n2, number: n2, width: 150, padding: 20, maxHeight: a2 };
    l.debug(`taskNode`, t3);
    let u3 = e2.append(`g`).attr(`class`, `taskWrapper`), p2 = U.drawNode(u3, t3, n2, o2, f2).height;
    if (l.debug(`taskHeight after draw`, p2), u3.attr(`transform`, `translate(${r2}, ${i2})`), a2 = Math.max(a2, p2), s3.events) {
      let t4 = e2.append(`g`).attr(`class`, `lineWrapper`), l2 = a2;
      i2 += 100, l2 += fe(e2, s3.events, n2, r2, i2, o2, f2), i2 -= 100, t4.append(`line`).attr(`x1`, r2 + 190 / 2).attr(`y1`, i2 + a2).attr(`x2`, r2 + 190 / 2).attr(`y2`, i2 + a2 + 100 + c2 + 100).attr(`stroke-width`, 2).attr(`stroke`, `black`).attr(`marker-end`, `url(#${f2}-arrowhead)`).attr(`stroke-dasharray`, `5,5`);
    }
    r2 += 200, d2 && !((_a = o2.timeline) == null ? void 0 : _a.disableMulticolor) && n2++;
  }
  i2 -= 10;
}, `drawTasks`), fe = n(function(e2, t2, n2, r2, i2, a2, o2) {
  let s2 = 0, c2 = i2;
  i2 += 100;
  for (let c3 of t2) {
    let t3 = { descr: c3, section: n2, number: n2, width: 150, padding: 20, maxHeight: 50 };
    l.debug(`eventNode`, t3);
    let u2 = e2.append(`g`).attr(`class`, `eventWrapper`), d2 = U.drawNode(u2, t3, n2, a2, o2, true).height;
    s2 += d2, u2.attr(`transform`, `translate(${r2}, ${i2})`), i2 = i2 + 10 + d2;
  }
  return i2 = c2, s2;
}, `drawEvents`), pe = { setConf: n(() => {
}, `setConf`), draw: de }, G = 200, K = 5, me = G + K * 2, q = G + 100, he = q + K * 2, J = 10, ge = 0, Y = 20, X = 20, Z = 30, Q = 50, _e = n(function(e2, t2, n2, s2) {
  var _a, _b, _c, _d, _e2;
  let c2 = o(), u2 = ((_a = c2.timeline) == null ? void 0 : _a.leftMargin) ?? 50;
  l.debug(`timeline`, s2.db);
  let d2 = i(t2);
  d2.append(`g`);
  let f2 = s2.db.getTasks(), p2 = s2.db.getCommonDb().getDiagramTitle();
  l.debug(`task`, f2), U.initGraphics(d2);
  let m2 = s2.db.getSections();
  l.debug(`sections`, m2);
  let h2 = 0, g2 = 0, _2 = 50 + u2, v2 = 50, y2 = v2, b2 = _2, x2 = me + X, S2 = he + Q, C2 = b2 + x2, w2 = 0, T2 = m2 && m2.length > 0, E2 = T2 ? C2 : _2 + x2, D2 = Math.max(50, x2 + S2 - K * 2);
  m2.forEach(function(e3) {
    let t3 = { number: w2, descr: e3, section: w2, width: D2, padding: K, maxHeight: h2 }, n3 = U.getVirtualNodeHeight(d2, t3, c2);
    l.debug(`sectionHeight before draw`, n3), h2 = Math.max(h2, n3);
  });
  let O2 = 0;
  l.debug(`tasks.length`, f2.length);
  for (let [e3, t3] of f2.entries()) {
    let n3 = { number: e3, descr: t3, section: t3.section, width: G, padding: K, maxHeight: g2 }, r2 = U.getVirtualNodeHeight(d2, n3, c2);
    l.debug(`taskHeight before draw`, r2), g2 = Math.max(g2, r2);
    let i2 = 0;
    for (let e4 of t3.events) {
      let n4 = { descr: e4, section: t3.section, number: t3.section, width: q, padding: K, maxHeight: 50 };
      i2 += U.getVirtualNodeHeight(d2, n4, c2);
    }
    t3.events.length > 0 && (i2 += (t3.events.length - 1) * J), O2 = Math.max(O2, i2) + ge;
  }
  l.debug(`maxSectionHeight before draw`, h2), l.debug(`maxTaskHeight before draw`, g2);
  let k2 = Math.max(g2, O2) + Z;
  T2 ? m2.forEach((e3) => {
    let t3 = f2.filter((t4) => t4.section === e3), n3 = { number: w2, descr: e3, section: w2, width: D2, padding: K, maxHeight: h2 };
    l.debug(`sectionNode`, n3);
    let r2 = d2.append(`g`), i2 = U.drawNode(r2, n3, w2, c2);
    l.debug(`sectionNode output`, i2);
    let a2 = E2 - x2;
    r2.attr(`transform`, `translate(${a2}, ${v2})`);
    let o2 = v2 + i2.height + Y;
    t3.length > 0 && $(d2, t3, w2, E2, o2, g2, c2, k2, false);
    let s3 = t3.length, u3 = i2.height + Y + k2 * Math.max(s3, 1) - (s3 > 0 ? Z * 2 : 0);
    v2 += u3, w2++;
  }) : $(d2, f2, w2, E2, v2, g2, c2, k2, true);
  let A2 = (_b = d2.node()) == null ? void 0 : _b.getBBox();
  if (!A2) throw Error(`bbox not found`);
  if (l.debug(`bounds`, A2), p2) {
    if (d2.append(`text`).text(p2).attr(`x`, A2.width / 2 - u2).attr(`font-size`, `4ex`).attr(`font-weight`, `bold`).attr(`y`, 20), A2 = (_c = d2.node()) == null ? void 0 : _c.getBBox(), !A2) throw Error(`bbox not found`);
    l.debug(`bounds after title`, A2);
  }
  let [j2] = a(c2.fontSize), M2 = (j2 ?? 16) * 2, N2 = (j2 ?? 16) * 0.5 + 20, P2 = d2.append(`g`).attr(`class`, `lineWrapper`);
  P2.append(`line`).attr(`x1`, E2).attr(`y1`, y2 - M2).attr(`x2`, E2).attr(`y2`, A2.y + A2.height + N2).attr(`stroke-width`, 4).attr(`stroke`, `black`).attr(`marker-end`, `url(#arrowhead)`), P2.lower(), r(void 0, d2, ((_d = c2.timeline) == null ? void 0 : _d.padding) ?? 50, ((_e2 = c2.timeline) == null ? void 0 : _e2.useMaxWidth) ?? false);
}, `draw`), $ = n(function(e2, t2, n2, r2, i2, a2, o2, s2, c2) {
  var _a;
  for (let u2 of t2) {
    let t3 = { descr: u2.task, section: n2, number: n2, width: G, padding: K, maxHeight: a2 };
    l.debug(`taskNode`, t3);
    let d2 = e2.append(`g`).attr(`class`, `taskWrapper`), f2 = U.drawNode(d2, t3, n2, o2), p2 = f2.height;
    l.debug(`taskHeight after draw`, p2);
    let m2 = r2 - X - f2.width;
    if (d2.attr(`transform`, `translate(${m2}, ${i2})`), a2 = Math.max(a2, p2), u2.events && u2.events.length > 0) {
      let t4 = i2, a3 = r2 + Q;
      ve(e2, u2.events, n2, r2, a3, t4, o2);
    }
    i2 += s2, c2 && !((_a = o2.timeline) == null ? void 0 : _a.disableMulticolor) && n2++;
  }
}, `drawTasks`), ve = n(function(e2, t2, n2, r2, i2, a2, o2) {
  let s2 = a2;
  for (let a3 of t2) {
    let t3 = { descr: a3, section: n2, number: n2, width: q, padding: K, maxHeight: 0 };
    l.debug(`eventNode`, t3);
    let c2 = e2.append(`g`).attr(`class`, `eventWrapper`), u2 = U.drawNode(c2, t3, n2, o2).height;
    c2.attr(`transform`, `translate(${i2}, ${s2})`);
    let d2 = e2.append(`g`).attr(`class`, `lineWrapper`), f2 = s2 + u2 / 2;
    d2.append(`line`).attr(`x1`, r2).attr(`y1`, f2).attr(`x2`, i2).attr(`y2`, f2).attr(`stroke-width`, 2).attr(`stroke`, `black`).attr(`marker-end`, `url(#arrowhead)`).attr(`stroke-dasharray`, `5,5`), s2 = s2 + u2 + J;
  }
  return s2 - a2;
}, `drawEvents`), ye = { setConf: n(() => {
}, `setConf`), draw: _e }, be = n((e2) => {
  var _a;
  let { theme: t2 } = m(), n2 = t2 == null ? void 0 : t2.includes(`dark`), r2 = t2 == null ? void 0 : t2.includes(`color`), i2 = ((_a = e2.svgId) == null ? void 0 : _a.replace(/^#/, ``)) ?? ``, a2 = i2 ? `url(#${i2}-drop-shadow)` : e2.dropShadow ?? `none`, o2 = ``;
  for (let t3 = 0; t3 < e2.THEME_COLOR_LIMIT; t3++) {
    let i3 = `${17 - 3 * t3}`, s2 = r2 ? e2.borderColorArray[t3] : e2.mainBkg, c2 = r2 ? e2.borderColorArray[t3] : e2.nodeBorder;
    o2 += `
    .section-${t3 - 1} rect,
    .section-${t3 - 1} path,
    .section-${t3 - 1} circle {
      fill: ${n2 && r2 ? e2.mainBkg : s2};
      stroke: ${c2};
      stroke-width: ${e2.strokeWidth};
      filter: ${a2};
    }

    .section-${t3 - 1} text {
      fill: ${e2.nodeBorder};
      font-weight: ${e2.fontWeight}
    }

    .node-icon-${t3 - 1} {
      font-size: 40px;
      color: ${e2[`cScaleLabel` + t3]};
    }

    .section-edge-${t3 - 1} {
      stroke: ${e2[`cScale` + t3]};
    }

    .edge-depth-${t3 - 1} {
      stroke-width: ${i3};
    }

    .section-${t3 - 1} line {
      stroke: ${e2[`cScaleInv` + t3]};
      stroke-width: 3;
    }

    .lineWrapper line {
      stroke: ${e2.nodeBorder};
      stroke-width:${e2.strokeWidth}
    }

    .disabled,
    .disabled circle,
    .disabled text {
      fill: ${e2.tertiaryColor ?? `lightgray`};
    }

    .disabled text {
      fill: ${e2.clusterBorder ?? `#efefef`};
    }
    `;
  }
  return o2;
}, `genReduxSections`), xe = n((e2) => {
  let n2 = ``;
  for (let n3 = 0; n3 < e2.THEME_COLOR_LIMIT; n3++) e2[`lineColor` + n3] = e2[`lineColor` + n3] || e2[`cScaleInv` + n3], s(e2[`lineColor` + n3]) ? e2[`lineColor` + n3] = c(e2[`lineColor` + n3], 20) : e2[`lineColor` + n3] = t(e2[`lineColor` + n3], 20);
  for (let t2 = 0; t2 < e2.THEME_COLOR_LIMIT; t2++) {
    let r2 = `` + (17 - 3 * t2);
    n2 += `
    .section-${t2 - 1} rect, .section-${t2 - 1} path, .section-${t2 - 1} circle, .section-${t2 - 1} path  {
      fill: ${e2[`cScale` + t2]};
    }
    .section-${t2 - 1} text {
     fill: ${e2[`cScaleLabel` + t2]};
    }
    .node-icon-${t2 - 1} {
      font-size: 40px;
      color: ${e2[`cScaleLabel` + t2]};
    }
    .section-edge-${t2 - 1}{
      stroke: ${e2[`cScale` + t2]};
    }
    .edge-depth-${t2 - 1}{
      stroke-width: ${r2};
    }
    .section-${t2 - 1} line {
      stroke: ${e2[`cScaleInv` + t2]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${e2[`cScaleLabel` + t2]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: ${e2.tertiaryColor ?? `lightgray`};
    }
    .disabled text {
      fill: ${e2.clusterBorder ?? `#efefef`};
    }
    `;
  }
  return n2;
}, `genSections`), Se = { db: _, renderer: { setConf: n(() => {
}, `setConf`), draw: n((e2, t2, n2, r2) => {
  var _a, _b;
  return (((_b = (_a = r2 == null ? void 0 : r2.db) == null ? void 0 : _a.getDirection) == null ? void 0 : _b.call(_a)) ?? `LR`) === `TD` ? ye.draw(e2, t2, n2, r2) : pe.draw(e2, t2, n2, r2);
}, `draw`) }, parser: g, styles: n((e2) => {
  var _a;
  let { theme: t2 } = m(), n2 = t2 == null ? void 0 : t2.includes(`redux`), r2 = t2 === `neutral`, i2 = ((_a = e2.svgId) == null ? void 0 : _a.replace(/^#/, ``)) ?? ``, a2 = ``;
  if (e2.useGradient && i2 && e2.THEME_COLOR_LIMIT && !r2) for (let t3 = 0; t3 < e2.THEME_COLOR_LIMIT; t3++) a2 += `
      .section-${t3 - 1}[data-look="neo"] rect,
      .section-${t3 - 1}[data-look="neo"] path,
      .section-${t3 - 1}[data-look="neo"] circle {
        fill: ${e2.mainBkg};
        stroke: url(#${i2}-gradient);
        stroke-width: 2;
      }
      .section-${t3 - 1}[data-look="neo"] line {
        stroke: url(#${i2}-gradient);
        stroke-width: 2;
      }`;
  return `
  .edge {
    stroke-width: 3;
  }
  ${n2 ? be(e2) : xe(e2)}
  ${a2}
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
`;
}, `getStyles`) };
export {
  Se as diagram
};
