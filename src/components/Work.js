import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import ImgAy from '../assets/reactnativedevelopment.webp'
import ImgAy2 from '../assets/reactdevelopment.webp';
import ImgAy3 from '../assets/uiuxdevelopment.webp';
import { Link } from "react-scroll";

const Work = () => {
  const handleGitURL = () => {
    // Generate the Git URL
    const gitURL = `https://github.com/AyushSaxena092000?tab=repositories`;

    // Navigate to the Git URL
    window.open(gitURL);
  };
  return (
    <section className="py-8 md:py-16 lg:py-24" id="work">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-4 mb-8 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-8 lg:mb-16">
                Our latest projects in ReactJS and React Native are like engines
                of progress, driving forward the evolution of web and mobile
                applications, raising the bar for user experience and setting
                new standards of excellence.
              </p>
              <Link to="work">
                <button className="btn btn-sm" onClick={handleGitURL}>
                  View all projects
                </button>
              </Link>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={ImgAy2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient text-xs md:text-sm lg:text-base">React JS</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text-3xl text-white">Dynamic Web Pages</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-4"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={ImgAy}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient text-xs md:text-sm lg:text-base">React-Native</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text-3xl text-white">Mobile Applications</span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={ImgAy3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient text-xs md:text-sm lg:text-base">UI/UX Design</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text-3xl text-white">WebMob Designs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
