"use strict";

var join = function join(a, b, c) {
  return "".concat(a, "_").concat(b, "_").concat(c);
};

function curry(fn) {
  return function (a, b, c) {
    return fn(a, b, c);
  };
}

var curriedJoin = curry(join);
console.log(curriedJoin(1, 2, 3));
console.log(curriedJoin(1)(2, 3));
console.log(curriedJoin(1, 2)(3));