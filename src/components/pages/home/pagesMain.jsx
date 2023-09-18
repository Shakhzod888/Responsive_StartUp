import React from "react";
import Main from "./main/main";
import About from "./about/about";
import Sponsors from "./sponsors/sponsors";
import Talants from "./talants/talants";
import Footer from "./footer/footer";

function PagesMain() {
  return (
    <div>
      <Main />
      <Sponsors />
      <About />
      <Talants />
      <Footer />
    </div>
  );
}

export default PagesMain;
