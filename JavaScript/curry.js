const join = (a, b, c) => {
  return `${a}_${b}_${c}`
}

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return curried.bind(this, ...args)
    }
  }
}

const curriedJoin = curry(join)

console.log(curriedJoin(1, 2, 3))
console.log(curriedJoin(1)(2, 3))
console.log(curriedJoin(1, 2)(3))
