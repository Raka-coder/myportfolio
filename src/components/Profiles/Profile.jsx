import React from "react";
import Image from "next/image";
import Link from "next/link";

import rakaJpg from "../../assets/images/raka.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";

const Profile = () => {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-50 via-blue-50 to-slate-50 md:pt-12 pt-24"
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
            <div className="flex md:items-start items-center md:justify-start justify-center">
              <Link
                href="/pages/kontak"
                className="group relative px-6 py-4 text-white bg-blue-600 hover:bg-transparent hover:text-blue-600 rounded-full outline outline-1 transition duration-100 ease-in overflow-hidden"
              >
                <div className="relative flex items-center justify-center">
                  <div className="flex items-center transition-transform duration-100 group-hover:translate-x-2">
                    <span>Kontak Saya</span>
                    <IoIosArrowRoundForward className="text-3xl" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96 mt-6">
              <Image
                src={rakaJpg}
                alt='raka'
                title='Raka Restu Saputra'
                className="h-auto object-contain rounded-full drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
