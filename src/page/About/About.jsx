function Education() {
    return (
        <div className="mt-30 px-37 py-10 bg-gray-700 w-235 h-96 rtl rounded-lg" id="edu">
        <div className="flex flex-col items-start">
          <h3 className="text-white">My</h3>
          <h1 className="text-white font-bold text-4xl">Education</h1>
          <hr></hr>
          <div className="bg-red-500 w-20 h-1 mt-2"></div>
        </div>

        <div className="mt-15 flex flex-row items-start space-x-10">
          <div>
            <div className="bg-red-500 w-5 h-5 rounded-full mb-1 animate-pulse"></div>
            <div className="h-20 border-l-3 border-white ml-2"></div>
            <div className="bg-gray-900 w-5 h-5 border-2 border-red-700 rounded-full mt-1"></div>
          </div>
          <div>
            <div className="text-white">
              <h4 className="font-semibold">Surabaya State University</h4>
              <p>
                Bachelor of Informatics Engineering
                <span className="font-bold text-red-500">
                  {" "}
                  (2024 - Present)
                </span>
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

    );
}

export default Education;