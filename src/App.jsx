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

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
      {/* Routes  */}
      {window.location.pathname !== '/login' && window.location.pathname !== '/signup' && (
          <Header /> // Render header only on non-login/signup pages
        )}
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop/:id" element={<DetailPage/>} />
        {/* nested routes for homepage  */}
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
