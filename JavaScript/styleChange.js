function cssStyle2DomStyle(sName) {
  sName = sName.replace(/^\-/, '')
  let arr = sName.split('-')
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].split('')
    arr[i][0] = arr[i][0].toUpperCase()
    arr[i] = arr[i].join('')
  }
  return arr.join('')
}

console.log(cssStyle2DomStyle('font-size'))
console.log(cssStyle2DomStyle('-webkit-border-image'))
