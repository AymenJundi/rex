import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';  // For the arrow down icon

const FAQ = () => {
  return (
    <div className="bg-white text-gray-900 py-16 px-8 mt-16">
      {/* FAQ Header */}
      <div className="text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Find answers to some common questions below.
        </motion.p>
      </div>

      {/* FAQ Section */}
      <div className="mt-12 space-y-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:bg-gray-200">
          <h3 className="text-2xl font-semibold">What is Rex Labs?</h3>
          <p className="text-gray-600 mt-2">Rex Labs is a tech company specializing in web development and providing innovative web solutions.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:bg-gray-200">
          <h3 className="text-2xl font-semibold">How can I contact you?</h3>
          <p className="text-gray-600 mt-2">You can contact us through the contact form on our website or by emailing support@rexlabs.com.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:bg-gray-200">
          <h3 className="text-2xl font-semibold">What services do you offer?</h3>
          <p className="text-gray-600 mt-2">We offer web development, UI/UX design, and digital marketing services to help businesses grow online.</p>
        </div>
      </div>

      {/* Down Arrow Indicator */}
      <div className="flex justify-center mt-16">
        <motion.div
          className="flex items-center justify-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="text-gray-600">Scroll down for more</p>
          <FaArrowDown className="text-blue-500 animate-bounce" size={24} />
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;