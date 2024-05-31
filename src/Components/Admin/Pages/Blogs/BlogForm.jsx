import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Alert, Snackbar } from "@mui/material";
import tinymce from "tinymce/tinymce";

const BlogForm = () => {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [AuthorName, setAuthorName] = useState("");
  const [AuthorEmail, setAuthorEmail] = useState("");
  const [FeaturedImage, setFeaturedImage] = useState(null);
  const [toast, settoast] = useState(false);
  // const [htmlContent, setHtmlContent] = useState("");
  const formRef = useRef(null);
  const handleEditorChange = (e) => {
    setContent(e.target.getContent());
  };
  useEffect(() => {
    tinymce.init({
      selector: "#myEditor",
      setup: (editor) => {
        editor.on("Change", handleEditorChange);
        if (Content) {
          const convertedHtml = marked(Content);
          console.log(convertedHtml); // Inspect the generated HTML
          editor.setContent(convertedHtml, { format: "html" });
        }
      },
      plugins:
        "advlist autolink lists link image charmap print preview anchor pagebreak ",
      toolbar_mode: "floating",
      toolbar:
        "undo redo | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image charmap | preview anchor pagebreak",
      image_title: true,
      automatic_uploads: true,
      forced_root_block: false,
    });
  }, [Content]);
  const handleToast = () => {
    settoast(false);
  };
  const SubmitHandler = async (e) => {
    e.preventDefault();
    tinymce.get("myEditor").save();
    const updatedContent = tinymce.get("myEditor").getContent();
    const formData = new FormData();
    formData.append("title", Title);
    formData.append("content", updatedContent);
    formData.append("authorName", AuthorName);
    formData.append("auhtorEmail", AuthorEmail);
    formData.append("featuredImage", FeaturedImage);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/createblog",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },

          method: "POST",
        }
      );
      console.log(response.data);
      formRef.current.reset();
      if (response.status === 200 || response.status === 201) {
        // Success condition
        formRef.current.reset();
        setTitle("");
        setContent("");
        setAuthorName("");
        setAuthorEmail("");
        setFeaturedImage(null);
        settoast(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const imageHandler = async (e) => {
    setFeaturedImage(e.target.files[0]);
  };
  return (
    <div>
      <form
        className="flex flex-col gap-2"
        ref={formRef}
        onSubmit={SubmitHandler}
      >
        <div className="flex flex-col">
          <label>Featured Image:</label>
          <input
            type="file"
            className="border-[2px] rounded-lg file:bg-green-400 file:text-white file:font-medium  file:border-gray-200 file:rounded-md  py-2 px-3 hover:file:text-black hover:file:bg-gray-100"
            onChange={imageHandler}
          />
        </div>
        <div className="flex flex-col">
          <label className="pb-1 pl-1">Title:</label>
          <input
            type="text"
            className="outline-none p-1 pl-2 pr-2 border-[2px] rounded-lg focus:border-green-400"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="pb-1 pl-1">Content:</label>
          <textarea
            type="text"
            id="myEditor"
            className="outline-none p-1 pl-2 pr-2 border-[2px] rounded-lg focus:border-green-400 h-[20px]"
            value={Content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="flex gap-10 justify-center">
          <div className="flex flex-col">
            <label className="pb-1 pl-1">Author Name:</label>
            <input
              type="text"
              className="outline-none p-1 pl-2 pr-2 border-[2px] rounded-lg focus:border-green-400"
              value={AuthorName}
              onChange={(e) => setAuthorName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="pb-1 pl-1">Author Email:</label>
            <input
              type="email"
              className="outline-none p-1 pl-2 pr-2 border-[2px] rounded-lg focus:border-green-400"
              value={AuthorEmail}
              onChange={(e) => setAuthorEmail(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-400 w-[130px]  justify-center text-white p-[7px] font-medium rounded-lg mt-4 flex shadow-md"
        >
          Upload Blog
        </button>
      </form>
      <div>
        <Snackbar
          open={toast}
          autoHideDuration={1500}
          onClose={handleToast}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert severity="success">Blog Uploaded Successfully!</Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default BlogForm;
