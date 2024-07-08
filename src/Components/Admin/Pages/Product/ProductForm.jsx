import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Alert, Snackbar } from "@mui/material";
import tinymce from "tinymce/tinymce";

const ProductForm = () => {
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState("");
  const [shortDescrption, setshortDescription] = useState("");
  const [Category, setCategory] = useState("");
  const [features, setFeatures] = useState("")
  const [image, setImage] = useState(null);
  const [toast, settoast] = useState(false);
  const handleEditorChange = (e) => {
    setFeatures(e.target.getFeatrues());
  };
  useEffect(() => {
    tinymce.init({
      selector: "#myEditor",
      setup: (editor) => {
        editor.on("Change", handleEditorChange);
        // tinymce.activeEditor.getContent({format : 'html'})
        if (features) {
          const convertedHtml = marked(features);
          console.log(convertedHtml);
          editor.setContent(convertedHtml, { format: "html" });
        }
      },
      plugins:
        "advlist autolink lists link image charmap print preview anchor pagebreak ",
      toolbar_mode: "floating",
      toolbar:
        "undo redo | bold italic underline  | alignjustify | bullist numlist outdent indent |",
      image_title: true,
      automatic_uploads: true,
      forced_root_block: false,
    });
  }, [features]);

  const formRef = useRef(null);
  const handletoast = () => {
    settoast(false);
  };
  const SubmitHandle = async (e) => {
    e.preventDefault();
    tinymce.get("myEditor").save();
    const updatedContent = tinymce.get("myEditor").getContent();
    const formData = new FormData();
    formData.append("name", Name);
    formData.append("description", Description);
    formData.append("price", Price);
    formData.append("shortdescription", shortDescrption);
    formData.append("category", Category);
    formData.append("features", features);
    image.forEach((file) => formData.append("image", file));
    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/addproduct",
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
        setName("");
        setDescription("");
        setPrice("");
        setshortDescription("");
        setCategory("");
        setFeatures("");
        settoast(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const imageHandler = async (e) => {
    setImage(Array.from(e.target.files));
    console.log("Selected Images:", image);
    console.log(e);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form
        ref={formRef}
        onSubmit={SubmitHandle}
        className="w-[600px]flex flex-col justify-cente"
      >
        <div className="flex flex-col w-[300px]">
          <label className="pb-1 pl-1">Product Images:</label>
          <input
            type="file"
            onChange={imageHandler}
            className="outline-none p-1 pl-2 pr-2 border-[2px] rounded-lg focus:border-green-400"
            multiple
          />
        </div>
        <div className="flex flex-col">
          <label className="pb-1 pl-1">Product Name:</label>
          <input
            type="text"
            className="outline-none p-1 pl-2 pr-2 border-[2px] rounded-lg focus:border-green-400"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="pb-1 pl-1">Short Description:</label>
          <input
            type="text"
            className="outline-none p-1 pl-2 pr-2 border-[2px] rounded-lg focus:border-green-400"
            value={shortDescrption}
            onChange={(e) => setshortDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="pb-1 pl-1">Description:</label>
          <textarea
             type="text"
             id="myEditor"
             className="outline-none p-1 pl-2 pr-2 border-[2px] rounded-lg focus:border-green-400 h-[20px]"
             value={Description}
             onChange={(e) => setFeatures(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="pb-1 pl-1">Features:</label>
              <textarea
              type="text"
              id="myEditor"
              className="outline-none p-1 pl-2 pr-2 border-[2px] rounded-lg focus:border-green-400 h-[20px]"
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
            />
          
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col w-[300px]">
            <label className="pb-1 pl-1">Price:</label>
            <input
              type="number"
              value={Price}
              className="outline-none p-1 pl-2 pr-2 border-[2px] rounded-lg focus:border-green-400"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-[300px]">
            <label className="pb-1 pl-1">Category:</label>
            <input
              type="text"
              value={Category}
              className="outline-none p-1 pl-2 pr-2 border-[2px] rounded-lg focus:border-green-400"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className=" bg-green-400 text-white p-[7px] font-medium rounded-lg mt-4 flex shadow-md"
          >
            Upload Product
          </button>
        </div>
      </form>
      <div>
        <Snackbar
          open={toast}
          autoHideDuration={1500}
          onClose={handletoast}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert severity="success">Product Added Successfully!</Alert>
        </Snackbar>
      </div>
    </div>
  );
};
export default ProductForm;
