import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { FaExternalLinkAlt } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'

import projectPng from "../../assets/images/Project.png"
import smartHomeJpg from "../../assets/images/smart_home.jpg"
import turdifJpg from "../../assets/images/turdif-transformed.jpeg"

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  githublink,
  liveLink,
}) => {
  return (

    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-xl">
      {/* Gambar Project */}
      <div className="relative w-full h-48 md:h-56">
        <Image
          src={image}
          alt={title}
          layout="fill"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Konten Project */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>


        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs p-1.5 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Tautan */}
        <div className="flex space-x-4">
          {githublink && (
            <Link
              href={githublink}
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <FaGithub className="mr-2 mb-0.5" /> GitHub
            </Link>
          )}

          {liveLink && (
            <Link
              href={liveLink}
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <FaExternalLinkAlt className="mr-2 mb-0.5" /> Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>

  )
}

const Projects = () => {
  const project = [
    {
      title: "Smart Home",
      description: "Penerapan Teknologi Internet of Things (IoT) Pada Sistem Kendali Lampu Pintar Menggunakan Wemos D1 Mini, Relay, Sinric Pro, Dan Google Home",
      image: smartHomeJpg,
      technologies: ["C++", "Sinric Pro", "Google Home"],
      githublink: "https://github.com/Raka-coder/project-smarthome-pio",
    },
    {
      title: "Web Turunan Diferensial",
      description: "Sebuah Web dengan materi dan kalkulator Turunan Diferensial, Mata Kuliah Kalkulus 1",
      image: turdifJpg,
      technologies: ["React", "Tailwind"],
      githublink: "https://github.com/Raka-coder/project-web-turdif-kalkulus_I",
      liveLink: "https://turdif.vercel.app/",
    }
  ];
  return (
    <>
      <section
        id=""
        className="relative min-h-screen mx-auto items-center justify-center bg-gradient-to-br from-zinc-50 via-blue-50 to-slate-50 pt-16"

      >
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mt-8 md:pt-12 pt-6 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-64">
              <Image src={projectPng} alt="raka" className="h-auto drop-shadow-xl" />
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left mt-8">
            <h2 className="md:text-6xl text-4xl font-bold text-blue-600 mb-4">
              Projek Saya
            </h2>
            <p className="text-lg text-gray-600">
              Projek yang saya kerjakan adalah projek-projek yang saya kerjakan selama
              saya masih belajar. Projek-projek ini saya kerjakan dengan menggunakan berbagai teknologi dan bahasa pemrograman.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8 md:pt-32 pt-20">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-blue-600 md:text-start text-center md:pt-12">
            Berikut beberapa projek yang saya buat
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}


export default Projects