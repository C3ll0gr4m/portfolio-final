import { Link, Outlet } from "react-router-dom";

export function Header() {
  return (
    <>
      <div className="mx-12 h-20 border-b-2 border-grey-500 border-opacity-20 flex items-center justify-end mr-28">
        <div className="flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-400 font-medium text-2xl hover:text-gray-500 duration-150 ease-in-out"
          >
            Accueil
          </Link>{" "}
          <Link
            to="/"
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
            to="/competences"
            className="text-gray-400 font-medium text-2xl hover:text-gray-500 duration-150 ease-in-out"
          >
            A propos de moi
          </Link>
          <Link
            to="https://www.linkedin.com/in/jules-vic-332b33251/"
            className="hover:text-gray-500 duration-150 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={"../src/assets/linkedin.jpg"}
              alt="LinkedIn"
              className="h-8 w-8 rounded-xl"
            />
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
