import React, { useEffect } from "react";
import Cross from "./Cross";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import FallAnimation from "./FallAnimation";
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";
import Scrollbar from "smooth-scrollbar";

import { AnimatePresence, motion } from "framer-motion";

import "./App.css";
export default function Service() {
  useEffect(() => {
    // ScrollReveal library
    ScrollReveal({ reset: true }).reveal(".text-third", { delay: 500 });
    ScrollReveal({ reset: true }).reveal(".text-third > div ul", {
      delay: 800,
    });
    ScrollReveal({ reset: true }).reveal(".text-fourth", { delay: 500 });

    //animejs library

    

    // Scrollbar.init(document.querySelector("#my-scrollbar"));

    // typed library
    var typed = new Typed(".text-one h3", {
      strings: ["Services by ^1000 ", " pixXmo"],
      typeSpeed: 200,
    });
  });
  return (
    <motion.div
      id="my-scrollbar"
      className="service-content"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Link to="/home">
        <Cross />
      </Link>{" "}
      <div className="services-main">
        <div className="text-one">
          <h3></h3>
        </div>
        <div className="text-two">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ab
            corrupti dolor dignissimos sequi praesentium ea, non harum
            voluptatum laudantium. Sit rerum impedit reprehenderit eveniet eius
            eos blanditiis consectetur architecto!
          </p>
        </div>
        <div className="text-third">
          <div className="third1">
            <h2>sdsffs</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              cumque!
            </p>
            <ul>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
          </div>
          <div className="third2">
            <h2>sdsffs</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              cumque!
            </p>
          </div>
          <div className="third3">
            <h2>sdsffs</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              cumque!
            </p>
          </div>
          <div className="third4">
            <h2>sdsffs</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              cumque!
            </p>
            <ul>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
          </div>
          <div className="third5">
            <h2>sdsffs</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              cumque!
            </p>
            <ul>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
          </div>
          <div className="third6">
            <h2>sdsffs</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              cumque!
            </p>
          </div>
        </div>
        <div className="text-fourth">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <button>Team</button>
        </div>
      </div>
      <FallAnimation />
      <Footer />
    </motion.div>
  );
}
