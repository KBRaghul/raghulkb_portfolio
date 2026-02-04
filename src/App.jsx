import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Project";

function App() {
  return (
    <div className="w-full min-h-screen bg-transparent text-slate-900 selection:bg-red-600 selection:text-white">
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <footer className="py-14 bg-black text-center text-slate-400 border-t border-slate-900">
        <p className="text-xs font-bold tracking-widest uppercase font-display">
          © 2026 Raghul K B • Birmingham, AL
        </p>
      </footer>
    </div>
  );
}

export default App;
