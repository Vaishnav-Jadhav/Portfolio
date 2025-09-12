import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/myself.png";

export function Hero() {
  // Animation variants for staggered text
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      className="bg-black text-white pt-[160px] lg:h-auto py-3 lg:py-[180px] pb-10"
      id="home"
    >
      <div className="container max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-0">
        {/* Left content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-[90px] font-semibold leading-tight"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.span
              className="text-red-600 selection:text-black block"
              variants={item}
            >
              HELLOWWW.
            </motion.span>
            <motion.span variants={item}>it's,</motion.span> <br />
            <motion.span variants={item}>Vaishnav Jadhav</motion.span><br />
            <motion.span className="text-white" variants={item}>
              Software Developer.
            </motion.span>
          </motion.h1>

          <motion.a
            href="/#contacts"
            variants={item}
            className="mt-8 inline-flex items-center px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 transition duration-300 text-lg font-medium shadow-lg hover:scale-105"
            whileTap={{ scale: 0.95 }}
          >
            Contact Me <span className="ml-2 text-xl">→</span>
          </motion.a>
        </motion.div>

        {/* Right image */}
        <div className="mt-10 md:mt-0 justify-center hidden"> <img src={logo} alt="Vaishnav Jadhav" className="w-full max-w-lg object-bottom-right"/> </div>
      </div>
    </section>
  );
}
