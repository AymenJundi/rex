import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import menu from "/src/assets/menu.svg";
import close from "/src/assets/close.svg";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);

      let currentActive = "";
      navLinks.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentActive = id;
          } else if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            currentActive = id;
          }
        }
      });
      setActive(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full fixed top-0 z-20 flex items-center justify-between py-5 transition-all duration-300 ${
        scrolled ? "bg-[#1746ff] shadow-lg border-none" : "bg-[#1746ff] border-none"
      }`}
      style={{ borderRadius: "0px" }}
    >
      <div className="flex items-center gap-2 z-30">
        <Link to="/" className="flex items-center gap-2" onClick={() => {
          setActive(" ");
          window.scrollTo(0, 0);
        }}>
          <img src="./assets/rex.png" alt="Rex Labs Logo" className="w-8 h-8 sm:w-12 sm:h-12 object-contain" />
          <p className="text-white text-[18px] sm:text-[28px] font-bold cursor-pointer">Rex Labs</p>
        </Link>
      </div>

      <div className="flex items-center gap-10">
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map(({ id, title }) => (
            <li key={id} className="relative">
              <Link to={`/${id}`} onClick={() => setActive(id)} className={`text-white text-[13px] sm:text-[15px] font-semibold cursor-pointer transition-all duration-300 relative ${active === id ? "underline underline-offset-4" : ""}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden sm:flex gap-4">
          <a href="https://www.linkedin.com/in/aymen-jundi" target="_blank" rel="noopener noreferrer" className="text-white text-2xl sm:text-xl hover:text-[#00c8ff] transition-colors duration-300">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl sm:text-xl hover:text-[#00c8ff] transition-colors duration-300">
            <FaFacebook />
          </a>
          <a href="https://t.me/Kingaymen" target="_blank" rel="noopener noreferrer" className="text-white text-2xl sm:text-xl hover:text-[#00c8ff] transition-colors duration-300">
            <BsTelegram />
          </a>
        </div>
      </div>

      <div className="sm:hidden flex justify-end items-center relative z-30">
        <img src={toggle ? close : menu} alt="menu" className="object-contain w-[28px] h-[28px] cursor-pointer" onClick={() => setToggle(!toggle)} />
        
        <div className={`fixed top-0 left-0 h-full w-[70%] bg-[#1746ff] transform ${toggle ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-20 shadow-lg p-6`} style={{ borderRadius: "0px" }}>
          <div className="flex items-center gap-2 mb-6">
            <img src="./assets/rex.png" alt="Rex Labs Logo" className="w-10 h-10 object-contain" />
            <p className="text-white text-[20px] font-bold">Rex Labs</p>
          </div>
          <ul className="list-none flex flex-col gap-6 mb-6">
            {navLinks.map(({ id, title }) => (
              <li key={id} className="relative">
                <Link to={`/${id}`} onClick={() => {
                  setToggle(false);
                  setActive(id);
                }} className={`text-white font-medium text-[18px] sm:text-[16px] cursor-pointer transition-all duration-300 relative ${active === id ? "underline underline-offset-4" : ""}`}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/aymen-jundi" target="_blank" rel="noopener noreferrer" className="text-white text-2xl sm:text-xl hover:text-[#00c8ff] transition-colors duration-300">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl sm:text-xl hover:text-[#00c8ff] transition-colors duration-300">
              <FaFacebook />
            </a>
            <a href="https://t.me/Kingaymen" target="_blank" rel="noopener noreferrer" className="text-white text-2xl sm:text-xl hover:text-[#00c8ff] transition-colors duration-300">
              <BsTelegram />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
