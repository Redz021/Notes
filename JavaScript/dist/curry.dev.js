"use strict";

var join = function join(a, b, c) {
  return "".concat(a, "_").concat(b, "_").concat(c);
};

function curry(fn) {
  return function curried() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return curried.bind.apply(curried, [this].concat(args));
    }
  };
}

var curriedJoin = curry(join);
console.log(curriedJoin(1, 2, 3));
console.log(curriedJoin(1)(2, 3));
console.log(curriedJoin(1, 2)(3));