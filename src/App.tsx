import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ProjectDetail from "./components/ProjectDetail";
import BackToTop from "./components/BackToTop";

function HomePage() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
          </Routes>
        </main>
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
