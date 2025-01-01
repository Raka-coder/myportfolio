import React from 'react'
import Navbar from '@/components/NavbarMenu/Navbar'
import Profile from '@/components/Profiles/Profile'
import Aboutme from '@/components/Profiles/Aboutme'
import Footer from '@/components/Footer/Footer'

function Home() {
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
