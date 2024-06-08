import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetailBlog = () => {
  const { BlogId } = useParams();
  const [blogs, setblogs] = useState('');
  const [error, seterror] = useState(null);
  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/user/getblog/${BlogId}`
        );
        setblogs(response.data);
      } catch (error) {
        seterror(error);
      }
    };
    FetchData();
  }, [BlogId]);
  if (error) {
    return <div>Error fetching Blogs: {error.message}</div>;
  }
  if (!blogs) {
    return (
      <div className="loading-container">
        <p>Loading Blogs ...</p>
      </div>
    );
  }
  return (
    <div>
     {blogs && (
       <div>{blogs.title}</div>
     )}
    </div>
  );
};

export default DetailBlog;
