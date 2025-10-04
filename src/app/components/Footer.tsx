import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 mt-12 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-lg font-semibold mb-4">Contact</h2>
        <ul className="space-y-2">
          <li className="flex items-center gap-2"><FaGithub /> github.com/ayushaman</li>
          <li className="flex items-center gap-2"><FaLinkedin /> linkedin.com/in/ayushaman</li>
          <li className="flex items-center gap-2"><FaPhone /> +44 1234 567890</li>
          <li className="flex items-center gap-2"><FaEnvelope /> ayushaman@email.com</li>
          <li className="flex items-center gap-2"><FaMapMarkerAlt /> London, UK</li>
        </ul>
      </div>
    </footer>
  );
}
