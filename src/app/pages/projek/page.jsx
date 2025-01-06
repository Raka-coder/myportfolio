"use client"

import React from 'react'
import Navbar from '@/components/NavbarMenu/Navbar'
import Projects from '@/components/Projects/Projects'
import Footer from '@/components/Footer/Footer'
import useTitle from '@/hooks/useTitle'


function page() {
  useTitle("Projek");

  return (
    <>
      <Navbar />
      <Projects />
      <Footer />
    </>
  )
}

export default page
