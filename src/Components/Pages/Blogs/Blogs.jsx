import React, { useEffect, useState } from "react";
import axios from "axios";

const Blogs = () => {
  // const [getBlogs, setgetBlogs] = useState()
  const [Blogs, setBlogs] = useState([]);
  useEffect(() => {
    const FetchData = async () => {
      const response = await axios.get(
        "http://localhost:4000/api/user/getblogs"
      );
      setBlogs(response.data);
    };
    FetchData();
  }, []);
  const baseUrl = "http://localhost:4000/uploads/blog/";

  return (
    <div className="pt-[120px] w-full flex justify-center gap-3 flex-wrap">
      {Blogs.map((blogs) => (
        <div className=" w-[250px] rounded-lg shadow-2xl p-2">
          <img src={`${baseUrl}${blogs.featuredImage}`} className="w-[300px]" />
          <h1>{blogs.title}</h1>
          <p>By Anas Ahmad</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
