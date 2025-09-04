import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const About = () => {
  return (
    <section
      id="sobre-mi"
      className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 py-16 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Hola 🖐️, soy Leider Torres
        </h2>
        <div className="text-lg md:text-xl text-gray-200 mb-8 text-justify space-y-4">
          <p>
            Soy Ingeniero de Sistemas con experiencia en el desarrollo de
            aplicaciones web frontend y full stack. He trabajado con tecnologías
            como{" "}
            <strong className="font-bold">
              Angular, React, Next.js y TypeScript
            </strong>
            , además de backend con
            <strong className="font-bold"> FastAPI y Python</strong>, integrando
            soluciones con bases de datos{" "}
            <strong className="font-bold">SQL/NoSQL</strong> y servicios en la
            nube como Azure.
          </p>
          <p>
            Me apasiona crear interfaces modernas, escalables y centradas en la
            experiencia de usuario, aplicando buenas prácticas de desarrollo y
            metodologías ágiles.
          </p>
          <p>
            También he colaborado en proyectos con integración de inteligencia
            artificial para reconocimiento de imágenes y chatbots inteligentes.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="/docs/CV_LEIDER_TORRES_ATS_2025_ES.pdf"
            download
            className="px-6 py-3 border-2 rounded-lg text-emerald-300 border-emerald-300 bg-[#181f2a] font-semibold transition-all duration-300 bg-clip-padding relative group hover:text-white"
          >
            Descargar CV ES
          </a>
          <a
            href="/docs/CV_LEIDER_TORRES_ATS_2025_EN.pdf"
            download
            className="px-6 py-3 border-2 rounded-lg text-cyan-400 border-cyan-400 bg-[#181f2a] font-semibold transition-all duration-300 bg-clip-padding relative group hover:text-white"
          >
            Descargar CV EN
          </a>
        </div>
        <div className="flex flex-row gap-4 justify-center">
          <a
            href="https://github.com/LeiderTorres16"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white flex items-center"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/leider-andres-torres-avila-a56970148"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white flex items-center"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
