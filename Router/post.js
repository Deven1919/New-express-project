const express= require('express')
const router= express.Router(); 
 const controller= require('../controller-connect/post-contoller')

router.post('/postdata',controller.postdata)
router.get('/getdata/:id',controller.getdata)
router.delete('/deletedata/:id',controller.deletedata)
router.patch('/updatedata/:id',controller.updatedata)

module.exports=router;