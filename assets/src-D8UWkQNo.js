import { i as e, t } from "./chunk-CXUkj53v.js";
var n = t(((e3, t2) => {
  (function(n2, r2) {
    typeof e3 == `object` && t2 !== void 0 ? t2.exports = r2() : typeof define == `function` && define.amd ? define(r2) : (n2 = typeof globalThis < `u` ? globalThis : n2 || self).dayjs = r2();
  })(e3, (function() {
    var e4 = 1e3, t3 = 6e4, n2 = 36e5, r2 = `millisecond`, i2 = `second`, a2 = `minute`, o2 = `hour`, s2 = `day`, c2 = `week`, l2 = `month`, u2 = `quarter`, d2 = `year`, f2 = `date`, p2 = `Invalid Date`, m2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, h2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g2 = { name: `en`, weekdays: `Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday`.split(`_`), months: `January_February_March_April_May_June_July_August_September_October_November_December`.split(`_`), ordinal: function(e5) {
      var t4 = [`th`, `st`, `nd`, `rd`], n3 = e5 % 100;
      return `[` + e5 + (t4[(n3 - 20) % 10] || t4[n3] || t4[0]) + `]`;
    } }, _2 = function(e5, t4, n3) {
      var r3 = String(e5);
      return !r3 || r3.length >= t4 ? e5 : `` + Array(t4 + 1 - r3.length).join(n3) + e5;
    }, v2 = { s: _2, z: function(e5) {
      var t4 = -e5.utcOffset(), n3 = Math.abs(t4), r3 = Math.floor(n3 / 60), i3 = n3 % 60;
      return (t4 <= 0 ? `+` : `-`) + _2(r3, 2, `0`) + `:` + _2(i3, 2, `0`);
    }, m: function e5(t4, n3) {
      if (t4.date() < n3.date()) return -e5(n3, t4);
      var r3 = 12 * (n3.year() - t4.year()) + (n3.month() - t4.month()), i3 = t4.clone().add(r3, l2), a3 = n3 - i3 < 0, o3 = t4.clone().add(r3 + (a3 ? -1 : 1), l2);
      return +(-(r3 + (n3 - i3) / (a3 ? i3 - o3 : o3 - i3)) || 0);
    }, a: function(e5) {
      return e5 < 0 ? Math.ceil(e5) || 0 : Math.floor(e5);
    }, p: function(e5) {
      return { M: l2, y: d2, w: c2, d: s2, D: f2, h: o2, m: a2, s: i2, ms: r2, Q: u2 }[e5] || String(e5 || ``).toLowerCase().replace(/s$/, ``);
    }, u: function(e5) {
      return e5 === void 0;
    } }, y2 = `en`, b2 = {};
    b2[y2] = g2;
    var ee2 = `$isDayjsObject`, x2 = function(e5) {
      return e5 instanceof T2 || !(!e5 || !e5[ee2]);
    }, S2 = function e5(t4, n3, r3) {
      var i3;
      if (!t4) return y2;
      if (typeof t4 == `string`) {
        var a3 = t4.toLowerCase();
        b2[a3] && (i3 = a3), n3 && (b2[a3] = n3, i3 = a3);
        var o3 = t4.split(`-`);
        if (!i3 && o3.length > 1) return e5(o3[0]);
      } else {
        var s3 = t4.name;
        b2[s3] = t4, i3 = s3;
      }
      return !r3 && i3 && (y2 = i3), i3 || !r3 && y2;
    }, C2 = function(e5, t4) {
      if (x2(e5)) return e5.clone();
      var n3 = typeof t4 == `object` ? t4 : {};
      return n3.date = e5, n3.args = arguments, new T2(n3);
    }, w2 = v2;
    w2.l = S2, w2.i = x2, w2.w = function(e5, t4) {
      return C2(e5, { locale: t4.$L, utc: t4.$u, x: t4.$x, $offset: t4.$offset });
    };
    var T2 = (function() {
      function g3(e5) {
        this.$L = S2(e5.locale, null, true), this.parse(e5), this.$x = this.$x || e5.x || {}, this[ee2] = true;
      }
      var _3 = g3.prototype;
      return _3.parse = function(e5) {
        this.$d = (function(e6) {
          var t4 = e6.date, n3 = e6.utc;
          if (t4 === null) return /* @__PURE__ */ new Date(NaN);
          if (w2.u(t4)) return /* @__PURE__ */ new Date();
          if (t4 instanceof Date) return new Date(t4);
          if (typeof t4 == `string` && !/Z$/i.test(t4)) {
            var r3 = t4.match(m2);
            if (r3) {
              var i3 = r3[2] - 1 || 0, a3 = (r3[7] || `0`).substring(0, 3);
              return n3 ? new Date(Date.UTC(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, a3)) : new Date(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, a3);
            }
          }
          return new Date(t4);
        })(e5), this.init();
      }, _3.init = function() {
        var e5 = this.$d;
        this.$y = e5.getFullYear(), this.$M = e5.getMonth(), this.$D = e5.getDate(), this.$W = e5.getDay(), this.$H = e5.getHours(), this.$m = e5.getMinutes(), this.$s = e5.getSeconds(), this.$ms = e5.getMilliseconds();
      }, _3.$utils = function() {
        return w2;
      }, _3.isValid = function() {
        return this.$d.toString() !== p2;
      }, _3.isSame = function(e5, t4) {
        var n3 = C2(e5);
        return this.startOf(t4) <= n3 && n3 <= this.endOf(t4);
      }, _3.isAfter = function(e5, t4) {
        return C2(e5) < this.startOf(t4);
      }, _3.isBefore = function(e5, t4) {
        return this.endOf(t4) < C2(e5);
      }, _3.$g = function(e5, t4, n3) {
        return w2.u(e5) ? this[t4] : this.set(n3, e5);
      }, _3.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, _3.valueOf = function() {
        return this.$d.getTime();
      }, _3.startOf = function(e5, t4) {
        var n3 = this, r3 = !!w2.u(t4) || t4, u3 = w2.p(e5), p3 = function(e6, t5) {
          var i3 = w2.w(n3.$u ? Date.UTC(n3.$y, t5, e6) : new Date(n3.$y, t5, e6), n3);
          return r3 ? i3 : i3.endOf(s2);
        }, m3 = function(e6, t5) {
          return w2.w(n3.toDate()[e6].apply(n3.toDate(`s`), (r3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t5)), n3);
        }, h3 = this.$W, g4 = this.$M, _4 = this.$D, v3 = `set` + (this.$u ? `UTC` : ``);
        switch (u3) {
          case d2:
            return r3 ? p3(1, 0) : p3(31, 11);
          case l2:
            return r3 ? p3(1, g4) : p3(0, g4 + 1);
          case c2:
            var y3 = this.$locale().weekStart || 0, b3 = (h3 < y3 ? h3 + 7 : h3) - y3;
            return p3(r3 ? _4 - b3 : _4 + (6 - b3), g4);
          case s2:
          case f2:
            return m3(v3 + `Hours`, 0);
          case o2:
            return m3(v3 + `Minutes`, 1);
          case a2:
            return m3(v3 + `Seconds`, 2);
          case i2:
            return m3(v3 + `Milliseconds`, 3);
          default:
            return this.clone();
        }
      }, _3.endOf = function(e5) {
        return this.startOf(e5, false);
      }, _3.$set = function(e5, t4) {
        var n3, c3 = w2.p(e5), u3 = `set` + (this.$u ? `UTC` : ``), p3 = (n3 = {}, n3[s2] = u3 + `Date`, n3[f2] = u3 + `Date`, n3[l2] = u3 + `Month`, n3[d2] = u3 + `FullYear`, n3[o2] = u3 + `Hours`, n3[a2] = u3 + `Minutes`, n3[i2] = u3 + `Seconds`, n3[r2] = u3 + `Milliseconds`, n3)[c3], m3 = c3 === s2 ? this.$D + (t4 - this.$W) : t4;
        if (c3 === l2 || c3 === d2) {
          var h3 = this.clone().set(f2, 1);
          h3.$d[p3](m3), h3.init(), this.$d = h3.set(f2, Math.min(this.$D, h3.daysInMonth())).$d;
        } else p3 && this.$d[p3](m3);
        return this.init(), this;
      }, _3.set = function(e5, t4) {
        return this.clone().$set(e5, t4);
      }, _3.get = function(e5) {
        return this[w2.p(e5)]();
      }, _3.add = function(r3, u3) {
        var f3, p3 = this;
        r3 = Number(r3);
        var m3 = w2.p(u3), h3 = function(e5) {
          var t4 = C2(p3);
          return w2.w(t4.date(t4.date() + Math.round(e5 * r3)), p3);
        };
        if (m3 === l2) return this.set(l2, this.$M + r3);
        if (m3 === d2) return this.set(d2, this.$y + r3);
        if (m3 === s2) return h3(1);
        if (m3 === c2) return h3(7);
        var g4 = (f3 = {}, f3[a2] = t3, f3[o2] = n2, f3[i2] = e4, f3)[m3] || 1, _4 = this.$d.getTime() + r3 * g4;
        return w2.w(_4, this);
      }, _3.subtract = function(e5, t4) {
        return this.add(-1 * e5, t4);
      }, _3.format = function(e5) {
        var t4 = this, n3 = this.$locale();
        if (!this.isValid()) return n3.invalidDate || p2;
        var r3 = e5 || `YYYY-MM-DDTHH:mm:ssZ`, i3 = w2.z(this), a3 = this.$H, o3 = this.$m, s3 = this.$M, c3 = n3.weekdays, l3 = n3.months, u3 = n3.meridiem, d3 = function(e6, n4, i4, a4) {
          return e6 && (e6[n4] || e6(t4, r3)) || i4[n4].slice(0, a4);
        }, f3 = function(e6) {
          return w2.s(a3 % 12 || 12, e6, `0`);
        }, m3 = u3 || function(e6, t5, n4) {
          var r4 = e6 < 12 ? `AM` : `PM`;
          return n4 ? r4.toLowerCase() : r4;
        };
        return r3.replace(h2, (function(e6, r4) {
          return r4 || (function(e7) {
            switch (e7) {
              case `YY`:
                return String(t4.$y).slice(-2);
              case `YYYY`:
                return w2.s(t4.$y, 4, `0`);
              case `M`:
                return s3 + 1;
              case `MM`:
                return w2.s(s3 + 1, 2, `0`);
              case `MMM`:
                return d3(n3.monthsShort, s3, l3, 3);
              case `MMMM`:
                return d3(l3, s3);
              case `D`:
                return t4.$D;
              case `DD`:
                return w2.s(t4.$D, 2, `0`);
              case `d`:
                return String(t4.$W);
              case `dd`:
                return d3(n3.weekdaysMin, t4.$W, c3, 2);
              case `ddd`:
                return d3(n3.weekdaysShort, t4.$W, c3, 3);
              case `dddd`:
                return c3[t4.$W];
              case `H`:
                return String(a3);
              case `HH`:
                return w2.s(a3, 2, `0`);
              case `h`:
                return f3(1);
              case `hh`:
                return f3(2);
              case `a`:
                return m3(a3, o3, true);
              case `A`:
                return m3(a3, o3, false);
              case `m`:
                return String(o3);
              case `mm`:
                return w2.s(o3, 2, `0`);
              case `s`:
                return String(t4.$s);
              case `ss`:
                return w2.s(t4.$s, 2, `0`);
              case `SSS`:
                return w2.s(t4.$ms, 3, `0`);
              case `Z`:
                return i3;
            }
            return null;
          })(e6) || i3.replace(`:`, ``);
        }));
      }, _3.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, _3.diff = function(r3, f3, p3) {
        var m3, h3 = this, g4 = w2.p(f3), _4 = C2(r3), v3 = (_4.utcOffset() - this.utcOffset()) * t3, y3 = this - _4, b3 = function() {
          return w2.m(h3, _4);
        };
        switch (g4) {
          case d2:
            m3 = b3() / 12;
            break;
          case l2:
            m3 = b3();
            break;
          case u2:
            m3 = b3() / 3;
            break;
          case c2:
            m3 = (y3 - v3) / 6048e5;
            break;
          case s2:
            m3 = (y3 - v3) / 864e5;
            break;
          case o2:
            m3 = y3 / n2;
            break;
          case a2:
            m3 = y3 / t3;
            break;
          case i2:
            m3 = y3 / e4;
            break;
          default:
            m3 = y3;
        }
        return p3 ? m3 : w2.a(m3);
      }, _3.daysInMonth = function() {
        return this.endOf(l2).$D;
      }, _3.$locale = function() {
        return b2[this.$L];
      }, _3.locale = function(e5, t4) {
        if (!e5) return this.$L;
        var n3 = this.clone(), r3 = S2(e5, t4, true);
        return r3 && (n3.$L = r3), n3;
      }, _3.clone = function() {
        return w2.w(this.$d, this);
      }, _3.toDate = function() {
        return new Date(this.valueOf());
      }, _3.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, _3.toISOString = function() {
        return this.$d.toISOString();
      }, _3.toString = function() {
        return this.$d.toUTCString();
      }, g3;
    })(), te2 = T2.prototype;
    return C2.prototype = te2, [[`$ms`, r2], [`$s`, i2], [`$m`, a2], [`$H`, o2], [`$W`, s2], [`$M`, l2], [`$y`, d2], [`$D`, f2]].forEach((function(e5) {
      te2[e5[1]] = function(t4) {
        return this.$g(t4, e5[0], e5[1]);
      };
    })), C2.extend = function(e5, t4) {
      return e5.$i || (e5.$i = (e5(t4, T2, C2), true)), C2;
    }, C2.locale = S2, C2.isDayjs = x2, C2.unix = function(e5) {
      return C2(1e3 * e5);
    }, C2.en = b2[y2], C2.Ls = b2, C2.p = {}, C2;
  }));
})), r = e(n(), 1), i = Object.defineProperty, a = (e3, t2) => i(e3, `name`, { value: t2, configurable: true }), o = (e3, t2) => {
  for (var n2 in t2) i(e3, n2, { get: t2[n2], enumerable: true });
}, s = { trace: 0, debug: 1, info: 2, warn: 3, error: 4, fatal: 5 }, c = { trace: a((...e3) => {
}, `trace`), debug: a((...e3) => {
}, `debug`), info: a((...e3) => {
}, `info`), warn: a((...e3) => {
}, `warn`), error: a((...e3) => {
}, `error`), fatal: a((...e3) => {
}, `fatal`) }, l = a(function(e3 = `fatal`) {
  let t2 = s.fatal;
  typeof e3 == `string` ? e3.toLowerCase() in s && (t2 = s[e3]) : typeof e3 == `number` && (t2 = e3), c.trace = () => {
  }, c.debug = () => {
  }, c.info = () => {
  }, c.warn = () => {
  }, c.error = () => {
  }, c.fatal = () => {
  }, t2 <= s.fatal && (c.fatal = console.error ? console.error.bind(console, u(`FATAL`), `color: orange`) : console.log.bind(console, `\x1B[35m`, u(`FATAL`))), t2 <= s.error && (c.error = console.error ? console.error.bind(console, u(`ERROR`), `color: orange`) : console.log.bind(console, `\x1B[31m`, u(`ERROR`))), t2 <= s.warn && (c.warn = console.warn ? console.warn.bind(console, u(`WARN`), `color: orange`) : console.log.bind(console, `\x1B[33m`, u(`WARN`))), t2 <= s.info && (c.info = console.info ? console.info.bind(console, u(`INFO`), `color: lightblue`) : console.log.bind(console, `\x1B[34m`, u(`INFO`))), t2 <= s.debug && (c.debug = console.debug ? console.debug.bind(console, u(`DEBUG`), `color: lightgreen`) : console.log.bind(console, `\x1B[32m`, u(`DEBUG`))), t2 <= s.trace && (c.trace = console.debug ? console.debug.bind(console, u(`TRACE`), `color: lightgreen`) : console.log.bind(console, `\x1B[32m`, u(`TRACE`)));
}, `setLogLevel`), u = a((e3) => `%c${(0, r.default)().format(`ss.SSS`)} : ${e3} : `, `format`), d = { value: () => {
} };
function f() {
  for (var e3 = 0, t2 = arguments.length, n2 = {}, r2; e3 < t2; ++e3) {
    if (!(r2 = arguments[e3] + ``) || r2 in n2 || /[\s.]/.test(r2)) throw Error(`illegal type: ` + r2);
    n2[r2] = [];
  }
  return new p(n2);
}
function p(e3) {
  this._ = e3;
}
function m(e3, t2) {
  return e3.trim().split(/^|\s+/).map(function(e4) {
    var n2 = ``, r2 = e4.indexOf(`.`);
    if (r2 >= 0 && (n2 = e4.slice(r2 + 1), e4 = e4.slice(0, r2)), e4 && !t2.hasOwnProperty(e4)) throw Error(`unknown type: ` + e4);
    return { type: e4, name: n2 };
  });
}
p.prototype = f.prototype = { constructor: p, on: function(e3, t2) {
  var n2 = this._, r2 = m(e3 + ``, n2), i2, a2 = -1, o2 = r2.length;
  if (arguments.length < 2) {
    for (; ++a2 < o2; ) if ((i2 = (e3 = r2[a2]).type) && (i2 = h(n2[i2], e3.name))) return i2;
    return;
  }
  if (t2 != null && typeof t2 != `function`) throw Error(`invalid callback: ` + t2);
  for (; ++a2 < o2; ) if (i2 = (e3 = r2[a2]).type) n2[i2] = g(n2[i2], e3.name, t2);
  else if (t2 == null) for (i2 in n2) n2[i2] = g(n2[i2], e3.name, null);
  return this;
}, copy: function() {
  var e3 = {}, t2 = this._;
  for (var n2 in t2) e3[n2] = t2[n2].slice();
  return new p(e3);
}, call: function(e3, t2) {
  if ((i2 = arguments.length - 2) > 0) for (var n2 = Array(i2), r2 = 0, i2, a2; r2 < i2; ++r2) n2[r2] = arguments[r2 + 2];
  if (!this._.hasOwnProperty(e3)) throw Error(`unknown type: ` + e3);
  for (a2 = this._[e3], r2 = 0, i2 = a2.length; r2 < i2; ++r2) a2[r2].value.apply(t2, n2);
}, apply: function(e3, t2, n2) {
  if (!this._.hasOwnProperty(e3)) throw Error(`unknown type: ` + e3);
  for (var r2 = this._[e3], i2 = 0, a2 = r2.length; i2 < a2; ++i2) r2[i2].value.apply(t2, n2);
} };
function h(e3, t2) {
  for (var n2 = 0, r2 = e3.length, i2; n2 < r2; ++n2) if ((i2 = e3[n2]).name === t2) return i2.value;
}
function g(e3, t2, n2) {
  for (var r2 = 0, i2 = e3.length; r2 < i2; ++r2) if (e3[r2].name === t2) {
    e3[r2] = d, e3 = e3.slice(0, r2).concat(e3.slice(r2 + 1));
    break;
  }
  return n2 != null && e3.push({ name: t2, value: n2 }), e3;
}
var _ = f, v = { svg: `http://www.w3.org/2000/svg`, xhtml: `http://www.w3.org/1999/xhtml`, xlink: `http://www.w3.org/1999/xlink`, xml: `http://www.w3.org/XML/1998/namespace`, xmlns: `http://www.w3.org/2000/xmlns/` };
function y(e3) {
  var t2 = e3 += ``, n2 = t2.indexOf(`:`);
  return n2 >= 0 && (t2 = e3.slice(0, n2)) !== `xmlns` && (e3 = e3.slice(n2 + 1)), v.hasOwnProperty(t2) ? { space: v[t2], local: e3 } : e3;
}
function b(e3) {
  return function() {
    var t2 = this.ownerDocument, n2 = this.namespaceURI;
    return n2 === `http://www.w3.org/1999/xhtml` && t2.documentElement.namespaceURI === `http://www.w3.org/1999/xhtml` ? t2.createElement(e3) : t2.createElementNS(n2, e3);
  };
}
function ee(e3) {
  return function() {
    return this.ownerDocument.createElementNS(e3.space, e3.local);
  };
}
function x(e3) {
  var t2 = y(e3);
  return (t2.local ? ee : b)(t2);
}
function S() {
}
function C(e3) {
  return e3 == null ? S : function() {
    return this.querySelector(e3);
  };
}
function w(e3) {
  typeof e3 != `function` && (e3 = C(e3));
  for (var t2 = this._groups, n2 = t2.length, r2 = Array(n2), i2 = 0; i2 < n2; ++i2) for (var a2 = t2[i2], o2 = a2.length, s2 = r2[i2] = Array(o2), c2, l2, u2 = 0; u2 < o2; ++u2) (c2 = a2[u2]) && (l2 = e3.call(c2, c2.__data__, u2, a2)) && (`__data__` in c2 && (l2.__data__ = c2.__data__), s2[u2] = l2);
  return new D(r2, this._parents);
}
function T(e3) {
  return e3 == null ? [] : Array.isArray(e3) ? e3 : Array.from(e3);
}
function te() {
  return [];
}
function ne(e3) {
  return e3 == null ? te : function() {
    return this.querySelectorAll(e3);
  };
}
function re(e3) {
  return function() {
    return T(e3.apply(this, arguments));
  };
}
function ie(e3) {
  e3 = typeof e3 == `function` ? re(e3) : ne(e3);
  for (var t2 = this._groups, n2 = t2.length, r2 = [], i2 = [], a2 = 0; a2 < n2; ++a2) for (var o2 = t2[a2], s2 = o2.length, c2, l2 = 0; l2 < s2; ++l2) (c2 = o2[l2]) && (r2.push(e3.call(c2, c2.__data__, l2, o2)), i2.push(c2));
  return new D(r2, i2);
}
function ae(e3) {
  return function() {
    return this.matches(e3);
  };
}
function oe(e3) {
  return function(t2) {
    return t2.matches(e3);
  };
}
var se = Array.prototype.find;
function ce(e3) {
  return function() {
    return se.call(this.children, e3);
  };
}
function le() {
  return this.firstElementChild;
}
function ue(e3) {
  return this.select(e3 == null ? le : ce(typeof e3 == `function` ? e3 : oe(e3)));
}
var de = Array.prototype.filter;
function fe() {
  return Array.from(this.children);
}
function pe(e3) {
  return function() {
    return de.call(this.children, e3);
  };
}
function me(e3) {
  return this.selectAll(e3 == null ? fe : pe(typeof e3 == `function` ? e3 : oe(e3)));
}
function he(e3) {
  typeof e3 != `function` && (e3 = ae(e3));
  for (var t2 = this._groups, n2 = t2.length, r2 = Array(n2), i2 = 0; i2 < n2; ++i2) for (var a2 = t2[i2], o2 = a2.length, s2 = r2[i2] = [], c2, l2 = 0; l2 < o2; ++l2) (c2 = a2[l2]) && e3.call(c2, c2.__data__, l2, a2) && s2.push(c2);
  return new D(r2, this._parents);
}
function ge(e3) {
  return Array(e3.length);
}
function _e() {
  return new D(this._enter || this._groups.map(ge), this._parents);
}
function ve(e3, t2) {
  this.ownerDocument = e3.ownerDocument, this.namespaceURI = e3.namespaceURI, this._next = null, this._parent = e3, this.__data__ = t2;
}
ve.prototype = { constructor: ve, appendChild: function(e3) {
  return this._parent.insertBefore(e3, this._next);
}, insertBefore: function(e3, t2) {
  return this._parent.insertBefore(e3, t2);
}, querySelector: function(e3) {
  return this._parent.querySelector(e3);
}, querySelectorAll: function(e3) {
  return this._parent.querySelectorAll(e3);
} };
function ye(e3) {
  return function() {
    return e3;
  };
}
function be(e3, t2, n2, r2, i2, a2) {
  for (var o2 = 0, s2, c2 = t2.length, l2 = a2.length; o2 < l2; ++o2) (s2 = t2[o2]) ? (s2.__data__ = a2[o2], r2[o2] = s2) : n2[o2] = new ve(e3, a2[o2]);
  for (; o2 < c2; ++o2) (s2 = t2[o2]) && (i2[o2] = s2);
}
function xe(e3, t2, n2, r2, i2, a2, o2) {
  var s2, c2, l2 = /* @__PURE__ */ new Map(), u2 = t2.length, d2 = a2.length, f2 = Array(u2), p2;
  for (s2 = 0; s2 < u2; ++s2) (c2 = t2[s2]) && (f2[s2] = p2 = o2.call(c2, c2.__data__, s2, t2) + ``, l2.has(p2) ? i2[s2] = c2 : l2.set(p2, c2));
  for (s2 = 0; s2 < d2; ++s2) p2 = o2.call(e3, a2[s2], s2, a2) + ``, (c2 = l2.get(p2)) ? (r2[s2] = c2, c2.__data__ = a2[s2], l2.delete(p2)) : n2[s2] = new ve(e3, a2[s2]);
  for (s2 = 0; s2 < u2; ++s2) (c2 = t2[s2]) && l2.get(f2[s2]) === c2 && (i2[s2] = c2);
}
function Se(e3) {
  return e3.__data__;
}
function Ce(e3, t2) {
  if (!arguments.length) return Array.from(this, Se);
  var n2 = t2 ? xe : be, r2 = this._parents, i2 = this._groups;
  typeof e3 != `function` && (e3 = ye(e3));
  for (var a2 = i2.length, o2 = Array(a2), s2 = Array(a2), c2 = Array(a2), l2 = 0; l2 < a2; ++l2) {
    var u2 = r2[l2], d2 = i2[l2], f2 = d2.length, p2 = we(e3.call(u2, u2 && u2.__data__, l2, r2)), m2 = p2.length, h2 = s2[l2] = Array(m2), g2 = o2[l2] = Array(m2);
    n2(u2, d2, h2, g2, c2[l2] = Array(f2), p2, t2);
    for (var _2 = 0, v2 = 0, y2, b2; _2 < m2; ++_2) if (y2 = h2[_2]) {
      for (_2 >= v2 && (v2 = _2 + 1); !(b2 = g2[v2]) && ++v2 < m2; ) ;
      y2._next = b2 || null;
    }
  }
  return o2 = new D(o2, r2), o2._enter = s2, o2._exit = c2, o2;
}
function we(e3) {
  return typeof e3 == `object` && `length` in e3 ? e3 : Array.from(e3);
}
function Te() {
  return new D(this._exit || this._groups.map(ge), this._parents);
}
function Ee(e3, t2, n2) {
  var r2 = this.enter(), i2 = this, a2 = this.exit();
  return typeof e3 == `function` ? (r2 = e3(r2), r2 && (r2 = r2.selection())) : r2 = r2.append(e3 + ``), t2 != null && (i2 = t2(i2), i2 && (i2 = i2.selection())), n2 == null ? a2.remove() : n2(a2), r2 && i2 ? r2.merge(i2).order() : i2;
}
function De(e3) {
  for (var t2 = e3.selection ? e3.selection() : e3, n2 = this._groups, r2 = t2._groups, i2 = n2.length, a2 = r2.length, o2 = Math.min(i2, a2), s2 = Array(i2), c2 = 0; c2 < o2; ++c2) for (var l2 = n2[c2], u2 = r2[c2], d2 = l2.length, f2 = s2[c2] = Array(d2), p2, m2 = 0; m2 < d2; ++m2) (p2 = l2[m2] || u2[m2]) && (f2[m2] = p2);
  for (; c2 < i2; ++c2) s2[c2] = n2[c2];
  return new D(s2, this._parents);
}
function Oe() {
  for (var e3 = this._groups, t2 = -1, n2 = e3.length; ++t2 < n2; ) for (var r2 = e3[t2], i2 = r2.length - 1, a2 = r2[i2], o2; --i2 >= 0; ) (o2 = r2[i2]) && (a2 && o2.compareDocumentPosition(a2) ^ 4 && a2.parentNode.insertBefore(o2, a2), a2 = o2);
  return this;
}
function ke(e3) {
  e3 || (e3 = Ae);
  function t2(t3, n3) {
    return t3 && n3 ? e3(t3.__data__, n3.__data__) : !t3 - !n3;
  }
  for (var n2 = this._groups, r2 = n2.length, i2 = Array(r2), a2 = 0; a2 < r2; ++a2) {
    for (var o2 = n2[a2], s2 = o2.length, c2 = i2[a2] = Array(s2), l2, u2 = 0; u2 < s2; ++u2) (l2 = o2[u2]) && (c2[u2] = l2);
    c2.sort(t2);
  }
  return new D(i2, this._parents).order();
}
function Ae(e3, t2) {
  return e3 < t2 ? -1 : e3 > t2 ? 1 : e3 >= t2 ? 0 : NaN;
}
function je() {
  var e3 = arguments[0];
  return arguments[0] = this, e3.apply(null, arguments), this;
}
function Me() {
  return Array.from(this);
}
function Ne() {
  for (var e3 = this._groups, t2 = 0, n2 = e3.length; t2 < n2; ++t2) for (var r2 = e3[t2], i2 = 0, a2 = r2.length; i2 < a2; ++i2) {
    var o2 = r2[i2];
    if (o2) return o2;
  }
  return null;
}
function Pe() {
  let e3 = 0;
  for (let t2 of this) ++e3;
  return e3;
}
function Fe() {
  return !this.node();
}
function Ie(e3) {
  for (var t2 = this._groups, n2 = 0, r2 = t2.length; n2 < r2; ++n2) for (var i2 = t2[n2], a2 = 0, o2 = i2.length, s2; a2 < o2; ++a2) (s2 = i2[a2]) && e3.call(s2, s2.__data__, a2, i2);
  return this;
}
function Le(e3) {
  return function() {
    this.removeAttribute(e3);
  };
}
function Re(e3) {
  return function() {
    this.removeAttributeNS(e3.space, e3.local);
  };
}
function ze(e3, t2) {
  return function() {
    this.setAttribute(e3, t2);
  };
}
function Be(e3, t2) {
  return function() {
    this.setAttributeNS(e3.space, e3.local, t2);
  };
}
function Ve(e3, t2) {
  return function() {
    var n2 = t2.apply(this, arguments);
    n2 == null ? this.removeAttribute(e3) : this.setAttribute(e3, n2);
  };
}
function He(e3, t2) {
  return function() {
    var n2 = t2.apply(this, arguments);
    n2 == null ? this.removeAttributeNS(e3.space, e3.local) : this.setAttributeNS(e3.space, e3.local, n2);
  };
}
function Ue(e3, t2) {
  var n2 = y(e3);
  if (arguments.length < 2) {
    var r2 = this.node();
    return n2.local ? r2.getAttributeNS(n2.space, n2.local) : r2.getAttribute(n2);
  }
  return this.each((t2 == null ? n2.local ? Re : Le : typeof t2 == `function` ? n2.local ? He : Ve : n2.local ? Be : ze)(n2, t2));
}
function We(e3) {
  return e3.ownerDocument && e3.ownerDocument.defaultView || e3.document && e3 || e3.defaultView;
}
function Ge(e3) {
  return function() {
    this.style.removeProperty(e3);
  };
}
function Ke(e3, t2, n2) {
  return function() {
    this.style.setProperty(e3, t2, n2);
  };
}
function qe(e3, t2, n2) {
  return function() {
    var r2 = t2.apply(this, arguments);
    r2 == null ? this.style.removeProperty(e3) : this.style.setProperty(e3, r2, n2);
  };
}
function Je(e3, t2, n2) {
  return arguments.length > 1 ? this.each((t2 == null ? Ge : typeof t2 == `function` ? qe : Ke)(e3, t2, n2 ?? ``)) : E(this.node(), e3);
}
function E(e3, t2) {
  return e3.style.getPropertyValue(t2) || We(e3).getComputedStyle(e3, null).getPropertyValue(t2);
}
function Ye(e3) {
  return function() {
    delete this[e3];
  };
}
function Xe(e3, t2) {
  return function() {
    this[e3] = t2;
  };
}
function Ze(e3, t2) {
  return function() {
    var n2 = t2.apply(this, arguments);
    n2 == null ? delete this[e3] : this[e3] = n2;
  };
}
function Qe(e3, t2) {
  return arguments.length > 1 ? this.each((t2 == null ? Ye : typeof t2 == `function` ? Ze : Xe)(e3, t2)) : this.node()[e3];
}
function $e(e3) {
  return e3.trim().split(/^|\s+/);
}
function et(e3) {
  return e3.classList || new tt(e3);
}
function tt(e3) {
  this._node = e3, this._names = $e(e3.getAttribute(`class`) || ``);
}
tt.prototype = { add: function(e3) {
  this._names.indexOf(e3) < 0 && (this._names.push(e3), this._node.setAttribute(`class`, this._names.join(` `)));
}, remove: function(e3) {
  var t2 = this._names.indexOf(e3);
  t2 >= 0 && (this._names.splice(t2, 1), this._node.setAttribute(`class`, this._names.join(` `)));
}, contains: function(e3) {
  return this._names.indexOf(e3) >= 0;
} };
function nt(e3, t2) {
  for (var n2 = et(e3), r2 = -1, i2 = t2.length; ++r2 < i2; ) n2.add(t2[r2]);
}
function rt(e3, t2) {
  for (var n2 = et(e3), r2 = -1, i2 = t2.length; ++r2 < i2; ) n2.remove(t2[r2]);
}
function it(e3) {
  return function() {
    nt(this, e3);
  };
}
function at(e3) {
  return function() {
    rt(this, e3);
  };
}
function ot(e3, t2) {
  return function() {
    (t2.apply(this, arguments) ? nt : rt)(this, e3);
  };
}
function st(e3, t2) {
  var n2 = $e(e3 + ``);
  if (arguments.length < 2) {
    for (var r2 = et(this.node()), i2 = -1, a2 = n2.length; ++i2 < a2; ) if (!r2.contains(n2[i2])) return false;
    return true;
  }
  return this.each((typeof t2 == `function` ? ot : t2 ? it : at)(n2, t2));
}
function ct() {
  this.textContent = ``;
}
function lt(e3) {
  return function() {
    this.textContent = e3;
  };
}
function ut(e3) {
  return function() {
    this.textContent = e3.apply(this, arguments) ?? ``;
  };
}
function dt(e3) {
  return arguments.length ? this.each(e3 == null ? ct : (typeof e3 == `function` ? ut : lt)(e3)) : this.node().textContent;
}
function ft() {
  this.innerHTML = ``;
}
function pt(e3) {
  return function() {
    this.innerHTML = e3;
  };
}
function mt(e3) {
  return function() {
    this.innerHTML = e3.apply(this, arguments) ?? ``;
  };
}
function ht(e3) {
  return arguments.length ? this.each(e3 == null ? ft : (typeof e3 == `function` ? mt : pt)(e3)) : this.node().innerHTML;
}
function gt() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function _t() {
  return this.each(gt);
}
function vt() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function yt() {
  return this.each(vt);
}
function bt(e3) {
  var t2 = typeof e3 == `function` ? e3 : x(e3);
  return this.select(function() {
    return this.appendChild(t2.apply(this, arguments));
  });
}
function xt() {
  return null;
}
function St(e3, t2) {
  var n2 = typeof e3 == `function` ? e3 : x(e3), r2 = t2 == null ? xt : typeof t2 == `function` ? t2 : C(t2);
  return this.select(function() {
    return this.insertBefore(n2.apply(this, arguments), r2.apply(this, arguments) || null);
  });
}
function Ct() {
  var e3 = this.parentNode;
  e3 && e3.removeChild(this);
}
function wt() {
  return this.each(Ct);
}
function Tt() {
  var e3 = this.cloneNode(false), t2 = this.parentNode;
  return t2 ? t2.insertBefore(e3, this.nextSibling) : e3;
}
function Et() {
  var e3 = this.cloneNode(true), t2 = this.parentNode;
  return t2 ? t2.insertBefore(e3, this.nextSibling) : e3;
}
function Dt(e3) {
  return this.select(e3 ? Et : Tt);
}
function Ot(e3) {
  return arguments.length ? this.property(`__data__`, e3) : this.node().__data__;
}
function kt(e3) {
  return function(t2) {
    e3.call(this, t2, this.__data__);
  };
}
function At(e3) {
  return e3.trim().split(/^|\s+/).map(function(e4) {
    var t2 = ``, n2 = e4.indexOf(`.`);
    return n2 >= 0 && (t2 = e4.slice(n2 + 1), e4 = e4.slice(0, n2)), { type: e4, name: t2 };
  });
}
function jt(e3) {
  return function() {
    var t2 = this.__on;
    if (t2) {
      for (var n2 = 0, r2 = -1, i2 = t2.length, a2; n2 < i2; ++n2) a2 = t2[n2], (!e3.type || a2.type === e3.type) && a2.name === e3.name ? this.removeEventListener(a2.type, a2.listener, a2.options) : t2[++r2] = a2;
      ++r2 ? t2.length = r2 : delete this.__on;
    }
  };
}
function Mt(e3, t2, n2) {
  return function() {
    var r2 = this.__on, i2, a2 = kt(t2);
    if (r2) {
      for (var o2 = 0, s2 = r2.length; o2 < s2; ++o2) if ((i2 = r2[o2]).type === e3.type && i2.name === e3.name) {
        this.removeEventListener(i2.type, i2.listener, i2.options), this.addEventListener(i2.type, i2.listener = a2, i2.options = n2), i2.value = t2;
        return;
      }
    }
    this.addEventListener(e3.type, a2, n2), i2 = { type: e3.type, name: e3.name, value: t2, listener: a2, options: n2 }, r2 ? r2.push(i2) : this.__on = [i2];
  };
}
function Nt(e3, t2, n2) {
  var r2 = At(e3 + ``), i2, a2 = r2.length, o2;
  if (arguments.length < 2) {
    var s2 = this.node().__on;
    if (s2) {
      for (var c2 = 0, l2 = s2.length, u2; c2 < l2; ++c2) for (i2 = 0, u2 = s2[c2]; i2 < a2; ++i2) if ((o2 = r2[i2]).type === u2.type && o2.name === u2.name) return u2.value;
    }
    return;
  }
  for (s2 = t2 ? Mt : jt, i2 = 0; i2 < a2; ++i2) this.each(s2(r2[i2], t2, n2));
  return this;
}
function Pt(e3, t2, n2) {
  var r2 = We(e3), i2 = r2.CustomEvent;
  typeof i2 == `function` ? i2 = new i2(t2, n2) : (i2 = r2.document.createEvent(`Event`), n2 ? (i2.initEvent(t2, n2.bubbles, n2.cancelable), i2.detail = n2.detail) : i2.initEvent(t2, false, false)), e3.dispatchEvent(i2);
}
function Ft(e3, t2) {
  return function() {
    return Pt(this, e3, t2);
  };
}
function It(e3, t2) {
  return function() {
    return Pt(this, e3, t2.apply(this, arguments));
  };
}
function Lt(e3, t2) {
  return this.each((typeof t2 == `function` ? It : Ft)(e3, t2));
}
function* Rt() {
  for (var e3 = this._groups, t2 = 0, n2 = e3.length; t2 < n2; ++t2) for (var r2 = e3[t2], i2 = 0, a2 = r2.length, o2; i2 < a2; ++i2) (o2 = r2[i2]) && (yield o2);
}
var zt = [null];
function D(e3, t2) {
  this._groups = e3, this._parents = t2;
}
function Bt() {
  return new D([[document.documentElement]], zt);
}
function Vt() {
  return this;
}
D.prototype = Bt.prototype = { constructor: D, select: w, selectAll: ie, selectChild: ue, selectChildren: me, filter: he, data: Ce, enter: _e, exit: Te, join: Ee, merge: De, selection: Vt, order: Oe, sort: ke, call: je, nodes: Me, node: Ne, size: Pe, empty: Fe, each: Ie, attr: Ue, style: Je, property: Qe, classed: st, text: dt, html: ht, raise: _t, lower: yt, append: bt, insert: St, remove: wt, clone: Dt, datum: Ot, on: Nt, dispatch: Lt, [Symbol.iterator]: Rt };
var O = Bt;
function Ht(e3) {
  return typeof e3 == `string` ? new D([[document.querySelector(e3)]], [document.documentElement]) : new D([[e3]], zt);
}
function Ut(e3, t2, n2) {
  e3.prototype = t2.prototype = n2, n2.constructor = e3;
}
function Wt(e3, t2) {
  var n2 = Object.create(e3.prototype);
  for (var r2 in t2) n2[r2] = t2[r2];
  return n2;
}
function k() {
}
var A = 0.7, j = 1 / A, M = `\\s*([+-]?\\d+)\\s*`, N = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`, P = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`, Gt = /^#([0-9a-f]{3,8})$/, Kt = RegExp(`^rgb\\(${M},${M},${M}\\)$`), qt = RegExp(`^rgb\\(${P},${P},${P}\\)$`), Jt = RegExp(`^rgba\\(${M},${M},${M},${N}\\)$`), Yt = RegExp(`^rgba\\(${P},${P},${P},${N}\\)$`), Xt = RegExp(`^hsl\\(${N},${P},${P}\\)$`), Zt = RegExp(`^hsla\\(${N},${P},${P},${N}\\)$`), Qt = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
Ut(k, F, { copy(e3) {
  return Object.assign(new this.constructor(), this, e3);
}, displayable() {
  return this.rgb().displayable();
}, hex: $t, formatHex: $t, formatHex8: en, formatHsl: tn, formatRgb: nn, toString: nn });
function $t() {
  return this.rgb().formatHex();
}
function en() {
  return this.rgb().formatHex8();
}
function tn() {
  return dn(this).formatHsl();
}
function nn() {
  return this.rgb().formatRgb();
}
function F(e3) {
  var t2, n2;
  return e3 = (e3 + ``).trim().toLowerCase(), (t2 = Gt.exec(e3)) ? (n2 = t2[1].length, t2 = parseInt(t2[1], 16), n2 === 6 ? rn(t2) : n2 === 3 ? new L(t2 >> 8 & 15 | t2 >> 4 & 240, t2 >> 4 & 15 | t2 & 240, (t2 & 15) << 4 | t2 & 15, 1) : n2 === 8 ? I(t2 >> 24 & 255, t2 >> 16 & 255, t2 >> 8 & 255, (t2 & 255) / 255) : n2 === 4 ? I(t2 >> 12 & 15 | t2 >> 8 & 240, t2 >> 8 & 15 | t2 >> 4 & 240, t2 >> 4 & 15 | t2 & 240, ((t2 & 15) << 4 | t2 & 15) / 255) : null) : (t2 = Kt.exec(e3)) ? new L(t2[1], t2[2], t2[3], 1) : (t2 = qt.exec(e3)) ? new L(t2[1] * 255 / 100, t2[2] * 255 / 100, t2[3] * 255 / 100, 1) : (t2 = Jt.exec(e3)) ? I(t2[1], t2[2], t2[3], t2[4]) : (t2 = Yt.exec(e3)) ? I(t2[1] * 255 / 100, t2[2] * 255 / 100, t2[3] * 255 / 100, t2[4]) : (t2 = Xt.exec(e3)) ? un(t2[1], t2[2] / 100, t2[3] / 100, 1) : (t2 = Zt.exec(e3)) ? un(t2[1], t2[2] / 100, t2[3] / 100, t2[4]) : Qt.hasOwnProperty(e3) ? rn(Qt[e3]) : e3 === `transparent` ? new L(NaN, NaN, NaN, 0) : null;
}
function rn(e3) {
  return new L(e3 >> 16 & 255, e3 >> 8 & 255, e3 & 255, 1);
}
function I(e3, t2, n2, r2) {
  return r2 <= 0 && (e3 = t2 = n2 = NaN), new L(e3, t2, n2, r2);
}
function an(e3) {
  return e3 instanceof k || (e3 = F(e3)), e3 ? (e3 = e3.rgb(), new L(e3.r, e3.g, e3.b, e3.opacity)) : new L();
}
function on(e3, t2, n2, r2) {
  return arguments.length === 1 ? an(e3) : new L(e3, t2, n2, r2 ?? 1);
}
function L(e3, t2, n2, r2) {
  this.r = +e3, this.g = +t2, this.b = +n2, this.opacity = +r2;
}
Ut(L, on, Wt(k, { brighter(e3) {
  return e3 = e3 == null ? j : j ** +e3, new L(this.r * e3, this.g * e3, this.b * e3, this.opacity);
}, darker(e3) {
  return e3 = e3 == null ? A : A ** +e3, new L(this.r * e3, this.g * e3, this.b * e3, this.opacity);
}, rgb() {
  return this;
}, clamp() {
  return new L(z(this.r), z(this.g), z(this.b), R(this.opacity));
}, displayable() {
  return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
}, hex: sn, formatHex: sn, formatHex8: cn, formatRgb: ln, toString: ln }));
function sn() {
  return `#${B(this.r)}${B(this.g)}${B(this.b)}`;
}
function cn() {
  return `#${B(this.r)}${B(this.g)}${B(this.b)}${B((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ln() {
  let e3 = R(this.opacity);
  return `${e3 === 1 ? `rgb(` : `rgba(`}${z(this.r)}, ${z(this.g)}, ${z(this.b)}${e3 === 1 ? `)` : `, ${e3})`}`;
}
function R(e3) {
  return isNaN(e3) ? 1 : Math.max(0, Math.min(1, e3));
}
function z(e3) {
  return Math.max(0, Math.min(255, Math.round(e3) || 0));
}
function B(e3) {
  return e3 = z(e3), (e3 < 16 ? `0` : ``) + e3.toString(16);
}
function un(e3, t2, n2, r2) {
  return r2 <= 0 ? e3 = t2 = n2 = NaN : n2 <= 0 || n2 >= 1 ? e3 = t2 = NaN : t2 <= 0 && (e3 = NaN), new V(e3, t2, n2, r2);
}
function dn(e3) {
  if (e3 instanceof V) return new V(e3.h, e3.s, e3.l, e3.opacity);
  if (e3 instanceof k || (e3 = F(e3)), !e3) return new V();
  if (e3 instanceof V) return e3;
  e3 = e3.rgb();
  var t2 = e3.r / 255, n2 = e3.g / 255, r2 = e3.b / 255, i2 = Math.min(t2, n2, r2), a2 = Math.max(t2, n2, r2), o2 = NaN, s2 = a2 - i2, c2 = (a2 + i2) / 2;
  return s2 ? (o2 = t2 === a2 ? (n2 - r2) / s2 + (n2 < r2) * 6 : n2 === a2 ? (r2 - t2) / s2 + 2 : (t2 - n2) / s2 + 4, s2 /= c2 < 0.5 ? a2 + i2 : 2 - a2 - i2, o2 *= 60) : s2 = c2 > 0 && c2 < 1 ? 0 : o2, new V(o2, s2, c2, e3.opacity);
}
function fn(e3, t2, n2, r2) {
  return arguments.length === 1 ? dn(e3) : new V(e3, t2, n2, r2 ?? 1);
}
function V(e3, t2, n2, r2) {
  this.h = +e3, this.s = +t2, this.l = +n2, this.opacity = +r2;
}
Ut(V, fn, Wt(k, { brighter(e3) {
  return e3 = e3 == null ? j : j ** +e3, new V(this.h, this.s, this.l * e3, this.opacity);
}, darker(e3) {
  return e3 = e3 == null ? A : A ** +e3, new V(this.h, this.s, this.l * e3, this.opacity);
}, rgb() {
  var e3 = this.h % 360 + (this.h < 0) * 360, t2 = isNaN(e3) || isNaN(this.s) ? 0 : this.s, n2 = this.l, r2 = n2 + (n2 < 0.5 ? n2 : 1 - n2) * t2, i2 = 2 * n2 - r2;
  return new L(mn(e3 >= 240 ? e3 - 240 : e3 + 120, i2, r2), mn(e3, i2, r2), mn(e3 < 120 ? e3 + 240 : e3 - 120, i2, r2), this.opacity);
}, clamp() {
  return new V(pn(this.h), H(this.s), H(this.l), R(this.opacity));
}, displayable() {
  return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
}, formatHsl() {
  let e3 = R(this.opacity);
  return `${e3 === 1 ? `hsl(` : `hsla(`}${pn(this.h)}, ${H(this.s) * 100}%, ${H(this.l) * 100}%${e3 === 1 ? `)` : `, ${e3})`}`;
} }));
function pn(e3) {
  return e3 = (e3 || 0) % 360, e3 < 0 ? e3 + 360 : e3;
}
function H(e3) {
  return Math.max(0, Math.min(1, e3 || 0));
}
function mn(e3, t2, n2) {
  return (e3 < 60 ? t2 + (n2 - t2) * e3 / 60 : e3 < 180 ? n2 : e3 < 240 ? t2 + (n2 - t2) * (240 - e3) / 60 : t2) * 255;
}
var hn = (e3) => () => e3;
function gn(e3, t2) {
  return function(n2) {
    return e3 + n2 * t2;
  };
}
function _n(e3, t2, n2) {
  return e3 **= +n2, t2 = t2 ** +n2 - e3, n2 = 1 / n2, function(r2) {
    return (e3 + r2 * t2) ** +n2;
  };
}
function vn(e3, t2) {
  var n2 = t2 - e3;
  return n2 ? gn(e3, n2 > 180 || n2 < -180 ? n2 - 360 * Math.round(n2 / 360) : n2) : hn(isNaN(e3) ? t2 : e3);
}
function yn(e3) {
  return (e3 = +e3) == 1 ? bn : function(t2, n2) {
    return n2 - t2 ? _n(t2, n2, e3) : hn(isNaN(t2) ? n2 : t2);
  };
}
function bn(e3, t2) {
  var n2 = t2 - e3;
  return n2 ? gn(e3, n2) : hn(isNaN(e3) ? t2 : e3);
}
var xn = (function e2(t2) {
  var n2 = yn(t2);
  function r2(e3, t3) {
    var r3 = n2((e3 = on(e3)).r, (t3 = on(t3)).r), i2 = n2(e3.g, t3.g), a2 = n2(e3.b, t3.b), o2 = bn(e3.opacity, t3.opacity);
    return function(t4) {
      return e3.r = r3(t4), e3.g = i2(t4), e3.b = a2(t4), e3.opacity = o2(t4), e3 + ``;
    };
  }
  return r2.gamma = e2, r2;
})(1);
function U(e3, t2) {
  return e3 = +e3, t2 = +t2, function(n2) {
    return e3 * (1 - n2) + t2 * n2;
  };
}
var Sn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Cn = new RegExp(Sn.source, `g`);
function wn(e3) {
  return function() {
    return e3;
  };
}
function Tn(e3) {
  return function(t2) {
    return e3(t2) + ``;
  };
}
function En(e3, t2) {
  var n2 = Sn.lastIndex = Cn.lastIndex = 0, r2, i2, a2, o2 = -1, s2 = [], c2 = [];
  for (e3 += ``, t2 += ``; (r2 = Sn.exec(e3)) && (i2 = Cn.exec(t2)); ) (a2 = i2.index) > n2 && (a2 = t2.slice(n2, a2), s2[o2] ? s2[o2] += a2 : s2[++o2] = a2), (r2 = r2[0]) === (i2 = i2[0]) ? s2[o2] ? s2[o2] += i2 : s2[++o2] = i2 : (s2[++o2] = null, c2.push({ i: o2, x: U(r2, i2) })), n2 = Cn.lastIndex;
  return n2 < t2.length && (a2 = t2.slice(n2), s2[o2] ? s2[o2] += a2 : s2[++o2] = a2), s2.length < 2 ? c2[0] ? Tn(c2[0].x) : wn(t2) : (t2 = c2.length, function(e4) {
    for (var n3 = 0, r3; n3 < t2; ++n3) s2[(r3 = c2[n3]).i] = r3.x(e4);
    return s2.join(``);
  });
}
var Dn = 180 / Math.PI, On = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
function kn(e3, t2, n2, r2, i2, a2) {
  var o2, s2, c2;
  return (o2 = Math.sqrt(e3 * e3 + t2 * t2)) && (e3 /= o2, t2 /= o2), (c2 = e3 * n2 + t2 * r2) && (n2 -= e3 * c2, r2 -= t2 * c2), (s2 = Math.sqrt(n2 * n2 + r2 * r2)) && (n2 /= s2, r2 /= s2, c2 /= s2), e3 * r2 < t2 * n2 && (e3 = -e3, t2 = -t2, c2 = -c2, o2 = -o2), { translateX: i2, translateY: a2, rotate: Math.atan2(t2, e3) * Dn, skewX: Math.atan(c2) * Dn, scaleX: o2, scaleY: s2 };
}
var An;
function jn(e3) {
  let t2 = new (typeof DOMMatrix == `function` ? DOMMatrix : WebKitCSSMatrix)(e3 + ``);
  return t2.isIdentity ? On : kn(t2.a, t2.b, t2.c, t2.d, t2.e, t2.f);
}
function Mn(e3) {
  return e3 == null || (An || (An = document.createElementNS(`http://www.w3.org/2000/svg`, `g`)), An.setAttribute(`transform`, e3), !(e3 = An.transform.baseVal.consolidate())) ? On : (e3 = e3.matrix, kn(e3.a, e3.b, e3.c, e3.d, e3.e, e3.f));
}
function Nn(e3, t2, n2, r2) {
  function i2(e4) {
    return e4.length ? e4.pop() + ` ` : ``;
  }
  function a2(e4, r3, i3, a3, o3, s3) {
    if (e4 !== i3 || r3 !== a3) {
      var c3 = o3.push(`translate(`, null, t2, null, n2);
      s3.push({ i: c3 - 4, x: U(e4, i3) }, { i: c3 - 2, x: U(r3, a3) });
    } else (i3 || a3) && o3.push(`translate(` + i3 + t2 + a3 + n2);
  }
  function o2(e4, t3, n3, a3) {
    e4 === t3 ? t3 && n3.push(i2(n3) + `rotate(` + t3 + r2) : (e4 - t3 > 180 ? t3 += 360 : t3 - e4 > 180 && (e4 += 360), a3.push({ i: n3.push(i2(n3) + `rotate(`, null, r2) - 2, x: U(e4, t3) }));
  }
  function s2(e4, t3, n3, a3) {
    e4 === t3 ? t3 && n3.push(i2(n3) + `skewX(` + t3 + r2) : a3.push({ i: n3.push(i2(n3) + `skewX(`, null, r2) - 2, x: U(e4, t3) });
  }
  function c2(e4, t3, n3, r3, a3, o3) {
    if (e4 !== n3 || t3 !== r3) {
      var s3 = a3.push(i2(a3) + `scale(`, null, `,`, null, `)`);
      o3.push({ i: s3 - 4, x: U(e4, n3) }, { i: s3 - 2, x: U(t3, r3) });
    } else (n3 !== 1 || r3 !== 1) && a3.push(i2(a3) + `scale(` + n3 + `,` + r3 + `)`);
  }
  return function(t3, n3) {
    var r3 = [], i3 = [];
    return t3 = e3(t3), n3 = e3(n3), a2(t3.translateX, t3.translateY, n3.translateX, n3.translateY, r3, i3), o2(t3.rotate, n3.rotate, r3, i3), s2(t3.skewX, n3.skewX, r3, i3), c2(t3.scaleX, t3.scaleY, n3.scaleX, n3.scaleY, r3, i3), t3 = n3 = null, function(e4) {
      for (var t4 = -1, n4 = i3.length, a3; ++t4 < n4; ) r3[(a3 = i3[t4]).i] = a3.x(e4);
      return r3.join(``);
    };
  };
}
var Pn = Nn(jn, `px, `, `px)`, `deg)`), Fn = Nn(Mn, `, `, `)`, `)`), W = 0, In = 0, Ln = 0, Rn = 1e3, zn, G, Bn = 0, K = 0, Vn = 0, q = typeof performance == `object` && performance.now ? performance : Date, Hn = typeof window == `object` && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e3) {
  setTimeout(e3, 17);
};
function Un() {
  return K || (K = (Hn(Wn), q.now() + Vn));
}
function Wn() {
  K = 0;
}
function Gn() {
  this._call = this._time = this._next = null;
}
Gn.prototype = Kn.prototype = { constructor: Gn, restart: function(e3, t2, n2) {
  if (typeof e3 != `function`) throw TypeError(`callback is not a function`);
  n2 = (n2 == null ? Un() : +n2) + (t2 == null ? 0 : +t2), !this._next && G !== this && (G ? G._next = this : zn = this, G = this), this._call = e3, this._time = n2, Zn();
}, stop: function() {
  this._call && (this._call = null, this._time = 1 / 0, Zn());
} };
function Kn(e3, t2, n2) {
  var r2 = new Gn();
  return r2.restart(e3, t2, n2), r2;
}
function qn() {
  Un(), ++W;
  for (var e3 = zn, t2; e3; ) (t2 = K - e3._time) >= 0 && e3._call.call(void 0, t2), e3 = e3._next;
  --W;
}
function Jn() {
  K = (Bn = q.now()) + Vn, W = In = 0;
  try {
    qn();
  } finally {
    W = 0, Xn(), K = 0;
  }
}
function Yn() {
  var e3 = q.now(), t2 = e3 - Bn;
  t2 > Rn && (Vn -= t2, Bn = e3);
}
function Xn() {
  for (var e3, t2 = zn, n2, r2 = 1 / 0; t2; ) t2._call ? (r2 > t2._time && (r2 = t2._time), e3 = t2, t2 = t2._next) : (n2 = t2._next, t2._next = null, t2 = e3 ? e3._next = n2 : zn = n2);
  G = e3, Zn(r2);
}
function Zn(e3) {
  W || (In && (In = clearTimeout(In)), e3 - K > 24 ? (e3 < 1 / 0 && (In = setTimeout(Jn, e3 - q.now() - Vn)), Ln && (Ln = clearInterval(Ln))) : (Ln || (Ln = (Bn = q.now(), setInterval(Yn, Rn))), W = 1, Hn(Jn)));
}
function Qn(e3, t2, n2) {
  var r2 = new Gn();
  return t2 = t2 == null ? 0 : +t2, r2.restart((n3) => {
    r2.stop(), e3(n3 + t2);
  }, t2, n2), r2;
}
var $n = _(`start`, `end`, `cancel`, `interrupt`), er = [];
function J(e3, t2, n2, r2, i2, a2) {
  var o2 = e3.__transition;
  if (!o2) e3.__transition = {};
  else if (n2 in o2) return;
  nr(e3, n2, { name: t2, index: r2, group: i2, on: $n, tween: er, time: a2.time, delay: a2.delay, duration: a2.duration, ease: a2.ease, timer: null, state: 0 });
}
function tr(e3, t2) {
  var n2 = X(e3, t2);
  if (n2.state > 0) throw Error(`too late; already scheduled`);
  return n2;
}
function Y(e3, t2) {
  var n2 = X(e3, t2);
  if (n2.state > 3) throw Error(`too late; already running`);
  return n2;
}
function X(e3, t2) {
  var n2 = e3.__transition;
  if (!n2 || !(n2 = n2[t2])) throw Error(`transition not found`);
  return n2;
}
function nr(e3, t2, n2) {
  var r2 = e3.__transition, i2;
  r2[t2] = n2, n2.timer = Kn(a2, 0, n2.time);
  function a2(e4) {
    n2.state = 1, n2.timer.restart(o2, n2.delay, n2.time), n2.delay <= e4 && o2(e4 - n2.delay);
  }
  function o2(a3) {
    var l2, u2, d2, f2;
    if (n2.state !== 1) return c2();
    for (l2 in r2) if (f2 = r2[l2], f2.name === n2.name) {
      if (f2.state === 3) return Qn(o2);
      f2.state === 4 ? (f2.state = 6, f2.timer.stop(), f2.on.call(`interrupt`, e3, e3.__data__, f2.index, f2.group), delete r2[l2]) : +l2 < t2 && (f2.state = 6, f2.timer.stop(), f2.on.call(`cancel`, e3, e3.__data__, f2.index, f2.group), delete r2[l2]);
    }
    if (Qn(function() {
      n2.state === 3 && (n2.state = 4, n2.timer.restart(s2, n2.delay, n2.time), s2(a3));
    }), n2.state = 2, n2.on.call(`start`, e3, e3.__data__, n2.index, n2.group), n2.state === 2) {
      for (n2.state = 3, i2 = Array(d2 = n2.tween.length), l2 = 0, u2 = -1; l2 < d2; ++l2) (f2 = n2.tween[l2].value.call(e3, e3.__data__, n2.index, n2.group)) && (i2[++u2] = f2);
      i2.length = u2 + 1;
    }
  }
  function s2(t3) {
    for (var r3 = t3 < n2.duration ? n2.ease.call(null, t3 / n2.duration) : (n2.timer.restart(c2), n2.state = 5, 1), a3 = -1, o3 = i2.length; ++a3 < o3; ) i2[a3].call(e3, r3);
    n2.state === 5 && (n2.on.call(`end`, e3, e3.__data__, n2.index, n2.group), c2());
  }
  function c2() {
    for (var i3 in n2.state = 6, n2.timer.stop(), delete r2[t2], r2) return;
    delete e3.__transition;
  }
}
function rr(e3, t2) {
  var n2 = e3.__transition, r2, i2, a2 = true, o2;
  if (n2) {
    for (o2 in t2 = t2 == null ? null : t2 + ``, n2) {
      if ((r2 = n2[o2]).name !== t2) {
        a2 = false;
        continue;
      }
      i2 = r2.state > 2 && r2.state < 5, r2.state = 6, r2.timer.stop(), r2.on.call(i2 ? `interrupt` : `cancel`, e3, e3.__data__, r2.index, r2.group), delete n2[o2];
    }
    a2 && delete e3.__transition;
  }
}
function ir(e3) {
  return this.each(function() {
    rr(this, e3);
  });
}
function ar(e3, t2) {
  var n2, r2;
  return function() {
    var i2 = Y(this, e3), a2 = i2.tween;
    if (a2 !== n2) {
      r2 = n2 = a2;
      for (var o2 = 0, s2 = r2.length; o2 < s2; ++o2) if (r2[o2].name === t2) {
        r2 = r2.slice(), r2.splice(o2, 1);
        break;
      }
    }
    i2.tween = r2;
  };
}
function or(e3, t2, n2) {
  var r2, i2;
  if (typeof n2 != `function`) throw Error();
  return function() {
    var a2 = Y(this, e3), o2 = a2.tween;
    if (o2 !== r2) {
      i2 = (r2 = o2).slice();
      for (var s2 = { name: t2, value: n2 }, c2 = 0, l2 = i2.length; c2 < l2; ++c2) if (i2[c2].name === t2) {
        i2[c2] = s2;
        break;
      }
      c2 === l2 && i2.push(s2);
    }
    a2.tween = i2;
  };
}
function sr(e3, t2) {
  var n2 = this._id;
  if (e3 += ``, arguments.length < 2) {
    for (var r2 = X(this.node(), n2).tween, i2 = 0, a2 = r2.length, o2; i2 < a2; ++i2) if ((o2 = r2[i2]).name === e3) return o2.value;
    return null;
  }
  return this.each((t2 == null ? ar : or)(n2, e3, t2));
}
function cr(e3, t2, n2) {
  var r2 = e3._id;
  return e3.each(function() {
    var e4 = Y(this, r2);
    (e4.value || (e4.value = {}))[t2] = n2.apply(this, arguments);
  }), function(e4) {
    return X(e4, r2).value[t2];
  };
}
function lr(e3, t2) {
  var n2;
  return (typeof t2 == `number` ? U : t2 instanceof F ? xn : (n2 = F(t2)) ? (t2 = n2, xn) : En)(e3, t2);
}
function ur(e3) {
  return function() {
    this.removeAttribute(e3);
  };
}
function dr(e3) {
  return function() {
    this.removeAttributeNS(e3.space, e3.local);
  };
}
function fr(e3, t2, n2) {
  var r2, i2 = n2 + ``, a2;
  return function() {
    var o2 = this.getAttribute(e3);
    return o2 === i2 ? null : o2 === r2 ? a2 : a2 = t2(r2 = o2, n2);
  };
}
function pr(e3, t2, n2) {
  var r2, i2 = n2 + ``, a2;
  return function() {
    var o2 = this.getAttributeNS(e3.space, e3.local);
    return o2 === i2 ? null : o2 === r2 ? a2 : a2 = t2(r2 = o2, n2);
  };
}
function mr(e3, t2, n2) {
  var r2, i2, a2;
  return function() {
    var o2, s2 = n2(this), c2;
    return s2 == null ? void this.removeAttribute(e3) : (o2 = this.getAttribute(e3), c2 = s2 + ``, o2 === c2 ? null : o2 === r2 && c2 === i2 ? a2 : (i2 = c2, a2 = t2(r2 = o2, s2)));
  };
}
function hr(e3, t2, n2) {
  var r2, i2, a2;
  return function() {
    var o2, s2 = n2(this), c2;
    return s2 == null ? void this.removeAttributeNS(e3.space, e3.local) : (o2 = this.getAttributeNS(e3.space, e3.local), c2 = s2 + ``, o2 === c2 ? null : o2 === r2 && c2 === i2 ? a2 : (i2 = c2, a2 = t2(r2 = o2, s2)));
  };
}
function gr(e3, t2) {
  var n2 = y(e3), r2 = n2 === `transform` ? Fn : lr;
  return this.attrTween(e3, typeof t2 == `function` ? (n2.local ? hr : mr)(n2, r2, cr(this, `attr.` + e3, t2)) : t2 == null ? (n2.local ? dr : ur)(n2) : (n2.local ? pr : fr)(n2, r2, t2));
}
function _r(e3, t2) {
  return function(n2) {
    this.setAttribute(e3, t2.call(this, n2));
  };
}
function vr(e3, t2) {
  return function(n2) {
    this.setAttributeNS(e3.space, e3.local, t2.call(this, n2));
  };
}
function yr(e3, t2) {
  var n2, r2;
  function i2() {
    var i3 = t2.apply(this, arguments);
    return i3 !== r2 && (n2 = (r2 = i3) && vr(e3, i3)), n2;
  }
  return i2._value = t2, i2;
}
function br(e3, t2) {
  var n2, r2;
  function i2() {
    var i3 = t2.apply(this, arguments);
    return i3 !== r2 && (n2 = (r2 = i3) && _r(e3, i3)), n2;
  }
  return i2._value = t2, i2;
}
function xr(e3, t2) {
  var n2 = `attr.` + e3;
  if (arguments.length < 2) return (n2 = this.tween(n2)) && n2._value;
  if (t2 == null) return this.tween(n2, null);
  if (typeof t2 != `function`) throw Error();
  var r2 = y(e3);
  return this.tween(n2, (r2.local ? yr : br)(r2, t2));
}
function Sr(e3, t2) {
  return function() {
    tr(this, e3).delay = +t2.apply(this, arguments);
  };
}
function Cr(e3, t2) {
  return t2 = +t2, function() {
    tr(this, e3).delay = t2;
  };
}
function wr(e3) {
  var t2 = this._id;
  return arguments.length ? this.each((typeof e3 == `function` ? Sr : Cr)(t2, e3)) : X(this.node(), t2).delay;
}
function Tr(e3, t2) {
  return function() {
    Y(this, e3).duration = +t2.apply(this, arguments);
  };
}
function Er(e3, t2) {
  return t2 = +t2, function() {
    Y(this, e3).duration = t2;
  };
}
function Dr(e3) {
  var t2 = this._id;
  return arguments.length ? this.each((typeof e3 == `function` ? Tr : Er)(t2, e3)) : X(this.node(), t2).duration;
}
function Or(e3, t2) {
  if (typeof t2 != `function`) throw Error();
  return function() {
    Y(this, e3).ease = t2;
  };
}
function kr(e3) {
  var t2 = this._id;
  return arguments.length ? this.each(Or(t2, e3)) : X(this.node(), t2).ease;
}
function Ar(e3, t2) {
  return function() {
    var n2 = t2.apply(this, arguments);
    if (typeof n2 != `function`) throw Error();
    Y(this, e3).ease = n2;
  };
}
function jr(e3) {
  if (typeof e3 != `function`) throw Error();
  return this.each(Ar(this._id, e3));
}
function Mr(e3) {
  typeof e3 != `function` && (e3 = ae(e3));
  for (var t2 = this._groups, n2 = t2.length, r2 = Array(n2), i2 = 0; i2 < n2; ++i2) for (var a2 = t2[i2], o2 = a2.length, s2 = r2[i2] = [], c2, l2 = 0; l2 < o2; ++l2) (c2 = a2[l2]) && e3.call(c2, c2.__data__, l2, a2) && s2.push(c2);
  return new Z(r2, this._parents, this._name, this._id);
}
function Nr(e3) {
  if (e3._id !== this._id) throw Error();
  for (var t2 = this._groups, n2 = e3._groups, r2 = t2.length, i2 = n2.length, a2 = Math.min(r2, i2), o2 = Array(r2), s2 = 0; s2 < a2; ++s2) for (var c2 = t2[s2], l2 = n2[s2], u2 = c2.length, d2 = o2[s2] = Array(u2), f2, p2 = 0; p2 < u2; ++p2) (f2 = c2[p2] || l2[p2]) && (d2[p2] = f2);
  for (; s2 < r2; ++s2) o2[s2] = t2[s2];
  return new Z(o2, this._parents, this._name, this._id);
}
function Pr(e3) {
  return (e3 + ``).trim().split(/^|\s+/).every(function(e4) {
    var t2 = e4.indexOf(`.`);
    return t2 >= 0 && (e4 = e4.slice(0, t2)), !e4 || e4 === `start`;
  });
}
function Fr(e3, t2, n2) {
  var r2, i2, a2 = Pr(t2) ? tr : Y;
  return function() {
    var o2 = a2(this, e3), s2 = o2.on;
    s2 !== r2 && (i2 = (r2 = s2).copy()).on(t2, n2), o2.on = i2;
  };
}
function Ir(e3, t2) {
  var n2 = this._id;
  return arguments.length < 2 ? X(this.node(), n2).on.on(e3) : this.each(Fr(n2, e3, t2));
}
function Lr(e3) {
  return function() {
    var t2 = this.parentNode;
    for (var n2 in this.__transition) if (+n2 !== e3) return;
    t2 && t2.removeChild(this);
  };
}
function Rr() {
  return this.on(`end.remove`, Lr(this._id));
}
function zr(e3) {
  var t2 = this._name, n2 = this._id;
  typeof e3 != `function` && (e3 = C(e3));
  for (var r2 = this._groups, i2 = r2.length, a2 = Array(i2), o2 = 0; o2 < i2; ++o2) for (var s2 = r2[o2], c2 = s2.length, l2 = a2[o2] = Array(c2), u2, d2, f2 = 0; f2 < c2; ++f2) (u2 = s2[f2]) && (d2 = e3.call(u2, u2.__data__, f2, s2)) && (`__data__` in u2 && (d2.__data__ = u2.__data__), l2[f2] = d2, J(l2[f2], t2, n2, f2, l2, X(u2, n2)));
  return new Z(a2, this._parents, t2, n2);
}
function Br(e3) {
  var t2 = this._name, n2 = this._id;
  typeof e3 != `function` && (e3 = ne(e3));
  for (var r2 = this._groups, i2 = r2.length, a2 = [], o2 = [], s2 = 0; s2 < i2; ++s2) for (var c2 = r2[s2], l2 = c2.length, u2, d2 = 0; d2 < l2; ++d2) if (u2 = c2[d2]) {
    for (var f2 = e3.call(u2, u2.__data__, d2, c2), p2, m2 = X(u2, n2), h2 = 0, g2 = f2.length; h2 < g2; ++h2) (p2 = f2[h2]) && J(p2, t2, n2, h2, f2, m2);
    a2.push(f2), o2.push(u2);
  }
  return new Z(a2, o2, t2, n2);
}
var Vr = O.prototype.constructor;
function Hr() {
  return new Vr(this._groups, this._parents);
}
function Ur(e3, t2) {
  var n2, r2, i2;
  return function() {
    var a2 = E(this, e3), o2 = (this.style.removeProperty(e3), E(this, e3));
    return a2 === o2 ? null : a2 === n2 && o2 === r2 ? i2 : i2 = t2(n2 = a2, r2 = o2);
  };
}
function Wr(e3) {
  return function() {
    this.style.removeProperty(e3);
  };
}
function Gr(e3, t2, n2) {
  var r2, i2 = n2 + ``, a2;
  return function() {
    var o2 = E(this, e3);
    return o2 === i2 ? null : o2 === r2 ? a2 : a2 = t2(r2 = o2, n2);
  };
}
function Kr(e3, t2, n2) {
  var r2, i2, a2;
  return function() {
    var o2 = E(this, e3), s2 = n2(this), c2 = s2 + ``;
    return s2 ?? (c2 = s2 = (this.style.removeProperty(e3), E(this, e3))), o2 === c2 ? null : o2 === r2 && c2 === i2 ? a2 : (i2 = c2, a2 = t2(r2 = o2, s2));
  };
}
function qr(e3, t2) {
  var n2, r2, i2, a2 = `style.` + t2, o2 = `end.` + a2, s2;
  return function() {
    var c2 = Y(this, e3), l2 = c2.on, u2 = c2.value[a2] == null ? s2 || (s2 = Wr(t2)) : void 0;
    (l2 !== n2 || i2 !== u2) && (r2 = (n2 = l2).copy()).on(o2, i2 = u2), c2.on = r2;
  };
}
function Jr(e3, t2, n2) {
  var r2 = (e3 += ``) == `transform` ? Pn : lr;
  return t2 == null ? this.styleTween(e3, Ur(e3, r2)).on(`end.style.` + e3, Wr(e3)) : typeof t2 == `function` ? this.styleTween(e3, Kr(e3, r2, cr(this, `style.` + e3, t2))).each(qr(this._id, e3)) : this.styleTween(e3, Gr(e3, r2, t2), n2).on(`end.style.` + e3, null);
}
function Yr(e3, t2, n2) {
  return function(r2) {
    this.style.setProperty(e3, t2.call(this, r2), n2);
  };
}
function Xr(e3, t2, n2) {
  var r2, i2;
  function a2() {
    var a3 = t2.apply(this, arguments);
    return a3 !== i2 && (r2 = (i2 = a3) && Yr(e3, a3, n2)), r2;
  }
  return a2._value = t2, a2;
}
function Zr(e3, t2, n2) {
  var r2 = `style.` + (e3 += ``);
  if (arguments.length < 2) return (r2 = this.tween(r2)) && r2._value;
  if (t2 == null) return this.tween(r2, null);
  if (typeof t2 != `function`) throw Error();
  return this.tween(r2, Xr(e3, t2, n2 ?? ``));
}
function Qr(e3) {
  return function() {
    this.textContent = e3;
  };
}
function $r(e3) {
  return function() {
    this.textContent = e3(this) ?? ``;
  };
}
function ei(e3) {
  return this.tween(`text`, typeof e3 == `function` ? $r(cr(this, `text`, e3)) : Qr(e3 == null ? `` : e3 + ``));
}
function ti(e3) {
  return function(t2) {
    this.textContent = e3.call(this, t2);
  };
}
function ni(e3) {
  var t2, n2;
  function r2() {
    var r3 = e3.apply(this, arguments);
    return r3 !== n2 && (t2 = (n2 = r3) && ti(r3)), t2;
  }
  return r2._value = e3, r2;
}
function ri(e3) {
  var t2 = `text`;
  if (arguments.length < 1) return (t2 = this.tween(t2)) && t2._value;
  if (e3 == null) return this.tween(t2, null);
  if (typeof e3 != `function`) throw Error();
  return this.tween(t2, ni(e3));
}
function ii() {
  for (var e3 = this._name, t2 = this._id, n2 = ci(), r2 = this._groups, i2 = r2.length, a2 = 0; a2 < i2; ++a2) for (var o2 = r2[a2], s2 = o2.length, c2, l2 = 0; l2 < s2; ++l2) if (c2 = o2[l2]) {
    var u2 = X(c2, t2);
    J(c2, e3, n2, l2, o2, { time: u2.time + u2.delay + u2.duration, delay: 0, duration: u2.duration, ease: u2.ease });
  }
  return new Z(r2, this._parents, e3, n2);
}
function ai() {
  var e3, t2, n2 = this, r2 = n2._id, i2 = n2.size();
  return new Promise(function(a2, o2) {
    var s2 = { value: o2 }, c2 = { value: function() {
      --i2 === 0 && a2();
    } };
    n2.each(function() {
      var n3 = Y(this, r2), i3 = n3.on;
      i3 !== e3 && (t2 = (e3 = i3).copy(), t2._.cancel.push(s2), t2._.interrupt.push(s2), t2._.end.push(c2)), n3.on = t2;
    }), i2 === 0 && a2();
  });
}
var oi = 0;
function Z(e3, t2, n2, r2) {
  this._groups = e3, this._parents = t2, this._name = n2, this._id = r2;
}
function si(e3) {
  return O().transition(e3);
}
function ci() {
  return ++oi;
}
var Q = O.prototype;
Z.prototype = si.prototype = { constructor: Z, select: zr, selectAll: Br, selectChild: Q.selectChild, selectChildren: Q.selectChildren, filter: Mr, merge: Nr, selection: Hr, transition: ii, call: Q.call, nodes: Q.nodes, node: Q.node, size: Q.size, empty: Q.empty, each: Q.each, on: Ir, attr: gr, attrTween: xr, style: Jr, styleTween: Zr, text: ei, textTween: ri, remove: Rr, tween: sr, delay: wr, duration: Dr, ease: kr, easeVarying: jr, end: ai, [Symbol.iterator]: Q[Symbol.iterator] };
function li(e3) {
  return ((e3 *= 2) <= 1 ? e3 * e3 * e3 : (e3 -= 2) * e3 * e3 + 2) / 2;
}
var ui = { time: null, delay: 0, duration: 250, ease: li };
function di(e3, t2) {
  for (var n2; !(n2 = e3.__transition) || !(n2 = n2[t2]); ) if (!(e3 = e3.parentNode)) throw Error(`transition ${t2} not found`);
  return n2;
}
function fi(e3) {
  var t2, n2;
  e3 instanceof Z ? (t2 = e3._id, e3 = e3._name) : (t2 = ci(), (n2 = ui).time = Un(), e3 = e3 == null ? null : e3 + ``);
  for (var r2 = this._groups, i2 = r2.length, a2 = 0; a2 < i2; ++a2) for (var o2 = r2[a2], s2 = o2.length, c2, l2 = 0; l2 < s2; ++l2) (c2 = o2[l2]) && J(c2, e3, t2, l2, o2, n2 || di(c2, t2));
  return new Z(r2, this._parents, e3, t2);
}
O.prototype.interrupt = ir, O.prototype.transition = fi;
var { abs: pi, max: mi, min: hi } = Math;
[`w`, `e`].map(gi), [`n`, `s`].map(gi), [`n`, `w`, `e`, `s`, `nw`, `ne`, `sw`, `se`].map(gi);
function gi(e3) {
  return { type: e3 };
}
function $(e3, t2, n2) {
  this.k = e3, this.x = t2, this.y = n2;
}
$.prototype = { constructor: $, scale: function(e3) {
  return e3 === 1 ? this : new $(this.k * e3, this.x, this.y);
}, translate: function(e3, t2) {
  return e3 === 0 & t2 === 0 ? this : new $(this.k, this.x + this.k * e3, this.y + this.k * t2);
}, apply: function(e3) {
  return [e3[0] * this.k + this.x, e3[1] * this.k + this.y];
}, applyX: function(e3) {
  return e3 * this.k + this.x;
}, applyY: function(e3) {
  return e3 * this.k + this.y;
}, invert: function(e3) {
  return [(e3[0] - this.x) / this.k, (e3[1] - this.y) / this.k];
}, invertX: function(e3) {
  return (e3 - this.x) / this.k;
}, invertY: function(e3) {
  return (e3 - this.y) / this.k;
}, rescaleX: function(e3) {
  return e3.copy().domain(e3.range().map(this.invertX, this).map(e3.invert, e3));
}, rescaleY: function(e3) {
  return e3.copy().domain(e3.range().map(this.invertY, this).map(e3.invert, e3));
}, toString: function() {
  return `translate(` + this.x + `,` + this.y + `) scale(` + this.k + `)`;
} };
var _i = new $(1, 0, 0);
vi.prototype = $.prototype;
function vi(e3) {
  for (; !e3.__zoom; ) if (!(e3 = e3.parentNode)) return _i;
  return e3.__zoom;
}
export {
  l as _,
  bn as a,
  L as c,
  Ut as d,
  Wt as f,
  c as g,
  a as h,
  vn as i,
  F as l,
  o as m,
  U as n,
  hn as o,
  Ht as p,
  xn as r,
  k as s,
  En as t,
  an as u,
  n as v
};
