import React, { useState, useEffect } from "react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { useInView } from 'react-intersection-observer';
import { FaLaptopCode, FaMobileAlt, FaCogs } from 'react-icons/fa';

const shapes = [
  { type: "circle", size: 20 },
  { type: "triangle", size: 30 },
  { type: "hexagon", size: 40 },
  { type: "polygon", size: 35 },
];

const colors = ["#1746ff", "#FFD700", "#FF0000"];

const getRandomValue = (max) => Math.random() * max;
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const getClipPath = (type) => {
  switch (type) {
    case "circle":
      return "circle(50%)";
    case "triangle":
      return "polygon(50% 0%, 0% 100%, 100% 100%)";
    case "hexagon":
      return "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";
    default:
      return "polygon(50% 0%, 100% 35%, 85% 100%, 15% 100%, 0% 35%)";
  }
};

const AnimatedShapes = () => {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {Array.from({ length: 50 }).map((_, i) => {
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const startX = getRandomValue(windowSize.width);
        const startY = getRandomValue(windowSize.height);
        const color = getRandomColor();

        return (
          <motion.div
            key={i}
            className="absolute opacity-40"
            style={{
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              backgroundColor: color,
              clipPath: getClipPath(shape.type),
            }}
            initial={{ x: startX, y: startY, opacity: 0.5 }}
            animate={{
              x: startX + Math.random() * 100 - 50,
              y: startY + Math.random() * 100 - 50,
              opacity: 1,
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
          />
        );
      })}
    </>
  );
};

const MissionVisionSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="w-full bg-white py-12 sm:py-16">
      <div className={`container mx-auto text-center transition-opacity duration-1000 ${inView ? "opacity-100" : "opacity-0"}`}>
        <h2 className="text-[#1746ff] text-3xl sm:text-4xl font-bold">Our Mission & Vision</h2>
        <p className="text-[#333] text-lg sm:text-xl mt-4 leading-relaxed">
          Our mission is to empower businesses through innovative, efficient, and scalable technology solutions. We aim to create a future where technology drives positive change.
        </p>
        <p className="text-[#333] text-lg sm:text-xl mt-4 leading-relaxed">
          Our vision is to be the leading provider of advanced software solutions that transform industries and shape the future of the digital world.
        </p>
      </div>
    </section>
  );
};

const ServiceCards = () => {
  return (
    <section className="w-full bg-gray-100 py-12 sm:py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-[#1746ff] text-3xl sm:text-4xl font-bold">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {/* Service Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1746ff] to-[#FFD700] opacity-70 group-hover:opacity-100 transition duration-500"></div>
            <div className="absolute inset-0 flex justify-center items-center z-10">
              <FaLaptopCode className="text-4xl text-[#1746ff]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#1746ff] relative z-10 mt-8">Website Development</h3>
            <p className="text-[#333] mt-4 relative z-10">We create custom websites that are both beautiful and functional to ensure your business stands out online.</p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FF0000] opacity-70 group-hover:opacity-100 transition duration-500"></div>
            <div className="absolute inset-0 flex justify-center items-center z-10">
              <FaMobileAlt className="text-4xl text-[#FFD700]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#1746ff] relative z-10 mt-8">App Development</h3>
            <p className="text-[#333] mt-4 relative z-10">Our mobile app development team specializes in building intuitive and user-friendly applications for both Android and iOS.</p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF0000] to-[#1746ff] opacity-70 group-hover:opacity-100 transition duration-500"></div>
            <div className="absolute inset-0 flex justify-center items-center z-10">
              <FaCogs className="text-4xl text-[#FF0000]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#1746ff] relative z-10 mt-8">System Development</h3>
            <p className="text-[#333] mt-4 relative z-10">We build scalable and secure systems to manage your business operations and drive growth through automation.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const EngagementModels = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-[#1746ff] text-3xl sm:text-4xl font-bold">Our Engagement Models</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {/* Engagement Model 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:border-[#1746ff] border-2 border-transparent group transition-all duration-300">
            <h3 className="text-2xl font-semibold text-[#1746ff] mb-4">Extended Team</h3>
            <p className="text-[#333] text-lg">
              Efficiently scale your core engineering team to meet business demands with flexibility and precision.
            </p>
          </div>

          {/* Engagement Model 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:border-[#1746ff] border-2 border-transparent group transition-all duration-300">
            <h3 className="text-2xl font-semibold text-[#1746ff] mb-4">Managed Team</h3>
            <p className="text-[#333] text-lg">
              Delegate critical parts of your product development to a self-sufficient, fully integrated engineering team aligned with your organization's workflow.
            </p>
          </div>

          {/* Engagement Model 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:border-[#1746ff] border-2 border-transparent group transition-all duration-300">
            <h3 className="text-2xl font-semibold text-[#1746ff] mb-4">Custom Solution Development</h3>
            <p className="text-[#333] text-lg">
              Resolve complex business challenges with end-to-end, innovative software solutions tailored to your specific needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Hero = () => {
  return (
    <>
      <section className="relative w-full h-auto mx-auto bg-white overflow-visible flex flex-col items-center">
        <div className="absolute inset-0 w-full h-full overflow-visible">
          <AnimatedShapes />
        </div>

        <div className="relative z-10 p-8 border-4 border-[#1746ff] rounded-lg shadow-xl w-full max-w-3xl sm:mt-30 mt-10">
          <h1 className="text-[#1746ff] text-4xl sm:text-5xl font-extrabold text-center">
            Building the Future of Software
          </h1>
          <p className="text-[#333] text-lg sm:text-xl mt-4 leading-relaxed text-center">
            We deliver innovative, scalable, and reliable software solutions to help your business succeed in the digital world.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-6 justify-center">
            <a
              href="/contact"
              className="px-6 py-3 bg-[#1746ff] text-white font-bold rounded-lg hover:bg-[#1236cc] transition w-full sm:w-auto text-center"
            >
              Contact Us
            </a>
            <a
              href="/about"
              className="px-6 py-3 border-2 border-[#1746ff] text-black font-bold rounded-lg hover:bg-[#1746ff] hover:text-white transition w-full sm:w-auto text-center"
            >
              Learn More
            </a>
          </div>

          <div className="flex gap-4 mt-6 text-[#1746ff] text-3xl justify-center">
            <a
              href="https://www.linkedin.com/in/aymen-jundi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0e76a8] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/aymenjundi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3b5998] transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://t.me/aymenjundi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0088cc] transition"
            >
              <BsTelegram />
            </a>
          </div>
        </div>
      </section>

      <MissionVisionSection />
      <ServiceCards />
      <EngagementModels />
    </>
  );
};

export default SectionWrapper(Hero);