"use client"

import React from 'react'
import Navbar from '@/components/NavbarMenu/Navbar'
import Profile from '@/components/Profiles/Profile'
import Aboutme from '@/components/Profiles/Aboutme'
import Footer from '@/components/Footer/Footer'
import useTitle from '@/hooks/useTitle'

function Home() {
  useTitle("Portofolio")

  return (
    <>
      <Navbar/>
      <Profile/>
      <Aboutme/>
      <Footer/>
    </>
  )
}

export default Home
