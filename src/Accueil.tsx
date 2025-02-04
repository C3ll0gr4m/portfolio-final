import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import chaussures from "./assets/chaussures.png";
import courses from "./assets/courses.png";
import graphe from "./assets/graphes.png";
import peninsule from "./assets/peninsule.png";
import portrait from "./assets/portrait.jpg";
import poster from "./assets/poster.png";
import powerbi from "./assets/powerbi.png";
import quizz from "./assets/quizz.png";
import { Header } from "./Header.tsx";
import { AccueilProjet } from "./Projet.tsx";

const projects = [
  {
    image: graphe,
    name: "GraphRescue",
    technologies: ["Java", "Git"],
    summary:
      "Un projet Java de gestion de graphes permettant à une ambulance d'aller d'un point A à un point B le plus vite possible",
  },
  {
    image: peninsule,
    name: "Péninsule",
    technologies: [
      "HTML",
      "CSS",
      "Sveltejs",
      "Python",
      "PostgreSQL",
      "Figma",
      "Git",
    ],
    summary:
      "Une boutique en ligne de fournitures scolaires permettant d'acheter ou de créer des annonces",
  },
  {
    image: chaussures,
    name: "CustomKicks",
    technologies: ["HTML", "CSS", "Git"],
    summary:
      "Un site de vente de chaussures en ligne permettant également de les customiser via des formulaires Web",
  },
  {
    image: courses,
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
    image: quizz,
    name: "FlagQuizz",
    technologies: ["Java", "Git"],
    summary:
      "Un quizz Java dont l'objectif est de deviner le nom d'un pays parmi 4 propositions à l'aide de son drapeau",
  },
  {
    image: powerbi,
    name: "Rapports Power BI",
    technologies: ["PowerBi"],
    summary:
      "Des rapports de données réalisés avec Power BI en suivant précisément les spécifications données par le client",
  },
  {
    image: poster,
    name: "Poster - la simulation informatique",
    technologies: ["Canva"],
    summary:
      "Un poster réalisé avec Canva démontrant et expliquant la simulation informatique dans la recherche scientifique",
  },
];

export function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="mb-12">
      <div className="h-screen">
        <Header />
        <div className="flex justify-center p-4"></div>
        <div className="grid w-full grid-cols-2 items-center min-h-64 divide-x-2">
          <div className="flex flex-col items-end pr-8">
            <h1 className="text-slate-500 text-7xl font-semibold">Jules Vic</h1>
            <h1 className="text-slate-500 text-7xl font-semibold">
              Développeur
            </h1>
            <h1 className="text-slate-500 text-7xl font-semibold">fullstack</h1>
          </div>
          <img src={portrait} alt="Photo" className="rounded-xl w-96 h-auto" />
        </div>
        <div className="px-48 w-full grid grid-cols-2 my-32 justify-center items-center ">
          <div className="w-full flex justify-end pr-8">
            <h1 className="text-slate-500 text-7xl font-semibold">
              Qui suis-je ?
            </h1>
          </div>
          <p className="w-2/3 opacity-95 text-slate-500 text-xl">
            Je m&apos;appelle Jules Vic et suis actuellement étudiant en
            troisième année de BUT Informatique. Je suis en alternance chez
            l'éditeur de solution de courtage LyaProtect, chez qui je
            perfectionne mes compétences React, SpringBoot et Agile. Passionné
            par les nouvelles technologies depuis des années, j&apos;aime
            explorer de nouveaux domaines et enrichir mes connaissances. Curieux
            et motivé, je suis toujours prêt à relever de nouveaux défis.
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
