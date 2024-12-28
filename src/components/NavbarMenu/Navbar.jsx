'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { Github } from 'lucide';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition"
        >
          Raka.
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
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
              rounded-md 
              hover:bg-gray-100
            "
          >
            About
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
          <Link href="https://github.com/Raka-coder/myportfolio">
            <Github/>
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
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
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
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
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
          <div className="
            md:hidden 
            absolute 
            top-full 
            left-0 
            right-0 
            bg-white 
            shadow-lg
          ">
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
                hover:bg-gray-100 
                transition
              "
            >
              About
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
                hover:bg-gray-100 
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
                text-gray-700 
                hover:bg-gray-100 
                transition
              "
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;