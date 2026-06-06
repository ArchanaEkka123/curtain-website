"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import "./navbar.scss";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
    >
      <nav className="navbar justify-evenly">
        <div className="nav-heading-logo">
          <Image
            className="logo"
            src="/images/Ekka-Logo.jpg"
            alt="EKKA Logo"
            width={37}
            height={29}
          />

          <p className="nav_heading text-amber-50">Elite Decor</p>
           {/* <p className="nav_heading text-amber-50">Aurelia Décor</p> */}
        </div>

        <ul className="nav_ul">
          <li className="hover:animate-bounce text-4xl font-semibold">
            <Link href="/" className="nav_content text-amber-50">
          
              Home
            </Link>
          </li>

          <li className="hover:animate-bounce text-4xl font-semibold">
            <Link href="/ourproducts" className="nav_content text-amber-50">
              Our Products
            </Link>
          </li>

          <li className="hover:animate-bounce text-4xl font-semibold">
            <Link href="/about" className="nav_content text-amber-50">
            
              About Us
            </Link>
          </li>

          <li className="hover:animate-bounce text-4xl font-semibold">
            <Link href="/price" className="nav_content text-amber-50">
              Pricing
            </Link>
          </li>
        </ul>

        <div className="nav-button-holder">
          <Link href="/contactform">
            <button className="button-login text-black">
              Login
            </button>
          </Link>

          <Link href="/designs" className="button">
            
              Explore Collection
            
          </Link>
        </div>
      </nav>
    </motion.nav>
  );
};

export default Navbar;