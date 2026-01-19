import { useState } from "react";
// Importing assets

function About() {
  const [active, setActive] = useState("education");

  return (
    <div>
      <div className="px-40 mt-30">
        <div className="flex flex-col items-start">
          <h3 className="text-white">Summary of</h3>
          <h1 className="text-white font-bold text-4xl">Myself</h1>
          <hr></hr>
          <div className="bg-red-500 w-20 h-1 mt-2"></div>
        </div>
        <div className="mt-10 mb-30">
          <p className="text-gray-100 text-lg text-justify">
            Hello! I'm Julian, an undergraduate student of Surabaya State
            University, majoring in Informatics Engineering. Interested in Web
            Development and passionate about creating engaging and user-friendly
            web applications.<br></br>
            <br></br>
            Throughout my academic journey, I've gained a solid foundation in
            programming languages such as HTML, CSS, JavaScript. Now, i'm trying
            to make the UI with React.js. I enjoy collaborating on projects that
            challenge my problem-solving skills and allow me to contribute to
            innovative solutions.<br></br>
            <br></br>
            My goal is to continuously improve my skills, which is Full Stack
            Development, and contribute to impactful projects in the tech
            industry. I'm excited about the opportunities ahead and eager to
            make a positive impact through technology.
          </p>
        </div>
      </div>
      <div className="px-40">
        <div className="flex flex-col items-start">
          <h3 className="text-white">My</h3>
          <h1 className="text-white font-bold text-4xl">Journey</h1>
          <hr></hr>
          <div className="bg-red-500 w-20 h-1 mt-2"></div>
        </div>

        <div className="pt-10 flex justify-center">
          <div className="relative grid grid-cols-3 p-1 border-2 border-red-500 rounded-full w-[25rem]">
            <div
              className={`absolute top-1 bottom-1 w-1/3 rounded-full bg-red-500 transition-transform duration-300 ${
                active === "education"
                  ? "translate-x-0"
                  : active === "experience"
                    ? "translate-x-full"
                    : "translate-x-[200%]"
              }`}
            />

            <button
              onClick={() => setActive("education")}
              className={`relative z-10 h-10 rounded-full ${
                active === "education"
                  ? "text-white"
                  : "text-red-500 hover:bg-red-200"
              }`}
            >
              Education
            </button>

            <button
              onClick={() => setActive("experience")}
              className={`relative z-10 h-10 rounded-full ${
                active === "experience"
                  ? "text-white"
                  : "text-red-500 hover:bg-red-200"
              }`}
            >
              Experience
            </button>

            <button
              onClick={() => setActive("achievements")}
              className={`relative z-10 h-10 rounded-full px-4 ${
                active === "achievements"
                  ? "text-white"
                  : "text-red-500 hover:bg-red-200"
              }`}
            >
              Achievements
            </button>
          </div>
        </div>

        <div className="mt-10 bg-gray-800 pt-2 pb-16 px-15 rounded-lg">
          {active === "education" && (
            <div className="animate-fade-slide mt-15 flex flex-row items-start space-x-10">
              <div>
                <div className="bg-red-500 w-5 h-5 rounded-full mb-1 animate-pulse"></div>
                <div className="h-37 border-l-3 border-white ml-2"></div>
                <div className="bg-gray-900 w-5 h-5 border-2 border-red-700 rounded-full mt-1"></div>
              </div>
              <div>
                <div className="text-white">
                  <h4 className="font-semibold text-2xl">
                    Surabaya State University
                  </h4>
                  <p>
                    Bachelor of Computer Science
                    <span className="font-bold text-red-500">
                      {" "}
                      (2024 - Present)
                    </span>
                  </p>
                  <p className="text-gray-400 mt-2">
                    focuses on the development and maintenance of software
                    applications that include various logic algorithms, data
                    structures and security.
                  </p>
                </div>
                <div className="mt-15 text-white">
                  <h4 className="font-semibold mt-9 text-2xl">
                    SMAN 1 Lamongan
                  </h4>
                  <p>
                    Science
                    <span className="font-bold text-red-500">
                      {" "}
                      (2021 - 2024)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}

          {active === "experience" && (
            <div className="animate-fade-slide mt-15 flex flex-row items-start space-x-10">
              <div>
                <div className="bg-red-500 w-5 h-5 rounded-full mb-1 animate-pulse"></div>
                <div className="h-20 border-l-3 border-white ml-2"></div>
              </div>
              <div>
                <div className="text-white">
                  <h4 className="font-semibold text-2xl">Volunteer</h4>
                  <p className="mb-2">
                    Logistics Specialist - Mbak Mas Fakultas Teknik
                    <span className="font-bold text-red-500"> (Nov 2025)</span>
                  </p>
                  <p className="text-gray-400 my-2">
                    Responsible for all equipment used for the event. Starting
                    from picking up the equipment, through the event's
                    implementation, until the event is finished.
                  </p>
                  <a
                    href="https://drive.google.com/file/d/10dB3JMp55SJ_L6R3-WLpPslvAurcunv2/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 bg-red-500 py-1 px-2 text-red-100 rounded-sm hover:bg-red-900 text-xl cursor-pointer"
                  >
                    Certificate ↗
                  </a>
                </div>
              </div>
            </div>
          )}

          {active === "achievements" && (
            <div className="animate-fade-slide mt-15 flex flex-row items-start space-x-10">
              <div>
                <div className="bg-red-500 w-5 h-5 rounded-full mb-1 animate-pulse"></div>
                <div className="h-46 border-l-3 border-white ml-2"></div>
                <div className="bg-gray-900 w-5 h-5 border-2 border-red-700 rounded-full mt-1"></div>
              </div>
              <div>
                <div className="text-white">
                  <h4 className="font-semibold text-2xl">
                    INSYFEST - UI UX DESIGN
                  </h4>
                  <p className="text-red-500">Team Competition</p>
                  <p className="mb-2">
                    3rd Place
                    <span className="text-red-500 font-bold"> (Nov 2025)</span>
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1j3BpABp2EKx2KNrIE8SoS0EOW49FqHC2/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 bg-red-500 py-1 px-2 text-red-100 rounded-sm hover:bg-red-900 text-xl cursor-pointer"
                  >
                    Certificate ↗
                  </a>
                </div>
                <div className="text-white mt-23">
                  <h4 className="font-semibold text-2xl">
                    SLP UNESA - Web Development
                  </h4>
                  <p className="text-red-500">Individual Competition</p>
                  <p className="mb-2">
                    3rd Place
                    <span className="text-red-500 font-bold"> (July 2025)</span>
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1j3BpABp2EKx2KNrIE8SoS0EOW49FqHC2/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 bg-red-500 py-1 px-2 text-red-100 rounded-sm hover:bg-red-900 text-xl cursor-pointer"
                  >
                    Certificate ↗
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
