function Contact() {
  return (
    <div className="px-40 mt-40">
      <div className="flex flex-col items-start">
        <h3 className="text-white">Get in</h3>
        <h1 className="text-white font-bold text-4xl">Touch</h1>
        <hr></hr>
        <div className="bg-red-500 w-20 h-1 mt-2"></div>
      </div>

        <div className="mt-10 mb-40">
            <p className="text-gray-300 text-lg">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me via email at
                <span className="text-red-500 font-bold">
                    {" "}
                    mhmd7ull@gmail.com
                </span>
            </p>
        </div>
    </div>
  );
}

export default Contact;
