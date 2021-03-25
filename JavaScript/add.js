function sum() {
  let args = [...arguments]
  let temp = function (...innerArgs) {
    args = args.concat(innerArgs)
    return temp
  }
  temp.sumOf = function () {
    return args.reduce((a, b) => a + b)
  }
  return temp
}

console.log(sum(1, 2, 3).sumOf()) //6
console.log(sum(2, 3)(2).sumOf()) //7
console.log(sum(1)(2)(3)(4).sumOf()) //10
console.log(sum(2)(4, 1)(2).sumOf()) //9
