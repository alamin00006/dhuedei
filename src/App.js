import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./adminDashboard/Dashboard/Dashboard";
import ItemManage from "./adminDashboard/ItemManage";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./views/About/AboutUs";
import Blog from "./views/Blog/Blog";
import CopyRight from "./views/CopyRight/CopyRight";
import Footer from "./views/Footer/Footer";
import Gallery from "./views/Gallery/Gallery";
import Header from "./views/Header/Header";

import News from "./views/News/News";
import Order from "./views/Order/Order";
import Services from "./views/Services/Services";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<ItemManage></ItemManage>} />
        </Route>
      </Routes>
      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;
