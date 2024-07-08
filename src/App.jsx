import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LogIn from "./Components/Pages/Login/LogIn";
import SignUp from "./Components/Pages/SignUp/SignUp";
import Home from "./Components/Pages/Home/Home";
import Header from "./Components/Header/Header";
import Headphones from "./Components/Pages/Home/Products/Headphones/Headphones";
import Headbands from "./Components/Pages/Home/Products/Headbands/Headbands";
import Earpads from "./Components/Pages/Home/Products/Earpads/Earpads";
import Cables from "./Components/Pages/Home/Products/Cables/Cables";
import Shop from "./Components/Pages/Shop/Shop";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact";
import Error from "./Components/Pages/Error/Error";
import DetailPage from "./Components/Pages/Shop/DetailPage";
import Layout from "./Components/Admin/Layout";
import Dashboard from "./Components/Admin/Pages/Dashboard";
import Marketing from "./Components/Admin/Pages/Marketing";
import Orders from "./Components/Admin/Pages/Orders";
import Products from "./Components/Admin/Pages/Product/Products";
import Reports from "./Components/Admin/Pages/Reports";
import AddProducts from "./Components/Admin/Pages/Product/AddProducts";
import Protected from "./Components/Pages/Protected";
import AdminBlogs from "./Components/Admin/Pages/Blogs/AdminBlogs";
import AddBlogs from "./Components/Admin/Pages/Blogs/AddBlogs";
import Blogs from "./Components/Pages/Blogs/Blogs";
import DetailBlog from "./Components/Pages/Blogs/DetailBlog";
import Loader from "./Loader";
import Footer from "./Components/Footer/Footer";
import { AuthProvider } from "./Context/AuthContext";
import Description from "./Components/Pages/Shop/Description";
import Features from './Components/Pages/Shop/Features';
import AddReview from "./Components/Pages/Shop/AddReview";
import UpdateProductForm from "./Components/Admin/Pages/Product/UpdateProductForm";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const routesWithLoader = ["/", "/shop", "/about", "/contact"]; // Add your specific routes here

  useEffect(() => {
    if (routesWithLoader.includes(location.pathname)) {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 3000); // Simulate loading logic
    } else {
      setIsLoading(false);
    }
  }, [location.pathname]);

  const shouldHideHeader =
    location.pathname.startsWith("/login") ||
    location.pathname.startsWith("/signup") ||
    location.pathname.startsWith("/admin");

  const shouldHideFooter = shouldHideHeader;
  const showHomePageComponent = location.pathname === '/' || location.pathname === '/contact';

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <AuthProvider>
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
                <Route path="update-product/:productId" element={<UpdateProductForm />} />
              </Route>
              <Route path="blogs">
                <Route path="" element={<AdminBlogs />} />
                <Route path="upload-blogs" element={<AddBlogs />} />
              </Route>
              <Route path="reports" element={<Reports />} />
            </Route>
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:blogId" element={<DetailBlog />} />
            <Route path="/shop/:productId" element={<DetailPage />}>
              <Route index element={<Description />} />
              <Route path="d" element={<Description />} />
              <Route path="f" element={<Features />} />
              <Route path="r" element={<AddReview />} />
            </Route>
            <Route path="/" element={<Protected Component={Home} />}>
              <Route index element={<Headphones />} />
              <Route path="/headbands" element={<Headbands />} />
              <Route path="/earpads" element={<Earpads />} />
              <Route path="/cables" element={<Cables />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
          {!shouldHideFooter && <Footer showSubscription={showHomePageComponent} />}
        </AuthProvider>
      )}
    </>
  );
};

export default App;
