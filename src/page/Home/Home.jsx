import { Link } from "react-router-dom";

import postgre from "../../assets/project-src/postgre.png";
import docker from "../../assets/project-src/docker.svg";
import node from "../../assets/project-src/nodejs.svg";
import rt from "../../assets/project-src/react.svg";
import js from "../../assets/project-src/js.svg";
import bs from "../../assets/project-src/bs.svg";
import tw from "../../assets/project-src/tailwind.svg";

// Importing project pics
import porto from "../../assets/porto.png";
import siakadu from "../../assets/siakadu.jpeg";
import mygambar from "../../assets/self-photo/me.png";

function Home() {
  return (
    <div>
      <header
        className="relative z-10 flex flex-row justify-evenly items-center text-white mt-25 mb-42 h-96 px-37"
        id="home"
      >
        <div>
          <h1 className="text-8xl font-light mb-4 z-10">
            Hello!, I'm<br></br>
            <span className="font-medium z-100">Julian</span>
          </h1>
          <p className="text-lg text-gray-700 w-3/4">
            A Student from Surabaya State University, majoring in Informatics
            Engineering. <br></br>Passionate in Development world
          </p>
          <div className="relative z-10 flex flex-row space-x-6 mt-5">
            <button className="hover:cursor-pointer hover:bg-red-500 border-2 border-red-500 text-white py-2 px-4 rounded-md">
              <Link to="/about">Get to know more about me</Link>
            </button>
            <button className="hover:cursor-pointer hover:bg-red-500 border-2 border-red-500 text-white py-2 px-4 rounded-md">
              <Link to="/contact">Contact me</Link>
            </button>
          </div>
        </div>
        <div>
          <div className="w-60 h-100 bg-gray-900 border-5 border-red-500 rounded-full hover:scale-105 transform transition duration-300 shadow-xl shadow-red-500/50">
            <img
              src={mygambar}
              alt="My Photo"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </header>

      <div className="px-40 mb-40">
        <div className="flex flex-col items-start">
          <h3 className="text-white">Latest</h3>
          <h1 className="text-white font-bold text-4xl">Projects</h1>
          <hr></hr>
          <div className="relative z-10 flex flex-row justify-between items-center w-full mt-2 mb-3 text-white">
            <div className="bg-red-500 w-20 h-1 mt-2"></div>
            <p>
                <Link to="/projects">Show All</Link>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6 text-white">
          <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transform transition duration-300">
            <div className="relative hover:cursor-pointer">
              <a href="https://github.com/Mhmd7uLL/siakadu">
                <img src={siakadu} className="w-full h-auto" />
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4">
                  <h4 className="font-bold text-white mb-2">
                    Academic System (Siakadu)
                  </h4>
                  <div className="flex space-x-2">
                    <img src={rt} alt="React" className="w-10 h-10"></img>
                    <img src={bs} alt="Bootstrap" className="w-10 h-10"></img>
                    <img
                      src={node}
                      alt="Tailwind CSS"
                      className="w-10 h-10"
                    ></img>
                    <img src={docker} alt="Docker" className="w-10 h-10"></img>
                    <img
                      src={postgre}
                      alt="PostgreSQL"
                      className="w-10 h-10"
                    ></img>
                  </div>
                  <p className="text-gray-200 text-sm">
                    Academic Information System for University students. Project
                    that i made with my team. Also my role as Frontend.
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transform transition duration-300">
            <div className="relative hover:cursor-pointer">
              <a href="https://github.com/Mhmd7uLL/PortfolioReact">
                <img src={porto} className="w-full h-auto" />
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4">
                  <h4 className="font-bold text-white mb-2">Portofolio</h4>
                  <div className="flex space-x-2">
                    <img src={js} alt="JavaScript" className="w-10 h-10"></img>
                    <img src={rt} alt="React" className="w-10 h-10"></img>
                    <img
                      src={tw}
                      alt="Tailwind CSS"
                      className="w-10 h-10"
                    ></img>
                  </div>
                  <p className="text-gray-200 text-sm">
                    Portfolio Website built using React.js and Tailwind CSS for showcase my
                    projects and skills.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
