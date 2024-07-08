import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductUpdateForm = () => {
  const {productId} = useParams()
  const [product, setProduct] = useState({
    name: '',
    price: '',
    shortdescription: '',
    description: '',
    image: [],
    category: '',
    features: '',
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.put(`http://localhost:4000/api/user/updateproduct/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:4000/api/user/updateproduct/${productId}`, product);
      console.log('Product updated:', response.data);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Name" required />
      <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
      <textarea name="shortdescription" value={product.shortdescription} onChange={handleChange} placeholder="Short Description" required />
      <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description" required />
      <input type="text" name="category" value={product.category} onChange={handleChange} placeholder="Category" required />
      <input type="text" name="features" value={product.features} onChange={handleChange} placeholder="Features" required />
      <button type="submit">Update Product</button>
    </form>
  );
};

export default ProductUpdateForm;
