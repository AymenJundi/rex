import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../styles";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Technology Card Component
const TechnologyCard = ({ technology }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#1746ff', color: '#fff', borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    }}
    contentArrowStyle={{
      borderRight: '8px solid #2d3748',
    }}
    iconStyle={{ background: technology.iconBg, boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)' }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src={technology.icon} alt={technology.name} className="w-[60%] h-[60%] object-contain" />
      </div>
    }
  >
    <div className="text-center">
      <h3 className="text-white text-[26px] font-bold">{technology.name}</h3>
      <p className="text-[#edf2f7] text-[16px] font-semibold bg-[#edf2f7] inline-block px-4 py-2 rounded-full">
        {technology.description}
      </p>
    </div>

    {technology.features && technology.features.length > 0 && (
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {technology.features.map((feature, index) => (
          <li key={`technology-feature-${index}`} className="text-white text-[16px] pl-1 tracking-wider">
            {feature}
          </li>
        ))}
      </ul>
    )}
  </VerticalTimelineElement>
);

// Technologies Section
const Technologies = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-black font-bold`}>Skills & Expertise</p>
        <h2 className={`${styles.sectionHeadText} text-center text-white`}>Technologies We Use</h2>
        <p className="text-center text-black mt-4 text-lg font-medium italic">
          "Crafting innovative digital solutions with the power of cutting-edge technology."
        </p>
      </motion.div>

      <div className="mt-32 flex flex-col"> {/* Adjusted margin-top here to add space */}
        {/* Gradient Vertical Timeline */}
        <VerticalTimeline lineColor="transparent" className="custom-timeline">
          {technologies.map((technology, index) => (
            <TechnologyCard key={index} technology={technology} />
          ))}
        </VerticalTimeline>
      </div>

      <style jsx>{`
        .custom-timeline .vertical-timeline-element::before {
          background: linear-gradient(45deg, #61dafb, #00b5d8, #007bb5);
          border-radius: 5px;
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 100%;
          transition: background 0.3s ease-in-out;
        }

        .vertical-timeline-element:hover::before {
          background: linear-gradient(45deg, #0a74da, #ff9e2a, #61dafb);
        }

        .vertical-timeline-element-content {
          background: #2d3748;
          color: white;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .vertical-timeline-element-icon {
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </>
  );
};

export default SectionWrapper(Technologies, 'technologies');