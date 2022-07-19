const express= require('express')
const router= express.Router(); 
 const categoryController= require('../controller-connect/category-controller')

router.post('/postdata',categoryController.postcat)
router.get('/getdata/:id',categoryController.getcat)
router.delete('/deletedata/:id',categoryController.deletecat)
router.patch('/updatedata/:id',categoryController.updatecat)

module.exports=router;