import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../api/axios';
import { toast } from 'react-toastify';

const EditItem = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
  });

  // Fetch existing product info
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosInstance.get(`/api/products/${id}`);
        setFormData(response.data); // Prefill form with fetched data
      } catch (error) {
        console.error("Error fetching product for editing:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.put(`/api/products/${id}`, formData);
      if (response.status === 200) {
        toast.success("Item edited successfully!");
      }
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("something failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Edit Product</h2>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Product Name"
        className="w-full mb-3 p-2 border"
      />
      <input
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        type="number"
        className="w-full mb-3 p-2 border"
      />
      <input
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image URL"
        className="w-full mb-3 p-2 border"
      />
      <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">
        Update
      </button>
    </form>
  );
};

export default EditItem;

