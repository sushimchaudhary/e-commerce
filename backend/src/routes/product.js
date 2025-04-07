const express = require('express');

const { getProduct, createNewProduct, updateproduct } = require("../controllers/product");
const router = express.Router();



router.get('/products', getProduct)
router.post('/products', createNewProduct)
router.put('/products',updateproduct )
// router.delete('/product/:id', deleteProductById)

module.exports = router;
