import React from "react";
import LogIn from "./Components/Pages/Login/LogIn";
import SignUp from "./Components/Pages/SignUp/SignUp";
import Home from "./Components/Pages/Home/Home";
import Header from "./Components/Header/Header";
import { Routes, Route, Outlet } from "react-router-dom";
import Headphones from "./Components/Pages/Home/Products/Headphones/Headphones.jsx";
import Headbands from "./Components/Pages/Home/Products/Headbands/Headbands.jsx";
import Earpads from "./Components/Pages/Home/Products/Earpads/Earpads.jsx";
import Cables from "./Components/Pages/Home/Products/Cables/Cables.jsx";
import Shop from "./Components/Pages/Shop/Shop.jsx";
import About from "./Components/Pages/About/About.jsx";
import Contact from "./Components/Pages/Contact/Contact.jsx";
import Error from "./Components/Pages/Error/Error.jsx";
import DetailPage from "./Components/Pages/Home/DetailPage.jsx";
import Layout from "./Components/Admin/Layout.jsx";
import Dashboard from "./Components/Admin/Pages/Dashboard.jsx";
import Marketing from "./Components/Admin/Pages/Marketing.jsx";
import Orders from "./Components/Admin/Pages/Orders.jsx";
import Products from "./Components/Admin/Pages/Product/Products.jsx";
import Reports from "./Components/Admin/Pages/Reports.jsx";
import Login from "./Components/Admin/Login.jsx";
import AddProducts from "./Components/Admin/Pages/Product/AddProducts.jsx";

const App = () => {
  return (
    <>
      {window.location.pathname.indexOf("/admin") === -1 && <Header />}
      <Outlet />
      <Routes>
        <Route path="/admin-login" element={<Login />} />
        <Route path="/admin/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products">
            <Route path="" element={<Products />} />
            <Route path="addproducts" element={<AddProducts />} />
          </Route>
          <Route path="reports" element={<Reports />} />
        </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop/:productId" element={<DetailPage />} />
        {/* Routes for Admin Side  */}

        <Route path="/" element={<Home />}>
          <Route index element={<Headphones />} />
          <Route path="/headbands" element={<Headbands />} />
          <Route path="/earpads" element={<Earpads />} />
          <Route path="/cables" element={<Cables />} />
          {/* Error page */}
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
