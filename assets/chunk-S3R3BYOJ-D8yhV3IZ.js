var _a;
import { F as e, f as t, m as n, r, s as i } from "./chunk-ABZYJK2D-ODb6qSou.js";
import { g as a, h as o, p as s } from "./src-D8UWkQNo.js";
import { o as c } from "./math-O_7OW4FW.js";
import { t as l } from "./dist-DrVb-WkD.js";
import { E as u, O as d, S as f, T as p, _ as m, c as h, d as ee, f as te, g as ne, h as re, i as ie, m as ae, n as oe, p as g, r as se, s as ce, t as le, u as ue, v as _, w as de, x as v } from "./identity-IHMFXfGJ.js";
function fe(e9) {
  this._context = e9;
}
fe.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e9, t2) {
  switch (e9 = +e9, t2 = +t2, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e9, t2) : this._context.moveTo(e9, t2);
      break;
    case 1:
      this._point = 2;
    default:
      this._context.lineTo(e9, t2);
      break;
  }
} };
function pe(e9) {
  return new fe(e9);
}
var me = class {
  constructor(e9, t2) {
    this._context = e9, this._x = t2;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(e9, t2) {
    switch (e9 = +e9, t2 = +t2, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e9, t2) : this._context.moveTo(e9, t2);
        break;
      case 1:
        this._point = 2;
      default:
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + e9) / 2, this._y0, this._x0, t2, e9, t2) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + t2) / 2, e9, this._y0, e9, t2);
        break;
    }
    this._x0 = e9, this._y0 = t2;
  }
};
function he(e9) {
  return new me(e9, true);
}
function ge(e9) {
  return new me(e9, false);
}
function y() {
}
function b(e9, t2, n2) {
  e9._context.bezierCurveTo((2 * e9._x0 + e9._x1) / 3, (2 * e9._y0 + e9._y1) / 3, (e9._x0 + 2 * e9._x1) / 3, (e9._y0 + 2 * e9._y1) / 3, (e9._x0 + 4 * e9._x1 + t2) / 6, (e9._y0 + 4 * e9._y1 + n2) / 6);
}
function x(e9) {
  this._context = e9;
}
x.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 3:
      b(this, this._x1, this._y1);
    case 2:
      this._context.lineTo(this._x1, this._y1);
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e9, t2) {
  switch (e9 = +e9, t2 = +t2, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e9, t2) : this._context.moveTo(e9, t2);
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
    default:
      b(this, e9, t2);
      break;
  }
  this._x0 = this._x1, this._x1 = e9, this._y0 = this._y1, this._y1 = t2;
} };
function _e(e9) {
  return new x(e9);
}
function ve(e9) {
  this._context = e9;
}
ve.prototype = { areaStart: y, areaEnd: y, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 1:
      this._context.moveTo(this._x2, this._y2), this._context.closePath();
      break;
    case 2:
      this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
      break;
    case 3:
      this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
      break;
  }
}, point: function(e9, t2) {
  switch (e9 = +e9, t2 = +t2, this._point) {
    case 0:
      this._point = 1, this._x2 = e9, this._y2 = t2;
      break;
    case 1:
      this._point = 2, this._x3 = e9, this._y3 = t2;
      break;
    case 2:
      this._point = 3, this._x4 = e9, this._y4 = t2, this._context.moveTo((this._x0 + 4 * this._x1 + e9) / 6, (this._y0 + 4 * this._y1 + t2) / 6);
      break;
    default:
      b(this, e9, t2);
      break;
  }
  this._x0 = this._x1, this._x1 = e9, this._y0 = this._y1, this._y1 = t2;
} };
function ye(e9) {
  return new ve(e9);
}
function be(e9) {
  this._context = e9;
}
be.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e9, t2) {
  switch (e9 = +e9, t2 = +t2, this._point) {
    case 0:
      this._point = 1;
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3;
      var n2 = (this._x0 + 4 * this._x1 + e9) / 6, r2 = (this._y0 + 4 * this._y1 + t2) / 6;
      this._line ? this._context.lineTo(n2, r2) : this._context.moveTo(n2, r2);
      break;
    case 3:
      this._point = 4;
    default:
      b(this, e9, t2);
      break;
  }
  this._x0 = this._x1, this._x1 = e9, this._y0 = this._y1, this._y1 = t2;
} };
function xe(e9) {
  return new be(e9);
}
function Se(e9, t2) {
  this._basis = new x(e9), this._beta = t2;
}
Se.prototype = { lineStart: function() {
  this._x = [], this._y = [], this._basis.lineStart();
}, lineEnd: function() {
  var e9 = this._x, t2 = this._y, n2 = e9.length - 1;
  if (n2 > 0) for (var r2 = e9[0], i2 = t2[0], a2 = e9[n2] - r2, o2 = t2[n2] - i2, s2 = -1, c2; ++s2 <= n2; ) c2 = s2 / n2, this._basis.point(this._beta * e9[s2] + (1 - this._beta) * (r2 + c2 * a2), this._beta * t2[s2] + (1 - this._beta) * (i2 + c2 * o2));
  this._x = this._y = null, this._basis.lineEnd();
}, point: function(e9, t2) {
  this._x.push(+e9), this._y.push(+t2);
} };
var Ce = (function e2(t2) {
  function n2(e9) {
    return t2 === 1 ? new x(e9) : new Se(e9, t2);
  }
  return n2.beta = function(t3) {
    return e2(+t3);
  }, n2;
})(0.85);
function S(e9, t2, n2) {
  e9._context.bezierCurveTo(e9._x1 + e9._k * (e9._x2 - e9._x0), e9._y1 + e9._k * (e9._y2 - e9._y0), e9._x2 + e9._k * (e9._x1 - t2), e9._y2 + e9._k * (e9._y1 - n2), e9._x2, e9._y2);
}
function C(e9, t2) {
  this._context = e9, this._k = (1 - t2) / 6;
}
C.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 2:
      this._context.lineTo(this._x2, this._y2);
      break;
    case 3:
      S(this, this._x1, this._y1);
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e9, t2) {
  switch (e9 = +e9, t2 = +t2, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e9, t2) : this._context.moveTo(e9, t2);
      break;
    case 1:
      this._point = 2, this._x1 = e9, this._y1 = t2;
      break;
    case 2:
      this._point = 3;
    default:
      S(this, e9, t2);
      break;
  }
  this._x0 = this._x1, this._x1 = this._x2, this._x2 = e9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t2;
} };
var w = (function e3(t2) {
  function n2(e9) {
    return new C(e9, t2);
  }
  return n2.tension = function(t3) {
    return e3(+t3);
  }, n2;
})(0);
function T(e9, t2) {
  this._context = e9, this._k = (1 - t2) / 6;
}
T.prototype = { areaStart: y, areaEnd: y, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 1:
      this._context.moveTo(this._x3, this._y3), this._context.closePath();
      break;
    case 2:
      this._context.lineTo(this._x3, this._y3), this._context.closePath();
      break;
    case 3:
      this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
      break;
  }
}, point: function(e9, t2) {
  switch (e9 = +e9, t2 = +t2, this._point) {
    case 0:
      this._point = 1, this._x3 = e9, this._y3 = t2;
      break;
    case 1:
      this._point = 2, this._context.moveTo(this._x4 = e9, this._y4 = t2);
      break;
    case 2:
      this._point = 3, this._x5 = e9, this._y5 = t2;
      break;
    default:
      S(this, e9, t2);
      break;
  }
  this._x0 = this._x1, this._x1 = this._x2, this._x2 = e9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t2;
} };
var we = (function e4(t2) {
  function n2(e9) {
    return new T(e9, t2);
  }
  return n2.tension = function(t3) {
    return e4(+t3);
  }, n2;
})(0);
function E(e9, t2) {
  this._context = e9, this._k = (1 - t2) / 6;
}
E.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e9, t2) {
  switch (e9 = +e9, t2 = +t2, this._point) {
    case 0:
      this._point = 1;
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
      break;
    case 3:
      this._point = 4;
    default:
      S(this, e9, t2);
      break;
  }
  this._x0 = this._x1, this._x1 = this._x2, this._x2 = e9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t2;
} };
var Te = (function e5(t2) {
  function n2(e9) {
    return new E(e9, t2);
  }
  return n2.tension = function(t3) {
    return e5(+t3);
  }, n2;
})(0);
function D(e9, t2, n2) {
  var r2 = e9._x1, i2 = e9._y1, a2 = e9._x2, o2 = e9._y2;
  if (e9._l01_a > 1e-12) {
    var s2 = 2 * e9._l01_2a + 3 * e9._l01_a * e9._l12_a + e9._l12_2a, c2 = 3 * e9._l01_a * (e9._l01_a + e9._l12_a);
    r2 = (r2 * s2 - e9._x0 * e9._l12_2a + e9._x2 * e9._l01_2a) / c2, i2 = (i2 * s2 - e9._y0 * e9._l12_2a + e9._y2 * e9._l01_2a) / c2;
  }
  if (e9._l23_a > 1e-12) {
    var l2 = 2 * e9._l23_2a + 3 * e9._l23_a * e9._l12_a + e9._l12_2a, u2 = 3 * e9._l23_a * (e9._l23_a + e9._l12_a);
    a2 = (a2 * l2 + e9._x1 * e9._l23_2a - t2 * e9._l12_2a) / u2, o2 = (o2 * l2 + e9._y1 * e9._l23_2a - n2 * e9._l12_2a) / u2;
  }
  e9._context.bezierCurveTo(r2, i2, a2, o2, e9._x2, e9._y2);
}
function O(e9, t2) {
  this._context = e9, this._alpha = t2;
}
O.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 2:
      this._context.lineTo(this._x2, this._y2);
      break;
    case 3:
      this.point(this._x2, this._y2);
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e9, t2) {
  if (e9 = +e9, t2 = +t2, this._point) {
    var n2 = this._x2 - e9, r2 = this._y2 - t2;
    this._l23_a = Math.sqrt(this._l23_2a = (n2 * n2 + r2 * r2) ** +this._alpha);
  }
  switch (this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e9, t2) : this._context.moveTo(e9, t2);
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3;
    default:
      D(this, e9, t2);
      break;
  }
  this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t2;
} };
var k = (function e6(t2) {
  function n2(e9) {
    return t2 ? new O(e9, t2) : new C(e9, 0);
  }
  return n2.alpha = function(t3) {
    return e6(+t3);
  }, n2;
})(0.5);
function A(e9, t2) {
  this._context = e9, this._alpha = t2;
}
A.prototype = { areaStart: y, areaEnd: y, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 1:
      this._context.moveTo(this._x3, this._y3), this._context.closePath();
      break;
    case 2:
      this._context.lineTo(this._x3, this._y3), this._context.closePath();
      break;
    case 3:
      this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
      break;
  }
}, point: function(e9, t2) {
  if (e9 = +e9, t2 = +t2, this._point) {
    var n2 = this._x2 - e9, r2 = this._y2 - t2;
    this._l23_a = Math.sqrt(this._l23_2a = (n2 * n2 + r2 * r2) ** +this._alpha);
  }
  switch (this._point) {
    case 0:
      this._point = 1, this._x3 = e9, this._y3 = t2;
      break;
    case 1:
      this._point = 2, this._context.moveTo(this._x4 = e9, this._y4 = t2);
      break;
    case 2:
      this._point = 3, this._x5 = e9, this._y5 = t2;
      break;
    default:
      D(this, e9, t2);
      break;
  }
  this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t2;
} };
var Ee = (function e7(t2) {
  function n2(e9) {
    return t2 ? new A(e9, t2) : new T(e9, 0);
  }
  return n2.alpha = function(t3) {
    return e7(+t3);
  }, n2;
})(0.5);
function j(e9, t2) {
  this._context = e9, this._alpha = t2;
}
j.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e9, t2) {
  if (e9 = +e9, t2 = +t2, this._point) {
    var n2 = this._x2 - e9, r2 = this._y2 - t2;
    this._l23_a = Math.sqrt(this._l23_2a = (n2 * n2 + r2 * r2) ** +this._alpha);
  }
  switch (this._point) {
    case 0:
      this._point = 1;
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
      break;
    case 3:
      this._point = 4;
    default:
      D(this, e9, t2);
      break;
  }
  this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t2;
} };
var De = (function e8(t2) {
  function n2(e9) {
    return t2 ? new j(e9, t2) : new E(e9, 0);
  }
  return n2.alpha = function(t3) {
    return e8(+t3);
  }, n2;
})(0.5);
function M(e9) {
  this._context = e9;
}
M.prototype = { areaStart: y, areaEnd: y, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  this._point && this._context.closePath();
}, point: function(e9, t2) {
  e9 = +e9, t2 = +t2, this._point ? this._context.lineTo(e9, t2) : (this._point = 1, this._context.moveTo(e9, t2));
} };
function Oe(e9) {
  return new M(e9);
}
function N(e9) {
  return e9 < 0 ? -1 : 1;
}
function ke(e9, t2, n2) {
  var r2 = e9._x1 - e9._x0, i2 = t2 - e9._x1, a2 = (e9._y1 - e9._y0) / (r2 || i2 < 0 && -0), o2 = (n2 - e9._y1) / (i2 || r2 < 0 && -0), s2 = (a2 * i2 + o2 * r2) / (r2 + i2);
  return (N(a2) + N(o2)) * Math.min(Math.abs(a2), Math.abs(o2), 0.5 * Math.abs(s2)) || 0;
}
function Ae(e9, t2) {
  var n2 = e9._x1 - e9._x0;
  return n2 ? (3 * (e9._y1 - e9._y0) / n2 - t2) / 2 : t2;
}
function P(e9, t2, n2) {
  var r2 = e9._x0, i2 = e9._y0, a2 = e9._x1, o2 = e9._y1, s2 = (a2 - r2) / 3;
  e9._context.bezierCurveTo(r2 + s2, i2 + s2 * t2, a2 - s2, o2 - s2 * n2, a2, o2);
}
function F(e9) {
  this._context = e9;
}
F.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 2:
      this._context.lineTo(this._x1, this._y1);
      break;
    case 3:
      P(this, this._t0, Ae(this, this._t0));
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e9, t2) {
  var n2 = NaN;
  if (e9 = +e9, t2 = +t2, !(e9 === this._x1 && t2 === this._y1)) {
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e9, t2) : this._context.moveTo(e9, t2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, P(this, Ae(this, n2 = ke(this, e9, t2)), n2);
        break;
      default:
        P(this, this._t0, n2 = ke(this, e9, t2));
        break;
    }
    this._x0 = this._x1, this._x1 = e9, this._y0 = this._y1, this._y1 = t2, this._t0 = n2;
  }
} };
function je(e9) {
  this._context = new Me(e9);
}
(je.prototype = Object.create(F.prototype)).point = function(e9, t2) {
  F.prototype.point.call(this, t2, e9);
};
function Me(e9) {
  this._context = e9;
}
Me.prototype = { moveTo: function(e9, t2) {
  this._context.moveTo(t2, e9);
}, closePath: function() {
  this._context.closePath();
}, lineTo: function(e9, t2) {
  this._context.lineTo(t2, e9);
}, bezierCurveTo: function(e9, t2, n2, r2, i2, a2) {
  this._context.bezierCurveTo(t2, e9, r2, n2, a2, i2);
} };
function Ne(e9) {
  return new F(e9);
}
function Pe(e9) {
  return new je(e9);
}
function Fe(e9) {
  this._context = e9;
}
Fe.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = [], this._y = [];
}, lineEnd: function() {
  var e9 = this._x, t2 = this._y, n2 = e9.length;
  if (n2) if (this._line ? this._context.lineTo(e9[0], t2[0]) : this._context.moveTo(e9[0], t2[0]), n2 === 2) this._context.lineTo(e9[1], t2[1]);
  else for (var r2 = Ie(e9), i2 = Ie(t2), a2 = 0, o2 = 1; o2 < n2; ++a2, ++o2) this._context.bezierCurveTo(r2[0][a2], i2[0][a2], r2[1][a2], i2[1][a2], e9[o2], t2[o2]);
  (this._line || this._line !== 0 && n2 === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
}, point: function(e9, t2) {
  this._x.push(+e9), this._y.push(+t2);
} };
function Ie(e9) {
  var t2, n2 = e9.length - 1, r2, i2 = Array(n2), a2 = Array(n2), o2 = Array(n2);
  for (i2[0] = 0, a2[0] = 2, o2[0] = e9[0] + 2 * e9[1], t2 = 1; t2 < n2 - 1; ++t2) i2[t2] = 1, a2[t2] = 4, o2[t2] = 4 * e9[t2] + 2 * e9[t2 + 1];
  for (i2[n2 - 1] = 2, a2[n2 - 1] = 7, o2[n2 - 1] = 8 * e9[n2 - 1] + e9[n2], t2 = 1; t2 < n2; ++t2) r2 = i2[t2] / a2[t2 - 1], a2[t2] -= r2, o2[t2] -= r2 * o2[t2 - 1];
  for (i2[n2 - 1] = o2[n2 - 1] / a2[n2 - 1], t2 = n2 - 2; t2 >= 0; --t2) i2[t2] = (o2[t2] - i2[t2 + 1]) / a2[t2];
  for (a2[n2 - 1] = (e9[n2] + i2[n2 - 1]) / 2, t2 = 0; t2 < n2 - 1; ++t2) a2[t2] = 2 * e9[t2 + 1] - i2[t2 + 1];
  return [i2, a2];
}
function Le(e9) {
  return new Fe(e9);
}
function I(e9, t2) {
  this._context = e9, this._t = t2;
}
I.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = this._y = NaN, this._point = 0;
}, lineEnd: function() {
  0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
}, point: function(e9, t2) {
  switch (e9 = +e9, t2 = +t2, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e9, t2) : this._context.moveTo(e9, t2);
      break;
    case 1:
      this._point = 2;
    default:
      if (this._t <= 0) this._context.lineTo(this._x, t2), this._context.lineTo(e9, t2);
      else {
        var n2 = this._x * (1 - this._t) + e9 * this._t;
        this._context.lineTo(n2, this._y), this._context.lineTo(n2, t2);
      }
      break;
  }
  this._x = e9, this._y = t2;
} };
function Re(e9) {
  return new I(e9, 0.5);
}
function ze(e9) {
  return new I(e9, 0);
}
function Be(e9) {
  return new I(e9, 1);
}
var L = (function() {
  try {
    var e9 = f(Object, `defineProperty`);
    return e9({}, ``, {}), e9;
  } catch {
  }
})();
function Ve(e9, t2, n2) {
  t2 == `__proto__` && L ? L(e9, t2, { configurable: true, enumerable: true, value: n2, writable: true }) : e9[t2] = n2;
}
var R = Ve;
function He(e9, t2, n2) {
  (n2 !== void 0 && !v(e9[t2], n2) || n2 === void 0 && !(t2 in e9)) && R(e9, t2, n2);
}
var z = He, Ue = typeof exports == `object` && exports && !exports.nodeType && exports, We = Ue && typeof module == `object` && module && !module.nodeType && module, Ge = We && We.exports === Ue ? d.Buffer : void 0, Ke = Ge ? Ge.allocUnsafe : void 0;
function qe(e9, t2) {
  if (t2) return e9.slice();
  var n2 = e9.length, r2 = Ke ? Ke(n2) : new e9.constructor(n2);
  return e9.copy(r2), r2;
}
var Je = qe;
function Ye(e9) {
  var t2 = new e9.constructor(e9.byteLength);
  return new re(t2).set(new re(e9)), t2;
}
var Xe = Ye;
function Ze(e9, t2) {
  var n2 = t2 ? Xe(e9.buffer) : e9.buffer;
  return new e9.constructor(n2, e9.byteOffset, e9.length);
}
var Qe = Ze;
function $e(e9, t2) {
  var n2 = -1, r2 = e9.length;
  for (t2 || (t2 = Array(r2)); ++n2 < r2; ) t2[n2] = e9[n2];
  return t2;
}
var et = $e, tt = Object.create, nt = /* @__PURE__ */ (function() {
  function e9() {
  }
  return function(t2) {
    if (!p(t2)) return {};
    if (tt) return tt(t2);
    e9.prototype = t2;
    var n2 = new e9();
    return e9.prototype = void 0, n2;
  };
})(), B = ae(Object.getPrototypeOf, Object);
function rt(e9) {
  return typeof e9.constructor == `function` && !g(e9) ? nt(B(e9)) : {};
}
var it = rt;
function at(e9) {
  return te(e9) && h(e9);
}
var ot = at, st = `[object Object]`, ct = Function.prototype, lt = Object.prototype, ut = ct.toString, dt = lt.hasOwnProperty, ft = ut.call(Object);
function pt(e9) {
  if (!te(e9) || u(e9) != st) return false;
  var t2 = B(e9);
  if (t2 === null) return true;
  var n2 = dt.call(t2, `constructor`) && t2.constructor;
  return typeof n2 == `function` && n2 instanceof n2 && ut.call(n2) == ft;
}
var mt = pt;
function ht(e9, t2) {
  if (!(t2 === `constructor` && typeof e9[t2] == `function`) && t2 != `__proto__`) return e9[t2];
}
var V = ht, gt = Object.prototype.hasOwnProperty;
function _t(e9, t2, n2) {
  var r2 = e9[t2];
  (!(gt.call(e9, t2) && v(r2, n2)) || n2 === void 0 && !(t2 in e9)) && R(e9, t2, n2);
}
var vt = _t;
function yt(e9, t2, n2, r2) {
  var i2 = !n2;
  n2 || (n2 = {});
  for (var a2 = -1, o2 = t2.length; ++a2 < o2; ) {
    var s2 = t2[a2], c2 = r2 ? r2(n2[s2], e9[s2], s2, n2, e9) : void 0;
    c2 === void 0 && (c2 = e9[s2]), i2 ? R(n2, s2, c2) : vt(n2, s2, c2);
  }
  return n2;
}
var bt = yt;
function xt(e9) {
  var t2 = [];
  if (e9 != null) for (var n2 in Object(e9)) t2.push(n2);
  return t2;
}
var St = xt, Ct = Object.prototype.hasOwnProperty;
function wt(e9) {
  if (!p(e9)) return St(e9);
  var t2 = g(e9), n2 = [];
  for (var r2 in e9) r2 == `constructor` && (t2 || !Ct.call(e9, r2)) || n2.push(r2);
  return n2;
}
var Tt = wt;
function Et(e9) {
  return h(e9) ? oe(e9, true) : Tt(e9);
}
var H = Et;
function Dt(e9) {
  return bt(e9, H(e9));
}
var Ot = Dt;
function kt(e9, t2, n2, r2, i2, a2, o2) {
  var s2 = V(e9, n2), c2 = V(t2, n2), l2 = o2.get(c2);
  if (l2) {
    z(e9, n2, l2);
    return;
  }
  var u2 = a2 ? a2(s2, c2, n2 + ``, e9, t2, o2) : void 0, d2 = u2 === void 0;
  if (d2) {
    var f2 = ue(c2), m2 = !f2 && ce(c2), h2 = !f2 && !m2 && ie(c2);
    u2 = c2, f2 || m2 || h2 ? ue(s2) ? u2 = s2 : ot(s2) ? u2 = et(s2) : m2 ? (d2 = false, u2 = Je(c2, true)) : h2 ? (d2 = false, u2 = Qe(c2, true)) : u2 = [] : mt(c2) || ee(c2) ? (u2 = s2, ee(s2) ? u2 = Ot(s2) : (!p(s2) || de(s2)) && (u2 = it(c2))) : d2 = false;
  }
  d2 && (o2.set(c2, u2), i2(u2, c2, r2, a2, o2), o2.delete(c2)), z(e9, n2, u2);
}
var At = kt;
function jt(e9, t2, n2, r2, i2) {
  e9 !== t2 && ne(t2, function(a2, o2) {
    if (i2 || (i2 = new m()), p(a2)) At(e9, t2, o2, n2, jt, r2, i2);
    else {
      var s2 = r2 ? r2(V(e9, o2), a2, o2 + ``, e9, t2, i2) : void 0;
      s2 === void 0 && (s2 = a2), z(e9, o2, s2);
    }
  }, H);
}
var Mt = jt;
function Nt(e9, t2, n2) {
  switch (n2.length) {
    case 0:
      return e9.call(t2);
    case 1:
      return e9.call(t2, n2[0]);
    case 2:
      return e9.call(t2, n2[0], n2[1]);
    case 3:
      return e9.call(t2, n2[0], n2[1], n2[2]);
  }
  return e9.apply(t2, n2);
}
var Pt = Nt, Ft = Math.max;
function It(e9, t2, n2) {
  return t2 = Ft(t2 === void 0 ? e9.length - 1 : t2, 0), function() {
    for (var r2 = arguments, i2 = -1, a2 = Ft(r2.length - t2, 0), o2 = Array(a2); ++i2 < a2; ) o2[i2] = r2[t2 + i2];
    i2 = -1;
    for (var s2 = Array(t2 + 1); ++i2 < t2; ) s2[i2] = r2[i2];
    return s2[t2] = n2(o2), Pt(e9, this, s2);
  };
}
var Lt = It;
function Rt(e9) {
  return function() {
    return e9;
  };
}
var zt = Rt, Bt = L ? function(e9, t2) {
  return L(e9, `toString`, { configurable: true, enumerable: false, value: zt(t2), writable: true });
} : le, Vt = 800, Ht = 16, Ut = Date.now;
function Wt(e9) {
  var t2 = 0, n2 = 0;
  return function() {
    var r2 = Ut(), i2 = Ht - (r2 - n2);
    if (n2 = r2, i2 > 0) {
      if (++t2 >= Vt) return arguments[0];
    } else t2 = 0;
    return e9.apply(void 0, arguments);
  };
}
var Gt = Wt(Bt);
function Kt(e9, t2) {
  return Gt(Lt(e9, t2, le), e9 + ``);
}
var qt = Kt;
function Jt(e9, t2, n2) {
  if (!p(n2)) return false;
  var r2 = typeof t2;
  return (r2 == `number` ? h(n2) && se(t2, n2.length) : r2 == `string` && t2 in n2) ? v(n2[t2], e9) : false;
}
var Yt = Jt;
function Xt(e9) {
  return qt(function(t2, n2) {
    var r2 = -1, i2 = n2.length, a2 = i2 > 1 ? n2[i2 - 1] : void 0, o2 = i2 > 2 ? n2[2] : void 0;
    for (a2 = e9.length > 3 && typeof a2 == `function` ? (i2--, a2) : void 0, o2 && Yt(n2[0], n2[1], o2) && (a2 = i2 < 3 ? void 0 : a2, i2 = 1), t2 = Object(t2); ++r2 < i2; ) {
      var s2 = n2[r2];
      s2 && e9(t2, s2, r2, a2);
    }
    return t2;
  });
}
var Zt = Xt(function(e9, t2, n2) {
  Mt(e9, t2, n2);
}), Qt = l(), $t = `\u200B`, en = { curveBasis: _e, curveBasisClosed: ye, curveBasisOpen: xe, curveBumpX: he, curveBumpY: ge, curveBundle: Ce, curveCardinalClosed: we, curveCardinalOpen: Te, curveCardinal: w, curveCatmullRomClosed: Ee, curveCatmullRomOpen: De, curveCatmullRom: k, curveLinear: pe, curveLinearClosed: Oe, curveMonotoneX: Ne, curveMonotoneY: Pe, curveNatural: Le, curveStep: Re, curveStepAfter: Be, curveStepBefore: ze }, tn = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, nn = o(function(n2, i2) {
  let a2 = rn(n2, /(?:init\b)|(?:initialize\b)/), o2 = {};
  if (Array.isArray(a2)) {
    let t2 = a2.map((e9) => e9.args);
    e(t2), o2 = r(o2, [...t2]);
  } else o2 = a2.args;
  if (!o2) return;
  let s2 = t(n2, i2), c2 = `config`;
  return o2[c2] !== void 0 && (s2 === `flowchart-v2` && (s2 = `flowchart`), o2[s2] = o2[c2], delete o2[c2]), o2;
}, `detectInit`), rn = o(function(e9, t2 = null) {
  var _a2, _b;
  try {
    let r2 = RegExp(`[%]{2}(?![{]${tn.source})(?=[}][%]{2}).*
`, `ig`);
    e9 = e9.trim().replace(r2, ``).replace(/'/gm, `"`), a.debug(`Detecting diagram directive${t2 === null ? `` : ` type:` + t2} based on the text:${e9}`);
    let i2, o2 = [];
    for (; (i2 = n.exec(e9)) !== null; ) if (i2.index === n.lastIndex && n.lastIndex++, i2 && !t2 || t2 && ((_a2 = i2[1]) == null ? void 0 : _a2.match(t2)) || t2 && ((_b = i2[2]) == null ? void 0 : _b.match(t2))) {
      let e10 = i2[1] ? i2[1] : i2[2], t3 = i2[3] ? i2[3].trim() : i2[4] ? JSON.parse(i2[4].trim()) : null;
      o2.push({ type: e10, args: t3 });
    }
    return o2.length === 0 ? { type: e9, args: null } : o2.length === 1 ? o2[0] : o2;
  } catch (n2) {
    return a.error(`ERROR: ${n2.message} - Unable to parse directive type: '${t2}' based on the text: '${e9}'`), { type: void 0, args: null };
  }
}, `detectDirective`), an = o(function(e9) {
  return e9.replace(n, ``);
}, `removeDirectives`), on = o(function(e9, t2) {
  for (let [n2, r2] of t2.entries()) if (r2.match(e9)) return n2;
  return -1;
}, `isSubstringInArray`);
function U(e9, t2) {
  return e9 ? en[`curve${e9.charAt(0).toUpperCase() + e9.slice(1)}`] ?? t2 : t2;
}
o(U, `interpolateToCurve`);
function sn(e9, t2) {
  let n2 = e9.trim();
  if (n2) return t2.securityLevel === `loose` ? n2 : (0, Qt.sanitizeUrl)(n2);
}
o(sn, `formatUrl`);
var cn = o((e9, ...t2) => {
  let n2 = e9.split(`.`), r2 = n2.length - 1, i2 = n2[r2], o2 = window;
  for (let t3 = 0; t3 < r2; t3++) if (o2 = o2[n2[t3]], !o2) {
    a.error(`Function name: ${e9} not found in window`);
    return;
  }
  o2[i2](...t2);
}, `runFunc`);
function W(e9, t2) {
  return !e9 || !t2 ? 0 : Math.sqrt((t2.x - e9.x) ** 2 + (t2.y - e9.y) ** 2);
}
o(W, `distance`);
function ln(e9) {
  let t2, n2 = 0;
  return e9.forEach((e10) => {
    n2 += W(e10, t2), t2 = e10;
  }), G(e9, n2 / 2);
}
o(ln, `traverseEdge`);
function un(e9) {
  return e9.length === 1 ? e9[0] : ln(e9);
}
o(un, `calcLabelPosition`);
var dn = o((e9, t2 = 2) => {
  let n2 = 10 ** t2;
  return Math.round(e9 * n2) / n2;
}, `roundNumber`), G = o((e9, t2) => {
  let n2, r2 = t2;
  for (let t3 of e9) {
    if (n2) {
      let e10 = W(t3, n2);
      if (e10 === 0) return n2;
      if (e10 < r2) r2 -= e10;
      else {
        let i2 = r2 / e10;
        if (i2 <= 0) return n2;
        if (i2 >= 1) return { x: t3.x, y: t3.y };
        if (i2 > 0 && i2 < 1) return { x: dn((1 - i2) * n2.x + i2 * t3.x, 5), y: dn((1 - i2) * n2.y + i2 * t3.y, 5) };
      }
    }
    n2 = t3;
  }
  throw Error(`Could not find a suitable point for the given distance`);
}, `calculatePoint`), fn = o((e9, t2, n2) => {
  a.info(`our points ${JSON.stringify(t2)}`), t2[0] !== n2 && (t2 = t2.reverse());
  let r2 = G(t2, 25), i2 = e9 ? 10 : 5, o2 = Math.atan2(t2[0].y - r2.y, t2[0].x - r2.x), s2 = { x: 0, y: 0 };
  return s2.x = Math.sin(o2) * i2 + (t2[0].x + r2.x) / 2, s2.y = -Math.cos(o2) * i2 + (t2[0].y + r2.y) / 2, s2;
}, `calcCardinalityPosition`);
function pn(e9, t2, n2) {
  let r2 = structuredClone(n2);
  a.info(`our points`, r2), t2 !== `start_left` && t2 !== `start_right` && r2.reverse();
  let i2 = G(r2, 25 + e9), o2 = 10 + e9 * 0.5, s2 = Math.atan2(r2[0].y - i2.y, r2[0].x - i2.x), c2 = { x: 0, y: 0 };
  return t2 === `start_left` ? (c2.x = Math.sin(s2 + Math.PI) * o2 + (r2[0].x + i2.x) / 2, c2.y = -Math.cos(s2 + Math.PI) * o2 + (r2[0].y + i2.y) / 2) : t2 === `end_right` ? (c2.x = Math.sin(s2 - Math.PI) * o2 + (r2[0].x + i2.x) / 2 - 5, c2.y = -Math.cos(s2 - Math.PI) * o2 + (r2[0].y + i2.y) / 2 - 5) : t2 === `end_left` ? (c2.x = Math.sin(s2) * o2 + (r2[0].x + i2.x) / 2 - 5, c2.y = -Math.cos(s2) * o2 + (r2[0].y + i2.y) / 2 - 5) : (c2.x = Math.sin(s2) * o2 + (r2[0].x + i2.x) / 2, c2.y = -Math.cos(s2) * o2 + (r2[0].y + i2.y) / 2), c2;
}
o(pn, `calcTerminalLabelPosition`);
function K(e9) {
  let t2 = ``, n2 = ``;
  for (let r2 of e9) r2 !== void 0 && (r2.startsWith(`color:`) || r2.startsWith(`text-align:`) ? n2 = n2 + r2 + `;` : t2 = t2 + r2 + `;`);
  return { style: t2, labelStyle: n2 };
}
o(K, `getStylesFromArray`);
var q = 0, mn = o(() => (q++, `id-` + Math.random().toString(36).substr(2, 12) + `-` + q), `generateId`);
function hn(e9) {
  let t2 = ``;
  for (let n2 = 0; n2 < e9; n2++) t2 += `0123456789abcdef`.charAt(Math.floor(Math.random() * 16));
  return t2;
}
o(hn, `makeRandomHex`);
var gn = o((e9) => hn(e9.length), `random`), _n = o(function() {
  return { x: 0, y: 0, fill: void 0, anchor: `start`, style: `#666`, width: 100, height: 100, textMargin: 0, rx: 0, ry: 0, valign: void 0, text: `` };
}, `getTextObj`), vn = o(function(e9, t2) {
  let n2 = t2.text.replace(i.lineBreakRegex, ` `), [, r2] = Q(t2.fontSize), a2 = e9.append(`text`);
  a2.attr(`x`, t2.x), a2.attr(`y`, t2.y), a2.style(`text-anchor`, t2.anchor), a2.style(`font-family`, t2.fontFamily), a2.style(`font-size`, r2), a2.style(`font-weight`, t2.fontWeight), a2.attr(`fill`, t2.fill), t2.class !== void 0 && a2.attr(`class`, t2.class);
  let o2 = a2.append(`tspan`);
  return o2.attr(`x`, t2.x + t2.textMargin * 2), o2.attr(`fill`, t2.fill), o2.text(n2), a2;
}, `drawSimpleText`), yn = _((e9, t2, n2) => {
  if (!e9 || (n2 = Object.assign({ fontSize: 12, fontWeight: 400, fontFamily: `Arial`, joinWith: `<br/>` }, n2), i.lineBreakRegex.test(e9))) return e9;
  let r2 = e9.split(` `).filter(Boolean), a2 = [], o2 = ``;
  return r2.forEach((e10, i2) => {
    let s2 = Y(`${e10} `, n2), c2 = Y(o2, n2);
    if (s2 > t2) {
      let { hyphenatedStrings: r3, remainingWord: i3 } = bn(e10, t2, `-`, n2);
      a2.push(o2, ...r3), o2 = i3;
    } else c2 + s2 >= t2 ? (a2.push(o2), o2 = e10) : o2 = [o2, e10].filter(Boolean).join(` `);
    i2 + 1 === r2.length && a2.push(o2);
  }), a2.filter((e10) => e10 !== ``).join(n2.joinWith);
}, (e9, t2, n2) => `${e9}${t2}${n2.fontSize}${n2.fontWeight}${n2.fontFamily}${n2.joinWith}`), bn = _((e9, t2, n2 = `-`, r2) => {
  r2 = Object.assign({ fontSize: 12, fontWeight: 400, fontFamily: `Arial`, margin: 0 }, r2);
  let i2 = [...e9], a2 = [], o2 = ``;
  return i2.forEach((e10, s2) => {
    let c2 = `${o2}${e10}`;
    if (Y(c2, r2) >= t2) {
      let e11 = s2 + 1, t3 = i2.length === e11, r3 = `${c2}${n2}`;
      a2.push(t3 ? c2 : r3), o2 = ``;
    } else o2 = c2;
  }), { hyphenatedStrings: a2, remainingWord: o2 };
}, (e9, t2, n2 = `-`, r2) => `${e9}${t2}${n2}${r2.fontSize}${r2.fontWeight}${r2.fontFamily}`);
function J(e9, t2) {
  return X(e9, t2).height;
}
o(J, `calculateTextHeight`);
function Y(e9, t2) {
  return X(e9, t2).width;
}
o(Y, `calculateTextWidth`);
var X = _((e9, t2) => {
  let { fontSize: n2 = 12, fontFamily: r2 = `Arial`, fontWeight: a2 = 400 } = t2;
  if (!e9) return { width: 0, height: 0 };
  let [, o2] = Q(n2), c2 = [`sans-serif`, r2], l2 = e9.split(i.lineBreakRegex), u2 = [], d2 = s(`body`);
  if (!d2.remove) return { width: 0, height: 0, lineHeight: 0 };
  let f2 = d2.append(`svg`);
  for (let e10 of c2) {
    let t3 = 0, n3 = { width: 0, height: 0, lineHeight: 0 };
    for (let r3 of l2) {
      let i2 = _n();
      i2.text = r3 || `\u200B`;
      let s2 = vn(f2, i2).style(`font-size`, o2).style(`font-weight`, a2).style(`font-family`, e10), c3 = (s2._groups || s2)[0][0].getBBox();
      if (c3.width === 0 && c3.height === 0) throw Error(`svg element not in render tree`);
      n3.width = Math.round(Math.max(n3.width, c3.width)), t3 = Math.round(c3.height), n3.height += t3, n3.lineHeight = Math.round(Math.max(n3.lineHeight, t3));
    }
    u2.push(n3);
  }
  return f2.remove(), u2[isNaN(u2[1].height) || isNaN(u2[1].width) || isNaN(u2[1].lineHeight) || u2[0].height > u2[1].height && u2[0].width > u2[1].width && u2[0].lineHeight > u2[1].lineHeight ? 0 : 1];
}, (e9, t2) => `${e9}${t2.fontSize}${t2.fontWeight}${t2.fontFamily}`), xn = (_a = class {
  constructor(e9 = false, t2) {
    this.count = 0, this.count = t2 ? t2.length : 0, this.next = e9 ? () => this.count++ : () => Date.now();
  }
}, o(_a, `InitIDGenerator`), _a), Z, Sn = o(function(e9) {
  return Z || (Z = document.createElement(`div`)), e9 = escape(e9).replace(/%26/g, `&`).replace(/%23/g, `#`).replace(/%3B/g, `;`), Z.innerHTML = e9, unescape(Z.textContent);
}, `entityDecode`);
function Cn(e9) {
  return `str` in e9;
}
o(Cn, `isDetailedError`);
var wn = o((e9, t2, n2, r2) => {
  var _a2;
  if (!r2) return;
  let i2 = (_a2 = e9.node()) == null ? void 0 : _a2.getBBox();
  i2 && e9.append(`text`).text(r2).attr(`text-anchor`, `middle`).attr(`x`, i2.x + i2.width / 2).attr(`y`, -n2).attr(`class`, t2);
}, `insertTitle`), Q = o((e9) => {
  if (typeof e9 == `number`) return [e9, e9 + `px`];
  let t2 = parseInt(e9 ?? ``, 10);
  return Number.isNaN(t2) ? [void 0, void 0] : e9 === String(t2) ? [t2, e9 + `px`] : [t2, e9];
}, `parseFontSize`);
function $(e9, t2) {
  return Zt({}, e9, t2);
}
o($, `cleanAndMerge`);
var Tn = { assignWithDepth: r, wrapLabel: yn, calculateTextHeight: J, calculateTextWidth: Y, calculateTextDimensions: X, cleanAndMerge: $, detectInit: nn, detectDirective: rn, isSubstringInArray: on, interpolateToCurve: U, calcLabelPosition: un, calcCardinalityPosition: fn, calcTerminalLabelPosition: pn, formatUrl: sn, getStylesFromArray: K, generateId: mn, random: gn, runFunc: cn, entityDecode: Sn, insertTitle: wn, isLabelCoordinateInPath: An, parseFontSize: Q, InitIDGenerator: xn }, En = o(function(e9) {
  let t2 = e9;
  return t2 = t2.replace(/style.*:\S*#.*;/g, function(e10) {
    return e10.substring(0, e10.length - 1);
  }), t2 = t2.replace(/classDef.*:\S*#.*;/g, function(e10) {
    return e10.substring(0, e10.length - 1);
  }), t2 = t2.replace(/#\w+;/g, function(e10) {
    let t3 = e10.substring(1, e10.length - 1);
    return /^\+?\d+$/.test(t3) ? `\uFB02\xB0\xB0` + t3 + `\xB6\xDF` : `\uFB02\xB0` + t3 + `\xB6\xDF`;
  }), t2;
}, `encodeEntities`), Dn = o(function(e9) {
  return e9.replace(/ﬂ°°/g, `&#`).replace(/ﬂ°/g, `&`).replace(/¶ß/g, `;`);
}, `decodeEntities`), On = o((e9, t2, { counter: n2 = 0, prefix: r2, suffix: i2 }, a2) => a2 || `${r2 ? `${r2}_` : ``}${e9}_${t2}_${n2}${i2 ? `_${i2}` : ``}`, `getEdgeId`);
function kn(e9) {
  return e9 ?? null;
}
o(kn, `handleUndefinedAttr`);
function An(e9, t2) {
  let n2 = Math.round(e9.x), r2 = Math.round(e9.y), i2 = t2.replace(/(\d+\.\d+)/g, (e10) => Math.round(parseFloat(e10)).toString());
  return i2.includes(n2.toString()) || i2.includes(r2.toString());
}
o(An, `isLabelCoordinateInPath`);
export {
  et as A,
  Pe as B,
  Lt as C,
  ot as D,
  vt as E,
  Be as F,
  ge as G,
  w as H,
  ze as I,
  pe as K,
  Re as L,
  Xe as M,
  Je as N,
  it as O,
  R as P,
  Le as R,
  zt as S,
  bt as T,
  _e as U,
  k as V,
  he as W,
  yn as _,
  Dn as a,
  qt as b,
  On as c,
  U as d,
  Cn as f,
  Tn as g,
  an as h,
  $ as i,
  Qe as j,
  B as k,
  K as l,
  gn as m,
  J as n,
  En as o,
  Q as p,
  Y as r,
  mn as s,
  $t as t,
  kn as u,
  Zt as v,
  H as w,
  Gt as x,
  Yt as y,
  Ne as z
};
