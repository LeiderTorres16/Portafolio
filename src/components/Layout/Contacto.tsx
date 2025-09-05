import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

import { useState } from "react";

type FormType = {
  nombre: string;
  apellido: string;
  telefono: string;
  ciudad: string;
  pais: string;
  correo: string;
  asunto: string;
  mensaje: string;
};

const initialForm: FormType = {
  nombre: "",
  apellido: "",
  telefono: "",
  ciudad: "",
  pais: "",
  correo: "",
  asunto: "",
  mensaje: "",
};

export default function Contacto() {
  const [form, setForm] = useState<FormType>(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
        const res = await fetch("https://formsubmit.co/ajax/leiderandrestorresavila@gmail.com", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nombre: form.nombre,
            apellido: form.apellido,
            telefono: form.telefono,
            ciudad: form.ciudad,
            pais: form.pais,
            correo: form.correo,
            asunto: `Contacto de ${form.nombre} ${form.apellido} - ${form.asunto}`,
            mensaje: form.mensaje,
            _captcha: false,
          }),
        });
      if (res.ok) {
        setSuccess(true);
        setForm(initialForm);
      } else {
        setError("No se pudo enviar el mensaje. Intenta nuevamente.");
      }
    } catch {
      setError("Error de conexión. Intenta nuevamente.");
    }
    setLoading(false);
  };

  return (
    <section id="contacto" className="py-16 px-4 bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 flex flex-col items-center">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Contacto</h2>
            <p className="text-gray-300 mb-6">¿Quieres ponerte en contacto conmigo? Diligencia el formulario y te responderé lo antes posible.</p>
            <p className="text-gray-400 mb-2">También puedes contactarme por mis redes:</p>
            <div className="flex gap-4 mb-6">
              <a href="https://www.linkedin.com/in/leider-andres-torres-avila-a56970148" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-emerald-300 text-2xl">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/573016816204" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-emerald-300 text-2xl">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
        <form className="bg-[#181f2a] rounded-2xl shadow-lg p-8 flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <input name="nombre" value={form.nombre} onChange={handleChange} required placeholder="Nombre" className="px-3 py-2 rounded bg-gray-800 text-white" />
            <input name="apellido" value={form.apellido} onChange={handleChange} required placeholder="Apellido" className="px-3 py-2 rounded bg-gray-800 text-white" />
            <input name="telefono" value={form.telefono} onChange={handleChange} required placeholder="Teléfono" className="px-3 py-2 rounded bg-gray-800 text-white" />
            <input name="ciudad" value={form.ciudad} onChange={handleChange} required placeholder="Ciudad" className="px-3 py-2 rounded bg-gray-800 text-white" />
            <input name="pais" value={form.pais} onChange={handleChange} required placeholder="País" className="px-3 py-2 rounded bg-gray-800 text-white" />
            <input name="correo" value={form.correo} onChange={handleChange} required type="email" placeholder="Correo electrónico" className="px-3 py-2 rounded bg-gray-800 text-white col-span-2" />
          </div>
          <input name="asunto" value={form.asunto} onChange={handleChange} required placeholder="Asunto" className="px-3 py-2 rounded bg-gray-800 text-white" />
          <textarea name="mensaje" value={form.mensaje} onChange={handleChange} required placeholder="Descripción del mensaje" className="px-3 py-2 rounded bg-gray-800 text-white min-h-[80px]" />
          <button type="submit" disabled={loading} className="mt-2 px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-300 text-gray-900 font-bold shadow hover:scale-105 transition-transform duration-200">
            {loading ? "Enviando..." : "Enviar"}
          </button>
          {success && <p className="text-green-400 mt-2">¡Mensaje enviado correctamente!</p>}
          {error && <p className="text-red-400 mt-2">{error}</p>}
        </form>
      </div>
    </section>
  );
}
