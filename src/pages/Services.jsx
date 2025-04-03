import React, { useState } from 'react';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const toggleDescription = (service, event) => {
    event.preventDefault(); // Prevent scrolling to top
    if (activeService === service) {
      setActiveService(null); // Hide description if already active
    } else {
      setActiveService(service); // Show description of the clicked service
    }
  };

  return (
    <div className="bg-gray-100 py-24 sm:py-32">
      <div className="container mx-auto text-center">
        <h2 className="text-[#1746ff] text-3xl sm:text-4xl font-bold">Our Services</h2>
        <p className="text-[#333] text-lg sm:text-xl mt-4">
          We provide a variety of tech solutions to help your business grow, thrive, and adapt to the ever-evolving digital world.
        </p>

        {/* Service Cards */}
        <div className="flex flex-wrap justify-center mt-12 gap-8">

          {/* Web Development */}
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg border-2 border-[#1746ff]">
            <h3 className="text-2xl font-semibold text-[#1746ff]">Web Development</h3>
            <p className="text-[#333] mt-4">
              Our web development services create responsive, user-friendly websites that engage your audience and help you achieve your business goals.
            </p>
            <a
              href="#"
              onClick={(event) => toggleDescription('webDevelopment', event)}
              className="inline-block mt-6 px-6 py-3 bg-[#1746ff] text-white font-bold rounded-lg hover:bg-[#1236cc] transition cursor-pointer"
            >
              {activeService === 'webDevelopment' ? 'Show Less' : 'Learn More'}
            </a>
            {activeService === 'webDevelopment' && (
              <p className="mt-4 text-[#333]">
                Whether you need an e-commerce platform, a corporate website, or a custom web application, our team of experts ensures that your website is built with the latest technologies. We specialize in creating high-performance websites optimized for speed, accessibility, and search engines.
                <br />
                <br />
                A strong web presence enhances your brand's visibility, builds trust with your customers, and drives conversions. With our web development services, your business will benefit from a responsive, mobile-first approach that adapts to your customer's needs across devices.
              </p>
            )}
          </div>

          {/* Custom Software */}
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg border-2 border-[#1746ff]">
            <h3 className="text-2xl font-semibold text-[#1746ff]">Custom Software</h3>
            <p className="text-[#333] mt-4">
              We develop tailor-made software solutions that perfectly fit your business needs, ensuring seamless performance and efficiency.
            </p>
            <a
              href="#"
              onClick={(event) => toggleDescription('customSoftware', event)}
              className="inline-block mt-6 px-6 py-3 bg-[#1746ff] text-white font-bold rounded-lg hover:bg-[#1236cc] transition cursor-pointer"
            >
              {activeService === 'customSoftware' ? 'Show Less' : 'Learn More'}
            </a>
            {activeService === 'customSoftware' && (
              <p className="mt-4 text-[#333]">
                Our custom software development approach helps streamline your processes, increase automation, and improve productivity. We build systems that align with your vision and provide innovative solutions to your business challenges. From web apps to enterprise-level software, we handle it all with precision and care.
                <br />
                <br />
                With our custom solutions, your business can expect improved operational efficiency, reduced manual tasks, and enhanced collaboration across departments. We create software that not only meets your current needs but is also scalable to grow with your business.
              </p>
            )}
          </div>

          {/* API Development */}
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg border-2 border-[#1746ff]">
            <h3 className="text-2xl font-semibold text-[#1746ff]">API Development</h3>
            <p className="text-[#333] mt-4">
              We create robust, scalable APIs that enable your business to integrate seamlessly with third-party applications and services.
            </p>
            <a
              href="#"
              onClick={(event) => toggleDescription('apiDevelopment', event)}
              className="inline-block mt-6 px-6 py-3 bg-[#1746ff] text-white font-bold rounded-lg hover:bg-[#1236cc] transition cursor-pointer"
            >
              {activeService === 'apiDevelopment' ? 'Show Less' : 'Learn More'}
            </a>
            {activeService === 'apiDevelopment' && (
              <p className="mt-4 text-[#333]">
                Our API development services allow your platforms to easily communicate with external systems, enhancing connectivity and data flow. Whether it's RESTful APIs, GraphQL, or SOAP, we build high-performance APIs tailored to your needs. Secure, scalable, and easy to maintain, our APIs help your business grow by automating processes and connecting disparate systems.
                <br />
                <br />
                By implementing a solid API infrastructure, your business can integrate with various services, scale more effectively, and ensure smooth data exchange between platforms, making your operations more agile and cost-efficient.
              </p>
            )}
          </div>

          {/* SaaS Services */}
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg border-2 border-[#1746ff]">
            <h3 className="text-2xl font-semibold text-[#1746ff]">SaaS Services</h3>
            <p className="text-[#333] mt-4">
              We help you build, scale, and optimize Software as a Service (SaaS) solutions that bring your business to the cloud, increasing accessibility and scalability.
            </p>
            <a
              href="#"
              onClick={(event) => toggleDescription('saasServices', event)}
              className="inline-block mt-6 px-6 py-3 bg-[#1746ff] text-white font-bold rounded-lg hover:bg-[#1236cc] transition cursor-pointer"
            >
              {activeService === 'saasServices' ? 'Show Less' : 'Learn More'}
            </a>
            {activeService === 'saasServices' && (
              <p className="mt-4 text-[#333]">
                Our SaaS development services include everything from concept to deployment. We create scalable, secure, and user-friendly applications that your customers can access from anywhere. Our team ensures that your SaaS product is built with modern technology stacks, optimized for performance, and designed to scale as your business grows. Whether you're looking for CRM systems, project management tools, or any other SaaS product, we've got you covered.
                <br />
                <br />
                By moving your business processes to the cloud with SaaS, you'll benefit from increased accessibility, lower infrastructure costs, and a more streamlined workflow, allowing your business to scale rapidly and provide a better experience to your customers.
              </p>
            )}
          </div>

          {/* App Development */}
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg border-2 border-[#1746ff]">
            <h3 className="text-2xl font-semibold text-[#1746ff]">App Development</h3>
            <p className="text-[#333] mt-4">
              We design and develop custom mobile applications for iOS and Android platforms, ensuring seamless user experiences and cutting-edge performance.
            </p>
            <a
              href="#"
              onClick={(event) => toggleDescription('appDevelopment', event)}
              className="inline-block mt-6 px-6 py-3 bg-[#1746ff] text-white font-bold rounded-lg hover:bg-[#1236cc] transition cursor-pointer"
            >
              {activeService === 'appDevelopment' ? 'Show Less' : 'Learn More'}
            </a>
            {activeService === 'appDevelopment' && (
              <p className="mt-4 text-[#333]">
                Our app development services ensure your business stays connected to your customers through feature-rich mobile applications. We build apps that are intuitive, fast, and scalable. Our team of mobile app experts focuses on delivering seamless user experiences, whether you're building an e-commerce app, a service-based app, or any other type of mobile solution.
                <br />
                <br />
                By working with us, your business will be able to offer your customers a mobile platform that enhances engagement and provides better convenience, ultimately improving user satisfaction and boosting business growth.
              </p>
            )}
          </div>

          {/* System Development */}
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg border-2 border-[#1746ff]">
            <h3 className="text-2xl font-semibold text-[#1746ff]">System Development</h3>
            <p className="text-[#333] mt-4">
              We provide comprehensive system development services, helping you build secure, scalable, and efficient systems for your organization.
            </p>
            <a
              href="#"
              onClick={(event) => toggleDescription('systemDevelopment', event)}
              className="inline-block mt-6 px-6 py-3 bg-[#1746ff] text-white font-bold rounded-lg hover:bg-[#1236cc] transition cursor-pointer"
            >
              {activeService === 'systemDevelopment' ? 'Show Less' : 'Learn More'}
            </a>
            {activeService === 'systemDevelopment' && (
              <p className="mt-4 text-[#333]">
                Our system development services provide end-to-end solutions, from initial design to deployment. We focus on creating high-performance systems tailored to meet your business's specific needs. Our team works closely with you to understand your requirements and deliver systems that are scalable, secure, and efficient.
                <br />
                <br />
                By building robust systems, your business will be able to automate processes, reduce operational overheads, and scale more effectively, leading to greater success and growth.
              </p>
            )}
          </div>

        </div>

        {/* Contact and Description Section */}
        <div className="bg-[#1746ff] py-12 mt-16">
          <div className="container mx-auto text-center">
            <h2 className="text-white text-3xl sm:text-4xl font-bold">Contact Us</h2>
            <p className="text-white text-lg sm:text-xl mt-4">
              Have a project in mind? Get in touch with us today and let’s make it happen!
            </p>
            <a
              href="/contact"
              className="inline-block mt-6 px-6 py-3 bg-white text-[#1746ff] font-bold rounded-lg hover:scale-105 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;