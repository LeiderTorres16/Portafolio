import "./App.css";
import About from "./components/Layout/About";
import Header from "./components/Layout/Header";
import Navbar from "./components/Layout/Navbar";
import Projects from "./components/Layout/Projects";
import ScrollToTopButton from "./components/Layout/ScrollToTopButton";
import Skills from "./components/Layout/Skills";

function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
