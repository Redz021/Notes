function* testGenerator() {
  yield 'hello'
  yield 'world'
  return 'done'
}

let tg = testGenerator()

console.log(tg.next())
console.log(tg.next())
console.log(tg.next())
