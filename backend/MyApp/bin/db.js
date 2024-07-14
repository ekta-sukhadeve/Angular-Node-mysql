const mysql = require('mysql2');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'ashwarya12',
    database : 'MeanStack'
});

connection.connect((err)=>{
    if(err){
        console.log('failed to connect',err);
    }
    else{
        console.log('connected...!');
    }
});
module.exports = connection;