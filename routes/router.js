const express=require('express')
const router=new express.Router()
const userController=require('../Controllers/userController')
const carController=require('../Controllers/carController')



// register API
router.post('/users/register',userController.register)
//  login API
router.post('/users/login',userController.login)
// add item
router.post('/cars/add',carController.addItem)


module.exports=router