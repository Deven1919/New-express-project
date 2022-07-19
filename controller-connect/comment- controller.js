 let con=require('../Mysql-connection/sql-connection').devendra

let postcomment=(req,res)=>{
    let {comment_name, comment_desc}= req.body;
    let sql= `INSERT INTO post (comment_name,comment_desc,created) VALUES ('${comment_name}','${comment_desc}', now())  `
    con.query(sql,function(err,result){
        if (err) throw err;
        res.send(`Post data successfully ${result}`)
    })
}
exports.postcomment=postcomment;

let getcomment=(req,res)=>{
     let Id= req.params.id 
    let sql= `SELECT * FROM comment WHERE id=${Id}  `
    con.query(sql,function(err,result){
        if (err) throw err;
        res.send(`Get data successfully ${result}`)
    })
}
exports.getcomment=getcomment;

let deletecomment=(req,res)=>{
    let Id= req.params.id 
   let sql= `DELETE FROM comment WHERE id=${Id}  `
   con.query(sql,function(err,result){
       if (err) throw err;
       res.send(`Data deleted successfully ${result}`)     
   })
}
exports.deletecomment=deletecomment;

let updatecomment=(req,res)=>{
    let {comment_name, comment_desc}= req.body
    let Id= req.params.id 
let sql= ` UPDATE comment SET comment_name='${comment_name}',comment_desc='${comment_desc}' WHERE id=${Id}  `
   con.query(sql,function(err,result){
       if (err) throw err;
    res.send(`Data update successfully ${result}`)
       
   }); 
}
exports.updatecomment=updatecomment;