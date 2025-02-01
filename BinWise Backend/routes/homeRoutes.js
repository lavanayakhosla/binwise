const express=require('express')
const uploader=require('../middlewares/multerMiddleware')
const {isloogedin} = require('../validation/authValidator')
const {createProduct,findproducts,findproductbyId,deleteProduct}=require('../controllers/homeController')
const productRouter=express.Router()
productRouter.post('/',uploader.single('photo'),createProduct)
productRouter.get('/:id',findproductbyId)
productRouter.delete('/delete/:id',deleteProduct)
productRouter.get('/',findproducts)
module.exports=productRouter