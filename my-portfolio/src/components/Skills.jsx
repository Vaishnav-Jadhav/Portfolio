export function Skills() {
  const Skills = [
    { img: "images/html-5.svg", name: "HTML" },
    { img: "images/css3.svg", name: "CSS3" },
    { img: "images/javascript.svg", name: "JavaScript" },
    { img: "images/reactjs.svg", name: "React" },
    { img: "images/java.svg", name: "Java" },
    { img: "images/tailwindcss.svg", name: "Tailwind CSS" },
    { img: "images/angular.svg", name: "Angular" },
    { img: "images/nodejs.svg", name: "Node JS" },
    { img: "images/bootstrap.svg", name: "Bootstrap" },
    { img: "images/git.svg", name: "Git" },
    { img: "images/typescript.svg", name: "Typescript" },
    { img: "images/laravel.svg", name: "Laravel" },
  ];

  return (
    <div className="min-h-screen text-white bg-[#0b090a] px-6 md:px-12 lg:px-20">
      <div className="container mx-auto flex flex-col items-center justify-center" id="skills">
        <h1 className="text-center text-6xl sm:text-7xl py-6 md:py-12 lg:py-20">
          Skills..
        </h1>
      </div>

      <div className="px-6 md:px-12 lg:px-20 py-6 md:py-12 lg:py-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {Skills.map((value, index) => (
          <div key={index} className="relative group overflow-hidden rounded-xl shadow-md border border-gray-700 cursor-pointer z-1 p-4">
            {/* Skill Image */}
            <img src={value.img} alt={value.name} title={value.name} className="w-full h-32 object-contain transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay with centered text */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 text-center">
              <p className="text-lg font-semibold translate-y-6 group-hover:translate-y-0 transition-all duration-300">
                {value.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
