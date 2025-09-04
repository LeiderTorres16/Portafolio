import { useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { FaReact, FaNodeJs, FaDatabase, FaCloud, FaMobileAlt, FaMapMarkedAlt } from "react-icons/fa";
import { SiExpress, SiMongodb, SiFlutter, SiDart, SiFramer, SiNextdotjs  } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";

const projects = [
  {
    title: "Portafolio Web",
    image: "/images/Portafolio.png",
    description:
      "Portafolio web profesional desarrollado con React y Tailwind CSS, diseñado para destacar mi experiencia, habilidades y proyectos de manera visual y moderna. Incluye navegación suave, animaciones, menú lateral interactivo, sección de contacto con formulario funcional y descarga de CV en varios idiomas. El diseño es completamente responsive y está optimizado para una experiencia de usuario atractiva y accesible en cualquier dispositivo.",
    techs: ["React", "Tailwind", "Framer Motion"],
    repo: "https://github.com/LeiderTorres16/Portafolio",
  },
  {
    title: "App de Rick and Morty",
    image: "/images/Rick_and_Morty.jpg",
    description:
      "Este proyecto es una aplicación web desarrollada con Next.js y React para visualizar personajes de la serie Rick and Morty. Utiliza Leaflet para mostrar un mapa interactivo de Colombia con marcadores en Valledupar y Bogotá. Además, se puede agregar y eliminar personajes a la lista de favoritos y hacer estas modificaciones persistentes utilizando localStorage.",
    techs: ["Mapa", "NextJS", "API", "Tailwind"],
    repo: "https://github.com/LeiderTorres16/rick-and-morty-app",
  },
  {
    title: "Movie Management App",
    image: "/images/movie.jpg",
    description:
      "Este proyecto es un panel de películas que utiliza la API de TMDB (The Movie Database) para mostrar una lista de películas, permitir búsquedas, filtrar resultados por idioma, región y año, ademas de crear listas y añadir peliculas a esta, ademas se usa la autenticación de usuarios propia de la API de TMDB para gestionar las listas de peliculas de cada usuario.",
    techs: ["React", "API", "Tailwind"],
    repo: "https://github.com/LeiderTorres16/movie-management-app",
  },
];

const Projects = () => {
  const [modal, setModal] = useState<{ open: boolean; project: any | null }>({ open: false, project: null });
  return (
    <section
      id="proyectos"
      className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 py-16 px-4"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 text-center">
        Proyectos
      </h2>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            custom={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 + i * 0.2, ease: [0.42, 0, 0.58, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.045 }}
            className="group relative rounded-2xl p-1 bg-transparent transition-transform duration-300 cursor-pointer"
            style={{ maxHeight: 430, minHeight: 430 }}
            onClick={() => setModal({ open: true, project })}
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techs.slice(0, 3).map((tech) => {
                      let Icon = null;
                      if (tech.toLowerCase().includes("react")) Icon = FaReact;
                      else if (tech.toLowerCase().includes("node")) Icon = FaNodeJs;
                      else if (tech.toLowerCase().includes("express")) Icon = SiExpress;
                      else if (tech.toLowerCase().includes("mongo")) Icon = SiMongodb;
                      else if (tech.toLowerCase().includes("jwt")) Icon = FaDatabase;
                      else if (tech.toLowerCase().includes("flutter")) Icon = SiFlutter;
                      else if (tech.toLowerCase().includes("dart")) Icon = SiDart;
                      else if (tech.toLowerCase().includes("openweather")) Icon = FaCloud;
                      else if (tech.toLowerCase().includes("framer")) Icon = SiFramer;
                      else if (tech.toLowerCase().includes("database")) Icon = FaDatabase;
                      else if (tech.toLowerCase().includes("mobile")) Icon = FaMobileAlt;
                      else if (tech.toLowerCase().includes("tailwind")) Icon = BiLogoTailwindCss;
                      else if (tech.toLowerCase().includes("map")) Icon = FaMapMarkedAlt ;
                      else if (tech.toLowerCase().includes("nextjs")) Icon = SiNextdotjs;
                      else if (tech.toLowerCase().includes("api")) Icon = FaCloud;
                      return (
                        <span
                          key={tech}
                          className="flex items-center gap-1 text-gray-900 text-xs font-medium px-3 py-1 rounded-lg"
                          style={{backgroundColor: '#5eead499'}}>
                          {Icon && <Icon className="w-4 h-4" />}
                          {tech}
                        </span>
                      );
                    })}
                    {project.techs.length > 3 && (
                      <span className="flex items-center gap-1 text-gray-900 text-xs font-medium px-3 py-1 rounded-lg bg-[#5eead499]">
                        +{project.techs.length - 3}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p
                    className="text-gray-300 text-sm mb-4 flex-1 overflow-hidden text-ellipsis"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'normal',
                      maxHeight: '4.5em',
                    }}
                  >
                    {project.description}
                  </p>
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-300 text-gray-900 font-semibold shadow hover:scale-105 transition-transform duration-200"
                      onClick={e => e.stopPropagation()}
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
      {modal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setModal({ open: false, project: null })}>
          <div className="bg-[#181f2a] rounded-2xl shadow-2xl p-8 max-w-lg w-full relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-3 right-3 text-gray-400 hover:text-cyan-400 text-2xl font-bold" onClick={() => setModal({ open: false, project: null })}>&times;</button>
            {modal.project && (
              <>
                <img src={modal.project.image} alt={modal.project.title} className="w-full h-40 object-cover rounded-xl mb-4 border-b border-gray-800" style={{ background: "#232946" }} />
                <h3 className="text-2xl font-bold text-white mb-2">{modal.project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {modal.project.techs.map((tech: string) => {
                    let Icon = null;
                    if (tech.toLowerCase().includes("react")) Icon = FaReact;
                    else if (tech.toLowerCase().includes("node")) Icon = FaNodeJs;
                    else if (tech.toLowerCase().includes("express")) Icon = SiExpress;
                    else if (tech.toLowerCase().includes("mongo")) Icon = SiMongodb;
                    else if (tech.toLowerCase().includes("jwt")) Icon = FaDatabase;
                    else if (tech.toLowerCase().includes("flutter")) Icon = SiFlutter;
                    else if (tech.toLowerCase().includes("dart")) Icon = SiDart;
                    else if (tech.toLowerCase().includes("openweather")) Icon = FaCloud;
                    else if (tech.toLowerCase().includes("framer")) Icon = SiFramer;
                    else if (tech.toLowerCase().includes("database")) Icon = FaDatabase;
                    else if (tech.toLowerCase().includes("mobile")) Icon = FaMobileAlt;
                    else if (tech.toLowerCase().includes("tailwind")) Icon = BiLogoTailwindCss;
                    else if (tech.toLowerCase().includes("map")) Icon = FaMapMarkedAlt ;
                    else if (tech.toLowerCase().includes("nextjs")) Icon = SiNextdotjs;
                    else if (tech.toLowerCase().includes("api")) Icon = FaCloud;
                    return (
                      <span
                        key={tech}
                        className="flex items-center gap-1 text-gray-900 text-xs font-medium px-3 py-1 rounded-lg"
                        style={{backgroundColor: 'rgba(94, 234, 212, 0.6)'}}>
                        {Icon && <Icon className="w-4 h-4" />}
                        {tech}
                      </span>
                    );
                  })}
                </div>
                <p className="text-gray-300 text-base mb-4">{modal.project.description}</p>
                {modal.project.repo && (
                  <a
                    href={modal.project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-300 text-gray-900 font-semibold shadow hover:scale-105 transition-transform duration-200"
                  >
                    <Github className="w-5 h-5" />
                    Repositorio
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
