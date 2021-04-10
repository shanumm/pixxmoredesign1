import React, { useEffect, useState } from "react";
import "./App.css";
import Pixxmo from "./TBG.png";
import { Link, Redirect, useHistory } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav";
import Blob from "./Blob";
export default function Home() {
  const History = useHistory();
  useEffect(() => {
    let root = document.documentElement;
    var container = document.querySelector(".container");
    var page1 = document.querySelector(".page1");
    var page2 = document.querySelector(".page2");
    var page3 = document.querySelector(".page3");
    var page4 = document.querySelector(".page4");
    var page5 = document.querySelector(".page5");
    var page6 = document.querySelector(".page6");
    var page7 = document.querySelector(".page7");
    var image = document.querySelectorAll(".image .img");
    var heading = document.querySelector(".heading div");
    var landing_text = document.querySelectorAll(".text h3");
    var text = document.querySelectorAll(".text");
    var logo = document.querySelector(".logo div");
    var pagePositionNav = document.querySelectorAll(".page-position-nav");
    var pagePositionNavDiv = document.querySelectorAll(
      ".page-position-nav > div "
    );
    var pointer = document.querySelector(".custom-pointer");
    var start, end;
    container.addEventListener("scroll", () => {
      if (
        page1.getBoundingClientRect().bottom < window.innerHeight / 2 &&
        page1.getBoundingClientRect().bottom > 0
      ) {
        pagePositionNavDiv[1].style.border = "5px solid grey";
        pagePositionNavDiv[1].style.borderRadius = "50%";
      } else {
        pagePositionNavDiv[1].style.border = "";
        pagePositionNavDiv[1].style.borderRadius = "";
      }
      if (
        page2.getBoundingClientRect().bottom < window.innerHeight / 2 &&
        page2.getBoundingClientRect().bottom > 0
      ) {
        pagePositionNavDiv[2].style.border = "5px solid grey";
        pagePositionNavDiv[2].style.borderRadius = "50%";
      } else {
        pagePositionNavDiv[2].style.border = "";
        pagePositionNavDiv[2].style.borderRadius = "";
      }
      if (
        page3.getBoundingClientRect().bottom < window.innerHeight / 2 &&
        page3.getBoundingClientRect().bottom > 0
      ) {
        pagePositionNavDiv[3].style.border = "5px solid grey";
        pagePositionNavDiv[3].style.borderRadius = "50%";
      } else {
        pagePositionNavDiv[3].style.border = "";
        pagePositionNavDiv[3].style.borderRadius = "";
      }
      if (
        page4.getBoundingClientRect().bottom < window.innerHeight / 2 &&
        page4.getBoundingClientRect().bottom > 0
      ) {
        pagePositionNavDiv[4].style.border = "5px solid grey";
        pagePositionNavDiv[4].style.borderRadius = "50%";
      } else {
        pagePositionNavDiv[4].style.border = "";
        pagePositionNavDiv[4].style.borderRadius = "";
      }
      if (
        page5.getBoundingClientRect().bottom < window.innerHeight / 2 &&
        page5.getBoundingClientRect().bottom > 0
      ) {
        pagePositionNavDiv[5].style.border = "5px solid grey";
        pagePositionNavDiv[5].style.borderRadius = "50%";
      } else {
        pagePositionNavDiv[5].style.border = "";
        pagePositionNavDiv[5].style.borderRadius = "";
      }
      // if (
      //   page6.getBoundingClientRect().bottom < window.innerHeight / 2 &&
      //   page6.getBoundingClientRect().bottom > 0
      // ) {
      //   pagePositionNavDiv[6].style.border = "5px solid grey";
      //   pagePositionNavDiv[6].style.borderRadius = "50%";
      // } else {
      //   pagePositionNavDiv[6].style.border = "";
      //   pagePositionNavDiv[6].style.borderRadius = "";
      // }
    });

    page2.addEventListener("mousedown", () => {
      start = new Date();
    });
    var timer;
    page2.addEventListener("mouseup", () => {
      end = new Date();
      timer = end - start;
      if (timer > 300) {
        History.push("/service");
      }
    });
    page3.addEventListener("mousedown", () => {
      start = new Date();
    });

    page3.addEventListener("mouseup", () => {
      end = new Date();
      timer = end - start;
      if (timer > 300) {
        History.push("/client");
      }
    });
    page4.addEventListener("mousedown", () => {
      start = new Date();
    });

    page4.addEventListener("mouseup", () => {
      end = new Date();
      timer = end - start;
      if (timer > 300) {
        History.push("/portfolio");
      }
    });
    page5.addEventListener("mousedown", () => {
      start = new Date();
    });

    page5.addEventListener("mouseup", () => {
      end = new Date();
      timer = end - start;
      if (timer > 300) {
        History.push("/team");
      }
    });
    page6.addEventListener("mousedown", () => {
      start = new Date();
    });

    page6.addEventListener("mouseup", () => {
      end = new Date();
      timer = end - start;
      if (timer > 300) {
        History.push("/contact");
      }
    });
    page7.addEventListener("mousedown", () => {
      start = new Date();
    });

    page7.addEventListener("mouseup", () => {
      end = new Date();
      timer = end - start;
      if (timer > 300) {
        History.push("/career");
      }
    });

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
              <Blob name="1" />
              <header className="logo">
                <div className="Pixxmo-image">
                  <img src={Pixxmo} />
                </div>
              </header>
              <div className="heading">
                <div>
                  <h3>Design is thinking, we call it <br/> pixXmo </h3>
                 
                </div>
              </div>
              <Nav />
            </div>
          </div>
          <div className="page2">
            <div className="image">
              <div className="img"></div>
            </div>
            <Blob name="2" />
            <div className="text">
              <h3>Be great in act, as you have been in thought</h3>
            </div>
            <Nav />
          </div>
          <div className="page3">
            <div className="image">
              <div className="img"></div>
            </div>
            <Blob name="3" />
            <div className="text">
              {" "}
              <h3>You must take your chance</h3>
            </div>
            <Nav />
          </div>
          <div className="page4">
            <div className="image">
              <div className="img"></div>
            </div>
            <Blob name="4" />
            <div className="text">
              {" "}
              <h3>What is past is prologue</h3>
            </div>
            <Nav />
          </div>
          <div className="page5">
            <div className="image">
              <div className="img"></div>
            </div>
            <Blob name="5" />
            <div className="text">
              {" "}
              <h3>How many goodly creatures are there here!</h3>
            </div>
            <Nav />
          </div>
          <div className="page4 page6">
            <div className="image">
              <div className="img"></div>
            </div>
            <Blob name="6" />
            <div className="text">
              {" "}
              <h3>Make haste, the better foot before</h3>
            </div>
            <Nav />
          </div>
          <div className="page4 page7">
            <div className="image">
              <div className="img"></div>
            </div>
            <Blob name="7" />
            <div className="text">
              {" "}
              <h3>All the world’s a stage</h3>
            </div>
            <Nav />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
