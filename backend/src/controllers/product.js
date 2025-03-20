const Product = require('../models/product')

const getProduct = async(req, res) => {
   const data = await Product.find()
   console.log(data)
  }


    // control registration form
  const createNewProduct = async (req, res) => {
    
  }
  //control login form
  const updateproduct = async(req, res)=>{
   
  }
  const deleteProduct = async(req, res)=>{
   
  }

  
  module.exports = {getProduct, createNewProduct, updateproduct, deleteProduct}