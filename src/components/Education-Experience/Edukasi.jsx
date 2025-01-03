import React from "react";
import Image from "next/image";
import learningPng from "../../assets/images/Learning-bro.png";

function Edukasi() {
  return (
    <>
      <section
        id=""
        className="relative min-h-screen mx-auto grid grid-cols-1 md:grid-cols-1 items-center justify-center bg-gradient-to-br from-zinc-50 via-blue-50 to-slate-50 pt-8"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mt-8 md:pt-12 pt-6 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-64">
              <Image src={learningPng} alt="raka" className="h-auto" />
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left mt-8">
            <h2 className="md:text-6xl text-4xl font-bold text-blue-600">
              Edukasi
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Sebagai orang di bidang IT, saya memiliki keinginan untuk terus belajar dan
              meningkatkan kemampuan saya.
            </p>
          </div>
        </div>
        <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-1 items-start md:pt-32 pt-12">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-blue-600 md:text-start text-center md:pt-12">
            History Edukasi Saya
          </h1>
          <div className="bg-white shadow-md rounded-lg p-6 my-2">
            <div className="md:flex items-end justify-between">
              <h2 className="text-lg font-bold mb-2">Universitas Siliwangi</h2>
              <p className="mb-2">2024 - Sekarang</p>
            </div>
            <p className="text-sm text-gray-600">S1 - Teknik Informatika</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 my-2">
            <div className="md:flex items-end justify-between">
              <h2 className="text-lg font-bold mb-2">SMKN 2 Tasikmalaya</h2>
              <p className="mb-2">2020 - 2024</p>
            </div>
            <p className="text-sm text-gray-600">
              Sistem Informasi Jaringan dan Aplikasi
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 my-2">
            <div className="md:flex items-end justify-between">
              <h2 className="text-lg font-bold mb-2">SMPN 3 Tasikmalaya</h2>
              <p className="mb-2">2017 - 2020</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 my-2">
            <div className="md:flex items-end justify-between">
              <h2 className="text-lg font-bold mb-2">SDN 1 Angkasa</h2>
              <p className="mb-2">2011 - 2017</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Edukasi;
