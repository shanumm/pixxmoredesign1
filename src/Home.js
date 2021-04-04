import React, { useEffect, useState } from "react";
import "./App.css";
import Pixxmo from "./TBG.png";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav";

export default function Home() {
  useEffect(() => {
    let root = document.documentElement;
    var container = document.querySelector(".container");
    var page1 = document.querySelector(".page1");
    var image = document.querySelectorAll(".image .img");
    var heading = document.querySelector(".heading div");
    var landing_text = document.querySelectorAll(".text h3");

    var text = document.querySelectorAll(".text");
    var logo = document.querySelector(".logo div");
    var pagePositionNav = document.querySelectorAll(".page-position-nav");
    var pagePositionNavDiv = document.querySelectorAll(
      ".page-position-nav > div"
    );
    var pointer = document.querySelector(".custom-pointer");

    if (container) {
      window.addEventListener("mousemove", (e) => {
        var imgx = (window.innerWidth / 2 - e.clientX) / 30;
        var imgy = (window.innerHeight / 2 - e.clientY) / 30;
        var x = (window.innerWidth / 2 - e.clientX) / 15;
        var y = (window.innerHeight / 2 - e.clientY) / 15;

        image.forEach((element) => {
          element.style.top = -imgy + "px";
          element.style.left = -imgx + "px";
        });
        heading.style.top = -y + "px";
        heading.style.left = -x + "px";

        landing_text.forEach((element) => {
          element.style.top = -y + "px";
          element.style.left = -x + "px";
        });
      });
    }

    // fixing backgroundAttachment
    if (container) {
      container.addEventListener("scroll", () => {
        image.forEach((element) => {
          element.style.backgroundAttachment = "fixed";
        });
        setTimeout(() => {
          image.forEach((element) => {
            element.style.backgroundAttachment = "scroll";
          });
        }, 500);
      });
    }
    // ---------custom pointer-------
    if (window && pointer) {
      window.addEventListener("mousemove", (e) => {
        var xAxis = e.clientX;
        var yAxis = e.clientY;

        pointer.style.top = yAxis + "px";
        pointer.style.left = xAxis + "px";
      });
    }
    // logo hover animation
    if (logo) {
      logo.addEventListener("mouseover", () => {
        pointer.classList.add("small-pointer");
        pointer.innerHTML = "";
      });
    }
    if (logo) {
      logo.addEventListener("mouseleave", () => {
        pointer.classList.remove("small-pointer");
        pointer.innerHTML = `click & <br />hold`;
      });
    }
    pagePositionNav.forEach((element) => {
      element.addEventListener("mouseover", () => {
        pointer.classList.add("small-pointer");
        pointer.innerHTML = "";
      });
      element.addEventListener("mouseleave", () => {
        pointer.classList.remove("small-pointer");
        pointer.innerHTML = `click & <br />hold`;
      });
    });

    const navlist = [
      "clients",
      "service",
      "portfolio",
      "team",
      "contact",
      "career",
    ];

    for (let i = 0; i < pagePositionNavDiv.length; i++) {
      pagePositionNavDiv[i].addEventListener("mouseover", () => {
        console.log(navlist[i]);
      });
    }

    window.addEventListener("mousedown", () => {
      pointer.style.transform = "translate(-50%, -50%) scale(1.5)";
      container.style.width = "100%";
      container.style.height = "100vh";
    });
    window.addEventListener("mouseup", () => {
      pointer.style.transform = " translate(-50%, -50%) scale(1)";
      container.style.width = "95%";
      container.style.height = "90vh";
    });
  });
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <div className="body">
        <div className="custom-pointer">
          click & <br />
          hold
        </div>
        <div className="container">
          <div className="page1">
            <div className="image">
              <div className="img"></div>
            </div>
            <div className="page1-content">
              <header className="logo">
                <div className="Pixxmo-image">
                  <img src={Pixxmo} />
                </div>
              </header>
              <div className="heading">
                <div>
                  <h3>Lorem ipsum dolor sit amet.</h3>
                  <p>pixXmo</p>
                </div>
              </div>
              <Nav />
            </div>
          </div>
          <div className="page2">
            <div className="image">
              <div className="img"></div>
            </div>
            <div className="text">
              {" "}
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <Nav />
          </div>
          <div className="page3">
            <div className="image">
              <div className="img"></div>
            </div>
            <div className="text">
              {" "}
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <Nav />
          </div>
          <div className="page4">
            <div className="image">
              <div className="img"></div>
            </div>
            <div className="text">
              {" "}
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <Nav />
          </div>
          <div className="page5">
            <div className="image">
              <div className="img"></div>
            </div>
            <div className="text">
              {" "}
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <Nav />
          </div>
          <div className="page4">
            <div className="image">
              <div className="img"></div>
            </div>
            <div className="text">
              {" "}
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <Nav />
          </div>
          <div className="page4">
            <div className="image">
              <div className="img"></div>
            </div>
            <div className="text">
              {" "}
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <Nav />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
