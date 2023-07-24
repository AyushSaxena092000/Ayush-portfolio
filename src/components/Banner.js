import React from "react";
import Image from '../assets/ayush.jpeg';
import { FaGithub, FaYoutube, FaDribbble, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  const handleWhatsAppLink = () => {
    // Generate the WhatsApp URL
    const whatsappURL = `https://wa.me/+918871606705`;

    // Navigate to the WhatsApp URL
    window.open(whatsappURL);
  };

  return (
    <section className="py-8 md:py-16 lg:py-24 min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-y-4 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[36px] lg:text-[55px] font-bold leading-[1.1] lg:leading-[0.8]"
              style={{marginTop:20}}
            >
              AYUSH <span>SAXENA</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-4 lg:mb-6 text-[18px] lg:text-[36px] font-secondary font-semibold uppercase leading-[1] lg:leading-[1.2]"
            >
              <span className="text-white mr-2 lg:mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "Youtuber",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 max-w-lg mx-auto lg:mx-0 text-sm lg:text-base"
            >
              Hi, I'm Ayush, a passionate software developer with a strong
              knack for turning ideas into functional and efficient software
              solutions. With 2 years of experience in the field, I
              possess a deep understanding of the software development lifecycle
              and a solid foundation in various programming languages and
              frameworks. My journey as a software developer has allowed me to
              work on diverse projects, ranging from web and mobile applications
              to database management systems. I thrive on the challenge of
              transforming complex requirements into clean, maintainable code
              that delivers exceptional user experiences.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-4 items-center mb-6 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg" onClick={handleWhatsAppLink}>Contact me</button>
              <a href="#" className="text-gradient btn-link text-sm lg:text-base">
                For More Enquiry Please Contact Me On This.
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("down", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20] gap-x-4 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://www.youtube.com/@TechAyushSaxena">
                <FaYoutube style={{width:30,height:30}} />
              </a>
              <a href="https://github.com/AyushSaxena092000">
                <FaGithub style={{width:30,height:30}}/>
              </a>
              <a href="https://www.linkedin.com/in/ayush-saxena-8730a521a/">
                <FaLinkedinIn style={{width:30,height:30}}/>
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 max-w-[320px] mx-auto lg:mx-0"
          >
            <img
              style={{ borderRadius: 300, width: '90%', marginTop: 20, margin:8 }}
              src={Image}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
