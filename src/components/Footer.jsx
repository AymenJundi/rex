import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsTelegram, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#1746ff] w-full py-12 text-white">
      <div className="container mx-auto text-center">
        {/* Brand/Logo Section */}
        <div className="mb-6 flex justify-center items-center gap-4">
          <img src="./assets/rex.png" alt="Rex Labs Logo" className="h-12 w-auto" />
          <h3 className="text-2xl font-bold">Rex Labs</h3>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a href="/" className="text-white hover:text-[#43a8d4] transition-colors duration-300">Home</a>
          <a href="/about" className="text-white hover:text-[#43a8d4] transition-colors duration-300">About</a>
          <a href="/services" className="text-white hover:text-[#43a8d4] transition-colors duration-300">Services</a>
          <a href="/contact" className="text-white hover:text-[#43a8d4] transition-colors duration-300">Contact</a>
          <a href="/blog" className="text-white hover:text-[#43a8d4] transition-colors duration-300">Blog</a>
          <a href="/privacy-policy" className="text-white hover:text-[#43a8d4] transition-colors duration-300">Privacy Policy</a>
          <a href="/terms-of-service" className="text-white hover:text-[#43a8d4] transition-colors duration-300">Terms & Conditions</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://t.me/Kingaymen" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#43a8d4] transition-colors duration-300">
            <BsTelegram />
          </a>
          <a href="https://www.linkedin.com/in/aymen-jundi" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#43a8d4] transition-colors duration-300">
            <FaLinkedin />
          </a>
          <a href="https://github.com/AymenJundi" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#43a8d4] transition-colors duration-300">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/elkingaj7" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#43a8d4] transition-colors duration-300">
            <BsInstagram />
          </a>
        </div>

        {/* Contact Information */}
        <div className="flex flex-wrap justify-center mb-6">
          <div className="w-full sm:w-1/2 md:w-1/4">
            <p className="text-white text-[16px] mt-2">Phone: <a href="tel:+251964350841" className="text-white">+251964350841</a></p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <p className="text-white text-[16px] mt-2">Email: <a href="mailto:aymenjundi11@gmail.com" className="text-white">aymenjundi11@gmail.com</a></p>
          </div>
        </div>

        {/* Footer Content */}
        <div className="text-sm mt-4">
          <p>&copy; {new Date().getFullYear()} Rex Labs. All rights reserved.</p>
          <p className="mt-2">
            <a href="/privacy-policy" className="text-white hover:text-blue-600 transition-colors duration-300">Privacy Policy</a> | 
            <a href="/terms-of-service" className="text-white hover:text-blue-600 transition-colors duration-300"> Terms of Service</a>
          </p>
        </div>

        {/* Language Selector */}
        <div className="mt-6">
          <select className="bg-[#1746ff] text-white border-none">
            <option value="en">English</option>
            <option value="am">አማርኛ</option>
          </select>
        </div>

        {/* Back to Top Button */}
        <div className="mt-6">
          <a href="#" className="text-white hover:text-[#43a8d4] transition-colors duration-300">
            Back to Top
          </a>
        </div>

        {/* Contact Locations */}
        <div className="flex flex-wrap justify-between mt-6">
          <div className="w-full sm:w-1/2 md:w-1/4">
            <p className="text-white text-[16px]">Adama, Ethiopia</p>
            <p className="text-white text-[16px]">+251964350841</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <p className="text-white text-[16px] mt-4">Addis Ababa, Ethiopia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;