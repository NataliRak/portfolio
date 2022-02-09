import Contact from "components/Contact";
import Footer from "components/Footer";
import Home from "components/Home";

import Portfolio from "components/Portfolio";

import ScrollToTop from "components/ScrollToTop";
import Services from "components/Services";
import Skills from "components/Skills";

import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <ScrollToTop />
      <Home />
      <Services />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </motion.div>
  );
}
