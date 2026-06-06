"use client";

import React from "react";
import { motion } from "framer-motion";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="data-main">
      <div className="data-sec">
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="data-left">
            <div className="fav-content-holder">
              <h1 className="fav-heading text-white">
                Call To Action
              </h1>

              <p className="data-content text-white">
                Ready to Upgrade Your Interiors?
              </p>

              <p className="data-content text-white">
                Get premium curtain and window furnishing solutions designed
                specially for your space.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="data-right">
            <div className="contact-us text-black bg-gray-400">
              Contact Us
            </div>

            <div className="contact-us bg-gray-600 text-black">
              Download Capabilities
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;