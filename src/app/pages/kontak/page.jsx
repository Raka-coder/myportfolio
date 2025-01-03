import React from "react";
import Navbar from "@/components/NavbarMenu/Navbar";
import Kontak from "@/components/Contact/Kontak";
import Footer from "@/components/Footer/Footer";


function page() {
  return (
    <>
      <Navbar />
      <Kontak/>
      <Footer/>
    </>
  );
}

export default page;
