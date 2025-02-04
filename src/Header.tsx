import React from "react";
import { Link, Outlet } from "react-router-dom";
import linkedin from "./assets/linkedin.jpg";
import portfolio from "./assets/Portfolio.png";

export function Header() {
  return (
    <>
      <div className="mx-12 h-20 border-b-2 border-grey-500 border-opacity-20 flex items-center justify-between mr-28">
        <img src={portfolio} alt="Portfolio" className="rounded-xl" />
        <div className="flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-400 font-medium text-2xl hover:text-gray-500 duration-150 ease-in-out"
          >
            Accueil
          </Link>{" "}
          <Link
            to="/#projets"
            className="text-gray-400 font-medium text-2xl hover:text-gray-500 duration-150 ease-in-out"
          >
            Projets
          </Link>
          <Link
            to="/competences"
            className="text-gray-400 font-medium text-2xl hover:text-gray-500 duration-150 ease-in-out"
          >
            Compétences
          </Link>
          <Link
            to="https://www.linkedin.com/in/jules-vic-332b33251/"
            className="hover:text-gray-500 duration-150 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" className="h-8 w-8 rounded-xl" />
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
