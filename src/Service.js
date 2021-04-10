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
    // var typed = new Typed(".text-one h3", {
    //   strings: ["Services by ^1000 ", " pixXmo"],
    //   typeSpeed: 200,
    // });
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
          <h3>Brevity is the soul of wit!</h3>
        </div>
        <div className="text-two">
          <p>
            We at pixXmo come together to create, devise, design, and animate
            visuals and content on a varied range of platforms including
            Website, Application: Android/IOS, Promotional Videos, Product
            Photography, Graphics: Logos, Poster, Banner, 3D Modelling,
            Advertisement, Flyers, Infographics, Invitations, Brochures, Resume,
            Menu, Presentations, and a lot more. We guarantee you the most
            economic prices in the market along with the best quality assurance.
            This is the one-stop solution for all your digital creative needs.
          </p>
        </div>
        <div className="text-third">
          <div className="third1">
            <h2>Graphic Designing</h2>
            <p>
              Graphics is so much more than just brand recognition. We boast of
              an amazing team of designers who not only bring your ideas to life
              but also engage and build a rapport with your audience. Our
              tremendous focus is on creating outstanding designs, striking
              logos, engaging flyers, and attractive flexes amongst other
              graphical content
            </p>
            <ul>
              <li>
                <i>Perceptible thoughts</i>
              </li>
            </ul>
          </div>
          <div className="third2">
            <h2>Video Editing</h2>
            <p>
              A picture captures a thousand emotions, a video has a thousand
              images. Video Editing is a very sought-after service in today’s
              digital world. With everything transitioning into a digital phase,
              post-production plays a very important role in the carving process
              of the final product. We not only offer Video Editing services but
              also provide Event Coverage.
            </p>
            <ul>
              <li>
                <i>Telling Tales in a tempo!</i>
              </li>
            </ul>
          </div>
          <div className="third3">
            <h2>Web Designing</h2>
            <p>
              Defying the conventional method of purely coding for a website, we
              at pixXmo, go through different steps with the client while
              developing it. From basic research about conveying your thoughts
              to our analysis of conveying your thoughts through information, we
              follow an extensive route while creating a website for you.
            </p>
            <ul>
              <li>
                <i>Your website is the first impression that lasts!</i>
              </li>
            </ul>
          </div>
          <div className="third4">
            <h2>UI/UX</h2>
            <p>
              UI/UX has emerged as the frontrunner of the entire graphics
              department. From the user’s interface to the user’s experience,
              this team handles it all. Apart from building a rapport with your
              customers, a UI/UX developer can lure attractive and keeping
              customers. Our team of UI/UX designers at pixXmo works closely
              with you in order to provide a replica of the product/service in
              your head.
            </p>
            <ul>
              <li><i>A beautiful solution to experience technology!!</i></li>
            </ul>
          </div>
          <div className="third5">
            <h2>Application Development (Android/iOS)</h2>
            <p>
              What is quicker, easier, and more accessible is probably an
              application. How many times do we hear someone saying that there
              is an app for this? Applications that are usually referred to as
              apps are taking the entire industry and how we see and access
              things by a storm. We design, deploy and develop these apps at
              minimalist prices with a focus on conveying what is yours.
            </p>

            <ul>
              <li><i>Agility over informatory!</i></li>
            </ul>
          </div>
          <div className="third6">
            <h2>Content Writing</h2>
            <p>
              What can hardly be expressed, can be expressed in words and can
              impact the reader’s mind. We at pixXmo believe that more than the
              content, it is the quality of the content that matters. The
              Content Writers specialize in a variety of quality services
              including but not limited to Web Content, SEO Content, Blog
              Marketing, Product Review, Company Profiles, Educational Content,
              and much more
            </p>
            <ul>
              <li>
                <i>Content precedes design!</i>
              </li>
            </ul>
          </div>
          <div className="third6">
            <h2>Digital Marketing</h2>
            <p>
              If you need to target a specific set of customers and keep them
              engaged, digitally, the Digital Marketers in pixXmo are all the
              help that you need. Marketing is an extensive, exhaustive process
              involving a great number of resources. We at pixXmo can promise
              you the most efficient techniques in this field to stay at the top
              of your game, while you communicate to us about your goals and
              dreams and we work as a team to achieve them.
            </p>
            <ul>
              <li>
                <i>The tricks & treats of staying relevant!</i>
              </li>
            </ul>
          </div>
          <div className="third6">
            <h2>Product Photography/Event Coverage</h2>
            <p>
              Pictures have become an inherent part of both online and offline
              advertising. A good picture speaks volumes about your product.
              From vibrant catalogs, brochures, magazine ads and billboards to
              photos for your social media handles, website, and applications,
              we at pixXmo provide professional quality services in capturing
              your product and/or covering your event.
            </p>
            <ul>
              <li>
                <i>Capturing minute details!</i>
              </li>
            </ul>
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
