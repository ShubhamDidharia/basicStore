import express from 'express';
import Product from '../models/Product.js'; // Import the Product model
import { get } from 'mongoose';
import { createProduct, updateProduct, deleteProduct, getProducts, getProductById } from '../controllers/product.controller.js';

// using express.router as we need only the product route and not the whole express app(routes, middleware, etc.)
// This is a common practice in Express applications to separate route handling from the main application logic
// This allows us to define routes in a modular way and use them in the main app file
// This is useful for organizing routes and keeping the code clean and maintainable
const router = express.Router();



router.get('/', getProducts); // Route to get all products
    
router.post('/', createProduct); // Route to create a new product

router.delete('/:id', deleteProduct); // Route to delete a product by ID

router.put('/:id', updateProduct); // Route to update a product by ID


router.get('/:id', getProductById); // Route to get a product by ID  // 

export default router;