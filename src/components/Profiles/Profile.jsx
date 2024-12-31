import React from "react";
import Image from "next/image";
import Link from "next/link";

import rakaJpg from "../../assets/images/raka.jpg";

const Profile = () => {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-50 via-blue-50 to-slate-50 pt-12"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Halo, Saya <br />
            </h3>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600">Raka Restu Saputra</h1>
            <p className="text-xl mb-6 text-gray-600">
              Saya Seorang Web & IoT Developer yang berasal dari Indonesia.
            </p>
            <div className="space-x-4 justify-center pt-4">
              {/* <Link
                href=""
                className="px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
              >
                Lihat CV
              </Link> */}
              <Link
                href=""
                className="px-6 py-4 text-white bg-blue-600 hover:bg-transparent hover:text-blue-600 rounded-full outline outline-1 transition duration-100 ease-in"
              >
                Kontak Saya
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96 mt-6">
              <Image 
              src={rakaJpg} 
              alt='raka'
              layout="fill" 
              objectFit="cover" 
              title='Raka Restu Saputra'
              className="h-auto object-contain rounded-full shadow-xl drop-shadow"
            />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
