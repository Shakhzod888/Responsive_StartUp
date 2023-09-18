import React from "react";
import "../about/about.scss";
import AboutImg_1 from "../assets/aboutImg_1.png";
import AboutImg_2 from "../assets/aboutImg_2.png";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  React.useEffect(() => {
    AOS.init({});
  });
  return (
    <section className="home_section_3">
      <div className="container">
        <div className="about_container_sec_3">
          <div className="first_box_sec_3">
            <div>
              <img src={AboutImg_1} alt="" />
            </div>
            <div className="about_box_texts">
              <h3>Lorem ipsum dolor sit amet consectetur</h3>
              <div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos
                  error ipsum, voluptate culpa nesciunt delectus iste?
                </p>
              </div>
              <div className="button_box">
                <button>Learn More</button>
              </div>
            </div>
          </div>
          <div className="second_box_sec_3">
            <div className="about_box_texts">
              <h3>Lorem ipsum dolor sit amet consectetur</h3>
              <div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos
                  error ipsum, voluptate culpa nesciunt delectus iste?
                </p>
              </div>
              <div className="button_box">
                <button>Learn More</button>
              </div>
            </div>
            <div>
              <img src={AboutImg_2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
