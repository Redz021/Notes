const join = (a, b, c) => {
  return `${a}_${b}_${c}`
}

function curry(fn) {
  return (a, b, c) => {
    return fn(a, b, c)
  }
}

const curriedJoin = curry(join)

console.log(curriedJoin(1, 2, 3))
console.log(curriedJoin(1)(2, 3))
console.log(curriedJoin(1, 2)(3))
