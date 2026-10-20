import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Experience from "./pages/Experience";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          {/* Baqi pages baad mein */}
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;