import React from "react";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiArduino } from "react-icons/si";

function Aboutme() {
  return (
    <>
      <section
        id="about"
        className="bg-gradient-to-br from-zinc-50 via-blue-50 to-slate-50 scroll-smooth"
      >
        <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-1 items-start">
          <div className="md:w-1/2 text-center md:text-left mt-12">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-blue-600 items-start">
              Tentang Saya
            </h1>
            <p className="md:text-xl text-lg mb-6 text-gray-600">
              Saya Raka Restu Saputra, berasal dari Tasikmalaya, Saya seorang
              mahasiswa Informatika yang sedang menempuh pendidikan di
              Universitas Siliwangi.
            </p>
            <p className="md:text-xl text-lg mb-6 text-gray-600">
              Saya memiliki minat terhadap dunia teknologi, terutama dalam
              pengembangan web, aplikasi, jaringan, dan internet of things (IoT).
            </p>
            <p className="text-xl md:text-2xl font-bold mb-4 text-blue-600 items-start">
              Saya mempelajari:
            </p>
            <ul className="flex space-x-4 justify-center md:justify-normal">
              <li className="">
                <FaHtml5 className="text-4xl text-orange-500" title="HTML5"/>
              </li>
              <li className="">
                <FaCss3Alt className="text-4xl text-blue-500" title="CSS"/>
              </li>
              <li className="">
                <FaJs className="text-4xl text-yellow-500" title="Javascript"/>
              </li>
              <li className="">
                <FaReact className="text-4xl text-sky-400" title="React"/>
              </li>
              <li className="">
                <FaNodeJs className="text-4xl text-green-600" title="NodeJS"/>
              </li>
              <li className="">
                <SiArduino className="text-4xl text-teal-500" title="Arduino"/>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutme;
