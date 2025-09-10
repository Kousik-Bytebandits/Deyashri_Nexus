import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const phoneNumber = "916381018516"; // include country code
  const message = "Hello, I want to contact you!";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    // Try opening in a new tab; if blocked by the browser, fallback to same tab
    const win = window.open(url, "_blank");
    if (!win || win.closed || typeof win.closed === "undefined") {
      window.location.href = url;
    }
  };

  // Handle scroll background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 shadow-md bg-white ${scrolled ? "md:bg-[#281829]" : "md:bg-white"
        }`}
    >
      <div className="w-full md:w-[90%] lg:w-[80%] mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Mobile: fixed gold logo; Desktop/Tablet: scroll-dependent logo */}
          <img
            src="images/nexus-logo.png"
            alt="logo"
            className="w-10 h-10 md:hidden mx-2"
          />
          <img
            src={scrolled ? "images/gold-logo.png" : "images/nexus-logo.png"}
            alt="logo"
            className="w-10 h-10 hidden md:block"
          />
          <span
            className={`hidden md:block font-semibold text-sm sm:text-base ${scrolled ? "text-[#D8AB64]" : "text-black"
              }`}
          >
            DEYASHRI NEXUS
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#about"
            className={`hover:text-indigo-400 text-sm ${scrolled ? "text-gray-200" : "text-gray-700"
              }`}
          >
            ABOUT
          </a>
          <a
            href="#contact"
            className={`hover:text-indigo-400 text-sm ${scrolled ? "text-gray-200" : "text-gray-700"
              }`}
          >
            CONTACT
          </a>
          <a
            href="#faqs"
            className={`hover:text-indigo-400 text-sm ${scrolled ? "text-gray-200" : "text-gray-700"
              }`}
          >
            FAQs
          </a>
          <button
            onClick={handleClick}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition"
          >
            ENQUIRE
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden px-2 mt-3">
          <button onClick={() => setIsOpen(true)}>
            <Menu size={32} />
          </button>
        </div>
      </div>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-end items-center px-4 py-5 border-b">
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
          <button
            onClick={handleClick}
            className="bg-[#565BC7] text-white px-4 py-3 rounded-md text-h3 hover:bg-indigo-700 transition"
          >
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
