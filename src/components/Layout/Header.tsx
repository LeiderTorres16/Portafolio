import { Typewriter } from "react-simple-typewriter";

const FloatingLightsBg = () => (
  <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
    <svg
      className="w-full h-full"
      viewBox="0 0 1440 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        {/* Espíritus morados */}
        <circle
          className="animate-float1"
          cx="200"
          cy="200"
          r="60"
          fill="url(#grad1)"
          fillOpacity="0.22"
        />
        <circle
          className="animate-float4"
          cx="400"
          cy="500"
          r="50"
          fill="url(#grad4)"
          fillOpacity="0.18"
        />
        {/* Espíritus azules */}
        <circle
          className="animate-float2"
          cx="1200"
          cy="400"
          r="40"
          fill="url(#grad2)"
          fillOpacity="0.18"
        />
        <circle
          className="animate-float5"
          cx="1100"
          cy="150"
          r="55"
          fill="url(#grad5)"
          fillOpacity="0.15"
        />
        {/* Espíritus verdes */}
        <circle
          className="animate-float3"
          cx="700"
          cy="100"
          r="80"
          fill="url(#grad3)"
          fillOpacity="0.13"
        />
        <circle
          className="animate-float6"
          cx="900"
          cy="500"
          r="35"
          fill="url(#grad6)"
          fillOpacity="0.16"
        />
        {/* Espíritus extra */}
        <circle
          className="animate-float7"
          cx="300"
          cy="350"
          r="30"
          fill="url(#grad7)"
          fillOpacity="0.14"
        />
        <circle
          className="animate-float8"
          cx="1300"
          cy="250"
          r="45"
          fill="url(#grad8)"
          fillOpacity="0.17"
        />
        <defs>
          {/* Morado */}
          <radialGradient
            id="grad1"
            cx="0.5"
            cy="0.5"
            r="0.5"
            fx="0.5"
            fy="0.5"
          >
            <stop stopColor="#a259f7" />
            <stop offset="1" stopColor="#a259f7" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="grad4"
            cx="0.5"
            cy="0.5"
            r="0.5"
            fx="0.5"
            fy="0.5"
          >
            <stop stopColor="#7c3aed" />
            <stop offset="1" stopColor="#7c3aed" stopOpacity="0" />
          </radialGradient>
          {/* Azul */}
          <radialGradient
            id="grad2"
            cx="0.5"
            cy="0.5"
            r="0.5"
            fx="0.5"
            fy="0.5"
          >
            <stop stopColor="#38bdf8" />
            <stop offset="1" stopColor="#38bdf8" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="grad5"
            cx="0.5"
            cy="0.5"
            r="0.5"
            fx="0.5"
            fy="0.5"
          >
            <stop stopColor="#6366f1" />
            <stop offset="1" stopColor="#6366f1" stopOpacity="0" />
          </radialGradient>
          {/* Verde */}
          <radialGradient
            id="grad3"
            cx="0.5"
            cy="0.5"
            r="0.5"
            fx="0.5"
            fy="0.5"
          >
            <stop stopColor="#4ade80" />
            <stop offset="1" stopColor="#4ade80" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="grad6"
            cx="0.5"
            cy="0.5"
            r="0.5"
            fx="0.5"
            fy="0.5"
          >
            <stop stopColor="#22d3ee" />
            <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
          {/* Extra: azul-morado y verde-azulado */}
          <radialGradient
            id="grad7"
            cx="0.5"
            cy="0.5"
            r="0.5"
            fx="0.5"
            fy="0.5"
          >
            <stop stopColor="#818cf8" />
            <stop offset="1" stopColor="#818cf8" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="grad8"
            cx="0.5"
            cy="0.5"
            r="0.5"
            fx="0.5"
            fy="0.5"
          >
            <stop stopColor="#5eead4" />
            <stop offset="1" stopColor="#5eead4" stopOpacity="0" />
          </radialGradient>
        </defs>
      </g>
    </svg>
    <style>{`
			.animate-float1 { animation: float1 8s ease-in-out infinite alternate; }
			.animate-float2 { animation: float2 10s ease-in-out infinite alternate; }
			.animate-float3 { animation: float3 12s ease-in-out infinite alternate; }
			.animate-float4 { animation: float4 9s ease-in-out infinite alternate; }
			.animate-float5 { animation: float5 11s ease-in-out infinite alternate; }
			.animate-float6 { animation: float6 13s ease-in-out infinite alternate; }
			.animate-float7 { animation: float7 7s ease-in-out infinite alternate; }
			.animate-float8 { animation: float8 14s ease-in-out infinite alternate; }
			@keyframes float1 { 0%{transform:translateY(0)} 100%{transform:translateY(-40px)} }
			@keyframes float2 { 0%{transform:translateY(0)} 100%{transform:translateY(30px)} }
			@keyframes float3 { 0%{transform:translateY(0)} 100%{transform:translateY(-25px)} }
			@keyframes float4 { 0%{transform:translateY(0)} 100%{transform:translateY(-35px)} }
			@keyframes float5 { 0%{transform:translateY(0)} 100%{transform:translateY(20px)} }
			@keyframes float6 { 0%{transform:translateY(0)} 100%{transform:translateY(-30px)} }
			@keyframes float7 { 0%{transform:translateY(0)} 100%{transform:translateY(18px)} }
			@keyframes float8 { 0%{transform:translateY(0)} 100%{transform:translateY(-22px)} }
		`}</style>
  </div>
);

const Header = () => {
  return (
    <header className="relative flex items-center justify-center min-h-[60vh] md:min-h-[80vh] bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 overflow-hidden">
      <FloatingLightsBg />
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
          <Typewriter
            words={["Bienvenidos a mi portafolio"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={0}
            delaySpeed={100000}
          />
        </h1>
      </div>
    </header>
  );
};

export default Header;
