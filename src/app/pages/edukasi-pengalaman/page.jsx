"use client"

import React from 'react'
import Navbar from '@/components/NavbarMenu/Navbar'
import Edukasi from '@/components/Education-Experience/Edukasi'
import Pengalaman from '@/components/Education-Experience/Pengalaman'
import Footer from '@/components/Footer/Footer'
import useTitle from '@/hooks/useTitle'

function page() {
  useTitle("Edukasi & Pengalaman");

  return (
    <>
      <Navbar/>
      <Edukasi/>
      <Pengalaman/>
      <Footer/>
    </>
  )
}

export default page
