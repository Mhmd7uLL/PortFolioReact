import { Routes, Route } from "react-router-dom";

import "./App.css";
import Particle from "./components/ParticlesBackground/ParticlesBackground.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./page/Home/Home.jsx";
import About from "./page/About/About.jsx";
import Projects from "./page/Projects/Projects.jsx";
import Contact from "./page/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App bg-gray-900 min-h-screen relative overflow-hidden">
      <Particle />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
