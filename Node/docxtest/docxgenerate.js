const fs = require('fs')
const path = require('path')
const officegen = require('officegen')
const { create } = require('domain')

let docx = officegen('docx')
docx.on('finalize', function (written) {
  console.log('创建成功')
})

docx.on('error', function (err) {
  console.error(err)
})

let pObj = docx.createP()
pObj.addText('Simple')
pObj.addText(' with color', { color: '000088' })
pObj.addText(' and back color.', { color: '00ffff', back: '000088' })
pObj = docx.createP()
pObj.addText('Since ')
pObj.addText('officegen 0.2.12', {
  back: '00ffff',
  shdType: 'pct12',
  shdColor: 'ff0000',
})
let out = fs.createWriteStream('example1.docx')
out.on('error', function (err) {
  console.log(err)
})
docx.generate(out)
