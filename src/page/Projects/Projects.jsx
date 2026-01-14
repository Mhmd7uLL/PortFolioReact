// Importing assets for tech stack
import php from "../../assets/project src/php.svg";
import postgre from "../../assets/project src/postgre.png";
import html from "../../assets/project src/html.svg";
import css from "../../assets/project src/css.svg";
import docker from "../../assets/project src/docker.svg";
import node from "../../assets/project src/nodejs.svg";
import rt from "../../assets/project src/react.svg";
import js from "../../assets/project src/js.svg";
import bs from "../../assets/project src/bs.svg";
import tw from "../../assets/project src/tailwind.svg";

// Importing project pics
import siakadu from "../../assets/siakadu.jpeg";
import Lumora from "../../assets/lumoraTech.png";
import Averra from "../../assets/averra.png";
import TehTea from "../../assets/tehtea.png";
import calc from "../../assets/calc.png";
import tictac from "../../assets/tic-tac-toe.png";

function Projects() {
  return (
    <div>
      <div className="mt-40 px-37" id="tech-stack">
        <div className="flex flex-col items-start">
          <h3 className="text-white">Tech</h3>
          <h1 className="text-white font-bold text-4xl">Stack</h1>
          <hr></hr>
          <div className="bg-red-500 w-20 h-1 mt-2"></div>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-6 text-white">
          <div className="bg-gray-800 p-6 rounded-lg text-start hover:scale-105 transform transition duration-300">
            <img src={js} alt="JavaScript" className="w-12 h-12 mb-4"></img>
            <h4 className="font-bold mb-2">JavaScript</h4>
            <p>Flexible Language, needs more practise</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-start hover:scale-105 transform transition duration-300">
            <img src={rt} alt="React" className="w-12 h-12 mb-4"></img>
            <h4 className="font-bold mb-2">React</h4>
            <p>UI Framework, but needs more practise</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-start hover:scale-105 transform transition duration-300">
            <img src={bs} alt="Bootstrap" className="w-12 h-12 mb-4"></img>
            <h4 className="font-bold mb-2">Bootstrap</h4>
            <p>Easy to use</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-start hover:scale-105 transform transition duration-300">
            <img src={tw} alt="Tailwind CSS" className="w-12 h-12 mb-4"></img>
            <h4 className="font-bold mb-2">Tailwind CSS</h4>
            <p>Same like Bootstrap, but just try once</p>
          </div>
        </div>
      </div>
      <div id="projects">
        <div className="mt-40 px-37">
          <div className="flex flex-col items-start">
            <h3 className="text-white">My</h3>
            <h1 className="text-white font-bold text-4xl">Projects</h1>
            <hr></hr>
            <div className="bg-red-500 w-20 h-1 mt-2"></div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6 text-white ">
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transform transition duration-300">
              <div className="relative hover:cursor-pointer">
                <a href="https://github.com/Mhmd7uLL/LumoraTech-store">
                  <img src={Lumora} className="w-full h-auto" />
                  <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4">
                    <h4 className="font-bold text-white mb-2">Lumora Tech</h4>
                    <div className="flex space-x-2">
                      <img src={html} alt="React" className="w-10 h-10"></img>
                      <img
                        src={css}
                        alt="Bootstrap"
                        className="w-10 h-10"
                      ></img>
                      <img
                        src={js}
                        alt="Tailwind CSS"
                        className="w-10 h-10"
                      ></img>
                      <img
                        src={php}
                        alt="PostgreSQL"
                        className="w-10 h-10"
                      ></img>
                    </div>
                    <p className="text-gray-200 text-sm">
                      Online E-commerce that sells various tech products.
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transform transition duration-300">
              <div className="relative hover:cursor-pointer">
                <a href="https://github.com/Mhmd7uLL/AverraStore-Prototype">
                  <img src={Averra} className="w-full h-auto" />
                  <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4">
                    <h4 className="font-bold text-white mb-2">Averra Store</h4>
                    <div className="flex space-x-2">
                      <img src={html} alt="React" className="w-10 h-10"></img>
                      <img
                        src={css}
                        alt="Bootstrap"
                        className="w-10 h-10"
                      ></img>
                      <img
                        src={js}
                        alt="Tailwind CSS"
                        className="w-10 h-10"
                      ></img>
                    </div>
                    <p className="text-gray-200 text-sm">
                      Online E-commerce that sells various in-game items from
                      any games.
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transform transition duration-300">
              <div className="relative hover:cursor-pointer">
                <a href="https://github.com/Mhmd7uLL/TehTea-SimpleTeaStore">
                  <img src={TehTea} className="w-full h-auto" />
                  <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4">
                    <h4 className="font-bold text-white mb-2">TehTea</h4>
                    <div className="flex space-x-2">
                      <img src={html} alt="React" className="w-10 h-10"></img>
                      <img
                        src={css}
                        alt="Bootstrap"
                        className="w-10 h-10"
                      ></img>
                      <img
                        src={js}
                        alt="Tailwind CSS"
                        className="w-10 h-10"
                      ></img>
                    </div>
                    <p className="text-gray-200 text-sm">
                      Online Tea Shop that sells various tea and some drinks
                      products.
                    </p>
                  </div>
                </a>
              </div>
            </div>
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
                      <img
                        src={postgre}
                        alt="PostgreSQL"
                        className="w-10 h-10"
                      ></img>
                      <img
                        src={docker}
                        alt="Docker"
                        className="w-10 h-10"
                      ></img>
                    </div>
                    <p className="text-gray-200 text-sm">
                      Academic Information System for University students.
                      Project that i made with my team. Also my role as
                      Frontend.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start px-37 mt-40">
          <h3 className="text-white">Live</h3>
          <h1 className="text-white font-bold text-4xl">Projects</h1>
          <hr></hr>
          <div className="bg-red-500 w-20 h-1 mt-2"></div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6 text-white px-37">
          <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transform transition duration-300">
            <div className="relative hover:cursor-pointer">
              <a href="https://calculator-three-kappa-81.vercel.app/">
                <img src={calc} className="w-full h-auto" />
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4">
                  <h4 className="font-bold text-white mb-2">Calculator</h4>
                  <div className="flex space-x-2">
                    <img src={html} alt="html" className="w-10 h-10"></img>
                    <img src={css} alt="cs" className="w-10 h-10"></img>
                  </div>
                  <p className="text-gray-200 text-sm">
                    Simple calculator project
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transform transition duration-300">
            <div className="relative hover:cursor-pointer">
              <a href="https://mhmd7ull.github.io/TicTacToe/">
                <img src={tictac} className="w-full h-auto" />
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4">
                  <h4 className="font-bold text-white mb-2">Tic Tac Toe</h4>
                  <div className="flex space-x-2">
                    <img src={html} alt="html" className="w-10 h-10"></img>
                    <img src={css} alt="css" className="w-10 h-10"></img>
                    <img
                      src={js}
                      alt="javascript"
                      className="w-10 h-10"
                    ></img>
                  </div>
                  <p className="text-gray-200 text-sm">
                    Online E-commerce that sells various in-game items from any
                    games.
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

export default Projects;
