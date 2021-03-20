function rgb2hex(sRGB) {
  let reg = /rgb\((\d+)\,\s*(\d+)\,\s*(\d+)\)/
  if (!reg.test(sRGB)) return sRGB
  let color = sRGB.match(reg).slice(1, 4)

  color = color.map((element) => {
    element = parseInt(element).toString(16)
    return element.length == 2 ? element : '0' + element
  })
  return color.reduce((a, b) => a + b, '#')
}

console.log(rgb2hex('rgb(0,0,0)'))
