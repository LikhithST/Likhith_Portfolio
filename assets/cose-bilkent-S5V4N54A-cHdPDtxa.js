import { i as e, t } from "./chunk-CXUkj53v.js";
import { g as n, h as r, p as i } from "./src-D8UWkQNo.js";
import { t as a } from "./cytoscape.esm-DGsSD2nE.js";
var o = t(((e2, t2) => {
  (function(n2, r2) {
    typeof e2 == `object` && typeof t2 == `object` ? t2.exports = r2() : typeof define == `function` && define.amd ? define([], r2) : typeof e2 == `object` ? e2.layoutBase = r2() : n2.layoutBase = r2();
  })(e2, function() {
    return (function(e3) {
      var t3 = {};
      function n2(r2) {
        if (t3[r2]) return t3[r2].exports;
        var i2 = t3[r2] = { i: r2, l: false, exports: {} };
        return e3[r2].call(i2.exports, i2, i2.exports, n2), i2.l = true, i2.exports;
      }
      return n2.m = e3, n2.c = t3, n2.i = function(e4) {
        return e4;
      }, n2.d = function(e4, t4, r2) {
        n2.o(e4, t4) || Object.defineProperty(e4, t4, { configurable: false, enumerable: true, get: r2 });
      }, n2.n = function(e4) {
        var t4 = e4 && e4.__esModule ? function() {
          return e4.default;
        } : function() {
          return e4;
        };
        return n2.d(t4, `a`, t4), t4;
      }, n2.o = function(e4, t4) {
        return Object.prototype.hasOwnProperty.call(e4, t4);
      }, n2.p = ``, n2(n2.s = 26);
    })([(function(e3, t3, n2) {
      function r2() {
      }
      r2.QUALITY = 1, r2.DEFAULT_CREATE_BENDS_AS_NEEDED = false, r2.DEFAULT_INCREMENTAL = false, r2.DEFAULT_ANIMATION_ON_LAYOUT = true, r2.DEFAULT_ANIMATION_DURING_LAYOUT = false, r2.DEFAULT_ANIMATION_PERIOD = 50, r2.DEFAULT_UNIFORM_LEAF_NODE_SIZES = false, r2.DEFAULT_GRAPH_MARGIN = 15, r2.NODE_DIMENSIONS_INCLUDE_LABELS = false, r2.SIMPLE_NODE_SIZE = 40, r2.SIMPLE_NODE_HALF_SIZE = r2.SIMPLE_NODE_SIZE / 2, r2.EMPTY_COMPOUND_NODE_SIZE = 40, r2.MIN_EDGE_LENGTH = 1, r2.WORLD_BOUNDARY = 1e6, r2.INITIAL_WORLD_BOUNDARY = r2.WORLD_BOUNDARY / 1e3, r2.WORLD_CENTER_X = 1200, r2.WORLD_CENTER_Y = 900, e3.exports = r2;
    }), (function(e3, t3, n2) {
      var r2 = n2(2), i2 = n2(8), a2 = n2(9);
      function o2(e4, t4, n3) {
        r2.call(this, n3), this.isOverlapingSourceAndTarget = false, this.vGraphObject = n3, this.bendpoints = [], this.source = e4, this.target = t4;
      }
      for (var s2 in o2.prototype = Object.create(r2.prototype), r2) o2[s2] = r2[s2];
      o2.prototype.getSource = function() {
        return this.source;
      }, o2.prototype.getTarget = function() {
        return this.target;
      }, o2.prototype.isInterGraph = function() {
        return this.isInterGraph;
      }, o2.prototype.getLength = function() {
        return this.length;
      }, o2.prototype.isOverlapingSourceAndTarget = function() {
        return this.isOverlapingSourceAndTarget;
      }, o2.prototype.getBendpoints = function() {
        return this.bendpoints;
      }, o2.prototype.getLca = function() {
        return this.lca;
      }, o2.prototype.getSourceInLca = function() {
        return this.sourceInLca;
      }, o2.prototype.getTargetInLca = function() {
        return this.targetInLca;
      }, o2.prototype.getOtherEnd = function(e4) {
        if (this.source === e4) return this.target;
        if (this.target === e4) return this.source;
        throw `Node is not incident with this edge`;
      }, o2.prototype.getOtherEndInGraph = function(e4, t4) {
        for (var n3 = this.getOtherEnd(e4), r3 = t4.getGraphManager().getRoot(); ; ) {
          if (n3.getOwner() == t4) return n3;
          if (n3.getOwner() == r3) break;
          n3 = n3.getOwner().getParent();
        }
        return null;
      }, o2.prototype.updateLength = function() {
        var e4 = [, , , ,];
        this.isOverlapingSourceAndTarget = i2.getIntersection(this.target.getRect(), this.source.getRect(), e4), this.isOverlapingSourceAndTarget || (this.lengthX = e4[0] - e4[2], this.lengthY = e4[1] - e4[3], Math.abs(this.lengthX) < 1 && (this.lengthX = a2.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = a2.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY));
      }, o2.prototype.updateLengthSimple = function() {
        this.lengthX = this.target.getCenterX() - this.source.getCenterX(), this.lengthY = this.target.getCenterY() - this.source.getCenterY(), Math.abs(this.lengthX) < 1 && (this.lengthX = a2.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = a2.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
      }, e3.exports = o2;
    }), (function(e3, t3, n2) {
      function r2(e4) {
        this.vGraphObject = e4;
      }
      e3.exports = r2;
    }), (function(e3, t3, n2) {
      var r2 = n2(2), i2 = n2(10), a2 = n2(13), o2 = n2(0), s2 = n2(16), c2 = n2(4);
      function l2(e4, t4, n3, o3) {
        n3 == null && o3 == null && (o3 = t4), r2.call(this, o3), e4.graphManager != null && (e4 = e4.graphManager), this.estimatedSize = i2.MIN_VALUE, this.inclusionTreeDepth = i2.MAX_VALUE, this.vGraphObject = o3, this.edges = [], this.graphManager = e4, n3 != null && t4 != null ? this.rect = new a2(t4.x, t4.y, n3.width, n3.height) : this.rect = new a2();
      }
      for (var u2 in l2.prototype = Object.create(r2.prototype), r2) l2[u2] = r2[u2];
      l2.prototype.getEdges = function() {
        return this.edges;
      }, l2.prototype.getChild = function() {
        return this.child;
      }, l2.prototype.getOwner = function() {
        return this.owner;
      }, l2.prototype.getWidth = function() {
        return this.rect.width;
      }, l2.prototype.setWidth = function(e4) {
        this.rect.width = e4;
      }, l2.prototype.getHeight = function() {
        return this.rect.height;
      }, l2.prototype.setHeight = function(e4) {
        this.rect.height = e4;
      }, l2.prototype.getCenterX = function() {
        return this.rect.x + this.rect.width / 2;
      }, l2.prototype.getCenterY = function() {
        return this.rect.y + this.rect.height / 2;
      }, l2.prototype.getCenter = function() {
        return new c2(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
      }, l2.prototype.getLocation = function() {
        return new c2(this.rect.x, this.rect.y);
      }, l2.prototype.getRect = function() {
        return this.rect;
      }, l2.prototype.getDiagonal = function() {
        return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
      }, l2.prototype.getHalfTheDiagonal = function() {
        return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
      }, l2.prototype.setRect = function(e4, t4) {
        this.rect.x = e4.x, this.rect.y = e4.y, this.rect.width = t4.width, this.rect.height = t4.height;
      }, l2.prototype.setCenter = function(e4, t4) {
        this.rect.x = e4 - this.rect.width / 2, this.rect.y = t4 - this.rect.height / 2;
      }, l2.prototype.setLocation = function(e4, t4) {
        this.rect.x = e4, this.rect.y = t4;
      }, l2.prototype.moveBy = function(e4, t4) {
        this.rect.x += e4, this.rect.y += t4;
      }, l2.prototype.getEdgeListToNode = function(e4) {
        var t4 = [], n3 = this;
        return n3.edges.forEach(function(r3) {
          if (r3.target == e4) {
            if (r3.source != n3) throw `Incorrect edge source!`;
            t4.push(r3);
          }
        }), t4;
      }, l2.prototype.getEdgesBetween = function(e4) {
        var t4 = [], n3 = this;
        return n3.edges.forEach(function(r3) {
          if (!(r3.source == n3 || r3.target == n3)) throw `Incorrect edge source and/or target`;
          (r3.target == e4 || r3.source == e4) && t4.push(r3);
        }), t4;
      }, l2.prototype.getNeighborsList = function() {
        var e4 = /* @__PURE__ */ new Set(), t4 = this;
        return t4.edges.forEach(function(n3) {
          if (n3.source == t4) e4.add(n3.target);
          else {
            if (n3.target != t4) throw `Incorrect incidency!`;
            e4.add(n3.source);
          }
        }), e4;
      }, l2.prototype.withChildren = function() {
        var e4 = /* @__PURE__ */ new Set(), t4, n3;
        if (e4.add(this), this.child != null) for (var r3 = this.child.getNodes(), i3 = 0; i3 < r3.length; i3++) t4 = r3[i3], n3 = t4.withChildren(), n3.forEach(function(t5) {
          e4.add(t5);
        });
        return e4;
      }, l2.prototype.getNoOfChildren = function() {
        var e4 = 0, t4;
        if (this.child == null) e4 = 1;
        else for (var n3 = this.child.getNodes(), r3 = 0; r3 < n3.length; r3++) t4 = n3[r3], e4 += t4.getNoOfChildren();
        return e4 == 0 && (e4 = 1), e4;
      }, l2.prototype.getEstimatedSize = function() {
        if (this.estimatedSize == i2.MIN_VALUE) throw `assert failed`;
        return this.estimatedSize;
      }, l2.prototype.calcEstimatedSize = function() {
        return this.child == null ? this.estimatedSize = (this.rect.width + this.rect.height) / 2 : (this.estimatedSize = this.child.calcEstimatedSize(), this.rect.width = this.estimatedSize, this.rect.height = this.estimatedSize, this.estimatedSize);
      }, l2.prototype.scatter = function() {
        var e4, t4, n3 = -o2.INITIAL_WORLD_BOUNDARY, r3 = o2.INITIAL_WORLD_BOUNDARY;
        e4 = o2.WORLD_CENTER_X + s2.nextDouble() * (r3 - n3) + n3;
        var i3 = -o2.INITIAL_WORLD_BOUNDARY, a3 = o2.INITIAL_WORLD_BOUNDARY;
        t4 = o2.WORLD_CENTER_Y + s2.nextDouble() * (a3 - i3) + i3, this.rect.x = e4, this.rect.y = t4;
      }, l2.prototype.updateBounds = function() {
        if (this.getChild() == null) throw `assert failed`;
        if (this.getChild().getNodes().length != 0) {
          var e4 = this.getChild();
          if (e4.updateBounds(true), this.rect.x = e4.getLeft(), this.rect.y = e4.getTop(), this.setWidth(e4.getRight() - e4.getLeft()), this.setHeight(e4.getBottom() - e4.getTop()), o2.NODE_DIMENSIONS_INCLUDE_LABELS) {
            var t4 = e4.getRight() - e4.getLeft(), n3 = e4.getBottom() - e4.getTop();
            this.labelWidth > t4 && (this.rect.x -= (this.labelWidth - t4) / 2, this.setWidth(this.labelWidth)), this.labelHeight > n3 && (this.labelPos == `center` ? this.rect.y -= (this.labelHeight - n3) / 2 : this.labelPos == `top` && (this.rect.y -= this.labelHeight - n3), this.setHeight(this.labelHeight));
          }
        }
      }, l2.prototype.getInclusionTreeDepth = function() {
        if (this.inclusionTreeDepth == i2.MAX_VALUE) throw `assert failed`;
        return this.inclusionTreeDepth;
      }, l2.prototype.transform = function(e4) {
        var t4 = this.rect.x;
        t4 > o2.WORLD_BOUNDARY ? t4 = o2.WORLD_BOUNDARY : t4 < -o2.WORLD_BOUNDARY && (t4 = -o2.WORLD_BOUNDARY);
        var n3 = this.rect.y;
        n3 > o2.WORLD_BOUNDARY ? n3 = o2.WORLD_BOUNDARY : n3 < -o2.WORLD_BOUNDARY && (n3 = -o2.WORLD_BOUNDARY);
        var r3 = new c2(t4, n3), i3 = e4.inverseTransformPoint(r3);
        this.setLocation(i3.x, i3.y);
      }, l2.prototype.getLeft = function() {
        return this.rect.x;
      }, l2.prototype.getRight = function() {
        return this.rect.x + this.rect.width;
      }, l2.prototype.getTop = function() {
        return this.rect.y;
      }, l2.prototype.getBottom = function() {
        return this.rect.y + this.rect.height;
      }, l2.prototype.getParent = function() {
        return this.owner == null ? null : this.owner.getParent();
      }, e3.exports = l2;
    }), (function(e3, t3, n2) {
      function r2(e4, t4) {
        e4 == null && t4 == null ? (this.x = 0, this.y = 0) : (this.x = e4, this.y = t4);
      }
      r2.prototype.getX = function() {
        return this.x;
      }, r2.prototype.getY = function() {
        return this.y;
      }, r2.prototype.setX = function(e4) {
        this.x = e4;
      }, r2.prototype.setY = function(e4) {
        this.y = e4;
      }, r2.prototype.getDifference = function(e4) {
        return new DimensionD(this.x - e4.x, this.y - e4.y);
      }, r2.prototype.getCopy = function() {
        return new r2(this.x, this.y);
      }, r2.prototype.translate = function(e4) {
        return this.x += e4.width, this.y += e4.height, this;
      }, e3.exports = r2;
    }), (function(e3, t3, n2) {
      var r2 = n2(2), i2 = n2(10), a2 = n2(0), o2 = n2(6), s2 = n2(3), c2 = n2(1), l2 = n2(13), u2 = n2(12), d2 = n2(11);
      function f2(e4, t4, n3) {
        r2.call(this, n3), this.estimatedSize = i2.MIN_VALUE, this.margin = a2.DEFAULT_GRAPH_MARGIN, this.edges = [], this.nodes = [], this.isConnected = false, this.parent = e4, t4 != null && t4 instanceof o2 ? this.graphManager = t4 : t4 != null && t4 instanceof Layout && (this.graphManager = t4.graphManager);
      }
      for (var p2 in f2.prototype = Object.create(r2.prototype), r2) f2[p2] = r2[p2];
      f2.prototype.getNodes = function() {
        return this.nodes;
      }, f2.prototype.getEdges = function() {
        return this.edges;
      }, f2.prototype.getGraphManager = function() {
        return this.graphManager;
      }, f2.prototype.getParent = function() {
        return this.parent;
      }, f2.prototype.getLeft = function() {
        return this.left;
      }, f2.prototype.getRight = function() {
        return this.right;
      }, f2.prototype.getTop = function() {
        return this.top;
      }, f2.prototype.getBottom = function() {
        return this.bottom;
      }, f2.prototype.isConnected = function() {
        return this.isConnected;
      }, f2.prototype.add = function(e4, t4, n3) {
        if (t4 == null && n3 == null) {
          var r3 = e4;
          if (this.graphManager == null) throw `Graph has no graph mgr!`;
          if (this.getNodes().indexOf(r3) > -1) throw `Node already in graph!`;
          return r3.owner = this, this.getNodes().push(r3), r3;
        } else {
          var i3 = e4;
          if (!(this.getNodes().indexOf(t4) > -1 && this.getNodes().indexOf(n3) > -1)) throw `Source or target not in graph!`;
          if (!(t4.owner == n3.owner && t4.owner == this)) throw `Both owners must be this graph!`;
          return t4.owner == n3.owner ? (i3.source = t4, i3.target = n3, i3.isInterGraph = false, this.getEdges().push(i3), t4.edges.push(i3), n3 != t4 && n3.edges.push(i3), i3) : null;
        }
      }, f2.prototype.remove = function(e4) {
        var t4 = e4;
        if (e4 instanceof s2) {
          if (t4 == null) throw `Node is null!`;
          if (!(t4.owner != null && t4.owner == this)) throw `Owner graph is invalid!`;
          if (this.graphManager == null) throw `Owner graph manager is invalid!`;
          for (var n3 = t4.edges.slice(), r3, i3 = n3.length, a3 = 0; a3 < i3; a3++) r3 = n3[a3], r3.isInterGraph ? this.graphManager.remove(r3) : r3.source.owner.remove(r3);
          var o3 = this.nodes.indexOf(t4);
          if (o3 == -1) throw `Node not in owner node list!`;
          this.nodes.splice(o3, 1);
        } else if (e4 instanceof c2) {
          var r3 = e4;
          if (r3 == null) throw `Edge is null!`;
          if (!(r3.source != null && r3.target != null)) throw `Source and/or target is null!`;
          if (!(r3.source.owner != null && r3.target.owner != null && r3.source.owner == this && r3.target.owner == this)) throw `Source and/or target owner is invalid!`;
          var l3 = r3.source.edges.indexOf(r3), u3 = r3.target.edges.indexOf(r3);
          if (!(l3 > -1 && u3 > -1)) throw `Source and/or target doesn't know this edge!`;
          r3.source.edges.splice(l3, 1), r3.target != r3.source && r3.target.edges.splice(u3, 1);
          var o3 = r3.source.owner.getEdges().indexOf(r3);
          if (o3 == -1) throw `Not in owner's edge list!`;
          r3.source.owner.getEdges().splice(o3, 1);
        }
      }, f2.prototype.updateLeftTop = function() {
        for (var e4 = i2.MAX_VALUE, t4 = i2.MAX_VALUE, n3, r3, a3, o3 = this.getNodes(), s3 = o3.length, c3 = 0; c3 < s3; c3++) {
          var l3 = o3[c3];
          n3 = l3.getTop(), r3 = l3.getLeft(), e4 > n3 && (e4 = n3), t4 > r3 && (t4 = r3);
        }
        return e4 == i2.MAX_VALUE ? null : (a3 = o3[0].getParent().paddingLeft == null ? this.margin : o3[0].getParent().paddingLeft, this.left = t4 - a3, this.top = e4 - a3, new u2(this.left, this.top));
      }, f2.prototype.updateBounds = function(e4) {
        for (var t4 = i2.MAX_VALUE, n3 = -i2.MAX_VALUE, r3 = i2.MAX_VALUE, a3 = -i2.MAX_VALUE, o3, s3, c3, u3, d3, f3 = this.nodes, p3 = f3.length, m2 = 0; m2 < p3; m2++) {
          var h2 = f3[m2];
          e4 && h2.child != null && h2.updateBounds(), o3 = h2.getLeft(), s3 = h2.getRight(), c3 = h2.getTop(), u3 = h2.getBottom(), t4 > o3 && (t4 = o3), n3 < s3 && (n3 = s3), r3 > c3 && (r3 = c3), a3 < u3 && (a3 = u3);
        }
        var g2 = new l2(t4, r3, n3 - t4, a3 - r3);
        t4 == i2.MAX_VALUE && (this.left = this.parent.getLeft(), this.right = this.parent.getRight(), this.top = this.parent.getTop(), this.bottom = this.parent.getBottom()), d3 = f3[0].getParent().paddingLeft == null ? this.margin : f3[0].getParent().paddingLeft, this.left = g2.x - d3, this.right = g2.x + g2.width + d3, this.top = g2.y - d3, this.bottom = g2.y + g2.height + d3;
      }, f2.calculateBounds = function(e4) {
        for (var t4 = i2.MAX_VALUE, n3 = -i2.MAX_VALUE, r3 = i2.MAX_VALUE, a3 = -i2.MAX_VALUE, o3, s3, c3, u3, d3 = e4.length, f3 = 0; f3 < d3; f3++) {
          var p3 = e4[f3];
          o3 = p3.getLeft(), s3 = p3.getRight(), c3 = p3.getTop(), u3 = p3.getBottom(), t4 > o3 && (t4 = o3), n3 < s3 && (n3 = s3), r3 > c3 && (r3 = c3), a3 < u3 && (a3 = u3);
        }
        return new l2(t4, r3, n3 - t4, a3 - r3);
      }, f2.prototype.getInclusionTreeDepth = function() {
        return this == this.graphManager.getRoot() ? 1 : this.parent.getInclusionTreeDepth();
      }, f2.prototype.getEstimatedSize = function() {
        if (this.estimatedSize == i2.MIN_VALUE) throw `assert failed`;
        return this.estimatedSize;
      }, f2.prototype.calcEstimatedSize = function() {
        for (var e4 = 0, t4 = this.nodes, n3 = t4.length, r3 = 0; r3 < n3; r3++) {
          var i3 = t4[r3];
          e4 += i3.calcEstimatedSize();
        }
        return e4 == 0 ? this.estimatedSize = a2.EMPTY_COMPOUND_NODE_SIZE : this.estimatedSize = e4 / Math.sqrt(this.nodes.length), this.estimatedSize;
      }, f2.prototype.updateConnected = function() {
        var e4 = this;
        if (this.nodes.length == 0) {
          this.isConnected = true;
          return;
        }
        var t4 = new d2(), n3 = /* @__PURE__ */ new Set(), r3 = this.nodes[0], i3, a3;
        for (r3.withChildren().forEach(function(e5) {
          t4.push(e5), n3.add(e5);
        }); t4.length !== 0; ) {
          r3 = t4.shift(), i3 = r3.getEdges();
          for (var o3 = i3.length, s3 = 0; s3 < o3; s3++) a3 = i3[s3].getOtherEndInGraph(r3, this), a3 != null && !n3.has(a3) && a3.withChildren().forEach(function(e5) {
            t4.push(e5), n3.add(e5);
          });
        }
        if (this.isConnected = false, n3.size >= this.nodes.length) {
          var c3 = 0;
          n3.forEach(function(t5) {
            t5.owner == e4 && c3++;
          }), c3 == this.nodes.length && (this.isConnected = true);
        }
      }, e3.exports = f2;
    }), (function(e3, t3, n2) {
      var r2, i2 = n2(1);
      function a2(e4) {
        r2 = n2(5), this.layout = e4, this.graphs = [], this.edges = [];
      }
      a2.prototype.addRoot = function() {
        var e4 = this.layout.newGraph(), t4 = this.layout.newNode(null), n3 = this.add(e4, t4);
        return this.setRootGraph(n3), this.rootGraph;
      }, a2.prototype.add = function(e4, t4, n3, r3, i3) {
        if (n3 == null && r3 == null && i3 == null) {
          if (e4 == null) throw `Graph is null!`;
          if (t4 == null) throw `Parent node is null!`;
          if (this.graphs.indexOf(e4) > -1) throw `Graph already in this graph mgr!`;
          if (this.graphs.push(e4), e4.parent != null) throw `Already has a parent!`;
          if (t4.child != null) throw `Already has a child!`;
          return e4.parent = t4, t4.child = e4, e4;
        } else {
          i3 = n3, r3 = t4, n3 = e4;
          var a3 = r3.getOwner(), o2 = i3.getOwner();
          if (!(a3 != null && a3.getGraphManager() == this)) throw `Source not in this graph mgr!`;
          if (!(o2 != null && o2.getGraphManager() == this)) throw `Target not in this graph mgr!`;
          if (a3 == o2) return n3.isInterGraph = false, a3.add(n3, r3, i3);
          if (n3.isInterGraph = true, n3.source = r3, n3.target = i3, this.edges.indexOf(n3) > -1) throw `Edge already in inter-graph edge list!`;
          if (this.edges.push(n3), !(n3.source != null && n3.target != null)) throw `Edge source and/or target is null!`;
          if (!(n3.source.edges.indexOf(n3) == -1 && n3.target.edges.indexOf(n3) == -1)) throw `Edge already in source and/or target incidency list!`;
          return n3.source.edges.push(n3), n3.target.edges.push(n3), n3;
        }
      }, a2.prototype.remove = function(e4) {
        if (e4 instanceof r2) {
          var t4 = e4;
          if (t4.getGraphManager() != this) throw `Graph not in this graph mgr`;
          if (!(t4 == this.rootGraph || t4.parent != null && t4.parent.graphManager == this)) throw `Invalid parent node!`;
          var n3 = [];
          n3 = n3.concat(t4.getEdges());
          for (var a3, o2 = n3.length, s2 = 0; s2 < o2; s2++) a3 = n3[s2], t4.remove(a3);
          var c2 = [];
          c2 = c2.concat(t4.getNodes());
          var l2;
          o2 = c2.length;
          for (var s2 = 0; s2 < o2; s2++) l2 = c2[s2], t4.remove(l2);
          t4 == this.rootGraph && this.setRootGraph(null);
          var u2 = this.graphs.indexOf(t4);
          this.graphs.splice(u2, 1), t4.parent = null;
        } else if (e4 instanceof i2) {
          if (a3 = e4, a3 == null) throw `Edge is null!`;
          if (!a3.isInterGraph) throw `Not an inter-graph edge!`;
          if (!(a3.source != null && a3.target != null)) throw `Source and/or target is null!`;
          if (!(a3.source.edges.indexOf(a3) != -1 && a3.target.edges.indexOf(a3) != -1)) throw `Source and/or target doesn't know this edge!`;
          var u2 = a3.source.edges.indexOf(a3);
          if (a3.source.edges.splice(u2, 1), u2 = a3.target.edges.indexOf(a3), a3.target.edges.splice(u2, 1), !(a3.source.owner != null && a3.source.owner.getGraphManager() != null)) throw `Edge owner graph or owner graph manager is null!`;
          if (a3.source.owner.getGraphManager().edges.indexOf(a3) == -1) throw `Not in owner graph manager's edge list!`;
          var u2 = a3.source.owner.getGraphManager().edges.indexOf(a3);
          a3.source.owner.getGraphManager().edges.splice(u2, 1);
        }
      }, a2.prototype.updateBounds = function() {
        this.rootGraph.updateBounds(true);
      }, a2.prototype.getGraphs = function() {
        return this.graphs;
      }, a2.prototype.getAllNodes = function() {
        if (this.allNodes == null) {
          for (var e4 = [], t4 = this.getGraphs(), n3 = t4.length, r3 = 0; r3 < n3; r3++) e4 = e4.concat(t4[r3].getNodes());
          this.allNodes = e4;
        }
        return this.allNodes;
      }, a2.prototype.resetAllNodes = function() {
        this.allNodes = null;
      }, a2.prototype.resetAllEdges = function() {
        this.allEdges = null;
      }, a2.prototype.resetAllNodesToApplyGravitation = function() {
        this.allNodesToApplyGravitation = null;
      }, a2.prototype.getAllEdges = function() {
        if (this.allEdges == null) {
          var e4 = [], t4 = this.getGraphs();
          t4.length;
          for (var n3 = 0; n3 < t4.length; n3++) e4 = e4.concat(t4[n3].getEdges());
          e4 = e4.concat(this.edges), this.allEdges = e4;
        }
        return this.allEdges;
      }, a2.prototype.getAllNodesToApplyGravitation = function() {
        return this.allNodesToApplyGravitation;
      }, a2.prototype.setAllNodesToApplyGravitation = function(e4) {
        if (this.allNodesToApplyGravitation != null) throw `assert failed`;
        this.allNodesToApplyGravitation = e4;
      }, a2.prototype.getRoot = function() {
        return this.rootGraph;
      }, a2.prototype.setRootGraph = function(e4) {
        if (e4.getGraphManager() != this) throw `Root not in this graph mgr!`;
        this.rootGraph = e4, e4.parent ?? (e4.parent = this.layout.newNode(`Root node`));
      }, a2.prototype.getLayout = function() {
        return this.layout;
      }, a2.prototype.isOneAncestorOfOther = function(e4, t4) {
        if (!(e4 != null && t4 != null)) throw `assert failed`;
        if (e4 == t4) return true;
        var n3 = e4.getOwner(), r3;
        do {
          if (r3 = n3.getParent(), r3 == null) break;
          if (r3 == t4) return true;
          if (n3 = r3.getOwner(), n3 == null) break;
        } while (true);
        n3 = t4.getOwner();
        do {
          if (r3 = n3.getParent(), r3 == null) break;
          if (r3 == e4) return true;
          if (n3 = r3.getOwner(), n3 == null) break;
        } while (true);
        return false;
      }, a2.prototype.calcLowestCommonAncestors = function() {
        for (var e4, t4, n3, r3, i3, a3 = this.getAllEdges(), o2 = a3.length, s2 = 0; s2 < o2; s2++) {
          if (e4 = a3[s2], t4 = e4.source, n3 = e4.target, e4.lca = null, e4.sourceInLca = t4, e4.targetInLca = n3, t4 == n3) {
            e4.lca = t4.getOwner();
            continue;
          }
          for (r3 = t4.getOwner(); e4.lca == null; ) {
            for (e4.targetInLca = n3, i3 = n3.getOwner(); e4.lca == null; ) {
              if (i3 == r3) {
                e4.lca = i3;
                break;
              }
              if (i3 == this.rootGraph) break;
              if (e4.lca != null) throw `assert failed`;
              e4.targetInLca = i3.getParent(), i3 = e4.targetInLca.getOwner();
            }
            if (r3 == this.rootGraph) break;
            e4.lca ?? (e4.sourceInLca = r3.getParent(), r3 = e4.sourceInLca.getOwner());
          }
          if (e4.lca == null) throw `assert failed`;
        }
      }, a2.prototype.calcLowestCommonAncestor = function(e4, t4) {
        if (e4 == t4) return e4.getOwner();
        var n3 = e4.getOwner();
        do {
          if (n3 == null) break;
          var r3 = t4.getOwner();
          do {
            if (r3 == null) break;
            if (r3 == n3) return r3;
            r3 = r3.getParent().getOwner();
          } while (true);
          n3 = n3.getParent().getOwner();
        } while (true);
        return n3;
      }, a2.prototype.calcInclusionTreeDepths = function(e4, t4) {
        e4 == null && t4 == null && (e4 = this.rootGraph, t4 = 1);
        for (var n3, r3 = e4.getNodes(), i3 = r3.length, a3 = 0; a3 < i3; a3++) n3 = r3[a3], n3.inclusionTreeDepth = t4, n3.child != null && this.calcInclusionTreeDepths(n3.child, t4 + 1);
      }, a2.prototype.includesInvalidEdge = function() {
        for (var e4, t4 = this.edges.length, n3 = 0; n3 < t4; n3++) if (e4 = this.edges[n3], this.isOneAncestorOfOther(e4.source, e4.target)) return true;
        return false;
      }, e3.exports = a2;
    }), (function(e3, t3, n2) {
      var r2 = n2(0);
      function i2() {
      }
      for (var a2 in r2) i2[a2] = r2[a2];
      i2.MAX_ITERATIONS = 2500, i2.DEFAULT_EDGE_LENGTH = 50, i2.DEFAULT_SPRING_STRENGTH = 0.45, i2.DEFAULT_REPULSION_STRENGTH = 4500, i2.DEFAULT_GRAVITY_STRENGTH = 0.4, i2.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, i2.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, i2.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, i2.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = true, i2.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = true, i2.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.3, i2.COOLING_ADAPTATION_FACTOR = 0.33, i2.ADAPTATION_LOWER_NODE_LIMIT = 1e3, i2.ADAPTATION_UPPER_NODE_LIMIT = 5e3, i2.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, i2.MAX_NODE_DISPLACEMENT = i2.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3, i2.MIN_REPULSION_DIST = i2.DEFAULT_EDGE_LENGTH / 10, i2.CONVERGENCE_CHECK_PERIOD = 100, i2.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1, i2.MIN_EDGE_LENGTH = 1, i2.GRID_CALCULATION_CHECK_PERIOD = 10, e3.exports = i2;
    }), (function(e3, t3, n2) {
      var r2 = n2(12);
      function i2() {
      }
      i2.calcSeparationAmount = function(e4, t4, n3, r3) {
        if (!e4.intersects(t4)) throw `assert failed`;
        var i3 = [, ,];
        this.decideDirectionsForOverlappingNodes(e4, t4, i3), n3[0] = Math.min(e4.getRight(), t4.getRight()) - Math.max(e4.x, t4.x), n3[1] = Math.min(e4.getBottom(), t4.getBottom()) - Math.max(e4.y, t4.y), e4.getX() <= t4.getX() && e4.getRight() >= t4.getRight() ? n3[0] += Math.min(t4.getX() - e4.getX(), e4.getRight() - t4.getRight()) : t4.getX() <= e4.getX() && t4.getRight() >= e4.getRight() && (n3[0] += Math.min(e4.getX() - t4.getX(), t4.getRight() - e4.getRight())), e4.getY() <= t4.getY() && e4.getBottom() >= t4.getBottom() ? n3[1] += Math.min(t4.getY() - e4.getY(), e4.getBottom() - t4.getBottom()) : t4.getY() <= e4.getY() && t4.getBottom() >= e4.getBottom() && (n3[1] += Math.min(e4.getY() - t4.getY(), t4.getBottom() - e4.getBottom()));
        var a2 = Math.abs((t4.getCenterY() - e4.getCenterY()) / (t4.getCenterX() - e4.getCenterX()));
        t4.getCenterY() === e4.getCenterY() && t4.getCenterX() === e4.getCenterX() && (a2 = 1);
        var o2 = a2 * n3[0], s2 = n3[1] / a2;
        n3[0] < s2 ? s2 = n3[0] : o2 = n3[1], n3[0] = -1 * i3[0] * (s2 / 2 + r3), n3[1] = -1 * i3[1] * (o2 / 2 + r3);
      }, i2.decideDirectionsForOverlappingNodes = function(e4, t4, n3) {
        e4.getCenterX() < t4.getCenterX() ? n3[0] = -1 : n3[0] = 1, e4.getCenterY() < t4.getCenterY() ? n3[1] = -1 : n3[1] = 1;
      }, i2.getIntersection2 = function(e4, t4, n3) {
        var r3 = e4.getCenterX(), i3 = e4.getCenterY(), a2 = t4.getCenterX(), o2 = t4.getCenterY();
        if (e4.intersects(t4)) return n3[0] = r3, n3[1] = i3, n3[2] = a2, n3[3] = o2, true;
        var s2 = e4.getX(), c2 = e4.getY(), l2 = e4.getRight(), u2 = e4.getX(), d2 = e4.getBottom(), f2 = e4.getRight(), p2 = e4.getWidthHalf(), m2 = e4.getHeightHalf(), h2 = t4.getX(), g2 = t4.getY(), _ = t4.getRight(), v = t4.getX(), y = t4.getBottom(), b = t4.getRight(), x = t4.getWidthHalf(), S = t4.getHeightHalf(), C = false, w = false;
        if (r3 === a2) {
          if (i3 > o2) return n3[0] = r3, n3[1] = c2, n3[2] = a2, n3[3] = y, false;
          if (i3 < o2) return n3[0] = r3, n3[1] = d2, n3[2] = a2, n3[3] = g2, false;
        } else if (i3 === o2) {
          if (r3 > a2) return n3[0] = s2, n3[1] = i3, n3[2] = _, n3[3] = o2, false;
          if (r3 < a2) return n3[0] = l2, n3[1] = i3, n3[2] = h2, n3[3] = o2, false;
        } else {
          var T = e4.height / e4.width, E = t4.height / t4.width, D = (o2 - i3) / (a2 - r3), O = void 0, k = void 0, A = void 0, j = void 0, M = void 0, N = void 0;
          if (-T === D ? r3 > a2 ? (n3[0] = u2, n3[1] = d2, C = true) : (n3[0] = l2, n3[1] = c2, C = true) : T === D && (r3 > a2 ? (n3[0] = s2, n3[1] = c2, C = true) : (n3[0] = f2, n3[1] = d2, C = true)), -E === D ? a2 > r3 ? (n3[2] = v, n3[3] = y, w = true) : (n3[2] = _, n3[3] = g2, w = true) : E === D && (a2 > r3 ? (n3[2] = h2, n3[3] = g2, w = true) : (n3[2] = b, n3[3] = y, w = true)), C && w) return false;
          if (r3 > a2 ? i3 > o2 ? (O = this.getCardinalDirection(T, D, 4), k = this.getCardinalDirection(E, D, 2)) : (O = this.getCardinalDirection(-T, D, 3), k = this.getCardinalDirection(-E, D, 1)) : i3 > o2 ? (O = this.getCardinalDirection(-T, D, 1), k = this.getCardinalDirection(-E, D, 3)) : (O = this.getCardinalDirection(T, D, 2), k = this.getCardinalDirection(E, D, 4)), !C) switch (O) {
            case 1:
              j = c2, A = r3 + -m2 / D, n3[0] = A, n3[1] = j;
              break;
            case 2:
              A = f2, j = i3 + p2 * D, n3[0] = A, n3[1] = j;
              break;
            case 3:
              j = d2, A = r3 + m2 / D, n3[0] = A, n3[1] = j;
              break;
            case 4:
              A = u2, j = i3 + -p2 * D, n3[0] = A, n3[1] = j;
              break;
          }
          if (!w) switch (k) {
            case 1:
              N = g2, M = a2 + -S / D, n3[2] = M, n3[3] = N;
              break;
            case 2:
              M = b, N = o2 + x * D, n3[2] = M, n3[3] = N;
              break;
            case 3:
              N = y, M = a2 + S / D, n3[2] = M, n3[3] = N;
              break;
            case 4:
              M = v, N = o2 + -x * D, n3[2] = M, n3[3] = N;
              break;
          }
        }
        return false;
      }, i2.getCardinalDirection = function(e4, t4, n3) {
        return e4 > t4 ? n3 : 1 + n3 % 4;
      }, i2.getIntersection = function(e4, t4, n3, i3) {
        if (i3 == null) return this.getIntersection2(e4, t4, n3);
        var a2 = e4.x, o2 = e4.y, s2 = t4.x, c2 = t4.y, l2 = n3.x, u2 = n3.y, d2 = i3.x, f2 = i3.y, p2 = void 0, m2 = void 0, h2 = void 0, g2 = void 0, _ = void 0, v = void 0, y = void 0, b = void 0, x = void 0;
        return h2 = c2 - o2, _ = a2 - s2, y = s2 * o2 - a2 * c2, g2 = f2 - u2, v = l2 - d2, b = d2 * u2 - l2 * f2, x = h2 * v - g2 * _, x === 0 ? null : (p2 = (_ * b - v * y) / x, m2 = (g2 * y - h2 * b) / x, new r2(p2, m2));
      }, i2.angleOfVector = function(e4, t4, n3, r3) {
        var i3 = void 0;
        return e4 === n3 ? i3 = r3 < t4 ? this.ONE_AND_HALF_PI : this.HALF_PI : (i3 = Math.atan((r3 - t4) / (n3 - e4)), n3 < e4 ? i3 += Math.PI : r3 < t4 && (i3 += this.TWO_PI)), i3;
      }, i2.doIntersect = function(e4, t4, n3, r3) {
        var i3 = e4.x, a2 = e4.y, o2 = t4.x, s2 = t4.y, c2 = n3.x, l2 = n3.y, u2 = r3.x, d2 = r3.y, f2 = (o2 - i3) * (d2 - l2) - (u2 - c2) * (s2 - a2);
        if (f2 === 0) return false;
        var p2 = ((d2 - l2) * (u2 - i3) + (c2 - u2) * (d2 - a2)) / f2, m2 = ((a2 - s2) * (u2 - i3) + (o2 - i3) * (d2 - a2)) / f2;
        return 0 < p2 && p2 < 1 && 0 < m2 && m2 < 1;
      }, i2.HALF_PI = 0.5 * Math.PI, i2.ONE_AND_HALF_PI = 1.5 * Math.PI, i2.TWO_PI = 2 * Math.PI, i2.THREE_PI = 3 * Math.PI, e3.exports = i2;
    }), (function(e3, t3, n2) {
      function r2() {
      }
      r2.sign = function(e4) {
        return e4 > 0 ? 1 : e4 < 0 ? -1 : 0;
      }, r2.floor = function(e4) {
        return e4 < 0 ? Math.ceil(e4) : Math.floor(e4);
      }, r2.ceil = function(e4) {
        return e4 < 0 ? Math.floor(e4) : Math.ceil(e4);
      }, e3.exports = r2;
    }), (function(e3, t3, n2) {
      function r2() {
      }
      r2.MAX_VALUE = 2147483647, r2.MIN_VALUE = -2147483648, e3.exports = r2;
    }), (function(e3, t3, n2) {
      var r2 = /* @__PURE__ */ (function() {
        function e4(e5, t4) {
          for (var n3 = 0; n3 < t4.length; n3++) {
            var r3 = t4[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e5, r3.key, r3);
          }
        }
        return function(t4, n3, r3) {
          return n3 && e4(t4.prototype, n3), r3 && e4(t4, r3), t4;
        };
      })();
      function i2(e4, t4) {
        if (!(e4 instanceof t4)) throw TypeError(`Cannot call a class as a function`);
      }
      var a2 = function(e4) {
        return { value: e4, next: null, prev: null };
      }, o2 = function(e4, t4, n3, r3) {
        return e4 === null ? r3.head = t4 : e4.next = t4, n3 === null ? r3.tail = t4 : n3.prev = t4, t4.prev = e4, t4.next = n3, r3.length++, t4;
      }, s2 = function(e4, t4) {
        var n3 = e4.prev, r3 = e4.next;
        return n3 === null ? t4.head = r3 : n3.next = r3, r3 === null ? t4.tail = n3 : r3.prev = n3, e4.prev = e4.next = null, t4.length--, e4;
      };
      e3.exports = (function() {
        function e4(t4) {
          var n3 = this;
          i2(this, e4), this.length = 0, this.head = null, this.tail = null, t4 == null ? void 0 : t4.forEach(function(e5) {
            return n3.push(e5);
          });
        }
        return r2(e4, [{ key: `size`, value: function() {
          return this.length;
        } }, { key: `insertBefore`, value: function(e5, t4) {
          return o2(t4.prev, a2(e5), t4, this);
        } }, { key: `insertAfter`, value: function(e5, t4) {
          return o2(t4, a2(e5), t4.next, this);
        } }, { key: `insertNodeBefore`, value: function(e5, t4) {
          return o2(t4.prev, e5, t4, this);
        } }, { key: `insertNodeAfter`, value: function(e5, t4) {
          return o2(t4, e5, t4.next, this);
        } }, { key: `push`, value: function(e5) {
          return o2(this.tail, a2(e5), null, this);
        } }, { key: `unshift`, value: function(e5) {
          return o2(null, a2(e5), this.head, this);
        } }, { key: `remove`, value: function(e5) {
          return s2(e5, this);
        } }, { key: `pop`, value: function() {
          return s2(this.tail, this).value;
        } }, { key: `popNode`, value: function() {
          return s2(this.tail, this);
        } }, { key: `shift`, value: function() {
          return s2(this.head, this).value;
        } }, { key: `shiftNode`, value: function() {
          return s2(this.head, this);
        } }, { key: `get_object_at`, value: function(e5) {
          if (e5 <= this.length()) {
            for (var t4 = 1, n3 = this.head; t4 < e5; ) n3 = n3.next, t4++;
            return n3.value;
          }
        } }, { key: `set_object_at`, value: function(e5, t4) {
          if (e5 <= this.length()) {
            for (var n3 = 1, r3 = this.head; n3 < e5; ) r3 = r3.next, n3++;
            r3.value = t4;
          }
        } }]), e4;
      })();
    }), (function(e3, t3, n2) {
      function r2(e4, t4, n3) {
        this.x = null, this.y = null, e4 == null && t4 == null && n3 == null ? (this.x = 0, this.y = 0) : typeof e4 == `number` && typeof t4 == `number` && n3 == null ? (this.x = e4, this.y = t4) : e4.constructor.name == `Point` && t4 == null && n3 == null && (n3 = e4, this.x = n3.x, this.y = n3.y);
      }
      r2.prototype.getX = function() {
        return this.x;
      }, r2.prototype.getY = function() {
        return this.y;
      }, r2.prototype.getLocation = function() {
        return new r2(this.x, this.y);
      }, r2.prototype.setLocation = function(e4, t4, n3) {
        e4.constructor.name == `Point` && t4 == null && n3 == null ? (n3 = e4, this.setLocation(n3.x, n3.y)) : typeof e4 == `number` && typeof t4 == `number` && n3 == null && (parseInt(e4) == e4 && parseInt(t4) == t4 ? this.move(e4, t4) : (this.x = Math.floor(e4 + 0.5), this.y = Math.floor(t4 + 0.5)));
      }, r2.prototype.move = function(e4, t4) {
        this.x = e4, this.y = t4;
      }, r2.prototype.translate = function(e4, t4) {
        this.x += e4, this.y += t4;
      }, r2.prototype.equals = function(e4) {
        if (e4.constructor.name == `Point`) {
          var t4 = e4;
          return this.x == t4.x && this.y == t4.y;
        }
        return this == e4;
      }, r2.prototype.toString = function() {
        return new r2().constructor.name + `[x=` + this.x + `,y=` + this.y + `]`;
      }, e3.exports = r2;
    }), (function(e3, t3, n2) {
      function r2(e4, t4, n3, r3) {
        this.x = 0, this.y = 0, this.width = 0, this.height = 0, e4 != null && t4 != null && n3 != null && r3 != null && (this.x = e4, this.y = t4, this.width = n3, this.height = r3);
      }
      r2.prototype.getX = function() {
        return this.x;
      }, r2.prototype.setX = function(e4) {
        this.x = e4;
      }, r2.prototype.getY = function() {
        return this.y;
      }, r2.prototype.setY = function(e4) {
        this.y = e4;
      }, r2.prototype.getWidth = function() {
        return this.width;
      }, r2.prototype.setWidth = function(e4) {
        this.width = e4;
      }, r2.prototype.getHeight = function() {
        return this.height;
      }, r2.prototype.setHeight = function(e4) {
        this.height = e4;
      }, r2.prototype.getRight = function() {
        return this.x + this.width;
      }, r2.prototype.getBottom = function() {
        return this.y + this.height;
      }, r2.prototype.intersects = function(e4) {
        return !(this.getRight() < e4.x || this.getBottom() < e4.y || e4.getRight() < this.x || e4.getBottom() < this.y);
      }, r2.prototype.getCenterX = function() {
        return this.x + this.width / 2;
      }, r2.prototype.getMinX = function() {
        return this.getX();
      }, r2.prototype.getMaxX = function() {
        return this.getX() + this.width;
      }, r2.prototype.getCenterY = function() {
        return this.y + this.height / 2;
      }, r2.prototype.getMinY = function() {
        return this.getY();
      }, r2.prototype.getMaxY = function() {
        return this.getY() + this.height;
      }, r2.prototype.getWidthHalf = function() {
        return this.width / 2;
      }, r2.prototype.getHeightHalf = function() {
        return this.height / 2;
      }, e3.exports = r2;
    }), (function(e3, t3, n2) {
      var r2 = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e4) {
        return typeof e4;
      } : function(e4) {
        return e4 && typeof Symbol == `function` && e4.constructor === Symbol && e4 !== Symbol.prototype ? `symbol` : typeof e4;
      };
      function i2() {
      }
      i2.lastID = 0, i2.createID = function(e4) {
        return i2.isPrimitive(e4) ? e4 : e4.uniqueID == null ? (e4.uniqueID = i2.getString(), i2.lastID++, e4.uniqueID) : e4.uniqueID;
      }, i2.getString = function(e4) {
        return e4 ?? (e4 = i2.lastID), `Object#` + e4;
      }, i2.isPrimitive = function(e4) {
        var t4 = e4 === void 0 ? `undefined` : r2(e4);
        return e4 == null || t4 != `object` && t4 != `function`;
      }, e3.exports = i2;
    }), (function(e3, t3, n2) {
      function r2(e4) {
        if (Array.isArray(e4)) {
          for (var t4 = 0, n3 = Array(e4.length); t4 < e4.length; t4++) n3[t4] = e4[t4];
          return n3;
        } else return Array.from(e4);
      }
      var i2 = n2(0), a2 = n2(6), o2 = n2(3), s2 = n2(1), c2 = n2(5), l2 = n2(4), u2 = n2(17), d2 = n2(27);
      function f2(e4) {
        d2.call(this), this.layoutQuality = i2.QUALITY, this.createBendsAsNeeded = i2.DEFAULT_CREATE_BENDS_AS_NEEDED, this.incremental = i2.DEFAULT_INCREMENTAL, this.animationOnLayout = i2.DEFAULT_ANIMATION_ON_LAYOUT, this.animationDuringLayout = i2.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = i2.DEFAULT_ANIMATION_PERIOD, this.uniformLeafNodeSizes = i2.DEFAULT_UNIFORM_LEAF_NODE_SIZES, this.edgeToDummyNodes = /* @__PURE__ */ new Map(), this.graphManager = new a2(this), this.isLayoutFinished = false, this.isSubLayout = false, this.isRemoteUse = false, e4 != null && (this.isRemoteUse = e4);
      }
      f2.RANDOM_SEED = 1, f2.prototype = Object.create(d2.prototype), f2.prototype.getGraphManager = function() {
        return this.graphManager;
      }, f2.prototype.getAllNodes = function() {
        return this.graphManager.getAllNodes();
      }, f2.prototype.getAllEdges = function() {
        return this.graphManager.getAllEdges();
      }, f2.prototype.getAllNodesToApplyGravitation = function() {
        return this.graphManager.getAllNodesToApplyGravitation();
      }, f2.prototype.newGraphManager = function() {
        var e4 = new a2(this);
        return this.graphManager = e4, e4;
      }, f2.prototype.newGraph = function(e4) {
        return new c2(null, this.graphManager, e4);
      }, f2.prototype.newNode = function(e4) {
        return new o2(this.graphManager, e4);
      }, f2.prototype.newEdge = function(e4) {
        return new s2(null, null, e4);
      }, f2.prototype.checkLayoutSuccess = function() {
        return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
      }, f2.prototype.runLayout = function() {
        this.isLayoutFinished = false, this.tilingPreLayout && this.tilingPreLayout(), this.initParameters();
        var e4 = this.checkLayoutSuccess() ? false : this.layout();
        return i2.ANIMATE === `during` ? false : (e4 && (this.isSubLayout || this.doPostLayout()), this.tilingPostLayout && this.tilingPostLayout(), this.isLayoutFinished = true, e4);
      }, f2.prototype.doPostLayout = function() {
        this.incremental || this.transform(), this.update();
      }, f2.prototype.update2 = function() {
        if (this.createBendsAsNeeded && (this.createBendpointsFromDummyNodes(), this.graphManager.resetAllEdges()), !this.isRemoteUse) {
          for (var e4 = this.graphManager.getAllEdges(), t4 = 0; t4 < e4.length; t4++) e4[t4];
          for (var n3 = this.graphManager.getRoot().getNodes(), t4 = 0; t4 < n3.length; t4++) n3[t4];
          this.update(this.graphManager.getRoot());
        }
      }, f2.prototype.update = function(e4) {
        if (e4 == null) this.update2();
        else if (e4 instanceof o2) {
          var t4 = e4;
          if (t4.getChild() != null) for (var n3 = t4.getChild().getNodes(), r3 = 0; r3 < n3.length; r3++) update(n3[r3]);
          t4.vGraphObject != null && t4.vGraphObject.update(t4);
        } else if (e4 instanceof s2) {
          var i3 = e4;
          i3.vGraphObject != null && i3.vGraphObject.update(i3);
        } else if (e4 instanceof c2) {
          var a3 = e4;
          a3.vGraphObject != null && a3.vGraphObject.update(a3);
        }
      }, f2.prototype.initParameters = function() {
        this.isSubLayout || (this.layoutQuality = i2.QUALITY, this.animationDuringLayout = i2.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = i2.DEFAULT_ANIMATION_PERIOD, this.animationOnLayout = i2.DEFAULT_ANIMATION_ON_LAYOUT, this.incremental = i2.DEFAULT_INCREMENTAL, this.createBendsAsNeeded = i2.DEFAULT_CREATE_BENDS_AS_NEEDED, this.uniformLeafNodeSizes = i2.DEFAULT_UNIFORM_LEAF_NODE_SIZES), this.animationDuringLayout && (this.animationOnLayout = false);
      }, f2.prototype.transform = function(e4) {
        if (e4 == null) this.transform(new l2(0, 0));
        else {
          var t4 = new u2(), n3 = this.graphManager.getRoot().updateLeftTop();
          if (n3 != null) {
            t4.setWorldOrgX(e4.x), t4.setWorldOrgY(e4.y), t4.setDeviceOrgX(n3.x), t4.setDeviceOrgY(n3.y);
            for (var r3 = this.getAllNodes(), i3, a3 = 0; a3 < r3.length; a3++) i3 = r3[a3], i3.transform(t4);
          }
        }
      }, f2.prototype.positionNodesRandomly = function(e4) {
        if (e4 == null) this.positionNodesRandomly(this.getGraphManager().getRoot()), this.getGraphManager().getRoot().updateBounds(true);
        else for (var t4, n3, r3 = e4.getNodes(), i3 = 0; i3 < r3.length; i3++) t4 = r3[i3], n3 = t4.getChild(), n3 == null || n3.getNodes().length == 0 ? t4.scatter() : (this.positionNodesRandomly(n3), t4.updateBounds());
      }, f2.prototype.getFlatForest = function() {
        for (var e4 = [], t4 = true, n3 = this.graphManager.getRoot().getNodes(), i3 = true, a3 = 0; a3 < n3.length; a3++) n3[a3].getChild() != null && (i3 = false);
        if (!i3) return e4;
        var o3 = /* @__PURE__ */ new Set(), s3 = [], c3 = /* @__PURE__ */ new Map(), l3 = [];
        for (l3 = l3.concat(n3); l3.length > 0 && t4; ) {
          for (s3.push(l3[0]); s3.length > 0 && t4; ) {
            var u3 = s3[0];
            s3.splice(0, 1), o3.add(u3);
            for (var d3 = u3.getEdges(), a3 = 0; a3 < d3.length; a3++) {
              var f3 = d3[a3].getOtherEnd(u3);
              if (c3.get(u3) != f3) if (!o3.has(f3)) s3.push(f3), c3.set(f3, u3);
              else {
                t4 = false;
                break;
              }
            }
          }
          if (!t4) e4 = [];
          else {
            var p2 = [].concat(r2(o3));
            e4.push(p2);
            for (var a3 = 0; a3 < p2.length; a3++) {
              var m2 = p2[a3], h2 = l3.indexOf(m2);
              h2 > -1 && l3.splice(h2, 1);
            }
            o3 = /* @__PURE__ */ new Set(), c3 = /* @__PURE__ */ new Map();
          }
        }
        return e4;
      }, f2.prototype.createDummyNodesForBendpoints = function(e4) {
        for (var t4 = [], n3 = e4.source, r3 = this.graphManager.calcLowestCommonAncestor(e4.source, e4.target), i3 = 0; i3 < e4.bendpoints.length; i3++) {
          var a3 = this.newNode(null);
          a3.setRect(new Point(0, 0), new Dimension(1, 1)), r3.add(a3);
          var o3 = this.newEdge(null);
          this.graphManager.add(o3, n3, a3), t4.add(a3), n3 = a3;
        }
        var o3 = this.newEdge(null);
        return this.graphManager.add(o3, n3, e4.target), this.edgeToDummyNodes.set(e4, t4), e4.isInterGraph() ? this.graphManager.remove(e4) : r3.remove(e4), t4;
      }, f2.prototype.createBendpointsFromDummyNodes = function() {
        var e4 = [];
        e4 = e4.concat(this.graphManager.getAllEdges()), e4 = [].concat(r2(this.edgeToDummyNodes.keys()), e4);
        for (var t4 = 0; t4 < e4.length; t4++) {
          var n3 = e4[t4];
          if (n3.bendpoints.length > 0) {
            for (var i3 = this.edgeToDummyNodes.get(n3), a3 = 0; a3 < i3.length; a3++) {
              var o3 = i3[a3], s3 = new l2(o3.getCenterX(), o3.getCenterY()), c3 = n3.bendpoints.get(a3);
              c3.x = s3.x, c3.y = s3.y, o3.getOwner().remove(o3);
            }
            this.graphManager.add(n3, n3.source, n3.target);
          }
        }
      }, f2.transform = function(e4, t4, n3, r3) {
        if (n3 != null && r3 != null) {
          var i3 = t4;
          if (e4 <= 50) {
            var a3 = t4 / n3;
            i3 -= (t4 - a3) / 50 * (50 - e4);
          } else {
            var o3 = t4 * r3;
            i3 += (o3 - t4) / 50 * (e4 - 50);
          }
          return i3;
        } else {
          var s3, c3;
          return e4 <= 50 ? (s3 = 9 * t4 / 500, c3 = t4 / 10) : (s3 = 9 * t4 / 50, c3 = -8 * t4), s3 * e4 + c3;
        }
      }, f2.findCenterOfTree = function(e4) {
        var t4 = [];
        t4 = t4.concat(e4);
        var n3 = [], r3 = /* @__PURE__ */ new Map(), i3 = false, a3 = null;
        (t4.length == 1 || t4.length == 2) && (i3 = true, a3 = t4[0]);
        for (var o3 = 0; o3 < t4.length; o3++) {
          var s3 = t4[o3], c3 = s3.getNeighborsList().size;
          r3.set(s3, s3.getNeighborsList().size), c3 == 1 && n3.push(s3);
        }
        var l3 = [];
        for (l3 = l3.concat(n3); !i3; ) {
          var u3 = [];
          u3 = u3.concat(l3), l3 = [];
          for (var o3 = 0; o3 < t4.length; o3++) {
            var s3 = t4[o3], d3 = t4.indexOf(s3);
            d3 >= 0 && t4.splice(d3, 1), s3.getNeighborsList().forEach(function(e5) {
              if (n3.indexOf(e5) < 0) {
                var t5 = r3.get(e5) - 1;
                t5 == 1 && l3.push(e5), r3.set(e5, t5);
              }
            });
          }
          n3 = n3.concat(l3), (t4.length == 1 || t4.length == 2) && (i3 = true, a3 = t4[0]);
        }
        return a3;
      }, f2.prototype.setGraphManager = function(e4) {
        this.graphManager = e4;
      }, e3.exports = f2;
    }), (function(e3, t3, n2) {
      function r2() {
      }
      r2.seed = 1, r2.x = 0, r2.nextDouble = function() {
        return r2.x = Math.sin(r2.seed++) * 1e4, r2.x - Math.floor(r2.x);
      }, e3.exports = r2;
    }), (function(e3, t3, n2) {
      var r2 = n2(4);
      function i2(e4, t4) {
        this.lworldOrgX = 0, this.lworldOrgY = 0, this.ldeviceOrgX = 0, this.ldeviceOrgY = 0, this.lworldExtX = 1, this.lworldExtY = 1, this.ldeviceExtX = 1, this.ldeviceExtY = 1;
      }
      i2.prototype.getWorldOrgX = function() {
        return this.lworldOrgX;
      }, i2.prototype.setWorldOrgX = function(e4) {
        this.lworldOrgX = e4;
      }, i2.prototype.getWorldOrgY = function() {
        return this.lworldOrgY;
      }, i2.prototype.setWorldOrgY = function(e4) {
        this.lworldOrgY = e4;
      }, i2.prototype.getWorldExtX = function() {
        return this.lworldExtX;
      }, i2.prototype.setWorldExtX = function(e4) {
        this.lworldExtX = e4;
      }, i2.prototype.getWorldExtY = function() {
        return this.lworldExtY;
      }, i2.prototype.setWorldExtY = function(e4) {
        this.lworldExtY = e4;
      }, i2.prototype.getDeviceOrgX = function() {
        return this.ldeviceOrgX;
      }, i2.prototype.setDeviceOrgX = function(e4) {
        this.ldeviceOrgX = e4;
      }, i2.prototype.getDeviceOrgY = function() {
        return this.ldeviceOrgY;
      }, i2.prototype.setDeviceOrgY = function(e4) {
        this.ldeviceOrgY = e4;
      }, i2.prototype.getDeviceExtX = function() {
        return this.ldeviceExtX;
      }, i2.prototype.setDeviceExtX = function(e4) {
        this.ldeviceExtX = e4;
      }, i2.prototype.getDeviceExtY = function() {
        return this.ldeviceExtY;
      }, i2.prototype.setDeviceExtY = function(e4) {
        this.ldeviceExtY = e4;
      }, i2.prototype.transformX = function(e4) {
        var t4 = 0, n3 = this.lworldExtX;
        return n3 != 0 && (t4 = this.ldeviceOrgX + (e4 - this.lworldOrgX) * this.ldeviceExtX / n3), t4;
      }, i2.prototype.transformY = function(e4) {
        var t4 = 0, n3 = this.lworldExtY;
        return n3 != 0 && (t4 = this.ldeviceOrgY + (e4 - this.lworldOrgY) * this.ldeviceExtY / n3), t4;
      }, i2.prototype.inverseTransformX = function(e4) {
        var t4 = 0, n3 = this.ldeviceExtX;
        return n3 != 0 && (t4 = this.lworldOrgX + (e4 - this.ldeviceOrgX) * this.lworldExtX / n3), t4;
      }, i2.prototype.inverseTransformY = function(e4) {
        var t4 = 0, n3 = this.ldeviceExtY;
        return n3 != 0 && (t4 = this.lworldOrgY + (e4 - this.ldeviceOrgY) * this.lworldExtY / n3), t4;
      }, i2.prototype.inverseTransformPoint = function(e4) {
        return new r2(this.inverseTransformX(e4.x), this.inverseTransformY(e4.y));
      }, e3.exports = i2;
    }), (function(e3, t3, n2) {
      function r2(e4) {
        if (Array.isArray(e4)) {
          for (var t4 = 0, n3 = Array(e4.length); t4 < e4.length; t4++) n3[t4] = e4[t4];
          return n3;
        } else return Array.from(e4);
      }
      var i2 = n2(15), a2 = n2(7), o2 = n2(0), s2 = n2(8), c2 = n2(9);
      function l2() {
        i2.call(this), this.useSmartIdealEdgeLengthCalculation = a2.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.idealEdgeLength = a2.DEFAULT_EDGE_LENGTH, this.springConstant = a2.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = a2.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = a2.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = a2.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = a2.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = a2.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * a2.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = a2.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = a2.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = a2.MAX_ITERATIONS;
      }
      for (var u2 in l2.prototype = Object.create(i2.prototype), i2) l2[u2] = i2[u2];
      l2.prototype.initParameters = function() {
        i2.prototype.initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = a2.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
      }, l2.prototype.calcIdealEdgeLengths = function() {
        for (var e4, t4, n3, r3, i3, s3, c3 = this.getGraphManager().getAllEdges(), l3 = 0; l3 < c3.length; l3++) e4 = c3[l3], e4.idealLength = this.idealEdgeLength, e4.isInterGraph && (n3 = e4.getSource(), r3 = e4.getTarget(), i3 = e4.getSourceInLca().getEstimatedSize(), s3 = e4.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (e4.idealLength += i3 + s3 - 2 * o2.SIMPLE_NODE_SIZE), t4 = e4.getLca().getInclusionTreeDepth(), e4.idealLength += a2.DEFAULT_EDGE_LENGTH * a2.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (n3.getInclusionTreeDepth() + r3.getInclusionTreeDepth() - 2 * t4));
      }, l2.prototype.initSpringEmbedder = function() {
        var e4 = this.getAllNodes().length;
        this.incremental ? (e4 > a2.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = Math.max(this.coolingFactor * a2.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (e4 - a2.ADAPTATION_LOWER_NODE_LIMIT) / (a2.ADAPTATION_UPPER_NODE_LIMIT - a2.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - a2.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = a2.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (e4 > a2.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = Math.max(a2.COOLING_ADAPTATION_FACTOR, 1 - (e4 - a2.ADAPTATION_LOWER_NODE_LIMIT) / (a2.ADAPTATION_UPPER_NODE_LIMIT - a2.ADAPTATION_LOWER_NODE_LIMIT) * (1 - a2.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = a2.MAX_NODE_DISPLACEMENT), this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations), this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = this.calcRepulsionRange();
      }, l2.prototype.calcSpringForces = function() {
        for (var e4 = this.getAllEdges(), t4, n3 = 0; n3 < e4.length; n3++) t4 = e4[n3], this.calcSpringForce(t4, t4.idealLength);
      }, l2.prototype.calcRepulsionForces = function() {
        var e4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, t4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n3, r3, i3, o3, s3 = this.getAllNodes(), c3;
        if (this.useFRGridVariant) for (this.totalIterations % a2.GRID_CALCULATION_CHECK_PERIOD == 1 && e4 && this.updateGrid(), c3 = /* @__PURE__ */ new Set(), n3 = 0; n3 < s3.length; n3++) i3 = s3[n3], this.calculateRepulsionForceOfANode(i3, c3, e4, t4), c3.add(i3);
        else for (n3 = 0; n3 < s3.length; n3++) for (i3 = s3[n3], r3 = n3 + 1; r3 < s3.length; r3++) o3 = s3[r3], i3.getOwner() == o3.getOwner() && this.calcRepulsionForce(i3, o3);
      }, l2.prototype.calcGravitationalForces = function() {
        for (var e4, t4 = this.getAllNodesToApplyGravitation(), n3 = 0; n3 < t4.length; n3++) e4 = t4[n3], this.calcGravitationalForce(e4);
      }, l2.prototype.moveNodes = function() {
        for (var e4 = this.getAllNodes(), t4, n3 = 0; n3 < e4.length; n3++) t4 = e4[n3], t4.move();
      }, l2.prototype.calcSpringForce = function(e4, t4) {
        var n3 = e4.getSource(), r3 = e4.getTarget(), i3, a3, o3, s3;
        if (this.uniformLeafNodeSizes && n3.getChild() == null && r3.getChild() == null) e4.updateLengthSimple();
        else if (e4.updateLength(), e4.isOverlapingSourceAndTarget) return;
        i3 = e4.getLength(), i3 != 0 && (a3 = this.springConstant * (i3 - t4), o3 = a3 * (e4.lengthX / i3), s3 = a3 * (e4.lengthY / i3), n3.springForceX += o3, n3.springForceY += s3, r3.springForceX -= o3, r3.springForceY -= s3);
      }, l2.prototype.calcRepulsionForce = function(e4, t4) {
        var n3 = e4.getRect(), r3 = t4.getRect(), i3 = [, ,], o3 = [, , , ,], l3, u3, d2, f2, p2, m2, h2;
        if (n3.intersects(r3)) {
          s2.calcSeparationAmount(n3, r3, i3, a2.DEFAULT_EDGE_LENGTH / 2), m2 = 2 * i3[0], h2 = 2 * i3[1];
          var g2 = e4.noOfChildren * t4.noOfChildren / (e4.noOfChildren + t4.noOfChildren);
          e4.repulsionForceX -= g2 * m2, e4.repulsionForceY -= g2 * h2, t4.repulsionForceX += g2 * m2, t4.repulsionForceY += g2 * h2;
        } else this.uniformLeafNodeSizes && e4.getChild() == null && t4.getChild() == null ? (l3 = r3.getCenterX() - n3.getCenterX(), u3 = r3.getCenterY() - n3.getCenterY()) : (s2.getIntersection(n3, r3, o3), l3 = o3[2] - o3[0], u3 = o3[3] - o3[1]), Math.abs(l3) < a2.MIN_REPULSION_DIST && (l3 = c2.sign(l3) * a2.MIN_REPULSION_DIST), Math.abs(u3) < a2.MIN_REPULSION_DIST && (u3 = c2.sign(u3) * a2.MIN_REPULSION_DIST), d2 = l3 * l3 + u3 * u3, f2 = Math.sqrt(d2), p2 = this.repulsionConstant * e4.noOfChildren * t4.noOfChildren / d2, m2 = p2 * l3 / f2, h2 = p2 * u3 / f2, e4.repulsionForceX -= m2, e4.repulsionForceY -= h2, t4.repulsionForceX += m2, t4.repulsionForceY += h2;
      }, l2.prototype.calcGravitationalForce = function(e4) {
        var t4 = e4.getOwner(), n3 = (t4.getRight() + t4.getLeft()) / 2, r3 = (t4.getTop() + t4.getBottom()) / 2, i3 = e4.getCenterX() - n3, a3 = e4.getCenterY() - r3, o3 = Math.abs(i3) + e4.getWidth() / 2, s3 = Math.abs(a3) + e4.getHeight() / 2, c3;
        e4.getOwner() == this.graphManager.getRoot() ? (c3 = t4.getEstimatedSize() * this.gravityRangeFactor, (o3 > c3 || s3 > c3) && (e4.gravitationForceX = -this.gravityConstant * i3, e4.gravitationForceY = -this.gravityConstant * a3)) : (c3 = t4.getEstimatedSize() * this.compoundGravityRangeFactor, (o3 > c3 || s3 > c3) && (e4.gravitationForceX = -this.gravityConstant * i3 * this.compoundGravityConstant, e4.gravitationForceY = -this.gravityConstant * a3 * this.compoundGravityConstant));
      }, l2.prototype.isConverged = function() {
        var e4, t4 = false;
        return this.totalIterations > this.maxIterations / 3 && (t4 = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2), e4 = this.totalDisplacement < this.totalDisplacementThreshold, this.oldTotalDisplacement = this.totalDisplacement, e4 || t4;
      }, l2.prototype.animate = function() {
        this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this.animationPeriod ? (this.update(), this.notAnimatedIterations = 0) : this.notAnimatedIterations++);
      }, l2.prototype.calcNoOfChildrenForAllNodes = function() {
        for (var e4, t4 = this.graphManager.getAllNodes(), n3 = 0; n3 < t4.length; n3++) e4 = t4[n3], e4.noOfChildren = e4.getNoOfChildren();
      }, l2.prototype.calcGrid = function(e4) {
        var t4 = 0, n3 = 0;
        t4 = parseInt(Math.ceil((e4.getRight() - e4.getLeft()) / this.repulsionRange)), n3 = parseInt(Math.ceil((e4.getBottom() - e4.getTop()) / this.repulsionRange));
        for (var r3 = Array(t4), i3 = 0; i3 < t4; i3++) r3[i3] = Array(n3);
        for (var i3 = 0; i3 < t4; i3++) for (var a3 = 0; a3 < n3; a3++) r3[i3][a3] = [];
        return r3;
      }, l2.prototype.addNodeToGrid = function(e4, t4, n3) {
        var r3 = 0, i3 = 0, a3 = 0, o3 = 0;
        r3 = parseInt(Math.floor((e4.getRect().x - t4) / this.repulsionRange)), i3 = parseInt(Math.floor((e4.getRect().width + e4.getRect().x - t4) / this.repulsionRange)), a3 = parseInt(Math.floor((e4.getRect().y - n3) / this.repulsionRange)), o3 = parseInt(Math.floor((e4.getRect().height + e4.getRect().y - n3) / this.repulsionRange));
        for (var s3 = r3; s3 <= i3; s3++) for (var c3 = a3; c3 <= o3; c3++) this.grid[s3][c3].push(e4), e4.setGridCoordinates(r3, i3, a3, o3);
      }, l2.prototype.updateGrid = function() {
        var e4, t4, n3 = this.getAllNodes();
        for (this.grid = this.calcGrid(this.graphManager.getRoot()), e4 = 0; e4 < n3.length; e4++) t4 = n3[e4], this.addNodeToGrid(t4, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
      }, l2.prototype.calculateRepulsionForceOfANode = function(e4, t4, n3, i3) {
        if (this.totalIterations % a2.GRID_CALCULATION_CHECK_PERIOD == 1 && n3 || i3) {
          var o3 = /* @__PURE__ */ new Set();
          e4.surrounding = [];
          for (var s3, c3 = this.grid, l3 = e4.startX - 1; l3 < e4.finishX + 2; l3++) for (var u3 = e4.startY - 1; u3 < e4.finishY + 2; u3++) if (!(l3 < 0 || u3 < 0 || l3 >= c3.length || u3 >= c3[0].length)) {
            for (var d2 = 0; d2 < c3[l3][u3].length; d2++) if (s3 = c3[l3][u3][d2], !(e4.getOwner() != s3.getOwner() || e4 == s3) && !t4.has(s3) && !o3.has(s3)) {
              var f2 = Math.abs(e4.getCenterX() - s3.getCenterX()) - (e4.getWidth() / 2 + s3.getWidth() / 2), p2 = Math.abs(e4.getCenterY() - s3.getCenterY()) - (e4.getHeight() / 2 + s3.getHeight() / 2);
              f2 <= this.repulsionRange && p2 <= this.repulsionRange && o3.add(s3);
            }
          }
          e4.surrounding = [].concat(r2(o3));
        }
        for (l3 = 0; l3 < e4.surrounding.length; l3++) this.calcRepulsionForce(e4, e4.surrounding[l3]);
      }, l2.prototype.calcRepulsionRange = function() {
        return 0;
      }, e3.exports = l2;
    }), (function(e3, t3, n2) {
      var r2 = n2(1), i2 = n2(7);
      function a2(e4, t4, n3) {
        r2.call(this, e4, t4, n3), this.idealLength = i2.DEFAULT_EDGE_LENGTH;
      }
      for (var o2 in a2.prototype = Object.create(r2.prototype), r2) a2[o2] = r2[o2];
      e3.exports = a2;
    }), (function(e3, t3, n2) {
      var r2 = n2(3);
      function i2(e4, t4, n3, i3) {
        r2.call(this, e4, t4, n3, i3), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this.surrounding = [];
      }
      for (var a2 in i2.prototype = Object.create(r2.prototype), r2) i2[a2] = r2[a2];
      i2.prototype.setGridCoordinates = function(e4, t4, n3, r3) {
        this.startX = e4, this.finishX = t4, this.startY = n3, this.finishY = r3;
      }, e3.exports = i2;
    }), (function(e3, t3, n2) {
      function r2(e4, t4) {
        this.width = 0, this.height = 0, e4 !== null && t4 !== null && (this.height = t4, this.width = e4);
      }
      r2.prototype.getWidth = function() {
        return this.width;
      }, r2.prototype.setWidth = function(e4) {
        this.width = e4;
      }, r2.prototype.getHeight = function() {
        return this.height;
      }, r2.prototype.setHeight = function(e4) {
        this.height = e4;
      }, e3.exports = r2;
    }), (function(e3, t3, n2) {
      var r2 = n2(14);
      function i2() {
        this.map = {}, this.keys = [];
      }
      i2.prototype.put = function(e4, t4) {
        var n3 = r2.createID(e4);
        this.contains(n3) || (this.map[n3] = t4, this.keys.push(e4));
      }, i2.prototype.contains = function(e4) {
        return r2.createID(e4), this.map[e4] != null;
      }, i2.prototype.get = function(e4) {
        var t4 = r2.createID(e4);
        return this.map[t4];
      }, i2.prototype.keySet = function() {
        return this.keys;
      }, e3.exports = i2;
    }), (function(e3, t3, n2) {
      var r2 = n2(14);
      function i2() {
        this.set = {};
      }
      i2.prototype.add = function(e4) {
        var t4 = r2.createID(e4);
        this.contains(t4) || (this.set[t4] = e4);
      }, i2.prototype.remove = function(e4) {
        delete this.set[r2.createID(e4)];
      }, i2.prototype.clear = function() {
        this.set = {};
      }, i2.prototype.contains = function(e4) {
        return this.set[r2.createID(e4)] == e4;
      }, i2.prototype.isEmpty = function() {
        return this.size() === 0;
      }, i2.prototype.size = function() {
        return Object.keys(this.set).length;
      }, i2.prototype.addAllTo = function(e4) {
        for (var t4 = Object.keys(this.set), n3 = t4.length, r3 = 0; r3 < n3; r3++) e4.push(this.set[t4[r3]]);
      }, i2.prototype.size = function() {
        return Object.keys(this.set).length;
      }, i2.prototype.addAll = function(e4) {
        for (var t4 = e4.length, n3 = 0; n3 < t4; n3++) {
          var r3 = e4[n3];
          this.add(r3);
        }
      }, e3.exports = i2;
    }), (function(e3, t3, n2) {
      var r2 = /* @__PURE__ */ (function() {
        function e4(e5, t4) {
          for (var n3 = 0; n3 < t4.length; n3++) {
            var r3 = t4[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e5, r3.key, r3);
          }
        }
        return function(t4, n3, r3) {
          return n3 && e4(t4.prototype, n3), r3 && e4(t4, r3), t4;
        };
      })();
      function i2(e4, t4) {
        if (!(e4 instanceof t4)) throw TypeError(`Cannot call a class as a function`);
      }
      var a2 = n2(11);
      e3.exports = (function() {
        function e4(t4, n3) {
          i2(this, e4), (n3 !== null || n3 !== void 0) && (this.compareFunction = this._defaultCompareFunction);
          var r3 = void 0;
          r3 = t4 instanceof a2 ? t4.size() : t4.length, this._quicksort(t4, 0, r3 - 1);
        }
        return r2(e4, [{ key: `_quicksort`, value: function(e5, t4, n3) {
          if (t4 < n3) {
            var r3 = this._partition(e5, t4, n3);
            this._quicksort(e5, t4, r3), this._quicksort(e5, r3 + 1, n3);
          }
        } }, { key: `_partition`, value: function(e5, t4, n3) {
          for (var r3 = this._get(e5, t4), i3 = t4, a3 = n3; ; ) {
            for (; this.compareFunction(r3, this._get(e5, a3)); ) a3--;
            for (; this.compareFunction(this._get(e5, i3), r3); ) i3++;
            if (i3 < a3) this._swap(e5, i3, a3), i3++, a3--;
            else return a3;
          }
        } }, { key: `_get`, value: function(e5, t4) {
          return e5 instanceof a2 ? e5.get_object_at(t4) : e5[t4];
        } }, { key: `_set`, value: function(e5, t4, n3) {
          e5 instanceof a2 ? e5.set_object_at(t4, n3) : e5[t4] = n3;
        } }, { key: `_swap`, value: function(e5, t4, n3) {
          var r3 = this._get(e5, t4);
          this._set(e5, t4, this._get(e5, n3)), this._set(e5, n3, r3);
        } }, { key: `_defaultCompareFunction`, value: function(e5, t4) {
          return t4 > e5;
        } }]), e4;
      })();
    }), (function(e3, t3, n2) {
      var r2 = /* @__PURE__ */ (function() {
        function e4(e5, t4) {
          for (var n3 = 0; n3 < t4.length; n3++) {
            var r3 = t4[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e5, r3.key, r3);
          }
        }
        return function(t4, n3, r3) {
          return n3 && e4(t4.prototype, n3), r3 && e4(t4, r3), t4;
        };
      })();
      function i2(e4, t4) {
        if (!(e4 instanceof t4)) throw TypeError(`Cannot call a class as a function`);
      }
      e3.exports = (function() {
        function e4(t4, n3) {
          var r3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, a2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1, o2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1;
          i2(this, e4), this.sequence1 = t4, this.sequence2 = n3, this.match_score = r3, this.mismatch_penalty = a2, this.gap_penalty = o2, this.iMax = t4.length + 1, this.jMax = n3.length + 1, this.grid = Array(this.iMax);
          for (var s2 = 0; s2 < this.iMax; s2++) {
            this.grid[s2] = Array(this.jMax);
            for (var c2 = 0; c2 < this.jMax; c2++) this.grid[s2][c2] = 0;
          }
          this.tracebackGrid = Array(this.iMax);
          for (var l2 = 0; l2 < this.iMax; l2++) {
            this.tracebackGrid[l2] = Array(this.jMax);
            for (var u2 = 0; u2 < this.jMax; u2++) this.tracebackGrid[l2][u2] = [null, null, null];
          }
          this.alignments = [], this.score = -1, this.computeGrids();
        }
        return r2(e4, [{ key: `getScore`, value: function() {
          return this.score;
        } }, { key: `getAlignments`, value: function() {
          return this.alignments;
        } }, { key: `computeGrids`, value: function() {
          for (var e5 = 1; e5 < this.jMax; e5++) this.grid[0][e5] = this.grid[0][e5 - 1] + this.gap_penalty, this.tracebackGrid[0][e5] = [false, false, true];
          for (var t4 = 1; t4 < this.iMax; t4++) this.grid[t4][0] = this.grid[t4 - 1][0] + this.gap_penalty, this.tracebackGrid[t4][0] = [false, true, false];
          for (var n3 = 1; n3 < this.iMax; n3++) for (var r3 = 1; r3 < this.jMax; r3++) {
            var i3 = void 0;
            i3 = this.sequence1[n3 - 1] === this.sequence2[r3 - 1] ? this.grid[n3 - 1][r3 - 1] + this.match_score : this.grid[n3 - 1][r3 - 1] + this.mismatch_penalty;
            var a2 = this.grid[n3 - 1][r3] + this.gap_penalty, o2 = this.grid[n3][r3 - 1] + this.gap_penalty, s2 = [i3, a2, o2], c2 = this.arrayAllMaxIndexes(s2);
            this.grid[n3][r3] = s2[c2[0]], this.tracebackGrid[n3][r3] = [c2.includes(0), c2.includes(1), c2.includes(2)];
          }
          this.score = this.grid[this.iMax - 1][this.jMax - 1];
        } }, { key: `alignmentTraceback`, value: function() {
          var e5 = [];
          for (e5.push({ pos: [this.sequence1.length, this.sequence2.length], seq1: ``, seq2: `` }); e5[0]; ) {
            var t4 = e5[0], n3 = this.tracebackGrid[t4.pos[0]][t4.pos[1]];
            n3[0] && e5.push({ pos: [t4.pos[0] - 1, t4.pos[1] - 1], seq1: this.sequence1[t4.pos[0] - 1] + t4.seq1, seq2: this.sequence2[t4.pos[1] - 1] + t4.seq2 }), n3[1] && e5.push({ pos: [t4.pos[0] - 1, t4.pos[1]], seq1: this.sequence1[t4.pos[0] - 1] + t4.seq1, seq2: `-` + t4.seq2 }), n3[2] && e5.push({ pos: [t4.pos[0], t4.pos[1] - 1], seq1: `-` + t4.seq1, seq2: this.sequence2[t4.pos[1] - 1] + t4.seq2 }), t4.pos[0] === 0 && t4.pos[1] === 0 && this.alignments.push({ sequence1: t4.seq1, sequence2: t4.seq2 }), e5.shift();
          }
          return this.alignments;
        } }, { key: `getAllIndexes`, value: function(e5, t4) {
          for (var n3 = [], r3 = -1; (r3 = e5.indexOf(t4, r3 + 1)) !== -1; ) n3.push(r3);
          return n3;
        } }, { key: `arrayAllMaxIndexes`, value: function(e5) {
          return this.getAllIndexes(e5, Math.max.apply(null, e5));
        } }]), e4;
      })();
    }), (function(e3, t3, n2) {
      var r2 = function() {
      };
      r2.FDLayout = n2(18), r2.FDLayoutConstants = n2(7), r2.FDLayoutEdge = n2(19), r2.FDLayoutNode = n2(20), r2.DimensionD = n2(21), r2.HashMap = n2(22), r2.HashSet = n2(23), r2.IGeometry = n2(8), r2.IMath = n2(9), r2.Integer = n2(10), r2.Point = n2(12), r2.PointD = n2(4), r2.RandomSeed = n2(16), r2.RectangleD = n2(13), r2.Transform = n2(17), r2.UniqueIDGeneretor = n2(14), r2.Quicksort = n2(24), r2.LinkedList = n2(11), r2.LGraphObject = n2(2), r2.LGraph = n2(5), r2.LEdge = n2(1), r2.LGraphManager = n2(6), r2.LNode = n2(3), r2.Layout = n2(15), r2.LayoutConstants = n2(0), r2.NeedlemanWunsch = n2(25), e3.exports = r2;
    }), (function(e3, t3, n2) {
      function r2() {
        this.listeners = [];
      }
      var i2 = r2.prototype;
      i2.addListener = function(e4, t4) {
        this.listeners.push({ event: e4, callback: t4 });
      }, i2.removeListener = function(e4, t4) {
        for (var n3 = this.listeners.length; n3 >= 0; n3--) {
          var r3 = this.listeners[n3];
          r3.event === e4 && r3.callback === t4 && this.listeners.splice(n3, 1);
        }
      }, i2.emit = function(e4, t4) {
        for (var n3 = 0; n3 < this.listeners.length; n3++) {
          var r3 = this.listeners[n3];
          e4 === r3.event && r3.callback(t4);
        }
      }, e3.exports = r2;
    })]);
  });
})), s = t(((e2, t2) => {
  (function(n2, r2) {
    typeof e2 == `object` && typeof t2 == `object` ? t2.exports = r2(o()) : typeof define == `function` && define.amd ? define([`layout-base`], r2) : typeof e2 == `object` ? e2.coseBase = r2(o()) : n2.coseBase = r2(n2.layoutBase);
  })(e2, function(e3) {
    return (function(e4) {
      var t3 = {};
      function n2(r2) {
        if (t3[r2]) return t3[r2].exports;
        var i2 = t3[r2] = { i: r2, l: false, exports: {} };
        return e4[r2].call(i2.exports, i2, i2.exports, n2), i2.l = true, i2.exports;
      }
      return n2.m = e4, n2.c = t3, n2.i = function(e5) {
        return e5;
      }, n2.d = function(e5, t4, r2) {
        n2.o(e5, t4) || Object.defineProperty(e5, t4, { configurable: false, enumerable: true, get: r2 });
      }, n2.n = function(e5) {
        var t4 = e5 && e5.__esModule ? function() {
          return e5.default;
        } : function() {
          return e5;
        };
        return n2.d(t4, `a`, t4), t4;
      }, n2.o = function(e5, t4) {
        return Object.prototype.hasOwnProperty.call(e5, t4);
      }, n2.p = ``, n2(n2.s = 7);
    })([(function(t3, n2) {
      t3.exports = e3;
    }), (function(e4, t3, n2) {
      var r2 = n2(0).FDLayoutConstants;
      function i2() {
      }
      for (var a2 in r2) i2[a2] = r2[a2];
      i2.DEFAULT_USE_MULTI_LEVEL_SCALING = false, i2.DEFAULT_RADIAL_SEPARATION = r2.DEFAULT_EDGE_LENGTH, i2.DEFAULT_COMPONENT_SEPERATION = 60, i2.TILE = true, i2.TILING_PADDING_VERTICAL = 10, i2.TILING_PADDING_HORIZONTAL = 10, i2.TREE_REDUCTION_ON_INCREMENTAL = false, e4.exports = i2;
    }), (function(e4, t3, n2) {
      var r2 = n2(0).FDLayoutEdge;
      function i2(e5, t4, n3) {
        r2.call(this, e5, t4, n3);
      }
      for (var a2 in i2.prototype = Object.create(r2.prototype), r2) i2[a2] = r2[a2];
      e4.exports = i2;
    }), (function(e4, t3, n2) {
      var r2 = n2(0).LGraph;
      function i2(e5, t4, n3) {
        r2.call(this, e5, t4, n3);
      }
      for (var a2 in i2.prototype = Object.create(r2.prototype), r2) i2[a2] = r2[a2];
      e4.exports = i2;
    }), (function(e4, t3, n2) {
      var r2 = n2(0).LGraphManager;
      function i2(e5) {
        r2.call(this, e5);
      }
      for (var a2 in i2.prototype = Object.create(r2.prototype), r2) i2[a2] = r2[a2];
      e4.exports = i2;
    }), (function(e4, t3, n2) {
      var r2 = n2(0).FDLayoutNode, i2 = n2(0).IMath;
      function a2(e5, t4, n3, i3) {
        r2.call(this, e5, t4, n3, i3);
      }
      for (var o2 in a2.prototype = Object.create(r2.prototype), r2) a2[o2] = r2[o2];
      a2.prototype.move = function() {
        var e5 = this.graphManager.getLayout();
        this.displacementX = e5.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY = e5.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren, Math.abs(this.displacementX) > e5.coolingFactor * e5.maxNodeDisplacement && (this.displacementX = e5.coolingFactor * e5.maxNodeDisplacement * i2.sign(this.displacementX)), Math.abs(this.displacementY) > e5.coolingFactor * e5.maxNodeDisplacement && (this.displacementY = e5.coolingFactor * e5.maxNodeDisplacement * i2.sign(this.displacementY)), this.child == null || this.child.getNodes().length == 0 ? this.moveBy(this.displacementX, this.displacementY) : this.propogateDisplacementToChildren(this.displacementX, this.displacementY), e5.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0;
      }, a2.prototype.propogateDisplacementToChildren = function(e5, t4) {
        for (var n3 = this.getChild().getNodes(), r3, i3 = 0; i3 < n3.length; i3++) r3 = n3[i3], r3.getChild() == null ? (r3.moveBy(e5, t4), r3.displacementX += e5, r3.displacementY += t4) : r3.propogateDisplacementToChildren(e5, t4);
      }, a2.prototype.setPred1 = function(e5) {
        this.pred1 = e5;
      }, a2.prototype.getPred1 = function() {
        return pred1;
      }, a2.prototype.getPred2 = function() {
        return pred2;
      }, a2.prototype.setNext = function(e5) {
        this.next = e5;
      }, a2.prototype.getNext = function() {
        return next;
      }, a2.prototype.setProcessed = function(e5) {
        this.processed = e5;
      }, a2.prototype.isProcessed = function() {
        return processed;
      }, e4.exports = a2;
    }), (function(e4, t3, n2) {
      var r2 = n2(0).FDLayout, i2 = n2(4), a2 = n2(3), o2 = n2(5), s2 = n2(2), c2 = n2(1), l2 = n2(0).FDLayoutConstants, u2 = n2(0).LayoutConstants, d2 = n2(0).Point, f2 = n2(0).PointD, p2 = n2(0).Layout, m2 = n2(0).Integer, h2 = n2(0).IGeometry, g2 = n2(0).LGraph, _ = n2(0).Transform;
      function v() {
        r2.call(this), this.toBeTiled = {};
      }
      for (var y in v.prototype = Object.create(r2.prototype), r2) v[y] = r2[y];
      v.prototype.newGraphManager = function() {
        var e5 = new i2(this);
        return this.graphManager = e5, e5;
      }, v.prototype.newGraph = function(e5) {
        return new a2(null, this.graphManager, e5);
      }, v.prototype.newNode = function(e5) {
        return new o2(this.graphManager, e5);
      }, v.prototype.newEdge = function(e5) {
        return new s2(null, null, e5);
      }, v.prototype.initParameters = function() {
        r2.prototype.initParameters.call(this, arguments), this.isSubLayout || (c2.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = c2.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = c2.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.springConstant = l2.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = l2.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = l2.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = l2.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = l2.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = l2.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = false, this.isGrowthFinished = false, this.coolingCycle = 0, this.maxCoolingCycle = this.maxIterations / l2.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = l2.CONVERGENCE_CHECK_PERIOD / this.maxIterations, this.coolingAdjuster = 1);
      }, v.prototype.layout = function() {
        return u2.DEFAULT_CREATE_BENDS_AS_NEEDED && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
      }, v.prototype.classicLayout = function() {
        if (this.nodesWithGravity = this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager.calcInclusionTreeDepths(), this.graphManager.getRoot().calcEstimatedSize(), this.calcIdealEdgeLengths(), this.incremental) {
          if (c2.TREE_REDUCTION_ON_INCREMENTAL) {
            this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
            var e5 = new Set(this.getAllNodes()), t4 = this.nodesWithGravity.filter(function(t5) {
              return e5.has(t5);
            });
            this.graphManager.setAllNodesToApplyGravitation(t4);
          }
        } else {
          var n3 = this.getFlatForest();
          if (n3.length > 0) this.positionNodesRadially(n3);
          else {
            this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
            var e5 = new Set(this.getAllNodes()), t4 = this.nodesWithGravity.filter(function(t5) {
              return e5.has(t5);
            });
            this.graphManager.setAllNodesToApplyGravitation(t4), this.positionNodesRandomly();
          }
        }
        return this.initSpringEmbedder(), this.runSpringEmbedder(), true;
      }, v.prototype.tick = function() {
        if (this.totalIterations++, this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished) if (this.prunedNodesAll.length > 0) this.isTreeGrowing = true;
        else return true;
        if (this.totalIterations % l2.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
          if (this.isConverged()) if (this.prunedNodesAll.length > 0) this.isTreeGrowing = true;
          else return true;
          this.coolingCycle++, this.layoutQuality == 0 ? this.coolingAdjuster = this.coolingCycle : this.layoutQuality == 1 && (this.coolingAdjuster = this.coolingCycle / 3), this.coolingFactor = Math.max(this.initialCoolingFactor - this.coolingCycle ** +(Math.log(100 * (this.initialCoolingFactor - this.finalTemperature)) / Math.log(this.maxCoolingCycle)) / 100 * this.coolingAdjuster, this.finalTemperature), this.animationPeriod = Math.ceil(this.initialAnimationPeriod * Math.sqrt(this.coolingFactor));
        }
        if (this.isTreeGrowing) {
          if (this.growTreeIterations % 10 == 0) if (this.prunedNodesAll.length > 0) {
            this.graphManager.updateBounds(), this.updateGrid(), this.growTree(this.prunedNodesAll), this.graphManager.resetAllNodesToApplyGravitation();
            var e5 = new Set(this.getAllNodes()), t4 = this.nodesWithGravity.filter(function(t5) {
              return e5.has(t5);
            });
            this.graphManager.setAllNodesToApplyGravitation(t4), this.graphManager.updateBounds(), this.updateGrid(), this.coolingFactor = l2.DEFAULT_COOLING_FACTOR_INCREMENTAL;
          } else this.isTreeGrowing = false, this.isGrowthFinished = true;
          this.growTreeIterations++;
        }
        if (this.isGrowthFinished) {
          if (this.isConverged()) return true;
          this.afterGrowthIterations % 10 == 0 && (this.graphManager.updateBounds(), this.updateGrid()), this.coolingFactor = l2.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
        }
        var n3 = !this.isTreeGrowing && !this.isGrowthFinished, r3 = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
        return this.totalDisplacement = 0, this.graphManager.updateBounds(), this.calcSpringForces(), this.calcRepulsionForces(n3, r3), this.calcGravitationalForces(), this.moveNodes(), this.animate(), false;
      }, v.prototype.getPositionsData = function() {
        for (var e5 = this.graphManager.getAllNodes(), t4 = {}, n3 = 0; n3 < e5.length; n3++) {
          var r3 = e5[n3].rect, i3 = e5[n3].id;
          t4[i3] = { id: i3, x: r3.getCenterX(), y: r3.getCenterY(), w: r3.width, h: r3.height };
        }
        return t4;
      }, v.prototype.runSpringEmbedder = function() {
        this.initialAnimationPeriod = 25, this.animationPeriod = this.initialAnimationPeriod;
        var e5 = false;
        if (l2.ANIMATE === `during`) this.emit(`layoutstarted`);
        else {
          for (; !e5; ) e5 = this.tick();
          this.graphManager.updateBounds();
        }
      }, v.prototype.calculateNodesToApplyGravitationTo = function() {
        var e5 = [], t4, n3 = this.graphManager.getGraphs(), r3 = n3.length, i3;
        for (i3 = 0; i3 < r3; i3++) t4 = n3[i3], t4.updateConnected(), t4.isConnected || (e5 = e5.concat(t4.getNodes()));
        return e5;
      }, v.prototype.createBendpoints = function() {
        var e5 = [];
        e5 = e5.concat(this.graphManager.getAllEdges());
        var t4 = /* @__PURE__ */ new Set(), n3;
        for (n3 = 0; n3 < e5.length; n3++) {
          var r3 = e5[n3];
          if (!t4.has(r3)) {
            var i3 = r3.getSource(), a3 = r3.getTarget();
            if (i3 == a3) r3.getBendpoints().push(new f2()), r3.getBendpoints().push(new f2()), this.createDummyNodesForBendpoints(r3), t4.add(r3);
            else {
              var o3 = [];
              if (o3 = o3.concat(i3.getEdgeListToNode(a3)), o3 = o3.concat(a3.getEdgeListToNode(i3)), !t4.has(o3[0])) {
                if (o3.length > 1) {
                  var s3;
                  for (s3 = 0; s3 < o3.length; s3++) {
                    var c3 = o3[s3];
                    c3.getBendpoints().push(new f2()), this.createDummyNodesForBendpoints(c3);
                  }
                }
                o3.forEach(function(e6) {
                  t4.add(e6);
                });
              }
            }
          }
          if (t4.size == e5.length) break;
        }
      }, v.prototype.positionNodesRadially = function(e5) {
        for (var t4 = new d2(0, 0), n3 = Math.ceil(Math.sqrt(e5.length)), r3 = 0, i3 = 0, a3 = 0, o3 = new f2(0, 0), s3 = 0; s3 < e5.length; s3++) {
          s3 % n3 == 0 && (a3 = 0, i3 = r3, s3 != 0 && (i3 += c2.DEFAULT_COMPONENT_SEPERATION), r3 = 0);
          var l3 = e5[s3], m3 = p2.findCenterOfTree(l3);
          t4.x = a3, t4.y = i3, o3 = v.radialLayout(l3, m3, t4), o3.y > r3 && (r3 = Math.floor(o3.y)), a3 = Math.floor(o3.x + c2.DEFAULT_COMPONENT_SEPERATION);
        }
        this.transform(new f2(u2.WORLD_CENTER_X - o3.x / 2, u2.WORLD_CENTER_Y - o3.y / 2));
      }, v.radialLayout = function(e5, t4, n3) {
        var r3 = Math.max(this.maxDiagonalInTree(e5), c2.DEFAULT_RADIAL_SEPARATION);
        v.branchRadialLayout(t4, null, 0, 359, 0, r3);
        var i3 = g2.calculateBounds(e5), a3 = new _();
        a3.setDeviceOrgX(i3.getMinX()), a3.setDeviceOrgY(i3.getMinY()), a3.setWorldOrgX(n3.x), a3.setWorldOrgY(n3.y);
        for (var o3 = 0; o3 < e5.length; o3++) e5[o3].transform(a3);
        var s3 = new f2(i3.getMaxX(), i3.getMaxY());
        return a3.inverseTransformPoint(s3);
      }, v.branchRadialLayout = function(e5, t4, n3, r3, i3, a3) {
        var o3 = (r3 - n3 + 1) / 2;
        o3 < 0 && (o3 += 180);
        var s3 = (o3 + n3) % 360 * h2.TWO_PI / 360, c3 = i3 * Math.cos(s3), l3 = i3 * Math.sin(s3);
        e5.setCenter(c3, l3);
        var u3 = [];
        u3 = u3.concat(e5.getEdges());
        var d3 = u3.length;
        t4 != null && d3--;
        for (var f3 = 0, p3 = u3.length, m3, g3 = e5.getEdgesBetween(t4); g3.length > 1; ) {
          var _2 = g3[0];
          g3.splice(0, 1);
          var y2 = u3.indexOf(_2);
          y2 >= 0 && u3.splice(y2, 1), p3--, d3--;
        }
        m3 = t4 == null ? 0 : (u3.indexOf(g3[0]) + 1) % p3;
        for (var b = Math.abs(r3 - n3) / d3, x = m3; f3 != d3; x = ++x % p3) {
          var S = u3[x].getOtherEnd(e5);
          if (S != t4) {
            var C = (n3 + f3 * b) % 360, w = (C + b) % 360;
            v.branchRadialLayout(S, e5, C, w, i3 + a3, a3), f3++;
          }
        }
      }, v.maxDiagonalInTree = function(e5) {
        for (var t4 = m2.MIN_VALUE, n3 = 0; n3 < e5.length; n3++) {
          var r3 = e5[n3].getDiagonal();
          r3 > t4 && (t4 = r3);
        }
        return t4;
      }, v.prototype.calcRepulsionRange = function() {
        return 2 * (this.level + 1) * this.idealEdgeLength;
      }, v.prototype.groupZeroDegreeMembers = function() {
        var e5 = this, t4 = {};
        this.memberGroups = {}, this.idToDummyNode = {};
        for (var n3 = [], r3 = this.graphManager.getAllNodes(), i3 = 0; i3 < r3.length; i3++) {
          var a3 = r3[i3], s3 = a3.getParent();
          this.getNodeDegreeWithChildren(a3) === 0 && (s3.id == null || !this.getToBeTiled(s3)) && n3.push(a3);
        }
        for (var i3 = 0; i3 < n3.length; i3++) {
          var a3 = n3[i3], c3 = a3.getParent().id;
          t4[c3] === void 0 && (t4[c3] = []), t4[c3] = t4[c3].concat(a3);
        }
        Object.keys(t4).forEach(function(n4) {
          if (t4[n4].length > 1) {
            var r4 = `DummyCompound_` + n4;
            e5.memberGroups[r4] = t4[n4];
            var i4 = t4[n4][0].getParent(), a4 = new o2(e5.graphManager);
            a4.id = r4, a4.paddingLeft = i4.paddingLeft || 0, a4.paddingRight = i4.paddingRight || 0, a4.paddingBottom = i4.paddingBottom || 0, a4.paddingTop = i4.paddingTop || 0, e5.idToDummyNode[r4] = a4;
            var s4 = e5.getGraphManager().add(e5.newGraph(), a4), c4 = i4.getChild();
            c4.add(a4);
            for (var l3 = 0; l3 < t4[n4].length; l3++) {
              var u3 = t4[n4][l3];
              c4.remove(u3), s4.add(u3);
            }
          }
        });
      }, v.prototype.clearCompounds = function() {
        var e5 = {}, t4 = {};
        this.performDFSOnCompounds();
        for (var n3 = 0; n3 < this.compoundOrder.length; n3++) t4[this.compoundOrder[n3].id] = this.compoundOrder[n3], e5[this.compoundOrder[n3].id] = [].concat(this.compoundOrder[n3].getChild().getNodes()), this.graphManager.remove(this.compoundOrder[n3].getChild()), this.compoundOrder[n3].child = null;
        this.graphManager.resetAllNodes(), this.tileCompoundMembers(e5, t4);
      }, v.prototype.clearZeroDegreeMembers = function() {
        var e5 = this, t4 = this.tiledZeroDegreePack = [];
        Object.keys(this.memberGroups).forEach(function(n3) {
          var r3 = e5.idToDummyNode[n3];
          t4[n3] = e5.tileNodes(e5.memberGroups[n3], r3.paddingLeft + r3.paddingRight), r3.rect.width = t4[n3].width, r3.rect.height = t4[n3].height;
        });
      }, v.prototype.repopulateCompounds = function() {
        for (var e5 = this.compoundOrder.length - 1; e5 >= 0; e5--) {
          var t4 = this.compoundOrder[e5], n3 = t4.id, r3 = t4.paddingLeft, i3 = t4.paddingTop;
          this.adjustLocations(this.tiledMemberPack[n3], t4.rect.x, t4.rect.y, r3, i3);
        }
      }, v.prototype.repopulateZeroDegreeMembers = function() {
        var e5 = this, t4 = this.tiledZeroDegreePack;
        Object.keys(t4).forEach(function(n3) {
          var r3 = e5.idToDummyNode[n3], i3 = r3.paddingLeft, a3 = r3.paddingTop;
          e5.adjustLocations(t4[n3], r3.rect.x, r3.rect.y, i3, a3);
        });
      }, v.prototype.getToBeTiled = function(e5) {
        var t4 = e5.id;
        if (this.toBeTiled[t4] != null) return this.toBeTiled[t4];
        var n3 = e5.getChild();
        if (n3 == null) return this.toBeTiled[t4] = false, false;
        for (var r3 = n3.getNodes(), i3 = 0; i3 < r3.length; i3++) {
          var a3 = r3[i3];
          if (this.getNodeDegree(a3) > 0) return this.toBeTiled[t4] = false, false;
          if (a3.getChild() == null) {
            this.toBeTiled[a3.id] = false;
            continue;
          }
          if (!this.getToBeTiled(a3)) return this.toBeTiled[t4] = false, false;
        }
        return this.toBeTiled[t4] = true, true;
      }, v.prototype.getNodeDegree = function(e5) {
        e5.id;
        for (var t4 = e5.getEdges(), n3 = 0, r3 = 0; r3 < t4.length; r3++) {
          var i3 = t4[r3];
          i3.getSource().id !== i3.getTarget().id && (n3 += 1);
        }
        return n3;
      }, v.prototype.getNodeDegreeWithChildren = function(e5) {
        var t4 = this.getNodeDegree(e5);
        if (e5.getChild() == null) return t4;
        for (var n3 = e5.getChild().getNodes(), r3 = 0; r3 < n3.length; r3++) {
          var i3 = n3[r3];
          t4 += this.getNodeDegreeWithChildren(i3);
        }
        return t4;
      }, v.prototype.performDFSOnCompounds = function() {
        this.compoundOrder = [], this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
      }, v.prototype.fillCompexOrderByDFS = function(e5) {
        for (var t4 = 0; t4 < e5.length; t4++) {
          var n3 = e5[t4];
          n3.getChild() != null && this.fillCompexOrderByDFS(n3.getChild().getNodes()), this.getToBeTiled(n3) && this.compoundOrder.push(n3);
        }
      }, v.prototype.adjustLocations = function(e5, t4, n3, r3, i3) {
        t4 += r3, n3 += i3;
        for (var a3 = t4, o3 = 0; o3 < e5.rows.length; o3++) {
          var s3 = e5.rows[o3];
          t4 = a3;
          for (var c3 = 0, l3 = 0; l3 < s3.length; l3++) {
            var u3 = s3[l3];
            u3.rect.x = t4, u3.rect.y = n3, t4 += u3.rect.width + e5.horizontalPadding, u3.rect.height > c3 && (c3 = u3.rect.height);
          }
          n3 += c3 + e5.verticalPadding;
        }
      }, v.prototype.tileCompoundMembers = function(e5, t4) {
        var n3 = this;
        this.tiledMemberPack = [], Object.keys(e5).forEach(function(r3) {
          var i3 = t4[r3];
          n3.tiledMemberPack[r3] = n3.tileNodes(e5[r3], i3.paddingLeft + i3.paddingRight), i3.rect.width = n3.tiledMemberPack[r3].width, i3.rect.height = n3.tiledMemberPack[r3].height;
        });
      }, v.prototype.tileNodes = function(e5, t4) {
        var n3 = { rows: [], rowWidth: [], rowHeight: [], width: 0, height: t4, verticalPadding: c2.TILING_PADDING_VERTICAL, horizontalPadding: c2.TILING_PADDING_HORIZONTAL };
        e5.sort(function(e6, t5) {
          return e6.rect.width * e6.rect.height > t5.rect.width * t5.rect.height ? -1 : e6.rect.width * e6.rect.height < t5.rect.width * t5.rect.height ? 1 : 0;
        });
        for (var r3 = 0; r3 < e5.length; r3++) {
          var i3 = e5[r3];
          n3.rows.length == 0 ? this.insertNodeToRow(n3, i3, 0, t4) : this.canAddHorizontal(n3, i3.rect.width, i3.rect.height) ? this.insertNodeToRow(n3, i3, this.getShortestRowIndex(n3), t4) : this.insertNodeToRow(n3, i3, n3.rows.length, t4), this.shiftToLastRow(n3);
        }
        return n3;
      }, v.prototype.insertNodeToRow = function(e5, t4, n3, r3) {
        var i3 = r3;
        n3 == e5.rows.length && (e5.rows.push([]), e5.rowWidth.push(i3), e5.rowHeight.push(0));
        var a3 = e5.rowWidth[n3] + t4.rect.width;
        e5.rows[n3].length > 0 && (a3 += e5.horizontalPadding), e5.rowWidth[n3] = a3, e5.width < a3 && (e5.width = a3);
        var o3 = t4.rect.height;
        n3 > 0 && (o3 += e5.verticalPadding);
        var s3 = 0;
        o3 > e5.rowHeight[n3] && (s3 = e5.rowHeight[n3], e5.rowHeight[n3] = o3, s3 = e5.rowHeight[n3] - s3), e5.height += s3, e5.rows[n3].push(t4);
      }, v.prototype.getShortestRowIndex = function(e5) {
        for (var t4 = -1, n3 = Number.MAX_VALUE, r3 = 0; r3 < e5.rows.length; r3++) e5.rowWidth[r3] < n3 && (t4 = r3, n3 = e5.rowWidth[r3]);
        return t4;
      }, v.prototype.getLongestRowIndex = function(e5) {
        for (var t4 = -1, n3 = Number.MIN_VALUE, r3 = 0; r3 < e5.rows.length; r3++) e5.rowWidth[r3] > n3 && (t4 = r3, n3 = e5.rowWidth[r3]);
        return t4;
      }, v.prototype.canAddHorizontal = function(e5, t4, n3) {
        var r3 = this.getShortestRowIndex(e5);
        if (r3 < 0) return true;
        var i3 = e5.rowWidth[r3];
        if (i3 + e5.horizontalPadding + t4 <= e5.width) return true;
        var a3 = 0;
        e5.rowHeight[r3] < n3 && r3 > 0 && (a3 = n3 + e5.verticalPadding - e5.rowHeight[r3]);
        var o3 = e5.width - i3 >= t4 + e5.horizontalPadding ? (e5.height + a3) / (i3 + t4 + e5.horizontalPadding) : (e5.height + a3) / e5.width;
        a3 = n3 + e5.verticalPadding;
        var s3 = e5.width < t4 ? (e5.height + a3) / t4 : (e5.height + a3) / e5.width;
        return s3 < 1 && (s3 = 1 / s3), o3 < 1 && (o3 = 1 / o3), o3 < s3;
      }, v.prototype.shiftToLastRow = function(e5) {
        var t4 = this.getLongestRowIndex(e5), n3 = e5.rowWidth.length - 1, r3 = e5.rows[t4], i3 = r3[r3.length - 1], a3 = i3.width + e5.horizontalPadding;
        if (e5.width - e5.rowWidth[n3] > a3 && t4 != n3) {
          r3.splice(-1, 1), e5.rows[n3].push(i3), e5.rowWidth[t4] = e5.rowWidth[t4] - a3, e5.rowWidth[n3] = e5.rowWidth[n3] + a3, e5.width = e5.rowWidth[instance.getLongestRowIndex(e5)];
          for (var o3 = Number.MIN_VALUE, s3 = 0; s3 < r3.length; s3++) r3[s3].height > o3 && (o3 = r3[s3].height);
          t4 > 0 && (o3 += e5.verticalPadding);
          var c3 = e5.rowHeight[t4] + e5.rowHeight[n3];
          e5.rowHeight[t4] = o3, e5.rowHeight[n3] < i3.height + e5.verticalPadding && (e5.rowHeight[n3] = i3.height + e5.verticalPadding);
          var l3 = e5.rowHeight[t4] + e5.rowHeight[n3];
          e5.height += l3 - c3, this.shiftToLastRow(e5);
        }
      }, v.prototype.tilingPreLayout = function() {
        c2.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
      }, v.prototype.tilingPostLayout = function() {
        c2.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
      }, v.prototype.reduceTrees = function() {
        for (var e5 = [], t4 = true, n3; t4; ) {
          var r3 = this.graphManager.getAllNodes(), i3 = [];
          t4 = false;
          for (var a3 = 0; a3 < r3.length; a3++) n3 = r3[a3], n3.getEdges().length == 1 && !n3.getEdges()[0].isInterGraph && n3.getChild() == null && (i3.push([n3, n3.getEdges()[0], n3.getOwner()]), t4 = true);
          if (t4 == 1) {
            for (var o3 = [], s3 = 0; s3 < i3.length; s3++) i3[s3][0].getEdges().length == 1 && (o3.push(i3[s3]), i3[s3][0].getOwner().remove(i3[s3][0]));
            e5.push(o3), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
          }
        }
        this.prunedNodesAll = e5;
      }, v.prototype.growTree = function(e5) {
        for (var t4 = e5[e5.length - 1], n3, r3 = 0; r3 < t4.length; r3++) n3 = t4[r3], this.findPlaceforPrunedNode(n3), n3[2].add(n3[0]), n3[2].add(n3[1], n3[1].source, n3[1].target);
        e5.splice(e5.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
      }, v.prototype.findPlaceforPrunedNode = function(e5) {
        var t4, n3, r3 = e5[0];
        n3 = r3 == e5[1].source ? e5[1].target : e5[1].source;
        var i3 = n3.startX, a3 = n3.finishX, o3 = n3.startY, s3 = n3.finishY, c3 = [0, 0, 0, 0];
        if (o3 > 0) for (var u3 = i3; u3 <= a3; u3++) c3[0] += this.grid[u3][o3 - 1].length + this.grid[u3][o3].length - 1;
        if (a3 < this.grid.length - 1) for (var u3 = o3; u3 <= s3; u3++) c3[1] += this.grid[a3 + 1][u3].length + this.grid[a3][u3].length - 1;
        if (s3 < this.grid[0].length - 1) for (var u3 = i3; u3 <= a3; u3++) c3[2] += this.grid[u3][s3 + 1].length + this.grid[u3][s3].length - 1;
        if (i3 > 0) for (var u3 = o3; u3 <= s3; u3++) c3[3] += this.grid[i3 - 1][u3].length + this.grid[i3][u3].length - 1;
        for (var d3 = m2.MAX_VALUE, f3, p3, h3 = 0; h3 < c3.length; h3++) c3[h3] < d3 ? (d3 = c3[h3], f3 = 1, p3 = h3) : c3[h3] == d3 && f3++;
        if (f3 == 3 && d3 == 0) c3[0] == 0 && c3[1] == 0 && c3[2] == 0 ? t4 = 1 : c3[0] == 0 && c3[1] == 0 && c3[3] == 0 ? t4 = 0 : c3[0] == 0 && c3[2] == 0 && c3[3] == 0 ? t4 = 3 : c3[1] == 0 && c3[2] == 0 && c3[3] == 0 && (t4 = 2);
        else if (f3 == 2 && d3 == 0) {
          var g3 = Math.floor(Math.random() * 2);
          t4 = c3[0] == 0 && c3[1] == 0 ? g3 == 0 ? 0 : 1 : c3[0] == 0 && c3[2] == 0 ? g3 == 0 ? 0 : 2 : c3[0] == 0 && c3[3] == 0 ? g3 == 0 ? 0 : 3 : c3[1] == 0 && c3[2] == 0 ? g3 == 0 ? 1 : 2 : c3[1] == 0 && c3[3] == 0 ? g3 == 0 ? 1 : 3 : g3 == 0 ? 2 : 3;
        } else if (f3 == 4 && d3 == 0) {
          var g3 = Math.floor(Math.random() * 4);
          t4 = g3;
        } else t4 = p3;
        t4 == 0 ? r3.setCenter(n3.getCenterX(), n3.getCenterY() - n3.getHeight() / 2 - l2.DEFAULT_EDGE_LENGTH - r3.getHeight() / 2) : t4 == 1 ? r3.setCenter(n3.getCenterX() + n3.getWidth() / 2 + l2.DEFAULT_EDGE_LENGTH + r3.getWidth() / 2, n3.getCenterY()) : t4 == 2 ? r3.setCenter(n3.getCenterX(), n3.getCenterY() + n3.getHeight() / 2 + l2.DEFAULT_EDGE_LENGTH + r3.getHeight() / 2) : r3.setCenter(n3.getCenterX() - n3.getWidth() / 2 - l2.DEFAULT_EDGE_LENGTH - r3.getWidth() / 2, n3.getCenterY());
      }, e4.exports = v;
    }), (function(e4, t3, n2) {
      var r2 = {};
      r2.layoutBase = n2(0), r2.CoSEConstants = n2(1), r2.CoSEEdge = n2(2), r2.CoSEGraph = n2(3), r2.CoSEGraphManager = n2(4), r2.CoSELayout = n2(6), r2.CoSENode = n2(5), e4.exports = r2;
    })]);
  });
})), c = e(t(((e2, t2) => {
  (function(n2, r2) {
    typeof e2 == `object` && typeof t2 == `object` ? t2.exports = r2(s()) : typeof define == `function` && define.amd ? define([`cose-base`], r2) : typeof e2 == `object` ? e2.cytoscapeCoseBilkent = r2(s()) : n2.cytoscapeCoseBilkent = r2(n2.coseBase);
  })(e2, function(e3) {
    return (function(e4) {
      var t3 = {};
      function n2(r2) {
        if (t3[r2]) return t3[r2].exports;
        var i2 = t3[r2] = { i: r2, l: false, exports: {} };
        return e4[r2].call(i2.exports, i2, i2.exports, n2), i2.l = true, i2.exports;
      }
      return n2.m = e4, n2.c = t3, n2.i = function(e5) {
        return e5;
      }, n2.d = function(e5, t4, r2) {
        n2.o(e5, t4) || Object.defineProperty(e5, t4, { configurable: false, enumerable: true, get: r2 });
      }, n2.n = function(e5) {
        var t4 = e5 && e5.__esModule ? function() {
          return e5.default;
        } : function() {
          return e5;
        };
        return n2.d(t4, `a`, t4), t4;
      }, n2.o = function(e5, t4) {
        return Object.prototype.hasOwnProperty.call(e5, t4);
      }, n2.p = ``, n2(n2.s = 1);
    })([(function(t3, n2) {
      t3.exports = e3;
    }), (function(e4, t3, n2) {
      var r2 = n2(0).layoutBase.LayoutConstants, i2 = n2(0).layoutBase.FDLayoutConstants, a2 = n2(0).CoSEConstants, o2 = n2(0).CoSELayout, s2 = n2(0).CoSENode, c2 = n2(0).layoutBase.PointD, l2 = n2(0).layoutBase.DimensionD, u2 = { ready: function() {
      }, stop: function() {
      }, quality: `default`, nodeDimensionsIncludeLabels: false, refresh: 30, fit: true, padding: 10, randomize: true, nodeRepulsion: 4500, idealEdgeLength: 50, edgeElasticity: 0.45, nestingFactor: 0.1, gravity: 0.25, numIter: 2500, tile: true, animate: `end`, animationDuration: 500, tilingPaddingVertical: 10, tilingPaddingHorizontal: 10, gravityRangeCompound: 1.5, gravityCompound: 1, gravityRange: 3.8, initialEnergyOnIncremental: 0.5 };
      function d2(e5, t4) {
        var n3 = {};
        for (var r3 in e5) n3[r3] = e5[r3];
        for (var r3 in t4) n3[r3] = t4[r3];
        return n3;
      }
      function f2(e5) {
        this.options = d2(u2, e5), p2(this.options);
      }
      var p2 = function(e5) {
        e5.nodeRepulsion != null && (a2.DEFAULT_REPULSION_STRENGTH = i2.DEFAULT_REPULSION_STRENGTH = e5.nodeRepulsion), e5.idealEdgeLength != null && (a2.DEFAULT_EDGE_LENGTH = i2.DEFAULT_EDGE_LENGTH = e5.idealEdgeLength), e5.edgeElasticity != null && (a2.DEFAULT_SPRING_STRENGTH = i2.DEFAULT_SPRING_STRENGTH = e5.edgeElasticity), e5.nestingFactor != null && (a2.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = i2.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = e5.nestingFactor), e5.gravity != null && (a2.DEFAULT_GRAVITY_STRENGTH = i2.DEFAULT_GRAVITY_STRENGTH = e5.gravity), e5.numIter != null && (a2.MAX_ITERATIONS = i2.MAX_ITERATIONS = e5.numIter), e5.gravityRange != null && (a2.DEFAULT_GRAVITY_RANGE_FACTOR = i2.DEFAULT_GRAVITY_RANGE_FACTOR = e5.gravityRange), e5.gravityCompound != null && (a2.DEFAULT_COMPOUND_GRAVITY_STRENGTH = i2.DEFAULT_COMPOUND_GRAVITY_STRENGTH = e5.gravityCompound), e5.gravityRangeCompound != null && (a2.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = i2.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = e5.gravityRangeCompound), e5.initialEnergyOnIncremental != null && (a2.DEFAULT_COOLING_FACTOR_INCREMENTAL = i2.DEFAULT_COOLING_FACTOR_INCREMENTAL = e5.initialEnergyOnIncremental), e5.quality == `draft` ? r2.QUALITY = 0 : e5.quality == `proof` ? r2.QUALITY = 2 : r2.QUALITY = 1, a2.NODE_DIMENSIONS_INCLUDE_LABELS = i2.NODE_DIMENSIONS_INCLUDE_LABELS = r2.NODE_DIMENSIONS_INCLUDE_LABELS = e5.nodeDimensionsIncludeLabels, a2.DEFAULT_INCREMENTAL = i2.DEFAULT_INCREMENTAL = r2.DEFAULT_INCREMENTAL = !e5.randomize, a2.ANIMATE = i2.ANIMATE = r2.ANIMATE = e5.animate, a2.TILE = e5.tile, a2.TILING_PADDING_VERTICAL = typeof e5.tilingPaddingVertical == `function` ? e5.tilingPaddingVertical.call() : e5.tilingPaddingVertical, a2.TILING_PADDING_HORIZONTAL = typeof e5.tilingPaddingHorizontal == `function` ? e5.tilingPaddingHorizontal.call() : e5.tilingPaddingHorizontal;
      };
      f2.prototype.run = function() {
        var e5, t4, n3 = this.options;
        this.idToLNode = {};
        var r3 = this.layout = new o2(), i3 = this;
        i3.stopped = false, this.cy = this.options.cy, this.cy.trigger({ type: `layoutstart`, layout: this });
        var a3 = r3.newGraphManager();
        this.gm = a3;
        var s3 = this.options.eles.nodes(), c3 = this.options.eles.edges();
        this.root = a3.addRoot(), this.processChildrenList(this.root, this.getTopMostNodes(s3), r3);
        for (var l3 = 0; l3 < c3.length; l3++) {
          var u3 = c3[l3], d3 = this.idToLNode[u3.data(`source`)], f3 = this.idToLNode[u3.data(`target`)];
          if (d3 !== f3 && d3.getEdgesBetween(f3).length == 0) {
            var p3 = a3.add(r3.newEdge(), d3, f3);
            p3.id = u3.id();
          }
        }
        var m3 = function(e6, t5) {
          typeof e6 == `number` && (e6 = t5);
          var n4 = e6.data(`id`), r4 = i3.idToLNode[n4];
          return { x: r4.getRect().getCenterX(), y: r4.getRect().getCenterY() };
        }, h2 = function a4() {
          for (var o3 = function() {
            n3.fit && n3.cy.fit(n3.eles, n3.padding), e5 || (e5 = true, i3.cy.one(`layoutready`, n3.ready), i3.cy.trigger({ type: `layoutready`, layout: i3 }));
          }, s4 = i3.options.refresh, c4, l4 = 0; l4 < s4 && !c4; l4++) c4 = i3.stopped || i3.layout.tick();
          if (c4) {
            r3.checkLayoutSuccess() && !r3.isSubLayout && r3.doPostLayout(), r3.tilingPostLayout && r3.tilingPostLayout(), r3.isLayoutFinished = true, i3.options.eles.nodes().positions(m3), o3(), i3.cy.one(`layoutstop`, i3.options.stop), i3.cy.trigger({ type: `layoutstop`, layout: i3 }), t4 && cancelAnimationFrame(t4), e5 = false;
            return;
          }
          var u4 = i3.layout.getPositionsData();
          n3.eles.nodes().positions(function(e6, t5) {
            if (typeof e6 == `number` && (e6 = t5), !e6.isParent()) {
              for (var n4 = e6.id(), r4 = u4[n4], i4 = e6; r4 == null && (r4 = u4[i4.data(`parent`)] || u4[`DummyCompound_` + i4.data(`parent`)], u4[n4] = r4, i4 = i4.parent()[0], i4 != null); ) ;
              return r4 == null ? { x: e6.position(`x`), y: e6.position(`y`) } : { x: r4.x, y: r4.y };
            }
          }), o3(), t4 = requestAnimationFrame(a4);
        };
        return r3.addListener(`layoutstarted`, function() {
          i3.options.animate === `during` && (t4 = requestAnimationFrame(h2));
        }), r3.runLayout(), this.options.animate !== `during` && (i3.options.eles.nodes().not(`:parent`).layoutPositions(i3, i3.options, m3), e5 = false), this;
      }, f2.prototype.getTopMostNodes = function(e5) {
        for (var t4 = {}, n3 = 0; n3 < e5.length; n3++) t4[e5[n3].id()] = true;
        return e5.filter(function(e6, n4) {
          typeof e6 == `number` && (e6 = n4);
          for (var r3 = e6.parent()[0]; r3 != null; ) {
            if (t4[r3.id()]) return false;
            r3 = r3.parent()[0];
          }
          return true;
        });
      }, f2.prototype.processChildrenList = function(e5, t4, n3) {
        for (var r3 = t4.length, i3 = 0; i3 < r3; i3++) {
          var a3 = t4[i3], o3 = a3.children(), u3, d3 = a3.layoutDimensions({ nodeDimensionsIncludeLabels: this.options.nodeDimensionsIncludeLabels });
          if (u3 = a3.outerWidth() != null && a3.outerHeight() != null ? e5.add(new s2(n3.graphManager, new c2(a3.position(`x`) - d3.w / 2, a3.position(`y`) - d3.h / 2), new l2(parseFloat(d3.w), parseFloat(d3.h)))) : e5.add(new s2(this.graphManager)), u3.id = a3.data(`id`), u3.paddingLeft = parseInt(a3.css(`padding`)), u3.paddingTop = parseInt(a3.css(`padding`)), u3.paddingRight = parseInt(a3.css(`padding`)), u3.paddingBottom = parseInt(a3.css(`padding`)), this.options.nodeDimensionsIncludeLabels && a3.isParent()) {
            var f3 = a3.boundingBox({ includeLabels: true, includeNodes: false }).w, p3 = a3.boundingBox({ includeLabels: true, includeNodes: false }).h, m3 = a3.css(`text-halign`);
            u3.labelWidth = f3, u3.labelHeight = p3, u3.labelPos = m3;
          }
          if (this.idToLNode[a3.data(`id`)] = u3, isNaN(u3.rect.x) && (u3.rect.x = 0), isNaN(u3.rect.y) && (u3.rect.y = 0), o3 != null && o3.length > 0) {
            var h2 = n3.getGraphManager().add(n3.newGraph(), u3);
            this.processChildrenList(h2, o3, n3);
          }
        }
      }, f2.prototype.stop = function() {
        return this.stopped = true, this;
      };
      var m2 = function(e5) {
        e5(`layout`, `cose-bilkent`, f2);
      };
      typeof cytoscape < `u` && m2(cytoscape), e4.exports = m2;
    })]);
  });
}))(), 1);
a.use(c.default);
function l(e2, t2) {
  e2.forEach((e3) => {
    let n2 = { id: e3.id, labelText: e3.label, height: e3.height, width: e3.width, padding: e3.padding ?? 0 };
    Object.keys(e3).forEach((t3) => {
      [`id`, `label`, `height`, `width`, `padding`, `x`, `y`].includes(t3) || (n2[t3] = e3[t3]);
    }), t2.add({ group: `nodes`, data: n2, position: { x: e3.x ?? 0, y: e3.y ?? 0 } });
  });
}
r(l, `addNodes`);
function u(e2, t2) {
  e2.forEach((e3) => {
    let n2 = { id: e3.id, source: e3.start, target: e3.end };
    Object.keys(e3).forEach((t3) => {
      [`id`, `start`, `end`].includes(t3) || (n2[t3] = e3[t3]);
    }), t2.add({ group: `edges`, data: n2 });
  });
}
r(u, `addEdges`);
function d(e2) {
  return new Promise((t2) => {
    let r2 = i(`body`).append(`div`).attr(`id`, `cy`).attr(`style`, `display:none`), o2 = a({ container: document.getElementById(`cy`), style: [{ selector: `edge`, style: { "curve-style": `bezier` } }] });
    r2.remove(), l(e2.nodes, o2), u(e2.edges, o2), o2.nodes().forEach(function(e3) {
      e3.layoutDimensions = () => {
        let t3 = e3.data();
        return { w: t3.width, h: t3.height };
      };
    }), o2.layout({ name: `cose-bilkent`, quality: `proof`, styleEnabled: false, animate: false }).run(), o2.ready((e3) => {
      n.info(`Cytoscape ready`, e3), t2(o2);
    });
  });
}
r(d, `createCytoscapeInstance`);
function f(e2) {
  return e2.nodes().map((e3) => {
    let t2 = e3.data(), n2 = e3.position(), r2 = { id: t2.id, x: n2.x, y: n2.y };
    return Object.keys(t2).forEach((e4) => {
      e4 !== `id` && (r2[e4] = t2[e4]);
    }), r2;
  });
}
r(f, `extractPositionedNodes`);
function p(e2) {
  return e2.edges().map((e3) => {
    let t2 = e3.data(), n2 = e3._private.rscratch, r2 = { id: t2.id, source: t2.source, target: t2.target, startX: n2.startX, startY: n2.startY, midX: n2.midX, midY: n2.midY, endX: n2.endX, endY: n2.endY };
    return Object.keys(t2).forEach((e4) => {
      [`id`, `source`, `target`].includes(e4) || (r2[e4] = t2[e4]);
    }), r2;
  });
}
r(p, `extractPositionedEdges`);
async function m(e2, t2) {
  n.debug(`Starting cose-bilkent layout algorithm`);
  try {
    h(e2);
    let t3 = await d(e2), r2 = f(t3), i2 = p(t3);
    return n.debug(`Layout completed: ${r2.length} nodes, ${i2.length} edges`), { nodes: r2, edges: i2 };
  } catch (e3) {
    throw n.error(`Error in cose-bilkent layout algorithm:`, e3), e3;
  }
}
r(m, `executeCoseBilkentLayout`);
function h(e2) {
  if (!e2) throw Error(`Layout data is required`);
  if (!e2.config) throw Error(`Configuration is required in layout data`);
  if (!e2.rootNode) throw Error(`Root node is required`);
  if (!e2.nodes || !Array.isArray(e2.nodes)) throw Error(`No nodes found in layout data`);
  if (!Array.isArray(e2.edges)) throw Error(`Edges array is required in layout data`);
  return true;
}
r(h, `validateLayoutData`);
var g = r(async (e2, t2, { insertCluster: n2, insertEdge: r2, insertEdgeLabel: i2, insertMarkers: a2, insertNode: o2, log: s2, positionEdgeLabel: c2 }, { algorithm: l2 }) => {
  let u2 = {}, d2 = {}, f2 = t2.select(`g`);
  a2(f2, e2.markers, e2.type, e2.diagramId);
  let p2 = f2.insert(`g`).attr(`class`, `subgraphs`), h2 = f2.insert(`g`).attr(`class`, `edgePaths`), g2 = f2.insert(`g`).attr(`class`, `edgeLabels`), _ = f2.insert(`g`).attr(`class`, `nodes`);
  s2.debug(`Inserting nodes into DOM for dimension calculation`), await Promise.all(e2.nodes.map(async (t3) => {
    if (t3.isGroup) {
      let e3 = { ...t3 };
      d2[t3.id] = e3, u2[t3.id] = e3, await n2(p2, t3);
    } else {
      let n3 = { ...t3 };
      u2[t3.id] = n3;
      let r3 = await o2(_, t3, { config: e2.config, dir: e2.direction || `TB` }), i3 = r3.node().getBBox();
      n3.width = i3.width, n3.height = i3.height, n3.domId = r3, s2.debug(`Node ${t3.id} dimensions: ${i3.width}x${i3.height}`);
    }
  })), s2.debug(`Running cose-bilkent layout algorithm`);
  let v = await m({ ...e2, nodes: e2.nodes.map((e3) => {
    let t3 = u2[e3.id];
    return { ...e3, width: t3.width, height: t3.height };
  }) }, e2.config);
  s2.debug(`Positioning nodes based on layout results`), v.nodes.forEach((e3) => {
    let t3 = u2[e3.id];
    (t3 == null ? void 0 : t3.domId) && (t3.domId.attr(`transform`, `translate(${e3.x}, ${e3.y})`), t3.x = e3.x, t3.y = e3.y, s2.debug(`Positioned node ${t3.id} at center (${e3.x}, ${e3.y})`));
  }), v.edges.forEach((t3) => {
    let n3 = e2.edges.find((e3) => e3.id === t3.id);
    n3 && (n3.points = [{ x: t3.startX, y: t3.startY }, { x: t3.midX, y: t3.midY }, { x: t3.endX, y: t3.endY }]);
  }), s2.debug(`Inserting and positioning edges`), await Promise.all(e2.edges.map(async (t3) => {
    await i2(g2, t3);
    let n3 = u2[t3.start ?? ``], a3 = u2[t3.end ?? ``];
    if (n3 && a3) {
      let i3 = v.edges.find((e3) => e3.id === t3.id);
      if (i3) {
        s2.debug(`APA01 positionedEdge`, i3);
        let o3 = { ...t3 };
        c2(o3, r2(h2, o3, d2, e2.type, n3, a3, e2.diagramId));
      } else {
        let i4 = { ...t3, points: [{ x: n3.x || 0, y: n3.y || 0 }, { x: a3.x || 0, y: a3.y || 0 }] };
        c2(i4, r2(h2, i4, d2, e2.type, n3, a3, e2.diagramId));
      }
    }
  })), s2.debug(`Cose-bilkent rendering completed`);
}, `render`);
export {
  g as render
};
