const mysql = require('mysql')
//14.1用mysql.createPool方法来创建一个数据库的连接对象
const db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    database:'users'

})


//14.2向外暴露出去
module.exports = db