function e(e2, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e2);
      break;
    default:
      this.range(t).domain(e2);
      break;
  }
  return this;
}
export {
  e as t
};
