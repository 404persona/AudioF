import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Blogs = () => {
  const [Blogs, setBlogs] = useState([]);
  useEffect(() => {
    const FetchData = async () => {
      const response = await axios.get(
        "http://localhost:4000/api/user/getblogs"
      );
      setBlogs(response.data);
      console.log(response.data);
    };
    FetchData();
  }, []);
  const baseUrl = "http://localhost:4000/uploads/blog/";
  // const content = blog.content
  return (
    <div>
      <div className="flex justify-end">
        <Link
          to="upload-blogs"
          className="text-white bg-green-400 p-1 rounded-lg font-medium hover:bg-transparent hover:text-black hover: border-[1.5px] hover:border-green-400 transition-all shadow-sm"
        >
          Upload Blogs
        </Link>
      </div>
      <div>
        {Blogs.map((blog)=>(
          <>
          <p>{blog.content}</p>
          </>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
