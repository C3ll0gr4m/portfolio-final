import React from "react";
import Accordion from "./Accordion.tsx";
import { Header } from "./Header.tsx";

export function Competences() {
  return (
    <div className="w-full min-h-screen mb-12">
      <Header />
      <div className="flex  flex-col items-center">
        <div
          id="titre"
          className="mt-4 w-4/5 flex flex-col items-center p-6 rounded-xl bg-slate-100 shadow-lg"
        >
          <h1 className="text-slate-500 text-7xl font-semibold my-8">
            Mes compétences
          </h1>
          <p className="opacity-95 text-slate-500 text-xl">
            Les compétences que j&apos;ai acquises au cours de mon cursus en IUT
            informatique
          </p>
        </div>
      </div>

      <Accordion title="Réaliser">
        <div className="p-6 space-y-4 text-gray-700">
          <div className="space-y-2">
            <p className="font-semibold text-lg">Niveau 1 :</p>
            <p>Développer des applications informatiques simples.</p>
          </div>
          <div className="space-y-2 bg-yellow-100 rounded-lg p-4">
            <p className="font-semibold text-lg">Niveau 2 :</p>
            <p>
              Partir des exigences et aller jusqu’à une application complète.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-lg">Niveau 3 :</p>
            <p>
              Adapter des applications sur un ensemble de supports (embarqué,
              web, mobile, IoT...).
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">
              Exemples d&apos;apprentissage :
            </h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Implémenter des conceptions simples.</li>
              <li>
                Adopter de bonnes pratiques de conception et de programmation
              </li>
              <li>Faire évoluer une application existante</li>
            </ul>
          </div>
        </div>
      </Accordion>

      <Accordion title="Optimiser">
        <div className="p-6 space-y-4 text-gray-700">
          <p>
            Optimiser les applications informatiques en fonction de critères
            spécifiques : temps d’exécution, précision, consommation de
            ressources...
          </p>
          <div className="space-y-2">
            <p className="font-semibold text-lg">Niveau 1 :</p>
            <p>Appréhender et construire des algorithmes.</p>
          </div>
          <div className="space-y-2 bg-yellow-100 rounded-lg p-4">
            <p className="font-semibold text-lg">Niveau 2 :</p>
            <p>
              Sélectionner les algorithmes adéquats pour répondre à un problème
              donné.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-lg">Niveau 3 :</p>
            <p>Analyser et optimiser des applications.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">
              Exemples de compétences associées :
            </h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Comparer des algorithmes pour des problèmes classiques (tris
                simples, recherche...).
              </li>
              <li>
                Choisir des structures de données complexes adaptées au
                problème.
              </li>
              <li>
                Profiler, analyser et justifier le comportement d’un code
                existant.
              </li>
            </ul>
          </div>
        </div>
      </Accordion>

      <Accordion title="Administrer">
        <div className="p-6 space-y-4 text-gray-700">
          <p>
            Installer, configurer, mettre à disposition, maintenir en conditions
            opérationnelles des infrastructures, des services et des réseaux et
            optimiser le système informatique d’une organisation.
          </p>
          <div className="space-y-2">
            <p className="font-semibold text-lg">Niveau 1 :</p>
            <p>Installer et configurer un poste de travail.</p>
          </div>
          <div className="space-y-2 bg-yellow-100 rounded-lg p-4">
            <p className="font-semibold text-lg">Niveau 2 :</p>
            <p>Déployer des services dans une architecture réseau.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">
              Exemples de compétences associées :
            </h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Installer et configurer un système d’exploitation et des outils
                de développement.
              </li>
              <li>Concevoir et développer des applications communicantes.</li>
              <li>Sécuriser les services et données d’un système.</li>
            </ul>
          </div>
        </div>
      </Accordion>

      <Accordion title="Gérer">
        <div className="p-6 space-y-4 text-gray-700">
          <p>
            Concevoir, gérer, administrer et exploiter les données de
            l’entreprise et mettre à disposition toutes les informations pour un
            bon pilotage de l’entreprise.
          </p>
          <div className="space-y-2">
            <p className="font-semibold text-lg">Niveau 1 :</p>
            <p>
              Concevoir et mettre en place une base de données à partir d’un
              cahier des charges client.
            </p>
          </div>
          <div className="space-y-2 bg-yellow-100 rounded-lg p-4">
            <p className="font-semibold text-lg">Niveau 2 :</p>
            <p>
              Optimiser une base de données, interagir avec une application et
              mettre en œuvre la sécurité.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">
              Exemples de compétences associées :
            </h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Concevoir une base de données relationnelle à partir d’un cahier
                des charges.
              </li>
              <li>
                Mettre à jour et interroger une base de données relationnelle
                (en requêtes directes ou à travers une application).
              </li>
              <li>
                Organiser la restitution de données à travers la programmation
                et la visualisation.
              </li>
            </ul>
          </div>
        </div>
      </Accordion>

      <Accordion title="Conduire">
        <div className="p-6 space-y-4 text-gray-700">
          <p>
            Satisfaire les besoins des utilisateurs au regard de la chaîne de
            valeur du client, organiser et piloter un projet informatique avec
            des méthodes classiques ou agiles.
          </p>
          <div className="space-y-2">
            <p className="font-semibold text-lg">Niveau 1 :</p>
            <p>
              Identifier les besoins métiers des clients et des utilisateurs.
            </p>
          </div>
          <div className="space-y-2 bg-yellow-100 rounded-lg p-4">
            <p className="font-semibold text-lg">Niveau 2 :</p>
            <p>
              Appliquer une démarche de suivi de projet en fonction des besoins
              métiers des clients et des utilisateurs.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">
              Exemples de compétences associées :
            </h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Identifier les acteurs et les différentes phases d’un cycle de
                développement.
              </li>
              <li>
                Identifier les critères de faisabilité d’un projet informatique.
              </li>
              <li>
                Définir et mettre en œuvre une démarche de suivi de projet.
              </li>
            </ul>
          </div>
        </div>
      </Accordion>

      <Accordion title="Collaborer">
        <div className="p-6 space-y-4 text-gray-700">
          <p>
            Acquérir, développer et exploiter les aptitudes nécessaires pour
            travailler efficacement dans une équipe informatique.
          </p>
          <div className="space-y-2">
            <p className="font-semibold text-lg">Niveau 1 :</p>
            <p>Identifier ses aptitudes pour travailler dans une équipe.</p>
          </div>
          <div className="space-y-2 bg-yellow-100 rounded-lg p-4">
            <p className="font-semibold text-lg">Niveau 2 :</p>
            <p>
              Situer son rôle et ses missions au sein d’une équipe informatique.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-lg">Niveau 3 :</p>
            <p>Manager une équipe informatique.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">
              Exemples de compétences associées :
            </h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Identifier les statuts, les fonctions et les rôles de chaque
                membre d’une équipe pluridisciplinaire.
              </li>
              <li>
                Mobiliser les compétences interpersonnelles pour travailler dans
                une équipe informatique.
              </li>
              <li>Accompagner le management de projet informatique.</li>
            </ul>
          </div>
        </div>
      </Accordion>
    </div>
  );
}
