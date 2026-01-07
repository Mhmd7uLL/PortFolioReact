import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./page/Home/Home.jsx";
import Projects from "./page/Projects/Projects.jsx";
import About from "./page/About/About.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App bg-gray-900 min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
