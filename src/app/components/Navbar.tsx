"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link href="/" className="text-xl font-bold text-blue-600">Ayush Aman</Link>

        <ul className="hidden md:flex space-x-6 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/work-experience">Work Experience</Link></li>
          <li><Link href="/education">About</Link></li>
          <li><Link href="/leadership">Leadership</Link></li>
        </ul>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col space-y-2 p-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/work-experience">Work Experience</Link></li>
            <li><Link href="/education">About</Link></li>
            <li><Link href="/leadership">Leadership</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
