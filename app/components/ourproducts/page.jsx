"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import "./ourproducts.scss";
import projectsData from "./productsdata.jsx";
const OurProducts = () => {
  const [showPopup, setShowPopup] = useState(false);
 const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="work-main">
     <div className="work-sec">
        <div className="work">
         <div className="content-holder">
           <h1 className="font-semibold text-3xl text-amber-50">
            Our Products
            </h1>
           <p className="text-lg text-amber-50">
              Enhance your interiors with our exclusive range of stylish and
              functional curtains.
          </p>
          </div>
        </div>

        <div className="projects-main">
          <div className="heading-box"></div>

         <div className="sec_holder bg-white">
           
               <p className="font-bold text-3xl pl-7 pt-2 pb-2">Curtains</p>
            
           <motion.div
              className="card-holder"
               initial={{ x: 1000, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            > 
              <>
<div  className="card flex flex-wrap">

{projectsData.map((item) => (
        <div key={item.id} className="right-box">
          <p className="font-bold projects-content">
            {item.title}
          </p>
          <div className="underline bg-gray-500"></div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => setSelectedImage(item.image)}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={300}
              className="rounded-lg"
            />
          </motion.div>
          <ul className="mt-4 list-disc pl-5">
            {item.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Popup Image"
                width={900}
                height={700}
                className="rounded-xl max-h-[90vh] w-auto"
              />
            </motion.div>

            <button
              className="absolute top-5 right-5 text-white text-4xl"
              onClick={() => setSelectedImage(null)}
            >
              x
            </button>
          </motion.div>
        )}
      </AnimatePresence>
</div>



      
    </>

            </motion.div> 


         </div>
        </div>
      </div>
    </div>
       
  );
};

export default OurProducts;