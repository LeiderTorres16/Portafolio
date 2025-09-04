import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [

  { id: "sobre-mi", label: "Sobre mí" },
  { id: "skills", label: "Habilidades" },
  { id: "experiencia", label: "Experiencia" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

export default function SectionNav() {
  const [active, setActive] = useState(sections[0].id);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let found = sections[0].id;
      const scrollY = window.scrollY;
      let closest = Infinity;
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const offset = Math.abs(el.offsetTop - scrollY + 100); // 100px de margen superior
          if (offset < closest) {
            closest = offset;
            found = sec.id;
          }
        }
      }
      setActive(found);
      setShow(scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
          className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-2"
        >
          {sections.map((sec, idx) => (
            <div key={sec.id} className="flex flex-col items-start">
              {idx > 0 && (
                <div className="flex flex-row items-center">
                  <div className="w-5 flex justify-center">
                    <div className="w-0.5 h-8 bg-gray-400 opacity-40"></div>
                  </div>
                </div>
              )}
              <button
                onClick={() => handleClick(sec.id)}
                className={`transition-all duration-300 flex flex-row items-center gap-3 focus:outline-none w-full`}
                style={{justifyContent: 'flex-start'}}
              >
                <span
                  className={`w-5 h-5 rounded-full border-2 border-cyan-400 bg-white/10 flex-shrink-0 ${
                    active === sec.id
                      ? "scale-125 shadow-lg bg-gradient-to-tr from-cyan-400 via-sky-400 to-emerald-300 border-emerald-300"
                      : "opacity-60"
                  }`}
                  style={{marginTop: '8px'}}
                ></span>
                <span
                  className={`text-xs text-white text-left ${
                    active === sec.id ? "font-bold scale-110 text-cyan-300" : "opacity-60"
                  }`}
                  style={{minWidth: '70px'}}
                >
                  {sec.label}
                </span>
              </button>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
