function copyProperties(object1, object2) {
  for (let prop in object1) {
    object2[prop] = object1[prop];
  }

  return Object.keys(object2).length;
}


let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));   // 2
console.log(sal);                        // { model: 9000, enabled: true }