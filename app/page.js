//import Image from "next/image";

import Home from "./components/home/home";
import Services from "./components/services/services";
import Product from "./components/product/product";
import Contact from "./components/contact/contact.jsx";
import About from "./components/about/about";
import Collection from "./components/designs/designs";
//import OurProducts from "./components/ourproducts/page.jsx";
//import AdminPage from "./admin/page.jsx";
export default function Page() {
  return (
    <div className="flex flex-col  items-center justify-center ">
      
      <main className="flex  w-full flex-col items-center ">
        <div className=" ">
          <Home />
          <Product />
           <Services />
          <Contact />
          <About />
          <Collection />
          {/* <AdminPage /> */}
        </div>
      </main>
     
    </div>
  );
}
