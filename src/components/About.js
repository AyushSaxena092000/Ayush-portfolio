import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const handleWhatsAppLink = () => {
    // Generate the WhatsApp URL
    const whatsappURL = `https://wa.me/+918871606705`;

    // Navigate to the WhatsApp URL
    window.open(whatsappURL);
  };

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="py-8 md:py-16 lg:py-24" id="about" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-y-4 lg:flex-row lg:items-center lg:gap-x-10 lg:gap-y-0">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[320px] md:h-[480px] lg:h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I am a learner, Who is learning The chapter of life.
            </h3>
            <p className="mb-6 text-base md:text-lg">
              Hello, I'm Ayush Saxena, a Full-Stack Developer with 4 years of
              experience building scalable web and mobile applications using
              React.js, React Native, Next.js, and Node.js. I specialize in
              creating seamless user experiences, integrating backend services,
              and delivering end-to-end solutions with clean, maintainable code.
              My expertise spans frontend and backend development, API
              integrations, and performance optimization. I thrive on solving
              challenging problems, adapting to new technologies, and
              continuously improving applications to exceed expectations. Let's
              collaborate to turn ideas into impactful digital products.
            </p>
            <div className="flex gap-x-6 md:gap-x-10 mb-6 md:mb-12">
              <div>
                <div className="text-[24px] md:text-[30px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={4} duration={8} /> : null}
                </div>
                <div className="font-primary text-xs md:text-sm tracking-[1.5px]">
                  Years of <br />
                  Experience.
                </div>
              </div>
              <div>
                <div className="text-[24px] md:text-[30px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={50} duration={3} /> : null}
                  +
                </div>
                <div className="font-primary text-xs md:text-sm tracking-[1.5px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[24px] md:text-[30px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={20} duration={4} /> : null}+
                </div>
                <div className="font-primary text-xs md:text-sm tracking-[1.5px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-4 md:gap-x-8 items-center">
              <button className="btn btn-lg" onClick={handleWhatsAppLink}>
                Contact me
              </button>
              <a href="#" className="text-gradient btn-link text-xs md:text-sm">
                For More Enquiry Please Contact Me On This.
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
