"use client";
import React, { useRef } from "react";
import localFont from "next/font/local";
import styles from "./ProjectsSection.module.css";
import { motion, useInView } from "framer-motion";

import ProjectCard from "./ProjectCard";

const myFont = localFont({ src: "../fonts/DevilBreezeLight.ttf" });

const projectsData = [
  {
    id: 1,
    title: "Punto",
    description:
      "Implémentation du jeu de société Punto avec 4 bases de données",
    tags: ["React", "MySQL", "MongoDB", "SQLite", "Neo4j"],
    gitUrl: "https://github.com/liam-leny/Punto",
    previewUrl: "/",
    year: "2023",
  },
  {
    id: 2,
    title: "Site web météo",
    description: "Site web de prévisions météo",
    tags: ["Vue"],
    gitUrl: "https://github.com/Flavinho27/R4.10",
    previewUrl: "/",
    year: "2023",
  },
  {
    id: 3,
    title: "SportTrack",
    description: "Site web permettant un suivi d'activités sportives",
    tags: ["HTML", "CSS", "PHP", "SQLite"],
    gitUrl: "https://github.com/augustin-pasq/SportTrack",
    previewUrl: "/",
    year: "2022",
  },
  {
    id: 4,
    title: "PNR",
    description:
      "Application de bureau de saisie d'observations de faune locale",
    tags: ["Java", "MySQL"],
    gitUrl: "https://github.com/augustin-pasq/SAE-PNR",
    previewUrl: "/",
    year: "2022",
  },
  {
    id: 5,
    title: "Collège Numérique 56",
    description: "Site vitrine pour l'opération Collège Numérique 56",
    tags: ["HTML", "CSS", "JavaScript"],
    gitUrl: "https://github.com/augustin-pasq/College-Numerique-56",
    previewUrl: "/",
    year: "2022",
  },
  {
    id: 6,
    title: "Application ToDo Android",
    description: "Application Android de gestion des tâches",
    tags: ["Android", "Java"],
    gitUrl: "https://github.com/liam-leny/ToDo-App-Android",
    previewUrl: "/",
    year: "2023",
  },
  {
    id: 7,
    title: "Nuit de l'info",
    description: "Site web réalisé à l'édition 2023 de la Nuit de l'Info",
    tags: ["React", "PHP"],
    gitUrl: "https://github.com/ShockedPlot7560/nuit-info-2023",
    previewUrl: "/",
    year: "2023",
  },
  {
    id: 8,
    title: "Projet NoSQL",
    description:
      "Panneau d'administration/Catalogue pour un concessionaire automobile",
    tags: ["React", "MongoDB"],
    gitUrl: "https://github.com/augustin-pasq/Projet-NoSQL",
    previewUrl: "/",
    year: "2023",
  },
  {
    id: 9,
    title: "Jeu du pendu",
    description:
      "Un site web permettant de jouer au jeu du pendu tout seul ou à deux",
    tags: ["React"],
    gitUrl: "https://github.com/liam-leny/Pendu",
    previewUrl: "/",
    year: "2023",
  },
  {
    id: 9,
    title: "Jeu du Simon",
    description: "Un site web permettant de jouer au jeu du Simon tout seul",
    tags: ["React"],
    gitUrl: "https://github.com/liam-leny/Simon",
    previewUrl: "/",
    year: "2023",
  },
  {
    id: 10,
    title: "liamleny.fr",
    description: "Portfolio",
    tags: ["React", "Next"],
    gitUrl: "https://github.com/liam-leny/Portfolio",
    previewUrl: "/",
    year: "2024",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  // Trie les projets par année (du plus récent au plus ancien)
  const sortedProjects = projectsData
    .slice()
    .sort((a, b) => b.year.localeCompare(a.year));

  return (
    <div className={styles.projects}>
      <h1 className={myFont.className}>&quot;PROJETS&quot;</h1>
      <ul ref={ref} className={styles.containeur}>
        {sortedProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              tags={project.tags}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              year={project.year}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsSection;
