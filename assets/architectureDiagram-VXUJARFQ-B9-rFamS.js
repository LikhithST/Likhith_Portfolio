var _a;
import { i as e, t } from "./chunk-CXUkj53v.js";
import { B as n, C as r, G as i, I as a, U as o, _ as s, a as c, b as l, d as u, v as d, y as f, z as p } from "./chunk-ABZYJK2D-ODb6qSou.js";
import { g as m, h, p as g } from "./src-D8UWkQNo.js";
import "./math-O_7OW4FW.js";
import { c as _, i as v } from "./chunk-S3R3BYOJ-D8yhV3IZ.js";
import { t as y } from "./chunk-EXTU4WIE-K1dhFJK1.js";
import "./dist-DrVb-WkD.js";
import "./identity-IHMFXfGJ.js";
import { i as b, n as x, o as S, r as C } from "./chunk-JA3XYJ7Z-By1gQAUK.js";
import "./isEmpty-Suvitui-.js";
import "./chunk-FPAJGGOC-C3gFAQ_Y.js";
import "./reduce-S4_EnTW-.js";
import "./flatten-DG1tNxhW.js";
import "./chunk-O7ZBX7Z2-Bruh2zNs.js";
import "./chunk-S6J4BHB3-DAc_Mhl7.js";
import "./chunk-LBM3YZW2-B_3MR1yX.js";
import "./chunk-76Q3JFCE-BoCXoCPi.js";
import "./chunk-T53DSG4Q-CZaMHOwT.js";
import "./chunk-LHMN2FUI-C3wDs2RB.js";
import "./chunk-FWNWRKHM-Df_W1Cti.js";
import { t as w } from "./chunk-4BX2VUAB-DvcVo9Pr.js";
import { t as T } from "./mermaid-parser.core-pDIzeYSr.js";
import { t as E } from "./cytoscape.esm-DGsSD2nE.js";
var D = t(((e2, t2) => {
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
      }, n2.p = ``, n2(n2.s = 28);
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
      var r2 = n2(2), i2 = n2(10), a2 = n2(13), o2 = n2(0), s2 = n2(16), c2 = n2(5);
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
            this.labelWidth && (this.labelPosHorizontal == `left` ? (this.rect.x -= this.labelWidth, this.setWidth(t4 + this.labelWidth)) : this.labelPosHorizontal == `center` && this.labelWidth > t4 ? (this.rect.x -= (this.labelWidth - t4) / 2, this.setWidth(this.labelWidth)) : this.labelPosHorizontal == `right` && this.setWidth(t4 + this.labelWidth)), this.labelHeight && (this.labelPosVertical == `top` ? (this.rect.y -= this.labelHeight, this.setHeight(n3 + this.labelHeight)) : this.labelPosVertical == `center` && this.labelHeight > n3 ? (this.rect.y -= (this.labelHeight - n3) / 2, this.setHeight(this.labelHeight)) : this.labelPosVertical == `bottom` && this.setHeight(n3 + this.labelHeight));
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
      var r2 = n2(0);
      function i2() {
      }
      for (var a2 in r2) i2[a2] = r2[a2];
      i2.MAX_ITERATIONS = 2500, i2.DEFAULT_EDGE_LENGTH = 50, i2.DEFAULT_SPRING_STRENGTH = 0.45, i2.DEFAULT_REPULSION_STRENGTH = 4500, i2.DEFAULT_GRAVITY_STRENGTH = 0.4, i2.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, i2.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, i2.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, i2.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = true, i2.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = true, i2.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.3, i2.COOLING_ADAPTATION_FACTOR = 0.33, i2.ADAPTATION_LOWER_NODE_LIMIT = 1e3, i2.ADAPTATION_UPPER_NODE_LIMIT = 5e3, i2.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, i2.MAX_NODE_DISPLACEMENT = i2.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3, i2.MIN_REPULSION_DIST = i2.DEFAULT_EDGE_LENGTH / 10, i2.CONVERGENCE_CHECK_PERIOD = 100, i2.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1, i2.MIN_EDGE_LENGTH = 1, i2.GRID_CALCULATION_CHECK_PERIOD = 10, e3.exports = i2;
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
      var r2 = n2(2), i2 = n2(10), a2 = n2(0), o2 = n2(7), s2 = n2(3), c2 = n2(1), l2 = n2(13), u2 = n2(12), d2 = n2(11);
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
        r2 = n2(6), this.layout = e4, this.graphs = [], this.edges = [];
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
        for (var e4, t4 = [], n3 = this.edges.length, r3 = 0; r3 < n3; r3++) e4 = this.edges[r3], this.isOneAncestorOfOther(e4.source, e4.target) && t4.push(e4);
        for (var r3 = 0; r3 < t4.length; r3++) this.remove(t4[r3]);
        return false;
      }, e3.exports = a2;
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
        var s2 = e4.getX(), c2 = e4.getY(), l2 = e4.getRight(), u2 = e4.getX(), d2 = e4.getBottom(), f2 = e4.getRight(), p2 = e4.getWidthHalf(), m2 = e4.getHeightHalf(), h2 = t4.getX(), g2 = t4.getY(), _2 = t4.getRight(), v2 = t4.getX(), y2 = t4.getBottom(), b2 = t4.getRight(), x2 = t4.getWidthHalf(), S2 = t4.getHeightHalf(), C2 = false, w2 = false;
        if (r3 === a2) {
          if (i3 > o2) return n3[0] = r3, n3[1] = c2, n3[2] = a2, n3[3] = y2, false;
          if (i3 < o2) return n3[0] = r3, n3[1] = d2, n3[2] = a2, n3[3] = g2, false;
        } else if (i3 === o2) {
          if (r3 > a2) return n3[0] = s2, n3[1] = i3, n3[2] = _2, n3[3] = o2, false;
          if (r3 < a2) return n3[0] = l2, n3[1] = i3, n3[2] = h2, n3[3] = o2, false;
        } else {
          var T2 = e4.height / e4.width, E2 = t4.height / t4.width, D2 = (o2 - i3) / (a2 - r3), O2 = void 0, k2 = void 0, A2 = void 0, j2 = void 0, M2 = void 0, N2 = void 0;
          if (-T2 === D2 ? r3 > a2 ? (n3[0] = u2, n3[1] = d2, C2 = true) : (n3[0] = l2, n3[1] = c2, C2 = true) : T2 === D2 && (r3 > a2 ? (n3[0] = s2, n3[1] = c2, C2 = true) : (n3[0] = f2, n3[1] = d2, C2 = true)), -E2 === D2 ? a2 > r3 ? (n3[2] = v2, n3[3] = y2, w2 = true) : (n3[2] = _2, n3[3] = g2, w2 = true) : E2 === D2 && (a2 > r3 ? (n3[2] = h2, n3[3] = g2, w2 = true) : (n3[2] = b2, n3[3] = y2, w2 = true)), C2 && w2) return false;
          if (r3 > a2 ? i3 > o2 ? (O2 = this.getCardinalDirection(T2, D2, 4), k2 = this.getCardinalDirection(E2, D2, 2)) : (O2 = this.getCardinalDirection(-T2, D2, 3), k2 = this.getCardinalDirection(-E2, D2, 1)) : i3 > o2 ? (O2 = this.getCardinalDirection(-T2, D2, 1), k2 = this.getCardinalDirection(-E2, D2, 3)) : (O2 = this.getCardinalDirection(T2, D2, 2), k2 = this.getCardinalDirection(E2, D2, 4)), !C2) switch (O2) {
            case 1:
              j2 = c2, A2 = r3 + -m2 / D2, n3[0] = A2, n3[1] = j2;
              break;
            case 2:
              A2 = f2, j2 = i3 + p2 * D2, n3[0] = A2, n3[1] = j2;
              break;
            case 3:
              j2 = d2, A2 = r3 + m2 / D2, n3[0] = A2, n3[1] = j2;
              break;
            case 4:
              A2 = u2, j2 = i3 + -p2 * D2, n3[0] = A2, n3[1] = j2;
              break;
          }
          if (!w2) switch (k2) {
            case 1:
              N2 = g2, M2 = a2 + -S2 / D2, n3[2] = M2, n3[3] = N2;
              break;
            case 2:
              M2 = b2, N2 = o2 + x2 * D2, n3[2] = M2, n3[3] = N2;
              break;
            case 3:
              N2 = y2, M2 = a2 + S2 / D2, n3[2] = M2, n3[3] = N2;
              break;
            case 4:
              M2 = v2, N2 = o2 + -x2 * D2, n3[2] = M2, n3[3] = N2;
              break;
          }
        }
        return false;
      }, i2.getCardinalDirection = function(e4, t4, n3) {
        return e4 > t4 ? n3 : 1 + n3 % 4;
      }, i2.getIntersection = function(e4, t4, n3, i3) {
        if (i3 == null) return this.getIntersection2(e4, t4, n3);
        var a2 = e4.x, o2 = e4.y, s2 = t4.x, c2 = t4.y, l2 = n3.x, u2 = n3.y, d2 = i3.x, f2 = i3.y, p2 = void 0, m2 = void 0, h2 = void 0, g2 = void 0, _2 = void 0, v2 = void 0, y2 = void 0, b2 = void 0, x2 = void 0;
        return h2 = c2 - o2, _2 = a2 - s2, y2 = s2 * o2 - a2 * c2, g2 = f2 - u2, v2 = l2 - d2, b2 = d2 * u2 - l2 * f2, x2 = h2 * v2 - g2 * _2, x2 === 0 ? null : (p2 = (_2 * b2 - v2 * y2) / x2, m2 = (g2 * y2 - h2 * b2) / x2, new r2(p2, m2));
      }, i2.angleOfVector = function(e4, t4, n3, r3) {
        var i3 = void 0;
        return e4 === n3 ? i3 = r3 < t4 ? this.ONE_AND_HALF_PI : this.HALF_PI : (i3 = Math.atan((r3 - t4) / (n3 - e4)), n3 < e4 ? i3 += Math.PI : r3 < t4 && (i3 += this.TWO_PI)), i3;
      }, i2.doIntersect = function(e4, t4, n3, r3) {
        var i3 = e4.x, a2 = e4.y, o2 = t4.x, s2 = t4.y, c2 = n3.x, l2 = n3.y, u2 = r3.x, d2 = r3.y, f2 = (o2 - i3) * (d2 - l2) - (u2 - c2) * (s2 - a2);
        if (f2 === 0) return false;
        var p2 = ((d2 - l2) * (u2 - i3) + (c2 - u2) * (d2 - a2)) / f2, m2 = ((a2 - s2) * (u2 - i3) + (o2 - i3) * (d2 - a2)) / f2;
        return 0 < p2 && p2 < 1 && 0 < m2 && m2 < 1;
      }, i2.findCircleLineIntersections = function(e4, t4, n3, r3, i3, a2, o2) {
        var s2 = (n3 - e4) * (n3 - e4) + (r3 - t4) * (r3 - t4), c2 = 2 * ((e4 - i3) * (n3 - e4) + (t4 - a2) * (r3 - t4)), l2 = (e4 - i3) * (e4 - i3) + (t4 - a2) * (t4 - a2) - o2 * o2;
        if (c2 * c2 - 4 * s2 * l2 >= 0) {
          var u2 = (-c2 + Math.sqrt(c2 * c2 - 4 * s2 * l2)) / (2 * s2), d2 = (-c2 - Math.sqrt(c2 * c2 - 4 * s2 * l2)) / (2 * s2);
          return u2 >= 0 && u2 <= 1 ? [u2] : d2 >= 0 && d2 <= 1 ? [d2] : null;
        } else return null;
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
      var i2 = n2(0), a2 = n2(7), o2 = n2(3), s2 = n2(1), c2 = n2(6), l2 = n2(5), u2 = n2(17), d2 = n2(29);
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
      var r2 = n2(5);
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
      var i2 = n2(15), a2 = n2(4), o2 = n2(0), s2 = n2(8), c2 = n2(9);
      function l2() {
        i2.call(this), this.useSmartIdealEdgeLengthCalculation = a2.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.gravityConstant = a2.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = a2.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = a2.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = a2.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * a2.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = a2.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = a2.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = a2.MAX_ITERATIONS;
      }
      for (var u2 in l2.prototype = Object.create(i2.prototype), i2) l2[u2] = i2[u2];
      l2.prototype.initParameters = function() {
        i2.prototype.initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = a2.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
      }, l2.prototype.calcIdealEdgeLengths = function() {
        for (var e4, t4, n3, r3, i3, s3, c3, l3 = this.getGraphManager().getAllEdges(), u3 = 0; u3 < l3.length; u3++) e4 = l3[u3], t4 = e4.idealLength, e4.isInterGraph && (r3 = e4.getSource(), i3 = e4.getTarget(), s3 = e4.getSourceInLca().getEstimatedSize(), c3 = e4.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (e4.idealLength += s3 + c3 - 2 * o2.SIMPLE_NODE_SIZE), n3 = e4.getLca().getInclusionTreeDepth(), e4.idealLength += t4 * a2.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (r3.getInclusionTreeDepth() + i3.getInclusionTreeDepth() - 2 * n3));
      }, l2.prototype.initSpringEmbedder = function() {
        var e4 = this.getAllNodes().length;
        this.incremental ? (e4 > a2.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = Math.max(this.coolingFactor * a2.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (e4 - a2.ADAPTATION_LOWER_NODE_LIMIT) / (a2.ADAPTATION_UPPER_NODE_LIMIT - a2.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - a2.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = a2.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (e4 > a2.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = Math.max(a2.COOLING_ADAPTATION_FACTOR, 1 - (e4 - a2.ADAPTATION_LOWER_NODE_LIMIT) / (a2.ADAPTATION_UPPER_NODE_LIMIT - a2.ADAPTATION_LOWER_NODE_LIMIT) * (1 - a2.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = a2.MAX_NODE_DISPLACEMENT), this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations), this.displacementThresholdPerNode = 3 * a2.DEFAULT_EDGE_LENGTH / 100, this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = this.calcRepulsionRange();
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
        i3 = e4.getLength(), i3 != 0 && (a3 = e4.edgeElasticity * (i3 - t4), o3 = a3 * (e4.lengthX / i3), s3 = a3 * (e4.lengthY / i3), n3.springForceX += o3, n3.springForceY += s3, r3.springForceX -= o3, r3.springForceY -= s3);
      }, l2.prototype.calcRepulsionForce = function(e4, t4) {
        var n3 = e4.getRect(), r3 = t4.getRect(), i3 = [, ,], o3 = [, , , ,], l3, u3, d2, f2, p2, m2, h2;
        if (n3.intersects(r3)) {
          s2.calcSeparationAmount(n3, r3, i3, a2.DEFAULT_EDGE_LENGTH / 2), m2 = 2 * i3[0], h2 = 2 * i3[1];
          var g2 = e4.noOfChildren * t4.noOfChildren / (e4.noOfChildren + t4.noOfChildren);
          e4.repulsionForceX -= g2 * m2, e4.repulsionForceY -= g2 * h2, t4.repulsionForceX += g2 * m2, t4.repulsionForceY += g2 * h2;
        } else this.uniformLeafNodeSizes && e4.getChild() == null && t4.getChild() == null ? (l3 = r3.getCenterX() - n3.getCenterX(), u3 = r3.getCenterY() - n3.getCenterY()) : (s2.getIntersection(n3, r3, o3), l3 = o3[2] - o3[0], u3 = o3[3] - o3[1]), Math.abs(l3) < a2.MIN_REPULSION_DIST && (l3 = c2.sign(l3) * a2.MIN_REPULSION_DIST), Math.abs(u3) < a2.MIN_REPULSION_DIST && (u3 = c2.sign(u3) * a2.MIN_REPULSION_DIST), d2 = l3 * l3 + u3 * u3, f2 = Math.sqrt(d2), p2 = (e4.nodeRepulsion / 2 + t4.nodeRepulsion / 2) * e4.noOfChildren * t4.noOfChildren / d2, m2 = p2 * l3 / f2, h2 = p2 * u3 / f2, e4.repulsionForceX -= m2, e4.repulsionForceY -= h2, t4.repulsionForceX += m2, t4.repulsionForceY += h2;
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
      var r2 = n2(1), i2 = n2(4);
      function a2(e4, t4, n3) {
        r2.call(this, e4, t4, n3), this.idealLength = i2.DEFAULT_EDGE_LENGTH, this.edgeElasticity = i2.DEFAULT_SPRING_STRENGTH;
      }
      for (var o2 in a2.prototype = Object.create(r2.prototype), r2) a2[o2] = r2[o2];
      e3.exports = a2;
    }), (function(e3, t3, n2) {
      var r2 = n2(3), i2 = n2(4);
      function a2(e4, t4, n3, a3) {
        r2.call(this, e4, t4, n3, a3), this.nodeRepulsion = i2.DEFAULT_REPULSION_STRENGTH, this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this.surrounding = [];
      }
      for (var o2 in a2.prototype = Object.create(r2.prototype), r2) a2[o2] = r2[o2];
      a2.prototype.setGridCoordinates = function(e4, t4, n3, r3) {
        this.startX = e4, this.finishX = t4, this.startY = n3, this.finishY = r3;
      }, e3.exports = a2;
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
      function r2() {
      }
      r2.multMat = function(e4, t4) {
        for (var n3 = [], r3 = 0; r3 < e4.length; r3++) {
          n3[r3] = [];
          for (var i2 = 0; i2 < t4[0].length; i2++) {
            n3[r3][i2] = 0;
            for (var a2 = 0; a2 < e4[0].length; a2++) n3[r3][i2] += e4[r3][a2] * t4[a2][i2];
          }
        }
        return n3;
      }, r2.transpose = function(e4) {
        for (var t4 = [], n3 = 0; n3 < e4[0].length; n3++) {
          t4[n3] = [];
          for (var r3 = 0; r3 < e4.length; r3++) t4[n3][r3] = e4[r3][n3];
        }
        return t4;
      }, r2.multCons = function(e4, t4) {
        for (var n3 = [], r3 = 0; r3 < e4.length; r3++) n3[r3] = e4[r3] * t4;
        return n3;
      }, r2.minusOp = function(e4, t4) {
        for (var n3 = [], r3 = 0; r3 < e4.length; r3++) n3[r3] = e4[r3] - t4[r3];
        return n3;
      }, r2.dotProduct = function(e4, t4) {
        for (var n3 = 0, r3 = 0; r3 < e4.length; r3++) n3 += e4[r3] * t4[r3];
        return n3;
      }, r2.mag = function(e4) {
        return Math.sqrt(this.dotProduct(e4, e4));
      }, r2.normalize = function(e4) {
        for (var t4 = [], n3 = this.mag(e4), r3 = 0; r3 < e4.length; r3++) t4[r3] = e4[r3] / n3;
        return t4;
      }, r2.multGamma = function(e4) {
        for (var t4 = [], n3 = 0, r3 = 0; r3 < e4.length; r3++) n3 += e4[r3];
        n3 *= -1 / e4.length;
        for (var i2 = 0; i2 < e4.length; i2++) t4[i2] = n3 + e4[i2];
        return t4;
      }, r2.multL = function(e4, t4, n3) {
        for (var r3 = [], i2 = [], a2 = [], o2 = 0; o2 < t4[0].length; o2++) {
          for (var s2 = 0, c2 = 0; c2 < t4.length; c2++) s2 += -0.5 * t4[c2][o2] * e4[c2];
          i2[o2] = s2;
        }
        for (var l2 = 0; l2 < n3.length; l2++) {
          for (var u2 = 0, d2 = 0; d2 < n3.length; d2++) u2 += n3[l2][d2] * i2[d2];
          a2[l2] = u2;
        }
        for (var f2 = 0; f2 < t4.length; f2++) {
          for (var p2 = 0, m2 = 0; m2 < t4[0].length; m2++) p2 += t4[f2][m2] * a2[m2];
          r3[f2] = p2;
        }
        return r3;
      }, e3.exports = r2;
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
      function r2() {
      }
      r2.svd = function(e4) {
        this.U = null, this.V = null, this.s = null, this.m = 0, this.n = 0, this.m = e4.length, this.n = e4[0].length;
        var t4 = Math.min(this.m, this.n);
        this.s = (function(e5) {
          for (var t5 = []; e5-- > 0; ) t5.push(0);
          return t5;
        })(Math.min(this.m + 1, this.n)), this.U = (function(e5) {
          return (function e6(t5) {
            if (t5.length == 0) return 0;
            for (var n4 = [], r3 = 0; r3 < t5[0]; r3++) n4.push(e6(t5.slice(1)));
            return n4;
          })(e5);
        })([this.m, t4]), this.V = (function(e5) {
          return (function e6(t5) {
            if (t5.length == 0) return 0;
            for (var n4 = [], r3 = 0; r3 < t5[0]; r3++) n4.push(e6(t5.slice(1)));
            return n4;
          })(e5);
        })([this.n, this.n]);
        for (var n3 = (function(e5) {
          for (var t5 = []; e5-- > 0; ) t5.push(0);
          return t5;
        })(this.n), i2 = (function(e5) {
          for (var t5 = []; e5-- > 0; ) t5.push(0);
          return t5;
        })(this.m), a2 = true, o2 = true, s2 = Math.min(this.m - 1, this.n), c2 = Math.max(0, Math.min(this.n - 2, this.m)), l2 = 0; l2 < Math.max(s2, c2); l2++) {
          if (l2 < s2) {
            this.s[l2] = 0;
            for (var u2 = l2; u2 < this.m; u2++) this.s[l2] = r2.hypot(this.s[l2], e4[u2][l2]);
            if (this.s[l2] !== 0) {
              e4[l2][l2] < 0 && (this.s[l2] = -this.s[l2]);
              for (var d2 = l2; d2 < this.m; d2++) e4[d2][l2] /= this.s[l2];
              e4[l2][l2] += 1;
            }
            this.s[l2] = -this.s[l2];
          }
          for (var f2 = l2 + 1; f2 < this.n; f2++) {
            if (/* @__PURE__ */ (function(e5, t5) {
              return e5 && t5;
            })(l2 < s2, this.s[l2] !== 0)) {
              for (var p2 = 0, m2 = l2; m2 < this.m; m2++) p2 += e4[m2][l2] * e4[m2][f2];
              p2 = -p2 / e4[l2][l2];
              for (var h2 = l2; h2 < this.m; h2++) e4[h2][f2] += p2 * e4[h2][l2];
            }
            n3[f2] = e4[l2][f2];
          }
          if (/* @__PURE__ */ (function(e5, t5) {
            return e5 && t5;
          })(a2, l2 < s2)) for (var g2 = l2; g2 < this.m; g2++) this.U[g2][l2] = e4[g2][l2];
          if (l2 < c2) {
            n3[l2] = 0;
            for (var _2 = l2 + 1; _2 < this.n; _2++) n3[l2] = r2.hypot(n3[l2], n3[_2]);
            if (n3[l2] !== 0) {
              n3[l2 + 1] < 0 && (n3[l2] = -n3[l2]);
              for (var v2 = l2 + 1; v2 < this.n; v2++) n3[v2] /= n3[l2];
              n3[l2 + 1] += 1;
            }
            if (n3[l2] = -n3[l2], /* @__PURE__ */ (function(e5, t5) {
              return e5 && t5;
            })(l2 + 1 < this.m, n3[l2] !== 0)) {
              for (var y2 = l2 + 1; y2 < this.m; y2++) i2[y2] = 0;
              for (var b2 = l2 + 1; b2 < this.n; b2++) for (var x2 = l2 + 1; x2 < this.m; x2++) i2[x2] += n3[b2] * e4[x2][b2];
              for (var S2 = l2 + 1; S2 < this.n; S2++) for (var C2 = -n3[S2] / n3[l2 + 1], w2 = l2 + 1; w2 < this.m; w2++) e4[w2][S2] += C2 * i2[w2];
            }
            if (o2) for (var T2 = l2 + 1; T2 < this.n; T2++) this.V[T2][l2] = n3[T2];
          }
        }
        var E2 = Math.min(this.n, this.m + 1);
        if (s2 < this.n && (this.s[s2] = e4[s2][s2]), this.m < E2 && (this.s[E2 - 1] = 0), c2 + 1 < E2 && (n3[c2] = e4[c2][E2 - 1]), n3[E2 - 1] = 0, a2) {
          for (var D2 = s2; D2 < t4; D2++) {
            for (var O2 = 0; O2 < this.m; O2++) this.U[O2][D2] = 0;
            this.U[D2][D2] = 1;
          }
          for (var k2 = s2 - 1; k2 >= 0; k2--) if (this.s[k2] !== 0) {
            for (var A2 = k2 + 1; A2 < t4; A2++) {
              for (var j2 = 0, M2 = k2; M2 < this.m; M2++) j2 += this.U[M2][k2] * this.U[M2][A2];
              j2 = -j2 / this.U[k2][k2];
              for (var N2 = k2; N2 < this.m; N2++) this.U[N2][A2] += j2 * this.U[N2][k2];
            }
            for (var P2 = k2; P2 < this.m; P2++) this.U[P2][k2] = -this.U[P2][k2];
            this.U[k2][k2] = 1 + this.U[k2][k2];
            for (var F2 = 0; F2 < k2 - 1; F2++) this.U[F2][k2] = 0;
          } else {
            for (var I2 = 0; I2 < this.m; I2++) this.U[I2][k2] = 0;
            this.U[k2][k2] = 1;
          }
        }
        if (o2) for (var L2 = this.n - 1; L2 >= 0; L2--) {
          if (/* @__PURE__ */ (function(e5, t5) {
            return e5 && t5;
          })(L2 < c2, n3[L2] !== 0)) for (var R2 = L2 + 1; R2 < t4; R2++) {
            for (var z2 = 0, B2 = L2 + 1; B2 < this.n; B2++) z2 += this.V[B2][L2] * this.V[B2][R2];
            z2 = -z2 / this.V[L2 + 1][L2];
            for (var V2 = L2 + 1; V2 < this.n; V2++) this.V[V2][R2] += z2 * this.V[V2][L2];
          }
          for (var ee2 = 0; ee2 < this.n; ee2++) this.V[ee2][L2] = 0;
          this.V[L2][L2] = 1;
        }
        for (var te2 = E2 - 1, H2 = 0, ne2 = 2 ** -52, re2 = 2 ** -966; E2 > 0; ) {
          var U2 = void 0, W2 = void 0;
          for (U2 = E2 - 2; U2 >= -1 && U2 !== -1; U2--) if (Math.abs(n3[U2]) <= re2 + ne2 * (Math.abs(this.s[U2]) + Math.abs(this.s[U2 + 1]))) {
            n3[U2] = 0;
            break;
          }
          if (U2 === E2 - 2) W2 = 4;
          else {
            var G2 = void 0;
            for (G2 = E2 - 1; G2 >= U2 && G2 !== U2; G2--) {
              var ie2 = (G2 === E2 ? 0 : Math.abs(n3[G2])) + (G2 === U2 + 1 ? 0 : Math.abs(n3[G2 - 1]));
              if (Math.abs(this.s[G2]) <= re2 + ne2 * ie2) {
                this.s[G2] = 0;
                break;
              }
            }
            G2 === U2 ? W2 = 3 : G2 === E2 - 1 ? W2 = 1 : (W2 = 2, U2 = G2);
          }
          switch (U2++, W2) {
            case 1:
              var K2 = n3[E2 - 2];
              n3[E2 - 2] = 0;
              for (var q2 = E2 - 2; q2 >= U2; q2--) {
                var J2 = r2.hypot(this.s[q2], K2), Y2 = this.s[q2] / J2, ae2 = K2 / J2;
                if (this.s[q2] = J2, q2 !== U2 && (K2 = -ae2 * n3[q2 - 1], n3[q2 - 1] = Y2 * n3[q2 - 1]), o2) for (var X2 = 0; X2 < this.n; X2++) J2 = Y2 * this.V[X2][q2] + ae2 * this.V[X2][E2 - 1], this.V[X2][E2 - 1] = -ae2 * this.V[X2][q2] + Y2 * this.V[X2][E2 - 1], this.V[X2][q2] = J2;
              }
              break;
            case 2:
              var oe2 = n3[U2 - 1];
              n3[U2 - 1] = 0;
              for (var Z2 = U2; Z2 < E2; Z2++) {
                var se2 = r2.hypot(this.s[Z2], oe2), ce2 = this.s[Z2] / se2, le2 = oe2 / se2;
                if (this.s[Z2] = se2, oe2 = -le2 * n3[Z2], n3[Z2] = ce2 * n3[Z2], a2) for (var ue2 = 0; ue2 < this.m; ue2++) se2 = ce2 * this.U[ue2][Z2] + le2 * this.U[ue2][U2 - 1], this.U[ue2][U2 - 1] = -le2 * this.U[ue2][Z2] + ce2 * this.U[ue2][U2 - 1], this.U[ue2][Z2] = se2;
              }
              break;
            case 3:
              var de2 = Math.max(Math.max(Math.max(Math.max(Math.abs(this.s[E2 - 1]), Math.abs(this.s[E2 - 2])), Math.abs(n3[E2 - 2])), Math.abs(this.s[U2])), Math.abs(n3[U2])), fe2 = this.s[E2 - 1] / de2, pe2 = this.s[E2 - 2] / de2, me2 = n3[E2 - 2] / de2, he2 = this.s[U2] / de2, ge = n3[U2] / de2, _e = ((pe2 + fe2) * (pe2 - fe2) + me2 * me2) / 2, ve = fe2 * me2 * (fe2 * me2), ye = 0;
              /* @__PURE__ */ (function(e5, t5) {
                return e5 || t5;
              })(_e !== 0, ve !== 0) && (ye = Math.sqrt(_e * _e + ve), _e < 0 && (ye = -ye), ye = ve / (_e + ye));
              for (var be = (he2 + fe2) * (he2 - fe2) + ye, xe = he2 * ge, Q = U2; Q < E2 - 1; Q++) {
                var $ = r2.hypot(be, xe), Se = be / $, Ce = xe / $;
                if (Q !== U2 && (n3[Q - 1] = $), be = Se * this.s[Q] + Ce * n3[Q], n3[Q] = Se * n3[Q] - Ce * this.s[Q], xe = Ce * this.s[Q + 1], this.s[Q + 1] = Se * this.s[Q + 1], o2) for (var we = 0; we < this.n; we++) $ = Se * this.V[we][Q] + Ce * this.V[we][Q + 1], this.V[we][Q + 1] = -Ce * this.V[we][Q] + Se * this.V[we][Q + 1], this.V[we][Q] = $;
                if ($ = r2.hypot(be, xe), Se = be / $, Ce = xe / $, this.s[Q] = $, be = Se * n3[Q] + Ce * this.s[Q + 1], this.s[Q + 1] = -Ce * n3[Q] + Se * this.s[Q + 1], xe = Ce * n3[Q + 1], n3[Q + 1] = Se * n3[Q + 1], a2 && Q < this.m - 1) for (var Te = 0; Te < this.m; Te++) $ = Se * this.U[Te][Q] + Ce * this.U[Te][Q + 1], this.U[Te][Q + 1] = -Ce * this.U[Te][Q] + Se * this.U[Te][Q + 1], this.U[Te][Q] = $;
              }
              n3[E2 - 2] = be, H2 += 1;
              break;
            case 4:
              if (this.s[U2] <= 0 && (this.s[U2] = this.s[U2] < 0 ? -this.s[U2] : 0, o2)) for (var Ee = 0; Ee <= te2; Ee++) this.V[Ee][U2] = -this.V[Ee][U2];
              for (; U2 < te2 && !(this.s[U2] >= this.s[U2 + 1]); ) {
                var De = this.s[U2];
                if (this.s[U2] = this.s[U2 + 1], this.s[U2 + 1] = De, o2 && U2 < this.n - 1) for (var Oe = 0; Oe < this.n; Oe++) De = this.V[Oe][U2 + 1], this.V[Oe][U2 + 1] = this.V[Oe][U2], this.V[Oe][U2] = De;
                if (a2 && U2 < this.m - 1) for (var ke = 0; ke < this.m; ke++) De = this.U[ke][U2 + 1], this.U[ke][U2 + 1] = this.U[ke][U2], this.U[ke][U2] = De;
                U2++;
              }
              H2 = 0, E2--;
              break;
          }
        }
        return { U: this.U, V: this.V, S: this.s };
      }, r2.hypot = function(e4, t4) {
        var n3 = void 0;
        return Math.abs(e4) > Math.abs(t4) ? (n3 = t4 / e4, n3 = Math.abs(e4) * Math.sqrt(1 + n3 * n3)) : t4 == 0 ? n3 = 0 : (n3 = e4 / t4, n3 = Math.abs(t4) * Math.sqrt(1 + n3 * n3)), n3;
      }, e3.exports = r2;
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
      r2.FDLayout = n2(18), r2.FDLayoutConstants = n2(4), r2.FDLayoutEdge = n2(19), r2.FDLayoutNode = n2(20), r2.DimensionD = n2(21), r2.HashMap = n2(22), r2.HashSet = n2(23), r2.IGeometry = n2(8), r2.IMath = n2(9), r2.Integer = n2(10), r2.Point = n2(12), r2.PointD = n2(5), r2.RandomSeed = n2(16), r2.RectangleD = n2(13), r2.Transform = n2(17), r2.UniqueIDGeneretor = n2(14), r2.Quicksort = n2(25), r2.LinkedList = n2(11), r2.LGraphObject = n2(2), r2.LGraph = n2(6), r2.LEdge = n2(1), r2.LGraphManager = n2(7), r2.LNode = n2(3), r2.Layout = n2(15), r2.LayoutConstants = n2(0), r2.NeedlemanWunsch = n2(27), r2.Matrix = n2(24), r2.SVD = n2(26), e3.exports = r2;
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
})), O = t(((e2, t2) => {
  (function(n2, r2) {
    typeof e2 == `object` && typeof t2 == `object` ? t2.exports = r2(D()) : typeof define == `function` && define.amd ? define([`layout-base`], r2) : typeof e2 == `object` ? e2.coseBase = r2(D()) : n2.coseBase = r2(n2.layoutBase);
  })(e2, function(e3) {
    return (() => {
      var t3 = { 45: ((e4, t4, n3) => {
        var r3 = {};
        r3.layoutBase = n3(551), r3.CoSEConstants = n3(806), r3.CoSEEdge = n3(767), r3.CoSEGraph = n3(880), r3.CoSEGraphManager = n3(578), r3.CoSELayout = n3(765), r3.CoSENode = n3(991), r3.ConstraintHandler = n3(902), e4.exports = r3;
      }), 806: ((e4, t4, n3) => {
        var r3 = n3(551).FDLayoutConstants;
        function i2() {
        }
        for (var a2 in r3) i2[a2] = r3[a2];
        i2.DEFAULT_USE_MULTI_LEVEL_SCALING = false, i2.DEFAULT_RADIAL_SEPARATION = r3.DEFAULT_EDGE_LENGTH, i2.DEFAULT_COMPONENT_SEPERATION = 60, i2.TILE = true, i2.TILING_PADDING_VERTICAL = 10, i2.TILING_PADDING_HORIZONTAL = 10, i2.TRANSFORM_ON_CONSTRAINT_HANDLING = true, i2.ENFORCE_CONSTRAINTS = true, i2.APPLY_LAYOUT = true, i2.RELAX_MOVEMENT_ON_CONSTRAINTS = true, i2.TREE_REDUCTION_ON_INCREMENTAL = true, i2.PURE_INCREMENTAL = i2.DEFAULT_INCREMENTAL, e4.exports = i2;
      }), 767: ((e4, t4, n3) => {
        var r3 = n3(551).FDLayoutEdge;
        function i2(e5, t5, n4) {
          r3.call(this, e5, t5, n4);
        }
        for (var a2 in i2.prototype = Object.create(r3.prototype), r3) i2[a2] = r3[a2];
        e4.exports = i2;
      }), 880: ((e4, t4, n3) => {
        var r3 = n3(551).LGraph;
        function i2(e5, t5, n4) {
          r3.call(this, e5, t5, n4);
        }
        for (var a2 in i2.prototype = Object.create(r3.prototype), r3) i2[a2] = r3[a2];
        e4.exports = i2;
      }), 578: ((e4, t4, n3) => {
        var r3 = n3(551).LGraphManager;
        function i2(e5) {
          r3.call(this, e5);
        }
        for (var a2 in i2.prototype = Object.create(r3.prototype), r3) i2[a2] = r3[a2];
        e4.exports = i2;
      }), 765: ((e4, t4, n3) => {
        var r3 = n3(551).FDLayout, i2 = n3(578), a2 = n3(880), o2 = n3(991), s2 = n3(767), c2 = n3(806), l2 = n3(902), u2 = n3(551).FDLayoutConstants, d2 = n3(551).LayoutConstants, f2 = n3(551).Point, p2 = n3(551).PointD, m2 = n3(551).DimensionD, h2 = n3(551).Layout, g2 = n3(551).Integer, _2 = n3(551).IGeometry, v2 = n3(551).LGraph, y2 = n3(551).Transform, b2 = n3(551).LinkedList;
        function x2() {
          r3.call(this), this.toBeTiled = {}, this.constraints = {};
        }
        for (var S2 in x2.prototype = Object.create(r3.prototype), r3) x2[S2] = r3[S2];
        x2.prototype.newGraphManager = function() {
          var e5 = new i2(this);
          return this.graphManager = e5, e5;
        }, x2.prototype.newGraph = function(e5) {
          return new a2(null, this.graphManager, e5);
        }, x2.prototype.newNode = function(e5) {
          return new o2(this.graphManager, e5);
        }, x2.prototype.newEdge = function(e5) {
          return new s2(null, null, e5);
        }, x2.prototype.initParameters = function() {
          r3.prototype.initParameters.call(this, arguments), this.isSubLayout || (c2.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = c2.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = c2.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.gravityConstant = u2.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = u2.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = u2.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = u2.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = false, this.isGrowthFinished = false);
        }, x2.prototype.initSpringEmbedder = function() {
          r3.prototype.initSpringEmbedder.call(this), this.coolingCycle = 0, this.maxCoolingCycle = this.maxIterations / u2.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = 0.04, this.coolingAdjuster = 1;
        }, x2.prototype.layout = function() {
          return d2.DEFAULT_CREATE_BENDS_AS_NEEDED && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
        }, x2.prototype.classicLayout = function() {
          if (this.nodesWithGravity = this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager.calcInclusionTreeDepths(), this.graphManager.getRoot().calcEstimatedSize(), this.calcIdealEdgeLengths(), this.incremental) {
            if (c2.TREE_REDUCTION_ON_INCREMENTAL) {
              this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
              var e5 = new Set(this.getAllNodes()), t5 = this.nodesWithGravity.filter(function(t6) {
                return e5.has(t6);
              });
              this.graphManager.setAllNodesToApplyGravitation(t5);
            }
          } else {
            var n4 = this.getFlatForest();
            if (n4.length > 0) this.positionNodesRadially(n4);
            else {
              this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
              var e5 = new Set(this.getAllNodes()), t5 = this.nodesWithGravity.filter(function(t6) {
                return e5.has(t6);
              });
              this.graphManager.setAllNodesToApplyGravitation(t5), this.positionNodesRandomly();
            }
          }
          return Object.keys(this.constraints).length > 0 && (l2.handleConstraints(this), this.initConstraintVariables()), this.initSpringEmbedder(), c2.APPLY_LAYOUT && this.runSpringEmbedder(), true;
        }, x2.prototype.tick = function() {
          if (this.totalIterations++, this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished) if (this.prunedNodesAll.length > 0) this.isTreeGrowing = true;
          else return true;
          if (this.totalIterations % u2.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
            if (this.isConverged()) if (this.prunedNodesAll.length > 0) this.isTreeGrowing = true;
            else return true;
            this.coolingCycle++, this.layoutQuality == 0 ? this.coolingAdjuster = this.coolingCycle : this.layoutQuality == 1 && (this.coolingAdjuster = this.coolingCycle / 3), this.coolingFactor = Math.max(this.initialCoolingFactor - this.coolingCycle ** +(Math.log(100 * (this.initialCoolingFactor - this.finalTemperature)) / Math.log(this.maxCoolingCycle)) / 100 * this.coolingAdjuster, this.finalTemperature), this.animationPeriod = Math.ceil(this.initialAnimationPeriod * Math.sqrt(this.coolingFactor));
          }
          if (this.isTreeGrowing) {
            if (this.growTreeIterations % 10 == 0) if (this.prunedNodesAll.length > 0) {
              this.graphManager.updateBounds(), this.updateGrid(), this.growTree(this.prunedNodesAll), this.graphManager.resetAllNodesToApplyGravitation();
              var e5 = new Set(this.getAllNodes()), t5 = this.nodesWithGravity.filter(function(t6) {
                return e5.has(t6);
              });
              this.graphManager.setAllNodesToApplyGravitation(t5), this.graphManager.updateBounds(), this.updateGrid(), c2.PURE_INCREMENTAL ? this.coolingFactor = u2.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 : this.coolingFactor = u2.DEFAULT_COOLING_FACTOR_INCREMENTAL;
            } else this.isTreeGrowing = false, this.isGrowthFinished = true;
            this.growTreeIterations++;
          }
          if (this.isGrowthFinished) {
            if (this.isConverged()) return true;
            this.afterGrowthIterations % 10 == 0 && (this.graphManager.updateBounds(), this.updateGrid()), c2.PURE_INCREMENTAL ? this.coolingFactor = u2.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 * ((100 - this.afterGrowthIterations) / 100) : this.coolingFactor = u2.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
          }
          var n4 = !this.isTreeGrowing && !this.isGrowthFinished, r4 = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
          return this.totalDisplacement = 0, this.graphManager.updateBounds(), this.calcSpringForces(), this.calcRepulsionForces(n4, r4), this.calcGravitationalForces(), this.moveNodes(), this.animate(), false;
        }, x2.prototype.getPositionsData = function() {
          for (var e5 = this.graphManager.getAllNodes(), t5 = {}, n4 = 0; n4 < e5.length; n4++) {
            var r4 = e5[n4].rect, i3 = e5[n4].id;
            t5[i3] = { id: i3, x: r4.getCenterX(), y: r4.getCenterY(), w: r4.width, h: r4.height };
          }
          return t5;
        }, x2.prototype.runSpringEmbedder = function() {
          this.initialAnimationPeriod = 25, this.animationPeriod = this.initialAnimationPeriod;
          var e5 = false;
          if (u2.ANIMATE === `during`) this.emit(`layoutstarted`);
          else {
            for (; !e5; ) e5 = this.tick();
            this.graphManager.updateBounds();
          }
        }, x2.prototype.moveNodes = function() {
          for (var e5 = this.getAllNodes(), t5, n4 = 0; n4 < e5.length; n4++) t5 = e5[n4], t5.calculateDisplacement();
          Object.keys(this.constraints).length > 0 && this.updateDisplacements();
          for (var n4 = 0; n4 < e5.length; n4++) t5 = e5[n4], t5.move();
        }, x2.prototype.initConstraintVariables = function() {
          var e5 = this;
          this.idToNodeMap = /* @__PURE__ */ new Map(), this.fixedNodeSet = /* @__PURE__ */ new Set();
          for (var t5 = this.graphManager.getAllNodes(), n4 = 0; n4 < t5.length; n4++) {
            var r4 = t5[n4];
            this.idToNodeMap.set(r4.id, r4);
          }
          var i3 = function t6(n5) {
            for (var r5 = n5.getChild().getNodes(), i4, a4 = 0, o4 = 0; o4 < r5.length; o4++) i4 = r5[o4], i4.getChild() == null ? e5.fixedNodeSet.has(i4.id) && (a4 += 100) : a4 += t6(i4);
            return a4;
          };
          if (this.constraints.fixedNodeConstraint) {
            this.constraints.fixedNodeConstraint.forEach(function(t6) {
              e5.fixedNodeSet.add(t6.nodeId);
            });
            for (var t5 = this.graphManager.getAllNodes(), r4, n4 = 0; n4 < t5.length; n4++) if (r4 = t5[n4], r4.getChild() != null) {
              var a3 = i3(r4);
              a3 > 0 && (r4.fixedNodeWeight = a3);
            }
          }
          if (this.constraints.relativePlacementConstraint) {
            var o3 = /* @__PURE__ */ new Map(), s3 = /* @__PURE__ */ new Map();
            if (this.dummyToNodeForVerticalAlignment = /* @__PURE__ */ new Map(), this.dummyToNodeForHorizontalAlignment = /* @__PURE__ */ new Map(), this.fixedNodesOnHorizontal = /* @__PURE__ */ new Set(), this.fixedNodesOnVertical = /* @__PURE__ */ new Set(), this.fixedNodeSet.forEach(function(t6) {
              e5.fixedNodesOnHorizontal.add(t6), e5.fixedNodesOnVertical.add(t6);
            }), this.constraints.alignmentConstraint) {
              if (this.constraints.alignmentConstraint.vertical) for (var l3 = this.constraints.alignmentConstraint.vertical, n4 = 0; n4 < l3.length; n4++) this.dummyToNodeForVerticalAlignment.set(`dummy` + n4, []), l3[n4].forEach(function(t6) {
                o3.set(t6, `dummy` + n4), e5.dummyToNodeForVerticalAlignment.get(`dummy` + n4).push(t6), e5.fixedNodeSet.has(t6) && e5.fixedNodesOnHorizontal.add(`dummy` + n4);
              });
              if (this.constraints.alignmentConstraint.horizontal) for (var u3 = this.constraints.alignmentConstraint.horizontal, n4 = 0; n4 < u3.length; n4++) this.dummyToNodeForHorizontalAlignment.set(`dummy` + n4, []), u3[n4].forEach(function(t6) {
                s3.set(t6, `dummy` + n4), e5.dummyToNodeForHorizontalAlignment.get(`dummy` + n4).push(t6), e5.fixedNodeSet.has(t6) && e5.fixedNodesOnVertical.add(`dummy` + n4);
              });
            }
            if (c2.RELAX_MOVEMENT_ON_CONSTRAINTS) this.shuffle = function(e6) {
              var t6, n5, r5;
              for (r5 = e6.length - 1; r5 >= 2 * e6.length / 3; r5--) t6 = Math.floor(Math.random() * (r5 + 1)), n5 = e6[r5], e6[r5] = e6[t6], e6[t6] = n5;
              return e6;
            }, this.nodesInRelativeHorizontal = [], this.nodesInRelativeVertical = [], this.nodeToRelativeConstraintMapHorizontal = /* @__PURE__ */ new Map(), this.nodeToRelativeConstraintMapVertical = /* @__PURE__ */ new Map(), this.nodeToTempPositionMapHorizontal = /* @__PURE__ */ new Map(), this.nodeToTempPositionMapVertical = /* @__PURE__ */ new Map(), this.constraints.relativePlacementConstraint.forEach(function(t6) {
              if (t6.left) {
                var n5 = o3.has(t6.left) ? o3.get(t6.left) : t6.left, r5 = o3.has(t6.right) ? o3.get(t6.right) : t6.right;
                e5.nodesInRelativeHorizontal.includes(n5) || (e5.nodesInRelativeHorizontal.push(n5), e5.nodeToRelativeConstraintMapHorizontal.set(n5, []), e5.dummyToNodeForVerticalAlignment.has(n5) ? e5.nodeToTempPositionMapHorizontal.set(n5, e5.idToNodeMap.get(e5.dummyToNodeForVerticalAlignment.get(n5)[0]).getCenterX()) : e5.nodeToTempPositionMapHorizontal.set(n5, e5.idToNodeMap.get(n5).getCenterX())), e5.nodesInRelativeHorizontal.includes(r5) || (e5.nodesInRelativeHorizontal.push(r5), e5.nodeToRelativeConstraintMapHorizontal.set(r5, []), e5.dummyToNodeForVerticalAlignment.has(r5) ? e5.nodeToTempPositionMapHorizontal.set(r5, e5.idToNodeMap.get(e5.dummyToNodeForVerticalAlignment.get(r5)[0]).getCenterX()) : e5.nodeToTempPositionMapHorizontal.set(r5, e5.idToNodeMap.get(r5).getCenterX())), e5.nodeToRelativeConstraintMapHorizontal.get(n5).push({ right: r5, gap: t6.gap }), e5.nodeToRelativeConstraintMapHorizontal.get(r5).push({ left: n5, gap: t6.gap });
              } else {
                var i4 = s3.has(t6.top) ? s3.get(t6.top) : t6.top, a4 = s3.has(t6.bottom) ? s3.get(t6.bottom) : t6.bottom;
                e5.nodesInRelativeVertical.includes(i4) || (e5.nodesInRelativeVertical.push(i4), e5.nodeToRelativeConstraintMapVertical.set(i4, []), e5.dummyToNodeForHorizontalAlignment.has(i4) ? e5.nodeToTempPositionMapVertical.set(i4, e5.idToNodeMap.get(e5.dummyToNodeForHorizontalAlignment.get(i4)[0]).getCenterY()) : e5.nodeToTempPositionMapVertical.set(i4, e5.idToNodeMap.get(i4).getCenterY())), e5.nodesInRelativeVertical.includes(a4) || (e5.nodesInRelativeVertical.push(a4), e5.nodeToRelativeConstraintMapVertical.set(a4, []), e5.dummyToNodeForHorizontalAlignment.has(a4) ? e5.nodeToTempPositionMapVertical.set(a4, e5.idToNodeMap.get(e5.dummyToNodeForHorizontalAlignment.get(a4)[0]).getCenterY()) : e5.nodeToTempPositionMapVertical.set(a4, e5.idToNodeMap.get(a4).getCenterY())), e5.nodeToRelativeConstraintMapVertical.get(i4).push({ bottom: a4, gap: t6.gap }), e5.nodeToRelativeConstraintMapVertical.get(a4).push({ top: i4, gap: t6.gap });
              }
            });
            else {
              var d3 = /* @__PURE__ */ new Map(), f3 = /* @__PURE__ */ new Map();
              this.constraints.relativePlacementConstraint.forEach(function(e6) {
                if (e6.left) {
                  var t6 = o3.has(e6.left) ? o3.get(e6.left) : e6.left, n5 = o3.has(e6.right) ? o3.get(e6.right) : e6.right;
                  d3.has(t6) ? d3.get(t6).push(n5) : d3.set(t6, [n5]), d3.has(n5) ? d3.get(n5).push(t6) : d3.set(n5, [t6]);
                } else {
                  var r5 = s3.has(e6.top) ? s3.get(e6.top) : e6.top, i4 = s3.has(e6.bottom) ? s3.get(e6.bottom) : e6.bottom;
                  f3.has(r5) ? f3.get(r5).push(i4) : f3.set(r5, [i4]), f3.has(i4) ? f3.get(i4).push(r5) : f3.set(i4, [r5]);
                }
              });
              var p3 = function(e6, t6) {
                var n5 = [], r5 = [], i4 = new b2(), a4 = /* @__PURE__ */ new Set(), o4 = 0;
                return e6.forEach(function(s4, c3) {
                  if (!a4.has(c3)) {
                    n5[o4] = [], r5[o4] = false;
                    var l4 = c3;
                    for (i4.push(l4), a4.add(l4), n5[o4].push(l4); i4.length != 0; ) l4 = i4.shift(), t6.has(l4) && (r5[o4] = true), e6.get(l4).forEach(function(e7) {
                      a4.has(e7) || (i4.push(e7), a4.add(e7), n5[o4].push(e7));
                    });
                    o4++;
                  }
                }), { components: n5, isFixed: r5 };
              }, m3 = p3(d3, e5.fixedNodesOnHorizontal);
              this.componentsOnHorizontal = m3.components, this.fixedComponentsOnHorizontal = m3.isFixed;
              var h3 = p3(f3, e5.fixedNodesOnVertical);
              this.componentsOnVertical = h3.components, this.fixedComponentsOnVertical = h3.isFixed;
            }
          }
        }, x2.prototype.updateDisplacements = function() {
          var e5 = this;
          if (this.constraints.fixedNodeConstraint && this.constraints.fixedNodeConstraint.forEach(function(t6) {
            var n5 = e5.idToNodeMap.get(t6.nodeId);
            n5.displacementX = 0, n5.displacementY = 0;
          }), this.constraints.alignmentConstraint) {
            if (this.constraints.alignmentConstraint.vertical) for (var t5 = this.constraints.alignmentConstraint.vertical, n4 = 0; n4 < t5.length; n4++) {
              for (var r4 = 0, i3 = 0; i3 < t5[n4].length; i3++) {
                if (this.fixedNodeSet.has(t5[n4][i3])) {
                  r4 = 0;
                  break;
                }
                r4 += this.idToNodeMap.get(t5[n4][i3]).displacementX;
              }
              for (var a3 = r4 / t5[n4].length, i3 = 0; i3 < t5[n4].length; i3++) this.idToNodeMap.get(t5[n4][i3]).displacementX = a3;
            }
            if (this.constraints.alignmentConstraint.horizontal) for (var o3 = this.constraints.alignmentConstraint.horizontal, n4 = 0; n4 < o3.length; n4++) {
              for (var s3 = 0, i3 = 0; i3 < o3[n4].length; i3++) {
                if (this.fixedNodeSet.has(o3[n4][i3])) {
                  s3 = 0;
                  break;
                }
                s3 += this.idToNodeMap.get(o3[n4][i3]).displacementY;
              }
              for (var l3 = s3 / o3[n4].length, i3 = 0; i3 < o3[n4].length; i3++) this.idToNodeMap.get(o3[n4][i3]).displacementY = l3;
            }
          }
          if (this.constraints.relativePlacementConstraint) if (c2.RELAX_MOVEMENT_ON_CONSTRAINTS) this.totalIterations % 10 == 0 && (this.shuffle(this.nodesInRelativeHorizontal), this.shuffle(this.nodesInRelativeVertical)), this.nodesInRelativeHorizontal.forEach(function(t6) {
            if (!e5.fixedNodesOnHorizontal.has(t6)) {
              var n5 = 0;
              n5 = e5.dummyToNodeForVerticalAlignment.has(t6) ? e5.idToNodeMap.get(e5.dummyToNodeForVerticalAlignment.get(t6)[0]).displacementX : e5.idToNodeMap.get(t6).displacementX, e5.nodeToRelativeConstraintMapHorizontal.get(t6).forEach(function(r5) {
                if (r5.right) {
                  var i4 = e5.nodeToTempPositionMapHorizontal.get(r5.right) - e5.nodeToTempPositionMapHorizontal.get(t6) - n5;
                  i4 < r5.gap && (n5 -= r5.gap - i4);
                } else {
                  var i4 = e5.nodeToTempPositionMapHorizontal.get(t6) - e5.nodeToTempPositionMapHorizontal.get(r5.left) + n5;
                  i4 < r5.gap && (n5 += r5.gap - i4);
                }
              }), e5.nodeToTempPositionMapHorizontal.set(t6, e5.nodeToTempPositionMapHorizontal.get(t6) + n5), e5.dummyToNodeForVerticalAlignment.has(t6) ? e5.dummyToNodeForVerticalAlignment.get(t6).forEach(function(t7) {
                e5.idToNodeMap.get(t7).displacementX = n5;
              }) : e5.idToNodeMap.get(t6).displacementX = n5;
            }
          }), this.nodesInRelativeVertical.forEach(function(t6) {
            if (!e5.fixedNodesOnHorizontal.has(t6)) {
              var n5 = 0;
              n5 = e5.dummyToNodeForHorizontalAlignment.has(t6) ? e5.idToNodeMap.get(e5.dummyToNodeForHorizontalAlignment.get(t6)[0]).displacementY : e5.idToNodeMap.get(t6).displacementY, e5.nodeToRelativeConstraintMapVertical.get(t6).forEach(function(r5) {
                if (r5.bottom) {
                  var i4 = e5.nodeToTempPositionMapVertical.get(r5.bottom) - e5.nodeToTempPositionMapVertical.get(t6) - n5;
                  i4 < r5.gap && (n5 -= r5.gap - i4);
                } else {
                  var i4 = e5.nodeToTempPositionMapVertical.get(t6) - e5.nodeToTempPositionMapVertical.get(r5.top) + n5;
                  i4 < r5.gap && (n5 += r5.gap - i4);
                }
              }), e5.nodeToTempPositionMapVertical.set(t6, e5.nodeToTempPositionMapVertical.get(t6) + n5), e5.dummyToNodeForHorizontalAlignment.has(t6) ? e5.dummyToNodeForHorizontalAlignment.get(t6).forEach(function(t7) {
                e5.idToNodeMap.get(t7).displacementY = n5;
              }) : e5.idToNodeMap.get(t6).displacementY = n5;
            }
          });
          else {
            for (var n4 = 0; n4 < this.componentsOnHorizontal.length; n4++) {
              var u3 = this.componentsOnHorizontal[n4];
              if (this.fixedComponentsOnHorizontal[n4]) for (var i3 = 0; i3 < u3.length; i3++) this.dummyToNodeForVerticalAlignment.has(u3[i3]) ? this.dummyToNodeForVerticalAlignment.get(u3[i3]).forEach(function(t6) {
                e5.idToNodeMap.get(t6).displacementX = 0;
              }) : this.idToNodeMap.get(u3[i3]).displacementX = 0;
              else {
                for (var d3 = 0, f3 = 0, i3 = 0; i3 < u3.length; i3++) if (this.dummyToNodeForVerticalAlignment.has(u3[i3])) {
                  var p3 = this.dummyToNodeForVerticalAlignment.get(u3[i3]);
                  d3 += p3.length * this.idToNodeMap.get(p3[0]).displacementX, f3 += p3.length;
                } else d3 += this.idToNodeMap.get(u3[i3]).displacementX, f3++;
                for (var m3 = d3 / f3, i3 = 0; i3 < u3.length; i3++) this.dummyToNodeForVerticalAlignment.has(u3[i3]) ? this.dummyToNodeForVerticalAlignment.get(u3[i3]).forEach(function(t6) {
                  e5.idToNodeMap.get(t6).displacementX = m3;
                }) : this.idToNodeMap.get(u3[i3]).displacementX = m3;
              }
            }
            for (var n4 = 0; n4 < this.componentsOnVertical.length; n4++) {
              var u3 = this.componentsOnVertical[n4];
              if (this.fixedComponentsOnVertical[n4]) for (var i3 = 0; i3 < u3.length; i3++) this.dummyToNodeForHorizontalAlignment.has(u3[i3]) ? this.dummyToNodeForHorizontalAlignment.get(u3[i3]).forEach(function(t6) {
                e5.idToNodeMap.get(t6).displacementY = 0;
              }) : this.idToNodeMap.get(u3[i3]).displacementY = 0;
              else {
                for (var d3 = 0, f3 = 0, i3 = 0; i3 < u3.length; i3++) if (this.dummyToNodeForHorizontalAlignment.has(u3[i3])) {
                  var p3 = this.dummyToNodeForHorizontalAlignment.get(u3[i3]);
                  d3 += p3.length * this.idToNodeMap.get(p3[0]).displacementY, f3 += p3.length;
                } else d3 += this.idToNodeMap.get(u3[i3]).displacementY, f3++;
                for (var m3 = d3 / f3, i3 = 0; i3 < u3.length; i3++) this.dummyToNodeForHorizontalAlignment.has(u3[i3]) ? this.dummyToNodeForHorizontalAlignment.get(u3[i3]).forEach(function(t6) {
                  e5.idToNodeMap.get(t6).displacementY = m3;
                }) : this.idToNodeMap.get(u3[i3]).displacementY = m3;
              }
            }
          }
        }, x2.prototype.calculateNodesToApplyGravitationTo = function() {
          var e5 = [], t5, n4 = this.graphManager.getGraphs(), r4 = n4.length, i3;
          for (i3 = 0; i3 < r4; i3++) t5 = n4[i3], t5.updateConnected(), t5.isConnected || (e5 = e5.concat(t5.getNodes()));
          return e5;
        }, x2.prototype.createBendpoints = function() {
          var e5 = [];
          e5 = e5.concat(this.graphManager.getAllEdges());
          var t5 = /* @__PURE__ */ new Set(), n4;
          for (n4 = 0; n4 < e5.length; n4++) {
            var r4 = e5[n4];
            if (!t5.has(r4)) {
              var i3 = r4.getSource(), a3 = r4.getTarget();
              if (i3 == a3) r4.getBendpoints().push(new p2()), r4.getBendpoints().push(new p2()), this.createDummyNodesForBendpoints(r4), t5.add(r4);
              else {
                var o3 = [];
                if (o3 = o3.concat(i3.getEdgeListToNode(a3)), o3 = o3.concat(a3.getEdgeListToNode(i3)), !t5.has(o3[0])) {
                  if (o3.length > 1) {
                    var s3;
                    for (s3 = 0; s3 < o3.length; s3++) {
                      var c3 = o3[s3];
                      c3.getBendpoints().push(new p2()), this.createDummyNodesForBendpoints(c3);
                    }
                  }
                  o3.forEach(function(e6) {
                    t5.add(e6);
                  });
                }
              }
            }
            if (t5.size == e5.length) break;
          }
        }, x2.prototype.positionNodesRadially = function(e5) {
          for (var t5 = new f2(0, 0), n4 = Math.ceil(Math.sqrt(e5.length)), r4 = 0, i3 = 0, a3 = 0, o3 = new p2(0, 0), s3 = 0; s3 < e5.length; s3++) {
            s3 % n4 == 0 && (a3 = 0, i3 = r4, s3 != 0 && (i3 += c2.DEFAULT_COMPONENT_SEPERATION), r4 = 0);
            var l3 = e5[s3], u3 = h2.findCenterOfTree(l3);
            t5.x = a3, t5.y = i3, o3 = x2.radialLayout(l3, u3, t5), o3.y > r4 && (r4 = Math.floor(o3.y)), a3 = Math.floor(o3.x + c2.DEFAULT_COMPONENT_SEPERATION);
          }
          this.transform(new p2(d2.WORLD_CENTER_X - o3.x / 2, d2.WORLD_CENTER_Y - o3.y / 2));
        }, x2.radialLayout = function(e5, t5, n4) {
          var r4 = Math.max(this.maxDiagonalInTree(e5), c2.DEFAULT_RADIAL_SEPARATION);
          x2.branchRadialLayout(t5, null, 0, 359, 0, r4);
          var i3 = v2.calculateBounds(e5), a3 = new y2();
          a3.setDeviceOrgX(i3.getMinX()), a3.setDeviceOrgY(i3.getMinY()), a3.setWorldOrgX(n4.x), a3.setWorldOrgY(n4.y);
          for (var o3 = 0; o3 < e5.length; o3++) e5[o3].transform(a3);
          var s3 = new p2(i3.getMaxX(), i3.getMaxY());
          return a3.inverseTransformPoint(s3);
        }, x2.branchRadialLayout = function(e5, t5, n4, r4, i3, a3) {
          var o3 = (r4 - n4 + 1) / 2;
          o3 < 0 && (o3 += 180);
          var s3 = (o3 + n4) % 360 * _2.TWO_PI / 360, c3 = i3 * Math.cos(s3), l3 = i3 * Math.sin(s3);
          e5.setCenter(c3, l3);
          var u3 = [];
          u3 = u3.concat(e5.getEdges());
          var d3 = u3.length;
          t5 != null && d3--;
          for (var f3 = 0, p3 = u3.length, m3, h3 = e5.getEdgesBetween(t5); h3.length > 1; ) {
            var g3 = h3[0];
            h3.splice(0, 1);
            var v3 = u3.indexOf(g3);
            v3 >= 0 && u3.splice(v3, 1), p3--, d3--;
          }
          m3 = t5 == null ? 0 : (u3.indexOf(h3[0]) + 1) % p3;
          for (var y3 = Math.abs(r4 - n4) / d3, b3 = m3; f3 != d3; b3 = ++b3 % p3) {
            var S3 = u3[b3].getOtherEnd(e5);
            if (S3 != t5) {
              var C2 = (n4 + f3 * y3) % 360, w2 = (C2 + y3) % 360;
              x2.branchRadialLayout(S3, e5, C2, w2, i3 + a3, a3), f3++;
            }
          }
        }, x2.maxDiagonalInTree = function(e5) {
          for (var t5 = g2.MIN_VALUE, n4 = 0; n4 < e5.length; n4++) {
            var r4 = e5[n4].getDiagonal();
            r4 > t5 && (t5 = r4);
          }
          return t5;
        }, x2.prototype.calcRepulsionRange = function() {
          return 2 * (this.level + 1) * this.idealEdgeLength;
        }, x2.prototype.groupZeroDegreeMembers = function() {
          var e5 = this, t5 = {};
          this.memberGroups = {}, this.idToDummyNode = {};
          for (var n4 = [], r4 = this.graphManager.getAllNodes(), i3 = 0; i3 < r4.length; i3++) {
            var a3 = r4[i3], s3 = a3.getParent();
            this.getNodeDegreeWithChildren(a3) === 0 && (s3.id == null || !this.getToBeTiled(s3)) && n4.push(a3);
          }
          for (var i3 = 0; i3 < n4.length; i3++) {
            var a3 = n4[i3], c3 = a3.getParent().id;
            t5[c3] === void 0 && (t5[c3] = []), t5[c3] = t5[c3].concat(a3);
          }
          Object.keys(t5).forEach(function(n5) {
            if (t5[n5].length > 1) {
              var r5 = `DummyCompound_` + n5;
              e5.memberGroups[r5] = t5[n5];
              var i4 = t5[n5][0].getParent(), a4 = new o2(e5.graphManager);
              a4.id = r5, a4.paddingLeft = i4.paddingLeft || 0, a4.paddingRight = i4.paddingRight || 0, a4.paddingBottom = i4.paddingBottom || 0, a4.paddingTop = i4.paddingTop || 0, e5.idToDummyNode[r5] = a4;
              var s4 = e5.getGraphManager().add(e5.newGraph(), a4), c4 = i4.getChild();
              c4.add(a4);
              for (var l3 = 0; l3 < t5[n5].length; l3++) {
                var u3 = t5[n5][l3];
                c4.remove(u3), s4.add(u3);
              }
            }
          });
        }, x2.prototype.clearCompounds = function() {
          var e5 = {}, t5 = {};
          this.performDFSOnCompounds();
          for (var n4 = 0; n4 < this.compoundOrder.length; n4++) t5[this.compoundOrder[n4].id] = this.compoundOrder[n4], e5[this.compoundOrder[n4].id] = [].concat(this.compoundOrder[n4].getChild().getNodes()), this.graphManager.remove(this.compoundOrder[n4].getChild()), this.compoundOrder[n4].child = null;
          this.graphManager.resetAllNodes(), this.tileCompoundMembers(e5, t5);
        }, x2.prototype.clearZeroDegreeMembers = function() {
          var e5 = this, t5 = this.tiledZeroDegreePack = [];
          Object.keys(this.memberGroups).forEach(function(n4) {
            var r4 = e5.idToDummyNode[n4];
            if (t5[n4] = e5.tileNodes(e5.memberGroups[n4], r4.paddingLeft + r4.paddingRight), r4.rect.width = t5[n4].width, r4.rect.height = t5[n4].height, r4.setCenter(t5[n4].centerX, t5[n4].centerY), r4.labelMarginLeft = 0, r4.labelMarginTop = 0, c2.NODE_DIMENSIONS_INCLUDE_LABELS) {
              var i3 = r4.rect.width, a3 = r4.rect.height;
              r4.labelWidth && (r4.labelPosHorizontal == `left` ? (r4.rect.x -= r4.labelWidth, r4.setWidth(i3 + r4.labelWidth), r4.labelMarginLeft = r4.labelWidth) : r4.labelPosHorizontal == `center` && r4.labelWidth > i3 ? (r4.rect.x -= (r4.labelWidth - i3) / 2, r4.setWidth(r4.labelWidth), r4.labelMarginLeft = (r4.labelWidth - i3) / 2) : r4.labelPosHorizontal == `right` && r4.setWidth(i3 + r4.labelWidth)), r4.labelHeight && (r4.labelPosVertical == `top` ? (r4.rect.y -= r4.labelHeight, r4.setHeight(a3 + r4.labelHeight), r4.labelMarginTop = r4.labelHeight) : r4.labelPosVertical == `center` && r4.labelHeight > a3 ? (r4.rect.y -= (r4.labelHeight - a3) / 2, r4.setHeight(r4.labelHeight), r4.labelMarginTop = (r4.labelHeight - a3) / 2) : r4.labelPosVertical == `bottom` && r4.setHeight(a3 + r4.labelHeight));
            }
          });
        }, x2.prototype.repopulateCompounds = function() {
          for (var e5 = this.compoundOrder.length - 1; e5 >= 0; e5--) {
            var t5 = this.compoundOrder[e5], n4 = t5.id, r4 = t5.paddingLeft, i3 = t5.paddingTop, a3 = t5.labelMarginLeft, o3 = t5.labelMarginTop;
            this.adjustLocations(this.tiledMemberPack[n4], t5.rect.x, t5.rect.y, r4, i3, a3, o3);
          }
        }, x2.prototype.repopulateZeroDegreeMembers = function() {
          var e5 = this, t5 = this.tiledZeroDegreePack;
          Object.keys(t5).forEach(function(n4) {
            var r4 = e5.idToDummyNode[n4], i3 = r4.paddingLeft, a3 = r4.paddingTop, o3 = r4.labelMarginLeft, s3 = r4.labelMarginTop;
            e5.adjustLocations(t5[n4], r4.rect.x, r4.rect.y, i3, a3, o3, s3);
          });
        }, x2.prototype.getToBeTiled = function(e5) {
          var t5 = e5.id;
          if (this.toBeTiled[t5] != null) return this.toBeTiled[t5];
          var n4 = e5.getChild();
          if (n4 == null) return this.toBeTiled[t5] = false, false;
          for (var r4 = n4.getNodes(), i3 = 0; i3 < r4.length; i3++) {
            var a3 = r4[i3];
            if (this.getNodeDegree(a3) > 0) return this.toBeTiled[t5] = false, false;
            if (a3.getChild() == null) {
              this.toBeTiled[a3.id] = false;
              continue;
            }
            if (!this.getToBeTiled(a3)) return this.toBeTiled[t5] = false, false;
          }
          return this.toBeTiled[t5] = true, true;
        }, x2.prototype.getNodeDegree = function(e5) {
          e5.id;
          for (var t5 = e5.getEdges(), n4 = 0, r4 = 0; r4 < t5.length; r4++) {
            var i3 = t5[r4];
            i3.getSource().id !== i3.getTarget().id && (n4 += 1);
          }
          return n4;
        }, x2.prototype.getNodeDegreeWithChildren = function(e5) {
          var t5 = this.getNodeDegree(e5);
          if (e5.getChild() == null) return t5;
          for (var n4 = e5.getChild().getNodes(), r4 = 0; r4 < n4.length; r4++) {
            var i3 = n4[r4];
            t5 += this.getNodeDegreeWithChildren(i3);
          }
          return t5;
        }, x2.prototype.performDFSOnCompounds = function() {
          this.compoundOrder = [], this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
        }, x2.prototype.fillCompexOrderByDFS = function(e5) {
          for (var t5 = 0; t5 < e5.length; t5++) {
            var n4 = e5[t5];
            n4.getChild() != null && this.fillCompexOrderByDFS(n4.getChild().getNodes()), this.getToBeTiled(n4) && this.compoundOrder.push(n4);
          }
        }, x2.prototype.adjustLocations = function(e5, t5, n4, r4, i3, a3, o3) {
          t5 += r4 + a3, n4 += i3 + o3;
          for (var s3 = t5, c3 = 0; c3 < e5.rows.length; c3++) {
            var l3 = e5.rows[c3];
            t5 = s3;
            for (var u3 = 0, d3 = 0; d3 < l3.length; d3++) {
              var f3 = l3[d3];
              f3.rect.x = t5, f3.rect.y = n4, t5 += f3.rect.width + e5.horizontalPadding, f3.rect.height > u3 && (u3 = f3.rect.height);
            }
            n4 += u3 + e5.verticalPadding;
          }
        }, x2.prototype.tileCompoundMembers = function(e5, t5) {
          var n4 = this;
          this.tiledMemberPack = [], Object.keys(e5).forEach(function(r4) {
            var i3 = t5[r4];
            if (n4.tiledMemberPack[r4] = n4.tileNodes(e5[r4], i3.paddingLeft + i3.paddingRight), i3.rect.width = n4.tiledMemberPack[r4].width, i3.rect.height = n4.tiledMemberPack[r4].height, i3.setCenter(n4.tiledMemberPack[r4].centerX, n4.tiledMemberPack[r4].centerY), i3.labelMarginLeft = 0, i3.labelMarginTop = 0, c2.NODE_DIMENSIONS_INCLUDE_LABELS) {
              var a3 = i3.rect.width, o3 = i3.rect.height;
              i3.labelWidth && (i3.labelPosHorizontal == `left` ? (i3.rect.x -= i3.labelWidth, i3.setWidth(a3 + i3.labelWidth), i3.labelMarginLeft = i3.labelWidth) : i3.labelPosHorizontal == `center` && i3.labelWidth > a3 ? (i3.rect.x -= (i3.labelWidth - a3) / 2, i3.setWidth(i3.labelWidth), i3.labelMarginLeft = (i3.labelWidth - a3) / 2) : i3.labelPosHorizontal == `right` && i3.setWidth(a3 + i3.labelWidth)), i3.labelHeight && (i3.labelPosVertical == `top` ? (i3.rect.y -= i3.labelHeight, i3.setHeight(o3 + i3.labelHeight), i3.labelMarginTop = i3.labelHeight) : i3.labelPosVertical == `center` && i3.labelHeight > o3 ? (i3.rect.y -= (i3.labelHeight - o3) / 2, i3.setHeight(i3.labelHeight), i3.labelMarginTop = (i3.labelHeight - o3) / 2) : i3.labelPosVertical == `bottom` && i3.setHeight(o3 + i3.labelHeight));
            }
          });
        }, x2.prototype.tileNodes = function(e5, t5) {
          var n4 = this.tileNodesByFavoringDim(e5, t5, true), r4 = this.tileNodesByFavoringDim(e5, t5, false), i3 = this.getOrgRatio(n4);
          return this.getOrgRatio(r4) < i3 ? r4 : n4;
        }, x2.prototype.getOrgRatio = function(e5) {
          var t5 = e5.width / e5.height;
          return t5 < 1 && (t5 = 1 / t5), t5;
        }, x2.prototype.calcIdealRowWidth = function(e5, t5) {
          var n4 = c2.TILING_PADDING_VERTICAL, r4 = c2.TILING_PADDING_HORIZONTAL, i3 = e5.length, a3 = 0, o3 = 0, s3 = 0;
          e5.forEach(function(e6) {
            a3 += e6.getWidth(), o3 += e6.getHeight(), e6.getWidth() > s3 && (s3 = e6.getWidth());
          });
          var l3 = a3 / i3, u3 = o3 / i3, d3 = (n4 - r4) ** 2 + 4 * (l3 + r4) * (u3 + n4) * i3, f3 = (r4 - n4 + Math.sqrt(d3)) / (2 * (l3 + r4)), p3;
          t5 ? (p3 = Math.ceil(f3), p3 == f3 && p3++) : p3 = Math.floor(f3);
          var m3 = p3 * (l3 + r4) - r4;
          return s3 > m3 && (m3 = s3), m3 += r4 * 2, m3;
        }, x2.prototype.tileNodesByFavoringDim = function(e5, t5, n4) {
          var r4 = c2.TILING_PADDING_VERTICAL, i3 = c2.TILING_PADDING_HORIZONTAL, a3 = c2.TILING_COMPARE_BY, o3 = { rows: [], rowWidth: [], rowHeight: [], width: 0, height: t5, verticalPadding: r4, horizontalPadding: i3, centerX: 0, centerY: 0 };
          a3 && (o3.idealRowWidth = this.calcIdealRowWidth(e5, n4));
          var s3 = function(e6) {
            return e6.rect.width * e6.rect.height;
          }, l3 = function(e6, t6) {
            return s3(t6) - s3(e6);
          };
          e5.sort(function(e6, t6) {
            var n5 = l3;
            return o3.idealRowWidth ? (n5 = a3, n5(e6.id, t6.id)) : n5(e6, t6);
          });
          for (var u3 = 0, d3 = 0, f3 = 0; f3 < e5.length; f3++) {
            var p3 = e5[f3];
            u3 += p3.getCenterX(), d3 += p3.getCenterY();
          }
          o3.centerX = u3 / e5.length, o3.centerY = d3 / e5.length;
          for (var f3 = 0; f3 < e5.length; f3++) {
            var p3 = e5[f3];
            if (o3.rows.length == 0) this.insertNodeToRow(o3, p3, 0, t5);
            else if (this.canAddHorizontal(o3, p3.rect.width, p3.rect.height)) {
              var m3 = o3.rows.length - 1;
              o3.idealRowWidth || (m3 = this.getShortestRowIndex(o3)), this.insertNodeToRow(o3, p3, m3, t5);
            } else this.insertNodeToRow(o3, p3, o3.rows.length, t5);
            this.shiftToLastRow(o3);
          }
          return o3;
        }, x2.prototype.insertNodeToRow = function(e5, t5, n4, r4) {
          var i3 = r4;
          n4 == e5.rows.length && (e5.rows.push([]), e5.rowWidth.push(i3), e5.rowHeight.push(0));
          var a3 = e5.rowWidth[n4] + t5.rect.width;
          e5.rows[n4].length > 0 && (a3 += e5.horizontalPadding), e5.rowWidth[n4] = a3, e5.width < a3 && (e5.width = a3);
          var o3 = t5.rect.height;
          n4 > 0 && (o3 += e5.verticalPadding);
          var s3 = 0;
          o3 > e5.rowHeight[n4] && (s3 = e5.rowHeight[n4], e5.rowHeight[n4] = o3, s3 = e5.rowHeight[n4] - s3), e5.height += s3, e5.rows[n4].push(t5);
        }, x2.prototype.getShortestRowIndex = function(e5) {
          for (var t5 = -1, n4 = Number.MAX_VALUE, r4 = 0; r4 < e5.rows.length; r4++) e5.rowWidth[r4] < n4 && (t5 = r4, n4 = e5.rowWidth[r4]);
          return t5;
        }, x2.prototype.getLongestRowIndex = function(e5) {
          for (var t5 = -1, n4 = Number.MIN_VALUE, r4 = 0; r4 < e5.rows.length; r4++) e5.rowWidth[r4] > n4 && (t5 = r4, n4 = e5.rowWidth[r4]);
          return t5;
        }, x2.prototype.canAddHorizontal = function(e5, t5, n4) {
          if (e5.idealRowWidth) {
            var r4 = e5.rows.length - 1;
            return e5.rowWidth[r4] + t5 + e5.horizontalPadding <= e5.idealRowWidth;
          }
          var i3 = this.getShortestRowIndex(e5);
          if (i3 < 0) return true;
          var a3 = e5.rowWidth[i3];
          if (a3 + e5.horizontalPadding + t5 <= e5.width) return true;
          var o3 = 0;
          e5.rowHeight[i3] < n4 && i3 > 0 && (o3 = n4 + e5.verticalPadding - e5.rowHeight[i3]);
          var s3 = e5.width - a3 >= t5 + e5.horizontalPadding ? (e5.height + o3) / (a3 + t5 + e5.horizontalPadding) : (e5.height + o3) / e5.width;
          o3 = n4 + e5.verticalPadding;
          var c3 = e5.width < t5 ? (e5.height + o3) / t5 : (e5.height + o3) / e5.width;
          return c3 < 1 && (c3 = 1 / c3), s3 < 1 && (s3 = 1 / s3), s3 < c3;
        }, x2.prototype.shiftToLastRow = function(e5) {
          var t5 = this.getLongestRowIndex(e5), n4 = e5.rowWidth.length - 1, r4 = e5.rows[t5], i3 = r4[r4.length - 1], a3 = i3.width + e5.horizontalPadding;
          if (e5.width - e5.rowWidth[n4] > a3 && t5 != n4) {
            r4.splice(-1, 1), e5.rows[n4].push(i3), e5.rowWidth[t5] = e5.rowWidth[t5] - a3, e5.rowWidth[n4] = e5.rowWidth[n4] + a3, e5.width = e5.rowWidth[instance.getLongestRowIndex(e5)];
            for (var o3 = Number.MIN_VALUE, s3 = 0; s3 < r4.length; s3++) r4[s3].height > o3 && (o3 = r4[s3].height);
            t5 > 0 && (o3 += e5.verticalPadding);
            var c3 = e5.rowHeight[t5] + e5.rowHeight[n4];
            e5.rowHeight[t5] = o3, e5.rowHeight[n4] < i3.height + e5.verticalPadding && (e5.rowHeight[n4] = i3.height + e5.verticalPadding);
            var l3 = e5.rowHeight[t5] + e5.rowHeight[n4];
            e5.height += l3 - c3, this.shiftToLastRow(e5);
          }
        }, x2.prototype.tilingPreLayout = function() {
          c2.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
        }, x2.prototype.tilingPostLayout = function() {
          c2.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
        }, x2.prototype.reduceTrees = function() {
          for (var e5 = [], t5 = true, n4; t5; ) {
            var r4 = this.graphManager.getAllNodes(), i3 = [];
            t5 = false;
            for (var a3 = 0; a3 < r4.length; a3++) if (n4 = r4[a3], n4.getEdges().length == 1 && !n4.getEdges()[0].isInterGraph && n4.getChild() == null) {
              if (c2.PURE_INCREMENTAL) {
                var o3 = n4.getEdges()[0].getOtherEnd(n4), s3 = new m2(n4.getCenterX() - o3.getCenterX(), n4.getCenterY() - o3.getCenterY());
                i3.push([n4, n4.getEdges()[0], n4.getOwner(), s3]);
              } else i3.push([n4, n4.getEdges()[0], n4.getOwner()]);
              t5 = true;
            }
            if (t5 == 1) {
              for (var l3 = [], u3 = 0; u3 < i3.length; u3++) i3[u3][0].getEdges().length == 1 && (l3.push(i3[u3]), i3[u3][0].getOwner().remove(i3[u3][0]));
              e5.push(l3), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
            }
          }
          this.prunedNodesAll = e5;
        }, x2.prototype.growTree = function(e5) {
          for (var t5 = e5[e5.length - 1], n4, r4 = 0; r4 < t5.length; r4++) n4 = t5[r4], this.findPlaceforPrunedNode(n4), n4[2].add(n4[0]), n4[2].add(n4[1], n4[1].source, n4[1].target);
          e5.splice(e5.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
        }, x2.prototype.findPlaceforPrunedNode = function(e5) {
          var t5, n4, r4 = e5[0];
          if (n4 = r4 == e5[1].source ? e5[1].target : e5[1].source, c2.PURE_INCREMENTAL) r4.setCenter(n4.getCenterX() + e5[3].getWidth(), n4.getCenterY() + e5[3].getHeight());
          else {
            var i3 = n4.startX, a3 = n4.finishX, o3 = n4.startY, s3 = n4.finishY, l3 = [0, 0, 0, 0];
            if (o3 > 0) for (var d3 = i3; d3 <= a3; d3++) l3[0] += this.grid[d3][o3 - 1].length + this.grid[d3][o3].length - 1;
            if (a3 < this.grid.length - 1) for (var d3 = o3; d3 <= s3; d3++) l3[1] += this.grid[a3 + 1][d3].length + this.grid[a3][d3].length - 1;
            if (s3 < this.grid[0].length - 1) for (var d3 = i3; d3 <= a3; d3++) l3[2] += this.grid[d3][s3 + 1].length + this.grid[d3][s3].length - 1;
            if (i3 > 0) for (var d3 = o3; d3 <= s3; d3++) l3[3] += this.grid[i3 - 1][d3].length + this.grid[i3][d3].length - 1;
            for (var f3 = g2.MAX_VALUE, p3, m3, h3 = 0; h3 < l3.length; h3++) l3[h3] < f3 ? (f3 = l3[h3], p3 = 1, m3 = h3) : l3[h3] == f3 && p3++;
            if (p3 == 3 && f3 == 0) l3[0] == 0 && l3[1] == 0 && l3[2] == 0 ? t5 = 1 : l3[0] == 0 && l3[1] == 0 && l3[3] == 0 ? t5 = 0 : l3[0] == 0 && l3[2] == 0 && l3[3] == 0 ? t5 = 3 : l3[1] == 0 && l3[2] == 0 && l3[3] == 0 && (t5 = 2);
            else if (p3 == 2 && f3 == 0) {
              var _3 = Math.floor(Math.random() * 2);
              t5 = l3[0] == 0 && l3[1] == 0 ? _3 == 0 ? 0 : 1 : l3[0] == 0 && l3[2] == 0 ? _3 == 0 ? 0 : 2 : l3[0] == 0 && l3[3] == 0 ? _3 == 0 ? 0 : 3 : l3[1] == 0 && l3[2] == 0 ? _3 == 0 ? 1 : 2 : l3[1] == 0 && l3[3] == 0 ? _3 == 0 ? 1 : 3 : _3 == 0 ? 2 : 3;
            } else if (p3 == 4 && f3 == 0) {
              var _3 = Math.floor(Math.random() * 4);
              t5 = _3;
            } else t5 = m3;
            t5 == 0 ? r4.setCenter(n4.getCenterX(), n4.getCenterY() - n4.getHeight() / 2 - u2.DEFAULT_EDGE_LENGTH - r4.getHeight() / 2) : t5 == 1 ? r4.setCenter(n4.getCenterX() + n4.getWidth() / 2 + u2.DEFAULT_EDGE_LENGTH + r4.getWidth() / 2, n4.getCenterY()) : t5 == 2 ? r4.setCenter(n4.getCenterX(), n4.getCenterY() + n4.getHeight() / 2 + u2.DEFAULT_EDGE_LENGTH + r4.getHeight() / 2) : r4.setCenter(n4.getCenterX() - n4.getWidth() / 2 - u2.DEFAULT_EDGE_LENGTH - r4.getWidth() / 2, n4.getCenterY());
          }
        }, e4.exports = x2;
      }), 991: ((e4, t4, n3) => {
        var r3 = n3(551).FDLayoutNode, i2 = n3(551).IMath;
        function a2(e5, t5, n4, i3) {
          r3.call(this, e5, t5, n4, i3);
        }
        for (var o2 in a2.prototype = Object.create(r3.prototype), r3) a2[o2] = r3[o2];
        a2.prototype.calculateDisplacement = function() {
          var e5 = this.graphManager.getLayout();
          this.getChild() != null && this.fixedNodeWeight ? (this.displacementX += e5.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.fixedNodeWeight, this.displacementY += e5.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.fixedNodeWeight) : (this.displacementX += e5.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY += e5.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren), Math.abs(this.displacementX) > e5.coolingFactor * e5.maxNodeDisplacement && (this.displacementX = e5.coolingFactor * e5.maxNodeDisplacement * i2.sign(this.displacementX)), Math.abs(this.displacementY) > e5.coolingFactor * e5.maxNodeDisplacement && (this.displacementY = e5.coolingFactor * e5.maxNodeDisplacement * i2.sign(this.displacementY)), this.child && this.child.getNodes().length > 0 && this.propogateDisplacementToChildren(this.displacementX, this.displacementY);
        }, a2.prototype.propogateDisplacementToChildren = function(e5, t5) {
          for (var n4 = this.getChild().getNodes(), r4, i3 = 0; i3 < n4.length; i3++) r4 = n4[i3], r4.getChild() == null ? (r4.displacementX += e5, r4.displacementY += t5) : r4.propogateDisplacementToChildren(e5, t5);
        }, a2.prototype.move = function() {
          var e5 = this.graphManager.getLayout();
          (this.child == null || this.child.getNodes().length == 0) && (this.moveBy(this.displacementX, this.displacementY), e5.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY)), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0;
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
      }), 902: ((e4, t4, n3) => {
        function r3(e5) {
          if (Array.isArray(e5)) {
            for (var t5 = 0, n4 = Array(e5.length); t5 < e5.length; t5++) n4[t5] = e5[t5];
            return n4;
          } else return Array.from(e5);
        }
        var i2 = n3(806), a2 = n3(551).LinkedList, o2 = n3(551).Matrix, s2 = n3(551).SVD;
        function c2() {
        }
        c2.handleConstraints = function(e5) {
          var t5 = {};
          t5.fixedNodeConstraint = e5.constraints.fixedNodeConstraint, t5.alignmentConstraint = e5.constraints.alignmentConstraint, t5.relativePlacementConstraint = e5.constraints.relativePlacementConstraint;
          for (var n4 = /* @__PURE__ */ new Map(), c3 = /* @__PURE__ */ new Map(), l2 = [], u2 = [], d2 = e5.getAllNodes(), f2 = 0, p2 = 0; p2 < d2.length; p2++) {
            var m2 = d2[p2];
            m2.getChild() ?? (c3.set(m2.id, f2++), l2.push(m2.getCenterX()), u2.push(m2.getCenterY()), n4.set(m2.id, m2));
          }
          t5.relativePlacementConstraint && t5.relativePlacementConstraint.forEach(function(e6) {
            !e6.gap && e6.gap != 0 && (e6.left ? e6.gap = i2.DEFAULT_EDGE_LENGTH + n4.get(e6.left).getWidth() / 2 + n4.get(e6.right).getWidth() / 2 : e6.gap = i2.DEFAULT_EDGE_LENGTH + n4.get(e6.top).getHeight() / 2 + n4.get(e6.bottom).getHeight() / 2);
          });
          var h2 = function(e6, t6) {
            return { x: e6.x - t6.x, y: e6.y - t6.y };
          }, g2 = function(e6) {
            var t6 = 0, n5 = 0;
            return e6.forEach(function(e7) {
              t6 += l2[c3.get(e7)], n5 += u2[c3.get(e7)];
            }), { x: t6 / e6.size, y: n5 / e6.size };
          }, _2 = function(e6, t6, n5, i3, o3) {
            function s3(e7, t7) {
              var n6 = new Set(e7), r4 = true, i4 = false, a3 = void 0;
              try {
                for (var o4 = t7[Symbol.iterator](), s4; !(r4 = (s4 = o4.next()).done); r4 = true) {
                  var c4 = s4.value;
                  n6.add(c4);
                }
              } catch (e8) {
                i4 = true, a3 = e8;
              } finally {
                try {
                  !r4 && o4.return && o4.return();
                } finally {
                  if (i4) throw a3;
                }
              }
              return n6;
            }
            var d3 = /* @__PURE__ */ new Map();
            e6.forEach(function(e7, t7) {
              d3.set(t7, 0);
            }), e6.forEach(function(e7, t7) {
              e7.forEach(function(e8) {
                d3.set(e8.id, d3.get(e8.id) + 1);
              });
            });
            var f3 = /* @__PURE__ */ new Map(), p3 = /* @__PURE__ */ new Map(), m3 = new a2();
            d3.forEach(function(e7, r4) {
              e7 == 0 ? (m3.push(r4), n5 || (t6 == `horizontal` ? f3.set(r4, c3.has(r4) ? l2[c3.get(r4)] : i3.get(r4)) : f3.set(r4, c3.has(r4) ? u2[c3.get(r4)] : i3.get(r4)))) : f3.set(r4, -1 / 0), n5 && p3.set(r4, /* @__PURE__ */ new Set([r4]));
            }), n5 && o3.forEach(function(e7) {
              var r4 = [];
              if (e7.forEach(function(e8) {
                n5.has(e8) && r4.push(e8);
              }), r4.length > 0) {
                var a3 = 0;
                r4.forEach(function(e8) {
                  t6 == `horizontal` ? (f3.set(e8, c3.has(e8) ? l2[c3.get(e8)] : i3.get(e8)), a3 += f3.get(e8)) : (f3.set(e8, c3.has(e8) ? u2[c3.get(e8)] : i3.get(e8)), a3 += f3.get(e8));
                }), a3 /= r4.length, e7.forEach(function(e8) {
                  n5.has(e8) || f3.set(e8, a3);
                });
              } else {
                var o4 = 0;
                e7.forEach(function(e8) {
                  t6 == `horizontal` ? o4 += c3.has(e8) ? l2[c3.get(e8)] : i3.get(e8) : o4 += c3.has(e8) ? u2[c3.get(e8)] : i3.get(e8);
                }), o4 /= e7.length, e7.forEach(function(e8) {
                  f3.set(e8, o4);
                });
              }
            });
            for (var h3 = function() {
              var r4 = m3.shift();
              e6.get(r4).forEach(function(e7) {
                if (f3.get(e7.id) < f3.get(r4) + e7.gap) if (n5 && n5.has(e7.id)) {
                  var a3 = void 0;
                  if (a3 = t6 == `horizontal` ? c3.has(e7.id) ? l2[c3.get(e7.id)] : i3.get(e7.id) : c3.has(e7.id) ? u2[c3.get(e7.id)] : i3.get(e7.id), f3.set(e7.id, a3), a3 < f3.get(r4) + e7.gap) {
                    var o4 = f3.get(r4) + e7.gap - a3;
                    p3.get(r4).forEach(function(e8) {
                      f3.set(e8, f3.get(e8) - o4);
                    });
                  }
                } else f3.set(e7.id, f3.get(r4) + e7.gap);
                d3.set(e7.id, d3.get(e7.id) - 1), d3.get(e7.id) == 0 && m3.push(e7.id), n5 && p3.set(e7.id, s3(p3.get(r4), p3.get(e7.id)));
              });
            }; m3.length != 0; ) h3();
            if (n5) {
              var g3 = /* @__PURE__ */ new Set();
              e6.forEach(function(e7, t7) {
                e7.length == 0 && g3.add(t7);
              });
              var _3 = [];
              p3.forEach(function(e7, t7) {
                if (g3.has(t7)) {
                  var i4 = false, a3 = true, o4 = false, s4 = void 0;
                  try {
                    for (var c4 = e7[Symbol.iterator](), l3; !(a3 = (l3 = c4.next()).done); a3 = true) {
                      var u3 = l3.value;
                      n5.has(u3) && (i4 = true);
                    }
                  } catch (e8) {
                    o4 = true, s4 = e8;
                  } finally {
                    try {
                      !a3 && c4.return && c4.return();
                    } finally {
                      if (o4) throw s4;
                    }
                  }
                  if (!i4) {
                    var d4 = false, f4 = void 0;
                    _3.forEach(function(t8, n6) {
                      t8.has([].concat(r3(e7))[0]) && (d4 = true, f4 = n6);
                    }), d4 ? e7.forEach(function(e8) {
                      _3[f4].add(e8);
                    }) : _3.push(new Set(e7));
                  }
                }
              }), _3.forEach(function(e7, n6) {
                var r4 = 1 / 0, a3 = 1 / 0, o4 = -1 / 0, s4 = -1 / 0, d4 = true, p4 = false, m4 = void 0;
                try {
                  for (var h4 = e7[Symbol.iterator](), g4; !(d4 = (g4 = h4.next()).done); d4 = true) {
                    var _4 = g4.value, v3 = void 0;
                    v3 = t6 == `horizontal` ? c3.has(_4) ? l2[c3.get(_4)] : i3.get(_4) : c3.has(_4) ? u2[c3.get(_4)] : i3.get(_4);
                    var y3 = f3.get(_4);
                    v3 < r4 && (r4 = v3), v3 > o4 && (o4 = v3), y3 < a3 && (a3 = y3), y3 > s4 && (s4 = y3);
                  }
                } catch (e8) {
                  p4 = true, m4 = e8;
                } finally {
                  try {
                    !d4 && h4.return && h4.return();
                  } finally {
                    if (p4) throw m4;
                  }
                }
                var b3 = (r4 + o4) / 2 - (a3 + s4) / 2, x3 = true, S3 = false, C3 = void 0;
                try {
                  for (var w3 = e7[Symbol.iterator](), T3; !(x3 = (T3 = w3.next()).done); x3 = true) {
                    var E3 = T3.value;
                    f3.set(E3, f3.get(E3) + b3);
                  }
                } catch (e8) {
                  S3 = true, C3 = e8;
                } finally {
                  try {
                    !x3 && w3.return && w3.return();
                  } finally {
                    if (S3) throw C3;
                  }
                }
              });
            }
            return f3;
          }, v2 = function(e6) {
            var t6 = 0, n5 = 0, r4 = 0, i3 = 0;
            if (e6.forEach(function(e7) {
              e7.left ? l2[c3.get(e7.left)] - l2[c3.get(e7.right)] >= 0 ? t6++ : n5++ : u2[c3.get(e7.top)] - u2[c3.get(e7.bottom)] >= 0 ? r4++ : i3++;
            }), t6 > n5 && r4 > i3) for (var a3 = 0; a3 < c3.size; a3++) l2[a3] = -1 * l2[a3], u2[a3] = -1 * u2[a3];
            else if (t6 > n5) for (var o3 = 0; o3 < c3.size; o3++) l2[o3] = -1 * l2[o3];
            else if (r4 > i3) for (var s3 = 0; s3 < c3.size; s3++) u2[s3] = -1 * u2[s3];
          }, y2 = function(e6) {
            var t6 = [], n5 = new a2(), r4 = /* @__PURE__ */ new Set(), i3 = 0;
            return e6.forEach(function(a3, o3) {
              if (!r4.has(o3)) {
                t6[i3] = [];
                var s3 = o3;
                for (n5.push(s3), r4.add(s3), t6[i3].push(s3); n5.length != 0; ) s3 = n5.shift(), e6.get(s3).forEach(function(e7) {
                  r4.has(e7.id) || (n5.push(e7.id), r4.add(e7.id), t6[i3].push(e7.id));
                });
                i3++;
              }
            }), t6;
          }, b2 = function(e6) {
            var t6 = /* @__PURE__ */ new Map();
            return e6.forEach(function(e7, n5) {
              t6.set(n5, []);
            }), e6.forEach(function(e7, n5) {
              e7.forEach(function(e8) {
                t6.get(n5).push(e8), t6.get(e8.id).push({ id: n5, gap: e8.gap, direction: e8.direction });
              });
            }), t6;
          }, x2 = function(e6) {
            var t6 = /* @__PURE__ */ new Map();
            return e6.forEach(function(e7, n5) {
              t6.set(n5, []);
            }), e6.forEach(function(e7, n5) {
              e7.forEach(function(e8) {
                t6.get(e8.id).push({ id: n5, gap: e8.gap, direction: e8.direction });
              });
            }), t6;
          }, S2 = [], C2 = [], w2 = false, T2 = false, E2 = /* @__PURE__ */ new Set(), D2 = /* @__PURE__ */ new Map(), O2 = /* @__PURE__ */ new Map(), k2 = [];
          if (t5.fixedNodeConstraint && t5.fixedNodeConstraint.forEach(function(e6) {
            E2.add(e6.nodeId);
          }), t5.relativePlacementConstraint && (t5.relativePlacementConstraint.forEach(function(e6) {
            e6.left ? (D2.has(e6.left) ? D2.get(e6.left).push({ id: e6.right, gap: e6.gap, direction: `horizontal` }) : D2.set(e6.left, [{ id: e6.right, gap: e6.gap, direction: `horizontal` }]), D2.has(e6.right) || D2.set(e6.right, [])) : (D2.has(e6.top) ? D2.get(e6.top).push({ id: e6.bottom, gap: e6.gap, direction: `vertical` }) : D2.set(e6.top, [{ id: e6.bottom, gap: e6.gap, direction: `vertical` }]), D2.has(e6.bottom) || D2.set(e6.bottom, []));
          }), O2 = b2(D2), k2 = y2(O2)), i2.TRANSFORM_ON_CONSTRAINT_HANDLING) {
            if (t5.fixedNodeConstraint && t5.fixedNodeConstraint.length > 1) t5.fixedNodeConstraint.forEach(function(e6, t6) {
              S2[t6] = [e6.position.x, e6.position.y], C2[t6] = [l2[c3.get(e6.nodeId)], u2[c3.get(e6.nodeId)]];
            }), w2 = true;
            else if (t5.alignmentConstraint) (function() {
              var e6 = 0;
              if (t5.alignmentConstraint.vertical) {
                for (var n5 = t5.alignmentConstraint.vertical, i3 = function(t6) {
                  var i4 = /* @__PURE__ */ new Set();
                  n5[t6].forEach(function(e7) {
                    i4.add(e7);
                  });
                  var a4 = new Set([].concat(r3(i4)).filter(function(e7) {
                    return E2.has(e7);
                  })), o4 = void 0;
                  o4 = a4.size > 0 ? l2[c3.get(a4.values().next().value)] : g2(i4).x, n5[t6].forEach(function(t7) {
                    S2[e6] = [o4, u2[c3.get(t7)]], C2[e6] = [l2[c3.get(t7)], u2[c3.get(t7)]], e6++;
                  });
                }, a3 = 0; a3 < n5.length; a3++) i3(a3);
                w2 = true;
              }
              if (t5.alignmentConstraint.horizontal) {
                for (var o3 = t5.alignmentConstraint.horizontal, s3 = function(t6) {
                  var n6 = /* @__PURE__ */ new Set();
                  o3[t6].forEach(function(e7) {
                    n6.add(e7);
                  });
                  var i4 = new Set([].concat(r3(n6)).filter(function(e7) {
                    return E2.has(e7);
                  })), a4 = void 0;
                  a4 = i4.size > 0 ? l2[c3.get(i4.values().next().value)] : g2(n6).y, o3[t6].forEach(function(t7) {
                    S2[e6] = [l2[c3.get(t7)], a4], C2[e6] = [l2[c3.get(t7)], u2[c3.get(t7)]], e6++;
                  });
                }, d3 = 0; d3 < o3.length; d3++) s3(d3);
                w2 = true;
              }
              t5.relativePlacementConstraint && (T2 = true);
            })();
            else if (t5.relativePlacementConstraint) {
              for (var A2 = 0, j2 = 0, M2 = 0; M2 < k2.length; M2++) k2[M2].length > A2 && (A2 = k2[M2].length, j2 = M2);
              if (A2 < O2.size / 2) v2(t5.relativePlacementConstraint), w2 = false, T2 = false;
              else {
                var N2 = /* @__PURE__ */ new Map(), P2 = /* @__PURE__ */ new Map(), F2 = [];
                k2[j2].forEach(function(e6) {
                  D2.get(e6).forEach(function(t6) {
                    t6.direction == `horizontal` ? (N2.has(e6) ? N2.get(e6).push(t6) : N2.set(e6, [t6]), N2.has(t6.id) || N2.set(t6.id, []), F2.push({ left: e6, right: t6.id })) : (P2.has(e6) ? P2.get(e6).push(t6) : P2.set(e6, [t6]), P2.has(t6.id) || P2.set(t6.id, []), F2.push({ top: e6, bottom: t6.id }));
                  });
                }), v2(F2), T2 = false;
                var I2 = _2(N2, `horizontal`), L2 = _2(P2, `vertical`);
                k2[j2].forEach(function(e6, t6) {
                  C2[t6] = [l2[c3.get(e6)], u2[c3.get(e6)]], S2[t6] = [], I2.has(e6) ? S2[t6][0] = I2.get(e6) : S2[t6][0] = l2[c3.get(e6)], L2.has(e6) ? S2[t6][1] = L2.get(e6) : S2[t6][1] = u2[c3.get(e6)];
                }), w2 = true;
              }
            }
            if (w2) {
              for (var R2 = void 0, z2 = o2.transpose(S2), B2 = o2.transpose(C2), V2 = 0; V2 < z2.length; V2++) z2[V2] = o2.multGamma(z2[V2]), B2[V2] = o2.multGamma(B2[V2]);
              var ee2 = o2.multMat(z2, o2.transpose(B2)), te2 = s2.svd(ee2);
              R2 = o2.multMat(te2.V, o2.transpose(te2.U));
              for (var H2 = 0; H2 < c3.size; H2++) {
                var ne2 = [l2[H2], u2[H2]], re2 = [R2[0][0], R2[1][0]], U2 = [R2[0][1], R2[1][1]];
                l2[H2] = o2.dotProduct(ne2, re2), u2[H2] = o2.dotProduct(ne2, U2);
              }
              T2 && v2(t5.relativePlacementConstraint);
            }
          }
          if (i2.ENFORCE_CONSTRAINTS) {
            if (t5.fixedNodeConstraint && t5.fixedNodeConstraint.length > 0) {
              var W2 = { x: 0, y: 0 };
              t5.fixedNodeConstraint.forEach(function(e6, t6) {
                var n5 = { x: l2[c3.get(e6.nodeId)], y: u2[c3.get(e6.nodeId)] }, r4 = e6.position, i3 = h2(r4, n5);
                W2.x += i3.x, W2.y += i3.y;
              }), W2.x /= t5.fixedNodeConstraint.length, W2.y /= t5.fixedNodeConstraint.length, l2.forEach(function(e6, t6) {
                l2[t6] += W2.x;
              }), u2.forEach(function(e6, t6) {
                u2[t6] += W2.y;
              }), t5.fixedNodeConstraint.forEach(function(e6) {
                l2[c3.get(e6.nodeId)] = e6.position.x, u2[c3.get(e6.nodeId)] = e6.position.y;
              });
            }
            if (t5.alignmentConstraint) {
              if (t5.alignmentConstraint.vertical) for (var G2 = t5.alignmentConstraint.vertical, ie2 = function(e6) {
                var t6 = /* @__PURE__ */ new Set();
                G2[e6].forEach(function(e7) {
                  t6.add(e7);
                });
                var n5 = new Set([].concat(r3(t6)).filter(function(e7) {
                  return E2.has(e7);
                })), i3 = void 0;
                i3 = n5.size > 0 ? l2[c3.get(n5.values().next().value)] : g2(t6).x, t6.forEach(function(e7) {
                  E2.has(e7) || (l2[c3.get(e7)] = i3);
                });
              }, K2 = 0; K2 < G2.length; K2++) ie2(K2);
              if (t5.alignmentConstraint.horizontal) for (var q2 = t5.alignmentConstraint.horizontal, J2 = function(e6) {
                var t6 = /* @__PURE__ */ new Set();
                q2[e6].forEach(function(e7) {
                  t6.add(e7);
                });
                var n5 = new Set([].concat(r3(t6)).filter(function(e7) {
                  return E2.has(e7);
                })), i3 = void 0;
                i3 = n5.size > 0 ? u2[c3.get(n5.values().next().value)] : g2(t6).y, t6.forEach(function(e7) {
                  E2.has(e7) || (u2[c3.get(e7)] = i3);
                });
              }, Y2 = 0; Y2 < q2.length; Y2++) J2(Y2);
            }
            t5.relativePlacementConstraint && (function() {
              var e6 = /* @__PURE__ */ new Map(), n5 = /* @__PURE__ */ new Map(), r4 = /* @__PURE__ */ new Map(), i3 = /* @__PURE__ */ new Map(), a3 = /* @__PURE__ */ new Map(), o3 = /* @__PURE__ */ new Map(), s3 = /* @__PURE__ */ new Set(), d3 = /* @__PURE__ */ new Set();
              if (E2.forEach(function(e7) {
                s3.add(e7), d3.add(e7);
              }), t5.alignmentConstraint) {
                if (t5.alignmentConstraint.vertical) for (var f3 = t5.alignmentConstraint.vertical, p3 = function(t6) {
                  r4.set(`dummy` + t6, []), f3[t6].forEach(function(n6) {
                    e6.set(n6, `dummy` + t6), r4.get(`dummy` + t6).push(n6), E2.has(n6) && s3.add(`dummy` + t6);
                  }), a3.set(`dummy` + t6, l2[c3.get(f3[t6][0])]);
                }, m3 = 0; m3 < f3.length; m3++) p3(m3);
                if (t5.alignmentConstraint.horizontal) for (var h3 = t5.alignmentConstraint.horizontal, g3 = function(e7) {
                  i3.set(`dummy` + e7, []), h3[e7].forEach(function(t6) {
                    n5.set(t6, `dummy` + e7), i3.get(`dummy` + e7).push(t6), E2.has(t6) && d3.add(`dummy` + e7);
                  }), o3.set(`dummy` + e7, u2[c3.get(h3[e7][0])]);
                }, v3 = 0; v3 < h3.length; v3++) g3(v3);
              }
              var S3 = /* @__PURE__ */ new Map(), C3 = /* @__PURE__ */ new Map(), w3 = function(t6) {
                D2.get(t6).forEach(function(r5) {
                  var i4 = void 0, a4 = void 0;
                  r5.direction == `horizontal` ? (i4 = e6.get(t6) ? e6.get(t6) : t6, a4 = e6.get(r5.id) ? { id: e6.get(r5.id), gap: r5.gap, direction: r5.direction } : r5, S3.has(i4) ? S3.get(i4).push(a4) : S3.set(i4, [a4]), S3.has(a4.id) || S3.set(a4.id, [])) : (i4 = n5.get(t6) ? n5.get(t6) : t6, a4 = n5.get(r5.id) ? { id: n5.get(r5.id), gap: r5.gap, direction: r5.direction } : r5, C3.has(i4) ? C3.get(i4).push(a4) : C3.set(i4, [a4]), C3.has(a4.id) || C3.set(a4.id, []));
                });
              }, T3 = true, O3 = false, k3 = void 0;
              try {
                for (var A3 = D2.keys()[Symbol.iterator](), j3; !(T3 = (j3 = A3.next()).done); T3 = true) {
                  var M3 = j3.value;
                  w3(M3);
                }
              } catch (e7) {
                O3 = true, k3 = e7;
              } finally {
                try {
                  !T3 && A3.return && A3.return();
                } finally {
                  if (O3) throw k3;
                }
              }
              var N3 = b2(S3), P3 = b2(C3), F3 = y2(N3), I3 = y2(P3), L3 = x2(S3), R3 = x2(C3), z3 = [], B3 = [];
              F3.forEach(function(e7, t6) {
                z3[t6] = [], e7.forEach(function(e8) {
                  L3.get(e8).length == 0 && z3[t6].push(e8);
                });
              }), I3.forEach(function(e7, t6) {
                B3[t6] = [], e7.forEach(function(e8) {
                  R3.get(e8).length == 0 && B3[t6].push(e8);
                });
              });
              var V3 = _2(S3, `horizontal`, s3, a3, z3), ee3 = _2(C3, `vertical`, d3, o3, B3), te3 = function(e7) {
                r4.get(e7) ? r4.get(e7).forEach(function(t6) {
                  l2[c3.get(t6)] = V3.get(e7);
                }) : l2[c3.get(e7)] = V3.get(e7);
              }, H3 = true, ne3 = false, re3 = void 0;
              try {
                for (var U3 = V3.keys()[Symbol.iterator](), W3; !(H3 = (W3 = U3.next()).done); H3 = true) {
                  var G3 = W3.value;
                  te3(G3);
                }
              } catch (e7) {
                ne3 = true, re3 = e7;
              } finally {
                try {
                  !H3 && U3.return && U3.return();
                } finally {
                  if (ne3) throw re3;
                }
              }
              var ie3 = function(e7) {
                i3.get(e7) ? i3.get(e7).forEach(function(t6) {
                  u2[c3.get(t6)] = ee3.get(e7);
                }) : u2[c3.get(e7)] = ee3.get(e7);
              }, K3 = true, q3 = false, J3 = void 0;
              try {
                for (var Y3 = ee3.keys()[Symbol.iterator](), ae3; !(K3 = (ae3 = Y3.next()).done); K3 = true) {
                  var G3 = ae3.value;
                  ie3(G3);
                }
              } catch (e7) {
                q3 = true, J3 = e7;
              } finally {
                try {
                  !K3 && Y3.return && Y3.return();
                } finally {
                  if (q3) throw J3;
                }
              }
            })();
          }
          for (var ae2 = 0; ae2 < d2.length; ae2++) {
            var X2 = d2[ae2];
            X2.getChild() ?? X2.setCenter(l2[c3.get(X2.id)], u2[c3.get(X2.id)]);
          }
        }, e4.exports = c2;
      }), 551: ((t4) => {
        t4.exports = e3;
      }) }, n2 = {};
      function r2(e4) {
        var i2 = n2[e4];
        if (i2 !== void 0) return i2.exports;
        var a2 = n2[e4] = { exports: {} };
        return t3[e4](a2, a2.exports, r2), a2.exports;
      }
      return r2(45);
    })();
  });
})), k = e(t(((e2, t2) => {
  (function(n2, r2) {
    typeof e2 == `object` && typeof t2 == `object` ? t2.exports = r2(O()) : typeof define == `function` && define.amd ? define([`cose-base`], r2) : typeof e2 == `object` ? e2.cytoscapeFcose = r2(O()) : n2.cytoscapeFcose = r2(n2.coseBase);
  })(e2, function(e3) {
    return (() => {
      var t3 = { 658: ((e4) => {
        e4.exports = Object.assign == null ? function(e5) {
          return [...arguments].slice(1).forEach(function(t4) {
            Object.keys(t4).forEach(function(n3) {
              return e5[n3] = t4[n3];
            });
          }), e5;
        } : Object.assign.bind(Object);
      }), 548: ((e4, t4, n3) => {
        var r3 = /* @__PURE__ */ (function() {
          function e5(e6, t5) {
            var n4 = [], r4 = true, i3 = false, a3 = void 0;
            try {
              for (var o2 = e6[Symbol.iterator](), s2; !(r4 = (s2 = o2.next()).done) && (n4.push(s2.value), !(t5 && n4.length === t5)); r4 = true) ;
            } catch (e7) {
              i3 = true, a3 = e7;
            } finally {
              try {
                !r4 && o2.return && o2.return();
              } finally {
                if (i3) throw a3;
              }
            }
            return n4;
          }
          return function(t5, n4) {
            if (Array.isArray(t5)) return t5;
            if (Symbol.iterator in Object(t5)) return e5(t5, n4);
            throw TypeError(`Invalid attempt to destructure non-iterable instance`);
          };
        })(), i2 = n3(140).layoutBase.LinkedList, a2 = {};
        a2.getTopMostNodes = function(e5) {
          for (var t5 = {}, n4 = 0; n4 < e5.length; n4++) t5[e5[n4].id()] = true;
          return e5.filter(function(e6, n5) {
            typeof e6 == `number` && (e6 = n5);
            for (var r4 = e6.parent()[0]; r4 != null; ) {
              if (t5[r4.id()]) return false;
              r4 = r4.parent()[0];
            }
            return true;
          });
        }, a2.connectComponents = function(e5, t5, n4, r4) {
          var a3 = new i2(), o2 = /* @__PURE__ */ new Set(), s2 = [], c2 = void 0, l2 = void 0, u2 = void 0, d2 = false, f2 = 1, p2 = [], m2 = [], h2 = function() {
            var r5 = e5.collection();
            m2.push(r5);
            var i3 = n4[0], h3 = e5.collection();
            h3.merge(i3).merge(i3.descendants().intersection(t5)), s2.push(i3), h3.forEach(function(e6) {
              a3.push(e6), o2.add(e6), r5.merge(e6);
            });
            for (var g2 = function() {
              i3 = a3.shift();
              var l3 = e5.collection();
              i3.neighborhood().nodes().forEach(function(e6) {
                t5.intersection(i3.edgesWith(e6)).length > 0 && l3.merge(e6);
              });
              for (var u3 = 0; u3 < l3.length; u3++) {
                var d3 = l3[u3];
                c2 = n4.intersection(d3.union(d3.ancestors())), c2 != null && !o2.has(c2[0]) && c2.union(c2.descendants()).forEach(function(e6) {
                  a3.push(e6), o2.add(e6), r5.merge(e6), n4.has(e6) && s2.push(e6);
                });
              }
            }; a3.length != 0; ) g2();
            if (r5.forEach(function(e6) {
              t5.intersection(e6.connectedEdges()).forEach(function(e7) {
                r5.has(e7.source()) && r5.has(e7.target()) && r5.merge(e7);
              });
            }), s2.length == n4.length && (d2 = true), !d2 || d2 && f2 > 1) {
              l2 = s2[0], u2 = l2.connectedEdges().length, s2.forEach(function(e6) {
                e6.connectedEdges().length < u2 && (u2 = e6.connectedEdges().length, l2 = e6);
              }), p2.push(l2.id());
              var _2 = e5.collection();
              _2.merge(s2[0]), s2.forEach(function(e6) {
                _2.merge(e6);
              }), s2 = [], n4 = n4.difference(_2), f2++;
            }
          };
          do
            h2();
          while (!d2);
          return r4 && p2.length > 0 && r4.set(`dummy` + (r4.size + 1), p2), m2;
        }, a2.relocateComponent = function(e5, t5, n4) {
          if (!n4.fixedNodeConstraint) {
            var i3 = 1 / 0, a3 = -1 / 0, o2 = 1 / 0, s2 = -1 / 0;
            if (n4.quality == `draft`) {
              var c2 = true, l2 = false, u2 = void 0;
              try {
                for (var d2 = t5.nodeIndexes[Symbol.iterator](), f2; !(c2 = (f2 = d2.next()).done); c2 = true) {
                  var p2 = f2.value, m2 = r3(p2, 2), h2 = m2[0], g2 = m2[1], _2 = n4.cy.getElementById(h2);
                  if (_2) {
                    var v2 = _2.boundingBox(), y2 = t5.xCoords[g2] - v2.w / 2, b2 = t5.xCoords[g2] + v2.w / 2, x2 = t5.yCoords[g2] - v2.h / 2, S2 = t5.yCoords[g2] + v2.h / 2;
                    y2 < i3 && (i3 = y2), b2 > a3 && (a3 = b2), x2 < o2 && (o2 = x2), S2 > s2 && (s2 = S2);
                  }
                }
              } catch (e6) {
                l2 = true, u2 = e6;
              } finally {
                try {
                  !c2 && d2.return && d2.return();
                } finally {
                  if (l2) throw u2;
                }
              }
              var C2 = e5.x - (a3 + i3) / 2, w2 = e5.y - (s2 + o2) / 2;
              t5.xCoords = t5.xCoords.map(function(e6) {
                return e6 + C2;
              }), t5.yCoords = t5.yCoords.map(function(e6) {
                return e6 + w2;
              });
            } else {
              Object.keys(t5).forEach(function(e6) {
                var n5 = t5[e6], r4 = n5.getRect().x, c3 = n5.getRect().x + n5.getRect().width, l3 = n5.getRect().y, u3 = n5.getRect().y + n5.getRect().height;
                r4 < i3 && (i3 = r4), c3 > a3 && (a3 = c3), l3 < o2 && (o2 = l3), u3 > s2 && (s2 = u3);
              });
              var T2 = e5.x - (a3 + i3) / 2, E2 = e5.y - (s2 + o2) / 2;
              Object.keys(t5).forEach(function(e6) {
                var n5 = t5[e6];
                n5.setCenter(n5.getCenterX() + T2, n5.getCenterY() + E2);
              });
            }
          }
        }, a2.calcBoundingBox = function(e5, t5, n4, r4) {
          for (var i3 = 2 ** 53 - 1, a3 = -(2 ** 53 - 1), o2 = 2 ** 53 - 1, s2 = -(2 ** 53 - 1), c2 = void 0, l2 = void 0, u2 = void 0, d2 = void 0, f2 = e5.descendants().not(`:parent`), p2 = f2.length, m2 = 0; m2 < p2; m2++) {
            var h2 = f2[m2];
            c2 = t5[r4.get(h2.id())] - h2.width() / 2, l2 = t5[r4.get(h2.id())] + h2.width() / 2, u2 = n4[r4.get(h2.id())] - h2.height() / 2, d2 = n4[r4.get(h2.id())] + h2.height() / 2, i3 > c2 && (i3 = c2), a3 < l2 && (a3 = l2), o2 > u2 && (o2 = u2), s2 < d2 && (s2 = d2);
          }
          var g2 = {};
          return g2.topLeftX = i3, g2.topLeftY = o2, g2.width = a3 - i3, g2.height = s2 - o2, g2;
        }, a2.calcParentsWithoutChildren = function(e5, t5) {
          var n4 = e5.collection();
          return t5.nodes(`:parent`).forEach(function(e6) {
            var t6 = false;
            e6.children().forEach(function(e7) {
              e7.css(`display`) != `none` && (t6 = true);
            }), t6 || n4.merge(e6);
          }), n4;
        }, e4.exports = a2;
      }), 816: ((e4, t4, n3) => {
        var r3 = n3(548), i2 = n3(140).CoSELayout, a2 = n3(140).CoSENode, o2 = n3(140).layoutBase.PointD, s2 = n3(140).layoutBase.DimensionD, c2 = n3(140).layoutBase.LayoutConstants, l2 = n3(140).layoutBase.FDLayoutConstants, u2 = n3(140).CoSEConstants;
        e4.exports = { coseLayout: function(e5, t5) {
          var n4 = e5.cy, d2 = e5.eles, f2 = d2.nodes(), p2 = d2.edges(), m2 = void 0, h2 = void 0, g2 = void 0, _2 = {};
          e5.randomize && (m2 = t5.nodeIndexes, h2 = t5.xCoords, g2 = t5.yCoords);
          var v2 = function(e6) {
            return typeof e6 == `function`;
          }, y2 = function(e6, t6) {
            return v2(e6) ? e6(t6) : e6;
          }, b2 = r3.calcParentsWithoutChildren(n4, d2), x2 = function e6(t6, n5, i3, c3) {
            for (var l3 = n5.length, u3 = 0; u3 < l3; u3++) {
              var d3 = n5[u3], f3 = null;
              d3.intersection(b2).length == 0 && (f3 = d3.children());
              var p3 = void 0, v3 = d3.layoutDimensions({ nodeDimensionsIncludeLabels: c3.nodeDimensionsIncludeLabels });
              if (d3.outerWidth() != null && d3.outerHeight() != null) if (c3.randomize) if (!d3.isParent()) p3 = t6.add(new a2(i3.graphManager, new o2(h2[m2.get(d3.id())] - v3.w / 2, g2[m2.get(d3.id())] - v3.h / 2), new s2(parseFloat(v3.w), parseFloat(v3.h))));
              else {
                var x3 = r3.calcBoundingBox(d3, h2, g2, m2);
                p3 = d3.intersection(b2).length == 0 ? t6.add(new a2(i3.graphManager, new o2(x3.topLeftX, x3.topLeftY), new s2(x3.width, x3.height))) : t6.add(new a2(i3.graphManager, new o2(x3.topLeftX, x3.topLeftY), new s2(parseFloat(v3.w), parseFloat(v3.h))));
              }
              else p3 = t6.add(new a2(i3.graphManager, new o2(d3.position(`x`) - v3.w / 2, d3.position(`y`) - v3.h / 2), new s2(parseFloat(v3.w), parseFloat(v3.h))));
              else p3 = t6.add(new a2(this.graphManager));
              if (p3.id = d3.data(`id`), p3.nodeRepulsion = y2(c3.nodeRepulsion, d3), p3.paddingLeft = parseInt(d3.css(`padding`)), p3.paddingTop = parseInt(d3.css(`padding`)), p3.paddingRight = parseInt(d3.css(`padding`)), p3.paddingBottom = parseInt(d3.css(`padding`)), c3.nodeDimensionsIncludeLabels && (p3.labelWidth = d3.boundingBox({ includeLabels: true, includeNodes: false, includeOverlays: false }).w, p3.labelHeight = d3.boundingBox({ includeLabels: true, includeNodes: false, includeOverlays: false }).h, p3.labelPosVertical = d3.css(`text-valign`), p3.labelPosHorizontal = d3.css(`text-halign`)), _2[d3.data(`id`)] = p3, isNaN(p3.rect.x) && (p3.rect.x = 0), isNaN(p3.rect.y) && (p3.rect.y = 0), f3 != null && f3.length > 0) {
                var S3 = void 0;
                S3 = i3.getGraphManager().add(i3.newGraph(), p3), e6(S3, f3, i3, c3);
              }
            }
          }, S2 = function(t6, n5, r4) {
            for (var i3 = 0, a3 = 0, o3 = 0; o3 < r4.length; o3++) {
              var s3 = r4[o3], c3 = _2[s3.data(`source`)], d3 = _2[s3.data(`target`)];
              if (c3 && d3 && c3 !== d3 && c3.getEdgesBetween(d3).length == 0) {
                var f3 = n5.add(t6.newEdge(), c3, d3);
                f3.id = s3.id(), f3.idealLength = y2(e5.idealEdgeLength, s3), f3.edgeElasticity = y2(e5.edgeElasticity, s3), i3 += f3.idealLength, a3++;
              }
            }
            e5.idealEdgeLength != null && (a3 > 0 ? u2.DEFAULT_EDGE_LENGTH = l2.DEFAULT_EDGE_LENGTH = i3 / a3 : v2(e5.idealEdgeLength) ? u2.DEFAULT_EDGE_LENGTH = l2.DEFAULT_EDGE_LENGTH = 50 : u2.DEFAULT_EDGE_LENGTH = l2.DEFAULT_EDGE_LENGTH = e5.idealEdgeLength, u2.MIN_REPULSION_DIST = l2.MIN_REPULSION_DIST = l2.DEFAULT_EDGE_LENGTH / 10, u2.DEFAULT_RADIAL_SEPARATION = l2.DEFAULT_EDGE_LENGTH);
          }, C2 = function(e6, t6) {
            t6.fixedNodeConstraint && (e6.constraints.fixedNodeConstraint = t6.fixedNodeConstraint), t6.alignmentConstraint && (e6.constraints.alignmentConstraint = t6.alignmentConstraint), t6.relativePlacementConstraint && (e6.constraints.relativePlacementConstraint = t6.relativePlacementConstraint);
          };
          e5.nestingFactor != null && (u2.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = l2.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = e5.nestingFactor), e5.gravity != null && (u2.DEFAULT_GRAVITY_STRENGTH = l2.DEFAULT_GRAVITY_STRENGTH = e5.gravity), e5.numIter != null && (u2.MAX_ITERATIONS = l2.MAX_ITERATIONS = e5.numIter), e5.gravityRange != null && (u2.DEFAULT_GRAVITY_RANGE_FACTOR = l2.DEFAULT_GRAVITY_RANGE_FACTOR = e5.gravityRange), e5.gravityCompound != null && (u2.DEFAULT_COMPOUND_GRAVITY_STRENGTH = l2.DEFAULT_COMPOUND_GRAVITY_STRENGTH = e5.gravityCompound), e5.gravityRangeCompound != null && (u2.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = l2.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = e5.gravityRangeCompound), e5.initialEnergyOnIncremental != null && (u2.DEFAULT_COOLING_FACTOR_INCREMENTAL = l2.DEFAULT_COOLING_FACTOR_INCREMENTAL = e5.initialEnergyOnIncremental), e5.tilingCompareBy != null && (u2.TILING_COMPARE_BY = e5.tilingCompareBy), e5.quality == `proof` ? c2.QUALITY = 2 : c2.QUALITY = 0, u2.NODE_DIMENSIONS_INCLUDE_LABELS = l2.NODE_DIMENSIONS_INCLUDE_LABELS = c2.NODE_DIMENSIONS_INCLUDE_LABELS = e5.nodeDimensionsIncludeLabels, u2.DEFAULT_INCREMENTAL = l2.DEFAULT_INCREMENTAL = c2.DEFAULT_INCREMENTAL = !e5.randomize, u2.ANIMATE = l2.ANIMATE = c2.ANIMATE = e5.animate, u2.TILE = e5.tile, u2.TILING_PADDING_VERTICAL = typeof e5.tilingPaddingVertical == `function` ? e5.tilingPaddingVertical.call() : e5.tilingPaddingVertical, u2.TILING_PADDING_HORIZONTAL = typeof e5.tilingPaddingHorizontal == `function` ? e5.tilingPaddingHorizontal.call() : e5.tilingPaddingHorizontal, u2.DEFAULT_INCREMENTAL = l2.DEFAULT_INCREMENTAL = c2.DEFAULT_INCREMENTAL = true, u2.PURE_INCREMENTAL = !e5.randomize, c2.DEFAULT_UNIFORM_LEAF_NODE_SIZES = e5.uniformNodeDimensions, e5.step == `transformed` && (u2.TRANSFORM_ON_CONSTRAINT_HANDLING = true, u2.ENFORCE_CONSTRAINTS = false, u2.APPLY_LAYOUT = false), e5.step == `enforced` && (u2.TRANSFORM_ON_CONSTRAINT_HANDLING = false, u2.ENFORCE_CONSTRAINTS = true, u2.APPLY_LAYOUT = false), e5.step == `cose` && (u2.TRANSFORM_ON_CONSTRAINT_HANDLING = false, u2.ENFORCE_CONSTRAINTS = false, u2.APPLY_LAYOUT = true), e5.step == `all` && (e5.randomize ? u2.TRANSFORM_ON_CONSTRAINT_HANDLING = true : u2.TRANSFORM_ON_CONSTRAINT_HANDLING = false, u2.ENFORCE_CONSTRAINTS = true, u2.APPLY_LAYOUT = true), e5.fixedNodeConstraint || e5.alignmentConstraint || e5.relativePlacementConstraint ? u2.TREE_REDUCTION_ON_INCREMENTAL = false : u2.TREE_REDUCTION_ON_INCREMENTAL = true;
          var w2 = new i2(), T2 = w2.newGraphManager();
          return x2(T2.addRoot(), r3.getTopMostNodes(f2), w2, e5), S2(w2, T2, p2), C2(w2, e5), w2.runLayout(), _2;
        } };
      }), 212: ((e4, t4, n3) => {
        var r3 = /* @__PURE__ */ (function() {
          function e5(e6, t5) {
            for (var n4 = 0; n4 < t5.length; n4++) {
              var r4 = t5[n4];
              r4.enumerable = r4.enumerable || false, r4.configurable = true, `value` in r4 && (r4.writable = true), Object.defineProperty(e6, r4.key, r4);
            }
          }
          return function(t5, n4, r4) {
            return n4 && e5(t5.prototype, n4), r4 && e5(t5, r4), t5;
          };
        })();
        function i2(e5, t5) {
          if (!(e5 instanceof t5)) throw TypeError(`Cannot call a class as a function`);
        }
        var a2 = n3(658), o2 = n3(548), s2 = n3(657).spectralLayout, c2 = n3(816).coseLayout, l2 = Object.freeze({ quality: `default`, randomize: true, animate: true, animationDuration: 1e3, animationEasing: void 0, fit: true, padding: 30, nodeDimensionsIncludeLabels: false, uniformNodeDimensions: false, packComponents: true, step: `all`, samplingType: true, sampleSize: 25, nodeSeparation: 75, piTol: 1e-7, nodeRepulsion: function(e5) {
          return 4500;
        }, idealEdgeLength: function(e5) {
          return 50;
        }, edgeElasticity: function(e5) {
          return 0.45;
        }, nestingFactor: 0.1, gravity: 0.25, numIter: 2500, tile: true, tilingCompareBy: void 0, tilingPaddingVertical: 10, tilingPaddingHorizontal: 10, gravityRangeCompound: 1.5, gravityCompound: 1, gravityRange: 3.8, initialEnergyOnIncremental: 0.3, fixedNodeConstraint: void 0, alignmentConstraint: void 0, relativePlacementConstraint: void 0, ready: function() {
        }, stop: function() {
        } });
        e4.exports = (function() {
          function e5(t5) {
            i2(this, e5), this.options = a2({}, l2, t5);
          }
          return r3(e5, [{ key: `run`, value: function() {
            var e6 = this, t5 = this.options, n4 = t5.cy, r4 = t5.eles, i3 = [], a3 = [], l3 = void 0, u2 = [];
            t5.fixedNodeConstraint && (!Array.isArray(t5.fixedNodeConstraint) || t5.fixedNodeConstraint.length == 0) && (t5.fixedNodeConstraint = void 0), t5.alignmentConstraint && (t5.alignmentConstraint.vertical && (!Array.isArray(t5.alignmentConstraint.vertical) || t5.alignmentConstraint.vertical.length == 0) && (t5.alignmentConstraint.vertical = void 0), t5.alignmentConstraint.horizontal && (!Array.isArray(t5.alignmentConstraint.horizontal) || t5.alignmentConstraint.horizontal.length == 0) && (t5.alignmentConstraint.horizontal = void 0)), t5.relativePlacementConstraint && (!Array.isArray(t5.relativePlacementConstraint) || t5.relativePlacementConstraint.length == 0) && (t5.relativePlacementConstraint = void 0), (t5.fixedNodeConstraint || t5.alignmentConstraint || t5.relativePlacementConstraint) && (t5.tile = false, t5.packComponents = false);
            var d2 = void 0, f2 = false;
            if (n4.layoutUtilities && t5.packComponents && (d2 = n4.layoutUtilities(`get`), d2 || (d2 = n4.layoutUtilities()), f2 = true), r4.nodes().length > 0) if (f2) {
              var p2 = o2.getTopMostNodes(t5.eles.nodes());
              if (l3 = o2.connectComponents(n4, t5.eles, p2), l3.forEach(function(e7) {
                var t6 = e7.boundingBox();
                u2.push({ x: t6.x1 + t6.w / 2, y: t6.y1 + t6.h / 2 });
              }), t5.randomize && l3.forEach(function(e7) {
                t5.eles = e7, i3.push(s2(t5));
              }), t5.quality == `default` || t5.quality == `proof`) {
                var m2 = n4.collection();
                if (t5.tile) {
                  var h2 = /* @__PURE__ */ new Map(), g2 = [], _2 = [], v2 = 0, y2 = { nodeIndexes: h2, xCoords: g2, yCoords: _2 }, b2 = [];
                  if (l3.forEach(function(e7, t6) {
                    e7.edges().length == 0 && (e7.nodes().forEach(function(t7, n5) {
                      m2.merge(e7.nodes()[n5]), t7.isParent() || (y2.nodeIndexes.set(e7.nodes()[n5].id(), v2++), y2.xCoords.push(e7.nodes()[0].position().x), y2.yCoords.push(e7.nodes()[0].position().y));
                    }), b2.push(t6));
                  }), m2.length > 1) {
                    var x2 = m2.boundingBox();
                    u2.push({ x: x2.x1 + x2.w / 2, y: x2.y1 + x2.h / 2 }), l3.push(m2), i3.push(y2);
                    for (var S2 = b2.length - 1; S2 >= 0; S2--) l3.splice(b2[S2], 1), i3.splice(b2[S2], 1), u2.splice(b2[S2], 1);
                  }
                }
                l3.forEach(function(e7, n5) {
                  t5.eles = e7, a3.push(c2(t5, i3[n5])), o2.relocateComponent(u2[n5], a3[n5], t5);
                });
              } else l3.forEach(function(e7, n5) {
                o2.relocateComponent(u2[n5], i3[n5], t5);
              });
              var C2 = /* @__PURE__ */ new Set();
              if (l3.length > 1) {
                var w2 = [], T2 = r4.filter(function(e7) {
                  return e7.css(`display`) == `none`;
                });
                l3.forEach(function(e7, n5) {
                  var r5 = void 0;
                  if (t5.quality == `draft` && (r5 = i3[n5].nodeIndexes), e7.nodes().not(T2).length > 0) {
                    var s3 = {};
                    s3.edges = [], s3.nodes = [];
                    var c3 = void 0;
                    e7.nodes().not(T2).forEach(function(e8) {
                      if (t5.quality == `draft`) if (!e8.isParent()) c3 = r5.get(e8.id()), s3.nodes.push({ x: i3[n5].xCoords[c3] - e8.boundingbox().w / 2, y: i3[n5].yCoords[c3] - e8.boundingbox().h / 2, width: e8.boundingbox().w, height: e8.boundingbox().h });
                      else {
                        var l4 = o2.calcBoundingBox(e8, i3[n5].xCoords, i3[n5].yCoords, r5);
                        s3.nodes.push({ x: l4.topLeftX, y: l4.topLeftY, width: l4.width, height: l4.height });
                      }
                      else a3[n5][e8.id()] && s3.nodes.push({ x: a3[n5][e8.id()].getLeft(), y: a3[n5][e8.id()].getTop(), width: a3[n5][e8.id()].getWidth(), height: a3[n5][e8.id()].getHeight() });
                    }), e7.edges().forEach(function(e8) {
                      var c4 = e8.source(), l4 = e8.target();
                      if (c4.css(`display`) != `none` && l4.css(`display`) != `none`) if (t5.quality == `draft`) {
                        var u3 = r5.get(c4.id()), d3 = r5.get(l4.id()), f3 = [], p3 = [];
                        if (c4.isParent()) {
                          var m3 = o2.calcBoundingBox(c4, i3[n5].xCoords, i3[n5].yCoords, r5);
                          f3.push(m3.topLeftX + m3.width / 2), f3.push(m3.topLeftY + m3.height / 2);
                        } else f3.push(i3[n5].xCoords[u3]), f3.push(i3[n5].yCoords[u3]);
                        if (l4.isParent()) {
                          var h3 = o2.calcBoundingBox(l4, i3[n5].xCoords, i3[n5].yCoords, r5);
                          p3.push(h3.topLeftX + h3.width / 2), p3.push(h3.topLeftY + h3.height / 2);
                        } else p3.push(i3[n5].xCoords[d3]), p3.push(i3[n5].yCoords[d3]);
                        s3.edges.push({ startX: f3[0], startY: f3[1], endX: p3[0], endY: p3[1] });
                      } else a3[n5][c4.id()] && a3[n5][l4.id()] && s3.edges.push({ startX: a3[n5][c4.id()].getCenterX(), startY: a3[n5][c4.id()].getCenterY(), endX: a3[n5][l4.id()].getCenterX(), endY: a3[n5][l4.id()].getCenterY() });
                    }), s3.nodes.length > 0 && (w2.push(s3), C2.add(n5));
                  }
                });
                var E2 = d2.packComponents(w2, t5.randomize).shifts;
                if (t5.quality == `draft`) i3.forEach(function(e7, t6) {
                  var n5 = e7.xCoords.map(function(e8) {
                    return e8 + E2[t6].dx;
                  }), r5 = e7.yCoords.map(function(e8) {
                    return e8 + E2[t6].dy;
                  });
                  e7.xCoords = n5, e7.yCoords = r5;
                });
                else {
                  var D2 = 0;
                  C2.forEach(function(e7) {
                    Object.keys(a3[e7]).forEach(function(t6) {
                      var n5 = a3[e7][t6];
                      n5.setCenter(n5.getCenterX() + E2[D2].dx, n5.getCenterY() + E2[D2].dy);
                    }), D2++;
                  });
                }
              }
            } else {
              var O2 = t5.eles.boundingBox();
              if (u2.push({ x: O2.x1 + O2.w / 2, y: O2.y1 + O2.h / 2 }), t5.randomize) {
                var k2 = s2(t5);
                i3.push(k2);
              }
              t5.quality == `default` || t5.quality == `proof` ? (a3.push(c2(t5, i3[0])), o2.relocateComponent(u2[0], a3[0], t5)) : o2.relocateComponent(u2[0], i3[0], t5);
            }
            var A2 = function(e7, n5) {
              if (t5.quality == `default` || t5.quality == `proof`) {
                typeof e7 == `number` && (e7 = n5);
                var r5 = void 0, o3 = void 0, s3 = e7.data(`id`);
                return a3.forEach(function(e8) {
                  s3 in e8 && (r5 = { x: e8[s3].getRect().getCenterX(), y: e8[s3].getRect().getCenterY() }, o3 = e8[s3]);
                }), t5.nodeDimensionsIncludeLabels && (o3.labelWidth && (o3.labelPosHorizontal == `left` ? r5.x += o3.labelWidth / 2 : o3.labelPosHorizontal == `right` && (r5.x -= o3.labelWidth / 2)), o3.labelHeight && (o3.labelPosVertical == `top` ? r5.y += o3.labelHeight / 2 : o3.labelPosVertical == `bottom` && (r5.y -= o3.labelHeight / 2))), r5 ?? (r5 = { x: e7.position(`x`), y: e7.position(`y`) }), { x: r5.x, y: r5.y };
              } else {
                var c3 = void 0;
                return i3.forEach(function(t6) {
                  var n6 = t6.nodeIndexes.get(e7.id());
                  n6 != null && (c3 = { x: t6.xCoords[n6], y: t6.yCoords[n6] });
                }), c3 ?? (c3 = { x: e7.position(`x`), y: e7.position(`y`) }), { x: c3.x, y: c3.y };
              }
            };
            if (t5.quality == `default` || t5.quality == `proof` || t5.randomize) {
              var j2 = o2.calcParentsWithoutChildren(n4, r4), M2 = r4.filter(function(e7) {
                return e7.css(`display`) == `none`;
              });
              t5.eles = r4.not(M2), r4.nodes().not(`:parent`).not(M2).layoutPositions(e6, t5, A2), j2.length > 0 && j2.forEach(function(e7) {
                e7.position(A2(e7));
              });
            } else console.log(`If randomize option is set to false, then quality option must be 'default' or 'proof'.`);
          } }]), e5;
        })();
      }), 657: ((e4, t4, n3) => {
        var r3 = n3(548), i2 = n3(140).layoutBase.Matrix, a2 = n3(140).layoutBase.SVD;
        e4.exports = { spectralLayout: function(e5) {
          var t5 = e5.cy, n4 = e5.eles, o2 = n4.nodes(), s2 = n4.nodes(`:parent`), c2 = /* @__PURE__ */ new Map(), l2 = /* @__PURE__ */ new Map(), u2 = /* @__PURE__ */ new Map(), d2 = [], f2 = [], p2 = [], m2 = [], h2 = [], g2 = [], _2 = [], v2 = [], y2 = void 0, b2 = 1e8, x2 = 1e-9, S2 = e5.piTol, C2 = e5.samplingType, w2 = e5.nodeSeparation, T2 = void 0, E2 = function() {
            for (var e6 = 0, t6 = 0, n5 = false; t6 < T2; ) {
              e6 = Math.floor(Math.random() * y2), n5 = false;
              for (var r4 = 0; r4 < t6; r4++) if (m2[r4] == e6) {
                n5 = true;
                break;
              }
              if (!n5) m2[t6] = e6, t6++;
              else continue;
            }
          }, D2 = function(e6, t6, n5) {
            for (var r4 = [], i3 = 0, a3 = 0, o3 = 0, s3 = void 0, c3 = [], u3 = 0, f3 = 1, p3 = 0; p3 < y2; p3++) c3[p3] = b2;
            for (r4[a3] = e6, c3[e6] = 0; a3 >= i3; ) {
              o3 = r4[i3++];
              for (var m3 = d2[o3], _3 = 0; _3 < m3.length; _3++) s3 = l2.get(m3[_3]), c3[s3] == b2 && (c3[s3] = c3[o3] + 1, r4[++a3] = s3);
              g2[o3][t6] = c3[o3] * w2;
            }
            if (n5) {
              for (var v3 = 0; v3 < y2; v3++) g2[v3][t6] < h2[v3] && (h2[v3] = g2[v3][t6]);
              for (var x3 = 0; x3 < y2; x3++) h2[x3] > u3 && (u3 = h2[x3], f3 = x3);
            }
            return f3;
          }, O2 = function(e6) {
            var t6 = void 0;
            if (e6) {
              t6 = Math.floor(Math.random() * y2);
              for (var n5 = 0; n5 < y2; n5++) h2[n5] = b2;
              for (var r4 = 0; r4 < T2; r4++) m2[r4] = t6, t6 = D2(t6, r4, e6);
            } else {
              E2();
              for (var i3 = 0; i3 < T2; i3++) D2(m2[i3], i3, e6, false);
            }
            for (var a3 = 0; a3 < y2; a3++) for (var o3 = 0; o3 < T2; o3++) g2[a3][o3] *= g2[a3][o3];
            for (var s3 = 0; s3 < T2; s3++) _2[s3] = [];
            for (var c3 = 0; c3 < T2; c3++) for (var l3 = 0; l3 < T2; l3++) _2[c3][l3] = g2[m2[l3]][c3];
          }, k2 = function() {
            for (var e6 = a2.svd(_2), t6 = e6.S, n5 = e6.U, r4 = e6.V, o3 = t6[0] * t6[0] * t6[0], s3 = [], c3 = 0; c3 < T2; c3++) {
              s3[c3] = [];
              for (var l3 = 0; l3 < T2; l3++) s3[c3][l3] = 0, c3 == l3 && (s3[c3][l3] = t6[c3] / (t6[c3] * t6[c3] + o3 / (t6[c3] * t6[c3])));
            }
            v2 = i2.multMat(i2.multMat(r4, s3), i2.transpose(n5));
          }, A2 = function() {
            for (var e6 = void 0, t6 = void 0, n5 = [], r4 = [], a3 = [], o3 = [], s3 = 0; s3 < y2; s3++) n5[s3] = Math.random(), r4[s3] = Math.random();
            n5 = i2.normalize(n5), r4 = i2.normalize(r4);
            for (var c3 = 0, l3 = x2, u3 = x2, d3 = void 0; ; ) {
              c3++;
              for (var m3 = 0; m3 < y2; m3++) a3[m3] = n5[m3];
              if (n5 = i2.multGamma(i2.multL(i2.multGamma(a3), g2, v2)), e6 = i2.dotProduct(a3, n5), n5 = i2.normalize(n5), l3 = i2.dotProduct(a3, n5), d3 = Math.abs(l3 / u3), d3 <= 1 + S2 && d3 >= 1) break;
              u3 = l3;
            }
            for (var h3 = 0; h3 < y2; h3++) a3[h3] = n5[h3];
            for (c3 = 0, u3 = x2; ; ) {
              c3++;
              for (var _3 = 0; _3 < y2; _3++) o3[_3] = r4[_3];
              if (o3 = i2.minusOp(o3, i2.multCons(a3, i2.dotProduct(a3, o3))), r4 = i2.multGamma(i2.multL(i2.multGamma(o3), g2, v2)), t6 = i2.dotProduct(o3, r4), r4 = i2.normalize(r4), l3 = i2.dotProduct(o3, r4), d3 = Math.abs(l3 / u3), d3 <= 1 + S2 && d3 >= 1) break;
              u3 = l3;
            }
            for (var b3 = 0; b3 < y2; b3++) o3[b3] = r4[b3];
            f2 = i2.multCons(a3, Math.sqrt(Math.abs(e6))), p2 = i2.multCons(o3, Math.sqrt(Math.abs(t6)));
          };
          r3.connectComponents(t5, n4, r3.getTopMostNodes(o2), c2), s2.forEach(function(e6) {
            r3.connectComponents(t5, n4, r3.getTopMostNodes(e6.descendants().intersection(n4)), c2);
          });
          for (var j2 = 0, M2 = 0; M2 < o2.length; M2++) o2[M2].isParent() || l2.set(o2[M2].id(), j2++);
          var N2 = true, P2 = false, F2 = void 0;
          try {
            for (var I2 = c2.keys()[Symbol.iterator](), L2; !(N2 = (L2 = I2.next()).done); N2 = true) {
              var R2 = L2.value;
              l2.set(R2, j2++);
            }
          } catch (e6) {
            P2 = true, F2 = e6;
          } finally {
            try {
              !N2 && I2.return && I2.return();
            } finally {
              if (P2) throw F2;
            }
          }
          for (var z2 = 0; z2 < l2.size; z2++) d2[z2] = [];
          s2.forEach(function(e6) {
            for (var t6 = e6.children().intersection(n4); t6.nodes(`:childless`).length == 0; ) t6 = t6.nodes()[0].children().intersection(n4);
            var r4 = 0, i3 = t6.nodes(`:childless`)[0].connectedEdges().length;
            t6.nodes(`:childless`).forEach(function(e7, t7) {
              e7.connectedEdges().length < i3 && (i3 = e7.connectedEdges().length, r4 = t7);
            }), u2.set(e6.id(), t6.nodes(`:childless`)[r4].id());
          }), o2.forEach(function(e6) {
            var t6 = void 0;
            t6 = e6.isParent() ? l2.get(u2.get(e6.id())) : l2.get(e6.id()), e6.neighborhood().nodes().forEach(function(r4) {
              n4.intersection(e6.edgesWith(r4)).length > 0 && (r4.isParent() ? d2[t6].push(u2.get(r4.id())) : d2[t6].push(r4.id()));
            });
          });
          var B2 = function(e6) {
            var n5 = l2.get(e6), r4 = void 0;
            c2.get(e6).forEach(function(i3) {
              r4 = t5.getElementById(i3).isParent() ? u2.get(i3) : i3, d2[n5].push(r4), d2[l2.get(r4)].push(e6);
            });
          }, V2 = true, ee2 = false, te2 = void 0;
          try {
            for (var H2 = c2.keys()[Symbol.iterator](), ne2; !(V2 = (ne2 = H2.next()).done); V2 = true) {
              var re2 = ne2.value;
              B2(re2);
            }
          } catch (e6) {
            ee2 = true, te2 = e6;
          } finally {
            try {
              !V2 && H2.return && H2.return();
            } finally {
              if (ee2) throw te2;
            }
          }
          y2 = l2.size;
          var U2 = void 0;
          if (y2 > 2) {
            T2 = y2 < e5.sampleSize ? y2 : e5.sampleSize;
            for (var W2 = 0; W2 < y2; W2++) g2[W2] = [];
            for (var G2 = 0; G2 < T2; G2++) v2[G2] = [];
            return e5.quality == `draft` || e5.step == `all` ? (O2(C2), k2(), A2(), U2 = { nodeIndexes: l2, xCoords: f2, yCoords: p2 }) : (l2.forEach(function(e6, n5) {
              f2.push(t5.getElementById(n5).position(`x`)), p2.push(t5.getElementById(n5).position(`y`));
            }), U2 = { nodeIndexes: l2, xCoords: f2, yCoords: p2 }), U2;
          } else {
            var ie2 = l2.keys(), K2 = t5.getElementById(ie2.next().value), q2 = K2.position(), J2 = K2.outerWidth();
            if (f2.push(q2.x), p2.push(q2.y), y2 == 2) {
              var Y2 = t5.getElementById(ie2.next().value).outerWidth();
              f2.push(q2.x + J2 / 2 + Y2 / 2 + e5.idealEdgeLength), p2.push(q2.y);
            }
            return U2 = { nodeIndexes: l2, xCoords: f2, yCoords: p2 }, U2;
          }
        } };
      }), 579: ((e4, t4, n3) => {
        var r3 = n3(212), i2 = function(e5) {
          e5 && e5(`layout`, `fcose`, r3);
        };
        typeof cytoscape < `u` && i2(cytoscape), e4.exports = i2;
      }), 140: ((t4) => {
        t4.exports = e3;
      }) }, n2 = {};
      function r2(e4) {
        var i2 = n2[e4];
        if (i2 !== void 0) return i2.exports;
        var a2 = n2[e4] = { exports: {} };
        return t3[e4](a2, a2.exports, r2), a2.exports;
      }
      return r2(579);
    })();
  });
}))(), 1), A = { L: `left`, R: `right`, T: `top`, B: `bottom` }, j = { L: h((e2) => `${e2},${e2 / 2} 0,${e2} 0,0`, `L`), R: h((e2) => `0,${e2 / 2} ${e2},0 ${e2},${e2}`, `R`), T: h((e2) => `0,0 ${e2},0 ${e2 / 2},${e2}`, `T`), B: h((e2) => `${e2 / 2},0 ${e2},${e2} 0,${e2}`, `B`) }, M = { L: h((e2, t2) => e2 - t2 + 2, `L`), R: h((e2, t2) => e2 - 2, `R`), T: h((e2, t2) => e2 - t2 + 2, `T`), B: h((e2, t2) => e2 - 2, `B`) }, N = h(function(e2) {
  return F(e2) ? e2 === `L` ? `R` : `L` : e2 === `T` ? `B` : `T`;
}, `getOppositeArchitectureDirection`), P = h(function(e2) {
  let t2 = e2;
  return t2 === `L` || t2 === `R` || t2 === `T` || t2 === `B`;
}, `isArchitectureDirection`), F = h(function(e2) {
  let t2 = e2;
  return t2 === `L` || t2 === `R`;
}, `isArchitectureDirectionX`), I = h(function(e2) {
  let t2 = e2;
  return t2 === `T` || t2 === `B`;
}, `isArchitectureDirectionY`), L = h(function(e2, t2) {
  let n2 = F(e2) && I(t2), r2 = I(e2) && F(t2);
  return n2 || r2;
}, `isArchitectureDirectionXY`), R = h(function(e2) {
  let t2 = e2[0], n2 = e2[1], r2 = F(t2) && I(n2), i2 = I(t2) && F(n2);
  return r2 || i2;
}, `isArchitecturePairXY`), z = h(function(e2) {
  return e2 !== `LL` && e2 !== `RR` && e2 !== `TT` && e2 !== `BB`;
}, `isValidArchitectureDirectionPair`), B = h(function(e2, t2) {
  let n2 = `${e2}${t2}`;
  return z(n2) ? n2 : void 0;
}, `getArchitectureDirectionPair`), V = h(function([e2, t2], n2) {
  let r2 = n2[0], i2 = n2[1];
  return F(r2) ? I(i2) ? [e2 + (r2 === `L` ? -1 : 1), t2 + (i2 === `T` ? 1 : -1)] : [e2 + (r2 === `L` ? -1 : 1), t2] : F(i2) ? [e2 + (i2 === `L` ? 1 : -1), t2 + (r2 === `T` ? 1 : -1)] : [e2, t2 + (r2 === `T` ? 1 : -1)];
}, `shiftPositionByArchitectureDirectionPair`), ee = h(function(e2) {
  return e2 === `LT` || e2 === `TL` ? [1, 1] : e2 === `BL` || e2 === `LB` ? [1, -1] : e2 === `BR` || e2 === `RB` ? [-1, -1] : [-1, 1];
}, `getArchitectureDirectionXYFactors`), te = h(function(e2, t2) {
  return L(e2, t2) ? `bend` : F(e2) ? `horizontal` : `vertical`;
}, `getArchitectureDirectionAlignment`), H = h(function(e2) {
  return e2.type === `service`;
}, `isArchitectureService`), ne = h(function(e2) {
  return e2.type === `junction`;
}, `isArchitectureJunction`), re = h((e2) => e2.data(), `edgeData`), U = h((e2) => e2.data(), `nodeData`), W = u.architecture, G = (_a = class {
  constructor() {
    this.nodes = {}, this.groups = {}, this.edges = [], this.registeredIds = {}, this.elements = {}, this.setAccTitle = n, this.getAccTitle = d, this.setDiagramTitle = o, this.getDiagramTitle = r, this.getAccDescription = s, this.setAccDescription = p, this.clear();
  }
  clear() {
    this.nodes = {}, this.groups = {}, this.edges = [], this.registeredIds = {}, this.dataStructures = void 0, this.elements = {}, c();
  }
  addService({ id: e2, icon: t2, in: n2, title: r2, iconText: i2 }) {
    if (this.registeredIds[e2] !== void 0) throw Error(`The service id [${e2}] is already in use by another ${this.registeredIds[e2]}`);
    if (n2 !== void 0) {
      if (e2 === n2) throw Error(`The service [${e2}] cannot be placed within itself`);
      if (this.registeredIds[n2] === void 0) throw Error(`The service [${e2}]'s parent does not exist. Please make sure the parent is created before this service`);
      if (this.registeredIds[n2] === `node`) throw Error(`The service [${e2}]'s parent is not a group`);
    }
    this.registeredIds[e2] = `node`, this.nodes[e2] = { id: e2, type: `service`, icon: t2, iconText: i2, title: r2, edges: [], in: n2 };
  }
  getServices() {
    return Object.values(this.nodes).filter(H);
  }
  addJunction({ id: e2, in: t2 }) {
    this.registeredIds[e2] = `node`, this.nodes[e2] = { id: e2, type: `junction`, edges: [], in: t2 };
  }
  getJunctions() {
    return Object.values(this.nodes).filter(ne);
  }
  getNodes() {
    return Object.values(this.nodes);
  }
  getNode(e2) {
    return this.nodes[e2] ?? null;
  }
  addGroup({ id: e2, icon: t2, in: n2, title: r2 }) {
    var _a2, _b, _c;
    if (((_a2 = this.registeredIds) == null ? void 0 : _a2[e2]) !== void 0) throw Error(`The group id [${e2}] is already in use by another ${this.registeredIds[e2]}`);
    if (n2 !== void 0) {
      if (e2 === n2) throw Error(`The group [${e2}] cannot be placed within itself`);
      if (((_b = this.registeredIds) == null ? void 0 : _b[n2]) === void 0) throw Error(`The group [${e2}]'s parent does not exist. Please make sure the parent is created before this group`);
      if (((_c = this.registeredIds) == null ? void 0 : _c[n2]) === `node`) throw Error(`The group [${e2}]'s parent is not a group`);
    }
    this.registeredIds[e2] = `group`, this.groups[e2] = { id: e2, icon: t2, title: r2, in: n2 };
  }
  getGroups() {
    return Object.values(this.groups);
  }
  addEdge({ lhsId: e2, rhsId: t2, lhsDir: n2, rhsDir: r2, lhsInto: i2, rhsInto: a2, lhsGroup: o2, rhsGroup: s2, title: c2 }) {
    if (!P(n2)) throw Error(`Invalid direction given for left hand side of edge ${e2}--${t2}. Expected (L,R,T,B) got ${String(n2)}`);
    if (!P(r2)) throw Error(`Invalid direction given for right hand side of edge ${e2}--${t2}. Expected (L,R,T,B) got ${String(r2)}`);
    if (this.nodes[e2] === void 0 && this.groups[e2] === void 0) throw Error(`The left-hand id [${e2}] does not yet exist. Please create the service/group before declaring an edge to it.`);
    if (this.nodes[t2] === void 0 && this.groups[t2] === void 0) throw Error(`The right-hand id [${t2}] does not yet exist. Please create the service/group before declaring an edge to it.`);
    let l2 = this.nodes[e2].in, u2 = this.nodes[t2].in;
    if (o2 && l2 && u2 && l2 == u2) throw Error(`The left-hand id [${e2}] is modified to traverse the group boundary, but the edge does not pass through two groups.`);
    if (s2 && l2 && u2 && l2 == u2) throw Error(`The right-hand id [${t2}] is modified to traverse the group boundary, but the edge does not pass through two groups.`);
    let d2 = { lhsId: e2, lhsDir: n2, lhsInto: i2, lhsGroup: o2, rhsId: t2, rhsDir: r2, rhsInto: a2, rhsGroup: s2, title: c2 };
    this.edges.push(d2), this.nodes[e2] && this.nodes[t2] && (this.nodes[e2].edges.push(this.edges[this.edges.length - 1]), this.nodes[t2].edges.push(this.edges[this.edges.length - 1]));
  }
  getEdges() {
    return this.edges;
  }
  getDataStructures() {
    if (this.dataStructures === void 0) {
      let e2 = {}, t2 = Object.entries(this.nodes).reduce((t3, [n3, r3]) => (t3[n3] = r3.edges.reduce((t4, r4) => {
        var _a2, _b;
        let i3 = (_a2 = this.getNode(r4.lhsId)) == null ? void 0 : _a2.in, a3 = (_b = this.getNode(r4.rhsId)) == null ? void 0 : _b.in;
        if (i3 && a3 && i3 !== a3) {
          let t5 = te(r4.lhsDir, r4.rhsDir);
          t5 !== `bend` && (e2[i3] ?? (e2[i3] = {}), e2[i3][a3] = t5, e2[a3] ?? (e2[a3] = {}), e2[a3][i3] = t5);
        }
        if (r4.lhsId === n3) {
          let e3 = B(r4.lhsDir, r4.rhsDir);
          e3 && (t4[e3] = r4.rhsId);
        } else {
          let e3 = B(r4.rhsDir, r4.lhsDir);
          e3 && (t4[e3] = r4.lhsId);
        }
        return t4;
      }, {}), t3), {}), n2 = Object.keys(t2)[0], r2 = { [n2]: 1 }, i2 = Object.keys(t2).reduce((e3, t3) => t3 === n2 ? e3 : { ...e3, [t3]: 1 }, {}), a2 = h((e3) => {
        let n3 = { [e3]: [0, 0] }, a3 = [e3];
        for (; a3.length > 0; ) {
          let e4 = a3.shift();
          if (e4) {
            r2[e4] = 1, delete i2[e4];
            let o3 = t2[e4], [s2, c2] = n3[e4];
            Object.entries(o3).forEach(([e5, t3]) => {
              r2[t3] || (n3[t3] = V([s2, c2], e5), a3.push(t3));
            });
          }
        }
        return n3;
      }, `BFS`), o2 = [a2(n2)];
      for (; Object.keys(i2).length > 0; ) o2.push(a2(Object.keys(i2)[0]));
      this.dataStructures = { adjList: t2, spatialMaps: o2, groupAlignments: e2 };
    }
    return this.dataStructures;
  }
  setElementForId(e2, t2) {
    this.elements[e2] = t2;
  }
  getElementById(e2) {
    return this.elements[e2];
  }
  getConfig() {
    return v({ ...W, ...f().architecture });
  }
  getConfigField(e2) {
    return this.getConfig()[e2];
  }
}, h(_a, `ArchitectureDB`), _a), ie = h((e2, t2) => {
  w(e2, t2), e2.groups.map((e3) => t2.addGroup(e3)), e2.services.map((e3) => t2.addService({ ...e3, type: `service` })), e2.junctions.map((e3) => t2.addJunction({ ...e3, type: `junction` })), e2.edges.map((e3) => t2.addEdge(e3));
}, `populateDb`), K = { parser: { yy: void 0 }, parse: h(async (e2) => {
  var _a2;
  let t2 = await T(`architecture`, e2);
  m.debug(t2);
  let n2 = (_a2 = K.parser) == null ? void 0 : _a2.yy;
  if (!(n2 instanceof G)) throw Error(`parser.parser?.yy was not a ArchitectureDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.`);
  ie(t2, n2);
}, `parse`) }, q = h((e2) => `
  .edge {
    stroke-width: ${e2.archEdgeWidth};
    stroke: ${e2.archEdgeColor};
    fill: none;
  }

  .arrow {
    fill: ${e2.archEdgeArrowColor};
  }

  .node-bkg {
    fill: none;
    stroke: ${e2.archGroupBorderColor};
    stroke-width: ${e2.archGroupBorderWidth};
    stroke-dasharray: 8;
  }
  .node-icon-text {
    display: flex; 
    align-items: center;
  }
  
  .node-icon-text > div {
    color: #fff;
    margin: 1px;
    height: fit-content;
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
`, `getStyles`), J = h((e2) => `<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/>${e2}</g>`, `wrapIcon`), Y = { prefix: `mermaid-architecture`, height: 80, width: 80, icons: { database: { body: J(`<path id="b" data-name="4" d="m20,57.86c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="c" data-name="3" d="m20,45.95c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="d" data-name="2" d="m20,34.05c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse id="e" data-name="1" cx="40" cy="22.14" rx="20" ry="7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="20" y1="57.86" x2="20" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="60" y1="57.86" x2="60" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>`) }, server: { body: J(`<rect x="17.5" y="17.5" width="45" height="45" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="32.5" x2="62.5" y2="32.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="47.5" x2="62.5" y2="47.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><g><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g>`) }, disk: { body: J(`<rect x="20" y="15" width="40" height="50" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="14" ry="14.58" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="4" ry="4.17" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m37.51,42.52l-4.83,13.22c-.26.71-1.1,1.02-1.76.64l-4.18-2.42c-.66-.38-.81-1.26-.33-1.84l9.01-10.8c.88-1.05,2.56-.08,2.09,1.2Z" style="fill: #fff; stroke-width: 0px;"/>`) }, internet: { body: J(`<circle cx="40" cy="40" r="22.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="40" y1="17.5" x2="40" y2="62.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="40" x2="62.5" y2="40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m39.99,17.51c-15.28,11.1-15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m40.01,17.51c15.28,11.1,15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="30.1" x2="60.25" y2="30.1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="49.9" x2="60.25" y2="49.9" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>`) }, cloud: { body: J(`<path d="m65,47.5c0,2.76-2.24,5-5,5H20c-2.76,0-5-2.24-5-5,0-1.87,1.03-3.51,2.56-4.36-.04-.21-.06-.42-.06-.64,0-2.6,2.48-4.74,5.65-4.97,1.65-4.51,6.34-7.76,11.85-7.76.86,0,1.69.08,2.5.23,2.09-1.57,4.69-2.5,7.5-2.5,6.1,0,11.19,4.38,12.28,10.17,2.14.56,3.72,2.51,3.72,4.83,0,.03,0,.07-.01.1,2.29.46,4.01,2.48,4.01,4.9Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>`) }, unknown: S, blank: { body: J(``) } } }, ae = h(async function(e2, t2, n2) {
  let r2 = n2.getConfigField(`padding`), i2 = n2.getConfigField(`iconSize`), a2 = i2 / 2, o2 = i2 / 6, s2 = o2 / 2;
  await Promise.all(t2.edges().map(async (t3) => {
    var _a2, _b;
    let { source: i3, sourceDir: c2, sourceArrow: u2, sourceGroup: d2, target: f2, targetDir: p2, targetArrow: m2, targetGroup: h2, label: g2 } = re(t3), { x: v2, y: y2 } = t3[0].sourceEndpoint(), { x: b2, y: S2 } = t3[0].midpoint(), { x: C2, y: w2 } = t3[0].targetEndpoint(), T2 = r2 + 4;
    if (d2 && (F(c2) ? v2 += c2 === `L` ? -T2 : T2 : y2 += c2 === `T` ? -T2 : T2 + 18), h2 && (F(p2) ? C2 += p2 === `L` ? -T2 : T2 : w2 += p2 === `T` ? -T2 : T2 + 18), !d2 && ((_a2 = n2.getNode(i3)) == null ? void 0 : _a2.type) === `junction` && (F(c2) ? v2 += c2 === `L` ? a2 : -a2 : y2 += c2 === `T` ? a2 : -a2), !h2 && ((_b = n2.getNode(f2)) == null ? void 0 : _b.type) === `junction` && (F(p2) ? C2 += p2 === `L` ? a2 : -a2 : w2 += p2 === `T` ? a2 : -a2), t3[0]._private.rscratch) {
      let t4 = e2.insert(`g`);
      if (t4.insert(`path`).attr(`d`, `M ${v2},${y2} L ${b2},${S2} L${C2},${w2} `).attr(`class`, `edge`).attr(`id`, _(i3, f2, { prefix: `L` })), u2) {
        let e3 = F(c2) ? M[c2](v2, o2) : v2 - s2, n3 = I(c2) ? M[c2](y2, o2) : y2 - s2;
        t4.insert(`polygon`).attr(`points`, j[c2](o2)).attr(`transform`, `translate(${e3},${n3})`).attr(`class`, `arrow`);
      }
      if (m2) {
        let e3 = F(p2) ? M[p2](C2, o2) : C2 - s2, n3 = I(p2) ? M[p2](w2, o2) : w2 - s2;
        t4.insert(`polygon`).attr(`points`, j[p2](o2)).attr(`transform`, `translate(${e3},${n3})`).attr(`class`, `arrow`);
      }
      if (g2) {
        let e3 = L(c2, p2) ? `XY` : F(c2) ? `X` : `Y`, n3 = 0;
        n3 = e3 === `X` ? Math.abs(v2 - C2) : e3 === `Y` ? Math.abs(y2 - w2) / 1.5 : Math.abs(v2 - C2) / 2;
        let r3 = t4.append(`g`);
        if (await x(r3, g2, { useHtmlLabels: false, width: n3, classes: `architecture-service-label` }, l()), r3.attr(`dy`, `1em`).attr(`alignment-baseline`, `middle`).attr(`dominant-baseline`, `middle`).attr(`text-anchor`, `middle`), e3 === `X`) r3.attr(`transform`, `translate(` + b2 + `, ` + S2 + `)`);
        else if (e3 === `Y`) r3.attr(`transform`, `translate(` + b2 + `, ` + S2 + `) rotate(-90)`);
        else if (e3 === `XY`) {
          let e4 = B(c2, p2);
          if (e4 && R(e4)) {
            let t5 = r3.node().getBoundingClientRect(), [n4, i4] = ee(e4);
            r3.attr(`dominant-baseline`, `auto`).attr(`transform`, `rotate(${-1 * n4 * i4 * 45})`);
            let a3 = r3.node().getBoundingClientRect();
            r3.attr(`transform`, `
                translate(${b2}, ${S2 - t5.height / 2})
                translate(${n4 * a3.width / 2}, ${i4 * a3.height / 2})
                rotate(${-1 * n4 * i4 * 45}, 0, ${t5.height / 2})
              `);
          }
        }
      }
    }
  }));
}, `drawEdges`), X = h(async function(e2, t2, n2) {
  let r2 = n2.getConfigField(`padding`) * 0.75, i2 = n2.getConfigField(`fontSize`), a2 = n2.getConfigField(`iconSize`) / 2;
  await Promise.all(t2.nodes().map(async (t3) => {
    let o2 = U(t3);
    if (o2.type === `group`) {
      let { h: s2, w: c2, x1: u2, y1: d2 } = t3.boundingBox(), f2 = e2.append(`rect`);
      f2.attr(`id`, `group-${o2.id}`).attr(`x`, u2 + a2).attr(`y`, d2 + a2).attr(`width`, c2).attr(`height`, s2).attr(`class`, `node-bkg`);
      let p2 = e2.append(`g`), m2 = u2, h2 = d2;
      if (o2.icon) {
        let e3 = p2.append(`g`);
        e3.html(`<g>${await C(o2.icon, { height: r2, width: r2, fallbackPrefix: Y.prefix })}</g>`), e3.attr(`transform`, `translate(` + (m2 + a2 + 1) + `, ` + (h2 + a2 + 1) + `)`), m2 += r2, h2 += i2 / 2 - 1 - 2;
      }
      if (o2.label) {
        let e3 = p2.append(`g`);
        await x(e3, o2.label, { useHtmlLabels: false, width: c2, classes: `architecture-service-label` }, l()), e3.attr(`dy`, `1em`).attr(`alignment-baseline`, `middle`).attr(`dominant-baseline`, `start`).attr(`text-anchor`, `start`), e3.attr(`transform`, `translate(` + (m2 + a2 + 4) + `, ` + (h2 + a2 + 2) + `)`);
      }
      n2.setElementForId(o2.id, f2);
    }
  }));
}, `drawGroups`), oe = h(async function(e2, t2, n2) {
  let r2 = l();
  for (let i2 of n2) {
    let n3 = t2.append(`g`), o2 = e2.getConfigField(`iconSize`);
    if (i2.title) {
      let e3 = n3.append(`g`);
      await x(e3, i2.title, { useHtmlLabels: false, width: o2 * 1.5, classes: `architecture-service-label` }, r2), e3.attr(`dy`, `1em`).attr(`alignment-baseline`, `middle`).attr(`dominant-baseline`, `middle`).attr(`text-anchor`, `middle`), e3.attr(`transform`, `translate(` + o2 / 2 + `, ` + o2 + `)`);
    }
    let s2 = n3.append(`g`);
    if (i2.icon) s2.html(`<g>${await C(i2.icon, { height: o2, width: o2, fallbackPrefix: Y.prefix })}</g>`);
    else if (i2.iconText) {
      s2.html(`<g>${await C(`blank`, { height: o2, width: o2, fallbackPrefix: Y.prefix })}</g>`);
      let e3 = s2.append(`g`).append(`foreignObject`).attr(`width`, o2).attr(`height`, o2).append(`div`).attr(`class`, `node-icon-text`).attr(`style`, `height: ${o2}px;`).append(`div`).html(a(i2.iconText, r2)), t3 = parseInt(window.getComputedStyle(e3.node(), null).getPropertyValue(`font-size`).replace(/\D/g, ``)) ?? 16;
      e3.attr(`style`, `-webkit-line-clamp: ${Math.floor((o2 - 2) / t3)};`);
    } else s2.append(`path`).attr(`class`, `node-bkg`).attr(`id`, `node-` + i2.id).attr(`d`, `M0 ${o2} v${-o2} q0,-5 5,-5 h${o2} q5,0 5,5 v${o2} H0 Z`);
    n3.attr(`id`, `service-${i2.id}`).attr(`class`, `architecture-service`);
    let { width: c2, height: l2 } = n3.node().getBBox();
    i2.width = c2, i2.height = l2, e2.setElementForId(i2.id, n3);
  }
  return 0;
}, `drawServices`), Z = h(function(e2, t2, n2) {
  n2.forEach((n3) => {
    let r2 = t2.append(`g`), i2 = e2.getConfigField(`iconSize`);
    r2.append(`g`).append(`rect`).attr(`id`, `node-` + n3.id).attr(`fill-opacity`, `0`).attr(`width`, i2).attr(`height`, i2), r2.attr(`class`, `architecture-junction`);
    let { width: a2, height: o2 } = r2._groups[0][0].getBBox();
    r2.width = a2, r2.height = o2, e2.setElementForId(n3.id, r2);
  });
}, `drawJunctions`);
b([{ name: Y.prefix, icons: Y }]), E.use(k.default);
function se(e2, t2, n2) {
  e2.forEach((e3) => {
    t2.add({ group: `nodes`, data: { type: `service`, id: e3.id, icon: e3.icon, label: e3.title, parent: e3.in, width: n2.getConfigField(`iconSize`), height: n2.getConfigField(`iconSize`) }, classes: `node-service` });
  });
}
h(se, `addServices`);
function ce(e2, t2, n2) {
  e2.forEach((e3) => {
    t2.add({ group: `nodes`, data: { type: `junction`, id: e3.id, parent: e3.in, width: n2.getConfigField(`iconSize`), height: n2.getConfigField(`iconSize`) }, classes: `node-junction` });
  });
}
h(ce, `addJunctions`);
function le(e2, t2) {
  t2.nodes().map((t3) => {
    let n2 = U(t3);
    n2.type !== `group` && (n2.x = t3.position().x, n2.y = t3.position().y, e2.getElementById(n2.id).attr(`transform`, `translate(` + (n2.x || 0) + `,` + (n2.y || 0) + `)`));
  });
}
h(le, `positionNodes`);
function ue(e2, t2) {
  e2.forEach((e3) => {
    t2.add({ group: `nodes`, data: { type: `group`, id: e3.id, icon: e3.icon, label: e3.title, parent: e3.in }, classes: `node-group` });
  });
}
h(ue, `addGroups`);
function de(e2, t2) {
  e2.forEach((e3) => {
    let { lhsId: n2, rhsId: r2, lhsInto: i2, lhsGroup: a2, rhsInto: o2, lhsDir: s2, rhsDir: c2, rhsGroup: l2, title: u2 } = e3, d2 = L(e3.lhsDir, e3.rhsDir) ? `segments` : `straight`, f2 = { id: `${n2}-${r2}`, label: u2, source: n2, sourceDir: s2, sourceArrow: i2, sourceGroup: a2, sourceEndpoint: s2 === `L` ? `0 50%` : s2 === `R` ? `100% 50%` : s2 === `T` ? `50% 0` : `50% 100%`, target: r2, targetDir: c2, targetArrow: o2, targetGroup: l2, targetEndpoint: c2 === `L` ? `0 50%` : c2 === `R` ? `100% 50%` : c2 === `T` ? `50% 0` : `50% 100%` };
    t2.add({ group: `edges`, data: f2, classes: d2 });
  });
}
h(de, `addEdges`);
function fe(e2, t2, n2) {
  let r2 = h((e3, t3) => Object.entries(e3).reduce((e4, [r3, i3]) => {
    var _a2;
    let a3 = 0, o2 = Object.entries(i3);
    if (o2.length === 1) return e4[r3] = o2[0][1], e4;
    for (let i4 = 0; i4 < o2.length - 1; i4++) for (let s2 = i4 + 1; s2 < o2.length; s2++) {
      let [c2, l2] = o2[i4], [u2, d2] = o2[s2];
      if (((_a2 = n2[c2]) == null ? void 0 : _a2[u2]) === t3) e4[r3] ?? (e4[r3] = []), e4[r3] = [...e4[r3], ...l2, ...d2];
      else if (c2 === `default` || u2 === `default`) e4[r3] ?? (e4[r3] = []), e4[r3] = [...e4[r3], ...l2, ...d2];
      else {
        let t4 = `${r3}-${a3++}`;
        e4[t4] = l2;
        let n3 = `${r3}-${a3++}`;
        e4[n3] = d2;
      }
    }
    return e4;
  }, {}), `flattenAlignments`), [i2, a2] = t2.map((t3) => {
    let n3 = {}, i3 = {};
    return Object.entries(t3).forEach(([t4, [r3, a3]]) => {
      var _a2, _b, _c;
      let o2 = ((_a2 = e2.getNode(t4)) == null ? void 0 : _a2.in) ?? `default`;
      n3[a3] ?? (n3[a3] = {}), (_b = n3[a3])[o2] ?? (_b[o2] = []), n3[a3][o2].push(t4), i3[r3] ?? (i3[r3] = {}), (_c = i3[r3])[o2] ?? (_c[o2] = []), i3[r3][o2].push(t4);
    }), { horiz: Object.values(r2(n3, `horizontal`)).filter((e3) => e3.length > 1), vert: Object.values(r2(i3, `vertical`)).filter((e3) => e3.length > 1) };
  }).reduce(([e3, t3], { horiz: n3, vert: r3 }) => [[...e3, ...n3], [...t3, ...r3]], [[], []]);
  return { horizontal: i2, vertical: a2 };
}
h(fe, `getAlignments`);
function pe(e2, t2) {
  let n2 = [], r2 = h((e3) => `${e3[0]},${e3[1]}`, `posToStr`), i2 = h((e3) => e3.split(`,`).map((e4) => parseInt(e4)), `strToPos`);
  return e2.forEach((e3) => {
    let a2 = Object.fromEntries(Object.entries(e3).map(([e4, t3]) => [r2(t3), e4])), o2 = [r2([0, 0])], s2 = {}, c2 = { L: [-1, 0], R: [1, 0], T: [0, 1], B: [0, -1] };
    for (; o2.length > 0; ) {
      let e4 = o2.shift();
      if (e4) {
        s2[e4] = 1;
        let l2 = a2[e4];
        if (l2) {
          let u2 = i2(e4);
          Object.entries(c2).forEach(([e5, i3]) => {
            let c3 = r2([u2[0] + i3[0], u2[1] + i3[1]]), d2 = a2[c3];
            d2 && !s2[c3] && (o2.push(c3), n2.push({ [A[e5]]: d2, [A[N(e5)]]: l2, gap: 1.5 * t2.getConfigField(`iconSize`) }));
          });
        }
      }
    }
  }), n2;
}
h(pe, `getRelativeConstraints`);
function me(e2, t2, n2, r2, i2, { spatialMaps: a2, groupAlignments: o2 }) {
  return new Promise((s2) => {
    let c2 = g(`body`).append(`div`).attr(`id`, `cy`).attr(`style`, `display:none`), l2 = E({ container: document.getElementById(`cy`), style: [{ selector: `edge`, style: { "curve-style": `straight`, label: `data(label)`, "source-endpoint": `data(sourceEndpoint)`, "target-endpoint": `data(targetEndpoint)` } }, { selector: `edge.segments`, style: { "curve-style": `segments`, "segment-weights": `0`, "segment-distances": [0.5], "edge-distances": `endpoints`, "source-endpoint": `data(sourceEndpoint)`, "target-endpoint": `data(targetEndpoint)` } }, { selector: `node`, style: { "compound-sizing-wrt-labels": `include` } }, { selector: `node[label]`, style: { "text-valign": `bottom`, "text-halign": `center`, "font-size": `${i2.getConfigField(`fontSize`)}px` } }, { selector: `.node-service`, style: { label: `data(label)`, width: `data(width)`, height: `data(height)` } }, { selector: `.node-junction`, style: { width: `data(width)`, height: `data(height)` } }, { selector: `.node-group`, style: { padding: `${i2.getConfigField(`padding`)}px` } }], layout: { name: `grid`, boundingBox: { x1: 0, x2: 100, y1: 0, y2: 100 } } });
    c2.remove(), ue(n2, l2), se(e2, l2, i2), ce(t2, l2, i2), de(r2, l2);
    let u2 = fe(i2, a2, o2), d2 = pe(a2, i2), f2 = l2.layout({ name: `fcose`, quality: `proof`, styleEnabled: false, animate: false, nodeDimensionsIncludeLabels: false, idealEdgeLength(e3) {
      let [t3, n3] = e3.connectedNodes(), { parent: r3 } = U(t3), { parent: a3 } = U(n3);
      return r3 === a3 ? 1.5 * i2.getConfigField(`iconSize`) : 0.5 * i2.getConfigField(`iconSize`);
    }, edgeElasticity(e3) {
      let [t3, n3] = e3.connectedNodes(), { parent: r3 } = U(t3), { parent: i3 } = U(n3);
      return r3 === i3 ? 0.45 : 1e-3;
    }, alignmentConstraint: u2, relativePlacementConstraint: d2 });
    f2.one(`layoutstop`, () => {
      var _a2;
      function e3(e4, t3, n3, r3) {
        let i3, a3, { x: o3, y: s3 } = e4, { x: c3, y: l3 } = t3;
        a3 = (r3 - s3 + (o3 - n3) * (s3 - l3) / (o3 - c3)) / Math.sqrt(1 + ((s3 - l3) / (o3 - c3)) ** 2), i3 = Math.sqrt((r3 - s3) ** 2 + (n3 - o3) ** 2 - a3 ** 2);
        let u3 = Math.sqrt((c3 - o3) ** 2 + (l3 - s3) ** 2);
        i3 /= u3;
        let d3 = (c3 - o3) * (r3 - s3) - (l3 - s3) * (n3 - o3);
        switch (true) {
          case d3 >= 0:
            d3 = 1;
            break;
          case d3 < 0:
            d3 = -1;
            break;
        }
        let f3 = (c3 - o3) * (n3 - o3) + (l3 - s3) * (r3 - s3);
        switch (true) {
          case f3 >= 0:
            f3 = 1;
            break;
          case f3 < 0:
            f3 = -1;
            break;
        }
        return a3 = Math.abs(a3) * d3, i3 *= f3, { distances: a3, weights: i3 };
      }
      h(e3, `getSegmentWeights`), l2.startBatch();
      for (let t3 of Object.values(l2.edges())) if ((_a2 = t3.data) == null ? void 0 : _a2.call(t3)) {
        let { x: n3, y: r3 } = t3.source().position(), { x: i3, y: a3 } = t3.target().position();
        if (n3 !== i3 && r3 !== a3) {
          let n4 = t3.sourceEndpoint(), r4 = t3.targetEndpoint(), { sourceDir: i4 } = re(t3), [a4, o3] = I(i4) ? [n4.x, r4.y] : [r4.x, n4.y], { weights: s3, distances: c3 } = e3(n4, r4, a4, o3);
          t3.style(`segment-distances`, c3), t3.style(`segment-weights`, s3);
        }
      }
      l2.endBatch(), f2.run();
    }), f2.run(), l2.ready((e3) => {
      m.info(`Ready`, e3), s2(l2);
    });
  });
}
h(me, `layoutArchitecture`);
var he = { parser: K, get db() {
  return new G();
}, renderer: { draw: h(async (e2, t2, n2, r2) => {
  let a2 = r2.db, o2 = a2.getServices(), s2 = a2.getJunctions(), c2 = a2.getGroups(), l2 = a2.getEdges(), u2 = a2.getDataStructures(), d2 = y(t2), f2 = d2.append(`g`);
  f2.attr(`class`, `architecture-edges`);
  let p2 = d2.append(`g`);
  p2.attr(`class`, `architecture-services`);
  let m2 = d2.append(`g`);
  m2.attr(`class`, `architecture-groups`), await oe(a2, p2, o2), Z(a2, p2, s2);
  let h2 = await me(o2, s2, c2, l2, a2, u2);
  await ae(f2, h2, a2), await X(m2, h2, a2), le(a2, h2), i(void 0, d2, a2.getConfigField(`padding`), a2.getConfigField(`useMaxWidth`));
}, `draw`) }, styles: q };
export {
  he as diagram
};
