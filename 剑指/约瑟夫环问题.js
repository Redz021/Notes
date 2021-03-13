function last(n, m) {
  let result = 0
  for (let i = 2; i < n; i++) {
    result += (result + m) % i
  }
  return result
}

console.log(last(5, 3)) //3
