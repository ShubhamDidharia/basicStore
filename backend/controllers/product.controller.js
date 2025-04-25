import Product from '../models/Product.js'; // Import the Product model

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products from the database
    res.status(200).json(products); // Send only the products array
  } catch (error) {
    console.error("Error fetching products:", error); // Log the error
    return res.status(500).json({ success: false, message: 'Server error' }); // Respond with server error
  }
  };

export const createProduct = async (req, res) => {
    const product = req.body; // Assuming the product data is sent in the request body
    if(!product.name || !product.image || !product.price) {
      return res.status(400).json({ success : false, message: 'All fields are required' });
    }
  
    const newProduct = new Product(product); // Create a new product instance
    try {
      await newProduct.save(); // Save the product to the database
      res.status(201).json(newProduct ); // Respond with the created product
      
    } catch (error) {
      console.error("Error creating product:", error);
      return res.status(500).json({ success: false, message: 'Server error' });
      
    }

};

export const deleteProduct = async (req, res) => {
    const { id } = req.params; // Extract the product ID from the request parameters
    try {
      const deletedProduct = await Product.findByIdAndDelete(id); // Find and delete the product by ID
      if (!deletedProduct) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      } // If the product is found and deleted, respond with success
      res.status(200).json(deletedProduct ); // Respond with the deleted product
    } catch (error) {
      console.error("Error deleting product:", error); // Log the error
      return res.status(500).json({ success: false, message: 'Server error' }); // Respond with server error
    }
  };

export const updateProduct = async (req, res) => {
    const { id } = req.params; // Extract the product ID from the request parameters
    const updatedProduct = req.body; // Get the updated product data from the request body
    try {
      const product = await Product.findByIdAndUpdate(id, updatedProduct, { new: true }); // Find and update the product by ID
      if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      } // If the product is found and updated, respond with success
      res.status(200).json(product ); // Respond with the updated product
    } catch (error) {
      console.error("Error updating product:", error); // Log the error
      return res.status(500).json({ success: false, message: 'Server error' }); // Respond with server error
    }
  };

  export const getProductById = async (req, res) => {
    const { id } = req.params; // Extract the product ID from the request parameters
    try {
      const product = await Product.findById(id); // Find the product by ID
      if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      } // If the product is found, respond with success
      res.status(200).json(product ); // Respond with the product
    } catch (error) {
      console.error("Error fetching product:", error); // Log the error
      return res.status(500).json({ success: false, message: 'Server error' }); // Respond with server error
    }
  };
