"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "./product.scss";

const Product = () => {
  return (
    <div className="data-main">
      <div className="data-container">
        <div className="data-left">
          <div className="data-content-holder">
            <motion.div
              initial={{ x: 500, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Image
                className="data-image"
                src="/images/srattha01.jpg"
                alt="Designer Curtain"
                width={467}
                height={700}
              />
            </motion.div>
          </div>
        </div>

        <div className="data-right">
          <h2 className="data-heading">Designer Curtains</h2>

          <p className="data-content">Home Interiors</p>

          <motion.div
            initial={{ x: -500, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              className="data-image"
              src="/images/srattha02.jpg"
              alt="Home Interior Curtains"
              width={467}
              height={700}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Product;