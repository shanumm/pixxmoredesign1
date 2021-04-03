import React from "react";
import Cross from "./Cross";
import { Link } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

import "./App.css";
export default function Service() {
  return (
    <motion.div
      className="service-content"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Link to="/home">
        <Cross />
      </Link>{" "}
      <h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima eum
        repellat modi, nam at necessitatibus enim ratione adipisci quaerat
        dignissimos assumenda fuga commodi corporis autem culpa dolorum ducimus,
        tenetur aliquam. Ipsum exercitationem corporis natus obcaecati ratione
        incidunt sint, sequi fuga voluptatem libero in doloremque, sapiente, hic
        ab quo laborum magnam vel. Harum quibusdam et ipsa nobis. Velit
        similique molestiae eum, quas, delectus reiciendis magni pariatur
        ducimus perspiciatis nemo impedit commodi nisi cumque porro mollitia!
        Blanditiis earum facere ut repellendus, aliquid quod iusto labore culpa.
        Reprehenderit modi beatae culpa consequuntur voluptatibus eos blanditiis
        vitae rerum nobis nulla! Inventore dolorem aliquam aspernatur?
      </h1>
    </motion.div>
  );
}
