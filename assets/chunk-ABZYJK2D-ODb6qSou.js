import { _ as e, g as t, h as n, m as r } from "./src-D8UWkQNo.js";
let y, Zt, Cn, On, Pt, qt, yt, fn, Mn, Vt, W, Fn, Pn, ot, sn, rn, kt, b, Ct, z, pt, Dn, $, St, I, wt, x, En, Sn, jn, dn, q, v, at, tt, Jt, an, Rn, Ft, J, L, Ot, l, _n, it, gn, V, s, cn, rt, _, Nn, wn, Tt, zn, Et, Tn;
let __tla = (async () => {
  var _a, _b, _c, _d, _e2, _f, _g;
  var i = `modulepreload`, a = function(e2) {
    return `/Likhith_Portfolio/` + e2;
  }, o = {};
  s = function(e2, t2, n2) {
    let r2 = Promise.resolve();
    if (t2 && t2.length > 0) {
      let l2 = function(e4) {
        return Promise.all(e4.map((e5) => Promise.resolve(e5).then((e6) => ({
          status: `fulfilled`,
          value: e6
        }), (e6) => ({
          status: `rejected`,
          reason: e6
        }))));
      };
      let e3 = document.getElementsByTagName(`link`), s3 = document.querySelector(`meta[property=csp-nonce]`), c2 = (s3 == null ? void 0 : s3.nonce) || (s3 == null ? void 0 : s3.getAttribute(`nonce`));
      r2 = l2(t2.map((t3) => {
        if (t3 = a(t3, n2), t3 in o) return;
        o[t3] = true;
        let r3 = t3.endsWith(`.css`), s4 = r3 ? `[rel="stylesheet"]` : ``;
        if (n2) for (let n3 = e3.length - 1; n3 >= 0; n3--) {
          let i2 = e3[n3];
          if (i2.href === t3 && (!r3 || i2.rel === `stylesheet`)) return;
        }
        else if (document.querySelector(`link[href="${t3}"]${s4}`)) return;
        let l3 = document.createElement(`link`);
        if (l3.rel = r3 ? `stylesheet` : i, r3 || (l3.as = `script`), l3.crossOrigin = ``, l3.href = t3, c2 && l3.setAttribute(`nonce`, c2), document.head.appendChild(l3), r3) return new Promise((e4, n3) => {
          l3.addEventListener(`load`, e4), l3.addEventListener(`error`, () => n3(Error(`Unable to preload CSS for ${t3}`)));
        });
      }));
    }
    function s2(e3) {
      let t3 = new Event(`vite:preloadError`, {
        cancelable: true
      });
      if (t3.payload = e3, window.dispatchEvent(t3), !t3.defaultPrevented) throw e3;
    }
    return r2.then((t3) => {
      for (let e3 of t3 || []) e3.status === `rejected` && s2(e3.reason);
      return e2().catch(s2);
    });
  };
  let c, u;
  c = {
    min: {
      r: 0,
      g: 0,
      b: 0,
      s: 0,
      l: 0,
      a: 0
    },
    max: {
      r: 255,
      g: 255,
      b: 255,
      h: 360,
      s: 100,
      l: 100,
      a: 1
    },
    clamp: {
      r: (e2) => e2 >= 255 ? 255 : e2 < 0 ? 0 : e2,
      g: (e2) => e2 >= 255 ? 255 : e2 < 0 ? 0 : e2,
      b: (e2) => e2 >= 255 ? 255 : e2 < 0 ? 0 : e2,
      h: (e2) => e2 % 360,
      s: (e2) => e2 >= 100 ? 100 : e2 < 0 ? 0 : e2,
      l: (e2) => e2 >= 100 ? 100 : e2 < 0 ? 0 : e2,
      a: (e2) => e2 >= 1 ? 1 : e2 < 0 ? 0 : e2
    },
    toLinear: (e2) => {
      let t2 = e2 / 255;
      return e2 > 0.03928 ? ((t2 + 0.055) / 1.055) ** 2.4 : t2 / 12.92;
    },
    hue2rgb: (e2, t2, n2) => (n2 < 0 && (n2 += 1), n2 > 1 && --n2, n2 < 1 / 6 ? e2 + (t2 - e2) * 6 * n2 : n2 < 1 / 2 ? t2 : n2 < 2 / 3 ? e2 + (t2 - e2) * (2 / 3 - n2) * 6 : e2),
    hsl2rgb: ({ h: e2, s: t2, l: n2 }, r2) => {
      if (!t2) return n2 * 2.55;
      e2 /= 360, t2 /= 100, n2 /= 100;
      let i2 = n2 < 0.5 ? n2 * (1 + t2) : n2 + t2 - n2 * t2, a2 = 2 * n2 - i2;
      switch (r2) {
        case `r`:
          return c.hue2rgb(a2, i2, e2 + 1 / 3) * 255;
        case `g`:
          return c.hue2rgb(a2, i2, e2) * 255;
        case `b`:
          return c.hue2rgb(a2, i2, e2 - 1 / 3) * 255;
      }
    },
    rgb2hsl: ({ r: e2, g: t2, b: n2 }, r2) => {
      e2 /= 255, t2 /= 255, n2 /= 255;
      let i2 = Math.max(e2, t2, n2), a2 = Math.min(e2, t2, n2), o2 = (i2 + a2) / 2;
      if (r2 === `l`) return o2 * 100;
      if (i2 === a2) return 0;
      let s2 = i2 - a2, c2 = o2 > 0.5 ? s2 / (2 - i2 - a2) : s2 / (i2 + a2);
      if (r2 === `s`) return c2 * 100;
      switch (i2) {
        case e2:
          return ((t2 - n2) / s2 + (t2 < n2 ? 6 : 0)) * 60;
        case t2:
          return ((n2 - e2) / s2 + 2) * 60;
        case n2:
          return ((e2 - t2) / s2 + 4) * 60;
        default:
          return -1;
      }
    }
  };
  l = {
    channel: c,
    lang: {
      clamp: (e2, t2, n2) => t2 > n2 ? Math.min(t2, Math.max(n2, e2)) : Math.min(n2, Math.max(t2, e2)),
      round: (e2) => Math.round(e2 * 1e10) / 1e10
    },
    unit: {
      dec2hex: (e2) => {
        let t2 = Math.round(e2).toString(16);
        return t2.length > 1 ? t2 : `0${t2}`;
      }
    }
  };
  u = {};
  for (let e2 = 0; e2 <= 255; e2++) u[e2] = l.unit.dec2hex(e2);
  let d, ee, f, p, m, te, ne, re, ie, h, g, ae, oe, se, ce, S, le, C, ue, de, fe, pe, w, T, E, me, D, he;
  d = {
    ALL: 0,
    RGB: 1,
    HSL: 2
  };
  ee = class {
    constructor() {
      this.type = d.ALL;
    }
    get() {
      return this.type;
    }
    set(e2) {
      if (this.type && this.type !== e2) throw Error(`Cannot change both RGB and HSL channels at the same time`);
      this.type = e2;
    }
    reset() {
      this.type = d.ALL;
    }
    is(e2) {
      return this.type === e2;
    }
  };
  f = new class {
    constructor(e2, t2) {
      this.color = t2, this.changed = false, this.data = e2, this.type = new ee();
    }
    set(e2, t2) {
      return this.color = t2, this.changed = false, this.data = e2, this.type.type = d.ALL, this;
    }
    _ensureHSL() {
      let e2 = this.data, { h: t2, s: n2, l: r2 } = e2;
      t2 === void 0 && (e2.h = l.channel.rgb2hsl(e2, `h`)), n2 === void 0 && (e2.s = l.channel.rgb2hsl(e2, `s`)), r2 === void 0 && (e2.l = l.channel.rgb2hsl(e2, `l`));
    }
    _ensureRGB() {
      let e2 = this.data, { r: t2, g: n2, b: r2 } = e2;
      t2 === void 0 && (e2.r = l.channel.hsl2rgb(e2, `r`)), n2 === void 0 && (e2.g = l.channel.hsl2rgb(e2, `g`)), r2 === void 0 && (e2.b = l.channel.hsl2rgb(e2, `b`));
    }
    get r() {
      let e2 = this.data, t2 = e2.r;
      return !this.type.is(d.HSL) && t2 !== void 0 ? t2 : (this._ensureHSL(), l.channel.hsl2rgb(e2, `r`));
    }
    get g() {
      let e2 = this.data, t2 = e2.g;
      return !this.type.is(d.HSL) && t2 !== void 0 ? t2 : (this._ensureHSL(), l.channel.hsl2rgb(e2, `g`));
    }
    get b() {
      let e2 = this.data, t2 = e2.b;
      return !this.type.is(d.HSL) && t2 !== void 0 ? t2 : (this._ensureHSL(), l.channel.hsl2rgb(e2, `b`));
    }
    get h() {
      let e2 = this.data, t2 = e2.h;
      return !this.type.is(d.RGB) && t2 !== void 0 ? t2 : (this._ensureRGB(), l.channel.rgb2hsl(e2, `h`));
    }
    get s() {
      let e2 = this.data, t2 = e2.s;
      return !this.type.is(d.RGB) && t2 !== void 0 ? t2 : (this._ensureRGB(), l.channel.rgb2hsl(e2, `s`));
    }
    get l() {
      let e2 = this.data, t2 = e2.l;
      return !this.type.is(d.RGB) && t2 !== void 0 ? t2 : (this._ensureRGB(), l.channel.rgb2hsl(e2, `l`));
    }
    get a() {
      return this.data.a;
    }
    set r(e2) {
      this.type.set(d.RGB), this.changed = true, this.data.r = e2;
    }
    set g(e2) {
      this.type.set(d.RGB), this.changed = true, this.data.g = e2;
    }
    set b(e2) {
      this.type.set(d.RGB), this.changed = true, this.data.b = e2;
    }
    set h(e2) {
      this.type.set(d.HSL), this.changed = true, this.data.h = e2;
    }
    set s(e2) {
      this.type.set(d.HSL), this.changed = true, this.data.s = e2;
    }
    set l(e2) {
      this.type.set(d.HSL), this.changed = true, this.data.l = e2;
    }
    set a(e2) {
      this.changed = true, this.data.a = e2;
    }
  }({
    r: 0,
    g: 0,
    b: 0,
    a: 0
  }, `transparent`);
  p = {
    re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
    parse: (e2) => {
      if (e2.charCodeAt(0) !== 35) return;
      let t2 = e2.match(p.re);
      if (!t2) return;
      let n2 = t2[1], r2 = parseInt(n2, 16), i2 = n2.length, a2 = i2 % 4 == 0, o2 = i2 > 4, s2 = o2 ? 1 : 17, c2 = o2 ? 8 : 4, l2 = a2 ? 0 : -1, u2 = o2 ? 255 : 15;
      return f.set({
        r: (r2 >> c2 * (l2 + 3) & u2) * s2,
        g: (r2 >> c2 * (l2 + 2) & u2) * s2,
        b: (r2 >> c2 * (l2 + 1) & u2) * s2,
        a: a2 ? (r2 & u2) * s2 / 255 : 1
      }, e2);
    },
    stringify: (e2) => {
      let { r: t2, g: n2, b: r2, a: i2 } = e2;
      return i2 < 1 ? `#${u[Math.round(t2)]}${u[Math.round(n2)]}${u[Math.round(r2)]}${u[Math.round(i2 * 255)]}` : `#${u[Math.round(t2)]}${u[Math.round(n2)]}${u[Math.round(r2)]}`;
    }
  };
  m = p;
  te = {
    re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
    hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
    _hue2deg: (e2) => {
      let t2 = e2.match(te.hueRe);
      if (t2) {
        let [, e3, n2] = t2;
        switch (n2) {
          case `grad`:
            return l.channel.clamp.h(parseFloat(e3) * 0.9);
          case `rad`:
            return l.channel.clamp.h(parseFloat(e3) * 180 / Math.PI);
          case `turn`:
            return l.channel.clamp.h(parseFloat(e3) * 360);
        }
      }
      return l.channel.clamp.h(parseFloat(e2));
    },
    parse: (e2) => {
      let t2 = e2.charCodeAt(0);
      if (t2 !== 104 && t2 !== 72) return;
      let n2 = e2.match(te.re);
      if (!n2) return;
      let [, r2, i2, a2, o2, s2] = n2;
      return f.set({
        h: te._hue2deg(r2),
        s: l.channel.clamp.s(parseFloat(i2)),
        l: l.channel.clamp.l(parseFloat(a2)),
        a: o2 ? l.channel.clamp.a(s2 ? parseFloat(o2) / 100 : parseFloat(o2)) : 1
      }, e2);
    },
    stringify: (e2) => {
      let { h: t2, s: n2, l: r2, a: i2 } = e2;
      return i2 < 1 ? `hsla(${l.lang.round(t2)}, ${l.lang.round(n2)}%, ${l.lang.round(r2)}%, ${i2})` : `hsl(${l.lang.round(t2)}, ${l.lang.round(n2)}%, ${l.lang.round(r2)}%)`;
    }
  };
  ne = te;
  re = {
    colors: {
      aliceblue: `#f0f8ff`,
      antiquewhite: `#faebd7`,
      aqua: `#00ffff`,
      aquamarine: `#7fffd4`,
      azure: `#f0ffff`,
      beige: `#f5f5dc`,
      bisque: `#ffe4c4`,
      black: `#000000`,
      blanchedalmond: `#ffebcd`,
      blue: `#0000ff`,
      blueviolet: `#8a2be2`,
      brown: `#a52a2a`,
      burlywood: `#deb887`,
      cadetblue: `#5f9ea0`,
      chartreuse: `#7fff00`,
      chocolate: `#d2691e`,
      coral: `#ff7f50`,
      cornflowerblue: `#6495ed`,
      cornsilk: `#fff8dc`,
      crimson: `#dc143c`,
      cyanaqua: `#00ffff`,
      darkblue: `#00008b`,
      darkcyan: `#008b8b`,
      darkgoldenrod: `#b8860b`,
      darkgray: `#a9a9a9`,
      darkgreen: `#006400`,
      darkgrey: `#a9a9a9`,
      darkkhaki: `#bdb76b`,
      darkmagenta: `#8b008b`,
      darkolivegreen: `#556b2f`,
      darkorange: `#ff8c00`,
      darkorchid: `#9932cc`,
      darkred: `#8b0000`,
      darksalmon: `#e9967a`,
      darkseagreen: `#8fbc8f`,
      darkslateblue: `#483d8b`,
      darkslategray: `#2f4f4f`,
      darkslategrey: `#2f4f4f`,
      darkturquoise: `#00ced1`,
      darkviolet: `#9400d3`,
      deeppink: `#ff1493`,
      deepskyblue: `#00bfff`,
      dimgray: `#696969`,
      dimgrey: `#696969`,
      dodgerblue: `#1e90ff`,
      firebrick: `#b22222`,
      floralwhite: `#fffaf0`,
      forestgreen: `#228b22`,
      fuchsia: `#ff00ff`,
      gainsboro: `#dcdcdc`,
      ghostwhite: `#f8f8ff`,
      gold: `#ffd700`,
      goldenrod: `#daa520`,
      gray: `#808080`,
      green: `#008000`,
      greenyellow: `#adff2f`,
      grey: `#808080`,
      honeydew: `#f0fff0`,
      hotpink: `#ff69b4`,
      indianred: `#cd5c5c`,
      indigo: `#4b0082`,
      ivory: `#fffff0`,
      khaki: `#f0e68c`,
      lavender: `#e6e6fa`,
      lavenderblush: `#fff0f5`,
      lawngreen: `#7cfc00`,
      lemonchiffon: `#fffacd`,
      lightblue: `#add8e6`,
      lightcoral: `#f08080`,
      lightcyan: `#e0ffff`,
      lightgoldenrodyellow: `#fafad2`,
      lightgray: `#d3d3d3`,
      lightgreen: `#90ee90`,
      lightgrey: `#d3d3d3`,
      lightpink: `#ffb6c1`,
      lightsalmon: `#ffa07a`,
      lightseagreen: `#20b2aa`,
      lightskyblue: `#87cefa`,
      lightslategray: `#778899`,
      lightslategrey: `#778899`,
      lightsteelblue: `#b0c4de`,
      lightyellow: `#ffffe0`,
      lime: `#00ff00`,
      limegreen: `#32cd32`,
      linen: `#faf0e6`,
      magenta: `#ff00ff`,
      maroon: `#800000`,
      mediumaquamarine: `#66cdaa`,
      mediumblue: `#0000cd`,
      mediumorchid: `#ba55d3`,
      mediumpurple: `#9370db`,
      mediumseagreen: `#3cb371`,
      mediumslateblue: `#7b68ee`,
      mediumspringgreen: `#00fa9a`,
      mediumturquoise: `#48d1cc`,
      mediumvioletred: `#c71585`,
      midnightblue: `#191970`,
      mintcream: `#f5fffa`,
      mistyrose: `#ffe4e1`,
      moccasin: `#ffe4b5`,
      navajowhite: `#ffdead`,
      navy: `#000080`,
      oldlace: `#fdf5e6`,
      olive: `#808000`,
      olivedrab: `#6b8e23`,
      orange: `#ffa500`,
      orangered: `#ff4500`,
      orchid: `#da70d6`,
      palegoldenrod: `#eee8aa`,
      palegreen: `#98fb98`,
      paleturquoise: `#afeeee`,
      palevioletred: `#db7093`,
      papayawhip: `#ffefd5`,
      peachpuff: `#ffdab9`,
      peru: `#cd853f`,
      pink: `#ffc0cb`,
      plum: `#dda0dd`,
      powderblue: `#b0e0e6`,
      purple: `#800080`,
      rebeccapurple: `#663399`,
      red: `#ff0000`,
      rosybrown: `#bc8f8f`,
      royalblue: `#4169e1`,
      saddlebrown: `#8b4513`,
      salmon: `#fa8072`,
      sandybrown: `#f4a460`,
      seagreen: `#2e8b57`,
      seashell: `#fff5ee`,
      sienna: `#a0522d`,
      silver: `#c0c0c0`,
      skyblue: `#87ceeb`,
      slateblue: `#6a5acd`,
      slategray: `#708090`,
      slategrey: `#708090`,
      snow: `#fffafa`,
      springgreen: `#00ff7f`,
      tan: `#d2b48c`,
      teal: `#008080`,
      thistle: `#d8bfd8`,
      transparent: `#00000000`,
      turquoise: `#40e0d0`,
      violet: `#ee82ee`,
      wheat: `#f5deb3`,
      white: `#ffffff`,
      whitesmoke: `#f5f5f5`,
      yellow: `#ffff00`,
      yellowgreen: `#9acd32`
    },
    parse: (e2) => {
      e2 = e2.toLowerCase();
      let t2 = re.colors[e2];
      if (t2) return m.parse(t2);
    },
    stringify: (e2) => {
      let t2 = m.stringify(e2);
      for (let e3 in re.colors) if (re.colors[e3] === t2) return e3;
    }
  };
  ie = re;
  h = {
    re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
    parse: (e2) => {
      let t2 = e2.charCodeAt(0);
      if (t2 !== 114 && t2 !== 82) return;
      let n2 = e2.match(h.re);
      if (!n2) return;
      let [, r2, i2, a2, o2, s2, c2, u2, d2] = n2;
      return f.set({
        r: l.channel.clamp.r(i2 ? parseFloat(r2) * 2.55 : parseFloat(r2)),
        g: l.channel.clamp.g(o2 ? parseFloat(a2) * 2.55 : parseFloat(a2)),
        b: l.channel.clamp.b(c2 ? parseFloat(s2) * 2.55 : parseFloat(s2)),
        a: u2 ? l.channel.clamp.a(d2 ? parseFloat(u2) / 100 : parseFloat(u2)) : 1
      }, e2);
    },
    stringify: (e2) => {
      let { r: t2, g: n2, b: r2, a: i2 } = e2;
      return i2 < 1 ? `rgba(${l.lang.round(t2)}, ${l.lang.round(n2)}, ${l.lang.round(r2)}, ${l.lang.round(i2)})` : `rgb(${l.lang.round(t2)}, ${l.lang.round(n2)}, ${l.lang.round(r2)})`;
    }
  };
  g = h;
  _ = {
    format: {
      keyword: ie,
      hex: m,
      rgb: g,
      rgba: g,
      hsl: ne,
      hsla: ne
    },
    parse: (e2) => {
      if (typeof e2 != `string`) return e2;
      let t2 = m.parse(e2) || g.parse(e2) || ne.parse(e2) || ie.parse(e2);
      if (t2) return t2;
      throw Error(`Unsupported color format: "${e2}"`);
    },
    stringify: (e2) => !e2.changed && e2.color ? e2.color : e2.type.is(d.HSL) || e2.data.r === void 0 ? ne.stringify(e2) : e2.a < 1 || !Number.isInteger(e2.r) || !Number.isInteger(e2.g) || !Number.isInteger(e2.b) ? g.stringify(e2) : m.stringify(e2)
  };
  ae = (e2, t2) => {
    let n2 = _.parse(e2);
    for (let e3 in t2) n2[e3] = l.channel.clamp[e3](t2[e3]);
    return _.stringify(n2);
  };
  v = (e2, t2, n2 = 0, r2 = 1) => {
    if (typeof e2 != `number`) return ae(e2, {
      a: t2
    });
    let i2 = f.set({
      r: l.channel.clamp.r(e2),
      g: l.channel.clamp.g(t2),
      b: l.channel.clamp.b(n2),
      a: l.channel.clamp.a(r2)
    });
    return _.stringify(i2);
  };
  oe = (e2) => {
    let { r: t2, g: n2, b: r2 } = _.parse(e2), i2 = 0.2126 * l.channel.toLinear(t2) + 0.7152 * l.channel.toLinear(n2) + 0.0722 * l.channel.toLinear(r2);
    return l.lang.round(i2);
  };
  se = (e2) => oe(e2) >= 0.5;
  y = (e2) => !se(e2);
  ce = (e2, t2, n2) => {
    let r2 = _.parse(e2), i2 = r2[t2], a2 = l.channel.clamp[t2](i2 + n2);
    return i2 !== a2 && (r2[t2] = a2), _.stringify(r2);
  };
  b = (e2, t2) => ce(e2, `l`, t2);
  x = (e2, t2) => ce(e2, `l`, -t2);
  S = (e2, t2) => {
    let n2 = _.parse(e2), r2 = {};
    for (let e3 in t2) t2[e3] && (r2[e3] = n2[e3] + t2[e3]);
    return ae(e2, r2);
  };
  le = (e2, t2, n2 = 50) => {
    let { r: r2, g: i2, b: a2, a: o2 } = _.parse(e2), { r: s2, g: c2, b: l2, a: u2 } = _.parse(t2), d2 = n2 / 100, ee2 = d2 * 2 - 1, f2 = o2 - u2, p2 = ((ee2 * f2 === -1 ? ee2 : (ee2 + f2) / (1 + ee2 * f2)) + 1) / 2, m2 = 1 - p2;
    return v(r2 * p2 + s2 * m2, i2 * p2 + c2 * m2, a2 * p2 + l2 * m2, o2 * d2 + u2 * (1 - d2));
  };
  C = (e2, t2 = 100) => {
    let n2 = _.parse(e2);
    return n2.r = 255 - n2.r, n2.g = 255 - n2.g, n2.b = 255 - n2.b, le(n2, e2, t2);
  };
  ({ entries: ue, setPrototypeOf: de, isFrozen: fe, getPrototypeOf: pe, getOwnPropertyDescriptor: w } = Object);
  ({ freeze: T, seal: E, create: me } = Object);
  ({ apply: D, construct: he } = typeof Reflect < `u` && Reflect);
  T || (T = function(e2) {
    return e2;
  }), E || (E = function(e2) {
    return e2;
  }), D || (D = function(e2, t2) {
    var n2 = [
      ...arguments
    ].slice(2);
    return e2.apply(t2, n2);
  }), he || (he = function(e2) {
    return new e2(...[
      ...arguments
    ].slice(1));
  });
  var ge = A(Array.prototype.forEach), _e = A(Array.prototype.lastIndexOf), ve = A(Array.prototype.pop), ye = A(Array.prototype.push), be = A(Array.prototype.splice), xe = A(String.prototype.toLowerCase), Se = A(String.prototype.toString), Ce = A(String.prototype.match), we = A(String.prototype.replace), Te = A(String.prototype.indexOf), Ee = A(String.prototype.trim), O = A(Object.prototype.hasOwnProperty), k = A(RegExp.prototype.test), De = Oe(TypeError);
  function A(e2) {
    return function(t2) {
      t2 instanceof RegExp && (t2.lastIndex = 0);
      var n2 = [
        ...arguments
      ].slice(1);
      return D(e2, t2, n2);
    };
  }
  function Oe(e2) {
    return function() {
      return he(e2, [
        ...arguments
      ]);
    };
  }
  function j(e2, t2) {
    let n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : xe;
    de && de(e2, null);
    let r2 = t2.length;
    for (; r2--; ) {
      let i2 = t2[r2];
      if (typeof i2 == `string`) {
        let e3 = n2(i2);
        e3 !== i2 && (fe(t2) || (t2[r2] = e3), i2 = e3);
      }
      e2[i2] = true;
    }
    return e2;
  }
  function ke(e2) {
    for (let t2 = 0; t2 < e2.length; t2++) O(e2, t2) || (e2[t2] = null);
    return e2;
  }
  function M(e2) {
    let t2 = me(null);
    for (let [n2, r2] of ue(e2)) O(e2, n2) && (Array.isArray(r2) ? t2[n2] = ke(r2) : r2 && typeof r2 == `object` && r2.constructor === Object ? t2[n2] = M(r2) : t2[n2] = r2);
    return t2;
  }
  function Ae(e2, t2) {
    for (; e2 !== null; ) {
      let n3 = w(e2, t2);
      if (n3) {
        if (n3.get) return A(n3.get);
        if (typeof n3.value == `function`) return A(n3.value);
      }
      e2 = pe(e2);
    }
    function n2() {
      return null;
    }
    return n2;
  }
  var je = T(`a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr`.split(`.`)), Me = T(`svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern`.split(`.`)), Ne = T([
    `feBlend`,
    `feColorMatrix`,
    `feComponentTransfer`,
    `feComposite`,
    `feConvolveMatrix`,
    `feDiffuseLighting`,
    `feDisplacementMap`,
    `feDistantLight`,
    `feDropShadow`,
    `feFlood`,
    `feFuncA`,
    `feFuncB`,
    `feFuncG`,
    `feFuncR`,
    `feGaussianBlur`,
    `feImage`,
    `feMerge`,
    `feMergeNode`,
    `feMorphology`,
    `feOffset`,
    `fePointLight`,
    `feSpecularLighting`,
    `feSpotLight`,
    `feTile`,
    `feTurbulence`
  ]), Pe = T([
    `animate`,
    `color-profile`,
    `cursor`,
    `discard`,
    `font-face`,
    `font-face-format`,
    `font-face-name`,
    `font-face-src`,
    `font-face-uri`,
    `foreignobject`,
    `hatch`,
    `hatchpath`,
    `mesh`,
    `meshgradient`,
    `meshpatch`,
    `meshrow`,
    `missing-glyph`,
    `script`,
    `set`,
    `solidcolor`,
    `unknown`,
    `use`
  ]), Fe = T(`math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts`.split(`.`)), Ie = T([
    `maction`,
    `maligngroup`,
    `malignmark`,
    `mlongdiv`,
    `mscarries`,
    `mscarry`,
    `msgroup`,
    `mstack`,
    `msline`,
    `msrow`,
    `semantics`,
    `annotation`,
    `annotation-xml`,
    `mprescripts`,
    `none`
  ]), Le = T([
    `#text`
  ]), Re = T(`accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns.slot`.split(`.`)), ze = T(`accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan`.split(`.`)), Be = T(`accent.accentunder.align.bevelled.close.columnsalign.columnlines.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lspace.lquote.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns`.split(`.`)), Ve = T([
    `xlink:href`,
    `xml:id`,
    `xlink:title`,
    `xml:space`,
    `xmlns:xlink`
  ]), N = E(/\{\{[\w\W]*|[\w\W]*\}\}/gm), He = E(/<%[\w\W]*|[\w\W]*%>/gm), Ue = E(/\$\{[\w\W]*/gm), We = E(/^data-[\-\w.\u00B7-\uFFFF]+$/), Ge = E(/^aria-[\-\w]+$/), Ke = E(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), P = E(/^(?:\w+script|data):/i), qe = E(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), Je = E(/^html$/i), F = E(/^[a-z][.\w]*(-[.\w]+)+$/i), Ye = Object.freeze({
    __proto__: null,
    ARIA_ATTR: Ge,
    ATTR_WHITESPACE: qe,
    CUSTOM_ELEMENT: F,
    DATA_ATTR: We,
    DOCTYPE_NAME: Je,
    ERB_EXPR: He,
    IS_ALLOWED_URI: Ke,
    IS_SCRIPT_OR_DATA: P,
    MUSTACHE_EXPR: N,
    TMPLIT_EXPR: Ue
  }), Xe = {
    element: 1,
    attribute: 2,
    text: 3,
    cdataSection: 4,
    entityReference: 5,
    entityNode: 6,
    progressingInstruction: 7,
    comment: 8,
    document: 9,
    documentType: 10,
    documentFragment: 11,
    notation: 12
  }, Ze = function() {
    return typeof window > `u` ? null : window;
  }, Qe = function(e2, t2) {
    if (typeof e2 != `object` || typeof e2.createPolicy != `function`) return null;
    let n2 = null, r2 = `data-tt-policy-suffix`;
    t2 && t2.hasAttribute(r2) && (n2 = t2.getAttribute(r2));
    let i2 = `dompurify` + (n2 ? `#` + n2 : ``);
    try {
      return e2.createPolicy(i2, {
        createHTML(e3) {
          return e3;
        },
        createScriptURL(e3) {
          return e3;
        }
      });
    } catch {
      return console.warn(`TrustedTypes policy ` + i2 + ` could not be created.`), null;
    }
  }, $e = function() {
    return {
      afterSanitizeAttributes: [],
      afterSanitizeElements: [],
      afterSanitizeShadowDOM: [],
      beforeSanitizeAttributes: [],
      beforeSanitizeElements: [],
      beforeSanitizeShadowDOM: [],
      uponSanitizeAttribute: [],
      uponSanitizeElement: [],
      uponSanitizeShadowNode: []
    };
  };
  function et() {
    let e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ze(), t2 = (e3) => et(e3);
    if (t2.version = `3.3.1`, t2.removed = [], !e2 || !e2.document || e2.document.nodeType !== Xe.document || !e2.Element) return t2.isSupported = false, t2;
    let { document: n2 } = e2, r2 = n2, i2 = r2.currentScript, { DocumentFragment: a2, HTMLTemplateElement: o2, Node: s2, Element: c2, NodeFilter: l2, NamedNodeMap: u2 = e2.NamedNodeMap || e2.MozNamedAttrMap, HTMLFormElement: d2, DOMParser: ee2, trustedTypes: f2 } = e2, p2 = c2.prototype, m2 = Ae(p2, `cloneNode`), te2 = Ae(p2, `remove`), ne2 = Ae(p2, `nextSibling`), re2 = Ae(p2, `childNodes`), ie2 = Ae(p2, `parentNode`);
    if (typeof o2 == `function`) {
      let e3 = n2.createElement(`template`);
      e3.content && e3.content.ownerDocument && (n2 = e3.content.ownerDocument);
    }
    let h2, g2 = ``, { implementation: _2, createNodeIterator: ae2, createDocumentFragment: v2, getElementsByTagName: oe2 } = n2, { importNode: se2 } = r2, y2 = $e();
    t2.isSupported = typeof ue == `function` && typeof ie2 == `function` && _2 && _2.createHTMLDocument !== void 0;
    let { MUSTACHE_EXPR: ce2, ERB_EXPR: b2, TMPLIT_EXPR: x2, DATA_ATTR: S2, ARIA_ATTR: le2, IS_SCRIPT_OR_DATA: C2, ATTR_WHITESPACE: de2, CUSTOM_ELEMENT: fe2 } = Ye, { IS_ALLOWED_URI: pe2 } = Ye, w2 = null, E2 = j({}, [
      ...je,
      ...Me,
      ...Ne,
      ...Fe,
      ...Le
    ]), D2 = null, he2 = j({}, [
      ...Re,
      ...ze,
      ...Be,
      ...Ve
    ]), A2 = Object.seal(me(null, {
      tagNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: false
      }
    })), Oe2 = null, ke2 = null, N2 = Object.seal(me(null, {
      tagCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      }
    })), He2 = true, Ue2 = true, We2 = false, Ge2 = true, P2 = false, qe2 = true, F2 = false, I2 = false, tt2 = false, L2 = false, nt2 = false, rt2 = false, it2 = true, at2 = false, ot2 = true, R2 = false, z2 = {}, B2 = null, V2 = j({}, [
      `annotation-xml`,
      `audio`,
      `colgroup`,
      `desc`,
      `foreignobject`,
      `head`,
      `iframe`,
      `math`,
      `mi`,
      `mn`,
      `mo`,
      `ms`,
      `mtext`,
      `noembed`,
      `noframes`,
      `noscript`,
      `plaintext`,
      `script`,
      `style`,
      `svg`,
      `template`,
      `thead`,
      `title`,
      `video`,
      `xmp`
    ]), st2 = null, ct2 = j({}, [
      `audio`,
      `video`,
      `img`,
      `source`,
      `image`,
      `track`
    ]), H2 = null, lt2 = j({}, [
      `alt`,
      `class`,
      `for`,
      `id`,
      `label`,
      `name`,
      `pattern`,
      `placeholder`,
      `role`,
      `summary`,
      `title`,
      `value`,
      `style`,
      `xmlns`
    ]), ut2 = `http://www.w3.org/1998/Math/MathML`, dt2 = `http://www.w3.org/2000/svg`, U2 = `http://www.w3.org/1999/xhtml`, ft2 = U2, pt2 = false, mt2 = null, ht2 = j({}, [
      ut2,
      dt2,
      U2
    ], Se), gt2 = j({}, [
      `mi`,
      `mo`,
      `mn`,
      `ms`,
      `mtext`
    ]), W2 = j({}, [
      `annotation-xml`
    ]), G2 = j({}, [
      `title`,
      `style`,
      `font`,
      `a`,
      `script`
    ]), _t2 = null, vt2 = [
      `application/xhtml+xml`,
      `text/html`
    ], K2 = null, q2 = null, yt2 = n2.createElement(`form`), bt2 = function(e3) {
      return e3 instanceof RegExp || e3 instanceof Function;
    }, J2 = function() {
      let e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!(q2 && q2 === e3)) {
        if ((!e3 || typeof e3 != `object`) && (e3 = {}), e3 = M(e3), _t2 = vt2.indexOf(e3.PARSER_MEDIA_TYPE) === -1 ? `text/html` : e3.PARSER_MEDIA_TYPE, K2 = _t2 === `application/xhtml+xml` ? Se : xe, w2 = O(e3, `ALLOWED_TAGS`) ? j({}, e3.ALLOWED_TAGS, K2) : E2, D2 = O(e3, `ALLOWED_ATTR`) ? j({}, e3.ALLOWED_ATTR, K2) : he2, mt2 = O(e3, `ALLOWED_NAMESPACES`) ? j({}, e3.ALLOWED_NAMESPACES, Se) : ht2, H2 = O(e3, `ADD_URI_SAFE_ATTR`) ? j(M(lt2), e3.ADD_URI_SAFE_ATTR, K2) : lt2, st2 = O(e3, `ADD_DATA_URI_TAGS`) ? j(M(ct2), e3.ADD_DATA_URI_TAGS, K2) : ct2, B2 = O(e3, `FORBID_CONTENTS`) ? j({}, e3.FORBID_CONTENTS, K2) : V2, Oe2 = O(e3, `FORBID_TAGS`) ? j({}, e3.FORBID_TAGS, K2) : M({}), ke2 = O(e3, `FORBID_ATTR`) ? j({}, e3.FORBID_ATTR, K2) : M({}), z2 = O(e3, `USE_PROFILES`) ? e3.USE_PROFILES : false, He2 = e3.ALLOW_ARIA_ATTR !== false, Ue2 = e3.ALLOW_DATA_ATTR !== false, We2 = e3.ALLOW_UNKNOWN_PROTOCOLS || false, Ge2 = e3.ALLOW_SELF_CLOSE_IN_ATTR !== false, P2 = e3.SAFE_FOR_TEMPLATES || false, qe2 = e3.SAFE_FOR_XML !== false, F2 = e3.WHOLE_DOCUMENT || false, L2 = e3.RETURN_DOM || false, nt2 = e3.RETURN_DOM_FRAGMENT || false, rt2 = e3.RETURN_TRUSTED_TYPE || false, tt2 = e3.FORCE_BODY || false, it2 = e3.SANITIZE_DOM !== false, at2 = e3.SANITIZE_NAMED_PROPS || false, ot2 = e3.KEEP_CONTENT !== false, R2 = e3.IN_PLACE || false, pe2 = e3.ALLOWED_URI_REGEXP || Ke, ft2 = e3.NAMESPACE || U2, gt2 = e3.MATHML_TEXT_INTEGRATION_POINTS || gt2, W2 = e3.HTML_INTEGRATION_POINTS || W2, A2 = e3.CUSTOM_ELEMENT_HANDLING || {}, e3.CUSTOM_ELEMENT_HANDLING && bt2(e3.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (A2.tagNameCheck = e3.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e3.CUSTOM_ELEMENT_HANDLING && bt2(e3.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (A2.attributeNameCheck = e3.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e3.CUSTOM_ELEMENT_HANDLING && typeof e3.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == `boolean` && (A2.allowCustomizedBuiltInElements = e3.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), P2 && (Ue2 = false), nt2 && (L2 = true), z2 && (w2 = j({}, Le), D2 = [], z2.html === true && (j(w2, je), j(D2, Re)), z2.svg === true && (j(w2, Me), j(D2, ze), j(D2, Ve)), z2.svgFilters === true && (j(w2, Ne), j(D2, ze), j(D2, Ve)), z2.mathMl === true && (j(w2, Fe), j(D2, Be), j(D2, Ve))), e3.ADD_TAGS && (typeof e3.ADD_TAGS == `function` ? N2.tagCheck = e3.ADD_TAGS : (w2 === E2 && (w2 = M(w2)), j(w2, e3.ADD_TAGS, K2))), e3.ADD_ATTR && (typeof e3.ADD_ATTR == `function` ? N2.attributeCheck = e3.ADD_ATTR : (D2 === he2 && (D2 = M(D2)), j(D2, e3.ADD_ATTR, K2))), e3.ADD_URI_SAFE_ATTR && j(H2, e3.ADD_URI_SAFE_ATTR, K2), e3.FORBID_CONTENTS && (B2 === V2 && (B2 = M(B2)), j(B2, e3.FORBID_CONTENTS, K2)), e3.ADD_FORBID_CONTENTS && (B2 === V2 && (B2 = M(B2)), j(B2, e3.ADD_FORBID_CONTENTS, K2)), ot2 && (w2[`#text`] = true), F2 && j(w2, [
          `html`,
          `head`,
          `body`
        ]), w2.table && (j(w2, [
          `tbody`
        ]), delete Oe2.tbody), e3.TRUSTED_TYPES_POLICY) {
          if (typeof e3.TRUSTED_TYPES_POLICY.createHTML != `function`) throw De(`TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.`);
          if (typeof e3.TRUSTED_TYPES_POLICY.createScriptURL != `function`) throw De(`TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.`);
          h2 = e3.TRUSTED_TYPES_POLICY, g2 = h2.createHTML(``);
        } else h2 === void 0 && (h2 = Qe(f2, i2)), h2 !== null && typeof g2 == `string` && (g2 = h2.createHTML(``));
        T && T(e3), q2 = e3;
      }
    }, Y2 = j({}, [
      ...Me,
      ...Ne,
      ...Pe
    ]), xt2 = j({}, [
      ...Fe,
      ...Ie
    ]), X2 = function(e3) {
      let t3 = ie2(e3);
      (!t3 || !t3.tagName) && (t3 = {
        namespaceURI: ft2,
        tagName: `template`
      });
      let n3 = xe(e3.tagName), r3 = xe(t3.tagName);
      return mt2[e3.namespaceURI] ? e3.namespaceURI === dt2 ? t3.namespaceURI === U2 ? n3 === `svg` : t3.namespaceURI === ut2 ? n3 === `svg` && (r3 === `annotation-xml` || gt2[r3]) : !!Y2[n3] : e3.namespaceURI === ut2 ? t3.namespaceURI === U2 ? n3 === `math` : t3.namespaceURI === dt2 ? n3 === `math` && W2[r3] : !!xt2[n3] : e3.namespaceURI === U2 ? t3.namespaceURI === dt2 && !W2[r3] || t3.namespaceURI === ut2 && !gt2[r3] ? false : !xt2[n3] && (G2[n3] || !Y2[n3]) : !!(_t2 === `application/xhtml+xml` && mt2[e3.namespaceURI]) : false;
    }, Z2 = function(e3) {
      ye(t2.removed, {
        element: e3
      });
      try {
        ie2(e3).removeChild(e3);
      } catch {
        te2(e3);
      }
    }, Q2 = function(e3, n3) {
      try {
        ye(t2.removed, {
          attribute: n3.getAttributeNode(e3),
          from: n3
        });
      } catch {
        ye(t2.removed, {
          attribute: null,
          from: n3
        });
      }
      if (n3.removeAttribute(e3), e3 === `is`) if (L2 || nt2) try {
        Z2(n3);
      } catch {
      }
      else try {
        n3.setAttribute(e3, ``);
      } catch {
      }
    }, St2 = function(e3) {
      let t3 = null, r3 = null;
      if (tt2) e3 = `<remove></remove>` + e3;
      else {
        let t4 = Ce(e3, /^[\r\n\t ]+/);
        r3 = t4 && t4[0];
      }
      _t2 === `application/xhtml+xml` && ft2 === U2 && (e3 = `<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>` + e3 + `</body></html>`);
      let i3 = h2 ? h2.createHTML(e3) : e3;
      if (ft2 === U2) try {
        t3 = new ee2().parseFromString(i3, _t2);
      } catch {
      }
      if (!t3 || !t3.documentElement) {
        t3 = _2.createDocument(ft2, `template`, null);
        try {
          t3.documentElement.innerHTML = pt2 ? g2 : i3;
        } catch {
        }
      }
      let a3 = t3.body || t3.documentElement;
      return e3 && r3 && a3.insertBefore(n2.createTextNode(r3), a3.childNodes[0] || null), ft2 === U2 ? oe2.call(t3, F2 ? `html` : `body`)[0] : F2 ? t3.documentElement : a3;
    }, Ct2 = function(e3) {
      return ae2.call(e3.ownerDocument || e3, e3, l2.SHOW_ELEMENT | l2.SHOW_COMMENT | l2.SHOW_TEXT | l2.SHOW_PROCESSING_INSTRUCTION | l2.SHOW_CDATA_SECTION, null);
    }, wt2 = function(e3) {
      return e3 instanceof d2 && (typeof e3.nodeName != `string` || typeof e3.textContent != `string` || typeof e3.removeChild != `function` || !(e3.attributes instanceof u2) || typeof e3.removeAttribute != `function` || typeof e3.setAttribute != `function` || typeof e3.namespaceURI != `string` || typeof e3.insertBefore != `function` || typeof e3.hasChildNodes != `function`);
    }, Tt2 = function(e3) {
      return typeof s2 == `function` && e3 instanceof s2;
    };
    function $2(e3, n3, r3) {
      ge(e3, (e4) => {
        e4.call(t2, n3, r3, q2);
      });
    }
    let Et2 = function(e3) {
      let n3 = null;
      if ($2(y2.beforeSanitizeElements, e3, null), wt2(e3)) return Z2(e3), true;
      let r3 = K2(e3.nodeName);
      if ($2(y2.uponSanitizeElement, e3, {
        tagName: r3,
        allowedTags: w2
      }), qe2 && e3.hasChildNodes() && !Tt2(e3.firstElementChild) && k(/<[/\w!]/g, e3.innerHTML) && k(/<[/\w!]/g, e3.textContent) || e3.nodeType === Xe.progressingInstruction || qe2 && e3.nodeType === Xe.comment && k(/<[/\w]/g, e3.data)) return Z2(e3), true;
      if (!(N2.tagCheck instanceof Function && N2.tagCheck(r3)) && (!w2[r3] || Oe2[r3])) {
        if (!Oe2[r3] && Ot2(r3) && (A2.tagNameCheck instanceof RegExp && k(A2.tagNameCheck, r3) || A2.tagNameCheck instanceof Function && A2.tagNameCheck(r3))) return false;
        if (ot2 && !B2[r3]) {
          let t3 = ie2(e3) || e3.parentNode, n4 = re2(e3) || e3.childNodes;
          if (n4 && t3) {
            let r4 = n4.length;
            for (let i3 = r4 - 1; i3 >= 0; --i3) {
              let r5 = m2(n4[i3], true);
              r5.__removalCount = (e3.__removalCount || 0) + 1, t3.insertBefore(r5, ne2(e3));
            }
          }
        }
        return Z2(e3), true;
      }
      return e3 instanceof c2 && !X2(e3) || (r3 === `noscript` || r3 === `noembed` || r3 === `noframes`) && k(/<\/no(script|embed|frames)/i, e3.innerHTML) ? (Z2(e3), true) : (P2 && e3.nodeType === Xe.text && (n3 = e3.textContent, ge([
        ce2,
        b2,
        x2
      ], (e4) => {
        n3 = we(n3, e4, ` `);
      }), e3.textContent !== n3 && (ye(t2.removed, {
        element: e3.cloneNode()
      }), e3.textContent = n3)), $2(y2.afterSanitizeElements, e3, null), false);
    }, Dt2 = function(e3, t3, r3) {
      if (it2 && (t3 === `id` || t3 === `name`) && (r3 in n2 || r3 in yt2)) return false;
      if (!(Ue2 && !ke2[t3] && k(S2, t3)) && !(He2 && k(le2, t3)) && !(N2.attributeCheck instanceof Function && N2.attributeCheck(t3, e3))) {
        if (!D2[t3] || ke2[t3]) {
          if (!(Ot2(e3) && (A2.tagNameCheck instanceof RegExp && k(A2.tagNameCheck, e3) || A2.tagNameCheck instanceof Function && A2.tagNameCheck(e3)) && (A2.attributeNameCheck instanceof RegExp && k(A2.attributeNameCheck, t3) || A2.attributeNameCheck instanceof Function && A2.attributeNameCheck(t3, e3)) || t3 === `is` && A2.allowCustomizedBuiltInElements && (A2.tagNameCheck instanceof RegExp && k(A2.tagNameCheck, r3) || A2.tagNameCheck instanceof Function && A2.tagNameCheck(r3)))) return false;
        } else if (!H2[t3] && !k(pe2, we(r3, de2, ``)) && !((t3 === `src` || t3 === `xlink:href` || t3 === `href`) && e3 !== `script` && Te(r3, `data:`) === 0 && st2[e3]) && !(We2 && !k(C2, we(r3, de2, ``))) && r3) return false;
      }
      return true;
    }, Ot2 = function(e3) {
      return e3 !== `annotation-xml` && Ce(e3, fe2);
    }, kt2 = function(e3) {
      $2(y2.beforeSanitizeAttributes, e3, null);
      let { attributes: n3 } = e3;
      if (!n3 || wt2(e3)) return;
      let r3 = {
        attrName: ``,
        attrValue: ``,
        keepAttr: true,
        allowedAttributes: D2,
        forceKeepAttr: void 0
      }, i3 = n3.length;
      for (; i3--; ) {
        let { name: a3, namespaceURI: o3, value: s3 } = n3[i3], c3 = K2(a3), l3 = s3, u3 = a3 === `value` ? l3 : Ee(l3);
        if (r3.attrName = c3, r3.attrValue = u3, r3.keepAttr = true, r3.forceKeepAttr = void 0, $2(y2.uponSanitizeAttribute, e3, r3), u3 = r3.attrValue, at2 && (c3 === `id` || c3 === `name`) && (Q2(a3, e3), u3 = `user-content-` + u3), qe2 && k(/((--!?|])>)|<\/(style|title|textarea)/i, u3)) {
          Q2(a3, e3);
          continue;
        }
        if (c3 === `attributename` && Ce(u3, `href`)) {
          Q2(a3, e3);
          continue;
        }
        if (r3.forceKeepAttr) continue;
        if (!r3.keepAttr) {
          Q2(a3, e3);
          continue;
        }
        if (!Ge2 && k(/\/>/i, u3)) {
          Q2(a3, e3);
          continue;
        }
        P2 && ge([
          ce2,
          b2,
          x2
        ], (e4) => {
          u3 = we(u3, e4, ` `);
        });
        let d3 = K2(e3.nodeName);
        if (!Dt2(d3, c3, u3)) {
          Q2(a3, e3);
          continue;
        }
        if (h2 && typeof f2 == `object` && typeof f2.getAttributeType == `function` && !o3) switch (f2.getAttributeType(d3, c3)) {
          case `TrustedHTML`:
            u3 = h2.createHTML(u3);
            break;
          case `TrustedScriptURL`:
            u3 = h2.createScriptURL(u3);
            break;
        }
        if (u3 !== l3) try {
          o3 ? e3.setAttributeNS(o3, a3, u3) : e3.setAttribute(a3, u3), wt2(e3) ? Z2(e3) : ve(t2.removed);
        } catch {
          Q2(a3, e3);
        }
      }
      $2(y2.afterSanitizeAttributes, e3, null);
    }, At2 = function e3(t3) {
      let n3 = null, r3 = Ct2(t3);
      for ($2(y2.beforeSanitizeShadowDOM, t3, null); n3 = r3.nextNode(); ) $2(y2.uponSanitizeShadowNode, n3, null), Et2(n3), kt2(n3), n3.content instanceof a2 && e3(n3.content);
      $2(y2.afterSanitizeShadowDOM, t3, null);
    };
    return t2.sanitize = function(e3) {
      let n3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i3 = null, o3 = null, c3 = null, l3 = null;
      if (pt2 = !e3, pt2 && (e3 = `<!-->`), typeof e3 != `string` && !Tt2(e3)) if (typeof e3.toString == `function`) {
        if (e3 = e3.toString(), typeof e3 != `string`) throw De(`dirty is not a string, aborting`);
      } else throw De(`toString is not a function`);
      if (!t2.isSupported) return e3;
      if (I2 || J2(n3), t2.removed = [], typeof e3 == `string` && (R2 = false), R2) {
        if (e3.nodeName) {
          let t3 = K2(e3.nodeName);
          if (!w2[t3] || Oe2[t3]) throw De(`root node is forbidden and cannot be sanitized in-place`);
        }
      } else if (e3 instanceof s2) i3 = St2(`<!---->`), o3 = i3.ownerDocument.importNode(e3, true), o3.nodeType === Xe.element && o3.nodeName === `BODY` || o3.nodeName === `HTML` ? i3 = o3 : i3.appendChild(o3);
      else {
        if (!L2 && !P2 && !F2 && e3.indexOf(`<`) === -1) return h2 && rt2 ? h2.createHTML(e3) : e3;
        if (i3 = St2(e3), !i3) return L2 ? null : rt2 ? g2 : ``;
      }
      i3 && tt2 && Z2(i3.firstChild);
      let u3 = Ct2(R2 ? e3 : i3);
      for (; c3 = u3.nextNode(); ) Et2(c3), kt2(c3), c3.content instanceof a2 && At2(c3.content);
      if (R2) return e3;
      if (L2) {
        if (nt2) for (l3 = v2.call(i3.ownerDocument); i3.firstChild; ) l3.appendChild(i3.firstChild);
        else l3 = i3;
        return (D2.shadowroot || D2.shadowrootmode) && (l3 = se2.call(r2, l3, true)), l3;
      }
      let d3 = F2 ? i3.outerHTML : i3.innerHTML;
      return F2 && w2[`!doctype`] && i3.ownerDocument && i3.ownerDocument.doctype && i3.ownerDocument.doctype.name && k(Je, i3.ownerDocument.doctype.name) && (d3 = `<!DOCTYPE ` + i3.ownerDocument.doctype.name + `>
` + d3), P2 && ge([
        ce2,
        b2,
        x2
      ], (e4) => {
        d3 = we(d3, e4, ` `);
      }), h2 && rt2 ? h2.createHTML(d3) : d3;
    }, t2.setConfig = function() {
      J2(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}), I2 = true;
    }, t2.clearConfig = function() {
      q2 = null, I2 = false;
    }, t2.isValidAttribute = function(e3, t3, n3) {
      return q2 || J2({}), Dt2(K2(e3), K2(t3), n3);
    }, t2.addHook = function(e3, t3) {
      typeof t3 == `function` && ye(y2[e3], t3);
    }, t2.removeHook = function(e3, t3) {
      if (t3 !== void 0) {
        let n3 = _e(y2[e3], t3);
        return n3 === -1 ? void 0 : be(y2[e3], n3, 1)[0];
      }
      return ve(y2[e3]);
    }, t2.removeHooks = function(e3) {
      y2[e3] = [];
    }, t2.removeAllHooks = function() {
      y2 = $e();
    }, t2;
  }
  let nt, R, B, st, ct, H, lt, ut, dt, U, ft, mt, ht, gt, G, _t, vt, K, bt, Y, xt, X, Z, Q, Dt, At, jt, Mt, Nt, It, Lt;
  I = et();
  tt = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s;
  L = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
  nt = /\s*%%.*\n/gm;
  rt = (_a = class extends Error {
    constructor(e2) {
      super(e2), this.name = `UnknownDiagramError`;
    }
  }, n(_a, `UnknownDiagramError`), _a);
  it = {};
  at = n(function(e2, t2) {
    e2 = e2.replace(tt, ``).replace(L, ``).replace(nt, `
`);
    for (let [n2, { detector: r2 }] of Object.entries(it)) if (r2(e2, t2)) return n2;
    throw new rt(`No diagram type detected matching given configuration for text: ${e2}`);
  }, `detectType`);
  ot = n((...e2) => {
    for (let { id: t2, detector: n2, loader: r2 } of e2) R(t2, n2, r2);
  }, `registerLazyLoadedDiagrams`);
  R = n((e2, n2, r2) => {
    it[e2] && t.warn(`Detector with key ${e2} already exists. Overwriting.`), it[e2] = {
      detector: n2,
      loader: r2
    }, t.debug(`Detector with key ${e2} added${r2 ? ` with loader` : ``}`);
  }, `addDetector`);
  z = n((e2) => it[e2].loader, `getDiagramLoader`);
  B = n((e2, t2, { depth: n2 = 2, clobber: r2 = false } = {}) => {
    let i2 = {
      depth: n2,
      clobber: r2
    };
    return Array.isArray(t2) && !Array.isArray(e2) ? (t2.forEach((t3) => B(e2, t3, i2)), e2) : Array.isArray(t2) && Array.isArray(e2) ? (t2.forEach((t3) => {
      e2.includes(t3) || e2.push(t3);
    }), e2) : e2 === void 0 || n2 <= 0 ? typeof e2 == `object` && e2 && typeof t2 == `object` ? Object.assign(e2, t2) : t2 : (t2 !== void 0 && typeof e2 == `object` && typeof t2 == `object` && Object.keys(t2).forEach((i3) => {
      typeof t2[i3] == `object` && (e2[i3] === void 0 || typeof e2[i3] == `object`) ? (e2[i3] === void 0 && (e2[i3] = Array.isArray(t2[i3]) ? [] : {}), e2[i3] = B(e2[i3], t2[i3], {
        depth: n2 - 1,
        clobber: r2
      })) : (r2 || typeof e2[i3] != `object` && typeof t2[i3] != `object`) && (e2[i3] = t2[i3]);
    }), e2);
  }, `assignWithDepth`);
  V = B;
  st = `#ffffff`;
  ct = `#f2f2f2`;
  H = n((e2, t2) => t2 ? S(e2, {
    s: -40,
    l: 10
  }) : S(e2, {
    s: -40,
    l: -10
  }), `mkBorder`);
  lt = (_b = class {
    constructor() {
      this.background = `#f4f4f4`, this.primaryColor = `#fff4dd`, this.noteBkgColor = `#fff5ad`, this.noteTextColor = `#333`, this.THEME_COLOR_LIMIT = 12, this.fontFamily = `"trebuchet ms", verdana, arial, sans-serif`, this.fontSize = `16px`;
    }
    updateColors() {
      var _a2, _b2, _c2, _d2, _e3, _f2, _g2, _h, _i, _j, _k, _l, _m, _n2, _o, _p, _q, _r, _s, _t2, _u;
      if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? `#eee` : `#333`), this.secondaryColor = this.secondaryColor || S(this.primaryColor, {
        h: -120
      }), this.tertiaryColor = this.tertiaryColor || S(this.primaryColor, {
        h: 180,
        l: 5
      }), this.primaryBorderColor = this.primaryBorderColor || H(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || H(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || H(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || H(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || `#fff5ad`, this.noteTextColor = this.noteTextColor || `#333`, this.secondaryTextColor = this.secondaryTextColor || C(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || C(this.tertiaryColor), this.lineColor = this.lineColor || C(this.background), this.arrowheadColor = this.arrowheadColor || C(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? x(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || x(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || C(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || `white`, this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || `#eeeeee`, this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || b(this.primaryColor, 23), this.gridColor = this.gridColor || `lightgrey`, this.doneTaskBkgColor = this.doneTaskBkgColor || `lightgrey`, this.doneTaskBorderColor = this.doneTaskBorderColor || `grey`, this.critBorderColor = this.critBorderColor || `#ff8888`, this.critBkgColor = this.critBkgColor || `red`, this.todayLineColor = this.todayLineColor || `red`, this.vertLineColor = this.vertLineColor || `navy`, this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || `#003163`, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.darkMode ? (this.rowOdd = this.rowOdd || x(this.mainBkg, 5) || `#ffffff`, this.rowEven = this.rowEven || x(this.mainBkg, 10)) : (this.rowOdd = this.rowOdd || b(this.mainBkg, 75) || `#ffffff`, this.rowEven = this.rowEven || b(this.mainBkg, 5)), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || S(this.primaryColor, {
        h: 30
      }), this.cScale4 = this.cScale4 || S(this.primaryColor, {
        h: 60
      }), this.cScale5 = this.cScale5 || S(this.primaryColor, {
        h: 90
      }), this.cScale6 = this.cScale6 || S(this.primaryColor, {
        h: 120
      }), this.cScale7 = this.cScale7 || S(this.primaryColor, {
        h: 150
      }), this.cScale8 = this.cScale8 || S(this.primaryColor, {
        h: 210,
        l: 150
      }), this.cScale9 = this.cScale9 || S(this.primaryColor, {
        h: 270
      }), this.cScale10 = this.cScale10 || S(this.primaryColor, {
        h: 300
      }), this.cScale11 = this.cScale11 || S(this.primaryColor, {
        h: 330
      }), this.darkMode) for (let e3 = 0; e3 < this.THEME_COLOR_LIMIT; e3++) this[`cScale` + e3] = x(this[`cScale` + e3], 75);
      else for (let e3 = 0; e3 < this.THEME_COLOR_LIMIT; e3++) this[`cScale` + e3] = x(this[`cScale` + e3], 25);
      for (let e3 = 0; e3 < this.THEME_COLOR_LIMIT; e3++) this[`cScaleInv` + e3] = this[`cScaleInv` + e3] || C(this[`cScale` + e3]);
      for (let e3 = 0; e3 < this.THEME_COLOR_LIMIT; e3++) this.darkMode ? this[`cScalePeer` + e3] = this[`cScalePeer` + e3] || b(this[`cScale` + e3], 10) : this[`cScalePeer` + e3] = this[`cScalePeer` + e3] || x(this[`cScale` + e3], 10);
      this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
      for (let e3 = 0; e3 < this.THEME_COLOR_LIMIT; e3++) this[`cScaleLabel` + e3] = this[`cScaleLabel` + e3] || this.scaleLabelColor;
      let e2 = this.darkMode ? -4 : -1;
      for (let t2 = 0; t2 < 5; t2++) this[`surface` + t2] = this[`surface` + t2] || S(this.mainBkg, {
        h: 180,
        s: -15,
        l: e2 * (5 + t2 * 3)
      }), this[`surfacePeer` + t2] = this[`surfacePeer` + t2] || S(this.mainBkg, {
        h: 180,
        s: -15,
        l: e2 * (8 + t2 * 3)
      });
      this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || S(this.primaryColor, {
        h: 64
      }), this.fillType3 = this.fillType3 || S(this.secondaryColor, {
        h: 64
      }), this.fillType4 = this.fillType4 || S(this.primaryColor, {
        h: -64
      }), this.fillType5 = this.fillType5 || S(this.secondaryColor, {
        h: -64
      }), this.fillType6 = this.fillType6 || S(this.primaryColor, {
        h: 128
      }), this.fillType7 = this.fillType7 || S(this.secondaryColor, {
        h: 128
      }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || S(this.primaryColor, {
        l: -10
      }), this.pie5 = this.pie5 || S(this.secondaryColor, {
        l: -10
      }), this.pie6 = this.pie6 || S(this.tertiaryColor, {
        l: -10
      }), this.pie7 = this.pie7 || S(this.primaryColor, {
        h: 60,
        l: -10
      }), this.pie8 = this.pie8 || S(this.primaryColor, {
        h: -60,
        l: -10
      }), this.pie9 = this.pie9 || S(this.primaryColor, {
        h: 120,
        l: 0
      }), this.pie10 = this.pie10 || S(this.primaryColor, {
        h: 60,
        l: -20
      }), this.pie11 = this.pie11 || S(this.primaryColor, {
        h: -60,
        l: -20
      }), this.pie12 = this.pie12 || S(this.primaryColor, {
        h: 120,
        l: -10
      }), this.pieTitleTextSize = this.pieTitleTextSize || `25px`, this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || `17px`, this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || `17px`, this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || `black`, this.pieStrokeWidth = this.pieStrokeWidth || `2px`, this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || `2px`, this.pieOuterStrokeColor = this.pieOuterStrokeColor || `black`, this.pieOpacity = this.pieOpacity || `0.7`, this.radar = {
        axisColor: ((_a2 = this.radar) == null ? void 0 : _a2.axisColor) || this.lineColor,
        axisStrokeWidth: ((_b2 = this.radar) == null ? void 0 : _b2.axisStrokeWidth) || 2,
        axisLabelFontSize: ((_c2 = this.radar) == null ? void 0 : _c2.axisLabelFontSize) || 12,
        curveOpacity: ((_d2 = this.radar) == null ? void 0 : _d2.curveOpacity) || 0.5,
        curveStrokeWidth: ((_e3 = this.radar) == null ? void 0 : _e3.curveStrokeWidth) || 2,
        graticuleColor: ((_f2 = this.radar) == null ? void 0 : _f2.graticuleColor) || `#DEDEDE`,
        graticuleStrokeWidth: ((_g2 = this.radar) == null ? void 0 : _g2.graticuleStrokeWidth) || 1,
        graticuleOpacity: ((_h = this.radar) == null ? void 0 : _h.graticuleOpacity) || 0.3,
        legendBoxSize: ((_i = this.radar) == null ? void 0 : _i.legendBoxSize) || 12,
        legendFontSize: ((_j = this.radar) == null ? void 0 : _j.legendFontSize) || 12
      }, this.archEdgeColor = this.archEdgeColor || `#777`, this.archEdgeArrowColor = this.archEdgeArrowColor || `#777`, this.archEdgeWidth = this.archEdgeWidth || `3`, this.archGroupBorderColor = this.archGroupBorderColor || `#000`, this.archGroupBorderWidth = this.archGroupBorderWidth || `2px`, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || S(this.primaryColor, {
        r: 5,
        g: 5,
        b: 5
      }), this.quadrant3Fill = this.quadrant3Fill || S(this.primaryColor, {
        r: 10,
        g: 10,
        b: 10
      }), this.quadrant4Fill = this.quadrant4Fill || S(this.primaryColor, {
        r: 15,
        g: 15,
        b: 15
      }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || S(this.primaryTextColor, {
        r: -5,
        g: -5,
        b: -5
      }), this.quadrant3TextFill = this.quadrant3TextFill || S(this.primaryTextColor, {
        r: -10,
        g: -10,
        b: -10
      }), this.quadrant4TextFill = this.quadrant4TextFill || S(this.primaryTextColor, {
        r: -15,
        g: -15,
        b: -15
      }), this.quadrantPointFill = this.quadrantPointFill || y(this.quadrant1Fill) ? b(this.quadrant1Fill) : x(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
        backgroundColor: ((_k = this.xyChart) == null ? void 0 : _k.backgroundColor) || this.background,
        titleColor: ((_l = this.xyChart) == null ? void 0 : _l.titleColor) || this.primaryTextColor,
        xAxisTitleColor: ((_m = this.xyChart) == null ? void 0 : _m.xAxisTitleColor) || this.primaryTextColor,
        xAxisLabelColor: ((_n2 = this.xyChart) == null ? void 0 : _n2.xAxisLabelColor) || this.primaryTextColor,
        xAxisTickColor: ((_o = this.xyChart) == null ? void 0 : _o.xAxisTickColor) || this.primaryTextColor,
        xAxisLineColor: ((_p = this.xyChart) == null ? void 0 : _p.xAxisLineColor) || this.primaryTextColor,
        yAxisTitleColor: ((_q = this.xyChart) == null ? void 0 : _q.yAxisTitleColor) || this.primaryTextColor,
        yAxisLabelColor: ((_r = this.xyChart) == null ? void 0 : _r.yAxisLabelColor) || this.primaryTextColor,
        yAxisTickColor: ((_s = this.xyChart) == null ? void 0 : _s.yAxisTickColor) || this.primaryTextColor,
        yAxisLineColor: ((_t2 = this.xyChart) == null ? void 0 : _t2.yAxisLineColor) || this.primaryTextColor,
        plotColorPalette: ((_u = this.xyChart) == null ? void 0 : _u.plotColorPalette) || `#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0`
      }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || `1`, this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? x(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || S(this.primaryColor, {
        h: -30
      }), this.git4 = this.git4 || S(this.primaryColor, {
        h: -60
      }), this.git5 = this.git5 || S(this.primaryColor, {
        h: -90
      }), this.git6 = this.git6 || S(this.primaryColor, {
        h: 60
      }), this.git7 = this.git7 || S(this.primaryColor, {
        h: 120
      }), this.darkMode ? (this.git0 = b(this.git0, 25), this.git1 = b(this.git1, 25), this.git2 = b(this.git2, 25), this.git3 = b(this.git3, 25), this.git4 = b(this.git4, 25), this.git5 = b(this.git5, 25), this.git6 = b(this.git6, 25), this.git7 = b(this.git7, 25)) : (this.git0 = x(this.git0, 25), this.git1 = x(this.git1, 25), this.git2 = x(this.git2, 25), this.git3 = x(this.git3, 25), this.git4 = x(this.git4, 25), this.git5 = x(this.git5, 25), this.git6 = x(this.git6, 25), this.git7 = x(this.git7, 25)), this.gitInv0 = this.gitInv0 || C(this.git0), this.gitInv1 = this.gitInv1 || C(this.git1), this.gitInv2 = this.gitInv2 || C(this.git2), this.gitInv3 = this.gitInv3 || C(this.git3), this.gitInv4 = this.gitInv4 || C(this.git4), this.gitInv5 = this.gitInv5 || C(this.git5), this.gitInv6 = this.gitInv6 || C(this.git6), this.gitInv7 = this.gitInv7 || C(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? `black` : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || `10px`, this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || `10px`, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || st, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || ct;
    }
    calculate(e2) {
      if (typeof e2 != `object`) {
        this.updateColors();
        return;
      }
      let t2 = Object.keys(e2);
      t2.forEach((t3) => {
        this[t3] = e2[t3];
      }), this.updateColors(), t2.forEach((t3) => {
        this[t3] = e2[t3];
      });
    }
  }, n(_b, `Theme`), _b);
  ut = n((e2) => {
    let t2 = new lt();
    return t2.calculate(e2), t2;
  }, `getThemeVariables`);
  dt = (_c = class {
    constructor() {
      this.background = `#333`, this.primaryColor = `#1f2020`, this.secondaryColor = b(this.primaryColor, 16), this.tertiaryColor = S(this.primaryColor, {
        h: -160
      }), this.primaryBorderColor = C(this.background), this.secondaryBorderColor = H(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = H(this.tertiaryColor, this.darkMode), this.primaryTextColor = C(this.primaryColor), this.secondaryTextColor = C(this.secondaryColor), this.tertiaryTextColor = C(this.tertiaryColor), this.lineColor = C(this.background), this.textColor = C(this.background), this.mainBkg = `#1f2020`, this.secondBkg = `calculated`, this.mainContrastColor = `lightgrey`, this.darkTextColor = b(C(`#323D47`), 10), this.lineColor = `calculated`, this.border1 = `#ccc`, this.border2 = v(255, 255, 255, 0.25), this.arrowheadColor = `calculated`, this.fontFamily = `"trebuchet ms", verdana, arial, sans-serif`, this.fontSize = `16px`, this.labelBackground = `#181818`, this.textColor = `#ccc`, this.THEME_COLOR_LIMIT = 12, this.nodeBkg = `calculated`, this.nodeBorder = `calculated`, this.clusterBkg = `calculated`, this.clusterBorder = `calculated`, this.defaultLinkColor = `calculated`, this.titleColor = `#F9FFFE`, this.edgeLabelBackground = `calculated`, this.actorBorder = `calculated`, this.actorBkg = `calculated`, this.actorTextColor = `calculated`, this.actorLineColor = `calculated`, this.signalColor = `calculated`, this.signalTextColor = `calculated`, this.labelBoxBkgColor = `calculated`, this.labelBoxBorderColor = `calculated`, this.labelTextColor = `calculated`, this.loopTextColor = `calculated`, this.noteBorderColor = `calculated`, this.noteBkgColor = `#fff5ad`, this.noteTextColor = `calculated`, this.activationBorderColor = `calculated`, this.activationBkgColor = `calculated`, this.sequenceNumberColor = `black`, this.sectionBkgColor = x(`#EAE8D9`, 30), this.altSectionBkgColor = `calculated`, this.sectionBkgColor2 = `#EAE8D9`, this.excludeBkgColor = x(this.sectionBkgColor, 10), this.taskBorderColor = v(255, 255, 255, 70), this.taskBkgColor = `calculated`, this.taskTextColor = `calculated`, this.taskTextLightColor = `calculated`, this.taskTextOutsideColor = `calculated`, this.taskTextClickableColor = `#003163`, this.activeTaskBorderColor = v(255, 255, 255, 50), this.activeTaskBkgColor = `#81B1DB`, this.gridColor = `calculated`, this.doneTaskBkgColor = `calculated`, this.doneTaskBorderColor = `grey`, this.critBorderColor = `#E83737`, this.critBkgColor = `#E83737`, this.taskTextDarkColor = `calculated`, this.todayLineColor = `#DB5757`, this.vertLineColor = `#00BFFF`, this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = `calculated`, this.archEdgeArrowColor = `calculated`, this.archEdgeWidth = `3`, this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = `2px`, this.rowOdd = this.rowOdd || b(this.mainBkg, 5) || `#ffffff`, this.rowEven = this.rowEven || x(this.mainBkg, 10), this.labelColor = `calculated`, this.errorBkgColor = `#a44141`, this.errorTextColor = `#ddd`;
    }
    updateColors() {
      var _a2, _b2, _c2, _d2, _e3, _f2, _g2, _h, _i, _j, _k, _l, _m, _n2, _o, _p, _q, _r, _s, _t2, _u;
      this.secondBkg = b(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = b(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.actorBorder, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.altSectionBkgColor = this.background, this.taskBkgColor = b(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = this.darkTextColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || `#555`, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = `#f4f4f4`, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = S(this.primaryColor, {
        h: 64
      }), this.fillType3 = S(this.secondaryColor, {
        h: 64
      }), this.fillType4 = S(this.primaryColor, {
        h: -64
      }), this.fillType5 = S(this.secondaryColor, {
        h: -64
      }), this.fillType6 = S(this.primaryColor, {
        h: 128
      }), this.fillType7 = S(this.secondaryColor, {
        h: 128
      }), this.cScale1 = this.cScale1 || `#0b0000`, this.cScale2 = this.cScale2 || `#4d1037`, this.cScale3 = this.cScale3 || `#3f5258`, this.cScale4 = this.cScale4 || `#4f2f1b`, this.cScale5 = this.cScale5 || `#6e0a0a`, this.cScale6 = this.cScale6 || `#3b0048`, this.cScale7 = this.cScale7 || `#995a01`, this.cScale8 = this.cScale8 || `#154706`, this.cScale9 = this.cScale9 || `#161722`, this.cScale10 = this.cScale10 || `#00296f`, this.cScale11 = this.cScale11 || `#01629c`, this.cScale12 = this.cScale12 || `#010029`, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || S(this.primaryColor, {
        h: 30
      }), this.cScale4 = this.cScale4 || S(this.primaryColor, {
        h: 60
      }), this.cScale5 = this.cScale5 || S(this.primaryColor, {
        h: 90
      }), this.cScale6 = this.cScale6 || S(this.primaryColor, {
        h: 120
      }), this.cScale7 = this.cScale7 || S(this.primaryColor, {
        h: 150
      }), this.cScale8 = this.cScale8 || S(this.primaryColor, {
        h: 210
      }), this.cScale9 = this.cScale9 || S(this.primaryColor, {
        h: 270
      }), this.cScale10 = this.cScale10 || S(this.primaryColor, {
        h: 300
      }), this.cScale11 = this.cScale11 || S(this.primaryColor, {
        h: 330
      });
      for (let e2 = 0; e2 < this.THEME_COLOR_LIMIT; e2++) this[`cScaleInv` + e2] = this[`cScaleInv` + e2] || C(this[`cScale` + e2]);
      for (let e2 = 0; e2 < this.THEME_COLOR_LIMIT; e2++) this[`cScalePeer` + e2] = this[`cScalePeer` + e2] || b(this[`cScale` + e2], 10);
      for (let e2 = 0; e2 < 5; e2++) this[`surface` + e2] = this[`surface` + e2] || S(this.mainBkg, {
        h: 30,
        s: -30,
        l: -(-10 + e2 * 4)
      }), this[`surfacePeer` + e2] = this[`surfacePeer` + e2] || S(this.mainBkg, {
        h: 30,
        s: -30,
        l: -(-7 + e2 * 4)
      });
      this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? `black` : this.labelTextColor);
      for (let e2 = 0; e2 < this.THEME_COLOR_LIMIT; e2++) this[`cScaleLabel` + e2] = this[`cScaleLabel` + e2] || this.scaleLabelColor;
      for (let e2 = 0; e2 < this.THEME_COLOR_LIMIT; e2++) this[`pie` + e2] = this[`cScale` + e2];
      this.pieTitleTextSize = this.pieTitleTextSize || `25px`, this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || `17px`, this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || `17px`, this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || `black`, this.pieStrokeWidth = this.pieStrokeWidth || `2px`, this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || `2px`, this.pieOuterStrokeColor = this.pieOuterStrokeColor || `black`, this.pieOpacity = this.pieOpacity || `0.7`, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || S(this.primaryColor, {
        r: 5,
        g: 5,
        b: 5
      }), this.quadrant3Fill = this.quadrant3Fill || S(this.primaryColor, {
        r: 10,
        g: 10,
        b: 10
      }), this.quadrant4Fill = this.quadrant4Fill || S(this.primaryColor, {
        r: 15,
        g: 15,
        b: 15
      }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || S(this.primaryTextColor, {
        r: -5,
        g: -5,
        b: -5
      }), this.quadrant3TextFill = this.quadrant3TextFill || S(this.primaryTextColor, {
        r: -10,
        g: -10,
        b: -10
      }), this.quadrant4TextFill = this.quadrant4TextFill || S(this.primaryTextColor, {
        r: -15,
        g: -15,
        b: -15
      }), this.quadrantPointFill = this.quadrantPointFill || y(this.quadrant1Fill) ? b(this.quadrant1Fill) : x(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
        backgroundColor: ((_a2 = this.xyChart) == null ? void 0 : _a2.backgroundColor) || this.background,
        titleColor: ((_b2 = this.xyChart) == null ? void 0 : _b2.titleColor) || this.primaryTextColor,
        xAxisTitleColor: ((_c2 = this.xyChart) == null ? void 0 : _c2.xAxisTitleColor) || this.primaryTextColor,
        xAxisLabelColor: ((_d2 = this.xyChart) == null ? void 0 : _d2.xAxisLabelColor) || this.primaryTextColor,
        xAxisTickColor: ((_e3 = this.xyChart) == null ? void 0 : _e3.xAxisTickColor) || this.primaryTextColor,
        xAxisLineColor: ((_f2 = this.xyChart) == null ? void 0 : _f2.xAxisLineColor) || this.primaryTextColor,
        yAxisTitleColor: ((_g2 = this.xyChart) == null ? void 0 : _g2.yAxisTitleColor) || this.primaryTextColor,
        yAxisLabelColor: ((_h = this.xyChart) == null ? void 0 : _h.yAxisLabelColor) || this.primaryTextColor,
        yAxisTickColor: ((_i = this.xyChart) == null ? void 0 : _i.yAxisTickColor) || this.primaryTextColor,
        yAxisLineColor: ((_j = this.xyChart) == null ? void 0 : _j.yAxisLineColor) || this.primaryTextColor,
        plotColorPalette: ((_k = this.xyChart) == null ? void 0 : _k.plotColorPalette) || `#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22`
      }, this.packet = {
        startByteColor: this.primaryTextColor,
        endByteColor: this.primaryTextColor,
        labelColor: this.primaryTextColor,
        titleColor: this.primaryTextColor,
        blockStrokeColor: this.primaryTextColor,
        blockFillColor: this.background
      }, this.radar = {
        axisColor: ((_l = this.radar) == null ? void 0 : _l.axisColor) || this.lineColor,
        axisStrokeWidth: ((_m = this.radar) == null ? void 0 : _m.axisStrokeWidth) || 2,
        axisLabelFontSize: ((_n2 = this.radar) == null ? void 0 : _n2.axisLabelFontSize) || 12,
        curveOpacity: ((_o = this.radar) == null ? void 0 : _o.curveOpacity) || 0.5,
        curveStrokeWidth: ((_p = this.radar) == null ? void 0 : _p.curveStrokeWidth) || 2,
        graticuleColor: ((_q = this.radar) == null ? void 0 : _q.graticuleColor) || `#DEDEDE`,
        graticuleStrokeWidth: ((_r = this.radar) == null ? void 0 : _r.graticuleStrokeWidth) || 1,
        graticuleOpacity: ((_s = this.radar) == null ? void 0 : _s.graticuleOpacity) || 0.3,
        legendBoxSize: ((_t2 = this.radar) == null ? void 0 : _t2.legendBoxSize) || 12,
        legendFontSize: ((_u = this.radar) == null ? void 0 : _u.legendFontSize) || 12
      }, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || `1`, this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? x(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = b(this.secondaryColor, 20), this.git1 = b(this.pie2 || this.secondaryColor, 20), this.git2 = b(this.pie3 || this.tertiaryColor, 20), this.git3 = b(this.pie4 || S(this.primaryColor, {
        h: -30
      }), 20), this.git4 = b(this.pie5 || S(this.primaryColor, {
        h: -60
      }), 20), this.git5 = b(this.pie6 || S(this.primaryColor, {
        h: -90
      }), 10), this.git6 = b(this.pie7 || S(this.primaryColor, {
        h: 60
      }), 10), this.git7 = b(this.pie8 || S(this.primaryColor, {
        h: 120
      }), 20), this.gitInv0 = this.gitInv0 || C(this.git0), this.gitInv1 = this.gitInv1 || C(this.git1), this.gitInv2 = this.gitInv2 || C(this.git2), this.gitInv3 = this.gitInv3 || C(this.git3), this.gitInv4 = this.gitInv4 || C(this.git4), this.gitInv5 = this.gitInv5 || C(this.git5), this.gitInv6 = this.gitInv6 || C(this.git6), this.gitInv7 = this.gitInv7 || C(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || C(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || C(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || `10px`, this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || `10px`, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || b(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || b(this.background, 2), this.nodeBorder = this.nodeBorder || `#999`;
    }
    calculate(e2) {
      if (typeof e2 != `object`) {
        this.updateColors();
        return;
      }
      let t2 = Object.keys(e2);
      t2.forEach((t3) => {
        this[t3] = e2[t3];
      }), this.updateColors(), t2.forEach((t3) => {
        this[t3] = e2[t3];
      });
    }
  }, n(_c, `Theme`), _c);
  U = n((e2) => {
    let t2 = new dt();
    return t2.calculate(e2), t2;
  }, `getThemeVariables`);
  ft = (_d = class {
    constructor() {
      this.background = `#f4f4f4`, this.primaryColor = `#ECECFF`, this.secondaryColor = S(this.primaryColor, {
        h: 120
      }), this.secondaryColor = `#ffffde`, this.tertiaryColor = S(this.primaryColor, {
        h: -160
      }), this.primaryBorderColor = H(this.primaryColor, this.darkMode), this.secondaryBorderColor = H(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = H(this.tertiaryColor, this.darkMode), this.primaryTextColor = C(this.primaryColor), this.secondaryTextColor = C(this.secondaryColor), this.tertiaryTextColor = C(this.tertiaryColor), this.lineColor = C(this.background), this.textColor = C(this.background), this.background = `white`, this.mainBkg = `#ECECFF`, this.secondBkg = `#ffffde`, this.lineColor = `#333333`, this.border1 = `#9370DB`, this.border2 = `#aaaa33`, this.arrowheadColor = `#333333`, this.fontFamily = `"trebuchet ms", verdana, arial, sans-serif`, this.fontSize = `16px`, this.labelBackground = `rgba(232,232,232, 0.8)`, this.textColor = `#333`, this.THEME_COLOR_LIMIT = 12, this.nodeBkg = `calculated`, this.nodeBorder = `calculated`, this.clusterBkg = `calculated`, this.clusterBorder = `calculated`, this.defaultLinkColor = `calculated`, this.titleColor = `calculated`, this.edgeLabelBackground = `calculated`, this.actorBorder = `calculated`, this.actorBkg = `calculated`, this.actorTextColor = `black`, this.actorLineColor = `calculated`, this.signalColor = `calculated`, this.signalTextColor = `calculated`, this.labelBoxBkgColor = `calculated`, this.labelBoxBorderColor = `calculated`, this.labelTextColor = `calculated`, this.loopTextColor = `calculated`, this.noteBorderColor = `calculated`, this.noteBkgColor = `#fff5ad`, this.noteTextColor = `calculated`, this.activationBorderColor = `#666`, this.activationBkgColor = `#f4f4f4`, this.sequenceNumberColor = `white`, this.sectionBkgColor = `calculated`, this.altSectionBkgColor = `calculated`, this.sectionBkgColor2 = `calculated`, this.excludeBkgColor = `#eeeeee`, this.taskBorderColor = `calculated`, this.taskBkgColor = `calculated`, this.taskTextLightColor = `calculated`, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = `calculated`, this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = `calculated`, this.activeTaskBorderColor = `calculated`, this.activeTaskBkgColor = `calculated`, this.gridColor = `calculated`, this.doneTaskBkgColor = `calculated`, this.doneTaskBorderColor = `calculated`, this.critBorderColor = `calculated`, this.critBkgColor = `calculated`, this.todayLineColor = `calculated`, this.vertLineColor = `calculated`, this.sectionBkgColor = v(102, 102, 255, 0.49), this.altSectionBkgColor = `white`, this.sectionBkgColor2 = `#fff400`, this.taskBorderColor = `#534fbc`, this.taskBkgColor = `#8a90dd`, this.taskTextLightColor = `white`, this.taskTextColor = `calculated`, this.taskTextDarkColor = `black`, this.taskTextOutsideColor = `calculated`, this.taskTextClickableColor = `#003163`, this.activeTaskBorderColor = `#534fbc`, this.activeTaskBkgColor = `#bfc7ff`, this.gridColor = `lightgrey`, this.doneTaskBkgColor = `lightgrey`, this.doneTaskBorderColor = `grey`, this.critBorderColor = `#ff8888`, this.critBkgColor = `red`, this.todayLineColor = `red`, this.vertLineColor = `navy`, this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = `calculated`, this.archEdgeArrowColor = `calculated`, this.archEdgeWidth = `3`, this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = `2px`, this.rowOdd = `calculated`, this.rowEven = `calculated`, this.labelColor = `black`, this.errorBkgColor = `#552222`, this.errorTextColor = `#552222`, this.updateColors();
    }
    updateColors() {
      var _a2, _b2, _c2, _d2, _e3, _f2, _g2, _h, _i, _j, _k, _l, _m, _n2, _o, _p, _q, _r, _s, _t2, _u;
      this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || S(this.primaryColor, {
        h: 30
      }), this.cScale4 = this.cScale4 || S(this.primaryColor, {
        h: 60
      }), this.cScale5 = this.cScale5 || S(this.primaryColor, {
        h: 90
      }), this.cScale6 = this.cScale6 || S(this.primaryColor, {
        h: 120
      }), this.cScale7 = this.cScale7 || S(this.primaryColor, {
        h: 150
      }), this.cScale8 = this.cScale8 || S(this.primaryColor, {
        h: 210
      }), this.cScale9 = this.cScale9 || S(this.primaryColor, {
        h: 270
      }), this.cScale10 = this.cScale10 || S(this.primaryColor, {
        h: 300
      }), this.cScale11 = this.cScale11 || S(this.primaryColor, {
        h: 330
      }), this.cScalePeer1 = this.cScalePeer1 || x(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || x(this.tertiaryColor, 40);
      for (let e2 = 0; e2 < this.THEME_COLOR_LIMIT; e2++) this[`cScale` + e2] = x(this[`cScale` + e2], 10), this[`cScalePeer` + e2] = this[`cScalePeer` + e2] || x(this[`cScale` + e2], 25);
      for (let e2 = 0; e2 < this.THEME_COLOR_LIMIT; e2++) this[`cScaleInv` + e2] = this[`cScaleInv` + e2] || S(this[`cScale` + e2], {
        h: 180
      });
      for (let e2 = 0; e2 < 5; e2++) this[`surface` + e2] = this[`surface` + e2] || S(this.mainBkg, {
        h: 30,
        l: -(5 + e2 * 5)
      }), this[`surfacePeer` + e2] = this[`surfacePeer` + e2] || S(this.mainBkg, {
        h: 30,
        l: -(7 + e2 * 5)
      });
      if (this.scaleLabelColor = this.scaleLabelColor !== `calculated` && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== `calculated`) {
        this.cScaleLabel0 = this.cScaleLabel0 || C(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || C(this.labelTextColor);
        for (let e2 = 0; e2 < this.THEME_COLOR_LIMIT; e2++) this[`cScaleLabel` + e2] = this[`cScaleLabel` + e2] || this.labelTextColor;
      }
      this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = b(this.border1, 23), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || b(this.primaryColor, 75) || `#ffffff`, this.rowEven = this.rowEven || b(this.primaryColor, 1), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || `#f0f0f0`, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = S(this.primaryColor, {
        h: 64
      }), this.fillType3 = S(this.secondaryColor, {
        h: 64
      }), this.fillType4 = S(this.primaryColor, {
        h: -64
      }), this.fillType5 = S(this.secondaryColor, {
        h: -64
      }), this.fillType6 = S(this.primaryColor, {
        h: 128
      }), this.fillType7 = S(this.secondaryColor, {
        h: 128
      }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || S(this.tertiaryColor, {
        l: -40
      }), this.pie4 = this.pie4 || S(this.primaryColor, {
        l: -10
      }), this.pie5 = this.pie5 || S(this.secondaryColor, {
        l: -30
      }), this.pie6 = this.pie6 || S(this.tertiaryColor, {
        l: -20
      }), this.pie7 = this.pie7 || S(this.primaryColor, {
        h: 60,
        l: -20
      }), this.pie8 = this.pie8 || S(this.primaryColor, {
        h: -60,
        l: -40
      }), this.pie9 = this.pie9 || S(this.primaryColor, {
        h: 120,
        l: -40
      }), this.pie10 = this.pie10 || S(this.primaryColor, {
        h: 60,
        l: -40
      }), this.pie11 = this.pie11 || S(this.primaryColor, {
        h: -90,
        l: -40
      }), this.pie12 = this.pie12 || S(this.primaryColor, {
        h: 120,
        l: -30
      }), this.pieTitleTextSize = this.pieTitleTextSize || `25px`, this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || `17px`, this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || `17px`, this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || `black`, this.pieStrokeWidth = this.pieStrokeWidth || `2px`, this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || `2px`, this.pieOuterStrokeColor = this.pieOuterStrokeColor || `black`, this.pieOpacity = this.pieOpacity || `0.7`, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || S(this.primaryColor, {
        r: 5,
        g: 5,
        b: 5
      }), this.quadrant3Fill = this.quadrant3Fill || S(this.primaryColor, {
        r: 10,
        g: 10,
        b: 10
      }), this.quadrant4Fill = this.quadrant4Fill || S(this.primaryColor, {
        r: 15,
        g: 15,
        b: 15
      }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || S(this.primaryTextColor, {
        r: -5,
        g: -5,
        b: -5
      }), this.quadrant3TextFill = this.quadrant3TextFill || S(this.primaryTextColor, {
        r: -10,
        g: -10,
        b: -10
      }), this.quadrant4TextFill = this.quadrant4TextFill || S(this.primaryTextColor, {
        r: -15,
        g: -15,
        b: -15
      }), this.quadrantPointFill = this.quadrantPointFill || y(this.quadrant1Fill) ? b(this.quadrant1Fill) : x(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.radar = {
        axisColor: ((_a2 = this.radar) == null ? void 0 : _a2.axisColor) || this.lineColor,
        axisStrokeWidth: ((_b2 = this.radar) == null ? void 0 : _b2.axisStrokeWidth) || 2,
        axisLabelFontSize: ((_c2 = this.radar) == null ? void 0 : _c2.axisLabelFontSize) || 12,
        curveOpacity: ((_d2 = this.radar) == null ? void 0 : _d2.curveOpacity) || 0.5,
        curveStrokeWidth: ((_e3 = this.radar) == null ? void 0 : _e3.curveStrokeWidth) || 2,
        graticuleColor: ((_f2 = this.radar) == null ? void 0 : _f2.graticuleColor) || `#DEDEDE`,
        graticuleStrokeWidth: ((_g2 = this.radar) == null ? void 0 : _g2.graticuleStrokeWidth) || 1,
        graticuleOpacity: ((_h = this.radar) == null ? void 0 : _h.graticuleOpacity) || 0.3,
        legendBoxSize: ((_i = this.radar) == null ? void 0 : _i.legendBoxSize) || 12,
        legendFontSize: ((_j = this.radar) == null ? void 0 : _j.legendFontSize) || 12
      }, this.xyChart = {
        backgroundColor: ((_k = this.xyChart) == null ? void 0 : _k.backgroundColor) || this.background,
        titleColor: ((_l = this.xyChart) == null ? void 0 : _l.titleColor) || this.primaryTextColor,
        xAxisTitleColor: ((_m = this.xyChart) == null ? void 0 : _m.xAxisTitleColor) || this.primaryTextColor,
        xAxisLabelColor: ((_n2 = this.xyChart) == null ? void 0 : _n2.xAxisLabelColor) || this.primaryTextColor,
        xAxisTickColor: ((_o = this.xyChart) == null ? void 0 : _o.xAxisTickColor) || this.primaryTextColor,
        xAxisLineColor: ((_p = this.xyChart) == null ? void 0 : _p.xAxisLineColor) || this.primaryTextColor,
        yAxisTitleColor: ((_q = this.xyChart) == null ? void 0 : _q.yAxisTitleColor) || this.primaryTextColor,
        yAxisLabelColor: ((_r = this.xyChart) == null ? void 0 : _r.yAxisLabelColor) || this.primaryTextColor,
        yAxisTickColor: ((_s = this.xyChart) == null ? void 0 : _s.yAxisTickColor) || this.primaryTextColor,
        yAxisLineColor: ((_t2 = this.xyChart) == null ? void 0 : _t2.yAxisLineColor) || this.primaryTextColor,
        plotColorPalette: ((_u = this.xyChart) == null ? void 0 : _u.plotColorPalette) || `#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3`
      }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || `1`, this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || S(this.primaryColor, {
        h: -30
      }), this.git4 = this.git4 || S(this.primaryColor, {
        h: -60
      }), this.git5 = this.git5 || S(this.primaryColor, {
        h: -90
      }), this.git6 = this.git6 || S(this.primaryColor, {
        h: 60
      }), this.git7 = this.git7 || S(this.primaryColor, {
        h: 120
      }), this.darkMode ? (this.git0 = b(this.git0, 25), this.git1 = b(this.git1, 25), this.git2 = b(this.git2, 25), this.git3 = b(this.git3, 25), this.git4 = b(this.git4, 25), this.git5 = b(this.git5, 25), this.git6 = b(this.git6, 25), this.git7 = b(this.git7, 25)) : (this.git0 = x(this.git0, 25), this.git1 = x(this.git1, 25), this.git2 = x(this.git2, 25), this.git3 = x(this.git3, 25), this.git4 = x(this.git4, 25), this.git5 = x(this.git5, 25), this.git6 = x(this.git6, 25), this.git7 = x(this.git7, 25)), this.gitInv0 = this.gitInv0 || x(C(this.git0), 25), this.gitInv1 = this.gitInv1 || C(this.git1), this.gitInv2 = this.gitInv2 || C(this.git2), this.gitInv3 = this.gitInv3 || C(this.git3), this.gitInv4 = this.gitInv4 || C(this.git4), this.gitInv5 = this.gitInv5 || C(this.git5), this.gitInv6 = this.gitInv6 || C(this.git6), this.gitInv7 = this.gitInv7 || C(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || C(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || C(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || `10px`, this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || `10px`, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || st, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || ct;
    }
    calculate(e2) {
      if (Object.keys(this).forEach((e3) => {
        this[e3] === `calculated` && (this[e3] = void 0);
      }), typeof e2 != `object`) {
        this.updateColors();
        return;
      }
      let t2 = Object.keys(e2);
      t2.forEach((t3) => {
        this[t3] = e2[t3];
      }), this.updateColors(), t2.forEach((t3) => {
        this[t3] = e2[t3];
      });
    }
  }, n(_d, `Theme`), _d);
  pt = n((e2) => {
    let t2 = new ft();
    return t2.calculate(e2), t2;
  }, `getThemeVariables`);
  mt = (_e2 = class {
    constructor() {
      this.background = `#f4f4f4`, this.primaryColor = `#cde498`, this.secondaryColor = `#cdffb2`, this.background = `white`, this.mainBkg = `#cde498`, this.secondBkg = `#cdffb2`, this.lineColor = `green`, this.border1 = `#13540c`, this.border2 = `#6eaa49`, this.arrowheadColor = `green`, this.fontFamily = `"trebuchet ms", verdana, arial, sans-serif`, this.fontSize = `16px`, this.tertiaryColor = b(`#cde498`, 10), this.primaryBorderColor = H(this.primaryColor, this.darkMode), this.secondaryBorderColor = H(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = H(this.tertiaryColor, this.darkMode), this.primaryTextColor = C(this.primaryColor), this.secondaryTextColor = C(this.secondaryColor), this.tertiaryTextColor = C(this.primaryColor), this.lineColor = C(this.background), this.textColor = C(this.background), this.THEME_COLOR_LIMIT = 12, this.nodeBkg = `calculated`, this.nodeBorder = `calculated`, this.clusterBkg = `calculated`, this.clusterBorder = `calculated`, this.defaultLinkColor = `calculated`, this.titleColor = `#333`, this.edgeLabelBackground = `#e8e8e8`, this.actorBorder = `calculated`, this.actorBkg = `calculated`, this.actorTextColor = `black`, this.actorLineColor = `calculated`, this.signalColor = `#333`, this.signalTextColor = `#333`, this.labelBoxBkgColor = `calculated`, this.labelBoxBorderColor = `#326932`, this.labelTextColor = `calculated`, this.loopTextColor = `calculated`, this.noteBorderColor = `calculated`, this.noteBkgColor = `#fff5ad`, this.noteTextColor = `calculated`, this.activationBorderColor = `#666`, this.activationBkgColor = `#f4f4f4`, this.sequenceNumberColor = `white`, this.sectionBkgColor = `#6eaa49`, this.altSectionBkgColor = `white`, this.sectionBkgColor2 = `#6eaa49`, this.excludeBkgColor = `#eeeeee`, this.taskBorderColor = `calculated`, this.taskBkgColor = `#487e3a`, this.taskTextLightColor = `white`, this.taskTextColor = `calculated`, this.taskTextDarkColor = `black`, this.taskTextOutsideColor = `calculated`, this.taskTextClickableColor = `#003163`, this.activeTaskBorderColor = `calculated`, this.activeTaskBkgColor = `calculated`, this.gridColor = `lightgrey`, this.doneTaskBkgColor = `lightgrey`, this.doneTaskBorderColor = `grey`, this.critBorderColor = `#ff8888`, this.critBkgColor = `red`, this.todayLineColor = `red`, this.vertLineColor = `#00BFFF`, this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = `calculated`, this.archEdgeArrowColor = `calculated`, this.archEdgeWidth = `3`, this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = `2px`, this.labelColor = `black`, this.errorBkgColor = `#552222`, this.errorTextColor = `#552222`;
    }
    updateColors() {
      var _a2, _b2, _c2, _d2, _e3, _f2, _g2, _h, _i, _j, _k, _l, _m, _n2, _o, _p, _q, _r, _s, _t2, _u;
      this.actorBorder = x(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || S(this.primaryColor, {
        h: 30
      }), this.cScale4 = this.cScale4 || S(this.primaryColor, {
        h: 60
      }), this.cScale5 = this.cScale5 || S(this.primaryColor, {
        h: 90
      }), this.cScale6 = this.cScale6 || S(this.primaryColor, {
        h: 120
      }), this.cScale7 = this.cScale7 || S(this.primaryColor, {
        h: 150
      }), this.cScale8 = this.cScale8 || S(this.primaryColor, {
        h: 210
      }), this.cScale9 = this.cScale9 || S(this.primaryColor, {
        h: 270
      }), this.cScale10 = this.cScale10 || S(this.primaryColor, {
        h: 300
      }), this.cScale11 = this.cScale11 || S(this.primaryColor, {
        h: 330
      }), this.cScalePeer1 = this.cScalePeer1 || x(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || x(this.tertiaryColor, 40);
      for (let e2 = 0; e2 < this.THEME_COLOR_LIMIT; e2++) this[`cScale` + e2] = x(this[`cScale` + e2], 10), this[`cScalePeer` + e2] = this[`cScalePeer` + e2] || x(this[`cScale` + e2], 25);
      for (let e2 = 0; e2 < this.THEME_COLOR_LIMIT; e2++) this[`cScaleInv` + e2] = this[`cScaleInv` + e2] || S(this[`cScale` + e2], {
        h: 180
      });
      this.scaleLabelColor = this.scaleLabelColor !== `calculated` && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
      for (let e2 = 0; e2 < this.THEME_COLOR_LIMIT; e2++) this[`cScaleLabel` + e2] = this[`cScaleLabel` + e2] || this.scaleLabelColor;
      for (let e2 = 0; e2 < 5; e2++) this[`surface` + e2] = this[`surface` + e2] || S(this.mainBkg, {
        h: 30,
        s: -30,
        l: -(5 + e2 * 5)
      }), this[`surfacePeer` + e2] = this[`surfacePeer` + e2] || S(this.mainBkg, {
        h: 30,
        s: -30,
        l: -(8 + e2 * 5)
      });
      this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || b(this.mainBkg, 75) || `#ffffff`, this.rowEven = this.rowEven || b(this.mainBkg, 20), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || `#f0f0f0`, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = S(this.primaryColor, {
        h: 64
      }), this.fillType3 = S(this.secondaryColor, {
        h: 64
      }), this.fillType4 = S(this.primaryColor, {
        h: -64
      }), this.fillType5 = S(this.secondaryColor, {
        h: -64
      }), this.fillType6 = S(this.primaryColor, {
        h: 128
      }), this.fillType7 = S(this.secondaryColor, {
        h: 128
      }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || S(this.primaryColor, {
        l: -30
      }), this.pie5 = this.pie5 || S(this.secondaryColor, {
        l: -30
      }), this.pie6 = this.pie6 || S(this.tertiaryColor, {
        h: 40,
        l: -40
      }), this.pie7 = this.pie7 || S(this.primaryColor, {
        h: 60,
        l: -10
      }), this.pie8 = this.pie8 || S(this.primaryColor, {
        h: -60,
        l: -10
      }), this.pie9 = this.pie9 || S(this.primaryColor, {
        h: 120,
        l: 0
      }), this.pie10 = this.pie10 || S(this.primaryColor, {
        h: 60,
        l: -50
      }), this.pie11 = this.pie11 || S(this.primaryColor, {
        h: -60,
        l: -50
      }), this.pie12 = this.pie12 || S(this.primaryColor, {
        h: 120,
        l: -50
      }), this.pieTitleTextSize = this.pieTitleTextSize || `25px`, this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || `17px`, this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || `17px`, this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || `black`, this.pieStrokeWidth = this.pieStrokeWidth || `2px`, this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || `2px`, this.pieOuterStrokeColor = this.pieOuterStrokeColor || `black`, this.pieOpacity = this.pieOpacity || `0.7`, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || S(this.primaryColor, {
        r: 5,
        g: 5,
        b: 5
      }), this.quadrant3Fill = this.quadrant3Fill || S(this.primaryColor, {
        r: 10,
        g: 10,
        b: 10
      }), this.quadrant4Fill = this.quadrant4Fill || S(this.primaryColor, {
        r: 15,
        g: 15,
        b: 15
      }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || S(this.primaryTextColor, {
        r: -5,
        g: -5,
        b: -5
      }), this.quadrant3TextFill = this.quadrant3TextFill || S(this.primaryTextColor, {
        r: -10,
        g: -10,
        b: -10
      }), this.quadrant4TextFill = this.quadrant4TextFill || S(this.primaryTextColor, {
        r: -15,
        g: -15,
        b: -15
      }), this.quadrantPointFill = this.quadrantPointFill || y(this.quadrant1Fill) ? b(this.quadrant1Fill) : x(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.packet = {
        startByteColor: this.primaryTextColor,
        endByteColor: this.primaryTextColor,
        labelColor: this.primaryTextColor,
        titleColor: this.primaryTextColor,
        blockStrokeColor: this.primaryTextColor,
        blockFillColor: this.mainBkg
      }, this.radar = {
        axisColor: ((_a2 = this.radar) == null ? void 0 : _a2.axisColor) || this.lineColor,
        axisStrokeWidth: ((_b2 = this.radar) == null ? void 0 : _b2.axisStrokeWidth) || 2,
        axisLabelFontSize: ((_c2 = this.radar) == null ? void 0 : _c2.axisLabelFontSize) || 12,
        curveOpacity: ((_d2 = this.radar) == null ? void 0 : _d2.curveOpacity) || 0.5,
        curveStrokeWidth: ((_e3 = this.radar) == null ? void 0 : _e3.curveStrokeWidth) || 2,
        graticuleColor: ((_f2 = this.radar) == null ? void 0 : _f2.graticuleColor) || `#DEDEDE`,
        graticuleStrokeWidth: ((_g2 = this.radar) == null ? void 0 : _g2.graticuleStrokeWidth) || 1,
        graticuleOpacity: ((_h = this.radar) == null ? void 0 : _h.graticuleOpacity) || 0.3,
        legendBoxSize: ((_i = this.radar) == null ? void 0 : _i.legendBoxSize) || 12,
        legendFontSize: ((_j = this.radar) == null ? void 0 : _j.legendFontSize) || 12
      }, this.xyChart = {
        backgroundColor: ((_k = this.xyChart) == null ? void 0 : _k.backgroundColor) || this.background,
        titleColor: ((_l = this.xyChart) == null ? void 0 : _l.titleColor) || this.primaryTextColor,
        xAxisTitleColor: ((_m = this.xyChart) == null ? void 0 : _m.xAxisTitleColor) || this.primaryTextColor,
        xAxisLabelColor: ((_n2 = this.xyChart) == null ? void 0 : _n2.xAxisLabelColor) || this.primaryTextColor,
        xAxisTickColor: ((_o = this.xyChart) == null ? void 0 : _o.xAxisTickColor) || this.primaryTextColor,
        xAxisLineColor: ((_p = this.xyChart) == null ? void 0 : _p.xAxisLineColor) || this.primaryTextColor,
        yAxisTitleColor: ((_q = this.xyChart) == null ? void 0 : _q.yAxisTitleColor) || this.primaryTextColor,
        yAxisLabelColor: ((_r = this.xyChart) == null ? void 0 : _r.yAxisLabelColor) || this.primaryTextColor,
        yAxisTickColor: ((_s = this.xyChart) == null ? void 0 : _s.yAxisTickColor) || this.primaryTextColor,
        yAxisLineColor: ((_t2 = this.xyChart) == null ? void 0 : _t2.yAxisLineColor) || this.primaryTextColor,
        plotColorPalette: ((_u = this.xyChart) == null ? void 0 : _u.plotColorPalette) || `#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176`
      }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || `1`, this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || S(this.primaryColor, {
        h: -30
      }), this.git4 = this.git4 || S(this.primaryColor, {
        h: -60
      }), this.git5 = this.git5 || S(this.primaryColor, {
        h: -90
      }), this.git6 = this.git6 || S(this.primaryColor, {
        h: 60
      }), this.git7 = this.git7 || S(this.primaryColor, {
        h: 120
      }), this.darkMode ? (this.git0 = b(this.git0, 25), this.git1 = b(this.git1, 25), this.git2 = b(this.git2, 25), this.git3 = b(this.git3, 25), this.git4 = b(this.git4, 25), this.git5 = b(this.git5, 25), this.git6 = b(this.git6, 25), this.git7 = b(this.git7, 25)) : (this.git0 = x(this.git0, 25), this.git1 = x(this.git1, 25), this.git2 = x(this.git2, 25), this.git3 = x(this.git3, 25), this.git4 = x(this.git4, 25), this.git5 = x(this.git5, 25), this.git6 = x(this.git6, 25), this.git7 = x(this.git7, 25)), this.gitInv0 = this.gitInv0 || C(this.git0), this.gitInv1 = this.gitInv1 || C(this.git1), this.gitInv2 = this.gitInv2 || C(this.git2), this.gitInv3 = this.gitInv3 || C(this.git3), this.gitInv4 = this.gitInv4 || C(this.git4), this.gitInv5 = this.gitInv5 || C(this.git5), this.gitInv6 = this.gitInv6 || C(this.git6), this.gitInv7 = this.gitInv7 || C(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || C(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || C(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || `10px`, this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || `10px`, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || st, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || ct;
    }
    calculate(e2) {
      if (typeof e2 != `object`) {
        this.updateColors();
        return;
      }
      let t2 = Object.keys(e2);
      t2.forEach((t3) => {
        this[t3] = e2[t3];
      }), this.updateColors(), t2.forEach((t3) => {
        this[t3] = e2[t3];
      });
    }
  }, n(_e2, `Theme`), _e2);
  ht = n((e2) => {
    let t2 = new mt();
    return t2.calculate(e2), t2;
  }, `getThemeVariables`);
  gt = (_f = class {
    constructor() {
      this.primaryColor = `#eee`, this.contrast = `#707070`, this.secondaryColor = b(this.contrast, 55), this.background = `#ffffff`, this.tertiaryColor = S(this.primaryColor, {
        h: -160
      }), this.primaryBorderColor = H(this.primaryColor, this.darkMode), this.secondaryBorderColor = H(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = H(this.tertiaryColor, this.darkMode), this.primaryTextColor = C(this.primaryColor), this.secondaryTextColor = C(this.secondaryColor), this.tertiaryTextColor = C(this.tertiaryColor), this.lineColor = C(this.background), this.textColor = C(this.background), this.mainBkg = `#eee`, this.secondBkg = `calculated`, this.lineColor = `#666`, this.border1 = `#999`, this.border2 = `calculated`, this.note = `#ffa`, this.text = `#333`, this.critical = `#d42`, this.done = `#bbb`, this.arrowheadColor = `#333333`, this.fontFamily = `"trebuchet ms", verdana, arial, sans-serif`, this.fontSize = `16px`, this.THEME_COLOR_LIMIT = 12, this.nodeBkg = `calculated`, this.nodeBorder = `calculated`, this.clusterBkg = `calculated`, this.clusterBorder = `calculated`, this.defaultLinkColor = `calculated`, this.titleColor = `calculated`, this.edgeLabelBackground = `white`, this.actorBorder = `calculated`, this.actorBkg = `calculated`, this.actorTextColor = `calculated`, this.actorLineColor = this.actorBorder, this.signalColor = `calculated`, this.signalTextColor = `calculated`, this.labelBoxBkgColor = `calculated`, this.labelBoxBorderColor = `calculated`, this.labelTextColor = `calculated`, this.loopTextColor = `calculated`, this.noteBorderColor = `calculated`, this.noteBkgColor = `calculated`, this.noteTextColor = `calculated`, this.activationBorderColor = `#666`, this.activationBkgColor = `#f4f4f4`, this.sequenceNumberColor = `white`, this.sectionBkgColor = `calculated`, this.altSectionBkgColor = `white`, this.sectionBkgColor2 = `calculated`, this.excludeBkgColor = `#eeeeee`, this.taskBorderColor = `calculated`, this.taskBkgColor = `calculated`, this.taskTextLightColor = `white`, this.taskTextColor = `calculated`, this.taskTextDarkColor = `calculated`, this.taskTextOutsideColor = `calculated`, this.taskTextClickableColor = `#003163`, this.activeTaskBorderColor = `calculated`, this.activeTaskBkgColor = `calculated`, this.gridColor = `calculated`, this.doneTaskBkgColor = `calculated`, this.doneTaskBorderColor = `calculated`, this.critBkgColor = `calculated`, this.critBorderColor = `calculated`, this.todayLineColor = `calculated`, this.vertLineColor = `calculated`, this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = `calculated`, this.archEdgeArrowColor = `calculated`, this.archEdgeWidth = `3`, this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = `2px`, this.rowOdd = this.rowOdd || b(this.mainBkg, 75) || `#ffffff`, this.rowEven = this.rowEven || `#f4f4f4`, this.labelColor = `black`, this.errorBkgColor = `#552222`, this.errorTextColor = `#552222`;
    }
    updateColors() {
      var _a2, _b2, _c2, _d2, _e3, _f2, _g2, _h, _i, _j, _k, _l, _m, _n2, _o, _p, _q, _r, _s, _t2, _u;
      this.secondBkg = b(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = b(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.actorBorder, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = `#999`, this.noteBkgColor = `#666`, this.noteTextColor = `#fff`, this.cScale0 = this.cScale0 || `#555`, this.cScale1 = this.cScale1 || `#F4F4F4`, this.cScale2 = this.cScale2 || `#555`, this.cScale3 = this.cScale3 || `#BBB`, this.cScale4 = this.cScale4 || `#777`, this.cScale5 = this.cScale5 || `#999`, this.cScale6 = this.cScale6 || `#DDD`, this.cScale7 = this.cScale7 || `#FFF`, this.cScale8 = this.cScale8 || `#DDD`, this.cScale9 = this.cScale9 || `#BBB`, this.cScale10 = this.cScale10 || `#999`, this.cScale11 = this.cScale11 || `#777`;
      for (let e2 = 0; e2 < this.THEME_COLOR_LIMIT; e2++) this[`cScaleInv` + e2] = this[`cScaleInv` + e2] || C(this[`cScale` + e2]);
      for (let e2 = 0; e2 < this.THEME_COLOR_LIMIT; e2++) this.darkMode ? this[`cScalePeer` + e2] = this[`cScalePeer` + e2] || b(this[`cScale` + e2], 10) : this[`cScalePeer` + e2] = this[`cScalePeer` + e2] || x(this[`cScale` + e2], 10);
      this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? `black` : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
      for (let e2 = 0; e2 < this.THEME_COLOR_LIMIT; e2++) this[`cScaleLabel` + e2] = this[`cScaleLabel` + e2] || this.scaleLabelColor;
      for (let e2 = 0; e2 < 5; e2++) this[`surface` + e2] = this[`surface` + e2] || S(this.mainBkg, {
        l: -(5 + e2 * 5)
      }), this[`surfacePeer` + e2] = this[`surfacePeer` + e2] || S(this.mainBkg, {
        l: -(8 + e2 * 5)
      });
      this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = b(this.contrast, 30), this.sectionBkgColor2 = b(this.contrast, 30), this.taskBorderColor = x(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = b(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = x(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.vertLineColor = this.critBkgColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || `#000`, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || `#f4f4f4`, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || `#000`, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = `#222`, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = S(this.primaryColor, {
        h: 64
      }), this.fillType3 = S(this.secondaryColor, {
        h: 64
      }), this.fillType4 = S(this.primaryColor, {
        h: -64
      }), this.fillType5 = S(this.secondaryColor, {
        h: -64
      }), this.fillType6 = S(this.primaryColor, {
        h: 128
      }), this.fillType7 = S(this.secondaryColor, {
        h: 128
      });
      for (let e2 = 0; e2 < this.THEME_COLOR_LIMIT; e2++) this[`pie` + e2] = this[`cScale` + e2];
      this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || `25px`, this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || `17px`, this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || `17px`, this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || `black`, this.pieStrokeWidth = this.pieStrokeWidth || `2px`, this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || `2px`, this.pieOuterStrokeColor = this.pieOuterStrokeColor || `black`, this.pieOpacity = this.pieOpacity || `0.7`, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || S(this.primaryColor, {
        r: 5,
        g: 5,
        b: 5
      }), this.quadrant3Fill = this.quadrant3Fill || S(this.primaryColor, {
        r: 10,
        g: 10,
        b: 10
      }), this.quadrant4Fill = this.quadrant4Fill || S(this.primaryColor, {
        r: 15,
        g: 15,
        b: 15
      }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || S(this.primaryTextColor, {
        r: -5,
        g: -5,
        b: -5
      }), this.quadrant3TextFill = this.quadrant3TextFill || S(this.primaryTextColor, {
        r: -10,
        g: -10,
        b: -10
      }), this.quadrant4TextFill = this.quadrant4TextFill || S(this.primaryTextColor, {
        r: -15,
        g: -15,
        b: -15
      }), this.quadrantPointFill = this.quadrantPointFill || y(this.quadrant1Fill) ? b(this.quadrant1Fill) : x(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
        backgroundColor: ((_a2 = this.xyChart) == null ? void 0 : _a2.backgroundColor) || this.background,
        titleColor: ((_b2 = this.xyChart) == null ? void 0 : _b2.titleColor) || this.primaryTextColor,
        xAxisTitleColor: ((_c2 = this.xyChart) == null ? void 0 : _c2.xAxisTitleColor) || this.primaryTextColor,
        xAxisLabelColor: ((_d2 = this.xyChart) == null ? void 0 : _d2.xAxisLabelColor) || this.primaryTextColor,
        xAxisTickColor: ((_e3 = this.xyChart) == null ? void 0 : _e3.xAxisTickColor) || this.primaryTextColor,
        xAxisLineColor: ((_f2 = this.xyChart) == null ? void 0 : _f2.xAxisLineColor) || this.primaryTextColor,
        yAxisTitleColor: ((_g2 = this.xyChart) == null ? void 0 : _g2.yAxisTitleColor) || this.primaryTextColor,
        yAxisLabelColor: ((_h = this.xyChart) == null ? void 0 : _h.yAxisLabelColor) || this.primaryTextColor,
        yAxisTickColor: ((_i = this.xyChart) == null ? void 0 : _i.yAxisTickColor) || this.primaryTextColor,
        yAxisLineColor: ((_j = this.xyChart) == null ? void 0 : _j.yAxisLineColor) || this.primaryTextColor,
        plotColorPalette: ((_k = this.xyChart) == null ? void 0 : _k.plotColorPalette) || `#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0`
      }, this.radar = {
        axisColor: ((_l = this.radar) == null ? void 0 : _l.axisColor) || this.lineColor,
        axisStrokeWidth: ((_m = this.radar) == null ? void 0 : _m.axisStrokeWidth) || 2,
        axisLabelFontSize: ((_n2 = this.radar) == null ? void 0 : _n2.axisLabelFontSize) || 12,
        curveOpacity: ((_o = this.radar) == null ? void 0 : _o.curveOpacity) || 0.5,
        curveStrokeWidth: ((_p = this.radar) == null ? void 0 : _p.curveStrokeWidth) || 2,
        graticuleColor: ((_q = this.radar) == null ? void 0 : _q.graticuleColor) || `#DEDEDE`,
        graticuleStrokeWidth: ((_r = this.radar) == null ? void 0 : _r.graticuleStrokeWidth) || 1,
        graticuleOpacity: ((_s = this.radar) == null ? void 0 : _s.graticuleOpacity) || 0.3,
        legendBoxSize: ((_t2 = this.radar) == null ? void 0 : _t2.legendBoxSize) || 12,
        legendFontSize: ((_u = this.radar) == null ? void 0 : _u.legendFontSize) || 12
      }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || `1`, this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = x(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || S(this.primaryColor, {
        h: -30
      }), this.git4 = this.pie5 || S(this.primaryColor, {
        h: -60
      }), this.git5 = this.pie6 || S(this.primaryColor, {
        h: -90
      }), this.git6 = this.pie7 || S(this.primaryColor, {
        h: 60
      }), this.git7 = this.pie8 || S(this.primaryColor, {
        h: 120
      }), this.gitInv0 = this.gitInv0 || C(this.git0), this.gitInv1 = this.gitInv1 || C(this.git1), this.gitInv2 = this.gitInv2 || C(this.git2), this.gitInv3 = this.gitInv3 || C(this.git3), this.gitInv4 = this.gitInv4 || C(this.git4), this.gitInv5 = this.gitInv5 || C(this.git5), this.gitInv6 = this.gitInv6 || C(this.git6), this.gitInv7 = this.gitInv7 || C(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = `white`, this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = `white`, this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || `10px`, this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || `10px`, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || st, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || ct;
    }
    calculate(e2) {
      if (typeof e2 != `object`) {
        this.updateColors();
        return;
      }
      let t2 = Object.keys(e2);
      t2.forEach((t3) => {
        this[t3] = e2[t3];
      }), this.updateColors(), t2.forEach((t3) => {
        this[t3] = e2[t3];
      });
    }
  }, n(_f, `Theme`), _f);
  W = {
    base: {
      getThemeVariables: ut
    },
    dark: {
      getThemeVariables: U
    },
    default: {
      getThemeVariables: pt
    },
    forest: {
      getThemeVariables: ht
    },
    neutral: {
      getThemeVariables: n((e2) => {
        let t2 = new gt();
        return t2.calculate(e2), t2;
      }, `getThemeVariables`)
    }
  };
  G = {
    flowchart: {
      useMaxWidth: true,
      titleTopMargin: 25,
      subGraphTitleMargin: {
        top: 0,
        bottom: 0
      },
      diagramPadding: 8,
      htmlLabels: true,
      nodeSpacing: 50,
      rankSpacing: 50,
      curve: `basis`,
      padding: 15,
      defaultRenderer: `dagre-wrapper`,
      wrappingWidth: 200,
      inheritDir: false
    },
    sequence: {
      useMaxWidth: true,
      hideUnusedParticipants: false,
      activationWidth: 10,
      diagramMarginX: 50,
      diagramMarginY: 10,
      actorMargin: 50,
      width: 150,
      height: 65,
      boxMargin: 10,
      boxTextMargin: 5,
      noteMargin: 10,
      messageMargin: 35,
      messageAlign: `center`,
      mirrorActors: true,
      forceMenus: false,
      bottomMarginAdj: 1,
      rightAngles: false,
      showSequenceNumbers: false,
      actorFontSize: 14,
      actorFontFamily: `"Open Sans", sans-serif`,
      actorFontWeight: 400,
      noteFontSize: 14,
      noteFontFamily: `"trebuchet ms", verdana, arial, sans-serif`,
      noteFontWeight: 400,
      noteAlign: `center`,
      messageFontSize: 16,
      messageFontFamily: `"trebuchet ms", verdana, arial, sans-serif`,
      messageFontWeight: 400,
      wrap: false,
      wrapPadding: 10,
      labelBoxWidth: 50,
      labelBoxHeight: 20
    },
    gantt: {
      useMaxWidth: true,
      titleTopMargin: 25,
      barHeight: 20,
      barGap: 4,
      topPadding: 50,
      rightPadding: 75,
      leftPadding: 75,
      gridLineStartPadding: 35,
      fontSize: 11,
      sectionFontSize: 11,
      numberSectionStyles: 4,
      axisFormat: `%Y-%m-%d`,
      topAxis: false,
      displayMode: ``,
      weekday: `sunday`
    },
    journey: {
      useMaxWidth: true,
      diagramMarginX: 50,
      diagramMarginY: 10,
      leftMargin: 150,
      maxLabelWidth: 360,
      width: 150,
      height: 50,
      boxMargin: 10,
      boxTextMargin: 5,
      noteMargin: 10,
      messageMargin: 35,
      messageAlign: `center`,
      bottomMarginAdj: 1,
      rightAngles: false,
      taskFontSize: 14,
      taskFontFamily: `"Open Sans", sans-serif`,
      taskMargin: 50,
      activationWidth: 10,
      textPlacement: `fo`,
      actorColours: [
        `#8FBC8F`,
        `#7CFC00`,
        `#00FFFF`,
        `#20B2AA`,
        `#B0E0E6`,
        `#FFFFE0`
      ],
      sectionFills: [
        `#191970`,
        `#8B008B`,
        `#4B0082`,
        `#2F4F4F`,
        `#800000`,
        `#8B4513`,
        `#00008B`
      ],
      sectionColours: [
        `#fff`
      ],
      titleColor: ``,
      titleFontFamily: `"trebuchet ms", verdana, arial, sans-serif`,
      titleFontSize: `4ex`
    },
    class: {
      useMaxWidth: true,
      titleTopMargin: 25,
      arrowMarkerAbsolute: false,
      dividerMargin: 10,
      padding: 5,
      textHeight: 10,
      defaultRenderer: `dagre-wrapper`,
      htmlLabels: false,
      hideEmptyMembersBox: false
    },
    state: {
      useMaxWidth: true,
      titleTopMargin: 25,
      dividerMargin: 10,
      sizeUnit: 5,
      padding: 8,
      textHeight: 10,
      titleShift: -15,
      noteMargin: 10,
      forkWidth: 70,
      forkHeight: 7,
      miniPadding: 2,
      fontSizeFactor: 5.02,
      fontSize: 24,
      labelHeight: 16,
      edgeLengthFactor: `20`,
      compositTitleSize: 35,
      radius: 5,
      defaultRenderer: `dagre-wrapper`
    },
    er: {
      useMaxWidth: true,
      titleTopMargin: 25,
      diagramPadding: 20,
      layoutDirection: `TB`,
      minEntityWidth: 100,
      minEntityHeight: 75,
      entityPadding: 15,
      nodeSpacing: 140,
      rankSpacing: 80,
      stroke: `gray`,
      fill: `honeydew`,
      fontSize: 12
    },
    pie: {
      useMaxWidth: true,
      textPosition: 0.75
    },
    quadrantChart: {
      useMaxWidth: true,
      chartWidth: 500,
      chartHeight: 500,
      titleFontSize: 20,
      titlePadding: 10,
      quadrantPadding: 5,
      xAxisLabelPadding: 5,
      yAxisLabelPadding: 5,
      xAxisLabelFontSize: 16,
      yAxisLabelFontSize: 16,
      quadrantLabelFontSize: 16,
      quadrantTextTopPadding: 5,
      pointTextPadding: 5,
      pointLabelFontSize: 12,
      pointRadius: 5,
      xAxisPosition: `top`,
      yAxisPosition: `left`,
      quadrantInternalBorderStrokeWidth: 1,
      quadrantExternalBorderStrokeWidth: 2
    },
    xyChart: {
      useMaxWidth: true,
      width: 700,
      height: 500,
      titleFontSize: 20,
      titlePadding: 10,
      showDataLabel: false,
      showTitle: true,
      xAxis: {
        $ref: `#/$defs/XYChartAxisConfig`,
        showLabel: true,
        labelFontSize: 14,
        labelPadding: 5,
        showTitle: true,
        titleFontSize: 16,
        titlePadding: 5,
        showTick: true,
        tickLength: 5,
        tickWidth: 2,
        showAxisLine: true,
        axisLineWidth: 2
      },
      yAxis: {
        $ref: `#/$defs/XYChartAxisConfig`,
        showLabel: true,
        labelFontSize: 14,
        labelPadding: 5,
        showTitle: true,
        titleFontSize: 16,
        titlePadding: 5,
        showTick: true,
        tickLength: 5,
        tickWidth: 2,
        showAxisLine: true,
        axisLineWidth: 2
      },
      chartOrientation: `vertical`,
      plotReservedSpacePercent: 50
    },
    requirement: {
      useMaxWidth: true,
      rect_fill: `#f9f9f9`,
      text_color: `#333`,
      rect_border_size: `0.5px`,
      rect_border_color: `#bbb`,
      rect_min_width: 200,
      rect_min_height: 200,
      fontSize: 14,
      rect_padding: 10,
      line_height: 20
    },
    mindmap: {
      useMaxWidth: true,
      padding: 10,
      maxNodeWidth: 200,
      layoutAlgorithm: `cose-bilkent`
    },
    kanban: {
      useMaxWidth: true,
      padding: 8,
      sectionWidth: 200,
      ticketBaseUrl: ``
    },
    timeline: {
      useMaxWidth: true,
      diagramMarginX: 50,
      diagramMarginY: 10,
      leftMargin: 150,
      width: 150,
      height: 50,
      boxMargin: 10,
      boxTextMargin: 5,
      noteMargin: 10,
      messageMargin: 35,
      messageAlign: `center`,
      bottomMarginAdj: 1,
      rightAngles: false,
      taskFontSize: 14,
      taskFontFamily: `"Open Sans", sans-serif`,
      taskMargin: 50,
      activationWidth: 10,
      textPlacement: `fo`,
      actorColours: [
        `#8FBC8F`,
        `#7CFC00`,
        `#00FFFF`,
        `#20B2AA`,
        `#B0E0E6`,
        `#FFFFE0`
      ],
      sectionFills: [
        `#191970`,
        `#8B008B`,
        `#4B0082`,
        `#2F4F4F`,
        `#800000`,
        `#8B4513`,
        `#00008B`
      ],
      sectionColours: [
        `#fff`
      ],
      disableMulticolor: false
    },
    gitGraph: {
      useMaxWidth: true,
      titleTopMargin: 25,
      diagramPadding: 8,
      nodeLabel: {
        width: 75,
        height: 100,
        x: -25,
        y: 0
      },
      mainBranchName: `main`,
      mainBranchOrder: 0,
      showCommitLabel: true,
      showBranches: true,
      rotateCommitLabel: true,
      parallelCommits: false,
      arrowMarkerAbsolute: false
    },
    c4: {
      useMaxWidth: true,
      diagramMarginX: 50,
      diagramMarginY: 10,
      c4ShapeMargin: 50,
      c4ShapePadding: 20,
      width: 216,
      height: 60,
      boxMargin: 10,
      c4ShapeInRow: 4,
      nextLinePaddingX: 0,
      c4BoundaryInRow: 2,
      personFontSize: 14,
      personFontFamily: `"Open Sans", sans-serif`,
      personFontWeight: `normal`,
      external_personFontSize: 14,
      external_personFontFamily: `"Open Sans", sans-serif`,
      external_personFontWeight: `normal`,
      systemFontSize: 14,
      systemFontFamily: `"Open Sans", sans-serif`,
      systemFontWeight: `normal`,
      external_systemFontSize: 14,
      external_systemFontFamily: `"Open Sans", sans-serif`,
      external_systemFontWeight: `normal`,
      system_dbFontSize: 14,
      system_dbFontFamily: `"Open Sans", sans-serif`,
      system_dbFontWeight: `normal`,
      external_system_dbFontSize: 14,
      external_system_dbFontFamily: `"Open Sans", sans-serif`,
      external_system_dbFontWeight: `normal`,
      system_queueFontSize: 14,
      system_queueFontFamily: `"Open Sans", sans-serif`,
      system_queueFontWeight: `normal`,
      external_system_queueFontSize: 14,
      external_system_queueFontFamily: `"Open Sans", sans-serif`,
      external_system_queueFontWeight: `normal`,
      boundaryFontSize: 14,
      boundaryFontFamily: `"Open Sans", sans-serif`,
      boundaryFontWeight: `normal`,
      messageFontSize: 12,
      messageFontFamily: `"Open Sans", sans-serif`,
      messageFontWeight: `normal`,
      containerFontSize: 14,
      containerFontFamily: `"Open Sans", sans-serif`,
      containerFontWeight: `normal`,
      external_containerFontSize: 14,
      external_containerFontFamily: `"Open Sans", sans-serif`,
      external_containerFontWeight: `normal`,
      container_dbFontSize: 14,
      container_dbFontFamily: `"Open Sans", sans-serif`,
      container_dbFontWeight: `normal`,
      external_container_dbFontSize: 14,
      external_container_dbFontFamily: `"Open Sans", sans-serif`,
      external_container_dbFontWeight: `normal`,
      container_queueFontSize: 14,
      container_queueFontFamily: `"Open Sans", sans-serif`,
      container_queueFontWeight: `normal`,
      external_container_queueFontSize: 14,
      external_container_queueFontFamily: `"Open Sans", sans-serif`,
      external_container_queueFontWeight: `normal`,
      componentFontSize: 14,
      componentFontFamily: `"Open Sans", sans-serif`,
      componentFontWeight: `normal`,
      external_componentFontSize: 14,
      external_componentFontFamily: `"Open Sans", sans-serif`,
      external_componentFontWeight: `normal`,
      component_dbFontSize: 14,
      component_dbFontFamily: `"Open Sans", sans-serif`,
      component_dbFontWeight: `normal`,
      external_component_dbFontSize: 14,
      external_component_dbFontFamily: `"Open Sans", sans-serif`,
      external_component_dbFontWeight: `normal`,
      component_queueFontSize: 14,
      component_queueFontFamily: `"Open Sans", sans-serif`,
      component_queueFontWeight: `normal`,
      external_component_queueFontSize: 14,
      external_component_queueFontFamily: `"Open Sans", sans-serif`,
      external_component_queueFontWeight: `normal`,
      wrap: true,
      wrapPadding: 10,
      person_bg_color: `#08427B`,
      person_border_color: `#073B6F`,
      external_person_bg_color: `#686868`,
      external_person_border_color: `#8A8A8A`,
      system_bg_color: `#1168BD`,
      system_border_color: `#3C7FC0`,
      system_db_bg_color: `#1168BD`,
      system_db_border_color: `#3C7FC0`,
      system_queue_bg_color: `#1168BD`,
      system_queue_border_color: `#3C7FC0`,
      external_system_bg_color: `#999999`,
      external_system_border_color: `#8A8A8A`,
      external_system_db_bg_color: `#999999`,
      external_system_db_border_color: `#8A8A8A`,
      external_system_queue_bg_color: `#999999`,
      external_system_queue_border_color: `#8A8A8A`,
      container_bg_color: `#438DD5`,
      container_border_color: `#3C7FC0`,
      container_db_bg_color: `#438DD5`,
      container_db_border_color: `#3C7FC0`,
      container_queue_bg_color: `#438DD5`,
      container_queue_border_color: `#3C7FC0`,
      external_container_bg_color: `#B3B3B3`,
      external_container_border_color: `#A6A6A6`,
      external_container_db_bg_color: `#B3B3B3`,
      external_container_db_border_color: `#A6A6A6`,
      external_container_queue_bg_color: `#B3B3B3`,
      external_container_queue_border_color: `#A6A6A6`,
      component_bg_color: `#85BBF0`,
      component_border_color: `#78A8D8`,
      component_db_bg_color: `#85BBF0`,
      component_db_border_color: `#78A8D8`,
      component_queue_bg_color: `#85BBF0`,
      component_queue_border_color: `#78A8D8`,
      external_component_bg_color: `#CCCCCC`,
      external_component_border_color: `#BFBFBF`,
      external_component_db_bg_color: `#CCCCCC`,
      external_component_db_border_color: `#BFBFBF`,
      external_component_queue_bg_color: `#CCCCCC`,
      external_component_queue_border_color: `#BFBFBF`
    },
    sankey: {
      useMaxWidth: true,
      width: 600,
      height: 400,
      linkColor: `gradient`,
      nodeAlignment: `justify`,
      showValues: true,
      prefix: ``,
      suffix: ``
    },
    block: {
      useMaxWidth: true,
      padding: 8
    },
    packet: {
      useMaxWidth: true,
      rowHeight: 32,
      bitWidth: 32,
      bitsPerRow: 32,
      showBits: true,
      paddingX: 5,
      paddingY: 5
    },
    architecture: {
      useMaxWidth: true,
      padding: 40,
      iconSize: 80,
      fontSize: 16
    },
    radar: {
      useMaxWidth: true,
      width: 600,
      height: 600,
      marginTop: 50,
      marginRight: 50,
      marginBottom: 50,
      marginLeft: 50,
      axisScaleFactor: 1,
      axisLabelFactor: 1.05,
      curveTension: 0.17
    },
    theme: `default`,
    look: `classic`,
    handDrawnSeed: 0,
    layout: `dagre`,
    maxTextSize: 5e4,
    maxEdges: 500,
    darkMode: false,
    fontFamily: `"trebuchet ms", verdana, arial, sans-serif;`,
    logLevel: 5,
    securityLevel: `strict`,
    startOnLoad: true,
    arrowMarkerAbsolute: false,
    secure: [
      `secure`,
      `securityLevel`,
      `startOnLoad`,
      `maxTextSize`,
      `suppressErrorRendering`,
      `maxEdges`
    ],
    legacyMathML: false,
    forceLegacyMathML: false,
    deterministicIds: false,
    fontSize: 16,
    markdownAutoWrap: true,
    suppressErrorRendering: false
  };
  _t = {
    ...G,
    deterministicIDSeed: void 0,
    elk: {
      mergeEdges: false,
      nodePlacementStrategy: `BRANDES_KOEPF`,
      forceNodeModelOrder: false,
      considerModelOrder: `NODES_AND_EDGES`
    },
    themeCSS: void 0,
    themeVariables: W.default.getThemeVariables(),
    sequence: {
      ...G.sequence,
      messageFont: n(function() {
        return {
          fontFamily: this.messageFontFamily,
          fontSize: this.messageFontSize,
          fontWeight: this.messageFontWeight
        };
      }, `messageFont`),
      noteFont: n(function() {
        return {
          fontFamily: this.noteFontFamily,
          fontSize: this.noteFontSize,
          fontWeight: this.noteFontWeight
        };
      }, `noteFont`),
      actorFont: n(function() {
        return {
          fontFamily: this.actorFontFamily,
          fontSize: this.actorFontSize,
          fontWeight: this.actorFontWeight
        };
      }, `actorFont`)
    },
    class: {
      hideEmptyMembersBox: false
    },
    gantt: {
      ...G.gantt,
      tickInterval: void 0,
      useWidth: void 0
    },
    c4: {
      ...G.c4,
      useWidth: void 0,
      personFont: n(function() {
        return {
          fontFamily: this.personFontFamily,
          fontSize: this.personFontSize,
          fontWeight: this.personFontWeight
        };
      }, `personFont`),
      flowchart: {
        ...G.flowchart,
        inheritDir: false
      },
      external_personFont: n(function() {
        return {
          fontFamily: this.external_personFontFamily,
          fontSize: this.external_personFontSize,
          fontWeight: this.external_personFontWeight
        };
      }, `external_personFont`),
      systemFont: n(function() {
        return {
          fontFamily: this.systemFontFamily,
          fontSize: this.systemFontSize,
          fontWeight: this.systemFontWeight
        };
      }, `systemFont`),
      external_systemFont: n(function() {
        return {
          fontFamily: this.external_systemFontFamily,
          fontSize: this.external_systemFontSize,
          fontWeight: this.external_systemFontWeight
        };
      }, `external_systemFont`),
      system_dbFont: n(function() {
        return {
          fontFamily: this.system_dbFontFamily,
          fontSize: this.system_dbFontSize,
          fontWeight: this.system_dbFontWeight
        };
      }, `system_dbFont`),
      external_system_dbFont: n(function() {
        return {
          fontFamily: this.external_system_dbFontFamily,
          fontSize: this.external_system_dbFontSize,
          fontWeight: this.external_system_dbFontWeight
        };
      }, `external_system_dbFont`),
      system_queueFont: n(function() {
        return {
          fontFamily: this.system_queueFontFamily,
          fontSize: this.system_queueFontSize,
          fontWeight: this.system_queueFontWeight
        };
      }, `system_queueFont`),
      external_system_queueFont: n(function() {
        return {
          fontFamily: this.external_system_queueFontFamily,
          fontSize: this.external_system_queueFontSize,
          fontWeight: this.external_system_queueFontWeight
        };
      }, `external_system_queueFont`),
      containerFont: n(function() {
        return {
          fontFamily: this.containerFontFamily,
          fontSize: this.containerFontSize,
          fontWeight: this.containerFontWeight
        };
      }, `containerFont`),
      external_containerFont: n(function() {
        return {
          fontFamily: this.external_containerFontFamily,
          fontSize: this.external_containerFontSize,
          fontWeight: this.external_containerFontWeight
        };
      }, `external_containerFont`),
      container_dbFont: n(function() {
        return {
          fontFamily: this.container_dbFontFamily,
          fontSize: this.container_dbFontSize,
          fontWeight: this.container_dbFontWeight
        };
      }, `container_dbFont`),
      external_container_dbFont: n(function() {
        return {
          fontFamily: this.external_container_dbFontFamily,
          fontSize: this.external_container_dbFontSize,
          fontWeight: this.external_container_dbFontWeight
        };
      }, `external_container_dbFont`),
      container_queueFont: n(function() {
        return {
          fontFamily: this.container_queueFontFamily,
          fontSize: this.container_queueFontSize,
          fontWeight: this.container_queueFontWeight
        };
      }, `container_queueFont`),
      external_container_queueFont: n(function() {
        return {
          fontFamily: this.external_container_queueFontFamily,
          fontSize: this.external_container_queueFontSize,
          fontWeight: this.external_container_queueFontWeight
        };
      }, `external_container_queueFont`),
      componentFont: n(function() {
        return {
          fontFamily: this.componentFontFamily,
          fontSize: this.componentFontSize,
          fontWeight: this.componentFontWeight
        };
      }, `componentFont`),
      external_componentFont: n(function() {
        return {
          fontFamily: this.external_componentFontFamily,
          fontSize: this.external_componentFontSize,
          fontWeight: this.external_componentFontWeight
        };
      }, `external_componentFont`),
      component_dbFont: n(function() {
        return {
          fontFamily: this.component_dbFontFamily,
          fontSize: this.component_dbFontSize,
          fontWeight: this.component_dbFontWeight
        };
      }, `component_dbFont`),
      external_component_dbFont: n(function() {
        return {
          fontFamily: this.external_component_dbFontFamily,
          fontSize: this.external_component_dbFontSize,
          fontWeight: this.external_component_dbFontWeight
        };
      }, `external_component_dbFont`),
      component_queueFont: n(function() {
        return {
          fontFamily: this.component_queueFontFamily,
          fontSize: this.component_queueFontSize,
          fontWeight: this.component_queueFontWeight
        };
      }, `component_queueFont`),
      external_component_queueFont: n(function() {
        return {
          fontFamily: this.external_component_queueFontFamily,
          fontSize: this.external_component_queueFontSize,
          fontWeight: this.external_component_queueFontWeight
        };
      }, `external_component_queueFont`),
      boundaryFont: n(function() {
        return {
          fontFamily: this.boundaryFontFamily,
          fontSize: this.boundaryFontSize,
          fontWeight: this.boundaryFontWeight
        };
      }, `boundaryFont`),
      messageFont: n(function() {
        return {
          fontFamily: this.messageFontFamily,
          fontSize: this.messageFontSize,
          fontWeight: this.messageFontWeight
        };
      }, `messageFont`)
    },
    pie: {
      ...G.pie,
      useWidth: 984
    },
    xyChart: {
      ...G.xyChart,
      useWidth: void 0
    },
    requirement: {
      ...G.requirement,
      useWidth: void 0
    },
    packet: {
      ...G.packet
    },
    radar: {
      ...G.radar
    },
    treemap: {
      useMaxWidth: true,
      padding: 10,
      diagramPadding: 8,
      showValues: true,
      nodeWidth: 100,
      nodeHeight: 40,
      borderWidth: 1,
      valueFontSize: 12,
      labelFontSize: 14,
      valueFormat: `,`
    }
  };
  vt = n((e2, t2 = ``) => Object.keys(e2).reduce((n2, r2) => Array.isArray(e2[r2]) ? n2 : typeof e2[r2] == `object` && e2[r2] !== null ? [
    ...n2,
    t2 + r2,
    ...vt(e2[r2], ``)
  ] : [
    ...n2,
    t2 + r2
  ], []), `keyify`);
  K = new Set(vt(_t, ``));
  q = _t;
  yt = n((e2) => {
    if (t.debug(`sanitizeDirective called with`, e2), !(typeof e2 != `object` || !e2)) {
      if (Array.isArray(e2)) {
        e2.forEach((e3) => yt(e3));
        return;
      }
      for (let n2 of Object.keys(e2)) {
        if (t.debug(`Checking key`, n2), n2.startsWith(`__`) || n2.includes(`proto`) || n2.includes(`constr`) || !K.has(n2) || e2[n2] == null) {
          t.debug(`sanitize deleting key: `, n2), delete e2[n2];
          continue;
        }
        if (typeof e2[n2] == `object`) {
          t.debug(`sanitizing object`, n2), yt(e2[n2]);
          continue;
        }
        for (let r2 of [
          `themeCSS`,
          `fontFamily`,
          `altFontFamily`
        ]) n2.includes(r2) && (t.debug(`sanitizing css option`, n2), e2[n2] = bt(e2[n2]));
      }
      if (e2.themeVariables) for (let t2 of Object.keys(e2.themeVariables)) {
        let n2 = e2.themeVariables[t2];
        (n2 == null ? void 0 : n2.match) && !n2.match(/^[\d "#%(),.;A-Za-z]+$/) && (e2.themeVariables[t2] = ``);
      }
      t.debug(`After sanitization`, e2);
    }
  }, `sanitizeDirective`);
  bt = n((e2) => {
    let t2 = 0, n2 = 0;
    for (let r2 of e2) {
      if (t2 < n2) return `{ /* ERROR: Unbalanced CSS */ }`;
      r2 === `{` ? t2++ : r2 === `}` && n2++;
    }
    return t2 === n2 ? e2 : `{ /* ERROR: Unbalanced CSS */ }`;
  }, `sanitizeCss`);
  J = Object.freeze(q);
  Y = V({}, J);
  X = [];
  Z = V({}, J);
  Q = n((e2, t2) => {
    let n2 = V({}, e2), r2 = {};
    for (let e3 of t2) Dt(e3), r2 = V(r2, e3);
    if (n2 = V(n2, r2), r2.theme && r2.theme in W) {
      let e3 = V(V({}, xt).themeVariables || {}, r2.themeVariables);
      n2.theme && n2.theme in W && (n2.themeVariables = W[n2.theme].getThemeVariables(e3));
    }
    return Z = n2, Nt(Z), Z;
  }, `updateCurrentConfig`);
  St = n((e2) => (Y = V({}, J), Y = V(Y, e2), e2.theme && W[e2.theme] && (Y.themeVariables = W[e2.theme].getThemeVariables(e2.themeVariables)), Q(Y, X), Y), `setSiteConfig`);
  Ct = n((e2) => {
    xt = V({}, e2);
  }, `saveConfigFromInitialize`);
  wt = n((e2) => (Y = V(Y, e2), Q(Y, X), Y), `updateSiteConfig`);
  Tt = n(() => V({}, Y), `getSiteConfig`);
  $ = n((e2) => (Nt(e2), V(Z, e2), Et()), `setConfig`);
  Et = n(() => V({}, Z), `getConfig`);
  Dt = n((e2) => {
    e2 && ([
      `secure`,
      ...Y.secure ?? []
    ].forEach((n2) => {
      Object.hasOwn(e2, n2) && (t.debug(`Denied attempt to modify a secure key ${n2}`, e2[n2]), delete e2[n2]);
    }), Object.keys(e2).forEach((t2) => {
      t2.startsWith(`__`) && delete e2[t2];
    }), Object.keys(e2).forEach((t2) => {
      typeof e2[t2] == `string` && (e2[t2].includes(`<`) || e2[t2].includes(`>`) || e2[t2].includes(`url(data:`)) && delete e2[t2], typeof e2[t2] == `object` && Dt(e2[t2]);
    }));
  }, `sanitize`);
  Ot = n((e2) => {
    var _a2;
    yt(e2), e2.fontFamily && !((_a2 = e2.themeVariables) == null ? void 0 : _a2.fontFamily) && (e2.themeVariables = {
      ...e2.themeVariables,
      fontFamily: e2.fontFamily
    }), X.push(e2), Q(Y, X);
  }, `addDirective`);
  kt = n((e2 = Y) => {
    X = [], Q(e2, X);
  }, `reset`);
  At = {
    LAZY_LOAD_DEPRECATED: `The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead.`
  };
  jt = {};
  Mt = n((e2) => {
    jt[e2] || (t.warn(At[e2]), jt[e2] = true);
  }, `issueWarning`);
  Nt = n((e2) => {
    e2 && (e2.lazyLoadedDiagrams || e2.loadExternalDiagramsAtStartup) && Mt(`LAZY_LOAD_DEPRECATED`);
  }, `checkConfig`);
  Pt = n(() => {
    let e2 = {};
    xt && (e2 = V(e2, xt));
    for (let t2 of X) e2 = V(e2, t2);
    return e2;
  }, `getUserDefinedConfig`);
  Ft = /<br\s*\/?>/gi;
  It = n((e2) => e2 ? Kt(e2).replace(/\\n/g, `#br#`).split(`#br#`) : [
    ``
  ], `getRows`);
  Lt = /* @__PURE__ */ (() => {
    let e2 = false;
    return () => {
      e2 || (e2 = (Rt(), true));
    };
  })();
  function Rt() {
    let e2 = `data-temp-href-target`;
    I.addHook(`beforeSanitizeAttributes`, (t2) => {
      t2.tagName === `A` && t2.hasAttribute(`target`) && t2.setAttribute(e2, t2.getAttribute(`target`) ?? ``);
    }), I.addHook(`afterSanitizeAttributes`, (t2) => {
      t2.tagName === `A` && t2.hasAttribute(e2) && (t2.setAttribute(`target`, t2.getAttribute(e2) ?? ``), t2.removeAttribute(e2), t2.getAttribute(`target`) === `_blank` && t2.setAttribute(`rel`, `noopener`));
    });
  }
  n(Rt, `setupDompurifyHooks`);
  let zt, Bt, Ht, Ut, Wt, Gt, Kt, Yt, Xt, Qt, $t, en, tn, nn, on, ln, un, pn, mn, hn;
  zt = n((e2) => (Lt(), I.sanitize(e2)), `removeScript`);
  Bt = n((e2, t2) => {
    var _a2;
    if (((_a2 = t2.flowchart) == null ? void 0 : _a2.htmlLabels) !== false) {
      let n2 = t2.securityLevel;
      n2 === `antiscript` || n2 === `strict` ? e2 = zt(e2) : n2 !== `loose` && (e2 = Kt(e2), e2 = e2.replace(/</g, `&lt;`).replace(/>/g, `&gt;`), e2 = e2.replace(/=/g, `&equals;`), e2 = Gt(e2));
    }
    return e2;
  }, `sanitizeMore`);
  Vt = n((e2, t2) => e2 && (e2 = t2.dompurifyConfig ? I.sanitize(Bt(e2, t2), t2.dompurifyConfig).toString() : I.sanitize(Bt(e2, t2), {
    FORBID_TAGS: [
      `style`
    ]
  }).toString(), e2), `sanitizeText`);
  Ht = n((e2, t2) => typeof e2 == `string` ? Vt(e2, t2) : e2.flat().map((e3) => Vt(e3, t2)), `sanitizeTextOrArray`);
  Ut = n((e2) => Ft.test(e2), `hasBreaks`);
  Wt = n((e2) => e2.split(Ft), `splitBreaks`);
  Gt = n((e2) => e2.replace(/#br#/g, `<br/>`), `placeholderToBreak`);
  Kt = n((e2) => e2.replace(Ft, `#br#`), `breakToPlaceholder`);
  qt = n((e2) => {
    let t2 = ``;
    return e2 && (t2 = window.location.protocol + `//` + window.location.host + window.location.pathname + window.location.search, t2 = CSS.escape(t2)), t2;
  }, `getUrl`);
  Jt = n((e2) => !(e2 === false || [
    `false`,
    `null`,
    `0`
  ].includes(String(e2).trim().toLowerCase())), `evaluate`);
  Yt = n(function(...e2) {
    let t2 = e2.filter((e3) => !isNaN(e3));
    return Math.max(...t2);
  }, `getMax`);
  Xt = n(function(...e2) {
    let t2 = e2.filter((e3) => !isNaN(e3));
    return Math.min(...t2);
  }, `getMin`);
  Zt = n(function(e2) {
    let t2 = e2.split(/(,)/), n2 = [];
    for (let e3 = 0; e3 < t2.length; e3++) {
      let r2 = t2[e3];
      if (r2 === `,` && e3 > 0 && e3 + 1 < t2.length) {
        let i2 = t2[e3 - 1], a2 = t2[e3 + 1];
        $t(i2, a2) && (r2 = i2 + `,` + a2, e3++, n2.pop());
      }
      n2.push(en(r2));
    }
    return n2.join(``);
  }, `parseGenericTypes`);
  Qt = n((e2, t2) => Math.max(0, e2.split(t2).length - 1), `countOccurrence`);
  $t = n((e2, t2) => {
    let n2 = Qt(e2, `~`), r2 = Qt(t2, `~`);
    return n2 === 1 && r2 === 1;
  }, `shouldCombineSets`);
  en = n((e2) => {
    let t2 = Qt(e2, `~`), n2 = false;
    if (t2 <= 1) return e2;
    t2 % 2 != 0 && e2.startsWith(`~`) && (e2 = e2.substring(1), n2 = true);
    let r2 = [
      ...e2
    ], i2 = r2.indexOf(`~`), a2 = r2.lastIndexOf(`~`);
    for (; i2 !== -1 && a2 !== -1 && i2 !== a2; ) r2[i2] = `<`, r2[a2] = `>`, i2 = r2.indexOf(`~`), a2 = r2.lastIndexOf(`~`);
    return n2 && r2.unshift(`~`), r2.join(``);
  }, `processSet`);
  tn = n(() => window.MathMLElement !== void 0, `isMathMLSupported`);
  nn = /\$\$(.*)\$\$/g;
  rn = n((e2) => {
    var _a2;
    return (((_a2 = e2.match(nn)) == null ? void 0 : _a2.length) ?? 0) > 0;
  }, `hasKatex`);
  an = n(async (e2, t2) => {
    var _a2;
    let n2 = document.createElement(`div`);
    n2.innerHTML = await sn(e2, t2), n2.id = `katex-temp`, n2.style.visibility = `hidden`, n2.style.position = `absolute`, n2.style.top = `0`, (_a2 = document.querySelector(`body`)) == null ? void 0 : _a2.insertAdjacentElement(`beforeend`, n2);
    let r2 = {
      width: n2.clientWidth,
      height: n2.clientHeight
    };
    return n2.remove(), r2;
  }, `calculateMathMLDimensions`);
  on = n(async (e2, t2) => {
    if (!rn(e2)) return e2;
    if (!(tn() || t2.legacyMathML || t2.forceLegacyMathML)) return e2.replace(nn, `MathML is unsupported in this environment.`);
    {
      let { default: n2 } = await s(async () => {
        let { default: e3 } = await import("./katex-DFpTGpUx.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        });
        return {
          default: e3
        };
      }, []), r2 = t2.forceLegacyMathML || !tn() && t2.legacyMathML ? `htmlAndMathml` : `mathml`;
      return e2.split(Ft).map((e3) => rn(e3) ? `<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${e3}</div>` : `<div>${e3}</div>`).join(``).replace(nn, (e3, t3) => n2.renderToString(t3, {
        throwOnError: true,
        displayMode: true,
        output: r2
      }).replace(/\n/g, ` `).replace(/<annotation.*<\/annotation>/g, ``));
    }
    return e2.replace(nn, `Katex is not supported in @mermaid-js/tiny. Please use the full mermaid library.`);
  }, `renderKatexUnsanitized`);
  sn = n(async (e2, t2) => Vt(await on(e2, t2), t2), `renderKatexSanitized`);
  cn = {
    getRows: It,
    sanitizeText: Vt,
    sanitizeTextOrArray: Ht,
    hasBreaks: Ut,
    splitBreaks: Wt,
    lineBreakRegex: Ft,
    removeScript: zt,
    getUrl: qt,
    evaluate: Jt,
    getMax: Yt,
    getMin: Xt
  };
  ln = n(function(e2, t2) {
    for (let n2 of t2) e2.attr(n2[0], n2[1]);
  }, `d3Attrs`);
  un = n(function(e2, t2, n2) {
    let r2 = /* @__PURE__ */ new Map();
    return n2 ? (r2.set(`width`, `100%`), r2.set(`style`, `max-width: ${t2}px;`)) : (r2.set(`height`, e2), r2.set(`width`, t2)), r2;
  }, `calculateSvgSizeAttrs`);
  dn = n(function(e2, t2, n2, r2) {
    ln(e2, un(t2, n2, r2));
  }, `configureSvgSize`);
  fn = n(function(e2, n2, r2, i2) {
    let a2 = n2.node().getBBox(), o2 = a2.width, s2 = a2.height;
    t.info(`SVG bounds: ${o2}x${s2}`, a2);
    let c2 = 0, l2 = 0;
    t.info(`Graph bounds: ${c2}x${l2}`, e2), c2 = o2 + r2 * 2, l2 = s2 + r2 * 2, t.info(`Calculated bounds: ${c2}x${l2}`), dn(n2, l2, c2, i2);
    let u2 = `${a2.x - r2} ${a2.y - r2} ${a2.width + 2 * r2} ${a2.height + 2 * r2}`;
    n2.attr(`viewBox`, u2);
  }, `setupGraphViewbox`);
  pn = {};
  mn = n((e2, n2, r2) => {
    let i2 = ``;
    return e2 in pn && pn[e2] ? i2 = pn[e2](r2) : t.warn(`No theme found for ${e2}`), ` & {
    font-family: ${r2.fontFamily};
    font-size: ${r2.fontSize};
    fill: ${r2.textColor}
  }
  @keyframes edge-animation-frame {
    from {
      stroke-dashoffset: 0;
    }
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
  & .edge-animation-slow {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 50s linear infinite;
    stroke-linecap: round;
  }
  & .edge-animation-fast {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 20s linear infinite;
    stroke-linecap: round;
  }
  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${r2.errorBkgColor};
  }
  & .error-text {
    fill: ${r2.errorTextColor};
    stroke: ${r2.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 1px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }
  & .edge-thickness-invisible {
    stroke-width: 0;
    fill: none;
  }
  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${r2.lineColor};
    stroke: ${r2.lineColor};
  }
  & .marker.cross {
    stroke: ${r2.lineColor};
  }

  & svg {
    font-family: ${r2.fontFamily};
    font-size: ${r2.fontSize};
  }
   & p {
    margin: 0
   }

  ${i2}

  ${n2}
`;
  }, `getStyles`);
  hn = n((e2, t2) => {
    t2 !== void 0 && (pn[e2] = t2);
  }, `addStylesForDiagram`);
  gn = mn;
  _n = {};
  r(_n, {
    clear: () => Sn,
    getAccDescription: () => En,
    getAccTitle: () => wn,
    getDiagramTitle: () => On,
    setAccDescription: () => Tn,
    setAccTitle: () => Cn,
    setDiagramTitle: () => Dn
  });
  let vn, yn, bn, xn, kn, An, In, Ln, Bn;
  vn = ``;
  yn = ``;
  bn = ``;
  xn = n((e2) => Vt(e2, Et()), `sanitizeText`);
  Sn = n(() => {
    vn = ``, bn = ``, yn = ``;
  }, `clear`);
  Cn = n((e2) => {
    vn = xn(e2).replace(/^\s+/g, ``);
  }, `setAccTitle`);
  wn = n(() => vn, `getAccTitle`);
  Tn = n((e2) => {
    bn = xn(e2).replace(/\n\s+/g, `
`);
  }, `setAccDescription`);
  En = n(() => bn, `getAccDescription`);
  Dn = n((e2) => {
    yn = xn(e2);
  }, `setDiagramTitle`);
  On = n(() => yn, `getDiagramTitle`);
  kn = t;
  An = e;
  jn = Et;
  Mn = $;
  Nn = J;
  Pn = n((e2) => Vt(e2, jn()), `sanitizeText`);
  Fn = fn;
  In = n(() => _n, `getCommonDb`);
  Ln = {};
  Rn = n((e2, t2, n2) => {
    var _a2;
    Ln[e2] && kn.warn(`Diagram with id ${e2} already registered. Overwriting.`), Ln[e2] = t2, n2 && R(e2, n2), hn(e2, t2.styles), (_a2 = t2.injectUtils) == null ? void 0 : _a2.call(t2, kn, An, jn, Pn, Fn, In(), () => {
    });
  }, `registerDiagram`);
  zn = n((e2) => {
    if (e2 in Ln) return Ln[e2];
    throw new Bn(e2);
  }, `getDiagram`);
  Bn = (_g = class extends Error {
    constructor(e2) {
      super(`Diagram ${e2} not found.`);
    }
  }, n(_g, `DiagramNotFoundError`), _g);
})();
export {
  y as $,
  Zt as A,
  Cn as B,
  On as C,
  Pt as D,
  qt as E,
  yt as F,
  fn as G,
  Mn as H,
  Vt as I,
  W as J,
  Fn as K,
  Pn as L,
  ot as M,
  sn as N,
  rn as O,
  kt as P,
  b as Q,
  Ct as R,
  z as S,
  pt as T,
  Dn as U,
  $ as V,
  St as W,
  I as X,
  wt as Y,
  x as Z,
  En as _,
  __tla,
  Sn as a,
  jn as b,
  dn as c,
  q as d,
  v as et,
  at as f,
  tt as g,
  Jt as h,
  an as i,
  Rn as j,
  Ft as k,
  J as l,
  L as m,
  Ot as n,
  l as nt,
  _n as o,
  it as p,
  gn as q,
  V as r,
  s as rt,
  cn as s,
  rt as t,
  _ as tt,
  Nn as u,
  wn as v,
  Tt as w,
  zn as x,
  Et as y,
  Tn as z
};
