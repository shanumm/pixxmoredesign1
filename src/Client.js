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
          <i style={{marginLeft:"2rem",fontWeight:"200"}}>
            Coming together is beginning, keeping together is progress, working
            together is a success!
          </i>
          <h3>
            We at pixXmo ascertain that your demands are always met. We ensure
            that we always listen to your views, wishes, wants, and needs all
            the while creating an end product which not only aligns to your
            perspective but also allures to your vision.
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
