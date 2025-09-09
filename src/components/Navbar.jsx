import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full shadow-md bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="images/nexus-logo.png" alt="logo" className="w-10 h-10" />
          <span className="hidden md:block font-semibold text-sm sm:text-base">
            DEYASHRI NEXUS
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-gray-700 hover:text-black text-sm">
            ABOUT
          </a>
          <a href="#contact" className="text-gray-700 hover:text-black text-sm">
            CONTACT
          </a>
          <a href="#faqs" className="text-gray-700 hover:text-black text-sm">
            FAQs
          </a>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition">
            ENQUIRE
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden mt-3">
          <button onClick={() => setIsOpen(true)}>
            <Menu size={32} />
          </button>
        </div>
      </div>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end items-center px-4 py-5  border-b">
         
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col p-4 gap-4">
          <a
            href="#about"
            className="text-gray-700 hover:text-black text-h3"
            onClick={() => setIsOpen(false)}
          >
            ABOUT
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-black text-h3"
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </a>
          <a
            href="#faqs"
            className="text-gray-700 hover:text-black text-h3"
            onClick={() => setIsOpen(false)}
          >
            FAQs
          </a>
          <button className="bg-[#565BC7] text-white px-4 py-3 rounded-md text-h3 hover:bg-indigo-700 transition">
            ENQUIRE
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
}
