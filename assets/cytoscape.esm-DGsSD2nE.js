function e(e2, t2) {
  (t2 == null || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
  return r2;
}
function t(e2) {
  if (Array.isArray(e2)) return e2;
}
function n(t2) {
  if (Array.isArray(t2)) return e(t2);
}
function r(e2, t2) {
  if (!(e2 instanceof t2)) throw TypeError(`Cannot call a class as a function`);
}
function i(e2, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    r2.enumerable = r2.enumerable || false, r2.configurable = true, `value` in r2 && (r2.writable = true), Object.defineProperty(e2, h(r2.key), r2);
  }
}
function a(e2, t2, n2) {
  return t2 && i(e2.prototype, t2), Object.defineProperty(e2, `prototype`, { writable: false }), e2;
}
function o(e2, t2) {
  var n2 = typeof Symbol < `u` && e2[Symbol.iterator] || e2[`@@iterator`];
  if (!n2) {
    if (Array.isArray(e2) || (n2 = _(e2)) || t2) {
      n2 && (e2 = n2);
      var r2 = 0, i2 = function() {
      };
      return { s: i2, n: function() {
        return r2 >= e2.length ? { done: true } : { done: false, value: e2[r2++] };
      }, e: function(e3) {
        throw e3;
      }, f: i2 };
    }
    throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a2, o2 = true, s2 = false;
  return { s: function() {
    n2 = n2.call(e2);
  }, n: function() {
    var e3 = n2.next();
    return o2 = e3.done, e3;
  }, e: function(e3) {
    s2 = true, a2 = e3;
  }, f: function() {
    try {
      o2 || n2.return == null || n2.return();
    } finally {
      if (s2) throw a2;
    }
  } };
}
function s(e2, t2, n2) {
  return (t2 = h(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function c(e2) {
  if (typeof Symbol < `u` && e2[Symbol.iterator] != null || e2[`@@iterator`] != null) return Array.from(e2);
}
function l(e2, t2) {
  var n2 = e2 == null ? null : typeof Symbol < `u` && e2[Symbol.iterator] || e2[`@@iterator`];
  if (n2 != null) {
    var r2, i2, a2, o2, s2 = [], c2 = true, l2 = false;
    try {
      if (a2 = (n2 = n2.call(e2)).next, t2 === 0) {
        if (Object(n2) !== n2) return;
        c2 = false;
      } else for (; !(c2 = (r2 = a2.call(n2)).done) && (s2.push(r2.value), s2.length !== t2); c2 = true) ;
    } catch (e3) {
      l2 = true, i2 = e3;
    } finally {
      try {
        if (!c2 && n2.return != null && (o2 = n2.return(), Object(o2) !== o2)) return;
      } finally {
        if (l2) throw i2;
      }
    }
    return s2;
  }
}
function u() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function d() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function f(e2, n2) {
  return t(e2) || l(e2, n2) || _(e2, n2) || u();
}
function p(e2) {
  return n(e2) || c(e2) || _(e2) || d();
}
function m(e2, t2) {
  if (typeof e2 != `object` || !e2) return e2;
  var n2 = e2[Symbol.toPrimitive];
  if (n2 !== void 0) {
    var r2 = n2.call(e2, t2);
    if (typeof r2 != `object`) return r2;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return String(e2);
}
function h(e2) {
  var t2 = m(e2, `string`);
  return typeof t2 == `symbol` ? t2 : t2 + ``;
}
function g(e2) {
  "@babel/helpers - typeof";
  return g = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && typeof Symbol == `function` && e3.constructor === Symbol && e3 !== Symbol.prototype ? `symbol` : typeof e3;
  }, g(e2);
}
function _(t2, n2) {
  if (t2) {
    if (typeof t2 == `string`) return e(t2, n2);
    var r2 = {}.toString.call(t2).slice(8, -1);
    return r2 === `Object` && t2.constructor && (r2 = t2.constructor.name), r2 === `Map` || r2 === `Set` ? Array.from(t2) : r2 === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2) ? e(t2, n2) : void 0;
  }
}
var v = typeof window > `u` ? null : window, y = v ? v.navigator : null;
v && v.document;
var b = g(``), x = g({}), S = g(function() {
}), C = typeof HTMLElement > `u` ? `undefined` : g(HTMLElement), w = function(e2) {
  return e2 && e2.instanceString && E(e2.instanceString) ? e2.instanceString() : null;
}, T = function(e2) {
  return e2 != null && g(e2) == b;
}, E = function(e2) {
  return e2 != null && g(e2) === S;
}, D = function(e2) {
  return !N(e2) && (Array.isArray ? Array.isArray(e2) : e2 != null && e2 instanceof Array);
}, O = function(e2) {
  return e2 != null && g(e2) === x && !D(e2) && e2.constructor === Object;
}, k = function(e2) {
  return e2 != null && g(e2) === x;
}, A = function(e2) {
  return e2 != null && g(e2) === g(1) && !isNaN(e2);
}, j = function(e2) {
  return A(e2) && Math.floor(e2) === e2;
}, M = function(e2) {
  if (C !== `undefined`) return e2 != null && e2 instanceof HTMLElement;
}, N = function(e2) {
  return P(e2) || F(e2);
}, P = function(e2) {
  return w(e2) === `collection` && e2._private.single;
}, F = function(e2) {
  return w(e2) === `collection` && !e2._private.single;
}, I = function(e2) {
  return w(e2) === `core`;
}, L = function(e2) {
  return w(e2) === `stylesheet`;
}, R = function(e2) {
  return w(e2) === `event`;
}, z = function(e2) {
  return e2 == null ? true : !!(e2 === `` || e2.match(/^\s+$/));
}, B = function(e2) {
  return typeof HTMLElement > `u` ? false : e2 instanceof HTMLElement;
}, V = function(e2) {
  return O(e2) && A(e2.x1) && A(e2.x2) && A(e2.y1) && A(e2.y2);
}, H = function(e2) {
  return k(e2) && E(e2.then);
}, U = function() {
  return y && y.userAgent.match(/msie|trident|edge/i);
}, W = function(e2, t2) {
  t2 || (t2 = function() {
    if (arguments.length === 1) return arguments[0];
    if (arguments.length === 0) return `undefined`;
    for (var e3 = [], t3 = 0; t3 < arguments.length; t3++) e3.push(arguments[t3]);
    return e3.join(`$`);
  });
  var n2 = function() {
    var r2 = this, i2 = arguments, a2, o2 = t2.apply(r2, i2), s2 = n2.cache;
    return (a2 = s2[o2]) || (a2 = s2[o2] = e2.apply(r2, i2)), a2;
  };
  return n2.cache = {}, n2;
}, G = W(function(e2) {
  return e2.replace(/([A-Z])/g, function(e3) {
    return `-` + e3.toLowerCase();
  });
}), K = W(function(e2) {
  return e2.replace(/(-\w)/g, function(e3) {
    return e3[1].toUpperCase();
  });
}), q = W(function(e2, t2) {
  return e2 + t2[0].toUpperCase() + t2.substring(1);
}, function(e2, t2) {
  return e2 + `$` + t2;
}), J = function(e2) {
  return z(e2) ? e2 : e2.charAt(0).toUpperCase() + e2.substring(1);
}, ee = function(e2, t2) {
  return e2.slice(-1 * t2.length) === t2;
}, Y = `(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))`, te = `rgb[a]?\\((` + Y + `[%]?)\\s*,\\s*(` + Y + `[%]?)\\s*,\\s*(` + Y + `[%]?)(?:\\s*,\\s*(` + Y + `))?\\)`, ne = `rgb[a]?\\((?:` + Y + `[%]?)\\s*,\\s*(?:` + Y + `[%]?)\\s*,\\s*(?:` + Y + `[%]?)(?:\\s*,\\s*(?:` + Y + `))?\\)`, re = `hsl[a]?\\((` + Y + `)\\s*,\\s*(` + Y + `[%])\\s*,\\s*(` + Y + `[%])(?:\\s*,\\s*(` + Y + `))?\\)`, ie = `hsl[a]?\\((?:` + Y + `)\\s*,\\s*(?:` + Y + `[%])\\s*,\\s*(?:` + Y + `[%])(?:\\s*,\\s*(?:` + Y + `))?\\)`, ae = `\\#[0-9a-fA-F]{3}`, oe = `\\#[0-9a-fA-F]{6}`, se = function(e2, t2) {
  return e2 < t2 ? -1 : e2 > t2 ? 1 : 0;
}, ce = function(e2, t2) {
  return -1 * se(e2, t2);
}, X = Object.assign == null ? function(e2) {
  for (var t2 = arguments, n2 = 1; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    if (r2 != null) for (var i2 = Object.keys(r2), a2 = 0; a2 < i2.length; a2++) {
      var o2 = i2[a2];
      e2[o2] = r2[o2];
    }
  }
  return e2;
} : Object.assign.bind(Object), le = function(e2) {
  if (!(!(e2.length === 4 || e2.length === 7) || e2[0] !== `#`)) {
    var t2 = e2.length === 4, n2, r2, i2, a2 = 16;
    return t2 ? (n2 = parseInt(e2[1] + e2[1], a2), r2 = parseInt(e2[2] + e2[2], a2), i2 = parseInt(e2[3] + e2[3], a2)) : (n2 = parseInt(e2[1] + e2[2], a2), r2 = parseInt(e2[3] + e2[4], a2), i2 = parseInt(e2[5] + e2[6], a2)), [n2, r2, i2];
  }
}, ue = function(e2) {
  var t2, n2, r2, i2, a2, o2, s2, c2;
  function l2(e3, t3, n3) {
    return n3 < 0 && (n3 += 1), n3 > 1 && --n3, n3 < 1 / 6 ? e3 + (t3 - e3) * 6 * n3 : n3 < 1 / 2 ? t3 : n3 < 2 / 3 ? e3 + (t3 - e3) * (2 / 3 - n3) * 6 : e3;
  }
  var u2 = RegExp(`^` + re + `$`).exec(e2);
  if (u2) {
    if (n2 = parseInt(u2[1]), n2 < 0 ? n2 = (360 - -1 * n2 % 360) % 360 : n2 > 360 && (n2 %= 360), n2 /= 360, r2 = parseFloat(u2[2]), r2 < 0 || r2 > 100 || (r2 /= 100, i2 = parseFloat(u2[3]), i2 < 0 || i2 > 100) || (i2 /= 100, a2 = u2[4], a2 !== void 0 && (a2 = parseFloat(a2), a2 < 0 || a2 > 1))) return;
    if (r2 === 0) o2 = s2 = c2 = Math.round(i2 * 255);
    else {
      var d2 = i2 < 0.5 ? i2 * (1 + r2) : i2 + r2 - i2 * r2, f2 = 2 * i2 - d2;
      o2 = Math.round(255 * l2(f2, d2, n2 + 1 / 3)), s2 = Math.round(255 * l2(f2, d2, n2)), c2 = Math.round(255 * l2(f2, d2, n2 - 1 / 3));
    }
    t2 = [o2, s2, c2, a2];
  }
  return t2;
}, de = function(e2) {
  var t2, n2 = RegExp(`^` + te + `$`).exec(e2);
  if (n2) {
    t2 = [];
    for (var r2 = [], i2 = 1; i2 <= 3; i2++) {
      var a2 = n2[i2];
      if (a2[a2.length - 1] === `%` && (r2[i2] = true), a2 = parseFloat(a2), r2[i2] && (a2 = a2 / 100 * 255), a2 < 0 || a2 > 255) return;
      t2.push(Math.floor(a2));
    }
    var o2 = r2[1] || r2[2] || r2[3], s2 = r2[1] && r2[2] && r2[3];
    if (o2 && !s2) return;
    var c2 = n2[4];
    if (c2 !== void 0) {
      if (c2 = parseFloat(c2), c2 < 0 || c2 > 1) return;
      t2.push(c2);
    }
  }
  return t2;
}, fe = function(e2) {
  return me[e2.toLowerCase()];
}, pe = function(e2) {
  return (D(e2) ? e2 : null) || fe(e2) || le(e2) || de(e2) || ue(e2);
}, me = { transparent: [0, 0, 0, 0], aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], grey: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] }, he = function(e2) {
  for (var t2 = e2.map, n2 = e2.keys, r2 = n2.length, i2 = 0; i2 < r2; i2++) {
    var a2 = n2[i2];
    if (O(a2)) throw Error(`Tried to set map with object key`);
    i2 < n2.length - 1 ? (t2[a2] ?? (t2[a2] = {}), t2 = t2[a2]) : t2[a2] = e2.value;
  }
}, ge = function(e2) {
  for (var t2 = e2.map, n2 = e2.keys, r2 = n2.length, i2 = 0; i2 < r2; i2++) {
    var a2 = n2[i2];
    if (O(a2)) throw Error(`Tried to get map with object key`);
    if (t2 = t2[a2], t2 == null) return t2;
  }
  return t2;
}, _e = typeof globalThis < `u` ? globalThis : typeof window < `u` ? window : typeof global < `u` ? global : typeof self < `u` ? self : {};
function ve(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, `default`) ? e2.default : e2;
}
var ye, be;
function xe() {
  if (be) return ye;
  be = 1;
  function e2(e3) {
    var t2 = typeof e3;
    return e3 != null && (t2 == `object` || t2 == `function`);
  }
  return ye = e2, ye;
}
var Se, Ce;
function we() {
  return Ce ? Se : (Ce = 1, Se = typeof _e == `object` && _e && _e.Object === Object && _e, Se);
}
var Te, Ee;
function De() {
  if (Ee) return Te;
  Ee = 1;
  var e2 = we(), t2 = typeof self == `object` && self && self.Object === Object && self;
  return Te = e2 || t2 || Function(`return this`)(), Te;
}
var Oe, ke;
function Ae() {
  if (ke) return Oe;
  ke = 1;
  var e2 = De();
  return Oe = function() {
    return e2.Date.now();
  }, Oe;
}
var je, Me;
function Ne() {
  if (Me) return je;
  Me = 1;
  var e2 = /\s/;
  function t2(t3) {
    for (var n2 = t3.length; n2-- && e2.test(t3.charAt(n2)); ) ;
    return n2;
  }
  return je = t2, je;
}
var Pe, Fe;
function Ie() {
  if (Fe) return Pe;
  Fe = 1;
  var e2 = Ne(), t2 = /^\s+/;
  function n2(n3) {
    return n3 && n3.slice(0, e2(n3) + 1).replace(t2, ``);
  }
  return Pe = n2, Pe;
}
var Le, Re;
function ze() {
  return Re ? Le : (Re = 1, Le = De().Symbol, Le);
}
var Be, Ve;
function He() {
  if (Ve) return Be;
  Ve = 1;
  var e2 = ze(), t2 = Object.prototype, n2 = t2.hasOwnProperty, r2 = t2.toString, i2 = e2 ? e2.toStringTag : void 0;
  function a2(e3) {
    var t3 = n2.call(e3, i2), a3 = e3[i2];
    try {
      e3[i2] = void 0;
      var o2 = true;
    } catch {
    }
    var s2 = r2.call(e3);
    return o2 && (t3 ? e3[i2] = a3 : delete e3[i2]), s2;
  }
  return Be = a2, Be;
}
var Ue, We;
function Ge() {
  if (We) return Ue;
  We = 1;
  var e2 = Object.prototype.toString;
  function t2(t3) {
    return e2.call(t3);
  }
  return Ue = t2, Ue;
}
var Ke, qe;
function Je() {
  if (qe) return Ke;
  qe = 1;
  var e2 = ze(), t2 = He(), n2 = Ge(), r2 = `[object Null]`, i2 = `[object Undefined]`, a2 = e2 ? e2.toStringTag : void 0;
  function o2(e3) {
    return e3 == null ? e3 === void 0 ? i2 : r2 : a2 && a2 in Object(e3) ? t2(e3) : n2(e3);
  }
  return Ke = o2, Ke;
}
var Ye, Xe;
function Ze() {
  if (Xe) return Ye;
  Xe = 1;
  function e2(e3) {
    return typeof e3 == `object` && !!e3;
  }
  return Ye = e2, Ye;
}
var Qe, $e;
function et() {
  if ($e) return Qe;
  $e = 1;
  var e2 = Je(), t2 = Ze(), n2 = `[object Symbol]`;
  function r2(r3) {
    return typeof r3 == `symbol` || t2(r3) && e2(r3) == n2;
  }
  return Qe = r2, Qe;
}
var tt, nt;
function rt() {
  if (nt) return tt;
  nt = 1;
  var e2 = Ie(), t2 = xe(), n2 = et(), r2 = NaN, i2 = /^[-+]0x[0-9a-f]+$/i, a2 = /^0b[01]+$/i, o2 = /^0o[0-7]+$/i, s2 = parseInt;
  function c2(c3) {
    if (typeof c3 == `number`) return c3;
    if (n2(c3)) return r2;
    if (t2(c3)) {
      var l2 = typeof c3.valueOf == `function` ? c3.valueOf() : c3;
      c3 = t2(l2) ? l2 + `` : l2;
    }
    if (typeof c3 != `string`) return c3 === 0 ? c3 : +c3;
    c3 = e2(c3);
    var u2 = a2.test(c3);
    return u2 || o2.test(c3) ? s2(c3.slice(2), u2 ? 2 : 8) : i2.test(c3) ? r2 : +c3;
  }
  return tt = c2, tt;
}
var it, at;
function ot() {
  if (at) return it;
  at = 1;
  var e2 = xe(), t2 = Ae(), n2 = rt(), r2 = `Expected a function`, i2 = Math.max, a2 = Math.min;
  function o2(o3, s2, c2) {
    var l2, u2, d2, f2, p2, m2, h2 = 0, g2 = false, _2 = false, v2 = true;
    if (typeof o3 != `function`) throw TypeError(r2);
    s2 = n2(s2) || 0, e2(c2) && (g2 = !!c2.leading, _2 = `maxWait` in c2, d2 = _2 ? i2(n2(c2.maxWait) || 0, s2) : d2, v2 = `trailing` in c2 ? !!c2.trailing : v2);
    function y2(e3) {
      var t3 = l2, n3 = u2;
      return l2 = u2 = void 0, h2 = e3, f2 = o3.apply(n3, t3), f2;
    }
    function b2(e3) {
      return h2 = e3, p2 = setTimeout(C2, s2), g2 ? y2(e3) : f2;
    }
    function x2(e3) {
      var t3 = e3 - m2, n3 = e3 - h2, r3 = s2 - t3;
      return _2 ? a2(r3, d2 - n3) : r3;
    }
    function S2(e3) {
      var t3 = e3 - m2, n3 = e3 - h2;
      return m2 === void 0 || t3 >= s2 || t3 < 0 || _2 && n3 >= d2;
    }
    function C2() {
      var e3 = t2();
      if (S2(e3)) return w2(e3);
      p2 = setTimeout(C2, x2(e3));
    }
    function w2(e3) {
      return p2 = void 0, v2 && l2 ? y2(e3) : (l2 = u2 = void 0, f2);
    }
    function T2() {
      p2 !== void 0 && clearTimeout(p2), h2 = 0, l2 = m2 = u2 = p2 = void 0;
    }
    function E2() {
      return p2 === void 0 ? f2 : w2(t2());
    }
    function D2() {
      var e3 = t2(), n3 = S2(e3);
      if (l2 = arguments, u2 = this, m2 = e3, n3) {
        if (p2 === void 0) return b2(m2);
        if (_2) return clearTimeout(p2), p2 = setTimeout(C2, s2), y2(m2);
      }
      return p2 === void 0 && (p2 = setTimeout(C2, s2)), f2;
    }
    return D2.cancel = T2, D2.flush = E2, D2;
  }
  return it = o2, it;
}
var st = ve(ot()), ct = v ? v.performance : null, lt = ct && ct.now ? function() {
  return ct.now();
} : function() {
  return Date.now();
}, ut = (function() {
  if (v) {
    if (v.requestAnimationFrame) return function(e2) {
      v.requestAnimationFrame(e2);
    };
    if (v.mozRequestAnimationFrame) return function(e2) {
      v.mozRequestAnimationFrame(e2);
    };
    if (v.webkitRequestAnimationFrame) return function(e2) {
      v.webkitRequestAnimationFrame(e2);
    };
    if (v.msRequestAnimationFrame) return function(e2) {
      v.msRequestAnimationFrame(e2);
    };
  }
  return function(e2) {
    e2 && setTimeout(function() {
      e2(lt());
    }, 1e3 / 60);
  };
})(), dt = function(e2) {
  return ut(e2);
}, ft = lt, pt = 9261, mt = 65599, ht = 5381, gt = function(e2) {
  for (var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pt, n2; n2 = e2.next(), !n2.done; ) t2 = t2 * mt + n2.value | 0;
  return t2;
}, _t = function(e2) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pt) * mt + e2 | 0;
}, vt = function(e2) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ht;
  return (t2 << 5) + t2 + e2 | 0;
}, yt = function(e2, t2) {
  return e2 * 2097152 + t2;
}, bt = function(e2) {
  return e2[0] * 2097152 + e2[1];
}, xt = function(e2, t2) {
  return [_t(e2[0], t2[0]), vt(e2[1], t2[1])];
}, St = function(e2, t2) {
  var n2 = { value: 0, done: false }, r2 = 0, i2 = e2.length;
  return gt({ next: function() {
    return r2 < i2 ? n2.value = e2[r2++] : n2.done = true, n2;
  } }, t2);
}, Ct = function(e2, t2) {
  var n2 = { value: 0, done: false }, r2 = 0, i2 = e2.length;
  return gt({ next: function() {
    return r2 < i2 ? n2.value = e2.charCodeAt(r2++) : n2.done = true, n2;
  } }, t2);
}, wt = function() {
  return Tt(arguments);
}, Tt = function(e2) {
  for (var t2, n2 = 0; n2 < e2.length; n2++) {
    var r2 = e2[n2];
    t2 = n2 === 0 ? Ct(r2) : Ct(r2, t2);
  }
  return t2;
};
function Et(e2, t2, n2, r2, i2) {
  var a2 = i2 * Math.PI / 180;
  return { x: Math.cos(a2) * (e2 - n2) - Math.sin(a2) * (t2 - r2) + n2, y: Math.sin(a2) * (e2 - n2) + Math.cos(a2) * (t2 - r2) + r2 };
}
var Dt = function(e2, t2, n2, r2, i2, a2) {
  return { x: (e2 - n2) * i2 + n2, y: (t2 - r2) * a2 + r2 };
};
function Ot(e2, t2, n2) {
  if (n2 === 0) return e2;
  var r2 = (t2.x1 + t2.x2) / 2, i2 = (t2.y1 + t2.y2) / 2, a2 = t2.w / t2.h, o2 = 1 / a2, s2 = Et(e2.x, e2.y, r2, i2, n2), c2 = Dt(s2.x, s2.y, r2, i2, a2, o2);
  return { x: c2.x, y: c2.y };
}
var kt = true, At = console.warn != null, jt = console.trace != null, Mt = 2 ** 53 - 1 || 9007199254740991, Nt = function() {
  return true;
}, Pt = function() {
  return false;
}, Ft = function() {
  return 0;
}, It = function() {
}, Lt = function(e2) {
  throw Error(e2);
}, Rt = function(e2) {
  if (e2 !== void 0) kt = !!e2;
  else return kt;
}, zt = function(e2) {
  Rt() && (At ? console.warn(e2) : (console.log(e2), jt && console.trace()));
}, Bt = function(e2) {
  return X({}, e2);
}, Vt = function(e2) {
  return e2 == null ? e2 : D(e2) ? e2.slice() : O(e2) ? Bt(e2) : e2;
}, Ht = function(e2) {
  return e2.slice();
}, Ut = function(e2, t2) {
  for (t2 = e2 = ``; e2++ < 36; t2 += e2 * 51 & 52 ? (e2 ^ 15 ? 8 ^ Math.random() * (e2 ^ 20 ? 16 : 4) : 4).toString(16) : `-`) ;
  return t2;
}, Wt = {}, Gt = function() {
  return Wt;
}, Kt = function(e2) {
  var t2 = Object.keys(e2);
  return function(n2) {
    for (var r2 = {}, i2 = 0; i2 < t2.length; i2++) {
      var a2 = t2[i2], o2 = n2 == null ? void 0 : n2[a2];
      r2[a2] = o2 === void 0 ? e2[a2] : o2;
    }
    return r2;
  };
}, qt = function(e2, t2, n2) {
  for (var r2 = e2.length - 1; r2 >= 0; r2--) e2[r2] === t2 && e2.splice(r2, 1);
}, Jt = function(e2) {
  e2.splice(0, e2.length);
}, Yt = function(e2, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    e2.push(r2);
  }
}, Xt = function(e2, t2, n2) {
  return n2 && (t2 = q(n2, t2)), e2[t2];
}, Zt = function(e2, t2, n2, r2) {
  n2 && (t2 = q(n2, t2)), e2[t2] = r2;
}, Qt = (function() {
  function e2() {
    r(this, e2), this._obj = {};
  }
  return a(e2, [{ key: `set`, value: function(e3, t2) {
    return this._obj[e3] = t2, this;
  } }, { key: `delete`, value: function(e3) {
    return this._obj[e3] = void 0, this;
  } }, { key: `clear`, value: function() {
    this._obj = {};
  } }, { key: `has`, value: function(e3) {
    return this._obj[e3] !== void 0;
  } }, { key: `get`, value: function(e3) {
    return this._obj[e3];
  } }]);
})(), $t = typeof Map < `u` ? Map : Qt, en = `undefined`, tn = (function() {
  function e2(t2) {
    if (r(this, e2), this._obj = /* @__PURE__ */ Object.create(null), this.size = 0, t2 != null) for (var n2 = t2.instanceString != null && t2.instanceString() === this.instanceString() ? t2.toArray() : t2, i2 = 0; i2 < n2.length; i2++) this.add(n2[i2]);
  }
  return a(e2, [{ key: `instanceString`, value: function() {
    return `set`;
  } }, { key: `add`, value: function(e3) {
    var t2 = this._obj;
    t2[e3] !== 1 && (t2[e3] = 1, this.size++);
  } }, { key: `delete`, value: function(e3) {
    var t2 = this._obj;
    t2[e3] === 1 && (t2[e3] = 0, this.size--);
  } }, { key: `clear`, value: function() {
    this._obj = /* @__PURE__ */ Object.create(null);
  } }, { key: `has`, value: function(e3) {
    return this._obj[e3] === 1;
  } }, { key: `toArray`, value: function() {
    var e3 = this;
    return Object.keys(this._obj).filter(function(t2) {
      return e3.has(t2);
    });
  } }, { key: `forEach`, value: function(e3, t2) {
    return this.toArray().forEach(e3, t2);
  } }]);
})(), nn = (typeof Set > `u` ? `undefined` : g(Set)) === en ? tn : Set, rn = function(e2, t2) {
  var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (e2 === void 0 || t2 === void 0 || !I(e2)) {
    Lt(`An element must have a core reference and parameters set`);
    return;
  }
  var r2 = t2.group;
  if (r2 ?? (r2 = t2.data && t2.data.source != null && t2.data.target != null ? `edges` : `nodes`), r2 !== `nodes` && r2 !== `edges`) {
    Lt("An element must be of type `nodes` or `edges`; you specified `" + r2 + "`");
    return;
  }
  this.length = 1, this[0] = this;
  var i2 = this._private = { cy: e2, single: true, data: t2.data || {}, position: t2.position || { x: 0, y: 0 }, autoWidth: void 0, autoHeight: void 0, autoPadding: void 0, compoundBoundsClean: false, listeners: [], group: r2, style: {}, rstyle: {}, styleCxts: [], styleKeys: {}, removed: true, selected: !!t2.selected, selectable: t2.selectable === void 0 ? true : !!t2.selectable, locked: !!t2.locked, grabbed: false, grabbable: t2.grabbable === void 0 ? true : !!t2.grabbable, pannable: t2.pannable === void 0 ? r2 === `edges` : !!t2.pannable, active: false, classes: new nn(), animation: { current: [], queue: [] }, rscratch: {}, scratch: t2.scratch || {}, edges: [], children: [], parent: t2.parent && t2.parent.isNode() ? t2.parent : null, traversalCache: {}, backgrounding: false, bbCache: null, bbCacheShift: { x: 0, y: 0 }, bodyBounds: null, overlayBounds: null, labelBounds: { all: null, source: null, target: null, main: null }, arrowBounds: { source: null, target: null, "mid-source": null, "mid-target": null } };
  if (i2.position.x ?? (i2.position.x = 0), i2.position.y ?? (i2.position.y = 0), t2.renderedPosition) {
    var a2 = t2.renderedPosition, o2 = e2.pan(), s2 = e2.zoom();
    i2.position = { x: (a2.x - o2.x) / s2, y: (a2.y - o2.y) / s2 };
  }
  var c2 = [];
  D(t2.classes) ? c2 = t2.classes : T(t2.classes) && (c2 = t2.classes.split(/\s+/));
  for (var l2 = 0, u2 = c2.length; l2 < u2; l2++) {
    var d2 = c2[l2];
    !d2 || d2 === `` || i2.classes.add(d2);
  }
  this.createEmitter(), (n2 === void 0 || n2) && this.restore();
  var f2 = t2.style || t2.css;
  f2 && (zt("Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead."), this.style(f2));
}, an = function(e2) {
  return e2 = { bfs: e2.bfs || !e2.dfs, dfs: e2.dfs || !e2.bfs }, function(t2, n2, r2) {
    var i2;
    O(t2) && !N(t2) && (i2 = t2, t2 = i2.roots || i2.root, n2 = i2.visit, r2 = i2.directed), r2 = arguments.length === 2 && !E(n2) ? n2 : r2, n2 = E(n2) ? n2 : function() {
    };
    for (var a2 = this._private.cy, o2 = t2 = T(t2) ? this.filter(t2) : t2, s2 = [], c2 = [], l2 = {}, u2 = {}, d2 = {}, f2 = 0, p2, m2 = this.byGroup(), h2 = m2.nodes, g2 = m2.edges, _2 = 0; _2 < o2.length; _2++) {
      var v2 = o2[_2], y2 = v2.id();
      v2.isNode() && (s2.unshift(v2), e2.bfs && (d2[y2] = true, c2.push(v2)), u2[y2] = 0);
    }
    for (var b2 = function() {
      var t3 = e2.bfs ? s2.shift() : s2.pop(), i3 = t3.id();
      if (e2.dfs) {
        if (d2[i3]) return 0;
        d2[i3] = true, c2.push(t3);
      }
      var a3 = u2[i3], o3 = l2[i3], m3 = o3 == null ? null : o3.source(), _3 = o3 == null ? null : o3.target(), v3 = o3 == null ? void 0 : t3.same(m3) ? _3[0] : m3[0], y3 = n2(t3, o3, v3, f2++, a3);
      if (y3 === true) return p2 = t3, 1;
      if (y3 === false) return 1;
      for (var b3 = t3.connectedEdges().filter(function(e3) {
        return (!r2 || e3.source().same(t3)) && g2.has(e3);
      }), x3 = 0; x3 < b3.length; x3++) {
        var S3 = b3[x3], C3 = S3.connectedNodes().filter(function(e3) {
          return !e3.same(t3) && h2.has(e3);
        }), w3 = C3.id();
        C3.length !== 0 && !d2[w3] && (C3 = C3[0], s2.push(C3), e2.bfs && (d2[w3] = true, c2.push(C3)), l2[w3] = S3, u2[w3] = u2[i3] + 1);
      }
    }, x2; s2.length !== 0 && (x2 = b2(), !(x2 !== 0 && x2 === 1)); ) ;
    for (var S2 = a2.collection(), C2 = 0; C2 < c2.length; C2++) {
      var w2 = c2[C2], D2 = l2[w2.id()];
      D2 != null && S2.push(D2), S2.push(w2);
    }
    return { path: a2.collection(S2), found: a2.collection(p2) };
  };
}, on = { breadthFirstSearch: an({ bfs: true }), depthFirstSearch: an({ dfs: true }) };
on.bfs = on.breadthFirstSearch, on.dfs = on.depthFirstSearch;
var sn = { exports: {} }, cn = sn.exports, ln;
function un() {
  return ln ? sn.exports : (ln = 1, (function(e2, t2) {
    (function() {
      var t3, n2, r2 = Math.floor, i2, a2, o2, s2, c2, l2, u2 = Math.min, d2, f2, p2, m2, h2;
      n2 = function(e3, t4) {
        return e3 < t4 ? -1 : e3 > t4 ? 1 : 0;
      }, l2 = function(e3, t4, i3, a3, o3) {
        var s3;
        if (i3 ?? (i3 = 0), o3 ?? (o3 = n2), i3 < 0) throw Error(`lo must be non-negative`);
        for (a3 ?? (a3 = e3.length); i3 < a3; ) s3 = r2((i3 + a3) / 2), o3(t4, e3[s3]) < 0 ? a3 = s3 : i3 = s3 + 1;
        return [].splice.apply(e3, [i3, i3 - i3].concat(t4)), t4;
      }, o2 = function(e3, t4, r3) {
        return r3 ?? (r3 = n2), e3.push(t4), m2(e3, 0, e3.length - 1, r3);
      }, a2 = function(e3, t4) {
        var r3, i3;
        return t4 ?? (t4 = n2), r3 = e3.pop(), e3.length ? (i3 = e3[0], e3[0] = r3, h2(e3, 0, t4)) : i3 = r3, i3;
      }, c2 = function(e3, t4, r3) {
        var i3;
        return r3 ?? (r3 = n2), i3 = e3[0], e3[0] = t4, h2(e3, 0, r3), i3;
      }, s2 = function(e3, t4, r3) {
        var i3;
        return r3 ?? (r3 = n2), e3.length && r3(e3[0], t4) < 0 && (i3 = [e3[0], t4], t4 = i3[0], e3[0] = i3[1], h2(e3, 0, r3)), t4;
      }, i2 = function(e3, t4) {
        var i3, a3, o3, s3, c3, l3;
        for (t4 ?? (t4 = n2), s3 = (function() {
          l3 = [];
          for (var t5 = 0, n3 = r2(e3.length / 2); 0 <= n3 ? t5 < n3 : t5 > n3; 0 <= n3 ? t5++ : t5--) l3.push(t5);
          return l3;
        }).apply(this).reverse(), c3 = [], a3 = 0, o3 = s3.length; a3 < o3; a3++) i3 = s3[a3], c3.push(h2(e3, i3, t4));
        return c3;
      }, p2 = function(e3, t4, r3) {
        var i3;
        if (r3 ?? (r3 = n2), i3 = e3.indexOf(t4), i3 !== -1) return m2(e3, 0, i3, r3), h2(e3, i3, r3);
      }, d2 = function(e3, t4, r3) {
        var a3, o3, c3, l3, u3;
        if (r3 ?? (r3 = n2), o3 = e3.slice(0, t4), !o3.length) return o3;
        for (i2(o3, r3), u3 = e3.slice(t4), c3 = 0, l3 = u3.length; c3 < l3; c3++) a3 = u3[c3], s2(o3, a3, r3);
        return o3.sort(r3).reverse();
      }, f2 = function(e3, t4, r3) {
        var o3, s3, c3, d3, f3, p3, m3, h3, g2;
        if (r3 ?? (r3 = n2), t4 * 10 <= e3.length) {
          if (c3 = e3.slice(0, t4).sort(r3), !c3.length) return c3;
          for (s3 = c3[c3.length - 1], m3 = e3.slice(t4), d3 = 0, p3 = m3.length; d3 < p3; d3++) o3 = m3[d3], r3(o3, s3) < 0 && (l2(c3, o3, 0, null, r3), c3.pop(), s3 = c3[c3.length - 1]);
          return c3;
        }
        for (i2(e3, r3), g2 = [], f3 = 0, h3 = u2(t4, e3.length); 0 <= h3 ? f3 < h3 : f3 > h3; 0 <= h3 ? ++f3 : --f3) g2.push(a2(e3, r3));
        return g2;
      }, m2 = function(e3, t4, r3, i3) {
        var a3, o3, s3;
        for (i3 ?? (i3 = n2), a3 = e3[r3]; r3 > t4; ) {
          if (s3 = r3 - 1 >> 1, o3 = e3[s3], i3(a3, o3) < 0) {
            e3[r3] = o3, r3 = s3;
            continue;
          }
          break;
        }
        return e3[r3] = a3;
      }, h2 = function(e3, t4, r3) {
        var i3, a3, o3, s3, c3;
        for (r3 ?? (r3 = n2), a3 = e3.length, c3 = t4, o3 = e3[t4], i3 = 2 * t4 + 1; i3 < a3; ) s3 = i3 + 1, s3 < a3 && !(r3(e3[i3], e3[s3]) < 0) && (i3 = s3), e3[t4] = e3[i3], t4 = i3, i3 = 2 * t4 + 1;
        return e3[t4] = o3, m2(e3, c3, t4, r3);
      }, t3 = (function() {
        e3.push = o2, e3.pop = a2, e3.replace = c2, e3.pushpop = s2, e3.heapify = i2, e3.updateItem = p2, e3.nlargest = d2, e3.nsmallest = f2;
        function e3(e4) {
          this.cmp = e4 ?? n2, this.nodes = [];
        }
        return e3.prototype.push = function(e4) {
          return o2(this.nodes, e4, this.cmp);
        }, e3.prototype.pop = function() {
          return a2(this.nodes, this.cmp);
        }, e3.prototype.peek = function() {
          return this.nodes[0];
        }, e3.prototype.contains = function(e4) {
          return this.nodes.indexOf(e4) !== -1;
        }, e3.prototype.replace = function(e4) {
          return c2(this.nodes, e4, this.cmp);
        }, e3.prototype.pushpop = function(e4) {
          return s2(this.nodes, e4, this.cmp);
        }, e3.prototype.heapify = function() {
          return i2(this.nodes, this.cmp);
        }, e3.prototype.updateItem = function(e4) {
          return p2(this.nodes, e4, this.cmp);
        }, e3.prototype.clear = function() {
          return this.nodes = [];
        }, e3.prototype.empty = function() {
          return this.nodes.length === 0;
        }, e3.prototype.size = function() {
          return this.nodes.length;
        }, e3.prototype.clone = function() {
          var t4 = new e3();
          return t4.nodes = this.nodes.slice(0), t4;
        }, e3.prototype.toArray = function() {
          return this.nodes.slice(0);
        }, e3.prototype.insert = e3.prototype.push, e3.prototype.top = e3.prototype.peek, e3.prototype.front = e3.prototype.peek, e3.prototype.has = e3.prototype.contains, e3.prototype.copy = e3.prototype.clone, e3;
      })(), (function(t4, n3) {
        return e2.exports = n3();
      })(this, function() {
        return t3;
      });
    }).call(cn);
  })(sn), sn.exports);
}
var dn, fn;
function pn() {
  return fn ? dn : (fn = 1, dn = un(), dn);
}
var mn = ve(pn()), hn = Kt({ root: null, weight: function(e2) {
  return 1;
}, directed: false }), gn = { dijkstra: function(e2) {
  if (!O(e2)) {
    var t2 = arguments;
    e2 = { root: t2[0], weight: t2[1], directed: t2[2] };
  }
  var n2 = hn(e2), r2 = n2.root, i2 = n2.weight, a2 = n2.directed, o2 = this, s2 = i2, c2 = T(r2) ? this.filter(r2)[0] : r2[0], l2 = {}, u2 = {}, d2 = {}, f2 = this.byGroup(), p2 = f2.nodes, m2 = f2.edges;
  m2.unmergeBy(function(e3) {
    return e3.isLoop();
  });
  for (var h2 = function(e3) {
    return l2[e3.id()];
  }, g2 = function(e3, t3) {
    l2[e3.id()] = t3, _2.updateItem(e3);
  }, _2 = new mn(function(e3, t3) {
    return h2(e3) - h2(t3);
  }), v2 = 0; v2 < p2.length; v2++) {
    var y2 = p2[v2];
    l2[y2.id()] = y2.same(c2) ? 0 : 1 / 0, _2.push(y2);
  }
  for (var b2 = function(e3, t3) {
    for (var n3 = (a2 ? e3.edgesTo(t3) : e3.edgesWith(t3)).intersect(m2), r3 = 1 / 0, i3, o3 = 0; o3 < n3.length; o3++) {
      var c3 = n3[o3], l3 = s2(c3);
      (l3 < r3 || !i3) && (r3 = l3, i3 = c3);
    }
    return { edge: i3, dist: r3 };
  }; _2.size() > 0; ) {
    var x2 = _2.pop(), S2 = h2(x2), C2 = x2.id();
    if (d2[C2] = S2, S2 !== 1 / 0) for (var w2 = x2.neighborhood().intersect(p2), E2 = 0; E2 < w2.length; E2++) {
      var D2 = w2[E2], k2 = D2.id(), A2 = b2(x2, D2), j2 = S2 + A2.dist;
      j2 < h2(D2) && (g2(D2, j2), u2[k2] = { node: x2, edge: A2.edge });
    }
  }
  return { distanceTo: function(e3) {
    return d2[(T(e3) ? p2.filter(e3)[0] : e3[0]).id()];
  }, pathTo: function(e3) {
    var t3 = T(e3) ? p2.filter(e3)[0] : e3[0], n3 = [], r3 = t3, i3 = r3.id();
    if (t3.length > 0) for (n3.unshift(t3); u2[i3]; ) {
      var a3 = u2[i3];
      n3.unshift(a3.edge), n3.unshift(a3.node), r3 = a3.node, i3 = r3.id();
    }
    return o2.spawn(n3);
  } };
} }, _n = { kruskal: function(e2) {
  e2 || (e2 = function(e3) {
    return 1;
  });
  for (var t2 = this.byGroup(), n2 = t2.nodes, r2 = t2.edges, i2 = n2.length, a2 = Array(i2), o2 = n2, s2 = function(e3) {
    for (var t3 = 0; t3 < a2.length; t3++) if (a2[t3].has(e3)) return t3;
  }, c2 = 0; c2 < i2; c2++) a2[c2] = this.spawn(n2[c2]);
  for (var l2 = r2.sort(function(t3, n3) {
    return e2(t3) - e2(n3);
  }), u2 = 0; u2 < l2.length; u2++) {
    var d2 = l2[u2], f2 = d2.source()[0], p2 = d2.target()[0], m2 = s2(f2), h2 = s2(p2), g2 = a2[m2], _2 = a2[h2];
    m2 !== h2 && (o2.merge(d2), g2.merge(_2), a2.splice(h2, 1));
  }
  return o2;
} }, vn = Kt({ root: null, goal: null, weight: function(e2) {
  return 1;
}, heuristic: function(e2) {
  return 0;
}, directed: false }), yn = { aStar: function(e2) {
  var t2 = this.cy(), n2 = vn(e2), r2 = n2.root, i2 = n2.goal, a2 = n2.heuristic, o2 = n2.directed, s2 = n2.weight;
  r2 = t2.collection(r2)[0], i2 = t2.collection(i2)[0];
  var c2 = r2.id(), l2 = i2.id(), u2 = {}, d2 = {}, f2 = {}, p2 = new mn(function(e3, t3) {
    return d2[e3.id()] - d2[t3.id()];
  }), m2 = new nn(), h2 = {}, g2 = {}, _2 = function(e3, t3) {
    p2.push(e3), m2.add(t3);
  }, v2, y2, b2 = function() {
    v2 = p2.pop(), y2 = v2.id(), m2.delete(y2);
  }, x2 = function(e3) {
    return m2.has(e3);
  };
  _2(r2, c2), u2[c2] = 0, d2[c2] = a2(r2);
  for (var S2 = 0; p2.size() > 0; ) {
    if (b2(), S2++, y2 === l2) {
      for (var C2 = [], w2 = i2, T2 = l2, E2 = g2[T2]; C2.unshift(w2), E2 != null && C2.unshift(E2), w2 = h2[T2], w2 != null; ) T2 = w2.id(), E2 = g2[T2];
      return { found: true, distance: u2[y2], path: this.spawn(C2), steps: S2 };
    }
    f2[y2] = true;
    for (var D2 = v2._private.edges, O2 = 0; O2 < D2.length; O2++) {
      var k2 = D2[O2];
      if (this.hasElementWithId(k2.id()) && !(o2 && k2.data(`source`) !== y2)) {
        var A2 = k2.source(), j2 = k2.target(), M2 = A2.id() === y2 ? j2 : A2, N2 = M2.id();
        if (this.hasElementWithId(N2) && !f2[N2]) {
          var P2 = u2[y2] + s2(k2);
          if (!x2(N2)) {
            u2[N2] = P2, d2[N2] = P2 + a2(M2), _2(M2, N2), h2[N2] = v2, g2[N2] = k2;
            continue;
          }
          P2 < u2[N2] && (u2[N2] = P2, d2[N2] = P2 + a2(M2), h2[N2] = v2, g2[N2] = k2);
        }
      }
    }
  }
  return { found: false, distance: void 0, path: void 0, steps: S2 };
} }, bn = Kt({ weight: function(e2) {
  return 1;
}, directed: false }), xn = { floydWarshall: function(e2) {
  for (var t2 = this.cy(), n2 = bn(e2), r2 = n2.weight, i2 = n2.directed, a2 = r2, o2 = this.byGroup(), s2 = o2.nodes, c2 = o2.edges, l2 = s2.length, u2 = l2 * l2, d2 = function(e3) {
    return s2.indexOf(e3);
  }, f2 = function(e3) {
    return s2[e3];
  }, p2 = Array(u2), m2 = 0; m2 < u2; m2++) {
    var h2 = m2 % l2;
    (m2 - h2) / l2 === h2 ? p2[m2] = 0 : p2[m2] = 1 / 0;
  }
  for (var g2 = Array(u2), _2 = Array(u2), v2 = 0; v2 < c2.length; v2++) {
    var y2 = c2[v2], b2 = y2.source()[0], x2 = y2.target()[0];
    if (b2 !== x2) {
      var S2 = d2(b2), C2 = d2(x2), w2 = S2 * l2 + C2, E2 = a2(y2);
      if (p2[w2] > E2 && (p2[w2] = E2, g2[w2] = C2, _2[w2] = y2), !i2) {
        var D2 = C2 * l2 + S2;
        !i2 && p2[D2] > E2 && (p2[D2] = E2, g2[D2] = S2, _2[D2] = y2);
      }
    }
  }
  for (var O2 = 0; O2 < l2; O2++) for (var k2 = 0; k2 < l2; k2++) for (var A2 = k2 * l2 + O2, j2 = 0; j2 < l2; j2++) {
    var M2 = k2 * l2 + j2, N2 = O2 * l2 + j2;
    p2[A2] + p2[N2] < p2[M2] && (p2[M2] = p2[A2] + p2[N2], g2[M2] = g2[A2]);
  }
  var P2 = function(e3) {
    return (T(e3) ? t2.filter(e3) : e3)[0];
  }, F2 = function(e3) {
    return d2(P2(e3));
  };
  return { distance: function(e3, t3) {
    var n3 = F2(e3), r3 = F2(t3);
    return p2[n3 * l2 + r3];
  }, path: function(e3, n3) {
    var r3 = F2(e3), i3 = F2(n3), a3 = f2(r3);
    if (r3 === i3) return a3.collection();
    if (g2[r3 * l2 + i3] == null) return t2.collection();
    var o3 = t2.collection(), s3 = r3, c3;
    for (o3.merge(a3); r3 !== i3; ) s3 = r3, r3 = g2[r3 * l2 + i3], c3 = _2[s3 * l2 + r3], o3.merge(c3), o3.merge(f2(r3));
    return o3;
  } };
} }, Sn = Kt({ weight: function(e2) {
  return 1;
}, directed: false, root: null }), Cn = { bellmanFord: function(e2) {
  var t2 = this, n2 = Sn(e2), r2 = n2.weight, i2 = n2.directed, a2 = n2.root, o2 = r2, s2 = this, c2 = this.cy(), l2 = this.byGroup(), u2 = l2.edges, d2 = l2.nodes, f2 = d2.length, p2 = new $t(), m2 = false, h2 = [];
  a2 = c2.collection(a2)[0], u2.unmergeBy(function(e3) {
    return e3.isLoop();
  });
  for (var g2 = u2.length, _2 = function(e3) {
    var t3 = p2.get(e3.id());
    return t3 || (t3 = {}, p2.set(e3.id(), t3)), t3;
  }, v2 = function(e3) {
    return (T(e3) ? c2.$(e3) : e3)[0];
  }, y2 = function(e3) {
    return _2(v2(e3)).dist;
  }, b2 = function(e3) {
    for (var n3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : a2, r3 = v2(e3), i3 = [], o3 = r3; ; ) {
      if (o3 == null) return t2.spawn();
      var c3 = _2(o3), l3 = c3.edge, u3 = c3.pred;
      if (i3.unshift(o3[0]), o3.same(n3) && i3.length > 0) break;
      l3 != null && i3.unshift(l3), o3 = u3;
    }
    return s2.spawn(i3);
  }, x2 = 0; x2 < f2; x2++) {
    var S2 = d2[x2], C2 = _2(S2);
    S2.same(a2) ? C2.dist = 0 : C2.dist = 1 / 0, C2.pred = null, C2.edge = null;
  }
  for (var w2 = false, E2 = function(e3, t3, n3, r3, i3, a3) {
    var o3 = r3.dist + a3;
    o3 < i3.dist && !n3.same(r3.edge) && (i3.dist = o3, i3.pred = e3, i3.edge = n3, w2 = true);
  }, D2 = 1; D2 < f2; D2++) {
    w2 = false;
    for (var O2 = 0; O2 < g2; O2++) {
      var k2 = u2[O2], A2 = k2.source(), j2 = k2.target(), M2 = o2(k2), N2 = _2(A2), P2 = _2(j2);
      E2(A2, j2, k2, N2, P2, M2), i2 || E2(j2, A2, k2, P2, N2, M2);
    }
    if (!w2) break;
  }
  if (w2) for (var F2 = [], I2 = 0; I2 < g2; I2++) {
    var L2 = u2[I2], R2 = L2.source(), z2 = L2.target(), B2 = o2(L2), V2 = _2(R2).dist, H2 = _2(z2).dist;
    if (V2 + B2 < H2 || !i2 && H2 + B2 < V2) if (m2 || (m2 = (zt(`Graph contains a negative weight cycle for Bellman-Ford`), true)), e2.findNegativeWeightCycles !== false) {
      var U2 = [];
      V2 + B2 < H2 && U2.push(R2), !i2 && H2 + B2 < V2 && U2.push(z2);
      for (var W2 = U2.length, G2 = 0; G2 < W2; G2++) {
        var K2 = U2[G2], q2 = [K2];
        q2.push(_2(K2).edge);
        for (var J2 = _2(K2).pred; q2.indexOf(J2) === -1; ) q2.push(J2), q2.push(_2(J2).edge), J2 = _2(J2).pred;
        q2 = q2.slice(q2.indexOf(J2));
        for (var ee2 = q2[0].id(), Y2 = 0, te2 = 2; te2 < q2.length; te2 += 2) q2[te2].id() < ee2 && (ee2 = q2[te2].id(), Y2 = te2);
        q2 = q2.slice(Y2).concat(q2.slice(0, Y2)), q2.push(q2[0]);
        var ne2 = q2.map(function(e3) {
          return e3.id();
        }).join(`,`);
        F2.indexOf(ne2) === -1 && (h2.push(s2.spawn(q2)), F2.push(ne2));
      }
    } else break;
  }
  return { distanceTo: y2, pathTo: b2, hasNegativeWeightCycle: m2, negativeWeightCycles: h2 };
} }, wn = Math.sqrt(2), Tn = function(e2, t2, n2) {
  n2.length === 0 && Lt(`Karger-Stein must be run on a connected (sub)graph`);
  for (var r2 = n2[e2], i2 = r2[1], a2 = r2[2], o2 = t2[i2], s2 = t2[a2], c2 = n2, l2 = c2.length - 1; l2 >= 0; l2--) {
    var u2 = c2[l2], d2 = u2[1], f2 = u2[2];
    (t2[d2] === o2 && t2[f2] === s2 || t2[d2] === s2 && t2[f2] === o2) && c2.splice(l2, 1);
  }
  for (var p2 = 0; p2 < c2.length; p2++) {
    var m2 = c2[p2];
    m2[1] === s2 ? (c2[p2] = m2.slice(), c2[p2][1] = o2) : m2[2] === s2 && (c2[p2] = m2.slice(), c2[p2][2] = o2);
  }
  for (var h2 = 0; h2 < t2.length; h2++) t2[h2] === s2 && (t2[h2] = o2);
  return c2;
}, En = function(e2, t2, n2, r2) {
  for (; n2 > r2; ) t2 = Tn(Math.floor(Math.random() * t2.length), e2, t2), n2--;
  return t2;
}, Dn = { kargerStein: function() {
  var e2 = this, t2 = this.byGroup(), n2 = t2.nodes, r2 = t2.edges;
  r2.unmergeBy(function(e3) {
    return e3.isLoop();
  });
  var i2 = n2.length, a2 = r2.length, o2 = Math.ceil((Math.log(i2) / Math.LN2) ** 2), s2 = Math.floor(i2 / wn);
  if (i2 < 2) {
    Lt(`At least 2 nodes are required for Karger-Stein algorithm`);
    return;
  }
  for (var c2 = [], l2 = 0; l2 < a2; l2++) {
    var u2 = r2[l2];
    c2.push([l2, n2.indexOf(u2.source()), n2.indexOf(u2.target())]);
  }
  for (var d2 = 1 / 0, f2 = [], p2 = Array(i2), m2 = Array(i2), h2 = Array(i2), g2 = function(e3, t3) {
    for (var n3 = 0; n3 < i2; n3++) t3[n3] = e3[n3];
  }, _2 = 0; _2 <= o2; _2++) {
    for (var v2 = 0; v2 < i2; v2++) m2[v2] = v2;
    var y2 = En(m2, c2.slice(), i2, s2), b2 = y2.slice();
    g2(m2, h2);
    var x2 = En(m2, y2, s2, 2), S2 = En(h2, b2, s2, 2);
    x2.length <= S2.length && x2.length < d2 ? (d2 = x2.length, f2 = x2, g2(m2, p2)) : S2.length <= x2.length && S2.length < d2 && (d2 = S2.length, f2 = S2, g2(h2, p2));
  }
  for (var C2 = this.spawn(f2.map(function(e3) {
    return r2[e3[0]];
  })), w2 = this.spawn(), T2 = this.spawn(), E2 = p2[0], D2 = 0; D2 < p2.length; D2++) {
    var O2 = p2[D2], k2 = n2[D2];
    O2 === E2 ? w2.merge(k2) : T2.merge(k2);
  }
  var A2 = function(t3) {
    var n3 = e2.spawn();
    return t3.forEach(function(t4) {
      n3.merge(t4), t4.connectedEdges().forEach(function(t5) {
        e2.contains(t5) && !C2.contains(t5) && n3.merge(t5);
      });
    }), n3;
  };
  return { cut: C2, components: [A2(w2), A2(T2)], partition1: w2, partition2: T2 };
} }, On = function(e2) {
  return { x: e2.x, y: e2.y };
}, kn = function(e2, t2, n2) {
  return { x: e2.x * t2 + n2.x, y: e2.y * t2 + n2.y };
}, An = function(e2, t2, n2) {
  return { x: (e2.x - n2.x) / t2, y: (e2.y - n2.y) / t2 };
}, jn = function(e2) {
  return { x: e2[0], y: e2[1] };
}, Mn = function(e2) {
  for (var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e2.length, r2 = 1 / 0, i2 = t2; i2 < n2; i2++) {
    var a2 = e2[i2];
    isFinite(a2) && (r2 = Math.min(a2, r2));
  }
  return r2;
}, Nn = function(e2) {
  for (var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e2.length, r2 = -1 / 0, i2 = t2; i2 < n2; i2++) {
    var a2 = e2[i2];
    isFinite(a2) && (r2 = Math.max(a2, r2));
  }
  return r2;
}, Pn = function(e2) {
  for (var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e2.length, r2 = 0, i2 = 0, a2 = t2; a2 < n2; a2++) {
    var o2 = e2[a2];
    isFinite(o2) && (r2 += o2, i2++);
  }
  return r2 / i2;
}, Fn = function(e2) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e2.length, r2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, i2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, a2 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true;
  r2 ? e2 = e2.slice(t2, n2) : (n2 < e2.length && e2.splice(n2, e2.length - n2), t2 > 0 && e2.splice(0, t2));
  for (var o2 = 0, s2 = e2.length - 1; s2 >= 0; s2--) {
    var c2 = e2[s2];
    a2 ? isFinite(c2) || (e2[s2] = -1 / 0, o2++) : e2.splice(s2, 1);
  }
  i2 && e2.sort(function(e3, t3) {
    return e3 - t3;
  });
  var l2 = e2.length, u2 = Math.floor(l2 / 2);
  return l2 % 2 == 0 ? (e2[u2 - 1 + o2] + e2[u2 + o2]) / 2 : e2[u2 + 1 + o2];
}, In = function(e2) {
  return Math.PI * e2 / 180;
}, Ln = function(e2, t2) {
  return Math.atan2(t2, e2) - Math.PI / 2;
}, Rn = Math.log2 || function(e2) {
  return Math.log(e2) / Math.log(2);
}, zn = function(e2) {
  return e2 > 0 ? 1 : e2 < 0 ? -1 : 0;
}, Bn = function(e2, t2) {
  return Math.sqrt(Vn(e2, t2));
}, Vn = function(e2, t2) {
  var n2 = t2.x - e2.x, r2 = t2.y - e2.y;
  return n2 * n2 + r2 * r2;
}, Hn = function(e2) {
  for (var t2 = e2.length, n2 = 0, r2 = 0; r2 < t2; r2++) n2 += e2[r2];
  for (var i2 = 0; i2 < t2; i2++) e2[i2] = e2[i2] / n2;
  return e2;
}, Un = function(e2, t2, n2, r2) {
  return (1 - r2) * (1 - r2) * e2 + 2 * (1 - r2) * r2 * t2 + r2 * r2 * n2;
}, Wn = function(e2, t2, n2, r2) {
  return { x: Un(e2.x, t2.x, n2.x, r2), y: Un(e2.y, t2.y, n2.y, r2) };
}, Gn = function(e2, t2, n2, r2) {
  var i2 = { x: t2.x - e2.x, y: t2.y - e2.y }, a2 = Bn(e2, t2), o2 = { x: i2.x / a2, y: i2.y / a2 };
  return n2 ?? (n2 = 0), r2 ?? (r2 = n2 * a2), { x: e2.x + o2.x * r2, y: e2.y + o2.y * r2 };
}, Kn = function(e2, t2, n2) {
  return Math.max(e2, Math.min(n2, t2));
}, qn = function(e2) {
  if (e2 == null) return { x1: 1 / 0, y1: 1 / 0, x2: -1 / 0, y2: -1 / 0, w: 0, h: 0 };
  if (e2.x1 != null && e2.y1 != null) {
    if (e2.x2 != null && e2.y2 != null && e2.x2 >= e2.x1 && e2.y2 >= e2.y1) return { x1: e2.x1, y1: e2.y1, x2: e2.x2, y2: e2.y2, w: e2.x2 - e2.x1, h: e2.y2 - e2.y1 };
    if (e2.w != null && e2.h != null && e2.w >= 0 && e2.h >= 0) return { x1: e2.x1, y1: e2.y1, x2: e2.x1 + e2.w, y2: e2.y1 + e2.h, w: e2.w, h: e2.h };
  }
}, Jn = function(e2) {
  return { x1: e2.x1, x2: e2.x2, w: e2.w, y1: e2.y1, y2: e2.y2, h: e2.h };
}, Yn = function(e2) {
  e2.x1 = 1 / 0, e2.y1 = 1 / 0, e2.x2 = -1 / 0, e2.y2 = -1 / 0, e2.w = 0, e2.h = 0;
}, Xn = function(e2, t2) {
  e2.x1 = Math.min(e2.x1, t2.x1), e2.x2 = Math.max(e2.x2, t2.x2), e2.w = e2.x2 - e2.x1, e2.y1 = Math.min(e2.y1, t2.y1), e2.y2 = Math.max(e2.y2, t2.y2), e2.h = e2.y2 - e2.y1;
}, Zn = function(e2, t2, n2) {
  e2.x1 = Math.min(e2.x1, t2), e2.x2 = Math.max(e2.x2, t2), e2.w = e2.x2 - e2.x1, e2.y1 = Math.min(e2.y1, n2), e2.y2 = Math.max(e2.y2, n2), e2.h = e2.y2 - e2.y1;
}, Qn = function(e2) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e2.x1 -= t2, e2.x2 += t2, e2.y1 -= t2, e2.y2 += t2, e2.w = e2.x2 - e2.x1, e2.h = e2.y2 - e2.y1, e2;
}, $n = function(e2) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [0], n2, r2, i2, a2;
  if (t2.length === 1) n2 = r2 = i2 = a2 = t2[0];
  else if (t2.length === 2) n2 = i2 = t2[0], a2 = r2 = t2[1];
  else if (t2.length === 4) {
    var o2 = f(t2, 4);
    n2 = o2[0], r2 = o2[1], i2 = o2[2], a2 = o2[3];
  }
  return e2.x1 -= a2, e2.x2 += r2, e2.y1 -= n2, e2.y2 += i2, e2.w = e2.x2 - e2.x1, e2.h = e2.y2 - e2.y1, e2;
}, er = function(e2, t2) {
  e2.x1 = t2.x1, e2.y1 = t2.y1, e2.x2 = t2.x2, e2.y2 = t2.y2, e2.w = e2.x2 - e2.x1, e2.h = e2.y2 - e2.y1;
}, tr = function(e2, t2) {
  return !(e2.x1 > t2.x2 || t2.x1 > e2.x2 || e2.x2 < t2.x1 || t2.x2 < e2.x1 || e2.y2 < t2.y1 || t2.y2 < e2.y1 || e2.y1 > t2.y2 || t2.y1 > e2.y2);
}, nr = function(e2, t2, n2) {
  return e2.x1 <= t2 && t2 <= e2.x2 && e2.y1 <= n2 && n2 <= e2.y2;
}, rr = function(e2, t2) {
  return nr(e2, t2.x, t2.y);
}, ir = function(e2, t2) {
  return nr(e2, t2.x1, t2.y1) && nr(e2, t2.x2, t2.y2);
}, ar = Math.hypot ?? function(e2, t2) {
  return Math.sqrt(e2 * e2 + t2 * t2);
};
function or(e2, t2) {
  if (e2.length < 3) throw Error(`Need at least 3 vertices`);
  var n2 = function(e3, t3) {
    return { x: e3.x + t3.x, y: e3.y + t3.y };
  }, r2 = function(e3, t3) {
    return { x: e3.x - t3.x, y: e3.y - t3.y };
  }, i2 = function(e3, t3) {
    return { x: e3.x * t3, y: e3.y * t3 };
  }, a2 = function(e3, t3) {
    return e3.x * t3.y - e3.y * t3.x;
  }, o2 = function(e3) {
    var t3 = ar(e3.x, e3.y);
    return t3 === 0 ? { x: 0, y: 0 } : { x: e3.x / t3, y: e3.y / t3 };
  }, s2 = function(e3) {
    for (var t3 = 0, n3 = 0; n3 < e3.length; n3++) {
      var r3 = e3[n3], i3 = e3[(n3 + 1) % e3.length];
      t3 += r3.x * i3.y - i3.x * r3.y;
    }
    return t3 / 2;
  }, c2 = function(e3, t3, o3, s3) {
    var c3 = r2(t3, e3), l3 = r2(s3, o3), u3 = a2(c3, l3);
    return Math.abs(u3) < 1e-9 ? n2(e3, i2(c3, 0.5)) : n2(e3, i2(c3, a2(r2(o3, e3), l3) / u3));
  }, l2 = e2.map(function(e3) {
    return { x: e3.x, y: e3.y };
  });
  s2(l2) < 0 && l2.reverse();
  for (var u2 = l2.length, d2 = [], f2 = 0; f2 < u2; f2++) {
    var p2 = l2[f2], m2 = l2[(f2 + 1) % u2], h2 = r2(m2, p2), g2 = o2({ x: h2.y, y: -h2.x });
    d2.push(g2);
  }
  for (var _2 = d2.map(function(e3, r3) {
    return { p1: n2(l2[r3], i2(e3, t2)), p2: n2(l2[(r3 + 1) % u2], i2(e3, t2)) };
  }), v2 = [], y2 = 0; y2 < u2; y2++) {
    var b2 = _2[(y2 - 1 + u2) % u2], x2 = _2[y2], S2 = c2(b2.p1, b2.p2, x2.p1, x2.p2);
    v2.push(S2);
  }
  return v2;
}
function sr(e2, t2, n2, r2, i2, a2) {
  var o2 = or(Tr(e2, t2, n2, r2, i2), a2), s2 = qn();
  return o2.forEach(function(e3) {
    return Zn(s2, e3.x, e3.y);
  }), s2;
}
var cr = function(e2, t2, n2, r2, i2, a2, o2) {
  var s2 = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : `auto`, c2 = s2 === `auto` ? Mr(i2, a2) : s2, l2 = i2 / 2, u2 = a2 / 2;
  c2 = Math.min(c2, l2, u2);
  var d2 = c2 !== l2, f2 = c2 !== u2, p2;
  if (d2) {
    var m2 = n2 - l2 + c2 - o2, h2 = r2 - u2 - o2;
    if (p2 = wr(e2, t2, n2, r2, m2, h2, n2 + l2 - c2 + o2, h2, false), p2.length > 0) return p2;
  }
  if (f2) {
    var g2 = n2 + l2 + o2;
    if (p2 = wr(e2, t2, n2, r2, g2, r2 - u2 + c2 - o2, g2, r2 + u2 - c2 + o2, false), p2.length > 0) return p2;
  }
  if (d2) {
    var _2 = n2 - l2 + c2 - o2, v2 = r2 + u2 + o2;
    if (p2 = wr(e2, t2, n2, r2, _2, v2, n2 + l2 - c2 + o2, v2, false), p2.length > 0) return p2;
  }
  if (f2) {
    var y2 = n2 - l2 - o2;
    if (p2 = wr(e2, t2, n2, r2, y2, r2 - u2 + c2 - o2, y2, r2 + u2 - c2 + o2, false), p2.length > 0) return p2;
  }
  var b2, x2 = n2 - l2 + c2, S2 = r2 - u2 + c2;
  if (b2 = Sr(e2, t2, n2, r2, x2, S2, c2 + o2), b2.length > 0 && b2[0] <= x2 && b2[1] <= S2) return [b2[0], b2[1]];
  var C2 = n2 + l2 - c2, w2 = r2 - u2 + c2;
  if (b2 = Sr(e2, t2, n2, r2, C2, w2, c2 + o2), b2.length > 0 && b2[0] >= C2 && b2[1] <= w2) return [b2[0], b2[1]];
  var T2 = n2 + l2 - c2, E2 = r2 + u2 - c2;
  if (b2 = Sr(e2, t2, n2, r2, T2, E2, c2 + o2), b2.length > 0 && b2[0] >= T2 && b2[1] >= E2) return [b2[0], b2[1]];
  var D2 = n2 - l2 + c2, O2 = r2 + u2 - c2;
  return b2 = Sr(e2, t2, n2, r2, D2, O2, c2 + o2), b2.length > 0 && b2[0] <= D2 && b2[1] >= O2 ? [b2[0], b2[1]] : [];
}, lr = function(e2, t2, n2, r2, i2, a2, o2) {
  var s2 = o2, c2 = Math.min(n2, i2), l2 = Math.max(n2, i2), u2 = Math.min(r2, a2), d2 = Math.max(r2, a2);
  return c2 - s2 <= e2 && e2 <= l2 + s2 && u2 - s2 <= t2 && t2 <= d2 + s2;
}, ur = function(e2, t2, n2, r2, i2, a2, o2, s2, c2) {
  var l2 = { x1: Math.min(n2, o2, i2) - c2, x2: Math.max(n2, o2, i2) + c2, y1: Math.min(r2, s2, a2) - c2, y2: Math.max(r2, s2, a2) + c2 };
  return !(e2 < l2.x1 || e2 > l2.x2 || t2 < l2.y1 || t2 > l2.y2);
}, dr = function(e2, t2, n2, r2) {
  n2 -= r2;
  var i2 = t2 * t2 - 4 * e2 * n2;
  if (i2 < 0) return [];
  var a2 = Math.sqrt(i2), o2 = 2 * e2;
  return [(-t2 + a2) / o2, (-t2 - a2) / o2];
}, fr = function(e2, t2, n2, r2, i2) {
  e2 === 0 && (e2 = 1e-5), t2 /= e2, n2 /= e2, r2 /= e2;
  var a2, o2 = (3 * n2 - t2 * t2) / 9, s2 = -(27 * r2) + t2 * (9 * n2 - 2 * (t2 * t2)), c2, l2, u2, d2, f2;
  if (s2 /= 54, a2 = o2 * o2 * o2 + s2 * s2, i2[1] = 0, d2 = t2 / 3, a2 > 0) {
    l2 = s2 + Math.sqrt(a2), l2 = l2 < 0 ? -((-l2) ** (1 / 3)) : l2 ** (1 / 3), u2 = s2 - Math.sqrt(a2), u2 = u2 < 0 ? -((-u2) ** (1 / 3)) : u2 ** (1 / 3), i2[0] = -d2 + l2 + u2, d2 += (l2 + u2) / 2, i2[4] = i2[2] = -d2, d2 = Math.sqrt(3) * (-u2 + l2) / 2, i2[3] = d2, i2[5] = -d2;
    return;
  }
  if (i2[5] = i2[3] = 0, a2 === 0) {
    f2 = s2 < 0 ? -((-s2) ** (1 / 3)) : s2 ** (1 / 3), i2[0] = -d2 + 2 * f2, i2[4] = i2[2] = -(f2 + d2);
    return;
  }
  o2 = -o2, c2 = o2 * o2 * o2, c2 = Math.acos(s2 / Math.sqrt(c2)), f2 = 2 * Math.sqrt(o2), i2[0] = -d2 + f2 * Math.cos(c2 / 3), i2[2] = -d2 + f2 * Math.cos((c2 + 2 * Math.PI) / 3), i2[4] = -d2 + f2 * Math.cos((c2 + 4 * Math.PI) / 3);
}, pr = function(e2, t2, n2, r2, i2, a2, o2, s2) {
  var c2 = 1 * n2 * n2 - 4 * n2 * i2 + 2 * n2 * o2 + 4 * i2 * i2 - 4 * i2 * o2 + o2 * o2 + r2 * r2 - 4 * r2 * a2 + 2 * r2 * s2 + 4 * a2 * a2 - 4 * a2 * s2 + s2 * s2, l2 = 9 * n2 * i2 - 3 * n2 * n2 - 3 * n2 * o2 - 6 * i2 * i2 + 3 * i2 * o2 + 9 * r2 * a2 - 3 * r2 * r2 - 3 * r2 * s2 - 6 * a2 * a2 + 3 * a2 * s2, u2 = 3 * n2 * n2 - 6 * n2 * i2 + n2 * o2 - n2 * e2 + 2 * i2 * i2 + 2 * i2 * e2 - o2 * e2 + 3 * r2 * r2 - 6 * r2 * a2 + r2 * s2 - r2 * t2 + 2 * a2 * a2 + 2 * a2 * t2 - s2 * t2, d2 = 1 * n2 * i2 - n2 * n2 + n2 * e2 - i2 * e2 + r2 * a2 - r2 * r2 + r2 * t2 - a2 * t2, f2 = [];
  fr(c2, l2, u2, d2, f2);
  for (var p2 = 1e-7, m2 = [], h2 = 0; h2 < 6; h2 += 2) Math.abs(f2[h2 + 1]) < p2 && f2[h2] >= 0 && f2[h2] <= 1 && m2.push(f2[h2]);
  m2.push(1), m2.push(0);
  for (var g2 = -1, _2, v2, y2, b2 = 0; b2 < m2.length; b2++) _2 = (1 - m2[b2]) ** 2 * n2 + 2 * (1 - m2[b2]) * m2[b2] * i2 + m2[b2] * m2[b2] * o2, v2 = (1 - m2[b2]) ** 2 * r2 + 2 * (1 - m2[b2]) * m2[b2] * a2 + m2[b2] * m2[b2] * s2, y2 = (_2 - e2) ** 2 + (v2 - t2) ** 2, g2 >= 0 ? y2 < g2 && (g2 = y2) : g2 = y2;
  return g2;
}, mr = function(e2, t2, n2, r2, i2, a2) {
  var o2 = [e2 - n2, t2 - r2], s2 = [i2 - n2, a2 - r2], c2 = s2[0] * s2[0] + s2[1] * s2[1], l2 = o2[0] * o2[0] + o2[1] * o2[1], u2 = o2[0] * s2[0] + o2[1] * s2[1], d2 = u2 * u2 / c2;
  return u2 < 0 ? l2 : d2 > c2 ? (e2 - i2) * (e2 - i2) + (t2 - a2) * (t2 - a2) : l2 - d2;
}, hr = function(e2, t2, n2) {
  for (var r2, i2, a2, o2, s2, c2 = 0, l2 = 0; l2 < n2.length / 2; l2++) if (r2 = n2[l2 * 2], i2 = n2[l2 * 2 + 1], l2 + 1 < n2.length / 2 ? (a2 = n2[(l2 + 1) * 2], o2 = n2[(l2 + 1) * 2 + 1]) : (a2 = n2[(l2 + 1 - n2.length / 2) * 2], o2 = n2[(l2 + 1 - n2.length / 2) * 2 + 1]), !(r2 == e2 && a2 == e2)) if (r2 >= e2 && e2 >= a2 || r2 <= e2 && e2 <= a2) s2 = (e2 - r2) / (a2 - r2) * (o2 - i2) + i2, s2 > t2 && c2++;
  else continue;
  return c2 % 2 != 0;
}, gr = function(e2, t2, n2, r2, i2, a2, o2, s2, c2) {
  var l2 = Array(n2.length), u2;
  s2[0] == null ? u2 = s2 : (u2 = Math.atan(s2[1] / s2[0]), s2[0] < 0 ? u2 += Math.PI / 2 : u2 = -u2 - Math.PI / 2);
  for (var d2 = Math.cos(-u2), f2 = Math.sin(-u2), p2 = 0; p2 < l2.length / 2; p2++) l2[p2 * 2] = a2 / 2 * (n2[p2 * 2] * d2 - n2[p2 * 2 + 1] * f2), l2[p2 * 2 + 1] = o2 / 2 * (n2[p2 * 2 + 1] * d2 + n2[p2 * 2] * f2), l2[p2 * 2] += r2, l2[p2 * 2 + 1] += i2;
  return hr(e2, t2, c2 > 0 ? vr(yr(l2, -c2)) : l2);
}, _r = function(e2, t2, n2, r2, i2, a2, o2, s2) {
  for (var c2 = Array(n2.length * 2), l2 = 0; l2 < s2.length; l2++) {
    var u2 = s2[l2];
    if (c2[l2 * 4 + 0] = u2.startX, c2[l2 * 4 + 1] = u2.startY, c2[l2 * 4 + 2] = u2.stopX, c2[l2 * 4 + 3] = u2.stopY, (u2.cx - e2) ** 2 + (u2.cy - t2) ** 2 <= u2.radius ** 2) return true;
  }
  return hr(e2, t2, c2);
}, vr = function(e2) {
  for (var t2 = Array(e2.length / 2), n2, r2, i2, a2, o2, s2, c2, l2, u2 = 0; u2 < e2.length / 4; u2++) {
    n2 = e2[u2 * 4], r2 = e2[u2 * 4 + 1], i2 = e2[u2 * 4 + 2], a2 = e2[u2 * 4 + 3], u2 < e2.length / 4 - 1 ? (o2 = e2[(u2 + 1) * 4], s2 = e2[(u2 + 1) * 4 + 1], c2 = e2[(u2 + 1) * 4 + 2], l2 = e2[(u2 + 1) * 4 + 3]) : (o2 = e2[0], s2 = e2[1], c2 = e2[2], l2 = e2[3]);
    var d2 = wr(n2, r2, i2, a2, o2, s2, c2, l2, true);
    t2[u2 * 2] = d2[0], t2[u2 * 2 + 1] = d2[1];
  }
  return t2;
}, yr = function(e2, t2) {
  for (var n2 = Array(e2.length * 2), r2, i2, a2, o2, s2 = 0; s2 < e2.length / 2; s2++) {
    r2 = e2[s2 * 2], i2 = e2[s2 * 2 + 1], s2 < e2.length / 2 - 1 ? (a2 = e2[(s2 + 1) * 2], o2 = e2[(s2 + 1) * 2 + 1]) : (a2 = e2[0], o2 = e2[1]);
    var c2 = o2 - i2, l2 = -(a2 - r2), u2 = Math.sqrt(c2 * c2 + l2 * l2), d2 = c2 / u2, f2 = l2 / u2;
    n2[s2 * 4] = r2 + d2 * t2, n2[s2 * 4 + 1] = i2 + f2 * t2, n2[s2 * 4 + 2] = a2 + d2 * t2, n2[s2 * 4 + 3] = o2 + f2 * t2;
  }
  return n2;
}, br = function(e2, t2, n2, r2, i2, a2) {
  var o2 = n2 - e2, s2 = r2 - t2;
  o2 /= i2, s2 /= a2;
  var c2 = Math.sqrt(o2 * o2 + s2 * s2), l2 = c2 - 1;
  if (l2 < 0) return [];
  var u2 = l2 / c2;
  return [(n2 - e2) * u2 + e2, (r2 - t2) * u2 + t2];
}, xr = function(e2, t2, n2, r2, i2, a2, o2) {
  return e2 -= i2, t2 -= a2, e2 /= n2 / 2 + o2, t2 /= r2 / 2 + o2, e2 * e2 + t2 * t2 <= 1;
}, Sr = function(e2, t2, n2, r2, i2, a2, o2) {
  var s2 = [n2 - e2, r2 - t2], c2 = [e2 - i2, t2 - a2], l2 = s2[0] * s2[0] + s2[1] * s2[1], u2 = 2 * (c2[0] * s2[0] + c2[1] * s2[1]), d2 = c2[0] * c2[0] + c2[1] * c2[1] - o2 * o2, f2 = u2 * u2 - 4 * l2 * d2;
  if (f2 < 0) return [];
  var p2 = (-u2 + Math.sqrt(f2)) / (2 * l2), m2 = (-u2 - Math.sqrt(f2)) / (2 * l2), h2 = Math.min(p2, m2), g2 = Math.max(p2, m2), _2 = [];
  if (h2 >= 0 && h2 <= 1 && _2.push(h2), g2 >= 0 && g2 <= 1 && _2.push(g2), _2.length === 0) return [];
  var v2 = _2[0] * s2[0] + e2, y2 = _2[0] * s2[1] + t2;
  return _2.length > 1 ? _2[0] == _2[1] ? [v2, y2] : [v2, y2, _2[1] * s2[0] + e2, _2[1] * s2[1] + t2] : [v2, y2];
}, Cr = function(e2, t2, n2) {
  return t2 <= e2 && e2 <= n2 || n2 <= e2 && e2 <= t2 ? e2 : e2 <= t2 && t2 <= n2 || n2 <= t2 && t2 <= e2 ? t2 : n2;
}, wr = function(e2, t2, n2, r2, i2, a2, o2, s2, c2) {
  var l2 = e2 - i2, u2 = n2 - e2, d2 = o2 - i2, f2 = t2 - a2, p2 = r2 - t2, m2 = s2 - a2, h2 = d2 * f2 - m2 * l2, g2 = u2 * f2 - p2 * l2, _2 = m2 * u2 - d2 * p2;
  if (_2 !== 0) {
    var v2 = h2 / _2, y2 = g2 / _2, b2 = 1e-3, x2 = 0 - b2, S2 = 1 + b2;
    return x2 <= v2 && v2 <= S2 && x2 <= y2 && y2 <= S2 || c2 ? [e2 + v2 * u2, t2 + v2 * p2] : [];
  } else if (h2 === 0 || g2 === 0) return Cr(e2, n2, o2) === o2 ? [o2, s2] : Cr(e2, n2, i2) === i2 ? [i2, a2] : Cr(i2, o2, n2) === n2 ? [n2, r2] : [];
  else return [];
}, Tr = function(e2, t2, n2, r2, i2) {
  var a2 = [], o2 = r2 / 2, s2 = i2 / 2, c2 = t2, l2 = n2;
  a2.push({ x: c2 + o2 * e2[0], y: l2 + s2 * e2[1] });
  for (var u2 = 1; u2 < e2.length / 2; u2++) a2.push({ x: c2 + o2 * e2[u2 * 2], y: l2 + s2 * e2[u2 * 2 + 1] });
  return a2;
}, Er = function(e2, t2, n2, r2, i2, a2, o2, s2) {
  var c2 = [], l2, u2 = Array(n2.length), d2 = true;
  a2 ?? (d2 = false);
  var f2;
  if (d2) {
    for (var p2 = 0; p2 < u2.length / 2; p2++) u2[p2 * 2] = n2[p2 * 2] * a2 + r2, u2[p2 * 2 + 1] = n2[p2 * 2 + 1] * o2 + i2;
    f2 = s2 > 0 ? vr(yr(u2, -s2)) : u2;
  } else f2 = n2;
  for (var m2, h2, g2, _2, v2 = 0; v2 < f2.length / 2; v2++) m2 = f2[v2 * 2], h2 = f2[v2 * 2 + 1], v2 < f2.length / 2 - 1 ? (g2 = f2[(v2 + 1) * 2], _2 = f2[(v2 + 1) * 2 + 1]) : (g2 = f2[0], _2 = f2[1]), l2 = wr(e2, t2, r2, i2, m2, h2, g2, _2), l2.length !== 0 && c2.push(l2[0], l2[1]);
  return c2;
}, Dr = function(e2, t2, n2, r2, i2, a2, o2, s2, c2) {
  var l2 = [], u2, d2 = Array(n2.length * 2);
  c2.forEach(function(n3, a3) {
    a3 === 0 ? (d2[d2.length - 2] = n3.startX, d2[d2.length - 1] = n3.startY) : (d2[a3 * 4 - 2] = n3.startX, d2[a3 * 4 - 1] = n3.startY), d2[a3 * 4] = n3.stopX, d2[a3 * 4 + 1] = n3.stopY, u2 = Sr(e2, t2, r2, i2, n3.cx, n3.cy, n3.radius), u2.length !== 0 && l2.push(u2[0], u2[1]);
  });
  for (var f2 = 0; f2 < d2.length / 4; f2++) u2 = wr(e2, t2, r2, i2, d2[f2 * 4], d2[f2 * 4 + 1], d2[f2 * 4 + 2], d2[f2 * 4 + 3], false), u2.length !== 0 && l2.push(u2[0], u2[1]);
  if (l2.length > 2) {
    for (var p2 = [l2[0], l2[1]], m2 = (p2[0] - e2) ** 2 + (p2[1] - t2) ** 2, h2 = 1; h2 < l2.length / 2; h2++) {
      var g2 = (l2[h2 * 2] - e2) ** 2 + (l2[h2 * 2 + 1] - t2) ** 2;
      g2 <= m2 && (p2[0] = l2[h2 * 2], p2[1] = l2[h2 * 2 + 1], m2 = g2);
    }
    return p2;
  }
  return l2;
}, Or = function(e2, t2, n2) {
  var r2 = [e2[0] - t2[0], e2[1] - t2[1]], i2 = Math.sqrt(r2[0] * r2[0] + r2[1] * r2[1]), a2 = (i2 - n2) / i2;
  return a2 < 0 && (a2 = 1e-5), [t2[0] + a2 * r2[0], t2[1] + a2 * r2[1]];
}, kr = function(e2, t2) {
  var n2 = jr(e2, t2);
  return n2 = Ar(n2), n2;
}, Ar = function(e2) {
  for (var t2, n2, r2 = e2.length / 2, i2 = 1 / 0, a2 = 1 / 0, o2 = -1 / 0, s2 = -1 / 0, c2 = 0; c2 < r2; c2++) t2 = e2[2 * c2], n2 = e2[2 * c2 + 1], i2 = Math.min(i2, t2), o2 = Math.max(o2, t2), a2 = Math.min(a2, n2), s2 = Math.max(s2, n2);
  for (var l2 = 2 / (o2 - i2), u2 = 2 / (s2 - a2), d2 = 0; d2 < r2; d2++) t2 = e2[2 * d2] = e2[2 * d2] * l2, n2 = e2[2 * d2 + 1] = e2[2 * d2 + 1] * u2, i2 = Math.min(i2, t2), o2 = Math.max(o2, t2), a2 = Math.min(a2, n2), s2 = Math.max(s2, n2);
  if (a2 < -1) for (var f2 = 0; f2 < r2; f2++) n2 = e2[2 * f2 + 1] = e2[2 * f2 + 1] + (-1 - a2);
  return e2;
}, jr = function(e2, t2) {
  var n2 = 1 / e2 * 2 * Math.PI, r2 = e2 % 2 == 0 ? Math.PI / 2 + n2 / 2 : Math.PI / 2;
  r2 += t2;
  for (var i2 = Array(e2 * 2), a2, o2 = 0; o2 < e2; o2++) a2 = o2 * n2 + r2, i2[2 * o2] = Math.cos(a2), i2[2 * o2 + 1] = Math.sin(-a2);
  return i2;
}, Mr = function(e2, t2) {
  return Math.min(e2 / 4, t2 / 4, 8);
}, Nr = function(e2, t2) {
  return Math.min(e2 / 10, t2 / 10, 8);
}, Pr = function() {
  return 8;
}, Fr = function(e2, t2, n2) {
  return [e2 - 2 * t2 + n2, 2 * (t2 - e2), e2];
}, Ir = function(e2, t2) {
  return { heightOffset: Math.min(15, 0.05 * t2), widthOffset: Math.min(100, 0.25 * e2), ctrlPtOffsetPct: 0.05 };
};
function Lr(e2, t2) {
  function n2(e3) {
    for (var t3 = [], n3 = 0; n3 < e3.length; n3++) {
      var r3 = e3[n3], i3 = e3[(n3 + 1) % e3.length], a3 = { x: i3.x - r3.x, y: i3.y - r3.y }, o2 = { x: -a3.y, y: a3.x }, s3 = Math.sqrt(o2.x * o2.x + o2.y * o2.y);
      t3.push({ x: o2.x / s3, y: o2.y / s3 });
    }
    return t3;
  }
  function r2(e3, t3) {
    var n3 = 1 / 0, r3 = -1 / 0, i3 = o(e3), a3;
    try {
      for (i3.s(); !(a3 = i3.n()).done; ) {
        var s3 = a3.value, c3 = s3.x * t3.x + s3.y * t3.y;
        n3 = Math.min(n3, c3), r3 = Math.max(r3, c3);
      }
    } catch (e4) {
      i3.e(e4);
    } finally {
      i3.f();
    }
    return { min: n3, max: r3 };
  }
  function i2(e3, t3) {
    return !(e3.max < t3.min || t3.max < e3.min);
  }
  var a2 = o([].concat(p(n2(e2)), p(n2(t2)))), s2;
  try {
    for (a2.s(); !(s2 = a2.n()).done; ) {
      var c2 = s2.value;
      if (!i2(r2(e2, c2), r2(t2, c2))) return false;
    }
  } catch (e3) {
    a2.e(e3);
  } finally {
    a2.f();
  }
  return true;
}
var Rr = Kt({ dampingFactor: 0.8, precision: 1e-6, iterations: 200, weight: function(e2) {
  return 1;
} }), zr = { pageRank: function(e2) {
  for (var t2 = Rr(e2), n2 = t2.dampingFactor, r2 = t2.precision, i2 = t2.iterations, a2 = t2.weight, o2 = this._private.cy, s2 = this.byGroup(), c2 = s2.nodes, l2 = s2.edges, u2 = c2.length, d2 = u2 * u2, f2 = l2.length, p2 = Array(d2), m2 = Array(u2), h2 = (1 - n2) / u2, g2 = 0; g2 < u2; g2++) {
    for (var _2 = 0; _2 < u2; _2++) {
      var v2 = g2 * u2 + _2;
      p2[v2] = 0;
    }
    m2[g2] = 0;
  }
  for (var y2 = 0; y2 < f2; y2++) {
    var b2 = l2[y2], x2 = b2.data(`source`), S2 = b2.data(`target`);
    if (x2 !== S2) {
      var C2 = c2.indexOfId(x2), w2 = c2.indexOfId(S2), T2 = a2(b2), E2 = w2 * u2 + C2;
      p2[E2] += T2, m2[C2] += T2;
    }
  }
  for (var D2 = 1 / u2 + h2, O2 = 0; O2 < u2; O2++) if (m2[O2] === 0) for (var k2 = 0; k2 < u2; k2++) {
    var A2 = k2 * u2 + O2;
    p2[A2] = D2;
  }
  else for (var j2 = 0; j2 < u2; j2++) {
    var M2 = j2 * u2 + O2;
    p2[M2] = p2[M2] / m2[O2] + h2;
  }
  for (var N2 = Array(u2), P2 = Array(u2), F2, I2 = 0; I2 < u2; I2++) N2[I2] = 1;
  for (var L2 = 0; L2 < i2; L2++) {
    for (var R2 = 0; R2 < u2; R2++) P2[R2] = 0;
    for (var z2 = 0; z2 < u2; z2++) for (var B2 = 0; B2 < u2; B2++) {
      var V2 = z2 * u2 + B2;
      P2[z2] += p2[V2] * N2[B2];
    }
    Hn(P2), F2 = N2, N2 = P2, P2 = F2;
    for (var H2 = 0, U2 = 0; U2 < u2; U2++) {
      var W2 = F2[U2] - N2[U2];
      H2 += W2 * W2;
    }
    if (H2 < r2) break;
  }
  return { rank: function(e3) {
    return e3 = o2.collection(e3)[0], N2[c2.indexOf(e3)];
  } };
} }, Br = Kt({ root: null, weight: function(e2) {
  return 1;
}, directed: false, alpha: 0 }), Vr = { degreeCentralityNormalized: function(e2) {
  e2 = Br(e2);
  var t2 = this.cy(), n2 = this.nodes(), r2 = n2.length;
  if (e2.directed) {
    for (var i2 = {}, a2 = {}, o2 = 0, s2 = 0, c2 = 0; c2 < r2; c2++) {
      var l2 = n2[c2], u2 = l2.id();
      e2.root = l2;
      var d2 = this.degreeCentrality(e2);
      o2 < d2.indegree && (o2 = d2.indegree), s2 < d2.outdegree && (s2 = d2.outdegree), i2[u2] = d2.indegree, a2[u2] = d2.outdegree;
    }
    return { indegree: function(e3) {
      return o2 == 0 ? 0 : (T(e3) && (e3 = t2.filter(e3)), i2[e3.id()] / o2);
    }, outdegree: function(e3) {
      return s2 === 0 ? 0 : (T(e3) && (e3 = t2.filter(e3)), a2[e3.id()] / s2);
    } };
  } else {
    for (var f2 = {}, p2 = 0, m2 = 0; m2 < r2; m2++) {
      var h2 = n2[m2];
      e2.root = h2;
      var g2 = this.degreeCentrality(e2);
      p2 < g2.degree && (p2 = g2.degree), f2[h2.id()] = g2.degree;
    }
    return { degree: function(e3) {
      return p2 === 0 ? 0 : (T(e3) && (e3 = t2.filter(e3)), f2[e3.id()] / p2);
    } };
  }
}, degreeCentrality: function(e2) {
  e2 = Br(e2);
  var t2 = this.cy(), n2 = this, r2 = e2, i2 = r2.root, a2 = r2.weight, o2 = r2.directed, s2 = r2.alpha;
  if (i2 = t2.collection(i2)[0], o2) {
    for (var c2 = i2.connectedEdges(), l2 = c2.filter(function(e3) {
      return e3.target().same(i2) && n2.has(e3);
    }), u2 = c2.filter(function(e3) {
      return e3.source().same(i2) && n2.has(e3);
    }), d2 = l2.length, f2 = u2.length, p2 = 0, m2 = 0, h2 = 0; h2 < l2.length; h2++) p2 += a2(l2[h2]);
    for (var g2 = 0; g2 < u2.length; g2++) m2 += a2(u2[g2]);
    return { indegree: d2 ** (1 - s2) * p2 ** +s2, outdegree: f2 ** (1 - s2) * m2 ** +s2 };
  } else {
    for (var _2 = i2.connectedEdges().intersection(n2), v2 = _2.length, y2 = 0, b2 = 0; b2 < _2.length; b2++) y2 += a2(_2[b2]);
    return { degree: v2 ** (1 - s2) * y2 ** +s2 };
  }
} };
Vr.dc = Vr.degreeCentrality, Vr.dcn = Vr.degreeCentralityNormalised = Vr.degreeCentralityNormalized;
var Hr = Kt({ harmonic: true, weight: function() {
  return 1;
}, directed: false, root: null }), Ur = { closenessCentralityNormalized: function(e2) {
  for (var t2 = Hr(e2), n2 = t2.harmonic, r2 = t2.weight, i2 = t2.directed, a2 = this.cy(), o2 = {}, s2 = 0, c2 = this.nodes(), l2 = this.floydWarshall({ weight: r2, directed: i2 }), u2 = 0; u2 < c2.length; u2++) {
    for (var d2 = 0, f2 = c2[u2], p2 = 0; p2 < c2.length; p2++) if (u2 !== p2) {
      var m2 = l2.distance(f2, c2[p2]);
      n2 ? d2 += 1 / m2 : d2 += m2;
    }
    n2 || (d2 = 1 / d2), s2 < d2 && (s2 = d2), o2[f2.id()] = d2;
  }
  return { closeness: function(e3) {
    return s2 == 0 ? 0 : (e3 = T(e3) ? a2.filter(e3)[0].id() : e3.id(), o2[e3] / s2);
  } };
}, closenessCentrality: function(e2) {
  var t2 = Hr(e2), n2 = t2.root, r2 = t2.weight, i2 = t2.directed, a2 = t2.harmonic;
  n2 = this.filter(n2)[0];
  for (var o2 = this.dijkstra({ root: n2, weight: r2, directed: i2 }), s2 = 0, c2 = this.nodes(), l2 = 0; l2 < c2.length; l2++) {
    var u2 = c2[l2];
    if (!u2.same(n2)) {
      var d2 = o2.distanceTo(u2);
      a2 ? s2 += 1 / d2 : s2 += d2;
    }
  }
  return a2 ? s2 : 1 / s2;
} };
Ur.cc = Ur.closenessCentrality, Ur.ccn = Ur.closenessCentralityNormalised = Ur.closenessCentralityNormalized;
var Wr = Kt({ weight: null, directed: false }), Gr = { betweennessCentrality: function(e2) {
  for (var t2 = Wr(e2), n2 = t2.directed, r2 = t2.weight, i2 = r2 != null, a2 = this.cy(), o2 = this.nodes(), s2 = {}, c2 = {}, l2 = 0, u2 = { set: function(e3, t3) {
    c2[e3] = t3, t3 > l2 && (l2 = t3);
  }, get: function(e3) {
    return c2[e3];
  } }, d2 = 0; d2 < o2.length; d2++) {
    var f2 = o2[d2], p2 = f2.id();
    n2 ? s2[p2] = f2.outgoers().nodes() : s2[p2] = f2.openNeighborhood().nodes(), u2.set(p2, 0);
  }
  for (var m2 = function() {
    for (var e3 = o2[h2].id(), t3 = [], n3 = {}, c3 = {}, l3 = {}, d3 = new mn(function(e4, t4) {
      return l3[e4] - l3[t4];
    }), f3 = 0; f3 < o2.length; f3++) {
      var p3 = o2[f3].id();
      n3[p3] = [], c3[p3] = 0, l3[p3] = 1 / 0;
    }
    for (c3[e3] = 1, l3[e3] = 0, d3.push(e3); !d3.empty(); ) {
      var m3 = d3.pop();
      if (t3.push(m3), i2) for (var g3 = 0; g3 < s2[m3].length; g3++) {
        var _2 = s2[m3][g3], v2 = a2.getElementById(m3), y2 = void 0;
        y2 = v2.edgesTo(_2).length > 0 ? v2.edgesTo(_2)[0] : _2.edgesTo(v2)[0];
        var b2 = r2(y2);
        _2 = _2.id(), l3[_2] > l3[m3] + b2 && (l3[_2] = l3[m3] + b2, d3.nodes.indexOf(_2) < 0 ? d3.push(_2) : d3.updateItem(_2), c3[_2] = 0, n3[_2] = []), l3[_2] == l3[m3] + b2 && (c3[_2] = c3[_2] + c3[m3], n3[_2].push(m3));
      }
      else for (var x2 = 0; x2 < s2[m3].length; x2++) {
        var S2 = s2[m3][x2].id();
        l3[S2] == 1 / 0 && (d3.push(S2), l3[S2] = l3[m3] + 1), l3[S2] == l3[m3] + 1 && (c3[S2] = c3[S2] + c3[m3], n3[S2].push(m3));
      }
    }
    for (var C2 = {}, w2 = 0; w2 < o2.length; w2++) C2[o2[w2].id()] = 0;
    for (; t3.length > 0; ) {
      for (var T2 = t3.pop(), E2 = 0; E2 < n3[T2].length; E2++) {
        var D2 = n3[T2][E2];
        C2[D2] = C2[D2] + c3[D2] / c3[T2] * (1 + C2[T2]);
      }
      T2 != o2[h2].id() && u2.set(T2, u2.get(T2) + C2[T2]);
    }
  }, h2 = 0; h2 < o2.length; h2++) m2();
  var g2 = { betweenness: function(e3) {
    var t3 = a2.collection(e3).id();
    return u2.get(t3);
  }, betweennessNormalized: function(e3) {
    if (l2 == 0) return 0;
    var t3 = a2.collection(e3).id();
    return u2.get(t3) / l2;
  } };
  return g2.betweennessNormalised = g2.betweennessNormalized, g2;
} };
Gr.bc = Gr.betweennessCentrality;
var Kr = Kt({ expandFactor: 2, inflateFactor: 2, multFactor: 1, maxIterations: 20, attributes: [function(e2) {
  return 1;
}] }), qr = function(e2) {
  return Kr(e2);
}, Jr = function(e2, t2) {
  for (var n2 = 0, r2 = 0; r2 < t2.length; r2++) n2 += t2[r2](e2);
  return n2;
}, Yr = function(e2, t2, n2) {
  for (var r2 = 0; r2 < t2; r2++) e2[r2 * t2 + r2] = n2;
}, Xr = function(e2, t2) {
  for (var n2, r2 = 0; r2 < t2; r2++) {
    n2 = 0;
    for (var i2 = 0; i2 < t2; i2++) n2 += e2[i2 * t2 + r2];
    for (var a2 = 0; a2 < t2; a2++) e2[a2 * t2 + r2] = e2[a2 * t2 + r2] / n2;
  }
}, Zr = function(e2, t2, n2) {
  for (var r2 = Array(n2 * n2), i2 = 0; i2 < n2; i2++) {
    for (var a2 = 0; a2 < n2; a2++) r2[i2 * n2 + a2] = 0;
    for (var o2 = 0; o2 < n2; o2++) for (var s2 = 0; s2 < n2; s2++) r2[i2 * n2 + s2] += e2[i2 * n2 + o2] * t2[o2 * n2 + s2];
  }
  return r2;
}, Qr = function(e2, t2, n2) {
  for (var r2 = e2.slice(0), i2 = 1; i2 < n2; i2++) e2 = Zr(e2, r2, t2);
  return e2;
}, $r = function(e2, t2, n2) {
  for (var r2 = Array(t2 * t2), i2 = 0; i2 < t2 * t2; i2++) r2[i2] = e2[i2] ** +n2;
  return Xr(r2, t2), r2;
}, ei = function(e2, t2, n2, r2) {
  for (var i2 = 0; i2 < n2; i2++) if (Math.round(e2[i2] * 10 ** r2) / 10 ** r2 != Math.round(t2[i2] * 10 ** r2) / 10 ** r2) return false;
  return true;
}, ti = function(e2, t2, n2, r2) {
  for (var i2 = [], a2 = 0; a2 < t2; a2++) {
    for (var o2 = [], s2 = 0; s2 < t2; s2++) Math.round(e2[a2 * t2 + s2] * 1e3) / 1e3 > 0 && o2.push(n2[s2]);
    o2.length !== 0 && i2.push(r2.collection(o2));
  }
  return i2;
}, ni = function(e2, t2) {
  for (var n2 = 0; n2 < e2.length; n2++) if (!t2[n2] || e2[n2].id() !== t2[n2].id()) return false;
  return true;
}, ri = function(e2) {
  for (var t2 = 0; t2 < e2.length; t2++) for (var n2 = 0; n2 < e2.length; n2++) t2 != n2 && ni(e2[t2], e2[n2]) && e2.splice(n2, 1);
  return e2;
}, ii = function(e2) {
  for (var t2 = this.nodes(), n2 = this.edges(), r2 = this.cy(), i2 = qr(e2), a2 = {}, o2 = 0; o2 < t2.length; o2++) a2[t2[o2].id()] = o2;
  for (var s2 = t2.length, c2 = s2 * s2, l2 = Array(c2), u2, d2 = 0; d2 < c2; d2++) l2[d2] = 0;
  for (var f2 = 0; f2 < n2.length; f2++) {
    var p2 = n2[f2], m2 = a2[p2.source().id()], h2 = a2[p2.target().id()], g2 = Jr(p2, i2.attributes);
    l2[m2 * s2 + h2] += g2, l2[h2 * s2 + m2] += g2;
  }
  Yr(l2, s2, i2.multFactor), Xr(l2, s2);
  for (var _2 = true, v2 = 0; _2 && v2 < i2.maxIterations; ) _2 = false, u2 = Qr(l2, s2, i2.expandFactor), l2 = $r(u2, s2, i2.inflateFactor), ei(l2, u2, c2, 4) || (_2 = true), v2++;
  var y2 = ti(l2, s2, t2, r2);
  return y2 = ri(y2), y2;
}, ai = { markovClustering: ii, mcl: ii }, oi = function(e2) {
  return e2;
}, si = function(e2, t2) {
  return Math.abs(t2 - e2);
}, ci = function(e2, t2, n2) {
  return e2 + si(t2, n2);
}, li = function(e2, t2, n2) {
  return e2 + (n2 - t2) ** 2;
}, ui = function(e2) {
  return Math.sqrt(e2);
}, di = function(e2, t2, n2) {
  return Math.max(e2, si(t2, n2));
}, fi = function(e2, t2, n2, r2, i2) {
  for (var a2 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : oi, o2 = r2, s2, c2, l2 = 0; l2 < e2; l2++) s2 = t2(l2), c2 = n2(l2), o2 = i2(o2, s2, c2);
  return a2(o2);
}, pi = { euclidean: function(e2, t2, n2) {
  return e2 >= 2 ? fi(e2, t2, n2, 0, li, ui) : fi(e2, t2, n2, 0, ci);
}, squaredEuclidean: function(e2, t2, n2) {
  return fi(e2, t2, n2, 0, li);
}, manhattan: function(e2, t2, n2) {
  return fi(e2, t2, n2, 0, ci);
}, max: function(e2, t2, n2) {
  return fi(e2, t2, n2, -1 / 0, di);
} };
pi[`squared-euclidean`] = pi.squaredEuclidean, pi.squaredeuclidean = pi.squaredEuclidean;
function mi(e2, t2, n2, r2, i2, a2) {
  var o2 = E(e2) ? e2 : pi[e2] || pi.euclidean;
  return t2 === 0 && E(e2) ? o2(i2, a2) : o2(t2, n2, r2, i2, a2);
}
var hi = Kt({ k: 2, m: 2, sensitivityThreshold: 1e-4, distance: `euclidean`, maxIterations: 10, attributes: [], testMode: false, testCentroids: null }), gi = function(e2) {
  return hi(e2);
}, _i = function(e2, t2, n2, r2, i2) {
  var a2 = i2 === `kMedoids` ? function(e3) {
    return r2[e3](n2);
  } : function(e3) {
    return n2[e3];
  }, o2 = function(e3) {
    return r2[e3](t2);
  }, s2 = n2, c2 = t2;
  return mi(e2, r2.length, a2, o2, s2, c2);
}, vi = function(e2, t2, n2) {
  for (var r2 = n2.length, i2 = Array(r2), a2 = Array(r2), o2 = Array(t2), s2 = null, c2 = 0; c2 < r2; c2++) i2[c2] = e2.min(n2[c2]).value, a2[c2] = e2.max(n2[c2]).value;
  for (var l2 = 0; l2 < t2; l2++) {
    s2 = [];
    for (var u2 = 0; u2 < r2; u2++) s2[u2] = Math.random() * (a2[u2] - i2[u2]) + i2[u2];
    o2[l2] = s2;
  }
  return o2;
}, yi = function(e2, t2, n2, r2, i2) {
  for (var a2 = 1 / 0, o2 = 0, s2 = 0; s2 < t2.length; s2++) {
    var c2 = _i(n2, e2, t2[s2], r2, i2);
    c2 < a2 && (a2 = c2, o2 = s2);
  }
  return o2;
}, bi = function(e2, t2, n2) {
  for (var r2 = [], i2 = null, a2 = 0; a2 < t2.length; a2++) i2 = t2[a2], n2[i2.id()] === e2 && r2.push(i2);
  return r2;
}, xi = function(e2, t2, n2) {
  return Math.abs(t2 - e2) <= n2;
}, Si = function(e2, t2, n2) {
  for (var r2 = 0; r2 < e2.length; r2++) for (var i2 = 0; i2 < e2[r2].length; i2++) if (Math.abs(e2[r2][i2] - t2[r2][i2]) > n2) return false;
  return true;
}, Ci = function(e2, t2, n2) {
  for (var r2 = 0; r2 < n2; r2++) if (e2 === t2[r2]) return true;
  return false;
}, wi = function(e2, t2) {
  var n2 = Array(t2);
  if (e2.length < 50) for (var r2 = 0; r2 < t2; r2++) {
    for (var i2 = e2[Math.floor(Math.random() * e2.length)]; Ci(i2, n2, r2); ) i2 = e2[Math.floor(Math.random() * e2.length)];
    n2[r2] = i2;
  }
  else for (var a2 = 0; a2 < t2; a2++) n2[a2] = e2[Math.floor(Math.random() * e2.length)];
  return n2;
}, Ti = function(e2, t2, n2) {
  for (var r2 = 0, i2 = 0; i2 < t2.length; i2++) r2 += _i(`manhattan`, t2[i2], e2, n2, `kMedoids`);
  return r2;
}, Ei = function(e2) {
  var t2 = this.cy(), n2 = this.nodes(), r2 = null, i2 = gi(e2), a2 = Array(i2.k), o2 = {}, s2;
  i2.testMode ? typeof i2.testCentroids == `number` ? (i2.testCentroids, s2 = vi(n2, i2.k, i2.attributes)) : s2 = g(i2.testCentroids) === `object` ? i2.testCentroids : vi(n2, i2.k, i2.attributes) : s2 = vi(n2, i2.k, i2.attributes);
  for (var c2 = true, l2 = 0; c2 && l2 < i2.maxIterations; ) {
    for (var u2 = 0; u2 < n2.length; u2++) r2 = n2[u2], o2[r2.id()] = yi(r2, s2, i2.distance, i2.attributes, `kMeans`);
    c2 = false;
    for (var d2 = 0; d2 < i2.k; d2++) {
      var f2 = bi(d2, n2, o2);
      if (f2.length !== 0) {
        for (var p2 = i2.attributes.length, m2 = s2[d2], h2 = Array(p2), _2 = Array(p2), v2 = 0; v2 < p2; v2++) {
          _2[v2] = 0;
          for (var y2 = 0; y2 < f2.length; y2++) r2 = f2[y2], _2[v2] += i2.attributes[v2](r2);
          h2[v2] = _2[v2] / f2.length, xi(h2[v2], m2[v2], i2.sensitivityThreshold) || (c2 = true);
        }
        s2[d2] = h2, a2[d2] = t2.collection(f2);
      }
    }
    l2++;
  }
  return a2;
}, Di = function(e2) {
  var t2 = this.cy(), n2 = this.nodes(), r2 = null, i2 = gi(e2), a2 = Array(i2.k), o2, s2 = {}, c2, l2 = Array(i2.k);
  i2.testMode ? typeof i2.testCentroids == `number` || (o2 = g(i2.testCentroids) === `object` ? i2.testCentroids : wi(n2, i2.k)) : o2 = wi(n2, i2.k);
  for (var u2 = true, d2 = 0; u2 && d2 < i2.maxIterations; ) {
    for (var f2 = 0; f2 < n2.length; f2++) r2 = n2[f2], s2[r2.id()] = yi(r2, o2, i2.distance, i2.attributes, `kMedoids`);
    u2 = false;
    for (var p2 = 0; p2 < o2.length; p2++) {
      var m2 = bi(p2, n2, s2);
      if (m2.length !== 0) {
        l2[p2] = Ti(o2[p2], m2, i2.attributes);
        for (var h2 = 0; h2 < m2.length; h2++) c2 = Ti(m2[h2], m2, i2.attributes), c2 < l2[p2] && (l2[p2] = c2, o2[p2] = m2[h2], u2 = true);
        a2[p2] = t2.collection(m2);
      }
    }
    d2++;
  }
  return a2;
}, Oi = function(e2, t2, n2, r2, i2) {
  for (var a2, o2, s2 = 0; s2 < t2.length; s2++) for (var c2 = 0; c2 < e2.length; c2++) r2[s2][c2] = n2[s2][c2] ** +i2.m;
  for (var l2 = 0; l2 < e2.length; l2++) for (var u2 = 0; u2 < i2.attributes.length; u2++) {
    a2 = 0, o2 = 0;
    for (var d2 = 0; d2 < t2.length; d2++) a2 += r2[d2][l2] * i2.attributes[u2](t2[d2]), o2 += r2[d2][l2];
    e2[l2][u2] = a2 / o2;
  }
}, ki = function(e2, t2, n2, r2, i2) {
  for (var a2 = 0; a2 < e2.length; a2++) t2[a2] = e2[a2].slice();
  for (var o2, s2, c2, l2 = 2 / (i2.m - 1), u2 = 0; u2 < n2.length; u2++) for (var d2 = 0; d2 < r2.length; d2++) {
    o2 = 0;
    for (var f2 = 0; f2 < n2.length; f2++) s2 = _i(i2.distance, r2[d2], n2[u2], i2.attributes, `cmeans`), c2 = _i(i2.distance, r2[d2], n2[f2], i2.attributes, `cmeans`), o2 += (s2 / c2) ** +l2;
    e2[d2][u2] = 1 / o2;
  }
}, Ai = function(e2, t2, n2, r2) {
  for (var i2 = Array(n2.k), a2 = 0; a2 < i2.length; a2++) i2[a2] = [];
  for (var o2, s2, c2 = 0; c2 < t2.length; c2++) {
    o2 = -1 / 0, s2 = -1;
    for (var l2 = 0; l2 < t2[0].length; l2++) t2[c2][l2] > o2 && (o2 = t2[c2][l2], s2 = l2);
    i2[s2].push(e2[c2]);
  }
  for (var u2 = 0; u2 < i2.length; u2++) i2[u2] = r2.collection(i2[u2]);
  return i2;
}, ji = function(e2) {
  for (var t2 = this.cy(), n2 = this.nodes(), r2 = gi(e2), i2, a2, o2, s2 = Array(n2.length), c2, l2 = 0; l2 < n2.length; l2++) s2[l2] = Array(r2.k);
  o2 = Array(n2.length);
  for (var u2 = 0; u2 < n2.length; u2++) o2[u2] = Array(r2.k);
  for (var d2 = 0; d2 < n2.length; d2++) {
    for (var f2 = 0, p2 = 0; p2 < r2.k; p2++) o2[d2][p2] = Math.random(), f2 += o2[d2][p2];
    for (var m2 = 0; m2 < r2.k; m2++) o2[d2][m2] = o2[d2][m2] / f2;
  }
  a2 = Array(r2.k);
  for (var h2 = 0; h2 < r2.k; h2++) a2[h2] = Array(r2.attributes.length);
  c2 = Array(n2.length);
  for (var g2 = 0; g2 < n2.length; g2++) c2[g2] = Array(r2.k);
  for (var _2 = true, v2 = 0; _2 && v2 < r2.maxIterations; ) _2 = false, Oi(a2, n2, o2, c2, r2), ki(o2, s2, a2, n2, r2), Si(o2, s2, r2.sensitivityThreshold) || (_2 = true), v2++;
  return i2 = Ai(n2, o2, r2, t2), { clusters: i2, degreeOfMembership: o2 };
}, Mi = { kMeans: Ei, kMedoids: Di, fuzzyCMeans: ji, fcm: ji }, Ni = Kt({ distance: `euclidean`, linkage: `min`, mode: `threshold`, threshold: 1 / 0, addDendrogram: false, dendrogramDepth: 0, attributes: [] }), Pi = { single: `min`, complete: `max` }, Fi = function(e2) {
  var t2 = Ni(e2), n2 = Pi[t2.linkage];
  return n2 != null && (t2.linkage = n2), t2;
}, Ii = function(e2, t2, n2, r2, i2) {
  for (var a2 = 0, o2 = 1 / 0, s2, c2 = i2.attributes, l2 = function(e3, t3) {
    return mi(i2.distance, c2.length, function(t4) {
      return c2[t4](e3);
    }, function(e4) {
      return c2[e4](t3);
    }, e3, t3);
  }, u2 = 0; u2 < e2.length; u2++) {
    var d2 = e2[u2].key, f2 = n2[d2][r2[d2]];
    f2 < o2 && (a2 = d2, o2 = f2);
  }
  if (i2.mode === `threshold` && o2 >= i2.threshold || i2.mode === `dendrogram` && e2.length === 1) return false;
  var p2 = t2[a2], m2 = t2[r2[a2]], h2 = i2.mode === `dendrogram` ? { left: p2, right: m2, key: p2.key } : { value: p2.value.concat(m2.value), key: p2.key };
  e2[p2.index] = h2, e2.splice(m2.index, 1), t2[p2.key] = h2;
  for (var g2 = 0; g2 < e2.length; g2++) {
    var _2 = e2[g2];
    p2.key === _2.key ? s2 = 1 / 0 : i2.linkage === `min` ? (s2 = n2[p2.key][_2.key], n2[p2.key][_2.key] > n2[m2.key][_2.key] && (s2 = n2[m2.key][_2.key])) : i2.linkage === `max` ? (s2 = n2[p2.key][_2.key], n2[p2.key][_2.key] < n2[m2.key][_2.key] && (s2 = n2[m2.key][_2.key])) : s2 = i2.linkage === `mean` ? (n2[p2.key][_2.key] * p2.size + n2[m2.key][_2.key] * m2.size) / (p2.size + m2.size) : i2.mode === `dendrogram` ? l2(_2.value, p2.value) : l2(_2.value[0], p2.value[0]), n2[p2.key][_2.key] = n2[_2.key][p2.key] = s2;
  }
  for (var v2 = 0; v2 < e2.length; v2++) {
    var y2 = e2[v2].key;
    if (r2[y2] === p2.key || r2[y2] === m2.key) {
      for (var b2 = y2, x2 = 0; x2 < e2.length; x2++) {
        var S2 = e2[x2].key;
        n2[y2][S2] < n2[y2][b2] && (b2 = S2);
      }
      r2[y2] = b2;
    }
    e2[v2].index = v2;
  }
  return p2.key = m2.key = p2.index = m2.index = null, true;
}, Li = function(e2, t2, n2) {
  e2 && (e2.value ? t2.push(e2.value) : (e2.left && Li(e2.left, t2), e2.right && Li(e2.right, t2)));
}, Ri = function(e2, t2) {
  if (!e2) return ``;
  if (e2.left && e2.right) {
    var n2 = Ri(e2.left, t2), r2 = Ri(e2.right, t2), i2 = t2.add({ group: `nodes`, data: { id: n2 + `,` + r2 } });
    return t2.add({ group: `edges`, data: { source: n2, target: i2.id() } }), t2.add({ group: `edges`, data: { source: r2, target: i2.id() } }), i2.id();
  } else if (e2.value) return e2.value.id();
}, zi = function(e2, t2, n2) {
  if (!e2) return [];
  var r2 = [], i2 = [], a2 = [];
  return t2 === 0 ? (e2.left && Li(e2.left, r2), e2.right && Li(e2.right, i2), a2 = r2.concat(i2), [n2.collection(a2)]) : t2 === 1 ? e2.value ? [n2.collection(e2.value)] : (e2.left && Li(e2.left, r2), e2.right && Li(e2.right, i2), [n2.collection(r2), n2.collection(i2)]) : e2.value ? [n2.collection(e2.value)] : (e2.left && (r2 = zi(e2.left, t2 - 1, n2)), e2.right && (i2 = zi(e2.right, t2 - 1, n2)), r2.concat(i2));
}, Bi = function(e2) {
  for (var t2 = this.cy(), n2 = this.nodes(), r2 = Fi(e2), i2 = r2.attributes, a2 = function(e3, t3) {
    return mi(r2.distance, i2.length, function(t4) {
      return i2[t4](e3);
    }, function(e4) {
      return i2[e4](t3);
    }, e3, t3);
  }, o2 = [], s2 = [], c2 = [], l2 = [], u2 = 0; u2 < n2.length; u2++) {
    var d2 = { value: r2.mode === `dendrogram` ? n2[u2] : [n2[u2]], key: u2, index: u2 };
    o2[u2] = d2, l2[u2] = d2, s2[u2] = [], c2[u2] = 0;
  }
  for (var f2 = 0; f2 < o2.length; f2++) for (var p2 = 0; p2 <= f2; p2++) {
    var m2 = void 0;
    m2 = r2.mode === `dendrogram` ? f2 === p2 ? 1 / 0 : a2(o2[f2].value, o2[p2].value) : f2 === p2 ? 1 / 0 : a2(o2[f2].value[0], o2[p2].value[0]), s2[f2][p2] = m2, s2[p2][f2] = m2, m2 < s2[f2][c2[f2]] && (c2[f2] = p2);
  }
  for (var h2 = Ii(o2, l2, s2, c2, r2); h2; ) h2 = Ii(o2, l2, s2, c2, r2);
  var g2;
  return r2.mode === `dendrogram` ? (g2 = zi(o2[0], r2.dendrogramDepth, t2), r2.addDendrogram && Ri(o2[0], t2)) : (g2 = Array(o2.length), o2.forEach(function(e3, n3) {
    e3.key = e3.index = null, g2[n3] = t2.collection(e3.value);
  })), g2;
}, Vi = { hierarchicalClustering: Bi, hca: Bi }, Hi = Kt({ distance: `euclidean`, preference: `median`, damping: 0.8, maxIterations: 1e3, minIterations: 100, attributes: [] }), Ui = function(e2) {
  var t2 = e2.damping, n2 = e2.preference;
  0.5 <= t2 && t2 < 1 || Lt(`Damping must range on [0.5, 1).  Got: ${t2}`);
  var r2 = [`median`, `mean`, `min`, `max`];
  return r2.some(function(e3) {
    return e3 === n2;
  }) || A(n2) || Lt(`Preference must be one of [${r2.map(function(e3) {
    return `'${e3}'`;
  }).join(`, `)}] or a number.  Got: ${n2}`), Hi(e2);
}, Wi = function(e2, t2, n2, r2) {
  var i2 = function(e3, t3) {
    return r2[t3](e3);
  };
  return -mi(e2, r2.length, function(e3) {
    return i2(t2, e3);
  }, function(e3) {
    return i2(n2, e3);
  }, t2, n2);
}, Gi = function(e2, t2) {
  var n2 = null;
  return n2 = t2 === `median` ? Fn(e2) : t2 === `mean` ? Pn(e2) : t2 === `min` ? Mn(e2) : t2 === `max` ? Nn(e2) : t2, n2;
}, Ki = function(e2, t2, n2) {
  for (var r2 = [], i2 = 0; i2 < e2; i2++) t2[i2 * e2 + i2] + n2[i2 * e2 + i2] > 0 && r2.push(i2);
  return r2;
}, qi = function(e2, t2, n2) {
  for (var r2 = [], i2 = 0; i2 < e2; i2++) {
    for (var a2 = -1, o2 = -1 / 0, s2 = 0; s2 < n2.length; s2++) {
      var c2 = n2[s2];
      t2[i2 * e2 + c2] > o2 && (a2 = c2, o2 = t2[i2 * e2 + c2]);
    }
    a2 > 0 && r2.push(a2);
  }
  for (var l2 = 0; l2 < n2.length; l2++) r2[n2[l2]] = n2[l2];
  return r2;
}, Ji = function(e2, t2, n2) {
  for (var r2 = qi(e2, t2, n2), i2 = 0; i2 < n2.length; i2++) {
    for (var a2 = [], o2 = 0; o2 < r2.length; o2++) r2[o2] === n2[i2] && a2.push(o2);
    for (var s2 = -1, c2 = -1 / 0, l2 = 0; l2 < a2.length; l2++) {
      for (var u2 = 0, d2 = 0; d2 < a2.length; d2++) u2 += t2[a2[d2] * e2 + a2[l2]];
      u2 > c2 && (s2 = l2, c2 = u2);
    }
    n2[i2] = a2[s2];
  }
  return r2 = qi(e2, t2, n2), r2;
}, Yi = function(e2) {
  for (var t2 = this.cy(), n2 = this.nodes(), r2 = Ui(e2), i2 = {}, a2 = 0; a2 < n2.length; a2++) i2[n2[a2].id()] = a2;
  for (var o2 = n2.length, s2 = o2 * o2, c2 = Array(s2), l2, u2, d2, f2 = 0; f2 < s2; f2++) c2[f2] = -1 / 0;
  for (var p2 = 0; p2 < o2; p2++) for (var m2 = 0; m2 < o2; m2++) p2 !== m2 && (c2[p2 * o2 + m2] = Wi(r2.distance, n2[p2], n2[m2], r2.attributes));
  l2 = Gi(c2, r2.preference);
  for (var h2 = 0; h2 < o2; h2++) c2[h2 * o2 + h2] = l2;
  u2 = Array(s2);
  for (var g2 = 0; g2 < s2; g2++) u2[g2] = 0;
  d2 = Array(s2);
  for (var _2 = 0; _2 < s2; _2++) d2[_2] = 0;
  for (var v2 = Array(o2), y2 = Array(o2), b2 = Array(o2), x2 = 0; x2 < o2; x2++) v2[x2] = 0, y2[x2] = 0, b2[x2] = 0;
  for (var S2 = Array(o2 * r2.minIterations), C2 = 0; C2 < S2.length; C2++) S2[C2] = 0;
  var w2;
  for (w2 = 0; w2 < r2.maxIterations; w2++) {
    for (var T2 = 0; T2 < o2; T2++) {
      for (var E2 = -1 / 0, D2 = -1 / 0, O2 = -1, k2 = 0, A2 = 0; A2 < o2; A2++) v2[A2] = u2[T2 * o2 + A2], k2 = d2[T2 * o2 + A2] + c2[T2 * o2 + A2], k2 >= E2 ? (D2 = E2, E2 = k2, O2 = A2) : k2 > D2 && (D2 = k2);
      for (var j2 = 0; j2 < o2; j2++) u2[T2 * o2 + j2] = (1 - r2.damping) * (c2[T2 * o2 + j2] - E2) + r2.damping * v2[j2];
      u2[T2 * o2 + O2] = (1 - r2.damping) * (c2[T2 * o2 + O2] - D2) + r2.damping * v2[O2];
    }
    for (var M2 = 0; M2 < o2; M2++) {
      for (var N2 = 0, P2 = 0; P2 < o2; P2++) v2[P2] = d2[P2 * o2 + M2], y2[P2] = Math.max(0, u2[P2 * o2 + M2]), N2 += y2[P2];
      N2 -= y2[M2], y2[M2] = u2[M2 * o2 + M2], N2 += y2[M2];
      for (var F2 = 0; F2 < o2; F2++) d2[F2 * o2 + M2] = (1 - r2.damping) * Math.min(0, N2 - y2[F2]) + r2.damping * v2[F2];
      d2[M2 * o2 + M2] = (1 - r2.damping) * (N2 - y2[M2]) + r2.damping * v2[M2];
    }
    for (var I2 = 0, L2 = 0; L2 < o2; L2++) {
      var R2 = d2[L2 * o2 + L2] + u2[L2 * o2 + L2] > 0 ? 1 : 0;
      S2[w2 % r2.minIterations * o2 + L2] = R2, I2 += R2;
    }
    if (I2 > 0 && (w2 >= r2.minIterations - 1 || w2 == r2.maxIterations - 1)) {
      for (var z2 = 0, B2 = 0; B2 < o2; B2++) {
        b2[B2] = 0;
        for (var V2 = 0; V2 < r2.minIterations; V2++) b2[B2] += S2[V2 * o2 + B2];
        (b2[B2] === 0 || b2[B2] === r2.minIterations) && z2++;
      }
      if (z2 === o2) break;
    }
  }
  for (var H2 = Ki(o2, u2, d2), U2 = Ji(o2, c2, H2), W2 = {}, G2 = 0; G2 < H2.length; G2++) W2[H2[G2]] = [];
  for (var K2 = 0; K2 < n2.length; K2++) {
    var q2 = U2[i2[n2[K2].id()]];
    q2 != null && W2[q2].push(n2[K2]);
  }
  for (var J2 = Array(H2.length), ee2 = 0; ee2 < H2.length; ee2++) J2[ee2] = t2.collection(W2[H2[ee2]]);
  return J2;
}, Xi = { affinityPropagation: Yi, ap: Yi }, Zi = Kt({ root: void 0, directed: false }), Qi = { hierholzer: function(e2) {
  if (!O(e2)) {
    var t2 = arguments;
    e2 = { root: t2[0], directed: t2[1] };
  }
  var n2 = Zi(e2), r2 = n2.root, i2 = n2.directed, a2 = this, o2 = false, s2, c2, l2;
  r2 && (l2 = T(r2) ? this.filter(r2)[0].id() : r2[0].id());
  var u2 = {}, d2 = {};
  i2 ? a2.forEach(function(e3) {
    var t3 = e3.id();
    if (e3.isNode()) {
      var n3 = e3.indegree(true), r3 = e3.outdegree(true), i3 = n3 - r3, a3 = r3 - n3;
      i3 == 1 ? s2 ? o2 = true : s2 = t3 : a3 == 1 ? c2 ? o2 = true : c2 = t3 : (a3 > 1 || i3 > 1) && (o2 = true), u2[t3] = [], e3.outgoers().forEach(function(e4) {
        e4.isEdge() && u2[t3].push(e4.id());
      });
    } else d2[t3] = [void 0, e3.target().id()];
  }) : a2.forEach(function(e3) {
    var t3 = e3.id();
    e3.isNode() ? (e3.degree(true) % 2 && (s2 ? c2 ? o2 = true : c2 = t3 : s2 = t3), u2[t3] = [], e3.connectedEdges().forEach(function(e4) {
      return u2[t3].push(e4.id());
    })) : d2[t3] = [e3.source().id(), e3.target().id()];
  });
  var f2 = { found: false, trail: void 0 };
  if (o2) return f2;
  if (c2 && s2) if (i2) {
    if (l2 && c2 != l2) return f2;
    l2 = c2;
  } else if (l2 && c2 != l2 && s2 != l2) return f2;
  else l2 || (l2 = c2);
  else l2 || (l2 = a2[0].id());
  var p2 = function(e3) {
    for (var t3 = e3, n3 = [e3], r3, a3, o3; u2[t3].length; ) r3 = u2[t3].shift(), a3 = d2[r3][0], o3 = d2[r3][1], t3 == o3 ? !i2 && t3 != a3 && (u2[a3] = u2[a3].filter(function(e4) {
      return e4 != r3;
    }), t3 = a3) : (u2[o3] = u2[o3].filter(function(e4) {
      return e4 != r3;
    }), t3 = o3), n3.unshift(r3), n3.unshift(t3);
    return n3;
  }, m2 = [], h2 = [];
  for (h2 = p2(l2); h2.length != 1; ) u2[h2[0]].length == 0 ? (m2.unshift(a2.getElementById(h2.shift())), m2.unshift(a2.getElementById(h2.shift()))) : h2 = p2(h2.shift()).concat(h2);
  for (var g2 in m2.unshift(a2.getElementById(h2.shift())), u2) if (u2[g2].length) return f2;
  return f2.found = true, f2.trail = this.spawn(m2, true), f2;
} }, $i = function() {
  var e2 = this, t2 = {}, n2 = 0, r2 = 0, i2 = [], a2 = [], o2 = {}, s2 = function(n3, r3) {
    for (var o3 = a2.length - 1, s3 = [], c3 = e2.spawn(); a2[o3].x != n3 || a2[o3].y != r3; ) s3.push(a2.pop().edge), o3--;
    s3.push(a2.pop().edge), s3.forEach(function(n4) {
      var r4 = n4.connectedNodes().intersection(e2);
      c3.merge(n4), r4.forEach(function(n5) {
        var r5 = n5.id(), i3 = n5.connectedEdges().intersection(e2);
        c3.merge(n5), t2[r5].cutVertex ? c3.merge(i3.filter(function(e3) {
          return e3.isLoop();
        })) : c3.merge(i3);
      });
    }), i2.push(c3);
  }, c2 = function(l3, u2, d2) {
    l3 === d2 && (r2 += 1), t2[u2] = { id: n2, low: n2++, cutVertex: false };
    var f2 = e2.getElementById(u2).connectedEdges().intersection(e2);
    if (f2.size() === 0) i2.push(e2.spawn(e2.getElementById(u2)));
    else {
      var p2, m2, h2, g2;
      f2.forEach(function(e3) {
        p2 = e3.source().id(), m2 = e3.target().id(), h2 = p2 === u2 ? m2 : p2, h2 !== d2 && (g2 = e3.id(), o2[g2] || (o2[g2] = true, a2.push({ x: u2, y: h2, edge: e3 })), h2 in t2 ? t2[u2].low = Math.min(t2[u2].low, t2[h2].id) : (c2(l3, h2, u2), t2[u2].low = Math.min(t2[u2].low, t2[h2].low), t2[u2].id <= t2[h2].low && (t2[u2].cutVertex = true, s2(u2, h2))));
      });
    }
  };
  e2.forEach(function(e3) {
    if (e3.isNode()) {
      var n3 = e3.id();
      n3 in t2 || (r2 = 0, c2(n3, n3), t2[n3].cutVertex = r2 > 1);
    }
  });
  var l2 = Object.keys(t2).filter(function(e3) {
    return t2[e3].cutVertex;
  }).map(function(t3) {
    return e2.getElementById(t3);
  });
  return { cut: e2.spawn(l2), components: i2 };
}, ea = { hopcroftTarjanBiconnected: $i, htbc: $i, htb: $i, hopcroftTarjanBiconnectedComponents: $i }, ta = function() {
  var e2 = this, t2 = {}, n2 = 0, r2 = [], i2 = [], a2 = e2.spawn(e2), o2 = function(s2) {
    if (i2.push(s2), t2[s2] = { index: n2, low: n2++, explored: false }, e2.getElementById(s2).connectedEdges().intersection(e2).forEach(function(e3) {
      var n3 = e3.target().id();
      n3 !== s2 && (n3 in t2 || o2(n3), t2[n3].explored || (t2[s2].low = Math.min(t2[s2].low, t2[n3].low)));
    }), t2[s2].index === t2[s2].low) {
      for (var c2 = e2.spawn(); ; ) {
        var l2 = i2.pop();
        if (c2.merge(e2.getElementById(l2)), t2[l2].low = t2[s2].index, t2[l2].explored = true, l2 === s2) break;
      }
      var u2 = c2.edgesWith(c2), d2 = c2.merge(u2);
      r2.push(d2), a2 = a2.difference(d2);
    }
  };
  return e2.forEach(function(e3) {
    if (e3.isNode()) {
      var n3 = e3.id();
      n3 in t2 || o2(n3);
    }
  }), { cut: a2, components: r2 };
}, na = { tarjanStronglyConnected: ta, tsc: ta, tscc: ta, tarjanStronglyConnectedComponents: ta }, ra = {};
[on, gn, _n, yn, xn, Cn, Dn, zr, Vr, Ur, Gr, ai, Mi, Vi, Xi, Qi, ea, na].forEach(function(e2) {
  X(ra, e2);
});
var ia = 0, aa = 1, oa = 2, sa = function(e2) {
  if (!(this instanceof sa)) return new sa(e2);
  this.id = `Thenable/1.0.7`, this.state = ia, this.fulfillValue = void 0, this.rejectReason = void 0, this.onFulfilled = [], this.onRejected = [], this.proxy = { then: this.then.bind(this) }, typeof e2 == `function` && e2.call(this, this.fulfill.bind(this), this.reject.bind(this));
};
sa.prototype = { fulfill: function(e2) {
  return ca(this, aa, `fulfillValue`, e2);
}, reject: function(e2) {
  return ca(this, oa, `rejectReason`, e2);
}, then: function(e2, t2) {
  var n2 = this, r2 = new sa();
  return n2.onFulfilled.push(da(e2, r2, `fulfill`)), n2.onRejected.push(da(t2, r2, `reject`)), la(n2), r2.proxy;
} };
var ca = function(e2, t2, n2, r2) {
  return e2.state === ia && (e2.state = t2, e2[n2] = r2, la(e2)), e2;
}, la = function(e2) {
  e2.state === aa ? ua(e2, `onFulfilled`, e2.fulfillValue) : e2.state === oa && ua(e2, `onRejected`, e2.rejectReason);
}, ua = function(e2, t2, n2) {
  if (e2[t2].length !== 0) {
    var r2 = e2[t2];
    e2[t2] = [];
    var i2 = function() {
      for (var e3 = 0; e3 < r2.length; e3++) r2[e3](n2);
    };
    typeof setImmediate == `function` ? setImmediate(i2) : setTimeout(i2, 0);
  }
}, da = function(e2, t2, n2) {
  return function(r2) {
    if (typeof e2 != `function`) t2[n2].call(t2, r2);
    else {
      var i2;
      try {
        i2 = e2(r2);
      } catch (e3) {
        t2.reject(e3);
        return;
      }
      fa(t2, i2);
    }
  };
}, fa = function(e2, t2) {
  if (e2 === t2 || e2.proxy === t2) {
    e2.reject(TypeError(`cannot resolve promise with itself`));
    return;
  }
  var n2;
  if (g(t2) === `object` && t2 !== null || typeof t2 == `function`) try {
    n2 = t2.then;
  } catch (t3) {
    e2.reject(t3);
    return;
  }
  if (typeof n2 == `function`) {
    var r2 = false;
    try {
      n2.call(t2, function(n3) {
        r2 || (r2 = true, n3 === t2 ? e2.reject(TypeError(`circular thenable chain`)) : fa(e2, n3));
      }, function(t3) {
        r2 || (r2 = true, e2.reject(t3));
      });
    } catch (t3) {
      r2 || e2.reject(t3);
    }
    return;
  }
  e2.fulfill(t2);
};
sa.all = function(e2) {
  return new sa(function(t2, n2) {
    for (var r2 = Array(e2.length), i2 = 0, a2 = function(n3, a3) {
      r2[n3] = a3, i2++, i2 === e2.length && t2(r2);
    }, o2 = 0; o2 < e2.length; o2++) (function(t3) {
      var r3 = e2[t3];
      r3 != null && r3.then != null ? r3.then(function(e3) {
        a2(t3, e3);
      }, function(e3) {
        n2(e3);
      }) : a2(t3, r3);
    })(o2);
  });
}, sa.resolve = function(e2) {
  return new sa(function(t2, n2) {
    t2(e2);
  });
}, sa.reject = function(e2) {
  return new sa(function(t2, n2) {
    n2(e2);
  });
};
var pa = typeof Promise < `u` ? Promise : sa, ma = function(e2, t2, n2) {
  var r2 = I(e2), i2 = !r2, a2 = this._private = X({ duration: 1e3 }, t2, n2);
  if (a2.target = e2, a2.style = a2.style || a2.css, a2.started = false, a2.playing = false, a2.hooked = false, a2.applying = false, a2.progress = 0, a2.completes = [], a2.frames = [], a2.complete && E(a2.complete) && a2.completes.push(a2.complete), i2) {
    var o2 = e2.position();
    a2.startPosition = a2.startPosition || { x: o2.x, y: o2.y }, a2.startStyle = a2.startStyle || e2.cy().style().getAnimationStartStyle(e2, a2.style);
  }
  if (r2) {
    var s2 = e2.pan();
    a2.startPan = { x: s2.x, y: s2.y }, a2.startZoom = e2.zoom();
  }
  this.length = 1, this[0] = this;
}, ha = ma.prototype;
X(ha, { instanceString: function() {
  return `animation`;
}, hook: function() {
  var e2 = this._private;
  if (!e2.hooked) {
    var t2, n2 = e2.target._private.animation;
    t2 = e2.queue ? n2.queue : n2.current, t2.push(this), N(e2.target) && e2.target.cy().addToAnimationPool(e2.target), e2.hooked = true;
  }
  return this;
}, play: function() {
  var e2 = this._private;
  return e2.progress === 1 && (e2.progress = 0), e2.playing = true, e2.started = false, e2.stopped = false, this.hook(), this;
}, playing: function() {
  return this._private.playing;
}, apply: function() {
  var e2 = this._private;
  return e2.applying = true, e2.started = false, e2.stopped = false, this.hook(), this;
}, applying: function() {
  return this._private.applying;
}, pause: function() {
  var e2 = this._private;
  return e2.playing = false, e2.started = false, this;
}, stop: function() {
  var e2 = this._private;
  return e2.playing = false, e2.started = false, e2.stopped = true, this;
}, rewind: function() {
  return this.progress(0);
}, fastforward: function() {
  return this.progress(1);
}, time: function(e2) {
  var t2 = this._private;
  return e2 === void 0 ? t2.progress * t2.duration : this.progress(e2 / t2.duration);
}, progress: function(e2) {
  var t2 = this._private, n2 = t2.playing;
  return e2 === void 0 ? t2.progress : (n2 && this.pause(), t2.progress = e2, t2.started = false, n2 && this.play(), this);
}, completed: function() {
  return this._private.progress === 1;
}, reverse: function() {
  var e2 = this._private, t2 = e2.playing;
  t2 && this.pause(), e2.progress = 1 - e2.progress, e2.started = false;
  var n2 = function(t3, n3) {
    var r3 = e2[t3];
    r3 != null && (e2[t3] = e2[n3], e2[n3] = r3);
  };
  if (n2(`zoom`, `startZoom`), n2(`pan`, `startPan`), n2(`position`, `startPosition`), e2.style) for (var r2 = 0; r2 < e2.style.length; r2++) {
    var i2 = e2.style[r2], a2 = i2.name, o2 = e2.startStyle[a2];
    e2.startStyle[a2] = i2, e2.style[r2] = o2;
  }
  return t2 && this.play(), this;
}, promise: function(e2) {
  var t2 = this._private, n2;
  switch (e2) {
    case `frame`:
      n2 = t2.frames;
      break;
    default:
    case `complete`:
    case `completed`:
      n2 = t2.completes;
  }
  return new pa(function(e3, t3) {
    n2.push(function() {
      e3();
    });
  });
} }), ha.complete = ha.completed, ha.run = ha.play, ha.running = ha.playing;
var ga = { animated: function() {
  return function() {
    var e2 = this, t2 = e2.length === void 0 ? [e2] : e2;
    if (!(this._private.cy || this).styleEnabled()) return false;
    var n2 = t2[0];
    if (n2) return n2._private.animation.current.length > 0;
  };
}, clearQueue: function() {
  return function() {
    var e2 = this, t2 = e2.length === void 0 ? [e2] : e2;
    if (!(this._private.cy || this).styleEnabled()) return this;
    for (var n2 = 0; n2 < t2.length; n2++) {
      var r2 = t2[n2];
      r2._private.animation.queue = [];
    }
    return this;
  };
}, delay: function() {
  return function(e2, t2) {
    return (this._private.cy || this).styleEnabled() ? this.animate({ delay: e2, duration: e2, complete: t2 }) : this;
  };
}, delayAnimation: function() {
  return function(e2, t2) {
    return (this._private.cy || this).styleEnabled() ? this.animation({ delay: e2, duration: e2, complete: t2 }) : this;
  };
}, animation: function() {
  return function(e2, t2) {
    var n2 = this, r2 = n2.length !== void 0, i2 = r2 ? n2 : [n2], a2 = this._private.cy || this, o2 = !r2, s2 = !o2;
    if (!a2.styleEnabled()) return this;
    var c2 = a2.style();
    if (e2 = X({}, e2, t2), Object.keys(e2).length === 0) return new ma(i2[0], e2);
    switch (e2.duration === void 0 && (e2.duration = 400), e2.duration) {
      case `slow`:
        e2.duration = 600;
        break;
      case `fast`:
        e2.duration = 200;
        break;
    }
    if (s2 && (e2.style = c2.getPropsList(e2.style || e2.css), e2.css = void 0), s2 && e2.renderedPosition != null) {
      var l2 = e2.renderedPosition, u2 = a2.pan();
      e2.position = An(l2, a2.zoom(), u2);
    }
    if (o2 && e2.panBy != null) {
      var d2 = e2.panBy, f2 = a2.pan();
      e2.pan = { x: f2.x + d2.x, y: f2.y + d2.y };
    }
    var p2 = e2.center || e2.centre;
    if (o2 && p2 != null) {
      var m2 = a2.getCenterPan(p2.eles, e2.zoom);
      m2 != null && (e2.pan = m2);
    }
    if (o2 && e2.fit != null) {
      var h2 = e2.fit, g2 = a2.getFitViewport(h2.eles || h2.boundingBox, h2.padding);
      g2 != null && (e2.pan = g2.pan, e2.zoom = g2.zoom);
    }
    if (o2 && O(e2.zoom)) {
      var _2 = a2.getZoomedViewport(e2.zoom);
      _2 == null ? e2.zoom = null : (_2.zoomed && (e2.zoom = _2.zoom), _2.panned && (e2.pan = _2.pan));
    }
    return new ma(i2[0], e2);
  };
}, animate: function() {
  return function(e2, t2) {
    var n2 = this, r2 = n2.length === void 0 ? [n2] : n2;
    if (!(this._private.cy || this).styleEnabled()) return this;
    t2 && (e2 = X({}, e2, t2));
    for (var i2 = 0; i2 < r2.length; i2++) {
      var a2 = r2[i2], o2 = a2.animated() && (e2.queue === void 0 || e2.queue);
      a2.animation(e2, o2 ? { queue: true } : void 0).play();
    }
    return this;
  };
}, stop: function() {
  return function(e2, t2) {
    var n2 = this, r2 = n2.length === void 0 ? [n2] : n2, i2 = this._private.cy || this;
    if (!i2.styleEnabled()) return this;
    for (var a2 = 0; a2 < r2.length; a2++) {
      for (var o2 = r2[a2]._private, s2 = o2.animation.current, c2 = 0; c2 < s2.length; c2++) {
        var l2 = s2[c2]._private;
        t2 && (l2.duration = 0);
      }
      e2 && (o2.animation.queue = []), t2 || (o2.animation.current = []);
    }
    return i2.notify(`draw`), this;
  };
} }, _a, va;
function ya() {
  return va ? _a : (va = 1, _a = Array.isArray, _a);
}
var ba, xa;
function Sa() {
  if (xa) return ba;
  xa = 1;
  var e2 = ya(), t2 = et(), n2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r2 = /^\w*$/;
  function i2(i3, a2) {
    if (e2(i3)) return false;
    var o2 = typeof i3;
    return o2 == `number` || o2 == `symbol` || o2 == `boolean` || i3 == null || t2(i3) ? true : r2.test(i3) || !n2.test(i3) || a2 != null && i3 in Object(a2);
  }
  return ba = i2, ba;
}
var Ca, wa;
function Ta() {
  if (wa) return Ca;
  wa = 1;
  var e2 = Je(), t2 = xe(), n2 = `[object AsyncFunction]`, r2 = `[object Function]`, i2 = `[object GeneratorFunction]`, a2 = `[object Proxy]`;
  function o2(o3) {
    if (!t2(o3)) return false;
    var s2 = e2(o3);
    return s2 == r2 || s2 == i2 || s2 == n2 || s2 == a2;
  }
  return Ca = o2, Ca;
}
var Ea, Da;
function Oa() {
  return Da ? Ea : (Da = 1, Ea = De()[`__core-js_shared__`], Ea);
}
var ka, Aa;
function ja() {
  if (Aa) return ka;
  Aa = 1;
  var e2 = Oa(), t2 = (function() {
    var t3 = /[^.]+$/.exec(e2 && e2.keys && e2.keys.IE_PROTO || ``);
    return t3 ? `Symbol(src)_1.` + t3 : ``;
  })();
  function n2(e3) {
    return !!t2 && t2 in e3;
  }
  return ka = n2, ka;
}
var Ma, Na;
function Pa() {
  if (Na) return Ma;
  Na = 1;
  var e2 = Function.prototype.toString;
  function t2(t3) {
    if (t3 != null) {
      try {
        return e2.call(t3);
      } catch {
      }
      try {
        return t3 + ``;
      } catch {
      }
    }
    return ``;
  }
  return Ma = t2, Ma;
}
var Fa, Ia;
function La() {
  if (Ia) return Fa;
  Ia = 1;
  var e2 = Ta(), t2 = ja(), n2 = xe(), r2 = Pa(), i2 = /[\\^$.*+?()[\]{}|]/g, a2 = /^\[object .+?Constructor\]$/, o2 = Function.prototype, s2 = Object.prototype, c2 = o2.toString, l2 = s2.hasOwnProperty, u2 = RegExp(`^` + c2.call(l2).replace(i2, `\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, `$1.*?`) + `$`);
  function d2(i3) {
    return !n2(i3) || t2(i3) ? false : (e2(i3) ? u2 : a2).test(r2(i3));
  }
  return Fa = d2, Fa;
}
var Ra, za;
function Ba() {
  if (za) return Ra;
  za = 1;
  function e2(e3, t2) {
    return e3 == null ? void 0 : e3[t2];
  }
  return Ra = e2, Ra;
}
var Va, Ha;
function Ua() {
  if (Ha) return Va;
  Ha = 1;
  var e2 = La(), t2 = Ba();
  function n2(n3, r2) {
    var i2 = t2(n3, r2);
    return e2(i2) ? i2 : void 0;
  }
  return Va = n2, Va;
}
var Wa, Ga;
function Ka() {
  return Ga ? Wa : (Ga = 1, Wa = Ua()(Object, `create`), Wa);
}
var qa, Ja;
function Ya() {
  if (Ja) return qa;
  Ja = 1;
  var e2 = Ka();
  function t2() {
    this.__data__ = e2 ? e2(null) : {}, this.size = 0;
  }
  return qa = t2, qa;
}
var Xa, Za;
function Qa() {
  if (Za) return Xa;
  Za = 1;
  function e2(e3) {
    var t2 = this.has(e3) && delete this.__data__[e3];
    return this.size -= t2 ? 1 : 0, t2;
  }
  return Xa = e2, Xa;
}
var $a, eo;
function to() {
  if (eo) return $a;
  eo = 1;
  var e2 = Ka(), t2 = `__lodash_hash_undefined__`, n2 = Object.prototype.hasOwnProperty;
  function r2(r3) {
    var i2 = this.__data__;
    if (e2) {
      var a2 = i2[r3];
      return a2 === t2 ? void 0 : a2;
    }
    return n2.call(i2, r3) ? i2[r3] : void 0;
  }
  return $a = r2, $a;
}
var no, ro;
function io() {
  if (ro) return no;
  ro = 1;
  var e2 = Ka(), t2 = Object.prototype.hasOwnProperty;
  function n2(n3) {
    var r2 = this.__data__;
    return e2 ? r2[n3] !== void 0 : t2.call(r2, n3);
  }
  return no = n2, no;
}
var ao, oo;
function so() {
  if (oo) return ao;
  oo = 1;
  var e2 = Ka(), t2 = `__lodash_hash_undefined__`;
  function n2(n3, r2) {
    var i2 = this.__data__;
    return this.size += this.has(n3) ? 0 : 1, i2[n3] = e2 && r2 === void 0 ? t2 : r2, this;
  }
  return ao = n2, ao;
}
var co, lo;
function uo() {
  if (lo) return co;
  lo = 1;
  var e2 = Ya(), t2 = Qa(), n2 = to(), r2 = io(), i2 = so();
  function a2(e3) {
    var t3 = -1, n3 = e3 == null ? 0 : e3.length;
    for (this.clear(); ++t3 < n3; ) {
      var r3 = e3[t3];
      this.set(r3[0], r3[1]);
    }
  }
  return a2.prototype.clear = e2, a2.prototype.delete = t2, a2.prototype.get = n2, a2.prototype.has = r2, a2.prototype.set = i2, co = a2, co;
}
var fo, po;
function mo() {
  if (po) return fo;
  po = 1;
  function e2() {
    this.__data__ = [], this.size = 0;
  }
  return fo = e2, fo;
}
var ho, go;
function _o() {
  if (go) return ho;
  go = 1;
  function e2(e3, t2) {
    return e3 === t2 || e3 !== e3 && t2 !== t2;
  }
  return ho = e2, ho;
}
var vo, yo;
function bo() {
  if (yo) return vo;
  yo = 1;
  var e2 = _o();
  function t2(t3, n2) {
    for (var r2 = t3.length; r2--; ) if (e2(t3[r2][0], n2)) return r2;
    return -1;
  }
  return vo = t2, vo;
}
var xo, So;
function Co() {
  if (So) return xo;
  So = 1;
  var e2 = bo(), t2 = Array.prototype.splice;
  function n2(n3) {
    var r2 = this.__data__, i2 = e2(r2, n3);
    return i2 < 0 ? false : (i2 == r2.length - 1 ? r2.pop() : t2.call(r2, i2, 1), --this.size, true);
  }
  return xo = n2, xo;
}
var wo, To;
function Eo() {
  if (To) return wo;
  To = 1;
  var e2 = bo();
  function t2(t3) {
    var n2 = this.__data__, r2 = e2(n2, t3);
    return r2 < 0 ? void 0 : n2[r2][1];
  }
  return wo = t2, wo;
}
var Do, Oo;
function ko() {
  if (Oo) return Do;
  Oo = 1;
  var e2 = bo();
  function t2(t3) {
    return e2(this.__data__, t3) > -1;
  }
  return Do = t2, Do;
}
var Ao, jo;
function Mo() {
  if (jo) return Ao;
  jo = 1;
  var e2 = bo();
  function t2(t3, n2) {
    var r2 = this.__data__, i2 = e2(r2, t3);
    return i2 < 0 ? (++this.size, r2.push([t3, n2])) : r2[i2][1] = n2, this;
  }
  return Ao = t2, Ao;
}
var No, Po;
function Fo() {
  if (Po) return No;
  Po = 1;
  var e2 = mo(), t2 = Co(), n2 = Eo(), r2 = ko(), i2 = Mo();
  function a2(e3) {
    var t3 = -1, n3 = e3 == null ? 0 : e3.length;
    for (this.clear(); ++t3 < n3; ) {
      var r3 = e3[t3];
      this.set(r3[0], r3[1]);
    }
  }
  return a2.prototype.clear = e2, a2.prototype.delete = t2, a2.prototype.get = n2, a2.prototype.has = r2, a2.prototype.set = i2, No = a2, No;
}
var Io, Lo;
function Ro() {
  return Lo ? Io : (Lo = 1, Io = Ua()(De(), `Map`), Io);
}
var zo, Bo;
function Vo() {
  if (Bo) return zo;
  Bo = 1;
  var e2 = uo(), t2 = Fo(), n2 = Ro();
  function r2() {
    this.size = 0, this.__data__ = { hash: new e2(), map: new (n2 || t2)(), string: new e2() };
  }
  return zo = r2, zo;
}
var Ho, Uo;
function Wo() {
  if (Uo) return Ho;
  Uo = 1;
  function e2(e3) {
    var t2 = typeof e3;
    return t2 == `string` || t2 == `number` || t2 == `symbol` || t2 == `boolean` ? e3 !== `__proto__` : e3 === null;
  }
  return Ho = e2, Ho;
}
var Go, Ko;
function qo() {
  if (Ko) return Go;
  Ko = 1;
  var e2 = Wo();
  function t2(t3, n2) {
    var r2 = t3.__data__;
    return e2(n2) ? r2[typeof n2 == `string` ? `string` : `hash`] : r2.map;
  }
  return Go = t2, Go;
}
var Jo, Yo;
function Xo() {
  if (Yo) return Jo;
  Yo = 1;
  var e2 = qo();
  function t2(t3) {
    var n2 = e2(this, t3).delete(t3);
    return this.size -= n2 ? 1 : 0, n2;
  }
  return Jo = t2, Jo;
}
var Zo, Qo;
function $o() {
  if (Qo) return Zo;
  Qo = 1;
  var e2 = qo();
  function t2(t3) {
    return e2(this, t3).get(t3);
  }
  return Zo = t2, Zo;
}
var es, ts;
function ns() {
  if (ts) return es;
  ts = 1;
  var e2 = qo();
  function t2(t3) {
    return e2(this, t3).has(t3);
  }
  return es = t2, es;
}
var rs, is;
function as() {
  if (is) return rs;
  is = 1;
  var e2 = qo();
  function t2(t3, n2) {
    var r2 = e2(this, t3), i2 = r2.size;
    return r2.set(t3, n2), this.size += r2.size == i2 ? 0 : 1, this;
  }
  return rs = t2, rs;
}
var os, ss;
function cs() {
  if (ss) return os;
  ss = 1;
  var e2 = Vo(), t2 = Xo(), n2 = $o(), r2 = ns(), i2 = as();
  function a2(e3) {
    var t3 = -1, n3 = e3 == null ? 0 : e3.length;
    for (this.clear(); ++t3 < n3; ) {
      var r3 = e3[t3];
      this.set(r3[0], r3[1]);
    }
  }
  return a2.prototype.clear = e2, a2.prototype.delete = t2, a2.prototype.get = n2, a2.prototype.has = r2, a2.prototype.set = i2, os = a2, os;
}
var ls, us;
function ds() {
  if (us) return ls;
  us = 1;
  var e2 = cs(), t2 = `Expected a function`;
  function n2(r2, i2) {
    if (typeof r2 != `function` || i2 != null && typeof i2 != `function`) throw TypeError(t2);
    var a2 = function() {
      var e3 = arguments, t3 = i2 ? i2.apply(this, e3) : e3[0], n3 = a2.cache;
      if (n3.has(t3)) return n3.get(t3);
      var o2 = r2.apply(this, e3);
      return a2.cache = n3.set(t3, o2) || n3, o2;
    };
    return a2.cache = new (n2.Cache || e2)(), a2;
  }
  return n2.Cache = e2, ls = n2, ls;
}
var fs, ps;
function ms() {
  if (ps) return fs;
  ps = 1;
  var e2 = ds(), t2 = 500;
  function n2(n3) {
    var r2 = e2(n3, function(e3) {
      return i2.size === t2 && i2.clear(), e3;
    }), i2 = r2.cache;
    return r2;
  }
  return fs = n2, fs;
}
var hs, gs;
function _s() {
  if (gs) return hs;
  gs = 1;
  var e2 = ms(), t2 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n2 = /\\(\\)?/g;
  return hs = e2(function(e3) {
    var r2 = [];
    return e3.charCodeAt(0) === 46 && r2.push(``), e3.replace(t2, function(e4, t3, i2, a2) {
      r2.push(i2 ? a2.replace(n2, `$1`) : t3 || e4);
    }), r2;
  }), hs;
}
var vs, ys;
function bs() {
  if (ys) return vs;
  ys = 1;
  function e2(e3, t2) {
    for (var n2 = -1, r2 = e3 == null ? 0 : e3.length, i2 = Array(r2); ++n2 < r2; ) i2[n2] = t2(e3[n2], n2, e3);
    return i2;
  }
  return vs = e2, vs;
}
var xs, Ss;
function Cs() {
  if (Ss) return xs;
  Ss = 1;
  var e2 = ze(), t2 = bs(), n2 = ya(), r2 = et(), i2 = e2 ? e2.prototype : void 0, a2 = i2 ? i2.toString : void 0;
  function o2(e3) {
    if (typeof e3 == `string`) return e3;
    if (n2(e3)) return t2(e3, o2) + ``;
    if (r2(e3)) return a2 ? a2.call(e3) : ``;
    var i3 = e3 + ``;
    return i3 == `0` && 1 / e3 == -1 / 0 ? `-0` : i3;
  }
  return xs = o2, xs;
}
var ws, Ts;
function Es() {
  if (Ts) return ws;
  Ts = 1;
  var e2 = Cs();
  function t2(t3) {
    return t3 == null ? `` : e2(t3);
  }
  return ws = t2, ws;
}
var Ds, Os;
function ks() {
  if (Os) return Ds;
  Os = 1;
  var e2 = ya(), t2 = Sa(), n2 = _s(), r2 = Es();
  function i2(i3, a2) {
    return e2(i3) ? i3 : t2(i3, a2) ? [i3] : n2(r2(i3));
  }
  return Ds = i2, Ds;
}
var As, js;
function Ms() {
  if (js) return As;
  js = 1;
  var e2 = et();
  function t2(t3) {
    if (typeof t3 == `string` || e2(t3)) return t3;
    var n2 = t3 + ``;
    return n2 == `0` && 1 / t3 == -1 / 0 ? `-0` : n2;
  }
  return As = t2, As;
}
var Ns, Ps;
function Fs() {
  if (Ps) return Ns;
  Ps = 1;
  var e2 = ks(), t2 = Ms();
  function n2(n3, r2) {
    r2 = e2(r2, n3);
    for (var i2 = 0, a2 = r2.length; n3 != null && i2 < a2; ) n3 = n3[t2(r2[i2++])];
    return i2 && i2 == a2 ? n3 : void 0;
  }
  return Ns = n2, Ns;
}
var Is, Ls;
function Rs() {
  if (Ls) return Is;
  Ls = 1;
  var e2 = Fs();
  function t2(t3, n2, r2) {
    var i2 = t3 == null ? void 0 : e2(t3, n2);
    return i2 === void 0 ? r2 : i2;
  }
  return Is = t2, Is;
}
var zs = ve(Rs()), Bs, Vs;
function Hs() {
  if (Vs) return Bs;
  Vs = 1;
  var e2 = Ua();
  return Bs = (function() {
    try {
      var t2 = e2(Object, `defineProperty`);
      return t2({}, ``, {}), t2;
    } catch {
    }
  })(), Bs;
}
var Us, Ws;
function Gs() {
  if (Ws) return Us;
  Ws = 1;
  var e2 = Hs();
  function t2(t3, n2, r2) {
    n2 == `__proto__` && e2 ? e2(t3, n2, { configurable: true, enumerable: true, value: r2, writable: true }) : t3[n2] = r2;
  }
  return Us = t2, Us;
}
var Ks, qs;
function Js() {
  if (qs) return Ks;
  qs = 1;
  var e2 = Gs(), t2 = _o(), n2 = Object.prototype.hasOwnProperty;
  function r2(r3, i2, a2) {
    var o2 = r3[i2];
    (!(n2.call(r3, i2) && t2(o2, a2)) || a2 === void 0 && !(i2 in r3)) && e2(r3, i2, a2);
  }
  return Ks = r2, Ks;
}
var Ys, Xs;
function Zs() {
  if (Xs) return Ys;
  Xs = 1;
  var e2 = 9007199254740991, t2 = /^(?:0|[1-9]\d*)$/;
  function n2(n3, r2) {
    var i2 = typeof n3;
    return r2 ?? (r2 = e2), !!r2 && (i2 == `number` || i2 != `symbol` && t2.test(n3)) && n3 > -1 && n3 % 1 == 0 && n3 < r2;
  }
  return Ys = n2, Ys;
}
var Qs, $s;
function ec() {
  if ($s) return Qs;
  $s = 1;
  var e2 = Js(), t2 = ks(), n2 = Zs(), r2 = xe(), i2 = Ms();
  function a2(a3, o2, s2, c2) {
    if (!r2(a3)) return a3;
    o2 = t2(o2, a3);
    for (var l2 = -1, u2 = o2.length, d2 = u2 - 1, f2 = a3; f2 != null && ++l2 < u2; ) {
      var p2 = i2(o2[l2]), m2 = s2;
      if (p2 === `__proto__` || p2 === `constructor` || p2 === `prototype`) return a3;
      if (l2 != d2) {
        var h2 = f2[p2];
        m2 = c2 ? c2(h2, p2, f2) : void 0, m2 === void 0 && (m2 = r2(h2) ? h2 : n2(o2[l2 + 1]) ? [] : {});
      }
      e2(f2, p2, m2), f2 = f2[p2];
    }
    return a3;
  }
  return Qs = a2, Qs;
}
var tc, nc;
function rc() {
  if (nc) return tc;
  nc = 1;
  var e2 = ec();
  function t2(t3, n2, r2) {
    return t3 == null ? t3 : e2(t3, n2, r2);
  }
  return tc = t2, tc;
}
var ic = ve(rc()), ac, oc;
function sc() {
  if (oc) return ac;
  oc = 1;
  function e2(e3, t2) {
    var n2 = -1, r2 = e3.length;
    for (t2 || (t2 = Array(r2)); ++n2 < r2; ) t2[n2] = e3[n2];
    return t2;
  }
  return ac = e2, ac;
}
var cc, lc;
function uc() {
  if (lc) return cc;
  lc = 1;
  var e2 = bs(), t2 = sc(), n2 = ya(), r2 = et(), i2 = _s(), a2 = Ms(), o2 = Es();
  function s2(s3) {
    return n2(s3) ? e2(s3, a2) : r2(s3) ? [s3] : t2(i2(o2(s3)));
  }
  return cc = s2, cc;
}
var dc = ve(uc()), fc = { data: function(e2) {
  return e2 = X({}, { field: `data`, bindingEvent: `data`, allowBinding: false, allowSetting: false, allowGetting: false, settingEvent: `data`, settingTriggersEvent: false, triggerFnName: `trigger`, immutableKeys: {}, updateStyle: false, beforeGet: function(e3) {
  }, beforeSet: function(e3, t2) {
  }, onSet: function(e3) {
  }, canSet: function(e3) {
    return true;
  } }, e2), function(t2, n2) {
    var r2 = e2, i2 = this, a2 = i2.length !== void 0, o2 = a2 ? i2 : [i2], c2 = a2 ? i2[0] : i2;
    if (T(t2)) {
      var l2 = t2.indexOf(`.`) !== -1 && dc(t2);
      if (r2.allowGetting && n2 === void 0) {
        var u2;
        return c2 && (r2.beforeGet(c2), u2 = l2 && c2._private[r2.field][t2] === void 0 ? zs(c2._private[r2.field], l2) : c2._private[r2.field][t2]), u2;
      } else if (r2.allowSetting && n2 !== void 0 && !r2.immutableKeys[t2]) {
        var d2 = s({}, t2, n2);
        r2.beforeSet(i2, d2);
        for (var f2 = 0, p2 = o2.length; f2 < p2; f2++) {
          var m2 = o2[f2];
          r2.canSet(m2) && (l2 && c2._private[r2.field][t2] === void 0 ? ic(m2._private[r2.field], l2, n2) : m2._private[r2.field][t2] = n2);
        }
        r2.updateStyle && i2.updateStyle(), r2.onSet(i2), r2.settingTriggersEvent && i2[r2.triggerFnName](r2.settingEvent);
      }
    } else if (r2.allowSetting && O(t2)) {
      var h2 = t2, g2, _2, v2 = Object.keys(h2);
      r2.beforeSet(i2, h2);
      for (var y2 = 0; y2 < v2.length; y2++) if (g2 = v2[y2], _2 = h2[g2], !r2.immutableKeys[g2]) for (var b2 = 0; b2 < o2.length; b2++) {
        var x2 = o2[b2];
        r2.canSet(x2) && (x2._private[r2.field][g2] = _2);
      }
      r2.updateStyle && i2.updateStyle(), r2.onSet(i2), r2.settingTriggersEvent && i2[r2.triggerFnName](r2.settingEvent);
    } else if (r2.allowBinding && E(t2)) {
      var S2 = t2;
      i2.on(r2.bindingEvent, S2);
    } else if (r2.allowGetting && t2 === void 0) {
      var C2;
      return c2 && (r2.beforeGet(c2), C2 = c2._private[r2.field]), C2;
    }
    return i2;
  };
}, removeData: function(e2) {
  return e2 = X({}, { field: `data`, event: `data`, triggerFnName: `trigger`, triggerEvent: false, immutableKeys: {} }, e2), function(t2) {
    var n2 = e2, r2 = this, i2 = r2.length === void 0 ? [r2] : r2;
    if (T(t2)) {
      for (var a2 = t2.split(/\s+/), o2 = a2.length, s2 = 0; s2 < o2; s2++) {
        var c2 = a2[s2];
        if (!z(c2) && !n2.immutableKeys[c2]) for (var l2 = 0, u2 = i2.length; l2 < u2; l2++) i2[l2]._private[n2.field][c2] = void 0;
      }
      n2.triggerEvent && r2[n2.triggerFnName](n2.event);
    } else if (t2 === void 0) {
      for (var d2 = 0, f2 = i2.length; d2 < f2; d2++) for (var p2 = i2[d2]._private[n2.field], m2 = Object.keys(p2), h2 = 0; h2 < m2.length; h2++) {
        var g2 = m2[h2];
        n2.immutableKeys[g2] || (p2[g2] = void 0);
      }
      n2.triggerEvent && r2[n2.triggerFnName](n2.event);
    }
    return r2;
  };
} }, pc = { eventAliasesOn: function(e2) {
  var t2 = e2;
  t2.addListener = t2.listen = t2.bind = t2.on, t2.unlisten = t2.unbind = t2.off = t2.removeListener, t2.trigger = t2.emit, t2.pon = t2.promiseOn = function(e3, t3) {
    var n2 = this, r2 = Array.prototype.slice.call(arguments, 0);
    return new pa(function(e4, t4) {
      var i2 = r2.concat([function(t5) {
        n2.off.apply(n2, a2), e4(t5);
      }]), a2 = i2.concat([]);
      n2.on.apply(n2, i2);
    });
  };
} }, mc = {};
[ga, fc, pc].forEach(function(e2) {
  X(mc, e2);
});
var hc = { animate: mc.animate(), animation: mc.animation(), animated: mc.animated(), clearQueue: mc.clearQueue(), delay: mc.delay(), delayAnimation: mc.delayAnimation(), stop: mc.stop() }, gc = { classes: function(e2) {
  var t2 = this;
  if (e2 === void 0) {
    var n2 = [];
    return t2[0]._private.classes.forEach(function(e3) {
      return n2.push(e3);
    }), n2;
  } else D(e2) || (e2 = (e2 || ``).match(/\S+/g) || []);
  for (var r2 = [], i2 = new nn(e2), a2 = 0; a2 < t2.length; a2++) {
    for (var o2 = t2[a2], s2 = o2._private, c2 = s2.classes, l2 = false, u2 = 0; u2 < e2.length; u2++) {
      var d2 = e2[u2];
      if (!c2.has(d2)) {
        l2 = true;
        break;
      }
    }
    l2 || (l2 = c2.size !== e2.length), l2 && (s2.classes = i2, r2.push(o2));
  }
  return r2.length > 0 && this.spawn(r2).updateStyle().emit(`class`), t2;
}, addClass: function(e2) {
  return this.toggleClass(e2, true);
}, hasClass: function(e2) {
  var t2 = this[0];
  return t2 != null && t2._private.classes.has(e2);
}, toggleClass: function(e2, t2) {
  D(e2) || (e2 = e2.match(/\S+/g) || []);
  for (var n2 = this, r2 = t2 === void 0, i2 = [], a2 = 0, o2 = n2.length; a2 < o2; a2++) for (var s2 = n2[a2], c2 = s2._private.classes, l2 = false, u2 = 0; u2 < e2.length; u2++) {
    var d2 = e2[u2], f2 = c2.has(d2), p2 = false;
    t2 || r2 && !f2 ? (c2.add(d2), p2 = true) : (!t2 || r2 && f2) && (c2.delete(d2), p2 = true), !l2 && p2 && (i2.push(s2), l2 = true);
  }
  return i2.length > 0 && this.spawn(i2).updateStyle().emit(`class`), n2;
}, removeClass: function(e2) {
  return this.toggleClass(e2, false);
}, flashClass: function(e2, t2) {
  var n2 = this;
  if (t2 == null) t2 = 250;
  else if (t2 === 0) return n2;
  return n2.addClass(e2), setTimeout(function() {
    n2.removeClass(e2);
  }, t2), n2;
} };
gc.className = gc.classNames = gc.classes;
var Z = { metaChar: `[\\!\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\\`\\{\\|\\}\\~]`, comparatorOp: `=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=`, boolOp: `\\?|\\!|\\^`, string: `"(?:\\\\"|[^"])*"|'(?:\\\\'|[^'])*'`, number: Y, meta: `degree|indegree|outdegree`, separator: `\\s*,\\s*`, descendant: `\\s+`, child: `\\s+>\\s+`, subject: `\\$`, group: `node|edge|\\*`, directedEdge: `\\s+->\\s+`, undirectedEdge: `\\s+<->\\s+` };
Z.variable = `(?:[\\w-.]|(?:\\\\` + Z.metaChar + `))+`, Z.className = `(?:[\\w-]|(?:\\\\` + Z.metaChar + `))+`, Z.value = Z.string + `|` + Z.number, Z.id = Z.variable, (function() {
  var e2 = Z.comparatorOp.split(`|`), t2, n2;
  for (n2 = 0; n2 < e2.length; n2++) t2 = e2[n2], Z.comparatorOp += `|@` + t2;
  for (e2 = Z.comparatorOp.split(`|`), n2 = 0; n2 < e2.length; n2++) t2 = e2[n2], !(t2.indexOf(`!`) >= 0) && t2 !== `=` && (Z.comparatorOp += `|\\!` + t2);
})();
var _c = function() {
  return { checks: [] };
}, Q = { GROUP: 0, COLLECTION: 1, FILTER: 2, DATA_COMPARE: 3, DATA_EXIST: 4, DATA_BOOL: 5, META_COMPARE: 6, STATE: 7, ID: 8, CLASS: 9, UNDIRECTED_EDGE: 10, DIRECTED_EDGE: 11, NODE_SOURCE: 12, NODE_TARGET: 13, NODE_NEIGHBOR: 14, CHILD: 15, DESCENDANT: 16, PARENT: 17, ANCESTOR: 18, COMPOUND_SPLIT: 19, TRUE: 20 }, vc = [{ selector: `:selected`, matches: function(e2) {
  return e2.selected();
} }, { selector: `:unselected`, matches: function(e2) {
  return !e2.selected();
} }, { selector: `:selectable`, matches: function(e2) {
  return e2.selectable();
} }, { selector: `:unselectable`, matches: function(e2) {
  return !e2.selectable();
} }, { selector: `:locked`, matches: function(e2) {
  return e2.locked();
} }, { selector: `:unlocked`, matches: function(e2) {
  return !e2.locked();
} }, { selector: `:visible`, matches: function(e2) {
  return e2.visible();
} }, { selector: `:hidden`, matches: function(e2) {
  return !e2.visible();
} }, { selector: `:transparent`, matches: function(e2) {
  return e2.transparent();
} }, { selector: `:grabbed`, matches: function(e2) {
  return e2.grabbed();
} }, { selector: `:free`, matches: function(e2) {
  return !e2.grabbed();
} }, { selector: `:removed`, matches: function(e2) {
  return e2.removed();
} }, { selector: `:inside`, matches: function(e2) {
  return !e2.removed();
} }, { selector: `:grabbable`, matches: function(e2) {
  return e2.grabbable();
} }, { selector: `:ungrabbable`, matches: function(e2) {
  return !e2.grabbable();
} }, { selector: `:animated`, matches: function(e2) {
  return e2.animated();
} }, { selector: `:unanimated`, matches: function(e2) {
  return !e2.animated();
} }, { selector: `:parent`, matches: function(e2) {
  return e2.isParent();
} }, { selector: `:childless`, matches: function(e2) {
  return e2.isChildless();
} }, { selector: `:child`, matches: function(e2) {
  return e2.isChild();
} }, { selector: `:orphan`, matches: function(e2) {
  return e2.isOrphan();
} }, { selector: `:nonorphan`, matches: function(e2) {
  return e2.isChild();
} }, { selector: `:compound`, matches: function(e2) {
  return e2.isNode() ? e2.isParent() : e2.source().isParent() || e2.target().isParent();
} }, { selector: `:loop`, matches: function(e2) {
  return e2.isLoop();
} }, { selector: `:simple`, matches: function(e2) {
  return e2.isSimple();
} }, { selector: `:active`, matches: function(e2) {
  return e2.active();
} }, { selector: `:inactive`, matches: function(e2) {
  return !e2.active();
} }, { selector: `:backgrounding`, matches: function(e2) {
  return e2.backgrounding();
} }, { selector: `:nonbackgrounding`, matches: function(e2) {
  return !e2.backgrounding();
} }].sort(function(e2, t2) {
  return ce(e2.selector, t2.selector);
}), yc = (function() {
  for (var e2 = {}, t2, n2 = 0; n2 < vc.length; n2++) t2 = vc[n2], e2[t2.selector] = t2.matches;
  return e2;
})(), bc = function(e2, t2) {
  return yc[e2](t2);
}, xc = `(` + vc.map(function(e2) {
  return e2.selector;
}).join(`|`) + `)`, Sc = function(e2) {
  return e2.replace(RegExp(`\\\\(` + Z.metaChar + `)`, `g`), function(e3, t2) {
    return t2;
  });
}, Cc = function(e2, t2, n2) {
  e2[e2.length - 1] = n2;
}, wc = [{ name: `group`, query: true, regex: `(` + Z.group + `)`, populate: function(e2, t2, n2) {
  var r2 = f(n2, 1)[0];
  t2.checks.push({ type: Q.GROUP, value: r2 === `*` ? r2 : r2 + `s` });
} }, { name: `state`, query: true, regex: xc, populate: function(e2, t2, n2) {
  var r2 = f(n2, 1)[0];
  t2.checks.push({ type: Q.STATE, value: r2 });
} }, { name: `id`, query: true, regex: `\\#(` + Z.id + `)`, populate: function(e2, t2, n2) {
  var r2 = f(n2, 1)[0];
  t2.checks.push({ type: Q.ID, value: Sc(r2) });
} }, { name: `className`, query: true, regex: `\\.(` + Z.className + `)`, populate: function(e2, t2, n2) {
  var r2 = f(n2, 1)[0];
  t2.checks.push({ type: Q.CLASS, value: Sc(r2) });
} }, { name: `dataExists`, query: true, regex: `\\[\\s*(` + Z.variable + `)\\s*\\]`, populate: function(e2, t2, n2) {
  var r2 = f(n2, 1)[0];
  t2.checks.push({ type: Q.DATA_EXIST, field: Sc(r2) });
} }, { name: `dataCompare`, query: true, regex: `\\[\\s*(` + Z.variable + `)\\s*(` + Z.comparatorOp + `)\\s*(` + Z.value + `)\\s*\\]`, populate: function(e2, t2, n2) {
  var r2 = f(n2, 3), i2 = r2[0], a2 = r2[1], o2 = r2[2];
  o2 = RegExp(`^` + Z.string + `$`).exec(o2) == null ? parseFloat(o2) : o2.substring(1, o2.length - 1), t2.checks.push({ type: Q.DATA_COMPARE, field: Sc(i2), operator: a2, value: o2 });
} }, { name: `dataBool`, query: true, regex: `\\[\\s*(` + Z.boolOp + `)\\s*(` + Z.variable + `)\\s*\\]`, populate: function(e2, t2, n2) {
  var r2 = f(n2, 2), i2 = r2[0], a2 = r2[1];
  t2.checks.push({ type: Q.DATA_BOOL, field: Sc(a2), operator: i2 });
} }, { name: `metaCompare`, query: true, regex: `\\[\\[\\s*(` + Z.meta + `)\\s*(` + Z.comparatorOp + `)\\s*(` + Z.number + `)\\s*\\]\\]`, populate: function(e2, t2, n2) {
  var r2 = f(n2, 3), i2 = r2[0], a2 = r2[1], o2 = r2[2];
  t2.checks.push({ type: Q.META_COMPARE, field: Sc(i2), operator: a2, value: parseFloat(o2) });
} }, { name: `nextQuery`, separator: true, regex: Z.separator, populate: function(e2, t2) {
  var n2 = e2.currentSubject, r2 = e2.edgeCount, i2 = e2.compoundCount, a2 = e2[e2.length - 1];
  return n2 != null && (a2.subject = n2, e2.currentSubject = null), a2.edgeCount = r2, a2.compoundCount = i2, e2.edgeCount = 0, e2.compoundCount = 0, e2[e2.length++] = _c();
} }, { name: `directedEdge`, separator: true, regex: Z.directedEdge, populate: function(e2, t2) {
  if (e2.currentSubject == null) {
    var n2 = _c(), r2 = t2, i2 = _c();
    return n2.checks.push({ type: Q.DIRECTED_EDGE, source: r2, target: i2 }), Cc(e2, t2, n2), e2.edgeCount++, i2;
  } else {
    var a2 = _c(), o2 = t2, s2 = _c();
    return a2.checks.push({ type: Q.NODE_SOURCE, source: o2, target: s2 }), Cc(e2, t2, a2), e2.edgeCount++, s2;
  }
} }, { name: `undirectedEdge`, separator: true, regex: Z.undirectedEdge, populate: function(e2, t2) {
  if (e2.currentSubject == null) {
    var n2 = _c(), r2 = t2, i2 = _c();
    return n2.checks.push({ type: Q.UNDIRECTED_EDGE, nodes: [r2, i2] }), Cc(e2, t2, n2), e2.edgeCount++, i2;
  } else {
    var a2 = _c(), o2 = t2, s2 = _c();
    return a2.checks.push({ type: Q.NODE_NEIGHBOR, node: o2, neighbor: s2 }), Cc(e2, t2, a2), s2;
  }
} }, { name: `child`, separator: true, regex: Z.child, populate: function(e2, t2) {
  if (e2.currentSubject == null) {
    var n2 = _c(), r2 = _c(), i2 = e2[e2.length - 1];
    return n2.checks.push({ type: Q.CHILD, parent: i2, child: r2 }), Cc(e2, t2, n2), e2.compoundCount++, r2;
  } else if (e2.currentSubject === t2) {
    var a2 = _c(), o2 = e2[e2.length - 1], s2 = _c(), c2 = _c(), l2 = _c(), u2 = _c();
    return a2.checks.push({ type: Q.COMPOUND_SPLIT, left: o2, right: s2, subject: c2 }), c2.checks = t2.checks, t2.checks = [{ type: Q.TRUE }], u2.checks.push({ type: Q.TRUE }), s2.checks.push({ type: Q.PARENT, parent: u2, child: l2 }), Cc(e2, o2, a2), e2.currentSubject = c2, e2.compoundCount++, l2;
  } else {
    var d2 = _c(), f2 = _c(), p2 = [{ type: Q.PARENT, parent: d2, child: f2 }];
    return d2.checks = t2.checks, t2.checks = p2, e2.compoundCount++, f2;
  }
} }, { name: `descendant`, separator: true, regex: Z.descendant, populate: function(e2, t2) {
  if (e2.currentSubject == null) {
    var n2 = _c(), r2 = _c(), i2 = e2[e2.length - 1];
    return n2.checks.push({ type: Q.DESCENDANT, ancestor: i2, descendant: r2 }), Cc(e2, t2, n2), e2.compoundCount++, r2;
  } else if (e2.currentSubject === t2) {
    var a2 = _c(), o2 = e2[e2.length - 1], s2 = _c(), c2 = _c(), l2 = _c(), u2 = _c();
    return a2.checks.push({ type: Q.COMPOUND_SPLIT, left: o2, right: s2, subject: c2 }), c2.checks = t2.checks, t2.checks = [{ type: Q.TRUE }], u2.checks.push({ type: Q.TRUE }), s2.checks.push({ type: Q.ANCESTOR, ancestor: u2, descendant: l2 }), Cc(e2, o2, a2), e2.currentSubject = c2, e2.compoundCount++, l2;
  } else {
    var d2 = _c(), f2 = _c(), p2 = [{ type: Q.ANCESTOR, ancestor: d2, descendant: f2 }];
    return d2.checks = t2.checks, t2.checks = p2, e2.compoundCount++, f2;
  }
} }, { name: `subject`, modifier: true, regex: Z.subject, populate: function(e2, t2) {
  if (e2.currentSubject != null && e2.currentSubject !== t2) return zt("Redefinition of subject in selector `" + e2.toString() + "`"), false;
  e2.currentSubject = t2;
  var n2 = e2[e2.length - 1].checks[0], r2 = n2 == null ? null : n2.type;
  r2 === Q.DIRECTED_EDGE ? n2.type = Q.NODE_TARGET : r2 === Q.UNDIRECTED_EDGE && (n2.type = Q.NODE_NEIGHBOR, n2.node = n2.nodes[1], n2.neighbor = n2.nodes[0], n2.nodes = null);
} }];
wc.forEach(function(e2) {
  return e2.regexObj = RegExp(`^` + e2.regex);
});
var Tc = function(e2) {
  for (var t2, n2, r2, i2 = 0; i2 < wc.length; i2++) {
    var a2 = wc[i2], o2 = a2.name, s2 = e2.match(a2.regexObj);
    if (s2 != null) {
      n2 = s2, t2 = a2, r2 = o2;
      var c2 = s2[0];
      e2 = e2.substring(c2.length);
      break;
    }
  }
  return { expr: t2, match: n2, name: r2, remaining: e2 };
}, Ec = function(e2) {
  var t2 = e2.match(/^\s+/);
  if (t2) {
    var n2 = t2[0];
    e2 = e2.substring(n2.length);
  }
  return e2;
}, Dc = { parse: function(e2) {
  var t2 = this, n2 = t2.inputText = e2, r2 = t2[0] = _c();
  for (t2.length = 1, n2 = Ec(n2); ; ) {
    var i2 = Tc(n2);
    if (i2.expr == null) return zt("The selector `" + e2 + "`is invalid"), false;
    var a2 = i2.match.slice(1), o2 = i2.expr.populate(t2, r2, a2);
    if (o2 === false) return false;
    if (o2 != null && (r2 = o2), n2 = i2.remaining, n2.match(/^\s*$/)) break;
  }
  var s2 = t2[t2.length - 1];
  t2.currentSubject != null && (s2.subject = t2.currentSubject), s2.edgeCount = t2.edgeCount, s2.compoundCount = t2.compoundCount;
  for (var c2 = 0; c2 < t2.length; c2++) {
    var l2 = t2[c2];
    if (l2.compoundCount > 0 && l2.edgeCount > 0) return zt("The selector `" + e2 + "` is invalid because it uses both a compound selector and an edge selector"), false;
    if (l2.edgeCount > 1) return zt("The selector `" + e2 + "` is invalid because it uses multiple edge selectors"), false;
    l2.edgeCount === 1 && zt("The selector `" + e2 + "` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes.");
  }
  return true;
}, toString: function() {
  if (this.toStringCache != null) return this.toStringCache;
  for (var e2 = function(e3) {
    return e3 ?? ``;
  }, t2 = function(t3) {
    return T(t3) ? `"` + t3 + `"` : e2(t3);
  }, n2 = function(e3) {
    return ` ` + e3 + ` `;
  }, r2 = function(r3, a3) {
    var o3 = r3.type, s3 = r3.value;
    switch (o3) {
      case Q.GROUP:
        var c2 = e2(s3);
        return c2.substring(0, c2.length - 1);
      case Q.DATA_COMPARE:
        var l2 = r3.field, u2 = r3.operator;
        return `[` + l2 + n2(e2(u2)) + t2(s3) + `]`;
      case Q.DATA_BOOL:
        var d2 = r3.operator, f2 = r3.field;
        return `[` + e2(d2) + f2 + `]`;
      case Q.DATA_EXIST:
        return `[` + r3.field + `]`;
      case Q.META_COMPARE:
        var p2 = r3.operator;
        return `[[` + r3.field + n2(e2(p2)) + t2(s3) + `]]`;
      case Q.STATE:
        return s3;
      case Q.ID:
        return `#` + s3;
      case Q.CLASS:
        return `.` + s3;
      case Q.PARENT:
      case Q.CHILD:
        return i2(r3.parent, a3) + n2(`>`) + i2(r3.child, a3);
      case Q.ANCESTOR:
      case Q.DESCENDANT:
        return i2(r3.ancestor, a3) + ` ` + i2(r3.descendant, a3);
      case Q.COMPOUND_SPLIT:
        var m2 = i2(r3.left, a3), h2 = i2(r3.subject, a3), g2 = i2(r3.right, a3);
        return m2 + (m2.length > 0 ? ` ` : ``) + h2 + g2;
      case Q.TRUE:
        return ``;
    }
  }, i2 = function(e3, t3) {
    return e3.checks.reduce(function(n3, i3, a3) {
      return n3 + (t3 === e3 && a3 === 0 ? `$` : ``) + r2(i3, t3);
    }, ``);
  }, a2 = ``, o2 = 0; o2 < this.length; o2++) {
    var s2 = this[o2];
    a2 += i2(s2, s2.subject), this.length > 1 && o2 < this.length - 1 && (a2 += `, `);
  }
  return this.toStringCache = a2, a2;
} }, Oc = function(e2, t2, n2) {
  var r2, i2 = T(e2), a2 = A(e2), o2 = T(n2), s2, c2, l2 = false, u2 = false, d2 = false;
  switch (t2.indexOf(`!`) >= 0 && (t2 = t2.replace(`!`, ``), u2 = true), t2.indexOf(`@`) >= 0 && (t2 = t2.replace(`@`, ``), l2 = true), (i2 || o2 || l2) && (s2 = !i2 && !a2 ? `` : `` + e2, c2 = `` + n2), l2 && (e2 = s2 = s2.toLowerCase(), n2 = c2 = c2.toLowerCase()), t2) {
    case `*=`:
      r2 = s2.indexOf(c2) >= 0;
      break;
    case `$=`:
      r2 = s2.indexOf(c2, s2.length - c2.length) >= 0;
      break;
    case `^=`:
      r2 = s2.indexOf(c2) === 0;
      break;
    case `=`:
      r2 = e2 === n2;
      break;
    case `>`:
      d2 = true, r2 = e2 > n2;
      break;
    case `>=`:
      d2 = true, r2 = e2 >= n2;
      break;
    case `<`:
      d2 = true, r2 = e2 < n2;
      break;
    case `<=`:
      d2 = true, r2 = e2 <= n2;
      break;
    default:
      r2 = false;
      break;
  }
  return u2 && (e2 != null || !d2) && (r2 = !r2), r2;
}, kc = function(e2, t2) {
  switch (t2) {
    case `?`:
      return !!e2;
    case `!`:
      return !e2;
    case `^`:
      return e2 === void 0;
  }
}, Ac = function(e2) {
  return e2 !== void 0;
}, jc = function(e2, t2) {
  return e2.data(t2);
}, Mc = function(e2, t2) {
  return e2[t2]();
}, Nc = [], Pc = function(e2, t2) {
  return e2.checks.every(function(e3) {
    return Nc[e3.type](e3, t2);
  });
};
Nc[Q.GROUP] = function(e2, t2) {
  var n2 = e2.value;
  return n2 === `*` || n2 === t2.group();
}, Nc[Q.STATE] = function(e2, t2) {
  var n2 = e2.value;
  return bc(n2, t2);
}, Nc[Q.ID] = function(e2, t2) {
  var n2 = e2.value;
  return t2.id() === n2;
}, Nc[Q.CLASS] = function(e2, t2) {
  var n2 = e2.value;
  return t2.hasClass(n2);
}, Nc[Q.META_COMPARE] = function(e2, t2) {
  var n2 = e2.field, r2 = e2.operator, i2 = e2.value;
  return Oc(Mc(t2, n2), r2, i2);
}, Nc[Q.DATA_COMPARE] = function(e2, t2) {
  var n2 = e2.field, r2 = e2.operator, i2 = e2.value;
  return Oc(jc(t2, n2), r2, i2);
}, Nc[Q.DATA_BOOL] = function(e2, t2) {
  var n2 = e2.field, r2 = e2.operator;
  return kc(jc(t2, n2), r2);
}, Nc[Q.DATA_EXIST] = function(e2, t2) {
  var n2 = e2.field;
  return e2.operator, Ac(jc(t2, n2));
}, Nc[Q.UNDIRECTED_EDGE] = function(e2, t2) {
  var n2 = e2.nodes[0], r2 = e2.nodes[1], i2 = t2.source(), a2 = t2.target();
  return Pc(n2, i2) && Pc(r2, a2) || Pc(r2, i2) && Pc(n2, a2);
}, Nc[Q.NODE_NEIGHBOR] = function(e2, t2) {
  return Pc(e2.node, t2) && t2.neighborhood().some(function(t3) {
    return t3.isNode() && Pc(e2.neighbor, t3);
  });
}, Nc[Q.DIRECTED_EDGE] = function(e2, t2) {
  return Pc(e2.source, t2.source()) && Pc(e2.target, t2.target());
}, Nc[Q.NODE_SOURCE] = function(e2, t2) {
  return Pc(e2.source, t2) && t2.outgoers().some(function(t3) {
    return t3.isNode() && Pc(e2.target, t3);
  });
}, Nc[Q.NODE_TARGET] = function(e2, t2) {
  return Pc(e2.target, t2) && t2.incomers().some(function(t3) {
    return t3.isNode() && Pc(e2.source, t3);
  });
}, Nc[Q.CHILD] = function(e2, t2) {
  return Pc(e2.child, t2) && Pc(e2.parent, t2.parent());
}, Nc[Q.PARENT] = function(e2, t2) {
  return Pc(e2.parent, t2) && t2.children().some(function(t3) {
    return Pc(e2.child, t3);
  });
}, Nc[Q.DESCENDANT] = function(e2, t2) {
  return Pc(e2.descendant, t2) && t2.ancestors().some(function(t3) {
    return Pc(e2.ancestor, t3);
  });
}, Nc[Q.ANCESTOR] = function(e2, t2) {
  return Pc(e2.ancestor, t2) && t2.descendants().some(function(t3) {
    return Pc(e2.descendant, t3);
  });
}, Nc[Q.COMPOUND_SPLIT] = function(e2, t2) {
  return Pc(e2.subject, t2) && Pc(e2.left, t2) && Pc(e2.right, t2);
}, Nc[Q.TRUE] = function() {
  return true;
}, Nc[Q.COLLECTION] = function(e2, t2) {
  return e2.value.has(t2);
}, Nc[Q.FILTER] = function(e2, t2) {
  var n2 = e2.value;
  return n2(t2);
};
var Fc = { matches: function(e2) {
  for (var t2 = this, n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    if (Pc(r2, e2)) return true;
  }
  return false;
}, filter: function(e2) {
  var t2 = this;
  if (t2.length === 1 && t2[0].checks.length === 1 && t2[0].checks[0].type === Q.ID) return e2.getElementById(t2[0].checks[0].value).collection();
  var n2 = function(e3) {
    for (var n3 = 0; n3 < t2.length; n3++) {
      var r2 = t2[n3];
      if (Pc(r2, e3)) return true;
    }
    return false;
  };
  return t2.text() ?? (n2 = function() {
    return true;
  }), e2.filter(n2);
} }, Ic = function(e2) {
  this.inputText = e2, this.currentSubject = null, this.compoundCount = 0, this.edgeCount = 0, this.length = 0, e2 == null || T(e2) && e2.match(/^\s*$/) || (N(e2) ? this.addQuery({ checks: [{ type: Q.COLLECTION, value: e2.collection() }] }) : E(e2) ? this.addQuery({ checks: [{ type: Q.FILTER, value: e2 }] }) : T(e2) ? this.parse(e2) || (this.invalid = true) : Lt(`A selector must be created from a string; found `));
}, Lc = Ic.prototype;
[Dc, Fc].forEach(function(e2) {
  return X(Lc, e2);
}), Lc.text = function() {
  return this.inputText;
}, Lc.size = function() {
  return this.length;
}, Lc.eq = function(e2) {
  return this[e2];
}, Lc.sameText = function(e2) {
  return !this.invalid && !e2.invalid && this.text() === e2.text();
}, Lc.addQuery = function(e2) {
  this[this.length++] = e2;
}, Lc.selector = Lc.toString;
var Rc = { allAre: function(e2) {
  var t2 = new Ic(e2);
  return this.every(function(e3) {
    return t2.matches(e3);
  });
}, is: function(e2) {
  var t2 = new Ic(e2);
  return this.some(function(e3) {
    return t2.matches(e3);
  });
}, some: function(e2, t2) {
  for (var n2 = 0; n2 < this.length; n2++) if (t2 ? e2.apply(t2, [this[n2], n2, this]) : e2(this[n2], n2, this)) return true;
  return false;
}, every: function(e2, t2) {
  for (var n2 = 0; n2 < this.length; n2++) if (!(t2 ? e2.apply(t2, [this[n2], n2, this]) : e2(this[n2], n2, this))) return false;
  return true;
}, same: function(e2) {
  if (this === e2) return true;
  e2 = this.cy().collection(e2);
  var t2 = this.length;
  return t2 === e2.length ? t2 === 1 ? this[0] === e2[0] : this.every(function(t3) {
    return e2.hasElementWithId(t3.id());
  }) : false;
}, anySame: function(e2) {
  return e2 = this.cy().collection(e2), this.some(function(t2) {
    return e2.hasElementWithId(t2.id());
  });
}, allAreNeighbors: function(e2) {
  e2 = this.cy().collection(e2);
  var t2 = this.neighborhood();
  return e2.every(function(e3) {
    return t2.hasElementWithId(e3.id());
  });
}, contains: function(e2) {
  e2 = this.cy().collection(e2);
  var t2 = this;
  return e2.every(function(e3) {
    return t2.hasElementWithId(e3.id());
  });
} };
Rc.allAreNeighbours = Rc.allAreNeighbors, Rc.has = Rc.contains, Rc.equal = Rc.equals = Rc.same;
var zc = function(e2, t2) {
  return function(n2, r2, i2, a2) {
    var o2 = n2, s2 = this, c2;
    if (o2 == null ? c2 = `` : N(o2) && o2.length === 1 && (c2 = o2.id()), s2.length === 1 && c2) {
      var l2 = s2[0]._private, u2 = l2.traversalCache = l2.traversalCache || {}, d2 = u2[t2] = u2[t2] || [], f2 = Ct(c2);
      return d2[f2] || (d2[f2] = e2.call(s2, n2, r2, i2, a2));
    } else return e2.call(s2, n2, r2, i2, a2);
  };
}, Bc = { parent: function(e2) {
  var t2 = [];
  if (this.length === 1) {
    var n2 = this[0]._private.parent;
    if (n2) return n2;
  }
  for (var r2 = 0; r2 < this.length; r2++) {
    var i2 = this[r2]._private.parent;
    i2 && t2.push(i2);
  }
  return this.spawn(t2, true).filter(e2);
}, parents: function(e2) {
  for (var t2 = [], n2 = this.parent(); n2.nonempty(); ) {
    for (var r2 = 0; r2 < n2.length; r2++) {
      var i2 = n2[r2];
      t2.push(i2);
    }
    n2 = n2.parent();
  }
  return this.spawn(t2, true).filter(e2);
}, commonAncestors: function(e2) {
  for (var t2, n2 = 0; n2 < this.length; n2++) {
    var r2 = this[n2].parents();
    t2 || (t2 = r2), t2 = t2.intersect(r2);
  }
  return t2.filter(e2);
}, orphans: function(e2) {
  return this.stdFilter(function(e3) {
    return e3.isOrphan();
  }).filter(e2);
}, nonorphans: function(e2) {
  return this.stdFilter(function(e3) {
    return e3.isChild();
  }).filter(e2);
}, children: zc(function(e2) {
  for (var t2 = [], n2 = 0; n2 < this.length; n2++) for (var r2 = this[n2]._private.children, i2 = 0; i2 < r2.length; i2++) t2.push(r2[i2]);
  return this.spawn(t2, true).filter(e2);
}, `children`), siblings: function(e2) {
  return this.parent().children().not(this).filter(e2);
}, isParent: function() {
  var e2 = this[0];
  if (e2) return e2.isNode() && e2._private.children.length !== 0;
}, isChildless: function() {
  var e2 = this[0];
  if (e2) return e2.isNode() && e2._private.children.length === 0;
}, isChild: function() {
  var e2 = this[0];
  if (e2) return e2.isNode() && e2._private.parent != null;
}, isOrphan: function() {
  var e2 = this[0];
  if (e2) return e2.isNode() && e2._private.parent == null;
}, descendants: function(e2) {
  var t2 = [];
  function n2(e3) {
    for (var r2 = 0; r2 < e3.length; r2++) {
      var i2 = e3[r2];
      t2.push(i2), i2.children().nonempty() && n2(i2.children());
    }
  }
  return n2(this.children()), this.spawn(t2, true).filter(e2);
} };
function Vc(e2, t2, n2, r2) {
  for (var i2 = [], a2 = new nn(), o2 = e2.cy().hasCompoundNodes(), s2 = 0; s2 < e2.length; s2++) {
    var c2 = e2[s2];
    n2 ? i2.push(c2) : o2 && r2(i2, a2, c2);
  }
  for (; i2.length > 0; ) {
    var l2 = i2.shift();
    t2(l2), a2.add(l2.id()), o2 && r2(i2, a2, l2);
  }
  return e2;
}
function Hc(e2, t2, n2) {
  if (n2.isParent()) for (var r2 = n2._private.children, i2 = 0; i2 < r2.length; i2++) {
    var a2 = r2[i2];
    t2.has(a2.id()) || e2.push(a2);
  }
}
Bc.forEachDown = function(e2) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return Vc(this, e2, t2, Hc);
};
function Uc(e2, t2, n2) {
  if (n2.isChild()) {
    var r2 = n2._private.parent;
    t2.has(r2.id()) || e2.push(r2);
  }
}
Bc.forEachUp = function(e2) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return Vc(this, e2, t2, Uc);
};
function Wc(e2, t2, n2) {
  Uc(e2, t2, n2), Hc(e2, t2, n2);
}
Bc.forEachUpAndDown = function(e2) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return Vc(this, e2, t2, Wc);
}, Bc.ancestors = Bc.parents;
var Gc = Kc = { data: mc.data({ field: `data`, bindingEvent: `data`, allowBinding: true, allowSetting: true, settingEvent: `data`, settingTriggersEvent: true, triggerFnName: `trigger`, allowGetting: true, immutableKeys: { id: true, source: true, target: true, parent: true }, updateStyle: true }), removeData: mc.removeData({ field: `data`, event: `data`, triggerFnName: `trigger`, triggerEvent: true, immutableKeys: { id: true, source: true, target: true, parent: true }, updateStyle: true }), scratch: mc.data({ field: `scratch`, bindingEvent: `scratch`, allowBinding: true, allowSetting: true, settingEvent: `scratch`, settingTriggersEvent: true, triggerFnName: `trigger`, allowGetting: true, updateStyle: true }), removeScratch: mc.removeData({ field: `scratch`, event: `scratch`, triggerFnName: `trigger`, triggerEvent: true, updateStyle: true }), rscratch: mc.data({ field: `rscratch`, allowBinding: false, allowSetting: true, settingTriggersEvent: false, allowGetting: true }), removeRscratch: mc.removeData({ field: `rscratch`, triggerEvent: false }), id: function() {
  var e2 = this[0];
  if (e2) return e2._private.data.id;
} }, Kc;
Gc.attr = Gc.data, Gc.removeAttr = Gc.removeData;
var qc = Kc, Jc = {};
function Yc(e2) {
  return function(t2) {
    var n2 = this;
    if (t2 === void 0 && (t2 = true), n2.length !== 0) if (n2.isNode() && !n2.removed()) {
      for (var r2 = 0, i2 = n2[0], a2 = i2._private.edges, o2 = 0; o2 < a2.length; o2++) {
        var s2 = a2[o2];
        !t2 && s2.isLoop() || (r2 += e2(i2, s2));
      }
      return r2;
    } else return;
  };
}
X(Jc, { degree: Yc(function(e2, t2) {
  return t2.source().same(t2.target()) ? 2 : 1;
}), indegree: Yc(function(e2, t2) {
  return t2.target().same(e2) ? 1 : 0;
}), outdegree: Yc(function(e2, t2) {
  return t2.source().same(e2) ? 1 : 0;
}) });
function Xc(e2, t2) {
  return function(n2) {
    for (var r2, i2 = this.nodes(), a2 = 0; a2 < i2.length; a2++) {
      var o2 = i2[a2][e2](n2);
      o2 !== void 0 && (r2 === void 0 || t2(o2, r2)) && (r2 = o2);
    }
    return r2;
  };
}
X(Jc, { minDegree: Xc(`degree`, function(e2, t2) {
  return e2 < t2;
}), maxDegree: Xc(`degree`, function(e2, t2) {
  return e2 > t2;
}), minIndegree: Xc(`indegree`, function(e2, t2) {
  return e2 < t2;
}), maxIndegree: Xc(`indegree`, function(e2, t2) {
  return e2 > t2;
}), minOutdegree: Xc(`outdegree`, function(e2, t2) {
  return e2 < t2;
}), maxOutdegree: Xc(`outdegree`, function(e2, t2) {
  return e2 > t2;
}) }), X(Jc, { totalDegree: function(e2) {
  for (var t2 = 0, n2 = this.nodes(), r2 = 0; r2 < n2.length; r2++) t2 += n2[r2].degree(e2);
  return t2;
} });
var Zc, Qc, $c = function(e2, t2, n2) {
  for (var r2 = 0; r2 < e2.length; r2++) {
    var i2 = e2[r2];
    if (!i2.locked()) {
      var a2 = i2._private.position, o2 = { x: t2.x == null ? 0 : t2.x - a2.x, y: t2.y == null ? 0 : t2.y - a2.y };
      i2.isParent() && !(o2.x === 0 && o2.y === 0) && i2.children().shift(o2, n2), i2.dirtyBoundingBoxCache();
    }
  }
}, el = { field: `position`, bindingEvent: `position`, allowBinding: true, allowSetting: true, settingEvent: `position`, settingTriggersEvent: true, triggerFnName: `emitAndNotify`, allowGetting: true, validKeys: [`x`, `y`], beforeGet: function(e2) {
  e2.updateCompoundBounds();
}, beforeSet: function(e2, t2) {
  $c(e2, t2, false);
}, onSet: function(e2) {
  e2.dirtyCompoundBoundsCache();
}, canSet: function(e2) {
  return !e2.locked();
} };
Zc = Qc = { position: mc.data(el), silentPosition: mc.data(X({}, el, { allowBinding: false, allowSetting: true, settingTriggersEvent: false, allowGetting: false, beforeSet: function(e2, t2) {
  $c(e2, t2, true);
}, onSet: function(e2) {
  e2.dirtyCompoundBoundsCache();
} })), positions: function(e2, t2) {
  if (O(e2)) t2 ? this.silentPosition(e2) : this.position(e2);
  else if (E(e2)) {
    var n2 = e2, r2 = this.cy();
    r2.startBatch();
    for (var i2 = 0; i2 < this.length; i2++) {
      var a2 = this[i2], o2 = void 0;
      (o2 = n2(a2, i2)) && (t2 ? a2.silentPosition(o2) : a2.position(o2));
    }
    r2.endBatch();
  }
  return this;
}, silentPositions: function(e2) {
  return this.positions(e2, true);
}, shift: function(e2, t2, n2) {
  var r2;
  if (O(e2) ? (r2 = { x: A(e2.x) ? e2.x : 0, y: A(e2.y) ? e2.y : 0 }, n2 = t2) : T(e2) && A(t2) && (r2 = { x: 0, y: 0 }, r2[e2] = t2), r2 != null) {
    var i2 = this.cy();
    i2.startBatch();
    for (var a2 = 0; a2 < this.length; a2++) {
      var o2 = this[a2];
      if (!(i2.hasCompoundNodes() && o2.isChild() && o2.ancestors().anySame(this))) {
        var s2 = o2.position(), c2 = { x: s2.x + r2.x, y: s2.y + r2.y };
        n2 ? o2.silentPosition(c2) : o2.position(c2);
      }
    }
    i2.endBatch();
  }
  return this;
}, silentShift: function(e2, t2) {
  return O(e2) ? this.shift(e2, true) : T(e2) && A(t2) && this.shift(e2, t2, true), this;
}, renderedPosition: function(e2, t2) {
  var n2 = this[0], r2 = this.cy(), i2 = r2.zoom(), a2 = r2.pan(), o2 = O(e2) ? e2 : void 0, s2 = o2 !== void 0 || t2 !== void 0 && T(e2);
  if (n2 && n2.isNode()) if (s2) for (var c2 = 0; c2 < this.length; c2++) {
    var l2 = this[c2];
    t2 === void 0 ? o2 !== void 0 && l2.position(An(o2, i2, a2)) : l2.position(e2, (t2 - a2[e2]) / i2);
  }
  else return o2 = kn(n2.position(), i2, a2), e2 === void 0 ? o2 : o2[e2];
  else if (!s2) return;
  return this;
}, relativePosition: function(e2, t2) {
  var n2 = this[0], r2 = this.cy(), i2 = O(e2) ? e2 : void 0, a2 = i2 !== void 0 || t2 !== void 0 && T(e2), o2 = r2.hasCompoundNodes();
  if (n2 && n2.isNode()) if (a2) for (var s2 = 0; s2 < this.length; s2++) {
    var c2 = this[s2], l2 = o2 ? c2.parent() : null, u2 = l2 && l2.length > 0, d2 = u2;
    u2 && (l2 = l2[0]);
    var f2 = d2 ? l2.position() : { x: 0, y: 0 };
    t2 === void 0 ? i2 !== void 0 && c2.position({ x: i2.x + f2.x, y: i2.y + f2.y }) : c2.position(e2, t2 + f2[e2]);
  }
  else {
    var p2 = n2.position(), m2 = o2 ? n2.parent() : null, h2 = m2 && m2.length > 0, g2 = h2;
    h2 && (m2 = m2[0]);
    var _2 = g2 ? m2.position() : { x: 0, y: 0 };
    return i2 = { x: p2.x - _2.x, y: p2.y - _2.y }, e2 === void 0 ? i2 : i2[e2];
  }
  else if (!a2) return;
  return this;
} }, Zc.modelPosition = Zc.point = Zc.position, Zc.modelPositions = Zc.points = Zc.positions, Zc.renderedPoint = Zc.renderedPosition, Zc.relativePoint = Zc.relativePosition;
var tl = Qc, nl = rl = {}, rl;
rl.renderedBoundingBox = function(e2) {
  var t2 = this.boundingBox(e2), n2 = this.cy(), r2 = n2.zoom(), i2 = n2.pan(), a2 = t2.x1 * r2 + i2.x, o2 = t2.x2 * r2 + i2.x, s2 = t2.y1 * r2 + i2.y, c2 = t2.y2 * r2 + i2.y;
  return { x1: a2, x2: o2, y1: s2, y2: c2, w: o2 - a2, h: c2 - s2 };
}, rl.dirtyCompoundBoundsCache = function() {
  var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, t2 = this.cy();
  return !t2.styleEnabled() || !t2.hasCompoundNodes() || this.forEachUp(function(t3) {
    if (t3.isParent()) {
      var n2 = t3._private;
      n2.compoundBoundsClean = false, n2.bbCache = null, e2 || t3.emitAndNotify(`bounds`);
    }
  }), this;
}, rl.updateCompoundBounds = function() {
  var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, t2 = this.cy();
  if (!t2.styleEnabled() || !t2.hasCompoundNodes() || !e2 && t2.batching()) return this;
  function n2(e3) {
    if (!e3.isParent()) return;
    var t3 = e3._private, n3 = e3.children(), r3 = e3.pstyle(`compound-sizing-wrt-labels`).value === `include`, i3 = { width: { val: e3.pstyle(`min-width`).pfValue, left: e3.pstyle(`min-width-bias-left`), right: e3.pstyle(`min-width-bias-right`) }, height: { val: e3.pstyle(`min-height`).pfValue, top: e3.pstyle(`min-height-bias-top`), bottom: e3.pstyle(`min-height-bias-bottom`) } }, a3 = n3.boundingBox({ includeLabels: r3, includeOverlays: false, useCache: false }), o2 = t3.position;
    (a3.w === 0 || a3.h === 0) && (a3 = { w: e3.pstyle(`width`).pfValue, h: e3.pstyle(`height`).pfValue }, a3.x1 = o2.x - a3.w / 2, a3.x2 = o2.x + a3.w / 2, a3.y1 = o2.y - a3.h / 2, a3.y2 = o2.y + a3.h / 2);
    function s2(e4, t4, n4) {
      var r4 = 0, i4 = 0, a4 = t4 + n4;
      return e4 > 0 && a4 > 0 && (r4 = t4 / a4 * e4, i4 = n4 / a4 * e4), { biasDiff: r4, biasComplementDiff: i4 };
    }
    function c2(e4, t4, n4, r4) {
      if (n4.units === `%`) switch (r4) {
        case `width`:
          return e4 > 0 ? n4.pfValue * e4 : 0;
        case `height`:
          return t4 > 0 ? n4.pfValue * t4 : 0;
        case `average`:
          return e4 > 0 && t4 > 0 ? n4.pfValue * (e4 + t4) / 2 : 0;
        case `min`:
          return e4 > 0 && t4 > 0 ? e4 > t4 ? n4.pfValue * t4 : n4.pfValue * e4 : 0;
        case `max`:
          return e4 > 0 && t4 > 0 ? e4 > t4 ? n4.pfValue * e4 : n4.pfValue * t4 : 0;
        default:
          return 0;
      }
      else if (n4.units === `px`) return n4.pfValue;
      else return 0;
    }
    var l2 = i3.width.left.value;
    i3.width.left.units === `px` && i3.width.val > 0 && (l2 = l2 * 100 / i3.width.val);
    var u2 = i3.width.right.value;
    i3.width.right.units === `px` && i3.width.val > 0 && (u2 = u2 * 100 / i3.width.val);
    var d2 = i3.height.top.value;
    i3.height.top.units === `px` && i3.height.val > 0 && (d2 = d2 * 100 / i3.height.val);
    var f2 = i3.height.bottom.value;
    i3.height.bottom.units === `px` && i3.height.val > 0 && (f2 = f2 * 100 / i3.height.val);
    var p2 = s2(i3.width.val - a3.w, l2, u2), m2 = p2.biasDiff, h2 = p2.biasComplementDiff, g2 = s2(i3.height.val - a3.h, d2, f2), _2 = g2.biasDiff, v2 = g2.biasComplementDiff;
    t3.autoPadding = c2(a3.w, a3.h, e3.pstyle(`padding`), e3.pstyle(`padding-relative-to`).value), t3.autoWidth = Math.max(a3.w, i3.width.val), o2.x = (-m2 + a3.x1 + a3.x2 + h2) / 2, t3.autoHeight = Math.max(a3.h, i3.height.val), o2.y = (-_2 + a3.y1 + a3.y2 + v2) / 2;
  }
  for (var r2 = 0; r2 < this.length; r2++) {
    var i2 = this[r2], a2 = i2._private;
    (!a2.compoundBoundsClean || e2) && (n2(i2), t2.batching() || (a2.compoundBoundsClean = true));
  }
  return this;
};
var il = function(e2) {
  return e2 === 1 / 0 || e2 === -1 / 0 ? 0 : e2;
}, al = function(e2, t2, n2, r2, i2) {
  r2 - t2 === 0 || i2 - n2 === 0 || t2 == null || n2 == null || r2 == null || i2 == null || (e2.x1 = t2 < e2.x1 ? t2 : e2.x1, e2.x2 = r2 > e2.x2 ? r2 : e2.x2, e2.y1 = n2 < e2.y1 ? n2 : e2.y1, e2.y2 = i2 > e2.y2 ? i2 : e2.y2, e2.w = e2.x2 - e2.x1, e2.h = e2.y2 - e2.y1);
}, ol = function(e2, t2) {
  return t2 == null ? e2 : al(e2, t2.x1, t2.y1, t2.x2, t2.y2);
}, sl = function(e2, t2, n2) {
  return Xt(e2, t2, n2);
}, cl = function(e2, t2, n2) {
  if (!t2.cy().headless()) {
    var r2 = t2._private, i2 = r2.rstyle, a2 = i2.arrowWidth / 2, o2 = t2.pstyle(n2 + `-arrow-shape`).value, s2, c2;
    if (o2 !== `none`) {
      n2 === `source` ? (s2 = i2.srcX, c2 = i2.srcY) : n2 === `target` ? (s2 = i2.tgtX, c2 = i2.tgtY) : (s2 = i2.midX, c2 = i2.midY);
      var l2 = r2.arrowBounds = r2.arrowBounds || {}, u2 = l2[n2] = l2[n2] || {};
      u2.x1 = s2 - a2, u2.y1 = c2 - a2, u2.x2 = s2 + a2, u2.y2 = c2 + a2, u2.w = u2.x2 - u2.x1, u2.h = u2.y2 - u2.y1, Qn(u2, 1), al(e2, u2.x1, u2.y1, u2.x2, u2.y2);
    }
  }
}, ll = function(e2, t2, n2) {
  if (!t2.cy().headless()) {
    var r2 = n2 ? n2 + `-` : ``, i2 = t2._private, a2 = i2.rstyle;
    if (t2.pstyle(r2 + `label`).strValue) {
      var o2 = t2.pstyle(`text-halign`), s2 = t2.pstyle(`text-valign`), c2 = sl(a2, `labelWidth`, n2), l2 = sl(a2, `labelHeight`, n2), u2 = sl(a2, `labelX`, n2), d2 = sl(a2, `labelY`, n2), f2 = t2.pstyle(r2 + `text-margin-x`).pfValue, p2 = t2.pstyle(r2 + `text-margin-y`).pfValue, m2 = t2.isEdge(), h2 = t2.pstyle(r2 + `text-rotation`), g2 = t2.pstyle(`text-outline-width`).pfValue, _2 = t2.pstyle(`text-border-width`).pfValue / 2, v2 = t2.pstyle(`text-background-padding`).pfValue, y2 = 2, b2 = l2, x2 = c2, S2 = x2 / 2, C2 = b2 / 2, w2, T2, E2, D2;
      if (m2) w2 = u2 - S2, T2 = u2 + S2, E2 = d2 - C2, D2 = d2 + C2;
      else {
        switch (o2.value) {
          case `left`:
            w2 = u2 - x2, T2 = u2;
            break;
          case `center`:
            w2 = u2 - S2, T2 = u2 + S2;
            break;
          case `right`:
            w2 = u2, T2 = u2 + x2;
            break;
        }
        switch (s2.value) {
          case `top`:
            E2 = d2 - b2, D2 = d2;
            break;
          case `center`:
            E2 = d2 - C2, D2 = d2 + C2;
            break;
          case `bottom`:
            E2 = d2, D2 = d2 + b2;
            break;
        }
      }
      var O2 = f2 - Math.max(g2, _2) - v2 - y2, k2 = f2 + Math.max(g2, _2) + v2 + y2, A2 = p2 - Math.max(g2, _2) - v2 - y2, j2 = p2 + Math.max(g2, _2) + v2 + y2;
      w2 += O2, T2 += k2, E2 += A2, D2 += j2;
      var M2 = n2 || `main`, N2 = i2.labelBounds, P2 = N2[M2] = N2[M2] || {};
      P2.x1 = w2, P2.y1 = E2, P2.x2 = T2, P2.y2 = D2, P2.w = T2 - w2, P2.h = D2 - E2, P2.leftPad = O2, P2.rightPad = k2, P2.topPad = A2, P2.botPad = j2;
      var F2 = m2 && h2.strValue === `autorotate`, I2 = h2.pfValue != null && h2.pfValue !== 0;
      if (F2 || I2) {
        var L2 = F2 ? sl(i2.rstyle, `labelAngle`, n2) : h2.pfValue, R2 = Math.cos(L2), z2 = Math.sin(L2), B2 = (w2 + T2) / 2, V2 = (E2 + D2) / 2;
        if (!m2) {
          switch (o2.value) {
            case `left`:
              B2 = T2;
              break;
            case `right`:
              B2 = w2;
              break;
          }
          switch (s2.value) {
            case `top`:
              V2 = D2;
              break;
            case `bottom`:
              V2 = E2;
              break;
          }
        }
        var H2 = function(e3, t3) {
          return e3 -= B2, t3 -= V2, { x: e3 * R2 - t3 * z2 + B2, y: e3 * z2 + t3 * R2 + V2 };
        }, U2 = H2(w2, E2), W2 = H2(w2, D2), G2 = H2(T2, E2), K2 = H2(T2, D2);
        w2 = Math.min(U2.x, W2.x, G2.x, K2.x), T2 = Math.max(U2.x, W2.x, G2.x, K2.x), E2 = Math.min(U2.y, W2.y, G2.y, K2.y), D2 = Math.max(U2.y, W2.y, G2.y, K2.y);
      }
      var q2 = M2 + `Rot`, J2 = N2[q2] = N2[q2] || {};
      J2.x1 = w2, J2.y1 = E2, J2.x2 = T2, J2.y2 = D2, J2.w = T2 - w2, J2.h = D2 - E2, al(e2, w2, E2, T2, D2), al(i2.labelBounds.all, w2, E2, T2, D2);
    }
    return e2;
  }
}, ul = function(e2, t2) {
  if (!t2.cy().headless()) {
    var n2 = t2.pstyle(`outline-opacity`).value, r2 = t2.pstyle(`outline-width`).value + t2.pstyle(`outline-offset`).value;
    dl(e2, t2, n2, r2, `outside`, r2 / 2);
  }
}, dl = function(e2, t2, n2, r2, i2, a2) {
  if (!(n2 === 0 || r2 <= 0 || i2 === `inside`)) {
    var o2 = t2.cy(), s2 = t2.pstyle(`shape`).value, c2 = o2.renderer().nodeShapes[s2], l2 = t2.position(), u2 = l2.x, d2 = l2.y, f2 = t2.width(), p2 = t2.height();
    c2.hasMiterBounds ? (i2 === `center` && (r2 /= 2), ol(e2, c2.miterBounds(u2, d2, f2, p2, r2))) : a2 != null && a2 > 0 && $n(e2, [a2, a2, a2, a2]);
  }
}, fl = function(e2, t2) {
  if (!t2.cy().headless()) {
    var n2 = t2.pstyle(`border-opacity`).value, r2 = t2.pstyle(`border-width`).pfValue, i2 = t2.pstyle(`border-position`).value;
    dl(e2, t2, n2, r2, i2);
  }
}, pl = function(e2, t2) {
  var n2 = e2._private.cy, r2 = n2.styleEnabled(), i2 = n2.headless(), a2 = qn(), o2 = e2._private, s2 = e2.isNode(), c2 = e2.isEdge(), l2, u2, d2, f2, p2, m2, h2 = o2.rstyle, g2 = s2 && r2 ? e2.pstyle(`bounds-expansion`).pfValue : [0], _2 = function(e3) {
    return e3.pstyle(`display`).value !== `none`;
  }, v2 = !r2 || _2(e2) && (!c2 || _2(e2.source()) && _2(e2.target()));
  if (v2) {
    var y2 = 0, b2 = 0;
    r2 && t2.includeOverlays && (y2 = e2.pstyle(`overlay-opacity`).value, y2 !== 0 && (b2 = e2.pstyle(`overlay-padding`).value));
    var x2 = 0, S2 = 0;
    r2 && t2.includeUnderlays && (x2 = e2.pstyle(`underlay-opacity`).value, x2 !== 0 && (S2 = e2.pstyle(`underlay-padding`).value));
    var C2 = Math.max(b2, S2), w2 = 0, T2 = 0;
    if (r2 && (w2 = e2.pstyle(`width`).pfValue, T2 = w2 / 2), s2 && t2.includeNodes) {
      var E2 = e2.position();
      p2 = E2.x, m2 = E2.y;
      var D2 = e2.outerWidth() / 2, O2 = e2.outerHeight() / 2;
      l2 = p2 - D2, u2 = p2 + D2, d2 = m2 - O2, f2 = m2 + O2, al(a2, l2, d2, u2, f2), r2 && ul(a2, e2), r2 && t2.includeOutlines && !i2 && ul(a2, e2), r2 && fl(a2, e2);
    } else if (c2 && t2.includeEdges) if (r2 && !i2) {
      var k2 = e2.pstyle(`curve-style`).strValue;
      if (l2 = Math.min(h2.srcX, h2.midX, h2.tgtX), u2 = Math.max(h2.srcX, h2.midX, h2.tgtX), d2 = Math.min(h2.srcY, h2.midY, h2.tgtY), f2 = Math.max(h2.srcY, h2.midY, h2.tgtY), l2 -= T2, u2 += T2, d2 -= T2, f2 += T2, al(a2, l2, d2, u2, f2), k2 === `haystack`) {
        var A2 = h2.haystackPts;
        if (A2 && A2.length === 2) {
          if (l2 = A2[0].x, d2 = A2[0].y, u2 = A2[1].x, f2 = A2[1].y, l2 > u2) {
            var j2 = l2;
            l2 = u2, u2 = j2;
          }
          if (d2 > f2) {
            var M2 = d2;
            d2 = f2, f2 = M2;
          }
          al(a2, l2 - T2, d2 - T2, u2 + T2, f2 + T2);
        }
      } else if (k2 === `bezier` || k2 === `unbundled-bezier` || ee(k2, `segments`) || ee(k2, `taxi`)) {
        var N2;
        switch (k2) {
          case `bezier`:
          case `unbundled-bezier`:
            N2 = h2.bezierPts;
            break;
          case `segments`:
          case `taxi`:
          case `round-segments`:
          case `round-taxi`:
            N2 = h2.linePts;
            break;
        }
        if (N2 != null) for (var P2 = 0; P2 < N2.length; P2++) {
          var F2 = N2[P2];
          l2 = F2.x - T2, u2 = F2.x + T2, d2 = F2.y - T2, f2 = F2.y + T2, al(a2, l2, d2, u2, f2);
        }
      }
    } else {
      var I2 = e2.source().position(), L2 = e2.target().position();
      if (l2 = I2.x, u2 = L2.x, d2 = I2.y, f2 = L2.y, l2 > u2) {
        var R2 = l2;
        l2 = u2, u2 = R2;
      }
      if (d2 > f2) {
        var z2 = d2;
        d2 = f2, f2 = z2;
      }
      l2 -= T2, u2 += T2, d2 -= T2, f2 += T2, al(a2, l2, d2, u2, f2);
    }
    if (r2 && t2.includeEdges && c2 && (cl(a2, e2, `mid-source`), cl(a2, e2, `mid-target`), cl(a2, e2, `source`), cl(a2, e2, `target`)), r2 && e2.pstyle(`ghost`).value === `yes`) {
      var B2 = e2.pstyle(`ghost-offset-x`).pfValue, V2 = e2.pstyle(`ghost-offset-y`).pfValue;
      al(a2, a2.x1 + B2, a2.y1 + V2, a2.x2 + B2, a2.y2 + V2);
    }
    var H2 = o2.bodyBounds = o2.bodyBounds || {};
    er(H2, a2), $n(H2, g2), Qn(H2, 1), r2 && (l2 = a2.x1, u2 = a2.x2, d2 = a2.y1, f2 = a2.y2, al(a2, l2 - C2, d2 - C2, u2 + C2, f2 + C2));
    var U2 = o2.overlayBounds = o2.overlayBounds || {};
    er(U2, a2), $n(U2, g2), Qn(U2, 1);
    var W2 = o2.labelBounds = o2.labelBounds || {};
    W2.all == null ? W2.all = qn() : Yn(W2.all), r2 && t2.includeLabels && (t2.includeMainLabels && ll(a2, e2, null), c2 && (t2.includeSourceLabels && ll(a2, e2, `source`), t2.includeTargetLabels && ll(a2, e2, `target`)));
  }
  return a2.x1 = il(a2.x1), a2.y1 = il(a2.y1), a2.x2 = il(a2.x2), a2.y2 = il(a2.y2), a2.w = il(a2.x2 - a2.x1), a2.h = il(a2.y2 - a2.y1), a2.w > 0 && a2.h > 0 && v2 && ($n(a2, g2), Qn(a2, 1)), a2;
}, ml = function(e2) {
  var t2 = 0, n2 = function(e3) {
    return (e3 ? 1 : 0) << t2++;
  }, r2 = 0;
  return r2 += n2(e2.incudeNodes), r2 += n2(e2.includeEdges), r2 += n2(e2.includeLabels), r2 += n2(e2.includeMainLabels), r2 += n2(e2.includeSourceLabels), r2 += n2(e2.includeTargetLabels), r2 += n2(e2.includeOverlays), r2 += n2(e2.includeOutlines), r2;
}, hl = function(e2) {
  var t2 = function(e3) {
    return Math.round(e3);
  };
  if (e2.isEdge()) {
    var n2 = e2.source().position(), r2 = e2.target().position();
    return St([t2(n2.x), t2(n2.y), t2(r2.x), t2(r2.y)]);
  } else {
    var i2 = e2.position();
    return St([t2(i2.x), t2(i2.y)]);
  }
}, gl = function(e2, t2) {
  var n2 = e2._private, r2, i2 = e2.isEdge(), a2 = (t2 == null ? vl : ml(t2)) === vl;
  if (n2.bbCache == null ? (r2 = pl(e2, _l), n2.bbCache = r2, n2.bbCachePosKey = hl(e2)) : r2 = n2.bbCache, !a2) {
    var o2 = e2.isNode();
    r2 = qn(), (t2.includeNodes && o2 || t2.includeEdges && !o2) && (t2.includeOverlays ? ol(r2, n2.overlayBounds) : ol(r2, n2.bodyBounds)), t2.includeLabels && (t2.includeMainLabels && (!i2 || t2.includeSourceLabels && t2.includeTargetLabels) ? ol(r2, n2.labelBounds.all) : (t2.includeMainLabels && ol(r2, n2.labelBounds.mainRot), t2.includeSourceLabels && ol(r2, n2.labelBounds.sourceRot), t2.includeTargetLabels && ol(r2, n2.labelBounds.targetRot))), r2.w = r2.x2 - r2.x1, r2.h = r2.y2 - r2.y1;
  }
  return r2;
}, _l = { includeNodes: true, includeEdges: true, includeLabels: true, includeMainLabels: true, includeSourceLabels: true, includeTargetLabels: true, includeOverlays: true, includeUnderlays: true, includeOutlines: true, useCache: true }, vl = ml(_l), yl = Kt(_l);
rl.boundingBox = function(e2) {
  var t2, n2 = e2 === void 0 || e2.useCache === void 0 || e2.useCache === true, r2 = W(function(e3) {
    var t3 = e3._private;
    return t3.bbCache == null || t3.styleDirty || t3.bbCachePosKey !== hl(e3);
  }, function(e3) {
    return e3.id();
  });
  if (n2 && this.length === 1 && !r2(this[0])) e2 = e2 === void 0 ? _l : yl(e2), t2 = gl(this[0], e2);
  else {
    t2 = qn(), e2 || (e2 = _l);
    var i2 = yl(e2), a2 = this, o2 = a2.cy().styleEnabled();
    this.edges().forEach(r2), this.nodes().forEach(r2), o2 && this.recalculateRenderedStyle(n2), this.updateCompoundBounds(!n2);
    for (var s2 = 0; s2 < a2.length; s2++) {
      var c2 = a2[s2];
      r2(c2) && c2.dirtyBoundingBoxCache(), ol(t2, gl(c2, i2));
    }
  }
  return t2.x1 = il(t2.x1), t2.y1 = il(t2.y1), t2.x2 = il(t2.x2), t2.y2 = il(t2.y2), t2.w = il(t2.x2 - t2.x1), t2.h = il(t2.y2 - t2.y1), t2;
}, rl.dirtyBoundingBoxCache = function() {
  for (var e2 = 0; e2 < this.length; e2++) {
    var t2 = this[e2]._private;
    t2.bbCache = null, t2.bbCachePosKey = null, t2.bodyBounds = null, t2.overlayBounds = null, t2.labelBounds.all = null, t2.labelBounds.source = null, t2.labelBounds.target = null, t2.labelBounds.main = null, t2.labelBounds.sourceRot = null, t2.labelBounds.targetRot = null, t2.labelBounds.mainRot = null, t2.arrowBounds.source = null, t2.arrowBounds.target = null, t2.arrowBounds[`mid-source`] = null, t2.arrowBounds[`mid-target`] = null;
  }
  return this.emitAndNotify(`bounds`), this;
}, rl.boundingBoxAt = function(e2) {
  var t2 = this.nodes(), n2 = this.cy(), r2 = n2.hasCompoundNodes(), i2 = n2.collection();
  if (r2 && (i2 = t2.filter(function(e3) {
    return e3.isParent();
  }), t2 = t2.not(i2)), O(e2)) {
    var a2 = e2;
    e2 = function() {
      return a2;
    };
  }
  var o2 = function(t3, n3) {
    return t3._private.bbAtOldPos = e2(t3, n3);
  }, s2 = function(e3) {
    return e3._private.bbAtOldPos;
  };
  n2.startBatch(), t2.forEach(o2).silentPositions(e2), r2 && (i2.dirtyCompoundBoundsCache(), i2.dirtyBoundingBoxCache(), i2.updateCompoundBounds(true));
  var c2 = Jn(this.boundingBox({ useCache: false }));
  return t2.silentPositions(s2), r2 && (i2.dirtyCompoundBoundsCache(), i2.dirtyBoundingBoxCache(), i2.updateCompoundBounds(true)), n2.endBatch(), c2;
}, nl.boundingbox = nl.bb = nl.boundingBox, nl.renderedBoundingbox = nl.renderedBoundingBox;
var bl = rl, xl = Sl = {}, Sl, Cl = function(e2) {
  e2.uppercaseName = J(e2.name), e2.autoName = `auto` + e2.uppercaseName, e2.labelName = `label` + e2.uppercaseName, e2.outerName = `outer` + e2.uppercaseName, e2.uppercaseOuterName = J(e2.outerName), xl[e2.name] = function() {
    var t2 = this[0], n2 = t2._private, r2 = n2.cy._private.styleEnabled;
    if (t2) if (r2) {
      if (t2.isParent()) return t2.updateCompoundBounds(), n2[e2.autoName] || 0;
      var i2 = t2.pstyle(e2.name);
      switch (i2.strValue) {
        case `label`:
          return t2.recalculateRenderedStyle(), n2.rstyle[e2.labelName] || 0;
        default:
          return i2.pfValue;
      }
    } else return 1;
  }, xl[`outer` + e2.uppercaseName] = function() {
    var t2 = this[0], n2 = t2._private.cy._private.styleEnabled;
    if (t2) if (n2) {
      var r2 = t2[e2.name](), i2 = t2.pstyle(`border-position`).value, a2 = i2 === `center` ? t2.pstyle(`border-width`).pfValue : i2 === `outside` ? 2 * t2.pstyle(`border-width`).pfValue : 0, o2 = 2 * t2.padding();
      return r2 + a2 + o2;
    } else return 1;
  }, xl[`rendered` + e2.uppercaseName] = function() {
    var t2 = this[0];
    if (t2) return t2[e2.name]() * this.cy().zoom();
  }, xl[`rendered` + e2.uppercaseOuterName] = function() {
    var t2 = this[0];
    if (t2) return t2[e2.outerName]() * this.cy().zoom();
  };
};
Cl({ name: `width` }), Cl({ name: `height` }), Sl.padding = function() {
  var e2 = this[0], t2 = e2._private;
  return e2.isParent() ? (e2.updateCompoundBounds(), t2.autoPadding === void 0 ? e2.pstyle(`padding`).pfValue : t2.autoPadding) : e2.pstyle(`padding`).pfValue;
}, Sl.paddedHeight = function() {
  var e2 = this[0];
  return e2.height() + 2 * e2.padding();
}, Sl.paddedWidth = function() {
  var e2 = this[0];
  return e2.width() + 2 * e2.padding();
};
var wl = Sl, Tl = function(e2, t2) {
  if (e2.isEdge() && e2.takesUpSpace()) return t2(e2);
}, El = function(e2, t2) {
  if (e2.isEdge() && e2.takesUpSpace()) {
    var n2 = e2.cy();
    return kn(t2(e2), n2.zoom(), n2.pan());
  }
}, Dl = function(e2, t2) {
  if (e2.isEdge() && e2.takesUpSpace()) {
    var n2 = e2.cy(), r2 = n2.pan(), i2 = n2.zoom();
    return t2(e2).map(function(e3) {
      return kn(e3, i2, r2);
    });
  }
}, Ol = { controlPoints: { get: function(e2) {
  return e2.renderer().getControlPoints(e2);
}, mult: true }, segmentPoints: { get: function(e2) {
  return e2.renderer().getSegmentPoints(e2);
}, mult: true }, sourceEndpoint: { get: function(e2) {
  return e2.renderer().getSourceEndpoint(e2);
} }, targetEndpoint: { get: function(e2) {
  return e2.renderer().getTargetEndpoint(e2);
} }, midpoint: { get: function(e2) {
  return e2.renderer().getEdgeMidpoint(e2);
} } }, kl = function(e2) {
  return `rendered` + e2[0].toUpperCase() + e2.substr(1);
}, Al = X({}, tl, bl, wl, Object.keys(Ol).reduce(function(e2, t2) {
  var n2 = Ol[t2], r2 = kl(t2);
  return e2[t2] = function() {
    return Tl(this, n2.get);
  }, n2.mult ? e2[r2] = function() {
    return Dl(this, n2.get);
  } : e2[r2] = function() {
    return El(this, n2.get);
  }, e2;
}, {})), jl = function(e2, t2) {
  this.recycle(e2, t2);
};
function Ml() {
  return false;
}
function Nl() {
  return true;
}
jl.prototype = { instanceString: function() {
  return `event`;
}, recycle: function(e2, t2) {
  if (this.isImmediatePropagationStopped = this.isPropagationStopped = this.isDefaultPrevented = Ml, e2 != null && e2.preventDefault ? (this.type = e2.type, this.isDefaultPrevented = e2.defaultPrevented ? Nl : Ml) : e2 != null && e2.type ? t2 = e2 : this.type = e2, t2 != null && (this.originalEvent = t2.originalEvent, this.type = t2.type == null ? this.type : t2.type, this.cy = t2.cy, this.target = t2.target, this.position = t2.position, this.renderedPosition = t2.renderedPosition, this.namespace = t2.namespace, this.layout = t2.layout), this.cy != null && this.position != null && this.renderedPosition == null) {
    var n2 = this.position, r2 = this.cy.zoom(), i2 = this.cy.pan();
    this.renderedPosition = { x: n2.x * r2 + i2.x, y: n2.y * r2 + i2.y };
  }
  this.timeStamp = e2 && e2.timeStamp || Date.now();
}, preventDefault: function() {
  this.isDefaultPrevented = Nl;
  var e2 = this.originalEvent;
  e2 && e2.preventDefault && e2.preventDefault();
}, stopPropagation: function() {
  this.isPropagationStopped = Nl;
  var e2 = this.originalEvent;
  e2 && e2.stopPropagation && e2.stopPropagation();
}, stopImmediatePropagation: function() {
  this.isImmediatePropagationStopped = Nl, this.stopPropagation();
}, isDefaultPrevented: Ml, isPropagationStopped: Ml, isImmediatePropagationStopped: Ml };
var Pl = /^([^.]+)(\.(?:[^.]+))?$/, Fl = `.*`, Il = { qualifierCompare: function(e2, t2) {
  return e2 === t2;
}, eventMatches: function() {
  return true;
}, addEventFields: function() {
}, callbackContext: function(e2) {
  return e2;
}, beforeEmit: function() {
}, afterEmit: function() {
}, bubble: function() {
  return false;
}, parent: function() {
  return null;
}, context: null }, Ll = Object.keys(Il), Rl = {};
function zl() {
  for (var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Rl, t2 = arguments.length > 1 ? arguments[1] : void 0, n2 = 0; n2 < Ll.length; n2++) {
    var r2 = Ll[n2];
    this[r2] = e2[r2] || Il[r2];
  }
  this.context = t2 || this.context, this.listeners = [], this.emitting = 0;
}
var Bl = zl.prototype, Vl = function(e2, t2, n2, r2, i2, a2, o2) {
  E(r2) && (i2 = r2, r2 = null), o2 && (a2 = a2 == null ? o2 : X({}, a2, o2));
  for (var s2 = D(n2) ? n2 : n2.split(/\s+/), c2 = 0; c2 < s2.length; c2++) {
    var l2 = s2[c2];
    if (!z(l2)) {
      var u2 = l2.match(Pl);
      if (u2) {
        var d2 = u2[1];
        if (t2(e2, l2, d2, u2[2] ? u2[2] : null, r2, i2, a2) === false) break;
      }
    }
  }
}, Hl = function(e2, t2) {
  return e2.addEventFields(e2.context, t2), new jl(t2.type, t2);
}, Ul = function(e2, t2, n2) {
  if (R(n2)) {
    t2(e2, n2);
    return;
  } else if (O(n2)) {
    t2(e2, Hl(e2, n2));
    return;
  }
  for (var r2 = D(n2) ? n2 : n2.split(/\s+/), i2 = 0; i2 < r2.length; i2++) {
    var a2 = r2[i2];
    if (!z(a2)) {
      var o2 = a2.match(Pl);
      if (o2) {
        var s2 = o2[1];
        t2(e2, Hl(e2, { type: s2, namespace: o2[2] ? o2[2] : null, target: e2.context }));
      }
    }
  }
};
Bl.on = Bl.addListener = function(e2, t2, n2, r2, i2) {
  return Vl(this, function(e3, t3, n3, r3, i3, a2, o2) {
    E(a2) && e3.listeners.push({ event: t3, callback: a2, type: n3, namespace: r3, qualifier: i3, conf: o2 });
  }, e2, t2, n2, r2, i2), this;
}, Bl.one = function(e2, t2, n2, r2) {
  return this.on(e2, t2, n2, r2, { one: true });
}, Bl.removeListener = Bl.off = function(e2, t2, n2, r2) {
  var i2 = this;
  this.emitting !== 0 && (this.listeners = Ht(this.listeners));
  for (var a2 = this.listeners, o2 = function(o3) {
    var s3 = a2[o3];
    Vl(i2, function(t3, n3, r3, i3, c2, l2) {
      if ((s3.type === r3 || e2 === `*`) && (!i3 && s3.namespace !== `.*` || s3.namespace === i3) && (!c2 || t3.qualifierCompare(s3.qualifier, c2)) && (!l2 || s3.callback === l2)) return a2.splice(o3, 1), false;
    }, e2, t2, n2, r2);
  }, s2 = a2.length - 1; s2 >= 0; s2--) o2(s2);
  return this;
}, Bl.removeAllListeners = function() {
  return this.removeListener(`*`);
}, Bl.emit = Bl.trigger = function(e2, t2, n2) {
  var r2 = this.listeners, i2 = r2.length;
  return this.emitting++, D(t2) || (t2 = [t2]), Ul(this, function(e3, a2) {
    n2 != null && (r2 = [{ event: a2.event, type: a2.type, namespace: a2.namespace, callback: n2 }], i2 = r2.length);
    for (var o2 = function() {
      var n3 = r2[s2];
      if (n3.type === a2.type && (!n3.namespace || n3.namespace === a2.namespace || n3.namespace === Fl) && e3.eventMatches(e3.context, n3, a2)) {
        var i3 = [a2];
        t2 != null && Yt(i3, t2), e3.beforeEmit(e3.context, n3, a2), n3.conf && n3.conf.one && (e3.listeners = e3.listeners.filter(function(e4) {
          return e4 !== n3;
        }));
        var o3 = e3.callbackContext(e3.context, n3, a2), c2 = n3.callback.apply(o3, i3);
        e3.afterEmit(e3.context, n3, a2), c2 === false && (a2.stopPropagation(), a2.preventDefault());
      }
    }, s2 = 0; s2 < i2; s2++) o2();
    e3.bubble(e3.context) && !a2.isPropagationStopped() && e3.parent(e3.context).emit(a2, t2);
  }, e2), this.emitting--, this;
};
var Wl = { qualifierCompare: function(e2, t2) {
  return e2 == null || t2 == null ? e2 == null && t2 == null : e2.sameText(t2);
}, eventMatches: function(e2, t2, n2) {
  var r2 = t2.qualifier;
  return r2 == null ? true : e2 !== n2.target && P(n2.target) && r2.matches(n2.target);
}, addEventFields: function(e2, t2) {
  t2.cy = e2.cy(), t2.target = e2;
}, callbackContext: function(e2, t2, n2) {
  return t2.qualifier == null ? e2 : n2.target;
}, beforeEmit: function(e2, t2) {
  t2.conf && t2.conf.once && t2.conf.onceCollection.removeListener(t2.event, t2.qualifier, t2.callback);
}, bubble: function() {
  return true;
}, parent: function(e2) {
  return e2.isChild() ? e2.parent() : e2.cy();
} }, Gl = function(e2) {
  return T(e2) ? new Ic(e2) : e2;
}, Kl = { createEmitter: function() {
  for (var e2 = 0; e2 < this.length; e2++) {
    var t2 = this[e2], n2 = t2._private;
    n2.emitter || (n2.emitter = new zl(Wl, t2));
  }
  return this;
}, emitter: function() {
  return this._private.emitter;
}, on: function(e2, t2, n2) {
  for (var r2 = Gl(t2), i2 = 0; i2 < this.length; i2++) this[i2].emitter().on(e2, r2, n2);
  return this;
}, removeListener: function(e2, t2, n2) {
  for (var r2 = Gl(t2), i2 = 0; i2 < this.length; i2++) this[i2].emitter().removeListener(e2, r2, n2);
  return this;
}, removeAllListeners: function() {
  for (var e2 = 0; e2 < this.length; e2++) this[e2].emitter().removeAllListeners();
  return this;
}, one: function(e2, t2, n2) {
  for (var r2 = Gl(t2), i2 = 0; i2 < this.length; i2++) this[i2].emitter().one(e2, r2, n2);
  return this;
}, once: function(e2, t2, n2) {
  for (var r2 = Gl(t2), i2 = 0; i2 < this.length; i2++) this[i2].emitter().on(e2, r2, n2, { once: true, onceCollection: this });
}, emit: function(e2, t2) {
  for (var n2 = 0; n2 < this.length; n2++) this[n2].emitter().emit(e2, t2);
  return this;
}, emitAndNotify: function(e2, t2) {
  if (this.length !== 0) return this.cy().notify(e2, this), this.emit(e2, t2), this;
} };
mc.eventAliasesOn(Kl);
var ql = { nodes: function(e2) {
  return this.filter(function(e3) {
    return e3.isNode();
  }).filter(e2);
}, edges: function(e2) {
  return this.filter(function(e3) {
    return e3.isEdge();
  }).filter(e2);
}, byGroup: function() {
  for (var e2 = this.spawn(), t2 = this.spawn(), n2 = 0; n2 < this.length; n2++) {
    var r2 = this[n2];
    r2.isNode() ? e2.push(r2) : t2.push(r2);
  }
  return { nodes: e2, edges: t2 };
}, filter: function(e2, t2) {
  if (e2 === void 0) return this;
  if (T(e2) || N(e2)) return new Ic(e2).filter(this);
  if (E(e2)) {
    for (var n2 = this.spawn(), r2 = this, i2 = 0; i2 < r2.length; i2++) {
      var a2 = r2[i2];
      (t2 ? e2.apply(t2, [a2, i2, r2]) : e2(a2, i2, r2)) && n2.push(a2);
    }
    return n2;
  }
  return this.spawn();
}, not: function(e2) {
  if (e2) {
    T(e2) && (e2 = this.filter(e2));
    for (var t2 = this.spawn(), n2 = 0; n2 < this.length; n2++) {
      var r2 = this[n2];
      e2.has(r2) || t2.push(r2);
    }
    return t2;
  } else return this;
}, absoluteComplement: function() {
  return this.cy().mutableElements().not(this);
}, intersect: function(e2) {
  if (T(e2)) {
    var t2 = e2;
    return this.filter(t2);
  }
  for (var n2 = this.spawn(), r2 = this, i2 = e2, a2 = this.length < e2.length, o2 = a2 ? r2 : i2, s2 = a2 ? i2 : r2, c2 = 0; c2 < o2.length; c2++) {
    var l2 = o2[c2];
    s2.has(l2) && n2.push(l2);
  }
  return n2;
}, xor: function(e2) {
  var t2 = this._private.cy;
  T(e2) && (e2 = t2.$(e2));
  var n2 = this.spawn(), r2 = this, i2 = e2, a2 = function(e3, t3) {
    for (var r3 = 0; r3 < e3.length; r3++) {
      var i3 = e3[r3], a3 = i3._private.data.id;
      t3.hasElementWithId(a3) || n2.push(i3);
    }
  };
  return a2(r2, i2), a2(i2, r2), n2;
}, diff: function(e2) {
  var t2 = this._private.cy;
  T(e2) && (e2 = t2.$(e2));
  var n2 = this.spawn(), r2 = this.spawn(), i2 = this.spawn(), a2 = this, o2 = e2, s2 = function(e3, t3, n3) {
    for (var r3 = 0; r3 < e3.length; r3++) {
      var a3 = e3[r3], o3 = a3._private.data.id;
      t3.hasElementWithId(o3) ? i2.merge(a3) : n3.push(a3);
    }
  };
  return s2(a2, o2, n2), s2(o2, a2, r2), { left: n2, right: r2, both: i2 };
}, add: function(e2) {
  var t2 = this._private.cy;
  if (!e2) return this;
  if (T(e2)) {
    var n2 = e2;
    e2 = t2.mutableElements().filter(n2);
  }
  for (var r2 = this.spawnSelf(), i2 = 0; i2 < e2.length; i2++) {
    var a2 = e2[i2];
    this.has(a2) || r2.push(a2);
  }
  return r2;
}, merge: function(e2) {
  var t2 = this._private, n2 = t2.cy;
  if (!e2) return this;
  if (e2 && T(e2)) {
    var r2 = e2;
    e2 = n2.mutableElements().filter(r2);
  }
  for (var i2 = t2.map, a2 = 0; a2 < e2.length; a2++) {
    var o2 = e2[a2], s2 = o2._private.data.id;
    if (!i2.has(s2)) {
      var c2 = this.length++;
      this[c2] = o2, i2.set(s2, { ele: o2, index: c2 });
    }
  }
  return this;
}, unmergeAt: function(e2) {
  var t2 = this[e2].id(), n2 = this._private.map;
  this[e2] = void 0, n2.delete(t2);
  var r2 = e2 === this.length - 1;
  if (this.length > 1 && !r2) {
    var i2 = this.length - 1, a2 = this[i2], o2 = a2._private.data.id;
    this[i2] = void 0, this[e2] = a2, n2.set(o2, { ele: a2, index: e2 });
  }
  return this.length--, this;
}, unmergeOne: function(e2) {
  e2 = e2[0];
  var t2 = this._private, n2 = e2._private.data.id, r2 = t2.map.get(n2);
  if (!r2) return this;
  var i2 = r2.index;
  return this.unmergeAt(i2), this;
}, unmerge: function(e2) {
  var t2 = this._private.cy;
  if (!e2) return this;
  if (e2 && T(e2)) {
    var n2 = e2;
    e2 = t2.mutableElements().filter(n2);
  }
  for (var r2 = 0; r2 < e2.length; r2++) this.unmergeOne(e2[r2]);
  return this;
}, unmergeBy: function(e2) {
  for (var t2 = this.length - 1; t2 >= 0; t2--) {
    var n2 = this[t2];
    e2(n2) && this.unmergeAt(t2);
  }
  return this;
}, map: function(e2, t2) {
  for (var n2 = [], r2 = this, i2 = 0; i2 < r2.length; i2++) {
    var a2 = r2[i2], o2 = t2 ? e2.apply(t2, [a2, i2, r2]) : e2(a2, i2, r2);
    n2.push(o2);
  }
  return n2;
}, reduce: function(e2, t2) {
  for (var n2 = t2, r2 = this, i2 = 0; i2 < r2.length; i2++) n2 = e2(n2, r2[i2], i2, r2);
  return n2;
}, max: function(e2, t2) {
  for (var n2 = -1 / 0, r2, i2 = this, a2 = 0; a2 < i2.length; a2++) {
    var o2 = i2[a2], s2 = t2 ? e2.apply(t2, [o2, a2, i2]) : e2(o2, a2, i2);
    s2 > n2 && (n2 = s2, r2 = o2);
  }
  return { value: n2, ele: r2 };
}, min: function(e2, t2) {
  for (var n2 = 1 / 0, r2, i2 = this, a2 = 0; a2 < i2.length; a2++) {
    var o2 = i2[a2], s2 = t2 ? e2.apply(t2, [o2, a2, i2]) : e2(o2, a2, i2);
    s2 < n2 && (n2 = s2, r2 = o2);
  }
  return { value: n2, ele: r2 };
} }, Jl = ql;
Jl.u = Jl[`|`] = Jl[`+`] = Jl.union = Jl.or = Jl.add, Jl[`\\`] = Jl[`!`] = Jl[`-`] = Jl.difference = Jl.relativeComplement = Jl.subtract = Jl.not, Jl.n = Jl[`&`] = Jl[`.`] = Jl.and = Jl.intersection = Jl.intersect, Jl[`^`] = Jl[`(+)`] = Jl[`(-)`] = Jl.symmetricDifference = Jl.symdiff = Jl.xor, Jl.fnFilter = Jl.filterFn = Jl.stdFilter = Jl.filter, Jl.complement = Jl.abscomp = Jl.absoluteComplement;
var Yl = { isNode: function() {
  return this.group() === `nodes`;
}, isEdge: function() {
  return this.group() === `edges`;
}, isLoop: function() {
  return this.isEdge() && this.source()[0] === this.target()[0];
}, isSimple: function() {
  return this.isEdge() && this.source()[0] !== this.target()[0];
}, group: function() {
  var e2 = this[0];
  if (e2) return e2._private.group;
} }, Xl = function(e2, t2) {
  var n2 = e2.cy().hasCompoundNodes();
  function r2(e3) {
    var t3 = e3.pstyle(`z-compound-depth`);
    return t3.value === `auto` ? n2 ? e3.zDepth() : 0 : t3.value === `bottom` ? -1 : t3.value === `top` ? Mt : 0;
  }
  var i2 = r2(e2) - r2(t2);
  if (i2 !== 0) return i2;
  function a2(e3) {
    return e3.pstyle(`z-index-compare`).value === `auto` && e3.isNode() ? 1 : 0;
  }
  var o2 = a2(e2) - a2(t2);
  if (o2 !== 0) return o2;
  var s2 = e2.pstyle(`z-index`).value - t2.pstyle(`z-index`).value;
  return s2 === 0 ? e2.poolIndex() - t2.poolIndex() : s2;
}, Zl = { forEach: function(e2, t2) {
  if (E(e2)) for (var n2 = this.length, r2 = 0; r2 < n2; r2++) {
    var i2 = this[r2];
    if ((t2 ? e2.apply(t2, [i2, r2, this]) : e2(i2, r2, this)) === false) break;
  }
  return this;
}, toArray: function() {
  for (var e2 = [], t2 = 0; t2 < this.length; t2++) e2.push(this[t2]);
  return e2;
}, slice: function(e2, t2) {
  var n2 = [], r2 = this.length;
  t2 ?? (t2 = r2), e2 ?? (e2 = 0), e2 < 0 && (e2 = r2 + e2), t2 < 0 && (t2 = r2 + t2);
  for (var i2 = e2; i2 >= 0 && i2 < t2 && i2 < r2; i2++) n2.push(this[i2]);
  return this.spawn(n2);
}, size: function() {
  return this.length;
}, eq: function(e2) {
  return this[e2] || this.spawn();
}, first: function() {
  return this[0] || this.spawn();
}, last: function() {
  return this[this.length - 1] || this.spawn();
}, empty: function() {
  return this.length === 0;
}, nonempty: function() {
  return !this.empty();
}, sort: function(e2) {
  if (!E(e2)) return this;
  var t2 = this.toArray().sort(e2);
  return this.spawn(t2);
}, sortByZIndex: function() {
  return this.sort(Xl);
}, zDepth: function() {
  var e2 = this[0];
  if (e2) {
    var t2 = e2._private;
    if (t2.group === `nodes`) {
      var n2 = t2.data.parent ? e2.parents().size() : 0;
      return e2.isParent() ? n2 : Mt - 1;
    } else {
      var r2 = t2.source, i2 = t2.target, a2 = r2.zDepth(), o2 = i2.zDepth();
      return Math.max(a2, o2, 0);
    }
  }
} };
Zl.each = Zl.forEach, (function() {
  var e2 = `undefined`;
  (typeof Symbol > `u` ? `undefined` : g(Symbol)) != e2 && g(Symbol.iterator) != e2 && (Zl[Symbol.iterator] = function() {
    var e3 = this, t2 = { value: void 0, done: false }, n2 = 0, r2 = this.length;
    return s({ next: function() {
      return n2 < r2 ? t2.value = e3[n2++] : (t2.value = void 0, t2.done = true), t2;
    } }, Symbol.iterator, function() {
      return this;
    });
  });
})();
var Ql = Kt({ nodeDimensionsIncludeLabels: false }), $l = { layoutDimensions: function(e2) {
  e2 = Ql(e2);
  var t2;
  if (!this.takesUpSpace()) t2 = { w: 0, h: 0 };
  else if (e2.nodeDimensionsIncludeLabels) {
    var n2 = this.boundingBox();
    t2 = { w: n2.w, h: n2.h };
  } else t2 = { w: this.outerWidth(), h: this.outerHeight() };
  return (t2.w === 0 || t2.h === 0) && (t2.w = t2.h = 1), t2;
}, layoutPositions: function(e2, t2, n2) {
  var r2 = this.nodes().filter(function(e3) {
    return !e3.isParent();
  }), i2 = this.cy(), a2 = t2.eles, o2 = function(e3) {
    return e3.id();
  }, s2 = W(n2, o2);
  e2.emit({ type: `layoutstart`, layout: e2 }), e2.animations = [];
  var c2 = function(e3, t3, n3) {
    var r3 = { x: t3.x1 + t3.w / 2, y: t3.y1 + t3.h / 2 }, i3 = { x: (n3.x - r3.x) * e3, y: (n3.y - r3.y) * e3 };
    return { x: r3.x + i3.x, y: r3.y + i3.y };
  }, l2 = t2.spacingFactor && t2.spacingFactor !== 1, u2 = (function() {
    if (!l2) return null;
    for (var e3 = qn(), t3 = 0; t3 < r2.length; t3++) {
      var n3 = r2[t3], i3 = s2(n3, t3);
      Zn(e3, i3.x, i3.y);
    }
    return e3;
  })(), d2 = W(function(e3, n3) {
    var r3 = s2(e3, n3);
    return l2 && (r3 = c2(Math.abs(t2.spacingFactor), u2, r3)), t2.transform != null && (r3 = t2.transform(e3, r3)), r3;
  }, o2);
  if (t2.animate) {
    for (var f2 = 0; f2 < r2.length; f2++) {
      var p2 = r2[f2], m2 = d2(p2, f2);
      if (t2.animateFilter == null || t2.animateFilter(p2, f2)) {
        var h2 = p2.animation({ position: m2, duration: t2.animationDuration, easing: t2.animationEasing });
        e2.animations.push(h2);
      } else p2.position(m2);
    }
    if (t2.fit) {
      var g2 = i2.animation({ fit: { boundingBox: a2.boundingBoxAt(d2), padding: t2.padding }, duration: t2.animationDuration, easing: t2.animationEasing });
      e2.animations.push(g2);
    } else if (t2.zoom !== void 0 && t2.pan !== void 0) {
      var _2 = i2.animation({ zoom: t2.zoom, pan: t2.pan, duration: t2.animationDuration, easing: t2.animationEasing });
      e2.animations.push(_2);
    }
    e2.animations.forEach(function(e3) {
      return e3.play();
    }), e2.one(`layoutready`, t2.ready), e2.emit({ type: `layoutready`, layout: e2 }), pa.all(e2.animations.map(function(e3) {
      return e3.promise();
    })).then(function() {
      e2.one(`layoutstop`, t2.stop), e2.emit({ type: `layoutstop`, layout: e2 });
    });
  } else r2.positions(d2), t2.fit && i2.fit(t2.eles, t2.padding), t2.zoom != null && i2.zoom(t2.zoom), t2.pan && i2.pan(t2.pan), e2.one(`layoutready`, t2.ready), e2.emit({ type: `layoutready`, layout: e2 }), e2.one(`layoutstop`, t2.stop), e2.emit({ type: `layoutstop`, layout: e2 });
  return this;
}, layout: function(e2) {
  return this.cy().makeLayout(X({}, e2, { eles: this }));
} };
$l.createLayout = $l.makeLayout = $l.layout;
function eu(e2, t2, n2) {
  var r2 = n2._private, i2 = r2.styleCache = r2.styleCache || [], a2;
  return (a2 = i2[e2]) ?? (a2 = i2[e2] = t2(n2)), a2;
}
function tu(e2, t2) {
  return e2 = Ct(e2), function(n2) {
    return eu(e2, t2, n2);
  };
}
function nu(e2, t2) {
  e2 = Ct(e2);
  var n2 = function(e3) {
    return t2.call(e3);
  };
  return function() {
    var t3 = this[0];
    if (t3) return eu(e2, n2, t3);
  };
}
var ru = { recalculateRenderedStyle: function(e2) {
  var t2 = this.cy(), n2 = t2.renderer(), r2 = t2.styleEnabled();
  return n2 && r2 && n2.recalculateRenderedStyle(this, e2), this;
}, dirtyStyleCache: function() {
  var e2 = this.cy(), t2 = function(e3) {
    return e3._private.styleCache = null;
  };
  if (e2.hasCompoundNodes()) {
    var n2 = this.spawnSelf().merge(this.descendants()).merge(this.parents());
    n2.merge(n2.connectedEdges()), n2.forEach(t2);
  } else this.forEach(function(e3) {
    t2(e3), e3.connectedEdges().forEach(t2);
  });
  return this;
}, updateStyle: function(e2) {
  var t2 = this._private.cy;
  if (!t2.styleEnabled()) return this;
  if (t2.batching()) return t2._private.batchStyleEles.merge(this), this;
  var n2 = t2.hasCompoundNodes(), r2 = this;
  e2 = !!(e2 || e2 === void 0), n2 && (r2 = this.spawnSelf().merge(this.descendants()).merge(this.parents()));
  var i2 = r2;
  return e2 ? i2.emitAndNotify(`style`) : i2.emit(`style`), r2.forEach(function(e3) {
    return e3._private.styleDirty = true;
  }), this;
}, cleanStyle: function() {
  var e2 = this.cy();
  if (e2.styleEnabled()) for (var t2 = 0; t2 < this.length; t2++) {
    var n2 = this[t2];
    n2._private.styleDirty && (n2._private.styleDirty = false, e2.style().apply(n2));
  }
}, parsedStyle: function(e2) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, n2 = this[0], r2 = n2.cy();
  if (r2.styleEnabled() && n2) return n2._private.styleDirty && (n2._private.styleDirty = false, r2.style().apply(n2)), n2._private.style[e2] ?? (t2 ? r2.style().getDefaultProperty(e2) : null);
}, numericStyle: function(e2) {
  var t2 = this[0];
  if (t2.cy().styleEnabled() && t2) {
    var n2 = t2.pstyle(e2);
    return n2.pfValue === void 0 ? n2.value : n2.pfValue;
  }
}, numericStyleUnits: function(e2) {
  var t2 = this[0];
  if (t2.cy().styleEnabled() && t2) return t2.pstyle(e2).units;
}, renderedStyle: function(e2) {
  var t2 = this.cy();
  if (!t2.styleEnabled()) return this;
  var n2 = this[0];
  if (n2) return t2.style().getRenderedStyle(n2, e2);
}, style: function(e2, t2) {
  var n2 = this.cy();
  if (!n2.styleEnabled()) return this;
  var r2 = false, i2 = n2.style();
  if (O(e2)) {
    var a2 = e2;
    i2.applyBypass(this, a2, r2), this.emitAndNotify(`style`);
  } else if (T(e2)) if (t2 === void 0) {
    var o2 = this[0];
    return o2 ? i2.getStylePropertyValue(o2, e2) : void 0;
  } else i2.applyBypass(this, e2, t2, r2), this.emitAndNotify(`style`);
  else if (e2 === void 0) {
    var s2 = this[0];
    return s2 ? i2.getRawStyle(s2) : void 0;
  }
  return this;
}, removeStyle: function(e2) {
  var t2 = this.cy();
  if (!t2.styleEnabled()) return this;
  var n2 = false, r2 = t2.style(), i2 = this;
  if (e2 === void 0) for (var a2 = 0; a2 < i2.length; a2++) {
    var o2 = i2[a2];
    r2.removeAllBypasses(o2, n2);
  }
  else {
    e2 = e2.split(/\s+/);
    for (var s2 = 0; s2 < i2.length; s2++) {
      var c2 = i2[s2];
      r2.removeBypasses(c2, e2, n2);
    }
  }
  return this.emitAndNotify(`style`), this;
}, show: function() {
  return this.css(`display`, `element`), this;
}, hide: function() {
  return this.css(`display`, `none`), this;
}, effectiveOpacity: function() {
  var e2 = this.cy();
  if (!e2.styleEnabled()) return 1;
  var t2 = e2.hasCompoundNodes(), n2 = this[0];
  if (n2) {
    var r2 = n2._private, i2 = n2.pstyle(`opacity`).value;
    if (!t2) return i2;
    var a2 = r2.data.parent ? n2.parents() : null;
    if (a2) for (var o2 = 0; o2 < a2.length; o2++) i2 = a2[o2].pstyle(`opacity`).value * i2;
    return i2;
  }
}, transparent: function() {
  if (!this.cy().styleEnabled()) return false;
  var e2 = this[0], t2 = e2.cy().hasCompoundNodes();
  if (e2) return t2 ? e2.effectiveOpacity() === 0 : e2.pstyle(`opacity`).value === 0;
}, backgrounding: function() {
  return this.cy().styleEnabled() ? !!this[0]._private.backgrounding : false;
} };
function iu(e2, t2) {
  var n2 = e2._private.data.parent ? e2.parents() : null;
  if (n2) for (var r2 = 0; r2 < n2.length; r2++) {
    var i2 = n2[r2];
    if (!t2(i2)) return false;
  }
  return true;
}
function au(e2) {
  var t2 = e2.ok, n2 = e2.edgeOkViaNode || e2.ok, r2 = e2.parentOk || e2.ok;
  return function() {
    var e3 = this.cy();
    if (!e3.styleEnabled()) return true;
    var i2 = this[0], a2 = e3.hasCompoundNodes();
    if (i2) {
      var o2 = i2._private;
      if (!t2(i2)) return false;
      if (i2.isNode()) return !a2 || iu(i2, r2);
      var s2 = o2.source, c2 = o2.target;
      return n2(s2) && (!a2 || iu(s2, n2)) && (s2 === c2 || n2(c2) && (!a2 || iu(c2, n2)));
    }
  };
}
var ou = tu(`eleTakesUpSpace`, function(e2) {
  return e2.pstyle(`display`).value === `element` && e2.width() !== 0 && (e2.isNode() ? e2.height() !== 0 : true);
});
ru.takesUpSpace = nu(`takesUpSpace`, au({ ok: ou })), ru.interactive = nu(`interactive`, au({ ok: tu(`eleInteractive`, function(e2) {
  return e2.pstyle(`events`).value === `yes` && e2.pstyle(`visibility`).value === `visible` && ou(e2);
}), parentOk: tu(`parentInteractive`, function(e2) {
  return e2.pstyle(`visibility`).value === `visible` && ou(e2);
}), edgeOkViaNode: ou })), ru.noninteractive = function() {
  var e2 = this[0];
  if (e2) return !e2.interactive();
}, ru.visible = nu(`visible`, au({ ok: tu(`eleVisible`, function(e2) {
  return e2.pstyle(`visibility`).value === `visible` && e2.pstyle(`opacity`).pfValue !== 0 && ou(e2);
}), edgeOkViaNode: ou })), ru.hidden = function() {
  var e2 = this[0];
  if (e2) return !e2.visible();
}, ru.isBundledBezier = nu(`isBundledBezier`, function() {
  return this.cy().styleEnabled() ? !this.removed() && this.pstyle(`curve-style`).value === `bezier` && this.takesUpSpace() : false;
}), ru.bypass = ru.css = ru.style, ru.renderedCss = ru.renderedStyle, ru.removeBypass = ru.removeCss = ru.removeStyle, ru.pstyle = ru.parsedStyle;
var su = {};
function cu(e2) {
  return function() {
    var t2 = arguments, n2 = [];
    if (t2.length === 2) {
      var r2 = t2[0], i2 = t2[1];
      this.on(e2.event, r2, i2);
    } else if (t2.length === 1 && E(t2[0])) {
      var a2 = t2[0];
      this.on(e2.event, a2);
    } else if (t2.length === 0 || t2.length === 1 && D(t2[0])) {
      for (var o2 = t2.length === 1 ? t2[0] : null, s2 = 0; s2 < this.length; s2++) {
        var c2 = this[s2], l2 = !e2.ableField || c2._private[e2.ableField], u2 = c2._private[e2.field] != e2.value;
        if (e2.overrideAble) {
          var d2 = e2.overrideAble(c2);
          if (d2 !== void 0 && (l2 = d2, !d2)) return this;
        }
        l2 && (c2._private[e2.field] = e2.value, u2 && n2.push(c2));
      }
      var f2 = this.spawn(n2);
      f2.updateStyle(), f2.emit(e2.event), o2 && f2.emit(o2);
    }
    return this;
  };
}
function lu(e2) {
  su[e2.field] = function() {
    var t2 = this[0];
    if (t2) {
      if (e2.overrideField) {
        var n2 = e2.overrideField(t2);
        if (n2 !== void 0) return n2;
      }
      return t2._private[e2.field];
    }
  }, su[e2.on] = cu({ event: e2.on, field: e2.field, ableField: e2.ableField, overrideAble: e2.overrideAble, value: true }), su[e2.off] = cu({ event: e2.off, field: e2.field, ableField: e2.ableField, overrideAble: e2.overrideAble, value: false });
}
lu({ field: `locked`, overrideField: function(e2) {
  return e2.cy().autolock() ? true : void 0;
}, on: `lock`, off: `unlock` }), lu({ field: `grabbable`, overrideField: function(e2) {
  return e2.cy().autoungrabify() || e2.pannable() ? false : void 0;
}, on: `grabify`, off: `ungrabify` }), lu({ field: `selected`, ableField: `selectable`, overrideAble: function(e2) {
  return e2.cy().autounselectify() ? false : void 0;
}, on: `select`, off: `unselect` }), lu({ field: `selectable`, overrideField: function(e2) {
  return e2.cy().autounselectify() ? false : void 0;
}, on: `selectify`, off: `unselectify` }), su.deselect = su.unselect, su.grabbed = function() {
  var e2 = this[0];
  if (e2) return e2._private.grabbed;
}, lu({ field: `active`, on: `activate`, off: `unactivate` }), lu({ field: `pannable`, on: `panify`, off: `unpanify` }), su.inactive = function() {
  var e2 = this[0];
  if (e2) return !e2._private.active;
};
var uu = {}, du = function(e2) {
  return function(t2) {
    for (var n2 = this, r2 = [], i2 = 0; i2 < n2.length; i2++) {
      var a2 = n2[i2];
      if (a2.isNode()) {
        for (var o2 = false, s2 = a2.connectedEdges(), c2 = 0; c2 < s2.length; c2++) {
          var l2 = s2[c2], u2 = l2.source(), d2 = l2.target();
          if (e2.noIncomingEdges && d2 === a2 && u2 !== a2 || e2.noOutgoingEdges && u2 === a2 && d2 !== a2) {
            o2 = true;
            break;
          }
        }
        o2 || r2.push(a2);
      }
    }
    return this.spawn(r2, true).filter(t2);
  };
}, fu = function(e2) {
  return function(t2) {
    for (var n2 = this, r2 = [], i2 = 0; i2 < n2.length; i2++) {
      var a2 = n2[i2];
      if (a2.isNode()) for (var o2 = a2.connectedEdges(), s2 = 0; s2 < o2.length; s2++) {
        var c2 = o2[s2], l2 = c2.source(), u2 = c2.target();
        e2.outgoing && l2 === a2 ? (r2.push(c2), r2.push(u2)) : e2.incoming && u2 === a2 && (r2.push(c2), r2.push(l2));
      }
    }
    return this.spawn(r2, true).filter(t2);
  };
}, pu = function(e2) {
  return function(t2) {
    for (var n2 = this, r2 = [], i2 = {}; ; ) {
      var a2 = e2.outgoing ? n2.outgoers() : n2.incomers();
      if (a2.length === 0) break;
      for (var o2 = false, s2 = 0; s2 < a2.length; s2++) {
        var c2 = a2[s2], l2 = c2.id();
        i2[l2] || (i2[l2] = true, r2.push(c2), o2 = true);
      }
      if (!o2) break;
      n2 = a2;
    }
    return this.spawn(r2, true).filter(t2);
  };
};
uu.clearTraversalCache = function() {
  for (var e2 = 0; e2 < this.length; e2++) this[e2]._private.traversalCache = null;
}, X(uu, { roots: du({ noIncomingEdges: true }), leaves: du({ noOutgoingEdges: true }), outgoers: zc(fu({ outgoing: true }), `outgoers`), successors: pu({ outgoing: true }), incomers: zc(fu({ incoming: true }), `incomers`), predecessors: pu({}) }), X(uu, { neighborhood: zc(function(e2) {
  for (var t2 = [], n2 = this.nodes(), r2 = 0; r2 < n2.length; r2++) for (var i2 = n2[r2], a2 = i2.connectedEdges(), o2 = 0; o2 < a2.length; o2++) {
    var s2 = a2[o2], c2 = s2.source(), l2 = s2.target(), u2 = i2 === c2 ? l2 : c2;
    u2.length > 0 && t2.push(u2[0]), t2.push(s2[0]);
  }
  return this.spawn(t2, true).filter(e2);
}, `neighborhood`), closedNeighborhood: function(e2) {
  return this.neighborhood().add(this).filter(e2);
}, openNeighborhood: function(e2) {
  return this.neighborhood(e2);
} }), uu.neighbourhood = uu.neighborhood, uu.closedNeighbourhood = uu.closedNeighborhood, uu.openNeighbourhood = uu.openNeighborhood, X(uu, { source: zc(function(e2) {
  var t2 = this[0], n2;
  return t2 && (n2 = t2._private.source || t2.cy().collection()), n2 && e2 ? n2.filter(e2) : n2;
}, `source`), target: zc(function(e2) {
  var t2 = this[0], n2;
  return t2 && (n2 = t2._private.target || t2.cy().collection()), n2 && e2 ? n2.filter(e2) : n2;
}, `target`), sources: mu({ attr: `source` }), targets: mu({ attr: `target` }) });
function mu(e2) {
  return function(t2) {
    for (var n2 = [], r2 = 0; r2 < this.length; r2++) {
      var i2 = this[r2]._private[e2.attr];
      i2 && n2.push(i2);
    }
    return this.spawn(n2, true).filter(t2);
  };
}
X(uu, { edgesWith: zc(hu(), `edgesWith`), edgesTo: zc(hu({ thisIsSrc: true }), `edgesTo`) });
function hu(e2) {
  return function(t2) {
    var n2 = [], r2 = this._private.cy, i2 = e2 || {};
    T(t2) && (t2 = r2.$(t2));
    for (var a2 = 0; a2 < t2.length; a2++) for (var o2 = t2[a2]._private.edges, s2 = 0; s2 < o2.length; s2++) {
      var c2 = o2[s2], l2 = c2._private.data, u2 = this.hasElementWithId(l2.source) && t2.hasElementWithId(l2.target), d2 = t2.hasElementWithId(l2.source) && this.hasElementWithId(l2.target);
      (u2 || d2) && ((i2.thisIsSrc || i2.thisIsTgt) && (i2.thisIsSrc && !u2 || i2.thisIsTgt && !d2) || n2.push(c2));
    }
    return this.spawn(n2, true);
  };
}
X(uu, { connectedEdges: zc(function(e2) {
  for (var t2 = [], n2 = this, r2 = 0; r2 < n2.length; r2++) {
    var i2 = n2[r2];
    if (i2.isNode()) for (var a2 = i2._private.edges, o2 = 0; o2 < a2.length; o2++) {
      var s2 = a2[o2];
      t2.push(s2);
    }
  }
  return this.spawn(t2, true).filter(e2);
}, `connectedEdges`), connectedNodes: zc(function(e2) {
  for (var t2 = [], n2 = this, r2 = 0; r2 < n2.length; r2++) {
    var i2 = n2[r2];
    i2.isEdge() && (t2.push(i2.source()[0]), t2.push(i2.target()[0]));
  }
  return this.spawn(t2, true).filter(e2);
}, `connectedNodes`), parallelEdges: zc(gu(), `parallelEdges`), codirectedEdges: zc(gu({ codirected: true }), `codirectedEdges`) });
function gu(e2) {
  return e2 = X({}, { codirected: false }, e2), function(t2) {
    for (var n2 = [], r2 = this.edges(), i2 = e2, a2 = 0; a2 < r2.length; a2++) for (var o2 = r2[a2]._private, s2 = o2.source, c2 = s2._private.data.id, l2 = o2.data.target, u2 = s2._private.edges, d2 = 0; d2 < u2.length; d2++) {
      var f2 = u2[d2], p2 = f2._private.data, m2 = p2.target, h2 = p2.source, g2 = m2 === l2 && h2 === c2, _2 = c2 === m2 && l2 === h2;
      (i2.codirected && g2 || !i2.codirected && (g2 || _2)) && n2.push(f2);
    }
    return this.spawn(n2, true).filter(t2);
  };
}
X(uu, { components: function(e2) {
  var t2 = this, n2 = t2.cy(), r2 = n2.collection(), i2 = e2 == null ? t2.nodes() : e2.nodes(), a2 = [];
  e2 != null && i2.empty() && (i2 = e2.sources());
  var o2 = function(e3, t3) {
    r2.merge(e3), i2.unmerge(e3), t3.merge(e3);
  };
  if (i2.empty()) return t2.spawn();
  var s2 = function() {
    var e3 = n2.collection();
    a2.push(e3);
    var r3 = i2[0];
    o2(r3, e3), t2.bfs({ directed: false, roots: r3, visit: function(t3) {
      return o2(t3, e3);
    } }), e3.forEach(function(n3) {
      n3.connectedEdges().forEach(function(n4) {
        t2.has(n4) && e3.has(n4.source()) && e3.has(n4.target()) && e3.merge(n4);
      });
    });
  };
  do
    s2();
  while (i2.length > 0);
  return a2;
}, component: function() {
  var e2 = this[0];
  return e2.cy().mutableElements().components(e2)[0];
} }), uu.componentsOf = uu.components;
var _u = function(e2, t2) {
  var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, r2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (e2 === void 0) {
    Lt(`A collection must have a reference to the core`);
    return;
  }
  var i2 = new $t(), a2 = false;
  if (!t2) t2 = [];
  else if (t2.length > 0 && O(t2[0]) && !P(t2[0])) {
    a2 = true;
    for (var o2 = [], s2 = new nn(), c2 = 0, l2 = t2.length; c2 < l2; c2++) {
      var u2 = t2[c2];
      u2.data ?? (u2.data = {});
      var d2 = u2.data;
      if (d2.id == null) d2.id = Ut();
      else if (e2.hasElementWithId(d2.id) || s2.has(d2.id)) continue;
      var f2 = new rn(e2, u2, false);
      o2.push(f2), s2.add(d2.id);
    }
    t2 = o2;
  }
  this.length = 0;
  for (var p2 = 0, m2 = t2.length; p2 < m2; p2++) {
    var h2 = t2[p2][0];
    if (h2 != null) {
      var g2 = h2._private.data.id;
      (!n2 || !i2.has(g2)) && (n2 && i2.set(g2, { index: this.length, ele: h2 }), this[this.length] = h2, this.length++);
    }
  }
  this._private = { eles: this, cy: e2, get map() {
    return this.lazyMap ?? this.rebuildMap(), this.lazyMap;
  }, set map(e3) {
    this.lazyMap = e3;
  }, rebuildMap: function() {
    for (var e3 = this.lazyMap = new $t(), t3 = this.eles, n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      e3.set(r3.id(), { index: n3, ele: r3 });
    }
  } }, n2 && (this._private.map = i2), a2 && !r2 && this.restore();
}, vu = rn.prototype = _u.prototype = Object.create(Array.prototype);
vu.instanceString = function() {
  return `collection`;
}, vu.spawn = function(e2, t2) {
  return new _u(this.cy(), e2, t2);
}, vu.spawnSelf = function() {
  return this.spawn(this);
}, vu.cy = function() {
  return this._private.cy;
}, vu.renderer = function() {
  return this._private.cy.renderer();
}, vu.element = function() {
  return this[0];
}, vu.collection = function() {
  return F(this) ? this : new _u(this._private.cy, [this]);
}, vu.unique = function() {
  return new _u(this._private.cy, this, true);
}, vu.hasElementWithId = function(e2) {
  return e2 = `` + e2, this._private.map.has(e2);
}, vu.getElementById = function(e2) {
  e2 = `` + e2;
  var t2 = this._private.cy, n2 = this._private.map.get(e2);
  return n2 ? n2.ele : new _u(t2);
}, vu.$id = vu.getElementById, vu.poolIndex = function() {
  var e2 = this._private.cy._private.elements, t2 = this[0]._private.data.id;
  return e2._private.map.get(t2).index;
}, vu.indexOf = function(e2) {
  var t2 = e2[0]._private.data.id;
  return this._private.map.get(t2).index;
}, vu.indexOfId = function(e2) {
  return e2 = `` + e2, this._private.map.get(e2).index;
}, vu.json = function(e2) {
  var t2 = this.element(), n2 = this.cy();
  if (t2 == null && e2) return this;
  if (t2 != null) {
    var r2 = t2._private;
    if (O(e2)) {
      if (n2.startBatch(), e2.data) {
        t2.data(e2.data);
        var i2 = r2.data;
        if (t2.isEdge()) {
          var a2 = false, o2 = {}, s2 = e2.data.source, c2 = e2.data.target;
          s2 != null && s2 != i2.source && (o2.source = `` + s2, a2 = true), c2 != null && c2 != i2.target && (o2.target = `` + c2, a2 = true), a2 && (t2 = t2.move(o2));
        } else {
          var l2 = `parent` in e2.data, u2 = e2.data.parent;
          l2 && (u2 != null || i2.parent != null) && u2 != i2.parent && (u2 === void 0 && (u2 = null), u2 != null && (u2 = `` + u2), t2 = t2.move({ parent: u2 }));
        }
      }
      e2.position && t2.position(e2.position);
      var d2 = function(n3, i3, a3) {
        var o3 = e2[n3];
        o3 != null && o3 !== r2[n3] && (o3 ? t2[i3]() : t2[a3]());
      };
      return d2(`removed`, `remove`, `restore`), d2(`selected`, `select`, `unselect`), d2(`selectable`, `selectify`, `unselectify`), d2(`locked`, `lock`, `unlock`), d2(`grabbable`, `grabify`, `ungrabify`), d2(`pannable`, `panify`, `unpanify`), e2.classes != null && t2.classes(e2.classes), n2.endBatch(), this;
    } else if (e2 === void 0) {
      var f2 = { data: Vt(r2.data), position: Vt(r2.position), group: r2.group, removed: r2.removed, selected: r2.selected, selectable: r2.selectable, locked: r2.locked, grabbable: r2.grabbable, pannable: r2.pannable, classes: null };
      f2.classes = ``;
      var p2 = 0;
      return r2.classes.forEach(function(e3) {
        return f2.classes += p2++ === 0 ? e3 : ` ` + e3;
      }), f2;
    }
  }
}, vu.jsons = function() {
  for (var e2 = [], t2 = 0; t2 < this.length; t2++) {
    var n2 = this[t2].json();
    e2.push(n2);
  }
  return e2;
}, vu.clone = function() {
  for (var e2 = this.cy(), t2 = [], n2 = 0; n2 < this.length; n2++) {
    var r2 = new rn(e2, this[n2].json(), false);
    t2.push(r2);
  }
  return new _u(e2, t2);
}, vu.copy = vu.clone, vu.restore = function() {
  for (var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, n2 = this, r2 = n2.cy(), i2 = r2._private, a2 = [], o2 = [], s2, c2 = 0, l2 = n2.length; c2 < l2; c2++) {
    var u2 = n2[c2];
    t2 && !u2.removed() || (u2.isNode() ? a2.push(u2) : o2.push(u2));
  }
  s2 = a2.concat(o2);
  var d2, f2 = function() {
    s2.splice(d2, 1), d2--;
  };
  for (d2 = 0; d2 < s2.length; d2++) {
    var p2 = s2[d2], m2 = p2._private, h2 = m2.data;
    if (p2.clearTraversalCache(), !(!t2 && !m2.removed)) {
      if (h2.id === void 0) h2.id = Ut();
      else if (A(h2.id)) h2.id = `` + h2.id;
      else if (z(h2.id) || !T(h2.id)) {
        Lt("Can not create element with invalid string ID `" + h2.id + "`"), f2();
        continue;
      } else if (r2.hasElementWithId(h2.id)) {
        Lt("Can not create second element with ID `" + h2.id + "`"), f2();
        continue;
      }
    }
    var g2 = h2.id;
    if (p2.isNode()) {
      var _2 = m2.position;
      _2.x ?? (_2.x = 0), _2.y ?? (_2.y = 0);
    }
    if (p2.isEdge()) {
      for (var v2 = p2, y2 = [`source`, `target`], b2 = y2.length, x2 = false, S2 = 0; S2 < b2; S2++) {
        var C2 = y2[S2], w2 = h2[C2];
        A(w2) && (w2 = h2[C2] = `` + h2[C2]), w2 == null || w2 === `` ? (Lt("Can not create edge `" + g2 + "` with unspecified " + C2), x2 = true) : r2.hasElementWithId(w2) || (Lt("Can not create edge `" + g2 + "` with nonexistant " + C2 + " `" + w2 + "`"), x2 = true);
      }
      if (x2) {
        f2();
        continue;
      }
      var E2 = r2.getElementById(h2.source), D2 = r2.getElementById(h2.target);
      E2.same(D2) ? E2._private.edges.push(v2) : (E2._private.edges.push(v2), D2._private.edges.push(v2)), v2._private.source = E2, v2._private.target = D2;
    }
    m2.map = new $t(), m2.map.set(g2, { ele: p2, index: 0 }), m2.removed = false, t2 && r2.addToPool(p2);
  }
  for (var O2 = 0; O2 < a2.length; O2++) {
    var k2 = a2[O2], j2 = k2._private.data;
    A(j2.parent) && (j2.parent = `` + j2.parent);
    var M2 = j2.parent;
    if (M2 != null || k2._private.parent) {
      var N2 = k2._private.parent ? r2.collection().merge(k2._private.parent) : r2.getElementById(M2);
      if (N2.empty()) j2.parent = void 0;
      else if (N2[0].removed()) zt(`Node added with missing parent, reference to parent removed`), j2.parent = void 0, k2._private.parent = null;
      else {
        for (var P2 = false, F2 = N2; !F2.empty(); ) {
          if (k2.same(F2)) {
            P2 = true, j2.parent = void 0;
            break;
          }
          F2 = F2.parent();
        }
        P2 || (N2[0]._private.children.push(k2), k2._private.parent = N2[0], i2.hasCompoundNodes = true);
      }
    }
  }
  if (s2.length > 0) {
    for (var I2 = s2.length === n2.length ? n2 : new _u(r2, s2), L2 = 0; L2 < I2.length; L2++) {
      var R2 = I2[L2];
      R2.isNode() || (R2.parallelEdges().clearTraversalCache(), R2.source().clearTraversalCache(), R2.target().clearTraversalCache());
    }
    (i2.hasCompoundNodes ? r2.collection().merge(I2).merge(I2.connectedNodes()).merge(I2.parent()) : I2).dirtyCompoundBoundsCache().dirtyBoundingBoxCache().updateStyle(e2), e2 ? I2.emitAndNotify(`add`) : t2 && I2.emit(`add`);
  }
  return n2;
}, vu.removed = function() {
  var e2 = this[0];
  return e2 && e2._private.removed;
}, vu.inside = function() {
  var e2 = this[0];
  return e2 && !e2._private.removed;
}, vu.remove = function() {
  var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, n2 = this, r2 = [], i2 = {}, a2 = n2._private.cy;
  function o2(e3) {
    for (var t3 = e3._private.edges, n3 = 0; n3 < t3.length; n3++) c2(t3[n3]);
  }
  function s2(e3) {
    for (var t3 = e3._private.children, n3 = 0; n3 < t3.length; n3++) c2(t3[n3]);
  }
  function c2(e3) {
    var n3 = i2[e3.id()];
    t2 && e3.removed() || n3 || (i2[e3.id()] = true, e3.isNode() ? (r2.push(e3), o2(e3), s2(e3)) : r2.unshift(e3));
  }
  for (var l2 = 0, u2 = n2.length; l2 < u2; l2++) {
    var d2 = n2[l2];
    c2(d2);
  }
  function f2(e3, t3) {
    var n3 = e3._private.edges;
    qt(n3, t3), e3.clearTraversalCache();
  }
  function p2(e3) {
    e3.clearTraversalCache();
  }
  var m2 = [];
  m2.ids = {};
  function h2(e3, t3) {
    t3 = t3[0], e3 = e3[0];
    var n3 = e3._private.children, r3 = e3.id();
    qt(n3, t3), t3._private.parent = null, m2.ids[r3] || (m2.ids[r3] = true, m2.push(e3));
  }
  n2.dirtyCompoundBoundsCache(), t2 && a2.removeFromPool(r2);
  for (var g2 = 0; g2 < r2.length; g2++) {
    var _2 = r2[g2];
    if (_2.isEdge()) {
      var v2 = _2.source()[0], y2 = _2.target()[0];
      f2(v2, _2), f2(y2, _2);
      for (var b2 = _2.parallelEdges(), x2 = 0; x2 < b2.length; x2++) {
        var S2 = b2[x2];
        p2(S2), S2.isBundledBezier() && S2.dirtyBoundingBoxCache();
      }
    } else {
      var C2 = _2.parent();
      C2.length !== 0 && h2(C2, _2);
    }
    t2 && (_2._private.removed = true);
  }
  var w2 = a2._private.elements;
  a2._private.hasCompoundNodes = false;
  for (var T2 = 0; T2 < w2.length; T2++) if (w2[T2].isParent()) {
    a2._private.hasCompoundNodes = true;
    break;
  }
  var E2 = new _u(this.cy(), r2);
  E2.size() > 0 && (e2 ? E2.emitAndNotify(`remove`) : t2 && E2.emit(`remove`));
  for (var D2 = 0; D2 < m2.length; D2++) {
    var O2 = m2[D2];
    (!t2 || !O2.removed()) && O2.updateStyle();
  }
  return E2;
}, vu.move = function(e2) {
  var t2 = this._private.cy, n2 = this, r2 = false, i2 = false, a2 = function(e3) {
    return e3 == null ? e3 : `` + e3;
  };
  if (e2.source !== void 0 || e2.target !== void 0) {
    var o2 = a2(e2.source), s2 = a2(e2.target), c2 = o2 != null && t2.hasElementWithId(o2), l2 = s2 != null && t2.hasElementWithId(s2);
    (c2 || l2) && (t2.batch(function() {
      n2.remove(r2, i2), n2.emitAndNotify(`moveout`);
      for (var e3 = 0; e3 < n2.length; e3++) {
        var t3 = n2[e3], a3 = t3._private.data;
        t3.isEdge() && (c2 && (a3.source = o2), l2 && (a3.target = s2));
      }
      n2.restore(r2, i2);
    }), n2.emitAndNotify(`move`));
  } else if (e2.parent !== void 0) {
    var u2 = a2(e2.parent);
    if (u2 === null || t2.hasElementWithId(u2)) {
      var d2 = u2 === null ? void 0 : u2;
      t2.batch(function() {
        var e3 = n2.remove(r2, i2);
        e3.emitAndNotify(`moveout`);
        for (var t3 = 0; t3 < n2.length; t3++) {
          var a3 = n2[t3], o3 = a3._private.data;
          a3.isNode() && (o3.parent = d2);
        }
        e3.restore(r2, i2);
      }), n2.emitAndNotify(`move`);
    }
  }
  return this;
}, [ra, hc, gc, Rc, Bc, qc, Jc, Al, Kl, ql, Yl, Zl, $l, ru, su, uu].forEach(function(e2) {
  X(vu, e2);
});
var yu = { add: function(e2) {
  var t2, n2 = this;
  if (N(e2)) {
    var r2 = e2;
    if (r2._private.cy === n2) t2 = r2.restore();
    else {
      for (var i2 = [], a2 = 0; a2 < r2.length; a2++) {
        var o2 = r2[a2];
        i2.push(o2.json());
      }
      t2 = new _u(n2, i2);
    }
  } else if (D(e2)) t2 = new _u(n2, e2);
  else if (O(e2) && (D(e2.nodes) || D(e2.edges))) {
    for (var s2 = e2, c2 = [], l2 = [`nodes`, `edges`], u2 = 0, d2 = l2.length; u2 < d2; u2++) {
      var f2 = l2[u2], p2 = s2[f2];
      if (D(p2)) for (var m2 = 0, h2 = p2.length; m2 < h2; m2++) {
        var g2 = X({ group: f2 }, p2[m2]);
        c2.push(g2);
      }
    }
    t2 = new _u(n2, c2);
  } else t2 = new rn(n2, e2).collection();
  return t2;
}, remove: function(e2) {
  if (!N(e2) && T(e2)) {
    var t2 = e2;
    e2 = this.$(t2);
  }
  return e2.remove();
} };
function bu(e2, t2, n2, r2) {
  var i2 = 4, a2 = 1e-3, o2 = 1e-7, s2 = 10, c2 = 11, l2 = 1 / (c2 - 1), u2 = typeof Float32Array < `u`;
  if (arguments.length !== 4) return false;
  for (var d2 = 0; d2 < 4; ++d2) if (typeof arguments[d2] != `number` || isNaN(arguments[d2]) || !isFinite(arguments[d2])) return false;
  e2 = Math.min(e2, 1), n2 = Math.min(n2, 1), e2 = Math.max(e2, 0), n2 = Math.max(n2, 0);
  var f2 = u2 ? new Float32Array(c2) : Array(c2);
  function p2(e3, t3) {
    return 1 - 3 * t3 + 3 * e3;
  }
  function m2(e3, t3) {
    return 3 * t3 - 6 * e3;
  }
  function h2(e3) {
    return 3 * e3;
  }
  function g2(e3, t3, n3) {
    return ((p2(t3, n3) * e3 + m2(t3, n3)) * e3 + h2(t3)) * e3;
  }
  function _2(e3, t3, n3) {
    return 3 * p2(t3, n3) * e3 * e3 + 2 * m2(t3, n3) * e3 + h2(t3);
  }
  function v2(t3, r3) {
    for (var a3 = 0; a3 < i2; ++a3) {
      var o3 = _2(r3, e2, n2);
      if (o3 === 0) return r3;
      var s3 = g2(r3, e2, n2) - t3;
      r3 -= s3 / o3;
    }
    return r3;
  }
  function y2() {
    for (var t3 = 0; t3 < c2; ++t3) f2[t3] = g2(t3 * l2, e2, n2);
  }
  function b2(t3, r3, i3) {
    var a3, c3, l3 = 0;
    do
      c3 = r3 + (i3 - r3) / 2, a3 = g2(c3, e2, n2) - t3, a3 > 0 ? i3 = c3 : r3 = c3;
    while (Math.abs(a3) > o2 && ++l3 < s2);
    return c3;
  }
  function x2(t3) {
    for (var r3 = 0, i3 = 1, o3 = c2 - 1; i3 !== o3 && f2[i3] <= t3; ++i3) r3 += l2;
    --i3;
    var s3 = (t3 - f2[i3]) / (f2[i3 + 1] - f2[i3]), u3 = r3 + s3 * l2, d3 = _2(u3, e2, n2);
    return d3 >= a2 ? v2(t3, u3) : d3 === 0 ? u3 : b2(t3, r3, r3 + l2);
  }
  var S2 = false;
  function C2() {
    S2 = true, (e2 !== t2 || n2 !== r2) && y2();
  }
  var w2 = function(i3) {
    return S2 || C2(), e2 === t2 && n2 === r2 ? i3 : i3 === 0 ? 0 : i3 === 1 ? 1 : g2(x2(i3), t2, r2);
  };
  w2.getControlPoints = function() {
    return [{ x: e2, y: t2 }, { x: n2, y: r2 }];
  };
  var T2 = `generateBezier(` + [e2, t2, n2, r2] + `)`;
  return w2.toString = function() {
    return T2;
  }, w2;
}
var xu = /* @__PURE__ */ (function() {
  function e2(e3) {
    return -e3.tension * e3.x - e3.friction * e3.v;
  }
  function t2(t3, n3, r2) {
    var i2 = { x: t3.x + r2.dx * n3, v: t3.v + r2.dv * n3, tension: t3.tension, friction: t3.friction };
    return { dx: i2.v, dv: e2(i2) };
  }
  function n2(n3, r2) {
    var i2 = { dx: n3.v, dv: e2(n3) }, a2 = t2(n3, r2 * 0.5, i2), o2 = t2(n3, r2 * 0.5, a2), s2 = t2(n3, r2, o2), c2 = 1 / 6 * (i2.dx + 2 * (a2.dx + o2.dx) + s2.dx), l2 = 1 / 6 * (i2.dv + 2 * (a2.dv + o2.dv) + s2.dv);
    return n3.x += c2 * r2, n3.v += l2 * r2, n3;
  }
  return function e3(t3, r2, i2) {
    var a2 = { x: -1, v: 0, tension: null, friction: null }, o2 = [0], s2 = 0, c2 = 1 / 1e4, l2 = 16 / 1e3, u2, d2, f2;
    for (t3 = parseFloat(t3) || 500, r2 = parseFloat(r2) || 20, i2 || (i2 = null), a2.tension = t3, a2.friction = r2, u2 = i2 !== null, u2 ? (s2 = e3(t3, r2), d2 = s2 / i2 * l2) : d2 = l2; f2 = n2(f2 || a2, d2), o2.push(1 + f2.x), s2 += 16, Math.abs(f2.x) > c2 && Math.abs(f2.v) > c2; ) ;
    return u2 ? function(e4) {
      return o2[e4 * (o2.length - 1) | 0];
    } : s2;
  };
})(), Su = function(e2, t2, n2, r2) {
  var i2 = bu(e2, t2, n2, r2);
  return function(e3, t3, n3) {
    return e3 + (t3 - e3) * i2(n3);
  };
}, Cu = { linear: function(e2, t2, n2) {
  return e2 + (t2 - e2) * n2;
}, ease: Su(0.25, 0.1, 0.25, 1), "ease-in": Su(0.42, 0, 1, 1), "ease-out": Su(0, 0, 0.58, 1), "ease-in-out": Su(0.42, 0, 0.58, 1), "ease-in-sine": Su(0.47, 0, 0.745, 0.715), "ease-out-sine": Su(0.39, 0.575, 0.565, 1), "ease-in-out-sine": Su(0.445, 0.05, 0.55, 0.95), "ease-in-quad": Su(0.55, 0.085, 0.68, 0.53), "ease-out-quad": Su(0.25, 0.46, 0.45, 0.94), "ease-in-out-quad": Su(0.455, 0.03, 0.515, 0.955), "ease-in-cubic": Su(0.55, 0.055, 0.675, 0.19), "ease-out-cubic": Su(0.215, 0.61, 0.355, 1), "ease-in-out-cubic": Su(0.645, 0.045, 0.355, 1), "ease-in-quart": Su(0.895, 0.03, 0.685, 0.22), "ease-out-quart": Su(0.165, 0.84, 0.44, 1), "ease-in-out-quart": Su(0.77, 0, 0.175, 1), "ease-in-quint": Su(0.755, 0.05, 0.855, 0.06), "ease-out-quint": Su(0.23, 1, 0.32, 1), "ease-in-out-quint": Su(0.86, 0, 0.07, 1), "ease-in-expo": Su(0.95, 0.05, 0.795, 0.035), "ease-out-expo": Su(0.19, 1, 0.22, 1), "ease-in-out-expo": Su(1, 0, 0, 1), "ease-in-circ": Su(0.6, 0.04, 0.98, 0.335), "ease-out-circ": Su(0.075, 0.82, 0.165, 1), "ease-in-out-circ": Su(0.785, 0.135, 0.15, 0.86), spring: function(e2, t2, n2) {
  if (n2 === 0) return Cu.linear;
  var r2 = xu(e2, t2, n2);
  return function(e3, t3, n3) {
    return e3 + (t3 - e3) * r2(n3);
  };
}, "cubic-bezier": Su };
function wu(e2, t2, n2, r2, i2) {
  if (r2 === 1 || t2 === n2) return n2;
  var a2 = i2(t2, n2, r2);
  return e2 == null ? a2 : ((e2.roundValue || e2.color) && (a2 = Math.round(a2)), e2.min !== void 0 && (a2 = Math.max(a2, e2.min)), e2.max !== void 0 && (a2 = Math.min(a2, e2.max)), a2);
}
function Tu(e2, t2) {
  return e2.pfValue != null || e2.value != null ? e2.pfValue != null && (t2 == null || t2.type.units !== `%`) ? e2.pfValue : e2.value : e2;
}
function Eu(e2, t2, n2, r2, i2) {
  var a2 = i2 == null ? null : i2.type;
  n2 < 0 ? n2 = 0 : n2 > 1 && (n2 = 1);
  var o2 = Tu(e2, i2), s2 = Tu(t2, i2);
  if (A(o2) && A(s2)) return wu(a2, o2, s2, n2, r2);
  if (D(o2) && D(s2)) {
    for (var c2 = [], l2 = 0; l2 < s2.length; l2++) {
      var u2 = o2[l2], d2 = s2[l2];
      if (u2 != null && d2 != null) {
        var f2 = wu(a2, u2, d2, n2, r2);
        c2.push(f2);
      } else c2.push(d2);
    }
    return c2;
  }
}
function Du(e2, t2, n2, r2) {
  var i2 = !r2, a2 = e2._private, o2 = t2._private, s2 = o2.easing, c2 = o2.startTime, l2 = (r2 ? e2 : e2.cy()).style();
  if (!o2.easingImpl) if (s2 == null) o2.easingImpl = Cu.linear;
  else {
    var u2 = T(s2) ? l2.parse(`transition-timing-function`, s2).value : s2, d2, f2;
    T(u2) ? (d2 = u2, f2 = []) : (d2 = u2[1], f2 = u2.slice(2).map(function(e3) {
      return +e3;
    })), f2.length > 0 ? (d2 === `spring` && f2.push(o2.duration), o2.easingImpl = Cu[d2].apply(null, f2)) : o2.easingImpl = Cu[d2];
  }
  var p2 = o2.easingImpl, m2 = o2.duration === 0 ? 1 : (n2 - c2) / o2.duration;
  if (o2.applying && (m2 = o2.progress), m2 < 0 ? m2 = 0 : m2 > 1 && (m2 = 1), o2.delay == null) {
    var h2 = o2.startPosition, g2 = o2.position;
    if (g2 && i2 && !e2.locked()) {
      var _2 = {};
      Ou(h2.x, g2.x) && (_2.x = Eu(h2.x, g2.x, m2, p2)), Ou(h2.y, g2.y) && (_2.y = Eu(h2.y, g2.y, m2, p2)), e2.position(_2);
    }
    var v2 = o2.startPan, y2 = o2.pan, b2 = a2.pan, x2 = y2 != null && r2;
    x2 && (Ou(v2.x, y2.x) && (b2.x = Eu(v2.x, y2.x, m2, p2)), Ou(v2.y, y2.y) && (b2.y = Eu(v2.y, y2.y, m2, p2)), e2.emit(`pan`));
    var S2 = o2.startZoom, C2 = o2.zoom, w2 = C2 != null && r2;
    w2 && (Ou(S2, C2) && (a2.zoom = Kn(a2.minZoom, Eu(S2, C2, m2, p2), a2.maxZoom)), e2.emit(`zoom`)), (x2 || w2) && e2.emit(`viewport`);
    var E2 = o2.style;
    if (E2 && E2.length > 0 && i2) {
      for (var D2 = 0; D2 < E2.length; D2++) {
        var O2 = E2[D2], k2 = O2.name, A2 = O2, j2 = o2.startStyle[k2], M2 = l2.properties[j2.name], N2 = Eu(j2, A2, m2, p2, M2);
        l2.overrideBypass(e2, k2, N2);
      }
      e2.emit(`style`);
    }
  }
  return o2.progress = m2, m2;
}
function Ou(e2, t2) {
  return e2 == null || t2 == null ? false : A(e2) && A(t2) ? true : !!(e2 && t2);
}
function ku(e2, t2, n2, r2) {
  var i2 = t2._private;
  i2.started = true, i2.startTime = n2 - i2.progress * i2.duration;
}
function Au(e2, t2) {
  var n2 = t2._private.aniEles, r2 = [];
  function i2(t3, n3) {
    var i3 = t3._private, a3 = i3.animation.current, o3 = i3.animation.queue, s3 = false;
    if (a3.length === 0) {
      var c3 = o3.shift();
      c3 && a3.push(c3);
    }
    for (var l3 = function(e3) {
      for (var t4 = e3.length - 1; t4 >= 0; t4--) {
        var n4 = e3[t4];
        n4();
      }
      e3.splice(0, e3.length);
    }, u2 = a3.length - 1; u2 >= 0; u2--) {
      var d2 = a3[u2], f2 = d2._private;
      if (f2.stopped) {
        a3.splice(u2, 1), f2.hooked = false, f2.playing = false, f2.started = false, l3(f2.frames);
        continue;
      }
      !f2.playing && !f2.applying || (f2.playing && f2.applying && (f2.applying = false), f2.started || ku(t3, d2, e2), Du(t3, d2, e2, n3), f2.applying && (f2.applying = false), l3(f2.frames), f2.step != null && f2.step(e2), d2.completed() && (a3.splice(u2, 1), f2.hooked = false, f2.playing = false, f2.started = false, l3(f2.completes)), s3 = true);
    }
    return !n3 && a3.length === 0 && o3.length === 0 && r2.push(t3), s3;
  }
  for (var a2 = false, o2 = 0; o2 < n2.length; o2++) {
    var s2 = n2[o2], c2 = i2(s2);
    a2 || (a2 = c2);
  }
  var l2 = i2(t2, true);
  (a2 || l2) && (n2.length > 0 ? t2.notify(`draw`, n2) : t2.notify(`draw`)), n2.unmerge(r2), t2.emit(`step`);
}
var ju = { animate: mc.animate(), animation: mc.animation(), animated: mc.animated(), clearQueue: mc.clearQueue(), delay: mc.delay(), delayAnimation: mc.delayAnimation(), stop: mc.stop(), addToAnimationPool: function(e2) {
  var t2 = this;
  t2.styleEnabled() && t2._private.aniEles.merge(e2);
}, stopAnimationLoop: function() {
  this._private.animationsRunning = false;
}, startAnimationLoop: function() {
  var e2 = this;
  if (e2._private.animationsRunning = true, !e2.styleEnabled()) return;
  function t2() {
    e2._private.animationsRunning && dt(function(n3) {
      Au(n3, e2), t2();
    });
  }
  var n2 = e2.renderer();
  n2 && n2.beforeRender ? n2.beforeRender(function(t3, n3) {
    Au(n3, e2);
  }, n2.beforeRenderPriorities.animations) : t2();
} }, Mu = { qualifierCompare: function(e2, t2) {
  return e2 == null || t2 == null ? e2 == null && t2 == null : e2.sameText(t2);
}, eventMatches: function(e2, t2, n2) {
  var r2 = t2.qualifier;
  return r2 == null ? true : e2 !== n2.target && P(n2.target) && r2.matches(n2.target);
}, addEventFields: function(e2, t2) {
  t2.cy = e2, t2.target = e2;
}, callbackContext: function(e2, t2, n2) {
  return t2.qualifier == null ? e2 : n2.target;
} }, Nu = function(e2) {
  return T(e2) ? new Ic(e2) : e2;
}, Pu = { createEmitter: function() {
  var e2 = this._private;
  return e2.emitter || (e2.emitter = new zl(Mu, this)), this;
}, emitter: function() {
  return this._private.emitter;
}, on: function(e2, t2, n2) {
  return this.emitter().on(e2, Nu(t2), n2), this;
}, removeListener: function(e2, t2, n2) {
  return this.emitter().removeListener(e2, Nu(t2), n2), this;
}, removeAllListeners: function() {
  return this.emitter().removeAllListeners(), this;
}, one: function(e2, t2, n2) {
  return this.emitter().one(e2, Nu(t2), n2), this;
}, once: function(e2, t2, n2) {
  return this.emitter().one(e2, Nu(t2), n2), this;
}, emit: function(e2, t2) {
  return this.emitter().emit(e2, t2), this;
}, emitAndNotify: function(e2, t2) {
  return this.emit(e2), this.notify(e2, t2), this;
} };
mc.eventAliasesOn(Pu);
var Fu = { png: function(e2) {
  var t2 = this._private.renderer;
  return e2 || (e2 = {}), t2.png(e2);
}, jpg: function(e2) {
  var t2 = this._private.renderer;
  return e2 || (e2 = {}), e2.bg = e2.bg || `#fff`, t2.jpg(e2);
} };
Fu.jpeg = Fu.jpg;
var Iu = { layout: function(e2) {
  var t2 = this;
  if (e2 == null) {
    Lt(`Layout options must be specified to make a layout`);
    return;
  }
  if (e2.name == null) {
    Lt("A `name` must be specified to make a layout");
    return;
  }
  var n2 = e2.name, r2 = t2.extension(`layout`, n2);
  if (r2 == null) {
    Lt("No such layout `" + n2 + "` found.  Did you forget to import it and `cytoscape.use()` it?");
    return;
  }
  return new r2(X({}, e2, { cy: t2, eles: T(e2.eles) ? t2.$(e2.eles) : e2.eles == null ? t2.$() : e2.eles }));
} };
Iu.createLayout = Iu.makeLayout = Iu.layout;
var Lu = { notify: function(e2, t2) {
  var n2 = this._private;
  if (this.batching()) {
    n2.batchNotifications = n2.batchNotifications || {};
    var r2 = n2.batchNotifications[e2] = n2.batchNotifications[e2] || this.collection();
    t2 != null && r2.merge(t2);
    return;
  }
  if (n2.notificationsEnabled) {
    var i2 = this.renderer();
    this.destroyed() || !i2 || i2.notify(e2, t2);
  }
}, notifications: function(e2) {
  var t2 = this._private;
  return e2 === void 0 ? t2.notificationsEnabled : (t2.notificationsEnabled = !!e2, this);
}, noNotifications: function(e2) {
  this.notifications(false), e2(), this.notifications(true);
}, batching: function() {
  return this._private.batchCount > 0;
}, startBatch: function() {
  var e2 = this._private;
  return e2.batchCount ?? (e2.batchCount = 0), e2.batchCount === 0 && (e2.batchStyleEles = this.collection(), e2.batchNotifications = {}), e2.batchCount++, this;
}, endBatch: function() {
  var e2 = this._private;
  if (e2.batchCount === 0) return this;
  if (e2.batchCount--, e2.batchCount === 0) {
    e2.batchStyleEles.updateStyle();
    var t2 = this.renderer();
    Object.keys(e2.batchNotifications).forEach(function(n2) {
      var r2 = e2.batchNotifications[n2];
      r2.empty() ? t2.notify(n2) : t2.notify(n2, r2);
    });
  }
  return this;
}, batch: function(e2) {
  return this.startBatch(), e2(), this.endBatch(), this;
}, batchData: function(e2) {
  var t2 = this;
  return this.batch(function() {
    for (var n2 = Object.keys(e2), r2 = 0; r2 < n2.length; r2++) {
      var i2 = n2[r2], a2 = e2[i2];
      t2.getElementById(i2).data(a2);
    }
  });
} }, Ru = Kt({ hideEdgesOnViewport: false, textureOnViewport: false, motionBlur: false, motionBlurOpacity: 0.05, pixelRatio: void 0, desktopTapThreshold: 4, touchTapThreshold: 8, wheelSensitivity: 1, debug: false, showFps: false, webgl: false, webglDebug: false, webglDebugShowAtlases: false, webglTexSize: 2048, webglTexRows: 36, webglTexRowsNodes: 18, webglBatchSize: 2048, webglTexPerBatch: 14, webglBgColor: [255, 255, 255] }), zu = { renderTo: function(e2, t2, n2, r2) {
  return this._private.renderer.renderTo(e2, t2, n2, r2), this;
}, renderer: function() {
  return this._private.renderer;
}, forceRender: function() {
  return this.notify(`draw`), this;
}, resize: function() {
  return this.invalidateSize(), this.emitAndNotify(`resize`), this;
}, initRenderer: function(e2) {
  var t2 = this, n2 = t2.extension(`renderer`, e2.name);
  if (n2 == null) {
    Lt(`Can not initialise: No such renderer \`${e2.name}\` found. Did you forget to import it and \`cytoscape.use()\` it?`);
    return;
  }
  e2.wheelSensitivity !== void 0 && zt(`You have set a custom wheel sensitivity.  This will make your app zoom unnaturally when using mainstream mice.  You should change this value from the default only if you can guarantee that all your users will use the same hardware and OS configuration as your current machine.`);
  var r2 = Ru(e2);
  r2.cy = t2, t2._private.renderer = new n2(r2), this.notify(`init`);
}, destroyRenderer: function() {
  var e2 = this;
  e2.notify(`destroy`);
  var t2 = e2.container();
  if (t2) for (t2._cyreg = null; t2.childNodes.length > 0; ) t2.removeChild(t2.childNodes[0]);
  e2._private.renderer = null, e2.mutableElements().forEach(function(e3) {
    var t3 = e3._private;
    t3.rscratch = {}, t3.rstyle = {}, t3.animation.current = [], t3.animation.queue = [];
  });
}, onRender: function(e2) {
  return this.on(`render`, e2);
}, offRender: function(e2) {
  return this.off(`render`, e2);
} };
zu.invalidateDimensions = zu.resize;
var Bu = { collection: function(e2, t2) {
  return T(e2) ? this.$(e2) : N(e2) ? e2.collection() : D(e2) ? (t2 || (t2 = {}), new _u(this, e2, t2.unique, t2.removed)) : new _u(this);
}, nodes: function(e2) {
  var t2 = this.$(function(e3) {
    return e3.isNode();
  });
  return e2 ? t2.filter(e2) : t2;
}, edges: function(e2) {
  var t2 = this.$(function(e3) {
    return e3.isEdge();
  });
  return e2 ? t2.filter(e2) : t2;
}, $: function(e2) {
  var t2 = this._private.elements;
  return e2 ? t2.filter(e2) : t2.spawnSelf();
}, mutableElements: function() {
  return this._private.elements;
} };
Bu.elements = Bu.filter = Bu.$;
var Vu = {}, Hu = `t`, Uu = `f`;
Vu.apply = function(e2) {
  for (var t2 = this, n2 = t2._private.cy.collection(), r2 = 0; r2 < e2.length; r2++) {
    var i2 = e2[r2], a2 = t2.getContextMeta(i2);
    if (!a2.empty) {
      var o2 = t2.getContextStyle(a2), s2 = t2.applyContextStyle(a2, o2, i2);
      i2._private.appliedInitStyle ? t2.updateTransitions(i2, s2.diffProps) : i2._private.appliedInitStyle = true, t2.updateStyleHints(i2) && n2.push(i2);
    }
  }
  return n2;
}, Vu.getPropertiesDiff = function(e2, t2) {
  var n2 = this, r2 = n2._private.propDiffs = n2._private.propDiffs || {}, i2 = e2 + `-` + t2, a2 = r2[i2];
  if (a2) return a2;
  for (var o2 = [], s2 = {}, c2 = 0; c2 < n2.length; c2++) {
    var l2 = n2[c2], u2 = e2[c2] === Hu, d2 = t2[c2] === Hu, f2 = u2 !== d2, p2 = l2.mappedProperties.length > 0;
    if (f2 || d2 && p2) {
      var m2 = void 0;
      f2 && p2 || f2 ? m2 = l2.properties : p2 && (m2 = l2.mappedProperties);
      for (var h2 = 0; h2 < m2.length; h2++) {
        for (var g2 = m2[h2], _2 = g2.name, v2 = false, y2 = c2 + 1; y2 < n2.length; y2++) {
          var b2 = n2[y2];
          if (t2[y2] === Hu && (v2 = b2.properties[g2.name] != null, v2)) break;
        }
        !s2[_2] && !v2 && (s2[_2] = true, o2.push(_2));
      }
    }
  }
  return r2[i2] = o2, o2;
}, Vu.getContextMeta = function(e2) {
  for (var t2 = this, n2 = ``, r2, i2 = e2._private.styleCxtKey || ``, a2 = 0; a2 < t2.length; a2++) {
    var o2 = t2[a2];
    o2.selector && o2.selector.matches(e2) ? n2 += Hu : n2 += Uu;
  }
  return r2 = t2.getPropertiesDiff(i2, n2), e2._private.styleCxtKey = n2, { key: n2, diffPropNames: r2, empty: r2.length === 0 };
}, Vu.getContextStyle = function(e2) {
  var t2 = e2.key, n2 = this, r2 = this._private.contextStyles = this._private.contextStyles || {};
  if (r2[t2]) return r2[t2];
  for (var i2 = { _private: { key: t2 } }, a2 = 0; a2 < n2.length; a2++) {
    var o2 = n2[a2];
    if (t2[a2] === Hu) for (var s2 = 0; s2 < o2.properties.length; s2++) {
      var c2 = o2.properties[s2];
      i2[c2.name] = c2;
    }
  }
  return r2[t2] = i2, i2;
}, Vu.applyContextStyle = function(e2, t2, n2) {
  for (var r2 = this, i2 = e2.diffPropNames, a2 = {}, o2 = r2.types, s2 = 0; s2 < i2.length; s2++) {
    var c2 = i2[s2], l2 = t2[c2], u2 = n2.pstyle(c2);
    if (!l2) if (u2) l2 = u2.bypass ? { name: c2, deleteBypassed: true } : { name: c2, delete: true };
    else continue;
    if (u2 !== l2) {
      if (l2.mapped === o2.fn && u2 != null && u2.mapping != null && u2.mapping.value === l2.value) {
        var d2 = u2.mapping;
        if ((d2.fnValue = l2.value(n2)) === d2.prevFnValue) continue;
      }
      var f2 = a2[c2] = { prev: u2 };
      r2.applyParsedProperty(n2, l2), f2.next = n2.pstyle(c2), f2.next && f2.next.bypass && (f2.next = f2.next.bypassed);
    }
  }
  return { diffProps: a2 };
}, Vu.updateStyleHints = function(e2) {
  var t2 = e2._private, n2 = this, r2 = n2.propertyGroupNames, i2 = n2.propertyGroupKeys, a2 = function(e3, t3, r3) {
    return n2.getPropertiesHash(e3, t3, r3);
  }, o2 = t2.styleKey;
  if (e2.removed()) return false;
  var s2 = t2.group === `nodes`, c2 = e2._private.style;
  r2 = Object.keys(c2);
  for (var l2 = 0; l2 < i2.length; l2++) {
    var u2 = i2[l2];
    t2.styleKeys[u2] = [pt, ht];
  }
  for (var d2 = function(e3, n3) {
    return t2.styleKeys[n3][0] = _t(e3, t2.styleKeys[n3][0]);
  }, f2 = function(e3, n3) {
    return t2.styleKeys[n3][1] = vt(e3, t2.styleKeys[n3][1]);
  }, p2 = function(e3, t3) {
    d2(e3, t3), f2(e3, t3);
  }, m2 = function(e3, t3) {
    for (var n3 = 0; n3 < e3.length; n3++) {
      var r3 = e3.charCodeAt(n3);
      d2(r3, t3), f2(r3, t3);
    }
  }, h2 = 2e9, g2 = function(e3) {
    return -128 < e3 && e3 < 128 && Math.floor(e3) !== e3 ? h2 - (e3 * 1024 | 0) : e3;
  }, _2 = 0; _2 < r2.length; _2++) {
    var v2 = r2[_2], y2 = c2[v2];
    if (y2 != null) {
      var b2 = this.properties[v2], x2 = b2.type, S2 = b2.groupKey, C2 = void 0;
      b2.hashOverride == null ? y2.pfValue != null && (C2 = y2.pfValue) : C2 = b2.hashOverride(e2, y2);
      var w2 = b2.enums == null ? y2.value : null, T2 = C2 != null, E2 = T2 || w2 != null, D2 = y2.units;
      x2.number && E2 && !x2.multiple ? (p2(g2(T2 ? C2 : w2), S2), !T2 && D2 != null && m2(D2, S2)) : m2(y2.strValue, S2);
    }
  }
  for (var O2 = [pt, ht], k2 = 0; k2 < i2.length; k2++) {
    var A2 = i2[k2], j2 = t2.styleKeys[A2];
    O2[0] = _t(j2[0], O2[0]), O2[1] = vt(j2[1], O2[1]);
  }
  t2.styleKey = yt(O2[0], O2[1]);
  var M2 = t2.styleKeys;
  t2.labelDimsKey = bt(M2.labelDimensions);
  var N2 = a2(e2, [`label`], M2.labelDimensions);
  if (t2.labelKey = bt(N2), t2.labelStyleKey = bt(xt(M2.commonLabel, N2)), !s2) {
    var P2 = a2(e2, [`source-label`], M2.labelDimensions);
    t2.sourceLabelKey = bt(P2), t2.sourceLabelStyleKey = bt(xt(M2.commonLabel, P2));
    var F2 = a2(e2, [`target-label`], M2.labelDimensions);
    t2.targetLabelKey = bt(F2), t2.targetLabelStyleKey = bt(xt(M2.commonLabel, F2));
  }
  if (s2) {
    var I2 = t2.styleKeys, L2 = I2.nodeBody, R2 = I2.nodeBorder, z2 = I2.nodeOutline, B2 = I2.backgroundImage, V2 = I2.compound, H2 = I2.pie, U2 = I2.stripe;
    t2.nodeKey = bt([L2, R2, z2, B2, V2, H2, U2].filter(function(e3) {
      return e3 != null;
    }).reduce(xt, [pt, ht])), t2.hasPie = H2 != null && H2[0] !== pt && H2[1] !== ht, t2.hasStripe = U2 != null && U2[0] !== pt && U2[1] !== ht;
  }
  return o2 !== t2.styleKey;
}, Vu.clearStyleHints = function(e2) {
  var t2 = e2._private;
  t2.styleCxtKey = ``, t2.styleKeys = {}, t2.styleKey = null, t2.labelKey = null, t2.labelStyleKey = null, t2.sourceLabelKey = null, t2.sourceLabelStyleKey = null, t2.targetLabelKey = null, t2.targetLabelStyleKey = null, t2.nodeKey = null, t2.hasPie = null, t2.hasStripe = null;
}, Vu.applyParsedProperty = function(e2, t2) {
  var n2 = this, r2 = t2, i2 = e2._private.style, a2, o2 = n2.types, s2 = n2.properties[r2.name].type, c2 = r2.bypass, l2 = i2[r2.name], u2 = l2 && l2.bypass, d2 = e2._private, f2 = `mapping`, p2 = function(e3) {
    return e3 == null ? null : e3.pfValue == null ? e3.value : e3.pfValue;
  }, m2 = function() {
    var t3 = p2(l2), i3 = p2(r2);
    n2.checkTriggers(e2, r2.name, t3, i3);
  };
  if (t2.name === `curve-style` && e2.isEdge() && (t2.value !== `bezier` && e2.isLoop() || t2.value === `haystack` && (e2.source().isParent() || e2.target().isParent())) && (r2 = t2 = this.parse(t2.name, `bezier`, c2)), r2.delete) return i2[r2.name] = void 0, m2(), true;
  if (r2.deleteBypassed) return l2 ? l2.bypass ? (l2.bypassed = void 0, m2(), true) : false : (m2(), true);
  if (r2.deleteBypass) return l2 ? l2.bypass ? (i2[r2.name] = l2.bypassed, m2(), true) : false : (m2(), true);
  var h2 = function() {
    zt("Do not assign mappings to elements without corresponding data (i.e. ele `" + e2.id() + "` has no mapping for property `" + r2.name + "` with data field `" + r2.field + "`); try a `[" + r2.field + "]` selector to limit scope to elements with `" + r2.field + "` defined");
  };
  switch (r2.mapped) {
    case o2.mapData:
      for (var g2 = r2.field.split(`.`), _2 = d2.data, v2 = 0; v2 < g2.length && _2; v2++) {
        var y2 = g2[v2];
        _2 = _2[y2];
      }
      if (_2 == null) return h2(), false;
      var b2;
      if (A(_2)) {
        var x2 = r2.fieldMax - r2.fieldMin;
        b2 = x2 === 0 ? 0 : (_2 - r2.fieldMin) / x2;
      } else return zt("Do not use continuous mappers without specifying numeric data (i.e. `" + r2.field + `: ` + _2 + "` for `" + e2.id() + "` is non-numeric)"), false;
      if (b2 < 0 ? b2 = 0 : b2 > 1 && (b2 = 1), s2.color) {
        var S2 = r2.valueMin[0], C2 = r2.valueMax[0], w2 = r2.valueMin[1], T2 = r2.valueMax[1], E2 = r2.valueMin[2], D2 = r2.valueMax[2], O2 = r2.valueMin[3] == null ? 1 : r2.valueMin[3], k2 = r2.valueMax[3] == null ? 1 : r2.valueMax[3], j2 = [Math.round(S2 + (C2 - S2) * b2), Math.round(w2 + (T2 - w2) * b2), Math.round(E2 + (D2 - E2) * b2), Math.round(O2 + (k2 - O2) * b2)];
        a2 = { bypass: r2.bypass, name: r2.name, value: j2, strValue: `rgb(` + j2[0] + `, ` + j2[1] + `, ` + j2[2] + `)` };
      } else if (s2.number) {
        var M2 = r2.valueMin + (r2.valueMax - r2.valueMin) * b2;
        a2 = this.parse(r2.name, M2, r2.bypass, f2);
      } else return false;
      if (!a2) return h2(), false;
      a2.mapping = r2, r2 = a2;
      break;
    case o2.data:
      for (var N2 = r2.field.split(`.`), P2 = d2.data, F2 = 0; F2 < N2.length && P2; F2++) {
        var I2 = N2[F2];
        P2 = P2[I2];
      }
      if (P2 != null && (a2 = this.parse(r2.name, P2, r2.bypass, f2)), !a2) return h2(), false;
      a2.mapping = r2, r2 = a2;
      break;
    case o2.fn:
      var L2 = r2.value, R2 = r2.fnValue == null ? L2(e2) : r2.fnValue;
      if (r2.prevFnValue = R2, R2 == null) return zt("Custom function mappers may not return null (i.e. `" + r2.name + "` for ele `" + e2.id() + "` is null)"), false;
      if (a2 = this.parse(r2.name, R2, r2.bypass, f2), !a2) return zt("Custom function mappers may not return invalid values for the property type (i.e. `" + r2.name + "` for ele `" + e2.id() + "` is invalid)"), false;
      a2.mapping = Vt(r2), r2 = a2;
      break;
    case void 0:
      break;
    default:
      return false;
  }
  return c2 ? (u2 ? r2.bypassed = l2.bypassed : r2.bypassed = l2, i2[r2.name] = r2) : u2 ? l2.bypassed = r2 : i2[r2.name] = r2, m2(), true;
}, Vu.cleanElements = function(e2, t2) {
  for (var n2 = 0; n2 < e2.length; n2++) {
    var r2 = e2[n2];
    if (this.clearStyleHints(r2), r2.dirtyCompoundBoundsCache(), r2.dirtyBoundingBoxCache(), !t2) r2._private.style = {};
    else for (var i2 = r2._private.style, a2 = Object.keys(i2), o2 = 0; o2 < a2.length; o2++) {
      var s2 = a2[o2], c2 = i2[s2];
      c2 != null && (c2.bypass ? c2.bypassed = null : i2[s2] = null);
    }
  }
}, Vu.update = function() {
  this._private.cy.mutableElements().updateStyle();
}, Vu.updateTransitions = function(e2, t2) {
  var n2 = this, r2 = e2._private, i2 = e2.pstyle(`transition-property`).value, a2 = e2.pstyle(`transition-duration`).pfValue, o2 = e2.pstyle(`transition-delay`).pfValue;
  if (i2.length > 0 && a2 > 0) {
    for (var s2 = {}, c2 = false, l2 = 0; l2 < i2.length; l2++) {
      var u2 = i2[l2], d2 = e2.pstyle(u2), f2 = t2[u2];
      if (f2) {
        var p2 = f2.prev, m2 = f2.next == null ? d2 : f2.next, h2 = false, g2 = void 0, _2 = 1e-6;
        p2 && (A(p2.pfValue) && A(m2.pfValue) ? (h2 = m2.pfValue - p2.pfValue, g2 = p2.pfValue + _2 * h2) : A(p2.value) && A(m2.value) ? (h2 = m2.value - p2.value, g2 = p2.value + _2 * h2) : D(p2.value) && D(m2.value) && (h2 = p2.value[0] !== m2.value[0] || p2.value[1] !== m2.value[1] || p2.value[2] !== m2.value[2], g2 = p2.strValue), h2 && (s2[u2] = m2.strValue, this.applyBypass(e2, u2, g2), c2 = true));
      }
    }
    if (!c2) return;
    r2.transitioning = true, new pa(function(t3) {
      o2 > 0 ? e2.delayAnimation(o2).play().promise().then(t3) : t3();
    }).then(function() {
      return e2.animation({ style: s2, duration: a2, easing: e2.pstyle(`transition-timing-function`).value, queue: false }).play().promise();
    }).then(function() {
      n2.removeBypasses(e2, i2), e2.emitAndNotify(`style`), r2.transitioning = false;
    });
  } else r2.transitioning && (r2.transitioning = (this.removeBypasses(e2, i2), e2.emitAndNotify(`style`), false));
}, Vu.checkTrigger = function(e2, t2, n2, r2, i2, a2) {
  var o2 = this.properties[t2], s2 = i2(o2);
  e2.removed() || s2 != null && s2(n2, r2, e2) && a2(o2);
}, Vu.checkZOrderTrigger = function(e2, t2, n2, r2) {
  var i2 = this;
  this.checkTrigger(e2, t2, n2, r2, function(e3) {
    return e3.triggersZOrder;
  }, function() {
    i2._private.cy.notify(`zorder`, e2);
  });
}, Vu.checkBoundsTrigger = function(e2, t2, n2, r2) {
  this.checkTrigger(e2, t2, n2, r2, function(e3) {
    return e3.triggersBounds;
  }, function(t3) {
    e2.dirtyCompoundBoundsCache(), e2.dirtyBoundingBoxCache();
  });
}, Vu.checkConnectedEdgesBoundsTrigger = function(e2, t2, n2, r2) {
  this.checkTrigger(e2, t2, n2, r2, function(e3) {
    return e3.triggersBoundsOfConnectedEdges;
  }, function(t3) {
    e2.connectedEdges().forEach(function(e3) {
      e3.dirtyBoundingBoxCache();
    });
  });
}, Vu.checkParallelEdgesBoundsTrigger = function(e2, t2, n2, r2) {
  this.checkTrigger(e2, t2, n2, r2, function(e3) {
    return e3.triggersBoundsOfParallelEdges;
  }, function(t3) {
    e2.parallelEdges().forEach(function(e3) {
      e3.dirtyBoundingBoxCache();
    });
  });
}, Vu.checkTriggers = function(e2, t2, n2, r2) {
  e2.dirtyStyleCache(), this.checkZOrderTrigger(e2, t2, n2, r2), this.checkBoundsTrigger(e2, t2, n2, r2), this.checkConnectedEdgesBoundsTrigger(e2, t2, n2, r2), this.checkParallelEdgesBoundsTrigger(e2, t2, n2, r2);
};
var Wu = {};
Wu.applyBypass = function(e2, t2, n2, r2) {
  var i2 = this, a2 = [], o2 = true;
  if (t2 === `*` || t2 === `**`) {
    if (n2 !== void 0) for (var s2 = 0; s2 < i2.properties.length; s2++) {
      var c2 = i2.properties[s2].name, l2 = this.parse(c2, n2, true);
      l2 && a2.push(l2);
    }
  } else if (T(t2)) {
    var u2 = this.parse(t2, n2, true);
    u2 && a2.push(u2);
  } else if (O(t2)) {
    var d2 = t2;
    r2 = n2;
    for (var f2 = Object.keys(d2), p2 = 0; p2 < f2.length; p2++) {
      var m2 = f2[p2], h2 = d2[m2];
      if (h2 === void 0 && (h2 = d2[K(m2)]), h2 !== void 0) {
        var g2 = this.parse(m2, h2, true);
        g2 && a2.push(g2);
      }
    }
  } else return false;
  if (a2.length === 0) return false;
  for (var _2 = false, v2 = 0; v2 < e2.length; v2++) {
    for (var y2 = e2[v2], b2 = {}, x2 = void 0, S2 = 0; S2 < a2.length; S2++) {
      var C2 = a2[S2];
      if (r2) {
        var w2 = y2.pstyle(C2.name);
        x2 = b2[C2.name] = { prev: w2 };
      }
      _2 = this.applyParsedProperty(y2, Vt(C2)) || _2, r2 && (x2.next = y2.pstyle(C2.name));
    }
    _2 && this.updateStyleHints(y2), r2 && this.updateTransitions(y2, b2, o2);
  }
  return _2;
}, Wu.overrideBypass = function(e2, t2, n2) {
  t2 = G(t2);
  for (var r2 = 0; r2 < e2.length; r2++) {
    var i2 = e2[r2], a2 = i2._private.style[t2], o2 = this.properties[t2].type, s2 = o2.color, c2 = o2.mutiple, l2 = a2 ? a2.pfValue == null ? a2.value : a2.pfValue : null;
    !a2 || !a2.bypass ? this.applyBypass(i2, t2, n2) : (a2.value = n2, a2.pfValue != null && (a2.pfValue = n2), s2 ? a2.strValue = `rgb(` + n2.join(`,`) + `)` : c2 ? a2.strValue = n2.join(` `) : a2.strValue = `` + n2, this.updateStyleHints(i2)), this.checkTriggers(i2, t2, l2, n2);
  }
}, Wu.removeAllBypasses = function(e2, t2) {
  return this.removeBypasses(e2, this.propertyNames, t2);
}, Wu.removeBypasses = function(e2, t2, n2) {
  for (var r2 = true, i2 = 0; i2 < e2.length; i2++) {
    for (var a2 = e2[i2], o2 = {}, s2 = 0; s2 < t2.length; s2++) {
      var c2 = t2[s2], l2 = this.properties[c2], u2 = a2.pstyle(l2.name);
      if (!(!u2 || !u2.bypass)) {
        var d2 = this.parse(c2, ``, true), f2 = o2[l2.name] = { prev: u2 };
        this.applyParsedProperty(a2, d2), f2.next = a2.pstyle(l2.name);
      }
    }
    this.updateStyleHints(a2), n2 && this.updateTransitions(a2, o2, r2);
  }
};
var Gu = {};
Gu.getEmSizeInPixels = function() {
  var e2 = this.containerCss(`font-size`);
  return e2 == null ? 1 : parseFloat(e2);
}, Gu.containerCss = function(e2) {
  var t2 = this._private.cy, n2 = t2.container(), r2 = t2.window();
  if (r2 && n2 && r2.getComputedStyle) return r2.getComputedStyle(n2).getPropertyValue(e2);
};
var Ku = {};
Ku.getRenderedStyle = function(e2, t2) {
  return t2 ? this.getStylePropertyValue(e2, t2, true) : this.getRawStyle(e2, true);
}, Ku.getRawStyle = function(e2, t2) {
  var n2 = this;
  if (e2 = e2[0], e2) {
    for (var r2 = {}, i2 = 0; i2 < n2.properties.length; i2++) {
      var a2 = n2.properties[i2], o2 = n2.getStylePropertyValue(e2, a2.name, t2);
      o2 != null && (r2[a2.name] = o2, r2[K(a2.name)] = o2);
    }
    return r2;
  }
}, Ku.getIndexedStyle = function(e2, t2, n2, r2) {
  return e2.pstyle(t2)[n2][r2] ?? e2.cy().style().getDefaultProperty(t2)[n2][0];
}, Ku.getStylePropertyValue = function(e2, t2, n2) {
  var r2 = this;
  if (e2 = e2[0], e2) {
    var i2 = r2.properties[t2];
    i2.alias && (i2 = i2.pointsTo);
    var a2 = i2.type, o2 = e2.pstyle(i2.name);
    if (o2) {
      var s2 = o2.value, c2 = o2.units, l2 = o2.strValue;
      if (n2 && a2.number && s2 != null && A(s2)) {
        var u2 = e2.cy().zoom(), d2 = function(e3) {
          return e3 * u2;
        }, f2 = function(e3, t3) {
          return d2(e3) + t3;
        }, p2 = D(s2);
        return (p2 ? c2.every(function(e3) {
          return e3 != null;
        }) : c2 != null) ? p2 ? s2.map(function(e3, t3) {
          return f2(e3, c2[t3]);
        }).join(` `) : f2(s2, c2) : p2 ? s2.map(function(e3) {
          return T(e3) ? e3 : `` + d2(e3);
        }).join(` `) : `` + d2(s2);
      } else if (l2 != null) return l2;
    }
    return null;
  }
}, Ku.getAnimationStartStyle = function(e2, t2) {
  for (var n2 = {}, r2 = 0; r2 < t2.length; r2++) {
    var i2 = t2[r2].name, a2 = e2.pstyle(i2);
    a2 !== void 0 && (a2 = O(a2) ? this.parse(i2, a2.strValue) : this.parse(i2, a2)), a2 && (n2[i2] = a2);
  }
  return n2;
}, Ku.getPropsList = function(e2) {
  var t2 = this, n2 = [], r2 = e2, i2 = t2.properties;
  if (r2) for (var a2 = Object.keys(r2), o2 = 0; o2 < a2.length; o2++) {
    var s2 = a2[o2], c2 = r2[s2], l2 = i2[s2] || i2[G(s2)], u2 = this.parse(l2.name, c2);
    u2 && n2.push(u2);
  }
  return n2;
}, Ku.getNonDefaultPropertiesHash = function(e2, t2, n2) {
  var r2 = n2.slice(), i2, a2, o2, s2, c2, l2;
  for (c2 = 0; c2 < t2.length; c2++) if (i2 = t2[c2], a2 = e2.pstyle(i2, false), a2 != null) if (a2.pfValue != null) r2[0] = _t(s2, r2[0]), r2[1] = vt(s2, r2[1]);
  else for (o2 = a2.strValue, l2 = 0; l2 < o2.length; l2++) s2 = o2.charCodeAt(l2), r2[0] = _t(s2, r2[0]), r2[1] = vt(s2, r2[1]);
  return r2;
}, Ku.getPropertiesHash = Ku.getNonDefaultPropertiesHash;
var qu = {};
qu.appendFromJson = function(e2) {
  for (var t2 = this, n2 = 0; n2 < e2.length; n2++) {
    var r2 = e2[n2], i2 = r2.selector, a2 = r2.style || r2.css, o2 = Object.keys(a2);
    t2.selector(i2);
    for (var s2 = 0; s2 < o2.length; s2++) {
      var c2 = o2[s2], l2 = a2[c2];
      t2.css(c2, l2);
    }
  }
  return t2;
}, qu.fromJson = function(e2) {
  var t2 = this;
  return t2.resetToDefault(), t2.appendFromJson(e2), t2;
}, qu.json = function() {
  for (var e2 = [], t2 = this.defaultLength; t2 < this.length; t2++) {
    for (var n2 = this[t2], r2 = n2.selector, i2 = n2.properties, a2 = {}, o2 = 0; o2 < i2.length; o2++) {
      var s2 = i2[o2];
      a2[s2.name] = s2.strValue;
    }
    e2.push({ selector: r2 ? r2.toString() : `core`, style: a2 });
  }
  return e2;
};
var Ju = {};
Ju.appendFromString = function(e2) {
  var t2 = this, n2 = this, r2 = `` + e2, i2, a2, o2;
  r2 = r2.replace(/[/][*](\s|.)+?[*][/]/g, ``);
  function s2() {
    r2 = r2.length > i2.length ? r2.substr(i2.length) : ``;
  }
  function c2() {
    a2 = a2.length > o2.length ? a2.substr(o2.length) : ``;
  }
  for (; !r2.match(/^\s*$/); ) {
    var l2 = r2.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);
    if (!l2) {
      zt(`Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: ` + r2);
      break;
    }
    i2 = l2[0];
    var u2 = l2[1];
    if (u2 !== `core` && new Ic(u2).invalid) {
      zt(`Skipping parsing of block: Invalid selector found in string stylesheet: ` + u2), s2();
      continue;
    }
    var d2 = l2[2], f2 = false;
    a2 = d2;
    for (var p2 = []; !a2.match(/^\s*$/); ) {
      var m2 = a2.match(/^\s*(.+?)\s*:\s*(.+?)(?:\s*;|\s*$)/);
      if (!m2) {
        zt(`Skipping parsing of block: Invalid formatting of style property and value definitions found in:` + d2), f2 = true;
        break;
      }
      o2 = m2[0];
      var h2 = m2[1], g2 = m2[2];
      if (!t2.properties[h2]) {
        zt(`Skipping property: Invalid property name in: ` + o2), c2();
        continue;
      }
      if (!n2.parse(h2, g2)) {
        zt(`Skipping property: Invalid property definition in: ` + o2), c2();
        continue;
      }
      p2.push({ name: h2, val: g2 }), c2();
    }
    if (f2) {
      s2();
      break;
    }
    n2.selector(u2);
    for (var _2 = 0; _2 < p2.length; _2++) {
      var v2 = p2[_2];
      n2.css(v2.name, v2.val);
    }
    s2();
  }
  return n2;
}, Ju.fromString = function(e2) {
  var t2 = this;
  return t2.resetToDefault(), t2.appendFromString(e2), t2;
};
var Yu = {};
(function() {
  var e2 = Y, t2 = ne, n2 = ie, r2 = ae, i2 = oe, a2 = function(e3) {
    return `^` + e3 + `\\s*\\(\\s*([\\w\\.]+)\\s*\\)$`;
  }, o2 = function(a3) {
    var o3 = e2 + `|\\w+|` + t2 + `|` + n2 + `|` + r2 + `|` + i2;
    return `^` + a3 + `\\s*\\(([\\w\\.]+)\\s*\\,\\s*(` + e2 + `)\\s*\\,\\s*(` + e2 + `)\\s*,\\s*(` + o3 + `)\\s*\\,\\s*(` + o3 + `)\\)$`;
  }, s2 = [`^url\\s*\\(\\s*['"]?(.+?)['"]?\\s*\\)$`, `^(none)$`, `^(.+)$`];
  Yu.types = { time: { number: true, min: 0, units: `s|ms`, implicitUnits: `ms` }, percent: { number: true, min: 0, max: 100, units: `%`, implicitUnits: `%` }, percentages: { number: true, min: 0, max: 100, units: `%`, implicitUnits: `%`, multiple: true }, zeroOneNumber: { number: true, min: 0, max: 1, unitless: true }, zeroOneNumbers: { number: true, min: 0, max: 1, unitless: true, multiple: true }, nOneOneNumber: { number: true, min: -1, max: 1, unitless: true }, nonNegativeInt: { number: true, min: 0, integer: true, unitless: true }, nonNegativeNumber: { number: true, min: 0, unitless: true }, position: { enums: [`parent`, `origin`] }, nodeSize: { number: true, min: 0, enums: [`label`] }, number: { number: true, unitless: true }, numbers: { number: true, unitless: true, multiple: true }, positiveNumber: { number: true, unitless: true, min: 0, strictMin: true }, size: { number: true, min: 0 }, bidirectionalSize: { number: true }, bidirectionalSizeMaybePercent: { number: true, allowPercent: true }, bidirectionalSizes: { number: true, multiple: true }, sizeMaybePercent: { number: true, min: 0, allowPercent: true }, axisDirection: { enums: [`horizontal`, `leftward`, `rightward`, `vertical`, `upward`, `downward`, `auto`] }, axisDirectionExplicit: { enums: [`leftward`, `rightward`, `upward`, `downward`] }, axisDirectionPrimary: { enums: [`horizontal`, `vertical`] }, paddingRelativeTo: { enums: [`width`, `height`, `average`, `min`, `max`] }, bgWH: { number: true, min: 0, allowPercent: true, enums: [`auto`], multiple: true }, bgPos: { number: true, allowPercent: true, multiple: true }, bgRelativeTo: { enums: [`inner`, `include-padding`], multiple: true }, bgRepeat: { enums: [`repeat`, `repeat-x`, `repeat-y`, `no-repeat`], multiple: true }, bgFit: { enums: [`none`, `contain`, `cover`], multiple: true }, bgCrossOrigin: { enums: [`anonymous`, `use-credentials`, `null`], multiple: true }, bgClip: { enums: [`none`, `node`], multiple: true }, bgContainment: { enums: [`inside`, `over`], multiple: true }, boxSelection: { enums: [`contain`, `overlap`, `none`] }, color: { color: true }, colors: { color: true, multiple: true }, fill: { enums: [`solid`, `linear-gradient`, `radial-gradient`] }, bool: { enums: [`yes`, `no`] }, bools: { enums: [`yes`, `no`], multiple: true }, lineStyle: { enums: [`solid`, `dotted`, `dashed`] }, lineCap: { enums: [`butt`, `round`, `square`] }, linePosition: { enums: [`center`, `inside`, `outside`] }, lineJoin: { enums: [`round`, `bevel`, `miter`] }, borderStyle: { enums: [`solid`, `dotted`, `dashed`, `double`] }, curveStyle: { enums: [`bezier`, `unbundled-bezier`, `haystack`, `segments`, `straight`, `straight-triangle`, `taxi`, `round-segments`, `round-taxi`] }, radiusType: { enums: [`arc-radius`, `influence-radius`], multiple: true }, fontFamily: { regex: `^([\\w- \\"]+(?:\\s*,\\s*[\\w- \\"]+)*)$` }, fontStyle: { enums: [`italic`, `normal`, `oblique`] }, fontWeight: { enums: [`normal`, `bold`, `bolder`, `lighter`, `100`, `200`, `300`, `400`, `500`, `600`, `800`, `900`, 100, 200, 300, 400, 500, 600, 700, 800, 900] }, textDecoration: { enums: [`none`, `underline`, `overline`, `line-through`] }, textTransform: { enums: [`none`, `uppercase`, `lowercase`] }, textWrap: { enums: [`none`, `wrap`, `ellipsis`] }, textOverflowWrap: { enums: [`whitespace`, `anywhere`] }, textBackgroundShape: { enums: [`rectangle`, `roundrectangle`, `round-rectangle`, `circle`] }, nodeShape: { enums: `rectangle.roundrectangle.round-rectangle.cutrectangle.cut-rectangle.bottomroundrectangle.bottom-round-rectangle.barrel.ellipse.triangle.round-triangle.square.pentagon.round-pentagon.hexagon.round-hexagon.concavehexagon.concave-hexagon.heptagon.round-heptagon.octagon.round-octagon.tag.round-tag.star.diamond.round-diamond.vee.rhomboid.right-rhomboid.polygon`.split(`.`) }, overlayShape: { enums: [`roundrectangle`, `round-rectangle`, `ellipse`] }, cornerRadius: { number: true, min: 0, units: `px|em`, implicitUnits: `px`, enums: [`auto`] }, compoundIncludeLabels: { enums: [`include`, `exclude`] }, arrowShape: { enums: [`tee`, `triangle`, `triangle-tee`, `circle-triangle`, `triangle-cross`, `triangle-backcurve`, `vee`, `square`, `circle`, `diamond`, `chevron`, `none`] }, arrowFill: { enums: [`filled`, `hollow`] }, arrowWidth: { number: true, units: `%|px|em`, implicitUnits: `px`, enums: [`match-line`] }, display: { enums: [`element`, `none`] }, visibility: { enums: [`hidden`, `visible`] }, zCompoundDepth: { enums: [`bottom`, `orphan`, `auto`, `top`] }, zIndexCompare: { enums: [`auto`, `manual`] }, valign: { enums: [`top`, `center`, `bottom`] }, halign: { enums: [`left`, `center`, `right`] }, justification: { enums: [`left`, `center`, `right`, `auto`] }, text: { string: true }, data: { mapping: true, regex: a2(`data`) }, layoutData: { mapping: true, regex: a2(`layoutData`) }, scratch: { mapping: true, regex: a2(`scratch`) }, mapData: { mapping: true, regex: o2(`mapData`) }, mapLayoutData: { mapping: true, regex: o2(`mapLayoutData`) }, mapScratch: { mapping: true, regex: o2(`mapScratch`) }, fn: { mapping: true, fn: true }, url: { regexes: s2, singleRegexMatchValue: true }, urls: { regexes: s2, singleRegexMatchValue: true, multiple: true }, propList: { propList: true }, angle: { number: true, units: `deg|rad`, implicitUnits: `rad` }, textRotation: { number: true, units: `deg|rad`, implicitUnits: `rad`, enums: [`none`, `autorotate`] }, polygonPointList: { number: true, multiple: true, evenMultiple: true, min: -1, max: 1, unitless: true }, edgeDistances: { enums: [`intersection`, `node-position`, `endpoints`] }, edgeEndpoint: { number: true, multiple: true, units: `%|px|em|deg|rad`, implicitUnits: `px`, enums: [`inside-to-node`, `outside-to-node`, `outside-to-node-or-label`, `outside-to-line`, `outside-to-line-or-label`], singleEnum: true, validate: function(e3, t3) {
    switch (e3.length) {
      case 2:
        return t3[0] !== `deg` && t3[0] !== `rad` && t3[1] !== `deg` && t3[1] !== `rad`;
      case 1:
        return T(e3[0]) || t3[0] === `deg` || t3[0] === `rad`;
      default:
        return false;
    }
  } }, easing: { regexes: [`^(spring)\\s*\\(\\s*(` + e2 + `)\\s*,\\s*(` + e2 + `)\\s*\\)$`, `^(cubic-bezier)\\s*\\(\\s*(` + e2 + `)\\s*,\\s*(` + e2 + `)\\s*,\\s*(` + e2 + `)\\s*,\\s*(` + e2 + `)\\s*\\)$`], enums: `linear.ease.ease-in.ease-out.ease-in-out.ease-in-sine.ease-out-sine.ease-in-out-sine.ease-in-quad.ease-out-quad.ease-in-out-quad.ease-in-cubic.ease-out-cubic.ease-in-out-cubic.ease-in-quart.ease-out-quart.ease-in-out-quart.ease-in-quint.ease-out-quint.ease-in-out-quint.ease-in-expo.ease-out-expo.ease-in-out-expo.ease-in-circ.ease-out-circ.ease-in-out-circ`.split(`.`) }, gradientDirection: { enums: [`to-bottom`, `to-top`, `to-left`, `to-right`, `to-bottom-right`, `to-bottom-left`, `to-top-right`, `to-top-left`, `to-right-bottom`, `to-left-bottom`, `to-right-top`, `to-left-top`] }, boundsExpansion: { number: true, multiple: true, min: 0, validate: function(e3) {
    var t3 = e3.length;
    return t3 === 1 || t3 === 2 || t3 === 4;
  } } };
  var c2 = { zeroNonZero: function(e3, t3) {
    return (e3 == null || t3 == null) && e3 !== t3 || e3 == 0 && t3 != 0 ? true : e3 != 0 && t3 == 0;
  }, any: function(e3, t3) {
    return e3 != t3;
  }, emptyNonEmpty: function(e3, t3) {
    var n3 = z(e3), r3 = z(t3);
    return n3 && !r3 || !n3 && r3;
  } }, l2 = Yu.types, u2 = [{ name: `label`, type: l2.text, triggersBounds: c2.any, triggersZOrder: c2.emptyNonEmpty }, { name: `text-rotation`, type: l2.textRotation, triggersBounds: c2.any }, { name: `text-margin-x`, type: l2.bidirectionalSize, triggersBounds: c2.any }, { name: `text-margin-y`, type: l2.bidirectionalSize, triggersBounds: c2.any }], d2 = [{ name: `source-label`, type: l2.text, triggersBounds: c2.any }, { name: `source-text-rotation`, type: l2.textRotation, triggersBounds: c2.any }, { name: `source-text-margin-x`, type: l2.bidirectionalSize, triggersBounds: c2.any }, { name: `source-text-margin-y`, type: l2.bidirectionalSize, triggersBounds: c2.any }, { name: `source-text-offset`, type: l2.size, triggersBounds: c2.any }], f2 = [{ name: `target-label`, type: l2.text, triggersBounds: c2.any }, { name: `target-text-rotation`, type: l2.textRotation, triggersBounds: c2.any }, { name: `target-text-margin-x`, type: l2.bidirectionalSize, triggersBounds: c2.any }, { name: `target-text-margin-y`, type: l2.bidirectionalSize, triggersBounds: c2.any }, { name: `target-text-offset`, type: l2.size, triggersBounds: c2.any }], p2 = [{ name: `font-family`, type: l2.fontFamily, triggersBounds: c2.any }, { name: `font-style`, type: l2.fontStyle, triggersBounds: c2.any }, { name: `font-weight`, type: l2.fontWeight, triggersBounds: c2.any }, { name: `font-size`, type: l2.size, triggersBounds: c2.any }, { name: `text-transform`, type: l2.textTransform, triggersBounds: c2.any }, { name: `text-wrap`, type: l2.textWrap, triggersBounds: c2.any }, { name: `text-overflow-wrap`, type: l2.textOverflowWrap, triggersBounds: c2.any }, { name: `text-max-width`, type: l2.size, triggersBounds: c2.any }, { name: `text-outline-width`, type: l2.size, triggersBounds: c2.any }, { name: `line-height`, type: l2.positiveNumber, triggersBounds: c2.any }], m2 = [{ name: `text-valign`, type: l2.valign, triggersBounds: c2.any }, { name: `text-halign`, type: l2.halign, triggersBounds: c2.any }, { name: `color`, type: l2.color }, { name: `text-outline-color`, type: l2.color }, { name: `text-outline-opacity`, type: l2.zeroOneNumber }, { name: `text-background-color`, type: l2.color }, { name: `text-background-opacity`, type: l2.zeroOneNumber }, { name: `text-background-padding`, type: l2.size, triggersBounds: c2.any }, { name: `text-border-opacity`, type: l2.zeroOneNumber }, { name: `text-border-color`, type: l2.color }, { name: `text-border-width`, type: l2.size, triggersBounds: c2.any }, { name: `text-border-style`, type: l2.borderStyle, triggersBounds: c2.any }, { name: `text-background-shape`, type: l2.textBackgroundShape, triggersBounds: c2.any }, { name: `text-justification`, type: l2.justification }, { name: `box-select-labels`, type: l2.bool, triggersBounds: c2.any }], h2 = [{ name: `events`, type: l2.bool, triggersZOrder: c2.any }, { name: `text-events`, type: l2.bool, triggersZOrder: c2.any }, { name: `box-selection`, type: l2.boxSelection, triggersZOrder: c2.any }], g2 = [{ name: `display`, type: l2.display, triggersZOrder: c2.any, triggersBounds: c2.any, triggersBoundsOfConnectedEdges: c2.any, triggersBoundsOfParallelEdges: function(e3, t3, n3) {
    return e3 === t3 ? false : n3.pstyle(`curve-style`).value === `bezier`;
  } }, { name: `visibility`, type: l2.visibility, triggersZOrder: c2.any }, { name: `opacity`, type: l2.zeroOneNumber, triggersZOrder: c2.zeroNonZero }, { name: `text-opacity`, type: l2.zeroOneNumber }, { name: `min-zoomed-font-size`, type: l2.size }, { name: `z-compound-depth`, type: l2.zCompoundDepth, triggersZOrder: c2.any }, { name: `z-index-compare`, type: l2.zIndexCompare, triggersZOrder: c2.any }, { name: `z-index`, type: l2.number, triggersZOrder: c2.any }], _2 = [{ name: `overlay-padding`, type: l2.size, triggersBounds: c2.any }, { name: `overlay-color`, type: l2.color }, { name: `overlay-opacity`, type: l2.zeroOneNumber, triggersBounds: c2.zeroNonZero }, { name: `overlay-shape`, type: l2.overlayShape, triggersBounds: c2.any }, { name: `overlay-corner-radius`, type: l2.cornerRadius }], v2 = [{ name: `underlay-padding`, type: l2.size, triggersBounds: c2.any }, { name: `underlay-color`, type: l2.color }, { name: `underlay-opacity`, type: l2.zeroOneNumber, triggersBounds: c2.zeroNonZero }, { name: `underlay-shape`, type: l2.overlayShape, triggersBounds: c2.any }, { name: `underlay-corner-radius`, type: l2.cornerRadius }], y2 = [{ name: `transition-property`, type: l2.propList }, { name: `transition-duration`, type: l2.time }, { name: `transition-delay`, type: l2.time }, { name: `transition-timing-function`, type: l2.easing }], b2 = function(e3, t3) {
    return t3.value === `label` ? -e3.poolIndex() : t3.pfValue;
  }, x2 = [{ name: `height`, type: l2.nodeSize, triggersBounds: c2.any, hashOverride: b2 }, { name: `width`, type: l2.nodeSize, triggersBounds: c2.any, hashOverride: b2 }, { name: `shape`, type: l2.nodeShape, triggersBounds: c2.any }, { name: `shape-polygon-points`, type: l2.polygonPointList, triggersBounds: c2.any }, { name: `corner-radius`, type: l2.cornerRadius }, { name: `background-color`, type: l2.color }, { name: `background-fill`, type: l2.fill }, { name: `background-opacity`, type: l2.zeroOneNumber }, { name: `background-blacken`, type: l2.nOneOneNumber }, { name: `background-gradient-stop-colors`, type: l2.colors }, { name: `background-gradient-stop-positions`, type: l2.percentages }, { name: `background-gradient-direction`, type: l2.gradientDirection }, { name: `padding`, type: l2.sizeMaybePercent, triggersBounds: c2.any }, { name: `padding-relative-to`, type: l2.paddingRelativeTo, triggersBounds: c2.any }, { name: `bounds-expansion`, type: l2.boundsExpansion, triggersBounds: c2.any }], S2 = [{ name: `border-color`, type: l2.color }, { name: `border-opacity`, type: l2.zeroOneNumber }, { name: `border-width`, type: l2.size, triggersBounds: c2.any }, { name: `border-style`, type: l2.borderStyle }, { name: `border-cap`, type: l2.lineCap }, { name: `border-join`, type: l2.lineJoin }, { name: `border-dash-pattern`, type: l2.numbers }, { name: `border-dash-offset`, type: l2.number }, { name: `border-position`, type: l2.linePosition }], C2 = [{ name: `outline-color`, type: l2.color }, { name: `outline-opacity`, type: l2.zeroOneNumber }, { name: `outline-width`, type: l2.size, triggersBounds: c2.any }, { name: `outline-style`, type: l2.borderStyle }, { name: `outline-offset`, type: l2.size, triggersBounds: c2.any }], w2 = [{ name: `background-image`, type: l2.urls }, { name: `background-image-crossorigin`, type: l2.bgCrossOrigin }, { name: `background-image-opacity`, type: l2.zeroOneNumbers }, { name: `background-image-containment`, type: l2.bgContainment }, { name: `background-image-smoothing`, type: l2.bools }, { name: `background-position-x`, type: l2.bgPos }, { name: `background-position-y`, type: l2.bgPos }, { name: `background-width-relative-to`, type: l2.bgRelativeTo }, { name: `background-height-relative-to`, type: l2.bgRelativeTo }, { name: `background-repeat`, type: l2.bgRepeat }, { name: `background-fit`, type: l2.bgFit }, { name: `background-clip`, type: l2.bgClip }, { name: `background-width`, type: l2.bgWH }, { name: `background-height`, type: l2.bgWH }, { name: `background-offset-x`, type: l2.bgPos }, { name: `background-offset-y`, type: l2.bgPos }], E2 = [{ name: `position`, type: l2.position, triggersBounds: c2.any }, { name: `compound-sizing-wrt-labels`, type: l2.compoundIncludeLabels, triggersBounds: c2.any }, { name: `min-width`, type: l2.size, triggersBounds: c2.any }, { name: `min-width-bias-left`, type: l2.sizeMaybePercent, triggersBounds: c2.any }, { name: `min-width-bias-right`, type: l2.sizeMaybePercent, triggersBounds: c2.any }, { name: `min-height`, type: l2.size, triggersBounds: c2.any }, { name: `min-height-bias-top`, type: l2.sizeMaybePercent, triggersBounds: c2.any }, { name: `min-height-bias-bottom`, type: l2.sizeMaybePercent, triggersBounds: c2.any }], D2 = [{ name: `line-style`, type: l2.lineStyle }, { name: `line-color`, type: l2.color }, { name: `line-fill`, type: l2.fill }, { name: `line-cap`, type: l2.lineCap }, { name: `line-opacity`, type: l2.zeroOneNumber }, { name: `line-dash-pattern`, type: l2.numbers }, { name: `line-dash-offset`, type: l2.number }, { name: `line-outline-width`, type: l2.size }, { name: `line-outline-color`, type: l2.color }, { name: `line-gradient-stop-colors`, type: l2.colors }, { name: `line-gradient-stop-positions`, type: l2.percentages }, { name: `curve-style`, type: l2.curveStyle, triggersBounds: c2.any, triggersBoundsOfParallelEdges: function(e3, t3) {
    return e3 === t3 ? false : e3 === `bezier` || t3 === `bezier`;
  } }, { name: `haystack-radius`, type: l2.zeroOneNumber, triggersBounds: c2.any }, { name: `source-endpoint`, type: l2.edgeEndpoint, triggersBounds: c2.any }, { name: `target-endpoint`, type: l2.edgeEndpoint, triggersBounds: c2.any }, { name: `control-point-step-size`, type: l2.size, triggersBounds: c2.any }, { name: `control-point-distances`, type: l2.bidirectionalSizes, triggersBounds: c2.any }, { name: `control-point-weights`, type: l2.numbers, triggersBounds: c2.any }, { name: `segment-distances`, type: l2.bidirectionalSizes, triggersBounds: c2.any }, { name: `segment-weights`, type: l2.numbers, triggersBounds: c2.any }, { name: `segment-radii`, type: l2.numbers, triggersBounds: c2.any }, { name: `radius-type`, type: l2.radiusType, triggersBounds: c2.any }, { name: `taxi-turn`, type: l2.bidirectionalSizeMaybePercent, triggersBounds: c2.any }, { name: `taxi-turn-min-distance`, type: l2.size, triggersBounds: c2.any }, { name: `taxi-direction`, type: l2.axisDirection, triggersBounds: c2.any }, { name: `taxi-radius`, type: l2.number, triggersBounds: c2.any }, { name: `edge-distances`, type: l2.edgeDistances, triggersBounds: c2.any }, { name: `arrow-scale`, type: l2.positiveNumber, triggersBounds: c2.any }, { name: `loop-direction`, type: l2.angle, triggersBounds: c2.any }, { name: `loop-sweep`, type: l2.angle, triggersBounds: c2.any }, { name: `source-distance-from-node`, type: l2.size, triggersBounds: c2.any }, { name: `target-distance-from-node`, type: l2.size, triggersBounds: c2.any }], O2 = [{ name: `ghost`, type: l2.bool, triggersBounds: c2.any }, { name: `ghost-offset-x`, type: l2.bidirectionalSize, triggersBounds: c2.any }, { name: `ghost-offset-y`, type: l2.bidirectionalSize, triggersBounds: c2.any }, { name: `ghost-opacity`, type: l2.zeroOneNumber }], k2 = [{ name: `selection-box-color`, type: l2.color }, { name: `selection-box-opacity`, type: l2.zeroOneNumber }, { name: `selection-box-border-color`, type: l2.color }, { name: `selection-box-border-width`, type: l2.size }, { name: `active-bg-color`, type: l2.color }, { name: `active-bg-opacity`, type: l2.zeroOneNumber }, { name: `active-bg-size`, type: l2.size }, { name: `outside-texture-bg-color`, type: l2.color }, { name: `outside-texture-bg-opacity`, type: l2.zeroOneNumber }], A2 = [];
  Yu.pieBackgroundN = 16, A2.push({ name: `pie-size`, type: l2.sizeMaybePercent }), A2.push({ name: `pie-hole`, type: l2.sizeMaybePercent }), A2.push({ name: `pie-start-angle`, type: l2.angle });
  for (var j2 = 1; j2 <= Yu.pieBackgroundN; j2++) A2.push({ name: `pie-` + j2 + `-background-color`, type: l2.color }), A2.push({ name: `pie-` + j2 + `-background-size`, type: l2.percent }), A2.push({ name: `pie-` + j2 + `-background-opacity`, type: l2.zeroOneNumber });
  var M2 = [];
  Yu.stripeBackgroundN = 16, M2.push({ name: `stripe-size`, type: l2.sizeMaybePercent }), M2.push({ name: `stripe-direction`, type: l2.axisDirectionPrimary });
  for (var N2 = 1; N2 <= Yu.stripeBackgroundN; N2++) M2.push({ name: `stripe-` + N2 + `-background-color`, type: l2.color }), M2.push({ name: `stripe-` + N2 + `-background-size`, type: l2.percent }), M2.push({ name: `stripe-` + N2 + `-background-opacity`, type: l2.zeroOneNumber });
  var P2 = [], F2 = Yu.arrowPrefixes = [`source`, `mid-source`, `target`, `mid-target`];
  [{ name: `arrow-shape`, type: l2.arrowShape, triggersBounds: c2.any }, { name: `arrow-color`, type: l2.color }, { name: `arrow-fill`, type: l2.arrowFill }, { name: `arrow-width`, type: l2.arrowWidth }].forEach(function(e3) {
    F2.forEach(function(t3) {
      var n3 = t3 + `-` + e3.name, r3 = e3.type, i3 = e3.triggersBounds;
      P2.push({ name: n3, type: r3, triggersBounds: i3 });
    });
  }, {});
  var I2 = Yu.properties = [].concat(h2, y2, g2, _2, v2, O2, m2, p2, u2, d2, f2, x2, S2, C2, w2, A2, M2, E2, D2, P2, k2), L2 = Yu.propertyGroups = { behavior: h2, transition: y2, visibility: g2, overlay: _2, underlay: v2, ghost: O2, commonLabel: m2, labelDimensions: p2, mainLabel: u2, sourceLabel: d2, targetLabel: f2, nodeBody: x2, nodeBorder: S2, nodeOutline: C2, backgroundImage: w2, pie: A2, stripe: M2, compound: E2, edgeLine: D2, edgeArrow: P2, core: k2 }, R2 = Yu.propertyGroupNames = {};
  (Yu.propertyGroupKeys = Object.keys(L2)).forEach(function(e3) {
    R2[e3] = L2[e3].map(function(e4) {
      return e4.name;
    }), L2[e3].forEach(function(t3) {
      return t3.groupKey = e3;
    });
  });
  var B2 = Yu.aliases = [{ name: `content`, pointsTo: `label` }, { name: `control-point-distance`, pointsTo: `control-point-distances` }, { name: `control-point-weight`, pointsTo: `control-point-weights` }, { name: `segment-distance`, pointsTo: `segment-distances` }, { name: `segment-weight`, pointsTo: `segment-weights` }, { name: `segment-radius`, pointsTo: `segment-radii` }, { name: `edge-text-rotation`, pointsTo: `text-rotation` }, { name: `padding-left`, pointsTo: `padding` }, { name: `padding-right`, pointsTo: `padding` }, { name: `padding-top`, pointsTo: `padding` }, { name: `padding-bottom`, pointsTo: `padding` }];
  Yu.propertyNames = I2.map(function(e3) {
    return e3.name;
  });
  for (var V2 = 0; V2 < I2.length; V2++) {
    var H2 = I2[V2];
    I2[H2.name] = H2;
  }
  for (var U2 = 0; U2 < B2.length; U2++) {
    var W2 = B2[U2], G2 = I2[W2.pointsTo], K2 = { name: W2.name, alias: true, pointsTo: G2 };
    I2.push(K2), I2[W2.name] = K2;
  }
})(), Yu.getDefaultProperty = function(e2) {
  return this.getDefaultProperties()[e2];
}, Yu.getDefaultProperties = function() {
  var e2 = this._private;
  if (e2.defaultProperties != null) return e2.defaultProperties;
  for (var t2 = X({ "selection-box-color": `#ddd`, "selection-box-opacity": 0.65, "selection-box-border-color": `#aaa`, "selection-box-border-width": 1, "active-bg-color": `black`, "active-bg-opacity": 0.15, "active-bg-size": 30, "outside-texture-bg-color": `#000`, "outside-texture-bg-opacity": 0.125, events: `yes`, "text-events": `no`, "text-valign": `top`, "text-halign": `center`, "text-justification": `auto`, "line-height": 1, color: `#000`, "box-selection": `contain`, "text-outline-color": `#000`, "text-outline-width": 0, "text-outline-opacity": 1, "text-opacity": 1, "text-decoration": `none`, "text-transform": `none`, "text-wrap": `none`, "text-overflow-wrap": `whitespace`, "text-max-width": 9999, "text-background-color": `#000`, "text-background-opacity": 0, "text-background-shape": `rectangle`, "text-background-padding": 0, "text-border-opacity": 0, "text-border-width": 0, "text-border-style": `solid`, "text-border-color": `#000`, "font-family": `Helvetica Neue, Helvetica, sans-serif`, "font-style": `normal`, "font-weight": `normal`, "font-size": 16, "min-zoomed-font-size": 0, "text-rotation": `none`, "source-text-rotation": `none`, "target-text-rotation": `none`, visibility: `visible`, display: `element`, opacity: 1, "z-compound-depth": `auto`, "z-index-compare": `auto`, "z-index": 0, label: ``, "text-margin-x": 0, "text-margin-y": 0, "source-label": ``, "source-text-offset": 0, "source-text-margin-x": 0, "source-text-margin-y": 0, "target-label": ``, "target-text-offset": 0, "target-text-margin-x": 0, "target-text-margin-y": 0, "overlay-opacity": 0, "overlay-color": `#000`, "overlay-padding": 10, "overlay-shape": `round-rectangle`, "overlay-corner-radius": `auto`, "underlay-opacity": 0, "underlay-color": `#000`, "underlay-padding": 10, "underlay-shape": `round-rectangle`, "underlay-corner-radius": `auto`, "transition-property": `none`, "transition-duration": 0, "transition-delay": 0, "transition-timing-function": `linear`, "box-select-labels": `no`, "background-blacken": 0, "background-color": `#999`, "background-fill": `solid`, "background-opacity": 1, "background-image": `none`, "background-image-crossorigin": `anonymous`, "background-image-opacity": 1, "background-image-containment": `inside`, "background-image-smoothing": `yes`, "background-position-x": `50%`, "background-position-y": `50%`, "background-offset-x": 0, "background-offset-y": 0, "background-width-relative-to": `include-padding`, "background-height-relative-to": `include-padding`, "background-repeat": `no-repeat`, "background-fit": `none`, "background-clip": `node`, "background-width": `auto`, "background-height": `auto`, "border-color": `#000`, "border-opacity": 1, "border-width": 0, "border-style": `solid`, "border-dash-pattern": [4, 2], "border-dash-offset": 0, "border-cap": `butt`, "border-join": `miter`, "border-position": `center`, "outline-color": `#999`, "outline-opacity": 1, "outline-width": 0, "outline-offset": 0, "outline-style": `solid`, height: 30, width: 30, shape: `ellipse`, "shape-polygon-points": `-1, -1,   1, -1,   1, 1,   -1, 1`, "corner-radius": `auto`, "bounds-expansion": 0, "background-gradient-direction": `to-bottom`, "background-gradient-stop-colors": `#999`, "background-gradient-stop-positions": `0%`, ghost: `no`, "ghost-offset-y": 0, "ghost-offset-x": 0, "ghost-opacity": 0, padding: 0, "padding-relative-to": `width`, position: `origin`, "compound-sizing-wrt-labels": `include`, "min-width": 0, "min-width-bias-left": 0, "min-width-bias-right": 0, "min-height": 0, "min-height-bias-top": 0, "min-height-bias-bottom": 0 }, { "pie-size": `100%`, "pie-hole": 0, "pie-start-angle": `0deg` }, [{ name: `pie-{{i}}-background-color`, value: `black` }, { name: `pie-{{i}}-background-size`, value: `0%` }, { name: `pie-{{i}}-background-opacity`, value: 1 }].reduce(function(e3, t3) {
    for (var n3 = 1; n3 <= Yu.pieBackgroundN; n3++) {
      var r3 = t3.name.replace(`{{i}}`, n3);
      e3[r3] = t3.value;
    }
    return e3;
  }, {}), { "stripe-size": `100%`, "stripe-direction": `horizontal` }, [{ name: `stripe-{{i}}-background-color`, value: `black` }, { name: `stripe-{{i}}-background-size`, value: `0%` }, { name: `stripe-{{i}}-background-opacity`, value: 1 }].reduce(function(e3, t3) {
    for (var n3 = 1; n3 <= Yu.stripeBackgroundN; n3++) {
      var r3 = t3.name.replace(`{{i}}`, n3);
      e3[r3] = t3.value;
    }
    return e3;
  }, {}), { "line-style": `solid`, "line-color": `#999`, "line-fill": `solid`, "line-cap": `butt`, "line-opacity": 1, "line-outline-width": 0, "line-outline-color": `#000`, "line-gradient-stop-colors": `#999`, "line-gradient-stop-positions": `0%`, "control-point-step-size": 40, "control-point-weights": 0.5, "segment-weights": 0.5, "segment-distances": 20, "segment-radii": 15, "radius-type": `arc-radius`, "taxi-turn": `50%`, "taxi-radius": 15, "taxi-turn-min-distance": 10, "taxi-direction": `auto`, "edge-distances": `intersection`, "curve-style": `haystack`, "haystack-radius": 0, "arrow-scale": 1, "loop-direction": `-45deg`, "loop-sweep": `-90deg`, "source-distance-from-node": 0, "target-distance-from-node": 0, "source-endpoint": `outside-to-node`, "target-endpoint": `outside-to-node`, "line-dash-pattern": [6, 3], "line-dash-offset": 0 }, [{ name: `arrow-shape`, value: `none` }, { name: `arrow-color`, value: `#999` }, { name: `arrow-fill`, value: `filled` }, { name: `arrow-width`, value: 1 }].reduce(function(e3, t3) {
    return Yu.arrowPrefixes.forEach(function(n3) {
      var r3 = n3 + `-` + t3.name;
      e3[r3] = t3.value;
    }), e3;
  }, {})), n2 = {}, r2 = 0; r2 < this.properties.length; r2++) {
    var i2 = this.properties[r2];
    if (!i2.pointsTo) {
      var a2 = i2.name, o2 = t2[a2];
      n2[a2] = this.parse(a2, o2);
    }
  }
  return e2.defaultProperties = n2, e2.defaultProperties;
}, Yu.addDefaultStylesheet = function() {
  this.selector(`:parent`).css({ shape: `rectangle`, padding: 10, "background-color": `#eee`, "border-color": `#ccc`, "border-width": 1 }).selector(`edge`).css({ width: 3 }).selector(`:loop`).css({ "curve-style": `bezier` }).selector(`edge:compound`).css({ "curve-style": `bezier`, "source-endpoint": `outside-to-line`, "target-endpoint": `outside-to-line` }).selector(`:selected`).css({ "background-color": `#0169D9`, "line-color": `#0169D9`, "source-arrow-color": `#0169D9`, "target-arrow-color": `#0169D9`, "mid-source-arrow-color": `#0169D9`, "mid-target-arrow-color": `#0169D9` }).selector(`:parent:selected`).css({ "background-color": `#CCE1F9`, "border-color": `#aec8e5` }).selector(`:active`).css({ "overlay-color": `black`, "overlay-padding": 10, "overlay-opacity": 0.25 }), this.defaultLength = this.length;
};
var Xu = {};
Xu.parse = function(e2, t2, n2, r2) {
  var i2 = this;
  if (E(t2)) return i2.parseImplWarn(e2, t2, n2, r2);
  var a2 = r2 === `mapping` || r2 === true || r2 === false || r2 == null ? `dontcare` : r2, o2 = n2 ? `t` : `f`, s2 = wt(e2, `` + t2, o2, a2), c2 = i2.propCache = i2.propCache || [], l2;
  return (l2 = c2[s2]) || (l2 = c2[s2] = i2.parseImplWarn(e2, t2, n2, r2)), (n2 || r2 === `mapping`) && (l2 = Vt(l2), l2 && (l2.value = Vt(l2.value))), l2;
}, Xu.parseImplWarn = function(e2, t2, n2, r2) {
  var i2 = this.parseImpl(e2, t2, n2, r2);
  return !i2 && t2 != null && zt(`The style property \`${e2}: ${t2}\` is invalid`), i2 && (i2.name === `width` || i2.name === `height`) && t2 === `label` && zt("The style value of `label` is deprecated for `" + i2.name + "`"), i2;
}, Xu.parseImpl = function(e2, t2, n2, r2) {
  var i2 = this;
  e2 = G(e2);
  var a2 = i2.properties[e2], o2 = t2, s2 = i2.types;
  if (!a2 || t2 === void 0) return null;
  a2.alias && (a2 = a2.pointsTo, e2 = a2.name);
  var c2 = T(t2);
  c2 && (t2 = t2.trim());
  var l2 = a2.type;
  if (!l2) return null;
  if (n2 && (t2 === `` || t2 === null)) return { name: e2, value: t2, bypass: true, deleteBypass: true };
  if (E(t2)) return { name: e2, value: t2, strValue: `fn`, mapped: s2.fn, bypass: n2 };
  var u2, d2;
  if (!(!c2 || r2 || t2.length < 7 || t2[1] !== `a`)) {
    if (t2.length >= 7 && t2[0] === `d` && (u2 = new RegExp(s2.data.regex).exec(t2))) {
      if (n2) return false;
      var f2 = s2.data;
      return { name: e2, value: u2, strValue: `` + t2, mapped: f2, field: u2[1], bypass: n2 };
    } else if (t2.length >= 10 && t2[0] === `m` && (d2 = new RegExp(s2.mapData.regex).exec(t2))) {
      if (n2 || l2.multiple) return false;
      var p2 = s2.mapData;
      if (!(l2.color || l2.number)) return false;
      var m2 = this.parse(e2, d2[4]);
      if (!m2 || m2.mapped) return false;
      var h2 = this.parse(e2, d2[5]);
      if (!h2 || h2.mapped) return false;
      if (m2.pfValue === h2.pfValue || m2.strValue === h2.strValue) return zt("`" + e2 + `: ` + t2 + "` is not a valid mapper because the output range is zero; converting to `" + e2 + `: ` + m2.strValue + "`"), this.parse(e2, m2.strValue);
      if (l2.color) {
        var g2 = m2.value, _2 = h2.value;
        if (g2[0] === _2[0] && g2[1] === _2[1] && g2[2] === _2[2] && (g2[3] === _2[3] || (g2[3] == null || g2[3] === 1) && (_2[3] == null || _2[3] === 1))) return false;
      }
      return { name: e2, value: d2, strValue: `` + t2, mapped: p2, field: d2[1], fieldMin: parseFloat(d2[2]), fieldMax: parseFloat(d2[3]), valueMin: m2.value, valueMax: h2.value, bypass: n2 };
    }
  }
  if (l2.multiple && r2 !== `multiple`) {
    var v2 = c2 ? t2.split(/\s+/) : D(t2) ? t2 : [t2];
    if (l2.evenMultiple && v2.length % 2 != 0) return null;
    for (var y2 = [], b2 = [], x2 = [], S2 = ``, C2 = false, w2 = 0; w2 < v2.length; w2++) {
      var O2 = i2.parse(e2, v2[w2], n2, `multiple`);
      C2 || (C2 = T(O2.value)), y2.push(O2.value), x2.push(O2.pfValue == null ? O2.value : O2.pfValue), b2.push(O2.units), S2 += (w2 > 0 ? ` ` : ``) + O2.strValue;
    }
    return l2.validate && !l2.validate(y2, b2) ? null : l2.singleEnum && C2 ? y2.length === 1 && T(y2[0]) ? { name: e2, value: y2[0], strValue: y2[0], bypass: n2 } : null : { name: e2, value: y2, pfValue: x2, strValue: S2, bypass: n2, units: b2 };
  }
  var k2 = function() {
    for (var r3 = 0; r3 < l2.enums.length; r3++) if (l2.enums[r3] === t2) return { name: e2, value: t2, strValue: `` + t2, bypass: n2 };
    return null;
  };
  if (l2.number) {
    var A2, M2 = `px`;
    if (l2.units && (A2 = l2.units), l2.implicitUnits && (M2 = l2.implicitUnits), !l2.unitless) if (c2) {
      var N2 = `px|em` + (l2.allowPercent ? `|\\%` : ``);
      A2 && (N2 = A2);
      var P2 = t2.match(`^(` + Y + `)(` + N2 + `)?$`);
      P2 && (t2 = P2[1], A2 = P2[2] || M2);
    } else (!A2 || l2.implicitUnits) && (A2 = M2);
    if (t2 = parseFloat(t2), isNaN(t2) && l2.enums === void 0) return null;
    if (isNaN(t2) && l2.enums !== void 0) return t2 = o2, k2();
    if (l2.integer && !j(t2) || l2.min !== void 0 && (t2 < l2.min || l2.strictMin && t2 === l2.min) || l2.max !== void 0 && (t2 > l2.max || l2.strictMax && t2 === l2.max)) return null;
    var F2 = { name: e2, value: t2, strValue: `` + t2 + (A2 || ``), units: A2, bypass: n2 };
    return l2.unitless || A2 !== `px` && A2 !== `em` ? F2.pfValue = t2 : F2.pfValue = A2 === `px` || !A2 ? t2 : this.getEmSizeInPixels() * t2, (A2 === `ms` || A2 === `s`) && (F2.pfValue = A2 === `ms` ? t2 : 1e3 * t2), (A2 === `deg` || A2 === `rad`) && (F2.pfValue = A2 === `rad` ? t2 : In(t2)), A2 === `%` && (F2.pfValue = t2 / 100), F2;
  } else if (l2.propList) {
    var I2 = [], L2 = `` + t2;
    if (L2 !== `none`) {
      for (var R2 = L2.split(/\s*,\s*|\s+/), z2 = 0; z2 < R2.length; z2++) {
        var B2 = R2[z2].trim();
        i2.properties[B2] ? I2.push(B2) : zt("`" + B2 + "` is not a valid property name");
      }
      if (I2.length === 0) return null;
    }
    return { name: e2, value: I2, strValue: I2.length === 0 ? `none` : I2.join(` `), bypass: n2 };
  } else if (l2.color) {
    var V2 = pe(t2);
    return V2 ? { name: e2, value: V2, pfValue: V2, strValue: `rgb(` + V2[0] + `,` + V2[1] + `,` + V2[2] + `)`, bypass: n2 } : null;
  } else if (l2.regex || l2.regexes) {
    if (l2.enums) {
      var H2 = k2();
      if (H2) return H2;
    }
    for (var U2 = l2.regexes ? l2.regexes : [l2.regex], W2 = 0; W2 < U2.length; W2++) {
      var K2 = new RegExp(U2[W2]).exec(t2);
      if (K2) return { name: e2, value: l2.singleRegexMatchValue ? K2[1] : K2, strValue: `` + t2, bypass: n2 };
    }
    return null;
  } else if (l2.string) return { name: e2, value: `` + t2, strValue: `` + t2, bypass: n2 };
  else if (l2.enums) return k2();
  else return null;
};
var Zu = function(e2) {
  if (!(this instanceof Zu)) return new Zu(e2);
  if (!I(e2)) {
    Lt(`A style must have a core reference`);
    return;
  }
  this._private = { cy: e2, coreStyle: {} }, this.length = 0, this.resetToDefault();
}, Qu = Zu.prototype;
Qu.instanceString = function() {
  return `style`;
}, Qu.clear = function() {
  for (var e2 = this._private, t2 = e2.cy.elements(), n2 = 0; n2 < this.length; n2++) this[n2] = void 0;
  return this.length = 0, e2.contextStyles = {}, e2.propDiffs = {}, this.cleanElements(t2, true), t2.forEach(function(e3) {
    var t3 = e3[0]._private;
    t3.styleDirty = true, t3.appliedInitStyle = false;
  }), this;
}, Qu.resetToDefault = function() {
  return this.clear(), this.addDefaultStylesheet(), this;
}, Qu.core = function(e2) {
  return this._private.coreStyle[e2] || this.getDefaultProperty(e2);
}, Qu.selector = function(e2) {
  var t2 = e2 === `core` ? null : new Ic(e2), n2 = this.length++;
  return this[n2] = { selector: t2, properties: [], mappedProperties: [], index: n2 }, this;
}, Qu.css = function() {
  var e2 = this, t2 = arguments;
  if (t2.length === 1) for (var n2 = t2[0], r2 = 0; r2 < e2.properties.length; r2++) {
    var i2 = e2.properties[r2], a2 = n2[i2.name];
    a2 === void 0 && (a2 = n2[K(i2.name)]), a2 !== void 0 && this.cssRule(i2.name, a2);
  }
  else t2.length === 2 && this.cssRule(t2[0], t2[1]);
  return this;
}, Qu.style = Qu.css, Qu.cssRule = function(e2, t2) {
  var n2 = this.parse(e2, t2);
  if (n2) {
    var r2 = this.length - 1;
    this[r2].properties.push(n2), this[r2].properties[n2.name] = n2, n2.name.match(/pie-(\d+)-background-size/) && n2.value && (this._private.hasPie = true), n2.name.match(/stripe-(\d+)-background-size/) && n2.value && (this._private.hasStripe = true), n2.mapped && this[r2].mappedProperties.push(n2), this[r2].selector || (this._private.coreStyle[n2.name] = n2);
  }
  return this;
}, Qu.append = function(e2) {
  return L(e2) ? e2.appendToStyle(this) : D(e2) ? this.appendFromJson(e2) : T(e2) && this.appendFromString(e2), this;
}, Zu.fromJson = function(e2, t2) {
  var n2 = new Zu(e2);
  return n2.fromJson(t2), n2;
}, Zu.fromString = function(e2, t2) {
  return new Zu(e2).fromString(t2);
}, [Vu, Wu, Gu, Ku, qu, Ju, Yu, Xu].forEach(function(e2) {
  X(Qu, e2);
}), Zu.types = Qu.types, Zu.properties = Qu.properties, Zu.propertyGroups = Qu.propertyGroups, Zu.propertyGroupNames = Qu.propertyGroupNames, Zu.propertyGroupKeys = Qu.propertyGroupKeys;
var $u = { style: function(e2) {
  return e2 && this.setStyle(e2).update(), this._private.style;
}, setStyle: function(e2) {
  var t2 = this._private;
  return L(e2) ? t2.style = e2.generateStyle(this) : D(e2) ? t2.style = Zu.fromJson(this, e2) : T(e2) ? t2.style = Zu.fromString(this, e2) : t2.style = Zu(this), t2.style;
}, updateStyle: function() {
  this.mutableElements().updateStyle();
} }, ed = `single`, td = { autolock: function(e2) {
  if (e2 !== void 0) this._private.autolock = !!e2;
  else return this._private.autolock;
  return this;
}, autoungrabify: function(e2) {
  if (e2 !== void 0) this._private.autoungrabify = !!e2;
  else return this._private.autoungrabify;
  return this;
}, autounselectify: function(e2) {
  if (e2 !== void 0) this._private.autounselectify = !!e2;
  else return this._private.autounselectify;
  return this;
}, selectionType: function(e2) {
  var t2 = this._private;
  if (t2.selectionType ?? (t2.selectionType = ed), e2 !== void 0) (e2 === `additive` || e2 === `single`) && (t2.selectionType = e2);
  else return t2.selectionType;
  return this;
}, panningEnabled: function(e2) {
  if (e2 !== void 0) this._private.panningEnabled = !!e2;
  else return this._private.panningEnabled;
  return this;
}, userPanningEnabled: function(e2) {
  if (e2 !== void 0) this._private.userPanningEnabled = !!e2;
  else return this._private.userPanningEnabled;
  return this;
}, zoomingEnabled: function(e2) {
  if (e2 !== void 0) this._private.zoomingEnabled = !!e2;
  else return this._private.zoomingEnabled;
  return this;
}, userZoomingEnabled: function(e2) {
  if (e2 !== void 0) this._private.userZoomingEnabled = !!e2;
  else return this._private.userZoomingEnabled;
  return this;
}, boxSelectionEnabled: function(e2) {
  if (e2 !== void 0) this._private.boxSelectionEnabled = !!e2;
  else return this._private.boxSelectionEnabled;
  return this;
}, pan: function() {
  var e2 = arguments, t2 = this._private.pan, n2, r2, i2, a2, o2;
  switch (e2.length) {
    case 0:
      return t2;
    case 1:
      if (T(e2[0])) return n2 = e2[0], t2[n2];
      if (O(e2[0])) {
        if (!this._private.panningEnabled) return this;
        i2 = e2[0], a2 = i2.x, o2 = i2.y, A(a2) && (t2.x = a2), A(o2) && (t2.y = o2), this.emit(`pan viewport`);
      }
      break;
    case 2:
      if (!this._private.panningEnabled) return this;
      n2 = e2[0], r2 = e2[1], (n2 === `x` || n2 === `y`) && A(r2) && (t2[n2] = r2), this.emit(`pan viewport`);
      break;
  }
  return this.notify(`viewport`), this;
}, panBy: function(e2, t2) {
  var n2 = arguments, r2 = this._private.pan, i2, a2, o2, s2, c2;
  if (!this._private.panningEnabled) return this;
  switch (n2.length) {
    case 1:
      O(e2) && (o2 = n2[0], s2 = o2.x, c2 = o2.y, A(s2) && (r2.x += s2), A(c2) && (r2.y += c2), this.emit(`pan viewport`));
      break;
    case 2:
      i2 = e2, a2 = t2, (i2 === `x` || i2 === `y`) && A(a2) && (r2[i2] += a2), this.emit(`pan viewport`);
      break;
  }
  return this.notify(`viewport`), this;
}, gc: function() {
  this.notify(`gc`);
}, fit: function(e2, t2) {
  var n2 = this.getFitViewport(e2, t2);
  if (n2) {
    var r2 = this._private;
    r2.zoom = n2.zoom, r2.pan = n2.pan, this.emit(`pan zoom viewport`), this.notify(`viewport`);
  }
  return this;
}, getFitViewport: function(e2, t2) {
  if (A(e2) && t2 === void 0 && (t2 = e2, e2 = void 0), !(!this._private.panningEnabled || !this._private.zoomingEnabled)) {
    var n2;
    if (T(e2)) {
      var r2 = e2;
      e2 = this.$(r2);
    } else if (V(e2)) {
      var i2 = e2;
      n2 = { x1: i2.x1, y1: i2.y1, x2: i2.x2, y2: i2.y2 }, n2.w = n2.x2 - n2.x1, n2.h = n2.y2 - n2.y1;
    } else N(e2) || (e2 = this.mutableElements());
    if (!(N(e2) && e2.empty())) {
      n2 || (n2 = e2.boundingBox());
      var a2 = this.width(), o2 = this.height(), s2;
      if (t2 = A(t2) ? t2 : 0, !isNaN(a2) && !isNaN(o2) && a2 > 0 && o2 > 0 && !isNaN(n2.w) && !isNaN(n2.h) && n2.w > 0 && n2.h > 0) {
        s2 = Math.min((a2 - 2 * t2) / n2.w, (o2 - 2 * t2) / n2.h), s2 = s2 > this._private.maxZoom ? this._private.maxZoom : s2, s2 = s2 < this._private.minZoom ? this._private.minZoom : s2;
        var c2 = { x: (a2 - s2 * (n2.x1 + n2.x2)) / 2, y: (o2 - s2 * (n2.y1 + n2.y2)) / 2 };
        return { zoom: s2, pan: c2 };
      }
    }
  }
}, zoomRange: function(e2, t2) {
  var n2 = this._private;
  if (t2 == null) {
    var r2 = e2;
    e2 = r2.min, t2 = r2.max;
  }
  return A(e2) && A(t2) && e2 <= t2 ? (n2.minZoom = e2, n2.maxZoom = t2) : A(e2) && t2 === void 0 && e2 <= n2.maxZoom ? n2.minZoom = e2 : A(t2) && e2 === void 0 && t2 >= n2.minZoom && (n2.maxZoom = t2), this;
}, minZoom: function(e2) {
  return e2 === void 0 ? this._private.minZoom : this.zoomRange({ min: e2 });
}, maxZoom: function(e2) {
  return e2 === void 0 ? this._private.maxZoom : this.zoomRange({ max: e2 });
}, getZoomedViewport: function(e2) {
  var t2 = this._private, n2 = t2.pan, r2 = t2.zoom, i2, a2, o2 = false;
  if (t2.zoomingEnabled || (o2 = true), A(e2) ? a2 = e2 : O(e2) && (a2 = e2.level, e2.position == null ? e2.renderedPosition != null && (i2 = e2.renderedPosition) : i2 = kn(e2.position, r2, n2), i2 != null && !t2.panningEnabled && (o2 = true)), a2 = a2 > t2.maxZoom ? t2.maxZoom : a2, a2 = a2 < t2.minZoom ? t2.minZoom : a2, o2 || !A(a2) || a2 === r2 || i2 != null && (!A(i2.x) || !A(i2.y))) return null;
  if (i2 != null) {
    var s2 = n2, c2 = r2, l2 = a2;
    return { zoomed: true, panned: true, zoom: l2, pan: { x: -l2 / c2 * (i2.x - s2.x) + i2.x, y: -l2 / c2 * (i2.y - s2.y) + i2.y } };
  } else return { zoomed: true, panned: false, zoom: a2, pan: n2 };
}, zoom: function(e2) {
  if (e2 === void 0) return this._private.zoom;
  var t2 = this.getZoomedViewport(e2), n2 = this._private;
  return t2 == null || !t2.zoomed ? this : (n2.zoom = t2.zoom, t2.panned && (n2.pan.x = t2.pan.x, n2.pan.y = t2.pan.y), this.emit(`zoom` + (t2.panned ? ` pan` : ``) + ` viewport`), this.notify(`viewport`), this);
}, viewport: function(e2) {
  var t2 = this._private, n2 = true, r2 = true, i2 = [], a2 = false, o2 = false;
  if (!e2 || (A(e2.zoom) || (n2 = false), O(e2.pan) || (r2 = false), !n2 && !r2)) return this;
  if (n2) {
    var s2 = e2.zoom;
    s2 < t2.minZoom || s2 > t2.maxZoom || !t2.zoomingEnabled ? a2 = true : (t2.zoom = s2, i2.push(`zoom`));
  }
  if (r2 && (!a2 || !e2.cancelOnFailedZoom) && t2.panningEnabled) {
    var c2 = e2.pan;
    A(c2.x) && (t2.pan.x = c2.x, o2 = false), A(c2.y) && (t2.pan.y = c2.y, o2 = false), o2 || i2.push(`pan`);
  }
  return i2.length > 0 && (i2.push(`viewport`), this.emit(i2.join(` `)), this.notify(`viewport`)), this;
}, center: function(e2) {
  var t2 = this.getCenterPan(e2);
  return t2 && (this._private.pan = t2, this.emit(`pan viewport`), this.notify(`viewport`)), this;
}, getCenterPan: function(e2, t2) {
  if (this._private.panningEnabled) {
    if (T(e2)) {
      var n2 = e2;
      e2 = this.mutableElements().filter(n2);
    } else N(e2) || (e2 = this.mutableElements());
    if (e2.length !== 0) {
      var r2 = e2.boundingBox(), i2 = this.width(), a2 = this.height();
      return t2 = t2 === void 0 ? this._private.zoom : t2, { x: (i2 - t2 * (r2.x1 + r2.x2)) / 2, y: (a2 - t2 * (r2.y1 + r2.y2)) / 2 };
    }
  }
}, reset: function() {
  return !this._private.panningEnabled || !this._private.zoomingEnabled || this.viewport({ pan: { x: 0, y: 0 }, zoom: 1 }), this;
}, invalidateSize: function() {
  this._private.sizeCache = null;
}, size: function() {
  var e2 = this._private, t2 = e2.container, n2 = this;
  return e2.sizeCache = e2.sizeCache || (t2 ? (function() {
    var e3 = n2.window().getComputedStyle(t2), r2 = function(t3) {
      return parseFloat(e3.getPropertyValue(t3));
    };
    return { width: t2.clientWidth - r2(`padding-left`) - r2(`padding-right`), height: t2.clientHeight - r2(`padding-top`) - r2(`padding-bottom`) };
  })() : { width: 1, height: 1 });
}, width: function() {
  return this.size().width;
}, height: function() {
  return this.size().height;
}, extent: function() {
  var e2 = this._private.pan, t2 = this._private.zoom, n2 = this.renderedExtent(), r2 = { x1: (n2.x1 - e2.x) / t2, x2: (n2.x2 - e2.x) / t2, y1: (n2.y1 - e2.y) / t2, y2: (n2.y2 - e2.y) / t2 };
  return r2.w = r2.x2 - r2.x1, r2.h = r2.y2 - r2.y1, r2;
}, renderedExtent: function() {
  var e2 = this.width(), t2 = this.height();
  return { x1: 0, y1: 0, x2: e2, y2: t2, w: e2, h: t2 };
}, multiClickDebounceTime: function(e2) {
  if (e2) this._private.multiClickDebounceTime = e2;
  else return this._private.multiClickDebounceTime;
  return this;
} };
td.centre = td.center, td.autolockNodes = td.autolock, td.autoungrabifyNodes = td.autoungrabify;
var nd = { data: mc.data({ field: `data`, bindingEvent: `data`, allowBinding: true, allowSetting: true, settingEvent: `data`, settingTriggersEvent: true, triggerFnName: `trigger`, allowGetting: true, updateStyle: true }), removeData: mc.removeData({ field: `data`, event: `data`, triggerFnName: `trigger`, triggerEvent: true, updateStyle: true }), scratch: mc.data({ field: `scratch`, bindingEvent: `scratch`, allowBinding: true, allowSetting: true, settingEvent: `scratch`, settingTriggersEvent: true, triggerFnName: `trigger`, allowGetting: true, updateStyle: true }), removeScratch: mc.removeData({ field: `scratch`, event: `scratch`, triggerFnName: `trigger`, triggerEvent: true, updateStyle: true }) };
nd.attr = nd.data, nd.removeAttr = nd.removeData;
var rd = function(e2) {
  var t2 = this;
  e2 = X({}, e2);
  var n2 = e2.container;
  n2 && !M(n2) && M(n2[0]) && (n2 = n2[0]);
  var r2 = n2 ? n2._cyreg : null;
  r2 || (r2 = {}), r2 && r2.cy && (r2.cy.destroy(), r2 = {});
  var i2 = r2.readies = r2.readies || [];
  n2 && (n2._cyreg = r2), r2.cy = t2;
  var a2 = v !== void 0 && n2 !== void 0 && !e2.headless, o2 = e2;
  o2.layout = X({ name: a2 ? `grid` : `null` }, o2.layout), o2.renderer = X({ name: a2 ? `canvas` : `null` }, o2.renderer);
  var s2 = function(e3, t3, n3) {
    return t3 === void 0 ? n3 === void 0 ? e3 : n3 : t3;
  }, c2 = this._private = { container: n2, ready: false, options: o2, elements: new _u(this), listeners: [], aniEles: new _u(this), data: o2.data || {}, scratch: {}, layout: null, renderer: null, destroyed: false, notificationsEnabled: true, minZoom: 1e-50, maxZoom: 1e50, zoomingEnabled: s2(true, o2.zoomingEnabled), userZoomingEnabled: s2(true, o2.userZoomingEnabled), panningEnabled: s2(true, o2.panningEnabled), userPanningEnabled: s2(true, o2.userPanningEnabled), boxSelectionEnabled: s2(true, o2.boxSelectionEnabled), autolock: s2(false, o2.autolock, o2.autolockNodes), autoungrabify: s2(false, o2.autoungrabify, o2.autoungrabifyNodes), autounselectify: s2(false, o2.autounselectify), styleEnabled: o2.styleEnabled === void 0 ? a2 : o2.styleEnabled, zoom: A(o2.zoom) ? o2.zoom : 1, pan: { x: O(o2.pan) && A(o2.pan.x) ? o2.pan.x : 0, y: O(o2.pan) && A(o2.pan.y) ? o2.pan.y : 0 }, animation: { current: [], queue: [] }, hasCompoundNodes: false, multiClickDebounceTime: s2(250, o2.multiClickDebounceTime) };
  this.createEmitter(), this.selectionType(o2.selectionType), this.zoomRange({ min: o2.minZoom, max: o2.maxZoom });
  var l2 = function(e3, t3) {
    if (e3.some(H)) return pa.all(e3).then(t3);
    t3(e3);
  };
  c2.styleEnabled && t2.setStyle([]);
  var u2 = X({}, o2, o2.renderer);
  t2.initRenderer(u2);
  var d2 = function(e3, n3, r3) {
    t2.notifications(false);
    var i3 = t2.mutableElements();
    i3.length > 0 && i3.remove(), e3 != null && (O(e3) || D(e3)) && t2.add(e3), t2.one(`layoutready`, function(e4) {
      t2.notifications(true), t2.emit(e4), t2.one(`load`, n3), t2.emitAndNotify(`load`);
    }).one(`layoutstop`, function() {
      t2.one(`done`, r3), t2.emit(`done`);
    });
    var a3 = X({}, t2._private.options.layout);
    a3.eles = t2.elements(), t2.layout(a3).run();
  };
  l2([o2.style, o2.elements], function(e3) {
    var n3 = e3[0], a3 = e3[1];
    c2.styleEnabled && t2.style().append(n3), d2(a3, function() {
      t2.startAnimationLoop(), c2.ready = true, E(o2.ready) && t2.on(`ready`, o2.ready);
      for (var e4 = 0; e4 < i2.length; e4++) {
        var n4 = i2[e4];
        t2.on(`ready`, n4);
      }
      r2 && (r2.readies = []), t2.emit(`ready`);
    }, o2.done);
  });
}, id = rd.prototype;
X(id, { instanceString: function() {
  return `core`;
}, isReady: function() {
  return this._private.ready;
}, destroyed: function() {
  return this._private.destroyed;
}, ready: function(e2) {
  return this.isReady() ? this.emitter().emit(`ready`, [], e2) : this.on(`ready`, e2), this;
}, destroy: function() {
  var e2 = this;
  if (!e2.destroyed()) return e2.stopAnimationLoop(), e2.destroyRenderer(), this.emit(`destroy`), e2._private.destroyed = true, e2;
}, hasElementWithId: function(e2) {
  return this._private.elements.hasElementWithId(e2);
}, getElementById: function(e2) {
  return this._private.elements.getElementById(e2);
}, hasCompoundNodes: function() {
  return this._private.hasCompoundNodes;
}, headless: function() {
  return this._private.renderer.isHeadless();
}, styleEnabled: function() {
  return this._private.styleEnabled;
}, addToPool: function(e2) {
  return this._private.elements.merge(e2), this;
}, removeFromPool: function(e2) {
  return this._private.elements.unmerge(e2), this;
}, container: function() {
  return this._private.container || null;
}, window: function() {
  if (this._private.container == null) return v;
  var e2 = this._private.container.ownerDocument;
  return e2 === void 0 || e2 == null ? v : e2.defaultView || v;
}, mount: function(e2) {
  if (e2 != null) {
    var t2 = this, n2 = t2._private, r2 = n2.options;
    return !M(e2) && M(e2[0]) && (e2 = e2[0]), t2.stopAnimationLoop(), t2.destroyRenderer(), n2.container = e2, n2.styleEnabled = true, t2.invalidateSize(), t2.initRenderer(X({}, r2, r2.renderer, { name: r2.renderer.name === `null` ? `canvas` : r2.renderer.name })), t2.startAnimationLoop(), t2.style(r2.style), t2.emit(`mount`), t2;
  }
}, unmount: function() {
  var e2 = this;
  return e2.stopAnimationLoop(), e2.destroyRenderer(), e2.initRenderer({ name: `null` }), e2.emit(`unmount`), e2;
}, options: function() {
  return Vt(this._private.options);
}, json: function(e2) {
  var t2 = this, n2 = t2._private, r2 = t2.mutableElements(), i2 = function(e3) {
    return t2.getElementById(e3.id());
  };
  if (O(e2)) {
    if (t2.startBatch(), e2.elements) {
      var a2 = {}, o2 = function(e3, n3) {
        for (var r3 = [], i3 = [], o3 = 0; o3 < e3.length; o3++) {
          var s3 = e3[o3];
          if (!s3.data.id) {
            zt(`cy.json() cannot handle elements without an ID attribute`);
            continue;
          }
          var c3 = `` + s3.data.id, l3 = t2.getElementById(c3);
          a2[c3] = true, l3.length === 0 ? (n3 && (s3.group = n3), r3.push(s3)) : i3.push({ ele: l3, json: s3 });
        }
        t2.add(r3);
        for (var u3 = 0; u3 < i3.length; u3++) {
          var d3 = i3[u3], f3 = d3.ele, p3 = d3.json;
          f3.json(p3);
        }
      };
      if (D(e2.elements)) o2(e2.elements);
      else for (var s2 = [`nodes`, `edges`], c2 = 0; c2 < s2.length; c2++) {
        var l2 = s2[c2], u2 = e2.elements[l2];
        D(u2) && o2(u2, l2);
      }
      var d2 = t2.collection();
      r2.filter(function(e3) {
        return !a2[e3.id()];
      }).forEach(function(e3) {
        e3.isParent() ? d2.merge(e3) : e3.remove();
      }), d2.forEach(function(e3) {
        return e3.children().move({ parent: null });
      }), d2.forEach(function(e3) {
        return i2(e3).remove();
      });
    }
    e2.style && t2.style(e2.style), e2.zoom != null && e2.zoom !== n2.zoom && t2.zoom(e2.zoom), e2.pan && (e2.pan.x !== n2.pan.x || e2.pan.y !== n2.pan.y) && t2.pan(e2.pan), e2.data && t2.data(e2.data);
    for (var f2 = [`minZoom`, `maxZoom`, `zoomingEnabled`, `userZoomingEnabled`, `panningEnabled`, `userPanningEnabled`, `boxSelectionEnabled`, `autolock`, `autoungrabify`, `autounselectify`, `multiClickDebounceTime`], p2 = 0; p2 < f2.length; p2++) {
      var m2 = f2[p2];
      e2[m2] != null && t2[m2](e2[m2]);
    }
    return t2.endBatch(), this;
  } else {
    var h2 = !!e2, g2 = {};
    h2 ? g2.elements = this.elements().map(function(e3) {
      return e3.json();
    }) : (g2.elements = {}, r2.forEach(function(e3) {
      var t3 = e3.group();
      g2.elements[t3] || (g2.elements[t3] = []), g2.elements[t3].push(e3.json());
    })), this._private.styleEnabled && (g2.style = t2.style().json()), g2.data = Vt(t2.data());
    var _2 = n2.options;
    return g2.zoomingEnabled = n2.zoomingEnabled, g2.userZoomingEnabled = n2.userZoomingEnabled, g2.zoom = n2.zoom, g2.minZoom = n2.minZoom, g2.maxZoom = n2.maxZoom, g2.panningEnabled = n2.panningEnabled, g2.userPanningEnabled = n2.userPanningEnabled, g2.pan = Vt(n2.pan), g2.boxSelectionEnabled = n2.boxSelectionEnabled, g2.renderer = Vt(_2.renderer), g2.hideEdgesOnViewport = _2.hideEdgesOnViewport, g2.textureOnViewport = _2.textureOnViewport, g2.wheelSensitivity = _2.wheelSensitivity, g2.motionBlur = _2.motionBlur, g2.multiClickDebounceTime = _2.multiClickDebounceTime, g2;
  }
} }), id.$id = id.getElementById, [yu, ju, Pu, Fu, Iu, Lu, zu, Bu, $u, td, nd].forEach(function(e2) {
  X(id, e2);
});
var ad = { fit: true, directed: false, direction: `downward`, padding: 30, circle: false, grid: false, spacingFactor: 1.75, boundingBox: void 0, avoidOverlap: true, nodeDimensionsIncludeLabels: false, roots: void 0, depthSort: void 0, animate: false, animationDuration: 500, animationEasing: void 0, animateFilter: function(e2, t2) {
  return true;
}, ready: void 0, stop: void 0, transform: function(e2, t2) {
  return t2;
} }, od = { maximal: false, acyclic: false }, sd = function(e2) {
  return e2.scratch(`breadthfirst`);
}, cd = function(e2, t2) {
  return e2.scratch(`breadthfirst`, t2);
};
function ld(e2) {
  this.options = X({}, ad, od, e2);
}
ld.prototype.run = function() {
  var e2 = this.options, t2 = e2.cy, n2 = e2.eles, r2 = n2.nodes().filter(function(e3) {
    return e3.isChildless();
  }), i2 = n2, a2 = e2.directed, o2 = e2.acyclic || e2.maximal || e2.maximalAdjustments > 0, s2 = !!e2.boundingBox, c2 = qn(s2 ? e2.boundingBox : structuredClone(t2.extent())), l2;
  if (N(e2.roots)) l2 = e2.roots;
  else if (D(e2.roots)) {
    for (var u2 = [], d2 = 0; d2 < e2.roots.length; d2++) {
      var f2 = e2.roots[d2], p2 = t2.getElementById(f2);
      u2.push(p2);
    }
    l2 = t2.collection(u2);
  } else if (T(e2.roots)) l2 = t2.$(e2.roots);
  else if (a2) l2 = r2.roots();
  else {
    var m2 = n2.components();
    l2 = t2.collection();
    for (var h2 = function() {
      var e3 = m2[g2], t3 = e3.maxDegree(false), n3 = e3.filter(function(e4) {
        return e4.degree(false) === t3;
      });
      l2 = l2.add(n3);
    }, g2 = 0; g2 < m2.length; g2++) h2();
  }
  var _2 = [], v2 = {}, y2 = function(e3, t3) {
    _2[t3] ?? (_2[t3] = []);
    var n3 = _2[t3].length;
    _2[t3].push(e3), cd(e3, { index: n3, depth: t3 });
  }, b2 = function(e3, t3) {
    var n3 = sd(e3), r3 = n3.depth, i3 = n3.index;
    _2[r3][i3] = null, e3.isChildless() && y2(e3, t3);
  };
  i2.bfs({ roots: l2, directed: e2.directed, visit: function(e3, t3, n3, r3, i3) {
    var a3 = e3[0], o3 = a3.id();
    a3.isChildless() && y2(a3, i3), v2[o3] = true;
  } });
  for (var x2 = [], S2 = 0; S2 < r2.length; S2++) {
    var C2 = r2[S2];
    v2[C2.id()] || x2.push(C2);
  }
  var w2 = function(e3) {
    for (var t3 = _2[e3], n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      if (r3 == null) {
        t3.splice(n3, 1), n3--;
        continue;
      }
      cd(r3, { depth: e3, index: n3 });
    }
  }, E2 = function(t3, r3) {
    for (var i3 = sd(t3), a3 = t3.incomers().filter(function(e3) {
      return e3.isNode() && n2.has(e3);
    }), o3 = -1, s3 = t3.id(), c3 = 0; c3 < a3.length; c3++) {
      var l3 = a3[c3], u3 = sd(l3);
      o3 = Math.max(o3, u3.depth);
    }
    if (i3.depth <= o3) {
      if (!e2.acyclic && r3[s3]) return null;
      var d3 = o3 + 1;
      return b2(t3, d3), r3[s3] = d3, true;
    }
    return false;
  };
  if (a2 && o2) {
    var O2 = [], k2 = {}, A2 = function(e3) {
      return O2.push(e3);
    }, j2 = function() {
      return O2.shift();
    };
    for (r2.forEach(function(e3) {
      return O2.push(e3);
    }); O2.length > 0; ) {
      var M2 = j2(), P2 = E2(M2, k2);
      if (P2) M2.outgoers().filter(function(e3) {
        return e3.isNode() && n2.has(e3);
      }).forEach(A2);
      else if (P2 === null) {
        zt("Detected double maximal shift for node `" + M2.id() + "`.  Bailing maximal adjustment due to cycle.  Use `options.maximal: true` only on DAGs.");
        break;
      }
    }
  }
  var F2 = 0;
  if (e2.avoidOverlap) for (var I2 = 0; I2 < r2.length; I2++) {
    var L2 = r2[I2].layoutDimensions(e2), R2 = L2.w, z2 = L2.h;
    F2 = Math.max(F2, R2, z2);
  }
  var B2 = {}, V2 = function(e3) {
    if (B2[e3.id()]) return B2[e3.id()];
    for (var t3 = sd(e3).depth, n3 = e3.neighborhood(), i3 = 0, a3 = 0, o3 = 0; o3 < n3.length; o3++) {
      var s3 = n3[o3];
      if (!(s3.isEdge() || s3.isParent() || !r2.has(s3))) {
        var c3 = sd(s3);
        if (c3 != null) {
          var l3 = c3.index, u3 = c3.depth;
          if (!(l3 == null || u3 == null)) {
            var d3 = _2[u3].length;
            u3 < t3 && (i3 += l3 / d3, a3++);
          }
        }
      }
    }
    return a3 = Math.max(1, a3), i3 /= a3, a3 === 0 && (i3 = 0), B2[e3.id()] = i3, i3;
  }, H2 = function(e3, t3) {
    var n3 = V2(e3) - V2(t3);
    return n3 === 0 ? se(e3.id(), t3.id()) : n3;
  };
  e2.depthSort !== void 0 && (H2 = e2.depthSort);
  for (var U2 = _2.length, W2 = 0; W2 < U2; W2++) _2[W2].sort(H2), w2(W2);
  for (var G2 = [], K2 = 0; K2 < x2.length; K2++) G2.push(x2[K2]);
  G2.length && (_2.unshift(G2), U2 = _2.length, (function() {
    for (var e3 = 0; e3 < U2; e3++) w2(e3);
  })());
  for (var q2 = 0, J2 = 0; J2 < U2; J2++) q2 = Math.max(_2[J2].length, q2);
  var ee2 = { x: c2.x1 + c2.w / 2, y: c2.y1 + c2.h / 2 }, Y2 = r2.reduce(function(t3, n3) {
    return (function(e3) {
      return { w: t3.w === -1 ? e3.w : (t3.w + e3.w) / 2, h: t3.h === -1 ? e3.h : (t3.h + e3.h) / 2 };
    })(n3.boundingBox({ includeLabels: e2.nodeDimensionsIncludeLabels }));
  }, { w: -1, h: -1 }), te2 = Math.max(U2 === 1 ? 0 : s2 ? (c2.h - e2.padding * 2 - Y2.h) / (U2 - 1) : (c2.h - e2.padding * 2 - Y2.h) / (U2 + 1), F2), ne2 = _2.reduce(function(e3, t3) {
    return Math.max(e3, t3.length);
  }, 0), re2 = function(t3) {
    var n3 = sd(t3), r3 = n3.depth, i3 = n3.index;
    if (e2.circle) {
      var a3 = Math.min(c2.w / 2 / U2, c2.h / 2 / U2);
      a3 = Math.max(a3, F2);
      var o3 = a3 * r3 + a3 - (U2 > 0 && _2[0].length <= 3 ? a3 / 2 : 0), l3 = 2 * Math.PI / _2[r3].length * i3;
      return r3 === 0 && _2[0].length === 1 && (o3 = 1), { x: ee2.x + o3 * Math.cos(l3), y: ee2.y + o3 * Math.sin(l3) };
    } else {
      var u3 = _2[r3].length, d3 = Math.max(u3 === 1 ? 0 : s2 ? (c2.w - e2.padding * 2 - Y2.w) / ((e2.grid ? ne2 : u3) - 1) : (c2.w - e2.padding * 2 - Y2.w) / ((e2.grid ? ne2 : u3) + 1), F2);
      return { x: ee2.x + (i3 + 1 - (u3 + 1) / 2) * d3, y: ee2.y + (r3 + 1 - (U2 + 1) / 2) * te2 };
    }
  }, ie2 = { downward: 0, leftward: 90, upward: 180, rightward: -90 };
  return Object.keys(ie2).indexOf(e2.direction) === -1 && Lt(`Invalid direction '${e2.direction}' specified for breadthfirst layout. Valid values are: ${Object.keys(ie2).join(`, `)}`), n2.nodes().layoutPositions(this, e2, function(t3) {
    return Ot(re2(t3), c2, ie2[e2.direction]);
  }), this;
};
var ud = { fit: true, padding: 30, boundingBox: void 0, avoidOverlap: true, nodeDimensionsIncludeLabels: false, spacingFactor: void 0, radius: void 0, startAngle: 3 / 2 * Math.PI, sweep: void 0, clockwise: true, sort: void 0, animate: false, animationDuration: 500, animationEasing: void 0, animateFilter: function(e2, t2) {
  return true;
}, ready: void 0, stop: void 0, transform: function(e2, t2) {
  return t2;
} };
function dd(e2) {
  this.options = X({}, ud, e2);
}
dd.prototype.run = function() {
  var e2 = this.options, t2 = e2, n2 = e2.cy, r2 = t2.eles, i2 = t2.counterclockwise === void 0 ? t2.clockwise : !t2.counterclockwise, a2 = r2.nodes().not(`:parent`);
  t2.sort && (a2 = a2.sort(t2.sort));
  for (var o2 = qn(t2.boundingBox ? t2.boundingBox : { x1: 0, y1: 0, w: n2.width(), h: n2.height() }), s2 = { x: o2.x1 + o2.w / 2, y: o2.y1 + o2.h / 2 }, c2 = (t2.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / a2.length : t2.sweep) / Math.max(1, a2.length - 1), l2, u2 = 0, d2 = 0; d2 < a2.length; d2++) {
    var f2 = a2[d2].layoutDimensions(t2), p2 = f2.w, m2 = f2.h;
    u2 = Math.max(u2, p2, m2);
  }
  if (l2 = A(t2.radius) ? t2.radius : a2.length <= 1 ? 0 : Math.min(o2.h, o2.w) / 2 - u2, a2.length > 1 && t2.avoidOverlap) {
    u2 *= 1.75;
    var h2 = Math.cos(c2) - Math.cos(0), g2 = Math.sin(c2) - Math.sin(0), _2 = Math.sqrt(u2 * u2 / (h2 * h2 + g2 * g2));
    l2 = Math.max(_2, l2);
  }
  return r2.nodes().layoutPositions(this, t2, function(e3, n3) {
    var r3 = t2.startAngle + n3 * c2 * (i2 ? 1 : -1), a3 = l2 * Math.cos(r3), o3 = l2 * Math.sin(r3);
    return { x: s2.x + a3, y: s2.y + o3 };
  }), this;
};
var fd = { fit: true, padding: 30, startAngle: 3 / 2 * Math.PI, sweep: void 0, clockwise: true, equidistant: false, minNodeSpacing: 10, boundingBox: void 0, avoidOverlap: true, nodeDimensionsIncludeLabels: false, height: void 0, width: void 0, spacingFactor: void 0, concentric: function(e2) {
  return e2.degree();
}, levelWidth: function(e2) {
  return e2.maxDegree() / 4;
}, animate: false, animationDuration: 500, animationEasing: void 0, animateFilter: function(e2, t2) {
  return true;
}, ready: void 0, stop: void 0, transform: function(e2, t2) {
  return t2;
} };
function pd(e2) {
  this.options = X({}, fd, e2);
}
pd.prototype.run = function() {
  for (var e2 = this.options, t2 = e2, n2 = t2.counterclockwise === void 0 ? t2.clockwise : !t2.counterclockwise, r2 = e2.cy, i2 = t2.eles, a2 = i2.nodes().not(`:parent`), o2 = qn(t2.boundingBox ? t2.boundingBox : { x1: 0, y1: 0, w: r2.width(), h: r2.height() }), s2 = { x: o2.x1 + o2.w / 2, y: o2.y1 + o2.h / 2 }, c2 = [], l2 = 0, u2 = 0; u2 < a2.length; u2++) {
    var d2 = a2[u2], f2 = void 0;
    f2 = t2.concentric(d2), c2.push({ value: f2, node: d2 }), d2._private.scratch.concentric = f2;
  }
  a2.updateStyle();
  for (var p2 = 0; p2 < a2.length; p2++) {
    var m2 = a2[p2].layoutDimensions(t2);
    l2 = Math.max(l2, m2.w, m2.h);
  }
  c2.sort(function(e3, t3) {
    return t3.value - e3.value;
  });
  for (var h2 = t2.levelWidth(a2), g2 = [[]], _2 = g2[0], v2 = 0; v2 < c2.length; v2++) {
    var y2 = c2[v2];
    _2.length > 0 && Math.abs(_2[0].value - y2.value) >= h2 && (_2 = [], g2.push(_2)), _2.push(y2);
  }
  var b2 = l2 + t2.minNodeSpacing;
  if (!t2.avoidOverlap) {
    var x2 = g2.length > 0 && g2[0].length > 1, S2 = (Math.min(o2.w, o2.h) / 2 - b2) / (g2.length + x2 ? 1 : 0);
    b2 = Math.min(b2, S2);
  }
  for (var C2 = 0, w2 = 0; w2 < g2.length; w2++) {
    var T2 = g2[w2], E2 = T2.dTheta = (t2.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / T2.length : t2.sweep) / Math.max(1, T2.length - 1);
    if (T2.length > 1 && t2.avoidOverlap) {
      var D2 = Math.cos(E2) - Math.cos(0), O2 = Math.sin(E2) - Math.sin(0), k2 = Math.sqrt(b2 * b2 / (D2 * D2 + O2 * O2));
      C2 = Math.max(k2, C2);
    }
    T2.r = C2, C2 += b2;
  }
  if (t2.equidistant) {
    for (var A2 = 0, j2 = 0, M2 = 0; M2 < g2.length; M2++) {
      var N2 = g2[M2].r - j2;
      A2 = Math.max(A2, N2);
    }
    j2 = 0;
    for (var P2 = 0; P2 < g2.length; P2++) {
      var F2 = g2[P2];
      P2 === 0 && (j2 = F2.r), F2.r = j2, j2 += A2;
    }
  }
  for (var I2 = {}, L2 = 0; L2 < g2.length; L2++) for (var R2 = g2[L2], z2 = R2.dTheta, B2 = R2.r, V2 = 0; V2 < R2.length; V2++) {
    var H2 = R2[V2], U2 = t2.startAngle + (n2 ? 1 : -1) * z2 * V2, W2 = { x: s2.x + B2 * Math.cos(U2), y: s2.y + B2 * Math.sin(U2) };
    I2[H2.node.id()] = W2;
  }
  return i2.nodes().layoutPositions(this, t2, function(e3) {
    return I2[e3.id()];
  }), this;
};
var md, hd = { ready: function() {
}, stop: function() {
}, animate: true, animationEasing: void 0, animationDuration: void 0, animateFilter: function(e2, t2) {
  return true;
}, animationThreshold: 250, refresh: 20, fit: true, padding: 30, boundingBox: void 0, nodeDimensionsIncludeLabels: false, randomize: false, componentSpacing: 40, nodeRepulsion: function(e2) {
  return 2048;
}, nodeOverlap: 4, idealEdgeLength: function(e2) {
  return 32;
}, edgeElasticity: function(e2) {
  return 32;
}, nestingFactor: 1.2, gravity: 1, numIter: 1e3, initialTemp: 1e3, coolingFactor: 0.99, minTemp: 1 };
function gd(e2) {
  this.options = X({}, hd, e2), this.options.layout = this;
  var t2 = this.options.eles.nodes(), n2 = this.options.eles.edges().filter(function(e3) {
    var n3 = e3.source().data(`id`), r2 = e3.target().data(`id`), i2 = t2.some(function(e4) {
      return e4.data(`id`) === n3;
    }), a2 = t2.some(function(e4) {
      return e4.data(`id`) === r2;
    });
    return !i2 || !a2;
  });
  this.options.eles = this.options.eles.not(n2);
}
gd.prototype.run = function() {
  var e2 = this.options, t2 = e2.cy, n2 = this;
  n2.stopped = false, (e2.animate === true || e2.animate === false) && n2.emit({ type: `layoutstart`, layout: n2 }), md = true === e2.debug;
  var r2 = _d(t2, n2, e2);
  md && bd(r2), e2.randomize && xd(r2);
  var i2 = ft(), a2 = function() {
    Cd(r2, t2, e2), true === e2.fit && t2.fit(e2.padding);
  }, o2 = function(t3) {
    return !(n2.stopped || t3 >= e2.numIter || (wd(r2, e2), r2.temperature *= e2.coolingFactor, r2.temperature < e2.minTemp));
  }, s2 = function() {
    if (e2.animate === true || e2.animate === false) a2(), n2.one(`layoutstop`, e2.stop), n2.emit({ type: `layoutstop`, layout: n2 });
    else {
      var t3 = e2.eles.nodes(), i3 = Sd(r2, e2, t3);
      t3.layoutPositions(n2, e2, i3);
    }
  }, c2 = 0, l2 = true;
  if (e2.animate === true) {
    var u2 = function() {
      for (var t3 = 0; l2 && t3 < e2.refresh; ) l2 = o2(c2), c2++, t3++;
      l2 ? (ft() - i2 >= e2.animationThreshold && a2(), dt(u2)) : (Id(r2, e2), s2());
    };
    u2();
  } else {
    for (; l2; ) l2 = o2(c2), c2++;
    Id(r2, e2), s2();
  }
  return this;
}, gd.prototype.stop = function() {
  return this.stopped = true, this.thread && this.thread.stop(), this.emit(`layoutstop`), this;
}, gd.prototype.destroy = function() {
  return this.thread && this.thread.stop(), this;
};
var _d = function(e2, t2, n2) {
  for (var r2 = n2.eles.edges(), i2 = n2.eles.nodes(), a2 = qn(n2.boundingBox ? n2.boundingBox : { x1: 0, y1: 0, w: e2.width(), h: e2.height() }), o2 = { isCompound: e2.hasCompoundNodes(), layoutNodes: [], idToIndex: {}, nodeSize: i2.size(), graphSet: [], indexToGraph: [], layoutEdges: [], edgeSize: r2.size(), temperature: n2.initialTemp, clientWidth: a2.w, clientHeight: a2.h, boundingBox: a2 }, s2 = n2.eles.components(), c2 = {}, l2 = 0; l2 < s2.length; l2++) for (var u2 = s2[l2], d2 = 0; d2 < u2.length; d2++) {
    var f2 = u2[d2];
    c2[f2.id()] = l2;
  }
  for (var l2 = 0; l2 < o2.nodeSize; l2++) {
    var p2 = i2[l2], m2 = p2.layoutDimensions(n2), h2 = {};
    h2.isLocked = p2.locked(), h2.id = p2.data(`id`), h2.parentId = p2.data(`parent`), h2.cmptId = c2[p2.id()], h2.children = [], h2.positionX = p2.position(`x`), h2.positionY = p2.position(`y`), h2.offsetX = 0, h2.offsetY = 0, h2.height = m2.w, h2.width = m2.h, h2.maxX = h2.positionX + h2.width / 2, h2.minX = h2.positionX - h2.width / 2, h2.maxY = h2.positionY + h2.height / 2, h2.minY = h2.positionY - h2.height / 2, h2.padLeft = parseFloat(p2.style(`padding`)), h2.padRight = parseFloat(p2.style(`padding`)), h2.padTop = parseFloat(p2.style(`padding`)), h2.padBottom = parseFloat(p2.style(`padding`)), h2.nodeRepulsion = E(n2.nodeRepulsion) ? n2.nodeRepulsion(p2) : n2.nodeRepulsion, o2.layoutNodes.push(h2), o2.idToIndex[h2.id] = l2;
  }
  for (var g2 = [], _2 = 0, v2 = -1, y2 = [], l2 = 0; l2 < o2.nodeSize; l2++) {
    var p2 = o2.layoutNodes[l2], b2 = p2.parentId;
    b2 == null ? (g2[++v2] = p2.id, y2.push(p2.id)) : o2.layoutNodes[o2.idToIndex[b2]].children.push(p2.id);
  }
  for (o2.graphSet.push(y2); _2 <= v2; ) {
    var x2 = g2[_2++], S2 = o2.idToIndex[x2], f2 = o2.layoutNodes[S2], C2 = f2.children;
    if (C2.length > 0) {
      o2.graphSet.push(C2);
      for (var l2 = 0; l2 < C2.length; l2++) g2[++v2] = C2[l2];
    }
  }
  for (var l2 = 0; l2 < o2.graphSet.length; l2++) for (var w2 = o2.graphSet[l2], d2 = 0; d2 < w2.length; d2++) {
    var T2 = o2.idToIndex[w2[d2]];
    o2.indexToGraph[T2] = l2;
  }
  for (var l2 = 0; l2 < o2.edgeSize; l2++) {
    var D2 = r2[l2], O2 = {};
    O2.id = D2.data(`id`), O2.sourceId = D2.data(`source`), O2.targetId = D2.data(`target`);
    var k2 = E(n2.idealEdgeLength) ? n2.idealEdgeLength(D2) : n2.idealEdgeLength, A2 = E(n2.edgeElasticity) ? n2.edgeElasticity(D2) : n2.edgeElasticity, j2 = o2.idToIndex[O2.sourceId], M2 = o2.idToIndex[O2.targetId];
    if (o2.indexToGraph[j2] != o2.indexToGraph[M2]) {
      for (var N2 = vd(O2.sourceId, O2.targetId, o2), P2 = o2.graphSet[N2], F2 = 0, h2 = o2.layoutNodes[j2]; P2.indexOf(h2.id) === -1; ) h2 = o2.layoutNodes[o2.idToIndex[h2.parentId]], F2++;
      for (h2 = o2.layoutNodes[M2]; P2.indexOf(h2.id) === -1; ) h2 = o2.layoutNodes[o2.idToIndex[h2.parentId]], F2++;
      k2 *= F2 * n2.nestingFactor;
    }
    O2.idealLength = k2, O2.elasticity = A2, o2.layoutEdges.push(O2);
  }
  return o2;
}, vd = function(e2, t2, n2) {
  var r2 = yd(e2, t2, 0, n2);
  return 2 > r2.count ? 0 : r2.graph;
}, yd = function(e2, t2, n2, r2) {
  var i2 = r2.graphSet[n2];
  if (-1 < i2.indexOf(e2) && -1 < i2.indexOf(t2)) return { count: 2, graph: n2 };
  for (var a2 = 0, o2 = 0; o2 < i2.length; o2++) {
    var s2 = i2[o2], c2 = r2.idToIndex[s2], l2 = r2.layoutNodes[c2].children;
    if (l2.length !== 0) {
      var u2 = r2.indexToGraph[r2.idToIndex[l2[0]]], d2 = yd(e2, t2, u2, r2);
      if (d2.count !== 0) if (d2.count === 1) {
        if (a2++, a2 === 2) break;
      } else return d2;
    }
  }
  return { count: a2, graph: n2 };
}, bd, xd = function(e2, t2) {
  for (var n2 = e2.clientWidth, r2 = e2.clientHeight, i2 = 0; i2 < e2.nodeSize; i2++) {
    var a2 = e2.layoutNodes[i2];
    a2.children.length === 0 && !a2.isLocked && (a2.positionX = Math.random() * n2, a2.positionY = Math.random() * r2);
  }
}, Sd = function(e2, t2, n2) {
  var r2 = e2.boundingBox, i2 = { x1: 1 / 0, x2: -1 / 0, y1: 1 / 0, y2: -1 / 0 };
  return t2.boundingBox && (n2.forEach(function(t3) {
    var n3 = e2.layoutNodes[e2.idToIndex[t3.data(`id`)]];
    i2.x1 = Math.min(i2.x1, n3.positionX), i2.x2 = Math.max(i2.x2, n3.positionX), i2.y1 = Math.min(i2.y1, n3.positionY), i2.y2 = Math.max(i2.y2, n3.positionY);
  }), i2.w = i2.x2 - i2.x1, i2.h = i2.y2 - i2.y1), function(n3, a2) {
    var o2 = e2.layoutNodes[e2.idToIndex[n3.data(`id`)]];
    if (t2.boundingBox) {
      var s2 = i2.w === 0 ? 0.5 : (o2.positionX - i2.x1) / i2.w, c2 = i2.h === 0 ? 0.5 : (o2.positionY - i2.y1) / i2.h;
      return { x: r2.x1 + s2 * r2.w, y: r2.y1 + c2 * r2.h };
    } else return { x: o2.positionX, y: o2.positionY };
  };
}, Cd = function(e2, t2, n2) {
  var r2 = n2.layout, i2 = n2.eles.nodes(), a2 = Sd(e2, n2, i2);
  i2.positions(a2), true !== e2.ready && (e2.ready = true, r2.one(`layoutready`, n2.ready), r2.emit({ type: `layoutready`, layout: this }));
}, wd = function(e2, t2, n2) {
  Td(e2, t2), Ad(e2), jd(e2, t2), Md(e2), Nd(e2);
}, Td = function(e2, t2) {
  for (var n2 = 0; n2 < e2.graphSet.length; n2++) for (var r2 = e2.graphSet[n2], i2 = r2.length, a2 = 0; a2 < i2; a2++) for (var o2 = e2.layoutNodes[e2.idToIndex[r2[a2]]], s2 = a2 + 1; s2 < i2; s2++) {
    var c2 = e2.layoutNodes[e2.idToIndex[r2[s2]]];
    Dd(o2, c2, e2, t2);
  }
}, Ed = function(e2) {
  return -1 + 2 * e2 * Math.random();
}, Dd = function(e2, t2, n2, r2) {
  if (!(e2.cmptId !== t2.cmptId && !n2.isCompound)) {
    var i2 = t2.positionX - e2.positionX, a2 = t2.positionY - e2.positionY, o2 = 1;
    i2 === 0 && a2 === 0 && (i2 = Ed(o2), a2 = Ed(o2));
    var s2 = Od(e2, t2, i2, a2);
    if (s2 > 0) var c2 = r2.nodeOverlap * s2, l2 = Math.sqrt(i2 * i2 + a2 * a2), u2 = c2 * i2 / l2, d2 = c2 * a2 / l2;
    else var f2 = kd(e2, i2, a2), p2 = kd(t2, -1 * i2, -1 * a2), m2 = p2.x - f2.x, h2 = p2.y - f2.y, g2 = m2 * m2 + h2 * h2, l2 = Math.sqrt(g2), c2 = (e2.nodeRepulsion + t2.nodeRepulsion) / g2, u2 = c2 * m2 / l2, d2 = c2 * h2 / l2;
    e2.isLocked || (e2.offsetX -= u2, e2.offsetY -= d2), t2.isLocked || (t2.offsetX += u2, t2.offsetY += d2);
  }
}, Od = function(e2, t2, n2, r2) {
  if (n2 > 0) var i2 = e2.maxX - t2.minX;
  else var i2 = t2.maxX - e2.minX;
  if (r2 > 0) var a2 = e2.maxY - t2.minY;
  else var a2 = t2.maxY - e2.minY;
  return i2 >= 0 && a2 >= 0 ? Math.sqrt(i2 * i2 + a2 * a2) : 0;
}, kd = function(e2, t2, n2) {
  var r2 = e2.positionX, i2 = e2.positionY, a2 = e2.height || 1, o2 = e2.width || 1, s2 = n2 / t2, c2 = a2 / o2, l2 = {};
  return t2 === 0 && 0 < n2 || t2 === 0 && 0 > n2 ? (l2.x = r2, l2.y = i2 + a2 / 2, l2) : 0 < t2 && -1 * c2 <= s2 && s2 <= c2 ? (l2.x = r2 + o2 / 2, l2.y = i2 + o2 * n2 / 2 / t2, l2) : 0 > t2 && -1 * c2 <= s2 && s2 <= c2 ? (l2.x = r2 - o2 / 2, l2.y = i2 - o2 * n2 / 2 / t2, l2) : 0 < n2 && (s2 <= -1 * c2 || s2 >= c2) ? (l2.x = r2 + a2 * t2 / 2 / n2, l2.y = i2 + a2 / 2, l2) : 0 > n2 && (s2 <= -1 * c2 || s2 >= c2) ? (l2.x = r2 - a2 * t2 / 2 / n2, l2.y = i2 - a2 / 2, l2) : l2;
}, Ad = function(e2, t2) {
  for (var n2 = 0; n2 < e2.edgeSize; n2++) {
    var r2 = e2.layoutEdges[n2], i2 = e2.idToIndex[r2.sourceId], a2 = e2.layoutNodes[i2], o2 = e2.idToIndex[r2.targetId], s2 = e2.layoutNodes[o2], c2 = s2.positionX - a2.positionX, l2 = s2.positionY - a2.positionY;
    if (!(c2 === 0 && l2 === 0)) {
      var u2 = kd(a2, c2, l2), d2 = kd(s2, -1 * c2, -1 * l2), f2 = d2.x - u2.x, p2 = d2.y - u2.y, m2 = Math.sqrt(f2 * f2 + p2 * p2), h2 = (r2.idealLength - m2) ** 2 / r2.elasticity;
      if (m2 !== 0) var g2 = h2 * f2 / m2, _2 = h2 * p2 / m2;
      else var g2 = 0, _2 = 0;
      a2.isLocked || (a2.offsetX += g2, a2.offsetY += _2), s2.isLocked || (s2.offsetX -= g2, s2.offsetY -= _2);
    }
  }
}, jd = function(e2, t2) {
  if (t2.gravity !== 0) for (var n2 = 1, r2 = 0; r2 < e2.graphSet.length; r2++) {
    var i2 = e2.graphSet[r2], a2 = i2.length;
    if (r2 === 0) var o2 = e2.clientHeight / 2, s2 = e2.clientWidth / 2;
    else var c2 = e2.layoutNodes[e2.idToIndex[i2[0]]], l2 = e2.layoutNodes[e2.idToIndex[c2.parentId]], o2 = l2.positionX, s2 = l2.positionY;
    for (var u2 = 0; u2 < a2; u2++) {
      var d2 = e2.layoutNodes[e2.idToIndex[i2[u2]]];
      if (!d2.isLocked) {
        var f2 = o2 - d2.positionX, p2 = s2 - d2.positionY, m2 = Math.sqrt(f2 * f2 + p2 * p2);
        if (m2 > n2) {
          var h2 = t2.gravity * f2 / m2, g2 = t2.gravity * p2 / m2;
          d2.offsetX += h2, d2.offsetY += g2;
        }
      }
    }
  }
}, Md = function(e2, t2) {
  var n2 = [], r2 = 0, i2 = -1;
  for (n2.push.apply(n2, e2.graphSet[0]), i2 += e2.graphSet[0].length; r2 <= i2; ) {
    var a2 = n2[r2++], o2 = e2.idToIndex[a2], s2 = e2.layoutNodes[o2], c2 = s2.children;
    if (0 < c2.length && !s2.isLocked) {
      for (var l2 = s2.offsetX, u2 = s2.offsetY, d2 = 0; d2 < c2.length; d2++) {
        var f2 = e2.layoutNodes[e2.idToIndex[c2[d2]]];
        f2.offsetX += l2, f2.offsetY += u2, n2[++i2] = c2[d2];
      }
      s2.offsetX = 0, s2.offsetY = 0;
    }
  }
}, Nd = function(e2, t2) {
  for (var n2 = 0; n2 < e2.nodeSize; n2++) {
    var r2 = e2.layoutNodes[n2];
    0 < r2.children.length && (r2.maxX = void 0, r2.minX = void 0, r2.maxY = void 0, r2.minY = void 0);
  }
  for (var n2 = 0; n2 < e2.nodeSize; n2++) {
    var r2 = e2.layoutNodes[n2];
    if (!(0 < r2.children.length || r2.isLocked)) {
      var i2 = Pd(r2.offsetX, r2.offsetY, e2.temperature);
      r2.positionX += i2.x, r2.positionY += i2.y, r2.offsetX = 0, r2.offsetY = 0, r2.minX = r2.positionX - r2.width, r2.maxX = r2.positionX + r2.width, r2.minY = r2.positionY - r2.height, r2.maxY = r2.positionY + r2.height, Fd(r2, e2);
    }
  }
  for (var n2 = 0; n2 < e2.nodeSize; n2++) {
    var r2 = e2.layoutNodes[n2];
    0 < r2.children.length && !r2.isLocked && (r2.positionX = (r2.maxX + r2.minX) / 2, r2.positionY = (r2.maxY + r2.minY) / 2, r2.width = r2.maxX - r2.minX, r2.height = r2.maxY - r2.minY);
  }
}, Pd = function(e2, t2, n2) {
  var r2 = Math.sqrt(e2 * e2 + t2 * t2);
  if (r2 > n2) var i2 = { x: n2 * e2 / r2, y: n2 * t2 / r2 };
  else var i2 = { x: e2, y: t2 };
  return i2;
}, Fd = function(e2, t2) {
  var n2 = e2.parentId;
  if (n2 != null) {
    var r2 = t2.layoutNodes[t2.idToIndex[n2]], i2 = false;
    if ((r2.maxX == null || e2.maxX + r2.padRight > r2.maxX) && (r2.maxX = e2.maxX + r2.padRight, i2 = true), (r2.minX == null || e2.minX - r2.padLeft < r2.minX) && (r2.minX = e2.minX - r2.padLeft, i2 = true), (r2.maxY == null || e2.maxY + r2.padBottom > r2.maxY) && (r2.maxY = e2.maxY + r2.padBottom, i2 = true), (r2.minY == null || e2.minY - r2.padTop < r2.minY) && (r2.minY = e2.minY - r2.padTop, i2 = true), i2) return Fd(r2, t2);
  }
}, Id = function(e2, t2) {
  for (var n2 = e2.layoutNodes, r2 = [], i2 = 0; i2 < n2.length; i2++) {
    var a2 = n2[i2], o2 = a2.cmptId;
    (r2[o2] = r2[o2] || []).push(a2);
  }
  for (var s2 = 0, i2 = 0; i2 < r2.length; i2++) {
    var c2 = r2[i2];
    if (c2) {
      c2.x1 = 1 / 0, c2.x2 = -1 / 0, c2.y1 = 1 / 0, c2.y2 = -1 / 0;
      for (var l2 = 0; l2 < c2.length; l2++) {
        var u2 = c2[l2];
        c2.x1 = Math.min(c2.x1, u2.positionX - u2.width / 2), c2.x2 = Math.max(c2.x2, u2.positionX + u2.width / 2), c2.y1 = Math.min(c2.y1, u2.positionY - u2.height / 2), c2.y2 = Math.max(c2.y2, u2.positionY + u2.height / 2);
      }
      c2.w = c2.x2 - c2.x1, c2.h = c2.y2 - c2.y1, s2 += c2.w * c2.h;
    }
  }
  r2.sort(function(e3, t3) {
    return t3.w * t3.h - e3.w * e3.h;
  });
  for (var d2 = 0, f2 = 0, p2 = 0, m2 = 0, h2 = Math.sqrt(s2) * e2.clientWidth / e2.clientHeight, i2 = 0; i2 < r2.length; i2++) {
    var c2 = r2[i2];
    if (c2) {
      for (var l2 = 0; l2 < c2.length; l2++) {
        var u2 = c2[l2];
        u2.isLocked || (u2.positionX += d2 - c2.x1, u2.positionY += f2 - c2.y1);
      }
      d2 += c2.w + t2.componentSpacing, p2 += c2.w + t2.componentSpacing, m2 = Math.max(m2, c2.h), p2 > h2 && (f2 += m2 + t2.componentSpacing, d2 = 0, p2 = 0, m2 = 0);
    }
  }
}, Ld = { fit: true, padding: 30, boundingBox: void 0, avoidOverlap: true, avoidOverlapPadding: 10, nodeDimensionsIncludeLabels: false, spacingFactor: void 0, condense: false, rows: void 0, cols: void 0, position: function(e2) {
}, sort: void 0, animate: false, animationDuration: 500, animationEasing: void 0, animateFilter: function(e2, t2) {
  return true;
}, ready: void 0, stop: void 0, transform: function(e2, t2) {
  return t2;
} };
function Rd(e2) {
  this.options = X({}, Ld, e2);
}
Rd.prototype.run = function() {
  var e2 = this.options, t2 = e2, n2 = e2.cy, r2 = t2.eles, i2 = r2.nodes().not(`:parent`);
  t2.sort && (i2 = i2.sort(t2.sort));
  var a2 = qn(t2.boundingBox ? t2.boundingBox : { x1: 0, y1: 0, w: n2.width(), h: n2.height() });
  if (a2.h === 0 || a2.w === 0) r2.nodes().layoutPositions(this, t2, function(e3) {
    return { x: a2.x1, y: a2.y1 };
  });
  else {
    var o2 = i2.size(), s2 = Math.sqrt(o2 * a2.h / a2.w), c2 = Math.round(s2), l2 = Math.round(a2.w / a2.h * s2), u2 = function(e3) {
      if (e3 == null) return Math.min(c2, l2);
      Math.min(c2, l2) == c2 ? c2 = e3 : l2 = e3;
    }, d2 = function(e3) {
      if (e3 == null) return Math.max(c2, l2);
      Math.max(c2, l2) == c2 ? c2 = e3 : l2 = e3;
    }, f2 = t2.rows, p2 = t2.cols == null ? t2.columns : t2.cols;
    if (f2 != null && p2 != null) c2 = f2, l2 = p2;
    else if (f2 != null && p2 == null) c2 = f2, l2 = Math.ceil(o2 / c2);
    else if (f2 == null && p2 != null) l2 = p2, c2 = Math.ceil(o2 / l2);
    else if (l2 * c2 > o2) {
      var m2 = u2(), h2 = d2();
      (m2 - 1) * h2 >= o2 ? u2(m2 - 1) : (h2 - 1) * m2 >= o2 && d2(h2 - 1);
    } else for (; l2 * c2 < o2; ) {
      var g2 = u2(), _2 = d2();
      (_2 + 1) * g2 >= o2 ? d2(_2 + 1) : u2(g2 + 1);
    }
    var v2 = a2.w / l2, y2 = a2.h / c2;
    if (t2.condense && (v2 = 0, y2 = 0), t2.avoidOverlap) for (var b2 = 0; b2 < i2.length; b2++) {
      var x2 = i2[b2], S2 = x2._private.position;
      (S2.x == null || S2.y == null) && (S2.x = 0, S2.y = 0);
      var C2 = x2.layoutDimensions(t2), w2 = t2.avoidOverlapPadding, T2 = C2.w + w2, E2 = C2.h + w2;
      v2 = Math.max(v2, T2), y2 = Math.max(y2, E2);
    }
    for (var D2 = {}, O2 = function(e3, t3) {
      return !!D2[`c-` + e3 + `-` + t3];
    }, k2 = function(e3, t3) {
      D2[`c-` + e3 + `-` + t3] = true;
    }, A2 = 0, j2 = 0, M2 = function() {
      j2++, j2 >= l2 && (j2 = 0, A2++);
    }, N2 = {}, P2 = 0; P2 < i2.length; P2++) {
      var F2 = i2[P2], I2 = t2.position(F2);
      if (I2 && (I2.row !== void 0 || I2.col !== void 0)) {
        var L2 = { row: I2.row, col: I2.col };
        if (L2.col === void 0) for (L2.col = 0; O2(L2.row, L2.col); ) L2.col++;
        else if (L2.row === void 0) for (L2.row = 0; O2(L2.row, L2.col); ) L2.row++;
        N2[F2.id()] = L2, k2(L2.row, L2.col);
      }
    }
    i2.layoutPositions(this, t2, function(e3, t3) {
      var n3, r3;
      if (e3.locked() || e3.isParent()) return false;
      var i3 = N2[e3.id()];
      if (i3) n3 = i3.col * v2 + v2 / 2 + a2.x1, r3 = i3.row * y2 + y2 / 2 + a2.y1;
      else {
        for (; O2(A2, j2); ) M2();
        n3 = j2 * v2 + v2 / 2 + a2.x1, r3 = A2 * y2 + y2 / 2 + a2.y1, k2(A2, j2), M2();
      }
      return { x: n3, y: r3 };
    });
  }
  return this;
};
var zd = { ready: function() {
}, stop: function() {
} };
function Bd(e2) {
  this.options = X({}, zd, e2);
}
Bd.prototype.run = function() {
  var e2 = this.options, t2 = e2.eles, n2 = this;
  return e2.cy, n2.emit(`layoutstart`), t2.nodes().positions(function() {
    return { x: 0, y: 0 };
  }), n2.one(`layoutready`, e2.ready), n2.emit(`layoutready`), n2.one(`layoutstop`, e2.stop), n2.emit(`layoutstop`), this;
}, Bd.prototype.stop = function() {
  return this;
};
var Vd = { positions: void 0, zoom: void 0, pan: void 0, fit: true, padding: 30, spacingFactor: void 0, animate: false, animationDuration: 500, animationEasing: void 0, animateFilter: function(e2, t2) {
  return true;
}, ready: void 0, stop: void 0, transform: function(e2, t2) {
  return t2;
} };
function Hd(e2) {
  this.options = X({}, Vd, e2);
}
Hd.prototype.run = function() {
  var e2 = this.options, t2 = e2.eles.nodes(), n2 = E(e2.positions);
  function r2(t3) {
    return e2.positions == null ? On(t3.position()) : n2 ? e2.positions(t3) : e2.positions[t3._private.data.id] ?? null;
  }
  return t2.layoutPositions(this, e2, function(e3, t3) {
    var n3 = r2(e3);
    return e3.locked() || n3 == null ? false : n3;
  }), this;
};
var Ud = { fit: true, padding: 30, boundingBox: void 0, animate: false, animationDuration: 500, animationEasing: void 0, animateFilter: function(e2, t2) {
  return true;
}, ready: void 0, stop: void 0, transform: function(e2, t2) {
  return t2;
} };
function Wd(e2) {
  this.options = X({}, Ud, e2);
}
Wd.prototype.run = function() {
  var e2 = this.options, t2 = e2.cy, n2 = e2.eles, r2 = qn(e2.boundingBox ? e2.boundingBox : { x1: 0, y1: 0, w: t2.width(), h: t2.height() });
  return n2.nodes().layoutPositions(this, e2, function(e3, t3) {
    return { x: r2.x1 + Math.round(Math.random() * r2.w), y: r2.y1 + Math.round(Math.random() * r2.h) };
  }), this;
};
var Gd = [{ name: `breadthfirst`, impl: ld }, { name: `circle`, impl: dd }, { name: `concentric`, impl: pd }, { name: `cose`, impl: gd }, { name: `grid`, impl: Rd }, { name: `null`, impl: Bd }, { name: `preset`, impl: Hd }, { name: `random`, impl: Wd }];
function Kd(e2) {
  this.options = e2, this.notifications = 0;
}
var qd = function() {
}, Jd = function() {
  throw Error(`A headless instance can not render images`);
};
Kd.prototype = { recalculateRenderedStyle: qd, notify: function() {
  this.notifications++;
}, init: qd, isHeadless: function() {
  return true;
}, png: Jd, jpg: Jd };
var Yd = {};
Yd.arrowShapeWidth = 0.3, Yd.registerArrowShapes = function() {
  var e2 = this.arrowShapes = {}, t2 = this, n2 = function(e3, t3, n3, r3, i3, a3, o3) {
    var s3 = i3.x - n3 / 2 - o3, c2 = i3.x + n3 / 2 + o3, l2 = i3.y - n3 / 2 - o3, u2 = i3.y + n3 / 2 + o3;
    return s3 <= e3 && e3 <= c2 && l2 <= t3 && t3 <= u2;
  }, r2 = function(e3, t3, n3, r3, i3) {
    var a3 = e3 * Math.cos(r3) - t3 * Math.sin(r3), o3 = e3 * Math.sin(r3) + t3 * Math.cos(r3), s3 = a3 * n3, c2 = o3 * n3;
    return { x: s3 + i3.x, y: c2 + i3.y };
  }, i2 = function(e3, t3, n3, i3) {
    for (var a3 = [], o3 = 0; o3 < e3.length; o3 += 2) {
      var s3 = e3[o3], c2 = e3[o3 + 1];
      a3.push(r2(s3, c2, t3, n3, i3));
    }
    return a3;
  }, a2 = function(e3) {
    for (var t3 = [], n3 = 0; n3 < e3.length; n3++) {
      var r3 = e3[n3];
      t3.push(r3.x, r3.y);
    }
    return t3;
  }, o2 = function(e3) {
    return e3.pstyle(`width`).pfValue * e3.pstyle(`arrow-scale`).pfValue * 2;
  }, s2 = function(r3, s3) {
    T(s3) && (s3 = e2[s3]), e2[r3] = X({ name: r3, points: [-0.15, -0.3, 0.15, -0.3, 0.15, 0.3, -0.15, 0.3], collide: function(e3, t3, n3, r4, o3, s4) {
      return hr(e3, t3, a2(i2(this.points, n3 + 2 * s4, r4, o3)));
    }, roughCollide: n2, draw: function(e3, n3, r4, a3) {
      var o3 = i2(this.points, n3, r4, a3);
      t2.arrowShapeImpl(`polygon`)(e3, o3);
    }, spacing: function(e3) {
      return 0;
    }, gap: o2 }, s3);
  };
  s2(`none`, { collide: Pt, roughCollide: Pt, draw: It, spacing: Ft, gap: Ft }), s2(`triangle`, { points: [-0.15, -0.3, 0, 0, 0.15, -0.3] }), s2(`arrow`, `triangle`), s2(`triangle-backcurve`, { points: e2.triangle.points, controlPoint: [0, -0.15], roughCollide: n2, draw: function(e3, n3, a3, o3, s3) {
    var c2 = i2(this.points, n3, a3, o3), l2 = this.controlPoint, u2 = r2(l2[0], l2[1], n3, a3, o3);
    t2.arrowShapeImpl(this.name)(e3, c2, u2);
  }, gap: function(e3) {
    return o2(e3) * 0.8;
  } }), s2(`triangle-tee`, { points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0], pointsTee: [-0.15, -0.4, -0.15, -0.5, 0.15, -0.5, 0.15, -0.4], collide: function(e3, t3, n3, r3, o3, s3, c2) {
    var l2 = a2(i2(this.points, n3 + 2 * c2, r3, o3)), u2 = a2(i2(this.pointsTee, n3 + 2 * c2, r3, o3));
    return hr(e3, t3, l2) || hr(e3, t3, u2);
  }, draw: function(e3, n3, r3, a3, o3) {
    var s3 = i2(this.points, n3, r3, a3), c2 = i2(this.pointsTee, n3, r3, a3);
    t2.arrowShapeImpl(this.name)(e3, s3, c2);
  } }), s2(`circle-triangle`, { radius: 0.15, pointsTr: [0, -0.15, 0.15, -0.45, -0.15, -0.45, 0, -0.15], collide: function(e3, t3, n3, r3, o3, s3, c2) {
    var l2 = o3, u2 = (l2.x - e3) ** 2 + (l2.y - t3) ** 2 <= ((n3 + 2 * c2) * this.radius) ** 2;
    return hr(e3, t3, a2(i2(this.points, n3 + 2 * c2, r3, o3))) || u2;
  }, draw: function(e3, n3, r3, a3, o3) {
    var s3 = i2(this.pointsTr, n3, r3, a3);
    t2.arrowShapeImpl(this.name)(e3, s3, a3.x, a3.y, this.radius * n3);
  }, spacing: function(e3) {
    return t2.getArrowWidth(e3.pstyle(`width`).pfValue, e3.pstyle(`arrow-scale`).value) * this.radius;
  } }), s2(`triangle-cross`, { points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0], baseCrossLinePts: [-0.15, -0.4, -0.15, -0.4, 0.15, -0.4, 0.15, -0.4], crossLinePts: function(e3, t3) {
    var n3 = this.baseCrossLinePts.slice(), r3 = t3 / e3, i3 = 3, a3 = 5;
    return n3[i3] = n3[i3] - r3, n3[a3] = n3[a3] - r3, n3;
  }, collide: function(e3, t3, n3, r3, o3, s3, c2) {
    var l2 = a2(i2(this.points, n3 + 2 * c2, r3, o3)), u2 = a2(i2(this.crossLinePts(n3, s3), n3 + 2 * c2, r3, o3));
    return hr(e3, t3, l2) || hr(e3, t3, u2);
  }, draw: function(e3, n3, r3, a3, o3) {
    var s3 = i2(this.points, n3, r3, a3), c2 = i2(this.crossLinePts(n3, o3), n3, r3, a3);
    t2.arrowShapeImpl(this.name)(e3, s3, c2);
  } }), s2(`vee`, { points: [-0.15, -0.3, 0, 0, 0.15, -0.3, 0, -0.15], gap: function(e3) {
    return o2(e3) * 0.525;
  } }), s2(`circle`, { radius: 0.15, collide: function(e3, t3, n3, r3, i3, a3, o3) {
    var s3 = i3;
    return (s3.x - e3) ** 2 + (s3.y - t3) ** 2 <= ((n3 + 2 * o3) * this.radius) ** 2;
  }, draw: function(e3, n3, r3, i3, a3) {
    t2.arrowShapeImpl(this.name)(e3, i3.x, i3.y, this.radius * n3);
  }, spacing: function(e3) {
    return t2.getArrowWidth(e3.pstyle(`width`).pfValue, e3.pstyle(`arrow-scale`).value) * this.radius;
  } }), s2(`tee`, { points: [-0.15, 0, -0.15, -0.1, 0.15, -0.1, 0.15, 0], spacing: function(e3) {
    return 1;
  }, gap: function(e3) {
    return 1;
  } }), s2(`square`, { points: [-0.15, 0, 0.15, 0, 0.15, -0.3, -0.15, -0.3] }), s2(`diamond`, { points: [-0.15, -0.15, 0, -0.3, 0.15, -0.15, 0, 0], gap: function(e3) {
    return e3.pstyle(`width`).pfValue * e3.pstyle(`arrow-scale`).value;
  } }), s2(`chevron`, { points: [0, 0, -0.15, -0.15, -0.1, -0.2, 0, -0.1, 0.1, -0.2, 0.15, -0.15], gap: function(e3) {
    return 0.95 * e3.pstyle(`width`).pfValue * e3.pstyle(`arrow-scale`).value;
  } });
};
var Xd = {};
Xd.projectIntoViewport = function(e2, t2) {
  var n2 = this.cy, r2 = this.findContainerClientCoords(), i2 = r2[0], a2 = r2[1], o2 = r2[4], s2 = n2.pan(), c2 = n2.zoom();
  return [((e2 - i2) / o2 - s2.x) / c2, ((t2 - a2) / o2 - s2.y) / c2];
}, Xd.findContainerClientCoords = function() {
  if (this.containerBB) return this.containerBB;
  var e2 = this.container, t2 = e2.getBoundingClientRect(), n2 = this.cy.window().getComputedStyle(e2), r2 = function(e3) {
    return parseFloat(n2.getPropertyValue(e3));
  }, i2 = { left: r2(`padding-left`), right: r2(`padding-right`), top: r2(`padding-top`), bottom: r2(`padding-bottom`) }, a2 = { left: r2(`border-left-width`), right: r2(`border-right-width`), top: r2(`border-top-width`), bottom: r2(`border-bottom-width`) }, o2 = e2.clientWidth, s2 = e2.clientHeight, c2 = i2.left + i2.right, l2 = i2.top + i2.bottom, u2 = a2.left + a2.right, d2 = t2.width / (o2 + u2), f2 = o2 - c2, p2 = s2 - l2;
  return this.containerBB = [t2.left + i2.left + a2.left, t2.top + i2.top + a2.top, f2, p2, d2];
}, Xd.invalidateContainerClientCoordsCache = function() {
  this.containerBB = null;
}, Xd.findNearestElement = function(e2, t2, n2, r2) {
  return this.findNearestElements(e2, t2, n2, r2)[0];
}, Xd.findNearestElements = function(e2, t2, n2, r2) {
  var i2 = this, a2 = this, o2 = a2.getCachedZSortedEles(), s2 = [], c2 = a2.cy.zoom(), l2 = a2.cy.hasCompoundNodes(), u2 = (r2 ? 24 : 8) / c2, d2 = (r2 ? 8 : 2) / c2, f2 = (r2 ? 8 : 2) / c2, p2 = 1 / 0, m2, h2;
  n2 && (o2 = o2.interactive);
  function g2(e3, t3) {
    if (e3.isNode()) {
      if (h2) return;
      h2 = e3, s2.push(e3);
    }
    if (e3.isEdge() && (t3 == null || t3 < p2)) if (m2) {
      if (m2.pstyle(`z-compound-depth`).value === e3.pstyle(`z-compound-depth`).value && m2.pstyle(`z-compound-depth`).value === e3.pstyle(`z-compound-depth`).value) {
        for (var n3 = 0; n3 < s2.length; n3++) if (s2[n3].isEdge()) {
          s2[n3] = e3, m2 = e3, p2 = t3 ?? p2;
          break;
        }
      }
    } else s2.push(e3), m2 = e3, p2 = t3 ?? p2;
  }
  function _2(n3) {
    var r3 = n3.outerWidth() + 2 * d2, o3 = n3.outerHeight() + 2 * d2, s3 = r3 / 2, c3 = o3 / 2, l3 = n3.position(), u3 = n3.pstyle(`corner-radius`).value === `auto` ? `auto` : n3.pstyle(`corner-radius`).pfValue, f3 = n3._private.rscratch;
    if (l3.x - s3 <= e2 && e2 <= l3.x + s3 && l3.y - c3 <= t2 && t2 <= l3.y + c3 && a2.nodeShapes[i2.getNodeShape(n3)].checkPoint(e2, t2, 0, r3, o3, l3.x, l3.y, u3, f3)) return g2(n3, 0), true;
  }
  function v2(n3) {
    var r3 = n3._private, o3 = r3.rscratch, c3 = n3.pstyle(`width`).pfValue, d3 = n3.pstyle(`arrow-scale`).value, f3 = c3 / 2 + u2, p3 = f3 * f3, m3 = f3 * 2, h3 = r3.source, v3 = r3.target, y3;
    if (o3.edgeType === `segments` || o3.edgeType === `straight` || o3.edgeType === `haystack`) {
      for (var b3 = o3.allpts, x3 = 0; x3 + 3 < b3.length; x3 += 2) if (lr(e2, t2, b3[x3], b3[x3 + 1], b3[x3 + 2], b3[x3 + 3], m3) && p3 > (y3 = mr(e2, t2, b3[x3], b3[x3 + 1], b3[x3 + 2], b3[x3 + 3]))) return g2(n3, y3), true;
    } else if (o3.edgeType === `bezier` || o3.edgeType === `multibezier` || o3.edgeType === `self` || o3.edgeType === `compound`) {
      for (var b3 = o3.allpts, x3 = 0; x3 + 5 < o3.allpts.length; x3 += 4) if (ur(e2, t2, b3[x3], b3[x3 + 1], b3[x3 + 2], b3[x3 + 3], b3[x3 + 4], b3[x3 + 5], m3) && p3 > (y3 = pr(e2, t2, b3[x3], b3[x3 + 1], b3[x3 + 2], b3[x3 + 3], b3[x3 + 4], b3[x3 + 5]))) return g2(n3, y3), true;
    }
    for (var h3 = h3 || r3.source, v3 = v3 || r3.target, S3 = i2.getArrowWidth(c3, d3), C2 = [{ name: `source`, x: o3.arrowStartX, y: o3.arrowStartY, angle: o3.srcArrowAngle }, { name: `target`, x: o3.arrowEndX, y: o3.arrowEndY, angle: o3.tgtArrowAngle }, { name: `mid-source`, x: o3.midX, y: o3.midY, angle: o3.midsrcArrowAngle }, { name: `mid-target`, x: o3.midX, y: o3.midY, angle: o3.midtgtArrowAngle }], x3 = 0; x3 < C2.length; x3++) {
      var w2 = C2[x3], T2 = a2.arrowShapes[n3.pstyle(w2.name + `-arrow-shape`).value], E2 = n3.pstyle(`width`).pfValue;
      if (T2.roughCollide(e2, t2, S3, w2.angle, { x: w2.x, y: w2.y }, E2, u2) && T2.collide(e2, t2, S3, w2.angle, { x: w2.x, y: w2.y }, E2, u2)) return g2(n3), true;
    }
    l2 && s2.length > 0 && (_2(h3), _2(v3));
  }
  function y2(e3, t3, n3) {
    return Xt(e3, t3, n3);
  }
  function b2(n3, r3) {
    var i3 = n3._private, a3 = f2, o3 = r3 ? r3 + `-` : ``;
    n3.boundingBox();
    var s3 = i3.labelBounds[r3 || `main`], c3 = n3.pstyle(o3 + `label`).value;
    if (!(n3.pstyle(`text-events`).strValue !== `yes` || !c3)) {
      var l3 = y2(i3.rscratch, `labelX`, r3), u3 = y2(i3.rscratch, `labelY`, r3), d3 = y2(i3.rscratch, `labelAngle`, r3), p3 = n3.pstyle(o3 + `text-margin-x`).pfValue, m3 = n3.pstyle(o3 + `text-margin-y`).pfValue, h3 = s3.x1 - a3 - p3, _3 = s3.x2 + a3 - p3, v3 = s3.y1 - a3 - m3, b3 = s3.y2 + a3 - m3;
      if (d3) {
        var x3 = Math.cos(d3), S3 = Math.sin(d3), C2 = function(e3, t3) {
          return e3 -= l3, t3 -= u3, { x: e3 * x3 - t3 * S3 + l3, y: e3 * S3 + t3 * x3 + u3 };
        }, w2 = C2(h3, v3), T2 = C2(h3, b3), E2 = C2(_3, v3), D2 = C2(_3, b3);
        if (hr(e2, t2, [w2.x + p3, w2.y + m3, E2.x + p3, E2.y + m3, D2.x + p3, D2.y + m3, T2.x + p3, T2.y + m3])) return g2(n3), true;
      } else if (nr(s3, e2, t2)) return g2(n3), true;
    }
  }
  for (var x2 = o2.length - 1; x2 >= 0; x2--) {
    var S2 = o2[x2];
    S2.isNode() ? _2(S2) || b2(S2) : v2(S2) || b2(S2) || b2(S2, `source`) || b2(S2, `target`);
  }
  return s2;
}, Xd.getAllInBox = function(e2, t2, n2, r2) {
  var i2 = this.getCachedZSortedEles().interactive, a2 = 2 / this.cy.zoom(), o2 = [], s2 = Math.min(e2, n2), c2 = Math.max(e2, n2), l2 = Math.min(t2, r2), u2 = Math.max(t2, r2);
  e2 = s2, n2 = c2, t2 = l2, r2 = u2;
  var d2 = qn({ x1: e2, y1: t2, x2: n2, y2: r2 }), p2 = [{ x: d2.x1, y: d2.y1 }, { x: d2.x2, y: d2.y1 }, { x: d2.x2, y: d2.y2 }, { x: d2.x1, y: d2.y2 }], m2 = [[p2[0], p2[1]], [p2[1], p2[2]], [p2[2], p2[3]], [p2[3], p2[0]]];
  function h2(e3, t3, n3) {
    return Xt(e3, t3, n3);
  }
  function g2(e3, t3) {
    var n3 = e3._private, r3 = a2, i3 = ``;
    e3.boundingBox();
    var o3 = n3.labelBounds.main;
    if (!o3) return null;
    var s3 = h2(n3.rscratch, `labelX`, t3), c3 = h2(n3.rscratch, `labelY`, t3), l3 = h2(n3.rscratch, `labelAngle`, t3), u3 = e3.pstyle(i3 + `text-margin-x`).pfValue, d3 = e3.pstyle(i3 + `text-margin-y`).pfValue, f2 = o3.x1 - r3 - u3, p3 = o3.x2 + r3 - u3, m3 = o3.y1 - r3 - d3, g3 = o3.y2 + r3 - d3;
    if (l3) {
      var _3 = Math.cos(l3), v3 = Math.sin(l3), y3 = function(e4, t4) {
        return e4 -= s3, t4 -= c3, { x: e4 * _3 - t4 * v3 + s3, y: e4 * v3 + t4 * _3 + c3 };
      };
      return [y3(f2, m3), y3(p3, m3), y3(p3, g3), y3(f2, g3)];
    } else return [{ x: f2, y: m3 }, { x: p3, y: m3 }, { x: p3, y: g3 }, { x: f2, y: g3 }];
  }
  function _2(e3, t3, n3, r3) {
    function i3(e4, t4, n4) {
      return (n4.y - e4.y) * (t4.x - e4.x) > (t4.y - e4.y) * (n4.x - e4.x);
    }
    return i3(e3, n3, r3) !== i3(t3, n3, r3) && i3(e3, t3, n3) !== i3(e3, t3, r3);
  }
  for (var v2 = 0; v2 < i2.length; v2++) {
    var y2 = i2[v2];
    if (y2.isNode()) {
      var b2 = y2, x2 = b2.pstyle(`text-events`).strValue === `yes`, S2 = b2.pstyle(`box-selection`).strValue, C2 = b2.pstyle(`box-select-labels`).strValue === `yes`;
      if (S2 === `none`) continue;
      var w2 = (S2 === `overlap` || C2) && x2, T2 = b2.boundingBox({ includeNodes: true, includeEdges: false, includeLabels: w2 });
      if (S2 === `contain`) {
        var E2 = false;
        if (C2 && x2) {
          var D2 = g2(b2);
          D2 && Lr(D2, p2) && (o2.push(b2), E2 = true);
        }
        !E2 && ir(d2, T2) && o2.push(b2);
      } else if (S2 === `overlap` && tr(d2, T2)) {
        var O2 = b2.boundingBox({ includeNodes: true, includeEdges: true, includeLabels: false, includeMainLabels: false, includeSourceLabels: false, includeTargetLabels: false });
        if (Lr([{ x: O2.x1, y: O2.y1 }, { x: O2.x2, y: O2.y1 }, { x: O2.x2, y: O2.y2 }, { x: O2.x1, y: O2.y2 }], p2)) o2.push(b2);
        else {
          var k2 = g2(b2);
          k2 && Lr(k2, p2) && o2.push(b2);
        }
      }
    } else {
      var A2 = y2, j2 = A2._private, M2 = j2.rscratch, N2 = A2.pstyle(`box-selection`).strValue;
      if (N2 === `none`) continue;
      if (N2 === `contain`) {
        if (M2.startX != null && M2.startY != null && !nr(d2, M2.startX, M2.startY) || M2.endX != null && M2.endY != null && !nr(d2, M2.endX, M2.endY)) continue;
        if (M2.edgeType === `bezier` || M2.edgeType === `multibezier` || M2.edgeType === `self` || M2.edgeType === `compound` || M2.edgeType === `segments` || M2.edgeType === `haystack`) {
          for (var P2 = j2.rstyle.bezierPts || j2.rstyle.linePts || j2.rstyle.haystackPts, F2 = true, I2 = 0; I2 < P2.length; I2++) if (!rr(d2, P2[I2])) {
            F2 = false;
            break;
          }
          F2 && o2.push(A2);
        } else M2.edgeType === `straight` && o2.push(A2);
      } else if (N2 === `overlap`) {
        var L2 = false;
        if (M2.startX != null && M2.startY != null && M2.endX != null && M2.endY != null && (nr(d2, M2.startX, M2.startY) || nr(d2, M2.endX, M2.endY))) o2.push(A2), L2 = true;
        else if (!L2 && M2.edgeType === `haystack`) {
          for (var R2 = j2.rstyle.haystackPts, z2 = 0; z2 < R2.length; z2++) if (rr(d2, R2[z2])) {
            o2.push(A2), L2 = true;
            break;
          }
        }
        if (!L2) {
          var B2 = j2.rstyle.bezierPts || j2.rstyle.linePts || j2.rstyle.haystackPts;
          if ((!B2 || B2.length < 2) && M2.edgeType === `straight` && M2.startX != null && M2.startY != null && M2.endX != null && M2.endY != null && (B2 = [{ x: M2.startX, y: M2.startY }, { x: M2.endX, y: M2.endY }]), !B2 || B2.length < 2) continue;
          for (var V2 = 0; V2 < B2.length - 1; V2++) {
            for (var H2 = B2[V2], U2 = B2[V2 + 1], W2 = 0; W2 < m2.length; W2++) {
              var G2 = f(m2[W2], 2), K2 = G2[0], q2 = G2[1];
              if (_2(H2, U2, K2, q2)) {
                o2.push(A2), L2 = true;
                break;
              }
            }
            if (L2) break;
          }
        }
      }
    }
  }
  return o2;
};
var Zd = {};
Zd.calculateArrowAngles = function(e2) {
  var t2 = e2._private.rscratch, n2 = t2.edgeType === `haystack`, r2 = t2.edgeType === `bezier`, i2 = t2.edgeType === `multibezier`, a2 = t2.edgeType === `segments`, o2 = t2.edgeType === `compound`, s2 = t2.edgeType === `self`, c2, l2, u2, d2, f2, p2, m2, h2;
  if (n2 ? (u2 = t2.haystackPts[0], d2 = t2.haystackPts[1], f2 = t2.haystackPts[2], p2 = t2.haystackPts[3]) : (u2 = t2.arrowStartX, d2 = t2.arrowStartY, f2 = t2.arrowEndX, p2 = t2.arrowEndY), m2 = t2.midX, h2 = t2.midY, a2) c2 = u2 - t2.segpts[0], l2 = d2 - t2.segpts[1];
  else if (i2 || o2 || s2 || r2) {
    var g2 = t2.allpts, _2 = Un(g2[0], g2[2], g2[4], 0.1), v2 = Un(g2[1], g2[3], g2[5], 0.1);
    c2 = u2 - _2, l2 = d2 - v2;
  } else c2 = u2 - m2, l2 = d2 - h2;
  t2.srcArrowAngle = Ln(c2, l2);
  var m2 = t2.midX, h2 = t2.midY;
  if (n2 && (m2 = (u2 + f2) / 2, h2 = (d2 + p2) / 2), c2 = f2 - u2, l2 = p2 - d2, a2) {
    var g2 = t2.allpts;
    if (g2.length / 2 % 2 == 0) {
      var y2 = g2.length / 2, b2 = y2 - 2;
      c2 = g2[y2] - g2[b2], l2 = g2[y2 + 1] - g2[b2 + 1];
    } else if (t2.isRound) c2 = t2.midVector[1], l2 = -t2.midVector[0];
    else {
      var y2 = g2.length / 2 - 1, b2 = y2 - 2;
      c2 = g2[y2] - g2[b2], l2 = g2[y2 + 1] - g2[b2 + 1];
    }
  } else if (i2 || o2 || s2) {
    var g2 = t2.allpts, x2 = t2.ctrlpts, S2, C2, w2, T2;
    if (x2.length / 2 % 2 == 0) {
      var E2 = g2.length / 2 - 1, D2 = E2 + 2, O2 = D2 + 2;
      S2 = Un(g2[E2], g2[D2], g2[O2], 0), C2 = Un(g2[E2 + 1], g2[D2 + 1], g2[O2 + 1], 0), w2 = Un(g2[E2], g2[D2], g2[O2], 1e-4), T2 = Un(g2[E2 + 1], g2[D2 + 1], g2[O2 + 1], 1e-4);
    } else {
      var D2 = g2.length / 2 - 1, E2 = D2 - 2, O2 = D2 + 2;
      S2 = Un(g2[E2], g2[D2], g2[O2], 0.4999), C2 = Un(g2[E2 + 1], g2[D2 + 1], g2[O2 + 1], 0.4999), w2 = Un(g2[E2], g2[D2], g2[O2], 0.5), T2 = Un(g2[E2 + 1], g2[D2 + 1], g2[O2 + 1], 0.5);
    }
    c2 = w2 - S2, l2 = T2 - C2;
  }
  if (t2.midtgtArrowAngle = Ln(c2, l2), t2.midDispX = c2, t2.midDispY = l2, c2 *= -1, l2 *= -1, a2) {
    var g2 = t2.allpts;
    if (g2.length / 2 % 2 != 0 && !t2.isRound) {
      var y2 = g2.length / 2 - 1, k2 = y2 + 2;
      c2 = -(g2[k2] - g2[y2]), l2 = -(g2[k2 + 1] - g2[y2 + 1]);
    }
  }
  if (t2.midsrcArrowAngle = Ln(c2, l2), a2) c2 = f2 - t2.segpts[t2.segpts.length - 2], l2 = p2 - t2.segpts[t2.segpts.length - 1];
  else if (i2 || o2 || s2 || r2) {
    var g2 = t2.allpts, A2 = g2.length, _2 = Un(g2[A2 - 6], g2[A2 - 4], g2[A2 - 2], 0.9), v2 = Un(g2[A2 - 5], g2[A2 - 3], g2[A2 - 1], 0.9);
    c2 = f2 - _2, l2 = p2 - v2;
  } else c2 = f2 - m2, l2 = p2 - h2;
  t2.tgtArrowAngle = Ln(c2, l2);
}, Zd.getArrowWidth = Zd.getArrowHeight = function(e2, t2) {
  var n2 = this.arrowWidthCache = this.arrowWidthCache || {}, r2 = n2[e2 + `, ` + t2];
  return r2 || (r2 = Math.max((e2 * 13.37) ** 0.9, 29) * t2, n2[e2 + `, ` + t2] = r2, r2);
};
var Qd, $d, ef = {}, tf = {}, nf, rf, af, of, sf, cf, lf, uf, df, ff, pf, mf, hf, gf, _f, vf = function(e2, t2, n2) {
  n2.x = t2.x - e2.x, n2.y = t2.y - e2.y, n2.len = Math.sqrt(n2.x * n2.x + n2.y * n2.y), n2.nx = n2.x / n2.len, n2.ny = n2.y / n2.len, n2.ang = Math.atan2(n2.ny, n2.nx);
}, yf = function(e2, t2) {
  t2.x = e2.x * -1, t2.y = e2.y * -1, t2.nx = e2.nx * -1, t2.ny = e2.ny * -1, t2.ang = e2.ang > 0 ? -(Math.PI - e2.ang) : Math.PI + e2.ang;
}, bf = function(e2, t2, n2, r2, i2) {
  if (e2 === _f ? yf(tf, ef) : vf(t2, e2, ef), vf(t2, n2, tf), nf = ef.nx * tf.ny - ef.ny * tf.nx, rf = ef.nx * tf.nx - ef.ny * -tf.ny, sf = Math.asin(Math.max(-1, Math.min(1, nf))), Math.abs(sf) < 1e-6) {
    Qd = t2.x, $d = t2.y, lf = df = 0;
    return;
  }
  af = 1, of = false, rf < 0 ? sf < 0 ? sf = Math.PI + sf : (sf = Math.PI - sf, af = -1, of = true) : sf > 0 && (af = -1, of = true), df = t2.radius === void 0 ? r2 : t2.radius, cf = sf / 2, ff = Math.min(ef.len / 2, tf.len / 2), i2 ? (uf = Math.abs(Math.cos(cf) * df / Math.sin(cf)), uf > ff ? (uf = ff, lf = Math.abs(uf * Math.sin(cf) / Math.cos(cf))) : lf = df) : (uf = Math.min(ff, df), lf = Math.abs(uf * Math.sin(cf) / Math.cos(cf))), hf = t2.x + tf.nx * uf, gf = t2.y + tf.ny * uf, Qd = hf - tf.ny * lf * af, $d = gf + tf.nx * lf * af, pf = t2.x + ef.nx * uf, mf = t2.y + ef.ny * uf, _f = t2;
};
function xf(e2, t2) {
  t2.radius === 0 ? e2.lineTo(t2.cx, t2.cy) : e2.arc(t2.cx, t2.cy, t2.radius, t2.startAngle, t2.endAngle, t2.counterClockwise);
}
function Sf(e2, t2, n2, r2) {
  var i2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
  return r2 === 0 || t2.radius === 0 ? { cx: t2.x, cy: t2.y, radius: 0, startX: t2.x, startY: t2.y, stopX: t2.x, stopY: t2.y, startAngle: void 0, endAngle: void 0, counterClockwise: void 0 } : (bf(e2, t2, n2, r2, i2), { cx: Qd, cy: $d, radius: lf, startX: pf, startY: mf, stopX: hf, stopY: gf, startAngle: ef.ang + Math.PI / 2 * af, endAngle: tf.ang - Math.PI / 2 * af, counterClockwise: of });
}
var Cf = 0.01, wf = Math.sqrt(2 * Cf), Tf = {};
Tf.findMidptPtsEtc = function(e2, t2) {
  var n2 = t2.posPts, r2 = t2.intersectionPts, i2 = t2.vectorNormInverse, a2, o2 = e2.pstyle(`source-endpoint`), s2 = e2.pstyle(`target-endpoint`), c2 = o2.units != null && s2.units != null, l2 = function(e3, t3, n3, r3) {
    var i3 = r3 - t3, a3 = n3 - e3, o3 = Math.sqrt(a3 * a3 + i3 * i3);
    return { x: -i3 / o3, y: a3 / o3 };
  };
  switch (e2.pstyle(`edge-distances`).value) {
    case `node-position`:
      a2 = n2;
      break;
    case `intersection`:
      a2 = r2;
      break;
    case `endpoints`:
      if (c2) {
        var u2 = f(this.manualEndptToPx(e2.source()[0], o2), 2), d2 = u2[0], p2 = u2[1], m2 = f(this.manualEndptToPx(e2.target()[0], s2), 2), h2 = m2[0], g2 = m2[1], _2 = { x1: d2, y1: p2, x2: h2, y2: g2 };
        i2 = l2(d2, p2, h2, g2), a2 = _2;
      } else zt(`Edge ${e2.id()} has edge-distances:endpoints specified without manual endpoints specified via source-endpoint and target-endpoint.  Falling back on edge-distances:intersection (default).`), a2 = r2;
      break;
  }
  return { midptPts: a2, vectorNormInverse: i2 };
}, Tf.findHaystackPoints = function(e2) {
  for (var t2 = 0; t2 < e2.length; t2++) {
    var n2 = e2[t2], r2 = n2._private, i2 = r2.rscratch;
    if (!i2.haystack) {
      var a2 = Math.random() * 2 * Math.PI;
      i2.source = { x: Math.cos(a2), y: Math.sin(a2) }, a2 = Math.random() * 2 * Math.PI, i2.target = { x: Math.cos(a2), y: Math.sin(a2) };
    }
    var o2 = r2.source, s2 = r2.target, c2 = o2.position(), l2 = s2.position(), u2 = o2.width(), d2 = s2.width(), f2 = o2.height(), p2 = s2.height(), m2 = n2.pstyle(`haystack-radius`).value / 2;
    i2.haystackPts = i2.allpts = [i2.source.x * u2 * m2 + c2.x, i2.source.y * f2 * m2 + c2.y, i2.target.x * d2 * m2 + l2.x, i2.target.y * p2 * m2 + l2.y], i2.midX = (i2.allpts[0] + i2.allpts[2]) / 2, i2.midY = (i2.allpts[1] + i2.allpts[3]) / 2, i2.edgeType = `haystack`, i2.haystack = true, this.storeEdgeProjections(n2), this.calculateArrowAngles(n2), this.recalculateEdgeLabelProjections(n2), this.calculateLabelAngles(n2);
  }
}, Tf.findSegmentsPoints = function(e2, t2) {
  var n2 = e2._private.rscratch, r2 = e2.pstyle(`segment-weights`), i2 = e2.pstyle(`segment-distances`), a2 = e2.pstyle(`segment-radii`), o2 = e2.pstyle(`radius-type`), s2 = Math.min(r2.pfValue.length, i2.pfValue.length), c2 = a2.pfValue[a2.pfValue.length - 1], l2 = o2.pfValue[o2.pfValue.length - 1];
  n2.edgeType = `segments`, n2.segpts = [], n2.radii = [], n2.isArcRadius = [];
  for (var u2 = 0; u2 < s2; u2++) {
    var d2 = r2.pfValue[u2], f2 = i2.pfValue[u2], p2 = 1 - d2, m2 = d2, h2 = this.findMidptPtsEtc(e2, t2), g2 = h2.midptPts, _2 = h2.vectorNormInverse, v2 = { x: g2.x1 * p2 + g2.x2 * m2, y: g2.y1 * p2 + g2.y2 * m2 };
    n2.segpts.push(v2.x + _2.x * f2, v2.y + _2.y * f2), n2.radii.push(a2.pfValue[u2] === void 0 ? c2 : a2.pfValue[u2]), n2.isArcRadius.push((o2.pfValue[u2] === void 0 ? l2 : o2.pfValue[u2]) === `arc-radius`);
  }
}, Tf.findLoopPoints = function(e2, t2, n2, r2) {
  var i2 = e2._private.rscratch, a2 = t2.dirCounts, o2 = t2.srcPos, s2 = e2.pstyle(`control-point-distances`), c2 = s2 ? s2.pfValue[0] : void 0, l2 = e2.pstyle(`loop-direction`).pfValue, u2 = e2.pstyle(`loop-sweep`).pfValue, d2 = e2.pstyle(`control-point-step-size`).pfValue;
  i2.edgeType = `self`;
  var f2 = n2, p2 = d2;
  r2 && (f2 = 0, p2 = c2);
  var m2 = l2 - Math.PI / 2, h2 = m2 - u2 / 2, g2 = m2 + u2 / 2, _2 = String(l2 + `_` + u2);
  f2 = a2[_2] === void 0 ? a2[_2] = 0 : ++a2[_2], i2.ctrlpts = [o2.x + Math.cos(h2) * 1.4 * p2 * (f2 / 3 + 1), o2.y + Math.sin(h2) * 1.4 * p2 * (f2 / 3 + 1), o2.x + Math.cos(g2) * 1.4 * p2 * (f2 / 3 + 1), o2.y + Math.sin(g2) * 1.4 * p2 * (f2 / 3 + 1)];
}, Tf.findCompoundLoopPoints = function(e2, t2, n2, r2) {
  var i2 = e2._private.rscratch;
  i2.edgeType = `compound`;
  var a2 = t2.srcPos, o2 = t2.tgtPos, s2 = t2.srcW, c2 = t2.srcH, l2 = t2.tgtW, u2 = t2.tgtH, d2 = e2.pstyle(`control-point-step-size`).pfValue, f2 = e2.pstyle(`control-point-distances`), p2 = f2 ? f2.pfValue[0] : void 0, m2 = n2, h2 = d2;
  r2 && (m2 = 0, h2 = p2);
  var g2 = 50, _2 = { x: a2.x - s2 / 2, y: a2.y - c2 / 2 }, v2 = { x: o2.x - l2 / 2, y: o2.y - u2 / 2 }, y2 = { x: Math.min(_2.x, v2.x), y: Math.min(_2.y, v2.y) }, b2 = 0.5, x2 = Math.max(b2, Math.log(s2 * Cf)), S2 = Math.max(b2, Math.log(l2 * Cf));
  i2.ctrlpts = [y2.x, y2.y - (1 + g2 ** 1.12 / 100) * h2 * (m2 / 3 + 1) * x2, y2.x - (1 + g2 ** 1.12 / 100) * h2 * (m2 / 3 + 1) * S2, y2.y];
}, Tf.findStraightEdgePoints = function(e2) {
  e2._private.rscratch.edgeType = `straight`;
}, Tf.findBezierPoints = function(e2, t2, n2, r2, i2) {
  var a2 = e2._private.rscratch, o2 = e2.pstyle(`control-point-step-size`).pfValue, s2 = e2.pstyle(`control-point-distances`), c2 = e2.pstyle(`control-point-weights`), l2 = s2 && c2 ? Math.min(s2.value.length, c2.value.length) : 1, u2 = s2 ? s2.pfValue[0] : void 0, d2 = c2.value[0], f2 = r2;
  a2.edgeType = f2 ? `multibezier` : `bezier`, a2.ctrlpts = [];
  for (var p2 = 0; p2 < l2; p2++) {
    var m2 = (0.5 - t2.eles.length / 2 + n2) * o2 * (i2 ? -1 : 1), h2 = void 0, g2 = zn(m2);
    f2 && (u2 = s2 ? s2.pfValue[p2] : o2, d2 = c2.value[p2]), h2 = r2 ? u2 : u2 === void 0 ? void 0 : g2 * u2;
    var _2 = h2 === void 0 ? m2 : h2, v2 = 1 - d2, y2 = d2, b2 = this.findMidptPtsEtc(e2, t2), x2 = b2.midptPts, S2 = b2.vectorNormInverse, C2 = { x: x2.x1 * v2 + x2.x2 * y2, y: x2.y1 * v2 + x2.y2 * y2 };
    a2.ctrlpts.push(C2.x + S2.x * _2, C2.y + S2.y * _2);
  }
}, Tf.findTaxiPoints = function(e2, t2) {
  var n2 = e2._private.rscratch;
  n2.edgeType = `segments`;
  var r2 = `vertical`, i2 = `horizontal`, a2 = `leftward`, o2 = `rightward`, s2 = `downward`, c2 = `upward`, l2 = `auto`, u2 = t2.posPts, d2 = t2.srcW, f2 = t2.srcH, p2 = t2.tgtW, m2 = t2.tgtH, h2 = e2.pstyle(`edge-distances`).value !== `node-position`, g2 = e2.pstyle(`taxi-direction`).value, _2 = g2, v2 = e2.pstyle(`taxi-turn`), y2 = v2.units === `%`, b2 = v2.pfValue, x2 = b2 < 0, S2 = e2.pstyle(`taxi-turn-min-distance`).pfValue, C2 = h2 ? (d2 + p2) / 2 : 0, w2 = h2 ? (f2 + m2) / 2 : 0, T2 = u2.x2 - u2.x1, E2 = u2.y2 - u2.y1, D2 = function(e3, t3) {
    return e3 > 0 ? Math.max(e3 - t3, 0) : Math.min(e3 + t3, 0);
  }, O2 = D2(T2, C2), k2 = D2(E2, w2), A2 = false;
  _2 === l2 ? g2 = Math.abs(O2) > Math.abs(k2) ? i2 : r2 : _2 === c2 || _2 === s2 ? (g2 = r2, A2 = true) : (_2 === a2 || _2 === o2) && (g2 = i2, A2 = true);
  var j2 = g2 === r2, M2 = j2 ? k2 : O2, N2 = j2 ? E2 : T2, P2 = zn(N2), F2 = false;
  !(A2 && (y2 || x2)) && (_2 === s2 && N2 < 0 || _2 === c2 && N2 > 0 || _2 === a2 && N2 > 0 || _2 === o2 && N2 < 0) && (P2 *= -1, M2 = P2 * Math.abs(M2), F2 = true);
  var I2 = y2 ? (b2 < 0 ? 1 + b2 : b2) * M2 : (b2 < 0 ? M2 : 0) + b2 * P2, L2 = function(e3) {
    return Math.abs(e3) < S2 || Math.abs(e3) >= Math.abs(M2);
  }, R2 = L2(I2), z2 = L2(Math.abs(M2) - Math.abs(I2));
  if ((R2 || z2) && !F2) if (j2) {
    var B2 = Math.abs(N2) <= f2 / 2, V2 = Math.abs(T2) <= p2 / 2;
    if (B2) {
      var H2 = (u2.x1 + u2.x2) / 2;
      n2.segpts = [H2, u2.y1, H2, u2.y2];
    } else if (V2) {
      var U2 = (u2.y1 + u2.y2) / 2;
      n2.segpts = [u2.x1, U2, u2.x2, U2];
    } else n2.segpts = [u2.x1, u2.y2];
  } else {
    var W2 = Math.abs(N2) <= d2 / 2, G2 = Math.abs(E2) <= m2 / 2;
    if (W2) {
      var K2 = (u2.y1 + u2.y2) / 2;
      n2.segpts = [u2.x1, K2, u2.x2, K2];
    } else if (G2) {
      var q2 = (u2.x1 + u2.x2) / 2;
      n2.segpts = [q2, u2.y1, q2, u2.y2];
    } else n2.segpts = [u2.x2, u2.y1];
  }
  else if (j2) {
    var J2 = u2.y1 + I2 + (h2 ? f2 / 2 * P2 : 0);
    n2.segpts = [u2.x1, J2, u2.x2, J2];
  } else {
    var ee2 = u2.x1 + I2 + (h2 ? d2 / 2 * P2 : 0);
    n2.segpts = [ee2, u2.y1, ee2, u2.y2];
  }
  if (n2.isRound) {
    var Y2 = e2.pstyle(`taxi-radius`).value, te2 = e2.pstyle(`radius-type`).value[0] === `arc-radius`;
    n2.radii = Array(n2.segpts.length / 2).fill(Y2), n2.isArcRadius = Array(n2.segpts.length / 2).fill(te2);
  }
}, Tf.tryToCorrectInvalidPoints = function(e2, t2) {
  var n2 = e2._private.rscratch;
  if (n2.edgeType === `bezier`) {
    var r2 = t2.srcPos, i2 = t2.tgtPos, a2 = t2.srcW, o2 = t2.srcH, s2 = t2.tgtW, c2 = t2.tgtH, l2 = t2.srcShape, u2 = t2.tgtShape, d2 = t2.srcCornerRadius, f2 = t2.tgtCornerRadius, p2 = t2.srcRs, m2 = t2.tgtRs, h2 = !A(n2.startX) || !A(n2.startY), g2 = !A(n2.arrowStartX) || !A(n2.arrowStartY), _2 = !A(n2.endX) || !A(n2.endY), v2 = !A(n2.arrowEndX) || !A(n2.arrowEndY), y2 = 3 * (this.getArrowWidth(e2.pstyle(`width`).pfValue, e2.pstyle(`arrow-scale`).value) * this.arrowShapeWidth), b2 = Bn({ x: n2.ctrlpts[0], y: n2.ctrlpts[1] }, { x: n2.startX, y: n2.startY }), x2 = b2 < y2, S2 = Bn({ x: n2.ctrlpts[0], y: n2.ctrlpts[1] }, { x: n2.endX, y: n2.endY }), C2 = S2 < y2, w2 = false;
    if (h2 || g2 || x2) {
      w2 = true;
      var T2 = { x: n2.ctrlpts[0] - r2.x, y: n2.ctrlpts[1] - r2.y }, E2 = Math.sqrt(T2.x * T2.x + T2.y * T2.y), D2 = { x: T2.x / E2, y: T2.y / E2 }, O2 = Math.max(a2, o2), k2 = { x: n2.ctrlpts[0] + D2.x * 2 * O2, y: n2.ctrlpts[1] + D2.y * 2 * O2 }, j2 = l2.intersectLine(r2.x, r2.y, a2, o2, k2.x, k2.y, 0, d2, p2);
      x2 ? (n2.ctrlpts[0] = n2.ctrlpts[0] + D2.x * (y2 - b2), n2.ctrlpts[1] = n2.ctrlpts[1] + D2.y * (y2 - b2)) : (n2.ctrlpts[0] = j2[0] + D2.x * y2, n2.ctrlpts[1] = j2[1] + D2.y * y2);
    }
    if (_2 || v2 || C2) {
      w2 = true;
      var M2 = { x: n2.ctrlpts[0] - i2.x, y: n2.ctrlpts[1] - i2.y }, N2 = Math.sqrt(M2.x * M2.x + M2.y * M2.y), P2 = { x: M2.x / N2, y: M2.y / N2 }, F2 = Math.max(a2, o2), I2 = { x: n2.ctrlpts[0] + P2.x * 2 * F2, y: n2.ctrlpts[1] + P2.y * 2 * F2 }, L2 = u2.intersectLine(i2.x, i2.y, s2, c2, I2.x, I2.y, 0, f2, m2);
      C2 ? (n2.ctrlpts[0] = n2.ctrlpts[0] + P2.x * (y2 - S2), n2.ctrlpts[1] = n2.ctrlpts[1] + P2.y * (y2 - S2)) : (n2.ctrlpts[0] = L2[0] + P2.x * y2, n2.ctrlpts[1] = L2[1] + P2.y * y2);
    }
    w2 && this.findEndpoints(e2);
  }
}, Tf.storeAllpts = function(e2) {
  var t2 = e2._private.rscratch;
  if (t2.edgeType === `multibezier` || t2.edgeType === `bezier` || t2.edgeType === `self` || t2.edgeType === `compound`) {
    t2.allpts = [], t2.allpts.push(t2.startX, t2.startY);
    for (var n2 = 0; n2 + 1 < t2.ctrlpts.length; n2 += 2) t2.allpts.push(t2.ctrlpts[n2], t2.ctrlpts[n2 + 1]), n2 + 3 < t2.ctrlpts.length && t2.allpts.push((t2.ctrlpts[n2] + t2.ctrlpts[n2 + 2]) / 2, (t2.ctrlpts[n2 + 1] + t2.ctrlpts[n2 + 3]) / 2);
    t2.allpts.push(t2.endX, t2.endY);
    var r2, i2;
    t2.ctrlpts.length / 2 % 2 == 0 ? (r2 = t2.allpts.length / 2 - 1, t2.midX = t2.allpts[r2], t2.midY = t2.allpts[r2 + 1]) : (r2 = t2.allpts.length / 2 - 3, i2 = 0.5, t2.midX = Un(t2.allpts[r2], t2.allpts[r2 + 2], t2.allpts[r2 + 4], i2), t2.midY = Un(t2.allpts[r2 + 1], t2.allpts[r2 + 3], t2.allpts[r2 + 5], i2));
  } else if (t2.edgeType === `straight`) t2.allpts = [t2.startX, t2.startY, t2.endX, t2.endY], t2.midX = (t2.startX + t2.endX + t2.arrowStartX + t2.arrowEndX) / 4, t2.midY = (t2.startY + t2.endY + t2.arrowStartY + t2.arrowEndY) / 4;
  else if (t2.edgeType === `segments`) {
    if (t2.allpts = [], t2.allpts.push(t2.startX, t2.startY), t2.allpts.push.apply(t2.allpts, t2.segpts), t2.allpts.push(t2.endX, t2.endY), t2.isRound) {
      t2.roundCorners = [];
      for (var a2 = 2; a2 + 3 < t2.allpts.length; a2 += 2) {
        var o2 = t2.radii[a2 / 2 - 1], s2 = t2.isArcRadius[a2 / 2 - 1];
        t2.roundCorners.push(Sf({ x: t2.allpts[a2 - 2], y: t2.allpts[a2 - 1] }, { x: t2.allpts[a2], y: t2.allpts[a2 + 1], radius: o2 }, { x: t2.allpts[a2 + 2], y: t2.allpts[a2 + 3] }, o2, s2));
      }
    }
    if (t2.segpts.length % 4 == 0) {
      var c2 = t2.segpts.length / 2, l2 = c2 - 2;
      t2.midX = (t2.segpts[l2] + t2.segpts[c2]) / 2, t2.midY = (t2.segpts[l2 + 1] + t2.segpts[c2 + 1]) / 2;
    } else {
      var u2 = t2.segpts.length / 2 - 1;
      if (!t2.isRound) t2.midX = t2.segpts[u2], t2.midY = t2.segpts[u2 + 1];
      else {
        var d2 = { x: t2.segpts[u2], y: t2.segpts[u2 + 1] }, f2 = t2.roundCorners[u2 / 2];
        if (f2.radius === 0) {
          var p2 = { x: t2.segpts[u2 + 2], y: t2.segpts[u2 + 3] };
          t2.midX = d2.x, t2.midY = d2.y, t2.midVector = [d2.y - p2.y, p2.x - d2.x];
        } else {
          var m2 = [d2.x - f2.cx, d2.y - f2.cy], h2 = f2.radius / Math.sqrt(m2[0] ** 2 + m2[1] ** 2);
          m2 = m2.map(function(e3) {
            return e3 * h2;
          }), t2.midX = f2.cx + m2[0], t2.midY = f2.cy + m2[1], t2.midVector = m2;
        }
      }
    }
  }
}, Tf.checkForInvalidEdgeWarning = function(e2) {
  var t2 = e2[0]._private.rscratch;
  t2.nodesOverlap || A(t2.startX) && A(t2.startY) && A(t2.endX) && A(t2.endY) ? t2.loggedErr = false : t2.loggedErr || (t2.loggedErr = true, zt("Edge `" + e2.id() + "` has invalid endpoints and so it is impossible to draw.  Adjust your edge style (e.g. control points) accordingly or use an alternative edge type.  This is expected behaviour when the source node and the target node overlap."));
}, Tf.findEdgeControlPoints = function(e2) {
  var t2 = this;
  if (!(!e2 || e2.length === 0)) {
    for (var n2 = this, r2 = n2.cy.hasCompoundNodes(), i2 = new $t(), a2 = function(e3, t3) {
      return [].concat(p(e3), [t3 ? 1 : 0]).join(`-`);
    }, o2 = [], s2 = [], c2 = 0; c2 < e2.length; c2++) {
      var l2 = e2[c2], u2 = l2._private, d2 = l2.pstyle(`curve-style`).value;
      if (!(l2.removed() || !l2.takesUpSpace())) {
        if (d2 === `haystack`) {
          s2.push(l2);
          continue;
        }
        var f2 = d2 === `unbundled-bezier` || ee(d2, `segments`) || d2 === `straight` || d2 === `straight-triangle` || ee(d2, `taxi`), m2 = d2 === `unbundled-bezier` || d2 === `bezier`, h2 = u2.source, g2 = u2.target, _2 = [h2.poolIndex(), g2.poolIndex()].sort(), v2 = a2(_2, f2), y2 = i2.get(v2);
        y2 ?? (y2 = { eles: [] }, o2.push({ pairId: _2, edgeIsUnbundled: f2 }), i2.set(v2, y2)), y2.eles.push(l2), f2 && (y2.hasUnbundled = true), m2 && (y2.hasBezier = true);
      }
    }
    for (var b2 = function() {
      var e3 = o2[x2], s3 = e3.pairId, c3 = e3.edgeIsUnbundled, l3 = a2(s3, c3), u3 = i2.get(l3), d3;
      if (!u3.hasUnbundled) {
        var f3 = u3.eles[0].parallelEdges().filter(function(e4) {
          return e4.isBundledBezier();
        });
        Jt(u3.eles), f3.forEach(function(e4) {
          return u3.eles.push(e4);
        }), u3.eles.sort(function(e4, t3) {
          return e4.poolIndex() - t3.poolIndex();
        });
      }
      var p2 = u3.eles[0], m3 = p2.source(), h3 = p2.target();
      if (m3.poolIndex() > h3.poolIndex()) {
        var g3 = m3;
        m3 = h3, h3 = g3;
      }
      var _3 = u3.srcPos = m3.position(), v3 = u3.tgtPos = h3.position(), y3 = u3.srcW = m3.outerWidth(), b3 = u3.srcH = m3.outerHeight(), S2 = u3.tgtW = h3.outerWidth(), C2 = u3.tgtH = h3.outerHeight(), w2 = u3.srcShape = n2.nodeShapes[t2.getNodeShape(m3)], T2 = u3.tgtShape = n2.nodeShapes[t2.getNodeShape(h3)], E2 = u3.srcCornerRadius = m3.pstyle(`corner-radius`).value === `auto` ? `auto` : m3.pstyle(`corner-radius`).pfValue, D2 = u3.tgtCornerRadius = h3.pstyle(`corner-radius`).value === `auto` ? `auto` : h3.pstyle(`corner-radius`).pfValue, O2 = u3.tgtRs = h3._private.rscratch, k2 = u3.srcRs = m3._private.rscratch;
      u3.dirCounts = { north: 0, west: 0, south: 0, east: 0, northwest: 0, southwest: 0, northeast: 0, southeast: 0 };
      for (var j2 = 0; j2 < u3.eles.length; j2++) {
        var M2 = u3.eles[j2], N2 = M2[0]._private.rscratch, P2 = M2.pstyle(`curve-style`).value, F2 = P2 === `unbundled-bezier` || ee(P2, `segments`) || ee(P2, `taxi`), I2 = !m3.same(M2.source());
        if (!u3.calculatedIntersection && m3 !== h3 && (u3.hasBezier || u3.hasUnbundled)) {
          u3.calculatedIntersection = true;
          var L2 = w2.intersectLine(_3.x, _3.y, y3, b3, v3.x, v3.y, 0, E2, k2), R2 = u3.srcIntn = L2, z2 = T2.intersectLine(v3.x, v3.y, S2, C2, _3.x, _3.y, 0, D2, O2), B2 = u3.tgtIntn = z2, V2 = u3.intersectionPts = { x1: L2[0], x2: z2[0], y1: L2[1], y2: z2[1] }, H2 = u3.posPts = { x1: _3.x, x2: v3.x, y1: _3.y, y2: v3.y }, U2 = z2[1] - L2[1], W2 = z2[0] - L2[0], G2 = Math.sqrt(W2 * W2 + U2 * U2);
          A(G2) && G2 >= wf || (G2 = Math.sqrt(Math.max(W2 * W2, Cf) + Math.max(U2 * U2, Cf)));
          var K2 = u3.vector = { x: W2, y: U2 }, q2 = u3.vectorNorm = { x: K2.x / G2, y: K2.y / G2 }, J2 = { x: -q2.y, y: q2.x };
          u3.nodesOverlap = !A(G2) || T2.checkPoint(L2[0], L2[1], 0, S2, C2, v3.x, v3.y, D2, O2) || w2.checkPoint(z2[0], z2[1], 0, y3, b3, _3.x, _3.y, E2, k2), u3.vectorNormInverse = J2, d3 = { nodesOverlap: u3.nodesOverlap, dirCounts: u3.dirCounts, calculatedIntersection: true, hasBezier: u3.hasBezier, hasUnbundled: u3.hasUnbundled, eles: u3.eles, srcPos: v3, srcRs: O2, tgtPos: _3, tgtRs: k2, srcW: S2, srcH: C2, tgtW: y3, tgtH: b3, srcIntn: B2, tgtIntn: R2, srcShape: T2, tgtShape: w2, posPts: { x1: H2.x2, y1: H2.y2, x2: H2.x1, y2: H2.y1 }, intersectionPts: { x1: V2.x2, y1: V2.y2, x2: V2.x1, y2: V2.y1 }, vector: { x: -K2.x, y: -K2.y }, vectorNorm: { x: -q2.x, y: -q2.y }, vectorNormInverse: { x: -J2.x, y: -J2.y } };
        }
        var Y2 = I2 ? d3 : u3;
        N2.nodesOverlap = Y2.nodesOverlap, N2.srcIntn = Y2.srcIntn, N2.tgtIntn = Y2.tgtIntn, N2.isRound = P2.startsWith(`round`), r2 && (m3.isParent() || m3.isChild() || h3.isParent() || h3.isChild()) && (m3.parents().anySame(h3) || h3.parents().anySame(m3) || m3.same(h3) && m3.isParent()) ? t2.findCompoundLoopPoints(M2, Y2, j2, F2) : m3 === h3 ? t2.findLoopPoints(M2, Y2, j2, F2) : P2.endsWith(`segments`) ? t2.findSegmentsPoints(M2, Y2) : P2.endsWith(`taxi`) ? t2.findTaxiPoints(M2, Y2) : P2 === `straight` || !F2 && u3.eles.length % 2 == 1 && j2 === Math.floor(u3.eles.length / 2) ? t2.findStraightEdgePoints(M2) : t2.findBezierPoints(M2, Y2, j2, F2, I2), t2.findEndpoints(M2), t2.tryToCorrectInvalidPoints(M2, Y2), t2.checkForInvalidEdgeWarning(M2), t2.storeAllpts(M2), t2.storeEdgeProjections(M2), t2.calculateArrowAngles(M2), t2.recalculateEdgeLabelProjections(M2), t2.calculateLabelAngles(M2);
      }
    }, x2 = 0; x2 < o2.length; x2++) b2();
    this.findHaystackPoints(s2);
  }
};
function Ef(e2) {
  var t2 = [];
  if (e2 != null) {
    for (var n2 = 0; n2 < e2.length; n2 += 2) {
      var r2 = e2[n2], i2 = e2[n2 + 1];
      t2.push({ x: r2, y: i2 });
    }
    return t2;
  }
}
Tf.getSegmentPoints = function(e2) {
  var t2 = e2[0]._private.rscratch;
  if (this.recalculateRenderedStyle(e2), t2.edgeType === `segments`) return Ef(t2.segpts);
}, Tf.getControlPoints = function(e2) {
  var t2 = e2[0]._private.rscratch;
  this.recalculateRenderedStyle(e2);
  var n2 = t2.edgeType;
  if (n2 === `bezier` || n2 === `multibezier` || n2 === `self` || n2 === `compound`) return Ef(t2.ctrlpts);
}, Tf.getEdgeMidpoint = function(e2) {
  var t2 = e2[0]._private.rscratch;
  return this.recalculateRenderedStyle(e2), { x: t2.midX, y: t2.midY };
};
var Df = {};
Df.manualEndptToPx = function(e2, t2) {
  var n2 = this, r2 = e2.position(), i2 = e2.outerWidth(), a2 = e2.outerHeight(), o2 = e2._private.rscratch;
  if (t2.value.length === 2) {
    var s2 = [t2.pfValue[0], t2.pfValue[1]];
    return t2.units[0] === `%` && (s2[0] *= i2), t2.units[1] === `%` && (s2[1] *= a2), s2[0] += r2.x, s2[1] += r2.y, s2;
  } else {
    var c2 = t2.pfValue[0];
    c2 = -Math.PI / 2 + c2;
    var l2 = 2 * Math.max(i2, a2), u2 = [r2.x + Math.cos(c2) * l2, r2.y + Math.sin(c2) * l2];
    return n2.nodeShapes[this.getNodeShape(e2)].intersectLine(r2.x, r2.y, i2, a2, u2[0], u2[1], 0, e2.pstyle(`corner-radius`).value === `auto` ? `auto` : e2.pstyle(`corner-radius`).pfValue, o2);
  }
}, Df.findEndpoints = function(e2) {
  var t2, n2, r2 = this, i2, a2 = e2.source()[0], o2 = e2.target()[0], s2 = a2.position(), c2 = o2.position(), l2 = e2.pstyle(`target-arrow-shape`).value, u2 = e2.pstyle(`source-arrow-shape`).value, d2 = e2.pstyle(`target-distance-from-node`).pfValue, f2 = e2.pstyle(`source-distance-from-node`).pfValue, p2 = a2._private.rscratch, m2 = o2._private.rscratch, h2 = e2.pstyle(`curve-style`).value, g2 = e2._private.rscratch, _2 = g2.edgeType, v2 = ee(h2, `taxi`), y2 = _2 === `self` || _2 === `compound`, b2 = _2 === `bezier` || _2 === `multibezier` || y2, x2 = _2 !== `bezier`, S2 = _2 === `straight` || _2 === `segments`, C2 = _2 === `segments`, w2 = b2 || x2 || S2, T2 = y2 || v2, E2 = e2.pstyle(`source-endpoint`), D2 = T2 ? `outside-to-node` : E2.value, O2 = a2.pstyle(`corner-radius`).value === `auto` ? `auto` : a2.pstyle(`corner-radius`).pfValue, k2 = e2.pstyle(`target-endpoint`), j2 = T2 ? `outside-to-node` : k2.value, M2 = o2.pstyle(`corner-radius`).value === `auto` ? `auto` : o2.pstyle(`corner-radius`).pfValue;
  g2.srcManEndpt = E2, g2.tgtManEndpt = k2;
  var N2, P2, F2, I2, L2 = ((k2 == null || (t2 = k2.pfValue) == null ? void 0 : t2.length) === 2 ? k2.pfValue : null) ?? [0, 0], R2 = ((E2 == null || (n2 = E2.pfValue) == null ? void 0 : n2.length) === 2 ? E2.pfValue : null) ?? [0, 0];
  if (b2) {
    var z2 = [g2.ctrlpts[0], g2.ctrlpts[1]];
    N2 = x2 ? [g2.ctrlpts[g2.ctrlpts.length - 2], g2.ctrlpts[g2.ctrlpts.length - 1]] : z2, P2 = z2;
  } else if (S2) {
    var B2 = C2 ? g2.segpts.slice(0, 2) : [c2.x + L2[0], c2.y + L2[1]];
    N2 = C2 ? g2.segpts.slice(g2.segpts.length - 2) : [s2.x + R2[0], s2.y + R2[1]], P2 = B2;
  }
  if (j2 === `inside-to-node`) i2 = [c2.x, c2.y];
  else if (k2.units) i2 = this.manualEndptToPx(o2, k2);
  else if (j2 === `outside-to-line`) i2 = g2.tgtIntn;
  else if (j2 === `outside-to-node` || j2 === `outside-to-node-or-label` ? F2 = N2 : (j2 === `outside-to-line` || j2 === `outside-to-line-or-label`) && (F2 = [s2.x, s2.y]), i2 = r2.nodeShapes[this.getNodeShape(o2)].intersectLine(c2.x, c2.y, o2.outerWidth(), o2.outerHeight(), F2[0], F2[1], 0, M2, m2), j2 === `outside-to-node-or-label` || j2 === `outside-to-line-or-label`) {
    var V2 = o2._private.rscratch, H2 = V2.labelWidth, U2 = V2.labelHeight, W2 = V2.labelX, G2 = V2.labelY, K2 = H2 / 2, q2 = U2 / 2, J2 = o2.pstyle(`text-valign`).value;
    J2 === `top` ? G2 -= q2 : J2 === `bottom` && (G2 += q2);
    var Y2 = o2.pstyle(`text-halign`).value;
    Y2 === `left` ? W2 -= K2 : Y2 === `right` && (W2 += K2);
    var te2 = Er(F2[0], F2[1], [W2 - K2, G2 - q2, W2 + K2, G2 - q2, W2 + K2, G2 + q2, W2 - K2, G2 + q2], c2.x, c2.y);
    if (te2.length > 0) {
      var ne2 = s2, re2 = Vn(ne2, jn(i2)), ie2 = Vn(ne2, jn(te2)), ae2 = re2;
      ie2 < re2 && (i2 = te2, ae2 = ie2), te2.length > 2 && Vn(ne2, { x: te2[2], y: te2[3] }) < ae2 && (i2 = [te2[2], te2[3]]);
    }
  }
  var oe2 = Or(i2, N2, r2.arrowShapes[l2].spacing(e2) + d2), se2 = Or(i2, N2, r2.arrowShapes[l2].gap(e2) + d2);
  if (g2.endX = se2[0], g2.endY = se2[1], g2.arrowEndX = oe2[0], g2.arrowEndY = oe2[1], D2 === `inside-to-node`) i2 = [s2.x, s2.y];
  else if (E2.units) i2 = this.manualEndptToPx(a2, E2);
  else if (D2 === `outside-to-line`) i2 = g2.srcIntn;
  else if (D2 === `outside-to-node` || D2 === `outside-to-node-or-label` ? I2 = P2 : (D2 === `outside-to-line` || D2 === `outside-to-line-or-label`) && (I2 = [c2.x, c2.y]), i2 = r2.nodeShapes[this.getNodeShape(a2)].intersectLine(s2.x, s2.y, a2.outerWidth(), a2.outerHeight(), I2[0], I2[1], 0, O2, p2), D2 === `outside-to-node-or-label` || D2 === `outside-to-line-or-label`) {
    var ce2 = a2._private.rscratch, X2 = ce2.labelWidth, le2 = ce2.labelHeight, ue2 = ce2.labelX, de2 = ce2.labelY, fe2 = X2 / 2, pe2 = le2 / 2, me2 = a2.pstyle(`text-valign`).value;
    me2 === `top` ? de2 -= pe2 : me2 === `bottom` && (de2 += pe2);
    var he2 = a2.pstyle(`text-halign`).value;
    he2 === `left` ? ue2 -= fe2 : he2 === `right` && (ue2 += fe2);
    var ge2 = Er(I2[0], I2[1], [ue2 - fe2, de2 - pe2, ue2 + fe2, de2 - pe2, ue2 + fe2, de2 + pe2, ue2 - fe2, de2 + pe2], s2.x, s2.y);
    if (ge2.length > 0) {
      var _e2 = c2, ve2 = Vn(_e2, jn(i2)), ye2 = Vn(_e2, jn(ge2)), be2 = ve2;
      ye2 < ve2 && (i2 = [ge2[0], ge2[1]], be2 = ye2), ge2.length > 2 && Vn(_e2, { x: ge2[2], y: ge2[3] }) < be2 && (i2 = [ge2[2], ge2[3]]);
    }
  }
  var xe2 = Or(i2, P2, r2.arrowShapes[u2].spacing(e2) + f2), Se2 = Or(i2, P2, r2.arrowShapes[u2].gap(e2) + f2);
  g2.startX = Se2[0], g2.startY = Se2[1], g2.arrowStartX = xe2[0], g2.arrowStartY = xe2[1], w2 && (!A(g2.startX) || !A(g2.startY) || !A(g2.endX) || !A(g2.endY) ? g2.badLine = true : g2.badLine = false);
}, Df.getSourceEndpoint = function(e2) {
  var t2 = e2[0]._private.rscratch;
  switch (this.recalculateRenderedStyle(e2), t2.edgeType) {
    case `haystack`:
      return { x: t2.haystackPts[0], y: t2.haystackPts[1] };
    default:
      return { x: t2.arrowStartX, y: t2.arrowStartY };
  }
}, Df.getTargetEndpoint = function(e2) {
  var t2 = e2[0]._private.rscratch;
  switch (this.recalculateRenderedStyle(e2), t2.edgeType) {
    case `haystack`:
      return { x: t2.haystackPts[2], y: t2.haystackPts[3] };
    default:
      return { x: t2.arrowEndX, y: t2.arrowEndY };
  }
};
var Of = {};
function kf(e2, t2, n2) {
  for (var r2 = function(e3, t3, n3, r3) {
    return Un(e3, t3, n3, r3);
  }, i2 = t2._private.rstyle.bezierPts, a2 = 0; a2 < e2.bezierProjPcts.length; a2++) {
    var o2 = e2.bezierProjPcts[a2];
    i2.push({ x: r2(n2[0], n2[2], n2[4], o2), y: r2(n2[1], n2[3], n2[5], o2) });
  }
}
Of.storeEdgeProjections = function(e2) {
  var t2 = e2._private, n2 = t2.rscratch, r2 = n2.edgeType;
  if (t2.rstyle.bezierPts = null, t2.rstyle.linePts = null, t2.rstyle.haystackPts = null, r2 === `multibezier` || r2 === `bezier` || r2 === `self` || r2 === `compound`) {
    t2.rstyle.bezierPts = [];
    for (var i2 = 0; i2 + 5 < n2.allpts.length; i2 += 4) kf(this, e2, n2.allpts.slice(i2, i2 + 6));
  } else if (r2 === `segments`) for (var a2 = t2.rstyle.linePts = [], i2 = 0; i2 + 1 < n2.allpts.length; i2 += 2) a2.push({ x: n2.allpts[i2], y: n2.allpts[i2 + 1] });
  else if (r2 === `haystack`) {
    var o2 = n2.haystackPts;
    t2.rstyle.haystackPts = [{ x: o2[0], y: o2[1] }, { x: o2[2], y: o2[3] }];
  }
  t2.rstyle.arrowWidth = this.getArrowWidth(e2.pstyle(`width`).pfValue, e2.pstyle(`arrow-scale`).value) * this.arrowShapeWidth;
}, Of.recalculateEdgeProjections = function(e2) {
  this.findEdgeControlPoints(e2);
};
var Af = {};
Af.recalculateNodeLabelProjection = function(e2) {
  var t2 = e2.pstyle(`label`).strValue;
  if (!z(t2)) {
    var n2, r2, i2 = e2._private, a2 = e2.width(), o2 = e2.height(), s2 = e2.padding(), c2 = e2.position(), l2 = e2.pstyle(`text-halign`).strValue, u2 = e2.pstyle(`text-valign`).strValue, d2 = i2.rscratch, f2 = i2.rstyle;
    switch (l2) {
      case `left`:
        n2 = c2.x - a2 / 2 - s2;
        break;
      case `right`:
        n2 = c2.x + a2 / 2 + s2;
        break;
      default:
        n2 = c2.x;
    }
    switch (u2) {
      case `top`:
        r2 = c2.y - o2 / 2 - s2;
        break;
      case `bottom`:
        r2 = c2.y + o2 / 2 + s2;
        break;
      default:
        r2 = c2.y;
    }
    d2.labelX = n2, d2.labelY = r2, f2.labelX = n2, f2.labelY = r2, this.calculateLabelAngles(e2), this.applyLabelDimensions(e2);
  }
};
var jf = function(e2, t2) {
  var n2 = Math.atan(t2 / e2);
  return e2 === 0 && n2 < 0 && (n2 *= -1), n2;
}, Mf = function(e2, t2) {
  return jf(t2.x - e2.x, t2.y - e2.y);
}, Nf = function(e2, t2, n2, r2) {
  var i2 = Kn(0, r2 - 1e-3, 1), a2 = Kn(0, r2 + 1e-3, 1);
  return Mf(Wn(e2, t2, n2, i2), Wn(e2, t2, n2, a2));
};
Af.recalculateEdgeLabelProjections = function(e2) {
  var t2, n2 = e2._private, r2 = n2.rscratch, i2 = this, a2 = { mid: e2.pstyle(`label`).strValue, source: e2.pstyle(`source-label`).strValue, target: e2.pstyle(`target-label`).strValue };
  if (a2.mid || a2.source || a2.target) {
    t2 = { x: r2.midX, y: r2.midY };
    var o2 = function(e3, t3, r3) {
      Zt(n2.rscratch, e3, t3, r3), Zt(n2.rstyle, e3, t3, r3);
    };
    o2(`labelX`, null, t2.x), o2(`labelY`, null, t2.y), o2(`labelAutoAngle`, null, jf(r2.midDispX, r2.midDispY));
    var s2 = function() {
      if (s2.cache) return s2.cache;
      for (var e3 = [], t3 = 0; t3 + 5 < r2.allpts.length; t3 += 4) {
        var a3 = { x: r2.allpts[t3], y: r2.allpts[t3 + 1] }, o3 = { x: r2.allpts[t3 + 2], y: r2.allpts[t3 + 3] }, c3 = { x: r2.allpts[t3 + 4], y: r2.allpts[t3 + 5] };
        e3.push({ p0: a3, p1: o3, p2: c3, startDist: 0, length: 0, segments: [] });
      }
      var l2 = n2.rstyle.bezierPts, u2 = i2.bezierProjPcts.length;
      function d2(e4, t4, n3, r3, i3) {
        var a4 = Bn(t4, n3), o4 = e4.segments[e4.segments.length - 1], s3 = { p0: t4, p1: n3, t0: r3, t1: i3, startDist: o4 ? o4.startDist + o4.length : 0, length: a4 };
        e4.segments.push(s3), e4.length += a4;
      }
      for (var f2 = 0; f2 < e3.length; f2++) {
        var p2 = e3[f2], m2 = e3[f2 - 1];
        m2 && (p2.startDist = m2.startDist + m2.length), d2(p2, p2.p0, l2[f2 * u2], 0, i2.bezierProjPcts[0]);
        for (var h2 = 0; h2 < u2 - 1; h2++) d2(p2, l2[f2 * u2 + h2], l2[f2 * u2 + h2 + 1], i2.bezierProjPcts[h2], i2.bezierProjPcts[h2 + 1]);
        d2(p2, l2[f2 * u2 + u2 - 1], p2.p2, i2.bezierProjPcts[u2 - 1], 1);
      }
      return s2.cache = e3;
    }, c2 = function(n3) {
      var i3, c3 = n3 === `source`;
      if (a2[n3]) {
        var l2 = e2.pstyle(n3 + `-text-offset`).pfValue;
        switch (r2.edgeType) {
          case `self`:
          case `compound`:
          case `bezier`:
          case `multibezier`:
            for (var u2 = s2(), d2, f2 = 0, p2 = 0, m2 = 0; m2 < u2.length; m2++) {
              for (var h2 = u2[c3 ? m2 : u2.length - 1 - m2], g2 = 0; g2 < h2.segments.length; g2++) {
                var _2 = h2.segments[c3 ? g2 : h2.segments.length - 1 - g2], v2 = m2 === u2.length - 1 && g2 === h2.segments.length - 1;
                if (f2 = p2, p2 += _2.length, p2 >= l2 || v2) {
                  d2 = { cp: h2, segment: _2 };
                  break;
                }
              }
              if (d2) break;
            }
            var y2 = d2.cp, b2 = d2.segment, x2 = (l2 - f2) / b2.length, S2 = b2.t1 - b2.t0, C2 = c3 ? b2.t0 + S2 * x2 : b2.t1 - S2 * x2;
            C2 = Kn(0, C2, 1), t2 = Wn(y2.p0, y2.p1, y2.p2, C2), i3 = Nf(y2.p0, y2.p1, y2.p2, C2);
            break;
          case `straight`:
          case `segments`:
          case `haystack`:
            for (var w2 = 0, T2, E2, D2, O2, k2 = r2.allpts.length, A2 = 0; A2 + 3 < k2 && (c3 ? (D2 = { x: r2.allpts[A2], y: r2.allpts[A2 + 1] }, O2 = { x: r2.allpts[A2 + 2], y: r2.allpts[A2 + 3] }) : (D2 = { x: r2.allpts[k2 - 2 - A2], y: r2.allpts[k2 - 1 - A2] }, O2 = { x: r2.allpts[k2 - 4 - A2], y: r2.allpts[k2 - 3 - A2] }), T2 = Bn(D2, O2), E2 = w2, w2 += T2, !(w2 >= l2)); A2 += 2) ;
            var j2 = (l2 - E2) / T2;
            j2 = Kn(0, j2, 1), t2 = Gn(D2, O2, j2), i3 = Mf(D2, O2);
            break;
        }
        o2(`labelX`, n3, t2.x), o2(`labelY`, n3, t2.y), o2(`labelAutoAngle`, n3, i3);
      }
    };
    c2(`source`), c2(`target`), this.applyLabelDimensions(e2);
  }
}, Af.applyLabelDimensions = function(e2) {
  this.applyPrefixedLabelDimensions(e2), e2.isEdge() && (this.applyPrefixedLabelDimensions(e2, `source`), this.applyPrefixedLabelDimensions(e2, `target`));
}, Af.applyPrefixedLabelDimensions = function(e2, t2) {
  var n2 = e2._private, r2 = this.getLabelText(e2, t2), i2 = Ct(r2, e2._private.labelDimsKey);
  if (Xt(n2.rscratch, `prefixedLabelDimsKey`, t2) !== i2) {
    Zt(n2.rscratch, `prefixedLabelDimsKey`, t2, i2);
    var a2 = this.calculateLabelDimensions(e2, r2), o2 = e2.pstyle(`line-height`).pfValue, s2 = e2.pstyle(`text-wrap`).strValue, c2 = Xt(n2.rscratch, `labelWrapCachedLines`, t2) || [], l2 = s2 === `wrap` ? Math.max(c2.length, 1) : 1, u2 = a2.height / l2, d2 = u2 * o2, f2 = a2.width, p2 = a2.height + (l2 - 1) * (o2 - 1) * u2;
    Zt(n2.rstyle, `labelWidth`, t2, f2), Zt(n2.rscratch, `labelWidth`, t2, f2), Zt(n2.rstyle, `labelHeight`, t2, p2), Zt(n2.rscratch, `labelHeight`, t2, p2), Zt(n2.rscratch, `labelLineHeight`, t2, d2);
  }
}, Af.getLabelText = function(e2, t2) {
  var n2 = e2._private, r2 = t2 ? t2 + `-` : ``, i2 = e2.pstyle(r2 + `label`).strValue, a2 = e2.pstyle(`text-transform`).value, s2 = function(e3, r3) {
    return r3 ? (Zt(n2.rscratch, e3, t2, r3), r3) : Xt(n2.rscratch, e3, t2);
  };
  if (!i2) return ``;
  a2 == `none` || (a2 == `uppercase` ? i2 = i2.toUpperCase() : a2 == `lowercase` && (i2 = i2.toLowerCase()));
  var c2 = e2.pstyle(`text-wrap`).value;
  if (c2 === `wrap`) {
    var l2 = s2(`labelKey`);
    if (l2 != null && s2(`labelWrapKey`) === l2) return s2(`labelWrapCachedText`);
    for (var u2 = `\u200B`, d2 = i2.split(`
`), f2 = e2.pstyle(`text-max-width`).pfValue, p2 = e2.pstyle(`text-overflow-wrap`).value === `anywhere`, m2 = [], h2 = /[\s\u200b]+|$/g, g2 = 0; g2 < d2.length; g2++) {
      var _2 = d2[g2], v2 = this.calculateLabelDimensions(e2, _2).width;
      if (p2 && (_2 = _2.split(``).join(u2)), v2 > f2) {
        var y2 = _2.matchAll(h2), b2 = ``, x2 = 0, S2 = o(y2), C2;
        try {
          for (S2.s(); !(C2 = S2.n()).done; ) {
            var w2 = C2.value, T2 = w2[0], E2 = _2.substring(x2, w2.index);
            x2 = w2.index + T2.length;
            var D2 = b2.length === 0 ? E2 : b2 + E2 + T2;
            this.calculateLabelDimensions(e2, D2).width <= f2 ? b2 += E2 + T2 : (b2 && m2.push(b2), b2 = E2 + T2);
          }
        } catch (e3) {
          S2.e(e3);
        } finally {
          S2.f();
        }
        b2.match(/^[\s\u200b]+$/) || m2.push(b2);
      } else m2.push(_2);
    }
    s2(`labelWrapCachedLines`, m2), i2 = s2(`labelWrapCachedText`, m2.join(`
`)), s2(`labelWrapKey`, l2);
  } else if (c2 === `ellipsis`) {
    var O2 = e2.pstyle(`text-max-width`).pfValue, k2 = ``, A2 = `\u2026`, j2 = false;
    if (this.calculateLabelDimensions(e2, i2).width < O2) return i2;
    for (var M2 = 0; M2 < i2.length && !(this.calculateLabelDimensions(e2, k2 + i2[M2] + A2).width > O2); M2++) k2 += i2[M2], M2 === i2.length - 1 && (j2 = true);
    return j2 || (k2 += A2), k2;
  }
  return i2;
}, Af.getLabelJustification = function(e2) {
  var t2 = e2.pstyle(`text-justification`).strValue, n2 = e2.pstyle(`text-halign`).strValue;
  if (t2 === `auto`) if (e2.isNode()) switch (n2) {
    case `left`:
      return `right`;
    case `right`:
      return `left`;
    default:
      return `center`;
  }
  else return `center`;
  else return t2;
}, Af.calculateLabelDimensions = function(e2, t2) {
  var n2 = this.cy.window().document, r2 = 0, i2 = e2.pstyle(`font-style`).strValue, a2 = e2.pstyle(`font-size`).pfValue, o2 = e2.pstyle(`font-family`).strValue, s2 = e2.pstyle(`font-weight`).strValue, c2 = this.labelCalcCanvas, l2 = this.labelCalcCanvasContext;
  if (!c2) {
    c2 = this.labelCalcCanvas = n2.createElement(`canvas`), l2 = this.labelCalcCanvasContext = c2.getContext(`2d`);
    var u2 = c2.style;
    u2.position = `absolute`, u2.left = `-9999px`, u2.top = `-9999px`, u2.zIndex = `-1`, u2.visibility = `hidden`, u2.pointerEvents = `none`;
  }
  l2.font = `${i2} ${s2} ${a2}px ${o2}`;
  for (var d2 = 0, f2 = 0, p2 = t2.split(`
`), m2 = 0; m2 < p2.length; m2++) {
    var h2 = p2[m2], g2 = l2.measureText(h2), _2 = Math.ceil(g2.width), v2 = a2;
    d2 = Math.max(_2, d2), f2 += v2;
  }
  return d2 += r2, f2 += r2, { width: d2, height: f2 };
}, Af.calculateLabelAngle = function(e2, t2) {
  var n2 = e2._private.rscratch, r2 = e2.isEdge(), i2 = t2 ? t2 + `-` : ``, a2 = e2.pstyle(i2 + `text-rotation`), o2 = a2.strValue;
  return o2 === `none` ? 0 : r2 && o2 === `autorotate` ? n2.labelAutoAngle : o2 === `autorotate` ? 0 : a2.pfValue;
}, Af.calculateLabelAngles = function(e2) {
  var t2 = this, n2 = e2.isEdge(), r2 = e2._private.rscratch;
  r2.labelAngle = t2.calculateLabelAngle(e2), n2 && (r2.sourceLabelAngle = t2.calculateLabelAngle(e2, `source`), r2.targetLabelAngle = t2.calculateLabelAngle(e2, `target`));
};
var Pf = {}, Ff = 28, If = false;
Pf.getNodeShape = function(e2) {
  var t2 = this, n2 = e2.pstyle(`shape`).value;
  if (n2 === `cutrectangle` && (e2.width() < Ff || e2.height() < Ff)) return If || (If = (zt("The `cutrectangle` node shape can not be used at small sizes so `rectangle` is used instead"), true)), `rectangle`;
  if (e2.isParent()) return n2 === `rectangle` || n2 === `roundrectangle` || n2 === `round-rectangle` || n2 === `cutrectangle` || n2 === `cut-rectangle` || n2 === `barrel` ? n2 : `rectangle`;
  if (n2 === `polygon`) {
    var r2 = e2.pstyle(`shape-polygon-points`).value;
    return t2.nodeShapes.makePolygon(r2).name;
  }
  return n2;
};
var Lf = {};
Lf.registerCalculationListeners = function() {
  var e2 = this.cy, t2 = e2.collection(), n2 = this, r2 = function(e3) {
    var n3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (t2.merge(e3), n3) for (var r3 = 0; r3 < e3.length; r3++) {
      var i3 = e3[r3]._private.rstyle;
      i3.clean = false, i3.cleanConnected = false;
    }
  };
  n2.binder(e2).on(`bounds.* dirty.*`, function(e3) {
    var t3 = e3.target;
    r2(t3);
  }).on(`style.* background.*`, function(e3) {
    var t3 = e3.target;
    r2(t3, false);
  });
  var i2 = function(i3) {
    if (i3) {
      var a2 = n2.onUpdateEleCalcsFns;
      t2.cleanStyle();
      for (var o2 = 0; o2 < t2.length; o2++) {
        var s2 = t2[o2], c2 = s2._private.rstyle;
        s2.isNode() && !c2.cleanConnected && (r2(s2.connectedEdges()), c2.cleanConnected = true);
      }
      if (a2) for (var l2 = 0; l2 < a2.length; l2++) {
        var u2 = a2[l2];
        u2(i3, t2);
      }
      n2.recalculateRenderedStyle(t2), t2 = e2.collection();
    }
  };
  n2.flushRenderedStyleQueue = function() {
    i2(true);
  }, n2.beforeRender(i2, n2.beforeRenderPriorities.eleCalcs);
}, Lf.onUpdateEleCalcs = function(e2) {
  (this.onUpdateEleCalcsFns = this.onUpdateEleCalcsFns || []).push(e2);
}, Lf.recalculateRenderedStyle = function(e2, t2) {
  var n2 = function(e3) {
    return e3._private.rstyle.cleanConnected;
  };
  if (e2.length !== 0) {
    var r2 = [], i2 = [];
    if (!this.destroyed) {
      t2 === void 0 && (t2 = true);
      for (var a2 = 0; a2 < e2.length; a2++) {
        var o2 = e2[a2], s2 = o2._private, c2 = s2.rstyle;
        o2.isEdge() && (!n2(o2.source()) || !n2(o2.target())) && (c2.clean = false), o2.isEdge() && o2.isBundledBezier() && o2.parallelEdges().some(function(e3) {
          return !e3._private.rstyle.clean && e3.isBundledBezier();
        }) && (c2.clean = false), !(t2 && c2.clean || o2.removed()) && o2.pstyle(`display`).value !== `none` && (s2.group === `nodes` ? i2.push(o2) : r2.push(o2), c2.clean = true);
      }
      for (var l2 = 0; l2 < i2.length; l2++) {
        var u2 = i2[l2], d2 = u2._private.rstyle, f2 = u2.position();
        this.recalculateNodeLabelProjection(u2), d2.nodeX = f2.x, d2.nodeY = f2.y, d2.nodeW = u2.pstyle(`width`).pfValue, d2.nodeH = u2.pstyle(`height`).pfValue;
      }
      this.recalculateEdgeProjections(r2);
      for (var p2 = 0; p2 < r2.length; p2++) {
        var m2 = r2[p2]._private, h2 = m2.rstyle, g2 = m2.rscratch;
        h2.srcX = g2.arrowStartX, h2.srcY = g2.arrowStartY, h2.tgtX = g2.arrowEndX, h2.tgtY = g2.arrowEndY, h2.midX = g2.midX, h2.midY = g2.midY, h2.labelAngle = g2.labelAngle, h2.sourceLabelAngle = g2.sourceLabelAngle, h2.targetLabelAngle = g2.targetLabelAngle;
      }
    }
  }
};
var Rf = {};
Rf.updateCachedGrabbedEles = function() {
  var e2 = this.cachedZSortedEles;
  if (e2) {
    e2.drag = [], e2.nondrag = [];
    for (var t2 = [], n2 = 0; n2 < e2.length; n2++) {
      var r2 = e2[n2], i2 = r2._private.rscratch;
      r2.grabbed() && !r2.isParent() ? t2.push(r2) : i2.inDragLayer ? e2.drag.push(r2) : e2.nondrag.push(r2);
    }
    for (var n2 = 0; n2 < t2.length; n2++) {
      var r2 = t2[n2];
      e2.drag.push(r2);
    }
  }
}, Rf.invalidateCachedZSortedEles = function() {
  this.cachedZSortedEles = null;
}, Rf.getCachedZSortedEles = function(e2) {
  if (e2 || !this.cachedZSortedEles) {
    var t2 = this.cy.mutableElements().toArray();
    t2.sort(Xl), t2.interactive = t2.filter(function(e3) {
      return e3.interactive();
    }), this.cachedZSortedEles = t2, this.updateCachedGrabbedEles();
  } else t2 = this.cachedZSortedEles;
  return t2;
};
var zf = {};
[Xd, Zd, Tf, Df, Of, Af, Pf, Lf, Rf].forEach(function(e2) {
  X(zf, e2);
});
var Bf = {};
Bf.getCachedImage = function(e2, t2, n2) {
  var r2 = this, i2 = r2.imageCache = r2.imageCache || {}, a2 = i2[e2];
  if (a2) return a2.image.complete || a2.image.addEventListener(`load`, n2), a2.image;
  a2 = i2[e2] = i2[e2] || {};
  var o2 = a2.image = new Image();
  o2.addEventListener(`load`, n2), o2.addEventListener(`error`, function() {
    o2.error = true;
  });
  var s2 = `data:`;
  return e2.substring(0, s2.length).toLowerCase() !== s2 && (t2 = t2 === `null` ? null : t2, o2.crossOrigin = t2), o2.src = e2, o2;
};
var Vf = {};
Vf.registerBinding = function(e2, t2, n2, r2) {
  var i2 = Array.prototype.slice.apply(arguments, [1]);
  if (Array.isArray(e2)) {
    for (var a2 = [], o2 = 0; o2 < e2.length; o2++) {
      var s2 = e2[o2];
      if (s2 !== void 0) {
        var c2 = this.binder(s2);
        a2.push(c2.on.apply(c2, i2));
      }
    }
    return a2;
  }
  var c2 = this.binder(e2);
  return c2.on.apply(c2, i2);
}, Vf.binder = function(e2) {
  var t2 = this, n2 = t2.cy.window(), r2 = e2 === n2 || e2 === n2.document || e2 === n2.document.body || B(e2);
  if (t2.supportsPassiveEvents == null) {
    var i2 = false;
    try {
      var a2 = Object.defineProperty({}, `passive`, { get: function() {
        return i2 = true, true;
      } });
      n2.addEventListener(`test`, null, a2);
    } catch {
    }
    t2.supportsPassiveEvents = i2;
  }
  var o2 = function(n3, i3, a3) {
    var o3 = Array.prototype.slice.call(arguments);
    return r2 && t2.supportsPassiveEvents && (o3[2] = { capture: a3 ?? false, passive: false, once: false }), t2.bindings.push({ target: e2, args: o3 }), (e2.addEventListener || e2.on).apply(e2, o3), this;
  };
  return { on: o2, addEventListener: o2, addListener: o2, bind: o2 };
}, Vf.nodeIsDraggable = function(e2) {
  return e2 && e2.isNode() && !e2.locked() && e2.grabbable();
}, Vf.nodeIsGrabbable = function(e2) {
  return this.nodeIsDraggable(e2) && e2.interactive();
}, Vf.load = function() {
  var e2 = this, t2 = e2.cy.window(), n2 = function(e3) {
    return e3.selected();
  }, r2 = function(e3) {
    var t3 = e3.getRootNode();
    if (t3 && t3.nodeType === 11 && t3.host !== void 0) return t3;
  }, i2 = function(t3, n3, r3, i3) {
    t3 ?? (t3 = e2.cy);
    for (var a3 = 0; a3 < n3.length; a3++) {
      var o3 = n3[a3];
      t3.emit({ originalEvent: r3, type: o3, position: i3 });
    }
  }, a2 = function(e3) {
    return e3.shiftKey || e3.metaKey || e3.ctrlKey;
  }, o2 = function(t3, n3) {
    var r3 = true;
    if (e2.cy.hasCompoundNodes() && t3 && t3.pannable()) for (var i3 = 0; n3 && i3 < n3.length; i3++) {
      var t3 = n3[i3];
      if (t3.isNode() && t3.isParent() && !t3.pannable()) {
        r3 = false;
        break;
      }
    }
    else r3 = true;
    return r3;
  }, s2 = function(e3) {
    e3[0]._private.grabbed = true;
  }, c2 = function(e3) {
    e3[0]._private.grabbed = false;
  }, l2 = function(e3) {
    e3[0]._private.rscratch.inDragLayer = true;
  }, u2 = function(e3) {
    e3[0]._private.rscratch.inDragLayer = false;
  }, d2 = function(e3) {
    e3[0]._private.rscratch.isGrabTarget = true;
  }, f2 = function(e3) {
    e3[0]._private.rscratch.isGrabTarget = false;
  }, p2 = function(e3, t3) {
    var n3 = t3.addToList;
    !n3.has(e3) && e3.grabbable() && !e3.locked() && (n3.merge(e3), s2(e3));
  }, m2 = function(e3, t3) {
    if (e3.cy().hasCompoundNodes() && !(t3.inDragLayer == null && t3.addToList == null)) {
      var n3 = e3.descendants();
      t3.inDragLayer && (n3.forEach(l2), n3.connectedEdges().forEach(l2)), t3.addToList && p2(n3, t3);
    }
  }, h2 = function(t3, n3) {
    n3 || (n3 = {});
    var r3 = t3.cy().hasCompoundNodes();
    n3.inDragLayer && (t3.forEach(l2), t3.neighborhood().stdFilter(function(e3) {
      return !r3 || e3.isEdge();
    }).forEach(l2)), n3.addToList && t3.forEach(function(e3) {
      p2(e3, n3);
    }), m2(t3, n3), v2(t3, { inDragLayer: n3.inDragLayer }), e2.updateCachedGrabbedEles();
  }, g2 = h2, _2 = function(t3) {
    t3 && (e2.getCachedZSortedEles().forEach(function(e3) {
      c2(e3), u2(e3), f2(e3);
    }), e2.updateCachedGrabbedEles());
  }, v2 = function(e3, t3) {
    if (!(t3.inDragLayer == null && t3.addToList == null) && e3.cy().hasCompoundNodes()) {
      var n3 = e3.ancestors().orphans();
      if (!n3.same(e3)) {
        var r3 = n3.descendants().spawnSelf().merge(n3).unmerge(e3).unmerge(e3.descendants()), i3 = r3.connectedEdges();
        t3.inDragLayer && (i3.forEach(l2), r3.forEach(l2)), t3.addToList && r3.forEach(function(e4) {
          p2(e4, t3);
        });
      }
    }
  }, y2 = function() {
    document.activeElement != null && document.activeElement.blur != null && document.activeElement.blur();
  }, b2 = typeof MutationObserver < `u`, x2 = typeof ResizeObserver < `u`;
  b2 ? (e2.removeObserver = new MutationObserver(function(t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3].removedNodes;
      if (r3) {
        for (var i3 = 0; i3 < r3.length; i3++) if (r3[i3] === e2.container) {
          e2.destroy();
          break;
        }
      }
    }
  }), e2.container.parentNode && e2.removeObserver.observe(e2.container.parentNode, { childList: true })) : e2.registerBinding(e2.container, `DOMNodeRemoved`, function(t3) {
    e2.destroy();
  });
  var S2 = st(function() {
    e2.cy.resize();
  }, 100);
  b2 && (e2.styleObserver = new MutationObserver(S2), e2.styleObserver.observe(e2.container, { attributes: true })), e2.registerBinding(t2, `resize`, S2), x2 && (e2.resizeObserver = new ResizeObserver(S2), e2.resizeObserver.observe(e2.container));
  var C2 = function(e3, t3) {
    for (; e3 != null; ) t3(e3), e3 = e3.parentNode;
  }, w2 = function() {
    e2.invalidateContainerClientCoordsCache();
  };
  C2(e2.container, function(t3) {
    e2.registerBinding(t3, `transitionend`, w2), e2.registerBinding(t3, `animationend`, w2), e2.registerBinding(t3, `scroll`, w2);
  }), e2.registerBinding(e2.container, `contextmenu`, function(e3) {
    e3.preventDefault();
  });
  var T2 = function() {
    return e2.selection[4] !== 0;
  }, E2 = function(t3) {
    for (var n3 = e2.findContainerClientCoords(), r3 = n3[0], i3 = n3[1], a3 = n3[2], o3 = n3[3], s3 = t3.touches ? t3.touches : [t3], c3 = false, l3 = 0; l3 < s3.length; l3++) {
      var u3 = s3[l3];
      if (r3 <= u3.clientX && u3.clientX <= r3 + a3 && i3 <= u3.clientY && u3.clientY <= i3 + o3) {
        c3 = true;
        break;
      }
    }
    if (!c3) return false;
    for (var d3 = e2.container, f3 = t3.target.parentNode, p3 = false; f3; ) {
      if (f3 === d3) {
        p3 = true;
        break;
      }
      f3 = f3.parentNode;
    }
    return !!p3;
  };
  e2.registerBinding(e2.container, `mousedown`, function(t3) {
    if (E2(t3) && !(e2.hoverData.which === 1 && t3.which !== 1)) {
      t3.preventDefault(), y2(), e2.hoverData.capture = true, e2.hoverData.which = t3.which;
      var n3 = e2.cy, r3 = [t3.clientX, t3.clientY], a3 = e2.projectIntoViewport(r3[0], r3[1]), o3 = e2.selection, s3 = e2.findNearestElements(a3[0], a3[1], true, false), c3 = s3[0], l3 = e2.dragData.possibleDragElements;
      e2.hoverData.mdownPos = a3, e2.hoverData.mdownGPos = r3;
      var u3 = function(e3) {
        return { originalEvent: t3, type: e3, position: { x: a3[0], y: a3[1] } };
      }, f3 = function() {
        e2.hoverData.tapholdCancelled = false, clearTimeout(e2.hoverData.tapholdTimeout), e2.hoverData.tapholdTimeout = setTimeout(function() {
          if (!e2.hoverData.tapholdCancelled) {
            var t4 = e2.hoverData.down;
            t4 ? t4.emit(u3(`taphold`)) : n3.emit(u3(`taphold`));
          }
        }, e2.tapholdDuration);
      };
      if (t3.which == 3) {
        e2.hoverData.cxtStarted = true;
        var p3 = { originalEvent: t3, type: `cxttapstart`, position: { x: a3[0], y: a3[1] } };
        c3 ? (c3.activate(), c3.emit(p3), e2.hoverData.down = c3) : n3.emit(p3), e2.hoverData.downTime = (/* @__PURE__ */ new Date()).getTime(), e2.hoverData.cxtDragged = false;
      } else if (t3.which == 1) {
        if (c3 && c3.activate(), c3 != null && e2.nodeIsGrabbable(c3)) {
          var m3 = function(e3) {
            e3.emit(u3(`grab`));
          };
          if (d2(c3), !c3.selected()) l3 = e2.dragData.possibleDragElements = n3.collection(), g2(c3, { addToList: l3 }), c3.emit(u3(`grabon`)).emit(u3(`grab`));
          else {
            l3 = e2.dragData.possibleDragElements = n3.collection();
            var _3 = n3.$(function(t4) {
              return t4.isNode() && t4.selected() && e2.nodeIsGrabbable(t4);
            });
            h2(_3, { addToList: l3 }), c3.emit(u3(`grabon`)), _3.forEach(m3);
          }
          e2.redrawHint(`eles`, true), e2.redrawHint(`drag`, true);
        }
        e2.hoverData.down = c3, e2.hoverData.downs = s3, e2.hoverData.downTime = (/* @__PURE__ */ new Date()).getTime(), i2(c3, [`mousedown`, `tapstart`, `vmousedown`], t3, { x: a3[0], y: a3[1] }), c3 == null ? (o3[4] = 1, e2.data.bgActivePosistion = { x: a3[0], y: a3[1] }, e2.redrawHint(`select`, true), e2.redraw()) : c3.pannable() && (o3[4] = 1), f3();
      }
      o3[0] = o3[2] = a3[0], o3[1] = o3[3] = a3[1];
    }
  }, false);
  var D2 = r2(e2.container);
  e2.registerBinding([t2, D2], `mousemove`, function(t3) {
    if (!(!e2.hoverData.capture && !E2(t3))) {
      var n3 = false, r3 = e2.cy, s3 = r3.zoom(), c3 = [t3.clientX, t3.clientY], l3 = e2.projectIntoViewport(c3[0], c3[1]), u3 = e2.hoverData.mdownPos, d3 = e2.hoverData.mdownGPos, f3 = e2.selection, p3 = null;
      !e2.hoverData.draggingEles && !e2.hoverData.dragging && !e2.hoverData.selecting && (p3 = e2.findNearestElement(l3[0], l3[1], true, false));
      var m3 = e2.hoverData.last, g3 = e2.hoverData.down, v3 = [l3[0] - f3[2], l3[1] - f3[3]], y3 = e2.dragData.possibleDragElements, b3;
      if (d3) {
        var x3 = c3[0] - d3[0], S3 = x3 * x3, C3 = c3[1] - d3[1], w3 = S3 + C3 * C3;
        e2.hoverData.isOverThresholdDrag = b3 = w3 >= e2.desktopTapThreshold2;
      }
      var T3 = a2(t3);
      b3 && (e2.hoverData.tapholdCancelled = true);
      var D3 = function() {
        var t4 = e2.hoverData.dragDelta = e2.hoverData.dragDelta || [];
        t4.length === 0 ? (t4.push(v3[0]), t4.push(v3[1])) : (t4[0] += v3[0], t4[1] += v3[1]);
      };
      n3 = true, i2(p3, [`mousemove`, `vmousemove`, `tapdrag`], t3, { x: l3[0], y: l3[1] });
      var O3 = function(e3) {
        return { originalEvent: t3, type: e3, position: { x: l3[0], y: l3[1] } };
      }, k3 = function() {
        e2.data.bgActivePosistion = void 0, e2.hoverData.selecting || r3.emit(O3(`boxstart`)), f3[4] = 1, e2.hoverData.selecting = true, e2.redrawHint(`select`, true), e2.redraw();
      };
      if (e2.hoverData.which === 3) {
        if (b3) {
          var j3 = O3(`cxtdrag`);
          g3 ? g3.emit(j3) : r3.emit(j3), e2.hoverData.cxtDragged = true, (!e2.hoverData.cxtOver || p3 !== e2.hoverData.cxtOver) && (e2.hoverData.cxtOver && e2.hoverData.cxtOver.emit(O3(`cxtdragout`)), e2.hoverData.cxtOver = p3, p3 && p3.emit(O3(`cxtdragover`)));
        }
      } else if (e2.hoverData.dragging) {
        if (n3 = true, r3.panningEnabled() && r3.userPanningEnabled()) {
          var M3;
          if (e2.hoverData.justStartedPan) {
            var N3 = e2.hoverData.mdownPos;
            M3 = { x: (l3[0] - N3[0]) * s3, y: (l3[1] - N3[1]) * s3 }, e2.hoverData.justStartedPan = false;
          } else M3 = { x: v3[0] * s3, y: v3[1] * s3 };
          r3.panBy(M3), r3.emit(O3(`dragpan`)), e2.hoverData.dragged = true;
        }
        l3 = e2.projectIntoViewport(t3.clientX, t3.clientY);
      } else if (f3[4] == 1 && (g3 == null || g3.pannable())) b3 && (!e2.hoverData.dragging && r3.boxSelectionEnabled() && (T3 || !r3.panningEnabled() || !r3.userPanningEnabled()) ? k3() : !e2.hoverData.selecting && r3.panningEnabled() && r3.userPanningEnabled() && o2(g3, e2.hoverData.downs) && (e2.hoverData.dragging = true, e2.hoverData.justStartedPan = true, f3[4] = 0, e2.data.bgActivePosistion = jn(u3), e2.redrawHint(`select`, true), e2.redraw()), g3 && g3.pannable() && g3.active() && g3.unactivate());
      else {
        if (g3 && g3.pannable() && g3.active() && g3.unactivate(), (!g3 || !g3.grabbed()) && p3 != m3 && (m3 && i2(m3, [`mouseout`, `tapdragout`], t3, { x: l3[0], y: l3[1] }), p3 && i2(p3, [`mouseover`, `tapdragover`], t3, { x: l3[0], y: l3[1] }), e2.hoverData.last = p3), g3) if (b3) {
          if (r3.boxSelectionEnabled() && T3) g3 && g3.grabbed() && (_2(y3), g3.emit(O3(`freeon`)), y3.emit(O3(`free`)), e2.dragData.didDrag && (g3.emit(O3(`dragfreeon`)), y3.emit(O3(`dragfree`)))), k3();
          else if (g3 && g3.grabbed() && e2.nodeIsDraggable(g3)) {
            var P3 = !e2.dragData.didDrag;
            P3 && e2.redrawHint(`eles`, true), e2.dragData.didDrag = true, e2.hoverData.draggingEles || h2(y3, { inDragLayer: true });
            var F3 = { x: 0, y: 0 };
            if (A(v3[0]) && A(v3[1]) && (F3.x += v3[0], F3.y += v3[1], P3)) {
              var I3 = e2.hoverData.dragDelta;
              I3 && A(I3[0]) && A(I3[1]) && (F3.x += I3[0], F3.y += I3[1]);
            }
            e2.hoverData.draggingEles = true, y3.silentShift(F3).emit(O3(`position`)).emit(O3(`drag`)), e2.redrawHint(`drag`, true), e2.redraw();
          }
        } else D3();
        n3 = true;
      }
      if (f3[2] = l3[0], f3[3] = l3[1], n3) return t3.stopPropagation && t3.stopPropagation(), t3.preventDefault && t3.preventDefault(), false;
    }
  }, false);
  var O2, k2, j2;
  e2.registerBinding(t2, `mouseup`, function(t3) {
    if (!(e2.hoverData.which === 1 && t3.which !== 1 && e2.hoverData.capture) && e2.hoverData.capture) {
      e2.hoverData.capture = false;
      var r3 = e2.cy, o3 = e2.projectIntoViewport(t3.clientX, t3.clientY), s3 = e2.selection, c3 = e2.findNearestElement(o3[0], o3[1], true, false), l3 = e2.dragData.possibleDragElements, u3 = e2.hoverData.down, d3 = a2(t3);
      e2.data.bgActivePosistion && (e2.redrawHint(`select`, true), e2.redraw()), e2.hoverData.tapholdCancelled = true, e2.data.bgActivePosistion = void 0, u3 && u3.unactivate();
      var f3 = function(e3) {
        return { originalEvent: t3, type: e3, position: { x: o3[0], y: o3[1] } };
      };
      if (e2.hoverData.which === 3) {
        var p3 = f3(`cxttapend`);
        if (u3 ? u3.emit(p3) : r3.emit(p3), !e2.hoverData.cxtDragged) {
          var m3 = f3(`cxttap`);
          u3 ? u3.emit(m3) : r3.emit(m3);
        }
        e2.hoverData.cxtDragged = false, e2.hoverData.which = null;
      } else if (e2.hoverData.which === 1) {
        if (i2(c3, [`mouseup`, `tapend`, `vmouseup`], t3, { x: o3[0], y: o3[1] }), !e2.dragData.didDrag && !e2.hoverData.dragged && !e2.hoverData.selecting && !e2.hoverData.isOverThresholdDrag && (i2(u3, [`click`, `tap`, `vclick`], t3, { x: o3[0], y: o3[1] }), k2 = false, t3.timeStamp - j2 <= r3.multiClickDebounceTime() ? (O2 && clearTimeout(O2), k2 = true, j2 = null, i2(u3, [`dblclick`, `dbltap`, `vdblclick`], t3, { x: o3[0], y: o3[1] })) : (O2 = setTimeout(function() {
          k2 || i2(u3, [`oneclick`, `onetap`, `voneclick`], t3, { x: o3[0], y: o3[1] });
        }, r3.multiClickDebounceTime()), j2 = t3.timeStamp)), u3 == null && !e2.dragData.didDrag && !e2.hoverData.selecting && !e2.hoverData.dragged && !a2(t3) && (r3.$(n2).unselect([`tapunselect`]), l3.length > 0 && e2.redrawHint(`eles`, true), e2.dragData.possibleDragElements = l3 = r3.collection()), c3 == u3 && !e2.dragData.didDrag && !e2.hoverData.selecting && c3 != null && c3._private.selectable && (e2.hoverData.dragging || (r3.selectionType() === `additive` || d3 ? c3.selected() ? c3.unselect([`tapunselect`]) : c3.select([`tapselect`]) : d3 || (r3.$(n2).unmerge(c3).unselect([`tapunselect`]), c3.select([`tapselect`]))), e2.redrawHint(`eles`, true)), e2.hoverData.selecting) {
          var h3 = r3.collection(e2.getAllInBox(s3[0], s3[1], s3[2], s3[3]));
          e2.redrawHint(`select`, true), h3.length > 0 && e2.redrawHint(`eles`, true), r3.emit(f3(`boxend`)), r3.selectionType() === `additive` || d3 || r3.$(n2).unmerge(h3).unselect(), h3.emit(f3(`box`)).stdFilter(function(e3) {
            return e3.selectable() && !e3.selected();
          }).select().emit(f3(`boxselect`)), e2.redraw();
        }
        if (e2.hoverData.dragging && (e2.hoverData.dragging = false, e2.redrawHint(`select`, true), e2.redrawHint(`eles`, true), e2.redraw()), !s3[4]) {
          e2.redrawHint(`drag`, true), e2.redrawHint(`eles`, true);
          var g3 = u3 && u3.grabbed();
          _2(l3), g3 && (u3.emit(f3(`freeon`)), l3.emit(f3(`free`)), e2.dragData.didDrag && (u3.emit(f3(`dragfreeon`)), l3.emit(f3(`dragfree`))));
        }
      }
      s3[4] = 0, e2.hoverData.down = null, e2.hoverData.cxtStarted = false, e2.hoverData.draggingEles = false, e2.hoverData.selecting = false, e2.hoverData.isOverThresholdDrag = false, e2.dragData.didDrag = false, e2.hoverData.dragged = false, e2.hoverData.dragDelta = [], e2.hoverData.mdownPos = null, e2.hoverData.mdownGPos = null, e2.hoverData.which = null;
    }
  }, false);
  var M2 = [], N2 = 4, P2, F2 = 1e5, I2 = function(e3, t3) {
    for (var n3 = 0; n3 < e3.length; n3++) if (e3[n3] % t3 !== 0) return false;
    return true;
  }, L2 = function(e3) {
    for (var t3 = Math.abs(e3[0]), n3 = 1; n3 < e3.length; n3++) if (Math.abs(e3[n3]) !== t3) return false;
    return true;
  }, R2 = function(t3) {
    var n3 = false, r3 = t3.deltaY;
    if (r3 ?? (t3.wheelDeltaY == null ? t3.wheelDelta != null && (r3 = t3.wheelDelta / 4) : r3 = t3.wheelDeltaY / 4), r3 !== 0) {
      if (P2 == null) if (M2.length >= N2) {
        var i3 = M2;
        if (P2 = I2(i3, 5), !P2) {
          var a3 = Math.abs(i3[0]);
          P2 = L2(i3) && a3 > 5;
        }
        if (P2) for (var o3 = 0; o3 < i3.length; o3++) F2 = Math.min(Math.abs(i3[o3]), F2);
      } else M2.push(r3), n3 = true;
      else P2 && (F2 = Math.min(Math.abs(r3), F2));
      if (!e2.scrollingPage) {
        var s3 = e2.cy, c3 = s3.zoom(), l3 = s3.pan(), u3 = e2.projectIntoViewport(t3.clientX, t3.clientY), d3 = [u3[0] * c3 + l3.x, u3[1] * c3 + l3.y];
        if (e2.hoverData.draggingEles || e2.hoverData.dragging || e2.hoverData.cxtStarted || T2()) {
          t3.preventDefault();
          return;
        }
        if (s3.panningEnabled() && s3.userPanningEnabled() && s3.zoomingEnabled() && s3.userZoomingEnabled()) {
          t3.preventDefault(), e2.data.wheelZooming = true, clearTimeout(e2.data.wheelTimeout), e2.data.wheelTimeout = setTimeout(function() {
            e2.data.wheelZooming = false, e2.redrawHint(`eles`, true), e2.redraw();
          }, 150);
          var f3;
          n3 && Math.abs(r3) > 5 && (r3 = zn(r3) * 5), f3 = r3 / -250, P2 && (f3 /= F2, f3 *= 3), f3 *= e2.wheelSensitivity, t3.deltaMode === 1 && (f3 *= 33);
          var p3 = s3.zoom() * 10 ** f3;
          t3.type === `gesturechange` && (p3 = e2.gestureStartZoom * t3.scale), s3.zoom({ level: p3, renderedPosition: { x: d3[0], y: d3[1] } }), s3.emit({ type: t3.type === `gesturechange` ? `pinchzoom` : `scrollzoom`, originalEvent: t3, position: { x: u3[0], y: u3[1] } });
        }
      }
    }
  };
  e2.registerBinding(e2.container, `wheel`, R2, true), e2.registerBinding(t2, `scroll`, function(t3) {
    e2.scrollingPage = true, clearTimeout(e2.scrollingPageTimeout), e2.scrollingPageTimeout = setTimeout(function() {
      e2.scrollingPage = false;
    }, 250);
  }, true), e2.registerBinding(e2.container, `gesturestart`, function(t3) {
    e2.gestureStartZoom = e2.cy.zoom(), e2.hasTouchStarted || t3.preventDefault();
  }, true), e2.registerBinding(e2.container, `gesturechange`, function(t3) {
    e2.hasTouchStarted || R2(t3);
  }, true), e2.registerBinding(e2.container, `mouseout`, function(t3) {
    var n3 = e2.projectIntoViewport(t3.clientX, t3.clientY);
    e2.cy.emit({ originalEvent: t3, type: `mouseout`, position: { x: n3[0], y: n3[1] } });
  }, false), e2.registerBinding(e2.container, `mouseover`, function(t3) {
    var n3 = e2.projectIntoViewport(t3.clientX, t3.clientY);
    e2.cy.emit({ originalEvent: t3, type: `mouseover`, position: { x: n3[0], y: n3[1] } });
  }, false);
  var z2, B2, V2, H2, U2, W2, G2, K2, q2, J2, ee2, Y2, te2, ne2 = function(e3, t3, n3, r3) {
    return Math.sqrt((n3 - e3) * (n3 - e3) + (r3 - t3) * (r3 - t3));
  }, re2 = function(e3, t3, n3, r3) {
    return (n3 - e3) * (n3 - e3) + (r3 - t3) * (r3 - t3);
  }, ie2;
  e2.registerBinding(e2.container, `touchstart`, ie2 = function(t3) {
    if (e2.hasTouchStarted = true, E2(t3)) {
      y2(), e2.touchData.capture = true, e2.data.bgActivePosistion = void 0;
      var n3 = e2.cy, r3 = e2.touchData.now, a3 = e2.touchData.earlier;
      if (t3.touches[0]) {
        var o3 = e2.projectIntoViewport(t3.touches[0].clientX, t3.touches[0].clientY);
        r3[0] = o3[0], r3[1] = o3[1];
      }
      if (t3.touches[1]) {
        var o3 = e2.projectIntoViewport(t3.touches[1].clientX, t3.touches[1].clientY);
        r3[2] = o3[0], r3[3] = o3[1];
      }
      if (t3.touches[2]) {
        var o3 = e2.projectIntoViewport(t3.touches[2].clientX, t3.touches[2].clientY);
        r3[4] = o3[0], r3[5] = o3[1];
      }
      var s3 = function(e3) {
        return { originalEvent: t3, type: e3, position: { x: r3[0], y: r3[1] } };
      };
      if (t3.touches[1]) {
        e2.touchData.singleTouchMoved = true, _2(e2.dragData.touchDragEles);
        var c3 = e2.findContainerClientCoords();
        q2 = c3[0], J2 = c3[1], ee2 = c3[2], Y2 = c3[3], z2 = t3.touches[0].clientX - q2, B2 = t3.touches[0].clientY - J2, V2 = t3.touches[1].clientX - q2, H2 = t3.touches[1].clientY - J2, te2 = 0 <= z2 && z2 <= ee2 && 0 <= V2 && V2 <= ee2 && 0 <= B2 && B2 <= Y2 && 0 <= H2 && H2 <= Y2;
        var l3 = n3.pan(), u3 = n3.zoom();
        U2 = ne2(z2, B2, V2, H2), W2 = re2(z2, B2, V2, H2), G2 = [(z2 + V2) / 2, (B2 + H2) / 2], K2 = [(G2[0] - l3.x) / u3, (G2[1] - l3.y) / u3];
        var f3 = 200, p3 = f3 * f3;
        if (W2 < p3 && !t3.touches[2]) {
          var m3 = e2.findNearestElement(r3[0], r3[1], true, true), v3 = e2.findNearestElement(r3[2], r3[3], true, true);
          m3 && m3.isNode() ? (m3.activate().emit(s3(`cxttapstart`)), e2.touchData.start = m3) : v3 && v3.isNode() ? (v3.activate().emit(s3(`cxttapstart`)), e2.touchData.start = v3) : n3.emit(s3(`cxttapstart`)), e2.touchData.start && (e2.touchData.start._private.grabbed = false), e2.touchData.cxt = true, e2.touchData.cxtDragged = false, e2.data.bgActivePosistion = void 0, e2.redraw();
          return;
        }
      }
      if (t3.touches[2]) n3.boxSelectionEnabled() && t3.preventDefault();
      else if (!t3.touches[1] && t3.touches[0]) {
        var b3 = e2.findNearestElements(r3[0], r3[1], true, true), x3 = b3[0];
        if (x3 != null && (x3.activate(), e2.touchData.start = x3, e2.touchData.starts = b3, e2.nodeIsGrabbable(x3))) {
          var S3 = e2.dragData.touchDragEles = n3.collection(), C3 = null;
          e2.redrawHint(`eles`, true), e2.redrawHint(`drag`, true), x3.selected() ? (C3 = n3.$(function(t4) {
            return t4.selected() && e2.nodeIsGrabbable(t4);
          }), h2(C3, { addToList: S3 })) : g2(x3, { addToList: S3 }), d2(x3), x3.emit(s3(`grabon`)), C3 ? C3.forEach(function(e3) {
            e3.emit(s3(`grab`));
          }) : x3.emit(s3(`grab`));
        }
        i2(x3, [`touchstart`, `tapstart`, `vmousedown`], t3, { x: r3[0], y: r3[1] }), x3 ?? (e2.data.bgActivePosistion = { x: o3[0], y: o3[1] }, e2.redrawHint(`select`, true), e2.redraw()), e2.touchData.singleTouchMoved = false, e2.touchData.singleTouchStartTime = +/* @__PURE__ */ new Date(), clearTimeout(e2.touchData.tapholdTimeout), e2.touchData.tapholdTimeout = setTimeout(function() {
          e2.touchData.singleTouchMoved === false && !e2.pinching && !e2.touchData.selecting && i2(e2.touchData.start, [`taphold`], t3, { x: r3[0], y: r3[1] });
        }, e2.tapholdDuration);
      }
      if (t3.touches.length >= 1) {
        for (var w3 = e2.touchData.startPosition = [null, null, null, null, null, null], T3 = 0; T3 < r3.length; T3++) w3[T3] = a3[T3] = r3[T3];
        var D3 = t3.touches[0];
        e2.touchData.startGPosition = [D3.clientX, D3.clientY];
      }
    }
  }, false);
  var ae2;
  e2.registerBinding(t2, `touchmove`, ae2 = function(t3) {
    var n3 = e2.touchData.capture;
    if (!(!n3 && !E2(t3))) {
      var r3 = e2.selection, a3 = e2.cy, s3 = e2.touchData.now, c3 = e2.touchData.earlier, l3 = a3.zoom();
      if (t3.touches[0]) {
        var u3 = e2.projectIntoViewport(t3.touches[0].clientX, t3.touches[0].clientY);
        s3[0] = u3[0], s3[1] = u3[1];
      }
      if (t3.touches[1]) {
        var u3 = e2.projectIntoViewport(t3.touches[1].clientX, t3.touches[1].clientY);
        s3[2] = u3[0], s3[3] = u3[1];
      }
      if (t3.touches[2]) {
        var u3 = e2.projectIntoViewport(t3.touches[2].clientX, t3.touches[2].clientY);
        s3[4] = u3[0], s3[5] = u3[1];
      }
      var d3 = function(e3) {
        return { originalEvent: t3, type: e3, position: { x: s3[0], y: s3[1] } };
      }, f3 = e2.touchData.startGPosition, p3;
      if (n3 && t3.touches[0] && f3) {
        for (var m3 = [], g3 = 0; g3 < s3.length; g3++) m3[g3] = s3[g3] - c3[g3];
        var v3 = t3.touches[0].clientX - f3[0], y3 = v3 * v3, b3 = t3.touches[0].clientY - f3[1];
        p3 = y3 + b3 * b3 >= e2.touchTapThreshold2;
      }
      if (n3 && e2.touchData.cxt) {
        t3.preventDefault();
        var x3 = t3.touches[0].clientX - q2, S3 = t3.touches[0].clientY - J2, C3 = t3.touches[1].clientX - q2, w3 = t3.touches[1].clientY - J2, T3 = re2(x3, S3, C3, w3), D3 = T3 / W2, O3 = 150, k3 = O3 * O3, j3 = 1.5;
        if (D3 >= j3 * j3 || T3 >= k3) {
          e2.touchData.cxt = false, e2.data.bgActivePosistion = void 0, e2.redrawHint(`select`, true);
          var M3 = d3(`cxttapend`);
          e2.touchData.start ? (e2.touchData.start.unactivate().emit(M3), e2.touchData.start = null) : a3.emit(M3);
        }
      }
      if (n3 && e2.touchData.cxt) {
        var M3 = d3(`cxtdrag`);
        e2.data.bgActivePosistion = void 0, e2.redrawHint(`select`, true), e2.touchData.start ? e2.touchData.start.emit(M3) : a3.emit(M3), e2.touchData.start && (e2.touchData.start._private.grabbed = false), e2.touchData.cxtDragged = true;
        var N3 = e2.findNearestElement(s3[0], s3[1], true, true);
        (!e2.touchData.cxtOver || N3 !== e2.touchData.cxtOver) && (e2.touchData.cxtOver && e2.touchData.cxtOver.emit(d3(`cxtdragout`)), e2.touchData.cxtOver = N3, N3 && N3.emit(d3(`cxtdragover`)));
      } else if (n3 && t3.touches[2] && a3.boxSelectionEnabled()) t3.preventDefault(), e2.data.bgActivePosistion = void 0, this.lastThreeTouch = +/* @__PURE__ */ new Date(), e2.touchData.selecting || a3.emit(d3(`boxstart`)), e2.touchData.selecting = true, e2.touchData.didSelect = true, r3[4] = 1, !r3 || r3.length === 0 || r3[0] === void 0 ? (r3[0] = (s3[0] + s3[2] + s3[4]) / 3, r3[1] = (s3[1] + s3[3] + s3[5]) / 3, r3[2] = (s3[0] + s3[2] + s3[4]) / 3 + 1, r3[3] = (s3[1] + s3[3] + s3[5]) / 3 + 1) : (r3[2] = (s3[0] + s3[2] + s3[4]) / 3, r3[3] = (s3[1] + s3[3] + s3[5]) / 3), e2.redrawHint(`select`, true), e2.redraw();
      else if (n3 && t3.touches[1] && !e2.touchData.didSelect && a3.zoomingEnabled() && a3.panningEnabled() && a3.userZoomingEnabled() && a3.userPanningEnabled()) {
        t3.preventDefault(), e2.data.bgActivePosistion = void 0, e2.redrawHint(`select`, true);
        var P3 = e2.dragData.touchDragEles;
        if (P3) {
          e2.redrawHint(`drag`, true);
          for (var F3 = 0; F3 < P3.length; F3++) {
            var I3 = P3[F3]._private;
            I3.grabbed = false, I3.rscratch.inDragLayer = false;
          }
        }
        var L3 = e2.touchData.start, x3 = t3.touches[0].clientX - q2, S3 = t3.touches[0].clientY - J2, C3 = t3.touches[1].clientX - q2, w3 = t3.touches[1].clientY - J2, R3 = ne2(x3, S3, C3, w3), G3 = R3 / U2;
        if (te2) {
          var ee3 = x3 - z2, Y3 = S3 - B2, ie3 = C3 - V2, ae3 = w3 - H2, oe3 = (ee3 + ie3) / 2, se3 = (Y3 + ae3) / 2, ce3 = a3.zoom(), X3 = ce3 * G3, le3 = a3.pan(), ue3 = K2[0] * ce3 + le3.x, de3 = K2[1] * ce3 + le3.y, fe3 = { x: -X3 / ce3 * (ue3 - le3.x - oe3) + ue3, y: -X3 / ce3 * (de3 - le3.y - se3) + de3 };
          if (L3 && L3.active()) {
            var P3 = e2.dragData.touchDragEles;
            _2(P3), e2.redrawHint(`drag`, true), e2.redrawHint(`eles`, true), L3.unactivate().emit(d3(`freeon`)), P3.emit(d3(`free`)), e2.dragData.didDrag && (L3.emit(d3(`dragfreeon`)), P3.emit(d3(`dragfree`)));
          }
          a3.viewport({ zoom: X3, pan: fe3, cancelOnFailedZoom: true }), a3.emit(d3(`pinchzoom`)), U2 = R3, z2 = x3, B2 = S3, V2 = C3, H2 = w3, e2.pinching = true;
        }
        if (t3.touches[0]) {
          var u3 = e2.projectIntoViewport(t3.touches[0].clientX, t3.touches[0].clientY);
          s3[0] = u3[0], s3[1] = u3[1];
        }
        if (t3.touches[1]) {
          var u3 = e2.projectIntoViewport(t3.touches[1].clientX, t3.touches[1].clientY);
          s3[2] = u3[0], s3[3] = u3[1];
        }
        if (t3.touches[2]) {
          var u3 = e2.projectIntoViewport(t3.touches[2].clientX, t3.touches[2].clientY);
          s3[4] = u3[0], s3[5] = u3[1];
        }
      } else if (t3.touches[0] && !e2.touchData.didSelect) {
        var pe3 = e2.touchData.start, me3 = e2.touchData.last, N3;
        if (!e2.hoverData.draggingEles && !e2.swipePanning && (N3 = e2.findNearestElement(s3[0], s3[1], true, true)), n3 && pe3 != null && t3.preventDefault(), n3 && pe3 != null && e2.nodeIsDraggable(pe3)) if (p3) {
          var P3 = e2.dragData.touchDragEles, he3 = !e2.dragData.didDrag;
          he3 && h2(P3, { inDragLayer: true }), e2.dragData.didDrag = true;
          var ge3 = { x: 0, y: 0 };
          if (A(m3[0]) && A(m3[1]) && (ge3.x += m3[0], ge3.y += m3[1], he3)) {
            e2.redrawHint(`eles`, true);
            var _e3 = e2.touchData.dragDelta;
            _e3 && A(_e3[0]) && A(_e3[1]) && (ge3.x += _e3[0], ge3.y += _e3[1]);
          }
          e2.hoverData.draggingEles = true, P3.silentShift(ge3).emit(d3(`position`)).emit(d3(`drag`)), e2.redrawHint(`drag`, true), e2.touchData.startPosition[0] == c3[0] && e2.touchData.startPosition[1] == c3[1] && e2.redrawHint(`eles`, true), e2.redraw();
        } else {
          var _e3 = e2.touchData.dragDelta = e2.touchData.dragDelta || [];
          _e3.length === 0 ? (_e3.push(m3[0]), _e3.push(m3[1])) : (_e3[0] += m3[0], _e3[1] += m3[1]);
        }
        if (i2(pe3 || N3, [`touchmove`, `tapdrag`, `vmousemove`], t3, { x: s3[0], y: s3[1] }), (!pe3 || !pe3.grabbed()) && N3 != me3 && (me3 && me3.emit(d3(`tapdragout`)), N3 && N3.emit(d3(`tapdragover`))), e2.touchData.last = N3, n3) for (var F3 = 0; F3 < s3.length; F3++) s3[F3] && e2.touchData.startPosition[F3] && p3 && (e2.touchData.singleTouchMoved = true);
        if (n3 && (pe3 == null || pe3.pannable()) && a3.panningEnabled() && a3.userPanningEnabled()) {
          o2(pe3, e2.touchData.starts) && (t3.preventDefault(), e2.data.bgActivePosistion || (e2.data.bgActivePosistion = jn(e2.touchData.startPosition)), e2.swipePanning ? (a3.panBy({ x: m3[0] * l3, y: m3[1] * l3 }), a3.emit(d3(`dragpan`))) : p3 && (e2.swipePanning = true, a3.panBy({ x: v3 * l3, y: b3 * l3 }), a3.emit(d3(`dragpan`)), pe3 && (pe3.unactivate(), e2.redrawHint(`select`, true), e2.touchData.start = null)));
          var u3 = e2.projectIntoViewport(t3.touches[0].clientX, t3.touches[0].clientY);
          s3[0] = u3[0], s3[1] = u3[1];
        }
      }
      for (var g3 = 0; g3 < s3.length; g3++) c3[g3] = s3[g3];
      n3 && t3.touches.length > 0 && !e2.hoverData.draggingEles && !e2.swipePanning && e2.data.bgActivePosistion != null && (e2.data.bgActivePosistion = void 0, e2.redrawHint(`select`, true), e2.redraw());
    }
  }, false);
  var oe2;
  e2.registerBinding(t2, `touchcancel`, oe2 = function(t3) {
    var n3 = e2.touchData.start;
    e2.touchData.capture = false, n3 && n3.unactivate();
  });
  var se2, ce2, X2, le2;
  if (e2.registerBinding(t2, `touchend`, se2 = function(t3) {
    var r3 = e2.touchData.start;
    if (e2.touchData.capture) t3.touches.length === 0 && (e2.touchData.capture = false), t3.preventDefault();
    else return;
    var a3 = e2.selection;
    e2.swipePanning = false, e2.hoverData.draggingEles = false;
    var o3 = e2.cy, s3 = o3.zoom(), c3 = e2.touchData.now, l3 = e2.touchData.earlier;
    if (t3.touches[0]) {
      var u3 = e2.projectIntoViewport(t3.touches[0].clientX, t3.touches[0].clientY);
      c3[0] = u3[0], c3[1] = u3[1];
    }
    if (t3.touches[1]) {
      var u3 = e2.projectIntoViewport(t3.touches[1].clientX, t3.touches[1].clientY);
      c3[2] = u3[0], c3[3] = u3[1];
    }
    if (t3.touches[2]) {
      var u3 = e2.projectIntoViewport(t3.touches[2].clientX, t3.touches[2].clientY);
      c3[4] = u3[0], c3[5] = u3[1];
    }
    var d3 = function(e3) {
      return { originalEvent: t3, type: e3, position: { x: c3[0], y: c3[1] } };
    };
    r3 && r3.unactivate();
    var f3;
    if (e2.touchData.cxt) {
      if (f3 = d3(`cxttapend`), r3 ? r3.emit(f3) : o3.emit(f3), !e2.touchData.cxtDragged) {
        var p3 = d3(`cxttap`);
        r3 ? r3.emit(p3) : o3.emit(p3);
      }
      e2.touchData.start && (e2.touchData.start._private.grabbed = false), e2.touchData.cxt = false, e2.touchData.start = null, e2.redraw();
      return;
    }
    if (!t3.touches[2] && o3.boxSelectionEnabled() && e2.touchData.selecting) {
      e2.touchData.selecting = false;
      var m3 = o3.collection(e2.getAllInBox(a3[0], a3[1], a3[2], a3[3]));
      a3[0] = void 0, a3[1] = void 0, a3[2] = void 0, a3[3] = void 0, a3[4] = 0, e2.redrawHint(`select`, true), o3.emit(d3(`boxend`)), m3.emit(d3(`box`)).stdFilter(function(e3) {
        return e3.selectable() && !e3.selected();
      }).select().emit(d3(`boxselect`)), m3.nonempty() && e2.redrawHint(`eles`, true), e2.redraw();
    }
    if (r3 == null ? void 0 : r3.unactivate(), t3.touches[2]) e2.data.bgActivePosistion = void 0, e2.redrawHint(`select`, true);
    else if (!t3.touches[1] && !t3.touches[0] && !t3.touches[0]) {
      e2.data.bgActivePosistion = void 0, e2.redrawHint(`select`, true);
      var h3 = e2.dragData.touchDragEles;
      if (r3 != null) {
        var g3 = r3._private.grabbed;
        _2(h3), e2.redrawHint(`drag`, true), e2.redrawHint(`eles`, true), g3 && (r3.emit(d3(`freeon`)), h3.emit(d3(`free`)), e2.dragData.didDrag && (r3.emit(d3(`dragfreeon`)), h3.emit(d3(`dragfree`)))), i2(r3, [`touchend`, `tapend`, `vmouseup`, `tapdragout`], t3, { x: c3[0], y: c3[1] }), r3.unactivate(), e2.touchData.start = null;
      } else i2(e2.findNearestElement(c3[0], c3[1], true, true), [`touchend`, `tapend`, `vmouseup`, `tapdragout`], t3, { x: c3[0], y: c3[1] });
      var v3 = e2.touchData.startPosition[0] - c3[0], y3 = v3 * v3, b3 = e2.touchData.startPosition[1] - c3[1], x3 = (y3 + b3 * b3) * s3 * s3;
      e2.touchData.singleTouchMoved || (r3 || o3.$(`:selected`).unselect([`tapunselect`]), i2(r3, [`tap`, `vclick`], t3, { x: c3[0], y: c3[1] }), ce2 = false, t3.timeStamp - le2 <= o3.multiClickDebounceTime() ? (X2 && clearTimeout(X2), ce2 = true, le2 = null, i2(r3, [`dbltap`, `vdblclick`], t3, { x: c3[0], y: c3[1] })) : (X2 = setTimeout(function() {
        ce2 || i2(r3, [`onetap`, `voneclick`], t3, { x: c3[0], y: c3[1] });
      }, o3.multiClickDebounceTime()), le2 = t3.timeStamp)), r3 != null && !e2.dragData.didDrag && r3._private.selectable && x3 < e2.touchTapThreshold2 && !e2.pinching && (o3.selectionType() === `single` ? (o3.$(n2).unmerge(r3).unselect([`tapunselect`]), r3.select([`tapselect`])) : r3.selected() ? r3.unselect([`tapunselect`]) : r3.select([`tapselect`]), e2.redrawHint(`eles`, true)), e2.touchData.singleTouchMoved = true;
    }
    for (var S3 = 0; S3 < c3.length; S3++) l3[S3] = c3[S3];
    e2.dragData.didDrag = false, t3.touches.length === 0 && (e2.touchData.dragDelta = [], e2.touchData.startPosition = [null, null, null, null, null, null], e2.touchData.startGPosition = null, e2.touchData.didSelect = false), t3.touches.length < 2 && (t3.touches.length === 1 && (e2.touchData.startGPosition = [t3.touches[0].clientX, t3.touches[0].clientY]), e2.pinching = false, e2.redrawHint(`eles`, true), e2.redraw());
  }, false), typeof TouchEvent > `u`) {
    var ue2 = [], de2 = function(e3) {
      return { clientX: e3.clientX, clientY: e3.clientY, force: 1, identifier: e3.pointerId, pageX: e3.pageX, pageY: e3.pageY, radiusX: e3.width / 2, radiusY: e3.height / 2, screenX: e3.screenX, screenY: e3.screenY, target: e3.target };
    }, fe2 = function(e3) {
      return { event: e3, touch: de2(e3) };
    }, pe2 = function(e3) {
      ue2.push(fe2(e3));
    }, me2 = function(e3) {
      for (var t3 = 0; t3 < ue2.length; t3++) if (ue2[t3].event.pointerId === e3.pointerId) {
        ue2.splice(t3, 1);
        return;
      }
    }, he2 = function(e3) {
      var t3 = ue2.filter(function(t4) {
        return t4.event.pointerId === e3.pointerId;
      })[0];
      t3.event = e3, t3.touch = de2(e3);
    }, ge2 = function(e3) {
      e3.touches = ue2.map(function(e4) {
        return e4.touch;
      });
    }, _e2 = function(e3) {
      return e3.pointerType === `mouse` || e3.pointerType === 4;
    };
    e2.registerBinding(e2.container, `pointerdown`, function(e3) {
      _e2(e3) || (e3.preventDefault(), pe2(e3), ge2(e3), ie2(e3));
    }), e2.registerBinding(e2.container, `pointerup`, function(e3) {
      _e2(e3) || (me2(e3), ge2(e3), se2(e3));
    }), e2.registerBinding(e2.container, `pointercancel`, function(e3) {
      _e2(e3) || (me2(e3), ge2(e3), oe2(e3));
    }), e2.registerBinding(e2.container, `pointermove`, function(e3) {
      _e2(e3) || (e3.preventDefault(), he2(e3), ge2(e3), ae2(e3));
    });
  }
};
var Hf = {};
Hf.generatePolygon = function(e2, t2) {
  return this.nodeShapes[e2] = { renderer: this, name: e2, points: t2, draw: function(e3, t3, n2, r2, i2, a2) {
    this.renderer.nodeShapeImpl(`polygon`, e3, t3, n2, r2, i2, this.points);
  }, intersectLine: function(e3, t3, n2, r2, i2, a2, o2, s2) {
    return Er(i2, a2, this.points, e3, t3, n2 / 2, r2 / 2, o2);
  }, checkPoint: function(e3, t3, n2, r2, i2, a2, o2, s2) {
    return gr(e3, t3, this.points, a2, o2, r2, i2, [0, -1], n2);
  }, hasMiterBounds: e2 !== `rectangle`, miterBounds: function(e3, t3, n2, r2, i2, a2) {
    return sr(this.points, e3, t3, n2, r2, i2);
  } };
}, Hf.generateEllipse = function() {
  return this.nodeShapes.ellipse = { renderer: this, name: `ellipse`, draw: function(e2, t2, n2, r2, i2, a2) {
    this.renderer.nodeShapeImpl(this.name, e2, t2, n2, r2, i2);
  }, intersectLine: function(e2, t2, n2, r2, i2, a2, o2, s2) {
    return br(i2, a2, e2, t2, n2 / 2 + o2, r2 / 2 + o2);
  }, checkPoint: function(e2, t2, n2, r2, i2, a2, o2, s2) {
    return xr(e2, t2, r2, i2, a2, o2, n2);
  } };
}, Hf.generateRoundPolygon = function(e2, t2) {
  return this.nodeShapes[e2] = { renderer: this, name: e2, points: t2, getOrCreateCorners: function(e3, n2, r2, i2, a2, o2, s2) {
    if (o2[s2] !== void 0 && o2[s2 + `-cx`] === e3 && o2[s2 + `-cy`] === n2) return o2[s2];
    o2[s2] = Array(t2.length / 2), o2[s2 + `-cx`] = e3, o2[s2 + `-cy`] = n2;
    var c2 = r2 / 2, l2 = i2 / 2;
    a2 = a2 === `auto` ? Nr(r2, i2) : a2;
    for (var u2 = Array(t2.length / 2), d2 = 0; d2 < t2.length / 2; d2++) u2[d2] = { x: e3 + c2 * t2[d2 * 2], y: n2 + l2 * t2[d2 * 2 + 1] };
    var f2, p2, m2, h2, g2 = u2.length;
    for (p2 = u2[g2 - 1], f2 = 0; f2 < g2; f2++) m2 = u2[f2 % g2], h2 = u2[(f2 + 1) % g2], o2[s2][f2] = Sf(p2, m2, h2, a2), p2 = m2, m2 = h2;
    return o2[s2];
  }, draw: function(e3, t3, n2, r2, i2, a2, o2) {
    this.renderer.nodeShapeImpl(`round-polygon`, e3, t3, n2, r2, i2, this.points, this.getOrCreateCorners(t3, n2, r2, i2, a2, o2, `drawCorners`));
  }, intersectLine: function(e3, t3, n2, r2, i2, a2, o2, s2, c2) {
    return Dr(i2, a2, this.points, e3, t3, n2, r2, o2, this.getOrCreateCorners(e3, t3, n2, r2, s2, c2, `corners`));
  }, checkPoint: function(e3, t3, n2, r2, i2, a2, o2, s2, c2) {
    return _r(e3, t3, this.points, a2, o2, r2, i2, this.getOrCreateCorners(a2, o2, r2, i2, s2, c2, `corners`));
  } };
}, Hf.generateRoundRectangle = function() {
  return this.nodeShapes[`round-rectangle`] = this.nodeShapes.roundrectangle = { renderer: this, name: `round-rectangle`, points: kr(4, 0), draw: function(e2, t2, n2, r2, i2, a2) {
    this.renderer.nodeShapeImpl(this.name, e2, t2, n2, r2, i2, this.points, a2);
  }, intersectLine: function(e2, t2, n2, r2, i2, a2, o2, s2) {
    return cr(i2, a2, e2, t2, n2, r2, o2, s2);
  }, checkPoint: function(e2, t2, n2, r2, i2, a2, o2, s2) {
    var c2 = r2 / 2, l2 = i2 / 2;
    s2 = s2 === `auto` ? Mr(r2, i2) : s2, s2 = Math.min(c2, l2, s2);
    var u2 = s2 * 2;
    return !!(gr(e2, t2, this.points, a2, o2, r2, i2 - u2, [0, -1], n2) || gr(e2, t2, this.points, a2, o2, r2 - u2, i2, [0, -1], n2) || xr(e2, t2, u2, u2, a2 - c2 + s2, o2 - l2 + s2, n2) || xr(e2, t2, u2, u2, a2 + c2 - s2, o2 - l2 + s2, n2) || xr(e2, t2, u2, u2, a2 + c2 - s2, o2 + l2 - s2, n2) || xr(e2, t2, u2, u2, a2 - c2 + s2, o2 + l2 - s2, n2));
  } };
}, Hf.generateCutRectangle = function() {
  return this.nodeShapes[`cut-rectangle`] = this.nodeShapes.cutrectangle = { renderer: this, name: `cut-rectangle`, cornerLength: Pr(), points: kr(4, 0), draw: function(e2, t2, n2, r2, i2, a2) {
    this.renderer.nodeShapeImpl(this.name, e2, t2, n2, r2, i2, null, a2);
  }, generateCutTrianglePts: function(e2, t2, n2, r2, i2) {
    var a2 = i2 === `auto` ? this.cornerLength : i2, o2 = t2 / 2, s2 = e2 / 2, c2 = n2 - s2, l2 = n2 + s2, u2 = r2 - o2, d2 = r2 + o2;
    return { topLeft: [c2, u2 + a2, c2 + a2, u2, c2 + a2, u2 + a2], topRight: [l2 - a2, u2, l2, u2 + a2, l2 - a2, u2 + a2], bottomRight: [l2, d2 - a2, l2 - a2, d2, l2 - a2, d2 - a2], bottomLeft: [c2 + a2, d2, c2, d2 - a2, c2 + a2, d2 - a2] };
  }, intersectLine: function(e2, t2, n2, r2, i2, a2, o2, s2) {
    var c2 = this.generateCutTrianglePts(n2 + 2 * o2, r2 + 2 * o2, e2, t2, s2);
    return Er(i2, a2, [].concat.apply([], [c2.topLeft.splice(0, 4), c2.topRight.splice(0, 4), c2.bottomRight.splice(0, 4), c2.bottomLeft.splice(0, 4)]), e2, t2);
  }, checkPoint: function(e2, t2, n2, r2, i2, a2, o2, s2) {
    var c2 = s2 === `auto` ? this.cornerLength : s2;
    if (gr(e2, t2, this.points, a2, o2, r2, i2 - 2 * c2, [0, -1], n2) || gr(e2, t2, this.points, a2, o2, r2 - 2 * c2, i2, [0, -1], n2)) return true;
    var l2 = this.generateCutTrianglePts(r2, i2, a2, o2);
    return hr(e2, t2, l2.topLeft) || hr(e2, t2, l2.topRight) || hr(e2, t2, l2.bottomRight) || hr(e2, t2, l2.bottomLeft);
  } };
}, Hf.generateBarrel = function() {
  return this.nodeShapes.barrel = { renderer: this, name: `barrel`, points: kr(4, 0), draw: function(e2, t2, n2, r2, i2, a2) {
    this.renderer.nodeShapeImpl(this.name, e2, t2, n2, r2, i2);
  }, intersectLine: function(e2, t2, n2, r2, i2, a2, o2, s2) {
    var c2 = 0.15, l2 = 0.5, u2 = 0.85, d2 = this.generateBarrelBezierPts(n2 + 2 * o2, r2 + 2 * o2, e2, t2), f2 = function(e3) {
      var t3 = Wn({ x: e3[0], y: e3[1] }, { x: e3[2], y: e3[3] }, { x: e3[4], y: e3[5] }, c2), n3 = Wn({ x: e3[0], y: e3[1] }, { x: e3[2], y: e3[3] }, { x: e3[4], y: e3[5] }, l2), r3 = Wn({ x: e3[0], y: e3[1] }, { x: e3[2], y: e3[3] }, { x: e3[4], y: e3[5] }, u2);
      return [e3[0], e3[1], t3.x, t3.y, n3.x, n3.y, r3.x, r3.y, e3[4], e3[5]];
    };
    return Er(i2, a2, [].concat(f2(d2.topLeft), f2(d2.topRight), f2(d2.bottomRight), f2(d2.bottomLeft)), e2, t2);
  }, generateBarrelBezierPts: function(e2, t2, n2, r2) {
    var i2 = t2 / 2, a2 = e2 / 2, o2 = n2 - a2, s2 = n2 + a2, c2 = r2 - i2, l2 = r2 + i2, u2 = Ir(e2, t2), d2 = u2.heightOffset, f2 = u2.widthOffset, p2 = u2.ctrlPtOffsetPct * e2, m2 = { topLeft: [o2, c2 + d2, o2 + p2, c2, o2 + f2, c2], topRight: [s2 - f2, c2, s2 - p2, c2, s2, c2 + d2], bottomRight: [s2, l2 - d2, s2 - p2, l2, s2 - f2, l2], bottomLeft: [o2 + f2, l2, o2 + p2, l2, o2, l2 - d2] };
    return m2.topLeft.isTop = true, m2.topRight.isTop = true, m2.bottomLeft.isBottom = true, m2.bottomRight.isBottom = true, m2;
  }, checkPoint: function(e2, t2, n2, r2, i2, a2, o2, s2) {
    var c2 = Ir(r2, i2), l2 = c2.heightOffset, u2 = c2.widthOffset;
    if (gr(e2, t2, this.points, a2, o2, r2, i2 - 2 * l2, [0, -1], n2) || gr(e2, t2, this.points, a2, o2, r2 - 2 * u2, i2, [0, -1], n2)) return true;
    for (var d2 = this.generateBarrelBezierPts(r2, i2, a2, o2), f2 = function(e3, t3, n3) {
      var r3 = n3[4], i3 = n3[2], a3 = n3[0], o3 = n3[5], s3 = n3[1];
      if (Math.min(r3, a3) <= e3 && e3 <= Math.max(r3, a3) && Math.min(o3, s3) <= t3 && t3 <= Math.max(o3, s3)) {
        var c3 = Fr(r3, i3, a3), l3 = dr(c3[0], c3[1], c3[2], e3).filter(function(e4) {
          return 0 <= e4 && e4 <= 1;
        });
        if (l3.length > 0) return l3[0];
      }
      return null;
    }, p2 = Object.keys(d2), m2 = 0; m2 < p2.length; m2++) {
      var h2 = d2[p2[m2]], g2 = f2(e2, t2, h2);
      if (g2 != null) {
        var _2 = h2[5], v2 = h2[3], y2 = h2[1], b2 = Un(_2, v2, y2, g2);
        if (h2.isTop && b2 <= t2 || h2.isBottom && t2 <= b2) return true;
      }
    }
    return false;
  } };
}, Hf.generateBottomRoundrectangle = function() {
  return this.nodeShapes[`bottom-round-rectangle`] = this.nodeShapes.bottomroundrectangle = { renderer: this, name: `bottom-round-rectangle`, points: kr(4, 0), draw: function(e2, t2, n2, r2, i2, a2) {
    this.renderer.nodeShapeImpl(this.name, e2, t2, n2, r2, i2, this.points, a2);
  }, intersectLine: function(e2, t2, n2, r2, i2, a2, o2, s2) {
    var c2 = e2 - (n2 / 2 + o2), l2 = t2 - (r2 / 2 + o2), u2 = l2, d2 = wr(i2, a2, e2, t2, c2, l2, e2 + (n2 / 2 + o2), u2, false);
    return d2.length > 0 ? d2 : cr(i2, a2, e2, t2, n2, r2, o2, s2);
  }, checkPoint: function(e2, t2, n2, r2, i2, a2, o2, s2) {
    s2 = s2 === `auto` ? Mr(r2, i2) : s2;
    var c2 = 2 * s2;
    if (gr(e2, t2, this.points, a2, o2, r2, i2 - c2, [0, -1], n2) || gr(e2, t2, this.points, a2, o2, r2 - c2, i2, [0, -1], n2)) return true;
    var l2 = r2 / 2 + 2 * n2, u2 = i2 / 2 + 2 * n2;
    return !!(hr(e2, t2, [a2 - l2, o2 - u2, a2 - l2, o2, a2 + l2, o2, a2 + l2, o2 - u2]) || xr(e2, t2, c2, c2, a2 + r2 / 2 - s2, o2 + i2 / 2 - s2, n2) || xr(e2, t2, c2, c2, a2 - r2 / 2 + s2, o2 + i2 / 2 - s2, n2));
  } };
}, Hf.registerNodeShapes = function() {
  var e2 = this.nodeShapes = {}, t2 = this;
  this.generateEllipse(), this.generatePolygon(`triangle`, kr(3, 0)), this.generateRoundPolygon(`round-triangle`, kr(3, 0)), this.generatePolygon(`rectangle`, kr(4, 0)), e2.square = e2.rectangle, this.generateRoundRectangle(), this.generateCutRectangle(), this.generateBarrel(), this.generateBottomRoundrectangle();
  var n2 = [0, 1, 1, 0, 0, -1, -1, 0];
  this.generatePolygon(`diamond`, n2), this.generateRoundPolygon(`round-diamond`, n2), this.generatePolygon(`pentagon`, kr(5, 0)), this.generateRoundPolygon(`round-pentagon`, kr(5, 0)), this.generatePolygon(`hexagon`, kr(6, 0)), this.generateRoundPolygon(`round-hexagon`, kr(6, 0)), this.generatePolygon(`heptagon`, kr(7, 0)), this.generateRoundPolygon(`round-heptagon`, kr(7, 0)), this.generatePolygon(`octagon`, kr(8, 0)), this.generateRoundPolygon(`round-octagon`, kr(8, 0));
  var r2 = Array(20), i2 = jr(5, 0), a2 = jr(5, Math.PI / 5), o2 = 0.5 * (3 - Math.sqrt(5));
  o2 *= 1.57;
  for (var s2 = 0; s2 < a2.length / 2; s2++) a2[s2 * 2] *= o2, a2[s2 * 2 + 1] *= o2;
  for (var s2 = 0; s2 < 20 / 4; s2++) r2[s2 * 4] = i2[s2 * 2], r2[s2 * 4 + 1] = i2[s2 * 2 + 1], r2[s2 * 4 + 2] = a2[s2 * 2], r2[s2 * 4 + 3] = a2[s2 * 2 + 1];
  r2 = Ar(r2), this.generatePolygon(`star`, r2), this.generatePolygon(`vee`, [-1, -1, 0, -0.333, 1, -1, 0, 1]), this.generatePolygon(`rhomboid`, [-1, -1, 0.333, -1, 1, 1, -0.333, 1]), this.generatePolygon(`right-rhomboid`, [-0.333, -1, 1, -1, 0.333, 1, -1, 1]), this.nodeShapes.concavehexagon = this.generatePolygon(`concave-hexagon`, [-1, -0.95, -0.75, 0, -1, 0.95, 1, 0.95, 0.75, 0, 1, -0.95]);
  var c2 = [-1, -1, 0.25, -1, 1, 0, 0.25, 1, -1, 1];
  this.generatePolygon(`tag`, c2), this.generateRoundPolygon(`round-tag`, c2), e2.makePolygon = function(e3) {
    var n3 = `polygon-` + e3.join(`$`), r3;
    return (r3 = this[n3]) ? r3 : t2.generatePolygon(n3, e3);
  };
};
var Uf = {};
Uf.timeToRender = function() {
  return this.redrawTotalTime / this.redrawCount;
}, Uf.redraw = function(e2) {
  e2 || (e2 = Gt());
  var t2 = this;
  t2.averageRedrawTime === void 0 && (t2.averageRedrawTime = 0), t2.lastRedrawTime === void 0 && (t2.lastRedrawTime = 0), t2.lastDrawTime === void 0 && (t2.lastDrawTime = 0), t2.requestedFrame = true, t2.renderOptions = e2;
}, Uf.beforeRender = function(e2, t2) {
  if (!this.destroyed) {
    t2 ?? Lt(`Priority is not optional for beforeRender`);
    var n2 = this.beforeRenderCallbacks;
    n2.push({ fn: e2, priority: t2 }), n2.sort(function(e3, t3) {
      return t3.priority - e3.priority;
    });
  }
};
var Wf = function(e2, t2, n2) {
  for (var r2 = e2.beforeRenderCallbacks, i2 = 0; i2 < r2.length; i2++) r2[i2].fn(t2, n2);
};
Uf.startRenderLoop = function() {
  var e2 = this, t2 = e2.cy;
  if (!e2.renderLoopStarted) {
    e2.renderLoopStarted = true;
    var n2 = function(r2) {
      if (!e2.destroyed) {
        if (!t2.batching()) if (e2.requestedFrame && !e2.skipFrame) {
          Wf(e2, true, r2);
          var i2 = ft();
          e2.render(e2.renderOptions);
          var a2 = e2.lastDrawTime = ft();
          e2.averageRedrawTime === void 0 && (e2.averageRedrawTime = a2 - i2), e2.redrawCount === void 0 && (e2.redrawCount = 0), e2.redrawCount++, e2.redrawTotalTime === void 0 && (e2.redrawTotalTime = 0);
          var o2 = a2 - i2;
          e2.redrawTotalTime += o2, e2.lastRedrawTime = o2, e2.averageRedrawTime = e2.averageRedrawTime / 2 + o2 / 2, e2.requestedFrame = false;
        } else Wf(e2, false, r2);
        e2.skipFrame = false, dt(n2);
      }
    };
    dt(n2);
  }
};
var Gf = function(e2) {
  this.init(e2);
}, Kf = Gf.prototype;
Kf.clientFunctions = [`redrawHint`, `render`, `renderTo`, `matchCanvasSize`, `nodeShapeImpl`, `arrowShapeImpl`], Kf.init = function(e2) {
  var t2 = this;
  t2.options = e2, t2.cy = e2.cy;
  var n2 = t2.container = e2.cy.container(), r2 = t2.cy.window();
  if (r2) {
    var i2 = r2.document, a2 = i2.head, o2 = `__________cytoscape_stylesheet`, s2 = `__________cytoscape_container`, c2 = i2.getElementById(o2) != null;
    if (n2.className.indexOf(s2) < 0 && (n2.className = (n2.className || ``) + ` ` + s2), !c2) {
      var l2 = i2.createElement(`style`);
      l2.id = o2, l2.textContent = `.` + s2 + ` { position: relative; }`, a2.insertBefore(l2, a2.children[0]);
    }
    r2.getComputedStyle(n2).getPropertyValue(`position`) === `static` && zt(`A Cytoscape container has style position:static and so can not use UI extensions properly`);
  }
  t2.selection = [void 0, void 0, void 0, void 0, 0], t2.bezierProjPcts = [0.05, 0.225, 0.4, 0.5, 0.6, 0.775, 0.95], t2.hoverData = { down: null, last: null, downTime: null, triggerMode: null, dragging: false, initialPan: [null, null], capture: false }, t2.dragData = { possibleDragElements: [] }, t2.touchData = { start: null, capture: false, startPosition: [null, null, null, null, null, null], singleTouchStartTime: null, singleTouchMoved: true, now: [null, null, null, null, null, null], earlier: [null, null, null, null, null, null] }, t2.redraws = 0, t2.showFps = e2.showFps, t2.debug = e2.debug, t2.webgl = e2.webgl, t2.hideEdgesOnViewport = e2.hideEdgesOnViewport, t2.textureOnViewport = e2.textureOnViewport, t2.wheelSensitivity = e2.wheelSensitivity, t2.motionBlurEnabled = e2.motionBlur, t2.forcedPixelRatio = A(e2.pixelRatio) ? e2.pixelRatio : null, t2.motionBlur = e2.motionBlur, t2.motionBlurOpacity = e2.motionBlurOpacity, t2.motionBlurTransparency = 1 - t2.motionBlurOpacity, t2.motionBlurPxRatio = 1, t2.mbPxRBlurry = 1, t2.minMbLowQualFrames = 4, t2.fullQualityMb = false, t2.clearedForMotionBlur = [], t2.desktopTapThreshold = e2.desktopTapThreshold, t2.desktopTapThreshold2 = e2.desktopTapThreshold * e2.desktopTapThreshold, t2.touchTapThreshold = e2.touchTapThreshold, t2.touchTapThreshold2 = e2.touchTapThreshold * e2.touchTapThreshold, t2.tapholdDuration = 500, t2.bindings = [], t2.beforeRenderCallbacks = [], t2.beforeRenderPriorities = { animations: 400, eleCalcs: 300, eleTxrDeq: 200, lyrTxrDeq: 150, lyrTxrSkip: 100 }, t2.registerNodeShapes(), t2.registerArrowShapes(), t2.registerCalculationListeners();
}, Kf.notify = function(e2, t2) {
  var n2 = this, r2 = n2.cy;
  if (!this.destroyed) {
    if (e2 === `init`) {
      n2.load();
      return;
    }
    if (e2 === `destroy`) {
      n2.destroy();
      return;
    }
    (e2 === `add` || e2 === `remove` || e2 === `move` && r2.hasCompoundNodes() || e2 === `load` || e2 === `zorder` || e2 === `mount`) && n2.invalidateCachedZSortedEles(), e2 === `viewport` && n2.redrawHint(`select`, true), e2 === `gc` && n2.redrawHint(`gc`, true), (e2 === `load` || e2 === `resize` || e2 === `mount`) && (n2.invalidateContainerClientCoordsCache(), n2.matchCanvasSize(n2.container)), n2.redrawHint(`eles`, true), n2.redrawHint(`drag`, true), this.startRenderLoop(), this.redraw();
  }
}, Kf.destroy = function() {
  var e2 = this;
  e2.destroyed = true, e2.cy.stopAnimationLoop();
  for (var t2 = 0; t2 < e2.bindings.length; t2++) {
    var n2 = e2.bindings[t2], r2 = n2.target;
    (r2.off || r2.removeEventListener).apply(r2, n2.args);
  }
  if (e2.bindings = [], e2.beforeRenderCallbacks = [], e2.onUpdateEleCalcsFns = [], e2.removeObserver && e2.removeObserver.disconnect(), e2.styleObserver && e2.styleObserver.disconnect(), e2.resizeObserver && e2.resizeObserver.disconnect(), e2.labelCalcDiv) try {
    document.body.removeChild(e2.labelCalcDiv);
  } catch {
  }
}, Kf.isHeadless = function() {
  return false;
}, [Yd, zf, Bf, Vf, Hf, Uf].forEach(function(e2) {
  X(Kf, e2);
});
var qf = 1e3 / 60, Jf = { setupDequeueing: function(e2) {
  return function() {
    var t2 = this, n2 = this.renderer;
    if (!t2.dequeueingSetup) {
      t2.dequeueingSetup = true;
      var r2 = st(function() {
        n2.redrawHint(`eles`, true), n2.redrawHint(`drag`, true), n2.redraw();
      }, e2.deqRedrawThreshold), i2 = function(i3, a3) {
        var o2 = ft(), s2 = n2.averageRedrawTime, c2 = n2.lastRedrawTime, l2 = [], u2 = n2.cy.extent(), d2 = n2.getPixelRatio();
        for (i3 || n2.flushRenderedStyleQueue(); ; ) {
          var f2 = ft(), p2 = f2 - o2, m2 = f2 - a3;
          if (c2 < qf) {
            var h2 = qf - (i3 ? s2 : 0);
            if (m2 >= e2.deqFastCost * h2) break;
          } else if (i3) {
            if (p2 >= e2.deqCost * c2 || p2 >= e2.deqAvgCost * s2) break;
          } else if (m2 >= e2.deqNoDrawCost * qf) break;
          var g2 = e2.deq(t2, d2, u2);
          if (g2.length > 0) for (var _2 = 0; _2 < g2.length; _2++) l2.push(g2[_2]);
          else break;
        }
        l2.length > 0 && (e2.onDeqd(t2, l2), !i3 && e2.shouldRedraw(t2, l2, d2, u2) && r2());
      }, a2 = e2.priority || It;
      n2.beforeRender(i2, a2(t2));
    }
  };
} }, Yf = (function() {
  function e2(t2) {
    var n2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Pt;
    r(this, e2), this.idsByKey = new $t(), this.keyForId = new $t(), this.cachesByLvl = new $t(), this.lvls = [], this.getKey = t2, this.doesEleInvalidateKey = n2;
  }
  return a(e2, [{ key: `getIdsFor`, value: function(e3) {
    e3 ?? Lt(`Can not get id list for null key`);
    var t2 = this.idsByKey, n2 = this.idsByKey.get(e3);
    return n2 || (n2 = new nn(), t2.set(e3, n2)), n2;
  } }, { key: `addIdForKey`, value: function(e3, t2) {
    e3 != null && this.getIdsFor(e3).add(t2);
  } }, { key: `deleteIdForKey`, value: function(e3, t2) {
    e3 != null && this.getIdsFor(e3).delete(t2);
  } }, { key: `getNumberOfIdsForKey`, value: function(e3) {
    return e3 == null ? 0 : this.getIdsFor(e3).size;
  } }, { key: `updateKeyMappingFor`, value: function(e3) {
    var t2 = e3.id(), n2 = this.keyForId.get(t2), r2 = this.getKey(e3);
    this.deleteIdForKey(n2, t2), this.addIdForKey(r2, t2), this.keyForId.set(t2, r2);
  } }, { key: `deleteKeyMappingFor`, value: function(e3) {
    var t2 = e3.id(), n2 = this.keyForId.get(t2);
    this.deleteIdForKey(n2, t2), this.keyForId.delete(t2);
  } }, { key: `keyHasChangedFor`, value: function(e3) {
    var t2 = e3.id();
    return this.keyForId.get(t2) !== this.getKey(e3);
  } }, { key: `isInvalid`, value: function(e3) {
    return this.keyHasChangedFor(e3) || this.doesEleInvalidateKey(e3);
  } }, { key: `getCachesAt`, value: function(e3) {
    var t2 = this.cachesByLvl, n2 = this.lvls, r2 = t2.get(e3);
    return r2 || (r2 = new $t(), t2.set(e3, r2), n2.push(e3)), r2;
  } }, { key: `getCache`, value: function(e3, t2) {
    return this.getCachesAt(t2).get(e3);
  } }, { key: `get`, value: function(e3, t2) {
    var n2 = this.getKey(e3), r2 = this.getCache(n2, t2);
    return r2 != null && this.updateKeyMappingFor(e3), r2;
  } }, { key: `getForCachedKey`, value: function(e3, t2) {
    var n2 = this.keyForId.get(e3.id());
    return this.getCache(n2, t2);
  } }, { key: `hasCache`, value: function(e3, t2) {
    return this.getCachesAt(t2).has(e3);
  } }, { key: `has`, value: function(e3, t2) {
    var n2 = this.getKey(e3);
    return this.hasCache(n2, t2);
  } }, { key: `setCache`, value: function(e3, t2, n2) {
    n2.key = e3, this.getCachesAt(t2).set(e3, n2);
  } }, { key: `set`, value: function(e3, t2, n2) {
    var r2 = this.getKey(e3);
    this.setCache(r2, t2, n2), this.updateKeyMappingFor(e3);
  } }, { key: `deleteCache`, value: function(e3, t2) {
    this.getCachesAt(t2).delete(e3);
  } }, { key: `delete`, value: function(e3, t2) {
    var n2 = this.getKey(e3);
    this.deleteCache(n2, t2);
  } }, { key: `invalidateKey`, value: function(e3) {
    var t2 = this;
    this.lvls.forEach(function(n2) {
      return t2.deleteCache(e3, n2);
    });
  } }, { key: `invalidate`, value: function(e3) {
    var t2 = e3.id(), n2 = this.keyForId.get(t2);
    this.deleteKeyMappingFor(e3);
    var r2 = this.doesEleInvalidateKey(e3);
    return r2 && this.invalidateKey(n2), r2 || this.getNumberOfIdsForKey(n2) === 0;
  } }]);
})(), Xf = 25, Zf = 50, Qf = -4, $f = 3, ep = 7.99, tp = 8, np = 1024, rp = 1024, ip = 1024, ap = 0.2, op = 0.8, sp = 10, cp = 0.15, lp = 0.1, up = 0.9, dp = 0.9, fp = 100, pp = 1, mp = { dequeue: `dequeue`, downscale: `downscale`, highQuality: `highQuality` }, hp = Kt({ getKey: null, doesEleInvalidateKey: Pt, drawElement: null, getBoundingBox: null, getRotationPoint: null, getRotationOffset: null, isVisible: Nt, allowEdgeTxrCaching: true, allowParentTxrCaching: true }), gp = function(e2, t2) {
  var n2 = this;
  n2.renderer = e2, n2.onDequeues = [];
  var r2 = hp(t2);
  X(n2, r2), n2.lookup = new Yf(r2.getKey, r2.doesEleInvalidateKey), n2.setupDequeueing();
}, _p = gp.prototype;
_p.reasons = mp, _p.getTextureQueue = function(e2) {
  var t2 = this;
  return t2.eleImgCaches = t2.eleImgCaches || {}, t2.eleImgCaches[e2] = t2.eleImgCaches[e2] || [];
}, _p.getRetiredTextureQueue = function(e2) {
  var t2 = this, n2 = t2.eleImgCaches.retired = t2.eleImgCaches.retired || {};
  return n2[e2] = n2[e2] || [];
}, _p.getElementQueue = function() {
  var e2 = this;
  return e2.eleCacheQueue = e2.eleCacheQueue || new mn(function(e3, t2) {
    return t2.reqs - e3.reqs;
  });
}, _p.getElementKeyToQueue = function() {
  var e2 = this;
  return e2.eleKeyToCacheQueue = e2.eleKeyToCacheQueue || {};
}, _p.getElement = function(e2, t2, n2, r2, i2) {
  var a2 = this, o2 = this.renderer, s2 = o2.cy.zoom(), c2 = this.lookup;
  if (!t2 || t2.w === 0 || t2.h === 0 || isNaN(t2.w) || isNaN(t2.h) || !e2.visible() || e2.removed() || !a2.allowEdgeTxrCaching && e2.isEdge() || !a2.allowParentTxrCaching && e2.isParent()) return null;
  if (r2 ?? (r2 = Math.ceil(Rn(s2 * n2))), r2 < Qf) r2 = Qf;
  else if (s2 >= ep || r2 > $f) return null;
  var l2 = 2 ** r2, u2 = t2.h * l2, d2 = t2.w * l2, f2 = o2.eleTextBiggerThanMin(e2, l2);
  if (!this.isVisible(e2, f2)) return null;
  var p2 = c2.get(e2, r2);
  if (p2 && p2.invalidated && (p2.invalidated = false, p2.texture.invalidatedWidth -= p2.width), p2) return p2;
  var m2 = u2 <= Xf ? Xf : u2 <= Zf ? Zf : Math.ceil(u2 / Zf) * Zf;
  if (u2 > ip || d2 > rp) return null;
  var h2 = a2.getTextureQueue(m2), g2 = h2[h2.length - 2], _2 = function() {
    return a2.recycleTexture(m2, d2) || a2.addTexture(m2, d2);
  };
  g2 || (g2 = h2[h2.length - 1]), g2 || (g2 = _2()), g2.width - g2.usedWidth < d2 && (g2 = _2());
  for (var v2 = function(e3) {
    return e3 && e3.scaledLabelShown === f2;
  }, y2 = i2 && i2 === mp.dequeue, b2 = i2 && i2 === mp.highQuality, x2 = i2 && i2 === mp.downscale, S2, C2 = r2 + 1; C2 <= $f; C2++) {
    var w2 = c2.get(e2, C2);
    if (w2) {
      S2 = w2;
      break;
    }
  }
  var T2 = S2 && S2.level === r2 + 1 ? S2 : null, E2 = function() {
    g2.context.drawImage(T2.texture.canvas, T2.x, 0, T2.width, T2.height, g2.usedWidth, 0, d2, u2);
  };
  if (g2.context.setTransform(1, 0, 0, 1, 0, 0), g2.context.clearRect(g2.usedWidth, 0, d2, m2), v2(T2)) E2();
  else if (v2(S2)) if (b2) {
    for (var D2 = S2.level; D2 > r2; D2--) T2 = a2.getElement(e2, t2, n2, D2, mp.downscale);
    E2();
  } else return a2.queueElement(e2, S2.level - 1), S2;
  else {
    var O2;
    if (!y2 && !b2 && !x2) for (var k2 = r2 - 1; k2 >= Qf; k2--) {
      var A2 = c2.get(e2, k2);
      if (A2) {
        O2 = A2;
        break;
      }
    }
    if (v2(O2)) return a2.queueElement(e2, r2), O2;
    g2.context.translate(g2.usedWidth, 0), g2.context.scale(l2, l2), this.drawElement(g2.context, e2, t2, f2, false), g2.context.scale(1 / l2, 1 / l2), g2.context.translate(-g2.usedWidth, 0);
  }
  return p2 = { x: g2.usedWidth, texture: g2, level: r2, scale: l2, width: d2, height: u2, scaledLabelShown: f2 }, g2.usedWidth += Math.ceil(d2 + tp), g2.eleCaches.push(p2), c2.set(e2, r2, p2), a2.checkTextureFullness(g2), p2;
}, _p.invalidateElements = function(e2) {
  for (var t2 = 0; t2 < e2.length; t2++) this.invalidateElement(e2[t2]);
}, _p.invalidateElement = function(e2) {
  var t2 = this, n2 = t2.lookup, r2 = [];
  if (n2.isInvalid(e2)) {
    for (var i2 = Qf; i2 <= $f; i2++) {
      var a2 = n2.getForCachedKey(e2, i2);
      a2 && r2.push(a2);
    }
    if (n2.invalidate(e2)) for (var o2 = 0; o2 < r2.length; o2++) {
      var s2 = r2[o2], c2 = s2.texture;
      c2.invalidatedWidth += s2.width, s2.invalidated = true, t2.checkTextureUtility(c2);
    }
    t2.removeFromQueue(e2);
  }
}, _p.checkTextureUtility = function(e2) {
  e2.invalidatedWidth >= ap * e2.width && this.retireTexture(e2);
}, _p.checkTextureFullness = function(e2) {
  var t2 = this.getTextureQueue(e2.height);
  e2.usedWidth / e2.width > op && e2.fullnessChecks >= sp ? qt(t2, e2) : e2.fullnessChecks++;
}, _p.retireTexture = function(e2) {
  var t2 = this, n2 = e2.height, r2 = t2.getTextureQueue(n2), i2 = this.lookup;
  qt(r2, e2), e2.retired = true;
  for (var a2 = e2.eleCaches, o2 = 0; o2 < a2.length; o2++) {
    var s2 = a2[o2];
    i2.deleteCache(s2.key, s2.level);
  }
  Jt(a2), t2.getRetiredTextureQueue(n2).push(e2);
}, _p.addTexture = function(e2, t2) {
  var n2 = this, r2 = n2.getTextureQueue(e2), i2 = {};
  return r2.push(i2), i2.eleCaches = [], i2.height = e2, i2.width = Math.max(np, t2), i2.usedWidth = 0, i2.invalidatedWidth = 0, i2.fullnessChecks = 0, i2.canvas = n2.renderer.makeOffscreenCanvas(i2.width, i2.height), i2.context = i2.canvas.getContext(`2d`), i2;
}, _p.recycleTexture = function(e2, t2) {
  for (var n2 = this, r2 = n2.getTextureQueue(e2), i2 = n2.getRetiredTextureQueue(e2), a2 = 0; a2 < i2.length; a2++) {
    var o2 = i2[a2];
    if (o2.width >= t2) return o2.retired = false, o2.usedWidth = 0, o2.invalidatedWidth = 0, o2.fullnessChecks = 0, Jt(o2.eleCaches), o2.context.setTransform(1, 0, 0, 1, 0, 0), o2.context.clearRect(0, 0, o2.width, o2.height), qt(i2, o2), r2.push(o2), o2;
  }
}, _p.queueElement = function(e2, t2) {
  var n2 = this, r2 = n2.getElementQueue(), i2 = n2.getElementKeyToQueue(), a2 = this.getKey(e2), o2 = i2[a2];
  if (o2) o2.level = Math.max(o2.level, t2), o2.eles.merge(e2), o2.reqs++, r2.updateItem(o2);
  else {
    var s2 = { eles: e2.spawn().merge(e2), level: t2, reqs: 1, key: a2 };
    r2.push(s2), i2[a2] = s2;
  }
}, _p.dequeue = function(e2) {
  for (var t2 = this, n2 = t2.getElementQueue(), r2 = t2.getElementKeyToQueue(), i2 = [], a2 = t2.lookup, o2 = 0; o2 < pp && n2.size() > 0; o2++) {
    var s2 = n2.pop(), c2 = s2.key, l2 = s2.eles[0], u2 = a2.hasCache(l2, s2.level);
    if (r2[c2] = null, !u2) {
      i2.push(s2);
      var d2 = t2.getBoundingBox(l2);
      t2.getElement(l2, d2, e2, s2.level, mp.dequeue);
    }
  }
  return i2;
}, _p.removeFromQueue = function(e2) {
  var t2 = this, n2 = t2.getElementQueue(), r2 = t2.getElementKeyToQueue(), i2 = this.getKey(e2), a2 = r2[i2];
  a2 != null && (a2.eles.length === 1 ? (a2.reqs = Mt, n2.updateItem(a2), n2.pop(), r2[i2] = null) : a2.eles.unmerge(e2));
}, _p.onDequeue = function(e2) {
  this.onDequeues.push(e2);
}, _p.offDequeue = function(e2) {
  qt(this.onDequeues, e2);
}, _p.setupDequeueing = Jf.setupDequeueing({ deqRedrawThreshold: fp, deqCost: cp, deqAvgCost: lp, deqNoDrawCost: up, deqFastCost: dp, deq: function(e2, t2, n2) {
  return e2.dequeue(t2, n2);
}, onDeqd: function(e2, t2) {
  for (var n2 = 0; n2 < e2.onDequeues.length; n2++) {
    var r2 = e2.onDequeues[n2];
    r2(t2);
  }
}, shouldRedraw: function(e2, t2, n2, r2) {
  for (var i2 = 0; i2 < t2.length; i2++) for (var a2 = t2[i2].eles, o2 = 0; o2 < a2.length; o2++) if (tr(a2[o2].boundingBox(), r2)) return true;
  return false;
}, priority: function(e2) {
  return e2.renderer.beforeRenderPriorities.eleTxrDeq;
} });
var vp = 1, yp = -4, bp = 2, xp = 3.99, Sp = 50, Cp = 50, wp = 0.15, Tp = 0.1, Ep = 0.9, Dp = 0.9, Op = 1, kp = 250, Ap = 4e3 * 4e3, jp = 32767, Mp = true, Np = function(e2) {
  var t2 = this, n2 = t2.renderer = e2, r2 = n2.cy;
  t2.layersByLevel = {}, t2.firstGet = true, t2.lastInvalidationTime = ft() - 2 * kp, t2.skipping = false, t2.eleTxrDeqs = r2.collection(), t2.scheduleElementRefinement = st(function() {
    t2.refineElementTextures(t2.eleTxrDeqs), t2.eleTxrDeqs.unmerge(t2.eleTxrDeqs);
  }, Cp), n2.beforeRender(function(e3, n3) {
    n3 - t2.lastInvalidationTime <= kp ? t2.skipping = true : t2.skipping = false;
  }, n2.beforeRenderPriorities.lyrTxrSkip), t2.layersQueue = new mn(function(e3, t3) {
    return t3.reqs - e3.reqs;
  }), t2.setupDequeueing();
}, Pp = Np.prototype, Fp = 0, Ip = 2 ** 53 - 1;
Pp.makeLayer = function(e2, t2) {
  var n2 = 2 ** t2, r2 = Math.ceil(e2.w * n2), i2 = Math.ceil(e2.h * n2), a2 = this.renderer.makeOffscreenCanvas(r2, i2), o2 = { id: Fp = ++Fp % Ip, bb: e2, level: t2, width: r2, height: i2, canvas: a2, context: a2.getContext(`2d`), eles: [], elesQueue: [], reqs: 0 }, s2 = o2.context, c2 = -o2.bb.x1, l2 = -o2.bb.y1;
  return s2.scale(n2, n2), s2.translate(c2, l2), o2;
}, Pp.getLayers = function(e2, t2, n2) {
  var r2 = this, i2 = r2.renderer.cy.zoom(), a2 = r2.firstGet;
  if (r2.firstGet = false, n2 == null) {
    if (n2 = Math.ceil(Rn(i2 * t2)), n2 < yp) n2 = yp;
    else if (i2 >= xp || n2 > bp) return null;
  }
  r2.validateLayersElesOrdering(n2, e2);
  var o2 = r2.layersByLevel, s2 = 2 ** n2, c2 = o2[n2] = o2[n2] || [], l2, u2 = r2.levelIsComplete(n2, e2), d2, f2 = function() {
    var t3 = function(t4) {
      if (r2.validateLayersElesOrdering(t4, e2), r2.levelIsComplete(t4, e2)) return d2 = o2[t4], true;
    }, i3 = function(e3) {
      if (!d2) for (var r3 = n2 + e3; yp <= r3 && r3 <= bp && !t3(r3); r3 += e3) ;
    };
    i3(1), i3(-1);
    for (var a3 = c2.length - 1; a3 >= 0; a3--) {
      var s3 = c2[a3];
      s3.invalid && qt(c2, s3);
    }
  };
  if (!u2) f2();
  else return c2;
  var p2 = function() {
    if (!l2) {
      l2 = qn();
      for (var t3 = 0; t3 < e2.length; t3++) Xn(l2, e2[t3].boundingBox());
    }
    return l2;
  }, m2 = function(e3) {
    e3 || (e3 = {});
    var t3 = e3.after;
    p2();
    var i3 = Math.ceil(l2.w * s2), a3 = Math.ceil(l2.h * s2);
    if (i3 > jp || a3 > jp || i3 * a3 > Ap) return null;
    var o3 = r2.makeLayer(l2, n2);
    if (t3 != null) {
      var u3 = c2.indexOf(t3) + 1;
      c2.splice(u3, 0, o3);
    } else (e3.insert === void 0 || e3.insert) && c2.unshift(o3);
    return o3;
  };
  if (r2.skipping && !a2) return null;
  for (var h2 = null, g2 = e2.length / vp, _2 = !a2, v2 = 0; v2 < e2.length; v2++) {
    var y2 = e2[v2], b2 = y2._private.rscratch, x2 = b2.imgLayerCaches = b2.imgLayerCaches || {}, S2 = x2[n2];
    if (S2) {
      h2 = S2;
      continue;
    }
    if ((!h2 || h2.eles.length >= g2 || !ir(h2.bb, y2.boundingBox())) && (h2 = m2({ insert: true, after: h2 }), !h2)) return null;
    d2 || _2 ? r2.queueLayer(h2, y2) : r2.drawEleInLayer(h2, y2, n2, t2), h2.eles.push(y2), x2[n2] = h2;
  }
  return d2 || (_2 ? null : c2);
}, Pp.getEleLevelForLayerLevel = function(e2, t2) {
  return e2;
}, Pp.drawEleInLayer = function(e2, t2, n2, r2) {
  var i2 = this, a2 = this.renderer, o2 = e2.context, s2 = t2.boundingBox();
  s2.w === 0 || s2.h === 0 || !t2.visible() || (n2 = i2.getEleLevelForLayerLevel(n2, r2), a2.setImgSmoothing(o2, false), a2.drawCachedElement(o2, t2, null, null, n2, Mp), a2.setImgSmoothing(o2, true));
}, Pp.levelIsComplete = function(e2, t2) {
  var n2 = this.layersByLevel[e2];
  if (!n2 || n2.length === 0) return false;
  for (var r2 = 0, i2 = 0; i2 < n2.length; i2++) {
    var a2 = n2[i2];
    if (a2.reqs > 0 || a2.invalid) return false;
    r2 += a2.eles.length;
  }
  return r2 === t2.length;
}, Pp.validateLayersElesOrdering = function(e2, t2) {
  var n2 = this.layersByLevel[e2];
  if (n2) for (var r2 = 0; r2 < n2.length; r2++) {
    for (var i2 = n2[r2], a2 = -1, o2 = 0; o2 < t2.length; o2++) if (i2.eles[0] === t2[o2]) {
      a2 = o2;
      break;
    }
    if (a2 < 0) {
      this.invalidateLayer(i2);
      continue;
    }
    for (var s2 = a2, o2 = 0; o2 < i2.eles.length; o2++) if (i2.eles[o2] !== t2[s2 + o2]) {
      this.invalidateLayer(i2);
      break;
    }
  }
}, Pp.updateElementsInLayers = function(e2, t2) {
  for (var n2 = this, r2 = P(e2[0]), i2 = 0; i2 < e2.length; i2++) for (var a2 = r2 ? null : e2[i2], o2 = r2 ? e2[i2] : e2[i2].ele, s2 = o2._private.rscratch, c2 = s2.imgLayerCaches = s2.imgLayerCaches || {}, l2 = yp; l2 <= bp; l2++) {
    var u2 = c2[l2];
    u2 && (a2 && n2.getEleLevelForLayerLevel(u2.level) !== a2.level || t2(u2, o2, a2));
  }
}, Pp.haveLayers = function() {
  for (var e2 = this, t2 = false, n2 = yp; n2 <= bp; n2++) {
    var r2 = e2.layersByLevel[n2];
    if (r2 && r2.length > 0) {
      t2 = true;
      break;
    }
  }
  return t2;
}, Pp.invalidateElements = function(e2) {
  var t2 = this;
  e2.length !== 0 && (t2.lastInvalidationTime = ft(), !(e2.length === 0 || !t2.haveLayers()) && t2.updateElementsInLayers(e2, function(e3, n2, r2) {
    t2.invalidateLayer(e3);
  }));
}, Pp.invalidateLayer = function(e2) {
  if (this.lastInvalidationTime = ft(), !e2.invalid) {
    var t2 = e2.level, n2 = e2.eles, r2 = this.layersByLevel[t2];
    qt(r2, e2), e2.elesQueue = [], e2.invalid = true, e2.replacement && (e2.replacement.invalid = true);
    for (var i2 = 0; i2 < n2.length; i2++) {
      var a2 = n2[i2]._private.rscratch.imgLayerCaches;
      a2 && (a2[t2] = null);
    }
  }
}, Pp.refineElementTextures = function(e2) {
  var t2 = this;
  t2.updateElementsInLayers(e2, function(e3, n2, r2) {
    var i2 = e3.replacement;
    if (i2 || (i2 = e3.replacement = t2.makeLayer(e3.bb, e3.level), i2.replaces = e3, i2.eles = e3.eles), !i2.reqs) for (var a2 = 0; a2 < i2.eles.length; a2++) t2.queueLayer(i2, i2.eles[a2]);
  });
}, Pp.enqueueElementRefinement = function(e2) {
  this.eleTxrDeqs.merge(e2), this.scheduleElementRefinement();
}, Pp.queueLayer = function(e2, t2) {
  var n2 = this.layersQueue, r2 = e2.elesQueue, i2 = r2.hasId = r2.hasId || {};
  if (!e2.replacement) {
    if (t2) {
      if (i2[t2.id()]) return;
      r2.push(t2), i2[t2.id()] = true;
    }
    e2.reqs ? (e2.reqs++, n2.updateItem(e2)) : (e2.reqs = 1, n2.push(e2));
  }
}, Pp.dequeue = function(e2) {
  for (var t2 = this, n2 = t2.layersQueue, r2 = [], i2 = 0; i2 < Op && n2.size() !== 0; ) {
    var a2 = n2.peek();
    if (a2.replacement) {
      n2.pop();
      continue;
    }
    if (a2.replaces && a2 !== a2.replaces.replacement) {
      n2.pop();
      continue;
    }
    if (a2.invalid) {
      n2.pop();
      continue;
    }
    var o2 = a2.elesQueue.shift();
    o2 && (t2.drawEleInLayer(a2, o2, a2.level, e2), i2++), r2.length === 0 && r2.push(true), a2.elesQueue.length === 0 && (n2.pop(), a2.reqs = 0, a2.replaces && t2.applyLayerReplacement(a2), t2.requestRedraw());
  }
  return r2;
}, Pp.applyLayerReplacement = function(e2) {
  var t2 = this, n2 = t2.layersByLevel[e2.level], r2 = e2.replaces, i2 = n2.indexOf(r2);
  if (!(i2 < 0 || r2.invalid)) {
    n2[i2] = e2;
    for (var a2 = 0; a2 < e2.eles.length; a2++) {
      var o2 = e2.eles[a2]._private, s2 = o2.imgLayerCaches = o2.imgLayerCaches || {};
      s2 && (s2[e2.level] = e2);
    }
    t2.requestRedraw();
  }
}, Pp.requestRedraw = st(function() {
  var e2 = this.renderer;
  e2.redrawHint(`eles`, true), e2.redrawHint(`drag`, true), e2.redraw();
}, 100), Pp.setupDequeueing = Jf.setupDequeueing({ deqRedrawThreshold: Sp, deqCost: wp, deqAvgCost: Tp, deqNoDrawCost: Ep, deqFastCost: Dp, deq: function(e2, t2) {
  return e2.dequeue(t2);
}, onDeqd: It, shouldRedraw: Nt, priority: function(e2) {
  return e2.renderer.beforeRenderPriorities.lyrTxrDeq;
} });
var Lp = {}, Rp;
function zp(e2, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    e2.lineTo(r2.x, r2.y);
  }
}
function Bp(e2, t2, n2) {
  for (var r2, i2 = 0; i2 < t2.length; i2++) {
    var a2 = t2[i2];
    i2 === 0 && (r2 = a2), e2.lineTo(a2.x, a2.y);
  }
  e2.quadraticCurveTo(n2.x, n2.y, r2.x, r2.y);
}
function Vp(e2, t2, n2) {
  e2.beginPath && e2.beginPath();
  for (var r2 = t2, i2 = 0; i2 < r2.length; i2++) {
    var a2 = r2[i2];
    e2.lineTo(a2.x, a2.y);
  }
  var o2 = n2, s2 = n2[0];
  e2.moveTo(s2.x, s2.y);
  for (var i2 = 1; i2 < o2.length; i2++) {
    var a2 = o2[i2];
    e2.lineTo(a2.x, a2.y);
  }
  e2.closePath && e2.closePath();
}
function Hp(e2, t2, n2, r2, i2) {
  e2.beginPath && e2.beginPath(), e2.arc(n2, r2, i2, 0, Math.PI * 2, false);
  var a2 = t2, o2 = a2[0];
  e2.moveTo(o2.x, o2.y);
  for (var s2 = 0; s2 < a2.length; s2++) {
    var c2 = a2[s2];
    e2.lineTo(c2.x, c2.y);
  }
  e2.closePath && e2.closePath();
}
function Up(e2, t2, n2, r2) {
  e2.arc(t2, n2, r2, 0, Math.PI * 2, false);
}
Lp.arrowShapeImpl = function(e2) {
  return (Rp || (Rp = { polygon: zp, "triangle-backcurve": Bp, "triangle-tee": Vp, "circle-triangle": Hp, "triangle-cross": Vp, circle: Up }))[e2];
};
var Wp = {};
Wp.drawElement = function(e2, t2, n2, r2, i2, a2) {
  var o2 = this;
  t2.isNode() ? o2.drawNode(e2, t2, n2, r2, i2, a2) : o2.drawEdge(e2, t2, n2, r2, i2, a2);
}, Wp.drawElementOverlay = function(e2, t2) {
  var n2 = this;
  t2.isNode() ? n2.drawNodeOverlay(e2, t2) : n2.drawEdgeOverlay(e2, t2);
}, Wp.drawElementUnderlay = function(e2, t2) {
  var n2 = this;
  t2.isNode() ? n2.drawNodeUnderlay(e2, t2) : n2.drawEdgeUnderlay(e2, t2);
}, Wp.drawCachedElementPortion = function(e2, t2, n2, r2, i2, a2, o2, s2) {
  var c2 = this, l2 = n2.getBoundingBox(t2);
  if (!(l2.w === 0 || l2.h === 0)) {
    var u2 = n2.getElement(t2, l2, r2, i2, a2);
    if (u2 != null) {
      var d2 = s2(c2, t2);
      if (d2 === 0) return;
      var f2 = o2(c2, t2), p2 = l2.x1, m2 = l2.y1, h2 = l2.w, g2 = l2.h, _2, v2, y2, b2, x2;
      if (f2 !== 0) {
        var S2 = n2.getRotationPoint(t2);
        y2 = S2.x, b2 = S2.y, e2.translate(y2, b2), e2.rotate(f2), x2 = c2.getImgSmoothing(e2), x2 || c2.setImgSmoothing(e2, true);
        var C2 = n2.getRotationOffset(t2);
        _2 = C2.x, v2 = C2.y;
      } else _2 = p2, v2 = m2;
      var w2;
      d2 !== 1 && (w2 = e2.globalAlpha, e2.globalAlpha = w2 * d2), e2.drawImage(u2.texture.canvas, u2.x, 0, u2.width, u2.height, _2, v2, h2, g2), d2 !== 1 && (e2.globalAlpha = w2), f2 !== 0 && (e2.rotate(-f2), e2.translate(-y2, -b2), x2 || c2.setImgSmoothing(e2, false));
    } else n2.drawElement(e2, t2);
  }
};
var Gp = function() {
  return 0;
}, Kp = function(e2, t2) {
  return e2.getTextAngle(t2, null);
}, qp = function(e2, t2) {
  return e2.getTextAngle(t2, `source`);
}, Jp = function(e2, t2) {
  return e2.getTextAngle(t2, `target`);
}, Yp = function(e2, t2) {
  return t2.effectiveOpacity();
}, Xp = function(e2, t2) {
  return t2.pstyle(`text-opacity`).pfValue * t2.effectiveOpacity();
};
Wp.drawCachedElement = function(e2, t2, n2, r2, i2, a2) {
  var o2 = this, s2 = o2.data, c2 = s2.eleTxrCache, l2 = s2.lblTxrCache, u2 = s2.slbTxrCache, d2 = s2.tlbTxrCache, f2 = t2.boundingBox(), p2 = a2 === true ? c2.reasons.highQuality : null;
  if (!(f2.w === 0 || f2.h === 0 || !t2.visible()) && (!r2 || tr(f2, r2))) {
    var m2 = t2.isEdge(), h2 = t2.element()._private.rscratch.badLine;
    o2.drawElementUnderlay(e2, t2), o2.drawCachedElementPortion(e2, t2, c2, n2, i2, p2, Gp, Yp), (!m2 || !h2) && o2.drawCachedElementPortion(e2, t2, l2, n2, i2, p2, Kp, Xp), m2 && !h2 && (o2.drawCachedElementPortion(e2, t2, u2, n2, i2, p2, qp, Xp), o2.drawCachedElementPortion(e2, t2, d2, n2, i2, p2, Jp, Xp)), o2.drawElementOverlay(e2, t2);
  }
}, Wp.drawElements = function(e2, t2) {
  for (var n2 = this, r2 = 0; r2 < t2.length; r2++) {
    var i2 = t2[r2];
    n2.drawElement(e2, i2);
  }
}, Wp.drawCachedElements = function(e2, t2, n2, r2) {
  for (var i2 = this, a2 = 0; a2 < t2.length; a2++) {
    var o2 = t2[a2];
    i2.drawCachedElement(e2, o2, n2, r2);
  }
}, Wp.drawCachedNodes = function(e2, t2, n2, r2) {
  for (var i2 = this, a2 = 0; a2 < t2.length; a2++) {
    var o2 = t2[a2];
    o2.isNode() && i2.drawCachedElement(e2, o2, n2, r2);
  }
}, Wp.drawLayeredElements = function(e2, t2, n2, r2) {
  var i2 = this, a2 = i2.data.lyrTxrCache.getLayers(t2, n2);
  if (a2) for (var o2 = 0; o2 < a2.length; o2++) {
    var s2 = a2[o2], c2 = s2.bb;
    c2.w === 0 || c2.h === 0 || e2.drawImage(s2.canvas, c2.x1, c2.y1, c2.w, c2.h);
  }
  else i2.drawCachedElements(e2, t2, n2, r2);
};
var Zp = {};
Zp.drawEdge = function(e2, t2, n2) {
  var r2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, i2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, a2 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true, o2 = this, s2 = t2._private.rscratch;
  if (!(a2 && !t2.visible()) && !(s2.badLine || s2.allpts == null || isNaN(s2.allpts[0]))) {
    var c2;
    n2 && (c2 = n2, e2.translate(-c2.x1, -c2.y1));
    var l2 = a2 ? t2.pstyle(`opacity`).value : 1, u2 = a2 ? t2.pstyle(`line-opacity`).value : 1, d2 = t2.pstyle(`curve-style`).value, f2 = t2.pstyle(`line-style`).value, p2 = t2.pstyle(`width`).pfValue, m2 = t2.pstyle(`line-cap`).value, h2 = t2.pstyle(`line-outline-width`).value, g2 = t2.pstyle(`line-outline-color`).value, _2 = l2 * u2, v2 = l2 * u2, y2 = function() {
      var n3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _2;
      d2 === `straight-triangle` ? (o2.eleStrokeStyle(e2, t2, n3), o2.drawEdgeTrianglePath(t2, e2, s2.allpts)) : (e2.lineWidth = p2, e2.lineCap = m2, o2.eleStrokeStyle(e2, t2, n3), o2.drawEdgePath(t2, e2, s2.allpts, f2), e2.lineCap = `butt`);
    }, b2 = function() {
      var n3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _2;
      if (e2.lineWidth = p2 + h2, e2.lineCap = m2, h2 > 0) o2.colorStrokeStyle(e2, g2[0], g2[1], g2[2], n3);
      else {
        e2.lineCap = `butt`;
        return;
      }
      d2 === `straight-triangle` ? o2.drawEdgeTrianglePath(t2, e2, s2.allpts) : (o2.drawEdgePath(t2, e2, s2.allpts, f2), e2.lineCap = `butt`);
    }, x2 = function() {
      i2 && o2.drawEdgeOverlay(e2, t2);
    }, S2 = function() {
      i2 && o2.drawEdgeUnderlay(e2, t2);
    }, C2 = function() {
      var n3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : v2;
      o2.drawArrowheads(e2, t2, n3);
    }, w2 = function() {
      o2.drawElementText(e2, t2, null, r2);
    };
    if (e2.lineJoin = `round`, t2.pstyle(`ghost`).value === `yes`) {
      var T2 = t2.pstyle(`ghost-offset-x`).pfValue, E2 = t2.pstyle(`ghost-offset-y`).pfValue, D2 = _2 * t2.pstyle(`ghost-opacity`).value;
      e2.translate(T2, E2), y2(D2), C2(D2), e2.translate(-T2, -E2);
    } else b2();
    S2(), y2(), C2(), x2(), w2(), n2 && e2.translate(c2.x1, c2.y1);
  }
};
var Qp = function(e2) {
  if (![`overlay`, `underlay`].includes(e2)) throw Error(`Invalid state`);
  return function(t2, n2) {
    if (n2.visible()) {
      var r2 = n2.pstyle(`${e2}-opacity`).value;
      if (r2 !== 0) {
        var i2 = this, a2 = i2.usePaths(), o2 = n2._private.rscratch, s2 = 2 * n2.pstyle(`${e2}-padding`).pfValue, c2 = n2.pstyle(`${e2}-color`).value;
        t2.lineWidth = s2, o2.edgeType === `self` && !a2 ? t2.lineCap = `butt` : t2.lineCap = `round`, i2.colorStrokeStyle(t2, c2[0], c2[1], c2[2], r2), i2.drawEdgePath(n2, t2, o2.allpts, `solid`);
      }
    }
  };
};
Zp.drawEdgeOverlay = Qp(`overlay`), Zp.drawEdgeUnderlay = Qp(`underlay`), Zp.drawEdgePath = function(e2, t2, n2, r2) {
  var i2 = e2._private.rscratch, a2 = t2, s2, c2 = false, l2 = this.usePaths(), u2 = e2.pstyle(`line-dash-pattern`).pfValue, d2 = e2.pstyle(`line-dash-offset`).pfValue;
  if (l2) {
    var f2 = n2.join(`$`);
    i2.pathCacheKey && i2.pathCacheKey === f2 ? (s2 = t2 = i2.pathCache, c2 = true) : (s2 = t2 = new Path2D(), i2.pathCacheKey = f2, i2.pathCache = s2);
  }
  if (a2.setLineDash) switch (r2) {
    case `dotted`:
      a2.setLineDash([1, 1]);
      break;
    case `dashed`:
      a2.setLineDash(u2), a2.lineDashOffset = d2;
      break;
    case `solid`:
      a2.setLineDash([]);
      break;
  }
  if (!c2 && !i2.badLine) switch (t2.beginPath && t2.beginPath(), t2.moveTo(n2[0], n2[1]), i2.edgeType) {
    case `bezier`:
    case `self`:
    case `compound`:
    case `multibezier`:
      for (var p2 = 2; p2 + 3 < n2.length; p2 += 4) t2.quadraticCurveTo(n2[p2], n2[p2 + 1], n2[p2 + 2], n2[p2 + 3]);
      break;
    case `straight`:
    case `haystack`:
      for (var m2 = 2; m2 + 1 < n2.length; m2 += 2) t2.lineTo(n2[m2], n2[m2 + 1]);
      break;
    case `segments`:
      if (i2.isRound) {
        var h2 = o(i2.roundCorners), g2;
        try {
          for (h2.s(); !(g2 = h2.n()).done; ) {
            var _2 = g2.value;
            xf(t2, _2);
          }
        } catch (e3) {
          h2.e(e3);
        } finally {
          h2.f();
        }
        t2.lineTo(n2[n2.length - 2], n2[n2.length - 1]);
      } else for (var v2 = 2; v2 + 1 < n2.length; v2 += 2) t2.lineTo(n2[v2], n2[v2 + 1]);
      break;
  }
  t2 = a2, l2 ? t2.stroke(s2) : t2.stroke(), t2.setLineDash && t2.setLineDash([]);
}, Zp.drawEdgeTrianglePath = function(e2, t2, n2) {
  t2.fillStyle = t2.strokeStyle;
  for (var r2 = e2.pstyle(`width`).pfValue, i2 = 0; i2 + 1 < n2.length; i2 += 2) {
    var a2 = [n2[i2 + 2] - n2[i2], n2[i2 + 3] - n2[i2 + 1]], o2 = Math.sqrt(a2[0] * a2[0] + a2[1] * a2[1]), s2 = [a2[1] / o2, -a2[0] / o2], c2 = [s2[0] * r2 / 2, s2[1] * r2 / 2];
    t2.beginPath(), t2.moveTo(n2[i2] - c2[0], n2[i2 + 1] - c2[1]), t2.lineTo(n2[i2] + c2[0], n2[i2 + 1] + c2[1]), t2.lineTo(n2[i2 + 2], n2[i2 + 3]), t2.closePath(), t2.fill();
  }
}, Zp.drawArrowheads = function(e2, t2, n2) {
  var r2 = t2._private.rscratch, i2 = r2.edgeType === `haystack`;
  i2 || this.drawArrowhead(e2, t2, `source`, r2.arrowStartX, r2.arrowStartY, r2.srcArrowAngle, n2), this.drawArrowhead(e2, t2, `mid-target`, r2.midX, r2.midY, r2.midtgtArrowAngle, n2), this.drawArrowhead(e2, t2, `mid-source`, r2.midX, r2.midY, r2.midsrcArrowAngle, n2), i2 || this.drawArrowhead(e2, t2, `target`, r2.arrowEndX, r2.arrowEndY, r2.tgtArrowAngle, n2);
}, Zp.drawArrowhead = function(e2, t2, n2, r2, i2, a2, o2) {
  if (!(isNaN(r2) || r2 == null || isNaN(i2) || i2 == null || isNaN(a2) || a2 == null)) {
    var s2 = this, c2 = t2.pstyle(n2 + `-arrow-shape`).value;
    if (c2 !== `none`) {
      var l2 = t2.pstyle(n2 + `-arrow-fill`).value === `hollow` ? `both` : `filled`, u2 = t2.pstyle(n2 + `-arrow-fill`).value, d2 = t2.pstyle(`width`).pfValue, f2 = t2.pstyle(n2 + `-arrow-width`), p2 = f2.value === `match-line` ? d2 : f2.pfValue;
      f2.units === `%` && (p2 *= d2);
      var m2 = t2.pstyle(`opacity`).value;
      o2 === void 0 && (o2 = m2);
      var h2 = e2.globalCompositeOperation;
      (o2 !== 1 || u2 === `hollow`) && (e2.globalCompositeOperation = `destination-out`, s2.colorFillStyle(e2, 255, 255, 255, 1), s2.colorStrokeStyle(e2, 255, 255, 255, 1), s2.drawArrowShape(t2, e2, l2, d2, c2, p2, r2, i2, a2), e2.globalCompositeOperation = h2);
      var g2 = t2.pstyle(n2 + `-arrow-color`).value;
      s2.colorFillStyle(e2, g2[0], g2[1], g2[2], o2), s2.colorStrokeStyle(e2, g2[0], g2[1], g2[2], o2), s2.drawArrowShape(t2, e2, u2, d2, c2, p2, r2, i2, a2);
    }
  }
}, Zp.drawArrowShape = function(e2, t2, n2, r2, i2, a2, o2, s2, c2) {
  var l2 = this, u2 = this.usePaths() && i2 !== `triangle-cross`, d2 = false, f2, p2 = t2, m2 = { x: o2, y: s2 }, h2 = e2.pstyle(`arrow-scale`).value, g2 = this.getArrowWidth(r2, h2), _2 = l2.arrowShapes[i2];
  if (u2) {
    var v2 = l2.arrowPathCache = l2.arrowPathCache || [], y2 = Ct(i2), b2 = v2[y2];
    b2 == null ? (f2 = t2 = new Path2D(), v2[y2] = f2) : (f2 = t2 = b2, d2 = true);
  }
  d2 || (t2.beginPath && t2.beginPath(), u2 ? _2.draw(t2, 1, 0, { x: 0, y: 0 }, 1) : _2.draw(t2, g2, c2, m2, r2), t2.closePath && t2.closePath()), t2 = p2, u2 && (t2.translate(o2, s2), t2.rotate(c2), t2.scale(g2, g2)), (n2 === `filled` || n2 === `both`) && (u2 ? t2.fill(f2) : t2.fill()), (n2 === `hollow` || n2 === `both`) && (t2.lineWidth = a2 / (u2 ? g2 : 1), t2.lineJoin = `miter`, u2 ? t2.stroke(f2) : t2.stroke()), u2 && (t2.scale(1 / g2, 1 / g2), t2.rotate(-c2), t2.translate(-o2, -s2));
};
var $p = {};
$p.safeDrawImage = function(e2, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
  if (!(i2 <= 0 || a2 <= 0 || c2 <= 0 || l2 <= 0)) try {
    e2.drawImage(t2, n2, r2, i2, a2, o2, s2, c2, l2);
  } catch (e3) {
    zt(e3);
  }
}, $p.drawInscribedImage = function(e2, t2, n2, r2, i2) {
  var a2 = this, o2 = n2.position(), s2 = o2.x, c2 = o2.y, l2 = n2.cy().style(), u2 = l2.getIndexedStyle.bind(l2), d2 = u2(n2, `background-fit`, `value`, r2), f2 = u2(n2, `background-repeat`, `value`, r2), p2 = n2.width(), m2 = n2.height(), h2 = n2.padding() * 2, g2 = p2 + (u2(n2, `background-width-relative-to`, `value`, r2) === `inner` ? 0 : h2), _2 = m2 + (u2(n2, `background-height-relative-to`, `value`, r2) === `inner` ? 0 : h2), v2 = n2._private.rscratch, y2 = u2(n2, `background-clip`, `value`, r2) === `node`, b2 = u2(n2, `background-image-opacity`, `value`, r2) * i2, x2 = u2(n2, `background-image-smoothing`, `value`, r2), S2 = n2.pstyle(`corner-radius`).value;
  S2 !== `auto` && (S2 = n2.pstyle(`corner-radius`).pfValue);
  var C2 = t2.width || t2.cachedW, w2 = t2.height || t2.cachedH;
  (C2 == null || w2 == null) && (document.body.appendChild(t2), C2 = t2.cachedW = t2.width || t2.offsetWidth, w2 = t2.cachedH = t2.height || t2.offsetHeight, document.body.removeChild(t2));
  var T2 = C2, E2 = w2;
  if (u2(n2, `background-width`, `value`, r2) !== `auto` && (T2 = u2(n2, `background-width`, `units`, r2) === `%` ? u2(n2, `background-width`, `pfValue`, r2) * g2 : u2(n2, `background-width`, `pfValue`, r2)), u2(n2, `background-height`, `value`, r2) !== `auto` && (E2 = u2(n2, `background-height`, `units`, r2) === `%` ? u2(n2, `background-height`, `pfValue`, r2) * _2 : u2(n2, `background-height`, `pfValue`, r2)), !(T2 === 0 || E2 === 0)) {
    if (d2 === `contain`) {
      var D2 = Math.min(g2 / T2, _2 / E2);
      T2 *= D2, E2 *= D2;
    } else if (d2 === `cover`) {
      var D2 = Math.max(g2 / T2, _2 / E2);
      T2 *= D2, E2 *= D2;
    }
    var O2 = s2 - g2 / 2, k2 = u2(n2, `background-position-x`, `units`, r2), A2 = u2(n2, `background-position-x`, `pfValue`, r2);
    k2 === `%` ? O2 += (g2 - T2) * A2 : O2 += A2;
    var j2 = u2(n2, `background-offset-x`, `units`, r2), M2 = u2(n2, `background-offset-x`, `pfValue`, r2);
    j2 === `%` ? O2 += (g2 - T2) * M2 : O2 += M2;
    var N2 = c2 - _2 / 2, P2 = u2(n2, `background-position-y`, `units`, r2), F2 = u2(n2, `background-position-y`, `pfValue`, r2);
    P2 === `%` ? N2 += (_2 - E2) * F2 : N2 += F2;
    var I2 = u2(n2, `background-offset-y`, `units`, r2), L2 = u2(n2, `background-offset-y`, `pfValue`, r2);
    I2 === `%` ? N2 += (_2 - E2) * L2 : N2 += L2, v2.pathCache && (O2 -= s2, N2 -= c2, s2 = 0, c2 = 0);
    var R2 = e2.globalAlpha;
    e2.globalAlpha = b2;
    var z2 = a2.getImgSmoothing(e2), B2 = false;
    x2 === `no` && z2 ? (a2.setImgSmoothing(e2, false), B2 = true) : x2 === `yes` && !z2 && (a2.setImgSmoothing(e2, true), B2 = true), f2 === `no-repeat` ? (y2 && (e2.save(), v2.pathCache ? e2.clip(v2.pathCache) : (a2.nodeShapes[a2.getNodeShape(n2)].draw(e2, s2, c2, g2, _2, S2, v2), e2.clip())), a2.safeDrawImage(e2, t2, 0, 0, C2, w2, O2, N2, T2, E2), y2 && e2.restore()) : (e2.fillStyle = e2.createPattern(t2, f2), a2.nodeShapes[a2.getNodeShape(n2)].draw(e2, s2, c2, g2, _2, S2, v2), e2.translate(O2, N2), e2.fill(), e2.translate(-O2, -N2)), e2.globalAlpha = R2, B2 && a2.setImgSmoothing(e2, z2);
  }
};
var em = {};
em.eleTextBiggerThanMin = function(e2, t2) {
  if (!t2) {
    var n2 = e2.cy().zoom(), r2 = this.getPixelRatio();
    t2 = 2 ** Math.ceil(Rn(n2 * r2));
  }
  return !(e2.pstyle(`font-size`).pfValue * t2 < e2.pstyle(`min-zoomed-font-size`).pfValue);
}, em.drawElementText = function(e2, t2, n2, r2, i2) {
  var a2 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true, o2 = this;
  if (r2 == null) {
    if (a2 && !o2.eleTextBiggerThanMin(t2)) return;
  } else if (r2 === false) return;
  if (t2.isNode()) {
    var s2 = t2.pstyle(`label`);
    if (!s2 || !s2.value) return;
    e2.textAlign = o2.getLabelJustification(t2), e2.textBaseline = `bottom`;
  } else {
    var c2 = t2.element()._private.rscratch.badLine, l2 = t2.pstyle(`label`), u2 = t2.pstyle(`source-label`), d2 = t2.pstyle(`target-label`);
    if (c2 || (!l2 || !l2.value) && (!u2 || !u2.value) && (!d2 || !d2.value)) return;
    e2.textAlign = `center`, e2.textBaseline = `bottom`;
  }
  var f2 = !n2, p2;
  n2 && (p2 = n2, e2.translate(-p2.x1, -p2.y1)), i2 == null ? (o2.drawText(e2, t2, null, f2, a2), t2.isEdge() && (o2.drawText(e2, t2, `source`, f2, a2), o2.drawText(e2, t2, `target`, f2, a2))) : o2.drawText(e2, t2, i2, f2, a2), n2 && e2.translate(p2.x1, p2.y1);
}, em.getFontCache = function(e2) {
  var t2;
  this.fontCaches = this.fontCaches || [];
  for (var n2 = 0; n2 < this.fontCaches.length; n2++) if (t2 = this.fontCaches[n2], t2.context === e2) return t2;
  return t2 = { context: e2 }, this.fontCaches.push(t2), t2;
}, em.setupTextStyle = function(e2, t2) {
  var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, r2 = t2.pstyle(`font-style`).strValue, i2 = t2.pstyle(`font-size`).pfValue + `px`, a2 = t2.pstyle(`font-family`).strValue, o2 = t2.pstyle(`font-weight`).strValue, s2 = n2 ? t2.effectiveOpacity() * t2.pstyle(`text-opacity`).value : 1, c2 = t2.pstyle(`text-outline-opacity`).value * s2, l2 = t2.pstyle(`color`).value, u2 = t2.pstyle(`text-outline-color`).value;
  e2.font = r2 + ` ` + o2 + ` ` + i2 + ` ` + a2, e2.lineJoin = `round`, this.colorFillStyle(e2, l2[0], l2[1], l2[2], s2), this.colorStrokeStyle(e2, u2[0], u2[1], u2[2], c2);
};
function tm(e2, t2, n2, r2, i2) {
  var a2 = Math.min(r2, i2) / 2, o2 = t2 + r2 / 2, s2 = n2 + i2 / 2;
  e2.beginPath(), e2.arc(o2, s2, a2, 0, Math.PI * 2), e2.closePath();
}
function nm(e2, t2, n2, r2, i2) {
  var a2 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 5, o2 = Math.min(a2, r2 / 2, i2 / 2);
  e2.beginPath(), e2.moveTo(t2 + o2, n2), e2.lineTo(t2 + r2 - o2, n2), e2.quadraticCurveTo(t2 + r2, n2, t2 + r2, n2 + o2), e2.lineTo(t2 + r2, n2 + i2 - o2), e2.quadraticCurveTo(t2 + r2, n2 + i2, t2 + r2 - o2, n2 + i2), e2.lineTo(t2 + o2, n2 + i2), e2.quadraticCurveTo(t2, n2 + i2, t2, n2 + i2 - o2), e2.lineTo(t2, n2 + o2), e2.quadraticCurveTo(t2, n2, t2 + o2, n2), e2.closePath();
}
em.getTextAngle = function(e2, t2) {
  var n2, r2 = e2._private.rscratch, i2 = t2 ? t2 + `-` : ``, a2 = e2.pstyle(i2 + `text-rotation`);
  if (a2.strValue === `autorotate`) {
    var o2 = Xt(r2, `labelAngle`, t2);
    n2 = e2.isEdge() ? o2 : 0;
  } else n2 = a2.strValue === `none` ? 0 : a2.pfValue;
  return n2;
}, em.drawText = function(e2, t2, n2) {
  var r2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, i2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, a2 = t2._private.rscratch, o2 = i2 ? t2.effectiveOpacity() : 1;
  if (!(i2 && (o2 === 0 || t2.pstyle(`text-opacity`).value === 0))) {
    n2 === `main` && (n2 = null);
    var s2 = Xt(a2, `labelX`, n2), c2 = Xt(a2, `labelY`, n2), l2, u2, d2 = this.getLabelText(t2, n2);
    if (d2 != null && d2 !== `` && !isNaN(s2) && !isNaN(c2)) {
      this.setupTextStyle(e2, t2, i2);
      var f2 = n2 ? n2 + `-` : ``, p2 = Xt(a2, `labelWidth`, n2), m2 = Xt(a2, `labelHeight`, n2), h2 = t2.pstyle(f2 + `text-margin-x`).pfValue, g2 = t2.pstyle(f2 + `text-margin-y`).pfValue, _2 = t2.isEdge(), v2 = t2.pstyle(`text-halign`).value, y2 = t2.pstyle(`text-valign`).value;
      _2 && (v2 = `center`, y2 = `center`), s2 += h2, c2 += g2;
      var b2 = r2 ? this.getTextAngle(t2, n2) : 0;
      switch (b2 !== 0 && (l2 = s2, u2 = c2, e2.translate(l2, u2), e2.rotate(b2), s2 = 0, c2 = 0), y2) {
        case `top`:
          break;
        case `center`:
          c2 += m2 / 2;
          break;
        case `bottom`:
          c2 += m2;
          break;
      }
      var x2 = t2.pstyle(`text-background-opacity`).value, S2 = t2.pstyle(`text-border-opacity`).value, C2 = t2.pstyle(`text-border-width`).pfValue, w2 = t2.pstyle(`text-background-padding`).pfValue, T2 = t2.pstyle(`text-background-shape`).strValue, E2 = T2 === `round-rectangle` || T2 === `roundrectangle`, D2 = T2 === `circle`, O2 = 2;
      if (x2 > 0 || C2 > 0 && S2 > 0) {
        var k2 = e2.fillStyle, A2 = e2.strokeStyle, j2 = e2.lineWidth, M2 = t2.pstyle(`text-background-color`).value, N2 = t2.pstyle(`text-border-color`).value, P2 = t2.pstyle(`text-border-style`).value, F2 = x2 > 0, I2 = C2 > 0 && S2 > 0, L2 = s2 - w2;
        switch (v2) {
          case `left`:
            L2 -= p2;
            break;
          case `center`:
            L2 -= p2 / 2;
            break;
        }
        var R2 = c2 - m2 - w2, z2 = p2 + 2 * w2, B2 = m2 + 2 * w2;
        if (F2 && (e2.fillStyle = `rgba(${M2[0]},${M2[1]},${M2[2]},${x2 * o2})`), I2 && (e2.strokeStyle = `rgba(${N2[0]},${N2[1]},${N2[2]},${S2 * o2})`, e2.lineWidth = C2, e2.setLineDash)) switch (P2) {
          case `dotted`:
            e2.setLineDash([1, 1]);
            break;
          case `dashed`:
            e2.setLineDash([4, 2]);
            break;
          case `double`:
            e2.lineWidth = C2 / 4, e2.setLineDash([]);
            break;
          case `solid`:
          default:
            e2.setLineDash([]);
            break;
        }
        if (E2 ? (e2.beginPath(), nm(e2, L2, R2, z2, B2, O2)) : D2 ? (e2.beginPath(), tm(e2, L2, R2, z2, B2)) : (e2.beginPath(), e2.rect(L2, R2, z2, B2)), F2 && e2.fill(), I2 && e2.stroke(), I2 && P2 === `double`) {
          var V2 = C2 / 2;
          e2.beginPath(), E2 ? nm(e2, L2 + V2, R2 + V2, z2 - 2 * V2, B2 - 2 * V2, O2) : e2.rect(L2 + V2, R2 + V2, z2 - 2 * V2, B2 - 2 * V2), e2.stroke();
        }
        e2.fillStyle = k2, e2.strokeStyle = A2, e2.lineWidth = j2, e2.setLineDash && e2.setLineDash([]);
      }
      var H2 = 2 * t2.pstyle(`text-outline-width`).pfValue;
      if (H2 > 0 && (e2.lineWidth = H2), t2.pstyle(`text-wrap`).value === `wrap`) {
        var U2 = Xt(a2, `labelWrapCachedLines`, n2), W2 = Xt(a2, `labelLineHeight`, n2), G2 = p2 / 2, K2 = this.getLabelJustification(t2);
        switch (K2 === `auto` || (v2 === `left` ? K2 === `left` ? s2 += -p2 : K2 === `center` && (s2 += -G2) : v2 === `center` ? K2 === `left` ? s2 += -G2 : K2 === `right` && (s2 += G2) : v2 === `right` && (K2 === `center` ? s2 += G2 : K2 === `right` && (s2 += p2))), y2) {
          case `top`:
            c2 -= (U2.length - 1) * W2;
            break;
          case `center`:
          case `bottom`:
            c2 -= (U2.length - 1) * W2;
            break;
        }
        for (var q2 = 0; q2 < U2.length; q2++) H2 > 0 && e2.strokeText(U2[q2], s2, c2), e2.fillText(U2[q2], s2, c2), c2 += W2;
      } else H2 > 0 && e2.strokeText(d2, s2, c2), e2.fillText(d2, s2, c2);
      b2 !== 0 && (e2.rotate(-b2), e2.translate(-l2, -u2));
    }
  }
};
var rm = {};
rm.drawNode = function(e2, t2, n2) {
  var r2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, i2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, a2 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true, o2 = this, s2, c2, l2 = t2._private, u2 = l2.rscratch, d2 = t2.position();
  if (!(!A(d2.x) || !A(d2.y)) && !(a2 && !t2.visible())) {
    var f2 = a2 ? t2.effectiveOpacity() : 1, p2 = o2.usePaths(), m2, h2 = false, g2 = t2.padding();
    s2 = t2.width() + 2 * g2, c2 = t2.height() + 2 * g2;
    var _2;
    n2 && (_2 = n2, e2.translate(-_2.x1, -_2.y1));
    for (var v2 = t2.pstyle(`background-image`).value, y2 = Array(v2.length), b2 = Array(v2.length), x2 = 0, S2 = 0; S2 < v2.length; S2++) {
      var C2 = v2[S2];
      if (y2[S2] = C2 != null && C2 !== `none`) {
        var w2 = t2.cy().style().getIndexedStyle(t2, `background-image-crossorigin`, `value`, S2);
        x2++, b2[S2] = o2.getCachedImage(C2, w2, function() {
          l2.backgroundTimestamp = Date.now(), t2.emitAndNotify(`background`);
        });
      }
    }
    var T2 = t2.pstyle(`background-blacken`).value, E2 = t2.pstyle(`border-width`).pfValue, D2 = t2.pstyle(`background-opacity`).value * f2, O2 = t2.pstyle(`border-color`).value, k2 = t2.pstyle(`border-style`).value, j2 = t2.pstyle(`border-join`).value, M2 = t2.pstyle(`border-cap`).value, N2 = t2.pstyle(`border-position`).value, P2 = t2.pstyle(`border-dash-pattern`).pfValue, F2 = t2.pstyle(`border-dash-offset`).pfValue, I2 = t2.pstyle(`border-opacity`).value * f2, L2 = t2.pstyle(`outline-width`).pfValue, R2 = t2.pstyle(`outline-color`).value, z2 = t2.pstyle(`outline-style`).value, B2 = t2.pstyle(`outline-opacity`).value * f2, V2 = t2.pstyle(`outline-offset`).value, H2 = t2.pstyle(`corner-radius`).value;
    H2 !== `auto` && (H2 = t2.pstyle(`corner-radius`).pfValue);
    var U2 = function() {
      var n3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : D2;
      o2.eleFillStyle(e2, t2, n3);
    }, W2 = function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : I2;
      o2.colorStrokeStyle(e2, O2[0], O2[1], O2[2], t3);
    }, G2 = function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : B2;
      o2.colorStrokeStyle(e2, R2[0], R2[1], R2[2], t3);
    }, K2 = function(e3, t3, n3, r3) {
      var i3 = o2.nodePathCache = o2.nodePathCache || [], a3 = wt(n3 === `polygon` ? n3 + `,` + r3.join(`,`) : n3, `` + t3, `` + e3, `` + H2), s3 = i3[a3], c3, l3 = false;
      return s3 == null ? (c3 = new Path2D(), i3[a3] = u2.pathCache = c3) : (c3 = s3, l3 = true, u2.pathCache = c3), { path: c3, cacheHit: l3 };
    }, q2 = t2.pstyle(`shape`).strValue, J2 = t2.pstyle(`shape-polygon-points`).pfValue;
    if (p2) {
      e2.translate(d2.x, d2.y);
      var ee2 = K2(s2, c2, q2, J2);
      m2 = ee2.path, h2 = ee2.cacheHit;
    }
    var Y2 = function() {
      if (!h2) {
        var n3 = d2;
        p2 && (n3 = { x: 0, y: 0 }), o2.nodeShapes[o2.getNodeShape(t2)].draw(m2 || e2, n3.x, n3.y, s2, c2, H2, u2);
      }
      p2 ? e2.fill(m2) : e2.fill();
    }, te2 = function() {
      for (var n3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : f2, r3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, i3 = l2.backgrounding, a3 = 0, s3 = 0; s3 < b2.length; s3++) {
        var c3 = t2.cy().style().getIndexedStyle(t2, `background-image-containment`, `value`, s3);
        if (r3 && c3 === `over` || !r3 && c3 === `inside`) {
          a3++;
          continue;
        }
        y2[s3] && b2[s3].complete && !b2[s3].error && (a3++, o2.drawInscribedImage(e2, b2[s3], t2, s3, n3));
      }
      l2.backgrounding = a3 !== x2, i3 !== l2.backgrounding && t2.updateStyle(false);
    }, ne2 = function() {
      var n3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, r3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : f2;
      o2.hasPie(t2) && (o2.drawPie(e2, t2, r3), n3 && (p2 || o2.nodeShapes[o2.getNodeShape(t2)].draw(e2, d2.x, d2.y, s2, c2, H2, u2)));
    }, re2 = function() {
      var n3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, r3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : f2;
      o2.hasStripe(t2) && (e2.save(), p2 ? e2.clip(u2.pathCache) : (o2.nodeShapes[o2.getNodeShape(t2)].draw(e2, d2.x, d2.y, s2, c2, H2, u2), e2.clip()), o2.drawStripe(e2, t2, r3), e2.restore(), n3 && (p2 || o2.nodeShapes[o2.getNodeShape(t2)].draw(e2, d2.x, d2.y, s2, c2, H2, u2)));
    }, ie2 = function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : f2, n3 = (T2 > 0 ? T2 : -T2) * t3, r3 = T2 > 0 ? 0 : 255;
      T2 !== 0 && (o2.colorFillStyle(e2, r3, r3, r3, n3), p2 ? e2.fill(m2) : e2.fill());
    }, ae2 = function() {
      if (E2 > 0) {
        if (e2.lineWidth = E2, e2.lineCap = M2, e2.lineJoin = j2, e2.setLineDash) switch (k2) {
          case `dotted`:
            e2.setLineDash([1, 1]);
            break;
          case `dashed`:
            e2.setLineDash(P2), e2.lineDashOffset = F2;
            break;
          case `solid`:
          case `double`:
            e2.setLineDash([]);
            break;
        }
        if (N2 !== `center`) {
          if (e2.save(), e2.lineWidth *= 2, N2 === `inside`) p2 ? e2.clip(m2) : e2.clip();
          else {
            var t3 = new Path2D();
            t3.rect(-s2 / 2 - E2, -c2 / 2 - E2, s2 + 2 * E2, c2 + 2 * E2), t3.addPath(m2), e2.clip(t3, `evenodd`);
          }
          p2 ? e2.stroke(m2) : e2.stroke(), e2.restore();
        } else p2 ? e2.stroke(m2) : e2.stroke();
        if (k2 === `double`) {
          e2.lineWidth = E2 / 3;
          var n3 = e2.globalCompositeOperation;
          e2.globalCompositeOperation = `destination-out`, p2 ? e2.stroke(m2) : e2.stroke(), e2.globalCompositeOperation = n3;
        }
        e2.setLineDash && e2.setLineDash([]);
      }
    }, oe2 = function() {
      if (L2 > 0) {
        if (e2.lineWidth = L2, e2.lineCap = `butt`, e2.setLineDash) switch (z2) {
          case `dotted`:
            e2.setLineDash([1, 1]);
            break;
          case `dashed`:
            e2.setLineDash([4, 2]);
            break;
          case `solid`:
          case `double`:
            e2.setLineDash([]);
            break;
        }
        var n3 = d2;
        p2 && (n3 = { x: 0, y: 0 });
        var r3 = o2.getNodeShape(t2), i3 = E2;
        N2 === `inside` && (i3 = 0), N2 === `outside` && (i3 *= 2);
        var a3 = (s2 + i3 + (L2 + V2)) / s2, l3 = (c2 + i3 + (L2 + V2)) / c2, u3 = s2 * a3, f3 = c2 * l3, m3 = o2.nodeShapes[r3].points, h3;
        if (p2 && (h3 = K2(u3, f3, r3, m3).path), r3 === `ellipse`) o2.drawEllipsePath(h3 || e2, n3.x, n3.y, u3, f3);
        else if ([`round-diamond`, `round-heptagon`, `round-hexagon`, `round-octagon`, `round-pentagon`, `round-polygon`, `round-triangle`, `round-tag`].includes(r3)) {
          var g3 = 0, _3 = 0, v3 = 0;
          r3 === `round-diamond` ? g3 = (i3 + V2 + L2) * 1.4 : r3 === `round-heptagon` ? (g3 = (i3 + V2 + L2) * 1.075, v3 = -(i3 / 2 + V2 + L2) / 35) : r3 === `round-hexagon` ? g3 = (i3 + V2 + L2) * 1.12 : r3 === `round-pentagon` ? (g3 = (i3 + V2 + L2) * 1.13, v3 = -(i3 / 2 + V2 + L2) / 15) : r3 === `round-tag` ? (g3 = (i3 + V2 + L2) * 1.12, _3 = (i3 / 2 + L2 + V2) * 0.07) : r3 === `round-triangle` && (g3 = (i3 + V2 + L2) * (Math.PI / 2), v3 = -(i3 + V2 / 2 + L2) / Math.PI), g3 !== 0 && (a3 = (s2 + g3) / s2, u3 = s2 * a3, [`round-hexagon`, `round-tag`].includes(r3) || (l3 = (c2 + g3) / c2, f3 = c2 * l3)), H2 = H2 === `auto` ? Nr(u3, f3) : H2;
          for (var y3 = u3 / 2, b3 = f3 / 2, x3 = H2 + (i3 + L2 + V2) / 2, S3 = Array(m3.length / 2), C3 = Array(m3.length / 2), w3 = 0; w3 < m3.length / 2; w3++) S3[w3] = { x: n3.x + _3 + y3 * m3[w3 * 2], y: n3.y + v3 + b3 * m3[w3 * 2 + 1] };
          var T3, D3, O3, k3, A2 = S3.length;
          for (D3 = S3[A2 - 1], T3 = 0; T3 < A2; T3++) O3 = S3[T3 % A2], k3 = S3[(T3 + 1) % A2], C3[T3] = Sf(D3, O3, k3, x3), D3 = O3, O3 = k3;
          o2.drawRoundPolygonPath(h3 || e2, n3.x + _3, n3.y + v3, s2 * a3, c2 * l3, m3, C3);
        } else if ([`roundrectangle`, `round-rectangle`].includes(r3)) H2 = H2 === `auto` ? Mr(u3, f3) : H2, o2.drawRoundRectanglePath(h3 || e2, n3.x, n3.y, u3, f3, H2 + (i3 + L2 + V2) / 2);
        else if ([`cutrectangle`, `cut-rectangle`].includes(r3)) H2 = H2 === `auto` ? Pr() : H2, o2.drawCutRectanglePath(h3 || e2, n3.x, n3.y, u3, f3, null, H2 + (i3 + L2 + V2) / 4);
        else if ([`bottomroundrectangle`, `bottom-round-rectangle`].includes(r3)) H2 = H2 === `auto` ? Mr(u3, f3) : H2, o2.drawBottomRoundRectanglePath(h3 || e2, n3.x, n3.y, u3, f3, H2 + (i3 + L2 + V2) / 2);
        else if (r3 === `barrel`) o2.drawBarrelPath(h3 || e2, n3.x, n3.y, u3, f3);
        else if (r3.startsWith(`polygon`) || [`rhomboid`, `right-rhomboid`, `round-tag`, `tag`, `vee`].includes(r3)) {
          var j3 = (i3 + L2 + V2) / s2;
          m3 = vr(yr(m3, j3)), o2.drawPolygonPath(h3 || e2, n3.x, n3.y, s2, c2, m3);
        } else {
          var M3 = (i3 + L2 + V2) / s2;
          m3 = vr(yr(m3, -M3)), o2.drawPolygonPath(h3 || e2, n3.x, n3.y, s2, c2, m3);
        }
        if (p2 ? e2.stroke(h3) : e2.stroke(), z2 === `double`) {
          e2.lineWidth = i3 / 3;
          var P3 = e2.globalCompositeOperation;
          e2.globalCompositeOperation = `destination-out`, p2 ? e2.stroke(h3) : e2.stroke(), e2.globalCompositeOperation = P3;
        }
        e2.setLineDash && e2.setLineDash([]);
      }
    }, se2 = function() {
      i2 && o2.drawNodeOverlay(e2, t2, d2, s2, c2);
    }, ce2 = function() {
      i2 && o2.drawNodeUnderlay(e2, t2, d2, s2, c2);
    }, X2 = function() {
      o2.drawElementText(e2, t2, null, r2);
    };
    if (t2.pstyle(`ghost`).value === `yes`) {
      var le2 = t2.pstyle(`ghost-offset-x`).pfValue, ue2 = t2.pstyle(`ghost-offset-y`).pfValue, de2 = t2.pstyle(`ghost-opacity`).value, fe2 = de2 * f2;
      e2.translate(le2, ue2), G2(), oe2(), U2(de2 * D2), Y2(), te2(fe2, true), W2(de2 * I2), ae2(), ne2(T2 !== 0 || E2 !== 0), re2(T2 !== 0 || E2 !== 0), te2(fe2, false), ie2(fe2), e2.translate(-le2, -ue2);
    }
    p2 && e2.translate(-d2.x, -d2.y), ce2(), p2 && e2.translate(d2.x, d2.y), G2(), oe2(), U2(), Y2(), te2(f2, true), W2(), ae2(), ne2(T2 !== 0 || E2 !== 0), re2(T2 !== 0 || E2 !== 0), te2(f2, false), ie2(), p2 && e2.translate(-d2.x, -d2.y), X2(), se2(), n2 && e2.translate(_2.x1, _2.y1);
  }
};
var im = function(e2) {
  if (![`overlay`, `underlay`].includes(e2)) throw Error(`Invalid state`);
  return function(t2, n2, r2, i2, a2) {
    var o2 = this;
    if (n2.visible()) {
      var s2 = n2.pstyle(`${e2}-padding`).pfValue, c2 = n2.pstyle(`${e2}-opacity`).value, l2 = n2.pstyle(`${e2}-color`).value, u2 = n2.pstyle(`${e2}-shape`).value, d2 = n2.pstyle(`${e2}-corner-radius`).value;
      if (c2 > 0) {
        if (r2 || (r2 = n2.position()), i2 == null || a2 == null) {
          var f2 = n2.padding();
          i2 = n2.width() + 2 * f2, a2 = n2.height() + 2 * f2;
        }
        o2.colorFillStyle(t2, l2[0], l2[1], l2[2], c2), o2.nodeShapes[u2].draw(t2, r2.x, r2.y, i2 + s2 * 2, a2 + s2 * 2, d2), t2.fill();
      }
    }
  };
};
rm.drawNodeOverlay = im(`overlay`), rm.drawNodeUnderlay = im(`underlay`), rm.hasPie = function(e2) {
  return e2 = e2[0], e2._private.hasPie;
}, rm.hasStripe = function(e2) {
  return e2 = e2[0], e2._private.hasStripe;
}, rm.drawPie = function(e2, t2, n2, r2) {
  t2 = t2[0], r2 || (r2 = t2.position());
  var i2 = t2.cy().style(), a2 = t2.pstyle(`pie-size`), o2 = t2.pstyle(`pie-hole`), s2 = t2.pstyle(`pie-start-angle`).pfValue, c2 = r2.x, l2 = r2.y, u2 = t2.width(), d2 = t2.height(), f2 = Math.min(u2, d2) / 2, p2, m2 = 0;
  if (this.usePaths() && (c2 = 0, l2 = 0), a2.units === `%` ? f2 *= a2.pfValue : a2.pfValue !== void 0 && (f2 = a2.pfValue / 2), o2.units === `%` ? p2 = f2 * o2.pfValue : o2.pfValue !== void 0 && (p2 = o2.pfValue / 2), !(p2 >= f2)) for (var h2 = 1; h2 <= i2.pieBackgroundN; h2++) {
    var g2 = t2.pstyle(`pie-` + h2 + `-background-size`).value, _2 = t2.pstyle(`pie-` + h2 + `-background-color`).value, v2 = t2.pstyle(`pie-` + h2 + `-background-opacity`).value * n2, y2 = g2 / 100;
    y2 + m2 > 1 && (y2 = 1 - m2);
    var b2 = 1.5 * Math.PI + 2 * Math.PI * m2;
    b2 += s2;
    var x2 = 2 * Math.PI * y2, S2 = b2 + x2;
    g2 === 0 || m2 >= 1 || m2 + y2 > 1 || (p2 === 0 ? (e2.beginPath(), e2.moveTo(c2, l2), e2.arc(c2, l2, f2, b2, S2), e2.closePath()) : (e2.beginPath(), e2.arc(c2, l2, f2, b2, S2), e2.arc(c2, l2, p2, S2, b2, true), e2.closePath()), this.colorFillStyle(e2, _2[0], _2[1], _2[2], v2), e2.fill(), m2 += y2);
  }
}, rm.drawStripe = function(e2, t2, n2, r2) {
  t2 = t2[0], r2 || (r2 = t2.position());
  var i2 = t2.cy().style(), a2 = r2.x, o2 = r2.y, s2 = t2.width(), c2 = t2.height(), l2 = 0, u2 = this.usePaths();
  e2.save();
  var d2 = t2.pstyle(`stripe-direction`).value, f2 = t2.pstyle(`stripe-size`);
  switch (d2) {
    case `vertical`:
      break;
    case `righward`:
      e2.rotate(-Math.PI / 2);
      break;
  }
  var p2 = s2, m2 = c2;
  f2.units === `%` ? (p2 *= f2.pfValue, m2 *= f2.pfValue) : f2.pfValue !== void 0 && (p2 = f2.pfValue, m2 = f2.pfValue), u2 && (a2 = 0, o2 = 0), o2 -= p2 / 2, a2 -= m2 / 2;
  for (var h2 = 1; h2 <= i2.stripeBackgroundN; h2++) {
    var g2 = t2.pstyle(`stripe-` + h2 + `-background-size`).value, _2 = t2.pstyle(`stripe-` + h2 + `-background-color`).value, v2 = t2.pstyle(`stripe-` + h2 + `-background-opacity`).value * n2, y2 = g2 / 100;
    y2 + l2 > 1 && (y2 = 1 - l2), !(g2 === 0 || l2 >= 1 || l2 + y2 > 1) && (e2.beginPath(), e2.rect(a2, o2 + m2 * l2, p2, m2 * y2), e2.closePath(), this.colorFillStyle(e2, _2[0], _2[1], _2[2], v2), e2.fill(), l2 += y2);
  }
  e2.restore();
};
var am = {}, om = 100;
am.getPixelRatio = function() {
  var e2 = this.data.contexts[0];
  if (this.forcedPixelRatio != null) return this.forcedPixelRatio;
  var t2 = this.cy.window(), n2 = e2.backingStorePixelRatio || e2.webkitBackingStorePixelRatio || e2.mozBackingStorePixelRatio || e2.msBackingStorePixelRatio || e2.oBackingStorePixelRatio || e2.backingStorePixelRatio || 1;
  return (t2.devicePixelRatio || 1) / n2;
}, am.paintCache = function(e2) {
  for (var t2 = this.paintCaches = this.paintCaches || [], n2 = true, r2, i2 = 0; i2 < t2.length; i2++) if (r2 = t2[i2], r2.context === e2) {
    n2 = false;
    break;
  }
  return n2 && (r2 = { context: e2 }, t2.push(r2)), r2;
}, am.createGradientStyleFor = function(e2, t2, n2, r2, i2) {
  var a2, o2 = this.usePaths(), s2 = n2.pstyle(t2 + `-gradient-stop-colors`).value, c2 = n2.pstyle(t2 + `-gradient-stop-positions`).pfValue;
  if (r2 === `radial-gradient`) if (n2.isEdge()) {
    var l2 = n2.sourceEndpoint(), u2 = n2.targetEndpoint(), d2 = n2.midpoint(), f2 = Bn(l2, d2), p2 = Bn(u2, d2);
    a2 = e2.createRadialGradient(d2.x, d2.y, 0, d2.x, d2.y, Math.max(f2, p2));
  } else {
    var m2 = o2 ? { x: 0, y: 0 } : n2.position(), h2 = n2.paddedWidth(), g2 = n2.paddedHeight();
    a2 = e2.createRadialGradient(m2.x, m2.y, 0, m2.x, m2.y, Math.max(h2, g2));
  }
  else if (n2.isEdge()) {
    var _2 = n2.sourceEndpoint(), v2 = n2.targetEndpoint();
    a2 = e2.createLinearGradient(_2.x, _2.y, v2.x, v2.y);
  } else {
    var y2 = o2 ? { x: 0, y: 0 } : n2.position(), b2 = n2.paddedWidth(), x2 = n2.paddedHeight(), S2 = b2 / 2, C2 = x2 / 2;
    switch (n2.pstyle(`background-gradient-direction`).value) {
      case `to-bottom`:
        a2 = e2.createLinearGradient(y2.x, y2.y - C2, y2.x, y2.y + C2);
        break;
      case `to-top`:
        a2 = e2.createLinearGradient(y2.x, y2.y + C2, y2.x, y2.y - C2);
        break;
      case `to-left`:
        a2 = e2.createLinearGradient(y2.x + S2, y2.y, y2.x - S2, y2.y);
        break;
      case `to-right`:
        a2 = e2.createLinearGradient(y2.x - S2, y2.y, y2.x + S2, y2.y);
        break;
      case `to-bottom-right`:
      case `to-right-bottom`:
        a2 = e2.createLinearGradient(y2.x - S2, y2.y - C2, y2.x + S2, y2.y + C2);
        break;
      case `to-top-right`:
      case `to-right-top`:
        a2 = e2.createLinearGradient(y2.x - S2, y2.y + C2, y2.x + S2, y2.y - C2);
        break;
      case `to-bottom-left`:
      case `to-left-bottom`:
        a2 = e2.createLinearGradient(y2.x + S2, y2.y - C2, y2.x - S2, y2.y + C2);
        break;
      case `to-top-left`:
      case `to-left-top`:
        a2 = e2.createLinearGradient(y2.x + S2, y2.y + C2, y2.x - S2, y2.y - C2);
        break;
    }
  }
  if (!a2) return null;
  for (var w2 = c2.length === s2.length, T2 = s2.length, E2 = 0; E2 < T2; E2++) a2.addColorStop(w2 ? c2[E2] : E2 / (T2 - 1), `rgba(` + s2[E2][0] + `,` + s2[E2][1] + `,` + s2[E2][2] + `,` + i2 + `)`);
  return a2;
}, am.gradientFillStyle = function(e2, t2, n2, r2) {
  var i2 = this.createGradientStyleFor(e2, `background`, t2, n2, r2);
  if (!i2) return null;
  e2.fillStyle = i2;
}, am.colorFillStyle = function(e2, t2, n2, r2, i2) {
  e2.fillStyle = `rgba(` + t2 + `,` + n2 + `,` + r2 + `,` + i2 + `)`;
}, am.eleFillStyle = function(e2, t2, n2) {
  var r2 = t2.pstyle(`background-fill`).value;
  if (r2 === `linear-gradient` || r2 === `radial-gradient`) this.gradientFillStyle(e2, t2, r2, n2);
  else {
    var i2 = t2.pstyle(`background-color`).value;
    this.colorFillStyle(e2, i2[0], i2[1], i2[2], n2);
  }
}, am.gradientStrokeStyle = function(e2, t2, n2, r2) {
  var i2 = this.createGradientStyleFor(e2, `line`, t2, n2, r2);
  if (!i2) return null;
  e2.strokeStyle = i2;
}, am.colorStrokeStyle = function(e2, t2, n2, r2, i2) {
  e2.strokeStyle = `rgba(` + t2 + `,` + n2 + `,` + r2 + `,` + i2 + `)`;
}, am.eleStrokeStyle = function(e2, t2, n2) {
  var r2 = t2.pstyle(`line-fill`).value;
  if (r2 === `linear-gradient` || r2 === `radial-gradient`) this.gradientStrokeStyle(e2, t2, r2, n2);
  else {
    var i2 = t2.pstyle(`line-color`).value;
    this.colorStrokeStyle(e2, i2[0], i2[1], i2[2], n2);
  }
}, am.matchCanvasSize = function(e2) {
  var t2 = this, n2 = t2.data, r2 = t2.findContainerClientCoords(), i2 = r2[2], a2 = r2[3], o2 = t2.getPixelRatio(), s2 = t2.motionBlurPxRatio;
  (e2 === t2.data.bufferCanvases[t2.MOTIONBLUR_BUFFER_NODE] || e2 === t2.data.bufferCanvases[t2.MOTIONBLUR_BUFFER_DRAG]) && (o2 = s2);
  var c2 = i2 * o2, l2 = a2 * o2, u2;
  if (!(c2 === t2.canvasWidth && l2 === t2.canvasHeight)) {
    t2.fontCaches = null;
    var d2 = n2.canvasContainer;
    d2.style.width = i2 + `px`, d2.style.height = a2 + `px`;
    for (var f2 = 0; f2 < t2.CANVAS_LAYERS; f2++) u2 = n2.canvases[f2], u2.width = c2, u2.height = l2, u2.style.width = i2 + `px`, u2.style.height = a2 + `px`;
    for (var f2 = 0; f2 < t2.BUFFER_COUNT; f2++) u2 = n2.bufferCanvases[f2], u2.width = c2, u2.height = l2, u2.style.width = i2 + `px`, u2.style.height = a2 + `px`;
    t2.textureMult = 1, o2 <= 1 && (u2 = n2.bufferCanvases[t2.TEXTURE_BUFFER], t2.textureMult = 2, u2.width = c2 * t2.textureMult, u2.height = l2 * t2.textureMult), t2.canvasWidth = c2, t2.canvasHeight = l2, t2.pixelRatio = o2;
  }
}, am.renderTo = function(e2, t2, n2, r2) {
  this.render({ forcedContext: e2, forcedZoom: t2, forcedPan: n2, drawAllLayers: true, forcedPxRatio: r2 });
}, am.clearCanvas = function() {
  var e2 = this, t2 = e2.data;
  function n2(t3) {
    t3.clearRect(0, 0, e2.canvasWidth, e2.canvasHeight);
  }
  n2(t2.contexts[e2.NODE]), n2(t2.contexts[e2.DRAG]);
}, am.render = function(e2) {
  var t2 = this;
  e2 || (e2 = Gt());
  var n2 = t2.cy, r2 = e2.forcedContext, i2 = e2.drawAllLayers, a2 = e2.drawOnlyNodeLayer, o2 = e2.forcedZoom, s2 = e2.forcedPan, c2 = e2.forcedPxRatio === void 0 ? this.getPixelRatio() : e2.forcedPxRatio, l2 = t2.data, u2 = l2.canvasNeedsRedraw, d2 = t2.textureOnViewport && !r2 && (t2.pinching || t2.hoverData.dragging || t2.swipePanning || t2.data.wheelZooming), f2 = e2.motionBlur === void 0 ? t2.motionBlur : e2.motionBlur, p2 = t2.motionBlurPxRatio, m2 = n2.hasCompoundNodes(), h2 = t2.hoverData.draggingEles, g2 = !!(t2.hoverData.selecting || t2.touchData.selecting);
  f2 = f2 && !r2 && t2.motionBlurEnabled && !g2;
  var _2 = f2;
  r2 || (t2.prevPxRatio !== c2 && (t2.invalidateContainerClientCoordsCache(), t2.matchCanvasSize(t2.container), t2.redrawHint(`eles`, true), t2.redrawHint(`drag`, true)), t2.prevPxRatio = c2), !r2 && t2.motionBlurTimeout && clearTimeout(t2.motionBlurTimeout), f2 && (t2.mbFrames ?? (t2.mbFrames = 0), t2.mbFrames++, t2.mbFrames < 3 && (_2 = false), t2.mbFrames > t2.minMbLowQualFrames && (t2.motionBlurPxRatio = t2.mbPxRBlurry)), t2.clearingMotionBlur && (t2.motionBlurPxRatio = 1), t2.textureDrawLastFrame && !d2 && (u2[t2.NODE] = true, u2[t2.SELECT_BOX] = true);
  var v2 = n2.style(), y2 = n2.zoom(), b2 = o2 === void 0 ? y2 : o2, x2 = n2.pan(), S2 = { x: x2.x, y: x2.y }, C2 = { zoom: y2, pan: { x: x2.x, y: x2.y } }, w2 = t2.prevViewport;
  !(w2 === void 0 || C2.zoom !== w2.zoom || C2.pan.x !== w2.pan.x || C2.pan.y !== w2.pan.y) && !(h2 && !m2) && (t2.motionBlurPxRatio = 1), s2 && (S2 = s2), b2 *= c2, S2.x *= c2, S2.y *= c2;
  var T2 = t2.getCachedZSortedEles();
  function E2(e3, n3, r3, i3, a3) {
    var o3 = e3.globalCompositeOperation;
    e3.globalCompositeOperation = `destination-out`, t2.colorFillStyle(e3, 255, 255, 255, t2.motionBlurTransparency), e3.fillRect(n3, r3, i3, a3), e3.globalCompositeOperation = o3;
  }
  function D2(e3, n3) {
    var a3, c3, u3, d3;
    !t2.clearingMotionBlur && (e3 === l2.bufferContexts[t2.MOTIONBLUR_BUFFER_NODE] || e3 === l2.bufferContexts[t2.MOTIONBLUR_BUFFER_DRAG]) ? (a3 = { x: x2.x * p2, y: x2.y * p2 }, c3 = y2 * p2, u3 = t2.canvasWidth * p2, d3 = t2.canvasHeight * p2) : (a3 = S2, c3 = b2, u3 = t2.canvasWidth, d3 = t2.canvasHeight), e3.setTransform(1, 0, 0, 1, 0, 0), n3 === `motionBlur` ? E2(e3, 0, 0, u3, d3) : !r2 && (n3 === void 0 || n3) && e3.clearRect(0, 0, u3, d3), i2 || (e3.translate(a3.x, a3.y), e3.scale(c3, c3)), s2 && e3.translate(s2.x, s2.y), o2 && e3.scale(o2, o2);
  }
  if (d2 || (t2.textureDrawLastFrame = false), d2) {
    if (t2.textureDrawLastFrame = true, !t2.textureCache) {
      t2.textureCache = {}, t2.textureCache.bb = n2.mutableElements().boundingBox(), t2.textureCache.texture = t2.data.bufferCanvases[t2.TEXTURE_BUFFER];
      var O2 = t2.data.bufferContexts[t2.TEXTURE_BUFFER];
      O2.setTransform(1, 0, 0, 1, 0, 0), O2.clearRect(0, 0, t2.canvasWidth * t2.textureMult, t2.canvasHeight * t2.textureMult), t2.render({ forcedContext: O2, drawOnlyNodeLayer: true, forcedPxRatio: c2 * t2.textureMult });
      var C2 = t2.textureCache.viewport = { zoom: n2.zoom(), pan: n2.pan(), width: t2.canvasWidth, height: t2.canvasHeight };
      C2.mpan = { x: (0 - C2.pan.x) / C2.zoom, y: (0 - C2.pan.y) / C2.zoom };
    }
    u2[t2.DRAG] = false, u2[t2.NODE] = false;
    var k2 = l2.contexts[t2.NODE], A2 = t2.textureCache.texture, C2 = t2.textureCache.viewport;
    k2.setTransform(1, 0, 0, 1, 0, 0), f2 ? E2(k2, 0, 0, C2.width, C2.height) : k2.clearRect(0, 0, C2.width, C2.height);
    var j2 = v2.core(`outside-texture-bg-color`).value, M2 = v2.core(`outside-texture-bg-opacity`).value;
    t2.colorFillStyle(k2, j2[0], j2[1], j2[2], M2), k2.fillRect(0, 0, C2.width, C2.height);
    var y2 = n2.zoom();
    D2(k2, false), k2.clearRect(C2.mpan.x, C2.mpan.y, C2.width / C2.zoom / c2, C2.height / C2.zoom / c2), k2.drawImage(A2, C2.mpan.x, C2.mpan.y, C2.width / C2.zoom / c2, C2.height / C2.zoom / c2);
  } else t2.textureOnViewport && !r2 && (t2.textureCache = null);
  var N2 = n2.extent(), P2 = t2.pinching || t2.hoverData.dragging || t2.swipePanning || t2.data.wheelZooming || t2.hoverData.draggingEles || t2.cy.animated(), F2 = t2.hideEdgesOnViewport && P2, I2 = [];
  if (I2[t2.NODE] = !u2[t2.NODE] && f2 && !t2.clearedForMotionBlur[t2.NODE] || t2.clearingMotionBlur, I2[t2.NODE] && (t2.clearedForMotionBlur[t2.NODE] = true), I2[t2.DRAG] = !u2[t2.DRAG] && f2 && !t2.clearedForMotionBlur[t2.DRAG] || t2.clearingMotionBlur, I2[t2.DRAG] && (t2.clearedForMotionBlur[t2.DRAG] = true), u2[t2.NODE] || i2 || a2 || I2[t2.NODE]) {
    var L2 = f2 && !I2[t2.NODE] && p2 !== 1, k2 = r2 || (L2 ? t2.data.bufferContexts[t2.MOTIONBLUR_BUFFER_NODE] : l2.contexts[t2.NODE]);
    D2(k2, f2 && !L2 ? `motionBlur` : void 0), F2 ? t2.drawCachedNodes(k2, T2.nondrag, c2, N2) : t2.drawLayeredElements(k2, T2.nondrag, c2, N2), t2.debug && t2.drawDebugPoints(k2, T2.nondrag), !i2 && !f2 && (u2[t2.NODE] = false);
  }
  if (!a2 && (u2[t2.DRAG] || i2 || I2[t2.DRAG])) {
    var L2 = f2 && !I2[t2.DRAG] && p2 !== 1, k2 = r2 || (L2 ? t2.data.bufferContexts[t2.MOTIONBLUR_BUFFER_DRAG] : l2.contexts[t2.DRAG]);
    D2(k2, f2 && !L2 ? `motionBlur` : void 0), F2 ? t2.drawCachedNodes(k2, T2.drag, c2, N2) : t2.drawCachedElements(k2, T2.drag, c2, N2), t2.debug && t2.drawDebugPoints(k2, T2.drag), !i2 && !f2 && (u2[t2.DRAG] = false);
  }
  if (this.drawSelectionRectangle(e2, D2), f2 && p2 !== 1) {
    var R2 = l2.contexts[t2.NODE], z2 = t2.data.bufferCanvases[t2.MOTIONBLUR_BUFFER_NODE], B2 = l2.contexts[t2.DRAG], V2 = t2.data.bufferCanvases[t2.MOTIONBLUR_BUFFER_DRAG], H2 = function(e3, n3, r3) {
      e3.setTransform(1, 0, 0, 1, 0, 0), r3 || !_2 ? e3.clearRect(0, 0, t2.canvasWidth, t2.canvasHeight) : E2(e3, 0, 0, t2.canvasWidth, t2.canvasHeight);
      var i3 = p2;
      e3.drawImage(n3, 0, 0, t2.canvasWidth * i3, t2.canvasHeight * i3, 0, 0, t2.canvasWidth, t2.canvasHeight);
    };
    (u2[t2.NODE] || I2[t2.NODE]) && (H2(R2, z2, I2[t2.NODE]), u2[t2.NODE] = false), (u2[t2.DRAG] || I2[t2.DRAG]) && (H2(B2, V2, I2[t2.DRAG]), u2[t2.DRAG] = false);
  }
  t2.prevViewport = C2, t2.clearingMotionBlur && (t2.clearingMotionBlur = false, t2.motionBlurCleared = true, t2.motionBlur = true), f2 && (t2.motionBlurTimeout = setTimeout(function() {
    t2.motionBlurTimeout = null, t2.clearedForMotionBlur[t2.NODE] = false, t2.clearedForMotionBlur[t2.DRAG] = false, t2.motionBlur = false, t2.clearingMotionBlur = !d2, t2.mbFrames = 0, u2[t2.NODE] = true, u2[t2.DRAG] = true, t2.redraw();
  }, om)), r2 || n2.emit(`render`);
};
var sm;
am.drawSelectionRectangle = function(e2, t2) {
  var n2 = this, r2 = n2.cy, i2 = n2.data, a2 = r2.style(), o2 = e2.drawOnlyNodeLayer, s2 = e2.drawAllLayers, c2 = i2.canvasNeedsRedraw, l2 = e2.forcedContext;
  if (n2.showFps || !o2 && c2[n2.SELECT_BOX] && !s2) {
    var u2 = l2 || i2.contexts[n2.SELECT_BOX];
    if (t2(u2), n2.selection[4] == 1 && (n2.hoverData.selecting || n2.touchData.selecting)) {
      var d2 = n2.cy.zoom(), f2 = a2.core(`selection-box-border-width`).value / d2;
      u2.lineWidth = f2, u2.fillStyle = `rgba(` + a2.core(`selection-box-color`).value[0] + `,` + a2.core(`selection-box-color`).value[1] + `,` + a2.core(`selection-box-color`).value[2] + `,` + a2.core(`selection-box-opacity`).value + `)`, u2.fillRect(n2.selection[0], n2.selection[1], n2.selection[2] - n2.selection[0], n2.selection[3] - n2.selection[1]), f2 > 0 && (u2.strokeStyle = `rgba(` + a2.core(`selection-box-border-color`).value[0] + `,` + a2.core(`selection-box-border-color`).value[1] + `,` + a2.core(`selection-box-border-color`).value[2] + `,` + a2.core(`selection-box-opacity`).value + `)`, u2.strokeRect(n2.selection[0], n2.selection[1], n2.selection[2] - n2.selection[0], n2.selection[3] - n2.selection[1]));
    }
    if (i2.bgActivePosistion && !n2.hoverData.selecting) {
      var d2 = n2.cy.zoom(), p2 = i2.bgActivePosistion;
      u2.fillStyle = `rgba(` + a2.core(`active-bg-color`).value[0] + `,` + a2.core(`active-bg-color`).value[1] + `,` + a2.core(`active-bg-color`).value[2] + `,` + a2.core(`active-bg-opacity`).value + `)`, u2.beginPath(), u2.arc(p2.x, p2.y, a2.core(`active-bg-size`).pfValue / d2, 0, 2 * Math.PI), u2.fill();
    }
    var m2 = n2.lastRedrawTime;
    if (n2.showFps && m2) {
      m2 = Math.round(m2);
      var h2 = Math.round(1e3 / m2), g2 = `1 frame = ` + m2 + ` ms = ` + h2 + ` fps`;
      u2.setTransform(1, 0, 0, 1, 0, 0), u2.fillStyle = `rgba(255, 0, 0, 0.75)`, u2.strokeStyle = `rgba(255, 0, 0, 0.75)`, u2.font = `30px Arial`, sm || (sm = u2.measureText(g2).actualBoundingBoxAscent), u2.fillText(g2, 0, sm), u2.strokeRect(0, sm + 10, 250, 20), u2.fillRect(0, sm + 10, 250 * Math.min(h2 / 60, 1), 20);
    }
    s2 || (c2[n2.SELECT_BOX] = false);
  }
};
function cm(e2, t2, n2) {
  var r2 = e2.createShader(t2);
  if (e2.shaderSource(r2, n2), e2.compileShader(r2), !e2.getShaderParameter(r2, e2.COMPILE_STATUS)) throw Error(e2.getShaderInfoLog(r2));
  return r2;
}
function lm(e2, t2, n2) {
  var r2 = cm(e2, e2.VERTEX_SHADER, t2), i2 = cm(e2, e2.FRAGMENT_SHADER, n2), a2 = e2.createProgram();
  if (e2.attachShader(a2, r2), e2.attachShader(a2, i2), e2.linkProgram(a2), !e2.getProgramParameter(a2, e2.LINK_STATUS)) throw Error(`Could not initialize shaders`);
  return a2;
}
function um(e2, t2, n2) {
  n2 === void 0 && (n2 = t2);
  var r2 = e2.makeOffscreenCanvas(t2, n2), i2 = r2.context = r2.getContext(`2d`);
  return r2.clear = function() {
    return i2.clearRect(0, 0, r2.width, r2.height);
  }, r2.clear(), r2;
}
function dm(e2) {
  var t2 = e2.pixelRatio, n2 = e2.cy.zoom(), r2 = e2.cy.pan();
  return { zoom: n2 * t2, pan: { x: r2.x * t2, y: r2.y * t2 } };
}
function fm(e2) {
  var t2 = e2.pixelRatio;
  return e2.cy.zoom() * t2;
}
function pm(e2, t2, n2, r2, i2) {
  var a2 = r2 * n2 + t2.x, o2 = i2 * n2 + t2.y;
  return o2 = Math.round(e2.canvasHeight - o2), [a2, o2];
}
function mm(e2) {
  return e2.pstyle(`background-fill`).value !== `solid` || e2.pstyle(`background-image`).strValue !== `none` ? false : e2.pstyle(`border-width`).value === 0 || e2.pstyle(`border-opacity`).value === 0 ? true : e2.pstyle(`border-style`).value === `solid`;
}
function hm(e2, t2) {
  if (e2.length !== t2.length) return false;
  for (var n2 = 0; n2 < e2.length; n2++) if (e2[n2] !== t2[n2]) return false;
  return true;
}
function gm(e2, t2, n2) {
  var r2 = e2[0] / 255, i2 = e2[1] / 255, a2 = e2[2] / 255, o2 = t2, s2 = n2 || [, , , ,];
  return s2[0] = r2 * o2, s2[1] = i2 * o2, s2[2] = a2 * o2, s2[3] = o2, s2;
}
function _m(e2, t2) {
  var n2 = t2 || [, , , ,];
  return n2[0] = (e2 >> 0 & 255) / 255, n2[1] = (e2 >> 8 & 255) / 255, n2[2] = (e2 >> 16 & 255) / 255, n2[3] = (e2 >> 24 & 255) / 255, n2;
}
function vm(e2) {
  return e2[0] + (e2[1] << 8) + (e2[2] << 16) + (e2[3] << 24);
}
function ym(e2, t2) {
  var n2 = e2.createTexture();
  return n2.buffer = function(t3) {
    e2.bindTexture(e2.TEXTURE_2D, n2), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_WRAP_S, e2.CLAMP_TO_EDGE), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_WRAP_T, e2.CLAMP_TO_EDGE), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_MAG_FILTER, e2.LINEAR), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_MIN_FILTER, e2.LINEAR_MIPMAP_NEAREST), e2.pixelStorei(e2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true), e2.texImage2D(e2.TEXTURE_2D, 0, e2.RGBA, e2.RGBA, e2.UNSIGNED_BYTE, t3), e2.generateMipmap(e2.TEXTURE_2D), e2.bindTexture(e2.TEXTURE_2D, null);
  }, n2.deleteTexture = function() {
    e2.deleteTexture(n2);
  }, n2;
}
function bm(e2, t2) {
  switch (t2) {
    case `float`:
      return [1, e2.FLOAT, 4];
    case `vec2`:
      return [2, e2.FLOAT, 4];
    case `vec3`:
      return [3, e2.FLOAT, 4];
    case `vec4`:
      return [4, e2.FLOAT, 4];
    case `int`:
      return [1, e2.INT, 4];
    case `ivec2`:
      return [2, e2.INT, 4];
  }
}
function xm(e2, t2, n2) {
  switch (t2) {
    case e2.FLOAT:
      return new Float32Array(n2);
    case e2.INT:
      return new Int32Array(n2);
  }
}
function Sm(e2, t2, n2, r2, i2, a2) {
  switch (t2) {
    case e2.FLOAT:
      return new Float32Array(n2.buffer, a2 * r2, i2);
    case e2.INT:
      return new Int32Array(n2.buffer, a2 * r2, i2);
  }
}
function Cm(e2, t2, n2, r2) {
  var i2 = f(bm(e2, t2), 2), a2 = i2[0], o2 = i2[1], s2 = xm(e2, o2, r2), c2 = e2.createBuffer();
  return e2.bindBuffer(e2.ARRAY_BUFFER, c2), e2.bufferData(e2.ARRAY_BUFFER, s2, e2.STATIC_DRAW), o2 === e2.FLOAT ? e2.vertexAttribPointer(n2, a2, o2, false, 0, 0) : o2 === e2.INT && e2.vertexAttribIPointer(n2, a2, o2, 0, 0), e2.enableVertexAttribArray(n2), e2.bindBuffer(e2.ARRAY_BUFFER, null), c2;
}
function wm(e2, t2, n2, r2) {
  var i2 = f(bm(e2, n2), 3), a2 = i2[0], o2 = i2[1], s2 = i2[2], c2 = xm(e2, o2, t2 * a2), l2 = a2 * s2, u2 = e2.createBuffer();
  e2.bindBuffer(e2.ARRAY_BUFFER, u2), e2.bufferData(e2.ARRAY_BUFFER, t2 * l2, e2.DYNAMIC_DRAW), e2.enableVertexAttribArray(r2), o2 === e2.FLOAT ? e2.vertexAttribPointer(r2, a2, o2, false, l2, 0) : o2 === e2.INT && e2.vertexAttribIPointer(r2, a2, o2, l2, 0), e2.vertexAttribDivisor(r2, 1), e2.bindBuffer(e2.ARRAY_BUFFER, null);
  for (var d2 = Array(t2), p2 = 0; p2 < t2; p2++) d2[p2] = Sm(e2, o2, c2, l2, a2, p2);
  return u2.dataArray = c2, u2.stride = l2, u2.size = a2, u2.getView = function(e3) {
    return d2[e3];
  }, u2.setPoint = function(e3, t3, n3) {
    var r3 = d2[e3];
    r3[0] = t3, r3[1] = n3;
  }, u2.bufferSubData = function(t3) {
    e2.bindBuffer(e2.ARRAY_BUFFER, u2), t3 ? e2.bufferSubData(e2.ARRAY_BUFFER, 0, c2, 0, t3 * a2) : e2.bufferSubData(e2.ARRAY_BUFFER, 0, c2);
  }, u2;
}
function Tm(e2, t2, n2) {
  for (var r2 = 9, i2 = new Float32Array(t2 * r2), a2 = Array(t2), o2 = 0; o2 < t2; o2++) {
    var s2 = o2 * r2 * 4;
    a2[o2] = new Float32Array(i2.buffer, s2, r2);
  }
  var c2 = e2.createBuffer();
  e2.bindBuffer(e2.ARRAY_BUFFER, c2), e2.bufferData(e2.ARRAY_BUFFER, i2.byteLength, e2.DYNAMIC_DRAW);
  for (var l2 = 0; l2 < 3; l2++) {
    var u2 = n2 + l2;
    e2.enableVertexAttribArray(u2), e2.vertexAttribPointer(u2, 3, e2.FLOAT, false, 36, l2 * 12), e2.vertexAttribDivisor(u2, 1);
  }
  return e2.bindBuffer(e2.ARRAY_BUFFER, null), c2.getMatrixView = function(e3) {
    return a2[e3];
  }, c2.setData = function(e3, t3) {
    a2[t3].set(e3, 0);
  }, c2.bufferSubData = function() {
    e2.bindBuffer(e2.ARRAY_BUFFER, c2), e2.bufferSubData(e2.ARRAY_BUFFER, 0, i2);
  }, c2;
}
function Em(e2) {
  var t2 = e2.createFramebuffer();
  e2.bindFramebuffer(e2.FRAMEBUFFER, t2);
  var n2 = e2.createTexture();
  return e2.bindTexture(e2.TEXTURE_2D, n2), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_MIN_FILTER, e2.LINEAR), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_WRAP_S, e2.CLAMP_TO_EDGE), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_WRAP_T, e2.CLAMP_TO_EDGE), e2.framebufferTexture2D(e2.FRAMEBUFFER, e2.COLOR_ATTACHMENT0, e2.TEXTURE_2D, n2, 0), e2.bindFramebuffer(e2.FRAMEBUFFER, null), t2.setFramebufferAttachmentSizes = function(t3, r2) {
    e2.bindTexture(e2.TEXTURE_2D, n2), e2.texImage2D(e2.TEXTURE_2D, 0, e2.RGBA, t3, r2, 0, e2.RGBA, e2.UNSIGNED_BYTE, null);
  }, t2;
}
var Dm = typeof Float32Array < `u` ? Float32Array : Array;
Math.hypot || (Math.hypot = function() {
  for (var e2 = 0, t2 = arguments.length; t2--; ) e2 += arguments[t2] * arguments[t2];
  return Math.sqrt(e2);
});
function Om() {
  var e2 = new Dm(9);
  return Dm != Float32Array && (e2[1] = 0, e2[2] = 0, e2[3] = 0, e2[5] = 0, e2[6] = 0, e2[7] = 0), e2[0] = 1, e2[4] = 1, e2[8] = 1, e2;
}
function km(e2) {
  return e2[0] = 1, e2[1] = 0, e2[2] = 0, e2[3] = 0, e2[4] = 1, e2[5] = 0, e2[6] = 0, e2[7] = 0, e2[8] = 1, e2;
}
function Am(e2, t2, n2) {
  var r2 = t2[0], i2 = t2[1], a2 = t2[2], o2 = t2[3], s2 = t2[4], c2 = t2[5], l2 = t2[6], u2 = t2[7], d2 = t2[8], f2 = n2[0], p2 = n2[1], m2 = n2[2], h2 = n2[3], g2 = n2[4], _2 = n2[5], v2 = n2[6], y2 = n2[7], b2 = n2[8];
  return e2[0] = f2 * r2 + p2 * o2 + m2 * l2, e2[1] = f2 * i2 + p2 * s2 + m2 * u2, e2[2] = f2 * a2 + p2 * c2 + m2 * d2, e2[3] = h2 * r2 + g2 * o2 + _2 * l2, e2[4] = h2 * i2 + g2 * s2 + _2 * u2, e2[5] = h2 * a2 + g2 * c2 + _2 * d2, e2[6] = v2 * r2 + y2 * o2 + b2 * l2, e2[7] = v2 * i2 + y2 * s2 + b2 * u2, e2[8] = v2 * a2 + y2 * c2 + b2 * d2, e2;
}
function jm(e2, t2, n2) {
  var r2 = t2[0], i2 = t2[1], a2 = t2[2], o2 = t2[3], s2 = t2[4], c2 = t2[5], l2 = t2[6], u2 = t2[7], d2 = t2[8], f2 = n2[0], p2 = n2[1];
  return e2[0] = r2, e2[1] = i2, e2[2] = a2, e2[3] = o2, e2[4] = s2, e2[5] = c2, e2[6] = f2 * r2 + p2 * o2 + l2, e2[7] = f2 * i2 + p2 * s2 + u2, e2[8] = f2 * a2 + p2 * c2 + d2, e2;
}
function Mm(e2, t2, n2) {
  var r2 = t2[0], i2 = t2[1], a2 = t2[2], o2 = t2[3], s2 = t2[4], c2 = t2[5], l2 = t2[6], u2 = t2[7], d2 = t2[8], f2 = Math.sin(n2), p2 = Math.cos(n2);
  return e2[0] = p2 * r2 + f2 * o2, e2[1] = p2 * i2 + f2 * s2, e2[2] = p2 * a2 + f2 * c2, e2[3] = p2 * o2 - f2 * r2, e2[4] = p2 * s2 - f2 * i2, e2[5] = p2 * c2 - f2 * a2, e2[6] = l2, e2[7] = u2, e2[8] = d2, e2;
}
function Nm(e2, t2, n2) {
  var r2 = n2[0], i2 = n2[1];
  return e2[0] = r2 * t2[0], e2[1] = r2 * t2[1], e2[2] = r2 * t2[2], e2[3] = i2 * t2[3], e2[4] = i2 * t2[4], e2[5] = i2 * t2[5], e2[6] = t2[6], e2[7] = t2[7], e2[8] = t2[8], e2;
}
function Pm(e2, t2, n2) {
  return e2[0] = 2 / t2, e2[1] = 0, e2[2] = 0, e2[3] = 0, e2[4] = -2 / n2, e2[5] = 0, e2[6] = -1, e2[7] = 1, e2[8] = 1, e2;
}
var Fm = (function() {
  function e2(t2, n2, i2, a2) {
    r(this, e2), this.debugID = Math.floor(Math.random() * 1e4), this.r = t2, this.texSize = n2, this.texRows = i2, this.texHeight = Math.floor(n2 / i2), this.enableWrapping = true, this.locked = false, this.texture = null, this.needsBuffer = true, this.freePointer = { x: 0, row: 0 }, this.keyToLocation = /* @__PURE__ */ new Map(), this.canvas = a2(t2, n2, n2), this.scratch = a2(t2, n2, this.texHeight, `scratch`);
  }
  return a(e2, [{ key: `lock`, value: function() {
    this.locked = true;
  } }, { key: `getKeys`, value: function() {
    return new Set(this.keyToLocation.keys());
  } }, { key: `getScale`, value: function(e3) {
    var t2 = e3.w, n2 = e3.h, r2 = this.texHeight, i2 = this.texSize, a2 = r2 / n2, o2 = t2 * a2, s2 = n2 * a2;
    return o2 > i2 && (a2 = i2 / t2, o2 = t2 * a2, s2 = n2 * a2), { scale: a2, texW: o2, texH: s2 };
  } }, { key: `draw`, value: function(e3, t2, n2) {
    var r2 = this;
    if (this.locked) throw Error(`can't draw, atlas is locked`);
    var i2 = this.texSize, a2 = this.texRows, o2 = this.texHeight, s2 = this.getScale(t2), c2 = s2.scale, l2 = s2.texW, u2 = s2.texH, d2 = function(e4, r3) {
      if (n2 && r3) {
        var i3 = r3.context, a3 = e4.x, s3 = e4.row, l3 = a3, u3 = o2 * s3;
        i3.save(), i3.translate(l3, u3), i3.scale(c2, c2), n2(i3, t2), i3.restore();
      }
    }, f2 = [null, null], p2 = function() {
      d2(r2.freePointer, r2.canvas), f2[0] = { x: r2.freePointer.x, y: r2.freePointer.row * o2, w: l2, h: u2 }, f2[1] = { x: r2.freePointer.x + l2, y: r2.freePointer.row * o2, w: 0, h: u2 }, r2.freePointer.x += l2, r2.freePointer.x == i2 && (r2.freePointer.x = 0, r2.freePointer.row++);
    }, m2 = function() {
      var e4 = r2.scratch, t3 = r2.canvas;
      e4.clear(), d2({ x: 0, row: 0 }, e4);
      var n3 = i2 - r2.freePointer.x, a3 = l2 - n3, s3 = o2, c3 = r2.freePointer.x, p3 = r2.freePointer.row * o2, m3 = n3;
      t3.context.drawImage(e4, 0, 0, m3, s3, c3, p3, m3, s3), f2[0] = { x: c3, y: p3, w: m3, h: u2 };
      var h3 = n3, g2 = (r2.freePointer.row + 1) * o2, _2 = a3;
      t3 && t3.context.drawImage(e4, h3, 0, _2, s3, 0, g2, _2, s3), f2[1] = { x: 0, y: g2, w: _2, h: u2 }, r2.freePointer.x = a3, r2.freePointer.row++;
    }, h2 = function() {
      r2.freePointer.x = 0, r2.freePointer.row++;
    };
    if (this.freePointer.x + l2 <= i2) p2();
    else if (this.freePointer.row >= a2 - 1) return false;
    else this.freePointer.x === i2 ? (h2(), p2()) : this.enableWrapping ? m2() : (h2(), p2());
    return this.keyToLocation.set(e3, f2), this.needsBuffer = true, f2;
  } }, { key: `getOffsets`, value: function(e3) {
    return this.keyToLocation.get(e3);
  } }, { key: `isEmpty`, value: function() {
    return this.freePointer.x === 0 && this.freePointer.row === 0;
  } }, { key: `canFit`, value: function(e3) {
    if (this.locked) return false;
    var t2 = this.texSize, n2 = this.texRows, r2 = this.getScale(e3).texW;
    return this.freePointer.x + r2 > t2 ? this.freePointer.row < n2 - 1 : true;
  } }, { key: `bufferIfNeeded`, value: function(e3) {
    this.texture || (this.texture = ym(e3, this.debugID)), this.needsBuffer && (this.texture.buffer(this.canvas), this.needsBuffer = false, this.locked && (this.canvas = null, this.scratch = null));
  } }, { key: `dispose`, value: function() {
    this.texture && (this.texture = (this.texture.deleteTexture(), null)), this.canvas = null, this.scratch = null, this.locked = true;
  } }]);
})(), Im = (function() {
  function e2(t2, n2, i2, a2) {
    r(this, e2), this.r = t2, this.texSize = n2, this.texRows = i2, this.createTextureCanvas = a2, this.atlases = [], this.styleKeyToAtlas = /* @__PURE__ */ new Map(), this.markedKeys = /* @__PURE__ */ new Set();
  }
  return a(e2, [{ key: `getKeys`, value: function() {
    return new Set(this.styleKeyToAtlas.keys());
  } }, { key: `_createAtlas`, value: function() {
    var e3 = this.r, t2 = this.texSize, n2 = this.texRows, r2 = this.createTextureCanvas;
    return new Fm(e3, t2, n2, r2);
  } }, { key: `_getScratchCanvas`, value: function() {
    if (!this.scratch) {
      var e3 = this.r, t2 = this.texSize, n2 = this.texRows, r2 = this.createTextureCanvas;
      this.scratch = r2(e3, t2, Math.floor(t2 / n2), `scratch`);
    }
    return this.scratch;
  } }, { key: `draw`, value: function(e3, t2, n2) {
    var r2 = this.styleKeyToAtlas.get(e3);
    return r2 || (r2 = this.atlases[this.atlases.length - 1], (!r2 || !r2.canFit(t2)) && (r2 && r2.lock(), r2 = this._createAtlas(), this.atlases.push(r2)), r2.draw(e3, t2, n2), this.styleKeyToAtlas.set(e3, r2)), r2;
  } }, { key: `getAtlas`, value: function(e3) {
    return this.styleKeyToAtlas.get(e3);
  } }, { key: `hasAtlas`, value: function(e3) {
    return this.styleKeyToAtlas.has(e3);
  } }, { key: `markKeyForGC`, value: function(e3) {
    this.markedKeys.add(e3);
  } }, { key: `gc`, value: function() {
    var e3 = this, t2 = this.markedKeys;
    if (t2.size === 0) {
      console.log(`nothing to garbage collect`);
      return;
    }
    var n2 = [], r2 = /* @__PURE__ */ new Map(), i2 = null, a2 = o(this.atlases), s2;
    try {
      var c2 = function() {
        var a3 = s2.value, c3 = a3.getKeys(), l2 = Lm(t2, c3);
        if (l2.size === 0) return n2.push(a3), c3.forEach(function(e4) {
          return r2.set(e4, a3);
        }), 1;
        i2 || (i2 = e3._createAtlas(), n2.push(i2));
        var u2 = o(c3), d2;
        try {
          for (u2.s(); !(d2 = u2.n()).done; ) {
            var p2 = d2.value;
            if (!l2.has(p2)) {
              var m2 = f(a3.getOffsets(p2), 2), h2 = m2[0], g2 = m2[1];
              i2.canFit({ w: h2.w + g2.w, h: h2.h }) || (i2.lock(), i2 = e3._createAtlas(), n2.push(i2)), a3.canvas && (e3._copyTextureToNewAtlas(p2, a3, i2), r2.set(p2, i2));
            }
          }
        } catch (e4) {
          u2.e(e4);
        } finally {
          u2.f();
        }
        a3.dispose();
      };
      for (a2.s(); !(s2 = a2.n()).done; ) if (c2()) continue;
    } catch (e4) {
      a2.e(e4);
    } finally {
      a2.f();
    }
    this.atlases = n2, this.styleKeyToAtlas = r2, this.markedKeys = /* @__PURE__ */ new Set();
  } }, { key: `_copyTextureToNewAtlas`, value: function(e3, t2, n2) {
    var r2 = f(t2.getOffsets(e3), 2), i2 = r2[0], a2 = r2[1];
    if (a2.w === 0) n2.draw(e3, i2, function(e4) {
      e4.drawImage(t2.canvas, i2.x, i2.y, i2.w, i2.h, 0, 0, i2.w, i2.h);
    });
    else {
      var o2 = this._getScratchCanvas();
      o2.clear(), o2.context.drawImage(t2.canvas, i2.x, i2.y, i2.w, i2.h, 0, 0, i2.w, i2.h), o2.context.drawImage(t2.canvas, a2.x, a2.y, a2.w, a2.h, i2.w, 0, a2.w, a2.h);
      var s2 = i2.w + a2.w, c2 = i2.h;
      n2.draw(e3, { w: s2, h: c2 }, function(e4) {
        e4.drawImage(o2, 0, 0, s2, c2, 0, 0, s2, c2);
      });
    }
  } }, { key: `getCounts`, value: function() {
    return { keyCount: this.styleKeyToAtlas.size, atlasCount: new Set(this.styleKeyToAtlas.values()).size };
  } }]);
})();
function Lm(e2, t2) {
  return e2.intersection ? e2.intersection(t2) : new Set(p(e2).filter(function(e3) {
    return t2.has(e3);
  }));
}
var Rm = (function() {
  function e2(t2, n2) {
    r(this, e2), this.r = t2, this.globalOptions = n2, this.atlasSize = n2.webglTexSize, this.maxAtlasesPerBatch = n2.webglTexPerBatch, this.renderTypes = /* @__PURE__ */ new Map(), this.collections = /* @__PURE__ */ new Map(), this.typeAndIdToKey = /* @__PURE__ */ new Map();
  }
  return a(e2, [{ key: `getAtlasSize`, value: function() {
    return this.atlasSize;
  } }, { key: `addAtlasCollection`, value: function(e3, t2) {
    var n2 = this.globalOptions, r2 = n2.webglTexSize, i2 = n2.createTextureCanvas, a2 = t2.texRows, o2 = this._cacheScratchCanvas(i2), s2 = new Im(this.r, r2, a2, o2);
    this.collections.set(e3, s2);
  } }, { key: `addRenderType`, value: function(e3, t2) {
    var n2 = t2.collection;
    if (!this.collections.has(n2)) throw Error(`invalid atlas collection name '${n2}'`);
    var r2 = X({ type: e3, atlasCollection: this.collections.get(n2) }, t2);
    this.renderTypes.set(e3, r2);
  } }, { key: `getRenderTypeOpts`, value: function(e3) {
    return this.renderTypes.get(e3);
  } }, { key: `getAtlasCollection`, value: function(e3) {
    return this.collections.get(e3);
  } }, { key: `_cacheScratchCanvas`, value: function(e3) {
    var t2 = -1, n2 = -1, r2 = null;
    return function(i2, a2, o2, s2) {
      return s2 ? ((!r2 || a2 != t2 || o2 != n2) && (t2 = a2, n2 = o2, r2 = e3(i2, a2, o2)), r2) : e3(i2, a2, o2);
    };
  } }, { key: `_key`, value: function(e3, t2) {
    return `${e3}-${t2}`;
  } }, { key: `invalidate`, value: function(e3) {
    var t2 = this, n2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r2 = n2.forceRedraw, i2 = r2 === void 0 ? false : r2, a2 = n2.filterEle, s2 = a2 === void 0 ? function() {
      return true;
    } : a2, c2 = n2.filterType, l2 = c2 === void 0 ? function() {
      return true;
    } : c2, u2 = false, d2 = false, f2 = o(e3), p2;
    try {
      for (f2.s(); !(p2 = f2.n()).done; ) {
        var m2 = p2.value;
        if (s2(m2)) {
          var h2 = o(this.renderTypes.values()), g2;
          try {
            var _2 = function() {
              var e4 = g2.value, n3 = e4.type;
              if (l2(n3)) {
                var r3 = t2.collections.get(e4.collection), a3 = e4.getKey(m2), o2 = Array.isArray(a3) ? a3 : [a3];
                if (i2) o2.forEach(function(e5) {
                  return r3.markKeyForGC(e5);
                }), d2 = true;
                else {
                  var s3 = e4.getID ? e4.getID(m2) : m2.id(), c3 = t2._key(n3, s3), f3 = t2.typeAndIdToKey.get(c3);
                  f3 !== void 0 && !hm(o2, f3) && (u2 = true, t2.typeAndIdToKey.delete(c3), f3.forEach(function(e5) {
                    return r3.markKeyForGC(e5);
                  }));
                }
              }
            };
            for (h2.s(); !(g2 = h2.n()).done; ) _2();
          } catch (e4) {
            h2.e(e4);
          } finally {
            h2.f();
          }
        }
      }
    } catch (e4) {
      f2.e(e4);
    } finally {
      f2.f();
    }
    return d2 && (this.gc(), u2 = false), u2;
  } }, { key: `gc`, value: function() {
    var e3 = o(this.collections.values()), t2;
    try {
      for (e3.s(); !(t2 = e3.n()).done; ) t2.value.gc();
    } catch (t3) {
      e3.e(t3);
    } finally {
      e3.f();
    }
  } }, { key: `getOrCreateAtlas`, value: function(e3, t2, n2, r2) {
    var i2 = this.renderTypes.get(t2), a2 = this.collections.get(i2.collection), o2 = false, s2 = a2.draw(r2, n2, function(t3) {
      i2.drawClipped ? (t3.save(), t3.beginPath(), t3.rect(0, 0, n2.w, n2.h), t3.clip(), i2.drawElement(t3, e3, n2, true, true), t3.restore()) : i2.drawElement(t3, e3, n2, true, true), o2 = true;
    });
    if (o2) {
      var c2 = i2.getID ? i2.getID(e3) : e3.id(), l2 = this._key(t2, c2);
      this.typeAndIdToKey.has(l2) ? this.typeAndIdToKey.get(l2).push(r2) : this.typeAndIdToKey.set(l2, [r2]);
    }
    return s2;
  } }, { key: `getAtlasInfo`, value: function(e3, t2) {
    var n2 = this, r2 = this.renderTypes.get(t2), i2 = r2.getKey(e3);
    return (Array.isArray(i2) ? i2 : [i2]).map(function(i3) {
      var a2 = r2.getBoundingBox(e3, i3), o2 = n2.getOrCreateAtlas(e3, t2, a2, i3), s2 = f(o2.getOffsets(i3), 2), c2 = s2[0];
      return { atlas: o2, tex: c2, tex1: c2, tex2: s2[1], bb: a2 };
    });
  } }, { key: `getDebugInfo`, value: function() {
    var e3 = [], t2 = o(this.collections), n2;
    try {
      for (t2.s(); !(n2 = t2.n()).done; ) {
        var r2 = f(n2.value, 2), i2 = r2[0], a2 = r2[1].getCounts(), s2 = a2.keyCount, c2 = a2.atlasCount;
        e3.push({ type: i2, keyCount: s2, atlasCount: c2 });
      }
    } catch (e4) {
      t2.e(e4);
    } finally {
      t2.f();
    }
    return e3;
  } }]);
})(), zm = (function() {
  function e2(t2) {
    r(this, e2), this.globalOptions = t2, this.atlasSize = t2.webglTexSize, this.maxAtlasesPerBatch = t2.webglTexPerBatch, this.batchAtlases = [];
  }
  return a(e2, [{ key: `getMaxAtlasesPerBatch`, value: function() {
    return this.maxAtlasesPerBatch;
  } }, { key: `getAtlasSize`, value: function() {
    return this.atlasSize;
  } }, { key: `getIndexArray`, value: function() {
    return Array.from({ length: this.maxAtlasesPerBatch }, function(e3, t2) {
      return t2;
    });
  } }, { key: `startBatch`, value: function() {
    this.batchAtlases = [];
  } }, { key: `getAtlasCount`, value: function() {
    return this.batchAtlases.length;
  } }, { key: `getAtlases`, value: function() {
    return this.batchAtlases;
  } }, { key: `canAddToCurrentBatch`, value: function(e3) {
    return this.batchAtlases.length === this.maxAtlasesPerBatch ? this.batchAtlases.includes(e3) : true;
  } }, { key: `getAtlasIndexForBatch`, value: function(e3) {
    var t2 = this.batchAtlases.indexOf(e3);
    if (t2 < 0) {
      if (this.batchAtlases.length === this.maxAtlasesPerBatch) throw Error(`cannot add more atlases to batch`);
      this.batchAtlases.push(e3), t2 = this.batchAtlases.length - 1;
    }
    return t2;
  } }]);
})(), Bm = `
  float circleSD(vec2 p, float r) {
    return distance(vec2(0), p) - r; // signed distance
  }
`, Vm = `
  float rectangleSD(vec2 p, vec2 b) {
    vec2 d = abs(p)-b;
    return distance(vec2(0),max(d,0.0)) + min(max(d.x,d.y),0.0);
  }
`, Hm = `
  float roundRectangleSD(vec2 p, vec2 b, vec4 cr) {
    cr.xy = (p.x > 0.0) ? cr.xy : cr.zw;
    cr.x  = (p.y > 0.0) ? cr.x  : cr.y;
    vec2 q = abs(p) - b + cr.x;
    return min(max(q.x, q.y), 0.0) + distance(vec2(0), max(q, 0.0)) - cr.x;
  }
`, Um = `
  float ellipseSD(vec2 p, vec2 ab) {
    p = abs( p ); // symmetry

    // find root with Newton solver
    vec2 q = ab*(p-ab);
    float w = (q.x<q.y)? 1.570796327 : 0.0;
    for( int i=0; i<5; i++ ) {
      vec2 cs = vec2(cos(w),sin(w));
      vec2 u = ab*vec2( cs.x,cs.y);
      vec2 v = ab*vec2(-cs.y,cs.x);
      w = w + dot(p-u,v)/(dot(p-u,u)+dot(v,v));
    }
    
    // compute final point and distance
    float d = length(p-ab*vec2(cos(w),sin(w)));
    
    // return signed distance
    return (dot(p/ab,p/ab)>1.0) ? d : -d;
  }
`, Wm = { SCREEN: { name: `screen`, screen: true }, PICKING: { name: `picking`, picking: true } }, Gm = { IGNORE: 1, USE_BB: 2 }, Km = 0, qm = 1, Jm = 2, Ym = 3, Xm = 4, Zm = 5, Qm = 6, $m = 7, eh = (function() {
  function e2(t2, n2, i2) {
    r(this, e2), this.r = t2, this.gl = n2, this.maxInstances = i2.webglBatchSize, this.atlasSize = i2.webglTexSize, this.bgColor = i2.bgColor, this.debug = i2.webglDebug, this.batchDebugInfo = [], i2.enableWrapping = true, i2.createTextureCanvas = um, this.atlasManager = new Rm(t2, i2), this.batchManager = new zm(i2), this.simpleShapeOptions = /* @__PURE__ */ new Map(), this.program = this._createShaderProgram(Wm.SCREEN), this.pickingProgram = this._createShaderProgram(Wm.PICKING), this.vao = this._createVAO();
  }
  return a(e2, [{ key: `addAtlasCollection`, value: function(e3, t2) {
    this.atlasManager.addAtlasCollection(e3, t2);
  } }, { key: `addTextureAtlasRenderType`, value: function(e3, t2) {
    this.atlasManager.addRenderType(e3, t2);
  } }, { key: `addSimpleShapeRenderType`, value: function(e3, t2) {
    this.simpleShapeOptions.set(e3, t2);
  } }, { key: `invalidate`, value: function(e3) {
    var t2 = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).type, n2 = this.atlasManager;
    return t2 ? n2.invalidate(e3, { filterType: function(e4) {
      return e4 === t2;
    }, forceRedraw: true }) : n2.invalidate(e3);
  } }, { key: `gc`, value: function() {
    this.atlasManager.gc();
  } }, { key: `_createShaderProgram`, value: function(e3) {
    var t2 = this.gl, n2 = `#version 300 es
      precision highp float;

      uniform mat3 uPanZoomMatrix;
      uniform int  uAtlasSize;
      
      // instanced
      in vec2 aPosition; // a vertex from the unit square
      
      in mat3 aTransform; // used to transform verticies, eg into a bounding box
      in int aVertType; // the type of thing we are rendering

      // the z-index that is output when using picking mode
      in vec4 aIndex;
      
      // For textures
      in int aAtlasId; // which shader unit/atlas to use
      in vec4 aTex; // x/y/w/h of texture in atlas

      // for edges
      in vec4 aPointAPointB;
      in vec4 aPointCPointD;
      in vec2 aLineWidth; // also used for node border width

      // simple shapes
      in vec4 aCornerRadius; // for round-rectangle [top-right, bottom-right, top-left, bottom-left]
      in vec4 aColor; // also used for edges
      in vec4 aBorderColor; // aLineWidth is used for border width

      // output values passed to the fragment shader
      out vec2 vTexCoord;
      out vec4 vColor;
      out vec2 vPosition;
      // flat values are not interpolated
      flat out int vAtlasId; 
      flat out int vVertType;
      flat out vec2 vTopRight;
      flat out vec2 vBotLeft;
      flat out vec4 vCornerRadius;
      flat out vec4 vBorderColor;
      flat out vec2 vBorderWidth;
      flat out vec4 vIndex;
      
      void main(void) {
        int vid = gl_VertexID;
        vec2 position = aPosition; // TODO make this a vec3, simplifies some code below

        if(aVertType == ${Km}) {
          float texX = aTex.x; // texture coordinates
          float texY = aTex.y;
          float texW = aTex.z;
          float texH = aTex.w;

          if(vid == 1 || vid == 2 || vid == 4) {
            texX += texW;
          }
          if(vid == 2 || vid == 4 || vid == 5) {
            texY += texH;
          }

          float d = float(uAtlasSize);
          vTexCoord = vec2(texX / d, texY / d); // tex coords must be between 0 and 1

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
        }
        else if(aVertType == ${Xm} || aVertType == ${$m} 
             || aVertType == ${Zm} || aVertType == ${Qm}) { // simple shapes

          // the bounding box is needed by the fragment shader
          vBotLeft  = (aTransform * vec3(0, 0, 1)).xy; // flat
          vTopRight = (aTransform * vec3(1, 1, 1)).xy; // flat
          vPosition = (aTransform * vec3(position, 1)).xy; // will be interpolated

          // calculations are done in the fragment shader, just pass these along
          vColor = aColor;
          vCornerRadius = aCornerRadius;
          vBorderColor = aBorderColor;
          vBorderWidth = aLineWidth;

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
        }
        else if(aVertType == ${qm}) {
          vec2 source = aPointAPointB.xy;
          vec2 target = aPointAPointB.zw;

          // adjust the geometry so that the line is centered on the edge
          position.y = position.y - 0.5;

          // stretch the unit square into a long skinny rectangle
          vec2 xBasis = target - source;
          vec2 yBasis = normalize(vec2(-xBasis.y, xBasis.x));
          vec2 point = source + xBasis * position.x + yBasis * aLineWidth[0] * position.y;

          gl_Position = vec4(uPanZoomMatrix * vec3(point, 1.0), 1.0);
          vColor = aColor;
        } 
        else if(aVertType == ${Jm}) {
          vec2 pointA = aPointAPointB.xy;
          vec2 pointB = aPointAPointB.zw;
          vec2 pointC = aPointCPointD.xy;
          vec2 pointD = aPointCPointD.zw;

          // adjust the geometry so that the line is centered on the edge
          position.y = position.y - 0.5;

          vec2 p0, p1, p2, pos;
          if(position.x == 0.0) { // The left side of the unit square
            p0 = pointA;
            p1 = pointB;
            p2 = pointC;
            pos = position;
          } else { // The right side of the unit square, use same approach but flip the geometry upside down
            p0 = pointD;
            p1 = pointC;
            p2 = pointB;
            pos = vec2(0.0, -position.y);
          }

          vec2 p01 = p1 - p0;
          vec2 p12 = p2 - p1;
          vec2 p21 = p1 - p2;

          // Find the normal vector.
          vec2 tangent = normalize(normalize(p12) + normalize(p01));
          vec2 normal = vec2(-tangent.y, tangent.x);

          // Find the vector perpendicular to p0 -> p1.
          vec2 p01Norm = normalize(vec2(-p01.y, p01.x));

          // Determine the bend direction.
          float sigma = sign(dot(p01 + p21, normal));
          float width = aLineWidth[0];

          if(sign(pos.y) == -sigma) {
            // This is an intersecting vertex. Adjust the position so that there's no overlap.
            vec2 point = 0.5 * width * normal * -sigma / dot(normal, p01Norm);
            gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);
          } else {
            // This is a non-intersecting vertex. Treat it like a mitre join.
            vec2 point = 0.5 * width * normal * sigma * dot(normal, p01Norm);
            gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);
          }

          vColor = aColor;
        } 
        else if(aVertType == ${Ym} && vid < 3) {
          // massage the first triangle into an edge arrow
          if(vid == 0)
            position = vec2(-0.15, -0.3);
          if(vid == 1)
            position = vec2(  0.0,  0.0);
          if(vid == 2)
            position = vec2( 0.15, -0.3);

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
          vColor = aColor;
        }
        else {
          gl_Position = vec4(2.0, 0.0, 0.0, 1.0); // discard vertex by putting it outside webgl clip space
        }

        vAtlasId = aAtlasId;
        vVertType = aVertType;
        vIndex = aIndex;
      }
    `, r2 = this.batchManager.getIndexArray(), i2 = lm(t2, n2, `#version 300 es
      precision highp float;

      // declare texture unit for each texture atlas in the batch
      ${r2.map(function(e4) {
      return `uniform sampler2D uTexture${e4};`;
    }).join(`
	`)}

      uniform vec4 uBGColor;
      uniform float uZoom;

      in vec2 vTexCoord;
      in vec4 vColor;
      in vec2 vPosition; // model coordinates

      flat in int vAtlasId;
      flat in vec4 vIndex;
      flat in int vVertType;
      flat in vec2 vTopRight;
      flat in vec2 vBotLeft;
      flat in vec4 vCornerRadius;
      flat in vec4 vBorderColor;
      flat in vec2 vBorderWidth;

      out vec4 outColor;

      ${Bm}
      ${Vm}
      ${Hm}
      ${Um}

      vec4 blend(vec4 top, vec4 bot) { // blend colors with premultiplied alpha
        return vec4( 
          top.rgb + (bot.rgb * (1.0 - top.a)),
          top.a   + (bot.a   * (1.0 - top.a)) 
        );
      }

      vec4 distInterp(vec4 cA, vec4 cB, float d) { // interpolate color using Signed Distance
        // scale to the zoom level so that borders don't look blurry when zoomed in
        // note 1.5 is an aribitrary value chosen because it looks good
        return mix(cA, cB, 1.0 - smoothstep(0.0, 1.5 / uZoom, abs(d))); 
      }

      void main(void) {
        if(vVertType == ${Km}) {
          // look up the texel from the texture unit
          ${r2.map(function(e4) {
      return `if(vAtlasId == ${e4}) outColor = texture(uTexture${e4}, vTexCoord);`;
    }).join(`
	else `)}
        } 
        else if(vVertType == ${Ym}) {
          // mimics how canvas renderer uses context.globalCompositeOperation = 'destination-out';
          outColor = blend(vColor, uBGColor);
          outColor.a = 1.0; // make opaque, masks out line under arrow
        }
        else if(vVertType == ${Xm} && vBorderWidth == vec2(0.0)) { // simple rectangle with no border
          outColor = vColor; // unit square is already transformed to the rectangle, nothing else needs to be done
        }
        else if(vVertType == ${Xm} || vVertType == ${$m} 
          || vVertType == ${Zm} || vVertType == ${Qm}) { // use SDF

          float outerBorder = vBorderWidth[0];
          float innerBorder = vBorderWidth[1];
          float borderPadding = outerBorder * 2.0;
          float w = vTopRight.x - vBotLeft.x - borderPadding;
          float h = vTopRight.y - vBotLeft.y - borderPadding;
          vec2 b = vec2(w/2.0, h/2.0); // half width, half height
          vec2 p = vPosition - vec2(vTopRight.x - b[0] - outerBorder, vTopRight.y - b[1] - outerBorder); // translate to center

          float d; // signed distance
          if(vVertType == ${Xm}) {
            d = rectangleSD(p, b);
          } else if(vVertType == ${$m} && w == h) {
            d = circleSD(p, b.x); // faster than ellipse
          } else if(vVertType == ${$m}) {
            d = ellipseSD(p, b);
          } else {
            d = roundRectangleSD(p, b, vCornerRadius.wzyx);
          }

          // use the distance to interpolate a color to smooth the edges of the shape, doesn't need multisampling
          // we must smooth colors inwards, because we can't change pixels outside the shape's bounding box
          if(d > 0.0) {
            if(d > outerBorder) {
              discard;
            } else {
              outColor = distInterp(vBorderColor, vec4(0), d - outerBorder);
            }
          } else {
            if(d > innerBorder) {
              vec4 outerColor = outerBorder == 0.0 ? vec4(0) : vBorderColor;
              vec4 innerBorderColor = blend(vBorderColor, vColor);
              outColor = distInterp(innerBorderColor, outerColor, d);
            } 
            else {
              vec4 outerColor;
              if(innerBorder == 0.0 && outerBorder == 0.0) {
                outerColor = vec4(0);
              } else if(innerBorder == 0.0) {
                outerColor = vBorderColor;
              } else {
                outerColor = blend(vBorderColor, vColor);
              }
              outColor = distInterp(vColor, outerColor, d - innerBorder);
            }
          }
        }
        else {
          outColor = vColor;
        }

        ${e3.picking ? `if(outColor.a == 0.0) discard;
             else outColor = vIndex;` : ``}
      }
    `);
    i2.aPosition = t2.getAttribLocation(i2, `aPosition`), i2.aIndex = t2.getAttribLocation(i2, `aIndex`), i2.aVertType = t2.getAttribLocation(i2, `aVertType`), i2.aTransform = t2.getAttribLocation(i2, `aTransform`), i2.aAtlasId = t2.getAttribLocation(i2, `aAtlasId`), i2.aTex = t2.getAttribLocation(i2, `aTex`), i2.aPointAPointB = t2.getAttribLocation(i2, `aPointAPointB`), i2.aPointCPointD = t2.getAttribLocation(i2, `aPointCPointD`), i2.aLineWidth = t2.getAttribLocation(i2, `aLineWidth`), i2.aColor = t2.getAttribLocation(i2, `aColor`), i2.aCornerRadius = t2.getAttribLocation(i2, `aCornerRadius`), i2.aBorderColor = t2.getAttribLocation(i2, `aBorderColor`), i2.uPanZoomMatrix = t2.getUniformLocation(i2, `uPanZoomMatrix`), i2.uAtlasSize = t2.getUniformLocation(i2, `uAtlasSize`), i2.uBGColor = t2.getUniformLocation(i2, `uBGColor`), i2.uZoom = t2.getUniformLocation(i2, `uZoom`), i2.uTextures = [];
    for (var a2 = 0; a2 < this.batchManager.getMaxAtlasesPerBatch(); a2++) i2.uTextures.push(t2.getUniformLocation(i2, `uTexture${a2}`));
    return i2;
  } }, { key: `_createVAO`, value: function() {
    var e3 = [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1];
    this.vertexCount = e3.length / 2;
    var t2 = this.maxInstances, n2 = this.gl, r2 = this.program, i2 = n2.createVertexArray();
    return n2.bindVertexArray(i2), Cm(n2, `vec2`, r2.aPosition, e3), this.transformBuffer = Tm(n2, t2, r2.aTransform), this.indexBuffer = wm(n2, t2, `vec4`, r2.aIndex), this.vertTypeBuffer = wm(n2, t2, `int`, r2.aVertType), this.atlasIdBuffer = wm(n2, t2, `int`, r2.aAtlasId), this.texBuffer = wm(n2, t2, `vec4`, r2.aTex), this.pointAPointBBuffer = wm(n2, t2, `vec4`, r2.aPointAPointB), this.pointCPointDBuffer = wm(n2, t2, `vec4`, r2.aPointCPointD), this.lineWidthBuffer = wm(n2, t2, `vec2`, r2.aLineWidth), this.colorBuffer = wm(n2, t2, `vec4`, r2.aColor), this.cornerRadiusBuffer = wm(n2, t2, `vec4`, r2.aCornerRadius), this.borderColorBuffer = wm(n2, t2, `vec4`, r2.aBorderColor), n2.bindVertexArray(null), i2;
  } }, { key: `buffers`, get: function() {
    var e3 = this;
    return this._buffers || (this._buffers = Object.keys(this).filter(function(e4) {
      return ee(e4, `Buffer`);
    }).map(function(t2) {
      return e3[t2];
    })), this._buffers;
  } }, { key: `startFrame`, value: function(e3) {
    var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Wm.SCREEN;
    this.panZoomMatrix = e3, this.renderTarget = t2, this.batchDebugInfo = [], this.wrappedCount = 0, this.simpleCount = 0, this.startBatch();
  } }, { key: `startBatch`, value: function() {
    this.instanceCount = 0, this.batchManager.startBatch();
  } }, { key: `endFrame`, value: function() {
    this.endBatch();
  } }, { key: `_isVisible`, value: function(e3, t2) {
    return e3.visible() ? t2 && t2.isVisible ? t2.isVisible(e3) : true : false;
  } }, { key: `drawTexture`, value: function(e3, t2, n2) {
    var r2 = this.atlasManager, i2 = this.batchManager, a2 = r2.getRenderTypeOpts(n2);
    if (this._isVisible(e3, a2) && !(e3.isEdge() && !this._isValidEdge(e3))) {
      if (this.renderTarget.picking && a2.getTexPickingMode) {
        var s2 = a2.getTexPickingMode(e3);
        if (s2 === Gm.IGNORE) return;
        if (s2 == Gm.USE_BB) {
          this.drawPickingRectangle(e3, t2, n2);
          return;
        }
      }
      var c2 = o(r2.getAtlasInfo(e3, n2)), l2;
      try {
        for (c2.s(); !(l2 = c2.n()).done; ) {
          var u2 = l2.value, d2 = u2.atlas, p2 = u2.tex1, m2 = u2.tex2;
          i2.canAddToCurrentBatch(d2) || this.endBatch();
          for (var h2 = i2.getAtlasIndexForBatch(d2), g2 = 0, _2 = [[p2, true], [m2, false]]; g2 < _2.length; g2++) {
            var v2 = f(_2[g2], 2), y2 = v2[0], b2 = v2[1];
            if (y2.w != 0) {
              var x2 = this.instanceCount;
              this.vertTypeBuffer.getView(x2)[0] = Km, _m(t2, this.indexBuffer.getView(x2));
              var S2 = this.atlasIdBuffer.getView(x2);
              S2[0] = h2;
              var C2 = this.texBuffer.getView(x2);
              C2[0] = y2.x, C2[1] = y2.y, C2[2] = y2.w, C2[3] = y2.h;
              var w2 = this.transformBuffer.getMatrixView(x2);
              this.setTransformMatrix(e3, w2, a2, u2, b2), this.instanceCount++, b2 || this.wrappedCount++, this.instanceCount >= this.maxInstances && this.endBatch();
            }
          }
        }
      } catch (e4) {
        c2.e(e4);
      } finally {
        c2.f();
      }
    }
  } }, { key: `setTransformMatrix`, value: function(e3, t2, n2, r2) {
    var i2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, a2 = 0;
    if (n2.shapeProps && n2.shapeProps.padding && (a2 = e3.pstyle(n2.shapeProps.padding).pfValue), r2) {
      var o2 = r2.bb, s2 = r2.tex1, c2 = r2.tex2, l2 = s2.w / (s2.w + c2.w);
      i2 || (l2 = 1 - l2);
      var u2 = this._getAdjustedBB(o2, a2, i2, l2);
      this._applyTransformMatrix(t2, u2, n2, e3);
    } else {
      var d2 = n2.getBoundingBox(e3), f2 = this._getAdjustedBB(d2, a2, true, 1);
      this._applyTransformMatrix(t2, f2, n2, e3);
    }
  } }, { key: `_applyTransformMatrix`, value: function(e3, t2, n2, r2) {
    var i2, a2;
    km(e3);
    var o2 = n2.getRotation ? n2.getRotation(r2) : 0;
    if (o2 !== 0) {
      var s2 = n2.getRotationPoint(r2), c2 = s2.x, l2 = s2.y;
      jm(e3, e3, [c2, l2]), Mm(e3, e3, o2);
      var u2 = n2.getRotationOffset(r2);
      i2 = u2.x + (t2.xOffset || 0), a2 = u2.y + (t2.yOffset || 0);
    } else i2 = t2.x1, a2 = t2.y1;
    jm(e3, e3, [i2, a2]), Nm(e3, e3, [t2.w, t2.h]);
  } }, { key: `_getAdjustedBB`, value: function(e3, t2, n2, r2) {
    var i2 = e3.x1, a2 = e3.y1, o2 = e3.w, s2 = e3.h, c2 = e3.yOffset;
    t2 && (i2 -= t2, a2 -= t2, o2 += 2 * t2, s2 += 2 * t2);
    var l2 = 0, u2 = o2 * r2;
    return n2 && r2 < 1 ? o2 = u2 : !n2 && r2 < 1 && (l2 = o2 - u2, i2 += l2, o2 = u2), { x1: i2, y1: a2, w: o2, h: s2, xOffset: l2, yOffset: c2 };
  } }, { key: `drawPickingRectangle`, value: function(e3, t2, n2) {
    var r2 = this.atlasManager.getRenderTypeOpts(n2), i2 = this.instanceCount;
    this.vertTypeBuffer.getView(i2)[0] = Xm, _m(t2, this.indexBuffer.getView(i2)), gm([0, 0, 0], 1, this.colorBuffer.getView(i2));
    var a2 = this.transformBuffer.getMatrixView(i2);
    this.setTransformMatrix(e3, a2, r2), this.simpleCount++, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
  } }, { key: `drawNode`, value: function(e3, t2, n2) {
    var r2 = this.simpleShapeOptions.get(n2);
    if (this._isVisible(e3, r2)) {
      var i2 = r2.shapeProps, a2 = this._getVertTypeForShape(e3, i2.shape);
      if (a2 === void 0 || r2.isSimple && !r2.isSimple(e3)) {
        this.drawTexture(e3, t2, n2);
        return;
      }
      var o2 = this.instanceCount;
      if (this.vertTypeBuffer.getView(o2)[0] = a2, a2 === Zm || a2 === Qm) {
        var s2 = r2.getBoundingBox(e3), c2 = this._getCornerRadius(e3, i2.radius, s2), l2 = this.cornerRadiusBuffer.getView(o2);
        l2[0] = c2, l2[1] = c2, l2[2] = c2, l2[3] = c2, a2 === Qm && (l2[0] = 0, l2[2] = 0);
      }
      _m(t2, this.indexBuffer.getView(o2));
      var u2 = e3.pstyle(i2.color).value, d2 = e3.pstyle(i2.opacity).value;
      gm(u2, d2, this.colorBuffer.getView(o2));
      var f2 = this.lineWidthBuffer.getView(o2);
      if (f2[0] = 0, f2[1] = 0, i2.border) {
        var p2 = e3.pstyle(`border-width`).value;
        if (p2 > 0) {
          var m2 = e3.pstyle(`border-color`).value, h2 = e3.pstyle(`border-opacity`).value;
          gm(m2, h2, this.borderColorBuffer.getView(o2));
          var g2 = e3.pstyle(`border-position`).value;
          if (g2 === `inside`) f2[0] = 0, f2[1] = -p2;
          else if (g2 === `outside`) f2[0] = p2, f2[1] = 0;
          else {
            var _2 = p2 / 2;
            f2[0] = _2, f2[1] = -_2;
          }
        }
      }
      var v2 = this.transformBuffer.getMatrixView(o2);
      this.setTransformMatrix(e3, v2, r2), this.simpleCount++, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
    }
  } }, { key: `_getVertTypeForShape`, value: function(e3, t2) {
    switch (e3.pstyle(t2).value) {
      case `rectangle`:
        return Xm;
      case `ellipse`:
        return $m;
      case `roundrectangle`:
      case `round-rectangle`:
        return Zm;
      case `bottom-round-rectangle`:
        return Qm;
      default:
        return;
    }
  } }, { key: `_getCornerRadius`, value: function(e3, t2, n2) {
    var r2 = n2.w, i2 = n2.h;
    if (e3.pstyle(t2).value === `auto`) return Mr(r2, i2);
    var a2 = e3.pstyle(t2).pfValue, o2 = r2 / 2, s2 = i2 / 2;
    return Math.min(a2, s2, o2);
  } }, { key: `drawEdgeArrow`, value: function(e3, t2, n2) {
    if (e3.visible()) {
      var r2 = e3._private.rscratch, i2, a2, o2;
      if (n2 === `source` ? (i2 = r2.arrowStartX, a2 = r2.arrowStartY, o2 = r2.srcArrowAngle) : (i2 = r2.arrowEndX, a2 = r2.arrowEndY, o2 = r2.tgtArrowAngle), !(isNaN(i2) || i2 == null || isNaN(a2) || a2 == null || isNaN(o2) || o2 == null) && e3.pstyle(n2 + `-arrow-shape`).value !== `none`) {
        var s2 = e3.pstyle(n2 + `-arrow-color`).value, c2 = e3.pstyle(`opacity`).value * e3.pstyle(`line-opacity`).value, l2 = e3.pstyle(`width`).pfValue, u2 = e3.pstyle(`arrow-scale`).value, d2 = this.r.getArrowWidth(l2, u2), f2 = this.instanceCount, p2 = this.transformBuffer.getMatrixView(f2);
        km(p2), jm(p2, p2, [i2, a2]), Nm(p2, p2, [d2, d2]), Mm(p2, p2, o2), this.vertTypeBuffer.getView(f2)[0] = Ym, _m(t2, this.indexBuffer.getView(f2)), gm(s2, c2, this.colorBuffer.getView(f2)), this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
      }
    }
  } }, { key: `drawEdgeLine`, value: function(e3, t2) {
    if (e3.visible()) {
      var n2 = this._getEdgePoints(e3);
      if (n2) {
        var r2 = e3.pstyle(`opacity`).value, i2 = e3.pstyle(`line-opacity`).value, a2 = e3.pstyle(`width`).pfValue, o2 = e3.pstyle(`line-color`).value, s2 = r2 * i2;
        if (n2.length / 2 + this.instanceCount > this.maxInstances && this.endBatch(), n2.length == 4) {
          var c2 = this.instanceCount;
          this.vertTypeBuffer.getView(c2)[0] = qm, _m(t2, this.indexBuffer.getView(c2)), gm(o2, s2, this.colorBuffer.getView(c2));
          var l2 = this.lineWidthBuffer.getView(c2);
          l2[0] = a2;
          var u2 = this.pointAPointBBuffer.getView(c2);
          u2[0] = n2[0], u2[1] = n2[1], u2[2] = n2[2], u2[3] = n2[3], this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
        } else for (var d2 = 0; d2 < n2.length - 2; d2 += 2) {
          var f2 = this.instanceCount;
          this.vertTypeBuffer.getView(f2)[0] = Jm, _m(t2, this.indexBuffer.getView(f2)), gm(o2, s2, this.colorBuffer.getView(f2));
          var p2 = this.lineWidthBuffer.getView(f2);
          p2[0] = a2;
          var m2 = n2[d2 - 2], h2 = n2[d2 - 1], g2 = n2[d2], _2 = n2[d2 + 1], v2 = n2[d2 + 2], y2 = n2[d2 + 3], b2 = n2[d2 + 4], x2 = n2[d2 + 5];
          d2 == 0 && (m2 = 2 * g2 - v2 + 1e-3, h2 = 2 * _2 - y2 + 1e-3), d2 == n2.length - 4 && (b2 = 2 * v2 - g2 + 1e-3, x2 = 2 * y2 - _2 + 1e-3);
          var S2 = this.pointAPointBBuffer.getView(f2);
          S2[0] = m2, S2[1] = h2, S2[2] = g2, S2[3] = _2;
          var C2 = this.pointCPointDBuffer.getView(f2);
          C2[0] = v2, C2[1] = y2, C2[2] = b2, C2[3] = x2, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
        }
      }
    }
  } }, { key: `_isValidEdge`, value: function(e3) {
    var t2 = e3._private.rscratch;
    return !(t2.badLine || t2.allpts == null || isNaN(t2.allpts[0]));
  } }, { key: `_getEdgePoints`, value: function(e3) {
    var t2 = e3._private.rscratch;
    if (this._isValidEdge(e3)) {
      var n2 = t2.allpts;
      if (n2.length == 4) return n2;
      var r2 = this._getNumSegments(e3);
      return this._getCurveSegmentPoints(n2, r2);
    }
  } }, { key: `_getNumSegments`, value: function(e3) {
    return Math.min(15, this.maxInstances);
  } }, { key: `_getCurveSegmentPoints`, value: function(e3, t2) {
    if (e3.length == 4) return e3;
    for (var n2 = Array((t2 + 1) * 2), r2 = 0; r2 <= t2; r2++) if (r2 == 0) n2[0] = e3[0], n2[1] = e3[1];
    else if (r2 == t2) n2[r2 * 2] = e3[e3.length - 2], n2[r2 * 2 + 1] = e3[e3.length - 1];
    else {
      var i2 = r2 / t2;
      this._setCurvePoint(e3, i2, n2, r2 * 2);
    }
    return n2;
  } }, { key: `_setCurvePoint`, value: function(e3, t2, n2, r2) {
    if (e3.length <= 2) n2[r2] = e3[0], n2[r2 + 1] = e3[1];
    else {
      for (var i2 = Array(e3.length - 2), a2 = 0; a2 < i2.length; a2 += 2) {
        var o2 = (1 - t2) * e3[a2] + t2 * e3[a2 + 2], s2 = (1 - t2) * e3[a2 + 1] + t2 * e3[a2 + 3];
        i2[a2] = o2, i2[a2 + 1] = s2;
      }
      return this._setCurvePoint(i2, t2, n2, r2);
    }
  } }, { key: `endBatch`, value: function() {
    var e3 = this.gl, t2 = this.vao, n2 = this.vertexCount, r2 = this.instanceCount;
    if (r2 !== 0) {
      var i2 = this.renderTarget.picking ? this.pickingProgram : this.program;
      e3.useProgram(i2), e3.bindVertexArray(t2);
      var a2 = o(this.buffers), s2;
      try {
        for (a2.s(); !(s2 = a2.n()).done; ) s2.value.bufferSubData(r2);
      } catch (e4) {
        a2.e(e4);
      } finally {
        a2.f();
      }
      for (var c2 = this.batchManager.getAtlases(), l2 = 0; l2 < c2.length; l2++) c2[l2].bufferIfNeeded(e3);
      for (var u2 = 0; u2 < c2.length; u2++) e3.activeTexture(e3.TEXTURE0 + u2), e3.bindTexture(e3.TEXTURE_2D, c2[u2].texture), e3.uniform1i(i2.uTextures[u2], u2);
      e3.uniform1f(i2.uZoom, fm(this.r)), e3.uniformMatrix3fv(i2.uPanZoomMatrix, false, this.panZoomMatrix), e3.uniform1i(i2.uAtlasSize, this.batchManager.getAtlasSize());
      var d2 = gm(this.bgColor, 1);
      e3.uniform4fv(i2.uBGColor, d2), e3.drawArraysInstanced(e3.TRIANGLES, 0, n2, r2), e3.bindVertexArray(null), e3.bindTexture(e3.TEXTURE_2D, null), this.debug && this.batchDebugInfo.push({ count: r2, atlasCount: c2.length }), this.startBatch();
    }
  } }, { key: `getDebugInfo`, value: function() {
    var e3 = this.atlasManager.getDebugInfo(), t2 = e3.reduce(function(e4, t3) {
      return e4 + t3.atlasCount;
    }, 0), n2 = this.batchDebugInfo, r2 = n2.reduce(function(e4, t3) {
      return e4 + t3.count;
    }, 0);
    return { atlasInfo: e3, totalAtlases: t2, wrappedCount: this.wrappedCount, simpleCount: this.simpleCount, batchCount: n2.length, batchInfo: n2, totalInstances: r2 };
  } }]);
})(), th = {};
th.initWebgl = function(e2, t2) {
  var n2 = this, r2 = n2.data.contexts[n2.WEBGL];
  e2.bgColor = nh(n2), e2.webglTexSize = Math.min(e2.webglTexSize, r2.getParameter(r2.MAX_TEXTURE_SIZE)), e2.webglTexRows = Math.min(e2.webglTexRows, 54), e2.webglTexRowsNodes = Math.min(e2.webglTexRowsNodes, 54), e2.webglBatchSize = Math.min(e2.webglBatchSize, 16384), e2.webglTexPerBatch = Math.min(e2.webglTexPerBatch, r2.getParameter(r2.MAX_TEXTURE_IMAGE_UNITS)), n2.webglDebug = e2.webglDebug, n2.webglDebugShowAtlases = e2.webglDebugShowAtlases, n2.pickingFrameBuffer = Em(r2), n2.pickingFrameBuffer.needsDraw = true, n2.drawing = new eh(n2, r2, e2);
  var i2 = function(e3) {
    return function(t3) {
      return n2.getTextAngle(t3, e3);
    };
  }, a2 = function(e3) {
    return function(t3) {
      var n3 = t3.pstyle(e3);
      return n3 && n3.value;
    };
  }, o2 = function(e3) {
    return function(t3) {
      return t3.pstyle(`${e3}-opacity`).value > 0;
    };
  }, s2 = function(e3) {
    return e3.pstyle(`text-events`).strValue === `yes` ? Gm.USE_BB : Gm.IGNORE;
  }, c2 = function(e3) {
    var t3 = e3.position(), n3 = t3.x, r3 = t3.y, i3 = e3.outerWidth(), a3 = e3.outerHeight();
    return { w: i3, h: a3, x1: n3 - i3 / 2, y1: r3 - a3 / 2 };
  };
  n2.drawing.addAtlasCollection(`node`, { texRows: e2.webglTexRowsNodes }), n2.drawing.addAtlasCollection(`label`, { texRows: e2.webglTexRows }), n2.drawing.addTextureAtlasRenderType(`node-body`, { collection: `node`, getKey: t2.getStyleKey, getBoundingBox: t2.getElementBox, drawElement: t2.drawElement }), n2.drawing.addSimpleShapeRenderType(`node-body`, { getBoundingBox: c2, isSimple: mm, shapeProps: { shape: `shape`, color: `background-color`, opacity: `background-opacity`, radius: `corner-radius`, border: true } }), n2.drawing.addSimpleShapeRenderType(`node-overlay`, { getBoundingBox: c2, isVisible: o2(`overlay`), shapeProps: { shape: `overlay-shape`, color: `overlay-color`, opacity: `overlay-opacity`, padding: `overlay-padding`, radius: `overlay-corner-radius` } }), n2.drawing.addSimpleShapeRenderType(`node-underlay`, { getBoundingBox: c2, isVisible: o2(`underlay`), shapeProps: { shape: `underlay-shape`, color: `underlay-color`, opacity: `underlay-opacity`, padding: `underlay-padding`, radius: `underlay-corner-radius` } }), n2.drawing.addTextureAtlasRenderType(`label`, { collection: `label`, getTexPickingMode: s2, getKey: ih(t2.getLabelKey, null), getBoundingBox: ah(t2.getLabelBox, null), drawClipped: true, drawElement: t2.drawLabel, getRotation: i2(null), getRotationPoint: t2.getLabelRotationPoint, getRotationOffset: t2.getLabelRotationOffset, isVisible: a2(`label`) }), n2.drawing.addTextureAtlasRenderType(`edge-source-label`, { collection: `label`, getTexPickingMode: s2, getKey: ih(t2.getSourceLabelKey, `source`), getBoundingBox: ah(t2.getSourceLabelBox, `source`), drawClipped: true, drawElement: t2.drawSourceLabel, getRotation: i2(`source`), getRotationPoint: t2.getSourceLabelRotationPoint, getRotationOffset: t2.getSourceLabelRotationOffset, isVisible: a2(`source-label`) }), n2.drawing.addTextureAtlasRenderType(`edge-target-label`, { collection: `label`, getTexPickingMode: s2, getKey: ih(t2.getTargetLabelKey, `target`), getBoundingBox: ah(t2.getTargetLabelBox, `target`), drawClipped: true, drawElement: t2.drawTargetLabel, getRotation: i2(`target`), getRotationPoint: t2.getTargetLabelRotationPoint, getRotationOffset: t2.getTargetLabelRotationOffset, isVisible: a2(`target-label`) });
  var l2 = st(function() {
    console.log(`garbage collect flag set`), n2.data.gc = true;
  }, 1e4);
  n2.onUpdateEleCalcs(function(e3, t3) {
    var r3 = false;
    t3 && t3.length > 0 && (r3 |= n2.drawing.invalidate(t3)), r3 && l2();
  }), oh(n2);
};
function nh(e2) {
  var t2 = e2.cy.container();
  return pe(t2 && t2.style && t2.style.backgroundColor || `white`);
}
function rh(e2, t2) {
  var n2 = e2._private.rscratch;
  return Xt(n2, `labelWrapCachedLines`, t2) || [];
}
var ih = function(e2, t2) {
  return function(n2) {
    var r2 = e2(n2), i2 = rh(n2, t2);
    return i2.length > 1 ? i2.map(function(e3, t3) {
      return `${r2}_${t3}`;
    }) : r2;
  };
}, ah = function(e2, t2) {
  return function(n2, r2) {
    var i2 = e2(n2);
    if (typeof r2 == `string`) {
      var a2 = r2.indexOf(`_`);
      if (a2 > 0) {
        var o2 = Number(r2.substring(a2 + 1)), s2 = rh(n2, t2), c2 = i2.h / s2.length, l2 = c2 * o2, u2 = i2.y1 + l2;
        return { x1: i2.x1, w: i2.w, y1: u2, h: c2, yOffset: l2 };
      }
    }
    return i2;
  };
};
function oh(e2) {
  var t2 = e2.render;
  e2.render = function(n3) {
    n3 || (n3 = {});
    var r3 = e2.cy;
    e2.webgl && (r3.zoom() > ep ? (sh(e2), t2.call(e2, n3)) : (ch(e2), _h(e2, n3, Wm.SCREEN)));
  };
  var n2 = e2.matchCanvasSize;
  e2.matchCanvasSize = function(t3) {
    n2.call(e2, t3), e2.pickingFrameBuffer.setFramebufferAttachmentSizes(e2.canvasWidth, e2.canvasHeight), e2.pickingFrameBuffer.needsDraw = true;
  }, e2.findNearestElements = function(t3, n3, r3, i3) {
    return hh(e2, t3, n3);
  };
  var r2 = e2.invalidateCachedZSortedEles;
  e2.invalidateCachedZSortedEles = function() {
    r2.call(e2), e2.pickingFrameBuffer.needsDraw = true;
  };
  var i2 = e2.notify;
  e2.notify = function(t3, n3) {
    i2.call(e2, t3, n3), t3 === `viewport` || t3 === `bounds` ? e2.pickingFrameBuffer.needsDraw = true : t3 === `background` && e2.drawing.invalidate(n3, { type: `node-body` });
  };
}
function sh(e2) {
  var t2 = e2.data.contexts[e2.WEBGL];
  t2.clear(t2.COLOR_BUFFER_BIT | t2.DEPTH_BUFFER_BIT);
}
function ch(e2) {
  var t2 = function(t3) {
    t3.save(), t3.setTransform(1, 0, 0, 1, 0, 0), t3.clearRect(0, 0, e2.canvasWidth, e2.canvasHeight), t3.restore();
  };
  t2(e2.data.contexts[e2.NODE]), t2(e2.data.contexts[e2.DRAG]);
}
function lh(e2) {
  var t2 = e2.canvasWidth, n2 = e2.canvasHeight, r2 = dm(e2), i2 = r2.pan, a2 = r2.zoom, o2 = Om();
  jm(o2, o2, [i2.x, i2.y]), Nm(o2, o2, [a2, a2]);
  var s2 = Om();
  Pm(s2, t2, n2);
  var c2 = Om();
  return Am(c2, s2, o2), c2;
}
function uh(e2, t2) {
  var n2 = e2.canvasWidth, r2 = e2.canvasHeight, i2 = dm(e2), a2 = i2.pan, o2 = i2.zoom;
  t2.setTransform(1, 0, 0, 1, 0, 0), t2.clearRect(0, 0, n2, r2), t2.translate(a2.x, a2.y), t2.scale(o2, o2);
}
function dh(e2, t2) {
  e2.drawSelectionRectangle(t2, function(t3) {
    return uh(e2, t3);
  });
}
function fh(e2) {
  var t2 = e2.data.contexts[e2.NODE];
  t2.save(), uh(e2, t2), t2.strokeStyle = `rgba(0, 0, 0, 0.3)`, t2.beginPath(), t2.moveTo(-1e3, 0), t2.lineTo(1e3, 0), t2.stroke(), t2.beginPath(), t2.moveTo(0, -1e3), t2.lineTo(0, 1e3), t2.stroke(), t2.restore();
}
function ph(e2) {
  var t2 = function(t3, n3, r2) {
    for (var i2 = t3.atlasManager.getAtlasCollection(n3), a2 = e2.data.contexts[e2.NODE], o2 = i2.atlases, s2 = 0; s2 < o2.length; s2++) {
      var c2 = o2[s2].canvas;
      if (c2) {
        var l2 = c2.width, u2 = c2.height, d2 = l2 * s2, f2 = c2.height * r2, p2 = 0.4;
        a2.save(), a2.scale(p2, p2), a2.drawImage(c2, d2, f2), a2.strokeStyle = `black`, a2.rect(d2, f2, l2, u2), a2.stroke(), a2.restore();
      }
    }
  }, n2 = 0;
  t2(e2.drawing, `node`, n2++), t2(e2.drawing, `label`, n2++);
}
function mh(e2, t2, n2, r2, i2) {
  var a2, o2, s2, c2, l2 = dm(e2), u2 = l2.pan, d2 = l2.zoom, p2 = f(pm(e2, u2, d2, t2, n2), 2), m2 = p2[0], h2 = p2[1], g2 = 6;
  if (a2 = m2 - g2 / 2, o2 = h2 - g2 / 2, s2 = g2, c2 = g2, s2 === 0 || c2 === 0) return [];
  var _2 = e2.data.contexts[e2.WEBGL];
  _2.bindFramebuffer(_2.FRAMEBUFFER, e2.pickingFrameBuffer), e2.pickingFrameBuffer.needsDraw && (_2.viewport(0, 0, _2.canvas.width, _2.canvas.height), _h(e2, null, Wm.PICKING), e2.pickingFrameBuffer.needsDraw = false);
  var v2 = s2 * c2, y2 = new Uint8Array(v2 * 4);
  _2.readPixels(a2, o2, s2, c2, _2.RGBA, _2.UNSIGNED_BYTE, y2), _2.bindFramebuffer(_2.FRAMEBUFFER, null);
  for (var b2 = /* @__PURE__ */ new Set(), x2 = 0; x2 < v2; x2++) {
    var S2 = vm(y2.slice(x2 * 4, x2 * 4 + 4)) - 1;
    S2 >= 0 && b2.add(S2);
  }
  return b2;
}
function hh(e2, t2, n2) {
  var r2 = mh(e2, t2, n2), i2 = e2.getCachedZSortedEles(), a2, s2, c2 = o(r2), l2;
  try {
    for (c2.s(); !(l2 = c2.n()).done; ) {
      var u2 = i2[l2.value];
      if (!a2 && u2.isNode() && (a2 = u2), !s2 && u2.isEdge() && (s2 = u2), a2 && s2) break;
    }
  } catch (e3) {
    c2.e(e3);
  } finally {
    c2.f();
  }
  return [a2, s2].filter(Boolean);
}
function gh(e2, t2, n2) {
  var r2 = e2.drawing;
  t2 += 1, n2.isNode() ? (r2.drawNode(n2, t2, `node-underlay`), r2.drawNode(n2, t2, `node-body`), r2.drawTexture(n2, t2, `label`), r2.drawNode(n2, t2, `node-overlay`)) : (r2.drawEdgeLine(n2, t2), r2.drawEdgeArrow(n2, t2, `source`), r2.drawEdgeArrow(n2, t2, `target`), r2.drawTexture(n2, t2, `label`), r2.drawTexture(n2, t2, `edge-source-label`), r2.drawTexture(n2, t2, `edge-target-label`));
}
function _h(e2, t2, n2) {
  var r2;
  e2.webglDebug && (r2 = performance.now());
  var i2 = e2.drawing, a2 = 0;
  if (n2.screen && e2.data.canvasNeedsRedraw[e2.SELECT_BOX] && dh(e2, t2), e2.data.canvasNeedsRedraw[e2.NODE] || n2.picking) {
    var s2 = e2.data.contexts[e2.WEBGL];
    n2.screen ? (s2.clearColor(0, 0, 0, 0), s2.enable(s2.BLEND), s2.blendFunc(s2.ONE, s2.ONE_MINUS_SRC_ALPHA)) : s2.disable(s2.BLEND), s2.clear(s2.COLOR_BUFFER_BIT | s2.DEPTH_BUFFER_BIT), s2.viewport(0, 0, s2.canvas.width, s2.canvas.height);
    var c2 = lh(e2), l2 = e2.getCachedZSortedEles();
    if (a2 = l2.length, i2.startFrame(c2, n2), n2.screen) {
      for (var u2 = 0; u2 < l2.nondrag.length; u2++) gh(e2, u2, l2.nondrag[u2]);
      for (var d2 = 0; d2 < l2.drag.length; d2++) gh(e2, d2, l2.drag[d2]);
    } else if (n2.picking) for (var f2 = 0; f2 < l2.length; f2++) gh(e2, f2, l2[f2]);
    i2.endFrame(), n2.screen && e2.webglDebugShowAtlases && (fh(e2), ph(e2)), e2.data.canvasNeedsRedraw[e2.NODE] = false, e2.data.canvasNeedsRedraw[e2.DRAG] = false;
  }
  if (e2.webglDebug) {
    var p2 = performance.now(), m2 = false, h2 = Math.ceil(p2 - r2), g2 = i2.getDebugInfo(), _2 = [`${a2} elements`, `${g2.totalInstances} instances`, `${g2.batchCount} batches`, `${g2.totalAtlases} atlases`, `${g2.wrappedCount} wrapped textures`, `${g2.simpleCount} simple shapes`].join(`, `);
    if (m2) console.log(`WebGL (${n2.name}) - time ${h2}ms, ${_2}`);
    else {
      console.log(`WebGL (${n2.name}) - frame time ${h2}ms`), console.log(`Totals:`), console.log(`  ${_2}`), console.log(`Texture Atlases Used:`);
      var v2 = g2.atlasInfo, y2 = o(v2), b2;
      try {
        for (y2.s(); !(b2 = y2.n()).done; ) {
          var x2 = b2.value;
          console.log(`  ${x2.type}: ${x2.keyCount} keys, ${x2.atlasCount} atlases`);
        }
      } catch (e3) {
        y2.e(e3);
      } finally {
        y2.f();
      }
      console.log(``);
    }
  }
  e2.data.gc && (console.log(`Garbage Collect!`), e2.data.gc = false, i2.gc());
}
var vh = {};
vh.drawPolygonPath = function(e2, t2, n2, r2, i2, a2) {
  var o2 = r2 / 2, s2 = i2 / 2;
  e2.beginPath && e2.beginPath(), e2.moveTo(t2 + o2 * a2[0], n2 + s2 * a2[1]);
  for (var c2 = 1; c2 < a2.length / 2; c2++) e2.lineTo(t2 + o2 * a2[c2 * 2], n2 + s2 * a2[c2 * 2 + 1]);
  e2.closePath();
}, vh.drawRoundPolygonPath = function(e2, t2, n2, r2, i2, a2, o2) {
  o2.forEach(function(t3) {
    return xf(e2, t3);
  }), e2.closePath();
}, vh.drawRoundRectanglePath = function(e2, t2, n2, r2, i2, a2) {
  var o2 = r2 / 2, s2 = i2 / 2, c2 = a2 === `auto` ? Mr(r2, i2) : Math.min(a2, s2, o2);
  e2.beginPath && e2.beginPath(), e2.moveTo(t2, n2 - s2), e2.arcTo(t2 + o2, n2 - s2, t2 + o2, n2, c2), e2.arcTo(t2 + o2, n2 + s2, t2, n2 + s2, c2), e2.arcTo(t2 - o2, n2 + s2, t2 - o2, n2, c2), e2.arcTo(t2 - o2, n2 - s2, t2, n2 - s2, c2), e2.lineTo(t2, n2 - s2), e2.closePath();
}, vh.drawBottomRoundRectanglePath = function(e2, t2, n2, r2, i2, a2) {
  var o2 = r2 / 2, s2 = i2 / 2, c2 = a2 === `auto` ? Mr(r2, i2) : a2;
  e2.beginPath && e2.beginPath(), e2.moveTo(t2, n2 - s2), e2.lineTo(t2 + o2, n2 - s2), e2.lineTo(t2 + o2, n2), e2.arcTo(t2 + o2, n2 + s2, t2, n2 + s2, c2), e2.arcTo(t2 - o2, n2 + s2, t2 - o2, n2, c2), e2.lineTo(t2 - o2, n2 - s2), e2.lineTo(t2, n2 - s2), e2.closePath();
}, vh.drawCutRectanglePath = function(e2, t2, n2, r2, i2, a2, o2) {
  var s2 = r2 / 2, c2 = i2 / 2, l2 = o2 === `auto` ? Pr() : o2;
  e2.beginPath && e2.beginPath(), e2.moveTo(t2 - s2 + l2, n2 - c2), e2.lineTo(t2 + s2 - l2, n2 - c2), e2.lineTo(t2 + s2, n2 - c2 + l2), e2.lineTo(t2 + s2, n2 + c2 - l2), e2.lineTo(t2 + s2 - l2, n2 + c2), e2.lineTo(t2 - s2 + l2, n2 + c2), e2.lineTo(t2 - s2, n2 + c2 - l2), e2.lineTo(t2 - s2, n2 - c2 + l2), e2.closePath();
}, vh.drawBarrelPath = function(e2, t2, n2, r2, i2) {
  var a2 = r2 / 2, o2 = i2 / 2, s2 = t2 - a2, c2 = t2 + a2, l2 = n2 - o2, u2 = n2 + o2, d2 = Ir(r2, i2), f2 = d2.widthOffset, p2 = d2.heightOffset, m2 = d2.ctrlPtOffsetPct * f2;
  e2.beginPath && e2.beginPath(), e2.moveTo(s2, l2 + p2), e2.lineTo(s2, u2 - p2), e2.quadraticCurveTo(s2 + m2, u2, s2 + f2, u2), e2.lineTo(c2 - f2, u2), e2.quadraticCurveTo(c2 - m2, u2, c2, u2 - p2), e2.lineTo(c2, l2 + p2), e2.quadraticCurveTo(c2 - m2, l2, c2 - f2, l2), e2.lineTo(s2 + f2, l2), e2.quadraticCurveTo(s2 + m2, l2, s2, l2 + p2), e2.closePath();
};
for (var yh = Math.sin(0), bh = Math.cos(0), xh = {}, Sh = {}, Ch = Math.PI / 40, wh = 0 * Math.PI; wh < 2 * Math.PI; wh += Ch) xh[wh] = Math.sin(wh), Sh[wh] = Math.cos(wh);
vh.drawEllipsePath = function(e2, t2, n2, r2, i2) {
  if (e2.beginPath && e2.beginPath(), e2.ellipse) e2.ellipse(t2, n2, r2 / 2, i2 / 2, 0, 0, 2 * Math.PI);
  else for (var a2, o2, s2 = r2 / 2, c2 = i2 / 2, l2 = 0 * Math.PI; l2 < 2 * Math.PI; l2 += Ch) a2 = t2 - s2 * xh[l2] * yh + s2 * Sh[l2] * bh, o2 = n2 + c2 * Sh[l2] * yh + c2 * xh[l2] * bh, l2 === 0 ? e2.moveTo(a2, o2) : e2.lineTo(a2, o2);
  e2.closePath();
};
var Th = {};
Th.createBuffer = function(e2, t2) {
  var n2 = document.createElement(`canvas`);
  return n2.width = e2, n2.height = t2, [n2, n2.getContext(`2d`)];
}, Th.bufferCanvasImage = function(e2) {
  var t2 = this.cy, n2 = t2.mutableElements().boundingBox(), r2 = this.findContainerClientCoords(), i2 = e2.full ? Math.ceil(n2.w) : r2[2], a2 = e2.full ? Math.ceil(n2.h) : r2[3], o2 = A(e2.maxWidth) || A(e2.maxHeight), s2 = this.getPixelRatio(), c2 = 1;
  if (e2.scale !== void 0) i2 *= e2.scale, a2 *= e2.scale, c2 = e2.scale;
  else if (o2) {
    var l2 = 1 / 0, u2 = 1 / 0;
    A(e2.maxWidth) && (l2 = c2 * e2.maxWidth / i2), A(e2.maxHeight) && (u2 = c2 * e2.maxHeight / a2), c2 = Math.min(l2, u2), i2 *= c2, a2 *= c2;
  }
  o2 || (i2 *= s2, a2 *= s2, c2 *= s2);
  var d2 = document.createElement(`canvas`);
  d2.width = i2, d2.height = a2, d2.style.width = i2 + `px`, d2.style.height = a2 + `px`;
  var f2 = d2.getContext(`2d`);
  if (i2 > 0 && a2 > 0) {
    f2.clearRect(0, 0, i2, a2), f2.globalCompositeOperation = `source-over`;
    var p2 = this.getCachedZSortedEles();
    if (e2.full) f2.translate(-n2.x1 * c2, -n2.y1 * c2), f2.scale(c2, c2), this.drawElements(f2, p2), f2.scale(1 / c2, 1 / c2), f2.translate(n2.x1 * c2, n2.y1 * c2);
    else {
      var m2 = t2.pan(), h2 = { x: m2.x * c2, y: m2.y * c2 };
      c2 *= t2.zoom(), f2.translate(h2.x, h2.y), f2.scale(c2, c2), this.drawElements(f2, p2), f2.scale(1 / c2, 1 / c2), f2.translate(-h2.x, -h2.y);
    }
    e2.bg && (f2.globalCompositeOperation = `destination-over`, f2.fillStyle = e2.bg, f2.rect(0, 0, i2, a2), f2.fill());
  }
  return d2;
};
function Eh(e2, t2) {
  for (var n2 = atob(e2), r2 = new ArrayBuffer(n2.length), i2 = new Uint8Array(r2), a2 = 0; a2 < n2.length; a2++) i2[a2] = n2.charCodeAt(a2);
  return new Blob([r2], { type: t2 });
}
function Dh(e2) {
  var t2 = e2.indexOf(`,`);
  return e2.substr(t2 + 1);
}
function Oh(e2, t2, n2) {
  var r2 = function() {
    return t2.toDataURL(n2, e2.quality);
  };
  switch (e2.output) {
    case `blob-promise`:
      return new pa(function(r3, i2) {
        try {
          t2.toBlob(function(e3) {
            e3 == null ? i2(Error("`canvas.toBlob()` sent a null value in its callback")) : r3(e3);
          }, n2, e2.quality);
        } catch (e3) {
          i2(e3);
        }
      });
    case `blob`:
      return Eh(Dh(r2()), n2);
    case `base64`:
      return Dh(r2());
    case `base64uri`:
    default:
      return r2();
  }
}
Th.png = function(e2) {
  return Oh(e2, this.bufferCanvasImage(e2), `image/png`);
}, Th.jpg = function(e2) {
  return Oh(e2, this.bufferCanvasImage(e2), `image/jpeg`);
};
var kh = {};
kh.nodeShapeImpl = function(e2, t2, n2, r2, i2, a2, o2, s2) {
  switch (e2) {
    case `ellipse`:
      return this.drawEllipsePath(t2, n2, r2, i2, a2);
    case `polygon`:
      return this.drawPolygonPath(t2, n2, r2, i2, a2, o2);
    case `round-polygon`:
      return this.drawRoundPolygonPath(t2, n2, r2, i2, a2, o2, s2);
    case `roundrectangle`:
    case `round-rectangle`:
      return this.drawRoundRectanglePath(t2, n2, r2, i2, a2, s2);
    case `cutrectangle`:
    case `cut-rectangle`:
      return this.drawCutRectanglePath(t2, n2, r2, i2, a2, o2, s2);
    case `bottomroundrectangle`:
    case `bottom-round-rectangle`:
      return this.drawBottomRoundRectanglePath(t2, n2, r2, i2, a2, s2);
    case `barrel`:
      return this.drawBarrelPath(t2, n2, r2, i2, a2);
  }
};
var Ah = jh, $ = jh.prototype;
$.CANVAS_LAYERS = 3, $.SELECT_BOX = 0, $.DRAG = 1, $.NODE = 2, $.WEBGL = 3, $.CANVAS_TYPES = [`2d`, `2d`, `2d`, `webgl2`], $.BUFFER_COUNT = 3, $.TEXTURE_BUFFER = 0, $.MOTIONBLUR_BUFFER_NODE = 1, $.MOTIONBLUR_BUFFER_DRAG = 2;
function jh(e2) {
  var t2 = this, n2 = t2.cy.window().document;
  e2.webgl && ($.CANVAS_LAYERS = t2.CANVAS_LAYERS = 4, console.log(`webgl rendering enabled`)), t2.data = { canvases: Array($.CANVAS_LAYERS), contexts: Array($.CANVAS_LAYERS), canvasNeedsRedraw: Array($.CANVAS_LAYERS), bufferCanvases: Array($.BUFFER_COUNT), bufferContexts: Array($.CANVAS_LAYERS) };
  var r2 = `-webkit-tap-highlight-color`, i2 = `rgba(0,0,0,0)`;
  t2.data.canvasContainer = n2.createElement(`div`);
  var a2 = t2.data.canvasContainer.style;
  t2.data.canvasContainer.style[r2] = i2, a2.position = `relative`, a2.zIndex = `0`, a2.overflow = `hidden`;
  var o2 = e2.cy.container();
  o2.appendChild(t2.data.canvasContainer), o2.style[r2] = i2;
  var s2 = { "-webkit-user-select": `none`, "-moz-user-select": `-moz-none`, "user-select": `none`, "-webkit-tap-highlight-color": `rgba(0,0,0,0)`, "outline-style": `none` };
  U() && (s2[`-ms-touch-action`] = `none`, s2[`touch-action`] = `none`);
  for (var c2 = 0; c2 < $.CANVAS_LAYERS; c2++) {
    var l2 = t2.data.canvases[c2] = n2.createElement(`canvas`), u2 = $.CANVAS_TYPES[c2];
    t2.data.contexts[c2] = l2.getContext(u2), t2.data.contexts[c2] || Lt(`Could not create canvas of type ` + u2), Object.keys(s2).forEach(function(e3) {
      l2.style[e3] = s2[e3];
    }), l2.style.position = `absolute`, l2.setAttribute(`data-id`, `layer` + c2), l2.style.zIndex = String($.CANVAS_LAYERS - c2), t2.data.canvasContainer.appendChild(l2), t2.data.canvasNeedsRedraw[c2] = false;
  }
  t2.data.topCanvas = t2.data.canvases[0], t2.data.canvases[$.NODE].setAttribute(`data-id`, `layer` + $.NODE + `-node`), t2.data.canvases[$.SELECT_BOX].setAttribute(`data-id`, `layer` + $.SELECT_BOX + `-selectbox`), t2.data.canvases[$.DRAG].setAttribute(`data-id`, `layer` + $.DRAG + `-drag`), t2.data.canvases[$.WEBGL] && t2.data.canvases[$.WEBGL].setAttribute(`data-id`, `layer` + $.WEBGL + `-webgl`);
  for (var c2 = 0; c2 < $.BUFFER_COUNT; c2++) t2.data.bufferCanvases[c2] = n2.createElement(`canvas`), t2.data.bufferContexts[c2] = t2.data.bufferCanvases[c2].getContext(`2d`), t2.data.bufferCanvases[c2].style.position = `absolute`, t2.data.bufferCanvases[c2].setAttribute(`data-id`, `buffer` + c2), t2.data.bufferCanvases[c2].style.zIndex = String(-c2 - 1), t2.data.bufferCanvases[c2].style.visibility = `hidden`;
  t2.pathsEnabled = true;
  var d2 = qn(), f2 = function(e3) {
    return { x: (e3.x1 + e3.x2) / 2, y: (e3.y1 + e3.y2) / 2 };
  }, p2 = function(e3) {
    return { x: -e3.w / 2, y: -e3.h / 2 };
  }, m2 = function(e3) {
    var t3 = e3[0]._private;
    return t3.oldBackgroundTimestamp !== t3.backgroundTimestamp;
  }, h2 = function(e3) {
    return e3[0]._private.nodeKey;
  }, g2 = function(e3) {
    return e3[0]._private.labelStyleKey;
  }, _2 = function(e3) {
    return e3[0]._private.sourceLabelStyleKey;
  }, v2 = function(e3) {
    return e3[0]._private.targetLabelStyleKey;
  }, y2 = function(e3, n3, r3, i3, a3) {
    return t2.drawElement(e3, n3, r3, false, false, a3);
  }, b2 = function(e3, n3, r3, i3, a3) {
    return t2.drawElementText(e3, n3, r3, i3, `main`, a3);
  }, x2 = function(e3, n3, r3, i3, a3) {
    return t2.drawElementText(e3, n3, r3, i3, `source`, a3);
  }, S2 = function(e3, n3, r3, i3, a3) {
    return t2.drawElementText(e3, n3, r3, i3, `target`, a3);
  }, C2 = function(e3) {
    return e3.boundingBox(), e3[0]._private.bodyBounds;
  }, w2 = function(e3) {
    return e3.boundingBox(), e3[0]._private.labelBounds.main || d2;
  }, T2 = function(e3) {
    return e3.boundingBox(), e3[0]._private.labelBounds.source || d2;
  }, E2 = function(e3) {
    return e3.boundingBox(), e3[0]._private.labelBounds.target || d2;
  }, D2 = function(e3, t3) {
    return t3;
  }, O2 = function(e3) {
    return f2(C2(e3));
  }, k2 = function(e3, t3, n3) {
    var r3 = e3 ? e3 + `-` : ``;
    return { x: t3.x + n3.pstyle(r3 + `text-margin-x`).pfValue, y: t3.y + n3.pstyle(r3 + `text-margin-y`).pfValue };
  }, A2 = function(e3, t3, n3) {
    var r3 = e3[0]._private.rscratch;
    return { x: r3[t3], y: r3[n3] };
  }, j2 = function(e3) {
    return k2(``, A2(e3, `labelX`, `labelY`), e3);
  }, M2 = function(e3) {
    return k2(`source`, A2(e3, `sourceLabelX`, `sourceLabelY`), e3);
  }, N2 = function(e3) {
    return k2(`target`, A2(e3, `targetLabelX`, `targetLabelY`), e3);
  }, P2 = function(e3) {
    return p2(C2(e3));
  }, F2 = function(e3) {
    return p2(T2(e3));
  }, I2 = function(e3) {
    return p2(E2(e3));
  }, L2 = function(e3) {
    var t3 = w2(e3), n3 = p2(w2(e3));
    if (e3.isNode()) {
      switch (e3.pstyle(`text-halign`).value) {
        case `left`:
          n3.x = -t3.w - (t3.leftPad || 0);
          break;
        case `right`:
          n3.x = -(t3.rightPad || 0);
          break;
      }
      switch (e3.pstyle(`text-valign`).value) {
        case `top`:
          n3.y = -t3.h - (t3.topPad || 0);
          break;
        case `bottom`:
          n3.y = -(t3.botPad || 0);
          break;
      }
    }
    return n3;
  }, R2 = t2.data.eleTxrCache = new gp(t2, { getKey: h2, doesEleInvalidateKey: m2, drawElement: y2, getBoundingBox: C2, getRotationPoint: O2, getRotationOffset: P2, allowEdgeTxrCaching: false, allowParentTxrCaching: false }), z2 = t2.data.lblTxrCache = new gp(t2, { getKey: g2, drawElement: b2, getBoundingBox: w2, getRotationPoint: j2, getRotationOffset: L2, isVisible: D2 }), B2 = t2.data.slbTxrCache = new gp(t2, { getKey: _2, drawElement: x2, getBoundingBox: T2, getRotationPoint: M2, getRotationOffset: F2, isVisible: D2 }), V2 = t2.data.tlbTxrCache = new gp(t2, { getKey: v2, drawElement: S2, getBoundingBox: E2, getRotationPoint: N2, getRotationOffset: I2, isVisible: D2 }), H2 = t2.data.lyrTxrCache = new Np(t2);
  t2.onUpdateEleCalcs(function(e3, t3) {
    R2.invalidateElements(t3), z2.invalidateElements(t3), B2.invalidateElements(t3), V2.invalidateElements(t3), H2.invalidateElements(t3);
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3]._private;
      r3.oldBackgroundTimestamp = r3.backgroundTimestamp;
    }
  });
  var W2 = function(e3) {
    for (var t3 = 0; t3 < e3.length; t3++) H2.enqueueElementRefinement(e3[t3].ele);
  };
  R2.onDequeue(W2), z2.onDequeue(W2), B2.onDequeue(W2), V2.onDequeue(W2), e2.webgl && t2.initWebgl(e2, { getStyleKey: h2, getLabelKey: g2, getSourceLabelKey: _2, getTargetLabelKey: v2, drawElement: y2, drawLabel: b2, drawSourceLabel: x2, drawTargetLabel: S2, getElementBox: C2, getLabelBox: w2, getSourceLabelBox: T2, getTargetLabelBox: E2, getElementRotationPoint: O2, getElementRotationOffset: P2, getLabelRotationPoint: j2, getSourceLabelRotationPoint: M2, getTargetLabelRotationPoint: N2, getLabelRotationOffset: L2, getSourceLabelRotationOffset: F2, getTargetLabelRotationOffset: I2 });
}
$.redrawHint = function(e2, t2) {
  var n2 = this;
  switch (e2) {
    case `eles`:
      n2.data.canvasNeedsRedraw[$.NODE] = t2;
      break;
    case `drag`:
      n2.data.canvasNeedsRedraw[$.DRAG] = t2;
      break;
    case `select`:
      n2.data.canvasNeedsRedraw[$.SELECT_BOX] = t2;
      break;
    case `gc`:
      n2.data.gc = true;
      break;
  }
};
var Mh = typeof Path2D < `u`;
$.path2dEnabled = function(e2) {
  if (e2 === void 0) return this.pathsEnabled;
  this.pathsEnabled = !!e2;
}, $.usePaths = function() {
  return Mh && this.pathsEnabled;
}, $.setImgSmoothing = function(e2, t2) {
  e2.imageSmoothingEnabled == null ? (e2.webkitImageSmoothingEnabled = t2, e2.mozImageSmoothingEnabled = t2, e2.msImageSmoothingEnabled = t2) : e2.imageSmoothingEnabled = t2;
}, $.getImgSmoothing = function(e2) {
  return e2.imageSmoothingEnabled == null ? e2.webkitImageSmoothingEnabled || e2.mozImageSmoothingEnabled || e2.msImageSmoothingEnabled : e2.imageSmoothingEnabled;
}, $.makeOffscreenCanvas = function(e2, t2) {
  var n2;
  return (typeof OffscreenCanvas > `u` ? `undefined` : g(OffscreenCanvas)) === `undefined` ? (n2 = this.cy.window().document.createElement(`canvas`), n2.width = e2, n2.height = t2) : n2 = new OffscreenCanvas(e2, t2), n2;
}, [Lp, Wp, Zp, $p, em, rm, am, th, vh, Th, kh].forEach(function(e2) {
  X($, e2);
});
var Nh = [{ type: `layout`, extensions: Gd }, { type: `renderer`, extensions: [{ name: `null`, impl: Kd }, { name: `base`, impl: Gf }, { name: `canvas`, impl: Ah }] }], Ph = {}, Fh = {};
function Ih(e2, t2, n2) {
  var r2 = n2, i2 = function(n3) {
    zt("Can not register `" + t2 + "` for `" + e2 + "` since `" + n3 + "` already exists in the prototype and can not be overridden");
  };
  if (e2 === `core`) {
    if (rd.prototype[t2]) return i2(t2);
    rd.prototype[t2] = n2;
  } else if (e2 === `collection`) {
    if (_u.prototype[t2]) return i2(t2);
    _u.prototype[t2] = n2;
  } else if (e2 === `layout`) {
    for (var a2 = function(e3) {
      this.options = e3, n2.call(this, e3), O(this._private) || (this._private = {}), this._private.cy = e3.cy, this._private.listeners = [], this.createEmitter();
    }, o2 = a2.prototype = Object.create(n2.prototype), s2 = [], c2 = 0; c2 < s2.length; c2++) {
      var l2 = s2[c2];
      o2[l2] = o2[l2] || function() {
        return this;
      };
    }
    o2.start && !o2.run ? o2.run = function() {
      return this.start(), this;
    } : !o2.start && o2.run && (o2.start = function() {
      return this.run(), this;
    });
    var u2 = n2.prototype.stop;
    o2.stop = function() {
      var e3 = this.options;
      if (e3 && e3.animate) {
        var t3 = this.animations;
        if (t3) for (var n3 = 0; n3 < t3.length; n3++) t3[n3].stop();
      }
      return u2 ? u2.call(this) : this.emit(`layoutstop`), this;
    }, o2.destroy || (o2.destroy = function() {
      return this;
    }), o2.cy = function() {
      return this._private.cy;
    };
    var d2 = function(e3) {
      return e3._private.cy;
    }, f2 = { addEventFields: function(e3, t3) {
      t3.layout = e3, t3.cy = d2(e3), t3.target = e3;
    }, bubble: function() {
      return true;
    }, parent: function(e3) {
      return d2(e3);
    } };
    X(o2, { createEmitter: function() {
      return this._private.emitter = new zl(f2, this), this;
    }, emitter: function() {
      return this._private.emitter;
    }, on: function(e3, t3) {
      return this.emitter().on(e3, t3), this;
    }, one: function(e3, t3) {
      return this.emitter().one(e3, t3), this;
    }, once: function(e3, t3) {
      return this.emitter().one(e3, t3), this;
    }, removeListener: function(e3, t3) {
      return this.emitter().removeListener(e3, t3), this;
    }, removeAllListeners: function() {
      return this.emitter().removeAllListeners(), this;
    }, emit: function(e3, t3) {
      return this.emitter().emit(e3, t3), this;
    } }), mc.eventAliasesOn(o2), r2 = a2;
  } else if (e2 === `renderer` && t2 !== `null` && t2 !== `base`) {
    var p2 = Lh(`renderer`, `base`), m2 = p2.prototype, h2 = n2, g2 = n2.prototype, _2 = function() {
      p2.apply(this, arguments), h2.apply(this, arguments);
    }, v2 = _2.prototype;
    for (var y2 in m2) {
      var b2 = m2[y2];
      if (g2[y2] != null) return i2(y2);
      v2[y2] = b2;
    }
    for (var x2 in g2) v2[x2] = g2[x2];
    m2.clientFunctions.forEach(function(e3) {
      v2[e3] = v2[e3] || function() {
        Lt("Renderer does not implement `renderer." + e3 + "()` on its prototype");
      };
    }), r2 = _2;
  } else if (e2 === `__proto__` || e2 === `constructor` || e2 === `prototype`) return Lt(e2 + ` is an illegal type to be registered, possibly lead to prototype pollutions`);
  return he({ map: Ph, keys: [e2, t2], value: r2 });
}
function Lh(e2, t2) {
  return ge({ map: Ph, keys: [e2, t2] });
}
function Rh(e2, t2, n2, r2, i2) {
  return he({ map: Fh, keys: [e2, t2, n2, r2], value: i2 });
}
function zh(e2, t2, n2, r2) {
  return ge({ map: Fh, keys: [e2, t2, n2, r2] });
}
var Bh = function() {
  if (arguments.length === 2) return Lh.apply(null, arguments);
  if (arguments.length === 3) return Ih.apply(null, arguments);
  if (arguments.length === 4) return zh.apply(null, arguments);
  if (arguments.length === 5) return Rh.apply(null, arguments);
  Lt(`Invalid extension access syntax`);
};
rd.prototype.extension = Bh, Nh.forEach(function(e2) {
  e2.extensions.forEach(function(t2) {
    Ih(e2.type, t2.name, t2.impl);
  });
});
var Vh = function() {
  if (!(this instanceof Vh)) return new Vh();
  this.length = 0;
}, Hh = Vh.prototype;
Hh.instanceString = function() {
  return `stylesheet`;
}, Hh.selector = function(e2) {
  var t2 = this.length++;
  return this[t2] = { selector: e2, properties: [] }, this;
}, Hh.css = function(e2, t2) {
  var n2 = this.length - 1;
  if (T(e2)) this[n2].properties.push({ name: e2, value: t2 });
  else if (O(e2)) for (var r2 = e2, i2 = Object.keys(r2), a2 = 0; a2 < i2.length; a2++) {
    var o2 = i2[a2], s2 = r2[o2];
    if (s2 != null) {
      var c2 = Zu.properties[o2] || Zu.properties[K(o2)];
      if (c2 != null) {
        var l2 = c2.name, u2 = s2;
        this[n2].properties.push({ name: l2, value: u2 });
      }
    }
  }
  return this;
}, Hh.style = Hh.css, Hh.generateStyle = function(e2) {
  var t2 = new Zu(e2);
  return this.appendToStyle(t2);
}, Hh.appendToStyle = function(e2) {
  for (var t2 = 0; t2 < this.length; t2++) {
    var n2 = this[t2], r2 = n2.selector, i2 = n2.properties;
    e2.selector(r2);
    for (var a2 = 0; a2 < i2.length; a2++) {
      var o2 = i2[a2];
      e2.css(o2.name, o2.value);
    }
  }
  return e2;
};
var Uh = `3.33.1`, Wh = function(e2) {
  if (e2 === void 0 && (e2 = {}), O(e2)) return new rd(e2);
  if (T(e2)) return Bh.apply(Bh, arguments);
};
Wh.use = function(e2) {
  var t2 = Array.prototype.slice.call(arguments, 1);
  return t2.unshift(Wh), e2.apply(null, t2), this;
}, Wh.warnings = function(e2) {
  return Rt(e2);
}, Wh.version = Uh, Wh.stylesheet = Wh.Stylesheet = Vh;
export {
  Wh as t
};
