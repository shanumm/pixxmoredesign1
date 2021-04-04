import React, { useEffect } from "react";
import Cross from "./Cross";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import ScrollReveal from "scrollreveal";

import { AnimatePresence, motion } from "framer-motion";
import "./App.css";

export default function Client() {
  useEffect(() => {
    ScrollReveal().reveal(".client-image", { delay: 500 });
    ScrollReveal().reveal(".client-info-content", {
      delay: 800,
    });
  });

  return (
    <motion.div
      className="client-content"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Link to="/home">
        <Cross />
      </Link>
      <div className="client-landing">
        <div className="client-landing-content">
          <h1>Our Clients</h1>
          <h3>
            Your satisfaction is our feedback <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eos
            labore ex cumque sunt beatae?
          </h3>
        </div>
        <div className="client-landing-clientsInfo">
          <div>
            <div className="client-image">
              <div className="client-image-img"></div>
            </div>
            <div className="client-info-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              consequuntur nulla eveniet, perferendis dolores necessitatibus.
            </div>
          </div>
          <div>
            <div className="client-image">
              <div className="client-image-img"></div>
            </div>
            <div className="client-info-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              consequuntur nulla eveniet, perferendis dolores necessitatibus.
            </div>
          </div>
          <div>
            <div className="client-image">
              <div className="client-image-img"></div>
            </div>
            <div className="client-info-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              consequuntur nulla eveniet, perferendis dolores necessitatibus.
            </div>
          </div>
          <div>
            <div className="client-image">
              <div className="client-image-img"></div>
            </div>
            <div className="client-info-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              consequuntur nulla eveniet, perferendis dolores necessitatibus.
            </div>
          </div>
          <div>
            <div className="client-image">
              <div className="client-image-img"></div>
            </div>
            <div className="client-info-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              consequuntur nulla eveniet, perferendis dolores necessitatibus.
            </div>
          </div>
          <div>
            <div className="client-image">
              <div className="client-image-img"></div>
            </div>
            <div className="client-info-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              consequuntur nulla eveniet, perferendis dolores necessitatibus.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
