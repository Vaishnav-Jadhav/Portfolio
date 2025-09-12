import React from "react";

const projects = [
  {
    name: "Outsorced Financial Services Website",
    description: "The OFS Project is a web-based application designed to help Chartered Accountants and their teams manage client interactions, queries, and documents more efficiently.",
    image: "Projects/ofs.png", 
    github: "https://ofs.org.in",
    viewMode: "Go Live"
  },
  {
    name: "Callerbot",
    description: "it's an AI-powered calling agent. I independently built the entire Landing Page with smooth animation for this project, ensuring a smooth and responsive user interface.",
    image: "Projects/callerbot.png",
    github: "https://callerbot.io/",
    viewMode: "Go Live"
  },
  {
    name: "Letzstepin",
    description: "Developed a fully functional web application using React, enhancing user experience through interactive features and smooth transitions. Implemented React Router for efficient client-side navigation, optimizing load times and improving user engagement.",
    image: "Projects/letzstepin.png",
    github: "https://letzstepin-site.vercel.app/",
    viewMode: "Go Live"
  },
  {
    name: "Going Macro",
    description: "Developed a clone of the Going Macro UI using React, implementing component-based architecture for maintainability and scalability. Implemented interactive components and state management in ReactJS, optimizing performance and improving load times by 30% Designed responsive layouts with Tailwind CSS,",
    image: "Projects/goingMacro.png", 
    github: "https://going-macro.vercel.app/",
    viewMode: "Go Live"
  },
  {
    name: "React-filtering-system",
    description: "Developed a dynamic product filtering System using ReactJS, enabling users to filter products by price, color, and category with seamless interaction. Achieved a 30% improvement in user satisfaction by implementing real-time filtering with React",
    image: "Projects/react-filtering-system.png",
    github: "https://react-filtering-system.vercel.app/",
    viewMode: "Go Live"
  },
  {
    name: "Galaxy Magic",
    description: "Through the website, I gained valuable insights on how to effectively implement animation libraries into projects. This experience provided me with practical, real-world knowledge and enhanced my technical skills.",
    image: "Projects/Galaxy.png",    
    github: "https://galaxy-web.vercel.app/",
    viewMode: "Go Live"
  },
];

export function Projects() {
  return (
    <section className="bg-black text-white pb-15 px-4" id="projects">
      <h2 className="text-6xl sm:text-7xl py-6 md:py-12 lg:py-20 font-normal text-center">Projects</h2>
      
      <div className="max-w-8xl mx-auto lg:mx-[100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#0b0f14] backdrop-blur-md rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src={project.image} alt={project.name} className="w-full h-56 object-cover"/>
            <div className=" lg:p-6 p-3">
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-300 mb-4 text-xl">{project.description}</p>
              <a href={project.github} className="inline-block px-4 py-2 w-full text-center bg-red-500 text-white font-medium rounded hover:bg-red-400 transition-colors">
                {project.viewMode}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
