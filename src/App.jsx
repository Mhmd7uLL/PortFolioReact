import "./App.css";
import siakadu from "./assets/siakadu.jpeg";
import Lumora from "./assets/lumoraTech.png";
import Averra from "./assets/averra.png";
import TehTea from "./assets/tehtea.png";

function App() {
  return (
    <div className="App bg-gray-900 min-h-screen">
      <nav className="flex justify-center items-center shadow-xl py-6 bg-gray-900">
        <div
          className="flex justify-between font-semibold text-white"
          style={{ width: "80%" }}
        >
          <div className="font-bold text-xl">
            <h1>
              <span className="text-red-600">Mhmd</span>7uLL
            </h1>
          </div>
          <div>
            <ul className="flex space-x-9">
              <li className="hover:text-red-600 transition duration-300">
                <a href="#home">Home</a>
              </li>
              <li className="hover:text-red-600 transition duration-300">
                <a href="#tech-stack">Tech</a>
              </li>
              <li className="hover:text-red-600 transition duration-300">
                <a href="#edu">Education</a>
              </li>
              <li className="hover:text-red-600 transition duration-300">
                <a href="#projects">Projects</a>
              </li>
              <li className="hover:text-red-600 transition duration-300">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header
        className="flex flex-row justify-around items-center text-white mt-30 h-96"
        id="home"
      >
        <div>
          <h1 className="text-8xl font-light mb-4">
            Hello!, I'm<br></br>
            <span className="font-medium">Julian</span>
          </h1>
          <p className="text-lg text-gray-700 w-3/4">
            A Student from Surabaya State University, majoring in Informatics
            Engineering. <br></br>Passionate in Development world
          </p>
        </div>
        <div>
          <button className="bg-red-600 px-6 py-3 rounded-full text-white font-semibold hover:bg-red-700 transition duration-300">
            Get in Touch
          </button>
        </div>
      </header>

      <div className="mt-40 px-37" id="tech-stack">
        <div className="flex flex-col items-start">
          <h3 className="text-white">Tech</h3>
          <h1 className="text-white font-bold text-4xl">Skill</h1>
          <hr></hr>
          <div className="bg-red-500 w-20 h-1 mt-2"></div>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-6 text-white">
          <div className="bg-gray-800 p-6 rounded-lg text-start hover:scale-105 transform transition duration-300">
            <h4 className="font-bold mb-2">JavaScript</h4>
            <p>Flexible Language, needs more practise</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-start hover:scale-105 transform transition duration-300">
            <h4 className="font-bold mb-2">React</h4>
            <p>UI Framework, but needs more practise</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-start hover:scale-105 transform transition duration-300">
            <h4 className="font-bold mb-2">Bootstrap</h4>
            <p>Easy to use</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-start hover:scale-105 transform transition duration-300">
            <h4 className="font-bold mb-2">Tailwind CSS</h4>
            <p>Same like Bootstrap, but just try once</p>
          </div>
        </div>
      </div>

      <div className="mt-40 px-37" id="edu">
        <div className="flex flex-col items-start">
          <h3 className="text-white">My</h3>
          <h1 className="text-white font-bold text-4xl">Education</h1>
          <hr></hr>
          <div className="bg-red-500 w-20 h-1 mt-2"></div>
        </div>

        <div className="mt-15 flex flex-row items-start space-x-10">
          <div>
            <div className="bg-gray-900 w-5 h-5 border-2 border-red-700 rounded-full mb-1"></div>
            <div className="h-20 border-l-3 border-white ml-2"></div>
            <div className="bg-red-500 w-5 h-5 rounded-full mt-1"></div>
          </div>
          <div>
            <div className="text-white">
              <h4 className="font-semibold">Surabaya State University</h4>
              <p>
                Bachelor of Informatics Engineering
                <span className="font-bold text-red-500"> (2024 - Present)</span>
              </p>
            </div>
            <div className="mt-15 text-white">
              <h4 className="font-semibold mt-9">SMAN 1 Lamongan</h4>
              <p>
                Science
                <span className="font-bold text-red-500"> (2021 - 2024)</span>
              </p>
            </div>
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
                    <p className="text-gray-200 text-sm">
                      Academic Information System for University students.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-40 text-center text-gray-500">
        <p>© 2024 MyPortfolio. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
