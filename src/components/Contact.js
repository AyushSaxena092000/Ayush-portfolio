import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setEmailValid] = useState(true);

  const validateEmail = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    setEmailValid(emailRegex.test(email));
  };
  const handleClick = () => {
    validateEmail();

    window.alert(
      "We apologize for the inconvenience. Our website is currently undergoing maintenance. Please check back later!"
    );
  };
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide lg:text-[30px]">
                Get in touch:-
              </h4>
              <h2 className="text-[50px] lg:text-[40px] leading-none mb-1">
                Let's connect and make some digital magic happen! Reach out to
                me, and together, we'll turn ideas into reality.
              </h2>
            </div>
          </motion.div>
          <motion.form
            style={{ marginLeft: 30 }}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your email"
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
            />
            {!isEmailValid && (
              <p style={{ color: "red" }}>
                Please enter a valid email address.
              </p>
            )}
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
            ></textarea>
            <Link to="contact">
              <button className="btn btn-lg" onClick={handleClick}>
                Send message
              </button>
            </Link>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
