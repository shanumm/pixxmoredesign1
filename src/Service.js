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
    ScrollReveal({ reset: true }).reveal(".text-third", { delay: 300 });
    ScrollReveal({ reset: true }).reveal(".text-third > div ul", {
      delay: 600,
    });
    ScrollReveal({ reset: true }).reveal(".text-fourth", { delay: 300 });

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
            We at pixXmo come together to create, devise, design and animate
            visuals and content on a varied range of platforms including
            Website, Application: Android/IOS, Promotional Videos, Product
            Photography, Graphics: Logos, Poster, Banner, 3D Modelling,
            Advertisement, Flyers, Infographics, Invitations, Brochures, Resume,
            Menu, Presentations, and a lot more. This is the one stop solution
            for all your digital creative needs. While others work on long hauls
            of tiring, back-breaking design, development, and marketing tools,
            take your chances with us. Your product deserves it and with our
            digital expertise we got it all covered for you.
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
