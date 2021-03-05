const express = require('express')
const router = express.Router()

//import controllers into routes
const {getAllProducts, getProductById} = require('../controller/productControllers')

//GET all product from database
// GET /api/products
// @access Public
router.get('/', getAllProducts); //getting data from controllers

//GET a product by id from database
// GET /api/products
// @access Public
router.get('/:id', getProductById); //getting data from controllers

module.exports = router;