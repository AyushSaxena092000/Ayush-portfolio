import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "React JS",
    description:
      "Through my React developer projects, I weave together captivating user interfaces, unleash the power of reusable components, and create immersive digital experiences that leave a lasting impression.",
    link: "Know more",
  },
  {
    name: "React-Native",
    description:
      "As a React Native developer, I have the power to bridge the gap between platforms, crafting captivating mobile experiences that transcend device boundaries and captivate users with seamless functionality and stunning visuals.",
    link: "Know more",
  },
  {
    name: "UI/UX Designer",
    description:
      "UI/UX developer: Combining the best of both worlds, I bring together the precision of code and the finesse of design, crafting seamless experiences that make users go 'Wow!' while keeping developers from going 'How?",
    link: "Know more",
  },
  {
    name: "Node-js",
    description:
      "As a Node.js developer, I have the power of JavaScript on the server-side to build scalable, efficient, and high-performance applications. With Node.js, I can, manipulate data, interact with databases, and create robust APIs.",
    link: "Know more",
  },
];
const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-200"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Keep calm and let the developer handle it. They have a special
              skill of turning chaos into code.
            </h3>

            <h1
              className="h2 max-w-[455px] mb-16  text-gradient text-sm"
              style={{ fontSize: 20 }}
            >
              "Eat, Sleep, Code, Repeat"
            </h1>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="https://github.com/AyushSaxena092000?tab=repositories" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
