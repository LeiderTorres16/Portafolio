import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY <= 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-gray-900 py-3 md:px-8 sticky top-0 z-50 transition-transform duration-500 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto max-w-screen-xl">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="self-center text-3xl font-bold whitespace-nowrap text-white">
            Leider Torres
          </span>
        </a>
        {/* Botón hamburguesa */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Abrir menú principal</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {/* Links */}
        <div
          className={`w-full md:block md:w-auto transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <a
                href="#inicio"
                className="block py-2 pl-3 pr-4 text-white md:hover:bg-transparent md:hover:text-sky-400 md:p-0 font-bold"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("inicio");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#sobre-mi"
                className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:hover:text-sky-400 md:p-0 font-bold "
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("sobre-mi");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
              >
                Sobre mí
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:hover:text-sky-400 md:p-0 font-bold "
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("skills");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#experiencia"
                className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:hover:text-sky-400 md:p-0 font-bold"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("experiencia");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
              >
                Experiencia
              </a>
            </li>
            <li>
              <a
                href="#proyectos"
                className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:hover:text-sky-400 md:p-0 font-bold"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("proyectos");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:hover:text-sky-400 md:p-0 font-bold"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("contacto");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
