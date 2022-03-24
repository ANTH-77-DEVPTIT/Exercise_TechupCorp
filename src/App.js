import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "../src/pages/Blogs";
import MyShop from "../src/pages/MyShop";
import Home from "../src/pages/Home";
import MyChannel from "../src/pages/MyChannel"
import NoPage from "../src/pages/NoPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="shop" element={<MyShop />} />
            <Route path="channel" element={<MyChannel />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="logout" element={<LogoutPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
//https://jsonplaceholder.typicode.com/posts
export default App;
