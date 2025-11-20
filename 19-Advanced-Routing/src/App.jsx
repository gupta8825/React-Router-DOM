import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";

import Product from "./Pages/Product";
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Kid from "./Pages/Kid";
import Courses from "./Pages/Courses";
import CourseDetail from "./Pages/CourseDetail";
import Navbar2 from "./Components/Navbar2";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Navbar2/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path='/courses/:id' element={<CourseDetail/>}/>

        <Route path="/product" element={<Product />} />
        <Route path= '*' element={<NotFound/>}/>

        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kid" element={<Kid />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
