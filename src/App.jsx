import React, { useEffect, useState } from "react";
import LogIn from "./Components/Pages/Login/LogIn";
import SignUp from "./Components/Pages/SignUp/SignUp";
import Home from "./Components/Pages/Home/Home";
import Header from "./Components/Header/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import Headphones from "./Components/Pages/Home/Products/Headphones/Headphones.jsx";
import Headbands from "./Components/Pages/Home/Products/Headbands/Headbands.jsx";
import Earpads from "./Components/Pages/Home/Products/Earpads/Earpads.jsx";
import Cables from "./Components/Pages/Home/Products/Cables/Cables.jsx";
import Shop from "./Components/Pages/Shop/Shop.jsx";
import About from "./Components/Pages/About/About.jsx";
import Contact from "./Components/Pages/Contact/Contact.jsx";
import Error from "./Components/Pages/Error/Error.jsx";
<<<<<<< HEAD
// import DetailPage from "./Components/Pages/Home/DetailPage.jsx";
import DetailPage from "./Components/Pages/Shop/DetailPage.jsx"
=======
import DetailPage from "./Components/Pages/Home/DetailPage.jsx";
>>>>>>> 8d7d9404128b1327d70a6ffbd071309cff800a82
import Layout from "./Components/Admin/Layout.jsx";
import Dashboard from "./Components/Admin/Pages/Dashboard.jsx";
import Marketing from "./Components/Admin/Pages/Marketing.jsx";
import Orders from "./Components/Admin/Pages/Orders.jsx";
import Products from "./Components/Admin/Pages/Product/Products.jsx";
import Reports from "./Components/Admin/Pages/Reports.jsx";
import AddProducts from "./Components/Admin/Pages/Product/AddProducts.jsx";
import Protected from "./Components/Pages/Protected.jsx";
import AdminBlogs from "./Components/Admin/Pages/Blogs/AdminBlogs.jsx";
// import DarkModeToggle from "./DarkModeToggle.jsx";
import AddBlogs from "./Components/Admin/Pages/Blogs/AddBlogs";
import Blogs from "./Components/Pages/Blogs/Blogs";
import DetailBlog from "./Components/Pages/Blogs/DetailBlog.jsx";
import Loader from "./Loader.jsx";
// import FullscreenAnimation from "./FullscreenAnimation.jsx";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./Components/Footer/Footer.jsx";

const App = () => {
  const [isLoading, setIsLoading] = useState(false); // Control loader visibility
  const location = useLocation();

  const routesWithLoader = ["/", "/shop", "/about", "/contact"]; // Add your specific routes here

  useEffect(() => {
    if (routesWithLoader.includes(location.pathname)) {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 3000); // Simulate loading logic
    }
  }, [location.pathname]);

  const shouldHideHeader =
    location.pathname.startsWith("/login") ||
    location.pathname.startsWith("/signup") ||
    location.pathname.startsWith("/admin");
  
    const shouldHideFooter = shouldHideHeader

    const showHomePageComponent = location.pathname === '/' || location.pathname === '/contact'
  return (
    <>
    {/* <marquee className="font-bold" >Learning from the Best</marquee> */}

      {!shouldHideHeader && <Header />}
      <Routes>
        <Route path="/admin/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products">
            <Route path="" element={<Products />} />
            <Route path="addproducts" element={<AddProducts />} />
          </Route>
          <Route path="blogs">
            <Route path="" element={<AdminBlogs />} />
            <Route path="upload-blogs" element={<AddBlogs />} />
          </Route>
          <Route path="reports" element={<Reports />} />
        </Route>
        {/* {isAdminPage && <Header/>} */}
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:blogId" element={<DetailBlog />} />
        <Route path="/shop/:productId" element={<DetailPage />} />
        {/* {/* Routes for Admin Side  */}
        <Route path="/" element={<Protected Component={Home} />}>
          <Route index element={<Headphones />} />
          <Route path="/headbands" element={<Headbands />} />
          <Route path="/earpads" element={<Earpads />} />
          <Route path="/cables" element={<Cables />} />
          {/* Error page */}
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
<<<<<<< HEAD
      {/* {!shouldHideFooter && <Footer showSubscription={showHomePageComponent} />} */}
=======
      {!shouldHideFooter && <Footer showSubscription={showHomePageComponent} />}
>>>>>>> 8d7d9404128b1327d70a6ffbd071309cff800a82
    </>
  );
};

export default App;
