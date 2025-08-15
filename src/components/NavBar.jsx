import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { MdDarkMode } from "react-icons/md";
import { IoSunny } from "react-icons/io5";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ProductContext);

  return (
    <nav className="border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Flowbite
          </span>
        </a>
        <ul className="flex space-x-8">
          <li>Home</li>
          <li>About</li>
          <li>News</li>
          <li>Profile</li>
          <li>
            <button onClick={toggleTheme}>{theme === "light " ? <MdDarkMode /> : <IoSunny />}</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
