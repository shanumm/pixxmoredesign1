import React, { useEffect } from "react";
import Cross from "./Cross";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import anime from "animejs";
import Teamimage from "./teamimage.webp";

import { AnimatePresence, motion } from "framer-motion";

import "./App.css";

export default function Team() {
  useEffect(() => {
    anime({
      targets: ".team-about-upper",
      translateX: [-1000, 0],
      delay: 2000,
    });
    anime({
      targets: ".team-header",
      translateX: [700, 0],
      delay: 1000,
    });
  });
  return (
    <motion.div
      className="team-content"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Link to="/home">
        <Cross />
      </Link>
      <div className="team">
        <div className="team-header">
          <h1>Our Team</h1>
        </div>
        <div className="team-about-upper">
          <p>
            <i style={{ marginLeft: "1rem", fontWeight: "200" }}>
              Birds of the same feather flock together <br />
            </i>
            Throughout the years, pixXmo grew to become one whole family, all of
            different prowess but simultaneously contributing to deliver quality
            products promptly. Various teams come together to research, write,
            design, develop, implement, and market your product to make your
            dreams into reality. For we know that no one is smart as all of us!
          </p>
        </div>
        <div className="team-about-lower">
          <div className="team-about1">
            <div className="team-about1-image">
              <img src={Teamimage} />
            </div>
            <div className="team-about1-text">
              <h1>Name</h1>
              <h2>Designation</h2>
              <p>- Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="team-about2">
            <div className="team-about2-image">
              <img src={Teamimage} />
            </div>
            <div className="team-about2-text">
              <h1>Name</h1>
              <h2>Designation</h2>
              <p>- Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="team-about3">
            <div className="team-about3-image">
              <img src={Teamimage} />
            </div>
            <div className="team-about3-text">
              <h1>Name</h1>
              <h2>Designation</h2>
              <p>- Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="team-about4">
            <div className="team-about4-image">
              <img src={Teamimage} />
            </div>
            <div className="team-about4-text">
              <h1>Name</h1>
              <h2>Designation</h2>
              <p>- Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="team-about5">
            <div className="team-about5-image">
              <img src={Teamimage} />
            </div>
            <div className="team-about5-text">
              <h1>Name</h1>
              <h2>Designation</h2>
              <p>- Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="team-about6">
            <div className="team-about6-image">
              <img src={Teamimage} />
            </div>
            <div className="team-about6-text">
              <h1>Name</h1>
              <h2>Designation</h2>
              <p>- Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="team-about7">
            <div className="team-about7-image">
              <img src={Teamimage} />
            </div>
            <div className="team-about7-text">
              <h1>Name</h1>
              <h2>Designation</h2>
              <p>- Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="team-about8">
            <div className="team-about8-image">
              <img src={Teamimage} />
            </div>
            <div className="team-about8-text">
              <h1>Name</h1>
              <h2>Designation</h2>
              <p>- Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="team-about9">
            <div className="team-about9-image">
              <img src={Teamimage} />
            </div>
            <div className="team-about9-text">
              <h1>Name</h1>
              <h2>Designation</h2>
              <p>- Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="team-about10">
            <div className="team-about10-image">
              <img src={Teamimage} />
            </div>
            <div className="team-about10-text">
              <h1>Name</h1>
              <h2>Designation</h2>
              <p>- Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="team-about11">
            <div className="team-about11-image">
              <img src={Teamimage} />
            </div>
            <div className="team-about11-text">
              <h1>Name</h1>
              <h2>Designation</h2>
              <p>- Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="team-about12">
            <div className="team-about12-image">
              <img src={Teamimage} />
            </div>
            <div className="team-about12-text">
              <h1>Name</h1>
              <h2>Designation</h2>
              <p>- Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
