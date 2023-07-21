import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Contact = () => {
  const formRef = useRef();
  const [email, setEmail] = useState("");
  const [isEmailValid, setEmailValid] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    setEmailValid(emailRegex.test(email));

    setForm({
      ...form,
      [name]: value,
    });
  };


  const handleClick = (e) => {
    handleChange(e);
    e.preventDefault();
    console.log('form', form)

    emailjs
    .send(
      'service_z068fa9',
      'template_w4dug38',
      {
        from_name: form.name,
        to_name: "ayush",
        from_email: form.email,
        to_email: "ayushsaxena452@gmail.com",
        message: form.message,
      },
      'DUByFhMOx8YVtZrgi'
    )
    .then(
      () => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);

        alert("Ahh, something went wrong. Please try again.");
      }
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
              <h2 className="text-[50px] lg:text-[40px] leading-none mb-2 text-xl ">
                Let's connect and make some digital magic happen! Reach out to
                me, and together, we'll turn ideas into reality.
              </h2>
            </div>
          </motion.div>
          <motion.form
            style={{ marginLeft: 5, marginTop:40 }}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            ref={formRef}
            onSubmit={handleClick} 
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
           type="text"
           name="name"
           value={form.name}
           onChange={handleChange}
           placeholder="What's your good name?"
           className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            />
            <input
             type="email"
             name="email"
             value={form.email}
             onChange={handleChange}
             placeholder="What's your web address?"
             className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            
            />
            {!isEmailValid && (
              <p style={{ color: "red" }}>
                Please enter a valid email address.
              </p>
            )}
            <textarea
              //  rows={7}
               name="message"
               value={form.message}
               onChange={handleChange}
               placeholder="What you want to say?"
               className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
            ></textarea>
            <Link to="contact">
              <button className="btn btn-lg" onClick={handleClick} {...loading ? "Sending..." : "Send"}>
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