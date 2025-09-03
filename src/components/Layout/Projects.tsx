import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Portafolio Web",
    image: "../../../src/assets/images/project1.png",
    description:
      "Mi portafolio personal desarrollado con React, Tailwind y animaciones modernas.",
    techs: ["React", "Tailwind", "Framer Motion"],
    repo: "https://github.com/usuario/portafolio",
  },
  {
    title: "API de Tareas",
    image: "../../../src/assets/images/project2.png",
    description:
      "API RESTful para gestión de tareas, autenticación JWT y despliegue en la nube.",
    techs: ["Node.js", "Express", "MongoDB", "JWT"],
    repo: "https://github.com/usuario/api-tasks",
  },
  {
    title: "App de Clima",
    image: "../../../src/assets/images/project3.png",
    description:
      "Aplicación móvil para consultar el clima en tiempo real usando Flutter y OpenWeather.",
    techs: ["Flutter", "Dart", "OpenWeather"],
    repo: "",
  },
  // Agrega más proyectos aquí...
];

const Projects = () => {
  return (
    <section
      id="proyectos"
      className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 py-16 px-4"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 text-center">
        Proyectos
        {/* <span className="block w-32 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-300"></span> */}
      </h2>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ scale: 1.045 }}
            className="group relative rounded-2xl p-1 bg-transparent transition-transform duration-300"
          >
            {/* Glow gradiente detrás */}
            <div className="absolute inset-0 z-0 rounded-2xl pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-full h-full rounded-2xl blur-2xl" style={{background: 'linear-gradient(120deg, #38bdf8 0%, #5eead4 100%)', opacity: 0.7}}></div>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 z-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-border bg-gradient-to-tr from-cyan-400 via-sky-400 to-emerald-300"></div>
              <div className="relative bg-[#181f2a] rounded-2xl h-full flex flex-col items-start shadow-lg group-hover:shadow-2xl transition-all duration-300 min-h-[430px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-t-2xl mb-4 border-b border-gray-800"
                  style={{ background: "#232946" }}
                />
                <div className="p-5 flex flex-col flex-1 w-full">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="text-gray-900 text-xs font-medium px-3 py-1 rounded-lg"
                        style={{backgroundColor: 'rgba(94, 234, 212, 0.6)'}}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-300 text-gray-900 font-semibold shadow hover:scale-105 transition-transform duration-200"
                    >
                      <Github className="w-5 h-5" />
                      Repositorio
                    </a>
                  ) : (
                    <div style={{height: '44px'}}></div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
