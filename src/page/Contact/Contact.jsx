import github from "../../assets/contact/github.svg";
import linkedin from "../../assets/contact/linkedin.svg";

function Contact() {
  return (
    <div className="relative z-10 px-40 mt-30">
      <div className="flex flex-col items-start">
        <h3 className="text-white">Get in</h3>
        <h1 className="text-white font-bold text-4xl">Touch</h1>
        <hr></hr>
        <div className="bg-red-500 w-20 h-1 mt-2"></div>
      </div>

      <div className="mt-10 mb-40">
        <p className="text-gray-100 text-lg">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out to me
          at email : <br></br>
        </p>
        <p className="text-red-500 text-lg mt-6 font-semibold">
          muhammadjulian254@gmail.com
        </p>
        <br></br>
        <p className="text-gray-100 text-lg">
          You can also connect with me on some of platforms here:
        </p>
        <div>
          <a
            className="flex flex-row items-center"
            href="https://github.com/mhmd7ull"
          >
            <img src={github} className="mr-4 mt-4 w-10 h-10" />
            <p className="text-red-100 mt-5">GitHub</p>
          </a>
          <a
            className="flex flex-row items-center"
            href="https://www.linkedin.com/in/Mhmd7ull/"
          >
            <img src={linkedin} className="mr-4 mt-4 w-10 h-10" />
            <p className="text-red-100 mt-5">LinkedIn</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
