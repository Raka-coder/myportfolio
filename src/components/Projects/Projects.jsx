import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { FaExternalLinkAlt } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'

import projectPng from "../../assets/images/Project.png"
import smartHomeJpg from "../../assets/images/smart_home.jpg"
import turdifJpg from "../../assets/images/turdif-dark.png"

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
          quality={100}
          layout="fill"
          priority
          placeholder="blur"
          blurDataURL="data:image/..."
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
      description: "Penerapan Teknologi Internet of Things (IoT) Pada Sistem Kendali Lampu Pintar Menggunakan Wemos D1 Mini, Relay, Sinric Pro, Dan Google Home.",
      image: smartHomeJpg,
      technologies: ["C++", "Sinric Pro", "Google Home"],
      githublink: "https://github.com/Raka-coder/project-smarthome-pio",
    },
    {
      title: "Web Turunan Diferensial",
      description: "Sebuah Web dengan materi dan kalkulator Turunan Diferensial, Mata Kuliah Kalkulus 1.",
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
        className="relative min-h-screen mx-auto items-center justify-center bg-gradient-to-br from-zinc-50 via-blue-50 to-slate-50 md:pt-20 pt-12"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mt-8 md:pt-12 pt-6 flex items-center justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-64">
              <Image src={projectPng} alt="raka" className="h-auto drop-shadow-xl" />
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left mt-8">
            <h2 className="md:text-6xl text-4xl font-bold text-blue-600 mb-4">
              Projek Saya
            </h2>
            <p className="text-lg text-gray-600">
              Projek ini saya kerjakan selama
              saya masih belajar. Projek ini dimulai dari Web, IoT, Jaringan.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8 md:pt-48 pt-20">
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