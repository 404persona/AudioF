import React, { useState } from 'react';
import axios from 'axios';

const AddReview = ({ productId, fetchProduct }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.post(`http://localhost:4000/api/user/product/${productId}/review`, { rating, comment }, config);
      fetchProduct();
    } catch (error) {
      console.error('Failed to add review', error);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Rating:</label>
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        <option value="1">1 - Poor</option>
        <option value="2">2 - Fair</option>
        <option value="3">3 - Good</option>
        <option value="4">4 - Very Good</option>
        <option value="5">5 - Excellent</option>
      </select>

      <label>Comment:</label>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddReview;
