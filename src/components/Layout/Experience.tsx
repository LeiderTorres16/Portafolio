import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Desarrollador Angular",
    company: "GlobalEDB",
    period: "Enero 2022 – enero 2024",
    description:
      "Diseño y desarrollo de interfaces web utilizando Angular, con enfoque en la construcción de componentes reutilizables, escalables y fáciles de mantener. Aplicación de buenas prácticas de desarrollo para asegurar un código limpio y estructurado. Implementación de maquetación responsive para garantizar una experiencia de usuario fluida y accesible en diversos dispositivos y resoluciones. Participación en tareas de integración con backend y diseño visual de elementos interactivos. Creación de banners, piezas visuales y contenido gráfico orientado a mejorar la estética y la interacción de las plataformas.",
    link: "https://www.globaledb.com",
  },
  {
    role: "Desarrollador ReactJS",
    company: "GlobalEDB",
    period: "Enero 2022 – enero 2024",
    description:
      "Desarrollo de aplicaciones web interactivas con ReactJS, siguiendo principios de diseño modular y reutilización de componentes. Colaboración en la definición de una arquitectura frontend escalable y estructurada, optimizada para facilitar el mantenimiento y la incorporación de nuevas funcionalidades. Aplicación de técnicas para mejorar el rendimiento de las aplicaciones, incluyendo optimización del renderizado y carga eficiente de recursos. Trabajo en equipo junto a diseñadores y desarrolladores backend para lograr una integración coherente y fluida en los distintos entornos.",
    link: "https://www.globaledb.com",
  },
  {
    role: "Desarrollador Front End",
    company: "Camila Charry Designer",
    period: "Agosto 2023 – Diciembre 2023",
    description:
      "Diseño web enfocado en el desarrollo visual y funcional de sitios orientados al usuario, priorizando la experiencia y usabilidad. Despliegue de aplicaciones en entornos en la nube, garantizando disponibilidad, estabilidad y tiempos de carga adecuados. Maquetación de sitios responsivos con atención al detalle en la presentación visual, adaptabilidad y consistencia entre navegadores y dispositivos. Elaboración de contenido gráfico, banners y materiales visuales para apoyar campañas de marketing y fortalecer la identidad de marca en el entorno digital.",
    link: "",
  },
  {
    role: "Desarrollador Full Stack",
    company: "GlobalEDB",
    period: "Mayo 2024 – mayo 2025",
    description:
      "Desarrollo de aplicaciones web completas utilizando React.js, Next.js y TypeScript en el frontend. Construcción de APIs RESTful con FastAPI y Python. Gestión de bases de datos relacionales (MySQL) y no relacionales (MongoDB). Integración de servicios de almacenamiento en la nube mediante Azure Blob Storage. Implementación de endpoints con inteligencia artificial mediante Azure Custom Vision para reconocimiento e interpretación de imágenes. Colaboración en la creación e integración de un chat inteligente en la aplicación, utilizando IA para ofrecer respuestas automáticas y mejorar la experiencia del usuario. Participación en entornos ágiles con control de versiones utilizando Git.",
    link: "https://www.globaledb.com",
  },
];

const Experience = () => {
  return (
    <section
      id="experiencia"
      className="py-16 px-4 bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 flex flex-col items-center"
    >
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <Briefcase className="w-8 h-8 text-cyan-400" />
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Experiencia laboral
          </h2>
        </motion.div>
        <div className="relative border-l-2 border-cyan-900/40 ml-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2 + idx * 0.2,
                ease: [0.42, 0, 0.58, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-row mb-12"
            >
              <div className="flex flex-col items-end mr-6">
                <span className="relative">
                  <span className="absolute -left-7 top-1 w-4 h-4 rounded-full bg-gradient-to-tr from-cyan-400 to-emerald-300 shadow-lg border-2 border-cyan-400"></span>
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                  {exp.role}
                </h3>
                <h4 className="text-base md:text-lg font-semibold mb-1 bg-gradient-to-r from-cyan-400 to-emerald-300 bg-clip-text text-transparent">
                  {exp.company}
                </h4>
                <span className="text-gray-400 text-sm font-medium tracking-wide mb-2 block">
                  {exp.period}
                </span>
                <p className="text-gray-300 text-sm md:text-base mb-2">
                  {exp.description}
                </p>
                {exp.link && (
                  <a
                    href={exp.link}
                    className="text-cyan-300 font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    Saber más <span className="text-lg">&gt;</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
