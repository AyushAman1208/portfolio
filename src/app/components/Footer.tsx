import Link from "next/link";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-gray-100 mt-16 py-12 border-t border-slate-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/projects" className="hover:text-blue-400 transition-colors">Projects</Link></li>
              <li><Link href="/work-experience" className="hover:text-blue-400 transition-colors">Work Experience</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">Social</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2 hover:text-blue-400 transition-colors"><FaGithub size={16} /> <a href="https://github.com/AyushAman1208" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li className="flex items-center gap-2 hover:text-blue-400 transition-colors"><FaLinkedin size={16} /> <a href="https://www.linkedin.com/in/ayush-aman-" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2"><FaPhone size={16} /> +44 7459082468</li>
              <li className="flex items-center gap-2"><FaEnvelope size={16} /> <Link href="mailto:ayushaman1208@gmail.com" className="hover:text-blue-400 transition-colors">ayushaman1208@gmail.com</Link></li>
              <li className="flex items-center gap-2"><FaMapMarkerAlt size={16} /> London, UK</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ayush Aman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
