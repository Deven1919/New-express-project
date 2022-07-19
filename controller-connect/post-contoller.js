// const mysql= require('mysql')
// const con= mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:"",
//     database:"bloger"
// }); 

// con.connect((err)=>{
//  if (err) throw err;
//  console.log("Database created!")
// });

  let con=require('../Mysql-connection/sql-connection').devendra
let postdata=(req,res)=>{
    let {post_name, post_desc}= req.body;
    let sql= `INSERT INTO post (post_name,post_desc,created) VALUES ('${post_name}','${post_desc}', now())  `
    con.query(sql,function(err,result){
        if (err) throw err;
        res.send(`Post data successfully ${result}`)
    })
}
exports.postdata=postdata;

let getdata=(req,res)=>{
     let Id= req.params.id 
    let sql= `SELECT * FROM post WHERE id=${Id}  `
    con.query(sql,function(err,result){
        if (err) throw err;
        res.send(`Get data successfully ${result}`)
    })
}
exports.getdata=getdata;

let deletedata=(req,res)=>{
    let Id= req.params.id 
   let sql= `DELETE FROM post WHERE id=${Id}  `
   con.query(sql,function(err,result){
       if (err) throw err;
       res.send(`Data deleted successfully ${result}`)     
   })
}
exports.deletedata=deletedata;

let updatedata=(req,res)=>{
    let {post_name, post_desc}= req.body
    let Id= req.params.id 
let sql= ` UPDATE post SET post_name='${post_name}',post_desc='${post_desc}' WHERE id=${Id}  `
   con.query(sql,function(err,result){
       if (err) throw err;
    res.send(`Data update successfully ${result}`)
       
   }); 
}
exports.updatedata=updatedata;