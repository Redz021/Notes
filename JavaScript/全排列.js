function test(str) {
  let res = []
  if (str.length === 1) {
    return [str]
  } else {
    for (let i = 0; i < str.length; i++) {
      let head = str[i]
      //每个字母在第一位的情况
      let others = str.slice(0, i) + str.slice(i + 1, str.length)
      //取出剩余字符
      let tail = test(others)
      //对剩余字符进行递归计算
      for (let j = 0; j < tail.length; j++) {
        let temp = head + tail[j]
        //把递归返回的所有除第一位字符以外的排列拼接到第一个字符后面
        if (res.indexOf(temp) !== -1) continue
        //过滤重复结果
        res.push(temp)
      }
    }
  }
  return res
}

console.log(test('abc'))
