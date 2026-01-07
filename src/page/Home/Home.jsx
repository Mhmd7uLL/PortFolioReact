// Importing assets for contact
import github from "../../assets/contact/github.svg";
import instagram from "../../assets/contact/instagram.svg";
import linkedin from "../../assets/contact/linkedin.svg";


function About () {
    return (
        <header
                className="flex flex-row justify-evenly items-center text-white mt-30 h-96"
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
    );
}

export default About;