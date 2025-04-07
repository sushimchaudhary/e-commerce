const Product = require('../models/product')

const getProduct = async(req, res) => {
   const data = await Product.find()
   res.json(data)
  }


    // control registration form
  const createNewProduct = async (req, res) => {
    await Product.create(req.body)
    res.json({
      msg: "product created"
    })
  }
  //control login form
  const updateproduct = async(req, res)=>{
    await Product.findByIdAndUpdate(req.params.id, req.body)
    res.json({
      msg: "product updated"
    })
  }

  const deleteProduct = async(req, res)=>{
    await Product.findByIdAndDelete(req.params.id)
    res.json({
      msg: "product deleted"
    })
  }


  
  module.exports = {getProduct, createNewProduct, updateproduct, deleteProduct}