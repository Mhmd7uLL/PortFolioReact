import { Link } from "react-router-dom";

function Navbar() {
  return (
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
              <Link to="/">About</Link>
            </li>
            <li className="hover:text-red-600 transition duration-300">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="hover:text-red-600 transition duration-300">
              <Link to="/about">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
