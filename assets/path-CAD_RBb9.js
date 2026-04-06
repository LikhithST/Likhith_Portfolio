var e = Math.PI, t = 2 * e, n = 1e-6, r = t - n;
function i(e2) {
  this._ += e2[0];
  for (let t2 = 1, n2 = e2.length; t2 < n2; ++t2) this._ += arguments[t2] + e2[t2];
}
function a(e2) {
  let t2 = Math.floor(e2);
  if (!(t2 >= 0)) throw Error(`invalid digits: ${e2}`);
  if (t2 > 15) return i;
  let n2 = 10 ** t2;
  return function(e3) {
    this._ += e3[0];
    for (let t3 = 1, r2 = e3.length; t3 < r2; ++t3) this._ += Math.round(arguments[t3] * n2) / n2 + e3[t3];
  };
}
var o = class {
  constructor(e2) {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ``, this._append = e2 == null ? i : a(e2);
  }
  moveTo(e2, t2) {
    this._append`M${this._x0 = this._x1 = +e2},${this._y0 = this._y1 = +t2}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e2, t2) {
    this._append`L${this._x1 = +e2},${this._y1 = +t2}`;
  }
  quadraticCurveTo(e2, t2, n2, r2) {
    this._append`Q${+e2},${+t2},${this._x1 = +n2},${this._y1 = +r2}`;
  }
  bezierCurveTo(e2, t2, n2, r2, i2, a2) {
    this._append`C${+e2},${+t2},${+n2},${+r2},${this._x1 = +i2},${this._y1 = +a2}`;
  }
  arcTo(t2, r2, i2, a2, o2) {
    if (t2 = +t2, r2 = +r2, i2 = +i2, a2 = +a2, o2 = +o2, o2 < 0) throw Error(`negative radius: ${o2}`);
    let s2 = this._x1, c2 = this._y1, l2 = i2 - t2, u = a2 - r2, d = s2 - t2, f = c2 - r2, p = d * d + f * f;
    if (this._x1 === null) this._append`M${this._x1 = t2},${this._y1 = r2}`;
    else if (p > n) if (!(Math.abs(f * l2 - u * d) > n) || !o2) this._append`L${this._x1 = t2},${this._y1 = r2}`;
    else {
      let m = i2 - s2, h = a2 - c2, g = l2 * l2 + u * u, _ = m * m + h * h, v = Math.sqrt(g), y = Math.sqrt(p), b = o2 * Math.tan((e - Math.acos((g + p - _) / (2 * v * y))) / 2), x = b / y, S = b / v;
      Math.abs(x - 1) > n && this._append`L${t2 + x * d},${r2 + x * f}`, this._append`A${o2},${o2},0,0,${+(f * m > d * h)},${this._x1 = t2 + S * l2},${this._y1 = r2 + S * u}`;
    }
  }
  arc(i2, a2, o2, s2, c2, l2) {
    if (i2 = +i2, a2 = +a2, o2 = +o2, l2 = !!l2, o2 < 0) throw Error(`negative radius: ${o2}`);
    let u = o2 * Math.cos(s2), d = o2 * Math.sin(s2), f = i2 + u, p = a2 + d, m = 1 ^ l2, h = l2 ? s2 - c2 : c2 - s2;
    this._x1 === null ? this._append`M${f},${p}` : (Math.abs(this._x1 - f) > n || Math.abs(this._y1 - p) > n) && this._append`L${f},${p}`, o2 && (h < 0 && (h = h % t + t), h > r ? this._append`A${o2},${o2},0,1,${m},${i2 - u},${a2 - d}A${o2},${o2},0,1,${m},${this._x1 = f},${this._y1 = p}` : h > n && this._append`A${o2},${o2},0,${+(h >= e)},${m},${this._x1 = i2 + o2 * Math.cos(c2)},${this._y1 = a2 + o2 * Math.sin(c2)}`);
  }
  rect(e2, t2, n2, r2) {
    this._append`M${this._x0 = this._x1 = +e2},${this._y0 = this._y1 = +t2}h${n2 = +n2}v${+r2}h${-n2}Z`;
  }
  toString() {
    return this._;
  }
};
function s() {
  return new o();
}
s.prototype = o.prototype;
function c(e2) {
  return function() {
    return e2;
  };
}
function l(e2) {
  let t2 = 3;
  return e2.digits = function(n2) {
    if (!arguments.length) return t2;
    if (n2 == null) t2 = null;
    else {
      let e3 = Math.floor(n2);
      if (!(e3 >= 0)) throw RangeError(`invalid digits: ${n2}`);
      t2 = e3;
    }
    return e2;
  }, () => new o(t2);
}
export {
  c as n,
  l as t
};
