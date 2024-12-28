import React from 'react';
import Image from 'next/image';

const Profile = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
            Halo, Saya <br /><span className="text-blue-600">Raka Restu Saputra</span>
          </h1>
          <p className="text-xl mb-6 text-gray-600">
            Saya Mempelajari Computer Engineering 
          </p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a 
              href="/resume.pdf" 
              download 
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Download CV
            </a>
            <a 
              href="#contact" 
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <Image 
              src="/profile.png" 
              alt="Profile Picture" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-full shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;