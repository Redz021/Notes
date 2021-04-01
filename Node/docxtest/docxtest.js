const fs = require('fs')
const PizZip = require('pizzip')
const docxtemplater = require('docxtemplater')

let content = fs.readFileSync('./docxtest.docx', 'binary')
let zip = new PizZip(content)
let doc = new docxtemplater()
doc.loadZip(zip)
doc.setData({
  title1: '这是标题',
  para1: '这是内容This is English content',
})
try {
  doc.render()
} catch (error) {
  let err = {
    message: error.message,
    name: error.name,
    stack: error.stack,
    properties: error.properties,
  }
  console.error(JSON.stringify(err))
  throw error
}
let buf = doc.getZip().generate({ type: 'nodebuffer' })
fs.writeFileSync('./docxtest.docx', buf)
