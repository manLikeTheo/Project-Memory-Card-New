import React from "react";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="flex justify-center items-center gap-10 border-t-2 border-gray-400  py-2 w-full bg-gradient-to-tr from-fuchsia-700 to-purple-900">
      <p className="text-lg font-semibold text-white">
        Copyright &copy; {new Date().getFullYear()}
      </p>
      <span className="text-white hover:scale-90">
        <a href="https://github.com/manLikeTheo/Project-Memory-Card-New">
          <FaGithub size={30} />
        </a>
      </span>
    </footer>
  );
};

export default Footer;
