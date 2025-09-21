import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  const formRef = useRef();
  const [isEmailValid, setEmailValid] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Validate email on blur
  const handleEmailBlur = (e) => {
    const { value } = e.target;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    setEmailValid(emailRegex.test(value));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check email validity before sending
    if (!isEmailValid) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_y8tusbg",
        "template_w4dug38",
        {
          from_name: form.name,
          to_name: "Ayush",
          from_email: form.email,
          message: form.message,
        },
        "DUByFhMOx8YVtZrgi"
      )

      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error("Email sending failed:", error);
          setLoading(false);
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
              <h2 className="text-[50px] lg:text-[40px] leading-none mb-2 text-xl">
                Let's connect and make some digital magic happen! Reach out to
                me, and together, we'll turn ideas into reality.
              </h2>
            </div>
          </motion.div>

          <motion.form
            style={{ marginLeft: 5, marginTop: 40 }}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            ref={formRef}
            onSubmit={handleSubmit}
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
              required
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleEmailBlur}
              placeholder="What's your email address?"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              required
            />
            {!isEmailValid && (
              <p className="text-red-500">
                Please enter a valid email address.
              </p>
            )}

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              rows={6}
              required
            ></textarea>

            <button type="submit" className="btn btn-lg" disabled={loading}>
              {loading ? "Sending..." : "Send message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
