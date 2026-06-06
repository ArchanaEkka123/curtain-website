"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import "./home.scss";


export default function Home() {
  return (
    <div className="main ">
      <section className="main-sec">
       {/* <Image className="home-image"
      src="/images/curtain1.jpg"
      alt="Banner"
      width={1200}
      height={1000}
    /> */}
        <div className="home-box flex flex-col justify-center items-center text-center">
          <motion.h1
            className="text-5xl text-black font-bold"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            Transform Your Space with Premium Curtains
          </motion.h1>

          <p className=" text-black mt-5 text-xl">
            Elegant Designs • Quality Fabrics • Professional Installation
          </p>
        </div>
        
      </section>
    </div>
  );
}