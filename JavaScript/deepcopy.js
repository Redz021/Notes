// function deepcopy(source) {
//   const target = source instanceof Array ? [] : {}
//   for (let key in source) {
//     if (source.hasOwnProperty(key)) {
//       if (source[key] && typeof source[key] === 'object') {
//         target[key] = source[key] instanceof Array ? [] : {}
//         target[key] = deepcopy(source[key])
//       } else {
//         target[key] = source[key]
//       }
//     }
//   }
//   return target
// }

// let obj1 = { a: '1', b: '2', c: { d: '3' }, e: [1, 2, 3, 4], f: function () {} }
// obj2 = deepcopy(obj1)
// obj1.c.d = '4'
// obj1.e.push(666)
// obj1.f = 'joke'
// console.log(obj1, obj2)

function deep(source) {
  let target = source instanceof Array ? [] : {}
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      if (source[key] && typeof source[key] === 'object') {
        target[key] = deep(source[key])
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}
let obj1 = { a: '1', b: '2', c: { d: '3' }, e: [1, 2, 3, 4], f: function () {} }
obj2 = deep(obj1)
obj1.c.d = '4'
obj1.e.push(666)
obj1.f = 'joke'
console.log(obj1, obj2)
