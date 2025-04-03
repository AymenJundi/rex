import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    project: "",
  });
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_yelggji", // Your service ID
        "template_a0rp9xj", // Your template ID
        formRef.current, // Form reference
        "LVywTz8YEPON3mC4E" // Your public key
      )
      .then(
        () => {
          setLoading(false);
          setFormStatus("Thank you for applying! We will get back to you soon.");
          setForm({ name: "", email: "", message: "", project: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setFormStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="bg-white text-gray-900 py-16 px-4 mt-12" id="contact">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold text-[#1746ff] text-center mb-6">Get In Touch</h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Have a project in mind or just want to say hi? Drop us a message below!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#1746ff] mb-6">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
              <label className="flex flex-col">
                <span className="text-[#1746ff] font-medium">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="bg-white py-3 px-4 border border-gray-300 rounded-lg"
                  required
                />
              </label>

              <label className="flex flex-col">
                <span className="text-[#1746ff] font-medium">Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="bg-white py-3 px-4 border border-gray-300 rounded-lg"
                  required
                />
              </label>

              <label className="flex flex-col">
                <span className="text-[#1746ff] font-medium">Project Details</span>
                <input
                  type="text"
                  name="project"
                  value={form.project}
                  onChange={handleChange}
                  placeholder="Tell us about your project"
                  className="bg-white py-3 px-4 border border-gray-300 rounded-lg"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-[#1746ff] font-medium">Your Message</span>
                <textarea
                  rows="4"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="bg-white py-3 px-4 border border-gray-300 rounded-lg"
                  required
                />
              </label>

              <button type="submit" className="bg-[#1746ff] text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600  transition">
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {formStatus && (
              <p className={`mt-4 ${formStatus.includes("successful") ? "text-green-500" : "text-red-500"}`}>
                {formStatus}
              </p>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#1746ff] mb-4">Contact Details</h3>
              <div className="flex items-center space-x-4 mb-3">
                <FaEnvelope className="text-[#1746ff]" />
                <p className="text-gray-600"><strong>Email:</strong> aymenjundi11@gmail.com</p>
              </div>
              <div className="flex items-center space-x-4 mb-3">
                <FaPhone className="text-[#1746ff]" />
                <p className="text-gray-600"><strong>Call Us:</strong> 0964350841</p>
              </div>
              <div className="flex items-center space-x-4 mb-3">
                <FaClock className="text-[#1746ff]" />
                <p className="text-gray-600"><strong>Office Time:</strong> Monday to Saturday 9:00am - 6:00pm</p>
              </div>
              <div className="flex items-center space-x-4 mb-3">
                <FaMapMarkerAlt className="text-[#1746ff]" />
                <p className="text-gray-600"><strong>Address:</strong>  Addis Ababa, Ethiopia</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/AymenJundi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#1746ff] text-2xl">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#1746ff] text-2xl">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#1746ff] text-2xl">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

