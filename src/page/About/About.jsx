// Importing assets
import github from "../../assets/contact/github.svg";
import instagram from "../../assets/contact/instagram.svg";
import linkedin from "../../assets/contact/linkedin.svg";

function About() {
  return (
    <div>
      <header
        className="flex flex-row justify-evenly items-center text-white mt-30 mb-60 h-96"
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
          <div className="flex flex-row space-x-6 mt-3">
            <a href="https://github.com/mhmd7ull">
              <img src={github} alt="GitHub" className="w-10 h-10"></img>
            </a>
            <a href="https://www.instagram.com/Mhmd7ull/">
              <img src={instagram} alt="Instagram" className="w-10 h-10"></img>
            </a>
            <a href="https://www.linkedin.com/in/Mhmd7ull/">
              <img src={linkedin} alt="LinkedIn" className="w-10 h-10"></img>
            </a>
          </div>
        </div>
        <div>
          <div className="w-60 h-100 bg-gray-900 border-5 border-red-500 rounded-full hover:scale-105 transform transition duration-300"></div>
        </div>
      </header>

      <div className="px-40">
        <div className="flex flex-col items-start">
          <h3 className="text-white">My</h3>
          <h1 className="text-white font-bold text-4xl">Education</h1>
          <hr></hr>
          <div className="bg-red-500 w-20 h-1 mt-2"></div>
        </div>

        <div className="mt-15 flex flex-row items-start space-x-10">
          <div>
            <div className="bg-red-500 w-5 h-5 rounded-full mb-1 animate-pulse"></div>
            <div className="h-24 border-l-3 border-white ml-2"></div>
            <div className="bg-gray-900 w-5 h-5 border-2 border-red-700 rounded-full mt-1"></div>
          </div>
          <div>
            <div className="text-white">
              <h4 className="font-semibold text-2xl">Surabaya State University</h4>
              <p>
                Bachelor of Informatics Engineering
                <span className="font-bold text-red-500">
                  {" "}
                  (2024 - Present)
                </span>
              </p>
            </div>
            <div className="mt-15 text-white">
              <h4 className="font-semibold mt-9 text-2xl">SMAN 1 Lamongan</h4>
              <p>
                Science
                <span className="font-bold text-red-500"> (2021 - 2024)</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-40 mt-60">
        <div className="flex flex-col items-start">
          <h3 className="text-white">All</h3>
          <h1 className="text-white font-bold text-4xl">Experiences</h1>
          <hr></hr>
          <div className="bg-red-500 w-20 h-1 mt-2"></div>
        </div>

        <div className="mt-15 flex flex-row items-start space-x-10">
          <div>
            <div className="bg-red-500 w-5 h-5 rounded-full mb-1 animate-pulse"></div>
            <div className="h-20 border-l-3 border-white ml-2"></div>
          </div>
          <div>
            <div className="text-white">
              <h4 className="font-semibold text-2xl">Volunteer</h4>
              <p>
                Logistics Specialist - Mbak Mas Fakultas Teknik 
                <span className="font-bold text-red-500"> (Nov 2025)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
