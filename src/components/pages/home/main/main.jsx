import React, { useState } from "react";
import "./main.scss";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";
import MainPersons from "../assets/mainPersons.png";
import { Link } from "react-router-dom";
function Main() {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const controlBurger = () => {
    setShowBurgerMenu(!showBurgerMenu);
    toggle();
  };

  return (
    <section className="section_1">
      <div
        onClick={controlBurger}
        className={`burgerMenu ${showBurgerMenu ? "" : "displayNone"}`}
      >
        <div>
          <Link className="activeALink " to="/">
            Home
          </Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="container">
        <nav className="section_1_nav ">
          <div className="nav_left ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="50"
              viewBox="0 0 70 50"
              fill="none"
            >
              <path
                d="M39.7719 12.3454C40.9881 11.1262 41.7406 9.44383 41.7406 7.5851C41.7406 3.86264 38.7226 0.844696 35.0001 0.844696C32.6467 0.844696 30.5777 2.05287 29.372 3.88062C29.0517 4.2014 2.21949 37.2729 1.96866 37.6531C0.752489 38.8723 0 40.5551 0 42.4129C0 46.1358 3.01794 49.1538 6.7404 49.1538C9.0938 49.1538 11.1629 47.9461 12.3686 46.1178C12.6889 45.7971 39.5211 12.7251 39.7719 12.3454Z"
                fill="white"
              />
              <path
                d="M55.2974 28.0393C56.5171 26.8192 57.271 25.1348 57.271 23.2736C57.271 19.5511 54.2531 16.5332 50.5306 16.5332C48.1762 16.5332 46.1061 17.7423 44.9005 19.5716C44.5777 19.8949 30.4848 37.2665 30.2325 37.6493C29.0128 38.8695 28.2588 40.5538 28.2588 42.4145C28.2588 46.1375 31.2767 49.1555 34.9992 49.1555C37.3536 49.1555 39.4237 47.9463 40.6289 46.117C40.9517 45.7942 55.0451 28.4221 55.2974 28.0393Z"
                fill="white"
              />
              <path
                d="M70.0002 7.5851C70.0002 11.3081 66.9822 14.3255 63.2598 14.3255C59.5368 14.3255 56.5193 11.3081 56.5193 7.5851C56.5193 3.86264 59.5368 0.844696 63.2598 0.844696C66.9822 0.844696 70.0002 3.86264 70.0002 7.5851Z"
                fill="white"
              />
              <path
                d="M13.4808 7.5851C13.4808 11.3081 10.4629 14.3255 6.7404 14.3255C3.01794 14.3255 0 11.3081 0 7.5851C0 3.86264 3.01794 0.844696 6.7404 0.844696C10.4629 0.844696 13.4808 3.86264 13.4808 7.5851Z"
                fill="white"
              />
            </svg>
            <p>Start</p>
          </div>
          <div className="nav_rigth">
            <ul>
              <li>
                <Link className="activeLink" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <Burger
                className="burger"
                color="#fff"
                opened={opened}
                onClick={() => {
                  controlBurger();
                  toggle();
                }}
                aria-label={label}
              />
            </ul>
          </div>
        </nav>

        <div className="section_main">
          <div className="left_box">
            <p className="welcome">WELCOME</p>
            <p className="main_title">Lorem ipsum dolor sit amet consectetur</p>
            <p className="section_text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
              voluptate culpa nesciunt delectus iste?
            </p>
            <div className="button_box">
              <button type="button">Explore</button>
            </div>
          </div>
          <div className="right_box">
            <img src={MainPersons} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;