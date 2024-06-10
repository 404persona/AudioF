import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetailBlog = () => {
  const { blogId } = useParams();
  const [blogs, setblogs] = useState([]);
  const [error, seterror] = useState(null);
  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/user/getblog/${blogId}`
        );
        setblogs(response.data);
      } catch (error) {
        seterror(error);
      }
    };
    FetchData();
  }, [blogId]);
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
  const baseUrl = "http://localhost:4000/uploads/blog/";

  return (
    <div className="pt-[120px]">
      {blogs && (
        <div>
          <div className="pb-6 text-center text-[2rem] font-semibold">
            {blogs.title}
          </div>
          <div className="flex justify-center">
            <img
              src={`${baseUrl}${blogs.featuredImage}`}
              className="center w-[900px] h-[600px]"
            />
          </div>
          <p className="leading-relaxed p-8">
            <div
              dangerouslySetInnerHTML={{
                __html: blogs.content,
              }}
            />
          </p>
        </div>
      )}
    </div>
  );
};

export default DetailBlog;
