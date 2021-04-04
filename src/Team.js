import React from "react";
import Cross from "./Cross";
import { Link } from "react-router-dom";
import Footer from "./Footer";

import { AnimatePresence, motion } from "framer-motion";

import "./App.css";

export default function Team() {
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
        <div className="team-about">
          <div className="team-about1-image">
            <img src="https://cdn.pixabay.com/photo/2020/03/18/19/17/easter-4945288_960_720.jpg" />
            <div className="team-about1">
              <h1>Name of the person</h1>
              <i>Designation</i>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="team-about2-image">
            <img src="https://cdn.pixabay.com/photo/2020/03/18/19/17/easter-4945288_960_720.jpg" />
            <div className="team-about2">
              <h1>Name of the person</h1>
              <i>Designation</i>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="team-about3-image">
            <img src="https://cdn.pixabay.com/photo/2020/03/18/19/17/easter-4945288_960_720.jpg" />
            <div className="team-about3">
              <h1>Name of the person</h1>
              <i>Designation</i>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="team-about4-image">
            <img src="https://cdn.pixabay.com/photo/2020/03/18/19/17/easter-4945288_960_720.jpg" />
            <div className="team-about4">
              <h1>Name of the person</h1>
              <i>Designation</i>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="team-about5-image">
            <img src="https://cdn.pixabay.com/photo/2020/03/18/19/17/easter-4945288_960_720.jpg" />
            <div className="team-about5">
              <h1>Name of the person</h1>
              <i>Designation</i>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="team-about6-image">
            <img src="https://cdn.pixabay.com/photo/2020/03/18/19/17/easter-4945288_960_720.jpg" />
            <div className="team-about6">
              <h1>Name of the person</h1>
              <i>Designation</i>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
      < Footer />
    </motion.div>
  );
}
