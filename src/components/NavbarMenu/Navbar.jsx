"use client";

import React, { useState } from "react";
import Link from "next/link";

import { IoLogoGithub } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-br from-zinc-50 via-blue-50 to-slate-50 shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition"
        >
          Raka<code>()</code>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="
              text-gray-700 
              hover:text-blue-600 
              transition 
              duration-300 
              px-3 py-2 
              rounded-md 
              hover:bg-gray-100
            "
          >
            Home
          </Link>
          <Link
            href="/pages/about"
            className="
              text-gray-700 
              hover:text-blue-600 
              transition 
              duration-300 
              px-3 py-2 
            "
          >
            About me
          </Link>
          <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="
                block 
                px-3 
                py-2 
                text-gray-700 
                hover:text-blue-600 
                transition
              "
            >
              Educations & Experience
            </Link>
          <Link
            href="/pages/project"
            className="
              text-gray-700 
              hover:text-blue-600 
              transition 
              duration-300 
              px-3 py-2 
              rounded-md 
              hover:bg-gray-100
            "
          >
            Projects
          </Link>
          <Link
            href="/pages/contact"
            className="
              text-gray-700 
              hover:text-blue-600 
              transition 
              duration-300 
              px-3 py-2 
              rounded-md 
              hover:bg-gray-100
            "
          >
            Contact
          </Link>
          <Link
            href="https://github.com/Raka-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 
              hover:text-blue-600 
              transition 
              duration-300 
              px-3 py-2 
              rounded-md 
              hover:bg-gray-100"
          >
            <IoLogoGithub style={{ width: "24px", height: "24px" }} />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`
                h-6 
                w-6 
                transition-transform 
                duration-300 
                ${isOpen ? 'rotate-90' : 'rotate-0'}
              `}
              fill="none"
              viewBox="0 0 24 24"
              stroke="gray"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`
                h-6 
                w-6 
                transition-transform
                duration-300
                ${isOpen ? 'rotate-90' : 'rotate-0'}
                `}
              fill="none"
              viewBox="0 0 24 24"
              stroke="gray"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="
            md:hidden 
            absolute 
            bg-gradient-to-br from-zinc-50 via-blue-50 to-slate-50
            top-full
            h-lvh
            left-0 
            right-0 
            shadow-lg
          "
          >
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="
                block 
                px-4 
                py-3 
                border-b 
                text-gray-700 
                hover:bg-gray-100 
                transition
              "
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="
                block 
                px-4 
                py-3 
                border-b 
                text-gray-700 
                hover:text-blue-600 
                transition
              "
            >
              About
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="
                block 
                px-4 
                py-3 
                border-b 
                text-gray-700 
                hover:text-blue-600 
                transition
              "
            >
              Educations & Experience
            </Link>
            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="
                block 
                px-4 
                py-3 
                border-b 
                text-gray-700 
                hover:text-blue-600 
                transition
              "
            >
              Projects
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="
                block 
                px-4 
                py-3 
                border-b
                text-gray-700 
                hover:text-blue-600 
                transition
              "
            >
              Contact
            </Link>
            <Link
              href="https://github.com/Raka-coder/myportfolio"
              onClick={() => setIsOpen(false)}
              className="
                block 
                px-4 
                py-3 
                text-gray-700 
                hover:text-blue-600 
                transition
              "
            >
              <IoLogoGithub style={{ width: "24px", height: "24px" }} />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
