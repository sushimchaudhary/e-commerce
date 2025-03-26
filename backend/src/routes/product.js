const express = require('express');

const { getProduct, createNewProduct, updateproduct } = require("../controllers/product");
const router = express.Router();



router.get('/product', getProduct)
// router.get('/product/:id', getProductById)
router.post('/product', createNewProduct)
router.put('/product',updateproduct )
// router.delete('/product/:id', deleteProductById)

module.exports = router;
