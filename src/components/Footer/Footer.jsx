import React from "react";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";

function Footer() {
  return (
    <>
      <footer className="md:bg-gradient-to-br md:from-blue-50 md:via-slate-50 md:to-zinc-50 text-gray-700 bg-gradient-to-br from-zinc-50 via-blue-50 to-slate-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center md:text-left">Dibuat dengan ❤️ oleh Raka</div>
          <div className="text-center md:text-left">
            <ul className="flex space-x-1 justify-center md:justify-normal">
              <li className="mt-3">Website ini dibangun dengan:</li>
              <li className="mt-2">
                <RiNextjsFill className="text-3xl text-zinc-950" title="NextJS"/>
              </li>
              <li className="mt-2">
                <RiTailwindCssFill className="text-3xl text-sky-400" title="Tailwind"/>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
