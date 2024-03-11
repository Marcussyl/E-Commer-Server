//connect to mysql database
var mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'marcussyl-mysql-0928',
    database: 'ecommerce',
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('connected as id' + connection.threadId);
});

module.exports = connection;