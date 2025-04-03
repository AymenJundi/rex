import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";

const CEO = () => {
  return (
    <div className="flex flex-col items-center mt-16 px-4">
      <motion.div variants={fadeIn("up", "spring", 0.5, 1)} className="text-center">
        <img
          src="./assets/rex.png"
          alt="Aymen Jundi"
          className="w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover mb-6 mx-auto shadow-xl"
        />
        <h3 className="text-[#1746ff] text-2xl sm:text-3xl font-bold">Aymen Jundi</h3>
        <p className="text-[#333] mt-4 text-base sm:text-lg max-w-3xl mx-auto px-2 sm:px-0">
          CEO and Founder of Rex Labs. I am deeply committed to advancing technology solutions that bring meaningful change. With a passion for software development, I lead Rex Labs in building top-tier products designed to empower businesses and individuals.
        </p>
      </motion.div>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    { name: "John Doe", role: "Lead Developer", img: "./assets/rex.png" },
    { name: "Jane Smith", role: "Product Manager", img: "./assets/rex.png" },
    { name: "Mike Johnson", role: "UI/UX Designer", img: "./assets/rex.png" },
    { name: "Sarah Lee", role: "Marketing Director", img: "./assets/rex.png" }
  ];

  return (
    <div className="mt-16 text-center px-4">
      <motion.div variants={fadeIn("up", "spring", 0.5, 1)}>
        <p className={styles.sectionSubText}>Meet Our Team</p>
        <h2 className={styles.sectionHeadText}>Our Talented Team</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 justify-center">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", 0.5, 1)}
            className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img src={member.img} alt={member.name} className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-semibold text-[#1746ff]">{member.name}</h3>
            <p className="text-[#333]">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const TechStack = () => {
  return (
    <div className="mt-16 text-center px-4">
      <motion.div variants={fadeIn("up", "spring", 0.5, 1)}>
        <p className={styles.sectionSubText}>Our Tools</p>
        <h2 className={styles.sectionHeadText}>Tech Stack</h2>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
        {[
          { Icon: FaReact, color: "text-blue-600", name: "React" },
          { Icon: FaHtml5, color: "text-orange-600", name: "HTML5" },
          { Icon: FaCss3Alt, color: "text-blue-500", name: "CSS3" },
          { Icon: FaNodeJs, color: "text-green-600", name: "Node.js" }
        ].map(({ Icon, color, name }, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:bg-[#1746ff] hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <Icon className={`text-5xl sm:text-6xl mx-auto ${color}`} />
            <p className="mt-4 text-lg sm:text-xl font-semibold">{name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section className="relative w-full h-auto py-16 px-4 sm:px-8 bg-white overflow-hidden">
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Rex Labs</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("left", "spring", 0.5, 1)}
        className="mt-4 text-[#333] text-base sm:text-lg max-w-3xl leading-6 sm:leading-[30px] mx-auto"
      >
        Rex Labs is a cutting-edge software development company focused on creating innovative and reliable solutions. Our mission is to transform ideas into functional software that empowers businesses.
        <br />
        <br />
        Our team of skilled developers, designers, and product managers works tirelessly to deliver excellence. We collaborate with clients across various industries, helping them solve complex problems with innovative solutions.
      </motion.p>

      <CEO />
      <Team />
      <TechStack />
    </section>
  );
};

export default SectionWrapper(About, "about");
