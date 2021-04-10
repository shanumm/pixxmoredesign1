import React, { useEffect } from "react";
import Cross from "./Cross";
import { Link } from "react-router-dom";
import inView from "in-view";

import { AnimatePresence, motion } from "framer-motion";

import "./App.css";

export default function Portfolio() {
  useEffect(() => {
    const windowHeight = window.innerHeight;
    const portfolioContainer = document.querySelector(".portfolio-container");
    portfolioContainer.addEventListener("scroll", () => {
      const page1 = document.querySelector(".portfolio-page1");
      const page2 = document.querySelector(".portfolio-page2");
      const page3 = document.querySelector(".portfolio-page3");
      const page4 = document.querySelector(".portfolio-page4");
      const page5 = document.querySelector(".portfolio-page5");
      const pageImage = document.querySelectorAll(".p-p1-content-right-img");
      pageImage.forEach((element) => {
        element.classList.add("extra");
      });
      pageImage.forEach((element) => {
        element.addEventListener("animationend", () => {
          element.classList.remove("extra");
        });
      });

      console.log(page1);
      if (page1.getBoundingClientRect().bottom == windowHeight) {
        portfolioContainer.style.background = "white";
      }
      if (
        page1.getBoundingClientRect().bottom < windowHeight &&
        page1.getBoundingClientRect().bottom > 0
      ) {
        portfolioContainer.style.background = "black";
      }
      if (
        page2.getBoundingClientRect().bottom < windowHeight &&
        page2.getBoundingClientRect().bottom > 0
      ) {
        portfolioContainer.style.background = "white";
      }
      if (
        page3.getBoundingClientRect().bottom < windowHeight &&
        page3.getBoundingClientRect().bottom > 0
      ) {
        portfolioContainer.style.background = "black";
      }
      if (
        page4.getBoundingClientRect().bottom < windowHeight &&
        page4.getBoundingClientRect().bottom > 0
      ) {
        portfolioContainer.style.background = "white";
      }
      if (
        page5.getBoundingClientRect().bottom < windowHeight &&
        page5.getBoundingClientRect().bottom > 0
      ) {
        portfolioContainer.style.background = "black";
      }
    });
  });

  return (
    <motion.div
      className="portfolio-page"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Link to="/home">
        <Cross />
      </Link>
      <div className="portfolio-container">
        <div className="portfolio-page1">
          <div className="p-p1-header">
            <h4>pixXmo</h4>
          </div>
          <div className="p-p1-content">
            <div className="p-p1-content-left">
              <h1>Lorem</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                exercitationem in doloribus quibusdam, atque accusamus!
              </h3>
              <h4>read more</h4>
            </div>
            <div className="p-p1-content-right">
              <div className="p-p1-content-right-img"></div>
            </div>
          </div>
        </div>
        <div className="portfolio-page2">
          <div className="p-p1-header">
            <h4>pixXmo</h4>
          </div>
          <div className="p-p1-content">
            <div className="p-p1-content-left">
              <h1 style={{ color: "white" }}>Lorem</h1>
              <h3 style={{ color: "white" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                exercitationem in doloribus quibusdam, atque accusamus!
              </h3>
              <h4 style={{ color: "white" }}>read more</h4>
            </div>
            <div className="p-p1-content-right">
              <div className="p-p1-content-right-img"></div>
            </div>
          </div>
        </div>
        <div className="portfolio-page3">
          <div className="p-p1-header">
            <h4>pixXmo</h4>
          </div>
          <div className="p-p1-content">
            <div className="p-p1-content-left">
              <h1>Lorem</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                exercitationem in doloribus quibusdam, atque accusamus!
              </h3>
              <h4>read more</h4>
            </div>
            <div className="p-p1-content-right">
              <div className="p-p1-content-right-img"></div>
            </div>
          </div>
        </div>
        <div className="portfolio-page4">
          <div className="p-p1-header">
            <h4>pixXmo</h4>
          </div>
          <div className="p-p1-content">
            <div className="p-p1-content-left">
              <h1 style={{ color: "white" }}>Lorem</h1>
              <h3 style={{ color: "white" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                exercitationem in doloribus quibusdam, atque accusamus!
              </h3>
              <h4 style={{ color: "white" }}>read more</h4>
            </div>
            <div className="p-p1-content-right">
              <div className="p-p1-content-right-img"></div>
            </div>
          </div>
        </div>
        <div className="portfolio-page5">
          <div className="p-p1-header">
            <h4>pixXmo</h4>
          </div>
          <div className="p-p1-content">
            <div className="p-p1-content-left">
              <h1>Lorem</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                exercitationem in doloribus quibusdam, atque accusamus!
              </h3>
              <h4>read more</h4>
            </div>
            <div className="p-p1-content-right">
              <div className="p-p1-content-right-img"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
