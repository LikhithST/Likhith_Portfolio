import { t as e } from "./arc-DfjZgq6W.js";
import { Cn as t, In as n, Jn as r, Nn as i, Pn as a, Sn as o, bn as s, gn as c, pn as l, un as u, yn as d } from "./index-4Ava25sD.js";
import { t as f } from "./chunk-FMBD7UC4-BgifVydb.js";
import { a as p, n as m, o as h, s as g } from "./chunk-YZCP3GAM-DjmNMGdR.js";
var _ = (function() {
  var e2 = r(function(e3, t3, n3, r2) {
    for (n3 || (n3 = {}), r2 = e3.length; r2--; n3[e3[r2]] = t3) ;
    return n3;
  }, `o`), t2 = [6, 8, 10, 11, 12, 14, 16, 17, 18], n2 = [1, 9], i2 = [1, 10], a2 = [1, 11], o2 = [1, 12], s2 = [1, 13], c2 = [1, 14], l2 = { trace: r(function() {
  }, `trace`), yy: {}, symbols_: { error: 2, start: 3, journey: 4, document: 5, EOF: 6, line: 7, SPACE: 8, statement: 9, NEWLINE: 10, title: 11, acc_title: 12, acc_title_value: 13, acc_descr: 14, acc_descr_value: 15, acc_descr_multiline_value: 16, section: 17, taskName: 18, taskData: 19, $accept: 0, $end: 1 }, terminals_: { 2: `error`, 4: `journey`, 6: `EOF`, 8: `SPACE`, 10: `NEWLINE`, 11: `title`, 12: `acc_title`, 13: `acc_title_value`, 14: `acc_descr`, 15: `acc_descr_value`, 16: `acc_descr_multiline_value`, 17: `section`, 18: `taskName`, 19: `taskData` }, productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 1], [9, 2]], performAction: r(function(e3, t3, n3, r2, i3, a3, o3) {
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
        r2.setDiagramTitle(a3[s3].substr(6)), this.$ = a3[s3].substr(6);
        break;
      case 9:
        this.$ = a3[s3].trim(), r2.setAccTitle(this.$);
        break;
      case 10:
      case 11:
        this.$ = a3[s3].trim(), r2.setAccDescription(this.$);
        break;
      case 12:
        r2.addSection(a3[s3].substr(8)), this.$ = a3[s3].substr(8);
        break;
      case 13:
        r2.addTask(a3[s3 - 1], a3[s3]), this.$ = `task`;
        break;
    }
  }, `anonymous`), table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, e2(t2, [2, 2], { 5: 3 }), { 6: [1, 4], 7: 5, 8: [1, 6], 9: 7, 10: [1, 8], 11: n2, 12: i2, 14: a2, 16: o2, 17: s2, 18: c2 }, e2(t2, [2, 7], { 1: [2, 1] }), e2(t2, [2, 3]), { 9: 15, 11: n2, 12: i2, 14: a2, 16: o2, 17: s2, 18: c2 }, e2(t2, [2, 5]), e2(t2, [2, 6]), e2(t2, [2, 8]), { 13: [1, 16] }, { 15: [1, 17] }, e2(t2, [2, 11]), e2(t2, [2, 12]), { 19: [1, 18] }, e2(t2, [2, 4]), e2(t2, [2, 9]), e2(t2, [2, 10]), e2(t2, [2, 13])], defaultActions: {}, parseError: r(function(e3, t3) {
    if (t3.recoverable) this.trace(e3);
    else {
      var n3 = Error(e3);
      throw n3.hash = t3, n3;
    }
  }, `parseError`), parse: r(function(e3) {
    var t3 = this, n3 = [0], i3 = [], a3 = [null], o3 = [], s3 = this.table, c3 = ``, l3 = 0, u3 = 0, d2 = 0, f2 = 2, p2 = 1, m2 = o3.slice.call(arguments, 1), h2 = Object.create(this.lexer), g2 = { yy: {} };
    for (var _2 in this.yy) Object.prototype.hasOwnProperty.call(this.yy, _2) && (g2.yy[_2] = this.yy[_2]);
    h2.setInput(e3, g2.yy), g2.yy.lexer = h2, g2.yy.parser = this, h2.yylloc === void 0 && (h2.yylloc = {});
    var v2 = h2.yylloc;
    o3.push(v2);
    var y2 = h2.options && h2.options.ranges;
    typeof g2.yy.parseError == `function` ? this.parseError = g2.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
    function b2(e4) {
      n3.length -= 2 * e4, a3.length -= e4, o3.length -= e4;
    }
    r(b2, `popStack`);
    function x2() {
      var e4 = i3.pop() || h2.lex() || p2;
      return typeof e4 != `number` && (e4 instanceof Array && (i3 = e4, e4 = i3.pop()), e4 = t3.symbols_[e4] || e4), e4;
    }
    r(x2, `lex`);
    for (var S2, C2, w2, T2, E2, D2 = {}, O2, k2, A2, j2; ; ) {
      if (w2 = n3[n3.length - 1], this.defaultActions[w2] ? T2 = this.defaultActions[w2] : (S2 ?? (S2 = x2()), T2 = s3[w2] && s3[w2][S2]), T2 === void 0 || !T2.length || !T2[0]) {
        var M2 = ``;
        for (O2 in j2 = [], s3[w2]) this.terminals_[O2] && O2 > f2 && j2.push(`'` + this.terminals_[O2] + `'`);
        M2 = h2.showPosition ? `Parse error on line ` + (l3 + 1) + `:
` + h2.showPosition() + `
Expecting ` + j2.join(`, `) + `, got '` + (this.terminals_[S2] || S2) + `'` : `Parse error on line ` + (l3 + 1) + `: Unexpected ` + (S2 == p2 ? `end of input` : `'` + (this.terminals_[S2] || S2) + `'`), this.parseError(M2, { text: h2.match, token: this.terminals_[S2] || S2, line: h2.yylineno, loc: v2, expected: j2 });
      }
      if (T2[0] instanceof Array && T2.length > 1) throw Error(`Parse Error: multiple actions possible at state: ` + w2 + `, token: ` + S2);
      switch (T2[0]) {
        case 1:
          n3.push(S2), a3.push(h2.yytext), o3.push(h2.yylloc), n3.push(T2[1]), S2 = null, C2 ? (S2 = C2, C2 = null) : (u3 = h2.yyleng, c3 = h2.yytext, l3 = h2.yylineno, v2 = h2.yylloc, d2 > 0 && d2--);
          break;
        case 2:
          if (k2 = this.productions_[T2[1]][1], D2.$ = a3[a3.length - k2], D2._$ = { first_line: o3[o3.length - (k2 || 1)].first_line, last_line: o3[o3.length - 1].last_line, first_column: o3[o3.length - (k2 || 1)].first_column, last_column: o3[o3.length - 1].last_column }, y2 && (D2._$.range = [o3[o3.length - (k2 || 1)].range[0], o3[o3.length - 1].range[1]]), E2 = this.performAction.apply(D2, [c3, u3, l3, g2.yy, T2[1], a3, o3].concat(m2)), E2 !== void 0) return E2;
          k2 && (n3 = n3.slice(0, -1 * k2 * 2), a3 = a3.slice(0, -1 * k2), o3 = o3.slice(0, -1 * k2)), n3.push(this.productions_[T2[1]][0]), a3.push(D2.$), o3.push(D2._$), A2 = s3[n3[n3.length - 2]][n3[n3.length - 1]], n3.push(A2);
          break;
        case 3:
          return true;
      }
    }
    return true;
  }, `parse`) };
  l2.lexer = (function() {
    return { EOF: 1, parseError: r(function(e3, t3) {
      if (this.yy.parser) this.yy.parser.parseError(e3, t3);
      else throw Error(e3);
    }, `parseError`), setInput: r(function(e3, t3) {
      return this.yy = t3 || this.yy || {}, this._input = e3, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = ``, this.conditionStack = [`INITIAL`], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
    }, `setInput`), input: r(function() {
      var e3 = this._input[0];
      return this.yytext += e3, this.yyleng++, this.offset++, this.match += e3, this.matched += e3, e3.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e3;
    }, `input`), unput: r(function(e3) {
      var t3 = e3.length, n3 = e3.split(/(?:\r\n?|\n)/g);
      this._input = e3 + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t3), this.offset -= t3;
      var r2 = this.match.split(/(?:\r\n?|\n)/g);
      this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n3.length - 1 && (this.yylineno -= n3.length - 1);
      var i3 = this.yylloc.range;
      return this.yylloc = { first_line: this.yylloc.first_line, last_line: this.yylineno + 1, first_column: this.yylloc.first_column, last_column: n3 ? (n3.length === r2.length ? this.yylloc.first_column : 0) + r2[r2.length - n3.length].length - n3[0].length : this.yylloc.first_column - t3 }, this.options.ranges && (this.yylloc.range = [i3[0], i3[0] + this.yyleng - t3]), this.yyleng = this.yytext.length, this;
    }, `unput`), more: r(function() {
      return this._more = true, this;
    }, `more`), reject: r(function() {
      if (this.options.backtrack_lexer) this._backtrack = true;
      else return this.parseError(`Lexical error on line ` + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), { text: ``, token: null, line: this.yylineno });
      return this;
    }, `reject`), less: r(function(e3) {
      this.unput(this.match.slice(e3));
    }, `less`), pastInput: r(function() {
      var e3 = this.matched.substr(0, this.matched.length - this.match.length);
      return (e3.length > 20 ? `...` : ``) + e3.substr(-20).replace(/\n/g, ``);
    }, `pastInput`), upcomingInput: r(function() {
      var e3 = this.match;
      return e3.length < 20 && (e3 += this._input.substr(0, 20 - e3.length)), (e3.substr(0, 20) + (e3.length > 20 ? `...` : ``)).replace(/\n/g, ``);
    }, `upcomingInput`), showPosition: r(function() {
      var e3 = this.pastInput(), t3 = Array(e3.length + 1).join(`-`);
      return e3 + this.upcomingInput() + `
` + t3 + `^`;
    }, `showPosition`), test_match: r(function(e3, t3) {
      var n3, r2, i3;
      if (this.options.backtrack_lexer && (i3 = { yylineno: this.yylineno, yylloc: { first_line: this.yylloc.first_line, last_line: this.last_line, first_column: this.yylloc.first_column, last_column: this.yylloc.last_column }, yytext: this.yytext, match: this.match, matches: this.matches, matched: this.matched, yyleng: this.yyleng, offset: this.offset, _more: this._more, _input: this._input, yy: this.yy, conditionStack: this.conditionStack.slice(0), done: this.done }, this.options.ranges && (i3.yylloc.range = this.yylloc.range.slice(0))), r2 = e3[0].match(/(?:\r\n?|\n).*/g), r2 && (this.yylineno += r2.length), this.yylloc = { first_line: this.yylloc.last_line, last_line: this.yylineno + 1, first_column: this.yylloc.last_column, last_column: r2 ? r2[r2.length - 1].length - r2[r2.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e3[0].length }, this.yytext += e3[0], this.match += e3[0], this.matches = e3, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(e3[0].length), this.matched += e3[0], n3 = this.performAction.call(this, this.yy, this, t3, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), n3) return n3;
      if (this._backtrack) {
        for (var a3 in i3) this[a3] = i3[a3];
        return false;
      }
      return false;
    }, `test_match`), next: r(function() {
      if (this.done) return this.EOF;
      this._input || (this.done = true);
      var e3, t3, n3, r2;
      this._more || (this.yytext = ``, this.match = ``);
      for (var i3 = this._currentRules(), a3 = 0; a3 < i3.length; a3++) if (n3 = this._input.match(this.rules[i3[a3]]), n3 && (!t3 || n3[0].length > t3[0].length)) {
        if (t3 = n3, r2 = a3, this.options.backtrack_lexer) {
          if (e3 = this.test_match(n3, i3[a3]), e3 !== false) return e3;
          if (this._backtrack) {
            t3 = false;
            continue;
          } else return false;
        } else if (!this.options.flex) break;
      }
      return t3 ? (e3 = this.test_match(t3, i3[r2]), e3 === false ? false : e3) : this._input === `` ? this.EOF : this.parseError(`Lexical error on line ` + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: ``, token: null, line: this.yylineno });
    }, `next`), lex: r(function() {
      return this.next() || this.lex();
    }, `lex`), begin: r(function(e3) {
      this.conditionStack.push(e3);
    }, `begin`), popState: r(function() {
      return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
    }, `popState`), _currentRules: r(function() {
      return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
    }, `_currentRules`), topState: r(function(e3) {
      return e3 = this.conditionStack.length - 1 - Math.abs(e3 || 0), e3 >= 0 ? this.conditionStack[e3] : `INITIAL`;
    }, `topState`), pushState: r(function(e3) {
      this.begin(e3);
    }, `pushState`), stateStackSize: r(function() {
      return this.conditionStack.length;
    }, `stateStackSize`), options: { "case-insensitive": true }, performAction: r(function(e3, t3, n3, r2) {
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
          return 18;
        case 16:
          return 19;
        case 17:
          return `:`;
        case 18:
          return 6;
        case 19:
          return `INVALID`;
      }
    }, `anonymous`), rules: [/^(?:%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:journey\b)/i, /^(?:title\s[^#\n;]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:section\s[^#:\n;]+)/i, /^(?:[^#:\n;]+)/i, /^(?::[^#\n;]+)/i, /^(?::)/i, /^(?:$)/i, /^(?:.)/i], conditions: { acc_descr_multiline: { rules: [12, 13], inclusive: false }, acc_descr: { rules: [10], inclusive: false }, acc_title: { rules: [8], inclusive: false }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 19], inclusive: true } } };
  })();
  function u2() {
    this.yy = {};
  }
  return r(u2, `Parser`), u2.prototype = l2, l2.Parser = u2, new u2();
})();
_.parser = _;
var v = _, y = ``, b = [], x = [], S = [], C = r(function() {
  b.length = 0, x.length = 0, y = ``, S.length = 0, l();
}, `clear`), w = r(function(e2) {
  y = e2, b.push(e2);
}, `addSection`), T = r(function() {
  return b;
}, `getSections`), E = r(function() {
  let e2 = A(), t2 = 0;
  for (; !e2 && t2 < 100; ) e2 = A(), t2++;
  return x.push(...S), x;
}, `getTasks`), D = r(function() {
  let e2 = [];
  return x.forEach((t2) => {
    t2.people && e2.push(...t2.people);
  }), [...new Set(e2)].sort();
}, `updateActors`), O = r(function(e2, t2) {
  let n2 = t2.substr(1).split(`:`), r2 = 0, i2 = [];
  n2.length === 1 ? (r2 = Number(n2[0]), i2 = []) : (r2 = Number(n2[0]), i2 = n2[1].split(`,`));
  let a2 = i2.map((e3) => e3.trim()), o2 = { section: y, type: y, people: a2, task: e2, score: r2 };
  S.push(o2);
}, `addTask`), k = r(function(e2) {
  let t2 = { section: y, type: y, description: e2, task: e2, classes: [] };
  x.push(t2);
}, `addTaskOrg`), A = r(function() {
  let e2 = r(function(e3) {
    return S[e3].processed;
  }, `compileTask`), t2 = true;
  for (let [n2, r2] of S.entries()) e2(n2), t2 && (t2 = r2.processed);
  return t2;
}, `compileTasks`), j = { getConfig: r(() => o().journey, `getConfig`), clear: C, setDiagramTitle: n, getDiagramTitle: t, setAccTitle: a, getAccTitle: s, setAccDescription: i, getAccDescription: d, addSection: w, getSections: T, getTasks: E, addTask: O, addTaskOrg: k, getActors: r(function() {
  return D();
}, `getActors`) }, M = r((e2) => `.label {
    font-family: ${e2.fontFamily};
    color: ${e2.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${e2.textColor}
  }

  .legend {
    fill: ${e2.textColor};
    font-family: ${e2.fontFamily};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${e2.textColor}
  }

  .face {
    ${e2.faceColor ? `fill: ${e2.faceColor}` : `fill: #FFF8DC`};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e2.mainBkg};
    stroke: ${e2.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e2.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e2.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${e2.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e2.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${e2.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e2.fontFamily};
    font-size: 12px;
    background: ${e2.tertiaryColor};
    border: 1px solid ${e2.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${e2.fillType0 ? `fill: ${e2.fillType0}` : ``};
  }
  .task-type-1, .section-type-1  {
    ${e2.fillType0 ? `fill: ${e2.fillType1}` : ``};
  }
  .task-type-2, .section-type-2  {
    ${e2.fillType0 ? `fill: ${e2.fillType2}` : ``};
  }
  .task-type-3, .section-type-3  {
    ${e2.fillType0 ? `fill: ${e2.fillType3}` : ``};
  }
  .task-type-4, .section-type-4  {
    ${e2.fillType0 ? `fill: ${e2.fillType4}` : ``};
  }
  .task-type-5, .section-type-5  {
    ${e2.fillType0 ? `fill: ${e2.fillType5}` : ``};
  }
  .task-type-6, .section-type-6  {
    ${e2.fillType0 ? `fill: ${e2.fillType6}` : ``};
  }
  .task-type-7, .section-type-7  {
    ${e2.fillType0 ? `fill: ${e2.fillType7}` : ``};
  }

  .actor-0 {
    ${e2.actor0 ? `fill: ${e2.actor0}` : ``};
  }
  .actor-1 {
    ${e2.actor1 ? `fill: ${e2.actor1}` : ``};
  }
  .actor-2 {
    ${e2.actor2 ? `fill: ${e2.actor2}` : ``};
  }
  .actor-3 {
    ${e2.actor3 ? `fill: ${e2.actor3}` : ``};
  }
  .actor-4 {
    ${e2.actor4 ? `fill: ${e2.actor4}` : ``};
  }
  .actor-5 {
    ${e2.actor5 ? `fill: ${e2.actor5}` : ``};
  }
  ${f()}
`, `getStyles`), N = r(function(e2, t2) {
  return p(e2, t2);
}, `drawRect`), P = r(function(t2, n2) {
  let i2 = t2.append(`circle`).attr(`cx`, n2.cx).attr(`cy`, n2.cy).attr(`class`, `face`).attr(`r`, 15).attr(`stroke-width`, 2).attr(`overflow`, `visible`), a2 = t2.append(`g`);
  a2.append(`circle`).attr(`cx`, n2.cx - 15 / 3).attr(`cy`, n2.cy - 15 / 3).attr(`r`, 1.5).attr(`stroke-width`, 2).attr(`fill`, `#666`).attr(`stroke`, `#666`), a2.append(`circle`).attr(`cx`, n2.cx + 15 / 3).attr(`cy`, n2.cy - 15 / 3).attr(`r`, 1.5).attr(`stroke-width`, 2).attr(`fill`, `#666`).attr(`stroke`, `#666`);
  function o2(t3) {
    let r2 = e().startAngle(Math.PI / 2).endAngle(3 * (Math.PI / 2)).innerRadius(15 / 2).outerRadius(15 / 2.2);
    t3.append(`path`).attr(`class`, `mouth`).attr(`d`, r2).attr(`transform`, `translate(` + n2.cx + `,` + (n2.cy + 2) + `)`);
  }
  r(o2, `smile`);
  function s2(t3) {
    let r2 = e().startAngle(3 * Math.PI / 2).endAngle(5 * (Math.PI / 2)).innerRadius(15 / 2).outerRadius(15 / 2.2);
    t3.append(`path`).attr(`class`, `mouth`).attr(`d`, r2).attr(`transform`, `translate(` + n2.cx + `,` + (n2.cy + 7) + `)`);
  }
  r(s2, `sad`);
  function c2(e2) {
    e2.append(`line`).attr(`class`, `mouth`).attr(`stroke`, 2).attr(`x1`, n2.cx - 5).attr(`y1`, n2.cy + 7).attr(`x2`, n2.cx + 5).attr(`y2`, n2.cy + 7).attr(`class`, `mouth`).attr(`stroke-width`, `1px`).attr(`stroke`, `#666`);
  }
  return r(c2, `ambivalent`), n2.score > 3 ? o2(a2) : n2.score < 3 ? s2(a2) : c2(a2), i2;
}, `drawFace`), F = r(function(e2, t2) {
  let n2 = e2.append(`circle`);
  return n2.attr(`cx`, t2.cx), n2.attr(`cy`, t2.cy), n2.attr(`class`, `actor-` + t2.pos), n2.attr(`fill`, t2.fill), n2.attr(`stroke`, t2.stroke), n2.attr(`r`, t2.r), n2.class !== void 0 && n2.attr(`class`, n2.class), t2.title !== void 0 && n2.append(`title`).text(t2.title), n2;
}, `drawCircle`), I = r(function(e2, t2) {
  return h(e2, t2);
}, `drawText`), L = r(function(e2, t2) {
  function n2(e3, t3, n3, r2, i3) {
    return e3 + `,` + t3 + ` ` + (e3 + n3) + `,` + t3 + ` ` + (e3 + n3) + `,` + (t3 + r2 - i3) + ` ` + (e3 + n3 - i3 * 1.2) + `,` + (t3 + r2) + ` ` + e3 + `,` + (t3 + r2);
  }
  r(n2, `genPoints`);
  let i2 = e2.append(`polygon`);
  i2.attr(`points`, n2(t2.x, t2.y, 50, 20, 7)), i2.attr(`class`, `labelBox`), t2.y += t2.labelMargin, t2.x += 0.5 * t2.labelMargin, I(e2, t2);
}, `drawLabel`), R = r(function(e2, t2, n2) {
  let r2 = e2.append(`g`), i2 = g();
  i2.x = t2.x, i2.y = t2.y, i2.fill = t2.fill, i2.width = n2.width * t2.taskCount + n2.diagramMarginX * (t2.taskCount - 1), i2.height = n2.height, i2.class = `journey-section section-type-` + t2.num, i2.rx = 3, i2.ry = 3, N(r2, i2), H(n2)(t2.text, r2, i2.x, i2.y, i2.width, i2.height, { class: `journey-section section-type-` + t2.num }, n2, t2.colour);
}, `drawSection`), z = -1, B = r(function(e2, t2, n2, r2) {
  let i2 = t2.x + n2.width / 2, a2 = e2.append(`g`);
  z++, a2.append(`line`).attr(`id`, r2 + `-task` + z).attr(`x1`, i2).attr(`y1`, t2.y).attr(`x2`, i2).attr(`y2`, 450).attr(`class`, `task-line`).attr(`stroke-width`, `1px`).attr(`stroke-dasharray`, `4 2`).attr(`stroke`, `#666`), P(a2, { cx: i2, cy: 300 + (5 - t2.score) * 30, score: t2.score });
  let o2 = g();
  o2.x = t2.x, o2.y = t2.y, o2.fill = t2.fill, o2.width = n2.width, o2.height = n2.height, o2.class = `task task-type-` + t2.num, o2.rx = 3, o2.ry = 3, N(a2, o2);
  let s2 = t2.x + 14;
  t2.people.forEach((e3) => {
    let n3 = t2.actors[e3].color;
    F(a2, { cx: s2, cy: t2.y, r: 7, fill: n3, stroke: `#000`, title: e3, pos: t2.actors[e3].position }), s2 += 10;
  }), H(n2)(t2.task, a2, o2.x, o2.y, o2.width, o2.height, { class: `task` }, n2, t2.colour);
}, `drawTask`), V = r(function(e2, t2) {
  m(e2, t2);
}, `drawBackgroundRect`), H = (function() {
  function e2(e3, t3, n3, r2, a2, o2, s2, c2) {
    i2(t3.append(`text`).attr(`x`, n3 + a2 / 2).attr(`y`, r2 + o2 / 2 + 5).style(`font-color`, c2).style(`text-anchor`, `middle`).text(e3), s2);
  }
  r(e2, `byText`);
  function t2(e3, t3, n3, r2, a2, o2, s2, c2, l2) {
    let { taskFontSize: u2, taskFontFamily: d2 } = c2, f2 = e3.split(/<br\s*\/?>/gi);
    for (let e4 = 0; e4 < f2.length; e4++) {
      let c3 = e4 * u2 - u2 * (f2.length - 1) / 2, p2 = t3.append(`text`).attr(`x`, n3 + a2 / 2).attr(`y`, r2).attr(`fill`, l2).style(`text-anchor`, `middle`).style(`font-size`, u2).style(`font-family`, d2);
      p2.append(`tspan`).attr(`x`, n3 + a2 / 2).attr(`dy`, c3).text(f2[e4]), p2.attr(`y`, r2 + o2 / 2).attr(`dominant-baseline`, `central`).attr(`alignment-baseline`, `central`), i2(p2, s2);
    }
  }
  r(t2, `byTspan`);
  function n2(e3, n3, r2, a2, o2, s2, c2, l2) {
    let u2 = n3.append(`switch`), d2 = u2.append(`foreignObject`).attr(`x`, r2).attr(`y`, a2).attr(`width`, o2).attr(`height`, s2).attr(`position`, `fixed`).append(`xhtml:div`).style(`display`, `table`).style(`height`, `100%`).style(`width`, `100%`);
    d2.append(`div`).attr(`class`, `label`).style(`display`, `table-cell`).style(`text-align`, `center`).style(`vertical-align`, `middle`).text(e3), t2(e3, u2, r2, a2, o2, s2, c2, l2), i2(d2, c2);
  }
  r(n2, `byFo`);
  function i2(e3, t3) {
    for (let n3 in t3) n3 in t3 && e3.attr(n3, t3[n3]);
  }
  return r(i2, `_setTextAttrs`), function(r2) {
    return r2.textPlacement === `fo` ? n2 : r2.textPlacement === `old` ? e2 : t2;
  };
})(), U = { drawRect: N, drawCircle: F, drawSection: R, drawText: I, drawLabel: L, drawTask: B, drawBackgroundRect: V, initGraphics: r(function(e2, t2) {
  z = -1, e2.append(`defs`).append(`marker`).attr(`id`, t2 + `-arrowhead`).attr(`refX`, 5).attr(`refY`, 2).attr(`markerWidth`, 6).attr(`markerHeight`, 4).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 0,0 V 4 L6,2 Z`);
}, `initGraphics`) }, W = r(function(e2) {
  Object.keys(e2).forEach(function(t2) {
    J[t2] = e2[t2];
  });
}, `setConf`), G = {}, K = 0;
function q(e2) {
  let t2 = o().journey, n2 = t2.maxLabelWidth;
  K = 0;
  let r2 = 60;
  Object.keys(G).forEach((i2) => {
    let a2 = G[i2].color, o2 = { cx: 20, cy: r2, r: 7, fill: a2, stroke: `#000`, pos: G[i2].position };
    U.drawCircle(e2, o2);
    let s2 = e2.append(`text`).attr(`visibility`, `hidden`).text(i2), c2 = s2.node().getBoundingClientRect().width;
    s2.remove();
    let l2 = [];
    if (c2 <= n2) l2 = [i2];
    else {
      let t3 = i2.split(` `), r3 = ``;
      s2 = e2.append(`text`).attr(`visibility`, `hidden`), t3.forEach((e3) => {
        let t4 = r3 ? `${r3} ${e3}` : e3;
        if (s2.text(t4), s2.node().getBoundingClientRect().width > n2) {
          if (r3 && l2.push(r3), r3 = e3, s2.text(e3), s2.node().getBoundingClientRect().width > n2) {
            let t5 = ``;
            for (let r4 of e3) t5 += r4, s2.text(t5 + `-`), s2.node().getBoundingClientRect().width > n2 && (l2.push(t5.slice(0, -1) + `-`), t5 = r4);
            r3 = t5;
          }
        } else r3 = t4;
      }), r3 && l2.push(r3), s2.remove();
    }
    l2.forEach((n3, i3) => {
      let a3 = { x: 40, y: r2 + 7 + i3 * 20, fill: `#666`, text: n3, textMargin: t2.boxTextMargin ?? 5 }, o3 = U.drawText(e2, a3).node().getBoundingClientRect().width;
      o3 > K && o3 > t2.leftMargin - o3 && (K = o3);
    }), r2 += Math.max(20, l2.length * 20);
  });
}
r(q, `drawActorLegend`);
var J = o().journey, Y = 0, ee = r(function(e2, t2, n2, r2) {
  let i2 = o(), a2 = i2.journey.titleColor, s2 = i2.journey.titleFontSize, l2 = i2.journey.titleFontFamily, d2 = i2.securityLevel, f2;
  d2 === `sandbox` && (f2 = u(`#i` + t2));
  let p2 = u(d2 === `sandbox` ? f2.nodes()[0].contentDocument.body : `body`);
  X.init();
  let m2 = p2.select(`#` + t2);
  U.initGraphics(m2, t2);
  let h2 = r2.db.getTasks(), g2 = r2.db.getDiagramTitle(), _2 = r2.db.getActors();
  for (let e3 in G) delete G[e3];
  let v2 = 0;
  _2.forEach((e3) => {
    G[e3] = { color: J.actorColours[v2 % J.actorColours.length], position: v2 }, v2++;
  }), q(m2), Y = J.leftMargin + K, X.insert(0, 0, Y, Object.keys(G).length * 50), te(m2, h2, 0, t2);
  let y2 = X.getBounds();
  g2 && m2.append(`text`).text(g2).attr(`x`, Y).attr(`font-size`, s2).attr(`font-weight`, `bold`).attr(`y`, 25).attr(`fill`, a2).attr(`font-family`, l2);
  let b2 = y2.stopy - y2.starty + 2 * J.diagramMarginY, x2 = Y + y2.stopx + 2 * J.diagramMarginX;
  c(m2, b2, x2, J.useMaxWidth), m2.append(`line`).attr(`x1`, Y).attr(`y1`, J.height * 4).attr(`x2`, x2 - Y - 4).attr(`y2`, J.height * 4).attr(`stroke-width`, 4).attr(`stroke`, `black`).attr(`marker-end`, `url(#` + t2 + `-arrowhead)`);
  let S2 = g2 ? 70 : 0;
  m2.attr(`viewBox`, `${y2.startx} -25 ${x2} ${b2 + S2}`), m2.attr(`preserveAspectRatio`, `xMinYMin meet`), m2.attr(`height`, b2 + S2 + 25);
}, `draw`), X = { data: { startx: void 0, stopx: void 0, starty: void 0, stopy: void 0 }, verticalPos: 0, sequenceItems: [], init: r(function() {
  this.sequenceItems = [], this.data = { startx: void 0, stopx: void 0, starty: void 0, stopy: void 0 }, this.verticalPos = 0;
}, `init`), updateVal: r(function(e2, t2, n2, r2) {
  e2[t2] === void 0 ? e2[t2] = n2 : e2[t2] = r2(n2, e2[t2]);
}, `updateVal`), updateBounds: r(function(e2, t2, n2, i2) {
  let a2 = o().journey, s2 = this, c2 = 0;
  function l2(o2) {
    return r(function(r2) {
      c2++;
      let l3 = s2.sequenceItems.length - c2 + 1;
      s2.updateVal(r2, `starty`, t2 - l3 * a2.boxMargin, Math.min), s2.updateVal(r2, `stopy`, i2 + l3 * a2.boxMargin, Math.max), s2.updateVal(X.data, `startx`, e2 - l3 * a2.boxMargin, Math.min), s2.updateVal(X.data, `stopx`, n2 + l3 * a2.boxMargin, Math.max), o2 !== `activation` && (s2.updateVal(r2, `startx`, e2 - l3 * a2.boxMargin, Math.min), s2.updateVal(r2, `stopx`, n2 + l3 * a2.boxMargin, Math.max), s2.updateVal(X.data, `starty`, t2 - l3 * a2.boxMargin, Math.min), s2.updateVal(X.data, `stopy`, i2 + l3 * a2.boxMargin, Math.max));
    }, `updateItemBounds`);
  }
  r(l2, `updateFn`), this.sequenceItems.forEach(l2());
}, `updateBounds`), insert: r(function(e2, t2, n2, r2) {
  let i2 = Math.min(e2, n2), a2 = Math.max(e2, n2), o2 = Math.min(t2, r2), s2 = Math.max(t2, r2);
  this.updateVal(X.data, `startx`, i2, Math.min), this.updateVal(X.data, `starty`, o2, Math.min), this.updateVal(X.data, `stopx`, a2, Math.max), this.updateVal(X.data, `stopy`, s2, Math.max), this.updateBounds(i2, o2, a2, s2);
}, `insert`), bumpVerticalPos: r(function(e2) {
  this.verticalPos += e2, this.data.stopy = this.verticalPos;
}, `bumpVerticalPos`), getVerticalPos: r(function() {
  return this.verticalPos;
}, `getVerticalPos`), getBounds: r(function() {
  return this.data;
}, `getBounds`) }, Z = J.sectionFills, Q = J.sectionColours, te = r(function(e2, t2, n2, r2) {
  let i2 = o().journey, a2 = ``, s2 = n2 + (i2.height * 2 + i2.diagramMarginY), c2 = 0, l2 = `#CCC`, u2 = `black`, d2 = 0;
  for (let [n3, o2] of t2.entries()) {
    if (a2 !== o2.section) {
      l2 = Z[c2 % Z.length], d2 = c2 % Z.length, u2 = Q[c2 % Q.length];
      let r3 = 0, s3 = o2.section;
      for (let e3 = n3; e3 < t2.length && t2[e3].section == s3; e3++) r3 += 1;
      let f3 = { x: n3 * i2.taskMargin + n3 * i2.width + Y, y: 50, text: o2.section, fill: l2, num: d2, colour: u2, taskCount: r3 };
      U.drawSection(e2, f3, i2), a2 = o2.section, c2++;
    }
    let f2 = o2.people.reduce((e3, t3) => (G[t3] && (e3[t3] = G[t3]), e3), {});
    o2.x = n3 * i2.taskMargin + n3 * i2.width + Y, o2.y = s2, o2.width = i2.diagramMarginX, o2.height = i2.diagramMarginY, o2.colour = u2, o2.fill = l2, o2.num = d2, o2.actors = f2, U.drawTask(e2, o2, i2, r2), X.insert(o2.x, o2.y, o2.x + o2.width + i2.taskMargin, 450);
  }
}, `drawTasks`), $ = { setConf: W, draw: ee }, ne = { parser: v, db: j, renderer: $, styles: M, init: r((e2) => {
  $.setConf(e2.journey), j.clear();
}, `init`) };
export {
  ne as diagram
};
