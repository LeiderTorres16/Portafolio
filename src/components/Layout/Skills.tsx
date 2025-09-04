import { motion } from "framer-motion";
import { Cloud, LayoutDashboard, Database } from "lucide-react";

const skillsData = [
  {
    title: "Habilidades Frontend",
    icon: <LayoutDashboard className="w-7 h-7 text-white" />,
    color: "from-blue-600 to-blue-400",
    chip: "bg-cyan-800",
    items: ["Angular", "React", "JavaScript", "TypeScript"],
    backgroundGradient: "bg-cyan-800",
  },
  {
    title: "Habilidades Backend",
    icon: <Database className="w-7 h-7 text-white" />,
    color: "from-purple-700 to-purple-500",
    chip: "bg-cyan-800",
    items: [
      "Python",
      "FastAPI",
      "Node.js",
      ".NET",
      "SOLID",
      "RESTful APIs",
      "SQL Server",
      "MongoDB",
      "PostgreSQL",
      "JWT",
      "Clean Architecture",
    ],
    backgroundGradient: "rgba(94, 234, 212, 0.6)",
  },
  
  {
    title: "Habilidades Cloud",
    icon: <Cloud className="w-7 h-7 text-white" />,
    color: "from-cyan-600 to-blue-400",
    chip: "bg-cyan-800",
    items: ["AWS", "Azure", "Firebase", "Docker"],
    backgroundGradient: "rgba(94, 234, 212, 0.6)",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.2,
      duration: 0.7,
      ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
    },
  }),
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 py-16 px-4"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-3xl md:text-5xl font-bold text-white mb-2 text-center"
      >
        Habilidades y Tecnologías
      </motion.h2>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {skillsData.map((card, i) => (
          <motion.div
            key={card.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={
              "relative rounded-2xl p-1 bg-gradient-to-tr from-cyan-400 via-sky-400 to-emerald-300 animate-gradient-border shadow-lg"
            }
          >
            <div
              className="bg-[#181f2a] rounded-2xl h-full p-7 flex flex-col items-start"
              style={{ background: "#181f2a" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className={`inline-flex items-center justify-center rounded-lg w-10 h-10 ${card.chip}`}
                >
                  {card.icon}
                </span>
                <h3 className="text-xl font-semibold text-white">
                  {card.title}
                </h3>
              </div>
              <div className="w-full grid grid-cols-2 gap-3 mt-2">
                {card.items.map((item) => (
                  <span
                    key={item}
                    className={`text-white text-sm font-medium px-3 py-2 rounded-lg ${card.chip} text-center`}
                    style={{ backgroundColor: 'bg-cyan-800'}}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
