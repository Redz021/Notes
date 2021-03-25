function template(tempStr, args) {
  let reg = /\{\{\$\d\}\}/g
  let argTemps = tempStr.match(reg).sort((a, b) => {
    return a[3] < b[3] ? -1 : a[3] == b[3] ? 0 : 1
  })

  argTemps = [...new Set(argTemps)]
  let regs = argTemps.map((item) => {
    let temp = item.split('').join('\\').split('')
    temp.unshift('\\')
    temp.splice(6, 1)
    temp = temp.join('')
    temp = RegExp(temp, 'g')
    return temp
  })
  for (let item of regs) {
    console.log(item)
    tempStr = tempStr.replace(item, args.shift())
  }
  return tempStr
}

console.log(
  template('<div>{{$1}}+{{$2}}-{{$0}}={{$1}}</div>', ['val1', 'val2', 'val3'])
)
//<div>val2+val3-val1</div>
