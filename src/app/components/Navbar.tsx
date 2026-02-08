"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-slate-900 shadow-lg sticky top-0 z-50 backdrop-blur-md bg-opacity-95 dark:bg-opacity-95">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent hover:from-blue-500 hover:to-blue-300 transition-all"
        >
          Ayush Aman
        </Link>

        <ul className="hidden md:flex space-x-8 font-medium text-gray-700 dark:text-gray-300">
          <li>
            <Link
              href="/"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/work-experience"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Work Experience
            </Link>
          </li>
          <li>
            <Link
              href="/education"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              href="/content"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Content
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 animate-in fade-in duration-200">
          <ul className="flex flex-col space-y-3 p-4 text-gray-700 dark:text-gray-300">
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                onClick={() => setOpen(false)}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/work-experience"
                onClick={() => setOpen(false)}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Work Experience
              </Link>
            </li>
            <li>
              <Link
                href="/education"
                onClick={() => setOpen(false)}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                href="/content"
                onClick={() => setOpen(false)}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Content
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
