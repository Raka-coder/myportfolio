"use client"

import React from "react"
import Image from "next/image"
import learningPng from "../../assets/images/Learning-bro.png"

// Komponen Card Edukasi Reusable
const EducationCard = ({ school, degree, year }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 my-2 hover:shadow-xl">
      <div className="md:flex items-end justify-between">
        <h2 className="text-lg font-bold mb-2">{school}</h2>
        <p className="mb-2">{year}</p>
      </div>
      {degree && <p className="text-sm text-gray-600">{degree}</p>}
    </div>
  );
};

function Edukasi() {
  const educationData = [
    {
      id: 1,
      school: "Universitas Siliwangi",
      degree: "S1 - Teknik Informatika",
      year: "2024 - Sekarang",
    },
    {
      id: 2,
      school: "SMKN 2 Tasikmalaya",
      degree: "Sistem Informasi Jaringan dan Aplikasi",
      year: "2020 - 2024",
    },
    {
      id: 3,
      school: "SMPN 3 Tasikmalaya",
      degree: "",
      year: "2017 - 2020",
    },
    {
      id: 4,
      school: "SDN 1 Angkasa",
      degree: "",
      year: "2011 - 2017",
    }
  ];

  return (
    <section className="relative min-h-screen mx-auto grid grid-cols-1 md:grid-cols-1 items-center justify-center bg-gradient-to-br from-zinc-50 via-blue-50 to-slate-50 md:pt-16 pt-12">
      {/* Bagian Header dengan Gambar */}
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Gambar */}
        <div className="md:w-1/2 mt-8 md:pt-12 pt-6 flex justify-center">
          <div className="relative w-64 h-64 md:w-96 md:h-64">
            <Image 
              src={learningPng} 
              alt="Education" 
              className="h-auto drop-shadow-xl" 
            />
          </div>
        </div>

        {/* Deskripsi */}
        <div className="md:w-1/2 text-center md:text-left mt-8">
          <h2 className="md:text-6xl text-4xl font-bold text-blue-600 mb-6">
            Edukasi
          </h2>
          <p className="text-lg text-gray-600">
            Sebagai orang belajar di bidang IT, saya memiliki keinginan untuk terus belajar dan
            meningkatkan kemampuan saya.
          </p>
        </div>
      </div>

      {/* Daftar Edukasi */}
      <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-1 items-start md:pt-48 pt-12">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-blue-600 md:text-start text-center md:pt-24">
          History Edukasi Saya
        </h1>
        
        {/* Mapping Kartu Edukasi */}
        {educationData.map((education) => (
          <EducationCard
            key={education.id}
            school={education.school}
            degree={education.degree}
            year={education.year}
          />
        ))}
      </div>
    </section>
  );
}

export default Edukasi;