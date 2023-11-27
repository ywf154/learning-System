const mysql = require('mysql')
const connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    database:'users'
})

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});
/*
connection.query('SELECT * FROM users.ev_user',
    function (error, results, fields) {
        if (error) {
            throw error;
        }

        // 打印查询结果
        console.log('SELECT result is: ', results);
        //debugger;  // 在这里添加debugger
    });
*/
var data = { password: '666666', username: 'waylau' };
connection.query('INSERT INTO users.ev_user SET ?', data,
        function (error, results, fields) {
            if (error) {
                throw error;
            }
    
            // 打印查询结果
            console.log('INSERT result is: ', results);
});





connection.end();
  

