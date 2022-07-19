const express= require('express')
const router= express.Router(); 
 const commentController= require('../controller-connect/comment- controller')

router.post('/postdata',commentController.postcomment)
router.get('/getdata/:id',commentController.getcomment)
router.delete('/deletedata/:id',commentController.deletecomment)
router.patch('/updatedata/:id',commentController.updatecomment)

module.exports=router;