const express = require('express');

const { getProducts, getProductsById, createNewProducts, updateProductsById, deleteProductsById } = require("../controllers/products");
const app = express.Router();



app.get('/products', getProducts)
app.get('/products/:id', getProductsById)
app.post('/products', createNewProducts)
app.put('/products/:id',updateProductsById )
app.delete('/products/:id', deleteProductsById)

module.exports = app;
