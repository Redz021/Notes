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

function curry2(func, args) {
  return function (...args2) {
    innerArgs = [...args2]
    if (args) {
      innerArgs = args.concat(innerArgs)
    }
    if (innerArgs.length < func.length) {
      return curry2(func, innerArgs)
    }
    return func.apply(null, innerArgs)
  }
}
const curriedJoin2 = curry2(join)

console.log(curriedJoin2(1, 2, 3))
console.log(curriedJoin2(1)(2, 3))
console.log(curriedJoin2(1, 2)(3))
