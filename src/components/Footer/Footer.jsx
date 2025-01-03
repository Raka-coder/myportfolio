import React from "react";
import Link from "next/link";

import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

function Footer() {
  return (
    <>
      <footer className="md:bg-gradient-to-br md:from-blue-50 md:via-slate-50 md:to-zinc-50 text-gray-700 bg-gradient-to-br from-zinc-50 via-blue-50 to-slate-50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 px-4 py-16">
          <div className="text-center md:text-left">
            Dibuat dengan ❤️ oleh Raka
            <ul className="flex space-x-1 justify-center md:justify-start">
              <li className="mt-2">Website ini dibangun dengan:</li>
              <li className="mt-1">
                <RiNextjsFill
                  className="text-3xl text-zinc-950"
                  title="NextJS"
                />
              </li>
              <li className="mt-1">
                <RiTailwindCssFill
                  className="text-3xl text-sky-400"
                  title="Tailwind"
                />
              </li>
            </ul>
          </div>
          <div className="flex items-end justify-center md:justify-end md:pb-10">
            <ul className="flex space-x-2 justify-center md:justify-end md:mt-0 mt-4">
              <Link
                href="https://instagram.com/rakresptra"
                className="hover:scale-105"
              >
                <FaInstagram className="md:text-3xl text-4xl text-[#FF5B50]" />
              </Link>
              <Link
                href="https://github.com/Raka-coder"
                className="hover:scale-105"
              >
                <IoLogoGithub className="md:text-3xl text-4xl" />
              </Link>
            </ul>
          </div>
        </div>
        <div className="md:px-12 px-6 md:-mt-16 -mt-16">
          <div className="flex w-full border-b border-gray-400 md:my-8 my-6"></div>
        </div>
        <div className="flex items-center justify-center md:justify-center pb-4 md:pb-10">
          <p className="text-center md:text-left text-sm text-gray-700">
            &copy; 2025 Raka. Portofolio.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
