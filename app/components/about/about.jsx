"use client";

import React from "react";
import { motion } from "framer-motion";
import "./about.scss";

const About = () => {
  return (
    <div className="about-main">
      <div className="sec_con m-20">
        <motion.div
          className="right_sec"
          initial={{ x: 800, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="name">About Us</h1>

          <p className="sub-content">
            Your Trusted Curtain & Window Furnishing Experts
          </p>

          <p className="content">
            At Elite Decor, we specialise in premium-quality curtains,
            and customised curtains for homes, offices, hotels, and commercial spaces. Our mission is to
            combine elegance, comfort, and functionality to create interiors
            that truly reflect your style.
          </p>

          <p className="content">
            With a focus on craftsmanship, modern designs, and customer
            satisfaction, we provide tailored solutions that perfectly match
            your space, preferences, and budget.
          </p>

          <p className="content">
            If you want luxurious curtains for your living room,
            blackout solutions for your bedroom, Elite Decor delivers products that enhance every
            environment.
          </p>

          <p className="content">
            Inspired by modern curtain and furnishing industry standards.
          </p>
        </motion.div>

        <motion.div
          className="right_sec"
          initial={{ x: -800, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="name">Why Choose Us</h1>

          <p className="sub-content">
            The Perfect Blend of Style and Quality
          </p>

          <div>
            <p className="sub-content">Premium Fabrics</p>
            <p className="content">
              Carefully selected materials that offer durability,
              elegance, and comfort.
            </p>
          </div>

          <div>
           
          </div>

          <div>
            <p className="sub-content">Custom Solutions</p>
            <p className="content">
              Tailor-made designs to suit your space, style, and budget.
            </p>
          </div>

          <div>
            <p className="sub-content">Expert Consultation</p>
            <p className="content">
              Professional guidance to help you choose the perfect fabric
              and design.
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

export default About;