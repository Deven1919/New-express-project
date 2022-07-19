

const mysql= require('mysql');


const con= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:"bloger"
}); 

con.connect((err)=>{
 if (err) throw err;
 console.log("Database created!")
});

exports.devendra=con;
