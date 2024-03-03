"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { ReactTyped } from "react-typed";
import ProjectsSection from "./components/ProjectsSection";
import Background from "./components/Background";
import { useEffect } from "react";
import ContactSection from "./components/ContactSection";

export default function Home() {
  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.background}>
        <h1>
          <ReactTyped
            strings={["Enchanté, je suis Liam Le Ny"]}
            typeSpeed={30}
          />
        </h1>
        <Background />
      </div>
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
