/* eslint-disable no-unused-vars */
import React from "react";
import PagesMain from "./home/pagesMain";
import PagePortfolio from "./portfolio/pagePortfolio";
import Services from "./services/services";
import Contact from "./contact/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Web() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PagesMain />} />
          <Route path="/portfolio" element={<PagePortfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Web;
