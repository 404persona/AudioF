import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";
// import * as React from 'react';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import { RiEdit2Line } from "react-icons/ri";
import TableRow from "@mui/material/TableRow";

const AdminBlogs = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [Blogs, setBlogs] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const DeleteBlog = async (blogId) => {
    // Renamed for clarity
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/user/deleteblog/${blogId}`
      );
      console.log("User deleted successfully:", response.data); // Log response for confirmation
      setBlogs(Blogs.filter((blog) => blog._id !== blogId)); // Update state after successful deletion
    } catch (error) {
      console.error("Error deleting Product:", error);
      setError(error); // Update error state for display
    } finally {
      setIsLoading(false); // Set loading state to false even in case of errors
    }
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    const FetchData = async () => {
      const response = await axios.get(
        "http://localhost:4000/api/user/getblogs"
      );
      setBlogs(response.data);
    };
    FetchData();
  }, []);
  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    return dateObject.toLocaleDateString("en-US", {
      // Adjust locale as needed
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const baseUrl = "http://localhost:4000/uploads/blog/";
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

      <Paper sx={{ width: "100%", overflowX: "scroll" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table
            stickyHeader
            aria-label="sticky table"
            style={{ maxWidth: "100%", overflowX: "Auto" }}
          >
            <TableHead>
              <TableRow>
                {/* {Blogs.map((blog) => (
                  <TableCell key={blog.id} align={blog.align}>
                    {blog.label}
                  </TableCell>
                ))} */}
                <TableCell>Blog Id</TableCell>
                <TableCell>Title</TableCell>
                {/* <TableCell>Content</TableCell> */}
                <TableCell>Date</TableCell>
                <TableCell>Author Name</TableCell>
                <TableCell>Author Email</TableCell>
                {/* <TableCell>Actions</TableCell> */}
                {/* <TableCell>Actions</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Slicing Blogs based on pagination */}
              {Blogs.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              ).map((blog, index) => (
                <TableRow key={blog.id} className="border">
                  <TableCell className="p-2">{blog._id}</TableCell>
                  <TableCell>{blog.title}</TableCell>
                  {/* <TableCell>
                      <div dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 40) }} />
                    </TableCell> */}
                  <TableCell>{formatDate(blog.createdAt)}</TableCell>
                  <TableCell>{blog.authorName}</TableCell>
                  <TableCell>{blog.authorEmail}</TableCell>
                  <TableCell onClick={() => DeleteBlog(blog._id)}>
                  <RiEdit2Line className="text-[1.3rem] text-green-600 cursor-pointer hover:text-green-400 transition-colors" />
                  </TableCell>
                  <TableCell onClick={() => DeleteBlog(blog._id)}>
                    <MdDeleteOutline className="text-[1.3rem] text-red-400 cursor-pointer hover:text-red-700 transition-colors" />
                  </TableCell>
                  {/* Add your Action cells here */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          className="flex justify-center"
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={Blogs.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default AdminBlogs;
