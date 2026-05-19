import { B as e, Cn as t, In as n, Jn as r, N as i, Nn as a, Pn as o, Rn as s, Sn as c, Yn as l, bn as u, hn as d, pn as f, un as p, vn as m, xn as h, yn as g, z as _ } from "./index-4Ava25sD.js";
import "./chunk-K5T4RW27-OuehT3M0.js";
import "./reduce-BYgg84dj.js";
import "./flatten-COzv_UkG.js";
import "./chunk-7N4EOEYR-D1jf8gU4.js";
import "./chunk-67CJDMHE-DkrmGhRn.js";
import "./chunk-KGLVRYIC-B7L8tDEY.js";
import "./chunk-FOC6F5B3-B63lKV-F.js";
import "./chunk-AA7GKIK3-D5IXgCR6.js";
import "./chunk-2KRD3SAO-CNzDCA3U.js";
import "./chunk-ORNJ4GCN-9SMZAFfc.js";
import "./chunk-LIHQZDEY-eWu76TC0.js";
import "./chunk-CIAEETIT-u0HN2vK9.js";
import { t as v } from "./chunk-4BX2VUAB-BsqOnTl0.js";
import { t as y } from "./mermaid-parser.core-C5_5uso8.js";
import { t as b } from "./chunk-QZHKN3VN-C3yDEL7O.js";
var x = { NORMAL: 0, REVERSE: 1, HIGHLIGHT: 2, MERGE: 3, CHERRY_PICK: 4 }, ee = m.gitGraph, S = r(() => i({ ...ee, ...h().gitGraph }), `getConfig`), C = new b(() => {
  let e2 = S(), t2 = e2.mainBranchName, n2 = e2.mainBranchOrder;
  return { mainBranchName: t2, commits: /* @__PURE__ */ new Map(), head: null, branchConfig: /* @__PURE__ */ new Map([[t2, { name: t2, order: n2 }]]), branches: /* @__PURE__ */ new Map([[t2, null]]), currBranch: t2, direction: `LR`, seq: 0, options: {} };
});
function w() {
  return _({ length: 7 });
}
r(w, `getID`);
function T(e2, t2) {
  let n2 = /* @__PURE__ */ Object.create(null);
  return e2.reduce((e3, r2) => {
    let i2 = t2(r2);
    return n2[i2] || (n2[i2] = true, e3.push(r2)), e3;
  }, []);
}
r(T, `uniqBy`);
var te = r(function(e2) {
  C.records.direction = e2;
}, `setDirection`), ne = r(function(e2) {
  l.debug(`options str`, e2), e2 = e2 == null ? void 0 : e2.trim(), e2 || (e2 = `{}`);
  try {
    C.records.options = JSON.parse(e2);
  } catch (e3) {
    l.error(`error while parsing gitGraph options`, e3.message);
  }
}, `setOptions`), re = r(function() {
  return C.records.options;
}, `getOptions`), ie = r(function(e2) {
  let t2 = e2.msg, n2 = e2.id, r2 = e2.type, i2 = e2.tags;
  l.info(`commit`, t2, n2, r2, i2), l.debug(`Entering commit:`, t2, n2, r2, i2);
  let a2 = S();
  n2 = d.sanitizeText(n2, a2), t2 = d.sanitizeText(t2, a2), i2 = i2 == null ? void 0 : i2.map((e3) => d.sanitizeText(e3, a2));
  let o2 = { id: n2 || C.records.seq + `-` + w(), message: t2, seq: C.records.seq++, type: r2 ?? x.NORMAL, tags: i2 ?? [], parents: C.records.head == null ? [] : [C.records.head.id], branch: C.records.currBranch };
  C.records.head = o2, l.info(`main branch`, a2.mainBranchName), C.records.commits.has(o2.id) && l.warn(`Commit ID ${o2.id} already exists`), C.records.commits.set(o2.id, o2), C.records.branches.set(C.records.currBranch, o2.id), l.debug(`in pushCommit ` + o2.id);
}, `commit`), ae = r(function(e2) {
  let t2 = e2.name, n2 = e2.order;
  if (t2 = d.sanitizeText(t2, S()), C.records.branches.has(t2)) throw Error(`Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${t2}")`);
  C.records.branches.set(t2, C.records.head == null ? null : C.records.head.id), C.records.branchConfig.set(t2, { name: t2, order: n2 }), E(t2), l.debug(`in createBranch`);
}, `branch`), oe = r((e2) => {
  let t2 = e2.branch, n2 = e2.id, r2 = e2.type, i2 = e2.tags, a2 = S();
  t2 = d.sanitizeText(t2, a2), n2 && (n2 = d.sanitizeText(n2, a2));
  let o2 = C.records.branches.get(C.records.currBranch), s2 = C.records.branches.get(t2), c2 = o2 ? C.records.commits.get(o2) : void 0, u2 = s2 ? C.records.commits.get(s2) : void 0;
  if (c2 && u2 && c2.branch === t2) throw Error(`Cannot merge branch '${t2}' into itself.`);
  if (C.records.currBranch === t2) {
    let e3 = Error(`Incorrect usage of "merge". Cannot merge a branch to itself`);
    throw e3.hash = { text: `merge ${t2}`, token: `merge ${t2}`, expected: [`branch abc`] }, e3;
  }
  if (c2 === void 0 || !c2) {
    let e3 = Error(`Incorrect usage of "merge". Current branch (${C.records.currBranch})has no commits`);
    throw e3.hash = { text: `merge ${t2}`, token: `merge ${t2}`, expected: [`commit`] }, e3;
  }
  if (!C.records.branches.has(t2)) {
    let e3 = Error(`Incorrect usage of "merge". Branch to be merged (` + t2 + `) does not exist`);
    throw e3.hash = { text: `merge ${t2}`, token: `merge ${t2}`, expected: [`branch ${t2}`] }, e3;
  }
  if (u2 === void 0 || !u2) {
    let e3 = Error(`Incorrect usage of "merge". Branch to be merged (` + t2 + `) has no commits`);
    throw e3.hash = { text: `merge ${t2}`, token: `merge ${t2}`, expected: [`"commit"`] }, e3;
  }
  if (c2 === u2) {
    let e3 = Error(`Incorrect usage of "merge". Both branches have same head`);
    throw e3.hash = { text: `merge ${t2}`, token: `merge ${t2}`, expected: [`branch abc`] }, e3;
  }
  if (n2 && C.records.commits.has(n2)) {
    let e3 = Error(`Incorrect usage of "merge". Commit with id:` + n2 + ` already exists, use different custom id`);
    throw e3.hash = { text: `merge ${t2} ${n2} ${r2} ${i2 == null ? void 0 : i2.join(` `)}`, token: `merge ${t2} ${n2} ${r2} ${i2 == null ? void 0 : i2.join(` `)}`, expected: [`merge ${t2} ${n2}_UNIQUE ${r2} ${i2 == null ? void 0 : i2.join(` `)}`] }, e3;
  }
  let f2 = s2 || ``, p2 = { id: n2 || `${C.records.seq}-${w()}`, message: `merged branch ${t2} into ${C.records.currBranch}`, seq: C.records.seq++, parents: C.records.head == null ? [] : [C.records.head.id, f2], branch: C.records.currBranch, type: x.MERGE, customType: r2, customId: !!n2, tags: i2 ?? [] };
  C.records.head = p2, C.records.commits.set(p2.id, p2), C.records.branches.set(C.records.currBranch, p2.id), l.debug(C.records.branches), l.debug(`in mergeBranch`);
}, `merge`), se = r(function(e2) {
  let t2 = e2.id, n2 = e2.targetId, r2 = e2.tags, i2 = e2.parent;
  l.debug(`Entering cherryPick:`, t2, n2, r2);
  let a2 = S();
  if (t2 = d.sanitizeText(t2, a2), n2 = d.sanitizeText(n2, a2), r2 = r2 == null ? void 0 : r2.map((e3) => d.sanitizeText(e3, a2)), i2 = d.sanitizeText(i2, a2), !t2 || !C.records.commits.has(t2)) {
    let e3 = Error(`Incorrect usage of "cherryPick". Source commit id should exist and provided`);
    throw e3.hash = { text: `cherryPick ${t2} ${n2}`, token: `cherryPick ${t2} ${n2}`, expected: [`cherry-pick abc`] }, e3;
  }
  let o2 = C.records.commits.get(t2);
  if (o2 === void 0 || !o2) throw Error(`Incorrect usage of "cherryPick". Source commit id should exist and provided`);
  if (i2 && !(Array.isArray(o2.parents) && o2.parents.includes(i2))) throw Error(`Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.`);
  let s2 = o2.branch;
  if (o2.type === x.MERGE && !i2) throw Error(`Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.`);
  if (!n2 || !C.records.commits.has(n2)) {
    if (s2 === C.records.currBranch) {
      let e4 = Error(`Incorrect usage of "cherryPick". Source commit is already on current branch`);
      throw e4.hash = { text: `cherryPick ${t2} ${n2}`, token: `cherryPick ${t2} ${n2}`, expected: [`cherry-pick abc`] }, e4;
    }
    let e3 = C.records.branches.get(C.records.currBranch);
    if (e3 === void 0 || !e3) {
      let e4 = Error(`Incorrect usage of "cherry-pick". Current branch (${C.records.currBranch})has no commits`);
      throw e4.hash = { text: `cherryPick ${t2} ${n2}`, token: `cherryPick ${t2} ${n2}`, expected: [`cherry-pick abc`] }, e4;
    }
    let a3 = C.records.commits.get(e3);
    if (a3 === void 0 || !a3) {
      let e4 = Error(`Incorrect usage of "cherry-pick". Current branch (${C.records.currBranch})has no commits`);
      throw e4.hash = { text: `cherryPick ${t2} ${n2}`, token: `cherryPick ${t2} ${n2}`, expected: [`cherry-pick abc`] }, e4;
    }
    let c2 = { id: C.records.seq + `-` + w(), message: `cherry-picked ${o2 == null ? void 0 : o2.message} into ${C.records.currBranch}`, seq: C.records.seq++, parents: C.records.head == null ? [] : [C.records.head.id, o2.id], branch: C.records.currBranch, type: x.CHERRY_PICK, tags: r2 ? r2.filter(Boolean) : [`cherry-pick:${o2.id}${o2.type === x.MERGE ? `|parent:${i2}` : ``}`] };
    C.records.head = c2, C.records.commits.set(c2.id, c2), C.records.branches.set(C.records.currBranch, c2.id), l.debug(C.records.branches), l.debug(`in cherryPick`);
  }
}, `cherryPick`), E = r(function(e2) {
  if (e2 = d.sanitizeText(e2, S()), C.records.branches.has(e2)) {
    C.records.currBranch = e2;
    let t2 = C.records.branches.get(C.records.currBranch);
    t2 === void 0 || !t2 ? C.records.head = null : C.records.head = C.records.commits.get(t2) ?? null;
  } else {
    let t2 = Error(`Trying to checkout branch which is not yet created. (Help try using "branch ${e2}")`);
    throw t2.hash = { text: `checkout ${e2}`, token: `checkout ${e2}`, expected: [`branch ${e2}`] }, t2;
  }
}, `checkout`);
function D(e2, t2, n2) {
  let r2 = e2.indexOf(t2);
  r2 === -1 ? e2.push(n2) : e2.splice(r2, 1, n2);
}
r(D, `upsert`);
function O(e2) {
  let t2 = e2.reduce((e3, t3) => e3.seq > t3.seq ? e3 : t3, e2[0]), n2 = ``;
  e2.forEach(function(e3) {
    e3 === t2 ? n2 += `	*` : n2 += `	|`;
  });
  let r2 = [n2, t2.id, t2.seq];
  for (let e3 in C.records.branches) C.records.branches.get(e3) === t2.id && r2.push(e3);
  if (l.debug(r2.join(` `)), t2.parents && t2.parents.length == 2 && t2.parents[0] && t2.parents[1]) {
    let n3 = C.records.commits.get(t2.parents[0]);
    D(e2, t2, n3), t2.parents[1] && e2.push(C.records.commits.get(t2.parents[1]));
  } else if (t2.parents.length == 0) return;
  else if (t2.parents[0]) {
    let n3 = C.records.commits.get(t2.parents[0]);
    D(e2, t2, n3);
  }
  e2 = T(e2, (e3) => e3.id), O(e2);
}
r(O, `prettyPrintCommitHistory`);
var ce = r(function() {
  l.debug(C.records.commits);
  let e2 = k()[0];
  O([e2]);
}, `prettyPrint`), le = r(function() {
  C.reset(), f();
}, `clear`), ue = r(function() {
  return [...C.records.branchConfig.values()].map((e2, t2) => e2.order !== null && e2.order !== void 0 ? e2 : { ...e2, order: parseFloat(`0.${t2}`) }).sort((e2, t2) => (e2.order ?? 0) - (t2.order ?? 0)).map(({ name: e2 }) => ({ name: e2 }));
}, `getBranchesAsObjArray`), de = r(function() {
  return C.records.branches;
}, `getBranches`), fe = r(function() {
  return C.records.commits;
}, `getCommits`), k = r(function() {
  let e2 = [...C.records.commits.values()];
  return e2.forEach(function(e3) {
    l.debug(e3.id);
  }), e2.sort((e3, t2) => e3.seq - t2.seq), e2;
}, `getCommitsArray`), A = { commitType: x, getConfig: S, setDirection: te, setOptions: ne, getOptions: re, commit: ie, branch: ae, merge: oe, cherryPick: se, checkout: E, prettyPrint: ce, clear: le, getBranchesAsObjArray: ue, getBranches: de, getCommits: fe, getCommitsArray: k, getCurrentBranch: r(function() {
  return C.records.currBranch;
}, `getCurrentBranch`), getDirection: r(function() {
  return C.records.direction;
}, `getDirection`), getHead: r(function() {
  return C.records.head;
}, `getHead`), setAccTitle: o, getAccTitle: u, getAccDescription: g, setAccDescription: a, setDiagramTitle: n, getDiagramTitle: t }, pe = r((e2, t2) => {
  v(e2, t2), e2.dir && t2.setDirection(e2.dir);
  for (let n2 of e2.statements) me(n2, t2);
}, `populate`), me = r((e2, t2) => {
  let n2 = { Commit: r((e3) => t2.commit(he(e3)), `Commit`), Branch: r((e3) => t2.branch(ge(e3)), `Branch`), Merge: r((e3) => t2.merge(_e(e3)), `Merge`), Checkout: r((e3) => t2.checkout(ve(e3)), `Checkout`), CherryPicking: r((e3) => t2.cherryPick(ye(e3)), `CherryPicking`) }[e2.$type];
  n2 ? n2(e2) : l.error(`Unknown statement type: ${e2.$type}`);
}, `parseStatement`), he = r((e2) => ({ id: e2.id, msg: e2.message ?? ``, type: e2.type === void 0 ? x.NORMAL : x[e2.type], tags: e2.tags ?? void 0 }), `parseCommit`), ge = r((e2) => ({ name: e2.name, order: e2.order ?? 0 }), `parseBranch`), _e = r((e2) => ({ branch: e2.branch, id: e2.id ?? ``, type: e2.type === void 0 ? void 0 : x[e2.type], tags: e2.tags ?? void 0 }), `parseMerge`), ve = r((e2) => e2.branch, `parseCheckout`), ye = r((e2) => {
  var _a;
  return { id: e2.id, targetId: ``, tags: ((_a = e2.tags) == null ? void 0 : _a.length) === 0 ? void 0 : e2.tags, parent: e2.parent };
}, `parseCherryPicking`), be = { parse: r(async (e2) => {
  let t2 = await y(`gitGraph`, e2);
  l.debug(t2), pe(t2, A);
}, `parse`) }, j = 10, M = 40, N = 4, P = 2, F = 8, I = /* @__PURE__ */ new Set([`redux`, `redux-dark`, `redux-color`, `redux-dark-color`]), L = 12, R = /* @__PURE__ */ new Set([`redux-color`, `redux-dark-color`]), xe = /* @__PURE__ */ new Set([`dark`, `redux-dark`, `redux-dark-color`, `neo-dark`]), z = r((e2, t2, n2 = false) => n2 && e2 > 0 ? (e2 - 1) % (t2 - 1) + 1 : e2 % t2, `calcColorIndex`), B = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), H = 30, U = /* @__PURE__ */ new Map(), W = [], G = 0, K = `LR`, q = r(() => {
  B.clear(), V.clear(), U.clear(), G = 0, W = [], K = `LR`;
}, `clear`), J = r((e2) => {
  let t2 = document.createElementNS(`http://www.w3.org/2000/svg`, `text`);
  return (typeof e2 == `string` ? e2.split(/\\n|\n|<br\s*\/?>/gi) : e2).forEach((e3) => {
    let n2 = document.createElementNS(`http://www.w3.org/2000/svg`, `tspan`);
    n2.setAttributeNS(`http://www.w3.org/XML/1998/namespace`, `xml:space`, `preserve`), n2.setAttribute(`dy`, `1em`), n2.setAttribute(`x`, `0`), n2.setAttribute(`class`, `row`), n2.textContent = e3.trim(), t2.appendChild(n2);
  }), t2;
}, `drawText`), Y = r((e2) => {
  let t2, n2, i2;
  return K === `BT` ? (n2 = r((e3, t3) => e3 <= t3, `comparisonFunc`), i2 = 1 / 0) : (n2 = r((e3, t3) => e3 >= t3, `comparisonFunc`), i2 = 0), e2.forEach((e3) => {
    var _a, _b;
    let r2 = K === `TB` || K == `BT` ? (_a = V.get(e3)) == null ? void 0 : _a.y : (_b = V.get(e3)) == null ? void 0 : _b.x;
    r2 !== void 0 && n2(r2, i2) && (t2 = e3, i2 = r2);
  }), t2;
}, `findClosestParent`), Se = r((e2) => {
  let t2 = ``, n2 = 1 / 0;
  return e2.forEach((e3) => {
    let r2 = V.get(e3).y;
    r2 <= n2 && (t2 = e3, n2 = r2);
  }), t2 || void 0;
}, `findClosestParentBT`), Ce = r((e2, t2, n2) => {
  let r2 = n2, i2 = n2, a2 = [];
  e2.forEach((e3) => {
    let n3 = t2.get(e3);
    if (!n3) throw Error(`Commit not found for key ${e3}`);
    n3.parents.length ? (r2 = Te(n3), i2 = Math.max(r2, i2)) : a2.push(n3), Ee(n3, r2);
  }), r2 = i2, a2.forEach((e3) => {
    De(e3, r2, n2);
  }), e2.forEach((e3) => {
    let n3 = t2.get(e3);
    if (n3 == null ? void 0 : n3.parents.length) {
      let e4 = Se(n3.parents);
      r2 = V.get(e4).y - M, r2 <= i2 && (i2 = r2);
      let t3 = B.get(n3.branch).pos, a3 = r2 - j;
      V.set(n3.id, { x: t3, y: a3 });
    }
  });
}, `setParallelBTPos`), we = r((e2) => {
  var _a;
  let t2 = Y(e2.parents.filter((e3) => e3 !== null));
  if (!t2) throw Error(`Closest parent not found for commit ${e2.id}`);
  let n2 = (_a = V.get(t2)) == null ? void 0 : _a.y;
  if (n2 === void 0) throw Error(`Closest parent position not found for commit ${e2.id}`);
  return n2;
}, `findClosestParentPos`), Te = r((e2) => we(e2) + M, `calculateCommitPosition`), Ee = r((e2, t2) => {
  let n2 = B.get(e2.branch);
  if (!n2) throw Error(`Branch not found for commit ${e2.id}`);
  let r2 = n2.pos, i2 = t2 + j;
  return V.set(e2.id, { x: r2, y: i2 }), { x: r2, y: i2 };
}, `setCommitPosition`), De = r((e2, t2, n2) => {
  let r2 = B.get(e2.branch);
  if (!r2) throw Error(`Branch not found for commit ${e2.id}`);
  let i2 = t2 + n2, a2 = r2.pos;
  V.set(e2.id, { x: a2, y: i2 });
}, `setRootPosition`), Oe = r((e2, t2, n2, r2, i2, a2) => {
  let { theme: o2 } = c(), s2 = I.has(o2 ?? ``), l2 = R.has(o2 ?? ``), u2 = xe.has(o2 ?? ``);
  if (a2 === x.HIGHLIGHT) e2.append(`rect`).attr(`x`, n2.x - 10 + (s2 ? 3 : 0)).attr(`y`, n2.y - 10 + (s2 ? 3 : 0)).attr(`width`, s2 ? 14 : 20).attr(`height`, s2 ? 14 : 20).attr(`class`, `commit ${t2.id} commit-highlight${z(i2, F, l2)} ${r2}-outer`), e2.append(`rect`).attr(`x`, n2.x - 6 + (s2 ? 2 : 0)).attr(`y`, n2.y - 6 + (s2 ? 2 : 0)).attr(`width`, s2 ? 8 : 12).attr(`height`, s2 ? 8 : 12).attr(`class`, `commit ${t2.id} commit${z(i2, F, l2)} ${r2}-inner`);
  else if (a2 === x.CHERRY_PICK) e2.append(`circle`).attr(`cx`, n2.x).attr(`cy`, n2.y).attr(`r`, s2 ? 7 : 10).attr(`class`, `commit ${t2.id} ${r2}`), e2.append(`circle`).attr(`cx`, n2.x - 3).attr(`cy`, n2.y + 2).attr(`r`, s2 ? 2.5 : 2.75).attr(`fill`, u2 ? `#000000` : `#fff`).attr(`class`, `commit ${t2.id} ${r2}`), e2.append(`circle`).attr(`cx`, n2.x + 3).attr(`cy`, n2.y + 2).attr(`r`, s2 ? 2.5 : 2.75).attr(`fill`, u2 ? `#000000` : `#fff`).attr(`class`, `commit ${t2.id} ${r2}`), e2.append(`line`).attr(`x1`, n2.x + 3).attr(`y1`, n2.y + 1).attr(`x2`, n2.x).attr(`y2`, n2.y - 5).attr(`stroke`, u2 ? `#000000` : `#fff`).attr(`class`, `commit ${t2.id} ${r2}`), e2.append(`line`).attr(`x1`, n2.x - 3).attr(`y1`, n2.y + 1).attr(`x2`, n2.x).attr(`y2`, n2.y - 5).attr(`stroke`, u2 ? `#000000` : `#fff`).attr(`class`, `commit ${t2.id} ${r2}`);
  else {
    let o3 = e2.append(`circle`);
    if (o3.attr(`cx`, n2.x), o3.attr(`cy`, n2.y), o3.attr(`r`, s2 ? 7 : 10), o3.attr(`class`, `commit ${t2.id} commit${z(i2, F, l2)}`), a2 === x.MERGE) {
      let a3 = e2.append(`circle`);
      a3.attr(`cx`, n2.x), a3.attr(`cy`, n2.y), a3.attr(`r`, s2 ? 5 : 6), a3.attr(`class`, `commit ${r2} ${t2.id} commit${z(i2, F, l2)}`);
    }
    if (a2 === x.REVERSE) {
      let a3 = e2.append(`path`), o4 = s2 ? 4 : 5;
      a3.attr(`d`, `M ${n2.x - o4},${n2.y - o4}L${n2.x + o4},${n2.y + o4}M${n2.x - o4},${n2.y + o4}L${n2.x + o4},${n2.y - o4}`).attr(`class`, `commit ${r2} ${t2.id} commit${z(i2, F, l2)}`);
    }
  }
}, `drawCommitBullet`), ke = r((e2, t2, n2, r2, i2) => {
  var _a;
  if (t2.type !== x.CHERRY_PICK && (t2.customId && t2.type === x.MERGE || t2.type !== x.MERGE) && i2.showCommitLabel) {
    let a2 = e2.append(`g`), o2 = a2.insert(`rect`).attr(`class`, `commit-label-bkg`), s2 = a2.append(`text`).attr(`x`, r2).attr(`y`, n2.y + 25).attr(`class`, `commit-label`).text(t2.id), c2 = (_a = s2.node()) == null ? void 0 : _a.getBBox();
    if (c2 && (o2.attr(`x`, n2.posWithOffset - c2.width / 2 - P).attr(`y`, n2.y + 13.5).attr(`width`, c2.width + 2 * P).attr(`height`, c2.height + 2 * P), K === `TB` || K === `BT` ? (o2.attr(`x`, n2.x - (c2.width + 4 * N + 5)).attr(`y`, n2.y - 12), s2.attr(`x`, n2.x - (c2.width + 4 * N)).attr(`y`, n2.y + c2.height - 12)) : s2.attr(`x`, n2.posWithOffset - c2.width / 2), i2.rotateCommitLabel)) if (K === `TB` || K === `BT`) s2.attr(`transform`, `rotate(-45, ` + n2.x + `, ` + n2.y + `)`), o2.attr(`transform`, `rotate(-45, ` + n2.x + `, ` + n2.y + `)`);
    else {
      let e3 = -7.5 - (c2.width + 10) / 25 * 9.5, t3 = 10 + c2.width / 25 * 8.5;
      a2.attr(`transform`, `translate(` + e3 + `, ` + t3 + `) rotate(-45, ` + r2 + `, ` + n2.y + `)`);
    }
  }
}, `drawCommitLabel`), Ae = r((e2, t2, n2, r2) => {
  var _a;
  if (t2.tags.length > 0) {
    let i2 = 0, a2 = 0, o2 = 0, s2 = [];
    for (let r3 of t2.tags.reverse()) {
      let t3 = e2.insert(`polygon`), c2 = e2.append(`circle`), l2 = e2.append(`text`).attr(`y`, n2.y - 16 - i2).attr(`class`, `tag-label`).text(r3), u2 = (_a = l2.node()) == null ? void 0 : _a.getBBox();
      if (!u2) throw Error(`Tag bbox not found`);
      a2 = Math.max(a2, u2.width), o2 = Math.max(o2, u2.height), l2.attr(`x`, n2.posWithOffset - u2.width / 2), s2.push({ tag: l2, hole: c2, rect: t3, yOffset: i2 }), i2 += 20;
    }
    for (let { tag: e3, hole: t3, rect: i3, yOffset: c2 } of s2) {
      let s3 = o2 / 2, l2 = n2.y - 19.2 - c2;
      if (i3.attr(`class`, `tag-label-bkg`).attr(`points`, `
      ${r2 - a2 / 2 - N / 2},${l2 + P}  
      ${r2 - a2 / 2 - N / 2},${l2 - P}
      ${n2.posWithOffset - a2 / 2 - N},${l2 - s3 - P}
      ${n2.posWithOffset + a2 / 2 + N},${l2 - s3 - P}
      ${n2.posWithOffset + a2 / 2 + N},${l2 + s3 + P}
      ${n2.posWithOffset - a2 / 2 - N},${l2 + s3 + P}`), t3.attr(`cy`, l2).attr(`cx`, r2 - a2 / 2 + N / 2).attr(`r`, 1.5).attr(`class`, `tag-hole`), K === `TB` || K === `BT`) {
        let o3 = r2 + c2;
        i3.attr(`class`, `tag-label-bkg`).attr(`points`, `
        ${n2.x},${o3 + 2}
        ${n2.x},${o3 - 2}
        ${n2.x + j},${o3 - s3 - 2}
        ${n2.x + j + a2 + 4},${o3 - s3 - 2}
        ${n2.x + j + a2 + 4},${o3 + s3 + 2}
        ${n2.x + j},${o3 + s3 + 2}`).attr(`transform`, `translate(12,12) rotate(45, ` + n2.x + `,` + r2 + `)`), t3.attr(`cx`, n2.x + N / 2).attr(`cy`, o3).attr(`transform`, `translate(12,12) rotate(45, ` + n2.x + `,` + r2 + `)`), e3.attr(`x`, n2.x + 5).attr(`y`, o3 + 3).attr(`transform`, `translate(14,14) rotate(45, ` + n2.x + `,` + r2 + `)`);
      }
    }
  }
}, `drawCommitTags`), je = r((e2) => {
  switch (e2.customType ?? e2.type) {
    case x.NORMAL:
      return `commit-normal`;
    case x.REVERSE:
      return `commit-reverse`;
    case x.HIGHLIGHT:
      return `commit-highlight`;
    case x.MERGE:
      return `commit-merge`;
    case x.CHERRY_PICK:
      return `commit-cherry-pick`;
    default:
      return `commit-normal`;
  }
}, `getCommitClassType`), Me = r((e2, t2, n2, r2) => {
  let i2 = { x: 0, y: 0 };
  if (e2.parents.length > 0) {
    let n3 = Y(e2.parents);
    if (n3) {
      let a2 = r2.get(n3) ?? i2;
      return t2 === `TB` ? a2.y + M : t2 === `BT` ? (r2.get(e2.id) ?? i2).y - M : a2.x + M;
    }
  } else if (t2 === `TB`) return H;
  else if (t2 === `BT`) return (r2.get(e2.id) ?? i2).y - M;
  else return 0;
  return 0;
}, `calculatePosition`), Ne = r((e2, t2, n2) => {
  var _a, _b;
  let r2 = K === `BT` && n2 ? t2 : t2 + j, i2 = (_a = B.get(e2.branch)) == null ? void 0 : _a.pos, a2 = K === `TB` || K === `BT` ? (_b = B.get(e2.branch)) == null ? void 0 : _b.pos : r2;
  if (a2 === void 0 || i2 === void 0) throw Error(`Position were undefined for commit ${e2.id}`);
  let o2 = I.has(c().theme ?? ``);
  return { x: a2, y: K === `TB` || K === `BT` ? r2 : i2 + (o2 ? L / 2 + 1 : -2), posWithOffset: r2 };
}, `getCommitPosition`), X = r((e2, t2, n2, i2) => {
  let a2 = e2.append(`g`).attr(`class`, `commit-bullets`), o2 = e2.append(`g`).attr(`class`, `commit-labels`), s2 = K === `TB` || K === `BT` ? H : 0, c2 = [...t2.keys()], l2 = i2.parallelCommits ?? false, u2 = r((e3, n3) => {
    var _a, _b;
    let r2 = (_a = t2.get(e3)) == null ? void 0 : _a.seq, i3 = (_b = t2.get(n3)) == null ? void 0 : _b.seq;
    return r2 !== void 0 && i3 !== void 0 ? r2 - i3 : 0;
  }, `sortKeys`), d2 = c2.sort(u2);
  K === `BT` && (l2 && Ce(d2, t2, s2), d2 = d2.reverse()), d2.forEach((e3) => {
    var _a;
    let r2 = t2.get(e3);
    if (!r2) throw Error(`Commit not found for key ${e3}`);
    l2 && (s2 = Me(r2, K, s2, V));
    let c3 = Ne(r2, s2, l2);
    if (n2) {
      let e4 = je(r2), t3 = r2.customType ?? r2.type;
      Oe(a2, r2, c3, e4, ((_a = B.get(r2.branch)) == null ? void 0 : _a.index) ?? 0, t3), ke(o2, r2, c3, s2, i2), Ae(o2, r2, c3, s2);
    }
    K === `TB` || K === `BT` ? V.set(r2.id, { x: c3.x, y: c3.posWithOffset }) : V.set(r2.id, { x: c3.posWithOffset, y: c3.y }), s2 = K === `BT` && l2 ? s2 + M : s2 + M + j, s2 > G && (G = s2);
  });
}, `drawCommits`), Pe = r((e2, t2, n2, i2, a2) => {
  let o2 = (K === `TB` || K === `BT` ? n2.x < i2.x : n2.y < i2.y) ? t2.branch : e2.branch, s2 = r((e3) => e3.branch === o2, `isOnBranchToGetCurve`), c2 = r((n3) => n3.seq > e2.seq && n3.seq < t2.seq, `isBetweenCommits`);
  return [...a2.values()].some((e3) => c2(e3) && s2(e3));
}, `shouldRerouteArrow`), Z = r((e2, t2, n2 = 0) => {
  let r2 = e2 + Math.abs(e2 - t2) / 2;
  return n2 > 5 ? r2 : W.every((e3) => Math.abs(e3 - r2) >= 10) ? (W.push(r2), r2) : Z(e2, t2 - Math.abs(e2 - t2) / 5, n2 + 1);
}, `findLane`), Fe = r((e2, t2, n2, r2) => {
  var _a, _b, _c, _d, _e2;
  let { theme: i2 } = c(), a2 = R.has(i2 ?? ``), o2 = V.get(t2.id), s2 = V.get(n2.id);
  if (o2 === void 0 || s2 === void 0) throw Error(`Commit positions not found for commits ${t2.id} and ${n2.id}`);
  let l2 = Pe(t2, n2, o2, s2, r2), u2 = ``, d2 = ``, f2 = 0, p2 = 0, m2 = (_a = B.get(n2.branch)) == null ? void 0 : _a.index;
  n2.type === x.MERGE && t2.id !== n2.parents[0] && (m2 = (_b = B.get(t2.branch)) == null ? void 0 : _b.index);
  let h2;
  if (l2) {
    u2 = `A 10 10, 0, 0, 0,`, d2 = `A 10 10, 0, 0, 1,`, f2 = 10, p2 = 10;
    let e3 = o2.y < s2.y ? Z(o2.y, s2.y) : Z(s2.y, o2.y), n3 = o2.x < s2.x ? Z(o2.x, s2.x) : Z(s2.x, o2.x);
    K === `TB` ? o2.x < s2.x ? h2 = `M ${o2.x} ${o2.y} L ${n3 - f2} ${o2.y} ${d2} ${n3} ${o2.y + p2} L ${n3} ${s2.y - f2} ${u2} ${n3 + p2} ${s2.y} L ${s2.x} ${s2.y}` : (m2 = (_c = B.get(t2.branch)) == null ? void 0 : _c.index, h2 = `M ${o2.x} ${o2.y} L ${n3 + f2} ${o2.y} ${u2} ${n3} ${o2.y + p2} L ${n3} ${s2.y - f2} ${d2} ${n3 - p2} ${s2.y} L ${s2.x} ${s2.y}`) : K === `BT` ? o2.x < s2.x ? h2 = `M ${o2.x} ${o2.y} L ${n3 - f2} ${o2.y} ${u2} ${n3} ${o2.y - p2} L ${n3} ${s2.y + f2} ${d2} ${n3 + p2} ${s2.y} L ${s2.x} ${s2.y}` : (m2 = (_d = B.get(t2.branch)) == null ? void 0 : _d.index, h2 = `M ${o2.x} ${o2.y} L ${n3 + f2} ${o2.y} ${d2} ${n3} ${o2.y - p2} L ${n3} ${s2.y + f2} ${u2} ${n3 - p2} ${s2.y} L ${s2.x} ${s2.y}`) : o2.y < s2.y ? h2 = `M ${o2.x} ${o2.y} L ${o2.x} ${e3 - f2} ${u2} ${o2.x + p2} ${e3} L ${s2.x - f2} ${e3} ${d2} ${s2.x} ${e3 + p2} L ${s2.x} ${s2.y}` : (m2 = (_e2 = B.get(t2.branch)) == null ? void 0 : _e2.index, h2 = `M ${o2.x} ${o2.y} L ${o2.x} ${e3 + f2} ${d2} ${o2.x + p2} ${e3} L ${s2.x - f2} ${e3} ${u2} ${s2.x} ${e3 - p2} L ${s2.x} ${s2.y}`);
  } else u2 = `A 20 20, 0, 0, 0,`, d2 = `A 20 20, 0, 0, 1,`, f2 = 20, p2 = 20, K === `TB` ? (o2.x < s2.x && (h2 = n2.type === x.MERGE && t2.id !== n2.parents[0] ? `M ${o2.x} ${o2.y} L ${o2.x} ${s2.y - f2} ${u2} ${o2.x + p2} ${s2.y} L ${s2.x} ${s2.y}` : `M ${o2.x} ${o2.y} L ${s2.x - f2} ${o2.y} ${d2} ${s2.x} ${o2.y + p2} L ${s2.x} ${s2.y}`), o2.x > s2.x && (u2 = `A 20 20, 0, 0, 0,`, d2 = `A 20 20, 0, 0, 1,`, f2 = 20, p2 = 20, h2 = n2.type === x.MERGE && t2.id !== n2.parents[0] ? `M ${o2.x} ${o2.y} L ${o2.x} ${s2.y - f2} ${d2} ${o2.x - p2} ${s2.y} L ${s2.x} ${s2.y}` : `M ${o2.x} ${o2.y} L ${s2.x + f2} ${o2.y} ${u2} ${s2.x} ${o2.y + p2} L ${s2.x} ${s2.y}`), o2.x === s2.x && (h2 = `M ${o2.x} ${o2.y} L ${s2.x} ${s2.y}`)) : K === `BT` ? (o2.x < s2.x && (h2 = n2.type === x.MERGE && t2.id !== n2.parents[0] ? `M ${o2.x} ${o2.y} L ${o2.x} ${s2.y + f2} ${d2} ${o2.x + p2} ${s2.y} L ${s2.x} ${s2.y}` : `M ${o2.x} ${o2.y} L ${s2.x - f2} ${o2.y} ${u2} ${s2.x} ${o2.y - p2} L ${s2.x} ${s2.y}`), o2.x > s2.x && (u2 = `A 20 20, 0, 0, 0,`, d2 = `A 20 20, 0, 0, 1,`, f2 = 20, p2 = 20, h2 = n2.type === x.MERGE && t2.id !== n2.parents[0] ? `M ${o2.x} ${o2.y} L ${o2.x} ${s2.y + f2} ${u2} ${o2.x - p2} ${s2.y} L ${s2.x} ${s2.y}` : `M ${o2.x} ${o2.y} L ${s2.x + f2} ${o2.y} ${d2} ${s2.x} ${o2.y - p2} L ${s2.x} ${s2.y}`), o2.x === s2.x && (h2 = `M ${o2.x} ${o2.y} L ${s2.x} ${s2.y}`)) : (o2.y < s2.y && (h2 = n2.type === x.MERGE && t2.id !== n2.parents[0] ? `M ${o2.x} ${o2.y} L ${s2.x - f2} ${o2.y} ${d2} ${s2.x} ${o2.y + p2} L ${s2.x} ${s2.y}` : `M ${o2.x} ${o2.y} L ${o2.x} ${s2.y - f2} ${u2} ${o2.x + p2} ${s2.y} L ${s2.x} ${s2.y}`), o2.y > s2.y && (h2 = n2.type === x.MERGE && t2.id !== n2.parents[0] ? `M ${o2.x} ${o2.y} L ${s2.x - f2} ${o2.y} ${u2} ${s2.x} ${o2.y - p2} L ${s2.x} ${s2.y}` : `M ${o2.x} ${o2.y} L ${o2.x} ${s2.y + f2} ${d2} ${o2.x + p2} ${s2.y} L ${s2.x} ${s2.y}`), o2.y === s2.y && (h2 = `M ${o2.x} ${o2.y} L ${s2.x} ${s2.y}`));
  if (h2 === void 0) throw Error(`Line definition not found`);
  e2.append(`path`).attr(`d`, h2).attr(`class`, `arrow arrow` + z(m2, F, a2));
}, `drawArrow`), Ie = r((e2, t2) => {
  let n2 = e2.append(`g`).attr(`class`, `commit-arrows`);
  [...t2.keys()].forEach((e3) => {
    let r2 = t2.get(e3);
    r2.parents && r2.parents.length > 0 && r2.parents.forEach((e4) => {
      Fe(n2, t2.get(e4), r2, t2);
    });
  });
}, `drawArrows`), Le = r((e2, t2, n2, r2) => {
  let { look: i2, theme: a2, themeVariables: o2 } = c(), { dropShadow: s2, THEME_COLOR_LIMIT: l2 } = o2, u2 = I.has(a2 ?? ``), d2 = R.has(a2 ?? ``), f2 = e2.append(`g`);
  t2.forEach((e3, t3) => {
    var _a;
    let a3 = z(t3, u2 ? l2 : F, d2), o3 = (_a = B.get(e3.name)) == null ? void 0 : _a.pos;
    if (o3 === void 0) throw Error(`Position not found for branch ${e3.name}`);
    let c2 = K === `TB` || K === `BT` ? o3 : u2 ? o3 + L / 2 + 1 : o3 - 2, p2 = f2.append(`line`);
    p2.attr(`x1`, 0), p2.attr(`y1`, c2), p2.attr(`x2`, G), p2.attr(`y2`, c2), p2.attr(`class`, `branch branch` + a3), K === `TB` ? (p2.attr(`y1`, H), p2.attr(`x1`, o3), p2.attr(`y2`, G), p2.attr(`x2`, o3)) : K === `BT` && (p2.attr(`y1`, G), p2.attr(`x1`, o3), p2.attr(`y2`, H), p2.attr(`x2`, o3)), W.push(c2);
    let m2 = e3.name, h2 = J(m2), g2 = f2.insert(`rect`), _2 = f2.insert(`g`).attr(`class`, `branchLabel`).insert(`g`).attr(`class`, `label branch-label` + a3);
    _2.node().appendChild(h2);
    let v2 = h2.getBBox(), y2 = u2 ? 0 : 4, b2 = u2 ? 16 : 0, x2 = u2 ? L : 0;
    i2 === `neo` && g2.attr(`data-look`, `neo`), g2.attr(`class`, `branchLabelBkg label` + a3).attr(`style`, i2 === `neo` ? `filter:${u2 ? `url(#${r2}-drop-shadow)` : s2}` : ``).attr(`rx`, y2).attr(`ry`, y2).attr(`x`, -v2.width - 4 - (n2.rotateCommitLabel === true ? 30 : 0)).attr(`y`, -v2.height / 2 + 10).attr(`width`, v2.width + 18 + b2).attr(`height`, v2.height + 4 + x2), _2.attr(`transform`, `translate(` + (-v2.width - 14 - (n2.rotateCommitLabel === true ? 30 : 0) + b2 / 2) + `, ` + (c2 - v2.height / 2 - 2) + `)`), K === `TB` ? (g2.attr(`x`, o3 - v2.width / 2 - 10).attr(`y`, 0), _2.attr(`transform`, `translate(` + (o3 - v2.width / 2 - 5) + `, 0)`), u2 && (g2.attr(`transform`, `translate(${-b2 / 2 - 3}, ${-x2 - 10})`), _2.attr(`transform`, `translate(` + (o3 - v2.width / 2 - 5) + `, ` + (-x2 * 2 + 7) + `)`))) : K === `BT` ? (g2.attr(`x`, o3 - v2.width / 2 - 10).attr(`y`, G), _2.attr(`transform`, `translate(` + (o3 - v2.width / 2 - 5) + `, ` + G + `)`), u2 && (g2.attr(`transform`, `translate(${-b2 / 2 - 3}, ${x2 + 10})`), _2.attr(`transform`, `translate(` + (o3 - v2.width / 2 - 5) + `, ` + (G + x2 * 2 + 4) + `)`))) : g2.attr(`transform`, `translate(-19, ` + (c2 - 12 - x2 / 2) + `)`);
  });
}, `drawBranches`), Re = r(function(e2, t2, n2, r2, i2) {
  return B.set(e2, { pos: t2, index: n2 }), t2 += 50 + (i2 ? 40 : 0) + (K === `TB` || K === `BT` ? r2.width / 2 : 0), t2;
}, `setBranchPosition`), ze = { draw: r(function(t2, n2, r2, i2) {
  q(), l.debug(`in gitgraph renderer`, t2 + `
`, `id:`, n2, r2);
  let a2 = i2.db;
  if (!a2.getConfig) {
    l.error(`getConfig method is not available on db`);
    return;
  }
  let o2 = a2.getConfig(), u2 = o2.rotateCommitLabel ?? false;
  U = a2.getCommits();
  let d2 = a2.getBranchesAsObjArray();
  K = a2.getDirection();
  let f2 = p(`[id="${n2}"]`), { look: m2, theme: h2, themeVariables: g2 } = c(), { useGradient: _2, gradientStart: v2, gradientStop: y2, filterColor: b2 } = g2;
  if (_2) {
    let e2 = f2.append(`defs`).append(`linearGradient`).attr(`id`, n2 + `-gradient`).attr(`gradientUnits`, `objectBoundingBox`).attr(`x1`, `0%`).attr(`y1`, `0%`).attr(`x2`, `100%`).attr(`y2`, `0%`);
    e2.append(`stop`).attr(`offset`, `0%`).attr(`stop-color`, v2).attr(`stop-opacity`, 1), e2.append(`stop`).attr(`offset`, `100%`).attr(`stop-color`, y2).attr(`stop-opacity`, 1);
  }
  m2 === `neo` && I.has(h2 ?? ``) && f2.append(`defs`).append(`filter`).attr(`id`, n2 + `-drop-shadow`).attr(`height`, `130%`).attr(`width`, `130%`).append(`feDropShadow`).attr(`dx`, `4`).attr(`dy`, `4`).attr(`stdDeviation`, 0).attr(`flood-opacity`, `0.06`).attr(`flood-color`, b2);
  let x2 = 0;
  d2.forEach((e2, t3) => {
    var _a;
    let n3 = J(e2.name), r3 = f2.append(`g`), i3 = r3.insert(`g`).attr(`class`, `branchLabel`), a3 = i3.insert(`g`).attr(`class`, `label branch-label`);
    (_a = a3.node()) == null ? void 0 : _a.appendChild(n3);
    let o3 = n3.getBBox();
    x2 = Re(e2.name, x2, t3, o3, u2), a3.remove(), i3.remove(), r3.remove();
  }), X(f2, U, false, o2), o2.showBranches && Le(f2, d2, o2, n2), Ie(f2, U), X(f2, U, true, o2), e.insertTitle(f2, `gitTitleText`, o2.titleTopMargin ?? 0, a2.getDiagramTitle()), s(void 0, f2, o2.diagramPadding, o2.useMaxWidth);
}, `draw`) }, Q = 8, $ = /* @__PURE__ */ new Set([`redux`, `redux-dark`, `redux-color`, `redux-dark-color`]), Be = /* @__PURE__ */ new Set([`redux-color`, `redux-dark-color`]), Ve = /* @__PURE__ */ new Set([`neo`, `neo-dark`]), He = /* @__PURE__ */ new Set([`dark`, `redux-dark`, `redux-dark-color`, `neo-dark`]), Ue = /* @__PURE__ */ new Set([`redux`, `redux-dark`, `redux-color`, `redux-dark-color`, `neo`, `neo-dark`]), We = r((e2) => {
  let { svgId: t2 } = e2, n2 = ``;
  if (e2.useGradient && t2) for (let r2 = 0; r2 < e2.THEME_COLOR_LIMIT; r2++) n2 += `
      .label${r2}  { fill: ${e2.mainBkg}; stroke: url(${t2}-gradient); stroke-width: ${e2.strokeWidth};}
             `;
  return n2;
}, `genGitGraphGradient`), Ge = r((e2) => {
  let { theme: t2, themeVariables: n2 } = h(), { borderColorArray: r2 } = n2, i2 = $.has(t2);
  if (Ve.has(t2)) {
    let t3 = ``;
    for (let n3 = 0; n3 < e2.THEME_COLOR_LIMIT; n3++) if (n3 === 0) t3 += `
        .branch-label${n3} { fill: ${e2.nodeBorder};}
        .commit${n3} { stroke: ${e2.nodeBorder};   }
        .commit-highlight${n3} { stroke: ${e2.nodeBorder}; fill: ${e2.nodeBorder}; }
        .arrow${n3} { stroke: ${e2.nodeBorder}; }
        .commit-bullets { fill: ${e2.nodeBorder}; }
        .commit-cherry-pick${n3} { stroke: ${e2.nodeBorder}; }
        ${We(e2)}`;
    else {
      let r3 = n3 % Q;
      t3 += `
        .branch-label${n3} { fill: ${e2[`gitBranchLabel` + r3]}; }
        .commit${n3} { stroke: ${e2[`git` + r3]}; fill: ${e2[`git` + r3]}; }
        .commit-highlight${n3} { stroke: ${e2[`gitInv` + r3]}; fill: ${e2[`gitInv` + r3]}; }
        .arrow${n3} { stroke: ${e2[`git` + r3]}; }
        `;
    }
    return t3;
  } else if (Be.has(t2)) {
    let n3 = ``;
    for (let a2 = 0; a2 < e2.THEME_COLOR_LIMIT; a2++) if (a2 === 0) n3 += `
        .branch-label${a2} { fill: ${e2.nodeBorder}; ${i2 ? `font-weight:${e2.noteFontWeight}` : ``} }
        .commit${a2} { stroke: ${e2.nodeBorder}; }
        .commit-highlight${a2} { stroke: ${e2.nodeBorder}; fill: ${e2.mainBkg}; }
        .label${a2}  { fill: ${e2.mainBkg}; stroke: ${e2.nodeBorder}; stroke-width: ${e2.strokeWidth}; ${i2 ? `font-weight:${e2.noteFontWeight}` : ``} }
        .arrow${a2} { stroke: ${e2.nodeBorder}; }
        .commit-bullets { fill: ${e2.nodeBorder}; }
        `;
    else {
      let o2 = a2 % r2.length;
      n3 += `
        .branch-label${a2} { fill: ${e2.nodeBorder}; ${i2 ? `font-weight:${e2.noteFontWeight}` : ``} }
        .commit${a2} { stroke: ${r2[o2]}; fill: ${r2[o2]}; }
        .commit-highlight${a2} { stroke: ${r2[o2]}; fill: ${r2[o2]}; }
        .label${a2}  { fill: ${He.has(t2) ? e2.mainBkg : r2[o2]}; stroke: ${r2[o2]};  stroke-width: ${e2.strokeWidth}; }
        .arrow${a2} { stroke: ${r2[o2]}; }
        `;
    }
    return n3;
  } else {
    let t3 = ``;
    for (let n3 = 0; n3 < e2.THEME_COLOR_LIMIT; n3++) t3 += `
        .branch-label${n3} { fill: ${e2.nodeBorder}; ${i2 ? `font-weight:${e2.noteFontWeight}` : ``} }
        .commit${n3} { stroke: ${e2.nodeBorder};   }
        .commit-highlight${n3} { stroke: ${e2.nodeBorder}; fill: ${e2.nodeBorder}; }
        .label${n3}  { fill: ${e2.mainBkg}; stroke: ${e2.nodeBorder}; stroke-width: ${e2.strokeWidth}; ${i2 ? `font-weight:${e2.noteFontWeight}` : ``}}
        .arrow${n3} { stroke: ${e2.nodeBorder}; }
        .commit-bullets { fill: ${e2.nodeBorder}; }
        .commit-cherry-pick${n3} { stroke: ${e2.nodeBorder}; }
        `;
    return t3;
  }
}, `genColor`), Ke = r((e2) => `${Array.from({ length: e2.THEME_COLOR_LIMIT }, (e3, t2) => t2).map((t2) => {
  let n2 = t2 % Q;
  return `
        .branch-label${t2} { fill: ${e2[`gitBranchLabel` + n2]}; }
        .commit${t2} { stroke: ${e2[`git` + n2]}; fill: ${e2[`git` + n2]}; }
        .commit-highlight${t2} { stroke: ${e2[`gitInv` + n2]}; fill: ${e2[`gitInv` + n2]}; }
        .label${t2}  { fill: ${e2[`git` + n2]}; }
        .arrow${t2} { stroke: ${e2[`git` + n2]}; }
        `;
}).join(`
`)}`, `normalTheme`), qe = { parser: be, db: A, renderer: ze, styles: r((e2) => {
  let { theme: t2 } = h(), n2 = Ue.has(t2);
  return `
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  
  ${n2 ? Ge(e2) : Ke(e2)}

  .branch {
    stroke-width: ${e2.strokeWidth};
    stroke: ${e2.commitLineColor ?? e2.lineColor};
    stroke-dasharray:  ${n2 ? `4 2` : `2`};
  }
  .commit-label { font-size: ${e2.commitLabelFontSize}; fill: ${n2 ? e2.nodeBorder : e2.commitLabelColor}; ${n2 ? `font-weight:${e2.noteFontWeight};` : ``}}
  .commit-label-bkg { font-size: ${e2.commitLabelFontSize}; fill: ${n2 ? `transparent` : e2.commitLabelBackground}; opacity: ${n2 ? `` : 0.5};  }
  .tag-label { font-size: ${e2.tagLabelFontSize}; fill: ${e2.tagLabelColor};}
  .tag-label-bkg { fill: ${n2 ? e2.mainBkg : e2.tagLabelBackground}; stroke: ${n2 ? e2.nodeBorder : e2.tagLabelBorder}; ${n2 ? `filter:${e2.dropShadow}` : ``}  }
  .tag-hole { fill: ${e2.textColor}; }

  .commit-merge {
    stroke: ${n2 ? e2.mainBkg : e2.primaryColor};
    fill: ${n2 ? e2.mainBkg : e2.primaryColor};
  }
  .commit-reverse {
    stroke: ${n2 ? e2.mainBkg : e2.primaryColor};
    fill: ${n2 ? e2.mainBkg : e2.primaryColor};
    stroke-width: ${n2 ? e2.strokeWidth : 3};
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${n2 ? e2.mainBkg : e2.primaryColor};
    fill: ${n2 ? e2.mainBkg : e2.primaryColor};
  }

  .arrow {
    /* Intentional: neo themes keep the bold 8px arrow (like classic themes); only redux-geometry themes use the thinner options.strokeWidth. */
    stroke-width: ${$.has(t2) ? e2.strokeWidth : 8};
    stroke-linecap: round;
    fill: none
  }
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e2.textColor};
  }
`;
}, `getStyles`) };
export {
  qe as diagram
};
