const mysql = require('mysql')
//14.1��mysql.createPool����������һ�����ݿ�����Ӷ���
const db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    database:'users'

})


//14.2���Ⱪ¶��ȥ
module.exports = db