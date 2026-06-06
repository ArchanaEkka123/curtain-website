"use client";

import React from "react";
import Image from "next/image";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer bg-gray-600 pt-20 pb-14">
      <h1 className="footer-heading text-4xl font-bold text-white">
        Explore Luxury Curtains
      </h1>

      <p className="footer-content">
        Premium quality products at competitive prices.
      </p>

      <p className="footer-content">
        The Perfect Blend of Style and Quality
      </p>

      <div className="footer-button-holder mt-10">
        <button className="footer-button1">
          Shop Premium Curtains
        </button>
      </div>

      <div className="footer-2 mt-20">
        <div className="footer-content">
          <div className="footer1">
            <div className="footer-2-top-left">
              <p className="font-bold text-2xl">Elite Decor</p>
            </div>

            <p className="footer1-content">
              Discover premium curtains and furnishing solutions tailored to
              your style.
            </p>
          </div>

          <div className="footer1">
            <h2 className="font-bold">Product</h2>
            <p>Overview</p>
            <p>Pricing</p>
            <p>Customer Stories</p>
          </div>

          <div className="footer1">
            <h2 className="font-bold">Resources</h2>
            <p>Blog</p>
            <p>Guides & Tutorials</p>
            <p>Help Center</p>
          </div>

          <div className="footer1">
            <h2 className="font-bold">Company</h2>
            <p>About Us</p>
            <p>Careers</p>
            <p>Media Kit</p>
          </div>

          <div className="footer1">
            <h2 className="font-bold">Transform Your Space</h2>
            <p>
              Carefully selected materials that offer durability, elegance, and
              comfort.
            </p>
          </div>
        </div>

        <div className="footer-underline h-0.5 bg-gray-500 mt-10"></div>

        <div className="footer-2-lower">
          <div className="footer-2-left text-amber-50">
            <Image
              src="/images/global.svg"
              alt="Global"
              width={19}
              height={19}
            />

            <p>English</p>

            <Image
              src="/images/arrow-down.svg"
              alt="Arrow Down"
              width={14}
              height={14}
            />
          </div>

          <p className="footer-2-content">Terms & Privacy</p>
          <p className="footer-2-content">Security</p>
          <p className="footer-2-content">Status</p>
          <p className="footer-2-content text-white">
            ©2026 EKKA LLC.
          </p>

          <div className="footer-social-media-main">
            <div className="footer-social-media">
              <Image
                className="social-media-image"
                src="/images/Linkedin-white.svg"
                alt="LinkedIn"
                width={15}
                height={15}
              />

              <Image
                className="social-media-image"
                src="/images/Twitter-white.svg"
                alt="Twitter"
                width={15}
                height={15}
              />

              <Image
                className="social-media-image"
                src="/images/Linkedin-white.svg"
                alt="LinkedIn"
                width={15}
                height={15}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;