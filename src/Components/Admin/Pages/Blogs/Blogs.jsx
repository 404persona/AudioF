import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";

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
    <div className="">
      <div className="flex justify-end">
        <Link
          to="upload-blogs"
          className="text-white bg-green-400 p-1 rounded-lg font-medium hover:bg-transparent hover:text-black hover: border-[1.5px] hover:border-green-400 transition-all shadow-sm mb-6"
        >
          Upload Blogs
        </Link>
      </div>
      <div>
        <div className="overflow-x-scroll w-max">
          <table className="shadow border overflow-x-auto overflow-y-auto border-gray-200 ">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Blog Id
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Content
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Author Name
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Author Email
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {Blogs.map((blog) => (
                <tr
                  key={blog.id}
                  className="hover:bg-green-100 cursor-pointer transition-all"
                >
                  <td className="px-4 py-2 border-b border-gray-200 text-sm font-medium text-gray-900">
                    {blog._id}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm font-medium text-gray-900">
                    {blog.title}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm font-medium text-gray-900">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: blog.content.substring(0, 40),
                      }}
                    />
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm font-medium text-gray-900">
                    {blog.authorName}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm font-medium text-gray-900">
                    {blog.authorEmail}
                  </td>
                  <div className="flex justify-center pt-3 gap-2  text-gray-600">
                    <td className="text-[1.2rem] hover:text-green-500 transition-all">
                      <FaRegEdit />
                    </td>
                    <td className="text-[1.2rem] hover:text-red-500 transition-all">
                      <MdDeleteOutline />
                    </td>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
