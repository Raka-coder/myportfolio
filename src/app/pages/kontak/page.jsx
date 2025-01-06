"use client"

import React from "react"
import Navbar from "@/components/NavbarMenu/Navbar"
import Kontak from "@/components/Contact/Kontak"
import Footer from "@/components/Footer/Footer"
import useTitle from "@/hooks/useTitle"

function page() {
  useTitle("Kontak");

  return (
    <>
      <Navbar />
      <Kontak/>
      <Footer/>
    </>
  );
}

export default page;
