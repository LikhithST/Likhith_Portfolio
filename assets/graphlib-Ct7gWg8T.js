import { A as e, D as t, E as n, M as r, N as i, O as a, S as o, T as s, b as c, j as l, k as u, w as d } from "./chunk-S3R3BYOJ-D8yhV3IZ.js";
import { D as f, T as ee, _ as te, a as p, f as m, o as h, s as ne, u as re, w as g } from "./identity-IHMFXfGJ.js";
import { n as _, t as v } from "./isEmpty-Suvitui-.js";
import { C as y, E as b, S as x, T as ie, a as ae, b as oe, c as S, i as se, n as C, s as ce, t as le, w as ue, x as w } from "./reduce-S4_EnTW-.js";
function de(e2, t2) {
  return e2 && s(t2, w(t2), e2);
}
var fe = de;
function pe(e2, t2) {
  return e2 && s(t2, d(t2), e2);
}
var me = pe;
function he(e2, t2) {
  return s(e2, x(e2), t2);
}
var ge = he, T = Object.getOwnPropertySymbols ? function(e2) {
  for (var t2 = []; e2; ) ie(t2, x(e2)), e2 = u(e2);
  return t2;
} : y;
function _e(e2, t2) {
  return s(e2, T(e2), t2);
}
var ve = _e;
function ye(e2) {
  return ue(e2, d, T);
}
var E = ye, D = Object.prototype.hasOwnProperty;
function O(e2) {
  var t2 = e2.length, n2 = new e2.constructor(t2);
  return t2 && typeof e2[0] == `string` && D.call(e2, `index`) && (n2.index = e2.index, n2.input = e2.input), n2;
}
var k = O;
function A(e2, t2) {
  var n2 = t2 ? r(e2.buffer) : e2.buffer;
  return new e2.constructor(n2, e2.byteOffset, e2.byteLength);
}
var j = A, M = /\w*$/;
function N(e2) {
  var t2 = new e2.constructor(e2.source, M.exec(e2));
  return t2.lastIndex = e2.lastIndex, t2;
}
var P = N, F = f ? f.prototype : void 0, I = F ? F.valueOf : void 0;
function be(e2) {
  return I ? Object(I.call(e2)) : {};
}
var xe = be, Se = `[object Boolean]`, Ce = `[object Date]`, we = `[object Map]`, Te = `[object Number]`, Ee = `[object RegExp]`, De = `[object Set]`, Oe = `[object String]`, ke = `[object Symbol]`, Ae = `[object ArrayBuffer]`, je = `[object DataView]`, Me = `[object Float32Array]`, Ne = `[object Float64Array]`, Pe = `[object Int8Array]`, Fe = `[object Int16Array]`, Ie = `[object Int32Array]`, Le = `[object Uint8Array]`, Re = `[object Uint8ClampedArray]`, ze = `[object Uint16Array]`, Be = `[object Uint32Array]`;
function Ve(e2, t2, n2) {
  var i2 = e2.constructor;
  switch (t2) {
    case Ae:
      return r(e2);
    case Se:
    case Ce:
      return new i2(+e2);
    case je:
      return j(e2, n2);
    case Me:
    case Ne:
    case Pe:
    case Fe:
    case Ie:
    case Le:
    case Re:
    case ze:
    case Be:
      return l(e2, n2);
    case we:
      return new i2();
    case Te:
    case Oe:
      return new i2(e2);
    case Ee:
      return P(e2);
    case De:
      return new i2();
    case ke:
      return xe(e2);
  }
}
var L = Ve, He = `[object Map]`;
function Ue(e2) {
  return m(e2) && _(e2) == He;
}
var We = Ue, R = p && p.isMap, Ge = R ? h(R) : We, Ke = `[object Set]`;
function qe(e2) {
  return m(e2) && _(e2) == Ke;
}
var Je = qe, z = p && p.isSet, Ye = z ? h(z) : Je, Xe = 1, Ze = 2, Qe = 4, B = `[object Arguments]`, $e = `[object Array]`, et = `[object Boolean]`, tt = `[object Date]`, nt = `[object Error]`, V = `[object Function]`, rt = `[object GeneratorFunction]`, it = `[object Map]`, at = `[object Number]`, H = `[object Object]`, ot = `[object RegExp]`, st = `[object Set]`, ct = `[object String]`, lt = `[object Symbol]`, ut = `[object WeakMap]`, dt = `[object ArrayBuffer]`, ft = `[object DataView]`, pt = `[object Float32Array]`, mt = `[object Float64Array]`, ht = `[object Int8Array]`, gt = `[object Int16Array]`, _t = `[object Int32Array]`, vt = `[object Uint8Array]`, yt = `[object Uint8ClampedArray]`, bt = `[object Uint16Array]`, xt = `[object Uint32Array]`, U = {};
U[B] = U[$e] = U[dt] = U[ft] = U[et] = U[tt] = U[pt] = U[mt] = U[ht] = U[gt] = U[_t] = U[it] = U[at] = U[H] = U[ot] = U[st] = U[ct] = U[lt] = U[vt] = U[yt] = U[bt] = U[xt] = true, U[nt] = U[V] = U[ut] = false;
function W(t2, r2, o2, s2, c2, l2) {
  var u2, f2 = r2 & Xe, p2 = r2 & Ze, m2 = r2 & Qe;
  if (o2 && (u2 = c2 ? o2(t2, s2, c2, l2) : o2(t2)), u2 !== void 0) return u2;
  if (!ee(t2)) return t2;
  var h2 = re(t2);
  if (h2) {
    if (u2 = k(t2), !f2) return e(t2, u2);
  } else {
    var g2 = _(t2), v2 = g2 == V || g2 == rt;
    if (ne(t2)) return i(t2, f2);
    if (g2 == H || g2 == B || v2 && !c2) {
      if (u2 = p2 || v2 ? {} : a(t2), !f2) return p2 ? ve(t2, me(u2, t2)) : ge(t2, fe(u2, t2));
    } else {
      if (!U[g2]) return c2 ? t2 : {};
      u2 = L(t2, g2, f2);
    }
  }
  l2 || (l2 = new te());
  var y2 = l2.get(t2);
  if (y2) return y2;
  l2.set(t2, u2), Ye(t2) ? t2.forEach(function(e2) {
    u2.add(W(e2, r2, o2, e2, t2, l2));
  }) : Ge(t2) && t2.forEach(function(e2, n2) {
    u2.set(n2, W(e2, r2, o2, n2, t2, l2));
  });
  var b2 = h2 ? void 0 : (m2 ? p2 ? E : oe : p2 ? d : w)(t2);
  return se(b2 || t2, function(e2, i2) {
    b2 && (i2 = e2, e2 = t2[i2]), n(u2, i2, W(e2, r2, o2, i2, t2, l2));
  }), u2;
}
var St = W;
function Ct(e2, t2) {
  return b(t2, function(t3) {
    return e2[t3];
  });
}
var wt = Ct;
function Tt(e2) {
  return e2 == null ? [] : wt(e2, w(e2));
}
var G = Tt;
function Et(e2) {
  return e2 === void 0;
}
var K = Et, Dt = c(function(e2) {
  return ae(ce(e2, 1, t, true));
}), Ot = `\0`, q = `\0`, J = ``, Y = class {
  constructor(e2 = {}) {
    this._isDirected = Object.prototype.hasOwnProperty.call(e2, `directed`) ? e2.directed : true, this._isMultigraph = Object.prototype.hasOwnProperty.call(e2, `multigraph`) ? e2.multigraph : false, this._isCompound = Object.prototype.hasOwnProperty.call(e2, `compound`) ? e2.compound : false, this._label = void 0, this._defaultNodeLabelFn = o(void 0), this._defaultEdgeLabelFn = o(void 0), this._nodes = {}, this._isCompound && (this._parent = {}, this._children = {}, this._children[q] = {}), this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {};
  }
  isDirected() {
    return this._isDirected;
  }
  isMultigraph() {
    return this._isMultigraph;
  }
  isCompound() {
    return this._isCompound;
  }
  setGraph(e2) {
    return this._label = e2, this;
  }
  graph() {
    return this._label;
  }
  setDefaultNodeLabel(e2) {
    return g(e2) || (e2 = o(e2)), this._defaultNodeLabelFn = e2, this;
  }
  nodeCount() {
    return this._nodeCount;
  }
  nodes() {
    return w(this._nodes);
  }
  sources() {
    var e2 = this;
    return S(this.nodes(), function(t2) {
      return v(e2._in[t2]);
    });
  }
  sinks() {
    var e2 = this;
    return S(this.nodes(), function(t2) {
      return v(e2._out[t2]);
    });
  }
  setNodes(e2, t2) {
    var n2 = arguments, r2 = this;
    return C(e2, function(e3) {
      n2.length > 1 ? r2.setNode(e3, t2) : r2.setNode(e3);
    }), this;
  }
  setNode(e2, t2) {
    return Object.prototype.hasOwnProperty.call(this._nodes, e2) ? (arguments.length > 1 && (this._nodes[e2] = t2), this) : (this._nodes[e2] = arguments.length > 1 ? t2 : this._defaultNodeLabelFn(e2), this._isCompound && (this._parent[e2] = q, this._children[e2] = {}, this._children[q][e2] = true), this._in[e2] = {}, this._preds[e2] = {}, this._out[e2] = {}, this._sucs[e2] = {}, ++this._nodeCount, this);
  }
  node(e2) {
    return this._nodes[e2];
  }
  hasNode(e2) {
    return Object.prototype.hasOwnProperty.call(this._nodes, e2);
  }
  removeNode(e2) {
    if (Object.prototype.hasOwnProperty.call(this._nodes, e2)) {
      var t2 = (e3) => this.removeEdge(this._edgeObjs[e3]);
      delete this._nodes[e2], this._isCompound && (this._removeFromParentsChildList(e2), delete this._parent[e2], C(this.children(e2), (e3) => {
        this.setParent(e3);
      }), delete this._children[e2]), C(w(this._in[e2]), t2), delete this._in[e2], delete this._preds[e2], C(w(this._out[e2]), t2), delete this._out[e2], delete this._sucs[e2], --this._nodeCount;
    }
    return this;
  }
  setParent(e2, t2) {
    if (!this._isCompound) throw Error(`Cannot set parent in a non-compound graph`);
    if (K(t2)) t2 = q;
    else {
      t2 += ``;
      for (var n2 = t2; !K(n2); n2 = this.parent(n2)) if (n2 === e2) throw Error(`Setting ` + t2 + ` as parent of ` + e2 + ` would create a cycle`);
      this.setNode(t2);
    }
    return this.setNode(e2), this._removeFromParentsChildList(e2), this._parent[e2] = t2, this._children[t2][e2] = true, this;
  }
  _removeFromParentsChildList(e2) {
    delete this._children[this._parent[e2]][e2];
  }
  parent(e2) {
    if (this._isCompound) {
      var t2 = this._parent[e2];
      if (t2 !== q) return t2;
    }
  }
  children(e2) {
    if (K(e2) && (e2 = q), this._isCompound) {
      var t2 = this._children[e2];
      if (t2) return w(t2);
    } else if (e2 === q) return this.nodes();
    else if (this.hasNode(e2)) return [];
  }
  predecessors(e2) {
    var t2 = this._preds[e2];
    if (t2) return w(t2);
  }
  successors(e2) {
    var t2 = this._sucs[e2];
    if (t2) return w(t2);
  }
  neighbors(e2) {
    var t2 = this.predecessors(e2);
    if (t2) return Dt(t2, this.successors(e2));
  }
  isLeaf(e2) {
    return (this.isDirected() ? this.successors(e2) : this.neighbors(e2)).length === 0;
  }
  filterNodes(e2) {
    var t2 = new this.constructor({ directed: this._isDirected, multigraph: this._isMultigraph, compound: this._isCompound });
    t2.setGraph(this.graph());
    var n2 = this;
    C(this._nodes, function(n3, r3) {
      e2(r3) && t2.setNode(r3, n3);
    }), C(this._edgeObjs, function(e3) {
      t2.hasNode(e3.v) && t2.hasNode(e3.w) && t2.setEdge(e3, n2.edge(e3));
    });
    var r2 = {};
    function i2(e3) {
      var a2 = n2.parent(e3);
      return a2 === void 0 || t2.hasNode(a2) ? (r2[e3] = a2, a2) : a2 in r2 ? r2[a2] : i2(a2);
    }
    return this._isCompound && C(t2.nodes(), function(e3) {
      t2.setParent(e3, i2(e3));
    }), t2;
  }
  setDefaultEdgeLabel(e2) {
    return g(e2) || (e2 = o(e2)), this._defaultEdgeLabelFn = e2, this;
  }
  edgeCount() {
    return this._edgeCount;
  }
  edges() {
    return G(this._edgeObjs);
  }
  setPath(e2, t2) {
    var n2 = this, r2 = arguments;
    return le(e2, function(e3, i2) {
      return r2.length > 1 ? n2.setEdge(e3, i2, t2) : n2.setEdge(e3, i2), i2;
    }), this;
  }
  setEdge() {
    var e2, t2, n2, r2, i2 = false, a2 = arguments[0];
    typeof a2 == `object` && a2 && `v` in a2 ? (e2 = a2.v, t2 = a2.w, n2 = a2.name, arguments.length === 2 && (r2 = arguments[1], i2 = true)) : (e2 = a2, t2 = arguments[1], n2 = arguments[3], arguments.length > 2 && (r2 = arguments[2], i2 = true)), e2 = `` + e2, t2 = `` + t2, K(n2) || (n2 = `` + n2);
    var o2 = Q(this._isDirected, e2, t2, n2);
    if (Object.prototype.hasOwnProperty.call(this._edgeLabels, o2)) return i2 && (this._edgeLabels[o2] = r2), this;
    if (!K(n2) && !this._isMultigraph) throw Error(`Cannot set a named edge when isMultigraph = false`);
    this.setNode(e2), this.setNode(t2), this._edgeLabels[o2] = i2 ? r2 : this._defaultEdgeLabelFn(e2, t2, n2);
    var s2 = kt(this._isDirected, e2, t2, n2);
    return e2 = s2.v, t2 = s2.w, Object.freeze(s2), this._edgeObjs[o2] = s2, X(this._preds[t2], e2), X(this._sucs[e2], t2), this._in[t2][o2] = s2, this._out[e2][o2] = s2, this._edgeCount++, this;
  }
  edge(e2, t2, n2) {
    var r2 = arguments.length === 1 ? $(this._isDirected, arguments[0]) : Q(this._isDirected, e2, t2, n2);
    return this._edgeLabels[r2];
  }
  hasEdge(e2, t2, n2) {
    var r2 = arguments.length === 1 ? $(this._isDirected, arguments[0]) : Q(this._isDirected, e2, t2, n2);
    return Object.prototype.hasOwnProperty.call(this._edgeLabels, r2);
  }
  removeEdge(e2, t2, n2) {
    var r2 = arguments.length === 1 ? $(this._isDirected, arguments[0]) : Q(this._isDirected, e2, t2, n2), i2 = this._edgeObjs[r2];
    return i2 && (e2 = i2.v, t2 = i2.w, delete this._edgeLabels[r2], delete this._edgeObjs[r2], Z(this._preds[t2], e2), Z(this._sucs[e2], t2), delete this._in[t2][r2], delete this._out[e2][r2], this._edgeCount--), this;
  }
  inEdges(e2, t2) {
    var n2 = this._in[e2];
    if (n2) {
      var r2 = G(n2);
      return t2 ? S(r2, function(e3) {
        return e3.v === t2;
      }) : r2;
    }
  }
  outEdges(e2, t2) {
    var n2 = this._out[e2];
    if (n2) {
      var r2 = G(n2);
      return t2 ? S(r2, function(e3) {
        return e3.w === t2;
      }) : r2;
    }
  }
  nodeEdges(e2, t2) {
    var n2 = this.inEdges(e2, t2);
    if (n2) return n2.concat(this.outEdges(e2, t2));
  }
};
Y.prototype._nodeCount = 0, Y.prototype._edgeCount = 0;
function X(e2, t2) {
  e2[t2] ? e2[t2]++ : e2[t2] = 1;
}
function Z(e2, t2) {
  --e2[t2] || delete e2[t2];
}
function Q(e2, t2, n2, r2) {
  var i2 = `` + t2, a2 = `` + n2;
  if (!e2 && i2 > a2) {
    var o2 = i2;
    i2 = a2, a2 = o2;
  }
  return i2 + J + a2 + J + (K(r2) ? Ot : r2);
}
function kt(e2, t2, n2, r2) {
  var i2 = `` + t2, a2 = `` + n2;
  if (!e2 && i2 > a2) {
    var o2 = i2;
    i2 = a2, a2 = o2;
  }
  var s2 = { v: i2, w: a2 };
  return r2 && (s2.name = r2), s2;
}
function $(e2, t2) {
  return Q(e2, t2.v, t2.w, t2.name);
}
export {
  St as i,
  K as n,
  G as r,
  Y as t
};
