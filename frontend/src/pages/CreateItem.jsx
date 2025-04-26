import { useState } from 'react';
import axiosInstance from '../api/axios';
import { toast } from 'react-toastify';
// import { useProductStore } from '../store/product.js';

const CreateItem = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  

  const handleSubmit = async(e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      // Send POST request with form data
      const response = await axiosInstance.post('/api/products', formData);
  
      if (response.status === 201) {
        console.log("Product created:", response.data);
        toast.success("Item successfully added !");
        // Clear the form after successful submission
        setFormData({ name: '', price: '', image: '' });
      }
    } catch (error) {
      console.error("Error creating product:", error);
      toast.error("Error creating product. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center pt-24 px-4 min-h-screen bg-white dark:bg-zinc-900 transition-colors duration-300">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-100 dark:bg-zinc-800 p-6 rounded-2xl shadow-lg space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-zinc-800 dark:text-white">
          Add New Item
        </h2>

        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter item name"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Price</label>
          <input
            type="number"
            name="price"
            required
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Image URL</label>
          <input
            type="url"
            name="image"
            required
            value={formData.image}
            onChange={handleChange}
            placeholder="Paste image link"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateItem;
