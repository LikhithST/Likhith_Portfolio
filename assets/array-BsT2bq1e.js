Array.prototype.slice;
function e(e2) {
  return typeof e2 == `object` && `length` in e2 ? e2 : Array.from(e2);
}
export {
  e as t
};
