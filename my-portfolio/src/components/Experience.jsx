import { motion } from "framer-motion";

export function Experience() {
  const experiences = [
    {
      company: "Angel Infotech Pvt Ltd.",
      role: "Jr Software Developer",
      description:
        "During my internship at Angel Infotech, I gained comprehensive, hands-on experience in web development, contributing to the full lifecycle of multiple live projects from development to deployment. I focused on building and maintaining modular, reusable frontend components with React.js while ensuring high standards of performance and scalability. I also collaborated with senior engineers on code reviews and followed clean code principles, directly contributing to live product launches and pre-release testing.",
    },
    {
      company: "Freelance Project: Outsourced Financial Services (OFS)",
      role: "Jr Software Developer",
      description:
        "As my first freelance project, I was the sole frontend developer for a two-member team that successfully delivered a full-stack website for a startup CA firm. This experience allowed me to build a complete frontend from scratch, gaining confidence in creating responsive and scalable interfaces. I also developed key client-facing skills, from gathering initial requirements to ensuring the final product met their expectations, resulting in successful delivery and high client satisfaction.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#0b0f14] text-white px-6 md:px-12 lg:px-20 py-16">
      <h2
        className="text-center text-6xl md:text-7xl font-normal mb-16"
        id="experience"
      >
        Experience
      </h2>

      <div className="grid gap-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-black backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-8 md:p-10 grid md:grid-cols-2 gap-8 items-start hover:shadow-2xl transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }} // when scrolling up, re-animates
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: false, amount: 0.2 }} // animate both up & down
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold mb-3">
                {exp.company}
              </h3>
              <p className="text-lg text-red-600 font-medium">{exp.role}</p>
            </div>

            <p className="text-base md:text-xl leading-relaxed text-gray-300">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
