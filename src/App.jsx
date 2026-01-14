import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./page/About/About.jsx";
import Projects from "./page/Projects/Projects.jsx";
import Contact from "./page/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App bg-gray-900 min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<Contact />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
