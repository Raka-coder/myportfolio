import React from "react"
import Link from "next/link"
import Image from "next/image"

import kontakPng from "../../assets/images/Messaging-bro.png"
import { IoLogoGithub } from "react-icons/io5"
import { FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaRegFileLines } from "react-icons/fa6"

function Kontak() {
  return (
    <>
      <section
        id=""
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-50 via-blue-50 to-slate-50 md:pt-12 pt-4"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:mb-6 mb-24">
          <div className="md:w-1/2 mt-8 md:mt-0 flex flex-wrap justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96 mt-6">
              <Image src={kontakPng} alt="kontak" className="h-auto drop-shadow-xl" />
            </div>
          </div>
          <div className="md:w-1/2 text-center md:pb-24 md:pt-12">
            <h2 className="md:text-6xl text-4xl font-bold text-blue-600">
              Kontak Saya
            </h2>
            <p className="text-lg md:text-center text-gray-600 mt-4">
              Jika Anda ingin menghubungi saya, klik icon media sosial di bawah
              ini.
            </p>
            <ul className="flex items-center justify-center mt-4 space-x-2.5">
              <li className="hover:scale-105">
                <Link href="https://github.com/Raka-coder" target="_blank">
                  <IoLogoGithub className="text-4xl" />
                </Link>
              </li>
              <li className="hover:scale-105">
                <Link href="https://instagram.com/rakresptra" target="_blank">
                  <FaInstagram className="text-4xl text-[#FF5B50]" />
                </Link>
              </li>
              <li className="hover:scale-105">
                <Link href="https://www.linkedin.com/in/raka-restu-saputra-25a333315/" target="_blank">
                  <FaLinkedin className="text-4xl text-blue-600" />
                </Link>
              </li>
            </ul>
            <div className="container md:mt-4 mt-4">
              <div className="flex items-center justify-center">
                <Link
                  href="https://drive.google.com/file/d/1OEnXWrwGY8RNdHvxAhGpVOe4ZDjYbvOS/view?usp=sharing"
                  target="_blank"
                  className="flex items-center px-6 py-4 text-white bg-blue-600 hover:bg-transparent hover:text-blue-600 rounded-full outline outline-1 transition duration-100 ease-in"
                >
                  Lihat CV<FaRegFileLines className="text-xl ml-1 mb-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Kontak;
