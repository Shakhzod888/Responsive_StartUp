import React from "react";
import "../about/about.scss";
import AboutImg_1 from "../assets/aboutImg_1.png";
import AboutImg_2 from "../assets/aboutImg_2.png";

function About() {
  return (
    <section className="home_section_3">
      <div className="container">
        <div className="about_container_sec_3">
          <div className="first_box_sec_3">
            <div data-aos-duration="700" data-aos="zoom-in">
              <img src={AboutImg_1} alt="" />
            </div>
            <div className="about_box_texts">
              <h3 data-aos="fade-left" data-aos-duraction="600">
                Lorem ipsum dolor sit amet consectetur
              </h3>
              <div>
                <p data-aos="fade-left" data-aos-duraction="800">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos
                  error ipsum, voluptate culpa nesciunt delectus iste?
                </p>
              </div>
              <div className="button_box">
                <button data-aos="fade-left" data-aos-duraction="1000">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="second_box_sec_3">
            <div className="about_box_texts">
              <h3 data-aos="fade-right" data-aos-duraction="600">
                Lorem ipsum dolor sit amet consectetur
              </h3>
              <div>
                <p data-aos="fade-right" data-aos-duraction="800">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos
                  error ipsum, voluptate culpa nesciunt delectus iste?
                </p>
              </div>
              <div className="button_box">
                <button data-aos="fade-right" data-aos-duraction="1000">
                  Learn More
                </button>
              </div>
            </div>
            <div data-aos-duration="700" data-aos="zoom-in">
              <img src={AboutImg_2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
