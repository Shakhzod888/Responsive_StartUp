import React from "react";
import "../talants/talants.scss";
import TalantesPerson_1 from "../assets/Talants_1.png";
import TalantesPerson_2 from "../assets/Talants_2.jpg";
import TalantesPerson_3 from "../assets/Talants_3.jpg";
import TalantesPerson_4 from "../assets/Talants_4.jpg";

function Talants() {
  return (
    <div className="home_section_4">
      <div className="container">
        <p className="team">TEAM</p>
        <p className="ourTalants">Our Talents</p>
        <p className="talants_text">
          Lorem ipsum, dolor sit amet consectetur <br /> Suscipit nemo hic quos,
          ab,
        </p>
        <div className="cards_box">
          <div className="cards_container">
            <div className="card">
              <div className="card_img">
                <img src={TalantesPerson_1} alt="" />
              </div>
              <div className="card_texts">
                <p>Peg Legge</p>
                <span>CEO</span>
              </div>
            </div>
            <div className="card">
              <div className="card_img">
                <img src={TalantesPerson_2} alt="" />
              </div>
              <div className="card_texts">
                <p>Richard Guerra</p>
                <span>CTO</span>
              </div>
            </div>
          </div>
          <div className="cards_container">
            <div className="card">
              <div className="card_img">
                <img src={TalantesPerson_3} alt="" />
              </div>
              <div className="card_texts">
                <p>Alexandra Stolz</p>
                <span>DESIGNER</span>
              </div>
            </div>
            <div className="card">
              <div className="card_img">
                <img src={TalantesPerson_4} alt="" />
              </div>
              <div className="card_texts">
                <p>Janet Bray</p>
                <span>DEVELOPER</span>
              </div>
            </div>
          </div>
        </div>
        <div className="talants_btn">
          <button>View Team</button>
        </div>
      </div>
    </div>
  );
}

export default Talants;
