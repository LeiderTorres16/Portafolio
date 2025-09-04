import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const About = () => {
	return (
		<section id="sobre-mi" className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 py-16 px-4">
			<motion.div
				initial={{ opacity: 0, y: 60 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
				viewport={{ once: true, amount: 0.5 }}
				className="max-w-2xl mx-auto text-center"
			>
				<h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Hola 🖐️, soy Leider Torres</h2>
				<p className="text-lg md:text-xl text-gray-200 mb-8">
					Soy un desarrollador apasionado por la tecnología, con experiencia en desarrollo web y una gran motivación por aprender y crear soluciones innovadoras. Me destaco por mi creatividad, responsabilidad y trabajo en equipo.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
					<a href="/cv-es.pdf" download className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-colors">Descargar CV ES</a>
					<a href="/cv-en.pdf" download className="px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-600 text-white font-semibold transition-colors">Descargar CV EN</a>
				</div>
				<div className="flex flex-row gap-4 justify-center">
					<a href="https://github.com/LeiderTorres16" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white flex items-center">
						<Github className="w-6 h-6" />
					</a>
					<a href="https://www.linkedin.com/in/leider-andres-torres-avila-a56970148" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white flex items-center">
						<Linkedin className="w-6 h-6" />
					</a>
				</div>
			</motion.div>
		</section>
	);
};

export default About;
