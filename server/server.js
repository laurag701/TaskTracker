const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'TASKTRACKER',
})
connection.connect((err) => {
    if(err){
        console.log(err);
    }
    else if(!err){
        console.log('You are connected');
    }
})
app.listen(3308,() =>{
    console.log('listening on port 3306');

})