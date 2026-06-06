"use client";

import React from "react";
import { motion } from "framer-motion";
import "./designs.scss";

const Collection = () => {
  return (
    <div className="about-main ">
      <div className="collection-sec ml-20 mr-20">
        <motion.div
          className="right_sec"
          initial={{ x: 800, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className=" text-2xl name">Designs & Collection</h1>

          <p className="sub-content">
            Beautiful custom-made curtains designed for privacy, light control,
            and interior elegance.
          </p>

          <div className="services-content">
            <p className="content">Blackout Curtains</p>
            <p className="content">Designer Curtains</p>
            <p className="content">Sheer Curtains</p>
            <p className="content">Eyelet Curtains</p>
            <p className="content">Pleated Curtains</p>
            <p className="content">Printed Curtains</p>
          </div>
        </motion.div>

        <motion.div
          className="right_sec"
          initial={{ x: -800, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="name">Featured Collection</h1>

          <p className="sub-content">
            Curtains Designed for Every Space
          </p>

          <div>
            <p className="sub-content">Living Room Curtains</p>
            <p className="content">
              Create a welcoming atmosphere with stylish and elegant designs.
            </p>
          </div>

          <div>
            <p className="sub-content">Bedroom Curtains</p>
            <p className="content">
              Enjoy privacy, comfort, and superior light control.
            </p>
          </div>

          <div>
            <p className="sub-content">Office Curtains</p>
            <p className="content">
              Professional window solutions that enhance productivity and
              aesthetics.
            </p>
          </div>

          <div>
            <p className="sub-content">Hotel & Commercial Curtains</p>
            <p className="content">
              Durable, elegant, and customized solutions for hospitality
              spaces.
            </p>
          </div>

          <div>
            <p className="sub-content">Affordable Pricing</p>
            <p className="content">
              Premium quality products at competitive prices.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Collection;