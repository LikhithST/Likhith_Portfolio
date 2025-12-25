var _a, _b;
import { E as e, I as t, a as n, b as r, c as i, et as a, h as o, s, y as c } from "./chunk-ABZYJK2D-ODb6qSou.js";
import { g as l, h as u, p as d } from "./src-D8UWkQNo.js";
import { t as f } from "./channel-D2rbI65H.js";
import "./path-B-GLhb_8.js";
import "./math-O_7OW4FW.js";
import "./array-CopOK-GI.js";
import { U as p, a as m, g as h, l as g } from "./chunk-S3R3BYOJ-D8yhV3IZ.js";
import { t as _ } from "./line-DzDDQdde.js";
import { t as v } from "./chunk-HN2XXSSU-SCO0eetj.js";
import { t as y } from "./chunk-CVBHYZKI-9IS-TY3G.js";
import "./dist-DrVb-WkD.js";
import "./identity-IHMFXfGJ.js";
import { a as b, n as x } from "./chunk-JA3XYJ7Z-By1gQAUK.js";
import "./isEmpty-Suvitui-.js";
import "./reduce-S4_EnTW-.js";
import { t as S } from "./chunk-FMBD7UC4-CBN5yYuZ.js";
import { t as C } from "./graphlib-Ct7gWg8T.js";
import { t as w } from "./clone-Bi4b2wkd.js";
var T = (function() {
  var e2 = u(function(e3, t3, n3, r3) {
    for (n3 || (n3 = {}), r3 = e3.length; r3--; n3[e3[r3]] = t3) ;
    return n3;
  }, `o`), t2 = [1, 15], n2 = [1, 7], r2 = [1, 13], i2 = [1, 14], a2 = [1, 19], o2 = [1, 16], s2 = [1, 17], c2 = [1, 18], l2 = [8, 30], d2 = [8, 10, 21, 28, 29, 30, 31, 39, 43, 46], f2 = [1, 23], p2 = [1, 24], m2 = [8, 10, 15, 16, 21, 28, 29, 30, 31, 39, 43, 46], h2 = [8, 10, 15, 16, 21, 27, 28, 29, 30, 31, 39, 43, 46], g2 = [1, 49], _2 = { trace: u(function() {
  }, `trace`), yy: {}, symbols_: { error: 2, spaceLines: 3, SPACELINE: 4, NL: 5, separator: 6, SPACE: 7, EOF: 8, start: 9, BLOCK_DIAGRAM_KEY: 10, document: 11, stop: 12, statement: 13, link: 14, LINK: 15, START_LINK: 16, LINK_LABEL: 17, STR: 18, nodeStatement: 19, columnsStatement: 20, SPACE_BLOCK: 21, blockStatement: 22, classDefStatement: 23, cssClassStatement: 24, styleStatement: 25, node: 26, SIZE: 27, COLUMNS: 28, "id-block": 29, end: 30, NODE_ID: 31, nodeShapeNLabel: 32, dirList: 33, DIR: 34, NODE_DSTART: 35, NODE_DEND: 36, BLOCK_ARROW_START: 37, BLOCK_ARROW_END: 38, classDef: 39, CLASSDEF_ID: 40, CLASSDEF_STYLEOPTS: 41, DEFAULT: 42, class: 43, CLASSENTITY_IDS: 44, STYLECLASS: 45, style: 46, STYLE_ENTITY_IDS: 47, STYLE_DEFINITION_DATA: 48, $accept: 0, $end: 1 }, terminals_: { 2: `error`, 4: `SPACELINE`, 5: `NL`, 7: `SPACE`, 8: `EOF`, 10: `BLOCK_DIAGRAM_KEY`, 15: `LINK`, 16: `START_LINK`, 17: `LINK_LABEL`, 18: `STR`, 21: `SPACE_BLOCK`, 27: `SIZE`, 28: `COLUMNS`, 29: `id-block`, 30: `end`, 31: `NODE_ID`, 34: `DIR`, 35: `NODE_DSTART`, 36: `NODE_DEND`, 37: `BLOCK_ARROW_START`, 38: `BLOCK_ARROW_END`, 39: `classDef`, 40: `CLASSDEF_ID`, 41: `CLASSDEF_STYLEOPTS`, 42: `DEFAULT`, 43: `class`, 44: `CLASSENTITY_IDS`, 45: `STYLECLASS`, 46: `style`, 47: `STYLE_ENTITY_IDS`, 48: `STYLE_DEFINITION_DATA` }, productions_: [0, [3, 1], [3, 2], [3, 2], [6, 1], [6, 1], [6, 1], [9, 3], [12, 1], [12, 1], [12, 2], [12, 2], [11, 1], [11, 2], [14, 1], [14, 4], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [19, 3], [19, 2], [19, 1], [20, 1], [22, 4], [22, 3], [26, 1], [26, 2], [33, 1], [33, 2], [32, 3], [32, 4], [23, 3], [23, 3], [24, 3], [25, 3]], performAction: u(function(e3, t3, n3, r3, i3, a3, o3) {
    var s3 = a3.length - 1;
    switch (i3) {
      case 4:
        r3.getLogger().debug(`Rule: separator (NL) `);
        break;
      case 5:
        r3.getLogger().debug(`Rule: separator (Space) `);
        break;
      case 6:
        r3.getLogger().debug(`Rule: separator (EOF) `);
        break;
      case 7:
        r3.getLogger().debug(`Rule: hierarchy: `, a3[s3 - 1]), r3.setHierarchy(a3[s3 - 1]);
        break;
      case 8:
        r3.getLogger().debug(`Stop NL `);
        break;
      case 9:
        r3.getLogger().debug(`Stop EOF `);
        break;
      case 10:
        r3.getLogger().debug(`Stop NL2 `);
        break;
      case 11:
        r3.getLogger().debug(`Stop EOF2 `);
        break;
      case 12:
        r3.getLogger().debug(`Rule: statement: `, a3[s3]), typeof a3[s3].length == `number` ? this.$ = a3[s3] : this.$ = [a3[s3]];
        break;
      case 13:
        r3.getLogger().debug(`Rule: statement #2: `, a3[s3 - 1]), this.$ = [a3[s3 - 1]].concat(a3[s3]);
        break;
      case 14:
        r3.getLogger().debug(`Rule: link: `, a3[s3], e3), this.$ = { edgeTypeStr: a3[s3], label: `` };
        break;
      case 15:
        r3.getLogger().debug(`Rule: LABEL link: `, a3[s3 - 3], a3[s3 - 1], a3[s3]), this.$ = { edgeTypeStr: a3[s3], label: a3[s3 - 1] };
        break;
      case 18:
        let t4 = parseInt(a3[s3]);
        this.$ = { id: r3.generateId(), type: `space`, label: ``, width: t4, children: [] };
        break;
      case 23:
        r3.getLogger().debug(`Rule: (nodeStatement link node) `, a3[s3 - 2], a3[s3 - 1], a3[s3], ` typestr: `, a3[s3 - 1].edgeTypeStr);
        let n4 = r3.edgeStrToEdgeData(a3[s3 - 1].edgeTypeStr);
        this.$ = [{ id: a3[s3 - 2].id, label: a3[s3 - 2].label, type: a3[s3 - 2].type, directions: a3[s3 - 2].directions }, { id: a3[s3 - 2].id + `-` + a3[s3].id, start: a3[s3 - 2].id, end: a3[s3].id, label: a3[s3 - 1].label, type: `edge`, directions: a3[s3].directions, arrowTypeEnd: n4, arrowTypeStart: `arrow_open` }, { id: a3[s3].id, label: a3[s3].label, type: r3.typeStr2Type(a3[s3].typeStr), directions: a3[s3].directions }];
        break;
      case 24:
        r3.getLogger().debug(`Rule: nodeStatement (abc88 node size) `, a3[s3 - 1], a3[s3]), this.$ = { id: a3[s3 - 1].id, label: a3[s3 - 1].label, type: r3.typeStr2Type(a3[s3 - 1].typeStr), directions: a3[s3 - 1].directions, widthInColumns: parseInt(a3[s3], 10) };
        break;
      case 25:
        r3.getLogger().debug(`Rule: nodeStatement (node) `, a3[s3]), this.$ = { id: a3[s3].id, label: a3[s3].label, type: r3.typeStr2Type(a3[s3].typeStr), directions: a3[s3].directions, widthInColumns: 1 };
        break;
      case 26:
        r3.getLogger().debug(`APA123`, this ? this : `na`), r3.getLogger().debug(`COLUMNS: `, a3[s3]), this.$ = { type: `column-setting`, columns: a3[s3] === `auto` ? -1 : parseInt(a3[s3]) };
        break;
      case 27:
        r3.getLogger().debug(`Rule: id-block statement : `, a3[s3 - 2], a3[s3 - 1]), r3.generateId(), this.$ = { ...a3[s3 - 2], type: `composite`, children: a3[s3 - 1] };
        break;
      case 28:
        r3.getLogger().debug(`Rule: blockStatement : `, a3[s3 - 2], a3[s3 - 1], a3[s3]), this.$ = { id: r3.generateId(), type: `composite`, label: ``, children: a3[s3 - 1] };
        break;
      case 29:
        r3.getLogger().debug(`Rule: node (NODE_ID separator): `, a3[s3]), this.$ = { id: a3[s3] };
        break;
      case 30:
        r3.getLogger().debug(`Rule: node (NODE_ID nodeShapeNLabel separator): `, a3[s3 - 1], a3[s3]), this.$ = { id: a3[s3 - 1], label: a3[s3].label, typeStr: a3[s3].typeStr, directions: a3[s3].directions };
        break;
      case 31:
        r3.getLogger().debug(`Rule: dirList: `, a3[s3]), this.$ = [a3[s3]];
        break;
      case 32:
        r3.getLogger().debug(`Rule: dirList: `, a3[s3 - 1], a3[s3]), this.$ = [a3[s3 - 1]].concat(a3[s3]);
        break;
      case 33:
        r3.getLogger().debug(`Rule: nodeShapeNLabel: `, a3[s3 - 2], a3[s3 - 1], a3[s3]), this.$ = { typeStr: a3[s3 - 2] + a3[s3], label: a3[s3 - 1] };
        break;
      case 34:
        r3.getLogger().debug(`Rule: BLOCK_ARROW nodeShapeNLabel: `, a3[s3 - 3], a3[s3 - 2], ` #3:`, a3[s3 - 1], a3[s3]), this.$ = { typeStr: a3[s3 - 3] + a3[s3], label: a3[s3 - 2], directions: a3[s3 - 1] };
        break;
      case 35:
      case 36:
        this.$ = { type: `classDef`, id: a3[s3 - 1].trim(), css: a3[s3].trim() };
        break;
      case 37:
        this.$ = { type: `applyClass`, id: a3[s3 - 1].trim(), styleClass: a3[s3].trim() };
        break;
      case 38:
        this.$ = { type: `applyStyles`, id: a3[s3 - 1].trim(), stylesStr: a3[s3].trim() };
        break;
    }
  }, `anonymous`), table: [{ 9: 1, 10: [1, 2] }, { 1: [3] }, { 10: t2, 11: 3, 13: 4, 19: 5, 20: 6, 21: n2, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 28: r2, 29: i2, 31: a2, 39: o2, 43: s2, 46: c2 }, { 8: [1, 20] }, e2(l2, [2, 12], { 13: 4, 19: 5, 20: 6, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 11: 21, 10: t2, 21: n2, 28: r2, 29: i2, 31: a2, 39: o2, 43: s2, 46: c2 }), e2(d2, [2, 16], { 14: 22, 15: f2, 16: p2 }), e2(d2, [2, 17]), e2(d2, [2, 18]), e2(d2, [2, 19]), e2(d2, [2, 20]), e2(d2, [2, 21]), e2(d2, [2, 22]), e2(m2, [2, 25], { 27: [1, 25] }), e2(d2, [2, 26]), { 19: 26, 26: 12, 31: a2 }, { 10: t2, 11: 27, 13: 4, 19: 5, 20: 6, 21: n2, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 28: r2, 29: i2, 31: a2, 39: o2, 43: s2, 46: c2 }, { 40: [1, 28], 42: [1, 29] }, { 44: [1, 30] }, { 47: [1, 31] }, e2(h2, [2, 29], { 32: 32, 35: [1, 33], 37: [1, 34] }), { 1: [2, 7] }, e2(l2, [2, 13]), { 26: 35, 31: a2 }, { 31: [2, 14] }, { 17: [1, 36] }, e2(m2, [2, 24]), { 10: t2, 11: 37, 13: 4, 14: 22, 15: f2, 16: p2, 19: 5, 20: 6, 21: n2, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 28: r2, 29: i2, 31: a2, 39: o2, 43: s2, 46: c2 }, { 30: [1, 38] }, { 41: [1, 39] }, { 41: [1, 40] }, { 45: [1, 41] }, { 48: [1, 42] }, e2(h2, [2, 30]), { 18: [1, 43] }, { 18: [1, 44] }, e2(m2, [2, 23]), { 18: [1, 45] }, { 30: [1, 46] }, e2(d2, [2, 28]), e2(d2, [2, 35]), e2(d2, [2, 36]), e2(d2, [2, 37]), e2(d2, [2, 38]), { 36: [1, 47] }, { 33: 48, 34: g2 }, { 15: [1, 50] }, e2(d2, [2, 27]), e2(h2, [2, 33]), { 38: [1, 51] }, { 33: 52, 34: g2, 38: [2, 31] }, { 31: [2, 15] }, e2(h2, [2, 34]), { 38: [2, 32] }], defaultActions: { 20: [2, 7], 23: [2, 14], 50: [2, 15], 52: [2, 32] }, parseError: u(function(e3, t3) {
    if (t3.recoverable) this.trace(e3);
    else {
      var n3 = Error(e3);
      throw n3.hash = t3, n3;
    }
  }, `parseError`), parse: u(function(e3) {
    var t3 = this, n3 = [0], r3 = [], i3 = [null], a3 = [], o3 = this.table, s3 = ``, c3 = 0, l3 = 0, d3 = 0, f3 = 2, p3 = 1, m3 = a3.slice.call(arguments, 1), h3 = Object.create(this.lexer), g3 = { yy: {} };
    for (var _3 in this.yy) Object.prototype.hasOwnProperty.call(this.yy, _3) && (g3.yy[_3] = this.yy[_3]);
    h3.setInput(e3, g3.yy), g3.yy.lexer = h3, g3.yy.parser = this, h3.yylloc === void 0 && (h3.yylloc = {});
    var v3 = h3.yylloc;
    a3.push(v3);
    var y2 = h3.options && h3.options.ranges;
    typeof g3.yy.parseError == `function` ? this.parseError = g3.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
    function b2(e4) {
      n3.length -= 2 * e4, i3.length -= e4, a3.length -= e4;
    }
    u(b2, `popStack`);
    function x2() {
      var e4 = r3.pop() || h3.lex() || p3;
      return typeof e4 != `number` && (e4 instanceof Array && (r3 = e4, e4 = r3.pop()), e4 = t3.symbols_[e4] || e4), e4;
    }
    u(x2, `lex`);
    for (var S2, C2, w2, T2, E2, D2 = {}, O2, k2, A2, j2; ; ) {
      if (w2 = n3[n3.length - 1], this.defaultActions[w2] ? T2 = this.defaultActions[w2] : (S2 ?? (S2 = x2()), T2 = o3[w2] && o3[w2][S2]), T2 === void 0 || !T2.length || !T2[0]) {
        var M2 = ``;
        for (O2 in j2 = [], o3[w2]) this.terminals_[O2] && O2 > f3 && j2.push(`'` + this.terminals_[O2] + `'`);
        M2 = h3.showPosition ? `Parse error on line ` + (c3 + 1) + `:
` + h3.showPosition() + `
Expecting ` + j2.join(`, `) + `, got '` + (this.terminals_[S2] || S2) + `'` : `Parse error on line ` + (c3 + 1) + `: Unexpected ` + (S2 == p3 ? `end of input` : `'` + (this.terminals_[S2] || S2) + `'`), this.parseError(M2, { text: h3.match, token: this.terminals_[S2] || S2, line: h3.yylineno, loc: v3, expected: j2 });
      }
      if (T2[0] instanceof Array && T2.length > 1) throw Error(`Parse Error: multiple actions possible at state: ` + w2 + `, token: ` + S2);
      switch (T2[0]) {
        case 1:
          n3.push(S2), i3.push(h3.yytext), a3.push(h3.yylloc), n3.push(T2[1]), S2 = null, C2 ? (S2 = C2, C2 = null) : (l3 = h3.yyleng, s3 = h3.yytext, c3 = h3.yylineno, v3 = h3.yylloc, d3 > 0 && d3--);
          break;
        case 2:
          if (k2 = this.productions_[T2[1]][1], D2.$ = i3[i3.length - k2], D2._$ = { first_line: a3[a3.length - (k2 || 1)].first_line, last_line: a3[a3.length - 1].last_line, first_column: a3[a3.length - (k2 || 1)].first_column, last_column: a3[a3.length - 1].last_column }, y2 && (D2._$.range = [a3[a3.length - (k2 || 1)].range[0], a3[a3.length - 1].range[1]]), E2 = this.performAction.apply(D2, [s3, l3, c3, g3.yy, T2[1], i3, a3].concat(m3)), E2 !== void 0) return E2;
          k2 && (n3 = n3.slice(0, -1 * k2 * 2), i3 = i3.slice(0, -1 * k2), a3 = a3.slice(0, -1 * k2)), n3.push(this.productions_[T2[1]][0]), i3.push(D2.$), a3.push(D2._$), A2 = o3[n3[n3.length - 2]][n3[n3.length - 1]], n3.push(A2);
          break;
        case 3:
          return true;
      }
    }
    return true;
  }, `parse`) };
  _2.lexer = (function() {
    return { EOF: 1, parseError: u(function(e3, t3) {
      if (this.yy.parser) this.yy.parser.parseError(e3, t3);
      else throw Error(e3);
    }, `parseError`), setInput: u(function(e3, t3) {
      return this.yy = t3 || this.yy || {}, this._input = e3, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = ``, this.conditionStack = [`INITIAL`], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
    }, `setInput`), input: u(function() {
      var e3 = this._input[0];
      return this.yytext += e3, this.yyleng++, this.offset++, this.match += e3, this.matched += e3, e3.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e3;
    }, `input`), unput: u(function(e3) {
      var t3 = e3.length, n3 = e3.split(/(?:\r\n?|\n)/g);
      this._input = e3 + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t3), this.offset -= t3;
      var r3 = this.match.split(/(?:\r\n?|\n)/g);
      this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n3.length - 1 && (this.yylineno -= n3.length - 1);
      var i3 = this.yylloc.range;
      return this.yylloc = { first_line: this.yylloc.first_line, last_line: this.yylineno + 1, first_column: this.yylloc.first_column, last_column: n3 ? (n3.length === r3.length ? this.yylloc.first_column : 0) + r3[r3.length - n3.length].length - n3[0].length : this.yylloc.first_column - t3 }, this.options.ranges && (this.yylloc.range = [i3[0], i3[0] + this.yyleng - t3]), this.yyleng = this.yytext.length, this;
    }, `unput`), more: u(function() {
      return this._more = true, this;
    }, `more`), reject: u(function() {
      if (this.options.backtrack_lexer) this._backtrack = true;
      else return this.parseError(`Lexical error on line ` + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), { text: ``, token: null, line: this.yylineno });
      return this;
    }, `reject`), less: u(function(e3) {
      this.unput(this.match.slice(e3));
    }, `less`), pastInput: u(function() {
      var e3 = this.matched.substr(0, this.matched.length - this.match.length);
      return (e3.length > 20 ? `...` : ``) + e3.substr(-20).replace(/\n/g, ``);
    }, `pastInput`), upcomingInput: u(function() {
      var e3 = this.match;
      return e3.length < 20 && (e3 += this._input.substr(0, 20 - e3.length)), (e3.substr(0, 20) + (e3.length > 20 ? `...` : ``)).replace(/\n/g, ``);
    }, `upcomingInput`), showPosition: u(function() {
      var e3 = this.pastInput(), t3 = Array(e3.length + 1).join(`-`);
      return e3 + this.upcomingInput() + `
` + t3 + `^`;
    }, `showPosition`), test_match: u(function(e3, t3) {
      var n3, r3, i3;
      if (this.options.backtrack_lexer && (i3 = { yylineno: this.yylineno, yylloc: { first_line: this.yylloc.first_line, last_line: this.last_line, first_column: this.yylloc.first_column, last_column: this.yylloc.last_column }, yytext: this.yytext, match: this.match, matches: this.matches, matched: this.matched, yyleng: this.yyleng, offset: this.offset, _more: this._more, _input: this._input, yy: this.yy, conditionStack: this.conditionStack.slice(0), done: this.done }, this.options.ranges && (i3.yylloc.range = this.yylloc.range.slice(0))), r3 = e3[0].match(/(?:\r\n?|\n).*/g), r3 && (this.yylineno += r3.length), this.yylloc = { first_line: this.yylloc.last_line, last_line: this.yylineno + 1, first_column: this.yylloc.last_column, last_column: r3 ? r3[r3.length - 1].length - r3[r3.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e3[0].length }, this.yytext += e3[0], this.match += e3[0], this.matches = e3, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(e3[0].length), this.matched += e3[0], n3 = this.performAction.call(this, this.yy, this, t3, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), n3) return n3;
      if (this._backtrack) {
        for (var a3 in i3) this[a3] = i3[a3];
        return false;
      }
      return false;
    }, `test_match`), next: u(function() {
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
    }, `next`), lex: u(function() {
      return this.next() || this.lex();
    }, `lex`), begin: u(function(e3) {
      this.conditionStack.push(e3);
    }, `begin`), popState: u(function() {
      return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
    }, `popState`), _currentRules: u(function() {
      return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
    }, `_currentRules`), topState: u(function(e3) {
      return e3 = this.conditionStack.length - 1 - Math.abs(e3 || 0), e3 >= 0 ? this.conditionStack[e3] : `INITIAL`;
    }, `topState`), pushState: u(function(e3) {
      this.begin(e3);
    }, `pushState`), stateStackSize: u(function() {
      return this.conditionStack.length;
    }, `stateStackSize`), options: {}, performAction: u(function(e3, t3, n3, r3) {
      switch (n3) {
        case 0:
          return e3.getLogger().debug(`Found block-beta`), 10;
        case 1:
          return e3.getLogger().debug(`Found id-block`), 29;
        case 2:
          return e3.getLogger().debug(`Found block`), 10;
        case 3:
          e3.getLogger().debug(`.`, t3.yytext);
          break;
        case 4:
          e3.getLogger().debug(`_`, t3.yytext);
          break;
        case 5:
          return 5;
        case 6:
          return t3.yytext = -1, 28;
        case 7:
          return t3.yytext = t3.yytext.replace(/columns\s+/, ``), e3.getLogger().debug(`COLUMNS (LEX)`, t3.yytext), 28;
        case 8:
          this.pushState(`md_string`);
          break;
        case 9:
          return `MD_STR`;
        case 10:
          this.popState();
          break;
        case 11:
          this.pushState(`string`);
          break;
        case 12:
          e3.getLogger().debug(`LEX: POPPING STR:`, t3.yytext), this.popState();
          break;
        case 13:
          return e3.getLogger().debug(`LEX: STR end:`, t3.yytext), `STR`;
        case 14:
          return t3.yytext = t3.yytext.replace(/space\:/, ``), e3.getLogger().debug(`SPACE NUM (LEX)`, t3.yytext), 21;
        case 15:
          return t3.yytext = `1`, e3.getLogger().debug(`COLUMNS (LEX)`, t3.yytext), 21;
        case 16:
          return 42;
        case 17:
          return `LINKSTYLE`;
        case 18:
          return `INTERPOLATE`;
        case 19:
          return this.pushState(`CLASSDEF`), 39;
        case 20:
          return this.popState(), this.pushState(`CLASSDEFID`), `DEFAULT_CLASSDEF_ID`;
        case 21:
          return this.popState(), this.pushState(`CLASSDEFID`), 40;
        case 22:
          return this.popState(), 41;
        case 23:
          return this.pushState(`CLASS`), 43;
        case 24:
          return this.popState(), this.pushState(`CLASS_STYLE`), 44;
        case 25:
          return this.popState(), 45;
        case 26:
          return this.pushState(`STYLE_STMNT`), 46;
        case 27:
          return this.popState(), this.pushState(`STYLE_DEFINITION`), 47;
        case 28:
          return this.popState(), 48;
        case 29:
          return this.pushState(`acc_title`), `acc_title`;
        case 30:
          return this.popState(), `acc_title_value`;
        case 31:
          return this.pushState(`acc_descr`), `acc_descr`;
        case 32:
          return this.popState(), `acc_descr_value`;
        case 33:
          this.pushState(`acc_descr_multiline`);
          break;
        case 34:
          this.popState();
          break;
        case 35:
          return `acc_descr_multiline_value`;
        case 36:
          return 30;
        case 37:
          return this.popState(), e3.getLogger().debug(`Lex: ((`), `NODE_DEND`;
        case 38:
          return this.popState(), e3.getLogger().debug(`Lex: ((`), `NODE_DEND`;
        case 39:
          return this.popState(), e3.getLogger().debug(`Lex: ))`), `NODE_DEND`;
        case 40:
          return this.popState(), e3.getLogger().debug(`Lex: ((`), `NODE_DEND`;
        case 41:
          return this.popState(), e3.getLogger().debug(`Lex: ((`), `NODE_DEND`;
        case 42:
          return this.popState(), e3.getLogger().debug(`Lex: (-`), `NODE_DEND`;
        case 43:
          return this.popState(), e3.getLogger().debug(`Lex: -)`), `NODE_DEND`;
        case 44:
          return this.popState(), e3.getLogger().debug(`Lex: ((`), `NODE_DEND`;
        case 45:
          return this.popState(), e3.getLogger().debug(`Lex: ]]`), `NODE_DEND`;
        case 46:
          return this.popState(), e3.getLogger().debug(`Lex: (`), `NODE_DEND`;
        case 47:
          return this.popState(), e3.getLogger().debug(`Lex: ])`), `NODE_DEND`;
        case 48:
          return this.popState(), e3.getLogger().debug(`Lex: /]`), `NODE_DEND`;
        case 49:
          return this.popState(), e3.getLogger().debug(`Lex: /]`), `NODE_DEND`;
        case 50:
          return this.popState(), e3.getLogger().debug(`Lex: )]`), `NODE_DEND`;
        case 51:
          return this.popState(), e3.getLogger().debug(`Lex: )`), `NODE_DEND`;
        case 52:
          return this.popState(), e3.getLogger().debug(`Lex: ]>`), `NODE_DEND`;
        case 53:
          return this.popState(), e3.getLogger().debug(`Lex: ]`), `NODE_DEND`;
        case 54:
          return e3.getLogger().debug(`Lexa: -)`), this.pushState(`NODE`), 35;
        case 55:
          return e3.getLogger().debug(`Lexa: (-`), this.pushState(`NODE`), 35;
        case 56:
          return e3.getLogger().debug(`Lexa: ))`), this.pushState(`NODE`), 35;
        case 57:
          return e3.getLogger().debug(`Lexa: )`), this.pushState(`NODE`), 35;
        case 58:
          return e3.getLogger().debug(`Lex: (((`), this.pushState(`NODE`), 35;
        case 59:
          return e3.getLogger().debug(`Lexa: )`), this.pushState(`NODE`), 35;
        case 60:
          return e3.getLogger().debug(`Lexa: )`), this.pushState(`NODE`), 35;
        case 61:
          return e3.getLogger().debug(`Lexa: )`), this.pushState(`NODE`), 35;
        case 62:
          return e3.getLogger().debug(`Lexc: >`), this.pushState(`NODE`), 35;
        case 63:
          return e3.getLogger().debug(`Lexa: ([`), this.pushState(`NODE`), 35;
        case 64:
          return e3.getLogger().debug(`Lexa: )`), this.pushState(`NODE`), 35;
        case 65:
          return this.pushState(`NODE`), 35;
        case 66:
          return this.pushState(`NODE`), 35;
        case 67:
          return this.pushState(`NODE`), 35;
        case 68:
          return this.pushState(`NODE`), 35;
        case 69:
          return this.pushState(`NODE`), 35;
        case 70:
          return this.pushState(`NODE`), 35;
        case 71:
          return this.pushState(`NODE`), 35;
        case 72:
          return e3.getLogger().debug(`Lexa: [`), this.pushState(`NODE`), 35;
        case 73:
          return this.pushState(`BLOCK_ARROW`), e3.getLogger().debug(`LEX ARR START`), 37;
        case 74:
          return e3.getLogger().debug(`Lex: NODE_ID`, t3.yytext), 31;
        case 75:
          return e3.getLogger().debug(`Lex: EOF`, t3.yytext), 8;
        case 76:
          this.pushState(`md_string`);
          break;
        case 77:
          this.pushState(`md_string`);
          break;
        case 78:
          return `NODE_DESCR`;
        case 79:
          this.popState();
          break;
        case 80:
          e3.getLogger().debug(`Lex: Starting string`), this.pushState(`string`);
          break;
        case 81:
          e3.getLogger().debug(`LEX ARR: Starting string`), this.pushState(`string`);
          break;
        case 82:
          return e3.getLogger().debug(`LEX: NODE_DESCR:`, t3.yytext), `NODE_DESCR`;
        case 83:
          e3.getLogger().debug(`LEX POPPING`), this.popState();
          break;
        case 84:
          e3.getLogger().debug(`Lex: =>BAE`), this.pushState(`ARROW_DIR`);
          break;
        case 85:
          return t3.yytext = t3.yytext.replace(/^,\s*/, ``), e3.getLogger().debug(`Lex (right): dir:`, t3.yytext), `DIR`;
        case 86:
          return t3.yytext = t3.yytext.replace(/^,\s*/, ``), e3.getLogger().debug(`Lex (left):`, t3.yytext), `DIR`;
        case 87:
          return t3.yytext = t3.yytext.replace(/^,\s*/, ``), e3.getLogger().debug(`Lex (x):`, t3.yytext), `DIR`;
        case 88:
          return t3.yytext = t3.yytext.replace(/^,\s*/, ``), e3.getLogger().debug(`Lex (y):`, t3.yytext), `DIR`;
        case 89:
          return t3.yytext = t3.yytext.replace(/^,\s*/, ``), e3.getLogger().debug(`Lex (up):`, t3.yytext), `DIR`;
        case 90:
          return t3.yytext = t3.yytext.replace(/^,\s*/, ``), e3.getLogger().debug(`Lex (down):`, t3.yytext), `DIR`;
        case 91:
          return t3.yytext = `]>`, e3.getLogger().debug(`Lex (ARROW_DIR end):`, t3.yytext), this.popState(), this.popState(), `BLOCK_ARROW_END`;
        case 92:
          return e3.getLogger().debug(`Lex: LINK`, `#` + t3.yytext + `#`), 15;
        case 93:
          return e3.getLogger().debug(`Lex: LINK`, t3.yytext), 15;
        case 94:
          return e3.getLogger().debug(`Lex: LINK`, t3.yytext), 15;
        case 95:
          return e3.getLogger().debug(`Lex: LINK`, t3.yytext), 15;
        case 96:
          return e3.getLogger().debug(`Lex: START_LINK`, t3.yytext), this.pushState(`LLABEL`), 16;
        case 97:
          return e3.getLogger().debug(`Lex: START_LINK`, t3.yytext), this.pushState(`LLABEL`), 16;
        case 98:
          return e3.getLogger().debug(`Lex: START_LINK`, t3.yytext), this.pushState(`LLABEL`), 16;
        case 99:
          this.pushState(`md_string`);
          break;
        case 100:
          return e3.getLogger().debug(`Lex: Starting string`), this.pushState(`string`), `LINK_LABEL`;
        case 101:
          return this.popState(), e3.getLogger().debug(`Lex: LINK`, `#` + t3.yytext + `#`), 15;
        case 102:
          return this.popState(), e3.getLogger().debug(`Lex: LINK`, t3.yytext), 15;
        case 103:
          return this.popState(), e3.getLogger().debug(`Lex: LINK`, t3.yytext), 15;
        case 104:
          return e3.getLogger().debug(`Lex: COLON`, t3.yytext), t3.yytext = t3.yytext.slice(1), 27;
      }
    }, `anonymous`), rules: [/^(?:block-beta\b)/, /^(?:block:)/, /^(?:block\b)/, /^(?:[\s]+)/, /^(?:[\n]+)/, /^(?:((\u000D\u000A)|(\u000A)))/, /^(?:columns\s+auto\b)/, /^(?:columns\s+[\d]+)/, /^(?:["][`])/, /^(?:[^`"]+)/, /^(?:[`]["])/, /^(?:["])/, /^(?:["])/, /^(?:[^"]*)/, /^(?:space[:]\d+)/, /^(?:space\b)/, /^(?:default\b)/, /^(?:linkStyle\b)/, /^(?:interpolate\b)/, /^(?:classDef\s+)/, /^(?:DEFAULT\s+)/, /^(?:\w+\s+)/, /^(?:[^\n]*)/, /^(?:class\s+)/, /^(?:(\w+)+((,\s*\w+)*))/, /^(?:[^\n]*)/, /^(?:style\s+)/, /^(?:(\w+)+((,\s*\w+)*))/, /^(?:[^\n]*)/, /^(?:accTitle\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*\{\s*)/, /^(?:[\}])/, /^(?:[^\}]*)/, /^(?:end\b\s*)/, /^(?:\(\(\()/, /^(?:\)\)\))/, /^(?:[\)]\))/, /^(?:\}\})/, /^(?:\})/, /^(?:\(-)/, /^(?:-\))/, /^(?:\(\()/, /^(?:\]\])/, /^(?:\()/, /^(?:\]\))/, /^(?:\\\])/, /^(?:\/\])/, /^(?:\)\])/, /^(?:[\)])/, /^(?:\]>)/, /^(?:[\]])/, /^(?:-\))/, /^(?:\(-)/, /^(?:\)\))/, /^(?:\))/, /^(?:\(\(\()/, /^(?:\(\()/, /^(?:\{\{)/, /^(?:\{)/, /^(?:>)/, /^(?:\(\[)/, /^(?:\()/, /^(?:\[\[)/, /^(?:\[\|)/, /^(?:\[\()/, /^(?:\)\)\))/, /^(?:\[\\)/, /^(?:\[\/)/, /^(?:\[\\)/, /^(?:\[)/, /^(?:<\[)/, /^(?:[^\(\[\n\-\)\{\}\s\<\>:]+)/, /^(?:$)/, /^(?:["][`])/, /^(?:["][`])/, /^(?:[^`"]+)/, /^(?:[`]["])/, /^(?:["])/, /^(?:["])/, /^(?:[^"]+)/, /^(?:["])/, /^(?:\]>\s*\()/, /^(?:,?\s*right\s*)/, /^(?:,?\s*left\s*)/, /^(?:,?\s*x\s*)/, /^(?:,?\s*y\s*)/, /^(?:,?\s*up\s*)/, /^(?:,?\s*down\s*)/, /^(?:\)\s*)/, /^(?:\s*[xo<]?--+[-xo>]\s*)/, /^(?:\s*[xo<]?==+[=xo>]\s*)/, /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/, /^(?:\s*~~[\~]+\s*)/, /^(?:\s*[xo<]?--\s*)/, /^(?:\s*[xo<]?==\s*)/, /^(?:\s*[xo<]?-\.\s*)/, /^(?:["][`])/, /^(?:["])/, /^(?:\s*[xo<]?--+[-xo>]\s*)/, /^(?:\s*[xo<]?==+[=xo>]\s*)/, /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/, /^(?::\d+)/], conditions: { STYLE_DEFINITION: { rules: [28], inclusive: false }, STYLE_STMNT: { rules: [27], inclusive: false }, CLASSDEFID: { rules: [22], inclusive: false }, CLASSDEF: { rules: [20, 21], inclusive: false }, CLASS_STYLE: { rules: [25], inclusive: false }, CLASS: { rules: [24], inclusive: false }, LLABEL: { rules: [99, 100, 101, 102, 103], inclusive: false }, ARROW_DIR: { rules: [85, 86, 87, 88, 89, 90, 91], inclusive: false }, BLOCK_ARROW: { rules: [76, 81, 84], inclusive: false }, NODE: { rules: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 77, 80], inclusive: false }, md_string: { rules: [9, 10, 78, 79], inclusive: false }, space: { rules: [], inclusive: false }, string: { rules: [12, 13, 82, 83], inclusive: false }, acc_descr_multiline: { rules: [34, 35], inclusive: false }, acc_descr: { rules: [32], inclusive: false }, acc_title: { rules: [30], inclusive: false }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 11, 14, 15, 16, 17, 18, 19, 23, 26, 29, 31, 33, 36, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 92, 93, 94, 95, 96, 97, 98, 104], inclusive: true } } };
  })();
  function v2() {
    this.yy = {};
  }
  return u(v2, `Parser`), v2.prototype = _2, _2.Parser = v2, new v2();
})();
T.parser = T;
var E = T, D = /* @__PURE__ */ new Map(), O = [], k = /* @__PURE__ */ new Map(), A = `color`, j = `fill`, M = `bgFill`, ee = `,`, te = r(), N = /* @__PURE__ */ new Map(), ne = u((e2) => s.sanitizeText(e2, te), `sanitizeText`), re = u(function(e2, t2 = ``) {
  let n2 = N.get(e2);
  n2 || (n2 = { id: e2, styles: [], textStyles: [] }, N.set(e2, n2)), t2 == null ? void 0 : t2.split(ee).forEach((e3) => {
    let t3 = e3.replace(/([^;]*);/, `$1`).trim();
    if (RegExp(A).exec(e3)) {
      let e4 = t3.replace(j, M).replace(A, j);
      n2.textStyles.push(e4);
    }
    n2.styles.push(t3);
  });
}, `addStyleClass`), ie = u(function(e2, t2 = ``) {
  let n2 = D.get(e2);
  t2 != null && (n2.styles = t2.split(ee));
}, `addStyle2Node`), ae = u(function(e2, t2) {
  e2.split(`,`).forEach(function(e3) {
    let n2 = D.get(e3);
    if (n2 === void 0) {
      let t3 = e3.trim();
      n2 = { id: t3, type: `na`, children: [] }, D.set(t3, n2);
    }
    n2.classes || (n2.classes = []), n2.classes.push(t2);
  });
}, `setCssClass`), oe = u((e2, t2) => {
  var _a2;
  let n2 = e2.flat(), r2 = [], i2 = ((_a2 = n2.find((e3) => (e3 == null ? void 0 : e3.type) === `column-setting`)) == null ? void 0 : _a2.columns) ?? -1;
  for (let e3 of n2) {
    if (typeof i2 == `number` && i2 > 0 && e3.type !== `column-setting` && typeof e3.widthInColumns == `number` && e3.widthInColumns > i2 && l.warn(`Block ${e3.id} width ${e3.widthInColumns} exceeds configured column width ${i2}`), e3.label && (e3.label = ne(e3.label)), e3.type === `classDef`) {
      re(e3.id, e3.css);
      continue;
    }
    if (e3.type === `applyClass`) {
      ae(e3.id, (e3 == null ? void 0 : e3.styleClass) ?? ``);
      continue;
    }
    if (e3.type === `applyStyles`) {
      (e3 == null ? void 0 : e3.stylesStr) && ie(e3.id, e3 == null ? void 0 : e3.stylesStr);
      continue;
    }
    if (e3.type === `column-setting`) t2.columns = e3.columns ?? -1;
    else if (e3.type === `edge`) {
      let t3 = (k.get(e3.id) ?? 0) + 1;
      k.set(e3.id, t3), e3.id = t3 + `-` + e3.id, O.push(e3);
    } else {
      e3.label || (e3.type === `composite` ? e3.label = `` : e3.label = e3.id);
      let t3 = D.get(e3.id);
      if (t3 === void 0 ? D.set(e3.id, e3) : (e3.type !== `na` && (t3.type = e3.type), e3.label !== e3.id && (t3.label = e3.label)), e3.children && oe(e3.children, e3), e3.type === `space`) {
        let t4 = e3.width ?? 1;
        for (let n3 = 0; n3 < t4; n3++) {
          let t5 = w(e3);
          t5.id = t5.id + `-` + n3, D.set(t5.id, t5), r2.push(t5);
        }
      } else t3 === void 0 && r2.push(e3);
    }
  }
  t2.children = r2;
}, `populateBlockDatabase`), P = [], F = { id: `root`, type: `composite`, children: [], columns: -1 }, se = u(() => {
  l.debug(`Clear called`), n(), F = { id: `root`, type: `composite`, children: [], columns: -1 }, D = /* @__PURE__ */ new Map([[`root`, F]]), P = [], N = /* @__PURE__ */ new Map(), O = [], k = /* @__PURE__ */ new Map();
}, `clear`);
function ce(e2) {
  switch (l.debug(`typeStr2Type`, e2), e2) {
    case `[]`:
      return `square`;
    case `()`:
      return l.debug(`we have a round`), `round`;
    case `(())`:
      return `circle`;
    case `>]`:
      return `rect_left_inv_arrow`;
    case `{}`:
      return `diamond`;
    case `{{}}`:
      return `hexagon`;
    case `([])`:
      return `stadium`;
    case `[[]]`:
      return `subroutine`;
    case `[()]`:
      return `cylinder`;
    case `((()))`:
      return `doublecircle`;
    case `[//]`:
      return `lean_right`;
    case `[\\\\]`:
      return `lean_left`;
    case `[/\\]`:
      return `trapezoid`;
    case `[\\/]`:
      return `inv_trapezoid`;
    case `<[]>`:
      return `block_arrow`;
    default:
      return `na`;
  }
}
u(ce, `typeStr2Type`);
function le(e2) {
  switch (l.debug(`typeStr2Type`, e2), e2) {
    case `==`:
      return `thick`;
    default:
      return `normal`;
  }
}
u(le, `edgeTypeStr2Type`);
function ue(e2) {
  switch (e2.replace(/^[\s-]+|[\s-]+$/g, ``)) {
    case `x`:
      return `arrow_cross`;
    case `o`:
      return `arrow_circle`;
    case `>`:
      return `arrow_point`;
    default:
      return ``;
  }
}
u(ue, `edgeStrToEdgeData`);
var de = 0, fe = { getConfig: u(() => c().block, `getConfig`), typeStr2Type: ce, edgeTypeStr2Type: le, edgeStrToEdgeData: ue, getLogger: u(() => l, `getLogger`), getBlocksFlat: u(() => [...D.values()], `getBlocksFlat`), getBlocks: u(() => P || [], `getBlocks`), getEdges: u(() => O, `getEdges`), setHierarchy: u((e2) => {
  F.children = e2, oe(e2, F), P = F.children;
}, `setHierarchy`), getBlock: u((e2) => D.get(e2), `getBlock`), setBlock: u((e2) => {
  D.set(e2.id, e2);
}, `setBlock`), getColumns: u((e2) => {
  let t2 = D.get(e2);
  return t2 ? t2.columns ? t2.columns : t2.children ? t2.children.length : -1 : -1;
}, `getColumns`), getClasses: u(function() {
  return N;
}, `getClasses`), clear: se, generateId: u(() => (de++, `id-` + Math.random().toString(36).substr(2, 12) + `-` + de), `generateId`) }, I = u((e2, t2) => {
  let n2 = f;
  return a(n2(e2, `r`), n2(e2, `g`), n2(e2, `b`), t2);
}, `fade`), pe = u((e2) => `.label {
    font-family: ${e2.fontFamily};
    color: ${e2.nodeTextColor || e2.textColor};
  }
  .cluster-label text {
    fill: ${e2.titleColor};
  }
  .cluster-label span,p {
    color: ${e2.titleColor};
  }



  .label text,span,p {
    fill: ${e2.nodeTextColor || e2.textColor};
    color: ${e2.nodeTextColor || e2.textColor};
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
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

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
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e2.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e2.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e2.edgeLabelBackground};
      fill: ${e2.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${I(e2.edgeLabelBackground, 0.5)};
    // background-color:
  }

  .node .cluster {
    // fill: ${I(e2.mainBkg, 0.5)};
    fill: ${I(e2.clusterBkg, 0.5)};
    stroke: ${I(e2.clusterBorder, 0.2)};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e2.titleColor};
  }

  .cluster span,p {
    color: ${e2.titleColor};
  }
  /* .cluster div {
    color: ${e2.titleColor};
  } */

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

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e2.textColor};
  }
  ${S()}
`, `getStyles`), me = u((e2, t2, n2, r2) => {
  t2.forEach((t3) => {
    he[t3](e2, n2, r2);
  });
}, `insertMarkers`), he = { extension: u((e2, t2, n2) => {
  l.trace(`Making markers for `, n2), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-extensionStart`).attr(`class`, `marker extension ` + t2).attr(`refX`, 18).attr(`refY`, 7).attr(`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 1,7 L18,13 V 1 Z`), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-extensionEnd`).attr(`class`, `marker extension ` + t2).attr(`refX`, 1).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 28).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 1,1 V 13 L18,7 Z`);
}, `extension`), composition: u((e2, t2, n2) => {
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-compositionStart`).attr(`class`, `marker composition ` + t2).attr(`refX`, 18).attr(`refY`, 7).attr(`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 18,7 L9,13 L1,7 L9,1 Z`), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-compositionEnd`).attr(`class`, `marker composition ` + t2).attr(`refX`, 1).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 28).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 18,7 L9,13 L1,7 L9,1 Z`);
}, `composition`), aggregation: u((e2, t2, n2) => {
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-aggregationStart`).attr(`class`, `marker aggregation ` + t2).attr(`refX`, 18).attr(`refY`, 7).attr(`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 18,7 L9,13 L1,7 L9,1 Z`), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-aggregationEnd`).attr(`class`, `marker aggregation ` + t2).attr(`refX`, 1).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 28).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 18,7 L9,13 L1,7 L9,1 Z`);
}, `aggregation`), dependency: u((e2, t2, n2) => {
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-dependencyStart`).attr(`class`, `marker dependency ` + t2).attr(`refX`, 6).attr(`refY`, 7).attr(`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 5,7 L9,13 L1,7 L9,1 Z`), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-dependencyEnd`).attr(`class`, `marker dependency ` + t2).attr(`refX`, 13).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 28).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 18,7 L9,13 L14,7 L9,1 Z`);
}, `dependency`), lollipop: u((e2, t2, n2) => {
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-lollipopStart`).attr(`class`, `marker lollipop ` + t2).attr(`refX`, 13).attr(`refY`, 7).attr(`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, `auto`).append(`circle`).attr(`stroke`, `black`).attr(`fill`, `transparent`).attr(`cx`, 7).attr(`cy`, 7).attr(`r`, 6), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-lollipopEnd`).attr(`class`, `marker lollipop ` + t2).attr(`refX`, 1).attr(`refY`, 7).attr(`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, `auto`).append(`circle`).attr(`stroke`, `black`).attr(`fill`, `transparent`).attr(`cx`, 7).attr(`cy`, 7).attr(`r`, 6);
}, `lollipop`), point: u((e2, t2, n2) => {
  e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-pointEnd`).attr(`class`, `marker ` + t2).attr(`viewBox`, `0 0 10 10`).attr(`refX`, 6).attr(`refY`, 5).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 12).attr(`markerHeight`, 12).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 0 0 L 10 5 L 0 10 z`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 1).style(`stroke-dasharray`, `1,0`), e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-pointStart`).attr(`class`, `marker ` + t2).attr(`viewBox`, `0 0 10 10`).attr(`refX`, 4.5).attr(`refY`, 5).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 12).attr(`markerHeight`, 12).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 0 5 L 10 10 L 10 0 z`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 1).style(`stroke-dasharray`, `1,0`);
}, `point`), circle: u((e2, t2, n2) => {
  e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-circleEnd`).attr(`class`, `marker ` + t2).attr(`viewBox`, `0 0 10 10`).attr(`refX`, 11).attr(`refY`, 5).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 11).attr(`markerHeight`, 11).attr(`orient`, `auto`).append(`circle`).attr(`cx`, `5`).attr(`cy`, `5`).attr(`r`, `5`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 1).style(`stroke-dasharray`, `1,0`), e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-circleStart`).attr(`class`, `marker ` + t2).attr(`viewBox`, `0 0 10 10`).attr(`refX`, -1).attr(`refY`, 5).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 11).attr(`markerHeight`, 11).attr(`orient`, `auto`).append(`circle`).attr(`cx`, `5`).attr(`cy`, `5`).attr(`r`, `5`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 1).style(`stroke-dasharray`, `1,0`);
}, `circle`), cross: u((e2, t2, n2) => {
  e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-crossEnd`).attr(`class`, `marker cross ` + t2).attr(`viewBox`, `0 0 11 11`).attr(`refX`, 12).attr(`refY`, 5.2).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 11).attr(`markerHeight`, 11).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 1,1 l 9,9 M 10,1 l -9,9`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 2).style(`stroke-dasharray`, `1,0`), e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-crossStart`).attr(`class`, `marker cross ` + t2).attr(`viewBox`, `0 0 11 11`).attr(`refX`, -1).attr(`refY`, 5.2).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 11).attr(`markerHeight`, 11).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 1,1 l 9,9 M 10,1 l -9,9`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 2).style(`stroke-dasharray`, `1,0`);
}, `cross`), barb: u((e2, t2, n2) => {
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-barbEnd`).attr(`refX`, 19).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 14).attr(`markerUnits`, `strokeWidth`).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 19,7 L9,13 L14,7 L9,1 Z`);
}, `barb`) }, ge = me, L = ((_b = (_a = r()) == null ? void 0 : _a.block) == null ? void 0 : _b.padding) ?? 8;
function _e(e2, t2) {
  if (e2 === 0 || !Number.isInteger(e2)) throw Error(`Columns must be an integer !== 0.`);
  if (t2 < 0 || !Number.isInteger(t2)) throw Error(`Position must be a non-negative integer.` + t2);
  return e2 < 0 ? { px: t2, py: 0 } : e2 === 1 ? { px: 0, py: t2 } : { px: t2 % e2, py: Math.floor(t2 / e2) };
}
u(_e, `calculateBlockPosition`);
var ve = u((e2) => {
  let t2 = 0, n2 = 0;
  for (let r2 of e2.children) {
    let { width: i2, height: a2, x: o2, y: s2 } = r2.size ?? { width: 0, height: 0, x: 0, y: 0 };
    l.debug(`getMaxChildSize abc95 child:`, r2.id, `width:`, i2, `height:`, a2, `x:`, o2, `y:`, s2, r2.type), r2.type !== `space` && (i2 > t2 && (t2 = i2 / (e2.widthInColumns ?? 1)), a2 > n2 && (n2 = a2));
  }
  return { width: t2, height: n2 };
}, `getMaxChildSize`);
function R(e2, t2, n2 = 0, r2 = 0) {
  var _a2, _b2, _c, _d, _e2, _f, _g, _h, _i, _j, _k;
  l.debug(`setBlockSizes abc95 (start)`, e2.id, (_a2 = e2 == null ? void 0 : e2.size) == null ? void 0 : _a2.x, `block width =`, e2 == null ? void 0 : e2.size, `siblingWidth`, n2), ((_b2 = e2 == null ? void 0 : e2.size) == null ? void 0 : _b2.width) || (e2.size = { width: n2, height: r2, x: 0, y: 0 });
  let i2 = 0, a2 = 0;
  if (((_c = e2.children) == null ? void 0 : _c.length) > 0) {
    for (let n3 of e2.children) R(n3, t2);
    let o2 = ve(e2);
    i2 = o2.width, a2 = o2.height, l.debug(`setBlockSizes abc95 maxWidth of`, e2.id, `:s children is `, i2, a2);
    for (let t3 of e2.children) t3.size && (l.debug(`abc95 Setting size of children of ${e2.id} id=${t3.id} ${i2} ${a2} ${JSON.stringify(t3.size)}`), t3.size.width = i2 * (t3.widthInColumns ?? 1) + L * ((t3.widthInColumns ?? 1) - 1), t3.size.height = a2, t3.size.x = 0, t3.size.y = 0, l.debug(`abc95 updating size of ${e2.id} children child:${t3.id} maxWidth:${i2} maxHeight:${a2}`));
    for (let n3 of e2.children) R(n3, t2, i2, a2);
    let s2 = e2.columns ?? -1, c2 = 0;
    for (let t3 of e2.children) c2 += t3.widthInColumns ?? 1;
    let u2 = e2.children.length;
    s2 > 0 && s2 < c2 && (u2 = s2);
    let d2 = Math.ceil(c2 / u2), f2 = u2 * (i2 + L) + L, p2 = d2 * (a2 + L) + L;
    if (f2 < n2) {
      l.debug(`Detected to small sibling: abc95 ${e2.id} siblingWidth ${n2} siblingHeight ${r2} width ${f2}`), f2 = n2, p2 = r2;
      let t3 = (n2 - u2 * L - L) / u2, o3 = (r2 - d2 * L - L) / d2;
      l.debug(`Size indata abc88`, e2.id, `childWidth`, t3, `maxWidth`, i2), l.debug(`Size indata abc88`, e2.id, `childHeight`, o3, `maxHeight`, a2), l.debug(`Size indata abc88 xSize`, u2, `padding`, L);
      for (let n3 of e2.children) n3.size && (n3.size.width = t3, n3.size.height = o3, n3.size.x = 0, n3.size.y = 0);
    }
    if (l.debug(`abc95 (finale calc) ${e2.id} xSize ${u2} ySize ${d2} columns ${s2}${e2.children.length} width=${Math.max(f2, ((_d = e2.size) == null ? void 0 : _d.width) || 0)}`), f2 < (((_e2 = e2 == null ? void 0 : e2.size) == null ? void 0 : _e2.width) || 0)) {
      f2 = ((_f = e2 == null ? void 0 : e2.size) == null ? void 0 : _f.width) || 0;
      let t3 = s2 > 0 ? Math.min(e2.children.length, s2) : e2.children.length;
      if (t3 > 0) {
        let n3 = (f2 - t3 * L - L) / t3;
        l.debug(`abc95 (growing to fit) width`, e2.id, f2, (_g = e2.size) == null ? void 0 : _g.width, n3);
        for (let t4 of e2.children) t4.size && (t4.size.width = n3);
      }
    }
    e2.size = { width: f2, height: p2, x: 0, y: 0 };
  }
  l.debug(`setBlockSizes abc94 (done)`, e2.id, (_h = e2 == null ? void 0 : e2.size) == null ? void 0 : _h.x, (_i = e2 == null ? void 0 : e2.size) == null ? void 0 : _i.width, (_j = e2 == null ? void 0 : e2.size) == null ? void 0 : _j.y, (_k = e2 == null ? void 0 : e2.size) == null ? void 0 : _k.height);
}
u(R, `setBlockSizes`);
function z(e2, t2) {
  var _a2, _b2, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
  l.debug(`abc85 layout blocks (=>layoutBlocks) ${e2.id} x: ${(_a2 = e2 == null ? void 0 : e2.size) == null ? void 0 : _a2.x} y: ${(_b2 = e2 == null ? void 0 : e2.size) == null ? void 0 : _b2.y} width: ${(_c = e2 == null ? void 0 : e2.size) == null ? void 0 : _c.width}`);
  let n2 = e2.columns ?? -1;
  if (l.debug(`layoutBlocks columns abc95`, e2.id, `=>`, n2, e2), e2.children && e2.children.length > 0) {
    let r2 = ((_e2 = (_d = e2 == null ? void 0 : e2.children[0]) == null ? void 0 : _d.size) == null ? void 0 : _e2.width) ?? 0, i2 = e2.children.length * r2 + (e2.children.length - 1) * L;
    l.debug(`widthOfChildren 88`, i2, `posX`);
    let a2 = 0;
    l.debug(`abc91 block?.size?.x`, e2.id, (_f = e2 == null ? void 0 : e2.size) == null ? void 0 : _f.x);
    let o2 = ((_g = e2 == null ? void 0 : e2.size) == null ? void 0 : _g.x) ? ((_h = e2 == null ? void 0 : e2.size) == null ? void 0 : _h.x) + (-((_i = e2 == null ? void 0 : e2.size) == null ? void 0 : _i.width) / 2 || 0) : -L, s2 = 0;
    for (let r3 of e2.children) {
      let i3 = e2;
      if (!r3.size) continue;
      let { width: c2, height: u2 } = r3.size, { px: d2, py: f2 } = _e(n2, a2);
      if (f2 != s2 && (s2 = f2, o2 = ((_j = e2 == null ? void 0 : e2.size) == null ? void 0 : _j.x) ? ((_k = e2 == null ? void 0 : e2.size) == null ? void 0 : _k.x) + (-((_l = e2 == null ? void 0 : e2.size) == null ? void 0 : _l.width) / 2 || 0) : -L, l.debug(`New row in layout for block`, e2.id, ` and child `, r3.id, s2)), l.debug(`abc89 layout blocks (child) id: ${r3.id} Pos: ${a2} (px, py) ${d2},${f2} (${(_m = i3 == null ? void 0 : i3.size) == null ? void 0 : _m.x},${(_n = i3 == null ? void 0 : i3.size) == null ? void 0 : _n.y}) parent: ${i3.id} width: ${c2}${L}`), i3.size) {
        let e3 = c2 / 2;
        r3.size.x = o2 + L + e3, l.debug(`abc91 layout blocks (calc) px, pyid:${r3.id} startingPos=X${o2} new startingPosX${r3.size.x} ${e3} padding=${L} width=${c2} halfWidth=${e3} => x:${r3.size.x} y:${r3.size.y} ${r3.widthInColumns} (width * (child?.w || 1)) / 2 ${c2 * ((r3 == null ? void 0 : r3.widthInColumns) ?? 1) / 2}`), o2 = r3.size.x + e3, r3.size.y = i3.size.y - i3.size.height / 2 + f2 * (u2 + L) + u2 / 2 + L, l.debug(`abc88 layout blocks (calc) px, pyid:${r3.id}startingPosX${o2}${L}${e3}=>x:${r3.size.x}y:${r3.size.y}${r3.widthInColumns}(width * (child?.w || 1)) / 2${c2 * ((r3 == null ? void 0 : r3.widthInColumns) ?? 1) / 2}`);
      }
      r3.children && z(r3, t2);
      let p2 = (r3 == null ? void 0 : r3.widthInColumns) ?? 1;
      n2 > 0 && (p2 = Math.min(p2, n2 - a2 % n2)), a2 += p2, l.debug(`abc88 columnsPos`, r3, a2);
    }
  }
  l.debug(`layout blocks (<==layoutBlocks) ${e2.id} x: ${(_o = e2 == null ? void 0 : e2.size) == null ? void 0 : _o.x} y: ${(_p = e2 == null ? void 0 : e2.size) == null ? void 0 : _p.y} width: ${(_q = e2 == null ? void 0 : e2.size) == null ? void 0 : _q.width}`);
}
u(z, `layoutBlocks`);
function B(e2, { minX: t2, minY: n2, maxX: r2, maxY: i2 } = { minX: 0, minY: 0, maxX: 0, maxY: 0 }) {
  if (e2.size && e2.id !== `root`) {
    let { x: a2, y: o2, width: s2, height: c2 } = e2.size;
    a2 - s2 / 2 < t2 && (t2 = a2 - s2 / 2), o2 - c2 / 2 < n2 && (n2 = o2 - c2 / 2), a2 + s2 / 2 > r2 && (r2 = a2 + s2 / 2), o2 + c2 / 2 > i2 && (i2 = o2 + c2 / 2);
  }
  if (e2.children) for (let a2 of e2.children) ({ minX: t2, minY: n2, maxX: r2, maxY: i2 } = B(a2, { minX: t2, minY: n2, maxX: r2, maxY: i2 }));
  return { minX: t2, minY: n2, maxX: r2, maxY: i2 };
}
u(B, `findBounds`);
function ye(e2) {
  let t2 = e2.getBlock(`root`);
  if (!t2) return;
  R(t2, e2, 0, 0), z(t2, e2), l.debug(`getBlocks`, JSON.stringify(t2, null, 2));
  let { minX: n2, minY: r2, maxX: i2, maxY: a2 } = B(t2), o2 = a2 - r2;
  return { x: n2, y: r2, width: i2 - n2, height: o2 };
}
u(ye, `layout`);
function V(e2, t2) {
  t2 && e2.attr(`style`, t2);
}
u(V, `applyStyle`);
function be(e2, n2) {
  let r2 = d(document.createElementNS(`http://www.w3.org/2000/svg`, `foreignObject`)), i2 = r2.append(`xhtml:div`), a2 = e2.label, o2 = e2.isNode ? `nodeLabel` : `edgeLabel`, s2 = i2.append(`span`);
  return s2.html(t(a2, n2)), V(s2, e2.labelStyle), s2.attr(`class`, o2), V(i2, e2.labelStyle), i2.style(`display`, `inline-block`), i2.style(`white-space`, `nowrap`), i2.attr(`xmlns`, `http://www.w3.org/1999/xhtml`), r2.node();
}
u(be, `addHtmlLabel`);
var H = u(async (e2, t2, n2, i2) => {
  let a2 = e2 || ``;
  typeof a2 == `object` && (a2 = a2[0]);
  let s2 = r();
  if (o(s2.flowchart.htmlLabels)) return a2 = a2.replace(/\\n|\n/g, `<br />`), l.debug(`vertexText` + a2), be({ isNode: i2, label: await b(m(a2)), labelStyle: t2.replace(`fill:`, `color:`) }, s2);
  {
    let e3 = document.createElementNS(`http://www.w3.org/2000/svg`, `text`);
    e3.setAttribute(`style`, t2.replace(`color:`, `fill:`));
    let r2 = [];
    r2 = typeof a2 == `string` ? a2.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(a2) ? a2 : [];
    for (let t3 of r2) {
      let r3 = document.createElementNS(`http://www.w3.org/2000/svg`, `tspan`);
      r3.setAttributeNS(`http://www.w3.org/XML/1998/namespace`, `xml:space`, `preserve`), r3.setAttribute(`dy`, `1em`), r3.setAttribute(`x`, `0`), n2 ? r3.setAttribute(`class`, `title-row`) : r3.setAttribute(`class`, `row`), r3.textContent = t3.trim(), e3.appendChild(r3);
    }
    return e3;
  }
}, `createLabel`), xe = u((e2, t2, n2, r2, i2) => {
  t2.arrowTypeStart && Ce(e2, `start`, t2.arrowTypeStart, n2, r2, i2), t2.arrowTypeEnd && Ce(e2, `end`, t2.arrowTypeEnd, n2, r2, i2);
}, `addEdgeMarkers`), Se = { arrow_cross: `cross`, arrow_point: `point`, arrow_barb: `barb`, arrow_circle: `circle`, aggregation: `aggregation`, extension: `extension`, composition: `composition`, dependency: `dependency`, lollipop: `lollipop` }, Ce = u((e2, t2, n2, r2, i2, a2) => {
  let o2 = Se[n2];
  if (!o2) {
    l.warn(`Unknown arrow type: ${n2}`);
    return;
  }
  let s2 = t2 === `start` ? `Start` : `End`;
  e2.attr(`marker-${t2}`, `url(${r2}#${i2}_${a2}-${o2}${s2})`);
}, `addEdgeMarker`), U = {}, W = {}, we = u(async (e2, t2) => {
  let n2 = r(), i2 = o(n2.flowchart.htmlLabels), a2 = t2.labelType === `markdown` ? x(e2, t2.label, { style: t2.labelStyle, useHtmlLabels: i2, addSvgBackground: true }, n2) : await H(t2.label, t2.labelStyle), s2 = e2.insert(`g`).attr(`class`, `edgeLabel`), c2 = s2.insert(`g`).attr(`class`, `label`);
  c2.node().appendChild(a2);
  let l2 = a2.getBBox();
  if (i2) {
    let e3 = a2.children[0], t3 = d(a2);
    l2 = e3.getBoundingClientRect(), t3.attr(`width`, l2.width), t3.attr(`height`, l2.height);
  }
  c2.attr(`transform`, `translate(` + -l2.width / 2 + `, ` + -l2.height / 2 + `)`), U[t2.id] = s2, t2.width = l2.width, t2.height = l2.height;
  let u2;
  if (t2.startLabelLeft) {
    let n3 = await H(t2.startLabelLeft, t2.labelStyle), r2 = e2.insert(`g`).attr(`class`, `edgeTerminals`), i3 = r2.insert(`g`).attr(`class`, `inner`);
    u2 = i3.node().appendChild(n3);
    let a3 = n3.getBBox();
    i3.attr(`transform`, `translate(` + -a3.width / 2 + `, ` + -a3.height / 2 + `)`), W[t2.id] || (W[t2.id] = {}), W[t2.id].startLeft = r2, G(u2, t2.startLabelLeft);
  }
  if (t2.startLabelRight) {
    let n3 = await H(t2.startLabelRight, t2.labelStyle), r2 = e2.insert(`g`).attr(`class`, `edgeTerminals`), i3 = r2.insert(`g`).attr(`class`, `inner`);
    u2 = r2.node().appendChild(n3), i3.node().appendChild(n3);
    let a3 = n3.getBBox();
    i3.attr(`transform`, `translate(` + -a3.width / 2 + `, ` + -a3.height / 2 + `)`), W[t2.id] || (W[t2.id] = {}), W[t2.id].startRight = r2, G(u2, t2.startLabelRight);
  }
  if (t2.endLabelLeft) {
    let n3 = await H(t2.endLabelLeft, t2.labelStyle), r2 = e2.insert(`g`).attr(`class`, `edgeTerminals`), i3 = r2.insert(`g`).attr(`class`, `inner`);
    u2 = i3.node().appendChild(n3);
    let a3 = n3.getBBox();
    i3.attr(`transform`, `translate(` + -a3.width / 2 + `, ` + -a3.height / 2 + `)`), r2.node().appendChild(n3), W[t2.id] || (W[t2.id] = {}), W[t2.id].endLeft = r2, G(u2, t2.endLabelLeft);
  }
  if (t2.endLabelRight) {
    let n3 = await H(t2.endLabelRight, t2.labelStyle), r2 = e2.insert(`g`).attr(`class`, `edgeTerminals`), i3 = r2.insert(`g`).attr(`class`, `inner`);
    u2 = i3.node().appendChild(n3);
    let a3 = n3.getBBox();
    i3.attr(`transform`, `translate(` + -a3.width / 2 + `, ` + -a3.height / 2 + `)`), r2.node().appendChild(n3), W[t2.id] || (W[t2.id] = {}), W[t2.id].endRight = r2, G(u2, t2.endLabelRight);
  }
  return a2;
}, `insertEdgeLabel`);
function G(e2, t2) {
  r().flowchart.htmlLabels && e2 && (e2.style.width = t2.length * 9 + `px`, e2.style.height = `12px`);
}
u(G, `setTerminalWidth`);
var Te = u((e2, t2) => {
  l.debug(`Moving label abc88 `, e2.id, e2.label, U[e2.id], t2);
  let n2 = t2.updatedPath ? t2.updatedPath : t2.originalPath, { subGraphTitleTotalMargin: i2 } = y(r());
  if (e2.label) {
    let r2 = U[e2.id], a2 = e2.x, o2 = e2.y;
    if (n2) {
      let r3 = h.calcLabelPosition(n2);
      l.debug(`Moving label ` + e2.label + ` from (`, a2, `,`, o2, `) to (`, r3.x, `,`, r3.y, `) abc88`), t2.updatedPath && (a2 = r3.x, o2 = r3.y);
    }
    r2.attr(`transform`, `translate(${a2}, ${o2 + i2 / 2})`);
  }
  if (e2.startLabelLeft) {
    let t3 = W[e2.id].startLeft, r2 = e2.x, i3 = e2.y;
    if (n2) {
      let t4 = h.calcTerminalLabelPosition(e2.arrowTypeStart ? 10 : 0, `start_left`, n2);
      r2 = t4.x, i3 = t4.y;
    }
    t3.attr(`transform`, `translate(${r2}, ${i3})`);
  }
  if (e2.startLabelRight) {
    let t3 = W[e2.id].startRight, r2 = e2.x, i3 = e2.y;
    if (n2) {
      let t4 = h.calcTerminalLabelPosition(e2.arrowTypeStart ? 10 : 0, `start_right`, n2);
      r2 = t4.x, i3 = t4.y;
    }
    t3.attr(`transform`, `translate(${r2}, ${i3})`);
  }
  if (e2.endLabelLeft) {
    let t3 = W[e2.id].endLeft, r2 = e2.x, i3 = e2.y;
    if (n2) {
      let t4 = h.calcTerminalLabelPosition(e2.arrowTypeEnd ? 10 : 0, `end_left`, n2);
      r2 = t4.x, i3 = t4.y;
    }
    t3.attr(`transform`, `translate(${r2}, ${i3})`);
  }
  if (e2.endLabelRight) {
    let t3 = W[e2.id].endRight, r2 = e2.x, i3 = e2.y;
    if (n2) {
      let t4 = h.calcTerminalLabelPosition(e2.arrowTypeEnd ? 10 : 0, `end_right`, n2);
      r2 = t4.x, i3 = t4.y;
    }
    t3.attr(`transform`, `translate(${r2}, ${i3})`);
  }
}, `positionEdgeLabel`), Ee = u((e2, t2) => {
  let n2 = e2.x, r2 = e2.y, i2 = Math.abs(t2.x - n2), a2 = Math.abs(t2.y - r2), o2 = e2.width / 2, s2 = e2.height / 2;
  return i2 >= o2 || a2 >= s2;
}, `outsideNode`), De = u((e2, t2, n2) => {
  l.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t2)}
  insidePoint : ${JSON.stringify(n2)}
  node        : x:${e2.x} y:${e2.y} w:${e2.width} h:${e2.height}`);
  let r2 = e2.x, i2 = e2.y, a2 = Math.abs(r2 - n2.x), o2 = e2.width / 2, s2 = n2.x < t2.x ? o2 - a2 : o2 + a2, c2 = e2.height / 2, u2 = Math.abs(t2.y - n2.y), d2 = Math.abs(t2.x - n2.x);
  if (Math.abs(i2 - t2.y) * o2 > Math.abs(r2 - t2.x) * c2) {
    let e3 = n2.y < t2.y ? t2.y - c2 - i2 : i2 - c2 - t2.y;
    s2 = d2 * e3 / u2;
    let r3 = { x: n2.x < t2.x ? n2.x + s2 : n2.x - d2 + s2, y: n2.y < t2.y ? n2.y + u2 - e3 : n2.y - u2 + e3 };
    return s2 === 0 && (r3.x = t2.x, r3.y = t2.y), d2 === 0 && (r3.x = t2.x), u2 === 0 && (r3.y = t2.y), l.debug(`abc89 topp/bott calc, Q ${u2}, q ${e3}, R ${d2}, r ${s2}`, r3), r3;
  } else {
    s2 = n2.x < t2.x ? t2.x - o2 - r2 : r2 - o2 - t2.x;
    let e3 = u2 * s2 / d2, i3 = n2.x < t2.x ? n2.x + d2 - s2 : n2.x - d2 + s2, a3 = n2.y < t2.y ? n2.y + e3 : n2.y - e3;
    return l.debug(`sides calc abc89, Q ${u2}, q ${e3}, R ${d2}, r ${s2}`, { _x: i3, _y: a3 }), s2 === 0 && (i3 = t2.x, a3 = t2.y), d2 === 0 && (i3 = t2.x), u2 === 0 && (a3 = t2.y), { x: i3, y: a3 };
  }
}, `intersection`), Oe = u((e2, t2) => {
  l.debug(`abc88 cutPathAtIntersect`, e2, t2);
  let n2 = [], r2 = e2[0], i2 = false;
  return e2.forEach((e3) => {
    if (!Ee(t2, e3) && !i2) {
      let a2 = De(t2, r2, e3), o2 = false;
      n2.forEach((e4) => {
        o2 || (o2 = e4.x === a2.x && e4.y === a2.y);
      }), n2.some((e4) => e4.x === a2.x && e4.y === a2.y) || n2.push(a2), i2 = true;
    } else r2 = e3, i2 || n2.push(e3);
  }), n2;
}, `cutPathAtIntersect`), ke = u(function(t2, n2, i2, a2, o2, s2, c2) {
  let u2 = i2.points;
  l.debug(`abc88 InsertEdge: edge=`, i2, `e=`, n2);
  let d2 = false, f2 = s2.node(n2.v);
  var m2 = s2.node(n2.w);
  (m2 == null ? void 0 : m2.intersect) && (f2 == null ? void 0 : f2.intersect) && (u2 = u2.slice(1, i2.points.length - 1), u2.unshift(f2.intersect(u2[0])), u2.push(m2.intersect(u2[u2.length - 1]))), i2.toCluster && (l.debug(`to cluster abc88`, a2[i2.toCluster]), u2 = Oe(i2.points, a2[i2.toCluster].node), d2 = true), i2.fromCluster && (l.debug(`from cluster abc88`, a2[i2.fromCluster]), u2 = Oe(u2.reverse(), a2[i2.fromCluster].node).reverse(), d2 = true);
  let h2 = u2.filter((e2) => !Number.isNaN(e2.y)), g2 = p;
  i2.curve && (o2 === `graph` || o2 === `flowchart`) && (g2 = i2.curve);
  let { x: y2, y: b2 } = v(i2), x2 = _().x(y2).y(b2).curve(g2), S2;
  switch (i2.thickness) {
    case `normal`:
      S2 = `edge-thickness-normal`;
      break;
    case `thick`:
      S2 = `edge-thickness-thick`;
      break;
    case `invisible`:
      S2 = `edge-thickness-thick`;
      break;
    default:
      S2 = ``;
  }
  switch (i2.pattern) {
    case `solid`:
      S2 += ` edge-pattern-solid`;
      break;
    case `dotted`:
      S2 += ` edge-pattern-dotted`;
      break;
    case `dashed`:
      S2 += ` edge-pattern-dashed`;
      break;
  }
  let C2 = t2.append(`path`).attr(`d`, x2(h2)).attr(`id`, i2.id).attr(`class`, ` ` + S2 + (i2.classes ? ` ` + i2.classes : ``)).attr(`style`, i2.style), w2 = ``;
  (r().flowchart.arrowMarkerAbsolute || r().state.arrowMarkerAbsolute) && (w2 = e(true)), xe(C2, i2, w2, c2, o2);
  let T2 = {};
  return d2 && (T2.updatedPath = u2), T2.originalPath = i2.points, T2;
}, `insertEdge`), Ae = u((e2) => {
  let t2 = /* @__PURE__ */ new Set();
  for (let n2 of e2) switch (n2) {
    case `x`:
      t2.add(`right`), t2.add(`left`);
      break;
    case `y`:
      t2.add(`up`), t2.add(`down`);
      break;
    default:
      t2.add(n2);
      break;
  }
  return t2;
}, `expandAndDeduplicateDirections`), je = u((e2, t2, n2) => {
  let r2 = Ae(e2), i2 = t2.height + 2 * n2.padding, a2 = i2 / 2, o2 = t2.width + 2 * a2 + n2.padding, s2 = n2.padding / 2;
  return r2.has(`right`) && r2.has(`left`) && r2.has(`up`) && r2.has(`down`) ? [{ x: 0, y: 0 }, { x: a2, y: 0 }, { x: o2 / 2, y: 2 * s2 }, { x: o2 - a2, y: 0 }, { x: o2, y: 0 }, { x: o2, y: -i2 / 3 }, { x: o2 + 2 * s2, y: -i2 / 2 }, { x: o2, y: -2 * i2 / 3 }, { x: o2, y: -i2 }, { x: o2 - a2, y: -i2 }, { x: o2 / 2, y: -i2 - 2 * s2 }, { x: a2, y: -i2 }, { x: 0, y: -i2 }, { x: 0, y: -2 * i2 / 3 }, { x: -2 * s2, y: -i2 / 2 }, { x: 0, y: -i2 / 3 }] : r2.has(`right`) && r2.has(`left`) && r2.has(`up`) ? [{ x: a2, y: 0 }, { x: o2 - a2, y: 0 }, { x: o2, y: -i2 / 2 }, { x: o2 - a2, y: -i2 }, { x: a2, y: -i2 }, { x: 0, y: -i2 / 2 }] : r2.has(`right`) && r2.has(`left`) && r2.has(`down`) ? [{ x: 0, y: 0 }, { x: a2, y: -i2 }, { x: o2 - a2, y: -i2 }, { x: o2, y: 0 }] : r2.has(`right`) && r2.has(`up`) && r2.has(`down`) ? [{ x: 0, y: 0 }, { x: o2, y: -a2 }, { x: o2, y: -i2 + a2 }, { x: 0, y: -i2 }] : r2.has(`left`) && r2.has(`up`) && r2.has(`down`) ? [{ x: o2, y: 0 }, { x: 0, y: -a2 }, { x: 0, y: -i2 + a2 }, { x: o2, y: -i2 }] : r2.has(`right`) && r2.has(`left`) ? [{ x: a2, y: 0 }, { x: a2, y: -s2 }, { x: o2 - a2, y: -s2 }, { x: o2 - a2, y: 0 }, { x: o2, y: -i2 / 2 }, { x: o2 - a2, y: -i2 }, { x: o2 - a2, y: -i2 + s2 }, { x: a2, y: -i2 + s2 }, { x: a2, y: -i2 }, { x: 0, y: -i2 / 2 }] : r2.has(`up`) && r2.has(`down`) ? [{ x: o2 / 2, y: 0 }, { x: 0, y: -s2 }, { x: a2, y: -s2 }, { x: a2, y: -i2 + s2 }, { x: 0, y: -i2 + s2 }, { x: o2 / 2, y: -i2 }, { x: o2, y: -i2 + s2 }, { x: o2 - a2, y: -i2 + s2 }, { x: o2 - a2, y: -s2 }, { x: o2, y: -s2 }] : r2.has(`right`) && r2.has(`up`) ? [{ x: 0, y: 0 }, { x: o2, y: -a2 }, { x: 0, y: -i2 }] : r2.has(`right`) && r2.has(`down`) ? [{ x: 0, y: 0 }, { x: o2, y: 0 }, { x: 0, y: -i2 }] : r2.has(`left`) && r2.has(`up`) ? [{ x: o2, y: 0 }, { x: 0, y: -a2 }, { x: o2, y: -i2 }] : r2.has(`left`) && r2.has(`down`) ? [{ x: o2, y: 0 }, { x: 0, y: 0 }, { x: o2, y: -i2 }] : r2.has(`right`) ? [{ x: a2, y: -s2 }, { x: a2, y: -s2 }, { x: o2 - a2, y: -s2 }, { x: o2 - a2, y: 0 }, { x: o2, y: -i2 / 2 }, { x: o2 - a2, y: -i2 }, { x: o2 - a2, y: -i2 + s2 }, { x: a2, y: -i2 + s2 }, { x: a2, y: -i2 + s2 }] : r2.has(`left`) ? [{ x: a2, y: 0 }, { x: a2, y: -s2 }, { x: o2 - a2, y: -s2 }, { x: o2 - a2, y: -i2 + s2 }, { x: a2, y: -i2 + s2 }, { x: a2, y: -i2 }, { x: 0, y: -i2 / 2 }] : r2.has(`up`) ? [{ x: a2, y: -s2 }, { x: a2, y: -i2 + s2 }, { x: 0, y: -i2 + s2 }, { x: o2 / 2, y: -i2 }, { x: o2, y: -i2 + s2 }, { x: o2 - a2, y: -i2 + s2 }, { x: o2 - a2, y: -s2 }] : r2.has(`down`) ? [{ x: o2 / 2, y: 0 }, { x: 0, y: -s2 }, { x: a2, y: -s2 }, { x: a2, y: -i2 + s2 }, { x: o2 - a2, y: -i2 + s2 }, { x: o2 - a2, y: -s2 }, { x: o2, y: -s2 }] : [{ x: 0, y: 0 }];
}, `getArrowPoints`);
function Me(e2, t2) {
  return e2.intersect(t2);
}
u(Me, `intersectNode`);
var Ne = Me;
function Pe(e2, t2, n2, r2) {
  var i2 = e2.x, a2 = e2.y, o2 = i2 - r2.x, s2 = a2 - r2.y, c2 = Math.sqrt(t2 * t2 * s2 * s2 + n2 * n2 * o2 * o2), l2 = Math.abs(t2 * n2 * o2 / c2);
  r2.x < i2 && (l2 = -l2);
  var u2 = Math.abs(t2 * n2 * s2 / c2);
  return r2.y < a2 && (u2 = -u2), { x: i2 + l2, y: a2 + u2 };
}
u(Pe, `intersectEllipse`);
var Fe = Pe;
function Ie(e2, t2, n2) {
  return Fe(e2, t2, t2, n2);
}
u(Ie, `intersectCircle`);
var Le = Ie;
function Re(e2, t2, n2, r2) {
  var i2 = t2.y - e2.y, a2, o2 = e2.x - t2.x, s2, c2 = t2.x * e2.y - e2.x * t2.y, l2, u2, d2, f2 = i2 * n2.x + o2 * n2.y + c2, p2 = i2 * r2.x + o2 * r2.y + c2, m2, h2, g2, _2, v2;
  if (!(f2 !== 0 && p2 !== 0 && ze(f2, p2)) && (a2 = r2.y - n2.y, s2 = n2.x - r2.x, l2 = r2.x * n2.y - n2.x * r2.y, u2 = a2 * e2.x + s2 * e2.y + l2, d2 = a2 * t2.x + s2 * t2.y + l2, !(u2 !== 0 && d2 !== 0 && ze(u2, d2)) && (m2 = i2 * s2 - a2 * o2, m2 !== 0))) return h2 = Math.abs(m2 / 2), g2 = o2 * l2 - s2 * c2, _2 = g2 < 0 ? (g2 - h2) / m2 : (g2 + h2) / m2, g2 = a2 * c2 - i2 * l2, v2 = g2 < 0 ? (g2 - h2) / m2 : (g2 + h2) / m2, { x: _2, y: v2 };
}
u(Re, `intersectLine`);
function ze(e2, t2) {
  return e2 * t2 > 0;
}
u(ze, `sameSign`);
var Be = Re, Ve = He;
function He(e2, t2, n2) {
  var r2 = e2.x, i2 = e2.y, a2 = [], o2 = 1 / 0, s2 = 1 / 0;
  typeof t2.forEach == `function` ? t2.forEach(function(e3) {
    o2 = Math.min(o2, e3.x), s2 = Math.min(s2, e3.y);
  }) : (o2 = Math.min(o2, t2.x), s2 = Math.min(s2, t2.y));
  for (var c2 = r2 - e2.width / 2 - o2, l2 = i2 - e2.height / 2 - s2, u2 = 0; u2 < t2.length; u2++) {
    var d2 = t2[u2], f2 = t2[u2 < t2.length - 1 ? u2 + 1 : 0], p2 = Be(e2, n2, { x: c2 + d2.x, y: l2 + d2.y }, { x: c2 + f2.x, y: l2 + f2.y });
    p2 && a2.push(p2);
  }
  return a2.length ? (a2.length > 1 && a2.sort(function(e3, t3) {
    var r3 = e3.x - n2.x, i3 = e3.y - n2.y, a3 = Math.sqrt(r3 * r3 + i3 * i3), o3 = t3.x - n2.x, s3 = t3.y - n2.y, c3 = Math.sqrt(o3 * o3 + s3 * s3);
    return a3 < c3 ? -1 : a3 === c3 ? 0 : 1;
  }), a2[0]) : e2;
}
u(He, `intersectPolygon`);
var K = { node: Ne, circle: Le, ellipse: Fe, polygon: Ve, rect: u((e2, t2) => {
  var n2 = e2.x, r2 = e2.y, i2 = t2.x - n2, a2 = t2.y - r2, o2 = e2.width / 2, s2 = e2.height / 2, c2, l2;
  return Math.abs(a2) * o2 > Math.abs(i2) * s2 ? (a2 < 0 && (s2 = -s2), c2 = a2 === 0 ? 0 : s2 * i2 / a2, l2 = s2) : (i2 < 0 && (o2 = -o2), c2 = o2, l2 = i2 === 0 ? 0 : o2 * a2 / i2), { x: n2 + c2, y: r2 + l2 };
}, `intersectRect`) }, q = u(async (e2, n2, i2, a2) => {
  let s2 = r(), c2, l2 = n2.useHtmlLabels || o(s2.flowchart.htmlLabels);
  c2 = i2 || `node default`;
  let f2 = e2.insert(`g`).attr(`class`, c2).attr(`id`, n2.domId || n2.id), p2 = f2.insert(`g`).attr(`class`, `label`).attr(`style`, n2.labelStyle), h2;
  h2 = n2.labelText === void 0 ? `` : typeof n2.labelText == `string` ? n2.labelText : n2.labelText[0];
  let g2 = p2.node(), _2;
  _2 = n2.labelType === `markdown` ? x(p2, t(m(h2), s2), { useHtmlLabels: l2, width: n2.width || s2.flowchart.wrappingWidth, classes: `markdown-node-label` }, s2) : g2.appendChild(await H(t(m(h2), s2), n2.labelStyle, false, a2));
  let v2 = _2.getBBox(), y2 = n2.padding / 2;
  if (o(s2.flowchart.htmlLabels)) {
    let e3 = _2.children[0], t2 = d(_2), n3 = e3.getElementsByTagName(`img`);
    if (n3) {
      let e4 = h2.replace(/<img[^>]*>/g, ``).trim() === ``;
      await Promise.all([...n3].map((t3) => new Promise((n4) => {
        function r2() {
          if (t3.style.display = `flex`, t3.style.flexDirection = `column`, e4) {
            let e5 = s2.fontSize ? s2.fontSize : window.getComputedStyle(document.body).fontSize, n5 = parseInt(e5, 10) * 5 + `px`;
            t3.style.minWidth = n5, t3.style.maxWidth = n5;
          } else t3.style.width = `100%`;
          n4(t3);
        }
        u(r2, `setupImage`), setTimeout(() => {
          t3.complete && r2();
        }), t3.addEventListener(`error`, r2), t3.addEventListener(`load`, r2);
      })));
    }
    v2 = e3.getBoundingClientRect(), t2.attr(`width`, v2.width), t2.attr(`height`, v2.height);
  }
  return l2 ? p2.attr(`transform`, `translate(` + -v2.width / 2 + `, ` + -v2.height / 2 + `)`) : p2.attr(`transform`, `translate(0, ` + -v2.height / 2 + `)`), n2.centerLabel && p2.attr(`transform`, `translate(` + -v2.width / 2 + `, ` + -v2.height / 2 + `)`), p2.insert(`rect`, `:first-child`), { shapeSvg: f2, bbox: v2, halfPadding: y2, label: p2 };
}, `labelHelper`), J = u((e2, t2) => {
  let n2 = t2.node().getBBox();
  e2.width = n2.width, e2.height = n2.height;
}, `updateNodeBounds`);
function Y(e2, t2, n2, r2) {
  return e2.insert(`polygon`, `:first-child`).attr(`points`, r2.map(function(e3) {
    return e3.x + `,` + e3.y;
  }).join(` `)).attr(`class`, `label-container`).attr(`transform`, `translate(` + -t2 / 2 + `,` + n2 / 2 + `)`);
}
u(Y, `insertPolygonShape`);
var Ue = u(async (e2, t2) => {
  t2.useHtmlLabels || r().flowchart.htmlLabels || (t2.centerLabel = true);
  let { shapeSvg: n2, bbox: i2, halfPadding: a2 } = await q(e2, t2, `node ` + t2.classes, true);
  l.info(`Classes = `, t2.classes);
  let o2 = n2.insert(`rect`, `:first-child`);
  return o2.attr(`rx`, t2.rx).attr(`ry`, t2.ry).attr(`x`, -i2.width / 2 - a2).attr(`y`, -i2.height / 2 - a2).attr(`width`, i2.width + t2.padding).attr(`height`, i2.height + t2.padding), J(t2, o2), t2.intersect = function(e3) {
    return K.rect(t2, e3);
  }, n2;
}, `note`), We = u((e2) => e2 ? ` ` + e2 : ``, `formatClass`), X = u((e2, t2) => `${t2 || `node default`}${We(e2.classes)} ${We(e2.class)}`, `getClassesFromNode`), Ge = u(async (e2, t2) => {
  let { shapeSvg: n2, bbox: r2 } = await q(e2, t2, X(t2, void 0), true), i2 = r2.width + t2.padding + (r2.height + t2.padding), a2 = [{ x: i2 / 2, y: 0 }, { x: i2, y: -i2 / 2 }, { x: i2 / 2, y: -i2 }, { x: 0, y: -i2 / 2 }];
  l.info(`Question main (Circle)`);
  let o2 = Y(n2, i2, i2, a2);
  return o2.attr(`style`, t2.style), J(t2, o2), t2.intersect = function(e3) {
    return l.warn(`Intersect called`), K.polygon(t2, a2, e3);
  }, n2;
}, `question`), Ke = u((e2, t2) => {
  let n2 = e2.insert(`g`).attr(`class`, `node default`).attr(`id`, t2.domId || t2.id);
  return n2.insert(`polygon`, `:first-child`).attr(`points`, [{ x: 0, y: 28 / 2 }, { x: 28 / 2, y: 0 }, { x: 0, y: -28 / 2 }, { x: -28 / 2, y: 0 }].map(function(e3) {
    return e3.x + `,` + e3.y;
  }).join(` `)).attr(`class`, `state-start`).attr(`r`, 7).attr(`width`, 28).attr(`height`, 28), t2.width = 28, t2.height = 28, t2.intersect = function(e3) {
    return K.circle(t2, 14, e3);
  }, n2;
}, `choice`), qe = u(async (e2, t2) => {
  let { shapeSvg: n2, bbox: r2 } = await q(e2, t2, X(t2, void 0), true), i2 = r2.height + t2.padding, a2 = i2 / 4, o2 = r2.width + 2 * a2 + t2.padding, s2 = [{ x: a2, y: 0 }, { x: o2 - a2, y: 0 }, { x: o2, y: -i2 / 2 }, { x: o2 - a2, y: -i2 }, { x: a2, y: -i2 }, { x: 0, y: -i2 / 2 }], c2 = Y(n2, o2, i2, s2);
  return c2.attr(`style`, t2.style), J(t2, c2), t2.intersect = function(e3) {
    return K.polygon(t2, s2, e3);
  }, n2;
}, `hexagon`), Je = u(async (e2, t2) => {
  let { shapeSvg: n2, bbox: r2 } = await q(e2, t2, void 0, true), i2 = r2.height + 2 * t2.padding, a2 = i2 / 2, o2 = r2.width + 2 * a2 + t2.padding, s2 = je(t2.directions, r2, t2), c2 = Y(n2, o2, i2, s2);
  return c2.attr(`style`, t2.style), J(t2, c2), t2.intersect = function(e3) {
    return K.polygon(t2, s2, e3);
  }, n2;
}, `block_arrow`), Ye = u(async (e2, t2) => {
  let { shapeSvg: n2, bbox: r2 } = await q(e2, t2, X(t2, void 0), true), i2 = r2.width + t2.padding, a2 = r2.height + t2.padding, o2 = [{ x: -a2 / 2, y: 0 }, { x: i2, y: 0 }, { x: i2, y: -a2 }, { x: -a2 / 2, y: -a2 }, { x: 0, y: -a2 / 2 }];
  return Y(n2, i2, a2, o2).attr(`style`, t2.style), t2.width = i2 + a2, t2.height = a2, t2.intersect = function(e3) {
    return K.polygon(t2, o2, e3);
  }, n2;
}, `rect_left_inv_arrow`), Xe = u(async (e2, t2) => {
  let { shapeSvg: n2, bbox: r2 } = await q(e2, t2, X(t2), true), i2 = r2.width + t2.padding, a2 = r2.height + t2.padding, o2 = [{ x: -2 * a2 / 6, y: 0 }, { x: i2 - a2 / 6, y: 0 }, { x: i2 + 2 * a2 / 6, y: -a2 }, { x: a2 / 6, y: -a2 }], s2 = Y(n2, i2, a2, o2);
  return s2.attr(`style`, t2.style), J(t2, s2), t2.intersect = function(e3) {
    return K.polygon(t2, o2, e3);
  }, n2;
}, `lean_right`), Ze = u(async (e2, t2) => {
  let { shapeSvg: n2, bbox: r2 } = await q(e2, t2, X(t2, void 0), true), i2 = r2.width + t2.padding, a2 = r2.height + t2.padding, o2 = [{ x: 2 * a2 / 6, y: 0 }, { x: i2 + a2 / 6, y: 0 }, { x: i2 - 2 * a2 / 6, y: -a2 }, { x: -a2 / 6, y: -a2 }], s2 = Y(n2, i2, a2, o2);
  return s2.attr(`style`, t2.style), J(t2, s2), t2.intersect = function(e3) {
    return K.polygon(t2, o2, e3);
  }, n2;
}, `lean_left`), Qe = u(async (e2, t2) => {
  let { shapeSvg: n2, bbox: r2 } = await q(e2, t2, X(t2, void 0), true), i2 = r2.width + t2.padding, a2 = r2.height + t2.padding, o2 = [{ x: -2 * a2 / 6, y: 0 }, { x: i2 + 2 * a2 / 6, y: 0 }, { x: i2 - a2 / 6, y: -a2 }, { x: a2 / 6, y: -a2 }], s2 = Y(n2, i2, a2, o2);
  return s2.attr(`style`, t2.style), J(t2, s2), t2.intersect = function(e3) {
    return K.polygon(t2, o2, e3);
  }, n2;
}, `trapezoid`), $e = u(async (e2, t2) => {
  let { shapeSvg: n2, bbox: r2 } = await q(e2, t2, X(t2, void 0), true), i2 = r2.width + t2.padding, a2 = r2.height + t2.padding, o2 = [{ x: a2 / 6, y: 0 }, { x: i2 - a2 / 6, y: 0 }, { x: i2 + 2 * a2 / 6, y: -a2 }, { x: -2 * a2 / 6, y: -a2 }], s2 = Y(n2, i2, a2, o2);
  return s2.attr(`style`, t2.style), J(t2, s2), t2.intersect = function(e3) {
    return K.polygon(t2, o2, e3);
  }, n2;
}, `inv_trapezoid`), et = u(async (e2, t2) => {
  let { shapeSvg: n2, bbox: r2 } = await q(e2, t2, X(t2, void 0), true), i2 = r2.width + t2.padding, a2 = r2.height + t2.padding, o2 = [{ x: 0, y: 0 }, { x: i2 + a2 / 2, y: 0 }, { x: i2, y: -a2 / 2 }, { x: i2 + a2 / 2, y: -a2 }, { x: 0, y: -a2 }], s2 = Y(n2, i2, a2, o2);
  return s2.attr(`style`, t2.style), J(t2, s2), t2.intersect = function(e3) {
    return K.polygon(t2, o2, e3);
  }, n2;
}, `rect_right_inv_arrow`), tt = u(async (e2, t2) => {
  let { shapeSvg: n2, bbox: r2 } = await q(e2, t2, X(t2, void 0), true), i2 = r2.width + t2.padding, a2 = i2 / 2, o2 = a2 / (2.5 + i2 / 50), s2 = r2.height + o2 + t2.padding, c2 = `M 0,` + o2 + ` a ` + a2 + `,` + o2 + ` 0,0,0 ` + i2 + ` 0 a ` + a2 + `,` + o2 + ` 0,0,0 ` + -i2 + ` 0 l 0,` + s2 + ` a ` + a2 + `,` + o2 + ` 0,0,0 ` + i2 + ` 0 l 0,` + -s2;
  return J(t2, n2.attr(`label-offset-y`, o2).insert(`path`, `:first-child`).attr(`style`, t2.style).attr(`d`, c2).attr(`transform`, `translate(` + -i2 / 2 + `,` + -(s2 / 2 + o2) + `)`)), t2.intersect = function(e3) {
    let n3 = K.rect(t2, e3), r3 = n3.x - t2.x;
    if (a2 != 0 && (Math.abs(r3) < t2.width / 2 || Math.abs(r3) == t2.width / 2 && Math.abs(n3.y - t2.y) > t2.height / 2 - o2)) {
      let i3 = o2 * o2 * (1 - r3 * r3 / (a2 * a2));
      i3 != 0 && (i3 = Math.sqrt(i3)), i3 = o2 - i3, e3.y - t2.y > 0 && (i3 = -i3), n3.y += i3;
    }
    return n3;
  }, n2;
}, `cylinder`), nt = u(async (e2, t2) => {
  let { shapeSvg: n2, bbox: r2, halfPadding: i2 } = await q(e2, t2, `node ` + t2.classes + ` ` + t2.class, true), a2 = n2.insert(`rect`, `:first-child`), o2 = t2.positioned ? t2.width : r2.width + t2.padding, s2 = t2.positioned ? t2.height : r2.height + t2.padding, c2 = t2.positioned ? -o2 / 2 : -r2.width / 2 - i2, u2 = t2.positioned ? -s2 / 2 : -r2.height / 2 - i2;
  if (a2.attr(`class`, `basic label-container`).attr(`style`, t2.style).attr(`rx`, t2.rx).attr(`ry`, t2.ry).attr(`x`, c2).attr(`y`, u2).attr(`width`, o2).attr(`height`, s2), t2.props) {
    let e3 = new Set(Object.keys(t2.props));
    t2.props.borders && (Z(a2, t2.props.borders, o2, s2), e3.delete(`borders`)), e3.forEach((e4) => {
      l.warn(`Unknown node property ${e4}`);
    });
  }
  return J(t2, a2), t2.intersect = function(e3) {
    return K.rect(t2, e3);
  }, n2;
}, `rect`), rt = u(async (e2, t2) => {
  let { shapeSvg: n2, bbox: r2, halfPadding: i2 } = await q(e2, t2, `node ` + t2.classes, true), a2 = n2.insert(`rect`, `:first-child`), o2 = t2.positioned ? t2.width : r2.width + t2.padding, s2 = t2.positioned ? t2.height : r2.height + t2.padding, c2 = t2.positioned ? -o2 / 2 : -r2.width / 2 - i2, u2 = t2.positioned ? -s2 / 2 : -r2.height / 2 - i2;
  if (a2.attr(`class`, `basic cluster composite label-container`).attr(`style`, t2.style).attr(`rx`, t2.rx).attr(`ry`, t2.ry).attr(`x`, c2).attr(`y`, u2).attr(`width`, o2).attr(`height`, s2), t2.props) {
    let e3 = new Set(Object.keys(t2.props));
    t2.props.borders && (Z(a2, t2.props.borders, o2, s2), e3.delete(`borders`)), e3.forEach((e4) => {
      l.warn(`Unknown node property ${e4}`);
    });
  }
  return J(t2, a2), t2.intersect = function(e3) {
    return K.rect(t2, e3);
  }, n2;
}, `composite`), it = u(async (e2, t2) => {
  let { shapeSvg: n2 } = await q(e2, t2, `label`, true);
  l.trace(`Classes = `, t2.class);
  let r2 = n2.insert(`rect`, `:first-child`);
  if (r2.attr(`width`, 0).attr(`height`, 0), n2.attr(`class`, `label edgeLabel`), t2.props) {
    let e3 = new Set(Object.keys(t2.props));
    t2.props.borders && (Z(r2, t2.props.borders, 0, 0), e3.delete(`borders`)), e3.forEach((e4) => {
      l.warn(`Unknown node property ${e4}`);
    });
  }
  return J(t2, r2), t2.intersect = function(e3) {
    return K.rect(t2, e3);
  }, n2;
}, `labelRect`);
function Z(e2, t2, n2, r2) {
  let i2 = [], a2 = u((e3) => {
    i2.push(e3, 0);
  }, `addBorder`), o2 = u((e3) => {
    i2.push(0, e3);
  }, `skipBorder`);
  t2.includes(`t`) ? (l.debug(`add top border`), a2(n2)) : o2(n2), t2.includes(`r`) ? (l.debug(`add right border`), a2(r2)) : o2(r2), t2.includes(`b`) ? (l.debug(`add bottom border`), a2(n2)) : o2(n2), t2.includes(`l`) ? (l.debug(`add left border`), a2(r2)) : o2(r2), e2.attr(`stroke-dasharray`, i2.join(` `));
}
u(Z, `applyNodePropertyBorders`);
var at = u(async (e2, t2) => {
  let n2;
  n2 = t2.classes ? `node ` + t2.classes : `node default`;
  let i2 = e2.insert(`g`).attr(`class`, n2).attr(`id`, t2.domId || t2.id), a2 = i2.insert(`rect`, `:first-child`), s2 = i2.insert(`line`), c2 = i2.insert(`g`).attr(`class`, `label`), u2 = t2.labelText.flat ? t2.labelText.flat() : t2.labelText, f2 = ``;
  f2 = typeof u2 == `object` ? u2[0] : u2, l.info(`Label text abc79`, f2, u2, typeof u2 == `object`);
  let p2 = c2.node().appendChild(await H(f2, t2.labelStyle, true, true)), m2 = { width: 0, height: 0 };
  if (o(r().flowchart.htmlLabels)) {
    let e3 = p2.children[0], t3 = d(p2);
    m2 = e3.getBoundingClientRect(), t3.attr(`width`, m2.width), t3.attr(`height`, m2.height);
  }
  l.info(`Text 2`, u2);
  let h2 = u2.slice(1, u2.length), g2 = p2.getBBox(), _2 = c2.node().appendChild(await H(h2.join ? h2.join(`<br/>`) : h2, t2.labelStyle, true, true));
  if (o(r().flowchart.htmlLabels)) {
    let e3 = _2.children[0], t3 = d(_2);
    m2 = e3.getBoundingClientRect(), t3.attr(`width`, m2.width), t3.attr(`height`, m2.height);
  }
  let v2 = t2.padding / 2;
  return d(_2).attr(`transform`, `translate( ` + (m2.width > g2.width ? 0 : (g2.width - m2.width) / 2) + `, ` + (g2.height + v2 + 5) + `)`), d(p2).attr(`transform`, `translate( ` + (m2.width < g2.width ? 0 : -(g2.width - m2.width) / 2) + `, 0)`), m2 = c2.node().getBBox(), c2.attr(`transform`, `translate(` + -m2.width / 2 + `, ` + (-m2.height / 2 - v2 + 3) + `)`), a2.attr(`class`, `outer title-state`).attr(`x`, -m2.width / 2 - v2).attr(`y`, -m2.height / 2 - v2).attr(`width`, m2.width + t2.padding).attr(`height`, m2.height + t2.padding), s2.attr(`class`, `divider`).attr(`x1`, -m2.width / 2 - v2).attr(`x2`, m2.width / 2 + v2).attr(`y1`, -m2.height / 2 - v2 + g2.height + v2).attr(`y2`, -m2.height / 2 - v2 + g2.height + v2), J(t2, a2), t2.intersect = function(e3) {
    return K.rect(t2, e3);
  }, i2;
}, `rectWithTitle`), ot = u(async (e2, t2) => {
  let { shapeSvg: n2, bbox: r2 } = await q(e2, t2, X(t2, void 0), true), i2 = r2.height + t2.padding, a2 = r2.width + i2 / 4 + t2.padding;
  return J(t2, n2.insert(`rect`, `:first-child`).attr(`style`, t2.style).attr(`rx`, i2 / 2).attr(`ry`, i2 / 2).attr(`x`, -a2 / 2).attr(`y`, -i2 / 2).attr(`width`, a2).attr(`height`, i2)), t2.intersect = function(e3) {
    return K.rect(t2, e3);
  }, n2;
}, `stadium`), st = u(async (e2, t2) => {
  let { shapeSvg: n2, bbox: r2, halfPadding: i2 } = await q(e2, t2, X(t2, void 0), true), a2 = n2.insert(`circle`, `:first-child`);
  return a2.attr(`style`, t2.style).attr(`rx`, t2.rx).attr(`ry`, t2.ry).attr(`r`, r2.width / 2 + i2).attr(`width`, r2.width + t2.padding).attr(`height`, r2.height + t2.padding), l.info(`Circle main`), J(t2, a2), t2.intersect = function(e3) {
    return l.info(`Circle intersect`, t2, r2.width / 2 + i2, e3), K.circle(t2, r2.width / 2 + i2, e3);
  }, n2;
}, `circle`), ct = u(async (e2, t2) => {
  let { shapeSvg: n2, bbox: r2, halfPadding: i2 } = await q(e2, t2, X(t2, void 0), true), a2 = n2.insert(`g`, `:first-child`), o2 = a2.insert(`circle`), s2 = a2.insert(`circle`);
  return a2.attr(`class`, t2.class), o2.attr(`style`, t2.style).attr(`rx`, t2.rx).attr(`ry`, t2.ry).attr(`r`, r2.width / 2 + i2 + 5).attr(`width`, r2.width + t2.padding + 10).attr(`height`, r2.height + t2.padding + 10), s2.attr(`style`, t2.style).attr(`rx`, t2.rx).attr(`ry`, t2.ry).attr(`r`, r2.width / 2 + i2).attr(`width`, r2.width + t2.padding).attr(`height`, r2.height + t2.padding), l.info(`DoubleCircle main`), J(t2, o2), t2.intersect = function(e3) {
    return l.info(`DoubleCircle intersect`, t2, r2.width / 2 + i2 + 5, e3), K.circle(t2, r2.width / 2 + i2 + 5, e3);
  }, n2;
}, `doublecircle`), lt = u(async (e2, t2) => {
  let { shapeSvg: n2, bbox: r2 } = await q(e2, t2, X(t2, void 0), true), i2 = r2.width + t2.padding, a2 = r2.height + t2.padding, o2 = [{ x: 0, y: 0 }, { x: i2, y: 0 }, { x: i2, y: -a2 }, { x: 0, y: -a2 }, { x: 0, y: 0 }, { x: -8, y: 0 }, { x: i2 + 8, y: 0 }, { x: i2 + 8, y: -a2 }, { x: -8, y: -a2 }, { x: -8, y: 0 }], s2 = Y(n2, i2, a2, o2);
  return s2.attr(`style`, t2.style), J(t2, s2), t2.intersect = function(e3) {
    return K.polygon(t2, o2, e3);
  }, n2;
}, `subroutine`), ut = u((e2, t2) => {
  let n2 = e2.insert(`g`).attr(`class`, `node default`).attr(`id`, t2.domId || t2.id), r2 = n2.insert(`circle`, `:first-child`);
  return r2.attr(`class`, `state-start`).attr(`r`, 7).attr(`width`, 14).attr(`height`, 14), J(t2, r2), t2.intersect = function(e3) {
    return K.circle(t2, 7, e3);
  }, n2;
}, `start`), dt = u((e2, t2, n2) => {
  let r2 = e2.insert(`g`).attr(`class`, `node default`).attr(`id`, t2.domId || t2.id), i2 = 70, a2 = 10;
  return n2 === `LR` && (i2 = 10, a2 = 70), J(t2, r2.append(`rect`).attr(`x`, -1 * i2 / 2).attr(`y`, -1 * a2 / 2).attr(`width`, i2).attr(`height`, a2).attr(`class`, `fork-join`)), t2.height += t2.padding / 2, t2.width += t2.padding / 2, t2.intersect = function(e3) {
    return K.rect(t2, e3);
  }, r2;
}, `forkJoin`), ft = { rhombus: Ge, composite: rt, question: Ge, rect: nt, labelRect: it, rectWithTitle: at, choice: Ke, circle: st, doublecircle: ct, stadium: ot, hexagon: qe, block_arrow: Je, rect_left_inv_arrow: Ye, lean_right: Xe, lean_left: Ze, trapezoid: Qe, inv_trapezoid: $e, rect_right_inv_arrow: et, cylinder: tt, start: ut, end: u((e2, t2) => {
  let n2 = e2.insert(`g`).attr(`class`, `node default`).attr(`id`, t2.domId || t2.id), r2 = n2.insert(`circle`, `:first-child`), i2 = n2.insert(`circle`, `:first-child`);
  return i2.attr(`class`, `state-start`).attr(`r`, 7).attr(`width`, 14).attr(`height`, 14), r2.attr(`class`, `state-end`).attr(`r`, 5).attr(`width`, 10).attr(`height`, 10), J(t2, i2), t2.intersect = function(e3) {
    return K.circle(t2, 7, e3);
  }, n2;
}, `end`), note: Ue, subroutine: lt, fork: dt, join: dt, class_box: u(async (e2, t2) => {
  var _a2;
  let n2 = t2.padding / 2, i2;
  i2 = t2.classes ? `node ` + t2.classes : `node default`;
  let a2 = e2.insert(`g`).attr(`class`, i2).attr(`id`, t2.domId || t2.id), s2 = a2.insert(`rect`, `:first-child`), c2 = a2.insert(`line`), l2 = a2.insert(`line`), u2 = 0, f2 = 4, p2 = a2.insert(`g`).attr(`class`, `label`), m2 = 0, h2 = (_a2 = t2.classData.annotations) == null ? void 0 : _a2[0], g2 = t2.classData.annotations[0] ? `\xAB` + t2.classData.annotations[0] + `\xBB` : ``, _2 = p2.node().appendChild(await H(g2, t2.labelStyle, true, true)), v2 = _2.getBBox();
  if (o(r().flowchart.htmlLabels)) {
    let e3 = _2.children[0], t3 = d(_2);
    v2 = e3.getBoundingClientRect(), t3.attr(`width`, v2.width), t3.attr(`height`, v2.height);
  }
  t2.classData.annotations[0] && (f2 += v2.height + 4, u2 += v2.width);
  let y2 = t2.classData.label;
  t2.classData.type !== void 0 && t2.classData.type !== `` && (r().flowchart.htmlLabels ? y2 += `&lt;` + t2.classData.type + `&gt;` : y2 += `<` + t2.classData.type + `>`);
  let b2 = p2.node().appendChild(await H(y2, t2.labelStyle, true, true));
  d(b2).attr(`class`, `classTitle`);
  let x2 = b2.getBBox();
  if (o(r().flowchart.htmlLabels)) {
    let e3 = b2.children[0], t3 = d(b2);
    x2 = e3.getBoundingClientRect(), t3.attr(`width`, x2.width), t3.attr(`height`, x2.height);
  }
  f2 += x2.height + 4, x2.width > u2 && (u2 = x2.width);
  let S2 = [];
  t2.classData.members.forEach(async (e3) => {
    let n3 = e3.getDisplayDetails(), i3 = n3.displayText;
    r().flowchart.htmlLabels && (i3 = i3.replace(/</g, `&lt;`).replace(/>/g, `&gt;`));
    let a3 = p2.node().appendChild(await H(i3, n3.cssStyle ? n3.cssStyle : t2.labelStyle, true, true)), s3 = a3.getBBox();
    if (o(r().flowchart.htmlLabels)) {
      let e4 = a3.children[0], t3 = d(a3);
      s3 = e4.getBoundingClientRect(), t3.attr(`width`, s3.width), t3.attr(`height`, s3.height);
    }
    s3.width > u2 && (u2 = s3.width), f2 += s3.height + 4, S2.push(a3);
  }), f2 += 8;
  let C2 = [];
  if (t2.classData.methods.forEach(async (e3) => {
    let n3 = e3.getDisplayDetails(), i3 = n3.displayText;
    r().flowchart.htmlLabels && (i3 = i3.replace(/</g, `&lt;`).replace(/>/g, `&gt;`));
    let a3 = p2.node().appendChild(await H(i3, n3.cssStyle ? n3.cssStyle : t2.labelStyle, true, true)), s3 = a3.getBBox();
    if (o(r().flowchart.htmlLabels)) {
      let e4 = a3.children[0], t3 = d(a3);
      s3 = e4.getBoundingClientRect(), t3.attr(`width`, s3.width), t3.attr(`height`, s3.height);
    }
    s3.width > u2 && (u2 = s3.width), f2 += s3.height + 4, C2.push(a3);
  }), f2 += 8, h2) {
    let e3 = (u2 - v2.width) / 2;
    d(_2).attr(`transform`, `translate( ` + (-1 * u2 / 2 + e3) + `, ` + -1 * f2 / 2 + `)`), m2 = v2.height + 4;
  }
  let w2 = (u2 - x2.width) / 2;
  return d(b2).attr(`transform`, `translate( ` + (-1 * u2 / 2 + w2) + `, ` + (-1 * f2 / 2 + m2) + `)`), m2 += x2.height + 4, c2.attr(`class`, `divider`).attr(`x1`, -u2 / 2 - n2).attr(`x2`, u2 / 2 + n2).attr(`y1`, -f2 / 2 - n2 + 8 + m2).attr(`y2`, -f2 / 2 - n2 + 8 + m2), m2 += 8, S2.forEach((e3) => {
    d(e3).attr(`transform`, `translate( ` + -u2 / 2 + `, ` + (-1 * f2 / 2 + m2 + 8 / 2) + `)`);
    let t3 = e3 == null ? void 0 : e3.getBBox();
    m2 += ((t3 == null ? void 0 : t3.height) ?? 0) + 4;
  }), m2 += 8, l2.attr(`class`, `divider`).attr(`x1`, -u2 / 2 - n2).attr(`x2`, u2 / 2 + n2).attr(`y1`, -f2 / 2 - n2 + 8 + m2).attr(`y2`, -f2 / 2 - n2 + 8 + m2), m2 += 8, C2.forEach((e3) => {
    d(e3).attr(`transform`, `translate( ` + -u2 / 2 + `, ` + (-1 * f2 / 2 + m2) + `)`);
    let t3 = e3 == null ? void 0 : e3.getBBox();
    m2 += ((t3 == null ? void 0 : t3.height) ?? 0) + 4;
  }), s2.attr(`style`, t2.style).attr(`class`, `outer title-state`).attr(`x`, -u2 / 2 - n2).attr(`y`, -(f2 / 2) - n2).attr(`width`, u2 + t2.padding).attr(`height`, f2 + t2.padding), J(t2, s2), t2.intersect = function(e3) {
    return K.rect(t2, e3);
  }, a2;
}, `class_box`) }, Q = {}, pt = u(async (e2, t2, n2) => {
  let i2, a2;
  if (t2.link) {
    let o2;
    r().securityLevel === `sandbox` ? o2 = `_top` : t2.linkTarget && (o2 = t2.linkTarget || `_blank`), i2 = e2.insert(`svg:a`).attr(`xlink:href`, t2.link).attr(`target`, o2), a2 = await ft[t2.shape](i2, t2, n2);
  } else a2 = await ft[t2.shape](e2, t2, n2), i2 = a2;
  return t2.tooltip && a2.attr(`title`, t2.tooltip), t2.class && a2.attr(`class`, `node default ` + t2.class), Q[t2.id] = i2, t2.haveCallback && Q[t2.id].attr(`class`, Q[t2.id].attr(`class`) + ` clickable`), i2;
}, `insertNode`), mt = u((e2) => {
  let t2 = Q[e2.id];
  l.trace(`Transforming node`, e2.diff, e2, `translate(` + (e2.x - e2.width / 2 - 5) + `, ` + e2.width / 2 + `)`);
  let n2 = e2.diff || 0;
  return e2.clusterNode ? t2.attr(`transform`, `translate(` + (e2.x + n2 - e2.width / 2) + `, ` + (e2.y - e2.height / 2 - 8) + `)`) : t2.attr(`transform`, `translate(` + e2.x + `, ` + e2.y + `)`), n2;
}, `positionNode`);
function ht(e2, t2, n2 = false) {
  var _a2, _b2, _c;
  let r2 = e2, i2 = `default`;
  (((_a2 = r2 == null ? void 0 : r2.classes) == null ? void 0 : _a2.length) || 0) > 0 && (i2 = ((r2 == null ? void 0 : r2.classes) ?? []).join(` `)), i2 += ` flowchart-label`;
  let a2 = 0, o2 = ``, s2;
  switch (r2.type) {
    case `round`:
      a2 = 5, o2 = `rect`;
      break;
    case `composite`:
      a2 = 0, o2 = `composite`, s2 = 0;
      break;
    case `square`:
      o2 = `rect`;
      break;
    case `diamond`:
      o2 = `question`;
      break;
    case `hexagon`:
      o2 = `hexagon`;
      break;
    case `block_arrow`:
      o2 = `block_arrow`;
      break;
    case `odd`:
      o2 = `rect_left_inv_arrow`;
      break;
    case `lean_right`:
      o2 = `lean_right`;
      break;
    case `lean_left`:
      o2 = `lean_left`;
      break;
    case `trapezoid`:
      o2 = `trapezoid`;
      break;
    case `inv_trapezoid`:
      o2 = `inv_trapezoid`;
      break;
    case `rect_left_inv_arrow`:
      o2 = `rect_left_inv_arrow`;
      break;
    case `circle`:
      o2 = `circle`;
      break;
    case `ellipse`:
      o2 = `ellipse`;
      break;
    case `stadium`:
      o2 = `stadium`;
      break;
    case `subroutine`:
      o2 = `subroutine`;
      break;
    case `cylinder`:
      o2 = `cylinder`;
      break;
    case `group`:
      o2 = `rect`;
      break;
    case `doublecircle`:
      o2 = `doublecircle`;
      break;
    default:
      o2 = `rect`;
  }
  let l2 = g((r2 == null ? void 0 : r2.styles) ?? []), u2 = r2.label, d2 = r2.size ?? { width: 0, height: 0, x: 0, y: 0 };
  return { labelStyle: l2.labelStyle, shape: o2, labelText: u2, rx: a2, ry: a2, class: i2, style: l2.style, id: r2.id, directions: r2.directions, width: d2.width, height: d2.height, x: d2.x, y: d2.y, positioned: n2, intersect: void 0, type: r2.type, padding: s2 ?? ((_c = (_b2 = c()) == null ? void 0 : _b2.block) == null ? void 0 : _c.padding) ?? 0 };
}
u(ht, `getNodeFromBlock`);
async function gt(e2, t2, n2) {
  let r2 = ht(t2, n2, false);
  if (r2.type === `group`) return;
  let i2 = await pt(e2, r2, { config: c() }), a2 = i2.node().getBBox(), o2 = n2.getBlock(r2.id);
  o2.size = { width: a2.width, height: a2.height, x: 0, y: 0, node: i2 }, n2.setBlock(o2), i2.remove();
}
u(gt, `calculateBlockSize`);
async function _t(e2, t2, n2) {
  let r2 = ht(t2, n2, true);
  n2.getBlock(r2.id).type !== `space` && (await pt(e2, r2, { config: c() }), t2.intersect = r2 == null ? void 0 : r2.intersect, mt(r2));
}
u(_t, `insertBlockPositioned`);
async function $(e2, t2, n2, r2) {
  for (let i2 of t2) await r2(e2, i2, n2), i2.children && await $(e2, i2.children, n2, r2);
}
u($, `performOperations`);
async function vt(e2, t2, n2) {
  await $(e2, t2, n2, gt);
}
u(vt, `calculateBlockSizes`);
async function yt(e2, t2, n2) {
  await $(e2, t2, n2, _t);
}
u(yt, `insertBlocks`);
async function bt(e2, t2, n2, r2, i2) {
  let a2 = new C({ multigraph: true, compound: true });
  a2.setGraph({ rankdir: `TB`, nodesep: 10, ranksep: 10, marginx: 8, marginy: 8 });
  for (let e3 of n2) e3.size && a2.setNode(e3.id, { width: e3.size.width, height: e3.size.height, intersect: e3.intersect });
  for (let n3 of t2) if (n3.start && n3.end) {
    let t3 = r2.getBlock(n3.start), o2 = r2.getBlock(n3.end);
    if ((t3 == null ? void 0 : t3.size) && (o2 == null ? void 0 : o2.size)) {
      let r3 = t3.size, s2 = o2.size, c2 = [{ x: r3.x, y: r3.y }, { x: r3.x + (s2.x - r3.x) / 2, y: r3.y + (s2.y - r3.y) / 2 }, { x: s2.x, y: s2.y }];
      ke(e2, { v: n3.start, w: n3.end, name: n3.id }, { ...n3, arrowTypeEnd: n3.arrowTypeEnd, arrowTypeStart: n3.arrowTypeStart, points: c2, classes: `edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1` }, void 0, `block`, a2, i2), n3.label && (await we(e2, { ...n3, label: n3.label, labelStyle: `stroke: #333; stroke-width: 1.5px;fill:none;`, arrowTypeEnd: n3.arrowTypeEnd, arrowTypeStart: n3.arrowTypeStart, points: c2, classes: `edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1` }), Te({ ...n3, x: c2[1].x, y: c2[1].y }, { originalPath: c2 }));
    }
  }
}
u(bt, `insertEdges`);
var xt = { parser: E, db: fe, renderer: { draw: u(async function(e2, t2, n2, r2) {
  let { securityLevel: a2, block: o2 } = c(), s2 = r2.db, u2;
  a2 === `sandbox` && (u2 = d(`#i` + t2));
  let f2 = d(a2 === `sandbox` ? u2.nodes()[0].contentDocument.body : `body`), p2 = a2 === `sandbox` ? f2.select(`[id="${t2}"]`) : d(`[id="${t2}"]`);
  ge(p2, [`point`, `circle`, `cross`], r2.type, t2);
  let m2 = s2.getBlocks(), h2 = s2.getBlocksFlat(), g2 = s2.getEdges(), _2 = p2.insert(`g`).attr(`class`, `block`);
  await vt(_2, m2, s2);
  let v2 = ye(s2);
  if (await yt(_2, m2, s2), await bt(_2, g2, h2, s2, t2), v2) {
    let e3 = v2, t3 = Math.max(1, Math.round(0.125 * (e3.width / e3.height))), n3 = e3.height + t3 + 10, r3 = e3.width + 10, { useMaxWidth: a3 } = o2;
    i(p2, n3, r3, !!a3), l.debug(`Here Bounds`, v2, e3), p2.attr(`viewBox`, `${e3.x - 5} ${e3.y - 5} ${e3.width + 10} ${e3.height + 10}`);
  }
}, `draw`), getClasses: u(function(e2, t2) {
  return t2.db.getClasses();
}, `getClasses`) }, styles: pe };
export {
  xt as diagram
};
