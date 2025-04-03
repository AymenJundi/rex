import React, { useState } from 'react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const toggleDescription = (project) => {
    setActiveProject(activeProject === project ? null : project);
  };

  const projects = [
    { id: 1, title: 'Project One', image: './assets/project.png', description: 'Description for project one.' },
    { id: 2, title: 'Project Two', image: './assets/project.png', description: 'Description for project two.' },
    { id: 3, title: 'Project Three', image: './assets/project.png', description: 'Description for project three.' },
    { id: 4, title: 'Project Four', image: './assets/project.png', description: 'Description for project four.' },
    { id: 5, title: 'Project Five', image: './assets/project.png', description: 'Description for project five.' },
    { id: 6, title: 'Project Six', image: './assets/project.png', description: 'Description for project six.' },
    { id: 7, title: 'Project Seven', image: './assets/project.png', description: 'Description for project seven.' },
    { id: 8, title: 'Project Eight', image: './assets/project.png', description: 'Description for project eight.' },
    { id: 9, title: 'Project Nine', image: './assets/project.png', description: 'Description for project nine.' },
  ];

  return (
    <div className="bg-gray-100 py-24 sm:py-32">
      <div className="container mx-auto text-center">
        <h2 className="text-[#1746ff] text-3xl sm:text-4xl font-bold">Our Projects</h2>
        <p className="text-[#333] text-lg sm:text-xl mt-4">
          Explore our latest projects showcasing our expertise in web development.
        </p>

        <div className="flex flex-wrap justify-center mt-12 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg border-2 border-[#1746ff] transition transform hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => toggleDescription(project.id)}
            >
              <div className="relative w-full h-48 overflow-hidden rounded-lg">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" />
              </div>
              <h3 className="text-2xl font-semibold text-[#1746ff] mt-4">{project.title}</h3>
              <button
                className="mt-6 px-6 py-3 bg-[#1746ff] text-white font-bold rounded-lg hover:bg-[#1236cc] transition"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDescription(project.id);
                }}
              >
                {activeProject === project.id ? 'Show Less' : 'Learn More'}
              </button>
              {activeProject === project.id && (
                <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-inner transition-opacity duration-300 opacity-100">
                  <p className="text-[#333]">{project.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
