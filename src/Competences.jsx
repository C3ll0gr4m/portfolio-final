import { Header } from "./Header.jsx";

export function Competences() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <div className="flex  flex-col items-center">
        <div
          id="titre"
          className="mt-4 w-4/5 flex flex-col items-center p-6 rounded-xl bg-slate-100 shadow-lg"
        >
          <h1 className="text-slate-500 text-7xl font-semibold my-8">
            Mes compétences
          </h1>
          <p className="opacity-95 text-slate-500">
            Les compétences que j&apos;ai acquises au cours de mon cursus en IUT
            informatique
          </p>
        </div>
      </div>

      <div id="acordions" className="w-full flex flex-col items-center">
        <div className="shadow-lg w-4/5 h-24 bg-slate-100 flex justify-between py-4 px-8 mt-8 items-center rounded-lg cursor-pointer">
            <p>Titre</p>
            <img src="/src/assets/fleche-droite.png" alt="fleche" className="rotate-90 duration-300 ease-in-out h-4 hover:-rotate-90" />
        </div>
      </div>
    </div>
  );
}
