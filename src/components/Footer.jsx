export default function Footer() {
  return (
    <footer id="contact" className="bg-[#271929] text-gray-300 py-10 px-6">
      <div className="w-[90%] max-w-6xl mx-auto space-y-8">
        {/* Mobile Layout - Stacked vertically */}
        <div className="block md:hidden space-y-6">
          {/* Logo and Title */}
          <div className="flex items-center justify-center space-x-3">
            <img
              src="images/gold-logo.png"
              alt="Deyashri Nexus Logo"
              className="w-10 h-10 object-contain"
            />
            <h2 className="text-2xl font-normal text-[#D8AB64]">
              DEYASHRI NEXUS
            </h2>
          </div>

          {/* Contact + Useful Links side by side */}
          <div className="flex justify-center gap-12 text-left">
            {/* Contact Us */}
            <div>
              <h3 className="font-medium mb-2 text-sm text-white underline">Contact Us</h3>
              <p className="text-xs mb-1">+91 0000000000</p>
              <p className="text-xs mb-1">email@gmail.com</p>
              <p className="text-xs">Deyashri Nexus, TN</p>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="font-medium mb-2 text-sm text-white underline">Useful Links</h3>
              <ul className="space-y-1 text-xs text-left">
                <li>
                  <a href="#" className="hover:text-yellow-600">Home</a>
                </li>
                <li>
                  <a href="#faqs" className="hover:text-yellow-600">Faq</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4">
            <a href="#">
              <img src="images/Facebook.png" alt="Facebook" className="w-5 h-5 hover:opacity-80" />
            </a>
            <a href="#">
              <img src="images/Linkedin.png" alt="LinkedIn" className="w-5 h-5 hover:opacity-80" />
            </a>
            <a href="#">
              <img src="images/Twitter.png" alt="Twitter" className="w-5 h-5 hover:opacity-80" />
            </a>
            <a href="#">
              <img src="images/Instagram.png" alt="Instagram" className="w-5 h-5 hover:opacity-80" />
            </a>
          </div>
        </div>

       
        {/* Desktop/Tablet Layout - 4 Column Grid */}
        <div className="hidden md:grid grid-cols-4 gap-8 items-start">
          {/* Column 1 - Logo and Brand */}
          <div className="flex flex-col items-center text-center">
            <img
              src="images/gold-logo.png"
              alt="Deyashri Nexus Logo"
              className="w-16 h-16 object-contain mb-8"
            />
            <h2 className="text-3xl font-normal text-[#D8AB64]">
              DEYASHRI NEXUS
            </h2>
          </div>

          {/* Column 2 - Contact Us */}
          <div className="text-left">
            <h3 className="font-medium mb-6 text-lg text-white underline">Contact Us</h3>
            <p className="text-sm mb-2">+91 0000000000</p>
            <p className="text-sm mb-2">email@gmail.com</p>
            <p className="text-sm">Deyashri Nexus, TN</p>
          </div>

          {/* Column 3 - Useful Links */}
          <div className="text-left">
            <h3 className="font-medium mb-5 text-lg text-white underline">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-600 text-sm">Home</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-yellow-600 text-sm">Faq</a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Social Media */}
          <div className="flex items-center mt-16">
            <div className="flex space-x-3">
              <a href="#">
                <img src="images/Facebook.png" alt="Facebook" className="w-7 h-7 hover:opacity-80" />
              </a>
              <a href="#">
                <img src="images/Linkedin.png" alt="LinkedIn" className="w-7 h-7 hover:opacity-80" />
              </a>
              <a href="#">
                <img src="images/Twitter.png" alt="Twitter" className="w-7 h-7 hover:opacity-80" />
              </a>
              <a href="#">
                <img src="images/Instagram.png" alt="Instagram" className="w-7 h-7 hover:opacity-80" />
              </a>
            </div>
          </div>
        </div>


        {/* Divider */}
        <div className="border-t border-gray-600 pt-3 text-center text-xs">
          Copyright © 2025 Deyashri Nexus. All rights reserved.
        </div>
      </div>
    </footer>
  );
}