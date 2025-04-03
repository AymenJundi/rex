import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";

const Careers = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    coverLetter: "",
    resume: null,
  });
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setForm({ ...form, resume: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_yelggji",
        "template_a0rp9xj",
        formRef.current,
        "LVywTz8YEPON3mC4E"
      )
      .then(
        () => {
          setLoading(false);
          setFormStatus("Thank you for applying! We will get back to you soon.");
          setForm({ name: "", email: "", coverLetter: "", resume: null });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setFormStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="bg-white text-gray-900 py-16 px-4 mt-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#1746ff] mb-6">Join Our Team</h2>
        <p className="text-xl text-gray-500 mb-10">
          At Rex Labs, we're looking for passionate individuals eager to make an impact in the tech world. Explore our open positions and join our team.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Job Listing */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#1746ff] mb-4">Frontend Developer</h3>
            <p className="text-gray-700 mb-4">
              As a Frontend Developer at Rex Labs, you will work on cutting-edge projects using React and TailwindCSS.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>ReactJS, JavaScript, and CSS expertise.</li>
              <li>Experience with responsive design using TailwindCSS.</li>
              <li>Passion for clean, efficient, and maintainable code.</li>
            </ul>
            <a href="#apply-now" className="inline-block bg-[#1746ff] text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600  transition-colors">
              Apply Now
            </a>
          </div>

          {/* Company Culture */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#1746ff] mb-4">Why Rex Labs?</h3>
            <p className="text-gray-700 mb-4">
              We foster a collaborative environment where creativity, innovation, and learning thrive.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Innovative projects in a fast-paced tech environment.</li>
              <li>Collaborative team culture and knowledge sharing.</li>
              <li>Work-life balance with flexible schedules.</li>
            </ul>
          </div>
        </div>

        {/* How to Apply Section */}
        <div className="mt-16" id="apply-now">
          <h3 className="text-2xl font-semibold text-[#1746ff] mb-6">How to Apply</h3>
          <p className="text-gray-700 mb-6">
            Interested in joining us? Fill out the form below and upload your resume.
          </p>

          {/* Application Form */}
          <div className="bg-white p-8 shadow-lg rounded-lg border border-gray-200">
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
              <label className="flex flex-col">
                <span className="mb-2 text-[#1746ff] font-medium">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="bg-white py-4 px-6 text-[#1746ff] rounded-lg border border-gray-300 font-medium"
                  required
                />
              </label>

              <label className="flex flex-col">
                <span className="mb-2 text-[#1746ff] font-medium">Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="bg-white py-4 px-6 text-[#1746ff] rounded-lg border border-gray-300 font-medium"
                  required
                />
              </label>

              <label className="flex flex-col">
                <span className="mb-2 text-[#1746ff] font-medium">Cover Letter</span>
                <textarea
                  rows="5"
                  name="coverLetter"
                  value={form.coverLetter}
                  onChange={handleChange}
                  placeholder="Why are you a great fit?"
                  className="bg-white py-4 px-6 text-[#1746ff] rounded-lg border border-gray-300 font-medium"
                  required
                />
              </label>

              <label className="flex flex-col">
                <span className="mb-2 text-[#1746ff] font-medium">Upload Resume</span>
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  className="bg-white py-4 px-6 text-[#1746ff] rounded-lg border border-gray-300 font-medium"
                  required
                />
              </label>

              <button type="submit" className="bg-[#1746ff] text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-600  transition-colors">
                {loading ? "Sending..." : "Submit Application"}
              </button>
            </form>

            {formStatus && <p className="mt-6 text-center text-[#1746ff]">{formStatus}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Careers, "careers");