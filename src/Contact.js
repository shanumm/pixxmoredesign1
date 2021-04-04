import React, { useEffect } from "react";
import Cross from "./Cross";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import anime from "animejs";
import { AnimatePresence, motion } from "framer-motion";

import "./App.css";

export default function Contact() {
  useEffect(() => {
    anime({
      targets: ".contact-text1",
      translateX: [700,0],
      delay:1000
    });
  });

  return (
    <motion.div
      className="contact-content"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Link to="/home">
        <Cross />
      </Link>
      <div className="contact">
        <div className="contact-text1">
          <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
        </div>
        <div className="contact-text2">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</h2>
        </div>
        <div className="contact-text3">
          <div className="contact-text3-info">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <h4>Lorem, ipsum dolor.</h4>
            <h5>lorem</h5>
          </div>
          <div className="contact-text3-phone">
            <h5>Lorem, ipsum.</h5>
            <h6>123456789</h6>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
