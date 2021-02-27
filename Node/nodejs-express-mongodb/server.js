const express = require('express') //为rest api建立express应用
const bodyParser = require('body-parser') //解析请求，生成req.body对象
const cors = require('cors') //支持多种选项开启CORS的express中间件

const jwt = require('jsonwebtoken')
const config = require('./app/config/config')

const app = express()

let corsOptions = {
  origin: 'http://localhost:8080',
}

app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

//链接mongodb
const db = require('./app/models')
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database.')
  })
  .catch((err) => {
    console.log('Cannot connect to the database.', err)
    process.exit()
  })

app.get('/', (req, res) => {
  res.json({ message: 'Welcome!' })
})

require('./app/routes/tutorial.routes')(app)
require('./app/routes/user.routes')(app)

app.post('/api/validate', (req, res) => {
  let token = req.headers.authorization
  jwt.verify(token, config.secretKey, (err, decode) => {
    console.log(decode)
    if (err) {
      res.json({ code: 0, msg: '用户未登录' })
    } else {
      res.json({
        code: 1,
        token: jwt.sign(
          { id: decode.id, username: decode.username, type: decode.type },
          config.secretKey,
          { expiresIn: '60s' }
        ),
        username: decode.username,
        type: decode.type,
        msg: '用户已登录',
      })
    }
  })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
