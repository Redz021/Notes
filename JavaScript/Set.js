let arr1 = [1, 2, 3, 4, 5]
let arr2 = [4, 5, 6, 7]

//并集
let union = new Set([...arr1, ...arr2])
//交集
let intersect = new Set([...arr1].filter((item) => arr2.indexOf(item) !== -1))
//差集
let difference = new Set([...arr1].filter((item) => arr2.indexOf(item) === -1))

console.log(union, intersect, difference)
