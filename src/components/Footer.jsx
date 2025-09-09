export default function Footer() {
  return (
    <footer className="bg-[#271929] text-gray-300 py-10 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Logo and Title side by side */}
        <div className="flex items-center justify-center space-x-3">
          <img
            src="images/gold-logo.png"
            alt="Deyashri Nexus Logo"
            className="w-12 h-12 object-contain"
          />
          <h2 className="text-h2 font-normal text-[#D8AB64]">
            DEYASHRI NEXUS
          </h2>
        </div>

        {/* Contact + Useful Links side by side */}
        <div className="flex justify-center gap-16  text-left ">
          {/* Contact Us */}
          <div>
            <h3 className=" font-medium mb-3 text-h3 text-white">Contact Us</h3>
            <p className="text-h4 mb-1">+91 0000000000</p>
            <p className="text-h4 mb-1">email@gmail.com</p>
            <p className="text-h4">Deyashri Nexus, TN</p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-medium mb-3 text-h3 text-white">Useful Links</h3>
            <ul className="space-y-1 text-h4">
              <li>
                <a href="#" className="hover:text-yellow-600">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-600">Faq</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons in straight row */}
        <div className="flex justify-center space-x-6">
          <a href="#">
            <img src="images/Facebook.png" alt="Facebook" className="w-6 h-6 hover:opacity-80" />
          </a>
          <a href="#">
            <img src="images/Linkedin.png" alt="LinkedIn" className="w-6 h-6 hover:opacity-80" />
          </a>
          <a href="#">
            <img src="images/Twitter.png" alt="Twitter" className="w-6 h-6 hover:opacity-80" />
          </a>
          <a href="#">
            <img src="images/Instagram.png" alt="Instagram" className="w-6 h-6 hover:opacity-80" />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 pt-4 text-center text-sm">
          Copyright © 2025 Deyashri Nexus. All rights reserved.
        </div>
      </div>
    </footer>
  );
}