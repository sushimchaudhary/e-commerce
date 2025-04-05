const Products = require('../models/products')

// Controller function to get all products
const getProducts = async(req, res) => {
   const data = await Products.find()

   return res?.json(data)
  }
  
  // Controller function to get a product by its ID
  const getProductsById = async(req, res) => {
    const data = await Products.findById(req.params.id)
   
    return res?.json(data)
   }
 
    // Controller function to create a new product

  const createNewProducts = async (req, res) => {
   const data = await Products.create(req.body)
   if (data) return res.json ({msg: "Product Created !!"})
   
  }
 
// Controller function to update an existing product by ID
  const updateProductsById = async(req, res)=>{
   const Products = await Products.findByIdAndUpdate(req.params.id , req.body)
   return res.json({msg: 'Updated Product'})
  
  }
 
// Controller function to delete a product by ID
  const deleteProductsById = async(req, res)=>{
   const Products = await Products.findByIdAndDelete(req.params.id)
   return res.json({msg: 'Product deleted succesfully'})
  }

  
  module.exports = {getProducts, getProductsById, createNewProducts, updateProductsById, deleteProductsById}