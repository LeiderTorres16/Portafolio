const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[#181f2a] text-gray-400 py-8 px-4 flex flex-col items-center">
      <div className="text-lg font-bold text-white mb-1">Leider Torres</div>
      <div className="text-base mb-1">Portafolio</div>
      <div className="text-xs">&copy; {year} | Todos los derechos reservados</div>
    </footer>
  );
}
