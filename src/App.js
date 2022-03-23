import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "../src/pages/Blogs";
import Contact from "../src/pages/Contact";
import Home from "../src/pages/Home";
import MyChannel from "../src/pages/MyChannel"
import NoPage from "../src/pages/NoPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="channel" element={<MyChannel />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
//https://jsonplaceholder.typicode.com/posts
export default App;
