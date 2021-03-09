const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/config');
const jwt = require('jsonwebtoken');

const app = express();

//配置cors
let corsOptions = {
  origin: 'http://localhost:8080'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//链接至数据库
const db = require('./models');
db.mongoose
  .connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('已连接至数据库');
  })
  .catch(err => {
    console.log('连接失败', err);
    process.exit();
  });
//配置路由
require('./routes/user.router')(app);
//启动
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`已在${PORT}端口上成功运行`);
});
