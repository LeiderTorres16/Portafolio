import "./App.css";
import About from "./components/Layout/About";
import Header from "./components/Layout/Header";
import Navbar from "./components/Layout/Navbar";
import Projects from "./components/Layout/Projects";
import ScrollToTopButton from "./components/Utils/ScrollToTopButton";
import Skills from "./components/Layout/Skills";
import SectionNav from "./components/Utils/SectionNav";
import Experience from "./components/Layout/Experience";
import Contacto from "./components/Layout/Contacto";
import Footer from "./components/Layout/Footer";


function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <SectionNav />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contacto />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
