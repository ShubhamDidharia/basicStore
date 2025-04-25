import React from 'react';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import axiosInstance from '../api/axios'; // Import the axios instance
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get('/api/products'); // Use the axios instance
        console.log('Fetched Products:', response.data); // Log the response data
        setProducts(response.data); // Set the response data as products
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/api/products/${id}`); // or use axiosInstance
      // Remove the deleted product from state
      setProducts(prev => prev.filter(product => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product.");
    }
  };
  

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors duration-500">
      <h1 className="text-3xl font-bold text-center py-6">All Products</h1>
      <div className="grid grid-cols-3 gap-4 p-4">
        {products.map(product => (
          <div key={product._id} className="border p-4 rounded-lg dark:border-zinc-700 bg-white dark:bg-zinc-800 transition duration-300">
            <img src={product.image} alt={product.name} className="w-full h-100 object-cover rounded-md"  />
            <div className="flex justify-between items-center mt-2">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-lg font-medium">{product.price}</p>
            </div>
            
            <div className="flex space-x-2 mt-4">
              <Link to={`/edit/${product._id}`}>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300">
                  Edit
                </button>
              </Link>
              <button onClick={()=>handleDelete(product._id)} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
