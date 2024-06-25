import { AccueilProjet } from "./Projet.jsx";
import { Header } from "./Header.jsx";

const projects = [
  {
    image: "https://via.placeholder.com/400x300",
    name: "GraphRescue",
    technologies: ["Java", "Git"],
    summary:
      "Un projet Java de gestion de graphes permettant à une ambulance d'aller d'un point A à un point B le plus vite possible",
  },
  {
    image: "https://via.placeholder.com/400x300",
    name: "Péninsule",
    technologies: [
      "HTML",
      "CSS",
      "Sveltejs",
      "Python",
      "PostgreSQL",
      "Figma",
      "Git"
    ],
    summary:
      "Une boutique en ligne de fournitures scolaires permettant d'acheter ou de créer des annonces",
  },
  {
    image: "https://via.placeholder.com/400x300",
    name: "CustomKicks",
    technologies: ["HTML", "CSS", "Git"],
    summary:
      "Un site de vente de chaussures en ligne permettant également de les customiser via des formulaires Web",
  },
  {
    image: "https://via.placeholder.com/400x300",
    name: "SmartCart",
    technologies: [
      "HTML",
      "TailwindCSS",
      "JavaScript",
      "PHP - Symfony",
      "Twig",
      "MySQL",
      "Figma",
      "Git",
    ],
    summary:
      "Un projet de gestion d'une liste de courses permettant à un utilisateur de créer, organiser et modifier ses listes de courses.",
  },
  {
    image: "https://via.placeholder.com/400x300",
    name: "FlagQuizz",
    technologies: ["Java", "Git"],
    summary:
      "Un quizz Java dont l'objectif est de deviner le nom d'un pays parmi 4 propositions à l'aide de son drapeau",
  },
  {
    image: "https://via.placeholder.com/400x300",
    name: "Gestion d'annuaire",
    technologies: ["C", "Git"],
    summary:
      "Un projet réalisé en C dont le but est de réaliser une application de gestion d'annuaire, permettant de supprimer les utilisateurs invalides, ou de filtrer les utilisateurs par mail",
  },
  {
    image: "https://via.placeholder.com/400x300",
    name: "Rapports Power BI",
    technologies: ["PowerBi"],
    summary: "Des rapports de données réalisés avec Power BI en suivant précisément les spécifications données par le client"
  },
  {
    image: "https://via.placeholder.com/400x300",
    name: "Poster - la simulation informatique",
    technologies: ["Canva"],
    summary:
      "Un poster réalisé avec Canva démontrant et expliquant la simulation informatique dans la recherche scientifique",
  },
];

export function App() {
  return (
    <div className="mb-12">
      <div className="h-screen">
        <Header />
        <div className="flex justify-center p-4">
          <h1 className="cursor-pointer hover:bg-green-200 hover:ring-slate-500 duration-300 ease-in-out p-2 ring rounded ring-black  text-slate-500 text-5xl font-medium">
            Image de ma tête
          </h1>
        </div>
        <div className="flex w-full justify-center items-center min-h-64 divide-x-2">
          <div className="flex flex-col items-center pr-8">
            <h1 className="text-slate-500 text-7xl font-semibold">Jules Vic</h1>
            <h1 className="text-slate-500 text-7xl font-semibold">
              Développeur fullstack
            </h1>
          </div>
        </div>
        <div className="px-48 w-full flex justify-around mt-32">
          <h1 className="text-slate-500 text-7xl font-semibold">
            Qui suis-je ?
          </h1>
          <p className="max-w-96 opacity-95 text-slate-500">
            Je m&apos;appelle Jules Vic et suis actuellement étudiant en
            deuxième année de BUT Informatique. Passionné par les nouvelles
            technologies depuis des années, j&apos;aime explorer de nouveaux
            domaines et enrichir mes connaissances. Curieux et motivé, je suis
            toujours prêt à relever de nouveaux défis.
          </p>
        </div>
      </div>
      <div id="projets">
        <h1 className="text-slate-500 text-7xl font-semibold px-96 py-12">
          Mes projets
        </h1>
        <div className="w-full flex justify-center flex-wrap">
          {projects.map((project, index) => (
            <AccueilProjet
              key={index}
              image={project.image}
              name={project.name}
              technologies={project.technologies}
              summary={project.summary}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
