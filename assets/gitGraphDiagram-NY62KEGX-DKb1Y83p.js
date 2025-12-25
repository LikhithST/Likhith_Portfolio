var _a;
import { B as e, C as t, K as n, U as r, _ as i, a, b as o, d as s, s as c, v as l, y as u, z as d } from "./chunk-ABZYJK2D-ODb6qSou.js";
import { g as f, h as p, p as ee } from "./src-D8UWkQNo.js";
import "./math-O_7OW4FW.js";
import { g as m, i as h, m as g } from "./chunk-S3R3BYOJ-D8yhV3IZ.js";
import "./dist-DrVb-WkD.js";
import "./identity-IHMFXfGJ.js";
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
import { t as _ } from "./chunk-4BX2VUAB-DvcVo9Pr.js";
import { t as te } from "./mermaid-parser.core-pDIzeYSr.js";
import { t as ne } from "./chunk-QZHKN3VN-D1KcrvSB.js";
var v = { NORMAL: 0, REVERSE: 1, HIGHLIGHT: 2, MERGE: 3, CHERRY_PICK: 4 }, re = s.gitGraph, y = p(() => h({ ...re, ...u().gitGraph }), `getConfig`), b = new ne(() => {
  let e2 = y(), t2 = e2.mainBranchName, n2 = e2.mainBranchOrder;
  return { mainBranchName: t2, commits: /* @__PURE__ */ new Map(), head: null, branchConfig: /* @__PURE__ */ new Map([[t2, { name: t2, order: n2 }]]), branches: /* @__PURE__ */ new Map([[t2, null]]), currBranch: t2, direction: `LR`, seq: 0, options: {} };
});
function x() {
  return g({ length: 7 });
}
p(x, `getID`);
function S(e2, t2) {
  let n2 = /* @__PURE__ */ Object.create(null);
  return e2.reduce((e3, r2) => {
    let i2 = t2(r2);
    return n2[i2] || (n2[i2] = true, e3.push(r2)), e3;
  }, []);
}
p(S, `uniqBy`);
var ie = p(function(e2) {
  b.records.direction = e2;
}, `setDirection`), ae = p(function(e2) {
  f.debug(`options str`, e2), e2 = e2 == null ? void 0 : e2.trim(), e2 || (e2 = `{}`);
  try {
    b.records.options = JSON.parse(e2);
  } catch (e3) {
    f.error(`error while parsing gitGraph options`, e3.message);
  }
}, `setOptions`), oe = p(function() {
  return b.records.options;
}, `getOptions`), se = p(function(e2) {
  let t2 = e2.msg, n2 = e2.id, r2 = e2.type, i2 = e2.tags;
  f.info(`commit`, t2, n2, r2, i2), f.debug(`Entering commit:`, t2, n2, r2, i2);
  let a2 = y();
  n2 = c.sanitizeText(n2, a2), t2 = c.sanitizeText(t2, a2), i2 = i2 == null ? void 0 : i2.map((e3) => c.sanitizeText(e3, a2));
  let o2 = { id: n2 || b.records.seq + `-` + x(), message: t2, seq: b.records.seq++, type: r2 ?? v.NORMAL, tags: i2 ?? [], parents: b.records.head == null ? [] : [b.records.head.id], branch: b.records.currBranch };
  b.records.head = o2, f.info(`main branch`, a2.mainBranchName), b.records.commits.has(o2.id) && f.warn(`Commit ID ${o2.id} already exists`), b.records.commits.set(o2.id, o2), b.records.branches.set(b.records.currBranch, o2.id), f.debug(`in pushCommit ` + o2.id);
}, `commit`), ce = p(function(e2) {
  let t2 = e2.name, n2 = e2.order;
  if (t2 = c.sanitizeText(t2, y()), b.records.branches.has(t2)) throw Error(`Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${t2}")`);
  b.records.branches.set(t2, b.records.head == null ? null : b.records.head.id), b.records.branchConfig.set(t2, { name: t2, order: n2 }), C(t2), f.debug(`in createBranch`);
}, `branch`), le = p((e2) => {
  let t2 = e2.branch, n2 = e2.id, r2 = e2.type, i2 = e2.tags, a2 = y();
  t2 = c.sanitizeText(t2, a2), n2 && (n2 = c.sanitizeText(n2, a2));
  let o2 = b.records.branches.get(b.records.currBranch), s2 = b.records.branches.get(t2), l2 = o2 ? b.records.commits.get(o2) : void 0, u2 = s2 ? b.records.commits.get(s2) : void 0;
  if (l2 && u2 && l2.branch === t2) throw Error(`Cannot merge branch '${t2}' into itself.`);
  if (b.records.currBranch === t2) {
    let e3 = Error(`Incorrect usage of "merge". Cannot merge a branch to itself`);
    throw e3.hash = { text: `merge ${t2}`, token: `merge ${t2}`, expected: [`branch abc`] }, e3;
  }
  if (l2 === void 0 || !l2) {
    let e3 = Error(`Incorrect usage of "merge". Current branch (${b.records.currBranch})has no commits`);
    throw e3.hash = { text: `merge ${t2}`, token: `merge ${t2}`, expected: [`commit`] }, e3;
  }
  if (!b.records.branches.has(t2)) {
    let e3 = Error(`Incorrect usage of "merge". Branch to be merged (` + t2 + `) does not exist`);
    throw e3.hash = { text: `merge ${t2}`, token: `merge ${t2}`, expected: [`branch ${t2}`] }, e3;
  }
  if (u2 === void 0 || !u2) {
    let e3 = Error(`Incorrect usage of "merge". Branch to be merged (` + t2 + `) has no commits`);
    throw e3.hash = { text: `merge ${t2}`, token: `merge ${t2}`, expected: [`"commit"`] }, e3;
  }
  if (l2 === u2) {
    let e3 = Error(`Incorrect usage of "merge". Both branches have same head`);
    throw e3.hash = { text: `merge ${t2}`, token: `merge ${t2}`, expected: [`branch abc`] }, e3;
  }
  if (n2 && b.records.commits.has(n2)) {
    let e3 = Error(`Incorrect usage of "merge". Commit with id:` + n2 + ` already exists, use different custom id`);
    throw e3.hash = { text: `merge ${t2} ${n2} ${r2} ${i2 == null ? void 0 : i2.join(` `)}`, token: `merge ${t2} ${n2} ${r2} ${i2 == null ? void 0 : i2.join(` `)}`, expected: [`merge ${t2} ${n2}_UNIQUE ${r2} ${i2 == null ? void 0 : i2.join(` `)}`] }, e3;
  }
  let d2 = s2 || ``, p2 = { id: n2 || `${b.records.seq}-${x()}`, message: `merged branch ${t2} into ${b.records.currBranch}`, seq: b.records.seq++, parents: b.records.head == null ? [] : [b.records.head.id, d2], branch: b.records.currBranch, type: v.MERGE, customType: r2, customId: !!n2, tags: i2 ?? [] };
  b.records.head = p2, b.records.commits.set(p2.id, p2), b.records.branches.set(b.records.currBranch, p2.id), f.debug(b.records.branches), f.debug(`in mergeBranch`);
}, `merge`), ue = p(function(e2) {
  let t2 = e2.id, n2 = e2.targetId, r2 = e2.tags, i2 = e2.parent;
  f.debug(`Entering cherryPick:`, t2, n2, r2);
  let a2 = y();
  if (t2 = c.sanitizeText(t2, a2), n2 = c.sanitizeText(n2, a2), r2 = r2 == null ? void 0 : r2.map((e3) => c.sanitizeText(e3, a2)), i2 = c.sanitizeText(i2, a2), !t2 || !b.records.commits.has(t2)) {
    let e3 = Error(`Incorrect usage of "cherryPick". Source commit id should exist and provided`);
    throw e3.hash = { text: `cherryPick ${t2} ${n2}`, token: `cherryPick ${t2} ${n2}`, expected: [`cherry-pick abc`] }, e3;
  }
  let o2 = b.records.commits.get(t2);
  if (o2 === void 0 || !o2) throw Error(`Incorrect usage of "cherryPick". Source commit id should exist and provided`);
  if (i2 && !(Array.isArray(o2.parents) && o2.parents.includes(i2))) throw Error(`Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.`);
  let s2 = o2.branch;
  if (o2.type === v.MERGE && !i2) throw Error(`Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.`);
  if (!n2 || !b.records.commits.has(n2)) {
    if (s2 === b.records.currBranch) {
      let e4 = Error(`Incorrect usage of "cherryPick". Source commit is already on current branch`);
      throw e4.hash = { text: `cherryPick ${t2} ${n2}`, token: `cherryPick ${t2} ${n2}`, expected: [`cherry-pick abc`] }, e4;
    }
    let e3 = b.records.branches.get(b.records.currBranch);
    if (e3 === void 0 || !e3) {
      let e4 = Error(`Incorrect usage of "cherry-pick". Current branch (${b.records.currBranch})has no commits`);
      throw e4.hash = { text: `cherryPick ${t2} ${n2}`, token: `cherryPick ${t2} ${n2}`, expected: [`cherry-pick abc`] }, e4;
    }
    let a3 = b.records.commits.get(e3);
    if (a3 === void 0 || !a3) {
      let e4 = Error(`Incorrect usage of "cherry-pick". Current branch (${b.records.currBranch})has no commits`);
      throw e4.hash = { text: `cherryPick ${t2} ${n2}`, token: `cherryPick ${t2} ${n2}`, expected: [`cherry-pick abc`] }, e4;
    }
    let c2 = { id: b.records.seq + `-` + x(), message: `cherry-picked ${o2 == null ? void 0 : o2.message} into ${b.records.currBranch}`, seq: b.records.seq++, parents: b.records.head == null ? [] : [b.records.head.id, o2.id], branch: b.records.currBranch, type: v.CHERRY_PICK, tags: r2 ? r2.filter(Boolean) : [`cherry-pick:${o2.id}${o2.type === v.MERGE ? `|parent:${i2}` : ``}`] };
    b.records.head = c2, b.records.commits.set(c2.id, c2), b.records.branches.set(b.records.currBranch, c2.id), f.debug(b.records.branches), f.debug(`in cherryPick`);
  }
}, `cherryPick`), C = p(function(e2) {
  if (e2 = c.sanitizeText(e2, y()), b.records.branches.has(e2)) {
    b.records.currBranch = e2;
    let t2 = b.records.branches.get(b.records.currBranch);
    t2 === void 0 || !t2 ? b.records.head = null : b.records.head = b.records.commits.get(t2) ?? null;
  } else {
    let t2 = Error(`Trying to checkout branch which is not yet created. (Help try using "branch ${e2}")`);
    throw t2.hash = { text: `checkout ${e2}`, token: `checkout ${e2}`, expected: [`branch ${e2}`] }, t2;
  }
}, `checkout`);
function w(e2, t2, n2) {
  let r2 = e2.indexOf(t2);
  r2 === -1 ? e2.push(n2) : e2.splice(r2, 1, n2);
}
p(w, `upsert`);
function T(e2) {
  let t2 = e2.reduce((e3, t3) => e3.seq > t3.seq ? e3 : t3, e2[0]), n2 = ``;
  e2.forEach(function(e3) {
    e3 === t2 ? n2 += `	*` : n2 += `	|`;
  });
  let r2 = [n2, t2.id, t2.seq];
  for (let e3 in b.records.branches) b.records.branches.get(e3) === t2.id && r2.push(e3);
  if (f.debug(r2.join(` `)), t2.parents && t2.parents.length == 2 && t2.parents[0] && t2.parents[1]) {
    let n3 = b.records.commits.get(t2.parents[0]);
    w(e2, t2, n3), t2.parents[1] && e2.push(b.records.commits.get(t2.parents[1]));
  } else if (t2.parents.length == 0) return;
  else if (t2.parents[0]) {
    let n3 = b.records.commits.get(t2.parents[0]);
    w(e2, t2, n3);
  }
  e2 = S(e2, (e3) => e3.id), T(e2);
}
p(T, `prettyPrintCommitHistory`);
var de = p(function() {
  f.debug(b.records.commits);
  let e2 = E()[0];
  T([e2]);
}, `prettyPrint`), fe = p(function() {
  b.reset(), a();
}, `clear`), pe = p(function() {
  return [...b.records.branchConfig.values()].map((e2, t2) => e2.order !== null && e2.order !== void 0 ? e2 : { ...e2, order: parseFloat(`0.${t2}`) }).sort((e2, t2) => (e2.order ?? 0) - (t2.order ?? 0)).map(({ name: e2 }) => ({ name: e2 }));
}, `getBranchesAsObjArray`), me = p(function() {
  return b.records.branches;
}, `getBranches`), he = p(function() {
  return b.records.commits;
}, `getCommits`), E = p(function() {
  let e2 = [...b.records.commits.values()];
  return e2.forEach(function(e3) {
    f.debug(e3.id);
  }), e2.sort((e3, t2) => e3.seq - t2.seq), e2;
}, `getCommitsArray`), D = { commitType: v, getConfig: y, setDirection: ie, setOptions: ae, getOptions: oe, commit: se, branch: ce, merge: le, cherryPick: ue, checkout: C, prettyPrint: de, clear: fe, getBranchesAsObjArray: pe, getBranches: me, getCommits: he, getCommitsArray: E, getCurrentBranch: p(function() {
  return b.records.currBranch;
}, `getCurrentBranch`), getDirection: p(function() {
  return b.records.direction;
}, `getDirection`), getHead: p(function() {
  return b.records.head;
}, `getHead`), setAccTitle: e, getAccTitle: l, getAccDescription: i, setAccDescription: d, setDiagramTitle: r, getDiagramTitle: t }, O = p((e2, t2) => {
  _(e2, t2), e2.dir && t2.setDirection(e2.dir);
  for (let n2 of e2.statements) k(n2, t2);
}, `populate`), k = p((e2, t2) => {
  let n2 = { Commit: p((e3) => t2.commit(A(e3)), `Commit`), Branch: p((e3) => t2.branch(j(e3)), `Branch`), Merge: p((e3) => t2.merge(M(e3)), `Merge`), Checkout: p((e3) => t2.checkout(N(e3)), `Checkout`), CherryPicking: p((e3) => t2.cherryPick(P(e3)), `CherryPicking`) }[e2.$type];
  n2 ? n2(e2) : f.error(`Unknown statement type: ${e2.$type}`);
}, `parseStatement`), A = p((e2) => ({ id: e2.id, msg: e2.message ?? ``, type: e2.type === void 0 ? v.NORMAL : v[e2.type], tags: e2.tags ?? void 0 }), `parseCommit`), j = p((e2) => ({ name: e2.name, order: e2.order ?? 0 }), `parseBranch`), M = p((e2) => ({ branch: e2.branch, id: e2.id ?? ``, type: e2.type === void 0 ? void 0 : v[e2.type], tags: e2.tags ?? void 0 }), `parseMerge`), N = p((e2) => e2.branch, `parseCheckout`), P = p((e2) => {
  var _a2;
  return { id: e2.id, targetId: ``, tags: ((_a2 = e2.tags) == null ? void 0 : _a2.length) === 0 ? void 0 : e2.tags, parent: e2.parent };
}, `parseCherryPicking`), F = { parse: p(async (e2) => {
  let t2 = await te(`gitGraph`, e2);
  f.debug(t2), O(t2, D);
}, `parse`) }, I = (_a = o()) == null ? void 0 : _a.gitGraph, L = 10, R = 40, z = 4, B = 2, V = 8, H = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), W = 30, G = /* @__PURE__ */ new Map(), K = [], q = 0, J = `LR`, ge = p(() => {
  H.clear(), U.clear(), G.clear(), q = 0, K = [], J = `LR`;
}, `clear`), Y = p((e2) => {
  let t2 = document.createElementNS(`http://www.w3.org/2000/svg`, `text`);
  return (typeof e2 == `string` ? e2.split(/\\n|\n|<br\s*\/?>/gi) : e2).forEach((e3) => {
    let n2 = document.createElementNS(`http://www.w3.org/2000/svg`, `tspan`);
    n2.setAttributeNS(`http://www.w3.org/XML/1998/namespace`, `xml:space`, `preserve`), n2.setAttribute(`dy`, `1em`), n2.setAttribute(`x`, `0`), n2.setAttribute(`class`, `row`), n2.textContent = e3.trim(), t2.appendChild(n2);
  }), t2;
}, `drawText`), X = p((e2) => {
  let t2, n2, r2;
  return J === `BT` ? (n2 = p((e3, t3) => e3 <= t3, `comparisonFunc`), r2 = 1 / 0) : (n2 = p((e3, t3) => e3 >= t3, `comparisonFunc`), r2 = 0), e2.forEach((e3) => {
    var _a2, _b;
    let i2 = J === `TB` || J == `BT` ? (_a2 = U.get(e3)) == null ? void 0 : _a2.y : (_b = U.get(e3)) == null ? void 0 : _b.x;
    i2 !== void 0 && n2(i2, r2) && (t2 = e3, r2 = i2);
  }), t2;
}, `findClosestParent`), _e = p((e2) => {
  let t2 = ``, n2 = 1 / 0;
  return e2.forEach((e3) => {
    let r2 = U.get(e3).y;
    r2 <= n2 && (t2 = e3, n2 = r2);
  }), t2 || void 0;
}, `findClosestParentBT`), ve = p((e2, t2, n2) => {
  let r2 = n2, i2 = n2, a2 = [];
  e2.forEach((e3) => {
    let n3 = t2.get(e3);
    if (!n3) throw Error(`Commit not found for key ${e3}`);
    n3.parents.length ? (r2 = be(n3), i2 = Math.max(r2, i2)) : a2.push(n3), xe(n3, r2);
  }), r2 = i2, a2.forEach((e3) => {
    Se(e3, r2, n2);
  }), e2.forEach((e3) => {
    let n3 = t2.get(e3);
    if (n3 == null ? void 0 : n3.parents.length) {
      let e4 = _e(n3.parents);
      r2 = U.get(e4).y - R, r2 <= i2 && (i2 = r2);
      let t3 = H.get(n3.branch).pos, a3 = r2 - L;
      U.set(n3.id, { x: t3, y: a3 });
    }
  });
}, `setParallelBTPos`), ye = p((e2) => {
  var _a2;
  let t2 = X(e2.parents.filter((e3) => e3 !== null));
  if (!t2) throw Error(`Closest parent not found for commit ${e2.id}`);
  let n2 = (_a2 = U.get(t2)) == null ? void 0 : _a2.y;
  if (n2 === void 0) throw Error(`Closest parent position not found for commit ${e2.id}`);
  return n2;
}, `findClosestParentPos`), be = p((e2) => ye(e2) + R, `calculateCommitPosition`), xe = p((e2, t2) => {
  let n2 = H.get(e2.branch);
  if (!n2) throw Error(`Branch not found for commit ${e2.id}`);
  let r2 = n2.pos, i2 = t2 + L;
  return U.set(e2.id, { x: r2, y: i2 }), { x: r2, y: i2 };
}, `setCommitPosition`), Se = p((e2, t2, n2) => {
  let r2 = H.get(e2.branch);
  if (!r2) throw Error(`Branch not found for commit ${e2.id}`);
  let i2 = t2 + n2, a2 = r2.pos;
  U.set(e2.id, { x: a2, y: i2 });
}, `setRootPosition`), Ce = p((e2, t2, n2, r2, i2, a2) => {
  if (a2 === v.HIGHLIGHT) e2.append(`rect`).attr(`x`, n2.x - 10).attr(`y`, n2.y - 10).attr(`width`, 20).attr(`height`, 20).attr(`class`, `commit ${t2.id} commit-highlight${i2 % V} ${r2}-outer`), e2.append(`rect`).attr(`x`, n2.x - 6).attr(`y`, n2.y - 6).attr(`width`, 12).attr(`height`, 12).attr(`class`, `commit ${t2.id} commit${i2 % V} ${r2}-inner`);
  else if (a2 === v.CHERRY_PICK) e2.append(`circle`).attr(`cx`, n2.x).attr(`cy`, n2.y).attr(`r`, 10).attr(`class`, `commit ${t2.id} ${r2}`), e2.append(`circle`).attr(`cx`, n2.x - 3).attr(`cy`, n2.y + 2).attr(`r`, 2.75).attr(`fill`, `#fff`).attr(`class`, `commit ${t2.id} ${r2}`), e2.append(`circle`).attr(`cx`, n2.x + 3).attr(`cy`, n2.y + 2).attr(`r`, 2.75).attr(`fill`, `#fff`).attr(`class`, `commit ${t2.id} ${r2}`), e2.append(`line`).attr(`x1`, n2.x + 3).attr(`y1`, n2.y + 1).attr(`x2`, n2.x).attr(`y2`, n2.y - 5).attr(`stroke`, `#fff`).attr(`class`, `commit ${t2.id} ${r2}`), e2.append(`line`).attr(`x1`, n2.x - 3).attr(`y1`, n2.y + 1).attr(`x2`, n2.x).attr(`y2`, n2.y - 5).attr(`stroke`, `#fff`).attr(`class`, `commit ${t2.id} ${r2}`);
  else {
    let o2 = e2.append(`circle`);
    if (o2.attr(`cx`, n2.x), o2.attr(`cy`, n2.y), o2.attr(`r`, t2.type === v.MERGE ? 9 : 10), o2.attr(`class`, `commit ${t2.id} commit${i2 % V}`), a2 === v.MERGE) {
      let a3 = e2.append(`circle`);
      a3.attr(`cx`, n2.x), a3.attr(`cy`, n2.y), a3.attr(`r`, 6), a3.attr(`class`, `commit ${r2} ${t2.id} commit${i2 % V}`);
    }
    a2 === v.REVERSE && e2.append(`path`).attr(`d`, `M ${n2.x - 5},${n2.y - 5}L${n2.x + 5},${n2.y + 5}M${n2.x - 5},${n2.y + 5}L${n2.x + 5},${n2.y - 5}`).attr(`class`, `commit ${r2} ${t2.id} commit${i2 % V}`);
  }
}, `drawCommitBullet`), we = p((e2, t2, n2, r2) => {
  var _a2;
  if (t2.type !== v.CHERRY_PICK && (t2.customId && t2.type === v.MERGE || t2.type !== v.MERGE) && (I == null ? void 0 : I.showCommitLabel)) {
    let i2 = e2.append(`g`), a2 = i2.insert(`rect`).attr(`class`, `commit-label-bkg`), o2 = i2.append(`text`).attr(`x`, r2).attr(`y`, n2.y + 25).attr(`class`, `commit-label`).text(t2.id), s2 = (_a2 = o2.node()) == null ? void 0 : _a2.getBBox();
    if (s2 && (a2.attr(`x`, n2.posWithOffset - s2.width / 2 - B).attr(`y`, n2.y + 13.5).attr(`width`, s2.width + 2 * B).attr(`height`, s2.height + 2 * B), J === `TB` || J === `BT` ? (a2.attr(`x`, n2.x - (s2.width + 4 * z + 5)).attr(`y`, n2.y - 12), o2.attr(`x`, n2.x - (s2.width + 4 * z)).attr(`y`, n2.y + s2.height - 12)) : o2.attr(`x`, n2.posWithOffset - s2.width / 2), I.rotateCommitLabel)) if (J === `TB` || J === `BT`) o2.attr(`transform`, `rotate(-45, ` + n2.x + `, ` + n2.y + `)`), a2.attr(`transform`, `rotate(-45, ` + n2.x + `, ` + n2.y + `)`);
    else {
      let e3 = -7.5 - (s2.width + 10) / 25 * 9.5, t3 = 10 + s2.width / 25 * 8.5;
      i2.attr(`transform`, `translate(` + e3 + `, ` + t3 + `) rotate(-45, ` + r2 + `, ` + n2.y + `)`);
    }
  }
}, `drawCommitLabel`), Te = p((e2, t2, n2, r2) => {
  var _a2;
  if (t2.tags.length > 0) {
    let i2 = 0, a2 = 0, o2 = 0, s2 = [];
    for (let r3 of t2.tags.reverse()) {
      let t3 = e2.insert(`polygon`), c2 = e2.append(`circle`), l2 = e2.append(`text`).attr(`y`, n2.y - 16 - i2).attr(`class`, `tag-label`).text(r3), u2 = (_a2 = l2.node()) == null ? void 0 : _a2.getBBox();
      if (!u2) throw Error(`Tag bbox not found`);
      a2 = Math.max(a2, u2.width), o2 = Math.max(o2, u2.height), l2.attr(`x`, n2.posWithOffset - u2.width / 2), s2.push({ tag: l2, hole: c2, rect: t3, yOffset: i2 }), i2 += 20;
    }
    for (let { tag: e3, hole: t3, rect: i3, yOffset: c2 } of s2) {
      let s3 = o2 / 2, l2 = n2.y - 19.2 - c2;
      if (i3.attr(`class`, `tag-label-bkg`).attr(`points`, `
      ${r2 - a2 / 2 - z / 2},${l2 + B}  
      ${r2 - a2 / 2 - z / 2},${l2 - B}
      ${n2.posWithOffset - a2 / 2 - z},${l2 - s3 - B}
      ${n2.posWithOffset + a2 / 2 + z},${l2 - s3 - B}
      ${n2.posWithOffset + a2 / 2 + z},${l2 + s3 + B}
      ${n2.posWithOffset - a2 / 2 - z},${l2 + s3 + B}`), t3.attr(`cy`, l2).attr(`cx`, r2 - a2 / 2 + z / 2).attr(`r`, 1.5).attr(`class`, `tag-hole`), J === `TB` || J === `BT`) {
        let o3 = r2 + c2;
        i3.attr(`class`, `tag-label-bkg`).attr(`points`, `
        ${n2.x},${o3 + 2}
        ${n2.x},${o3 - 2}
        ${n2.x + L},${o3 - s3 - 2}
        ${n2.x + L + a2 + 4},${o3 - s3 - 2}
        ${n2.x + L + a2 + 4},${o3 + s3 + 2}
        ${n2.x + L},${o3 + s3 + 2}`).attr(`transform`, `translate(12,12) rotate(45, ` + n2.x + `,` + r2 + `)`), t3.attr(`cx`, n2.x + z / 2).attr(`cy`, o3).attr(`transform`, `translate(12,12) rotate(45, ` + n2.x + `,` + r2 + `)`), e3.attr(`x`, n2.x + 5).attr(`y`, o3 + 3).attr(`transform`, `translate(14,14) rotate(45, ` + n2.x + `,` + r2 + `)`);
      }
    }
  }
}, `drawCommitTags`), Ee = p((e2) => {
  switch (e2.customType ?? e2.type) {
    case v.NORMAL:
      return `commit-normal`;
    case v.REVERSE:
      return `commit-reverse`;
    case v.HIGHLIGHT:
      return `commit-highlight`;
    case v.MERGE:
      return `commit-merge`;
    case v.CHERRY_PICK:
      return `commit-cherry-pick`;
    default:
      return `commit-normal`;
  }
}, `getCommitClassType`), De = p((e2, t2, n2, r2) => {
  let i2 = { x: 0, y: 0 };
  if (e2.parents.length > 0) {
    let n3 = X(e2.parents);
    if (n3) {
      let a2 = r2.get(n3) ?? i2;
      return t2 === `TB` ? a2.y + R : t2 === `BT` ? (r2.get(e2.id) ?? i2).y - R : a2.x + R;
    }
  } else if (t2 === `TB`) return W;
  else if (t2 === `BT`) return (r2.get(e2.id) ?? i2).y - R;
  else return 0;
  return 0;
}, `calculatePosition`), Oe = p((e2, t2, n2) => {
  var _a2, _b;
  let r2 = J === `BT` && n2 ? t2 : t2 + L, i2 = J === `TB` || J === `BT` ? r2 : (_a2 = H.get(e2.branch)) == null ? void 0 : _a2.pos, a2 = J === `TB` || J === `BT` ? (_b = H.get(e2.branch)) == null ? void 0 : _b.pos : r2;
  if (a2 === void 0 || i2 === void 0) throw Error(`Position were undefined for commit ${e2.id}`);
  return { x: a2, y: i2, posWithOffset: r2 };
}, `getCommitPosition`), Z = p((e2, t2, n2) => {
  if (!I) throw Error(`GitGraph config not found`);
  let r2 = e2.append(`g`).attr(`class`, `commit-bullets`), i2 = e2.append(`g`).attr(`class`, `commit-labels`), a2 = J === `TB` || J === `BT` ? W : 0, o2 = [...t2.keys()], s2 = (I == null ? void 0 : I.parallelCommits) ?? false, c2 = p((e3, n3) => {
    var _a2, _b;
    let r3 = (_a2 = t2.get(e3)) == null ? void 0 : _a2.seq, i3 = (_b = t2.get(n3)) == null ? void 0 : _b.seq;
    return r3 !== void 0 && i3 !== void 0 ? r3 - i3 : 0;
  }, `sortKeys`), l2 = o2.sort(c2);
  J === `BT` && (s2 && ve(l2, t2, a2), l2 = l2.reverse()), l2.forEach((e3) => {
    var _a2;
    let o3 = t2.get(e3);
    if (!o3) throw Error(`Commit not found for key ${e3}`);
    s2 && (a2 = De(o3, J, a2, U));
    let c3 = Oe(o3, a2, s2);
    if (n2) {
      let e4 = Ee(o3), t3 = o3.customType ?? o3.type;
      Ce(r2, o3, c3, e4, ((_a2 = H.get(o3.branch)) == null ? void 0 : _a2.index) ?? 0, t3), we(i2, o3, c3, a2), Te(i2, o3, c3, a2);
    }
    J === `TB` || J === `BT` ? U.set(o3.id, { x: c3.x, y: c3.posWithOffset }) : U.set(o3.id, { x: c3.posWithOffset, y: c3.y }), a2 = J === `BT` && s2 ? a2 + R : a2 + R + L, a2 > q && (q = a2);
  });
}, `drawCommits`), Q = p((e2, t2, n2, r2, i2) => {
  let a2 = (J === `TB` || J === `BT` ? n2.x < r2.x : n2.y < r2.y) ? t2.branch : e2.branch, o2 = p((e3) => e3.branch === a2, `isOnBranchToGetCurve`), s2 = p((n3) => n3.seq > e2.seq && n3.seq < t2.seq, `isBetweenCommits`);
  return [...i2.values()].some((e3) => s2(e3) && o2(e3));
}, `shouldRerouteArrow`), $ = p((e2, t2, n2 = 0) => {
  let r2 = e2 + Math.abs(e2 - t2) / 2;
  return n2 > 5 ? r2 : K.every((e3) => Math.abs(e3 - r2) >= 10) ? (K.push(r2), r2) : $(e2, t2 - Math.abs(e2 - t2) / 5, n2 + 1);
}, `findLane`), ke = p((e2, t2, n2, r2) => {
  var _a2, _b, _c, _d, _e2;
  let i2 = U.get(t2.id), a2 = U.get(n2.id);
  if (i2 === void 0 || a2 === void 0) throw Error(`Commit positions not found for commits ${t2.id} and ${n2.id}`);
  let o2 = Q(t2, n2, i2, a2, r2), s2 = ``, c2 = ``, l2 = 0, u2 = 0, d2 = (_a2 = H.get(n2.branch)) == null ? void 0 : _a2.index;
  n2.type === v.MERGE && t2.id !== n2.parents[0] && (d2 = (_b = H.get(t2.branch)) == null ? void 0 : _b.index);
  let f2;
  if (o2) {
    s2 = `A 10 10, 0, 0, 0,`, c2 = `A 10 10, 0, 0, 1,`, l2 = 10, u2 = 10;
    let e3 = i2.y < a2.y ? $(i2.y, a2.y) : $(a2.y, i2.y), n3 = i2.x < a2.x ? $(i2.x, a2.x) : $(a2.x, i2.x);
    J === `TB` ? i2.x < a2.x ? f2 = `M ${i2.x} ${i2.y} L ${n3 - l2} ${i2.y} ${c2} ${n3} ${i2.y + u2} L ${n3} ${a2.y - l2} ${s2} ${n3 + u2} ${a2.y} L ${a2.x} ${a2.y}` : (d2 = (_c = H.get(t2.branch)) == null ? void 0 : _c.index, f2 = `M ${i2.x} ${i2.y} L ${n3 + l2} ${i2.y} ${s2} ${n3} ${i2.y + u2} L ${n3} ${a2.y - l2} ${c2} ${n3 - u2} ${a2.y} L ${a2.x} ${a2.y}`) : J === `BT` ? i2.x < a2.x ? f2 = `M ${i2.x} ${i2.y} L ${n3 - l2} ${i2.y} ${s2} ${n3} ${i2.y - u2} L ${n3} ${a2.y + l2} ${c2} ${n3 + u2} ${a2.y} L ${a2.x} ${a2.y}` : (d2 = (_d = H.get(t2.branch)) == null ? void 0 : _d.index, f2 = `M ${i2.x} ${i2.y} L ${n3 + l2} ${i2.y} ${c2} ${n3} ${i2.y - u2} L ${n3} ${a2.y + l2} ${s2} ${n3 - u2} ${a2.y} L ${a2.x} ${a2.y}`) : i2.y < a2.y ? f2 = `M ${i2.x} ${i2.y} L ${i2.x} ${e3 - l2} ${s2} ${i2.x + u2} ${e3} L ${a2.x - l2} ${e3} ${c2} ${a2.x} ${e3 + u2} L ${a2.x} ${a2.y}` : (d2 = (_e2 = H.get(t2.branch)) == null ? void 0 : _e2.index, f2 = `M ${i2.x} ${i2.y} L ${i2.x} ${e3 + l2} ${c2} ${i2.x + u2} ${e3} L ${a2.x - l2} ${e3} ${s2} ${a2.x} ${e3 - u2} L ${a2.x} ${a2.y}`);
  } else s2 = `A 20 20, 0, 0, 0,`, c2 = `A 20 20, 0, 0, 1,`, l2 = 20, u2 = 20, J === `TB` ? (i2.x < a2.x && (f2 = n2.type === v.MERGE && t2.id !== n2.parents[0] ? `M ${i2.x} ${i2.y} L ${i2.x} ${a2.y - l2} ${s2} ${i2.x + u2} ${a2.y} L ${a2.x} ${a2.y}` : `M ${i2.x} ${i2.y} L ${a2.x - l2} ${i2.y} ${c2} ${a2.x} ${i2.y + u2} L ${a2.x} ${a2.y}`), i2.x > a2.x && (s2 = `A 20 20, 0, 0, 0,`, c2 = `A 20 20, 0, 0, 1,`, l2 = 20, u2 = 20, f2 = n2.type === v.MERGE && t2.id !== n2.parents[0] ? `M ${i2.x} ${i2.y} L ${i2.x} ${a2.y - l2} ${c2} ${i2.x - u2} ${a2.y} L ${a2.x} ${a2.y}` : `M ${i2.x} ${i2.y} L ${a2.x + l2} ${i2.y} ${s2} ${a2.x} ${i2.y + u2} L ${a2.x} ${a2.y}`), i2.x === a2.x && (f2 = `M ${i2.x} ${i2.y} L ${a2.x} ${a2.y}`)) : J === `BT` ? (i2.x < a2.x && (f2 = n2.type === v.MERGE && t2.id !== n2.parents[0] ? `M ${i2.x} ${i2.y} L ${i2.x} ${a2.y + l2} ${c2} ${i2.x + u2} ${a2.y} L ${a2.x} ${a2.y}` : `M ${i2.x} ${i2.y} L ${a2.x - l2} ${i2.y} ${s2} ${a2.x} ${i2.y - u2} L ${a2.x} ${a2.y}`), i2.x > a2.x && (s2 = `A 20 20, 0, 0, 0,`, c2 = `A 20 20, 0, 0, 1,`, l2 = 20, u2 = 20, f2 = n2.type === v.MERGE && t2.id !== n2.parents[0] ? `M ${i2.x} ${i2.y} L ${i2.x} ${a2.y + l2} ${s2} ${i2.x - u2} ${a2.y} L ${a2.x} ${a2.y}` : `M ${i2.x} ${i2.y} L ${a2.x - l2} ${i2.y} ${s2} ${a2.x} ${i2.y - u2} L ${a2.x} ${a2.y}`), i2.x === a2.x && (f2 = `M ${i2.x} ${i2.y} L ${a2.x} ${a2.y}`)) : (i2.y < a2.y && (f2 = n2.type === v.MERGE && t2.id !== n2.parents[0] ? `M ${i2.x} ${i2.y} L ${a2.x - l2} ${i2.y} ${c2} ${a2.x} ${i2.y + u2} L ${a2.x} ${a2.y}` : `M ${i2.x} ${i2.y} L ${i2.x} ${a2.y - l2} ${s2} ${i2.x + u2} ${a2.y} L ${a2.x} ${a2.y}`), i2.y > a2.y && (f2 = n2.type === v.MERGE && t2.id !== n2.parents[0] ? `M ${i2.x} ${i2.y} L ${a2.x - l2} ${i2.y} ${s2} ${a2.x} ${i2.y - u2} L ${a2.x} ${a2.y}` : `M ${i2.x} ${i2.y} L ${i2.x} ${a2.y + l2} ${c2} ${i2.x + u2} ${a2.y} L ${a2.x} ${a2.y}`), i2.y === a2.y && (f2 = `M ${i2.x} ${i2.y} L ${a2.x} ${a2.y}`));
  if (f2 === void 0) throw Error(`Line definition not found`);
  e2.append(`path`).attr(`d`, f2).attr(`class`, `arrow arrow` + d2 % V);
}, `drawArrow`), Ae = p((e2, t2) => {
  let n2 = e2.append(`g`).attr(`class`, `commit-arrows`);
  [...t2.keys()].forEach((e3) => {
    let r2 = t2.get(e3);
    r2.parents && r2.parents.length > 0 && r2.parents.forEach((e4) => {
      ke(n2, t2.get(e4), r2, t2);
    });
  });
}, `drawArrows`), je = p((e2, t2) => {
  let n2 = e2.append(`g`);
  t2.forEach((e3, t3) => {
    var _a2;
    let r2 = t3 % V, i2 = (_a2 = H.get(e3.name)) == null ? void 0 : _a2.pos;
    if (i2 === void 0) throw Error(`Position not found for branch ${e3.name}`);
    let a2 = n2.append(`line`);
    a2.attr(`x1`, 0), a2.attr(`y1`, i2), a2.attr(`x2`, q), a2.attr(`y2`, i2), a2.attr(`class`, `branch branch` + r2), J === `TB` ? (a2.attr(`y1`, W), a2.attr(`x1`, i2), a2.attr(`y2`, q), a2.attr(`x2`, i2)) : J === `BT` && (a2.attr(`y1`, q), a2.attr(`x1`, i2), a2.attr(`y2`, W), a2.attr(`x2`, i2)), K.push(i2);
    let o2 = e3.name, s2 = Y(o2), c2 = n2.insert(`rect`), l2 = n2.insert(`g`).attr(`class`, `branchLabel`).insert(`g`).attr(`class`, `label branch-label` + r2);
    l2.node().appendChild(s2);
    let u2 = s2.getBBox();
    c2.attr(`class`, `branchLabelBkg label` + r2).attr(`rx`, 4).attr(`ry`, 4).attr(`x`, -u2.width - 4 - ((I == null ? void 0 : I.rotateCommitLabel) === true ? 30 : 0)).attr(`y`, -u2.height / 2 + 8).attr(`width`, u2.width + 18).attr(`height`, u2.height + 4), l2.attr(`transform`, `translate(` + (-u2.width - 14 - ((I == null ? void 0 : I.rotateCommitLabel) === true ? 30 : 0)) + `, ` + (i2 - u2.height / 2 - 1) + `)`), J === `TB` ? (c2.attr(`x`, i2 - u2.width / 2 - 10).attr(`y`, 0), l2.attr(`transform`, `translate(` + (i2 - u2.width / 2 - 5) + `, 0)`)) : J === `BT` ? (c2.attr(`x`, i2 - u2.width / 2 - 10).attr(`y`, q), l2.attr(`transform`, `translate(` + (i2 - u2.width / 2 - 5) + `, ` + q + `)`)) : c2.attr(`transform`, `translate(-19, ` + (i2 - u2.height / 2) + `)`);
  });
}, `drawBranches`), Me = p(function(e2, t2, n2, r2, i2) {
  return H.set(e2, { pos: t2, index: n2 }), t2 += 50 + (i2 ? 40 : 0) + (J === `TB` || J === `BT` ? r2.width / 2 : 0), t2;
}, `setBranchPosition`), Ne = { parser: F, db: D, renderer: { draw: p(function(e2, t2, r2, i2) {
  if (ge(), f.debug(`in gitgraph renderer`, e2 + `
`, `id:`, t2, r2), !I) throw Error(`GitGraph config not found`);
  let a2 = I.rotateCommitLabel ?? false, o2 = i2.db;
  G = o2.getCommits();
  let s2 = o2.getBranchesAsObjArray();
  J = o2.getDirection();
  let c2 = ee(`[id="${t2}"]`), l2 = 0;
  s2.forEach((e3, t3) => {
    var _a2;
    let n2 = Y(e3.name), r3 = c2.append(`g`), i3 = r3.insert(`g`).attr(`class`, `branchLabel`), o3 = i3.insert(`g`).attr(`class`, `label branch-label`);
    (_a2 = o3.node()) == null ? void 0 : _a2.appendChild(n2);
    let s3 = n2.getBBox();
    l2 = Me(e3.name, l2, t3, s3, a2), o3.remove(), i3.remove(), r3.remove();
  }), Z(c2, G, false), I.showBranches && je(c2, s2), Ae(c2, G), Z(c2, G, true), m.insertTitle(c2, `gitTitleText`, I.titleTopMargin ?? 0, o2.getDiagramTitle()), n(void 0, c2, I.diagramPadding, I.useMaxWidth);
}, `draw`) }, styles: p((e2) => `
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[0, 1, 2, 3, 4, 5, 6, 7].map((t2) => `
        .branch-label${t2} { fill: ${e2[`gitBranchLabel` + t2]}; }
        .commit${t2} { stroke: ${e2[`git` + t2]}; fill: ${e2[`git` + t2]}; }
        .commit-highlight${t2} { stroke: ${e2[`gitInv` + t2]}; fill: ${e2[`gitInv` + t2]}; }
        .label${t2}  { fill: ${e2[`git` + t2]}; }
        .arrow${t2} { stroke: ${e2[`git` + t2]}; }
        `).join(`
`)}

  .branch {
    stroke-width: 1;
    stroke: ${e2.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${e2.commitLabelFontSize}; fill: ${e2.commitLabelColor};}
  .commit-label-bkg { font-size: ${e2.commitLabelFontSize}; fill: ${e2.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${e2.tagLabelFontSize}; fill: ${e2.tagLabelColor};}
  .tag-label-bkg { fill: ${e2.tagLabelBackground}; stroke: ${e2.tagLabelBorder}; }
  .tag-hole { fill: ${e2.textColor}; }

  .commit-merge {
    stroke: ${e2.primaryColor};
    fill: ${e2.primaryColor};
  }
  .commit-reverse {
    stroke: ${e2.primaryColor};
    fill: ${e2.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${e2.primaryColor};
    fill: ${e2.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e2.textColor};
  }
`, `getStyles`) };
export {
  Ne as diagram
};
