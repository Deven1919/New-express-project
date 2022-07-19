let con= require('../Mysql-connection/sql-connection').devendra


let postcat=(req,res)=>{
    let {cat_name, cat_desc}= req.body;
    let sql= `INSERT INTO categories (cat_name,cat_desc,created) VALUES ('${cat_name}','${cat_desc}', now())  `
    con.query(sql,function(err,result){
        if (err) throw err;
        res.send(`Post data successfully ${result}`)
    })
}
exports.postcat=postcat;

let getcat=(req,res)=>{
     let Id= req.params.id 
    let sql= `SELECT * FROM categories WHERE id=${Id}  `
    con.query(sql,function(err,result){
        if (err) throw err;
        res.send(`Get data successfully ${result}`)
    })
}
exports.getcat=getcat;

let deletecat=(req,res)=>{
    let Id= req.params.id 
   let sql= `DELETE FROM categories WHERE id=${Id}  `
   con.query(sql,function(err,result){
       if (err) throw err;
       res.send(`Data deleted successfully ${result}`)     
   })
}
exports.deletecat=deletecat;

let updatecat=(req,res)=>{
    let {cat_name, cat_desc}= req.body
    let Id= req.params.id 
let sql= ` UPDATE post categories cat_name='${cat_name}',cat_desc='${cat_desc}' WHERE id=${Id}  `
   con.query(sql,function(err,result){
       if (err) throw err;
    res.send(`Data update successfully ${result}`)
       
   }); 
}
exports.updatecat=updatecat;