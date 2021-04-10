import React, { useEffect } from "react";
import Cross from "./Cross";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import simpleParallax from "simple-parallax-js";

import { AnimatePresence, motion } from "framer-motion";

import "./App.css";

export default function Career() {
  useEffect(() => {
    var image = document.querySelector(".career-landing-img img");
    new simpleParallax(image);
  });

  return (
    <motion.div
      className="career-page"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Link to="/home">
        <Cross />
      </Link>
      <div>
        <div className="career-landing">
          <div className="noise-background"></div>
          <div className="career-logo">pixXmo</div>
          <div className="career-content">
            <div>
              <div className="career-content-heading">
                pixXmo <span>Ship</span>
              </div>
              <div className="radial-line"></div>
            </div>
            <div className="career-content-subheading">
              <div>Work to become, not to acquire!</div>
            </div>
          </div>
          <div className="career-scroll">
            <div>scroll</div>
          </div>
        </div>
        <div className="career-page2">
          <div className="career-page2-section1">
            <div>
              <div>
                lorem <br /> ipsum
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt iusto dicta id optio minus praesentium recusandae
                reprehenderit ipsum eos eius?
              </div>
            </div>
          </div>
          <div>
            <div className="career-page2-section2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia,
              quae.
            </div>
            <div className="career-page2-section3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
            </div>
          </div>
          <div className="career-scroll1">
            <div>scroll</div>
          </div>
        </div>
        <div className="career-page3">
          <div>
            <div className="career-page3-section1">
              <h1>
                Lorem <br /> ipsum
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
                tenetur eius? Sapiente ipsum ad corrupti sed fuga blanditiis, ex
                distinctio!
              </p>
            </div>
          </div>
          <div>
            <div>
              <h1>Lorem ipsum</h1>
              <p>Lorem, ipsum dolor.</p>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
          <div>
            {" "}
            hello <br />
            world
          </div>
          <div>
            hello <br />
            world
          </div>
          <div>
            hello <br />
            world
          </div>
        </div>
      </div>
    </motion.div>
  );
}
