const express = require('express');

const { getProduct, createNewProduct, updateproduct, deleteProduct } = require("../controllers/product");
const router = express.Router();



router.get('/product', getProduct)
router.post('/product', createNewProduct)
router.put('/product',updateproduct )
router.delete('/product', deleteProduct)

module.exports = router;
