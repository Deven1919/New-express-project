const express= require('express')
const app= express()
const port= 3000;
const bodyParser= require('body-parser')

const postRouter= require('./Router/post')
const commentRouter= require('./Router/comment')
const categoryRouter= require('./Router/category')

app.use(bodyParser.json());

app.use('/post',postRouter)
app.use('/post',commentRouter)
app.use('/post',categoryRouter)

app.listen(port,(req,res)=>{
console.log(`Connected! ${port}`)

});