import { $ as e, Ct as t, Et as n, K as r, Q as i, W as a, Y as o, dt as s, ft as ee, gt as te, it as c, lt as l, mt as u, n as d, nt as f, pt as p, rt as ne, st as re, t as m, tt as h, ut as ie, wt as ae, yt as oe } from "./index-4Ava25sD.js";
import { C as g, E as _, S as v, T as se, a as ce, b as le, c as y, i as ue, n as b, s as de, t as fe, w as pe, x } from "./reduce-BYgg84dj.js";
function me(e2, t2) {
  return e2 && i(t2, x(t2), e2);
}
var he = me;
function ge(e2, t2) {
  return e2 && i(t2, o(t2), e2);
}
var _e = ge;
function ve(e2, t2) {
  return i(e2, v(e2), t2);
}
var ye = ve, S = Object.getOwnPropertySymbols ? function(e2) {
  for (var t2 = []; e2; ) se(t2, v(e2)), e2 = s(e2);
  return t2;
} : g;
function C(e2, t2) {
  return i(e2, S(e2), t2);
}
var w = C;
function T(e2) {
  return pe(e2, o, S);
}
var E = T, D = Object.prototype.hasOwnProperty;
function O(e2) {
  var t2 = e2.length, n2 = new e2.constructor(t2);
  return t2 && typeof e2[0] == `string` && D.call(e2, `index`) && (n2.index = e2.index, n2.input = e2.input), n2;
}
var k = O;
function A(e2, t2) {
  var n2 = t2 ? u(e2.buffer) : e2.buffer;
  return new e2.constructor(n2, e2.byteOffset, e2.byteLength);
}
var j = A, M = /\w*$/;
function N(e2) {
  var t2 = new e2.constructor(e2.source, M.exec(e2));
  return t2.lastIndex = e2.lastIndex, t2;
}
var P = N, F = n ? n.prototype : void 0, I = F ? F.valueOf : void 0;
function be(e2) {
  return I ? Object(I.call(e2)) : {};
}
var xe = be, Se = `[object Boolean]`, Ce = `[object Date]`, we = `[object Map]`, Te = `[object Number]`, Ee = `[object RegExp]`, De = `[object Set]`, Oe = `[object String]`, ke = `[object Symbol]`, Ae = `[object ArrayBuffer]`, je = `[object DataView]`, Me = `[object Float32Array]`, Ne = `[object Float64Array]`, Pe = `[object Int8Array]`, Fe = `[object Int16Array]`, Ie = `[object Int32Array]`, Le = `[object Uint8Array]`, Re = `[object Uint8ClampedArray]`, ze = `[object Uint16Array]`, Be = `[object Uint32Array]`;
function Ve(e2, t2, n2) {
  var r2 = e2.constructor;
  switch (t2) {
    case Ae:
      return u(e2);
    case Se:
    case Ce:
      return new r2(+e2);
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
      return p(e2, n2);
    case we:
      return new r2();
    case Te:
    case Oe:
      return new r2(e2);
    case Ee:
      return P(e2);
    case De:
      return new r2();
    case ke:
      return xe(e2);
  }
}
var He = Ve, Ue = `[object Map]`;
function We(e2) {
  return l(e2) && d(e2) == Ue;
}
var Ge = We, L = h && h.isMap, Ke = L ? f(L) : Ge, qe = `[object Set]`;
function R(e2) {
  return l(e2) && d(e2) == qe;
}
var Je = R, z = h && h.isSet, Ye = z ? f(z) : Je, Xe = 1, Ze = 2, Qe = 4, B = `[object Arguments]`, $e = `[object Array]`, et = `[object Boolean]`, tt = `[object Date]`, nt = `[object Error]`, V = `[object Function]`, rt = `[object GeneratorFunction]`, it = `[object Map]`, at = `[object Number]`, H = `[object Object]`, ot = `[object RegExp]`, st = `[object Set]`, ct = `[object String]`, lt = `[object Symbol]`, ut = `[object WeakMap]`, dt = `[object ArrayBuffer]`, ft = `[object DataView]`, pt = `[object Float32Array]`, mt = `[object Float64Array]`, ht = `[object Int8Array]`, gt = `[object Int16Array]`, _t = `[object Int32Array]`, vt = `[object Uint8Array]`, yt = `[object Uint8ClampedArray]`, bt = `[object Uint16Array]`, xt = `[object Uint32Array]`, U = {};
U[B] = U[$e] = U[dt] = U[ft] = U[et] = U[tt] = U[pt] = U[mt] = U[ht] = U[gt] = U[_t] = U[it] = U[at] = U[H] = U[ot] = U[st] = U[ct] = U[lt] = U[vt] = U[yt] = U[bt] = U[xt] = true, U[nt] = U[V] = U[ut] = false;
function W(t2, n2, r2, i2, a2, s2) {
  var c2, l2 = n2 & Xe, u2 = n2 & Ze, f2 = n2 & Qe;
  if (r2 && (c2 = a2 ? r2(t2, i2, a2, s2) : r2(t2)), c2 !== void 0) return c2;
  if (!ae(t2)) return t2;
  var p2 = re(t2);
  if (p2) {
    if (c2 = k(t2), !l2) return ee(t2, c2);
  } else {
    var m2 = d(t2), h2 = m2 == V || m2 == rt;
    if (ne(t2)) return te(t2, l2);
    if (m2 == H || m2 == B || h2 && !a2) {
      if (c2 = u2 || h2 ? {} : ie(t2), !l2) return u2 ? w(t2, _e(c2, t2)) : ye(t2, he(c2, t2));
    } else {
      if (!U[m2]) return a2 ? t2 : {};
      c2 = He(t2, m2, l2);
    }
  }
  s2 || (s2 = new oe());
  var g2 = s2.get(t2);
  if (g2) return g2;
  s2.set(t2, c2), Ye(t2) ? t2.forEach(function(e2) {
    c2.add(W(e2, n2, r2, e2, t2, s2));
  }) : Ke(t2) && t2.forEach(function(e2, i3) {
    c2.set(i3, W(e2, n2, r2, i3, t2, s2));
  });
  var _2 = p2 ? void 0 : (f2 ? u2 ? E : le : u2 ? o : x)(t2);
  return ue(_2 || t2, function(i3, a3) {
    _2 && (a3 = i3, i3 = t2[a3]), e(c2, a3, W(i3, n2, r2, a3, t2, s2));
  }), c2;
}
var St = W;
function Ct(e2, t2) {
  return _(t2, function(t3) {
    return e2[t3];
  });
}
var wt = Ct;
function Tt(e2) {
  return e2 == null ? [] : wt(e2, x(e2));
}
var G = Tt;
function Et(e2) {
  return e2 === void 0;
}
var K = Et, Dt = a(function(e2) {
  return ce(de(e2, 1, c, true));
}), Ot = `\0`, q = `\0`, J = ``, Y = class {
  constructor(e2 = {}) {
    this._isDirected = Object.prototype.hasOwnProperty.call(e2, `directed`) ? e2.directed : true, this._isMultigraph = Object.prototype.hasOwnProperty.call(e2, `multigraph`) ? e2.multigraph : false, this._isCompound = Object.prototype.hasOwnProperty.call(e2, `compound`) ? e2.compound : false, this._label = void 0, this._defaultNodeLabelFn = r(void 0), this._defaultEdgeLabelFn = r(void 0), this._nodes = {}, this._isCompound && (this._parent = {}, this._children = {}, this._children[q] = {}), this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {};
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
    return t(e2) || (e2 = r(e2)), this._defaultNodeLabelFn = e2, this;
  }
  nodeCount() {
    return this._nodeCount;
  }
  nodes() {
    return x(this._nodes);
  }
  sources() {
    var e2 = this;
    return y(this.nodes(), function(t2) {
      return m(e2._in[t2]);
    });
  }
  sinks() {
    var e2 = this;
    return y(this.nodes(), function(t2) {
      return m(e2._out[t2]);
    });
  }
  setNodes(e2, t2) {
    var n2 = arguments, r2 = this;
    return b(e2, function(e3) {
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
      delete this._nodes[e2], this._isCompound && (this._removeFromParentsChildList(e2), delete this._parent[e2], b(this.children(e2), (e3) => {
        this.setParent(e3);
      }), delete this._children[e2]), b(x(this._in[e2]), t2), delete this._in[e2], delete this._preds[e2], b(x(this._out[e2]), t2), delete this._out[e2], delete this._sucs[e2], --this._nodeCount;
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
      if (t2) return x(t2);
    } else if (e2 === q) return this.nodes();
    else if (this.hasNode(e2)) return [];
  }
  predecessors(e2) {
    var t2 = this._preds[e2];
    if (t2) return x(t2);
  }
  successors(e2) {
    var t2 = this._sucs[e2];
    if (t2) return x(t2);
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
    b(this._nodes, function(n3, r3) {
      e2(r3) && t2.setNode(r3, n3);
    }), b(this._edgeObjs, function(e3) {
      t2.hasNode(e3.v) && t2.hasNode(e3.w) && t2.setEdge(e3, n2.edge(e3));
    });
    var r2 = {};
    function i2(e3) {
      var a2 = n2.parent(e3);
      return a2 === void 0 || t2.hasNode(a2) ? (r2[e3] = a2, a2) : a2 in r2 ? r2[a2] : i2(a2);
    }
    return this._isCompound && b(t2.nodes(), function(e3) {
      t2.setParent(e3, i2(e3));
    }), t2;
  }
  setDefaultEdgeLabel(e2) {
    return t(e2) || (e2 = r(e2)), this._defaultEdgeLabelFn = e2, this;
  }
  edgeCount() {
    return this._edgeCount;
  }
  edges() {
    return G(this._edgeObjs);
  }
  setPath(e2, t2) {
    var n2 = this, r2 = arguments;
    return fe(e2, function(e3, i2) {
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
      return t2 ? y(r2, function(e3) {
        return e3.v === t2;
      }) : r2;
    }
  }
  outEdges(e2, t2) {
    var n2 = this._out[e2];
    if (n2) {
      var r2 = G(n2);
      return t2 ? y(r2, function(e3) {
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
