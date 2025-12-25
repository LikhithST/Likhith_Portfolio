function e(e2) {
  return Math.abs(e2 = Math.round(e2)) >= 1e21 ? e2.toLocaleString(`en`).replace(/,/g, ``) : e2.toString(10);
}
function t(e2, t2) {
  if ((n2 = (e2 = t2 ? e2.toExponential(t2 - 1) : e2.toExponential()).indexOf(`e`)) < 0) return null;
  var n2, r2 = e2.slice(0, n2);
  return [r2.length > 1 ? r2[0] + r2.slice(2) : r2, +e2.slice(n2 + 1)];
}
function n(e2) {
  return e2 = t(Math.abs(e2)), e2 ? e2[1] : NaN;
}
function r(e2, t2) {
  return function(n2, r2) {
    for (var i2 = n2.length, a2 = [], o2 = 0, s2 = e2[0], c2 = 0; i2 > 0 && s2 > 0 && (c2 + s2 + 1 > r2 && (s2 = Math.max(1, r2 - c2)), a2.push(n2.substring(i2 -= s2, i2 + s2)), !((c2 += s2 + 1) > r2)); ) s2 = e2[o2 = (o2 + 1) % e2.length];
    return a2.reverse().join(t2);
  };
}
function i(e2) {
  return function(t2) {
    return t2.replace(/[0-9]/g, function(t3) {
      return e2[+t3];
    });
  };
}
var a = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function o(e2) {
  if (!(t2 = a.exec(e2))) throw Error(`invalid format: ` + e2);
  var t2;
  return new s({ fill: t2[1], align: t2[2], sign: t2[3], symbol: t2[4], zero: t2[5], width: t2[6], comma: t2[7], precision: t2[8] && t2[8].slice(1), trim: t2[9], type: t2[10] });
}
o.prototype = s.prototype;
function s(e2) {
  this.fill = e2.fill === void 0 ? ` ` : e2.fill + ``, this.align = e2.align === void 0 ? `>` : e2.align + ``, this.sign = e2.sign === void 0 ? `-` : e2.sign + ``, this.symbol = e2.symbol === void 0 ? `` : e2.symbol + ``, this.zero = !!e2.zero, this.width = e2.width === void 0 ? void 0 : +e2.width, this.comma = !!e2.comma, this.precision = e2.precision === void 0 ? void 0 : +e2.precision, this.trim = !!e2.trim, this.type = e2.type === void 0 ? `` : e2.type + ``;
}
s.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? `0` : ``) + (this.width === void 0 ? `` : Math.max(1, this.width | 0)) + (this.comma ? `,` : ``) + (this.precision === void 0 ? `` : `.` + Math.max(0, this.precision | 0)) + (this.trim ? `~` : ``) + this.type;
};
function c(e2) {
  out: for (var t2 = e2.length, n2 = 1, r2 = -1, i2; n2 < t2; ++n2) switch (e2[n2]) {
    case `.`:
      r2 = i2 = n2;
      break;
    case `0`:
      r2 === 0 && (r2 = n2), i2 = n2;
      break;
    default:
      if (!+e2[n2]) break out;
      r2 > 0 && (r2 = 0);
      break;
  }
  return r2 > 0 ? e2.slice(0, r2) + e2.slice(i2 + 1) : e2;
}
var l;
function u(e2, n2) {
  var r2 = t(e2, n2);
  if (!r2) return e2 + ``;
  var i2 = r2[0], a2 = r2[1], o2 = a2 - (l = Math.max(-8, Math.min(8, Math.floor(a2 / 3))) * 3) + 1, s2 = i2.length;
  return o2 === s2 ? i2 : o2 > s2 ? i2 + Array(o2 - s2 + 1).join(`0`) : o2 > 0 ? i2.slice(0, o2) + `.` + i2.slice(o2) : `0.` + Array(1 - o2).join(`0`) + t(e2, Math.max(0, n2 + o2 - 1))[0];
}
function d(e2, n2) {
  var r2 = t(e2, n2);
  if (!r2) return e2 + ``;
  var i2 = r2[0], a2 = r2[1];
  return a2 < 0 ? `0.` + Array(-a2).join(`0`) + i2 : i2.length > a2 + 1 ? i2.slice(0, a2 + 1) + `.` + i2.slice(a2 + 1) : i2 + Array(a2 - i2.length + 2).join(`0`);
}
var f = { "%": (e2, t2) => (e2 * 100).toFixed(t2), b: (e2) => Math.round(e2).toString(2), c: (e2) => e2 + ``, d: e, e: (e2, t2) => e2.toExponential(t2), f: (e2, t2) => e2.toFixed(t2), g: (e2, t2) => e2.toPrecision(t2), o: (e2) => Math.round(e2).toString(8), p: (e2, t2) => d(e2 * 100, t2), r: d, s: u, X: (e2) => Math.round(e2).toString(16).toUpperCase(), x: (e2) => Math.round(e2).toString(16) };
function p(e2) {
  return e2;
}
var m = Array.prototype.map, h = [`y`, `z`, `a`, `f`, `p`, `n`, `\xB5`, `m`, ``, `k`, `M`, `G`, `T`, `P`, `E`, `Z`, `Y`];
function g(e2) {
  var t2 = e2.grouping === void 0 || e2.thousands === void 0 ? p : r(m.call(e2.grouping, Number), e2.thousands + ``), a2 = e2.currency === void 0 ? `` : e2.currency[0] + ``, s2 = e2.currency === void 0 ? `` : e2.currency[1] + ``, u2 = e2.decimal === void 0 ? `.` : e2.decimal + ``, d2 = e2.numerals === void 0 ? p : i(m.call(e2.numerals, String)), g2 = e2.percent === void 0 ? `%` : e2.percent + ``, _2 = e2.minus === void 0 ? `\u2212` : e2.minus + ``, v2 = e2.nan === void 0 ? `NaN` : e2.nan + ``;
  function y2(e3) {
    e3 = o(e3);
    var n2 = e3.fill, r2 = e3.align, i2 = e3.sign, p2 = e3.symbol, m2 = e3.zero, y3 = e3.width, b3 = e3.comma, x = e3.precision, S = e3.trim, C = e3.type;
    C === `n` ? (b3 = true, C = `g`) : f[C] || (x === void 0 && (x = 12), S = true, C = `g`), (m2 || n2 === `0` && r2 === `=`) && (m2 = true, n2 = `0`, r2 = `=`);
    var w = p2 === `$` ? a2 : p2 === `#` && /[boxX]/.test(C) ? `0` + C.toLowerCase() : ``, T = p2 === `$` ? s2 : /[%p]/.test(C) ? g2 : ``, E = f[C], D = /[defgprs%]/.test(C);
    x = x === void 0 ? 6 : /[gprs]/.test(C) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function O(e4) {
      var a3 = w, o2 = T, s3, f2, p3;
      if (C === `c`) o2 = E(e4) + o2, e4 = ``;
      else {
        e4 = +e4;
        var g3 = e4 < 0 || 1 / e4 < 0;
        if (e4 = isNaN(e4) ? v2 : E(Math.abs(e4), x), S && (e4 = c(e4)), g3 && +e4 == 0 && i2 !== `+` && (g3 = false), a3 = (g3 ? i2 === `(` ? i2 : _2 : i2 === `-` || i2 === `(` ? `` : i2) + a3, o2 = (C === `s` ? h[8 + l / 3] : ``) + o2 + (g3 && i2 === `(` ? `)` : ``), D) {
          for (s3 = -1, f2 = e4.length; ++s3 < f2; ) if (p3 = e4.charCodeAt(s3), 48 > p3 || p3 > 57) {
            o2 = (p3 === 46 ? u2 + e4.slice(s3 + 1) : e4.slice(s3)) + o2, e4 = e4.slice(0, s3);
            break;
          }
        }
      }
      b3 && !m2 && (e4 = t2(e4, 1 / 0));
      var O2 = a3.length + e4.length + o2.length, k = O2 < y3 ? Array(y3 - O2 + 1).join(n2) : ``;
      switch (b3 && m2 && (e4 = t2(k + e4, k.length ? y3 - o2.length : 1 / 0), k = ``), r2) {
        case `<`:
          e4 = a3 + e4 + o2 + k;
          break;
        case `=`:
          e4 = a3 + k + e4 + o2;
          break;
        case `^`:
          e4 = k.slice(0, O2 = k.length >> 1) + a3 + e4 + o2 + k.slice(O2);
          break;
        default:
          e4 = k + a3 + e4 + o2;
          break;
      }
      return d2(e4);
    }
    return O.toString = function() {
      return e3 + ``;
    }, O;
  }
  function b2(e3, t3) {
    var r2 = y2((e3 = o(e3), e3.type = `f`, e3)), i2 = Math.max(-8, Math.min(8, Math.floor(n(t3) / 3))) * 3, a3 = 10 ** -i2, s3 = h[8 + i2 / 3];
    return function(e4) {
      return r2(a3 * e4) + s3;
    };
  }
  return { format: y2, formatPrefix: b2 };
}
var _, v, y;
b({ thousands: `,`, grouping: [3], currency: [`$`, ``] });
function b(e2) {
  return _ = g(e2), v = _.format, y = _.formatPrefix, _;
}
export {
  n as i,
  y as n,
  o as r,
  v as t
};
