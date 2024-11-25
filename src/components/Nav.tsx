import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import ThemeWrapper from "./ThemeWrapper";
import NavLink from "@/components/NavLink";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeWrapper className="shadow-lg fixed w-full z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <NavLink href="/">Ashwin Temkar</NavLink>
            </h1>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-customBlack dark:bg-darkGray inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 dark:hover:bg-lightGray focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeSwitcher />
          </div>
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#jobs">Experience</NavLink>
              <NavLink href="#projects">Work</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
            <div className="ml-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-customBlack dark:bg-darkGray text-white hover:bg-gray-700 dark:hover:bg-lightGray px-3 py-2 rounded-md text-sm font-medium"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#jobs">Experience</NavLink>
          <NavLink href="#projects">Work</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <NavLink href="/resume.pdf">Resume</NavLink>
        </div>
      </div>
    </ThemeWrapper>
  );
};

export default Nav;
