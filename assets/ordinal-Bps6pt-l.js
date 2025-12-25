import { t as e } from "./init-BBmXJqXp.js";
var t = class extends Map {
  constructor(e2, t2 = a) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: t2 } }), e2 != null) for (let [t3, n2] of e2) this.set(t3, n2);
  }
  get(e2) {
    return super.get(n(this, e2));
  }
  has(e2) {
    return super.has(n(this, e2));
  }
  set(e2, t2) {
    return super.set(r(this, e2), t2);
  }
  delete(e2) {
    return super.delete(i(this, e2));
  }
};
function n({ _intern: e2, _key: t2 }, n2) {
  let r2 = t2(n2);
  return e2.has(r2) ? e2.get(r2) : n2;
}
function r({ _intern: e2, _key: t2 }, n2) {
  let r2 = t2(n2);
  return e2.has(r2) ? e2.get(r2) : (e2.set(r2, n2), n2);
}
function i({ _intern: e2, _key: t2 }, n2) {
  let r2 = t2(n2);
  return e2.has(r2) && (n2 = e2.get(r2), e2.delete(r2)), n2;
}
function a(e2) {
  return typeof e2 == `object` && e2 ? e2.valueOf() : e2;
}
const o = Symbol(`implicit`);
function s() {
  var n2 = new t(), r2 = [], i2 = [], a2 = o;
  function c(e2) {
    let t2 = n2.get(e2);
    if (t2 === void 0) {
      if (a2 !== o) return a2;
      n2.set(e2, t2 = r2.push(e2) - 1);
    }
    return i2[t2 % i2.length];
  }
  return c.domain = function(e2) {
    if (!arguments.length) return r2.slice();
    r2 = [], n2 = new t();
    for (let t2 of e2) n2.has(t2) || n2.set(t2, r2.push(t2) - 1);
    return c;
  }, c.range = function(e2) {
    return arguments.length ? (i2 = Array.from(e2), c) : i2.slice();
  }, c.unknown = function(e2) {
    return arguments.length ? (a2 = e2, c) : a2;
  }, c.copy = function() {
    return s(r2, i2).unknown(a2);
  }, e.apply(c, arguments), c;
}
export {
  s as t
};
