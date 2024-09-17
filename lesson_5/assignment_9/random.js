function rng(min, max) {
  [min, max] = [Math.min(min, max), Math.max(min, max)];
  let range = max - min + 1;

  Math.floor(min + (range * Math.random()));
}